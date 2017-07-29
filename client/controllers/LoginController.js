app.controller('LoginController',['$scope', '$location', 'UserService', 'User', '$routeParams', function($scope,$location,UserService,User, $routeParams){
    UserService.me().then(function(){
        redirect();
    })

    $scope.login = function () {
            UserService.login($scope.username, $scope.password).then(function () {
                redirect();
            }, function (err) {
                console.log(err);
            })
        }

        function redirect() {
            var dest = $location.search().p;
            if (!dest) { dest = '/dashboard/' + $routeParams.id};
            $location.path(dest).search('p', null).replace();
        }
}])