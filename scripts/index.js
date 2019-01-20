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
		$(".install-prompt").fadeOut();
		
		    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
			$(".ios-install-prompt").slideDown();
    } else {
    	$(".android-install-prompt").slideDown();
    }
		
	});

	$(".installPromptClose").click(function() {
		$(".install-prompt").fadeOut();

	});

	jQuery(".ltcc-logo").on("swipedown", function(event) {
		screenfull.exit();
		if (window.matchMedia('(display-mode: standalone)').matches) {
			$(".install-prompt").show();
		}


	});
	
	$('.install-prompt').css("opacity", "1")

});