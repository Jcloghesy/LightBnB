//  ========================================================================= 
//  ==-------------------        DATABASE.JS      -------------------------== 
//  =========================================================================

//  =====================   REQUIRED / IMPORTS    =========================== 
  //  required             --------------------------------------------------  
    const properties = require("./json/properties.json");
    const users = require("./json/users.json");
    const { Pool } = require("pg");

  //  new pool             -------------------------------------------------- 
    const pool = new Pool({
      user     : "labber",
      password : "labber",
      host     : "localhost",
      database : "lightbnb",
    });

  //  pool.query          -------------------------------------------------- 
    pool.query(`SELECT title FROM properties LIMIT 10;`)
      .then(response => { console.log(response) })
      .catch(err => console.log(err));

//  =====================          USERS          ===========================   
//  getUserWithEmail    *-------------------------------------------------- 
  /**  
   * Get a single user from the database given their email
   * @param {String} email The email of the user
   * @return {Promise<{}>} A promise to the user
   */
  const getUserWithEmail = function (email) {
    let resolvedUser = null;
    for (const userId in users) {
      const user = users[userId];
      if (user?.email.toLowerCase() === email?.toLowerCase()) {
        resolvedUser = user;
      }
    }
    return Promise.resolve(resolvedUser);
  };

//  getUserWithId       *-------------------------------------------------- 
  /**
   * Get a single user from the database given their id
   * @param {string} id The id of the user
   * @return {Promise<{}>} A promise to the user
   */
  const getUserWithId = function (id) {
    return Promise.resolve(users[id]);
  };
  
    /**
      const getUserWithId = function (id) {
//  addUser             --------------------------------------------------- 
  /**
   * Add a new user to the database
   * @param {{name: string, password: string, email: string}} user
   * @return {Promise<{}>} A promise to the user
   */
  const addUser = function (user) {
    const userId = Object.keys(users).length + 1;
    user.id = userId;
    users[userId] = user;
    return Promise.resolve(user);
  };


//  =====================       RESERVATIONS      ===========================
//  getAllReservations  *-------------------------------------------------- 
  /**
   * Get all reservations for a single user
   * @param {string} guest_id The id of the user
   * @return {Promise<[{}]>} A promise to the reservations
   */
  const getAllReservations = function (guest_id, limit = 10) {
    return getAllProperties(null, 2);
  }
      };


//  =====================       PROPERTIES        =========================== 
//  getAllProperties    UPDATED -------------------------------------------
  /**
   * Get all properties
   * @param {{}} options An object containing query options
   * @param {*} limit the number of results to return
   * @return {Promise<[{}]>}  a promise to the properties
   */
  const getAllProperties = (options, limit = 10) => {
    return pool
      .query(`SELECT * FROM properties LIMIT $1`, [limit])
      .then((result) => {
        console.log(result.rows);
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
  });

//  addProperty         -------------------------------------------------- 
  /**
   * Add a property to the database
   * @param {{}} property An object containing all of the property details
   * @return {Promise<{}>} A promise to the property
   */
  const addProperty = function (property) {
    const propertyId = Object.keys(properties).length + 1;
    property.id = propertyId;
    properties[propertyId] = property;
    return Promise.resolve(property);
  };
  
  

//  =====================     MODULE EXPORTS      ===========================  
//  module.exports      -------------------------------------------------- 
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