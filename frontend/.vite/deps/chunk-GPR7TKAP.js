import {
  O,
  Symbol_default,
  T,
  baseGetTag_default,
  d,
  debounce_default,
  freeGlobal_default,
  isObjectLike_default,
  isObject_default,
  isSymbol_default,
  root_default,
  toNumber_default,
  v,
  y
} from "./chunk-5OFMTEAY.js";
import {
  require_react_dom
} from "./chunk-AHJ5QOXT.js";
import {
  require_react
} from "./chunk-HCG2JFOZ.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/stackframe/stackframe.js
var require_stackframe = __commonJS({
  "node_modules/stackframe/stackframe.js"(exports2, module2) {
    (function(root, factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("stackframe", [], factory);
      } else if (typeof exports2 === "object") {
        module2.exports = factory();
      } else {
        root.StackFrame = factory();
      }
    })(exports2, function() {
      "use strict";
      function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
      }
      function _getter(p2) {
        return function() {
          return this[p2];
        };
      }
      var booleanProps = ["isConstructor", "isEval", "isNative", "isToplevel"];
      var numericProps = ["columnNumber", "lineNumber"];
      var stringProps = ["fileName", "functionName", "source"];
      var arrayProps = ["args"];
      var objectProps = ["evalOrigin"];
      var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);
      function StackFrame(obj) {
        if (!obj)
          return;
        for (var i3 = 0; i3 < props.length; i3++) {
          if (obj[props[i3]] !== void 0) {
            this["set" + _capitalize(props[i3])](obj[props[i3]]);
          }
        }
      }
      StackFrame.prototype = {
        getArgs: function() {
          return this.args;
        },
        setArgs: function(v3) {
          if (Object.prototype.toString.call(v3) !== "[object Array]") {
            throw new TypeError("Args must be an Array");
          }
          this.args = v3;
        },
        getEvalOrigin: function() {
          return this.evalOrigin;
        },
        setEvalOrigin: function(v3) {
          if (v3 instanceof StackFrame) {
            this.evalOrigin = v3;
          } else if (v3 instanceof Object) {
            this.evalOrigin = new StackFrame(v3);
          } else {
            throw new TypeError("Eval Origin must be an Object or StackFrame");
          }
        },
        toString: function() {
          var fileName = this.getFileName() || "";
          var lineNumber = this.getLineNumber() || "";
          var columnNumber = this.getColumnNumber() || "";
          var functionName = this.getFunctionName() || "";
          if (this.getIsEval()) {
            if (fileName) {
              return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
            }
            return "[eval]:" + lineNumber + ":" + columnNumber;
          }
          if (functionName) {
            return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
          }
          return fileName + ":" + lineNumber + ":" + columnNumber;
        }
      };
      StackFrame.fromString = function StackFrame$$fromString(str) {
        var argsStartIndex = str.indexOf("(");
        var argsEndIndex = str.lastIndexOf(")");
        var functionName = str.substring(0, argsStartIndex);
        var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
        var locationString = str.substring(argsEndIndex + 1);
        if (locationString.indexOf("@") === 0) {
          var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
          var fileName = parts[1];
          var lineNumber = parts[2];
          var columnNumber = parts[3];
        }
        return new StackFrame({
          functionName,
          args: args || void 0,
          fileName,
          lineNumber: lineNumber || void 0,
          columnNumber: columnNumber || void 0
        });
      };
      for (var i2 = 0; i2 < booleanProps.length; i2++) {
        StackFrame.prototype["get" + _capitalize(booleanProps[i2])] = _getter(booleanProps[i2]);
        StackFrame.prototype["set" + _capitalize(booleanProps[i2])] = function(p2) {
          return function(v3) {
            this[p2] = Boolean(v3);
          };
        }(booleanProps[i2]);
      }
      for (var j = 0; j < numericProps.length; j++) {
        StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
        StackFrame.prototype["set" + _capitalize(numericProps[j])] = function(p2) {
          return function(v3) {
            if (!_isNumber(v3)) {
              throw new TypeError(p2 + " must be a Number");
            }
            this[p2] = Number(v3);
          };
        }(numericProps[j]);
      }
      for (var k = 0; k < stringProps.length; k++) {
        StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
        StackFrame.prototype["set" + _capitalize(stringProps[k])] = function(p2) {
          return function(v3) {
            this[p2] = String(v3);
          };
        }(stringProps[k]);
      }
      return StackFrame;
    });
  }
});

