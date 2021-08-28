const puppeteer = require('puppeteer-core');/*<- this semicolan is important don't 
                                        forget to add it*/
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
    
    let data = await tab.evaluate(
        /*if the arrow function has only one line and that value
         is to be returned , we dont have to give the return keyword*/
        ()=>document.querySelector('div.maincounter-number').innerText
        //get the text inside the div with class name maincounter-number
    )
    //evaluate and assign the output to data varable 
    console.log('Total number of Covid 19 cases worldwide is : ',data)
    await Browser.close()
    //close the Browser after the site loaded
})()
