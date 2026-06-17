const cacheName = "convite-olivia-v4";
// Lista de arquivos exatos a serem cacheados
const staticAssets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icone.png",
  "./envelope.jpg",
  "./convite.jpg",
  "./background.wav",
  "./open.wav",
  "./click.wav",
];

self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }),
  );
});
