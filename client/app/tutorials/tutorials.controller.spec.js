'use strict';

describe('Controller: tutorialsCtrl', function () {

  // load the controller's module
  beforeEach(module('yourfundFullstackApp'));

  var tutorialsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    tutorialsCtrl = $controller('tutorialsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
