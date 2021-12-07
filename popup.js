console.log('script working');

const submitBtn = document.querySelector('#submit');
let map = {
    appId: 'RRH9T30QEGBWRSQTR0D292Y2V',
    appKey: 'XNBBC6PTFNKVL9BZUEQBQR5725SF34ZZYWDIM38THI2V9P8TH1'
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
    chrome.storage.sync.set(map, () => {
        chrome.scripting.executeScript({
            files: ['injector.js'],
            target: {
                tabId: tab.id,
                allFrames: true
            },
        }, () => {
            console.log('successfull execution of chrome script');
        })
    });
});