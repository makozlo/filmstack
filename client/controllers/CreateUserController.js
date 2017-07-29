app.controller('CreateUserController', ['$scope', 'User', 'UserService', '$location', '$routeParams', function($scope, User, UserService, $location,$routeParams){
    
    $scope.createUser = function () {
                var user = new User({
                    username: $scope.username,
                    email: $scope.email,
                    password: $scope.password
                }).$save(function () {
                    window.location.replace('http://localhost:3000/dashboard/' + $routeParams.id);
                })
            }
}]) 

