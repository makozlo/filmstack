angular.module('filmstack.directives',[])
.directive('footer', function(){
    return {
        restrict: 'A',
        templateUrl: 'footerDirective.js',
        scope: true,
    };
});