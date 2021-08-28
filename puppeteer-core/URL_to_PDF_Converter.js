    const puppeteer = require('puppeteer-core');

    (async ()=>{
        const Browser = await puppeteer.launch({
            executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" 
        })
    
    const tab=await Browser.newPage()
    //wait for the new tab to to open
    
    await tab.goto('https://www.w3schools.com/',{waitUntil:'networkidle2'})
    .then(()=>{console.log("Gone to url and waited to fully load")})
    /*wait untill the site is fully loaded 
    networkidle2 argument considers navigation successful when 
    page has no more then 2 network requests for half a second. 
    This is useful if page runs a long polling in the background*/

    await tab.pdf({format: 'A4',path: 'file.pdf' })
    .then(()=>{console.log("Saved file.pdf in CWD")})
    /*This will make an A4 sized PDF in your CWD 
    (Current Working Directory) with file as name*/

    await Browser.close()
    .then(()=>{console.log("closed browser")})
    //close the Browser after the site loaded
})()
