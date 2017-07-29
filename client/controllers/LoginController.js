app.controller('LoginController',['$scope', '$location', 'UserService', 'User', function($scope,$location,UserService,User){
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
            if (!dest) { dest = '/dashboard' };
            $location.path(dest).search('p', null).replace();
        }
}])