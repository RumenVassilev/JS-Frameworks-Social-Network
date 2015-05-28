'use strict';

app.factory('friendsServices', function ($http, baseServiceUrl, authService) {
    return {
        getOwnFriends: function (params, success, error) {
            var request = {
                method: 'get',
                url: baseServiceUrl + '/api/me/friends',
                headers: authService.getAuthHeaders(),
                data: params
            };
            $http(request).success(success).error(error);
        }
    }
});
