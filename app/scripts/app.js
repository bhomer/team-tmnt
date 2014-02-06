'use strict';

angular.module('teamTmntApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: "MainCtrl"
    })
    .state('team', {
      url: "/team/:teamId",
      templateUrl: "views/team.html",
      controller: 'TeamCtrl',
        resolve: {
            team: function($stateParams, Team) {
                
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })

    });
