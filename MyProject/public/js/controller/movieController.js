'use strict';

module.exports = function($scope, $http) {
//$scope.movie = 'movie';

  var refresh = function () {
        $http.get('/movieapi/movie').success(function (response) {

            $scope.movieData = response;
    });
};
  refresh();


    $scope.getdata = function()
    {
      $scope.disabled = false;
      $scope.checked=true;

    $http.get('http://www.omdbapi.com/?t='+$scope.Title+'&y='+$scope.Year).success(function(response)
    {
      $scope.getmovie= response;

      if($scope.getmovie.Title != undefined )
      {

      alert(' movie found');

    }
      else {

        alert('no movie found');
      }


    });

  }


    $scope.addmovie = function () {



        if($scope.getmovie)
        {
          $http.post('/movieapi/addmovie', $scope.getmovie).success(function (response) {

            refresh();
            $scope.getmovie='';
          //  location.reload();
      //  $scope.getmovie=response;
        });
        alert('movie added successfully');
      }

    }





    $scope.deletemovie = function (id) {

      $http.delete('/movieapi/movie/' + id._id).success(function (response) {



      refresh();

        });
  }
};
