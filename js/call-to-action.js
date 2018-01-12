jQuery(function(f) {
    var element = f('.call-to-action');
    f(window).scroll(function() {
        element['fade' + (f(this).scrollTop() > 600 ? 'In' : 'Out')](500);
    });
});