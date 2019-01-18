/*eslint-env jquery */
$("document").ready(function() {
$('.qr-start').click(function() {
	$('.qr-container').show();
	app.run();
});
$('.qr-stop').click(function() {
	$('.qr-container').hide();
	app.stop();
});
});
