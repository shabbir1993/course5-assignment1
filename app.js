(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope'];
function DIController($scope) {
  $scope.inputText = "";
  $scope.MessagetoUser = "";
  $scope.displayMessage = function(inputText){
    var items = inputText.split(',').length;
    if(inputText==""){
      $scope.MessagetoUser = "Please input atleast 1 value";
    }
    else if(items>0 && items <=3){
      $scope.MessagetoUser = "Enjoy!";
    }
    else if(items>3){
      $scope.MessagetoUser =  "Too Much!";
    }
  };

  /*function ClearsMessage(){
    if($scope.MessagetoUser.length>0){
      $scope.MessagetoUser = "";
    }
  }*/
}

})();
