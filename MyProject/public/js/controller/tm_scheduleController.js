'use strict';

module.exports = function($scope, $http) {


  var refresh = function () {
        $http.get('http://localhost:8000/theatreapi/theatre').success(function (response) {

            $scope.theatreDetails = response;

        });

        $http.get('http://localhost:8000/movieapi/movie').success(function (response) {

            $scope.movieDetails = response;

        });

        $http.get('/tm_scheduleapi/tm_schedule').success(function (response) {

            $scope.tm_scheduleData = response;
    });
};
refresh();



  $scope.addtm_schedule = function () {
  $scope.mapping.Date=$('#datepicker').val();
//  $scope.mapping.Date=  $('#datepicker').datepicker({ dateFormat: 'yy-mm-dd' }).val();
    $http.post('/tm_scheduleapi/addtm_schedule', $scope.mapping).success(function (response) {

    });

    var val ='true';
    $http.put('/movieapi/updatemovie/'+ $scope.mapping.Title + '/'+ val).success(function (response)
    {

    });

  //  refresh();
    $scope.mapping='';
    alert("movie mapped in theatres");
    location.reload();

  };

  $scope.deletetm_schedule = function (id) {

        $http.delete('/tm_scheduleapi/tm_schedule/' + id._id).success(function (response) {



        refresh();

          });
    };





};
