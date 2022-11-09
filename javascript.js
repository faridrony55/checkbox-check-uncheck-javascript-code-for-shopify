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




 

<div class="addTocartNotfication homeProduct2" >
  <div class="addTocartNotficationBox">
    <span class="closed">x</span>
    <h1>{{ settings.cart_popup_title }}</h1>
    <h6>{{ settings.cart_popup_subtitle }}</h6>
    <div>                
      {{ settings.cart_popup_desc }}
      <div>
        <!--<input data-btn-addToCart type="submit" name="add" class="btn product-add-to-cart-Modal" id="product-add-to-carts" value="I Agree" data-form-id="#add-to-cart-form">-->
		 
		<button data-product-id="7746044657916" data-checkout="cart" data-soldout="Sold out" data-adding="Adding..." data-added="Thank you!" type="button" data-pf-type="ProductATC" class="btn product-add-to-cart-Modal"><span data-pf-type="Text" >I Agree</span></button>
		
      </div>
    </div> 
  </div>
</div>

<script>
 $(document).ready(function(){
   
$(".product-add-to-cart-Modal2").on('click',function(){  
      $(".homeProduct2").css({"visibility":"visible", "opacity":"1"}) ;   
});
$(".addTocartNotficationBox .closed").on('click',function(){ 
        $(".homeProduct2").css({"visibility":"hidden", "opacity":"0"}) 
    
});
   
});
 
</script>

<style>
  .addTocartNotfication {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    background-color: #01010152;
    visibility: hidden;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
}
.addTocartNotficationBox {
  text-align:center;
    max-width: 550px;
    /* height: 300px; */
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  position:relative;
}
.addTocartNotficationBox .closed {
    position: absolute;
    top: -15px;
    right: -8px;
    font-size: 30px;
    font-weight: 500;
}
.addTocartNotficationBox > div{
  display:flex;
    align-items: end;
    flex-direction: column;
}
.addTocartNotficationBox > div > div{
  
  display:flex;
  align-items:flex-end; 
}
  
.addTocartNotficationBox > div > div .product-add-to-cart-Modal {
    display: block;
    margin-top: 5px;
 
    font-size: 12px;
    min-width: auto;
    height: auto;
    padding: 3px 12px !important;
    background: #167589 !important;
  color:#fff;
    border: 0;
 
}
</style>
