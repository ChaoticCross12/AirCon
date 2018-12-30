var z = new XMLHttpRequest();
function info() {
    document.getElementById("data1").innerHTML = "locating . . .";
    document.getElementById("data3").innerHTML = " ";	
z.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("data1").innerHTML = myObj.data.city +", "+ myObj.data.country+". ";
    document.getElementById("data3").innerHTML = myObj.data.current.pollution.aqius;
  }
};
z.open("GET", "http://api.airvisual.com/v2/nearest_city?key=pWJrvDbBDbhoQjqhj", true);
z.send();
}

/*	
var x = document.getElementById("buttonid");
  function gpsX() {
	if (navigator.geolocation) {
   	  navigator.geolocation.getCurrentPosition(locationX, errorX);
  	  } else { 
   	  x.innerHTML = "UNABLE TO DETECT LOCATION";
  	  }
	}
  function locationX(position) {
  	x.innerHTML = "LOCATION: " + position.coords.latitude + " . " + position.coords.longitude;
  }
  function errorX(error) {
 	switch(error.code) {
   	  case error.POSITION_UNAVAILABLE:
      x.innerHTML = "ERROR"
   	  break;
    }
  }  		
*/
