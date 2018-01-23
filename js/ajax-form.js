$(function() {
    $('#hidepaypal').style.visibility = 'hidden';
    $('.popup button[type=submit]').click(sendForm);
})



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
               
                $('#hidepaypal').style.visibility = 'visible';
                $('#contact-send2').style.display = 'none';
                 alert("Thank you");
                
            })
            .fail(function(e) {
                alert("sorry");
                
            });
    }
}

