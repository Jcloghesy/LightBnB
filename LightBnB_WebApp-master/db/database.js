//  ========================================================================= 
//  ==-------------------        DATABASE.JS      -------------------------== 
//  =========================================================================

//  =====================   REQUIRED / IMPORTS    =========================== 
//  required            *--------------------------------------------------  
  const properties = require("./json/properties.json");
  const users = require("./json/users.json");
  const { Pool } = require("pg");

//  new pool            *-------------------------------------------------- 
  const pool = new Pool({
    user     : "labber",
    password : "labber",
    host     : "localhost",
    database : "lightbnb",
  });

   /*//  pool.query     *-------------------------------------------------- 
    pool.query(`SELECT title FROM properties LIMIT 10;`)
      .then(response => { console.log(response) })
      .catch(err => console.log(err));
    */

//  =====================          USERS          ===========================   
//  getUserWithEmail    *--------------------------------------------------
  /**  
   * Get a single user from the database given their email
   * @param {String} email The email of the user
   * @return {Promise<{}>} A promise to the user
   */
  const getUserWithEmail = function (email) {
    return pool
      .query(`SELECT * FROM users WHERE email = $1`, [email])
      .then((user) => {
        console.log(user.rows[0]);
        return user.rows[0] || null;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

//  getUserWithId       *-------------------------------------------------- 
  /**
   * Get a single user from the database given their id
   * @param {string} id The id of the user
   * @return {Promise<{}>} A promise to the user
   */
  const getUserWithId = function (id) {
    return pool
      .query(`SELECT * FROM users WHERE id = $1`, [id])
      .then((user) => {
        console.log(user.rows[0]);
        return user.rows[0] || null;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

//  addUser             *-------------------------------------------------- 
  /**
   * Add a new user to the database
   * @param {{name: string, password: string, email: string}} user
   * @return {Promise<{}>} A promise to the user
   */
  const addUser = function (user) {
    return pool
      .query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`, [user.name, user.email, user.password])
      .then((user) => {
        console.log(user.rows[0]);
      return user.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

//  =====================       RESERVATIONS      ===========================
//  getAllReservations  *-------------------------------------------------- 
  /**
   * Get all reservations for a single user.
   * @param {string} guest_id The id of the user.
   * @return {Promise<[{}]>} A promise to the reservations.
   */
  const getAllReservations = function (guest_id, limit = 10) {
    return pool
      .query(`
      SELECT properties.*, reservations.start_date, AVG(property_reviews.rating) AS average_rating
      FROM reservations
      JOIN properties ON reservations.property_id = properties.id
      JOIN property_reviews ON properties.id = property_reviews.property_id
      WHERE reservations.guest_id = $1
      GROUP BY properties.id, reservations.id
      ORDER BY reservations.start_date
      LIMIT $2;
    `, [guest_id, limit])
      .then((res) => {
        console.log(res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

//  =====================       PROPERTIES        =========================== 
//  getAllProperties    *--------------------------------------------------
  /**
   * Get all properties.
   * @param {{}} options An object containing query options.
   * @param {*} limit The number of results to return.
   * @return {Promise<[{}]>}  A promise to the properties.
   */
  const getAllProperties = function (options, limit = 10) {
    const queryParams = [];
    let queryString = `
    SELECT properties.*, avg(property_reviews.rating) as average_rating
    FROM properties
    JOIN property_reviews ON properties.id = property_id
    `;
  
    if (options.city) {
      queryParams.push(`%${options.city}%`);
      queryString += `WHERE city LIKE $${queryParams.length} `;
    }
  
    if (options.owner_id) {
      queryParams.push(options.owner_id);
      queryString += `WHERE owner_id = $${queryParams.length} `;
    }
    
    if (options.minimum_price_per_night && options.maximum_price_per_night) {
      const minPriceInCents = options.minimum_price_per_night * 100;
      const maxPriceInCents = options.maximum_price_per_night * 100;
      queryParams.push(minPriceInCents, maxPriceInCents);
      queryString += `${queryParams.length === 2 ? 'WHERE' : 'AND'} cost_per_night >= $${queryParams.length - 1} AND cost_per_night <= $${queryParams.length} `;
    } else if (options.minimum_price_per_night) {
      const minPriceInCents = options.minimum_price_per_night * 100;
      queryParams.push(minPriceInCents);
      queryString += `${queryParams.length === 1 ? 'WHERE' : 'AND'} cost_per_night >= $${queryParams.length} `;
    } else if (options.maximum_price_per_night) {
      const maxPriceInCents = options.maximum_price_per_night * 100;
      queryParams.push(maxPriceInCents);
      queryString += `${queryParams.length === 1 ? 'WHERE' : 'AND'} cost_per_night <= $${queryParams.length} `;
    }
  
  
    queryString += `
    GROUP BY properties.id
    `;

    if (options.minimum_rating) {
      queryParams.push(options.minimum_rating);
      queryString += `HAVING AVG(property_reviews.rating) >= $${queryParams.length}`;
    }

    queryParams.push(limit);
    queryString += `
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
    `;
      
    console.log(queryString, queryParams);
    
    return pool.query(queryString, queryParams).then((res) => res.rows);
  };

//  addProperty         *--------------------------------------------------
/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
  const addProperty = function(property) {
    const queryParams = [
      property.owner_id, 
      property.title, 
      property.description, 
      property.thumbnail_photo_url, 
      property.cover_photo_url, 
      property.cost_per_night, 
      property.street, 
      property.city,
      property.province, 
      property.post_code, 
      property.country, 
      property.parking_spaces, 
      property.number_of_bathrooms, 
      property.number_of_bedrooms];

    return pool
    .query(
      `INSERT INTO properties(owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;`, queryParams
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message)
    });
  };


//  =====================     MODULE EXPORTS      ===========================  
//  module.exports     *-------------------------------------------------- 
  module.exports = {
    getUserWithEmail,
    getUserWithId,
    addUser,
    getAllReservations,
    getAllProperties,
    addProperty,
  };

//  =========================================================================
//  =========================================================================