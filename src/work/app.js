/**
 * Created by sam on 16-4-9.
 */
var app = angular.module('app', []);

app.controller('mainController', function ($scope, $location) {


    $scope.hey = "hello world";





    var path = $location.path();


    var work = null;

    if(path.split('/').length > 0){
        work = path.split('/')[1];


    } else{
        work = 'dotlearn';
    }


    work = 'dotlearn';


    $scope.work = work;

});

