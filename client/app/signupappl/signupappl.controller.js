'use strict';

angular.module('yourfundFullstackApp')
  .controller('signupapplCtrl', function ($scope,$location) {
    $scope.pageName = 'signupappl';

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
