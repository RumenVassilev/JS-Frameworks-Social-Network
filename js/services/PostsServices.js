app.factory('adsService', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl;

    service.getNewsFeed = function (success, error) {
        $http.get(serviceUrl + 'api/me/feed?StartPostId=&PageSize=10', {headers: this.getHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(function (data) {
                error(data);
            });
    };
    return service;
});