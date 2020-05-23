(function () {
'use strict';

angular.module('LunchCheckApp', [])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject(['$scope']) ;
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message="";
 

  $scope.calcfood = function () {
    if($scope.items.length){
    var c=$scope.items.split(',');
    if(c.length>3){
      $scope.message="Too much!";
    }
    else{
      $scope.message="Enjoy!"
    }
  }
  else{
    $scope.message="Please Enter data first";
  }
  };

};


})();
