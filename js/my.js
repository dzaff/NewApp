$(document).ready(
				function() {
		/*$.mobile.loading('show');	

		$('#sbar').focus();
		$('.mySearchInput').textinput();	 
		if ($(document).ready==true){
		$.mobile.loading('hide');
		}
	else
		{
		
		$.mobile.loading('show');	
		}*/
		
		
		
		$('#noteBtn').click(function(){
			
			if ($('#messageBox').val() == ""){
			alert('Field can NOT be blank!')
			
			}
			else
			{
			
			alert('Your message has been sent');
			$('#messageBox').val("");
		
			}
		});
			 
});
		
		

		