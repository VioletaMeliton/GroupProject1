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


//form code

$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: 'contact.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});