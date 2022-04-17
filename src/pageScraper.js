const autoScroll = require("./autoScroller");

const scraperObject = {
  url: "https://economictimes.indiatimes.com/markets/stocks/news",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
	
    await page.setViewport({
      width: 1200,
      height: 800,
    });
    await autoScroll(page);

    await page.waitForSelector(".tabdata");

    let newsObjs = await page.$$eval("div.eachStory", (news) =>
      news.map((newsDom) => ({
        title: newsDom.querySelector("h3 > a").textContent,
        content: newsDom.querySelector("p").textContent,
        time: newsDom.querySelector("time").textContent,
        imageUrl: newsDom.querySelector("span > span > img")?.src,
      }))
    );

    console.log(newsObjs);
  },
};

module.exports = scraperObject;
