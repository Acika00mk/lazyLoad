
angular.module('lazyModule', []).component('appComp', {
  template: 'This is the lazy module <a ui-sref="user">user</a>',
    controller : function(){
        console.log('da');
    }
});
