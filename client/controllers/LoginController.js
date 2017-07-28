angular.module("LogIn.controllers", [])

.controller("LoginController", ['$scope', 'User', "$location", "UserService", "SEOService",
        function ($scope, User, $location, UserService, SEOService) {
               
            UserService.me().then(function () {
                redirect();
            });

            $scope.login = function () { 
                UserService.login($scope.email, $scope.password).then(function () {
                    redirect();
                }, function (err) {
                    console.log(err);
                })
            }
            $scope.newUser = function () {
                window.location.pathname = "/newUser"
            };

            function redirect() {
                var dest = $location.search().p;
                if (!dest) { dest = '/' };
                $location.path(dest).search('p', null).replace();
            }
           
            SEOService.setSEO({
                title: 'movies with SEO',
                image: './assets/logos/covalence-logo.png',
                url: $location.url(),
                description: 'pick your next movie with filmstack'
            })
        }])

        .controller("UserController", ['$scope', "User", "UserService", "SEOService", 
        function ($scope, User, UserService, SEOService) {
            UserService.requireLogin();
            $scope.user = Post.get({ id: $routeParams.id });

            $scope.createUser = function () {
                new User({
                    email: $scope.email,
                    password: $scope.password
                }).$save(function () {
                    $scope.users = User.query();
                })
            }

            $scope.deleteUser = function () {
                new User().$delete({ id: id });
            }
            $scope.editEmail = function (id) {
                var newEmail = prompt("Enter a new email address for user with id of " + id);
                if (newEmail) {
                    var user = User.get({ id: id });
                    user.email = newEmail;
                    User.update({ id: id }, user);
                }
            }
            $scope.editPassword = function (id) {
                var newPass = prompt("Enter a new password for user with id of " + id);
                if (newPass) {
                    var user = User.get({ id: id });
                    user.password = newPass;
                    User.update({ id: id }, user);
                }
            }
            
            SEOService.setSEO({
                title: 'filmstack with SEO',
                image: './assets/logos/covalence-logo.png',
                url: $location.url(),
                description: 'pick your next movie with filmstack'
            })

        }])