(function () {
    'use strict';

    angular.module('myApp').
        controller('aboutController', AboutController);

    function AboutController($scope, postData) {

        $scope.post = postData.data;

    }

})();