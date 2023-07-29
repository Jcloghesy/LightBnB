# LIGHTBNB PROJECT

## INTRODUCTION

LightBnB is an app that leverages the new sharing economy and is the best app 
allowing both homeowners and vacationers an efficient online platform to manage their vacation rentals. 
The application allows a homeowners to advertise and book 
rentals and allows vacationer to easily find an book the perfect place to stay while on vacation. 


***Properties Main***
[properties][properties] 


***Create Listing***
[createListing][createListing]

This project is built on a template supplied by [lighthouse labs][Lighthouse Labs - GitHub]
&nbsp;


## TABLE OF CONTENT

- [LIGHTBNB PROJECT](#lightbnb-project)
  - [INTRODUCTION](#introduction)
  - [TABLE OF CONTENT](#table-of-content)
  - [USAGE](#usage)
    - [INSTALLATION: REPOSITORY \& DEPENDENCIES](#installation-repository--dependencies)
    - [LAUNCH WEB SERVER \& VIEW IN BROWSER](#launch-web-server--view-in-browser)
  - [FEATURES \& FUNCTIONALITY](#features--functionality)
    - [FEATURES](#features)
    - [TECHNOLOGIES EMPLOYED](#technologies-employed)
    - [TECHNOLOGIES EMPLOYED](#technologies-employed-1)
    - [ENTITY RELATIONSHIP DIAGRAMS (ERDs): Created \& Supplied](#entity-relationship-diagrams-erds-created--supplied)
  - [FILE AND FOLDERS](#file-and-folders)
- [properties: /docs/properties.png](#properties-docspropertiespng)

&nbsp;


## USAGE

### INSTALLATION: REPOSITORY & DEPENDENCIES
  
  1. Repository Cloning 
      - Clone this repository onto your local device using the following command <br>
        ``` 
        git clone https://github.com/Jcloghesy/LightBnB
        ```
  2. Dependencies Installed 
      - In code editor (e.g., VS Code)
      - Navigate to the LightBnB_WebApp directory
      - Install dependencies with the following command <br>
        ```
        npm install
        ```
&nbsp;

### LAUNCH WEB SERVER & VIEW IN BROWSER

  1. Launch Web Sever 
      - Start the application's web server using the following command
        ```
        npm run local
        ```
  
  2. Launch Browser
      - View he following link in browser to access application <br>
        http://localhost:3000/

      (Additional information is available in a separate [webApp_README.md][webApp_README.md] file)
      
***[back to top](#table-of-content)***
&nbsp;


## FEATURES & FUNCTIONALITY
  
### FEATURES
  
  - **Property Search:**  Search rentals using criteria (location, dates, etc.)
  - **Property Viewing:** View detailed property information & images
  - **Reservation:**      Check availability of a property on desired dates
  - **User Profiles:**    Personal account to manage bookings and preferences
  - **Listing Creation:** Homeowners can easily create property listings with
       detailed information (type, amenities, location, pricing, availability)


&nbsp;


### TECHNOLOGIES EMPLOYED
    
| Home Page                     | Repository / Wiki               |
|  :--:                         |  :--:                           |
|  [CSS][CSS]                   |  [CSS.W3][CSS.W3]               | <br>
|  [HTML][HTML]                 |  [HTML.w3][HTML.w3]             | <br>
|  [JavaScript][JavaScript]     |  [JavaScript.w3][JavaScript.w3] | <br>
|  [Node.js][node.org]          |  [`Node.js`][node.git]          | <br>
|  [Express][express.git]       |  [`Express`][express.git]       | <br>
|  [PostgreSQL][PostgreSQL.org] |  [PostgreSQL][PostgreSQL]       | <br

***[back to top](#table-of-content)***
&nbsp;


### TECHNOLOGIES EMPLOYED
    
| Home Page                     | Repository / Wiki               |
|  :--:                         |  :--:                           |
|  [CSS][CSS]                   |  [CSS.W3][CSS.W3]               | <br>
|  [HTML][HTML]                 |  [HTML.w3][HTML.w3]             | <br>
|  [JavaScript][JavaScript]     |  [JavaScript.w3][JavaScript.w3] | <br>
|  [Node.js][node.org]          |  [`Node.js`][node.git]          | <br>
|  [Express][express.git]       |  [`Express`][express.git]       | <br>
|  [PostgreSQL][PostgreSQL.org] |  [PostgreSQL][PostgreSQL]       | <br

***[back to top](#table-of-content)***
&nbsp;


### ENTITY RELATIONSHIP DIAGRAMS (ERDs): Created & Supplied

  1. Developed by Student (using Lucidcharts online) <br>
    [diagramERDStudent][diagramERDStudent] 
  1. Provide by LHL  
    [diagramERDSLhl][diagramERDLhl] <br>
  
  (screen captures of both ERD diagrams located in docs folder)

***[back to top](#table-of-content)***
&nbsp;

## FILE AND FOLDERS 

<pre>
📦LightBnB
 ┣ 📂1_queries
 ┃ ┣ 📜01_user_login.sql
 ┃ ┣ 📜02_average_length_reservation.sql
 ┃ ┣ 📜03_property_listings_by_city.sql
 ┃ ┣ 📜04_most_visited_cities.sql
 ┃ ┗ 📜05_all_my_reservations.sql
 ┣ 📂LightBnB_WebApp-master 
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📂json
 ┃ ┃ ┃ ┣ 📜properties.json
 ┃ ┃ ┃ ┗ 📜users.json
 ┃ ┃ ┃┗📜database.js
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂javascript
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜header.js
 ┃ ┃ ┃ ┃ ┣ 📜login_form.js
 ┃ ┃ ┃ ┃ ┣ 📜new_property_form.js
 ┃ ┃ ┃ ┃ ┣ 📜property_listing.js
 ┃ ┃ ┃ ┃ ┣ 📜property_listings.js
 ┃ ┃ ┃ ┃ ┣ 📜search_form.js
 ┃ ┃ ┃ | ┗ 📜signup_form.js
 ┃ ┃ ┃ ┣ 📂libraries
 ┃ ┃ ┃ ┃ ┣ 📂addressfield
 ┃ ┃ ┃ ┃ ┃ ┣ 📜addressfield.min.json
 ┃ ┃ ┃ ┃ ┃ ┗ 📜jquery.addressfield.min.js
 ┃ ┃ ┃ ┃ ┣ 📜jquery-3.4.0.min.js
 ┃ ┃ ┃ ┃ ┗ 📜moment.js
 ┃ ┃ ┃ ┃┣ 📜index.js
 ┃ ┃ ┃ ┃┣ 📜network.js
 ┃ ┃ ┃ ┃┗ 📜views_manager.js
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜main.css
 ┃ ┃ ┃ ┗ 📜main.css.map
 ┃ ┃ ┃┗ 📜index.js
 ┃ ┃ ┣ 📂routes 
 ┃ ┃ ┃ ┣ 📜apiRoutes.js
 ┃ ┃ ┃ ┗ 📜userRoutes.js 
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜_forms.scss
 ┃ ┃ ┃ ┣ 📜_header.scss
 ┃ ┃ ┃ ┣ 📜_property-listings.scss
 ┃ ┃ ┃ ┗ 📜main.scss
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜_forms.scss
 ┃ ┃ ┃ ┣ 📜_header.scss
 ┃ ┃ ┃ ┣ 📜_property-listings.scss
 ┃ ┃ ┃┗ 📜main.scss
 ┣ 📂migrations
 ┃ ┗ 📜01_schema.sql 
 ┣ 📂seeds
 ┃ ┣ 📜01_seeds.sql
 ┃ ┗ 📜02_seeds.sql
 ┃┗ 📜README.md
</pre>

[back to top](#table-of-content)
&nbsp;


<!-- REFERENCE LINKS -->

<!-- Dependencies -->  
  [node.org]: https://nodejs.org/en
  [node.git]: https://github.com/nodejs/node

  [express.org]: https://expressjs.com/  
  [express.git]: https://github.com/expressjs/express  
  
  [ejs.org]: https://ejs.co/
  [ejs.npmjs]: https://www.npmjs.com/package/ejs
 
  [CSS]: https://en.wikipedia.org/wiki/CSS 
  [CSS.W3]: https://www.w3schools.com/css/default.asp
   
  [HTML]: https://en.wikipedia.org/wiki/HTML
  [HTML.w3]: https://www.w3schools.com/html/html_entities.asp
    
  [HTML]: https://en.wikipedia.org/wiki/HTML
  [HTML.w3]: https://www.w3schools.com/html/html_entities.asp

  [JavaScript]: https://en.wikipedia.org/wiki/javascript 
  [JavaScript.w3]: https://www.w3schools.com/js/default.asp
  [PostgreSQL.org]: https://www.postgresql.org/
  [PostgreSQL]: https://en.wikipedia.org/wiki/PostgreSQL
   
<!-- Additional Website Links -->
[Lighthouse Labs - GitHub]: https://github.com/lighthouse-labs

<!-- Images - Screen Captures & Logos, etc  -->
[properties]: /docs/properties.png
<<<<<<< d1e429f1d78342704d1d5b29d1449106546ee8ab
[diagramERDStudent]: /docs/diagramERDStudent.png
[diagramERDLhl]: /docs/diagramERDLhl.png
[createListing]: /docs/createListing.png
[properties]: /docs/properties.png
[properties]: /docs/properties.png
=======
[createListing]: /docs/createListing.png
>>>>>>> Code Organization: Document Applications Setup | Include screen shots
[webApp_README.md]: /LightBnB/LightBnB_WebApp-master/README.md