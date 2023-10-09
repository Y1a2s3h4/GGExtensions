// background.js
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './ScreenShot Extension.png';
    document.getElementsByTagName('head')[0].appendChild(link);
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.captureVisibleTab(null, {}, function(img) {
    const screenshotUrl = img;
     const a = document.createElement('a');
    a.href = screenshotUrl;
    a.download = 'screenshot.png';
    a.click();
  });
});