(function () {
	'use strict';
    /*global
        alert, confirm, console, prompt, angular
    */
    var app = angular.module('myApp', ['ui.router', 'oc.lazyLoad', 'headerModule'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('app', {
                url: '/',
                template: '<app-comp></app-comp>',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: "lazyModule",
                                files: ["./lazy-module.js"]
                            }
                        );
                    }]
                }
            });

            $stateProvider.state('user', {
                url: '/user',
                template: '<usr-comp></usr-comp>',
                resolve: {
                    'MyServiceData': function (MyService) {
                        return MyService.promise;
                    },
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: "userModule"
                            }
                        );
                    }]
                }
            });
        }
            ]
               )


    app.service('MyService', function ($http) {
        var myData = null, promise = 'data';
        promise = $http.get('https://api.nasa.gov/planetary/apod?api_key=RGsrp9OwHVBgdY08ejeksgfnqxh6tQ7sfigjotdb').then(function (data) {
            console.log(data);
            myData = data.data;
        });
        return {
            promise: promise,
            setData: function (data) {
                myData = data;
            },
            doStuff: function () {
                return myData;//.getSomeData();
            }
        };
    });


    function UserController(MyService) {
        var self = this;

        console.log('Promise is now resolved: ' + MyService.doStuff());
        console.log('user');

        this.imageData = MyService.doStuff();
    }

    angular.module('userModule', []).component('usrComp', {
        template: '<div>This is the user module <a ui-sref="app">back</a> {{user.imageData}}</div> <name-component>Aleks</name-component>',
        controller : UserController,
        controllerAs: 'user'
    }).component('nameComponent', {
        template: '<div>YES</div>'
    });;

    function HeaderController(){
        console.log('da');
    }

    angular.module('headerModule', []).component('headerComponent',{
        templateUrl	 : './templates/header.html',
        controller : HeaderController,
        replace : true,
        controllerAs: 'header'
    })
}());
