"use strict";

var Pasar = require("pasar");



var Options = {
    // Automatically provide all your functions help with simple example:
    "defaults.help.examples.get": [{}],
}

var drunks = {};

var myApi = {

    drink: {//{{{
        _get: function(query) {
            var l =  query.liquor;
            var name = query.name || "Anonymous drunk";
            if (l) {
                l = query.liquor.toLowerCase();
                if (drunks[l] === undefined) drunks[l] = [];
                drunks[l].push({
                    name: name,
                    timestamp: new Date().toLocaleString()
                });
            };
            return {drinking: l};
        },
        help: {
            contents: [
                "Lo siento, os he engañado: Éste tiene algunas cositas mas ",
                "pero el ejemplo que os he mostrado es totalmente funcional.",
            ],
        },
        form: [
            "p",
            "  label What to drink",
            "  input(name='liquor' type='text')",
            "p",
            "  label What's your name",
            "  input(name='name' type='text')",
        ],
    },//}}}

    list: {//{{{
        _all: ()=>Object.keys(drunks).map(k=>({key: k, value: k.substring(0,1).toUpperCase()+k.substring(1)})),
        // form: ...no se define => (textarea json por defecto)
    },//}}}

    drunks: { path: ["drunks", "drunks/:liquor"],//{{{
        _get: function(query) {
            return new Promise(function(resolve, reject) {
                // Accept ?liquor=<liquor> and /<liquor>
                var l =  query.liquor || query[':liquor'];
                if (l) l = query.liquor.toLowerCase();
                if (l === undefined) {
                    var dcounts = {};
                    for (let l in drunks) dcounts[l] = drunks[l].length;
                    return resolve({
                        meta: { title: "Drinking totals" },
                        data: dcounts,
                    });
                };
                if (l == "*") return resolve({
                    meta: { title: "All drinking data" },
                    data: drunks,
                });
                return resolve({
                    meta: { title: "Drinking data for " +l },
                    data: (drunks[l] ===  undefined)
                        ? "Nobody drank "+l
                        : drunks[l]
                    ,
                });
            });
        },
        _delete: function(query) {
            var l =  query.liquor;
            if (l) l = query.liquor.toLowerCase();
            if (l === undefined) {
                return "Nothing to delete"
            };
            if (drunks[l] ===  undefined) return "Not Found: "+l;
            delete drunks[l];
            return "Done"
        },
        form: [
            "p",
            "    label Select a drink",
            "    select(name='liquor')",
            "        option(value='*') [All]",
            "        option(data-from='list' data-key='key' data-value='value')",
            "p",
            "    label Type a drink",
            "    input(disabled name='liquor' type='text')",
        ],
    },//}}}

    race: {
        _get: function(){
            var pDrunks = this.drunks.get({});
            return new Promise(function(resolve, reject){
                pDrunks.then(function(response){
                    resolve (Promise.race(
                        Object.keys(response.data).map(function(liquor){
                            var c = response.data[liquor];
                            return new Promise(function(resolve, reject){
                                setTimeout(function(){
                                    resolve({
                                        meta: { title: "Race of drunk people" },
                                        data: {
                                            winner: liquor
                                        },
                                    });
                                }, Math.random()*c);
                            });
                        })
                    ));
                });
            });
        },
    },




};


module.exports = Pasar(myApi, Options);




