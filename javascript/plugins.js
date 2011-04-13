

  (function($){
    $.fn.slide = function(left,right,speed,cover){
        var enabler = true;

       var slider= $(this);
       //itemlist and width of items
       var items = cover.find('> ul:eq(0)');
       var items_list = items.find('> li');
       var item_width = parseInt(items_list.width());
       var items_size = items_list.length;
       var first_item = items.find("> li:first").position().left;
       var last_item = items.find("> li:last").position().left;

      
       //current_target sets to  the first element;
       var current_target = 1;
       //boolean  variable keeps track of animation
       var animated = false;
       
        
        if (animated == false){
       function cycles(a) {
          var myintervals = null;
         if(a){
          myinterval = setInterval(function(){
            right.trigger('click');
          },5000);
          }
          else{
           clearInterval(myinterval);
          }
         }
       
       cycles(true);
       
      cover.mouseenter(function(event){
          cycles(false);
      }).mouseleave(function(){
         cycles(true);
      });       
      
      
       
       right.click(function(e){
        if( current_target < items_size){
         if(animated == false){
           animated = true;
          cover.animate({left: "-=" + item_width},{ duration: speed, complete: function(){
             current_target += 1;
             animated = false;
          }});
         }
         }
         else{
           cover.animate({ left: first_item},{duration: speed, complete:function(){
            current_target = 1;
           }});
           
         }
       });
       
          left.click(function(e){
        if( current_target > 1){
         if(animated == false){
           animated = true;
          cover.animate({left: "+=" + item_width},{ duration: speed, complete: function(){
             current_target -= 1;
             animated = false;
          }});
         }
         }
         else{
         
           cover.animate({ left: -last_item},{duration: speed, complete:function(){
            current_target = items_size;
           }});
           
         }
       });
       }
      
    }
    
    
  })(jQuery);
  
  


