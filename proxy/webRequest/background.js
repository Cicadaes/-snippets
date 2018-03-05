
//监听所有Ajax请求  
chrome.webRequest.onBeforeRequest.addListener (  
    function(details) {
        if (details.url.search('bank_list.json') > 0) {
            // details.url = 'http://localhost:8899/data/loanDetail.json';
            details.url = 'http://localhost:3000/ereloan/identity/step1.do';
            return { redirectUrl: details.url };
        }
    },  
       
    {
        urls:["*://localhost/*"], //监听页面请求,你也可以通过*来匹配。
        types: ["xmlhttprequest"]
    },  
    ["blocking"]   
);

// chrome.webRequest.onBeforeSendHeaders.addListener(
//     function(details) {
//         if (details.type === 'xmlhttprequest') {
//             console.log(details)
//             details.requestHeaders.push({ name: 'Referer', value: 'http://www.baidu.com'});

//             return { requestHeaders: details.requestHeaders };
//         }
//     },
//     {urls: ["*://localhost/*"]},
//     ["blocking", "requestHeaders"]
// );