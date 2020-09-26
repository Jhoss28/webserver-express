const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getUTCFullYear();
});

hbs.registerHelper('capitalize', (text) => {

    arrWorks = text.split(' ');
    arrWorks.forEach((work, index) => {
        arrWorks[index] = work.charAt(0).toUpperCase() + work.slice(1).toLowerCase();
    });
    return arrWorks.join(' ');
});