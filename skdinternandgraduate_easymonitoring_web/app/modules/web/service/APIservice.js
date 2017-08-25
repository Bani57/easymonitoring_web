(function () {
    'use strict';

    angular.module('myApp').
        factory('APIService', APIService);

    function APIService($http) {
        return {
            getAllPosts: function () {
                return $http.get('posts');
            },

            getAllComments: function () {
                return $http.get('comments');
            },

            getSinglePost: function (id) {
                return $http.get('posts/' + id);
            },

            postCredentials: function (credentials) {
                return $http.post("rest/login/session", credentials);
            }

        };
    }
})();
