const CACHE_KEY = 'initialCache';


self.addEventListener('install', (event) => {

  event.waitUntil(caches.open(CACHE_KEY).then((cache) => {
    return cache.addAll([
      './media/favicon.ico',
      './media/icon512x512.png',
      './media/icon2048.svg',
      './script/about.js',
      './script/python.js',
      './script/python3.9.escaped.js',
      './style/style.css',
      './index.html'
    ]);
  }));

  console.info('The service worker was installed.')
});
 
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
        const networkFetch = fetch(event.request).then(response => {
          // update the cache with a clone of the network response
          caches.open(CACHE_KEY).then(cache => {
              cache.put(event.request, response.clone());
          });
        });
        // prioritize cached response over network
        return cachedResponse || networkFetch;
    }
  )
 )
});
