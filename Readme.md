# ⏰Element Hover Inspector - Chrome Extension

A simple Chrome extension that shows the **HTML tag** of any element your mouse hovers over.  
Toggle the inspector on or off instantly — **no page reload needed**.


---
# 👀preview
<img src="/screenshot copy.png"/>

---
## 🔍 Features

- 🖱️ Displays hovered element as: `<div>`
- ⚡ Toggle ON/OFF from the extension popup
- 🔄 Injects/removes the inspector live using Chrome's `scripting` API
- 🌐 Works on **all websites**
- 🔒 Lightweight and safe — doesn’t collect any data

---




## 📦 Installation (Development Mode)

1. Clone or download this repository:

   ```bash
   git clone https://github.com/your-username/element-hover-inspector.git
   ```
2.  git clone https://github.com/your-username/Element-Tracker-Extension.git
Open Chrome and go to:
chrome://extensions/

* Enable Developer mode (top right)

* Click Load unpacked and select the element-hover-inspector folder

* Pin the extension and use the toggle in the popup
---
# 🧠 How It Works
When you toggle ON:

- It injects a floating tooltip that follows your cursor and shows the hovered element’s tag, ID, and classes

When toggled OFF:

-It removes the span and event listeners cleanly

-No need to reload the page.
---
# 🛠 Example Output
When you hover over an element, you'll see something like:
```
<span>
```
---
# 🙋‍♀️ Future Improvements (Ideas)
 - Highlight the hovered element with an outline

- "Click to pin" or copy selector to clipboard

 - Inspector panel with history of inspected elements
 ---




