'use strict';

angular.module('yourfundFullstackApp')
  .controller('contactusCtrl', function ($scope,$location) {


    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };


  });
