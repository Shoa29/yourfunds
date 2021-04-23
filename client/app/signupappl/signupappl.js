'use strict';

angular.module('yourfundFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signupappl', {
        url: '/signupappl',
        templateUrl: 'app/signupappl/signupappl.html',
        controller: 'signupapplCtrl'
      });
  });