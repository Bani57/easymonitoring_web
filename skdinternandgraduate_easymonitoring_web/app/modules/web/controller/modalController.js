(function () {
    'use strict';

    angular.module('myApp').
        controller('modalController', ModalController);

    function ModalController($rootScope, $scope, $uibModalInstance) {

        $scope.ok = function () {
            // Send value on close
            $uibModalInstance.close("ok callback");
        };

        $scope.cancel = function () {
            // Send value on dismiss
            $uibModalInstance.dismiss("cancel callback");
        };
    }
})();