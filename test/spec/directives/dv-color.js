'use strict';

describe('Directive: dvColor', function () {

  // load the directive's module
  beforeEach(module('teamTmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-color="blue">some text</dv-color>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.css('color')).toBe('blue');
  }));
});
