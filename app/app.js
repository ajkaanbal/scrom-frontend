'use strict';

require('angular');
require('angular-route');
require('./config')
require('./project_list/project_controllers')

var init = function (){

  var scrom = angular.module('scrom', [
    'ngRoute',
    'project_list_controller',
    'project_details_controller'
  ]);

  scrom.config(function ($routeProvider){
    $routeProvider
    .when('/projects', {
      'templateUrl': 'templates/project_list.html',
      'controller': 'ProjectListCtrl'
    })
    .when('/projects/:project_name', {
      'templateUrl': 'templates/project_details.html',
      'controller': 'ProjectDetailsCtrl'
    })
    .otherwise({redirectTo: '/'});


  });


}

init();
