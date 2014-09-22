// JavaScript Document

var variableGlobal = "hola";
	$(document).ready(function() 
	{
		$("#mostrar").click(function()
		{
			getValue();
		});	
		$("#agregaradd").click(function()
		{
			getValue();
			setValue("ganzo");
			getValue();
		});
		
		
		
function setValue(variable)
{
    window.myValue = variable;
}

function getValue()
{
    alert(window.myValue); // "test" (assuming setValue has run)
}		
		
		
		
		
		
		
		
		
		
		});