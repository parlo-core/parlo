"use client";
import {
  require_extends
} from "./chunk-XFO73W7Y.js";
import {
  G,
  QC,
  Z,
  ce,
  ge,
  lt,
  st,
  to,
  z
} from "./chunk-GPR7TKAP.js";
import "./chunk-5OFMTEAY.js";
import {
  require_react_dom
} from "./chunk-AHJ5QOXT.js";
import {
  require_react
} from "./chunk-HCG2JFOZ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/kbar/lib/utils.js
var require_utils = __commonJS({
  "node_modules/kbar/lib/utils.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to2, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to2.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Priority = exports.isModKey = exports.shouldRejectKeystrokes = exports.useThrottledValue = exports.getScrollbarWidth = exports.useIsomorphicLayout = exports.noop = exports.createAction = exports.randomId = exports.usePointerMovedSinceMount = exports.useOuterClick = exports.swallowEvent = void 0;
    var React2 = __importStar(require_react());
    function swallowEvent(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    exports.swallowEvent = swallowEvent;
    function useOuterClick(dom, cb) {
      var cbRef = React2.useRef(cb);
      cbRef.current = cb;
      React2.useEffect(function() {
        function handler(event) {
          var _a, _b;
          if (((_a = dom.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || // Add support for ReactShadowRoot
          // @ts-expect-error wrong types, the `host` property exists https://stackoverflow.com/a/25340456
          event.target === ((_b = dom.current) === null || _b === void 0 ? void 0 : _b.getRootNode().host)) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          cbRef.current();
        }
        window.addEventListener("pointerdown", handler, true);
        return function() {
          return window.removeEventListener("pointerdown", handler, true);
        };
      }, [dom]);
    }
    exports.useOuterClick = useOuterClick;
    function usePointerMovedSinceMount() {
      var _a = React2.useState(false), moved = _a[0], setMoved = _a[1];
      React2.useEffect(function() {
        function handler() {
          setMoved(true);
        }
        if (!moved) {
          window.addEventListener("pointermove", handler);
          return function() {
            return window.removeEventListener("pointermove", handler);
          };
        }
      }, [moved]);
      return moved;
    }
    exports.usePointerMovedSinceMount = usePointerMovedSinceMount;
    function randomId() {
      return Math.random().toString(36).substring(2, 9);
    }
    exports.randomId = randomId;
    function createAction(params) {
      return __assign({ id: randomId() }, params);
    }
    exports.createAction = createAction;
    function noop() {
    }
    exports.noop = noop;
    exports.useIsomorphicLayout = typeof window === "undefined" ? noop : React2.useLayoutEffect;
    function getScrollbarWidth() {
      var outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.overflow = "scroll";
      document.body.appendChild(outer);
      var inner = document.createElement("div");
      outer.appendChild(inner);
      var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      return scrollbarWidth;
    }
    exports.getScrollbarWidth = getScrollbarWidth;
    function useThrottledValue(value, ms) {
      if (ms === void 0) {
        ms = 100;
      }
      var _a = React2.useState(value), throttledValue = _a[0], setThrottledValue = _a[1];
      var lastRan = React2.useRef(Date.now());
      React2.useEffect(function() {
        if (ms === 0)
          return;
        var timeout = setTimeout(function() {
          setThrottledValue(value);
          lastRan.current = Date.now();
        }, lastRan.current - (Date.now() - ms));
        return function() {
          clearTimeout(timeout);
        };
      }, [ms, value]);
      return ms === 0 ? value : throttledValue;
    }
    exports.useThrottledValue = useThrottledValue;
    function shouldRejectKeystrokes(_a) {
      var _b, _c, _d;
      var _e = _a === void 0 ? { ignoreWhenFocused: [] } : _a, ignoreWhenFocused = _e.ignoreWhenFocused;
      var inputs = __spreadArray(["input", "textarea"], ignoreWhenFocused, true).map(function(el) {
        return el.toLowerCase();
      });
      var activeElement = document.activeElement;
      var ignoreStrokes = activeElement && (inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1 || ((_b = activeElement.attributes.getNamedItem("role")) === null || _b === void 0 ? void 0 : _b.value) === "textbox" || ((_c = activeElement.attributes.getNamedItem("contenteditable")) === null || _c === void 0 ? void 0 : _c.value) === "true" || ((_d = activeElement.attributes.getNamedItem("contenteditable")) === null || _d === void 0 ? void 0 : _d.value) === "plaintext-only");
      return ignoreStrokes;
    }
    exports.shouldRejectKeystrokes = shouldRejectKeystrokes;
    var SSR = typeof window === "undefined";
    var isMac = !SSR && window.navigator.platform === "MacIntel";
    function isModKey(event) {
      return isMac ? event.metaKey : event.ctrlKey;
    }
    exports.isModKey = isModKey;
    exports.Priority = {
      HIGH: 1,
      NORMAL: 0,
      LOW: -1
    };
  }
});

// node_modules/fast-equals/dist/fast-equals.js
var require_fast_equals = __commonJS({
  "node_modules/fast-equals/dist/fast-equals.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["fast-equals"] = {}));
    })(exports, function(exports2) {
      "use strict";
      var HAS_WEAKSET_SUPPORT = typeof WeakSet === "function";
      var keys = Object.keys;
      function sameValueZeroEqual(a, b) {
        return a === b || a !== a && b !== b;
      }
      function isPlainObject(value) {
        return value.constructor === Object || value.constructor == null;
      }
      function isPromiseLike(value) {
        return !!value && typeof value.then === "function";
      }
      function isReactElement(value) {
        return !!(value && value.$$typeof);
      }
      function getNewCacheFallback() {
        var values = [];
        return {
          add: function(value) {
            values.push(value);
          },
          has: function(value) {
            return values.indexOf(value) !== -1;
          }
        };
      }
      var getNewCache = function(canUseWeakMap) {
        if (canUseWeakMap) {
          return function _getNewCache() {
            return /* @__PURE__ */ new WeakSet();
          };
        }
        return getNewCacheFallback;
      }(HAS_WEAKSET_SUPPORT);
      function createCircularEqualCreator(isEqual) {
        return function createCircularEqual(comparator) {
          var _comparator = isEqual || comparator;
          return function circularEqual(a, b, cache) {
            if (cache === void 0) {
              cache = getNewCache();
            }
            var isCacheableA = !!a && typeof a === "object";
            var isCacheableB = !!b && typeof b === "object";
            if (isCacheableA || isCacheableB) {
              var hasA = isCacheableA && cache.has(a);
              var hasB = isCacheableB && cache.has(b);
              if (hasA || hasB) {
                return hasA && hasB;
              }
              if (isCacheableA) {
                cache.add(a);
              }
              if (isCacheableB) {
                cache.add(b);
              }
            }
            return _comparator(a, b, cache);
          };
        };
      }
      function areArraysEqual(a, b, isEqual, meta) {
        var index = a.length;
        if (b.length !== index) {
          return false;
        }
        while (index-- > 0) {
          if (!isEqual(a[index], b[index], meta)) {
            return false;
          }
        }
        return true;
      }
      function areMapsEqual(a, b, isEqual, meta) {
        var isValueEqual = a.size === b.size;
        if (isValueEqual && a.size) {
          var matchedIndices_1 = {};
          a.forEach(function(aValue, aKey) {
            if (isValueEqual) {
              var hasMatch_1 = false;
              var matchIndex_1 = 0;
              b.forEach(function(bValue, bKey) {
                if (!hasMatch_1 && !matchedIndices_1[matchIndex_1]) {
                  hasMatch_1 = isEqual(aKey, bKey, meta) && isEqual(aValue, bValue, meta);
                  if (hasMatch_1) {
                    matchedIndices_1[matchIndex_1] = true;
                  }
                }
                matchIndex_1++;
              });
              isValueEqual = hasMatch_1;
            }
          });
        }
        return isValueEqual;
      }
      var OWNER = "_owner";
      var hasOwnProperty = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
      function areObjectsEqual(a, b, isEqual, meta) {
        var keysA = keys(a);
        var index = keysA.length;
        if (keys(b).length !== index) {
          return false;
        }
        if (index) {
          var key = void 0;
          while (index-- > 0) {
            key = keysA[index];
            if (key === OWNER) {
              var reactElementA = isReactElement(a);
              var reactElementB = isReactElement(b);
              if ((reactElementA || reactElementB) && reactElementA !== reactElementB) {
                return false;
              }
            }
            if (!hasOwnProperty(b, key) || !isEqual(a[key], b[key], meta)) {
              return false;
            }
          }
        }
        return true;
      }
      function areRegExpsEqual(a, b) {
        return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.unicode === b.unicode && a.sticky === b.sticky && a.lastIndex === b.lastIndex;
      }
      function areSetsEqual(a, b, isEqual, meta) {
        var isValueEqual = a.size === b.size;
        if (isValueEqual && a.size) {
          var matchedIndices_2 = {};
          a.forEach(function(aValue) {
            if (isValueEqual) {
              var hasMatch_2 = false;
              var matchIndex_2 = 0;
              b.forEach(function(bValue) {
                if (!hasMatch_2 && !matchedIndices_2[matchIndex_2]) {
                  hasMatch_2 = isEqual(aValue, bValue, meta);
                  if (hasMatch_2) {
                    matchedIndices_2[matchIndex_2] = true;
                  }
                }
                matchIndex_2++;
              });
              isValueEqual = hasMatch_2;
            }
          });
        }
        return isValueEqual;
      }
      var HAS_MAP_SUPPORT = typeof Map === "function";
      var HAS_SET_SUPPORT = typeof Set === "function";
      function createComparator(createIsEqual) {
        var isEqual = (
          /* eslint-disable no-use-before-define */
          typeof createIsEqual === "function" ? createIsEqual(comparator) : comparator
        );
        function comparator(a, b, meta) {
          if (a === b) {
            return true;
          }
          if (a && b && typeof a === "object" && typeof b === "object") {
            if (isPlainObject(a) && isPlainObject(b)) {
              return areObjectsEqual(a, b, isEqual, meta);
            }
            var aShape = Array.isArray(a);
            var bShape = Array.isArray(b);
            if (aShape || bShape) {
              return aShape === bShape && areArraysEqual(a, b, isEqual, meta);
            }
            aShape = a instanceof Date;
            bShape = b instanceof Date;
            if (aShape || bShape) {
              return aShape === bShape && sameValueZeroEqual(a.getTime(), b.getTime());
            }
            aShape = a instanceof RegExp;
            bShape = b instanceof RegExp;
            if (aShape || bShape) {
              return aShape === bShape && areRegExpsEqual(a, b);
            }
            if (isPromiseLike(a) || isPromiseLike(b)) {
              return a === b;
            }
            if (HAS_MAP_SUPPORT) {
              aShape = a instanceof Map;
              bShape = b instanceof Map;
              if (aShape || bShape) {
                return aShape === bShape && areMapsEqual(a, b, isEqual, meta);
              }
            }
            if (HAS_SET_SUPPORT) {
              aShape = a instanceof Set;
              bShape = b instanceof Set;
              if (aShape || bShape) {
                return aShape === bShape && areSetsEqual(a, b, isEqual, meta);
              }
            }
            return areObjectsEqual(a, b, isEqual, meta);
          }
          return a !== a && b !== b;
        }
        return comparator;
      }
      var deepEqual = createComparator();
      var shallowEqual = createComparator(function() {
        return sameValueZeroEqual;
      });
      var circularDeepEqual = createComparator(createCircularEqualCreator());
      var circularShallowEqual = createComparator(createCircularEqualCreator(sameValueZeroEqual));
      exports2.circularDeepEqual = circularDeepEqual;
      exports2.circularShallowEqual = circularShallowEqual;
      exports2.createCustomEqual = createComparator;
      exports2.deepEqual = deepEqual;
      exports2.sameValueZeroEqual = sameValueZeroEqual;
      exports2.shallowEqual = shallowEqual;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/tiny-invariant/dist/tiny-invariant.cjs.js
var require_tiny_invariant_cjs = __commonJS({
  "node_modules/tiny-invariant/dist/tiny-invariant.cjs.js"(exports, module) {
    "use strict";
    var isProduction = false;
    var prefix = "Invariant failed";
    function invariant(condition, message) {
      if (condition) {
        return;
      }
      if (isProduction) {
        throw new Error(prefix);
      }
      var provided = typeof message === "function" ? message() : message;
      var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
      throw new Error(value);
    }
    module.exports = invariant;
  }
});

// node_modules/kbar/lib/action/Command.js
var require_Command = __commonJS({
  "node_modules/kbar/lib/action/Command.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Command = void 0;
    var Command = (
      /** @class */
      function() {
        function Command2(command, options) {
          var _this = this;
          if (options === void 0) {
            options = {};
          }
          this.perform = function() {
            var negate = command.perform();
            if (typeof negate !== "function")
              return;
            var history = options.history;
            if (!history)
              return;
            if (_this.historyItem) {
              history.remove(_this.historyItem);
            }
            _this.historyItem = history.add({
              perform: command.perform,
              negate
            });
            _this.history = {
              undo: function() {
                return history.undo(_this.historyItem);
              },
              redo: function() {
                return history.redo(_this.historyItem);
              }
            };
          };
        }
        return Command2;
      }()
    );
    exports.Command = Command;
  }
});

// node_modules/kbar/lib/action/ActionImpl.js
var require_ActionImpl = __commonJS({
  "node_modules/kbar/lib/action/ActionImpl.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActionImpl = void 0;
    var tiny_invariant_1 = __importDefault(require_tiny_invariant_cjs());
    var Command_1 = require_Command();
    var utils_1 = require_utils();
    var extendKeywords = function(_a) {
      var _b = _a.keywords, keywords = _b === void 0 ? "" : _b, _c = _a.section, section = _c === void 0 ? "" : _c;
      return (keywords + " " + (typeof section === "string" ? section : section.name)).trim();
    };
    var ActionImpl = (
      /** @class */
      function() {
        function ActionImpl2(action, options) {
          var _this = this;
          var _a;
          this.priority = utils_1.Priority.NORMAL;
          this.ancestors = [];
          this.children = [];
          Object.assign(this, action);
          this.id = action.id;
          this.name = action.name;
          this.keywords = extendKeywords(action);
          var perform = action.perform;
          this.command = perform && new Command_1.Command({
            perform: function() {
              return perform(_this);
            }
          }, {
            history: options.history
          });
          this.perform = (_a = this.command) === null || _a === void 0 ? void 0 : _a.perform;
          if (action.parent) {
            var parentActionImpl = options.store[action.parent];
            (0, tiny_invariant_1.default)(parentActionImpl, "attempted to create an action whos parent: " + action.parent + " does not exist in the store.");
            parentActionImpl.addChild(this);
          }
        }
        ActionImpl2.prototype.addChild = function(childActionImpl) {
          childActionImpl.ancestors.unshift(this);
          var parent = this.parentActionImpl;
          while (parent) {
            childActionImpl.ancestors.unshift(parent);
            parent = parent.parentActionImpl;
          }
          this.children.push(childActionImpl);
        };
        ActionImpl2.prototype.removeChild = function(actionImpl) {
          var _this = this;
          var index = this.children.indexOf(actionImpl);
          if (index !== -1) {
            this.children.splice(index, 1);
          }
          if (actionImpl.children) {
            actionImpl.children.forEach(function(child) {
              _this.removeChild(child);
            });
          }
        };
        Object.defineProperty(ActionImpl2.prototype, "parentActionImpl", {
          // easily access parentActionImpl after creation
          get: function() {
            return this.ancestors[this.ancestors.length - 1];
          },
          enumerable: false,
          configurable: true
        });
        ActionImpl2.create = function(action, options) {
          return new ActionImpl2(action, options);
        };
        return ActionImpl2;
      }()
    );
    exports.ActionImpl = ActionImpl;
  }
});

// node_modules/kbar/lib/action/ActionInterface.js
var require_ActionInterface = __commonJS({
  "node_modules/kbar/lib/action/ActionInterface.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActionInterface = void 0;
    var tiny_invariant_1 = __importDefault(require_tiny_invariant_cjs());
    var ActionImpl_1 = require_ActionImpl();
    var ActionInterface = (
      /** @class */
      function() {
        function ActionInterface2(actions, options) {
          if (actions === void 0) {
            actions = [];
          }
          if (options === void 0) {
            options = {};
          }
          this.actions = {};
          this.options = options;
          this.add(actions);
        }
        ActionInterface2.prototype.add = function(actions) {
          for (var i = 0; i < actions.length; i++) {
            var action = actions[i];
            if (action.parent) {
              (0, tiny_invariant_1.default)(this.actions[action.parent], 'Attempted to create action "' + action.name + '" without registering its parent "' + action.parent + '" first.');
            }
            this.actions[action.id] = ActionImpl_1.ActionImpl.create(action, {
              history: this.options.historyManager,
              store: this.actions
            });
          }
          return __assign({}, this.actions);
        };
        ActionInterface2.prototype.remove = function(actions) {
          var _this = this;
          actions.forEach(function(action) {
            var actionImpl = _this.actions[action.id];
            if (!actionImpl)
              return;
            var children = actionImpl.children;
            while (children.length) {
              var child = children.pop();
              if (!child)
                return;
              delete _this.actions[child.id];
              if (child.parentActionImpl)
                child.parentActionImpl.removeChild(child);
              if (child.children)
                children.push.apply(children, child.children);
            }
            if (actionImpl.parentActionImpl) {
              actionImpl.parentActionImpl.removeChild(actionImpl);
            }
            delete _this.actions[action.id];
          });
          return __assign({}, this.actions);
        };
        return ActionInterface2;
      }()
    );
    exports.ActionInterface = ActionInterface;
  }
});

// node_modules/kbar/lib/action/HistoryImpl.js
var require_HistoryImpl = __commonJS({
  "node_modules/kbar/lib/action/HistoryImpl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.history = exports.HistoryItemImpl = void 0;
    var utils_1 = require_utils();
    var HistoryItemImpl = (
      /** @class */
      function() {
        function HistoryItemImpl2(item) {
          this.perform = item.perform;
          this.negate = item.negate;
        }
        HistoryItemImpl2.create = function(item) {
          return new HistoryItemImpl2(item);
        };
        return HistoryItemImpl2;
      }()
    );
    exports.HistoryItemImpl = HistoryItemImpl;
    var HistoryImpl = (
      /** @class */
      function() {
        function HistoryImpl2() {
          this.undoStack = [];
          this.redoStack = [];
          if (!HistoryImpl2.instance) {
            HistoryImpl2.instance = this;
            this.init();
          }
          return HistoryImpl2.instance;
        }
        HistoryImpl2.prototype.init = function() {
          var _this = this;
          if (typeof window === "undefined")
            return;
          window.addEventListener("keydown", function(event) {
            var _a;
            if (!_this.redoStack.length && !_this.undoStack.length || (0, utils_1.shouldRejectKeystrokes)()) {
              return;
            }
            var key = (_a = event.key) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (event.metaKey && key === "z" && event.shiftKey) {
              _this.redo();
            } else if (event.metaKey && key === "z") {
              _this.undo();
            }
          });
        };
        HistoryImpl2.prototype.add = function(item) {
          var historyItem = HistoryItemImpl.create(item);
          this.undoStack.push(historyItem);
          return historyItem;
        };
        HistoryImpl2.prototype.remove = function(item) {
          var undoIndex = this.undoStack.findIndex(function(i) {
            return i === item;
          });
          if (undoIndex !== -1) {
            this.undoStack.splice(undoIndex, 1);
            return;
          }
          var redoIndex = this.redoStack.findIndex(function(i) {
            return i === item;
          });
          if (redoIndex !== -1) {
            this.redoStack.splice(redoIndex, 1);
          }
        };
        HistoryImpl2.prototype.undo = function(item) {
          if (!item) {
            var item_1 = this.undoStack.pop();
            if (!item_1)
              return;
            item_1 === null || item_1 === void 0 ? void 0 : item_1.negate();
            this.redoStack.push(item_1);
            return item_1;
          }
          var index = this.undoStack.findIndex(function(i) {
            return i === item;
          });
          if (index === -1)
            return;
          this.undoStack.splice(index, 1);
          item.negate();
          this.redoStack.push(item);
          return item;
        };
        HistoryImpl2.prototype.redo = function(item) {
          if (!item) {
            var item_2 = this.redoStack.pop();
            if (!item_2)
              return;
            item_2 === null || item_2 === void 0 ? void 0 : item_2.perform();
            this.undoStack.push(item_2);
            return item_2;
          }
          var index = this.redoStack.findIndex(function(i) {
            return i === item;
          });
          if (index === -1)
            return;
          this.redoStack.splice(index, 1);
          item.perform();
          this.undoStack.push(item);
          return item;
        };
        HistoryImpl2.prototype.reset = function() {
          this.undoStack.splice(0);
          this.redoStack.splice(0);
        };
        return HistoryImpl2;
      }()
    );
    var history = new HistoryImpl();
    exports.history = history;
    Object.freeze(history);
  }
});

