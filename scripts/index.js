/*eslint-env jquery */

$.mobile.autoInitializePage = false;

$("document").ready(function() {

	if (!/Mobi|Android/i.test(navigator.userAgent)) {
		$(".goFullscreen").hide();
	}
	
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		$(".install-prompt").hide();
}

	if (window.matchMedia('(display-mode: standalone)').matches) {
		$(".install-prompt").hide();
	}
	
	if (!(/Mobi|Android/i.test(navigator.userAgent))) {
		$(".install-prompt").hide();
	}

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

		setTimeout(
			function() {
				$(".android-install-prompt").fadeOut();
				$(".ios-install-prompt").fadeOut();
			}, 8000);

	});

	$(".installPromptClose").click(function() {
		$(".install-prompt").fadeOut();

	});

	jQuery(".ltcc-logo").on("swipedown", function() {
		screenfull.exit();
		if (window.matchMedia('(display-mode: standalone)').matches) {
			//do nothing
		} else if (/Mobi|Android/i.test(navigator.userAgent)) {
			// mobile!
			$(".install-prompt").show();

		}
	});
	
	

	$('.preloader').fadeOut();
	$(".global-content").show();

});
