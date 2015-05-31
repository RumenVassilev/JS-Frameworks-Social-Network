'use strict';

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