// node_modules/kbar/lib/types.js
var require_types = __commonJS({
  "node_modules/kbar/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VisualState = void 0;
    var VisualState;
    (function(VisualState2) {
      VisualState2["animatingIn"] = "animating-in";
      VisualState2["showing"] = "showing";
      VisualState2["animatingOut"] = "animating-out";
      VisualState2["hidden"] = "hidden";
    })(VisualState = exports.VisualState || (exports.VisualState = {}));
  }
});

// node_modules/kbar/lib/useStore.js
var require_useStore = __commonJS({
  "node_modules/kbar/lib/useStore.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStore = void 0;
    var fast_equals_1 = require_fast_equals();
    var React2 = __importStar(require_react());
    var tiny_invariant_1 = __importDefault(require_tiny_invariant_cjs());
    var ActionInterface_1 = require_ActionInterface();
    var HistoryImpl_1 = require_HistoryImpl();
    var types_1 = require_types();
    function useStore(props2) {
      var optionsRef = React2.useRef(__assign({ animations: {
        enterMs: 200,
        exitMs: 100
      } }, props2.options));
      var actionsInterface = React2.useMemo(
        function() {
          return new ActionInterface_1.ActionInterface(props2.actions || [], {
            historyManager: optionsRef.current.enableHistory ? HistoryImpl_1.history : void 0
          });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
      var _a = React2.useState({
        searchQuery: "",
        currentRootActionId: null,
        visualState: types_1.VisualState.hidden,
        actions: __assign({}, actionsInterface.actions),
        activeIndex: 0,
        disabled: false
      }), state = _a[0], setState = _a[1];
      var currState = React2.useRef(state);
      currState.current = state;
      var getState = React2.useCallback(function() {
        return currState.current;
      }, []);
      var publisher = React2.useMemo(function() {
        return new Publisher(getState);
      }, [getState]);
      React2.useEffect(function() {
        currState.current = state;
        publisher.notify();
      }, [state, publisher]);
      var registerActions = React2.useCallback(function(actions) {
        setState(function(state2) {
          return __assign(__assign({}, state2), { actions: actionsInterface.add(actions) });
        });
        return function unregister() {
          setState(function(state2) {
            return __assign(__assign({}, state2), { actions: actionsInterface.remove(actions) });
          });
        };
      }, [actionsInterface]);
      var inputRef = React2.useRef(null);
      return React2.useMemo(function() {
        var query = {
          setCurrentRootAction: function(actionId) {
            setState(function(state2) {
              return __assign(__assign({}, state2), { currentRootActionId: actionId });
            });
          },
          setVisualState: function(cb) {
            setState(function(state2) {
              return __assign(__assign({}, state2), { visualState: typeof cb === "function" ? cb(state2.visualState) : cb });
            });
          },
          setSearch: function(searchQuery) {
            return setState(function(state2) {
              return __assign(__assign({}, state2), { searchQuery });
            });
          },
          registerActions,
          toggle: function() {
            return setState(function(state2) {
              return __assign(__assign({}, state2), { visualState: [types_1.VisualState.animatingOut, types_1.VisualState.hidden].includes(state2.visualState) ? types_1.VisualState.animatingIn : types_1.VisualState.animatingOut });
            });
          },
          setActiveIndex: function(cb) {
            return setState(function(state2) {
              return __assign(__assign({}, state2), { activeIndex: typeof cb === "number" ? cb : cb(state2.activeIndex) });
            });
          },
          inputRefSetter: function(el) {
            inputRef.current = el;
          },
          getInput: function() {
            (0, tiny_invariant_1.default)(inputRef.current, "Input ref is undefined, make sure you attach `query.inputRefSetter` to your search input.");
            return inputRef.current;
          },
          disable: function(disable) {
            setState(function(state2) {
              return __assign(__assign({}, state2), { disabled: disable });
            });
          }
        };
        return {
          getState,
          query,
          options: optionsRef.current,
          subscribe: function(collector, cb) {
            return publisher.subscribe(collector, cb);
          }
        };
      }, [getState, publisher, registerActions]);
    }
    exports.useStore = useStore;
    var Publisher = (
      /** @class */
      function() {
        function Publisher2(getState) {
          this.subscribers = [];
          this.getState = getState;
        }
        Publisher2.prototype.subscribe = function(collector, onChange) {
          var _this = this;
          var subscriber = new Subscriber(function() {
            return collector(_this.getState());
          }, onChange);
          this.subscribers.push(subscriber);
          return this.unsubscribe.bind(this, subscriber);
        };
        Publisher2.prototype.unsubscribe = function(subscriber) {
          if (this.subscribers.length) {
            var index = this.subscribers.indexOf(subscriber);
            if (index > -1) {
              return this.subscribers.splice(index, 1);
            }
          }
        };
        Publisher2.prototype.notify = function() {
          this.subscribers.forEach(function(subscriber) {
            return subscriber.collect();
          });
        };
        return Publisher2;
      }()
    );
    var Subscriber = (
      /** @class */
      function() {
        function Subscriber2(collector, onChange) {
          this.collector = collector;
          this.onChange = onChange;
        }
        Subscriber2.prototype.collect = function() {
          try {
            var recollect = this.collector();
            if (!(0, fast_equals_1.deepEqual)(recollect, this.collected)) {
              this.collected = recollect;
              if (this.onChange) {
                this.onChange(this.collected);
              }
            }
          } catch (error) {
            console.warn(error);
          }
        };
        return Subscriber2;
      }()
    );
  }
});

// node_modules/kbar/lib/tinykeys.js
var require_tinykeys = __commonJS({
  "node_modules/kbar/lib/tinykeys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KEYBINDING_MODIFIER_KEYS = ["Shift", "Meta", "Alt", "Control"];
    var DEFAULT_TIMEOUT = 1e3;
    var DEFAULT_EVENT = "keydown";
    var MOD = typeof navigator === "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
    function getModifierState(event, mod) {
      return typeof event.getModifierState === "function" ? event.getModifierState(mod) : false;
    }
    function parse2(str) {
      return str.trim().split(" ").map(function(press) {
        var mods = press.split(/\b\+/);
        var key = mods.pop();
        mods = mods.map(function(mod) {
          return mod === "$mod" ? MOD : mod;
        });
        return [mods, key];
      });
    }
    function match(event, press) {
      if (/^[^A-Za-z0-9]$/.test(event.key) && press[1] === event.key) {
        return true;
      }
      return !// Allow either the `event.key` or the `event.code`
      // MDN event.key: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
      // MDN event.code: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
      (press[1].toUpperCase() !== event.key.toUpperCase() && press[1] !== event.code || // Ensure all the modifiers in the keybinding are pressed.
      press[0].find(function(mod) {
        return !getModifierState(event, mod);
      }) || // KEYBINDING_MODIFIER_KEYS (Shift/Control/etc) change the meaning of a
      // keybinding. So if they are pressed but aren't part of the current
      // keybinding press, then we don't have a match.
      KEYBINDING_MODIFIER_KEYS.find(function(mod) {
        return !press[0].includes(mod) && press[1] !== mod && getModifierState(event, mod);
      }));
    }
    function keybindings(target, keyBindingMap, options) {
      var _a, _b;
      if (options === void 0) {
        options = {};
      }
      var timeout = (_a = options.timeout) !== null && _a !== void 0 ? _a : DEFAULT_TIMEOUT;
      var event = (_b = options.event) !== null && _b !== void 0 ? _b : DEFAULT_EVENT;
      var keyBindings = Object.keys(keyBindingMap).map(function(key) {
        return [parse2(key), keyBindingMap[key]];
      });
      var possibleMatches = /* @__PURE__ */ new Map();
      var timer = null;
      var onKeyEvent = function(event2) {
        if (!(event2 instanceof KeyboardEvent)) {
          return;
        }
        keyBindings.forEach(function(keyBinding) {
          var sequence = keyBinding[0];
          var callback = keyBinding[1];
          var prev = possibleMatches.get(sequence);
          var remainingExpectedPresses = prev ? prev : sequence;
          var currentExpectedPress = remainingExpectedPresses[0];
          var matches = match(event2, currentExpectedPress);
          if (!matches) {
            if (!getModifierState(event2, event2.key)) {
              possibleMatches.delete(sequence);
            }
          } else if (remainingExpectedPresses.length > 1) {
            possibleMatches.set(sequence, remainingExpectedPresses.slice(1));
          } else {
            possibleMatches.delete(sequence);
            callback(event2);
          }
        });
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(possibleMatches.clear.bind(possibleMatches), timeout);
      };
      target.addEventListener(event, onKeyEvent);
      return function() {
        target.removeEventListener(event, onKeyEvent);
      };
    }
    exports.default = keybindings;
  }
});

