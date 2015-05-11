angular.module('app')
  .controller('UserShowController', function($scope, $routeParams){
    users.forEach(function(user){
      if(user.id == $routeParams.id){
        $scope.user =  user;
      }
    })
  })
;