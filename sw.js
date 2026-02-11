const CACHE_NAME = 'pos-v1';

// Melakukan install service worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Mengambil data (syarat PWA)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});