// node_modules/kbar/lib/InternalEvents.js
var require_InternalEvents = __commonJS({
  "node_modules/kbar/lib/InternalEvents.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalEvents = void 0;
    var React2 = __importStar(require_react());
    var tinykeys_1 = __importDefault(require_tinykeys());
    var types_1 = require_types();
    var useKBar_1 = require_useKBar();
    var utils_1 = require_utils();
    function InternalEvents() {
      useToggleHandler();
      useDocumentLock();
      useShortcuts();
      useFocusHandler();
      return null;
    }
    exports.InternalEvents = InternalEvents;
    function useToggleHandler() {
      var _a, _b;
      var _c = (0, useKBar_1.useKBar)(function(state) {
        return {
          visualState: state.visualState,
          showing: state.visualState !== types_1.VisualState.hidden,
          disabled: state.disabled
        };
      }), query = _c.query, options = _c.options, visualState = _c.visualState, showing = _c.showing, disabled = _c.disabled;
      React2.useEffect(function() {
        var _a2;
        var close = function() {
          query.setVisualState(function(vs) {
            if (vs === types_1.VisualState.hidden || vs === types_1.VisualState.animatingOut) {
              return vs;
            }
            return types_1.VisualState.animatingOut;
          });
        };
        if (disabled) {
          close();
          return;
        }
        var shortcut = options.toggleShortcut || "$mod+k";
        var unsubscribe = (0, tinykeys_1.default)(window, (_a2 = {}, _a2[shortcut] = function(event) {
          var _a3, _b2, _c2, _d;
          if (event.defaultPrevented)
            return;
          event.preventDefault();
          query.toggle();
          if (showing) {
            (_b2 = (_a3 = options.callbacks) === null || _a3 === void 0 ? void 0 : _a3.onClose) === null || _b2 === void 0 ? void 0 : _b2.call(_a3);
          } else {
            (_d = (_c2 = options.callbacks) === null || _c2 === void 0 ? void 0 : _c2.onOpen) === null || _d === void 0 ? void 0 : _d.call(_c2);
          }
        }, _a2.Escape = function(event) {
          var _a3, _b2;
          if (showing) {
            event.stopPropagation();
            event.preventDefault();
            (_b2 = (_a3 = options.callbacks) === null || _a3 === void 0 ? void 0 : _a3.onClose) === null || _b2 === void 0 ? void 0 : _b2.call(_a3);
          }
          close();
        }, _a2));
        return function() {
          unsubscribe();
        };
      }, [options.callbacks, options.toggleShortcut, query, showing, disabled]);
      var timeoutRef = React2.useRef();
      var runAnimateTimer = React2.useCallback(function(vs) {
        var _a2, _b2;
        var ms = 0;
        if (vs === types_1.VisualState.animatingIn) {
          ms = ((_a2 = options.animations) === null || _a2 === void 0 ? void 0 : _a2.enterMs) || 0;
        }
        if (vs === types_1.VisualState.animatingOut) {
          ms = ((_b2 = options.animations) === null || _b2 === void 0 ? void 0 : _b2.exitMs) || 0;
        }
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(function() {
          var backToRoot = false;
          query.setVisualState(function() {
            var finalVs = vs === types_1.VisualState.animatingIn ? types_1.VisualState.showing : types_1.VisualState.hidden;
            if (finalVs === types_1.VisualState.hidden) {
              backToRoot = true;
            }
            return finalVs;
          });
          if (backToRoot) {
            query.setCurrentRootAction(null);
          }
        }, ms);
      }, [(_a = options.animations) === null || _a === void 0 ? void 0 : _a.enterMs, (_b = options.animations) === null || _b === void 0 ? void 0 : _b.exitMs, query]);
      React2.useEffect(function() {
        switch (visualState) {
          case types_1.VisualState.animatingIn:
          case types_1.VisualState.animatingOut:
            runAnimateTimer(visualState);
            break;
        }
      }, [runAnimateTimer, visualState]);
    }
    function useDocumentLock() {
      var _a = (0, useKBar_1.useKBar)(function(state) {
        return {
          visualState: state.visualState
        };
      }), visualState = _a.visualState, options = _a.options;
      React2.useEffect(function() {
        if (options.disableDocumentLock)
          return;
        if (visualState === types_1.VisualState.animatingIn) {
          document.body.style.overflow = "hidden";
          if (!options.disableScrollbarManagement) {
            var scrollbarWidth = (0, utils_1.getScrollbarWidth)();
            var mr = getComputedStyle(document.body)["margin-right"];
            if (mr) {
              scrollbarWidth += Number(mr.replace(/\D/g, ""));
            }
            document.body.style.marginRight = scrollbarWidth + "px";
          }
        } else if (visualState === types_1.VisualState.hidden) {
          document.body.style.removeProperty("overflow");
          if (!options.disableScrollbarManagement) {
            document.body.style.removeProperty("margin-right");
          }
        }
      }, [
        options.disableDocumentLock,
        options.disableScrollbarManagement,
        visualState
      ]);
    }
    var handled = /* @__PURE__ */ new WeakSet();
    function wrap(handler) {
      return function(event) {
        if (handled.has(event))
          return;
        handler(event);
        handled.add(event);
      };
    }
    function useShortcuts() {
      var _a = (0, useKBar_1.useKBar)(function(state) {
        return {
          actions: state.actions,
          open: state.visualState === types_1.VisualState.showing,
          disabled: state.disabled
        };
      }), actions = _a.actions, query = _a.query, open = _a.open, options = _a.options, disabled = _a.disabled;
      React2.useEffect(function() {
        var _a2;
        if (open || disabled)
          return;
        var actionsList = Object.keys(actions).map(function(key) {
          return actions[key];
        });
        var actionsWithShortcuts = [];
        for (var _i = 0, actionsList_1 = actionsList; _i < actionsList_1.length; _i++) {
          var action = actionsList_1[_i];
          if (!((_a2 = action.shortcut) === null || _a2 === void 0 ? void 0 : _a2.length)) {
            continue;
          }
          actionsWithShortcuts.push(action);
        }
        actionsWithShortcuts = actionsWithShortcuts.sort(function(a, b) {
          return b.shortcut.join(" ").length - a.shortcut.join(" ").length;
        });
        var shortcutsMap = {};
        var _loop_1 = function(action2) {
          var shortcut = action2.shortcut.join(" ");
          shortcutsMap[shortcut] = wrap(function(event) {
            var _a3, _b2, _c, _d, _e, _f;
            if ((0, utils_1.shouldRejectKeystrokes)())
              return;
            event.preventDefault();
            if ((_a3 = action2.children) === null || _a3 === void 0 ? void 0 : _a3.length) {
              query.setCurrentRootAction(action2.id);
              query.toggle();
              (_c = (_b2 = options.callbacks) === null || _b2 === void 0 ? void 0 : _b2.onOpen) === null || _c === void 0 ? void 0 : _c.call(_b2);
            } else {
              (_d = action2.command) === null || _d === void 0 ? void 0 : _d.perform();
              (_f = (_e = options.callbacks) === null || _e === void 0 ? void 0 : _e.onSelectAction) === null || _f === void 0 ? void 0 : _f.call(_e, action2);
            }
          });
        };
        for (var _b = 0, actionsWithShortcuts_1 = actionsWithShortcuts; _b < actionsWithShortcuts_1.length; _b++) {
          var action = actionsWithShortcuts_1[_b];
          _loop_1(action);
        }
        var unsubscribe = (0, tinykeys_1.default)(window, shortcutsMap, {
          timeout: 400
        });
        return function() {
          unsubscribe();
        };
      }, [actions, open, options.callbacks, query, disabled]);
    }
    function useFocusHandler() {
      var rFirstRender = React2.useRef(true);
      var _a = (0, useKBar_1.useKBar)(function(state) {
        return {
          isShowing: state.visualState === types_1.VisualState.showing || state.visualState === types_1.VisualState.animatingIn
        };
      }), isShowing = _a.isShowing, query = _a.query;
      var activeElementRef = React2.useRef(null);
      React2.useEffect(function() {
        if (rFirstRender.current) {
          rFirstRender.current = false;
          return;
        }
        if (isShowing) {
          activeElementRef.current = document.activeElement;
          return;
        }
        var currentActiveElement = document.activeElement;
        if ((currentActiveElement === null || currentActiveElement === void 0 ? void 0 : currentActiveElement.tagName.toLowerCase()) === "input") {
          currentActiveElement.blur();
        }
        var activeElement = activeElementRef.current;
        if (activeElement && activeElement !== currentActiveElement) {
          activeElement.focus();
        }
      }, [isShowing]);
      React2.useEffect(function() {
        function handler(event) {
          var input = query.getInput();
          if (event.target !== input) {
            input.focus();
          }
        }
        if (isShowing) {
          window.addEventListener("keydown", handler);
          return function() {
            window.removeEventListener("keydown", handler);
          };
        }
      }, [isShowing, query]);
    }
  }
});

// node_modules/kbar/lib/KBarContextProvider.js
var require_KBarContextProvider = __commonJS({
  "node_modules/kbar/lib/KBarContextProvider.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KBarProvider = exports.KBarContext = void 0;
    var useStore_1 = require_useStore();
    var React2 = __importStar(require_react());
    var InternalEvents_1 = require_InternalEvents();
    exports.KBarContext = React2.createContext({});
    var KBarProvider = function(props2) {
      var contextValue = (0, useStore_1.useStore)(props2);
      return React2.createElement(
        exports.KBarContext.Provider,
        { value: contextValue },
        React2.createElement(InternalEvents_1.InternalEvents, null),
        props2.children
      );
    };
    exports.KBarProvider = KBarProvider;
  }
});

// node_modules/kbar/lib/useKBar.js
var require_useKBar = __commonJS({
  "node_modules/kbar/lib/useKBar.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useKBar = void 0;
    var React2 = __importStar(require_react());
    var KBarContextProvider_1 = require_KBarContextProvider();
    function useKBar(collector) {
      var _a = React2.useContext(KBarContextProvider_1.KBarContext), query = _a.query, getState = _a.getState, subscribe = _a.subscribe, options = _a.options;
      var collected = React2.useRef(collector === null || collector === void 0 ? void 0 : collector(getState()));
      var collectorRef = React2.useRef(collector);
      var onCollect = React2.useCallback(function(collected2) {
        return __assign(__assign({}, collected2), { query, options });
      }, [query, options]);
      var _b = React2.useState(onCollect(collected.current)), render = _b[0], setRender = _b[1];
      React2.useEffect(function() {
        var unsubscribe;
        if (collectorRef.current) {
          unsubscribe = subscribe(function(current) {
            return collectorRef.current(current);
          }, function(collected2) {
            return setRender(onCollect(collected2));
          });
        }
        return function() {
          if (unsubscribe) {
            unsubscribe();
          }
        };
      }, [onCollect, subscribe]);
      return render;
    }
    exports.useKBar = useKBar;
  }
});

// node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm_exports = {};
__export(fuse_esm_exports, {
  default: () => Fuse
});
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches)
    transformers.push(transformMatches);
  if (includeScore)
    transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
