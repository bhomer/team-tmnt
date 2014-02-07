'use strict';

angular.module('teamTmntApp')
  .directive('dvAppend', function () {
    return {
//      $scope.team = team;
      template: '<div>{{ awesomeText }} {{appendedText }}</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.awesomeText = attrs.text;
        scope.appendedText = attrs.append;
        element.text('this is the dvAppend directive');
      }
    };
  });
