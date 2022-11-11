if('serviceWorker' in navigator) {
  let registration;

  const registerServiceWorker = async () => {
    registration = await          navigator.serviceWorker.register('./service-worker.js');
  };

  registerServiceWorker();
}
const cacheName = 'my-cache';
const filestoCache = [
  '/',
  '/favicon.ico',
  '/index.html',
  '/home.html',
  '/css/styles.css',
  '/js/app.js',
  '/img/logo.png'
]; 
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});
