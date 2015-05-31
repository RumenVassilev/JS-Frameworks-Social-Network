app.controller('EditProfileController',
    function ($scope, $rootScope, notifyService, $location, userService, editService) {
    $rootScope.showRightSidebar = false;
    $rootScope.ngViewSize = 'col-md-10';

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
        //$scope.coverFileSelected = function(fileInputField1) {
        //    delete $scope.userData.coverImageData;
        //    var file = fileInputField1.files[0];
        //    if (file.type.match(/image\/.*/)) {
        //        var reader1 = new FileReader();
        //        reader1.onload = function() {
        //            $scope.userData.coverImageData = reader1.result;
        //            $(".image-box").html("<img src='" + reader1.result + "'>");
        //        };
        //        reader1.readAsDataURL(file);
        //    } else {
        //        $(".image-box").html("<p>File type not supported!</p>");
        //    }
        //};
});