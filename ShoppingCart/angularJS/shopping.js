var myApp = angular.module("MyApp",['ngAnimate']);

myApp.controller("shoppingcart", function($scope,$timeout,$log){
    
    $scope.items = [{name:"Milk", done:false},
                    {name:"Bread",done:false},
                    {name:"Cream",done:false}];
    $scope.additem="";
    $scope.hideerror=true;
    $scope.hideit=true;
    $scope.editvalue = "";
    $scope.editerror = true;
    $scope.addsec = true;
    
    
    $scope.$watch('additem',function(){
       if($scope.additem == ""){
            $scope.hideerror=true;
           $scope.hideit=true;
       }else if($scope.searchItem()){
           
            $scope.hideit = false;
           $scope.hideerror=true;
       }else{
            $scope.hideerror=false;
           $scope.hideit=true;
       };
           
    });
    
    $scope.searchItem = function(){
       
        for(i in $scope.items){
            var x=$scope.items[i].name;
            if(x===$scope.additem){
                return true;
            } 
        }
        return false;
    }
    
   $scope.clearall = function(){
     $scope.items = [];  
   };
    
    $scope.addThisItem = function(){
      
            $scope.toadd = {name:$scope.additem,done:false};
            $scope.items.push($scope.toadd);
        $scope.additem="";
        
    };
    
    $scope.removeItem= function(x){
        $scope.items.splice(x,1);
    };
    
    $scope.$watch('editvalue', function(){
        
        if($scope.editvalue==""){
            $scope.editerror = true;
        }else{
             $scope.editerror = false;
        }
        
    });
    
    $scope.editItem = function(x){
        $scope.addsec = false;
        $scope.editIndex = x;
    }
    
    $scope.editThisItem = function(){
        $scope.items[$scope.editIndex]=$scope.editvalue;
        $scope.editvalue="";
        $scope.addsec = true;
    }
    
    $scope.clearDone=function(){
       var x=[];
       for(i in $scope.items){
           var item = $scope.items[i];
           if(item.done){
               x.push(i);
           }
       }
        for(var i=x.length-1; i>=0; i--){
            var index=x[i];
            $scope.removeItem(index);
        }
    }
    
    
});



