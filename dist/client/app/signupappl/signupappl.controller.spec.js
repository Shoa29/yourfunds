'use strict';

describe('Controller: signupapplCtrl', function () {

  // load the controller's module
  beforeEach(module('yourfundFullstackApp'));

  var signupapplCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    signupapplCtrl = $controller('signupapplCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
