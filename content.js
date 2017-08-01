let timeline = document.getElementById('timeline');

setInterval(() => {
	let bar    = document.querySelector('.js-new-tweets-bar'),
	    top    = document.body.scrollTop,
	    height = timeline.offsetHeight;

	if (!bar) {
		return;
	}

	bar.click();

	window.scrollTo(0, top + (timeline.offsetHeight - height));
}, 1000);