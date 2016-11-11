'use strict';

module.exports = function($scope, $http, $rootScope, $location)
 {
//$scope.movie = 'movie';

  var refresh = function () {
        $http.get('/movieapi/movie').success(function (response) {

            $scope.movieData = response;
    });
};
  refresh();


$scope.movetitle = function(t,p)
  {
    $rootScope.movie = t;
    $rootScope.poster=p;
    $location.path('/usermovie');

  }


  $scope.moveReview = function(tt,pp)
    {
      $rootScope.movie1 = tt;
      $rootScope.poster1=pp;
      $location.path('/review');

    }
};
