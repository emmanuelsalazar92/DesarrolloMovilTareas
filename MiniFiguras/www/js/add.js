// JavaScript Document
	$(document).ready(function() 
	{
		Parse.initialize("icl8qTAQSYAN0u1PbR7vY09pEqIRKEROSxiIPgbg", "s28CiSWVOxaoJRWB1fnAMHa0T3GkAb6XoRwglhW4");

		var parseFile;	
		function readImage(input) 
		{
			if ( input.files && input.files[0] ) 
				{
					var FR= new FileReader();
					FR.onload = function(e) 
					{
						$("#imageFruit").attr( "src", e.target.result );
						parseFile = new Parse.File(document.getElementById("tittleFruit").value+".jpg", input.files[0]);//Fin parseFile
						console.log(input.files[0]);
					};       
					FR.readAsDataURL( input.files[0] );
				}
		}
						
		$("#placeholder").change(function(){readImage(this);});
		
		$("#uploadFruit").click(function()
		{
			var fruit = Parse.Object.extend("Fruit");
			var tagsFruit = Parse.Object.extend("Tag");
			var newFruit = new fruit();
			var newTag = new tagsFruit();
	    	console.log(parseFile);
		    newFruit.save(
			{
	    		Name: document.getElementById("tittleFruit").value,	
				Image: parseFile,			
				Information: document.getElementById("information").value,
	    		Description: document.getElementById("description").value,
				Tag: document.getElementById("tag").value.toLowerCase(),
				userID: document.getElementById("userID").value,
				userName: document.getElementById("userName").value
				
	    		
	    	}, 
			{
	    		success: function(newFruit)
				{
	    			console.log("Exito");
					alert("Fruit Uploaded");
					//location.href = "search.html";
	    		}, 
	    		error: function(newFruit, error)
				{
	    			console.log("Fallo");
					alert("Error");
	    		}
	    	});
			newTag.save(
			{
				NameTag: document.getElementById("tag").value,
				FruitRelations: newFruit	
			},
			{
	    		success: function(newTag)
				{
	    			console.log("Exito");
					alert("Tag Uploaded");
					location.href = "search.html";
	    		}, 
	    		error: function(newTag, error)
				{
	    			console.log("Fallo");
					alert("Error");
	    		}
	    	}			
			);
			return null;
		});
	});	