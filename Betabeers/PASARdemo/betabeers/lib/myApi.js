"use strict";

var Promise = require("promise");
var Pasar = require("pasar");

var Options = {
    "defaults.help.examples.get": [{}],
};

var People = {} // Some people data... (removed)

var myApi = {
    hello: {
        _get: function(input) {
            return {
                data: {hello: input.hello + ""},
                meta: {title: "Hello Demo"},
            };
        },
        //help: "Hello World Betabeers!!!",
        /*
        form: [
            'select(name="hello")',
            '   option(data-from="people",data-path="Emprendedor",data-key="name")',
        ],
        //*/
            
    },
    /*
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
    //*/
    /*
    people: {
        _get: function(input) {
            return new Promise(function(resolve, reject) {
                var out = {};
                for (var ctg in People) {
                    out[ctg] = [];
                    for (var name in People[ctg]) {
                        var reg = People[ctg][name];
                        out[ctg].push({
                            name: name,
                            buscaSocio: reg.buscaSocio ? "Sí" : "No",
                            reg: reg,
                        });
                    };
                };
                resolve(out);
            });
        },
        help: "Asistentes betabeers (Hola!)",
    },
    //*/

};

module.exports = Pasar(myApi, Options);
