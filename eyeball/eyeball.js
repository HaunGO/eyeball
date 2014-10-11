// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).










    // Create the defaults once
    var pluginName = "EyeBall",
        defaults = {
          ballColor: "#f5f0d8",
          irisColor: "#00bff3",
          pupilColor: "#333",
          size: '100'
        },
        EYEBALL;




    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }









    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () 
        {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.settings
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.settings).

            console.log("eyeball created!");
            // console.log(this.settings);
            
            EYEBALL = $(this.element);

            this.buildParallax();
            this.setColors();
            this.setSize();

        },
        buildParallax: function() {
            // ADD THE NESTED DIVS WITH THE CLASS AND DATA FOR THE PARALLAX.JS
            var BallIrisPupil =  $("<div class='layer ball'  data-depth='-.5'></div><div class='layer iris'  data-depth='-2'></div><div class='layer pupil' data-depth='-2.1'></div>");

            EYEBALL.append(BallIrisPupil);

            EYEBALL.parallax({
               relativeInput:true,
               clipRelativeInput:true,
               limitY:40,
               limitX:40,
               frictionX:0.4, 
               frictionY:0.4
            });

            if(Modernizr.touch){
               EYEBALL.parallax('invert', false, false);
            }  

        },
        // blink: function() 
        // {
        //     console.log('>blink<');
        // },
        setColors: function() 
        {
            // IF THERE ARE CUSTOM SETTING SENT VIA CONSTRUCTOR FUNCTION, 
            // IT WILL OVERWRITE THE DATA-COLOR ATTRIBUTE:
            if(this.settings.irisColor === defaults.irisColor){  
              var color = EYEBALL.data('color');
              if(color !== undefined) {          
                this.settings.irisColor = color;
              }
            }

            // SET THE COLOR OF THE IRIS.
            EYEBALL.find('.iris').css({
              'background-color': this.settings.irisColor
            });

        },
        setSize: function() 
        {
            // IF THERE ARE CUSTOM SETTING SENT VIA CONSTRUCTOR FUNCTION, 
            // IT WILL OVERWRITE THE DATA-COLOR ATTRIBUTE:
            if(this.settings.size === defaults.size){  
              var size = EYEBALL.data('size');
              if(size !== undefined) {          
                this.settings.size = size;
              }
            }

            // SET THE SIZE OF THE EYEBALL
            EYEBALL.css({
              'width': this.settings.size + 'px',
              'height': this.settings.size + 'px'
            });
        },





    });






// var blink = function() {
//   console.log('>blink<');
// };


// function blink() {
//   console.log('>blink<');
// }








    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
        this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });


        // chain jQuery functions
        return this;
    };





})( jQuery, window, document );






