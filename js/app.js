var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ngResponsiveImages']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'mulai.html',
            controller: 'mulaiCtrl'
        }).when('/menu', {
            templateUrl: 'menu.html',
            controller: 'menuCtrl'
        }).when('/selayang', {
            templateUrl: 'selayang.html',
            controller: 'selayangCtrl'
        }).when('/belajar', {
            templateUrl: 'belajar.html',
            controller: 'belajarCtrl'
        }).when('/permainan', {
            templateUrl: 'permainan.html',
            controller: 'permainanCtrl'
        }).when('/bantuan', {
            templateUrl: 'bantuan.html',
            controller: 'bantuanCtrl'
        }).when('/selayang/menu-1', {
            templateUrl: 'selayang-1.html'
        }).when('/selayang/menu-2', {
            templateUrl: 'selayang-2.html',
            controller: 'selayangCtrl'
        }).when('/selayang/menu-3', {
            templateUrl: 'selayang-3.html',
            controller: 'selayangCtrl'
        }).when('/selayang/menu-4', {
            templateUrl: 'selayang-4.html',
            controller: 'selayangCtrl'
        }).when('/belajar/menu-1', {
            templateUrl: 'belajar-1.html',
            controller: 'belajarCtrl'
        }).when('/belajar/menu-2', {
            templateUrl: 'belajar-2.html',
            controller: 'belajarCtrl'
        }).when('/belajar/menu-3', {
            templateUrl: 'belajar-3.html',
            controller: 'belajarCtrl'
        }).when('/belajar/menu-4', {
            templateUrl: 'belajar-4.html',
            controller: 'belajarCtrl'
        }).otherwise({
            redirectTo: "/"
        });
});

app.controller("AppCtrl", function($scope, $location) {
    $scope.go = function(path) {
        $location.path(path);
    }
});

app.controller("mulaiCtrl", function($scope, $route, $location) {
    $scope.currentPath = "";
    $scope.go = function(path) {
        $scope.currentPath = path;
        $location.path(path);
    }
});

app.controller("menuCtrl", function($scope, $route, $location) {
    $scope.currentPath = "menu";
    $scope.go = function(path) {
        $scope.currentPath = path;
        $location.path(path);
    }
});

app.controller("selayangCtrl", function($scope, $route, $location) {
    $scope.currentPath = "selayang";
    $scope.go = function(path) {
        $scope.currentPath = path;
        $location.path(path);
    }
});

app.controller("belajarCtrl", function($scope, $route, $location) {
    $scope.currentPath = "belajar";
    $scope.go = function(path) {
        $scope.currentPath = path;
        $location.path(path);
    }
});

app.controller("permainanCtrl", function($scope, $route, $location) {
    $scope.currentPath = "permainan";
    $scope.go = function(path) {
        $scope.currentPath = path;
        $location.path(path);
    }
});

app.controller("bantuanCtrl", function($scope, $route, $location) {
    $scope.currentPath = "bantuan";
    $scope.go = function(path) {
        $scope.currentPath = path;
        $location.path(path);
    }
});

app.run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current) {
        if (current.$$route && current.$$route.controller) {
            $rootScope.controller = current.$$route.controller;
        }
    })
});

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

function playSound(soundfile) {
    document.getElementById("soundholder").innerHTML =
        "<audio autoplay><source src='sound/" + soundfile + ".mp3' type='audio/mpeg'></audio>";
}

