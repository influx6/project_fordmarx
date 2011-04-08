 $(function(){
  var cover = $("#slider_cover");
  var slider = cover.parent();
  var left = $('#left').addClass('left');
  var right = $('#right').addClass('right');
   var speed= 3000;
   slider.css({'overflow':'hidden'});
   
   slider.slide(left,right,speed,cover);
   });