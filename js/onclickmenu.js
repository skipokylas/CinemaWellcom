// $(document).ready(function() {

//         $("#show-menu, #cl").click(function() {
//         	 if (self.innerWidth < 1150) {
//             $("#menu").slideToggle();
//             }
//         });

// });
$(document).ready(function(){
    $("#mobileMenu li").click(function(){
        $("#mobileMenu").slideToggle("slow");
         $(".burger_menu_block_off").toggleClass("burger_menu_block_on");
            $(".line1").toggleClass("line4");
            $(".line3").toggleClass("line6");
            $(".line2").toggleClass("line5");
    });
});
$(document).ready(function() {
    $('.burger_click').click(function() {
        $(".burger_menu_block_off").toggleClass("burger_menu_block_on");
        $(".line1").toggleClass("line4");
        $(".line3").toggleClass("line6");
        $(".line2").toggleClass("line5");
    });
});

$(document).ready(function(){
    $(".burger_click").click(function(){
        $("#mobileMenu").slideToggle("slow");
    });
});