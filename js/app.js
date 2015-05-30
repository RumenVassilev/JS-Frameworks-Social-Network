'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('pageSize', 2);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/api/me/friends',{
       templateUrl: 'templates/user/get-friends.html',
        controller: 'FriendsController'
    });

    $routeProvider.when('/user/friendsRequest', {
        templateUrl: 'templates/user/friends-requests.html',
        controller: 'FriendsController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/user/password', {
        templateUrl: 'templates/user/change-password.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.when('/api/users/:id', {
        templateUrl: 'templates/user/user-wall.html',
        controller: 'FriendsController'
    });


    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()) {
            $location.path('/');
        }
    });
});