var INFINITY, INCORRECT_INDEX_TYPE, LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY, PATTERN_LENGTH_TOO_LARGE, MISSING_KEY_PROPERTY, INVALID_KEY_WEIGHT_VALUE, hasOwn, KeyStore, MatchOptions, BasicOptions, FuzzyOptions, AdvancedOptions, Config, SPACE, FuseIndex, MAX_BITS, BitapSearch, BaseMatch, ExactMatch, InverseExactMatch, PrefixExactMatch, InversePrefixExactMatch, SuffixExactMatch, InverseSuffixExactMatch, FuzzyMatch, IncludeMatch, searchers, searchersLen, SPACE_RE, OR_TOKEN, MultiMatchSet, ExtendedSearch, registeredSearchers, LogicalOperator, KeyType, isExpression, isPath, isLeaf, convertToExplicit, Fuse;
var init_fuse_esm = __esm({
  "node_modules/fuse.js/dist/fuse.esm.js"() {
    INFINITY = 1 / 0;
    INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
    LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
    PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
    MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
    INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
    hasOwn = Object.prototype.hasOwnProperty;
    KeyStore = class {
      constructor(keys) {
        this._keys = [];
        this._keyMap = {};
        let totalWeight = 0;
        keys.forEach((key) => {
          let obj = createKey(key);
          totalWeight += obj.weight;
          this._keys.push(obj);
          this._keyMap[obj.id] = obj;
          totalWeight += obj.weight;
        });
        this._keys.forEach((key) => {
          key.weight /= totalWeight;
        });
      }
      get(keyId) {
        return this._keyMap[keyId];
      }
      keys() {
        return this._keys;
      }
      toJSON() {
        return JSON.stringify(this._keys);
      }
    };
    MatchOptions = {
      // Whether the matches should be included in the result set. When `true`, each record in the result
      // set will include the indices of the matched characters.
      // These can consequently be used for highlighting purposes.
      includeMatches: false,
      // When `true`, the matching function will continue to the end of a search pattern even if
      // a perfect match has already been located in the string.
      findAllMatches: false,
      // Minimum number of characters that must be matched before a result is considered a match
      minMatchCharLength: 1
    };
    BasicOptions = {
      // When `true`, the algorithm continues searching to the end of the input even if a perfect
      // match is found before the end of the same input.
      isCaseSensitive: false,
      // When true, the matching function will continue to the end of a search pattern even if
      includeScore: false,
      // List of properties that will be searched. This also supports nested properties.
      keys: [],
      // Whether to sort the result list, by score
      shouldSort: true,
      // Default sort function: sort by ascending score, ascending index
      sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
    };
    FuzzyOptions = {
      // Approximately where in the text is the pattern expected to be found?
      location: 0,
      // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
      // (of both letters and location), a threshold of '1.0' would match anything.
      threshold: 0.6,
      // Determines how close the match must be to the fuzzy location (specified above).
      // An exact letter match which is 'distance' characters away from the fuzzy location
      // would score as a complete mismatch. A distance of '0' requires the match be at
      // the exact location specified, a threshold of '1000' would require a perfect match
      // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
      distance: 100
    };
    AdvancedOptions = {
      // When `true`, it enables the use of unix-like search commands
      useExtendedSearch: false,
      // The get function to use when fetching an object's properties.
      // The default will search nested paths *ie foo.bar.baz*
      getFn: get,
      // When `true`, search will ignore `location` and `distance`, so it won't matter
      // where in the string the pattern appears.
      // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
      ignoreLocation: false,
      // When `true`, the calculation for the relevance score (used for sorting) will
      // ignore the field-length norm.
      // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
      ignoreFieldNorm: false,
      // The weight to determine how much field length norm effects scoring.
      fieldNormWeight: 1
    };
    Config = {
      ...BasicOptions,
      ...MatchOptions,
      ...FuzzyOptions,
      ...AdvancedOptions
    };
    SPACE = /[^ ]+/g;
    FuseIndex = class {
      constructor({
        getFn = Config.getFn,
        fieldNormWeight = Config.fieldNormWeight
      } = {}) {
        this.norm = norm(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
      }
      setSources(docs = []) {
        this.docs = docs;
      }
      setIndexRecords(records = []) {
        this.records = records;
      }
      setKeys(keys = []) {
        this.keys = keys;
        this._keysMap = {};
        keys.forEach((key, idx) => {
          this._keysMap[key.id] = idx;
        });
      }
      create() {
        if (this.isCreated || !this.docs.length) {
          return;
        }
        this.isCreated = true;
        if (isString(this.docs[0])) {
          this.docs.forEach((doc, docIndex) => {
            this._addString(doc, docIndex);
          });
        } else {
          this.docs.forEach((doc, docIndex) => {
            this._addObject(doc, docIndex);
          });
        }
        this.norm.clear();
      }
      // Adds a doc to the end of the index
      add(doc) {
        const idx = this.size();
        if (isString(doc)) {
          this._addString(doc, idx);
        } else {
          this._addObject(doc, idx);
        }
      }
      // Removes the doc at the specified index of the index
      removeAt(idx) {
        this.records.splice(idx, 1);
        for (let i = idx, len = this.size(); i < len; i += 1) {
          this.records[i].i -= 1;
        }
      }
      getValueForItemAtKeyId(item, keyId) {
        return item[this._keysMap[keyId]];
      }
      size() {
        return this.records.length;
      }
      _addString(doc, docIndex) {
        if (!isDefined(doc) || isBlank(doc)) {
          return;
        }
        let record = {
          v: doc,
          i: docIndex,
          n: this.norm.get(doc)
        };
        this.records.push(record);
      }
      _addObject(doc, docIndex) {
        let record = { i: docIndex, $: {} };
        this.keys.forEach((key, keyIndex) => {
          let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
          if (!isDefined(value)) {
            return;
          }
          if (isArray(value)) {
            let subRecords = [];
            const stack = [{ nestedArrIndex: -1, value }];
            while (stack.length) {
              const { nestedArrIndex, value: value2 } = stack.pop();
              if (!isDefined(value2)) {
                continue;
              }
              if (isString(value2) && !isBlank(value2)) {
                let subRecord = {
                  v: value2,
                  i: nestedArrIndex,
                  n: this.norm.get(value2)
                };
                subRecords.push(subRecord);
              } else if (isArray(value2)) {
                value2.forEach((item, k) => {
                  stack.push({
                    nestedArrIndex: k,
                    value: item
                  });
                });
              } else
                ;
            }
            record.$[keyIndex] = subRecords;
          } else if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              n: this.norm.get(value)
            };
            record.$[keyIndex] = subRecord;
          }
        });
        this.records.push(record);
      }
      toJSON() {
        return {
          keys: this.keys,
          records: this.records
        };
      }
    };
    MAX_BITS = 32;
    BitapSearch = class {
      constructor(pattern, {
        location = Config.location,
        threshold = Config.threshold,
        distance = Config.distance,
        includeMatches = Config.includeMatches,
        findAllMatches = Config.findAllMatches,
        minMatchCharLength = Config.minMatchCharLength,
        isCaseSensitive = Config.isCaseSensitive,
        ignoreLocation = Config.ignoreLocation
      } = {}) {
        this.options = {
          location,
          threshold,
          distance,
          includeMatches,
          findAllMatches,
          minMatchCharLength,
          isCaseSensitive,
          ignoreLocation
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.chunks = [];
        if (!this.pattern.length) {
          return;
        }
        const addChunk = (pattern2, startIndex) => {
          this.chunks.push({
            pattern: pattern2,
            alphabet: createPatternAlphabet(pattern2),
            startIndex
          });
        };
        const len = this.pattern.length;
        if (len > MAX_BITS) {
          let i = 0;
          const remainder = len % MAX_BITS;
          const end = len - remainder;
          while (i < end) {
            addChunk(this.pattern.substr(i, MAX_BITS), i);
            i += MAX_BITS;
          }
          if (remainder) {
            const startIndex = len - MAX_BITS;
            addChunk(this.pattern.substr(startIndex), startIndex);
          }
        } else {
          addChunk(this.pattern, 0);
        }
      }
      searchIn(text) {
        const { isCaseSensitive, includeMatches } = this.options;
        if (!isCaseSensitive) {
          text = text.toLowerCase();
        }
        if (this.pattern === text) {
          let result2 = {
            isMatch: true,
            score: 0
          };
          if (includeMatches) {
            result2.indices = [[0, text.length - 1]];
          }
          return result2;
        }
        const {
          location,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          ignoreLocation
        } = this.options;
        let allIndices = [];
        let totalScore = 0;
        let hasMatches = false;
        this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
          const { isMatch, score, indices } = search(text, pattern, alphabet, {
            location: location + startIndex,
            distance,
            threshold,
            findAllMatches,
            minMatchCharLength,
            includeMatches,
            ignoreLocation
          });
          if (isMatch) {
            hasMatches = true;
          }
          totalScore += score;
          if (isMatch && indices) {
            allIndices = [...allIndices, ...indices];
          }
        });
        let result = {
          isMatch: hasMatches,
          score: hasMatches ? totalScore / this.chunks.length : 1
        };
        if (hasMatches && includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    };
    BaseMatch = class {
      constructor(pattern) {
        this.pattern = pattern;
      }
      static isMultiMatch(pattern) {
        return getMatch(pattern, this.multiRegex);
      }
      static isSingleMatch(pattern) {
        return getMatch(pattern, this.singleRegex);
      }
      search() {
      }
    };
    ExactMatch = class extends BaseMatch {
      constructor(pattern) {
        super(pattern);
      }
      static get type() {
        return "exact";
      }
      static get multiRegex() {
        return /^="(.*)"$/;
      }
      static get singleRegex() {
        return /^=(.*)$/;
      }
      search(text) {
        const isMatch = text === this.pattern;
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, this.pattern.length - 1]
        };
      }
    };
    InverseExactMatch = class extends BaseMatch {
      constructor(pattern) {
        super(pattern);
      }
      static get type() {
        return "inverse-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"$/;
      }
      static get singleRegex() {
        return /^!(.*)$/;
      }
      search(text) {
        const index = text.indexOf(this.pattern);
        const isMatch = index === -1;
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    };
    PrefixExactMatch = class extends BaseMatch {
      constructor(pattern) {
        super(pattern);
      }
      static get type() {
        return "prefix-exact";
      }
      static get multiRegex() {
        return /^\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^\^(.*)$/;
      }
      search(text) {
        const isMatch = text.startsWith(this.pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, this.pattern.length - 1]
        };
      }
    };
    InversePrefixExactMatch = class extends BaseMatch {
      constructor(pattern) {
        super(pattern);
      }
      static get type() {
        return "inverse-prefix-exact";
      }
      static get multiRegex() {
        return /^!\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^!\^(.*)$/;
      }
      search(text) {
        const isMatch = !text.startsWith(this.pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    };
    SuffixExactMatch = class extends BaseMatch {
      constructor(pattern) {
        super(pattern);
      }
      static get type() {
        return "suffix-exact";
      }
      static get multiRegex() {
        return /^"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^(.*)\$$/;
      }
      search(text) {
        const isMatch = text.endsWith(this.pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [text.length - this.pattern.length, text.length - 1]
        };
      }
    };
    InverseSuffixExactMatch = class extends BaseMatch {
      constructor(pattern) {
        super(pattern);
      }
      static get type() {
        return "inverse-suffix-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^!(.*)\$$/;
      }
      search(text) {
        const isMatch = !text.endsWith(this.pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    };
    FuzzyMatch = class extends BaseMatch {
      constructor(pattern, {
        location = Config.location,
        threshold = Config.threshold,
        distance = Config.distance,
        includeMatches = Config.includeMatches,
        findAllMatches = Config.findAllMatches,
        minMatchCharLength = Config.minMatchCharLength,
        isCaseSensitive = Config.isCaseSensitive,
        ignoreLocation = Config.ignoreLocation
      } = {}) {
        super(pattern);
        this._bitapSearch = new BitapSearch(pattern, {
          location,
          threshold,
          distance,
          includeMatches,
          findAllMatches,
          minMatchCharLength,
          isCaseSensitive,
          ignoreLocation
        });
      }
      static get type() {
        return "fuzzy";
      }
      static get multiRegex() {
        return /^"(.*)"$/;
      }
      static get singleRegex() {
        return /^(.*)$/;
      }
      search(text) {
        return this._bitapSearch.searchIn(text);
      }
    };
    IncludeMatch = class extends BaseMatch {
      constructor(pattern) {
        super(pattern);
      }
      static get type() {
        return "include";
      }
      static get multiRegex() {
        return /^'"(.*)"$/;
      }
      static get singleRegex() {
        return /^'(.*)$/;
      }
      search(text) {
        let location = 0;
        let index;
        const indices = [];
        const patternLen = this.pattern.length;
        while ((index = text.indexOf(this.pattern, location)) > -1) {
          location = index + patternLen;
          indices.push([index, location - 1]);
        }
        const isMatch = !!indices.length;
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices
        };
      }
    };
    searchers = [
      ExactMatch,
      IncludeMatch,
      PrefixExactMatch,
      InversePrefixExactMatch,
      InverseSuffixExactMatch,
      SuffixExactMatch,
      InverseExactMatch,
      FuzzyMatch
    ];
    searchersLen = searchers.length;
    SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
    OR_TOKEN = "|";
    MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
    ExtendedSearch = class {
      constructor(pattern, {
        isCaseSensitive = Config.isCaseSensitive,
        includeMatches = Config.includeMatches,
        minMatchCharLength = Config.minMatchCharLength,
        ignoreLocation = Config.ignoreLocation,
        findAllMatches = Config.findAllMatches,
        location = Config.location,
        threshold = Config.threshold,
        distance = Config.distance
      } = {}) {
        this.query = null;
        this.options = {
          isCaseSensitive,
          includeMatches,
          minMatchCharLength,
          findAllMatches,
          ignoreLocation,
          location,
          threshold,
          distance
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.query = parseQuery(this.pattern, this.options);
      }
      static condition(_, options) {
        return options.useExtendedSearch;
      }
      searchIn(text) {
        const query = this.query;
        if (!query) {
          return {
            isMatch: false,
            score: 1
          };
        }
        const { includeMatches, isCaseSensitive } = this.options;
        text = isCaseSensitive ? text : text.toLowerCase();
        let numMatches = 0;
        let allIndices = [];
        let totalScore = 0;
        for (let i = 0, qLen = query.length; i < qLen; i += 1) {
          const searchers2 = query[i];
          allIndices.length = 0;
          numMatches = 0;
          for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
            const searcher = searchers2[j];
            const { isMatch, indices, score } = searcher.search(text);
            if (isMatch) {
              numMatches += 1;
              totalScore += score;
              if (includeMatches) {
                const type = searcher.constructor.type;
                if (MultiMatchSet.has(type)) {
                  allIndices = [...allIndices, ...indices];
                } else {
                  allIndices.push(indices);
                }
              }
            } else {
              totalScore = 0;
              numMatches = 0;
              allIndices.length = 0;
              break;
            }
          }
          if (numMatches) {
            let result = {
              isMatch: true,
              score: totalScore / numMatches
            };
            if (includeMatches) {
              result.indices = allIndices;
            }
            return result;
          }
        }
        return {
          isMatch: false,
          score: 1
        };
      }
    };
    registeredSearchers = [];
    LogicalOperator = {
      AND: "$and",
      OR: "$or"
    };
    KeyType = {
      PATH: "$path",
      PATTERN: "$val"
    };
    isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
    isPath = (query) => !!query[KeyType.PATH];
    isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
    convertToExplicit = (query) => ({
      [LogicalOperator.AND]: Object.keys(query).map((key) => ({
        [key]: query[key]
      }))
    });
    Fuse = class {
      constructor(docs, options = {}, index) {
        this.options = { ...Config, ...options };
        if (this.options.useExtendedSearch && false) {
          throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
        }
        this._keyStore = new KeyStore(this.options.keys);
        this.setCollection(docs, index);
      }
      setCollection(docs, index) {
        this._docs = docs;
        if (index && !(index instanceof FuseIndex)) {
          throw new Error(INCORRECT_INDEX_TYPE);
        }
        this._myIndex = index || createIndex(this.options.keys, this._docs, {
          getFn: this.options.getFn,
          fieldNormWeight: this.options.fieldNormWeight
        });
      }
      add(doc) {
        if (!isDefined(doc)) {
          return;
        }
        this._docs.push(doc);
        this._myIndex.add(doc);
      }
      remove(predicate = () => false) {
        const results = [];
        for (let i = 0, len = this._docs.length; i < len; i += 1) {
          const doc = this._docs[i];
          if (predicate(doc, i)) {
            this.removeAt(i);
            i -= 1;
            len -= 1;
            results.push(doc);
          }
        }
        return results;
      }
      removeAt(idx) {
        this._docs.splice(idx, 1);
        this._myIndex.removeAt(idx);
      }
      getIndex() {
        return this._myIndex;
      }
      search(query, { limit = -1 } = {}) {
        const {
          includeMatches,
          includeScore,
          shouldSort,
          sortFn,
          ignoreFieldNorm
        } = this.options;
        let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
        computeScore(results, { ignoreFieldNorm });
        if (shouldSort) {
          results.sort(sortFn);
        }
        if (isNumber(limit) && limit > -1) {
          results = results.slice(0, limit);
        }
        return format(results, this._docs, {
          includeMatches,
          includeScore
        });
      }
      _searchStringList(query) {
        const searcher = createSearcher(query, this.options);
        const { records } = this._myIndex;
        const results = [];
        records.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            results.push({
              item: text,
              idx,
              matches: [{ score, value: text, norm: norm2, indices }]
            });
          }
        });
        return results;
      }
      _searchLogical(query) {
        const expression = parse(query, this.options);
        const evaluate = (node, item, idx) => {
          if (!node.children) {
            const { keyId, searcher } = node;
            const matches = this._findMatches({
              key: this._keyStore.get(keyId),
              value: this._myIndex.getValueForItemAtKeyId(item, keyId),
              searcher
            });
            if (matches && matches.length) {
              return [
                {
                  idx,
                  item,
                  matches
                }
              ];
            }
            return [];
          }
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
            } else if (node.operator === LogicalOperator.AND) {
              return [];
            }
          }
          return res;
        };
        const records = this._myIndex.records;
        const resultMap = {};
        const results = [];
        records.forEach(({ $: item, i: idx }) => {
          if (isDefined(item)) {
            let expResults = evaluate(expression, item, idx);
            if (expResults.length) {
              if (!resultMap[idx]) {
                resultMap[idx] = { idx, item, matches: [] };
                results.push(resultMap[idx]);
              }
              expResults.forEach(({ matches }) => {
                resultMap[idx].matches.push(...matches);
              });
            }
          }
        });
        return results;
      }
      _searchObjectList(query) {
        const searcher = createSearcher(query, this.options);
        const { keys, records } = this._myIndex;
        const results = [];
        records.forEach(({ $: item, i: idx }) => {
          if (!isDefined(item)) {
            return;
          }
          let matches = [];
          keys.forEach((key, keyIndex) => {
            matches.push(
              ...this._findMatches({
                key,
                value: item[keyIndex],
                searcher
              })
            );
          });
          if (matches.length) {
            results.push({
              idx,
              item,
              matches
            });
          }
        });
        return results;
      }
      _findMatches({ key, value, searcher }) {
        if (!isDefined(value)) {
          return [];
        }
        let matches = [];
        if (isArray(value)) {
          value.forEach(({ v: text, i: idx, n: norm2 }) => {
            if (!isDefined(text)) {
              return;
            }
            const { isMatch, score, indices } = searcher.searchIn(text);
            if (isMatch) {
              matches.push({
                score,
                key,
                value: text,
                idx,
                norm: norm2,
                indices
              });
            }
          });
        } else {
          const { v: text, n: norm2 } = value;
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({ score, key, value: text, norm: norm2, indices });
          }
        }
        return matches;
      }
    };
    Fuse.version = "6.6.2";
    Fuse.createIndex = createIndex;
    Fuse.parseIndex = parseIndex;
    Fuse.config = Config;
    {
      Fuse.parseQuery = parse;
    }
    {
      register(ExtendedSearch);
    }
  }
});

