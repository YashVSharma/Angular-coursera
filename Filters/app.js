(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves',LoveFilter)
.filter('truth',TruthFilter);

MsgController.$inject = ['$scope','lovesFilter'];
function MsgController($scope,lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  var msg = "Yaakov likes to eat healthy snacks at night!";

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    
    return msg;
  }
  $scope.sayLove=function(){
    msg=lovesFilter(msg);
    return(msg);
    
  }

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}
function LoveFilter(){
  return function(input){
    input = input || "";
    input=input.replace("likes","Loves");
    return input;
  }

}
function TruthFilter(){
  return function(input,target,repl){
    input = input || "";
    input=input.replace(target,repl);
    return input;
  }
  
}

})();
