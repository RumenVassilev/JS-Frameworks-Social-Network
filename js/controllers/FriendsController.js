'use strict';

app.controller('FriendsController',
    function ($scope, $rootScope, friendsServices, authService, notifyService) {
        //$scope.adsParams = {
        //    'StartPostId' : 5649,
        //    'PageSize' : pageSize
        //};

        $scope.userData = authService.getCurrentUser();
        //console.log($scope.userData);
        $rootScope.ngViewSize = 'col-md-2';

        $scope.getFriends = function() {
            friendsServices.getOwnFriends($scope.userData,
                function success(data) {
                    $scope.friends = data;
                   // console.log($scope.friends)
                },
                function error(err) {
                    //console.log(err);
                    notifyService.showError("Cannot load friends", err);
                }
            );
        };
        $scope.getRequests = function(){
            friendsServices.getFriendsRequests($scope.userData,
            function success(data){
                $scope.friendsRequests = data;
                console.log($scope.friendsRequests);
            },
                function error(err){
                    notifyService.showError("Cannot load friends requests", err);

                }
            );
        };
        $scope.acceptRequest = function(id){
            friendsServices.acceptFriendRequest(id,
            function success(data){
                notifyService.showInfo("You have accepted the request");

            },
                function error(err){
                    notifyService.showError("Cannot accept friend request", err);
                }
            );
        };

        $scope.getFriends();
        $scope.getRequests();
       //$scope.acceptRequest();
    }
);
