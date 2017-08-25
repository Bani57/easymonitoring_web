(function () {
    'use strict';

    angular.module('myApp').
        factory('helperService', helperService);

    function helperService() {
        return {
            getDataOnPageChange: function (collection, numberOfRecordsPerPage, currentPageNumber) {
                return angular.copy(collection.slice((currentPageNumber - 1) * numberOfRecordsPerPage, currentPageNumber * numberOfRecordsPerPage));
            }
        }
    };

})();
