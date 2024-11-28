const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .react() // Si usas React
    .sass("resources/sass/app.scss", "public/css");
