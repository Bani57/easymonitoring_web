(function () {
    'use strict';

    angular.module('myApp')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/main');

            $stateProvider
                .state('main', {
                    url: '/main',
                    templateUrl: 'app/modules/web/view/main.html',
                    controller: 'mainController'
                })
                .state('main.home', {
                    url: '/home',
                    templateUrl: 'app/modules/web/view/home.html',
                    controller: 'homeController'
                    // resolve: {
                    //     commentData: ['APIService', 'toastr', function (APIService, toastr) {
                    //         return APIService.getAllComments().then(function (success) {
                    //             toastr.success('Home page');
                    //             return success;
                    //         }, function (error) {
                    //             // Implement error handling
                    //         });
                    //     }]
                    // }
                })
                .state('main.about', {
                    url: '/about/:id',
                    templateUrl: 'app/modules/web/view/about.html',
                    controller: 'aboutController',
                    resolve: {
                        postData: ['APIService', 'toastr', '$stateParams', function (APIService, toastr, $stateParams) {
                            return APIService.getSinglePost($stateParams.id).then(function (success) {
                                toastr.success('About page');
                                return success;
                            }, function (error) {
                                // Implement error handling
                            });
                        }]
                    }
                });
        });

})();