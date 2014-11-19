'use strict';

var mainApp = angular.module('mainApp', [
	'ngRoute',
	'mobile-angular-ui',
	// 'ngTouch',
	'dashboardController',
]);

// Routes for mainApp
mainApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'dashboard/dashboard.html',
			controller: 'dashboardController',
			reloadOnSearch: false,
		})
		.otherwise({
			redirectTo: '/'
		})
	}
]);


// mainController
mainApp.controller('mainController', ['$scope', 
	function($scope) {
		$scope.chatUsers = [
			{ name: 'Carlos  Flowers', online: true },
		    { name: 'Byron Taylor', online: true },
		    { name: 'Jana  Terry', online: true },
		    { name: 'Darryl  Stone', online: true },
		    { name: 'Fannie  Carlson', online: true },
		    { name: 'Holly Nguyen', online: true },
		    { name: 'Bill  Chavez', online: true },
		    { name: 'Priscilla Hawkins', online: false },
		    { name: 'Joe Barker', online: false },
		    { name: 'Lee Norman', online: false },
		    { name: 'Ebony Rice', online: false }
		];
	}
]);