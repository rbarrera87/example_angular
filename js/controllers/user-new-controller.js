angular.module('app')
  .controller('UserNewController', function ($scope) {
    $scope.user = {};
    $scope.addUser = function(user){
      user.dob = new Date();
      user.id  = users.length+1;
      users.push($scope.user);
    }
  });