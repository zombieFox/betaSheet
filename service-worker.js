/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["css/awesomeSheet.css","1dd7ef60b475372e770dbfaafd2c6448"],["css/awesomeSheet.min.css","cb496c1172d6d3a454987c5b51bfc695"],["css/vendor.css","b980f06480077133779ce2bb24783187"],["css/vendor.min.css","3592bee49305c85042c2c8681d55e972"],["db/feats.csv","20b831ef44183a30e2f46f274686aa57"],["db/languages.csv","e33421efca00cb9265d65bc062f4dfde"],["db/traits.csv","b761bfd5e9b10a0e4c634e07948cb723"],["fonts/fjalla-one/fjalla-one-regular.ttf","d8c3c0b2a12dae2dd8e43895d33df67e"],["fonts/fjalla-one/fjalla-one-regular.woff","201b2960b726844b0c1142d2c5a82278"],["fonts/fjalla-one/fjalla-one-regular.woff2","f0249cace1e9aa9599c44fc6188ff619"],["fonts/icons/icons.eot","ed22f798768620fc59bdb436520e1556"],["fonts/icons/icons.json","41e9c471b00f1e05760951e43626fe7a"],["fonts/icons/icons.svg","b0deddc1c9b1f3b8c9008f094342cdf5"],["fonts/icons/icons.ttf","e60cdd3dc6d04f28e23508ce9a49563f"],["fonts/icons/icons.woff","a6133b34182d2046c1a32607caacec87"],["fonts/open-sans/open-sans-bold-italic.eot","217e561bb88d7d3d6bebf715b72dbfed"],["fonts/open-sans/open-sans-bold-italic.ttf","54152d20be5227cba086ca3092ea901e"],["fonts/open-sans/open-sans-bold-italic.woff","7c9a2f7abbf15373d6176894eac76d99"],["fonts/open-sans/open-sans-bold-italic.woff2","1d6d47c5650d81b90e7aa20fe8d90111"],["fonts/open-sans/open-sans-bold.eot","d3e047b61c14c025434c4a18e1c3eed4"],["fonts/open-sans/open-sans-bold.ttf","eb2f9bdd71fa1a515d2b0f210eabce7a"],["fonts/open-sans/open-sans-bold.woff","a012fc5910a16e9cfc7d7529d6507ec8"],["fonts/open-sans/open-sans-bold.woff2","573ea876c76cb20e20ea806279b650b0"],["fonts/open-sans/open-sans-condensed-bold.eot","2fff27a01524360f0f86d7d2097c6fc1"],["fonts/open-sans/open-sans-condensed-bold.ttf","ddad2418ade5824090b9531ff90ff58f"],["fonts/open-sans/open-sans-condensed-bold.woff","8b82d71af711eb30ba75ae2aad24f989"],["fonts/open-sans/open-sans-condensed-bold.woff2","e656c39eeb984e9ba3eab970dcc97e62"],["fonts/open-sans/open-sans-condensed-light-italic.eot","e9b431160632c7e9e6f86a47690d8c6f"],["fonts/open-sans/open-sans-condensed-light-italic.ttf","ab12b2d332e77aaf3f0de3c260fa0d97"],["fonts/open-sans/open-sans-condensed-light-italic.woff","5e4001fdd1ad7e1b515a3032be0210e1"],["fonts/open-sans/open-sans-condensed-light-italic.woff2","50a0539533c0b6d803f20aac449f1acb"],["fonts/open-sans/open-sans-condensed-light.eot","728a184e858d2d1df12a29395e89062e"],["fonts/open-sans/open-sans-condensed-light.ttf","c913cdf509d00f33a1a48848b8673bac"],["fonts/open-sans/open-sans-condensed-light.woff","c47012973254c1720e3a98c1c4a9539f"],["fonts/open-sans/open-sans-condensed-light.woff2","61137440fe3cb7c3335edaa48f2e96e1"],["fonts/open-sans/open-sans-italic.eot","309ade593bd77b9d0ddc6c2bcd8d5318"],["fonts/open-sans/open-sans-italic.ttf","613bc66dc79404ca6c5bf75fdecaa025"],["fonts/open-sans/open-sans-italic.woff","3814fd1eba78acb575ba59a529d09262"],["fonts/open-sans/open-sans-italic.woff2","adedab7e50ce92cc94b80efa3fcaccbb"],["fonts/open-sans/open-sans-light-italic.eot","9077e24b8b902e86d225e0ee9563da75"],["fonts/open-sans/open-sans-light-italic.ttf","971eb5934e01282e2af8e1486dab813c"],["fonts/open-sans/open-sans-light-italic.woff","428027bbc8530c62ebe54c0e66a975ac"],["fonts/open-sans/open-sans-light-italic.woff2","8e02343794db373a41daf6c102654aee"],["fonts/open-sans/open-sans-light.eot","33f5cb2b77653e8efe192de95ba7c94e"],["fonts/open-sans/open-sans-light.ttf","c81ee1cc6db8c8fa312878417b0fbe1e"],["fonts/open-sans/open-sans-light.woff","660970bd910fed5d6207d7363d71824a"],["fonts/open-sans/open-sans-light.woff2","6fdbb5cbc99d308e282ab40b8d5ef613"],["fonts/open-sans/open-sans-regular.eot","8a71aead22fe47842e886256f12278c2"],["fonts/open-sans/open-sans-regular.ttf","2f0f36be216123a090d72eb566515491"],["fonts/open-sans/open-sans-regular.woff","d935d57aeaef8900079e0f4826608496"],["fonts/open-sans/open-sans-regular.woff2","7bb5041c87d452713b7919575c00626a"],["fonts/open-sans/open-sans-semi-bold-italic.eot","130568dcb4a4bc5be9bcdd34ee7b81a9"],["fonts/open-sans/open-sans-semi-bold-italic.ttf","7ec0d8dad01740d014470fc9fe15f0ab"],["fonts/open-sans/open-sans-semi-bold-italic.woff","08db113a8c3a44684f46ffa523678cdb"],["fonts/open-sans/open-sans-semi-bold-italic.woff2","9135b6495e81dfbe3d5791598492cfa0"],["fonts/open-sans/open-sans-semi-bold.eot","beb3250a047fc8ea53eaf5151b098b6a"],["fonts/open-sans/open-sans-semi-bold.ttf","2051311f5d19b85caa65fee862a14d24"],["fonts/open-sans/open-sans-semi-bold.woff","192110caca82ccdef0bc77aa9a1d5dc7"],["fonts/open-sans/open-sans-semi-bold.woff2","0e52d8029c2c5e8312c875a18e043579"],["images/apple-touch-icon.png","360c238af0fa46f0eca7afe99c036f52"],["images/boom.png","fb4afb6ba0e9199b0d54d5c249753cfc"],["images/chrome-touch-icon-128x128.png","9abb3bc7a18720fde8655befdf49e5d1"],["images/chrome-touch-icon-192x192.png","a29973a0bfeadab52c19bb31e84abf9f"],["images/chrome-touch-icon-512x512.png","d93300a7231530b5058088c06ab41443"],["images/ms-touch-icon-144x144-precomposed.png","faea373fd12907ae64275cfc4e39aa6d"],["index.html","bc9d654393c5650c5b2736c7fba63e9b"],["js/auto-suggest.js","343e7e33f6dc969501e11c8fc2ee6629"],["js/awesomeSheet.js","3295e3fbad31f98a34b32220af1d6228"],["js/awesomeSheet.min.js","6f45504cec7fc867f136be33c52db9db"],["js/card.js","bbbf06d9f2d3cee9b3f3a77725848421"],["js/character-image.js","2d486861031b3042060bf7b75214a325"],["js/character-select.js","17102abc505c5fd8c27f85bef0256e5d"],["js/characters/blank.js","2657bf5fcf3e08bd9d0de8fbe4fd8348"],["js/characters/izlara.js","53db7c94b05258f00da9a3f9d65b01dd"],["js/characters/marika.js","0495a3fb2db5e98bad60cdb232249bfb"],["js/characters/nefi.js","4ed559e83d64e245f0aa21f181116077"],["js/characters/nif.js","14c8ba9a9d92777025e8aa48e312703f"],["js/characters/orrin.js","3fde016bbe787d7db15bac32be3dfe45"],["js/characters/ravich.js","1b279e47bb52c6bbf8f578fb660c8c5a"],["js/characters/ro.js","d57126517efb642c37ecb79ba342e05b"],["js/characters/vos.js","d401d49d7a15a3659f3101c10d476bb1"],["js/check-block.js","1ed08f8f10d5aa4f890acdfee3a1d043"],["js/check-url.js","bf1ce1613769a6688695c66e08ee9fbc"],["js/classes.js","b1130e283b50336499d8db31c6821e97"],["js/clone.js","b15e92230b4dcd99337ef2acf7f0f1f7"],["js/data.js","e64c4dfcff4dd39a7987e9ea82d5f7f4"],["js/demo.js","8ab45106c1178ec804aae8ec2e08df3b"],["js/display.js","86680f49cd5527eb4fe3b22f6060630f"],["js/encumbrance.js","6b176d31a3e0c9da82f07ce4b689a2f3"],["js/events.js","bdb5fe11c96c26e3b547c34fe60ff2c1"],["js/exp.js","01dee1f69f504c9cef3a65f56bd3e7f1"],["js/feats-data.js","90aa33c0da2a4aec35805e6cca5bd8e6"],["js/fireball.js","40757e23b57e2a1494a1a6baf396bcd7"],["js/fullscreen.js","fb8b1077450969a94b3b07b2809bade9"],["js/hard-coded-characters.js","5d28f174368beddc458c5cd847d0f839"],["js/header.js","c89f7ad8c186dbb6030ac830d345066a"],["js/helper.js","0b8864da1f1b35922547042b5255f0e7"],["js/init.js","2433a1df303bd7d91db4ad21d8f56100"],["js/input-block.js","45e2ffd7485afd5ffc63ee6253026154"],["js/input-range-block.js","4d54c8774a270ca9756582754657e66d"],["js/log.js","675686e1a37d438aa190aec021634e30"],["js/menu.js","f0fb94b4f644023ff9368472b06160af"],["js/modal.js","25bd59282a3dc05ff24111c3e8687ac8"],["js/nav.js","fd8839fd827bcd274c46ba79a2081c9b"],["js/night.js","ea6277e6b674920e3eb1dfdf54bc4c7d"],["js/onboarding.js","61cc4a29e5ecc09eec766f2e65b53a9c"],["js/page.js","de228fc208ed9ae115dcfaff30300c65"],["js/pill.js","af05aed3a90b59d8c559702c02d96ae8"],["js/prompt.js","fc252d45d3509a24bec66fb45aedf75b"],["js/radio-block.js","8cf170b8c26d10a0d4b2f81add6bcfa2"],["js/register-service-worker.js","8f4595bc1b2b7a6f2dbd17fbf2bab221"],["js/repair.js","f1e87d359f1d187c188d0f27248350d5"],["js/select-block.js","e82e6cf9622c27b06950951cec2b93f7"],["js/shade.js","75302a12e96fcd8a2ce2793a2fda6421"],["js/sheet.js","c8afc57fb2deb3b27520658134228543"],["js/size.js","961f595f25f948bffd06103052006dda"],["js/skills.js","98ea4d4f78fa6f44ca877ea139189a5b"],["js/snack.js","299704ccf8af7cc2bcdc2f51911098c5"],["js/spells.js","30e87e5062d61616a80fe7a118a112cd"],["js/stats.js","a08f8a5b9b99943fc40eaf76e31fc24e"],["js/strict.js","5e60d2e13017ae982538f352d04a961c"],["js/tabs.js","43da0883a0d694e1b03d9744751bfb17"],["js/text-block.js","56989819454bdb84edaedf4dbbeab8d9"],["js/textarea-block.js","ff45a9d3533bd37d7e3060585d00e42b"],["js/theme-color.js","1fad21a4fb497934884c526a1ff0ab61"],["js/tip.js","0c1f95277ededb0ec2fca968bfad80d0"],["js/total-block.js","e2c13f0bb933b7c8d3cd41ed5a0fccc5"],["js/update.js","acff5645530e923865864b56f8a3f83e"],["js/vendor-options.js","28573d48f97401150b288f40495cc572"],["js/vendor.min.js","6ca50350bee9b79751896bea53900736"],["js/wealth.js","01e6734638b1743ec5ebf5fa7182f9ea"],["manifest.json","0419708c922fd57b869d9eb54bad459a"],["style-guide.html","5bc0b5ffe5780089433a87f3c80b7bbc"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-aS-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


/* @preserve Mon, 02 Apr 2018 16:24:58 GMT */