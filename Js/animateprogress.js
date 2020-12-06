
function animateprogress (id, clock, val){		

	var getRequestAnimationFrame = function () { 
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||   
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback){
			window.setTimeout(enroute, 50);
		};
	};
	
	var fpAnimationFrame = getRequestAnimationFrame();   
	var i = 0;
	var animacion = function () {
		if (i <= val) 
		{
			document.querySelector(id).setAttribute("value",i);  
			document.querySelector(clock).setAttribute("value",i);

			let seconds = i/60;
			document.querySelector(clock).innerHTML = seconds.toFixed(2)  +" s";  
			
			i++;
			fpAnimationFrame(animacion);          
		}							
	}

	fpAnimationFrame(animacion);
}