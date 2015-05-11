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
      .when('/users/new', {
        templateUrl: 'templates/users/new.html',
        controller: 'UserNewController'
      })
      .when('/users/:id', {
        templateUrl: 'templates/users/show.html',
        controller: 'UserShowController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });