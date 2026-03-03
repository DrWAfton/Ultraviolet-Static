importScripts('https://cdn.jsdelivr.net');
importScripts('https://cdn.jsdelivr.net');
importScripts('https://cdn.jsdelivr.net');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    // This is the "Magic" that tells the proxy to clean the security headers
    event.respondWith(sw.fetch(event));
});
