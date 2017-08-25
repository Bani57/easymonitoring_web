(function () {
    'use strict';

    angular.module('myApp').
        factory('httpInterceptor', httpInterceptor);

    function httpInterceptor() {
        return {
            request: function (config) {
                // api call
                if (config.transformResponse.length > 0) {
                    // set appropriate URL
                    var url = "http://localhost:8060/";
                    config.url = url + config.url;
                }
                return config;
            },

            responseError: function (response) {
                console.log(response);
                return response;
            }
        };
    }
})();
