chrome.storage.sync.get(['appId', 'appKey'], sdk => {
    function loadJs(url = 'https://cdn-sdk.hansel.io/web/8.4.0/hansel.min.js') {
        let script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
        return script;
    }

    function loadCss(url = 'https://cdn-sdk.hansel.io/web/8.4.0/hansel.min.css') {
        let link = document.createElement("link");
        link.rel = "stylesheet",
        link.type = "text/css",
        link.href = url,
        link.media = "all",
        document.body.appendChild(link);
    }

    function init() {
        let scriptSrc = `
            Hansel.clearHanselData();
            Hansel.internal().enableDebugLogs();
            Hansel.initialize(
                '${sdk.appId}',
                '${sdk.appKey}'
            );
        `;
        let script = document.createElement("script");
        script.innerHTML = scriptSrc;
        document.body.appendChild(script);
    }
    loadCss();
    let scr = loadJs();
    scr.addEventListener('load', init);
});