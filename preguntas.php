<?php 

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	require_once 'header.php';

?>

				<div  class="fondo_pregunda">
					<div class="contaner_flex">
						<div class="pregunta-1">
							<div class="f-a-q">
								<h1  class="titulo_preguntas text-center">PREGUNTAS FRECUENTES </h1>
							</div>
						</div>
						<div class="pregunta-2">
							<div class="boton_mostrar_ocultar">
								<input type="button" id="mostrar" class="btn bt_pregunta btn-secondary" name="boton1" value="VER DETALLES">
								<input type="button" id="ocultar" class="btn bt_pregunta btn-secondary d-none" name="boton2" value="OCULTAR DETALLES">
							</div>
						</div>
					</div>
					<div class="informacion_pregunta">
						<div id="pregunta" class="items-info d-none">
							<h5>¿TIENES MÁS IDEAS DISPONIBLES?</h5>
							<hr class="line">
							<P>SIEMPRE,PREGUNTEN POR NUESTROS CATÁLOGOS COMPLEMENTARIOS: IMPRESIONES Y LETREROS, ASI COMO POR NUESTRO CATÁLOGO DE BODAS INDIAS.	
							</P>
							<h5>¿PUEDEN PRODUCIR ALGO QUE NO APARECEN EN ESTE CATALAGO?</h5>
							<hr class="line">
							<P>
								COMO DIJIMOS ANTES, LA CREATIVIDAD ES NUESTRO NEGOCIO, SI TIENEN ALGUNA IDEA DE
								DECORACIÓN QUE NO APARECE AQUI,PUEDEN DARNOS SUS IDEAS Y LAS HAREMOS REALIDAD ADEMAS 
								TENEMOS EL EQUIPO DE DISEÑO MÁS CALIFICADO A SU SERVICIO PARA BRINDARLES UNA ATENCIÓN PERZONALIZADA.	
							</P>
							<h5>¿INCLUYEN ILUMINACIÓN DENTRO DE SUS SERVICIOS?</h5>
							<hr class="line">
							<P>
								LA ILUMINACIÓN SOLO ESTÁ INCLUIDA EN ALGUNOS ARTICULOS QUE ASÍ LO INDICAN, PARA ILUMINAR
								PROFESIONALMENTE EL RECINTO DE SU BODA, CONTACTE A SU EMPRESA AUDIOVISUAL ELEGIDA.
							</P>
							<span class="p_nota">-NOTA:</span>
							<P>
								PARA MÁS INFORMACIÓN POR FAVOR REVISE NUESTRAS POLITICAS AL FINAL DE 
								LA COTIZACIÓN QUE RECIBA UNA VEZ QUE ESTÉ EN CONTACTO CON SU AGENTE DE VENTAS.
							</P>
						</div>
					</div>
				</div>
				<!--lineas-->
				<div class="sub_logo">
					<img src="images/logo4.png">
				</div>	
				<div style="position: relative;">
					<hr class="style1">
				</div>

			
<?php  require_once 'footer.php'?>