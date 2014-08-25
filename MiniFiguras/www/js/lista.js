// JavaScript Document
$( document ).ready(function() {
    console.log( "ready!" );
	
	
	
	//-----------------------------------------
	
	Parse.initialize("icl8qTAQSYAN0u1PbR7vY09pEqIRKEROSxiIPgbg", "s28CiSWVOxaoJRWB1fnAMHa0T3GkAb6XoRwglhW4");
	/*
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {alert("yay! it worked");});
	*/
	
	var GameScore = Parse.Object.extend("Figures");
	var query = new Parse.Query(GameScore);
	
	query.find({
	  success: function(results) {
		  var contenido = "";
		//alert("Successfully retrieved " + results.length + " scores.");
		// Do something with the returned Parse.Object values
		for (var i = 0; i < results.length; i++) { 
		  var object = results[i];
		  contenido += "<div class='col-md-4'>";
		  contenido += "<h2 class='text-center'>" + object.get('Name') + "</h2>";
		  contenido += "<img src='" + object.get('Img').url() + "' class='img-responsive img-thumbnail' alt='Imagen responsive'>";
		  contenido += "<p class='lead text-center'>" + object.get('Description') + "</p>";
		  contenido += "</div>";
		}
		$( "#minifigures" ).append( contenido );
		
		//alert(contenido);
	  },
	  error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	  }
	});
	//-----------------------------------------
	
	
	
});

