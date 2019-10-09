var app = angular.module('myApp', ['ngRoute']);
 app.controller('myCtrl', function($scope,$http) {
 $scope.data = {};
$scope.submit= function(){
    console.log('clicked submit');
    $http({
        url: 'http://localhost:8089/person',
        method: 'POST',
        data: $scope.data
    }).then(function (httpResponse) {
        console.log('response:', httpResponse);
    })
   }
 });