// node_modules/kbar/lib/useMatches.js
var require_useMatches = __commonJS({
  "node_modules/kbar/lib/useMatches.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useDeepMatches = exports.useMatches = exports.NO_GROUP = void 0;
    var React2 = __importStar(require_react());
    var useKBar_1 = require_useKBar();
    var utils_1 = require_utils();
    var fuse_js_1 = __importDefault((init_fuse_esm(), __toCommonJS(fuse_esm_exports)));
    exports.NO_GROUP = {
      name: "none",
      priority: utils_1.Priority.NORMAL
    };
    var fuseOptions = {
      keys: [
        {
          name: "name",
          weight: 0.5
        },
        {
          name: "keywords",
          getFn: function(item) {
            var _a;
            return ((_a = item.keywords) !== null && _a !== void 0 ? _a : "").split(",");
          },
          weight: 0.5
        },
        "subtitle"
      ],
      ignoreLocation: true,
      includeScore: true,
      includeMatches: true,
      threshold: 0.2,
      minMatchCharLength: 1
    };
    function order(a, b) {
      return b.priority - a.priority;
    }
    function useMatches() {
      var _a = (0, useKBar_1.useKBar)(function(state) {
        return {
          search: state.searchQuery,
          actions: state.actions,
          rootActionId: state.currentRootActionId
        };
      }), search2 = _a.search, actions = _a.actions, rootActionId = _a.rootActionId;
      var rootResults = React2.useMemo(function() {
        return Object.keys(actions).reduce(function(acc, actionId) {
          var action = actions[actionId];
          if (!action.parent && !rootActionId) {
            acc.push(action);
          }
          if (action.id === rootActionId) {
            for (var i = 0; i < action.children.length; i++) {
              acc.push(action.children[i]);
            }
          }
          return acc;
        }, []).sort(order);
      }, [actions, rootActionId]);
      var getDeepResults = React2.useCallback(function(actions2) {
        var actionsClone = [];
        for (var i = 0; i < actions2.length; i++) {
          actionsClone.push(actions2[i]);
        }
        return function collectChildren(actions3, all) {
          if (all === void 0) {
            all = actionsClone;
          }
          for (var i2 = 0; i2 < actions3.length; i2++) {
            if (actions3[i2].children.length > 0) {
              var childsChildren = actions3[i2].children;
              for (var i_1 = 0; i_1 < childsChildren.length; i_1++) {
                all.push(childsChildren[i_1]);
              }
              collectChildren(actions3[i2].children, all);
            }
          }
          return all;
        }(actions2);
      }, []);
      var emptySearch = !search2;
      var filtered = React2.useMemo(function() {
        if (emptySearch)
          return rootResults;
        return getDeepResults(rootResults);
      }, [getDeepResults, rootResults, emptySearch]);
      var fuse = React2.useMemo(function() {
        return new fuse_js_1.default(filtered, fuseOptions);
      }, [filtered]);
      var matches = useInternalMatches(filtered, search2, fuse);
      var results = React2.useMemo(function() {
        var _a2, _b;
        var map = {};
        var list = [];
        var ordered = [];
        for (var i = 0; i < matches.length; i++) {
          var match = matches[i];
          var action = match.action;
          var score = match.score || utils_1.Priority.NORMAL;
          var section = {
            name: typeof action.section === "string" ? action.section : ((_a2 = action.section) === null || _a2 === void 0 ? void 0 : _a2.name) || exports.NO_GROUP.name,
            priority: typeof action.section === "string" ? score : ((_b = action.section) === null || _b === void 0 ? void 0 : _b.priority) || 0 + score
          };
          if (!map[section.name]) {
            map[section.name] = [];
            list.push(section);
          }
          map[section.name].push({
            priority: action.priority + score,
            action
          });
        }
        ordered = list.sort(order).map(function(group2) {
          return {
            name: group2.name,
            actions: map[group2.name].sort(order).map(function(item) {
              return item.action;
            })
          };
        });
        var results2 = [];
        for (var i = 0; i < ordered.length; i++) {
          var group = ordered[i];
          if (group.name !== exports.NO_GROUP.name)
            results2.push(group.name);
          for (var i_2 = 0; i_2 < group.actions.length; i_2++) {
            results2.push(group.actions[i_2]);
          }
        }
        return results2;
      }, [matches]);
      var memoRootActionId = React2.useMemo(function() {
        return rootActionId;
      }, [results]);
      return React2.useMemo(function() {
        return {
          results,
          rootActionId: memoRootActionId
        };
      }, [memoRootActionId, results]);
    }
    exports.useMatches = useMatches;
    function useInternalMatches(filtered, search2, fuse) {
      var value = React2.useMemo(function() {
        return {
          filtered,
          search: search2
        };
      }, [filtered, search2]);
      var _a = (0, utils_1.useThrottledValue)(value), throttledFiltered = _a.filtered, throttledSearch = _a.search;
      return React2.useMemo(function() {
        if (throttledSearch.trim() === "") {
          return throttledFiltered.map(function(action) {
            return { score: 0, action };
          });
        }
        var matches = [];
        var searchResults = fuse.search(throttledSearch);
        matches = searchResults.map(function(_a2) {
          var action = _a2.item, score = _a2.score;
          return {
            score: 1 / ((score !== null && score !== void 0 ? score : 0) + 1),
            action
          };
        });
        return matches;
      }, [throttledFiltered, throttledSearch, fuse]);
    }
    exports.useDeepMatches = useMatches;
  }
});

// node_modules/@radix-ui/react-compose-refs/dist/index.js
var require_dist = __commonJS({
  "node_modules/@radix-ui/react-compose-refs/dist/index.js"(exports, module) {
    var $dJwbH$react = require_react();
    function $parcel$export(e, n, v2, s2) {
      Object.defineProperty(e, n, { get: v2, set: s2, enumerable: true, configurable: true });
    }
    $parcel$export(module.exports, "composeRefs", () => $9c2aaba23466b352$export$43e446d32b3d21af);
    $parcel$export(module.exports, "useComposedRefs", () => $9c2aaba23466b352$export$c7b2cbe3552a0d05);
    function $9c2aaba23466b352$var$setRef(ref, value) {
      if (typeof ref === "function")
        ref(value);
      else if (ref !== null && ref !== void 0)
        ref.current = value;
    }
    function $9c2aaba23466b352$export$43e446d32b3d21af(...refs) {
      return (node) => refs.forEach(
        (ref) => $9c2aaba23466b352$var$setRef(ref, node)
      );
    }
    function $9c2aaba23466b352$export$c7b2cbe3552a0d05(...refs) {
      return $dJwbH$react.useCallback($9c2aaba23466b352$export$43e446d32b3d21af(...refs), refs);
    }
  }
});

// node_modules/@radix-ui/react-slot/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@radix-ui/react-slot/dist/index.js"(exports, module) {
    var $dAvBt$babelruntimehelpersextends = require_extends();
    var $dAvBt$react = require_react();
    var $dAvBt$radixuireactcomposerefs = require_dist();
    function $parcel$export(e, n, v2, s2) {
      Object.defineProperty(e, n, { get: v2, set: s2, enumerable: true, configurable: true });
    }
    function $parcel$interopDefault(a) {
      return a && a.__esModule ? a.default : a;
    }
    $parcel$export(module.exports, "Slot", () => $82dc8d030dec7549$export$8c6ed5c666ac1360);
    $parcel$export(module.exports, "Slottable", () => $82dc8d030dec7549$export$d9f1ccf0bdb05d45);
    $parcel$export(module.exports, "Root", () => $82dc8d030dec7549$export$be92b6f5f03c0fe9);
    var $82dc8d030dec7549$export$8c6ed5c666ac1360 = $dAvBt$react.forwardRef((props2, forwardedRef) => {
      const { children, ...slotProps } = props2;
      const childrenArray = $dAvBt$react.Children.toArray(children);
      const slottable = childrenArray.find($82dc8d030dec7549$var$isSlottable);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if ($dAvBt$react.Children.count(newElement) > 1)
              return $dAvBt$react.Children.only(null);
            return $dAvBt$react.isValidElement(newElement) ? newElement.props.children : null;
          } else
            return child;
        });
        return $dAvBt$react.createElement($82dc8d030dec7549$var$SlotClone, $parcel$interopDefault($dAvBt$babelruntimehelpersextends)({}, slotProps, {
          ref: forwardedRef
        }), $dAvBt$react.isValidElement(newElement) ? $dAvBt$react.cloneElement(newElement, void 0, newChildren) : null);
      }
      return $dAvBt$react.createElement($82dc8d030dec7549$var$SlotClone, $parcel$interopDefault($dAvBt$babelruntimehelpersextends)({}, slotProps, {
        ref: forwardedRef
      }), children);
    });
    $82dc8d030dec7549$export$8c6ed5c666ac1360.displayName = "Slot";
    var $82dc8d030dec7549$var$SlotClone = $dAvBt$react.forwardRef((props2, forwardedRef) => {
      const { children, ...slotProps } = props2;
      if ($dAvBt$react.isValidElement(children))
        return $dAvBt$react.cloneElement(children, {
          ...$82dc8d030dec7549$var$mergeProps(slotProps, children.props),
          ref: forwardedRef ? $dAvBt$radixuireactcomposerefs.composeRefs(forwardedRef, children.ref) : children.ref
        });
      return $dAvBt$react.Children.count(children) > 1 ? $dAvBt$react.Children.only(null) : null;
    });
    $82dc8d030dec7549$var$SlotClone.displayName = "SlotClone";
    var $82dc8d030dec7549$export$d9f1ccf0bdb05d45 = ({ children }) => {
      return $dAvBt$react.createElement($dAvBt$react.Fragment, null, children);
    };
    function $82dc8d030dec7549$var$isSlottable(child) {
      return $dAvBt$react.isValidElement(child) && child.type === $82dc8d030dec7549$export$d9f1ccf0bdb05d45;
    }
    function $82dc8d030dec7549$var$mergeProps(slotProps, childProps) {
      const overrideProps = {
        ...childProps
      };
      for (const propName in childProps) {
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
          if (slotPropValue && childPropValue)
            overrideProps[propName] = (...args) => {
              childPropValue(...args);
              slotPropValue(...args);
            };
          else if (slotPropValue)
            overrideProps[propName] = slotPropValue;
        } else if (propName === "style")
          overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
          };
        else if (propName === "className")
          overrideProps[propName] = [
            slotPropValue,
            childPropValue
          ].filter(Boolean).join(" ");
      }
      return {
        ...slotProps,
        ...overrideProps
      };
    }
    var $82dc8d030dec7549$export$be92b6f5f03c0fe9 = $82dc8d030dec7549$export$8c6ed5c666ac1360;
  }
});

