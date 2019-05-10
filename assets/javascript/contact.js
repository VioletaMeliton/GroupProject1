function initMap() {

	// Try HTML5 geolocation.
if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
		};

		window.pos = pos; 


var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
//  ourOrigin = new google.maps.LatLng(pos.lat, pos.lng);
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 7,
center: {lat: pos.lat, lng: pos.lng}
});
directionsDisplay.setMap(map);
directionsDisplay.setPanel(document.getElementById('right-panel'));
calculateAndDisplayRoute(directionsService, directionsDisplay);


});
} else {
// Browser doesn't support Geolocation
handleLocationError(false, infoWindow, map.getCenter());
}






}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {

console.log("Testing : "+pos);

directionsService.route({
origin:  new google.maps.LatLng(pos.lat, pos.lng),
destination: document.getElementById('end').value,
travelMode: 'DRIVING'
}, function(response, status) {
if (status === 'OK') {
directionsDisplay.setDirections(response);
} else {
window.alert('Directions request failed due to ' + status);
}
});
}


