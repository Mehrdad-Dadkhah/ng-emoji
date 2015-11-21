var demoApp = angular.module('demoApp',['ngEmoji']);

var documentRoot = 'http://test.local/src/';

var testController = demoApp.controller('testController',['$scope', function($scope){

	var init = function(){
		$scope.test = '';
	}

	$scope.$on('emji:addSuccess', function(event, emoji, inputName) {

        $scope[inputName] += ' ' + emoji;
        
    });

	init();
}]);