$(function() {
    $('.popup button[type=submit]').click(sendForm);
})

// $(function() {
//     $('.popup button[type=submit]').click(function() {

//         var check = true;
//         if ($('#name').val() == '' || $('#email').val() == '' || $('#wallet').val() == '' || $('#amount').val() == '') {
//             check = false;
//         }
//         if ($('#terms').prop("checked") == false) {
//             check = false;
//         }

//         if (check) {

//         }

//     });
// });


function sendForm(e) {
    e.preventDefault();

    var check = true;
    if ($('#name').val() == '' || $('#email').val() == '' || $('#wallet').val() == '' || $('#amount').val() == '') {
        check = false;
         alert("empty field");
    }
    if ($('#terms').prop("checked") == false) {
        check = false;
         alert("accept terms and conditions.");
    }
    if (check) {

        $.ajax({
                url: "https://formspree.io/skipokylas@gmail.com",
                method: "POST",
                data: {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    subject: $('#wallet').val(),
                    text: $('#amount').val()
                },
                dataType: "json"
            })
            .done(function() {

                $('form')[0].reset();
                alert("Thank you")
                window.open("http://ya.ru");
            })
            .fail(function(e) {
                alert("sorry");
                 window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JSKL725FANHDN");
            });
    }
}