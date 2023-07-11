var username = document.getElementById('username');
var password = document.getElementById('password');

function login() {
	
	var uno = "jigz";
	var dos = "carla";
	var tres = "makoy";

	var quatro = "123";
	var sinco = "456";
	var sais = "789";

	if ((username.value == uno && password.value == quatro) ||
		(username.value == dos && password.value == sinco) ||
		(username.value == tres && password.value == sais) ) 
	{
		return true
	} else {
		location.reload();
		alert('sorry, it seems that you are in the wrong page');
		return false;
	}
}