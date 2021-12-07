let map = {
    appId: '1PPEOL6LJY24D7NHON9WMHQ54',
    appKey: '8F7QFK6CNGYAV3RJPD44QQ6MSM8I4TASS5OT9G552Q6AUPG0IS'
};

chrome.storage.sync.get(['appId', 'appKey'], sdk => {
    console.log(sdk);
    if (!sdk.appId) {
        chrome.storage.sync.set(map);
    }
});