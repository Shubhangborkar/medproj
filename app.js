var app=angular.module('single-page',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html',
                controller:'cfgController'
          })
          .when('/mainApp',{
                templateUrl: 'mainApp.html',
                controller:'cfgController'
          })
          .when('/signUp',{
                templateUrl: 'signUp.html',
                controller:'cfgController'
          });


});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

      $scope.age = [
    {name:'13-17 years', id:'13-17'},
    {name:'18-24 years', id:'18-24'},
    {name:'25-34 years', id:'25-34'},
    {name:'35-44 years', id:'35-44'},
    {name:'45-54 years', id:'45-54'},
    {name:'55-64 years', id:'55-64'},
    {name:'Over 65 years', id:'65+'}
    ];
$scope.selectedAge = $scope.age[1].id;


});

angular.module('form', [])
    .controller('formController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);
