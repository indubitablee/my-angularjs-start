'use strict';

var mainApp = angular.module('mainApp', [
	'ngRoute',
	'mobile-angular-ui',
	'dashboardController',
	// 'controllers', // for controller.js
	// other dependencies of this app, like controllers, services, etc.
]);

// Routes for mainApp
mainApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'dashboard/dashboard.html',
			controller: 'dashboardController'
		})
		.otherwise({
			redirectTo: '/'
		})
	}
]);