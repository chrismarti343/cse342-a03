 const express = require('express');
const routes = require('./routes')
 const bodyParser = require('body-parser');
 const path = require('path');
 const PORT = process.env.PORT || 3000
 
 const app = express();



 
  app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
 
    .use(bodyParser({ extended: false })) // For parsing the body of a POST
    
    .use('/', routes)

    
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })
    
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
    console.log('Listening on port: ', PORT)
 
   