/*eslint-env jquery */
$("document").ready(function() {
$('.qr-start').click(function() {
	$('.qr-container').show();
	app.start();
});
$('.qr-stop').click(function() {
	$('.qr-container').hide();
	app.stop();
});
});
