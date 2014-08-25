
$(document).ready(function() {

	Parse.initialize("icl8qTAQSYAN0u1PbR7vY09pEqIRKEROSxiIPgbg", "s28CiSWVOxaoJRWB1fnAMHa0T3GkAb6XoRwglhW4");


	var parseFile;
	
function readImage(input) {
	if ( input.files && input.files[0] ) {
		var FR= new FileReader();
		FR.onload = function(e) {
			var fecha = Date.now();
			$('#img').attr( "src", e.target.result );
			parseFile = new Parse.File(document.getElementById("titulo").value+".jpg", input.files[0]);//Fin parseFile
			console.log(input.files[0]);
		};       
		FR.readAsDataURL( input.files[0] );
	}
}

$("#placeholder").change(function(){
    readImage( this );
});


//Sube imagen OnClick
$("#subir").click(function(){
	var carta = Parse.Object.extend("Figures");
	var cartaMagic = new carta();

	    console.log(parseFile);

	    cartaMagic.save({
	    	Name: document.getElementById("titulo").value,
	    	Description: document.getElementById("descripcion").value,
	    	Img: parseFile
	    }, {
	    	success: function(cartaMagic){
	    		console.log("Exito");
				alert("Fruta Guardada");
	    	}, 
	    	error: function(cartaMagic, error){
	    		console.log("Fallo");
				alert("Fruta Podrida. Intentelo más tarde");
	    	}
	    });
		return null;
	});

});