(function () {
    'use strict';

    angular.module('myApp').
        controller('homeController', HomeController);

    function HomeController($scope, $cookies, $location, $http) {
        $scope.type="status";

        if($cookies.get("JSESSIONID") == null){
            document.getElementById("cancel").click();
            alert("No session valid! Redirecting to Login Page");
            document.getElementById("warningAlert").style.visibility = "hidden";
            document.getElementById("expiredAlert").style.visibility = "hidden";
            document.getElementById("logoutAlert").style.visibility = "hidden";
            $location.url("main");
            return;
        }

        $scope.closeSession = function () {
            $cookies.remove("JSESSIONID");
            $location.url("main");
            document.getElementById("warningAlert").style.visibility = "hidden";
            document.getElementById("expiredAlert").style.visibility = "hidden";
            document.getElementById("logoutAlert").style.visibility = "visible";

        };
        /*      Search info         */
        $scope.arr = [];

        // events init
        $scope.init = init;

        /*      Search functionality        */

        function init() {
            var url = "rest/api/search/" + $scope.projectID;


            if($cookies.get("JSESSIONID") == null){
                document.getElementById("cancel").click();
                document.getElementById("expiredAlert").style.visibility = "visible";
                document.getElementById("warningAlert").style.visibility = "hidden";
                document.getElementById("logoutAlert").style.visibility = "hidden";
                $location.url("main");
                return;
            }

            $http.post(url, $scope.type, {
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8',
                        'JSESSIONID': $cookies.get("JSESSIONID")
                    }
                })
                .then(function (response) {
                    if (response.status == 200) {
                        $scope.arr = response.data;
                        var successCode = $scope.projectID;
                        $scope.successCode = "Project Code: " + $scope.projectID;
                        if(document.getElementById("statusCheck").checked){
                            $scope.searchType = "Search Type: Statuses";
                        } else if (document.getElementById("priorityCheck").checked) {
                            $scope.searchType = "Search Type: Priorities";
                        }
                        document.getElementById("warningAlert").style.visibility = "hidden";

                    }
                    else {
                        document.getElementById("alertText").innerHTML = "Wrong project code!";
                        document.getElementById("warningAlert").style.visibility = "visible";
                        $scope.projectID = "";
                    }
                    console.log(response.status);
                });
        }


    }
})();