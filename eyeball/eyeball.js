




$(function() {

  var eyeball = $('#eyeball'),
  pupil = $('#eyeball .pupil');

  function makeEyeball( thisEye ) {
    console.log('makeEyeball();');

    thisEye.parallax({
     // relativeInput:true,
     // clipRelativeInput:true,
     //  // calibrateY:false,
     //  limitY:40,
     //  limitX:40,
     //  // invertY:true, 
     //  // invertX:true
     //  frictionX:0.1, 
     //  frictionY:0.1
    });

    // console.log('???' + thisEye)
      
  }

  makeEyeball( eyeball );
  // TweenMax.to(pupil, 0, {scaleX:0.5, scaleY:0.5});





});





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



