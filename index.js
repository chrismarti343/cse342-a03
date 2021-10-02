 const express = require('express');

 const bodyParser = require('body-parser');
 const path = require('path');
 const PORT = process.env.PORT || 3000
 
 const app = express();


 const a03Controller = require('./controllers/a03');

/* router.get('/', a03Controller.getProducts);
router.get('/search', a03Controller.getSearchProducts);
  */
 
 //router.get('/', a03Controller.getProducts);
 //router.get('/search', a03Controller.getSearchProducts);
 //const a03Controller = require('../controllers/ta03.js');
 
  app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // For view engine as Pug */
    //.set('view engine', 'pug') // For view engine as PUG.
    // For view engine as hbs (Handlebars)
    //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
    //.set('view engine', 'hbs')
    .use(bodyParser({ extended: false })) // For parsing the body of a POST
    
    .get('/', (req, res, next) => {
        // This is the primary index, always handled last.
        res.render('home', {
        title: 'Prove03',
        path: '/',
        });
    })

    .use('/a03', a03Controller)

    
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })
    
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
    console.log('Listening on port: ', PORT)
 
   