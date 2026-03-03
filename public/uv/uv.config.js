self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://uv.student-t.cc', 
    encodeUrl: (url) => btoa(url).replace(/\//g, '_').replace(/\+/g, '-').replace(/=/g, ''),
    decodeUrl: (url) => atob(url.replace(/_/g, '/').replace(/-/g, '+')),
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
