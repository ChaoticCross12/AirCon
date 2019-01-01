var z = new XMLHttpRequest();
function info() {
    document.getElementById("data1").innerHTML = "locating . . .";
    document.getElementById("data3").innerHTML = " ";
	z.open("GET", "//api.airvisual.com/v2/nearest_city?key=pWJrvDbBDbhoQjqhj", true);
	z.send();
z.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var leObj = JSON.parse(this.responseText);
    document.getElementById("data1").innerHTML = leObj.data.city +", "+ leObj.data.country+". ";
    document.getElementById("data3").innerHTML = leObj.data.current.pollution.aqius;
  }
};
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
