/**
 * Created by sam on 16-4-9.
 */
var app = angular.module('app', []);

app.controller('mainController', function ($scope, $http, $location) {



    var path = $location.path();


    var key = null;

    if(path.split('/').length > 0){
        key = path.split('/')[1];
    }




    $scope.setPost = function(k){


        console.log(" Setting post:");
        console.log(k);

        $scope.current = k;
    };


    $http.get('db.json').then(function (a) {

        $scope.posts = a.data;



        $scope.posts.forEach(function (post) {
            if(post.key == key) $scope.current = post;
        });


        if(!$scope.current) $scope.current = $scope.posts[0];

        console.log($scope.current);

        console.log($scope.posts);

    });
});

