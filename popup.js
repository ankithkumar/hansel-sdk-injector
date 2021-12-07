console.log('script working');

const submitBtn = document.querySelector('#submit');

chrome.storage.sync.get(['appId', 'appKey'], sdk => {
    let appId = document.querySelector('#appId');
    let appKey = document.querySelector('#appKey');
    appId.value = sdk.appId;
    appKey.value = sdk.appKey;
});

// When the button is clicked, inject setPageBackgroundColor into current page
submitBtn.addEventListener("click", () => {
    let appId = document.querySelector('#appId');
    let appKey = document.querySelector('#appKey');
    map = {
        appId: appId.value,
        appKey: appKey.value
    };
    chrome.storage.sync.set(map, () => {
        chrome.tabs.executeScript({
            file: 'inject-sdk.js',
            allFrames: true
        });
    });
});