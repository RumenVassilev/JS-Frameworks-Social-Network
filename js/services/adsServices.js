'use strict';

//app.factory('adsService',
//    function ($resource, baseServiceUrl, authService) {
//        var adsResource = $resource(
//            baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
//            {
//                headers: authService.getAuthHeaders()
//            },
//            {
//                'getAll': {method:'GET'}
//            }
//        );
//
//        return {
//            getAds: function(params, success, error) {
//                return adsResource.getAll(params, success, error);
//            }
//        }
//    }
//
//);
app.factory('adsService', function ($http, baseServiceUrl, authService) {
    return {
        getAds: function (params, success, error) {
            var request = {
                method: 'get',
                url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                headers: authService.getAuthHeaders(),
                data: params
            };
            $http(request).success(success).error(error);
        }

    }
});
