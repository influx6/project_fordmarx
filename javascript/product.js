$(function(){
    
    
   $("#sbpm ul li").click(function(){
     $(this).find('> ul:eq(0)').toggle(300);
   });


  var modal = $('<div id="modal_window"> <script src="javascript/product.js" type="text/javascript"></script><div id="modal_detail"></div><a id="modal_closer" href="#">&nbsp; close X &nbsp;</a></div>');
  var height_mod = 100;
  var modal_height = $('body').height() + height_mod;
  var modal_width = $('body').width();
  
  var modal_visible = false;
  
  
  
 $('a[alt*="modalable"]').click(function(){
      if(modal_visible == false){
   modal.css({width:modal_width, height: modal_height}).fadeIn(500);
   
      
      var src_object = $($(this).attr('href'));
      modal.find('#modal_detail').html(src_object.html());
      modal.prependTo('body');
      
      
      modal_visible = true;
      
        $('a[alt*="touchable"]').click(function(){
      var  src_object = $($(this).attr('href'));
       
        $('.product_desc_shown').hide(300);
        src_object.show(500);
      
         return false;
        });
    



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