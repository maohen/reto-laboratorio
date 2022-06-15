Reto técnico - -Laboratorio APP
===============

Is developed using:

* React js
* Typescript
* Material UI
* Styled components
* React Router Dom
* Axios

Installation and basic usage
----------------------------

To start using this setup you need to clone locally the repository, and install all node.js dependencies, in the project directory, you can run:

npm start
-----

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.


npm run build
-----

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

npm test
-----
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.


-----

##  Documentation of use

- **Navigation menu**: contains the routes of the app, the user's ip is shown in the menu.
- **Home:** 
Form to add data per patient. Name, document, fat, sugar and oxygen level fields with valid values between 0-100 are required.
The save button validates the fields and if they are not complete the respective error message is displayed, if they are valid it displays the message corresponding to the level of health regarding the level of fat, sugar and oxygen, the information is saved in the browser's db to be consulted in the patient consultation module.
- **Consult patients:** 
When loading the module, the information of all the patients that have been added is displayed in the table (this information is found in the browser's db).
The search button filters for matches between the document added in the filter field and the database. If blank, it will fetch all records.