// node_modules/@radix-ui/react-primitive/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@radix-ui/react-primitive/dist/index.js"(exports, module) {
    var $iMixA$babelruntimehelpersextends = require_extends();
    var $iMixA$react = require_react();
    var $iMixA$reactdom = require_react_dom();
    var $iMixA$radixuireactslot = require_dist2();
    function $parcel$export(e, n, v2, s2) {
      Object.defineProperty(e, n, { get: v2, set: s2, enumerable: true, configurable: true });
    }
    function $parcel$interopDefault(a) {
      return a && a.__esModule ? a.default : a;
    }
    $parcel$export(module.exports, "Primitive", () => $c3def6332c2749a6$export$250ffa63cdc0d034);
    $parcel$export(module.exports, "Root", () => $c3def6332c2749a6$export$be92b6f5f03c0fe9);
    $parcel$export(module.exports, "dispatchDiscreteCustomEvent", () => $c3def6332c2749a6$export$6d1a0317bde7de7f);
    var $c3def6332c2749a6$var$NODES = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul"
    ];
    var $c3def6332c2749a6$export$250ffa63cdc0d034 = $c3def6332c2749a6$var$NODES.reduce((primitive, node) => {
      const Node = $iMixA$react.forwardRef((props2, forwardedRef) => {
        const { asChild, ...primitiveProps } = props2;
        const Comp = asChild ? $iMixA$radixuireactslot.Slot : node;
        $iMixA$react.useEffect(() => {
          window[Symbol.for("radix-ui")] = true;
        }, []);
        return $iMixA$react.createElement(Comp, $parcel$interopDefault($iMixA$babelruntimehelpersextends)({}, primitiveProps, {
          ref: forwardedRef
        }));
      });
      Node.displayName = `Primitive.${node}`;
      return {
        ...primitive,
        [node]: Node
      };
    }, {});
    function $c3def6332c2749a6$export$6d1a0317bde7de7f(target, event) {
      if (target)
        $iMixA$reactdom.flushSync(
          () => target.dispatchEvent(event)
        );
    }
    var $c3def6332c2749a6$export$be92b6f5f03c0fe9 = $c3def6332c2749a6$export$250ffa63cdc0d034;
  }
});

// node_modules/@radix-ui/react-portal/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@radix-ui/react-portal/dist/index.js"(exports, module) {
    var $amzHf$babelruntimehelpersextends = require_extends();
    var $amzHf$react = require_react();
    var $amzHf$reactdom = require_react_dom();
    var $amzHf$radixuireactprimitive = require_dist3();
    function $parcel$export(e, n, v2, s2) {
      Object.defineProperty(e, n, { get: v2, set: s2, enumerable: true, configurable: true });
    }
    function $parcel$interopDefault(a) {
      return a && a.__esModule ? a.default : a;
    }
    $parcel$export(module.exports, "Portal", () => $913a70b877676c16$export$602eac185826482c);
    $parcel$export(module.exports, "Root", () => $913a70b877676c16$export$be92b6f5f03c0fe9);
    var $913a70b877676c16$var$PORTAL_NAME = "Portal";
    var $913a70b877676c16$export$602eac185826482c = $amzHf$react.forwardRef((props2, forwardedRef) => {
      var _globalThis$document;
      const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props2;
      return container ? $parcel$interopDefault($amzHf$reactdom).createPortal($amzHf$react.createElement($amzHf$radixuireactprimitive.Primitive.div, $parcel$interopDefault($amzHf$babelruntimehelpersextends)({}, portalProps, {
        ref: forwardedRef
      })), container) : null;
    });
    Object.assign($913a70b877676c16$export$602eac185826482c, {
      displayName: $913a70b877676c16$var$PORTAL_NAME
    });
    var $913a70b877676c16$export$be92b6f5f03c0fe9 = $913a70b877676c16$export$602eac185826482c;
  }
});

// node_modules/kbar/lib/KBarPortal.js
var require_KBarPortal = __commonJS({
  "node_modules/kbar/lib/KBarPortal.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KBarPortal = void 0;
    var react_portal_1 = require_dist4();
    var React2 = __importStar(require_react());
    var types_1 = require_types();
    var useKBar_1 = require_useKBar();
    function KBarPortal(_a) {
      var children = _a.children, container = _a.container;
      var showing = (0, useKBar_1.useKBar)(function(state) {
        return {
          showing: state.visualState !== types_1.VisualState.hidden
        };
      }).showing;
      if (!showing) {
        return null;
      }
      return React2.createElement(react_portal_1.Portal, { container }, children);
    }
    exports.KBarPortal = KBarPortal;
  }
});

// node_modules/kbar/lib/KBarPositioner.js
var require_KBarPositioner = __commonJS({
  "node_modules/kbar/lib/KBarPositioner.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s2, e) {
      var t = {};
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
          t[p] = s2[p];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
            t[p[i]] = s2[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KBarPositioner = void 0;
    var React2 = __importStar(require_react());
    var defaultStyle = {
      position: "fixed",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
      inset: "0px",
      padding: "14vh 16px 16px"
    };
    function getStyle(style) {
      return style ? __assign(__assign({}, defaultStyle), style) : defaultStyle;
    }
    exports.KBarPositioner = React2.forwardRef(function(_a, ref) {
      var style = _a.style, children = _a.children, props2 = __rest(_a, ["style", "children"]);
      return React2.createElement("div", __assign({ ref, style: getStyle(style) }, props2), children);
    });
  }
});

// node_modules/kbar/lib/KBarSearch.js
var require_KBarSearch = __commonJS({
  "node_modules/kbar/lib/KBarSearch.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s2, e) {
      var t = {};
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
          t[p] = s2[p];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
            t[p[i]] = s2[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KBarSearch = exports.getListboxItemId = exports.KBAR_LISTBOX = void 0;
    var React2 = __importStar(require_react());
    var types_1 = require_types();
    var useKBar_1 = require_useKBar();
    exports.KBAR_LISTBOX = "kbar-listbox";
    var getListboxItemId = function(id) {
      return "kbar-listbox-item-" + id;
    };
    exports.getListboxItemId = getListboxItemId;
    function KBarSearch(props2) {
      var _a = (0, useKBar_1.useKBar)(function(state) {
        return {
          search: state.searchQuery,
          currentRootActionId: state.currentRootActionId,
          actions: state.actions,
          activeIndex: state.activeIndex,
          showing: state.visualState === types_1.VisualState.showing
        };
      }), query = _a.query, search2 = _a.search, actions = _a.actions, currentRootActionId = _a.currentRootActionId, activeIndex = _a.activeIndex, showing = _a.showing, options = _a.options;
      var _b = React2.useState(search2), inputValue = _b[0], setInputValue = _b[1];
      React2.useEffect(function() {
        query.setSearch(inputValue);
      }, [inputValue, query]);
      var defaultPlaceholder = props2.defaultPlaceholder, rest = __rest(props2, ["defaultPlaceholder"]);
      React2.useEffect(function() {
        query.setSearch("");
        query.getInput().focus();
        return function() {
          return query.setSearch("");
        };
      }, [currentRootActionId, query]);
      var placeholder = React2.useMemo(function() {
        var defaultText = defaultPlaceholder !== null && defaultPlaceholder !== void 0 ? defaultPlaceholder : "Type a command or search…";
        return currentRootActionId && actions[currentRootActionId] ? actions[currentRootActionId].name : defaultText;
      }, [actions, currentRootActionId, defaultPlaceholder]);
      return React2.createElement("input", __assign({}, rest, { ref: query.inputRefSetter, autoFocus: true, autoComplete: "off", role: "combobox", spellCheck: "false", "aria-expanded": showing, "aria-controls": exports.KBAR_LISTBOX, "aria-activedescendant": (0, exports.getListboxItemId)(activeIndex), value: inputValue, placeholder, onChange: function(event) {
        var _a2, _b2, _c;
        (_a2 = props2.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(props2, event);
        setInputValue(event.target.value);
        (_c = (_b2 = options === null || options === void 0 ? void 0 : options.callbacks) === null || _b2 === void 0 ? void 0 : _b2.onQueryChange) === null || _c === void 0 ? void 0 : _c.call(_b2, event.target.value);
      }, onKeyDown: function(event) {
        var _a2;
        (_a2 = props2.onKeyDown) === null || _a2 === void 0 ? void 0 : _a2.call(props2, event);
        if (currentRootActionId && !search2 && event.key === "Backspace") {
          var parent_1 = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent_1);
        }
      } }));
    }
    exports.KBarSearch = KBarSearch;
  }
});

