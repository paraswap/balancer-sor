import require$$0$2, { BigNumber } from 'bignumber.js';
import { getAddress } from '@ethersproject/address';
import Stream$2 from 'stream';
import http$1 from 'http';
import Url from 'url';
import https$1 from 'https';
import zlib from 'zlib';
import require$$1$1 from 'util';
import require$$1$2 from 'path';
import require$$6 from 'fs';
import { MaxUint256, AddressZero } from '@ethersproject/constants';
import { Contract } from '@ethersproject/contracts';
import { Interface } from '@ethersproject/abi';
import fetch$1 from 'isomorphic-fetch';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var lodash_clonedeep = {exports: {}};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
}(lodash_clonedeep, lodash_clonedeep.exports));

var cloneDeep = lodash_clonedeep.exports;

BigNumber.config({
    EXPONENTIAL_AT: [-100, 100],
    ROUNDING_MODE: 1,
    DECIMAL_PLACES: 18,
});
const ZERO = bnum(0);
const ONE = bnum(1);
const INFINITY$1 = bnum('Infinity');
const BONE = new BigNumber(10).pow(18);
function scale(input, decimalPlaces) {
    const scalePow = new BigNumber(decimalPlaces.toString());
    const scaleMul = new BigNumber(10).pow(scalePow);
    return input.times(scaleMul);
}
function bnum(val) {
    return new BigNumber(val.toString());
}

let allowAddRemove = process.env.ALLOW_ADD_REMOVE || false;
if (typeof allowAddRemove === 'string') {
    if (allowAddRemove === 'true' || allowAddRemove === 'True')
        allowAddRemove = true;
    else
        allowAddRemove = false;
}
const ALLOW_ADD_REMOVE = allowAddRemove;
// priceErrorTolerance is how close we expect prices after swap to be in SOR
// suggested paths
const priceErrorTolerance = process.env.PRICE_ERROR_TOLERANCE || '0.00001';
const PRICE_ERROR_TOLERANCE = new BigNumber(priceErrorTolerance);
// infinitesimal is an amount that's used to initialize swap amounts so they are
// not zero or the path's limit.
// It's also used in the calculation of derivatives in pool maths
// const infinitesimal: string = process.env.INFINITESIMAL || '0.000001';
const infinitesimal = '0.01'; // Increasing INFINITESIMAL to '0.01' to test derivative sensitivity
const INFINITESIMAL = new BigNumber(infinitesimal);

var SwapTypes;
(function (SwapTypes) {
    SwapTypes[SwapTypes["SwapExactIn"] = 0] = "SwapExactIn";
    SwapTypes[SwapTypes["SwapExactOut"] = 1] = "SwapExactOut";
})(SwapTypes || (SwapTypes = {}));
var PoolTypes;
(function (PoolTypes) {
    PoolTypes[PoolTypes["Weighted"] = 0] = "Weighted";
    PoolTypes[PoolTypes["Stable"] = 1] = "Stable";
    PoolTypes[PoolTypes["Element"] = 2] = "Element";
    PoolTypes[PoolTypes["MetaStable"] = 3] = "MetaStable";
})(PoolTypes || (PoolTypes = {}));
var SwapPairType;
(function (SwapPairType) {
    SwapPairType[SwapPairType["Direct"] = 0] = "Direct";
    SwapPairType[SwapPairType["HopIn"] = 1] = "HopIn";
    SwapPairType[SwapPairType["HopOut"] = 2] = "HopOut";
})(SwapPairType || (SwapPairType = {}));
var PairTypes;
(function (PairTypes) {
    PairTypes[PairTypes["BptToToken"] = 0] = "BptToToken";
    PairTypes[PairTypes["TokenToBpt"] = 1] = "TokenToBpt";
    PairTypes[PairTypes["TokenToToken"] = 2] = "TokenToToken";
})(PairTypes || (PairTypes = {}));
var PoolFilter;
(function (PoolFilter) {
    PoolFilter["All"] = "All";
    PoolFilter["Weighted"] = "Weighted";
    PoolFilter["Stable"] = "Stable";
    PoolFilter["MetaStable"] = "MetaStable";
    PoolFilter["LBP"] = "LiquidityBootstrapping";
})(PoolFilter || (PoolFilter = {}));

var src = {};

var stable = {};

var subgraph = {};

var dist = {};

var nodePonyfill = {exports: {}};

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream$2.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob$1 {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob$1) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob$1([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob$1.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob$1.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream$2.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream$2) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream$2) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob$1([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream$2)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream$2 && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream$2) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers$1 {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers$1) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers$1.prototype.entries = Headers$1.prototype[Symbol.iterator];

Object.defineProperty(Headers$1.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers$1.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers$1();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http$1.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers$1(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream$2.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers$1(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers$1(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream$2.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream$2.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https$1 : http$1).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream$2.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers$1(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

var lib = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': fetch,
    Headers: Headers$1,
    Request: Request,
    Response: Response,
    FetchError: FetchError
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(lib);

(function (module, exports) {
const nodeFetch = require$$0$1;
const realFetch = nodeFetch.default || nodeFetch;

const fetch = function (url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url;
  }
  return realFetch.call(this, url, options)
};

fetch.ponyfill = true;

module.exports = exports = fetch;
exports.fetch = fetch;
exports.Headers = nodeFetch.Headers;
exports.Request = nodeFetch.Request;
exports.Response = nodeFetch.Response;

// Needed for TypeScript consumers without esModuleInterop.
exports.default = fetch;
}(nodePonyfill, nodePonyfill.exports));

// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
var nodejsCustomInspectSymbol$1 = nodejsCustomInspectSymbol;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol$1)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}

/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || invariant(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (nodejsCustomInspectSymbol$1) {
    classObject.prototype[nodejsCustomInspectSymbol$1] = fn;
  }
}

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */

/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}

var printer = /*#__PURE__*/Object.freeze({
    __proto__: null,
    print: print
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(printer);

var createRequestBody$1 = {};

var _public = {};

var ReactNativeFile$1 = function ReactNativeFile(_ref) {
  var uri = _ref.uri,
    name = _ref.name,
    type = _ref.type;
  this.uri = uri;
  this.name = name;
  this.type = type;
};

var ReactNativeFile = ReactNativeFile$1;

var isExtractableFile = function isExtractableFile(value) {
  return (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof ReactNativeFile
  );
};

var defaultIsExtractableFile = isExtractableFile;

var extractFiles = function extractFiles(value, path, isExtractableFile) {
  if (path === void 0) {
    path = '';
  }

  if (isExtractableFile === void 0) {
    isExtractableFile = defaultIsExtractableFile;
  }

  var clone;
  var files = new Map();

  function addFile(paths, file) {
    var storedPaths = files.get(file);
    if (storedPaths) storedPaths.push.apply(storedPaths, paths);
    else files.set(file, paths);
  }

  if (isExtractableFile(value)) {
    clone = null;
    addFile([path], value);
  } else {
    var prefix = path ? path + '.' : '';
    if (typeof FileList !== 'undefined' && value instanceof FileList)
      clone = Array.prototype.map.call(value, function (file, i) {
        addFile(['' + prefix + i], file);
        return null;
      });
    else if (Array.isArray(value))
      clone = value.map(function (child, i) {
        var result = extractFiles(child, '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        return result.clone;
      });
    else if (value && value.constructor === Object) {
      clone = {};

      for (var i in value) {
        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        clone[i] = result.clone;
      }
    } else clone = value;
  }

  return {
    clone: clone,
    files: files,
  };
};

_public.ReactNativeFile = ReactNativeFile$1;
_public.extractFiles = extractFiles;
_public.isExtractableFile = isExtractableFile;

var Stream$1 = Stream$2.Stream;
var util$2 = require$$1$1;

var delayed_stream = DelayedStream$1;
function DelayedStream$1() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util$2.inherits(DelayedStream$1, Stream$1);

DelayedStream$1.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream$1.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream$1.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream$1.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream$1.prototype.pause = function() {
  this.source.pause();
};

DelayedStream$1.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream$1.prototype.pipe = function() {
  var r = Stream$1.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream$1.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream$1.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this.emit('error', new Error(message));
};

var util$1 = require$$1$1;
var Stream = Stream$2.Stream;
var DelayedStream = delayed_stream;

var combined_stream = CombinedStream$1;
function CombinedStream$1() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util$1.inherits(CombinedStream$1, Stream);

CombinedStream$1.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream$1.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream$1.prototype.append = function(stream) {
  var isStreamLike = CombinedStream$1.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream$1.prototype.pipe = function(dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream$1.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream$1.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream$1.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream$1.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream$1.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream$1.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream$1.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream$1.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream$1.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream$1.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream$1.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream$1.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream$1.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream$1.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream$1.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};

var mimeTypes = {};

var require$$0 = {
	"application/1d-interleaved-parityfec": {
	source: "iana"
},
	"application/3gpdash-qoe-report+xml": {
	source: "iana",
	compressible: true
},
	"application/3gpp-ims+xml": {
	source: "iana",
	compressible: true
},
	"application/a2l": {
	source: "iana"
},
	"application/activemessage": {
	source: "iana"
},
	"application/activity+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-directory+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcost+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcostparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointprop+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointpropparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-error+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/aml": {
	source: "iana"
},
	"application/andrew-inset": {
	source: "iana",
	extensions: [
		"ez"
	]
},
	"application/applefile": {
	source: "iana"
},
	"application/applixware": {
	source: "apache",
	extensions: [
		"aw"
	]
},
	"application/atf": {
	source: "iana"
},
	"application/atfx": {
	source: "iana"
},
	"application/atom+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atom"
	]
},
	"application/atomcat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomcat"
	]
},
	"application/atomdeleted+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomdeleted"
	]
},
	"application/atomicmail": {
	source: "iana"
},
	"application/atomsvc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomsvc"
	]
},
	"application/atsc-dwd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dwd"
	]
},
	"application/atsc-held+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"held"
	]
},
	"application/atsc-rdt+json": {
	source: "iana",
	compressible: true
},
	"application/atsc-rsat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsat"
	]
},
	"application/atxml": {
	source: "iana"
},
	"application/auth-policy+xml": {
	source: "iana",
	compressible: true
},
	"application/bacnet-xdd+zip": {
	source: "iana",
	compressible: false
},
	"application/batch-smtp": {
	source: "iana"
},
	"application/bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/beep+xml": {
	source: "iana",
	compressible: true
},
	"application/calendar+json": {
	source: "iana",
	compressible: true
},
	"application/calendar+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xcs"
	]
},
	"application/call-completion": {
	source: "iana"
},
	"application/cals-1840": {
	source: "iana"
},
	"application/cbor": {
	source: "iana"
},
	"application/cbor-seq": {
	source: "iana"
},
	"application/cccex": {
	source: "iana"
},
	"application/ccmp+xml": {
	source: "iana",
	compressible: true
},
	"application/ccxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ccxml"
	]
},
	"application/cdfx+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdfx"
	]
},
	"application/cdmi-capability": {
	source: "iana",
	extensions: [
		"cdmia"
	]
},
	"application/cdmi-container": {
	source: "iana",
	extensions: [
		"cdmic"
	]
},
	"application/cdmi-domain": {
	source: "iana",
	extensions: [
		"cdmid"
	]
},
	"application/cdmi-object": {
	source: "iana",
	extensions: [
		"cdmio"
	]
},
	"application/cdmi-queue": {
	source: "iana",
	extensions: [
		"cdmiq"
	]
},
	"application/cdni": {
	source: "iana"
},
	"application/cea": {
	source: "iana"
},
	"application/cea-2018+xml": {
	source: "iana",
	compressible: true
},
	"application/cellml+xml": {
	source: "iana",
	compressible: true
},
	"application/cfw": {
	source: "iana"
},
	"application/clue+xml": {
	source: "iana",
	compressible: true
},
	"application/clue_info+xml": {
	source: "iana",
	compressible: true
},
	"application/cms": {
	source: "iana"
},
	"application/cnrp+xml": {
	source: "iana",
	compressible: true
},
	"application/coap-group+json": {
	source: "iana",
	compressible: true
},
	"application/coap-payload": {
	source: "iana"
},
	"application/commonground": {
	source: "iana"
},
	"application/conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/cose": {
	source: "iana"
},
	"application/cose-key": {
	source: "iana"
},
	"application/cose-key-set": {
	source: "iana"
},
	"application/cpl+xml": {
	source: "iana",
	compressible: true
},
	"application/csrattrs": {
	source: "iana"
},
	"application/csta+xml": {
	source: "iana",
	compressible: true
},
	"application/cstadata+xml": {
	source: "iana",
	compressible: true
},
	"application/csvm+json": {
	source: "iana",
	compressible: true
},
	"application/cu-seeme": {
	source: "apache",
	extensions: [
		"cu"
	]
},
	"application/cwt": {
	source: "iana"
},
	"application/cybercash": {
	source: "iana"
},
	"application/dart": {
	compressible: true
},
	"application/dash+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpd"
	]
},
	"application/dashdelta": {
	source: "iana"
},
	"application/davmount+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"davmount"
	]
},
	"application/dca-rft": {
	source: "iana"
},
	"application/dcd": {
	source: "iana"
},
	"application/dec-dx": {
	source: "iana"
},
	"application/dialog-info+xml": {
	source: "iana",
	compressible: true
},
	"application/dicom": {
	source: "iana"
},
	"application/dicom+json": {
	source: "iana",
	compressible: true
},
	"application/dicom+xml": {
	source: "iana",
	compressible: true
},
	"application/dii": {
	source: "iana"
},
	"application/dit": {
	source: "iana"
},
	"application/dns": {
	source: "iana"
},
	"application/dns+json": {
	source: "iana",
	compressible: true
},
	"application/dns-message": {
	source: "iana"
},
	"application/docbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dbk"
	]
},
	"application/dskpp+xml": {
	source: "iana",
	compressible: true
},
	"application/dssc+der": {
	source: "iana",
	extensions: [
		"dssc"
	]
},
	"application/dssc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdssc"
	]
},
	"application/dvcs": {
	source: "iana"
},
	"application/ecmascript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ecma",
		"es"
	]
},
	"application/edi-consent": {
	source: "iana"
},
	"application/edi-x12": {
	source: "iana",
	compressible: false
},
	"application/edifact": {
	source: "iana",
	compressible: false
},
	"application/efi": {
	source: "iana"
},
	"application/emergencycalldata.comment+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.control+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.deviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.ecall.msd": {
	source: "iana"
},
	"application/emergencycalldata.providerinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.serviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.subscriberinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.veds+xml": {
	source: "iana",
	compressible: true
},
	"application/emma+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emma"
	]
},
	"application/emotionml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emotionml"
	]
},
	"application/encaprtp": {
	source: "iana"
},
	"application/epp+xml": {
	source: "iana",
	compressible: true
},
	"application/epub+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"epub"
	]
},
	"application/eshop": {
	source: "iana"
},
	"application/exi": {
	source: "iana",
	extensions: [
		"exi"
	]
},
	"application/expect-ct-report+json": {
	source: "iana",
	compressible: true
},
	"application/fastinfoset": {
	source: "iana"
},
	"application/fastsoap": {
	source: "iana"
},
	"application/fdt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fdt"
	]
},
	"application/fhir+json": {
	source: "iana",
	compressible: true
},
	"application/fhir+xml": {
	source: "iana",
	compressible: true
},
	"application/fido.trusted-apps+json": {
	compressible: true
},
	"application/fits": {
	source: "iana"
},
	"application/flexfec": {
	source: "iana"
},
	"application/font-sfnt": {
	source: "iana"
},
	"application/font-tdpfr": {
	source: "iana",
	extensions: [
		"pfr"
	]
},
	"application/font-woff": {
	source: "iana",
	compressible: false
},
	"application/framework-attributes+xml": {
	source: "iana",
	compressible: true
},
	"application/geo+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"geojson"
	]
},
	"application/geo+json-seq": {
	source: "iana"
},
	"application/geopackage+sqlite3": {
	source: "iana"
},
	"application/geoxacml+xml": {
	source: "iana",
	compressible: true
},
	"application/gltf-buffer": {
	source: "iana"
},
	"application/gml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"gml"
	]
},
	"application/gpx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"gpx"
	]
},
	"application/gxf": {
	source: "apache",
	extensions: [
		"gxf"
	]
},
	"application/gzip": {
	source: "iana",
	compressible: false,
	extensions: [
		"gz"
	]
},
	"application/h224": {
	source: "iana"
},
	"application/held+xml": {
	source: "iana",
	compressible: true
},
	"application/hjson": {
	extensions: [
		"hjson"
	]
},
	"application/http": {
	source: "iana"
},
	"application/hyperstudio": {
	source: "iana",
	extensions: [
		"stk"
	]
},
	"application/ibe-key-request+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pkg-reply+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pp-data": {
	source: "iana"
},
	"application/iges": {
	source: "iana"
},
	"application/im-iscomposing+xml": {
	source: "iana",
	compressible: true
},
	"application/index": {
	source: "iana"
},
	"application/index.cmd": {
	source: "iana"
},
	"application/index.obj": {
	source: "iana"
},
	"application/index.response": {
	source: "iana"
},
	"application/index.vnd": {
	source: "iana"
},
	"application/inkml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ink",
		"inkml"
	]
},
	"application/iotp": {
	source: "iana"
},
	"application/ipfix": {
	source: "iana",
	extensions: [
		"ipfix"
	]
},
	"application/ipp": {
	source: "iana"
},
	"application/isup": {
	source: "iana"
},
	"application/its+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"its"
	]
},
	"application/java-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"jar",
		"war",
		"ear"
	]
},
	"application/java-serialized-object": {
	source: "apache",
	compressible: false,
	extensions: [
		"ser"
	]
},
	"application/java-vm": {
	source: "apache",
	compressible: false,
	extensions: [
		"class"
	]
},
	"application/javascript": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js",
		"mjs"
	]
},
	"application/jf2feed+json": {
	source: "iana",
	compressible: true
},
	"application/jose": {
	source: "iana"
},
	"application/jose+json": {
	source: "iana",
	compressible: true
},
	"application/jrd+json": {
	source: "iana",
	compressible: true
},
	"application/json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"json",
		"map"
	]
},
	"application/json-patch+json": {
	source: "iana",
	compressible: true
},
	"application/json-seq": {
	source: "iana"
},
	"application/json5": {
	extensions: [
		"json5"
	]
},
	"application/jsonml+json": {
	source: "apache",
	compressible: true,
	extensions: [
		"jsonml"
	]
},
	"application/jwk+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+json": {
	source: "iana",
	compressible: true
},
	"application/jwt": {
	source: "iana"
},
	"application/kpml-request+xml": {
	source: "iana",
	compressible: true
},
	"application/kpml-response+xml": {
	source: "iana",
	compressible: true
},
	"application/ld+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"jsonld"
	]
},
	"application/lgr+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lgr"
	]
},
	"application/link-format": {
	source: "iana"
},
	"application/load-control+xml": {
	source: "iana",
	compressible: true
},
	"application/lost+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lostxml"
	]
},
	"application/lostsync+xml": {
	source: "iana",
	compressible: true
},
	"application/lxf": {
	source: "iana"
},
	"application/mac-binhex40": {
	source: "iana",
	extensions: [
		"hqx"
	]
},
	"application/mac-compactpro": {
	source: "apache",
	extensions: [
		"cpt"
	]
},
	"application/macwriteii": {
	source: "iana"
},
	"application/mads+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mads"
	]
},
	"application/manifest+json": {
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"webmanifest"
	]
},
	"application/marc": {
	source: "iana",
	extensions: [
		"mrc"
	]
},
	"application/marcxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mrcx"
	]
},
	"application/mathematica": {
	source: "iana",
	extensions: [
		"ma",
		"nb",
		"mb"
	]
},
	"application/mathml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mathml"
	]
},
	"application/mathml-content+xml": {
	source: "iana",
	compressible: true
},
	"application/mathml-presentation+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-associated-procedure-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-deregister+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-envelope+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-protection-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-reception-report+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-user-service-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbox": {
	source: "iana",
	extensions: [
		"mbox"
	]
},
	"application/media-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/media_control+xml": {
	source: "iana",
	compressible: true
},
	"application/mediaservercontrol+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mscml"
	]
},
	"application/merge-patch+json": {
	source: "iana",
	compressible: true
},
	"application/metalink+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"metalink"
	]
},
	"application/metalink4+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"meta4"
	]
},
	"application/mets+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mets"
	]
},
	"application/mf4": {
	source: "iana"
},
	"application/mikey": {
	source: "iana"
},
	"application/mipc": {
	source: "iana"
},
	"application/mmt-aei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"maei"
	]
},
	"application/mmt-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musd"
	]
},
	"application/mods+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mods"
	]
},
	"application/moss-keys": {
	source: "iana"
},
	"application/moss-signature": {
	source: "iana"
},
	"application/mosskey-data": {
	source: "iana"
},
	"application/mosskey-request": {
	source: "iana"
},
	"application/mp21": {
	source: "iana",
	extensions: [
		"m21",
		"mp21"
	]
},
	"application/mp4": {
	source: "iana",
	extensions: [
		"mp4s",
		"m4p"
	]
},
	"application/mpeg4-generic": {
	source: "iana"
},
	"application/mpeg4-iod": {
	source: "iana"
},
	"application/mpeg4-iod-xmt": {
	source: "iana"
},
	"application/mrb-consumer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/mrb-publish+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/msc-ivr+xml": {
	source: "iana",
	compressible: true
},
	"application/msc-mixer+xml": {
	source: "iana",
	compressible: true
},
	"application/msword": {
	source: "iana",
	compressible: false,
	extensions: [
		"doc",
		"dot"
	]
},
	"application/mud+json": {
	source: "iana",
	compressible: true
},
	"application/multipart-core": {
	source: "iana"
},
	"application/mxf": {
	source: "iana",
	extensions: [
		"mxf"
	]
},
	"application/n-quads": {
	source: "iana",
	extensions: [
		"nq"
	]
},
	"application/n-triples": {
	source: "iana",
	extensions: [
		"nt"
	]
},
	"application/nasdata": {
	source: "iana"
},
	"application/news-checkgroups": {
	source: "iana"
},
	"application/news-groupinfo": {
	source: "iana"
},
	"application/news-transmission": {
	source: "iana"
},
	"application/nlsml+xml": {
	source: "iana",
	compressible: true
},
	"application/node": {
	source: "iana"
},
	"application/nss": {
	source: "iana"
},
	"application/ocsp-request": {
	source: "iana"
},
	"application/ocsp-response": {
	source: "iana"
},
	"application/octet-stream": {
	source: "iana",
	compressible: false,
	extensions: [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	]
},
	"application/oda": {
	source: "iana",
	extensions: [
		"oda"
	]
},
	"application/odm+xml": {
	source: "iana",
	compressible: true
},
	"application/odx": {
	source: "iana"
},
	"application/oebps-package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"opf"
	]
},
	"application/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogx"
	]
},
	"application/omdoc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"omdoc"
	]
},
	"application/onenote": {
	source: "apache",
	extensions: [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg"
	]
},
	"application/oscore": {
	source: "iana"
},
	"application/oxps": {
	source: "iana",
	extensions: [
		"oxps"
	]
},
	"application/p2p-overlay+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"relo"
	]
},
	"application/parityfec": {
	source: "iana"
},
	"application/passport": {
	source: "iana"
},
	"application/patch-ops-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/pdf": {
	source: "iana",
	compressible: false,
	extensions: [
		"pdf"
	]
},
	"application/pdx": {
	source: "iana"
},
	"application/pem-certificate-chain": {
	source: "iana"
},
	"application/pgp-encrypted": {
	source: "iana",
	compressible: false,
	extensions: [
		"pgp"
	]
},
	"application/pgp-keys": {
	source: "iana"
},
	"application/pgp-signature": {
	source: "iana",
	extensions: [
		"asc",
		"sig"
	]
},
	"application/pics-rules": {
	source: "apache",
	extensions: [
		"prf"
	]
},
	"application/pidf+xml": {
	source: "iana",
	compressible: true
},
	"application/pidf-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/pkcs10": {
	source: "iana",
	extensions: [
		"p10"
	]
},
	"application/pkcs12": {
	source: "iana"
},
	"application/pkcs7-mime": {
	source: "iana",
	extensions: [
		"p7m",
		"p7c"
	]
},
	"application/pkcs7-signature": {
	source: "iana",
	extensions: [
		"p7s"
	]
},
	"application/pkcs8": {
	source: "iana",
	extensions: [
		"p8"
	]
},
	"application/pkcs8-encrypted": {
	source: "iana"
},
	"application/pkix-attr-cert": {
	source: "iana",
	extensions: [
		"ac"
	]
},
	"application/pkix-cert": {
	source: "iana",
	extensions: [
		"cer"
	]
},
	"application/pkix-crl": {
	source: "iana",
	extensions: [
		"crl"
	]
},
	"application/pkix-pkipath": {
	source: "iana",
	extensions: [
		"pkipath"
	]
},
	"application/pkixcmp": {
	source: "iana",
	extensions: [
		"pki"
	]
},
	"application/pls+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pls"
	]
},
	"application/poc-settings+xml": {
	source: "iana",
	compressible: true
},
	"application/postscript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ai",
		"eps",
		"ps"
	]
},
	"application/ppsp-tracker+json": {
	source: "iana",
	compressible: true
},
	"application/problem+json": {
	source: "iana",
	compressible: true
},
	"application/problem+xml": {
	source: "iana",
	compressible: true
},
	"application/provenance+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"provx"
	]
},
	"application/prs.alvestrand.titrax-sheet": {
	source: "iana"
},
	"application/prs.cww": {
	source: "iana",
	extensions: [
		"cww"
	]
},
	"application/prs.hpub+zip": {
	source: "iana",
	compressible: false
},
	"application/prs.nprend": {
	source: "iana"
},
	"application/prs.plucker": {
	source: "iana"
},
	"application/prs.rdf-xml-crypt": {
	source: "iana"
},
	"application/prs.xsf+xml": {
	source: "iana",
	compressible: true
},
	"application/pskc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pskcxml"
	]
},
	"application/qsig": {
	source: "iana"
},
	"application/raml+yaml": {
	compressible: true,
	extensions: [
		"raml"
	]
},
	"application/raptorfec": {
	source: "iana"
},
	"application/rdap+json": {
	source: "iana",
	compressible: true
},
	"application/rdf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rdf",
		"owl"
	]
},
	"application/reginfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rif"
	]
},
	"application/relax-ng-compact-syntax": {
	source: "iana",
	extensions: [
		"rnc"
	]
},
	"application/remote-printing": {
	source: "iana"
},
	"application/reputon+json": {
	source: "iana",
	compressible: true
},
	"application/resource-lists+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rl"
	]
},
	"application/resource-lists-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rld"
	]
},
	"application/rfc+xml": {
	source: "iana",
	compressible: true
},
	"application/riscos": {
	source: "iana"
},
	"application/rlmi+xml": {
	source: "iana",
	compressible: true
},
	"application/rls-services+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rs"
	]
},
	"application/route-apd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rapd"
	]
},
	"application/route-s-tsid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sls"
	]
},
	"application/route-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rusd"
	]
},
	"application/rpki-ghostbusters": {
	source: "iana",
	extensions: [
		"gbr"
	]
},
	"application/rpki-manifest": {
	source: "iana",
	extensions: [
		"mft"
	]
},
	"application/rpki-publication": {
	source: "iana"
},
	"application/rpki-roa": {
	source: "iana",
	extensions: [
		"roa"
	]
},
	"application/rpki-updown": {
	source: "iana"
},
	"application/rsd+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rsd"
	]
},
	"application/rss+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rss"
	]
},
	"application/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"application/rtploopback": {
	source: "iana"
},
	"application/rtx": {
	source: "iana"
},
	"application/samlassertion+xml": {
	source: "iana",
	compressible: true
},
	"application/samlmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/sbml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sbml"
	]
},
	"application/scaip+xml": {
	source: "iana",
	compressible: true
},
	"application/scim+json": {
	source: "iana",
	compressible: true
},
	"application/scvp-cv-request": {
	source: "iana",
	extensions: [
		"scq"
	]
},
	"application/scvp-cv-response": {
	source: "iana",
	extensions: [
		"scs"
	]
},
	"application/scvp-vp-request": {
	source: "iana",
	extensions: [
		"spq"
	]
},
	"application/scvp-vp-response": {
	source: "iana",
	extensions: [
		"spp"
	]
},
	"application/sdp": {
	source: "iana",
	extensions: [
		"sdp"
	]
},
	"application/secevent+jwt": {
	source: "iana"
},
	"application/senml+cbor": {
	source: "iana"
},
	"application/senml+json": {
	source: "iana",
	compressible: true
},
	"application/senml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"senmlx"
	]
},
	"application/senml-exi": {
	source: "iana"
},
	"application/sensml+cbor": {
	source: "iana"
},
	"application/sensml+json": {
	source: "iana",
	compressible: true
},
	"application/sensml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sensmlx"
	]
},
	"application/sensml-exi": {
	source: "iana"
},
	"application/sep+xml": {
	source: "iana",
	compressible: true
},
	"application/sep-exi": {
	source: "iana"
},
	"application/session-info": {
	source: "iana"
},
	"application/set-payment": {
	source: "iana"
},
	"application/set-payment-initiation": {
	source: "iana",
	extensions: [
		"setpay"
	]
},
	"application/set-registration": {
	source: "iana"
},
	"application/set-registration-initiation": {
	source: "iana",
	extensions: [
		"setreg"
	]
},
	"application/sgml": {
	source: "iana"
},
	"application/sgml-open-catalog": {
	source: "iana"
},
	"application/shf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"shf"
	]
},
	"application/sieve": {
	source: "iana",
	extensions: [
		"siv",
		"sieve"
	]
},
	"application/simple-filter+xml": {
	source: "iana",
	compressible: true
},
	"application/simple-message-summary": {
	source: "iana"
},
	"application/simplesymbolcontainer": {
	source: "iana"
},
	"application/sipc": {
	source: "iana"
},
	"application/slate": {
	source: "iana"
},
	"application/smil": {
	source: "iana"
},
	"application/smil+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"smi",
		"smil"
	]
},
	"application/smpte336m": {
	source: "iana"
},
	"application/soap+fastinfoset": {
	source: "iana"
},
	"application/soap+xml": {
	source: "iana",
	compressible: true
},
	"application/sparql-query": {
	source: "iana",
	extensions: [
		"rq"
	]
},
	"application/sparql-results+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"srx"
	]
},
	"application/spirits-event+xml": {
	source: "iana",
	compressible: true
},
	"application/sql": {
	source: "iana"
},
	"application/srgs": {
	source: "iana",
	extensions: [
		"gram"
	]
},
	"application/srgs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"grxml"
	]
},
	"application/sru+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sru"
	]
},
	"application/ssdl+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ssdl"
	]
},
	"application/ssml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ssml"
	]
},
	"application/stix+json": {
	source: "iana",
	compressible: true
},
	"application/swid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"swidtag"
	]
},
	"application/tamp-apex-update": {
	source: "iana"
},
	"application/tamp-apex-update-confirm": {
	source: "iana"
},
	"application/tamp-community-update": {
	source: "iana"
},
	"application/tamp-community-update-confirm": {
	source: "iana"
},
	"application/tamp-error": {
	source: "iana"
},
	"application/tamp-sequence-adjust": {
	source: "iana"
},
	"application/tamp-sequence-adjust-confirm": {
	source: "iana"
},
	"application/tamp-status-query": {
	source: "iana"
},
	"application/tamp-status-response": {
	source: "iana"
},
	"application/tamp-update": {
	source: "iana"
},
	"application/tamp-update-confirm": {
	source: "iana"
},
	"application/tar": {
	compressible: true
},
	"application/taxii+json": {
	source: "iana",
	compressible: true
},
	"application/tei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tei",
		"teicorpus"
	]
},
	"application/tetra_isi": {
	source: "iana"
},
	"application/thraud+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tfi"
	]
},
	"application/timestamp-query": {
	source: "iana"
},
	"application/timestamp-reply": {
	source: "iana"
},
	"application/timestamped-data": {
	source: "iana",
	extensions: [
		"tsd"
	]
},
	"application/tlsrpt+gzip": {
	source: "iana"
},
	"application/tlsrpt+json": {
	source: "iana",
	compressible: true
},
	"application/tnauthlist": {
	source: "iana"
},
	"application/toml": {
	compressible: true,
	extensions: [
		"toml"
	]
},
	"application/trickle-ice-sdpfrag": {
	source: "iana"
},
	"application/trig": {
	source: "iana"
},
	"application/ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttml"
	]
},
	"application/tve-trigger": {
	source: "iana"
},
	"application/tzif": {
	source: "iana"
},
	"application/tzif-leap": {
	source: "iana"
},
	"application/ulpfec": {
	source: "iana"
},
	"application/urc-grpsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-ressheet+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsheet"
	]
},
	"application/urc-targetdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-uisocketdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/vcard+json": {
	source: "iana",
	compressible: true
},
	"application/vcard+xml": {
	source: "iana",
	compressible: true
},
	"application/vemmi": {
	source: "iana"
},
	"application/vividence.scriptfile": {
	source: "apache"
},
	"application/vnd.1000minds.decision-model+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"1km"
	]
},
	"application/vnd.3gpp-prose+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ch+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-v2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.access-transfer-events+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.bsf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gmop+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mc-signalling-ear": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-payload": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-signalling": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-floor-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-signed+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mid-call+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.pic-bw-large": {
	source: "iana",
	extensions: [
		"plb"
	]
},
	"application/vnd.3gpp.pic-bw-small": {
	source: "iana",
	extensions: [
		"psb"
	]
},
	"application/vnd.3gpp.pic-bw-var": {
	source: "iana",
	extensions: [
		"pvb"
	]
},
	"application/vnd.3gpp.sms": {
	source: "iana"
},
	"application/vnd.3gpp.sms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-ext+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.state-and-event-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ussd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.sms": {
	source: "iana"
},
	"application/vnd.3gpp2.tcap": {
	source: "iana",
	extensions: [
		"tcap"
	]
},
	"application/vnd.3lightssoftware.imagescal": {
	source: "iana"
},
	"application/vnd.3m.post-it-notes": {
	source: "iana",
	extensions: [
		"pwn"
	]
},
	"application/vnd.accpac.simply.aso": {
	source: "iana",
	extensions: [
		"aso"
	]
},
	"application/vnd.accpac.simply.imp": {
	source: "iana",
	extensions: [
		"imp"
	]
},
	"application/vnd.acucobol": {
	source: "iana",
	extensions: [
		"acu"
	]
},
	"application/vnd.acucorp": {
	source: "iana",
	extensions: [
		"atc",
		"acutc"
	]
},
	"application/vnd.adobe.air-application-installer-package+zip": {
	source: "apache",
	compressible: false,
	extensions: [
		"air"
	]
},
	"application/vnd.adobe.flash.movie": {
	source: "iana"
},
	"application/vnd.adobe.formscentral.fcdt": {
	source: "iana",
	extensions: [
		"fcdt"
	]
},
	"application/vnd.adobe.fxp": {
	source: "iana",
	extensions: [
		"fxp",
		"fxpl"
	]
},
	"application/vnd.adobe.partial-upload": {
	source: "iana"
},
	"application/vnd.adobe.xdp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdp"
	]
},
	"application/vnd.adobe.xfdf": {
	source: "iana",
	extensions: [
		"xfdf"
	]
},
	"application/vnd.aether.imp": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata-pagedef": {
	source: "iana"
},
	"application/vnd.afpc.foca-charset": {
	source: "iana"
},
	"application/vnd.afpc.foca-codedfont": {
	source: "iana"
},
	"application/vnd.afpc.foca-codepage": {
	source: "iana"
},
	"application/vnd.afpc.modca": {
	source: "iana"
},
	"application/vnd.afpc.modca-formdef": {
	source: "iana"
},
	"application/vnd.afpc.modca-mediummap": {
	source: "iana"
},
	"application/vnd.afpc.modca-objectcontainer": {
	source: "iana"
},
	"application/vnd.afpc.modca-overlay": {
	source: "iana"
},
	"application/vnd.afpc.modca-pagesegment": {
	source: "iana"
},
	"application/vnd.ah-barcode": {
	source: "iana"
},
	"application/vnd.ahead.space": {
	source: "iana",
	extensions: [
		"ahead"
	]
},
	"application/vnd.airzip.filesecure.azf": {
	source: "iana",
	extensions: [
		"azf"
	]
},
	"application/vnd.airzip.filesecure.azs": {
	source: "iana",
	extensions: [
		"azs"
	]
},
	"application/vnd.amadeus+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.amazon.ebook": {
	source: "apache",
	extensions: [
		"azw"
	]
},
	"application/vnd.amazon.mobi8-ebook": {
	source: "iana"
},
	"application/vnd.americandynamics.acc": {
	source: "iana",
	extensions: [
		"acc"
	]
},
	"application/vnd.amiga.ami": {
	source: "iana",
	extensions: [
		"ami"
	]
},
	"application/vnd.amundsen.maze+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.android.ota": {
	source: "iana"
},
	"application/vnd.android.package-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"apk"
	]
},
	"application/vnd.anki": {
	source: "iana"
},
	"application/vnd.anser-web-certificate-issue-initiation": {
	source: "iana",
	extensions: [
		"cii"
	]
},
	"application/vnd.anser-web-funds-transfer-initiation": {
	source: "apache",
	extensions: [
		"fti"
	]
},
	"application/vnd.antix.game-component": {
	source: "iana",
	extensions: [
		"atx"
	]
},
	"application/vnd.apache.thrift.binary": {
	source: "iana"
},
	"application/vnd.apache.thrift.compact": {
	source: "iana"
},
	"application/vnd.apache.thrift.json": {
	source: "iana"
},
	"application/vnd.api+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.aplextor.warrp+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apothekende.reservation+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apple.installer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpkg"
	]
},
	"application/vnd.apple.keynote": {
	source: "iana",
	extensions: [
		"keynote"
	]
},
	"application/vnd.apple.mpegurl": {
	source: "iana",
	extensions: [
		"m3u8"
	]
},
	"application/vnd.apple.numbers": {
	source: "iana",
	extensions: [
		"numbers"
	]
},
	"application/vnd.apple.pages": {
	source: "iana",
	extensions: [
		"pages"
	]
},
	"application/vnd.apple.pkpass": {
	compressible: false,
	extensions: [
		"pkpass"
	]
},
	"application/vnd.arastra.swi": {
	source: "iana"
},
	"application/vnd.aristanetworks.swi": {
	source: "iana",
	extensions: [
		"swi"
	]
},
	"application/vnd.artisan+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.artsquare": {
	source: "iana"
},
	"application/vnd.astraea-software.iota": {
	source: "iana",
	extensions: [
		"iota"
	]
},
	"application/vnd.audiograph": {
	source: "iana",
	extensions: [
		"aep"
	]
},
	"application/vnd.autopackage": {
	source: "iana"
},
	"application/vnd.avalon+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.avistar+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.balsamiq.bmml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmml"
	]
},
	"application/vnd.balsamiq.bmpr": {
	source: "iana"
},
	"application/vnd.banana-accounting": {
	source: "iana"
},
	"application/vnd.bbf.usp.error": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bekitzur-stech+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bint.med-content": {
	source: "iana"
},
	"application/vnd.biopax.rdf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.blink-idb-value-wrapper": {
	source: "iana"
},
	"application/vnd.blueice.multipass": {
	source: "iana",
	extensions: [
		"mpm"
	]
},
	"application/vnd.bluetooth.ep.oob": {
	source: "iana"
},
	"application/vnd.bluetooth.le.oob": {
	source: "iana"
},
	"application/vnd.bmi": {
	source: "iana",
	extensions: [
		"bmi"
	]
},
	"application/vnd.bpf": {
	source: "iana"
},
	"application/vnd.bpf3": {
	source: "iana"
},
	"application/vnd.businessobjects": {
	source: "iana",
	extensions: [
		"rep"
	]
},
	"application/vnd.byu.uapi+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cab-jscript": {
	source: "iana"
},
	"application/vnd.canon-cpdl": {
	source: "iana"
},
	"application/vnd.canon-lips": {
	source: "iana"
},
	"application/vnd.capasystems-pg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cendio.thinlinc.clientconf": {
	source: "iana"
},
	"application/vnd.century-systems.tcp_stream": {
	source: "iana"
},
	"application/vnd.chemdraw+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdxml"
	]
},
	"application/vnd.chess-pgn": {
	source: "iana"
},
	"application/vnd.chipnuts.karaoke-mmd": {
	source: "iana",
	extensions: [
		"mmd"
	]
},
	"application/vnd.ciedi": {
	source: "iana"
},
	"application/vnd.cinderella": {
	source: "iana",
	extensions: [
		"cdy"
	]
},
	"application/vnd.cirpack.isdn-ext": {
	source: "iana"
},
	"application/vnd.citationstyles.style+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"csl"
	]
},
	"application/vnd.claymore": {
	source: "iana",
	extensions: [
		"cla"
	]
},
	"application/vnd.cloanto.rp9": {
	source: "iana",
	extensions: [
		"rp9"
	]
},
	"application/vnd.clonk.c4group": {
	source: "iana",
	extensions: [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	]
},
	"application/vnd.cluetrust.cartomobile-config": {
	source: "iana",
	extensions: [
		"c11amc"
	]
},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
	source: "iana",
	extensions: [
		"c11amz"
	]
},
	"application/vnd.coffeescript": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet-template": {
	source: "iana"
},
	"application/vnd.collection+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.doc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.next+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.comicbook+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.comicbook-rar": {
	source: "iana"
},
	"application/vnd.commerce-battelle": {
	source: "iana"
},
	"application/vnd.commonspace": {
	source: "iana",
	extensions: [
		"csp"
	]
},
	"application/vnd.contact.cmsg": {
	source: "iana",
	extensions: [
		"cdbcmsg"
	]
},
	"application/vnd.coreos.ignition+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cosmocaller": {
	source: "iana",
	extensions: [
		"cmc"
	]
},
	"application/vnd.crick.clicker": {
	source: "iana",
	extensions: [
		"clkx"
	]
},
	"application/vnd.crick.clicker.keyboard": {
	source: "iana",
	extensions: [
		"clkk"
	]
},
	"application/vnd.crick.clicker.palette": {
	source: "iana",
	extensions: [
		"clkp"
	]
},
	"application/vnd.crick.clicker.template": {
	source: "iana",
	extensions: [
		"clkt"
	]
},
	"application/vnd.crick.clicker.wordbank": {
	source: "iana",
	extensions: [
		"clkw"
	]
},
	"application/vnd.criticaltools.wbs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wbs"
	]
},
	"application/vnd.cryptii.pipe+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.crypto-shade-file": {
	source: "iana"
},
	"application/vnd.ctc-posml": {
	source: "iana",
	extensions: [
		"pml"
	]
},
	"application/vnd.ctct.ws+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cups-pdf": {
	source: "iana"
},
	"application/vnd.cups-postscript": {
	source: "iana"
},
	"application/vnd.cups-ppd": {
	source: "iana",
	extensions: [
		"ppd"
	]
},
	"application/vnd.cups-raster": {
	source: "iana"
},
	"application/vnd.cups-raw": {
	source: "iana"
},
	"application/vnd.curl": {
	source: "iana"
},
	"application/vnd.curl.car": {
	source: "apache",
	extensions: [
		"car"
	]
},
	"application/vnd.curl.pcurl": {
	source: "apache",
	extensions: [
		"pcurl"
	]
},
	"application/vnd.cyan.dean.root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cybank": {
	source: "iana"
},
	"application/vnd.d2l.coursepackage1p0+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.dart": {
	source: "iana",
	compressible: true,
	extensions: [
		"dart"
	]
},
	"application/vnd.data-vision.rdz": {
	source: "iana",
	extensions: [
		"rdz"
	]
},
	"application/vnd.datapackage+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dataresource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.debian.binary-package": {
	source: "iana"
},
	"application/vnd.dece.data": {
	source: "iana",
	extensions: [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	]
},
	"application/vnd.dece.ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uvt",
		"uvvt"
	]
},
	"application/vnd.dece.unspecified": {
	source: "iana",
	extensions: [
		"uvx",
		"uvvx"
	]
},
	"application/vnd.dece.zip": {
	source: "iana",
	extensions: [
		"uvz",
		"uvvz"
	]
},
	"application/vnd.denovo.fcselayout-link": {
	source: "iana",
	extensions: [
		"fe_launch"
	]
},
	"application/vnd.desmume.movie": {
	source: "iana"
},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
	source: "iana"
},
	"application/vnd.dm.delegation+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dna": {
	source: "iana",
	extensions: [
		"dna"
	]
},
	"application/vnd.document+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dolby.mlp": {
	source: "apache",
	extensions: [
		"mlp"
	]
},
	"application/vnd.dolby.mobile.1": {
	source: "iana"
},
	"application/vnd.dolby.mobile.2": {
	source: "iana"
},
	"application/vnd.doremir.scorecloud-binary-document": {
	source: "iana"
},
	"application/vnd.dpgraph": {
	source: "iana",
	extensions: [
		"dpg"
	]
},
	"application/vnd.dreamfactory": {
	source: "iana",
	extensions: [
		"dfac"
	]
},
	"application/vnd.drive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ds-keypoint": {
	source: "apache",
	extensions: [
		"kpxx"
	]
},
	"application/vnd.dtg.local": {
	source: "iana"
},
	"application/vnd.dtg.local.flash": {
	source: "iana"
},
	"application/vnd.dtg.local.html": {
	source: "iana"
},
	"application/vnd.dvb.ait": {
	source: "iana",
	extensions: [
		"ait"
	]
},
	"application/vnd.dvb.dvbj": {
	source: "iana"
},
	"application/vnd.dvb.esgcontainer": {
	source: "iana"
},
	"application/vnd.dvb.ipdcdftnotifaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess2": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgpdd": {
	source: "iana"
},
	"application/vnd.dvb.ipdcroaming": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-base": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-enhancement": {
	source: "iana"
},
	"application/vnd.dvb.notif-aggregate-root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-container+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-generic+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-msglist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-init+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.pfr": {
	source: "iana"
},
	"application/vnd.dvb.service": {
	source: "iana",
	extensions: [
		"svc"
	]
},
	"application/vnd.dxr": {
	source: "iana"
},
	"application/vnd.dynageo": {
	source: "iana",
	extensions: [
		"geo"
	]
},
	"application/vnd.dzr": {
	source: "iana"
},
	"application/vnd.easykaraoke.cdgdownload": {
	source: "iana"
},
	"application/vnd.ecdis-update": {
	source: "iana"
},
	"application/vnd.ecip.rlp": {
	source: "iana"
},
	"application/vnd.ecowin.chart": {
	source: "iana",
	extensions: [
		"mag"
	]
},
	"application/vnd.ecowin.filerequest": {
	source: "iana"
},
	"application/vnd.ecowin.fileupdate": {
	source: "iana"
},
	"application/vnd.ecowin.series": {
	source: "iana"
},
	"application/vnd.ecowin.seriesrequest": {
	source: "iana"
},
	"application/vnd.ecowin.seriesupdate": {
	source: "iana"
},
	"application/vnd.efi.img": {
	source: "iana"
},
	"application/vnd.efi.iso": {
	source: "iana"
},
	"application/vnd.emclient.accessrequest+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.enliven": {
	source: "iana",
	extensions: [
		"nml"
	]
},
	"application/vnd.enphase.envoy": {
	source: "iana"
},
	"application/vnd.eprints.data+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.epson.esf": {
	source: "iana",
	extensions: [
		"esf"
	]
},
	"application/vnd.epson.msf": {
	source: "iana",
	extensions: [
		"msf"
	]
},
	"application/vnd.epson.quickanime": {
	source: "iana",
	extensions: [
		"qam"
	]
},
	"application/vnd.epson.salt": {
	source: "iana",
	extensions: [
		"slt"
	]
},
	"application/vnd.epson.ssf": {
	source: "iana",
	extensions: [
		"ssf"
	]
},
	"application/vnd.ericsson.quickcall": {
	source: "iana"
},
	"application/vnd.espass-espass+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.eszigno3+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"es3",
		"et3"
	]
},
	"application/vnd.etsi.aoc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.asic-e+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.asic-s+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.cug+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvcommand+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-bc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-cod+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-npvr+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvservice+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsync+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mcid+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mheg5": {
	source: "iana"
},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.pstn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.sci+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.simservs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.timestamp-token": {
	source: "iana"
},
	"application/vnd.etsi.tsl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.tsl.der": {
	source: "iana"
},
	"application/vnd.eudora.data": {
	source: "iana"
},
	"application/vnd.evolv.ecig.profile": {
	source: "iana"
},
	"application/vnd.evolv.ecig.settings": {
	source: "iana"
},
	"application/vnd.evolv.ecig.theme": {
	source: "iana"
},
	"application/vnd.exstream-empower+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.exstream-package": {
	source: "iana"
},
	"application/vnd.ezpix-album": {
	source: "iana",
	extensions: [
		"ez2"
	]
},
	"application/vnd.ezpix-package": {
	source: "iana",
	extensions: [
		"ez3"
	]
},
	"application/vnd.f-secure.mobile": {
	source: "iana"
},
	"application/vnd.fastcopy-disk-image": {
	source: "iana"
},
	"application/vnd.fdf": {
	source: "iana",
	extensions: [
		"fdf"
	]
},
	"application/vnd.fdsn.mseed": {
	source: "iana",
	extensions: [
		"mseed"
	]
},
	"application/vnd.fdsn.seed": {
	source: "iana",
	extensions: [
		"seed",
		"dataless"
	]
},
	"application/vnd.ffsns": {
	source: "iana"
},
	"application/vnd.ficlab.flb+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.filmit.zfc": {
	source: "iana"
},
	"application/vnd.fints": {
	source: "iana"
},
	"application/vnd.firemonkeys.cloudcell": {
	source: "iana"
},
	"application/vnd.flographit": {
	source: "iana",
	extensions: [
		"gph"
	]
},
	"application/vnd.fluxtime.clip": {
	source: "iana",
	extensions: [
		"ftc"
	]
},
	"application/vnd.font-fontforge-sfd": {
	source: "iana"
},
	"application/vnd.framemaker": {
	source: "iana",
	extensions: [
		"fm",
		"frame",
		"maker",
		"book"
	]
},
	"application/vnd.frogans.fnc": {
	source: "iana",
	extensions: [
		"fnc"
	]
},
	"application/vnd.frogans.ltf": {
	source: "iana",
	extensions: [
		"ltf"
	]
},
	"application/vnd.fsc.weblaunch": {
	source: "iana",
	extensions: [
		"fsc"
	]
},
	"application/vnd.fujitsu.oasys": {
	source: "iana",
	extensions: [
		"oas"
	]
},
	"application/vnd.fujitsu.oasys2": {
	source: "iana",
	extensions: [
		"oa2"
	]
},
	"application/vnd.fujitsu.oasys3": {
	source: "iana",
	extensions: [
		"oa3"
	]
},
	"application/vnd.fujitsu.oasysgp": {
	source: "iana",
	extensions: [
		"fg5"
	]
},
	"application/vnd.fujitsu.oasysprs": {
	source: "iana",
	extensions: [
		"bh2"
	]
},
	"application/vnd.fujixerox.art-ex": {
	source: "iana"
},
	"application/vnd.fujixerox.art4": {
	source: "iana"
},
	"application/vnd.fujixerox.ddd": {
	source: "iana",
	extensions: [
		"ddd"
	]
},
	"application/vnd.fujixerox.docuworks": {
	source: "iana",
	extensions: [
		"xdw"
	]
},
	"application/vnd.fujixerox.docuworks.binder": {
	source: "iana",
	extensions: [
		"xbd"
	]
},
	"application/vnd.fujixerox.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujixerox.hbpl": {
	source: "iana"
},
	"application/vnd.fut-misnet": {
	source: "iana"
},
	"application/vnd.futoin+cbor": {
	source: "iana"
},
	"application/vnd.futoin+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.fuzzysheet": {
	source: "iana",
	extensions: [
		"fzs"
	]
},
	"application/vnd.genomatix.tuxedo": {
	source: "iana",
	extensions: [
		"txd"
	]
},
	"application/vnd.gentics.grd+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geo+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geocube+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.geogebra.file": {
	source: "iana",
	extensions: [
		"ggb"
	]
},
	"application/vnd.geogebra.tool": {
	source: "iana",
	extensions: [
		"ggt"
	]
},
	"application/vnd.geometry-explorer": {
	source: "iana",
	extensions: [
		"gex",
		"gre"
	]
},
	"application/vnd.geonext": {
	source: "iana",
	extensions: [
		"gxt"
	]
},
	"application/vnd.geoplan": {
	source: "iana",
	extensions: [
		"g2w"
	]
},
	"application/vnd.geospace": {
	source: "iana",
	extensions: [
		"g3w"
	]
},
	"application/vnd.gerber": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt-response": {
	source: "iana"
},
	"application/vnd.gmx": {
	source: "iana",
	extensions: [
		"gmx"
	]
},
	"application/vnd.google-apps.document": {
	compressible: false,
	extensions: [
		"gdoc"
	]
},
	"application/vnd.google-apps.presentation": {
	compressible: false,
	extensions: [
		"gslides"
	]
},
	"application/vnd.google-apps.spreadsheet": {
	compressible: false,
	extensions: [
		"gsheet"
	]
},
	"application/vnd.google-earth.kml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"kml"
	]
},
	"application/vnd.google-earth.kmz": {
	source: "iana",
	compressible: false,
	extensions: [
		"kmz"
	]
},
	"application/vnd.gov.sk.e-form+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gov.sk.e-form+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.grafeq": {
	source: "iana",
	extensions: [
		"gqf",
		"gqs"
	]
},
	"application/vnd.gridmp": {
	source: "iana"
},
	"application/vnd.groove-account": {
	source: "iana",
	extensions: [
		"gac"
	]
},
	"application/vnd.groove-help": {
	source: "iana",
	extensions: [
		"ghf"
	]
},
	"application/vnd.groove-identity-message": {
	source: "iana",
	extensions: [
		"gim"
	]
},
	"application/vnd.groove-injector": {
	source: "iana",
	extensions: [
		"grv"
	]
},
	"application/vnd.groove-tool-message": {
	source: "iana",
	extensions: [
		"gtm"
	]
},
	"application/vnd.groove-tool-template": {
	source: "iana",
	extensions: [
		"tpl"
	]
},
	"application/vnd.groove-vcard": {
	source: "iana",
	extensions: [
		"vcg"
	]
},
	"application/vnd.hal+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hal+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"hal"
	]
},
	"application/vnd.handheld-entertainment+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zmm"
	]
},
	"application/vnd.hbci": {
	source: "iana",
	extensions: [
		"hbci"
	]
},
	"application/vnd.hc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hcl-bireports": {
	source: "iana"
},
	"application/vnd.hdt": {
	source: "iana"
},
	"application/vnd.heroku+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hhe.lesson-player": {
	source: "iana",
	extensions: [
		"les"
	]
},
	"application/vnd.hp-hpgl": {
	source: "iana",
	extensions: [
		"hpgl"
	]
},
	"application/vnd.hp-hpid": {
	source: "iana",
	extensions: [
		"hpid"
	]
},
	"application/vnd.hp-hps": {
	source: "iana",
	extensions: [
		"hps"
	]
},
	"application/vnd.hp-jlyt": {
	source: "iana",
	extensions: [
		"jlt"
	]
},
	"application/vnd.hp-pcl": {
	source: "iana",
	extensions: [
		"pcl"
	]
},
	"application/vnd.hp-pclxl": {
	source: "iana",
	extensions: [
		"pclxl"
	]
},
	"application/vnd.httphone": {
	source: "iana"
},
	"application/vnd.hydrostatix.sof-data": {
	source: "iana",
	extensions: [
		"sfd-hdstx"
	]
},
	"application/vnd.hyper+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyper-item+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyperdrive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hzn-3d-crossword": {
	source: "iana"
},
	"application/vnd.ibm.afplinedata": {
	source: "iana"
},
	"application/vnd.ibm.electronic-media": {
	source: "iana"
},
	"application/vnd.ibm.minipay": {
	source: "iana",
	extensions: [
		"mpy"
	]
},
	"application/vnd.ibm.modcap": {
	source: "iana",
	extensions: [
		"afp",
		"listafp",
		"list3820"
	]
},
	"application/vnd.ibm.rights-management": {
	source: "iana",
	extensions: [
		"irm"
	]
},
	"application/vnd.ibm.secure-container": {
	source: "iana",
	extensions: [
		"sc"
	]
},
	"application/vnd.iccprofile": {
	source: "iana",
	extensions: [
		"icc",
		"icm"
	]
},
	"application/vnd.ieee.1905": {
	source: "iana"
},
	"application/vnd.igloader": {
	source: "iana",
	extensions: [
		"igl"
	]
},
	"application/vnd.imagemeter.folder+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.imagemeter.image+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.immervision-ivp": {
	source: "iana",
	extensions: [
		"ivp"
	]
},
	"application/vnd.immervision-ivu": {
	source: "iana",
	extensions: [
		"ivu"
	]
},
	"application/vnd.ims.imsccv1p1": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p2": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p3": {
	source: "iana"
},
	"application/vnd.ims.lis.v2.result+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.informedcontrol.rms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.informix-visionary": {
	source: "iana"
},
	"application/vnd.infotech.project": {
	source: "iana"
},
	"application/vnd.infotech.project+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.innopath.wamp.notification": {
	source: "iana"
},
	"application/vnd.insors.igm": {
	source: "iana",
	extensions: [
		"igm"
	]
},
	"application/vnd.intercon.formnet": {
	source: "iana",
	extensions: [
		"xpw",
		"xpx"
	]
},
	"application/vnd.intergeo": {
	source: "iana",
	extensions: [
		"i2g"
	]
},
	"application/vnd.intertrust.digibox": {
	source: "iana"
},
	"application/vnd.intertrust.nncp": {
	source: "iana"
},
	"application/vnd.intu.qbo": {
	source: "iana",
	extensions: [
		"qbo"
	]
},
	"application/vnd.intu.qfx": {
	source: "iana",
	extensions: [
		"qfx"
	]
},
	"application/vnd.iptc.g2.catalogitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.conceptitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.packageitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.planningitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ipunplugged.rcprofile": {
	source: "iana",
	extensions: [
		"rcprofile"
	]
},
	"application/vnd.irepository.package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"irp"
	]
},
	"application/vnd.is-xpr": {
	source: "iana",
	extensions: [
		"xpr"
	]
},
	"application/vnd.isac.fcs": {
	source: "iana",
	extensions: [
		"fcs"
	]
},
	"application/vnd.iso11783-10+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.jam": {
	source: "iana",
	extensions: [
		"jam"
	]
},
	"application/vnd.japannet-directory-service": {
	source: "iana"
},
	"application/vnd.japannet-jpnstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-payment-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-registration": {
	source: "iana"
},
	"application/vnd.japannet-registration-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-setstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-verification": {
	source: "iana"
},
	"application/vnd.japannet-verification-wakeup": {
	source: "iana"
},
	"application/vnd.jcp.javame.midlet-rms": {
	source: "iana",
	extensions: [
		"rms"
	]
},
	"application/vnd.jisp": {
	source: "iana",
	extensions: [
		"jisp"
	]
},
	"application/vnd.joost.joda-archive": {
	source: "iana",
	extensions: [
		"joda"
	]
},
	"application/vnd.jsk.isdn-ngn": {
	source: "iana"
},
	"application/vnd.kahootz": {
	source: "iana",
	extensions: [
		"ktz",
		"ktr"
	]
},
	"application/vnd.kde.karbon": {
	source: "iana",
	extensions: [
		"karbon"
	]
},
	"application/vnd.kde.kchart": {
	source: "iana",
	extensions: [
		"chrt"
	]
},
	"application/vnd.kde.kformula": {
	source: "iana",
	extensions: [
		"kfo"
	]
},
	"application/vnd.kde.kivio": {
	source: "iana",
	extensions: [
		"flw"
	]
},
	"application/vnd.kde.kontour": {
	source: "iana",
	extensions: [
		"kon"
	]
},
	"application/vnd.kde.kpresenter": {
	source: "iana",
	extensions: [
		"kpr",
		"kpt"
	]
},
	"application/vnd.kde.kspread": {
	source: "iana",
	extensions: [
		"ksp"
	]
},
	"application/vnd.kde.kword": {
	source: "iana",
	extensions: [
		"kwd",
		"kwt"
	]
},
	"application/vnd.kenameaapp": {
	source: "iana",
	extensions: [
		"htke"
	]
},
	"application/vnd.kidspiration": {
	source: "iana",
	extensions: [
		"kia"
	]
},
	"application/vnd.kinar": {
	source: "iana",
	extensions: [
		"kne",
		"knp"
	]
},
	"application/vnd.koan": {
	source: "iana",
	extensions: [
		"skp",
		"skd",
		"skt",
		"skm"
	]
},
	"application/vnd.kodak-descriptor": {
	source: "iana",
	extensions: [
		"sse"
	]
},
	"application/vnd.las": {
	source: "iana"
},
	"application/vnd.las.las+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.las.las+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lasxml"
	]
},
	"application/vnd.laszip": {
	source: "iana"
},
	"application/vnd.leap+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.liberty-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.llamagraphics.life-balance.desktop": {
	source: "iana",
	extensions: [
		"lbd"
	]
},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lbe"
	]
},
	"application/vnd.logipipe.circuit+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.loom": {
	source: "iana"
},
	"application/vnd.lotus-1-2-3": {
	source: "iana",
	extensions: [
		"123"
	]
},
	"application/vnd.lotus-approach": {
	source: "iana",
	extensions: [
		"apr"
	]
},
	"application/vnd.lotus-freelance": {
	source: "iana",
	extensions: [
		"pre"
	]
},
	"application/vnd.lotus-notes": {
	source: "iana",
	extensions: [
		"nsf"
	]
},
	"application/vnd.lotus-organizer": {
	source: "iana",
	extensions: [
		"org"
	]
},
	"application/vnd.lotus-screencam": {
	source: "iana",
	extensions: [
		"scm"
	]
},
	"application/vnd.lotus-wordpro": {
	source: "iana",
	extensions: [
		"lwp"
	]
},
	"application/vnd.macports.portpkg": {
	source: "iana",
	extensions: [
		"portpkg"
	]
},
	"application/vnd.mapbox-vector-tile": {
	source: "iana"
},
	"application/vnd.marlin.drm.actiontoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.conftoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.license+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.mdcf": {
	source: "iana"
},
	"application/vnd.mason+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.maxmind.maxmind-db": {
	source: "iana"
},
	"application/vnd.mcd": {
	source: "iana",
	extensions: [
		"mcd"
	]
},
	"application/vnd.medcalcdata": {
	source: "iana",
	extensions: [
		"mc1"
	]
},
	"application/vnd.mediastation.cdkey": {
	source: "iana",
	extensions: [
		"cdkey"
	]
},
	"application/vnd.meridian-slingshot": {
	source: "iana"
},
	"application/vnd.mfer": {
	source: "iana",
	extensions: [
		"mwf"
	]
},
	"application/vnd.mfmp": {
	source: "iana",
	extensions: [
		"mfm"
	]
},
	"application/vnd.micro+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.micrografx.flo": {
	source: "iana",
	extensions: [
		"flo"
	]
},
	"application/vnd.micrografx.igx": {
	source: "iana",
	extensions: [
		"igx"
	]
},
	"application/vnd.microsoft.portable-executable": {
	source: "iana"
},
	"application/vnd.microsoft.windows.thumbnail-cache": {
	source: "iana"
},
	"application/vnd.miele+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.mif": {
	source: "iana",
	extensions: [
		"mif"
	]
},
	"application/vnd.minisoft-hp3000-save": {
	source: "iana"
},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
	source: "iana"
},
	"application/vnd.mobius.daf": {
	source: "iana",
	extensions: [
		"daf"
	]
},
	"application/vnd.mobius.dis": {
	source: "iana",
	extensions: [
		"dis"
	]
},
	"application/vnd.mobius.mbk": {
	source: "iana",
	extensions: [
		"mbk"
	]
},
	"application/vnd.mobius.mqy": {
	source: "iana",
	extensions: [
		"mqy"
	]
},
	"application/vnd.mobius.msl": {
	source: "iana",
	extensions: [
		"msl"
	]
},
	"application/vnd.mobius.plc": {
	source: "iana",
	extensions: [
		"plc"
	]
},
	"application/vnd.mobius.txf": {
	source: "iana",
	extensions: [
		"txf"
	]
},
	"application/vnd.mophun.application": {
	source: "iana",
	extensions: [
		"mpn"
	]
},
	"application/vnd.mophun.certificate": {
	source: "iana",
	extensions: [
		"mpc"
	]
},
	"application/vnd.motorola.flexsuite": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.adsi": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.fis": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.gotap": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.kmr": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.ttc": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.wem": {
	source: "iana"
},
	"application/vnd.motorola.iprm": {
	source: "iana"
},
	"application/vnd.mozilla.xul+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xul"
	]
},
	"application/vnd.ms-3mfdocument": {
	source: "iana"
},
	"application/vnd.ms-artgalry": {
	source: "iana",
	extensions: [
		"cil"
	]
},
	"application/vnd.ms-asf": {
	source: "iana"
},
	"application/vnd.ms-cab-compressed": {
	source: "iana",
	extensions: [
		"cab"
	]
},
	"application/vnd.ms-color.iccprofile": {
	source: "apache"
},
	"application/vnd.ms-excel": {
	source: "iana",
	compressible: false,
	extensions: [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	]
},
	"application/vnd.ms-excel.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlam"
	]
},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsb"
	]
},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsm"
	]
},
	"application/vnd.ms-excel.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"xltm"
	]
},
	"application/vnd.ms-fontobject": {
	source: "iana",
	compressible: true,
	extensions: [
		"eot"
	]
},
	"application/vnd.ms-htmlhelp": {
	source: "iana",
	extensions: [
		"chm"
	]
},
	"application/vnd.ms-ims": {
	source: "iana",
	extensions: [
		"ims"
	]
},
	"application/vnd.ms-lrm": {
	source: "iana",
	extensions: [
		"lrm"
	]
},
	"application/vnd.ms-office.activex+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-officetheme": {
	source: "iana",
	extensions: [
		"thmx"
	]
},
	"application/vnd.ms-opentype": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-outlook": {
	compressible: false,
	extensions: [
		"msg"
	]
},
	"application/vnd.ms-package.obfuscated-opentype": {
	source: "apache"
},
	"application/vnd.ms-pki.seccat": {
	source: "apache",
	extensions: [
		"cat"
	]
},
	"application/vnd.ms-pki.stl": {
	source: "apache",
	extensions: [
		"stl"
	]
},
	"application/vnd.ms-playready.initiator+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-powerpoint": {
	source: "iana",
	compressible: false,
	extensions: [
		"ppt",
		"pps",
		"pot"
	]
},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppam"
	]
},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
	source: "iana",
	extensions: [
		"pptm"
	]
},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
	source: "iana",
	extensions: [
		"sldm"
	]
},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppsm"
	]
},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"potm"
	]
},
	"application/vnd.ms-printdevicecapabilities+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-printing.printticket+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-printschematicket+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-project": {
	source: "iana",
	extensions: [
		"mpp",
		"mpt"
	]
},
	"application/vnd.ms-tnef": {
	source: "iana"
},
	"application/vnd.ms-windows.devicepairing": {
	source: "iana"
},
	"application/vnd.ms-windows.nwprinting.oob": {
	source: "iana"
},
	"application/vnd.ms-windows.printerpairing": {
	source: "iana"
},
	"application/vnd.ms-windows.wsd.oob": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-resp": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-resp": {
	source: "iana"
},
	"application/vnd.ms-word.document.macroenabled.12": {
	source: "iana",
	extensions: [
		"docm"
	]
},
	"application/vnd.ms-word.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"dotm"
	]
},
	"application/vnd.ms-works": {
	source: "iana",
	extensions: [
		"wps",
		"wks",
		"wcm",
		"wdb"
	]
},
	"application/vnd.ms-wpl": {
	source: "iana",
	extensions: [
		"wpl"
	]
},
	"application/vnd.ms-xpsdocument": {
	source: "iana",
	compressible: false,
	extensions: [
		"xps"
	]
},
	"application/vnd.msa-disk-image": {
	source: "iana"
},
	"application/vnd.mseq": {
	source: "iana",
	extensions: [
		"mseq"
	]
},
	"application/vnd.msign": {
	source: "iana"
},
	"application/vnd.multiad.creator": {
	source: "iana"
},
	"application/vnd.multiad.creator.cif": {
	source: "iana"
},
	"application/vnd.music-niff": {
	source: "iana"
},
	"application/vnd.musician": {
	source: "iana",
	extensions: [
		"mus"
	]
},
	"application/vnd.muvee.style": {
	source: "iana",
	extensions: [
		"msty"
	]
},
	"application/vnd.mynfc": {
	source: "iana",
	extensions: [
		"taglet"
	]
},
	"application/vnd.ncd.control": {
	source: "iana"
},
	"application/vnd.ncd.reference": {
	source: "iana"
},
	"application/vnd.nearst.inv+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nervana": {
	source: "iana"
},
	"application/vnd.netfpx": {
	source: "iana"
},
	"application/vnd.neurolanguage.nlu": {
	source: "iana",
	extensions: [
		"nlu"
	]
},
	"application/vnd.nimn": {
	source: "iana"
},
	"application/vnd.nintendo.nitro.rom": {
	source: "iana"
},
	"application/vnd.nintendo.snes.rom": {
	source: "iana"
},
	"application/vnd.nitf": {
	source: "iana",
	extensions: [
		"ntf",
		"nitf"
	]
},
	"application/vnd.noblenet-directory": {
	source: "iana",
	extensions: [
		"nnd"
	]
},
	"application/vnd.noblenet-sealer": {
	source: "iana",
	extensions: [
		"nns"
	]
},
	"application/vnd.noblenet-web": {
	source: "iana",
	extensions: [
		"nnw"
	]
},
	"application/vnd.nokia.catalogs": {
	source: "iana"
},
	"application/vnd.nokia.conml+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.conml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.iptv.config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.isds-radio-presets": {
	source: "iana"
},
	"application/vnd.nokia.landmark+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.landmark+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.landmarkcollection+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.n-gage.ac+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ac"
	]
},
	"application/vnd.nokia.n-gage.data": {
	source: "iana",
	extensions: [
		"ngdat"
	]
},
	"application/vnd.nokia.n-gage.symbian.install": {
	source: "iana",
	extensions: [
		"n-gage"
	]
},
	"application/vnd.nokia.ncd": {
	source: "iana"
},
	"application/vnd.nokia.pcd+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.pcd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.radio-preset": {
	source: "iana",
	extensions: [
		"rpst"
	]
},
	"application/vnd.nokia.radio-presets": {
	source: "iana",
	extensions: [
		"rpss"
	]
},
	"application/vnd.novadigm.edm": {
	source: "iana",
	extensions: [
		"edm"
	]
},
	"application/vnd.novadigm.edx": {
	source: "iana",
	extensions: [
		"edx"
	]
},
	"application/vnd.novadigm.ext": {
	source: "iana",
	extensions: [
		"ext"
	]
},
	"application/vnd.ntt-local.content-share": {
	source: "iana"
},
	"application/vnd.ntt-local.file-transfer": {
	source: "iana"
},
	"application/vnd.ntt-local.ogw_remote-access": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_remote": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.chart": {
	source: "iana",
	extensions: [
		"odc"
	]
},
	"application/vnd.oasis.opendocument.chart-template": {
	source: "iana",
	extensions: [
		"otc"
	]
},
	"application/vnd.oasis.opendocument.database": {
	source: "iana",
	extensions: [
		"odb"
	]
},
	"application/vnd.oasis.opendocument.formula": {
	source: "iana",
	extensions: [
		"odf"
	]
},
	"application/vnd.oasis.opendocument.formula-template": {
	source: "iana",
	extensions: [
		"odft"
	]
},
	"application/vnd.oasis.opendocument.graphics": {
	source: "iana",
	compressible: false,
	extensions: [
		"odg"
	]
},
	"application/vnd.oasis.opendocument.graphics-template": {
	source: "iana",
	extensions: [
		"otg"
	]
},
	"application/vnd.oasis.opendocument.image": {
	source: "iana",
	extensions: [
		"odi"
	]
},
	"application/vnd.oasis.opendocument.image-template": {
	source: "iana",
	extensions: [
		"oti"
	]
},
	"application/vnd.oasis.opendocument.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"odp"
	]
},
	"application/vnd.oasis.opendocument.presentation-template": {
	source: "iana",
	extensions: [
		"otp"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"ods"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
	source: "iana",
	extensions: [
		"ots"
	]
},
	"application/vnd.oasis.opendocument.text": {
	source: "iana",
	compressible: false,
	extensions: [
		"odt"
	]
},
	"application/vnd.oasis.opendocument.text-master": {
	source: "iana",
	extensions: [
		"odm"
	]
},
	"application/vnd.oasis.opendocument.text-template": {
	source: "iana",
	extensions: [
		"ott"
	]
},
	"application/vnd.oasis.opendocument.text-web": {
	source: "iana",
	extensions: [
		"oth"
	]
},
	"application/vnd.obn": {
	source: "iana"
},
	"application/vnd.ocf+cbor": {
	source: "iana"
},
	"application/vnd.oftn.l10n+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessdownload+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessstreaming+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.cspg-hexbinary": {
	source: "iana"
},
	"application/vnd.oipf.dae.svg+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.dae.xhtml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.pae.gem": {
	source: "iana"
},
	"application/vnd.oipf.spdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.spdlist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.ueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.userprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.olpc-sugar": {
	source: "iana",
	extensions: [
		"xo"
	]
},
	"application/vnd.oma-scws-config": {
	source: "iana"
},
	"application/vnd.oma-scws-http-request": {
	source: "iana"
},
	"application/vnd.oma-scws-http-response": {
	source: "iana"
},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.drm-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.imd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.ltkm": {
	source: "iana"
},
	"application/vnd.oma.bcast.notification+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.provisioningtrigger": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgboot": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgdd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sgdu": {
	source: "iana"
},
	"application/vnd.oma.bcast.simple-symbol-container": {
	source: "iana"
},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sprov+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.stkm": {
	source: "iana"
},
	"application/vnd.oma.cab-address-book+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-feature-handler+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-pcc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-subs-invite+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-user-prefs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.dcd": {
	source: "iana"
},
	"application/vnd.oma.dcdc": {
	source: "iana"
},
	"application/vnd.oma.dd2+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dd2"
	]
},
	"application/vnd.oma.drm.risd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.group-usage-list+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+tlv": {
	source: "iana"
},
	"application/vnd.oma.pal+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.final-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.groups+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.push": {
	source: "iana"
},
	"application/vnd.oma.scidm.messages+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.xcap-directory+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-email+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-file+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-folder+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omaloc-supl-init": {
	source: "iana"
},
	"application/vnd.onepager": {
	source: "iana"
},
	"application/vnd.onepagertamp": {
	source: "iana"
},
	"application/vnd.onepagertamx": {
	source: "iana"
},
	"application/vnd.onepagertat": {
	source: "iana"
},
	"application/vnd.onepagertatp": {
	source: "iana"
},
	"application/vnd.onepagertatx": {
	source: "iana"
},
	"application/vnd.openblox.game+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"obgx"
	]
},
	"application/vnd.openblox.game-binary": {
	source: "iana"
},
	"application/vnd.openeye.oeb": {
	source: "iana"
},
	"application/vnd.openofficeorg.extension": {
	source: "apache",
	extensions: [
		"oxt"
	]
},
	"application/vnd.openstreetmap.data+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osm"
	]
},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"pptx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
	source: "iana",
	extensions: [
		"sldx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
	source: "iana",
	extensions: [
		"ppsx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
	source: "iana",
	extensions: [
		"potx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"xlsx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
	source: "iana",
	extensions: [
		"xltx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
	source: "iana",
	compressible: false,
	extensions: [
		"docx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
	source: "iana",
	extensions: [
		"dotx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.core-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.relationships+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oracle.resource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.orange.indata": {
	source: "iana"
},
	"application/vnd.osa.netdeploy": {
	source: "iana"
},
	"application/vnd.osgeo.mapguide.package": {
	source: "iana",
	extensions: [
		"mgp"
	]
},
	"application/vnd.osgi.bundle": {
	source: "iana"
},
	"application/vnd.osgi.dp": {
	source: "iana",
	extensions: [
		"dp"
	]
},
	"application/vnd.osgi.subsystem": {
	source: "iana",
	extensions: [
		"esa"
	]
},
	"application/vnd.otps.ct-kip+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oxli.countgraph": {
	source: "iana"
},
	"application/vnd.pagerduty+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.palm": {
	source: "iana",
	extensions: [
		"pdb",
		"pqa",
		"oprc"
	]
},
	"application/vnd.panoply": {
	source: "iana"
},
	"application/vnd.paos.xml": {
	source: "iana"
},
	"application/vnd.patentdive": {
	source: "iana"
},
	"application/vnd.patientecommsdoc": {
	source: "iana"
},
	"application/vnd.pawaafile": {
	source: "iana",
	extensions: [
		"paw"
	]
},
	"application/vnd.pcos": {
	source: "iana"
},
	"application/vnd.pg.format": {
	source: "iana",
	extensions: [
		"str"
	]
},
	"application/vnd.pg.osasli": {
	source: "iana",
	extensions: [
		"ei6"
	]
},
	"application/vnd.piaccess.application-licence": {
	source: "iana"
},
	"application/vnd.picsel": {
	source: "iana",
	extensions: [
		"efif"
	]
},
	"application/vnd.pmi.widget": {
	source: "iana",
	extensions: [
		"wg"
	]
},
	"application/vnd.poc.group-advertisement+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.pocketlearn": {
	source: "iana",
	extensions: [
		"plf"
	]
},
	"application/vnd.powerbuilder6": {
	source: "iana",
	extensions: [
		"pbd"
	]
},
	"application/vnd.powerbuilder6-s": {
	source: "iana"
},
	"application/vnd.powerbuilder7": {
	source: "iana"
},
	"application/vnd.powerbuilder7-s": {
	source: "iana"
},
	"application/vnd.powerbuilder75": {
	source: "iana"
},
	"application/vnd.powerbuilder75-s": {
	source: "iana"
},
	"application/vnd.preminet": {
	source: "iana"
},
	"application/vnd.previewsystems.box": {
	source: "iana",
	extensions: [
		"box"
	]
},
	"application/vnd.proteus.magazine": {
	source: "iana",
	extensions: [
		"mgz"
	]
},
	"application/vnd.psfs": {
	source: "iana"
},
	"application/vnd.publishare-delta-tree": {
	source: "iana",
	extensions: [
		"qps"
	]
},
	"application/vnd.pvi.ptid1": {
	source: "iana",
	extensions: [
		"ptid"
	]
},
	"application/vnd.pwg-multiplexed": {
	source: "iana"
},
	"application/vnd.pwg-xhtml-print+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.qualcomm.brew-app-res": {
	source: "iana"
},
	"application/vnd.quarantainenet": {
	source: "iana"
},
	"application/vnd.quark.quarkxpress": {
	source: "iana",
	extensions: [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	]
},
	"application/vnd.quobject-quoxdocument": {
	source: "iana"
},
	"application/vnd.radisys.moml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-stream+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-base+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-group+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-speech+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-transform+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.rainstor.data": {
	source: "iana"
},
	"application/vnd.rapid": {
	source: "iana"
},
	"application/vnd.rar": {
	source: "iana"
},
	"application/vnd.realvnc.bed": {
	source: "iana",
	extensions: [
		"bed"
	]
},
	"application/vnd.recordare.musicxml": {
	source: "iana",
	extensions: [
		"mxl"
	]
},
	"application/vnd.recordare.musicxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musicxml"
	]
},
	"application/vnd.renlearn.rlprint": {
	source: "iana"
},
	"application/vnd.restful+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.rig.cryptonote": {
	source: "iana",
	extensions: [
		"cryptonote"
	]
},
	"application/vnd.rim.cod": {
	source: "apache",
	extensions: [
		"cod"
	]
},
	"application/vnd.rn-realmedia": {
	source: "apache",
	extensions: [
		"rm"
	]
},
	"application/vnd.rn-realmedia-vbr": {
	source: "apache",
	extensions: [
		"rmvb"
	]
},
	"application/vnd.route66.link66+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"link66"
	]
},
	"application/vnd.rs-274x": {
	source: "iana"
},
	"application/vnd.ruckus.download": {
	source: "iana"
},
	"application/vnd.s3sms": {
	source: "iana"
},
	"application/vnd.sailingtracker.track": {
	source: "iana",
	extensions: [
		"st"
	]
},
	"application/vnd.sbm.cid": {
	source: "iana"
},
	"application/vnd.sbm.mid2": {
	source: "iana"
},
	"application/vnd.scribus": {
	source: "iana"
},
	"application/vnd.sealed.3df": {
	source: "iana"
},
	"application/vnd.sealed.csf": {
	source: "iana"
},
	"application/vnd.sealed.doc": {
	source: "iana"
},
	"application/vnd.sealed.eml": {
	source: "iana"
},
	"application/vnd.sealed.mht": {
	source: "iana"
},
	"application/vnd.sealed.net": {
	source: "iana"
},
	"application/vnd.sealed.ppt": {
	source: "iana"
},
	"application/vnd.sealed.tiff": {
	source: "iana"
},
	"application/vnd.sealed.xls": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.html": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.pdf": {
	source: "iana"
},
	"application/vnd.seemail": {
	source: "iana",
	extensions: [
		"see"
	]
},
	"application/vnd.sema": {
	source: "iana",
	extensions: [
		"sema"
	]
},
	"application/vnd.semd": {
	source: "iana",
	extensions: [
		"semd"
	]
},
	"application/vnd.semf": {
	source: "iana",
	extensions: [
		"semf"
	]
},
	"application/vnd.shade-save-file": {
	source: "iana"
},
	"application/vnd.shana.informed.formdata": {
	source: "iana",
	extensions: [
		"ifm"
	]
},
	"application/vnd.shana.informed.formtemplate": {
	source: "iana",
	extensions: [
		"itp"
	]
},
	"application/vnd.shana.informed.interchange": {
	source: "iana",
	extensions: [
		"iif"
	]
},
	"application/vnd.shana.informed.package": {
	source: "iana",
	extensions: [
		"ipk"
	]
},
	"application/vnd.shootproof+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shopkick+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sigrok.session": {
	source: "iana"
},
	"application/vnd.simtech-mindmapper": {
	source: "iana",
	extensions: [
		"twd",
		"twds"
	]
},
	"application/vnd.siren+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.smaf": {
	source: "iana",
	extensions: [
		"mmf"
	]
},
	"application/vnd.smart.notebook": {
	source: "iana"
},
	"application/vnd.smart.teacher": {
	source: "iana",
	extensions: [
		"teacher"
	]
},
	"application/vnd.software602.filler.form+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fo"
	]
},
	"application/vnd.software602.filler.form-xml-zip": {
	source: "iana"
},
	"application/vnd.solent.sdkm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sdkm",
		"sdkd"
	]
},
	"application/vnd.spotfire.dxp": {
	source: "iana",
	extensions: [
		"dxp"
	]
},
	"application/vnd.spotfire.sfs": {
	source: "iana",
	extensions: [
		"sfs"
	]
},
	"application/vnd.sqlite3": {
	source: "iana"
},
	"application/vnd.sss-cod": {
	source: "iana"
},
	"application/vnd.sss-dtf": {
	source: "iana"
},
	"application/vnd.sss-ntf": {
	source: "iana"
},
	"application/vnd.stardivision.calc": {
	source: "apache",
	extensions: [
		"sdc"
	]
},
	"application/vnd.stardivision.draw": {
	source: "apache",
	extensions: [
		"sda"
	]
},
	"application/vnd.stardivision.impress": {
	source: "apache",
	extensions: [
		"sdd"
	]
},
	"application/vnd.stardivision.math": {
	source: "apache",
	extensions: [
		"smf"
	]
},
	"application/vnd.stardivision.writer": {
	source: "apache",
	extensions: [
		"sdw",
		"vor"
	]
},
	"application/vnd.stardivision.writer-global": {
	source: "apache",
	extensions: [
		"sgl"
	]
},
	"application/vnd.stepmania.package": {
	source: "iana",
	extensions: [
		"smzip"
	]
},
	"application/vnd.stepmania.stepchart": {
	source: "iana",
	extensions: [
		"sm"
	]
},
	"application/vnd.street-stream": {
	source: "iana"
},
	"application/vnd.sun.wadl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wadl"
	]
},
	"application/vnd.sun.xml.calc": {
	source: "apache",
	extensions: [
		"sxc"
	]
},
	"application/vnd.sun.xml.calc.template": {
	source: "apache",
	extensions: [
		"stc"
	]
},
	"application/vnd.sun.xml.draw": {
	source: "apache",
	extensions: [
		"sxd"
	]
},
	"application/vnd.sun.xml.draw.template": {
	source: "apache",
	extensions: [
		"std"
	]
},
	"application/vnd.sun.xml.impress": {
	source: "apache",
	extensions: [
		"sxi"
	]
},
	"application/vnd.sun.xml.impress.template": {
	source: "apache",
	extensions: [
		"sti"
	]
},
	"application/vnd.sun.xml.math": {
	source: "apache",
	extensions: [
		"sxm"
	]
},
	"application/vnd.sun.xml.writer": {
	source: "apache",
	extensions: [
		"sxw"
	]
},
	"application/vnd.sun.xml.writer.global": {
	source: "apache",
	extensions: [
		"sxg"
	]
},
	"application/vnd.sun.xml.writer.template": {
	source: "apache",
	extensions: [
		"stw"
	]
},
	"application/vnd.sus-calendar": {
	source: "iana",
	extensions: [
		"sus",
		"susp"
	]
},
	"application/vnd.svd": {
	source: "iana",
	extensions: [
		"svd"
	]
},
	"application/vnd.swiftview-ics": {
	source: "iana"
},
	"application/vnd.symbian.install": {
	source: "apache",
	extensions: [
		"sis",
		"sisx"
	]
},
	"application/vnd.syncml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsm"
	]
},
	"application/vnd.syncml.dm+wbxml": {
	source: "iana",
	extensions: [
		"bdm"
	]
},
	"application/vnd.syncml.dm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdm"
	]
},
	"application/vnd.syncml.dm.notification": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ddf"
	]
},
	"application/vnd.syncml.dmtnds+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmtnds+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.syncml.ds.notification": {
	source: "iana"
},
	"application/vnd.tableschema+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tao.intent-module-archive": {
	source: "iana",
	extensions: [
		"tao"
	]
},
	"application/vnd.tcpdump.pcap": {
	source: "iana",
	extensions: [
		"pcap",
		"cap",
		"dmp"
	]
},
	"application/vnd.think-cell.ppttc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tmd.mediaflex.api+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.tml": {
	source: "iana"
},
	"application/vnd.tmobile-livetv": {
	source: "iana",
	extensions: [
		"tmo"
	]
},
	"application/vnd.tri.onesource": {
	source: "iana"
},
	"application/vnd.trid.tpt": {
	source: "iana",
	extensions: [
		"tpt"
	]
},
	"application/vnd.triscape.mxs": {
	source: "iana",
	extensions: [
		"mxs"
	]
},
	"application/vnd.trueapp": {
	source: "iana",
	extensions: [
		"tra"
	]
},
	"application/vnd.truedoc": {
	source: "iana"
},
	"application/vnd.ubisoft.webplayer": {
	source: "iana"
},
	"application/vnd.ufdl": {
	source: "iana",
	extensions: [
		"ufd",
		"ufdl"
	]
},
	"application/vnd.uiq.theme": {
	source: "iana",
	extensions: [
		"utz"
	]
},
	"application/vnd.umajin": {
	source: "iana",
	extensions: [
		"umj"
	]
},
	"application/vnd.unity": {
	source: "iana",
	extensions: [
		"unityweb"
	]
},
	"application/vnd.uoml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uoml"
	]
},
	"application/vnd.uplanet.alert": {
	source: "iana"
},
	"application/vnd.uplanet.alert-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.channel": {
	source: "iana"
},
	"application/vnd.uplanet.channel-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.list": {
	source: "iana"
},
	"application/vnd.uplanet.list-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.signal": {
	source: "iana"
},
	"application/vnd.uri-map": {
	source: "iana"
},
	"application/vnd.valve.source.material": {
	source: "iana"
},
	"application/vnd.vcx": {
	source: "iana",
	extensions: [
		"vcx"
	]
},
	"application/vnd.vd-study": {
	source: "iana"
},
	"application/vnd.vectorworks": {
	source: "iana"
},
	"application/vnd.vel+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.verimatrix.vcas": {
	source: "iana"
},
	"application/vnd.veryant.thin": {
	source: "iana"
},
	"application/vnd.ves.encrypted": {
	source: "iana"
},
	"application/vnd.vidsoft.vidconference": {
	source: "iana"
},
	"application/vnd.visio": {
	source: "iana",
	extensions: [
		"vsd",
		"vst",
		"vss",
		"vsw"
	]
},
	"application/vnd.visionary": {
	source: "iana",
	extensions: [
		"vis"
	]
},
	"application/vnd.vividence.scriptfile": {
	source: "iana"
},
	"application/vnd.vsf": {
	source: "iana",
	extensions: [
		"vsf"
	]
},
	"application/vnd.wap.sic": {
	source: "iana"
},
	"application/vnd.wap.slc": {
	source: "iana"
},
	"application/vnd.wap.wbxml": {
	source: "iana",
	extensions: [
		"wbxml"
	]
},
	"application/vnd.wap.wmlc": {
	source: "iana",
	extensions: [
		"wmlc"
	]
},
	"application/vnd.wap.wmlscriptc": {
	source: "iana",
	extensions: [
		"wmlsc"
	]
},
	"application/vnd.webturbo": {
	source: "iana",
	extensions: [
		"wtb"
	]
},
	"application/vnd.wfa.p2p": {
	source: "iana"
},
	"application/vnd.wfa.wsc": {
	source: "iana"
},
	"application/vnd.windows.devicepairing": {
	source: "iana"
},
	"application/vnd.wmc": {
	source: "iana"
},
	"application/vnd.wmf.bootstrap": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica.package": {
	source: "iana"
},
	"application/vnd.wolfram.player": {
	source: "iana",
	extensions: [
		"nbp"
	]
},
	"application/vnd.wordperfect": {
	source: "iana",
	extensions: [
		"wpd"
	]
},
	"application/vnd.wqd": {
	source: "iana",
	extensions: [
		"wqd"
	]
},
	"application/vnd.wrq-hp3000-labelled": {
	source: "iana"
},
	"application/vnd.wt.stf": {
	source: "iana",
	extensions: [
		"stf"
	]
},
	"application/vnd.wv.csp+wbxml": {
	source: "iana"
},
	"application/vnd.wv.csp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.wv.ssp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xacml+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.xara": {
	source: "iana",
	extensions: [
		"xar"
	]
},
	"application/vnd.xfdl": {
	source: "iana",
	extensions: [
		"xfdl"
	]
},
	"application/vnd.xfdl.webform": {
	source: "iana"
},
	"application/vnd.xmi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xmpie.cpkg": {
	source: "iana"
},
	"application/vnd.xmpie.dpkg": {
	source: "iana"
},
	"application/vnd.xmpie.plan": {
	source: "iana"
},
	"application/vnd.xmpie.ppkg": {
	source: "iana"
},
	"application/vnd.xmpie.xlim": {
	source: "iana"
},
	"application/vnd.yamaha.hv-dic": {
	source: "iana",
	extensions: [
		"hvd"
	]
},
	"application/vnd.yamaha.hv-script": {
	source: "iana",
	extensions: [
		"hvs"
	]
},
	"application/vnd.yamaha.hv-voice": {
	source: "iana",
	extensions: [
		"hvp"
	]
},
	"application/vnd.yamaha.openscoreformat": {
	source: "iana",
	extensions: [
		"osf"
	]
},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osfpvg"
	]
},
	"application/vnd.yamaha.remote-setup": {
	source: "iana"
},
	"application/vnd.yamaha.smaf-audio": {
	source: "iana",
	extensions: [
		"saf"
	]
},
	"application/vnd.yamaha.smaf-phrase": {
	source: "iana",
	extensions: [
		"spf"
	]
},
	"application/vnd.yamaha.through-ngn": {
	source: "iana"
},
	"application/vnd.yamaha.tunnel-udpencap": {
	source: "iana"
},
	"application/vnd.yaoweme": {
	source: "iana"
},
	"application/vnd.yellowriver-custom-menu": {
	source: "iana",
	extensions: [
		"cmp"
	]
},
	"application/vnd.youtube.yt": {
	source: "iana"
},
	"application/vnd.zul": {
	source: "iana",
	extensions: [
		"zir",
		"zirz"
	]
},
	"application/vnd.zzazz.deck+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zaz"
	]
},
	"application/voicexml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"vxml"
	]
},
	"application/voucher-cms+json": {
	source: "iana",
	compressible: true
},
	"application/vq-rtcpxr": {
	source: "iana"
},
	"application/wasm": {
	compressible: true,
	extensions: [
		"wasm"
	]
},
	"application/watcherinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/webpush-options+json": {
	source: "iana",
	compressible: true
},
	"application/whoispp-query": {
	source: "iana"
},
	"application/whoispp-response": {
	source: "iana"
},
	"application/widget": {
	source: "iana",
	extensions: [
		"wgt"
	]
},
	"application/winhlp": {
	source: "apache",
	extensions: [
		"hlp"
	]
},
	"application/wita": {
	source: "iana"
},
	"application/wordperfect5.1": {
	source: "iana"
},
	"application/wsdl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wsdl"
	]
},
	"application/wspolicy+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wspolicy"
	]
},
	"application/x-7z-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"7z"
	]
},
	"application/x-abiword": {
	source: "apache",
	extensions: [
		"abw"
	]
},
	"application/x-ace-compressed": {
	source: "apache",
	extensions: [
		"ace"
	]
},
	"application/x-amf": {
	source: "apache"
},
	"application/x-apple-diskimage": {
	source: "apache",
	extensions: [
		"dmg"
	]
},
	"application/x-arj": {
	compressible: false,
	extensions: [
		"arj"
	]
},
	"application/x-authorware-bin": {
	source: "apache",
	extensions: [
		"aab",
		"x32",
		"u32",
		"vox"
	]
},
	"application/x-authorware-map": {
	source: "apache",
	extensions: [
		"aam"
	]
},
	"application/x-authorware-seg": {
	source: "apache",
	extensions: [
		"aas"
	]
},
	"application/x-bcpio": {
	source: "apache",
	extensions: [
		"bcpio"
	]
},
	"application/x-bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/x-bittorrent": {
	source: "apache",
	extensions: [
		"torrent"
	]
},
	"application/x-blorb": {
	source: "apache",
	extensions: [
		"blb",
		"blorb"
	]
},
	"application/x-bzip": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz"
	]
},
	"application/x-bzip2": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz2",
		"boz"
	]
},
	"application/x-cbr": {
	source: "apache",
	extensions: [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	]
},
	"application/x-cdlink": {
	source: "apache",
	extensions: [
		"vcd"
	]
},
	"application/x-cfs-compressed": {
	source: "apache",
	extensions: [
		"cfs"
	]
},
	"application/x-chat": {
	source: "apache",
	extensions: [
		"chat"
	]
},
	"application/x-chess-pgn": {
	source: "apache",
	extensions: [
		"pgn"
	]
},
	"application/x-chrome-extension": {
	extensions: [
		"crx"
	]
},
	"application/x-cocoa": {
	source: "nginx",
	extensions: [
		"cco"
	]
},
	"application/x-compress": {
	source: "apache"
},
	"application/x-conference": {
	source: "apache",
	extensions: [
		"nsc"
	]
},
	"application/x-cpio": {
	source: "apache",
	extensions: [
		"cpio"
	]
},
	"application/x-csh": {
	source: "apache",
	extensions: [
		"csh"
	]
},
	"application/x-deb": {
	compressible: false
},
	"application/x-debian-package": {
	source: "apache",
	extensions: [
		"deb",
		"udeb"
	]
},
	"application/x-dgc-compressed": {
	source: "apache",
	extensions: [
		"dgc"
	]
},
	"application/x-director": {
	source: "apache",
	extensions: [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	]
},
	"application/x-doom": {
	source: "apache",
	extensions: [
		"wad"
	]
},
	"application/x-dtbncx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ncx"
	]
},
	"application/x-dtbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dtb"
	]
},
	"application/x-dtbresource+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"res"
	]
},
	"application/x-dvi": {
	source: "apache",
	compressible: false,
	extensions: [
		"dvi"
	]
},
	"application/x-envoy": {
	source: "apache",
	extensions: [
		"evy"
	]
},
	"application/x-eva": {
	source: "apache",
	extensions: [
		"eva"
	]
},
	"application/x-font-bdf": {
	source: "apache",
	extensions: [
		"bdf"
	]
},
	"application/x-font-dos": {
	source: "apache"
},
	"application/x-font-framemaker": {
	source: "apache"
},
	"application/x-font-ghostscript": {
	source: "apache",
	extensions: [
		"gsf"
	]
},
	"application/x-font-libgrx": {
	source: "apache"
},
	"application/x-font-linux-psf": {
	source: "apache",
	extensions: [
		"psf"
	]
},
	"application/x-font-pcf": {
	source: "apache",
	extensions: [
		"pcf"
	]
},
	"application/x-font-snf": {
	source: "apache",
	extensions: [
		"snf"
	]
},
	"application/x-font-speedo": {
	source: "apache"
},
	"application/x-font-sunos-news": {
	source: "apache"
},
	"application/x-font-type1": {
	source: "apache",
	extensions: [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	]
},
	"application/x-font-vfont": {
	source: "apache"
},
	"application/x-freearc": {
	source: "apache",
	extensions: [
		"arc"
	]
},
	"application/x-futuresplash": {
	source: "apache",
	extensions: [
		"spl"
	]
},
	"application/x-gca-compressed": {
	source: "apache",
	extensions: [
		"gca"
	]
},
	"application/x-glulx": {
	source: "apache",
	extensions: [
		"ulx"
	]
},
	"application/x-gnumeric": {
	source: "apache",
	extensions: [
		"gnumeric"
	]
},
	"application/x-gramps-xml": {
	source: "apache",
	extensions: [
		"gramps"
	]
},
	"application/x-gtar": {
	source: "apache",
	extensions: [
		"gtar"
	]
},
	"application/x-gzip": {
	source: "apache"
},
	"application/x-hdf": {
	source: "apache",
	extensions: [
		"hdf"
	]
},
	"application/x-httpd-php": {
	compressible: true,
	extensions: [
		"php"
	]
},
	"application/x-install-instructions": {
	source: "apache",
	extensions: [
		"install"
	]
},
	"application/x-iso9660-image": {
	source: "apache",
	extensions: [
		"iso"
	]
},
	"application/x-java-archive-diff": {
	source: "nginx",
	extensions: [
		"jardiff"
	]
},
	"application/x-java-jnlp-file": {
	source: "apache",
	compressible: false,
	extensions: [
		"jnlp"
	]
},
	"application/x-javascript": {
	compressible: true
},
	"application/x-keepass2": {
	extensions: [
		"kdbx"
	]
},
	"application/x-latex": {
	source: "apache",
	compressible: false,
	extensions: [
		"latex"
	]
},
	"application/x-lua-bytecode": {
	extensions: [
		"luac"
	]
},
	"application/x-lzh-compressed": {
	source: "apache",
	extensions: [
		"lzh",
		"lha"
	]
},
	"application/x-makeself": {
	source: "nginx",
	extensions: [
		"run"
	]
},
	"application/x-mie": {
	source: "apache",
	extensions: [
		"mie"
	]
},
	"application/x-mobipocket-ebook": {
	source: "apache",
	extensions: [
		"prc",
		"mobi"
	]
},
	"application/x-mpegurl": {
	compressible: false
},
	"application/x-ms-application": {
	source: "apache",
	extensions: [
		"application"
	]
},
	"application/x-ms-shortcut": {
	source: "apache",
	extensions: [
		"lnk"
	]
},
	"application/x-ms-wmd": {
	source: "apache",
	extensions: [
		"wmd"
	]
},
	"application/x-ms-wmz": {
	source: "apache",
	extensions: [
		"wmz"
	]
},
	"application/x-ms-xbap": {
	source: "apache",
	extensions: [
		"xbap"
	]
},
	"application/x-msaccess": {
	source: "apache",
	extensions: [
		"mdb"
	]
},
	"application/x-msbinder": {
	source: "apache",
	extensions: [
		"obd"
	]
},
	"application/x-mscardfile": {
	source: "apache",
	extensions: [
		"crd"
	]
},
	"application/x-msclip": {
	source: "apache",
	extensions: [
		"clp"
	]
},
	"application/x-msdos-program": {
	extensions: [
		"exe"
	]
},
	"application/x-msdownload": {
	source: "apache",
	extensions: [
		"exe",
		"dll",
		"com",
		"bat",
		"msi"
	]
},
	"application/x-msmediaview": {
	source: "apache",
	extensions: [
		"mvb",
		"m13",
		"m14"
	]
},
	"application/x-msmetafile": {
	source: "apache",
	extensions: [
		"wmf",
		"wmz",
		"emf",
		"emz"
	]
},
	"application/x-msmoney": {
	source: "apache",
	extensions: [
		"mny"
	]
},
	"application/x-mspublisher": {
	source: "apache",
	extensions: [
		"pub"
	]
},
	"application/x-msschedule": {
	source: "apache",
	extensions: [
		"scd"
	]
},
	"application/x-msterminal": {
	source: "apache",
	extensions: [
		"trm"
	]
},
	"application/x-mswrite": {
	source: "apache",
	extensions: [
		"wri"
	]
},
	"application/x-netcdf": {
	source: "apache",
	extensions: [
		"nc",
		"cdf"
	]
},
	"application/x-ns-proxy-autoconfig": {
	compressible: true,
	extensions: [
		"pac"
	]
},
	"application/x-nzb": {
	source: "apache",
	extensions: [
		"nzb"
	]
},
	"application/x-perl": {
	source: "nginx",
	extensions: [
		"pl",
		"pm"
	]
},
	"application/x-pilot": {
	source: "nginx",
	extensions: [
		"prc",
		"pdb"
	]
},
	"application/x-pkcs12": {
	source: "apache",
	compressible: false,
	extensions: [
		"p12",
		"pfx"
	]
},
	"application/x-pkcs7-certificates": {
	source: "apache",
	extensions: [
		"p7b",
		"spc"
	]
},
	"application/x-pkcs7-certreqresp": {
	source: "apache",
	extensions: [
		"p7r"
	]
},
	"application/x-rar-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"rar"
	]
},
	"application/x-redhat-package-manager": {
	source: "nginx",
	extensions: [
		"rpm"
	]
},
	"application/x-research-info-systems": {
	source: "apache",
	extensions: [
		"ris"
	]
},
	"application/x-sea": {
	source: "nginx",
	extensions: [
		"sea"
	]
},
	"application/x-sh": {
	source: "apache",
	compressible: true,
	extensions: [
		"sh"
	]
},
	"application/x-shar": {
	source: "apache",
	extensions: [
		"shar"
	]
},
	"application/x-shockwave-flash": {
	source: "apache",
	compressible: false,
	extensions: [
		"swf"
	]
},
	"application/x-silverlight-app": {
	source: "apache",
	extensions: [
		"xap"
	]
},
	"application/x-sql": {
	source: "apache",
	extensions: [
		"sql"
	]
},
	"application/x-stuffit": {
	source: "apache",
	compressible: false,
	extensions: [
		"sit"
	]
},
	"application/x-stuffitx": {
	source: "apache",
	extensions: [
		"sitx"
	]
},
	"application/x-subrip": {
	source: "apache",
	extensions: [
		"srt"
	]
},
	"application/x-sv4cpio": {
	source: "apache",
	extensions: [
		"sv4cpio"
	]
},
	"application/x-sv4crc": {
	source: "apache",
	extensions: [
		"sv4crc"
	]
},
	"application/x-t3vm-image": {
	source: "apache",
	extensions: [
		"t3"
	]
},
	"application/x-tads": {
	source: "apache",
	extensions: [
		"gam"
	]
},
	"application/x-tar": {
	source: "apache",
	compressible: true,
	extensions: [
		"tar"
	]
},
	"application/x-tcl": {
	source: "apache",
	extensions: [
		"tcl",
		"tk"
	]
},
	"application/x-tex": {
	source: "apache",
	extensions: [
		"tex"
	]
},
	"application/x-tex-tfm": {
	source: "apache",
	extensions: [
		"tfm"
	]
},
	"application/x-texinfo": {
	source: "apache",
	extensions: [
		"texinfo",
		"texi"
	]
},
	"application/x-tgif": {
	source: "apache",
	extensions: [
		"obj"
	]
},
	"application/x-ustar": {
	source: "apache",
	extensions: [
		"ustar"
	]
},
	"application/x-virtualbox-hdd": {
	compressible: true,
	extensions: [
		"hdd"
	]
},
	"application/x-virtualbox-ova": {
	compressible: true,
	extensions: [
		"ova"
	]
},
	"application/x-virtualbox-ovf": {
	compressible: true,
	extensions: [
		"ovf"
	]
},
	"application/x-virtualbox-vbox": {
	compressible: true,
	extensions: [
		"vbox"
	]
},
	"application/x-virtualbox-vbox-extpack": {
	compressible: false,
	extensions: [
		"vbox-extpack"
	]
},
	"application/x-virtualbox-vdi": {
	compressible: true,
	extensions: [
		"vdi"
	]
},
	"application/x-virtualbox-vhd": {
	compressible: true,
	extensions: [
		"vhd"
	]
},
	"application/x-virtualbox-vmdk": {
	compressible: true,
	extensions: [
		"vmdk"
	]
},
	"application/x-wais-source": {
	source: "apache",
	extensions: [
		"src"
	]
},
	"application/x-web-app-manifest+json": {
	compressible: true,
	extensions: [
		"webapp"
	]
},
	"application/x-www-form-urlencoded": {
	source: "iana",
	compressible: true
},
	"application/x-x509-ca-cert": {
	source: "apache",
	extensions: [
		"der",
		"crt",
		"pem"
	]
},
	"application/x-xfig": {
	source: "apache",
	extensions: [
		"fig"
	]
},
	"application/x-xliff+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/x-xpinstall": {
	source: "apache",
	compressible: false,
	extensions: [
		"xpi"
	]
},
	"application/x-xz": {
	source: "apache",
	extensions: [
		"xz"
	]
},
	"application/x-zmachine": {
	source: "apache",
	extensions: [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	]
},
	"application/x400-bp": {
	source: "iana"
},
	"application/xacml+xml": {
	source: "iana",
	compressible: true
},
	"application/xaml+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xaml"
	]
},
	"application/xcap-att+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xav"
	]
},
	"application/xcap-caps+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xca"
	]
},
	"application/xcap-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/xcap-el+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xel"
	]
},
	"application/xcap-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/xcap-ns+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xns"
	]
},
	"application/xcon-conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/xcon-conference-info-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/xenc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xenc"
	]
},
	"application/xhtml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtml",
		"xht"
	]
},
	"application/xhtml-voice+xml": {
	source: "apache",
	compressible: true
},
	"application/xliff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml",
		"xsl",
		"xsd",
		"rng"
	]
},
	"application/xml-dtd": {
	source: "iana",
	compressible: true,
	extensions: [
		"dtd"
	]
},
	"application/xml-external-parsed-entity": {
	source: "iana"
},
	"application/xml-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/xmpp+xml": {
	source: "iana",
	compressible: true
},
	"application/xop+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xop"
	]
},
	"application/xproc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xpl"
	]
},
	"application/xslt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xslt"
	]
},
	"application/xspf+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xspf"
	]
},
	"application/xv+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	]
},
	"application/yang": {
	source: "iana",
	extensions: [
		"yang"
	]
},
	"application/yang-data+json": {
	source: "iana",
	compressible: true
},
	"application/yang-data+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+json": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/yin+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"yin"
	]
},
	"application/zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"zip"
	]
},
	"application/zlib": {
	source: "iana"
},
	"application/zstd": {
	source: "iana"
},
	"audio/1d-interleaved-parityfec": {
	source: "iana"
},
	"audio/32kadpcm": {
	source: "iana"
},
	"audio/3gpp": {
	source: "iana",
	compressible: false,
	extensions: [
		"3gpp"
	]
},
	"audio/3gpp2": {
	source: "iana"
},
	"audio/aac": {
	source: "iana"
},
	"audio/ac3": {
	source: "iana"
},
	"audio/adpcm": {
	source: "apache",
	extensions: [
		"adp"
	]
},
	"audio/amr": {
	source: "iana"
},
	"audio/amr-wb": {
	source: "iana"
},
	"audio/amr-wb+": {
	source: "iana"
},
	"audio/aptx": {
	source: "iana"
},
	"audio/asc": {
	source: "iana"
},
	"audio/atrac-advanced-lossless": {
	source: "iana"
},
	"audio/atrac-x": {
	source: "iana"
},
	"audio/atrac3": {
	source: "iana"
},
	"audio/basic": {
	source: "iana",
	compressible: false,
	extensions: [
		"au",
		"snd"
	]
},
	"audio/bv16": {
	source: "iana"
},
	"audio/bv32": {
	source: "iana"
},
	"audio/clearmode": {
	source: "iana"
},
	"audio/cn": {
	source: "iana"
},
	"audio/dat12": {
	source: "iana"
},
	"audio/dls": {
	source: "iana"
},
	"audio/dsr-es201108": {
	source: "iana"
},
	"audio/dsr-es202050": {
	source: "iana"
},
	"audio/dsr-es202211": {
	source: "iana"
},
	"audio/dsr-es202212": {
	source: "iana"
},
	"audio/dv": {
	source: "iana"
},
	"audio/dvi4": {
	source: "iana"
},
	"audio/eac3": {
	source: "iana"
},
	"audio/encaprtp": {
	source: "iana"
},
	"audio/evrc": {
	source: "iana"
},
	"audio/evrc-qcp": {
	source: "iana"
},
	"audio/evrc0": {
	source: "iana"
},
	"audio/evrc1": {
	source: "iana"
},
	"audio/evrcb": {
	source: "iana"
},
	"audio/evrcb0": {
	source: "iana"
},
	"audio/evrcb1": {
	source: "iana"
},
	"audio/evrcnw": {
	source: "iana"
},
	"audio/evrcnw0": {
	source: "iana"
},
	"audio/evrcnw1": {
	source: "iana"
},
	"audio/evrcwb": {
	source: "iana"
},
	"audio/evrcwb0": {
	source: "iana"
},
	"audio/evrcwb1": {
	source: "iana"
},
	"audio/evs": {
	source: "iana"
},
	"audio/flexfec": {
	source: "iana"
},
	"audio/fwdred": {
	source: "iana"
},
	"audio/g711-0": {
	source: "iana"
},
	"audio/g719": {
	source: "iana"
},
	"audio/g722": {
	source: "iana"
},
	"audio/g7221": {
	source: "iana"
},
	"audio/g723": {
	source: "iana"
},
	"audio/g726-16": {
	source: "iana"
},
	"audio/g726-24": {
	source: "iana"
},
	"audio/g726-32": {
	source: "iana"
},
	"audio/g726-40": {
	source: "iana"
},
	"audio/g728": {
	source: "iana"
},
	"audio/g729": {
	source: "iana"
},
	"audio/g7291": {
	source: "iana"
},
	"audio/g729d": {
	source: "iana"
},
	"audio/g729e": {
	source: "iana"
},
	"audio/gsm": {
	source: "iana"
},
	"audio/gsm-efr": {
	source: "iana"
},
	"audio/gsm-hr-08": {
	source: "iana"
},
	"audio/ilbc": {
	source: "iana"
},
	"audio/ip-mr_v2.5": {
	source: "iana"
},
	"audio/isac": {
	source: "apache"
},
	"audio/l16": {
	source: "iana"
},
	"audio/l20": {
	source: "iana"
},
	"audio/l24": {
	source: "iana",
	compressible: false
},
	"audio/l8": {
	source: "iana"
},
	"audio/lpc": {
	source: "iana"
},
	"audio/melp": {
	source: "iana"
},
	"audio/melp1200": {
	source: "iana"
},
	"audio/melp2400": {
	source: "iana"
},
	"audio/melp600": {
	source: "iana"
},
	"audio/midi": {
	source: "apache",
	extensions: [
		"mid",
		"midi",
		"kar",
		"rmi"
	]
},
	"audio/mobile-xmf": {
	source: "iana",
	extensions: [
		"mxmf"
	]
},
	"audio/mp3": {
	compressible: false,
	extensions: [
		"mp3"
	]
},
	"audio/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"m4a",
		"mp4a"
	]
},
	"audio/mp4a-latm": {
	source: "iana"
},
	"audio/mpa": {
	source: "iana"
},
	"audio/mpa-robust": {
	source: "iana"
},
	"audio/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	]
},
	"audio/mpeg4-generic": {
	source: "iana"
},
	"audio/musepack": {
	source: "apache"
},
	"audio/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"oga",
		"ogg",
		"spx"
	]
},
	"audio/opus": {
	source: "iana"
},
	"audio/parityfec": {
	source: "iana"
},
	"audio/pcma": {
	source: "iana"
},
	"audio/pcma-wb": {
	source: "iana"
},
	"audio/pcmu": {
	source: "iana"
},
	"audio/pcmu-wb": {
	source: "iana"
},
	"audio/prs.sid": {
	source: "iana"
},
	"audio/qcelp": {
	source: "iana"
},
	"audio/raptorfec": {
	source: "iana"
},
	"audio/red": {
	source: "iana"
},
	"audio/rtp-enc-aescm128": {
	source: "iana"
},
	"audio/rtp-midi": {
	source: "iana"
},
	"audio/rtploopback": {
	source: "iana"
},
	"audio/rtx": {
	source: "iana"
},
	"audio/s3m": {
	source: "apache",
	extensions: [
		"s3m"
	]
},
	"audio/silk": {
	source: "apache",
	extensions: [
		"sil"
	]
},
	"audio/smv": {
	source: "iana"
},
	"audio/smv-qcp": {
	source: "iana"
},
	"audio/smv0": {
	source: "iana"
},
	"audio/sp-midi": {
	source: "iana"
},
	"audio/speex": {
	source: "iana"
},
	"audio/t140c": {
	source: "iana"
},
	"audio/t38": {
	source: "iana"
},
	"audio/telephone-event": {
	source: "iana"
},
	"audio/tetra_acelp": {
	source: "iana"
},
	"audio/tone": {
	source: "iana"
},
	"audio/uemclip": {
	source: "iana"
},
	"audio/ulpfec": {
	source: "iana"
},
	"audio/usac": {
	source: "iana"
},
	"audio/vdvi": {
	source: "iana"
},
	"audio/vmr-wb": {
	source: "iana"
},
	"audio/vnd.3gpp.iufp": {
	source: "iana"
},
	"audio/vnd.4sb": {
	source: "iana"
},
	"audio/vnd.audiokoz": {
	source: "iana"
},
	"audio/vnd.celp": {
	source: "iana"
},
	"audio/vnd.cisco.nse": {
	source: "iana"
},
	"audio/vnd.cmles.radio-events": {
	source: "iana"
},
	"audio/vnd.cns.anp1": {
	source: "iana"
},
	"audio/vnd.cns.inf1": {
	source: "iana"
},
	"audio/vnd.dece.audio": {
	source: "iana",
	extensions: [
		"uva",
		"uvva"
	]
},
	"audio/vnd.digital-winds": {
	source: "iana",
	extensions: [
		"eol"
	]
},
	"audio/vnd.dlna.adts": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.1": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.2": {
	source: "iana"
},
	"audio/vnd.dolby.mlp": {
	source: "iana"
},
	"audio/vnd.dolby.mps": {
	source: "iana"
},
	"audio/vnd.dolby.pl2": {
	source: "iana"
},
	"audio/vnd.dolby.pl2x": {
	source: "iana"
},
	"audio/vnd.dolby.pl2z": {
	source: "iana"
},
	"audio/vnd.dolby.pulse.1": {
	source: "iana"
},
	"audio/vnd.dra": {
	source: "iana",
	extensions: [
		"dra"
	]
},
	"audio/vnd.dts": {
	source: "iana",
	extensions: [
		"dts"
	]
},
	"audio/vnd.dts.hd": {
	source: "iana",
	extensions: [
		"dtshd"
	]
},
	"audio/vnd.dts.uhd": {
	source: "iana"
},
	"audio/vnd.dvb.file": {
	source: "iana"
},
	"audio/vnd.everad.plj": {
	source: "iana"
},
	"audio/vnd.hns.audio": {
	source: "iana"
},
	"audio/vnd.lucent.voice": {
	source: "iana",
	extensions: [
		"lvp"
	]
},
	"audio/vnd.ms-playready.media.pya": {
	source: "iana",
	extensions: [
		"pya"
	]
},
	"audio/vnd.nokia.mobile-xmf": {
	source: "iana"
},
	"audio/vnd.nortel.vbk": {
	source: "iana"
},
	"audio/vnd.nuera.ecelp4800": {
	source: "iana",
	extensions: [
		"ecelp4800"
	]
},
	"audio/vnd.nuera.ecelp7470": {
	source: "iana",
	extensions: [
		"ecelp7470"
	]
},
	"audio/vnd.nuera.ecelp9600": {
	source: "iana",
	extensions: [
		"ecelp9600"
	]
},
	"audio/vnd.octel.sbc": {
	source: "iana"
},
	"audio/vnd.presonus.multitrack": {
	source: "iana"
},
	"audio/vnd.qcelp": {
	source: "iana"
},
	"audio/vnd.rhetorex.32kadpcm": {
	source: "iana"
},
	"audio/vnd.rip": {
	source: "iana",
	extensions: [
		"rip"
	]
},
	"audio/vnd.rn-realaudio": {
	compressible: false
},
	"audio/vnd.sealedmedia.softseal.mpeg": {
	source: "iana"
},
	"audio/vnd.vmx.cvsd": {
	source: "iana"
},
	"audio/vnd.wave": {
	compressible: false
},
	"audio/vorbis": {
	source: "iana",
	compressible: false
},
	"audio/vorbis-config": {
	source: "iana"
},
	"audio/wav": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/wave": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"weba"
	]
},
	"audio/x-aac": {
	source: "apache",
	compressible: false,
	extensions: [
		"aac"
	]
},
	"audio/x-aiff": {
	source: "apache",
	extensions: [
		"aif",
		"aiff",
		"aifc"
	]
},
	"audio/x-caf": {
	source: "apache",
	compressible: false,
	extensions: [
		"caf"
	]
},
	"audio/x-flac": {
	source: "apache",
	extensions: [
		"flac"
	]
},
	"audio/x-m4a": {
	source: "nginx",
	extensions: [
		"m4a"
	]
},
	"audio/x-matroska": {
	source: "apache",
	extensions: [
		"mka"
	]
},
	"audio/x-mpegurl": {
	source: "apache",
	extensions: [
		"m3u"
	]
},
	"audio/x-ms-wax": {
	source: "apache",
	extensions: [
		"wax"
	]
},
	"audio/x-ms-wma": {
	source: "apache",
	extensions: [
		"wma"
	]
},
	"audio/x-pn-realaudio": {
	source: "apache",
	extensions: [
		"ram",
		"ra"
	]
},
	"audio/x-pn-realaudio-plugin": {
	source: "apache",
	extensions: [
		"rmp"
	]
},
	"audio/x-realaudio": {
	source: "nginx",
	extensions: [
		"ra"
	]
},
	"audio/x-tta": {
	source: "apache"
},
	"audio/x-wav": {
	source: "apache",
	extensions: [
		"wav"
	]
},
	"audio/xm": {
	source: "apache",
	extensions: [
		"xm"
	]
},
	"chemical/x-cdx": {
	source: "apache",
	extensions: [
		"cdx"
	]
},
	"chemical/x-cif": {
	source: "apache",
	extensions: [
		"cif"
	]
},
	"chemical/x-cmdf": {
	source: "apache",
	extensions: [
		"cmdf"
	]
},
	"chemical/x-cml": {
	source: "apache",
	extensions: [
		"cml"
	]
},
	"chemical/x-csml": {
	source: "apache",
	extensions: [
		"csml"
	]
},
	"chemical/x-pdb": {
	source: "apache"
},
	"chemical/x-xyz": {
	source: "apache",
	extensions: [
		"xyz"
	]
},
	"font/collection": {
	source: "iana",
	extensions: [
		"ttc"
	]
},
	"font/otf": {
	source: "iana",
	compressible: true,
	extensions: [
		"otf"
	]
},
	"font/sfnt": {
	source: "iana"
},
	"font/ttf": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttf"
	]
},
	"font/woff": {
	source: "iana",
	extensions: [
		"woff"
	]
},
	"font/woff2": {
	source: "iana",
	extensions: [
		"woff2"
	]
},
	"image/aces": {
	source: "iana",
	extensions: [
		"exr"
	]
},
	"image/apng": {
	compressible: false,
	extensions: [
		"apng"
	]
},
	"image/avci": {
	source: "iana"
},
	"image/avcs": {
	source: "iana"
},
	"image/bmp": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/cgm": {
	source: "iana",
	extensions: [
		"cgm"
	]
},
	"image/dicom-rle": {
	source: "iana",
	extensions: [
		"drle"
	]
},
	"image/emf": {
	source: "iana",
	extensions: [
		"emf"
	]
},
	"image/fits": {
	source: "iana",
	extensions: [
		"fits"
	]
},
	"image/g3fax": {
	source: "iana",
	extensions: [
		"g3"
	]
},
	"image/gif": {
	source: "iana",
	compressible: false,
	extensions: [
		"gif"
	]
},
	"image/heic": {
	source: "iana",
	extensions: [
		"heic"
	]
},
	"image/heic-sequence": {
	source: "iana",
	extensions: [
		"heics"
	]
},
	"image/heif": {
	source: "iana",
	extensions: [
		"heif"
	]
},
	"image/heif-sequence": {
	source: "iana",
	extensions: [
		"heifs"
	]
},
	"image/hej2k": {
	source: "iana",
	extensions: [
		"hej2"
	]
},
	"image/hsj2": {
	source: "iana",
	extensions: [
		"hsj2"
	]
},
	"image/ief": {
	source: "iana",
	extensions: [
		"ief"
	]
},
	"image/jls": {
	source: "iana",
	extensions: [
		"jls"
	]
},
	"image/jp2": {
	source: "iana",
	compressible: false,
	extensions: [
		"jp2",
		"jpg2"
	]
},
	"image/jpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpeg",
		"jpg",
		"jpe"
	]
},
	"image/jph": {
	source: "iana",
	extensions: [
		"jph"
	]
},
	"image/jphc": {
	source: "iana",
	extensions: [
		"jhc"
	]
},
	"image/jpm": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpm"
	]
},
	"image/jpx": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpx",
		"jpf"
	]
},
	"image/jxr": {
	source: "iana",
	extensions: [
		"jxr"
	]
},
	"image/jxra": {
	source: "iana",
	extensions: [
		"jxra"
	]
},
	"image/jxrs": {
	source: "iana",
	extensions: [
		"jxrs"
	]
},
	"image/jxs": {
	source: "iana",
	extensions: [
		"jxs"
	]
},
	"image/jxsc": {
	source: "iana",
	extensions: [
		"jxsc"
	]
},
	"image/jxsi": {
	source: "iana",
	extensions: [
		"jxsi"
	]
},
	"image/jxss": {
	source: "iana",
	extensions: [
		"jxss"
	]
},
	"image/ktx": {
	source: "iana",
	extensions: [
		"ktx"
	]
},
	"image/naplps": {
	source: "iana"
},
	"image/pjpeg": {
	compressible: false
},
	"image/png": {
	source: "iana",
	compressible: false,
	extensions: [
		"png"
	]
},
	"image/prs.btif": {
	source: "iana",
	extensions: [
		"btif"
	]
},
	"image/prs.pti": {
	source: "iana",
	extensions: [
		"pti"
	]
},
	"image/pwg-raster": {
	source: "iana"
},
	"image/sgi": {
	source: "apache",
	extensions: [
		"sgi"
	]
},
	"image/svg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"svg",
		"svgz"
	]
},
	"image/t38": {
	source: "iana",
	extensions: [
		"t38"
	]
},
	"image/tiff": {
	source: "iana",
	compressible: false,
	extensions: [
		"tif",
		"tiff"
	]
},
	"image/tiff-fx": {
	source: "iana",
	extensions: [
		"tfx"
	]
},
	"image/vnd.adobe.photoshop": {
	source: "iana",
	compressible: true,
	extensions: [
		"psd"
	]
},
	"image/vnd.airzip.accelerator.azv": {
	source: "iana",
	extensions: [
		"azv"
	]
},
	"image/vnd.cns.inf2": {
	source: "iana"
},
	"image/vnd.dece.graphic": {
	source: "iana",
	extensions: [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	]
},
	"image/vnd.djvu": {
	source: "iana",
	extensions: [
		"djvu",
		"djv"
	]
},
	"image/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"image/vnd.dwg": {
	source: "iana",
	extensions: [
		"dwg"
	]
},
	"image/vnd.dxf": {
	source: "iana",
	extensions: [
		"dxf"
	]
},
	"image/vnd.fastbidsheet": {
	source: "iana",
	extensions: [
		"fbs"
	]
},
	"image/vnd.fpx": {
	source: "iana",
	extensions: [
		"fpx"
	]
},
	"image/vnd.fst": {
	source: "iana",
	extensions: [
		"fst"
	]
},
	"image/vnd.fujixerox.edmics-mmr": {
	source: "iana",
	extensions: [
		"mmr"
	]
},
	"image/vnd.fujixerox.edmics-rlc": {
	source: "iana",
	extensions: [
		"rlc"
	]
},
	"image/vnd.globalgraphics.pgb": {
	source: "iana"
},
	"image/vnd.microsoft.icon": {
	source: "iana",
	extensions: [
		"ico"
	]
},
	"image/vnd.mix": {
	source: "iana"
},
	"image/vnd.mozilla.apng": {
	source: "iana"
},
	"image/vnd.ms-dds": {
	extensions: [
		"dds"
	]
},
	"image/vnd.ms-modi": {
	source: "iana",
	extensions: [
		"mdi"
	]
},
	"image/vnd.ms-photo": {
	source: "apache",
	extensions: [
		"wdp"
	]
},
	"image/vnd.net-fpx": {
	source: "iana",
	extensions: [
		"npx"
	]
},
	"image/vnd.radiance": {
	source: "iana"
},
	"image/vnd.sealed.png": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.gif": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.jpg": {
	source: "iana"
},
	"image/vnd.svf": {
	source: "iana"
},
	"image/vnd.tencent.tap": {
	source: "iana",
	extensions: [
		"tap"
	]
},
	"image/vnd.valve.source.texture": {
	source: "iana",
	extensions: [
		"vtf"
	]
},
	"image/vnd.wap.wbmp": {
	source: "iana",
	extensions: [
		"wbmp"
	]
},
	"image/vnd.xiff": {
	source: "iana",
	extensions: [
		"xif"
	]
},
	"image/vnd.zbrush.pcx": {
	source: "iana",
	extensions: [
		"pcx"
	]
},
	"image/webp": {
	source: "apache",
	extensions: [
		"webp"
	]
},
	"image/wmf": {
	source: "iana",
	extensions: [
		"wmf"
	]
},
	"image/x-3ds": {
	source: "apache",
	extensions: [
		"3ds"
	]
},
	"image/x-cmu-raster": {
	source: "apache",
	extensions: [
		"ras"
	]
},
	"image/x-cmx": {
	source: "apache",
	extensions: [
		"cmx"
	]
},
	"image/x-freehand": {
	source: "apache",
	extensions: [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	]
},
	"image/x-icon": {
	source: "apache",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/x-jng": {
	source: "nginx",
	extensions: [
		"jng"
	]
},
	"image/x-mrsid-image": {
	source: "apache",
	extensions: [
		"sid"
	]
},
	"image/x-ms-bmp": {
	source: "nginx",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/x-pcx": {
	source: "apache",
	extensions: [
		"pcx"
	]
},
	"image/x-pict": {
	source: "apache",
	extensions: [
		"pic",
		"pct"
	]
},
	"image/x-portable-anymap": {
	source: "apache",
	extensions: [
		"pnm"
	]
},
	"image/x-portable-bitmap": {
	source: "apache",
	extensions: [
		"pbm"
	]
},
	"image/x-portable-graymap": {
	source: "apache",
	extensions: [
		"pgm"
	]
},
	"image/x-portable-pixmap": {
	source: "apache",
	extensions: [
		"ppm"
	]
},
	"image/x-rgb": {
	source: "apache",
	extensions: [
		"rgb"
	]
},
	"image/x-tga": {
	source: "apache",
	extensions: [
		"tga"
	]
},
	"image/x-xbitmap": {
	source: "apache",
	extensions: [
		"xbm"
	]
},
	"image/x-xcf": {
	compressible: false
},
	"image/x-xpixmap": {
	source: "apache",
	extensions: [
		"xpm"
	]
},
	"image/x-xwindowdump": {
	source: "apache",
	extensions: [
		"xwd"
	]
},
	"message/cpim": {
	source: "iana"
},
	"message/delivery-status": {
	source: "iana"
},
	"message/disposition-notification": {
	source: "iana",
	extensions: [
		"disposition-notification"
	]
},
	"message/external-body": {
	source: "iana"
},
	"message/feedback-report": {
	source: "iana"
},
	"message/global": {
	source: "iana",
	extensions: [
		"u8msg"
	]
},
	"message/global-delivery-status": {
	source: "iana",
	extensions: [
		"u8dsn"
	]
},
	"message/global-disposition-notification": {
	source: "iana",
	extensions: [
		"u8mdn"
	]
},
	"message/global-headers": {
	source: "iana",
	extensions: [
		"u8hdr"
	]
},
	"message/http": {
	source: "iana",
	compressible: false
},
	"message/imdn+xml": {
	source: "iana",
	compressible: true
},
	"message/news": {
	source: "iana"
},
	"message/partial": {
	source: "iana",
	compressible: false
},
	"message/rfc822": {
	source: "iana",
	compressible: true,
	extensions: [
		"eml",
		"mime"
	]
},
	"message/s-http": {
	source: "iana"
},
	"message/sip": {
	source: "iana"
},
	"message/sipfrag": {
	source: "iana"
},
	"message/tracking-status": {
	source: "iana"
},
	"message/vnd.si.simp": {
	source: "iana"
},
	"message/vnd.wfa.wsc": {
	source: "iana",
	extensions: [
		"wsc"
	]
},
	"model/3mf": {
	source: "iana",
	extensions: [
		"3mf"
	]
},
	"model/gltf+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"gltf"
	]
},
	"model/gltf-binary": {
	source: "iana",
	compressible: true,
	extensions: [
		"glb"
	]
},
	"model/iges": {
	source: "iana",
	compressible: false,
	extensions: [
		"igs",
		"iges"
	]
},
	"model/mesh": {
	source: "iana",
	compressible: false,
	extensions: [
		"msh",
		"mesh",
		"silo"
	]
},
	"model/stl": {
	source: "iana",
	extensions: [
		"stl"
	]
},
	"model/vnd.collada+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dae"
	]
},
	"model/vnd.dwf": {
	source: "iana",
	extensions: [
		"dwf"
	]
},
	"model/vnd.flatland.3dml": {
	source: "iana"
},
	"model/vnd.gdl": {
	source: "iana",
	extensions: [
		"gdl"
	]
},
	"model/vnd.gs-gdl": {
	source: "apache"
},
	"model/vnd.gs.gdl": {
	source: "iana"
},
	"model/vnd.gtw": {
	source: "iana",
	extensions: [
		"gtw"
	]
},
	"model/vnd.moml+xml": {
	source: "iana",
	compressible: true
},
	"model/vnd.mts": {
	source: "iana",
	extensions: [
		"mts"
	]
},
	"model/vnd.opengex": {
	source: "iana",
	extensions: [
		"ogex"
	]
},
	"model/vnd.parasolid.transmit.binary": {
	source: "iana",
	extensions: [
		"x_b"
	]
},
	"model/vnd.parasolid.transmit.text": {
	source: "iana",
	extensions: [
		"x_t"
	]
},
	"model/vnd.rosette.annotated-data-model": {
	source: "iana"
},
	"model/vnd.usdz+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"usdz"
	]
},
	"model/vnd.valve.source.compiled-map": {
	source: "iana",
	extensions: [
		"bsp"
	]
},
	"model/vnd.vtu": {
	source: "iana",
	extensions: [
		"vtu"
	]
},
	"model/vrml": {
	source: "iana",
	compressible: false,
	extensions: [
		"wrl",
		"vrml"
	]
},
	"model/x3d+binary": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3db",
		"x3dbz"
	]
},
	"model/x3d+fastinfoset": {
	source: "iana",
	extensions: [
		"x3db"
	]
},
	"model/x3d+vrml": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3dv",
		"x3dvz"
	]
},
	"model/x3d+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"x3d",
		"x3dz"
	]
},
	"model/x3d-vrml": {
	source: "iana",
	extensions: [
		"x3dv"
	]
},
	"multipart/alternative": {
	source: "iana",
	compressible: false
},
	"multipart/appledouble": {
	source: "iana"
},
	"multipart/byteranges": {
	source: "iana"
},
	"multipart/digest": {
	source: "iana"
},
	"multipart/encrypted": {
	source: "iana",
	compressible: false
},
	"multipart/form-data": {
	source: "iana",
	compressible: false
},
	"multipart/header-set": {
	source: "iana"
},
	"multipart/mixed": {
	source: "iana"
},
	"multipart/multilingual": {
	source: "iana"
},
	"multipart/parallel": {
	source: "iana"
},
	"multipart/related": {
	source: "iana",
	compressible: false
},
	"multipart/report": {
	source: "iana"
},
	"multipart/signed": {
	source: "iana",
	compressible: false
},
	"multipart/vnd.bint.med-plus": {
	source: "iana"
},
	"multipart/voice-message": {
	source: "iana"
},
	"multipart/x-mixed-replace": {
	source: "iana"
},
	"text/1d-interleaved-parityfec": {
	source: "iana"
},
	"text/cache-manifest": {
	source: "iana",
	compressible: true,
	extensions: [
		"appcache",
		"manifest"
	]
},
	"text/calendar": {
	source: "iana",
	extensions: [
		"ics",
		"ifb"
	]
},
	"text/calender": {
	compressible: true
},
	"text/cmd": {
	compressible: true
},
	"text/coffeescript": {
	extensions: [
		"coffee",
		"litcoffee"
	]
},
	"text/css": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"css"
	]
},
	"text/csv": {
	source: "iana",
	compressible: true,
	extensions: [
		"csv"
	]
},
	"text/csv-schema": {
	source: "iana"
},
	"text/directory": {
	source: "iana"
},
	"text/dns": {
	source: "iana"
},
	"text/ecmascript": {
	source: "iana"
},
	"text/encaprtp": {
	source: "iana"
},
	"text/enriched": {
	source: "iana"
},
	"text/flexfec": {
	source: "iana"
},
	"text/fwdred": {
	source: "iana"
},
	"text/grammar-ref-list": {
	source: "iana"
},
	"text/html": {
	source: "iana",
	compressible: true,
	extensions: [
		"html",
		"htm",
		"shtml"
	]
},
	"text/jade": {
	extensions: [
		"jade"
	]
},
	"text/javascript": {
	source: "iana",
	compressible: true
},
	"text/jcr-cnd": {
	source: "iana"
},
	"text/jsx": {
	compressible: true,
	extensions: [
		"jsx"
	]
},
	"text/less": {
	compressible: true,
	extensions: [
		"less"
	]
},
	"text/markdown": {
	source: "iana",
	compressible: true,
	extensions: [
		"markdown",
		"md"
	]
},
	"text/mathml": {
	source: "nginx",
	extensions: [
		"mml"
	]
},
	"text/mdx": {
	compressible: true,
	extensions: [
		"mdx"
	]
},
	"text/mizar": {
	source: "iana"
},
	"text/n3": {
	source: "iana",
	compressible: true,
	extensions: [
		"n3"
	]
},
	"text/parameters": {
	source: "iana"
},
	"text/parityfec": {
	source: "iana"
},
	"text/plain": {
	source: "iana",
	compressible: true,
	extensions: [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	]
},
	"text/provenance-notation": {
	source: "iana"
},
	"text/prs.fallenstein.rst": {
	source: "iana"
},
	"text/prs.lines.tag": {
	source: "iana",
	extensions: [
		"dsc"
	]
},
	"text/prs.prop.logic": {
	source: "iana"
},
	"text/raptorfec": {
	source: "iana"
},
	"text/red": {
	source: "iana"
},
	"text/rfc822-headers": {
	source: "iana"
},
	"text/richtext": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtx"
	]
},
	"text/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"text/rtp-enc-aescm128": {
	source: "iana"
},
	"text/rtploopback": {
	source: "iana"
},
	"text/rtx": {
	source: "iana"
},
	"text/sgml": {
	source: "iana",
	extensions: [
		"sgml",
		"sgm"
	]
},
	"text/shex": {
	extensions: [
		"shex"
	]
},
	"text/slim": {
	extensions: [
		"slim",
		"slm"
	]
},
	"text/strings": {
	source: "iana"
},
	"text/stylus": {
	extensions: [
		"stylus",
		"styl"
	]
},
	"text/t140": {
	source: "iana"
},
	"text/tab-separated-values": {
	source: "iana",
	compressible: true,
	extensions: [
		"tsv"
	]
},
	"text/troff": {
	source: "iana",
	extensions: [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	]
},
	"text/turtle": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"ttl"
	]
},
	"text/ulpfec": {
	source: "iana"
},
	"text/uri-list": {
	source: "iana",
	compressible: true,
	extensions: [
		"uri",
		"uris",
		"urls"
	]
},
	"text/vcard": {
	source: "iana",
	compressible: true,
	extensions: [
		"vcard"
	]
},
	"text/vnd.a": {
	source: "iana"
},
	"text/vnd.abc": {
	source: "iana"
},
	"text/vnd.ascii-art": {
	source: "iana"
},
	"text/vnd.curl": {
	source: "iana",
	extensions: [
		"curl"
	]
},
	"text/vnd.curl.dcurl": {
	source: "apache",
	extensions: [
		"dcurl"
	]
},
	"text/vnd.curl.mcurl": {
	source: "apache",
	extensions: [
		"mcurl"
	]
},
	"text/vnd.curl.scurl": {
	source: "apache",
	extensions: [
		"scurl"
	]
},
	"text/vnd.debian.copyright": {
	source: "iana"
},
	"text/vnd.dmclientscript": {
	source: "iana"
},
	"text/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"text/vnd.esmertec.theme-descriptor": {
	source: "iana"
},
	"text/vnd.ficlab.flt": {
	source: "iana"
},
	"text/vnd.fly": {
	source: "iana",
	extensions: [
		"fly"
	]
},
	"text/vnd.fmi.flexstor": {
	source: "iana",
	extensions: [
		"flx"
	]
},
	"text/vnd.gml": {
	source: "iana"
},
	"text/vnd.graphviz": {
	source: "iana",
	extensions: [
		"gv"
	]
},
	"text/vnd.hgl": {
	source: "iana"
},
	"text/vnd.in3d.3dml": {
	source: "iana",
	extensions: [
		"3dml"
	]
},
	"text/vnd.in3d.spot": {
	source: "iana",
	extensions: [
		"spot"
	]
},
	"text/vnd.iptc.newsml": {
	source: "iana"
},
	"text/vnd.iptc.nitf": {
	source: "iana"
},
	"text/vnd.latex-z": {
	source: "iana"
},
	"text/vnd.motorola.reflex": {
	source: "iana"
},
	"text/vnd.ms-mediapackage": {
	source: "iana"
},
	"text/vnd.net2phone.commcenter.command": {
	source: "iana"
},
	"text/vnd.radisys.msml-basic-layout": {
	source: "iana"
},
	"text/vnd.senx.warpscript": {
	source: "iana"
},
	"text/vnd.si.uricatalogue": {
	source: "iana"
},
	"text/vnd.sosi": {
	source: "iana"
},
	"text/vnd.sun.j2me.app-descriptor": {
	source: "iana",
	extensions: [
		"jad"
	]
},
	"text/vnd.trolltech.linguist": {
	source: "iana"
},
	"text/vnd.wap.si": {
	source: "iana"
},
	"text/vnd.wap.sl": {
	source: "iana"
},
	"text/vnd.wap.wml": {
	source: "iana",
	extensions: [
		"wml"
	]
},
	"text/vnd.wap.wmlscript": {
	source: "iana",
	extensions: [
		"wmls"
	]
},
	"text/vtt": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"vtt"
	]
},
	"text/x-asm": {
	source: "apache",
	extensions: [
		"s",
		"asm"
	]
},
	"text/x-c": {
	source: "apache",
	extensions: [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	]
},
	"text/x-component": {
	source: "nginx",
	extensions: [
		"htc"
	]
},
	"text/x-fortran": {
	source: "apache",
	extensions: [
		"f",
		"for",
		"f77",
		"f90"
	]
},
	"text/x-gwt-rpc": {
	compressible: true
},
	"text/x-handlebars-template": {
	extensions: [
		"hbs"
	]
},
	"text/x-java-source": {
	source: "apache",
	extensions: [
		"java"
	]
},
	"text/x-jquery-tmpl": {
	compressible: true
},
	"text/x-lua": {
	extensions: [
		"lua"
	]
},
	"text/x-markdown": {
	compressible: true,
	extensions: [
		"mkd"
	]
},
	"text/x-nfo": {
	source: "apache",
	extensions: [
		"nfo"
	]
},
	"text/x-opml": {
	source: "apache",
	extensions: [
		"opml"
	]
},
	"text/x-org": {
	compressible: true,
	extensions: [
		"org"
	]
},
	"text/x-pascal": {
	source: "apache",
	extensions: [
		"p",
		"pas"
	]
},
	"text/x-processing": {
	compressible: true,
	extensions: [
		"pde"
	]
},
	"text/x-sass": {
	extensions: [
		"sass"
	]
},
	"text/x-scss": {
	extensions: [
		"scss"
	]
},
	"text/x-setext": {
	source: "apache",
	extensions: [
		"etx"
	]
},
	"text/x-sfv": {
	source: "apache",
	extensions: [
		"sfv"
	]
},
	"text/x-suse-ymp": {
	compressible: true,
	extensions: [
		"ymp"
	]
},
	"text/x-uuencode": {
	source: "apache",
	extensions: [
		"uu"
	]
},
	"text/x-vcalendar": {
	source: "apache",
	extensions: [
		"vcs"
	]
},
	"text/x-vcard": {
	source: "apache",
	extensions: [
		"vcf"
	]
},
	"text/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml"
	]
},
	"text/xml-external-parsed-entity": {
	source: "iana"
},
	"text/yaml": {
	extensions: [
		"yaml",
		"yml"
	]
},
	"video/1d-interleaved-parityfec": {
	source: "iana"
},
	"video/3gpp": {
	source: "iana",
	extensions: [
		"3gp",
		"3gpp"
	]
},
	"video/3gpp-tt": {
	source: "iana"
},
	"video/3gpp2": {
	source: "iana",
	extensions: [
		"3g2"
	]
},
	"video/bmpeg": {
	source: "iana"
},
	"video/bt656": {
	source: "iana"
},
	"video/celb": {
	source: "iana"
},
	"video/dv": {
	source: "iana"
},
	"video/encaprtp": {
	source: "iana"
},
	"video/flexfec": {
	source: "iana"
},
	"video/h261": {
	source: "iana",
	extensions: [
		"h261"
	]
},
	"video/h263": {
	source: "iana",
	extensions: [
		"h263"
	]
},
	"video/h263-1998": {
	source: "iana"
},
	"video/h263-2000": {
	source: "iana"
},
	"video/h264": {
	source: "iana",
	extensions: [
		"h264"
	]
},
	"video/h264-rcdo": {
	source: "iana"
},
	"video/h264-svc": {
	source: "iana"
},
	"video/h265": {
	source: "iana"
},
	"video/iso.segment": {
	source: "iana"
},
	"video/jpeg": {
	source: "iana",
	extensions: [
		"jpgv"
	]
},
	"video/jpeg2000": {
	source: "iana"
},
	"video/jpm": {
	source: "apache",
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"video/mj2": {
	source: "iana",
	extensions: [
		"mj2",
		"mjp2"
	]
},
	"video/mp1s": {
	source: "iana"
},
	"video/mp2p": {
	source: "iana"
},
	"video/mp2t": {
	source: "iana",
	extensions: [
		"ts"
	]
},
	"video/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"mp4",
		"mp4v",
		"mpg4"
	]
},
	"video/mp4v-es": {
	source: "iana"
},
	"video/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	]
},
	"video/mpeg4-generic": {
	source: "iana"
},
	"video/mpv": {
	source: "iana"
},
	"video/nv": {
	source: "iana"
},
	"video/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogv"
	]
},
	"video/parityfec": {
	source: "iana"
},
	"video/pointer": {
	source: "iana"
},
	"video/quicktime": {
	source: "iana",
	compressible: false,
	extensions: [
		"qt",
		"mov"
	]
},
	"video/raptorfec": {
	source: "iana"
},
	"video/raw": {
	source: "iana"
},
	"video/rtp-enc-aescm128": {
	source: "iana"
},
	"video/rtploopback": {
	source: "iana"
},
	"video/rtx": {
	source: "iana"
},
	"video/smpte291": {
	source: "iana"
},
	"video/smpte292m": {
	source: "iana"
},
	"video/ulpfec": {
	source: "iana"
},
	"video/vc1": {
	source: "iana"
},
	"video/vc2": {
	source: "iana"
},
	"video/vnd.cctv": {
	source: "iana"
},
	"video/vnd.dece.hd": {
	source: "iana",
	extensions: [
		"uvh",
		"uvvh"
	]
},
	"video/vnd.dece.mobile": {
	source: "iana",
	extensions: [
		"uvm",
		"uvvm"
	]
},
	"video/vnd.dece.mp4": {
	source: "iana"
},
	"video/vnd.dece.pd": {
	source: "iana",
	extensions: [
		"uvp",
		"uvvp"
	]
},
	"video/vnd.dece.sd": {
	source: "iana",
	extensions: [
		"uvs",
		"uvvs"
	]
},
	"video/vnd.dece.video": {
	source: "iana",
	extensions: [
		"uvv",
		"uvvv"
	]
},
	"video/vnd.directv.mpeg": {
	source: "iana"
},
	"video/vnd.directv.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dlna.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dvb.file": {
	source: "iana",
	extensions: [
		"dvb"
	]
},
	"video/vnd.fvt": {
	source: "iana",
	extensions: [
		"fvt"
	]
},
	"video/vnd.hns.video": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsavc": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsmpeg2": {
	source: "iana"
},
	"video/vnd.motorola.video": {
	source: "iana"
},
	"video/vnd.motorola.videop": {
	source: "iana"
},
	"video/vnd.mpegurl": {
	source: "iana",
	extensions: [
		"mxu",
		"m4u"
	]
},
	"video/vnd.ms-playready.media.pyv": {
	source: "iana",
	extensions: [
		"pyv"
	]
},
	"video/vnd.nokia.interleaved-multimedia": {
	source: "iana"
},
	"video/vnd.nokia.mp4vr": {
	source: "iana"
},
	"video/vnd.nokia.videovoip": {
	source: "iana"
},
	"video/vnd.objectvideo": {
	source: "iana"
},
	"video/vnd.radgamettools.bink": {
	source: "iana"
},
	"video/vnd.radgamettools.smacker": {
	source: "iana"
},
	"video/vnd.sealed.mpeg1": {
	source: "iana"
},
	"video/vnd.sealed.mpeg4": {
	source: "iana"
},
	"video/vnd.sealed.swf": {
	source: "iana"
},
	"video/vnd.sealedmedia.softseal.mov": {
	source: "iana"
},
	"video/vnd.uvvu.mp4": {
	source: "iana",
	extensions: [
		"uvu",
		"uvvu"
	]
},
	"video/vnd.vivo": {
	source: "iana",
	extensions: [
		"viv"
	]
},
	"video/vnd.youtube.yt": {
	source: "iana"
},
	"video/vp8": {
	source: "iana"
},
	"video/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"webm"
	]
},
	"video/x-f4v": {
	source: "apache",
	extensions: [
		"f4v"
	]
},
	"video/x-fli": {
	source: "apache",
	extensions: [
		"fli"
	]
},
	"video/x-flv": {
	source: "apache",
	compressible: false,
	extensions: [
		"flv"
	]
},
	"video/x-m4v": {
	source: "apache",
	extensions: [
		"m4v"
	]
},
	"video/x-matroska": {
	source: "apache",
	compressible: false,
	extensions: [
		"mkv",
		"mk3d",
		"mks"
	]
},
	"video/x-mng": {
	source: "apache",
	extensions: [
		"mng"
	]
},
	"video/x-ms-asf": {
	source: "apache",
	extensions: [
		"asf",
		"asx"
	]
},
	"video/x-ms-vob": {
	source: "apache",
	extensions: [
		"vob"
	]
},
	"video/x-ms-wm": {
	source: "apache",
	extensions: [
		"wm"
	]
},
	"video/x-ms-wmv": {
	source: "apache",
	compressible: false,
	extensions: [
		"wmv"
	]
},
	"video/x-ms-wmx": {
	source: "apache",
	extensions: [
		"wmx"
	]
},
	"video/x-ms-wvx": {
	source: "apache",
	extensions: [
		"wvx"
	]
},
	"video/x-msvideo": {
	source: "apache",
	extensions: [
		"avi"
	]
},
	"video/x-sgi-movie": {
	source: "apache",
	extensions: [
		"movie"
	]
},
	"video/x-smv": {
	source: "apache",
	extensions: [
		"smv"
	]
},
	"x-conference/x-cooltalk": {
	source: "apache",
	extensions: [
		"ice"
	]
},
	"x-shader/x-fragment": {
	compressible: true
},
	"x-shader/x-vertex": {
	compressible: true
}
};

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

var mimeDb = require$$0;

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

(function (exports) {

/**
 * Module dependencies.
 * @private
 */

var db = mimeDb;
var extname = require$$1$2.extname;

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;

/**
 * Module exports.
 * @public
 */

exports.charset = charset;
exports.charsets = { lookup: charset };
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type);
  var mime = match && db[match[1].toLowerCase()];

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str;

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime);
    if (charset) mime += '; charset=' + charset.toLowerCase();
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type);

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()];

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1);

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana'];

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type];
    var exts = mime.extensions;

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts;

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i];

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source);
        var to = preference.indexOf(mime.source);

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type;
    }
  });
}
}(mimeTypes));

var defer_1 = defer$1;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer$1(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}

var defer = defer_1;

// API
var async_1 = async$2;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async$2(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}

// API
var abort_1 = abort$2;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort$2(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}

var async$1 = async_1
  , abort$1 = abort_1
  ;

// API
var iterate_1 = iterate$2;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate$2(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort$1(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async$1(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async$1(callback));
  }

  return aborter;
}

// API
var state_1 = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}

var abort = abort_1
  , async = async_1
  ;

// API
var terminator_1 = terminator$2;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator$2(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}

var iterate$1    = iterate_1
  , initState$1  = state_1
  , terminator$1 = terminator_1
  ;

// Public API
var parallel_1 = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState$1(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate$1(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator$1.bind(state, callback);
}

var serialOrdered$2 = {exports: {}};

var iterate    = iterate_1
  , initState  = state_1
  , terminator = terminator_1
  ;

// Public API
serialOrdered$2.exports = serialOrdered$1;
// sorting helpers
serialOrdered$2.exports.ascending  = ascending;
serialOrdered$2.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered$1(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}

var serialOrdered = serialOrdered$2.exports;

// Public API
var serial_1 = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}

var asynckit$1 =
{
  parallel      : parallel_1,
  serial        : serial_1,
  serialOrdered : serialOrdered$2.exports
};

// populates missing values
var populate$1 = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};

var CombinedStream = combined_stream;
var util = require$$1$1;
var path = require$$1$2;
var http = http$1;
var https = https$1;
var parseUrl = Url.parse;
var fs = require$$6;
var mime = mimeTypes;
var asynckit = asynckit$1;
var populate = populate$1;

// Public API
var form_data = FormData$1;

// make it a Stream
util.inherits(FormData$1, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData$1(options) {
  if (!(this instanceof FormData$1)) {
    return new FormData$1(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData$1.LINE_BREAK = '\r\n';
FormData$1.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData$1.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData$1.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData$1.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) )) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData$1.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData$1.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData$1.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData$1.LINE_BREAK + contents + FormData$1.LINE_BREAK;
};

FormData$1.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData$1.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData$1.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData$1.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData$1.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData$1.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData$1.LINE_BREAK;
};

FormData$1.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData$1.prototype.setBoundary = function(boundary) {
  this._boundary = boundary;
};

FormData$1.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData$1.prototype.getBuffer = function() {
  var dataBuffer = new Buffer.alloc( 0 );
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {

      // Add content to the buffer.
      if(Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
      }else {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData$1.LINE_BREAK)] );
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
};

FormData$1.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData$1.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData$1.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData$1.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData$1.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err) {
      this._error(err);
      return;
    }

    // add content length
    request.setHeader('Content-Length', length);

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce);
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData$1.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData$1.prototype.toString = function () {
  return '[object FormData]';
};

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(createRequestBody$1, "__esModule", { value: true });
var extract_files_1 = _public;
var form_data_1 = __importDefault(form_data);
/**
 * Duck type if NodeJS stream
 * https://github.com/sindresorhus/is-stream/blob/3750505b0727f6df54324784fe369365ef78841e/index.js#L3
 */
var isExtractableFileEnhanced = function (value) {
    return extract_files_1.isExtractableFile(value) ||
        (value !== null && typeof value === 'object' && typeof value.pipe === 'function');
};
/**
 * Returns Multipart Form if body contains files
 * (https://github.com/jaydenseric/graphql-multipart-request-spec)
 * Otherwise returns JSON
 */
function createRequestBody(query, variables) {
    var _a = extract_files_1.extractFiles({ query: query, variables: variables }, '', isExtractableFileEnhanced), clone = _a.clone, files = _a.files;
    if (files.size === 0) {
        return JSON.stringify(clone);
    }
    var Form = typeof FormData === 'undefined' ? form_data_1.default : FormData;
    var form = new Form();
    form.append('operations', JSON.stringify(clone));
    var map = {};
    var i = 0;
    files.forEach(function (paths) {
        map[++i] = paths;
    });
    form.append('map', JSON.stringify(map));
    i = 0;
    files.forEach(function (paths, file) {
        form.append("" + ++i, file);
    });
    return form;
}
createRequestBody$1.default = createRequestBody;

var types = {};

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(types, "__esModule", { value: true });
types.ClientError = void 0;
var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(response, request) {
        var _this = this;
        var message = ClientError.extractMessage(response) + ": " + JSON.stringify({
            response: response,
            request: request,
        });
        _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ClientError.prototype);
        _this.response = response;
        _this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ClientError);
        }
        return _this;
    }
    ClientError.extractMessage = function (response) {
        try {
            return response.errors[0].message;
        }
        catch (e) {
            return "GraphQL Error (Code: " + response.status + ")";
        }
    };
    return ClientError;
}(Error));
types.ClientError = ClientError;

(function (exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gql = exports.request = exports.rawRequest = exports.GraphQLClient = exports.ClientError = void 0;
var cross_fetch_1 = __importStar(nodePonyfill.exports), CrossFetch = cross_fetch_1;
var printer_1 = require$$1;
var createRequestBody_1 = __importDefault(createRequestBody$1);
var types_1 = types;
var types_2 = types;
Object.defineProperty(exports, "ClientError", { enumerable: true, get: function () { return types_2.ClientError; } });
/**
 * Convert the given headers configuration into a plain object.
 */
var resolveHeaders = function (headers) {
    var oHeaders = {};
    if (headers) {
        if ((typeof Headers !== 'undefined' && headers instanceof Headers) ||
            headers instanceof CrossFetch.Headers) {
            oHeaders = HeadersInstanceToPlainObject(headers);
        }
        else if (Array.isArray(headers)) {
            headers.forEach(function (_a) {
                var name = _a[0], value = _a[1];
                oHeaders[name] = value;
            });
        }
        else {
            oHeaders = headers;
        }
    }
    return oHeaders;
};
/**
 * todo
 */
var GraphQLClient = /** @class */ (function () {
    function GraphQLClient(url, options) {
        this.url = url;
        this.options = options || {};
    }
    GraphQLClient.prototype.rawRequest = function (query, variables, requestHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, _b, localFetch, others, body, response, result, headers_1, status_1, errorResult;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.options, headers = _a.headers, _b = _a.fetch, localFetch = _b === void 0 ? cross_fetch_1.default : _b, others = __rest(_a, ["headers", "fetch"]);
                        body = createRequestBody_1.default(query, variables);
                        return [4 /*yield*/, localFetch(this.url, __assign({ method: 'POST', headers: __assign(__assign(__assign({}, (typeof body === 'string' ? { 'Content-Type': 'application/json' } : {})), resolveHeaders(headers)), resolveHeaders(requestHeaders)), body: body }, others))];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, getResult(response)];
                    case 2:
                        result = _c.sent();
                        if (response.ok && !result.errors && result.data) {
                            headers_1 = response.headers, status_1 = response.status;
                            return [2 /*return*/, __assign(__assign({}, result), { headers: headers_1, status: status_1 })];
                        }
                        else {
                            errorResult = typeof result === 'string' ? { error: result } : result;
                            throw new types_1.ClientError(__assign(__assign({}, errorResult), { status: response.status, headers: response.headers }), { query: query, variables: variables });
                        }
                }
            });
        });
    };
    /**
     * Send a GraphQL document to the server.
     */
    GraphQLClient.prototype.request = function (document, variables, requestHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, _b, localFetch, others, resolvedDoc, body, response, result, errorResult;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.options, headers = _a.headers, _b = _a.fetch, localFetch = _b === void 0 ? cross_fetch_1.default : _b, others = __rest(_a, ["headers", "fetch"]);
                        resolvedDoc = resolveRequestDocument(document);
                        body = createRequestBody_1.default(resolvedDoc, variables);
                        return [4 /*yield*/, localFetch(this.url, __assign({ method: 'POST', headers: __assign(__assign(__assign({}, (typeof body === 'string' ? { 'Content-Type': 'application/json' } : {})), resolveHeaders(headers)), resolveHeaders(requestHeaders)), body: body }, others))];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, getResult(response)];
                    case 2:
                        result = _c.sent();
                        if (response.ok && !result.errors && result.data) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            errorResult = typeof result === 'string' ? { error: result } : result;
                            throw new types_1.ClientError(__assign(__assign({}, errorResult), { status: response.status }), { query: resolvedDoc, variables: variables });
                        }
                }
            });
        });
    };
    GraphQLClient.prototype.setHeaders = function (headers) {
        this.options.headers = headers;
        return this;
    };
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */
    GraphQLClient.prototype.setHeader = function (key, value) {
        var _a;
        var headers = this.options.headers;
        if (headers) {
            // todo what if headers is in nested array form... ?
            //@ts-ignore
            headers[key] = value;
        }
        else {
            this.options.headers = (_a = {}, _a[key] = value, _a);
        }
        return this;
    };
    return GraphQLClient;
}());
exports.GraphQLClient = GraphQLClient;
/**
 * todo
 */
function rawRequest(url, query, variables) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.rawRequest(query, variables)];
        });
    });
}
exports.rawRequest = rawRequest;
/**
 * Send a GraphQL Document to the GraphQL server for exectuion.
 *
 * @example
 *
 * ```ts
 * // You can pass a raw string
 *
 * await request('https://foo.bar/graphql', `
 *   {
 *     query {
 *       users
 *     }
 *   }
 * `)
 *
 * // You can also pass a GraphQL DocumentNode. Convenient if you
 * // are using graphql-tag package.
 *
 * import gql from 'graphql-tag'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 *
 * // If you don't actually care about using DocumentNode but just
 * // want the tooling support for gql template tag like IDE syntax
 * // coloring and prettier autoformat then note you can use the
 * // passthrough gql tag shipped with graphql-request to save a bit
 * // of performance and not have to install another dep into your project.
 *
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 * ```
 */
function request(url, document, variables) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.request(document, variables)];
        });
    });
}
exports.request = request;
exports.default = request;
/**
 * todo
 */
function getResult(response) {
    var contentType = response.headers.get('Content-Type');
    if (contentType && contentType.startsWith('application/json')) {
        return response.json();
    }
    else {
        return response.text();
    }
}
/**
 * helpers
 */
function resolveRequestDocument(document) {
    if (typeof document === 'string')
        return document;
    return printer_1.print(document);
}
/**
 * Convenience passthrough template tag to get the benefits of tooling for the gql template tag. This does not actually parse the input into a GraphQL DocumentNode like graphql-tag package does. It just returns the string with any variables given interpolated. Can save you a bit of performance and having to install another package.
 *
 * @example
 *
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 *
 * @remarks
 *
 * Several tools in the Node GraphQL ecosystem are hardcoded to specially treat any template tag named "gql". For example see this prettier issue: https://github.com/prettier/prettier/issues/4360. Using this template tag has no runtime effect beyond variable interpolation.
 */
function gql(chunks) {
    var variables = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        variables[_i - 1] = arguments[_i];
    }
    return chunks.reduce(function (accumulator, chunk, index) { return "" + accumulator + chunk + (index in variables ? variables[index] : ''); }, '');
}
exports.gql = gql;
/**
 * Convert Headers instance into regular object
 */
function HeadersInstanceToPlainObject(headers) {
    var o = {};
    headers.forEach(function (v, k) {
        o[k] = v;
    });
    return o;
}

}(dist));

Object.defineProperty(subgraph, "__esModule", { value: true });
subgraph.getPool = void 0;
const graphql_request_1 = dist;
const getPool = async (poolId, blockNumber, testnet) => {
    const data = `
    id
    address
    poolType
    swapFee
    totalShares
    amp
    tokens {
      id
      address
      symbol
      balance
      decimals
      weight
    }
  `;
    let query;
    if (blockNumber) {
        query = graphql_request_1.gql `
      query getPool($poolId: ID!, $blockNumber: Int!) {
        pools(where: { id: $poolId }, block: { number: $blockNumber }) {
          ${data}
        }
      }
    `;
    }
    else {
        query = graphql_request_1.gql `
      query getPool($poolId: ID!) {
        pools(where: { id: $poolId }) {
          ${data}
        }
      }
    `;
    }
    const result = await graphql_request_1.request(testnet
        ? "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-kovan-v2"
        : "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2", query, { poolId, blockNumber });
    if (result && result.pools && result.pools.length) {
        return result.pools[0];
    }
    return null;
};
subgraph.getPool = getPool;

var bigNumber = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleAll = exports.scale = exports.bn = void 0;
const bignumber_js_1 = require$$0$2;
bignumber_js_1.BigNumber.config({
    EXPONENTIAL_AT: [-100, 100],
    ROUNDING_MODE: 1,
    DECIMAL_PLACES: 18,
});
exports.default = bignumber_js_1.BigNumber;
const bn = (value) => new bignumber_js_1.BigNumber(value);
exports.bn = bn;
const scale = (value, decimalPlaces) => exports.bn(value).times(exports.bn(10).pow(decimalPlaces));
exports.scale = scale;
const scaleAll = (values, decimalPlaces) => values.map((x) => exports.scale(x, decimalPlaces));
exports.scaleAll = scaleAll;
}(bigNumber));

var common = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowCopyAll = exports.shallowCopy = void 0;
const shallowCopy = (obj) => {
    return Object.assign({}, obj);
};
exports.shallowCopy = shallowCopy;
const shallowCopyAll = (objs) => {
    return objs.map(exports.shallowCopy);
};
exports.shallowCopyAll = shallowCopyAll;
}(common));

var base = {};

var math$5 = {};

(function (exports) {
// Ported from Solidity:
// https://github.com/balancer-labs/balancer-v2-monorepo/blob/ce70f7663e0ac94b25ed60cb86faaa8199fd9e13/pkg/solidity-utils/contracts/math/Math.sol
Object.defineProperty(exports, "__esModule", { value: true });
exports.divUp = exports.divDown = exports.div = exports.mul = exports.min = exports.max = exports.sub = exports.add = exports.TWO = exports.ONE = exports.ZERO = void 0;
const big_number_1 = bigNumber;
exports.ZERO = big_number_1.bn(0);
exports.ONE = big_number_1.bn(1);
exports.TWO = big_number_1.bn(2);
const add = (a, b) => {
    return a.plus(b);
};
exports.add = add;
const sub = (a, b) => {
    if (b.gt(a)) {
        throw new Error("SUB_OVERFLOW");
    }
    return a.minus(b);
};
exports.sub = sub;
const max = (a, b) => {
    return a.gte(b) ? a : b;
};
exports.max = max;
const min = (a, b) => {
    return a.lt(b) ? a : b;
};
exports.min = min;
const mul = (a, b) => {
    return a.times(b);
};
exports.mul = mul;
const div = (a, b, roundUp) => {
    return roundUp ? exports.divUp(a, b) : exports.divDown(a, b);
};
exports.div = div;
const divDown = (a, b) => {
    if (b.isZero()) {
        throw new Error("ZERO_DIVISION");
    }
    return a.idiv(b);
};
exports.divDown = divDown;
const divUp = (a, b) => {
    if (b.isZero()) {
        throw new Error("ZERO_DIVISION");
    }
    return a.isZero() ? exports.ZERO : exports.ONE.plus(a.minus(exports.ONE).idiv(b));
};
exports.divUp = divUp;
}(math$5));

Object.defineProperty(base, "__esModule", { value: true });
const big_number_1$3 = bigNumber;
const math$4 = math$5;
class BasePool {
    // ---------------------- Constructor ----------------------
    constructor(params) {
        this.MIN_SWAP_FEE_PERCENTAGE = big_number_1$3.bn("0.000001"); // 0.0001%
        this.MAX_SWAP_FEE_PERCENTAGE = big_number_1$3.bn("0.1"); // 10%
        this._query = false;
        this._id = params.id;
        this._address = params.address;
        this._bptTotalSupply = params.bptTotalSupply;
        this.setSwapFeePercentage(params.swapFeePercentage);
        if (params.query) {
            this._query = params.query;
        }
    }
    // ---------------------- Getters ----------------------
    get id() {
        return this._id;
    }
    get address() {
        return this._address;
    }
    get bptTotalSupply() {
        return this._bptTotalSupply;
    }
    get swapFeePercentage() {
        return this._swapFeePercentage;
    }
    get query() {
        return this._query;
    }
    // ---------------------- Setters ----------------------
    setSwapFeePercentage(swapFeePercentage) {
        if (big_number_1$3.bn(swapFeePercentage).lt(this.MIN_SWAP_FEE_PERCENTAGE)) {
            throw new Error("MIN_SWAP_FEE_PERCENTAGE");
        }
        if (big_number_1$3.bn(swapFeePercentage).gt(this.MAX_SWAP_FEE_PERCENTAGE)) {
            throw new Error("MAX_SWAP_FEE_PERCENTAGE");
        }
        this._swapFeePercentage = swapFeePercentage;
    }
    setQuery(query) {
        this._query = query;
    }
    // ---------------------- Internal ----------------------
    _upScale(amount, decimals) {
        return math$4.mul(big_number_1$3.scale(amount, decimals), big_number_1$3.bn(10).pow(18 - decimals));
    }
    _downScaleDown(amount, decimals) {
        return big_number_1$3.scale(math$4.divDown(big_number_1$3.bn(amount), big_number_1$3.bn(10).pow(18 - decimals)), -decimals);
    }
    _downScaleUp(amount, decimals) {
        return big_number_1$3.scale(math$4.divUp(big_number_1$3.bn(amount), big_number_1$3.bn(10).pow(18 - decimals)), -decimals);
    }
}
base.default = BasePool;

var math$3 = {};

var fixedPoint = {};

var logExp = {};

(function (exports) {
// Ported from Solidity:
// https://github.com/balancer-labs/balancer-core-v2/blob/70843e6a61ad11208c1cfabf5cfe15be216ca8d3/pkg/solidity-utils/contracts/math/LogExpMath.sol
Object.defineProperty(exports, "__esModule", { value: true });
exports.ln = exports.log = exports.exp = exports.pow = void 0;
const big_number_1 = bigNumber;
// All fixed point multiplications and divisions are inlined
// This means we need to divide by ONE when multiplying two numbers, and multiply by ONE when dividing them
// All arguments and return values are 18 decimal fixed point numbers
const ONE_18 = big_number_1.bn("1000000000000000000"); // 1e18
// Internally, intermediate values are computed with higher precision as 20 decimal fixed point numbers, and in the case of ln36, 36 decimals
const ONE_20 = big_number_1.bn("100000000000000000000"); // 1e20
const ONE_36 = big_number_1.bn("1000000000000000000000000000000000000"); // 1e36
// The domain of natural exponentiation is bound by the word size and number of decimals used
// Because internally the result will be stored using 20 decimals, the largest possible result is
// (2^255 - 1) / 10^20, which makes the largest exponent ln((2^255 - 1) / 10^20) = 130.700829182905140221
// The smallest possible result is 10^(-18), which makes largest negative argument
// ln(10^(-18)) = -41.446531673892822312.
// We use 130.0 and -41.0 to have some safety margin
const MAX_NATURAL_EXPONENT = big_number_1.bn("130000000000000000000"); // 130e18
const MIN_NATURAL_EXPONENT = big_number_1.bn("-41000000000000000000"); // (-41)e18
// Bounds for ln_36's argument
// Both ln(0.9) and ln(1.1) can be represented with 36 decimal places in a fixed point 256 bit integer
const LN_36_LOWER_BOUND = ONE_18.minus(big_number_1.bn("100000000000000000")); // 1e18 - 1e17
const LN_36_UPPER_BOUND = ONE_18.plus(big_number_1.bn("100000000000000000")); // 1e18 + 1e17
const MILD_EXPONENT_BOUND = big_number_1.bn(2).pow(254).idiv(ONE_20);
// 18 decimal constants
const x0 = big_number_1.bn("128000000000000000000"); // 2ˆ7
const a0 = big_number_1.bn("38877084059945950922200000000000000000000000000000000000"); // eˆ(x0) (no decimals)
const x1 = big_number_1.bn("64000000000000000000"); // 2ˆ6
const a1 = big_number_1.bn("6235149080811616882910000000"); // eˆ(x1) (no decimals)
// 20 decimal constants
const x2 = big_number_1.bn("3200000000000000000000"); // 2ˆ5
const a2 = big_number_1.bn("7896296018268069516100000000000000"); // eˆ(x2)
const x3 = big_number_1.bn("1600000000000000000000"); // 2ˆ4
const a3 = big_number_1.bn("888611052050787263676000000"); // eˆ(x3)
const x4 = big_number_1.bn("800000000000000000000"); // 2ˆ3
const a4 = big_number_1.bn("298095798704172827474000"); // eˆ(x4)
const x5 = big_number_1.bn("400000000000000000000"); // 2ˆ2
const a5 = big_number_1.bn("5459815003314423907810"); // eˆ(x5)
const x6 = big_number_1.bn("200000000000000000000"); // 2ˆ1
const a6 = big_number_1.bn("738905609893065022723"); // eˆ(x6)
const x7 = big_number_1.bn("100000000000000000000"); // 2ˆ0
const a7 = big_number_1.bn("271828182845904523536"); // eˆ(x7)
const x8 = big_number_1.bn("50000000000000000000"); // 2ˆ(-1)
const a8 = big_number_1.bn("164872127070012814685"); // eˆ(x8)
const x9 = big_number_1.bn("25000000000000000000"); // 2ˆ(-2)
const a9 = big_number_1.bn("128402541668774148407"); // eˆ(x9)
const x10 = big_number_1.bn("12500000000000000000"); // 2ˆ(-3)
const a10 = big_number_1.bn("113314845306682631683"); // eˆ(x10)
const x11 = big_number_1.bn("6250000000000000000"); // 2ˆ(-4)
const a11 = big_number_1.bn("106449445891785942956"); // eˆ(x11)
const pow = (x, y) => {
    if (y.isZero()) {
        // We solve the 0^0 indetermination by making it equal one.
        return ONE_18;
    }
    if (x.isZero()) {
        return big_number_1.bn(0);
    }
    // Instead of computing x^y directly, we instead rely on the properties of logarithms and exponentiation to
    // arrive at that result. In particular, exp(ln(x)) = x, and ln(x^y) = y * ln(x). This means
    // x^y = exp(y * ln(x)).
    // The ln function takes a signed value, so we need to make sure x fits in the signed 256 bit range.
    if (x.gte(big_number_1.bn(2).pow(255))) {
        throw new Error("X_OUT_OF_BOUNDS");
    }
    // We will compute y * ln(x) in a single step. Depending on the value of x, we can either use ln or ln_36. In
    // both cases, we leave the division by ONE_18 (due to fixed point multiplication) to the end.
    // This prevents y * ln(x) from overflowing, and at the same time guarantees y fits in the signed 256 bit range.
    if (y.gte(MILD_EXPONENT_BOUND)) {
        throw new Error("Y_OUT_OF_BOUNDS");
    }
    let logx_times_y;
    if (LN_36_LOWER_BOUND.lt(x) && x.lt(LN_36_UPPER_BOUND)) {
        let ln_36_x = _ln_36(x);
        // ln_36_x has 36 decimal places, so multiplying by y_int256 isn't as straightforward, since we can't just
        // bring y_int256 to 36 decimal places, as it might overflow. Instead, we perform two 18 decimal
        // multiplications and add the results: one with the first 18 decimals of ln_36_x, and one with the
        // (downscaled) last 18 decimals.
        logx_times_y = ln_36_x
            .idiv(ONE_18)
            .times(y)
            .plus(ln_36_x.mod(ONE_18).times(y).idiv(ONE_18));
    }
    else {
        logx_times_y = _ln(x).times(y);
    }
    logx_times_y = logx_times_y.idiv(ONE_18);
    // Finally, we compute exp(y * ln(x)) to arrive at x^y
    if (logx_times_y.lt(MIN_NATURAL_EXPONENT) ||
        logx_times_y.gt(MAX_NATURAL_EXPONENT)) {
        throw new Error("PRODUCT_OUT_OF_BOUNDS");
    }
    return exports.exp(logx_times_y);
};
exports.pow = pow;
const exp = (x) => {
    if (x.lt(MIN_NATURAL_EXPONENT) || x.gt(MAX_NATURAL_EXPONENT)) {
        throw new Error("INVALID_EXPONENT");
    }
    if (x.lt(0)) {
        // We only handle positive exponents: e^(-x) is computed as 1 / e^x. We can safely make x positive since it
        // fits in the signed 256 bit range (as it is larger than MIN_NATURAL_EXPONENT).
        // Fixed point division requires multiplying by ONE_18.
        return ONE_18.times(ONE_18).idiv(exports.exp(x.negated()));
    }
    // First, we use the fact that e^(x+y) = e^x * e^y to decompose x into a sum of powers of two, which we call x_n,
    // where x_n == 2^(7 - n), and e^x_n = a_n has been precomputed. We choose the first x_n, x0, to equal 2^7
    // because all larger powers are larger than MAX_NATURAL_EXPONENT, and therefore not present in the
    // decomposition.
    // At the end of this process we will have the product of all e^x_n = a_n that apply, and the remainder of this
    // decomposition, which will be lower than the smallest x_n.
    // exp(x) = k_0 * a_0 * k_1 * a_1 * ... + k_n * a_n * exp(remainder), where each k_n equals either 0 or 1.
    // We mutate x by subtracting x_n, making it the remainder of the decomposition.
    // The first two a_n (e^(2^7) and e^(2^6)) are too large if stored as 18 decimal numbers, and could cause
    // intermediate overflows. Instead we store them as plain integers, with 0 decimals.
    // Additionally, x0 + x1 is larger than MAX_NATURAL_EXPONENT, which means they will not both be present in the
    // decomposition.
    // For each x_n, we test if that term is present in the decomposition (if x is larger than it), and if so deduct
    // it and compute the accumulated product.
    let firstAN;
    if (x.gte(x0)) {
        x = x.minus(x0);
        firstAN = a0;
    }
    else if (x.gte(x1)) {
        x = x.minus(x1);
        firstAN = a1;
    }
    else {
        firstAN = big_number_1.bn(1); // One with no decimal places
    }
    // We now transform x into a 20 decimal fixed point number, to have enhanced precision when computing the
    // smaller terms.
    x = x.times(100);
    // `product` is the accumulated product of all a_n (except a0 and a1), which starts at 20 decimal fixed point
    // one. Recall that fixed point multiplication requires dividing by ONE_20.
    let product = ONE_20;
    if (x.gte(x2)) {
        x = x.minus(x2);
        product = product.times(a2).idiv(ONE_20);
    }
    if (x.gte(x3)) {
        x = x.minus(x3);
        product = product.times(a3).idiv(ONE_20);
    }
    if (x.gte(x4)) {
        x = x.minus(x4);
        product = product.times(a4).idiv(ONE_20);
    }
    if (x.gte(x5)) {
        x = x.minus(x5);
        product = product.times(a5).idiv(ONE_20);
    }
    if (x.gte(x6)) {
        x = x.minus(x6);
        product = product.times(a6).idiv(ONE_20);
    }
    if (x.gte(x7)) {
        x = x.minus(x7);
        product = product.times(a7).idiv(ONE_20);
    }
    if (x.gte(x8)) {
        x = x.minus(x8);
        product = product.times(a8).idiv(ONE_20);
    }
    if (x.gte(x9)) {
        x = x.minus(x9);
        product = product.times(a9).idiv(ONE_20);
    }
    // x10 and x11 are unnecessary here since we have high enough precision already.
    // Now we need to compute e^x, where x is small (in particular, it is smaller than x9). We use the Taylor series
    // expansion for e^x: 1 + x + (x^2 / 2!) + (x^3 / 3!) + ... + (x^n / n!).
    let seriesSum = ONE_20; // The initial one in the sum, with 20 decimal places.
    let term; // Each term in the sum, where the nth term is (x^n / n!).
    // The first term is simply x.
    term = x;
    seriesSum = seriesSum.plus(term);
    // Each term (x^n / n!) equals the previous one times x, divided by n. Since x is a fixed point number,
    // multiplying by it requires dividing by ONE_20, but dividing by the non-fixed point n values does not.
    term = term.times(x).idiv(ONE_20).idiv(2);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(3);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(4);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(5);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(6);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(7);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(8);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(9);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(10);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(11);
    seriesSum = seriesSum.plus(term);
    term = term.times(x).idiv(ONE_20).idiv(12);
    seriesSum = seriesSum.plus(term);
    // 12 Taylor terms are sufficient for 18 decimal precision.
    // We now have the first a_n (with no decimals), and the product of all other a_n present, and the Taylor
    // approximation of the exponentiation of the remainder (both with 20 decimals). All that remains is to multiply
    // all three (one 20 decimal fixed point multiplication, dividing by ONE_20, and one integer multiplication),
    // and then drop two digits to return an 18 decimal value.
    return product.times(seriesSum).idiv(ONE_20).times(firstAN).idiv(100);
};
exports.exp = exp;
const log = (arg, base) => {
    // This performs a simple base change: log(arg, base) = ln(arg) / ln(base).
    // Both logBase and logArg are computed as 36 decimal fixed point numbers, either by using ln_36, or by
    // upscaling.
    let logBase;
    if (LN_36_LOWER_BOUND.lt(base) && base.lt(LN_36_UPPER_BOUND)) {
        logBase = _ln_36(base);
    }
    else {
        logBase = _ln(base).times(ONE_18);
    }
    let logArg;
    if (LN_36_LOWER_BOUND.lt(arg) && arg.lt(LN_36_UPPER_BOUND)) {
        logArg = _ln_36(arg);
    }
    else {
        logArg = _ln(arg).times(ONE_18);
    }
    // When dividing, we multiply by ONE_18 to arrive at a result with 18 decimal places
    return logArg.times(ONE_18).idiv(logBase);
};
exports.log = log;
const ln = (a) => {
    // The real natural logarithm is not defined for negative numbers or zero.
    if (a.lte(0)) {
        throw new Error("OUT_OF_BOUNDS");
    }
    if (LN_36_LOWER_BOUND.lt(a) && a.lt(LN_36_UPPER_BOUND)) {
        return _ln_36(a).idiv(ONE_18);
    }
    else {
        return _ln(a);
    }
};
exports.ln = ln;
const _ln = (a) => {
    if (a.lt(ONE_18)) {
        // Since ln(a^k) = k * ln(a), we can compute ln(a) as ln(a) = ln((1/a)^(-1)) = - ln((1/a))
        // If a is less than one, 1/a will be greater than one, and this if statement will not be entered in the recursive call
        // Fixed point division requires multiplying by ONE_18
        return _ln(ONE_18.times(ONE_18).idiv(a)).negated();
    }
    // First, we use the fact that ln^(a * b) = ln(a) + ln(b) to decompose ln(a) into a sum of powers of two, which
    // we call x_n, where x_n == 2^(7 - n), which are the natural logarithm of precomputed quantities a_n (that is,
    // ln(a_n) = x_n). We choose the first x_n, x0, to equal 2^7 because the exponential of all larger powers cannot
    // be represented as 18 fixed point decimal numbers in 256 bits, and are therefore larger than a.
    // At the end of this process we will have the sum of all x_n = ln(a_n) that apply, and the remainder of this
    // decomposition, which will be lower than the smallest a_n.
    // ln(a) = k_0 * x_0 + k_1 * x_1 + ... + k_n * x_n + ln(remainder), where each k_n equals either 0 or 1
    // We mutate a by subtracting a_n, making it the remainder of the decomposition
    // For reasons related to how `exp` works, the first two a_n (e^(2^7) and e^(2^6)) are not stored as fixed point
    // numbers with 18 decimals, but instead as plain integers with 0 decimals, so we need to multiply them by
    // ONE_18 to convert them to fixed point.
    // For each a_n, we test if that term is present in the decomposition (if a is larger than it), and if so divide
    // by it and compute the accumulated sum.
    let sum = big_number_1.bn(0);
    if (a.gte(a0.times(ONE_18))) {
        a = a.idiv(a0); // Integer, not fixed point division
        sum = sum.plus(x0);
    }
    if (a.gte(a1.times(ONE_18))) {
        a = a.idiv(a1); // Integer, not fixed point division
        sum = sum.plus(x1);
    }
    // All other a_n and x_n are stored as 20 digit fixed point numbers, so we convert the sum and a to this format.
    sum = sum.times(100);
    a = a.times(100);
    // Because further a_n are  20 digit fixed point numbers, we multiply by ONE_20 when dividing by them.
    if (a.gte(a2)) {
        a = a.times(ONE_20).idiv(a2);
        sum = sum.plus(x2);
    }
    if (a.gte(a3)) {
        a = a.times(ONE_20).idiv(a3);
        sum = sum.plus(x3);
    }
    if (a.gte(a4)) {
        a = a.times(ONE_20).idiv(a4);
        sum = sum.plus(x4);
    }
    if (a.gte(a5)) {
        a = a.times(ONE_20).idiv(a5);
        sum = sum.plus(x5);
    }
    if (a.gte(a6)) {
        a = a.times(ONE_20).idiv(a6);
        sum = sum.plus(x6);
    }
    if (a.gte(a7)) {
        a = a.times(ONE_20).idiv(a7);
        sum = sum.plus(x7);
    }
    if (a.gte(a8)) {
        a = a.times(ONE_20).idiv(a8);
        sum = sum.plus(x8);
    }
    if (a.gte(a9)) {
        a = a.times(ONE_20).idiv(a9);
        sum = sum.plus(x9);
    }
    if (a.gte(a10)) {
        a = a.times(ONE_20).idiv(a10);
        sum = sum.plus(x10);
    }
    if (a.gte(a11)) {
        a = a.times(ONE_20).idiv(a11);
        sum = sum.plus(x11);
    }
    // a is now a small number (smaller than a_11, which roughly equals 1.06). This means we can use a Taylor series
    // that converges rapidly for values of `a` close to one - the same one used in ln_36.
    // Let z = (a - 1) / (a + 1).
    // ln(a) = 2 * (z + z^3 / 3 + z^5 / 5 + z^7 / 7 + ... + z^(2 * n + 1) / (2 * n + 1))
    // Recall that 20 digit fixed point division requires multiplying by ONE_20, and multiplication requires
    // division by ONE_20.
    const z = a.minus(ONE_20).times(ONE_20).idiv(a.plus(ONE_20));
    const z_squared = z.times(z).idiv(ONE_20);
    // num is the numerator of the series: the z^(2 * n + 1) term
    let num = z;
    // seriesSum holds the accumulated sum of each term in the series, starting with the initial z
    let seriesSum = num;
    // In each step, the numerator is multiplied by z^2
    num = num.times(z_squared).idiv(ONE_20);
    seriesSum = seriesSum.plus(num.idiv(3));
    num = num.times(z_squared).idiv(ONE_20);
    seriesSum = seriesSum.plus(num.idiv(5));
    num = num.times(z_squared).idiv(ONE_20);
    seriesSum = seriesSum.plus(num.idiv(7));
    num = num.times(z_squared).idiv(ONE_20);
    seriesSum = seriesSum.plus(num.idiv(9));
    num = num.times(z_squared).idiv(ONE_20);
    seriesSum = seriesSum.plus(num.idiv(11));
    // 6 Taylor terms are sufficient for 36 decimal precision.
    // Finally, we multiply by 2 (non fixed point) to compute ln(remainder)
    seriesSum = seriesSum.times(2);
    // We now have the sum of all x_n present, and the Taylor approximation of the logarithm of the remainder (both
    // with 20 decimals). All that remains is to sum these two, and then drop two digits to return a 18 decimal
    // value.
    return sum.plus(seriesSum).idiv(100);
};
const _ln_36 = (x) => {
    // Since ln(1) = 0, a value of x close to one will yield a very small result, which makes using 36 digits worthwhile
    // First, we transform x to a 36 digit fixed point value
    x = x.times(ONE_18);
    // We will use the following Taylor expansion, which converges very rapidly. Let z = (x - 1) / (x + 1)
    // ln(x) = 2 * (z + z^3 / 3 + z^5 / 5 + z^7 / 7 + ... + z^(2 * n + 1) / (2 * n + 1))
    // Recall that 36 digit fixed point division requires multiplying by ONE_36, and multiplication requires division by ONE_36
    const z = x.minus(ONE_36).times(ONE_36).idiv(x.plus(ONE_36));
    const z_squared = z.times(z).idiv(ONE_36);
    // num is the numerator of the series: the z^(2 * n + 1) term
    let num = z;
    // seriesSum holds the accumulated sum of each term in the series, starting with the initial z
    let seriesSum = num;
    // In each step, the numerator is multiplied by z^2
    num = num.times(z_squared).idiv(ONE_36);
    seriesSum = seriesSum.plus(num.idiv(3));
    num = num.times(z_squared).idiv(ONE_36);
    seriesSum = seriesSum.plus(num.idiv(5));
    num = num.times(z_squared).idiv(ONE_36);
    seriesSum = seriesSum.plus(num.idiv(7));
    num = num.times(z_squared).idiv(ONE_36);
    seriesSum = seriesSum.plus(num.idiv(9));
    num = num.times(z_squared).idiv(ONE_36);
    seriesSum = seriesSum.plus(num.idiv(11));
    num = num.times(z_squared).idiv(ONE_36);
    seriesSum = seriesSum.plus(num.idiv(13));
    num = num.times(z_squared).idiv(ONE_36);
    seriesSum = seriesSum.plus(num.idiv(15));
    // 8 Taylor terms are sufficient for 36 decimal precision
    // All that remains is multiplying by 2 (non fixed point)
    return seriesSum.times(2);
};
}(logExp));

(function (exports) {
// Ported from Solidity:
// https://github.com/balancer-labs/balancer-core-v2/blob/70843e6a61ad11208c1cfabf5cfe15be216ca8d3/pkg/solidity-utils/contracts/math/FixedPoint.sol
Object.defineProperty(exports, "__esModule", { value: true });
exports.complement = exports.powUp = exports.powDown = exports.divUp = exports.divDown = exports.mulUp = exports.mulDown = exports.sub = exports.add = exports.MIN_POW_BASE_FREE_EXPONENT = exports.MAX_POW_RELATIVE_ERROR = exports.ONE = exports.ZERO = void 0;
const big_number_1 = bigNumber;
const logExp$1 = logExp;
exports.ZERO = big_number_1.bn(0);
exports.ONE = big_number_1.bn("1000000000000000000"); // 10^18
exports.MAX_POW_RELATIVE_ERROR = big_number_1.bn(10000); // 10^(-14)
// Minimum base for the power function when the exponent is 'free' (larger than ONE)
exports.MIN_POW_BASE_FREE_EXPONENT = big_number_1.bn("700000000000000000"); // 0.7e18
const add = (a, b) => {
    // Fixed Point addition is the same as regular checked addition
    return a.plus(b);
};
exports.add = add;
const sub = (a, b) => {
    // Fixed Point subtraction is the same as regular checked subtraction
    if (b.gt(a)) {
        throw new Error("SUB_OVERFLOW");
    }
    return a.minus(b);
};
exports.sub = sub;
const mulDown = (a, b) => {
    return a.times(b).idiv(exports.ONE);
};
exports.mulDown = mulDown;
const mulUp = (a, b) => {
    const product = a.times(b);
    if (product.isZero()) {
        return product;
    }
    else {
        // The traditional divUp formula is:
        // divUp(x, y) := (x + y - 1) / y
        // To avoid intermediate overflow in the addition, we distribute the division and get:
        // divUp(x, y) := (x - 1) / y + 1
        // Note that this requires x != 0, which we already tested for
        return product.minus(big_number_1.bn(1)).idiv(exports.ONE).plus(big_number_1.bn(1));
    }
};
exports.mulUp = mulUp;
const divDown = (a, b) => {
    if (b.isZero()) {
        throw new Error("ZERO_DIVISION");
    }
    if (a.isZero()) {
        return a;
    }
    else {
        return a.times(exports.ONE).idiv(b);
    }
};
exports.divDown = divDown;
const divUp = (a, b) => {
    if (b.isZero()) {
        throw new Error("ZERO_DIVISION");
    }
    if (a.isZero()) {
        return a;
    }
    else {
        // The traditional divUp formula is:
        // divUp(x, y) := (x + y - 1) / y
        // To avoid intermediate overflow in the addition, we distribute the division and get:
        // divUp(x, y) := (x - 1) / y + 1
        // Note that this requires x != 0, which we already tested for.
        return a.times(exports.ONE).minus(big_number_1.bn(1)).idiv(b).plus(big_number_1.bn(1));
    }
};
exports.divUp = divUp;
const powDown = (x, y) => {
    const raw = logExp$1.pow(x, y);
    const maxError = exports.add(exports.mulUp(raw, exports.MAX_POW_RELATIVE_ERROR), big_number_1.bn(1));
    if (raw.lt(maxError)) {
        return big_number_1.bn(0);
    }
    else {
        return exports.sub(raw, maxError);
    }
};
exports.powDown = powDown;
const powUp = (x, y) => {
    const raw = logExp$1.pow(x, y);
    const maxError = exports.add(exports.mulUp(raw, exports.MAX_POW_RELATIVE_ERROR), big_number_1.bn(1));
    return exports.add(raw, maxError);
};
exports.powUp = powUp;
const complement = (x) => {
    return x.lt(exports.ONE) ? exports.ONE.minus(x) : big_number_1.bn(0);
};
exports.complement = complement;
}(fixedPoint));

(function (exports) {
// Ported from Solidity:
// https://github.com/balancer-labs/balancer-core-v2/blob/70843e6a61ad11208c1cfabf5cfe15be216ca8d3/pkg/pool-stable/contracts/StableMath.sol
Object.defineProperty(exports, "__esModule", { value: true });
exports._calcDueTokenProtocolSwapFeeAmount = exports._calcTokensOutGivenExactBptIn = exports._calcTokenOutGivenExactBptIn = exports._calcBptInGivenExactTokensOut = exports._calcTokenInGivenExactBptOut = exports._calcBptOutGivenExactTokensIn = exports._calcInGivenOut = exports._calcOutGivenIn = exports._calculateInvariant = exports.MAX_STABLE_TOKENS = exports.AMP_PRECISION = exports.MAX_AMP = exports.MIN_AMP = void 0;
const big_number_1 = bigNumber;
const fp = fixedPoint;
const math = math$5;
exports.MIN_AMP = big_number_1.bn(1);
exports.MAX_AMP = big_number_1.bn(5000);
exports.AMP_PRECISION = big_number_1.bn(1000);
exports.MAX_STABLE_TOKENS = 5;
// Computes the invariant given the current balances, using the Newton-Raphson approximation.
// The amplification parameter equals: A n^(n-1)
const _calculateInvariant = (amplificationParameter, balances, roundUp) => {
    /**********************************************************************************************
    // invariant                                                                                 //
    // D = invariant                                                  D^(n+1)                    //
    // A = amplification coefficient      A  n^n S + D = A D n^n + -----------                   //
    // S = sum of balances                                             n^n P                     //
    // P = product of balances                                                                   //
    // n = number of tokens                                                                      //
    **********************************************************************************************/
    // We support rounding up or down.
    let sum = math.ZERO;
    let numTokens = big_number_1.bn(balances.length);
    for (let i = 0; i < balances.length; i++) {
        sum = fp.add(sum, balances[i]);
    }
    if (sum.isZero()) {
        return math.ZERO;
    }
    let prevInvariant = math.ZERO;
    let invariant = sum;
    let ampTimesTotal = math.mul(amplificationParameter, numTokens);
    for (let i = 0; i < 255; i++) {
        let P_D = math.mul(numTokens, balances[0]);
        for (let j = 1; j < balances.length; j++) {
            P_D = math.div(math.mul(math.mul(P_D, balances[j]), numTokens), invariant, roundUp);
        }
        prevInvariant = invariant;
        invariant = math.div(fp.add(math.mul(math.mul(numTokens, invariant), invariant), math.div(math.mul(math.mul(ampTimesTotal, sum), P_D), exports.AMP_PRECISION, roundUp)), fp.add(math.mul(fp.add(numTokens, math.ONE), invariant), math.div(math.mul(fp.sub(ampTimesTotal, exports.AMP_PRECISION), P_D), exports.AMP_PRECISION, !roundUp)), roundUp);
        if (invariant.gt(prevInvariant)) {
            if (fp.sub(invariant, prevInvariant).lte(math.ONE)) {
                return invariant;
            }
        }
        else if (fp.sub(prevInvariant, invariant).lte(math.ONE)) {
            return invariant;
        }
    }
    throw new Error("STABLE_GET_BALANCE_DIDNT_CONVERGE");
};
exports._calculateInvariant = _calculateInvariant;
// Computes how many tokens can be taken out of a pool if `tokenAmountIn` are sent, given the current balances.
// The amplification parameter equals: A n^(n-1)
const _calcOutGivenIn = (amplificationParameter, balances, tokenIndexIn, tokenIndexOut, tokenAmountIn, swapFeePercentage) => {
    /**************************************************************************************************************
    // outGivenIn token x for y - polynomial equation to solve                                                   //
    // ay = amount out to calculate                                                                              //
    // by = balance token out                                                                                    //
    // y = by - ay (finalBalanceOut)                                                                             //
    // D = invariant                                               D                     D^(n+1)                 //
    // A = amplification coefficient               y^2 + ( S - ----------  - D) * y -  ------------- = 0         //
    // n = number of tokens                                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but y                                                                           //
    // P = product of final balances but y                                                                       //
    **************************************************************************************************************/
    // Subtract the fee from the amount in if requested
    if (swapFeePercentage) {
        tokenAmountIn = fp.sub(tokenAmountIn, fp.mulUp(tokenAmountIn, swapFeePercentage));
    }
    // Amount out, so we round down overall.
    // Given that we need to have a greater final balance out, the invariant needs to be rounded up
    const invariant = exports._calculateInvariant(amplificationParameter, balances, true);
    balances[tokenIndexIn] = fp.add(balances[tokenIndexIn], tokenAmountIn);
    const finalBalanceOut = _getTokenBalanceGivenInvariantAndAllOtherBalances(amplificationParameter, balances, invariant, tokenIndexOut);
    balances[tokenIndexIn] = fp.sub(balances[tokenIndexIn], tokenAmountIn);
    return fp.sub(fp.sub(balances[tokenIndexOut], finalBalanceOut), math.ONE);
};
exports._calcOutGivenIn = _calcOutGivenIn;
// Computes how many tokens must be sent to a pool if `tokenAmountOut` are sent given the
// current balances, using the Newton-Raphson approximation.
// The amplification parameter equals: A n^(n-1)
const _calcInGivenOut = (amplificationParameter, balances, tokenIndexIn, tokenIndexOut, tokenAmountOut, swapFeePercentage) => {
    /**************************************************************************************************************
    // inGivenOut token x for y - polynomial equation to solve                                                   //
    // ax = amount in to calculate                                                                               //
    // bx = balance token in                                                                                     //
    // x = bx + ax (finalBalanceIn)                                                                              //
    // D = invariant                                                D                     D^(n+1)                //
    // A = amplification coefficient               x^2 + ( S - ----------  - D) * x -  ------------- = 0         //
    // n = number of tokens                                     (A * n^n)               A * n^2n * P             //
    // S = sum of final balances but x                                                                           //
    // P = product of final balances but x                                                                       //
    **************************************************************************************************************/
    // Amount in, so we round up overall.
    // Given that we need to have a greater final balance in, the invariant needs to be rounded up
    const invariant = exports._calculateInvariant(amplificationParameter, balances, true);
    balances[tokenIndexOut] = fp.sub(balances[tokenIndexOut], tokenAmountOut);
    const finalBalanceIn = _getTokenBalanceGivenInvariantAndAllOtherBalances(amplificationParameter, balances, invariant, tokenIndexIn);
    balances[tokenIndexOut] = fp.add(balances[tokenIndexOut], tokenAmountOut);
    let amountIn = fp.add(fp.sub(finalBalanceIn, balances[tokenIndexIn]), math.ONE);
    // Add the fee to the amount in if requested
    if (swapFeePercentage) {
        amountIn = fp.divUp(amountIn, fp.complement(swapFeePercentage));
    }
    return amountIn;
};
exports._calcInGivenOut = _calcInGivenOut;
const _calcBptOutGivenExactTokensIn = (amp, balances, amountsIn, bptTotalSupply, swapFeePercentage) => {
    // BPT out, so we round down overall.
    // First loop calculates the sum of all token balances, which will be used to calculate
    // the current weights of each token, relative to this sum
    let sumBalances = math.ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = fp.add(sumBalances, balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const balanceRatiosWithFee = new Array(amountsIn.length);
    // The weighted sum of token balance ratios without fee
    let invariantRatioWithFees = math.ZERO;
    for (let i = 0; i < balances.length; i++) {
        const currentWeight = fp.divDown(balances[i], sumBalances);
        balanceRatiosWithFee[i] = fp.divDown(fp.add(balances[i], amountsIn[i]), balances[i]);
        invariantRatioWithFees = fp.add(invariantRatioWithFees, fp.mulDown(balanceRatiosWithFee[i], currentWeight));
    }
    // Second loop calculates new amounts in, taking into account the fee on the percentage excess
    const newBalances = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        let amountInWithoutFee;
        // Check if the balance ratio is greater than the ideal ratio to charge fees or not
        if (balanceRatiosWithFee[i].gt(invariantRatioWithFees)) {
            const nonTaxableAmount = fp.mulDown(balances[i], fp.sub(invariantRatioWithFees, fp.ONE));
            const taxableAmount = fp.sub(amountsIn[i], nonTaxableAmount);
            amountInWithoutFee = fp.add(nonTaxableAmount, fp.mulDown(taxableAmount, fp.sub(fp.ONE, swapFeePercentage)));
        }
        else {
            amountInWithoutFee = amountsIn[i];
        }
        newBalances[i] = fp.add(balances[i], amountInWithoutFee);
    }
    // Get current and new invariants, taking swap fees into account
    const currentInvariant = exports._calculateInvariant(amp, balances, true);
    const newInvariant = exports._calculateInvariant(amp, newBalances, false);
    const invariantRatio = fp.divDown(newInvariant, currentInvariant);
    // If the invariant didn't increase for any reason, we simply don't mint BPT
    if (invariantRatio.gt(fp.ONE)) {
        return fp.mulDown(bptTotalSupply, fp.sub(invariantRatio, fp.ONE));
    }
    else {
        return math.ZERO;
    }
};
exports._calcBptOutGivenExactTokensIn = _calcBptOutGivenExactTokensIn;
const _calcTokenInGivenExactBptOut = (amp, balances, tokenIndex, bptAmountOut, bptTotalSupply, swapFeePercentage) => {
    // Token in, so we round up overall.
    // Get the current invariant
    const currentInvariant = exports._calculateInvariant(amp, balances, true);
    // Calculate new invariant
    const newInvariant = fp.mulUp(fp.divUp(fp.add(bptTotalSupply, bptAmountOut), bptTotalSupply), currentInvariant);
    // Calculate amount in without fee.
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, newInvariant, tokenIndex);
    const amountInWithoutFee = fp.sub(newBalanceTokenIndex, balances[tokenIndex]);
    // First calculate the sum of all token balances, which will be used to calculate
    // the current weight of each token
    let sumBalances = math.ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = fp.add(sumBalances, balances[i]);
    }
    // We can now compute how much extra balance is being deposited and used in virtual swaps, and charge swap fees
    // accordingly.
    const currentWeight = fp.divDown(balances[tokenIndex], sumBalances);
    const taxablePercentage = fp.complement(currentWeight);
    const taxableAmount = fp.mulUp(amountInWithoutFee, taxablePercentage);
    const nonTaxableAmount = fp.sub(amountInWithoutFee, taxableAmount);
    return fp.add(nonTaxableAmount, fp.divUp(taxableAmount, fp.sub(fp.ONE, swapFeePercentage)));
};
exports._calcTokenInGivenExactBptOut = _calcTokenInGivenExactBptOut;
/*
  Flow of calculations:
  amountsTokenOut -> amountsOutProportional ->
  amountOutPercentageExcess -> amountOutBeforeFee -> newInvariant -> amountBPTIn
*/
const _calcBptInGivenExactTokensOut = (amp, balances, amountsOut, bptTotalSupply, swapFeePercentage) => {
    // BPT in, so we round up overall.
    // First loop calculates the sum of all token balances, which will be used to calculate
    // the current weights of each token relative to this sum
    let sumBalances = math.ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = fp.add(sumBalances, balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const balanceRatiosWithoutFee = new Array(amountsOut.length);
    let invariantRatioWithoutFees = math.ZERO;
    for (let i = 0; i < balances.length; i++) {
        const currentWeight = fp.divUp(balances[i], sumBalances);
        balanceRatiosWithoutFee[i] = fp.divUp(fp.sub(balances[i], amountsOut[i]), balances[i]);
        invariantRatioWithoutFees = fp.add(invariantRatioWithoutFees, fp.mulUp(balanceRatiosWithoutFee[i], currentWeight));
    }
    // Second loop calculates new amounts in, taking into account the fee on the percentage excess
    const newBalances = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        // Swap fees are typically charged on 'token in', but there is no 'token in' here, so we apply it to
        // 'token out'. This results in slightly larger price impact.
        let amountOutWithFee;
        if (invariantRatioWithoutFees.gt(balanceRatiosWithoutFee[i])) {
            const nonTaxableAmount = fp.mulDown(balances[i], fp.complement(invariantRatioWithoutFees));
            const taxableAmount = fp.sub(amountsOut[i], nonTaxableAmount);
            amountOutWithFee = fp.add(nonTaxableAmount, fp.divUp(taxableAmount, fp.sub(fp.ONE, swapFeePercentage)));
        }
        else {
            amountOutWithFee = amountsOut[i];
        }
        newBalances[i] = fp.sub(balances[i], amountOutWithFee);
    }
    // Get current and new invariants, taking into account swap fees
    const currentInvariant = exports._calculateInvariant(amp, balances, true);
    const newInvariant = exports._calculateInvariant(amp, newBalances, false);
    const invariantRatio = fp.divDown(newInvariant, currentInvariant);
    // return amountBPTIn
    return fp.mulUp(bptTotalSupply, fp.complement(invariantRatio));
};
exports._calcBptInGivenExactTokensOut = _calcBptInGivenExactTokensOut;
const _calcTokenOutGivenExactBptIn = (amp, balances, tokenIndex, bptAmountIn, bptTotalSupply, swapFeePercentage) => {
    // Token out, so we round down overall.
    // Get the current and new invariants. Since we need a bigger new invariant, we round the current one up.
    const currentInvariant = exports._calculateInvariant(amp, balances, true);
    const newInvariant = fp.mulUp(fp.divUp(fp.sub(bptTotalSupply, bptAmountIn), bptTotalSupply), currentInvariant);
    // Calculate amount out without fee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, newInvariant, tokenIndex);
    const amountOutWithoutFee = fp.sub(balances[tokenIndex], newBalanceTokenIndex);
    // First calculate the sum of all token balances, which will be used to calculate
    // the current weight of each token
    let sumBalances = math.ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = fp.add(sumBalances, balances[i]);
    }
    // We can now compute how much excess balance is being withdrawn as a result of the virtual swaps, which result
    // in swap fees.
    const currentWeight = fp.divDown(balances[tokenIndex], sumBalances);
    const taxablePercentage = fp.complement(currentWeight);
    // Swap fees are typically charged on 'token in', but there is no 'token in' here, so we apply it
    // to 'token out'. This results in slightly larger price impact. Fees are rounded up.
    const taxableAmount = fp.mulUp(amountOutWithoutFee, taxablePercentage);
    const nonTaxableAmount = fp.sub(amountOutWithoutFee, taxableAmount);
    return fp.add(nonTaxableAmount, fp.mulDown(taxableAmount, fp.sub(fp.ONE, swapFeePercentage)));
};
exports._calcTokenOutGivenExactBptIn = _calcTokenOutGivenExactBptIn;
const _calcTokensOutGivenExactBptIn = (balances, bptAmountIn, bptTotalSupply) => {
    /**********************************************************************************************
    // exactBPTInForTokensOut                                                                    //
    // (per token)                                                                               //
    // aO = tokenAmountOut             /        bptIn         \                                  //
    // b = tokenBalance      a0 = b * | ---------------------  |                                 //
    // bptIn = bptAmountIn             \     bptTotalSupply    /                                 //
    // bpt = bptTotalSupply                                                                      //
    **********************************************************************************************/
    // Since we're computing an amount out, we round down overall. This means rounding down on both the
    // multiplication and division.
    const bptRatio = fp.divDown(bptAmountIn, bptTotalSupply);
    const amountsOut = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        amountsOut[i] = fp.mulDown(balances[i], bptRatio);
    }
    return amountsOut;
};
exports._calcTokensOutGivenExactBptIn = _calcTokensOutGivenExactBptIn;
// The amplification parameter equals: A n^(n-1)
const _calcDueTokenProtocolSwapFeeAmount = (amplificationParameter, balances, lastInvariant, tokenIndex, protocolSwapFeePercentage) => {
    /**************************************************************************************************************
    // oneTokenSwapFee - polynomial equation to solve                                                            //
    // af = fee amount to calculate in one token                                                                 //
    // bf = balance of fee token                                                                                 //
    // f = bf - af (finalBalanceFeeToken)                                                                        //
    // D = old invariant                                            D                     D^(n+1)                //
    // A = amplification coefficient               f^2 + ( S - ----------  - D) * f -  ------------- = 0         //
    // n = number of tokens                                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but f                                                                           //
    // P = product of final balances but f                                                                       //
    **************************************************************************************************************/
    // Protocol swap fee amount, so we round down overall.
    const finalBalanceFeeToken = _getTokenBalanceGivenInvariantAndAllOtherBalances(amplificationParameter, balances, lastInvariant, tokenIndex);
    if (balances[tokenIndex].lte(finalBalanceFeeToken)) {
        // This shouldn't happen outside of rounding errors, but have this safeguard nonetheless to prevent the Pool
        // from entering a locked state in which joins and exits revert while computing accumulated swap fees.
        return math.ZERO;
    }
    // Result is rounded down
    const accumulatedTokenSwapFees = fp.sub(balances[tokenIndex], finalBalanceFeeToken);
    return fp.divDown(fp.mulDown(accumulatedTokenSwapFees, protocolSwapFeePercentage), fp.ONE);
};
exports._calcDueTokenProtocolSwapFeeAmount = _calcDueTokenProtocolSwapFeeAmount;
// This function calculates the balance of a given token (tokenIndex)
// given all the other balances and the invariant
const _getTokenBalanceGivenInvariantAndAllOtherBalances = (amplificationParameter, balances, invariant, tokenIndex) => {
    // Rounds result up overall
    const numTokens = big_number_1.bn(balances.length);
    const ampTimesTotal = math.mul(amplificationParameter, numTokens);
    let sum = balances[0];
    let P_D = math.mul(numTokens, balances[0]);
    for (let j = 1; j < balances.length; j++) {
        P_D = math.divDown(math.mul(math.mul(P_D, balances[j]), numTokens), invariant);
        sum = fp.add(sum, balances[j]);
    }
    sum = fp.sub(sum, balances[tokenIndex]);
    const inv2 = math.mul(invariant, invariant);
    // We remove the balance fromm c by multiplying it
    const c = math.mul(math.mul(math.divUp(inv2, math.mul(ampTimesTotal, P_D)), exports.AMP_PRECISION), balances[tokenIndex]);
    const b = fp.add(sum, math.mul(math.divDown(invariant, ampTimesTotal), exports.AMP_PRECISION));
    // We iterate to find the balance
    let prevTokenBalance = math.ZERO;
    // We multiply the first iteration outside the loop with the invariant to set the value of the
    // initial approximation.
    let tokenBalance = math.divUp(fp.add(inv2, c), fp.add(invariant, b));
    for (let i = 0; i < 255; i++) {
        prevTokenBalance = tokenBalance;
        tokenBalance = math.divUp(fp.add(math.mul(tokenBalance, tokenBalance), c), fp.sub(fp.add(math.mul(tokenBalance, math.TWO), b), invariant));
        if (tokenBalance.gt(prevTokenBalance)) {
            if (fp.sub(tokenBalance, prevTokenBalance).lte(math.ONE)) {
                return tokenBalance;
            }
        }
        else if (fp.sub(prevTokenBalance, tokenBalance).lte(math.ONE)) {
            return tokenBalance;
        }
    }
    throw new Error("STABLE_GET_BALANCE_DIDNT_CONVERGE");
};
}(math$3));

Object.defineProperty(stable, "__esModule", { value: true });
const index_1$1 = subgraph;
const big_number_1$2 = bigNumber;
const common_1$1 = common;
const base_1$1 = base;
const math$2 = math$3;
class StablePool$1 extends base_1$1.default {
    // ---------------------- Constructor ----------------------
    constructor(params) {
        super(params);
        if (params.tokens.length > math$2.MAX_STABLE_TOKENS) {
            throw new Error("MAX_STABLE_TOKENS");
        }
        this._tokens = common_1$1.shallowCopyAll(params.tokens);
        if (big_number_1$2.bn(params.amplificationParameter).lt(math$2.MIN_AMP)) {
            throw new Error("MIN_AMP");
        }
        if (big_number_1$2.bn(params.amplificationParameter).gt(math$2.MAX_AMP)) {
            throw new Error("MAX_AMP");
        }
        this._amplificationParameter = big_number_1$2.bn(params.amplificationParameter)
            .times(math$2.AMP_PRECISION)
            .toString();
    }
    // ---------------------- Getters ----------------------
    get tokens() {
        // Shallow-copy to disallow direct changes
        return common_1$1.shallowCopyAll(this._tokens);
    }
    get amplificationParameter() {
        return big_number_1$2.bn(this._amplificationParameter).idiv(math$2.AMP_PRECISION).toString();
    }
    // ---------------------- Subgraph initializer ----------------------
    static async initFromRealPool(poolId, query = false, blockNumber, testnet) {
        const pool = await index_1$1.getPool(poolId, blockNumber, testnet);
        if (!pool) {
            throw new Error("Could not fetch pool data");
        }
        if (pool.poolType !== "Stable") {
            throw new Error("Pool must be stable");
        }
        const id = pool.id;
        const address = pool.address;
        const bptTotalSupply = pool.totalShares;
        const swapFeePercentage = pool.swapFee;
        const amplificationParameter = pool.amp;
        const tokens = [];
        for (const token of pool.tokens) {
            tokens.push({
                address: token.address,
                symbol: token.symbol,
                balance: token.balance,
                decimals: token.decimals,
            });
        }
        return new StablePool$1({
            id,
            address,
            tokens,
            bptTotalSupply,
            swapFeePercentage,
            amplificationParameter,
            query,
        });
    }
    // ---------------------- Swap actions ----------------------
    swapGivenIn(tokenInSymbol, tokenOutSymbol, amountIn) {
        const tokenIndexIn = this._tokens.findIndex((t) => t.symbol === tokenInSymbol);
        const tokenIndexOut = this._tokens.findIndex((t) => t.symbol === tokenOutSymbol);
        const tokenIn = this._tokens[tokenIndexIn];
        const tokenOut = this._tokens[tokenIndexOut];
        const scaledAmountOut = math$2._calcOutGivenIn(big_number_1$2.bn(this._amplificationParameter), this._tokens.map((t) => this._upScale(t.balance, t.decimals)), tokenIndexIn, tokenIndexOut, this._upScale(amountIn, tokenIn.decimals), this._upScale(this._swapFeePercentage, 18));
        const amountOut = this._downScaleDown(scaledAmountOut, tokenOut.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenIn.balance = big_number_1$2.bn(tokenIn.balance).plus(amountIn).toString();
            tokenOut.balance = big_number_1$2.bn(tokenOut.balance).minus(amountOut).toString();
        }
        return amountOut.toString();
    }
    swapGivenOut(tokenInSymbol, tokenOutSymbol, amountOut) {
        const tokenIndexIn = this._tokens.findIndex((t) => t.symbol === tokenInSymbol);
        const tokenIndexOut = this._tokens.findIndex((t) => t.symbol === tokenOutSymbol);
        const tokenIn = this._tokens[tokenIndexIn];
        const tokenOut = this._tokens[tokenIndexOut];
        const scaledAmountIn = math$2._calcInGivenOut(big_number_1$2.bn(this._amplificationParameter), this._tokens.map((t) => this._upScale(t.balance, t.decimals)), tokenIndexIn, tokenIndexOut, this._upScale(amountOut, tokenOut.decimals), this._upScale(this._swapFeePercentage, 18));
        const amountIn = this._downScaleUp(scaledAmountIn, tokenIn.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenIn.balance = big_number_1$2.bn(tokenIn.balance).plus(amountIn).toString();
            tokenOut.balance = big_number_1$2.bn(tokenOut.balance).minus(amountOut).toString();
        }
        return amountIn.toString();
    }
    // ---------------------- LP actions ----------------------
    joinExactTokensInForBptOut(amountsIn) {
        if (Object.keys(amountsIn).length !== this._tokens.length) {
            throw new Error("Invalid input");
        }
        const scaledBptOut = math$2._calcBptOutGivenExactTokensIn(big_number_1$2.bn(this._amplificationParameter), this._tokens.map((t) => this._upScale(t.balance, t.decimals)), this._tokens.map((t) => this._upScale(amountsIn[t.symbol], t.decimals)), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const bptOut = this._downScaleDown(scaledBptOut, 18);
        // In-place balance updates
        if (!this._query) {
            for (let i = 0; i < this._tokens.length; i++) {
                const token = this._tokens[i];
                token.balance = big_number_1$2.bn(token.balance)
                    .plus(amountsIn[token.symbol])
                    .toString();
            }
            this._bptTotalSupply = big_number_1$2.bn(this._bptTotalSupply).plus(bptOut).toString();
        }
        return bptOut.toString();
    }
    joinTokenInForExactBptOut(tokenInSymbol, bptOut) {
        const tokenIndex = this._tokens.findIndex((t) => t.symbol === tokenInSymbol);
        const tokenIn = this._tokens[tokenIndex];
        if (!tokenIn) {
            throw new Error("Invalid input");
        }
        const scaledAmountIn = math$2._calcTokenInGivenExactBptOut(big_number_1$2.bn(this._amplificationParameter), this._tokens.map((t) => this._upScale(t.balance, t.decimals)), tokenIndex, this._upScale(bptOut, 18), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const amountIn = this._downScaleUp(scaledAmountIn, tokenIn.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenIn.balance = big_number_1$2.bn(tokenIn.balance).plus(amountIn).toString();
            this._bptTotalSupply = big_number_1$2.bn(this._bptTotalSupply).plus(bptOut).toString();
        }
        return amountIn.toString();
    }
    exitExactBptInForTokenOut(tokenOutSymbol, bptIn) {
        const tokenIndex = this._tokens.findIndex((t) => t.symbol === tokenOutSymbol);
        const tokenOut = this._tokens[tokenIndex];
        if (!tokenOut) {
            throw new Error("Invalid input");
        }
        const scaledAmountOut = math$2._calcTokenOutGivenExactBptIn(big_number_1$2.bn(this._amplificationParameter), this._tokens.map((t) => this._upScale(t.balance, t.decimals)), tokenIndex, this._upScale(bptIn, 18), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const amountOut = this._downScaleDown(scaledAmountOut, tokenOut.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenOut.balance = big_number_1$2.bn(tokenOut.balance).minus(amountOut).toString();
            this._bptTotalSupply = big_number_1$2.bn(this._bptTotalSupply).minus(bptIn).toString();
        }
        return amountOut.toString();
    }
    exitExactBptInForTokensOut(bptIn) {
        // Exactly match the EVM version
        if (big_number_1$2.bn(bptIn).gt(this._bptTotalSupply)) {
            throw new Error("BPT in exceeds total supply");
        }
        const scaledAmountsOut = math$2._calcTokensOutGivenExactBptIn(this._tokens.map((t) => this._upScale(t.balance, t.decimals)), this._upScale(bptIn, 18), this._upScale(this._bptTotalSupply, 18));
        const amountsOut = scaledAmountsOut.map((amount, i) => this._downScaleDown(amount, this._tokens[i].decimals));
        // In-place balance updates
        if (!this._query) {
            for (let i = 0; i < this._tokens.length; i++) {
                const token = this._tokens[i];
                token.balance = big_number_1$2.bn(token.balance).minus(amountsOut[i]).toString();
            }
            this._bptTotalSupply = big_number_1$2.bn(this._bptTotalSupply).minus(bptIn).toString();
        }
        return amountsOut.map((a) => a.toString());
    }
    exitBptInForExactTokensOut(amountsOut) {
        if (Object.keys(amountsOut).length !== this._tokens.length) {
            throw new Error("Invalid input");
        }
        const scaledBptIn = math$2._calcBptInGivenExactTokensOut(big_number_1$2.bn(this._amplificationParameter), this._tokens.map((t) => this._upScale(t.balance, t.decimals)), this._tokens.map((t) => this._upScale(amountsOut[t.symbol], t.decimals)), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const bptIn = this._downScaleDown(scaledBptIn, 18);
        // In-place balance updates
        if (!this._query) {
            for (let i = 0; i < this._tokens.length; i++) {
                const token = this._tokens[i];
                token.balance = big_number_1$2.bn(token.balance)
                    .minus(amountsOut[token.symbol])
                    .toString();
            }
            this._bptTotalSupply = big_number_1$2.bn(this._bptTotalSupply).minus(bptIn).toString();
        }
        return bptIn.toString();
    }
}
stable.default = StablePool$1;

var weighted = {};

var math$1 = {};

// Ported from Solidity:
// https://github.com/balancer-labs/balancer-core-v2/blob/70843e6a61ad11208c1cfabf5cfe15be216ca8d3/pkg/pool-weighted/contracts/WeightedMath.sol
Object.defineProperty(math$1, "__esModule", { value: true });
math$1._calcBptInGivenExactTokenOut = math$1._calcBptOutGivenExactTokenIn = math$1._calcDueTokenProtocolSwapFeeAmount = math$1._calcTokensOutGivenExactBptIn = math$1._calcTokenOutGivenExactBptIn = math$1._calcBptInGivenExactTokensOut = math$1._calcTokenInGivenExactBptOut = math$1._calcBptOutGivenExactTokensIn = math$1._calcInGivenOut = math$1._calcOutGivenIn = math$1._calculateInvariant = void 0;
const big_number_1$1 = bigNumber;
const fp = fixedPoint;
// Swap limits: amounts swapped may not be larger than this percentage of total balance
const MAX_IN_RATIO = big_number_1$1.bn("300000000000000000"); // 0.3e18
const MAX_OUT_RATIO = big_number_1$1.bn("300000000000000000"); // 0.3e18
// Invariant growth limit: non-proportional joins cannot cause the invariant to increase by more than this ratio
const MAX_INVARIANT_RATIO = big_number_1$1.bn("3000000000000000000"); // 3e18
// Invariant shrink limit: non-proportional exits cannot cause the invariant to decrease by less than this ratio
const MIN_INVARIANT_RATIO = big_number_1$1.bn("700000000000000000"); // 0.7e18
const _calculateInvariant = (normalizedWeights, balances) => {
    /*****************************************************************************************
    // invariant               _____                                                        //
    // wi = weight index i      | |      wi                                                 //
    // bi = balance index i     | |  bi ^   = i                                             //
    // i = invariant                                                                        //
    *****************************************************************************************/
    let invariant = fp.ONE;
    for (let i = 0; i < normalizedWeights.length; i++) {
        invariant = fp.mulDown(invariant, fp.powDown(balances[i], normalizedWeights[i]));
    }
    if (invariant.lte(fp.ZERO)) {
        throw new Error("ZERO_INVARIANT");
    }
    return invariant;
};
math$1._calculateInvariant = _calculateInvariant;
// Computes how many tokens can be taken out of a pool if `amountIn` is sent, given the
// current balances and weights.
const _calcOutGivenIn = (balanceIn, weightIn, balanceOut, weightOut, amountIn, swapFeePercentage) => {
    /*****************************************************************************************
    // outGivenIn                                                                           //
    // ao = amountOut                                                                       //
    // bo = balanceOut                                                                      //
    // bi = balanceIn              /      /            bi             \    (wi / wo) \      //
    // ai = amountIn    ao = bo * |  1 - | --------------------------  | ^            |     //
    // wi = weightIn               \      \       ( bi + ai )         /              /      //
    // wo = weightOut                                                                       //
    *****************************************************************************************/
    // Subtract the fee from the amount in if requested
    if (swapFeePercentage) {
        amountIn = fp.sub(amountIn, fp.mulUp(amountIn, swapFeePercentage));
    }
    // Amount out, so we round down overall
    // The multiplication rounds down, and the subtrahend (power) rounds up (so the base rounds up too)
    // Because bi / (bi + ai) <= 1, the exponent rounds down
    // Cannot exceed maximum in ratio
    if (amountIn.gt(fp.mulDown(balanceIn, MAX_IN_RATIO))) {
        throw new Error("MAX_IN_RATIO");
    }
    const denominator = fp.add(balanceIn, amountIn);
    const base = fp.divUp(balanceIn, denominator);
    const exponent = fp.divDown(weightIn, weightOut);
    const power = fp.powUp(base, exponent);
    return fp.mulDown(balanceOut, fp.complement(power));
};
math$1._calcOutGivenIn = _calcOutGivenIn;
// Computes how many tokens must be sent to a pool in order to take `amountOut`, given the
// current balances and weights.
const _calcInGivenOut = (balanceIn, weightIn, balanceOut, weightOut, amountOut, swapFeePercentage) => {
    /*****************************************************************************************
    // inGivenOut                                                                           //
    // ao = amountOut                                                                       //
    // bo = balanceOut                                                                      //
    // bi = balanceIn              /  /            bo             \    (wo / wi)      \     //
    // ai = amountIn    ai = bi * |  | --------------------------  | ^            - 1  |    //
    // wi = weightIn               \  \       ( bo - ao )         /                   /     //
    // wo = weightOut                                                                       //
    *****************************************************************************************/
    // Amount in, so we round up overall
    // The multiplication rounds up, and the power rounds up (so the base rounds up too)
    // Because bo / (bo - ao) >= 1, the exponent rounds up
    // Cannot exceed maximum out ratio
    if (amountOut.gt(fp.mulDown(balanceOut, MAX_OUT_RATIO))) {
        throw new Error("MAX_OUT_RATIO");
    }
    const base = fp.divUp(balanceOut, fp.sub(balanceOut, amountOut));
    const exponent = fp.divUp(weightOut, weightIn);
    const power = fp.powUp(base, exponent);
    const ratio = fp.sub(power, fp.ONE);
    let amountIn = fp.mulUp(balanceIn, ratio);
    // Add the fee to the amount in if requested
    if (swapFeePercentage) {
        amountIn = fp.divUp(amountIn, fp.complement(swapFeePercentage));
    }
    return amountIn;
};
math$1._calcInGivenOut = _calcInGivenOut;
const _calcBptOutGivenExactTokensIn = (balances, normalizedWeights, amountsIn, bptTotalSupply, swapFee) => {
    // BPT out, so we round down overall
    const balanceRatiosWithFee = new Array(amountsIn.length);
    let invariantRatioWithFees = fp.ZERO;
    for (let i = 0; i < balances.length; i++) {
        balanceRatiosWithFee[i] = fp.divDown(fp.add(balances[i], amountsIn[i]), balances[i]);
        invariantRatioWithFees = fp.add(invariantRatioWithFees, fp.mulDown(balanceRatiosWithFee[i], normalizedWeights[i]));
    }
    let invariantRatio = fp.ONE;
    for (let i = 0; i < balances.length; i++) {
        let amountInWithoutFee;
        if (balanceRatiosWithFee[i].gt(invariantRatioWithFees)) {
            const nonTaxableAmount = fp.mulDown(balances[i], fp.sub(invariantRatioWithFees, fp.ONE));
            const taxableAmount = fp.sub(amountsIn[i], nonTaxableAmount);
            amountInWithoutFee = fp.add(nonTaxableAmount, fp.mulDown(taxableAmount, fp.sub(fp.ONE, swapFee)));
        }
        else {
            amountInWithoutFee = amountsIn[i];
        }
        const balanceRatio = fp.divDown(fp.add(balances[i], amountInWithoutFee), balances[i]);
        invariantRatio = fp.mulDown(invariantRatio, fp.powDown(balanceRatio, normalizedWeights[i]));
    }
    if (invariantRatio.gte(fp.ONE)) {
        return fp.mulDown(bptTotalSupply, fp.sub(invariantRatio, fp.ONE));
    }
    else {
        return fp.ZERO;
    }
};
math$1._calcBptOutGivenExactTokensIn = _calcBptOutGivenExactTokensIn;
const _calcTokenInGivenExactBptOut = (balance, normalizedWeight, bptAmountOut, bptTotalSupply, swapFee) => {
    /*****************************************************************************************
    // tokenInForExactBptOut                                                                //
    // a = amountIn                                                                         //
    // b = balance                      /  /     bpt + bptOut     \    (1 / w)      \       //
    // bptOut = bptAmountOut   a = b * |  | ---------------------- | ^          - 1  |      //
    // bpt = bptTotalSupply             \  \         bpt          /                 /       //
    // w = normalizedWeight                                                                 //
    *****************************************************************************************/
    // Token in, so we round up overall
    // Calculate the factor by which the invariant will increase after minting `bptAmountOut`
    const invariantRatio = fp.divUp(fp.add(bptTotalSupply, bptAmountOut), bptTotalSupply);
    if (invariantRatio.gt(MAX_INVARIANT_RATIO)) {
        throw new Error("MAX_OUT_BPT_FOR_TOKEN_IN");
    }
    // Calculate by how much the token balance has to increase to cause `invariantRatio`
    const balanceRatio = fp.powUp(invariantRatio, fp.divUp(fp.ONE, normalizedWeight));
    const amountInWithoutFee = fp.mulUp(balance, fp.sub(balanceRatio, fp.ONE));
    // We can now compute how much extra balance is being deposited and used in virtual swaps, and charge swap fees accordingly
    const taxablePercentage = fp.complement(normalizedWeight);
    const taxableAmount = fp.mulUp(amountInWithoutFee, taxablePercentage);
    const nonTaxableAmount = fp.sub(amountInWithoutFee, taxableAmount);
    return fp.add(nonTaxableAmount, fp.divUp(taxableAmount, fp.complement(swapFee)));
};
math$1._calcTokenInGivenExactBptOut = _calcTokenInGivenExactBptOut;
const _calcBptInGivenExactTokensOut = (balances, normalizedWeights, amountsOut, bptTotalSupply, swapFee) => {
    // BPT in, so we round up overall
    const balanceRatiosWithoutFee = new Array(amountsOut.length);
    let invariantRatioWithoutFees = fp.ZERO;
    for (let i = 0; i < balances.length; i++) {
        balanceRatiosWithoutFee[i] = fp.divUp(fp.sub(balances[i], amountsOut[i]), balances[i]);
        invariantRatioWithoutFees = fp.add(invariantRatioWithoutFees, fp.mulUp(balanceRatiosWithoutFee[i], normalizedWeights[i]));
    }
    let invariantRatio = fp.ONE;
    for (let i = 0; i < balances.length; i++) {
        // Swap fees are typically charged on 'tokenIn', but there is no 'tokenIn' here, so we apply it to
        // 'tokenOut' - this results in slightly larger price impact
        let amountOutWithFee;
        if (invariantRatioWithoutFees.gt(balanceRatiosWithoutFee[i])) {
            const nonTaxableAmount = fp.mulDown(balances[i], fp.complement(invariantRatioWithoutFees));
            const taxableAmount = fp.sub(amountsOut[i], nonTaxableAmount);
            amountOutWithFee = fp.add(nonTaxableAmount, fp.divUp(taxableAmount, fp.complement(swapFee)));
        }
        else {
            amountOutWithFee = amountsOut[i];
        }
        const balanceRatio = fp.divDown(fp.sub(balances[i], amountOutWithFee), balances[i]);
        invariantRatio = fp.mulDown(invariantRatio, fp.powDown(balanceRatio, normalizedWeights[i]));
    }
    return fp.mulUp(bptTotalSupply, fp.complement(invariantRatio));
};
math$1._calcBptInGivenExactTokensOut = _calcBptInGivenExactTokensOut;
const _calcTokenOutGivenExactBptIn = (balance, normalizedWeight, bptAmountIn, bptTotalSupply, swapFee) => {
    /*****************************************************************************************
    // exactBptInForTokenOut                                                                //
    // a = amountOut                                                                        //
    // b = balance                     /      /    bpt - bptIn    \    (1 / w)  \           //
    // bptIn = bptAmountIn    a = b * |  1 - | ------------------- | ^           |          //
    // bpt = bptTotalSupply            \      \        bpt        /             /           //
    // w = weight                                                                           //
    *****************************************************************************************/
    // Token out, so we round down overall
    // The multiplication rounds down, but the power rounds up (so the base rounds up)
    // Because (bpt - bptIn) / bpt <= 1, the exponent rounds down
    // Calculate the factor by which the invariant will decrease after burning `bptAmountIn`
    const invariantRatio = fp.divUp(fp.sub(bptTotalSupply, bptAmountIn), bptTotalSupply);
    if (invariantRatio.lt(MIN_INVARIANT_RATIO)) {
        throw new Error("MIN_BPT_IN_FOR_TOKEN_OUT");
    }
    // Calculate by how much the token balance has to increase to cause `invariantRatio`
    const balanceRatio = fp.powUp(invariantRatio, fp.divDown(fp.ONE, normalizedWeight));
    // Because of rounding up, `balanceRatio` can be greater than one, so we use its complement
    const amountOutWithoutFee = fp.mulDown(balance, fp.complement(balanceRatio));
    // We can now compute how much excess balance is being withdrawn as a result of the virtual swaps,
    // which result in swap fees
    const taxablePercentage = fp.complement(normalizedWeight);
    // Swap fees are typically charged on 'tokenIn', but there is no 'tokenIn' here, so we apply it
    // to 'tokenOut' - this results in slightly larger price impact (fees are rounded up)
    const taxableAmount = fp.mulUp(amountOutWithoutFee, taxablePercentage);
    const nonTaxableAmount = fp.sub(amountOutWithoutFee, taxableAmount);
    return fp.add(nonTaxableAmount, fp.mulDown(taxableAmount, fp.complement(swapFee)));
};
math$1._calcTokenOutGivenExactBptIn = _calcTokenOutGivenExactBptIn;
const _calcTokensOutGivenExactBptIn = (balances, bptAmountIn, bptTotalSupply) => {
    /*****************************************************************************************
    // exactBptInForTokensOut                                                               //
    // (formula per token)                                                                  //
    // ao = amountOut                  /   bptIn   \                                        //
    // b = balance           ao = b * | ----------- |                                       //
    // bptIn = bptAmountIn             \    bpt    /                                        //
    // bpt = bptTotalSupply                                                                 //
    *****************************************************************************************/
    // Token out, so we round down overall
    // This means rounding down on both multiplication and division
    const bptRatio = fp.divDown(bptAmountIn, bptTotalSupply);
    const amountsOut = new Array(balances.length);
    for (let i = 0; i < balances.length; i++) {
        amountsOut[i] = fp.mulDown(balances[i], bptRatio);
    }
    return amountsOut;
};
math$1._calcTokensOutGivenExactBptIn = _calcTokensOutGivenExactBptIn;
const _calcDueTokenProtocolSwapFeeAmount = (balance, normalizedWeight, previousInvariant, currentInvariant, protocolSwapFeePercentage) => {
    /*********************************************************************************
    /*  protocolSwapFeePercentage * balanceToken * ( 1 - (previousInvariant / currentInvariant) ^ (1 / weightToken))
    *********************************************************************************/
    if (currentInvariant.lte(previousInvariant)) {
        // This shouldn't happen outside of rounding errors, but have this safeguard nonetheless to prevent the Pool
        // from entering a locked state in which joins and exits revert while computing accumulated swap fees.
        return fp.ZERO;
    }
    // We round down to prevent issues in the Pool's accounting, even if it means paying slightly less in protocol
    // fees to the Vault.
    // Fee percentage and balance multiplications round down, while the subtrahend (power) rounds up (as does the
    // base). Because previousInvariant / currentInvariant <= 1, the exponent rounds down.
    let base = fp.divUp(previousInvariant, currentInvariant);
    const exponent = fp.divDown(fp.ONE, normalizedWeight);
    // Because the exponent is larger than one, the base of the power function has a lower bound. We cap to this
    // value to avoid numeric issues, which means in the extreme case (where the invariant growth is larger than
    // 1 / min exponent) the Pool will pay less in protocol fees than it should.
    base = base.gte(fp.MIN_POW_BASE_FREE_EXPONENT)
        ? base
        : fp.MIN_POW_BASE_FREE_EXPONENT;
    const power = fp.powUp(base, exponent);
    const tokenAccruedFees = fp.mulDown(balance, fp.complement(power));
    return fp.mulDown(tokenAccruedFees, protocolSwapFeePercentage);
};
math$1._calcDueTokenProtocolSwapFeeAmount = _calcDueTokenProtocolSwapFeeAmount;
// Convenience method needed by the SOR package (adapted from _calcBptOutGivenExactTokensIn)
const _calcBptOutGivenExactTokenIn = (balance, normalizedWeight, amountIn, bptTotalSupply, swapFee) => {
    // BPT out, so we round down overall
    const tokenBalanceRatioWithoutFee = fp.divDown(fp.add(balance, amountIn), balance);
    const weightedBalanceRatio = fp.mulDown(tokenBalanceRatioWithoutFee, normalizedWeight);
    let invariantRatio = fp.ONE;
    // Percentage of the amount supplied that will be swapped for other tokens in the pool
    let tokenBalancePercentageExcess;
    // Some tokens might have amounts supplied in excess of a 'balanced' join: these are identified if
    // the token's balance ratio sans fee is larger than the weighted balance ratio, and swap fees charged
    // on the amount to swap
    if (weightedBalanceRatio.gte(tokenBalanceRatioWithoutFee)) {
        tokenBalancePercentageExcess = fp.ZERO;
    }
    else {
        tokenBalancePercentageExcess = fp.divUp(fp.sub(tokenBalanceRatioWithoutFee, weightedBalanceRatio), fp.sub(tokenBalanceRatioWithoutFee, fp.ONE));
    }
    const swapFeeExcess = fp.mulUp(swapFee, tokenBalancePercentageExcess);
    const amountInAfterFee = fp.mulDown(amountIn, fp.complement(swapFeeExcess));
    const tokenBalanceRatio = fp.add(fp.ONE, fp.divDown(amountInAfterFee, balance));
    invariantRatio = fp.mulDown(invariantRatio, fp.powDown(tokenBalanceRatio, normalizedWeight));
    return fp.mulDown(bptTotalSupply, fp.sub(invariantRatio, fp.ONE));
};
math$1._calcBptOutGivenExactTokenIn = _calcBptOutGivenExactTokenIn;
// Convenience method needed by the SOR package (adapted from _calcBptInGivenExactTokensOut)
function _calcBptInGivenExactTokenOut(balance, normalizedWeight, amountOut, bptTotalSupply, swapFee) {
    // BPT in, so we round up overall
    const tokenBalanceRatioWithoutFee = fp.divUp(fp.sub(balance, amountOut), balance);
    const weightedBalanceRatio = fp.mulUp(tokenBalanceRatioWithoutFee, normalizedWeight);
    let invariantRatio = fp.ONE;
    // Percentage of the amount supplied that will be swapped for other tokens in the pool
    let tokenBalancePercentageExcess;
    // For each ratioSansFee, compare with the total weighted ratio (weightedBalanceRatio) and
    // decrease the fee from what goes above it
    if (weightedBalanceRatio.lte(tokenBalanceRatioWithoutFee)) {
        tokenBalancePercentageExcess = fp.ZERO;
    }
    else {
        tokenBalancePercentageExcess = fp.divUp(fp.sub(weightedBalanceRatio, tokenBalanceRatioWithoutFee), fp.complement(tokenBalanceRatioWithoutFee));
    }
    const swapFeeExcess = fp.mulUp(swapFee, tokenBalancePercentageExcess);
    const amountOutBeforeFee = fp.divUp(amountOut, fp.complement(swapFeeExcess));
    const tokenBalanceRatio = fp.complement(fp.divUp(amountOutBeforeFee, balance));
    invariantRatio = fp.mulDown(invariantRatio, fp.powDown(tokenBalanceRatio, normalizedWeight));
    return fp.mulUp(bptTotalSupply, fp.complement(invariantRatio));
}
math$1._calcBptInGivenExactTokenOut = _calcBptInGivenExactTokenOut;

Object.defineProperty(weighted, "__esModule", { value: true });
const index_1 = subgraph;
const big_number_1 = bigNumber;
const common_1 = common;
const base_1 = base;
const math = math$1;
class WeightedPool$1 extends base_1.default {
    // ---------------------- Constructor ----------------------
    constructor(params) {
        super(params);
        this.MIN_TOKENS = 2;
        this.MAX_TOKENS = 8;
        // A minimum normalized weight imposes a maximum weight ratio
        // We need this due to limitations in the implementation of the power function, as these ratios are often exponents
        this.MIN_WEIGHT = big_number_1.bn("0.01"); // 0.01e18
        if (params.tokens.length < this.MIN_TOKENS) {
            throw new Error("MIN_TOKENS");
        }
        if (params.tokens.length > this.MAX_TOKENS) {
            throw new Error("MAX_TOKENS");
        }
        this._tokens = common_1.shallowCopyAll(params.tokens);
        let normalizedSum = big_number_1.bn(0);
        for (let i = 0; i < params.tokens.length; i++) {
            if (big_number_1.bn(params.tokens[i].weight).lt(this.MIN_WEIGHT)) {
                throw new Error("MIN_WEIGHT");
            }
            normalizedSum = normalizedSum.plus(params.tokens[i].weight);
        }
        if (!normalizedSum.eq(1)) {
            throw new Error("NORMALIZED_WEIGHT_INVARIANT");
        }
    }
    // ---------------------- Getters ----------------------
    get tokens() {
        // Shallow-copy to disallow direct changes
        return common_1.shallowCopyAll(this._tokens);
    }
    // ---------------------- Subgraph initializer ----------------------
    static async initFromRealPool(poolId, query = false, blockNumber, testnet) {
        const pool = await index_1.getPool(poolId, blockNumber, testnet);
        if (!pool) {
            throw new Error("Could not fetch pool data");
        }
        if (pool.poolType !== "Weighted") {
            throw new Error("Pool must be weighted");
        }
        const id = pool.id;
        const address = pool.address;
        const bptTotalSupply = pool.totalShares;
        const swapFeePercentage = pool.swapFee;
        const tokens = [];
        for (const token of pool.tokens) {
            tokens.push({
                address: token.address,
                symbol: token.symbol,
                balance: token.balance,
                decimals: token.decimals,
                weight: token.weight,
            });
        }
        return new WeightedPool$1({
            id,
            address,
            tokens,
            bptTotalSupply,
            swapFeePercentage,
            query,
        });
    }
    // ---------------------- Misc ----------------------
    getInvariant() {
        const invariant = math._calculateInvariant(this._tokens.map((t) => this._upScale(t.weight, 18)), this._tokens.map((t) => this._upScale(t.balance, t.decimals)));
        return invariant.toString();
    }
    // ---------------------- Swap actions ----------------------
    swapGivenIn(tokenInSymbol, tokenOutSymbol, amountIn) {
        const tokenIn = this._tokens.find((t) => t.symbol === tokenInSymbol);
        const tokenOut = this._tokens.find((t) => t.symbol === tokenOutSymbol);
        const scaledAmountOut = math._calcOutGivenIn(this._upScale(tokenIn.balance, tokenIn.decimals), this._upScale(tokenIn.weight, 18), this._upScale(tokenOut.balance, tokenOut.decimals), this._upScale(tokenOut.weight, 18), this._upScale(amountIn, tokenIn.decimals), this._upScale(this._swapFeePercentage, 18));
        const amountOut = this._downScaleDown(scaledAmountOut, tokenOut.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenIn.balance = big_number_1.bn(tokenIn.balance).plus(amountIn).toString();
            tokenOut.balance = big_number_1.bn(tokenOut.balance).minus(amountOut).toString();
        }
        return amountOut.toString();
    }
    swapGivenOut(tokenInSymbol, tokenOutSymbol, amountOut) {
        const tokenIn = this._tokens.find((t) => t.symbol === tokenInSymbol);
        const tokenOut = this._tokens.find((t) => t.symbol === tokenOutSymbol);
        const scaledAmountIn = math._calcInGivenOut(this._upScale(tokenIn.balance, tokenIn.decimals), this._upScale(tokenIn.weight, 18), this._upScale(tokenOut.balance, tokenOut.decimals), this._upScale(tokenOut.weight, 18), this._upScale(amountOut, tokenOut.decimals), this._upScale(this._swapFeePercentage, 18));
        const amountIn = this._downScaleUp(scaledAmountIn, tokenIn.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenIn.balance = big_number_1.bn(tokenIn.balance).plus(amountIn).toString();
            tokenOut.balance = big_number_1.bn(tokenOut.balance).minus(amountOut).toString();
        }
        return amountIn.toString();
    }
    // ---------------------- LP actions ----------------------
    joinExactTokensInForBptOut(amountsIn) {
        if (Object.keys(amountsIn).length !== this._tokens.length) {
            throw new Error("Invalid input");
        }
        const scaledBptOut = math._calcBptOutGivenExactTokensIn(this._tokens.map((t) => this._upScale(t.balance, t.decimals)), this._tokens.map((t) => this._upScale(t.weight, 18)), this._tokens.map((t) => this._upScale(amountsIn[t.symbol], t.decimals)), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const bptOut = this._downScaleDown(scaledBptOut, 18);
        // In-place balance updates
        if (!this._query) {
            for (let i = 0; i < this._tokens.length; i++) {
                const token = this._tokens[i];
                token.balance = big_number_1.bn(token.balance)
                    .plus(amountsIn[token.symbol])
                    .toString();
            }
            this._bptTotalSupply = big_number_1.bn(this._bptTotalSupply).plus(bptOut).toString();
        }
        return bptOut.toString();
    }
    joinTokenInForExactBptOut(tokenInSymbol, bptOut) {
        const tokenIn = this._tokens.find((t) => t.symbol === tokenInSymbol);
        if (!tokenIn) {
            throw new Error("Invalid input");
        }
        const scaledAmountIn = math._calcTokenInGivenExactBptOut(this._upScale(tokenIn.balance, tokenIn.decimals), this._upScale(tokenIn.weight, 18), this._upScale(bptOut, 18), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const amountIn = this._downScaleUp(scaledAmountIn, tokenIn.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenIn.balance = big_number_1.bn(tokenIn.balance).plus(amountIn).toString();
            this._bptTotalSupply = big_number_1.bn(this._bptTotalSupply).plus(bptOut).toString();
        }
        return amountIn.toString();
    }
    exitExactBptInForTokenOut(tokenOutSymbol, bptIn) {
        const tokenOut = this._tokens.find((t) => t.symbol === tokenOutSymbol);
        if (!tokenOut) {
            throw new Error("Invalid input");
        }
        const scaledAmountOut = math._calcTokenOutGivenExactBptIn(this._upScale(tokenOut.balance, tokenOut.decimals), this._upScale(tokenOut.weight, 18), this._upScale(bptIn, 18), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const amountOut = this._downScaleDown(scaledAmountOut, tokenOut.decimals);
        // In-place balance updates
        if (!this._query) {
            tokenOut.balance = big_number_1.bn(tokenOut.balance).minus(amountOut).toString();
            this._bptTotalSupply = big_number_1.bn(this._bptTotalSupply).minus(bptIn).toString();
        }
        return amountOut.toString();
    }
    exitExactBptInForTokensOut(bptIn) {
        // Exactly match the EVM version
        if (big_number_1.bn(bptIn).gt(this._bptTotalSupply)) {
            throw new Error("BPT in exceeds total supply");
        }
        const scaledAmountsOut = math._calcTokensOutGivenExactBptIn(this._tokens.map((t) => this._upScale(t.balance, t.decimals)), this._upScale(bptIn, 18), this._upScale(this._bptTotalSupply, 18));
        const amountsOut = scaledAmountsOut.map((amount, i) => this._downScaleDown(amount, this._tokens[i].decimals));
        // In-place balance updates
        if (!this._query) {
            for (let i = 0; i < this._tokens.length; i++) {
                const token = this._tokens[i];
                token.balance = big_number_1.bn(token.balance).minus(amountsOut[i]).toString();
            }
            this._bptTotalSupply = big_number_1.bn(this._bptTotalSupply).minus(bptIn).toString();
        }
        return amountsOut.map((a) => a.toString());
    }
    exitBptInForExactTokensOut(amountsOut) {
        if (Object.keys(amountsOut).length !== this._tokens.length) {
            throw new Error("Invalid input");
        }
        const scaledBptIn = math._calcBptInGivenExactTokensOut(this._tokens.map((t) => this._upScale(t.balance, t.decimals)), this._tokens.map((t) => this._upScale(t.weight, 18)), this._tokens.map((t) => this._upScale(amountsOut[t.symbol], t.decimals)), this._upScale(this._bptTotalSupply, 18), this._upScale(this._swapFeePercentage, 18));
        const bptIn = this._downScaleUp(scaledBptIn, 18);
        // In-place balance updates
        if (!this._query) {
            for (let i = 0; i < this._tokens.length; i++) {
                const token = this._tokens[i];
                token.balance = big_number_1.bn(token.balance)
                    .minus(amountsOut[token.symbol])
                    .toString();
            }
            this._bptTotalSupply = big_number_1.bn(this._bptTotalSupply).minus(bptIn).toString();
        }
        return bptIn.toString();
    }
}
weighted.default = WeightedPool$1;

Object.defineProperty(src, "__esModule", { value: true });
var WeightedMath_1 = src.WeightedMath = src.WeightedPool = StableMath_1 = src.StableMath = src.StablePool = void 0;
const stable_1 = stable;
src.StablePool = stable_1.default;
const StableMath = math$3;
var StableMath_1 = src.StableMath = StableMath;
const weighted_1 = weighted;
src.WeightedPool = weighted_1.default;
const WeightedMath = math$1;
WeightedMath_1 = src.WeightedMath = WeightedMath;

// All functions came from https://www.wolframcloud.com/obj/fernando.martinel/Published/SOR_equations_published.nb
/////////
/// Swap functions
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _exactTokenInForTokenOut$3(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ai = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(Bo * (1 - Math.pow((Bi / (Bi + Ai * (1 - f))), (wi / wo))));
    // return Bo.times(
    //     bnum(1).minus(
    //         bnum(
    //             Bi.div(
    //                 Bi.plus(Ai.times(bnum(1).minus(f)))
    //             ).toNumber() ** wi.div(wo).toNumber()
    //         )
    //     )
    // )
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _tokenInForExactTokenOut$3(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ao = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum((Bi * (-1 + Math.pow((Bo / (-Ao + Bo)), (wo / wi)))) / (1 - f));
    // return Bi.times(
    //     bnum(-1).plus(
    //         Bo.div(Bo.minus(Ao)).toNumber() **
    //             wo.div(wi).toNumber()
    //     )
    // ).div(bnum(1).minus(f));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _exactTokenInForBPTOut$2(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bbpt = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const Ai = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(Bbpt * (-1 + Math.pow((1 + (Ai * (1 - f * (1 - wi))) / Bi), wi)));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _tokenInForExactBPTOut$2(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bbpt = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const Aobpt = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(((-1 + Math.pow((1 + Aobpt / Bbpt), (1 / wi))) * Bi) / (1 - f * (1 - wi)));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _BPTInForExactTokenOut$2(amount, poolPairData) {
    const Bbpt = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Aibpt = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(((1 - Math.pow((1 - Aibpt / Bbpt), (1 / wo))) * Bo) / (1 - f * (1 - wo)));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _exactBPTInForTokenOut$2(amount, poolPairData) {
    const Bbpt = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ao = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(Bbpt * (1 - Math.pow((1 - (Ao * (1 - f * (1 - wo))) / Bo), wo)));
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ai = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(-((Bi * wo) /
        (Bo * (-1 + f) * Math.pow((Bi / (Ai + Bi - Ai * f)), ((wi + wo) / wo)) * wi)));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ao = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(-((Bi * Math.pow((Bo / (-Ao + Bo)), ((wi + wo) / wi)) * wo) /
        (Bo * (-1 + f) * wi)));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForBPTOut$2(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bbpt = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const Ai = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum((Bi * Math.pow(((Ai + Bi + Ai * f * (-1 + wi)) / Bi), (1 - wi))) /
        (Bbpt * (1 + f * (-1 + wi)) * wi));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactBPTOut$2(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bbpt = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const Aobpt = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum((Math.pow(((Aobpt + Bbpt) / Bbpt), (1 / wi)) * Bi) /
        ((Aobpt + Bbpt) * (1 + f * (-1 + wi)) * wi));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactBPTInForTokenOut$2(amount, poolPairData) {
    const Bbpt = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Aibpt = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum((Math.pow((1 - Aibpt / Bbpt), ((-1 + wo) / wo)) *
        Bbpt *
        (1 + f * (-1 + wo)) *
        wo) /
        Bo);
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBPTInForExactTokenOut$2(amount, poolPairData) {
    const Bbpt = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ao = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum((Bbpt *
        (1 + f * (-1 + wo)) *
        wo *
        Math.pow((1 + (Ao * (-1 + f - f * wo)) / Bo), (-1 + wo))) /
        Bo);
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ai = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum((wi + wo) / (Bo * Math.pow((Bi / (Ai + Bi - Ai * f)), (wi / wo)) * wi));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ao = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(-((Bi * Math.pow((Bo / (-Ao + Bo)), (wo / wi)) * wo * (wi + wo)) /
        (Math.pow((Ao - Bo), 2) * (-1 + f) * Math.pow(wi, 2))));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForBPTOut$2(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bbpt = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const Ai = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(-((-1 + wi) / (Bbpt * Math.pow(((Ai + Bi + Ai * f * (-1 + wi)) / Bi), wi) * wi)));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactBPTOut$2(amount, poolPairData) {
    const Bi = poolPairData.balanceIn.toNumber();
    const Bbpt = poolPairData.balanceOut.toNumber();
    const wi = poolPairData.weightIn.toNumber();
    const Aobpt = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(-((Math.pow(((Aobpt + Bbpt) / Bbpt), (1 / wi)) * Bi * (-1 + wi)) /
        (Math.pow((Aobpt + Bbpt), 2) * (1 + f * (-1 + wi)) * Math.pow(wi, 2))));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactBPTInForTokenOut$2(amount, poolPairData) {
    const Bbpt = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Aibpt = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(-(((1 + f * (-1 + wo)) * (-1 + wo)) /
        (Math.pow((1 - Aibpt / Bbpt), (1 / wo)) * Bo)));
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapBPTInForExactTokenOut$2(amount, poolPairData) {
    const Bbpt = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const wo = poolPairData.weightOut.toNumber();
    const Ao = amount.toNumber();
    const f = poolPairData.swapFee.toNumber();
    return bnum(-((Bbpt *
        Math.pow((1 + f * (-1 + wo)), 2) *
        (-1 + wo) *
        wo *
        Math.pow((1 + (Ao * (-1 + f - f * wo)) / Bo), (-2 + wo))) /
        Math.pow(Bo, 2)));
}

class WeightedPool {
    constructor(id, address, swapFee, totalWeight, totalShares, tokens, tokensList) {
        this.poolType = PoolTypes.Weighted;
        this.MAX_IN_RATIO = bnum(0.3);
        this.MAX_OUT_RATIO = bnum(0.3);
        this.id = id;
        this.address = address;
        this.swapFee = bnum(swapFee);
        this.totalShares = totalShares;
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.totalWeight = bnum(totalWeight);
    }
    static fromPool(pool) {
        return new WeightedPool(pool.id, pool.address, pool.swapFee, pool.totalWeight, pool.totalShares, pool.tokens, pool.tokensList);
    }
    setTypeForSwap(type) {
        this.swapPairType = type;
    }
    parsePoolPairData(tokenIn, tokenOut) {
        let pairType;
        let tI;
        let tO;
        let balanceIn;
        let balanceOut;
        let decimalsOut;
        let decimalsIn;
        let weightIn;
        let weightOut;
        // Check if tokenIn is the pool token itself (BPT)
        if (tokenIn == this.address) {
            pairType = PairTypes.BptToToken;
            if (this.totalShares === undefined)
                throw 'Pool missing totalShares field';
            balanceIn = this.totalShares;
            decimalsIn = '18'; // Not used but has to be defined
            weightIn = ONE; // Not used but has to be defined
        }
        else if (tokenOut == this.address) {
            pairType = PairTypes.TokenToBpt;
            if (this.totalShares === undefined)
                throw 'Pool missing totalShares field';
            balanceOut = this.totalShares;
            decimalsOut = '18'; // Not used but has to be defined
            weightOut = ONE; // Not used but has to be defined
        }
        else {
            pairType = PairTypes.TokenToToken;
        }
        if (pairType != PairTypes.BptToToken) {
            const tokenIndexIn = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenIn));
            if (tokenIndexIn < 0)
                throw 'Pool does not contain tokenIn';
            tI = this.tokens[tokenIndexIn];
            balanceIn = tI.balance;
            decimalsIn = tI.decimals;
            weightIn = bnum(tI.weight).div(this.totalWeight);
        }
        if (pairType != PairTypes.TokenToBpt) {
            const tokenIndexOut = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenOut));
            if (tokenIndexOut < 0)
                throw 'Pool does not contain tokenOut';
            tO = this.tokens[tokenIndexOut];
            balanceOut = tO.balance;
            decimalsOut = tO.decimals;
            weightOut = bnum(tO.weight).div(this.totalWeight);
        }
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            pairType: pairType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            balanceIn: bnum(balanceIn),
            balanceOut: bnum(balanceOut),
            weightIn: weightIn,
            weightOut: weightOut,
            swapFee: this.swapFee,
        };
        return poolPairData;
    }
    // Normalized liquidity is an abstract term that can be thought of the
    // inverse of the slippage. It is proportional to the token balances in the
    // pool but also depends on the shape of the invariant curve.
    // As a standard, we define normalized liquidity in tokenOut
    getNormalizedLiquidity(poolPairData) {
        if (poolPairData.pairType == PairTypes.TokenToToken) {
            return poolPairData.balanceOut
                .times(poolPairData.weightIn)
                .div(poolPairData.weightIn.plus(poolPairData.weightOut));
        }
        else if (poolPairData.pairType == PairTypes.TokenToBpt) {
            return poolPairData.balanceOut; // Liquidity in tokenOut is totalShares
        }
        else if (poolPairData.pairType == PairTypes.BptToToken) {
            return poolPairData.balanceOut.div(ONE.plus(poolPairData.weightOut)); // Liquidity in tokenOut is Bo/wo
        }
    }
    getLimitAmountSwap(poolPairData, swapType) {
        if (swapType === SwapTypes.SwapExactIn) {
            return poolPairData.balanceIn.times(this.MAX_IN_RATIO);
        }
        else {
            return poolPairData.balanceOut.times(this.MAX_OUT_RATIO);
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance.toString();
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => t.address === token);
            T.balance = newBalance.toString();
        }
    }
    // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
    // i.e. when using token with 2decimals 0.002 should be returned as 0
    // Uses ROUND_DOWN mode (1)
    _exactTokenInForTokenOut(poolPairData, amount) {
        return _exactTokenInForTokenOut$3(amount, poolPairData).dp(poolPairData.decimalsOut, 1);
    }
    _exactTokenInForBPTOut(poolPairData, amount) {
        return _exactTokenInForBPTOut$2(amount, poolPairData);
    }
    _exactBPTInForTokenOut(poolPairData, amount) {
        return _exactBPTInForTokenOut$2(amount, poolPairData);
    }
    // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
    // i.e. when using token with 2decimals 0.002 should be returned as 0
    // Uses ROUND_UP mode (0)
    _tokenInForExactTokenOut(poolPairData, amount) {
        return _tokenInForExactTokenOut$3(amount, poolPairData).dp(poolPairData.decimalsIn, 0);
    }
    _tokenInForExactBPTOut(poolPairData, amount) {
        return _tokenInForExactBPTOut$2(amount, poolPairData);
    }
    _BPTInForExactTokenOut(poolPairData, amount) {
        return _BPTInForExactTokenOut$2(amount, poolPairData);
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData);
    }
    _spotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactTokenInForBPTOut$2(amount, poolPairData);
    }
    _spotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactBPTInForTokenOut$2(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        return _spotPriceAfterSwapTokenInForExactBPTOut$2(amount, poolPairData);
    }
    _spotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapBPTInForExactTokenOut$2(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$3(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactTokenInForBPTOut$2(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactBPTInForTokenOut$2(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$3(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactBPTOut$2(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapBPTInForExactTokenOut$2(amount, poolPairData);
    }
    _evmoutGivenIn(poolPairData, amount) {
        try {
            // poolPair balances are normalised so must be scaled before use
            const amt = WeightedMath_1._calcOutGivenIn(scale(poolPairData.balanceIn, poolPairData.decimalsIn), scale(poolPairData.weightIn, 18), scale(poolPairData.balanceOut, poolPairData.decimalsOut), scale(poolPairData.weightOut, 18), scale(amount, poolPairData.decimalsIn), scale(poolPairData.swapFee, 18));
            // return normalised amount
            return scale(amt, -poolPairData.decimalsOut);
        }
        catch (err) {
            return ZERO;
        }
    }
    _evmexactTokenInForBPTOut(poolPairData, amount) {
        try {
            // balance: BigNumber, normalizedWeight: BigNumber, amountIn: BigNumber, bptTotalSupply: BigNumber, swapFee: BigNumber
            const amt = WeightedMath_1._calcBptOutGivenExactTokenIn(scale(poolPairData.balanceIn, poolPairData.decimalsIn), scale(poolPairData.weightIn, 18), scale(amount, poolPairData.decimalsIn), scale(poolPairData.balanceOut, 18), // BPT is always 18 decimals
            scale(poolPairData.swapFee, 18));
            // return normalised amount
            return scale(amt, -18); // BPT is always 18 decimals
        }
        catch (err) {
            return ZERO;
        }
    }
    _evmexactBPTInForTokenOut(poolPairData, amount) {
        try {
            // poolPair balances are normalised so must be scaled before use
            const amt = WeightedMath_1._calcTokenOutGivenExactBptIn(scale(poolPairData.balanceOut, poolPairData.decimalsOut), scale(poolPairData.weightOut, 18), scale(amount, 18), // BPT is always 18 decimals
            scale(poolPairData.balanceIn, 18), // BPT is always 18 decimals
            scale(poolPairData.swapFee, 18));
            // return normalised amount
            return scale(amt, -poolPairData.decimalsOut);
        }
        catch (err) {
            return ZERO;
        }
    }
    _evminGivenOut(poolPairData, amount) {
        try {
            // poolPair balances are normalised so must be scaled before use
            const amt = WeightedMath_1._calcInGivenOut(scale(poolPairData.balanceIn, poolPairData.decimalsIn), scale(poolPairData.weightIn, 18), scale(poolPairData.balanceOut, poolPairData.decimalsOut), scale(poolPairData.weightOut, 18), scale(amount, poolPairData.decimalsOut), scale(poolPairData.swapFee, 18));
            // return normalised amount
            return scale(amt, -poolPairData.decimalsIn);
        }
        catch (err) {
            return ZERO;
        }
    }
    _evmtokenInForExactBPTOut(poolPairData, amount) {
        try {
            // poolPair balances are normalised so must be scaled before use
            const amt = WeightedMath_1._calcTokenInGivenExactBptOut(scale(poolPairData.balanceIn, poolPairData.decimalsIn), scale(poolPairData.weightIn, 18), scale(amount, 18), scale(poolPairData.balanceOut, 18), // BPT is always 18 decimals
            scale(poolPairData.swapFee, 18));
            // return normalised amount
            return scale(amt, -poolPairData.decimalsIn);
        }
        catch (err) {
            return ZERO;
        }
    }
    _evmbptInForExactTokenOut(poolPairData, amount) {
        try {
            // poolPair balances are normalised so must be scaled before use
            const amt = WeightedMath_1._calcBptInGivenExactTokenOut(scale(poolPairData.balanceOut, poolPairData.decimalsOut), scale(poolPairData.weightOut, 18), scale(amount, poolPairData.decimalsOut), scale(poolPairData.balanceIn, 18), // BPT is always 18 decimals
            scale(poolPairData.swapFee, 18));
            // return normalised amount
            return scale(amt, -18); // BPT always 18 decimals
        }
        catch (err) {
            return ZERO;
        }
    }
}

// All functions are adapted from the solidity ones to be found on:
// https://github.com/balancer-labs/balancer-core-v2/blob/master/contracts/pools/stable/StableMath.sol
// TODO: implement all up and down rounding variations
/**********************************************************************************************
    // invariant                                                                                 //
    // D = invariant to compute                                                                  //
    // A = amplifier                n * D^2 + A * n^n * S * (n^n * P / D^(n−1))                  //
    // S = sum of balances         ____________________________________________                  //
    // P = product of balances    (n+1) * D + ( A * n^n − 1)* (n^n * P / D^(n−1))                //
    // n = number of tokens                                                                      //
    **********************************************************************************************/
function _invariant$1(amp, // amp
balances // balances
) {
    let sum = ZERO;
    const totalCoins = balances.length;
    for (let i = 0; i < totalCoins; i++) {
        sum = sum.plus(balances[i]);
    }
    if (sum.isZero()) {
        return ZERO;
    }
    let prevInv = ZERO;
    let inv = sum;
    const ampTimesNpowN = amp.times(Math.pow(totalCoins, totalCoins)); // A*n^n
    for (let i = 0; i < 255; i++) {
        let P_D = bnum(totalCoins).times(balances[0]);
        for (let j = 1; j < totalCoins; j++) {
            //P_D is rounded up
            P_D = P_D.times(balances[j]).times(totalCoins).div(inv);
        }
        prevInv = inv;
        //inv is rounded up
        inv = bnum(totalCoins)
            .times(inv)
            .times(inv)
            .plus(ampTimesNpowN.times(sum).times(P_D))
            .div(bnum(totalCoins + 1)
            .times(inv)
            .plus(ampTimesNpowN.minus(1).times(P_D)));
        // Equality with the precision of 1
        if (inv.gt(prevInv)) {
            if (inv.minus(prevInv).lt(bnum(Math.pow(10, -18)))) {
                break;
            }
        }
        else if (prevInv.minus(inv).lt(bnum(Math.pow(10, -18)))) {
            break;
        }
    }
    //Result is rounded up
    return inv;
}
// // This function has to be zero if the invariant D was calculated correctly
// // It was only used for double checking that the invariant was correct
// export function _invariantValueFunction(
//     amp: BigNumber, // amp
//     balances: BigNumber[], // balances
//     D: BigNumber
// ): BigNumber {
//     let invariantValueFunction;
//     let prod = ONE;
//     let sum = ZERO;
//     for (let i = 0; i < balances.length; i++) {
//         prod = prod.times(balances[i]);
//         sum = sum.plus(balances[i]);
//     }
//     let n = bnum(balances.length);
//     // NOT! working based on Daniel's equation: https://www.notion.so/Analytical-for-2-tokens-1cd46debef6648dd81f2d75bae941fea
//     // invariantValueFunction = amp.times(sum)
//     //     .plus((ONE.div(n.pow(n)).minus(amp)).times(D))
//     //     .minus((ONE.div(n.pow(n.times(2)).times(prod))).times(D.pow(n.plus(ONE))));
//     invariantValueFunction = D.pow(n.plus(ONE))
//         .div(n.pow(n).times(prod))
//         .plus(D.times(amp.times(n.pow(n)).minus(ONE)))
//         .minus(amp.times(n.pow(n)).times(sum));
//     return invariantValueFunction;
// }
// Adapted from StableMath.sol, _outGivenIn()
// * Added swap fee at very first line
/**********************************************************************************************
    // outGivenIn token x for y - polynomial equation to solve                                   //
    // ay = amount out to calculate                                                              //
    // by = balance token out                                                                    //
    // y = by - ay                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               y^2 + ( S - ----------  - 1) * y -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but y                                                           //
    // P = product of final balances but y                                                       //
    **********************************************************************************************/
function _exactTokenInForTokenOut$2(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    let tokenAmountIn = amount;
    tokenAmountIn = tokenAmountIn.times(ONE.minus(swapFee));
    //Invariant is rounded up
    const inv = _invariant$1(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexIn) {
            x = balances[i].plus(tokenAmountIn);
        }
        else if (i != tokenIndexOut) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate out balance
    const y = _solveAnalyticalBalance$1(sum, inv, amp, n_pow_n, p);
    //Result is rounded down
    // return balances[tokenIndexOut] > y ? balances[tokenIndexOut].minus(y) : 0;
    return balances[tokenIndexOut].minus(y);
}
// Adapted from StableMath.sol, _inGivenOut()
// * Added swap fee at very last line
/**********************************************************************************************
    // inGivenOut token x for y - polynomial equation to solve                                   //
    // ax = amount in to calculate                                                               //
    // bx = balance token in                                                                     //
    // x = bx + ax                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               x^2 + ( S - ----------  - 1) * x -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but x                                                           //
    // P = product of final balances but x                                                       //
    **********************************************************************************************/
function _tokenInForExactTokenOut$2(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountOut = amount;
    //Invariant is rounded up
    const inv = _invariant$1(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexOut) {
            x = balances[i].minus(tokenAmountOut);
        }
        else if (i != tokenIndexIn) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate in balance
    const y = _solveAnalyticalBalance$1(sum, inv, amp, n_pow_n, p);
    //Result is rounded up
    return y.minus(balances[tokenIndexIn]).div(ONE.minus(swapFee));
}
//This function calculates the balance of a given token (tokenIndex)
// given all the other balances and the invariant
function _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, inv, tokenIndex) {
    let p = inv;
    let sum = ZERO;
    const totalCoins = balances.length;
    let nPowN = ONE;
    let x = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        nPowN = nPowN.times(totalCoins);
        if (i != tokenIndex) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    // Calculate token balance
    return _solveAnalyticalBalance$1(sum, inv, amp, nPowN, p);
}
//This function calcuates the analytical solution to find the balance required
function _solveAnalyticalBalance$1(sum, inv, amp, n_pow_n, p) {
    //Round up p
    p = p.times(inv).div(amp.times(n_pow_n).times(n_pow_n));
    //Round down b
    const b = sum.plus(inv.div(amp.times(n_pow_n)));
    //Round up c
    // let c = inv >= b
    //     ? inv.minus(b).plus(Math.sqrtUp(inv.minus(b).times(inv.minus(b)).plus(p.times(4))))
    //     : Math.sqrtUp(b.minus(inv).times(b.minus(inv)).plus(p.times(4))).minus(b.minus(inv));
    let c;
    if (inv.gte(b)) {
        c = inv
            .minus(b)
            .plus(inv.minus(b).times(inv.minus(b)).plus(p.times(4)).sqrt());
    }
    else {
        c = b
            .minus(inv)
            .times(b.minus(inv))
            .plus(p.times(4))
            .sqrt()
            .minus(b.minus(inv));
    }
    //Round up y
    return c.div(2);
}
/*
Adapted from StableMath.sol _exactTokensInForBPTOut()
    * renamed it to _exactTokenInForBPTOut (i.e. just one token in)
*/
function _exactTokenInForBPTOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountIn = amount;
    // Get current invariant
    const currentInvariant = _invariant$1(amp, balances);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weights of each token relative to the sum of all balances
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const currentWeight = balances[tokenIndexIn].div(sumBalances);
    const tokenBalanceRatioWithoutFee = balances[tokenIndexIn]
        .plus(tokenAmountIn)
        .div(balances[tokenIndexIn]);
    const weightedBalanceRatio = ONE.plus(tokenBalanceRatioWithoutFee.minus(ONE).times(currentWeight));
    // calculate new amountIn taking into account the fee on the % excess
    // Percentage of the amount supplied that will be implicitly swapped for other tokens in the pool
    const tokenBalancePercentageExcess = tokenBalanceRatioWithoutFee
        .minus(weightedBalanceRatio)
        .div(tokenBalanceRatioWithoutFee.minus(ONE));
    const amountInAfterFee = tokenAmountIn.times(ONE.minus(swapFee.times(tokenBalancePercentageExcess)));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amountInAfterFee);
    // get new invariant taking into account swap fees
    const newInvariant = _invariant$1(amp, balances);
    return balanceOut.times(newInvariant.div(currentInvariant).minus(ONE));
}
/*
Flow of calculations:
amountBPTOut -> newInvariant -> (amountInProportional, amountInAfterFee) ->
amountInPercentageExcess -> amountIn
*/
function _tokenInForExactBPTOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const bptAmountOut = amount;
    /**********************************************************************************************
    // TODO description                            //
    **********************************************************************************************/
    // Get current invariant
    const currentInvariant = _invariant$1(amp, balances);
    // Calculate new invariant
    const newInvariant = balanceOut
        .plus(bptAmountOut)
        .div(balanceOut)
        .times(currentInvariant);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weight of token
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // get amountInAfterFee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, newInvariant, tokenIndexIn);
    const amountInAfterFee = newBalanceTokenIndex.minus(balances[tokenIndexIn]);
    // Get tokenBalancePercentageExcess
    const currentWeight = balances[tokenIndexIn].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    // return amountIn
    return amountInAfterFee.div(ONE.minus(tokenBalancePercentageExcess.times(swapFee)));
}
/*
Adapted from StableMath.sol _BPTInForExactTokensOut() to reduce it to
_BPTInForExactTokenOut (i.e. just one token out)
*/
function _BPTInForExactTokenOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountOut = amount;
    // Get current invariant
    const currentInvariant = _invariant$1(amp, balances);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weights of each token relative to the sum of all balances
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const currentWeight = balances[tokenIndexOut].div(sumBalances);
    const tokenBalanceRatioWithoutFee = balances[tokenIndexOut]
        .minus(tokenAmountOut)
        .div(balances[tokenIndexOut]);
    const weightedBalanceRatio = ONE.minus(ONE.minus(tokenBalanceRatioWithoutFee).times(currentWeight));
    // calculate new amounts in taking into account the fee on the % excess
    const tokenBalancePercentageExcess = weightedBalanceRatio
        .minus(tokenBalanceRatioWithoutFee)
        .div(ONE.minus(tokenBalanceRatioWithoutFee));
    const amountOutBeforeFee = tokenAmountOut.div(ONE.minus(swapFee.times(tokenBalancePercentageExcess)));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amountOutBeforeFee);
    // get new invariant taking into account swap fees
    const newInvariant = _invariant$1(amp, balances);
    // return amountBPTIn
    return balanceIn.times(ONE.minus(newInvariant.div(currentInvariant)));
}
/*
Flow of calculations:
amountBPTin -> newInvariant -> (amountOutProportional, amountOutBeforeFee) ->
amountOutPercentageExcess -> amountOut
*/
function _exactBPTInForTokenOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const bptAmountIn = amount;
    /**********************************************************************************************
    // TODO description                            //
    **********************************************************************************************/
    // Get current invariant
    const currentInvariant = _invariant$1(amp, balances);
    // Calculate new invariant
    const newInvariant = balanceIn
        .minus(bptAmountIn)
        .div(balanceIn)
        .times(currentInvariant);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weight of token
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // get amountOutBeforeFee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances$1(amp, balances, newInvariant, tokenIndexOut);
    const amountOutBeforeFee = balances[tokenIndexOut].minus(newBalanceTokenIndex);
    // Calculate tokenBalancePercentageExcess
    const currentWeight = balances[tokenIndexOut].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    // return amountOut
    return amountOutBeforeFee.times(ONE.minus(tokenBalancePercentageExcess.times(swapFee)));
}
//////////////////////
////  These functions have been added exclusively for the SORv2
//////////////////////
function _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, is_first_derivative, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant$1(amp, balances);
    let S = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn && i != tokenIndexOut) {
            S = S.plus(balances[i]);
        }
    }
    const x = balances[tokenIndexIn];
    const y = balances[tokenIndexOut];
    const a = amp.times(Math.pow(totalCoins, totalCoins)); // = ampTimesNpowN
    const b = S.minus(D).times(a).plus(D);
    const twoaxy = bnum(2).times(a).times(x).times(y);
    const partial_x = twoaxy.plus(a.times(y).times(y)).plus(b.times(y));
    const partial_y = twoaxy.plus(a.times(x).times(x)).plus(b.times(x));
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(partial_y);
    }
    else {
        const partial_xx = bnum(2).times(a).times(y);
        const partial_yy = bnum(2).times(a).times(x);
        const partial_xy = partial_xx.plus(partial_yy).plus(b);
        let numerator;
        numerator = bnum(2)
            .times(partial_x)
            .times(partial_y)
            .times(partial_xy)
            .minus(partial_xx.times(partial_y.pow(2)))
            .minus(partial_yy.times(partial_x.pow(2)));
        const denominator = partial_x.pow(2).times(partial_y);
        ans = numerator.div(denominator);
        if (wrt_out) {
            ans = ans.times(partial_y).div(partial_x);
        }
    }
    return ans;
}
function _poolDerivativesBPT$1(amp, balances, bptSupply, tokenIndexIn, is_first_derivative, is_BPT_out, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant$1(amp, balances);
    let S = ZERO;
    let D_P = D.div(totalCoins);
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn) {
            S = S.plus(balances[i]);
            D_P = D_P.times(D).div(totalCoins * balances[i]);
        }
    }
    const x = balances[tokenIndexIn];
    const alpha = amp.times(Math.pow(totalCoins, totalCoins)); // = ampTimesNpowN
    const beta = alpha.times(S);
    const gamma = ONE.minus(alpha);
    const partial_x = bnum(2)
        .times(alpha)
        .times(x)
        .plus(beta)
        .plus(gamma.times(D));
    const minus_partial_D = D_P.times(totalCoins + 1).minus(gamma.times(x));
    const partial_D = ZERO.minus(minus_partial_D);
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(minus_partial_D).times(bptSupply).div(D);
    }
    else {
        const partial_xx = bnum(2).times(alpha);
        const partial_xD = gamma;
        const n_times_nplusone = totalCoins * (totalCoins + 1);
        const partial_DD = ZERO.minus(D_P.times(n_times_nplusone).div(D));
        if (is_BPT_out) {
            const term1 = partial_xx.times(partial_D).div(partial_x.pow(2));
            const term2 = bnum(2).times(partial_xD).div(partial_x);
            const term3 = partial_DD.div(partial_D);
            ans = term1.minus(term2).plus(term3).times(D).div(bptSupply);
            if (wrt_out) {
                const D_prime = ZERO.minus(partial_x.div(partial_D));
                ans = ans.div(D_prime).times(D).div(bptSupply);
            }
        }
        else {
            ans = bnum(2)
                .times(partial_xD)
                .div(partial_D)
                .minus(partial_DD.times(partial_x).div(partial_D.pow(2)))
                .minus(partial_xx.div(partial_x));
            if (wrt_out) {
                ans = ans
                    .times(partial_x)
                    .div(minus_partial_D)
                    .times(bptSupply)
                    .div(D);
            }
        }
    }
    return ans;
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut$2(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(ONE.minus(swapFee)));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut$2(amount, poolPairData));
    let ans = _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, true, false);
    ans = ONE.div(ans.times(ONE.minus(swapFee)));
    return ans;
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut$2(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactTokenOut$2(amount, poolPairData).times(ONE.minus(swapFee));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    let ans = _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, true, true);
    ans = ONE.div(ans.times(ONE.minus(swapFee)));
    return ans;
}
function _feeFactor$1(balances, tokenIndex, swapFee) {
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    const currentWeight = balances[tokenIndex].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    return ONE.minus(tokenBalancePercentageExcess.times(swapFee));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForBPTOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor$1(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(feeFactor));
    balanceOut = balanceOut.plus(_exactTokenInForBPTOut$1(amount, poolPairData));
    let ans = _poolDerivativesBPT$1(amp, balances, balanceOut, tokenIndexIn, true, true, false);
    ans = ONE.div(ans.times(feeFactor));
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactBPTOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactBPTOut$1(amount, poolPairData);
    const feeFactor = _feeFactor$1(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in.times(feeFactor));
    balanceOut = balanceOut.plus(amount);
    let ans = _poolDerivativesBPT$1(amp, balances, balanceOut, tokenIndexIn, true, true, true);
    ans = ONE.div(ans.times(feeFactor));
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactBPTInForTokenOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _out = _exactBPTInForTokenOut$1(amount, poolPairData);
    const feeFactor = _feeFactor$1(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_out.div(feeFactor));
    balanceIn = balanceIn.minus(amount);
    const ans = _poolDerivativesBPT$1(amp, balances, balanceIn, tokenIndexOut, true, false, false).div(feeFactor);
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBPTInForExactTokenOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor$1(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount.div(feeFactor));
    balanceIn = balanceIn.minus(_BPTInForExactTokenOut$1(amount, poolPairData));
    const ans = _poolDerivativesBPT$1(amp, balances, balanceIn, tokenIndexOut, true, false, true).div(feeFactor);
    return ans;
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$2(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(ONE.minus(swapFee)));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut$2(amount, poolPairData));
    return _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, false, false);
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$2(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactTokenOut$2(amount, poolPairData).times(ONE.minus(swapFee));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    const feeFactor = ONE.minus(swapFee);
    return _poolDerivatives$1(amp, balances, tokenIndexIn, tokenIndexOut, false, true).div(feeFactor);
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForBPTOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor$1(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(feeFactor));
    balanceOut = balanceOut.plus(_exactTokenInForBPTOut$1(amount, poolPairData));
    const ans = _poolDerivativesBPT$1(amp, balances, balanceOut, tokenIndexIn, false, true, false);
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactBPTOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactBPTOut$1(amount, poolPairData);
    const feeFactor = _feeFactor$1(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in.times(feeFactor));
    balanceOut = balanceOut.plus(amount);
    return _poolDerivativesBPT$1(amp, balances, balanceOut, tokenIndexIn, false, true, true).div(feeFactor);
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactBPTInForTokenOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _out = _exactBPTInForTokenOut$1(amount, poolPairData);
    const feeFactor = _feeFactor$1(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_out.div(feeFactor));
    balanceIn = balanceIn.minus(amount);
    const ans = _poolDerivativesBPT$1(amp, balances, balanceIn, tokenIndexOut, false, false, false);
    return ans.div(feeFactor);
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapBPTInForExactTokenOut$1(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _BPTInForExactTokenOut$1(amount, poolPairData);
    const feeFactor = _feeFactor$1(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount.div(feeFactor));
    balanceIn = balanceIn.minus(_in);
    const ans = _poolDerivativesBPT$1(amp, balances, balanceIn, tokenIndexOut, false, false, true);
    return ans.div(feeFactor.pow(2));
}

class StablePool {
    constructor(id, address, amp, swapFee, totalShares, tokens, tokensList) {
        this.poolType = PoolTypes.Stable;
        this.AMP_PRECISION = bnum(1000);
        this.MAX_IN_RATIO = bnum(0.3);
        this.MAX_OUT_RATIO = bnum(0.3);
        this.id = id;
        this.address = address;
        this.amp = bnum(amp);
        this.swapFee = bnum(swapFee);
        this.swapFeeScaled = scale(this.swapFee, 18);
        this.totalShares = totalShares;
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.ampAdjusted = this.amp.times(this.AMP_PRECISION);
    }
    static fromPool(pool) {
        return new StablePool(pool.id, pool.address, pool.amp, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList);
    }
    setTypeForSwap(type) {
        this.swapPairType = type;
    }
    parsePoolPairData(tokenIn, tokenOut) {
        let pairType;
        let tI;
        let tO;
        let balanceIn;
        let balanceOut;
        let decimalsOut;
        let decimalsIn;
        let tokenIndexIn;
        let tokenIndexOut;
        // Check if tokenIn is the pool token itself (BPT)
        if (tokenIn === this.address) {
            pairType = PairTypes.BptToToken;
            balanceIn = this.totalShares;
            decimalsIn = '18'; // Not used but has to be defined
        }
        else if (tokenOut === this.address) {
            pairType = PairTypes.TokenToBpt;
            balanceOut = this.totalShares;
            decimalsOut = '18'; // Not used but has to be defined
        }
        else {
            pairType = PairTypes.TokenToToken;
        }
        if (pairType !== PairTypes.BptToToken) {
            tokenIndexIn = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenIn));
            if (tokenIndexIn < 0)
                throw 'Pool does not contain tokenIn';
            tI = this.tokens[tokenIndexIn];
            balanceIn = tI.balance;
            decimalsIn = tI.decimals;
        }
        if (pairType !== PairTypes.TokenToBpt) {
            tokenIndexOut = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenOut));
            if (tokenIndexOut < 0)
                throw 'Pool does not contain tokenOut';
            tO = this.tokens[tokenIndexOut];
            balanceOut = tO.balance;
            decimalsOut = tO.decimals;
        }
        // Get all token balances
        const allBalances = [];
        const allBalancesScaled = [];
        for (let i = 0; i < this.tokens.length; i++) {
            const balanceBn = bnum(this.tokens[i].balance);
            allBalances.push(balanceBn);
            allBalancesScaled.push(scale(balanceBn, 18));
        }
        const inv = _invariant$1(this.amp, allBalances);
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            pairType: pairType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            balanceIn: bnum(balanceIn),
            balanceOut: bnum(balanceOut),
            invariant: inv,
            swapFee: this.swapFee,
            swapFeeScaled: this.swapFeeScaled,
            allBalances,
            allBalancesScaled,
            amp: this.amp,
            tokenIndexIn: tokenIndexIn,
            tokenIndexOut: tokenIndexOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
        };
        return poolPairData;
    }
    getNormalizedLiquidity(poolPairData) {
        // This is an approximation as the actual normalized liquidity is a lot more complicated to calculate
        return poolPairData.balanceOut.times(poolPairData.amp);
    }
    getLimitAmountSwap(poolPairData, swapType) {
        // We multiply ratios by 10**-18 because we are in normalized space
        // so 0.5 should be 0.5 and not 500000000000000000
        // TODO: update bmath to use everything normalized
        if (swapType === SwapTypes.SwapExactIn) {
            return poolPairData.balanceIn.times(this.MAX_IN_RATIO);
        }
        else {
            return poolPairData.balanceOut.times(this.MAX_OUT_RATIO);
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance.toString();
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => t.address === token);
            T.balance = newBalance.toString();
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
        // i.e. when using token with 2decimals 0.002 should be returned as 0
        // Uses ROUND_DOWN mode (1)
        return _exactTokenInForTokenOut$2(amount, poolPairData).dp(poolPairData.decimalsOut, 1);
    }
    _exactTokenInForBPTOut(poolPairData, amount) {
        return _exactTokenInForBPTOut$1(amount, poolPairData);
    }
    _exactBPTInForTokenOut(poolPairData, amount) {
        return _exactBPTInForTokenOut$1(amount, poolPairData);
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
        // i.e. when using token with 2decimals 0.002 should be returned as 0
        // Uses ROUND_UP mode (0)
        return _tokenInForExactTokenOut$2(amount, poolPairData).dp(poolPairData.decimalsIn, 0);
    }
    _tokenInForExactBPTOut(poolPairData, amount) {
        return _tokenInForExactBPTOut$1(amount, poolPairData);
    }
    _BPTInForExactTokenOut(poolPairData, amount) {
        return _BPTInForExactTokenOut$1(amount, poolPairData);
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactTokenInForTokenOut$2(amount, poolPairData);
    }
    _spotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactTokenInForBPTOut$1(amount, poolPairData);
    }
    _spotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactBPTInForTokenOut$1(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapTokenInForExactTokenOut$2(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        return _spotPriceAfterSwapTokenInForExactBPTOut$1(amount, poolPairData);
    }
    _spotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapBPTInForExactTokenOut$1(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$2(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactTokenInForBPTOut$1(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactBPTInForTokenOut$1(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$2(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactBPTOut$1(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapBPTInForExactTokenOut$1(amount, poolPairData);
    }
    _evmoutGivenIn(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = scale(amount, 18);
            const amt = StableMath_1._calcOutGivenIn(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amtScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmoutGivenIn: ${err.message}`);
            return ZERO;
        }
    }
    _evminGivenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = scale(amount, 18);
            const amt = StableMath_1._calcInGivenOut(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amtScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evminGivenOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmexactTokenInForBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const bptTotalSupplyScaled = scale(poolPairData.balanceOut, 18);
            // amountsIn must have same length as balances. Only need value for token in.
            const amountsIn = poolPairData.allBalances.map((bal, i) => {
                if (i === poolPairData.tokenIndexIn)
                    return scale(amount, 18);
                else
                    return ZERO;
            });
            const amt = StableMath_1._calcBptOutGivenExactTokensIn(this.ampAdjusted, poolPairData.allBalancesScaled, amountsIn, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmexactTokenInForBPTOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmexactBPTInForTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const bptAmountInScaled = scale(amount, 18);
            const bptTotalSupplyScaled = scale(poolPairData.balanceIn, 18);
            const amt = StableMath_1._calcTokenOutGivenExactBptIn(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexOut, bptAmountInScaled, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmexactBPTInForTokenOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmtokenInForExactBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const bptAmountOutScaled = scale(amount, 18);
            const bptTotalSupplyScaled = scale(poolPairData.balanceOut, 18);
            const amt = StableMath_1._calcTokenInGivenExactBptOut(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexIn, bptAmountOutScaled, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmtokenInForExactBPTOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmbptInForExactTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            // amountsOut must have same length as balances. Only need value for token out.
            const amountsOut = poolPairData.allBalances.map((bal, i) => {
                if (i === poolPairData.tokenIndexOut)
                    return scale(amount, 18);
                else
                    return ZERO;
            });
            const bptTotalSupplyScaled = scale(poolPairData.balanceIn, 18);
            const amt = StableMath_1._calcBptInGivenExactTokensOut(this.ampAdjusted, poolPairData.allBalancesScaled, amountsOut, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmbptInForExactTokenOut: ${err.message}`);
            return ZERO;
        }
    }
}

// calc_out_given_in (swap)
function _exactTokenInForTokenOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const f = poolPairData.swapFee.toNumber();
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ai = amount.toNumber();
    return bnum(Bo -
        Math.pow((Math.pow(Bi, (1 - t)) - Math.pow((Ai + Bi), (1 - t)) + Math.pow(Bo, (1 - t))), (1 / (1 - t))) -
        Math.abs(Ai -
            Bo +
            Math.pow((Math.pow(Bi, (1 - t)) - Math.pow((Ai + Bi), (1 - t)) + Math.pow(Bo, (1 - t))), (1 / (1 - t)))) *
            f);
}
// calc_in_given_out (swap)
function _tokenInForExactTokenOut$1(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const f = poolPairData.swapFee.toNumber();
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ao = amount.toNumber();
    return bnum(-Bi +
        Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t)) - Math.pow((-Ao + Bo), (1 - t))), (1 / (1 - t))) +
        Math.abs(-Ao -
            Bi +
            Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t)) - Math.pow((-Ao + Bo), (1 - t))), (1 / (1 - t)))) *
            f);
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut$1(amount, poolPairData) {
    const f = poolPairData.swapFee.toNumber();
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ai = amount.toNumber();
    return bnum(1 /
        (Math.pow((Math.pow(Bi, (1 - t)) - Math.pow((Ai + Bi), (1 - t)) + Math.pow(Bo, (1 - t))), (-1 + 1 / (1 - t))) /
            Math.pow((Ai + Bi), t) -
            Math.abs(1 -
                Math.pow((Math.pow(Bi, (1 - t)) -
                    Math.pow((Ai + Bi), (1 - t)) +
                    Math.pow(Bo, (1 - t))), (-1 + 1 / (1 - t))) /
                    Math.pow((Ai + Bi), t)) *
                f));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut$1(amount, poolPairData) {
    const f = poolPairData.swapFee.toNumber();
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ao = amount.toNumber();
    return bnum(Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t)) - Math.pow((-Ao + Bo), (1 - t))), (-1 + 1 / (1 - t))) /
        Math.pow((-Ao + Bo), t) +
        Math.abs(-1 +
            Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t)) - Math.pow((-Ao + Bo), (1 - t))), (-1 + 1 / (1 - t))) /
                Math.pow((-Ao + Bo), t)) *
            f);
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$1(amount, poolPairData) {
    const f = poolPairData.swapFee.toNumber();
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ai = amount.toNumber();
    return bnum(-((-((Math.pow((Math.pow(Bi, (1 - t)) - Math.pow((Ai + Bi), (1 - t)) + Math.pow(Bo, (1 - t))), (-2 + 1 / (1 - t))) *
        (-1 + 1 / (1 - t)) *
        (1 - t)) /
        Math.pow((Ai + Bi), (2 * t))) -
        Math.pow((Ai + Bi), (-1 - t)) *
            Math.pow((Math.pow(Bi, (1 - t)) - Math.pow((Ai + Bi), (1 - t)) + Math.pow(Bo, (1 - t))), (-1 + 1 / (1 - t))) *
            t -
        f *
            Math.abs((Math.pow((Math.pow(Bi, (1 - t)) -
                Math.pow((Ai + Bi), (1 - t)) +
                Math.pow(Bo, (1 - t))), (-2 + 1 / (1 - t))) *
                (-1 + 1 / (1 - t)) *
                (1 - t)) /
                Math.pow((Ai + Bi), (2 * t)) +
                Math.pow((Ai + Bi), (-1 - t)) *
                    Math.pow((Math.pow(Bi, (1 - t)) -
                        Math.pow((Ai + Bi), (1 - t)) +
                        Math.pow(Bo, (1 - t))), (-1 + 1 / (1 - t))) *
                    t)) /
        Math.pow((Math.pow((Math.pow(Bi, (1 - t)) - Math.pow((Ai + Bi), (1 - t)) + Math.pow(Bo, (1 - t))), (-1 + 1 / (1 - t))) /
            Math.pow((Ai + Bi), t) -
            Math.abs(1 -
                Math.pow((Math.pow(Bi, (1 - t)) -
                    Math.pow((Ai + Bi), (1 - t)) +
                    Math.pow(Bo, (1 - t))), (-1 + 1 / (1 - t))) /
                    Math.pow((Ai + Bi), t)) *
                f), 2)));
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$1(amount, poolPairData) {
    const f = poolPairData.swapFee.toNumber();
    const Bi = poolPairData.balanceIn.toNumber();
    const Bo = poolPairData.balanceOut.toNumber();
    const t = getTimeTillExpiry(poolPairData.expiryTime, poolPairData.currentBlockTimestamp, poolPairData.unitSeconds);
    const Ao = amount.toNumber();
    return bnum((Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t)) - Math.pow((-Ao + Bo), (1 - t))), (-2 + 1 / (1 - t))) *
        (-1 + 1 / (1 - t)) *
        (1 - t)) /
        Math.pow((-Ao + Bo), (2 * t)) +
        Math.pow((-Ao + Bo), (-1 - t)) *
            Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t)) - Math.pow((-Ao + Bo), (1 - t))), (-1 + 1 / (1 - t))) *
            t +
        f *
            Math.abs((Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t)) - Math.pow((-Ao + Bo), (1 - t))), (-2 + 1 / (1 - t))) *
                (-1 + 1 / (1 - t)) *
                (1 - t)) /
                Math.pow((-Ao + Bo), (2 * t)) +
                Math.pow((-Ao + Bo), (-1 - t)) *
                    Math.pow((Math.pow(Bi, (1 - t)) +
                        Math.pow(Bo, (1 - t)) -
                        Math.pow((-Ao + Bo), (1 - t))), (-1 + 1 / (1 - t))) *
                    t));
}
function getTimeTillExpiry(expiryTime, currentBlockTimestamp, unitSeconds) {
    let t = currentBlockTimestamp < expiryTime
        ? expiryTime - currentBlockTimestamp
        : 0;
    t = t / unitSeconds;
    return t;
}

class ElementPool {
    constructor(id, address, swapFee, totalShares, tokens, tokensList, expiryTime, unitSeconds, principalToken, baseToken) {
        this.poolType = PoolTypes.Element;
        this.id = id;
        this.address = address;
        this.swapFee = swapFee;
        this.totalShares = totalShares;
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.expiryTime = expiryTime;
        this.unitSeconds = unitSeconds;
        this.principalToken = principalToken;
        this.baseToken = baseToken;
        this.currentBlockTimestamp = 0;
    }
    static fromPool(pool) {
        return new ElementPool(pool.id, pool.address, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList, pool.expiryTime, pool.unitSeconds, pool.principalToken, pool.baseToken);
    }
    setCurrentBlockTimestamp(timestamp) {
        this.currentBlockTimestamp = timestamp;
    }
    setTypeForSwap(type) {
        this.swapPairType = type;
    }
    parsePoolPairData(tokenIn, tokenOut) {
        let pairType;
        let tI;
        let tO;
        let balanceIn;
        let balanceOut;
        let decimalsOut;
        let decimalsIn;
        let tokenIndexIn;
        let tokenIndexOut;
        // Check if tokenIn is the pool token itself (BPT)
        if (tokenIn == this.address) {
            pairType = PairTypes.BptToToken;
            balanceIn = this.totalShares;
            decimalsIn = '18'; // Not used but has to be defined
        }
        else if (tokenOut == this.address) {
            pairType = PairTypes.TokenToBpt;
            balanceOut = this.totalShares;
            decimalsOut = '18'; // Not used but has to be defined
        }
        else {
            pairType = PairTypes.TokenToToken;
        }
        if (pairType != PairTypes.BptToToken) {
            tokenIndexIn = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenIn));
            if (tokenIndexIn < 0)
                throw 'Pool does not contain tokenIn';
            tI = this.tokens[tokenIndexIn];
            balanceIn = tI.balance;
            decimalsIn = tI.decimals;
        }
        if (pairType != PairTypes.TokenToBpt) {
            tokenIndexOut = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenOut));
            if (tokenIndexOut < 0)
                throw 'Pool does not contain tokenOut';
            tO = this.tokens[tokenIndexOut];
            balanceOut = tO.balance;
            decimalsOut = tO.decimals;
        }
        // We already add the virtual LP shares to the right balance
        let bnumBalanceIn = bnum(balanceIn);
        let bnumBalanceOut = bnum(balanceOut);
        if (tokenIn == this.principalToken) {
            bnumBalanceIn = bnumBalanceIn.plus(bnum(this.totalShares));
        }
        else if (tokenOut == this.principalToken) {
            bnumBalanceOut = bnumBalanceOut.plus(bnum(this.totalShares));
        }
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            pairType: pairType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            principalToken: this.principalToken,
            baseToken: this.baseToken,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            balanceIn: bnumBalanceIn,
            balanceOut: bnumBalanceOut,
            swapFee: bnum(this.swapFee),
            totalShares: bnum(this.totalShares),
            expiryTime: this.expiryTime,
            unitSeconds: this.unitSeconds,
            currentBlockTimestamp: this.currentBlockTimestamp,
        };
        return poolPairData;
    }
    // Normalized liquidity is an abstract term that can be thought of the
    // inverse of the slippage. It is proportional to the token balances in the
    // pool but also depends on the shape of the invariant curve.
    // As a standard, we define normalized liquidity in tokenOut
    getNormalizedLiquidity(poolPairData) {
        // This could be refined by using the inverse of the slippage, but
        // in practice this won't have a big impact in path selection for
        // multi-hops so not a big priority
        return poolPairData.balanceOut;
    }
    getLimitAmountSwap(poolPairData, swapType) {
        const MAX_OUT_RATIO = bnum(0.3);
        if (swapType === SwapTypes.SwapExactIn) {
            // "Ai < (Bi**(1-t)+Bo**(1-t))**(1/(1-t))-Bi" must hold in order for
            // base of root to be non-negative
            const Bi = poolPairData.balanceIn.toNumber();
            const Bo = poolPairData.balanceOut.toNumber();
            const t = getTimeTillExpiry(this.expiryTime, this.currentBlockTimestamp, this.unitSeconds);
            return bnum(Math.pow((Math.pow(Bi, (1 - t)) + Math.pow(Bo, (1 - t))), (1 / (1 - t))) - Bi);
        }
        else {
            return poolPairData.balanceOut.times(MAX_OUT_RATIO);
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance.toString();
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => t.address === token);
            T.balance = newBalance.toString();
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _exactTokenInForTokenOut$1(amount, poolPairData);
    }
    _exactTokenInForBPTOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _exactBPTInForTokenOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _tokenInForExactTokenOut$1(amount, poolPairData);
    }
    _tokenInForExactBPTOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _BPTInForExactTokenOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _spotPriceAfterSwapExactTokenInForTokenOut$1(amount, poolPairData);
    }
    _spotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _spotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _spotPriceAfterSwapTokenInForExactTokenOut$1(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _spotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$1(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        poolPairData.currentBlockTimestamp = this.currentBlockTimestamp;
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$1(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
    _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        throw 'Element pool does not support SOR add/remove liquidity';
    }
}

// All functions are adapted from the solidity ones to be found on:
// https://github.com/balancer-labs/balancer-core-v2/blob/master/contracts/pools/stable/StableMath.sol
// TODO: implement all up and down rounding variations
/**********************************************************************************************
    // invariant                                                                                 //
    // D = invariant to compute                                                                  //
    // A = amplifier                n * D^2 + A * n^n * S * (n^n * P / D^(n−1))                  //
    // S = sum of balances         ____________________________________________                  //
    // P = product of balances    (n+1) * D + ( A * n^n − 1)* (n^n * P / D^(n−1))                //
    // n = number of tokens                                                                      //
    **********************************************************************************************/
function _invariant(amp, // amp
balances // balances
) {
    let sum = ZERO;
    const totalCoins = balances.length;
    for (let i = 0; i < totalCoins; i++) {
        sum = sum.plus(balances[i]);
    }
    if (sum.isZero()) {
        return ZERO;
    }
    let prevInv = ZERO;
    let inv = sum;
    const ampTimesNpowN = amp.times(Math.pow(totalCoins, totalCoins)); // A*n^n
    for (let i = 0; i < 255; i++) {
        let P_D = bnum(totalCoins).times(balances[0]);
        for (let j = 1; j < totalCoins; j++) {
            //P_D is rounded up
            P_D = P_D.times(balances[j]).times(totalCoins).div(inv);
        }
        prevInv = inv;
        //inv is rounded up
        inv = bnum(totalCoins)
            .times(inv)
            .times(inv)
            .plus(ampTimesNpowN.times(sum).times(P_D))
            .div(bnum(totalCoins + 1)
            .times(inv)
            .plus(ampTimesNpowN.minus(1).times(P_D)));
        // Equality with the precision of 1
        if (inv.gt(prevInv)) {
            if (inv.minus(prevInv).lt(bnum(Math.pow(10, -18)))) {
                break;
            }
        }
        else if (prevInv.minus(inv).lt(bnum(Math.pow(10, -18)))) {
            break;
        }
    }
    //Result is rounded up
    return inv;
}
// // This function has to be zero if the invariant D was calculated correctly
// // It was only used for double checking that the invariant was correct
// export function _invariantValueFunction(
//     amp: BigNumber, // amp
//     balances: BigNumber[], // balances
//     D: BigNumber
// ): BigNumber {
//     let invariantValueFunction;
//     let prod = ONE;
//     let sum = ZERO;
//     for (let i = 0; i < balances.length; i++) {
//         prod = prod.times(balances[i]);
//         sum = sum.plus(balances[i]);
//     }
//     let n = bnum(balances.length);
//     // NOT! working based on Daniel's equation: https://www.notion.so/Analytical-for-2-tokens-1cd46debef6648dd81f2d75bae941fea
//     // invariantValueFunction = amp.times(sum)
//     //     .plus((ONE.div(n.pow(n)).minus(amp)).times(D))
//     //     .minus((ONE.div(n.pow(n.times(2)).times(prod))).times(D.pow(n.plus(ONE))));
//     invariantValueFunction = D.pow(n.plus(ONE))
//         .div(n.pow(n).times(prod))
//         .plus(D.times(amp.times(n.pow(n)).minus(ONE)))
//         .minus(amp.times(n.pow(n)).times(sum));
//     return invariantValueFunction;
// }
// Adapted from StableMath.sol, _outGivenIn()
// * Added swap fee at very first line
/**********************************************************************************************
    // outGivenIn token x for y - polynomial equation to solve                                   //
    // ay = amount out to calculate                                                              //
    // by = balance token out                                                                    //
    // y = by - ay                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               y^2 + ( S - ----------  - 1) * y -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but y                                                           //
    // P = product of final balances but y                                                       //
    **********************************************************************************************/
function _exactTokenInForTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    let tokenAmountIn = amount;
    tokenAmountIn = tokenAmountIn.times(ONE.minus(swapFee));
    //Invariant is rounded up
    const inv = _invariant(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexIn) {
            x = balances[i].plus(tokenAmountIn);
        }
        else if (i != tokenIndexOut) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate out balance
    const y = _solveAnalyticalBalance(sum, inv, amp, n_pow_n, p);
    //Result is rounded down
    // return balances[tokenIndexOut] > y ? balances[tokenIndexOut].minus(y) : 0;
    return balances[tokenIndexOut].minus(y);
}
// Adapted from StableMath.sol, _inGivenOut()
// * Added swap fee at very last line
/**********************************************************************************************
    // inGivenOut token x for y - polynomial equation to solve                                   //
    // ax = amount in to calculate                                                               //
    // bx = balance token in                                                                     //
    // x = bx + ax                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               x^2 + ( S - ----------  - 1) * x -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but x                                                           //
    // P = product of final balances but x                                                       //
    **********************************************************************************************/
function _tokenInForExactTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountOut = amount;
    //Invariant is rounded up
    const inv = _invariant(amp, balances);
    let p = inv;
    let sum = ZERO;
    const totalCoins = bnum(balances.length);
    let n_pow_n = ONE;
    let x = ZERO;
    for (let i = 0; i < balances.length; i++) {
        n_pow_n = n_pow_n.times(totalCoins);
        if (i == tokenIndexOut) {
            x = balances[i].minus(tokenAmountOut);
        }
        else if (i != tokenIndexIn) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    //Calculate in balance
    const y = _solveAnalyticalBalance(sum, inv, amp, n_pow_n, p);
    //Result is rounded up
    return y.minus(balances[tokenIndexIn]).div(ONE.minus(swapFee));
}
//This function calculates the balance of a given token (tokenIndex)
// given all the other balances and the invariant
function _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, inv, tokenIndex) {
    let p = inv;
    let sum = ZERO;
    const totalCoins = balances.length;
    let nPowN = ONE;
    let x = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        nPowN = nPowN.times(totalCoins);
        if (i != tokenIndex) {
            x = balances[i];
        }
        else {
            continue;
        }
        sum = sum.plus(x);
        //Round up p
        p = p.times(inv).div(x);
    }
    // Calculate token balance
    return _solveAnalyticalBalance(sum, inv, amp, nPowN, p);
}
//This function calcuates the analytical solution to find the balance required
function _solveAnalyticalBalance(sum, inv, amp, n_pow_n, p) {
    //Round up p
    p = p.times(inv).div(amp.times(n_pow_n).times(n_pow_n));
    //Round down b
    const b = sum.plus(inv.div(amp.times(n_pow_n)));
    //Round up c
    // let c = inv >= b
    //     ? inv.minus(b).plus(Math.sqrtUp(inv.minus(b).times(inv.minus(b)).plus(p.times(4))))
    //     : Math.sqrtUp(b.minus(inv).times(b.minus(inv)).plus(p.times(4))).minus(b.minus(inv));
    let c;
    if (inv.gte(b)) {
        c = inv
            .minus(b)
            .plus(inv.minus(b).times(inv.minus(b)).plus(p.times(4)).sqrt());
    }
    else {
        c = b
            .minus(inv)
            .times(b.minus(inv))
            .plus(p.times(4))
            .sqrt()
            .minus(b.minus(inv));
    }
    //Round up y
    return c.div(2);
}
/*
Adapted from StableMath.sol _exactTokensInForBPTOut()
    * renamed it to _exactTokenInForBPTOut (i.e. just one token in)
*/
function _exactTokenInForBPTOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountIn = amount;
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weights of each token relative to the sum of all balances
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const currentWeight = balances[tokenIndexIn].div(sumBalances);
    const tokenBalanceRatioWithoutFee = balances[tokenIndexIn]
        .plus(tokenAmountIn)
        .div(balances[tokenIndexIn]);
    const weightedBalanceRatio = ONE.plus(tokenBalanceRatioWithoutFee.minus(ONE).times(currentWeight));
    // calculate new amountIn taking into account the fee on the % excess
    // Percentage of the amount supplied that will be implicitly swapped for other tokens in the pool
    const tokenBalancePercentageExcess = tokenBalanceRatioWithoutFee
        .minus(weightedBalanceRatio)
        .div(tokenBalanceRatioWithoutFee.minus(ONE));
    const amountInAfterFee = tokenAmountIn.times(ONE.minus(swapFee.times(tokenBalancePercentageExcess)));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amountInAfterFee);
    // get new invariant taking into account swap fees
    const newInvariant = _invariant(amp, balances);
    return balanceOut.times(newInvariant.div(currentInvariant).minus(ONE));
}
/*
Flow of calculations:
amountBPTOut -> newInvariant -> (amountInProportional, amountInAfterFee) ->
amountInPercentageExcess -> amountIn
*/
function _tokenInForExactBPTOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const bptAmountOut = amount;
    /**********************************************************************************************
    // TODO description                            //
    **********************************************************************************************/
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // Calculate new invariant
    const newInvariant = balanceOut
        .plus(bptAmountOut)
        .div(balanceOut)
        .times(currentInvariant);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weight of token
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // get amountInAfterFee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, newInvariant, tokenIndexIn);
    const amountInAfterFee = newBalanceTokenIndex.minus(balances[tokenIndexIn]);
    // Get tokenBalancePercentageExcess
    const currentWeight = balances[tokenIndexIn].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    // return amountIn
    return amountInAfterFee.div(ONE.minus(tokenBalancePercentageExcess.times(swapFee)));
}
/*
Adapted from StableMath.sol _BPTInForExactTokensOut() to reduce it to
_BPTInForExactTokenOut (i.e. just one token out)
*/
function _BPTInForExactTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const tokenAmountOut = amount;
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weights of each token relative to the sum of all balances
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // Calculate the weighted balance ratio without considering fees
    const currentWeight = balances[tokenIndexOut].div(sumBalances);
    const tokenBalanceRatioWithoutFee = balances[tokenIndexOut]
        .minus(tokenAmountOut)
        .div(balances[tokenIndexOut]);
    const weightedBalanceRatio = ONE.minus(ONE.minus(tokenBalanceRatioWithoutFee).times(currentWeight));
    // calculate new amounts in taking into account the fee on the % excess
    const tokenBalancePercentageExcess = weightedBalanceRatio
        .minus(tokenBalanceRatioWithoutFee)
        .div(ONE.minus(tokenBalanceRatioWithoutFee));
    const amountOutBeforeFee = tokenAmountOut.div(ONE.minus(swapFee.times(tokenBalancePercentageExcess)));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amountOutBeforeFee);
    // get new invariant taking into account swap fees
    const newInvariant = _invariant(amp, balances);
    // return amountBPTIn
    return balanceIn.times(ONE.minus(newInvariant.div(currentInvariant)));
}
/*
Flow of calculations:
amountBPTin -> newInvariant -> (amountOutProportional, amountOutBeforeFee) ->
amountOutPercentageExcess -> amountOut
*/
function _exactBPTInForTokenOut(amount, poolPairData) {
    // The formula below returns some dust (due to rounding errors) but when
    // we input zero the output should be zero
    if (amount.isZero())
        return amount;
    const { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const bptAmountIn = amount;
    /**********************************************************************************************
    // TODO description                            //
    **********************************************************************************************/
    // Get current invariant
    const currentInvariant = _invariant(amp, balances);
    // Calculate new invariant
    const newInvariant = balanceIn
        .minus(bptAmountIn)
        .div(balanceIn)
        .times(currentInvariant);
    // First calculate the sum of all token balances which will be used to calculate
    // the current weight of token
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    // get amountOutBeforeFee
    const newBalanceTokenIndex = _getTokenBalanceGivenInvariantAndAllOtherBalances(amp, balances, newInvariant, tokenIndexOut);
    const amountOutBeforeFee = balances[tokenIndexOut].minus(newBalanceTokenIndex);
    // Calculate tokenBalancePercentageExcess
    const currentWeight = balances[tokenIndexOut].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    // return amountOut
    return amountOutBeforeFee.times(ONE.minus(tokenBalancePercentageExcess.times(swapFee)));
}
//////////////////////
////  These functions have been added exclusively for the SORv2
//////////////////////
function _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, is_first_derivative, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant(amp, balances);
    let S = ZERO;
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn && i != tokenIndexOut) {
            S = S.plus(balances[i]);
        }
    }
    const x = balances[tokenIndexIn];
    const y = balances[tokenIndexOut];
    const a = amp.times(Math.pow(totalCoins, totalCoins)); // = ampTimesNpowN
    const b = S.minus(D).times(a).plus(D);
    const twoaxy = bnum(2).times(a).times(x).times(y);
    const partial_x = twoaxy.plus(a.times(y).times(y)).plus(b.times(y));
    const partial_y = twoaxy.plus(a.times(x).times(x)).plus(b.times(x));
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(partial_y);
    }
    else {
        const partial_xx = bnum(2).times(a).times(y);
        const partial_yy = bnum(2).times(a).times(x);
        const partial_xy = partial_xx.plus(partial_yy).plus(b);
        let numerator;
        numerator = bnum(2)
            .times(partial_x)
            .times(partial_y)
            .times(partial_xy)
            .minus(partial_xx.times(partial_y.pow(2)))
            .minus(partial_yy.times(partial_x.pow(2)));
        const denominator = partial_x.pow(2).times(partial_y);
        ans = numerator.div(denominator);
        if (wrt_out) {
            ans = ans.times(partial_y).div(partial_x);
        }
    }
    return ans;
}
function _poolDerivativesBPT(amp, balances, bptSupply, tokenIndexIn, is_first_derivative, is_BPT_out, wrt_out) {
    const totalCoins = balances.length;
    const D = _invariant(amp, balances);
    let S = ZERO;
    let D_P = D.div(totalCoins);
    for (let i = 0; i < totalCoins; i++) {
        if (i != tokenIndexIn) {
            S = S.plus(balances[i]);
            D_P = D_P.times(D).div(totalCoins * balances[i]);
        }
    }
    const x = balances[tokenIndexIn];
    const alpha = amp.times(Math.pow(totalCoins, totalCoins)); // = ampTimesNpowN
    const beta = alpha.times(S);
    const gamma = ONE.minus(alpha);
    const partial_x = bnum(2)
        .times(alpha)
        .times(x)
        .plus(beta)
        .plus(gamma.times(D));
    const minus_partial_D = D_P.times(totalCoins + 1).minus(gamma.times(x));
    const partial_D = ZERO.minus(minus_partial_D);
    let ans;
    if (is_first_derivative) {
        ans = partial_x.div(minus_partial_D).times(bptSupply).div(D);
    }
    else {
        const partial_xx = bnum(2).times(alpha);
        const partial_xD = gamma;
        const n_times_nplusone = totalCoins * (totalCoins + 1);
        const partial_DD = ZERO.minus(D_P.times(n_times_nplusone).div(D));
        if (is_BPT_out) {
            const term1 = partial_xx.times(partial_D).div(partial_x.pow(2));
            const term2 = bnum(2).times(partial_xD).div(partial_x);
            const term3 = partial_DD.div(partial_D);
            ans = term1.minus(term2).plus(term3).times(D).div(bptSupply);
            if (wrt_out) {
                const D_prime = ZERO.minus(partial_x.div(partial_D));
                ans = ans.div(D_prime).times(D).div(bptSupply);
            }
        }
        else {
            ans = bnum(2)
                .times(partial_xD)
                .div(partial_D)
                .minus(partial_DD.times(partial_x).div(partial_D.pow(2)))
                .minus(partial_xx.div(partial_x));
            if (wrt_out) {
                ans = ans
                    .times(partial_x)
                    .div(minus_partial_D)
                    .times(bptSupply)
                    .div(D);
            }
        }
    }
    return ans;
}
/////////
/// SpotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForTokenOut(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(ONE.minus(swapFee)));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut(amount, poolPairData));
    let ans = _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, true, false);
    ans = ONE.div(ans.times(ONE.minus(swapFee)));
    return ans;
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactTokenOut(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactTokenOut(amount, poolPairData).times(ONE.minus(swapFee));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    let ans = _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, true, true);
    ans = ONE.div(ans.times(ONE.minus(swapFee)));
    return ans;
}
function _feeFactor(balances, tokenIndex, swapFee) {
    let sumBalances = ZERO;
    for (let i = 0; i < balances.length; i++) {
        sumBalances = sumBalances.plus(balances[i]);
    }
    const currentWeight = balances[tokenIndex].div(sumBalances);
    const tokenBalancePercentageExcess = ONE.minus(currentWeight);
    return ONE.minus(tokenBalancePercentageExcess.times(swapFee));
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactTokenInForBPTOut(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(feeFactor));
    balanceOut = balanceOut.plus(_exactTokenInForBPTOut(amount, poolPairData));
    let ans = _poolDerivativesBPT(amp, balances, balanceOut, tokenIndexIn, true, true, false);
    ans = ONE.div(ans.times(feeFactor));
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapTokenInForExactBPTOut(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactBPTOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in.times(feeFactor));
    balanceOut = balanceOut.plus(amount);
    let ans = _poolDerivativesBPT(amp, balances, balanceOut, tokenIndexIn, true, true, true);
    ans = ONE.div(ans.times(feeFactor));
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _spotPriceAfterSwapExactBPTInForTokenOut(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _out = _exactBPTInForTokenOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_out.div(feeFactor));
    balanceIn = balanceIn.minus(amount);
    const ans = _poolDerivativesBPT(amp, balances, balanceIn, tokenIndexOut, true, false, false).div(feeFactor);
    return ans;
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _spotPriceAfterSwapBPTInForExactTokenOut(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount.div(feeFactor));
    balanceIn = balanceIn.minus(_BPTInForExactTokenOut(amount, poolPairData));
    const ans = _poolDerivativesBPT(amp, balances, balanceIn, tokenIndexOut, true, false, true).div(feeFactor);
    return ans;
}
/////////
///  Derivatives of spotPriceAfterSwap
/////////
// PairType = 'token->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(ONE.minus(swapFee)));
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_exactTokenInForTokenOut(amount, poolPairData));
    return _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, false, false);
}
// PairType = 'token->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(amount, poolPairData) {
    const { amp, allBalances, tokenIndexIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactTokenOut(amount, poolPairData).times(ONE.minus(swapFee));
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount);
    const feeFactor = ONE.minus(swapFee);
    return _poolDerivatives(amp, balances, tokenIndexIn, tokenIndexOut, false, true).div(feeFactor);
}
// PairType = 'token->BPT'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(amount.times(feeFactor));
    balanceOut = balanceOut.plus(_exactTokenInForBPTOut(amount, poolPairData));
    const ans = _poolDerivativesBPT(amp, balances, balanceOut, tokenIndexIn, false, true, false);
    return ans;
}
// PairType = 'token->BPT'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(amount, poolPairData) {
    let { amp, allBalances, balanceOut, tokenIndexIn, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _tokenInForExactBPTOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexIn, swapFee);
    balances[tokenIndexIn] = balances[tokenIndexIn].plus(_in.times(feeFactor));
    balanceOut = balanceOut.plus(amount);
    return _poolDerivativesBPT(amp, balances, balanceOut, tokenIndexIn, false, true, true).div(feeFactor);
}
// PairType = 'BPT->token'
// SwapType = 'swapExactIn'
function _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _out = _exactBPTInForTokenOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(_out.div(feeFactor));
    balanceIn = balanceIn.minus(amount);
    const ans = _poolDerivativesBPT(amp, balances, balanceIn, tokenIndexOut, false, false, false);
    return ans.div(feeFactor);
}
// PairType = 'BPT->token'
// SwapType = 'swapExactOut'
function _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(amount, poolPairData) {
    let { amp, allBalances, balanceIn, tokenIndexOut, swapFee } = poolPairData;
    const balances = [...allBalances];
    const _in = _BPTInForExactTokenOut(amount, poolPairData);
    const feeFactor = _feeFactor(balances, tokenIndexOut, swapFee);
    balances[tokenIndexOut] = balances[tokenIndexOut].minus(amount.div(feeFactor));
    balanceIn = balanceIn.minus(_in);
    const ans = _poolDerivativesBPT(amp, balances, balanceIn, tokenIndexOut, false, false, true);
    return ans.div(feeFactor.pow(2));
}

class MetaStablePool {
    constructor(id, address, amp, swapFee, totalShares, tokens, tokensList) {
        this.poolType = PoolTypes.MetaStable;
        this.AMP_PRECISION = bnum(1000);
        this.MAX_IN_RATIO = bnum(0.3);
        this.MAX_OUT_RATIO = bnum(0.3);
        this.id = id;
        this.address = address;
        this.amp = bnum(amp);
        this.swapFee = bnum(swapFee);
        this.swapFeeScaled = scale(this.swapFee, 18);
        this.totalShares = totalShares;
        this.tokens = tokens;
        this.tokensList = tokensList;
        this.ampAdjusted = this.amp.times(this.AMP_PRECISION);
    }
    static fromPool(pool) {
        return new MetaStablePool(pool.id, pool.address, pool.amp, pool.swapFee, pool.totalShares, pool.tokens, pool.tokensList);
    }
    setTypeForSwap(type) {
        this.swapPairType = type;
    }
    parsePoolPairData(tokenIn, tokenOut) {
        let pairType;
        let tI;
        let tO;
        let balanceIn;
        let balanceOut;
        let decimalsOut;
        let decimalsIn;
        let tokenIndexIn;
        let tokenIndexOut;
        let tokenInPriceRate = bnum(1);
        let tokenOutPriceRate = bnum(1);
        // Check if tokenIn is the pool token itself (BPT)
        if (tokenIn === this.address) {
            pairType = PairTypes.BptToToken;
            balanceIn = bnum(this.totalShares);
            decimalsIn = '18'; // Not used but has to be defined
        }
        else if (tokenOut === this.address) {
            pairType = PairTypes.TokenToBpt;
            balanceOut = bnum(this.totalShares);
            decimalsOut = '18'; // Not used but has to be defined
        }
        else {
            pairType = PairTypes.TokenToToken;
        }
        if (pairType !== PairTypes.BptToToken) {
            tokenIndexIn = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenIn));
            if (tokenIndexIn < 0)
                throw 'Pool does not contain tokenIn';
            tI = this.tokens[tokenIndexIn];
            // balanceIn = tI.balance;
            balanceIn = bnum(tI.balance).times(bnum(tI.priceRate));
            decimalsIn = tI.decimals;
            tokenInPriceRate = bnum(tI.priceRate);
        }
        if (pairType !== PairTypes.TokenToBpt) {
            tokenIndexOut = this.tokens.findIndex((t) => getAddress(t.address) === getAddress(tokenOut));
            if (tokenIndexOut < 0)
                throw 'Pool does not contain tokenOut';
            tO = this.tokens[tokenIndexOut];
            // balanceOut = tO.balance;
            balanceOut = bnum(tO.balance).times(bnum(tO.priceRate));
            decimalsOut = tO.decimals;
            tokenOutPriceRate = bnum(tO.priceRate);
        }
        // Get all token balances
        const allBalances = [];
        const allBalancesScaled = [];
        for (let i = 0; i < this.tokens.length; i++) {
            // const balanceBn = bnum(this.tokens[i].balance);
            const balanceBn = bnum(this.tokens[i].balance)
                .times(bnum(this.tokens[i].priceRate))
                .dp(Number(this.tokens[i].decimals), 1);
            allBalances.push(balanceBn);
            allBalancesScaled.push(scale(balanceBn, 18));
        }
        const inv = _invariant(this.amp, allBalances);
        const poolPairData = {
            id: this.id,
            address: this.address,
            poolType: this.poolType,
            pairType: pairType,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            balanceIn: balanceIn,
            balanceOut: balanceOut,
            invariant: inv,
            swapFee: this.swapFee,
            swapFeeScaled: this.swapFeeScaled,
            allBalances,
            allBalancesScaled,
            amp: this.amp,
            tokenIndexIn: tokenIndexIn,
            tokenIndexOut: tokenIndexOut,
            decimalsIn: Number(decimalsIn),
            decimalsOut: Number(decimalsOut),
            tokenInPriceRate,
            tokenOutPriceRate,
        };
        return poolPairData;
    }
    getNormalizedLiquidity(poolPairData) {
        // This is an approximation as the actual normalized liquidity is a lot more complicated to calculate
        return poolPairData.balanceOut.times(poolPairData.amp);
    }
    getLimitAmountSwap(poolPairData, swapType) {
        // We multiply ratios by 10**-18 because we are in normalized space
        // so 0.5 should be 0.5 and not 500000000000000000
        // TODO: update bmath to use everything normalized
        // PoolPairData is using balances that have already been exchanged so need to convert back
        if (swapType === SwapTypes.SwapExactIn) {
            return poolPairData.balanceIn
                .div(poolPairData.tokenInPriceRate)
                .times(this.MAX_IN_RATIO);
        }
        else {
            return poolPairData.balanceOut
                .div(poolPairData.tokenOutPriceRate)
                .times(this.MAX_OUT_RATIO);
        }
    }
    // Updates the balance of a given token for the pool
    updateTokenBalanceForPool(token, newBalance) {
        // token is BPT
        if (this.address == token) {
            this.totalShares = newBalance.toString();
        }
        else {
            // token is underlying in the pool
            const T = this.tokens.find((t) => t.address === token);
            T.balance = newBalance.toString();
        }
    }
    _exactTokenInForTokenOut(poolPairData, amount) {
        // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
        // i.e. when using token with 2decimals 0.002 should be returned as 0
        // Uses ROUND_DOWN mode (1)
        const amt = _exactTokenInForTokenOut(amount.times(poolPairData.tokenInPriceRate), poolPairData).dp(poolPairData.decimalsOut, 1);
        return amt.div(poolPairData.tokenOutPriceRate);
    }
    _exactTokenInForBPTOut(poolPairData, amount) {
        return _exactTokenInForBPTOut(amount, poolPairData);
    }
    _exactBPTInForTokenOut(poolPairData, amount) {
        return _exactBPTInForTokenOut(amount, poolPairData);
    }
    _tokenInForExactTokenOut(poolPairData, amount) {
        // Using BigNumber.js decimalPlaces (dp), allows us to consider token decimal accuracy correctly,
        // i.e. when using token with 2decimals 0.002 should be returned as 0
        // Uses ROUND_UP mode (0)
        const amt = _tokenInForExactTokenOut(amount.times(poolPairData.tokenOutPriceRate), poolPairData).dp(poolPairData.decimalsIn, 0);
        return amt.div(poolPairData.tokenInPriceRate);
    }
    _tokenInForExactBPTOut(poolPairData, amount) {
        return _tokenInForExactBPTOut(amount, poolPairData);
    }
    _BPTInForExactTokenOut(poolPairData, amount) {
        return _BPTInForExactTokenOut(amount, poolPairData);
    }
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        const amountConverted = amount.times(poolPairData.tokenInPriceRate);
        const result = _spotPriceAfterSwapExactTokenInForTokenOut(amountConverted, poolPairData);
        return result;
    }
    _spotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactTokenInForBPTOut(amount, poolPairData);
    }
    _spotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapExactBPTInForTokenOut(amount, poolPairData);
    }
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        const amountConverted = amount.times(poolPairData.tokenOutPriceRate);
        const result = _spotPriceAfterSwapTokenInForExactTokenOut(amountConverted, poolPairData);
        return result;
    }
    _spotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        return _spotPriceAfterSwapTokenInForExactBPTOut(amount, poolPairData);
    }
    _spotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        return _spotPriceAfterSwapBPTInForExactTokenOut(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(amount, poolPairData);
    }
    _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount) {
        return _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(amount, poolPairData);
    }
    _evmoutGivenIn(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = scale(amount, 18);
            const amountConverted = amtScaled.times(poolPairData.tokenInPriceRate);
            const amt = StableMath_1._calcOutGivenIn(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amountConverted, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt.div(poolPairData.tokenOutPriceRate), -18);
        }
        catch (err) {
            console.error(`_evmoutGivenIn: ${err.message}`);
            return ZERO;
        }
    }
    _evminGivenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const amtScaled = scale(amount, 18);
            const amountConverted = amtScaled.times(poolPairData.tokenOutPriceRate);
            const amt = StableMath_1._calcInGivenOut(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexIn, poolPairData.tokenIndexOut, amountConverted, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt.div(poolPairData.tokenInPriceRate), -18);
        }
        catch (err) {
            console.error(`_evminGivenOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmexactTokenInForBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const bptTotalSupplyScaled = scale(poolPairData.balanceOut, 18);
            // amountsIn must have same length as balances. Only need value for token in.
            const amountsIn = poolPairData.allBalances.map((bal, i) => {
                if (i === poolPairData.tokenIndexIn)
                    return scale(amount, 18);
                else
                    return ZERO;
            });
            const amt = StableMath_1._calcBptOutGivenExactTokensIn(this.ampAdjusted, poolPairData.allBalancesScaled, amountsIn, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmexactTokenInForBPTOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmexactBPTInForTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const bptAmountInScaled = scale(amount, 18);
            const bptTotalSupplyScaled = scale(poolPairData.balanceIn, 18);
            const amt = StableMath_1._calcTokenOutGivenExactBptIn(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexOut, bptAmountInScaled, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmexactBPTInForTokenOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmtokenInForExactBPTOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            const bptAmountOutScaled = scale(amount, 18);
            const bptTotalSupplyScaled = scale(poolPairData.balanceOut, 18);
            const amt = StableMath_1._calcTokenInGivenExactBptOut(this.ampAdjusted, poolPairData.allBalancesScaled, poolPairData.tokenIndexIn, bptAmountOutScaled, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmtokenInForExactBPTOut: ${err.message}`);
            return ZERO;
        }
    }
    _evmbptInForExactTokenOut(poolPairData, amount) {
        try {
            // All values should use 1e18 fixed point
            // i.e. 1USDC => 1e18 not 1e6
            // amountsOut must have same length as balances. Only need value for token out.
            const amountsOut = poolPairData.allBalances.map((bal, i) => {
                if (i === poolPairData.tokenIndexOut)
                    return scale(amount, 18);
                else
                    return ZERO;
            });
            const bptTotalSupplyScaled = scale(poolPairData.balanceIn, 18);
            const amt = StableMath_1._calcBptInGivenExactTokensOut(this.ampAdjusted, poolPairData.allBalancesScaled, amountsOut, bptTotalSupplyScaled, poolPairData.swapFeeScaled);
            // return normalised amount
            return scale(amt, -18);
        }
        catch (err) {
            console.error(`_evmbptInForExactTokenOut: ${err.message}`);
            return ZERO;
        }
    }
}

function parseNewPool(pool, currentBlockTimestamp = 0) {
    let newPool;
    if (pool.poolType === 'Weighted')
        newPool = WeightedPool.fromPool(pool);
    else if (pool.poolType === 'Stable')
        newPool = StablePool.fromPool(pool);
    else if (pool.poolType === 'Element') {
        newPool = ElementPool.fromPool(pool);
        newPool.setCurrentBlockTimestamp(currentBlockTimestamp);
    }
    else if (pool.poolType === 'MetaStable') {
        newPool = MetaStablePool.fromPool(pool);
    }
    else if (pool.poolType === 'LiquidityBootstrapping') {
        // If an LBP doesn't have its swaps paused we treat it like a regular Weighted pool.
        // If it does we just ignore it.
        if (pool.swapEnabled === true)
            newPool = WeightedPool.fromPool(pool);
        else
            return undefined;
    }
    else {
        console.error(`Unknown pool type or type field missing: ${pool.poolType} ${pool.id}`);
        return undefined;
    }
    return newPool;
}
// TODO: Add cases for pairType = [BTP->token, token->BTP] and poolType = [weighted, stable]
function getOutputAmountSwap(pool, poolPairData, swapType, amount) {
    const pairType = poolPairData.pairType;
    // TODO: check if necessary to check if amount > limitAmount
    if (swapType === SwapTypes.SwapExactIn) {
        if (poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
        else if (pairType === PairTypes.TokenToToken) {
            return pool._exactTokenInForTokenOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.TokenToBpt) {
            return pool._exactTokenInForBPTOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.BptToToken) {
            return pool._exactBPTInForTokenOut(poolPairData, amount);
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        else if (amount.gte(poolPairData.balanceOut)) {
            return INFINITY$1;
        }
        else if (pairType === PairTypes.TokenToToken) {
            return pool._tokenInForExactTokenOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.TokenToBpt) {
            return pool._tokenInForExactBPTOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.BptToToken) {
            return pool._BPTInForExactTokenOut(poolPairData, amount);
        }
    }
}

function getHighestLimitAmountsForPaths(paths, maxPools) {
    if (paths.length === 0)
        return [];
    const limitAmounts = [];
    for (let i = 0; i < maxPools; i++) {
        if (i < paths.length) {
            const limitAmount = paths[i].limitAmount;
            limitAmounts.push(limitAmount);
        }
    }
    return limitAmounts;
}
function getEffectivePriceSwapForPath(pools, path, swapType, amount) {
    if (amount.lt(INFINITESIMAL)) {
        // Return spot price as code below would be 0/0 = undefined
        // or small_amount/0 or 0/small_amount which would cause bugs
        return getSpotPriceAfterSwapForPath(path, swapType, amount);
    }
    const outputAmountSwap = getOutputAmountSwapForPath(path, swapType, amount);
    if (swapType === SwapTypes.SwapExactIn) {
        return amount.div(outputAmountSwap); // amountIn/AmountOut
    }
    else {
        return outputAmountSwap.div(amount); // amountIn/AmountOut
    }
}
function getOutputAmountSwapForPath(path, swapType, amount) {
    const pools = path.pools;
    // First of all check if the amount is above limit, if so, return 0 for
    // 'swapExactIn' or Inf for swapExactOut
    if (amount.gt(path.limitAmount)) {
        if (swapType === SwapTypes.SwapExactIn) {
            return ZERO;
        }
        else {
            return INFINITY$1;
        }
    }
    const poolPairData = path.poolPairData;
    if (poolPairData.length == 1) {
        return getOutputAmountSwap(pools[0], path.poolPairData[0], swapType, amount);
    }
    else if (poolPairData.length == 2) {
        if (swapType === SwapTypes.SwapExactIn) {
            // The outputAmount is number of tokenOut we receive from the second poolPairData
            const outputAmountSwap1 = getOutputAmountSwap(pools[0], path.poolPairData[0], swapType, amount);
            return getOutputAmountSwap(pools[1], path.poolPairData[1], swapType, outputAmountSwap1);
        }
        else {
            // The outputAmount is number of tokenIn we send to the first poolPairData
            const outputAmountSwap2 = getOutputAmountSwap(pools[1], path.poolPairData[1], swapType, amount);
            return getOutputAmountSwap(pools[0], path.poolPairData[0], swapType, outputAmountSwap2);
        }
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}
function getSpotPriceAfterSwapForPath(path, swapType, amount) {
    const pools = path.pools;
    const poolPairData = path.poolPairData;
    if (poolPairData.length == 1) {
        return getSpotPriceAfterSwap(pools[0], path.poolPairData[0], swapType, amount);
    }
    else if (poolPairData.length == 2) {
        if (swapType === SwapTypes.SwapExactIn) {
            const outputAmountSwap1 = getOutputAmountSwap(pools[0], path.poolPairData[0], swapType, amount);
            const spotPriceAfterSwap1 = getSpotPriceAfterSwap(pools[0], path.poolPairData[0], swapType, amount);
            const spotPriceAfterSwap2 = getSpotPriceAfterSwap(pools[1], path.poolPairData[1], swapType, outputAmountSwap1);
            return spotPriceAfterSwap1.times(spotPriceAfterSwap2);
        }
        else {
            const outputAmountSwap2 = getOutputAmountSwap(pools[1], path.poolPairData[1], swapType, amount);
            const spotPriceAfterSwap1 = getSpotPriceAfterSwap(pools[0], path.poolPairData[0], swapType, outputAmountSwap2);
            const spotPriceAfterSwap2 = getSpotPriceAfterSwap(pools[1], path.poolPairData[1], swapType, amount);
            return spotPriceAfterSwap1.times(spotPriceAfterSwap2);
        }
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}
// TODO: Add cases for pairType = [BTP->token, token->BTP] and poolType = [weighted, stable]
function getSpotPriceAfterSwap(pool, poolPairData, swapType, amount) {
    const pairType = poolPairData.pairType;
    // TODO: check if necessary to check if amount > limitAmount
    if (swapType === SwapTypes.SwapExactIn) {
        if (poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        if (amount.gte(poolPairData.balanceOut))
            return INFINITY$1;
    }
    if (swapType === SwapTypes.SwapExactIn) {
        if (pairType === PairTypes.TokenToToken) {
            return pool._spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.TokenToBpt) {
            return pool._spotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.BptToToken) {
            return pool._spotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount);
        }
    }
    else {
        if (pairType === PairTypes.TokenToToken) {
            return pool._spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.TokenToBpt) {
            return pool._spotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.BptToToken) {
            return pool._spotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount);
        }
    }
}
function getDerivativeSpotPriceAfterSwapForPath(path, swapType, amount) {
    const poolPairData = path.poolPairData;
    if (poolPairData.length == 1) {
        return getDerivativeSpotPriceAfterSwap(path.pools[0], path.poolPairData[0], swapType, amount);
    }
    else if (poolPairData.length == 2) {
        if (swapType === SwapTypes.SwapExactIn) {
            const outputAmountSwap1 = getOutputAmountSwap(path.pools[0], path.poolPairData[0], swapType, amount);
            // const SPaS1 = getSpotPriceAfterSwap(
            //     path.pools[0],
            //     path.poolPairData[0],
            //     swapType,
            //     amount
            // );
            const SPaS2 = getSpotPriceAfterSwap(path.pools[1], path.poolPairData[1], swapType, outputAmountSwap1);
            const dSPaS1 = getDerivativeSpotPriceAfterSwap(path.pools[0], path.poolPairData[0], swapType, amount);
            const dSPaS2 = getDerivativeSpotPriceAfterSwap(path.pools[1], path.poolPairData[1], swapType, outputAmountSwap1);
            // Using the rule of the derivative of the multiplication: d[f(x)*g(x)] = d[f(x)]*g(x) + f(x)*d[g(x)]
            // where SPaS1 is SpotPriceAfterSwap of pool 1 and OA1 is OutputAmount of pool 1. We then have:
            // d[SPaS1(x) * SPaS2(OA1(x))] = d[SPaS1(x)] * SPaS2(OA1(x)) + SPaS1(x) * d[SPaS2(OA1(x))]
            // Let's expand the term d[SPaS2(OA1(x))] which is trickier:
            // d[SPaS2(OA1(x))] at x0 = d[SPaS2(x)] at OA1(x0) * d[OA1(x)] at x0,
            // Since d[OA1(x)] = 1/SPaS1(x) we then have:
            // d[SPaS2(OA1(x))] = d[SPaS2(x)] * 1/SPaS1(x). Which leads us to:
            // d[SPaS1(x) * SPaS2(OA1(x))] = d[SPaS1(x)] * SPaS2(OA1(x)) + d[SPaS2(OA1(x))]
            // return dSPaS1 * SPaS2 + dSPaS2
            return dSPaS1.times(SPaS2).plus(dSPaS2);
        }
        else {
            const outputAmountSwap2 = getOutputAmountSwap(path.pools[1], path.poolPairData[1], swapType, amount);
            const SPaS1 = getSpotPriceAfterSwap(path.pools[0], path.poolPairData[0], swapType, outputAmountSwap2);
            const SPaS2 = getSpotPriceAfterSwap(path.pools[1], path.poolPairData[1], swapType, amount);
            const dSPaS1 = getDerivativeSpotPriceAfterSwap(path.pools[0], path.poolPairData[0], swapType, outputAmountSwap2);
            const dSPaS2 = getDerivativeSpotPriceAfterSwap(path.pools[1], path.poolPairData[1], swapType, amount);
            // For swapExactOut we the outputToken is the amount of tokenIn necessary to buy a given amount of tokenOut
            // Using the rule of the derivative of the multiplication: d[f(x)*g(x)] = d[f(x)]*g(x) + f(x)*d[g(x)]
            // where SPaS1 is SpotPriceAfterSwap of pool 1 and OA2 is OutputAmount of pool 2. We then have:
            // d[SPaS1(OA2(x)) * SPaS2(x)] = d[SPaS1(OA2(x))] * SPaS2(x) + SPaS1(OA2(x)) * d[SPaS2(x)]
            // Let's expand the term d[SPaS1(OA2(x))] which is trickier:
            // d[SPaS1(OA2(x))] at x0 = d[SPaS1(x)] at OA2(x0) * d[OA2(x)] at x0,
            // Since d[OA2(x)] = SPaS2(x) we then have:
            // d[SPaS1(OA2(x))] = d[SPaS1(x)] * SPaS2(x). Which leads us to:
            // d[SPaS1(OA2(x)) * SPaS2(x)] = d[SPaS1(x)] * SPaS2(x) * SPaS2(x) + SPaS1(OA2(x)) * d[SPaS2(x)]
            // return dSPaS2 * SPaS1 + dSPaS1 * SPaS2 * SPaS2
            return dSPaS2.times(SPaS1).plus(SPaS2.times(SPaS2).times(dSPaS1));
        }
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}
// TODO: Add cases for pairType = [BTP->token, token->BTP] and poolType = [weighted, stable]
function getDerivativeSpotPriceAfterSwap(pool, poolPairData, swapType, amount) {
    const pairType = poolPairData.pairType;
    // TODO: check if necessary to check if amount > limitAmount
    if (swapType === SwapTypes.SwapExactIn) {
        if (poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        if (amount.gte(poolPairData.balanceOut))
            return INFINITY$1;
    }
    if (swapType === SwapTypes.SwapExactIn) {
        if (pairType === PairTypes.TokenToToken) {
            return pool._derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.TokenToBpt) {
            return pool._derivativeSpotPriceAfterSwapExactTokenInForBPTOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.BptToToken) {
            return pool._derivativeSpotPriceAfterSwapExactBPTInForTokenOut(poolPairData, amount);
        }
    }
    else {
        if (pairType === PairTypes.TokenToToken) {
            return pool._derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.TokenToBpt) {
            return pool._derivativeSpotPriceAfterSwapTokenInForExactBPTOut(poolPairData, amount);
        }
        else if (pairType === PairTypes.BptToToken) {
            return pool._derivativeSpotPriceAfterSwapBPTInForExactTokenOut(poolPairData, amount);
        }
    }
}
// We need do pass 'pools' here because this function has to update the pools state
// in case a pool is used twice in two different paths
function EVMgetOutputAmountSwap(pool, poolPairData, swapType, amount) {
    const { pairType, balanceIn, balanceOut, tokenIn, tokenOut } = poolPairData;
    let returnAmount;
    if (swapType === SwapTypes.SwapExactIn) {
        if (poolPairData.balanceIn.isZero()) {
            return ZERO;
        }
    }
    else {
        if (poolPairData.balanceOut.isZero()) {
            return ZERO;
        }
        if (amount.gte(poolPairData.balanceOut))
            return INFINITY$1;
    }
    if (swapType === SwapTypes.SwapExactIn) {
        // TODO we will be able to remove pooltype check once Element EVM maths is available
        if (pool.poolType === PoolTypes.Weighted ||
            pool.poolType === PoolTypes.Stable ||
            pool.poolType === PoolTypes.MetaStable) {
            // Will accept/return normalised values
            if (pairType === PairTypes.TokenToToken) {
                returnAmount = pool._evmoutGivenIn(poolPairData, amount);
            }
            else if (pairType === PairTypes.TokenToBpt) {
                returnAmount = pool._evmexactTokenInForBPTOut(poolPairData, amount);
            }
            else if (pairType === PairTypes.BptToToken) {
                returnAmount = pool._evmexactBPTInForTokenOut(poolPairData, amount);
            }
        }
        else if (pool.poolType === PoolTypes.Element) {
            // TODO this will just be part of above once maths available
            returnAmount = getOutputAmountSwap(pool, poolPairData, swapType, amount);
        }
    }
    else {
        // TODO we will be able to remove pooltype check once Element EVM maths is available
        if (pool.poolType === PoolTypes.Weighted ||
            pool.poolType === PoolTypes.Stable ||
            pool.poolType === PoolTypes.MetaStable) {
            if (pairType === PairTypes.TokenToToken) {
                returnAmount = pool._evminGivenOut(poolPairData, amount);
            }
            else if (pairType === PairTypes.TokenToBpt) {
                returnAmount = pool._evmtokenInForExactBPTOut(poolPairData, amount);
            }
            else if (pairType === PairTypes.BptToToken) {
                returnAmount = pool._evmbptInForExactTokenOut(poolPairData, amount);
            }
        }
        else if (pool.poolType === PoolTypes.Element) {
            // TODO this will just be part of above once maths available
            returnAmount = getOutputAmountSwap(pool, poolPairData, swapType, amount);
        }
    }
    // Update balances of tokenIn and tokenOut
    pool.updateTokenBalanceForPool(tokenIn, balanceIn.plus(returnAmount));
    pool.updateTokenBalanceForPool(tokenOut, balanceOut.minus(amount));
    return returnAmount;
}

// TODO get max price from slippage tolerance given by user options
const MAX_UINT = MaxUint256.toString();
const minAmountOut = 0;
const maxAmountIn = MAX_UINT;
const maxPrice = MAX_UINT;
const smartOrderRouter = (pools, paths, swapType, totalSwapAmount, maxPools, costReturnToken) => {
    let bestTotalReturn = new BigNumber(0);
    let bestTotalReturnConsideringFees = new BigNumber(0);
    let totalReturn, totalReturnConsideringFees;
    let bestSwapAmounts, bestPaths, swapAmounts;
    // No paths available or totalSwapAmount == 0, return empty solution
    if (paths.length == 0 || totalSwapAmount.isZero()) {
        return [[], ZERO, ZERO, ZERO];
    }
    // Before we start the main loop, we first check if there is enough liquidity for this totalSwapAmount at all
    const highestLimitAmounts = getHighestLimitAmountsForPaths(paths, maxPools);
    //  We use the highest limits to define the initial number of pools considered and the initial guess for swapAmounts. If the
    //  highest_limit is lower than totalSwapAmount, then we should obviously not waste time trying to calculate the SOR suggestion for 1 pool,
    //  Same for 2, 3 pools etc.
    let initialNumPaths = -1; // Initializing
    for (let i = 0; i < maxPools; i++) {
        const sumHighestLimitAmounts = highestLimitAmounts
            .slice(0, i + 1)
            .reduce((a, b) => a.plus(b));
        if (totalSwapAmount.gt(sumHighestLimitAmounts))
            continue; // the i initial pools are not enough to get to totalSwapAmount, continue
        //  If above is false, it means we have enough liquidity with first i pools
        initialNumPaths = i + 1;
        swapAmounts = highestLimitAmounts.slice(0, initialNumPaths);
        //  Since the sum of the first i highest limits will be less than totalSwapAmount, we remove the difference to the last swapAmount
        //  so we are sure that the sum of swapAmounts will be equal to totalSwapAmount
        const difference = sumHighestLimitAmounts.minus(totalSwapAmount);
        swapAmounts[swapAmounts.length - 1] =
            swapAmounts[swapAmounts.length - 1].minus(difference);
        break; // No need to keep looping as this number of pools (i) has enough liquidity
    }
    if (initialNumPaths == -1) {
        return [[], ZERO, ZERO, ZERO]; // Not enough liquidity, return empty
    }
    // First get the optimal totalReturn to trade 'totalSwapAmount' with
    // one path only (b=1). Then increase the number of pools as long as
    // improvementCondition is true (see more information below)
    for (let b = initialNumPaths; b <= paths.length; b++) {
        totalReturn = 0;
        if (b != initialNumPaths) {
            // We already had a previous iteration and are adding another pool this new iteration
            // swapAmounts.push(ONE); // Initialize new swapAmount with 1 wei to
            // // make sure that it won't be considered as a non viable amount (which would
            // // be the case if it started at 0)
            // Start new path at 1/b of totalSwapAmount (i.e. if this is the 5th pool, we start with
            // 20% of the totalSwapAmount for this new swapAmount added). However, we need to make sure
            // that this value is not higher then the bth limit of the paths available otherwise there
            // won't be any possible path to process this swapAmount:
            const newSwapAmount = BigNumber.min.apply(null, [
                totalSwapAmount.times(bnum(1 / b)),
                highestLimitAmounts[b - 1],
            ]);
            // We need then to multiply all current
            // swapAmounts by 1-newSwapAmount/totalSwapAmount.
            swapAmounts.forEach((swapAmount, i) => {
                swapAmounts[i] = swapAmounts[i].times(ONE.minus(newSwapAmount.div(totalSwapAmount)));
            });
            swapAmounts.push(newSwapAmount);
        }
        //  iterate until we converge to the best pools for a given totalSwapAmount
        //  first initialize variables
        const historyOfSortedPathIds = [];
        let selectedPaths;
        let [newSelectedPaths, exceedingAmounts, selectedPathLimitAmounts, pathIds,] = getBestPathIds(pools, paths, swapType, swapAmounts);
        // Check if ids are in history of ids, but first sort and stringify to make comparison possible
        // Copy array https://stackoverflow.com/a/42442909
        let sortedPathIdsJSON = JSON.stringify([...pathIds].sort()); // Just to check if this set of paths has already been chosen
        // We now loop to iterateSwapAmounts until we converge. This is not necessary
        // for just 1 path because swapAmount will always be totalSwapAmount
        while (!historyOfSortedPathIds.includes(sortedPathIdsJSON) && b > 1) {
            historyOfSortedPathIds.push(sortedPathIdsJSON); // We store all previous paths ids to avoid infinite loops because of local minima
            selectedPaths = newSelectedPaths;
            [swapAmounts, exceedingAmounts] = iterateSwapAmounts(pools, selectedPaths, swapType, totalSwapAmount, swapAmounts, exceedingAmounts, selectedPathLimitAmounts);
            [
                newSelectedPaths,
                exceedingAmounts,
                selectedPathLimitAmounts,
                pathIds,
            ] = getBestPathIds(pools, paths, swapType, swapAmounts);
            if (pathIds.length === 0)
                break;
            sortedPathIdsJSON = JSON.stringify([...pathIds].sort());
        }
        // In case b = 1 the while above was skipped and we need to define selectedPaths
        if (b == 1)
            selectedPaths = newSelectedPaths;
        totalReturn = calcTotalReturn(selectedPaths, swapType, swapAmounts);
        // Calculates the number of pools in all the paths to include the gas costs
        let totalNumberOfPools = 0;
        selectedPaths.forEach((path) => {
            totalNumberOfPools += path.swaps.length;
        });
        // improvementCondition is true if we are improving the totalReturn
        // Notice that totalReturn has to be maximized for 'swapExactIn'
        // and MINIMIZED for 'swapExactOut'
        // This is because for the case of 'swapExactOut', totalReturn means the
        // amount of tokenIn needed to buy totalSwapAmount of tokenOut
        let improvementCondition = false;
        if (swapType === SwapTypes.SwapExactIn) {
            totalReturnConsideringFees = totalReturn.minus(bnum(totalNumberOfPools).times(costReturnToken));
            improvementCondition =
                totalReturnConsideringFees.isGreaterThan(bestTotalReturnConsideringFees) || b === initialNumPaths; // b === initialNumPaths means its the first iteration so bestTotalReturnConsideringFees isn't currently a value
        }
        else {
            totalReturnConsideringFees = totalReturn.plus(bnum(totalNumberOfPools).times(costReturnToken));
            improvementCondition =
                totalReturnConsideringFees.isLessThan(bestTotalReturnConsideringFees) || b === initialNumPaths; // b === initialNumPaths means its the first iteration so bestTotalReturnConsideringFees isn't currently a value
        }
        if (improvementCondition === true) {
            bestSwapAmounts = [...swapAmounts]; // Copy to avoid linking variables
            bestPaths = [...selectedPaths];
            bestTotalReturn = totalReturn;
            bestTotalReturnConsideringFees = totalReturnConsideringFees;
        }
        else {
            break;
        }
        // Stop if max number of pools has been reached
        if (totalNumberOfPools >= maxPools)
            break;
    }
    //// Prepare swap data from paths
    let swaps = [];
    let totalSwapAmountWithRoundingErrors = new BigNumber(0);
    let dust = new BigNumber(0);
    let lenghtFirstPath;
    let highestSwapAmt = ZERO;
    let largestSwapPath;
    bestTotalReturn = ZERO; // Reset totalReturn as this time it will be
    // calculated with the EVM maths so the return is exactly what the user will get
    // after executing the transaction (given there are no front-runners)
    bestPaths.forEach((path, i) => {
        const swapAmount = bestSwapAmounts[i];
        // 0 swap amounts can occur due to rounding errors but we don't want to pass those on so filter out
        if (swapAmount.isZero())
            return;
        if (swapAmount.gt(highestSwapAmt)) {
            highestSwapAmt = swapAmount;
            largestSwapPath = path;
        }
        totalSwapAmountWithRoundingErrors =
            totalSwapAmountWithRoundingErrors.plus(swapAmount);
        // // TODO: remove. To debug only!
        /*
        console.log(
            'Prices should be all very close (unless one of the paths is on the limit!'
        );
        console.log(
            getSpotPriceAfterSwapForPath(path, swapType, swapAmount).toNumber()
        );
            */
        const poolPairData = path.poolPairData;
        if (i == 0)
            // Store lenght of first path to add dust to correct rounding error at the end
            lenghtFirstPath = path.swaps.length;
        let returnAmount;
        if (poolPairData.length == 1) {
            // Direct trade: add swap from only pool
            const swap = {
                pool: path.swaps[0].pool,
                tokenIn: path.swaps[0].tokenIn,
                tokenOut: path.swaps[0].tokenOut,
                swapAmount: swapAmount.toString(),
                limitReturnAmount: swapType === SwapTypes.SwapExactIn
                    ? minAmountOut.toString()
                    : maxAmountIn,
                maxPrice: maxPrice,
                tokenInDecimals: path.poolPairData[0].decimalsIn.toString(),
                tokenOutDecimals: path.poolPairData[0].decimalsOut.toString(),
            };
            swaps.push([swap]);
            // Call EVMgetOutputAmountSwap to guarantee pool state is updated
            returnAmount = EVMgetOutputAmountSwap(path.pools[0], poolPairData[0], swapType, swapAmount);
        }
        else {
            // Multi-hop:
            let amountSwap1, amountSwap2;
            if (swapType === SwapTypes.SwapExactIn) {
                amountSwap1 = swapAmount;
                amountSwap2 = EVMgetOutputAmountSwap(path.pools[0], poolPairData[0], swapType, swapAmount);
                // Call EVMgetOutputAmountSwap to update the pool state
                // for the second hop as well (the first was updated above)
                returnAmount = EVMgetOutputAmountSwap(path.pools[1], poolPairData[1], swapType, amountSwap2);
            }
            else {
                amountSwap1 = EVMgetOutputAmountSwap(path.pools[1], poolPairData[1], swapType, swapAmount);
                amountSwap2 = swapAmount;
                // Call EVMgetOutputAmountSwap to update the pool state
                // for the second hop as well (the first was updated above)
                returnAmount = EVMgetOutputAmountSwap(path.pools[0], poolPairData[0], swapType, amountSwap1);
            }
            // Add swap from first pool
            const swap1hop = {
                pool: path.swaps[0].pool,
                tokenIn: path.swaps[0].tokenIn,
                tokenOut: path.swaps[0].tokenOut,
                swapAmount: amountSwap1.toString(),
                limitReturnAmount: swapType === SwapTypes.SwapExactIn
                    ? minAmountOut.toString()
                    : maxAmountIn,
                maxPrice: maxPrice,
                tokenInDecimals: path.poolPairData[0].decimalsIn.toString(),
                tokenOutDecimals: path.poolPairData[0].decimalsOut.toString(),
            };
            // Add swap from second pool
            const swap2hop = {
                pool: path.swaps[1].pool,
                tokenIn: path.swaps[1].tokenIn,
                tokenOut: path.swaps[1].tokenOut,
                swapAmount: amountSwap2.toString(),
                limitReturnAmount: swapType === SwapTypes.SwapExactIn
                    ? minAmountOut.toString()
                    : maxAmountIn,
                maxPrice: maxPrice,
                tokenInDecimals: path.poolPairData[1].decimalsIn.toString(),
                tokenOutDecimals: path.poolPairData[1].decimalsOut.toString(),
            };
            swaps.push([swap1hop, swap2hop]);
        }
        // Update bestTotalReturn with EVM return
        bestTotalReturn = bestTotalReturn.plus(returnAmount);
    });
    // Since the individual swapAmounts for each path are integers, the sum of all swapAmounts
    // might not be exactly equal to the totalSwapAmount the user requested. We need to correct that rounding error
    // and we do that by adding the rounding error to the first path.
    if (swaps.length > 0) {
        dust = totalSwapAmount.minus(totalSwapAmountWithRoundingErrors);
        if (swapType === SwapTypes.SwapExactIn) {
            swaps[0][0].swapAmount = new BigNumber(swaps[0][0].swapAmount)
                .plus(dust)
                .toString(); // Add dust to first swapExactIn
        }
        else {
            if (lenghtFirstPath == 1)
                // First path is a direct path (only one pool)
                swaps[0][0].swapAmount = new BigNumber(swaps[0][0].swapAmount)
                    .plus(dust)
                    .toString();
            // Add dust to first swapExactOut
            // First path is a multihop path (two pools)
            else
                swaps[0][1].swapAmount = new BigNumber(swaps[0][1].swapAmount)
                    .plus(dust)
                    .toString(); // Add dust to second swapExactOut
        }
    }
    let marketSp = ZERO;
    if (!bestTotalReturn.eq(0))
        marketSp = getSpotPriceAfterSwapForPath(largestSwapPath, swapType, ZERO);
    else {
        swaps = [];
        marketSp = ZERO;
        bestTotalReturnConsideringFees = ZERO;
    }
    return [swaps, bestTotalReturn, marketSp, bestTotalReturnConsideringFees];
};
//  For a given list of swapAmounts, gets list of pools with best effective price for these amounts
//  Always choose best pool for highest swapAmount first, then 2nd swapAmount and so on. This is
//  because it's best to use the best effective price for the highest amount to be traded
function getBestPathIds(pools, originalPaths, swapType, swapAmounts) {
    const bestPathIds = [];
    const selectedPaths = [];
    const selectedPathLimitAmounts = [];
    const selectedPathExceedingAmounts = [];
    const paths = cloneDeep(originalPaths); // Deep copy to avoid changing the original path data
    // Sort swapAmounts in descending order without changing original: https://stackoverflow.com/a/42442909
    const sortedSwapAmounts = [...swapAmounts].sort((a, b) => {
        return b.minus(a).toNumber();
    });
    for (let i = 0; i < sortedSwapAmounts.length; i++) {
        const swapAmount = sortedSwapAmounts[i];
        // Find path that has best effective price
        let bestPathIndex = -1;
        let bestEffectivePrice = INFINITY$1; // Start with worst price possible
        paths.forEach((path, j) => {
            // Do not consider this path if its limit is below swapAmount
            if (path.limitAmount.gte(swapAmount)) {
                // Calculate effective price of this path for this swapAmount
                // If path.limitAmount = swapAmount we set effectivePrice as
                // Infinity because we know this path is maxed out and we want
                // to select other paths that can still be improved on
                let effectivePrice;
                if (path.limitAmount.eq(swapAmount)) {
                    effectivePrice = INFINITY$1;
                }
                else {
                    // TODO for optimization: pass already calculated limitAmount as input
                    // to getEffectivePriceSwapForPath()
                    effectivePrice = getEffectivePriceSwapForPath(pools, path, swapType, swapAmount);
                }
                if (effectivePrice.lte(bestEffectivePrice)) {
                    bestEffectivePrice = effectivePrice;
                    bestPathIndex = j;
                }
            }
        });
        if (bestPathIndex === -1) {
            return [[], [], [], []];
        }
        bestPathIds.push(paths[bestPathIndex].id);
        selectedPaths.push(paths[bestPathIndex]);
        selectedPathLimitAmounts.push(paths[bestPathIndex].limitAmount);
        selectedPathExceedingAmounts.push(swapAmount.minus(paths[bestPathIndex].limitAmount));
        paths.splice(bestPathIndex, 1); // Remove path from list
    }
    return [
        selectedPaths,
        selectedPathExceedingAmounts,
        selectedPathLimitAmounts,
        bestPathIds,
    ];
}
// This functions finds the swapAmounts such that all the paths that have viable swapAmounts (i.e.
// that are not negative or equal to limitAmount) bring their respective prices after swap to the
// same price (which means that this is the optimal solution for the paths analyzed)
function iterateSwapAmounts(pools, selectedPaths, swapType, totalSwapAmount, swapAmounts, exceedingAmounts, pathLimitAmounts) {
    let priceError = ONE; // Initialize priceError just so that while starts
    let prices = [];
    // // Since this is the beginning of an iteration with a new set of paths, we
    // // set any swapAmounts that were 0 previously to 1 wei or at the limit
    // // to limit minus 1 wei just so that they
    // // are considered as viable for iterateSwapAmountsApproximation(). If they were
    // // left at 0 iterateSwapAmountsApproximation() would consider them already outside
    // // the viable range and would not iterate on them. This is useful when
    // // iterateSwapAmountsApproximation() is being repeatedly called within the while loop
    // // below, but not when a new execution of iterateSwapAmounts() happens with new
    // // paths.
    // for (let i = 0; i < swapAmounts.length; ++i) {
    //     if (swapAmounts[i].isZero()) {
    //         // Very small amount: TODO put in config file
    //         const epsilon = totalSwapAmount.times(INFINITESIMAL);
    //         swapAmounts[i] = epsilon;
    //         exceedingAmounts[i] = exceedingAmounts[i].plus(epsilon);
    //     }
    //     if (exceedingAmounts[i].isZero()) {
    //         // Very small amount: TODO put in config file
    //         const epsilon = totalSwapAmount.times(INFINITESIMAL);
    //         swapAmounts[i] = swapAmounts[i].minus(epsilon); // Very small amount
    //         exceedingAmounts[i] = exceedingAmounts[i].minus(epsilon);
    //     }
    // }
    let iterationCount = 0;
    while (priceError.isGreaterThan(PRICE_ERROR_TOLERANCE)) {
        [prices, swapAmounts, exceedingAmounts] =
            iterateSwapAmountsApproximation(pools, selectedPaths, swapType, totalSwapAmount, swapAmounts, exceedingAmounts, pathLimitAmounts, iterationCount);
        const maxPrice = BigNumber.max.apply(null, prices);
        const minPrice = BigNumber.min.apply(null, prices);
        priceError = maxPrice.minus(minPrice).div(minPrice);
        iterationCount++;
        if (iterationCount > 100)
            break;
    }
    return [swapAmounts, exceedingAmounts];
}
function iterateSwapAmountsApproximation(pools, selectedPaths, swapType, totalSwapAmount, swapAmounts, exceedingAmounts, // This is the amount by which swapAmount exceeds the pool limit_amount
pathLimitAmounts, iterationCount) {
    let sumInverseDerivativeSPaSs = ZERO;
    let sumSPaSDividedByDerivativeSPaSs = ZERO;
    const SPaSs = [];
    const derivativeSPaSs = [];
    // We only iterate on the swapAmounts that are viable (i.e. no negative or > than path limit)
    // OR if this is the first time "iterateSwapAmountsApproximation" is called
    // within "iterateSwapAmounts()". In this case swapAmounts should be considered viable
    // also if they are on the limit.
    swapAmounts.forEach((swapAmount, i) => {
        // if (swapAmount.gt(ZERO) && exceedingAmounts[i].lt(ZERO)) {
        if ((iterationCount == 0 &&
            swapAmount.gte(ZERO) &&
            exceedingAmounts[i].lte(ZERO)) ||
            (iterationCount != 0 &&
                swapAmount.gt(ZERO) &&
                exceedingAmounts[i].lt(ZERO))) {
            const path = selectedPaths[i];
            const SPaS = getSpotPriceAfterSwapForPath(path, swapType, swapAmount);
            SPaSs.push(SPaS);
            const derivative_SPaS = getDerivativeSpotPriceAfterSwapForPath(path, swapType, swapAmount);
            derivativeSPaSs.push(derivative_SPaS);
            sumInverseDerivativeSPaSs = sumInverseDerivativeSPaSs.plus(ONE.div(derivative_SPaS));
            sumSPaSDividedByDerivativeSPaSs =
                sumSPaSDividedByDerivativeSPaSs.plus(SPaS.div(derivative_SPaS));
        }
        else {
            // This swapAmount is not viable but we push to keep list length consistent
            derivativeSPaSs.push(bnum('NaN'));
            SPaSs.push(bnum('NaN'));
        }
    });
    // // This division using BigNumber below lost precision. Its result was for example
    // 1.042818e-12 while using normal js math operations it was
    // 1.0428184989387553e-12. This loss of precision caused an important bug
    // let weighted_average_SPaS = sumSPaSDividedByDerivativeSPaSs.div(
    //     sumInverseDerivativeSPaSs
    // );
    const weighted_average_SPaS = bnum(sumSPaSDividedByDerivativeSPaSs.toNumber() /
        sumInverseDerivativeSPaSs.toNumber());
    swapAmounts.forEach((swapAmount, i) => {
        if ((iterationCount == 0 &&
            swapAmount.gte(ZERO) &&
            exceedingAmounts[i].lte(ZERO)) ||
            (iterationCount != 0 &&
                swapAmount.gt(ZERO) &&
                exceedingAmounts[i].lt(ZERO))) {
            const deltaSwapAmount = weighted_average_SPaS
                .minus(SPaSs[i])
                .div(derivativeSPaSs[i]);
            swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
            exceedingAmounts[i] = exceedingAmounts[i].plus(deltaSwapAmount);
        }
    });
    // Make sure no input amount is negative or above the path limit
    while (BigNumber.min.apply(null, swapAmounts).lt(ZERO) ||
        BigNumber.max.apply(null, exceedingAmounts).gt(ZERO)) {
        [swapAmounts, exceedingAmounts] = redistributeInputAmounts(swapAmounts, exceedingAmounts, derivativeSPaSs);
    }
    const pricesForViableAmounts = []; // Get prices for all non-negative AND below-limit input amounts
    let swapAmountsSumWithRoundingErrors = ZERO;
    swapAmounts.forEach((swapAmount, i) => {
        swapAmountsSumWithRoundingErrors =
            swapAmountsSumWithRoundingErrors.plus(swapAmount);
        if ((iterationCount == 0 &&
            swapAmount.gte(ZERO) &&
            exceedingAmounts[i].lte(ZERO)) ||
            (iterationCount != 0 &&
                swapAmount.gt(ZERO) &&
                exceedingAmounts[i].lt(ZERO)))
            pricesForViableAmounts.push(getSpotPriceAfterSwapForPath(selectedPaths[i], swapType, swapAmount));
    });
    const roundingError = totalSwapAmount.minus(swapAmountsSumWithRoundingErrors);
    // console.log("Rounding error")
    // console.log(roundingError.div(totalSwapAmount).toNumber())
    // // let errorLimit = totalSwapAmount.times(bnum(0.001))
    // // if(roundingError>errorLimit)
    // //     throw "Rounding error in iterateSwapAmountsApproximation() too large";
    // Add rounding error to make sum be exactly equal to totalSwapAmount to avoid error compounding
    // Add to the first swapAmount that is already not zero or at the limit
    // AND only if swapAmount would not leave the viable range (i.e. swapAmoung
    // would still be >0 and <limit) after adding the error
    // I.d. we need: (swapAmount+error)>0 AND (exceedingAmount+error)<0
    for (let i = 0; i < swapAmounts.length; ++i) {
        if (swapAmounts[i].gt(ZERO) && exceedingAmounts[i].lt(ZERO)) {
            if (swapAmounts[i].plus(roundingError).gt(ZERO) &&
                exceedingAmounts[i].plus(roundingError).lt(ZERO)) {
                swapAmounts[i] = swapAmounts[i].plus(roundingError);
                exceedingAmounts[i] = exceedingAmounts[i].plus(roundingError);
                break;
            }
        }
    }
    return [pricesForViableAmounts, swapAmounts, exceedingAmounts];
}
function redistributeInputAmounts(swapAmounts, exceedingAmounts, derivativeSPaSs) {
    let sumInverseDerivativeSPaSsForViableAmounts = ZERO;
    let sumInverseDerivativeSPaSsForNegativeAmounts = ZERO;
    let sumInverseDerivativeSPaSsForExceedingAmounts = ZERO;
    let sumNegativeOrExceedingSwapAmounts = ZERO;
    swapAmounts.forEach((swapAmount, i) => {
        // Amount is negative
        if (swapAmount.lte(ZERO)) {
            sumNegativeOrExceedingSwapAmounts =
                sumNegativeOrExceedingSwapAmounts.plus(swapAmount);
            sumInverseDerivativeSPaSsForNegativeAmounts =
                sumInverseDerivativeSPaSsForNegativeAmounts.plus(ONE.div(derivativeSPaSs[i]));
        }
        // Amount is above limit (exceeding > 0)
        else if (exceedingAmounts[i].gte(ZERO)) {
            sumNegativeOrExceedingSwapAmounts =
                sumNegativeOrExceedingSwapAmounts.plus(exceedingAmounts[i]);
            sumInverseDerivativeSPaSsForExceedingAmounts =
                sumInverseDerivativeSPaSsForExceedingAmounts.plus(ONE.div(derivativeSPaSs[i]));
        }
        // Sum the inverse of the derivative if the swapAmount is viable,
        // i.e. if swapAmount > 0 or swapAmount < limit
        else
            sumInverseDerivativeSPaSsForViableAmounts =
                sumInverseDerivativeSPaSsForViableAmounts.plus(ONE.div(derivativeSPaSs[i]));
    });
    // Now redestribute sumNegativeOrExceedingSwapAmounts
    // to non-exceeding pools if sumNegativeOrExceedingSwapAmounts > 0
    // or to non zero swapAmount pools if sumNegativeOrExceedingSwapAmounts < 0
    swapAmounts.forEach((swapAmount, i) => {
        if (swapAmount.lte(ZERO)) {
            swapAmounts[i] = ZERO;
            exceedingAmounts[i] = exceedingAmounts[i].minus(swapAmount);
        }
        else if (exceedingAmounts[i].gte(ZERO)) {
            swapAmounts[i] = swapAmounts[i].minus(exceedingAmounts[i]); // This is the same as swapAmounts[i] = pathLimitAmounts[i]
            exceedingAmounts[i] = ZERO;
        }
        else {
            const deltaSwapAmount = sumNegativeOrExceedingSwapAmounts
                .times(ONE.div(derivativeSPaSs[i]))
                .div(sumInverseDerivativeSPaSsForViableAmounts);
            swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
            exceedingAmounts[i] = exceedingAmounts[i].plus(deltaSwapAmount);
        }
    });
    // If there were no viable amounts (i.e all amounts were either negative or above limit)
    // We run this extra loop to redistribute the excess
    if (sumInverseDerivativeSPaSsForViableAmounts.isZero()) {
        if (sumNegativeOrExceedingSwapAmounts.lt(ZERO)) {
            // This means we need to redistribute to the exceeding amounts that
            // were now set to the limit
            swapAmounts.forEach((swapAmount, i) => {
                if (exceedingAmounts[i].isZero()) {
                    const deltaSwapAmount = sumNegativeOrExceedingSwapAmounts
                        .times(ONE.div(derivativeSPaSs[i]))
                        .div(sumInverseDerivativeSPaSsForExceedingAmounts);
                    swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
                    exceedingAmounts[i] =
                        exceedingAmounts[i].plus(deltaSwapAmount);
                }
            });
        }
        else {
            // This means we need to redistribute to the negative amounts that
            // were now set to zero
            swapAmounts.forEach((swapAmount, i) => {
                if (swapAmounts[i].isZero()) {
                    const deltaSwapAmount = sumNegativeOrExceedingSwapAmounts
                        .times(ONE.div(derivativeSPaSs[i]))
                        .div(sumInverseDerivativeSPaSsForNegativeAmounts);
                    swapAmounts[i] = swapAmounts[i].plus(deltaSwapAmount);
                    exceedingAmounts[i] =
                        exceedingAmounts[i].plus(deltaSwapAmount);
                }
            });
        }
    }
    return [swapAmounts, exceedingAmounts];
}
// TODO: calculate EVM return (use bmath) and update pool balances like current SOR
const calcTotalReturn = (paths, swapType, swapAmounts) => {
    let totalReturn = new BigNumber(0);
    // changing the contents of pools (parameter passed as reference)
    paths.forEach((path, i) => {
        totalReturn = totalReturn.plus(getOutputAmountSwapForPath(path, swapType, swapAmounts[i]));
    });
    return totalReturn;
};

var vaultAbi = [
	{
		inputs: [
			{
				internalType: "contract IAuthorizer",
				name: "authorizer",
				type: "address"
			},
			{
				internalType: "contract IWETH",
				name: "weth",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "pauseWindowDuration",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "bufferPeriodDuration",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract IAuthorizer",
				name: "newAuthorizer",
				type: "address"
			}
		],
		name: "AuthorizerChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "ExternalBalanceTransfer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "contract IFlashLoanRecipient",
				name: "recipient",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "feeAmount",
				type: "uint256"
			}
		],
		name: "FlashLoan",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "int256",
				name: "delta",
				type: "int256"
			}
		],
		name: "InternalBalanceChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bool",
				name: "paused",
				type: "bool"
			}
		],
		name: "PausedStateChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "liquidityProvider",
				type: "address"
			},
			{
				indexed: false,
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				indexed: false,
				internalType: "int256[]",
				name: "deltas",
				type: "int256[]"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "protocolFeeAmounts",
				type: "uint256[]"
			}
		],
		name: "PoolBalanceChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "assetManager",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "int256",
				name: "cashDelta",
				type: "int256"
			},
			{
				indexed: false,
				internalType: "int256",
				name: "managedDelta",
				type: "int256"
			}
		],
		name: "PoolBalanceManaged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "poolAddress",
				type: "address"
			},
			{
				indexed: false,
				internalType: "enum IVault.PoolSpecialization",
				name: "specialization",
				type: "uint8"
			}
		],
		name: "PoolRegistered",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "relayer",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "RelayerApprovalChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "tokenIn",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "tokenOut",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			}
		],
		name: "TokensDeregistered",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				indexed: false,
				internalType: "address[]",
				name: "assetManagers",
				type: "address[]"
			}
		],
		name: "TokensRegistered",
		type: "event"
	},
	{
		inputs: [
		],
		name: "WETH",
		outputs: [
			{
				internalType: "contract IWETH",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "enum IVault.SwapKind",
				name: "kind",
				type: "uint8"
			},
			{
				components: [
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "assetInIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "assetOutIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IVault.BatchSwapStep[]",
				name: "swaps",
				type: "tuple[]"
			},
			{
				internalType: "contract IAsset[]",
				name: "assets",
				type: "address[]"
			},
			{
				components: [
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.FundManagement",
				name: "funds",
				type: "tuple"
			},
			{
				internalType: "int256[]",
				name: "limits",
				type: "int256[]"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "batchSwap",
		outputs: [
			{
				internalType: "int256[]",
				name: "assetDeltas",
				type: "int256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			}
		],
		name: "deregisterTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address payable",
				name: "recipient",
				type: "address"
			},
			{
				components: [
					{
						internalType: "contract IAsset[]",
						name: "assets",
						type: "address[]"
					},
					{
						internalType: "uint256[]",
						name: "minAmountsOut",
						type: "uint256[]"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.ExitPoolRequest",
				name: "request",
				type: "tuple"
			}
		],
		name: "exitPool",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IFlashLoanRecipient",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "flashLoan",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "selector",
				type: "bytes4"
			}
		],
		name: "getActionId",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getAuthorizer",
		outputs: [
			{
				internalType: "contract IAuthorizer",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getDomainSeparator",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			}
		],
		name: "getInternalBalance",
		outputs: [
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			}
		],
		name: "getNextNonce",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getPausedState",
		outputs: [
			{
				internalType: "bool",
				name: "paused",
				type: "bool"
			},
			{
				internalType: "uint256",
				name: "pauseWindowEndTime",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "bufferPeriodEndTime",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			}
		],
		name: "getPool",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "enum IVault.PoolSpecialization",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "contract IERC20",
				name: "token",
				type: "address"
			}
		],
		name: "getPoolTokenInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "cash",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "managed",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "assetManager",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			}
		],
		name: "getPoolTokens",
		outputs: [
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getProtocolFeesCollector",
		outputs: [
			{
				internalType: "contract ProtocolFeesCollector",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				internalType: "address",
				name: "relayer",
				type: "address"
			}
		],
		name: "hasApprovedRelayer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				components: [
					{
						internalType: "contract IAsset[]",
						name: "assets",
						type: "address[]"
					},
					{
						internalType: "uint256[]",
						name: "maxAmountsIn",
						type: "uint256[]"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.JoinPoolRequest",
				name: "request",
				type: "tuple"
			}
		],
		name: "joinPool",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "enum IVault.PoolBalanceOpKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "contract IERC20",
						name: "token",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}
				],
				internalType: "struct IVault.PoolBalanceOp[]",
				name: "ops",
				type: "tuple[]"
			}
		],
		name: "managePoolBalance",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "enum IVault.UserBalanceOpKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "contract IAsset",
						name: "asset",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					}
				],
				internalType: "struct IVault.UserBalanceOp[]",
				name: "ops",
				type: "tuple[]"
			}
		],
		name: "manageUserBalance",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "enum IVault.SwapKind",
				name: "kind",
				type: "uint8"
			},
			{
				components: [
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "assetInIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "assetOutIndex",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IVault.BatchSwapStep[]",
				name: "swaps",
				type: "tuple[]"
			},
			{
				internalType: "contract IAsset[]",
				name: "assets",
				type: "address[]"
			},
			{
				components: [
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.FundManagement",
				name: "funds",
				type: "tuple"
			}
		],
		name: "queryBatchSwap",
		outputs: [
			{
				internalType: "int256[]",
				name: "",
				type: "int256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "enum IVault.PoolSpecialization",
				name: "specialization",
				type: "uint8"
			}
		],
		name: "registerPool",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "address[]",
				name: "assetManagers",
				type: "address[]"
			}
		],
		name: "registerTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IAuthorizer",
				name: "newAuthorizer",
				type: "address"
			}
		],
		name: "setAuthorizer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "paused",
				type: "bool"
			}
		],
		name: "setPaused",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "relayer",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setRelayerApproval",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "enum IVault.SwapKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "contract IAsset",
						name: "assetIn",
						type: "address"
					},
					{
						internalType: "contract IAsset",
						name: "assetOut",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IVault.SingleSwap",
				name: "singleSwap",
				type: "tuple"
			},
			{
				components: [
					{
						internalType: "address",
						name: "sender",
						type: "address"
					},
					{
						internalType: "bool",
						name: "fromInternalBalance",
						type: "bool"
					},
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "bool",
						name: "toInternalBalance",
						type: "bool"
					}
				],
				internalType: "struct IVault.FundManagement",
				name: "funds",
				type: "tuple"
			},
			{
				internalType: "uint256",
				name: "limit",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swap",
		outputs: [
			{
				internalType: "uint256",
				name: "amountCalculated",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];

const WETHADDR = {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    5: '0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd',
    42: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
    137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
};
const MULTIADDR = {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    5: '0x3b2A02F22fCbc872AF77674ceD303eb269a46ce3',
    42: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
    137: '0xa1B2b503959aedD81512C37e9dce48164ec6a94d',
    42161: '0x269ff446d9892c9e19082564df3f5e8741e190a1',
};
const VAULTADDR = {
    1: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    5: '0x65748E8287Ce4B9E6D83EE853431958851550311',
    42: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    137: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    42161: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
};
const EMPTY_SWAPINFO = {
    tokenAddresses: [],
    swaps: [],
    swapAmount: ZERO,
    swapAmountForSwaps: ZERO,
    tokenIn: '',
    tokenOut: '',
    returnAmount: ZERO,
    returnAmountConsideringFees: ZERO,
    returnAmountFromSwaps: ZERO,
    marketSp: ZERO,
};

const Lido = {
    Networks: [1, 42],
    stETH: {
        1: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        42: '0x4803bb90d18a1cb7a2187344fe4feb0e07878d05',
    },
    wstETH: {
        1: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
        42: '0xa387b91e393cfb9356a460370842bc8dbb2f29af',
    },
    WETH: {
        1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        42: '0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1',
    },
    DAI: {
        1: '0x6b175474e89094c44da98b954eedeac495271d0f',
        42: '0x04df6e4121c27713ed22341e7c7df330f56f289b',
    },
    USDC: {
        1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        42: '0xc2569dd7d0fd715b054fbf16e75b001e5c0c1115',
    },
    USDT: {
        1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        42: '0xcc08220af469192c53295fdd34cfb8df29aa17ab',
    },
    StaticPools: {
        // DAI/USDC/USDT
        staBal: {
            1: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
            42: '0x45f78862bd3aa5205e63141fa7f2d35f38eb87c30000000000000000000000fd',
        },
        // WETH/DAI (WETH/USDC on Kovan)
        wethDai: {
            1: '0x0b09dea16768f0799065c475be02919503cb2a3500020000000000000000001a',
            42: '0x3a19030ed746bd1c3f2b0f996ff9479af04c5f0a000200000000000000000004',
        },
        // WETH/wstETH Lido Pool
        wstEthWeth: {
            1: '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
            42: '0xe08590bde837eb9b2d42aa1196469d6e08fe96ec000200000000000000000101',
        },
    },
};
const Routes = {
    1: {},
    42: {},
};
// MAINNET STATIC ROUTES FOR LIDO <> Stable
// DAI/wstETH: DAI > WETH > wstETH
Routes[1][`${Lido.DAI[1]}${Lido.wstETH[1]}0`] = {
    name: 'DAI/wstETH-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// wstETH/DAI: wstETH > WETH > DAI
Routes[1][`${Lido.wstETH[1]}${Lido.DAI[1]}0`] = {
    name: 'wstETH/DAI-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// DAI/wstETH: DAI > WETH > wstETH
Routes[1][`${Lido.DAI[1]}${Lido.wstETH[1]}1`] = {
    name: 'DAI/wstETH-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/DAI: wstETH > WETH > DAI
Routes[1][`${Lido.wstETH[1]}${Lido.DAI[1]}1`] = {
    name: 'wstETH/DAI-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// USDC/wstETH: USDC > DAI > WETH > wstETH
Routes[1][`${Lido.USDC[1]}${Lido.wstETH[1]}0`] = {
    name: 'USDC/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.USDC[1]}${Lido.wstETH[1]}1`] = {
    name: 'USDC/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDC: wstETH > WETH > DAI > USDC
Routes[1][`${Lido.wstETH[1]}${Lido.USDC[1]}0`] = {
    name: 'wstETH/USDC-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDC[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.wstETH[1]}${Lido.USDC[1]}1`] = {
    name: 'wstETH/USDC-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDC[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// USDT/wstETH: USDT > DAI > WETH > wstETH
Routes[1][`${Lido.USDT[1]}${Lido.wstETH[1]}0`] = {
    name: 'USDT/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDT[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.USDT[1]}${Lido.wstETH[1]}1`] = {
    name: 'USDT/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDT[1], Lido.DAI[1], Lido.WETH[1], Lido.wstETH[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDT: wstETH > WETH > DAI > USDT
Routes[1][`${Lido.wstETH[1]}${Lido.USDT[1]}0`] = {
    name: 'wstETH/USDT-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDT[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[1][`${Lido.wstETH[1]}${Lido.USDT[1]}1`] = {
    name: 'wstETH/USDT-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[1], Lido.WETH[1], Lido.DAI[1], Lido.USDT[1]],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[1],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[1],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[1],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// KOVAN STATIC ROUTES FOR LIDO <> Stable
// USDC/wstETH: USDC > WETH > wstETH
Routes[42][`${Lido.USDC[42]}${Lido.wstETH[42]}0`] = {
    name: 'USDC/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[42], Lido.WETH[42], Lido.wstETH[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// wstETH/USDC: wstETH > WETH > USDC
Routes[42][`${Lido.wstETH[42]}${Lido.USDC[42]}0`] = {
    name: 'wstETH/USDC-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[42], Lido.WETH[42], Lido.USDC[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
    ],
};
// USDC/wstETH: USDC > WETH > wstETH
Routes[42][`${Lido.USDC[42]}${Lido.wstETH[42]}1`] = {
    name: 'USDC/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [Lido.USDC[42], Lido.WETH[42], Lido.wstETH[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDC: wstETH > WETH > USDC
Routes[42][`${Lido.wstETH[42]}${Lido.USDC[42]}1`] = {
    name: 'wstETH/USDC-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [Lido.wstETH[42], Lido.WETH[42], Lido.USDC[42]],
    swaps: [
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// DAI/wstETH: DAI > USDC > WETH > wstETH
Routes[42][`${Lido.DAI[42]}${Lido.wstETH[42]}0`] = {
    name: 'DAI/wstETH-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.DAI[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.DAI[42]}${Lido.wstETH[42]}1`] = {
    name: 'DAI/wstETH-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.DAI[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/DAI: wstETH > WETH > USDC > DAI
Routes[42][`${Lido.wstETH[42]}${Lido.DAI[42]}0`] = {
    name: 'wstETH/DAI-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.DAI[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.wstETH[42]}${Lido.DAI[42]}1`] = {
    name: 'wstETH/DAI-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.DAI[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// USDT/wstETH: USDT > USDC > WETH > wstETH
Routes[42][`${Lido.USDT[42]}${Lido.wstETH[42]}0`] = {
    name: 'USDT/wstETH-SwapExactIn',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.USDT[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.USDT[42]}${Lido.wstETH[42]}1`] = {
    name: 'USDT/wstETH-SwapExactOut',
    tokenInDecimals: 6,
    tokenOutDecimals: 18,
    tokenAddresses: [
        Lido.USDT[42],
        Lido.USDC[42],
        Lido.WETH[42],
        Lido.wstETH[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// wstETH/USDT: wstETH > WETH > USDC > USDT
Routes[42][`${Lido.wstETH[42]}${Lido.USDT[42]}0`] = {
    name: 'wstETH/USDT-SwapExactIn',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.USDT[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '0',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
    ],
};
Routes[42][`${Lido.wstETH[42]}${Lido.USDT[42]}1`] = {
    name: 'wstETH/USDT-SwapExactOut',
    tokenInDecimals: 18,
    tokenOutDecimals: 6,
    tokenAddresses: [
        Lido.wstETH[42],
        Lido.WETH[42],
        Lido.USDC[42],
        Lido.USDT[42],
    ],
    swaps: [
        {
            poolId: Lido.StaticPools.staBal[42],
            amount: '',
            assetInIndex: '2',
            assetOutIndex: '3',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wethDai[42],
            amount: '0',
            assetInIndex: '1',
            assetOutIndex: '2',
            userData: '0x',
        },
        {
            poolId: Lido.StaticPools.wstEthWeth[42],
            amount: '0',
            assetInIndex: '0',
            assetOutIndex: '1',
            userData: '0x',
        },
    ],
};
// Only want static routes for Lido <> Stable
function isLidoStableSwap(chainId, tokenIn, tokenOut) {
    if (!Lido.Networks.includes(chainId))
        return false;
    tokenIn = tokenIn.toLowerCase();
    tokenOut = tokenOut.toLowerCase();
    if ((tokenIn === Lido.wstETH[chainId] && tokenOut === Lido.DAI[chainId]) ||
        (tokenIn === Lido.wstETH[chainId] && tokenOut === Lido.USDC[chainId]) ||
        (tokenIn === Lido.wstETH[chainId] && tokenOut === Lido.USDT[chainId]) ||
        (tokenIn === Lido.DAI[chainId] && tokenOut === Lido.wstETH[chainId]) ||
        (tokenIn === Lido.USDC[chainId] && tokenOut === Lido.wstETH[chainId]) ||
        (tokenIn === Lido.USDT[chainId] && tokenOut === Lido.wstETH[chainId]) ||
        (tokenIn === Lido.stETH[chainId] && tokenOut === Lido.DAI[chainId]) ||
        (tokenIn === Lido.stETH[chainId] && tokenOut === Lido.USDC[chainId]) ||
        (tokenIn === Lido.stETH[chainId] && tokenOut === Lido.USDT[chainId]) ||
        (tokenIn === Lido.DAI[chainId] && tokenOut === Lido.stETH[chainId]) ||
        (tokenIn === Lido.USDC[chainId] && tokenOut === Lido.stETH[chainId]) ||
        (tokenIn === Lido.USDT[chainId] && tokenOut === Lido.stETH[chainId]))
        return true;
    else
        return false;
}
// Uses Vault queryBatchSwap to get return amount for swap
function queryBatchSwap(swapType, swaps, assets, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const vaultAddr = '0xBA12222222228d8Ba445958a75a0704d566BF2C8';
        const vaultContract = new Contract(vaultAddr, vaultAbi, provider);
        const funds = {
            sender: AddressZero,
            recipient: AddressZero,
            fromInternalBalance: false,
            toInternalBalance: false,
        };
        try {
            const deltas = yield vaultContract.callStatic.queryBatchSwap(swapType, swaps, assets, funds);
            // negative amounts represent tokens (or ETH) sent by the Vault
            if (swapType === SwapTypes.SwapExactIn)
                return bnum(deltas[assets.length - 1].toString()).times(-1);
            else
                return bnum(deltas[0].toString());
        }
        catch (err) {
            console.error(`SOR - Lido Static Route QueryBatchSwap Error. No swaps.`);
            return bnum(0);
        }
    });
}
/*
Spot Price for path is product of each pools SP for relevant tokens.
(See helpersClass getSpotPriceAfterSwapForPath)
*/
function calculateMarketSp(swapType, swaps, assets, pools) {
    const spotPrices = [];
    for (let i = 0; i < swaps.length; i++) {
        const swap = swaps[i];
        // Find matching pool from list so we can use balances, etc
        const pool = pools.filter((p) => p.id === swap.poolId);
        if (pool.length !== 1)
            return bnum(0);
        // This will get a specific pool type so we can call parse and spot price functions
        const newPool = parseNewPool(pool[0]);
        if (!newPool)
            return bnum(0);
        // Parses relevant balances, etc
        const poolPairData = newPool.parsePoolPairData(assets[swap.assetInIndex], assets[swap.assetOutIndex]);
        // Calculate current spot price
        let spotPrice;
        if (swapType === SwapTypes.SwapExactIn)
            spotPrice = newPool._spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, ZERO);
        // Amount = 0 to just get current SP
        else
            spotPrice = newPool._spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, ZERO); // Amount = 0 to just get current SP
        // console.log(`${swap.poolId} ${spotPrice.toString()}`);
        spotPrices.push(spotPrice);
    }
    // SP for Path is product of all
    return spotPrices.reduce((a, b) => a.times(b));
}
function getStEthRate(provider, chainId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Call stEthPerToken or tokensPerStETH to get the scaling factors in each direction.
        const wstETHContract = new Contract(Lido.wstETH[chainId], ['function tokensPerStEth() external view returns (uint256)'], provider);
        const rate = yield wstETHContract.tokensPerStEth();
        return scale(bnum(rate.toString()), -18);
    });
}
/*
Used when SOR doesn't support paths with more than one hop.
Enables swapping of stables <> wstETH via WETH/DAI pool which has good liquidity.
*/
function getLidoStaticSwaps(pools, chainId, tokenIn, tokenOut, swapType, swapAmount, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        // Check for stETH tokens and convert to use wstETH for routing
        let isWrappingIn, isWrappingOut = false;
        if (tokenIn === Lido.stETH[chainId]) {
            tokenIn = Lido.wstETH[chainId];
            isWrappingIn = true;
        }
        if (tokenOut === Lido.stETH[chainId]) {
            tokenOut = Lido.wstETH[chainId];
            isWrappingOut = true;
        }
        const swapInfo = cloneDeep(EMPTY_SWAPINFO);
        const staticRoute = Routes[chainId][`${tokenIn}${tokenOut}${swapType}`];
        if (!staticRoute)
            return swapInfo;
        swapInfo.tokenAddresses = staticRoute.tokenAddresses;
        swapInfo.swaps = staticRoute.swaps;
        if (swapType === SwapTypes.SwapExactIn)
            swapInfo.swapAmount = scale(swapAmount, staticRoute.tokenInDecimals).dp(0);
        else
            swapInfo.swapAmount = scale(swapAmount, staticRoute.tokenOutDecimals).dp(0);
        swapInfo.swaps[0].amount = swapInfo.swapAmount.toString();
        if (isWrappingIn)
            swapInfo.tokenIn = Lido.stETH[chainId];
        else
            swapInfo.tokenIn = tokenIn;
        if (isWrappingOut)
            swapInfo.tokenOut = Lido.stETH[chainId];
        else
            swapInfo.tokenOut = tokenOut;
        // Calculate SP as product of all pool SP in path
        swapInfo.marketSp = calculateMarketSp(swapType, swapInfo.swaps, swapInfo.tokenAddresses, pools);
        // Unlike main SOR here we haven't calculated the return amount for swaps so use query call on Vault to get value.
        swapInfo.returnAmount = yield queryBatchSwap(swapType, swapInfo.swaps, swapInfo.tokenAddresses, provider);
        if (swapInfo.returnAmount.isZero()) {
            return Object.assign({}, EMPTY_SWAPINFO);
        }
        // Considering fees shouldn't matter as there won't be alternative options on V1
        swapInfo.returnAmountConsideringFees = swapInfo.returnAmount;
        return swapInfo;
    });
}

const isSameAddress = (address1, address2) => getAddress(address1) === getAddress(address2);

var WrapTypes;
(function (WrapTypes) {
    WrapTypes[WrapTypes["None"] = 0] = "None";
    WrapTypes[WrapTypes["ETH"] = 1] = "ETH";
    WrapTypes[WrapTypes["stETH"] = 2] = "stETH";
})(WrapTypes || (WrapTypes = {}));
function getWrappedInfo(provider, swapType, tokenIn, tokenOut, chainId, swapAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        // The Subgraph returns tokens in lower case format so we must match this
        tokenIn = tokenIn.toLowerCase();
        tokenOut = tokenOut.toLowerCase();
        let swapAmountForSwaps = swapAmount;
        let tokenInForSwaps = tokenIn;
        let tokenInWrapType = WrapTypes.None;
        let tokenOutForSwaps = tokenOut;
        let tokenOutWrapType = WrapTypes.None;
        let tokenInRate = bnum(1);
        let tokenOutRate = bnum(1);
        // Handle ETH wrapping
        if (tokenIn === AddressZero) {
            tokenInForSwaps = WETHADDR[chainId].toLowerCase();
            tokenInWrapType = WrapTypes.ETH;
        }
        if (tokenOut === AddressZero) {
            tokenOutForSwaps = WETHADDR[chainId].toLowerCase();
            tokenOutWrapType = WrapTypes.ETH;
        }
        // Handle stETH wrapping
        if (tokenIn === Lido.stETH[chainId]) {
            tokenInForSwaps = Lido.wstETH[chainId];
            tokenInWrapType = WrapTypes.stETH;
            const rate = yield getStEthRate(provider, chainId);
            tokenInRate = rate;
            if (swapType === SwapTypes.SwapExactIn)
                swapAmountForSwaps = swapAmount.times(rate).dp(18);
        }
        if (tokenOut === Lido.stETH[chainId]) {
            tokenOutForSwaps = Lido.wstETH[chainId];
            tokenOutWrapType = WrapTypes.stETH;
            const rate = yield getStEthRate(provider, chainId);
            tokenOutRate = rate;
            if (swapType === SwapTypes.SwapExactOut)
                swapAmountForSwaps = swapAmount.times(rate).dp(18);
        }
        return {
            swapAmountOriginal: swapAmount,
            swapAmountForSwaps: swapAmountForSwaps,
            tokenIn: {
                addressOriginal: tokenIn,
                addressForSwaps: tokenInForSwaps,
                wrapType: tokenInWrapType,
                rate: tokenInRate,
            },
            tokenOut: {
                addressOriginal: tokenOut,
                addressForSwaps: tokenOutForSwaps,
                wrapType: tokenOutWrapType,
                rate: tokenOutRate,
            },
        };
    });
}
function setWrappedInfo(swapInfo, swapType, wrappedInfo, chainId) {
    if (swapInfo.swaps.length === 0)
        return swapInfo;
    swapInfo.tokenIn = wrappedInfo.tokenIn.addressOriginal;
    swapInfo.tokenOut = wrappedInfo.tokenOut.addressOriginal;
    if (wrappedInfo.tokenIn.wrapType === WrapTypes.ETH ||
        wrappedInfo.tokenOut.wrapType === WrapTypes.ETH) {
        // replace weth with ZERO/ETH in assets for Vault to handle ETH directly
        swapInfo.tokenAddresses = swapInfo.tokenAddresses.map((addr) => isSameAddress(addr, WETHADDR[chainId]) ? AddressZero : addr);
    }
    // Handle stETH swap amount scaling
    if ((wrappedInfo.tokenIn.wrapType === WrapTypes.stETH &&
        swapType === SwapTypes.SwapExactIn) ||
        (wrappedInfo.tokenOut.wrapType === WrapTypes.stETH &&
            swapType === SwapTypes.SwapExactOut)) {
        swapInfo.swapAmountForSwaps = scale(wrappedInfo.swapAmountForSwaps, 18).dp(0); // Always 18 because wstETH
        swapInfo.swapAmount = scale(wrappedInfo.swapAmountOriginal, 18).dp(0);
    }
    else {
        // Should be same when standard tokens and swapAmount should already be scaled
        swapInfo.swapAmountForSwaps = swapInfo.swapAmount;
    }
    // Return amount from swaps will only be different if token has an exchangeRate
    swapInfo.returnAmountFromSwaps = swapInfo.returnAmount;
    // SwapExactIn, stETH out, returnAmount is stETH amount out, returnAmountForSwaps is wstETH amount out
    if (swapType === SwapTypes.SwapExactIn &&
        wrappedInfo.tokenOut.wrapType === WrapTypes.stETH) {
        swapInfo.returnAmount = swapInfo.returnAmount
            .div(wrappedInfo.tokenOut.rate)
            .dp(0);
        swapInfo.returnAmountConsideringFees =
            swapInfo.returnAmountConsideringFees
                .div(wrappedInfo.tokenOut.rate)
                .dp(0);
    }
    // SwapExactOut, stETH in, returnAmount us stETH amount in, returnAmountForSwaps is wstETH amount in
    if (swapType === SwapTypes.SwapExactOut &&
        wrappedInfo.tokenIn.wrapType === WrapTypes.stETH) {
        swapInfo.returnAmount = swapInfo.returnAmount
            .div(wrappedInfo.tokenIn.rate)
            .dp(0);
        swapInfo.returnAmountConsideringFees =
            swapInfo.returnAmountConsideringFees
                .div(wrappedInfo.tokenIn.rate)
                .dp(0);
    }
    return swapInfo;
}

/**
 * @returns an array of deduplicated token addresses used in the provided swaps
 */
const getTokenAddresses = (swaps) => {
    const tokenAddressesSet = new Set(swaps.flatMap((sequence) => sequence.flatMap((swap) => [
        swap.tokenIn,
        swap.tokenOut,
    ])));
    return [...tokenAddressesSet];
};
/**
 * @dev Assumes that intermediate swaps have been properly formatted using the zero sentinel value
 * @returns the total amount of tokens used in the described batchSwap
 */
const getTotalSwapAmount = (swaps) => {
    return swaps.reduce((acc, { amount }) => acc.plus(amount), ZERO);
};
/**
 * Formats a sequence of swaps to the format expected by the Balance Vault.
 * @dev Intermediate swaps' amounts are replaced with the sentinel value of zero
 *      and exact output sequences are reversed.
 * @param swapKind - a SwapTypes enum for whether the swap has an exact input or exact output
 * @param sequence - a sequence of swaps which form a path from the input token to the output token
 * @param tokenAddresses - an array of all the token address which are involved in the batchSwap
 * @returns
 */
const formatSequence = (swapKind, sequence, tokenAddresses) => {
    if (swapKind === SwapTypes.SwapExactOut) {
        // GIVEN_OUT sequences must be passed to the vault in reverse order.
        // After reversing the sequence we can treat them almost equivalently to GIVEN_IN sequences
        sequence = sequence.reverse();
    }
    return sequence.map((swap, i) => {
        // Multihop swaps can be executed by passing an `amountIn` value of zero for a swap. This will cause the amount out
        // of the previous swap to be used as the amount in of the current one. In such a scenario, `tokenIn` must equal the
        // previous swap's `tokenOut`.
        let amountScaled = '0';
        // First swap needs to be given a value so we inject this from SOR solution
        if (i === 0) {
            // If it's a GIVEN_IN swap then swapAmount is in terms of tokenIn
            // and vice versa for GIVEN_OUT
            const scalingFactor = swapKind === SwapTypes.SwapExactIn
                ? swap.tokenInDecimals
                : swap.tokenOutDecimals;
            amountScaled = scale(bnum(swap.swapAmount), scalingFactor)
                .decimalPlaces(0, 1)
                .toString();
        }
        const inIndex = tokenAddresses.indexOf(swap.tokenIn);
        const outIndex = tokenAddresses.indexOf(swap.tokenOut);
        return {
            poolId: swap.pool,
            assetInIndex: inIndex,
            assetOutIndex: outIndex,
            amount: amountScaled,
            userData: '0x',
        };
    });
};
function formatSwaps(swapsOriginal, swapType, swapAmount, tokenIn, tokenOut, returnAmount, returnAmountConsideringFees, marketSp) {
    const swaps = cloneDeep(swapsOriginal);
    const swapInfo = Object.assign(Object.assign({}, EMPTY_SWAPINFO), { marketSp: marketSp });
    if (swaps.length === 0) {
        return swapInfo;
    }
    const { tokenInDecimals } = swaps[0].find((swap) => swap.tokenIn === tokenIn);
    const { tokenOutDecimals } = swaps[0].find((swap) => swap.tokenOut === tokenOut);
    const tokenArray = getTokenAddresses(swaps);
    const swapsV2 = swaps.flatMap((sequence) => formatSequence(swapType, sequence, tokenArray));
    const [inputDecimals, returnDecimals] = swapType === SwapTypes.SwapExactIn
        ? [tokenInDecimals, tokenOutDecimals]
        : [tokenOutDecimals, tokenInDecimals];
    swapInfo.swapAmount = scale(swapAmount, inputDecimals);
    swapInfo.returnAmount = scale(returnAmount, returnDecimals).dp(0, BigNumber.ROUND_FLOOR);
    swapInfo.returnAmountConsideringFees = scale(returnAmountConsideringFees, returnDecimals).dp(0, BigNumber.ROUND_FLOOR);
    // We need to account for any rounding losses by adding dust to first path
    const dust = swapInfo.swapAmount
        .minus(getTotalSwapAmount(swapsV2))
        .dp(0, 0);
    if (dust.gt(0))
        swapsV2[0].amount = bnum(swapsV2[0].amount).plus(dust).toString();
    swapInfo.swaps = swapsV2;
    swapInfo.tokenAddresses = tokenArray;
    swapInfo.tokenIn = tokenIn;
    swapInfo.tokenOut = tokenOut;
    return swapInfo;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var lodash_set = set;

class Multicaller {
    constructor(multiAddress, provider, abi, options = {}) {
        this.options = {};
        this.calls = [];
        this.paths = [];
        this.multiAddress = multiAddress;
        this.provider = provider;
        this.interface = new Interface(abi);
        this.options = options;
    }
    call(path, address, functionName, params) {
        this.calls.push([address, functionName, params]);
        this.paths.push(path);
        return this;
    }
    execute(from = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = from;
            const results = yield this.executeMulticall();
            results.forEach((result, i) => lodash_set(obj, this.paths[i], result.length > 1 ? result : result[0]));
            this.calls = [];
            this.paths = [];
            return obj;
        });
    }
    executeMulticall() {
        return __awaiter(this, void 0, void 0, function* () {
            const multi = new Contract(this.multiAddress, [
                'function aggregate(tuple[](address target, bytes callData) memory calls) public view returns (uint256 blockNumber, bytes[] memory returnData)',
            ], this.provider);
            const [, res] = yield multi.aggregate(this.calls.map(([address, functionName, params]) => [
                address,
                this.interface.encodeFunctionData(functionName, params),
            ]), this.options);
            return res.map((result, i) => this.interface.decodeFunctionResult(this.calls[i][1], result));
        });
    }
}

var weightedPoolAbi = [
	{
		inputs: [
			{
				internalType: "contract IVault",
				name: "vault",
				type: "address"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "normalizedWeights",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "swapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pauseWindowDuration",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "bufferPeriodDuration",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bool",
				name: "paused",
				type: "bool"
			}
		],
		name: "PausedStateChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "swapFeePercentage",
				type: "uint256"
			}
		],
		name: "SwapFeePercentageChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "decreaseApproval",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "selector",
				type: "bytes4"
			}
		],
		name: "getActionId",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getAuthorizer",
		outputs: [
			{
				internalType: "contract IAuthorizer",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getInvariant",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getLastInvariant",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getNormalizedWeights",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getOwner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getPausedState",
		outputs: [
			{
				internalType: "bool",
				name: "paused",
				type: "bool"
			},
			{
				internalType: "uint256",
				name: "pauseWindowEndTime",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "bufferPeriodEndTime",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getPoolId",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getRate",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getSwapFeePercentage",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getVault",
		outputs: [
			{
				internalType: "contract IVault",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "increaseApproval",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "onExitPool",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "onJoinPool",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "enum IVault.SwapKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "contract IERC20",
						name: "tokenIn",
						type: "address"
					},
					{
						internalType: "contract IERC20",
						name: "tokenOut",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "lastChangeBlock",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "from",
						type: "address"
					},
					{
						internalType: "address",
						name: "to",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IPoolSwapStructs.SwapRequest",
				name: "request",
				type: "tuple"
			},
			{
				internalType: "uint256",
				name: "balanceTokenIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "balanceTokenOut",
				type: "uint256"
			}
		],
		name: "onSwap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "queryExit",
		outputs: [
			{
				internalType: "uint256",
				name: "bptIn",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "amountsOut",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "lastChangeBlock",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "queryJoin",
		outputs: [
			{
				internalType: "uint256",
				name: "bptOut",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "amountsIn",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "paused",
				type: "bool"
			}
		],
		name: "setPaused",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "swapFeePercentage",
				type: "uint256"
			}
		],
		name: "setSwapFeePercentage",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var stablePoolAbi = [
	{
		inputs: [
			{
				internalType: "contract IVault",
				name: "vault",
				type: "address"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]"
			},
			{
				internalType: "uint256",
				name: "amplificationParameter",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "swapFee",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "emergencyPeriod",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "emergencyPeriodCheckExtension",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bool",
				name: "active",
				type: "bool"
			}
		],
		name: "EmergencyPeriodChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "swapFee",
				type: "uint256"
			}
		],
		name: "SwapFeeChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "decreaseApproval",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getAmplificationParameter",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getAuthorizer",
		outputs: [
			{
				internalType: "contract IAuthorizer",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getEmergencyPeriod",
		outputs: [
			{
				internalType: "bool",
				name: "active",
				type: "bool"
			},
			{
				internalType: "uint256",
				name: "endDate",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "checkEndDate",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getPoolId",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getRate",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getSwapFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getVault",
		outputs: [
			{
				internalType: "contract IVault",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "increaseApproval",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "currentBalances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "latestBlockNumberUsed",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "onExitPool",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "currentBalances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "latestBlockNumberUsed",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "onJoinPool",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "enum IVault.SwapKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "contract IERC20",
						name: "tokenIn",
						type: "address"
					},
					{
						internalType: "contract IERC20",
						name: "tokenOut",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "latestBlockNumberUsed",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "from",
						type: "address"
					},
					{
						internalType: "address",
						name: "to",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IPoolSwapStructs.SwapRequest",
				name: "swapRequest",
				type: "tuple"
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "indexIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "indexOut",
				type: "uint256"
			}
		],
		name: "onSwap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "currentBalances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "latestBlockNumberUsed",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "queryExit",
		outputs: [
			{
				internalType: "uint256",
				name: "bptIn",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "amountsOut",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "currentBalances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "latestBlockNumberUsed",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFeePercentage",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "queryJoin",
		outputs: [
			{
				internalType: "uint256",
				name: "bptOut",
				type: "uint256"
			},
			{
				internalType: "uint256[]",
				name: "amountsIn",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "active",
				type: "bool"
			}
		],
		name: "setEmergencyPeriod",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "swapFee",
				type: "uint256"
			}
		],
		name: "setSwapFee",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var elementPoolAbi = [
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "_underlying",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "_bond",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_expiration",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_unitSeconds",
				type: "uint256"
			},
			{
				internalType: "contract IVault",
				name: "vault",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_percentFee",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_percentFeeGov",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_governance",
				type: "address"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "collectedBase",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "collectedBond",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "remainingBase",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "remainingBond",
				type: "uint256"
			}
		],
		name: "FeeCollection",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "FEE_BOUND",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "bond",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "bondDecimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "decreaseApproval",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "expiration",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "feesBond",
		outputs: [
			{
				internalType: "uint128",
				name: "",
				type: "uint128"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "feesUnderlying",
		outputs: [
			{
				internalType: "uint128",
				name: "",
				type: "uint128"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getPoolId",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getVault",
		outputs: [
			{
				internalType: "contract IVault",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "governance",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "increaseApproval",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "currentBalances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFee",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "onExitPool",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amountsOut",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "dueProtocolFeeAmounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "poolId",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "currentBalances",
				type: "uint256[]"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "protocolSwapFee",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			}
		],
		name: "onJoinPool",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amountsIn",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "dueProtocolFeeAmounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "enum IVault.SwapKind",
						name: "kind",
						type: "uint8"
					},
					{
						internalType: "contract IERC20",
						name: "tokenIn",
						type: "address"
					},
					{
						internalType: "contract IERC20",
						name: "tokenOut",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					},
					{
						internalType: "bytes32",
						name: "poolId",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "lastChangeBlock",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "from",
						type: "address"
					},
					{
						internalType: "address",
						name: "to",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "userData",
						type: "bytes"
					}
				],
				internalType: "struct IPoolSwapStructs.SwapRequest",
				name: "swapRequest",
				type: "tuple"
			},
			{
				internalType: "uint256",
				name: "currentBalanceTokenIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "currentBalanceTokenOut",
				type: "uint256"
			}
		],
		name: "onSwap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "percentFeeGov",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountX",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveX",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveY",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "out",
				type: "bool"
			}
		],
		name: "solveTradeInvariant",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "underlying",
		outputs: [
			{
				internalType: "contract IERC20",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "underlyingDecimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "unitSeconds",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

function getOnChainBalances(subgraphPools, multiAddress, vaultAddress, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (subgraphPools.length === 0)
            return subgraphPools;
        const abis = Object.values(
        // Remove duplicate entries using their names
        Object.fromEntries([
            ...vaultAbi,
            ...weightedPoolAbi,
            ...stablePoolAbi,
            ...elementPoolAbi,
        ].map((row) => [row.name, row])));
        const multiPool = new Multicaller(multiAddress, provider, abis);
        subgraphPools.forEach((pool, i) => {
            // TO DO - This is a temp filter
            if (pool.id ===
                '0x6b15a01b5d46a5321b627bd7deef1af57bc629070000000000000000000000d4')
                subgraphPools.splice(i, 1);
            multiPool.call(`${pool.id}.poolTokens`, vaultAddress, 'getPoolTokens', [
                pool.id,
            ]);
            multiPool.call(`${pool.id}.totalSupply`, pool.address, 'totalSupply');
            // TO DO - Make this part of class to make more flexible?
            if (pool.poolType === 'Weighted') {
                multiPool.call(`${pool.id}.weights`, pool.address, 'getNormalizedWeights');
                multiPool.call(`${pool.id}.swapFee`, pool.address, 'getSwapFeePercentage');
            }
            else if (pool.poolType === 'Stable' ||
                pool.poolType === 'MetaStable') {
                // MetaStable is the same as Stable for multicall purposes
                multiPool.call(`${pool.id}.amp`, pool.address, 'getAmplificationParameter');
                multiPool.call(`${pool.id}.swapFee`, pool.address, 'getSwapFeePercentage');
            }
            else if (pool.poolType === 'Element') {
                multiPool.call(`${pool.id}.swapFee`, pool.address, 'percentFee');
            }
        });
        const pools = (yield multiPool.execute());
        Object.entries(pools).forEach(([poolId, onchainData]) => {
            try {
                const { poolTokens, swapFee, weights } = onchainData;
                subgraphPools[poolId].swapFee = scale(bnum(swapFee), -18).toString();
                poolTokens.tokens.forEach((token, i) => {
                    const T = subgraphPools[poolId].tokens.find((t) => isSameAddress(t.address, token));
                    T.balance = scale(bnum(poolTokens.balances[i]), -Number(T.decimals)).toString();
                    if (subgraphPools[poolId].poolType === 'Weighted') {
                        T.weight = scale(bnum(weights[i]), -18).toString();
                    }
                });
            }
            catch (err) {
                // Likely an unsupported pool type
                // console.log(`Issue with pool onchain call`)
                // console.log(subgraphPool.id);
                // console.log(onChainResult);
            }
        });
        return subgraphPools;
    });
}

// Returns all public pools
function fetchSubgraphPools(subgraphUrl) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // can filter for publicSwap too??
        const query = `
      {
        pools: pools(first: 1000) {
          id
          address
          poolType
          swapFee
          totalShares
          tokens {
            address
            balance
            decimals
            weight
            priceRate
          }
          tokensList
          totalWeight
          amp
          expiryTime
          unitSeconds
          principalToken
          baseToken
          swapEnabled
        }
      }
    `;
        console.log(`fetchSubgraphPools: ${subgraphUrl}`);
        const response = yield fetch$1(subgraphUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
            }),
        });
        const { data } = yield response.json();
        return (_a = data.pools) !== null && _a !== void 0 ? _a : [];
    });
}

class PoolCacher {
    constructor(provider, chainId, poolsUrl = null, initialPools = []) {
        this.provider = provider;
        this.chainId = chainId;
        this.poolsUrl = poolsUrl;
        this.pools = [];
        this.finishedFetchingOnChain = false;
        this.pools = initialPools;
    }
    getPools() {
        return cloneDeep(this.pools);
    }
    isConnectedToSubgraph() {
        return this.poolsUrl !== null;
    }
    /*
     * Saves updated pools data to internal onChainBalanceCache.
     * If isOnChain is true will retrieve all required onChain data. (false is advised to only be used for testing)
     * If poolsData is passed as parameter - uses this as pools source.
     * If poolsData was passed in to constructor - uses this as pools source.
     * If pools url was passed in to constructor - uses this to fetch pools source.
     */
    fetchPools(poolsData = [], isOnChain = true) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newPools;
                // If poolsData has been passed to function these pools should be used
                if (poolsData.length > 0) {
                    newPools = cloneDeep(poolsData);
                }
                else {
                    // Retrieve from URL if set otherwise use data passed in constructor
                    if (this.isConnectedToSubgraph()) {
                        newPools = yield fetchSubgraphPools(this.poolsUrl);
                    }
                    else {
                        newPools = this.pools;
                    }
                }
                // Get latest on-chain balances (returns data in string/normalized format)
                this.pools = yield this.fetchOnChainBalances(newPools, isOnChain);
                this.finishedFetchingOnChain = true;
                return true;
            }
            catch (err) {
                // On error clear all caches and return false so user knows to try again.
                this.finishedFetchingOnChain = false;
                this.pools = [];
                console.error(`Error: fetchPools(): ${err.message}`);
                return false;
            }
        });
    }
    /*
     * Uses multicall contract to fetch all onchain balances for pools.
     */
    fetchOnChainBalances(subgraphPools, isOnChain = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (subgraphPools.length === 0) {
                console.error('ERROR: No Pools To Fetch.');
                return [];
            }
            // Allows for testing
            if (!isOnChain) {
                console.log(`!!!!!!! WARNING - Not Using Real OnChain Balances !!!!!!`);
                return subgraphPools;
            }
            // This will return in normalized/string format
            const onChainPools = yield getOnChainBalances(subgraphPools, MULTIADDR[this.chainId], VAULTADDR[this.chainId], this.provider);
            return onChainPools;
        });
    }
}

const filterPoolsByType = (pools, poolTypeFilter) => {
    if (poolTypeFilter === PoolFilter.All)
        return pools;
    return pools.filter((p) => p.poolType === poolTypeFilter);
};
/*
The main purpose of this function is to:
- filter to  allPools to pools that have:
    - TokenIn & TokenOut, i.e. a direct swap pool
    - TokenIn & !TokenOut, i.e. a hop pool with only TokenIn
    - !TokenIn & TokenOut, i.e. a hop pool with only TokenOut
- find list of hop tokens, i.e. tokens that join hop pools
As we're looping all here, it also does a number of other things to avoid unnecessary loops later:
- parsePoolPairData for Direct pools
- store token decimals for future use
*/
function filterPoolsOfInterest(allPools, tokenIn, tokenOut, maxPools, currentBlockTimestamp = 0) {
    const poolsDictionary = {};
    // If pool contains token add all its tokens to direct list
    // Multi-hop trades: we find the best pools that connect tokenIn and tokenOut through a multi-hop (intermediate) token
    // First: we get all tokens that can be used to be traded with tokenIn excluding
    // tokens that are in pools that already contain tokenOut (in which case multi-hop is not necessary)
    let tokenInPairedTokens = new Set();
    let tokenOutPairedTokens = new Set();
    allPools.forEach((pool) => {
        if (pool.tokensList.length === 0 || pool.tokens[0].balance === '0') {
            return;
        }
        const newPool = parseNewPool(pool, currentBlockTimestamp);
        if (!newPool)
            return;
        const tokenListSet = new Set(pool.tokensList);
        // Depending on env file, we add the BPT as well as
        // we can join/exit as part of the multihop
        if (ALLOW_ADD_REMOVE)
            tokenListSet.add(pool.address);
        // This is a direct pool as has both tokenIn and tokenOut
        if ((tokenListSet.has(tokenIn) && tokenListSet.has(tokenOut)) ||
            (tokenListSet.has(tokenIn.toLowerCase()) &&
                tokenListSet.has(tokenOut.toLowerCase()))) {
            newPool.setTypeForSwap(SwapPairType.Direct);
            // parsePoolPairData for Direct pools as it avoids having to loop later
            newPool.parsePoolPairData(tokenIn, tokenOut);
            poolsDictionary[pool.id] = newPool;
            return;
        }
        if (maxPools > 1) {
            const containsTokenIn = tokenListSet.has(tokenIn);
            const containsTokenOut = tokenListSet.has(tokenOut);
            if (containsTokenIn && !containsTokenOut) {
                tokenInPairedTokens = new Set([
                    ...tokenInPairedTokens,
                    ...tokenListSet,
                ]);
                newPool.setTypeForSwap(SwapPairType.HopIn);
                poolsDictionary[pool.id] = newPool;
            }
            else if (!containsTokenIn && containsTokenOut) {
                tokenOutPairedTokens = new Set([
                    ...tokenOutPairedTokens,
                    ...tokenListSet,
                ]);
                newPool.setTypeForSwap(SwapPairType.HopOut);
                poolsDictionary[pool.id] = newPool;
            }
        }
    });
    // We find the intersection of the two previous sets so we can trade tokenIn for tokenOut with 1 multi-hop
    const hopTokensSet = [...tokenInPairedTokens].filter((x) => tokenOutPairedTokens.has(x));
    // Transform set into Array
    const hopTokens = [...hopTokensSet];
    return [poolsDictionary, hopTokens];
}
/*
Find the most liquid pool for each hop (i.e. tokenIn->hopToken & hopToken->tokenOut).
Creates paths for each pool of interest (multi & direct pools).
*/
function filterHopPools(tokenIn, tokenOut, hopTokens, poolsOfInterest) {
    const filteredPoolsOfInterest = {};
    const paths = [];
    let firstPoolLoop = true;
    // No multihop pool but still need to create paths for direct pools
    if (hopTokens.length === 0) {
        for (const id in poolsOfInterest) {
            if (poolsOfInterest[id].swapPairType !== SwapPairType.Direct) {
                delete poolsOfInterest[id];
                continue;
            }
            const path = createDirectPath(poolsOfInterest[id], tokenIn, tokenOut);
            paths.push(path);
            filteredPoolsOfInterest[id] = poolsOfInterest[id];
        }
    }
    for (let i = 0; i < hopTokens.length; i++) {
        let highestNormalizedLiquidityFirst = ZERO; // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
        let highestNormalizedLiquidityFirstPoolId; // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
        let highestNormalizedLiquiditySecond = ZERO; // Aux variable to find pool with most liquidity for pair (hopToken -> tokenOut)
        let highestNormalizedLiquiditySecondPoolId; // Aux variable to find pool with most liquidity for pair (hopToken -> tokenOut)
        for (const id in poolsOfInterest) {
            const pool = poolsOfInterest[id];
            // We don't consider direct pools for the multihop but we do add it's path
            if (pool.swapPairType === SwapPairType.Direct) {
                // First loop of all pools we add paths to list
                if (firstPoolLoop) {
                    const path = createDirectPath(pool, tokenIn, tokenOut);
                    paths.push(path);
                    filteredPoolsOfInterest[id] = pool;
                }
                continue;
            }
            const tokenListSet = new Set(pool.tokensList);
            // Depending on env file, we add the BPT as well as
            // we can join/exit as part of the multihop
            if (ALLOW_ADD_REMOVE)
                tokenListSet.add(pool.address);
            // MAKE THIS A FLAG IN FILTER?
            // If pool doesn't have  hopTokens[i] then ignore
            if (!tokenListSet.has(hopTokens[i]))
                continue;
            if (pool.swapPairType === SwapPairType.HopIn) {
                const poolPairData = pool.parsePoolPairData(tokenIn, hopTokens[i]);
                // const normalizedLiquidity = pool.getNormalizedLiquidity(tokenIn, hopTokens[i]);
                const normalizedLiquidity = pool.getNormalizedLiquidity(poolPairData);
                // Cannot be strictly greater otherwise highestNormalizedLiquidityPoolId = 0 if hopTokens[i] balance is 0 in this pool.
                if (normalizedLiquidity.isGreaterThanOrEqualTo(highestNormalizedLiquidityFirst)) {
                    highestNormalizedLiquidityFirst = normalizedLiquidity;
                    highestNormalizedLiquidityFirstPoolId = id;
                }
            }
            else if (pool.swapPairType === SwapPairType.HopOut) {
                const poolPairData = pool.parsePoolPairData(hopTokens[i], tokenOut);
                // const normalizedLiquidity = pool.getNormalizedLiquidity(hopTokens[i], tokenOut);
                const normalizedLiquidity = pool.getNormalizedLiquidity(poolPairData);
                // Cannot be strictly greater otherwise highestNormalizedLiquidityPoolId = 0 if hopTokens[i] balance is 0 in this pool.
                if (normalizedLiquidity.isGreaterThanOrEqualTo(highestNormalizedLiquiditySecond)) {
                    highestNormalizedLiquiditySecond = normalizedLiquidity;
                    highestNormalizedLiquiditySecondPoolId = id;
                }
            }
            else {
                // Unknown type
                continue;
            }
        }
        firstPoolLoop = false;
        filteredPoolsOfInterest[highestNormalizedLiquidityFirstPoolId] =
            poolsOfInterest[highestNormalizedLiquidityFirstPoolId];
        filteredPoolsOfInterest[highestNormalizedLiquiditySecondPoolId] =
            poolsOfInterest[highestNormalizedLiquiditySecondPoolId];
        const path = createMultihopPath(poolsOfInterest[highestNormalizedLiquidityFirstPoolId], poolsOfInterest[highestNormalizedLiquiditySecondPoolId], tokenIn, hopTokens[i], tokenOut);
        paths.push(path);
    }
    return [filteredPoolsOfInterest, paths];
}
function createDirectPath(pool, tokenIn, tokenOut) {
    const swap = {
        pool: pool.id,
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        tokenInDecimals: 18,
        tokenOutDecimals: 18,
    };
    const poolPairData = pool.parsePoolPairData(tokenIn, tokenOut);
    const path = {
        id: pool.id,
        swaps: [swap],
        limitAmount: ZERO,
        poolPairData: [poolPairData],
        pools: [pool],
    };
    return path;
}
function createMultihopPath(firstPool, secondPool, tokenIn, hopToken, tokenOut) {
    const swap1 = {
        pool: firstPool.id,
        tokenIn: tokenIn,
        tokenOut: hopToken,
        tokenInDecimals: 18,
        tokenOutDecimals: 18,
    };
    const swap2 = {
        pool: secondPool.id,
        tokenIn: hopToken,
        tokenOut: tokenOut,
        tokenInDecimals: 18,
        tokenOutDecimals: 18,
    };
    const poolPairDataFirst = firstPool.parsePoolPairData(tokenIn, hopToken);
    const poolPairDataSecond = secondPool.parsePoolPairData(hopToken, tokenOut);
    // Path id is the concatenation of the ids of poolFirstHop and poolSecondHop
    const path = {
        id: firstPool.id + secondPool.id,
        swaps: [swap1, swap2],
        limitAmount: ZERO,
        poolPairData: [poolPairDataFirst, poolPairDataSecond],
        pools: [firstPool, secondPool],
    };
    return path;
}

function calculatePathLimits(paths, swapType) {
    let maxLiquidityAvailable = ZERO;
    paths.forEach((path) => {
        // Original parsedPoolPairForPath here but this has already been done.
        path.limitAmount = getLimitAmountSwapForPath(path, swapType);
        if (path.limitAmount.isNaN())
            throw 'path.limitAmount.isNaN';
        // console.log(path.limitAmount.toNumber())
        maxLiquidityAvailable = maxLiquidityAvailable.plus(path.limitAmount);
    });
    const sortedPaths = paths.sort((a, b) => {
        return b.limitAmount.minus(a.limitAmount).toNumber();
    });
    return [sortedPaths, maxLiquidityAvailable];
}
function getLimitAmountSwapForPath(path, swapType) {
    const poolPairData = path.poolPairData;
    if (poolPairData.length == 1) {
        return path.pools[0].getLimitAmountSwap(poolPairData[0], swapType);
    }
    else if (poolPairData.length == 2) {
        if (swapType === SwapTypes.SwapExactIn) {
            const limitAmountSwap1 = path.pools[0].getLimitAmountSwap(poolPairData[0], swapType);
            const limitAmountSwap2 = path.pools[1].getLimitAmountSwap(poolPairData[1], swapType);
            const limitOutputAmountSwap1 = getOutputAmountSwap(path.pools[0], path.poolPairData[0], swapType, limitAmountSwap1);
            if (limitOutputAmountSwap1.gt(limitAmountSwap2))
                if (limitAmountSwap2.isZero())
                    // This means second hop is limiting the path
                    return ZERO;
                // this is necessary to avoid return NaN
                else
                    return getOutputAmountSwap(path.pools[0], path.poolPairData[0], SwapTypes.SwapExactOut, limitAmountSwap2);
            // This means first hop is limiting the path
            else
                return limitAmountSwap1;
        }
        else {
            const limitAmountSwap1 = path.pools[0].getLimitAmountSwap(poolPairData[0], swapType);
            const limitAmountSwap2 = path.pools[1].getLimitAmountSwap(poolPairData[1], swapType);
            const limitOutputAmountSwap2 = getOutputAmountSwap(path.pools[1], path.poolPairData[1], swapType, limitAmountSwap2);
            if (limitOutputAmountSwap2.gt(limitAmountSwap1))
                // This means first hop is limiting the path
                return getOutputAmountSwap(path.pools[1], path.poolPairData[1], SwapTypes.SwapExactIn, limitAmountSwap1);
            // This means second hop is limiting the path
            else
                return limitAmountSwap2;
        }
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}

class RouteProposer {
    constructor() {
        this.cache = {};
    }
    /**
     * Given a list of pools and a desired input/output, returns a set of possible paths to route through
     */
    getCandidatePaths(tokenIn, tokenOut, swapType, pools, swapOptions) {
        if (pools.length === 0)
            return { pools: {}, paths: [] };
        // If token pair has been processed before that info can be reused to speed up execution
        const cache = this.cache[`${tokenIn}${tokenOut}${swapType}${swapOptions.timestamp}`];
        // forceRefresh can be set to force fresh processing of paths/prices
        if (!swapOptions.forceRefresh && !!cache) {
            // Using pre-processed data from cache
            return {
                pools: cache.pools,
                paths: cache.paths,
            };
        }
        // Some functions alter pools list directly but we want to keep original so make a copy to work from
        const poolsList = cloneDeep(pools);
        const [poolsDict, hopTokens] = filterPoolsOfInterest(poolsList, tokenIn, tokenOut, swapOptions.maxPools, swapOptions.timestamp);
        const [filteredPoolsDict, pathData] = filterHopPools(tokenIn, tokenOut, hopTokens, poolsDict);
        const [paths] = calculatePathLimits(pathData, swapType);
        this.cache[`${tokenIn}${tokenOut}${swapType}${swapOptions.timestamp}`] =
            {
                pools: filteredPoolsDict,
                paths: paths,
            };
        return { pools: filteredPoolsDict, paths };
    }
}

const getPlatformId = (chainId) => {
    const mapping = {
        '1': 'ethereum',
        '42': 'ethereum',
        '137': 'polygon-pos',
    };
    return mapping[chainId.toString()] || 'ethereum';
};
const getNativeAssetId = (chainId) => {
    const mapping = {
        '1': 'eth',
        '42': 'eth',
        // CoinGecko does not provide prices in terms of MATIC
        // TODO: convert through ETH as intermediary
        '137': '',
    };
    return mapping[chainId.toString()] || 'eth';
};
/**
 * @dev Assumes that the native asset has 18 decimals
 * @param chainId - the chain id on which the token is deployed
 * @param tokenAddress - the address of the token contract
 * @param tokenDecimals - the number of decimals places which the token is divisible by
 * @returns the price of 1 ETH in terms of the token base units
 */
function getTokenPriceInNativeAsset(chainId, tokenAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const platformId = getPlatformId(chainId);
        const nativeAssetId = getNativeAssetId(chainId);
        const endpoint = `https://api.coingecko.com/api/v3/simple/token_price/${platformId}?contract_addresses=${tokenAddress}&vs_currencies=${nativeAssetId}`;
        const response = yield fetch$1(endpoint, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = yield response.json();
        if (data[tokenAddress.toLowerCase()][nativeAssetId] === undefined)
            throw Error('No price returned from Coingecko');
        return data[tokenAddress.toLowerCase()][nativeAssetId];
    });
}

function calculateTotalSwapCost(tokenPrice, swapGas, gasPriceWei) {
    return gasPriceWei.times(swapGas).times(tokenPrice).div(BONE);
}
class SwapCostCalculator {
    constructor(provider, chainId) {
        this.provider = provider;
        this.chainId = chainId;
        this.initializeCache();
    }
    initializeCache() {
        this.tokenPriceCache = {
            AddressZero: BONE.toString(),
            [WETHADDR[this.chainId].toLowerCase()]: BONE.toString(),
        };
        this.tokenDecimalsCache = {};
    }
    /**
     * Sets the chain ID to be used when querying asset prices
     * @param chainId - the chain ID of the chain to switch to
     */
    setChainId(chainId) {
        this.chainId = chainId;
        this.initializeCache();
    }
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     * @param tokenPrice - the price of the native asset in terms of the provided token
     */
    getNativeAssetPriceInToken(tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if we have token price cached
            const cachedTokenPrice = this.tokenPriceCache[tokenAddress.toLowerCase()];
            if (cachedTokenPrice)
                return bnum(cachedTokenPrice);
            try {
                // Query Coingecko first and only check decimals
                // if we get a valid response to avoid unnecessary queries
                const ethPerToken = yield getTokenPriceInNativeAsset(this.chainId, tokenAddress);
                const tokenDecimals = yield this.getTokenDecimals(tokenAddress);
                // Coingecko returns price of token in terms of ETH
                // We want the price of 1 ETH in terms of the token base units
                const ethPerTokenWei = scale(bnum(ethPerToken), 18 - tokenDecimals);
                const ethPriceInToken = BONE.div(ethPerTokenWei).dp(0);
                this.setNativeAssetPriceInToken(tokenAddress, ethPriceInToken.toString());
                return ethPriceInToken;
            }
            catch (err) {
                console.log('Error Getting Token Price. Defaulting to 0.');
                return ZERO;
            }
        });
    }
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     * @param tokenPrice - the price of the native asset in terms of the provided token
     */
    setNativeAssetPriceInToken(tokenAddress, tokenPrice) {
        this.tokenPriceCache[tokenAddress.toLowerCase()] = tokenPrice;
    }
    /**
     * @dev Caches the number of decimals for a particular token to avoid onchain lookups
     * @param tokenAddress - the address of the provided token
     * @param decimals - the number of decimals of the provided token
     */
    setTokenDecimals(tokenAddress, decimals) {
        this.tokenDecimalsCache[tokenAddress.toLowerCase()] = decimals;
    }
    /**
     * Calculate the cost of spending a certain amount of gas in terms of a token.
     * This allows us to determine whether an increased amount of tokens gained
     * is worth spending this extra gas (e.g. by including an extra pool in a swap)
     */
    convertGasCostToToken(tokenAddress, gasPriceWei, swapGas = new BigNumber('35000')) {
        return __awaiter(this, void 0, void 0, function* () {
            if (gasPriceWei.isZero() || swapGas.isZero())
                return ZERO;
            return calculateTotalSwapCost(yield this.getNativeAssetPriceInToken(tokenAddress), swapGas, gasPriceWei);
        });
    }
    getTokenDecimals(tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const cache = this.tokenDecimalsCache[tokenAddress.toLowerCase()];
            if (cache !== undefined) {
                return cache;
            }
            const tokenContract = new Contract(tokenAddress, ['function decimals() external view returns (uint256)'], this.provider);
            const decimals = yield tokenContract.decimals();
            this.setTokenDecimals(tokenAddress, decimals.toNumber());
            return decimals.toNumber();
        });
    }
}

class SOR {
    constructor(provider, chainId, poolsSource, initialPools = []) {
        this.provider = provider;
        this.chainId = chainId;
        this.defaultSwapOptions = {
            gasPrice: new BigNumber('50e9'),
            swapGas: new BigNumber('35000'),
            poolTypeFilter: PoolFilter.All,
            maxPools: 4,
            timestamp: Math.floor(Date.now() / 1000),
            forceRefresh: false,
        };
        this.poolCacher = new PoolCacher(provider, chainId, poolsSource, initialPools);
        this.routeProposer = new RouteProposer();
        this.swapCostCalculator = new SwapCostCalculator(provider, chainId);
    }
    getPools() {
        return this.poolCacher.getPools();
    }
    /*
    Saves updated pools data to internal onChainBalanceCache.
    If isOnChain is true will retrieve all required onChain data. (false is advised to only be used for testing)
    If poolsData is passed as parameter - uses this as pools source.
    If poolsData was passed in to constructor - uses this as pools source.
    If pools url was passed in to constructor - uses this to fetch pools source.
    */
    fetchPools(poolsData = [], isOnChain = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.poolCacher.fetchPools(poolsData, isOnChain);
        });
    }
    getSwaps(tokenIn, tokenOut, swapType, swapAmount, swapOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.poolCacher.finishedFetchingOnChain)
                return cloneDeep(EMPTY_SWAPINFO);
            // Set any unset options to their defaults
            const options = Object.assign(Object.assign({}, this.defaultSwapOptions), swapOptions);
            const pools = this.poolCacher.getPools();
            const filteredPools = filterPoolsByType(pools, options.poolTypeFilter);
            const wrappedInfo = yield getWrappedInfo(this.provider, swapType, tokenIn, tokenOut, this.chainId, swapAmount);
            let swapInfo;
            if (isLidoStableSwap(this.chainId, tokenIn, tokenOut)) {
                swapInfo = yield getLidoStaticSwaps(filteredPools, this.chainId, wrappedInfo.tokenIn.addressForSwaps, wrappedInfo.tokenOut.addressForSwaps, swapType, wrappedInfo.swapAmountForSwaps, this.provider);
            }
            else {
                swapInfo = yield this.processSwaps(wrappedInfo.tokenIn.addressForSwaps, wrappedInfo.tokenOut.addressForSwaps, swapType, wrappedInfo.swapAmountForSwaps, filteredPools, options);
            }
            if (swapInfo.returnAmount.isZero())
                return swapInfo;
            swapInfo = setWrappedInfo(swapInfo, swapType, wrappedInfo, this.chainId);
            return swapInfo;
        });
    }
    getCostOfSwapInToken(outputToken, gasPrice, swapGas) {
        return __awaiter(this, void 0, void 0, function* () {
            if (gasPrice.isZero())
                return ZERO;
            return this.swapCostCalculator.convertGasCostToToken(outputToken, gasPrice, swapGas);
        });
    }
    // Will process swap/pools data and return best swaps
    processSwaps(tokenIn, tokenOut, swapType, swapAmount, pools, swapOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (pools.length === 0)
                return cloneDeep(EMPTY_SWAPINFO);
            const { pools: poolsOfInterest, paths } = this.routeProposer.getCandidatePaths(tokenIn, tokenOut, swapType, pools, swapOptions);
            if (paths.length == 0)
                return Object.assign({}, EMPTY_SWAPINFO);
            // Path is guaranteed to contain both tokenIn and tokenOut
            paths[0].swaps.forEach((swap) => {
                // Inject token decimals to avoid having to query onchain
                if (isSameAddress(swap.tokenIn, tokenIn)) {
                    this.swapCostCalculator.setTokenDecimals(tokenIn, swap.tokenInDecimals);
                }
                if (isSameAddress(swap.tokenOut, tokenOut)) {
                    this.swapCostCalculator.setTokenDecimals(tokenOut, swap.tokenOutDecimals);
                }
            });
            const costOutputToken = yield this.getCostOfSwapInToken(swapType === SwapTypes.SwapExactIn ? tokenOut : tokenIn, swapOptions.gasPrice, swapOptions.swapGas);
            // Returns list of swaps
            const [swaps, total, marketSp, totalConsideringFees] = this.getOptimalPaths(poolsOfInterest, paths, swapAmount, swapType, costOutputToken, swapOptions.maxPools);
            const swapInfo = formatSwaps(swaps, swapType, swapAmount, tokenIn, tokenOut, total, totalConsideringFees, marketSp);
            return swapInfo;
        });
    }
    /**
     * Find optimal routes for trade from given candidate paths
     */
    getOptimalPaths(pools, paths, swapAmount, swapType, costOutputToken, maxPools) {
        // swapExactIn - total = total amount swap will return of tokenOut
        // swapExactOut - total = total amount of tokenIn required for swap
        return smartOrderRouter(cloneDeep(pools), paths, swapType, swapAmount, maxPools, costOutputToken);
    }
}

/////////
/// UI Helpers
/////////
// Get BPT amount for token amounts with zero-price impact
// This function is the same regardless of whether we are considering
// an Add or Remove liquidity operation: The spot prices of BPT in tokens
// are the same regardless.
function BPTForTokensZeroPriceImpact$1(balances, decimals, normalizedWeights, amounts, bptTotalSupply) {
    // Calculate the amount of BPT adding this liquidity would result in
    // if there were no price impact, i.e. using the spot price of tokenIn/BPT
    // We need to scale down the amounts
    const amountsDownScaled = amounts.map((amount, i) => scale(amount, -decimals[i]));
    const amountBPTOut = amountsDownScaled.reduce((acc, amount, i) => {
        const poolPairData = {
            balanceIn: scale(balances[i], -decimals[i]),
            balanceOut: scale(bptTotalSupply, -18),
            weightIn: scale(normalizedWeights[i], -18),
            swapFee: ZERO,
        };
        const BPTPrice = _spotPriceAfterSwapTokenInForExactBPTOut$2(ZERO, poolPairData);
        return acc.plus(amount.div(BPTPrice));
    }, ZERO);
    // We need to scale up the amount of BPT out
    return scale(amountBPTOut, 18);
}

/////////
/// UI Helpers
/////////
// Get BPT amount for token amounts with zero-price impact
// This function is the same regardless of whether we are considering
// an Add or Remove liquidity operation: The spot prices of BPT in tokens
// are the same regardless.
function BPTForTokensZeroPriceImpact(balances, decimals, amounts, // This has to have the same lenght as allBalances
bptTotalSupply, amp, priceRates = balances.map(() => bnum(1))) {
    if (balances.length != amounts.length ||
        balances.length != priceRates.length)
        throw 'balances, amounts and priceRates have to have same length';
    // Calculate the amount of BPT adding this liquidity would result in
    // if there were no price impact, i.e. using the spot price of tokenIn/BPT
    // We need to scale down balances and amounts
    const balancesDownScaled = balances.map((balance, i) => scale(balance, -decimals[i]).times(priceRates[i]));
    const amountsDownScaled = amounts.map((amount, i) => scale(amount, -decimals[i]).times(priceRates[i]));
    const amountBPTOut = amountsDownScaled.reduce((acc, amount, i) => {
        const poolPairData = {
            amp: amp,
            allBalances: balancesDownScaled,
            tokenIndexIn: i,
            balanceOut: scale(bptTotalSupply, -18),
            swapFee: ZERO,
        };
        const BPTPrice = _spotPriceAfterSwapTokenInForExactBPTOut$1(ZERO, poolPairData);
        return acc.plus(amount.div(BPTPrice));
    }, ZERO);
    // We need to scale up the amount of BPT out
    return scale(amountBPTOut, 18);
}

export { PairTypes, PoolFilter, PoolTypes, SOR, SwapPairType, SwapTypes, bnum, scale, BPTForTokensZeroPriceImpact as stableBPTForTokensZeroPriceImpact, BPTForTokensZeroPriceImpact$1 as weightedBPTForTokensZeroPriceImpact };
//# sourceMappingURL=index.esm.js.map
