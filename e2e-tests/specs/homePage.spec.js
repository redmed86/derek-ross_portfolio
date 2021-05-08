const assert = require("assert");

describe("Home Page: ", () => {
    it("Should have the right title", async () => {
      await browser.url("https://derekross.herokuapp.com/#");
      const title = await browser.getTitle();
      await browser.pause(5000);
      console.log(title);
      await assert.strictEqual(title, "Derek Ross Personal Site");
    });
    it('should demonstrate the scrollIntoView command', async () => {
        const elem = await $('h2.section-title');
        // scroll to specific element
        await elem.scrollIntoView();        
    });
  });