'use strict';

require('angular');
require('angular-route')

var init = function (){

  var scrom = angular.module('scrom', ['ngRoute']);
  scrom.config(function ($routeProvider){
    $routeProvider
    .when('/projects', {
      'templateUrl': 'templates/project_list.html',
      'controller': 'ProjectListCtrl'
    })
    .otherwise({redirectTo: '/'});

  });


  scrom.controller('ProjectListCtrl',
    function ($scope) {
      $scope.projects = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  );

}

init();
