<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="public/css/main.css">
    <!-- Font-icon css-->
    <link rel="stylesheet" type="text/css"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--libreria modal-------------------->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css" />
    <link rel="stylesheet" href="public/css/modal_succes.css">

    <title>login Catalogo</title>
</head>

<body>

    <!-- <section class="login-content">
        <div class="login-box">
            <form class="login-form" id="loginForm">
                <h3 class="login-head">
                    <img src="public/img/logo.png" style="width: 80px;height: 80px;">
                </h3>
                <div class="form-group">
                    <label class="control-label">Usuario</label>
                    <input class="form-control" type="text" name="textUsers" placeholder="Usuario" autofocus>
                    <span class="help-block textUsers"></span>
                </div>
                <div class="form-group">
                    <label class="control-label">Contraseña</label>
                    <input class="form-control" type="password" name="textPassword" placeholder="Contraseña">
                    <span class="help-block textPassword"></span>
                </div>
                <span id="mensaje"></span>
                <div class="form-group btn-container mt-4">
                    <button class="btn btn-primary btn-block" onclick="login(event);">
                        <i class="fa fa-sign-in fa-lg fa-fw"></i>
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
    </section> -->
    

    <!-- Essential javascripts for application to work-->
    <script src="public/js/jquery-3.2.1.min.js"></script>
    <script src="public/js/popper.min.js"></script>
    <script src="public/js/bootstrap.min.js"></script>
    <script src="public/js/main.js"></script>
    <script src="public/js/ajaxlogin.js"></script>

    <!--libreria modal-------------------->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
    <script src="public/js/modal_succes.js"></script>
    <script>
    // En la siguiente línea el parámetro final la unidad son milisegundos; en el ejemplo se indica esperar 3 segundos-
    setTimeout(function(){
         window.location="<?= 'ceremonia.php' ?>"; 
    }, 100); 
</script>
</body>

</html>