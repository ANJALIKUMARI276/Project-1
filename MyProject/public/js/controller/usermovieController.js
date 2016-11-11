'use strict';

module.exports = function($scope, $http, $rootScope, $location)
 {
//$scope.movie = 'movie';

  var refresh = function () {

     var em = $rootScope.movie;
     $http.get('/tm_scheduleapi/tm_scheduleDetails/'+ em).success(function (response) {

         $rootScope.Data = response;
     });

    $http.get('http://localhost:8000/theatreapi/theatre').success(function (response) {

        $scope.theatreDetail = response;

    });
    // $http.get('http://localhost:8000/tm_scheduleapi/tm_schedule').success(function (response) {
    //
    //     $scope.theatre = response;
    //
    // });


};
  refresh();




  $scope.set=function(o,p,r,l)
  {

  $rootScope.SelectTheatre = o;
    $rootScope.SelectDate = p;
      $rootScope.SelectTime = r;
      $rootScope.SelectCity=l;


    $location.path('/seat');

  };

$scope.movdates=[];
var showdate = function()
{
  for(var i=0; i < 4; i++)
  {
    var date = new Date();
    date.setDate(date.getDate() + i);
    $scope.movdates[i]=date;
  }
};
showdate();

};
