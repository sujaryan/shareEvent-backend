var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller:'EventController',
        templateUrl:'views/event.html'
    })
        .when('/event',{
            controller:'EventController',
            templateUrl:'views/event.html'
        })
        .when('/event/details/:id',{
            controller:'EventController',
            templateUrl:'views/event_details.html'
        })
        .when('/event/add',{
            controller:'EventController',
            templateUrl:'views/add_event.html'
        })
        .when('/books/edit/:id',{
            controller:'EventController',
            templateUrl:'views/edit_event.html'
        })
        .otherwise({
            redirectTO:'/'
        });
})