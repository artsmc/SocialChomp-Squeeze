define(function (require) {
  require('waves');
 	require('clamp.min');
 	require('jquery.backstretch.min');
  		$(function() {//start doing cool shit here 
          $(window).resize(function(){
            if($(window).width()<= 1066){
              $("#section1").css({
                'height':$("#section1 .container").height()
              });
              $('body').css({
                'font-size':'80%'
              });
            }else{
              $('body').css({
                'font-size':'100%'
              });
              $("#section1").css({
                'height':$(window).height()-100
              });
            }
          });
          //SECTION 1 SIZING
          if($(window).width()<= 1066){
            $('body').css({
                'font-size':'80%'
              });
            $("#section1").css({
              'height':$("#section1 .container").height()
            });
          }else{
            $('body').css({
                'font-size':'100%'
              });
            $("#section1").css({
              'height':$(window).height()-100
            });
          }
          //SET THE BACKGROUND TO COVER
       		 $("#section1").backstretch("images/bg_cover.jpg");
           $("#section5").backstretch("images/bg_cover.jpg");
           var timing;
           //ANIMATE THE BOX INTRO AND LOOP OVER TIMING FOR EACH BOX
           var len = $('.box').length;
           $('.box').each(function(i,e){
              //timing
              timing = 50*i;
              var boxes = $(this);
              //interval
              var animateBox = setTimeout(function(){
                  boxes.removeClass('box-out').addClass('box-in');
              }, timing+300);
           });
           //ANIMATION FOR BIG BOX
           var bigBox = setTimeout(function(){
                  $('.big-box').removeClass('box-out').addClass('box-in');
              }, 1000);
           $('.big-box div').each(function(i,e){
              //timing
              timing = 50*i;
              var boxes = $(this);
              //interval
              var animateBox = setTimeout(function(){
                  boxes.removeClass('box-out').addClass('box-in');
              }, timing+1300);
           });
           $('.moving-box').each(function(i,e){
              //timing
              timing = 50*i;
              var boxes = $(this);
              //interval
              var animateBox = setTimeout(function(){
                  if(boxes.hasClass('move-out')){
                    boxes.removeClass('move-out').addClass('move-in');
                  }else{
                    boxes.removeClass('move-in').addClass('move-out');
                  }
              }, timing+2200);
           });
           //ANIMATION FOR CONVERT BOX
           var convertBox = setTimeout(function(){
                  $('.convert').removeClass('box-out').addClass('box-in');
              }, 1700);

    });//END APP

});
