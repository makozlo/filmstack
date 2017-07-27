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
    })
    .when('/search-results', {
<<<<<<< HEAD
        templateUrl: 'views/search-results.html',
        controller: 'SearchController'
=======
        templateUrl: 'views/search.html',
        controller: 'SplashController'
>>>>>>> edc4e00a0b11dbdf829b77dff6b5043f2915b808
    });
}]);