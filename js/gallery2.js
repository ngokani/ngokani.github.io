
(function($) {
  "use strict";

//======= Run on Window Load ============
$(window).load(function(){ 

// >> Owl Carousel
  var owlCarousel = $("#slideshow-gallery");

  owlCarousel.owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: false,
    singleItem: false,  
    items: 3,  
    autoPlay: 8000,
    loop: true,
    //autoplayTimeout: 1000,
    navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"], 
    afterAction: function(el){
     //remove class active
     this.$owlItems.removeClass('active');
     //add class active
     this.$owlItems.eq(this.currentItem +1).addClass('active')    
    }  
  }); 
});
})(jQuery);