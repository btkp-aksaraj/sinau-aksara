var app = angular.module("aksaraJawa", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "mulai.html"
        })
        .when('/menu', {
            templateUrl: "menu.html"
        })
        .when('/sejarah', {
            templateUrl: "sejarah.html"
        })
        .when('/belajar', {
            templateUrl: "belajar.html"
        })
        .when('/games', {
            templateUrl: "games.html"
        })
        .when('/bantuan', {
            templateUrl: "bantuan.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "welcome"
    }
});
