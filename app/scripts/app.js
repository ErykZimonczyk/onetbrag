'use strict';

/**
 * @ngdoc overview
 * @name onetBragApp
 * @description
 * # onetBragApp
 *
 * Main module of the application.
 */
angular
  .module('onetBragApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
