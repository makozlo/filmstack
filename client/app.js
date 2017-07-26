var app = angular.module('filmstack', ['filmstack.factories', 'filmstack.controllers', 'filmstack.services', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/single', {
        templateUrl: 'views/single.html',
        controller:''
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller:'ContactController'
    })

    
}])