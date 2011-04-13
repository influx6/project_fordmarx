  $(function(){
    
 var modal = $('<div id="modal_window"> <script src="javascript/service.js" type="text/javascript"></script><div id="modal_detail"></div><a id="modal_closer" href="#">&nbsp; close X &nbsp;</a></div>');
 
  var height_mod = 100;
  var modal_height = $('body').height() + height_mod;
  var modal_width = $('body').width();
  var modal_visible = false;
  
  
  
 $('a[alt*="modalable"]').click(function(){
      if(modal_visible == false){
   modal.css({width:modal_width, height: modal_height}).fadeIn(500);
   
      
      var src_object = $(this).attr('href');
      var src_image = $("<div id='modal_images'>"+"<img src='"+ src_object+"' alt='"+ src_object+"' />"+"</div>");
      
      modal.find('#modal_detail').html(src_image);
      modal.prependTo('body');
       
     var img_width = $("#modal_images  img").width()+5;
     var img_height = $('#modal_images  img').height()+5;
     var move_left = (modal_width - img_width) /3;
     $('#modal_images').css({ width: img_width, height: img_height, left: move_left}); 
     
      modal_visible = true;



     
      return false;
      }
      });
  
      $('#modal_closer').click(function(){
    
      $('#modal_window').fadeOut(500,function(){
       $(this).remove();
      });
       modal_visible = false;
       return false;
      });


   
  
  });
  