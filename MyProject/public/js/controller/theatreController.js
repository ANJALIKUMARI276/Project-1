'use strict';

module.exports = function($scope, $http) {
  $scope.theatre = 'theatre';

  var refresh = function () {
        $http.get('/theatreapi/theatre').success(function (response) {

            $scope.theatreData = response;
          // $scope.contact = "";
        });

    };
  refresh();








    $scope.addtheatre = function () {

      $scope.disabled = true;
      $scope.checked=true;


        $http.post('/theatreapi/addtheatre', $scope.contact).success(function (response) {
  $scope.disabled = false;
        });

        alert('theatre added successfully');
  $scope.contact='';
        refresh();

        // location.reload();

//  $scope.contact='';
    };

    $scope.deletetheatre = function (id) {

        $http.delete('/theatreapi/theatre/' + id._id).success(function (response) {



        refresh();

          });
    };





};
