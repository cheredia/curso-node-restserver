const express = require('express')
const cors = require('cors')


const Server = () => {
  const port = process.env.PORT;
  const usersRoutePath = '/api/users';
  const app = express()

  const routes = () => {
    app.use( usersRoutePath, require('../routes/user') );
  }

  const listen = () => {
    app.listen(port, () => {
      console.log('----', port);
    })
  }

  const middlewares = () => {
    // CORS
    app.use(cors())

    // Lectura y parse del body
    app.use( express.json() );

    // Directorio público
    app.use( express.static('public') );

  }

  // middlewares

  //
  middlewares();
  routes();
  listen();


}


module.exports = Server;