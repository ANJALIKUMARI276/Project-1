'use strict';

module.exports = function($scope, $http, $rootScope, $location)
 {
//$scope.movie = 'movie';

  var refresh = function () {

     //var em = $rootScope.movie;

    $http.get('http://localhost:8000/theatreapi/theatre').success(function (response) {

        $scope.theatreDetail = response;

    });


};
  refresh();


var hello = function()
{
  var ti=  $rootScope.movie ;
  var ci= $rootScope.SelectCity;
  var th=  $rootScope.SelectTheatre;
  var ts=  $rootScope.SelectTime;


  $http.get('/bookingapi/blocking/'+ti+'/'+ci+'/'+th+'/'+ts).success(function (response)
  {
//console.log(response);
    for(var i=0;i<response.length;i++)
    {
      for(var j=0;j<response[i].SeatNo.length;j++)
      {
        //console.log(response[i].SeatNo);
        //console.log(response[i].SeatNo.length);


        $('#'+response[i].SeatNo[j]).attr('src','img/R_chair.gif');

      }
    }

  });



};
hello();







  $(document).ready(function()
  {
  var count=0;

  var sn="";

  var seats=[];

  var subtotal=0;


    $("img").click(function()
  {
      var id = $(this).attr('id');

      var path = $('#'+id).attr('src');

      var x=path.substring(path.lastIndexOf('W'),path.length);

      var y=path.substring(path.lastIndexOf('G'),path.length);

  if(x=="W_chair.gif")

    {

        $('#'+id).attr('src','img/G_chair.gif');

        count++;

        seats.push(id);

        $rootScope.seatno11=JSON.stringify(seats);
        document.getElementById("seatno").innerHTML=seats;

      }

  else if(y=="G_chair.gif")

     {

      $('#'+id).attr('src','img/W_chair.gif');

           if(!count==0){
           var ind = seats.indexOf(id);
           seats.splice(ind,1);
           count--;

      }

    }


   subtotal=count*120;

      document.getElementById("seatno").innerHTML=seats;

        document.getElementById("subtotal").innerHTML=subtotal;

         document.getElementById("seatcount").innerHTML=count;

   });

  });



  $scope.Show1=function(){



    $rootScope.subtotal11=  document.getElementById("subtotal").innerHTML;
       $rootScope.seatcount11= document.getElementById("seatcount").innerHTML;

      $rootScope.seatno111 = document.getElementById("seatno").innerHTML;

          if($rootScope.seatno111 == '')
           {
alert('please select seats');



          }
          else {
              $location.path('/payment');
          }






};


  };
