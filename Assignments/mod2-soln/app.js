(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
    
      toBuy.itemName = "";
      toBuy.itemQuantity = "";
      toBuy.items = ShoppingListCheckOffService.getItems();
      
        
      toBuy.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
        toBuy.errmsg=ShoppingListCheckOffService.getToBuymsg();
        
       // console.log(ShoppingListCheckOffService.getBoughtItems());
      };
    
    //   toBuy.addItem = function () {
    //     SShoppingListCheckOffService.addItem(toBuy.itemName, toBuy.itemQuantity);
    //   }
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
      //boughtt.b=function(){
      bought.items = ShoppingListCheckOffService.getBoughtItems();

      
      //bought.showM=function(){
      bought.errmsg=ShoppingListCheckOffService.getboughtmsg();
      if(bought.items.length>0){
        bought.errmsg="";
      }
      //}
      // console.log(bought.errmsg);
      // return bought.errmsg;}
      
    
      
    }
    
    
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of shopping toBuy
      var toBuy = [{name:"Cookies",quantity:"2 bags"},
                    {name:"Cookies",quantity:"2 bags"},
                    {name:"Cookies",quantity:"2 bags"},
                    {name:"Cookies",quantity:"2 bags"},
                    {name:"Cookies",quantity:"2 bags"}];
      var bought=[];   
      var toBuymsg="";
      var boughtmsg="Nothing is Bought!";
      //boughtmsg=ShoppingListCheckOffService.get;

    
  
    
      service.removeItem = function (itemIndex) {
        bought.push(toBuy[itemIndex]);
        
        toBuy.splice(itemIndex, 1);
        if(toBuy.length==0){
          toBuymsg="Everything is Bought!";
        }
        if(bought.length>0){
          boughtmsg=" ";
        }
        console.log("tuBuylen:"+toBuy.length);
        console.log("boughtlen:"+bought.length);
        console.log("tuBuylen:"+toBuymsg);
        console.log("boughtlen:"+boughtmsg);

        
      };
    
      service.getItems = function () {
        console.log(toBuy);
        return toBuy;
        
      };
      service.getBoughtItems = function () {
        if(bought.length>0){
          boughtmsg=" ";
        }
        console.log(bought)
        return bought;
      };
      service.getToBuymsg= function(){
        
          return toBuymsg;
      };
      service.getboughtmsg= function(){
            console.log("errr"+boughtmsg);
            return boughtmsg;
        
    };
    }
    
    })();
    