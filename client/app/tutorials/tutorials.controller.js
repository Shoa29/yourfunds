'use strict';

angular.module('yourfundFullstackApp')
  .controller('tutorialsCtrl', function ($scope,$location) {
    $scope.pageName = 'tutorials';

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
