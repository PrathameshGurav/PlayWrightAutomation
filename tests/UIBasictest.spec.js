
const { test } = require('@playwright/test');

test('First Playwright Test',async ({browser})=> 
{
    browser.newContext();//creating new context i.e new browser window.
    

});