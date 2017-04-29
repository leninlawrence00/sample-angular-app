var ToDoApp = angular.module('ToDoApp',['ui.router']);

ToDoApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home')
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'partial-home.html'
    }).state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
    .state('about', {
         url:'/about',
         views:{
             '':{templateUrl:'partial-about.html'},
             'columnOne@about':{template:'Hai how are you'},
             'columnTwo@about': { 
                templateUrl: 'table-data.html',
                controller: 'toDoController'
            }
         }      
     });
})

ToDoApp.controller('toDoController',function($scope){
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
})