angular jqLazyload!
===========
AngularJS (Angular) directive for jquery lazyload plugin.

> Lazy Load delays loading of images in long web pages. Images outside of viewport wont be loaded before user scrolls to them. This is opposite of image preloading.
>
> Using Lazy Load on long web pages containing many large images makes the page load faster. Browser will be in ready state after loading visible images. In some cases it can also help to reduce server load.

##Usage
```html
<script src="angular.min.js"></script>
<script src="jquery.min.js"></script>
<script src="jquery.lazyload.min.js"></script>
<script src="angular-jqLazyload.min.js"></script>

```
```js
angular.module('app', ['jqLazyload'])
  .config(['$jqLazyloadProvider', function($jqLazyloadProvider){

    // config lazyload options here
    $jqLazyloadProvider.options = {
      effect: 'fadeIn'
    }
  }])
```
```html
<img jq-lazyload data-original="{{image}}">
```
##License
**MIT**