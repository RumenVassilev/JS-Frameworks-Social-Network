'use strict';

app.controller('FriendsController',
    function ($scope, $rootScope, friendsServices, authService, notifyService) {
        //$scope.adsParams = {
        //    'StartPostId' : 5649,
        //    'PageSize' : pageSize
        //};

        $scope.userData = authService.getCurrentUser();
        $rootScope.ngViewSize = 'col-md-2';

        $scope.getFriends = function() {
            friendsServices.getOwnFriends($scope.userData,
                function success(data) {
                    $scope.friends = data;
                    console.log($scope.friends)
                },
                function error(err) {
                    console.log(err);
                    notifyService.showError("Cannot load friends", err);
                }
            );
        };

        $scope.getOwnFriends();
    }
);
