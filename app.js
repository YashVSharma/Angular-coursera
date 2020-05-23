/*
(function(){
    'use strict';

    angular.module('NameCalc',[])

    .controller('NameCalcController',function($scope){
        $scope.name='';
        $scope.len=0;
        $scope.display=()=>{
         var c=count($scope.name);
         $scope.len=c;   
        }
        
        
        var count =(string)=>{
            var cnt=0
            for(var i=0;i<string.length();i++)
            {
                cnt=cnt+1
            }
            return cnt;

        }
        
    });
})();
*/
(function () {
    'use strict';
    
    angular.module('NameCalculator', [])
    
    .controller('NameCaculatorController', function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;
    
      $scope.displayNumeric = function () {
        var totalNameValue = calculatNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };
    
    
      function calculatNumericForString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }
    
        return totalStringValue;
      }
    
    });
    
    
    })();
    