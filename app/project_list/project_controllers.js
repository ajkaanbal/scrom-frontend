'use strict'
require('angular-ui-tree')

var project_list_controller  = angular.module('project_list_controller', [
  'scrom.config'
]);

project_list_controller.controller('ProjectListCtrl',
  ['$scope', '$http', 'API_URL', 'PROJECTS_PATH',
  function ($scope, $http, API_URL, PROJECTS_PATH) {
    var projects_url = API_URL + PROJECTS_PATH;
    $scope.url = projects_url;

    $http.get(projects_url)
    .success(function (data, status, headers, config){
      $scope.projects = data.projects;
    })
    .error( function (data, status, headers, config) {
      $scope.projects = []
    })

  }]
);


var project_details_controller = angular.module('project_details_controller', [
  'scrom.config'
]);

project_details_controller.controller('ProjectDetailsCtrl',
  ['$scope', '$http', '$routeParams', 'API_URL', 'PROJECTS_PATH',
  function ($scope, $http, $routeParams, API_URL, PROJECTS_PATH) {
      var project_url = API_URL + PROJECTS_PATH + '/' + $routeParams.project_name;
      console.log('Project url');
      console.log(project_url);


      $http.get(project_url)
      .success( function (data, status, headers, config) {
        $scope.project = data

      })
      .error( function (data, status, headers, config) {
        $scope.project = {}
      });

  }]
);
