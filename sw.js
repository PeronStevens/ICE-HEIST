self.addEventListener('install', e => {
 e.waitUntil(

   caches.open('my-cache').then(cache => {

    return cache.addAll([
       '/',
       '/index.html',
       'https://raw.githubusercontent.com/PeronStevens/ICE-HEIST/gh-pages/img/fire.gif',
       'https://raw.githubusercontent.com/PeronStevens/ICE-HEIST/gh-pages/img/kyriephotos-5.jpg'
    //    '/img/shiver.gif',
    //    '/img/snow.gif',
    //    '/css/style.css'
     ]);
   })
 );
});