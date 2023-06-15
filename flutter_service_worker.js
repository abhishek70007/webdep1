'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "461e2882ff22f9a90d879ae79f791a89",
"assets/assets/background/login_page_vector.png": "8bf1654a2db40307ff4d719723b65fce",
"assets/assets/background/login_page_wave.png": "612019d8e3447afd77f7afdf3e5443cb",
"assets/assets/icons/11%25201.png": "bd8faaa0311dd00e92392ac743ea39b7",
"assets/assets/icons/accountIconFilled.png": "52910c9d1e38befad87b8799d8fc3f8a",
"assets/assets/icons/addFromPhoneBookIcon.png": "9e3731bac75e06c04ddc27f6f61b8645",
"assets/assets/icons/addNewDriverIcon.png": "71fdde4cdcdc14fef086da63a04c17d0",
"assets/assets/icons/Arrow.png": "51c90382715ccb39a62eb7191a63e382",
"assets/assets/icons/backbtn_blue.png": "f6f70e63ce6e8916f2dd270328787328",
"assets/assets/icons/blueCircle.png": "905316977c02cea6f82b746c826ae3ea",
"assets/assets/icons/bonusIcon.png": "cce3284fd4b4a2cf8527575c2e7bd854",
"assets/assets/icons/box-truck.png": "5a7133b4a7a00f49459760d4ad122bbc",
"assets/assets/icons/buildingIcon.png": "753579ac815d065eacf5b6e457df78b3",
"assets/assets/icons/buildingIconBlack.png": "afbd03ccc911befeabed1b9cc2f18f8a",
"assets/assets/icons/buyGpsIcon.png": "d4656650452970ad68161d1b6bf7f7d8",
"assets/assets/icons/callButtonIcon.png": "3c30982476d5f91d65f12f07cd88f5c3",
"assets/assets/icons/CallDarkBlue.png": "539a39668ec86c6acd308209cfe7d78a",
"assets/assets/icons/callIcon.png": "baa478bfb2e7862895042247c2235d0c",
"assets/assets/icons/circle-outline-with-a-central-dot.png": "3288f011894f38699ee33b83c8c03285",
"assets/assets/icons/circleIcon.png": "52dd741fc2cdc5de9246455e8ff08f19",
"assets/assets/icons/creditCard.png": "e0736432ab781405b7cbd37cac269619",
"assets/assets/icons/customDropIcon.png": "e811ec46a73c7772c9705a58ed9fc778",
"assets/assets/icons/deepbluecircle_ic.png": "cbbd823f3f914183a063eba14c56caeb",
"assets/assets/icons/defaultAccountIcon.png": "943d7003e6b80a84af02693033c65faa",
"assets/assets/icons/deliveryTruck.png": "9a84b2c9c4ed9cd1bda5593e2117ba35",
"assets/assets/icons/disable.png": "cbbd0988b57ab53b04a2ff7b1969ce1e",
"assets/assets/icons/distanceCovered.png": "2de4f7b1994b8918d37efbe2d6909b6f",
"assets/assets/icons/dot_inside_a_circle.png": "de24b2c0dc272e2a8684f308fc40e999",
"assets/assets/icons/driverHandle.png": "da50265f568d38f0bb62f8218e8661eb",
"assets/assets/icons/driver_ic.png": "bd8faaa0311dd00e92392ac743ea39b7",
"assets/assets/icons/dropDownButtonIcon.png": "953ca662fcf988714cef5dd6e72096c8",
"assets/assets/icons/edit.png": "4c68591255722f0576d3f119678342b3",
"assets/assets/icons/errorIcon.png": "6b905ba65ad195d9533f53def275414d",
"assets/assets/icons/filterIcon.png": "64f5beaa191e215a2f4c2d7941c7279e",
"assets/assets/icons/gas_station.png": "80de4d3ee879e0b0257fec97c9831bef",
"assets/assets/icons/gas_station_rounded.png": "9f47cf1a255ce00137babed41b2453b7",
"assets/assets/icons/gmaps.png": "317e43ffd0b0c422ba30199137fa9da0",
"assets/assets/icons/googleicon.png": "53638367074f3efe9b91bcbec06f9b12",
"assets/assets/icons/google_icon.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/icons/gps.png": "6621374e1c088768d7118e8e6df4a5a8",
"assets/assets/icons/greencheckcircle_ic.png": "570069c4a3cc914097416b6b22e6f11d",
"assets/assets/icons/greenFilledCircleIcon.png": "478a017771b9b21204dab2fe451b8e84",
"assets/assets/icons/helpIcon.png": "63bf95c8cbd8e22828cdc81b72389d98",
"assets/assets/icons/help_ic.png": "aaec5c8ca6c542f1d932009e1fb9dc2a",
"assets/assets/icons/history.png": "5de042e9d5e92dde0303d62d8366917c",
"assets/assets/icons/homeIcon.png": "c877fa83ed16e5d89ef8fcbc7a003771",
"assets/assets/icons/images%25201.png": "6211cb309462acfd8813e74eff215da5",
"assets/assets/icons/languageIcon.png": "d199936b55d0773a7f87c729484d5caf",
"assets/assets/icons/layers.png": "31b6b2b3e412a579076879cc50bf426e",
"assets/assets/icons/leftyellowtruckicon.png": "29bc62400b96d5db3113562039f086aa",
"assets/assets/icons/liveasy.png": "ede8162f5a5d6b7e52419ad928da684c",
"assets/assets/icons/liveasyicon.png": "af4617417d566c3548270c4a89282e91",
"assets/assets/icons/loading.png": "caa80888463aad9f89425512cdd4c6c0",
"assets/assets/icons/locationIcon.png": "f7f818ead09b81012d0bb32d90fd343e",
"assets/assets/icons/location_pin.png": "3e12c750426fa7dc60da54362c27b9a0",
"assets/assets/icons/lockIcon.png": "238b8084f782cd58974511e365ad12cd",
"assets/assets/icons/lockTruckDarkIcon.png": "622a03f8b1493968d65f7bed55676f2b",
"assets/assets/icons/logo.png": "4c86359e3b3b7f4bb42274ecf4ddc4da",
"assets/assets/icons/logoutIcon.png": "51aad0c456f98da9a7659e5732f6b774",
"assets/assets/icons/mailIcon.png": "fe4f4e49786300521bb35035f908e9b9",
"assets/assets/icons/maintenance.png": "cc9d4f28f456c1660d96db3f99028000",
"assets/assets/icons/MaleUser.png": "c7372299ac3177f87a85a393d43d1553",
"assets/assets/icons/navigate.png": "cf9d1f803a5c0b784494cb26b26a2e26",
"assets/assets/icons/navigate2.png": "bf793154c191c44d839f41d858ab0d84",
"assets/assets/icons/navigateIcon.png": "2a6282ce383de7282dd773bd20a24874",
"assets/assets/icons/navigationIcons/accountIcon.png": "b7046467a62b91a9b5a384045c391f17",
"assets/assets/icons/navigationIcons/activeAccountIcon.png": "61b4fff0dff63afbf755b4c8748b9edb",
"assets/assets/icons/navigationIcons/activeHomeIcon.png": "82cb76eeea02ae0de1478c373e20b70f",
"assets/assets/icons/navigationIcons/activeMyTrucksIcon.png": "c6540b25e211c731c632587bf2ad9056",
"assets/assets/icons/navigationIcons/activeOrdersIcon.png": "79bb4d4b0bb362dca77b1d306bd85aa5",
"assets/assets/icons/navigationIcons/activePostLoadIcon.png": "4af327432448490e39da870ddeb38619",
"assets/assets/icons/navigationIcons/goBack.png": "b763e4c1d1a05fc9f23bc3b4e8db8497",
"assets/assets/icons/navigationIcons/homeIcon.png": "2e67a67472f459354445dd950f4e1384",
"assets/assets/icons/navigationIcons/myTrucksIcon.png": "21bb9371047d5a9800aa5bcf75cf9e7c",
"assets/assets/icons/navigationIcons/ordersIcon.png": "0f13b883224f1b1d7fb74380ef7f856f",
"assets/assets/icons/navigationIcons/postLoadIcon.png": "a2ba23e2bf093c19c5eb4bf3d91f528f",
"assets/assets/icons/ordersIcon.png": "8bea9867aa5ffaa24ffcdd3e6432c5f3",
"assets/assets/icons/parking.png": "0dcc302d6cc496a333ce4deb23caf7b6",
"assets/assets/icons/pendingIcon.png": "67a294b48e18fab9a02a62907ded5569",
"assets/assets/icons/person.png": "167bb23a8f6a957fc3fb6dc58f8ef3a7",
"assets/assets/icons/person_ic.png": "96346526c2428d4ccb44c3cd9f70b667",
"assets/assets/icons/playHistoryPin.png": "7012b9a365632a0796658fb88f375ac8",
"assets/assets/icons/playTruckPin.png": "3f5481268175636e8f562a94b522bb72",
"assets/assets/icons/play_trip.png": "421ed312d830db7462957e00d4937c65",
"assets/assets/icons/police.png": "c8864e03b66c6d0fb14162fc8a4eb9d8",
"assets/assets/icons/police_rounded.png": "729a120e602e523a09f9d0276d1724e7",
"assets/assets/icons/Rectangle%2520268.png": "0fd21f8cc73f6d5c87993877d4f9e977",
"assets/assets/icons/rectangleIcon.png": "efb1620115e503e44d4739f90e7b0b23",
"assets/assets/icons/redSemiFilledCircleIcon.png": "3492eb4092d256dd57820b77700723f4",
"assets/assets/icons/referAndEarnIcon.png": "db570e5924fbd9325d5a5f9f8e33aa3f",
"assets/assets/icons/retryIcon.png": "2b78441d4c61064265f3b6e35a380a50",
"assets/assets/icons/rightyellowtruckicon.png": "de545e4d885ae26cc36cf7e1aa7dec22",
"assets/assets/icons/running.png": "359a85b03078d9f4a08e96457fa00f10",
"assets/assets/icons/sadSmileIcon.png": "3756032c705d7bd3a1c173c9464ddfd7",
"assets/assets/icons/selectedIcon.png": "28a04ddec657bfc2c1aa3fd674495f2a",
"assets/assets/icons/share-2.png": "18206562af18557001d038eb079dce95",
"assets/assets/icons/share.png": "69edac7ce2284f075a30340049a25159",
"assets/assets/icons/signalIconFour.png": "5780f9f17470c1acef212c424fa327bb",
"assets/assets/icons/signalIconNothing.png": "9789968c2ce91c335d58ed26af6ea13c",
"assets/assets/icons/signalIconOne.png": "f4d55a0465e920f45eb2b7e94aa4963f",
"assets/assets/icons/signalIconThree.png": "8fa5f8aca600d2f96111af3b516d8b1c",
"assets/assets/icons/signalIconTwo.png": "5830af896f17facea02aee3f5de6464a",
"assets/assets/icons/signalIconZero.png": "ea08c27427680b74d3feefdbdd4f3286",
"assets/assets/icons/smallTruckLockIcon.png": "a1843e4b19ef0dff8f26169b8ab65fe1",
"assets/assets/icons/speed_status.png": "e4d0ff49a1628ac655b33322f9c72194",
"assets/assets/icons/stop.png": "507ce2ae6ef02367fc0124b780c1469f",
"assets/assets/icons/tick.png": "d27708871ec528c5030564f18245b53c",
"assets/assets/icons/tickIcon.png": "0ee25718a9b9b48b2c1e24a8ee8b3fbb",
"assets/assets/icons/truckAnalysis.png": "fa04f5fb30fe9359d4e9e3a1eb008ba9",
"assets/assets/icons/TruckIcon.png": "ccdffbd167f7357aca33ec94bc83cb32",
"assets/assets/icons/truckLockIcon.png": "9e58789728a214d08f6ed4086b77bc44",
"assets/assets/icons/truckPin.png": "aa34b2416cb665dad7e118e13348ad05",
"assets/assets/icons/truckPinGreen.png": "20032c4409dc6487a8366c65095c0352",
"assets/assets/icons/truckPinGrey.png": "42b352660d1a4cc79346c4ddb5e57c12",
"assets/assets/icons/truckPinRed.png": "b461aba782cca641dcfa3ebee346e066",
"assets/assets/icons/unloading.png": "afc4bad7bd413459e9f3e0c44d486e04",
"assets/assets/icons/unlockTruckLightIcon.png": "59402228f292a9549cfc31ad389cfd13",
"assets/assets/icons/Vector%2520(1).png": "e11b8c80bd17202da0faa0b26a2aa4d4",
"assets/assets/icons/Vector%2520(2).png": "b7f438e90985257e8c8a938e6b631ed8",
"assets/assets/icons/verifiedButtonIcon.png": "bc3eea4c98057f3c1212394d80a37d53",
"assets/assets/icons/welcomeIcon.png": "24cf899a9a0e3679c5e0e786c382f1cf",
"assets/assets/icons/whatsappGreenIcon.png": "2c292c87475389b963c77f63f4d28f7b",
"assets/assets/icons/whatsappWhiteBorderIcon.png": "ef269ccd3d5d29738d6cb5fbcee81505",
"assets/assets/icons/white_dot.png": "d6a7a5476df39668c9692e1b9414622a",
"assets/assets/images/AddDocumentImg.png": "16d03a5d327abbac8ec217a6d4c16dff",
"assets/assets/images/AddDocumentImgHindi.png": "5547e4bab6d1dcd7d665fe3370adcb87",
"assets/assets/images/AddDocumentImgHindi2.png": "820140aa24176a5486cc2aa54c99a99c",
"assets/assets/images/AddMoreDocImg.png": "e5fe0cb60cc30f590e675bed5a679d6f",
"assets/assets/images/AddMoreDocImgHindi.png": "c6cd5568cd0e118551cf3d021540f1ad",
"assets/assets/images/AddNew.png": "81b5cca884f82fcf65555b8c1002ed44",
"assets/assets/images/alert.png": "67789dca40ae53b35ec96fc66d1ac4b0",
"assets/assets/images/bonusBackgroundImage.png": "ea2ac72885aa4f7f927591544eecc24c",
"assets/assets/images/buyGpsBackgroundImage.png": "068ecddb7980d0d019eba8d33a5d2e2a",
"assets/assets/images/Cancel.png": "7e2686b373050f3fc2af8827a5063d0f",
"assets/assets/images/defaultDriverImage.png": "943d7003e6b80a84af02693033c65faa",
"assets/assets/images/EmptyBox.jpeg": "f42bb29c61962b1def51a5b7d0362aca",
"assets/assets/images/EmptyLoad.png": "3ea992e5c464aff15b63d81cf17ae5b4",
"assets/assets/images/humanIcon.png": "76162a68080a4918058b71422def227a",
"assets/assets/images/humanIcon3x.png": "22214b17d697edcf74d22d1a502a31af",
"assets/assets/images/indianFlag.png": "358e8b4bdbb0559c9db4e3acbc6e8934",
"assets/assets/images/liveasyTruck.png": "087e5beb5cf8eb11d0bce5bb37c051df",
"assets/assets/images/loadBox.png": "3ea992e5c464aff15b63d81cf17ae5b4",
"assets/assets/images/loadBoxImage.png": "9630b745766f98e070386f480cfd278a",
"assets/assets/images/logoSplashScreen.png": "3acc5ca42c6a450e43822b6f9ab67026",
"assets/assets/images/onGoingShimmer.png": "341c61c9960f65f0c5b34cea2037aac1",
"assets/assets/images/overviewtataultra.png": "73a71b50757a07ecb842de41cf71cf09",
"assets/assets/images/referAndEarnBackgroundImage.png": "4cf7e34cf5ccb6be078a168bb5b959bb",
"assets/assets/images/successful.png": "6adeb8f7331a851956f508ee28c79ec3",
"assets/assets/images/tagLine.png": "f5a015eb531970680ecb22fdb356fa07",
"assets/assets/images/truck.png": "deac3d69d2f6cc5882bcefae7e759ce8",
"assets/assets/images/truckAsMarker.png": "16a72f7e612a9309c7ade9e34aed2fab",
"assets/assets/images/truckAsMarker3x.png": "27ce7b369f7f7ac2f79fa09613821e57",
"assets/assets/images/truckImageWithGreenBackground.png": "c20e75f5ccf04aa83589719f727c3fc1",
"assets/assets/images/TruckListEmptyImage.png": "a3d41da8ad6034f6b58b03775e6f5500",
"assets/assets/images/updateavailable.gif": "ebcdf6cf092c26fcb1aa20b3aa07f95d",
"assets/assets/images/Upload_to_ftp.png": "04e638150f275c16fe9414c4b0f7aba6",
"assets/assets/images/verifiedDoc.png": "81f97524a665edf2cf4b3911f3b41be9",
"assets/assets/images/whatsAppImageBackground.png": "4828234d10ab9de3d0fc2a59c8ed2280",
"assets/assets/images/wifi.gif": "02c58a2215299f650390c94fcce2c14f",
"assets/FontManifest.json": "b6a70ce56a0b2d6dbe77cd9d82dcf68b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/NOTICES": "f17e15f71fe98fc4d03cb309dd12b303",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f223b10dd212f9a7461367e7fd44505",
"/": "9f223b10dd212f9a7461367e7fd44505",
"main.dart.js": "37b5c333bedc2f706faa157d64554dd1",
"manifest.json": "9dff3c87a5af71ae39b9c905d9919548",
"version.json": "16281567ce3884f5711fc87052de1336"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
