const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
require('./hbs/helpers');

// Setting
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

// Express HBS engine
const pathPartials = path.join(__dirname, '/views/partials');
hbs.registerPartials(pathPartials);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index.hbs', {
        name: 'Josue',
        title: 'Home'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About',

    })

});

app.get('/contact', (req, res) => {
    res.render('contact.hbs', {
        title: 'Contact'
    })
});

app.use((req, res, next) => {

    let error = new Error();
    let locals = {
        title: 'Error 404',
        description: 'The page you are looking for was not found',
        error: error
    }
    error.status = 404;
    res.render('error404.hbs', locals)
})


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})