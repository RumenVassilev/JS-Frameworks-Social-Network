'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, adsService, authService, adminAdsService, notifyService, pageSize) {
        //$scope.adsParams = {
        //    'StartPostId' : 5649,
        //    'PageSize' : pageSize
        //};

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
                   notifyService.showError("Cannot load news", err);
               }
           );
       };

       $scope.deleteAd = function (ad) {
           adminAdsService.deleteAd(
               ad,
               function success () {
                   notifyService.showInfo('Success: Ad deleted!');
                   $scope.reloadAdminAds();
               }, function error () {
                   notifyService.showError('Error');
               }
           );
       };
       $scope.reloadAds();
    }
);
