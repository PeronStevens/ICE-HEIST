self.addEventListener('install', e => {
 e.waitUntil(

   caches.open('my-cache').then(cache => {

    return cache.addAll([
       '/',
       '/index.html',
       '/img/fire.gif',
       '/img/kyriephotos-5.jpg',
       '/img/shiver.gif',
       '/img/snow.gif',
       '/css/style.css'
     ]);
   })
 );
});