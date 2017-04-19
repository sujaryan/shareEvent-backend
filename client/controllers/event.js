var myApp = angular.module('myApp');


myApp.controller('EventController',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('eventController loaded....');



    $scope.getevent = function () {
        $http.get('/api/event').success(function(response){
            $scope.event = response;
        });
    }
}])