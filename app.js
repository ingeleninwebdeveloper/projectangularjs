angular.module('app',["firebase" ])
.controller('appCtrl',function($scope,$firebase){
  
  
  var ref = new Firebase("https://angularapp-d68b4.firebaseio.com/contacts"
);
        var sync = $firebase(ref);


  $scope.DB = sync.$asArray();
  
  $scope.titulo='Demo Angular';
  $scope.generos=['Femenino','Masculino']
 
  
  $scope.app={nombre:'',apellidos:'',genero:'',edad:''}
  
  
  $scope.add=function(){
    $scope.DB.$add($scope.app);
    $scope.app={nombre:'',apellidos:'',genero:'',edad:''}
  
  }
  
  $scope.edit=function(value){
    $scope.app=value
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }
  
  
 
})