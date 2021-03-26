'use strict';

describe('Controller: contactusCtrl', function () {

  // load the controller's module
  beforeEach(module('yourfundFullstackApp'));

  var contactusCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    contactusCtrl = $controller('contactusCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
