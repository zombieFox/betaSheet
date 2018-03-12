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
var PrecacheConfig = [["css/awesomeSheet.css","663d0d1ad5f69458a38ea1a3328def0f"],["css/awesomeSheet.min.css","aed5a45e8a6395e19f312cae8e0e2b33"],["css/vendor.css","b980f06480077133779ce2bb24783187"],["css/vendor.min.css","3592bee49305c85042c2c8681d55e972"],["db/feats.csv","20b831ef44183a30e2f46f274686aa57"],["db/languages.csv","e33421efca00cb9265d65bc062f4dfde"],["db/traits.csv","b761bfd5e9b10a0e4c634e07948cb723"],["fonts/fjalla-one/fjalla-one-regular.ttf","d8c3c0b2a12dae2dd8e43895d33df67e"],["fonts/fjalla-one/fjalla-one-regular.woff","201b2960b726844b0c1142d2c5a82278"],["fonts/fjalla-one/fjalla-one-regular.woff2","f0249cace1e9aa9599c44fc6188ff619"],["fonts/icons/icons.eot","4ece1d757df5c59e79ea7be646f63ba0"],["fonts/icons/icons.json","b61ad6a06d593a97e5a778f1a74df22e"],["fonts/icons/icons.svg","5ac631431dc1fca985ec9e351451514a"],["fonts/icons/icons.ttf","2a14d6fce4928074f22c772a04a72bcc"],["fonts/icons/icons.woff","0cf5789c1c9b62bc003a225868152e5a"],["fonts/open-sans/open-sans-bold-italic.eot","217e561bb88d7d3d6bebf715b72dbfed"],["fonts/open-sans/open-sans-bold-italic.ttf","54152d20be5227cba086ca3092ea901e"],["fonts/open-sans/open-sans-bold-italic.woff","7c9a2f7abbf15373d6176894eac76d99"],["fonts/open-sans/open-sans-bold-italic.woff2","1d6d47c5650d81b90e7aa20fe8d90111"],["fonts/open-sans/open-sans-bold.eot","d3e047b61c14c025434c4a18e1c3eed4"],["fonts/open-sans/open-sans-bold.ttf","eb2f9bdd71fa1a515d2b0f210eabce7a"],["fonts/open-sans/open-sans-bold.woff","a012fc5910a16e9cfc7d7529d6507ec8"],["fonts/open-sans/open-sans-bold.woff2","573ea876c76cb20e20ea806279b650b0"],["fonts/open-sans/open-sans-condensed-bold.eot","2fff27a01524360f0f86d7d2097c6fc1"],["fonts/open-sans/open-sans-condensed-bold.ttf","ddad2418ade5824090b9531ff90ff58f"],["fonts/open-sans/open-sans-condensed-bold.woff","8b82d71af711eb30ba75ae2aad24f989"],["fonts/open-sans/open-sans-condensed-bold.woff2","e656c39eeb984e9ba3eab970dcc97e62"],["fonts/open-sans/open-sans-condensed-light-italic.eot","e9b431160632c7e9e6f86a47690d8c6f"],["fonts/open-sans/open-sans-condensed-light-italic.ttf","ab12b2d332e77aaf3f0de3c260fa0d97"],["fonts/open-sans/open-sans-condensed-light-italic.woff","5e4001fdd1ad7e1b515a3032be0210e1"],["fonts/open-sans/open-sans-condensed-light-italic.woff2","50a0539533c0b6d803f20aac449f1acb"],["fonts/open-sans/open-sans-condensed-light.eot","728a184e858d2d1df12a29395e89062e"],["fonts/open-sans/open-sans-condensed-light.ttf","c913cdf509d00f33a1a48848b8673bac"],["fonts/open-sans/open-sans-condensed-light.woff","c47012973254c1720e3a98c1c4a9539f"],["fonts/open-sans/open-sans-condensed-light.woff2","61137440fe3cb7c3335edaa48f2e96e1"],["fonts/open-sans/open-sans-italic.eot","309ade593bd77b9d0ddc6c2bcd8d5318"],["fonts/open-sans/open-sans-italic.ttf","613bc66dc79404ca6c5bf75fdecaa025"],["fonts/open-sans/open-sans-italic.woff","3814fd1eba78acb575ba59a529d09262"],["fonts/open-sans/open-sans-italic.woff2","adedab7e50ce92cc94b80efa3fcaccbb"],["fonts/open-sans/open-sans-light-italic.eot","9077e24b8b902e86d225e0ee9563da75"],["fonts/open-sans/open-sans-light-italic.ttf","971eb5934e01282e2af8e1486dab813c"],["fonts/open-sans/open-sans-light-italic.woff","428027bbc8530c62ebe54c0e66a975ac"],["fonts/open-sans/open-sans-light-italic.woff2","8e02343794db373a41daf6c102654aee"],["fonts/open-sans/open-sans-light.eot","33f5cb2b77653e8efe192de95ba7c94e"],["fonts/open-sans/open-sans-light.ttf","c81ee1cc6db8c8fa312878417b0fbe1e"],["fonts/open-sans/open-sans-light.woff","660970bd910fed5d6207d7363d71824a"],["fonts/open-sans/open-sans-light.woff2","6fdbb5cbc99d308e282ab40b8d5ef613"],["fonts/open-sans/open-sans-regular.eot","8a71aead22fe47842e886256f12278c2"],["fonts/open-sans/open-sans-regular.ttf","2f0f36be216123a090d72eb566515491"],["fonts/open-sans/open-sans-regular.woff","d935d57aeaef8900079e0f4826608496"],["fonts/open-sans/open-sans-regular.woff2","7bb5041c87d452713b7919575c00626a"],["fonts/open-sans/open-sans-semi-bold-italic.eot","130568dcb4a4bc5be9bcdd34ee7b81a9"],["fonts/open-sans/open-sans-semi-bold-italic.ttf","7ec0d8dad01740d014470fc9fe15f0ab"],["fonts/open-sans/open-sans-semi-bold-italic.woff","08db113a8c3a44684f46ffa523678cdb"],["fonts/open-sans/open-sans-semi-bold-italic.woff2","9135b6495e81dfbe3d5791598492cfa0"],["fonts/open-sans/open-sans-semi-bold.eot","beb3250a047fc8ea53eaf5151b098b6a"],["fonts/open-sans/open-sans-semi-bold.ttf","2051311f5d19b85caa65fee862a14d24"],["fonts/open-sans/open-sans-semi-bold.woff","192110caca82ccdef0bc77aa9a1d5dc7"],["fonts/open-sans/open-sans-semi-bold.woff2","0e52d8029c2c5e8312c875a18e043579"],["images/apple-touch-icon.png","360c238af0fa46f0eca7afe99c036f52"],["images/boom.png","fb4afb6ba0e9199b0d54d5c249753cfc"],["images/chrome-touch-icon-128x128.png","9abb3bc7a18720fde8655befdf49e5d1"],["images/chrome-touch-icon-192x192.png","a29973a0bfeadab52c19bb31e84abf9f"],["images/chrome-touch-icon-512x512.png","d93300a7231530b5058088c06ab41443"],["images/ms-touch-icon-144x144-precomposed.png","faea373fd12907ae64275cfc4e39aa6d"],["index.html","eab40533a44a44a79e9d93f5d15baf2b"],["js/auto-suggest.js","343e7e33f6dc969501e11c8fc2ee6629"],["js/awesomeSheet.js","04f5aa51ca09ece266b7cd9f8d3d3c30"],["js/awesomeSheet.min.js","79f896f6305a319881878b8851c4a7bb"],["js/card.js","bbbf06d9f2d3cee9b3f3a77725848421"],["js/character-image.js","2d486861031b3042060bf7b75214a325"],["js/character-select.js","901b5c88bc9387d41cc3e796e891f5ca"],["js/characters/blank.js","520a8297282f4adee9a68b230174dd2d"],["js/characters/izlara.js","61a82c8a4004b29cf48e9c164b7e95cc"],["js/characters/marika.js","13cc9ad7a3260fbcc1c209eee066e75e"],["js/characters/nefi.js","af581d9195ac2c5f1b47abc3ec0f2f6b"],["js/characters/nif.js","becafe714e9c2cc796e0b7cc88bc153d"],["js/characters/orrin.js","027c0efcaa13727365161f2ce05e313b"],["js/characters/ravich.js","a4e58b5962532a9151a7437d82f3528c"],["js/characters/ro.js","68709c5830adf2adbf819d8c481a0a6d"],["js/characters/vos.js","83b6472ccefa230d719d77de744f967f"],["js/check-block.js","7627a114713bb46a4b22844b889425a9"],["js/check-url.js","bf1ce1613769a6688695c66e08ee9fbc"],["js/classes.js","7f69d675e81bc709f3d924aedb7a76d4"],["js/clone.js","9648c136cee980225541ec987436cdc1"],["js/data.js","e64c4dfcff4dd39a7987e9ea82d5f7f4"],["js/display.js","b73a714ac65396748d182110d8a88ead"],["js/edit.js","1b8c7e31b0a6020c9ffa087f7aba9973"],["js/encumbrance.js","c5a995a1ed513a603fc89cef74ad4d33"],["js/events.js","bdb5fe11c96c26e3b547c34fe60ff2c1"],["js/exp.js","7ecb68860c0e3594e16d610515d9aac5"],["js/feats-data.js","90aa33c0da2a4aec35805e6cca5bd8e6"],["js/fireball.js","40757e23b57e2a1494a1a6baf396bcd7"],["js/fullscreen.js","fb8b1077450969a94b3b07b2809bade9"],["js/hard-coded-characters.js","5d28f174368beddc458c5cd847d0f839"],["js/header.js","c89f7ad8c186dbb6030ac830d345066a"],["js/helper.js","5508deaf1ccd9a90b3aa1c6646818cfe"],["js/init.js","f85f98671d848e289fbe828f2a21620f"],["js/input-block.js","19148c92bee2a05e2c589290cd5c712f"],["js/input-range-block.js","4d54c8774a270ca9756582754657e66d"],["js/log.js","675686e1a37d438aa190aec021634e30"],["js/menu.js","6a9903281191a3607454de81019743e7"],["js/modal.js","25bd59282a3dc05ff24111c3e8687ac8"],["js/nav.js","fd8839fd827bcd274c46ba79a2081c9b"],["js/night.js","ea6277e6b674920e3eb1dfdf54bc4c7d"],["js/onboarding.js","2fdcbad70ddf02ad3db9e49ff8640aac"],["js/page.js","de228fc208ed9ae115dcfaff30300c65"],["js/pill.js","22e4e8519f06e7218d713e06c2df0ed1"],["js/prompt.js","fc252d45d3509a24bec66fb45aedf75b"],["js/radio-block.js","8cf170b8c26d10a0d4b2f81add6bcfa2"],["js/register-service-worker.js","8f4595bc1b2b7a6f2dbd17fbf2bab221"],["js/repair.js","639a1cee18300ac8137385d55638c9c3"],["js/select-block.js","e82e6cf9622c27b06950951cec2b93f7"],["js/shade.js","75302a12e96fcd8a2ce2793a2fda6421"],["js/sheet.js","5230ce4b128e2e75108c089044b03a93"],["js/size.js","961f595f25f948bffd06103052006dda"],["js/skills.js","98ea4d4f78fa6f44ca877ea139189a5b"],["js/snack.js","299704ccf8af7cc2bcdc2f51911098c5"],["js/spells.js","c11d888982edf387fbfb15383f6a3862"],["js/stats.js","3b5dca5d2720061271b6c92f8c8e71d8"],["js/strict.js","5e60d2e13017ae982538f352d04a961c"],["js/tabs.js","0cbee507dbbd17b9647922e81631671c"],["js/text-block.js","56989819454bdb84edaedf4dbbeab8d9"],["js/textarea-block.js","ff45a9d3533bd37d7e3060585d00e42b"],["js/theme-color.js","1fad21a4fb497934884c526a1ff0ab61"],["js/tip.js","0c1f95277ededb0ec2fca968bfad80d0"],["js/total-block.js","299d87bf2fa90cb4a1ab3a185a128e76"],["js/update.js","c92455753b7579cb264bc4ed558c8d60"],["js/vendor-options.js","28573d48f97401150b288f40495cc572"],["js/vendor.min.js","6ca50350bee9b79751896bea53900736"],["js/wealth.js","2c709f2cee2b5dfcb674c4b4c6fbd96c"],["manifest.json","0419708c922fd57b869d9eb54bad459a"],["style-guide.html","ca1e3d87773ce345a640b69a1f563168"]];
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


/* @preserve Mon, 12 Mar 2018 00:31:15 GMT */