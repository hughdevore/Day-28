angular.module('app.controllers',[])
.controller('HttpCtrl', function($scope, $http) {
	// Initializing the scope properties
	$scope.imageURL = '';
	$scope.caption = '';
	$scope.content= [];
	$scope.displayError = true;
	$scope.openForm = true;
	$scope.addButton = true;

	$scope.onAddButton = function() {
		$scope.openForm = false;
		$scope.addButton = false;
	}

	$scope.onCancelButton = function() {
		$scope.openForm = true;
		$scope.addButton = true;
	}

	// Making a get request to the server
	var promise = $http.get('https://tiny-pizza-server.herokuapp.com/collections/HughImageFeed')
	.success(function(response) {
		// Successfully received a response from the server

		$scope.content = response;
	})
	.error(function(err) {
		// Got an error back from the server
		$scope.displayError = false;
		$scope.error = err;
	})

	$scope.sendData = function(imageURL, caption) {
		// Sending my message data to the server
		if($scope.form.$valid){
			$scope.openForm = true;
			$scope.addButton = true;
			$http.post('https://tiny-pizza-server.herokuapp.com/collections/HughImageFeed', {imageURL: imageURL, caption: caption});
		}
	}


});