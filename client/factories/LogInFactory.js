angular.module("LogIn.factories", [])

    .factory("User", ['$resource', function($resource) {
        return $resource("http://localhost:3000/api/users/:id", {id: "@id"}, 
        {
            "update": {method: "PUT"}
        });
    }])

    .factory("Post", ['$resource', function($resource) {
        return $resource("http://localhost:3000/api/posts/:id", {id: "@id"}, 
        {
            "update": {method: "PUT"}
        })
    }])

    .factory("Category", ['$resource', function($resource) {
        return $resource("http://localhost:3000/api/categories/:id", {id: "@id"});
    }]); 