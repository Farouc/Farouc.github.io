const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../theme.js'), 'utf8');

function openPage({ stored, systemDark = false, blocked = false } = {}) {
  let ready, click;
  const root = { dataset: {} };
  const button = {
    hidden: true,
    setAttribute(name, value) { this[name] = value; },
    addEventListener(event, callback) { click = callback; },
  };
  const storage = {
    getItem() { if (blocked) throw new Error('Storage blocked'); return stored; },
    setItem(key, value) { if (blocked) throw new Error('Storage blocked'); stored = value; },
  };
  vm.runInNewContext(source, {
    localStorage: storage,
    window: { matchMedia: () => ({ matches: systemDark }) },
    document: {
      documentElement: root,
      querySelector: () => button,
      addEventListener(event, callback) { ready = callback; },
    },
  });
  // Theme must be selected before the document finishes loading.
  assert.ok(['light', 'dark'].includes(root.dataset.theme));
  ready();
  assert.equal(button.hidden, false);
  return { root, button, click: () => click(), saved: () => stored };
}

const light = openPage();
assert.equal(light.root.dataset.theme, 'light');
assert.equal(light.button['aria-label'], 'Switch to dark mode');
light.click();
assert.equal(light.root.dataset.theme, 'dark');
assert.equal(light.saved(), 'dark');
assert.equal(light.button['aria-label'], 'Switch to light mode');
assert.equal(openPage({ stored: light.saved() }).root.dataset.theme, 'dark');
light.click();
assert.equal(light.saved(), 'light');
assert.equal(openPage({ systemDark: true }).root.dataset.theme, 'dark');
assert.equal(openPage({ stored: 'light', systemDark: true }).root.dataset.theme, 'light');
assert.equal(openPage({ stored: 'invalid', systemDark: true }).root.dataset.theme, 'dark');
const restricted = openPage({ blocked: true, systemDark: true });
restricted.click();
assert.equal(restricted.root.dataset.theme, 'light');
assert.equal(restricted.button['aria-label'], 'Switch to dark mode');
console.log('Passed: device defaults, saved preference, toggling, page navigation, labels, invalid values, and blocked storage.');
