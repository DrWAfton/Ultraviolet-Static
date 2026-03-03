importScripts('https://cdn.jsdelivr.net');
importScripts('https://cdn.jsdelivr.net');
importScripts('https://cdn.jsdelivr.net');

const sw = new UVServiceWorker({
    prefix: '/uv/service/',
    bare: 'https://bare.benroberts.dev', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode
});

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
