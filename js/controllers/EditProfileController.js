app.controller('EditProfileController',
    function ($scope, $rootScope, notifyService, $location, userService, editService) {
    $rootScope.showRightSidebar = false;
    $rootScope.ngViewSize = 'col-md-10';

    //$scope.data = function () {
    //    userService.getUserData(
    //        null,
    //        function (data) {
    //            $scope.userData = data;
    //            $scope.userData.username = JSON.parse(sessionStorage['currentUser']).username;
    //        },
    //        function (err) {
    //            console.log('Error getting user data: ' + err);
    //        }
    //    );
    //};

    $scope.editProfile = function (data) {
        console.log(data);
        editService.editProfile(data,
        function success () {
            notifyService.showInfo('Success: profile edited!');
            $location.path('/');
        }, function error (err) {
            notifyService.showError('Error: ' + err);
        });
    };
        $scope.fileSelected = function(fileInputField) {
            delete $scope.userData.profileImageData;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.userData.profileImageData = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
});