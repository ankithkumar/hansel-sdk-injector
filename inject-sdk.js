console.log('in injector');

let sdk = {
    appId: '1PPEOL6LJY24D7NHON9WMHQ54',
    appKey: '8F7QFK6CNGYAV3RJPD44QQ6MSM8I4TASS5OT9G552Q6AUPG0IS'
};

console.log('in injector', sdk);

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

loadCss();
let scr = loadJs();
let scriptSrc = `
    Hansel.clearHanselData();
    Hansel.internal().enableDebugLogs();
    Hansel.initialize(
        '${sdk.appId}',
        '${sdk.appKey}'
    );
`;
scr.addEventListener('load', () => {
    let script = document.createElement("script");
    script.innerHTML = scriptSrc;
    document.body.appendChild(script);
});