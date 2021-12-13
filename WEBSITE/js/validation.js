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
            var usrname = $('#usrname').val();
            var psw = $('#psw').val();
            $.ajax({
                url: 'php/php_login.php',
                dataType: 'json',
                type: 'POST',
                 data:{
                        usrname: usrname,
                        psw: psw,
                      },
                      success: function (response) {
                          // console.log(response);
                          // var rs = JSON.parse(response);
                        if( response.statusCode  == 200){
                            window.location.href = "succes_post/succes_log.html";
                        } else if( response.statusCode  == 201){
                          let text = "Datele sunt incorecte!";
                          let result = text.fontcolor("red");
                          document.getElementById("ex_user").innerHTML = result;
                        }else if( response.statusCode  == 210){
                          let text = "Error";
                          let result = text.fontcolor("red");
                          document.getElementById("ex_user").innerHTML = result;
                        }
                    },

                  })
           
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
            var usrname = $('#usrname').val();
            var email = $('#email').val();
            var psw = $('#psw').val();
            var pswCheck = $('#pswCheck').val();
            $.ajax({
                url: 'php/server.php',
                dataType: 'json',
                type: 'POST',
                 data:{
                        usrname: usrname,
                        email: email,
                        psw: psw,
                        pswCheck: pswCheck,

                      },
            
                      success: function (response) {
                          // console.log(response);
                          // var rs = JSON.parse(response);
                        if( response.statusCode  == 200){
                            window.location.href = "succes_post/succes_reg.html";
                        } else if( response.statusCode  == 201){
                          let text = "Deja exista persoana cu asa usename in baza de date!";
                          let result = text.fontcolor("red");
                          document.getElementById("ex_reg").innerHTML = result;
                        }else{
                            let text = "Error datele sunt gresite !";
                            let result = text.fontcolor("red");
                            document.getElementById("ex_reg").innerHTML = result;}
                    },
                     
                  })
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
            var name_cont = $('#name_cont').val();
            var email_cont = $('#email_cont').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            $.ajax({
                url: 'php/contact.php',
                dataType: 'json',
                type: 'POST',
                 data:{
                        name_cont: name_cont,
                        email_cont: email_cont,
                        subject: subject,
                        message: message,

                      },
            
                      success: function (response) {
                          // console.log(response);
                          // var rs = JSON.parse(response);
                        if( response.statusCode  == 200){
                            let text = "->Mesajul a fost transmis cu succes!";
                          let result = text.fontcolor("red");
                          document.getElementById("ex_con").innerHTML = result;
                        }else{
                            let text = "->Error datele sunt gresite !";
                            let result = text.fontcolor("red");
                            document.getElementById("ex_con").innerHTML = result;}
                    },
                     
                  })
        }
    });
});
