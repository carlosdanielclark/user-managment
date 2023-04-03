  //IMPORTAR MODULOS
  const express = require('express'); 
  //const cors =  require('cors');
  const { engine } = require('express-handlebars');
  const path = require('path');
  const bodyparser = require('body-parser');
  const dotenv = require('dotenv').config({path: __dirname + '/.env'});

 /***********************************************************/
  //INITIALIZATION
  const app = express(); //Retorna una app de express
  
  //SETTINGS
  const dir_apk = '/home/carlosdaniel/Documentos/03  PROJECTS DEVELOP/My APKs/apk-user-mangement/';
  const port = process.env.PORT || 4500; //Numero del puerto
 /************************************************************/
  //ACCES PUBLIC FILES AND STATIC
  app.use(express.static(path.join(dir_apk, 'public')));
  app.set('views', path.join(dir_apk, 'views')); //Ruta de la carpeta 'views'
  
  app.engine('.hbs', engine({      
    defaultLayouts: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  }));
  // enavle handlebar 
  app.set('view engine', '.hbs');
  
 /************************************************************/
  //MIDDLEWARES
  app.use(bodyparser.urlencoded({extended:true}))
  app.use(bodyparser.json())
  //app.use(cors());
 
 /************************************************************/
  //GLOBAL VARIABLES
  

 /************************************************************/
  //IMPORT ROUTERS assign url(Rutas)
  app.use(require('./routers/routers'));
 
 /************************************************************/
  //STARTING SERVER
  app.listen(port, () => {
    console.log('server listen... port:', port);
  });
 