app.controller('HomeController', function ($scope, postsManagerService, $route, $routeParams) {

    $scope.getNewsFeed = function () {
        postsManagerService.getNewsFeed(function (serverData) {
            $scope.newsFeed = serverData;
        }, function (error) {
           console.log(error)
        });
    }

});