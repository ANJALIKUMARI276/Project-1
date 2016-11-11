 'use strict';

   module.exports = function($scope, $http ,$rootScope, $location)
   {

    $scope.addbooking = function ()
     {


        $rootScope.custName = document.getElementById("cust_name").value;
        $rootScope.custEmail = document.getElementById("cust_email").value;


        var k= $rootScope.SelectCity;
        var w=  $rootScope.movie ;
        var c=  $rootScope.seatcount11;
        var d=  $rootScope.seatno11;
        var e=  $rootScope.subtotal11;
        var f=  $rootScope.SelectTheatre;
        var g=  $rootScope.SelectTime;
        var p=  $rootScope.custName;
        var l=  $rootScope.custEmail;
        var q=  $rootScope.SelectDate;







           $http.post('/bookingapi/addbooking/'+w+'/'+k+'/'+q+'/'+f+'/'+g+'/'+d+'/'+c+'/'+e+'/'+p+'/'+l).success(function (response) {

           });


           if(($rootScope.custName == '') && ($rootScope.custEmail == ''))
            {
              alert('please fill details');
            }





           else {
              $location.path('/confirmation');

           }


       };







   };
