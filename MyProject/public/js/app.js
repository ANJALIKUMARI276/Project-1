'use strict'

var angular = require('angular');
require('angular-route');

var app= angular.module('mymovie',['ngRoute']);

 require('./controller');
require('./service');

app.config(function($routeProvider)
{
  $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'HomeController',
          access: {restricted: false}
  }).when('/a',{
        templateUrl: 'views/home.html',
        controller: 'HomeController',
          access: {restricted: true}
  })
  .when('/home', {
              templateUrl : 'views/home.html',
              controller : 'HomeController'
        })

  .when('/theatre', {
                 templateUrl : 'views/theatre.html',
                 controller :  'TheatreController'
        })
  .when('/review', {
                  templateUrl : 'views/review.html',
                  controller : 'ReviewController'

              })
  .when('/movie', {
                  templateUrl : 'views/movie.html',
                  controller : 'MovieController'
        })
  .when('/tm_schedule', {
                  templateUrl : 'views/tm_schedule.html',
                  controller : 'Tm_scheduleController'
        })
  .when('/usermovie', {
                        templateUrl : 'views/usermovie.html',
                       controller : 'UsermovieController'
              })
  .when('/seat', {
                        templateUrl : 'views/seat.html',
                        controller : 'SeatController'
                })
  .when('/confirmation', {
                        templateUrl : 'views/confirmation.html'
                       //controller : 'UsermovieController'
                    })
  .when('/login', {
                          templateUrl: 'views/login.html',
                          controller: 'LoginController',
                        access: {restricted: false}
                  })
  .when('/logout', {
                          controller: 'LogoutController',
                          access: {restricted: true}
                   })
  .when('/register', {
                        templateUrl: 'views/register.html',
                        controller: 'RegisterController',
                        access: {restricted: false}
                    })
  .when('/payment', {
                        templateUrl : 'views/payment.html',
                         controller : 'PaymentController'
                    });
});

app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});
