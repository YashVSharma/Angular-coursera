(function () {
'use strict';

angular.module('DIApp', [])

.controller('DIController',DIController);
DIController.$inject([$scope,$filter]) 

function DIController($scope,$filter) {
  $scope.name = "";
  
  $scope.up=function(){
    var upcs=$filter('uppercase');
    $scope.name=upcs($scope.name);
  }

  

};


})();