// node_modules/error-stack-parser/error-stack-parser.js
var require_error_stack_parser = __commonJS({
  "node_modules/error-stack-parser/error-stack-parser.js"(exports2, module2) {
    (function(root, factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("error-stack-parser", ["stackframe"], factory);
      } else if (typeof exports2 === "object") {
        module2.exports = factory(require_stackframe());
      } else {
        root.ErrorStackParser = factory(root.StackFrame);
      }
    })(exports2, function ErrorStackParser(StackFrame) {
      "use strict";
      var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
      var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
      var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
      return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
          if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
            return this.parseOpera(error);
          } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
            return this.parseV8OrIE(error);
          } else if (error.stack) {
            return this.parseFFOrSafari(error);
          } else {
            throw new Error("Cannot parse given Error object");
          }
        },
        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
          if (urlLike.indexOf(":") === -1) {
            return [urlLike];
          }
          var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
          var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
          return [parts[1], parts[2] || void 0, parts[3] || void 0];
        },
        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(CHROME_IE_STACK_REGEXP);
          }, this);
          return filtered.map(function(line) {
            if (line.indexOf("(eval ") > -1) {
              line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
            }
            var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
            var location = sanitizedLine.match(/ (\(.+\)$)/);
            sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
            var locationParts = this.extractLocation(location ? location[1] : sanitizedLine);
            var functionName = location && sanitizedLine || void 0;
            var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
            return new StackFrame({
              functionName,
              fileName,
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }, this);
        },
        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !line.match(SAFARI_NATIVE_CODE_REGEXP);
          }, this);
          return filtered.map(function(line) {
            if (line.indexOf(" > eval") > -1) {
              line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
            }
            if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
              return new StackFrame({
                functionName: line
              });
            } else {
              var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
              var matches = line.match(functionNameRegex);
              var functionName = matches && matches[1] ? matches[1] : void 0;
              var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
              return new StackFrame({
                functionName,
                fileName: locationParts[0],
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
                source: line
              });
            }
          }, this);
        },
        parseOpera: function ErrorStackParser$$parseOpera(e) {
          if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
            return this.parseOpera9(e);
          } else if (!e.stack) {
            return this.parseOpera10(e);
          } else {
            return this.parseOpera11(e);
          }
        },
        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
          var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
          var lines = e.message.split("\n");
          var result = [];
          for (var i2 = 2, len = lines.length; i2 < len; i2 += 2) {
            var match = lineRE.exec(lines[i2]);
            if (match) {
              result.push(new StackFrame({
                fileName: match[2],
                lineNumber: match[1],
                source: lines[i2]
              }));
            }
          }
          return result;
        },
        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
          var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
          var lines = e.stacktrace.split("\n");
          var result = [];
          for (var i2 = 0, len = lines.length; i2 < len; i2 += 2) {
            var match = lineRE.exec(lines[i2]);
            if (match) {
              result.push(
                new StackFrame({
                  functionName: match[3] || void 0,
                  fileName: match[2],
                  lineNumber: match[1],
                  source: lines[i2]
                })
              );
            }
          }
          return result;
        },
        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
          }, this);
          return filtered.map(function(line) {
            var tokens = line.split("@");
            var locationParts = this.extractLocation(tokens.pop());
            var functionCall = tokens.shift() || "";
            var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
            var argsRaw;
            if (functionCall.match(/\(([^)]*)\)/)) {
              argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
            }
            var args = argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(",");
            return new StackFrame({
              functionName,
              args,
              fileName: locationParts[0],
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }, this);
        }
      };
    });
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports2) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React11 = require_react();
        var ReactSharedInternals = React11.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is2(x, y3) {
          return x === y3 && (x !== 0 || 1 / x === 1 / y3) || x !== x && y3 !== y3;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is2;
        var useState5 = React11.useState, useEffect6 = React11.useEffect, useLayoutEffect = React11.useLayoutEffect, useDebugValue = React11.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React11.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState5({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect6(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$12(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$12 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React11.useSyncExternalStore !== void 0 ? React11.useSyncExternalStore : shim;
        exports2.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports2, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports2, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports2, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports2, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports2, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports2, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports2, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports2, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports2, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/has-proto/index.js"(exports2, module2) {
    "use strict";
    var test = {
      __proto__: null,
      foo: {}
    };
    var $Object = Object;
    module2.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b2) {
      var arr = [];
      for (var i2 = 0; i2 < a.length; i2 += 1) {
        arr[i2] = a[i2];
      }
      for (var j = 0; j < b2.length; j += 1) {
        arr[j + a.length] = b2[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i2 = offset || 0, j = 0; i2 < arrLike.length; i2 += 1, j += 1) {
        arr[j] = arrLike[i2];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i2 = 0; i2 < arr.length; i2 += 1) {
        str += arr[i2];
        if (i2 + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i2 = 0; i2 < boundLength; i2++) {
        boundArgs[i2] = "$" + i2;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports2, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports2, module2) {
    "use strict";
    var undefined2;
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var stringToPath2 = function stringToPath3(string) {
      var first = $strSlice(string, 0, 1);
      var last2 = $strSlice(string, -1);
      if (first === "%" && last2 !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last2 === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName2, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath2(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
        var part = parts[i2];
        var first = $strSlice(part, 0, 1);
        var last2 = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last2 === '"' || last2 === "'" || last2 === "`")) && first !== last2) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i2 + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/define-data-property/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module2.exports = function defineDataProperty(obj, property2, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property2 !== "string" && typeof property2 !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property2);
      if ($defineProperty) {
        $defineProperty(obj, property2, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property2] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module2.exports = hasPropertyDescriptors;
  }
});

// node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/set-function-length/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define2 = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module2.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = require_type();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $defineProperty = require_es_define_property();
    var $max = GetIntrinsic("%Math.max%");
    module2.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// (disabled):node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):node_modules/object-inspect/util.inspect"() {
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports2, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O3) {
      return O3.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray2(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys2 = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i2 = 0; i2 < attrs.length; i2++) {
          s += " " + attrs[i2].name + "=" + wrapQuotes(quote(attrs[i2].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray2(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs2 = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs2)) {
          return "[" + indentedJoin(xs2, indent) + "]";
        }
        return "[ " + $join.call(xs2, ", ") + " ]";
      }
      if (isError2(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys2 = arrObjKeys(obj, inspect);
        var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag3 = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag3 || protoTag ? "[" + $join.call($concat.call([], stringTag3 || [], protoTag || []), ": ") + "] " : "");
        if (ys2.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys2, indent) + "}";
        }
        return tag + "{ " + $join.call(ys2, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray2(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError2(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f2) {
      if (f2.name) {
        return f2.name;
      }
      var m2 = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
      if (m2) {
        return m2[1];
      }
      return null;
    }
    function indexOf(xs2, x) {
      if (xs2.indexOf) {
        return xs2.indexOf(x);
      }
      for (var i2 = 0, l2 = xs2.length; i2 < l2; i2++) {
        if (xs2[i2] === x) {
          return i2;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m2) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs2) {
      for (var i2 = 0; i2 < xs2.length; i2++) {
        if (indexOf(xs2[i2], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs2, indent) {
      if (xs2.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs2, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray2(obj);
      var xs2 = [];
      if (isArr) {
        xs2.length = obj.length;
        for (var i2 = 0; i2 < obj.length; i2++) {
          xs2[i2] = has(obj, i2) ? inspect(obj[i2], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs2.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs2.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs2.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs2;
    }
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('.').ListNode<typeof value>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o2;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o2) {
              return listGet($o2, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o2) {
              return listHas($o2, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o2) {
              $o2 = { key: {}, next: null };
            }
            listSet($o2, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/@refinedev/core/node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/@refinedev/core/node_modules/qs/lib/formats.js"(exports2, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/@refinedev/core/node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/@refinedev/core/node_modules/qs/lib/utils.js"(exports2, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i2 = 0; i2 < 256; ++i2) {
        array.push("%" + ((i2 < 16 ? "0" : "") + i2.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray2(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i2 = 0; i2 < source.length; ++i2) {
        if (typeof source[i2] !== "undefined") {
          obj[i2] = source[i2];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray2(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray2(target) && !isArray2(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray2(target) && isArray2(source)) {
        source.forEach(function(item, i2) {
          if (has.call(target, i2)) {
            var targetItem = target[i2];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i2] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i2] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i2 = 0; i2 < segment.length; ++i2) {
          var c = segment.charCodeAt(i2);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i2);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i2 += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i2) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i2 = 0; i2 < queue.length; ++i2) {
        var item = queue[i2];
        var obj = item.obj[item.prop];
        var keys2 = Object.keys(obj);
        for (var j = 0; j < keys2.length; ++j) {
          var key = keys2[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer2 = function isBuffer3(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b2) {
      return [].concat(a, b2);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray2(val)) {
        var mapped = [];
        for (var i2 = 0; i2 < val.length; i2 += 1) {
          mapped.push(fn(val[i2]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer: isBuffer2,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/@refinedev/core/node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/@refinedev/core/node_modules/qs/lib/stringify.js"(exports2, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray2 = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v3) {
      return typeof v3 === "string" || typeof v3 === "number" || typeof v3 === "boolean" || typeof v3 === "symbol" || typeof v3 === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray2(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray2(filter)) {
        objKeys = filter;
      } else {
        var keys2 = Object.keys(obj);
        objKeys = sort ? keys2.sort(sort) : keys2;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray2(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray2(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray2(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys2 = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i2 = 0; i2 < objKeys.length; ++i2) {
        var key = objKeys[i2];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys2, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys2.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/@refinedev/core/node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/@refinedev/core/node_modules/qs/lib/parse.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i2;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i2 = 0; i2 < parts.length; ++i2) {
          if (parts[i2].indexOf("utf8=") === 0) {
            if (parts[i2] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i2] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i2;
            i2 = parts.length;
          }
        }
      }
      for (i2 = 0; i2 < parts.length; ++i2) {
        if (i2 === skipIndex) {
          continue;
        }
        var part = parts[i2];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray2(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i2 = chain.length - 1; i2 >= 0; --i2) {
        var obj;
        var root = chain[i2];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && leaf === "" ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys2 = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys2.push(parent);
      }
      var i2 = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i2 < options.depth) {
        i2 += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys2.push(segment[1]);
      }
      if (segment) {
        keys2.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys2, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys2 = Object.keys(tempObj);
      for (var i2 = 0; i2 < keys2.length; ++i2) {
        var key = keys2[i2];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/@refinedev/core/node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/@refinedev/core/node_modules/qs/lib/index.js"(exports2, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/warn-once/index.js
var require_warn_once = __commonJS({
  "node_modules/warn-once/index.js"(exports2, module2) {
    var DEV = true;
    var warnings = /* @__PURE__ */ new Set();
    function warnOnce(condition, ...rest) {
      if (DEV && condition) {
        const key = rest.join(" ");
        if (warnings.has(key)) {
          return;
        }
        warnings.add(key);
        console.warn(...rest);
      }
    }
    module2.exports = warnOnce;
  }
});

// node_modules/pluralize/pluralize.js
var require_pluralize = __commonJS({
  "node_modules/pluralize/pluralize.js"(exports2, module2) {
    (function(root, pluralize) {
      if (typeof __require === "function" && typeof exports2 === "object" && typeof module2 === "object") {
        module2.exports = pluralize();
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return pluralize();
        });
      } else {
        root.pluralize = pluralize();
      }
    })(exports2, function() {
      var pluralRules = [];
      var singularRules = [];
      var uncountables = {};
      var irregularPlurals = {};
      var irregularSingles = {};
      function sanitizeRule(rule) {
        if (typeof rule === "string") {
          return new RegExp("^" + rule + "$", "i");
        }
        return rule;
      }
      function restoreCase(word, token) {
        if (word === token)
          return token;
        if (word === word.toLowerCase())
          return token.toLowerCase();
        if (word === word.toUpperCase())
          return token.toUpperCase();
        if (word[0] === word[0].toUpperCase()) {
          return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
        }
        return token.toLowerCase();
      }
      function interpolate(str, args) {
        return str.replace(/\$(\d{1,2})/g, function(match, index) {
          return args[index] || "";
        });
      }
      function replace(word, rule) {
        return word.replace(rule[0], function(match, index) {
          var result = interpolate(rule[1], arguments);
          if (match === "") {
            return restoreCase(word[index - 1], result);
          }
          return restoreCase(match, result);
        });
      }
      function sanitizeWord(token, word, rules) {
        if (!token.length || uncountables.hasOwnProperty(token)) {
          return word;
        }
        var len = rules.length;
        while (len--) {
          var rule = rules[len];
          if (rule[0].test(word))
            return replace(word, rule);
        }
        return word;
      }
      function replaceWord(replaceMap, keepMap, rules) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token)) {
            return restoreCase(word, token);
          }
          if (replaceMap.hasOwnProperty(token)) {
            return restoreCase(word, replaceMap[token]);
          }
          return sanitizeWord(token, word, rules);
        };
      }
      function checkWord(replaceMap, keepMap, rules, bool) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token))
            return true;
          if (replaceMap.hasOwnProperty(token))
            return false;
          return sanitizeWord(token, token, rules) === token;
        };
      }
      function pluralize(word, count, inclusive) {
        var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
        return (inclusive ? count + " " : "") + pluralized;
      }
      pluralize.plural = replaceWord(
        irregularSingles,
        irregularPlurals,
        pluralRules
      );
      pluralize.isPlural = checkWord(
        irregularSingles,
        irregularPlurals,
        pluralRules
      );
      pluralize.singular = replaceWord(
        irregularPlurals,
        irregularSingles,
        singularRules
      );
      pluralize.isSingular = checkWord(
        irregularPlurals,
        irregularSingles,
        singularRules
      );
      pluralize.addPluralRule = function(rule, replacement) {
        pluralRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize.addSingularRule = function(rule, replacement) {
        singularRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize.addUncountableRule = function(word) {
        if (typeof word === "string") {
          uncountables[word.toLowerCase()] = true;
          return;
        }
        pluralize.addPluralRule(word, "$0");
        pluralize.addSingularRule(word, "$0");
      };
      pluralize.addIrregularRule = function(single, plural) {
        plural = plural.toLowerCase();
        single = single.toLowerCase();
        irregularSingles[single] = plural;
        irregularPlurals[plural] = single;
      };
      [
        // Pronouns.
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        // Words ending in with a consonant and `o`.
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        // Ends with `us`.
        ["genus", "genera"],
        ["viscus", "viscera"],
        // Ends with `ma`.
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        // Other irregular rules.
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"]
      ].forEach(function(rule) {
        return pluralize.addIrregularRule(rule[0], rule[1]);
      });
      [
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
        [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
        ["thou", "you"]
      ].forEach(function(rule) {
        return pluralize.addPluralRule(rule[0], rule[1]);
      });
      [
        [/s$/i, ""],
        [/(ss)$/i, "$1"],
        [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
        [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
        [/ies$/i, "y"],
        [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
        [/\b(mon|smil)ies$/i, "$1ey"],
        [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
        [/(seraph|cherub)im$/i, "$1"],
        [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
        [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
        [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
        [/(test)(?:is|es)$/i, "$1is"],
        [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
        [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
        [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
        [/(alumn|alg|vertebr)ae$/i, "$1a"],
        [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
        [/(matr|append)ices$/i, "$1ix"],
        [/(pe)(rson|ople)$/i, "$1rson"],
        [/(child)ren$/i, "$1"],
        [/(eau)x?$/i, "$1"],
        [/men$/i, "man"]
      ].forEach(function(rule) {
        return pluralize.addSingularRule(rule[0], rule[1]);
      });
      [
        // Singular words with no plurals.
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        // Regexes.
        /[^aeiou]ese$/i,
        // "chinese", "japanese"
        /deer$/i,
        // "deer", "reindeer"
        /fish$/i,
        // "fish", "blowfish", "angelfish"
        /measles$/i,
        /o[iu]s$/i,
        // "carnivorous"
        /pox$/i,
        // "chickpox", "smallpox"
        /sheep$/i
      ].forEach(pluralize.addUncountableRule);
      return pluralize;
    });
  }
});

// node_modules/papaparse/papaparse.min.js
var require_papaparse_min = __commonJS({
  "node_modules/papaparse/papaparse.min.js"(exports2, module2) {
    !function(e, t) {
      "function" == typeof define && define.amd ? define([], t) : "object" == typeof module2 && "undefined" != typeof exports2 ? module2.exports = t() : e.Papa = t();
    }(exports2, function s() {
      "use strict";
      var f2 = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f2 ? f2 : {};
      var n = !f2.document && !!f2.postMessage, o2 = f2.IS_PAPA_WORKER || false, a = {}, u = 0, b2 = { parse: function(e, t) {
        var r2 = (t = t || {}).dynamicTyping || false;
        J2(r2) && (t.dynamicTypingFunction = r2, r2 = {});
        if (t.dynamicTyping = r2, t.transform = !!J2(t.transform) && t.transform, t.worker && b2.WORKERS_SUPPORTED) {
          var i2 = function() {
            if (!b2.WORKERS_SUPPORTED)
              return false;
            var e2 = (r3 = f2.URL || f2.webkitURL || null, i3 = s.toString(), b2.BLOB_URL || (b2.BLOB_URL = r3.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", i3, ")();"], { type: "text/javascript" })))), t2 = new f2.Worker(e2);
            var r3, i3;
            return t2.onmessage = _2, t2.id = u++, a[t2.id] = t2;
          }();
          return i2.userStep = t.step, i2.userChunk = t.chunk, i2.userComplete = t.complete, i2.userError = t.error, t.step = J2(t.step), t.chunk = J2(t.chunk), t.complete = J2(t.complete), t.error = J2(t.error), delete t.worker, void i2.postMessage({ input: e, config: t, workerId: i2.id });
        }
        var n2 = null;
        b2.NODE_STREAM_INPUT, "string" == typeof e ? (e = function(e2) {
          if (65279 === e2.charCodeAt(0))
            return e2.slice(1);
          return e2;
        }(e), n2 = t.download ? new l2(t) : new p2(t)) : true === e.readable && J2(e.read) && J2(e.on) ? n2 = new g(t) : (f2.File && e instanceof File || e instanceof Object) && (n2 = new c(t));
        return n2.stream(e);
      }, unparse: function(e, t) {
        var n2 = false, _3 = true, m3 = ",", y4 = "\r\n", s2 = '"', a2 = s2 + s2, r2 = false, i2 = null, o3 = false;
        !function() {
          if ("object" != typeof t)
            return;
          "string" != typeof t.delimiter || b2.BAD_DELIMITERS.filter(function(e2) {
            return -1 !== t.delimiter.indexOf(e2);
          }).length || (m3 = t.delimiter);
          ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n2 = t.quotes);
          "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (r2 = t.skipEmptyLines);
          "string" == typeof t.newline && (y4 = t.newline);
          "string" == typeof t.quoteChar && (s2 = t.quoteChar);
          "boolean" == typeof t.header && (_3 = t.header);
          if (Array.isArray(t.columns)) {
            if (0 === t.columns.length)
              throw new Error("Option columns is empty");
            i2 = t.columns;
          }
          void 0 !== t.escapeChar && (a2 = t.escapeChar + s2);
          ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (o3 = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
        }();
        var u2 = new RegExp(Q(s2), "g");
        "string" == typeof e && (e = JSON.parse(e));
        if (Array.isArray(e)) {
          if (!e.length || Array.isArray(e[0]))
            return h2(null, e, r2);
          if ("object" == typeof e[0])
            return h2(i2 || Object.keys(e[0]), e, r2);
        } else if ("object" == typeof e)
          return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || i2), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), h2(e.fields || [], e.data || [], r2);
        throw new Error("Unable to serialize unrecognized input");
        function h2(e2, t2, r3) {
          var i3 = "";
          "string" == typeof e2 && (e2 = JSON.parse(e2)), "string" == typeof t2 && (t2 = JSON.parse(t2));
          var n3 = Array.isArray(e2) && 0 < e2.length, s3 = !Array.isArray(t2[0]);
          if (n3 && _3) {
            for (var a3 = 0; a3 < e2.length; a3++)
              0 < a3 && (i3 += m3), i3 += v4(e2[a3], a3);
            0 < t2.length && (i3 += y4);
          }
          for (var o4 = 0; o4 < t2.length; o4++) {
            var u3 = n3 ? e2.length : t2[o4].length, h3 = false, f3 = n3 ? 0 === Object.keys(t2[o4]).length : 0 === t2[o4].length;
            if (r3 && !n3 && (h3 = "greedy" === r3 ? "" === t2[o4].join("").trim() : 1 === t2[o4].length && 0 === t2[o4][0].length), "greedy" === r3 && n3) {
              for (var d4 = [], l3 = 0; l3 < u3; l3++) {
                var c2 = s3 ? e2[l3] : l3;
                d4.push(t2[o4][c2]);
              }
              h3 = "" === d4.join("").trim();
            }
            if (!h3) {
              for (var p3 = 0; p3 < u3; p3++) {
                0 < p3 && !f3 && (i3 += m3);
                var g2 = n3 && s3 ? e2[p3] : p3;
                i3 += v4(t2[o4][g2], p3);
              }
              o4 < t2.length - 1 && (!r3 || 0 < u3 && !f3) && (i3 += y4);
            }
          }
          return i3;
        }
        function v4(e2, t2) {
          if (null == e2)
            return "";
          if (e2.constructor === Date)
            return JSON.stringify(e2).slice(1, 25);
          var r3 = false;
          o3 && "string" == typeof e2 && o3.test(e2) && (e2 = "'" + e2, r3 = true);
          var i3 = e2.toString().replace(u2, a2);
          return (r3 = r3 || true === n2 || "function" == typeof n2 && n2(e2, t2) || Array.isArray(n2) && n2[t2] || function(e3, t3) {
            for (var r4 = 0; r4 < t3.length; r4++)
              if (-1 < e3.indexOf(t3[r4]))
                return true;
            return false;
          }(i3, b2.BAD_DELIMITERS) || -1 < i3.indexOf(m3) || " " === i3.charAt(0) || " " === i3.charAt(i3.length - 1)) ? s2 + i3 + s2 : i3;
        }
      } };
      if (b2.RECORD_SEP = String.fromCharCode(30), b2.UNIT_SEP = String.fromCharCode(31), b2.BYTE_ORDER_MARK = "\uFEFF", b2.BAD_DELIMITERS = ["\r", "\n", '"', b2.BYTE_ORDER_MARK], b2.WORKERS_SUPPORTED = !n && !!f2.Worker, b2.NODE_STREAM_INPUT = 1, b2.LocalChunkSize = 10485760, b2.RemoteChunkSize = 5242880, b2.DefaultDelimiter = ",", b2.Parser = E2, b2.ParserHandle = r, b2.NetworkStreamer = l2, b2.FileStreamer = c, b2.StringStreamer = p2, b2.ReadableStreamStreamer = g, f2.jQuery) {
        var d3 = f2.jQuery;
        d3.fn.parse = function(o3) {
          var r2 = o3.config || {}, u2 = [];
          return this.each(function(e2) {
            if (!("INPUT" === d3(this).prop("tagName").toUpperCase() && "file" === d3(this).attr("type").toLowerCase() && f2.FileReader) || !this.files || 0 === this.files.length)
              return true;
            for (var t = 0; t < this.files.length; t++)
              u2.push({ file: this.files[t], inputElem: this, instanceConfig: d3.extend({}, r2) });
          }), e(), this;
          function e() {
            if (0 !== u2.length) {
              var e2, t, r3, i2, n2 = u2[0];
              if (J2(o3.before)) {
                var s2 = o3.before(n2.file, n2.inputElem);
                if ("object" == typeof s2) {
                  if ("abort" === s2.action)
                    return e2 = "AbortError", t = n2.file, r3 = n2.inputElem, i2 = s2.reason, void (J2(o3.error) && o3.error({ name: e2 }, t, r3, i2));
                  if ("skip" === s2.action)
                    return void h2();
                  "object" == typeof s2.config && (n2.instanceConfig = d3.extend(n2.instanceConfig, s2.config));
                } else if ("skip" === s2)
                  return void h2();
              }
              var a2 = n2.instanceConfig.complete;
              n2.instanceConfig.complete = function(e3) {
                J2(a2) && a2(e3, n2.file, n2.inputElem), h2();
              }, b2.parse(n2.file, n2.instanceConfig);
            } else
              J2(o3.complete) && o3.complete();
          }
          function h2() {
            u2.splice(0, 1), e();
          }
        };
      }
      function h(e) {
        this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, (function(e2) {
          var t = w(e2);
          t.chunkSize = parseInt(t.chunkSize), e2.step || e2.chunk || (t.chunkSize = null);
          this._handle = new r(t), (this._handle.streamer = this)._config = t;
        }).call(this, e), this.parseChunk = function(e2, t) {
          if (this.isFirstChunk && J2(this._config.beforeFirstChunk)) {
            var r2 = this._config.beforeFirstChunk(e2);
            void 0 !== r2 && (e2 = r2);
          }
          this.isFirstChunk = false, this._halted = false;
          var i2 = this._partialLine + e2;
          this._partialLine = "";
          var n2 = this._handle.parse(i2, this._baseIndex, !this._finished);
          if (!this._handle.paused() && !this._handle.aborted()) {
            var s2 = n2.meta.cursor;
            this._finished || (this._partialLine = i2.substring(s2 - this._baseIndex), this._baseIndex = s2), n2 && n2.data && (this._rowCount += n2.data.length);
            var a2 = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (o2)
              f2.postMessage({ results: n2, workerId: b2.WORKER_ID, finished: a2 });
            else if (J2(this._config.chunk) && !t) {
              if (this._config.chunk(n2, this._handle), this._handle.paused() || this._handle.aborted())
                return void (this._halted = true);
              n2 = void 0, this._completeResults = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n2.data), this._completeResults.errors = this._completeResults.errors.concat(n2.errors), this._completeResults.meta = n2.meta), this._completed || !a2 || !J2(this._config.complete) || n2 && n2.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), a2 || n2 && n2.meta.paused || this._nextChunk(), n2;
          }
          this._halted = true;
        }, this._sendError = function(e2) {
          J2(this._config.error) ? this._config.error(e2) : o2 && this._config.error && f2.postMessage({ workerId: b2.WORKER_ID, error: e2, finished: false });
        };
      }
      function l2(e) {
        var i2;
        (e = e || {}).chunkSize || (e.chunkSize = b2.RemoteChunkSize), h.call(this, e), this._nextChunk = n ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(e2) {
          this._input = e2, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished)
            this._chunkLoaded();
          else {
            if (i2 = new XMLHttpRequest(), this._config.withCredentials && (i2.withCredentials = this._config.withCredentials), n || (i2.onload = v3(this._chunkLoaded, this), i2.onerror = v3(this._chunkError, this)), i2.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
              var e2 = this._config.downloadRequestHeaders;
              for (var t in e2)
                i2.setRequestHeader(t, e2[t]);
            }
            if (this._config.chunkSize) {
              var r2 = this._start + this._config.chunkSize - 1;
              i2.setRequestHeader("Range", "bytes=" + this._start + "-" + r2);
            }
            try {
              i2.send(this._config.downloadRequestBody);
            } catch (e3) {
              this._chunkError(e3.message);
            }
            n && 0 === i2.status && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          4 === i2.readyState && (i2.status < 200 || 400 <= i2.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : i2.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e2) {
            var t = e2.getResponseHeader("Content-Range");
            if (null === t)
              return -1;
            return parseInt(t.substring(t.lastIndexOf("/") + 1));
          }(i2), this.parseChunk(i2.responseText)));
        }, this._chunkError = function(e2) {
          var t = i2.statusText || e2;
          this._sendError(new Error(t));
        };
      }
      function c(e) {
        var i2, n2;
        (e = e || {}).chunkSize || (e.chunkSize = b2.LocalChunkSize), h.call(this, e);
        var s2 = "undefined" != typeof FileReader;
        this.stream = function(e2) {
          this._input = e2, n2 = e2.slice || e2.webkitSlice || e2.mozSlice, s2 ? ((i2 = new FileReader()).onload = v3(this._chunkLoaded, this), i2.onerror = v3(this._chunkError, this)) : i2 = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var e2 = this._input;
          if (this._config.chunkSize) {
            var t = Math.min(this._start + this._config.chunkSize, this._input.size);
            e2 = n2.call(e2, this._start, t);
          }
          var r2 = i2.readAsText(e2, this._config.encoding);
          s2 || this._chunkLoaded({ target: { result: r2 } });
        }, this._chunkLoaded = function(e2) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e2.target.result);
        }, this._chunkError = function() {
          this._sendError(i2.error);
        };
      }
      function p2(e) {
        var r2;
        h.call(this, e = e || {}), this.stream = function(e2) {
          return r2 = e2, this._nextChunk();
        }, this._nextChunk = function() {
          if (!this._finished) {
            var e2, t = this._config.chunkSize;
            return t ? (e2 = r2.substring(0, t), r2 = r2.substring(t)) : (e2 = r2, r2 = ""), this._finished = !r2, this.parseChunk(e2);
          }
        };
      }
      function g(e) {
        h.call(this, e = e || {});
        var t = [], r2 = true, i2 = false;
        this.pause = function() {
          h.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          h.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e2) {
          this._input = e2, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          i2 && 1 === t.length && (this._finished = true);
        }, this._nextChunk = function() {
          this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : r2 = true;
        }, this._streamData = v3(function(e2) {
          try {
            t.push("string" == typeof e2 ? e2 : e2.toString(this._config.encoding)), r2 && (r2 = false, this._checkIsFinished(), this.parseChunk(t.shift()));
          } catch (e3) {
            this._streamError(e3);
          }
        }, this), this._streamError = v3(function(e2) {
          this._streamCleanUp(), this._sendError(e2);
        }, this), this._streamEnd = v3(function() {
          this._streamCleanUp(), i2 = true, this._streamData("");
        }, this), this._streamCleanUp = v3(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function r(m3) {
        var a2, o3, u2, i2 = Math.pow(2, 53), n2 = -i2, s2 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, h2 = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, t = this, r2 = 0, f3 = 0, d4 = false, e = false, l3 = [], c2 = { data: [], errors: [], meta: {} };
        if (J2(m3.step)) {
          var p3 = m3.step;
          m3.step = function(e2) {
            if (c2 = e2, _3())
              g2();
            else {
              if (g2(), 0 === c2.data.length)
                return;
              r2 += e2.data.length, m3.preview && r2 > m3.preview ? o3.abort() : (c2.data = c2.data[0], p3(c2, t));
            }
          };
        }
        function y4(e2) {
          return "greedy" === m3.skipEmptyLines ? "" === e2.join("").trim() : 1 === e2.length && 0 === e2[0].length;
        }
        function g2() {
          return c2 && u2 && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b2.DefaultDelimiter + "'"), u2 = false), m3.skipEmptyLines && (c2.data = c2.data.filter(function(e2) {
            return !y4(e2);
          })), _3() && function() {
            if (!c2)
              return;
            function e2(e3, t3) {
              J2(m3.transformHeader) && (e3 = m3.transformHeader(e3, t3)), l3.push(e3);
            }
            if (Array.isArray(c2.data[0])) {
              for (var t2 = 0; _3() && t2 < c2.data.length; t2++)
                c2.data[t2].forEach(e2);
              c2.data.splice(0, 1);
            } else
              c2.data.forEach(e2);
          }(), function() {
            if (!c2 || !m3.header && !m3.dynamicTyping && !m3.transform)
              return c2;
            function e2(e3, t3) {
              var r3, i3 = m3.header ? {} : [];
              for (r3 = 0; r3 < e3.length; r3++) {
                var n3 = r3, s3 = e3[r3];
                m3.header && (n3 = r3 >= l3.length ? "__parsed_extra" : l3[r3]), m3.transform && (s3 = m3.transform(s3, n3)), s3 = v4(n3, s3), "__parsed_extra" === n3 ? (i3[n3] = i3[n3] || [], i3[n3].push(s3)) : i3[n3] = s3;
              }
              return m3.header && (r3 > l3.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l3.length + " fields but parsed " + r3, f3 + t3) : r3 < l3.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l3.length + " fields but parsed " + r3, f3 + t3)), i3;
            }
            var t2 = 1;
            !c2.data.length || Array.isArray(c2.data[0]) ? (c2.data = c2.data.map(e2), t2 = c2.data.length) : c2.data = e2(c2.data, 0);
            m3.header && c2.meta && (c2.meta.fields = l3);
            return f3 += t2, c2;
          }();
        }
        function _3() {
          return m3.header && 0 === l3.length;
        }
        function v4(e2, t2) {
          return r3 = e2, m3.dynamicTypingFunction && void 0 === m3.dynamicTyping[r3] && (m3.dynamicTyping[r3] = m3.dynamicTypingFunction(r3)), true === (m3.dynamicTyping[r3] || m3.dynamicTyping) ? "true" === t2 || "TRUE" === t2 || "false" !== t2 && "FALSE" !== t2 && (function(e3) {
            if (s2.test(e3)) {
              var t3 = parseFloat(e3);
              if (n2 < t3 && t3 < i2)
                return true;
            }
            return false;
          }(t2) ? parseFloat(t2) : h2.test(t2) ? new Date(t2) : "" === t2 ? null : t2) : t2;
          var r3;
        }
        function k(e2, t2, r3, i3) {
          var n3 = { type: e2, code: t2, message: r3 };
          void 0 !== i3 && (n3.row = i3), c2.errors.push(n3);
        }
        this.parse = function(e2, t2, r3) {
          var i3 = m3.quoteChar || '"';
          if (m3.newline || (m3.newline = function(e3, t3) {
            e3 = e3.substring(0, 1048576);
            var r4 = new RegExp(Q(t3) + "([^]*?)" + Q(t3), "gm"), i4 = (e3 = e3.replace(r4, "")).split("\r"), n4 = e3.split("\n"), s4 = 1 < n4.length && n4[0].length < i4[0].length;
            if (1 === i4.length || s4)
              return "\n";
            for (var a3 = 0, o4 = 0; o4 < i4.length; o4++)
              "\n" === i4[o4][0] && a3++;
            return a3 >= i4.length / 2 ? "\r\n" : "\r";
          }(e2, i3)), u2 = false, m3.delimiter)
            J2(m3.delimiter) && (m3.delimiter = m3.delimiter(e2), c2.meta.delimiter = m3.delimiter);
          else {
            var n3 = function(e3, t3, r4, i4, n4) {
              var s4, a3, o4, u3;
              n4 = n4 || [",", "	", "|", ";", b2.RECORD_SEP, b2.UNIT_SEP];
              for (var h3 = 0; h3 < n4.length; h3++) {
                var f4 = n4[h3], d5 = 0, l4 = 0, c3 = 0;
                o4 = void 0;
                for (var p4 = new E2({ comments: i4, delimiter: f4, newline: t3, preview: 10 }).parse(e3), g3 = 0; g3 < p4.data.length; g3++)
                  if (r4 && y4(p4.data[g3]))
                    c3++;
                  else {
                    var _4 = p4.data[g3].length;
                    l4 += _4, void 0 !== o4 ? 0 < _4 && (d5 += Math.abs(_4 - o4), o4 = _4) : o4 = _4;
                  }
                0 < p4.data.length && (l4 /= p4.data.length - c3), (void 0 === a3 || d5 <= a3) && (void 0 === u3 || u3 < l4) && 1.99 < l4 && (a3 = d5, s4 = f4, u3 = l4);
              }
              return { successful: !!(m3.delimiter = s4), bestDelimiter: s4 };
            }(e2, m3.newline, m3.skipEmptyLines, m3.comments, m3.delimitersToGuess);
            n3.successful ? m3.delimiter = n3.bestDelimiter : (u2 = true, m3.delimiter = b2.DefaultDelimiter), c2.meta.delimiter = m3.delimiter;
          }
          var s3 = w(m3);
          return m3.preview && m3.header && s3.preview++, a2 = e2, o3 = new E2(s3), c2 = o3.parse(a2, t2, r3), g2(), d4 ? { meta: { paused: true } } : c2 || { meta: { paused: false } };
        }, this.paused = function() {
          return d4;
        }, this.pause = function() {
          d4 = true, o3.abort(), a2 = J2(m3.chunk) ? "" : a2.substring(o3.getCharIndex());
        }, this.resume = function() {
          t.streamer._halted ? (d4 = false, t.streamer.parseChunk(a2, true)) : setTimeout(t.resume, 3);
        }, this.aborted = function() {
          return e;
        }, this.abort = function() {
          e = true, o3.abort(), c2.meta.aborted = true, J2(m3.complete) && m3.complete(c2), a2 = "";
        };
      }
      function Q(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function E2(j) {
        var z2, M = (j = j || {}).delimiter, P2 = j.newline, U = j.comments, q2 = j.step, N = j.preview, B = j.fastMode, K = z2 = void 0 === j.quoteChar || null === j.quoteChar ? '"' : j.quoteChar;
        if (void 0 !== j.escapeChar && (K = j.escapeChar), ("string" != typeof M || -1 < b2.BAD_DELIMITERS.indexOf(M)) && (M = ","), U === M)
          throw new Error("Comment character same as delimiter");
        true === U ? U = "#" : ("string" != typeof U || -1 < b2.BAD_DELIMITERS.indexOf(U)) && (U = false), "\n" !== P2 && "\r" !== P2 && "\r\n" !== P2 && (P2 = "\n");
        var W = 0, H = false;
        this.parse = function(i2, t, r2) {
          if ("string" != typeof i2)
            throw new Error("Input must be a string");
          var n2 = i2.length, e = M.length, s2 = P2.length, a2 = U.length, o3 = J2(q2), u2 = [], h2 = [], f3 = [], d4 = W = 0;
          if (!i2)
            return L();
          if (j.header && !t) {
            var l3 = i2.split(P2)[0].split(M), c2 = [], p3 = {}, g2 = false;
            for (var _3 in l3) {
              var m3 = l3[_3];
              J2(j.transformHeader) && (m3 = j.transformHeader(m3, _3));
              var y4 = m3, v4 = p3[m3] || 0;
              for (0 < v4 && (g2 = true, y4 = m3 + "_" + v4), p3[m3] = v4 + 1; c2.includes(y4); )
                y4 = y4 + "_" + v4;
              c2.push(y4);
            }
            if (g2) {
              var k = i2.split(P2);
              k[0] = c2.join(M), i2 = k.join(P2);
            }
          }
          if (B || false !== B && -1 === i2.indexOf(z2)) {
            for (var b3 = i2.split(P2), E3 = 0; E3 < b3.length; E3++) {
              if (f3 = b3[E3], W += f3.length, E3 !== b3.length - 1)
                W += P2.length;
              else if (r2)
                return L();
              if (!U || f3.substring(0, a2) !== U) {
                if (o3) {
                  if (u2 = [], I2(f3.split(M)), F(), H)
                    return L();
                } else
                  I2(f3.split(M));
                if (N && N <= E3)
                  return u2 = u2.slice(0, N), L(true);
              }
            }
            return L();
          }
          for (var w2 = i2.indexOf(M, W), R2 = i2.indexOf(P2, W), C = new RegExp(Q(K) + Q(z2), "g"), S2 = i2.indexOf(z2, W); ; )
            if (i2[W] !== z2)
              if (U && 0 === f3.length && i2.substring(W, W + a2) === U) {
                if (-1 === R2)
                  return L();
                W = R2 + s2, R2 = i2.indexOf(P2, W), w2 = i2.indexOf(M, W);
              } else if (-1 !== w2 && (w2 < R2 || -1 === R2))
                f3.push(i2.substring(W, w2)), W = w2 + e, w2 = i2.indexOf(M, W);
              else {
                if (-1 === R2)
                  break;
                if (f3.push(i2.substring(W, R2)), D(R2 + s2), o3 && (F(), H))
                  return L();
                if (N && u2.length >= N)
                  return L(true);
              }
            else
              for (S2 = W, W++; ; ) {
                if (-1 === (S2 = i2.indexOf(z2, S2 + 1)))
                  return r2 || h2.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: u2.length, index: W }), T3();
                if (S2 === n2 - 1)
                  return T3(i2.substring(W, S2).replace(C, z2));
                if (z2 !== K || i2[S2 + 1] !== K) {
                  if (z2 === K || 0 === S2 || i2[S2 - 1] !== K) {
                    -1 !== w2 && w2 < S2 + 1 && (w2 = i2.indexOf(M, S2 + 1)), -1 !== R2 && R2 < S2 + 1 && (R2 = i2.indexOf(P2, S2 + 1));
                    var O3 = A3(-1 === R2 ? w2 : Math.min(w2, R2));
                    if (i2.substr(S2 + 1 + O3, e) === M) {
                      f3.push(i2.substring(W, S2).replace(C, z2)), i2[W = S2 + 1 + O3 + e] !== z2 && (S2 = i2.indexOf(z2, W)), w2 = i2.indexOf(M, W), R2 = i2.indexOf(P2, W);
                      break;
                    }
                    var x = A3(R2);
                    if (i2.substring(S2 + 1 + x, S2 + 1 + x + s2) === P2) {
                      if (f3.push(i2.substring(W, S2).replace(C, z2)), D(S2 + 1 + x + s2), w2 = i2.indexOf(M, W), S2 = i2.indexOf(z2, W), o3 && (F(), H))
                        return L();
                      if (N && u2.length >= N)
                        return L(true);
                      break;
                    }
                    h2.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: u2.length, index: W }), S2++;
                  }
                } else
                  S2++;
              }
          return T3();
          function I2(e2) {
            u2.push(e2), d4 = W;
          }
          function A3(e2) {
            var t2 = 0;
            if (-1 !== e2) {
              var r3 = i2.substring(S2 + 1, e2);
              r3 && "" === r3.trim() && (t2 = r3.length);
            }
            return t2;
          }
          function T3(e2) {
            return r2 || (void 0 === e2 && (e2 = i2.substring(W)), f3.push(e2), W = n2, I2(f3), o3 && F()), L();
          }
          function D(e2) {
            W = e2, I2(f3), f3 = [], R2 = i2.indexOf(P2, W);
          }
          function L(e2) {
            return { data: u2, errors: h2, meta: { delimiter: M, linebreak: P2, aborted: H, truncated: !!e2, cursor: d4 + (t || 0) } };
          }
          function F() {
            q2(L()), u2 = [], h2 = [];
          }
        }, this.abort = function() {
          H = true;
        }, this.getCharIndex = function() {
          return W;
        };
      }
      function _2(e) {
        var t = e.data, r2 = a[t.workerId], i2 = false;
        if (t.error)
          r2.userError(t.error, t.file);
        else if (t.results && t.results.data) {
          var n2 = { abort: function() {
            i2 = true, m2(t.workerId, { data: [], errors: [], meta: { aborted: true } });
          }, pause: y3, resume: y3 };
          if (J2(r2.userStep)) {
            for (var s2 = 0; s2 < t.results.data.length && (r2.userStep({ data: t.results.data[s2], errors: t.results.errors, meta: t.results.meta }, n2), !i2); s2++)
              ;
            delete t.results;
          } else
            J2(r2.userChunk) && (r2.userChunk(t.results, n2, t.file), delete t.results);
        }
        t.finished && !i2 && m2(t.workerId, t.results);
      }
      function m2(e, t) {
        var r2 = a[e];
        J2(r2.userComplete) && r2.userComplete(t), r2.terminate(), delete a[e];
      }
      function y3() {
        throw new Error("Not implemented.");
      }
      function w(e) {
        if ("object" != typeof e || null === e)
          return e;
        var t = Array.isArray(e) ? [] : {};
        for (var r2 in e)
          t[r2] = w(e[r2]);
        return t;
      }
      function v3(e, t) {
        return function() {
          e.apply(t, arguments);
        };
      }
      function J2(e) {
        return "function" == typeof e;
      }
      return o2 && (f2.onmessage = function(e) {
        var t = e.data;
        void 0 === b2.WORKER_ID && t && (b2.WORKER_ID = t.workerId);
        if ("string" == typeof t.input)
          f2.postMessage({ workerId: b2.WORKER_ID, results: b2.parse(t.input, t.config), finished: true });
        else if (f2.File && t.input instanceof File || t.input instanceof Object) {
          var r2 = b2.parse(t.input, t.config);
          r2 && f2.postMessage({ workerId: b2.WORKER_ID, results: r2, finished: true });
        }
      }), (l2.prototype = Object.create(h.prototype)).constructor = l2, (c.prototype = Object.create(h.prototype)).constructor = c, (p2.prototype = Object.create(p2.prototype)).constructor = p2, (g.prototype = Object.create(h.prototype)).constructor = g, b2;
    });
  }
});

// node_modules/@refinedev/core/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@refinedev/devtools-internal/dist/index.mjs
var import_error_stack_parser = __toESM(require_error_stack_parser(), 1);
var import_react = __toESM(require_react(), 1);
var T2 = "renderWithHooks";
var m = (r) => {
  let e = r.findIndex((n) => n.functionName === T2);
  return e !== -1 ? r.slice(0, e) : r;
};
var f = false ? /node_modules\/refinedev\/(?<name>.*?)\// : /\/refine\/packages\/(?<name>.*?)\//;
var y2 = (r) => r ? !!r.match(f) : false;
var E = (r) => {
  var o2;
  if (!r)
    return;
  let e = r.match(f), n = (o2 = e == null ? void 0 : e.groups) == null ? void 0 : o2.name;
  if (n)
    return `@refinedev/${n}`;
};
function p(r) {
  if (false)
    return [];
  try {
    let e = new Error(), n = import_error_stack_parser.default.parse(e);
    return m(n).map((t) => ({ file: t.fileName, line: t.lineNumber, column: t.columnNumber, function: t.functionName, isRefine: y2(t.fileName), packageName: E(t.fileName) })).filter((t) => t.function).filter((t) => !(r != null && r.includes(t.function ?? ""))).slice(1);
  } catch {
    return [];
  }
}
var d2 = (r, e) => {
  if (O[r] === "auth")
    return null;
  if (r === "useCan")
    return e ? "key[1].resource" : "key[1]";
  if (O[r] === "audit-log")
    return r === "useLog" ? "variables.resource" : "key[1]";
  if (O[r] === "data") {
    if (r === "useCustom" || r === "useCustomMutation")
      return null;
    switch (r) {
      case "useList":
      case "useInfiniteList":
      case "useOne":
      case "useMany":
        return e ? "key[1]" : "key[2]";
      case "useCreate":
      case "useCreateMany":
      case "useDelete":
      case "useDeleteMany":
      case "useUpdate":
      case "useUpdateMany":
        return "variables.resource";
    }
  }
  return null;
};
function P(r, e, n, o2) {
  if (false)
    return { hookName: "", trace: [], resourcePath: null, legacyKey: false };
  let s = p(o2).slice(1), t = d2(r, e);
  return { hookName: r, trace: s, resourcePath: t, legacyKey: e, resourceName: n };
}
var l = (r, e) => {
  let n = e == null ? void 0 : e.map((s) => `${s.file}:${s.line}:${s.column}#${s.function}-${s.packageName}-${s.isRefine ? 1 : 0}`);
  return JSON.stringify([...r ?? [], ...n ?? []]);
};
var R = (r) => (e) => {
  var o2;
  if (!((o2 = e == null ? void 0 : e.meta) != null && o2.trace))
    return;
  let n = e == null ? void 0 : e.meta;
  new Promise((s) => {
    var t, a;
    d(r, v.ACTIVITY, { type: "mutation", identifier: l(e == null ? void 0 : e.options.mutationKey, (t = e == null ? void 0 : e.meta) == null ? void 0 : t.trace), key: e == null ? void 0 : e.options.mutationKey, status: e == null ? void 0 : e.state.status, state: e == null ? void 0 : e.state, variables: (a = e == null ? void 0 : e.state) == null ? void 0 : a.variables, ...n }), s();
  });
};
var v2 = (r) => (e) => {
  var o2;
  if (!((o2 = e == null ? void 0 : e.meta) != null && o2.trace))
    return;
  let n = e == null ? void 0 : e.meta;
  new Promise((s) => {
    var t;
    d(r, v.ACTIVITY, { type: "query", identifier: l(e.queryKey, (t = e.meta) == null ? void 0 : t.trace), key: e.queryKey, status: e.state.status, state: e.state, ...n }), s();
  });
};
var b = false ? () => ({}) : (r) => {
  let { ws: e } = (0, import_react.useContext)(y), n = import_react.default.useRef(), o2 = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    if (!e)
      return () => 0;
    let s = r.getQueryCache(), t = v2(e);
    return s.getAll().forEach(t), n.current = s.subscribe(({ query: a, type: c }) => (c === "added" || c === "updated") && t(a)), () => {
      var a;
      (a = n.current) == null || a.call(n);
    };
  }, [e, r]), import_react.default.useEffect(() => {
    if (!e)
      return () => 0;
    let s = r.getMutationCache(), t = R(e);
    return s.getAll().forEach(t), o2.current = s.subscribe(({ mutation: a, type: c }) => (c === "added" || c === "updated") && t(a)), () => {
      var a;
      (a = o2.current) == null || a.call(o2);
    };
  }, [e, r]), import_react.default.useEffect(() => e ? T(e, v.DEVTOOLS_INVALIDATE_QUERY_ACTION, ({ queryKey: t }) => {
    t && r.invalidateQueries(t);
  }) : () => 0, [e, r]), {};
};

// node_modules/@tanstack/query-core/build/lib/subscribable.mjs
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    const identity2 = {
      listener
    };
    this.listeners.add(identity2);
    this.onSubscribe();
    return () => {
      this.listeners.delete(identity2);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

// node_modules/@tanstack/query-core/build/lib/utils.mjs
var isServer = typeof window === "undefined" || "Deno" in window;
function noop() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return {
      ...arg3,
      queryKey: arg1,
      queryFn: arg2
    };
  }
  return {
    ...arg2,
    queryKey: arg1
  };
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === "function") {
      return {
        ...arg3,
        mutationKey: arg1,
        mutationFn: arg2
      };
    }
    return {
      ...arg2,
      mutationKey: arg1
    };
  }
  if (typeof arg1 === "function") {
    return {
      ...arg2,
      mutationFn: arg1
    };
  }
  return {
    ...arg1
  };
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{
    ...arg2,
    queryKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetchStatus !== "undefined" && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const {
    exact,
    fetching,
    predicate,
    mutationKey
  } = filters;
  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
function hashQueryKey(queryKey) {
  return JSON.stringify(queryKey, (_2, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
    result[key] = val[key];
    return result;
  }, {}) : val);
}
function partialMatchKey(a, b2) {
  return partialDeepEqual(a, b2);
}
function partialDeepEqual(a, b2) {
  if (a === b2) {
    return true;
  }
  if (typeof a !== typeof b2) {
    return false;
  }
  if (a && b2 && typeof a === "object" && typeof b2 === "object") {
    return !Object.keys(b2).some((key) => !partialDeepEqual(a[key], b2[key]));
  }
  return false;
}
function replaceEqualDeep(a, b2) {
  if (a === b2) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b2);
  if (array || isPlainObject(a) && isPlainObject(b2)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b2 : Object.keys(b2);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i2 = 0; i2 < bSize; i2++) {
      const key = array ? i2 : bItems[i2];
      copy[key] = replaceEqualDeep(a[key], b2[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b2;
}
function shallowEqualObjects(a, b2) {
  if (a && !b2 || b2 && !a) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b2[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o2) {
  if (!hasObjectPrototype(o2)) {
    return false;
  }
  const ctor = o2.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isQueryKey(value) {
  return Array.isArray(value);
}
function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  sleep(0).then(callback);
}
function getAbortController() {
  if (typeof AbortController === "function") {
    return new AbortController();
  }
  return;
}
function replaceData(prevData, data, options) {
  if (options.isDataEqual != null && options.isDataEqual(prevData, data)) {
    return prevData;
  } else if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}

// node_modules/@tanstack/query-core/build/lib/focusManager.mjs
var FocusManager = class extends Subscribable {
  constructor() {
    super();
    this.setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        window.addEventListener("focus", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
          window.removeEventListener("focus", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _this$cleanup2;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.focused !== focused;
    if (changed) {
      this.focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }
  isFocused() {
    if (typeof this.focused === "boolean") {
      return this.focused;
    }
    if (typeof document === "undefined") {
      return true;
    }
    return [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
};
var focusManager = new FocusManager();

// node_modules/@tanstack/query-core/build/lib/onlineManager.mjs
var onlineEvents = ["online", "offline"];
var OnlineManager = class extends Subscribable {
  constructor() {
    super();
    this.setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onOnline();
        onlineEvents.forEach((event) => {
          window.addEventListener(event, listener, false);
        });
        return () => {
          onlineEvents.forEach((event) => {
            window.removeEventListener(event, listener);
          });
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _this$cleanup2;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup((online) => {
      if (typeof online === "boolean") {
        this.setOnline(online);
      } else {
        this.onOnline();
      }
    });
  }
  setOnline(online) {
    const changed = this.online !== online;
    if (changed) {
      this.online = online;
      this.onOnline();
    }
  }
  onOnline() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }
  isOnline() {
    if (typeof this.online === "boolean") {
      return this.online;
    }
    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
      return true;
    }
    return navigator.onLine;
  }
};
var onlineManager = new OnlineManager();

// node_modules/@tanstack/query-core/build/lib/retryer.mjs
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode != null ? networkMode : "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class {
  constructor(options) {
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let isResolved = false;
  let continueFn;
  let promiseResolve;
  let promiseReject;
  const promise = new Promise((outerResolve, outerReject) => {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });
  const cancel = (cancelOptions) => {
    if (!isResolved) {
      reject(new CancelledError(cancelOptions));
      config.abort == null ? void 0 : config.abort();
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const shouldPause = () => !focusManager.isFocused() || config.networkMode !== "always" && !onlineManager.isOnline();
  const resolve = (value) => {
    if (!isResolved) {
      isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved) {
      isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        const canContinue = isResolved || !shouldPause();
        if (canContinue) {
          continueResolve(value);
        }
        return canContinue;
      };
      config.onPause == null ? void 0 : config.onPause();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved) {
        config.onContinue == null ? void 0 : config.onContinue();
      }
    });
  };
  const run = () => {
    if (isResolved) {
      return;
    }
    let promiseOrValue;
    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      var _config$retry, _config$retryDelay;
      if (isResolved) {
        return;
      }
      const retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      const retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config.onFail == null ? void 0 : config.onFail(failureCount, error);
      sleep(delay).then(() => {
        if (shouldPause()) {
          return pause();
        }
        return;
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  if (canFetch(config.networkMode)) {
    run();
  } else {
    pause().then(run);
  }
  return {
    promise,
    cancel,
    continue: () => {
      const didContinue = continueFn == null ? void 0 : continueFn();
      return didContinue ? promise : Promise.resolve();
    },
    cancelRetry,
    continueRetry
  };
}

// node_modules/@tanstack/query-core/build/lib/logger.mjs
var defaultLogger = console;

// node_modules/@tanstack/query-core/build/lib/notifyManager.mjs
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  const batch = (callback) => {
    let result;
    transactions++;
    try {
      result = callback();
    } finally {
      transactions--;
      if (!transactions) {
        flush();
      }
    }
    return result;
  };
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleMicrotask(() => {
        notifyFn(callback);
      });
    }
  };
  const batchCalls = (callback) => {
    return (...args) => {
      schedule(() => {
        callback(...args);
      });
    };
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleMicrotask(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  const setNotifyFunction = (fn) => {
    notifyFn = fn;
  };
  const setBatchNotifyFunction = (fn) => {
    batchNotifyFn = fn;
  };
  return {
    batch,
    batchCalls,
    schedule,
    setNotifyFunction,
    setBatchNotifyFunction
  };
}
var notifyManager = createNotifyManager();

// node_modules/@tanstack/query-core/build/lib/removable.mjs
var Removable = class {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.cacheTime);
    }
  }
  updateCacheTime(newCacheTime) {
    this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : isServer ? Infinity : 5 * 60 * 1e3);
  }
  clearGcTimeout() {
    if (this.gcTimeout) {
      clearTimeout(this.gcTimeout);
      this.gcTimeout = void 0;
    }
  }
};

// node_modules/@tanstack/query-core/build/lib/query.mjs
var Query = class extends Removable {
  constructor(config) {
    super();
    this.abortSignalConsumed = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.logger = config.logger || defaultLogger;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || getDefaultState(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(options) {
    this.options = {
      ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.dispatch({
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.dispatch({
      type: "setState",
      state,
      setStateOptions
    });
  }
  cancel(options) {
    var _this$retryer;
    const promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({
      silent: true
    });
  }
  reset() {
    this.destroy();
    this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((observer) => observer.options.enabled !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((observer) => observer.getCurrentResult().isStale);
  }
  isStaleByTime(staleTime = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    var _this$retryer2;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    }
    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  }
  onOnline() {
    var _this$retryer3;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    }
    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.cache.notify({
        type: "observerAdded",
        query: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.cache.notify({
        type: "observerRemoved",
        query: this,
        observer
      });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: "invalidate"
      });
    }
  }
  fetch(options, fetchOptions) {
    var _this$options$behavio, _context$fetchOptions;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && fetchOptions != null && fetchOptions.cancelRefetch) {
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry();
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    if (true) {
      if (!Array.isArray(this.options.queryKey)) {
        this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
      }
    }
    const abortController = getAbortController();
    const queryFnContext = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          if (abortController) {
            this.abortSignalConsumed = true;
            return abortController.signal;
          }
          return void 0;
        }
      });
    };
    addSignalProperty(queryFnContext);
    const fetchFn = () => {
      if (!this.options.queryFn) {
        return Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'");
      }
      this.abortSignalConsumed = false;
      return this.options.queryFn(queryFnContext);
    };
    const context = {
      fetchOptions,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn
    };
    addSignalProperty(context);
    (_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch(context);
    this.revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;
      this.dispatch({
        type: "fetch",
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }
    const onError = (error) => {
      if (!(isCancelledError(error) && error.silent)) {
        this.dispatch({
          type: "error",
          error
        });
      }
      if (!isCancelledError(error)) {
        var _this$cache$config$on, _this$cache$config, _this$cache$config$on2, _this$cache$config2;
        (_this$cache$config$on = (_this$cache$config = this.cache.config).onError) == null ? void 0 : _this$cache$config$on.call(_this$cache$config, error, this);
        (_this$cache$config$on2 = (_this$cache$config2 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on2.call(_this$cache$config2, this.state.data, error, this);
        if (true) {
          this.logger.error(error);
        }
      }
      if (!this.isFetchingOptimistic) {
        this.scheduleGc();
      }
      this.isFetchingOptimistic = false;
    };
    this.retryer = createRetryer({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : abortController.abort.bind(abortController),
      onSuccess: (data) => {
        var _this$cache$config$on3, _this$cache$config3, _this$cache$config$on4, _this$cache$config4;
        if (typeof data === "undefined") {
          if (true) {
            this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash);
          }
          onError(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(data);
        (_this$cache$config$on3 = (_this$cache$config3 = this.cache.config).onSuccess) == null ? void 0 : _this$cache$config$on3.call(_this$cache$config3, data, this);
        (_this$cache$config$on4 = (_this$cache$config4 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on4.call(_this$cache$config4, data, this.state.error, this);
        if (!this.isFetchingOptimistic) {
          this.scheduleGc();
        }
        this.isFetchingOptimistic = false;
      },
      onError,
      onFail: (failureCount, error) => {
        this.dispatch({
          type: "failed",
          failureCount,
          error
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode
    });
    this.promise = this.retryer.promise;
    return this.promise;
  }
  dispatch(action) {
    const reducer = (state) => {
      var _action$meta, _action$dataUpdatedAt;
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
            fetchStatus: canFetch(this.options.networkMode) ? "fetching" : "paused",
            ...!state.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const error = action.error;
          if (isCancelledError(error) && error.revert && this.revertState) {
            return {
              ...this.revertState,
              fetchStatus: "idle"
            };
          }
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate(action);
      });
      this.cache.notify({
        query: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = typeof data !== "undefined";
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "loading",
    fetchStatus: "idle"
  };
}

// node_modules/@tanstack/query-core/build/lib/queryCache.mjs
var QueryCache = class extends Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.queries = [];
    this.queriesMap = {};
  }
  build(client, options, state) {
    var _options$queryHash;
    const queryKey = options.queryKey;
    const queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        logger: client.getLogger(),
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter((x) => x !== query);
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({
        type: "removed",
        query
      });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.queriesMap[queryHash];
  }
  getAll() {
    return this.queries;
  }
  find(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find((query) => matchQuery(filters, query));
  }
  findAll(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    return Object.keys(filters).length > 0 ? this.queries.filter((query) => matchQuery(filters, query)) : this.queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onOnline();
      });
    });
  }
};

// node_modules/@tanstack/query-core/build/lib/mutation.mjs
var Mutation = class extends Removable {
  constructor(config) {
    super();
    this.defaultOptions = config.defaultOptions;
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.logger = config.logger || defaultLogger;
    this.observers = [];
    this.state = config.state || getDefaultState2();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = {
      ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(state) {
    this.dispatch({
      type: "setState",
      state
    });
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.observers.length) {
      if (this.state.status === "loading") {
        this.scheduleGc();
      } else {
        this.mutationCache.remove(this);
      }
    }
  }
  continue() {
    var _this$retryer$continu, _this$retryer;
    return (_this$retryer$continu = (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.continue()) != null ? _this$retryer$continu : this.execute();
  }
  async execute() {
    const executeMutation = () => {
      var _this$options$retry;
      this.retryer = createRetryer({
        fn: () => {
          if (!this.options.mutationFn) {
            return Promise.reject("No mutationFn found");
          }
          return this.options.mutationFn(this.state.variables);
        },
        onFail: (failureCount, error) => {
          this.dispatch({
            type: "failed",
            failureCount,
            error
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      });
      return this.retryer.promise;
    };
    const restored = this.state.status === "loading";
    try {
      var _this$mutationCache$c3, _this$mutationCache$c4, _this$options$onSucce, _this$options2, _this$mutationCache$c5, _this$mutationCache$c6, _this$options$onSettl, _this$options3;
      if (!restored) {
        var _this$mutationCache$c, _this$mutationCache$c2, _this$options$onMutat, _this$options;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        });
        await ((_this$mutationCache$c = (_this$mutationCache$c2 = this.mutationCache.config).onMutate) == null ? void 0 : _this$mutationCache$c.call(_this$mutationCache$c2, this.state.variables, this));
        const context = await ((_this$options$onMutat = (_this$options = this.options).onMutate) == null ? void 0 : _this$options$onMutat.call(_this$options, this.state.variables));
        if (context !== this.state.context) {
          this.dispatch({
            type: "loading",
            context,
            variables: this.state.variables
          });
        }
      }
      const data = await executeMutation();
      await ((_this$mutationCache$c3 = (_this$mutationCache$c4 = this.mutationCache.config).onSuccess) == null ? void 0 : _this$mutationCache$c3.call(_this$mutationCache$c4, data, this.state.variables, this.state.context, this));
      await ((_this$options$onSucce = (_this$options2 = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options2, data, this.state.variables, this.state.context));
      await ((_this$mutationCache$c5 = (_this$mutationCache$c6 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c5.call(_this$mutationCache$c6, data, null, this.state.variables, this.state.context, this));
      await ((_this$options$onSettl = (_this$options3 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options3, data, null, this.state.variables, this.state.context));
      this.dispatch({
        type: "success",
        data
      });
      return data;
    } catch (error) {
      try {
        var _this$mutationCache$c7, _this$mutationCache$c8, _this$options$onError, _this$options4, _this$mutationCache$c9, _this$mutationCache$c10, _this$options$onSettl2, _this$options5;
        await ((_this$mutationCache$c7 = (_this$mutationCache$c8 = this.mutationCache.config).onError) == null ? void 0 : _this$mutationCache$c7.call(_this$mutationCache$c8, error, this.state.variables, this.state.context, this));
        if (true) {
          this.logger.error(error);
        }
        await ((_this$options$onError = (_this$options4 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options4, error, this.state.variables, this.state.context));
        await ((_this$mutationCache$c9 = (_this$mutationCache$c10 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c9.call(_this$mutationCache$c10, void 0, error, this.state.variables, this.state.context, this));
        await ((_this$options$onSettl2 = (_this$options5 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options5, void 0, error, this.state.variables, this.state.context));
        throw error;
      } finally {
        this.dispatch({
          type: "error",
          error
        });
      }
    }
  }
  dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "loading":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !canFetch(this.options.networkMode),
            status: "loading",
            variables: action.variables
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}

// node_modules/@tanstack/query-core/build/lib/mutationCache.mjs
var MutationCache = class extends Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.mutations = [];
    this.mutationId = 0;
  }
  build(client, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      logger: client.getLogger(),
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.mutations.push(mutation);
    this.notify({
      type: "added",
      mutation
    });
  }
  remove(mutation) {
    this.mutations = this.mutations.filter((x) => x !== mutation);
    this.notify({
      type: "removed",
      mutation
    });
  }
  clear() {
    notifyManager.batch(() => {
      this.mutations.forEach((mutation) => {
        this.remove(mutation);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find((mutation) => matchMutation(filters, mutation));
  }
  findAll(filters) {
    return this.mutations.filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    var _this$resuming;
    this.resuming = ((_this$resuming = this.resuming) != null ? _this$resuming : Promise.resolve()).then(() => {
      const pausedMutations = this.mutations.filter((x) => x.state.isPaused);
      return notifyManager.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(noop)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    });
    return this.resuming;
  }
};

// node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs
function infiniteQueryBehavior() {
  return {
    onFetch: (context) => {
      context.fetchFn = () => {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
        const refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        const fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        const pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        const isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
        const isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
        const oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        const oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        let newPageParams = oldPageParams;
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              var _context$signal;
              if ((_context$signal = context.signal) != null && _context$signal.aborted) {
                cancelled = true;
              } else {
                var _context$signal2;
                (_context$signal2 = context.signal) == null ? void 0 : _context$signal2.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = context.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + context.options.queryHash + "'"));
        const buildNewPages = (pages, param, page, previous) => {
          newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
          return previous ? [page, ...pages] : [...pages, page];
        };
        const fetchPage = (pages, manual, param, previous) => {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param === "undefined" && !manual && pages.length) {
            return Promise.resolve(pages);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const queryFnResult = queryFn(queryFnContext);
          const promise2 = Promise.resolve(queryFnResult).then((page) => buildNewPages(pages, param, page, previous));
          return promise2;
        };
        let promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param, true);
        } else {
          newPageParams = [];
          const manual = typeof context.options.getNextPageParam === "undefined";
          const shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
          promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
          for (let i2 = 1; i2 < oldPages.length; i2++) {
            promise = promise.then((pages) => {
              const shouldFetchNextPage = refetchPage && oldPages[i2] ? refetchPage(oldPages[i2], i2, oldPages) : true;
              if (shouldFetchNextPage) {
                const param = manual ? oldPageParams[i2] : getNextPageParam(context.options, pages);
                return fetchPage(pages, manual, param);
              }
              return Promise.resolve(buildNewPages(pages, oldPageParams[i2], oldPages[i2]));
            });
          }
        }
        const finalPromise = promise.then((pages) => ({
          pages,
          pageParams: newPageParams
        }));
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    const nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== "undefined" && nextPageParam !== null && nextPageParam !== false;
  }
  return;
}
function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    const previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== "undefined" && previousPageParam !== null && previousPageParam !== false;
  }
  return;
}

// node_modules/@tanstack/query-core/build/lib/queryClient.mjs
var QueryClient = class {
  constructor(config = {}) {
    this.queryCache = config.queryCache || new QueryCache();
    this.mutationCache = config.mutationCache || new MutationCache();
    this.logger = config.logger || defaultLogger;
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
    this.mountCount = 0;
    if (config.logger) {
      this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
    }
  }
  mount() {
    this.mountCount++;
    if (this.mountCount !== 1)
      return;
    this.unsubscribeFocus = focusManager.subscribe(() => {
      if (focusManager.isFocused()) {
        this.resumePausedMutations();
        this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(() => {
      if (onlineManager.isOnline()) {
        this.resumePausedMutations();
        this.queryCache.onOnline();
      }
    });
  }
  unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;
    this.mountCount--;
    if (this.mountCount !== 0)
      return;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    this.unsubscribeFocus = void 0;
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
    this.unsubscribeOnline = void 0;
  }
  isFetching(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    filters.fetchStatus = "fetching";
    return this.queryCache.findAll(filters).length;
  }
  isMutating(filters) {
    return this.mutationCache.findAll({
      ...filters,
      fetching: true
    }).length;
  }
  getQueryData(queryKey, filters) {
    var _this$queryCache$find;
    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  }
  ensureQueryData(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const cachedData = this.getQueryData(parsedOptions.queryKey);
    return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
  }
  getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey,
      state
    }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const query = this.queryCache.find(queryKey);
    const prevData = query == null ? void 0 : query.state.data;
    const data = functionalUpdate(updater, prevData);
    if (typeof data === "undefined") {
      return void 0;
    }
    const parsedOptions = parseQueryArgs(queryKey);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(data, {
      ...options,
      manual: true
    });
  }
  setQueriesData(queryKeyOrFilters, updater, options) {
    return notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey
    }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
  }
  getQueryState(queryKey, filters) {
    var _this$queryCache$find2;
    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  }
  removeQueries(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    const queryCache = this.queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const queryCache = this.queryCache;
    const refetchFilters = {
      type: "active",
      ...filters
    };
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  cancelQueries(arg1, arg2, arg3) {
    const [filters, cancelOptions = {}] = parseFilterArgs(arg1, arg2, arg3);
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.cancel(cancelOptions)));
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    return notifyManager.batch(() => {
      var _ref, _filters$refetchType;
      this.queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters.refetchType === "none") {
        return Promise.resolve();
      }
      const refetchFilters = {
        ...filters,
        type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : "active"
      };
      return this.refetchQueries(refetchFilters, options);
    });
  }
  refetchQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).filter((query) => !query.isDisabled()).map((query) => {
      var _options$cancelRefetc;
      return query.fetch(void 0, {
        ...options,
        cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
        meta: {
          refetchPage: filters.refetchPage
        }
      });
    }));
    let promise = Promise.all(promises).then(noop);
    if (!(options != null && options.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  fetchQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    const query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
  }
  fetchInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  }
  prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(options) {
    this.defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    const result = this.queryDefaults.find((x) => hashQueryKey(queryKey) === hashQueryKey(x.queryKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  }
  getQueryDefaults(queryKey) {
    if (!queryKey) {
      return void 0;
    }
    const firstMatchingDefaults = this.queryDefaults.find((x) => partialMatchKey(queryKey, x.queryKey));
    if (true) {
      const matchingDefaults = this.queryDefaults.filter((x) => partialMatchKey(queryKey, x.queryKey));
      if (matchingDefaults.length > 1) {
        this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(queryKey) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults.");
      }
    }
    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }
  setMutationDefaults(mutationKey, options) {
    const result = this.mutationDefaults.find((x) => hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  }
  getMutationDefaults(mutationKey) {
    if (!mutationKey) {
      return void 0;
    }
    const firstMatchingDefaults = this.mutationDefaults.find((x) => partialMatchKey(mutationKey, x.mutationKey));
    if (true) {
      const matchingDefaults = this.mutationDefaults.filter((x) => partialMatchKey(mutationKey, x.mutationKey));
      if (matchingDefaults.length > 1) {
        this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(mutationKey) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults.");
      }
    }
    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }
  defaultQueryOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(options == null ? void 0 : options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    if (typeof defaultedOptions.refetchOnReconnect === "undefined") {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (typeof defaultedOptions.useErrorBoundary === "undefined") {
      defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }
    return {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(options == null ? void 0 : options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }
};

// node_modules/@tanstack/query-core/build/lib/queryObserver.mjs
var QueryObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.client = client;
    this.options = options;
    this.trackedProps = /* @__PURE__ */ new Set();
    this.selectError = null;
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }
      this.updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.clearStaleTimeout();
    this.clearRefetchInterval();
    this.currentQuery.removeObserver(this);
  }
  setOptions(options, notifyOptions) {
    const prevOptions = this.options;
    const prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryOptions(options);
    if (typeof (options == null ? void 0 : options.isDataEqual) !== "undefined") {
      this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option");
    }
    if (!shallowEqualObjects(prevOptions, this.options)) {
      this.client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.currentQuery,
        observer: this
      });
    }
    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
      throw new Error("Expected enabled to be a boolean");
    }
    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }
    this.updateQuery();
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    }
    this.updateResult(notifyOptions);
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }
    const nextRefetchInterval = this.computeRefetchInterval();
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.client.getQueryCache().build(this.client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result, options)) {
      this.currentResult = result;
      this.currentResultOptions = this.options;
      this.currentResultState = this.currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(result) {
    const trackedResult = {};
    Object.keys(result).forEach((key) => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.trackedProps.add(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage,
    ...options
  } = {}) {
    return this.fetch({
      ...options,
      meta: {
        refetchPage
      }
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.client.defaultQueryOptions(options);
    const query = this.client.getQueryCache().build(this.client, defaultedOptions);
    query.isFetchingOptimistic = true;
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    var _fetchOptions$cancelR;
    return this.executeFetch({
      ...fetchOptions,
      cancelRefetch: (_fetchOptions$cancelR = fetchOptions.cancelRefetch) != null ? _fetchOptions$cancelR : true
    }).then(() => {
      this.updateResult();
      return this.currentResult;
    });
  }
  executeFetch(fetchOptions) {
    this.updateQuery();
    let promise = this.currentQuery.fetch(this.options, fetchOptions);
    if (!(fetchOptions != null && fetchOptions.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  updateStaleTimeout() {
    this.clearStaleTimeout();
    if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
      return;
    }
    const time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
    const timeout = time + 1;
    this.staleTimeoutId = setTimeout(() => {
      if (!this.currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  computeRefetchInterval() {
    var _this$options$refetch;
    return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  }
  updateRefetchInterval(nextInterval) {
    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;
    if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }
    this.refetchIntervalId = setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        this.executeFetch();
      }
    }, this.currentRefetchInterval);
  }
  updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    if (this.staleTimeoutId) {
      clearTimeout(this.staleTimeoutId);
      this.staleTimeoutId = void 0;
    }
  }
  clearRefetchInterval() {
    if (this.refetchIntervalId) {
      clearInterval(this.refetchIntervalId);
      this.refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.currentQuery;
    const prevOptions = this.options;
    const prevResult = this.currentResult;
    const prevResultState = this.currentResultState;
    const prevResultOptions = this.currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    const prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    const {
      state
    } = query;
    let {
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      fetchStatus,
      status
    } = state;
    let isPreviousData = false;
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        fetchStatus = canFetch(query.options.networkMode) ? "fetching" : "paused";
        if (!dataUpdatedAt) {
          status = "loading";
        }
      }
      if (options._optimisticResults === "isRestoring") {
        fetchStatus = "idle";
      }
    }
    if (options.keepPreviousData && !state.dataUpdatedAt && prevQueryResult != null && prevQueryResult.isSuccess && status !== "error") {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } else if (options.select && typeof state.data !== "undefined") {
      if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
        data = this.selectResult;
      } else {
        try {
          this.selectFn = options.select;
          data = options.select(state.data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          this.selectResult = data;
          this.selectError = null;
        } catch (selectError) {
          if (true) {
            this.client.getLogger().error(selectError);
          }
          this.selectError = selectError;
        }
      }
    } else {
      data = state.data;
    }
    if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && status === "loading") {
      let placeholderData;
      if (prevResult != null && prevResult.isPlaceholderData && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
        if (options.select && typeof placeholderData !== "undefined") {
          try {
            placeholderData = options.select(placeholderData);
            this.selectError = null;
          } catch (selectError) {
            if (true) {
              this.client.getLogger().error(selectError);
            }
            this.selectError = selectError;
          }
        }
      }
      if (typeof placeholderData !== "undefined") {
        status = "success";
        data = replaceData(prevResult == null ? void 0 : prevResult.data, placeholderData, options);
        isPlaceholderData = true;
      }
    }
    if (this.selectError) {
      error = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = fetchStatus === "fetching";
    const isLoading = status === "loading";
    const isError2 = status === "error";
    const result = {
      status,
      fetchStatus,
      isLoading,
      isSuccess: status === "success",
      isError: isError2,
      isInitialLoading: isLoading && isFetching,
      data,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      failureReason: state.fetchFailureReason,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isLoading,
      isLoadingError: isError2 && state.dataUpdatedAt === 0,
      isPaused: fetchStatus === "paused",
      isPlaceholderData,
      isPreviousData,
      isRefetchError: isError2 && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  }
  updateResult(notifyOptions) {
    const prevResult = this.currentResult;
    const nextResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options;
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    this.currentResult = nextResult;
    const defaultNotifyOptions = {
      cache: true
    };
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const {
        notifyOnChangeProps
      } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.trackedProps.size) {
        return true;
      }
      const includedProps = new Set(notifyOnChangePropsValue != null ? notifyOnChangePropsValue : this.trackedProps);
      if (this.options.useErrorBoundary) {
        includedProps.add("error");
      }
      return Object.keys(this.currentResult).some((key) => {
        const typedKey = key;
        const changed = this.currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && shouldNotifyListeners()) {
      defaultNotifyOptions.listeners = true;
    }
    this.notify({
      ...defaultNotifyOptions,
      ...notifyOptions
    });
  }
  updateQuery() {
    const query = this.client.getQueryCache().build(this.client, this.options);
    if (query === this.currentQuery) {
      return;
    }
    const prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;
    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate(action) {
    const notifyOptions = {};
    if (action.type === "success") {
      notifyOptions.onSuccess = !action.manual;
    } else if (action.type === "error" && !isCancelledError(action.error)) {
      notifyOptions.onError = true;
    }
    this.updateResult(notifyOptions);
    if (this.hasListeners()) {
      this.updateTimers();
    }
  }
  notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.onSuccess) {
        var _this$options$onSucce, _this$options, _this$options$onSettl, _this$options2;
        (_this$options$onSucce = (_this$options = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options, this.currentResult.data);
        (_this$options$onSettl = (_this$options2 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options2, this.currentResult.data, null);
      } else if (notifyOptions.onError) {
        var _this$options$onError, _this$options3, _this$options$onSettl2, _this$options4;
        (_this$options$onError = (_this$options3 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options3, this.currentResult.error);
        (_this$options$onSettl2 = (_this$options4 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options4, void 0, this.currentResult.error);
      }
      if (notifyOptions.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      }
      if (notifyOptions.cache) {
        this.client.getQueryCache().notify({
          query: this.currentQuery,
          type: "observerResultsUpdated"
        });
      }
    });
  }
};
function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult, options) {
  if (options.keepPreviousData) {
    return false;
  }
  if (options.placeholderData !== void 0) {
    return optimisticResult.isPlaceholderData;
  }
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

// node_modules/@tanstack/query-core/build/lib/infiniteQueryObserver.mjs
var InfiniteQueryObserver = class extends QueryObserver {
  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(client, options) {
    super(client, options);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(options, notifyOptions) {
    super.setOptions({
      ...options,
      behavior: infiniteQueryBehavior()
    }, notifyOptions);
  }
  getOptimisticResult(options) {
    options.behavior = infiniteQueryBehavior();
    return super.getOptimisticResult(options);
  }
  fetchNextPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: {
          direction: "forward",
          pageParam
        }
      }
    });
  }
  fetchPreviousPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: {
          direction: "backward",
          pageParam
        }
      }
    });
  }
  createResult(query, options) {
    var _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet, _state$data, _state$data2;
    const {
      state
    } = query;
    const result = super.createResult(query, options);
    const {
      isFetching,
      isRefetching
    } = result;
    const isFetchingNextPage = isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === "forward";
    const isFetchingPreviousPage = isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === "backward";
    return {
      ...result,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: hasNextPage(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: hasPreviousPage(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage,
      isFetchingPreviousPage,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
  }
};

// node_modules/@tanstack/query-core/build/lib/mutationObserver.mjs
var MutationObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.client = client;
    this.setOptions(options);
    this.bindMethods();
    this.updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _this$currentMutation;
    const prevOptions = this.options;
    this.options = this.client.defaultMutationOptions(options);
    if (!shallowEqualObjects(prevOptions, this.options)) {
      this.client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.currentMutation,
        observer: this
      });
    }
    (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$currentMutation2;
      (_this$currentMutation2 = this.currentMutation) == null ? void 0 : _this$currentMutation2.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.updateResult();
    const notifyOptions = {
      listeners: true
    };
    if (action.type === "success") {
      notifyOptions.onSuccess = true;
    } else if (action.type === "error") {
      notifyOptions.onError = true;
    }
    this.notify(notifyOptions);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    this.currentMutation = void 0;
    this.updateResult();
    this.notify({
      listeners: true
    });
  }
  mutate(variables, options) {
    this.mutateOptions = options;
    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }
    this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: typeof variables !== "undefined" ? variables : this.options.variables
    });
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  }
  updateResult() {
    const state = this.currentMutation ? this.currentMutation.state : getDefaultState2();
    const result = {
      ...state,
      isLoading: state.status === "loading",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = result;
  }
  notify(options) {
    notifyManager.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (options.onSuccess) {
          var _this$mutateOptions$o, _this$mutateOptions, _this$mutateOptions$o2, _this$mutateOptions2;
          (_this$mutateOptions$o = (_this$mutateOptions = this.mutateOptions).onSuccess) == null ? void 0 : _this$mutateOptions$o.call(_this$mutateOptions, this.currentResult.data, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o2 = (_this$mutateOptions2 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o2.call(_this$mutateOptions2, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (options.onError) {
          var _this$mutateOptions$o3, _this$mutateOptions3, _this$mutateOptions$o4, _this$mutateOptions4;
          (_this$mutateOptions$o3 = (_this$mutateOptions3 = this.mutateOptions).onError) == null ? void 0 : _this$mutateOptions$o3.call(_this$mutateOptions3, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o4 = (_this$mutateOptions4 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o4.call(_this$mutateOptions4, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      }
      if (options.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      }
    });
  }
};

// node_modules/@tanstack/react-query/build/lib/reactBatchedUpdates.mjs
var ReactDOM = __toESM(require_react_dom(), 1);
var unstable_batchedUpdates2 = ReactDOM.unstable_batchedUpdates;

// node_modules/@tanstack/react-query/build/lib/setBatchUpdatesFn.mjs
notifyManager.setBatchNotifyFunction(unstable_batchedUpdates2);

// node_modules/@tanstack/react-query/build/lib/useQueries.mjs
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs
var import_shim = __toESM(require_shim(), 1);
var useSyncExternalStore = import_shim.useSyncExternalStore;

// node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var React = __toESM(require_react(), 1);
var defaultContext = React.createContext(void 0);
var QueryClientSharingContext = React.createContext(false);
function getQueryClientContext(context, contextSharing) {
  if (context) {
    return context;
  }
  if (contextSharing && typeof window !== "undefined") {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }
    return window.ReactQueryClientContext;
  }
  return defaultContext;
}
var useQueryClient = ({
  context
} = {}) => {
  const queryClient = React.useContext(getQueryClientContext(context, React.useContext(QueryClientSharingContext)));
  if (!queryClient) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return queryClient;
};
var QueryClientProvider = ({
  client,
  children,
  context,
  contextSharing = false
}) => {
  React.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  if (contextSharing) {
    client.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  }
  const Context = getQueryClientContext(context, contextSharing);
  return React.createElement(QueryClientSharingContext.Provider, {
    value: !context && contextSharing
  }, React.createElement(Context.Provider, {
    value: client
  }, children));
};

// node_modules/@tanstack/react-query/build/lib/isRestoring.mjs
var React2 = __toESM(require_react(), 1);
var IsRestoringContext = React2.createContext(false);
var useIsRestoring = () => React2.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

// node_modules/@tanstack/react-query/build/lib/QueryErrorResetBoundary.mjs
var React3 = __toESM(require_react(), 1);
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = React3.createContext(createValue());
var useQueryErrorResetBoundary = () => React3.useContext(QueryErrorResetBoundaryContext);

// node_modules/@tanstack/react-query/build/lib/errorBoundaryUtils.mjs
var React4 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/utils.mjs
function shouldThrowError(_useErrorBoundary, params) {
  if (typeof _useErrorBoundary === "function") {
    return _useErrorBoundary(...params);
  }
  return !!_useErrorBoundary;
}

// node_modules/@tanstack/react-query/build/lib/errorBoundaryUtils.mjs
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.useErrorBoundary) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  React4.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  useErrorBoundary,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(useErrorBoundary, [result.error, query]);
};

// node_modules/@tanstack/react-query/build/lib/suspense.mjs
var ensureStaleTime = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result, isRestoring) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && willFetch(result, isRestoring);
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).then(({
  data
}) => {
  defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
}).catch((error) => {
  errorResetBoundary.clearReset();
  defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(void 0, error);
});

// node_modules/@tanstack/react-query/build/lib/useBaseQuery.mjs
var React6 = __toESM(require_react(), 1);
function useBaseQuery(options, Observer) {
  const queryClient = useQueryClient({
    context: options.context
  });
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedOptions = queryClient.defaultQueryOptions(options);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
  }
  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
  }
  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
  }
  ensureStaleTime(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
  useClearResetErrorBoundary(errorResetBoundary);
  const [observer] = React6.useState(() => new Observer(queryClient, defaultedOptions));
  const result = observer.getOptimisticResult(defaultedOptions);
  useSyncExternalStore(React6.useCallback((onStoreChange) => {
    const unsubscribe = isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange));
    observer.updateResult();
    return unsubscribe;
  }, [observer, isRestoring]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  React6.useEffect(() => {
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result, isRestoring)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    useErrorBoundary: defaultedOptions.useErrorBoundary,
    query: observer.getCurrentQuery()
  })) {
    throw result.error;
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

// node_modules/@tanstack/react-query/build/lib/useQuery.mjs
function useQuery(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  return useBaseQuery(parsedOptions, QueryObserver);
}

// node_modules/@tanstack/react-query/build/lib/Hydrate.mjs
var React7 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useIsFetching.mjs
var React8 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useIsMutating.mjs
var React9 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useMutation.mjs
var React10 = __toESM(require_react(), 1);
function useMutation(arg1, arg2, arg3) {
  const options = parseMutationArgs(arg1, arg2, arg3);
  const queryClient = useQueryClient({
    context: options.context
  });
  const [observer] = React10.useState(() => new MutationObserver(queryClient, options));
  React10.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = useSyncExternalStore(React10.useCallback((onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  const mutate = React10.useCallback((variables, mutateOptions) => {
    observer.mutate(variables, mutateOptions).catch(noop2);
  }, [observer]);
  if (result.error && shouldThrowError(observer.options.useErrorBoundary, [result.error])) {
    throw result.error;
  }
  return {
    ...result,
    mutate,
    mutateAsync: result.mutate
  };
}
function noop2() {
}

// node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs
function useInfiniteQuery(arg1, arg2, arg3) {
  const options = parseQueryArgs(arg1, arg2, arg3);
  return useBaseQuery(options, InfiniteQueryObserver);
}

// node_modules/@refinedev/core/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto2 = Object.prototype;
var hasOwnProperty2 = objectProto2.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty2.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto3 = Object.prototype;
var hasOwnProperty3 = objectProto3.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty3.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// node_modules/lodash-es/_SetCache.js
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// node_modules/lodash-es/_baseDifference.js
var LARGE_ARRAY_SIZE = 200;
function baseDifference(array, values, iteratee, comparator) {
  var index = -1, includes = arrayIncludes_default, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap_default(values, baseUnary_default(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith_default;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas_default;
    isCommon = false;
    values = new SetCache_default(values);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var baseDifference_default = baseDifference;

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto4 = Object.prototype;
var hasOwnProperty4 = objectProto4.hasOwnProperty;
var propertyIsEnumerable = objectProto4.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var baseFlatten_default = baseFlatten;

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// node_modules/lodash-es/differenceWith.js
var differenceWith = baseRest_default(function(array, values) {
  var comparator = last_default(values);
  if (isArrayLikeObject_default(comparator)) {
    comparator = void 0;
  }
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values, 1, isArrayLikeObject_default, true), void 0, comparator) : [];
});
var differenceWith_default = differenceWith;

// node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// node_modules/lodash-es/noop.js
function noop3() {
}
var noop_default = noop3;

// node_modules/lodash-es/_setToArray.js
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// node_modules/lodash-es/_createSet.js
var INFINITY = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY) ? noop_default : function(values) {
  return new Set_default(values);
};
var createSet_default = createSet;

// node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE2 = 200;
function baseUniq(array, iteratee, comparator) {
  var index = -1, includes = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith_default;
  } else if (length >= LARGE_ARRAY_SIZE2) {
    var set = iteratee ? null : createSet_default(array);
    if (set) {
      return setToArray_default(set);
    }
    isCommon = false;
    includes = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseUniq_default = baseUniq;

// node_modules/lodash-es/unionWith.js
var unionWith = baseRest_default(function(arrays) {
  var comparator = last_default(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true), void 0, comparator);
});
var unionWith_default = unionWith;

// node_modules/@refinedev/core/dist/index.mjs
var import_qs = __toESM(require_lib(), 1);
var import_warn_once = __toESM(require_warn_once(), 1);

// node_modules/lodash-es/fromPairs.js
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
var fromPairs_default = fromPairs;

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/unzip.js
var nativeMax2 = Math.max;
function unzip(array) {
  if (!(array && array.length)) {
    return [];
  }
  var length = 0;
  array = arrayFilter_default(array, function(group) {
    if (isArrayLikeObject_default(group)) {
      length = nativeMax2(group.length, length);
      return true;
    }
  });
  return baseTimes_default(length, function(index) {
    return arrayMap_default(array, baseProperty_default(index));
  });
}
var unzip_default = unzip;

// node_modules/lodash-es/zip.js
var zip = baseRest_default(unzip_default);
var zip_default = zip;

// node_modules/@refinedev/core/dist/index.mjs
var import_pluralize = __toESM(require_pluralize(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_pluralize2 = __toESM(require_pluralize(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_qs2 = __toESM(require_lib(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_qs3 = __toESM(require_lib(), 1);
var import_react15 = __toESM(require_react(), 1);
var import_react16 = __toESM(require_react(), 1);
var import_react17 = __toESM(require_react(), 1);
var import_react18 = __toESM(require_react(), 1);
var import_react19 = __toESM(require_react(), 1);
var import_react20 = __toESM(require_react(), 1);
var import_react21 = __toESM(require_react(), 1);
var import_react22 = __toESM(require_react(), 1);
var import_react23 = __toESM(require_react(), 1);
var import_react24 = __toESM(require_react(), 1);

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE3 = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE3 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var equalArrays_default = equalArrays;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// node_modules/lodash-es/_mapToArray.js
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default = mapToArray;

// node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq_default(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray_default;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto5 = Object.prototype;
var propertyIsEnumerable2 = objectProto5.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER2 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var errorTag2 = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag2 = "[object Map]";
var numberTag2 = "[object Number]";
var objectTag = "[object Object]";
var regexpTag2 = "[object RegExp]";
var setTag2 = "[object Set]";
var stringTag2 = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag2 = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag2] = typedArrayTags[boolTag2] = typedArrayTags[dataViewTag2] = typedArrayTags[dateTag2] = typedArrayTags[errorTag2] = typedArrayTags[funcTag2] = typedArrayTags[mapTag2] = typedArrayTags[numberTag2] = typedArrayTags[objectTag] = typedArrayTags[regexpTag2] = typedArrayTags[setTag2] = typedArrayTags[stringTag2] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_isPrototype.js
var objectProto7 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto7;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty6.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty7.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var equalObjects_default = equalObjects;

// node_modules/lodash-es/_DataView.js
var DataView2 = getNative_default(root_default, "DataView");
var DataView_default = DataView2;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_WeakMap.js
var WeakMap2 = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap2;

// node_modules/lodash-es/_getTag.js
var mapTag3 = "[object Map]";
var objectTag2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag3 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag3 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag3 || Map_default && getTag(new Map_default()) != mapTag3 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag3 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag3;
        case mapCtorString:
          return mapTag3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag3;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var objectTag3 = "[object Object]";
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
  objTag = objTag == argsTag3 ? objectTag3 : objTag;
  othTag = othTag == argsTag3 ? objectTag3 : othTag;
  var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty8.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty8.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
  return baseIsEqual_default(value, other);
}
var isEqual_default = isEqual;

// node_modules/@refinedev/core/dist/index.mjs
var import_react25 = __toESM(require_react(), 1);
var import_react26 = __toESM(require_react(), 1);
var import_react27 = __toESM(require_react(), 1);
var import_react28 = __toESM(require_react(), 1);
var import_react29 = __toESM(require_react(), 1);
var import_react30 = __toESM(require_react(), 1);
var import_react31 = __toESM(require_react(), 1);
var import_react32 = __toESM(require_react(), 1);
var import_react33 = __toESM(require_react(), 1);
var import_react34 = __toESM(require_react(), 1);
var import_react35 = __toESM(require_react(), 1);
var import_react36 = __toESM(require_react(), 1);
var import_react37 = __toESM(require_react(), 1);
var import_react38 = __toESM(require_react(), 1);
var import_react39 = __toESM(require_react(), 1);
var import_react40 = __toESM(require_react(), 1);
var import_react41 = __toESM(require_react(), 1);
var import_react42 = __toESM(require_react(), 1);
var import_papaparse = __toESM(require_papaparse_min(), 1);
var import_warn_once2 = __toESM(require_warn_once(), 1);
var import_react43 = __toESM(require_react(), 1);
var import_warn_once3 = __toESM(require_warn_once(), 1);
var import_react44 = __toESM(require_react(), 1);
var import_react45 = __toESM(require_react(), 1);
var import_react46 = __toESM(require_react(), 1);
var import_react47 = __toESM(require_react(), 1);
var import_warn_once4 = __toESM(require_warn_once(), 1);
var import_react48 = __toESM(require_react(), 1);

// node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/lodash-es/toFinite.js
var INFINITY2 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY2 || value === -INFINITY2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// node_modules/lodash-es/chunk.js
var nativeCeil = Math.ceil;
var nativeMax3 = Math.max;
function chunk(array, size, guard) {
  if (guard ? isIterateeCall_default(array, size, guard) : size === void 0) {
    size = 1;
  } else {
    size = nativeMax3(toInteger_default(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0, resIndex = 0, result = Array(nativeCeil(length / size));
  while (index < length) {
    result[resIndex++] = baseSlice_default(array, index, index += size);
  }
  return result;
}
var chunk_default = chunk;

// node_modules/@refinedev/core/dist/index.mjs
var import_papaparse2 = __toESM(require_papaparse_min(), 1);
var import_react49 = __toESM(require_react(), 1);
var import_react50 = __toESM(require_react(), 1);
var import_react51 = __toESM(require_react(), 1);
var import_react52 = __toESM(require_react(), 1);
var import_react53 = __toESM(require_react(), 1);
var import_react54 = __toESM(require_react(), 1);
var import_react55 = __toESM(require_react(), 1);
var import_react56 = __toESM(require_react(), 1);

// node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/_baseToString.js
var INFINITY3 = 1 / 0;
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto2 ? symbolProto2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/_toKey.js
var INFINITY4 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY4 ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default = getMatchData;

// node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default = baseIteratee;

// node_modules/lodash-es/uniqBy.js
function uniqBy(array, iteratee) {
  return array && array.length ? baseUniq_default(array, baseIteratee_default(iteratee, 2)) : [];
}
var uniqBy_default = uniqBy;

// node_modules/@refinedev/core/dist/index.mjs
var import_react57 = __toESM(require_react(), 1);
var import_qs4 = __toESM(require_lib(), 1);
var import_warn_once5 = __toESM(require_warn_once(), 1);
var import_react58 = __toESM(require_react(), 1);
var import_react59 = __toESM(require_react(), 1);
var import_react60 = __toESM(require_react(), 1);
var import_react61 = __toESM(require_react(), 1);
var import_warn_once6 = __toESM(require_warn_once(), 1);
var import_react62 = __toESM(require_react(), 1);
var import_react63 = __toESM(require_react(), 1);
var import_react64 = __toESM(require_react(), 1);
var import_react65 = __toESM(require_react(), 1);
var import_react66 = __toESM(require_react(), 1);
var import_react67 = __toESM(require_react(), 1);
var import_react68 = __toESM(require_react(), 1);
var import_react69 = __toESM(require_react(), 1);
var import_react70 = __toESM(require_react(), 1);
var import_react71 = __toESM(require_react(), 1);
var import_react72 = __toESM(require_react(), 1);
var import_react73 = __toESM(require_react(), 1);
var import_react74 = __toESM(require_react(), 1);
var import_react75 = __toESM(require_react(), 1);
var import_react76 = __toESM(require_react(), 1);
var import_react77 = __toESM(require_react(), 1);
var import_react78 = __toESM(require_react(), 1);
var import_react79 = __toESM(require_react(), 1);
var import_react80 = __toESM(require_react(), 1);
var import_react81 = __toESM(require_react(), 1);
var import_react82 = __toESM(require_react(), 1);
var import_react83 = __toESM(require_react(), 1);
var import_react84 = __toESM(require_react(), 1);
var import_react85 = __toESM(require_react(), 1);
var import_react86 = __toESM(require_react(), 1);
var import_react87 = __toESM(require_react(), 1);
var Gs = Object.defineProperty;
var o = (e, t) => Gs(e, "name", { value: t, configurable: true });
var Mo = import_react3.default.createContext({});
var wo = o(({ children: e, isProvided: t, ...r }) => {
  let { replace: n } = ce(), s = o(async (d3) => {
    var u;
    try {
      return await ((u = r.login) == null ? void 0 : u.call(r, d3));
    } catch (p2) {
      return Promise.reject(p2);
    }
  }, "loginFunc"), a = o(async (d3) => {
    var u;
    try {
      return await ((u = r.register) == null ? void 0 : u.call(r, d3));
    } catch (p2) {
      return Promise.reject(p2);
    }
  }, "registerFunc"), i2 = o(async (d3) => {
    var u;
    try {
      return await ((u = r.logout) == null ? void 0 : u.call(r, d3));
    } catch (p2) {
      return Promise.reject(p2);
    }
  }, "logoutFunc"), c = o(async (d3) => {
    var u;
    try {
      return await ((u = r.checkAuth) == null ? void 0 : u.call(r, d3)), Promise.resolve();
    } catch (p2) {
      return p2 != null && p2.redirectPath && n(p2.redirectPath), Promise.reject(p2);
    }
  }, "checkAuthFunc");
  return import_react3.default.createElement(Mo.Provider, { value: { ...r, login: s, logout: i2, checkAuth: c, register: a, isProvided: t } }, e);
}, "LegacyAuthContextProvider");
var Io = import_react3.default.createContext({});
var So = o(({ children: e, isProvided: t, ...r }) => {
  let n = o(async (u) => {
    var p2;
    try {
      return await ((p2 = r.login) == null ? void 0 : p2.call(r, u));
    } catch (l2) {
      return console.warn("Unhandled Error in login: refine always expects a resolved promise.", l2), Promise.reject(l2);
    }
  }, "handleLogin"), s = o(async (u) => {
    var p2;
    try {
      return await ((p2 = r.register) == null ? void 0 : p2.call(r, u));
    } catch (l2) {
      return console.warn("Unhandled Error in register: refine always expects a resolved promise.", l2), Promise.reject(l2);
    }
  }, "handleRegister"), a = o(async (u) => {
    var p2;
    try {
      return await ((p2 = r.logout) == null ? void 0 : p2.call(r, u));
    } catch (l2) {
      return console.warn("Unhandled Error in logout: refine always expects a resolved promise.", l2), Promise.reject(l2);
    }
  }, "handleLogout"), i2 = o(async (u) => {
    var p2;
    try {
      let l2 = await ((p2 = r.check) == null ? void 0 : p2.call(r, u));
      return Promise.resolve(l2);
    } catch (l2) {
      return console.warn("Unhandled Error in check: refine always expects a resolved promise.", l2), Promise.reject(l2);
    }
  }, "handleCheck"), c = o(async (u) => {
    var p2;
    try {
      let l2 = await ((p2 = r.forgotPassword) == null ? void 0 : p2.call(r, u));
      return Promise.resolve(l2);
    } catch (l2) {
      return console.warn("Unhandled Error in forgotPassword: refine always expects a resolved promise.", l2), Promise.reject(l2);
    }
  }, "handleForgotPassword"), d3 = o(async (u) => {
    var p2;
    try {
      let l2 = await ((p2 = r.updatePassword) == null ? void 0 : p2.call(r, u));
      return Promise.resolve(l2);
    } catch (l2) {
      return console.warn("Unhandled Error in updatePassword: refine always expects a resolved promise.", l2), Promise.reject(l2);
    }
  }, "handleUpdatePassword");
  return import_react3.default.createElement(Io.Provider, { value: { ...r, login: n, logout: a, check: i2, register: s, forgotPassword: c, updatePassword: d3, isProvided: t } }, e);
}, "AuthBindingsContextProvider");
var ue = o(() => import_react3.default.useContext(Mo), "useLegacyAuthContext");
var fe = o(() => import_react3.default.useContext(Io), "useAuthBindingsContext");
var wt = o((e) => e / 1e3, "userFriendlySecond");
var $t = o((e, t = (r) => r) => {
  let [r, ...n] = e;
  return n.map((s) => fromPairs_default(zip_default(r, s))).map((s, a, i2) => t.call(void 0, s, a, i2));
}, "importCSVMapper");
var Wt = o((e = "", t) => {
  let r = It(e);
  return t === "singular" ? import_pluralize.default.singular(r) : import_pluralize.default.plural(r);
}, "userFriendlyResourceName");
var Ao = o((e = {}) => e != null && e.id ? { ...e, id: decodeURIComponent(e.id) } : e, "handleUseParams");
function Ye(e, t) {
  return e.findIndex((r, n) => n <= e.length - t.length && t.every((s, a) => e[n + a] === s));
}
o(Ye, "arrayFindIndex");
function Ws(e) {
  if (e[0] === "data") {
    let t = e.slice(1);
    if (t[2] === "many")
      t[2] = "getMany";
    else if (t[2] === "infinite")
      t[2] = "list";
    else if (t[2] === "one")
      t[2] = "detail";
    else if (t[1] === "custom") {
      let r = { ...t[2] };
      return delete r.method, delete r.url, [t[0], t[1], t[2].method, t[2].url, r];
    }
    return t;
  }
  if (e[0] === "audit" && e[2] === "list")
    return ["logList", e[1], e[3]];
  if (e[0] === "access" && e.length === 4)
    return ["useCan", { resource: e[1], action: e[2], ...e[3] }];
  if (e[0] === "auth") {
    if (Ye(e, ["auth", "login"]) !== -1)
      return ["useLogin"];
    if (Ye(e, ["auth", "logout"]) !== -1)
      return ["useLogout"];
    if (Ye(e, ["auth", "identity"]) !== -1)
      return ["getUserIdentity"];
    if (Ye(e, ["auth", "register"]) !== -1)
      return ["useRegister"];
    if (Ye(e, ["auth", "forgotPassword"]) !== -1)
      return ["useForgotPassword"];
    if (Ye(e, ["auth", "check"]) !== -1)
      return ["useAuthenticated", e[2]];
    if (Ye(e, ["auth", "onError"]) !== -1)
      return ["useCheckError"];
    if (Ye(e, ["auth", "permissions"]) !== -1)
      return ["usePermissions"];
    if (Ye(e, ["auth", "updatePassword"]) !== -1)
      return ["useUpdatePassword"];
  }
  return e;
}
o(Ws, "convertToLegacy");
var Ue = class {
  constructor(t = []) {
    this.segments = [];
    this.segments = t;
  }
  key() {
    return this.segments;
  }
  legacy() {
    return Ws(this.segments);
  }
  get(t) {
    return t ? this.legacy() : this.segments;
  }
};
o(Ue, "BaseKeyBuilder");
var We = class extends Ue {
  params(t) {
    return new Ue([...this.segments, t]);
  }
};
o(We, "ParamsKeyBuilder");
var Ot = class extends Ue {
  id(t) {
    return new We([...this.segments, t ? String(t) : void 0]);
  }
};
o(Ot, "DataIdRequiringKeyBuilder");
var zt = class extends Ue {
  ids(...t) {
    return new We([...this.segments, ...t.length ? [t.map((r) => String(r))] : []]);
  }
};
o(zt, "DataIdsRequiringKeyBuilder");
var _t = class extends Ue {
  action(t) {
    if (t === "one")
      return new Ot([...this.segments, t]);
    if (t === "many")
      return new zt([...this.segments, t]);
    if (["list", "infinite"].includes(t))
      return new We([...this.segments, t]);
    throw new Error("Invalid action type");
  }
};
o(_t, "DataResourceKeyBuilder");
var jt = class extends Ue {
  resource(t) {
    return new _t([...this.segments, t]);
  }
  mutation(t) {
    return new We([...t === "custom" ? this.segments : [this.segments[0]], t]);
  }
};
o(jt, "DataKeyBuilder");
var Xt = class extends Ue {
  action(t) {
    return new We([...this.segments, t]);
  }
};
o(Xt, "AuthKeyBuilder");
var Zt = class extends Ue {
  action(t) {
    return new We([...this.segments, t]);
  }
};
o(Zt, "AccessResourceKeyBuilder");
var Yt = class extends Ue {
  resource(t) {
    return new Zt([...this.segments, t]);
  }
};
o(Yt, "AccessKeyBuilder");
var Jt = class extends Ue {
  action(t) {
    return new We([...this.segments, t]);
  }
};
o(Jt, "AuditActionKeyBuilder");
var qt = class extends Ue {
  resource(t) {
    return new Jt([...this.segments, t]);
  }
  action(t) {
    return new We([...this.segments, t]);
  }
};
o(qt, "AuditKeyBuilder");
var Pt = class extends Ue {
  data(t) {
    return new jt(["data", t || "default"]);
  }
  auth() {
    return new Xt(["auth"]);
  }
  access() {
    return new Yt(["access"]);
  }
  audit() {
    return new qt(["audit"]);
  }
};
o(Pt, "KeyBuilder");
var Oe = o(() => new Pt([]), "keys");
var S = o((...e) => e.find((t) => typeof t < "u"), "pickNotDeprecated");
var ko = o((e, t, r, n) => {
  let s = t || "default", a = { all: [s], resourceAll: [s, e || ""], list: (i2) => [...a.resourceAll, "list", { ...i2, ...S(r, n) || {} }], many: (i2) => [...a.resourceAll, "getMany", i2 == null ? void 0 : i2.map(String), { ...S(r, n) || {} }].filter((c) => c !== void 0), detail: (i2) => [...a.resourceAll, "detail", i2 == null ? void 0 : i2.toString(), { ...S(r, n) || {} }], logList: (i2) => ["logList", e, i2, n].filter((c) => c !== void 0) };
  return a;
}, "queryKeys");
var Je = o((e) => (t, r, n, s) => {
  let a = r || "default";
  return { all: Oe().data(a).get(e), resourceAll: Oe().data(r).resource(t ?? "").get(e), list: (c) => Oe().data(r).resource(t ?? "").action("list").params({ ...c, ...S(n, s) || {} }).get(e), many: (c) => Oe().data(r).resource(t ?? "").action("many").ids(...c ?? []).params({ ...S(n, s) || {} }).get(e), detail: (c) => Oe().data(r).resource(t ?? "").action("one").id(c ?? "").params({ ...S(n, s) || {} }).get(e), logList: (c) => [...Oe().audit().resource(t).action("list").params(c).get(e), s].filter((d3) => d3 !== void 0) };
}, "queryKeysReplacement");
var Fr = o((e, t) => !e || !t ? false : !!e.find((r) => r === t), "hasPermission");
var xt = o((e) => e.startsWith(":"), "isParameter");
var _e = o((e) => e.split("/").filter((r) => r !== ""), "splitToSegments");
var Qo = o((e, t) => {
  let r = _e(e), n = _e(t);
  return r.length === n.length;
}, "isSegmentCountsSame");
var be = o((e) => e.replace(/^\/|\/$/g, ""), "removeLeadingTrailingSlashes");
var Vo = o((e, t) => {
  let r = be(e), n = be(t);
  if (!Qo(r, n))
    return false;
  let s = _e(r);
  return _e(n).every((i2, c) => xt(i2) || i2 === s[c]);
}, "checkBySegments");
var Bo = o((e, t, r) => {
  let n = be(r || ""), s = `${n}${n ? "/" : ""}${e}`;
  return t === "list" ? s = `${s}` : t === "create" ? s = `${s}/create` : t === "edit" ? s = `${s}/edit/:id` : t === "show" ? s = `${s}/show/:id` : t === "clone" && (s = `${s}/clone/:id`), `/${s.replace(/^\//, "")}`;
}, "getDefaultActionPath");
var Fe = o((e, t) => {
  var s, a;
  let r = S((s = e.meta) == null ? void 0 : s.parent, (a = e.options) == null ? void 0 : a.parent, e.parentName);
  return r ? t.find((i2) => (i2.identifier ?? i2.name) === r) ?? { name: r } : void 0;
}, "getParentResource");
var St = o((e, t, r) => {
  let n = [], s = Fe(e, t);
  for (; s; )
    n.push(s), s = Fe(s, t);
  if (n.length !== 0)
    return `/${n.reverse().map((a) => {
      var c;
      let i2 = r ? ((c = a.options) == null ? void 0 : c.route) ?? a.name : a.name;
      return be(i2);
    }).join("/")}`;
}, "getParentPrefixForResource");
var he = o((e, t, r) => {
  let n = [], s = ["list", "show", "edit", "create", "clone"], a = St(e, t, r);
  return s.forEach((i2) => {
    var u, p2;
    let c = r && i2 === "clone" ? e.create : e[i2], d3;
    typeof c == "function" || r ? d3 = Bo(r ? ((u = e.meta) == null ? void 0 : u.route) ?? ((p2 = e.options) == null ? void 0 : p2.route) ?? e.name : e.name, i2, r ? a : void 0) : typeof c == "string" ? d3 = c : typeof c == "object" && (d3 = c.path), d3 && n.push({ action: i2, resource: e, route: `/${d3.replace(/^\//, "")}` });
  }), n;
}, "getActionRoutesFromResource");
var No = o((e) => {
  var s;
  if (e.length === 0)
    return;
  if (e.length === 1)
    return e[0];
  let t = e.map((a) => ({ ...a, splitted: _e(be(a.route)) })), r = ((s = t[0]) == null ? void 0 : s.splitted.length) ?? 0, n = [...t];
  for (let a = 0; a < r; a++) {
    let i2 = n.filter((c) => !xt(c.splitted[a]));
    if (i2.length !== 0) {
      if (i2.length === 1) {
        n = i2;
        break;
      }
      n = i2;
    }
  }
  return n[0];
}, "pickMatchedRoute");
var Ko = o((e, t) => {
  let n = t.flatMap((a) => he(a, t)).filter((a) => Vo(e, a.route)), s = No(n);
  return { found: !!s, resource: s == null ? void 0 : s.resource, action: s == null ? void 0 : s.action, matchedRoute: s == null ? void 0 : s.route };
}, "matchResourceFromRoute");
var er = o((e, t) => {
  var s;
  let r, n = St(e, t, true);
  if (n) {
    let a = S(e.meta, e.options);
    r = `${n}/${(a == null ? void 0 : a.route) ?? e.name}`;
  } else
    r = ((s = e.options) == null ? void 0 : s.route) ?? e.name;
  return `/${r.replace(/^\//, "")}`;
}, "routeGenerator");
var Go = o((e) => {
  var i2;
  let t = [], r = {}, n = {}, s, a;
  for (let c = 0; c < e.length; c++) {
    s = e[c];
    let d3 = s.route ?? ((i2 = S(s == null ? void 0 : s.meta, s.options)) == null ? void 0 : i2.route) ?? "";
    r[d3] = s, r[d3].children = [], n[s.name] = s, n[s.name].children = [];
  }
  for (let c in r)
    Object.hasOwn(r, c) && (a = r[c], a.parentName && n[a.parentName] ? n[a.parentName].children.push(a) : t.push(a));
  return t;
}, "createTreeView");
var It = o((e) => (e = e.replace(/([a-z]{1})([A-Z]{1})/g, "$1-$2"), e = e.replace(/([A-Z]{1})([A-Z]{1})([a-z]{1})/g, "$1-$2$3"), e = e.toLowerCase().replace(/[_-]+/g, " ").replace(/\s{2,}/g, " ").trim(), e = e.charAt(0).toUpperCase() + e.slice(1), e), "humanizeString");
var Ar = o(({ children: e }) => import_react5.default.createElement("div", null, e), "DefaultLayout");
var Ee = { mutationMode: "pessimistic", syncWithLocation: false, undoableTimeout: 5e3, warnWhenUnsavedChanges: false, liveMode: "off", redirect: { afterCreate: "list", afterClone: "list", afterEdit: "list" }, overtime: { interval: 1e3 }, textTransformers: { humanize: It, plural: import_pluralize2.default.plural, singular: import_pluralize2.default.singular }, disableServerSideValidation: false };
var ve = import_react4.default.createContext({ hasDashboard: false, mutationMode: "pessimistic", warnWhenUnsavedChanges: false, syncWithLocation: false, undoableTimeout: 5e3, Title: void 0, Sider: void 0, Header: void 0, Footer: void 0, Layout: Ar, OffLayoutArea: void 0, liveMode: "off", onLiveEvent: void 0, options: Ee });
var Wo = o(({ hasDashboard: e, mutationMode: t, warnWhenUnsavedChanges: r, syncWithLocation: n, undoableTimeout: s, children: a, DashboardPage: i2, Title: c, Layout: d3 = Ar, Header: u, Sider: p2, Footer: l2, OffLayoutArea: y3, LoginPage: m2 = kr, catchAll: T3, liveMode: L = "off", onLiveEvent: v3, options: g }) => import_react4.default.createElement(ve.Provider, { value: { __initialized: true, hasDashboard: e, mutationMode: t, warnWhenUnsavedChanges: r, syncWithLocation: n, Title: c, undoableTimeout: s, Layout: d3, Header: u, Sider: p2, Footer: l2, OffLayoutArea: y3, DashboardPage: i2, LoginPage: m2, catchAll: T3, liveMode: L, onLiveEvent: v3, options: g } }, a), "RefineContextProvider");
var Qr = o(({ options: e, disableTelemetry: t, liveMode: r, mutationMode: n, reactQueryClientConfig: s, reactQueryDevtoolConfig: a, syncWithLocation: i2, undoableTimeout: c, warnWhenUnsavedChanges: d3 } = {}) => {
  var y3, m2, T3, L, v3, g, R2, M;
  let u = { breadcrumb: e == null ? void 0 : e.breadcrumb, mutationMode: (e == null ? void 0 : e.mutationMode) ?? n ?? Ee.mutationMode, undoableTimeout: (e == null ? void 0 : e.undoableTimeout) ?? c ?? Ee.undoableTimeout, syncWithLocation: (e == null ? void 0 : e.syncWithLocation) ?? i2 ?? Ee.syncWithLocation, warnWhenUnsavedChanges: (e == null ? void 0 : e.warnWhenUnsavedChanges) ?? d3 ?? Ee.warnWhenUnsavedChanges, liveMode: (e == null ? void 0 : e.liveMode) ?? r ?? Ee.liveMode, redirect: { afterCreate: ((y3 = e == null ? void 0 : e.redirect) == null ? void 0 : y3.afterCreate) ?? Ee.redirect.afterCreate, afterClone: ((m2 = e == null ? void 0 : e.redirect) == null ? void 0 : m2.afterClone) ?? Ee.redirect.afterClone, afterEdit: ((T3 = e == null ? void 0 : e.redirect) == null ? void 0 : T3.afterEdit) ?? Ee.redirect.afterEdit }, overtime: (e == null ? void 0 : e.overtime) ?? Ee.overtime, textTransformers: { humanize: ((L = e == null ? void 0 : e.textTransformers) == null ? void 0 : L.humanize) ?? Ee.textTransformers.humanize, plural: ((v3 = e == null ? void 0 : e.textTransformers) == null ? void 0 : v3.plural) ?? Ee.textTransformers.plural, singular: ((g = e == null ? void 0 : e.textTransformers) == null ? void 0 : g.singular) ?? Ee.textTransformers.singular }, disableServerSideValidation: (e == null ? void 0 : e.disableServerSideValidation) ?? Ee.disableServerSideValidation, projectId: e == null ? void 0 : e.projectId, useNewQueryKeys: e == null ? void 0 : e.useNewQueryKeys }, p2 = (e == null ? void 0 : e.disableTelemetry) ?? t ?? false, l2 = { clientConfig: ((R2 = e == null ? void 0 : e.reactQuery) == null ? void 0 : R2.clientConfig) ?? s ?? {}, devtoolConfig: ((M = e == null ? void 0 : e.reactQuery) == null ? void 0 : M.devtoolConfig) ?? a ?? {} };
  return { optionsWithDefaults: u, disableTelemetryWithDefault: p2, reactQueryWithDefaults: l2 };
}, "handleRefineOptions");
var Vr = o(({ redirectFromProps: e, action: t, redirectOptions: r }) => {
  if (e || e === false)
    return e;
  switch (t) {
    case "clone":
      return r.afterClone;
    case "create":
      return r.afterCreate;
    case "edit":
      return r.afterEdit;
    default:
      return false;
  }
}, "redirectPage");
var tr = o(async (e, t, r) => {
  let n = [];
  for (let [s, a] of e.entries())
    try {
      let i2 = await a();
      n.push(t(i2, s));
    } catch (i2) {
      n.push(r(i2, s));
    }
  return n;
}, "sequentialPromises");
var ye = o((e, t = [], r = false) => {
  if (!e)
    return;
  if (r) {
    let s = t.find((i2) => be(i2.route ?? "") === be(e));
    return s || t.find((i2) => i2.name === e);
  }
  let n = t.find((s) => s.identifier === e);
  return n || (n = t.find((s) => s.name === e)), n;
}, "pickResource");
var _ = o((e, t, r) => {
  if (t)
    return t;
  let n = ye(e, r), s = S(n == null ? void 0 : n.meta, n == null ? void 0 : n.options);
  return s != null && s.dataProviderName ? s.dataProviderName : "default";
}, "pickDataProvider");
var qe = o(async (e) => ({ data: (await Promise.all(e)).map((t) => t.data) }), "handleMultiple");
var rr = o((e) => {
  let { pagination: t, cursor: r } = e;
  if (r != null && r.next)
    return r.next;
  let n = (t == null ? void 0 : t.current) || 1, s = (t == null ? void 0 : t.pageSize) || 10, a = Math.ceil((e.total || 0) / s);
  return n < a ? Number(n) + 1 : void 0;
}, "getNextPageParam");
var or = o((e) => {
  let { pagination: t, cursor: r } = e;
  if (r != null && r.prev)
    return r.prev;
  let n = (t == null ? void 0 : t.current) || 1;
  return n === 1 ? void 0 : n - 1;
}, "getPreviousPageParam");
var nr = o((e) => {
  let t = [];
  return e.forEach((r) => {
    var n, s;
    t.push({ ...r, label: ((n = r.meta) == null ? void 0 : n.label) ?? ((s = r.options) == null ? void 0 : s.label), route: er(r, e), canCreate: !!r.create, canEdit: !!r.edit, canShow: !!r.show, canDelete: r.canDelete });
  }), t;
}, "legacyResourceTransform");
var Oo = o((e) => _e(be(e)).flatMap((r) => xt(r) ? [r.slice(1)] : []), "pickRouteParams");
var zo = o((e, t = {}) => e.reduce((r, n) => {
  let s = t[n];
  return typeof s < "u" && (r[n] = s), r;
}, {}), "prepareRouteParams");
var Me = o((e, t = {}, r = {}, n = {}) => {
  let s = Oo(e), a = zo(s, { ...t, ...typeof (r == null ? void 0 : r.id) < "u" ? { id: r.id } : {}, ...typeof (r == null ? void 0 : r.action) < "u" ? { action: r.action } : {}, ...typeof (r == null ? void 0 : r.resource) < "u" ? { resource: r.resource } : {}, ...r == null ? void 0 : r.params, ...n });
  return e.replace(/:([^\/]+)/g, (i2, c) => {
    let d3 = a[c];
    return typeof d3 < "u" ? `${d3}` : i2;
  });
}, "composeRoute");
var J = o(() => {
  let e = ue(), t = fe();
  return t.isProvided ? { isLegacy: false, ...t } : e.isProvided ? { isLegacy: true, ...e, check: e.checkAuth, onError: e.checkError, getIdentity: e.getUserIdentity } : null;
}, "useActiveAuthProvider");
var Ft = o(({ hasPagination: e, pagination: t, configPagination: r } = {}) => {
  let n = e === false ? "off" : "server", s = (t == null ? void 0 : t.mode) ?? n, a = S(t == null ? void 0 : t.current, r == null ? void 0 : r.current) ?? 1, i2 = S(t == null ? void 0 : t.pageSize, r == null ? void 0 : r.pageSize) ?? 10;
  return { current: a, pageSize: i2, mode: s };
}, "handlePaginationParams");
var sr = o((e) => {
  let [t, r] = (0, import_react6.useState)(false);
  return (0, import_react6.useEffect)(() => {
    let n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    let s = o(() => r(n.matches), "listener");
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [t, e]), t;
}, "useMediaQuery");
var ar = o((e, t, r, n) => {
  let s = n ? e(t, n, r) : e(t, r), a = r ?? t;
  return s === t || typeof s > "u" ? a : s;
}, "safeTranslate");
function _o(e, t, r, n, s) {
  var y3;
  let a = { create: "Create new ", clone: `#${n ?? ""} Clone `, edit: `#${n ?? ""} Edit `, show: `#${n ?? ""} Show `, list: "" }, i2 = (t == null ? void 0 : t.identifier) ?? (t == null ? void 0 : t.name), c = (t == null ? void 0 : t.label) ?? ((y3 = t == null ? void 0 : t.meta) == null ? void 0 : y3.label) ?? Wt(i2, r === "list" ? "plural" : "singular"), d3 = s ?? c, u = ar(e, "documentTitle.default", "refine"), p2 = ar(e, "documentTitle.suffix", " | refine"), l2 = u;
  return r && i2 && (l2 = ar(e, `documentTitle.${i2}.${r}`, `${a[r] ?? ""}${d3}${p2}`, { id: n })), l2;
}
o(_o, "generateDefaultDocumentTitle");
var Ae = o((e, t) => {
  let { mutationMode: r, undoableTimeout: n } = (0, import_react7.useContext)(ve);
  return { mutationMode: e ?? r, undoableTimeout: t ?? n };
}, "useMutationMode");
var Br = import_react9.default.createContext({});
var Xo = o(({ children: e }) => {
  let [t, r] = (0, import_react9.useState)(false);
  return import_react9.default.createElement(Br.Provider, { value: { warnWhen: t, setWarnWhen: r } }, e);
}, "UnsavedWarnContextProvider");
var pt = o(() => {
  let { warnWhenUnsavedChanges: e } = (0, import_react8.useContext)(ve), { warnWhen: t, setWarnWhen: r } = (0, import_react8.useContext)(Br);
  return { warnWhenUnsavedChanges: e, warnWhen: !!t, setWarnWhen: r ?? (() => {
  }) };
}, "useWarnAboutChange");
var Nr = o(() => {
  let { syncWithLocation: e } = (0, import_react10.useContext)(ve);
  return { syncWithLocation: e };
}, "useSyncWithLocation");
var Js = o(() => {
  let { Title: e } = (0, import_react11.useContext)(ve);
  return e;
}, "useTitle");
var se = o(() => {
  let { Footer: e, Header: t, Layout: r, OffLayoutArea: n, Sider: s, Title: a, hasDashboard: i2, mutationMode: c, syncWithLocation: d3, undoableTimeout: u, warnWhenUnsavedChanges: p2, DashboardPage: l2, LoginPage: y3, catchAll: m2, options: T3, __initialized: L } = (0, import_react12.useContext)(ve);
  return { __initialized: L, Footer: e, Header: t, Layout: r, OffLayoutArea: n, Sider: s, Title: a, hasDashboard: i2, mutationMode: c, syncWithLocation: d3, undoableTimeout: u, warnWhenUnsavedChanges: p2, DashboardPage: l2, LoginPage: y3, catchAll: m2, options: T3 };
}, "useRefineContext");
var st = o(() => {
  let { options: { textTransformers: e } } = se();
  return o((r = "", n) => {
    let s = e.humanize(r);
    return n === "singular" ? e.singular(s) : e.plural(s);
  }, "getFriendlyName");
}, "useUserFriendlyName");
var Yo = o((e) => typeof e == "object" && e !== null, "isNested");
var ea = o((e) => Array.isArray(e), "isArray");
var ir = o((e, t = "") => Yo(e) ? Object.keys(e).reduce((r, n) => {
  let s = t.length ? `${t}.` : "";
  return Yo(e[n]) && Object.keys(e[n]).length && (ea(e[n]) && e[n].length ? e[n].forEach((a, i2) => {
    Object.assign(r, ir(a, `${s + n}.${i2}`));
  }) : Object.assign(r, ir(e[n], s + n))), r[s + n] = e[n], r;
}, {}) : { [t]: e }, "flattenObjectKeys");
var Jo = o((e) => e.split(".").map((t) => Number.isNaN(Number(t)) ? t : Number(t)), "propertyPathToArray");
var Kr = o((e, t, r) => {
  if (typeof window > "u")
    return;
  let n = new Blob([t], { type: r }), s = document.createElement("a");
  s.setAttribute("visibility", "hidden"), s.download = e;
  let a = URL.createObjectURL(n);
  s.href = a, document.body.appendChild(s), s.click(), document.body.removeChild(s), setTimeout(() => {
    URL.revokeObjectURL(a);
  });
}, "downloadInBrowser");
var ur = o((e) => {
  setTimeout(e, 0);
}, "deferExecution");
var Gr = o((e, t = 1e3, r) => {
  let n = [], s = o(() => {
    n.forEach((c) => {
      var d3;
      return (d3 = c.reject) == null ? void 0 : d3.call(c, r);
    }), n = [];
  }, "cancelPrevious"), a = debounce_default((...c) => {
    let { resolve: d3, reject: u } = n.pop() || {};
    Promise.resolve(e(...c)).then(d3).catch(u);
  }, t), i2 = o((...c) => new Promise((d3, u) => {
    s(), n.push({ resolve: d3, reject: u }), a(...c);
  }), "runner");
  return i2.flush = () => a.flush(), i2.cancel = () => {
    a.cancel(), s();
  }, i2;
}, "asyncDebounce");
var ke = o((e) => {
  let t = { queryKey: e.queryKey, pageParam: e.pageParam };
  return Object.defineProperty(t, "signal", { enumerable: true, get: () => e.signal }), t;
}, "prepareQueryContext");
var cr = o((e) => {
  let { current: t, pageSize: r, sorter: n, sorters: s, filters: a } = import_qs.default.parse(e.substring(1));
  return { parsedCurrent: t && Number(t), parsedPageSize: r && Number(r), parsedSorter: S(s, n) ?? [], parsedFilters: a ?? [] };
}, "parseTableParams");
var oa = o((e) => {
  let t = import_qs.default.stringify(e);
  return cr(`/${t}`);
}, "parseTableParamsFromQuery");
var dr = o((e) => {
  let t = { skipNulls: true, arrayFormat: "indices", encode: false }, { pagination: r, sorter: n, sorters: s, filters: a, ...i2 } = e;
  return import_qs.default.stringify({ ...i2, ...r || {}, sorters: S(s, n), filters: a }, t);
}, "stringifyTableParams");
var tn = o((e, t) => e.operator !== "and" && e.operator !== "or" && t.operator !== "and" && t.operator !== "or" ? ("field" in e ? e.field : void 0) === ("field" in t ? t.field : void 0) && e.operator === t.operator : ("key" in e ? e.key : void 0) === ("key" in t ? t.key : void 0) && e.operator === t.operator, "compareFilters");
var rn = o((e, t) => e.field === t.field, "compareSorters");
var Rt = o((e, t, r = []) => (t.filter((s) => (s.operator === "or" || s.operator === "and") && !s.key).length > 1 && (0, import_warn_once.default)(true, `[conditionalFilters]: You have created multiple Conditional Filters at the top level, this requires the key parameter. 
For more information, see https://refine.dev/docs/advanced-tutorials/data-provider/handling-filters/#top-level-multiple-conditional-filters-usage`), unionWith_default(e, t, r, tn).filter((s) => s.value !== void 0 && s.value !== null && (s.operator !== "or" || s.operator === "or" && s.value.length !== 0) && (s.operator !== "and" || s.operator === "and" && s.value.length !== 0))), "unionFilters");
var pr = o((e, t) => unionWith_default(e, t, rn).filter((r) => r.order !== void 0 && r.order !== null), "unionSorters");
var lr = o((e, t) => [...differenceWith_default(t, e, tn), ...e], "setInitialFilters");
var mr = o((e, t) => [...differenceWith_default(t, e, rn), ...e], "setInitialSorters");
var na = o((e, t) => {
  if (!t)
    return;
  let r = t.find((n) => n.field === e);
  if (r)
    return r.order;
}, "getDefaultSortOrder");
var sa = o((e, t, r = "eq") => {
  let n = t == null ? void 0 : t.find((s) => {
    if (s.operator !== "or" && s.operator !== "and" && "field" in s) {
      let { operator: a, field: i2 } = s;
      return i2 === e && a === r;
    }
  });
  if (n)
    return n.value || [];
}, "getDefaultFilter");
var aa = o((e) => new Promise((t, r) => {
  let n = new FileReader(), s = o(() => {
    n.result && (n.removeEventListener("load", s, false), t(n.result));
  }, "resultHandler");
  n.addEventListener("load", s, false), n.readAsDataURL(e.originFileObj), n.onerror = (a) => (n.removeEventListener("load", s, false), r(a));
}), "file2Base64");
var O2 = o(() => {
  let { options: { useNewQueryKeys: e } } = se();
  return { keys: Oe, preferLegacyKeys: !e };
}, "useKeys");
function ia({ v3LegacyAuthProviderCompatible: e = false, options: t, params: r } = {}) {
  let { getPermissions: n } = ue(), { getPermissions: s } = fe(), { keys: a, preferLegacyKeys: i2 } = O2(), c = useQuery({ queryKey: a().auth().action("permissions").get(i2), queryFn: s ? () => s(r) : () => Promise.resolve(void 0), enabled: !e && !!s, ...e ? {} : t, meta: { ...e ? {} : t == null ? void 0 : t.meta, ...P("usePermissions", i2) } }), d3 = useQuery({ queryKey: [...a().auth().action("permissions").get(i2), "v3LegacyAuthProviderCompatible"], queryFn: n ? () => n(r) : () => Promise.resolve(void 0), enabled: e && !!n, ...e ? t : {}, meta: { ...e ? t == null ? void 0 : t.meta : {}, ...P("usePermissions", i2) } });
  return e ? d3 : c;
}
o(ia, "usePermissions");
function $r({ v3LegacyAuthProviderCompatible: e = false, queryOptions: t } = {}) {
  let { getUserIdentity: r } = ue(), { getIdentity: n } = fe(), { keys: s, preferLegacyKeys: a } = O2(), i2 = useQuery({ queryKey: s().auth().action("identity").get(a), queryFn: n ?? (() => Promise.resolve({})), enabled: !e && !!n, retry: false, ...e === true ? {} : t, meta: { ...e === true ? {} : t == null ? void 0 : t.meta, ...P("useGetIdentity", a) } }), c = useQuery({ queryKey: [...s().auth().action("identity").get(a), "v3LegacyAuthProviderCompatible"], queryFn: r ?? (() => Promise.resolve({})), enabled: e && !!r, retry: false, ...e ? t : {}, meta: { ...e ? t == null ? void 0 : t.meta : {}, ...P("useGetIdentity", a) } });
  return e ? c : i2;
}
o($r, "useGetIdentity");
var ht = o(() => {
  let e = useQueryClient(), { keys: t, preferLegacyKeys: r } = O2();
  return o(async () => {
    await Promise.all(["check", "identity", "permissions"].map((s) => e.invalidateQueries(t().auth().action(s).get(r))));
  }, "invalidate");
}, "useInvalidateAuthStore");
function fr({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
  let r = ht(), n = Z(), s = ge(), { push: a } = ce(), { open: i2, close: c } = we(), { logout: d3 } = ue(), { logout: u } = fe(), { keys: p2, preferLegacyKeys: l2 } = O2(), y3 = useMutation({ mutationKey: p2().auth().action("logout").get(l2), mutationFn: u, onSuccess: async (T3, L) => {
    let { success: v3, error: g, redirectTo: R2, successNotification: M } = T3, { redirectPath: I2 } = L ?? {}, x = I2 ?? R2;
    v3 && (c == null || c("useLogout-error"), M && (i2 == null || i2(ca(M)))), (g || !v3) && (i2 == null || i2(Wr(g))), x !== false && (n === "legacy" ? a(x ?? "/login") : x && s({ to: x })), await r();
  }, onError: (T3) => {
    i2 == null || i2(Wr(T3));
  }, ...e === true ? {} : t, meta: { ...e === true ? {} : t == null ? void 0 : t.meta, ...P("useLogout", l2) } }), m2 = useMutation({ mutationKey: [...p2().auth().action("logout").get(l2), "v3LegacyAuthProviderCompatible"], mutationFn: d3, onSuccess: async (T3, L) => {
    let v3 = (L == null ? void 0 : L.redirectPath) ?? T3;
    if (v3 !== false) {
      if (v3) {
        n === "legacy" ? a(v3) : s({ to: v3 });
        return;
      }
      n === "legacy" ? a("/login") : s({ to: "/login" }), await r();
    }
  }, onError: (T3) => {
    i2 == null || i2(Wr(T3));
  }, ...e ? t : {}, meta: { ...e ? t == null ? void 0 : t.meta : {}, ...P("useLogout", l2) } });
  return e ? m2 : y3;
}
o(fr, "useLogout");
var Wr = o((e) => ({ key: "useLogout-error", type: "error", message: (e == null ? void 0 : e.name) || "Logout Error", description: (e == null ? void 0 : e.message) || "Something went wrong during logout" }), "buildNotification");
var ca = o((e) => ({ message: e.message, description: e.description, key: "logout-success", type: "success" }), "buildSuccessNotification");
function At({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
  let r = ht(), n = Z(), s = ge(), { replace: a } = ce(), i2 = ae(), { useLocation: c } = te(), { search: d3 } = c(), { close: u, open: p2 } = we(), { login: l2 } = ue(), { login: y3 } = fe(), { keys: m2, preferLegacyKeys: T3 } = O2(), L = import_react13.default.useMemo(() => {
    var R2;
    return n === "legacy" ? import_qs2.default.parse(d3, { ignoreQueryPrefix: true }).to : (R2 = i2.params) == null ? void 0 : R2.to;
  }, [n, i2.params, d3]), v3 = useMutation({ mutationKey: m2().auth().action("login").get(T3), mutationFn: y3, onSuccess: async ({ success: R2, redirectTo: M, error: I2, successNotification: x }) => {
    R2 && (u == null || u("login-error"), x && (p2 == null || p2(la(x)))), (I2 || !R2) && (p2 == null || p2(Or(I2))), L && R2 ? n === "legacy" ? a(L) : s({ to: L, type: "replace" }) : M ? n === "legacy" ? a(M) : s({ to: M, type: "replace" }) : n === "legacy" && a("/"), await r();
  }, onError: (R2) => {
    p2 == null || p2(Or(R2));
  }, ...e === true ? {} : t, meta: { ...e === true ? {} : t == null ? void 0 : t.meta, ...P("useLogin", T3) } }), g = useMutation({ mutationKey: [...m2().auth().action("login").get(T3), "v3LegacyAuthProviderCompatible"], mutationFn: l2, onSuccess: async (R2) => {
    L && a(L), R2 !== false && !L && (typeof R2 == "string" ? n === "legacy" ? a(R2) : s({ to: R2, type: "replace" }) : n === "legacy" ? a("/") : s({ to: "/", type: "replace" })), await r(), u == null || u("login-error");
  }, onError: (R2) => {
    p2 == null || p2(Or(R2));
  }, ...e ? t : {}, meta: { ...e ? t == null ? void 0 : t.meta : {}, ...P("useLogin", T3) } });
  return e ? g : v3;
}
o(At, "useLogin");
var Or = o((e) => ({ message: (e == null ? void 0 : e.name) || "Login Error", description: (e == null ? void 0 : e.message) || "Invalid credentials", key: "login-error", type: "error" }), "buildNotification");
var la = o((e) => ({ message: e.message, description: e.description, key: "login-success", type: "success" }), "buildSuccessNotification");
function _r({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
  let r = ht(), n = Z(), s = ge(), { replace: a } = ce(), { register: i2 } = ue(), { register: c } = fe(), { close: d3, open: u } = we(), { keys: p2, preferLegacyKeys: l2 } = O2(), y3 = useMutation({ mutationKey: p2().auth().action("register").get(l2), mutationFn: c, onSuccess: async ({ success: T3, redirectTo: L, error: v3, successNotification: g }) => {
    T3 && (d3 == null || d3("register-error"), g && (u == null || u(ma(g)))), (v3 || !T3) && (u == null || u(zr(v3))), L ? n === "legacy" ? a(L) : s({ to: L, type: "replace" }) : n === "legacy" && a("/"), await r();
  }, onError: (T3) => {
    u == null || u(zr(T3));
  }, ...e === true ? {} : t, meta: { ...e === true ? {} : t == null ? void 0 : t.meta, ...P("useRegister", l2) } }), m2 = useMutation({ mutationKey: [...p2().auth().action("register").get(l2), "v3LegacyAuthProviderCompatible"], mutationFn: i2, onSuccess: async (T3) => {
    T3 !== false && (T3 ? n === "legacy" ? a(T3) : s({ to: T3, type: "replace" }) : n === "legacy" ? a("/") : s({ to: "/", type: "replace" }), await r(), d3 == null || d3("register-error"));
  }, onError: (T3) => {
    u == null || u(zr(T3));
  }, ...e ? t : {}, meta: { ...e ? t == null ? void 0 : t.meta : {}, ...P("useRegister", l2) } });
  return e ? m2 : y3;
}
o(_r, "useRegister");
var zr = o((e) => ({ message: (e == null ? void 0 : e.name) || "Register Error", description: (e == null ? void 0 : e.message) || "Error while registering", key: "register-error", type: "error" }), "buildNotification");
var ma = o((e) => ({ message: e.message, description: e.description, key: "register-success", type: "success" }), "buildSuccessNotification");
function Xr({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
  let r = Z(), n = ge(), { replace: s } = ce(), { forgotPassword: a } = ue(), { forgotPassword: i2 } = fe(), { close: c, open: d3 } = we(), { keys: u, preferLegacyKeys: p2 } = O2(), l2 = useMutation({ mutationKey: u().auth().action("forgotPassword").get(p2), mutationFn: i2, onSuccess: ({ success: m2, redirectTo: T3, error: L, successNotification: v3 }) => {
    m2 && (c == null || c("forgot-password-error"), v3 && (d3 == null || d3(fa(v3)))), (L || !m2) && (d3 == null || d3(jr(L))), T3 && (r === "legacy" ? s(T3) : n({ to: T3, type: "replace" }));
  }, onError: (m2) => {
    d3 == null || d3(jr(m2));
  }, ...e === true ? {} : t, meta: { ...e === true ? {} : t == null ? void 0 : t.meta, ...P("useForgotPassword", p2) } }), y3 = useMutation({ mutationKey: [...u().auth().action("forgotPassword").get(p2), "v3LegacyAuthProviderCompatible"], mutationFn: a, onSuccess: (m2) => {
    m2 !== false && m2 && (r === "legacy" ? s(m2) : n({ to: m2, type: "replace" })), c == null || c("forgot-password-error");
  }, onError: (m2) => {
    d3 == null || d3(jr(m2));
  }, ...e ? t : {}, meta: { ...e ? t == null ? void 0 : t.meta : {}, ...P("useForgotPassword", p2) } });
  return e ? y3 : l2;
}
o(Xr, "useForgotPassword");
var jr = o((e) => ({ message: (e == null ? void 0 : e.name) || "Forgot Password Error", description: (e == null ? void 0 : e.message) || "Error while resetting password", key: "forgot-password-error", type: "error" }), "buildNotification");
var fa = o((e) => ({ message: e.message, description: e.description, key: "forgot-password-success", type: "success" }), "buildSuccessNotification");
function Yr({ v3LegacyAuthProviderCompatible: e, mutationOptions: t } = {}) {
  let r = Z(), n = ge(), { replace: s } = ce(), { updatePassword: a } = ue(), { updatePassword: i2 } = fe(), { close: c, open: d3 } = we(), { keys: u, preferLegacyKeys: p2 } = O2(), l2 = ae(), { useLocation: y3 } = te(), { search: m2 } = y3(), T3 = import_react14.default.useMemo(() => r === "legacy" ? import_qs3.default.parse(m2, { ignoreQueryPrefix: true }) ?? {} : l2.params ?? {}, [m2, l2, r]), L = useMutation({ mutationKey: u().auth().action("updatePassword").get(p2), mutationFn: async (g) => i2 == null ? void 0 : i2({ ...T3, ...g }), onSuccess: ({ success: g, redirectTo: R2, error: M, successNotification: I2 }) => {
    g && (c == null || c("update-password-error"), I2 && (d3 == null || d3(Ta(I2)))), (M || !g) && (d3 == null || d3(Zr(M))), R2 && (r === "legacy" ? s(R2) : n({ to: R2, type: "replace" }));
  }, onError: (g) => {
    d3 == null || d3(Zr(g));
  }, ...e === true ? {} : t, meta: { ...e === true ? {} : t == null ? void 0 : t.meta, ...P("useUpdatePassword", p2) } }), v3 = useMutation({ mutationKey: [...u().auth().action("updatePassword").get(p2), "v3LegacyAuthProviderCompatible"], mutationFn: async (g) => a == null ? void 0 : a({ ...T3, ...g }), onSuccess: (g) => {
    g !== false && g && (r === "legacy" ? s(g) : n({ to: g, type: "replace" })), c == null || c("update-password-error");
  }, onError: (g) => {
    d3 == null || d3(Zr(g));
  }, ...e ? t : {}, meta: { ...e ? t == null ? void 0 : t.meta : {}, ...P("useUpdatePassword", p2) } });
  return e ? v3 : L;
}
o(Yr, "useUpdatePassword");
var Zr = o((e) => ({ message: (e == null ? void 0 : e.name) || "Update Password Error", description: (e == null ? void 0 : e.message) || "Error while updating password", key: "update-password-error", type: "error" }), "buildNotification");
var Ta = o((e) => ({ message: e.message, description: e.description, key: "update-password-success", type: "success" }), "buildSuccessNotification");
function yr({ v3LegacyAuthProviderCompatible: e = false, params: t } = {}) {
  let { checkAuth: r } = ue(), { check: n } = fe(), { keys: s, preferLegacyKeys: a } = O2(), i2 = useQuery({ queryKey: s().auth().action("check").params(t).get(a), queryFn: async () => await (n == null ? void 0 : n(t)) ?? {}, retry: false, enabled: !e, meta: { ...P("useIsAuthenticated", a) } }), c = useQuery({ queryKey: [...s().auth().action("check").params(t).get(a), "v3LegacyAuthProviderCompatible"], queryFn: async () => await (r == null ? void 0 : r(t)) ?? {}, retry: false, enabled: e, meta: { ...P("useIsAuthenticated", a) } });
  return e ? c : i2;
}
o(yr, "useIsAuthenticated");
var Pa = yr;
function de({ v3LegacyAuthProviderCompatible: e = false } = {}) {
  let t = Z(), r = ge(), { replace: n } = ce(), { checkError: s } = ue(), { onError: a } = fe(), { keys: i2, preferLegacyKeys: c } = O2(), { mutate: d3 } = fr({ v3LegacyAuthProviderCompatible: !!e }), { mutate: u } = fr({ v3LegacyAuthProviderCompatible: !!e }), p2 = useMutation({ mutationKey: i2().auth().action("onError").get(c), ...a ? { mutationFn: a, onSuccess: ({ logout: y3, redirectTo: m2 }) => {
    if (y3) {
      u({ redirectPath: m2 });
      return;
    }
    if (m2) {
      t === "legacy" ? n(m2) : r({ to: m2, type: "replace" });
      return;
    }
  } } : { mutationFn: () => ({}) }, meta: { ...P("useOnError", c) } }), l2 = useMutation({ mutationKey: [...i2().auth().action("onError").get(c), "v3LegacyAuthProviderCompatible"], mutationFn: s, onError: (y3) => {
    d3({ redirectPath: y3 });
  }, meta: { ...P("useOnError", c) } });
  return e ? l2 : p2;
}
o(de, "useOnError");
var xa = de;
var Jr = o(() => {
  let { isProvided: e } = ue(), { isProvided: t } = fe();
  return !!(t || e);
}, "useIsExistAuthentication");
var ee = o(({ isLoading: e, interval: t, onInterval: r }) => {
  let [n, s] = (0, import_react15.useState)(void 0), { options: a } = se(), { overtime: i2 } = a, c = t ?? i2.interval, d3 = r ?? (i2 == null ? void 0 : i2.onInterval);
  return (0, import_react15.useEffect)(() => {
    let u;
    return e && (u = setInterval(() => {
      s((p2) => p2 === void 0 ? c : p2 + c);
    }, c)), () => {
      clearInterval(u), s(void 0);
    };
  }, [e, c]), (0, import_react15.useEffect)(() => {
    d3 && n && d3(n);
  }, [n]), { elapsedTime: n };
}, "useLoadingOvertime");
var kt = o(({ resource: e, config: t, filters: r, hasPagination: n, pagination: s, sorters: a, queryOptions: i2, successNotification: c, errorNotification: d3, meta: u, metaData: p2, liveMode: l2, onLiveEvent: y3, liveParams: m2, dataProviderName: T3, overtimeOptions: L } = {}) => {
  let { resources: v3, resource: g, identifier: R2 } = z(e), M = ne(), I2 = G(), x = J(), { mutate: P2 } = de({ v3LegacyAuthProviderCompatible: !!(x != null && x.isLegacy) }), f2 = pe(), U = q(), { keys: b2, preferLegacyKeys: h } = O2(), E2 = _(R2, T3, v3), C = S(u, p2), D = S(r, t == null ? void 0 : t.filters), k = S(a, t == null ? void 0 : t.sort), w = S(n, t == null ? void 0 : t.hasPagination), Q = Ft({ pagination: s, configPagination: t == null ? void 0 : t.pagination, hasPagination: w }), F = Q.mode === "server", H = U({ resource: g, meta: C }), $ = { meta: H, metaData: H, filters: D, hasPagination: F, pagination: Q, sorters: k, config: { ...t, sort: k } }, K = (i2 == null ? void 0 : i2.enabled) === void 0 || (i2 == null ? void 0 : i2.enabled) === true, { getList: j } = M(E2);
  at({ resource: R2, types: ["*"], params: { meta: H, metaData: H, pagination: Q, hasPagination: F, sort: k, sorters: k, filters: D, subscriptionType: "useList", ...m2 }, channel: `resources/${g == null ? void 0 : g.name}`, enabled: K, liveMode: l2, onLiveEvent: y3, dataProviderName: E2, meta: { ...u, dataProviderName: T3 } });
  let B = useQuery({ queryKey: b2().data(E2).resource(R2 ?? "").action("list").params({ ...C || {}, filters: D, hasPagination: F, ...F && { pagination: Q }, ...a && { sorters: a }, ...(t == null ? void 0 : t.sort) && { sort: t == null ? void 0 : t.sort } }).get(h), queryFn: (V) => {
    let N = { ...H, queryContext: ke(V) };
    return j({ resource: (g == null ? void 0 : g.name) ?? "", pagination: Q, hasPagination: F, filters: D, sort: k, sorters: k, meta: N, metaData: N });
  }, ...i2, enabled: typeof (i2 == null ? void 0 : i2.enabled) < "u" ? i2 == null ? void 0 : i2.enabled : !!(g != null && g.name), select: (V) => {
    var De;
    let N = V, { current: X, mode: oe, pageSize: ie } = Q;
    return oe === "client" && (N = { ...N, data: N.data.slice((X - 1) * ie, X * ie), total: N.total }), i2 != null && i2.select ? (De = i2 == null ? void 0 : i2.select) == null ? void 0 : De.call(i2, N) : N;
  }, onSuccess: (V) => {
    var X;
    (X = i2 == null ? void 0 : i2.onSuccess) == null || X.call(i2, V);
    let N = typeof c == "function" ? c(V, $, R2) : c;
    f2(N);
  }, onError: (V) => {
    var X;
    P2(V), (X = i2 == null ? void 0 : i2.onError) == null || X.call(i2, V);
    let N = typeof d3 == "function" ? d3(V, $, R2) : d3;
    f2(N, { key: `${R2}-useList-notification`, message: I2("notifications.error", { statusCode: V.statusCode }, `Error (status code: ${V.statusCode})`), description: V.message, type: "error" });
  }, meta: { ...i2 == null ? void 0 : i2.meta, ...P("useList", h, g == null ? void 0 : g.name) } }), { elapsedTime: W } = ee({ isLoading: B.isFetching, interval: L == null ? void 0 : L.interval, onInterval: L == null ? void 0 : L.onInterval });
  return { ...B, overtime: { elapsedTime: W } };
}, "useList");
var Qt = o(({ resource: e, id: t, queryOptions: r, successNotification: n, errorNotification: s, meta: a, metaData: i2, liveMode: c, onLiveEvent: d3, liveParams: u, dataProviderName: p2, overtimeOptions: l2 }) => {
  let { resources: y3, resource: m2, identifier: T3 } = z(e), L = ne(), v3 = G(), g = J(), { mutate: R2 } = de({ v3LegacyAuthProviderCompatible: !!(g != null && g.isLegacy) }), M = pe(), I2 = q(), { keys: x, preferLegacyKeys: P2 } = O2(), f2 = S(a, i2), U = _(T3, p2, y3), { getOne: b2 } = L(U), h = I2({ resource: m2, meta: f2 });
  at({ resource: T3, types: ["*"], channel: `resources/${m2 == null ? void 0 : m2.name}`, params: { ids: t ? [t] : [], id: t, meta: h, metaData: h, subscriptionType: "useOne", ...u }, enabled: typeof (r == null ? void 0 : r.enabled) < "u" ? r == null ? void 0 : r.enabled : typeof (m2 == null ? void 0 : m2.name) < "u" && typeof t < "u", liveMode: c, onLiveEvent: d3, dataProviderName: U, meta: { ...a, dataProviderName: p2 } });
  let E2 = useQuery({ queryKey: x().data(U).resource(T3 ?? "").action("one").id(t ?? "").params({ ...f2 || {} }).get(P2), queryFn: (D) => b2({ resource: (m2 == null ? void 0 : m2.name) ?? "", id: t, meta: { ...h, queryContext: ke(D) }, metaData: { ...h, queryContext: ke(D) } }), ...r, enabled: typeof (r == null ? void 0 : r.enabled) < "u" ? r == null ? void 0 : r.enabled : typeof t < "u", onSuccess: (D) => {
    var w;
    (w = r == null ? void 0 : r.onSuccess) == null || w.call(r, D);
    let k = typeof n == "function" ? n(D, { id: t, ...h }, T3) : n;
    M(k);
  }, onError: (D) => {
    var w;
    R2(D), (w = r == null ? void 0 : r.onError) == null || w.call(r, D);
    let k = typeof s == "function" ? s(D, { id: t, ...h }, T3) : s;
    M(k, { key: `${t}-${T3}-getOne-notification`, message: v3("notifications.error", { statusCode: D.statusCode }, `Error (status code: ${D.statusCode})`), description: D.message, type: "error" });
  }, meta: { ...r == null ? void 0 : r.meta, ...P("useOne", P2, m2 == null ? void 0 : m2.name) } }), { elapsedTime: C } = ee({ isLoading: E2.isFetching, interval: l2 == null ? void 0 : l2.interval, onInterval: l2 == null ? void 0 : l2.onInterval });
  return { ...E2, overtime: { elapsedTime: C } };
}, "useOne");
var qr = o(({ resource: e, ids: t, queryOptions: r, successNotification: n, errorNotification: s, meta: a, metaData: i2, liveMode: c, onLiveEvent: d3, liveParams: u, dataProviderName: p2, overtimeOptions: l2 }) => {
  let { resources: y3, resource: m2, identifier: T3 } = z(e), L = ne(), v3 = G(), g = J(), { mutate: R2 } = de({ v3LegacyAuthProviderCompatible: !!(g != null && g.isLegacy) }), M = pe(), I2 = q(), { keys: x, preferLegacyKeys: P2 } = O2(), f2 = S(a, i2), U = _(T3, p2, y3), b2 = (r == null ? void 0 : r.enabled) === void 0 || (r == null ? void 0 : r.enabled) === true, { getMany: h, getOne: E2 } = L(U), C = I2({ resource: m2, meta: f2 });
  at({ resource: T3, types: ["*"], params: { ids: t, meta: C, metaData: C, subscriptionType: "useMany", ...u }, channel: `resources/${m2.name}`, enabled: b2, liveMode: c, onLiveEvent: d3, dataProviderName: U, meta: { ...a, dataProviderName: p2 } });
  let D = useQuery({ queryKey: x().data(U).resource(T3).action("many").ids(...t).params({ ...f2 || {} }).get(P2), queryFn: (w) => {
    let Q = { ...C, queryContext: ke(w) };
    return h ? h({ resource: m2 == null ? void 0 : m2.name, ids: t, meta: Q, metaData: Q }) : qe(t.map((F) => E2({ resource: m2 == null ? void 0 : m2.name, id: F, meta: Q, metaData: Q })));
  }, ...r, onSuccess: (w) => {
    var F;
    (F = r == null ? void 0 : r.onSuccess) == null || F.call(r, w);
    let Q = typeof n == "function" ? n(w, t, T3) : n;
    M(Q);
  }, onError: (w) => {
    var F;
    R2(w), (F = r == null ? void 0 : r.onError) == null || F.call(r, w);
    let Q = typeof s == "function" ? s(w, t, T3) : s;
    M(Q, { key: `${t[0]}-${T3}-getMany-notification`, message: v3("notifications.error", { statusCode: w.statusCode }, `Error (status code: ${w.statusCode})`), description: w.message, type: "error" });
  }, meta: { ...r == null ? void 0 : r.meta, ...P("useMany", P2, m2 == null ? void 0 : m2.name) } }), { elapsedTime: k } = ee({ isLoading: D.isFetching, interval: l2 == null ? void 0 : l2.interval, onInterval: l2 == null ? void 0 : l2.onInterval });
  return { ...D, overtime: { elapsedTime: k } };
}, "useMany");
var eo = o(({ mutationOptions: e, overtimeOptions: t } = {}) => {
  let { resources: r, select: n } = z(), s = useQueryClient(), a = ne(), { mutationMode: i2, undoableTimeout: c } = Ae(), d3 = G(), u = J(), { mutate: p2 } = de({ v3LegacyAuthProviderCompatible: !!(u != null && u.isLegacy) }), l2 = Be(), { log: y3 } = Ne(), { notificationDispatch: m2 } = je(), T3 = pe(), L = Ce(), v3 = q(), { options: { textTransformers: g } } = se(), { keys: R2, preferLegacyKeys: M } = O2(), I2 = useMutation({ mutationFn: ({ id: P2, values: f2, resource: U, mutationMode: b2, undoableTimeout: h, onCancel: E2, meta: C, metaData: D, dataProviderName: k }) => {
    let { resource: w, identifier: Q } = n(U), F = v3({ resource: w, meta: S(C, D) }), H = b2 ?? i2, $ = h ?? c;
    return H !== "undoable" ? a(_(Q, k, r)).update({ resource: w.name, id: P2, variables: f2, meta: F, metaData: F }) : new Promise((j, B) => {
      let W = o(() => {
        a(_(Q, k, r)).update({ resource: w.name, id: P2, variables: f2, meta: F, metaData: F }).then((N) => j(N)).catch((N) => B(N));
      }, "doMutation"), V = o(() => {
        B({ message: "mutationCancelled" });
      }, "cancelMutation");
      E2 && E2(V), m2({ type: "ADD", payload: { id: P2, resource: Q, cancelMutation: V, doMutation: W, seconds: $, isSilent: !!E2 } });
    });
  }, onMutate: async ({ resource: P2, id: f2, mutationMode: U, values: b2, dataProviderName: h, meta: E2, metaData: C, optimisticUpdateMap: D = { list: true, many: true, detail: true } }) => {
    let { identifier: k } = n(P2), { gqlMutation: w, gqlQuery: Q, ...F } = S(E2, C) ?? {}, H = Je(M)(k, _(k, h, r), F), $ = R2().data(_(k, h, r)).resource(k), K = s.getQueriesData($.get(M)), j = U ?? i2;
    return await s.cancelQueries($.get(M), void 0, { silent: true }), j !== "pessimistic" && (D.list && s.setQueriesData($.action("list").params(F ?? {}).get(M), (B) => {
      if (typeof D.list == "function")
        return D.list(B, b2, f2);
      if (!B)
        return null;
      let W = B.data.map((V) => {
        var N;
        return ((N = V.id) == null ? void 0 : N.toString()) === (f2 == null ? void 0 : f2.toString()) ? { id: f2, ...V, ...b2 } : V;
      });
      return { ...B, data: W };
    }), D.many && s.setQueriesData($.action("many").get(M), (B) => {
      if (typeof D.many == "function")
        return D.many(B, b2, f2);
      if (!B)
        return null;
      let W = B.data.map((V) => {
        var N;
        return ((N = V.id) == null ? void 0 : N.toString()) === (f2 == null ? void 0 : f2.toString()) && (V = { id: f2, ...V, ...b2 }), V;
      });
      return { ...B, data: W };
    }), D.detail && s.setQueriesData($.action("one").id(f2).params(F ?? {}).get(M), (B) => typeof D.detail == "function" ? D.detail(B, b2, f2) : B ? { ...B, data: { ...B.data, ...b2 } } : null)), { previousQueries: K, queryKey: H };
  }, onSettled: (P2, f2, { id: U, resource: b2, dataProviderName: h, invalidates: E2 = ["list", "many", "detail"] }) => {
    let { identifier: C } = n(b2);
    L({ resource: C, dataProviderName: _(C, h, r), invalidates: E2, id: U }), m2({ type: "REMOVE", payload: { id: U, resource: C } });
  }, onSuccess: (P2, { id: f2, resource: U, successNotification: b2, dataProviderName: h, values: E2, meta: C, metaData: D }, k) => {
    var X;
    let { resource: w, identifier: Q } = n(U), F = g.singular(Q), H = _(Q, h, r), $ = v3({ resource: w, meta: S(C, D) }), K = typeof b2 == "function" ? b2(P2, { id: f2, values: E2 }, Q) : b2;
    T3(K, { key: `${f2}-${Q}-notification`, description: d3("notifications.success", "Successful"), message: d3("notifications.editSuccess", { resource: d3(`${Q}.${Q}`, F) }, `Successfully updated ${F}`), type: "success" }), l2 == null || l2({ channel: `resources/${w.name}`, type: "updated", payload: { ids: (X = P2.data) != null && X.id ? [P2.data.id] : void 0 }, date: /* @__PURE__ */ new Date(), meta: { ...$, dataProviderName: H } });
    let j;
    if (k) {
      let oe = s.getQueryData(k.queryKey.detail(f2));
      j = Object.keys(E2 || {}).reduce((ie, De) => {
        var Y;
        return ie[De] = (Y = oe == null ? void 0 : oe.data) == null ? void 0 : Y[De], ie;
      }, {});
    }
    let { fields: B, operation: W, variables: V, ...N } = $ || {};
    y3 == null || y3.mutate({ action: "update", resource: w.name, data: E2, previousData: j, meta: { id: f2, dataProviderName: H, ...N } });
  }, onError: (P2, { id: f2, resource: U, errorNotification: b2, values: h }, E2) => {
    let { identifier: C } = n(U);
    if (E2)
      for (let D of E2.previousQueries)
        s.setQueryData(D[0], D[1]);
    if (P2.message !== "mutationCancelled") {
      p2 == null || p2(P2);
      let D = g.singular(C), k = typeof b2 == "function" ? b2(P2, { id: f2, values: h }, C) : b2;
      T3(k, { key: `${f2}-${C}-notification`, message: d3("notifications.editError", { resource: d3(`${C}.${C}`, D), statusCode: P2.statusCode }, `Error when updating ${D} (status code: ${P2.statusCode})`), description: P2.message, type: "error" });
    }
  }, mutationKey: R2().data().mutation("update").get(M), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useUpdate", M) } }), { elapsedTime: x } = ee({ isLoading: I2.isLoading, interval: t == null ? void 0 : t.interval, onInterval: t == null ? void 0 : t.onInterval });
  return { ...I2, overtime: { elapsedTime: x } };
}, "useUpdate");
var Vt = o(({ mutationOptions: e, overtimeOptions: t } = {}) => {
  let r = J(), { mutate: n } = de({ v3LegacyAuthProviderCompatible: !!(r != null && r.isLegacy) }), s = ne(), a = Ce(), { resources: i2, select: c } = z(), d3 = G(), u = Be(), { log: p2 } = Ne(), l2 = pe(), y3 = q(), { options: { textTransformers: m2 } } = se(), { keys: T3, preferLegacyKeys: L } = O2(), v3 = useMutation({ mutationFn: ({ resource: R2, values: M, meta: I2, metaData: x, dataProviderName: P2 }) => {
    let { resource: f2, identifier: U } = c(R2), b2 = y3({ resource: f2, meta: S(I2, x) });
    return s(_(U, P2, i2)).create({ resource: f2.name, variables: M, meta: b2, metaData: b2 });
  }, onSuccess: (R2, { resource: M, successNotification: I2, dataProviderName: x, invalidates: P2 = ["list", "many"], values: f2, meta: U, metaData: b2 }) => {
    var K, j;
    let { resource: h, identifier: E2 } = c(M), C = m2.singular(E2), D = _(E2, x, i2), k = y3({ resource: h, meta: S(U, b2) }), w = typeof I2 == "function" ? I2(R2, f2, E2) : I2;
    l2(w, { key: `create-${E2}-notification`, message: d3("notifications.createSuccess", { resource: d3(`${E2}.${E2}`, C) }, `Successfully created ${C}`), description: d3("notifications.success", "Success"), type: "success" }), a({ resource: E2, dataProviderName: D, invalidates: P2 }), u == null || u({ channel: `resources/${h.name}`, type: "created", payload: { ids: (K = R2 == null ? void 0 : R2.data) != null && K.id ? [R2.data.id] : void 0 }, date: /* @__PURE__ */ new Date(), meta: { ...k, dataProviderName: D } });
    let { fields: Q, operation: F, variables: H, ...$ } = k || {};
    p2 == null || p2.mutate({ action: "create", resource: h.name, data: f2, meta: { dataProviderName: D, id: ((j = R2 == null ? void 0 : R2.data) == null ? void 0 : j.id) ?? void 0, ...$ } });
  }, onError: (R2, { resource: M, errorNotification: I2, values: x }) => {
    n(R2);
    let { identifier: P2 } = c(M), f2 = m2.singular(P2), U = typeof I2 == "function" ? I2(R2, x, P2) : I2;
    l2(U, { key: `create-${P2}-notification`, description: R2.message, message: d3("notifications.createError", { resource: d3(`${P2}.${P2}`, f2), statusCode: R2.statusCode }, `There was an error creating ${f2} (status code: ${R2.statusCode})`), type: "error" });
  }, mutationKey: T3().data().mutation("create").get(L), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useCreate", L) } }), { elapsedTime: g } = ee({ isLoading: v3.isLoading, interval: t == null ? void 0 : t.interval, onInterval: t == null ? void 0 : t.onInterval });
  return { ...v3, overtime: { elapsedTime: g } };
}, "useCreate");
var to = o(({ mutationOptions: e, overtimeOptions: t } = {}) => {
  let r = J(), { mutate: n } = de({ v3LegacyAuthProviderCompatible: !!(r != null && r.isLegacy) }), s = ne(), { resources: a, select: i2 } = z(), c = useQueryClient(), { mutationMode: d3, undoableTimeout: u } = Ae(), { notificationDispatch: p2 } = je(), l2 = G(), y3 = Be(), { log: m2 } = Ne(), T3 = pe(), L = Ce(), v3 = q(), { options: { textTransformers: g } } = se(), { keys: R2, preferLegacyKeys: M } = O2(), I2 = useMutation({ mutationFn: ({ id: P2, mutationMode: f2, undoableTimeout: U, resource: b2, onCancel: h, meta: E2, metaData: C, dataProviderName: D, values: k }) => {
    let { resource: w, identifier: Q } = i2(b2), F = v3({ resource: w, meta: S(E2, C) }), H = f2 ?? d3, $ = U ?? u;
    return H !== "undoable" ? s(_(Q, D, a)).deleteOne({ resource: w.name, id: P2, meta: F, metaData: F, variables: k }) : new Promise((j, B) => {
      let W = o(() => {
        s(_(Q, D, a)).deleteOne({ resource: w.name, id: P2, meta: F, metaData: F, variables: k }).then((N) => j(N)).catch((N) => B(N));
      }, "doMutation"), V = o(() => {
        B({ message: "mutationCancelled" });
      }, "cancelMutation");
      h && h(V), p2({ type: "ADD", payload: { id: P2, resource: Q, cancelMutation: V, doMutation: W, seconds: $, isSilent: !!h } });
    });
  }, onMutate: async ({ id: P2, resource: f2, mutationMode: U, dataProviderName: b2, meta: h, metaData: E2 }) => {
    let { identifier: C } = i2(f2), { gqlMutation: D, gqlQuery: k, ...w } = S(h, E2) ?? {}, Q = Je(M)(C, _(C, b2, a), w), F = R2().data(_(C, b2, a)).resource(C), H = U ?? d3;
    await c.cancelQueries(F.get(M), void 0, { silent: true });
    let $ = c.getQueriesData(F.get(M));
    return H !== "pessimistic" && (c.setQueriesData(F.action("list").params(w ?? {}).get(M), (K) => K ? { data: K.data.filter((B) => {
      var W;
      return ((W = B.id) == null ? void 0 : W.toString()) !== P2.toString();
    }), total: K.total - 1 } : null), c.setQueriesData(F.action("many").get(M), (K) => {
      if (!K)
        return null;
      let j = K.data.filter((B) => {
        var W;
        return ((W = B.id) == null ? void 0 : W.toString()) !== (P2 == null ? void 0 : P2.toString());
      });
      return { ...K, data: j };
    })), { previousQueries: $, queryKey: Q };
  }, onSettled: (P2, f2, { id: U, resource: b2, dataProviderName: h, invalidates: E2 = ["list", "many"] }) => {
    let { identifier: C } = i2(b2);
    L({ resource: C, dataProviderName: _(C, h, a), invalidates: E2 }), p2({ type: "REMOVE", payload: { id: U, resource: C } });
  }, onSuccess: (P2, { id: f2, resource: U, successNotification: b2, dataProviderName: h, meta: E2, metaData: C }, D) => {
    let { resource: k, identifier: w } = i2(U), Q = g.singular(w), F = _(w, h, a), H = v3({ resource: k, meta: S(E2, C) });
    c.removeQueries(D == null ? void 0 : D.queryKey.detail(f2));
    let $ = typeof b2 == "function" ? b2(P2, f2, w) : b2;
    T3($, { key: `${f2}-${w}-notification`, description: l2("notifications.success", "Success"), message: l2("notifications.deleteSuccess", { resource: l2(`${w}.${w}`, Q) }, `Successfully deleted a ${Q}`), type: "success" }), y3 == null || y3({ channel: `resources/${k.name}`, type: "deleted", payload: { ids: [f2] }, date: /* @__PURE__ */ new Date(), meta: { ...H, dataProviderName: F } });
    let { fields: K, operation: j, variables: B, ...W } = H || {};
    m2 == null || m2.mutate({ action: "delete", resource: k.name, meta: { id: f2, dataProviderName: F, ...W } }), c.removeQueries(D == null ? void 0 : D.queryKey.detail(f2));
  }, onError: (P2, { id: f2, resource: U, errorNotification: b2 }, h) => {
    let { identifier: E2 } = i2(U);
    if (h)
      for (let C of h.previousQueries)
        c.setQueryData(C[0], C[1]);
    if (P2.message !== "mutationCancelled") {
      n(P2);
      let C = g.singular(E2), D = typeof b2 == "function" ? b2(P2, f2, E2) : b2;
      T3(D, { key: `${f2}-${E2}-notification`, message: l2("notifications.deleteError", { resource: C, statusCode: P2.statusCode }, `Error (status code: ${P2.statusCode})`), description: P2.message, type: "error" });
    }
  }, mutationKey: R2().data().mutation("delete").get(M), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useDelete", M) } }), { elapsedTime: x } = ee({ isLoading: I2.isLoading, interval: t == null ? void 0 : t.interval, onInterval: t == null ? void 0 : t.onInterval });
  return { ...I2, overtime: { elapsedTime: x } };
}, "useDelete");
var ro = o(({ mutationOptions: e, overtimeOptions: t } = {}) => {
  let r = ne(), { resources: n, select: s } = z(), a = G(), i2 = Be(), c = pe(), d3 = Ce(), { log: u } = Ne(), p2 = q(), { options: { textTransformers: l2 } } = se(), { keys: y3, preferLegacyKeys: m2 } = O2(), T3 = useMutation({ mutationFn: ({ resource: v3, values: g, meta: R2, metaData: M, dataProviderName: I2 }) => {
    let { resource: x, identifier: P2 } = s(v3), f2 = p2({ resource: x, meta: S(R2, M) }), U = r(_(P2, I2, n));
    return U.createMany ? U.createMany({ resource: x.name, variables: g, meta: f2, metaData: f2 }) : qe(g.map((b2) => U.create({ resource: x.name, variables: b2, meta: f2, metaData: f2 })));
  }, onSuccess: (v3, { resource: g, successNotification: R2, dataProviderName: M, invalidates: I2 = ["list", "many"], values: x, meta: P2, metaData: f2 }) => {
    let { resource: U, identifier: b2 } = s(g), h = l2.plural(b2), E2 = _(b2, M, n), C = p2({ resource: U, meta: S(P2, f2) }), D = typeof R2 == "function" ? R2(v3, x, b2) : R2;
    c(D, { key: `createMany-${b2}-notification`, message: a("notifications.createSuccess", { resource: a(`${b2}.${b2}`, b2) }, `Successfully created ${h}`), description: a("notifications.success", "Success"), type: "success" }), d3({ resource: b2, dataProviderName: E2, invalidates: I2 });
    let k = v3 == null ? void 0 : v3.data.filter(($) => ($ == null ? void 0 : $.id) !== void 0).map(($) => $.id);
    i2 == null || i2({ channel: `resources/${U.name}`, type: "created", payload: { ids: k }, date: /* @__PURE__ */ new Date(), meta: { ...C, dataProviderName: E2 } });
    let { fields: w, operation: Q, variables: F, ...H } = C || {};
    u == null || u.mutate({ action: "createMany", resource: U.name, data: x, meta: { dataProviderName: E2, ids: k, ...H } });
  }, onError: (v3, { resource: g, errorNotification: R2, values: M }) => {
    let { identifier: I2 } = s(g), x = typeof R2 == "function" ? R2(v3, M, I2) : R2;
    c(x, { key: `createMany-${I2}-notification`, description: v3.message, message: a("notifications.createError", { resource: a(`${I2}.${I2}`, I2), statusCode: v3.statusCode }, `There was an error creating ${I2} (status code: ${v3.statusCode}`), type: "error" });
  }, mutationKey: y3().data().mutation("createMany").get(m2), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useCreateMany", m2) } }), { elapsedTime: L } = ee({ isLoading: T3.isLoading, interval: t == null ? void 0 : t.interval, onInterval: t == null ? void 0 : t.onInterval });
  return { ...T3, overtime: { elapsedTime: L } };
}, "useCreateMany");
var Ka = o(({ mutationOptions: e, overtimeOptions: t } = {}) => {
  let { resources: r, select: n } = z(), s = useQueryClient(), a = ne(), i2 = G(), { mutationMode: c, undoableTimeout: d3 } = Ae(), u = J(), { mutate: p2 } = de({ v3LegacyAuthProviderCompatible: !!(u != null && u.isLegacy) }), { notificationDispatch: l2 } = je(), y3 = Be(), m2 = pe(), T3 = Ce(), { log: L } = Ne(), v3 = q(), { options: { textTransformers: g } } = se(), { keys: R2, preferLegacyKeys: M } = O2(), I2 = useMutation({ mutationFn: ({ ids: P2, values: f2, resource: U, onCancel: b2, mutationMode: h, undoableTimeout: E2, meta: C, metaData: D, dataProviderName: k }) => {
    let { resource: w, identifier: Q } = n(U), F = v3({ resource: w, meta: S(C, D) }), H = h ?? c, $ = E2 ?? d3, K = a(_(Q, k, r)), j = o(() => K.updateMany ? K.updateMany({ resource: w.name, ids: P2, variables: f2, meta: F, metaData: F }) : qe(P2.map((W) => K.update({ resource: w.name, id: W, variables: f2, meta: F, metaData: F }))), "mutationFn");
    return H !== "undoable" ? j() : new Promise((W, V) => {
      let N = o(() => {
        j().then((oe) => W(oe)).catch((oe) => V(oe));
      }, "doMutation"), X = o(() => {
        V({ message: "mutationCancelled" });
      }, "cancelMutation");
      b2 && b2(X), l2({ type: "ADD", payload: { id: P2, resource: Q, cancelMutation: X, doMutation: N, seconds: $, isSilent: !!b2 } });
    });
  }, onMutate: async ({ resource: P2, ids: f2, values: U, mutationMode: b2, dataProviderName: h, meta: E2, metaData: C, optimisticUpdateMap: D = { list: true, many: true, detail: true } }) => {
    let { identifier: k } = n(P2), { gqlMutation: w, gqlQuery: Q, ...F } = S(E2, C) ?? {}, H = Je(M)(k, _(k, h, r), F), $ = R2().data(_(k, h, r)).resource(k), K = b2 ?? c;
    await s.cancelQueries($.get(M), void 0, { silent: true });
    let j = s.getQueriesData($.get(M));
    if (K !== "pessimistic" && (D.list && s.setQueriesData($.action("list").params(F ?? {}).get(M), (B) => {
      if (typeof D.list == "function")
        return D.list(B, U, f2);
      if (!B)
        return null;
      let W = B.data.map((V) => V.id !== void 0 && f2.filter((N) => N !== void 0).map(String).includes(V.id.toString()) ? { ...V, ...U } : V);
      return { ...B, data: W };
    }), D.many && s.setQueriesData($.action("many").get(M), (B) => {
      if (typeof D.many == "function")
        return D.many(B, U, f2);
      if (!B)
        return null;
      let W = B.data.map((V) => V.id !== void 0 && f2.filter((N) => N !== void 0).map(String).includes(V.id.toString()) ? { ...V, ...U } : V);
      return { ...B, data: W };
    }), D.detail))
      for (let B of f2)
        s.setQueriesData($.action("one").id(B).params(F ?? {}).get(M), (W) => {
          if (typeof D.detail == "function")
            return D.detail(W, U, B);
          if (!W)
            return null;
          let V = { ...W.data, ...U };
          return { ...W, data: V };
        });
    return { previousQueries: j, queryKey: H };
  }, onSettled: (P2, f2, { ids: U, resource: b2, dataProviderName: h }) => {
    let { identifier: E2 } = n(b2);
    T3({ resource: E2, invalidates: ["list", "many"], dataProviderName: _(E2, h, r) }), U.forEach((C) => T3({ resource: E2, invalidates: ["detail"], dataProviderName: _(E2, h, r), id: C })), l2({ type: "REMOVE", payload: { id: U, resource: E2 } });
  }, onSuccess: (P2, { ids: f2, resource: U, meta: b2, metaData: h, dataProviderName: E2, successNotification: C, values: D }, k) => {
    let { resource: w, identifier: Q } = n(U), F = g.singular(Q), H = _(Q, E2, r), $ = v3({ resource: w, meta: S(b2, h) }), K = typeof C == "function" ? C(P2, { ids: f2, values: D }, Q) : C;
    m2(K, { key: `${f2}-${Q}-notification`, description: i2("notifications.success", "Successful"), message: i2("notifications.editSuccess", { resource: i2(`${Q}.${Q}`, Q) }, `Successfully updated ${F}`), type: "success" }), y3 == null || y3({ channel: `resources/${w.name}`, type: "updated", payload: { ids: f2.map(String) }, date: /* @__PURE__ */ new Date(), meta: { ...$, dataProviderName: H } });
    let j = [];
    k && f2.forEach((X) => {
      let oe = s.getQueryData(k.queryKey.detail(X));
      j.push(Object.keys(D || {}).reduce((ie, De) => {
        var Y;
        return ie[De] = (Y = oe == null ? void 0 : oe.data) == null ? void 0 : Y[De], ie;
      }, {}));
    });
    let { fields: B, operation: W, variables: V, ...N } = $ || {};
    L == null || L.mutate({ action: "updateMany", resource: w.name, data: D, previousData: j, meta: { ids: f2, dataProviderName: H, ...N } });
  }, onError: (P2, { ids: f2, resource: U, errorNotification: b2, values: h }, E2) => {
    let { identifier: C } = n(U);
    if (E2)
      for (let D of E2.previousQueries)
        s.setQueryData(D[0], D[1]);
    if (P2.message !== "mutationCancelled") {
      p2 == null || p2(P2);
      let D = g.singular(C), k = typeof b2 == "function" ? b2(P2, { ids: f2, values: h }, C) : b2;
      m2(k, { key: `${f2}-${C}-updateMany-error-notification`, message: i2("notifications.editError", { resource: D, statusCode: P2.statusCode }, `Error when updating ${D} (status code: ${P2.statusCode})`), description: P2.message, type: "error" });
    }
  }, mutationKey: R2().data().mutation("updateMany").get(M), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useUpdateMany", M) } }), { elapsedTime: x } = ee({ isLoading: I2.isLoading, interval: t == null ? void 0 : t.interval, onInterval: t == null ? void 0 : t.onInterval });
  return { ...I2, overtime: { elapsedTime: x } };
}, "useUpdateMany");
var Wa = o(({ mutationOptions: e, overtimeOptions: t } = {}) => {
  let r = J(), { mutate: n } = de({ v3LegacyAuthProviderCompatible: !!(r != null && r.isLegacy) }), { mutationMode: s, undoableTimeout: a } = Ae(), i2 = ne(), { notificationDispatch: c } = je(), d3 = G(), u = Be(), p2 = pe(), l2 = Ce(), { log: y3 } = Ne(), { resources: m2, select: T3 } = z(), L = useQueryClient(), v3 = q(), { options: { textTransformers: g } } = se(), { keys: R2, preferLegacyKeys: M } = O2(), I2 = useMutation({ mutationFn: ({ resource: P2, ids: f2, mutationMode: U, undoableTimeout: b2, onCancel: h, meta: E2, metaData: C, dataProviderName: D, values: k }) => {
    let { resource: w, identifier: Q } = T3(P2), F = v3({ resource: w, meta: S(E2, C) }), H = U ?? s, $ = b2 ?? a, K = i2(_(Q, D, m2)), j = o(() => K.deleteMany ? K.deleteMany({ resource: w.name, ids: f2, meta: F, metaData: F, variables: k }) : qe(f2.map((W) => K.deleteOne({ resource: w.name, id: W, meta: F, metaData: F, variables: k }))), "mutationFn");
    return H !== "undoable" ? j() : new Promise((W, V) => {
      let N = o(() => {
        j().then((oe) => W(oe)).catch((oe) => V(oe));
      }, "doMutation"), X = o(() => {
        V({ message: "mutationCancelled" });
      }, "cancelMutation");
      h && h(X), c({ type: "ADD", payload: { id: f2, resource: Q, cancelMutation: X, doMutation: N, seconds: $, isSilent: !!h } });
    });
  }, onMutate: async ({ ids: P2, resource: f2, mutationMode: U, dataProviderName: b2, meta: h, metaData: E2 }) => {
    let { identifier: C } = T3(f2), { gqlMutation: D, gqlQuery: k, ...w } = S(h, E2) ?? {}, Q = Je(M)(C, _(C, b2, m2), w), F = R2().data(_(C, b2, m2)).resource(C), H = U ?? s;
    await L.cancelQueries(F.get(M), void 0, { silent: true });
    let $ = L.getQueriesData(F.get(M));
    if (H !== "pessimistic") {
      L.setQueriesData(F.action("list").params(w ?? {}).get(M), (K) => K ? { data: K.data.filter((B) => B.id && !P2.map(String).includes(B.id.toString())), total: K.total - 1 } : null), L.setQueriesData(F.action("many").get(M), (K) => {
        if (!K)
          return null;
        let j = K.data.filter((B) => B.id ? !P2.map(String).includes(B.id.toString()) : false);
        return { ...K, data: j };
      });
      for (let K of P2)
        L.setQueriesData(F.action("one").id(K).params(w).get(M), (j) => !j || j.data.id === K ? null : { ...j });
    }
    return { previousQueries: $, queryKey: Q };
  }, onSettled: (P2, f2, { resource: U, ids: b2, dataProviderName: h, invalidates: E2 = ["list", "many"] }) => {
    let { identifier: C } = T3(U);
    l2({ resource: C, dataProviderName: _(C, h, m2), invalidates: E2 }), c({ type: "REMOVE", payload: { id: b2, resource: C } });
  }, onSuccess: (P2, { ids: f2, resource: U, meta: b2, metaData: h, dataProviderName: E2, successNotification: C }, D) => {
    let { resource: k, identifier: w } = T3(U), Q = _(w, E2, m2), F = v3({ resource: k, meta: S(b2, h) });
    f2.forEach((W) => L.removeQueries(D == null ? void 0 : D.queryKey.detail(W)));
    let H = typeof C == "function" ? C(P2, f2, w) : C;
    p2(H, { key: `${f2}-${w}-notification`, description: d3("notifications.success", "Success"), message: d3("notifications.deleteSuccess", { resource: d3(`${w}.${w}`, w) }, `Successfully deleted ${w}`), type: "success" }), u == null || u({ channel: `resources/${k.name}`, type: "deleted", payload: { ids: f2 }, date: /* @__PURE__ */ new Date(), meta: { ...F, dataProviderName: Q } });
    let { fields: $, operation: K, variables: j, ...B } = F || {};
    y3 == null || y3.mutate({ action: "deleteMany", resource: k.name, meta: { ids: f2, dataProviderName: Q, ...B } }), f2.forEach((W) => L.removeQueries(D == null ? void 0 : D.queryKey.detail(W)));
  }, onError: (P2, { ids: f2, resource: U, errorNotification: b2 }, h) => {
    let { identifier: E2 } = T3(U);
    if (h)
      for (let C of h.previousQueries)
        L.setQueryData(C[0], C[1]);
    if (P2.message !== "mutationCancelled") {
      n(P2);
      let C = g.singular(E2), D = typeof b2 == "function" ? b2(P2, f2, E2) : b2;
      p2(D, { key: `${f2}-${E2}-notification`, message: d3("notifications.deleteError", { resource: C, statusCode: P2.statusCode }, `Error (status code: ${P2.statusCode})`), description: P2.message, type: "error" });
    }
  }, mutationKey: R2().data().mutation("deleteMany").get(M), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useDeleteMany", M) } }), { elapsedTime: x } = ee({ isLoading: I2.isLoading, interval: t == null ? void 0 : t.interval, onInterval: t == null ? void 0 : t.onInterval });
  return { ...I2, overtime: { elapsedTime: x } };
}, "useDeleteMany");
var Oa = o((e) => {
  var s;
  let t = ne(), { resource: r } = z(), { getApiUrl: n } = t(e ?? ((s = S(r == null ? void 0 : r.meta, r == null ? void 0 : r.options)) == null ? void 0 : s.dataProviderName));
  return n();
}, "useApiUrl");
var ja = o(({ url: e, method: t, config: r, queryOptions: n, successNotification: s, errorNotification: a, meta: i2, metaData: c, dataProviderName: d3, overtimeOptions: u }) => {
  let p2 = ne(), l2 = J(), { mutate: y3 } = de({ v3LegacyAuthProviderCompatible: !!(l2 != null && l2.isLegacy) }), m2 = G(), T3 = pe(), L = q(), { keys: v3, preferLegacyKeys: g } = O2(), R2 = S(i2, c), { custom: M } = p2(d3), I2 = L({ meta: R2 });
  if (M) {
    let x = useQuery({ queryKey: v3().data(d3).mutation("custom").params({ method: t, url: e, ...r, ...R2 || {} }).get(g), queryFn: (f2) => M({ url: e, method: t, ...r, meta: { ...I2, queryContext: ke(f2) }, metaData: { ...I2, queryContext: ke(f2) } }), ...n, onSuccess: (f2) => {
      var b2;
      (b2 = n == null ? void 0 : n.onSuccess) == null || b2.call(n, f2);
      let U = typeof s == "function" ? s(f2, { ...r, ...I2 }) : s;
      T3(U);
    }, onError: (f2) => {
      var b2;
      y3(f2), (b2 = n == null ? void 0 : n.onError) == null || b2.call(n, f2);
      let U = typeof a == "function" ? a(f2, { ...r, ...I2 }) : a;
      T3(U, { key: `${t}-notification`, message: m2("notifications.error", { statusCode: f2.statusCode }, `Error (status code: ${f2.statusCode})`), description: f2.message, type: "error" });
    }, meta: { ...n == null ? void 0 : n.meta, ...P("useCustom", g) } }), { elapsedTime: P2 } = ee({ isLoading: x.isFetching, interval: u == null ? void 0 : u.interval, onInterval: u == null ? void 0 : u.onInterval });
    return { ...x, overtime: { elapsedTime: P2 } };
  }
  throw Error("Not implemented custom on data provider.");
}, "useCustom");
var Ya = o(({ mutationOptions: e, overtimeOptions: t } = {}) => {
  let r = J(), { mutate: n } = de({ v3LegacyAuthProviderCompatible: !!(r != null && r.isLegacy) }), s = pe(), a = ne(), i2 = G(), c = q(), { keys: d3, preferLegacyKeys: u } = O2(), p2 = useMutation(({ url: y3, method: m2, values: T3, meta: L, metaData: v3, dataProviderName: g, config: R2 }) => {
    let M = c({ meta: S(L, v3) }), { custom: I2 } = a(g);
    if (I2)
      return I2({ url: y3, method: m2, payload: T3, meta: M, metaData: M, headers: { ...R2 == null ? void 0 : R2.headers } });
    throw Error("Not implemented custom on data provider.");
  }, { onSuccess: (y3, { successNotification: m2, config: T3, meta: L, metaData: v3 }) => {
    let g = typeof m2 == "function" ? m2(y3, { ...T3, ...S(L, v3) || {} }) : m2;
    s(g);
  }, onError: (y3, { errorNotification: m2, method: T3, config: L, meta: v3, metaData: g }) => {
    n(y3);
    let R2 = typeof m2 == "function" ? m2(y3, { ...L, ...S(v3, g) || {} }) : m2;
    s(R2, { key: `${T3}-notification`, message: i2("notifications.error", { statusCode: y3.statusCode }, `Error (status code: ${y3.statusCode})`), description: y3.message, type: "error" });
  }, mutationKey: d3().data().mutation("customMutation").get(u), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useCustomMutation", u) } }), { elapsedTime: l2 } = ee({ isLoading: p2.isLoading, interval: t == null ? void 0 : t.interval, onInterval: t == null ? void 0 : t.onInterval });
  return { ...p2, overtime: { elapsedTime: l2 } };
}, "useCustomMutation");
var vn = { default: {} };
var Bt = import_react17.default.createContext(vn);
var Dn = o(({ children: e, dataProvider: t }) => {
  let r = vn;
  return t && (!("default" in t) && ("getList" in t || "getOne" in t) ? r = { default: t } : r = t), import_react17.default.createElement(Bt.Provider, { value: r }, e);
}, "DataContextProvider");
var ne = o(() => {
  let e = (0, import_react16.useContext)(Bt);
  return (0, import_react16.useCallback)((r) => {
    if (r) {
      let n = e == null ? void 0 : e[r];
      if (!n)
        throw new Error(`"${r}" Data provider not found`);
      if (n && !(e != null && e.default))
        throw new Error("If you have multiple data providers, you must provide default data provider property");
      return e[r];
    }
    if (e.default)
      return e.default;
    throw new Error('There is no "default" data provider. Please pass dataProviderName.');
  }, [e]);
}, "useDataProvider");
var ri = o(({ resource: e, config: t, filters: r, hasPagination: n, pagination: s, sorters: a, queryOptions: i2, successNotification: c, errorNotification: d3, meta: u, metaData: p2, liveMode: l2, onLiveEvent: y3, liveParams: m2, dataProviderName: T3, overtimeOptions: L }) => {
  let { resources: v3, resource: g, identifier: R2 } = z(e), M = ne(), I2 = G(), x = J(), { mutate: P2 } = de({ v3LegacyAuthProviderCompatible: !!(x != null && x.isLegacy) }), f2 = pe(), U = q(), { keys: b2, preferLegacyKeys: h } = O2(), E2 = _(R2, T3, v3), C = S(u, p2), D = S(r, t == null ? void 0 : t.filters), k = S(a, t == null ? void 0 : t.sort), w = S(n, t == null ? void 0 : t.hasPagination), Q = Ft({ pagination: s, configPagination: t == null ? void 0 : t.pagination, hasPagination: w }), F = Q.mode === "server", H = { meta: C, metaData: C, filters: D, hasPagination: F, pagination: Q, sorters: k, config: { ...t, sort: k } }, $ = (i2 == null ? void 0 : i2.enabled) === void 0 || (i2 == null ? void 0 : i2.enabled) === true, K = U({ resource: g, meta: C }), { getList: j } = M(E2);
  at({ resource: R2, types: ["*"], params: { meta: K, metaData: K, pagination: Q, hasPagination: F, sort: k, sorters: k, filters: D, subscriptionType: "useList", ...m2 }, channel: `resources/${g.name}`, enabled: $, liveMode: l2, onLiveEvent: y3, dataProviderName: E2, meta: { ...K, dataProviderName: T3 } });
  let B = useInfiniteQuery({ queryKey: b2().data(E2).resource(R2).action("infinite").params({ ...C || {}, filters: D, hasPagination: F, ...F && { pagination: Q }, ...a && { sorters: a }, ...(t == null ? void 0 : t.sort) && { sort: t == null ? void 0 : t.sort } }).get(h), queryFn: (V) => {
    let N = { ...Q, current: V.pageParam }, X = { ...K, queryContext: ke(V) };
    return j({ resource: g.name, pagination: N, hasPagination: F, filters: D, sort: k, sorters: k, meta: X, metaData: X }).then(({ data: oe, total: ie, ...De }) => ({ data: oe, total: ie, pagination: N, ...De }));
  }, getNextPageParam: (V) => rr(V), getPreviousPageParam: (V) => or(V), ...i2, onSuccess: (V) => {
    var X;
    (X = i2 == null ? void 0 : i2.onSuccess) == null || X.call(i2, V);
    let N = typeof c == "function" ? c(V, H, R2) : c;
    f2(N);
  }, onError: (V) => {
    var X;
    P2(V), (X = i2 == null ? void 0 : i2.onError) == null || X.call(i2, V);
    let N = typeof d3 == "function" ? d3(V, H, R2) : d3;
    f2(N, { key: `${R2}-useInfiniteList-notification`, message: I2("notifications.error", { statusCode: V.statusCode }, `Error (status code: ${V.statusCode})`), description: V.message, type: "error" });
  }, meta: { ...i2 == null ? void 0 : i2.meta, ...P("useInfiniteList", h, g == null ? void 0 : g.name) } }), { elapsedTime: W } = ee({ isLoading: B.isFetching, interval: L == null ? void 0 : L.interval, onInterval: L == null ? void 0 : L.onInterval });
  return { ...B, overtime: { elapsedTime: W } };
}, "useInfiniteList");
var et = import_react19.default.createContext({});
var Un = o(({ liveProvider: e, children: t }) => import_react19.default.createElement(et.Provider, { value: { liveProvider: e } }, t), "LiveContextProvider");
var Ce = o(() => {
  let { resources: e } = z(), t = useQueryClient(), { keys: r, preferLegacyKeys: n } = O2();
  return (0, import_react20.useCallback)(async ({ resource: a, dataProviderName: i2, invalidates: c, id: d3, invalidationFilters: u = { type: "all", refetchType: "active" }, invalidationOptions: p2 = { cancelRefetch: false } }) => {
    if (c === false)
      return;
    let l2 = _(a, i2, e), y3 = r().data(l2).resource(a ?? "");
    await Promise.all(c.map((m2) => {
      switch (m2) {
        case "all":
          return t.invalidateQueries(r().data(l2).get(n), u, p2);
        case "list":
          return t.invalidateQueries(y3.action("list").get(n), u, p2);
        case "many":
          return t.invalidateQueries(y3.action("many").get(n), u, p2);
        case "resourceAll":
          return t.invalidateQueries(y3.get(n), u, p2);
        case "detail":
          return t.invalidateQueries(y3.action("one").id(d3 || "").get(n), u, p2);
        default:
          return;
      }
    }));
  }, []);
}, "useInvalidate");
var En = o((e) => {
  let t = (0, import_react24.useRef)(e);
  return isEqual_default(t.current, e) || (t.current = e), t.current;
}, "useMemoized");
var gr = o((e, t) => {
  let r = En(t);
  return (0, import_react23.useMemo)(e, r);
}, "useDeepMemo");
var it = import_react22.default.createContext({ resources: [] });
var wn = o(({ resources: e, children: t }) => {
  let r = gr(() => nr(e ?? []), [e]);
  return import_react22.default.createElement(it.Provider, { value: { resources: r } }, t);
}, "ResourceContextProvider");
var Sn = import_react25.default.createContext("new");
var Fn = Sn.Provider;
var Z = o(() => import_react25.default.useContext(Sn), "useRouterType");
var An = {};
var tt = (0, import_react27.createContext)(An);
var kn = o(({ children: e, router: t }) => import_react27.default.createElement(tt.Provider, { value: t ?? An }, e), "RouterContextProvider");
var oo = o(() => {
  let e = (0, import_react28.useContext)(tt);
  return import_react28.default.useMemo(() => (e == null ? void 0 : e.parse) ?? (() => () => ({})), [e == null ? void 0 : e.parse])();
}, "useParse");
var ae = o(() => {
  let e = oo();
  return import_react26.default.useMemo(() => e(), [e]);
}, "useParsed");
function z(e) {
  let { resources: t } = (0, import_react21.useContext)(it), r = Z(), n = ae(), s = { resourceName: e && typeof e != "string" ? e.resourceName : e, resourceNameOrRouteName: e && typeof e != "string" ? e.resourceNameOrRouteName : e, recordItemId: e && typeof e != "string" ? e.recordItemId : void 0 }, a = o((l2, y3 = true) => {
    let T3 = ye(l2, t, r === "legacy");
    if (T3)
      return { resource: T3, identifier: T3.identifier ?? T3.name };
    if (y3) {
      let L = { name: l2, identifier: l2 }, v3 = L.identifier ?? L.name;
      return { resource: L, identifier: v3 };
    }
  }, "select"), i2 = Qn(), { useParams: c } = te(), d3 = c();
  if (r === "legacy") {
    let l2 = s.resourceNameOrRouteName ? s.resourceNameOrRouteName : d3.resource, y3 = l2 ? i2(l2) : void 0, m2 = (s == null ? void 0 : s.recordItemId) ?? d3.id, T3 = d3.action, L = (s == null ? void 0 : s.resourceName) ?? (y3 == null ? void 0 : y3.name), v3 = (y3 == null ? void 0 : y3.identifier) ?? (y3 == null ? void 0 : y3.name);
    return { resources: t, resource: y3, resourceName: L, id: m2, action: T3, select: a, identifier: v3 };
  }
  let u, p2 = typeof e == "string" ? e : s == null ? void 0 : s.resourceNameOrRouteName;
  if (p2) {
    let l2 = ye(p2, t);
    l2 ? u = l2 : u = { name: p2 };
  } else
    n != null && n.resource && (u = n.resource);
  return { resources: t, resource: u, resourceName: u == null ? void 0 : u.name, id: n.id, action: n.action, select: a, identifier: (u == null ? void 0 : u.identifier) ?? (u == null ? void 0 : u.name) };
}
o(z, "useResource");
var Qn = o(() => {
  let { resources: e } = (0, import_react29.useContext)(it);
  return (0, import_react29.useCallback)((r) => {
    let n = ye(r, e, true);
    return n || { name: r, route: r };
  }, [e]);
}, "useResourceWithRoute");
var at = o(({ resource: e, params: t, channel: r, types: n, enabled: s = true, liveMode: a, onLiveEvent: i2, dataProviderName: c, meta: d3 }) => {
  var g;
  let { resource: u, identifier: p2 } = z(e), { liveProvider: l2 } = (0, import_react18.useContext)(et), { liveMode: y3, onLiveEvent: m2 } = (0, import_react18.useContext)(ve), T3 = a ?? y3, L = Ce(), v3 = c ?? (d3 == null ? void 0 : d3.dataProviderName) ?? ((g = u == null ? void 0 : u.meta) == null ? void 0 : g.dataProviderName);
  (0, import_react18.useEffect)(() => {
    let R2, M = o((I2) => {
      T3 === "auto" && L({ resource: p2, dataProviderName: v3, invalidates: ["resourceAll"], invalidationFilters: { type: "active", refetchType: "active" }, invalidationOptions: { cancelRefetch: false } }), i2 == null || i2(I2), m2 == null || m2(I2);
    }, "callback");
    return T3 && T3 !== "off" && s && (R2 = l2 == null ? void 0 : l2.subscribe({ channel: r, params: { resource: u == null ? void 0 : u.name, ...t }, types: n, callback: M, dataProviderName: v3, meta: { ...d3, dataProviderName: v3 } })), () => {
      R2 && (l2 == null || l2.unsubscribe(R2));
    };
  }, [s]);
}, "useResourceSubscription");
var Bn = o((e) => {
  let { liveMode: t } = (0, import_react30.useContext)(ve);
  return e ?? t;
}, "useLiveMode");
var kx = o(({ params: e, channel: t, types: r = ["*"], enabled: n = true, onLiveEvent: s, dataProviderName: a = "default", meta: i2 }) => {
  let { liveProvider: c } = (0, import_react31.useContext)(et);
  (0, import_react31.useEffect)(() => {
    let d3;
    return n && (d3 = c == null ? void 0 : c.subscribe({ channel: t, params: e, types: r, callback: s, dataProviderName: a, meta: { ...i2, dataProviderName: a } })), () => {
      d3 && (c == null || c.unsubscribe(d3));
    };
  }, [n]);
}, "useSubscription");
var Be = o(() => {
  let { liveProvider: e } = (0, import_react32.useContext)(et);
  return e == null ? void 0 : e.publish;
}, "usePublish");
var so = (0, import_react34.createContext)({ notifications: [], notificationDispatch: () => false });
var bi = [];
var vi = o((e, t) => {
  switch (t.type) {
    case "ADD":
      return [...e.filter((n) => !(isEqual_default(n.id, t.payload.id) && n.resource === t.payload.resource)), { ...t.payload, isRunning: true }];
    case "REMOVE":
      return e.filter((r) => !(isEqual_default(r.id, t.payload.id) && r.resource === t.payload.resource));
    case "DECREASE_NOTIFICATION_SECOND":
      return e.map((r) => isEqual_default(r.id, t.payload.id) && r.resource === t.payload.resource ? { ...r, seconds: t.payload.seconds - 1e3 } : r);
    default:
      return e;
  }
}, "undoableQueueReducer");
var Kn = o(({ children: e }) => {
  let [t, r] = (0, import_react34.useReducer)(vi, bi), n = { notifications: t, notificationDispatch: r };
  return import_react34.default.createElement(so.Provider, { value: n }, e, typeof window < "u" ? t.map((s) => import_react34.default.createElement(Gn, { key: `${s.id}-${s.resource}-queue`, notification: s })) : null);
}, "UndoableQueueContextProvider");
var je = o(() => {
  let { notifications: e, notificationDispatch: t } = (0, import_react33.useContext)(so);
  return { notifications: e, notificationDispatch: t };
}, "useCancelNotification");
var Nt = (0, import_react36.createContext)({});
var Hn = o(({ open: e, close: t, children: r }) => import_react36.default.createElement(Nt.Provider, { value: { open: e, close: t } }, r), "NotificationContextProvider");
var we = o(() => {
  let { open: e, close: t } = (0, import_react35.useContext)(Nt);
  return { open: e, close: t };
}, "useNotification");
var pe = o(() => {
  let { open: e } = we();
  return (0, import_react37.useCallback)((r, n) => {
    r !== false && (r ? e == null || e(r) : n && (e == null || e(n)));
  }, []);
}, "useHandleNotification");
var Qe = import_react39.default.createContext({});
var Wn = o(({ children: e, i18nProvider: t }) => import_react39.default.createElement(Qe.Provider, { value: { i18nProvider: t } }, e), "I18nContextProvider");
var ao = o(() => {
  let { i18nProvider: e } = (0, import_react38.useContext)(Qe);
  return (0, import_react38.useCallback)((t) => e == null ? void 0 : e.changeLocale(t), []);
}, "useSetLocale");
var G = o(() => {
  let { i18nProvider: e } = (0, import_react40.useContext)(Qe);
  return (0, import_react40.useMemo)(() => {
    function r(n, s, a) {
      return (e == null ? void 0 : e.translate(n, s, a)) ?? a ?? (typeof s == "string" && typeof a > "u" ? s : n);
    }
    return o(r, "translate"), r;
  }, [e]);
}, "useTranslate");
var io = o(() => {
  let { i18nProvider: e } = (0, import_react41.useContext)(Qe);
  return (0, import_react41.useCallback)(() => e == null ? void 0 : e.getLocale(), []);
}, "useGetLocale");
var MR = o(() => {
  let e = G(), t = ao(), r = io();
  return { translate: e, changeLocale: t, getLocale: r };
}, "useTranslation");
var HR = o(({ resourceName: e, resource: t, sorter: r, sorters: n, filters: s, maxItemCount: a, pageSize: i2 = 20, mapData: c = o((L) => L, "mapData"), exportOptions: d3, unparseConfig: u, meta: p2, metaData: l2, dataProviderName: y3, onError: m2, download: T3 } = {}) => {
  let [L, v3] = (0, import_react42.useState)(false), g = ne(), R2 = q(), { resource: M, resources: I2, identifier: x } = z(S(t, e)), f2 = `${st()(x, "plural")}-${(/* @__PURE__ */ new Date()).toLocaleString()}`, { getList: U } = g(_(x, y3, I2)), b2 = R2({ resource: M, meta: S(p2, l2) });
  return { isLoading: L, triggerExport: o(async () => {
    v3(true);
    let E2 = [], C = 1, D = true;
    for (; D; )
      try {
        let { data: F, total: H } = await U({ resource: (M == null ? void 0 : M.name) ?? "", filters: s, sort: S(n, r), sorters: S(n, r), pagination: { current: C, pageSize: i2, mode: "server" }, meta: b2, metaData: b2 });
        C++, E2.push(...F), a && E2.length >= a && (E2 = E2.slice(0, a), D = false), H === E2.length && (D = false);
      } catch (F) {
        v3(false), D = false, m2 == null || m2(F);
        return;
      }
    let k = typeof u < "u" && u !== null;
    (0, import_warn_once2.default)(k && typeof d3 < "u" && d3 !== null, `[useExport]: resource: "${x}" 

Both \`unparseConfig\` and \`exportOptions\` are set, \`unparseConfig\` will take precedence`);
    let w = { filename: f2, useKeysAsHeaders: true, useBom: true, title: "My Generated Report", quoteStrings: '"', ...d3 };
    (0, import_warn_once2.default)((d3 == null ? void 0 : d3.decimalSeparator) !== void 0, `[useExport]: resource: "${x}" 

Use of \`decimalSeparator\` no longer supported, please use \`mapData\` instead.

See https://refine.dev/docs/api-reference/core/hooks/import-export/useExport/`), k ? u = { quotes: true, ...u } : u = { columns: w.useKeysAsHeaders ? void 0 : w.headers, delimiter: w.fieldSeparator, header: w.showLabels || w.useKeysAsHeaders, quoteChar: w.quoteStrings, quotes: true };
    let Q = import_papaparse.default.unparse(E2.map(c), u);
    if (w.showTitle && (Q = `${w.title}\r

${Q}`), typeof window < "u" && Q.length > 0 && (T3 ?? true)) {
      let F = w.useTextFile ? ".txt" : ".csv", H = `text/${w.useTextFile ? "plain" : "csv"};charset=utf8;`, $ = `${(w.filename ?? "download").replace(/ /g, "_")}${F}`;
      Kr($, `${w != null && w.useBom ? "\uFEFF" : ""}${Q}`, H);
    }
    return v3(false), Q;
  }, "triggerExport") };
}, "useExport");
var XR = o((e = {}) => {
  var K, j, B, W, V;
  let t = q(), r = Ce(), { redirect: n } = Ct(), { mutationMode: s } = Ae(), { setWarnWhen: a } = pt(), i2 = _n(), c = S(e.meta, e.metaData), d3 = e.mutationMode ?? s, { id: u, setId: p2, resource: l2, identifier: y3, formAction: m2 } = Ke({ resource: e.resource, id: e.id, action: e.action }), [T3, L] = import_react43.default.useState(false), v3 = m2 === "edit", g = m2 === "clone", R2 = m2 === "create", M = t({ resource: l2, meta: c }), I2 = (v3 || g) && !!e.resource, x = typeof e.id < "u", P2 = ((K = e.queryOptions) == null ? void 0 : K.enabled) === false;
  (0, import_warn_once3.default)(I2 && !x && !P2, $i(m2, y3, u));
  let f2 = Vr({ redirectFromProps: e.redirect, action: m2, redirectOptions: n }), U = o((N = v3 ? "list" : "edit", X = u, oe = {}) => {
    i2({ redirect: N, resource: l2, id: X, meta: { ...c, ...oe } });
  }, "redirect"), b2 = Qt({ resource: y3, id: u, queryOptions: { enabled: !R2 && u !== void 0, ...e.queryOptions }, liveMode: e.liveMode, onLiveEvent: e.onLiveEvent, liveParams: e.liveParams, meta: { ...M, ...e.queryMeta }, dataProviderName: e.dataProviderName }), h = Vt({ mutationOptions: e.createMutationOptions }), E2 = eo({ mutationOptions: e.updateMutationOptions }), C = v3 ? E2 : h, k = C.isLoading || b2.isFetching, { elapsedTime: w } = ee({ isLoading: k, interval: (j = e.overtimeOptions) == null ? void 0 : j.interval, onInterval: (B = e.overtimeOptions) == null ? void 0 : B.onInterval });
  import_react43.default.useEffect(() => () => {
    var N;
    (N = e.autoSave) != null && N.invalidateOnUnmount && T3 && y3 && typeof u < "u" && r({ id: u, invalidates: e.invalidates || ["list", "many", "detail"], dataProviderName: e.dataProviderName, resource: y3 });
  }, [(W = e.autoSave) == null ? void 0 : W.invalidateOnUnmount, T3]);
  let Q = o(async (N, { isAutosave: X = false } = {}) => {
    let oe = d3 === "pessimistic";
    a(false);
    let ie = o((Y) => U(f2, Y), "onSuccessRedirect");
    return new Promise((Y, xe) => {
      if (!l2)
        return xe(Ni);
      if (g && !u)
        return xe(Ki);
      if (!N)
        return xe(Gi);
      if (X && !v3)
        return xe(Hi);
      !oe && !X && (ur(() => ie()), Y());
      let yt = { values: N, resource: y3 ?? l2.name, meta: { ...M, ...e.mutationMeta }, metaData: { ...M, ...e.mutationMeta }, dataProviderName: e.dataProviderName, invalidates: X ? [] : e.invalidates, successNotification: X ? false : e.successNotification, errorNotification: X ? false : e.errorNotification, ...v3 ? { id: u ?? "", mutationMode: d3, undoableTimeout: e.undoableTimeout, optimisticUpdateMap: e.optimisticUpdateMap } : {} }, { mutateAsync: gt } = v3 ? E2 : h;
      gt(yt, { onSuccess: e.onMutationSuccess ? (Se, Ze, ut) => {
        var nt;
        (nt = e.onMutationSuccess) == null || nt.call(e, Se, N, ut, X);
      } : void 0, onError: e.onMutationError ? (Se, Ze, ut) => {
        var nt;
        (nt = e.onMutationError) == null || nt.call(e, Se, N, ut, X);
      } : void 0 }).then((Se) => {
        oe && !X && ur(() => {
          var Ze;
          return ie((Ze = Se == null ? void 0 : Se.data) == null ? void 0 : Ze.id);
        }), X && L(true), Y(Se);
      }).catch(xe);
    });
  }, "onFinish"), F = Gr((N) => Q(N, { isAutosave: true }), ((V = e.autoSave) == null ? void 0 : V.debounce) || 1e3, "Cancelled by debounce"), H = { elapsedTime: w }, $ = { status: E2.status, data: E2.data, error: E2.error };
  return { onFinish: Q, onFinishAutoSave: F, formLoading: k, mutationResult: C, queryResult: b2, autoSaveProps: $, id: u, setId: p2, redirect: U, overtime: H };
}, "useForm");
var Ni = new Error("[useForm]: `resource` is not defined or not matched but is required");
var Ki = new Error("[useForm]: `id` is not defined but is required in edit and clone actions");
var Gi = new Error("[useForm]: `values` is not provided but is required");
var Hi = new Error("[useForm]: `autoSave` is only allowed in edit action");
var $i = o((e, t, r) => `[useForm]: action: "${e}", resource: "${t}", id: ${r}

If you don't use the \`setId\` method to set the \`id\`, you should pass the \`id\` prop to \`useForm\`. Otherwise, \`useForm\` will not be able to infer the \`id\` from the current URL with custom resource provided.

See https://refine.dev/docs/data/hooks/use-form/#id-`, "idWarningMessage");
var _n = o(() => {
  let { show: e, edit: t, list: r, create: n } = ce();
  return (0, import_react44.useCallback)(({ redirect: a, resource: i2, id: c, meta: d3 = {} }) => {
    if (a && i2)
      return i2.show && a === "show" && c ? e(i2, c, void 0, d3) : i2.edit && a === "edit" && c ? t(i2, c, void 0, d3) : i2.create && a === "create" ? n(i2, void 0, d3) : r(i2, "push", d3);
  }, []);
}, "useRedirectionAfterSubmission");
var uo = o(() => {
  let e = (0, import_react45.useContext)(tt);
  return import_react45.default.useMemo(() => (e == null ? void 0 : e.back) ?? (() => () => {
  }), [e == null ? void 0 : e.back])();
}, "useBack");
var lt = o(() => {
  let e = Z(), { resource: t, resources: r } = z(), n = ae();
  return import_react47.default.useCallback(({ resource: a, action: i2, meta: c }) => {
    var y3;
    let d3 = a || t;
    if (!d3)
      return;
    let p2 = (y3 = he(d3, r, e === "legacy").find((m2) => m2.action === i2)) == null ? void 0 : y3.route;
    return p2 ? Me(p2, d3 == null ? void 0 : d3.meta, n, c) : void 0;
  }, [r, t, n]);
}, "useGetToPath");
var ge = o(() => {
  let e = (0, import_react46.useContext)(tt), { select: t } = z(), r = lt(), s = import_react46.default.useMemo(() => (e == null ? void 0 : e.go) ?? (() => () => {
  }), [e == null ? void 0 : e.go])();
  return (0, import_react46.useCallback)((i2) => {
    if (typeof i2.to != "object")
      return s({ ...i2, to: i2.to });
    let { resource: c } = t(i2.to.resource);
    Yi(i2.to, c);
    let d3 = r({ resource: c, action: i2.to.action, meta: { id: i2.to.id, ...i2.to.meta } });
    return s({ ...i2, to: d3 });
  }, [t, s]);
}, "useGo");
var Yi = o((e, t) => {
  if (!(e != null && e.action) || !(e != null && e.resource))
    throw new Error('[useGo]: "action" or "resource" is required.');
  if (["edit", "show", "clone"].includes(e == null ? void 0 : e.action) && !e.id)
    throw new Error(`[useGo]: [action: ${e.action}] requires an "id" for resource [resource: ${e.resource}]`);
  if (!t[e.action])
    throw new Error(`[useGo]: [action: ${e.action}] is not defined for [resource: ${e.resource}]`);
}, "handleResourceErrors");
var ce = o(() => {
  let { resources: e } = z(), t = Z(), { useHistory: r } = te(), n = r(), s = ae(), a = ge(), i2 = uo(), c = o((x, P2 = "push") => {
    t === "legacy" ? n[P2](x) : a({ to: x, type: P2 });
  }, "handleUrl"), d3 = o((x, P2 = {}) => {
    var b2;
    if (t === "legacy") {
      let h = typeof x == "string" ? ye(x, e, true) ?? { name: x, route: x } : x, E2 = he(h, e, true).find((C) => C.action === "create");
      return E2 ? Me(E2.route, h == null ? void 0 : h.meta, s, P2) : "";
    }
    let f2 = typeof x == "string" ? ye(x, e) ?? { name: x } : x, U = (b2 = he(f2, e).find((h) => h.action === "create")) == null ? void 0 : b2.route;
    return U ? a({ to: Me(U, f2 == null ? void 0 : f2.meta, s, P2), type: "path" }) : "";
  }, "createUrl"), u = o((x, P2, f2 = {}) => {
    var E2;
    let U = encodeURIComponent(P2);
    if (t === "legacy") {
      let C = typeof x == "string" ? ye(x, e, true) ?? { name: x, route: x } : x, D = he(C, e, true).find((k) => k.action === "edit");
      return D ? Me(D.route, C == null ? void 0 : C.meta, s, { ...f2, id: U }) : "";
    }
    let b2 = typeof x == "string" ? ye(x, e) ?? { name: x } : x, h = (E2 = he(b2, e).find((C) => C.action === "edit")) == null ? void 0 : E2.route;
    return h ? a({ to: Me(h, b2 == null ? void 0 : b2.meta, s, { ...f2, id: U }), type: "path" }) : "";
  }, "editUrl"), p2 = o((x, P2, f2 = {}) => {
    var E2;
    let U = encodeURIComponent(P2);
    if (t === "legacy") {
      let C = typeof x == "string" ? ye(x, e, true) ?? { name: x, route: x } : x, D = he(C, e, true).find((k) => k.action === "clone");
      return D ? Me(D.route, C == null ? void 0 : C.meta, s, { ...f2, id: U }) : "";
    }
    let b2 = typeof x == "string" ? ye(x, e) ?? { name: x } : x, h = (E2 = he(b2, e).find((C) => C.action === "clone")) == null ? void 0 : E2.route;
    return h ? a({ to: Me(h, b2 == null ? void 0 : b2.meta, s, { ...f2, id: U }), type: "path" }) : "";
  }, "cloneUrl"), l2 = o((x, P2, f2 = {}) => {
    var E2;
    let U = encodeURIComponent(P2);
    if (t === "legacy") {
      let C = typeof x == "string" ? ye(x, e, true) ?? { name: x, route: x } : x, D = he(C, e, true).find((k) => k.action === "show");
      return D ? Me(D.route, C == null ? void 0 : C.meta, s, { ...f2, id: U }) : "";
    }
    let b2 = typeof x == "string" ? ye(x, e) ?? { name: x } : x, h = (E2 = he(b2, e).find((C) => C.action === "show")) == null ? void 0 : E2.route;
    return h ? a({ to: Me(h, b2 == null ? void 0 : b2.meta, s, { ...f2, id: U }), type: "path" }) : "";
  }, "showUrl"), y3 = o((x, P2 = {}) => {
    var b2;
    if (t === "legacy") {
      let h = typeof x == "string" ? ye(x, e, true) ?? { name: x, route: x } : x, E2 = he(h, e, true).find((C) => C.action === "list");
      return E2 ? Me(E2.route, h == null ? void 0 : h.meta, s, P2) : "";
    }
    let f2 = typeof x == "string" ? ye(x, e) ?? { name: x } : x, U = (b2 = he(f2, e).find((h) => h.action === "list")) == null ? void 0 : b2.route;
    return U ? a({ to: Me(U, f2 == null ? void 0 : f2.meta, s, P2), type: "path" }) : "";
  }, "listUrl");
  return { create: o((x, P2 = "push", f2 = {}) => {
    c(d3(x, f2), P2);
  }, "create"), createUrl: d3, edit: o((x, P2, f2 = "push", U = {}) => {
    c(u(x, P2, U), f2);
  }, "edit"), editUrl: u, clone: o((x, P2, f2 = "push", U = {}) => {
    c(p2(x, P2, U), f2);
  }, "clone"), cloneUrl: p2, show: o((x, P2, f2 = "push", U = {}) => {
    c(l2(x, P2, U), f2);
  }, "show"), showUrl: l2, list: o((x, P2 = "push", f2 = {}) => {
    c(y3(x, f2), P2);
  }, "list"), listUrl: y3, push: o((x, ...P2) => {
    t === "legacy" ? n.push(x, ...P2) : a({ to: x, type: "push" });
  }, "push"), replace: o((x, ...P2) => {
    t === "legacy" ? n.replace(x, ...P2) : a({ to: x, type: "replace" });
  }, "replace"), goBack: o(() => {
    t === "legacy" ? n.goBack() : i2();
  }, "goBack") };
}, "useNavigation");
var Fh = o(({ resource: e, id: t, meta: r, metaData: n, queryOptions: s, overtimeOptions: a, ...i2 } = {}) => {
  let { resource: c, identifier: d3, id: u, setId: p2 } = Ke({ id: t, resource: e }), y3 = q()({ resource: c, meta: S(r, n) });
  (0, import_warn_once4.default)(!!e && !u, qi(d3, u));
  let m2 = Qt({ resource: d3, id: u ?? "", queryOptions: { enabled: u !== void 0, ...s }, meta: y3, metaData: y3, ...i2 }), { elapsedTime: T3 } = ee({ isLoading: m2.isFetching, interval: a == null ? void 0 : a.interval, onInterval: a == null ? void 0 : a.onInterval });
  return { queryResult: m2, showId: u, setShowId: p2, overtime: { elapsedTime: T3 } };
}, "useShow");
var qi = o((e, t) => `[useShow]: resource: "${e}", id: ${t} 

If you don't use the \`setShowId\` method to set the \`showId\`, you should pass the \`id\` prop to \`useShow\`. Otherwise, \`useShow\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/data/hooks/use-show/#resource`, "idWarningMessage");
var Gh = o(({ resourceName: e, resource: t, mapData: r = o((p2) => p2, "mapData"), paparseOptions: n, batchSize: s = Number.MAX_SAFE_INTEGER, onFinish: a, meta: i2, metaData: c, onProgress: d3, dataProviderName: u } = {}) => {
  let [p2, l2] = (0, import_react48.useState)(0), [y3, m2] = (0, import_react48.useState)(0), [T3, L] = (0, import_react48.useState)(false), { resource: v3, identifier: g } = z(t ?? e), R2 = q(), M = ro(), I2 = Vt(), x = R2({ resource: v3, meta: S(i2, c) }), P2;
  s === 1 ? P2 = I2 : P2 = M;
  let f2 = o(() => {
    m2(0), l2(0), L(false);
  }, "handleCleanup"), U = o((h) => {
    let E2 = { succeeded: h.filter((C) => C.type === "success"), errored: h.filter((C) => C.type === "error") };
    a == null || a(E2), L(false);
  }, "handleFinish");
  (0, import_react48.useEffect)(() => {
    d3 == null || d3({ totalAmount: y3, processedAmount: p2 });
  }, [y3, p2]);
  let b2 = o(({ file: h }) => (f2(), new Promise((E2) => {
    L(true), import_papaparse2.default.parse(h, { complete: async ({ data: C }) => {
      let D = $t(C, r);
      if (m2(D.length), s === 1) {
        let k = D.map((Q) => o(async () => ({ response: await I2.mutateAsync({ resource: g ?? "", values: Q, successNotification: false, errorNotification: false, dataProviderName: u, meta: x, metaData: x }), value: Q }), "fn")), w = await tr(k, ({ response: Q, value: F }) => (l2((H) => H + 1), { response: [Q.data], type: "success", request: [F] }), (Q, F) => ({ response: [Q], type: "error", request: [D[F]] }));
        E2(w);
      } else {
        let k = chunk_default(D, s), w = k.map((F) => o(async () => ({ response: await M.mutateAsync({ resource: g ?? "", values: F, successNotification: false, errorNotification: false, dataProviderName: u, meta: x, metaData: x }), value: F, currentBatchLength: F.length }), "fn")), Q = await tr(w, ({ response: F, currentBatchLength: H, value: $ }) => (l2((K) => K + H), { response: F.data, type: "success", request: $ }), (F, H) => ({ response: [F], type: "error", request: k[H] }));
        E2(Q);
      }
    }, ...n });
  }).then((E2) => (U(E2), E2))), "handleChange");
  return { inputProps: { type: "file", accept: ".csv", onChange: (h) => {
    h.target.files && h.target.files.length > 0 && b2({ file: h.target.files[0] });
  } }, mutationResult: P2, isLoading: T3, handleChange: b2 };
}, "useImport");
var Oh = o(({ defaultVisible: e = false } = {}) => {
  let [t, r] = (0, import_react49.useState)(e), n = (0, import_react49.useCallback)(() => r(true), [t]), s = (0, import_react49.useCallback)(() => r(false), [t]);
  return { visible: t, show: n, close: s };
}, "useModal");
var nu = o(({ resource: e, action: t, meta: r, legacy: n }) => lt()({ resource: e, action: t, meta: r, legacy: n }), "useToPath");
var rt = o(() => {
  let e = (0, import_react50.useContext)(tt);
  return e != null && e.Link ? e.Link : o(({ to: r, ...n }) => import_react50.default.createElement("a", { href: r, ...n }), "FallbackLink");
}, "useLink");
var ot = { useHistory: () => false, useLocation: () => false, useParams: () => ({}), Prompt: () => null, Link: () => null };
var Kt = import_react52.default.createContext(ot);
var Zn = o(({ children: e, useHistory: t, useLocation: r, useParams: n, Prompt: s, Link: a, routes: i2 }) => import_react52.default.createElement(Kt.Provider, { value: { useHistory: t ?? ot.useHistory, useLocation: r ?? ot.useLocation, useParams: n ?? ot.useParams, Prompt: s ?? ot.Prompt, Link: a ?? ot.Link, routes: i2 ?? ot.routes } }, e), "LegacyRouterContextProvider");
var te = o(() => {
  let e = (0, import_react51.useContext)(Kt), { useHistory: t, useLocation: r, useParams: n, Prompt: s, Link: a, routes: i2 } = e ?? ot;
  return { useHistory: t, useLocation: r, useParams: n, Prompt: s, Link: a, routes: i2 };
}, "useRouterContext");
var Xe = import_react54.default.createContext({ options: { buttons: { enableAccessControl: true, hideIfUnauthorized: false } } });
var Jn = o(({ can: e, children: t, options: r }) => import_react54.default.createElement(Xe.Provider, { value: { can: e, options: r ? { ...r, buttons: { enableAccessControl: true, hideIfUnauthorized: false, ...r.buttons } } : { buttons: { enableAccessControl: true, hideIfUnauthorized: false }, queryOptions: void 0 } } }, t), "AccessControlContextProvider");
var bt = o((e) => {
  if (!e)
    return;
  let { icon: t, list: r, edit: n, create: s, show: a, clone: i2, children: c, meta: d3, options: u, ...p2 } = e, { icon: l2, ...y3 } = d3 ?? {}, { icon: m2, ...T3 } = u ?? {};
  return { ...p2, ...d3 ? { meta: y3 } : {}, ...u ? { options: T3 } : {} };
}, "sanitizeResource");
var Tr = o(({ action: e, resource: t, params: r, queryOptions: n }) => {
  let { can: s, options: a } = (0, import_react53.useContext)(Xe), { keys: i2, preferLegacyKeys: c } = O2(), { queryOptions: d3 } = a || {}, u = { ...d3, ...n }, { resource: p2, ...l2 } = r ?? {}, y3 = bt(p2), m2 = useQuery({ queryKey: i2().access().resource(t).action(e).params({ params: { ...l2, resource: y3 }, enabled: u == null ? void 0 : u.enabled }).get(c), queryFn: () => (s == null ? void 0 : s({ action: e, resource: t, params: { ...l2, resource: y3 } })) ?? Promise.resolve({ can: true }), enabled: typeof s < "u", ...u, meta: { ...u == null ? void 0 : u.meta, ...P("useCan", c, t, ["useButtonCanAccess", "useNavigationButton"]) }, retry: false });
  return typeof s > "u" ? { data: { can: true } } : m2;
}, "useCan");
var QC = o(() => {
  let { can: e } = import_react55.default.useContext(Xe);
  return { can: import_react55.default.useMemo(() => e ? o(async ({ params: n, ...s }) => {
    let a = n != null && n.resource ? bt(n.resource) : void 0;
    return e({ ...s, ...n ? { params: { ...n, resource: a } } : {} });
  }, "canWithSanitizedResource") : void 0, [e]) };
}, "useCanWithoutCache");
var XC = o((e) => {
  let [t, r] = (0, import_react56.useState)([]), [n, s] = (0, import_react56.useState)([]), [a, i2] = (0, import_react56.useState)([]), { resource: c, sort: d3, sorters: u, filters: p2 = [], optionLabel: l2 = "title", optionValue: y3 = "id", searchField: m2 = typeof l2 == "string" ? l2 : "title", debounce: T3 = 300, successNotification: L, errorNotification: v3, defaultValueQueryOptions: g, queryOptions: R2, fetchSize: M, pagination: I2, hasPagination: x = false, liveMode: P2, defaultValue: f2 = [], onLiveEvent: U, onSearch: b2, liveParams: h, meta: E2, metaData: C, dataProviderName: D, overtimeOptions: k } = e, w = (0, import_react56.useCallback)((Y) => typeof l2 == "string" ? get_default(Y, l2) : l2(Y), [l2]), Q = (0, import_react56.useCallback)((Y) => typeof y3 == "string" ? get_default(Y, y3) : y3(Y), [y3]), { resource: F, identifier: H } = z(c), K = q()({ resource: F, meta: S(E2, C) }), j = Array.isArray(f2) ? f2 : [f2], B = (0, import_react56.useCallback)((Y) => {
    i2(Y.data.map((xe) => ({ label: w(xe), value: Q(xe) })));
  }, [l2, y3]), W = g ?? R2, V = qr({ resource: H, ids: j, queryOptions: { ...W, enabled: j.length > 0 && ((W == null ? void 0 : W.enabled) ?? true), onSuccess: (Y) => {
    var xe;
    B(Y), (xe = W == null ? void 0 : W.onSuccess) == null || xe.call(W, Y);
  } }, meta: K, metaData: K, liveMode: "off", dataProviderName: D }), N = (0, import_react56.useCallback)((Y) => {
    s(Y.data.map((xe) => ({ label: w(xe), value: Q(xe) })));
  }, [l2, y3]), X = kt({ resource: H, sorters: S(u, d3), filters: p2.concat(t), pagination: { current: I2 == null ? void 0 : I2.current, pageSize: (I2 == null ? void 0 : I2.pageSize) ?? M, mode: I2 == null ? void 0 : I2.mode }, hasPagination: x, queryOptions: { ...R2, onSuccess: (Y) => {
    var xe;
    N(Y), (xe = R2 == null ? void 0 : R2.onSuccess) == null || xe.call(R2, Y);
  } }, successNotification: L, errorNotification: v3, meta: K, metaData: K, liveMode: P2, liveParams: h, onLiveEvent: U, dataProviderName: D }), oe = o((Y) => {
    if (b2) {
      r(b2(Y));
      return;
    }
    if (!Y) {
      r([]);
      return;
    }
    r([{ field: m2, operator: "contains", value: Y }]);
  }, "onSearch"), { elapsedTime: ie } = ee({ isLoading: X.isFetching || V.isFetching, interval: k == null ? void 0 : k.interval, onInterval: k == null ? void 0 : k.onInterval }), De = (0, import_react56.useMemo)(() => uniqBy_default([...n, ...a], "value"), [n, a]);
  return { queryResult: X, defaultValueQueryResult: V, options: De, onSearch: debounce_default(oe, T3), overtime: { elapsedTime: ie } };
}, "useSelect");
var os = [];
var ns = [];
function cb({ initialCurrent: e, initialPageSize: t, hasPagination: r = true, pagination: n, initialSorter: s, permanentSorter: a = ns, defaultSetFilterBehavior: i2, initialFilter: c, permanentFilter: d3 = os, filters: u, sorters: p2, syncWithLocation: l2, resource: y3, successNotification: m2, errorNotification: T3, queryOptions: L, liveMode: v3, onLiveEvent: g, liveParams: R2, meta: M, metaData: I2, dataProviderName: x, overtimeOptions: P2 } = {}) {
  var bo, vo, Do, Lo, Uo;
  let { syncWithLocation: f2 } = Nr(), U = l2 ?? f2, b2 = Bn(v3), h = Z(), { useLocation: E2 } = te(), { search: C, pathname: D } = E2(), k = q(), w = ae(), Q = ((u == null ? void 0 : u.mode) || "server") === "server", F = ((p2 == null ? void 0 : p2.mode) || "server") === "server", H = r === false ? "off" : "server", $ = ((n == null ? void 0 : n.mode) ?? H) !== "off", K = S(n == null ? void 0 : n.current, e), j = S(n == null ? void 0 : n.pageSize, t), B = S(M, I2), { parsedCurrent: W, parsedPageSize: V, parsedSorter: N, parsedFilters: X } = cr(C ?? "?"), oe = S(u == null ? void 0 : u.initial, c), ie = S(u == null ? void 0 : u.permanent, d3) ?? os, De = S(p2 == null ? void 0 : p2.initial, s), Y = S(p2 == null ? void 0 : p2.permanent, a) ?? ns, xe = S(u == null ? void 0 : u.defaultBehavior, i2) ?? "merge", yt, gt, Se, Ze;
  U ? (yt = ((bo = w == null ? void 0 : w.params) == null ? void 0 : bo.current) || W || K || 1, gt = ((vo = w == null ? void 0 : w.params) == null ? void 0 : vo.pageSize) || V || j || 10, Se = ((Do = w == null ? void 0 : w.params) == null ? void 0 : Do.sorters) || (N.length ? N : De), Ze = ((Lo = w == null ? void 0 : w.params) == null ? void 0 : Lo.filters) || (X.length ? X : oe)) : (yt = K || 1, gt = j || 10, Se = De, Ze = oe);
  let { replace: ut } = ce(), nt = ge(), { resource: Fs, identifier: Er } = z(y3), To = k({ resource: Fs, meta: B });
  import_react57.default.useEffect(() => {
    (0, import_warn_once5.default)(typeof Er > "u", "useTable: `resource` is not defined.");
  }, [Er]);
  let [ct, Po] = (0, import_react57.useState)(mr(Y, Se ?? [])), [Et, Ht] = (0, import_react57.useState)(lr(ie, Ze ?? [])), [Mt, xo] = (0, import_react57.useState)(yt), [dt, Ro] = (0, import_react57.useState)(gt), ho = o(() => {
    if (h === "new") {
      let { sorters: Eo, filters: dc, pageSize: pc, current: lc, ...Ks } = (w == null ? void 0 : w.params) ?? {};
      return Ks;
    }
    let { sorter: Re, filters: $e, pageSize: wr, current: Ir, ...Sr } = import_qs4.default.parse(C, { ignoreQueryPrefix: true });
    return Sr;
  }, "getCurrentQueryParams"), As = o(({ pagination: { current: Re, pageSize: $e }, sorter: wr, filters: Ir }) => {
    if (h === "new")
      return nt({ type: "path", options: { keepHash: true, keepQuery: true }, query: { ...$ ? { current: Re, pageSize: $e } : {}, sorters: wr, filters: Ir, ...ho() } }) ?? "";
    let Sr = import_qs4.default.parse(C == null ? void 0 : C.substring(1)), Eo = dr({ pagination: { pageSize: $e, current: Re }, sorters: ct ?? wr, filters: Ir, ...Sr });
    return `${D ?? ""}?${Eo ?? ""}`;
  }, "createLinkForSyncWithLocation");
  (0, import_react57.useEffect)(() => {
    C === "" && (xo(yt), Ro(gt), Po(mr(Y, Se ?? [])), Ht(lr(ie, Ze ?? [])));
  }, [C]), (0, import_react57.useEffect)(() => {
    if (U) {
      let Re = ho();
      if (h === "new")
        nt({ type: "replace", options: { keepQuery: true }, query: { ...$ ? { pageSize: dt, current: Mt } : {}, sorters: differenceWith_default(ct, Y, isEqual_default), filters: differenceWith_default(Et, ie, isEqual_default) } });
      else {
        let $e = dr({ ...$ ? { pagination: { pageSize: dt, current: Mt } } : {}, sorters: differenceWith_default(ct, Y, isEqual_default), filters: differenceWith_default(Et, ie, isEqual_default), ...Re });
        return ut == null ? void 0 : ut(`${D}?${$e}`, void 0, { shallow: true });
      }
    }
  }, [U, Mt, dt, ct, Et]);
  let Mr = kt({ resource: Er, hasPagination: r, pagination: { current: Mt, pageSize: dt, mode: n == null ? void 0 : n.mode }, filters: Q ? Rt(ie, Et) : void 0, sorters: F ? pr(Y, ct) : void 0, queryOptions: L, successNotification: m2, errorNotification: T3, meta: To, metaData: To, liveMode: b2, liveParams: R2, onLiveEvent: g, dataProviderName: x }), ks = o((Re) => {
    Ht(($e) => Rt(ie, Re, $e));
  }, "setFiltersAsMerge"), Qs = o((Re) => {
    Ht(Rt(ie, Re));
  }, "setFiltersAsReplace"), Vs = o((Re) => {
    Ht(($e) => Rt(ie, Re($e)));
  }, "setFiltersWithSetter"), Bs = o((Re, $e = xe) => {
    typeof Re == "function" ? Vs(Re) : $e === "replace" ? Qs(Re) : ks(Re);
  }, "setFiltersFn"), Co = o((Re) => {
    Po(() => pr(Y, Re));
  }, "setSortWithUnion"), { elapsedTime: Ns } = ee({ isLoading: Mr.isFetching, interval: P2 == null ? void 0 : P2.interval, onInterval: P2 == null ? void 0 : P2.onInterval });
  return { tableQueryResult: Mr, sorters: ct, setSorters: Co, sorter: ct, setSorter: Co, filters: Et, setFilters: Bs, current: Mt, setCurrent: xo, pageSize: dt, setPageSize: Ro, pageCount: dt ? Math.ceil((((Uo = Mr.data) == null ? void 0 : Uo.total) ?? 0) / dt) : 1, createLinkForSyncWithLocation: As, overtime: { elapsedTime: Ns } };
}
o(cb, "useTable");
var mt = import_react59.default.createContext({});
var as = o(({ create: e, get: t, update: r, children: n }) => import_react59.default.createElement(mt.Provider, { value: { create: e, get: t, update: r } }, n), "AuditLogContextProvider");
var Ne = o(({ logMutationOptions: e, renameMutationOptions: t } = {}) => {
  let r = useQueryClient(), n = (0, import_react58.useContext)(mt), { keys: s, preferLegacyKeys: a } = O2(), i2 = J(), { resources: c } = (0, import_react58.useContext)(it), { data: d3, refetch: u, isLoading: p2 } = $r({ v3LegacyAuthProviderCompatible: !!(i2 != null && i2.isLegacy), queryOptions: { enabled: !!(n != null && n.create) } }), l2 = useMutation(async (m2) => {
    var g, R2, M, I2, x;
    let T3 = ye(m2.resource, c), L = S((g = T3 == null ? void 0 : T3.meta) == null ? void 0 : g.audit, (R2 = T3 == null ? void 0 : T3.options) == null ? void 0 : R2.audit, (I2 = (M = T3 == null ? void 0 : T3.options) == null ? void 0 : M.auditLog) == null ? void 0 : I2.permissions);
    if (L && !Fr(L, m2.action))
      return;
    let v3;
    return p2 && (n != null && n.create) && (v3 = await u()), await ((x = n.create) == null ? void 0 : x.call(n, { ...m2, author: d3 ?? (v3 == null ? void 0 : v3.data) }));
  }, { mutationKey: s().audit().action("log").get(), ...e, meta: { ...e == null ? void 0 : e.meta, ...P("useLog", a) } }), y3 = useMutation(async (m2) => {
    var T3;
    return await ((T3 = n.update) == null ? void 0 : T3.call(n, m2));
  }, { onSuccess: (m2) => {
    m2 != null && m2.resource && r.invalidateQueries(s().audit().resource((m2 == null ? void 0 : m2.resource) ?? "").action("list").get(a));
  }, mutationKey: s().audit().action("rename").get(), ...t, meta: { ...t == null ? void 0 : t.meta, ...P("useLog", a) } });
  return { log: l2, rename: y3 };
}, "useLog");
var Vb = o(({ resource: e, action: t, meta: r, author: n, metaData: s, queryOptions: a }) => {
  let { get: i2 } = (0, import_react60.useContext)(mt), { keys: c, preferLegacyKeys: d3 } = O2();
  return useQuery({ queryKey: c().audit().resource(e).action("list").params(r).get(d3), queryFn: () => (i2 == null ? void 0 : i2({ resource: e, action: t, author: n, meta: r, metaData: s })) ?? Promise.resolve([]), enabled: typeof i2 < "u", ...a, retry: false, meta: { ...a == null ? void 0 : a.meta, ...P("useLogList", d3, e) } });
}, "useLogList");
var Yb = o(({ meta: e = {} } = {}) => {
  let t = Z(), { i18nProvider: r } = (0, import_react61.useContext)(Qe), n = ae(), s = G(), { resources: a, resource: i2, action: c } = z(), { options: { textTransformers: d3 } } = se(), u = [];
  if (!(i2 != null && i2.name))
    return { breadcrumbs: u };
  let p2 = o((l2) => {
    var m2, T3, L, v3, g, R2;
    let y3 = typeof l2 == "string" ? ye(l2, a, t === "legacy") ?? { name: l2 } : l2;
    if (y3) {
      let M = S((m2 = y3 == null ? void 0 : y3.meta) == null ? void 0 : m2.parent, y3 == null ? void 0 : y3.parentName);
      M && p2(M);
      let I2 = he(y3, a, t === "legacy").find((f2) => f2.action === "list"), x = (T3 = I2 == null ? void 0 : I2.resource) != null && T3.list ? I2 == null ? void 0 : I2.route : void 0, P2 = x ? t === "legacy" ? x : Me(x, y3 == null ? void 0 : y3.meta, n, e) : void 0;
      u.push({ label: S((L = y3.meta) == null ? void 0 : L.label, (v3 = y3.options) == null ? void 0 : v3.label) ?? s(`${y3.name}.${y3.name}`, d3.humanize(y3.name)), href: P2, icon: S((g = y3.meta) == null ? void 0 : g.icon, (R2 = y3.options) == null ? void 0 : R2.icon, y3.icon) });
    }
  }, "addBreadcrumb");
  if (p2(i2), c && c !== "list") {
    let l2 = `actions.${c}`, y3 = s(l2);
    typeof r < "u" && y3 === l2 ? ((0, import_warn_once6.default)(true, `[useBreadcrumb]: Breadcrumb missing translate key for the "${c}" action. Please add "actions.${c}" key to your translation file.
For more information, see https://refine.dev/docs/api-reference/core/hooks/useBreadcrumb/#i18n-support`), u.push({ label: s(`buttons.${c}`, d3.humanize(c)) })) : u.push({ label: s(l2, d3.humanize(c)) });
  }
  return { breadcrumbs: u };
}, "useBreadcrumb");
var vt = o((e, t, r = false) => {
  let n = [], s = Fe(e, t);
  for (; s; )
    n.push(s), s = Fe(s, t);
  return n.reverse(), `/${[...n, e].map((i2) => be((r ? i2.route : void 0) ?? i2.identifier ?? i2.name)).join("/").replace(/^\//, "")}`;
}, "createResourceKey");
var ds = o((e, t = false) => {
  let r = { item: { name: "__root__" }, children: {} };
  e.forEach((s) => {
    let a = [], i2 = Fe(s, e);
    for (; i2; )
      a.push(i2), i2 = Fe(i2, e);
    a.reverse();
    let c = r;
    a.forEach((u) => {
      let p2 = (t ? u.route : void 0) ?? u.identifier ?? u.name;
      c.children[p2] || (c.children[p2] = { item: u, children: {} }), c = c.children[p2];
    });
    let d3 = (t ? s.route : void 0) ?? s.identifier ?? s.name;
    c.children[d3] || (c.children[d3] = { item: s, children: {} });
  });
  let n = o((s) => {
    let a = [];
    return Object.keys(s.children).forEach((i2) => {
      let c = vt(s.children[i2].item, e, t), d3 = { ...s.children[i2].item, key: c, children: n(s.children[i2]) };
      a.push(d3);
    }), a;
  }, "flatten");
  return n(r);
}, "createTree");
var ps = o((e) => e.split("?")[0].split("#")[0].replace(/(.+)(\/$)/, "$1"), "getCleanPath");
var Cu = o(({ meta: e, hideOnMissingParameter: t = true } = { hideOnMissingParameter: true }) => {
  let r = G(), n = lt(), s = Z(), { resource: a, resources: i2 } = z(), { pathname: c } = ae(), { useLocation: d3 } = te(), { pathname: u } = d3(), p2 = st(), y3 = `/${((s === "legacy" ? ps(u) : c ? ps(c) : void 0) ?? "").replace(/^\//, "")}`, m2 = a ? vt(a, i2, s === "legacy") : y3 ?? "", T3 = import_react62.default.useMemo(() => {
    if (!a)
      return [];
    let g = Fe(a, i2), R2 = [vt(a, i2)];
    for (; g; )
      R2.push(vt(g, i2)), g = Fe(g, i2);
    return R2;
  }, []), L = import_react62.default.useCallback((g) => {
    var M, I2, x, P2, f2, U;
    if ((((M = g == null ? void 0 : g.meta) == null ? void 0 : M.hide) ?? ((I2 = g == null ? void 0 : g.options) == null ? void 0 : I2.hide)) || !(g != null && g.list) && g.children.length === 0)
      return;
    let R2 = g.list ? n({ resource: g, action: "list", legacy: s === "legacy", meta: e }) : void 0;
    if (!(t && R2 && R2.match(/(\/|^):(.+?)(\/|$){1}/)))
      return { ...g, route: R2, icon: S((x = g.meta) == null ? void 0 : x.icon, (P2 = g.options) == null ? void 0 : P2.icon, g.icon), label: S((f2 = g == null ? void 0 : g.meta) == null ? void 0 : f2.label, (U = g == null ? void 0 : g.options) == null ? void 0 : U.label) ?? r(`${g.name}.${g.name}`, p2(g.name, "plural")) };
  }, [s, e, n, r, t]), v3 = import_react62.default.useMemo(() => {
    let g = ds(i2, s === "legacy"), R2 = o((M) => M.flatMap((I2) => {
      let x = R2(I2.children), P2 = L({ ...I2, children: x });
      return P2 ? [P2] : [];
    }), "prepare");
    return R2(g);
  }, [i2, s, L]);
  return { defaultOpenKeys: T3, selectedKey: m2, menuItems: v3 };
}, "useMenu");
var q = o(() => {
  let { params: e } = ae();
  return o(({ resource: r, meta: n } = {}) => {
    let { meta: s } = bt(r) ?? { meta: {} }, { filters: a, sorters: i2, current: c, pageSize: d3, ...u } = e ?? {};
    return { ...s, ...u, ...n };
  }, "getMetaFn");
}, "useMeta");
var Ct = o(() => {
  let { options: e } = import_react63.default.useContext(ve);
  return e;
}, "useRefineOptions");
var ls = o((e) => {
  let t = Z(), { useParams: r } = te(), n = ae(), s = r(), a = t === "legacy" ? s.id : n.id;
  return e ?? a;
}, "useId");
var ms = o((e) => {
  let t = Z(), { useParams: r } = te(), n = ae(), s = r(), a = t === "legacy" ? s.action : n.action;
  return e ?? a;
}, "useAction");
function Ke(e) {
  let { select: t, identifier: r } = z(), n = (e == null ? void 0 : e.resource) ?? r, { identifier: s = void 0, resource: a = void 0 } = n ? t(n, true) : {}, i2 = r === s, c = ls(), d3 = ms(e == null ? void 0 : e.action), u = import_react64.default.useMemo(() => i2 ? (e == null ? void 0 : e.id) ?? c : e == null ? void 0 : e.id, [i2, e == null ? void 0 : e.id, c]), [p2, l2] = import_react64.default.useState(u);
  import_react64.default.useEffect(() => l2(u), [u]);
  let y3 = import_react64.default.useMemo(() => !i2 && !(e != null && e.action) ? "create" : d3 === "edit" || d3 === "clone" ? d3 : "create", [d3, i2, e == null ? void 0 : e.action]);
  return { id: p2, setId: l2, resource: a, action: d3, identifier: s, formAction: y3 };
}
o(Ke, "useResourceParams");
function br({ type: e }) {
  let t = G(), { textTransformers: { humanize: r } } = Ct(), n = `buttons.${e}`, s = r(e);
  return { label: t(n, s) };
}
o(br, "useActionableButton");
var vr = o((e) => {
  var u, p2, l2;
  let t = G(), r = import_react66.default.useContext(Xe), n = ((u = e.accessControl) == null ? void 0 : u.enabled) ?? r.options.buttons.enableAccessControl, s = ((p2 = e.accessControl) == null ? void 0 : p2.hideIfUnauthorized) ?? r.options.buttons.hideIfUnauthorized, { data: a } = Tr({ resource: (l2 = e.resource) == null ? void 0 : l2.name, action: e.action === "clone" ? "create" : e.action, params: { id: e.id, resource: e.resource }, queryOptions: { enabled: n } }), i2 = import_react66.default.useMemo(() => a != null && a.can ? "" : a != null && a.reason ? a.reason : t("buttons.notAccessTitle", "You don't have permission to access"), [a == null ? void 0 : a.can, a == null ? void 0 : a.reason, t]), c = n && s && !(a != null && a.can), d3 = (a == null ? void 0 : a.can) === false;
  return { title: i2, hidden: c, disabled: d3, canAccess: a };
}, "useButtonCanAccess");
function Dt(e) {
  var R2;
  let t = ce(), r = Z(), n = rt(), { Link: s } = te(), a = G(), i2 = st(), { textTransformers: { humanize: c } } = Ct(), { id: d3, resource: u, identifier: p2 } = Ke({ resource: e.resource, id: e.action === "create" ? void 0 : e.id }), { canAccess: l2, title: y3, hidden: m2, disabled: T3 } = vr({ action: e.action, accessControl: e.accessControl, id: d3, resource: u }), L = r === "legacy" ? s : n, v3 = import_react65.default.useMemo(() => {
    if (!u)
      return "";
    switch (e.action) {
      case "create":
      case "list":
        return t[`${e.action}Url`](u, e.meta);
      default:
        return d3 ? t[`${e.action}Url`](u, d3, e.meta) : "";
    }
  }, [u, d3, e.meta, t[`${e.action}Url`]]), g = e.action === "list" ? a(`${p2 ?? e.resource}.titles.list`, i2(((R2 = u == null ? void 0 : u.meta) == null ? void 0 : R2.label) ?? (u == null ? void 0 : u.label) ?? p2 ?? e.resource, "plural")) : a(`buttons.${e.action}`, c(e.action));
  return { to: v3, label: g, title: y3, disabled: T3, hidden: m2, canAccess: l2, LinkComponent: L };
}
o(Dt, "useNavigationButton");
function Du(e) {
  let t = G(), { mutate: r, isLoading: n, variables: s } = to(), { setWarnWhen: a } = pt(), { mutationMode: i2 } = Ae(e.mutationMode), { id: c, resource: d3, identifier: u } = Ke({ resource: e.resource, id: e.id }), { title: p2, disabled: l2, hidden: y3, canAccess: m2 } = vr({ action: "delete", accessControl: e.accessControl, id: c, resource: d3 }), T3 = t("buttons.delete", "Delete"), L = t("buttons.delete", "Delete"), v3 = t("buttons.confirm", "Are you sure?"), g = t("buttons.cancel", "Cancel"), R2 = c === (s == null ? void 0 : s.id) && n;
  return { label: T3, title: p2, hidden: y3, disabled: l2, canAccess: m2, loading: R2, confirmOkLabel: L, cancelLabel: g, confirmTitle: v3, onConfirm: o(() => {
    c && u && (a(false), r({ id: c, resource: u, mutationMode: i2, successNotification: e.successNotification, errorNotification: e.errorNotification, meta: e.meta, metaData: e.meta, dataProviderName: e.dataProviderName, invalidates: e.invalidates }, { onSuccess: e.onSuccess }));
  }, "onConfirm") };
}
o(Du, "useDeleteButton");
function Uu(e) {
  let t = G(), { keys: r, preferLegacyKeys: n } = O2(), s = useQueryClient(), a = Ce(), { identifier: i2, id: c } = Ke({ resource: e.resource, id: e.id }), { resources: d3 } = z(), u = !!s.isFetching({ queryKey: r().data(_(i2, e.dataProviderName, d3)).resource(i2).action("one").get(n) }), p2 = o(() => {
    a({ id: c, invalidates: ["detail"], dataProviderName: e.dataProviderName, resource: i2 });
  }, "onClick"), l2 = t("buttons.refresh", "Refresh");
  return { onClick: p2, label: l2, loading: u };
}
o(Uu, "useRefreshButton");
var wD = o((e) => Dt({ ...e, action: "show" }), "useShowButton");
var ID = o((e) => Dt({ ...e, action: "edit" }), "useEditButton");
var SD = o((e) => Dt({ ...e, action: "clone" }), "useCloneButton");
var FD = o((e) => Dt({ ...e, action: "create" }), "useCreateButton");
var AD = o((e) => Dt({ ...e, action: "list" }), "useListButton");
var kD = o(() => br({ type: "save" }), "useSaveButton");
var QD = o(() => br({ type: "export" }), "useExportButton");
var VD = o(() => br({ type: "import" }), "useImportButton");
var wu = o(() => {
  let [e, t] = (0, import_react2.useState)(), r = G(), { push: n } = ce(), s = ge(), a = Z(), { resource: i2, action: c } = z();
  return (0, import_react2.useEffect)(() => {
    i2 && c && t(r("pages.error.info", { action: c, resource: i2.name }, `You may have forgotten to add the "${c}" component to "${i2.name}" resource.`));
  }, [i2, c]), import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement("h1", null, r("pages.error.404", void 0, "Sorry, the page you visited does not exist.")), e && import_react2.default.createElement("p", null, e), import_react2.default.createElement("button", { onClick: () => {
    a === "legacy" ? n("/") : s({ to: "/" });
  } }, r("pages.error.backHome", void 0, "Back Home")));
}, "ErrorComponent");
var kr = o(() => {
  let [e, t] = (0, import_react67.useState)(""), [r, n] = (0, import_react67.useState)(""), s = G(), a = J(), { mutate: i2 } = At({ v3LegacyAuthProviderCompatible: !!(a != null && a.isLegacy) });
  return import_react67.default.createElement(import_react67.default.Fragment, null, import_react67.default.createElement("h1", null, s("pages.login.title", "Sign in your account")), import_react67.default.createElement("form", { onSubmit: (c) => {
    c.preventDefault(), i2({ username: e, password: r });
  } }, import_react67.default.createElement("table", null, import_react67.default.createElement("tbody", null, import_react67.default.createElement("tr", null, import_react67.default.createElement("td", null, s("pages.login.username", void 0, "username"), ":"), import_react67.default.createElement("td", null, import_react67.default.createElement("input", { type: "text", size: 20, autoCorrect: "off", spellCheck: false, autoCapitalize: "off", autoFocus: true, required: true, value: e, onChange: (c) => t(c.target.value) }))), import_react67.default.createElement("tr", null, import_react67.default.createElement("td", null, s("pages.login.password", void 0, "password"), ":"), import_react67.default.createElement("td", null, import_react67.default.createElement("input", { type: "password", required: true, size: 20, value: r, onChange: (c) => n(c.target.value) }))))), import_react67.default.createElement("br", null), import_react67.default.createElement("input", { type: "submit", value: "login" })));
}, "LoginPage");
var gs = o(({ providers: e, registerLink: t, forgotPasswordLink: r, rememberMe: n, contentProps: s, wrapperProps: a, renderContent: i2, formProps: c, title: d3 = void 0, hideForm: u }) => {
  let p2 = Z(), l2 = rt(), { Link: y3 } = te(), m2 = p2 === "legacy" ? y3 : l2, [T3, L] = (0, import_react69.useState)(""), [v3, g] = (0, import_react69.useState)(""), [R2, M] = (0, import_react69.useState)(false), I2 = G(), x = J(), { mutate: P2 } = At({ v3LegacyAuthProviderCompatible: !!(x != null && x.isLegacy) }), f2 = o((h, E2) => import_react69.default.createElement(m2, { to: h }, E2), "renderLink"), U = o(() => e ? e.map((h) => import_react69.default.createElement("div", { key: h.name, style: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" } }, import_react69.default.createElement("button", { onClick: () => P2({ providerName: h.name }), style: { display: "flex", alignItems: "center" } }, h == null ? void 0 : h.icon, h.label ?? import_react69.default.createElement("label", null, h.label)))) : null, "renderProviders"), b2 = import_react69.default.createElement("div", { ...s }, import_react69.default.createElement("h1", { style: { textAlign: "center" } }, I2("pages.login.title", "Sign in to your account")), U(), !u && import_react69.default.createElement(import_react69.default.Fragment, null, import_react69.default.createElement("hr", null), import_react69.default.createElement("form", { onSubmit: (h) => {
    h.preventDefault(), P2({ email: T3, password: v3, remember: R2 });
  }, ...c }, import_react69.default.createElement("div", { style: { display: "flex", flexDirection: "column", padding: 25 } }, import_react69.default.createElement("label", { htmlFor: "email-input" }, I2("pages.login.fields.email", "Email")), import_react69.default.createElement("input", { id: "email-input", name: "email", type: "text", size: 20, autoCorrect: "off", spellCheck: false, autoCapitalize: "off", required: true, value: T3, onChange: (h) => L(h.target.value) }), import_react69.default.createElement("label", { htmlFor: "password-input" }, I2("pages.login.fields.password", "Password")), import_react69.default.createElement("input", { id: "password-input", type: "password", name: "password", required: true, size: 20, value: v3, onChange: (h) => g(h.target.value) }), n ?? import_react69.default.createElement(import_react69.default.Fragment, null, import_react69.default.createElement("label", { htmlFor: "remember-me-input" }, I2("pages.login.buttons.rememberMe", "Remember me"), import_react69.default.createElement("input", { id: "remember-me-input", name: "remember", type: "checkbox", size: 20, checked: R2, value: R2.toString(), onChange: () => {
    M(!R2);
  } }))), import_react69.default.createElement("br", null), r ?? f2("/forgot-password", I2("pages.login.buttons.forgotPassword", "Forgot password?")), import_react69.default.createElement("input", { type: "submit", value: I2("pages.login.signin", "Sign in") }), t ?? import_react69.default.createElement("span", null, I2("pages.login.buttons.noAccount", "Don’t have an account?"), " ", f2("/register", I2("pages.login.register", "Sign up")))))), t !== false && u && import_react69.default.createElement("div", { style: { textAlign: "center" } }, I2("pages.login.buttons.noAccount", "Don’t have an account?"), " ", f2("/register", I2("pages.login.register", "Sign up"))));
  return import_react69.default.createElement("div", { ...a }, i2 ? i2(b2, d3) : b2);
}, "LoginPage");
var Ps = o(({ providers: e, loginLink: t, wrapperProps: r, contentProps: n, renderContent: s, formProps: a, title: i2 = void 0, hideForm: c }) => {
  let d3 = Z(), u = rt(), { Link: p2 } = te(), l2 = d3 === "legacy" ? p2 : u, [y3, m2] = (0, import_react70.useState)(""), [T3, L] = (0, import_react70.useState)(""), v3 = G(), g = J(), { mutate: R2, isLoading: M } = _r({ v3LegacyAuthProviderCompatible: !!(g != null && g.isLegacy) }), I2 = o((f2, U) => import_react70.default.createElement(l2, { to: f2 }, U), "renderLink"), x = o(() => e ? e.map((f2) => import_react70.default.createElement("div", { key: f2.name, style: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" } }, import_react70.default.createElement("button", { onClick: () => R2({ providerName: f2.name }), style: { display: "flex", alignItems: "center" } }, f2 == null ? void 0 : f2.icon, f2.label ?? import_react70.default.createElement("label", null, f2.label)))) : null, "renderProviders"), P2 = import_react70.default.createElement("div", { ...n }, import_react70.default.createElement("h1", { style: { textAlign: "center" } }, v3("pages.register.title", "Sign up for your account")), x(), !c && import_react70.default.createElement(import_react70.default.Fragment, null, import_react70.default.createElement("hr", null), import_react70.default.createElement("form", { onSubmit: (f2) => {
    f2.preventDefault(), R2({ email: y3, password: T3 });
  }, ...a }, import_react70.default.createElement("div", { style: { display: "flex", flexDirection: "column", padding: 25 } }, import_react70.default.createElement("label", { htmlFor: "email-input" }, v3("pages.register.fields.email", "Email")), import_react70.default.createElement("input", { id: "email-input", name: "email", type: "email", size: 20, autoCorrect: "off", spellCheck: false, autoCapitalize: "off", required: true, value: y3, onChange: (f2) => m2(f2.target.value) }), import_react70.default.createElement("label", { htmlFor: "password-input" }, v3("pages.register.fields.password", "Password")), import_react70.default.createElement("input", { id: "password-input", name: "password", type: "password", required: true, size: 20, value: T3, onChange: (f2) => L(f2.target.value) }), import_react70.default.createElement("input", { type: "submit", value: v3("pages.register.buttons.submit", "Sign up"), disabled: M }), t ?? import_react70.default.createElement(import_react70.default.Fragment, null, import_react70.default.createElement("span", null, v3("pages.login.buttons.haveAccount", "Have an account?"), " ", I2("/login", v3("pages.login.signin", "Sign in"))))))), t !== false && c && import_react70.default.createElement("div", { style: { textAlign: "center" } }, v3("pages.login.buttons.haveAccount", "Have an account?"), " ", I2("/login", v3("pages.login.signin", "Sign in"))));
  return import_react70.default.createElement("div", { ...r }, s ? s(P2, i2) : P2);
}, "RegisterPage");
var xs = o(({ loginLink: e, wrapperProps: t, contentProps: r, renderContent: n, formProps: s, title: a = void 0 }) => {
  let i2 = G(), c = Z(), d3 = rt(), { Link: u } = te(), p2 = c === "legacy" ? u : d3, [l2, y3] = (0, import_react71.useState)(""), { mutate: m2, isLoading: T3 } = Xr(), L = o((g, R2) => import_react71.default.createElement(p2, { to: g }, R2), "renderLink"), v3 = import_react71.default.createElement("div", { ...r }, import_react71.default.createElement("h1", { style: { textAlign: "center" } }, i2("pages.forgotPassword.title", "Forgot your password?")), import_react71.default.createElement("hr", null), import_react71.default.createElement("form", { onSubmit: (g) => {
    g.preventDefault(), m2({ email: l2 });
  }, ...s }, import_react71.default.createElement("div", { style: { display: "flex", flexDirection: "column", padding: 25 } }, import_react71.default.createElement("label", { htmlFor: "email-input" }, i2("pages.forgotPassword.fields.email", "Email")), import_react71.default.createElement("input", { id: "email-input", name: "email", type: "mail", autoCorrect: "off", spellCheck: false, autoCapitalize: "off", required: true, value: l2, onChange: (g) => y3(g.target.value) }), import_react71.default.createElement("input", { type: "submit", disabled: T3, value: i2("pages.forgotPassword.buttons.submit", "Send reset instructions") }), import_react71.default.createElement("br", null), e ?? import_react71.default.createElement("span", null, i2("pages.register.buttons.haveAccount", "Have an account? "), " ", L("/login", i2("pages.login.signin", "Sign in"))))));
  return import_react71.default.createElement("div", { ...t }, n ? n(v3, a) : v3);
}, "ForgotPasswordPage");
var hs = o(({ wrapperProps: e, contentProps: t, renderContent: r, formProps: n, title: s = void 0 }) => {
  let a = G(), i2 = J(), { mutate: c, isLoading: d3 } = Yr({ v3LegacyAuthProviderCompatible: !!(i2 != null && i2.isLegacy) }), [u, p2] = (0, import_react72.useState)(""), [l2, y3] = (0, import_react72.useState)(""), m2 = import_react72.default.createElement("div", { ...t }, import_react72.default.createElement("h1", { style: { textAlign: "center" } }, a("pages.updatePassword.title", "Update Password")), import_react72.default.createElement("hr", null), import_react72.default.createElement("form", { onSubmit: (T3) => {
    T3.preventDefault(), c({ password: u, confirmPassword: l2 });
  }, ...n }, import_react72.default.createElement("div", { style: { display: "flex", flexDirection: "column", padding: 25 } }, import_react72.default.createElement("label", { htmlFor: "password-input" }, a("pages.updatePassword.fields.password", "New Password")), import_react72.default.createElement("input", { id: "password-input", name: "password", type: "password", required: true, size: 20, value: u, onChange: (T3) => p2(T3.target.value) }), import_react72.default.createElement("label", { htmlFor: "confirm-password-input" }, a("pages.updatePassword.fields.confirmPassword", "Confirm New Password")), import_react72.default.createElement("input", { id: "confirm-password-input", name: "confirmPassword", type: "password", required: true, size: 20, value: l2, onChange: (T3) => y3(T3.target.value) }), import_react72.default.createElement("input", { type: "submit", disabled: d3, value: a("pages.updatePassword.buttons.submit", "Update") }))));
  return import_react72.default.createElement("div", { ...e }, r ? r(m2, s) : m2);
}, "UpdatePasswordPage");
var Su = o((e) => {
  let { type: t } = e;
  return import_react68.default.createElement(import_react68.default.Fragment, null, o(() => {
    switch (t) {
      case "register":
        return import_react68.default.createElement(Ps, { ...e });
      case "forgotPassword":
        return import_react68.default.createElement(xs, { ...e });
      case "updatePassword":
        return import_react68.default.createElement(hs, { ...e });
      default:
        return import_react68.default.createElement(gs, { ...e });
    }
  }, "renderView")());
}, "AuthPage");
var fo = o(() => import_react73.default.createElement(import_react73.default.Fragment, null, import_react73.default.createElement("h1", null, "Welcome on board"), import_react73.default.createElement("p", null, "Your configuration is completed."), import_react73.default.createElement("p", null, "Now you can get started by adding your resources to the", " ", import_react73.default.createElement("code", null, "`resources`"), " property of ", import_react73.default.createElement("code", null, "`<Refine>`")), import_react73.default.createElement("div", { style: { display: "flex", gap: 8 } }, import_react73.default.createElement("a", { href: "https://refine.dev", target: "_blank", rel: "noreferrer" }, import_react73.default.createElement("button", null, "Documentation")), import_react73.default.createElement("a", { href: "https://refine.dev/examples", target: "_blank", rel: "noreferrer" }, import_react73.default.createElement("button", null, "Examples")), import_react73.default.createElement("a", { href: "https://discord.gg/refine", target: "_blank", rel: "noreferrer" }, import_react73.default.createElement("button", null, "Community")))), "ReadyPage");
var Au = [{ title: "Documentation", description: "Learn about the technical details of using Refine in your projects.", link: "https://refine.dev/docs", iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/book.svg" }, { title: "Tutorial", description: "Learn how to use Refine by building a fully-functioning CRUD app, from scratch to full launch.", link: "https://refine.dev/tutorial", iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/hat.svg" }, { title: "Templates", description: "Explore a range of pre-built templates, perfect everything from admin panels to dashboards and CRMs.", link: "https://refine.dev/templates", iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/application.svg" }, { title: "Community", description: "Join our Discord community and keep up with the latest news.", link: "https://discord.gg/refine", iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/discord.svg" }];
var Cs = o(() => {
  let e = sr("(max-width: 1010px)"), t = sr("(max-width: 650px)"), r = o(() => t ? "1, 280px" : e ? "2, 280px" : "4, 1fr", "getGridTemplateColumns"), n = o(() => t ? "32px" : e ? "40px" : "48px", "getHeaderFontSize"), s = o(() => t ? "16px" : e ? "20px" : "24px", "getSubHeaderFontSize");
  return import_react75.default.createElement("div", { style: { position: "fixed", zIndex: 10, inset: 0, overflow: "auto", width: "100dvw", height: "100dvh" } }, import_react75.default.createElement("div", { style: { overflow: "hidden", position: "relative", backgroundSize: "cover", backgroundRepeat: "no-repeat", background: t ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(88.89% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(88.89% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : e ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(66.67% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(66.67% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(35.56% 50% at 50% 100%, rgba(38, 217, 127, 0.12) 0%, rgba(38, 217, 127, 0) 100%), radial-gradient(35.56% 50% at 50% 0%, rgba(71, 235, 235, 0.18) 0%, rgba(71, 235, 235, 0) 100%), #1D1E30", minHeight: "100%", minWidth: "100%", fontFamily: "Arial", color: "#FFFFFF" } }, import_react75.default.createElement("div", { style: { zIndex: 2, position: "absolute", width: t ? "400px" : "800px", height: "552px", opacity: "0.5", background: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/welcome-page-hexagon.png)", backgroundRepeat: "no-repeat", backgroundSize: "contain", top: "0", left: "50%", transform: "translateX(-50%)" } }), import_react75.default.createElement("div", { style: { height: t ? "40px" : "80px" } }), import_react75.default.createElement("div", { style: { display: "flex", justifyContent: "center" } }, import_react75.default.createElement("div", { style: { backgroundRepeat: "no-repeat", backgroundSize: t ? "112px 58px" : "224px 116px", backgroundImage: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/refine-logo.svg)", width: t ? 112 : 224, height: t ? 58 : 116 } })), import_react75.default.createElement("div", { style: { height: t ? "120px" : e ? "200px" : "30vh", minHeight: t ? "120px" : "200px" } }), import_react75.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "16px", textAlign: "center" } }, import_react75.default.createElement("h1", { style: { fontSize: n(), fontWeight: 700, margin: "0px" } }, "Welcome Aboard!"), import_react75.default.createElement("h4", { style: { fontSize: s(), fontWeight: 400, margin: "0px" } }, "Your configuration is completed.")), import_react75.default.createElement("div", { style: { height: "64px" } }), import_react75.default.createElement("div", { style: { display: "grid", gridTemplateColumns: `repeat(${r()})`, justifyContent: "center", gap: "48px", paddingRight: "16px", paddingLeft: "16px", paddingBottom: "32px", maxWidth: "976px", margin: "auto" } }, Au.map((a) => import_react75.default.createElement(ku, { key: `welcome-page-${a.title}`, card: a })))));
}, "ConfigSuccessPage");
var ku = o(({ card: e }) => {
  let { title: t, description: r, iconUrl: n, link: s } = e, [a, i2] = (0, import_react75.useState)(false);
  return import_react75.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "16px" } }, import_react75.default.createElement("div", { style: { display: "flex", alignItems: "center" } }, import_react75.default.createElement("a", { onPointerEnter: () => i2(true), onPointerLeave: () => i2(false), style: { display: "flex", alignItems: "center", color: "#fff", textDecoration: "none" }, href: s }, import_react75.default.createElement("div", { style: { width: "16px", height: "16px", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: `url(${n})` } }), import_react75.default.createElement("span", { style: { fontSize: "16px", fontWeight: 700, marginLeft: "13px", marginRight: "14px" } }, t), import_react75.default.createElement("svg", { style: { transition: "transform 0.5s ease-in-out, opacity 0.2s ease-in-out", ...a && { transform: "translateX(4px)", opacity: 1 } }, width: "12", height: "8", fill: "none", opacity: "0.5", xmlns: "http://www.w3.org/2000/svg" }, import_react75.default.createElement("path", { d: "M7.293.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L8.586 5H1a1 1 0 0 1 0-2h7.586L7.293 1.707a1 1 0 0 1 0-1.414Z", fill: "#fff" })))), import_react75.default.createElement("span", { style: { fontSize: "12px", opacity: 0.5, lineHeight: "16px" } }, r));
}, "Card");
var bs = o(() => import_react76.default.createElement("div", { style: { position: "fixed", zIndex: 11, inset: 0, overflow: "auto", width: "100dvw", height: "100dvh" } }, import_react76.default.createElement("div", { style: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "24px", background: "#14141FBF", backdropFilter: "blur(3px)" } }, import_react76.default.createElement("div", { style: { maxWidth: "640px", width: "100%", background: "#1D1E30", borderRadius: "16px", border: "1px solid #303450", boxShadow: "0px 0px 120px -24px #000000" } }, import_react76.default.createElement("div", { style: { padding: "16px 20px", borderBottom: "1px solid #303450", display: "flex", alignItems: "center", gap: "8px", position: "relative" } }, import_react76.default.createElement(Vu, { style: { position: "absolute", left: 0, top: 0 } }), import_react76.default.createElement("div", { style: { lineHeight: "24px", fontSize: "16px", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "16px" } }, import_react76.default.createElement(Bu, null), import_react76.default.createElement("span", { style: { fontWeight: 400 } }, "Configuration Error"))), import_react76.default.createElement("div", { style: { padding: "20px", color: "#A3ADC2", lineHeight: "20px", fontSize: "14px", display: "flex", flexDirection: "column", gap: "20px" } }, import_react76.default.createElement("p", { style: { margin: 0, padding: 0, lineHeight: "28px", fontSize: "16px" } }, import_react76.default.createElement("code", { style: { display: "inline-block", background: "#30345080", padding: "0 4px", lineHeight: "24px", fontSize: "16px", borderRadius: "4px", color: "#FFFFFF" } }, "<Refine />"), " ", "is not initialized. Please make sure you have it mounted in your app and placed your components inside it."), import_react76.default.createElement("div", null, import_react76.default.createElement(Qu, null)))))), "ConfigErrorPage");
var Qu = o(() => import_react76.default.createElement("pre", { style: { display: "block", overflowX: "auto", borderRadius: "8px", fontSize: "14px", lineHeight: "24px", backgroundColor: "#14141F", color: "#E5ECF2", padding: "16px", margin: "0", maxHeight: "400px", overflow: "auto" } }, import_react76.default.createElement("span", { style: { color: "#FF7B72" } }, "import"), " ", "{", " Refine, WelcomePage", " ", "}", " ", import_react76.default.createElement("span", { style: { color: "#FF7B72" } }, "from"), " ", import_react76.default.createElement("span", { style: { color: "#A5D6FF" } }, '"@refinedev/core"'), ";", `
`, `
`, import_react76.default.createElement("span", { style: { color: "#FF7B72" } }, "export"), " ", import_react76.default.createElement("span", { style: { color: "#FF7B72" } }, "default"), " ", import_react76.default.createElement("span", null, import_react76.default.createElement("span", { style: { color: "#FF7B72" } }, "function"), " ", import_react76.default.createElement("span", { style: { color: "#FFA657" } }, "App"), "(", import_react76.default.createElement("span", { style: { color: "rgb(222, 147, 95)" } }), ")", " "), "{", `
`, "  ", import_react76.default.createElement("span", { style: { color: "#FF7B72" } }, "return"), " (", `
`, "    ", import_react76.default.createElement("span", null, import_react76.default.createElement("span", { style: { color: "#79C0FF" } }, "<", import_react76.default.createElement("span", { style: { color: "#79C0FF" } }, "Refine"), `
`, "      ", import_react76.default.createElement("span", { style: { color: "#E5ECF2", opacity: 0.6 } }, "// ", import_react76.default.createElement("span", null, "...")), `
`, "    ", ">"), `
`, "      ", import_react76.default.createElement("span", { style: { opacity: 0.6 } }, "{", "/* ... */", "}"), `
`, "      ", import_react76.default.createElement("span", { style: { color: "#79C0FF" } }, "<", import_react76.default.createElement("span", { style: { color: "#79C0FF" } }, "WelcomePage"), " />"), `
`, "      ", import_react76.default.createElement("span", { style: { opacity: 0.6 } }, "{", "/* ... */", "}"), `
`, "    ", import_react76.default.createElement("span", { style: { color: "#79C0FF" } }, "</", import_react76.default.createElement("span", { style: { color: "#79C0FF" } }, "Refine"), ">")), `
`, "  ", ");", `
`, "}"), "ExampleImplementation");
var Vu = o((e) => import_react76.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 204, height: 56, viewBox: "0 0 204 56", fill: "none", ...e }, import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-a)", d: "M12 0H0v12L12 0Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-b)", d: "M28 0h-8L0 20v8L28 0Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-c)", d: "M36 0h8L0 44v-8L36 0Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-d)", d: "M60 0h-8L0 52v4h4L60 0Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-e)", d: "M68 0h8L20 56h-8L68 0Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-f)", d: "M92 0h-8L28 56h8L92 0Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-g)", d: "M100 0h8L52 56h-8l56-56Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-h)", d: "M124 0h-8L60 56h8l56-56Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-i)", d: "M140 0h-8L76 56h8l56-56Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-j)", d: "M132 0h8L84 56h-8l56-56Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-k)", d: "M156 0h-8L92 56h8l56-56Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-l)", d: "M164 0h8l-56 56h-8l56-56Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-m)", d: "M188 0h-8l-56 56h8l56-56Z" }), import_react76.default.createElement("path", { fill: "url(#welcome-page-error-gradient-n)", d: "M204 0h-8l-56 56h8l56-56Z" }), import_react76.default.createElement("defs", null, import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-a", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-b", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-c", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-d", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-e", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-f", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-g", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-h", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-i", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-j", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-k", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-l", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-m", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })), import_react76.default.createElement("radialGradient", { id: "welcome-page-error-gradient-n", cx: 0, cy: 0, r: 1, gradientTransform: "scale(124)", gradientUnits: "userSpaceOnUse" }, import_react76.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }), import_react76.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })))), "ErrorGradient");
var Bu = o((e) => import_react76.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", ...e }, import_react76.default.createElement("path", { fill: "#FF4C4D", fillRule: "evenodd", d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z", clipRule: "evenodd" }), import_react76.default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M7 8a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v3Zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z", clipRule: "evenodd" })), "ErrorIcon");
var Nu = o(() => {
  let { __initialized: e } = se();
  return import_react74.default.createElement(import_react74.default.Fragment, null, import_react74.default.createElement(Cs, null), !e && import_react74.default.createElement(bs, null));
}, "WelcomePage");
var Ku = "4.49.2";
var vs = o(() => {
  var R2;
  let e = Jr(), t = (0, import_react79.useContext)(mt), { liveProvider: r } = (0, import_react79.useContext)(et), n = (0, import_react79.useContext)(Kt), s = (0, import_react79.useContext)(Bt), { i18nProvider: a } = (0, import_react79.useContext)(Qe), i2 = (0, import_react79.useContext)(Nt), c = (0, import_react79.useContext)(Xe), { resources: d3 } = z(), u = se(), p2 = !!t.create || !!t.get || !!t.update, l2 = !!(r != null && r.publish) || !!(r != null && r.subscribe) || !!(r != null && r.unsubscribe), y3 = !!n.useHistory || !!n.Link || !!n.Prompt || !!n.useLocation || !!n.useParams, m2 = !!s, T3 = !!(a != null && a.changeLocale) || !!(a != null && a.getLocale) || !!(a != null && a.translate), L = !!i2.close || !!i2.open, v3 = !!c.can, g = (R2 = u == null ? void 0 : u.options) == null ? void 0 : R2.projectId;
  return { providers: { auth: e, auditLog: p2, live: l2, router: y3, data: m2, i18n: T3, notification: L, accessControl: v3 }, version: Ku, resourceCount: d3.length, projectId: g };
}, "useTelemetryData");
var Gu = o((e) => {
  try {
    let t = JSON.stringify(e || {});
    return typeof btoa < "u" ? btoa(t) : Buffer.from(t).toString("base64");
  } catch {
    return;
  }
}, "encode");
var Hu = o((e) => {
  let t = new Image();
  t.src = e;
}, "throughImage");
var $u = o((e) => {
  fetch(e);
}, "throughFetch");
var Wu = o((e) => {
  typeof Image < "u" ? Hu(e) : typeof fetch < "u" && $u(e);
}, "transport");
var Ls = o(() => {
  let e = vs(), t = import_react78.default.useRef(false);
  return import_react78.default.useEffect(() => {
    if (t.current)
      return;
    let r = Gu(e);
    r && (Wu(`https://telemetry.refine.dev/telemetry?payload=${r}`), t.current = true);
  }, []), null;
}, "Telemetry");
var Us = o((e) => {
  let t = ["go", "parse", "back", "Link"], r = Object.keys(e).filter((s) => !t.includes(s));
  return r.length > 0 ? (console.warn(`Unsupported properties are found in \`routerProvider\` prop. You provided \`${r.join(", ")}\`. Supported properties are \`${t.join(", ")}\`. You may wanted to use \`legacyRouterProvider\` prop instead.`), true) : false;
}, "checkRouterPropMisuse");
var Ms = o((e) => {
  let t = import_react80.default.useRef(false);
  import_react80.default.useEffect(() => {
    t.current === false && e && Us(e) && (t.current = true);
  }, [e]);
}, "useRouterMisuseWarning");
var _u = o(({ legacyAuthProvider: e, authProvider: t, dataProvider: r, legacyRouterProvider: n, routerProvider: s, notificationProvider: a, accessControlProvider: i2, auditLogProvider: c, resources: d3, DashboardPage: u, ReadyPage: p2, LoginPage: l2, catchAll: y3, children: m2, liveProvider: T3, i18nProvider: L, Title: v3, Layout: g, Sider: R2, Header: M, Footer: I2, OffLayoutArea: x, onLiveEvent: P2, options: f2 }) => {
  let { optionsWithDefaults: U, disableTelemetryWithDefault: b2, reactQueryWithDefaults: h } = Qr({ options: f2 }), E2 = gr(() => {
    var w;
    return h.clientConfig instanceof QueryClient ? h.clientConfig : new QueryClient({ ...h.clientConfig, defaultOptions: { ...h.clientConfig.defaultOptions, queries: { refetchOnWindowFocus: false, keepPreviousData: true, ...(w = h.clientConfig.defaultOptions) == null ? void 0 : w.queries } } });
  }, [h.clientConfig]);
  b(E2);
  let D = import_react77.default.useMemo(() => typeof a == "function" ? a : () => a, [a])();
  if (Ms(s), n && !s && (d3 ?? []).length === 0)
    return p2 ? import_react77.default.createElement(p2, null) : import_react77.default.createElement(fo, null);
  let { RouterComponent: k = import_react77.default.Fragment } = s ? {} : n ?? {};
  return import_react77.default.createElement(QueryClientProvider, { client: E2 }, import_react77.default.createElement(Hn, { ...D }, import_react77.default.createElement(wo, { ...e ?? {}, isProvided: !!e }, import_react77.default.createElement(So, { ...t ?? {}, isProvided: !!t }, import_react77.default.createElement(Dn, { dataProvider: r }, import_react77.default.createElement(Un, { liveProvider: T3 }, import_react77.default.createElement(Fn, { value: n && !s ? "legacy" : "new" }, import_react77.default.createElement(kn, { router: s }, import_react77.default.createElement(Zn, { ...n }, import_react77.default.createElement(wn, { resources: d3 ?? [] }, import_react77.default.createElement(Wn, { i18nProvider: L }, import_react77.default.createElement(Jn, { ...i2 ?? {} }, import_react77.default.createElement(as, { ...c ?? {} }, import_react77.default.createElement(Kn, null, import_react77.default.createElement(Wo, { mutationMode: U.mutationMode, warnWhenUnsavedChanges: U.warnWhenUnsavedChanges, syncWithLocation: U.syncWithLocation, Title: v3, undoableTimeout: U.undoableTimeout, catchAll: y3, DashboardPage: u, LoginPage: l2, Layout: g, Sider: R2, Footer: I2, Header: M, OffLayoutArea: x, hasDashboard: !!u, liveMode: U.liveMode, onLiveEvent: P2, options: U }, import_react77.default.createElement(Xo, null, import_react77.default.createElement(k, null, m2, !b2 && import_react77.default.createElement(Ls, null), import_react77.default.createElement(yo, null))))))))))))))))));
}, "Refine");
var Gn = o(({ notification: e }) => {
  let t = G(), { notificationDispatch: r } = je(), { open: n } = we(), [s, a] = (0, import_react81.useState)(), i2 = o(() => {
    if (e.isRunning === true && (e.seconds === 0 && e.doMutation(), e.isSilent || n == null || n({ key: `${e.id}-${e.resource}-notification`, type: "progress", message: t("notifications.undoable", { seconds: wt(e.seconds) }, `You have ${wt(e.seconds)} seconds to undo`), cancelMutation: e.cancelMutation, undoableTimeout: wt(e.seconds) }), e.seconds > 0)) {
      s && clearTimeout(s);
      let c = setTimeout(() => {
        r({ type: "DECREASE_NOTIFICATION_SECOND", payload: { id: e.id, seconds: e.seconds, resource: e.resource } });
      }, 1e3);
      a(c);
    }
  }, "cancelNotification");
  return (0, import_react81.useEffect)(() => {
    i2();
  }, [e]), null;
}, "UndoableQueue");
var Yu = o(({ children: e, Layout: t, Sider: r, Header: n, Title: s, Footer: a, OffLayoutArea: i2 }) => {
  let { Layout: c, Footer: d3, Header: u, Sider: p2, Title: l2, OffLayoutArea: y3 } = se();
  return import_react82.default.createElement(t ?? c, { Sider: r ?? p2, Header: n ?? u, Footer: a ?? d3, Title: s ?? l2, OffLayoutArea: i2 ?? y3 }, e, import_react82.default.createElement(Ju, null));
}, "LayoutWrapper");
var Ju = o(() => {
  let { Prompt: e } = te(), t = G(), { warnWhen: r, setWarnWhen: n } = pt(), s = o((a) => (a.preventDefault(), a.returnValue = t("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes."), a.returnValue), "warnWhenListener");
  return (0, import_react82.useEffect)(() => (r && window.addEventListener("beforeunload", s), window.removeEventListener("beforeunload", s)), [r]), import_react82.default.createElement(e, { when: r, message: t("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes."), setWarnWhen: n });
}, "UnsavedPrompt");
function qu({ redirectOnFail: e = true, appendCurrentPathToQuery: t = true, children: r, fallback: n, loading: s }) {
  var x;
  let a = J(), i2 = Z(), c = !!(a != null && a.isProvided), d3 = !!(a != null && a.isLegacy), u = i2 === "legacy", p2 = ae(), l2 = ge(), { useLocation: y3 } = te(), m2 = y3(), { isFetching: T3, isSuccess: L, data: { authenticated: v3, redirectTo: g } = {} } = yr({ v3LegacyAuthProviderCompatible: d3 }), R2 = c ? d3 ? L : v3 : true;
  if (!c)
    return import_react83.default.createElement(import_react83.default.Fragment, null, r ?? null);
  if (T3)
    return import_react83.default.createElement(import_react83.default.Fragment, null, s ?? null);
  if (R2)
    return import_react83.default.createElement(import_react83.default.Fragment, null, r ?? null);
  if (typeof n < "u")
    return import_react83.default.createElement(import_react83.default.Fragment, null, n ?? null);
  let M = d3 ? typeof e == "string" ? e : "/login" : typeof e == "string" ? e : g, I2 = `${u ? m2 == null ? void 0 : m2.pathname : p2.pathname}`.replace(/(\?.*|#.*)$/, "");
  if (M) {
    if (u) {
      let P2 = t ? `?to=${encodeURIComponent(I2)}` : "";
      return import_react83.default.createElement(tc, { to: `${M}${P2}` });
    }
    return import_react83.default.createElement(ec, { config: { to: M, query: t ? { to: (x = p2.params) != null && x.to ? p2.params.to : l2({ to: I2, options: { keepQuery: true }, type: "path" }) } : void 0, type: "replace" } });
  }
  return null;
}
o(qu, "Authenticated");
var ec = o(({ config: e }) => {
  let t = ge();
  return import_react83.default.useEffect(() => {
    t(e);
  }, [t, e]), null;
}, "Redirect");
var tc = o(({ to: e }) => {
  let { replace: t } = ce();
  return import_react83.default.useEffect(() => {
    t(e);
  }, [t, e]), null;
}, "RedirectLegacy");
var yo = o(() => {
  let { useLocation: e } = te(), { checkAuth: t } = ue(), r = e();
  return (0, import_react84.useEffect)(() => {
    t == null || t().catch(() => false);
  }, [r == null ? void 0 : r.pathname]), null;
}, "RouteChangeHandler");
var nc = o(({ resource: e, action: t, params: r, fallback: n, onUnauthorized: s, children: a, queryOptions: i2, ...c }) => {
  let { id: d3, resource: u, action: p2 = "" } = Ke({ resource: e, id: r == null ? void 0 : r.id }), l2 = t ?? p2, y3 = r ?? { id: d3, resource: u }, { data: m2 } = Tr({ resource: u == null ? void 0 : u.name, action: l2, params: y3, queryOptions: i2 });
  return (0, import_react85.useEffect)(() => {
    s && (m2 == null ? void 0 : m2.can) === false && s({ resource: u == null ? void 0 : u.name, action: l2, reason: m2 == null ? void 0 : m2.reason, params: y3 });
  }, [m2 == null ? void 0 : m2.can]), m2 != null && m2.can ? import_react85.default.isValidElement(a) ? import_react85.default.cloneElement(a, c) : import_react85.default.createElement(import_react85.default.Fragment, null, a) : (m2 == null ? void 0 : m2.can) === false ? import_react85.default.createElement(import_react85.default.Fragment, null, n ?? null) : null;
}, "CanAccess");
var Is = [`
    .bg-top-announcement {
        border-bottom: 1px solid rgba(71, 235, 235, 0.15);
        background: radial-gradient(
                218.19% 111.8% at 0% 0%,
                rgba(71, 235, 235, 0.1) 0%,
                rgba(71, 235, 235, 0.2) 100%
            ),
            #14141f;
    }
    `, `
    .top-announcement-mask {
        mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        -webkit-mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        mask-repeat: repeat;
        -webkit-mask-repeat: repeat;
        background: rgba(71, 235, 235, 0.25);
    }
    `, `
    .banner {
        display: flex;
        @media (max-width: 1000px) {
            display: none;
        }
    }`, `
    .gh-link, .gh-link:hover, .gh-link:active, .gh-link:visited, .gh-link:focus {
        text-decoration: none;
        z-index: 9;
    }
    `, `
    @keyframes top-announcement-glow {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    `];
var ac = "If you find Refine useful, you can contribute to its growth by giving it a star on GitHub";
var ic = o(() => ((0, import_react86.useEffect)(() => {
  let e = document.createElement("style");
  document.head.appendChild(e), Is.forEach((t) => {
    var r;
    return (r = e.sheet) == null ? void 0 : r.insertRule(t, e.sheet.cssRules.length);
  });
}, []), import_react86.default.createElement("div", { className: "banner bg-top-announcement", style: { width: "100%", height: "48px" } }, import_react86.default.createElement("div", { style: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "200px", width: "100%", maxWidth: "100vw", height: "100%", borderBottom: "1px solid #47ebeb26" } }, import_react86.default.createElement("div", { className: "top-announcement-mask", style: { position: "absolute", left: 0, top: 0, width: "100%", height: "100%", borderBottom: "1px solid #47ebeb26" } }, import_react86.default.createElement("div", { style: { position: "relative", width: "960px", height: "100%", display: "flex", justifyContent: "space-between", margin: "0 auto" } }, import_react86.default.createElement("div", { style: { width: "calc(50% - 300px)", height: "100%", position: "relative" } }, import_react86.default.createElement(Lr, { style: { animationDelay: "1.5s", position: "absolute", top: "2px", right: "220px" }, id: "1" }), import_react86.default.createElement(Lr, { style: { animationDelay: "1s", position: "absolute", top: "8px", right: "100px", transform: "rotate(180deg)" }, id: "2" }), import_react86.default.createElement(Ss, { style: { position: "absolute", right: "10px" }, id: "3" })), import_react86.default.createElement("div", { style: { width: "calc(50% - 300px)", height: "100%", position: "relative" } }, import_react86.default.createElement(Lr, { style: { animationDelay: "2s", position: "absolute", top: "6px", right: "180px", transform: "rotate(180deg)" }, id: "4" }), import_react86.default.createElement(Lr, { style: { animationDelay: "0.5s", transitionDelay: "1.3s", position: "absolute", top: "2px", right: "40px" }, id: "5" }), import_react86.default.createElement(Ss, { style: { position: "absolute", right: "-70px" }, id: "6" })))), import_react86.default.createElement(uc, { text: ac })))), "GitHubBanner");
var uc = o(({ text: e }) => import_react86.default.createElement("a", { className: "gh-link", href: "https://s.refine.dev/github-support", target: "_blank", rel: "noreferrer", style: { position: "absolute", height: "100%", padding: "0 60px", display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap", justifyContent: "center", alignItems: "center", backgroundImage: "linear-gradient(90deg, rgba(31, 63, 72, 0.00) 0%, #1F3F48 10%, #1F3F48 90%, rgba(31, 63, 72, 0.00) 100%)" } }, import_react86.default.createElement("div", { style: { color: "#fff", display: "flex", flexDirection: "row", gap: "8px" } }, import_react86.default.createElement("span", { style: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" } }, "⭐️"), import_react86.default.createElement("span", { className: "text", style: { fontSize: "16px", lineHeight: "24px" } }, e), import_react86.default.createElement("span", { style: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" } }, "⭐️"))), "Text");
var Lr = o(({ style: e, ...t }) => import_react86.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 40, fill: "none", style: { opacity: 1, animation: "top-announcement-glow 1s ease-in-out infinite alternate", ...e } }, import_react86.default.createElement("circle", { cx: 40, r: 40, fill: `url(#${t.id}-a)`, fillOpacity: 0.5 }), import_react86.default.createElement("defs", null, import_react86.default.createElement("radialGradient", { id: `${t.id}-a`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(0 40 -40 0 40 0)", gradientUnits: "userSpaceOnUse" }, import_react86.default.createElement("stop", { stopColor: "#47EBEB" }), import_react86.default.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })))), "GlowSmall");
var Ss = o(({ style: e, ...t }) => import_react86.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 120, height: 48, fill: "none", ...t, style: { opacity: 1, animation: "top-announcement-glow 1s ease-in-out infinite alternate", ...e } }, import_react86.default.createElement("circle", { cx: 60, cy: 24, r: 60, fill: `url(#${t.id}-a)`, fillOpacity: 0.5 }), import_react86.default.createElement("defs", null, import_react86.default.createElement("radialGradient", { id: `${t.id}-a`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(0 60 -60 0 60 24)", gradientUnits: "userSpaceOnUse" }, import_react86.default.createElement("stop", { stopColor: "#47EBEB" }), import_react86.default.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })))), "GlowBig");
var cc = o(({ status: e, elements: { success: t = import_react87.default.createElement(Ur, { key: "autoSave.success", defaultMessage: "saved" }), error: r = import_react87.default.createElement(Ur, { key: "autoSave.error", defaultMessage: "auto save failure" }), loading: n = import_react87.default.createElement(Ur, { key: "autoSave.loading", defaultMessage: "saving..." }), idle: s = import_react87.default.createElement(Ur, { key: "autoSave.idle", defaultMessage: "waiting for changes" }) } = {} }) => {
  switch (e) {
    case "success":
      return import_react87.default.createElement(import_react87.default.Fragment, null, t);
    case "error":
      return import_react87.default.createElement(import_react87.default.Fragment, null, r);
    case "loading":
      return import_react87.default.createElement(import_react87.default.Fragment, null, n);
    default:
      return import_react87.default.createElement(import_react87.default.Fragment, null, s);
  }
}, "AutoSaveIndicator");
var Ur = o(({ key: e, defaultMessage: t }) => {
  let r = G();
  return import_react87.default.createElement("span", null, r(e, t));
}, "Message");

export {
  differenceWith_default,
  unionWith_default,
  require_side_channel,
  isEqual_default,
  get_default,
  hasPath_default,
  $t,
  Wt,
  Ao,
  Pt,
  Oe,
  S,
  ko,
  Ko,
  er,
  Go,
  _,
  rr,
  or,
  nr,
  J,
  _o,
  Ae,
  pt,
  Nr,
  Js,
  se,
  st,
  ir,
  Jo,
  cr,
  oa,
  dr,
  Rt,
  pr,
  lr,
  mr,
  na,
  sa,
  aa,
  O2 as O,
  ia,
  $r,
  fr,
  At,
  _r,
  Xr,
  Yr,
  yr,
  Pa,
  de,
  xa,
  Jr,
  ee,
  kt,
  Qt,
  qr,
  eo,
  Vt,
  to,
  ro,
  Ka,
  Wa,
  Oa,
  ja,
  Ya,
  ne,
  ri,
  Ce,
  it,
  Z,
  oo,
  ae,
  z,
  Qn,
  at,
  Bn,
  kx,
  Be,
  je,
  we,
  pe,
  Qe,
  ao,
  G,
  io,
  MR,
  HR,
  XR,
  _n,
  uo,
  lt,
  ge,
  ce,
  Fh,
  Gh,
  Oh,
  nu,
  rt,
  te,
  Xe,
  Tr,
  QC,
  XC,
  cb,
  Ne,
  Vb,
  Yb,
  Cu,
  q,
  Ct,
  Ke,
  Du,
  Uu,
  wD,
  ID,
  SD,
  FD,
  AD,
  kD,
  QD,
  VD,
  wu,
  kr,
  Su,
  fo,
  Nu,
  _u,
  Gn,
  Yu,
  qu,
  yo,
  nc,
  ic,
  cc
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

papaparse/papaparse.min.js:
  (* @license
  Papa Parse
  v5.4.1
  https://github.com/mholt/PapaParse
  License: MIT
  *)
*/
//# sourceMappingURL=chunk-GPR7TKAP.js.map
