if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw-test/sw.js', { scope: '/sw-test/' })
      .then(function(reg) {
        // suivre l'état de l'enregistrement du Service Worker : `installing`, `waiting`, `active`
      });
  }

  this.addEventListener('install', function(event) {
    // ajouter les fichiers au cache
  });

  caches.open('v1').then(function(cache) {
    return cache.addAll([
      '/sw-test/',
      '/sw-test/index.html',
      '/sw-test/style.css',
      '/sw-test/app.js',
      '/sw-test/image-list.js',
      '/sw-test/star-wars-logo.jpg',
      '/sw-test/gallery/',
      '/sw-test/gallery/bountyHunters.jpg',
      '/sw-test/gallery/myLittleVader.jpg',
      '/sw-test/gallery/snowTroopers.jpg'
    ]);
  });

  this.addEventListener('fetch', function(event) {
    // C'est là que la magie opère, Noël !
  });

  

caches.match(event.request);

caches.match(event.request).catch(function() {
    return fetch(event.request);
  })

  var response;
event.respondWith(caches.match(event.request).catch(function() {
  return fetch(event.request);
}).then(function(r) {
  response = r;
  caches.open('v1').then(function(cache) {
    cache.put(event.request, response);
  });
  return response.clone();
}));

catch(function () {
    return caches.match('/sw-test/gallery/myLittleVader.jpg');
  })

  this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v2').then(function(cache) {
        return cache.addAll([
          '/sw-test/',
          '/sw-test/index.html',
          '/sw-test/style.css',
          '/sw-test/app.js',
          '/sw-test/image-list.js',
  
           …
  
           // include other new resources for the new version...
        ]);
      });
    );
  });

  this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v2'];
  
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(keyList[i]);
          }
        }));
      })
    );
  });

  