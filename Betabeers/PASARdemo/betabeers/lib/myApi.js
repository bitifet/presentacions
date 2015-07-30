"use strict";

var Promise = require("promise");
var Pasar = require("pasar");

var Options = {
    "defaults.help.examples.get": [{}],
};


var myApi = {
    hello: {
        _get: function(input) {
            return {
                data: {hello: input.hello + ""},
                meta: {title: "Hello Demo"},
            };
        },
        /*/help: "Hello World Betabeers!!!", //*/
    },
    delay: {
        _get: function(input) {
            return new Promise(function(resolve, reject) {
                setTimeout(function(){
                    resolve({
                        about: "Dealayed response demo",
                        delayed: (input.time / 1000) + "seconds",
                        fullInput: input,
                    });
                },0+input.time);
            });
        },
        help: "Untrustable delay function.",
        form: ["p How many time would you want to wait?"
            , "label Milliseconds:"
            , "input(name=time)"
        ],
    },
};

module.exports = Pasar(myApi, Options);
