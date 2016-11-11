'use strict';

module.exports = function($scope, $http) {
  $scope.review = 'review';

  var refresh = function () {
        $http.get('/reviewapi/review').success(function (response) {

            $rootScope.reviewData = response;
          // $scope.contact = "";
        });

    };
  refresh();


    $scope.addreview = function () {


        var m= rootScope.movie1;
        $http.post('/reviewapi/addreview/'+m, $scope.contact).success(function (response) {

        });
      alert("added");

        refresh();
        $scope.contact='';
        //location.reload();
    };

  };
