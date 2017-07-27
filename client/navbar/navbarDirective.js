
app.directive('navbar', function (){
    return {
        restrict: 'E',
        templateUrl: './directives/navbar.html',
        controller: 'NavbarCtrl',
    };
});