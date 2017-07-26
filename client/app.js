var app = angular.module('filmstack', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/splash.html',
        controller: 'SplashController'
    })
    .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController'
    });
    // .when('/search', {
    //     templateUrl: 'views/search.html',
    //     controller: 'SearchController'
    // });
}]);