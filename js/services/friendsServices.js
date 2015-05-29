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
        },
        getFriendsRequests: function (params, success, error){
            var request = {
                method: 'get',
                url: baseServiceUrl + '/api/me/requests',
                headers: authService.getAuthHeaders(),
                data: params
            };
            $http(request).success(success).error(error);
        },
        acceptFriendRequest: function (id, success, error){
            var request = {
                method: 'put',
                url: baseServiceUrl + '/api/me/requests/' + id + '?status=approved',
                headers: authService.getAuthHeaders(),
                data: id
            };
            $http(request).success(success).error(error);
        }
    }
});
