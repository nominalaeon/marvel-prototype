/*jshint unused: vars */
define(
  [
    'angular',
    'controllers/main',
    'controllers/comics.ctrl',
    'controllers/powers.ctrl',
    'services/characters'
  ]/*deps*/,
  function (angular, MainCtrl, ComicsCtrl, PowersCtrl, CharactersService, CharactersFactory)/*invoke*/ {
    'use strict';

    /**
     * @ngdoc overview
     * @name appApp
     * @description
     * # appApp
     *
     * Main module of the application.
     */
    
    return angular.module('appApp', [
        'appApp.controllers.MainCtrl',
        'appApp.controllers.ComicsCtrl',
        'appApp.controllers.PowersCtrl',
        'appApp.services.Characters',
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ngTouch'
      ])
      .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })
          .when('/comics', {
            templateUrl: 'views/comics.html',
            controller: 'ComicsCtrl',
            controllerAs: 'comicsCtrl'
          })
          .when('/powers', {
            templateUrl: 'views/powers.html',
            controller: 'PowersCtrl',
            controllerAs: 'powersCtrl'
          })
          // this needs to be the 2nd to last
          // TODO: fix so it doesn't have to be the 2nd to last
          .when('/:offset', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
});
