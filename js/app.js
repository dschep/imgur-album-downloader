angular.module('imgurDownloader', [])
	.config(['$compileProvider', function ($compileProvider) {
		$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
	}])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/album.html',
				controller: 'AlbumCtrl'
			})
			.when('/:albumid', {
				templateUrl: 'partials/album.html',
				controller: 'AlbumCtrl'
			})
			.otherwise({redirectTo: '/'});
	}]);

