const express = require('express');
const cors = require('cors');




class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();

        
    }

    //--------------------------------------------------------

    middlewares() {

        // Cors
        this.app.use(cors())

        // Directoriopublico
        this.app.use( express.static('public') );

        // Lectura y parseo  del body
        this.app.use(express.json());



        this.usuariosPAth = '/api/usuarios';


    }



    //--------------------------------------------------------

    routes() {
         
        this.app.use(this.usuariosPAth , require('../routes/usuarios'));
        
    }



    //--------------------------------------------------------
    listen() {
        
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }




}

module.exports = Server;