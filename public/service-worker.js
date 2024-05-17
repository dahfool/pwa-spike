// const installEvent = () => {
//     self.addEventListener('install', () => {
//         console.log('service worker installed');
//     });
// };
// installEvent();
//
// const activateEvent = () => {
//     self.addEventListener('activate', () => {
//         console.log('service worker activated');
//     });
// };
// activateEvent();
//
// const cacheName = 'v2';
//
// const cacheClone = async (e) => {
//     const res = await fetch(e.request);
//     const resClone = res.clone();
//
//     const cache = await caches.open(cacheName);
//     await cache.put(e.request, resClone);
//     return res;
// };
//
// const fetchEvent = () => {
//     self.addEventListener('fetch', (e) => {
//         e.respondWith(
//             cacheClone(e)
//                 .catch(() => caches.match(e.request))
//                 .then((res) => res)
//         );
//     });
// };
//
// fetchEvent();

function registerServiceWorker() {
    if (typeof window !== "undefined") {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js").then((registration) => {
                console.log("Service Worker registration successful:", registration);
            });
        }
    }
}

registerServiceWorker();