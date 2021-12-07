console.log('script working');

const submitBtn = document.querySelector('#submit');
let map = {
    appId: '1PPEOL6LJY24D7NHON9WMHQ54',
    appKey: '8F7QFK6CNGYAV3RJPD44QQ6MSM8I4TASS5OT9G552Q6AUPG0IS'
};

chrome.storage.sync.get(['appId', 'appKey'], sdk => {
    if (!sdk.appId) {
        chrome.storage.sync.set(map);
    }
    let appId = document.querySelector('#appId');
    let appKey = document.querySelector('#appKey');
    appId.value = sdk.appId;
    appKey.value = sdk.appKey;
});

// When the button is clicked, inject setPageBackgroundColor into current page
submitBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    console.log('tab is ', tab);
    let appId = document.querySelector('#appId');
    let appKey = document.querySelector('#appKey');
    map = {
        appId: appId.value,
        appKey: appKey.value
    };
    let target = {
        tabId: tab.id
    };
    if (tab.url.includes('hansel.io')) {
        target.allFrames = true;
    }
    chrome.storage.sync.set(map, () => {
        chrome.scripting.executeScript({
            files: ['injector.js'],
            target,
        }, () => {
            console.log('successfull execution of chrome script');
        })
    });
});