app.controller("UserController", ["$scope", "User", "$location", "UserService", "SEOService",
    function ($scope, User, $location, UserService, SEOService) {
        UserService.requireLogin();


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
            title: 'movies with SEO',
            image: './assets/logos/covalence-logo.png',
            url: $location.url(),
            description: 'pick your next movie with filmstack'
        })
    }])

    .controller("UserController", ['$scope', "User", "UserService", "SEOService",
        function ($scope, UserFactory, UserService, SEOService) {
            UserService.requireLogin();
            $scope.user = User.get({ id: $routeParams.id });
            console.log($scope.user);


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