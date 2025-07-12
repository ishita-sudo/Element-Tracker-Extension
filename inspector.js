(function () {
  if (window.__inspectorMouseMove || document.getElementById('element-inspector-span')) {
    return;
  }

  const infoSpan = document.createElement('span');
  infoSpan.id = 'element-inspector-span';
  Object.assign(infoSpan.style, {
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    zIndex: '9999',
    pointerEvents: 'none',
    display: 'none',
    fontFamily: 'monospace',
  });
  document.body.appendChild(infoSpan);

  // Save mousemove listener to global for later removal
  window.__inspectorMouseMove = (event) => {
    const el = document.elementFromPoint(event.clientX, event.clientY);
    if (!el || el === infoSpan) {
      infoSpan.style.display = 'none';
      return;
    }

    const tag = el.tagName.toLowerCase();
    infoSpan.textContent = `<${tag}`;

    infoSpan.style.left = `${event.clientX + 10}px`;
    infoSpan.style.top = `${event.clientY + 10}px`;
    infoSpan.style.display = 'block';
  };

  window.addEventListener('mousemove', window.__inspectorMouseMove);
})();
