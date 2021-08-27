const puppeteer = require('puppeteer-core');/*<- this semicolan is important don't 
                                           forget to add */

(async ()=>{
    const Browser = await puppeteer.launch({
        headless:false,
        /* headless mode is defaultly true you
        have to make it false to show browser GUI*/
        executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" 
        /*For puppeteer-core 
         puppeteer-core  don't have a buit in browser 
         so we need to specify the path to browser binary*/
    })
    const tab=await Browser.newPage()
    //wait for the new tab to to open
    await tab.goto('http://google.com')
    /*wait untill the site is loaded (this dont check
    if the site is fully loaded or not)*/ 
    await Browser.close()
    //close the Browser after the site loaded
})()
