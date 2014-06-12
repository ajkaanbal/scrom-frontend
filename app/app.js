(function(){
	'use strict';

	angular.module('app', [ 'ngRoute','app-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
})();
