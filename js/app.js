'use strict';
var app = angular.module('application', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {



$stateProvider.state('home', {
           url: '/',
           templateUrl: 'templates/home/home.html',
           controller: 'home'
       })

$stateProvider.state('edit', {
                  url: '/edit/:id',
                  templateUrl: 'templates/editEmployee/editEmployee.html',
                  controller: 'editEmployee'
              })

$urlRouterProvider.otherwise('/')


}])
