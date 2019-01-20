/*eslint-env jquery */

$.mobile.autoInitializePage = false;

$("document").ready(function() {

if (!/Mobi|Android/i.test(navigator.userAgent)) {
			$(".install-prompt").hide();
}

	$('.qr-start').click(function() {
		$('.qr-container').show();
		app.run();
		history.pushState({}, 'QR');
	});
	$('.qr-stop').click(function() {
		$('.qr-container').hide();
		app.stop();
	});

	$('.goFullScreen').click(() => {
		if (screenfull.enabled) {
			screenfull.request();
		} else {
			alert("unable to fullscreen");
		}
		if (/Mobi|Android/i.test(navigator.userAgent)) {
			// mobile!
			$(".exit-fullscreen-prompt").slideDown();
			setTimeout(
				function() {
					$(".exit-fullscreen-prompt").fadeOut();
				}, 3000);
		}

		$(".install-prompt").hide();
	});

	$(".installApp").click(function() {
		addToHomescreen();
		$(".install-prompt").fadeOut();
	});

	$(".installPromptClose").click(function() {
		$(".install-prompt").fadeOut();

	});

	jQuery(".ltcc-logo").on("swipedown", function(event) {
		screenfull.exit();
		$(".install-prompt").show();

	});
	
	$('.install-prompt').css("opacity", "1")

});