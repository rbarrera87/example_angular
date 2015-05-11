angular.module('app')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/index.html'
      })
      .when('/users', {
        templateUrl: 'templates/users/index.html',
        controller: 'UserController'
      })
      .when('/users/:id', {
        templateUrl: 'templates/users/show.html',
        controller: 'UserShowController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });