
var count = 0;
		function clicks(button) {
			count += 1;
			document.getElementById('clickme').innerHTML = " The blogs were poked " + count + " times";
			document.getElementById("clickme").style.color = "yellow";
		}