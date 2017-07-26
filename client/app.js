var app = angular.module('filmstack', ['filmstack.factories', 'filmstack.controllers', 'filmstack.services', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/splash.html',
        controller: 'SplashController'
    })
    .when('/detail/:id', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
    });
}]);