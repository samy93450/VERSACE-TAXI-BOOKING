const CACHE = 'asm-taxi-shell-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './favicon.ico', './icons/icon-32.png', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('asm-taxi-shell-') && key !== CACHE).map(key => caches.delete(key)))));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match(new URL('./index.html', self.registration.scope))));
    return;
  }
  if (!SHELL.some(path => new URL(path, self.registration.scope).href === url.href)) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
