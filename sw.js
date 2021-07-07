// importScripts('/cache-polyfill.js');

globalThis.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('allcameras').then(function(cache) {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

// globalThis.addEventListener('fetch', function(event) {
//   console.log(event.request.url);
// });
