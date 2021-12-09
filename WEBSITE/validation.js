$(document).ready(function () {

    // LogIn validate
    $("#loginForm").validate({
        rules: {
            usrname: {
                required: true,
                minlength: 4
            },
            psw: {
                required: true,
                minlength: 6
            },
        },
        messages: {
            usrname: {
                required: "* Please enter a username ",
                minlength: "* Please enter a username more than 4"
            },
            psw: {
                required: "* Please enter a password ",
                minlength: " * Please enter a username more than 6"
            },
        },
        submitHandler: function (form) {
            form.submit();
           
        }
    });

    // Register validate
    $("#registerForm").validate({
        rules: {
            usrname: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            psw: {
                required: true,
                minlength: 6
            },
            pswCheck: {
                minlength: 6,
                equalTo: "#psw"
            }
        },
        messages: {
            usrname: {
                required: "* Please enter your username",
                minlength: "* Please enter at least 4 characters."
            },
            email: {
                required: "* Please enter a email address",
                email: "* Please enter a valid email address."
            },
            psw: {
                required: "* Please enter a password",
                minlength: "* Please enter at least 6 characters."
            },
            pswCheck: {
                minlength: "* Please enter at least 6 characters.",
                equalTo: "* Please enter the same value again."
            }
        },

        submitHandler: function (form) {
            form.submit();
        }
    });

    // Contact validate
    $("#contactForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            subject: "required",
            message: "required"
        },
        messages: {
            name: "* Please enter your first name",
            email: {
                required: "* Please enter a email address",
                email: "* Please enter a valid email address"
            },
            subject: "* Please enter a subject",
            message: "* Please enter a message"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
