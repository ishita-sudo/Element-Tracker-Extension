chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get('inspectorEnabled', (data) => {
      if (data.inspectorEnabled) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['inspector.js']
        });
      }
    });
  }
});
