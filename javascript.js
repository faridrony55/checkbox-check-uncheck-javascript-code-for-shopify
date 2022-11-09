 $(document).ready(function(){
 
  $(".CustomTerms input").on('change',function(){ 
    if ($(this).is(':checked')) {
      $(".cartNotfication").css({"visibility":"visible", "opacity":"1"}) ;
    }   else {
      $('.btn.btn-checkout').attr('disabled','disabled');
      $(".cartNotficationBox input").prop("checked", false);
    } 
});
 
   
  $("#do").on('change',function(){
     if ($(this).is(':checked')) {
        $(".cartNotfication").css({"visibility":"hidden", "opacity":"0"})
        console.log('huhaha');
        $('.btn.btn-checkout').removeAttr('disabled');
    }    
});
$(".cartNotficationBox .close").on('click',function(){ 
        $(".cartNotfication").css({"visibility":"hidden", "opacity":"0"})
       $('.CustomTerms input').prop('checked', false);  
    
});

   
  $(".gotoCart input").on('change',function(){
     if ($(this).is(':checked')) {
       window.location.href = "https://bordermanage.com/cart";  
    }    
});


  

   
});
