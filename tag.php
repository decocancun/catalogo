<?php
	session_start();
	include_once 'config/config.php';
	// revisar si hay sesion, si no dirigirlo al login
	// if(count(USUARIO_ACTUAL)==0 ){
	// 	echo "<meta http-equiv='refresh' content='0;url=index.php'>";
	// }
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/estilo.css">
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/animate.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css">
	<link href="https://fonts.googleapis.com/css?family=Cinzel:400,700&display=swap" rel="stylesheet">
	<!--font-family: 'Cinzel', serif;-->
</head>