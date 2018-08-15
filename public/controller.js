var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope , $http ) {
    console.log("i m ok");
      
  var refresh = function(){   

    $http.get('/contactlist').then(function(response){
        console.log(response);
        $scope.contactlist = response.data ;
        $scope.contact.name="";
        $scope.contact.email="";
        $scope.contact.number="";

      
    });
  };
  refresh();

    $scope.addcontact = function(){
        console.log($scope.contact);
        $scope.contactlist = $scope.contact;
         $http.post('/contactlist',$scope.contact).then(function(response){
             console.log(response);
             refresh();
        });
    };


   $scope.remove= function (id){
        console.log(id);
        $http.delete('/contactlist/'+ id).then(function(response){
            console.log(response);
            $scope.contactlist = response;
            refresh();
        });
   }; 

   $scope.edit= function(id){
        console.log(id);
        $http.get('/contactlist/' +id).then(function(response){
            console.log(response);
            $scope.contact = response.data;

        });
   };

   $scope.update = function(){
       console.log($scope.contact._id);
       $http.put('/contactlist/'+ $scope.contact._id, $scope.contact).then(function(response){
        $scope.contact = response.data;
        refresh();

       });
   }

});