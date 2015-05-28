'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, adsService, authService, adminAdsService, notifyService, pageSize) {
        //$scope.adsParams = {
        //    'StartPostId' : 5649,
        //    'PageSize' : pageSize
        //};

        $scope.userData = authService.getCurrentUser();
        $rootScope.ngViewSize = 'col-md-2';

        $scope.reloadAds = function() {
            adsService.getAds(
               function success(data) {
                   $scope.ads = data;
               },
               function error(err) {
                   console.log(err);
                   notifyService.showError("Cannot load news", err);
               }
           );
       };

       $scope.reloadAdminAds = function () {
           adminAdsService.getAdminAds(
               $scope.adsParams,
               function success(data) {
                   $scope.ads = data;
               },
               function error(err) {
                   notifyService.showError("Cannot load ads", err);
               }
           );
       };

       $scope.approveAd = function (ad) {
           adminAdsService.approveAd(
               ad,
               function success () {
                   notifyService.showInfo('Success: Ad approved!');
                   ad.status = 'Published';
               }, function error () {
                   notifyService.showError('Error');
               }
           );
       };

       $scope.rejectAd = function (ad) {
           adminAdsService.rejectAd(
               ad,
               function success () {
                   notifyService.showInfo('Success: Ad rejected!');
                   ad.status = 'Rejected';
               }, function error () {
                   notifyService.showError('Error');
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

       if (authService.isAdmin()) {
           $scope.reloadAdminAds();
       }
       else {
           $scope.reloadAds();
       }

       $scope.$on("adminAdsMenuClick", function (event, option) {
           $scope.adsParams.status = option;
           $scope.adsParams.startPage = 1;
           $scope.reloadAdminAds();
       });
    }
);
