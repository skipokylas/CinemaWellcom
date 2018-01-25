$('#paypal').on('click', function(event) {

    document.getElementById('overlay').style.display='block';

});

$('.close').on('click', function(event) {
   
        $( "#overlay" ).css( "display", "none" );
 
});


$('#contact').on('click', function(event) {
   
        $("#CallToAction").css("display", "block");
 
});

$('#CallToAction .close').on('click', function(event) {
   
        $( "#CallToAction" ).css( "display", "none" );
 
});
