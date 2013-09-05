'use strict';

angular.module('SSCampaignApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        //controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
