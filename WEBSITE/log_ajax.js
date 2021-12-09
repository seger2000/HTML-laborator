$("#loginhover").click(function(e){
    e.preventDefault();
    // let inp = $("#registerForm").serialize();
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
                    window.location.href = "succes_log.html";
                } else if( response.statusCode  == 201){
                  alert("exist user");
                }else{alert("Eroare datele sunt incorecte");}
            },
              error: function() {
                alert("Campurile nu snut completate");
              }
          })
});