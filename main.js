(function () {
	'use strict';
    /*global
        alert, confirm, console, prompt, angular
    */
    angular.module('myApp', ['ui.router', 'oc.lazyLoad'])
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
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.inject(
                            {
                                name: "userModule"
                            }
                        );
                    }]
                }
            });
        }
            ]
               );


    angular.module('userModule', []).component('usrComp', {
        template: 'This is the user module',
        controller : function () {
            console.log('user');
        }
    });
}());
