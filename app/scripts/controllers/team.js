'use strict';

angular.module('teamTmntApp')
  .controller('TeamCtrl', function ($scope) {
      $scope.clickCount = 0;
      $scope.mouseClicked = function() {
            $scope.clickCount++;
      }
      
      $scope.downloadFrogs = function() {
          $http.get('/frogs').success(function(data) {
              $scope.frogs = data;
          });
          
      }
  });
 