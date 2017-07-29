let timeline = document.getElementById('timeline');

setInterval(() => {
    let bar = document.querySelector('.js-new-tweets-bar');

    if (!bar) {
        return;
    }

    let top    = document.body.scrollTop,
        height = timeline.offsetHeight;

    bar.click();

    window.scrollTo(0, top + (timeline.offsetHeight - height));
}, 1000);