// node_modules/react-virtual/dist/react-virtual.mjs
var react_virtual_exports = {};
__export(react_virtual_exports, {
  defaultRangeExtractor: () => defaultRangeExtractor,
  useVirtual: () => useVirtual
});
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function observeRect(node, cb) {
  return {
    observe: function observe() {
      var wasEmpty = observedNodes.size === 0;
      if (observedNodes.has(node)) {
        observedNodes.get(node).callbacks.push(cb);
      } else {
        observedNodes.set(node, {
          rect: void 0,
          hasRectChanged: false,
          callbacks: [cb]
        });
      }
      if (wasEmpty)
        run();
    },
    unobserve: function unobserve() {
      var state = observedNodes.get(node);
      if (state) {
        var index = state.callbacks.indexOf(cb);
        if (index >= 0)
          state.callbacks.splice(index, 1);
        if (!state.callbacks.length)
          observedNodes["delete"](node);
        if (!observedNodes.size)
          cancelAnimationFrame(rafId);
      }
    }
  };
}
function useRect(nodeRef, initialRect) {
  if (initialRect === void 0) {
    initialRect = {
      width: 0,
      height: 0
    };
  }
  var _React$useState = import_react.default.useState(nodeRef.current), element = _React$useState[0], setElement = _React$useState[1];
  var _React$useReducer = import_react.default.useReducer(rectReducer, initialRect), rect = _React$useReducer[0], dispatch = _React$useReducer[1];
  var initialRectSet = import_react.default.useRef(false);
  useIsomorphicLayoutEffect(function() {
    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });
  useIsomorphicLayoutEffect(function() {
    if (element && !initialRectSet.current) {
      initialRectSet.current = true;
      var _rect = element.getBoundingClientRect();
      dispatch({
        rect: _rect
      });
    }
  }, [element]);
  import_react.default.useEffect(function() {
    if (!element) {
      return;
    }
    var observer = observeRect(element, function(rect2) {
      dispatch({
        rect: rect2
      });
    });
    observer.observe();
    return function() {
      observer.unobserve();
    };
  }, [element]);
  return rect;
}
function rectReducer(state, action) {
  var rect = action.rect;
  if (state.height !== rect.height || state.width !== rect.width) {
    return rect;
  }
  return state;
}
function useVirtual(_ref) {
  var _measurements;
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 0 : _ref$size, _ref$estimateSize = _ref.estimateSize, estimateSize = _ref$estimateSize === void 0 ? defaultEstimateSize : _ref$estimateSize, _ref$overscan = _ref.overscan, overscan = _ref$overscan === void 0 ? 1 : _ref$overscan, _ref$paddingStart = _ref.paddingStart, paddingStart = _ref$paddingStart === void 0 ? 0 : _ref$paddingStart, _ref$paddingEnd = _ref.paddingEnd, paddingEnd = _ref$paddingEnd === void 0 ? 0 : _ref$paddingEnd, parentRef = _ref.parentRef, horizontal = _ref.horizontal, scrollToFn = _ref.scrollToFn, useObserver = _ref.useObserver, initialRect = _ref.initialRect, onScrollElement = _ref.onScrollElement, scrollOffsetFn = _ref.scrollOffsetFn, _ref$keyExtractor = _ref.keyExtractor, keyExtractor = _ref$keyExtractor === void 0 ? defaultKeyExtractor : _ref$keyExtractor, _ref$measureSize = _ref.measureSize, measureSize = _ref$measureSize === void 0 ? defaultMeasureSize : _ref$measureSize, _ref$rangeExtractor = _ref.rangeExtractor, rangeExtractor = _ref$rangeExtractor === void 0 ? defaultRangeExtractor : _ref$rangeExtractor;
  var sizeKey = horizontal ? "width" : "height";
  var scrollKey = horizontal ? "scrollLeft" : "scrollTop";
  var latestRef = import_react.default.useRef({
    scrollOffset: 0,
    measurements: []
  });
  var _React$useState = import_react.default.useState(0), scrollOffset = _React$useState[0], setScrollOffset = _React$useState[1];
  latestRef.current.scrollOffset = scrollOffset;
  var useMeasureParent = useObserver || useRect;
  var _useMeasureParent = useMeasureParent(parentRef, initialRect), outerSize = _useMeasureParent[sizeKey];
  latestRef.current.outerSize = outerSize;
  var defaultScrollToFn = import_react.default.useCallback(function(offset) {
    if (parentRef.current) {
      parentRef.current[scrollKey] = offset;
    }
  }, [parentRef, scrollKey]);
  var resolvedScrollToFn = scrollToFn || defaultScrollToFn;
  scrollToFn = import_react.default.useCallback(function(offset) {
    resolvedScrollToFn(offset, defaultScrollToFn);
  }, [defaultScrollToFn, resolvedScrollToFn]);
  var _React$useState2 = import_react.default.useState({}), measuredCache = _React$useState2[0], setMeasuredCache = _React$useState2[1];
  var measure = import_react.default.useCallback(function() {
    return setMeasuredCache({});
  }, []);
  var pendingMeasuredCacheIndexesRef = import_react.default.useRef([]);
  var measurements = import_react.default.useMemo(function() {
    var min = pendingMeasuredCacheIndexesRef.current.length > 0 ? Math.min.apply(Math, pendingMeasuredCacheIndexesRef.current) : 0;
    pendingMeasuredCacheIndexesRef.current = [];
    var measurements2 = latestRef.current.measurements.slice(0, min);
    for (var i = min; i < size; i++) {
      var key = keyExtractor(i);
      var measuredSize = measuredCache[key];
      var _start = measurements2[i - 1] ? measurements2[i - 1].end : paddingStart;
      var _size = typeof measuredSize === "number" ? measuredSize : estimateSize(i);
      var _end = _start + _size;
      measurements2[i] = {
        index: i,
        start: _start,
        size: _size,
        end: _end,
        key
      };
    }
    return measurements2;
  }, [estimateSize, measuredCache, paddingStart, size, keyExtractor]);
  var totalSize = (((_measurements = measurements[size - 1]) == null ? void 0 : _measurements.end) || paddingStart) + paddingEnd;
  latestRef.current.measurements = measurements;
  latestRef.current.totalSize = totalSize;
  var element = onScrollElement ? onScrollElement.current : parentRef.current;
  var scrollOffsetFnRef = import_react.default.useRef(scrollOffsetFn);
  scrollOffsetFnRef.current = scrollOffsetFn;
  useIsomorphicLayoutEffect(function() {
    if (!element) {
      setScrollOffset(0);
      return;
    }
    var onScroll = function onScroll2(event) {
      var offset = scrollOffsetFnRef.current ? scrollOffsetFnRef.current(event) : element[scrollKey];
      setScrollOffset(offset);
    };
    onScroll();
    element.addEventListener("scroll", onScroll, {
      capture: false,
      passive: true
    });
    return function() {
      element.removeEventListener("scroll", onScroll);
    };
  }, [element, scrollKey]);
  var _calculateRange = calculateRange(latestRef.current), start = _calculateRange.start, end = _calculateRange.end;
  var indexes = import_react.default.useMemo(function() {
    return rangeExtractor({
      start,
      end,
      overscan,
      size: measurements.length
    });
  }, [start, end, overscan, measurements.length, rangeExtractor]);
  var measureSizeRef = import_react.default.useRef(measureSize);
  measureSizeRef.current = measureSize;
  var virtualItems = import_react.default.useMemo(function() {
    var virtualItems2 = [];
    var _loop = function _loop2(k2, len2) {
      var i = indexes[k2];
      var measurement = measurements[i];
      var item = _extends(_extends({}, measurement), {}, {
        measureRef: function measureRef(el) {
          if (el) {
            var measuredSize = measureSizeRef.current(el, horizontal);
            if (measuredSize !== item.size) {
              var _scrollOffset = latestRef.current.scrollOffset;
              if (item.start < _scrollOffset) {
                defaultScrollToFn(_scrollOffset + (measuredSize - item.size));
              }
              pendingMeasuredCacheIndexesRef.current.push(i);
              setMeasuredCache(function(old) {
                var _extends2;
                return _extends(_extends({}, old), {}, (_extends2 = {}, _extends2[item.key] = measuredSize, _extends2));
              });
            }
          }
        }
      });
      virtualItems2.push(item);
    };
    for (var k = 0, len = indexes.length; k < len; k++) {
      _loop(k);
    }
    return virtualItems2;
  }, [indexes, defaultScrollToFn, horizontal, measurements]);
  var mountedRef = import_react.default.useRef(false);
  useIsomorphicLayoutEffect(function() {
    if (mountedRef.current) {
      setMeasuredCache({});
    }
    mountedRef.current = true;
  }, [estimateSize]);
  var scrollToOffset = import_react.default.useCallback(function(toOffset, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp, _ref2$align = _ref2.align, align = _ref2$align === void 0 ? "start" : _ref2$align;
    var _latestRef$current = latestRef.current, scrollOffset2 = _latestRef$current.scrollOffset, outerSize2 = _latestRef$current.outerSize;
    if (align === "auto") {
      if (toOffset <= scrollOffset2) {
        align = "start";
      } else if (toOffset >= scrollOffset2 + outerSize2) {
        align = "end";
      } else {
        align = "start";
      }
    }
    if (align === "start") {
      scrollToFn(toOffset);
    } else if (align === "end") {
      scrollToFn(toOffset - outerSize2);
    } else if (align === "center") {
      scrollToFn(toOffset - outerSize2 / 2);
    }
  }, [scrollToFn]);
  var tryScrollToIndex = import_react.default.useCallback(function(index, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$align = _ref3.align, align = _ref3$align === void 0 ? "auto" : _ref3$align, rest = _objectWithoutPropertiesLoose(_ref3, ["align"]);
    var _latestRef$current2 = latestRef.current, measurements2 = _latestRef$current2.measurements, scrollOffset2 = _latestRef$current2.scrollOffset, outerSize2 = _latestRef$current2.outerSize;
    var measurement = measurements2[Math.max(0, Math.min(index, size - 1))];
    if (!measurement) {
      return;
    }
    if (align === "auto") {
      if (measurement.end >= scrollOffset2 + outerSize2) {
        align = "end";
      } else if (measurement.start <= scrollOffset2) {
        align = "start";
      } else {
        return;
      }
    }
    var toOffset = align === "center" ? measurement.start + measurement.size / 2 : align === "end" ? measurement.end : measurement.start;
    scrollToOffset(toOffset, _extends({
      align
    }, rest));
  }, [scrollToOffset, size]);
  var scrollToIndex = import_react.default.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    tryScrollToIndex.apply(void 0, args);
    requestAnimationFrame(function() {
      tryScrollToIndex.apply(void 0, args);
    });
  }, [tryScrollToIndex]);
  return {
    virtualItems,
    totalSize,
    scrollToOffset,
    scrollToIndex,
    measure
  };
}
function calculateRange(_ref4) {
  var measurements = _ref4.measurements, outerSize = _ref4.outerSize, scrollOffset = _ref4.scrollOffset;
  var size = measurements.length - 1;
  var getOffset = function getOffset2(index) {
    return measurements[index].start;
  };
  var start = findNearestBinarySearch(0, size, getOffset, scrollOffset);
  var end = start;
  while (end < size && measurements[end].end < scrollOffset + outerSize) {
    end++;
  }
  return {
    start,
    end
  };
}
var import_react, props, rectChanged, observedNodes, rafId, run, useIsomorphicLayoutEffect, defaultEstimateSize, defaultKeyExtractor, defaultMeasureSize, defaultRangeExtractor, findNearestBinarySearch;
var init_react_virtual = __esm({
  "node_modules/react-virtual/dist/react-virtual.mjs"() {
    import_react = __toESM(require_react(), 1);
    props = ["bottom", "height", "left", "right", "top", "width"];
    rectChanged = function rectChanged2(a, b) {
      if (a === void 0) {
        a = {};
      }
      if (b === void 0) {
        b = {};
      }
      return props.some(function(prop) {
        return a[prop] !== b[prop];
      });
    };
    observedNodes = /* @__PURE__ */ new Map();
    run = function run2() {
      var changedStates = [];
      observedNodes.forEach(function(state, node) {
        var newRect = node.getBoundingClientRect();
        if (rectChanged(newRect, state.rect)) {
          state.rect = newRect;
          changedStates.push(state);
        }
      });
      changedStates.forEach(function(state) {
        state.callbacks.forEach(function(cb) {
          return cb(state.rect);
        });
      });
      rafId = window.requestAnimationFrame(run2);
    };
    useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.default.useLayoutEffect : import_react.default.useEffect;
    defaultEstimateSize = function defaultEstimateSize2() {
      return 50;
    };
    defaultKeyExtractor = function defaultKeyExtractor2(index) {
      return index;
    };
    defaultMeasureSize = function defaultMeasureSize2(el, horizontal) {
      var key = horizontal ? "offsetWidth" : "offsetHeight";
      return el[key];
    };
    defaultRangeExtractor = function defaultRangeExtractor2(range) {
      var start = Math.max(range.start - range.overscan, 0);
      var end = Math.min(range.end + range.overscan, range.size - 1);
      var arr = [];
      for (var i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    };
    findNearestBinarySearch = function findNearestBinarySearch2(low, high, getCurrentValue, value) {
      while (low <= high) {
        var middle = (low + high) / 2 | 0;
        var currentValue = getCurrentValue(middle);
        if (currentValue < value) {
          low = middle + 1;
        } else if (currentValue > value) {
          high = middle - 1;
        } else {
          return middle;
        }
      }
      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    };
  }
});

// node_modules/kbar/lib/KBarResults.js
var require_KBarResults = __commonJS({
  "node_modules/kbar/lib/KBarResults.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KBarResults = void 0;
    var React2 = __importStar(require_react());
    var react_virtual_1 = (init_react_virtual(), __toCommonJS(react_virtual_exports));
    var KBarSearch_1 = require_KBarSearch();
    var useKBar_1 = require_useKBar();
    var utils_1 = require_utils();
    var START_INDEX = 0;
    var KBarResults = function(props2) {
      var activeRef = React2.useRef(null);
      var parentRef = React2.useRef(null);
      var itemsRef = React2.useRef(props2.items);
      itemsRef.current = props2.items;
      var rowVirtualizer = (0, react_virtual_1.useVirtual)({
        size: itemsRef.current.length,
        parentRef
      });
      var _a = (0, useKBar_1.useKBar)(function(state) {
        return {
          search: state.searchQuery,
          currentRootActionId: state.currentRootActionId,
          activeIndex: state.activeIndex
        };
      }), query = _a.query, search2 = _a.search, currentRootActionId = _a.currentRootActionId, activeIndex = _a.activeIndex, options = _a.options;
      React2.useEffect(function() {
        var handler = function(event) {
          var _a2;
          if (event.isComposing) {
            return;
          }
          if (event.key === "ArrowUp" || event.ctrlKey && event.key === "p") {
            event.preventDefault();
            event.stopPropagation();
            query.setActiveIndex(function(index) {
              var nextIndex = index > START_INDEX ? index - 1 : index;
              if (typeof itemsRef.current[nextIndex] === "string") {
                if (nextIndex === 0)
                  return index;
                nextIndex -= 1;
              }
              return nextIndex;
            });
          } else if (event.key === "ArrowDown" || event.ctrlKey && event.key === "n") {
            event.preventDefault();
            event.stopPropagation();
            query.setActiveIndex(function(index) {
              var nextIndex = index < itemsRef.current.length - 1 ? index + 1 : index;
              if (typeof itemsRef.current[nextIndex] === "string") {
                if (nextIndex === itemsRef.current.length - 1)
                  return index;
                nextIndex += 1;
              }
              return nextIndex;
            });
          } else if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            (_a2 = activeRef.current) === null || _a2 === void 0 ? void 0 : _a2.click();
          }
        };
        window.addEventListener("keydown", handler, { capture: true });
        return function() {
          return window.removeEventListener("keydown", handler, { capture: true });
        };
      }, [query]);
      var scrollToIndex = rowVirtualizer.scrollToIndex;
      React2.useEffect(function() {
        scrollToIndex(activeIndex, {
          // ensure that if the first item in the list is a group
          // name and we are focused on the second item, to not
          // scroll past that group, hiding it.
          align: activeIndex <= 1 ? "end" : "auto"
        });
      }, [activeIndex, scrollToIndex]);
      React2.useEffect(function() {
        query.setActiveIndex(
          // avoid setting active index on a group
          typeof props2.items[START_INDEX] === "string" ? START_INDEX + 1 : START_INDEX
        );
      }, [search2, currentRootActionId, props2.items, query]);
      var execute = React2.useCallback(function(item) {
        var _a2, _b;
        if (typeof item === "string")
          return;
        if (item.command) {
          item.command.perform(item);
          query.toggle();
        } else {
          query.setSearch("");
          query.setCurrentRootAction(item.id);
        }
        (_b = (_a2 = options.callbacks) === null || _a2 === void 0 ? void 0 : _a2.onSelectAction) === null || _b === void 0 ? void 0 : _b.call(_a2, item);
      }, [query, options]);
      var pointerMoved = (0, utils_1.usePointerMovedSinceMount)();
      return React2.createElement(
        "div",
        { ref: parentRef, style: {
          maxHeight: props2.maxHeight || 400,
          position: "relative",
          overflow: "auto"
        } },
        React2.createElement("div", { role: "listbox", id: KBarSearch_1.KBAR_LISTBOX, style: {
          height: rowVirtualizer.totalSize + "px",
          width: "100%"
        } }, rowVirtualizer.virtualItems.map(function(virtualRow) {
          var item = itemsRef.current[virtualRow.index];
          var handlers = typeof item !== "string" && {
            onPointerMove: function() {
              return pointerMoved && activeIndex !== virtualRow.index && query.setActiveIndex(virtualRow.index);
            },
            onPointerDown: function() {
              return query.setActiveIndex(virtualRow.index);
            },
            onClick: function() {
              return execute(item);
            }
          };
          var active = virtualRow.index === activeIndex;
          return React2.createElement("div", __assign({ ref: active ? activeRef : null, id: (0, KBarSearch_1.getListboxItemId)(virtualRow.index), role: "option", "aria-selected": active, key: virtualRow.index, style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            transform: "translateY(" + virtualRow.start + "px)"
          } }, handlers), React2.cloneElement(props2.onRender({
            item,
            active
          }), {
            ref: virtualRow.measureRef
          }));
        }))
      );
    };
    exports.KBarResults = KBarResults;
  }
});

// node_modules/kbar/lib/useRegisterActions.js
var require_useRegisterActions = __commonJS({
  "node_modules/kbar/lib/useRegisterActions.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRegisterActions = void 0;
    var React2 = __importStar(require_react());
    var useKBar_1 = require_useKBar();
    function useRegisterActions(actions, dependencies) {
      if (dependencies === void 0) {
        dependencies = [];
      }
      var query = (0, useKBar_1.useKBar)().query;
      var actionsCache = React2.useMemo(function() {
        return actions;
      }, dependencies);
      React2.useEffect(function() {
        if (!actionsCache.length) {
          return;
        }
        var unregister = query.registerActions(actionsCache);
        return function() {
          unregister();
        };
      }, [query, actionsCache]);
    }
    exports.useRegisterActions = useRegisterActions;
  }
});

