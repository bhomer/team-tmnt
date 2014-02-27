'use strict';

describe('TestCtrl', function () {
    beforeEach(module('tmntApp'));
    var scope;
    
    
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope
    });
}));
    it('counts mouse clicks', function() {
        scope.mouseClicked();
        expect(scope.clickCount).toBe(1)
    });
    
    it('counts 2 mouse clicks', function() {
        scope.mouseClicked();
        scope.mouseClicked();
        expect(scope.clickCount).toBe(2)
    });
});

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('teamTmntApp'));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.team).toBe(10);
  });
    
    it('downloads frogs from server on click', inject(function($httpBackend) {
        $httpBackend.expectGET('/frogs').respond([{name: 'Kermit'},{name: 'Frog'}]);
        scope.downloadFrogs();
        $httpBackend.verifyNoPendingRequests();
    }));
});
