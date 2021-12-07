console.log('injector');

chrome.storage.sync.get(['appId', 'appKey'], sdk => {
    console.log('sdk ', sdk);
    localStorage.setItem('hansel_sdk_details', JSON.stringify(sdk));
    function injectCode(src) {
        const script = document.createElement('script');
        // This is why it works!
        script.src = src;
        script.onload = function() {
            console.log("script injected");
        };
        document && document.body && document.body.appendChild && document.body.appendChild(script);
    }

    injectCode(chrome.runtime.getURL('/inject-sdk.js'));
});