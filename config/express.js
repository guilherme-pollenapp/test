var express = require("express"),
    load = require("express-load"),
    cors = require("cors"),
    parser = require("body-parser")
    morgan = require("morgan");

module.exports = () => {

    let app = express(); 

    app.use(cors());
    app.use(parser.urlencoded({extended: true}));
    app.use(parser.json());

    load('infra',{cwd: 'app'})
        .then('api')
        .then('routes')
        .into(app);

    return app;
}