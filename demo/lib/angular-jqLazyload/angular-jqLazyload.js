(function(){
  'use strict';

  angular.module("jqLazyload", [])
    .provider('$jqLazyload', function(){ 
      this.$get = function() {
        return  {
          options: this.options
        }
      }
    })
    .directive('jqLazyload',['$jqLazyload', function($jqLazyload){
      return {
        restrict: "AC",
        link: function(scope, elem, attrs, controller) {
          attrs.$observe("original", function(newVal) {
            if(!newVal) return;
            $(elem).lazyload($jqLazyload.options);
          })
        }
      };
    }])
})();