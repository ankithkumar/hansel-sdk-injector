chrome.storage.sync.get(['appId', 'appKey'], sdk => {
    function loadJs(url = 'https://hertz.hansel.io:5050/web_sdk/hansel.min.js') {
        let script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
        return script;
    }

    function loadCss(url = 'https://hertz.hansel.io:5050/web_sdk/hansel.min.css') {
        let link = document.createElement("link");
        link.rel = "stylesheet",
        link.type = "text/css",
        link.href = url,
        link.media = "all",
        document.body.appendChild(link);
    }

    loadCss();
    let scr = loadJs();
    let scriptSrc = `
        Hansel.initialize(
            ${sdk.appId},
            ${sdk.appKey}
        );
    `;
    scr.addEventListener('load', () => {
        let script = document.createElement("script");
        script.innerHTML = scriptSrc;
        document.body.appendChild(script);
    });
});