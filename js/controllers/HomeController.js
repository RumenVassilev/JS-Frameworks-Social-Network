'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, adsService, authService, notifyService, pageSize) {

        $scope.userData = authService.getCurrentUser();
        console.log($scope.userData);
        $rootScope.ngViewSize = 'col-md-2';

        $scope.reloadAds = function() {
            adsService.getAds($scope.userData,
               function success(data) {
                   $scope.posts = data;
                   console.log($scope.posts)
               },
               function error(err) {
                   console.log(err);

               }
           );
       };

       $scope.reloadAds();
    }
);
