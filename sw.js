/* 
Copyright (c) 2023 Parking Miru Web Engine By Karin Vitoonkijvanit

*** Unauthorized modification of the files in the Parking Miru Web Engine 
section is not responsible for any damage or errors that will occur and 
constitutes a violation of the of the creators of the Web Engine. *** 
*/

const CACHE_NAME = "Parking-Miru-2.0.1";
const OFFLINE_URL = "offline.html";
const assets = [
  "/",
  "/index.html",
  "/dashboard.html",
  "/smartdashboard.html",
  "/UATsmartdashboard.html",
  "/offline.html",
  // css
  "/css/style.css",
  "/css/mobile.css",
  // js
  "/js/app.js",
  "/js/clockEN.js",
  "/js/loader.js",
  "/js/NotiText.js",
  "/js/ParkingNum.js",
  "/js/scollText.js",
  "/js/Titles.js",
  "/js/wow.min.js",
  // img
  "/img/logoTNIWhite.png",
  "/img/ParkingMiru.png",
  "/img/ParkingMiruIcon.png",
  "/img/ring-resize-white-36.svg",
  "/img/TakahashiB.png",
  "/img/TNICyberWeb.png",
  "/img/Transparent.png",
  "/img/TurnLeft.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
      cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Only call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's
          // supported.
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thrown, which is
          // likely due to a network error.
          // If fetch() returns a valid HTTP response with a response code in
          // the 4xx or 5xx range, the catch() will NOT be called.
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});