// node_modules/kbar/lib/KBarAnimator.js
var require_KBarAnimator = __commonJS({
  "node_modules/kbar/lib/KBarAnimator.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KBarAnimator = void 0;
    var React2 = __importStar(require_react());
    var types_1 = require_types();
    var useKBar_1 = require_useKBar();
    var utils_1 = require_utils();
    var appearanceAnimationKeyframes = [
      {
        opacity: 0,
        transform: "scale(.99)"
      },
      { opacity: 1, transform: "scale(1.01)" },
      { opacity: 1, transform: "scale(1)" }
    ];
    var bumpAnimationKeyframes = [
      {
        transform: "scale(1)"
      },
      {
        transform: "scale(.98)"
      },
      {
        transform: "scale(1)"
      }
    ];
    var KBarAnimator = function(_a) {
      var _b, _c;
      var children = _a.children, style = _a.style, className = _a.className, disableCloseOnOuterClick = _a.disableCloseOnOuterClick;
      var _d = (0, useKBar_1.useKBar)(function(state) {
        return {
          visualState: state.visualState,
          currentRootActionId: state.currentRootActionId
        };
      }), visualState = _d.visualState, currentRootActionId = _d.currentRootActionId, query = _d.query, options = _d.options;
      var outerRef = React2.useRef(null);
      var innerRef = React2.useRef(null);
      var enterMs = ((_b = options === null || options === void 0 ? void 0 : options.animations) === null || _b === void 0 ? void 0 : _b.enterMs) || 0;
      var exitMs = ((_c = options === null || options === void 0 ? void 0 : options.animations) === null || _c === void 0 ? void 0 : _c.exitMs) || 0;
      React2.useEffect(function() {
        if (visualState === types_1.VisualState.showing) {
          return;
        }
        var duration = visualState === types_1.VisualState.animatingIn ? enterMs : exitMs;
        var element = outerRef.current;
        element === null || element === void 0 ? void 0 : element.animate(appearanceAnimationKeyframes, {
          duration,
          easing: (
            // TODO: expose easing in options
            visualState === types_1.VisualState.animatingOut ? "ease-in" : "ease-out"
          ),
          direction: visualState === types_1.VisualState.animatingOut ? "reverse" : "normal",
          fill: "forwards"
        });
      }, [options, visualState, enterMs, exitMs]);
      var previousHeight = React2.useRef();
      React2.useEffect(function() {
        if (visualState === types_1.VisualState.showing) {
          var outer_1 = outerRef.current;
          var inner_1 = innerRef.current;
          if (!outer_1 || !inner_1) {
            return;
          }
          var ro_1 = new ResizeObserver(function(entries) {
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
              var entry = entries_1[_i];
              var cr = entry.contentRect;
              if (!previousHeight.current) {
                previousHeight.current = cr.height;
              }
              outer_1.animate([
                {
                  height: previousHeight.current + "px"
                },
                {
                  height: cr.height + "px"
                }
              ], {
                duration: enterMs / 2,
                // TODO: expose configs here
                easing: "ease-out",
                fill: "forwards"
              });
              previousHeight.current = cr.height;
            }
          });
          ro_1.observe(inner_1);
          return function() {
            ro_1.unobserve(inner_1);
          };
        }
      }, [visualState, options, enterMs, exitMs]);
      var firstRender = React2.useRef(true);
      React2.useEffect(function() {
        if (firstRender.current) {
          firstRender.current = false;
          return;
        }
        var element = outerRef.current;
        if (element) {
          element.animate(bumpAnimationKeyframes, {
            duration: enterMs,
            easing: "ease-out"
          });
        }
      }, [currentRootActionId, enterMs]);
      (0, utils_1.useOuterClick)(outerRef, function() {
        var _a2, _b2;
        if (disableCloseOnOuterClick) {
          return;
        }
        query.setVisualState(types_1.VisualState.animatingOut);
        (_b2 = (_a2 = options.callbacks) === null || _a2 === void 0 ? void 0 : _a2.onClose) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
      });
      return React2.createElement(
        "div",
        { ref: outerRef, style: __assign(__assign(__assign({}, appearanceAnimationKeyframes[0]), style), { pointerEvents: "auto" }), className },
        React2.createElement("div", { ref: innerRef }, children)
      );
    };
    exports.KBarAnimator = KBarAnimator;
  }
});

// node_modules/kbar/lib/action/index.js
var require_action = __commonJS({
  "node_modules/kbar/lib/action/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ActionInterface(), exports);
    __exportStar(require_ActionImpl(), exports);
  }
});

// node_modules/kbar/lib/index.js
var require_lib = __commonJS({
  "node_modules/kbar/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Priority = exports.createAction = void 0;
    var utils_1 = require_utils();
    Object.defineProperty(exports, "createAction", { enumerable: true, get: function() {
      return utils_1.createAction;
    } });
    Object.defineProperty(exports, "Priority", { enumerable: true, get: function() {
      return utils_1.Priority;
    } });
    __exportStar(require_useMatches(), exports);
    __exportStar(require_KBarPortal(), exports);
    __exportStar(require_KBarPositioner(), exports);
    __exportStar(require_KBarSearch(), exports);
    __exportStar(require_KBarResults(), exports);
    __exportStar(require_useKBar(), exports);
    __exportStar(require_useRegisterActions(), exports);
    __exportStar(require_KBarContextProvider(), exports);
    __exportStar(require_KBarAnimator(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_action(), exports);
  }
});

// node_modules/@refinedev/kbar/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var import_kbar = __toESM(require_lib(), 1);
var import_kbar2 = __toESM(require_lib(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_kbar3 = __toESM(require_lib(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_kbar4 = __toESM(require_lib(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_kbar5 = __toESM(require_lib(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var nt = Object.defineProperty;
var r = (n, e) => nt(n, "name", { value: e, configurable: true });
var g = r((n) => n.replace(/\w\S*/g, (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()), "capitalize");
var I = r(() => {
  let n = G(), { resource: e, resources: p, id: c, action: y } = z(), l = Z(), d = lt(), b = ge(), { mutate: H } = to(), { push: K, list: Pt, create: wt, show: Tt, edit: kt } = ce(), V = st(), $ = (0, import_react3.useContext)(import_kbar3.KBarContext), { can: a } = QC(), [B, q] = (0, import_react3.useState)([]);
  (0, import_react3.useEffect)(() => {
    r(async () => await Promise.all(F().flatMap((i) => _(i))), "preaparedActions")().then((i) => q(i.flatMap((m) => m)));
  }, [p, c, e, y]), (0, import_react3.useEffect)(() => {
    B.length === 0 && $.query.setVisualState(import_kbar3.VisualState.hidden);
  }, [B]);
  let F = r(() => {
    let t = [...p], i = t == null ? void 0 : t.findIndex((m) => (m.identifier ?? (m == null ? void 0 : m.name)) === ((e == null ? void 0 : e.identifier) ?? (e == null ? void 0 : e.name)));
    if (i > 0) {
      let m = t[i];
      t.splice(i, 1), t.splice(0, 0, m);
    }
    return t;
  }, "moveActionToFirst"), _ = r(async (t) => {
    var L, E, z2, N, M, U;
    let { name: i, label: m, list: j, create: T, canCreate: Q, canEdit: X, canShow: J, icon: Y, show: k, canDelete: Z2, edit: D, route: Dt } = t, tt = ((L = t == null ? void 0 : t.meta) == null ? void 0 : L.label) ?? ((E = t == null ? void 0 : t.options) == null ? void 0 : E.label) ?? m, h = ((z2 = t == null ? void 0 : t.meta) == null ? void 0 : z2.icon) ?? ((N = t == null ? void 0 : t.options) == null ? void 0 : N.icon) ?? Y, et = ((M = t == null ? void 0 : t.meta) == null ? void 0 : M.canDelete) ?? ((U = t == null ? void 0 : t.options) == null ? void 0 : U.canDelete) ?? Z2, A = tt ?? n(`${t.name}.${t.name}`, V(t.name, "plural")), x = [];
    if (j && (e !== void 0 && (e == null ? void 0 : e.name) !== i || y !== void 0 && (e == null ? void 0 : e.name) === i)) {
      let { can: f } = await (a == null ? void 0 : a({ resource: i, action: "list", params: { id: c, resource: t } })) || { can: true };
      f && x.push((0, import_kbar3.createAction)({ name: n("actions.list", g("list")), section: A, icon: h, perform: () => {
        let o = d({ resource: t, action: "list", legacy: l === "legacy" });
        o && (l === "legacy" ? K(o) : b({ to: o }));
      } }));
    }
    if ((Q || T) && T && (y !== "create" || (e == null ? void 0 : e.name) !== i)) {
      let { can: f } = await (a == null ? void 0 : a({ resource: i, action: "create", params: { resource: t } })) || { can: true };
      f && x.push((0, import_kbar3.createAction)({ name: n("actions.create", g("create")), section: A, icon: h, keywords: "new", perform: () => {
        let o = d({ resource: t, action: "create", legacy: l === "legacy" });
        o && (l === "legacy" ? K(o) : b({ to: o }));
      } }));
    }
    if ((e == null ? void 0 : e.name) === i && c) {
      if ((J || k) && k && y !== "show") {
        let { can: f } = await (a == null ? void 0 : a({ resource: i, action: "show", params: { id: c, resource: t } })) || { can: true };
        f && x.push((0, import_kbar3.createAction)({ name: n("actions.show", g("show")), section: A, icon: h, perform: () => {
          let o = d({ resource: t, action: "show", legacy: l === "legacy", meta: { id: c } });
          o && (l === "legacy" ? K(o) : b({ to: o }));
        } }));
      }
      if ((X || D) && D && y !== "edit") {
        let { can: f } = await (a == null ? void 0 : a({ resource: i, action: "edit", params: { id: c, resource: t } })) || { can: true };
        f && x.push((0, import_kbar3.createAction)({ name: n("actions.edit", g("edit")), section: A, icon: h, perform: () => {
          let o = d({ resource: t, action: "edit", legacy: l === "legacy", meta: { id: c } });
          o && (l === "legacy" ? K(o) : b({ to: o }));
        } }));
      }
      if (et) {
        let { can: f } = await (a == null ? void 0 : a({ resource: i, action: "delete", params: { id: c, resource: t } })) || { can: true };
        f && x.push({ id: "delete", name: n("actions.delete", g("delete")), section: A, icon: h }, (0, import_kbar3.createAction)({ name: n("buttons.delete", g("delete")), section: n("buttons.confirm", "Are you sure?"), parent: "delete", perform: () => {
          H({ resource: t.name, id: c }, { onSuccess: () => {
            let o = d({ resource: t, action: "list", legacy: l === "legacy" });
            o && (l === "legacy" ? K(o) : b({ to: o }));
          } });
        } }), (0, import_kbar3.createAction)({ name: n("buttons.cancel", "Cancel"), parent: "delete", perform: () => null }));
      }
    }
    return x;
  }, "createActionWithResource");
  (0, import_kbar3.useRegisterActions)(B, [B]);
}, "useRefineKbar");
var S = r(() => import_react4.default.createElement(import_kbar4.KBarPortal, null, import_react4.default.createElement(import_kbar4.KBarPositioner, { style: { opacity: 1, transition: "background 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s", backdropFilter: "saturate(180%) blur(1px)", background: "rgba(0, 0, 0, 0.1)", zIndex: "9999" } }, import_react4.default.createElement(import_kbar4.KBarAnimator, { style: { maxWidth: "600px", width: "100%", background: "white", color: "black", borderRadius: "8px", overflow: "hidden", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" } }, import_react4.default.createElement(import_kbar4.KBarSearch, { style: { padding: "12px 16px", fontSize: "16px", width: "100%", boxSizing: "border-box", outline: "none", border: "none", background: "rgb(252 252 252)", color: "black" } }), import_react4.default.createElement(v, null)))), "CommandBar");
var Bt = { padding: "8px 16px", fontSize: "14px", textTransform: "uppercase", fontWeight: "bold", opacity: 0.5 };
var v = r(() => {
  let { results: n, rootActionId: e } = (0, import_kbar5.useMatches)();
  return import_react5.default.createElement(import_kbar5.KBarResults, { items: n, onRender: ({ item: p, active: c }) => typeof p == "string" ? import_react5.default.createElement("div", { style: Bt }, p) : import_react5.default.createElement(C, { action: p, active: c, currentRootActionId: e }) });
}, "RenderResults");
var C = import_react6.default.forwardRef(({ action: n, active: e, currentRootActionId: p }, c) => {
  var l;
  let y = import_react6.default.useMemo(() => {
    if (!p)
      return n.ancestors;
    let d = n.ancestors.findIndex((b) => b.id === p);
    return n.ancestors.slice(d + 1);
  }, [n.ancestors, p]);
  return import_react6.default.createElement("div", { ref: c, style: { padding: "12px 16px", background: e ? "rgba(0 0 0 / 0.05)" : "transparent", borderLeft: `2px solid ${e ? "rgb(28 28 29)" : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" } }, import_react6.default.createElement("div", { style: { display: "flex", gap: "8px", alignItems: "center", fontSize: 14 } }, n.icon && n.icon, import_react6.default.createElement("div", { style: { display: "flex", flexDirection: "column" } }, import_react6.default.createElement("div", null, y.length > 0 && y.map((d) => import_react6.default.createElement(import_react6.default.Fragment, { key: d.id }, import_react6.default.createElement("span", { style: { opacity: 0.5, marginRight: 8 } }, d.name), import_react6.default.createElement("span", { style: { marginRight: 8 } }, "›"))), import_react6.default.createElement("span", { style: { color: n.name.toLocaleUpperCase() === "DELETE" ? "red" : "black" } }, n.name)), n.subtitle && import_react6.default.createElement("span", { style: { fontSize: 12 } }, n.subtitle))), (l = n.shortcut) != null && l.length ? import_react6.default.createElement("div", { "aria-hidden": true, style: { display: "grid", gridAutoFlow: "column", gap: "4px" } }, n.shortcut.map((d) => import_react6.default.createElement("kbd", { key: d, style: { padding: "4px 6px", background: "rgba(0 0 0 / .1)", borderRadius: "4px", fontSize: 14 } }, d))) : null);
});
C.displayName = "ResultItem";
var O = r(({ commandBarProps: n }) => {
  let e = (0, import_react7.useContext)(w);
  I();
  let p = { ...e, ...n };
  return import_react7.default.createElement(S, { ...p });
}, "RefineKbar");
var w = (0, import_react2.createContext)({});
var he = r(({ children: n, commandBarProps: e }) => import_react2.default.createElement(w.Provider, { value: e ?? {} }, import_react2.default.createElement(import_kbar.KBarProvider, null, n)), "RefineKbarProvider");
var export_KBAR_LISTBOX = import_kbar2.KBAR_LISTBOX;
var export_KBarAnimator = import_kbar2.KBarAnimator;
var export_KBarContext = import_kbar2.KBarContext;
var export_KBarPortal = import_kbar2.KBarPortal;
var export_KBarPositioner = import_kbar2.KBarPositioner;
var export_KBarProvider = import_kbar2.KBarProvider;
var export_KBarResults = import_kbar2.KBarResults;
var export_KBarSearch = import_kbar2.KBarSearch;
var export_NO_GROUP = import_kbar2.NO_GROUP;
var export_Priority = import_kbar2.Priority;
var export_VisualState = import_kbar2.VisualState;
var export_createAction = import_kbar2.createAction;
var export_getListboxItemId = import_kbar2.getListboxItemId;
var export_useKBar = import_kbar2.useKBar;
var export_useMatches = import_kbar2.useMatches;
var export_useRegisterActions = import_kbar2.useRegisterActions;
export {
  export_KBAR_LISTBOX as KBAR_LISTBOX,
  export_KBarAnimator as KBarAnimator,
  export_KBarContext as KBarContext,
  export_KBarPortal as KBarPortal,
  export_KBarPositioner as KBarPositioner,
  export_KBarProvider as KBarProvider,
  export_KBarResults as KBarResults,
  export_KBarSearch as KBarSearch,
  export_NO_GROUP as NO_GROUP,
  export_Priority as Priority,
  O as RefineKbar,
  w as RefineKbarPropsContext,
  he as RefineKbarProvider,
  export_VisualState as VisualState,
  export_createAction as createAction,
  export_getListboxItemId as getListboxItemId,
  export_useKBar as useKBar,
  export_useMatches as useMatches,
  I as useRefineKbar,
  export_useRegisterActions as useRegisterActions
};
//# sourceMappingURL=@refinedev_kbar.js.map
