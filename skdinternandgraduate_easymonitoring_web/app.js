(function () {
    'use strict';

    //base application module config
    angular.module('myApp', [
        'ui.router',
        'ui.bootstrap',
        'ui.bootstrap.tpls',
        'ngAnimate',
        'toastr',
        'ngCookies'
    ]);

    //http interceptor config
    angular.module('myApp').config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }]);

    //toastr config
    angular.module('myApp').config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });
    });

})();