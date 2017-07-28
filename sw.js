self.addEventListener('install', e => {
 e.waitUntil(

   caches.open('my-cache').then(cache => {

    return cache.addAll([
       '/',
       'ICE-HEIST/index.html',
       'ICE-HEIST/img/fire.gif',
       'ICE-HEIST/img/kyriephotos-5.jpg',
       'ICE-HEIST/img/shiver.gif',
       'ICE-HEIST/img/snow.gif',
       'ICE-HEIST/css/style.css'
     ]);
   })
 );
});