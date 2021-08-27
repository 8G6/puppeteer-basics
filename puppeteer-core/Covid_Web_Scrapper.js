const puppeteer = require('puppeteer-core');

(async ()=>{
    const Browser = await puppeteer.launch({
        executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" 
    })

    const tab=await Browser.newPage()
    //wait for the new tab to to open
    await tab.goto('https://www.worldometers.info/coronavirus/')
    .then(()=>{console.log('Gone to website')})
    /*wait untill the site is loaded (this dont check
    if the site is fully loaded or not)*/ 
    
    let data = await tab.evaluate(()=>document.querySelector('div.content-inner').innerText)
    console.log(data)
    await Browser.close()
    //close the Browser after the site loaded
})()