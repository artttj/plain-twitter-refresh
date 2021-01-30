let timeline = document.querySelectorAll(`[data-testid=titleContainer]`);

setInterval(() => {
    // looking for text in a span
    let latest_tweets = $("span:contains('Latest Tweets')");
    let refresh = () => {
        latest_tweets.click();
    };

    return latest_tweets ? refresh() : false;
    // refresh every minute
},  60000);