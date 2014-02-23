
/*
 * Simple Carousel 
 * Copyright 2014, Ed Chao - @edchao
 * Free to use under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

;(function ( $, window, document, undefined ) {
    
    var pluginName = 'carousel',
        defaults = {
            speed: 1000
        };

    // The actual plugin constructor (pass in element and options)
    function Plugin( el, options ) {
        this.el = el;
        this.options = $.extend( {}, defaults, options) ; // combines defaults and options into a single object
        this._defaults = defaults;
        this._name = pluginName;
        this.init(el);
    }

    Plugin.prototype = {

      // initialize plugin 
      init: function(el){
        this.bindClick(el)
      },

      // listen for clicks to the .carousel-back and .carousel-fwd buttons
      bindClick: function(el){
        var that = this; 
        $(el).siblings('.carousel-back').on('click', function(){
          event.preventDefault();
          event.stopPropagation();
          that.shiftBack(el);
        });
        $(el).siblings('.carousel-fwd').on('click', function(){
          event.preventDefault();
          event.stopPropagation();
          that.shiftFwd(el);
        });     
      },

      // shift div queue backward by inserting the last div to front
      // and then revealing it by animating margin-left
      shiftBack: function(el){
        var that = this;
        var elWidth = $(el).children().first().outerWidth();
        $(el).children().last().insertBefore($(el).children().first());
        $(el).children().first().css({'margin-left' : -elWidth});
        $(el).children().first().animate({
          'margin-left': 0
        }, that.options.speed, function(){
          // add callback behavior here
        });
      },

      // shift div queue forward by animating margin-left and then
      // inserting the first element to the back
      shiftFwd: function(el){
        var that = this;
        var elWidth = $(el).children().first().outerWidth();
        $(el).children().first().animate({
          'margin-left':  -elWidth 
        },that.options.speed, function(){
          $(el).children().first().insertAfter($(el).children().last());
          $(el).children().last().css({'margin-left' : 0});
        });
      }
    }

    // Zeno Rocha's plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, 
          new Plugin( this, options ));
        }
      });
    }

})( jQuery, window, document );



// Example Use
$('.carousel').carousel( {speed: 1000} );


