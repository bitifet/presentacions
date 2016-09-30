

    // ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ //
    // ⡎⠑ ⢀⡀ ⣀⣀  ⢀⡀   ⢀⣀ ⢀⡀ ⣀⡀ ⢀⣀ ⣰⡀ ⡀⣀ ⡀⢀ ⠄ ⡀⣀   ⡀⢀ ⣀⡀ ⢀⣀            //
    // ⠣⠔ ⠣⠜ ⠇⠇⠇ ⠣⠜   ⠣⠤ ⠣⠜ ⠇⠸ ⠭⠕ ⠘⠤ ⠏  ⠣⠼ ⠇ ⠏    ⠣⠼ ⠇⠸ ⠣⠼            //
    // ⣎⣱ ⣏⡱ ⡇   ⣏⡱ ⣏⡉ ⢎⡑ ⢹⠁   ⢀⣀ ⢀⣀ , ⣀⡀ ⢀⣀ ⡀⣀ ⢀⡀ ⣀⡀ ⢀⣀   ⢀⡀ ⣀⡀      //
    // ⠇⠸ ⠇  ⠇   ⠇⠱ ⠧⠤ ⠢⠜ ⠸    ⠣⠼ ⠭⠕ ⠇ ⠇⠸ ⠣⠤ ⠏  ⠣⠜ ⠇⠸ ⠣⠼   ⠣⠭ ⠇⠸      //
    // ⢺  ⣎⣵   ⣀⣀  ⠄ ⣀⡀ ⡀⢀ ⣰⡀ ⢀⡀ ⢀⣀   ⢀⣀ ⢀⡀ ⣀⡀   ⠃⠃ ⣏⡱ ⣎⣱ ⢎⡑ ⣎⣱ ⣏⡱ ⠃⠃ //
    // ⠼⠄ ⠫⠜   ⠇⠇⠇ ⠇ ⠇⠸ ⠣⠼ ⠘⠤ ⠣⠜ ⠭⠕   ⠣⠤ ⠣⠜ ⠇⠸      ⠇  ⠇⠸ ⠢⠜ ⠇⠸ ⠇⠱    // 
    //                                                                //
    // ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉ ⠉⠉// 
    //                                                              //
    //             @author: Joan Miquel Torres                     //
    //                                                            //
    //              @email: joanmi@bitifet.net                   //
    //                                                          //
    //                 @twitter: joanmitter                    //
    //                                                        //
    // ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀  ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀⣀ ⣀ //

    "use strict";
    const minutes = 60 * 1000;
    module.exports = new Promise(function labsAndDrinks(resolve, reject){
        setTimeout(reject, 10 * minutes);
        //...


About
-----

>   PASAR - Promise Aware Smart API REST builder to easily implement Express
>           routers with advanced capabilities.
>
>           **npm:** https://www.npmjs.com/package/pasar
>        **gitHub:** https://github.com/bitifet/pasar


Setup
-----

    joanmi@labs:~$ npm install -g express-generator
    joanmi@labs:~$ express drinks
    joanmi@labs:~$ cd drinks
    joanmi@labs:~/drinks$ npm install
    joanmi@labs:~/drinks$ npm install --save pasar

    joanmi@labs:~/drinks$ vim app.js
    ...
    joanmi@labs:~/drinks$ mkdir lib
    joanmi@labs:~/drinks$ vim lib/drinks.pasar.js
    ...
    joanmi@labs:~/drinks$ npm start
    


Coding
------

### app.js

    // [...]
    var drinkApi = require('./lib/drinks.pasar.js');
    // [...]
    app.use('/api', drinkApi);
    // [...]


### lib/drinks.pasar.js

    "use strict";
    var Pasar = require("pasar");

    var myApi = {
        drink: {
            _get: function(query) {
                return {drinking: query.liquor};
            },
        },
    };

    module.exports = Pasar(myApi);


Testing
-------

  * [http://localhost:3000/api/drink?liquor=beer]


  * [http://localhost:3000/api/drink.html?liquor=wine]
  * [http://localhost:3000/api/drink.json?liquor=Vodka] (Default)
  * [http://localhost:3000/api/drink.csv?liquor=beer]
  * [http://localhost:3000/api/drink.xlsx?liquor=beer]


  * [http://localhost:3000/api/drink.raw?liquor=beer]


More features
-------------

  * [http://localhost:3000/api/drink/help]


  * [http://localhost:3000/api/drink/form]


Advanced
--------

  * Methods: [https://github.com/bitifet/pasar/blob/master/doc/Manual.md#spcMethods]

    - Access Control: [https://github.com/bitifet/pasar/blob/master/lib/auth.js]

    - CRI: [https://github.com/bitifet/pasar/blob/master/doc/Manual.md#common-resources-interface]

    - Cleanup: [https://github.com/bitifet/pasar/blob/master/doc/Manual.md#cleanup-callback]


  * Request Mapper: [https://github.com/bitifet/pasar/blob/master/lib/defaultRequestMapper.js]


  * Response Mapper: [https://github.com/bitifet/pasar/blob/master/lib/defaultResponseMapper.js]


  * Output filters: 
    - function loadFilters(): [https://github.com/bitifet/pasar/blob/master/lib/formatters.js]
    - Ejemplo (.html): [https://github.com/bitifet/pasar/blob/master/lib/fmt/html.js]


  * TO-DO: [https://www.npmjs.com/package/pasar#TODO]



    resolve();



