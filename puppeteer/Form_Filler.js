const puppeteer = require('puppeteer');

(async ()=>{
    const Browser = await puppeteer.launch({
        headless:false
    })
    
    const tab=await Browser.newPage()
    //open new tab
    
    await tab.setViewport({ width: 1600, height: 720});
    //Settig visible area for better view 

    await tab.goto('https://8g6.github.io/test-form/')
    .then(()=>{console.log('Gone to website')})
    /*wait untill the site is loaded (this dont check
    if the site is fully loaded or not)*/ 

    await tab.waitForSelector('input#name')
    .then(()=>{console.log('Waiting for name input')})
    /*Waiting for selector , asumes all other elements are 
    visible if one selector is visible */

    await tab.type('input#name','Cosmic Immortal Hulk')
    .then(()=>{console.log('typed name')})
    //Typing name in input with id name 

    await tab.type('input#email','immortal@hulk.org')
    .then(()=>{console.log('typed email')})
    //Typing eamil in input with id email 

    await tab.select('#Country','IND')
    .then(()=>{console.log('Selected country')})
    //Selecting option with value IND in the select with id Country

    await tab.evaluate(()=>document.querySelector('#male').click())
    //Clicking on checkbox that has the ID of male

    console.log('clicked on button')

    await tab.click('button')
    .then(()=>{console.log('Clicked on submit')})
    //await Browser.close()
    //close the Browser after the site loaded
})()