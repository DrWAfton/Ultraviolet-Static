importScripts('https://cdn.jsdelivr.net');
importScripts('https://cdn.jsdelivr.net');
importScripts('https://cdn.jsdelivr.net');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
