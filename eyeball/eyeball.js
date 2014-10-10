

$(function() {

      function makeEyeball( thisEye ) {

          thisEye.parallax({

             relativeInput:true,
             clipRelativeInput:true,
             limitY:40,
             limitX:40,
                  //// invertY:true, 
                  //// invertX:true
             frictionX:0.4, 
             frictionY:0.4
          });            

          if (Modernizr.touch) {
            thisEye.parallax('invert', false, false);
          }  
      
      }
      // makeEyeball( eyeball );



      $('.eyeball').each(function() {

        var thisEye = $(this);


//  NOT SURE HOW TO ADD MULIT-LINE HTML STRING ALL AT ONCE... (THIS DOES NOT WORK.)
        // var parts =  $("
        //                 <div class='layer ball'  data-depth='-.5'></div>\
        //                 <div class='layer iris'  data-depth='-2'></div>\
        //                 <div class='layer pupil' data-depth='-2.1'></div>\
        //               ");
        // thisEye.append(parts);
        

//..IT COULD BE ADDED ALL ON ONE LINE, BUT DIFFICULT TO MANAGE..
        var parts =  $("<div class='layer ball'  data-depth='-.5'></div><div class='layer iris'  data-depth='-2'></div><div class='layer pupil' data-depth='-2.1'></div>");
        thisEye.append(parts);


//..OR BREAK IT UP INTO INDIVIDUAL LINES/DIVS FOR LEGIBILITY.
        // var ball = $('<div class="layer ball"       data-depth="-.5"></div>');
        // var iris = $('<div class="layer iris"       data-depth="-2"></div>');
        // var pupil = $('<div class="layer pupil"       data-depth="-2.1"></div>');
             
        // thisEye.append(ball);
        // thisEye.append(iris);
        // thisEye.append(pupil);


        var iris = thisEye.find('.iris'),
            // pupil = thisEye.find('.pupil'),
            // ball = thisEye.find('.ball'),
            size = thisEye.data('size'),
            color = thisEye.data('color');


        //console.log(size);

        if(size !== undefined) {          
          thisEye.css({
            'width': size + 'px',
            'height': size + 'px'
          });
        }

        if(color !== undefined) {          
          iris.css({
            'background-color': color,
          });
        }


        makeEyeball(thisEye);

      });
      



});

















// SCRAPS:
// 
// getPupilPositionsFromMousePosition: function (x, y) {
//             // Normalise x and y to container page offset
//             var offset = this.getOffset();
//             x = x - offset.left;
//             y = y - offset.top;
            
//             // Get distances from eye origins to mouse position
//             x1 = x - this.origins.x1;
//             y1 = y - this.origins.y1;
//             x2 = x - this.origins.x2;
//             y2 = y - this.origins.y2;
            
//             // Calculate hypotenuse
//             var d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
//             var d2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
            
//             // Calculate scale factor of hypotenuse to radius
//             var sf1 = this.radius / Math.max(d1, this.radius);
//             var sf2 = this.radius / Math.max(d2, this.radius);
            
//             // Scale distances and get pupil coordinates relative to canvas
//             return {
//                 x1: this.origins.x1 + (x1 * sf1),
//                 y1: this.origins.y1 + (y1 * sf1),
//                 x2: this.origins.x2 + (x2 * sf2),
//                 y2: this.origins.y2 + (y2 * sf2)
//             };
//         }





    // var mX, mY, distance,
    //     //$distance = $('#distance span'),
    //     $element  = $('.eyeball1');

    // function calculateDistance(elem, mouseX, mouseY) {
    //     return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    // }

    // $(document).mousemove(function(e) {  
    //     mX = e.pageX;
    //     mY = e.pageY;
    //     distance = calculateDistance($element, mX, mY);
    //     //$distance.text(distance);         
    // });



