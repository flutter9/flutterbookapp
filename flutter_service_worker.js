'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "c283b01dc76897c475689fefe29c75f9",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "c3b48d77ab644a4c01f766ad8513163e",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/dancing_with_the_tiger.png": "c835169e60048ccc0b18fbc82b95e4bb",
"/assets/assets/blabla.png": "d2d8a32c750e123e2107aa095842ca23",
"/assets/assets/banner.png": "39dccf3b3039942e49433fdb8d9a2e7f",
"/assets/assets/mermaid.png": "77f165174bd52035ed31126a976619c1",
"/assets/assets/junot_diaz.png": "87f4b1471bfde932f8e6fe1f5e12b80a",
"/assets/assets/search.png": "88f1c9b9c5457185e66f3bee5d5112a4",
"/assets/assets/infinite_future.png": "dac6100868cd6e3ee71b2a3e4097395d",
"/assets/assets/notify.png": "8bc37c3f7e7451a984df91a511693185",
"/assets/assets/mermaid_large.png": "cfed190ab2b61311783c9d21389314c3",
"/assets/assets/time_of_witches.png": "1eb556bee7fe7fadb2ab291171b3130e",
"/assets/assets/little_mermaid.png": "dfdc099d8f8f02fdf6ad764f8144cba6",
"/assets/assets/notification.png": "5da89d6141517cb783990dbc8cd72fd5",
"/assets/assets/six_crows.png": "a119c4962dcc9fc9644dc752572808d8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
