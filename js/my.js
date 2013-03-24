$(document).ready(
				function() {
		
		
		

		
		
		

		
		$('#noteBtn').click(function(){
			
			if ($('#messageBox').val() == ""){
			alert('Field can not be blank!')
			
			}
			else
			{
			
			
			alert('Your message has been sent');

			

			$('#messageBox').val("");

		
			}
		});
			 
});
		
		

		