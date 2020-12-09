
$('#plato_base_1').carousel({
    interval: false,
  });
  $('#plato_base_2').carousel({
    interval: false,
  });
  
  $('#base_pastel_1').carousel({
    interval: false,
  });
  $('#base_pastel_2').carousel({
    interval: false,
  });
  $('#papeleria').carousel({
    interval: false,
  });
  $('#regalos').carousel({
    interval: false,
});




//preguntas frecuentes 
	$(document).ready(function(){
		$("#mostrar").click(function(){
      $('#pregunta').show("slow");
      $('#pregunta').removeClass("d-none");
      $('#ocultar').removeClass("d-none");
      $('#mostrar').addClass("d-none");
		 });
		$("#ocultar").click(function(){
      $('#pregunta').hide("fast");
      $('#ocultar').addClass("d-none");
      $('#mostrar').removeClass("d-none");
		 });
  });
  

