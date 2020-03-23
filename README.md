# Node movie API

## Steps to run this project:

1. Run `npm install` command
2. Setup database settings inside `config/config.json` file
3. Add a `.env` file in your project root and add
``` sh
#.env
JWT_KEY=mySecretKey
```
4. Start the server with `npm start` or use nodemon to auto reload the server on code changes with `npm run devstart`

### Importing the database : 
1. Change the database settings in `dbImporter.js` file in the project root.
2. run `node dbImporter`

There is not much data in the DB at the moment. More will be added soon.


Find the documentation in `doc/index.html`.

Import all the routes in Postman with the `node-movie-dashboard-api-postman-collection.json` file


## Dependencies

``` sh
npm install express 
            express-generator 
            body-parser 
            cors 
            jsonwebtoken 
            bcrypt 
            dotenv 
            sequelize -g
            sequelize sequelize-cli
            mysql2
```

### Installing bcrypt on Windows 10

1. Install C++ and Python modules through Windows Build Tools
2. Run the following commands

``` sh
npm install -g node-gyp
npm install -g node-pre-gyp
npm install -g chokidar
npm install bcrypt
```