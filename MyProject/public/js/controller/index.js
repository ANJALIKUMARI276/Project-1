'use strict';

var app=require('angular').module('mymovie');


app.controller('TheatreController', require('./theatreController'));
app.controller('MovieController', require('./movieController'));
app.controller('Tm_scheduleController', require('./tm_scheduleController'));
app.controller('HomeController', require('./homeController'));
app.controller('UsermovieController', require('./usermovieController'));
app.controller('SeatController', require('./seatController'));
app.controller('PaymentController', require('./paymentController'));
app.controller('ReviewController', require('./reviewController'));
app.controller('LoginController', require('./loginController'));
app.controller('LogoutController', require('./logoutController'));
app.controller('RegisterController', require('./registerController'));
