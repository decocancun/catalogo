	</div>
	<div class="ir_arriba">
		<div class="flecha_arriba">
			<i class="fas fa-angle-up"></i>
		</div>
		<p>Inicio</p>
	</div>
	<div class="container footer">
		<div class="col-12">
			<div class="caja-footer">
				<p>Copyright © All Rights Reserved 2019-2020 |Zuñiga deco.cancun | 
					<a href="" data-toggle="tooltip" data-placement="right" title="Jorge luis Gomez">desarrollador</a>
				</p>
			</div>
		</div>
	</div>

<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/smooth-scroll.min.js"></script>
<script src="js/ceremonia.js"></script>
<script src="js/cortinaje.js"></script>
<script src="js/mobiliario.js"></script>
<script src="js/deco_iluminacion.js"></script>
<script src="js/deco_extras.js"></script>
<script src="js/detalles.js"></script>
<script src="public/js/ajaxlogin.js"></script>
<script src="public/js/modal_succes.js"></script>
<!--<script type="text/javascript">
document.oncontextmenu = function(){return false;}
</script>-->

<script>
	var scroll = new SmoothScroll('a[href*="#"]',{
		speed: 600,
		offset:50,
	});
	//mostrar y ocultar flecha scroll
	$(document).ready(function(){
		$('.ir_arriba').click(function(){
			$('body,html').animate({
				scrollTop:'0px'
			},50);
		});
		$(window).scroll(function(){

			if($(this).scrollTop()>0){
				$('.ir_arriba').slideDown(300);
			}else{
				$('.ir_arriba').slideUp(300);
			}

		});

		//para cada section
		$('.fa-home').click(function(){
			$('body,html').animate({
				scrollTop:'0px'
			},50);
		});


	});

	//

	$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
	});

</script>


</body>
</html>