$(function() {
    $("#hidepaypal").css("display", "none");
    $('#overlay button[type=submit]').click(sendForm);
    $('#contactform input[type=submit]').click(sendFormCallToAction);
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

                $("#hidepaypal").css("display", "block");
                $("#contact-send2").css("display", "none");
                $("#terms-chek").css("visibility", "hidden");
                $("#overlay .form-control").css("visibility", "hidden");

                alert("Data sent.");

            })
            .fail(function(e) {
                alert("Incorrect data");

            });
    }
}


function sendFormCallToAction(e) {
    e.preventDefault();

    // var check = true;
    // if ($('#name').val() == '' || $('#email').val() == '' || $('#wallet').val() == '' || $('#amount').val() == '') {
    //     check = false;
    //      alert("empty field");
    // }
    // if ($('#terms').prop("checked") == false) {
    //     check = false;
    //      alert("accept terms and conditions.");
    // }
    // if (check) {

    $.ajax({
            url: "https://formspree.io/skipokylas@gmail.com",
            method: "POST",
            data: {
                name: $('#name-call-to-action').val(),
                email: $('#email-call-to-action').val()

            },
            dataType: "json"
        })
        .done(function() {



            alert("Data sent.");

        })
        .fail(function(e) {
            alert("Incorrect data");

        });
    // }
}