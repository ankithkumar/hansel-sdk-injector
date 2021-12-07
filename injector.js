console.log('injector');

// let nullthrows = (v) => {
//     if (v == null) throw new Error("it's a null");
//     return v;
// }

// let injectCode = (src) => {
//     const script = document.createElement('script');
//     // This is why it works!
//     script.src = src;
//     script.onload = function() {
//         console.log("script injected");
//         this.remove();
//     };

//     // This script runs before the <head> element is created,
//     // so we add the script to <html> instead.
//     nullthrows(document.head || document.documentElement).appendChild(script);
// }


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