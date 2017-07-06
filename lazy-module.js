
//vaka nezne so e name component bidejki ne e vo negoviot scoope
angular.module('lazyModule', []).component('appComp', {
  template: 'This is the lazy module <a ui-sref="user">user</a><name-component></name-component>',
    controller : function(){
        console.log('da');
    }
});

//vaka moze da go koristime <name-component>
//angular.module('lazyModule', ['userModule']).component('appComp', {
//  template: 'This is the lazy module <a ui-sref="user">user</a><name-component></name-component>',
//    controller : function(){
//        console.log('da');
//    }
//});
