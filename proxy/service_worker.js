self.addEventListener('fetch', function (e) {
    'use strict';

    if (e.request.url.search('bank_list.json') > 0) {
        e.respondWith(fetch('http://localhost:3000/ereloan/identity/step1.do'));
    }
});

// Chrome console excute, same domain
// navigator.serviceWorker.register('service_worker.js').then(function (res) {
// 	console.log(res);
// }).catch(function (err) {
// 	console.log(err);
// });