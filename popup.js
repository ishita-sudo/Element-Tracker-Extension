const toggle = document.getElementById('toggleInspector');

chrome.storage.local.get('inspectorEnabled', (data) => {
  toggle.checked = data.inspectorEnabled || false;
});

toggle.addEventListener('change', async () => {
  const enabled = toggle.checked;
  chrome.storage.local.set({ inspectorEnabled: enabled });

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (enabled) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['inspector.js']
    });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const el = document.getElementById('element-inspector-span');
        if (el) el.remove();
        window.removeEventListener('mousemove', window.__inspectorMouseMove);
      }
    });
  }
});
