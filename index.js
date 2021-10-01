 const express = require('express');
 const bodyParser = require('body-parser');
 const path = require('path');
 const routes = require('./routes');
 const PORT = process.env.PORT || 5000
 
 const app = express();

 app.use(express.static(path.join(__dirname,'public')))
 .set('view', path.join(__dirname, 'views'))
 .set('view engine', 'ejs')
 .use(bodyParser({extended: false}))
 .use('/', routes)
 .listen(PORT, () => console.log('Listening on port: ${ PORT }'));
