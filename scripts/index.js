/*eslint-env jquery */

$("document").ready(function() {
	
$('.qr-start').click(function() {
	$('.qr-container').show();
	app.run();
	history.pushState({}, 'QR');
});
$('.qr-stop').click(function() {
	$('.qr-container').hide();
	app.stop();
});



});
