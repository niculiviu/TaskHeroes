
	function showNotification(){
		$("#notificationContainer").show(200);
		$("#notificationLink").attr('onclick', 'showNotificationExit()');
		
	}
	
	
	function showNotificationExit(){
		$("#notificationContainer").hide(200);
		$("#notificationLink").attr('onclick', 'showNotification()');
		
	}

