//(function () {
//	'use strict';
//    /*global
//        alert, confirm, console, prompt, angular
//    */
//    var app = angular.module('myApp', ['ui.router', 'oc.lazyLoad'])
//        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
//            $urlRouterProvider.otherwise('/');
//            $stateProvider.state('app', {
//                url: '/',
//                template: '<app-comp></app-comp>',
//                resolve: {
//                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
//                        return $ocLazyLoad.load(
//                            {
//                                name: "lazyModule",
//                                files: ["./lazy-module.js"]
//                            }
//                        );
//                    }]
//                }
//            });
//
//            $stateProvider.state('user', {
//                url: '/user',
//                template: '<usr-comp></usr-comp>',
//                resolve: {
//                    'MyServiceData': function (MyService) {
//                        return MyService.promise;
//                    },
//                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
//                        return $ocLazyLoad.inject(
//                            {
//                                name: "userModule"
//                            }
//                        );
//                    }]
//                }
//            });
//        }
//            ]
//               );
//
//
//    app.service('MyService', function ($http) {
//        var myData = null, promise = 'data';
//        promise = $http.get('https://api.nasa.gov/planetary/apod?api_key=RGsrp9OwHVBgdY08ejeksgfnqxh6tQ7sfigjotdb').then(function (data) {
//            console.log(data);
//            myData = data.data;
//        });
//        return {
//            promise: promise,
//            setData: function (data) {
//                myData = data;
//            },
//            doStuff: function () {
//                return myData;//.getSomeData();
//            }
//        };
//    });
//
//
//
//    function UserController(MyService) {
//        var self = this;
//
//        console.log('Promise is now resolved: ' + MyService.doStuff());
//        console.log('user');
//
//        this.imageData = MyService.doStuff();
//    }
//
//    angular.module('userModule', []).component('usrComp', {
//        template: '<div>This is the user module <a ui-sref="app">back</a> {{user.imageData}}</div>',
//        controller : UserController,
//        controllerAs: 'user'
//    });
//}());
//







var myapp = angular.module('myApp', ["ui.router"])
    myapp.config(function($stateProvider){
    $stateProvider
        .state('index', {
            url: "",
            views: {
                "header" : {
                    template : '<header class="projects"><h1 class="projects-title">Projects</h1><ul class="projects-filter"><li class="projects-filter-li"><a ui-sref="index" class="projects-filter-link">Index</a></li><li class="projects-filter-li"><a ui-sref="route1" class="projects-filter-link">Web</a></li><li class="projects-filter-li"><a ui-sref="route2" class="projects-filter-link">Digital</a></li></ul></header>',
                    controller : function(){
                        console.log('da');
                    }
                },
                "firstView": {
                    template: "<span class='category-note'>Route 1 &ndash; First View</span>      <img class='project-image' src='https://typecast.com/js/src/images/placeholders/16x9.png'/><h3 class='project-heading-large'>Route 1 &ndash; First View</h3>          <p class='project-desc'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p class='date-note'> January 01, 2014</p>"
                },
                "secondView": {
                    template: "<span class='category-note'>Route 1 &ndash; Second View</span>      <img class='project-image' src='https://typecast.com/js/src/images/placeholders/16x9.png'/><h3 class='project-heading-large'>Route 1 &ndash; Second View</h3>          <p class='project-desc'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p class='date-note'> January 01, 2014</p>"
                }
            }
        })
        .state('route1', {
            url: "/route1",
            views: {
                "header" : {
                    template : '<header class="projects"><h1 class="projects-title">Projects</h1><ul class="projects-filter"><li class="projects-filter-li"><a ui-sref="index" class="projects-filter-link">Index</a></li><li class="projects-filter-li"><a ui-sref="route1" class="projects-filter-link">Web</a></li><li class="projects-filter-li"><a ui-sref="route2" class="projects-filter-link">Digital</a></li></ul></header>',
                    controller : function(){
                        console.log('route1');
                    }
                },
                "firstView": {
                    template: "<span class='category-note'>Route 1 &ndash; First View</span>      <img class='project-image' src='https://typecast.com/js/src/images/placeholders/16x9.png'/><h3 class='project-heading-large'>Route 1 &ndash; First View</h3>          <p class='project-desc'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p class='date-note'> January 01, 2014</p>"
                },
                "secondView": {
                    template: "<span class='category-note'>Route 1 – Second View</span>      <img class='project-image' src='https://typecast.com/js/src/images/placeholders/16x9.png'/><h3 class='project-heading-large'>Route 1 &ndash; Second View</h3>          <p class='project-desc'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p class='date-note'> January 01, 2014</p>"
                }
            }
        })
        .state('route2', {
            url: "/route2",
            views: {
                "header" : {
                    template : '<header class="projects"><h1 class="projects-title">Projects</h1><ul class="projects-filter"><li class="projects-filter-li"><a ui-sref="index" class="projects-filter-link">Index</a></li><li class="projects-filter-li"><a ui-sref="route1" class="projects-filter-link">Web</a></li><li class="projects-filter-li"><a ui-sref="route2" class="projects-filter-link">Digital</a></li></ul></header>',
                    controller : function(){
                        console.log('route2');
                    }
                },
                "firstView": {
                    template: "<span class='category-note'>Route 2 &ndash; First View</span>      <img class='project-image' src='https://typecast.com/js/src/images/placeholders/16x9.png'/><h3 class='project-heading-large'>Route 2 &ndash; First View</h3>          <p class='project-desc'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p class='date-note'> January 01, 2014</p>"
                },
                "secondView": {
                    template: "<span class='category-note'>Route 2 &ndash; Second View</span>      <img class='project-image' src='https://typecast.com/js/src/images/placeholders/16x9.png'/><h3 class='project-heading-large'>Route 2 &ndash; Second View</h3>          <p class='project-desc'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p class='date-note'> January 01, 2014</p>"
                }
            }
        })
    })
