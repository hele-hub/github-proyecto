<script type="text/javascript" language="javascript">
	document.getElementById('archivo').addEventListener('change', carga);
	var foto=document.getElementsByClassName('foto')
	function carga(){
	var f=(document.getElementById('archivo').files);
		console.log(f); //nos enseña lo que tenemos cargado en memoria
		for (var i = 0; i < f.length; i++) {
			//var nuevo=document.createElement('img'); ESTO ES OTRA MANERA DE HACERLO
			var nuevo=new Image();
			nuevo.className='foto';
			document.getElementById('slider').appendChild(nuevo);
			nuevo.src=URL.createObjectURL(event.target.files[i]);
	}
	}
</script>