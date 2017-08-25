(function () {
    'use strict';

    angular.module('myApp').controller('mainController', MainController);

    function MainController($scope, $uibModal, APIService, $location, $cookies) {
        //$scope.openModal = openModal;

        $scope.credentials = {};

        // events implementation
        // function openModal(item) {
        //     var modalInstance = $uibModal.open({
        //         controller: 'modalController',
        //         controllerAs: 'vm',
        //         templateUrl: 'app/modules/web/view/modal/modal.html',
        //         size: 'md'
        //     });
        //
        //     modalInstance.result.then(function (ok) {
        //         // Handle value on ok
        //         return APIService.postCredentials($scope.credentials).then(function success(response) {
        //             console.log(response);
        //             $scope.cookie = response.data;
        //         });
        //     }, function (close) {
        //         // Handle value on close
        //         console.log(close);
        //     });
        // }

        $scope.postCredentials = function () {
            APIService.postCredentials($scope.credentials)
                .then(function (response) {
                    if (response.status == "200") {
                        document.getElementById("logoutAlert").style.visibility = "hidden";
                        document.getElementById("warningAlert").style.visibility = "hidden";
                        document.getElementById("expiredAlert").style.visibility = "hidden";
                        var today = new Date();
                        var expiresValue = new Date(today);

                        expiresValue.setMinutes(today.getMinutes() + 15);
                        $cookies.put("JSESSIONID", response.data.sessionId, {'expires': expiresValue});
                        $location.url("main/home");
                    } else {
                        document.getElementById("alertText").innerHTML = "Wrong credentials!";
                        document.getElementById("warningAlert").style.visibility = "visible";
                        document.getElementById("logoutAlert").style.visibility = "hidden";
                        document.getElementById("expiredAlert").style.visibility = "hidden";

                    }

                    $scope.credentials = {};

                });
        }
    }

})();