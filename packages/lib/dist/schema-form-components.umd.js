/** @license @lljj/schema-form-components (c) 2020-2021 Jino License: MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.schemaFormComponents = {}));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /*!
   * Vue.js v2.6.12
   * (c) 2014-2020 Evan You
   * Released under the MIT License.
   */
  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: process.env.NODE_ENV !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: process.env.NODE_ENV !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  if (process.env.NODE_ENV !== 'production') {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (process.env.NODE_ENV !== 'production' && customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (process.env.NODE_ENV !== 'production' &&
      (isUndef(target) || isPrimitive(target))
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== 'production' && warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (process.env.NODE_ENV !== 'production' &&
      (isUndef(target) || isPrimitive(target))
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== 'production' && warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  if (process.env.NODE_ENV !== 'production') {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        process.env.NODE_ENV !== 'production' && warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    if (process.env.NODE_ENV !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && process.env.NODE_ENV !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else if (process.env.NODE_ENV !== 'production') {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else if (process.env.NODE_ENV !== 'production') {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else if (process.env.NODE_ENV !== 'production') {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    if (process.env.NODE_ENV !== 'production') {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    if (
      process.env.NODE_ENV !== 'production' &&
      // skip validation for weex recycle-list child component props
      !(false)
    ) {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (process.env.NODE_ENV !== 'production' && isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  if (process.env.NODE_ENV !== 'production') {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals. ' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  var mark;
  var measure;

  if (process.env.NODE_ENV !== 'production') {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        process.env.NODE_ENV !== 'production' && warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        if (process.env.NODE_ENV !== 'production') {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production') {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        } else {
          defineReactive$$1(vm, key, result[key]);
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else if (process.env.NODE_ENV !== 'production') {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        process.env.NODE_ENV !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        process.env.NODE_ENV !== 'production' && warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (process.env.NODE_ENV !== 'production' && key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (process.env.NODE_ENV !== 'production') {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      if (process.env.NODE_ENV !== 'production') {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (process.env.NODE_ENV !== 'production' &&
      isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (process.env.NODE_ENV !== 'production' && isDef(data) && isDef(data.nativeOn)) {
          warn(
            ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
            context
          );
        }
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    } else {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        process.env.NODE_ENV !== 'production' && warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  process.env.NODE_ENV !== 'production'
                    ? ("timeout (" + (res.timeout) + "ms)")
                    : null
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      if (process.env.NODE_ENV !== 'production') {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      if (process.env.NODE_ENV !== 'production') {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    if (process.env.NODE_ENV !== 'production') {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    if (process.env.NODE_ENV !== 'production') {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    if (process.env.NODE_ENV !== 'production') {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (process.env.NODE_ENV !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (process.env.NODE_ENV !== 'production' && !config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = process.env.NODE_ENV !== 'production'
      ? expOrFn.toString()
      : '';
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        process.env.NODE_ENV !== 'production' && warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      } else {
        defineReactive$$1(props, key, value);
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      if (process.env.NODE_ENV !== 'production') {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        process.env.NODE_ENV !== 'production' && warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (process.env.NODE_ENV !== 'production' && getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else if (process.env.NODE_ENV !== 'production') {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (process.env.NODE_ENV !== 'production' &&
        sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      if (process.env.NODE_ENV !== 'production') {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    if (process.env.NODE_ENV !== 'production') {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        initProxy(vm);
      } else {
        vm._renderProxy = vm;
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (process.env.NODE_ENV !== 'production' &&
      !(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (process.env.NODE_ENV !== 'production' && name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    if (process.env.NODE_ENV !== 'production') {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.12';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        process.env.NODE_ENV !== 'production' && warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        if (process.env.NODE_ENV !== 'production') {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (process.env.NODE_ENV !== 'production' && data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          if (process.env.NODE_ENV !== 'production') {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      if (process.env.NODE_ENV !== 'production') {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (process.env.NODE_ENV !== 'production' &&
                  typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (process.env.NODE_ENV !== 'production' &&
                  typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else if (process.env.NODE_ENV !== 'production') {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  /*  */

  /*  */

  /*  */

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (process.env.NODE_ENV !== 'production' && children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (process.env.NODE_ENV !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else if (process.env.NODE_ENV !== 'production') {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else if (
          process.env.NODE_ENV !== 'production' &&
          process.env.NODE_ENV !== 'test'
        ) {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /** @license @lljj/vue-json-schema-form (c) 2020-2021 Liu.Jun License: Apache-2.0 */
  function r(e){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return (a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);}return e}).apply(this,arguments)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a);}return t}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r));}));}return e}function s(e,r){if(null==e)return {};var t,a,o=function(e,r){if(null==e)return {};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t]);}return o}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],a=!0,o=!1,i=void 0;try{for(var s,n=e[Symbol.iterator]();!(a=(s=n.next()).done)&&(t.push(s.value),!r||t.length!==r);a=!0);}catch(e){o=!0,i=e;}finally{try{a||null==n.return||n.return();}finally{if(o)throw i}}return t}(e,r)||c(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return "Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function d(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,r||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===r?String:Number)(e)}(e,"string");return "symbol"==typeof r?r:String(r)}function p$1(e){return "[object Object]"===Object.prototype.toString.call(e)}function h(e){return "[object Arguments]"===Object.prototype.toString.call(e)}function m(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=Object.assign({},e);return Object.keys(r).reduce((function(a,o){var i=e?e[o]:{},s=r[o];return e&&e.hasOwnProperty(o)&&p$1(s)?a[o]=m(i,s,t):t&&Array.isArray(i)&&Array.isArray(s)?a[o]=i.concat(s):a[o]=s,a}),a)}function f(e){var t,a=e.type;return !a&&e.const?(t=e.const,Array.isArray(t)?"array":"string"==typeof t?"string":null==t?"null":"boolean"==typeof t?"boolean":isNaN(t)?"object"===r(t)?"object":"string":"number"):!a&&e.enum?"string":!a&&e.items?"array":a||!e.properties&&!e.additionalProperties?a instanceof Array&&2===a.length&&a.includes("null")?a.find((function(e){return "null"!==e})):a:"object"}function v(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(e===t)return !0;if("function"==typeof e||"function"==typeof t)return !0;if("object"!==r(e)||"object"!==r(t))return !1;if(null===e||null===t)return !1;if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp&&t instanceof RegExp)return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(h(e)||h(t)){if(!h(e)||!h(t))return !1;var i=Array.prototype.slice;return v(i.call(e),i.call(t),a,o)}if(e.constructor!==t.constructor)return !1;var s=Object.keys(e),n=Object.keys(t);if(0===s.length&&0===n.length)return !0;if(s.length!==n.length)return !1;for(var l,c=a.length;c--;)if(a[c]===e)return o[c]===t;a.push(e),o.push(t),s.sort(),n.sort();for(var u=s.length-1;u>=0;u--)if(s[u]!==n[u])return !1;for(var d=s.length-1;d>=0;d--)if(!v(e[l=s[d]],t[l],a,o))return !1;return a.pop(),o.pop(),!0}var y,g,b=(y="".concat(+new Date),g=0,function(){var e="".concat(+new Date);return e===y?g+=1:g=0,"".concat(y=e,"x").concat(g)});function P(e,r){return Object.entries(e).reduce((function(e,t){var a=n(t,2),o=a[0],i=a[1],s=r(o,i);return void 0!==s&&(e[s]=i),e}),{})}function w(e){return void 0===e?e:String(e).replace(/^./,(function(e){return e.toLocaleLowerCase()}))}function E(e,r){return e*r/function e(r,t){return 0===t?r:e(t,r%t)}(e,r)}function S(e,r){for(var t=r.split("/"),a=0;a<t.length;a+=1){if(void 0===e)return;e=""===t[a]?e:e[t[a]];}return e}function x(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e;if(!e.startsWith("#"))throw new Error("Could not find a definition for ".concat(t,"."));var a=S(r,e=decodeURIComponent(e.substring(1)));if(void 0===a)throw new Error("Could not find a definition for ".concat(t,"."));return a.hasOwnProperty("$ref")?x(a.$ref,r):a}function F(e,r){return e(r={exports:{}},r.exports),r.exports}function O(e){return e&&e.default||e}var _,D=F((function(e,r){
  /** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
  !function(e){function r(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length>1){r[0]=r[0].slice(0,-1);for(var a=r.length-1,o=1;o<a;++o)r[o]=r[o].slice(1,-1);return r[a]=r[a].slice(1),r.join("")}return r[0]}function t(e){return "(?:"+e+")"}function a(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function o(e){return e.toUpperCase()}function i(e){var a=r("[0-9]","[A-Fa-f]"),o=t(t("%[EFef]"+a+"%"+a+a+"%"+a+a)+"|"+t("%[89A-Fa-f]"+a+"%"+a+a)+"|"+t("%"+a+a)),i="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",s=r("[\\:\\/\\?\\#\\[\\]\\@]",i),n=e?"[\\uE000-\\uF8FF]":"[]",l=r("[A-Za-z]","[0-9]","[\\-\\.\\_\\~]",e?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]");t("[A-Za-z]"+r("[A-Za-z]","[0-9]","[\\+\\-\\.]")+"*"),t(t(o+"|"+r(l,i,"[\\:]"))+"*");var c=t(t("25[0-5]")+"|"+t("2[0-4][0-9]")+"|"+t("1[0-9][0-9]")+"|"+t("0?[1-9][0-9]")+"|0?0?[0-9]"),u=t(c+"\\."+c+"\\."+c+"\\."+c),d=t(a+"{1,4}"),p=t(t(d+"\\:"+d)+"|"+u),h=t(t(d+"\\:")+"{6}"+p),m=t("\\:\\:"+t(d+"\\:")+"{5}"+p),f=t(t(d)+"?\\:\\:"+t(d+"\\:")+"{4}"+p),v=t(t(t(d+"\\:")+"{0,1}"+d)+"?\\:\\:"+t(d+"\\:")+"{3}"+p),y=t(t(t(d+"\\:")+"{0,2}"+d)+"?\\:\\:"+t(d+"\\:")+"{2}"+p),g=t(t(t(d+"\\:")+"{0,3}"+d)+"?\\:\\:"+d+"\\:"+p),b=t(t(t(d+"\\:")+"{0,4}"+d)+"?\\:\\:"+p),P=t(t(t(d+"\\:")+"{0,5}"+d)+"?\\:\\:"+d),w=t(t(t(d+"\\:")+"{0,6}"+d)+"?\\:\\:"),E=t([h,m,f,v,y,g,b,P,w].join("|")),S=t(t(l+"|"+o)+"+");t("[vV]"+a+"+\\."+r(l,i,"[\\:]")+"+"),t(t(o+"|"+r(l,i))+"*");var x=t(o+"|"+r(l,i,"[\\:\\@]"));return t(t(o+"|"+r(l,i,"[\\@]"))+"+"),t(t(x+"|"+r("[\\/\\?]",n))+"*"),{NOT_SCHEME:new RegExp(r("[^]","[A-Za-z]","[0-9]","[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(r("[^\\%\\:]",l,i),"g"),NOT_HOST:new RegExp(r("[^\\%\\[\\]\\:]",l,i),"g"),NOT_PATH:new RegExp(r("[^\\%\\/\\:\\@]",l,i),"g"),NOT_PATH_NOSCHEME:new RegExp(r("[^\\%\\/\\@]",l,i),"g"),NOT_QUERY:new RegExp(r("[^\\%]",l,i,"[\\:\\@\\/\\?]",n),"g"),NOT_FRAGMENT:new RegExp(r("[^\\%]",l,i,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(r("[^]",l,i),"g"),UNRESERVED:new RegExp(l,"g"),OTHER_CHARS:new RegExp(r("[^\\%]",l,s),"g"),PCT_ENCODED:new RegExp(o,"g"),IPV4ADDRESS:new RegExp("^("+u+")$"),IPV6ADDRESS:new RegExp("^\\[?("+E+")"+t(t("\\%25|\\%(?!"+a+"{2})")+"("+S+")")+"?\\]?$")}}var s=i(!1),n=i(!0),l=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],a=!0,o=!1,i=void 0;try{for(var s,n=e[Symbol.iterator]();!(a=(s=n.next()).done)&&(t.push(s.value),!r||t.length!==r);a=!0);}catch(e){o=!0,i=e;}finally{try{!a&&n.return&&n.return();}finally{if(o)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},c=2147483647,u=/^xn--/,d=/[^\0-\x7E]/,p=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,f=String.fromCharCode;function v(e){throw new RangeError(h[e])}function y(e,r){var t=e.split("@"),a="";t.length>1&&(a=t[0]+"@",e=t[1]);var o=function(e,r){for(var t=[],a=e.length;a--;)t[a]=r(e[a]);return t}((e=e.replace(p,".")).split("."),r).join(".");return a+o}function g(e){for(var r=[],t=0,a=e.length;t<a;){var o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<a){var i=e.charCodeAt(t++);56320==(64512&i)?r.push(((1023&o)<<10)+(1023&i)+65536):(r.push(o),t--);}else r.push(o);}return r}var b=function(e,r){return e+22+75*(e<26)-((0!=r)<<5)},P=function(e,r,t){var a=0;for(e=t?m(e/700):e>>1,e+=m(e/r);e>455;a+=36)e=m(e/35);return m(a+36*e/(e+38))},w=function(e){var r,t=[],a=e.length,o=0,i=128,s=72,n=e.lastIndexOf("-");n<0&&(n=0);for(var l=0;l<n;++l)e.charCodeAt(l)>=128&&v("not-basic"),t.push(e.charCodeAt(l));for(var u=n>0?n+1:0;u<a;){for(var d=o,p=1,h=36;;h+=36){u>=a&&v("invalid-input");var f=(r=e.charCodeAt(u++))-48<10?r-22:r-65<26?r-65:r-97<26?r-97:36;(f>=36||f>m((c-o)/p))&&v("overflow"),o+=f*p;var y=h<=s?1:h>=s+26?26:h-s;if(f<y)break;var g=36-y;p>m(c/g)&&v("overflow"),p*=g;}var b=t.length+1;s=P(o-d,b,0==d),m(o/b)>c-i&&v("overflow"),i+=m(o/b),o%=b,t.splice(o++,0,i);}return String.fromCodePoint.apply(String,t)},E=function(e){var r=[],t=(e=g(e)).length,a=128,o=0,i=72,s=!0,n=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var p=u.value;p<128&&r.push(f(p));}}catch(e){n=!0,l=e;}finally{try{!s&&d.return&&d.return();}finally{if(n)throw l}}var h=r.length,y=h;for(h&&r.push("-");y<t;){var w=c,E=!0,S=!1,x=void 0;try{for(var F,O=e[Symbol.iterator]();!(E=(F=O.next()).done);E=!0){var _=F.value;_>=a&&_<w&&(w=_);}}catch(e){S=!0,x=e;}finally{try{!E&&O.return&&O.return();}finally{if(S)throw x}}var D=y+1;w-a>m((c-o)/D)&&v("overflow"),o+=(w-a)*D,a=w;var $=!0,j=!1,k=void 0;try{for(var A,I=e[Symbol.iterator]();!($=(A=I.next()).done);$=!0){var R=A.value;if(R<a&&++o>c&&v("overflow"),R==a){for(var C=o,N=36;;N+=36){var L=N<=i?1:N>=i+26?26:N-i;if(C<L)break;var T=C-L,z=36-L;r.push(f(b(L+T%z,0))),C=m(T/z);}r.push(f(b(C,0))),i=P(o,D,y==h),o=0,++y;}}}catch(e){j=!0,k=e;}finally{try{!$&&I.return&&I.return();}finally{if(j)throw k}}++o,++a;}return r.join("")},S=function(e){return y(e,(function(e){return d.test(e)?"xn--"+E(e):e}))},x=function(e){return y(e,(function(e){return u.test(e)?w(e.slice(4).toLowerCase()):e}))},F={};function O(e){var r=e.charCodeAt(0);return r<16?"%0"+r.toString(16).toUpperCase():r<128?"%"+r.toString(16).toUpperCase():r<2048?"%"+(r>>6|192).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase():"%"+(r>>12|224).toString(16).toUpperCase()+"%"+(r>>6&63|128).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase()}function _(e){for(var r="",t=0,a=e.length;t<a;){var o=parseInt(e.substr(t+1,2),16);if(o<128)r+=String.fromCharCode(o),t+=3;else if(o>=194&&o<224){if(a-t>=6){var i=parseInt(e.substr(t+4,2),16);r+=String.fromCharCode((31&o)<<6|63&i);}else r+=e.substr(t,6);t+=6;}else if(o>=224){if(a-t>=9){var s=parseInt(e.substr(t+4,2),16),n=parseInt(e.substr(t+7,2),16);r+=String.fromCharCode((15&o)<<12|(63&s)<<6|63&n);}else r+=e.substr(t,9);t+=9;}else r+=e.substr(t,3),t+=3;}return r}function D(e,r){function t(e){var t=_(e);return t.match(r.UNRESERVED)?t:e}return e.scheme&&(e.scheme=String(e.scheme).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(r.PCT_ENCODED,t).replace(r.NOT_USERINFO,O).replace(r.PCT_ENCODED,o)),void 0!==e.host&&(e.host=String(e.host).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_HOST,O).replace(r.PCT_ENCODED,o)),void 0!==e.path&&(e.path=String(e.path).replace(r.PCT_ENCODED,t).replace(e.scheme?r.NOT_PATH:r.NOT_PATH_NOSCHEME,O).replace(r.PCT_ENCODED,o)),void 0!==e.query&&(e.query=String(e.query).replace(r.PCT_ENCODED,t).replace(r.NOT_QUERY,O).replace(r.PCT_ENCODED,o)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(r.PCT_ENCODED,t).replace(r.NOT_FRAGMENT,O).replace(r.PCT_ENCODED,o)),e}function $(e){return e.replace(/^0*(.*)/,"$1")||"0"}function j(e,r){var t=e.match(r.IPV4ADDRESS)||[],a=l(t,2)[1];return a?a.split(".").map($).join("."):e}function k(e,r){var t=e.match(r.IPV6ADDRESS)||[],a=l(t,3),o=a[1],i=a[2];if(o){for(var s=o.toLowerCase().split("::").reverse(),n=l(s,2),c=n[0],u=n[1],d=u?u.split(":").map($):[],p=c.split(":").map($),h=r.IPV4ADDRESS.test(p[p.length-1]),m=h?7:8,f=p.length-m,v=Array(m),y=0;y<m;++y)v[y]=d[y]||p[f+y]||"";h&&(v[m-1]=j(v[m-1],r));var g=v.reduce((function(e,r,t){if(!r||"0"===r){var a=e[e.length-1];a&&a.index+a.length===t?a.length++:e.push({index:t,length:1});}return e}),[]).sort((function(e,r){return r.length-e.length}))[0],b=void 0;if(g&&g.length>1){var P=v.slice(0,g.index),w=v.slice(g.index+g.length);b=P.join(":")+"::"+w.join(":");}else b=v.join(":");return i&&(b+="%"+i),b}return e}var A=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,I=void 0==="".match(/(){0}/)[1];function R(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={},a=!1!==r.iri?n:s;"suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e);var o=e.match(A);if(o){I?(t.scheme=o[1],t.userinfo=o[3],t.host=o[4],t.port=parseInt(o[5],10),t.path=o[6]||"",t.query=o[7],t.fragment=o[8],isNaN(t.port)&&(t.port=o[5])):(t.scheme=o[1]||void 0,t.userinfo=-1!==e.indexOf("@")?o[3]:void 0,t.host=-1!==e.indexOf("//")?o[4]:void 0,t.port=parseInt(o[5],10),t.path=o[6]||"",t.query=-1!==e.indexOf("?")?o[7]:void 0,t.fragment=-1!==e.indexOf("#")?o[8]:void 0,isNaN(t.port)&&(t.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?o[4]:void 0)),t.host&&(t.host=k(j(t.host,a),a)),void 0!==t.scheme||void 0!==t.userinfo||void 0!==t.host||void 0!==t.port||t.path||void 0!==t.query?void 0===t.scheme?t.reference="relative":void 0===t.fragment?t.reference="absolute":t.reference="uri":t.reference="same-document",r.reference&&"suffix"!==r.reference&&r.reference!==t.reference&&(t.error=t.error||"URI is not a "+r.reference+" reference.");var i=F[(r.scheme||t.scheme||"").toLowerCase()];if(r.unicodeSupport||i&&i.unicodeSupport)D(t,a);else {if(t.host&&(r.domainHost||i&&i.domainHost))try{t.host=S(t.host.replace(a.PCT_ENCODED,_).toLowerCase());}catch(e){t.error=t.error||"Host's domain name can not be converted to ASCII via punycode: "+e;}D(t,s);}i&&i.parse&&i.parse(t,r);}else t.error=t.error||"URI can not be parsed.";return t}function C(e,r){var t=!1!==r.iri?n:s,a=[];return void 0!==e.userinfo&&(a.push(e.userinfo),a.push("@")),void 0!==e.host&&a.push(k(j(String(e.host),t),t).replace(t.IPV6ADDRESS,(function(e,r,t){return "["+r+(t?"%25"+t:"")+"]"}))),"number"!=typeof e.port&&"string"!=typeof e.port||(a.push(":"),a.push(String(e.port))),a.length?a.join(""):void 0}var N=/^\.\.?\//,L=/^\/\.(\/|$)/,T=/^\/\.\.(\/|$)/,z=/^\/?(?:.|\n)*?(?=\/|$)/;function q(e){for(var r=[];e.length;)if(e.match(N))e=e.replace(N,"");else if(e.match(L))e=e.replace(L,"/");else if(e.match(T))e=e.replace(T,"/"),r.pop();else if("."===e||".."===e)e="";else {var t=e.match(z);if(!t)throw new Error("Unexpected dot segment condition");var a=t[0];e=e.slice(a.length),r.push(a);}return r.join("")}function V(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.iri?n:s,a=[],o=F[(r.scheme||e.scheme||"").toLowerCase()];if(o&&o.serialize&&o.serialize(e,r),e.host)if(t.IPV6ADDRESS.test(e.host));else if(r.domainHost||o&&o.domainHost)try{e.host=r.iri?x(e.host):S(e.host.replace(t.PCT_ENCODED,_).toLowerCase());}catch(t){e.error=e.error||"Host's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+t;}D(e,t),"suffix"!==r.reference&&e.scheme&&(a.push(e.scheme),a.push(":"));var i=C(e,r);if(void 0!==i&&("suffix"!==r.reference&&a.push("//"),a.push(i),e.path&&"/"!==e.path.charAt(0)&&a.push("/")),void 0!==e.path){var l=e.path;r.absolutePath||o&&o.absolutePath||(l=q(l)),void 0===i&&(l=l.replace(/^\/\//,"/%2F")),a.push(l);}return void 0!==e.query&&(a.push("?"),a.push(e.query)),void 0!==e.fragment&&(a.push("#"),a.push(e.fragment)),a.join("")}function M(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments[3],o={};return a||(e=R(V(e,t),t),r=R(V(r,t),t)),!(t=t||{}).tolerant&&r.scheme?(o.scheme=r.scheme,o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=q(r.path||""),o.query=r.query):(void 0!==r.userinfo||void 0!==r.host||void 0!==r.port?(o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=q(r.path||""),o.query=r.query):(r.path?("/"===r.path.charAt(0)?o.path=q(r.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?o.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+r.path:o.path=r.path:o.path="/"+r.path,o.path=q(o.path)),o.query=r.query):(o.path=e.path,void 0!==r.query?o.query=r.query:o.query=e.query),o.userinfo=e.userinfo,o.host=e.host,o.port=e.port),o.scheme=e.scheme),o.fragment=r.fragment,o}function W(e,r){return e&&e.toString().replace(r&&r.iri?n.PCT_ENCODED:s.PCT_ENCODED,_)}var Q={scheme:"http",domainHost:!0,parse:function(e,r){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,r){var t="https"===String(e.scheme).toLowerCase();return e.port!==(t?443:80)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}},U={scheme:"https",domainHost:Q.domainHost,parse:Q.parse,serialize:Q.serialize};function B(e){return "boolean"==typeof e.secure?e.secure:"wss"===String(e.scheme).toLowerCase()}var H={scheme:"ws",domainHost:!0,parse:function(e,r){var t=e;return t.secure=B(t),t.resourceName=(t.path||"/")+(t.query?"?"+t.query:""),t.path=void 0,t.query=void 0,t},serialize:function(e,r){if(e.port!==(B(e)?443:80)&&""!==e.port||(e.port=void 0),"boolean"==typeof e.secure&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){var t=e.resourceName.split("?"),a=l(t,2),o=a[0],i=a[1];e.path=o&&"/"!==o?o:void 0,e.query=i,e.resourceName=void 0;}return e.fragment=void 0,e}},K={scheme:"wss",domainHost:H.domainHost,parse:H.parse,serialize:H.serialize},G={},J="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",Z="[0-9A-Fa-f]",X=t(t("%[EFef]"+Z+"%"+Z+Z+"%"+Z+Z)+"|"+t("%[89A-Fa-f]"+Z+"%"+Z+Z)+"|"+t("%"+Z+Z)),Y=r("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",'[\\"\\\\]'),ee=new RegExp(J,"g"),re=new RegExp(X,"g"),te=new RegExp(r("[^]","[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]","[\\.]",'[\\"]',Y),"g"),ae=new RegExp(r("[^]",J,"[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"),"g"),oe=ae;function ie(e){var r=_(e);return r.match(ee)?r:e}var se={scheme:"mailto",parse:function(e,r){var t=e,a=t.to=t.path?t.path.split(","):[];if(t.path=void 0,t.query){for(var o=!1,i={},s=t.query.split("&"),n=0,l=s.length;n<l;++n){var c=s[n].split("=");switch(c[0]){case"to":for(var u=c[1].split(","),d=0,p=u.length;d<p;++d)a.push(u[d]);break;case"subject":t.subject=W(c[1],r);break;case"body":t.body=W(c[1],r);break;default:o=!0,i[W(c[0],r)]=W(c[1],r);}}o&&(t.headers=i);}t.query=void 0;for(var h=0,m=a.length;h<m;++h){var f=a[h].split("@");if(f[0]=W(f[0]),r.unicodeSupport)f[1]=W(f[1],r).toLowerCase();else try{f[1]=S(W(f[1],r).toLowerCase());}catch(e){t.error=t.error||"Email address's domain name can not be converted to ASCII via punycode: "+e;}a[h]=f.join("@");}return t},serialize:function(e,r){var t,a=e,i=null!=(t=e.to)?t instanceof Array?t:"number"!=typeof t.length||t.split||t.setInterval||t.call?[t]:Array.prototype.slice.call(t):[];if(i){for(var s=0,n=i.length;s<n;++s){var l=String(i[s]),c=l.lastIndexOf("@"),u=l.slice(0,c).replace(re,ie).replace(re,o).replace(te,O),d=l.slice(c+1);try{d=r.iri?x(d):S(W(d,r).toLowerCase());}catch(e){a.error=a.error||"Email address's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+e;}i[s]=u+"@"+d;}a.path=i.join(",");}var p=e.headers=e.headers||{};e.subject&&(p.subject=e.subject),e.body&&(p.body=e.body);var h=[];for(var m in p)p[m]!==G[m]&&h.push(m.replace(re,ie).replace(re,o).replace(ae,O)+"="+p[m].replace(re,ie).replace(re,o).replace(oe,O));return h.length&&(a.query=h.join("&")),a}},ne=/^([^\:]+)\:(.*)/,le={scheme:"urn",parse:function(e,r){var t=e.path&&e.path.match(ne),a=e;if(t){var o=r.scheme||a.scheme||"urn",i=t[1].toLowerCase(),s=t[2],n=o+":"+(r.nid||i),l=F[n];a.nid=i,a.nss=s,a.path=void 0,l&&(a=l.parse(a,r));}else a.error=a.error||"URN can not be parsed.";return a},serialize:function(e,r){var t=r.scheme||e.scheme||"urn",a=e.nid,o=t+":"+(r.nid||a),i=F[o];i&&(e=i.serialize(e,r));var s=e,n=e.nss;return s.path=(a||r.nid)+":"+n,s}},ce=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,ue={scheme:"urn:uuid",parse:function(e,r){var t=e;return t.uuid=t.nss,t.nss=void 0,r.tolerant||t.uuid&&t.uuid.match(ce)||(t.error=t.error||"UUID is not valid."),t},serialize:function(e,r){var t=e;return t.nss=(e.uuid||"").toLowerCase(),t}};F[Q.scheme]=Q,F[U.scheme]=U,F[H.scheme]=H,F[K.scheme]=K,F[se.scheme]=se,F[le.scheme]=le,F[ue.scheme]=ue,e.SCHEMES=F,e.pctEncChar=O,e.pctDecChars=_,e.parse=R,e.removeDotSegments=q,e.serialize=V,e.resolveComponents=M,e.resolve=function(e,r,t){var a=function(e,r){var t=e;if(r)for(var a in r)t[a]=r[a];return t}({scheme:"null"},t);return V(M(R(e,a),R(r,a),a,!0),a)},e.normalize=function(e,r){return "string"==typeof e?e=V(R(e,r),r):"object"===a(e)&&(e=R(V(e,r),r)),e},e.equal=function(e,r,t){return "string"==typeof e?e=V(R(e,t),t):"object"===a(e)&&(e=V(e,t)),"string"==typeof r?r=V(R(r,t),t):"object"===a(r)&&(r=V(r,t)),e===r},e.escapeComponent=function(e,r){return e&&e.toString().replace(r&&r.iri?n.ESCAPE:s.ESCAPE,O)},e.unescapeComponent=W,Object.defineProperty(e,"__esModule",{value:!0});}(r);}));(_=D)&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")&&_.default;var $=function e(r,t){if(r===t)return !0;if(r&&t&&"object"==typeof r&&"object"==typeof t){if(r.constructor!==t.constructor)return !1;var a,o,i;if(Array.isArray(r)){if((a=r.length)!=t.length)return !1;for(o=a;0!=o--;)if(!e(r[o],t[o]))return !1;return !0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if((a=(i=Object.keys(r)).length)!==Object.keys(t).length)return !1;for(o=a;0!=o--;)if(!Object.prototype.hasOwnProperty.call(t,i[o]))return !1;for(o=a;0!=o--;){var s=i[o];if(!e(r[s],t[s]))return !1}return !0}return r!=r&&t!=t},j={copy:function(e,r){for(var t in r=r||{},e)r[t]=e[t];return r},checkDataType:k,checkDataTypes:function(e,r,t){switch(e.length){case 1:return k(e[0],r,t,!0);default:var a="",o=I(e);for(var i in o.array&&o.object&&(a=o.null?"(":"(!"+r+" || ",a+="typeof "+r+' !== "object")',delete o.null,delete o.array,delete o.object),o.number&&delete o.integer,o)a+=(a?" && ":"")+k(i,r,t,!0);return a}},coerceToTypes:function(e,r){if(Array.isArray(r)){for(var t=[],a=0;a<r.length;a++){var o=r[a];(A[o]||"array"===e&&"array"===o)&&(t[t.length]=o);}if(t.length)return t}else {if(A[r])return [r];if("array"===e&&"array"===r)return ["array"]}},toHash:I,getProperty:N,escapeQuotes:L,equal:$,ucs2length:function(e){for(var r,t=0,a=e.length,o=0;o<a;)t++,(r=e.charCodeAt(o++))>=55296&&r<=56319&&o<a&&56320==(64512&(r=e.charCodeAt(o)))&&o++;return t},varOccurences:function(e,r){r+="[^0-9]";var t=e.match(new RegExp(r,"g"));return t?t.length:0},varReplace:function(e,r,t){return r+="([^0-9])",t=t.replace(/\$/g,"$$$$"),e.replace(new RegExp(r,"g"),t+"$1")},schemaHasRules:function(e,r){if("boolean"==typeof e)return !e;for(var t in e)if(r[t])return !0},schemaHasRulesExcept:function(e,r,t){if("boolean"==typeof e)return !e&&"not"!=t;for(var a in e)if(a!=t&&r[a])return !0},schemaUnknownRules:function(e,r){if("boolean"==typeof e)return;for(var t in e)if(!r[t])return t},toQuotedString:T,getPathExpr:function(e,r,t,a){return V(e,t?"'/' + "+r+(a?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):a?"'[' + "+r+" + ']'":"'[\\'' + "+r+" + '\\']'")},getPath:function(e,r,t){var a=T(t?"/"+M(r):N(r));return V(e,a)},getData:function(e,r,t){var a,o,i,s;if(""===e)return "rootData";if("/"==e[0]){if(!z.test(e))throw new Error("Invalid JSON-pointer: "+e);o=e,i="rootData";}else {if(!(s=e.match(q)))throw new Error("Invalid JSON-pointer: "+e);if(a=+s[1],"#"==(o=s[2])){if(a>=r)throw new Error("Cannot access property/index "+a+" levels up, current level is "+r);return t[r-a]}if(a>r)throw new Error("Cannot access data "+a+" levels up, current level is "+r);if(i="data"+(r-a||""),!o)return i}for(var n=i,l=o.split("/"),c=0;c<l.length;c++){var u=l[c];u&&(i+=N(W(u)),n+=" && "+i);}return n},unescapeFragment:function(e){return W(decodeURIComponent(e))},unescapeJsonPointer:W,escapeFragment:function(e){return encodeURIComponent(M(e))},escapeJsonPointer:M};function k(e,r,t,a){var o=a?" !== ":" === ",i=a?" || ":" && ",s=a?"!":"",n=a?"":"!";switch(e){case"null":return r+o+"null";case"array":return s+"Array.isArray("+r+")";case"object":return "("+s+r+i+"typeof "+r+o+'"object"'+i+n+"Array.isArray("+r+"))";case"integer":return "(typeof "+r+o+'"number"'+i+n+"("+r+" % 1)"+i+r+o+r+(t?i+s+"isFinite("+r+")":"")+")";case"number":return "(typeof "+r+o+'"'+e+'"'+(t?i+s+"isFinite("+r+")":"")+")";default:return "typeof "+r+o+'"'+e+'"'}}var A=I(["string","number","integer","boolean","null"]);function I(e){for(var r={},t=0;t<e.length;t++)r[e[t]]=!0;return r}var R=/^[a-z$_][a-z$_0-9]*$/i,C=/'|\\/g;function N(e){return "number"==typeof e?"["+e+"]":R.test(e)?"."+e:"['"+L(e)+"']"}function L(e){return e.replace(C,"\\$&").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\f/g,"\\f").replace(/\t/g,"\\t")}function T(e){return "'"+L(e)+"'"}var z=/^\/(?:[^~]|~0|~1)*$/,q=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function V(e,r){return '""'==e?r:(e+" + "+r).replace(/([^\\])' \+ '/g,"$1")}function M(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function W(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}var Q=function(e){j.copy(e,this);};var U=F((function(e){var r=e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={}),function e(t,a,o,i,s,n,l,c,u,d){if(i&&"object"==typeof i&&!Array.isArray(i)){for(var p in a(i,s,n,l,c,u,d),i){var h=i[p];if(Array.isArray(h)){if(p in r.arrayKeywords)for(var m=0;m<h.length;m++)e(t,a,o,h[m],s+"/"+p+"/"+m,n,s,p,i,m);}else if(p in r.propsKeywords){if(h&&"object"==typeof h)for(var f in h)e(t,a,o,h[f],s+"/"+p+"/"+f.replace(/~/g,"~0").replace(/\//g,"~1"),n,s,p,i,f);}else (p in r.keywords||t.allKeys&&!(p in r.skipKeywords))&&e(t,a,o,h,s+"/"+p,n,s,p,i);}o(i,s,n,l,c,u,d);}}(t,"function"==typeof(a=t.cb||a)?a:a.pre||function(){},a.post||function(){},e,"",e);};r.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0},r.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},r.propsKeywords={definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},r.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};})),B=H;function H(e,r,t){var a=this._refs[t];if("string"==typeof a){if(!this._refs[a])return H.call(this,e,r,a);a=this._refs[a];}if((a=a||this._schemas[t])instanceof Q)return Y(a.schema,this._opts.inlineRefs)?a.schema:a.validate||this._compile(a);var o,i,s,n=K.call(this,r,t);return n&&(o=n.schema,r=n.root,s=n.baseId),o instanceof Q?i=o.validate||e.call(this,o.schema,r,void 0,s):void 0!==o&&(i=Y(o,this._opts.inlineRefs)?o:e.call(this,o,r,void 0,s)),i}function K(e,r){var t=D.parse(r),a=re(t),o=ee(this._getId(e.schema));if(0===Object.keys(e.schema).length||a!==o){var i=ae(a),s=this._refs[i];if("string"==typeof s)return G.call(this,e,s,t);if(s instanceof Q)s.validate||this._compile(s),e=s;else {if(!((s=this._schemas[i])instanceof Q))return;if(s.validate||this._compile(s),i==ae(r))return {schema:s,root:e,baseId:o};e=s;}if(!e.schema)return;o=ee(this._getId(e.schema));}return Z.call(this,t,o,e.schema,e)}function G(e,r,t){var a=K.call(this,e,r);if(a){var o=a.schema,i=a.baseId;e=a.root;var s=this._getId(o);return s&&(i=oe(i,s)),Z.call(this,t,i,o,e)}}H.normalizeId=ae,H.fullPath=ee,H.url=oe,H.ids=function(e){var r=ae(this._getId(e)),t={"":r},a={"":ee(r,!1)},o={},i=this;return U(e,{allKeys:!0},(function(e,r,s,n,l,c,u){if(""!==r){var d=i._getId(e),p=t[n],h=a[n]+"/"+l;if(void 0!==u&&(h+="/"+("number"==typeof u?u:j.escapeFragment(u))),"string"==typeof d){d=p=ae(p?D.resolve(p,d):d);var m=i._refs[d];if("string"==typeof m&&(m=i._refs[m]),m&&m.schema){if(!$(e,m.schema))throw new Error('id "'+d+'" resolves to more than one schema')}else if(d!=ae(h))if("#"==d[0]){if(o[d]&&!$(e,o[d]))throw new Error('id "'+d+'" resolves to more than one schema');o[d]=e;}else i._refs[d]=h;}t[r]=p,a[r]=h;}})),o},H.inlineRef=Y,H.schema=K;var J=j.toHash(["properties","patternProperties","enum","dependencies","definitions"]);function Z(e,r,t,a){if(e.fragment=e.fragment||"","/"==e.fragment.slice(0,1)){for(var o=e.fragment.split("/"),i=1;i<o.length;i++){var s=o[i];if(s){if(void 0===(t=t[s=j.unescapeFragment(s)]))break;var n;if(!J[s]&&((n=this._getId(t))&&(r=oe(r,n)),t.$ref)){var l=oe(r,t.$ref),c=K.call(this,a,l);c&&(t=c.schema,a=c.root,r=c.baseId);}}}return void 0!==t&&t!==a.schema?{schema:t,root:a,baseId:r}:void 0}}var X=j.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]);function Y(e,r){return !1!==r&&(void 0===r||!0===r?function e(r){var t;if(Array.isArray(r)){for(var a=0;a<r.length;a++)if("object"==typeof(t=r[a])&&!e(t))return !1}else for(var o in r){if("$ref"==o)return !1;if("object"==typeof(t=r[o])&&!e(t))return !1}return !0}(e):r?function e(r){var t,a=0;if(Array.isArray(r)){for(var o=0;o<r.length;o++)if("object"==typeof(t=r[o])&&(a+=e(t)),a==1/0)return 1/0}else for(var i in r){if("$ref"==i)return 1/0;if(X[i])a++;else if("object"==typeof(t=r[i])&&(a+=e(t)+1),a==1/0)return 1/0}return a}(e)<=r:void 0)}function ee(e,r){return !1!==r&&(e=ae(e)),re(D.parse(e))}function re(e){return D.serialize(e).split("#")[0]+"#"}var te=/#\/?$/;function ae(e){return e?e.replace(te,""):""}function oe(e,r){return r=ae(r),D.resolve(e,r)}var ie={Validation:ne((function(e){this.message="validation failed",this.errors=e,this.ajv=this.validation=!0;})),MissingRef:ne(se)};function se(e,r,t){this.message=t||se.message(e,r),this.missingRef=B.url(e,r),this.missingSchema=B.normalizeId(B.fullPath(this.missingRef));}function ne(e){return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}se.message=function(e,r){return "can't resolve reference "+r+" from id "+e};var le=function(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var t,a="boolean"==typeof r.cycles&&r.cycles,o=r.cmp&&(t=r.cmp,function(e){return function(r,a){var o={key:r,value:e[r]},i={key:a,value:e[a]};return t(o,i)}}),i=[];return function e(r){if(r&&r.toJSON&&"function"==typeof r.toJSON&&(r=r.toJSON()),void 0!==r){if("number"==typeof r)return isFinite(r)?""+r:"null";if("object"!=typeof r)return JSON.stringify(r);var t,s;if(Array.isArray(r)){for(s="[",t=0;t<r.length;t++)t&&(s+=","),s+=e(r[t])||"null";return s+"]"}if(null===r)return "null";if(-1!==i.indexOf(r)){if(a)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var n=i.push(r)-1,l=Object.keys(r).sort(o&&o(r));for(s="",t=0;t<l.length;t++){var c=l[t],u=e(r[c]);u&&(s&&(s+=","),s+=JSON.stringify(c)+":"+u);}return i.splice(n,1),"{"+s+"}"}}(e)},ce=function(e,r,t){var a="",o=!0===e.schema.$async,i=e.util.schemaHasRulesExcept(e.schema,e.RULES.all,"$ref"),s=e.self._getId(e.schema);if(e.opts.strictKeywords){var n=e.util.schemaUnknownRules(e.schema,e.RULES.keywords);if(n){var l="unknown keyword: "+n;if("log"!==e.opts.strictKeywords)throw new Error(l);e.logger.warn(l);}}if(e.isTop&&(a+=" var validate = ",o&&(e.async=!0,a+="async "),a+="function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ",s&&(e.opts.sourceCode||e.opts.processCode)&&(a+=" /*# sourceURL="+s+" */ ")),"boolean"==typeof e.schema||!i&&!e.schema.$ref){var c=e.level,u=e.dataLevel,d=e.schema["false schema"],p=e.schemaPath+e.util.getProperty("false schema"),h=e.errSchemaPath+"/false schema",m=!e.opts.allErrors,f="data"+(u||""),v="valid"+c;if(!1===e.schema){e.isTop?m=!0:a+=" var "+v+" = false; ",(J=J||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'false schema' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'boolean schema is false' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var y=a;a=J.pop(),!e.compositeRule&&m?e.async?a+=" throw new ValidationError(["+y+"]); ":a+=" validate.errors = ["+y+"]; return false; ":a+=" var err = "+y+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}else e.isTop?a+=o?" return data; ":" validate.errors = null; return true; ":a+=" var "+v+" = true; ";return e.isTop&&(a+=" }; return validate; "),a}if(e.isTop){var g=e.isTop;c=e.level=0,u=e.dataLevel=0,f="data";if(e.rootId=e.resolve.fullPath(e.self._getId(e.root.schema)),e.baseId=e.baseId||e.rootId,delete e.isTop,e.dataPathArr=[""],void 0!==e.schema.default&&e.opts.useDefaults&&e.opts.strictDefaults){var b="default is ignored in the schema root";if("log"!==e.opts.strictDefaults)throw new Error(b);e.logger.warn(b);}a+=" var vErrors = null; ",a+=" var errors = 0;     ",a+=" if (rootData === undefined) rootData = data; ";}else {c=e.level,f="data"+((u=e.dataLevel)||"");if(s&&(e.baseId=e.resolve.url(e.baseId,s)),o&&!e.async)throw new Error("async schema in sync schema");a+=" var errs_"+c+" = errors;";}v="valid"+c,m=!e.opts.allErrors;var P="",w="",E=e.schema.type,S=Array.isArray(E);if(E&&e.opts.nullable&&!0===e.schema.nullable&&(S?-1==E.indexOf("null")&&(E=E.concat("null")):"null"!=E&&(E=[E,"null"],S=!0)),S&&1==E.length&&(E=E[0],S=!1),e.schema.$ref&&i){if("fail"==e.opts.extendRefs)throw new Error('$ref: validation keywords used in schema at path "'+e.errSchemaPath+'" (see option extendRefs)');!0!==e.opts.extendRefs&&(i=!1,e.logger.warn('$ref: keywords ignored in schema at path "'+e.errSchemaPath+'"'));}if(e.schema.$comment&&e.opts.$comment&&(a+=" "+e.RULES.all.$comment.code(e,"$comment")),E){if(e.opts.coerceTypes)var x=e.util.coerceToTypes(e.opts.coerceTypes,E);var F=e.RULES.types[E];if(x||S||!0===F||F&&!Z(F)){p=e.schemaPath+".type",h=e.errSchemaPath+"/type",p=e.schemaPath+".type",h=e.errSchemaPath+"/type";var O=S?"checkDataTypes":"checkDataType";if(a+=" if ("+e.util[O](E,f,e.opts.strictNumbers,!0)+") { ",x){var _="dataType"+c,D="coerced"+c;a+=" var "+_+" = typeof "+f+"; var "+D+" = undefined; ","array"==e.opts.coerceTypes&&(a+=" if ("+_+" == 'object' && Array.isArray("+f+") && "+f+".length == 1) { "+f+" = "+f+"[0]; "+_+" = typeof "+f+"; if ("+e.util.checkDataType(e.schema.type,f,e.opts.strictNumbers)+") "+D+" = "+f+"; } "),a+=" if ("+D+" !== undefined) ; ";var $=x;if($)for(var j,k=-1,A=$.length-1;k<A;)"string"==(j=$[k+=1])?a+=" else if ("+_+" == 'number' || "+_+" == 'boolean') "+D+" = '' + "+f+"; else if ("+f+" === null) "+D+" = ''; ":"number"==j||"integer"==j?(a+=" else if ("+_+" == 'boolean' || "+f+" === null || ("+_+" == 'string' && "+f+" && "+f+" == +"+f+" ","integer"==j&&(a+=" && !("+f+" % 1)"),a+=")) "+D+" = +"+f+"; "):"boolean"==j?a+=" else if ("+f+" === 'false' || "+f+" === 0 || "+f+" === null) "+D+" = false; else if ("+f+" === 'true' || "+f+" === 1) "+D+" = true; ":"null"==j?a+=" else if ("+f+" === '' || "+f+" === 0 || "+f+" === false) "+D+" = null; ":"array"==e.opts.coerceTypes&&"array"==j&&(a+=" else if ("+_+" == 'string' || "+_+" == 'number' || "+_+" == 'boolean' || "+f+" == null) "+D+" = ["+f+"]; ");a+=" else {   ",(J=J||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { type: '",a+=S?""+E.join(","):""+E,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=S?""+E.join(","):""+E,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+p+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";y=a;a=J.pop(),!e.compositeRule&&m?e.async?a+=" throw new ValidationError(["+y+"]); ":a+=" validate.errors = ["+y+"]; return false; ":a+=" var err = "+y+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } if ("+D+" !== undefined) {  ";var I=u?"data"+(u-1||""):"parentData";a+=" "+f+" = "+D+"; ",u||(a+="if ("+I+" !== undefined)"),a+=" "+I+"["+(u?e.dataPathArr[u]:"parentDataProperty")+"] = "+D+"; } ";}else {(J=J||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { type: '",a+=S?""+E.join(","):""+E,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=S?""+E.join(","):""+E,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+p+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";y=a;a=J.pop(),!e.compositeRule&&m?e.async?a+=" throw new ValidationError(["+y+"]); ":a+=" validate.errors = ["+y+"]; return false; ":a+=" var err = "+y+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}a+=" } ";}}if(e.schema.$ref&&!i)a+=" "+e.RULES.all.$ref.code(e,"$ref")+" ",m&&(a+=" } if (errors === ",a+=g?"0":"errs_"+c,a+=") { ",w+="}");else {var R=e.RULES;if(R)for(var C=-1,N=R.length-1;C<N;)if(Z(F=R[C+=1])){if(F.type&&(a+=" if ("+e.util.checkDataType(F.type,f,e.opts.strictNumbers)+") { "),e.opts.useDefaults)if("object"==F.type&&e.schema.properties){d=e.schema.properties;var L=Object.keys(d);if(L)for(var T,z=-1,q=L.length-1;z<q;){if(void 0!==(W=d[T=L[z+=1]]).default){var V=f+e.util.getProperty(T);if(e.compositeRule){if(e.opts.strictDefaults){b="default is ignored for: "+V;if("log"!==e.opts.strictDefaults)throw new Error(b);e.logger.warn(b);}}else a+=" if ("+V+" === undefined ","empty"==e.opts.useDefaults&&(a+=" || "+V+" === null || "+V+" === '' "),a+=" ) "+V+" = ","shared"==e.opts.useDefaults?a+=" "+e.useDefault(W.default)+" ":a+=" "+JSON.stringify(W.default)+" ",a+="; ";}}}else if("array"==F.type&&Array.isArray(e.schema.items)){var M=e.schema.items;if(M){k=-1;for(var W,Q=M.length-1;k<Q;)if(void 0!==(W=M[k+=1]).default){V=f+"["+k+"]";if(e.compositeRule){if(e.opts.strictDefaults){b="default is ignored for: "+V;if("log"!==e.opts.strictDefaults)throw new Error(b);e.logger.warn(b);}}else a+=" if ("+V+" === undefined ","empty"==e.opts.useDefaults&&(a+=" || "+V+" === null || "+V+" === '' "),a+=" ) "+V+" = ","shared"==e.opts.useDefaults?a+=" "+e.useDefault(W.default)+" ":a+=" "+JSON.stringify(W.default)+" ",a+="; ";}}}var U=F.rules;if(U)for(var B,H=-1,K=U.length-1;H<K;)if(X(B=U[H+=1])){var G=B.code(e,B.keyword,F.type);G&&(a+=" "+G+" ",m&&(P+="}"));}if(m&&(a+=" "+P+" ",P=""),F.type&&(a+=" } ",E&&E===F.type&&!x)){a+=" else { ";var J;p=e.schemaPath+".type",h=e.errSchemaPath+"/type";(J=J||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { type: '",a+=S?""+E.join(","):""+E,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=S?""+E.join(","):""+E,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+p+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";y=a;a=J.pop(),!e.compositeRule&&m?e.async?a+=" throw new ValidationError(["+y+"]); ":a+=" validate.errors = ["+y+"]; return false; ":a+=" var err = "+y+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ";}m&&(a+=" if (errors === ",a+=g?"0":"errs_"+c,a+=") { ",w+="}");}}function Z(e){for(var r=e.rules,t=0;t<r.length;t++)if(X(r[t]))return !0}function X(r){return void 0!==e.schema[r.keyword]||r.implements&&function(r){for(var t=r.implements,a=0;a<t.length;a++)if(void 0!==e.schema[t[a]])return !0}(r)}return m&&(a+=" "+w+" "),g?(o?(a+=" if (errors === 0) return data;           ",a+=" else throw new ValidationError(vErrors); "):(a+=" validate.errors = vErrors; ",a+=" return errors === 0;       "),a+=" }; return validate;"):a+=" var "+v+" = errors === errs_"+c+";",a},ue=j.ucs2length,de=ie.Validation,pe=function e(r,t,a,o){var i=this,s=this._opts,n=[void 0],l={},c=[],u={},d=[],p={},h=[];t=t||{schema:r,refVal:n,refs:l};var m=he.call(this,r,t,o),f=this._compilations[m.index];if(m.compiling)return f.callValidate=function e(){var r=f.validate,t=r.apply(this,arguments);return e.errors=r.errors,t};var v=this._formats,y=this.RULES;try{var g=P(r,t,a,o);f.validate=g;var b=f.callValidate;return b&&(b.schema=g.schema,b.errors=null,b.refs=g.refs,b.refVal=g.refVal,b.root=g.root,b.$async=g.$async,s.sourceCode&&(b.source=g.source)),g}finally{me.call(this,r,t,o);}function P(r,a,o,u){var p=!a||a&&a.schema==r;if(a.schema!=t.schema)return e.call(i,r,a,o,u);var m,f=!0===r.$async,g=ce({isTop:!0,schema:r,isRoot:p,baseId:u,root:a,schemaPath:"",errSchemaPath:"#",errorPath:'""',MissingRefError:ie.MissingRef,RULES:y,validate:ce,util:j,resolve:B,resolveRef:w,usePattern:x,useDefault:F,useCustomRule:O,opts:s,formats:v,logger:i.logger,self:i});g=Pe(n,ge)+Pe(c,ve)+Pe(d,ye)+Pe(h,be)+g,s.processCode&&(g=s.processCode(g,r));try{m=new Function("self","RULES","formats","root","refVal","defaults","customRules","equal","ucs2length","ValidationError",g)(i,y,v,t,n,d,h,$,ue,de),n[0]=m;}catch(e){throw i.logger.error("Error compiling schema, function code:",g),e}return m.schema=r,m.errors=null,m.refs=l,m.refVal=n,m.root=p?m:a,f&&(m.$async=!0),!0===s.sourceCode&&(m.source={code:g,patterns:c,defaults:d}),m}function w(r,o,c){o=B.url(r,o);var u,d,p=l[o];if(void 0!==p)return S(u=n[p],d="refVal["+p+"]");if(!c&&t.refs){var h=t.refs[o];if(void 0!==h)return S(u=t.refVal[h],d=E(o,u))}d=E(o);var m=B.call(i,P,t,o);if(void 0===m){var f=a&&a[o];f&&(m=B.inlineRef(f,s.inlineRefs)?f:e.call(i,f,t,a,r));}if(void 0!==m)return function(e,r){var t=l[e];n[t]=r;}(o,m),S(m,d);!function(e){delete l[e];}(o);}function E(e,r){var t=n.length;return n[t]=r,l[e]=t,"refVal"+t}function S(e,r){return "object"==typeof e||"boolean"==typeof e?{code:r,schema:e,inline:!0}:{code:r,$async:e&&!!e.$async}}function x(e){var r=u[e];return void 0===r&&(r=u[e]=c.length,c[r]=e),"pattern"+r}function F(e){switch(typeof e){case"boolean":case"number":return ""+e;case"string":return j.toQuotedString(e);case"object":if(null===e)return "null";var r=le(e),t=p[r];return void 0===t&&(t=p[r]=d.length,d[t]=e),"default"+t}}function O(e,r,t,a){if(!1!==i._opts.validateSchema){var o=e.definition.dependencies;if(o&&!o.every((function(e){return Object.prototype.hasOwnProperty.call(t,e)})))throw new Error("parent schema must have all required keywords: "+o.join(","));var n=e.definition.validateSchema;if(n)if(!n(r)){var l="keyword schema is invalid: "+i.errorsText(n.errors);if("log"!=i._opts.validateSchema)throw new Error(l);i.logger.error(l);}}var c,u=e.definition.compile,d=e.definition.inline,p=e.definition.macro;if(u)c=u.call(i,r,t,a);else if(p)c=p.call(i,r,t,a),!1!==s.validateSchema&&i.validateSchema(c,!0);else if(d)c=d.call(i,a,e.keyword,r,t);else if(!(c=e.definition.validate))return;if(void 0===c)throw new Error('custom keyword "'+e.keyword+'"failed to compile');var m=h.length;return h[m]=c,{code:"customRule"+m,validate:c}}};function he(e,r,t){var a=fe.call(this,e,r,t);return a>=0?{index:a,compiling:!0}:(a=this._compilations.length,this._compilations[a]={schema:e,root:r,baseId:t},{index:a,compiling:!1})}function me(e,r,t){var a=fe.call(this,e,r,t);a>=0&&this._compilations.splice(a,1);}function fe(e,r,t){for(var a=0;a<this._compilations.length;a++){var o=this._compilations[a];if(o.schema==e&&o.root==r&&o.baseId==t)return a}return -1}function ve(e,r){return "var pattern"+e+" = new RegExp("+j.toQuotedString(r[e])+");"}function ye(e){return "var default"+e+" = defaults["+e+"];"}function ge(e,r){return void 0===r[e]?"":"var refVal"+e+" = refVal["+e+"];"}function be(e){return "var customRule"+e+" = customRules["+e+"];"}function Pe(e,r){if(!e.length)return "";for(var t="",a=0;a<e.length;a++)t+=r(a,e);return t}var we=F((function(e){var r=e.exports=function(){this._cache={};};r.prototype.put=function(e,r){this._cache[e]=r;},r.prototype.get=function(e){return this._cache[e]},r.prototype.del=function(e){delete this._cache[e];},r.prototype.clear=function(){this._cache={};};})),Ee=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,Se=[0,31,28,31,30,31,30,31,31,30,31,30,31],xe=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,Fe=/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,Oe=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,_e=/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,De=/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,$e=/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,je=/^(?:\/(?:[^~/]|~0|~1)*)*$/,ke=/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,Ae=/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,Ie=Re;function Re(e){return e="full"==e?"full":"fast",j.copy(Re[e])}function Ce(e){var r=e.match(Ee);if(!r)return !1;var t=+r[1],a=+r[2],o=+r[3];return a>=1&&a<=12&&o>=1&&o<=(2==a&&function(e){return e%4==0&&(e%100!=0||e%400==0)}(t)?29:Se[a])}function Ne(e,r){var t=e.match(xe);if(!t)return !1;var a=t[1],o=t[2],i=t[3],s=t[5];return (a<=23&&o<=59&&i<=59||23==a&&59==o&&60==i)&&(!r||s)}Re.fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,"uri-template":_e,url:De,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:Fe,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:qe,uuid:$e,"json-pointer":je,"json-pointer-uri-fragment":ke,"relative-json-pointer":Ae},Re.full={date:Ce,time:Ne,"date-time":function(e){var r=e.split(Le);return 2==r.length&&Ce(r[0])&&Ne(r[1],!0)},uri:function(e){return Te.test(e)&&Oe.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":_e,url:De,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:Fe,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:qe,uuid:$e,"json-pointer":je,"json-pointer-uri-fragment":ke,"relative-json-pointer":Ae};var Le=/t|\s/i;var Te=/\/|:/;var ze=/[^\\]\\Z/;function qe(e){if(ze.test(e))return !1;try{return new RegExp(e),!0}catch(e){return !1}}var Ve=function(e,r,t){var a,o=" ",i=e.level,s=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(s||""),p=e.opts.$data&&n&&n.$data;p?(o+=" var schema"+i+" = "+e.util.getData(n.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=n;var h="maximum"==r,m=h?"exclusiveMaximum":"exclusiveMinimum",f=e.schema[m],v=e.opts.$data&&f&&f.$data,y=h?"<":">",g=h?">":"<",b=void 0;if(!p&&"number"!=typeof n&&void 0!==n)throw new Error(r+" must be number");if(!v&&void 0!==f&&"number"!=typeof f&&"boolean"!=typeof f)throw new Error(m+" must be number or boolean");if(v){var P=e.util.getData(f.$data,s,e.dataPathArr),w="exclusive"+i,E="exclType"+i,S="exclIsNumber"+i,x="' + "+(_="op"+i)+" + '";o+=" var schemaExcl"+i+" = "+P+"; ",o+=" var "+w+"; var "+E+" = typeof "+(P="schemaExcl"+i)+"; if ("+E+" != 'boolean' && "+E+" != 'undefined' && "+E+" != 'number') { ";var F;b=m;(F=F||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: '"+(b||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: {} ",!1!==e.opts.messages&&(o+=" , message: '"+m+" should be boolean' "),e.opts.verbose&&(o+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var O=o;o=F.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+O+"]); ":o+=" validate.errors = ["+O+"]; return false; ":o+=" var err = "+O+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } else if ( ",p&&(o+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),o+=" "+E+" == 'number' ? ( ("+w+" = "+a+" === undefined || "+P+" "+y+"= "+a+") ? "+d+" "+g+"= "+P+" : "+d+" "+g+" "+a+" ) : ( ("+w+" = "+P+" === true) ? "+d+" "+g+"= "+a+" : "+d+" "+g+" "+a+" ) || "+d+" !== "+d+") { var op"+i+" = "+w+" ? '"+y+"' : '"+y+"='; ",void 0===n&&(b=m,c=e.errSchemaPath+"/"+m,a=P,p=v);}else {x=y;if((S="number"==typeof f)&&p){var _="'"+x+"'";o+=" if ( ",p&&(o+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),o+=" ( "+a+" === undefined || "+f+" "+y+"= "+a+" ? "+d+" "+g+"= "+f+" : "+d+" "+g+" "+a+" ) || "+d+" !== "+d+") { ";}else {S&&void 0===n?(w=!0,b=m,c=e.errSchemaPath+"/"+m,a=f,g+="="):(S&&(a=Math[h?"min":"max"](f,n)),f===(!S||a)?(w=!0,b=m,c=e.errSchemaPath+"/"+m,g+="="):(w=!1,x+="="));_="'"+x+"'";o+=" if ( ",p&&(o+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),o+=" "+d+" "+g+" "+a+" || "+d+" !== "+d+") { ";}}b=b||r,(F=F||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: '"+(b||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { comparison: "+_+", limit: "+a+", exclusive: "+w+" } ",!1!==e.opts.messages&&(o+=" , message: 'should be "+x+" ",o+=p?"' + "+a:a+"'"),e.opts.verbose&&(o+=" , schema:  ",o+=p?"validate.schema"+l:""+n,o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";O=o;return o=F.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+O+"]); ":o+=" validate.errors = ["+O+"]; return false; ":o+=" var err = "+O+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } ",u&&(o+=" else { "),o},Me=function(e,r,t){var a,o=" ",i=e.level,s=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(s||""),p=e.opts.$data&&n&&n.$data;if(p?(o+=" var schema"+i+" = "+e.util.getData(n.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=n,!p&&"number"!=typeof n)throw new Error(r+" must be number");o+="if ( ",p&&(o+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),o+=" "+d+".length "+("maxItems"==r?">":"<")+" "+a+") { ";var h=r,m=m||[];m.push(o),o="",!1!==e.createErrors?(o+=" { keyword: '"+(h||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(o+=" , message: 'should NOT have ",o+="maxItems"==r?"more":"fewer",o+=" than ",o+=p?"' + "+a+" + '":""+n,o+=" items' "),e.opts.verbose&&(o+=" , schema:  ",o+=p?"validate.schema"+l:""+n,o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var f=o;return o=m.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+f+"]); ":o+=" validate.errors = ["+f+"]; return false; ":o+=" var err = "+f+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+="} ",u&&(o+=" else { "),o},We=function(e,r,t){var a,o=" ",i=e.level,s=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(s||""),p=e.opts.$data&&n&&n.$data;if(p?(o+=" var schema"+i+" = "+e.util.getData(n.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=n,!p&&"number"!=typeof n)throw new Error(r+" must be number");var h="maxLength"==r?">":"<";o+="if ( ",p&&(o+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),!1===e.opts.unicode?o+=" "+d+".length ":o+=" ucs2length("+d+") ",o+=" "+h+" "+a+") { ";var m=r,f=f||[];f.push(o),o="",!1!==e.createErrors?(o+=" { keyword: '"+(m||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(o+=" , message: 'should NOT be ",o+="maxLength"==r?"longer":"shorter",o+=" than ",o+=p?"' + "+a+" + '":""+n,o+=" characters' "),e.opts.verbose&&(o+=" , schema:  ",o+=p?"validate.schema"+l:""+n,o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var v=o;return o=f.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+v+"]); ":o+=" validate.errors = ["+v+"]; return false; ":o+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+="} ",u&&(o+=" else { "),o},Qe=function(e,r,t){var a,o=" ",i=e.level,s=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(s||""),p=e.opts.$data&&n&&n.$data;if(p?(o+=" var schema"+i+" = "+e.util.getData(n.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=n,!p&&"number"!=typeof n)throw new Error(r+" must be number");o+="if ( ",p&&(o+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),o+=" Object.keys("+d+").length "+("maxProperties"==r?">":"<")+" "+a+") { ";var h=r,m=m||[];m.push(o),o="",!1!==e.createErrors?(o+=" { keyword: '"+(h||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(o+=" , message: 'should NOT have ",o+="maxProperties"==r?"more":"fewer",o+=" than ",o+=p?"' + "+a+" + '":""+n,o+=" properties' "),e.opts.verbose&&(o+=" , schema:  ",o+=p?"validate.schema"+l:""+n,o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var f=o;return o=m.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+f+"]); ":o+=" validate.errors = ["+f+"]; return false; ":o+=" var err = "+f+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+="} ",u&&(o+=" else { "),o},Ue={$ref:function(e,r,t){var a,o,i=" ",s=e.level,n=e.dataLevel,l=e.schema[r],c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(n||""),p="valid"+s;if("#"==l||"#/"==l)e.isRoot?(a=e.async,o="validate"):(a=!0===e.root.schema.$async,o="root.refVal[0]");else {var h=e.resolveRef(e.baseId,l,e.isRoot);if(void 0===h){var m=e.MissingRefError.message(e.baseId,l);if("fail"==e.opts.missingRefs){e.logger.error(m),(g=g||[]).push(i),i="",!1!==e.createErrors?(i+=" { keyword: '$ref' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { ref: '"+e.util.escapeQuotes(l)+"' } ",!1!==e.opts.messages&&(i+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(l)+"' "),e.opts.verbose&&(i+=" , schema: "+e.util.toQuotedString(l)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),i+=" } "):i+=" {} ";var f=i;i=g.pop(),!e.compositeRule&&u?e.async?i+=" throw new ValidationError(["+f+"]); ":i+=" validate.errors = ["+f+"]; return false; ":i+=" var err = "+f+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",u&&(i+=" if (false) { ");}else {if("ignore"!=e.opts.missingRefs)throw new e.MissingRefError(e.baseId,l,m);e.logger.warn(m),u&&(i+=" if (true) { ");}}else if(h.inline){var v=e.util.copy(e);v.level++;var y="valid"+v.level;v.schema=h.schema,v.schemaPath="",v.errSchemaPath=l,i+=" "+e.validate(v).replace(/validate\.schema/g,h.code)+" ",u&&(i+=" if ("+y+") { ");}else a=!0===h.$async||e.async&&!1!==h.$async,o=h.code;}if(o){var g;(g=g||[]).push(i),i="",e.opts.passContext?i+=" "+o+".call(this, ":i+=" "+o+"( ",i+=" "+d+", (dataPath || '')",'""'!=e.errorPath&&(i+=" + "+e.errorPath);var b=i+=" , "+(n?"data"+(n-1||""):"parentData")+" , "+(n?e.dataPathArr[n]:"parentDataProperty")+", rootData)  ";if(i=g.pop(),a){if(!e.async)throw new Error("async schema referenced by sync schema");u&&(i+=" var "+p+"; "),i+=" try { await "+b+"; ",u&&(i+=" "+p+" = true; "),i+=" } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ",u&&(i+=" "+p+" = false; "),i+=" } ",u&&(i+=" if ("+p+") { ");}else i+=" if (!"+b+") { if (vErrors === null) vErrors = "+o+".errors; else vErrors = vErrors.concat("+o+".errors); errors = vErrors.length; } ",u&&(i+=" else { ");}return i},allOf:function(e,r,t){var a=" ",o=e.schema[r],i=e.schemaPath+e.util.getProperty(r),s=e.errSchemaPath+"/"+r,n=!e.opts.allErrors,l=e.util.copy(e),c="";l.level++;var u="valid"+l.level,d=l.baseId,p=!0,h=o;if(h)for(var m,f=-1,v=h.length-1;f<v;)m=h[f+=1],(e.opts.strictKeywords?"object"==typeof m&&Object.keys(m).length>0||!1===m:e.util.schemaHasRules(m,e.RULES.all))&&(p=!1,l.schema=m,l.schemaPath=i+"["+f+"]",l.errSchemaPath=s+"/"+f,a+="  "+e.validate(l)+" ",l.baseId=d,n&&(a+=" if ("+u+") { ",c+="}"));return n&&(a+=p?" if (true) { ":" "+c.slice(0,-1)+" "),a},anyOf:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p="errs__"+o,h=e.util.copy(e),m="";h.level++;var f="valid"+h.level;if(s.every((function(r){return e.opts.strictKeywords?"object"==typeof r&&Object.keys(r).length>0||!1===r:e.util.schemaHasRules(r,e.RULES.all)}))){var v=h.baseId;a+=" var "+p+" = errors; var "+d+" = false;  ";var y=e.compositeRule;e.compositeRule=h.compositeRule=!0;var g=s;if(g)for(var b,P=-1,w=g.length-1;P<w;)b=g[P+=1],h.schema=b,h.schemaPath=n+"["+P+"]",h.errSchemaPath=l+"/"+P,a+="  "+e.validate(h)+" ",h.baseId=v,a+=" "+d+" = "+d+" || "+f+"; if (!"+d+") { ",m+="}";e.compositeRule=h.compositeRule=y,a+=" "+m+" if (!"+d+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'anyOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should match some schema in anyOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?a+=" throw new ValidationError(vErrors); ":a+=" validate.errors = vErrors; return false; "),a+=" } else {  errors = "+p+"; if (vErrors !== null) { if ("+p+") vErrors.length = "+p+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } ");}else c&&(a+=" if (true) { ");return a},$comment:function(e,r,t){var a=" ",o=e.schema[r],i=e.errSchemaPath+"/"+r;e.opts.allErrors;var s=e.util.toQuotedString(o);return !0===e.opts.$comment?a+=" console.log("+s+");":"function"==typeof e.opts.$comment&&(a+=" self._opts.$comment("+s+", "+e.util.toQuotedString(i)+", validate.root.schema);"),a},const:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p=e.opts.$data&&s&&s.$data;p&&(a+=" var schema"+o+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; "),p||(a+=" var schema"+o+" = validate.schema"+n+";"),a+="var "+d+" = equal("+u+", schema"+o+"); if (!"+d+") {   ";var h=h||[];h.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'const' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValue: schema"+o+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to constant' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var m=a;return a=h.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+m+"]); ":a+=" validate.errors = ["+m+"]; return false; ":a+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",c&&(a+=" else { "),a},contains:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p="errs__"+o,h=e.util.copy(e);h.level++;var m="valid"+h.level,f="i"+o,v=h.dataLevel=e.dataLevel+1,y="data"+v,g=e.baseId,b=e.opts.strictKeywords?"object"==typeof s&&Object.keys(s).length>0||!1===s:e.util.schemaHasRules(s,e.RULES.all);if(a+="var "+p+" = errors;var "+d+";",b){var P=e.compositeRule;e.compositeRule=h.compositeRule=!0,h.schema=s,h.schemaPath=n,h.errSchemaPath=l,a+=" var "+m+" = false; for (var "+f+" = 0; "+f+" < "+u+".length; "+f+"++) { ",h.errorPath=e.util.getPathExpr(e.errorPath,f,e.opts.jsonPointers,!0);var w=u+"["+f+"]";h.dataPathArr[v]=f;var E=e.validate(h);h.baseId=g,e.util.varOccurences(E,y)<2?a+=" "+e.util.varReplace(E,y,w)+" ":a+=" var "+y+" = "+w+"; "+E+" ",a+=" if ("+m+") break; }  ",e.compositeRule=h.compositeRule=P,a+="  if (!"+m+") {";}else a+=" if ("+u+".length == 0) {";var S=S||[];S.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'contains' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should contain a valid item' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var x=a;return a=S.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+x+"]); ":a+=" validate.errors = ["+x+"]; return false; ":a+=" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ",b&&(a+="  errors = "+p+"; if (vErrors !== null) { if ("+p+") vErrors.length = "+p+"; else vErrors = null; } "),e.opts.allErrors&&(a+=" } "),a},dependencies:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="errs__"+o,p=e.util.copy(e),h="";p.level++;var m="valid"+p.level,f={},v={},y=e.opts.ownProperties;for(w in s)if("__proto__"!=w){var g=s[w],b=Array.isArray(g)?v:f;b[w]=g;}a+="var "+d+" = errors;";var P=e.errorPath;for(var w in a+="var missing"+o+";",v)if((b=v[w]).length){if(a+=" if ( "+u+e.util.getProperty(w)+" !== undefined ",y&&(a+=" && Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(w)+"') "),c){a+=" && ( ";var E=b;if(E)for(var S=-1,x=E.length-1;S<x;){j=E[S+=1],S&&(a+=" || "),a+=" ( ( "+(R=u+(I=e.util.getProperty(j)))+" === undefined ",y&&(a+=" || ! Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(j)+"') "),a+=") && (missing"+o+" = "+e.util.toQuotedString(e.opts.jsonPointers?j:I)+") ) ";}a+=")) {  ";var F="missing"+o,O="' + "+F+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(P,F,!0):P+" + "+F);var _=_||[];_.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+O+"', depsCount: "+b.length+", deps: '"+e.util.escapeQuotes(1==b.length?b[0]:b.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",1==b.length?a+="property "+e.util.escapeQuotes(b[0]):a+="properties "+e.util.escapeQuotes(b.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var D=a;a=_.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+D+"]); ":a+=" validate.errors = ["+D+"]; return false; ":a+=" var err = "+D+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}else {a+=" ) { ";var $=b;if($)for(var j,k=-1,A=$.length-1;k<A;){j=$[k+=1];var I=e.util.getProperty(j),R=(O=e.util.escapeQuotes(j),u+I);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(P,j,e.opts.jsonPointers)),a+=" if ( "+R+" === undefined ",y&&(a+=" || ! Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(j)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+O+"', depsCount: "+b.length+", deps: '"+e.util.escapeQuotes(1==b.length?b[0]:b.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",1==b.length?a+="property "+e.util.escapeQuotes(b[0]):a+="properties "+e.util.escapeQuotes(b.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";}}a+=" }   ",c&&(h+="}",a+=" else { ");}e.errorPath=P;var C=p.baseId;for(var w in f){g=f[w];(e.opts.strictKeywords?"object"==typeof g&&Object.keys(g).length>0||!1===g:e.util.schemaHasRules(g,e.RULES.all))&&(a+=" "+m+" = true; if ( "+u+e.util.getProperty(w)+" !== undefined ",y&&(a+=" && Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(w)+"') "),a+=") { ",p.schema=g,p.schemaPath=n+e.util.getProperty(w),p.errSchemaPath=l+"/"+e.util.escapeFragment(w),a+="  "+e.validate(p)+" ",p.baseId=C,a+=" }  ",c&&(a+=" if ("+m+") { ",h+="}"));}return c&&(a+="   "+h+" if ("+d+" == errors) {"),a},enum:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p=e.opts.$data&&s&&s.$data;p&&(a+=" var schema"+o+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ");var h="i"+o,m="schema"+o;p||(a+=" var "+m+" = validate.schema"+n+";"),a+="var "+d+";",p&&(a+=" if (schema"+o+" === undefined) "+d+" = true; else if (!Array.isArray(schema"+o+")) "+d+" = false; else {"),a+=d+" = false;for (var "+h+"=0; "+h+"<"+m+".length; "+h+"++) if (equal("+u+", "+m+"["+h+"])) { "+d+" = true; break; }",p&&(a+="  }  "),a+=" if (!"+d+") {   ";var f=f||[];f.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'enum' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValues: schema"+o+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to one of the allowed values' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var v=a;return a=f.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+v+"]); ":a+=" validate.errors = ["+v+"]; return false; ":a+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",c&&(a+=" else { "),a},format:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||"");if(!1===e.opts.format)return c&&(a+=" if (true) { "),a;var d,p=e.opts.$data&&s&&s.$data;p?(a+=" var schema"+o+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",d="schema"+o):d=s;var h=e.opts.unknownFormats,m=Array.isArray(h);if(p){a+=" var "+(f="format"+o)+" = formats["+d+"]; var "+(v="isObject"+o)+" = typeof "+f+" == 'object' && !("+f+" instanceof RegExp) && "+f+".validate; var "+(y="formatType"+o)+" = "+v+" && "+f+".type || 'string'; if ("+v+") { ",e.async&&(a+=" var async"+o+" = "+f+".async; "),a+=" "+f+" = "+f+".validate; } if (  ",p&&(a+=" ("+d+" !== undefined && typeof "+d+" != 'string') || "),a+=" (","ignore"!=h&&(a+=" ("+d+" && !"+f+" ",m&&(a+=" && self._opts.unknownFormats.indexOf("+d+") == -1 "),a+=") || "),a+=" ("+f+" && "+y+" == '"+t+"' && !(typeof "+f+" == 'function' ? ",e.async?a+=" (async"+o+" ? await "+f+"("+u+") : "+f+"("+u+")) ":a+=" "+f+"("+u+") ",a+=" : "+f+".test("+u+"))))) {";}else {var f;if(!(f=e.formats[s])){if("ignore"==h)return e.logger.warn('unknown format "'+s+'" ignored in schema at path "'+e.errSchemaPath+'"'),c&&(a+=" if (true) { "),a;if(m&&h.indexOf(s)>=0)return c&&(a+=" if (true) { "),a;throw new Error('unknown format "'+s+'" is used in schema at path "'+e.errSchemaPath+'"')}var v,y=(v="object"==typeof f&&!(f instanceof RegExp)&&f.validate)&&f.type||"string";if(v){var g=!0===f.async;f=f.validate;}if(y!=t)return c&&(a+=" if (true) { "),a;if(g){if(!e.async)throw new Error("async format in sync schema");a+=" if (!(await "+(b="formats"+e.util.getProperty(s)+".validate")+"("+u+"))) { ";}else {a+=" if (! ";var b="formats"+e.util.getProperty(s);v&&(b+=".validate"),a+="function"==typeof f?" "+b+"("+u+") ":" "+b+".test("+u+") ",a+=") { ";}}var P=P||[];P.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'format' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { format:  ",a+=p?""+d:""+e.util.toQuotedString(s),a+="  } ",!1!==e.opts.messages&&(a+=" , message: 'should match format \"",a+=p?"' + "+d+" + '":""+e.util.escapeQuotes(s),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=p?"validate.schema"+n:""+e.util.toQuotedString(s),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var w=a;return a=P.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+w+"]); ":a+=" validate.errors = ["+w+"]; return false; ":a+=" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",c&&(a+=" else { "),a},if:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p="errs__"+o,h=e.util.copy(e);h.level++;var m="valid"+h.level,f=e.schema.then,v=e.schema.else,y=void 0!==f&&(e.opts.strictKeywords?"object"==typeof f&&Object.keys(f).length>0||!1===f:e.util.schemaHasRules(f,e.RULES.all)),g=void 0!==v&&(e.opts.strictKeywords?"object"==typeof v&&Object.keys(v).length>0||!1===v:e.util.schemaHasRules(v,e.RULES.all)),b=h.baseId;if(y||g){var P;h.createErrors=!1,h.schema=s,h.schemaPath=n,h.errSchemaPath=l,a+=" var "+p+" = errors; var "+d+" = true;  ";var w=e.compositeRule;e.compositeRule=h.compositeRule=!0,a+="  "+e.validate(h)+" ",h.baseId=b,h.createErrors=!0,a+="  errors = "+p+"; if (vErrors !== null) { if ("+p+") vErrors.length = "+p+"; else vErrors = null; }  ",e.compositeRule=h.compositeRule=w,y?(a+=" if ("+m+") {  ",h.schema=e.schema.then,h.schemaPath=e.schemaPath+".then",h.errSchemaPath=e.errSchemaPath+"/then",a+="  "+e.validate(h)+" ",h.baseId=b,a+=" "+d+" = "+m+"; ",y&&g?a+=" var "+(P="ifClause"+o)+" = 'then'; ":P="'then'",a+=" } ",g&&(a+=" else { ")):a+=" if (!"+m+") { ",g&&(h.schema=e.schema.else,h.schemaPath=e.schemaPath+".else",h.errSchemaPath=e.errSchemaPath+"/else",a+="  "+e.validate(h)+" ",h.baseId=b,a+=" "+d+" = "+m+"; ",y&&g?a+=" var "+(P="ifClause"+o)+" = 'else'; ":P="'else'",a+=" } "),a+=" if (!"+d+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'if' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { failingKeyword: "+P+" } ",!1!==e.opts.messages&&(a+=" , message: 'should match \"' + "+P+" + '\" schema' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?a+=" throw new ValidationError(vErrors); ":a+=" validate.errors = vErrors; return false; "),a+=" }   ",c&&(a+=" else { ");}else c&&(a+=" if (true) { ");return a},items:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p="errs__"+o,h=e.util.copy(e),m="";h.level++;var f="valid"+h.level,v="i"+o,y=h.dataLevel=e.dataLevel+1,g="data"+y,b=e.baseId;if(a+="var "+p+" = errors;var "+d+";",Array.isArray(s)){var P=e.schema.additionalItems;if(!1===P){a+=" "+d+" = "+u+".length <= "+s.length+"; ";var w=l;l=e.errSchemaPath+"/additionalItems",a+="  if (!"+d+") {   ";var E=E||[];E.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+s.length+" } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have more than "+s.length+" items' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var S=a;a=E.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+S+"]); ":a+=" validate.errors = ["+S+"]; return false; ":a+=" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",l=w,c&&(m+="}",a+=" else { ");}var x=s;if(x)for(var F,O=-1,_=x.length-1;O<_;)if(F=x[O+=1],e.opts.strictKeywords?"object"==typeof F&&Object.keys(F).length>0||!1===F:e.util.schemaHasRules(F,e.RULES.all)){a+=" "+f+" = true; if ("+u+".length > "+O+") { ";var D=u+"["+O+"]";h.schema=F,h.schemaPath=n+"["+O+"]",h.errSchemaPath=l+"/"+O,h.errorPath=e.util.getPathExpr(e.errorPath,O,e.opts.jsonPointers,!0),h.dataPathArr[y]=O;var $=e.validate(h);h.baseId=b,e.util.varOccurences($,g)<2?a+=" "+e.util.varReplace($,g,D)+" ":a+=" var "+g+" = "+D+"; "+$+" ",a+=" }  ",c&&(a+=" if ("+f+") { ",m+="}");}if("object"==typeof P&&(e.opts.strictKeywords?"object"==typeof P&&Object.keys(P).length>0||!1===P:e.util.schemaHasRules(P,e.RULES.all))){h.schema=P,h.schemaPath=e.schemaPath+".additionalItems",h.errSchemaPath=e.errSchemaPath+"/additionalItems",a+=" "+f+" = true; if ("+u+".length > "+s.length+") {  for (var "+v+" = "+s.length+"; "+v+" < "+u+".length; "+v+"++) { ",h.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);D=u+"["+v+"]";h.dataPathArr[y]=v;$=e.validate(h);h.baseId=b,e.util.varOccurences($,g)<2?a+=" "+e.util.varReplace($,g,D)+" ":a+=" var "+g+" = "+D+"; "+$+" ",c&&(a+=" if (!"+f+") break; "),a+=" } }  ",c&&(a+=" if ("+f+") { ",m+="}");}}else if(e.opts.strictKeywords?"object"==typeof s&&Object.keys(s).length>0||!1===s:e.util.schemaHasRules(s,e.RULES.all)){h.schema=s,h.schemaPath=n,h.errSchemaPath=l,a+="  for (var "+v+" = 0; "+v+" < "+u+".length; "+v+"++) { ",h.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);D=u+"["+v+"]";h.dataPathArr[y]=v;$=e.validate(h);h.baseId=b,e.util.varOccurences($,g)<2?a+=" "+e.util.varReplace($,g,D)+" ":a+=" var "+g+" = "+D+"; "+$+" ",c&&(a+=" if (!"+f+") break; "),a+=" }";}return c&&(a+=" "+m+" if ("+p+" == errors) {"),a},maximum:Ve,minimum:Ve,maxItems:Me,minItems:Me,maxLength:We,minLength:We,maxProperties:Qe,minProperties:Qe,multipleOf:function(e,r,t){var a,o=" ",i=e.level,s=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(s||""),p=e.opts.$data&&n&&n.$data;if(p?(o+=" var schema"+i+" = "+e.util.getData(n.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=n,!p&&"number"!=typeof n)throw new Error(r+" must be number");o+="var division"+i+";if (",p&&(o+=" "+a+" !== undefined && ( typeof "+a+" != 'number' || "),o+=" (division"+i+" = "+d+" / "+a+", ",e.opts.multipleOfPrecision?o+=" Math.abs(Math.round(division"+i+") - division"+i+") > 1e-"+e.opts.multipleOfPrecision+" ":o+=" division"+i+" !== parseInt(division"+i+") ",o+=" ) ",p&&(o+="  )  "),o+=" ) {   ";var h=h||[];h.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'multipleOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { multipleOf: "+a+" } ",!1!==e.opts.messages&&(o+=" , message: 'should be multiple of ",o+=p?"' + "+a:a+"'"),e.opts.verbose&&(o+=" , schema:  ",o+=p?"validate.schema"+l:""+n,o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var m=o;return o=h.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+m+"]); ":o+=" validate.errors = ["+m+"]; return false; ":o+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+="} ",u&&(o+=" else { "),o},not:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="errs__"+o,p=e.util.copy(e);p.level++;var h="valid"+p.level;if(e.opts.strictKeywords?"object"==typeof s&&Object.keys(s).length>0||!1===s:e.util.schemaHasRules(s,e.RULES.all)){p.schema=s,p.schemaPath=n,p.errSchemaPath=l,a+=" var "+d+" = errors;  ";var m,f=e.compositeRule;e.compositeRule=p.compositeRule=!0,p.createErrors=!1,p.opts.allErrors&&(m=p.opts.allErrors,p.opts.allErrors=!1),a+=" "+e.validate(p)+" ",p.createErrors=!0,m&&(p.opts.allErrors=m),e.compositeRule=p.compositeRule=f,a+=" if ("+h+") {   ";var v=v||[];v.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var y=a;a=v.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+y+"]); ":a+=" validate.errors = ["+y+"]; return false; ":a+=" var err = "+y+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else {  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } ");}else a+="  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",c&&(a+=" if (false) { ");return a},oneOf:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p="errs__"+o,h=e.util.copy(e),m="";h.level++;var f="valid"+h.level,v=h.baseId,y="prevValid"+o,g="passingSchemas"+o;a+="var "+p+" = errors , "+y+" = false , "+d+" = false , "+g+" = null; ";var b=e.compositeRule;e.compositeRule=h.compositeRule=!0;var P=s;if(P)for(var w,E=-1,S=P.length-1;E<S;)w=P[E+=1],(e.opts.strictKeywords?"object"==typeof w&&Object.keys(w).length>0||!1===w:e.util.schemaHasRules(w,e.RULES.all))?(h.schema=w,h.schemaPath=n+"["+E+"]",h.errSchemaPath=l+"/"+E,a+="  "+e.validate(h)+" ",h.baseId=v):a+=" var "+f+" = true; ",E&&(a+=" if ("+f+" && "+y+") { "+d+" = false; "+g+" = ["+g+", "+E+"]; } else { ",m+="}"),a+=" if ("+f+") { "+d+" = "+y+" = true; "+g+" = "+E+"; }";return e.compositeRule=h.compositeRule=b,a+=m+"if (!"+d+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'oneOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { passingSchemas: "+g+" } ",!1!==e.opts.messages&&(a+=" , message: 'should match exactly one schema in oneOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?a+=" throw new ValidationError(vErrors); ":a+=" validate.errors = vErrors; return false; "),a+="} else {  errors = "+p+"; if (vErrors !== null) { if ("+p+") vErrors.length = "+p+"; else vErrors = null; }",e.opts.allErrors&&(a+=" } "),a},pattern:function(e,r,t){var a,o=" ",i=e.level,s=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(s||""),p=e.opts.$data&&n&&n.$data;p?(o+=" var schema"+i+" = "+e.util.getData(n.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=n,o+="if ( ",p&&(o+=" ("+a+" !== undefined && typeof "+a+" != 'string') || "),o+=" !"+(p?"(new RegExp("+a+"))":e.usePattern(n))+".test("+d+") ) {   ";var h=h||[];h.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'pattern' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { pattern:  ",o+=p?""+a:""+e.util.toQuotedString(n),o+="  } ",!1!==e.opts.messages&&(o+=" , message: 'should match pattern \"",o+=p?"' + "+a+" + '":""+e.util.escapeQuotes(n),o+="\"' "),e.opts.verbose&&(o+=" , schema:  ",o+=p?"validate.schema"+l:""+e.util.toQuotedString(n),o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var m=o;return o=h.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+m+"]); ":o+=" validate.errors = ["+m+"]; return false; ":o+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+="} ",u&&(o+=" else { "),o},properties:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="errs__"+o,p=e.util.copy(e),h="";p.level++;var m="valid"+p.level,f="key"+o,v="idx"+o,y=p.dataLevel=e.dataLevel+1,g="data"+y,b="dataProperties"+o,P=Object.keys(s||{}).filter(I),w=e.schema.patternProperties||{},E=Object.keys(w).filter(I),S=e.schema.additionalProperties,x=P.length||E.length,F=!1===S,O="object"==typeof S&&Object.keys(S).length,_=e.opts.removeAdditional,D=F||O||_,$=e.opts.ownProperties,j=e.baseId,k=e.schema.required;if(k&&(!e.opts.$data||!k.$data)&&k.length<e.opts.loopRequired)var A=e.util.toHash(k);function I(e){return "__proto__"!==e}if(a+="var "+d+" = errors;var "+m+" = true;",$&&(a+=" var "+b+" = undefined;"),D){if(a+=$?" "+b+" = "+b+" || Object.keys("+u+"); for (var "+v+"=0; "+v+"<"+b+".length; "+v+"++) { var "+f+" = "+b+"["+v+"]; ":" for (var "+f+" in "+u+") { ",x){if(a+=" var isAdditional"+o+" = !(false ",P.length)if(P.length>8)a+=" || validate.schema"+n+".hasOwnProperty("+f+") ";else {var R=P;if(R)for(var C=-1,N=R.length-1;C<N;)G=R[C+=1],a+=" || "+f+" == "+e.util.toQuotedString(G)+" ";}if(E.length){var L=E;if(L)for(var T=-1,z=L.length-1;T<z;)ie=L[T+=1],a+=" || "+e.usePattern(ie)+".test("+f+") ";}a+=" ); if (isAdditional"+o+") { ";}if("all"==_)a+=" delete "+u+"["+f+"]; ";else {var q=e.errorPath,V="' + "+f+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,f,e.opts.jsonPointers)),F)if(_)a+=" delete "+u+"["+f+"]; ";else {a+=" "+m+" = false; ";var M=l;l=e.errSchemaPath+"/additionalProperties",(te=te||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalProperties' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { additionalProperty: '"+V+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is an invalid additional property":a+="should NOT have additional properties",a+="' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var W=a;a=te.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+W+"]); ":a+=" validate.errors = ["+W+"]; return false; ":a+=" var err = "+W+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=M,c&&(a+=" break; ");}else if(O)if("failing"==_){a+=" var "+d+" = errors;  ";var Q=e.compositeRule;e.compositeRule=p.compositeRule=!0,p.schema=S,p.schemaPath=e.schemaPath+".additionalProperties",p.errSchemaPath=e.errSchemaPath+"/additionalProperties",p.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,f,e.opts.jsonPointers);var U=u+"["+f+"]";p.dataPathArr[y]=f;var B=e.validate(p);p.baseId=j,e.util.varOccurences(B,g)<2?a+=" "+e.util.varReplace(B,g,U)+" ":a+=" var "+g+" = "+U+"; "+B+" ",a+=" if (!"+m+") { errors = "+d+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+u+"["+f+"]; }  ",e.compositeRule=p.compositeRule=Q;}else {p.schema=S,p.schemaPath=e.schemaPath+".additionalProperties",p.errSchemaPath=e.errSchemaPath+"/additionalProperties",p.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,f,e.opts.jsonPointers);U=u+"["+f+"]";p.dataPathArr[y]=f;B=e.validate(p);p.baseId=j,e.util.varOccurences(B,g)<2?a+=" "+e.util.varReplace(B,g,U)+" ":a+=" var "+g+" = "+U+"; "+B+" ",c&&(a+=" if (!"+m+") break; ");}e.errorPath=q;}x&&(a+=" } "),a+=" }  ",c&&(a+=" if ("+m+") { ",h+="}");}var H=e.opts.useDefaults&&!e.compositeRule;if(P.length){var K=P;if(K)for(var G,J=-1,Z=K.length-1;J<Z;){var X=s[G=K[J+=1]];if(e.opts.strictKeywords?"object"==typeof X&&Object.keys(X).length>0||!1===X:e.util.schemaHasRules(X,e.RULES.all)){var Y=e.util.getProperty(G),ee=(U=u+Y,H&&void 0!==X.default);p.schema=X,p.schemaPath=n+Y,p.errSchemaPath=l+"/"+e.util.escapeFragment(G),p.errorPath=e.util.getPath(e.errorPath,G,e.opts.jsonPointers),p.dataPathArr[y]=e.util.toQuotedString(G);B=e.validate(p);if(p.baseId=j,e.util.varOccurences(B,g)<2){B=e.util.varReplace(B,g,U);var re=U;}else {re=g;a+=" var "+g+" = "+U+"; ";}if(ee)a+=" "+B+" ";else {if(A&&A[G]){a+=" if ( "+re+" === undefined ",$&&(a+=" || ! Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(G)+"') "),a+=") { "+m+" = false; ";q=e.errorPath,M=l;var te,ae=e.util.escapeQuotes(G);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(q,G,e.opts.jsonPointers)),l=e.errSchemaPath+"/required",(te=te||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+ae+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+ae+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";W=a;a=te.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+W+"]); ":a+=" validate.errors = ["+W+"]; return false; ":a+=" var err = "+W+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=M,e.errorPath=q,a+=" } else { ";}else c?(a+=" if ( "+re+" === undefined ",$&&(a+=" || ! Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(G)+"') "),a+=") { "+m+" = true; } else { "):(a+=" if ("+re+" !== undefined ",$&&(a+=" &&   Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(G)+"') "),a+=" ) { ");a+=" "+B+" } ";}}c&&(a+=" if ("+m+") { ",h+="}");}}if(E.length){var oe=E;if(oe)for(var ie,se=-1,ne=oe.length-1;se<ne;){X=w[ie=oe[se+=1]];if(e.opts.strictKeywords?"object"==typeof X&&Object.keys(X).length>0||!1===X:e.util.schemaHasRules(X,e.RULES.all)){p.schema=X,p.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(ie),p.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(ie),a+=$?" "+b+" = "+b+" || Object.keys("+u+"); for (var "+v+"=0; "+v+"<"+b+".length; "+v+"++) { var "+f+" = "+b+"["+v+"]; ":" for (var "+f+" in "+u+") { ",a+=" if ("+e.usePattern(ie)+".test("+f+")) { ",p.errorPath=e.util.getPathExpr(e.errorPath,f,e.opts.jsonPointers);U=u+"["+f+"]";p.dataPathArr[y]=f;B=e.validate(p);p.baseId=j,e.util.varOccurences(B,g)<2?a+=" "+e.util.varReplace(B,g,U)+" ":a+=" var "+g+" = "+U+"; "+B+" ",c&&(a+=" if (!"+m+") break; "),a+=" } ",c&&(a+=" else "+m+" = true; "),a+=" }  ",c&&(a+=" if ("+m+") { ",h+="}");}}}return c&&(a+=" "+h+" if ("+d+" == errors) {"),a},propertyNames:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="errs__"+o,p=e.util.copy(e);p.level++;var h="valid"+p.level;if(a+="var "+d+" = errors;",e.opts.strictKeywords?"object"==typeof s&&Object.keys(s).length>0||!1===s:e.util.schemaHasRules(s,e.RULES.all)){p.schema=s,p.schemaPath=n,p.errSchemaPath=l;var m="key"+o,f="idx"+o,v="i"+o,y="' + "+m+" + '",g="data"+(p.dataLevel=e.dataLevel+1),b="dataProperties"+o,P=e.opts.ownProperties,w=e.baseId;P&&(a+=" var "+b+" = undefined; "),a+=P?" "+b+" = "+b+" || Object.keys("+u+"); for (var "+f+"=0; "+f+"<"+b+".length; "+f+"++) { var "+m+" = "+b+"["+f+"]; ":" for (var "+m+" in "+u+") { ",a+=" var startErrs"+o+" = errors; ";var E=m,S=e.compositeRule;e.compositeRule=p.compositeRule=!0;var x=e.validate(p);p.baseId=w,e.util.varOccurences(x,g)<2?a+=" "+e.util.varReplace(x,g,E)+" ":a+=" var "+g+" = "+E+"; "+x+" ",e.compositeRule=p.compositeRule=S,a+=" if (!"+h+") { for (var "+v+"=startErrs"+o+"; "+v+"<errors; "+v+"++) { vErrors["+v+"].propertyName = "+m+"; }   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'propertyNames' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { propertyName: '"+y+"' } ",!1!==e.opts.messages&&(a+=" , message: 'property name \\'"+y+"\\' is invalid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?a+=" throw new ValidationError(vErrors); ":a+=" validate.errors = vErrors; return false; "),c&&(a+=" break; "),a+=" } }";}return c&&(a+="  if ("+d+" == errors) {"),a},required:function(e,r,t){var a=" ",o=e.level,i=e.dataLevel,s=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,p=e.opts.$data&&s&&s.$data;p&&(a+=" var schema"+o+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ");var h="schema"+o;if(!p)if(s.length<e.opts.loopRequired&&e.schema.properties&&Object.keys(e.schema.properties).length){var m=[],f=s;if(f)for(var v,y=-1,g=f.length-1;y<g;){v=f[y+=1];var b=e.schema.properties[v];b&&(e.opts.strictKeywords?"object"==typeof b&&Object.keys(b).length>0||!1===b:e.util.schemaHasRules(b,e.RULES.all))||(m[m.length]=v);}}else m=s;if(p||m.length){var P=e.errorPath,w=p||m.length>=e.opts.loopRequired,E=e.opts.ownProperties;if(c)if(a+=" var missing"+o+"; ",w){p||(a+=" var "+h+" = validate.schema"+n+"; ");var S="' + "+($="schema"+o+"["+(O="i"+o)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(P,$,e.opts.jsonPointers)),a+=" var "+d+" = true; ",p&&(a+=" if (schema"+o+" === undefined) "+d+" = true; else if (!Array.isArray(schema"+o+")) "+d+" = false; else {"),a+=" for (var "+O+" = 0; "+O+" < "+h+".length; "+O+"++) { "+d+" = "+u+"["+h+"["+O+"]] !== undefined ",E&&(a+=" &&   Object.prototype.hasOwnProperty.call("+u+", "+h+"["+O+"]) "),a+="; if (!"+d+") break; } ",p&&(a+="  }  "),a+="  if (!"+d+") {   ",(D=D||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+S+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";var x=a;a=D.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+x+"]); ":a+=" validate.errors = ["+x+"]; return false; ":a+=" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ";}else {a+=" if ( ";var F=m;if(F)for(var O=-1,_=F.length-1;O<_;){k=F[O+=1],O&&(a+=" || "),a+=" ( ( "+(C=u+(R=e.util.getProperty(k)))+" === undefined ",E&&(a+=" || ! Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(k)+"') "),a+=") && (missing"+o+" = "+e.util.toQuotedString(e.opts.jsonPointers?k:R)+") ) ";}a+=") {  ";var D;S="' + "+($="missing"+o)+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(P,$,!0):P+" + "+$),(D=D||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+S+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ";x=a;a=D.pop(),!e.compositeRule&&c?e.async?a+=" throw new ValidationError(["+x+"]); ":a+=" validate.errors = ["+x+"]; return false; ":a+=" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ";}else if(w){p||(a+=" var "+h+" = validate.schema"+n+"; ");var $;S="' + "+($="schema"+o+"["+(O="i"+o)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(P,$,e.opts.jsonPointers)),p&&(a+=" if ("+h+" && !Array.isArray("+h+")) {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+S+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if ("+h+" !== undefined) { "),a+=" for (var "+O+" = 0; "+O+" < "+h+".length; "+O+"++) { if ("+u+"["+h+"["+O+"]] === undefined ",E&&(a+=" || ! Object.prototype.hasOwnProperty.call("+u+", "+h+"["+O+"]) "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+S+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",p&&(a+="  }  ");}else {var j=m;if(j)for(var k,A=-1,I=j.length-1;A<I;){k=j[A+=1];var R=e.util.getProperty(k),C=(S=e.util.escapeQuotes(k),u+R);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(P,k,e.opts.jsonPointers)),a+=" if ( "+C+" === undefined ",E&&(a+=" || ! Object.prototype.hasOwnProperty.call("+u+", '"+e.util.escapeQuotes(k)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+S+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";}}e.errorPath=P;}else c&&(a+=" if (true) {");return a},uniqueItems:function(e,r,t){var a,o=" ",i=e.level,s=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(s||""),p="valid"+i,h=e.opts.$data&&n&&n.$data;if(h?(o+=" var schema"+i+" = "+e.util.getData(n.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=n,(n||h)&&!1!==e.opts.uniqueItems){h&&(o+=" var "+p+"; if ("+a+" === false || "+a+" === undefined) "+p+" = true; else if (typeof "+a+" != 'boolean') "+p+" = false; else { "),o+=" var i = "+d+".length , "+p+" = true , j; if (i > 1) { ";var m=e.schema.items&&e.schema.items.type,f=Array.isArray(m);if(!m||"object"==m||"array"==m||f&&(m.indexOf("object")>=0||m.indexOf("array")>=0))o+=" outer: for (;i--;) { for (j = i; j--;) { if (equal("+d+"[i], "+d+"[j])) { "+p+" = false; break outer; } } } ";else {o+=" var itemIndices = {}, item; for (;i--;) { var item = "+d+"[i]; ";var v="checkDataType"+(f?"s":"");o+=" if ("+e.util[v](m,"item",e.opts.strictNumbers,!0)+") continue; ",f&&(o+=" if (typeof item == 'string') item = '\"' + item; "),o+=" if (typeof itemIndices[item] == 'number') { "+p+" = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";}o+=" } ",h&&(o+="  }  "),o+=" if (!"+p+") {   ";var y=y||[];y.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'uniqueItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { i: i, j: j } ",!1!==e.opts.messages&&(o+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),e.opts.verbose&&(o+=" , schema:  ",o+=h?"validate.schema"+l:""+n,o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var g=o;o=y.pop(),!e.compositeRule&&u?e.async?o+=" throw new ValidationError(["+g+"]); ":o+=" validate.errors = ["+g+"]; return false; ":o+=" var err = "+g+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } ",u&&(o+=" else { ");}else u&&(o+=" if (true) { ");return o},validate:ce},Be=j.toHash,He=["multipleOf","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","additionalItems","maxItems","minItems","uniqueItems","maxProperties","minProperties","required","additionalProperties","enum","format","const"],Ke=function(e,r){for(var t=0;t<r.length;t++){e=JSON.parse(JSON.stringify(e));var a,o=r[t].split("/"),i=e;for(a=1;a<o.length;a++)i=i[o[a]];for(a=0;a<He.length;a++){var s=He[a],n=i[s];n&&(i[s]={anyOf:[n,{$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"}]});}}return e},Ge=ie.MissingRef,Je=function e(r,t,a){var o=this;if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");"function"==typeof t&&(a=t,t=void 0);var i=s(r).then((function(){var e=o._addSchema(r,void 0,t);return e.validate||function e(r){try{return o._compile(r)}catch(e){if(e instanceof Ge)return a(e);throw e}function a(a){var i=a.missingSchema;if(c(i))throw new Error("Schema "+i+" is loaded but "+a.missingRef+" cannot be resolved");var n=o._loadingSchemas[i];return n||(n=o._loadingSchemas[i]=o._opts.loadSchema(i)).then(l,l),n.then((function(e){if(!c(i))return s(e).then((function(){c(i)||o.addSchema(e,i,void 0,t);}))})).then((function(){return e(r)}));function l(){delete o._loadingSchemas[i];}function c(e){return o._refs[e]||o._schemas[e]}}}(e)}));a&&i.then((function(e){a(null,e);}),a);return i;function s(r){var t=r.$schema;return t&&!o.getSchema(t)?e.call(o,{$ref:t},!0):Promise.resolve()}};var Ze=function(e,r,t){var a,o,i=" ",s=e.level,n=e.dataLevel,l=e.schema[r],c=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,d=!e.opts.allErrors,p="data"+(n||""),h="valid"+s,m="errs__"+s,f=e.opts.$data&&l&&l.$data;f?(i+=" var schema"+s+" = "+e.util.getData(l.$data,n,e.dataPathArr)+"; ",o="schema"+s):o=l;var v,y,g,b,P,w="definition"+s,E=this.definition,S="";if(f&&E.$data){P="keywordValidate"+s;var x=E.validateSchema;i+=" var "+w+" = RULES.custom['"+r+"'].definition; var "+P+" = "+w+".validate;";}else {if(!(b=e.useCustomRule(this,l,e.schema,e)))return;o="validate.schema"+c,P=b.code,v=E.compile,y=E.inline,g=E.macro;}var F=P+".errors",O="i"+s,_="ruleErr"+s,D=E.async;if(D&&!e.async)throw new Error("async keyword in sync schema");if(y||g||(i+=F+" = null;"),i+="var "+m+" = errors;var "+h+";",f&&E.$data&&(S+="}",i+=" if ("+o+" === undefined) { "+h+" = true; } else { ",x&&(S+="}",i+=" "+h+" = "+w+".validateSchema("+o+"); if ("+h+") { ")),y)E.statements?i+=" "+b.validate+" ":i+=" "+h+" = "+b.validate+"; ";else if(g){var $=e.util.copy(e);S="";$.level++;var j="valid"+$.level;$.schema=b.validate,$.schemaPath="";var k=e.compositeRule;e.compositeRule=$.compositeRule=!0;var A=e.validate($).replace(/validate\.schema/g,P);e.compositeRule=$.compositeRule=k,i+=" "+A;}else {(N=N||[]).push(i),i="",i+="  "+P+".call( ",e.opts.passContext?i+="this":i+="self",v||!1===E.schema?i+=" , "+p+" ":i+=" , "+o+" , "+p+" , validate.schema"+e.schemaPath+" ",i+=" , (dataPath || '')",'""'!=e.errorPath&&(i+=" + "+e.errorPath);var I=n?"data"+(n-1||""):"parentData",R=n?e.dataPathArr[n]:"parentDataProperty",C=i+=" , "+I+" , "+R+" , rootData )  ";i=N.pop(),!1===E.errors?(i+=" "+h+" = ",D&&(i+="await "),i+=C+"; "):i+=D?" var "+(F="customErrors"+s)+" = null; try { "+h+" = await "+C+"; } catch (e) { "+h+" = false; if (e instanceof ValidationError) "+F+" = e.errors; else throw e; } ":" "+F+" = null; "+h+" = "+C+"; ";}if(E.modifying&&(i+=" if ("+I+") "+p+" = "+I+"["+R+"];"),i+=""+S,E.valid)d&&(i+=" if (true) { ");else {var N;i+=" if ( ",void 0===E.valid?(i+=" !",i+=g?""+j:""+h):i+=" "+!E.valid+" ",i+=") { ",a=this.keyword,(N=N||[]).push(i),i="",(N=N||[]).push(i),i="",!1!==e.createErrors?(i+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { keyword: '"+this.keyword+"' } ",!1!==e.opts.messages&&(i+=" , message: 'should pass \""+this.keyword+"\" keyword validation' "),e.opts.verbose&&(i+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),i+=" } "):i+=" {} ";var L=i;i=N.pop(),!e.compositeRule&&d?e.async?i+=" throw new ValidationError(["+L+"]); ":i+=" validate.errors = ["+L+"]; return false; ":i+=" var err = "+L+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";var T=i;i=N.pop(),y?E.errors?"full"!=E.errors&&(i+="  for (var "+O+"="+m+"; "+O+"<errors; "+O+"++) { var "+_+" = vErrors["+O+"]; if ("+_+".dataPath === undefined) "+_+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+_+".schemaPath === undefined) { "+_+'.schemaPath = "'+u+'"; } ',e.opts.verbose&&(i+=" "+_+".schema = "+o+"; "+_+".data = "+p+"; "),i+=" } "):!1===E.errors?i+=" "+T+" ":(i+=" if ("+m+" == errors) { "+T+" } else {  for (var "+O+"="+m+"; "+O+"<errors; "+O+"++) { var "+_+" = vErrors["+O+"]; if ("+_+".dataPath === undefined) "+_+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+_+".schemaPath === undefined) { "+_+'.schemaPath = "'+u+'"; } ',e.opts.verbose&&(i+=" "+_+".schema = "+o+"; "+_+".data = "+p+"; "),i+=" } } "):g?(i+="   var err =   ",!1!==e.createErrors?(i+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { keyword: '"+this.keyword+"' } ",!1!==e.opts.messages&&(i+=" , message: 'should pass \""+this.keyword+"\" keyword validation' "),e.opts.verbose&&(i+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),i+=" } "):i+=" {} ",i+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&d&&(e.async?i+=" throw new ValidationError(vErrors); ":i+=" validate.errors = vErrors; return false; ")):!1===E.errors?i+=" "+T+" ":(i+=" if (Array.isArray("+F+")) { if (vErrors === null) vErrors = "+F+"; else vErrors = vErrors.concat("+F+"); errors = vErrors.length;  for (var "+O+"="+m+"; "+O+"<errors; "+O+"++) { var "+_+" = vErrors["+O+"]; if ("+_+".dataPath === undefined) "+_+".dataPath = (dataPath || '') + "+e.errorPath+";  "+_+'.schemaPath = "'+u+'";  ',e.opts.verbose&&(i+=" "+_+".schema = "+o+"; "+_+".data = "+p+"; "),i+=" } } else { "+T+" } "),i+=" } ",d&&(i+=" else { ");}return i},Xe="http://json-schema.org/draft-07/schema#",Ye="http://json-schema.org/draft-07/schema#",er="Core schema meta-schema",rr={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},tr=["object","boolean"],ar={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},or={$schema:Xe,$id:Ye,title:er,definitions:rr,type:tr,properties:ar,default:!0},ir=O(Object.freeze({__proto__:null,$schema:Xe,$id:Ye,title:er,definitions:rr,type:tr,properties:ar,default:or})),sr={$id:"https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",definitions:{simpleTypes:ir.definitions.simpleTypes},type:"object",dependencies:{schema:["validate"],$data:["validate"],statements:["inline"],valid:{not:{required:["macro"]}}},properties:{type:ir.properties.type,schema:{type:"boolean"},statements:{type:"boolean"},dependencies:{type:"array",items:{type:"string"}},metaSchema:{type:"object"},modifying:{type:"boolean"},valid:{type:"boolean"},$data:{type:"boolean"},async:{type:"boolean"},errors:{anyOf:[{type:"boolean"},{const:"full"}]}}},nr=/^[a-z_$][a-z0-9_$-]*$/i,lr=function(e,r){var t=this.RULES;if(t.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!nr.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(r){this.validateKeyword(r,!0);var a=r.type;if(Array.isArray(a))for(var o=0;o<a.length;o++)s(e,a[o],r);else s(e,a,r);var i=r.metaSchema;i&&(r.$data&&this._opts.$data&&(i={anyOf:[i,{$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"}]}),r.validateSchema=this.compile(i,!0));}function s(e,r,a){for(var o,i=0;i<t.length;i++){var s=t[i];if(s.type==r){o=s;break}}o||(o={type:r,rules:[]},t.push(o));var n={keyword:e,definition:a,custom:!0,code:Ze,implements:a.implements};o.rules.push(n),t.custom[e]=n;}return t.keywords[e]=t.all[e]=!0,this},cr=function(e){var r=this.RULES.custom[e];return r?r.definition:this.RULES.keywords[e]||!1},ur=function(e){var r=this.RULES;delete r.keywords[e],delete r.all[e],delete r.custom[e];for(var t=0;t<r.length;t++)for(var a=r[t].rules,o=0;o<a.length;o++)if(a[o].keyword==e){a.splice(o,1);break}return this},dr=function e(r,t){e.errors=null;var a=this._validateKeyword=this._validateKeyword||this.compile(sr,!0);if(a(r))return !0;if(e.errors=a.errors,t)throw new Error("custom keyword definition is invalid: "+this.errorsText(a.errors));return !1};var pr="http://json-schema.org/draft-07/schema#",hr="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",mr="Meta-schema for $data reference (JSON Schema extension proposal)",fr=["$data"],vr={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},yr={$schema:pr,$id:hr,description:mr,type:"object",required:fr,properties:vr,additionalProperties:!1},gr=O(Object.freeze({__proto__:null,$schema:pr,$id:hr,description:mr,type:"object",required:fr,properties:vr,additionalProperties:!1,default:yr})),br=Sr;Sr.prototype.validate=function(e,r){var t;if("string"==typeof e){if(!(t=this.getSchema(e)))throw new Error('no schema with key or ref "'+e+'"')}else {var a=this._addSchema(e);t=a.validate||this._compile(a);}var o=t(r);!0!==t.$async&&(this.errors=t.errors);return o},Sr.prototype.compile=function(e,r){var t=this._addSchema(e,void 0,r);return t.validate||this._compile(t)},Sr.prototype.addSchema=function(e,r,t,a){if(Array.isArray(e)){for(var o=0;o<e.length;o++)this.addSchema(e[o],void 0,t,a);return this}var i=this._getId(e);if(void 0!==i&&"string"!=typeof i)throw new Error("schema id must be string");return $r(this,r=B.normalizeId(r||i)),this._schemas[r]=this._addSchema(e,t,a,!0),this},Sr.prototype.addMetaSchema=function(e,r,t){return this.addSchema(e,r,t,!0),this},Sr.prototype.validateSchema=function(e,r){var t=e.$schema;if(void 0!==t&&"string"!=typeof t)throw new Error("$schema must be a string");if(!(t=t||this._opts.defaultMeta||function(e){var r=e._opts.meta;return e._opts.defaultMeta="object"==typeof r?e._getId(r)||r:e.getSchema(Pr)?Pr:void 0,e._opts.defaultMeta}(this)))return this.logger.warn("meta-schema not available"),this.errors=null,!0;var a=this.validate(t,e);if(!a&&r){var o="schema is invalid: "+this.errorsText();if("log"!=this._opts.validateSchema)throw new Error(o);this.logger.error(o);}return a},Sr.prototype.getSchema=function(e){var r=xr(this,e);switch(typeof r){case"object":return r.validate||this._compile(r);case"string":return this.getSchema(r);case"undefined":return function(e,r){var t=B.schema.call(e,{schema:{}},r);if(t){var a=t.schema,o=t.root,i=t.baseId,s=pe.call(e,a,o,void 0,i);return e._fragments[r]=new Q({ref:r,fragment:!0,schema:a,root:o,baseId:i,validate:s}),s}}(this,e)}},Sr.prototype.removeSchema=function(e){if(e instanceof RegExp)return Fr(this,this._schemas,e),Fr(this,this._refs,e),this;switch(typeof e){case"undefined":return Fr(this,this._schemas),Fr(this,this._refs),this._cache.clear(),this;case"string":var r=xr(this,e);return r&&this._cache.del(r.cacheKey),delete this._schemas[e],delete this._refs[e],this;case"object":var t=this._opts.serialize,a=t?t(e):e;this._cache.del(a);var o=this._getId(e);o&&(o=B.normalizeId(o),delete this._schemas[o],delete this._refs[o]);}return this},Sr.prototype.addFormat=function(e,r){"string"==typeof r&&(r=new RegExp(r));return this._formats[e]=r,this},Sr.prototype.errorsText=function(e,r){if(!(e=e||this.errors))return "No errors";for(var t=void 0===(r=r||{}).separator?", ":r.separator,a=void 0===r.dataVar?"data":r.dataVar,o="",i=0;i<e.length;i++){var s=e[i];s&&(o+=a+s.dataPath+" "+s.message+t);}return o.slice(0,-t.length)},Sr.prototype._addSchema=function(e,r,t,a){if("object"!=typeof e&&"boolean"!=typeof e)throw new Error("schema should be object or boolean");var o=this._opts.serialize,i=o?o(e):e,s=this._cache.get(i);if(s)return s;a=a||!1!==this._opts.addUsedSchema;var n=B.normalizeId(this._getId(e));n&&a&&$r(this,n);var l,c=!1!==this._opts.validateSchema&&!r;c&&!(l=n&&n==B.normalizeId(e.$schema))&&this.validateSchema(e,!0);var u=B.ids.call(this,e),d=new Q({id:n,schema:e,localRefs:u,cacheKey:i,meta:t});"#"!=n[0]&&a&&(this._refs[n]=d);this._cache.put(i,d),c&&l&&this.validateSchema(e,!0);return d},Sr.prototype._compile=function(e,r){if(e.compiling)return e.validate=o,o.schema=e.schema,o.errors=null,o.root=r||o,!0===e.schema.$async&&(o.$async=!0),o;var t,a;e.compiling=!0,e.meta&&(t=this._opts,this._opts=this._metaOpts);try{a=pe.call(this,e.schema,r,e.localRefs);}catch(r){throw delete e.validate,r}finally{e.compiling=!1,e.meta&&(this._opts=t);}return e.validate=a,e.refs=a.refs,e.refVal=a.refVal,e.root=a.root,a;function o(){var r=e.validate,t=r.apply(this,arguments);return o.errors=r.errors,t}},Sr.prototype.compileAsync=Je,Sr.prototype.addKeyword=lr,Sr.prototype.getKeyword=cr,Sr.prototype.removeKeyword=ur,Sr.prototype.validateKeyword=dr,Sr.ValidationError=ie.Validation,Sr.MissingRefError=ie.MissingRef,Sr.$dataMetaSchema=Ke;var Pr="http://json-schema.org/draft-07/schema",wr=["removeAdditional","useDefaults","coerceTypes","strictDefaults"],Er=["/properties"];function Sr(e){if(!(this instanceof Sr))return new Sr(e);var r,t;e=this._opts=j.copy(e)||{},function(e){var r=e._opts.logger;if(!1===r)e.logger={log:jr,warn:jr,error:jr};else {if(void 0===r&&(r=console),!("object"==typeof r&&r.log&&r.warn&&r.error))throw new Error("logger must implement log, warn and error methods");e.logger=r;}}(this),this._schemas={},this._refs={},this._fragments={},this._formats=Ie(e.format),this._cache=e.cache||new we,this._loadingSchemas={},this._compilations=[],this.RULES=((r=[{type:"number",rules:[{maximum:["exclusiveMaximum"]},{minimum:["exclusiveMinimum"]},"multipleOf","format"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","items","contains","uniqueItems"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","propertyNames",{properties:["additionalProperties","patternProperties"]}]},{rules:["$ref","const","enum","not","anyOf","oneOf","allOf","if"]}]).all=Be(t=["type","$comment"]),r.types=Be(["number","integer","string","array","object","boolean","null"]),r.forEach((function(e){e.rules=e.rules.map((function(e){var a;if("object"==typeof e){var o=Object.keys(e)[0];a=e[o],e=o,a.forEach((function(e){t.push(e),r.all[e]=!0;}));}return t.push(e),r.all[e]={keyword:e,code:Ue[e],implements:a}})),r.all.$comment={keyword:"$comment",code:Ue.$comment},e.type&&(r.types[e.type]=e);})),r.keywords=Be(t.concat(["$schema","$id","id","$data","$async","title","description","default","definitions","examples","readOnly","writeOnly","contentMediaType","contentEncoding","additionalItems","then","else"])),r.custom={},r),this._getId=function(e){switch(e.schemaId){case"auto":return Dr;case"id":return Or;default:return _r}}(e),e.loopRequired=e.loopRequired||1/0,"property"==e.errorDataPath&&(e._errorDataPathProperty=!0),void 0===e.serialize&&(e.serialize=le),this._metaOpts=function(e){for(var r=j.copy(e._opts),t=0;t<wr.length;t++)delete r[wr[t]];return r}(this),e.formats&&function(e){for(var r in e._opts.formats){var t=e._opts.formats[r];e.addFormat(r,t);}}(this),e.keywords&&function(e){for(var r in e._opts.keywords){var t=e._opts.keywords[r];e.addKeyword(r,t);}}(this),function(e){var r;e._opts.$data&&(r=gr,e.addMetaSchema(r,r.$id,!0));if(!1===e._opts.meta)return;var t=ir;e._opts.$data&&(t=Ke(t,Er));e.addMetaSchema(t,Pr,!0),e._refs["http://json-schema.org/schema"]=Pr;}(this),"object"==typeof e.meta&&this.addMetaSchema(e.meta),e.nullable&&this.addKeyword("nullable",{metaSchema:{type:"boolean"}}),function(e){var r=e._opts.schemas;if(!r)return;if(Array.isArray(r))e.addSchema(r);else for(var t in r)e.addSchema(r[t],t);}(this);}function xr(e,r){return r=B.normalizeId(r),e._schemas[r]||e._refs[r]||e._fragments[r]}function Fr(e,r,t){for(var a in r){var o=r[a];o.meta||t&&!t.test(a)||(e._cache.del(o.cacheKey),delete r[a]);}}function Or(e){return e.$id&&this.logger.warn("schema $id ignored",e.$id),e.id}function _r(e){return e.id&&this.logger.warn("schema id ignored",e.id),e.$id}function Dr(e){if(e.$id&&e.id&&e.$id!=e.id)throw new Error("schema $id is different from id");return e.$id||e.id}function $r(e,r){if(e._schemas[r]||e._refs[r])throw new Error('schema with key or id "'+r+'" already exists')}function jr(){}var kr={$$currentLocalizeFn:function(e){if(e&&e.length)for(var r=0;r<e.length;r+=1){var t=e[r],a=void 0,o=void 0,i=void 0;switch(t.keyword){case"$ref":a="无法找到引用".concat(t.params.ref);break;case"additionalItems":a="",o=t.params.limit,a+="不允许超过".concat(o,"个元素");break;case"additionalProperties":a="不允许有额外的属性";break;case"anyOf":a="数据应为 anyOf 所指定的其中一个";break;case"const":a="应当等于常量";break;case"contains":a="应当包含一个有效项";break;case"custom":a='应当通过 "'.concat(t.keyword,' 关键词校验"');break;case"dependencies":a="",o=t.params.depsCount,a+="应当拥有属性".concat(t.params.property,"的依赖属性").concat(t.params.deps);break;case"enum":a="应当是预设定的枚举值之一";break;case"exclusiveMaximum":case"exclusiveMinimum":a="",i="".concat(t.params.comparison," ").concat(t.params.limit),a+="应当为 ".concat(i);break;case"false schema":a="布尔模式出错";break;case"format":a='应当匹配格式 "'.concat(t.params.format,'"');break;case"formatExclusiveMaximum":a="formatExclusiveMaximum 应当是布尔值";break;case"formatExclusiveMinimum":a="formatExclusiveMinimum 应当是布尔值";break;case"formatMaximum":case"formatMinimum":a="",i="".concat(t.params.comparison," ").concat(t.params.limit),a+="应当是 ".concat(i);break;case"if":a='应当匹配模式 "'.concat(t.params.failingKeyword,'" ');break;case"maximum":a="",i="".concat(t.params.comparison," ").concat(t.params.limit),a+="应当为 ".concat(i);break;case"maxItems":a="",o=t.params.limit,a+="不应多于 ".concat(o," 个项");break;case"maxLength":a="",o=t.params.limit,a+="不应多于 ".concat(o," 个字符");break;case"maxProperties":a="",o=t.params.limit,a+="不应有多于 ".concat(o," 个属性");break;case"minimum":a="",i="".concat(t.params.comparison," ").concat(t.params.limit),a+="应当为 ".concat(i);break;case"minItems":a="",o=t.params.limit,a+="不应少于 ".concat(o," 个项");break;case"minLength":a="",o=t.params.limit,a+="不应少于 ".concat(o," 个字符");break;case"minProperties":a="",o=t.params.limit,a+="不应有少于 ".concat(o," 个属性");break;case"multipleOf":a="应当是 ".concat(t.params.multipleOf," 的整数倍");break;case"not":a='不应当匹配 "not" schema';break;case"oneOf":a='只能匹配一个 "oneOf" 中的 schema';break;case"pattern":a='应当匹配模式 "'.concat(t.params.pattern,'"');break;case"patternRequired":a="应当有属性匹配模式 ".concat(t.params.missingPattern);break;case"propertyNames":a="属性名 '".concat(t.params.propertyName,"' 无效");break;case"required":a="应当有必需属性 ".concat(t.params.missingProperty);break;case"switch":a="由于 ".concat(t.params.caseIndex,' 失败，未通过 "switch" 校验, ');break;case"type":a="应当是 ".concat(t.params.type," 类型");break;case"uniqueItems":a="不应当含有重复项 (第 ".concat(t.params.j," 项与第 ").concat(t.params.i," 项是重复的)");break;default:continue}t.message=a;}},getCurrentLocalize:function(){return this.$$currentLocalizeFn},useLocal:function(e){this.$$currentLocalizeFn=e;}};function Ar(e,t){try{if("object"===r(t))return e.fill(null).map((function(){return JSON.parse(JSON.stringify(t))}))}catch(e){}}function Ir(e,r){return e.filter((function(e){return r.includes(e)}))}function Rr(e,r,t){var a=x(e.$ref,r);e.$ref;var o=s(e,["$ref"]);return Tr(i(i({},a),o),r,t)}function Cr(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length<2)return r[0];for(var a={},o=[].concat(r),i=function(){var e=p$1(o[0])?o[0]:{},r=p$1(o[1])?o[1]:{};a=Object.assign({},e),Object.keys(r).reduce((function(t,a){var o=e[a],i=r[a];if(p$1(o)||p$1(i))if(p$1(o)&&p$1(i))t[a]=Cr(o,i);else {var s=n(p$1(o)?[o,i]:[i,o],2),l=s[0],c=s[1];t[a]="additionalProperties"===a?!0===c&&l:l;}else if(Array.isArray(o)||Array.isArray(i))if(Array.isArray(o)&&Array.isArray(i)){if(p$1(o[0])||p$1(i[0]))throw new Error("暂不支持如上数组对象元素合并");var u=Ir([].concat(o),[].concat(i));if(u.length<=0)throw new Error("无法合并如上数据");0===u.length&&"type"===a?t[a]=u[0]:t[a]=u;}else {var d=n(Array.isArray(o)?[o,i]:[i,o],2),h=d[0],m=d[1];if(void 0===m)t[a]=h;else {if(!h.includes(m))throw new Error("无法合并如下数据");t[a]=m;}}else if(void 0!==o&&void 0!==i)if("maxLength"===a||"maximum"===a||"maxItems"===a||"exclusiveMaximum"===a||"maxProperties"===a)t[a]=Math.min(o,i);else if("minLength"===a||"minimum"===a||"minItems"===a||"exclusiveMinimum"===a||"minProperties"===a)t[a]=Math.max(o,i);else if("multipleOf"===a)t[a]=E(o,i);else {if(o!==i)throw new Error("无法合并如下数据");t[a]=o;}else t[a]=void 0===o?i:o;return t}),a),o.splice(0,2,a);};o.length>=2;)i();return a}function Nr(e,r,t){var a=i(i({},e),{},{allOf:e.allOf.map((function(e){return Tr(e,r,t)}))});try{var o=a.allOf,n=s(a,["allOf"]);return Cr.apply(void 0,[n].concat(l(o)))}catch(e){return a.allOf,s(a,["allOf"])}}function Lr(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.hasOwnProperty("allOf")&&(e=Nr(e,r,t)),e.hasOwnProperty("$ref")&&(e=Rr(e,r,t)),e}function Tr(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p$1(e)?Lr(e,r,t):{}}function zr(e){return e?"".concat("__pathRoot",".").concat(e).replace(/\./g,"_"):"__pathRoot"}function qr(e){return ""===e}function Vr(e,r){return ""===e?r:[e,r].join(".")}function Mr(r,t){Vue.delete(r,t);}function Wr(r,t,a){for(var o=t.split("."),i=0;i<o.length;i+=1){if(o.length-i<2){Vue.set(r,o[o.length-1],a);break}r=r[o[i]];}}function Qr(e,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=r.split("."),o=0;o<a.length-t;o+=1){if(void 0===e)return;e=""===a[o]?e:e[a[o]];}return e}function Ur(e){return e}var Br=Object.freeze({__proto__:null,nodePath2ClassName:zr,isRootNodePath:qr,computedCurPath:Vr,deletePathVal:Mr,setPathVal:Wr,getPathVal:Qr,path2prop:Ur}),Hr=/{{(.*)}}/;function Kr(e,r,t,a){if(void 0!==t){var o=Hr.exec(t);if(Hr.lastIndex=0,o){var i=o[1].trim();return new Function("parentFormData","rootFormData","return ".concat(i))(Qr(e,r,1),e)}return a()}}function Gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.schema,t=e.uiSchema,a=arguments.length>1?arguments[1]:void 0,o=Yr({schema:r,uiSchema:t,containsSpec:!1});return ["title","description"].reduce((function(e,r){return o[r]&&(e["ui:".concat(r)]=String(o[r]).replace(/\$index/g,a+1)),e}),{})}function Jr(e){var r=e.schema,t=void 0===r?{}:r,a=e.uiSchema,o=void 0===a?{}:a,i=e.curNodePath,s=void 0===i?"":i,n=e.rootFormData,l=void 0===n?{}:n,c=o["ui:widget"]||t["ui:widget"],u=o["ui:hidden"]||t["ui:hidden"];return "HiddenWidget"===c||"hidden"===c||!!Kr(l,s,u,(function(){return "function"==typeof u?u(Qr(l,s,1),l):u}))}function Zr(e,t){var a=t.schema,o=void 0===a?{}:a,i=t.uiSchema,s=void 0===i?{}:i,n=o["ui:field"]||s["ui:field"];if("function"==typeof n||"object"===r(n)||"string"==typeof n)return {field:n,fieldProps:s["ui:fieldProps"]||o["ui:fieldProps"]};var l=e[f(o)];if(l)return {field:l};if(!l&&(o.anyOf||o.oneOf))return {field:null};throw new Error("不支持的field类型 ".concat(o.type))}function Xr(e){var r=e.schema,a=void 0===r?{}:r,o=e.uiSchema,s=void 0===o?{}:o,n=e.curNodePath,c=e.rootFormData,u=void 0===c?{}:c;return Object.assign.apply(Object,[{}].concat(l([a,s].map((function(e){return Object.keys(e).reduce((function(r,a){var o=e[a];return "ui:options"===a&&p$1(o)?i(i({},r),o):0===a.indexOf("ui:")?i(i({},r),{},t({},a.substring(3),void 0===n?o:Kr(u,n,o,(function(){return o})))):r}),{})})))))}function Yr(e){var r=e.schema,t=void 0===r?{}:r,a=e.uiSchema,o=void 0===a?{}:a,s=e.containsSpec,n=void 0===s||s,l=e.curNodePath,c=e.rootFormData,u={};return n&&(void 0!==t.multipleOf&&(u.step=t.multipleOf),(t.minimum||0===t.minimum)&&(u.min=t.minimum),(t.maximum||0===t.maximum)&&(u.max=t.maximum),(t.minLength||0===t.minLength)&&(u.minlength=t.minLength),(t.maxLength||0===t.maxLength)&&(u.maxlength=t.maxLength),"date-time"!==t.format&&"date"!==t.format||("array"===t.type?(u.isRange=!0,u.isNumberValue=!(t.items&&"string"===t.items.type)):u.isNumberValue=!("string"===t.type))),i(i({title:t.title,description:t.description},u),Xr({schema:t,uiSchema:o,curNodePath:l,rootFormData:c}))}function et(e){var r=e.schema,t=void 0===r?{}:r,a=e.uiSchema,o=void 0===a?{}:a,i=e.curNodePath,n=e.rootFormData,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=Yr({schema:t,uiSchema:o,curNodePath:i,rootFormData:n});!c.widget&&l&&Object.assign(c,l({schema:t,uiSchema:o}));var u=c.widget,d=c.title,p=c.labelWidth,h=c.description,m=c.attrs,f=c.class,v=c.style,y=c.fieldAttrs,g=c.fieldStyle,b=c.fieldClass,P=c.emptyValue,w=c.width,E=c.getWidget,S=s(c,["widget","title","labelWidth","description","attrs","class","style","fieldAttrs","fieldStyle","fieldClass","emptyValue","width","getWidget"]);return {widget:u,label:d,labelWidth:p,description:h,widgetAttrs:m,widgetClass:f,widgetStyle:v,fieldAttrs:y,width:w,fieldStyle:g,fieldClass:b,emptyValue:P,getWidget:E,uiProps:S}}function rt(e){var r=e.schema,a=void 0===r?{}:r,o=e.uiSchema,s=void 0===o?{}:o,n=e.errorSchema,c=void 0===n?{}:n;return Object.assign.apply(Object,[{}].concat(l([a,s,c].map((function(e){return Object.keys(e).reduce((function(r,a){var o=e[a];return "err:options"===a&&p$1(o)?i(i({},r),o):0===a.indexOf("err:")?i(i({},r),{},t({},a.substring(4),o)):r}),{})})))))}function tt(e,r){if(!Array.isArray(r))return e;var t,a=function(e){return e.reduce((function(e,r){return e[r]=!0,e}),{})},o=a(e),i=r.filter((function(e){return "*"===e||o[e]})),s=a(i),n=e.filter((function(e){return !s[e]})),c=i.indexOf("*");if(-1===c){if(n.length)throw new Error("uiSchema order list does not contain ".concat((t=n).length>1?"properties '".concat(t.join("', '"),"'"):"property '".concat(t[0],"'")));return i}if(c!==i.lastIndexOf("*"))throw new Error("uiSchema order list contains more than one wildcard item");var u=l(i);return u.splice.apply(u,[c,1].concat(l(n))),u}function at(e){return Array.isArray(e.enum)&&1===e.enum.length||e.hasOwnProperty("const")}function ot(e){if(Array.isArray(e.enum)&&1===e.enum.length)return e.enum[0];if(e.hasOwnProperty("const"))return e.const;throw new Error("schema cannot be inferred as a constant")}function it(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Tr(e,r),a=t.oneOf||t.anyOf;return !!Array.isArray(t.enum)||!!Array.isArray(a)&&a.every((function(e){return at(e)}))}function st(e){return Array.isArray(e.items)&&e.items.length>0&&e.items.every((function(e){return p$1(e)}))}function nt(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return !(!e.uniqueItems||!e.items)&&it(e.items,r)}function lt(e){return e.additionalItems,p$1(e.additionalItems)}function ct(e,r,t,a){if(e.enum){var o=Xr({schema:e,uiSchema:r,curNodePath:t,rootFormData:a}).enumNames||e.enumNames;return e.enum.map((function(e,r){return {label:o&&o[r]||String(e),value:e}}))}var i=e.oneOf||e.anyOf,s=r.oneOf||r.anyOf;return i.map((function(e,r){var o=s&&s[r]?Xr({schema:e,uiSchema:s[r],curNodePath:t,rootFormData:a}):{},i=ot(e);return {label:o.title||e.title||String(i),value:i}}))}var ut=Object.freeze({__proto__:null,replaceArrayIndex:Gr,isHiddenWidget:Jr,getUiField:Zr,getUserUiOptions:Xr,getUiOptions:Yr,getWidgetConfig:et,getUserErrOptions:rt,orderProperties:tt,isConstant:at,toConstant:ot,isSelect:it,isFixedItems:st,isMultiSelect:nt,allowAdditionalItems:lt,optionsList:ct}),dt=mt(),pt=null,ht=null;function mt(){var e=new br({errorDataPath:"property",allErrors:!0,multipleOfPrecision:8,schemaId:"auto",unknownFormats:"ignore"});return e.addFormat("data-url",/^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/),e.addFormat("color",/^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/),e}function ft(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null===e?[]:e.map((function(e){var r=e.dataPath,t=e.keyword,a=e.message,o=e.params,i=e.schemaPath,s="".concat(r);return {name:t,property:s,message:a,params:o,stack:"".concat(s," ").concat(a).trim(),schemaPath:i}}))}function vt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.formData,t=e.schema,a=e.transformErrors,o=e.additionalMetaSchemas,i=void 0===o?[]:o,s=e.customFormats,n=void 0===s?{}:s,c=!v(ht,i),u=!v(pt,n);(c||u)&&(dt=mt()),i&&c&&Array.isArray(i)&&(dt.addMetaSchema(i),ht=i),n&&u&&p$1(n)&&(Object.keys(n).forEach((function(e){dt.addFormat(e,n[e]);})),pt=n);var d=null;try{dt.validate(t,r);}catch(e){d=e;}kr.getCurrentLocalize()(dt.errors);var h=ft(dt.errors);dt.errors=null;var m=d&&d.message&&"string"==typeof d.message&&d.message.includes("no schema with key or ref ");return m&&(h=[].concat(l(h),[{stack:d.message}])),"function"==typeof a&&(h=a(h)),{errors:h}}function yt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.formData,t=e.schema,a=e.uiSchema,o=e.transformErrors,i=e.additionalMetaSchemas,s=void 0===i?[]:i,n=e.customFormats,l=void 0===n?{}:n,c=e.errorSchema,u=void 0===c?{}:c,d=e.required,p=void 0!==d&&d,h=e.propPath,m=void 0===h?"":h,f=e.isOnlyFirstError,v=void 0===f||f,y="array"===t.type&&Array.isArray(r)&&0===r.length,g=void 0===r||y;if(p){if(g){var b={keyword:"required",params:{missingProperty:m}},P=rt({schema:t,uiSchema:a,errorSchema:u}).required;return P?b.message=P:kr.getCurrentLocalize()([b]),[b]}}else if(g&&!y)return [];var w=vt({formData:r,schema:t,transformErrors:o,additionalMetaSchemas:s,customFormats:l}).errors;w=w.filter((function(e){return ""===e.property&&!e.schemaPath.includes("#/anyOf/")&&!e.schemaPath.includes("#/oneOf/")||"additionalProperties"===e.name}));var E=rt({schema:t,uiSchema:a,errorSchema:u});return (v&&w.length>0?[w[0]]:w).reduce((function(e,r){return r.message=void 0!==E[r.name]?E[r.name]:r.message,e.push(r),e}),[])}function gt(e,r){try{return dt.validate(e,r)}catch(e){return !1}}function bt(e,r,t){for(var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=0;i<r.length;i++){var s=r[i];if(s.properties){var n={anyOf:Object.keys(s.properties).map((function(e){return {required:[e]}}))},l=void 0;if(s.anyOf){var c=a({},s);c.allOf?c.allOf=c.allOf.slice():c.allOf=[],c.allOf.push(n),l=c;}else l=Object.assign({},s,n);if(o||delete l.required,gt(l,e))return i}else if(gt(r[i],e))return i}return 0}var Pt=Object.freeze({__proto__:null,ajvValidateFormData:vt,validateFormDataAndTransformMsg:yt,isValid:gt,getMatchingOption:bt});function wt(e,r){if(Array.isArray(r))return Array.isArray(e)||(e=[]),r.map((function(r,t){return e[t]?wt(e[t],r):r}));if(p$1(r)){var t=Object.assign({},e);return Object.keys(r).reduce((function(t,a){return t[a]=wt(e?e[a]:{},r[a]),t}),t)}return r}function Et(e,r,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=p$1(e)?e:{},s=p$1(a)?a:{};"allOf"in i&&(i=Nr(i,t,s));var n=r;if(p$1(n)&&p$1(i.default))n=m(n,i.default);else if("default"in i)n=i.default;else {if("$ref"in i){var l=x(i.$ref,t);return Et(l,n,t,s,o)}if(st(i))n=i.items.map((function(e,a){return Et(e,Array.isArray(r)?r[a]:void 0,t,s,o)}));else if("oneOf"in i){var c=i.oneOf[bt(s,i.oneOf,t)];if(i.properties&&c.properties){var u=m(i,c);delete u.oneOf,i=u;}else i=c;}else if("anyOf"in i){var d=i.anyOf[bt(s,i.anyOf,t)];if(i.properties&&d.properties){var h=m(i,d);delete h.anyOf,i=h;}else i=d;}}switch(void 0===n&&(n=i.default),f(i)){case"null":return null;case"object":return Object.keys(i.properties||{}).reduce((function(e,r){var a=Et(i.properties[r],(n||{})[r],t,(s||{})[r],o);return (o||void 0!==a)&&(e[r]=a),e}),{});case"array":if(Array.isArray(n)&&(n=n.map((function(e,r){return Et(i.items[r]||i.additionalItems||{},e,t,{},o)}))),Array.isArray(a)&&(n=a.map((function(e,r){return Et(i.items,(n||{})[r],t,e,{},o)}))),i.minItems){if(nt(i,t))return n||[];var v=n?n.length:0;if(i.minItems>v){var y=n||[],g=Array.isArray(i.items)?i.additionalItems:i.items,b=Ar(new Array(i.minItems-v),Et(g,g.defaults,t,{},o));return y.concat(b)}}n=void 0===n?[]:n;}return n}function St(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!p$1(e))throw new Error("Invalid schema: ".concat(e));var o=Tr(e,t,r),i=Et(o,e.default,t,r,a);return void 0===r?i:p$1(r)||Array.isArray(r)?wt(i,r):0===r||!1===r||""===r?r:r||i}var xt={formFooter:{type:Object,default:function(){return {show:!0,okBtn:"保存",cancelBtn:"取消"}}},value:{type:null,default:function(){return {}},required:!0},formProps:{type:Object,default:function(){return {}}},schema:{type:Object,default:function(){return {}},required:!0},uiSchema:{type:Object,default:function(){return {}}},customFormats:{type:Object,default:function(){return {}}},customRule:{type:Function,default:null},errorSchema:{type:Object,default:function(){return {}}}},Ft={name:"FormFooter",props:{okBtn:{type:String,default:"保存"},cancelBtn:{type:String,default:"取消"},globalOptions:null},render:function(e){var r=this,t=this.$props,a=t.okBtn,o=t.cancelBtn,i=t.globalOptions.COMPONENT_MAP;return e(i.formItem,{class:{formFooter_item:!0}},[e(i.button,{on:{click:function(){r.$emit("onCancel");}}},o),e(i.button,{style:{marginLeft:"10px"},props:{type:"primary"},on:{click:function(){r.$emit("onSubmit");}}},a)])}},Ot={formProps:{type:null},globalOptions:{type:null},schema:{type:Object,default:function(){return {}}},uiSchema:{type:Object,default:function(){return {}}},errorSchema:{type:Object,default:function(){return {}}},customRule:{type:Function,default:null},customFormats:{type:Object,default:function(){return {}}},rootSchema:{type:Object,default:function(){return {}}},rootFormData:{type:null,default:function(){return {}}},curNodePath:{type:String,default:""},required:{type:Boolean,default:!1},needValidFieldGroup:{type:Boolean,default:!0}};var _t=function(e,r,t,a,o,i,s,n,l,c){"boolean"!=typeof s&&(l=n,n=s,s=!1);var u,d="function"==typeof t?t.options:t;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),a&&(d._scopeId=a),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(i);},d._ssrRegister=u):r&&(u=s?function(e){r.call(this,c(e,this.$root.$options.shadowRoot));}:function(e){r.call(this,n(e));}),u)if(d.functional){var p=d.render;d.render=function(e,r){return u.call(r),p(e,r)};}else {var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,u):[u];}return t},Dt={name:"FieldGroupWrap",props:{showTitle:{type:Boolean,default:!0},showDescription:{type:Boolean,default:!0},title:{type:String,default:""},description:{type:String,default:""}}},$t=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"fieldGroupWrap"},[[e.showTitle&&e.title?t("h3",{staticClass:"fieldGroupWrap_title"},[e._v("\n            "+e._s(e.title)+"\n        ")]):e._e(),e._v(" "),e.showDescription&&e.description?t("p",{staticClass:"fieldGroupWrap_des",domProps:{innerHTML:e._s(e.description)}}):e._e()],e._v(" "),t("div",{staticClass:"fieldGroupWrap_box"},[e._t("default")],2)],2)};$t._withStripped=!0;var jt=_t({render:$t,staticRenderFns:[]},void 0,Dt,void 0,!1,void 0,!1,void 0,void 0,void 0),kt={name:"Widget",props:{isFormData:{type:Boolean,default:!0},curValue:{type:null,default:0},schema:{type:Object,default:function(){return {}}},uiSchema:{type:Object,default:function(){return {}}},errorSchema:{type:Object,default:function(){return {}}},customFormats:{type:Object,default:function(){return {}}},customRule:{type:Function,default:null},widget:{type:[String,Function,Object],default:null},required:{type:Boolean,default:!1},emptyValue:{type:null,default:void 0},formatValue:{type:[Function],default:function(e){return {update:!0,value:e}}},rootFormData:{type:null},curNodePath:{type:String,default:""},label:{type:String,default:""},width:{type:String,default:""},labelWidth:{type:String,default:""},description:{type:String,default:""},widgetAttrs:{type:Object,default:function(){return {}}},widgetClass:{type:Object,default:function(){return {}}},widgetStyle:{type:Object,default:function(){return {}}},fieldAttrs:{type:Object,default:function(){return {}}},fieldClass:{type:Object,default:function(){return {}}},fieldStyle:{type:Object,default:function(){return {}}},uiProps:{type:Object,default:function(){return {}}},formProps:null,getWidget:null,globalOptions:null},computed:{value:{get:function(){return this.isFormData?Qr(this.rootFormData,this.curNodePath):this.curValue},set:function(e){var r=""===e||null===e?this.emptyValue:e;this.isFormData&&Wr(this.rootFormData,this.curNodePath,r),this.$emit("onChange",r);}}},created:function(){this.uiProps.enumOptions&&this.uiProps.enumOptions.length>0&&void 0===this.value&&this.value!==this.uiProps.enumOptions[0]&&(this.schema.items?this.value=[]:this.required&&(this.value=this.uiProps.enumOptions[0].value));},render:function(e){var r=this,t=qr(this.curNodePath),a=r.formProps&&"top"!==r.formProps.labelPosition,o=r.description?e("p",{domProps:{innerHTML:r.description},class:{genFromWidget_des:!0}}):null,s=r.globalOptions,n=s.COMPONENT_MAP,l=s.ICONS_MAP,c=a&&o?e(n.popover,{style:{margin:"0 2px",fontSize:"16px",cursor:"pointer"},props:{placement:"top",trigger:"hover"}},[o,e("i",{slot:"reference",class:l.question})]):null,u=i(i({},r.fieldStyle),r.width?{width:r.width,flexBasis:r.width,paddingRight:"10px"}:{});return e(n.formItem,{class:i(i({},r.fieldClass),{},{genFormItem:!0}),style:u,attrs:r.fieldAttrs,props:i({labelWidth:r.labelWidth},this.isFormData?{prop:t?"__$$root":r.curNodePath,rules:[{validator:function(e,a,o){t&&(a=r.rootFormData);var i=yt({formData:a,schema:r.$props.schema,uiSchema:r.$props.uiSchema,customFormats:r.$props.customFormats,errorSchema:r.errorSchema,required:r.required,propPath:r.curNodePath});if(i.length>0)return o(i[0].message);var s=r.$props.customRule;return s&&"function"==typeof s?s({field:r.curNodePath,value:a,rootFormData:r.rootFormData,callback:o}):o()},trigger:"blur"}]}:{}),scopedSlots:{error:function(r){return r.error?e("p",{class:{formItemErrorBox:!0},attrs:{title:r.error}},[r.error]):null}}},[r.label?e("span",{slot:"label",class:{genFormLabel:!0,genFormItemRequired:r.required}},["".concat(r.label),c,"".concat(r.formProps&&r.formProps.labelSuffix||"")]):null,a?null:o,e(r.widget,{style:r.widgetStyle,class:r.widgetClass,attrs:i(i(i({},r.widgetAttrs),r.uiProps),{},{value:this.value}),ref:"widgetRef",on:{"hook:mounted":function(){r.getWidget&&"function"==typeof r.getWidget&&r.getWidget.call(null,r.$refs.widgetRef);},input:function(e){var t=r.formatValue(e);t.update&&r.value!==t.value&&(r.value=t.value);}}})])}},At={name:"ObjectField",functional:!0,props:Ot,render:function(e,r){var t=r.props,a=t.schema,o=t.uiSchema,s=t.errorSchema,c=t.needValidFieldGroup,u=t.curNodePath,d=t.rootFormData,h=t.globalOptions,m=Yr({schema:a,uiSchema:o,curNodePath:u,rootFormData:d}),f=m.title,v=m.description,y=m.showTitle,g=m.showDescription,b=m.order,P=m.fieldClass,w=m.fieldAttrs,E=m.fieldStyle,S=m.onlyShowIfDependent,x=tt(Object.keys(a.properties||{}),b).map((function(t){var l=function(e){return Array.isArray(a.required)&&!!~a.required.indexOf(e)}(t),c=function(e){var r=!1,t=!1;return p$1(a.dependencies)&&(t=Object.entries(a.dependencies).some((function(t){var a=n(t,2),o=a[0],i=a[1],s=!(!Array.isArray(i)||!~i.indexOf(e));return r=r||s,s&&void 0!==Qr(d,u)[o]}))),{isDependency:r,curDependent:t}}(t),h=c.isDependency,m=c.curDependent;return h&&S&&!m?null:e(Ut,{key:t,props:i(i({},r.props),{},{schema:a.properties[t],uiSchema:o[t],errorSchema:s[t],required:l||m,curNodePath:Vr(u,t)})})}));return e(jt,{props:{title:f,description:v,showTitle:y,showDescription:g},class:i(i({},r.data.class),P),attrs:w,style:E},[e("template",{slot:"default"},[].concat(l(x),[c?e(kt,{key:"validateWidget-object",class:{validateWidget:!0,"validateWidget-object":!0},props:{schema:Object.entries(a).reduce((function(e,r){var t=n(r,2),o=t[0],i=t[1];return !1!==a.additionalProperties&&["properties","id","$id"].includes(o)||(e[o]=i),e}),{}),uiSchema:o,errorSchema:s,curNodePath:u,rootFormData:d,globalOptions:h}}):null]))])}},It={name:"StringField",props:Ot,functional:!0,render:function(e,r){var t=r.props,a=t.schema,o=t.uiSchema,s=t.curNodePath,n=t.rootFormData,l=t.globalOptions.WIDGET_MAP,c=it(a)&&ct(a,o,s,n),u=et({schema:a,uiSchema:o,curNodePath:s,rootFormData:n},(function(){var e="number"===a.type||"integer"===a.type;return {widget:c?l.common.select:l.formats[a.format]||(e?l.types.number:l.types.string)}}));return c&&!u.uiProps.enumOptions&&(u.uiProps.enumOptions=c),e(kt,i(i({},r.data),{},{props:i(i({},r.props),u)}))}},Rt={name:"NumberField",props:Ot,functional:!0,render:function(e,r){return e(It,r.data)}},Ct={name:"IntegerField",props:Ot,functional:!0,render:function(e,r){return e(It,r.data)}},Nt={name:"BooleanField",props:Ot,functional:!0,render:function(e,r){var t=r.props,a=t.schema,o=t.uiSchema,s=t.curNodePath,n=t.rootFormData,l=t.globalOptions,c=ct({enumNames:a.enumNames||["true","false"],enum:a.enum||[!0,!1]},o,s,n),u=et({schema:a,uiSchema:o,curNodePath:s,rootFormData:n},(function(){return {widget:l.WIDGET_MAP.types.boolean}}));return u.uiProps.enumOptions=u.uiProps.enumOptions||c,e(kt,i(i({},r.data),{},{props:i(i({},r.props),u)}))}},Lt={name:"ArrayOrderList",props:{vNodeList:{type:Array,default:[]},tupleItemsLength:{type:Number,default:0},addable:{type:Boolean,default:!0},showIndexNumber:{type:Boolean,default:!1},sortable:{type:Boolean,default:!0},removable:{type:Boolean,default:!0},maxItems:{},minItems:{},globalOptions:null},computed:{canAdd:function(){var e=this.$props,r=e.addable,t=e.maxItems,a=e.vNodeList;return !!r&&(void 0===t||a.length<t)},canRemove:function(){var e=this.$props,r=e.removable,t=e.minItems,a=e.vNodeList;return !!r&&(void 0===t||a.length>t)}},render:function(e){var r=this;if(this.vNodeList.length<=0&&!this.addable)return null;var a=this.globalOptions.ICONS_MAP;return e("div",{class:{arrayOrderList:!0}},this.vNodeList.map((function(o,s){var n=o.key,l=o.vNode,c=r.tupleItemsLength+s,u=s+1;return e("div",{key:n,class:{arrayOrderList_item:!0}},[r.showIndexNumber?e("div",{class:{arrayListItem_index:!0}},u):null,e("div",{class:{arrayListItem_operateTool:!0}},[e("button",{style:i({},r.sortable?{}:{display:"none"}),attrs:{type:"button",disabled:!r.sortable||0===s},class:t({arrayListItem_btn:!0,"arrayListItem_orderBtn-top":!0},a.moveUp,!0),on:{click:function(){r.$emit("onArrayOperate",{command:"moveUp",data:{index:c}});}}}),e("button",{style:i({},r.sortable?{}:{display:"none"}),attrs:{type:"button",disabled:!r.sortable||s===r.vNodeList.length-1},class:t({arrayListItem_btn:!0,"arrayListItem_orderBtn-bottom":!0},a.moveDown,!0),on:{click:function(){r.$emit("onArrayOperate",{command:"moveDown",data:{index:c}});}}}),e("button",{style:i({},r.removable?{}:{display:"none"}),attrs:{type:"button",disabled:!r.canRemove},class:t({arrayListItem_btn:!0,"arrayListItem_btn-delete":!0},a.close,!0),on:{click:function(){r.$emit("onArrayOperate",{command:"remove",data:{index:c}});}}})]),e("div",{class:{arrayListItem_content:!0}},[l])])})).concat([e("p",{style:i({},this.canAdd?{}:{display:"none"}),class:{arrayOrderList_bottomAddBtn:!0}},[e("button",{attrs:{type:"button"},class:{bottomAddBtn:!0,"is-plain":!0,genFormBtn:!0},on:{click:function(){r.$emit("onArrayOperate",{command:"add"});}}},[e("i",{class:[a.plus],style:{marginRight:"5px"}}),this.maxItems?"( ".concat(this.vNodeList.length," / ").concat(this.maxItems," )"):""])])]))}},Tt={name:"ArrayFieldNormal",functional:!0,props:i(i({},Ot),{},{itemsFormData:{type:Array}}),render:function(e,r){var t=r.props,a=t.schema,o=t.uiSchema,s=t.curNodePath,n=t.rootFormData,l=t.itemsFormData,c=t.errorSchema,u=t.globalOptions,d=Yr({schema:a,uiSchema:o,curNodePath:s,rootFormData:n}),p=d.title,h=d.description,m=d.addable,f=d.showIndexNumber,v=d.sortable,y=d.removable,g=d.showTitle,b=d.showDescription,P=d.fieldClass,w=d.fieldAttrs,E=d.fieldStyle,S=l.map((function(t,n){var l=Gr({schema:a.items,uiSchema:o.items},n);return {key:t.key,vNode:e(Ut,{key:t.key,props:i(i({},r.props),{},{schema:a.items,required:![].concat(a.items.type).includes("null"),uiSchema:i(i({},o.items),l),errorSchema:c.items,curNodePath:Vr(s,n)})})}}));return e(jt,{props:{title:p,description:h,showTitle:g,showDescription:b},class:i(i({},r.data.class),P),attrs:w,style:E},[e(Lt,{props:{vNodeList:S,showIndexNumber:f,addable:m,sortable:v,removable:y,maxItems:a.maxItems,minItems:a.minItems,globalOptions:u},on:r.listeners})])}},zt={name:"ArrayFieldMultiSelect",functional:!0,props:i({},Ot),render:function(e,r){var t=r.props,a=t.schema,o=t.rootSchema,s=t.uiSchema,n=t.curNodePath,l=t.rootFormData,c=t.globalOptions,u=ct(Tr(a.items,o),s,n,l),d=et({schema:a,uiSchema:s,curNodePath:n,rootFormData:l},(function(){return {widget:c.WIDGET_MAP.common.checkboxGroup}}));return d.uiProps.multiple=!0,u&&!d.uiProps.enumOptions&&(d.uiProps.enumOptions=u),e(kt,i(i({},r.data),{},{props:i(i({},r.props),d)}))}},qt={name:"ArrayFieldTuple",props:i(i({},Ot),{},{itemsFormData:{type:Array,default:function(){return []}}}),created:function(){this.fixItemsFormData();},methods:{fixItemsFormData:function(){var e=!Array.isArray(this.itemsFormData);if(e||this.itemsFormData.length<this.schema.items.length){var r=St(this.schema,void 0,this.rootSchema);e?this.$emit("onArrayOperate",{command:"setNewTarget",data:{newTarget:r}}):this.$emit("onArrayOperate",{command:"batchPush",data:{pushArray:r.slice(this.itemsFormData.length)}});}}},render:function(e){var r=this;if(!Array.isArray(this.itemsFormData))return null;var t,a,o=this.$props,s=o.schema,n=o.uiSchema,c=o.errorSchema,u=o.curNodePath,d=o.globalOptions,p=Yr({schema:s,uiSchema:n,curNodePath:u,rootFormData:this.rootFormData}),h=p.title,m=p.description,f=p.addable,v=p.showIndexNumber,y=p.sortable,g=p.removable,b=p.showTitle,P=p.showDescription,w=p.fieldClass,E=p.fieldAttrs,S=p.fieldStyle,x=(t=this.itemsFormData,a=this.schema.items.length-1,t.reduce((function(e,r,t){return e[t>a?1:0].push(r),e}),[[],[]])),F=x[0].map((function(t,a){return e(Ut,{key:t.key,props:i(i({},r.$props),{},{required:![].concat(s.items[a].type).includes("null"),schema:s.items[a],uiSchema:n.items?n.items[a]:{},errorSchema:c.items?c.items[a]:{},curNodePath:Vr(u,a)})})})),O=x[1].map((function(t,a){var o=Gr({schema:s.additionalItems,uiSchema:n.additionalItems},a);return {key:t.key,vNode:e(Ut,{key:t.key,props:i(i({},r.$props),{},{schema:s.additionalItems,required:![].concat(s.additionalItems.type).includes("null"),uiSchema:i(i({},n.additionalItems),o),errorSchema:c.additionalItems,curNodePath:Vr(r.curNodePath,a+s.items.length)})})}})),_=(void 0===f||f)&&lt(this.schema);return e(jt,{props:{title:h,description:m,showTitle:b,showDescription:P},class:w,attrs:E,style:S},[].concat(l(F),[e(Lt,{props:{vNodeList:O,tupleItemsLength:s.items.length,addable:_,showIndexNumber:v,sortable:y,removable:g,maxItems:s.maxItems,minItems:s.minItems,globalOptions:d},on:this.$listeners})]))}},Vt={name:"ArrayFieldSpecialFormat",props:Ot,functional:!0,render:function(e,r){var t=r.props,a=t.schema,o=t.uiSchema,s=t.curNodePath,n=t.rootFormData,l=et({schema:i({"ui:widget":t.globalOptions.WIDGET_MAP.formats[a.format]},a),uiSchema:o,curNodePath:s,rootFormData:n});return e(kt,i(i({},r.data),{},{props:i(i({},r.props),l)}))}},Mt={name:"ArrayField",props:Ot,data:function(){return {formKeys:this.getCuFormData().map((function(){return b()}))}},computed:{itemsFormData:function(){var e=this.$data.formKeys;return this.curFormData.map((function(r,t){return {key:e[t],value:r}}))},curFormData:function(){return this.getCuFormData()}},watch:{curFormData:function(e,r){e!==r&&Array.isArray(e)&&(this.formKeys=e.map((function(){return b()})));}},methods:{getCuFormData:function(){var e=this.$props,r=Qr(e.rootFormData,e.curNodePath);return Array.isArray(r)?r:[]},getNewFormDataRow:function(){var e=this.$props,r=e.schema,t=e.rootSchema,a=r.items;return st(this.schema)&&lt(this.schema)&&(a=r.additionalItems),St(a,void 0,t)},handleArrayOperate:function(e){var r=e.command,t=e.data,a={moveUp:function(e,r){!function(e,r){if(0===r)return !1;var t=[e[r],e[r-1]];e.splice.apply(e,[r-1,2].concat(t));}(e,r.index);},moveDown:function(e,r){!function(e,r){if(r===e.length-1)return !1;var t=e[r],a=[e[r+1],t];e.splice.apply(e,[r,2].concat(a));}(e,r.index);},remove:function(e,r){!function(e,r){e.splice(r,1).length;}(e,r.index);},add:function(e,r){var t=r.newRowData;e.push(t);},batchPush:function(e,r){r.pushArray.forEach((function(r){e.push(r);}));},setNewTarget:function(e,r){Wr(r.formData,r.nodePath,r.newTarget);}}[r];if(!a)throw new Error("错误 - 未知的操作：[".concat(r,"]"));var o=t,i=t;"add"===r?(o={newRowData:this.getNewFormDataRow()},i={newRowData:b()}):"batchPush"===r?i={pushArray:o.pushArray.map((function(e){return b()}))}:"setNewTarget"===r&&(o={formData:this.rootFormData,nodePath:this.curNodePath,newTarget:o.newTarget},i={formData:this.$data,nodePath:"formKeys",newTarget:o.newTarget.map((function(e){return b()}))}),a.apply(this,[this.$data.formKeys,i]),a.apply(this,[this.curFormData,o]);}},render:function(e){var r=this.$props,a=r.schema,o=r.uiSchema,s=r.rootSchema,l=r.rootFormData,c=r.curNodePath,u=r.globalOptions;if(!a.hasOwnProperty("items"))throw new Error("[".concat(a,"] 请先定义 items属性"));if(nt(a,s))return e(zt,{props:this.$props,class:t({},w(zt.name),!0)});if(a.format||a["ui:widget"]||o["ui:widget"])return e(Vt,{props:this.$props,class:t({},w(Vt.name),!0)});var d=st(a)?qt:Tt;return e("div",[e(d,{props:i({itemsFormData:this.itemsFormData},this.$props),class:t({},w(d.name),!0),on:{onArrayOperate:this.handleArrayOperate}}),this.needValidFieldGroup?e(kt,{key:"validateWidget-array",class:{validateWidget:!0,"validateWidget-array":!0},props:{schema:Object.entries(this.$props.schema).reduce((function(e,r){var t=n(r,2),a=t[0],o=t[1];return "items"!==a&&(e[a]=o),e}),{}),uiSchema:o,errorSchema:this.errorSchema,curNodePath:c,rootFormData:l,globalOptions:u}}):null])}},Wt={name:"SelectLinkageField",props:i(i({},Ot),{},{combiningType:{type:String,default:"anyOf"},selectList:{type:Array,require:!0}}),data:function(){return {curSelectIndex:this.computedCurSelectIndexByFormData(Qr(this.rootFormData,this.curNodePath))}},methods:{computedCurSelectIndexByFormData:function(e){var r=bt(e,this.selectList,this.rootSchema,!0);return 0!==r?r:this.curSelectIndex||0},getSelectBoxVNode:function(){var e=this,r=et({schema:this.schema["".concat(this.combiningType,"Select")]||{},uiSchema:this.uiSchema["".concat(this.combiningType,"Select")]||{},curNodePath:this.curNodePath,rootFormData:this.rootFormData},(function(){return {widget:"SelectWidget"}}));if(r.label=r.label||this.schema.title,r.description=r.description||this.schema.description,!r.uiProps.enumOptions){var a=this.uiSchema[this.combiningType]||[];r.uiProps.enumOptions=this.selectList.map((function(e,r){return {label:Yr({schema:e,uiSchema:a[r],containsSpec:!1}).title||"选项 ".concat(r+1),value:r}}));}return this.$createElement(kt,{key:"fieldSelect_".concat(this.combiningType),class:t({},"fieldSelect_".concat(this.combiningType),!0),props:i({isFormData:!1,curValue:this.curSelectIndex,globalOptions:this.globalOptions},r),on:{onChange:function(r){e.curSelectIndex=r;}}})}},watch:{curSelectIndex:function(e,r){var t=Qr(this.rootFormData,this.curNodePath),a=St(this.selectList[e],void 0,this.rootSchema),o=Object.prototype.hasOwnProperty;if(p$1(t)){var i=Tr(this.selectList[r],this.rootSchema);if("object"===f(i))for(var s in i.properties)o.call(i.properties,s)&&!o.call(a,s)&&Mr(t,s);}p$1(a)?Object.entries(a).forEach((function(e){var r=n(e,2),a=r[0],o=r[1];void 0!==o&&Wr(t,a,o);})):Wr(this.rootFormData,this.curNodePath,a||t);}},render:function(e){var r,a=this,o=this.$props.curNodePath,n=zr(o),l=null;if(("object"===this.schema.type||this.schema.properties)&&!function(e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r))return !1;return !0}(this.schema.properties)){var c,u=Object.assign({},this.schema);delete u[this.combiningType],l=e(Ut,{key:"origin_".concat(this.combiningType),class:(c={},t(c,"".concat(this.combiningType,"_originBox"),!0),t(c,"".concat(n,"-originBox"),!0),c),props:i(i({},this.$props),{},{schema:u})});}var p=[this.getSelectBoxVNode()],h=this.selectList[this.curSelectIndex];if(h){var m=this.schema,f=this.combiningType,v="".concat(this.combiningType,"Select");m.properties,m[f],m[v];var y=s(m,["properties",f,v].map(d));h=Object.assign({},y,h);var g=P(Yr({schema:this.schema,uiSchema:this.uiSchema,containsSpec:!1,curNodePath:o,rootFormData:this.rootFormData}),(function(e){return e===a.combiningType?void 0:"ui:".concat(e)})),b=P(rt({schema:this.schema,uiSchema:this.uiSchema,errorSchema:this.errorSchema}),(function(e){return e===a.combiningType?void 0:"err:".concat(e)}));p.push(e(Ut,{key:"appendSchema_".concat(this.combiningType),props:i(i({},this.$props),{},{schema:i({"ui:showTitle":!1,"ui:showDescription":!1},h),required:this.required,uiSchema:i(i({},g),(this.uiSchema[this.combiningType]||[])[this.curSelectIndex]),errorSchema:i(i({},b),(this.errorSchema[this.combiningType]||[])[this.curSelectIndex])})}));}return p.push(e(kt,{key:"validateWidget-".concat(this.combiningType),class:t({validateWidget:!0},"validateWidget-".concat(this.combiningType),!0),props:{schema:this.schema,uiSchema:this.uiSchema,errorSchema:this.errorSchema,curNodePath:this.curNodePath,rootFormData:this.rootFormData,globalOptions:this.globalOptions}})),e("div",[l,e("div",{key:"appendBox_".concat(this.combiningType),class:(r={appendCombining_box:!0},t(r,"".concat(this.combiningType,"_appendBox"),!0),t(r,"".concat(n,"-appendBox"),!0),r)},p)])}},Qt={array:Mt,boolean:Nt,integer:Ct,number:Rt,object:At,string:It,null:{render:function(){return null}},anyOf:{name:"AnyOfField",functional:!0,render:function(e,r){var t=r.data,a=t.props,o=s(t,["props"]);return e(Wt,i(i({},o),{},{props:i(i({},a),{},{combiningType:"anyOf",selectList:a.schema.anyOf})}),r.children)}},oneOf:{name:"oneOfField",functional:!0,render:function(e,r){var t=r.data,a=t.props,o=s(t,["props"]);return e(Wt,i(i({},o),{},{props:i(i({},a),{},{combiningType:"oneOf",selectList:a.schema.oneOf})}),r.children)}}},Ut={name:"SchemaField",props:Ot,functional:!0,render:function(e,r){var a,o=r.props,s=o.rootSchema,n=Tr(o.schema,s),l=i(i({},o),{},{schema:n});if(0===Object.keys(n).length)return null;var c,u,d=Zr(Qt,l),p=d.field,h=d.fieldProps,m=Jr({schema:n,uiSchema:o.uiSchema,curNodePath:o.curNodePath,rootFormData:o.rootFormData}),f=zr(o.curNodePath);return n.anyOf&&n.anyOf.length>0&&!it(n)?e(Qt.anyOf,{class:(c={},t(c,"".concat(f,"-anyOf"),!0),t(c,"fieldItem",!0),t(c,"anyOfField",!0),c),props:l}):n.oneOf&&n.oneOf.length>0&&!it(n)?e(Qt.oneOf,{class:(u={},t(u,"".concat(f,"-oneOf"),!0),t(u,"fieldItem",!0),t(u,"oneOfField",!0),u),props:l}):p&&!m?e(p,{props:i(i({},l),{},{fieldProps:h}),class:i(i({},r.data.class),{},(a={},t(a,w(p.name)||p,!0),t(a,"hiddenWidget",m),t(a,"fieldItem",!0),t(a,f,!0),a))}):null}};function Bt(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e));}}Bt('.genFromComponent{font-size:14px;line-height:1;word-wrap:break-word;word-break:break-word;padding:0;margin:0}.genFromComponent a,.genFromComponent h1,.genFromComponent h2,.genFromComponent h3,.genFromComponent li,.genFromComponent p,.genFromComponent ul{font-size:14px}.genFromComponent .genFormBtn{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;margin:0;-webkit-transition:.1s;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}.genFromComponent .genFormBtn.is-plain:focus,.genFromComponent .genFormBtn.is-plain:hover{background:#fff;border-color:#409eff;color:#409eff}.genFromComponent .hiddenWidget{display:none}.genFromComponent .fieldGroupWrap+.fieldGroupWrap .fieldGroupWrap_title{margin-top:20px}.genFromComponent .fieldGroupWrap_title{position:relative;display:block;width:100%;line-height:26px;margin-bottom:8px;font-size:15px;font-weight:700;border:0}.genFromComponent .fieldGroupWrap_des{font-size:12px;line-height:20px;margin-bottom:10px;color:#999}.genFromComponent .genFromWidget_des{font-size:12px;line-height:20px;margin-bottom:2px;color:#999;text-align:left}.genFromComponent .formItemErrorBox{color:#ff5757;padding-top:2px;position:absolute;top:100%;left:0;display:-webkit-box!important;line-height:16px;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1;white-space:normal;font-size:12px;text-align:left}.genFromComponent .genFormItemRequired:before{content:"*";color:#f56c6c;margin-right:4px}.genFromComponent .appendCombining_box{margin-bottom:22px}.genFromComponent .appendCombining_box .appendCombining_box{margin-bottom:10px}.genFromComponent .appendCombining_box{padding:10px;background:hsla(0,0%,94.9%,.8);-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1)}.genFromComponent .validateWidget{margin-bottom:0;width:100%!important;-ms-flex-preferred-size:100%!important;flex-basis:100%!important}.genFromComponent .validateWidget .formItemErrorBox{padding:5px 0;position:relative}.genFromComponent .arrayField{margin-bottom:22px}.genFromComponent .arrayField .arrayField{margin-bottom:10px}.genFromComponent .arrayOrderList{background:hsla(0,0%,94.9%,.8);-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1)}.genFromComponent .arrayOrderList_item{position:relative;padding:25px 10px 12px;border-radius:2px;margin-bottom:6px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.genFromComponent .arrayOrderList_bottomAddBtn{text-align:right;padding:15px 10px;margin-bottom:10px}.genFromComponent .bottomAddBtn{width:40%;min-width:10px;max-width:180px}.genFromComponent .arrayListItem_content{padding-top:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 auto;-webkit-box-shadow:0 -1px 0 0 rgba(0,0,0,.05);box-shadow:0 -1px 0 0 rgba(0,0,0,.05)}.genFromComponent .arrayListItem_index,.genFromComponent .arrayListItem_operateTool{position:absolute;height:25px}.genFromComponent .arrayListItem_index{top:6px;line-height:18px;height:18px;padding:0 6px;background-color:rgba(0,0,0,.28);color:#fff;font-size:12px;border-radius:2px}.genFromComponent .arrayListItem_operateTool{width:75px;right:9px;top:-2px;text-align:right;font-size:0}.genFromComponent .arrayListItem_btn{vertical-align:top;display:inline-block;width:25px;height:25px;line-height:25px;padding:0;margin:0;font-size:14px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;cursor:pointer;text-align:center;background:transparent;color:#666}.genFromComponent .arrayListItem_btn:hover{opacity:.6}.genFromComponent .arrayListItem_btn[disabled]{color:#999;opacity:.3!important;cursor:not-allowed}.genFromComponent .arrayListItem_orderBtn-bottom,.genFromComponent .arrayListItem_orderBtn-top{background-color:#f0f9eb}.genFromComponent .arrayListItem_btn-delete{background-color:#fef0f0}.genFromComponent .formFooter_item{text-align:right;border-top:1px solid rgba(0,0,0,.08);padding-top:10px}.genFromComponent.formInlineFooter>.fieldGroupWrap{display:inline-block;margin-right:10px}.genFromComponent .arrayListItem_content .genFormItem:last-child{margin-bottom:0}.genFromComponent.formInline .validateWidget{margin-right:0}.genFromComponent.formInline .formFooter_item{border-top:none;padding-top:0}.genFromComponent.formLabel-top .arrayListItem_content{padding-top:8px}.layoutColumn .layoutColumn_w100{width:100%!important;-ms-flex-preferred-size:100%!important;flex-basis:100%!important}.layoutColumn .fieldGroupWrap_box{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layoutColumn .fieldGroupWrap_box>div{width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}.layoutColumn .fieldGroupWrap_box>.genFormItem{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:10px}.layoutColumn.layoutColumn-1 .fieldGroupWrap_box>.genFormItem{padding-right:0}.layoutColumn.layoutColumn-2 .fieldGroupWrap_box>.genFormItem{width:50%;-ms-flex-preferred-size:50%;flex-basis:50%}.layoutColumn.layoutColumn-3 .fieldGroupWrap_box>.genFormItem{width:33.333%;-ms-flex-preferred-size:33.333%;flex-basis:33.333%}');var Ht={name:"CheckboxesWidget",props:{enumOptions:{default:function(){return []},type:[Array]}}},Kt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-checkbox-group",e._g(e._b({},"el-checkbox-group",e.$attrs,!1),e.$listeners),e._l(e.enumOptions,(function(r,a){return t("el-checkbox",{key:a,attrs:{label:r.value}},[e._v("\n        "+e._s(r.label)+"\n    ")])})),1)};Kt._withStripped=!0;var Gt=_t({render:Kt,staticRenderFns:[]},void 0,Ht,void 0,!1,void 0,!1,void 0,void 0,void 0),Jt={name:"RadioWidget",props:{enumOptions:{default:function(){return []},type:[Array]}}},Zt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-radio-group",e._g(e._b({},"el-radio-group",e.$attrs,!1),e.$listeners),e._l(e.enumOptions,(function(r,a){return t("el-radio",{key:a,attrs:{label:r.value}},[e._v("\n        "+e._s(r.label)+"\n    ")])})),1)};Zt._withStripped=!0;var Xt=_t({render:Zt,staticRenderFns:[]},void 0,Jt,void 0,!1,void 0,!1,void 0,void 0,void 0),Yt={name:"SelectWidget",props:{enumOptions:{default:function(){return []},type:[Array]}}},ea=function(){var e=this.$createElement,r=this._self._c||e;return r("el-select",this._g(this._b({},"el-select",this.$attrs,!1),this.$listeners),this._l(this.enumOptions,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)};ea._withStripped=!0;var ra={CheckboxesWidget:Gt,RadioWidget:Xt,SelectWidget:_t({render:ea,staticRenderFns:[]},void 0,Yt,void 0,!1,void 0,!1,void 0,void 0,void 0),TimePickerWidget:{name:"TimePickerWidget",functional:!0,render:function(e,r){r.data.attrs=i({"value-format":"HH:mm:ss"},r.data.attrs||{});var t=r.data.on.input;return r.data.on=i(i({},r.data.on),{},{input:function(e){t.apply(r.data.on,[null===e?void 0:e]);}}),e("el-time-picker",r.data,r.children)}},DatePickerWidget:{name:"DatePickerWidget",functional:!0,render:function(e,r){var t=r.data.attrs||{},a=t.isNumberValue,o=t.isRange,n=s(t,["isNumberValue","isRange"]);r.data.attrs=i({type:o?"daterange":"date","value-format":a?"timestamp":"yyyy-MM-dd"},n);var l=r.data.on.input;return r.data.on=i(i({},r.data.on),{},{input:function(e){var t=null===e?o?[]:void 0:e;l.apply(r.data.on,[t]);}}),e("el-date-picker",r.data,r.children)}},DateTimePickerWidget:{name:"DateTimePickerWidget",functional:!0,render:function(e,r){var t=r.data.attrs||{},a=t.isNumberValue,o=t.isRange,n=s(t,["isNumberValue","isRange"]);r.data.attrs=i({type:o?"datetimerange":"datetime"},n);var l=r.data.on.input;return r.data.on=i(i({},r.data.on),{},{input:function(e){var t;t=o?null===e?[]:e.map((function(e){return new Date(e)[a?"valueOf":"toISOString"]()})):null===e?void 0:new Date(e)[a?"valueOf":"toISOString"](),l.apply(r.data.on,[t]);}}),e("el-date-picker",r.data,r.children)}},UploadWidget:{name:"UploadWidget",props:{value:{default:null,type:[String,Array]},responseFileUrl:{default:function(e){return e?e.url||e.data&&e.data.url:""},type:[Function]},btnText:{type:String,default:"点击上传"},slots:{type:null,default:null}},data:function(){var e=this.value,r=Array.isArray(e),t=this.$attrs.fileList||[];return r?t=e.map((function(e,r){return {name:"已上传文件（".concat(r+1,"）"),url:e}})):e&&t.push({name:"已上传文件",url:e}),{isArrayValue:r,fileList:t}},methods:{emitValue:function(e){var r,t=this,a=function(e){return e&&(e.response&&t.responseFileUrl(e.response)||e.url)||""};if(this.isArrayValue)r=e.length?e.reduce((function(e,r){var t=a(r);return t&&e.push(t),e}),[]):[];else {var o=e[e.length-1];r=a(o);}this.$emit("input",r);}},render:function(){var e=this,r=this.$createElement,t=this.$attrs,a=this.$props.slots,o={attrs:i(i({fileList:this.fileList,"on-exceed":function(){e.$message&&e.$message.warning("超出文件上传数");},"on-error":function(){e.$message&&e.$message.error("文件上传失败");}},t),{},{"on-remove":function(r,a){e.emitValue(a),t["on-remove"]&&t["on-remove"](r,a);},"on-success":function(r,a,o){e.emitValue(o),t["on-success"]&&t["on-success"](r,a,o);}})};this.isArrayValue||(o.attrs.limit=1);var s=[];return a&&a.default?s.push(r("template",{slot:"default"},["function"==typeof a.default?a.default(r):a.default])):s.push(r("el-button",{props:{type:"primary"}},[this.btnText])),a&&a.tip&&s.push(r("template",{slot:"tip"},["function"==typeof a.tip?a.tip(r):a.tip])),r("el-upload",o,s)}}},ta={types:{boolean:"el-switch",string:"el-input",number:"el-input-number",integer:"el-input-number"},formats:{color:"el-color-picker",time:ra.TimePickerWidget,date:ra.DatePickerWidget,"date-time":ra.DateTimePickerWidget},common:{select:ra.SelectWidget,radioGroup:ra.RadioWidget,checkboxGroup:ra.CheckboxesWidget},widgetComponents:ra};Bt(".genFromComponent.formLabel-top .el-form-item__label{line-height:26px;padding-bottom:6px;font-size:14px}.genFromComponent .el-checkbox,.genFromComponent .el-color-picker{vertical-align:top}");var aa=Object.freeze({WIDGET_MAP:Object.freeze(ta),COMPONENT_MAP:Object.freeze({form:"el-form",formItem:"el-form-item",button:"el-button",popover:"el-popover"}),ICONS_MAP:Object.freeze({question:"el-icon-question",moveUp:"el-icon-caret-top",moveDown:"el-icon-caret-bottom",close:"el-icon-close",plus:"el-icon-plus"})}),oa=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.WIDGET_MAP.widgetComponents&&Object.entries(r.WIDGET_MAP.widgetComponents).forEach((function(r){var t=n(r,2),a=t[0],o=t[1];return Vue.component(a,o)})),{name:"ElementForm",props:xt,data:function(){var e=St(this.$props.schema,this.$props.value,this.$props.schema);return this.emitFormDataChange(e,this.value),{formData:e}},computed:{footerParams:function(){return i({show:!0,okBtn:"保存",cancelBtn:"取消"},this.formFooter)}},watch:{formData:{handler:function(e,r){this.emitFormDataChange(e,r);},deep:!0},schema:function(e,r){this.willReceiveProps(e,r);},value:function(e,r){this.willReceiveProps(e,r);}},methods:{emitFormDataChange:function(e,r){this.$emit("input",e),this.$emit("on-change",{newValue:e,oldValue:r});},willReceiveProps:function(e,r){if(!v(e,r)){var t=St(this.$props.schema,this.$props.value,this.$props.schema);v(this.formData,t)||(this.formData=t);}}},render:function(e){var a,o=this,n=this.$scopedSlots.default?this.$scopedSlots.default({formData:o.formData,formRefFn:function(){return o.$refs.genEditForm}}):this.footerParams.show?e(Ft,{props:{globalOptions:r,okBtn:o.footerParams.okBtn,cancelBtn:o.footerParams.cancelBtn},on:{onCancel:function(){o.$emit("on-cancel");},onSubmit:function(){o.$refs.genEditForm.validate((function(e,r){return e?o.$emit("on-submit",o.formData):o.$emit("on-validation-failed",r)}));}}}):void 0,l=o.$props.formProps,c=l.layoutColumn,u=void 0===c?1:c,d=s(l,["layoutColumn"]),p={schema:this.schema,uiSchema:this.uiSchema,errorSchema:this.errorSchema,customFormats:this.customFormats,customRule:this.customRule,rootSchema:this.schema,rootFormData:this.formData,curNodePath:"",globalOptions:r,formProps:i({labelPosition:"top",labelSuffix:"："},d)};return e(r.COMPONENT_MAP.form,{class:(a={genFromComponent:!0},t(a,"formLabel-".concat(p.formProps.labelPosition),!0),t(a,"formInlineFooter",d.inlineFooter),t(a,"formInline",d.inline),t(a,"genFromComponent_".concat(this.schema.id,"Form"),!!this.schema.id),t(a,"layoutColumn",!d.inline),t(a,"layoutColumn-".concat(u),!d.inline),a),ref:"genEditForm",props:i({model:o.formData},p.formProps)},[e(Ut,{props:p}),n])}}}(aa);"undefined"!=typeof window&&window.Vue&&window.Vue.component("VueForm",oa);

  var script = {
    name: 'TabField',
    components: {
      SchemaField: Ut
    },
    props: _objectSpread2(_objectSpread2({}, Ot), {}, {
      fieldProps: {
        type: null,
        default: null
      }
    }),
    data: function data() {
      return {
        activeName: this.getProperties()[0]
      };
    },
    computed: {
      tabs: function tabs() {
        var _this = this;

        var _this$$props = this.$props,
            schema = _this$$props.schema,
            uiSchema = _this$$props.uiSchema,
            errorSchema = _this$$props.errorSchema;

        var isRequired = function isRequired(name) {
          return Array.isArray(schema.required) && !!~schema.required.indexOf(name);
        };

        var properties = this.getProperties();
        var res = properties.map(function (name) {
          return {
            name: name,
            title: schema.properties[name].title,
            schemaProps: _objectSpread2(_objectSpread2({}, _this.$props), {}, {
              schema: _objectSpread2(_objectSpread2({}, schema.properties[name]), {}, {
                title: ''
              }),
              uiSchema: uiSchema[name],
              errorSchema: errorSchema[name],
              required: isRequired(name),
              curNodePath: Br.computedCurPath(_this.curNodePath, name)
            })
          };
        });
        return res;
      }
    },
    methods: {
      getProperties: function getProperties() {
        return Object.keys(this.schema.properties || {});
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("el-tabs", {
      staticStyle: {
        "margin-bottom": "22px"
      },
      model: {
        value: _vm.activeName,
        callback: function callback($$v) {
          _vm.activeName = $$v;
        },
        expression: "activeName"
      }
    }, _vm._l(_vm.tabs, function (item) {
      return _c("el-tab-pane", {
        key: item.name,
        attrs: {
          label: item.title,
          name: item.name
        }
      }, [_c("SchemaField", _vm._b({}, "SchemaField", item.schemaProps, false))], 1);
    }), 1);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  exports.TabField = __vue_component__;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=schema-form-components.umd.js.map
