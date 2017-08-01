let timeline = document.getElementById('timeline');

setInterval(() => {
    let bar     = document.querySelector('.js-new-items-bar-container .js-new-tweets-bar'),
        top     = document.body.scrollTop,
        height  = timeline.offsetHeight,
        refresh = () => {
            bar.click();
            window.scrollTo(0, top + (timeline.offsetHeight - height));
        };

    return bar ? refresh() : false;
}, 1000);