// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4rkIz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _circle = require("./circle");
var _circleDefault = parcelHelpers.interopDefault(_circle);
var _hexagon = require("./hexagon");
var _hexagonDefault = parcelHelpers.interopDefault(_hexagon);
var _quadTree = require("./quad-tree");
var _quadTreeDefault = parcelHelpers.interopDefault(_quadTree);
var _rectangle = require("./rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
var _triangle = require("./triangle");
var _triangleDefault = parcelHelpers.interopDefault(_triangle);
var _collision = require("./utl/collision");
var _collisionDefault = parcelHelpers.interopDefault(_collision);
var _render = require("./utl/render");
var _renderDefault = parcelHelpers.interopDefault(_render);
const counter = document.getElementById("counter");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const canvas = document.getElementById("cnvs");
const quad = new (0, _quadTreeDefault.default)(new (0, _rectangleDefault.default)(0, 0, document.body.clientWidth, document.body.clientHeight));
const renderComponent = new (0, _renderDefault.default)();
const collisionComponent = new (0, _collisionDefault.default)();
const gameState = {
    rects: []
};
const size = 16;
const circleSize = size * 4; // size + gap
const cols = Math.floor(window.document.body.clientWidth / circleSize) - 1;
const rows = Math.floor(window.document.body.clientHeight / circleSize) - 1;
const getRandomPosition = (index)=>{
    return {
        x: circleSize + index % cols * circleSize,
        y: circleSize + Math.floor(index / cols) * circleSize
    };
};
const getRandomVelocity = ()=>({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
    });
const createShape = (index)=>{
    const { x, y } = getRandomPosition(index);
    const velocity = getRandomVelocity();
    switch(getRandomInt(0, 2)){
        case 0:
            return new (0, _hexagonDefault.default)(size, x, y, velocity.x, velocity.y);
        case 1:
            return new (0, _circleDefault.default)(x, y, size, velocity.x, velocity.y);
        case 2:
            return new (0, _triangleDefault.default)(size * (1 + Math.cos(Math.PI / 6)), x, y, velocity.x, velocity.y);
    }
};
for(let i = 0; i < rows * cols; i++)gameState.rects.push(createShape(i));
function queueUpdates(numTicks) {
    for(let i = 0; i < numTicks; i++){
        gameState.lastTick += gameState.tickLength;
        update(gameState.lastTick);
    }
}
function draw(tFrame) {
    counter.innerHTML = `\u{41E}\u{431}\u{44A}\u{435}\u{43A}\u{442}\u{44B}: ${gameState.rects.length}`;
    const context = canvas.getContext("2d");
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw shapes
    gameState.rects.forEach((rect)=>renderComponent.drawRect(context, rect));
}
function update(tick) {
    quad.clear();
    // Insert rectangles into quadtree
    gameState.rects.forEach((rect)=>quad.insert(rect));
    const activeRects = [];
    gameState.rects.forEach((currentRect)=>{
        const possibleOverlaps = quad.queryRange(currentRect);
        let isOverlap = false;
        if (currentRect.hits < 3) {
            activeRects.push(currentRect);
            possibleOverlaps.forEach((otherRect)=>{
                if (otherRect !== currentRect && otherRect.hits < 3 && collisionComponent.intersects(currentRect, otherRect)) isOverlap = true;
            });
        }
        if (isOverlap) handleCollision(currentRect);
        else if (isOutOfBounds(currentRect)) handleBoundaryCollision(currentRect);
    });
    // Update positions of rectangles
    gameState.rects.forEach((rect)=>{
        rect.x += rect.vx;
        rect.y += rect.vy;
    });
    gameState.rects = activeRects;
}
function handleCollision(rect) {
    rect.vx = -rect.vx;
    rect.vy = -rect.vy;
    renderComponent.changeColor(rect);
    rect.hits += 1;
}
function handleBoundaryCollision(rect) {
    rect.vx = -rect.vx;
    rect.vy = -rect.vy;
}
function isOutOfBounds(rect) {
    return rect.left < 0 || rect.top < 0 || rect.right > document.body.clientWidth || rect.bottom > document.body.clientHeight;
}
function run(tFrame) {
    gameState.stopCycle = window.requestAnimationFrame(run);
    const nextTick = gameState.lastTick + gameState.tickLength;
    let numTicks = 0;
    if (tFrame > nextTick) {
        const timeSinceTick = tFrame - gameState.lastTick;
        numTicks = Math.floor(timeSinceTick / gameState.tickLength);
    }
    queueUpdates(numTicks);
    draw(tFrame);
    gameState.lastRender = tFrame;
}
function stopGame(handle) {
    window.cancelAnimationFrame(handle);
}
function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameState.lastTick = performance.now();
    gameState.lastRender = gameState.lastTick;
    gameState.tickLength = 15; //ms
}
setup();
run();

},{"./circle":"7fLIW","./hexagon":"01bQk","./quad-tree":"kkB4d","./rectangle":"8admK","./triangle":"k58CA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utl/collision":"kJbPn","./utl/render":"hYhD6"}],"7fLIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rectangle = require("./rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
class Circle extends (0, _rectangleDefault.default) {
    constructor(x, y, r, vx, vy){
        super(x, y, r, r, vx, vy);
        this.r = r;
        this.type = "Circle";
        this.hits = 0;
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    }
    get left() {
        return this.x - this.w;
    }
    get right() {
        return this.x + this.w;
    }
    get top() {
        return this.y - this.h;
    }
    get bottom() {
        return this.y + this.h;
    }
    contains(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)) <= this.r;
    }
}
exports.default = Circle;

},{"./rectangle":"8admK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8admK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Rectangle {
    constructor(x, y, w, h, vx = 0, vy = 0){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vx = vx;
        this.vy = vy;
    }
    get left() {
        return this.x;
    }
    get right() {
        return this.x + this.w;
    }
    get top() {
        return this.y;
    }
    get bottom() {
        return this.y + this.h;
    }
    contains(point) {
        return point.x >= this.x && point.x < this.x + this.w && point.y >= this.y && point.y < this.y + this.h;
    }
    intersects(rect) {
        let d1x = rect.left - this.right;
        let d1y = rect.top - this.bottom;
        let d2x = this.left - rect.right;
        let d2y = this.top - rect.bottom;
        if (d1x > 0 || d1y > 0 || d2x > 0 || d2y > 0) return false;
        return true;
    // return (this.left < rect.right)
    //     && (rect.left < rect.right)
    //     && (this.top < rect.bottom)
    //     && (rect.top < this.bottom)
    }
}
exports.default = Rectangle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"01bQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rectangle = require("./rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
class Hexagon extends (0, _rectangleDefault.default) {
    constructor(r, x, y, vx, vy){
        super(x, y, r, r, vx, vy);
        this.type = "Hexagon";
        this.r = r;
        this.hits = 0;
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        this.verticles = [];
        const a = 2 * Math.PI / 6;
        for(var i = 0; i < 6; i++)this.verticles = [
            ...this.verticles,
            {
                x: this.x + this.r * Math.cos(-a * i),
                y: this.y + this.r * Math.sin(-a * i)
            }
        ];
    }
    get left() {
        return this.x - this.w;
    }
    get right() {
        return this.x + this.w;
    }
    get top() {
        return this.y + this.h * Math.sin(-2 * Math.PI / 6);
    }
    get bottom() {
        return this.y + this.h * Math.sin(2 * Math.PI / 6);
    }
}
exports.default = Hexagon;

},{"./rectangle":"8admK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkB4d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rectangle = require("./rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
class QuadTree {
    constructor(boundary, level = 1, capacity = 4){
        if (!boundary) throw TypeError("boundary is null or undefined");
        if (!(boundary instanceof (0, _rectangleDefault.default))) throw TypeError("boundary should be a Rectangle");
        this._points = [];
        this._count = 0;
        this._boundary = boundary;
        this._capacity = capacity;
        this._hasChildren = false;
        this._children = [];
        this.level = level;
    }
    insert(point) {
        this._points.push(point);
        this._count += 1;
        if (this._count > this._capacity) {
            if (!this._hasChildren) this._subdivide();
            for(let i = 0; i < this._points.length; i++){
                let response = [];
                if (this._children[0]._boundary.intersects(this._points[i])) response[0] = this._children[0].insert(this._points[i]);
                if (this._children[1]._boundary.intersects(this._points[i])) response[1] = this._children[1].insert(this._points[i]);
                if (this._children[2]._boundary.intersects(this._points[i])) response[2] = this._children[2].insert(this._points[i]);
                if (this._children[3]._boundary.intersects(this._points[i])) response[3] = this._children[3].insert(this._points[i]);
            }
            this._points = [];
        }
        return true;
    }
    get length() {
        // console.log(this)
        let count = this._count;
        // if (this._hasChildren) {
        //     count += this._children[0].length
        //     count += this._children[1].length
        //     count += this._children[2].length
        //     count += this._children[3].length
        // }
        return count;
    }
    queryRange(rect, found = []) {
        if (this._hasChildren) {
            if (this._children[0]._boundary.intersects(rect)) found = [
                ...found,
                ...this._children[0].queryRange(rect, found)
            ];
            if (this._children[1]._boundary.intersects(rect)) found = [
                ...found,
                ...this._children[1].queryRange(rect, found)
            ];
            if (this._children[2]._boundary.intersects(rect)) found = [
                ...found,
                ...this._children[2].queryRange(rect, found)
            ];
            if (this._children[3]._boundary.intersects(rect)) found = [
                ...found,
                ...this._children[3].queryRange(rect, found)
            ];
        }
        found = [
            ...found,
            ...this._points
        ];
        return found;
    }
    _subdivide() {
        const subWidth = this._boundary.w / 2;
        const subHeight = this._boundary.h / 2;
        this._children.push(new QuadTree(new (0, _rectangleDefault.default)(this._boundary.x, this._boundary.y, subWidth, subHeight), this.level + 1));
        this._children.push(new QuadTree(new (0, _rectangleDefault.default)(this._boundary.x + subWidth, this._boundary.y, subWidth, subHeight), this.level + 1));
        this._children.push(new QuadTree(new (0, _rectangleDefault.default)(this._boundary.x + subWidth, this._boundary.y + subHeight, subWidth, subHeight), this.level + 1));
        this._children.push(new QuadTree(new (0, _rectangleDefault.default)(this._boundary.x, this._boundary.y + subHeight, subWidth, subHeight), this.level + 1));
        this._hasChildren = true;
    }
    clear() {
        this._points = [];
        this._children = [];
        this._hasChildren = false;
        this._count = 0;
    }
    printTree() {
    // console.log(this._children)
    // console.log(this._points, this._children)
    }
}
exports.default = QuadTree;

},{"./rectangle":"8admK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k58CA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rectangle = require("./rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
class Triangle extends (0, _rectangleDefault.default) {
    constructor(a, x, y, vx, vy){
        super(x, y, a, a, vx, vy);
        this.type = "Triangle";
        this.x = x;
        this.y = y;
        this.a = a;
        this.vx = vx;
        this.vy = vy;
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        this.hits = 0;
        this.verticles = [
            {
                x: this.left,
                y: this.bottom
            },
            {
                x: this.right,
                y: this.bottom
            },
            {
                x: (this.left + this.right) / 2,
                y: this.top
            }
        ];
    }
    get left() {
        return this.x - this.a / 2;
    }
    get right() {
        return this.x + this.a / 2;
    }
    get top() {
        return this.y - Math.cos(Math.PI / 6) * this.a;
    }
    get bottom() {
        return this.y;
    }
}
exports.default = Triangle;

},{"./rectangle":"8admK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJbPn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _intersects = require("./intersects");
class CollisionComponent {
    constructor(){}
    intersects(rectA, rectB) {
        if (rectA.type === "Circle" && rectB.type === "Circle") return (0, _intersects.CircleAndCircle)(rectA, rectB);
        if (rectA.type === "Circle") return (0, _intersects.PolAndCircle)(rectB, rectA);
        if (rectB.type === "Circle") return (0, _intersects.PolAndCircle)(rectA, rectB);
        return (0, _intersects.PolAndPol)(rectA, rectB);
    }
}
exports.default = CollisionComponent;

},{"./intersects":"cNNmc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNNmc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleAndCircle", ()=>CircleAndCircle);
parcelHelpers.export(exports, "PolAndPol", ()=>PolAndPol);
parcelHelpers.export(exports, "PolAndCircle", ()=>PolAndCircle);
function DotProduct(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
}
const PolAndPol = (polygonA, polygonB)=>{
    const vA = [
        ...polygonA.verticles,
        polygonA.verticles[0]
    ];
    const vB = [
        ...polygonB.verticles,
        polygonB.verticles[0]
    ];
    const getNormal = (v1, v2)=>({
            x: v1.y - v2.y,
            y: -(v1.x - v2.x)
        });
    const getMinSeparation = (normal, vertices, referenceVertices)=>{
        return Math.min(...vertices.map((vertex)=>DotProduct(normal, {
                x: vertex.x - referenceVertices[0].x,
                y: vertex.y - referenceVertices[0].y
            })));
    };
    let separation = Number.NEGATIVE_INFINITY;
    // Check separation along polygonA edges
    for(let i = 0; i < vA.length - 1; i++){
        const normal = getNormal(vA[i], vA[i + 1]);
        const minSep = getMinSeparation(normal, vB, vA.slice(i, i + 2));
        separation = Math.max(separation, minSep);
    }
    // Check separation along polygonB edges
    for(let i = 0; i < vB.length - 1; i++){
        const normal = getNormal(vB[i], vB[i + 1]);
        const minSep = getMinSeparation(normal, vA, vB.slice(i, i + 2));
        separation = Math.max(separation, minSep);
    }
    return separation <= 0;
};
const PolAndCircle = (polygon, circle)=>{
    const vertices = [
        ...polygon.verticles,
        polygon.verticles[0]
    ];
    let separation = Number.NEGATIVE_INFINITY;
    const getNormal = (v1, v2)=>({
            x: v1.y - v2.y,
            y: -(v1.x - v2.x)
        });
    const getRotationMatrix = (normal)=>{
        const magnitude = Math.sqrt(normal.x ** 2 + normal.y ** 2);
        const cosA = DotProduct({
            x: 1,
            y: 0
        }, normal) / magnitude;
        const sinA = Math.sqrt(1 - cosA ** 2);
        return {
            cosA,
            sinA
        };
    };
    const projectVertex = (vertex, circle, rotation)=>{
        const { cosA, sinA } = rotation;
        const dx = vertex.x - circle.x;
        const dy = vertex.y - circle.y;
        return {
            x: dx * cosA + dy * sinA,
            y: -dx * sinA + dy * cosA
        };
    };
    const computeMinSeparation = (normal, rotation)=>{
        let minSep = Number.MAX_VALUE;
        for (const vertex of vertices.slice(0, -1)){
            const { x, y } = projectVertex(vertex, circle, rotation);
            const dist = x ** 2 - circle.r ** 2;
            minSep = Math.min(minSep, dist);
        }
        return minSep;
    };
    for(let i = 0; i < vertices.length - 1; i++){
        const normal = getNormal(vertices[i], vertices[i + 1]);
        const rotation = getRotationMatrix(normal);
        const minSep = computeMinSeparation(normal, rotation);
        separation = Math.max(separation, minSep);
    }
    return separation <= 0;
};
const CircleAndCircle = (circleA, circleB)=>{
    const dx = circleB.x - circleA.x;
    const dy = circleB.y - circleA.y;
    const distanceSquared = dx ** 2 + dy ** 2;
    const radiusSum = circleA.r + circleB.r;
    const radiusSumSquared = radiusSum ** 2;
    return distanceSquared <= radiusSumSquared;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYhD6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ShapeRenderComp {
    constructor(){}
    changeColor(shape, format = "rgb") {
        if (!shape || !shape.color) {
            console.error("Invalid shape object.");
            return;
        }
        const randomColorComponent = ()=>Math.floor(Math.random() * 256);
        if (format === "rgb") shape.color = `rgb(${randomColorComponent()},${randomColorComponent()},${randomColorComponent()})`;
        else if (format === "hex") {
            const r = randomColorComponent().toString(16).padStart(2, "0");
            const g = randomColorComponent().toString(16).padStart(2, "0");
            const b = randomColorComponent().toString(16).padStart(2, "0");
            shape.color = `#${r}${g}${b}`;
        } else console.error("Unsupported color format.");
    }
    drawHexagon(context, shape) {
        const a = 2 * Math.PI / 6;
        let tempVerticles = [];
        context.beginPath();
        for(let i = 0; i < 6; i++){
            const x = shape.x + shape.r * Math.cos(-a * i);
            const y = shape.y + shape.r * Math.sin(-a * i);
            tempVerticles.push({
                x,
                y
            });
            context.lineTo(x, y);
        }
        context.closePath();
        context.fillStyle = shape.color;
        context.fill();
        shape.verticles = tempVerticles;
    }
    drawCircle(context, shape) {
        context.beginPath();
        context.arc(shape.x, shape.y, shape.w, 0, 2 * Math.PI, false);
        context.fillStyle = shape.color;
        context.fill();
    }
    drawTriangle(context, shape) {
        shape.verticles = [
            {
                x: shape.left,
                y: shape.bottom
            },
            {
                x: shape.right,
                y: shape.bottom
            },
            {
                x: (shape.left + shape.right) / 2,
                y: shape.top
            }
        ];
        context.beginPath();
        context.moveTo(shape.left, shape.bottom);
        context.lineTo(shape.right, shape.bottom);
        context.lineTo((shape.left + shape.right) / 2, shape.top);
        context.closePath();
        context.fillStyle = shape.color;
        context.fill();
    }
    drawRect(context, shape) {
        if (shape.hits >= 3) return;
        switch(shape.type){
            case "Hexagon":
                this.drawHexagon(context, shape);
                break;
            case "Circle":
                this.drawCircle(context, shape);
                break;
            default:
                this.drawTriangle(context, shape);
                break;
        }
    }
}
exports.default = ShapeRenderComp;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4rkIz","8lqZg"], "8lqZg", "parcelRequire20db")

//# sourceMappingURL=index.975ef6c8.js.map
