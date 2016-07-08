var Movie_Store_App = angular.module('Movie_Store_App', [
	'ngRoute',
	'ngResource',
	'ngCookies',
	'angularUtils.directives.dirPagination',
	'ui.calendar',
	'ngFileUpload',
	'ngImgCrop',
	'xeditable',
	'ngPasswordMeter',
	'luegg.directives',
	'btford.socket-io'])
.config(function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'https://www.youtube.com/**'
		]);
});

Movie_Store_App.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});