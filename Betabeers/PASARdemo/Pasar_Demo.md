############################
## Pasar Demo - Betabeers ##
############################

About me
========

|    Joan Miquel Torres           (- Joanmi -)
|    email: joanmi@bitifet.net
|    twitter: @joanmitter

|    GitHub: https://github.com/bitifet
|    stackOverflow: http://stackoverflow.com/users/4243912/bitifet
|    npm: https://www.npmjs.com/~joanmi
|    betabeers: https://betabeers.com/user/joan-miquel-torres-5172/


Background
==========

    * Async programing.
    * Promises.
    * Javascript.
     

Bibliography
============

    * "Async & performance"
        - "You Don't Know JS" series.
        - cc Kyle Simpson
        - GitHub: https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md

    * Whole "You Don't Know JS" book series:
        - GitHub: https://github.com/getify/You-Dont-Know-JS


Pasar
=====

Promise Aware Smart API REST builder to easily implement Express routers with advanced capabilities.

    NPM: https://www.npmjs.com/package/pasar
    GitHub: https://github.com/bitifet/pasar


DEMO
====

Setup
-----

$ sudo npm install -g express-generator             # If you haven't yet.

$ cd /some/fucking/directory

$ express betabeers

$ cd betabeers

$ npm install --save body-parser cookie-parser debug express jade morgan serve-favicon

$ npm install --save promise                        # Or your preferred promise implementation.

$ npm install --save pasar@latest                   # Upgrade.

$ npm start                                         # Success!
                                                    # http://localhost:3000


Coding
------

$ vim app.js 

    app.use('/api', require("./lib/myApi.js"));

$ npm start                                         # Error!!

$ mkdir lib

$ vim lib/myApi.js

    "use strict";

    var Promise = require("promise");
    var Pasar = require("pasar");

    var Options = {};

    var myApi = {
        hello: {
            _get: function(input) {
                return {
                    data: {hello: input.hello + ""},
                    meta: {title: "Hello Demo"},
                };
            },
        },
    };

    module.exports = Pasar(myApi, Options);


$ npm start                                         # Success!
                                                    # http://localhost:3000/api/hello


More...
-------

                                                    # http://localhost:3000/api/hello.html
                                                    # http://localhost:3000/api/hello/help
                                                    # http://localhost:3000/api/hello/form

    var Options = {
        "defaults.help.examples.get": [{}],
    };

