var botonenviar = document.getElementById("envia");
var mensaje = document.getElementById("escribe");

botonenviar.addEventListener("click", enviamensaje);

function enviamensaje(){
	if (mensaje.value!= '') {
	cajachat.innerHTML += '<div class="cajachat"> \
	<div class="coment">' + textoIntr.value + '</div> \
	<div class="btnEliminar" name="eliminar"><i class="icono fas fa-times"></i></i></div></div>';	
}







/*var btnEnviar = document.getElementById("enviar");
var textoIntr = document.getElementById("introducir");

btnEnviar.addEventListener("click", enviaTexto);

function enviaTexto(){
	if (textoIntr.value!= '') {
	cajaComent.innerHTML += '<div class="cajaComent"> \
	<div class="coment">' + textoIntr.value + '</div> \
	<div class="btnEliminar" name="eliminar"><i class="icono fas fa-times"></i></i></div></div>';	
}*/