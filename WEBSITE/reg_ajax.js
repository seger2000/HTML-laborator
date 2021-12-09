$("#reg_user").click(function(e){
    e.preventDefault();
    // let inp = $("#registerForm").serialize();
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
                    window.location.href = "succes_reg.html";
                } else if( response.statusCode  == 201){
                  alert("exist user");
                }else{alert("Eroare datele sunt incorecte");}
            },
              error: function() {
                alert("Eroare datele sunt incorecte");
              }
          })
});