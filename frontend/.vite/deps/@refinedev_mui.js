"use client";
import {
  GridLogicOperator
} from "./chunk-UJZAUYGA.js";
import {
  Breadcrumbs_default,
  CardActions_default,
  CardContent_default,
  CardHeader_default,
  Card_default,
  Collapse_default,
  Container_default,
  DialogActions_default,
  DialogTitle_default,
  Dialog_default,
  Drawer_default,
  Grid_default,
  Link_default,
  ListItemButton_default,
  Slide_default
} from "./chunk-5MTYTGKI.js";
import {
  Box_default,
  ButtonGroupContext_default,
  Button_default,
  Checkbox_default,
  Chip_default,
  CircularProgress_default,
  ClickAwayListener,
  FormControlLabel_default,
  List_default,
  TextField_default,
  Tooltip_default
} from "./chunk-7H6IKBDB.js";
import {
  IconButton_default
} from "./chunk-HRVTOEAX.js";
import {
  Stack_default
} from "./chunk-ZX3QZXGY.js";
import {
  Toolbar_default
} from "./chunk-C5Y5TV2J.js";
import {
  C
} from "./chunk-L2LK2SS3.js";
import {
  FormProvider
} from "./chunk-IDCMWMQK.js";
import {
  Divider_default,
  ListItemIcon_default,
  ListItemText_default
} from "./chunk-SJCQYL2X.js";
import "./chunk-SWZUXE3P.js";
import {
  Typography_default
} from "./chunk-RLA72JC7.js";
import "./chunk-QFXHOUDK.js";
import {
  init_utils as init_utils2,
  useId_default
} from "./chunk-JNOBFPFU.js";
import "./chunk-W5EZ5ERN.js";
import "./chunk-R7BEHITU.js";
import {
  AppBar_default
} from "./chunk-TQ5UKPEU.js";
import {
  Paper_default
} from "./chunk-NMSD7AMR.js";
import {
  useTheme
} from "./chunk-OI23D55H.js";
import {
  Avatar_default
} from "./chunk-UQS3FL6Y.js";
import "./chunk-GMNN5MXW.js";
import {
  SvgIcon_default,
  createSvgIcon,
  init_SvgIcon
} from "./chunk-MMM6HTMF.js";
import {
  capitalize_default
} from "./chunk-2P3Z4E4P.js";
import {
  styled_default
} from "./chunk-CHWICMMB.js";
import "./chunk-XFO73W7Y.js";
import {
  $r,
  AD,
  Ae,
  At,
  Bn,
  Cu,
  Du,
  FD,
  G,
  ID,
  J,
  Jr,
  Js,
  Ko,
  Nu,
  QD,
  S,
  SD,
  Uu,
  VD,
  XC,
  Xr,
  Yb,
  Yr,
  Z,
  _r,
  cb,
  cc,
  ce,
  differenceWith_default,
  fr,
  ge,
  isEqual_default,
  kD,
  nc,
  nu,
  pt,
  rt,
  se,
  st,
  te,
  unionWith_default,
  uo,
  wD,
  z
} from "./chunk-GPR7TKAP.js";
import "./chunk-5OFMTEAY.js";
import {
  require_react_dom
} from "./chunk-AHJ5QOXT.js";
import {
  useThemeProps
} from "./chunk-P7PRWUXK.js";
import "./chunk-WNZYPXGT.js";
import {
  darken,
  emphasize
} from "./chunk-YZALURXJ.js";
import {
  chainPropTypes,
  init_utils
} from "./chunk-7DJUT5HU.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  composeClasses,
  createTheme_default2 as createTheme_default,
  generateUtilityClass,
  generateUtilityClasses,
  init_extends,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_resolveProps,
  require_hoist_non_react_statics_cjs,
  require_jsx_runtime,
  require_prop_types,
  resolveProps
} from "./chunk-WU4WRXGX.js";
import {
  require_react
} from "./chunk-HCG2JFOZ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e2) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e2();
    }(exports, function() {
      "use strict";
      var t = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o2 = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e3 = ["th", "st", "nd", "rd"], n3 = t2 % 100;
        return "[" + t2 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
      } }, m = function(t2, e3, n3) {
        var r3 = String(t2);
        return !r3 || r3.length >= e3 ? t2 : "" + Array(e3 + 1 - r3.length).join(n3) + t2;
      }, v = { s: m, z: function(t2) {
        var e3 = -t2.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i2 = n3 % 60;
        return (e3 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e3, n3) {
        if (e3.date() < n3.date())
          return -t2(n3, e3);
        var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i2 = e3.clone().add(r3, c), s2 = n3 - i2 < 0, u2 = e3.clone().add(r3 + (s2 ? -1 : 1), c);
        return +(-(r3 + (n3 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o2, d: a, D: d, h: u, m: s, s: i, ms: r2, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S2 = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e3, n3, r3) {
        var i2;
        if (!e3)
          return g;
        if ("string" == typeof e3) {
          var s2 = e3.toLowerCase();
          D[s2] && (i2 = s2), n3 && (D[s2] = n3, i2 = s2);
          var u2 = e3.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e3.name;
          D[a2] = e3, i2 = a2;
        }
        return !r3 && i2 && (g = i2), i2 || !r3 && g;
      }, O = function(t2, e3) {
        if (S2(t2))
          return t2.clone();
        var n3 = "object" == typeof e3 ? e3 : {};
        return n3.date = t2, n3.args = arguments, new _(n3);
      }, b = v;
      b.l = w, b.i = S2, b.w = function(t2, e3) {
        return O(t2, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e3 = t3.date, n3 = t3.utc;
            if (null === e3)
              return /* @__PURE__ */ new Date(NaN);
            if (b.u(e3))
              return /* @__PURE__ */ new Date();
            if (e3 instanceof Date)
              return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r3 = e3.match($);
              if (r3) {
                var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
                return n3 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
              }
            }
            return new Date(e3);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e3) {
          var n3 = O(t2);
          return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
        }, m2.isAfter = function(t2, e3) {
          return O(t2) < this.startOf(e3);
        }, m2.isBefore = function(t2, e3) {
          return this.endOf(e3) < O(t2);
        }, m2.$g = function(t2, e3, n3) {
          return b.u(t2) ? this[e3] : this.set(n3, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e3) {
          var n3 = this, r3 = !!b.u(e3) || e3, f2 = b.p(t2), l2 = function(t3, e4) {
            var i2 = b.w(n3.$u ? Date.UTC(n3.$y, e4, t3) : new Date(n3.$y, e4, t3), n3);
            return r3 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e4) {
            return b.w(n3.toDate()[t3].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r3 ? l2(1, 0) : l2(31, 11);
            case c:
              return r3 ? l2(1, M3) : l2(0, M3 + 1);
            case o2:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r3 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e3) {
          var n3, o3 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n3 = {}, n3[a] = f2 + "Date", n3[d] = f2 + "Date", n3[c] = f2 + "Month", n3[h] = f2 + "FullYear", n3[u] = f2 + "Hours", n3[s] = f2 + "Minutes", n3[i] = f2 + "Seconds", n3[r2] = f2 + "Milliseconds", n3)[o3], $2 = o3 === a ? this.$D + (e3 - this.$W) : e3;
          if (o3 === c || o3 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e3) {
          return this.clone().$set(t2, e3);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r3, f2) {
          var d2, l2 = this;
          r3 = Number(r3);
          var $2 = b.p(f2), y2 = function(t2) {
            var e3 = O(l2);
            return b.w(e3.date(e3.date() + Math.round(t2 * r3)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r3);
          if ($2 === h)
            return this.set(h, this.$y + r3);
          if ($2 === a)
            return y2(1);
          if ($2 === o2)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e2, d2[u] = n2, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r3 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e3) {
          return this.add(-1 * t2, e3);
        }, m2.format = function(t2) {
          var e3 = this, n3 = this.$locale();
          if (!this.isValid())
            return n3.invalidDate || l;
          var r3 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o3 = n3.weekdays, c2 = n3.months, f2 = n3.meridiem, h2 = function(t3, n4, i3, s3) {
            return t3 && (t3[n4] || t3(e3, r3)) || i3[n4].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e4, n4) {
            var r4 = t3 < 12 ? "AM" : "PM";
            return n4 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y, function(t3, r4) {
            return r4 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b.s(e3.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n3.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e3.$D;
                case "DD":
                  return b.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h2(n3.weekdaysMin, e3.$W, o3, 2);
                case "ddd":
                  return h2(n3.weekdaysShort, e3.$W, o3, 3);
                case "dddd":
                  return o3[e3.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b.s(e3.$s, 2, "0");
                case "SSS":
                  return b.s(e3.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r3, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r3), v2 = (m3.utcOffset() - this.utcOffset()) * e2, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o2:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n2;
              break;
            case s:
              $2 = g2 / e2;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e3) {
          if (!t2)
            return this.$L;
          var n3 = this.clone(), r3 = w(t2, e3, true);
          return r3 && (n3.$L = r3), n3;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e3) {
          return this.$g(e3, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e3) {
        return t2.$i || (t2(e3, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S2, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/dayjs/plugin/localizedFormat.js
var require_localizedFormat = __commonJS({
  "node_modules/dayjs/plugin/localizedFormat.js"(exports, module) {
    !function(e2, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e2 = "undefined" != typeof globalThis ? globalThis : e2 || self).dayjs_plugin_localizedFormat = t();
    }(exports, function() {
      "use strict";
      var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, o2, n2) {
        var r2 = o2.prototype, i = r2.format;
        n2.en.formats = e2, r2.format = function(t2) {
          void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
          var o3 = this.$locale().formats, n3 = function(t3, o4) {
            return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t4, n4, r3) {
              var i2 = r3 && r3.toUpperCase();
              return n4 || o4[r3] || e2[r3] || o4[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t5, o5) {
                return t5 || o5.slice(1);
              });
            });
          }(t2, void 0 === o3 ? {} : o3);
          return i.call(this, n3);
        };
      };
    });
  }
});

// node_modules/unist-util-stringify-position/index.js
var require_unist_util_stringify_position = __commonJS({
  "node_modules/unist-util-stringify-position/index.js"(exports, module) {
    "use strict";
    var own = {}.hasOwnProperty;
    module.exports = stringify;
    function stringify(value) {
      if (!value || typeof value !== "object") {
        return "";
      }
      if (own.call(value, "position") || own.call(value, "type")) {
        return position(value.position);
      }
      if (own.call(value, "start") || own.call(value, "end")) {
        return position(value);
      }
      if (own.call(value, "line") || own.call(value, "column")) {
        return point(value);
      }
      return "";
    }
    function point(point2) {
      if (!point2 || typeof point2 !== "object") {
        point2 = {};
      }
      return index(point2.line) + ":" + index(point2.column);
    }
    function position(pos) {
      if (!pos || typeof pos !== "object") {
        pos = {};
      }
      return point(pos.start) + "-" + point(pos.end);
    }
    function index(value) {
      return value && typeof value === "number" ? value : 1;
    }
  }
});

// node_modules/vfile-message/index.js
var require_vfile_message = __commonJS({
  "node_modules/vfile-message/index.js"(exports, module) {
    "use strict";
    var stringify = require_unist_util_stringify_position();
    module.exports = VMessage;
    function VMessagePrototype() {
    }
    VMessagePrototype.prototype = Error.prototype;
    VMessage.prototype = new VMessagePrototype();
    var proto = VMessage.prototype;
    proto.file = "";
    proto.name = "";
    proto.reason = "";
    proto.message = "";
    proto.stack = "";
    proto.fatal = null;
    proto.column = null;
    proto.line = null;
    function VMessage(reason, position, origin) {
      var parts;
      var range;
      var location;
      if (typeof position === "string") {
        origin = position;
        position = null;
      }
      parts = parseOrigin(origin);
      range = stringify(position) || "1:1";
      location = {
        start: { line: null, column: null },
        end: { line: null, column: null }
      };
      if (position && position.position) {
        position = position.position;
      }
      if (position) {
        if (position.start) {
          location = position;
          position = position.start;
        } else {
          location.start = position;
        }
      }
      if (reason.stack) {
        this.stack = reason.stack;
        reason = reason.message;
      }
      this.message = reason;
      this.name = range;
      this.reason = reason;
      this.line = position ? position.line : null;
      this.column = position ? position.column : null;
      this.location = location;
      this.source = parts[0];
      this.ruleId = parts[1];
    }
    function parseOrigin(origin) {
      var result = [null, null];
      var index;
      if (typeof origin === "string") {
        index = origin.indexOf(":");
        if (index === -1) {
          result[1] = origin;
        } else {
          result[0] = origin.slice(0, index);
          result[1] = origin.slice(index + 1);
        }
      }
      return result;
    }
  }
});

// node_modules/vfile/lib/minpath.browser.js
var require_minpath_browser = __commonJS({
  "node_modules/vfile/lib/minpath.browser.js"(exports) {
    "use strict";
    exports.basename = basename;
    exports.dirname = dirname;
    exports.extname = extname;
    exports.join = join;
    exports.sep = "/";
    function basename(path, ext) {
      var start = 0;
      var end = -1;
      var index;
      var firstNonSlashEnd;
      var seenNonSlash;
      var extIndex;
      if (ext !== void 0 && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
      }
      assertPath(path);
      index = path.length;
      if (ext === void 0 || !ext.length || ext.length > path.length) {
        while (index--) {
          if (path.charCodeAt(index) === 47) {
            if (seenNonSlash) {
              start = index + 1;
              break;
            }
          } else if (end < 0) {
            seenNonSlash = true;
            end = index + 1;
          }
        }
        return end < 0 ? "" : path.slice(start, end);
      }
      if (ext === path) {
        return "";
      }
      firstNonSlashEnd = -1;
      extIndex = ext.length - 1;
      while (index--) {
        if (path.charCodeAt(index) === 47) {
          if (seenNonSlash) {
            start = index + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd < 0) {
            seenNonSlash = true;
            firstNonSlashEnd = index + 1;
          }
          if (extIndex > -1) {
            if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
              if (extIndex < 0) {
                end = index;
              }
            } else {
              extIndex = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end < 0) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    function dirname(path) {
      var end;
      var unmatchedSlash;
      var index;
      assertPath(path);
      if (!path.length) {
        return ".";
      }
      end = -1;
      index = path.length;
      while (--index) {
        if (path.charCodeAt(index) === 47) {
          if (unmatchedSlash) {
            end = index;
            break;
          }
        } else if (!unmatchedSlash) {
          unmatchedSlash = true;
        }
      }
      return end < 0 ? path.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path.charCodeAt(0) === 47 ? "//" : path.slice(0, end);
    }
    function extname(path) {
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var preDotState = 0;
      var unmatchedSlash;
      var code;
      var index;
      assertPath(path);
      index = path.length;
      while (index--) {
        code = path.charCodeAt(index);
        if (code === 47) {
          if (unmatchedSlash) {
            startPart = index + 1;
            break;
          }
          continue;
        }
        if (end < 0) {
          unmatchedSlash = true;
          end = index + 1;
        }
        if (code === 46) {
          if (startDot < 0) {
            startDot = index;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot > -1) {
          preDotState = -1;
        }
      }
      if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
      preDotState === 0 || // The (right-most) trimmed path component is exactly `..`.
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path.slice(startDot, end);
    }
    function join() {
      var index = -1;
      var joined;
      while (++index < arguments.length) {
        assertPath(arguments[index]);
        if (arguments[index]) {
          joined = joined === void 0 ? arguments[index] : joined + "/" + arguments[index];
        }
      }
      return joined === void 0 ? "." : normalize(joined);
    }
    function normalize(path) {
      var absolute;
      var value;
      assertPath(path);
      absolute = path.charCodeAt(0) === 47;
      value = normalizeString(path, !absolute);
      if (!value.length && !absolute) {
        value = ".";
      }
      if (value.length && path.charCodeAt(path.length - 1) === 47) {
        value += "/";
      }
      return absolute ? "/" + value : value;
    }
    function normalizeString(path, allowAboveRoot) {
      var result = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var index = -1;
      var code;
      var lastSlashIndex;
      while (++index <= path.length) {
        if (index < path.length) {
          code = path.charCodeAt(index);
        } else if (code === 47) {
          break;
        } else {
          code = 47;
        }
        if (code === 47) {
          if (lastSlash === index - 1 || dots === 1) {
          } else if (lastSlash !== index - 1 && dots === 2) {
            if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
              if (result.length > 2) {
                lastSlashIndex = result.lastIndexOf("/");
                if (lastSlashIndex !== result.length - 1) {
                  if (lastSlashIndex < 0) {
                    result = "";
                    lastSegmentLength = 0;
                  } else {
                    result = result.slice(0, lastSlashIndex);
                    lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
                  }
                  lastSlash = index;
                  dots = 0;
                  continue;
                }
              } else if (result.length) {
                result = "";
                lastSegmentLength = 0;
                lastSlash = index;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              result = result.length ? result + "/.." : "..";
              lastSegmentLength = 2;
            }
          } else {
            if (result.length) {
              result += "/" + path.slice(lastSlash + 1, index);
            } else {
              result = path.slice(lastSlash + 1, index);
            }
            lastSegmentLength = index - lastSlash - 1;
          }
          lastSlash = index;
          dots = 0;
        } else if (code === 46 && dots > -1) {
          dots++;
        } else {
          dots = -1;
        }
      }
      return result;
    }
    function assertPath(path) {
      if (typeof path !== "string") {
        throw new TypeError(
          "Path must be a string. Received " + JSON.stringify(path)
        );
      }
    }
  }
});

// node_modules/vfile/lib/minproc.browser.js
var require_minproc_browser = __commonJS({
  "node_modules/vfile/lib/minproc.browser.js"(exports) {
    "use strict";
    exports.cwd = cwd;
    function cwd() {
      return "/";
    }
  }
});

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "node_modules/is-buffer/index.js"(exports, module) {
    module.exports = function isBuffer(obj) {
      return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
  }
});

// node_modules/vfile/lib/core.js
var require_core = __commonJS({
  "node_modules/vfile/lib/core.js"(exports, module) {
    "use strict";
    var p = require_minpath_browser();
    var proc = require_minproc_browser();
    var buffer = require_is_buffer();
    module.exports = VFile;
    var own = {}.hasOwnProperty;
    var order = ["history", "path", "basename", "stem", "extname", "dirname"];
    VFile.prototype.toString = toString;
    Object.defineProperty(VFile.prototype, "path", { get: getPath, set: setPath });
    Object.defineProperty(VFile.prototype, "dirname", {
      get: getDirname,
      set: setDirname
    });
    Object.defineProperty(VFile.prototype, "basename", {
      get: getBasename,
      set: setBasename
    });
    Object.defineProperty(VFile.prototype, "extname", {
      get: getExtname,
      set: setExtname
    });
    Object.defineProperty(VFile.prototype, "stem", { get: getStem, set: setStem });
    function VFile(options) {
      var prop;
      var index;
      if (!options) {
        options = {};
      } else if (typeof options === "string" || buffer(options)) {
        options = { contents: options };
      } else if ("message" in options && "messages" in options) {
        return options;
      }
      if (!(this instanceof VFile)) {
        return new VFile(options);
      }
      this.data = {};
      this.messages = [];
      this.history = [];
      this.cwd = proc.cwd();
      index = -1;
      while (++index < order.length) {
        prop = order[index];
        if (own.call(options, prop)) {
          this[prop] = options[prop];
        }
      }
      for (prop in options) {
        if (order.indexOf(prop) < 0) {
          this[prop] = options[prop];
        }
      }
    }
    function getPath() {
      return this.history[this.history.length - 1];
    }
    function setPath(path) {
      assertNonEmpty(path, "path");
      if (this.path !== path) {
        this.history.push(path);
      }
    }
    function getDirname() {
      return typeof this.path === "string" ? p.dirname(this.path) : void 0;
    }
    function setDirname(dirname) {
      assertPath(this.path, "dirname");
      this.path = p.join(dirname || "", this.basename);
    }
    function getBasename() {
      return typeof this.path === "string" ? p.basename(this.path) : void 0;
    }
    function setBasename(basename) {
      assertNonEmpty(basename, "basename");
      assertPart(basename, "basename");
      this.path = p.join(this.dirname || "", basename);
    }
    function getExtname() {
      return typeof this.path === "string" ? p.extname(this.path) : void 0;
    }
    function setExtname(extname) {
      assertPart(extname, "extname");
      assertPath(this.path, "extname");
      if (extname) {
        if (extname.charCodeAt(0) !== 46) {
          throw new Error("`extname` must start with `.`");
        }
        if (extname.indexOf(".", 1) > -1) {
          throw new Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = p.join(this.dirname, this.stem + (extname || ""));
    }
    function getStem() {
      return typeof this.path === "string" ? p.basename(this.path, this.extname) : void 0;
    }
    function setStem(stem) {
      assertNonEmpty(stem, "stem");
      assertPart(stem, "stem");
      this.path = p.join(this.dirname || "", stem + (this.extname || ""));
    }
    function toString(encoding) {
      return (this.contents || "").toString(encoding);
    }
    function assertPart(part, name) {
      if (part && part.indexOf(p.sep) > -1) {
        throw new Error(
          "`" + name + "` cannot be a path: did not expect `" + p.sep + "`"
        );
      }
    }
    function assertNonEmpty(part, name) {
      if (!part) {
        throw new Error("`" + name + "` cannot be empty");
      }
    }
    function assertPath(path, name) {
      if (!path) {
        throw new Error("Setting `" + name + "` requires `path` to be set too");
      }
    }
  }
});

// node_modules/vfile/lib/index.js
var require_lib = __commonJS({
  "node_modules/vfile/lib/index.js"(exports, module) {
    "use strict";
    var VMessage = require_vfile_message();
    var VFile = require_core();
    module.exports = VFile;
    VFile.prototype.message = message;
    VFile.prototype.info = info;
    VFile.prototype.fail = fail;
    function message(reason, position, origin) {
      var message2 = new VMessage(reason, position, origin);
      if (this.path) {
        message2.name = this.path + ":" + message2.name;
        message2.file = this.path;
      }
      message2.fatal = false;
      this.messages.push(message2);
      return message2;
    }
    function fail() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = true;
      throw message2;
    }
    function info() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = null;
      return message2;
    }
  }
});

// node_modules/vfile/index.js
var require_vfile = __commonJS({
  "node_modules/vfile/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib();
  }
});

// node_modules/bail/index.js
var require_bail = __commonJS({
  "node_modules/bail/index.js"(exports, module) {
    "use strict";
    module.exports = bail;
    function bail(err) {
      if (err) {
        throw err;
      }
    }
  }
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject = function isPlainObject2(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/unified/node_modules/is-plain-obj/index.js
var require_is_plain_obj = __commonJS({
  "node_modules/unified/node_modules/is-plain-obj/index.js"(exports, module) {
    "use strict";
    module.exports = (value) => {
      if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.prototype;
    };
  }
});

// node_modules/trough/wrap.js
var require_wrap = __commonJS({
  "node_modules/trough/wrap.js"(exports, module) {
    "use strict";
    var slice = [].slice;
    module.exports = wrap;
    function wrap(fn, callback) {
      var invoked;
      return wrapped;
      function wrapped() {
        var params = slice.call(arguments, 0);
        var callback2 = fn.length > params.length;
        var result;
        if (callback2) {
          params.push(done);
        }
        try {
          result = fn.apply(null, params);
        } catch (error) {
          if (callback2 && invoked) {
            throw error;
          }
          return done(error);
        }
        if (!callback2) {
          if (result && typeof result.then === "function") {
            result.then(then, done);
          } else if (result instanceof Error) {
            done(result);
          } else {
            then(result);
          }
        }
      }
      function done() {
        if (!invoked) {
          invoked = true;
          callback.apply(null, arguments);
        }
      }
      function then(value) {
        done(null, value);
      }
    }
  }
});

// node_modules/trough/index.js
var require_trough = __commonJS({
  "node_modules/trough/index.js"(exports, module) {
    "use strict";
    var wrap = require_wrap();
    module.exports = trough;
    trough.wrap = wrap;
    var slice = [].slice;
    function trough() {
      var fns = [];
      var middleware = {};
      middleware.run = run;
      middleware.use = use;
      return middleware;
      function run() {
        var index = -1;
        var input = slice.call(arguments, 0, -1);
        var done = arguments[arguments.length - 1];
        if (typeof done !== "function") {
          throw new Error("Expected function as last argument, not " + done);
        }
        next.apply(null, [null].concat(input));
        function next(err) {
          var fn = fns[++index];
          var params = slice.call(arguments, 0);
          var values = params.slice(1);
          var length = input.length;
          var pos = -1;
          if (err) {
            done(err);
            return;
          }
          while (++pos < length) {
            if (values[pos] === null || values[pos] === void 0) {
              values[pos] = input[pos];
            }
          }
          input = values;
          if (fn) {
            wrap(fn, next).apply(null, input);
          } else {
            done.apply(null, [null].concat(input));
          }
        }
      }
      function use(fn) {
        if (typeof fn !== "function") {
          throw new Error("Expected `fn` to be a function, not " + fn);
        }
        fns.push(fn);
        return middleware;
      }
    }
  }
});

// node_modules/unified/index.js
var require_unified = __commonJS({
  "node_modules/unified/index.js"(exports, module) {
    "use strict";
    var bail = require_bail();
    var buffer = require_is_buffer();
    var extend = require_extend();
    var plain = require_is_plain_obj();
    var trough = require_trough();
    var vfile = require_vfile();
    module.exports = unified().freeze();
    var slice = [].slice;
    var own = {}.hasOwnProperty;
    var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
    function pipelineParse(p, ctx) {
      ctx.tree = p.parse(ctx.file);
    }
    function pipelineRun(p, ctx, next) {
      p.run(ctx.tree, ctx.file, done);
      function done(error, tree, file) {
        if (error) {
          next(error);
        } else {
          ctx.tree = tree;
          ctx.file = file;
          next();
        }
      }
    }
    function pipelineStringify(p, ctx) {
      var result = p.stringify(ctx.tree, ctx.file);
      if (result === void 0 || result === null) {
      } else if (typeof result === "string" || buffer(result)) {
        if ("value" in ctx.file) {
          ctx.file.value = result;
        }
        ctx.file.contents = result;
      } else {
        ctx.file.result = result;
      }
    }
    function unified() {
      var attachers = [];
      var transformers = trough();
      var namespace = {};
      var freezeIndex = -1;
      var frozen;
      processor.data = data;
      processor.freeze = freeze;
      processor.attachers = attachers;
      processor.use = use;
      processor.parse = parse;
      processor.stringify = stringify;
      processor.run = run;
      processor.runSync = runSync;
      processor.process = process2;
      processor.processSync = processSync;
      return processor;
      function processor() {
        var destination = unified();
        var index = -1;
        while (++index < attachers.length) {
          destination.use.apply(null, attachers[index]);
        }
        destination.data(extend(true, {}, namespace));
        return destination;
      }
      function freeze() {
        var values;
        var transformer2;
        if (frozen) {
          return processor;
        }
        while (++freezeIndex < attachers.length) {
          values = attachers[freezeIndex];
          if (values[1] === false) {
            continue;
          }
          if (values[1] === true) {
            values[1] = void 0;
          }
          transformer2 = values[0].apply(processor, values.slice(1));
          if (typeof transformer2 === "function") {
            transformers.use(transformer2);
          }
        }
        frozen = true;
        freezeIndex = Infinity;
        return processor;
      }
      function data(key, value) {
        if (typeof key === "string") {
          if (arguments.length === 2) {
            assertUnfrozen("data", frozen);
            namespace[key] = value;
            return processor;
          }
          return own.call(namespace, key) && namespace[key] || null;
        }
        if (key) {
          assertUnfrozen("data", frozen);
          namespace = key;
          return processor;
        }
        return namespace;
      }
      function use(value) {
        var settings;
        assertUnfrozen("use", frozen);
        if (value === null || value === void 0) {
        } else if (typeof value === "function") {
          addPlugin.apply(null, arguments);
        } else if (typeof value === "object") {
          if ("length" in value) {
            addList(value);
          } else {
            addPreset(value);
          }
        } else {
          throw new Error("Expected usable value, not `" + value + "`");
        }
        if (settings) {
          namespace.settings = extend(namespace.settings || {}, settings);
        }
        return processor;
        function addPreset(result) {
          addList(result.plugins);
          if (result.settings) {
            settings = extend(settings || {}, result.settings);
          }
        }
        function add(value2) {
          if (typeof value2 === "function") {
            addPlugin(value2);
          } else if (typeof value2 === "object") {
            if ("length" in value2) {
              addPlugin.apply(null, value2);
            } else {
              addPreset(value2);
            }
          } else {
            throw new Error("Expected usable value, not `" + value2 + "`");
          }
        }
        function addList(plugins) {
          var index = -1;
          if (plugins === null || plugins === void 0) {
          } else if (typeof plugins === "object" && "length" in plugins) {
            while (++index < plugins.length) {
              add(plugins[index]);
            }
          } else {
            throw new Error("Expected a list of plugins, not `" + plugins + "`");
          }
        }
        function addPlugin(plugin, value2) {
          var entry = find(plugin);
          if (entry) {
            if (plain(entry[1]) && plain(value2)) {
              value2 = extend(true, entry[1], value2);
            }
            entry[1] = value2;
          } else {
            attachers.push(slice.call(arguments));
          }
        }
      }
      function find(plugin) {
        var index = -1;
        while (++index < attachers.length) {
          if (attachers[index][0] === plugin) {
            return attachers[index];
          }
        }
      }
      function parse(doc) {
        var file = vfile(doc);
        var Parser;
        freeze();
        Parser = processor.Parser;
        assertParser("parse", Parser);
        if (newable(Parser, "parse")) {
          return new Parser(String(file), file).parse();
        }
        return Parser(String(file), file);
      }
      function run(node, file, cb2) {
        assertNode(node);
        freeze();
        if (!cb2 && typeof file === "function") {
          cb2 = file;
          file = null;
        }
        if (!cb2) {
          return new Promise(executor);
        }
        executor(null, cb2);
        function executor(resolve, reject) {
          transformers.run(node, vfile(file), done);
          function done(error, tree, file2) {
            tree = tree || node;
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(tree);
            } else {
              cb2(null, tree, file2);
            }
          }
        }
      }
      function runSync(node, file) {
        var result;
        var complete;
        run(node, file, done);
        assertDone("runSync", "run", complete);
        return result;
        function done(error, tree) {
          complete = true;
          result = tree;
          bail(error);
        }
      }
      function stringify(node, doc) {
        var file = vfile(doc);
        var Compiler;
        freeze();
        Compiler = processor.Compiler;
        assertCompiler("stringify", Compiler);
        assertNode(node);
        if (newable(Compiler, "compile")) {
          return new Compiler(node, file).compile();
        }
        return Compiler(node, file);
      }
      function process2(doc, cb2) {
        freeze();
        assertParser("process", processor.Parser);
        assertCompiler("process", processor.Compiler);
        if (!cb2) {
          return new Promise(executor);
        }
        executor(null, cb2);
        function executor(resolve, reject) {
          var file = vfile(doc);
          pipeline.run(processor, { file }, done);
          function done(error) {
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(file);
            } else {
              cb2(null, file);
            }
          }
        }
      }
      function processSync(doc) {
        var file;
        var complete;
        freeze();
        assertParser("processSync", processor.Parser);
        assertCompiler("processSync", processor.Compiler);
        file = vfile(doc);
        process2(file, done);
        assertDone("processSync", "process", complete);
        return file;
        function done(error) {
          complete = true;
          bail(error);
        }
      }
    }
    function newable(value, name) {
      return typeof value === "function" && value.prototype && // A function with keys in its prototype is probably a constructor.
      // Classes’ prototype methods are not enumerable, so we check if some value
      // exists in the prototype.
      (keys(value.prototype) || name in value.prototype);
    }
    function keys(value) {
      var key;
      for (key in value) {
        return true;
      }
      return false;
    }
    function assertParser(name, Parser) {
      if (typeof Parser !== "function") {
        throw new Error("Cannot `" + name + "` without `Parser`");
      }
    }
    function assertCompiler(name, Compiler) {
      if (typeof Compiler !== "function") {
        throw new Error("Cannot `" + name + "` without `Compiler`");
      }
    }
    function assertUnfrozen(name, frozen) {
      if (frozen) {
        throw new Error(
          "Cannot invoke `" + name + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`."
        );
      }
    }
    function assertNode(node) {
      if (!node || typeof node.type !== "string") {
        throw new Error("Expected node, got `" + node + "`");
      }
    }
    function assertDone(name, asyncName, complete) {
      if (!complete) {
        throw new Error(
          "`" + name + "` finished async. Use `" + asyncName + "` instead"
        );
      }
    }
  }
});

// node_modules/mdast-util-to-string/index.js
var require_mdast_util_to_string = __commonJS({
  "node_modules/mdast-util-to-string/index.js"(exports, module) {
    "use strict";
    module.exports = toString;
    function toString(node) {
      return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
    }
    function all(values) {
      var result = [];
      var index = -1;
      while (++index < values.length) {
        result[index] = toString(values[index]);
      }
      return result.join("");
    }
  }
});

// node_modules/micromark/dist/constant/assign.js
var require_assign = __commonJS({
  "node_modules/micromark/dist/constant/assign.js"(exports, module) {
    "use strict";
    var assign = Object.assign;
    module.exports = assign;
  }
});

// node_modules/micromark/dist/constant/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/micromark/dist/constant/has-own-property.js"(exports, module) {
    "use strict";
    var own = {}.hasOwnProperty;
    module.exports = own;
  }
});

// node_modules/micromark/dist/util/normalize-identifier.js
var require_normalize_identifier = __commonJS({
  "node_modules/micromark/dist/util/normalize-identifier.js"(exports, module) {
    "use strict";
    function normalizeIdentifier(value) {
      return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
    }
    module.exports = normalizeIdentifier;
  }
});

// node_modules/micromark/dist/constant/from-char-code.js
var require_from_char_code = __commonJS({
  "node_modules/micromark/dist/constant/from-char-code.js"(exports, module) {
    "use strict";
    var fromCharCode = String.fromCharCode;
    module.exports = fromCharCode;
  }
});

// node_modules/micromark/dist/util/safe-from-int.js
var require_safe_from_int = __commonJS({
  "node_modules/micromark/dist/util/safe-from-int.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function safeFromInt(value, base) {
      var code = parseInt(value, base);
      if (
        // C0 except for HT, LF, FF, CR, space
        code < 9 || code === 11 || code > 13 && code < 32 || // Control character (DEL) of the basic block and C1 controls.
        code > 126 && code < 160 || // Lone high surrogates and low surrogates.
        code > 55295 && code < 57344 || // Noncharacters.
        code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || // Out of range
        code > 1114111
      ) {
        return "�";
      }
      return fromCharCode(code);
    }
    module.exports = safeFromInt;
  }
});

// node_modules/micromark/dist/character/markdown-line-ending.js
var require_markdown_line_ending = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending.js"(exports, module) {
    "use strict";
    function markdownLineEnding(code) {
      return code < -2;
    }
    module.exports = markdownLineEnding;
  }
});

// node_modules/micromark/dist/character/markdown-space.js
var require_markdown_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-space.js"(exports, module) {
    "use strict";
    function markdownSpace(code) {
      return code === -2 || code === -1 || code === 32;
    }
    module.exports = markdownSpace;
  }
});

// node_modules/micromark/dist/tokenize/factory-space.js
var require_factory_space = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-space.js"(exports, module) {
    "use strict";
    var markdownSpace = require_markdown_space();
    function spaceFactory(effects, ok, type, max) {
      var limit = max ? max - 1 : Infinity;
      var size = 0;
      return start;
      function start(code) {
        if (markdownSpace(code)) {
          effects.enter(type);
          return prefix(code);
        }
        return ok(code);
      }
      function prefix(code) {
        if (markdownSpace(code) && size++ < limit) {
          effects.consume(code);
          return prefix;
        }
        effects.exit(type);
        return ok(code);
      }
    }
    module.exports = spaceFactory;
  }
});

// node_modules/micromark/dist/initialize/content.js
var require_content = __commonJS({
  "node_modules/micromark/dist/initialize/content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var tokenize = initializeContent;
    function initializeContent(effects) {
      var contentStart = effects.attempt(
        this.parser.constructs.contentInitial,
        afterContentStartConstruct,
        paragraphInitial
      );
      var previous;
      return contentStart;
      function afterContentStartConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, contentStart, "linePrefix");
      }
      function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
      }
      function lineStart(code) {
        var token = effects.enter("chunkText", {
          contentType: "text",
          previous
        });
        if (previous) {
          previous.next = token;
        }
        previous = token;
        return data(code);
      }
      function data(code) {
        if (code === null) {
          effects.exit("chunkText");
          effects.exit("paragraph");
          effects.consume(code);
          return;
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          effects.exit("chunkText");
          return lineStart;
        }
        effects.consume(code);
        return data;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/tokenize/partial-blank-line.js
var require_partial_blank_line = __commonJS({
  "node_modules/micromark/dist/tokenize/partial-blank-line.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = {
      tokenize: tokenizePartialBlankLine,
      partial: true
    };
    function tokenizePartialBlankLine(effects, ok, nok) {
      return factorySpace(effects, afterWhitespace, "linePrefix");
      function afterWhitespace(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
      }
    }
    module.exports = partialBlankLine;
  }
});

// node_modules/micromark/dist/initialize/document.js
var require_document = __commonJS({
  "node_modules/micromark/dist/initialize/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeDocument;
    var containerConstruct = {
      tokenize: tokenizeContainer
    };
    var lazyFlowConstruct = {
      tokenize: tokenizeLazyFlow
    };
    function initializeDocument(effects) {
      var self2 = this;
      var stack = [];
      var continued = 0;
      var inspectConstruct = {
        tokenize: tokenizeInspect,
        partial: true
      };
      var inspectResult;
      var childFlow;
      var childToken;
      return start;
      function start(code) {
        if (continued < stack.length) {
          self2.containerState = stack[continued][1];
          return effects.attempt(
            stack[continued][0].continuation,
            documentContinue,
            documentContinued
          )(code);
        }
        return documentContinued(code);
      }
      function documentContinue(code) {
        continued++;
        return start(code);
      }
      function documentContinued(code) {
        if (inspectResult && inspectResult.flowContinue) {
          return flowStart(code);
        }
        self2.interrupt = childFlow && childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
        self2.containerState = {};
        return effects.attempt(
          containerConstruct,
          containerContinue,
          flowStart
        )(code);
      }
      function containerContinue(code) {
        stack.push([self2.currentConstruct, self2.containerState]);
        self2.containerState = void 0;
        return documentContinued(code);
      }
      function flowStart(code) {
        if (code === null) {
          exitContainers(0, true);
          effects.consume(code);
          return;
        }
        childFlow = childFlow || self2.parser.flow(self2.now());
        effects.enter("chunkFlow", {
          contentType: "flow",
          previous: childToken,
          _tokenizer: childFlow
        });
        return flowContinue(code);
      }
      function flowContinue(code) {
        if (code === null) {
          continueFlow(effects.exit("chunkFlow"));
          return flowStart(code);
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          continueFlow(effects.exit("chunkFlow"));
          return effects.check(inspectConstruct, documentAfterPeek);
        }
        effects.consume(code);
        return flowContinue;
      }
      function documentAfterPeek(code) {
        exitContainers(
          inspectResult.continued,
          inspectResult && inspectResult.flowEnd
        );
        continued = 0;
        return start(code);
      }
      function continueFlow(token) {
        if (childToken)
          childToken.next = token;
        childToken = token;
        childFlow.lazy = inspectResult && inspectResult.lazy;
        childFlow.defineSkip(token.start);
        childFlow.write(self2.sliceStream(token));
      }
      function exitContainers(size, end) {
        var index = stack.length;
        if (childFlow && end) {
          childFlow.write([null]);
          childToken = childFlow = void 0;
        }
        while (index-- > size) {
          self2.containerState = stack[index][1];
          stack[index][0].exit.call(self2, effects);
        }
        stack.length = size;
      }
      function tokenizeInspect(effects2, ok) {
        var subcontinued = 0;
        inspectResult = {};
        return inspectStart;
        function inspectStart(code) {
          if (subcontinued < stack.length) {
            self2.containerState = stack[subcontinued][1];
            return effects2.attempt(
              stack[subcontinued][0].continuation,
              inspectContinue,
              inspectLess
            )(code);
          }
          if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
            inspectResult.flowContinue = true;
            return inspectDone(code);
          }
          self2.interrupt = childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
          self2.containerState = {};
          return effects2.attempt(
            containerConstruct,
            inspectFlowEnd,
            inspectDone
          )(code);
        }
        function inspectContinue(code) {
          subcontinued++;
          return self2.containerState._closeFlow ? inspectFlowEnd(code) : inspectStart(code);
        }
        function inspectLess(code) {
          if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
            self2.containerState = {};
            return effects2.attempt(
              containerConstruct,
              inspectFlowEnd,
              // Maybe flow, or a blank line?
              effects2.attempt(
                lazyFlowConstruct,
                inspectFlowEnd,
                effects2.check(partialBlankLine, inspectFlowEnd, inspectLazy)
              )
            )(code);
          }
          return inspectFlowEnd(code);
        }
        function inspectLazy(code) {
          subcontinued = stack.length;
          inspectResult.lazy = true;
          inspectResult.flowContinue = true;
          return inspectDone(code);
        }
        function inspectFlowEnd(code) {
          inspectResult.flowEnd = true;
          return inspectDone(code);
        }
        function inspectDone(code) {
          inspectResult.continued = subcontinued;
          self2.interrupt = self2.containerState = void 0;
          return ok(code);
        }
      }
    }
    function tokenizeContainer(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(this.parser.constructs.document, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
      );
    }
    function tokenizeLazyFlow(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.lazy(this.parser.constructs.flow, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
      );
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/util/size-chunks.js
var require_size_chunks = __commonJS({
  "node_modules/micromark/dist/util/size-chunks.js"(exports, module) {
    "use strict";
    function sizeChunks(chunks) {
      var index = -1;
      var size = 0;
      while (++index < chunks.length) {
        size += typeof chunks[index] === "string" ? chunks[index].length : 1;
      }
      return size;
    }
    module.exports = sizeChunks;
  }
});

// node_modules/micromark/dist/util/prefix-size.js
var require_prefix_size = __commonJS({
  "node_modules/micromark/dist/util/prefix-size.js"(exports, module) {
    "use strict";
    var sizeChunks = require_size_chunks();
    function prefixSize(events, type) {
      var tail = events[events.length - 1];
      if (!tail || tail[1].type !== type)
        return 0;
      return sizeChunks(tail[2].sliceStream(tail[1]));
    }
    module.exports = prefixSize;
  }
});

// node_modules/micromark/dist/constant/splice.js
var require_splice = __commonJS({
  "node_modules/micromark/dist/constant/splice.js"(exports, module) {
    "use strict";
    var splice = [].splice;
    module.exports = splice;
  }
});

// node_modules/micromark/dist/util/chunked-splice.js
var require_chunked_splice = __commonJS({
  "node_modules/micromark/dist/util/chunked-splice.js"(exports, module) {
    "use strict";
    var splice = require_splice();
    function chunkedSplice(list, start, remove, items) {
      var end = list.length;
      var chunkStart = 0;
      var parameters;
      if (start < 0) {
        start = -start > end ? 0 : end + start;
      } else {
        start = start > end ? end : start;
      }
      remove = remove > 0 ? remove : 0;
      if (items.length < 1e4) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        splice.apply(list, parameters);
      } else {
        if (remove)
          splice.apply(list, [start, remove]);
        while (chunkStart < items.length) {
          parameters = items.slice(chunkStart, chunkStart + 1e4);
          parameters.unshift(start, 0);
          splice.apply(list, parameters);
          chunkStart += 1e4;
          start += 1e4;
        }
      }
    }
    module.exports = chunkedSplice;
  }
});

// node_modules/micromark/dist/util/shallow.js
var require_shallow = __commonJS({
  "node_modules/micromark/dist/util/shallow.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    function shallow(object) {
      return assign({}, object);
    }
    module.exports = shallow;
  }
});

// node_modules/micromark/dist/util/subtokenize.js
var require_subtokenize = __commonJS({
  "node_modules/micromark/dist/util/subtokenize.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    var chunkedSplice = require_chunked_splice();
    var shallow = require_shallow();
    function subtokenize(events) {
      var jumps = {};
      var index = -1;
      var event;
      var lineIndex;
      var otherIndex;
      var otherEvent;
      var parameters;
      var subevents;
      var more;
      while (++index < events.length) {
        while (index in jumps) {
          index = jumps[index];
        }
        event = events[index];
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
          subevents = event[1]._tokenizer.events;
          otherIndex = 0;
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
            otherIndex += 2;
          }
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
            while (++otherIndex < subevents.length) {
              if (subevents[otherIndex][1].type === "content") {
                break;
              }
              if (subevents[otherIndex][1].type === "chunkText") {
                subevents[otherIndex][1].isInFirstContentOfListItem = true;
                otherIndex++;
              }
            }
          }
        }
        if (event[0] === "enter") {
          if (event[1].contentType) {
            assign(jumps, subcontent(events, index));
            index = jumps[index];
            more = true;
          }
        } else if (event[1]._container || event[1]._movePreviousLineEndings) {
          otherIndex = index;
          lineIndex = void 0;
          while (otherIndex--) {
            otherEvent = events[otherIndex];
            if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
              if (otherEvent[0] === "enter") {
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                }
                otherEvent[1].type = "lineEnding";
                lineIndex = otherIndex;
              }
            } else {
              break;
            }
          }
          if (lineIndex) {
            event[1].end = shallow(events[lineIndex][1].start);
            parameters = events.slice(lineIndex, index);
            parameters.unshift(event);
            chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters);
          }
        }
      }
      return !more;
    }
    function subcontent(events, eventIndex) {
      var token = events[eventIndex][1];
      var context = events[eventIndex][2];
      var startPosition = eventIndex - 1;
      var startPositions = [];
      var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
      var childEvents = tokenizer.events;
      var jumps = [];
      var gaps = {};
      var stream;
      var previous;
      var index;
      var entered;
      var end;
      var adjust;
      while (token) {
        while (events[++startPosition][1] !== token) {
        }
        startPositions.push(startPosition);
        if (!token._tokenizer) {
          stream = context.sliceStream(token);
          if (!token.next) {
            stream.push(null);
          }
          if (previous) {
            tokenizer.defineSkip(token.start);
          }
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = true;
          }
          tokenizer.write(stream);
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = void 0;
          }
        }
        previous = token;
        token = token.next;
      }
      token = previous;
      index = childEvents.length;
      while (index--) {
        if (childEvents[index][0] === "enter") {
          entered = true;
        } else if (
          // Find a void token that includes a break.
          entered && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line
        ) {
          add(childEvents.slice(index + 1, end));
          token._tokenizer = token.next = void 0;
          token = token.previous;
          end = index + 1;
        }
      }
      tokenizer.events = token._tokenizer = token.next = void 0;
      add(childEvents.slice(0, end));
      index = -1;
      adjust = 0;
      while (++index < jumps.length) {
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
      }
      return gaps;
      function add(slice) {
        var start = startPositions.pop();
        jumps.unshift([start, start + slice.length - 1]);
        chunkedSplice(events, start, 2, slice);
      }
    }
    module.exports = subtokenize;
  }
});

// node_modules/micromark/dist/tokenize/content.js
var require_content2 = __commonJS({
  "node_modules/micromark/dist/tokenize/content.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var prefixSize = require_prefix_size();
    var subtokenize = require_subtokenize();
    var factorySpace = require_factory_space();
    var content = {
      tokenize: tokenizeContent,
      resolve: resolveContent,
      interruptible: true,
      lazy: true
    };
    var continuationConstruct = {
      tokenize: tokenizeContinuation,
      partial: true
    };
    function resolveContent(events) {
      subtokenize(events);
      return events;
    }
    function tokenizeContent(effects, ok) {
      var previous;
      return start;
      function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
          contentType: "content"
        });
        return data(code);
      }
      function data(code) {
        if (code === null) {
          return contentEnd(code);
        }
        if (markdownLineEnding(code)) {
          return effects.check(
            continuationConstruct,
            contentContinue,
            contentEnd
          )(code);
        }
        effects.consume(code);
        return data;
      }
      function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
      }
      function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous = previous.next = effects.enter("chunkContent", {
          contentType: "content",
          previous
        });
        return data;
      }
    }
    function tokenizeContinuation(effects, ok, nok) {
      var self2 = this;
      return startLookahead;
      function startLookahead(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, prefixed, "linePrefix");
      }
      function prefixed(code) {
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        if (self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 || prefixSize(self2.events, "linePrefix") < 4) {
          return effects.interrupt(self2.parser.constructs.flow, nok, ok)(code);
        }
        return ok(code);
      }
    }
    module.exports = content;
  }
});

// node_modules/micromark/dist/initialize/flow.js
var require_flow = __commonJS({
  "node_modules/micromark/dist/initialize/flow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var content = require_content2();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeFlow;
    function initializeFlow(effects) {
      var self2 = this;
      var initial = effects.attempt(
        // Try to parse a blank line.
        partialBlankLine,
        atBlankEnding,
        // Try to parse initial flow (essentially, only code).
        effects.attempt(
          this.parser.constructs.flowInitial,
          afterConstruct,
          factorySpace(
            effects,
            effects.attempt(
              this.parser.constructs.flow,
              afterConstruct,
              effects.attempt(content, afterConstruct)
            ),
            "linePrefix"
          )
        )
      );
      return initial;
      function atBlankEnding(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self2.currentConstruct = void 0;
        return initial;
      }
      function afterConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self2.currentConstruct = void 0;
        return initial;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/initialize/text.js
var require_text = __commonJS({
  "node_modules/micromark/dist/initialize/text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var assign = require_assign();
    var shallow = require_shallow();
    var text = initializeFactory("text");
    var string = initializeFactory("string");
    var resolver = {
      resolveAll: createResolver()
    };
    function initializeFactory(field) {
      return {
        tokenize: initializeText,
        resolveAll: createResolver(
          field === "text" ? resolveAllLineSuffixes : void 0
        )
      };
      function initializeText(effects) {
        var self2 = this;
        var constructs = this.parser.constructs[field];
        var text2 = effects.attempt(constructs, start, notText);
        return start;
        function start(code) {
          return atBreak(code) ? text2(code) : notText(code);
        }
        function notText(code) {
          if (code === null) {
            effects.consume(code);
            return;
          }
          effects.enter("data");
          effects.consume(code);
          return data;
        }
        function data(code) {
          if (atBreak(code)) {
            effects.exit("data");
            return text2(code);
          }
          effects.consume(code);
          return data;
        }
        function atBreak(code) {
          var list = constructs[code];
          var index = -1;
          if (code === null) {
            return true;
          }
          if (list) {
            while (++index < list.length) {
              if (!list[index].previous || list[index].previous.call(self2, self2.previous)) {
                return true;
              }
            }
          }
        }
      }
    }
    function createResolver(extraResolver) {
      return resolveAllText;
      function resolveAllText(events, context) {
        var index = -1;
        var enter;
        while (++index <= events.length) {
          if (enter === void 0) {
            if (events[index] && events[index][1].type === "data") {
              enter = index;
              index++;
            }
          } else if (!events[index] || events[index][1].type !== "data") {
            if (index !== enter + 2) {
              events[enter][1].end = events[index - 1][1].end;
              events.splice(enter + 2, index - enter - 2);
              index = enter + 2;
            }
            enter = void 0;
          }
        }
        return extraResolver ? extraResolver(events, context) : events;
      }
    }
    function resolveAllLineSuffixes(events, context) {
      var eventIndex = -1;
      var chunks;
      var data;
      var chunk;
      var index;
      var bufferIndex;
      var size;
      var tabs;
      var token;
      while (++eventIndex <= events.length) {
        if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
          data = events[eventIndex - 1][1];
          chunks = context.sliceStream(data);
          index = chunks.length;
          bufferIndex = -1;
          size = 0;
          tabs = void 0;
          while (index--) {
            chunk = chunks[index];
            if (typeof chunk === "string") {
              bufferIndex = chunk.length;
              while (chunk.charCodeAt(bufferIndex - 1) === 32) {
                size++;
                bufferIndex--;
              }
              if (bufferIndex)
                break;
              bufferIndex = -1;
            } else if (chunk === -2) {
              tabs = true;
              size++;
            } else if (chunk === -1)
              ;
            else {
              index++;
              break;
            }
          }
          if (size) {
            token = {
              type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
              start: {
                line: data.end.line,
                column: data.end.column - size,
                offset: data.end.offset - size,
                _index: data.start._index + index,
                _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
              },
              end: shallow(data.end)
            };
            data.end = shallow(token.start);
            if (data.start.offset === data.end.offset) {
              assign(data, token);
            } else {
              events.splice(
                eventIndex,
                0,
                ["enter", token, context],
                ["exit", token, context]
              );
              eventIndex += 2;
            }
          }
          eventIndex++;
        }
      }
      return events;
    }
    exports.resolver = resolver;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/micromark/dist/util/miniflat.js
var require_miniflat = __commonJS({
  "node_modules/micromark/dist/util/miniflat.js"(exports, module) {
    "use strict";
    function miniflat(value) {
      return value === null || value === void 0 ? [] : "length" in value ? value : [value];
    }
    module.exports = miniflat;
  }
});

// node_modules/micromark/dist/util/combine-extensions.js
var require_combine_extensions = __commonJS({
  "node_modules/micromark/dist/util/combine-extensions.js"(exports, module) {
    "use strict";
    var hasOwnProperty = require_has_own_property();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    function combineExtensions(extensions) {
      var all = {};
      var index = -1;
      while (++index < extensions.length) {
        extension(all, extensions[index]);
      }
      return all;
    }
    function extension(all, extension2) {
      var hook;
      var left;
      var right;
      var code;
      for (hook in extension2) {
        left = hasOwnProperty.call(all, hook) ? all[hook] : all[hook] = {};
        right = extension2[hook];
        for (code in right) {
          left[code] = constructs(
            miniflat(right[code]),
            hasOwnProperty.call(left, code) ? left[code] : []
          );
        }
      }
    }
    function constructs(list, existing) {
      var index = -1;
      var before = [];
      while (++index < list.length) {
        ;
        (list[index].add === "after" ? existing : before).push(list[index]);
      }
      chunkedSplice(existing, 0, 0, before);
      return existing;
    }
    module.exports = combineExtensions;
  }
});

// node_modules/micromark/dist/util/chunked-push.js
var require_chunked_push = __commonJS({
  "node_modules/micromark/dist/util/chunked-push.js"(exports, module) {
    "use strict";
    var chunkedSplice = require_chunked_splice();
    function chunkedPush(list, items) {
      if (list.length) {
        chunkedSplice(list, list.length, 0, items);
        return list;
      }
      return items;
    }
    module.exports = chunkedPush;
  }
});

// node_modules/micromark/dist/util/resolve-all.js
var require_resolve_all = __commonJS({
  "node_modules/micromark/dist/util/resolve-all.js"(exports, module) {
    "use strict";
    function resolveAll(constructs, events, context) {
      var called = [];
      var index = -1;
      var resolve;
      while (++index < constructs.length) {
        resolve = constructs[index].resolveAll;
        if (resolve && called.indexOf(resolve) < 0) {
          events = resolve(events, context);
          called.push(resolve);
        }
      }
      return events;
    }
    module.exports = resolveAll;
  }
});

// node_modules/micromark/dist/util/serialize-chunks.js
var require_serialize_chunks = __commonJS({
  "node_modules/micromark/dist/util/serialize-chunks.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function serializeChunks(chunks) {
      var index = -1;
      var result = [];
      var chunk;
      var value;
      var atTab;
      while (++index < chunks.length) {
        chunk = chunks[index];
        if (typeof chunk === "string") {
          value = chunk;
        } else if (chunk === -5) {
          value = "\r";
        } else if (chunk === -4) {
          value = "\n";
        } else if (chunk === -3) {
          value = "\r\n";
        } else if (chunk === -2) {
          value = "	";
        } else if (chunk === -1) {
          if (atTab)
            continue;
          value = " ";
        } else {
          value = fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
      }
      return result.join("");
    }
    module.exports = serializeChunks;
  }
});

// node_modules/micromark/dist/util/slice-chunks.js
var require_slice_chunks = __commonJS({
  "node_modules/micromark/dist/util/slice-chunks.js"(exports, module) {
    "use strict";
    function sliceChunks(chunks, token) {
      var startIndex = token.start._index;
      var startBufferIndex = token.start._bufferIndex;
      var endIndex = token.end._index;
      var endBufferIndex = token.end._bufferIndex;
      var view;
      if (startIndex === endIndex) {
        view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
      } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
          view[0] = view[0].slice(startBufferIndex);
        }
        if (endBufferIndex > 0) {
          view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
      }
      return view;
    }
    module.exports = sliceChunks;
  }
});

// node_modules/micromark/dist/util/create-tokenizer.js
var require_create_tokenizer = __commonJS({
  "node_modules/micromark/dist/util/create-tokenizer.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    var resolveAll = require_resolve_all();
    var serializeChunks = require_serialize_chunks();
    var shallow = require_shallow();
    var sliceChunks = require_slice_chunks();
    function createTokenizer(parser, initialize, from) {
      var point = from ? shallow(from) : {
        line: 1,
        column: 1,
        offset: 0
      };
      var columnStart = {};
      var resolveAllConstructs = [];
      var chunks = [];
      var stack = [];
      var effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
          interrupt: true
        }),
        lazy: constructFactory(onsuccessfulcheck, {
          lazy: true
        })
      };
      var context = {
        previous: null,
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip: skip,
        write
      };
      var state = initialize.tokenize.call(context, effects);
      if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
      }
      point._index = 0;
      point._bufferIndex = -1;
      return context;
      function write(slice) {
        chunks = chunkedPush(chunks, slice);
        main();
        if (chunks[chunks.length - 1] !== null) {
          return [];
        }
        addResult(initialize, 0);
        context.events = resolveAll(resolveAllConstructs, context.events, context);
        return context.events;
      }
      function sliceSerialize(token) {
        return serializeChunks(sliceStream(token));
      }
      function sliceStream(token) {
        return sliceChunks(chunks, token);
      }
      function now() {
        return shallow(point);
      }
      function skip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
      }
      function main() {
        var chunkIndex;
        var chunk;
        while (point._index < chunks.length) {
          chunk = chunks[point._index];
          if (typeof chunk === "string") {
            chunkIndex = point._index;
            if (point._bufferIndex < 0) {
              point._bufferIndex = 0;
            }
            while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
              go(chunk.charCodeAt(point._bufferIndex));
            }
          } else {
            go(chunk);
          }
        }
      }
      function go(code) {
        state = state(code);
      }
      function consume(code) {
        if (markdownLineEnding(code)) {
          point.line++;
          point.column = 1;
          point.offset += code === -3 ? 2 : 1;
          accountForPotentialSkip();
        } else if (code !== -1) {
          point.column++;
          point.offset++;
        }
        if (point._bufferIndex < 0) {
          point._index++;
        } else {
          point._bufferIndex++;
          if (point._bufferIndex === chunks[point._index].length) {
            point._bufferIndex = -1;
            point._index++;
          }
        }
        context.previous = code;
      }
      function enter(type, fields) {
        var token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push(["enter", token, context]);
        stack.push(token);
        return token;
      }
      function exit(type) {
        var token = stack.pop();
        token.end = now();
        context.events.push(["exit", token, context]);
        return token;
      }
      function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
      }
      function onsuccessfulcheck(construct, info) {
        info.restore();
      }
      function constructFactory(onreturn, fields) {
        return hook;
        function hook(constructs, returnState, bogusState) {
          var listOfConstructs;
          var constructIndex;
          var currentConstruct;
          var info;
          return constructs.tokenize || "length" in constructs ? handleListOfConstructs(miniflat(constructs)) : handleMapOfConstructs;
          function handleMapOfConstructs(code) {
            if (code in constructs || null in constructs) {
              return handleListOfConstructs(
                constructs.null ? (
                  /* c8 ignore next */
                  miniflat(constructs[code]).concat(miniflat(constructs.null))
                ) : constructs[code]
              )(code);
            }
            return bogusState(code);
          }
          function handleListOfConstructs(list) {
            listOfConstructs = list;
            constructIndex = 0;
            return handleConstruct(list[constructIndex]);
          }
          function handleConstruct(construct) {
            return start;
            function start(code) {
              info = store();
              currentConstruct = construct;
              if (!construct.partial) {
                context.currentConstruct = construct;
              }
              if (construct.name && context.parser.constructs.disable.null.indexOf(construct.name) > -1) {
                return nok();
              }
              return construct.tokenize.call(
                fields ? assign({}, context, fields) : context,
                effects,
                ok,
                nok
              )(code);
            }
          }
          function ok(code) {
            onreturn(currentConstruct, info);
            return returnState;
          }
          function nok(code) {
            info.restore();
            if (++constructIndex < listOfConstructs.length) {
              return handleConstruct(listOfConstructs[constructIndex]);
            }
            return bogusState;
          }
        }
      }
      function addResult(construct, from2) {
        if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
          resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
          chunkedSplice(
            context.events,
            from2,
            context.events.length - from2,
            construct.resolve(context.events.slice(from2), context)
          );
        }
        if (construct.resolveTo) {
          context.events = construct.resolveTo(context.events, context);
        }
      }
      function store() {
        var startPoint = now();
        var startPrevious = context.previous;
        var startCurrentConstruct = context.currentConstruct;
        var startEventsIndex = context.events.length;
        var startStack = Array.from(stack);
        return {
          restore,
          from: startEventsIndex
        };
        function restore() {
          point = startPoint;
          context.previous = startPrevious;
          context.currentConstruct = startCurrentConstruct;
          context.events.length = startEventsIndex;
          stack = startStack;
          accountForPotentialSkip();
        }
      }
      function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
          point.column = columnStart[point.line];
          point.offset += columnStart[point.line] - 1;
        }
      }
    }
    module.exports = createTokenizer;
  }
});

// node_modules/micromark/dist/character/markdown-line-ending-or-space.js
var require_markdown_line_ending_or_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending-or-space.js"(exports, module) {
    "use strict";
    function markdownLineEndingOrSpace(code) {
      return code < 0 || code === 32;
    }
    module.exports = markdownLineEndingOrSpace;
  }
});

// node_modules/micromark/dist/constant/unicode-punctuation-regex.js
var require_unicode_punctuation_regex = __commonJS({
  "node_modules/micromark/dist/constant/unicode-punctuation-regex.js"(exports, module) {
    "use strict";
    var unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
    module.exports = unicodePunctuation;
  }
});

// node_modules/micromark/dist/util/regex-check.js
var require_regex_check = __commonJS({
  "node_modules/micromark/dist/util/regex-check.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function regexCheck(regex) {
      return check;
      function check(code) {
        return regex.test(fromCharCode(code));
      }
    }
    module.exports = regexCheck;
  }
});

// node_modules/micromark/dist/character/unicode-punctuation.js
var require_unicode_punctuation = __commonJS({
  "node_modules/micromark/dist/character/unicode-punctuation.js"(exports, module) {
    "use strict";
    var unicodePunctuationRegex = require_unicode_punctuation_regex();
    var regexCheck = require_regex_check();
    var unicodePunctuation = regexCheck(unicodePunctuationRegex);
    module.exports = unicodePunctuation;
  }
});

// node_modules/micromark/dist/character/unicode-whitespace.js
var require_unicode_whitespace = __commonJS({
  "node_modules/micromark/dist/character/unicode-whitespace.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var unicodeWhitespace = regexCheck(/\s/);
    module.exports = unicodeWhitespace;
  }
});

// node_modules/micromark/dist/util/classify-character.js
var require_classify_character = __commonJS({
  "node_modules/micromark/dist/util/classify-character.js"(exports, module) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    function classifyCharacter(code) {
      if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
        return 1;
      }
      if (unicodePunctuation(code)) {
        return 2;
      }
    }
    module.exports = classifyCharacter;
  }
});

// node_modules/micromark/dist/util/move-point.js
var require_move_point = __commonJS({
  "node_modules/micromark/dist/util/move-point.js"(exports, module) {
    "use strict";
    function movePoint(point, offset) {
      point.column += offset;
      point.offset += offset;
      point._bufferIndex += offset;
      return point;
    }
    module.exports = movePoint;
  }
});

// node_modules/micromark/dist/tokenize/attention.js
var require_attention = __commonJS({
  "node_modules/micromark/dist/tokenize/attention.js"(exports, module) {
    "use strict";
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var classifyCharacter = require_classify_character();
    var movePoint = require_move_point();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var attention = {
      name: "attention",
      tokenize: tokenizeAttention,
      resolveAll: resolveAllAttention
    };
    function resolveAllAttention(events, context) {
      var index = -1;
      var open;
      var group;
      var text;
      var openingSequence;
      var closingSequence;
      var use;
      var nextEvents;
      var offset;
      while (++index < events.length) {
        if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
          open = index;
          while (open--) {
            if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
            context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
              if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
                continue;
              }
              use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
              openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: movePoint(shallow(events[open][1].end), -use),
                end: shallow(events[open][1].end)
              };
              closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: shallow(events[index][1].start),
                end: movePoint(shallow(events[index][1].start), use)
              };
              text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: shallow(events[open][1].end),
                end: shallow(events[index][1].start)
              };
              group = {
                type: use > 1 ? "strong" : "emphasis",
                start: shallow(openingSequence.start),
                end: shallow(closingSequence.end)
              };
              events[open][1].end = shallow(openingSequence.start);
              events[index][1].start = shallow(closingSequence.end);
              nextEvents = [];
              if (events[open][1].end.offset - events[open][1].start.offset) {
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[open][1], context],
                  ["exit", events[open][1], context]
                ]);
              }
              nextEvents = chunkedPush(nextEvents, [
                ["enter", group, context],
                ["enter", openingSequence, context],
                ["exit", openingSequence, context],
                ["enter", text, context]
              ]);
              nextEvents = chunkedPush(
                nextEvents,
                resolveAll(
                  context.parser.constructs.insideSpan.null,
                  events.slice(open + 1, index),
                  context
                )
              );
              nextEvents = chunkedPush(nextEvents, [
                ["exit", text, context],
                ["enter", closingSequence, context],
                ["exit", closingSequence, context],
                ["exit", group, context]
              ]);
              if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[index][1], context],
                  ["exit", events[index][1], context]
                ]);
              } else {
                offset = 0;
              }
              chunkedSplice(events, open - 1, index - open + 3, nextEvents);
              index = open + nextEvents.length - offset - 2;
              break;
            }
          }
        }
      }
      index = -1;
      while (++index < events.length) {
        if (events[index][1].type === "attentionSequence") {
          events[index][1].type = "data";
        }
      }
      return events;
    }
    function tokenizeAttention(effects, ok) {
      var before = classifyCharacter(this.previous);
      var marker;
      return start;
      function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
      }
      function sequence(code) {
        var token;
        var after;
        var open;
        var close;
        if (code === marker) {
          effects.consume(code);
          return sequence;
        }
        token = effects.exit("attentionSequence");
        after = classifyCharacter(code);
        open = !after || after === 2 && before;
        close = !before || before === 2 && after;
        token._open = marker === 42 ? open : open && (before || !close);
        token._close = marker === 42 ? close : close && (after || !open);
        return ok(code);
      }
    }
    module.exports = attention;
  }
});

// node_modules/micromark/dist/character/ascii-alpha.js
var require_ascii_alpha = __commonJS({
  "node_modules/micromark/dist/character/ascii-alpha.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlpha = regexCheck(/[A-Za-z]/);
    module.exports = asciiAlpha;
  }
});

// node_modules/micromark/dist/character/ascii-alphanumeric.js
var require_ascii_alphanumeric = __commonJS({
  "node_modules/micromark/dist/character/ascii-alphanumeric.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    module.exports = asciiAlphanumeric;
  }
});

// node_modules/micromark/dist/character/ascii-atext.js
var require_ascii_atext = __commonJS({
  "node_modules/micromark/dist/character/ascii-atext.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    module.exports = asciiAtext;
  }
});

// node_modules/micromark/dist/character/ascii-control.js
var require_ascii_control = __commonJS({
  "node_modules/micromark/dist/character/ascii-control.js"(exports, module) {
    "use strict";
    function asciiControl(code) {
      return (
        // Special whitespace codes (which have negative values), C0 and Control
        // character DEL
        code < 32 || code === 127
      );
    }
    module.exports = asciiControl;
  }
});

// node_modules/micromark/dist/tokenize/autolink.js
var require_autolink = __commonJS({
  "node_modules/micromark/dist/tokenize/autolink.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiAtext = require_ascii_atext();
    var asciiControl = require_ascii_control();
    var autolink = {
      name: "autolink",
      tokenize: tokenizeAutolink
    };
    function tokenizeAutolink(effects, ok, nok) {
      var size = 1;
      return start;
      function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
      }
      function open(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return schemeOrEmailAtext;
        }
        return asciiAtext(code) ? emailAtext(code) : nok(code);
      }
      function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
      }
      function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
          effects.consume(code);
          return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
          effects.consume(code);
          return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
      }
      function urlInside(code) {
        if (code === 62) {
          effects.exit("autolinkProtocol");
          return end(code);
        }
        if (code === 32 || code === 60 || asciiControl(code)) {
          return nok(code);
        }
        effects.consume(code);
        return urlInside;
      }
      function emailAtext(code) {
        if (code === 64) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (asciiAtext(code)) {
          effects.consume(code);
          return emailAtext;
        }
        return nok(code);
      }
      function emailAtSignOrDot(code) {
        return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
      }
      function emailLabel(code) {
        if (code === 46) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (code === 62) {
          effects.exit("autolinkProtocol").type = "autolinkEmail";
          return end(code);
        }
        return emailValue(code);
      }
      function emailValue(code) {
        if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
          effects.consume(code);
          return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
      }
      function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
      }
    }
    module.exports = autolink;
  }
});

// node_modules/micromark/dist/tokenize/block-quote.js
var require_block_quote = __commonJS({
  "node_modules/micromark/dist/tokenize/block-quote.js"(exports, module) {
    "use strict";
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var blockQuote = {
      name: "blockQuote",
      tokenize: tokenizeBlockQuoteStart,
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation
      },
      exit
    };
    function tokenizeBlockQuoteStart(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        if (code === 62) {
          if (!self2.containerState.open) {
            effects.enter("blockQuote", {
              _container: true
            });
            self2.containerState.open = true;
          }
          effects.enter("blockQuotePrefix");
          effects.enter("blockQuoteMarker");
          effects.consume(code);
          effects.exit("blockQuoteMarker");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        if (markdownSpace(code)) {
          effects.enter("blockQuotePrefixWhitespace");
          effects.consume(code);
          effects.exit("blockQuotePrefixWhitespace");
          effects.exit("blockQuotePrefix");
          return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
      }
    }
    function tokenizeBlockQuoteContinuation(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(blockQuote, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
      );
    }
    function exit(effects) {
      effects.exit("blockQuote");
    }
    module.exports = blockQuote;
  }
});

// node_modules/micromark/dist/character/ascii-punctuation.js
var require_ascii_punctuation = __commonJS({
  "node_modules/micromark/dist/character/ascii-punctuation.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    module.exports = asciiPunctuation;
  }
});

// node_modules/micromark/dist/tokenize/character-escape.js
var require_character_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/character-escape.js"(exports, module) {
    "use strict";
    var asciiPunctuation = require_ascii_punctuation();
    var characterEscape = {
      name: "characterEscape",
      tokenize: tokenizeCharacterEscape
    };
    function tokenizeCharacterEscape(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
      }
      function open(code) {
        if (asciiPunctuation(code)) {
          effects.enter("characterEscapeValue");
          effects.consume(code);
          effects.exit("characterEscapeValue");
          effects.exit("characterEscape");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = characterEscape;
  }
});

// node_modules/parse-entities/decode-entity.browser.js
var require_decode_entity_browser = __commonJS({
  "node_modules/parse-entities/decode-entity.browser.js"(exports, module) {
    "use strict";
    var el;
    var semicolon = 59;
    module.exports = decodeEntity;
    function decodeEntity(characters) {
      var entity = "&" + characters + ";";
      var char;
      el = el || document.createElement("i");
      el.innerHTML = entity;
      char = el.textContent;
      if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") {
        return false;
      }
      return char === entity ? false : char;
    }
  }
});

// node_modules/micromark/dist/character/ascii-digit.js
var require_ascii_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-digit.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiDigit = regexCheck(/\d/);
    module.exports = asciiDigit;
  }
});

// node_modules/micromark/dist/character/ascii-hex-digit.js
var require_ascii_hex_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-hex-digit.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    module.exports = asciiHexDigit;
  }
});

// node_modules/micromark/dist/tokenize/character-reference.js
var require_character_reference = __commonJS({
  "node_modules/micromark/dist/tokenize/character-reference.js"(exports, module) {
    "use strict";
    var decodeEntity = require_decode_entity_browser();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiDigit = require_ascii_digit();
    var asciiHexDigit = require_ascii_hex_digit();
    function _interopDefaultLegacy(e2) {
      return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { default: e2 };
    }
    var decodeEntity__default = _interopDefaultLegacy(decodeEntity);
    var characterReference = {
      name: "characterReference",
      tokenize: tokenizeCharacterReference
    };
    function tokenizeCharacterReference(effects, ok, nok) {
      var self2 = this;
      var size = 0;
      var max;
      var test;
      return start;
      function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
      }
      function open(code) {
        if (code === 35) {
          effects.enter("characterReferenceMarkerNumeric");
          effects.consume(code);
          effects.exit("characterReferenceMarkerNumeric");
          return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = asciiAlphanumeric;
        return value(code);
      }
      function numeric(code) {
        if (code === 88 || code === 120) {
          effects.enter("characterReferenceMarkerHexadecimal");
          effects.consume(code);
          effects.exit("characterReferenceMarkerHexadecimal");
          effects.enter("characterReferenceValue");
          max = 6;
          test = asciiHexDigit;
          return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = asciiDigit;
        return value(code);
      }
      function value(code) {
        var token;
        if (code === 59 && size) {
          token = effects.exit("characterReferenceValue");
          if (test === asciiAlphanumeric && !decodeEntity__default["default"](self2.sliceSerialize(token))) {
            return nok(code);
          }
          effects.enter("characterReferenceMarker");
          effects.consume(code);
          effects.exit("characterReferenceMarker");
          effects.exit("characterReference");
          return ok;
        }
        if (test(code) && size++ < max) {
          effects.consume(code);
          return value;
        }
        return nok(code);
      }
    }
    module.exports = characterReference;
  }
});

// node_modules/micromark/dist/tokenize/code-fenced.js
var require_code_fenced = __commonJS({
  "node_modules/micromark/dist/tokenize/code-fenced.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeFenced = {
      name: "codeFenced",
      tokenize: tokenizeCodeFenced,
      concrete: true
    };
    function tokenizeCodeFenced(effects, ok, nok) {
      var self2 = this;
      var closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
      };
      var initialPrefix = prefixSize(this.events, "linePrefix");
      var sizeOpen = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
      }
      function sequenceOpen(code) {
        if (code === marker) {
          effects.consume(code);
          sizeOpen++;
          return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, "whitespace")(code);
      }
      function infoOpen(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return info(code);
      }
      function info(code) {
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceInfo");
          return factorySpace(effects, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker)
          return nok(code);
        effects.consume(code);
        return info;
      }
      function infoAfter(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return meta(code);
      }
      function meta(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceMeta");
          return openAfter(code);
        }
        if (code === 96 && code === marker)
          return nok(code);
        effects.consume(code);
        return meta;
      }
      function openAfter(code) {
        effects.exit("codeFencedFence");
        return self2.interrupt ? ok(code) : content(code);
      }
      function content(code) {
        if (code === null) {
          return after(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return effects.attempt(
            closingFenceConstruct,
            after,
            initialPrefix ? factorySpace(effects, content, "linePrefix", initialPrefix + 1) : content
          );
        }
        effects.enter("codeFlowValue");
        return contentContinue(code);
      }
      function contentContinue(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return content(code);
        }
        effects.consume(code);
        return contentContinue;
      }
      function after(code) {
        effects.exit("codeFenced");
        return ok(code);
      }
      function tokenizeClosingFence(effects2, ok2, nok2) {
        var size = 0;
        return factorySpace(
          effects2,
          closingSequenceStart,
          "linePrefix",
          this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
        );
        function closingSequenceStart(code) {
          effects2.enter("codeFencedFence");
          effects2.enter("codeFencedFenceSequence");
          return closingSequence(code);
        }
        function closingSequence(code) {
          if (code === marker) {
            effects2.consume(code);
            size++;
            return closingSequence;
          }
          if (size < sizeOpen)
            return nok2(code);
          effects2.exit("codeFencedFenceSequence");
          return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
        }
        function closingSequenceEnd(code) {
          if (code === null || markdownLineEnding(code)) {
            effects2.exit("codeFencedFence");
            return ok2(code);
          }
          return nok2(code);
        }
      }
    }
    module.exports = codeFenced;
  }
});

// node_modules/micromark/dist/tokenize/code-indented.js
var require_code_indented = __commonJS({
  "node_modules/micromark/dist/tokenize/code-indented.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedSplice = require_chunked_splice();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeIndented = {
      name: "codeIndented",
      tokenize: tokenizeCodeIndented,
      resolve: resolveCodeIndented
    };
    var indentedContentConstruct = {
      tokenize: tokenizeIndentedContent,
      partial: true
    };
    function resolveCodeIndented(events, context) {
      var code = {
        type: "codeIndented",
        start: events[0][1].start,
        end: events[events.length - 1][1].end
      };
      chunkedSplice(events, 0, 0, [["enter", code, context]]);
      chunkedSplice(events, events.length, 0, [["exit", code, context]]);
      return events;
    }
    function tokenizeCodeIndented(effects, ok, nok) {
      return effects.attempt(indentedContentConstruct, afterPrefix, nok);
      function afterPrefix(code) {
        if (code === null) {
          return ok(code);
        }
        if (markdownLineEnding(code)) {
          return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code);
        }
        effects.enter("codeFlowValue");
        return content(code);
      }
      function content(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return afterPrefix(code);
        }
        effects.consume(code);
        return content;
      }
    }
    function tokenizeIndentedContent(effects, ok, nok) {
      var self2 = this;
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
      function afterPrefix(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
        }
        return prefixSize(self2.events, "linePrefix") < 4 ? nok(code) : ok(code);
      }
    }
    module.exports = codeIndented;
  }
});

// node_modules/micromark/dist/tokenize/code-text.js
var require_code_text = __commonJS({
  "node_modules/micromark/dist/tokenize/code-text.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var codeText = {
      name: "codeText",
      tokenize: tokenizeCodeText,
      resolve: resolveCodeText,
      previous
    };
    function resolveCodeText(events) {
      var tailExitIndex = events.length - 4;
      var headEnterIndex = 3;
      var index;
      var enter;
      if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex;
        while (++index < tailExitIndex) {
          if (events[index][1].type === "codeTextData") {
            events[tailExitIndex][1].type = events[headEnterIndex][1].type = "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
          }
        }
      }
      index = headEnterIndex - 1;
      tailExitIndex++;
      while (++index <= tailExitIndex) {
        if (enter === void 0) {
          if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
            enter = index;
          }
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
          events[enter][1].type = "codeTextData";
          if (index !== enter + 2) {
            events[enter][1].end = events[index - 1][1].end;
            events.splice(enter + 2, index - enter - 2);
            tailExitIndex -= index - enter - 2;
            index = enter + 2;
          }
          enter = void 0;
        }
      }
      return events;
    }
    function previous(code) {
      return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
    }
    function tokenizeCodeText(effects, ok, nok) {
      var sizeOpen = 0;
      var size;
      var token;
      return start;
      function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
      }
      function openingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          sizeOpen++;
          return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
      }
      function gap(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 96) {
          token = effects.enter("codeTextSequence");
          size = 0;
          return closingSequence(code);
        }
        if (code === 32) {
          effects.enter("space");
          effects.consume(code);
          effects.exit("space");
          return gap;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return gap;
        }
        effects.enter("codeTextData");
        return data(code);
      }
      function data(code) {
        if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
          effects.exit("codeTextData");
          return gap(code);
        }
        effects.consume(code);
        return data;
      }
      function closingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          size++;
          return closingSequence;
        }
        if (size === sizeOpen) {
          effects.exit("codeTextSequence");
          effects.exit("codeText");
          return ok(code);
        }
        token.type = "codeTextData";
        return data(code);
      }
    }
    module.exports = codeText;
  }
});

// node_modules/micromark/dist/tokenize/factory-destination.js
var require_factory_destination = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-destination.js"(exports, module) {
    "use strict";
    var asciiControl = require_ascii_control();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownLineEnding = require_markdown_line_ending();
    function destinationFactory(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
      var limit = max || Infinity;
      var balance = 0;
      return start;
      function start(code) {
        if (code === 60) {
          effects.enter(type);
          effects.enter(literalType);
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          return destinationEnclosedBefore;
        }
        if (asciiControl(code) || code === 41) {
          return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationRaw(code);
      }
      function destinationEnclosedBefore(code) {
        if (code === 62) {
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          effects.exit(literalType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationEnclosed(code);
      }
      function destinationEnclosed(code) {
        if (code === 62) {
          effects.exit("chunkString");
          effects.exit(stringType);
          return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
      }
      function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
          effects.consume(code);
          return destinationEnclosed;
        }
        return destinationEnclosed(code);
      }
      function destinationRaw(code) {
        if (code === 40) {
          if (++balance > limit)
            return nok(code);
          effects.consume(code);
          return destinationRaw;
        }
        if (code === 41) {
          if (!balance--) {
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
          }
          effects.consume(code);
          return destinationRaw;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          if (balance)
            return nok(code);
          effects.exit("chunkString");
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok(code);
        }
        if (asciiControl(code))
          return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
      }
      function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
          effects.consume(code);
          return destinationRaw;
        }
        return destinationRaw(code);
      }
    }
    module.exports = destinationFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-label.js
var require_factory_label = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-label.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    function labelFactory(effects, ok, nok, type, markerType, stringType) {
      var self2 = this;
      var size = 0;
      var data;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
      }
      function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || /* c8 ignore next */
        code === 94 && /* c8 ignore next */
        !size && /* c8 ignore next */
        "_hiddenFootnoteSupport" in self2.parser.constructs || size > 999) {
          return nok(code);
        }
        if (code === 93) {
          effects.exit(stringType);
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return atBreak;
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return label(code);
      }
      function label(code) {
        if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
          effects.exit("chunkString");
          return atBreak(code);
        }
        effects.consume(code);
        data = data || !markdownSpace(code);
        return code === 92 ? labelEscape : label;
      }
      function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
          effects.consume(code);
          size++;
          return label;
        }
        return label(code);
      }
    }
    module.exports = labelFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-whitespace.js
var require_factory_whitespace = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-whitespace.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    function whitespaceFactory(effects, ok) {
      var seen;
      return start;
      function start(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          seen = true;
          return start;
        }
        if (markdownSpace(code)) {
          return factorySpace(
            effects,
            start,
            seen ? "linePrefix" : "lineSuffix"
          )(code);
        }
        return ok(code);
      }
    }
    module.exports = whitespaceFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-title.js
var require_factory_title = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-title.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    function titleFactory(effects, ok, nok, type, markerType, stringType) {
      var marker;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
      }
      function atFirstTitleBreak(code) {
        if (code === marker) {
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
      }
      function atTitleBreak(code) {
        if (code === marker) {
          effects.exit(stringType);
          return atFirstTitleBreak(marker);
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return title(code);
      }
      function title(code) {
        if (code === marker || code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
      }
      function titleEscape(code) {
        if (code === marker || code === 92) {
          effects.consume(code);
          return title;
        }
        return title(code);
      }
    }
    module.exports = titleFactory;
  }
});

// node_modules/micromark/dist/tokenize/definition.js
var require_definition = __commonJS({
  "node_modules/micromark/dist/tokenize/definition.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var normalizeIdentifier = require_normalize_identifier();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factorySpace = require_factory_space();
    var factoryWhitespace = require_factory_whitespace();
    var factoryTitle = require_factory_title();
    var definition = {
      name: "definition",
      tokenize: tokenizeDefinition
    };
    var titleConstruct = {
      tokenize: tokenizeTitle,
      partial: true
    };
    function tokenizeDefinition(effects, ok, nok) {
      var self2 = this;
      var identifier;
      return start;
      function start(code) {
        effects.enter("definition");
        return factoryLabel.call(
          self2,
          effects,
          labelAfter,
          nok,
          "definitionLabel",
          "definitionLabelMarker",
          "definitionLabelString"
        )(code);
      }
      function labelAfter(code) {
        identifier = normalizeIdentifier(
          self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1)
        );
        if (code === 58) {
          effects.enter("definitionMarker");
          effects.consume(code);
          effects.exit("definitionMarker");
          return factoryWhitespace(
            effects,
            factoryDestination(
              effects,
              effects.attempt(
                titleConstruct,
                factorySpace(effects, after, "whitespace"),
                factorySpace(effects, after, "whitespace")
              ),
              nok,
              "definitionDestination",
              "definitionDestinationLiteral",
              "definitionDestinationLiteralMarker",
              "definitionDestinationRaw",
              "definitionDestinationString"
            )
          );
        }
        return nok(code);
      }
      function after(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("definition");
          if (self2.parser.defined.indexOf(identifier) < 0) {
            self2.parser.defined.push(identifier);
          }
          return ok(code);
        }
        return nok(code);
      }
    }
    function tokenizeTitle(effects, ok, nok) {
      return start;
      function start(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
      }
      function before(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(
            effects,
            factorySpace(effects, after, "whitespace"),
            nok,
            "definitionTitle",
            "definitionTitleMarker",
            "definitionTitleString"
          )(code);
        }
        return nok(code);
      }
      function after(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
      }
    }
    module.exports = definition;
  }
});

// node_modules/micromark/dist/tokenize/hard-break-escape.js
var require_hard_break_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/hard-break-escape.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var hardBreakEscape = {
      name: "hardBreakEscape",
      tokenize: tokenizeHardBreakEscape
    };
    function tokenizeHardBreakEscape(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (markdownLineEnding(code)) {
          effects.exit("escapeMarker");
          effects.exit("hardBreakEscape");
          return ok(code);
        }
        return nok(code);
      }
    }
    module.exports = hardBreakEscape;
  }
});

// node_modules/micromark/dist/tokenize/heading-atx.js
var require_heading_atx = __commonJS({
  "node_modules/micromark/dist/tokenize/heading-atx.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var chunkedSplice = require_chunked_splice();
    var factorySpace = require_factory_space();
    var headingAtx = {
      name: "headingAtx",
      tokenize: tokenizeHeadingAtx,
      resolve: resolveHeadingAtx
    };
    function resolveHeadingAtx(events, context) {
      var contentEnd = events.length - 2;
      var contentStart = 3;
      var content;
      var text;
      if (events[contentStart][1].type === "whitespace") {
        contentStart += 2;
      }
      if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
        contentEnd -= 2;
      }
      if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
      }
      if (contentEnd > contentStart) {
        content = {
          type: "atxHeadingText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        text = {
          type: "chunkText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end,
          contentType: "text"
        };
        chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
          ["enter", content, context],
          ["enter", text, context],
          ["exit", text, context],
          ["exit", content, context]
        ]);
      }
      return events;
    }
    function tokenizeHeadingAtx(effects, ok, nok) {
      var self2 = this;
      var size = 0;
      return start;
      function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
      }
      function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
          effects.consume(code);
          return fenceOpenInside;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingSequence");
          return self2.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
      }
      function headingBreak(code) {
        if (code === 35) {
          effects.enter("atxHeadingSequence");
          return sequence(code);
        }
        if (code === null || markdownLineEnding(code)) {
          effects.exit("atxHeading");
          return ok(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, headingBreak, "whitespace")(code);
        }
        effects.enter("atxHeadingText");
        return data(code);
      }
      function sequence(code) {
        if (code === 35) {
          effects.consume(code);
          return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
      }
      function data(code) {
        if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingText");
          return headingBreak(code);
        }
        effects.consume(code);
        return data;
      }
    }
    module.exports = headingAtx;
  }
});

// node_modules/micromark/dist/constant/html-block-names.js
var require_html_block_names = __commonJS({
  "node_modules/micromark/dist/constant/html-block-names.js"(exports, module) {
    "use strict";
    var basics = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
    module.exports = basics;
  }
});

// node_modules/micromark/dist/constant/html-raw-names.js
var require_html_raw_names = __commonJS({
  "node_modules/micromark/dist/constant/html-raw-names.js"(exports, module) {
    "use strict";
    var raws = ["pre", "script", "style", "textarea"];
    module.exports = raws;
  }
});

// node_modules/micromark/dist/tokenize/html-flow.js
var require_html_flow = __commonJS({
  "node_modules/micromark/dist/tokenize/html-flow.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var fromCharCode = require_from_char_code();
    var htmlBlockNames = require_html_block_names();
    var htmlRawNames = require_html_raw_names();
    var partialBlankLine = require_partial_blank_line();
    var htmlFlow = {
      name: "htmlFlow",
      tokenize: tokenizeHtmlFlow,
      resolveTo: resolveToHtmlFlow,
      concrete: true
    };
    var nextBlankConstruct = {
      tokenize: tokenizeNextBlank,
      partial: true
    };
    function resolveToHtmlFlow(events) {
      var index = events.length;
      while (index--) {
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") {
          break;
        }
      }
      if (index > 1 && events[index - 2][1].type === "linePrefix") {
        events[index][1].start = events[index - 2][1].start;
        events[index + 1][1].start = events[index - 2][1].start;
        events.splice(index - 2, 2);
      }
      return events;
    }
    function tokenizeHtmlFlow(effects, ok, nok) {
      var self2 = this;
      var kind;
      var startTag;
      var buffer;
      var index;
      var marker;
      return start;
      function start(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationStart;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          kind = 3;
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          startTag = true;
          return tagName;
        }
        return nok(code);
      }
      function declarationStart(code) {
        if (code === 45) {
          effects.consume(code);
          kind = 2;
          return commentOpenInside;
        }
        if (code === 91) {
          effects.consume(code);
          kind = 5;
          buffer = "CDATA[";
          index = 0;
          return cdataOpenInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          kind = 4;
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
      }
      function commentOpenInside(code) {
        if (code === 45) {
          effects.consume(code);
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
      }
      function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? self2.interrupt ? ok : continuation : cdataOpenInside;
        }
        return nok(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function tagName(code) {
        if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          if (code !== 47 && startTag && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 1;
            return self2.interrupt ? ok(code) : continuation(code);
          }
          if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 6;
            if (code === 47) {
              effects.consume(code);
              return basicSelfClosing;
            }
            return self2.interrupt ? ok(code) : continuation(code);
          }
          kind = 7;
          return self2.interrupt ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function basicSelfClosing(code) {
        if (code === 62) {
          effects.consume(code);
          return self2.interrupt ? ok : continuation;
        }
        return nok(code);
      }
      function completeClosingTagAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeClosingTagAfter;
        }
        return completeEnd(code);
      }
      function completeAttributeNameBefore(code) {
        if (code === 47) {
          effects.consume(code);
          return completeEnd;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameBefore;
        }
        return completeEnd(code);
      }
      function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
      }
      function completeAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
      }
      function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return completeAttributeValueQuoted;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        marker = void 0;
        return completeAttributeValueUnquoted(code);
      }
      function completeAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return completeAttributeValueQuotedAfter;
        }
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return completeAttributeValueQuoted;
      }
      function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
          return completeAttributeNameAfter(code);
        }
        effects.consume(code);
        return completeAttributeValueUnquoted;
      }
      function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || markdownSpace(code)) {
          return completeAttributeNameBefore(code);
        }
        return nok(code);
      }
      function completeEnd(code) {
        if (code === 62) {
          effects.consume(code);
          return completeAfter;
        }
        return nok(code);
      }
      function completeAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAfter;
        }
        return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
      }
      function continuation(code) {
        if (code === 45 && kind === 2) {
          effects.consume(code);
          return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
          effects.consume(code);
          return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
          effects.consume(code);
          return continuationClose;
        }
        if (code === 63 && kind === 3) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
          effects.consume(code);
          return continuationCharacterDataInside;
        }
        if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
          return effects.check(
            nextBlankConstruct,
            continuationClose,
            continuationAtLineEnding
          )(code);
        }
        if (code === null || markdownLineEnding(code)) {
          return continuationAtLineEnding(code);
        }
        effects.consume(code);
        return continuation;
      }
      function continuationAtLineEnding(code) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code);
      }
      function htmlContinueStart(code) {
        if (code === null) {
          return done(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return htmlContinueStart;
        }
        effects.enter("htmlFlowData");
        return continuation(code);
      }
      function continuationCommentInside(code) {
        if (code === 45) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationRawTagOpen(code) {
        if (code === 47) {
          effects.consume(code);
          buffer = "";
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationRawEndTag(code) {
        if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
          effects.consume(code);
          return continuationClose;
        }
        if (asciiAlpha(code) && buffer.length < 8) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationCharacterDataInside(code) {
        if (code === 93) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationDeclarationInside(code) {
        if (code === 62) {
          effects.consume(code);
          return continuationClose;
        }
        return continuation(code);
      }
      function continuationClose(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("htmlFlowData");
          return done(code);
        }
        effects.consume(code);
        return continuationClose;
      }
      function done(code) {
        effects.exit("htmlFlow");
        return ok(code);
      }
    }
    function tokenizeNextBlank(effects, ok, nok) {
      return start;
      function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt(partialBlankLine, ok, nok);
      }
    }
    module.exports = htmlFlow;
  }
});

// node_modules/micromark/dist/tokenize/html-text.js
var require_html_text = __commonJS({
  "node_modules/micromark/dist/tokenize/html-text.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var htmlText = {
      name: "htmlText",
      tokenize: tokenizeHtmlText
    };
    function tokenizeHtmlText(effects, ok, nok) {
      var self2 = this;
      var marker;
      var buffer;
      var index;
      var returnState;
      return start;
      function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationOpen;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          return instruction;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagOpen;
        }
        return nok(code);
      }
      function declarationOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentOpen;
        }
        if (code === 91) {
          effects.consume(code);
          buffer = "CDATA[";
          index = 0;
          return cdataOpen;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return declaration;
        }
        return nok(code);
      }
      function commentOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentStart;
        }
        return nok(code);
      }
      function commentStart(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentStartDash;
        }
        return comment(code);
      }
      function commentStartDash(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        return comment(code);
      }
      function comment(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentClose;
        }
        if (markdownLineEnding(code)) {
          returnState = comment;
          return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
      }
      function commentClose(code) {
        if (code === 45) {
          effects.consume(code);
          return end;
        }
        return comment(code);
      }
      function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
      }
      function cdata(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataClose;
        }
        if (markdownLineEnding(code)) {
          returnState = cdata;
          return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
      }
      function cdataClose(code) {
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function cdataEnd(code) {
        if (code === 62) {
          return end(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function declaration(code) {
        if (code === null || code === 62) {
          return end(code);
        }
        if (markdownLineEnding(code)) {
          returnState = declaration;
          return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
      }
      function instruction(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 63) {
          effects.consume(code);
          return instructionClose;
        }
        if (markdownLineEnding(code)) {
          returnState = instruction;
          return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
      }
      function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagClose;
        }
        return nok(code);
      }
      function tagClose(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagClose;
        }
        return tagCloseBetween(code);
      }
      function tagCloseBetween(code) {
        if (markdownLineEnding(code)) {
          returnState = tagCloseBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagCloseBetween;
        }
        return end(code);
      }
      function tagOpen(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpen;
        }
        if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenBetween(code) {
        if (code === 47) {
          effects.consume(code);
          return end;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenBetween;
        }
        return end(code);
      }
      function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
      }
      function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeNameAfter;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
      }
      function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return tagOpenAttributeValueQuoted;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueBefore;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = void 0;
        return tagOpenAttributeValueUnquoted;
      }
      function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueQuoted;
          return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
      }
      function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
          return nok(code);
        }
        if (code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
      }
      function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(
          effects,
          afterPrefix,
          "linePrefix",
          self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
        );
      }
      function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
      }
      function end(code) {
        if (code === 62) {
          effects.consume(code);
          effects.exit("htmlTextData");
          effects.exit("htmlText");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = htmlText;
  }
});

// node_modules/micromark/dist/tokenize/label-end.js
var require_label_end = __commonJS({
  "node_modules/micromark/dist/tokenize/label-end.js"(exports, module) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var normalizeIdentifier = require_normalize_identifier();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factoryTitle = require_factory_title();
    var factoryWhitespace = require_factory_whitespace();
    var labelEnd = {
      name: "labelEnd",
      tokenize: tokenizeLabelEnd,
      resolveTo: resolveToLabelEnd,
      resolveAll: resolveAllLabelEnd
    };
    var resourceConstruct = {
      tokenize: tokenizeResource
    };
    var fullReferenceConstruct = {
      tokenize: tokenizeFullReference
    };
    var collapsedReferenceConstruct = {
      tokenize: tokenizeCollapsedReference
    };
    function resolveAllLabelEnd(events) {
      var index = -1;
      var token;
      while (++index < events.length) {
        token = events[index][1];
        if (!token._used && (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd")) {
          events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
          token.type = "data";
          index++;
        }
      }
      return events;
    }
    function resolveToLabelEnd(events, context) {
      var index = events.length;
      var offset = 0;
      var group;
      var label;
      var text;
      var token;
      var open;
      var close;
      var media;
      while (index--) {
        token = events[index][1];
        if (open) {
          if (token.type === "link" || token.type === "labelLink" && token._inactive) {
            break;
          }
          if (events[index][0] === "enter" && token.type === "labelLink") {
            token._inactive = true;
          }
        } else if (close) {
          if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
            open = index;
            if (token.type !== "labelLink") {
              offset = 2;
              break;
            }
          }
        } else if (token.type === "labelEnd") {
          close = index;
        }
      }
      group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: shallow(events[open][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      label = {
        type: "label",
        start: shallow(events[open][1].start),
        end: shallow(events[close][1].end)
      };
      text = {
        type: "labelText",
        start: shallow(events[open + offset + 2][1].end),
        end: shallow(events[close - 2][1].start)
      };
      media = [
        ["enter", group, context],
        ["enter", label, context]
      ];
      media = chunkedPush(media, events.slice(open + 1, open + offset + 3));
      media = chunkedPush(media, [["enter", text, context]]);
      media = chunkedPush(
        media,
        resolveAll(
          context.parser.constructs.insideSpan.null,
          events.slice(open + offset + 4, close - 3),
          context
        )
      );
      media = chunkedPush(media, [
        ["exit", text, context],
        events[close - 2],
        events[close - 1],
        ["exit", label, context]
      ]);
      media = chunkedPush(media, events.slice(close + 1));
      media = chunkedPush(media, [["exit", group, context]]);
      chunkedSplice(events, open, events.length, media);
      return events;
    }
    function tokenizeLabelEnd(effects, ok, nok) {
      var self2 = this;
      var index = self2.events.length;
      var labelStart;
      var defined;
      while (index--) {
        if ((self2.events[index][1].type === "labelImage" || self2.events[index][1].type === "labelLink") && !self2.events[index][1]._balanced) {
          labelStart = self2.events[index][1];
          break;
        }
      }
      return start;
      function start(code) {
        if (!labelStart) {
          return nok(code);
        }
        if (labelStart._inactive)
          return balanced(code);
        defined = self2.parser.defined.indexOf(
          normalizeIdentifier(
            self2.sliceSerialize({
              start: labelStart.end,
              end: self2.now()
            })
          )
        ) > -1;
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
      }
      function afterLabelEnd(code) {
        if (code === 40) {
          return effects.attempt(
            resourceConstruct,
            ok,
            defined ? ok : balanced
          )(code);
        }
        if (code === 91) {
          return effects.attempt(
            fullReferenceConstruct,
            ok,
            defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced
          )(code);
        }
        return defined ? ok(code) : balanced(code);
      }
      function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
      }
    }
    function tokenizeResource(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return factoryWhitespace(effects, open);
      }
      function open(code) {
        if (code === 41) {
          return end(code);
        }
        return factoryDestination(
          effects,
          destinationAfter,
          nok,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          3
        )(code);
      }
      function destinationAfter(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
      }
      function between(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(
            effects,
            factoryWhitespace(effects, end),
            nok,
            "resourceTitle",
            "resourceTitleMarker",
            "resourceTitleString"
          )(code);
        }
        return end(code);
      }
      function end(code) {
        if (code === 41) {
          effects.enter("resourceMarker");
          effects.consume(code);
          effects.exit("resourceMarker");
          effects.exit("resource");
          return ok;
        }
        return nok(code);
      }
    }
    function tokenizeFullReference(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        return factoryLabel.call(
          self2,
          effects,
          afterLabel,
          nok,
          "reference",
          "referenceMarker",
          "referenceString"
        )(code);
      }
      function afterLabel(code) {
        return self2.parser.defined.indexOf(
          normalizeIdentifier(
            self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1)
          )
        ) < 0 ? nok(code) : ok(code);
      }
    }
    function tokenizeCollapsedReference(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
      }
      function open(code) {
        if (code === 93) {
          effects.enter("referenceMarker");
          effects.consume(code);
          effects.exit("referenceMarker");
          effects.exit("reference");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = labelEnd;
  }
});

// node_modules/micromark/dist/tokenize/label-start-image.js
var require_label_start_image = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-image.js"(exports, module) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartImage = {
      name: "labelStartImage",
      tokenize: tokenizeLabelStartImage,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartImage(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
      }
      function open(code) {
        if (code === 91) {
          effects.enter("labelMarker");
          effects.consume(code);
          effects.exit("labelMarker");
          effects.exit("labelImage");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        return code === 94 && /* c8 ignore next */
        "_hiddenFootnoteSupport" in self2.parser.constructs ? (
          /* c8 ignore next */
          nok(code)
        ) : ok(code);
      }
    }
    module.exports = labelStartImage;
  }
});

// node_modules/micromark/dist/tokenize/label-start-link.js
var require_label_start_link = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-link.js"(exports, module) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartLink = {
      name: "labelStartLink",
      tokenize: tokenizeLabelStartLink,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartLink(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
      }
      function after(code) {
        return code === 94 && /* c8 ignore next */
        "_hiddenFootnoteSupport" in self2.parser.constructs ? (
          /* c8 ignore next */
          nok(code)
        ) : ok(code);
      }
    }
    module.exports = labelStartLink;
  }
});

// node_modules/micromark/dist/tokenize/line-ending.js
var require_line_ending = __commonJS({
  "node_modules/micromark/dist/tokenize/line-ending.js"(exports, module) {
    "use strict";
    var factorySpace = require_factory_space();
    var lineEnding = {
      name: "lineEnding",
      tokenize: tokenizeLineEnding
    };
    function tokenizeLineEnding(effects, ok) {
      return start;
      function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, ok, "linePrefix");
      }
    }
    module.exports = lineEnding;
  }
});

// node_modules/micromark/dist/tokenize/thematic-break.js
var require_thematic_break = __commonJS({
  "node_modules/micromark/dist/tokenize/thematic-break.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var thematicBreak = {
      name: "thematicBreak",
      tokenize: tokenizeThematicBreak
    };
    function tokenizeThematicBreak(effects, ok, nok) {
      var size = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
      }
      function atBreak(code) {
        if (code === marker) {
          effects.enter("thematicBreakSequence");
          return sequence(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, atBreak, "whitespace")(code);
        }
        if (size < 3 || code !== null && !markdownLineEnding(code)) {
          return nok(code);
        }
        effects.exit("thematicBreak");
        return ok(code);
      }
      function sequence(code) {
        if (code === marker) {
          effects.consume(code);
          size++;
          return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
      }
    }
    module.exports = thematicBreak;
  }
});

// node_modules/micromark/dist/tokenize/list.js
var require_list = __commonJS({
  "node_modules/micromark/dist/tokenize/list.js"(exports, module) {
    "use strict";
    var asciiDigit = require_ascii_digit();
    var markdownSpace = require_markdown_space();
    var prefixSize = require_prefix_size();
    var sizeChunks = require_size_chunks();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var thematicBreak = require_thematic_break();
    var list = {
      name: "list",
      tokenize: tokenizeListStart,
      continuation: {
        tokenize: tokenizeListContinuation
      },
      exit: tokenizeListEnd
    };
    var listItemPrefixWhitespaceConstruct = {
      tokenize: tokenizeListItemPrefixWhitespace,
      partial: true
    };
    var indentConstruct = {
      tokenize: tokenizeIndent,
      partial: true
    };
    function tokenizeListStart(effects, ok, nok) {
      var self2 = this;
      var initialSize = prefixSize(self2.events, "linePrefix");
      var size = 0;
      return start;
      function start(code) {
        var kind = self2.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self2.containerState.marker || code === self2.containerState.marker : asciiDigit(code)) {
          if (!self2.containerState.type) {
            self2.containerState.type = kind;
            effects.enter(kind, {
              _container: true
            });
          }
          if (kind === "listUnordered") {
            effects.enter("listItemPrefix");
            return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
          }
          if (!self2.interrupt || code === 49) {
            effects.enter("listItemPrefix");
            effects.enter("listItemValue");
            return inside(code);
          }
        }
        return nok(code);
      }
      function inside(code) {
        if (asciiDigit(code) && ++size < 10) {
          effects.consume(code);
          return inside;
        }
        if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code === self2.containerState.marker : code === 41 || code === 46)) {
          effects.exit("listItemValue");
          return atMarker(code);
        }
        return nok(code);
      }
      function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self2.containerState.marker = self2.containerState.marker || code;
        return effects.check(
          partialBlankLine,
          // Can’t be empty when interrupting.
          self2.interrupt ? nok : onBlank,
          effects.attempt(
            listItemPrefixWhitespaceConstruct,
            endOfPrefix,
            otherPrefix
          )
        );
      }
      function onBlank(code) {
        self2.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
      }
      function otherPrefix(code) {
        if (markdownSpace(code)) {
          effects.enter("listItemPrefixWhitespace");
          effects.consume(code);
          effects.exit("listItemPrefixWhitespace");
          return endOfPrefix;
        }
        return nok(code);
      }
      function endOfPrefix(code) {
        self2.containerState.size = initialSize + sizeChunks(self2.sliceStream(effects.exit("listItemPrefix")));
        return ok(code);
      }
    }
    function tokenizeListContinuation(effects, ok, nok) {
      var self2 = this;
      self2.containerState._closeFlow = void 0;
      return effects.check(partialBlankLine, onBlank, notBlank);
      function onBlank(code) {
        self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
        return factorySpace(
          effects,
          ok,
          "listItemIndent",
          self2.containerState.size + 1
        )(code);
      }
      function notBlank(code) {
        if (self2.containerState.furtherBlankLines || !markdownSpace(code)) {
          self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
          return notInCurrentItem(code);
        }
        self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
      }
      function notInCurrentItem(code) {
        self2.containerState._closeFlow = true;
        self2.interrupt = void 0;
        return factorySpace(
          effects,
          effects.attempt(list, ok, nok),
          "linePrefix",
          self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
        )(code);
      }
    }
    function tokenizeIndent(effects, ok, nok) {
      var self2 = this;
      return factorySpace(
        effects,
        afterPrefix,
        "listItemIndent",
        self2.containerState.size + 1
      );
      function afterPrefix(code) {
        return prefixSize(self2.events, "listItemIndent") === self2.containerState.size ? ok(code) : nok(code);
      }
    }
    function tokenizeListEnd(effects) {
      effects.exit(this.containerState.type);
    }
    function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
      var self2 = this;
      return factorySpace(
        effects,
        afterPrefix,
        "listItemPrefixWhitespace",
        self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4 + 1
      );
      function afterPrefix(code) {
        return markdownSpace(code) || !prefixSize(self2.events, "listItemPrefixWhitespace") ? nok(code) : ok(code);
      }
    }
    module.exports = list;
  }
});

// node_modules/micromark/dist/tokenize/setext-underline.js
var require_setext_underline = __commonJS({
  "node_modules/micromark/dist/tokenize/setext-underline.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var shallow = require_shallow();
    var factorySpace = require_factory_space();
    var setextUnderline = {
      name: "setextUnderline",
      tokenize: tokenizeSetextUnderline,
      resolveTo: resolveToSetextUnderline
    };
    function resolveToSetextUnderline(events, context) {
      var index = events.length;
      var content;
      var text;
      var definition;
      var heading;
      while (index--) {
        if (events[index][0] === "enter") {
          if (events[index][1].type === "content") {
            content = index;
            break;
          }
          if (events[index][1].type === "paragraph") {
            text = index;
          }
        } else {
          if (events[index][1].type === "content") {
            events.splice(index, 1);
          }
          if (!definition && events[index][1].type === "definition") {
            definition = index;
          }
        }
      }
      heading = {
        type: "setextHeading",
        start: shallow(events[text][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      events[text][1].type = "setextHeadingText";
      if (definition) {
        events.splice(text, 0, ["enter", heading, context]);
        events.splice(definition + 1, 0, ["exit", events[content][1], context]);
        events[content][1].end = shallow(events[definition][1].end);
      } else {
        events[content][1] = heading;
      }
      events.push(["exit", heading, context]);
      return events;
    }
    function tokenizeSetextUnderline(effects, ok, nok) {
      var self2 = this;
      var index = self2.events.length;
      var marker;
      var paragraph;
      while (index--) {
        if (self2.events[index][1].type !== "lineEnding" && self2.events[index][1].type !== "linePrefix" && self2.events[index][1].type !== "content") {
          paragraph = self2.events[index][1].type === "paragraph";
          break;
        }
      }
      return start;
      function start(code) {
        if (!self2.lazy && (self2.interrupt || paragraph)) {
          effects.enter("setextHeadingLine");
          effects.enter("setextHeadingLineSequence");
          marker = code;
          return closingSequence(code);
        }
        return nok(code);
      }
      function closingSequence(code) {
        if (code === marker) {
          effects.consume(code);
          return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code);
      }
      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("setextHeadingLine");
          return ok(code);
        }
        return nok(code);
      }
    }
    module.exports = setextUnderline;
  }
});

// node_modules/micromark/dist/constructs.js
var require_constructs = __commonJS({
  "node_modules/micromark/dist/constructs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var text$1 = require_text();
    var attention = require_attention();
    var autolink = require_autolink();
    var blockQuote = require_block_quote();
    var characterEscape = require_character_escape();
    var characterReference = require_character_reference();
    var codeFenced = require_code_fenced();
    var codeIndented = require_code_indented();
    var codeText = require_code_text();
    var definition = require_definition();
    var hardBreakEscape = require_hard_break_escape();
    var headingAtx = require_heading_atx();
    var htmlFlow = require_html_flow();
    var htmlText = require_html_text();
    var labelEnd = require_label_end();
    var labelStartImage = require_label_start_image();
    var labelStartLink = require_label_start_link();
    var lineEnding = require_line_ending();
    var list = require_list();
    var setextUnderline = require_setext_underline();
    var thematicBreak = require_thematic_break();
    var document2 = {
      42: list,
      // Asterisk
      43: list,
      // Plus sign
      45: list,
      // Dash
      48: list,
      // 0
      49: list,
      // 1
      50: list,
      // 2
      51: list,
      // 3
      52: list,
      // 4
      53: list,
      // 5
      54: list,
      // 6
      55: list,
      // 7
      56: list,
      // 8
      57: list,
      // 9
      62: blockQuote
      // Greater than
    };
    var contentInitial = {
      91: definition
      // Left square bracket
    };
    var flowInitial = {
      "-2": codeIndented,
      // Horizontal tab
      "-1": codeIndented,
      // Virtual space
      32: codeIndented
      // Space
    };
    var flow = {
      35: headingAtx,
      // Number sign
      42: thematicBreak,
      // Asterisk
      45: [setextUnderline, thematicBreak],
      // Dash
      60: htmlFlow,
      // Less than
      61: setextUnderline,
      // Equals to
      95: thematicBreak,
      // Underscore
      96: codeFenced,
      // Grave accent
      126: codeFenced
      // Tilde
    };
    var string = {
      38: characterReference,
      // Ampersand
      92: characterEscape
      // Backslash
    };
    var text = {
      "-5": lineEnding,
      // Carriage return
      "-4": lineEnding,
      // Line feed
      "-3": lineEnding,
      // Carriage return + line feed
      33: labelStartImage,
      // Exclamation mark
      38: characterReference,
      // Ampersand
      42: attention,
      // Asterisk
      60: [autolink, htmlText],
      // Less than
      91: labelStartLink,
      // Left square bracket
      92: [hardBreakEscape, characterEscape],
      // Backslash
      93: labelEnd,
      // Right square bracket
      95: attention,
      // Underscore
      96: codeText
      // Grave accent
    };
    var insideSpan = {
      null: [attention, text$1.resolver]
    };
    var disable = {
      null: []
    };
    exports.contentInitial = contentInitial;
    exports.disable = disable;
    exports.document = document2;
    exports.flow = flow;
    exports.flowInitial = flowInitial;
    exports.insideSpan = insideSpan;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/micromark/dist/parse.js
var require_parse = __commonJS({
  "node_modules/micromark/dist/parse.js"(exports, module) {
    "use strict";
    var content = require_content();
    var document2 = require_document();
    var flow = require_flow();
    var text = require_text();
    var combineExtensions = require_combine_extensions();
    var createTokenizer = require_create_tokenizer();
    var miniflat = require_miniflat();
    var constructs = require_constructs();
    function parse(options) {
      var settings = options || {};
      var parser = {
        defined: [],
        constructs: combineExtensions(
          [constructs].concat(miniflat(settings.extensions))
        ),
        content: create(content),
        document: create(document2),
        flow: create(flow),
        string: create(text.string),
        text: create(text.text)
      };
      return parser;
      function create(initializer) {
        return creator;
        function creator(from) {
          return createTokenizer(parser, initializer, from);
        }
      }
    }
    module.exports = parse;
  }
});

// node_modules/micromark/dist/preprocess.js
var require_preprocess = __commonJS({
  "node_modules/micromark/dist/preprocess.js"(exports, module) {
    "use strict";
    var search = /[\0\t\n\r]/g;
    function preprocess() {
      var start = true;
      var column = 1;
      var buffer = "";
      var atCarriageReturn;
      return preprocessor;
      function preprocessor(value, encoding, end) {
        var chunks = [];
        var match;
        var next;
        var startPosition;
        var endPosition;
        var code;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
          if (value.charCodeAt(0) === 65279) {
            startPosition++;
          }
          start = void 0;
        }
        while (startPosition < value.length) {
          search.lastIndex = startPosition;
          match = search.exec(value);
          endPosition = match ? match.index : value.length;
          code = value.charCodeAt(endPosition);
          if (!match) {
            buffer = value.slice(startPosition);
            break;
          }
          if (code === 10 && startPosition === endPosition && atCarriageReturn) {
            chunks.push(-3);
            atCarriageReturn = void 0;
          } else {
            if (atCarriageReturn) {
              chunks.push(-5);
              atCarriageReturn = void 0;
            }
            if (startPosition < endPosition) {
              chunks.push(value.slice(startPosition, endPosition));
              column += endPosition - startPosition;
            }
            if (code === 0) {
              chunks.push(65533);
              column++;
            } else if (code === 9) {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next)
                chunks.push(-1);
            } else if (code === 10) {
              chunks.push(-4);
              column = 1;
            } else {
              atCarriageReturn = true;
              column = 1;
            }
          }
          startPosition = endPosition + 1;
        }
        if (end) {
          if (atCarriageReturn)
            chunks.push(-5);
          if (buffer)
            chunks.push(buffer);
          chunks.push(null);
        }
        return chunks;
      }
    }
    module.exports = preprocess;
  }
});

// node_modules/micromark/dist/postprocess.js
var require_postprocess = __commonJS({
  "node_modules/micromark/dist/postprocess.js"(exports, module) {
    "use strict";
    var subtokenize = require_subtokenize();
    function postprocess(events) {
      while (!subtokenize(events)) {
      }
      return events;
    }
    module.exports = postprocess;
  }
});

// node_modules/mdast-util-from-markdown/dist/index.js
var require_dist = __commonJS({
  "node_modules/mdast-util-from-markdown/dist/index.js"(exports, module) {
    "use strict";
    module.exports = fromMarkdown;
    var toString = require_mdast_util_to_string();
    var assign = require_assign();
    var own = require_has_own_property();
    var normalizeIdentifier = require_normalize_identifier();
    var safeFromInt = require_safe_from_int();
    var parser = require_parse();
    var preprocessor = require_preprocess();
    var postprocess = require_postprocess();
    var decode = require_decode_entity_browser();
    var stringifyPosition = require_unist_util_stringify_position();
    function fromMarkdown(value, encoding, options) {
      if (typeof encoding !== "string") {
        options = encoding;
        encoding = void 0;
      }
      return compiler(options)(
        postprocess(
          parser(options).document().write(preprocessor()(value, encoding, true))
        )
      );
    }
    function compiler(options) {
      var settings = options || {};
      var config = configure(
        {
          transforms: [],
          canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
          ],
          enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
          },
          exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
          }
        },
        settings.mdastExtensions || []
      );
      var data = {};
      return compile;
      function compile(events) {
        var tree = { type: "root", children: [] };
        var stack = [tree];
        var tokenStack = [];
        var listStack = [];
        var index = -1;
        var handler;
        var listStart;
        var context = {
          stack,
          tokenStack,
          config,
          enter,
          exit,
          buffer,
          resume,
          setData,
          getData
        };
        while (++index < events.length) {
          if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
            if (events[index][0] === "enter") {
              listStack.push(index);
            } else {
              listStart = listStack.pop(index);
              index = prepareList(events, listStart, index);
            }
          }
        }
        index = -1;
        while (++index < events.length) {
          handler = config[events[index][0]];
          if (own.call(handler, events[index][1].type)) {
            handler[events[index][1].type].call(
              assign({ sliceSerialize: events[index][2].sliceSerialize }, context),
              events[index][1]
            );
          }
        }
        if (tokenStack.length) {
          throw new Error(
            "Cannot close document, a token (`" + tokenStack[tokenStack.length - 1].type + "`, " + stringifyPosition({
              start: tokenStack[tokenStack.length - 1].start,
              end: tokenStack[tokenStack.length - 1].end
            }) + ") is still open"
          );
        }
        tree.position = {
          start: point(
            events.length ? events[0][1].start : { line: 1, column: 1, offset: 0 }
          ),
          end: point(
            events.length ? events[events.length - 2][1].end : { line: 1, column: 1, offset: 0 }
          )
        };
        index = -1;
        while (++index < config.transforms.length) {
          tree = config.transforms[index](tree) || tree;
        }
        return tree;
      }
      function prepareList(events, start, length) {
        var index = start - 1;
        var containerBalance = -1;
        var listSpread = false;
        var listItem2;
        var tailIndex;
        var lineIndex;
        var tailEvent;
        var event;
        var firstBlankLineIndex;
        var atMarker;
        while (++index <= length) {
          event = events[index];
          if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = void 0;
          } else if (event[1].type === "lineEndingBlank") {
            if (event[0] === "enter") {
              if (listItem2 && !atMarker && !containerBalance && !firstBlankLineIndex) {
                firstBlankLineIndex = index;
              }
              atMarker = void 0;
            }
          } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
          } else {
            atMarker = void 0;
          }
          if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
            if (listItem2) {
              tailIndex = index;
              lineIndex = void 0;
              while (tailIndex--) {
                tailEvent = events[tailIndex];
                if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                  if (tailEvent[0] === "exit")
                    continue;
                  if (lineIndex) {
                    events[lineIndex][1].type = "lineEndingBlank";
                    listSpread = true;
                  }
                  tailEvent[1].type = "lineEnding";
                  lineIndex = tailIndex;
                } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
                } else {
                  break;
                }
              }
              if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                listItem2._spread = true;
              }
              listItem2.end = point(
                lineIndex ? events[lineIndex][1].start : event[1].end
              );
              events.splice(lineIndex || index, 0, ["exit", listItem2, event[2]]);
              index++;
              length++;
            }
            if (event[1].type === "listItemPrefix") {
              listItem2 = {
                type: "listItem",
                _spread: false,
                start: point(event[1].start)
              };
              events.splice(index, 0, ["enter", listItem2, event[2]]);
              index++;
              length++;
              firstBlankLineIndex = void 0;
              atMarker = true;
            }
          }
        }
        events[start][1]._spread = listSpread;
        return length;
      }
      function setData(key, value) {
        data[key] = value;
      }
      function getData(key) {
        return data[key];
      }
      function point(d) {
        return { line: d.line, column: d.column, offset: d.offset };
      }
      function opener(create, and) {
        return open;
        function open(token) {
          enter.call(this, create(token), token);
          if (and)
            and.call(this, token);
        }
      }
      function buffer() {
        this.stack.push({ type: "fragment", children: [] });
      }
      function enter(node, token) {
        this.stack[this.stack.length - 1].children.push(node);
        this.stack.push(node);
        this.tokenStack.push(token);
        node.position = { start: point(token.start) };
        return node;
      }
      function closer(and) {
        return close;
        function close(token) {
          if (and)
            and.call(this, token);
          exit.call(this, token);
        }
      }
      function exit(token) {
        var node = this.stack.pop();
        var open = this.tokenStack.pop();
        if (!open) {
          throw new Error(
            "Cannot close `" + token.type + "` (" + stringifyPosition({ start: token.start, end: token.end }) + "): it’s not open"
          );
        } else if (open.type !== token.type) {
          throw new Error(
            "Cannot close `" + token.type + "` (" + stringifyPosition({ start: token.start, end: token.end }) + "): a different token (`" + open.type + "`, " + stringifyPosition({ start: open.start, end: open.end }) + ") is open"
          );
        }
        node.position.end = point(token.end);
        return node;
      }
      function resume() {
        return toString(this.stack.pop());
      }
      function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
      }
      function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
          this.stack[this.stack.length - 2].start = parseInt(
            this.sliceSerialize(token),
            10
          );
          setData("expectingFirstListItemValue");
        }
      }
      function onexitcodefencedfenceinfo() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].lang = data2;
      }
      function onexitcodefencedfencemeta() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].meta = data2;
      }
      function onexitcodefencedfence() {
        if (getData("flowCodeInside"))
          return;
        this.buffer();
        setData("flowCodeInside", true);
      }
      function onexitcodefenced() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2.replace(
          /^(\r?\n|\r)|(\r?\n|\r)$/g,
          ""
        );
        setData("flowCodeInside");
      }
      function onexitcodeindented() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitdefinitionlabelstring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
      }
      function onexitdefinitiontitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitdefinitiondestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitatxheadingsequence(token) {
        if (!this.stack[this.stack.length - 1].depth) {
          this.stack[this.stack.length - 1].depth = this.sliceSerialize(
            token
          ).length;
        }
      }
      function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
      }
      function onexitsetextheadinglinesequence(token) {
        this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
      }
      function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
      }
      function onenterdata(token) {
        var siblings = this.stack[this.stack.length - 1].children;
        var tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== "text") {
          tail = text();
          tail.position = { start: point(token.start) };
          this.stack[this.stack.length - 1].children.push(tail);
        }
        this.stack.push(tail);
      }
      function onexitdata(token) {
        var tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
      }
      function onexitlineending(token) {
        var context = this.stack[this.stack.length - 1];
        if (getData("atHardBreak")) {
          context.children[context.children.length - 1].position.end = point(
            token.end
          );
          setData("atHardBreak");
          return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.indexOf(context.type) > -1) {
          onenterdata.call(this, token);
          onexitdata.call(this, token);
        }
      }
      function onexithardbreak() {
        setData("atHardBreak", true);
      }
      function onexithtmlflow() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexithtmltext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitcodetext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitlink() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitimage() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitlabeltext(token) {
        this.stack[this.stack.length - 2].identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
      }
      function onexitlabel() {
        var fragment = this.stack[this.stack.length - 1];
        var value = this.resume();
        this.stack[this.stack.length - 1].label = value;
        setData("inReference", true);
        if (this.stack[this.stack.length - 1].type === "link") {
          this.stack[this.stack.length - 1].children = fragment.children;
        } else {
          this.stack[this.stack.length - 1].alt = value;
        }
      }
      function onexitresourcedestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitresourcetitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitresource() {
        setData("inReference");
      }
      function onenterreference() {
        setData("referenceType", "collapsed");
      }
      function onexitreferencestring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
        setData("referenceType", "full");
      }
      function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
      }
      function onexitcharacterreferencevalue(token) {
        var data2 = this.sliceSerialize(token);
        var type = getData("characterReferenceType");
        var value;
        var tail;
        if (type) {
          value = safeFromInt(
            data2,
            type === "characterReferenceMarkerNumeric" ? 10 : 16
          );
          setData("characterReferenceType");
        } else {
          value = decode(data2);
        }
        tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point(token.end);
      }
      function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
      }
      function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(token);
      }
      function blockQuote() {
        return { type: "blockquote", children: [] };
      }
      function codeFlow() {
        return { type: "code", lang: null, meta: null, value: "" };
      }
      function codeText() {
        return { type: "inlineCode", value: "" };
      }
      function definition() {
        return {
          type: "definition",
          identifier: "",
          label: null,
          title: null,
          url: ""
        };
      }
      function emphasis() {
        return { type: "emphasis", children: [] };
      }
      function heading() {
        return { type: "heading", depth: void 0, children: [] };
      }
      function hardBreak() {
        return { type: "break" };
      }
      function html() {
        return { type: "html", value: "" };
      }
      function image() {
        return { type: "image", title: null, url: "", alt: null };
      }
      function link() {
        return { type: "link", title: null, url: "", children: [] };
      }
      function list(token) {
        return {
          type: "list",
          ordered: token.type === "listOrdered",
          start: null,
          spread: token._spread,
          children: []
        };
      }
      function listItem(token) {
        return {
          type: "listItem",
          spread: token._spread,
          checked: null,
          children: []
        };
      }
      function paragraph() {
        return { type: "paragraph", children: [] };
      }
      function strong() {
        return { type: "strong", children: [] };
      }
      function text() {
        return { type: "text", value: "" };
      }
      function thematicBreak() {
        return { type: "thematicBreak" };
      }
    }
    function configure(config, extensions) {
      var index = -1;
      while (++index < extensions.length) {
        extension(config, extensions[index]);
      }
      return config;
    }
    function extension(config, extension2) {
      var key;
      var left;
      for (key in extension2) {
        left = own.call(config, key) ? config[key] : config[key] = {};
        if (key === "canContainEols" || key === "transforms") {
          config[key] = [].concat(left, extension2[key]);
        } else {
          Object.assign(left, extension2[key]);
        }
      }
    }
  }
});

// node_modules/mdast-util-from-markdown/index.js
var require_mdast_util_from_markdown = __commonJS({
  "node_modules/mdast-util-from-markdown/index.js"(exports, module) {
    "use strict";
    module.exports = require_dist();
  }
});

// node_modules/remark-parse/index.js
var require_remark_parse = __commonJS({
  "node_modules/remark-parse/index.js"(exports, module) {
    "use strict";
    module.exports = parse;
    var fromMarkdown = require_mdast_util_from_markdown();
    function parse(options) {
      var self2 = this;
      this.Parser = parse2;
      function parse2(doc) {
        return fromMarkdown(
          doc,
          Object.assign({}, self2.data("settings"), options, {
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: self2.data("micromarkExtensions") || [],
            mdastExtensions: self2.data("fromMarkdownExtensions") || []
          })
        );
      }
    }
  }
});

// node_modules/unist-builder/index.js
var require_unist_builder = __commonJS({
  "node_modules/unist-builder/index.js"(exports, module) {
    "use strict";
    module.exports = u;
    function u(type, props, value) {
      var node;
      if ((value === null || value === void 0) && (typeof props !== "object" || Array.isArray(props))) {
        value = props;
        props = {};
      }
      node = Object.assign({ type: String(type) }, props);
      if (Array.isArray(value)) {
        node.children = value;
      } else if (value !== null && value !== void 0) {
        node.value = String(value);
      }
      return node;
    }
  }
});

// node_modules/unist-util-is/convert.js
var require_convert = __commonJS({
  "node_modules/unist-util-is/convert.js"(exports, module) {
    "use strict";
    module.exports = convert;
    function convert(test) {
      if (test == null) {
        return ok;
      }
      if (typeof test === "string") {
        return typeFactory(test);
      }
      if (typeof test === "object") {
        return "length" in test ? anyFactory(test) : allFactory(test);
      }
      if (typeof test === "function") {
        return test;
      }
      throw new Error("Expected function, string, or object as test");
    }
    function allFactory(test) {
      return all;
      function all(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key])
            return false;
        }
        return true;
      }
    }
    function anyFactory(tests) {
      var checks = [];
      var index = -1;
      while (++index < tests.length) {
        checks[index] = convert(tests[index]);
      }
      return any;
      function any() {
        var index2 = -1;
        while (++index2 < checks.length) {
          if (checks[index2].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok() {
      return true;
    }
  }
});

// node_modules/unist-util-visit-parents/color.browser.js
var require_color_browser = __commonJS({
  "node_modules/unist-util-visit-parents/color.browser.js"(exports, module) {
    module.exports = identity;
    function identity(d) {
      return d;
    }
  }
});

// node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents = __commonJS({
  "node_modules/unist-util-visit-parents/index.js"(exports, module) {
    "use strict";
    module.exports = visitParents;
    var convert = require_convert();
    var color = require_color_browser();
    var CONTINUE = true;
    var SKIP = "skip";
    var EXIT = false;
    visitParents.CONTINUE = CONTINUE;
    visitParents.SKIP = SKIP;
    visitParents.EXIT = EXIT;
    function visitParents(tree, test, visitor, reverse) {
      var step;
      var is;
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      is = convert(test);
      step = reverse ? -1 : 1;
      factory(tree, null, [])();
      function factory(node, index, parents) {
        var value = typeof node === "object" && node !== null ? node : {};
        var name;
        if (typeof value.type === "string") {
          name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
          visit.displayName = "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")";
        }
        return visit;
        function visit() {
          var grandparents = parents.concat(node);
          var result = [];
          var subresult;
          var offset;
          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult(visitor(node, parents));
            if (result[0] === EXIT) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP) {
            offset = (reverse ? node.children.length : -1) + step;
            while (offset > -1 && offset < node.children.length) {
              subresult = factory(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    }
    function toResult(value) {
      if (value !== null && typeof value === "object" && "length" in value) {
        return value;
      }
      if (typeof value === "number") {
        return [CONTINUE, value];
      }
      return [value];
    }
  }
});

// node_modules/unist-util-visit/index.js
var require_unist_util_visit = __commonJS({
  "node_modules/unist-util-visit/index.js"(exports, module) {
    "use strict";
    module.exports = visit;
    var visitParents = require_unist_util_visit_parents();
    var CONTINUE = visitParents.CONTINUE;
    var SKIP = visitParents.SKIP;
    var EXIT = visitParents.EXIT;
    visit.CONTINUE = CONTINUE;
    visit.SKIP = SKIP;
    visit.EXIT = EXIT;
    function visit(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents(tree, test, overload, reverse);
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        var index = parent ? parent.children.indexOf(node) : null;
        return visitor(node, index, parent);
      }
    }
  }
});

// node_modules/unist-util-position/index.js
var require_unist_util_position = __commonJS({
  "node_modules/unist-util-position/index.js"(exports, module) {
    "use strict";
    var start = factory("start");
    var end = factory("end");
    module.exports = position;
    position.start = start;
    position.end = end;
    function position(node) {
      return { start: start(node), end: end(node) };
    }
    function factory(type) {
      point.displayName = type;
      return point;
      function point(node) {
        var point2 = node && node.position && node.position[type] || {};
        return {
          line: point2.line || null,
          column: point2.column || null,
          offset: isNaN(point2.offset) ? null : point2.offset
        };
      }
    }
  }
});

// node_modules/unist-util-generated/index.js
var require_unist_util_generated = __commonJS({
  "node_modules/unist-util-generated/index.js"(exports, module) {
    "use strict";
    module.exports = generated;
    function generated(node) {
      return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
    }
  }
});

// node_modules/mdast-util-definitions/index.js
var require_mdast_util_definitions = __commonJS({
  "node_modules/mdast-util-definitions/index.js"(exports, module) {
    "use strict";
    var visit = require_unist_util_visit();
    module.exports = getDefinitionFactory;
    var own = {}.hasOwnProperty;
    function getDefinitionFactory(node, options) {
      return getterFactory(gather(node, options));
    }
    function gather(node) {
      var cache = {};
      if (!node || !node.type) {
        throw new Error("mdast-util-definitions expected node");
      }
      visit(node, "definition", ondefinition);
      return cache;
      function ondefinition(definition) {
        var id = normalise(definition.identifier);
        if (!own.call(cache, id)) {
          cache[id] = definition;
        }
      }
    }
    function getterFactory(cache) {
      return getter;
      function getter(identifier) {
        var id = identifier && normalise(identifier);
        return id && own.call(cache, id) ? cache[id] : null;
      }
    }
    function normalise(identifier) {
      return identifier.toUpperCase();
    }
  }
});

// node_modules/mdast-util-to-hast/lib/all.js
var require_all = __commonJS({
  "node_modules/mdast-util-to-hast/lib/all.js"(exports, module) {
    "use strict";
    module.exports = all;
    var one = require_one();
    function all(h, parent) {
      var nodes = parent.children || [];
      var length = nodes.length;
      var values = [];
      var index = -1;
      var result;
      var head;
      while (++index < length) {
        result = one(h, nodes[index], parent);
        if (result) {
          if (index && nodes[index - 1].type === "break") {
            if (result.value) {
              result.value = result.value.replace(/^\s+/, "");
            }
            head = result.children && result.children[0];
            if (head && head.value) {
              head.value = head.value.replace(/^\s+/, "");
            }
          }
          values = values.concat(result);
        }
      }
      return values;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/one.js
var require_one = __commonJS({
  "node_modules/mdast-util-to-hast/lib/one.js"(exports, module) {
    "use strict";
    module.exports = one;
    var u = require_unist_builder();
    var all = require_all();
    var own = {}.hasOwnProperty;
    function unknown(h, node) {
      if (text(node)) {
        return h.augment(node, u("text", node.value));
      }
      return h(node, "div", all(h, node));
    }
    function one(h, node, parent) {
      var type = node && node.type;
      var fn;
      if (!type) {
        throw new Error("Expected node, got `" + node + "`");
      }
      if (own.call(h.handlers, type)) {
        fn = h.handlers[type];
      } else if (h.passThrough && h.passThrough.indexOf(type) > -1) {
        fn = returnNode;
      } else {
        fn = h.unknownHandler;
      }
      return (typeof fn === "function" ? fn : unknown)(h, node, parent);
    }
    function text(node) {
      var data = node.data || {};
      if (own.call(data, "hName") || own.call(data, "hProperties") || own.call(data, "hChildren")) {
        return false;
      }
      return "value" in node;
    }
    function returnNode(h, node) {
      var clone;
      if (node.children) {
        clone = Object.assign({}, node);
        clone.children = all(h, node);
        return clone;
      }
      return node;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
var require_thematic_break2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"(exports, module) {
    "use strict";
    module.exports = thematicBreak;
    function thematicBreak(h, node) {
      return h(node, "hr");
    }
  }
});

// node_modules/mdast-util-to-hast/lib/wrap.js
var require_wrap2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/wrap.js"(exports, module) {
    "use strict";
    module.exports = wrap;
    var u = require_unist_builder();
    function wrap(nodes, loose) {
      var result = [];
      var index = -1;
      var length = nodes.length;
      if (loose) {
        result.push(u("text", "\n"));
      }
      while (++index < length) {
        if (index) {
          result.push(u("text", "\n"));
        }
        result.push(nodes[index]);
      }
      if (loose && nodes.length > 0) {
        result.push(u("text", "\n"));
      }
      return result;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list.js
var require_list2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/list.js"(exports, module) {
    "use strict";
    module.exports = list;
    var wrap = require_wrap2();
    var all = require_all();
    function list(h, node) {
      var props = {};
      var name = node.ordered ? "ol" : "ul";
      var items;
      var index = -1;
      var length;
      if (typeof node.start === "number" && node.start !== 1) {
        props.start = node.start;
      }
      items = all(h, node);
      length = items.length;
      while (++index < length) {
        if (items[index].properties.className && items[index].properties.className.indexOf("task-list-item") !== -1) {
          props.className = ["contains-task-list"];
          break;
        }
      }
      return h(node, name, props, wrap(items, true));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/footer.js
var require_footer = __commonJS({
  "node_modules/mdast-util-to-hast/lib/footer.js"(exports, module) {
    "use strict";
    module.exports = generateFootnotes;
    var thematicBreak = require_thematic_break2();
    var list = require_list2();
    var wrap = require_wrap2();
    function generateFootnotes(h) {
      var footnoteById = h.footnoteById;
      var footnoteOrder = h.footnoteOrder;
      var length = footnoteOrder.length;
      var index = -1;
      var listItems = [];
      var def;
      var backReference;
      var content;
      var tail;
      while (++index < length) {
        def = footnoteById[footnoteOrder[index].toUpperCase()];
        if (!def) {
          continue;
        }
        content = def.children.concat();
        tail = content[content.length - 1];
        backReference = {
          type: "link",
          url: "#fnref-" + def.identifier,
          data: { hProperties: { className: ["footnote-backref"] } },
          children: [{ type: "text", value: "↩" }]
        };
        if (!tail || tail.type !== "paragraph") {
          tail = { type: "paragraph", children: [] };
          content.push(tail);
        }
        tail.children.push(backReference);
        listItems.push({
          type: "listItem",
          data: { hProperties: { id: "fn-" + def.identifier } },
          children: content,
          position: def.position
        });
      }
      if (listItems.length === 0) {
        return null;
      }
      return h(
        null,
        "div",
        { className: ["footnotes"] },
        wrap(
          [
            thematicBreak(h),
            list(h, { type: "list", ordered: true, children: listItems })
          ],
          true
        )
      );
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
var require_blockquote = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"(exports, module) {
    "use strict";
    module.exports = blockquote;
    var wrap = require_wrap2();
    var all = require_all();
    function blockquote(h, node) {
      return h(node, "blockquote", wrap(all(h, node), true));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/break.js
var require_break = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/break.js"(exports, module) {
    "use strict";
    module.exports = hardBreak;
    var u = require_unist_builder();
    function hardBreak(h, node) {
      return [h(node, "br"), u("text", "\n")];
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/code.js
var require_code = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/code.js"(exports, module) {
    "use strict";
    module.exports = code;
    var u = require_unist_builder();
    function code(h, node) {
      var value = node.value ? node.value + "\n" : "";
      var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
      var props = {};
      var code2;
      if (lang) {
        props.className = ["language-" + lang];
      }
      code2 = h(node, "code", props, [u("text", value)]);
      if (node.meta) {
        code2.data = { meta: node.meta };
      }
      return h(node.position, "pre", [code2]);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/delete.js
var require_delete = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/delete.js"(exports, module) {
    "use strict";
    module.exports = strikethrough;
    var all = require_all();
    function strikethrough(h, node) {
      return h(node, "del", all(h, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
var require_emphasis = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"(exports, module) {
    "use strict";
    module.exports = emphasis;
    var all = require_all();
    function emphasis(h, node) {
      return h(node, "em", all(h, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
var require_footnote_reference = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"(exports, module) {
    "use strict";
    module.exports = footnoteReference;
    var u = require_unist_builder();
    function footnoteReference(h, node) {
      var footnoteOrder = h.footnoteOrder;
      var identifier = String(node.identifier);
      if (footnoteOrder.indexOf(identifier) === -1) {
        footnoteOrder.push(identifier);
      }
      return h(node.position, "sup", { id: "fnref-" + identifier }, [
        h(node, "a", { href: "#fn-" + identifier, className: ["footnote-ref"] }, [
          u("text", node.label || identifier)
        ])
      ]);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/footnote.js
var require_footnote = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/footnote.js"(exports, module) {
    "use strict";
    module.exports = footnote;
    var footnoteReference = require_footnote_reference();
    function footnote(h, node) {
      var footnoteById = h.footnoteById;
      var footnoteOrder = h.footnoteOrder;
      var identifier = 1;
      while (identifier in footnoteById) {
        identifier++;
      }
      identifier = String(identifier);
      footnoteOrder.push(identifier);
      footnoteById[identifier] = {
        type: "footnoteDefinition",
        identifier,
        children: [{ type: "paragraph", children: node.children }],
        position: node.position
      };
      return footnoteReference(h, {
        type: "footnoteReference",
        identifier,
        position: node.position
      });
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/heading.js
var require_heading = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/heading.js"(exports, module) {
    "use strict";
    module.exports = heading;
    var all = require_all();
    function heading(h, node) {
      return h(node, "h" + node.depth, all(h, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/html.js
var require_html = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/html.js"(exports, module) {
    "use strict";
    module.exports = html;
    var u = require_unist_builder();
    function html(h, node) {
      return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
    }
  }
});

// node_modules/mdurl/encode.js
var require_encode = __commonJS({
  "node_modules/mdurl/encode.js"(exports, module) {
    "use strict";
    var encodeCache = {};
    function getEncodeCache(exclude) {
      var i, ch, cache = encodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = encodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) {
          cache.push(ch);
        } else {
          cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }
      return cache;
    }
    function encode(string, exclude, keepEscaped) {
      var i, l, code, nextCode, cache, result = "";
      if (typeof exclude !== "string") {
        keepEscaped = exclude;
        exclude = encode.defaultChars;
      }
      if (typeof keepEscaped === "undefined") {
        keepEscaped = true;
      }
      cache = getEncodeCache(exclude);
      for (i = 0, l = string.length; i < l; i++) {
        code = string.charCodeAt(i);
        if (keepEscaped && code === 37 && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }
        if (code < 128) {
          result += cache[code];
          continue;
        }
        if (code >= 55296 && code <= 57343) {
          if (code >= 55296 && code <= 56319 && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);
            if (nextCode >= 56320 && nextCode <= 57343) {
              result += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }
          result += "%EF%BF%BD";
          continue;
        }
        result += encodeURIComponent(string[i]);
      }
      return result;
    }
    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";
    module.exports = encode;
  }
});

// node_modules/mdast-util-to-hast/lib/revert.js
var require_revert = __commonJS({
  "node_modules/mdast-util-to-hast/lib/revert.js"(exports, module) {
    "use strict";
    module.exports = revert;
    var u = require_unist_builder();
    var all = require_all();
    function revert(h, node) {
      var subtype = node.referenceType;
      var suffix = "]";
      var contents;
      var head;
      var tail;
      if (subtype === "collapsed") {
        suffix += "[]";
      } else if (subtype === "full") {
        suffix += "[" + (node.label || node.identifier) + "]";
      }
      if (node.type === "imageReference") {
        return u("text", "![" + node.alt + suffix);
      }
      contents = all(h, node);
      head = contents[0];
      if (head && head.type === "text") {
        head.value = "[" + head.value;
      } else {
        contents.unshift(u("text", "["));
      }
      tail = contents[contents.length - 1];
      if (tail && tail.type === "text") {
        tail.value += suffix;
      } else {
        contents.push(u("text", suffix));
      }
      return contents;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
var require_image_reference = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"(exports, module) {
    "use strict";
    module.exports = imageReference;
    var normalize = require_encode();
    var revert = require_revert();
    function imageReference(h, node) {
      var def = h.definition(node.identifier);
      var props;
      if (!def) {
        return revert(h, node);
      }
      props = { src: normalize(def.url || ""), alt: node.alt };
      if (def.title !== null && def.title !== void 0) {
        props.title = def.title;
      }
      return h(node, "img", props);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image.js
var require_image = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/image.js"(exports, module) {
    "use strict";
    var normalize = require_encode();
    module.exports = image;
    function image(h, node) {
      var props = { src: normalize(node.url), alt: node.alt };
      if (node.title !== null && node.title !== void 0) {
        props.title = node.title;
      }
      return h(node, "img", props);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
var require_inline_code = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"(exports, module) {
    "use strict";
    module.exports = inlineCode;
    var u = require_unist_builder();
    function inlineCode(h, node) {
      var value = node.value.replace(/\r?\n|\r/g, " ");
      return h(node, "code", [u("text", value)]);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
var require_link_reference = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"(exports, module) {
    "use strict";
    module.exports = linkReference;
    var normalize = require_encode();
    var revert = require_revert();
    var all = require_all();
    function linkReference(h, node) {
      var def = h.definition(node.identifier);
      var props;
      if (!def) {
        return revert(h, node);
      }
      props = { href: normalize(def.url || "") };
      if (def.title !== null && def.title !== void 0) {
        props.title = def.title;
      }
      return h(node, "a", props, all(h, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link.js
var require_link = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/link.js"(exports, module) {
    "use strict";
    var normalize = require_encode();
    var all = require_all();
    module.exports = link;
    function link(h, node) {
      var props = { href: normalize(node.url) };
      if (node.title !== null && node.title !== void 0) {
        props.title = node.title;
      }
      return h(node, "a", props, all(h, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list-item.js
var require_list_item = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/list-item.js"(exports, module) {
    "use strict";
    module.exports = listItem;
    var u = require_unist_builder();
    var all = require_all();
    function listItem(h, node, parent) {
      var result = all(h, node);
      var head = result[0];
      var loose = parent ? listLoose(parent) : listItemLoose(node);
      var props = {};
      var wrapped = [];
      var length;
      var index;
      var child;
      if (typeof node.checked === "boolean") {
        if (!head || head.tagName !== "p") {
          head = h(null, "p", []);
          result.unshift(head);
        }
        if (head.children.length > 0) {
          head.children.unshift(u("text", " "));
        }
        head.children.unshift(
          h(null, "input", {
            type: "checkbox",
            checked: node.checked,
            disabled: true
          })
        );
        props.className = ["task-list-item"];
      }
      length = result.length;
      index = -1;
      while (++index < length) {
        child = result[index];
        if (loose || index !== 0 || child.tagName !== "p") {
          wrapped.push(u("text", "\n"));
        }
        if (child.tagName === "p" && !loose) {
          wrapped = wrapped.concat(child.children);
        } else {
          wrapped.push(child);
        }
      }
      if (length && (loose || child.tagName !== "p")) {
        wrapped.push(u("text", "\n"));
      }
      return h(node, "li", props, wrapped);
    }
    function listLoose(node) {
      var loose = node.spread;
      var children = node.children;
      var length = children.length;
      var index = -1;
      while (!loose && ++index < length) {
        loose = listItemLoose(children[index]);
      }
      return loose;
    }
    function listItemLoose(node) {
      var spread = node.spread;
      return spread === void 0 || spread === null ? node.children.length > 1 : spread;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
var require_paragraph = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"(exports, module) {
    "use strict";
    module.exports = paragraph;
    var all = require_all();
    function paragraph(h, node) {
      return h(node, "p", all(h, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/root.js
var require_root = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/root.js"(exports, module) {
    "use strict";
    module.exports = root;
    var u = require_unist_builder();
    var wrap = require_wrap2();
    var all = require_all();
    function root(h, node) {
      return h.augment(node, u("root", wrap(all(h, node))));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/strong.js
var require_strong = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/strong.js"(exports, module) {
    "use strict";
    module.exports = strong;
    var all = require_all();
    function strong(h, node) {
      return h(node, "strong", all(h, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/table.js
var require_table = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/table.js"(exports, module) {
    "use strict";
    module.exports = table;
    var position = require_unist_util_position();
    var wrap = require_wrap2();
    var all = require_all();
    function table(h, node) {
      var rows = node.children;
      var index = rows.length;
      var align = node.align || [];
      var alignLength = align.length;
      var result = [];
      var pos;
      var row;
      var out;
      var name;
      var cell;
      while (index--) {
        row = rows[index].children;
        name = index === 0 ? "th" : "td";
        pos = alignLength || row.length;
        out = [];
        while (pos--) {
          cell = row[pos];
          out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
        }
        result[index] = h(rows[index], "tr", wrap(out, true));
      }
      return h(
        node,
        "table",
        wrap(
          [h(result[0].position, "thead", wrap([result[0]], true))].concat(
            result[1] ? h(
              {
                start: position.start(result[1]),
                end: position.end(result[result.length - 1])
              },
              "tbody",
              wrap(result.slice(1), true)
            ) : []
          ),
          true
        )
      );
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/text.js
var require_text2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/text.js"(exports, module) {
    "use strict";
    module.exports = text;
    var u = require_unist_builder();
    function text(h, node) {
      return h.augment(
        node,
        u("text", String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1"))
      );
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/index.js
var require_handlers = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/index.js"(exports, module) {
    "use strict";
    module.exports = {
      blockquote: require_blockquote(),
      break: require_break(),
      code: require_code(),
      delete: require_delete(),
      emphasis: require_emphasis(),
      footnoteReference: require_footnote_reference(),
      footnote: require_footnote(),
      heading: require_heading(),
      html: require_html(),
      imageReference: require_image_reference(),
      image: require_image(),
      inlineCode: require_inline_code(),
      linkReference: require_link_reference(),
      link: require_link(),
      listItem: require_list_item(),
      list: require_list2(),
      paragraph: require_paragraph(),
      root: require_root(),
      strong: require_strong(),
      table: require_table(),
      text: require_text2(),
      thematicBreak: require_thematic_break2(),
      toml: ignore,
      yaml: ignore,
      definition: ignore,
      footnoteDefinition: ignore
    };
    function ignore() {
      return null;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/index.js"(exports, module) {
    "use strict";
    module.exports = toHast;
    var u = require_unist_builder();
    var visit = require_unist_util_visit();
    var position = require_unist_util_position();
    var generated = require_unist_util_generated();
    var definitions = require_mdast_util_definitions();
    var one = require_one();
    var footer = require_footer();
    var handlers = require_handlers();
    var own = {}.hasOwnProperty;
    var deprecationWarningIssued = false;
    function factory(tree, options) {
      var settings = options || {};
      if (settings.allowDangerousHTML !== void 0 && !deprecationWarningIssued) {
        deprecationWarningIssued = true;
        console.warn(
          "mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"
        );
      }
      var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML;
      var footnoteById = {};
      h.dangerous = dangerous;
      h.definition = definitions(tree);
      h.footnoteById = footnoteById;
      h.footnoteOrder = [];
      h.augment = augment;
      h.handlers = Object.assign({}, handlers, settings.handlers);
      h.unknownHandler = settings.unknownHandler;
      h.passThrough = settings.passThrough;
      visit(tree, "footnoteDefinition", onfootnotedefinition);
      return h;
      function augment(left, right) {
        var data;
        var ctx;
        if (left && left.data) {
          data = left.data;
          if (data.hName) {
            if (right.type !== "element") {
              right = {
                type: "element",
                tagName: "",
                properties: {},
                children: []
              };
            }
            right.tagName = data.hName;
          }
          if (right.type === "element" && data.hProperties) {
            right.properties = Object.assign({}, right.properties, data.hProperties);
          }
          if (right.children && data.hChildren) {
            right.children = data.hChildren;
          }
        }
        ctx = left && left.position ? left : { position: left };
        if (!generated(ctx)) {
          right.position = {
            start: position.start(ctx),
            end: position.end(ctx)
          };
        }
        return right;
      }
      function h(node, tagName, props, children) {
        if ((children === void 0 || children === null) && typeof props === "object" && "length" in props) {
          children = props;
          props = {};
        }
        return augment(node, {
          type: "element",
          tagName,
          properties: props || {},
          children: children || []
        });
      }
      function onfootnotedefinition(definition) {
        var id = String(definition.identifier).toUpperCase();
        if (!own.call(footnoteById, id)) {
          footnoteById[id] = definition;
        }
      }
    }
    function toHast(tree, options) {
      var h = factory(tree, options);
      var node = one(h, tree);
      var foot = footer(h);
      if (foot) {
        node.children = node.children.concat(u("text", "\n"), foot);
      }
      return node;
    }
  }
});

// node_modules/mdast-util-to-hast/index.js
var require_mdast_util_to_hast = __commonJS({
  "node_modules/mdast-util-to-hast/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib2();
  }
});

// node_modules/remark-rehype/index.js
var require_remark_rehype = __commonJS({
  "node_modules/remark-rehype/index.js"(exports, module) {
    "use strict";
    var mdast2hast = require_mdast_util_to_hast();
    module.exports = remark2rehype;
    function remark2rehype(destination, options) {
      if (destination && !destination.process) {
        options = destination;
        destination = null;
      }
      return destination ? bridge(destination, options) : mutate(options);
    }
    function bridge(destination, options) {
      return transformer2;
      function transformer2(node, file, next) {
        destination.run(mdast2hast(node, options), file, done);
        function done(error) {
          next(error);
        }
      }
    }
    function mutate(options) {
      return transformer2;
      function transformer2(node) {
        return mdast2hast(node, options);
      }
    }
  }
});

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports, module) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// node_modules/property-information/lib/util/schema.js
var require_schema = __commonJS({
  "node_modules/property-information/lib/util/schema.js"(exports, module) {
    "use strict";
    module.exports = Schema;
    var proto = Schema.prototype;
    proto.space = null;
    proto.normal = {};
    proto.property = {};
    function Schema(property, normal, space) {
      this.property = property;
      this.normal = normal;
      if (space) {
        this.space = space;
      }
    }
  }
});

// node_modules/property-information/lib/util/merge.js
var require_merge = __commonJS({
  "node_modules/property-information/lib/util/merge.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var Schema = require_schema();
    module.exports = merge3;
    function merge3(definitions) {
      var length = definitions.length;
      var property = [];
      var normal = [];
      var index = -1;
      var info;
      var space;
      while (++index < length) {
        info = definitions[index];
        property.push(info.property);
        normal.push(info.normal);
        space = info.space;
      }
      return new Schema(
        xtend.apply(null, property),
        xtend.apply(null, normal),
        space
      );
    }
  }
});

// node_modules/property-information/normalize.js
var require_normalize = __commonJS({
  "node_modules/property-information/normalize.js"(exports, module) {
    "use strict";
    module.exports = normalize;
    function normalize(value) {
      return value.toLowerCase();
    }
  }
});

// node_modules/property-information/lib/util/info.js
var require_info = __commonJS({
  "node_modules/property-information/lib/util/info.js"(exports, module) {
    "use strict";
    module.exports = Info;
    var proto = Info.prototype;
    proto.space = null;
    proto.attribute = null;
    proto.property = null;
    proto.boolean = false;
    proto.booleanish = false;
    proto.overloadedBoolean = false;
    proto.number = false;
    proto.commaSeparated = false;
    proto.spaceSeparated = false;
    proto.commaOrSpaceSeparated = false;
    proto.mustUseProperty = false;
    proto.defined = false;
    function Info(property, attribute) {
      this.property = property;
      this.attribute = attribute;
    }
  }
});

// node_modules/property-information/lib/util/types.js
var require_types = __commonJS({
  "node_modules/property-information/lib/util/types.js"(exports) {
    "use strict";
    var powers = 0;
    exports.boolean = increment();
    exports.booleanish = increment();
    exports.overloadedBoolean = increment();
    exports.number = increment();
    exports.spaceSeparated = increment();
    exports.commaSeparated = increment();
    exports.commaOrSpaceSeparated = increment();
    function increment() {
      return Math.pow(2, ++powers);
    }
  }
});

// node_modules/property-information/lib/util/defined-info.js
var require_defined_info = __commonJS({
  "node_modules/property-information/lib/util/defined-info.js"(exports, module) {
    "use strict";
    var Info = require_info();
    var types = require_types();
    module.exports = DefinedInfo;
    DefinedInfo.prototype = new Info();
    DefinedInfo.prototype.defined = true;
    var checks = [
      "boolean",
      "booleanish",
      "overloadedBoolean",
      "number",
      "commaSeparated",
      "spaceSeparated",
      "commaOrSpaceSeparated"
    ];
    var checksLength = checks.length;
    function DefinedInfo(property, attribute, mask, space) {
      var index = -1;
      var check;
      mark(this, "space", space);
      Info.call(this, property, attribute);
      while (++index < checksLength) {
        check = checks[index];
        mark(this, check, (mask & types[check]) === types[check]);
      }
    }
    function mark(values, key, value) {
      if (value) {
        values[key] = value;
      }
    }
  }
});

// node_modules/property-information/lib/util/create.js
var require_create = __commonJS({
  "node_modules/property-information/lib/util/create.js"(exports, module) {
    "use strict";
    var normalize = require_normalize();
    var Schema = require_schema();
    var DefinedInfo = require_defined_info();
    module.exports = create;
    function create(definition) {
      var space = definition.space;
      var mustUseProperty = definition.mustUseProperty || [];
      var attributes = definition.attributes || {};
      var props = definition.properties;
      var transform = definition.transform;
      var property = {};
      var normal = {};
      var prop;
      var info;
      for (prop in props) {
        info = new DefinedInfo(
          prop,
          transform(attributes, prop),
          props[prop],
          space
        );
        if (mustUseProperty.indexOf(prop) !== -1) {
          info.mustUseProperty = true;
        }
        property[prop] = info;
        normal[normalize(prop)] = prop;
        normal[normalize(info.attribute)] = prop;
      }
      return new Schema(property, normal, space);
    }
  }
});

// node_modules/property-information/lib/xlink.js
var require_xlink = __commonJS({
  "node_modules/property-information/lib/xlink.js"(exports, module) {
    "use strict";
    var create = require_create();
    module.exports = create({
      space: "xlink",
      transform: xlinkTransform,
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
      }
    });
    function xlinkTransform(_, prop) {
      return "xlink:" + prop.slice(5).toLowerCase();
    }
  }
});

// node_modules/property-information/lib/xml.js
var require_xml = __commonJS({
  "node_modules/property-information/lib/xml.js"(exports, module) {
    "use strict";
    var create = require_create();
    module.exports = create({
      space: "xml",
      transform: xmlTransform,
      properties: {
        xmlLang: null,
        xmlBase: null,
        xmlSpace: null
      }
    });
    function xmlTransform(_, prop) {
      return "xml:" + prop.slice(3).toLowerCase();
    }
  }
});

// node_modules/property-information/lib/util/case-sensitive-transform.js
var require_case_sensitive_transform = __commonJS({
  "node_modules/property-information/lib/util/case-sensitive-transform.js"(exports, module) {
    "use strict";
    module.exports = caseSensitiveTransform;
    function caseSensitiveTransform(attributes, attribute) {
      return attribute in attributes ? attributes[attribute] : attribute;
    }
  }
});

// node_modules/property-information/lib/util/case-insensitive-transform.js
var require_case_insensitive_transform = __commonJS({
  "node_modules/property-information/lib/util/case-insensitive-transform.js"(exports, module) {
    "use strict";
    var caseSensitiveTransform = require_case_sensitive_transform();
    module.exports = caseInsensitiveTransform;
    function caseInsensitiveTransform(attributes, property) {
      return caseSensitiveTransform(attributes, property.toLowerCase());
    }
  }
});

// node_modules/property-information/lib/xmlns.js
var require_xmlns = __commonJS({
  "node_modules/property-information/lib/xmlns.js"(exports, module) {
    "use strict";
    var create = require_create();
    var caseInsensitiveTransform = require_case_insensitive_transform();
    module.exports = create({
      space: "xmlns",
      attributes: {
        xmlnsxlink: "xmlns:xlink"
      },
      transform: caseInsensitiveTransform,
      properties: {
        xmlns: null,
        xmlnsXLink: null
      }
    });
  }
});

// node_modules/property-information/lib/aria.js
var require_aria = __commonJS({
  "node_modules/property-information/lib/aria.js"(exports, module) {
    "use strict";
    var types = require_types();
    var create = require_create();
    var booleanish = types.booleanish;
    var number = types.number;
    var spaceSeparated = types.spaceSeparated;
    module.exports = create({
      transform: ariaTransform,
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: booleanish,
        ariaAutoComplete: null,
        ariaBusy: booleanish,
        ariaChecked: booleanish,
        ariaColCount: number,
        ariaColIndex: number,
        ariaColSpan: number,
        ariaControls: spaceSeparated,
        ariaCurrent: null,
        ariaDescribedBy: spaceSeparated,
        ariaDetails: null,
        ariaDisabled: booleanish,
        ariaDropEffect: spaceSeparated,
        ariaErrorMessage: null,
        ariaExpanded: booleanish,
        ariaFlowTo: spaceSeparated,
        ariaGrabbed: booleanish,
        ariaHasPopup: null,
        ariaHidden: booleanish,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: spaceSeparated,
        ariaLevel: number,
        ariaLive: null,
        ariaModal: booleanish,
        ariaMultiLine: booleanish,
        ariaMultiSelectable: booleanish,
        ariaOrientation: null,
        ariaOwns: spaceSeparated,
        ariaPlaceholder: null,
        ariaPosInSet: number,
        ariaPressed: booleanish,
        ariaReadOnly: booleanish,
        ariaRelevant: null,
        ariaRequired: booleanish,
        ariaRoleDescription: spaceSeparated,
        ariaRowCount: number,
        ariaRowIndex: number,
        ariaRowSpan: number,
        ariaSelected: booleanish,
        ariaSetSize: number,
        ariaSort: null,
        ariaValueMax: number,
        ariaValueMin: number,
        ariaValueNow: number,
        ariaValueText: null,
        role: null
      }
    });
    function ariaTransform(_, prop) {
      return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    }
  }
});

// node_modules/property-information/lib/html.js
var require_html2 = __commonJS({
  "node_modules/property-information/lib/html.js"(exports, module) {
    "use strict";
    var types = require_types();
    var create = require_create();
    var caseInsensitiveTransform = require_case_insensitive_transform();
    var boolean = types.boolean;
    var overloadedBoolean = types.overloadedBoolean;
    var booleanish = types.booleanish;
    var number = types.number;
    var spaceSeparated = types.spaceSeparated;
    var commaSeparated = types.commaSeparated;
    module.exports = create({
      space: "html",
      attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
      },
      transform: caseInsensitiveTransform,
      mustUseProperty: ["checked", "multiple", "muted", "selected"],
      properties: {
        // Standard Properties.
        abbr: null,
        accept: commaSeparated,
        acceptCharset: spaceSeparated,
        accessKey: spaceSeparated,
        action: null,
        allow: null,
        allowFullScreen: boolean,
        allowPaymentRequest: boolean,
        allowUserMedia: boolean,
        alt: null,
        as: null,
        async: boolean,
        autoCapitalize: null,
        autoComplete: spaceSeparated,
        autoFocus: boolean,
        autoPlay: boolean,
        capture: boolean,
        charSet: null,
        checked: boolean,
        cite: null,
        className: spaceSeparated,
        cols: number,
        colSpan: null,
        content: null,
        contentEditable: booleanish,
        controls: boolean,
        controlsList: spaceSeparated,
        coords: number | commaSeparated,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: boolean,
        defer: boolean,
        dir: null,
        dirName: null,
        disabled: boolean,
        download: overloadedBoolean,
        draggable: booleanish,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: boolean,
        formTarget: null,
        headers: spaceSeparated,
        height: number,
        hidden: boolean,
        high: number,
        href: null,
        hrefLang: null,
        htmlFor: spaceSeparated,
        httpEquiv: spaceSeparated,
        id: null,
        imageSizes: null,
        imageSrcSet: commaSeparated,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: boolean,
        itemId: null,
        itemProp: spaceSeparated,
        itemRef: spaceSeparated,
        itemScope: boolean,
        itemType: spaceSeparated,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: boolean,
        low: number,
        manifest: null,
        max: null,
        maxLength: number,
        media: null,
        method: null,
        min: null,
        minLength: number,
        multiple: boolean,
        muted: boolean,
        name: null,
        nonce: null,
        noModule: boolean,
        noValidate: boolean,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: boolean,
        optimum: number,
        pattern: null,
        ping: spaceSeparated,
        placeholder: null,
        playsInline: boolean,
        poster: null,
        preload: null,
        readOnly: boolean,
        referrerPolicy: null,
        rel: spaceSeparated,
        required: boolean,
        reversed: boolean,
        rows: number,
        rowSpan: number,
        sandbox: spaceSeparated,
        scope: null,
        scoped: boolean,
        seamless: boolean,
        selected: boolean,
        shape: null,
        size: number,
        sizes: null,
        slot: null,
        span: number,
        spellCheck: booleanish,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: commaSeparated,
        start: number,
        step: null,
        style: null,
        tabIndex: number,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: boolean,
        useMap: null,
        value: booleanish,
        width: number,
        wrap: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        // Several. Use CSS `text-align` instead,
        aLink: null,
        // `<body>`. Use CSS `a:active {color}` instead
        archive: spaceSeparated,
        // `<object>`. List of URIs to archives
        axis: null,
        // `<td>` and `<th>`. Use `scope` on `<th>`
        background: null,
        // `<body>`. Use CSS `background-image` instead
        bgColor: null,
        // `<body>` and table elements. Use CSS `background-color` instead
        border: number,
        // `<table>`. Use CSS `border-width` instead,
        borderColor: null,
        // `<table>`. Use CSS `border-color` instead,
        bottomMargin: number,
        // `<body>`
        cellPadding: null,
        // `<table>`
        cellSpacing: null,
        // `<table>`
        char: null,
        // Several table elements. When `align=char`, sets the character to align on
        charOff: null,
        // Several table elements. When `char`, offsets the alignment
        classId: null,
        // `<object>`
        clear: null,
        // `<br>`. Use CSS `clear` instead
        code: null,
        // `<object>`
        codeBase: null,
        // `<object>`
        codeType: null,
        // `<object>`
        color: null,
        // `<font>` and `<hr>`. Use CSS instead
        compact: boolean,
        // Lists. Use CSS to reduce space between items instead
        declare: boolean,
        // `<object>`
        event: null,
        // `<script>`
        face: null,
        // `<font>`. Use CSS instead
        frame: null,
        // `<table>`
        frameBorder: null,
        // `<iframe>`. Use CSS `border` instead
        hSpace: number,
        // `<img>` and `<object>`
        leftMargin: number,
        // `<body>`
        link: null,
        // `<body>`. Use CSS `a:link {color: *}` instead
        longDesc: null,
        // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
        lowSrc: null,
        // `<img>`. Use a `<picture>`
        marginHeight: number,
        // `<body>`
        marginWidth: number,
        // `<body>`
        noResize: boolean,
        // `<frame>`
        noHref: boolean,
        // `<area>`. Use no href instead of an explicit `nohref`
        noShade: boolean,
        // `<hr>`. Use background-color and height instead of borders
        noWrap: boolean,
        // `<td>` and `<th>`
        object: null,
        // `<applet>`
        profile: null,
        // `<head>`
        prompt: null,
        // `<isindex>`
        rev: null,
        // `<link>`
        rightMargin: number,
        // `<body>`
        rules: null,
        // `<table>`
        scheme: null,
        // `<meta>`
        scrolling: booleanish,
        // `<frame>`. Use overflow in the child context
        standby: null,
        // `<object>`
        summary: null,
        // `<table>`
        text: null,
        // `<body>`. Use CSS `color` instead
        topMargin: number,
        // `<body>`
        valueType: null,
        // `<param>`
        version: null,
        // `<html>`. Use a doctype.
        vAlign: null,
        // Several. Use CSS `vertical-align` instead
        vLink: null,
        // `<body>`. Use CSS `a:visited {color}` instead
        vSpace: number,
        // `<img>` and `<object>`
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: boolean,
        disableRemotePlayback: boolean,
        prefix: null,
        property: null,
        results: number,
        security: null,
        unselectable: null
      }
    });
  }
});

// node_modules/property-information/html.js
var require_html3 = __commonJS({
  "node_modules/property-information/html.js"(exports, module) {
    "use strict";
    var merge3 = require_merge();
    var xlink = require_xlink();
    var xml = require_xml();
    var xmlns = require_xmlns();
    var aria = require_aria();
    var html = require_html2();
    module.exports = merge3([xml, xlink, xmlns, aria, html]);
  }
});

// node_modules/react-markdown/src/rehype-filter.js
var require_rehype_filter = __commonJS({
  "node_modules/react-markdown/src/rehype-filter.js"(exports, module) {
    var visit = require_unist_util_visit();
    module.exports = rehypeFilter;
    function rehypeFilter(options) {
      if (options.allowedElements && options.disallowedElements) {
        throw new TypeError(
          "Only one of `allowedElements` and `disallowedElements` should be defined"
        );
      }
      if (options.allowedElements || options.disallowedElements || options.allowElement) {
        return (tree) => {
          const node = (
            /** @type {Root} */
            tree
          );
          visit(node, "element", onelement);
        };
      }
      function onelement(node_, index, parent_) {
        const node = (
          /** @type {Element} */
          node_
        );
        const parent = (
          /** @type {Element|Root} */
          parent_
        );
        let remove;
        if (options.allowedElements) {
          remove = !options.allowedElements.includes(node.tagName);
        } else if (options.disallowedElements) {
          remove = options.disallowedElements.includes(node.tagName);
        }
        if (!remove && options.allowElement && typeof index === "number") {
          remove = !options.allowElement(node, index, parent);
        }
        if (remove && typeof index === "number") {
          if (options.unwrapDisallowed && node.children) {
            parent.children.splice(index, 1, ...node.children);
          } else {
            parent.children.splice(index, 1);
          }
          return index;
        }
        return void 0;
      }
    }
  }
});

// node_modules/react-markdown/src/uri-transformer.js
var require_uri_transformer = __commonJS({
  "node_modules/react-markdown/src/uri-transformer.js"(exports, module) {
    var protocols = ["http", "https", "mailto", "tel"];
    module.exports = uriTransformer;
    function uriTransformer(uri) {
      const url = (uri || "").trim();
      const first = url.charAt(0);
      if (first === "#" || first === "/") {
        return url;
      }
      const colon = url.indexOf(":");
      if (colon === -1) {
        return url;
      }
      let index = -1;
      while (++index < protocols.length) {
        const protocol = protocols[index];
        if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
          return url;
        }
      }
      index = url.indexOf("?");
      if (index !== -1 && colon > index) {
        return url;
      }
      index = url.indexOf("#");
      if (index !== -1 && colon > index) {
        return url;
      }
      return "javascript:void(0)";
    }
  }
});

// node_modules/react-markdown/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-markdown/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef3 = REACT_FORWARD_REF_TYPE;
        var Fragment7 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef3;
        exports.Fragment = Fragment7;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-markdown/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-markdown/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/property-information/lib/svg.js
var require_svg = __commonJS({
  "node_modules/property-information/lib/svg.js"(exports, module) {
    "use strict";
    var types = require_types();
    var create = require_create();
    var caseSensitiveTransform = require_case_sensitive_transform();
    var boolean = types.boolean;
    var number = types.number;
    var spaceSeparated = types.spaceSeparated;
    var commaSeparated = types.commaSeparated;
    var commaOrSpaceSeparated = types.commaOrSpaceSeparated;
    module.exports = create({
      space: "svg",
      attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin"
      },
      transform: caseSensitiveTransform,
      properties: {
        about: commaOrSpaceSeparated,
        accentHeight: number,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: number,
        amplitude: number,
        arabicForm: null,
        ascent: number,
        attributeName: null,
        attributeType: null,
        azimuth: number,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: number,
        by: null,
        calcMode: null,
        capHeight: number,
        className: spaceSeparated,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: number,
        diffuseConstant: number,
        direction: null,
        display: null,
        dur: null,
        divisor: number,
        dominantBaseline: null,
        download: boolean,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: number,
        enableBackground: null,
        end: null,
        event: null,
        exponent: number,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: number,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: commaSeparated,
        g2: commaSeparated,
        glyphName: commaSeparated,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: number,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: number,
        horizOriginX: number,
        horizOriginY: number,
        id: null,
        ideographic: number,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: number,
        k: number,
        k1: number,
        k2: number,
        k3: number,
        k4: number,
        kernelMatrix: commaOrSpaceSeparated,
        kernelUnitLength: null,
        keyPoints: null,
        // SEMI_COLON_SEPARATED
        keySplines: null,
        // SEMI_COLON_SEPARATED
        keyTimes: null,
        // SEMI_COLON_SEPARATED
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: number,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: number,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: number,
        overlineThickness: number,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: number,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: spaceSeparated,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: number,
        pointsAtY: number,
        pointsAtZ: number,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: commaOrSpaceSeparated,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: commaOrSpaceSeparated,
        rev: commaOrSpaceSeparated,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: commaOrSpaceSeparated,
        requiredFeatures: commaOrSpaceSeparated,
        requiredFonts: commaOrSpaceSeparated,
        requiredFormats: commaOrSpaceSeparated,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: number,
        specularExponent: number,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: number,
        strikethroughThickness: number,
        string: null,
        stroke: null,
        strokeDashArray: commaOrSpaceSeparated,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: number,
        strokeOpacity: number,
        strokeWidth: null,
        style: null,
        surfaceScale: number,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: commaOrSpaceSeparated,
        tabIndex: number,
        tableValues: null,
        target: null,
        targetX: number,
        targetY: number,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: commaOrSpaceSeparated,
        to: null,
        transform: null,
        u1: null,
        u2: null,
        underlinePosition: number,
        underlineThickness: number,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: number,
        values: null,
        vAlphabetic: number,
        vMathematical: number,
        vectorEffect: null,
        vHanging: number,
        vIdeographic: number,
        version: null,
        vertAdvY: number,
        vertOriginX: number,
        vertOriginY: number,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: number,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
      }
    });
  }
});

// node_modules/property-information/svg.js
var require_svg2 = __commonJS({
  "node_modules/property-information/svg.js"(exports, module) {
    "use strict";
    var merge3 = require_merge();
    var xlink = require_xlink();
    var xml = require_xml();
    var xmlns = require_xmlns();
    var aria = require_aria();
    var svg = require_svg();
    module.exports = merge3([xml, xlink, xmlns, aria, svg]);
  }
});

// node_modules/property-information/find.js
var require_find = __commonJS({
  "node_modules/property-information/find.js"(exports, module) {
    "use strict";
    var normalize = require_normalize();
    var DefinedInfo = require_defined_info();
    var Info = require_info();
    var data = "data";
    module.exports = find;
    var valid = /^data[-\w.:]+$/i;
    var dash = /-[a-z]/g;
    var cap = /[A-Z]/g;
    function find(schema, value) {
      var normal = normalize(value);
      var prop = value;
      var Type = Info;
      if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
      }
      if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
        if (value.charAt(4) === "-") {
          prop = datasetToProperty(value);
        } else {
          value = datasetToAttribute(value);
        }
        Type = DefinedInfo;
      }
      return new Type(prop, value);
    }
    function datasetToProperty(attribute) {
      var value = attribute.slice(5).replace(dash, camelcase);
      return data + value.charAt(0).toUpperCase() + value.slice(1);
    }
    function datasetToAttribute(property) {
      var value = property.slice(4);
      if (dash.test(value)) {
        return property;
      }
      value = value.replace(cap, kebab);
      if (value.charAt(0) !== "-") {
        value = "-" + value;
      }
      return data + value;
    }
    function kebab($0) {
      return "-" + $0.toLowerCase();
    }
    function camelcase($0) {
      return $0.charAt(1).toUpperCase();
    }
  }
});

// node_modules/property-information/hast-to-react.json
var require_hast_to_react = __commonJS({
  "node_modules/property-information/hast-to-react.json"(exports, module) {
    module.exports = {
      classId: "classID",
      dataType: "datatype",
      itemId: "itemID",
      strokeDashArray: "strokeDasharray",
      strokeDashOffset: "strokeDashoffset",
      strokeLineCap: "strokeLinecap",
      strokeLineJoin: "strokeLinejoin",
      strokeMiterLimit: "strokeMiterlimit",
      typeOf: "typeof",
      xLinkActuate: "xlinkActuate",
      xLinkArcRole: "xlinkArcrole",
      xLinkHref: "xlinkHref",
      xLinkRole: "xlinkRole",
      xLinkShow: "xlinkShow",
      xLinkTitle: "xlinkTitle",
      xLinkType: "xlinkType",
      xmlnsXLink: "xmlnsXlink"
    };
  }
});

// node_modules/space-separated-tokens/index.js
var require_space_separated_tokens = __commonJS({
  "node_modules/space-separated-tokens/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.stringify = stringify;
    var empty = "";
    var space = " ";
    var whiteSpace = /[ \t\n\r\f]+/g;
    function parse(value) {
      var input = String(value || empty).trim();
      return input === empty ? [] : input.split(whiteSpace);
    }
    function stringify(values) {
      return values.join(space).trim();
    }
  }
});

// node_modules/comma-separated-tokens/index.js
var require_comma_separated_tokens = __commonJS({
  "node_modules/comma-separated-tokens/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.stringify = stringify;
    var comma = ",";
    var space = " ";
    var empty = "";
    function parse(value) {
      var values = [];
      var input = String(value || empty);
      var index = input.indexOf(comma);
      var lastIndex = 0;
      var end = false;
      var val;
      while (!end) {
        if (index === -1) {
          index = input.length;
          end = true;
        }
        val = input.slice(lastIndex, index).trim();
        if (val || !end) {
          values.push(val);
        }
        lastIndex = index + 1;
        index = input.indexOf(comma, lastIndex);
      }
      return values;
    }
    function stringify(values, options) {
      var settings = options || {};
      var left = settings.padLeft === false ? empty : space;
      var right = settings.padRight ? space : empty;
      if (values[values.length - 1] === empty) {
        values = values.concat(empty);
      }
      return values.join(right + comma + left).trim();
    }
  }
});

// node_modules/inline-style-parser/index.js
var require_inline_style_parser = __commonJS({
  "node_modules/inline-style-parser/index.js"(exports, module) {
    var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    var NEWLINE_REGEX = /\n/g;
    var WHITESPACE_REGEX = /^\s*/;
    var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
    var COLON_REGEX = /^:\s*/;
    var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
    var SEMICOLON_REGEX = /^[;\s]*/;
    var TRIM_REGEX = /^\s+|\s+$/g;
    var NEWLINE = "\n";
    var FORWARD_SLASH = "/";
    var ASTERISK = "*";
    var EMPTY_STRING = "";
    var TYPE_COMMENT = "comment";
    var TYPE_DECLARATION = "declaration";
    module.exports = function(style, options) {
      if (typeof style !== "string") {
        throw new TypeError("First argument must be a string");
      }
      if (!style)
        return [];
      options = options || {};
      var lineno = 1;
      var column = 1;
      function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines)
          lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
      }
      function position() {
        var start = { line: lineno, column };
        return function(node) {
          node.position = new Position(start);
          whitespace();
          return node;
        };
      }
      function Position(start) {
        this.start = start;
        this.end = { line: lineno, column };
        this.source = options.source;
      }
      Position.prototype.content = style;
      var errorsList = [];
      function error(msg) {
        var err = new Error(
          options.source + ":" + lineno + ":" + column + ": " + msg
        );
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) {
          errorsList.push(err);
        } else {
          throw err;
        }
      }
      function match(re) {
        var m = re.exec(style);
        if (!m)
          return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
      }
      function whitespace() {
        match(WHITESPACE_REGEX);
      }
      function comments(rules) {
        var c;
        rules = rules || [];
        while (c = comment()) {
          if (c !== false) {
            rules.push(c);
          }
        }
        return rules;
      }
      function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1))
          return;
        var i = 2;
        while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
          ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
          return error("End of comment missing");
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
          type: TYPE_COMMENT,
          comment: str
        });
      }
      function declaration() {
        var pos = position();
        var prop = match(PROPERTY_REGEX);
        if (!prop)
          return;
        comment();
        if (!match(COLON_REGEX))
          return error("property missing ':'");
        var val = match(VALUE_REGEX);
        var ret = pos({
          type: TYPE_DECLARATION,
          property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
          value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        match(SEMICOLON_REGEX);
        return ret;
      }
      function declarations() {
        var decls = [];
        comments(decls);
        var decl;
        while (decl = declaration()) {
          if (decl !== false) {
            decls.push(decl);
            comments(decls);
          }
        }
        return decls;
      }
      whitespace();
      return declarations();
    };
    function trim(str) {
      return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
    }
  }
});

// node_modules/style-to-object/index.js
var require_style_to_object = __commonJS({
  "node_modules/style-to-object/index.js"(exports, module) {
    var parse = require_inline_style_parser();
    function StyleToObject(style, iterator) {
      var output = null;
      if (!style || typeof style !== "string") {
        return output;
      }
      var declaration;
      var declarations = parse(style);
      var hasIterator = typeof iterator === "function";
      var property;
      var value;
      for (var i = 0, len = declarations.length; i < len; i++) {
        declaration = declarations[i];
        property = declaration.property;
        value = declaration.value;
        if (hasIterator) {
          iterator(property, value, declaration);
        } else if (value) {
          output || (output = {});
          output[property] = value;
        }
      }
      return output;
    }
    module.exports = StyleToObject;
  }
});

// node_modules/react-markdown/src/ast-to-react.js
var require_ast_to_react = __commonJS({
  "node_modules/react-markdown/src/ast-to-react.js"(exports) {
    "use strict";
    var React52 = require_react();
    var ReactIs = require_react_is();
    var svg = require_svg2();
    var find = require_find();
    var hastToReact = require_hast_to_react();
    var spaces = require_space_separated_tokens();
    var commas = require_comma_separated_tokens();
    var style = require_style_to_object();
    exports.hastToReact = toReact;
    exports.hastChildrenToReact = childrenToReact;
    var own = {}.hasOwnProperty;
    var tableElements = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
    function childrenToReact(context, node) {
      const children = [];
      let childIndex = -1;
      let child;
      while (++childIndex < node.children.length) {
        child = node.children[childIndex];
        if (child.type === "element") {
          children.push(toReact(context, child, childIndex, node));
        } else if (child.type === "text") {
          if (node.type !== "element" || !tableElements.has(node.tagName) || child.value !== "\n") {
            children.push(child.value);
          }
        } else if (child.type === "raw" && !context.options.skipHtml) {
          children.push(child.value);
        }
      }
      return children;
    }
    function toReact(context, node, index, parent) {
      const options = context.options;
      const parentSchema = context.schema;
      const name = node.tagName;
      const properties = {};
      let schema = parentSchema;
      let property;
      if (parentSchema.space === "html" && name === "svg") {
        schema = svg;
        context.schema = schema;
      }
      if (node.properties) {
        for (property in node.properties) {
          if (own.call(node.properties, property)) {
            addProperty(properties, property, node.properties[property], context);
          }
        }
      }
      if (name === "ol" || name === "ul") {
        context.listDepth++;
      }
      const children = childrenToReact(context, node);
      if (name === "ol" || name === "ul") {
        context.listDepth--;
      }
      context.schema = parentSchema;
      const position = node.position || {
        start: { line: null, column: null, offset: null },
        end: { line: null, column: null, offset: null }
      };
      const component = options.components && own.call(options.components, name) ? options.components[name] : name;
      const basic = typeof component === "string" || component === React52.Fragment;
      if (!ReactIs.isValidElementType(component)) {
        throw new TypeError(
          `Component for name \`${name}\` not defined or is not renderable`
        );
      }
      properties.key = [
        name,
        position.start.line,
        position.start.column,
        index
      ].join("-");
      if (name === "a" && options.linkTarget) {
        properties.target = typeof options.linkTarget === "function" ? (
          // @ts-expect-error assume `href` is a string
          options.linkTarget(properties.href, node.children, properties.title)
        ) : options.linkTarget;
      }
      if (name === "a" && options.transformLinkUri) {
        properties.href = options.transformLinkUri(
          // @ts-expect-error assume `href` is a string
          properties.href,
          node.children,
          properties.title
        );
      }
      if (!basic && name === "code" && parent.type === "element" && parent.tagName !== "pre") {
        properties.inline = true;
      }
      if (!basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6")) {
        properties.level = parseInt(name.charAt(1), 10);
      }
      if (name === "img" && options.transformImageUri) {
        properties.src = options.transformImageUri(
          // @ts-expect-error assume `src` is a string
          properties.src,
          properties.alt,
          properties.title
        );
      }
      if (!basic && name === "li" && parent.type === "element") {
        const input = getInputElement(node);
        properties.checked = input && input.properties ? Boolean(input.properties.checked) : null;
        properties.index = getElementsBeforeCount(parent, node);
        properties.ordered = parent.tagName === "ol";
      }
      if (!basic && (name === "ol" || name === "ul")) {
        properties.ordered = name === "ol";
        properties.depth = context.listDepth;
      }
      if (name === "td" || name === "th") {
        if (properties.align) {
          if (!properties.style)
            properties.style = {};
          properties.style.textAlign = properties.align;
          delete properties.align;
        }
        if (!basic) {
          properties.isHeader = name === "th";
        }
      }
      if (!basic && name === "tr" && parent.type === "element") {
        properties.isHeader = Boolean(parent.tagName === "thead");
      }
      if (options.sourcePos) {
        properties["data-sourcepos"] = flattenPosition(position);
      }
      if (!basic && options.rawSourcePos) {
        properties.sourcePosition = node.position;
      }
      if (!basic && options.includeElementIndex) {
        properties.index = getElementsBeforeCount(parent, node);
        properties.siblingCount = getElementsBeforeCount(parent);
      }
      if (!basic) {
        properties.node = node;
      }
      return children.length > 0 ? React52.createElement(component, properties, children) : React52.createElement(component, properties);
    }
    function getInputElement(node) {
      let index = -1;
      while (++index < node.children.length) {
        const child = node.children[index];
        if (child.type === "element" && child.tagName === "input") {
          return child;
        }
      }
      return null;
    }
    function getElementsBeforeCount(parent, node) {
      let index = -1;
      let count = 0;
      while (++index < parent.children.length) {
        if (parent.children[index] === node)
          break;
        if (parent.children[index].type === "element")
          count++;
      }
      return count;
    }
    function addProperty(props, prop, value, ctx) {
      const info = find(ctx.schema, prop);
      let result = value;
      if (result === null || result === void 0 || result !== result) {
        return;
      }
      if (result && typeof result === "object" && "length" in result) {
        result = (info.commaSeparated ? commas : spaces).stringify(result);
      }
      if (info.property === "style" && typeof result === "string") {
        result = parseStyle(result);
      }
      if (info.space && info.property) {
        props[own.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result;
      } else if (info.attribute) {
        props[info.attribute] = result;
      }
    }
    function parseStyle(value) {
      const result = {};
      try {
        style(value, iterator);
      } catch (_) {
      }
      return result;
      function iterator(name, v) {
        const k = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
        result[k.replace(/-([a-z])/g, styleReplacer)] = v;
      }
    }
    function styleReplacer(_, $1) {
      return $1.toUpperCase();
    }
    function flattenPosition(pos) {
      return [
        pos.start.line,
        ":",
        pos.start.column,
        "-",
        pos.end.line,
        ":",
        pos.end.column
      ].map((d) => String(d)).join("");
    }
  }
});

// node_modules/react-markdown/src/react-markdown.js
var require_react_markdown = __commonJS({
  "node_modules/react-markdown/src/react-markdown.js"(exports, module) {
    "use strict";
    var React52 = require_react();
    var vfile = require_vfile();
    var unified = require_unified();
    var parse = require_remark_parse();
    var remarkRehype = require_remark_rehype();
    var PropTypes2 = require_prop_types();
    var html = require_html3();
    var filter = require_rehype_filter();
    var uriTransformer = require_uri_transformer();
    var childrenToReact = require_ast_to_react().hastChildrenToReact;
    module.exports = ReactMarkdown2;
    var own = {}.hasOwnProperty;
    var changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md";
    var deprecated = {
      renderers: { to: "components", id: "change-renderers-to-components" },
      astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
      allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
      escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
      source: { to: "children", id: "change-source-to-children" },
      allowNode: {
        to: "allowElement",
        id: "replace-allownode-allowedtypes-and-disallowedtypes"
      },
      allowedTypes: {
        to: "allowedElements",
        id: "replace-allownode-allowedtypes-and-disallowedtypes"
      },
      disallowedTypes: {
        to: "disallowedElements",
        id: "replace-allownode-allowedtypes-and-disallowedtypes"
      },
      includeNodeIndex: {
        to: "includeElementIndex",
        id: "change-includenodeindex-to-includeelementindex"
      }
    };
    function ReactMarkdown2(options) {
      for (const key in deprecated) {
        if (own.call(deprecated, key) && own.call(options, key)) {
          const deprecation = deprecated[key];
          console.warn(
            `[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`
          );
          delete deprecated[key];
        }
      }
      const processor = unified().use(parse).use(options.remarkPlugins || options.plugins || []).use(remarkRehype, { allowDangerousHtml: true }).use(options.rehypePlugins || []).use(filter, options);
      let file;
      if (typeof options.children === "string") {
        file = vfile(options.children);
      } else {
        if (options.children !== void 0 && options.children !== null) {
          console.warn(
            `[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`
          );
        }
        file = vfile();
      }
      const hastNode = processor.runSync(processor.parse(file), file);
      if (hastNode.type !== "root") {
        throw new TypeError("Expected a `root` node");
      }
      let result = React52.createElement(
        React52.Fragment,
        {},
        childrenToReact({ options, schema: html, listDepth: 0 }, hastNode)
      );
      if (options.className) {
        result = React52.createElement("div", { className: options.className }, result);
      }
      return result;
    }
    ReactMarkdown2.defaultProps = { transformLinkUri: uriTransformer };
    ReactMarkdown2.propTypes = {
      // Core options:
      children: PropTypes2.string,
      // Layout options:
      className: PropTypes2.string,
      // Filter options:
      allowElement: PropTypes2.func,
      allowedElements: PropTypes2.arrayOf(PropTypes2.string),
      disallowedElements: PropTypes2.arrayOf(PropTypes2.string),
      unwrapDisallowed: PropTypes2.bool,
      // Plugin options:
      // type-coverage:ignore-next-line
      remarkPlugins: PropTypes2.arrayOf(
        PropTypes2.oneOfType([
          PropTypes2.object,
          PropTypes2.func,
          PropTypes2.arrayOf(PropTypes2.oneOfType([PropTypes2.object, PropTypes2.func]))
        ])
      ),
      // type-coverage:ignore-next-line
      rehypePlugins: PropTypes2.arrayOf(
        PropTypes2.oneOfType([
          PropTypes2.object,
          PropTypes2.func,
          PropTypes2.arrayOf(PropTypes2.oneOfType([PropTypes2.object, PropTypes2.func]))
        ])
      ),
      // Transform options:
      sourcePos: PropTypes2.bool,
      rawSourcePos: PropTypes2.bool,
      skipHtml: PropTypes2.bool,
      includeElementIndex: PropTypes2.bool,
      transformLinkUri: PropTypes2.oneOfType([PropTypes2.func, PropTypes2.bool]),
      linkTarget: PropTypes2.oneOfType([PropTypes2.func, PropTypes2.string]),
      transformImageUri: PropTypes2.func,
      components: PropTypes2.object
    };
    ReactMarkdown2.uriTransformer = uriTransformer;
  }
});

// node_modules/micromark-extension-gfm-autolink-literal/syntax.js
var require_syntax = __commonJS({
  "node_modules/micromark-extension-gfm-autolink-literal/syntax.js"(exports) {
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiControl = require_ascii_control();
    var markdownLineEnding = require_markdown_line_ending();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    var www = { tokenize: tokenizeWww, partial: true };
    var domain = { tokenize: tokenizeDomain, partial: true };
    var path = { tokenize: tokenizePath, partial: true };
    var punctuation = { tokenize: tokenizePunctuation, partial: true };
    var namedCharacterReference = {
      tokenize: tokenizeNamedCharacterReference,
      partial: true
    };
    var wwwAutolink = { tokenize: tokenizeWwwAutolink, previous: previousWww };
    var httpAutolink = { tokenize: tokenizeHttpAutolink, previous: previousHttp };
    var emailAutolink = { tokenize: tokenizeEmailAutolink, previous: previousEmail };
    var text = {};
    exports.text = text;
    var code = 48;
    while (code < 123) {
      text[code] = emailAutolink;
      code++;
      if (code === 58)
        code = 65;
      else if (code === 91)
        code = 97;
    }
    text[43] = emailAutolink;
    text[45] = emailAutolink;
    text[46] = emailAutolink;
    text[95] = emailAutolink;
    text[72] = [emailAutolink, httpAutolink];
    text[104] = [emailAutolink, httpAutolink];
    text[87] = [emailAutolink, wwwAutolink];
    text[119] = [emailAutolink, wwwAutolink];
    function tokenizeEmailAutolink(effects, ok, nok) {
      var self2 = this;
      var hasDot;
      return start;
      function start(code2) {
        if (!gfmAtext(code2) || !previousEmail(self2.previous) || previous(self2.events)) {
          return nok(code2);
        }
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkEmail");
        return atext(code2);
      }
      function atext(code2) {
        if (gfmAtext(code2)) {
          effects.consume(code2);
          return atext;
        }
        if (code2 === 64) {
          effects.consume(code2);
          return label;
        }
        return nok(code2);
      }
      function label(code2) {
        if (code2 === 46) {
          return effects.check(punctuation, done, dotContinuation)(code2);
        }
        if (
          // `-`
          code2 === 45 || // `_`
          code2 === 95
        ) {
          return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code2);
        }
        if (asciiAlphanumeric(code2)) {
          effects.consume(code2);
          return label;
        }
        return done(code2);
      }
      function dotContinuation(code2) {
        effects.consume(code2);
        hasDot = true;
        return label;
      }
      function dashOrUnderscoreContinuation(code2) {
        effects.consume(code2);
        return afterDashOrUnderscore;
      }
      function afterDashOrUnderscore(code2) {
        if (code2 === 46) {
          return effects.check(punctuation, nok, dotContinuation)(code2);
        }
        return label(code2);
      }
      function done(code2) {
        if (hasDot) {
          effects.exit("literalAutolinkEmail");
          effects.exit("literalAutolink");
          return ok(code2);
        }
        return nok(code2);
      }
    }
    function tokenizeWwwAutolink(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code2) {
        if (code2 !== 87 && code2 - 32 !== 87 || !previousWww(self2.previous) || previous(self2.events)) {
          return nok(code2);
        }
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkWww");
        return effects.check(
          www,
          effects.attempt(domain, effects.attempt(path, done), nok),
          nok
        )(code2);
      }
      function done(code2) {
        effects.exit("literalAutolinkWww");
        effects.exit("literalAutolink");
        return ok(code2);
      }
    }
    function tokenizeHttpAutolink(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code2) {
        if (code2 !== 72 && code2 - 32 !== 72 || !previousHttp(self2.previous) || previous(self2.events)) {
          return nok(code2);
        }
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkHttp");
        effects.consume(code2);
        return t1;
      }
      function t1(code2) {
        if (code2 === 84 || code2 - 32 === 84) {
          effects.consume(code2);
          return t2;
        }
        return nok(code2);
      }
      function t2(code2) {
        if (code2 === 84 || code2 - 32 === 84) {
          effects.consume(code2);
          return p;
        }
        return nok(code2);
      }
      function p(code2) {
        if (code2 === 80 || code2 - 32 === 80) {
          effects.consume(code2);
          return s;
        }
        return nok(code2);
      }
      function s(code2) {
        if (code2 === 83 || code2 - 32 === 83) {
          effects.consume(code2);
          return colon;
        }
        return colon(code2);
      }
      function colon(code2) {
        if (code2 === 58) {
          effects.consume(code2);
          return slash1;
        }
        return nok(code2);
      }
      function slash1(code2) {
        if (code2 === 47) {
          effects.consume(code2);
          return slash2;
        }
        return nok(code2);
      }
      function slash2(code2) {
        if (code2 === 47) {
          effects.consume(code2);
          return after;
        }
        return nok(code2);
      }
      function after(code2) {
        return asciiControl(code2) || unicodeWhitespace(code2) || unicodePunctuation(code2) ? nok(code2) : effects.attempt(domain, effects.attempt(path, done), nok)(code2);
      }
      function done(code2) {
        effects.exit("literalAutolinkHttp");
        effects.exit("literalAutolink");
        return ok(code2);
      }
    }
    function tokenizeWww(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.consume(code2);
        return w2;
      }
      function w2(code2) {
        if (code2 === 87 || code2 - 32 === 87) {
          effects.consume(code2);
          return w3;
        }
        return nok(code2);
      }
      function w3(code2) {
        if (code2 === 87 || code2 - 32 === 87) {
          effects.consume(code2);
          return dot;
        }
        return nok(code2);
      }
      function dot(code2) {
        if (code2 === 46) {
          effects.consume(code2);
          return after;
        }
        return nok(code2);
      }
      function after(code2) {
        return code2 === null || markdownLineEnding(code2) ? nok(code2) : ok(code2);
      }
    }
    function tokenizeDomain(effects, ok, nok) {
      var hasUnderscoreInLastSegment;
      var hasUnderscoreInLastLastSegment;
      return domain2;
      function domain2(code2) {
        if (code2 === 38) {
          return effects.check(
            namedCharacterReference,
            done,
            punctuationContinuation
          )(code2);
        }
        if (code2 === 46 || code2 === 95) {
          return effects.check(punctuation, done, punctuationContinuation)(code2);
        }
        if (asciiControl(code2) || unicodeWhitespace(code2) || code2 !== 45 && unicodePunctuation(code2)) {
          return done(code2);
        }
        effects.consume(code2);
        return domain2;
      }
      function punctuationContinuation(code2) {
        if (code2 === 46) {
          hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
          hasUnderscoreInLastSegment = void 0;
          effects.consume(code2);
          return domain2;
        }
        if (code2 === 95)
          hasUnderscoreInLastSegment = true;
        effects.consume(code2);
        return domain2;
      }
      function done(code2) {
        if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
          return ok(code2);
        }
        return nok(code2);
      }
    }
    function tokenizePath(effects, ok) {
      var balance = 0;
      return inPath;
      function inPath(code2) {
        if (code2 === 38) {
          return effects.check(
            namedCharacterReference,
            ok,
            continuedPunctuation
          )(code2);
        }
        if (code2 === 40) {
          balance++;
        }
        if (code2 === 41) {
          return effects.check(
            punctuation,
            parenAtPathEnd,
            continuedPunctuation
          )(code2);
        }
        if (pathEnd(code2)) {
          return ok(code2);
        }
        if (trailingPunctuation(code2)) {
          return effects.check(punctuation, ok, continuedPunctuation)(code2);
        }
        effects.consume(code2);
        return inPath;
      }
      function continuedPunctuation(code2) {
        effects.consume(code2);
        return inPath;
      }
      function parenAtPathEnd(code2) {
        balance--;
        return balance < 0 ? ok(code2) : continuedPunctuation(code2);
      }
    }
    function tokenizeNamedCharacterReference(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.consume(code2);
        return inside;
      }
      function inside(code2) {
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          return inside;
        }
        if (code2 === 59) {
          effects.consume(code2);
          return after;
        }
        return nok(code2);
      }
      function after(code2) {
        return pathEnd(code2) ? ok(code2) : nok(code2);
      }
    }
    function tokenizePunctuation(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.consume(code2);
        return after;
      }
      function after(code2) {
        if (trailingPunctuation(code2)) {
          effects.consume(code2);
          return after;
        }
        return pathEnd(code2) ? ok(code2) : nok(code2);
      }
    }
    function trailingPunctuation(code2) {
      return (
        // `!`
        code2 === 33 || // `"`
        code2 === 34 || // `'`
        code2 === 39 || // `)`
        code2 === 41 || // `*`
        code2 === 42 || // `,`
        code2 === 44 || // `.`
        code2 === 46 || // `:`
        code2 === 58 || // `;`
        code2 === 59 || // `<`
        code2 === 60 || // `?`
        code2 === 63 || // `_`.
        code2 === 95 || // `~`
        code2 === 126
      );
    }
    function pathEnd(code2) {
      return (
        // EOF.
        code2 === null || // CR, LF, CRLF, HT, VS.
        code2 < 0 || // Space.
        code2 === 32 || // `<`
        code2 === 60
      );
    }
    function gfmAtext(code2) {
      return code2 === 43 || code2 === 45 || code2 === 46 || code2 === 95 || asciiAlphanumeric(code2);
    }
    function previousWww(code2) {
      return code2 === null || code2 < 0 || code2 === 32 || code2 === 40 || code2 === 42 || code2 === 95 || code2 === 126;
    }
    function previousHttp(code2) {
      return code2 === null || !asciiAlpha(code2);
    }
    function previousEmail(code2) {
      return code2 !== 47 && previousHttp(code2);
    }
    function previous(events) {
      var index = events.length;
      while (index--) {
        if ((events[index][1].type === "labelLink" || events[index][1].type === "labelImage") && !events[index][1]._balanced) {
          return true;
        }
      }
    }
  }
});

// node_modules/micromark-extension-gfm-autolink-literal/index.js
var require_micromark_extension_gfm_autolink_literal = __commonJS({
  "node_modules/micromark-extension-gfm-autolink-literal/index.js"(exports, module) {
    module.exports = require_syntax();
  }
});

// node_modules/micromark-extension-gfm-strikethrough/index.js
var require_micromark_extension_gfm_strikethrough = __commonJS({
  "node_modules/micromark-extension-gfm-strikethrough/index.js"(exports, module) {
    module.exports = create;
    var classifyCharacter = require_classify_character();
    var chunkedSplice = require_chunked_splice();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    function create(options) {
      var settings = options || {};
      var single = settings.singleTilde;
      var tokenizer = {
        tokenize: tokenizeStrikethrough,
        resolveAll: resolveAllStrikethrough
      };
      if (single === null || single === void 0) {
        single = true;
      }
      return { text: { 126: tokenizer }, insideSpan: { null: tokenizer } };
      function resolveAllStrikethrough(events, context) {
        var index = -1;
        var strikethrough;
        var text;
        var open;
        var nextEvents;
        while (++index < events.length) {
          if (events[index][0] === "enter" && events[index][1].type === "strikethroughSequenceTemporary" && events[index][1]._close) {
            open = index;
            while (open--) {
              if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
              events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
                events[index][1].type = "strikethroughSequence";
                events[open][1].type = "strikethroughSequence";
                strikethrough = {
                  type: "strikethrough",
                  start: shallow(events[open][1].start),
                  end: shallow(events[index][1].end)
                };
                text = {
                  type: "strikethroughText",
                  start: shallow(events[open][1].end),
                  end: shallow(events[index][1].start)
                };
                nextEvents = [
                  ["enter", strikethrough, context],
                  ["enter", events[open][1], context],
                  ["exit", events[open][1], context],
                  ["enter", text, context]
                ];
                chunkedSplice(
                  nextEvents,
                  nextEvents.length,
                  0,
                  resolveAll(
                    context.parser.constructs.insideSpan.null,
                    events.slice(open + 1, index),
                    context
                  )
                );
                chunkedSplice(nextEvents, nextEvents.length, 0, [
                  ["exit", text, context],
                  ["enter", events[index][1], context],
                  ["exit", events[index][1], context],
                  ["exit", strikethrough, context]
                ]);
                chunkedSplice(events, open - 1, index - open + 3, nextEvents);
                index = open + nextEvents.length - 2;
                break;
              }
            }
          }
        }
        return removeRemainingSequences(events);
      }
      function removeRemainingSequences(events) {
        var index = -1;
        var length = events.length;
        while (++index < length) {
          if (events[index][1].type === "strikethroughSequenceTemporary") {
            events[index][1].type = "data";
          }
        }
        return events;
      }
      function tokenizeStrikethrough(effects, ok, nok) {
        var previous = this.previous;
        var events = this.events;
        var size = 0;
        return start;
        function start(code) {
          if (code !== 126 || previous === 126 && events[events.length - 1][1].type !== "characterEscape") {
            return nok(code);
          }
          effects.enter("strikethroughSequenceTemporary");
          return more(code);
        }
        function more(code) {
          var before = classifyCharacter(previous);
          var token;
          var after;
          if (code === 126) {
            if (size > 1)
              return nok(code);
            effects.consume(code);
            size++;
            return more;
          }
          if (size < 2 && !single)
            return nok(code);
          token = effects.exit("strikethroughSequenceTemporary");
          after = classifyCharacter(code);
          token._open = !after || after === 2 && before;
          token._close = !before || before === 2 && after;
          return ok(code);
        }
      }
    }
  }
});

// node_modules/micromark-extension-gfm-table/syntax.js
var require_syntax2 = __commonJS({
  "node_modules/micromark-extension-gfm-table/syntax.js"(exports) {
    exports.flow = {
      null: { tokenize: tokenizeTable, resolve: resolveTable, interruptible: true }
    };
    var createSpace = require_factory_space();
    var setextUnderlineMini = { tokenize: tokenizeSetextUnderlineMini, partial: true };
    var nextPrefixedOrBlank = { tokenize: tokenizeNextPrefixedOrBlank, partial: true };
    function resolveTable(events, context) {
      var length = events.length;
      var index = -1;
      var token;
      var inHead;
      var inDelimiterRow;
      var inRow;
      var cell;
      var content;
      var text;
      var contentStart;
      var contentEnd;
      var cellStart;
      while (++index < length) {
        token = events[index][1];
        if (inRow) {
          if (token.type === "temporaryTableCellContent") {
            contentStart = contentStart || index;
            contentEnd = index;
          }
          if (
            // Combine separate content parts into one.
            (token.type === "tableCellDivider" || token.type === "tableRow") && contentEnd
          ) {
            content = {
              type: "tableContent",
              start: events[contentStart][1].start,
              end: events[contentEnd][1].end
            };
            text = {
              type: "chunkText",
              start: content.start,
              end: content.end,
              contentType: "text"
            };
            events.splice(
              contentStart,
              contentEnd - contentStart + 1,
              ["enter", content, context],
              ["enter", text, context],
              ["exit", text, context],
              ["exit", content, context]
            );
            index -= contentEnd - contentStart - 3;
            length = events.length;
            contentStart = void 0;
            contentEnd = void 0;
          }
        }
        if (events[index][0] === "exit" && cellStart && cellStart + 1 < index && (token.type === "tableCellDivider" || token.type === "tableRow" && (cellStart + 3 < index || events[cellStart][1].type !== "whitespace"))) {
          cell = {
            type: inDelimiterRow ? "tableDelimiter" : inHead ? "tableHeader" : "tableData",
            start: events[cellStart][1].start,
            end: events[index][1].end
          };
          events.splice(index + (token.type === "tableCellDivider" ? 1 : 0), 0, [
            "exit",
            cell,
            context
          ]);
          events.splice(cellStart, 0, ["enter", cell, context]);
          index += 2;
          length = events.length;
          cellStart = index + 1;
        }
        if (token.type === "tableRow") {
          inRow = events[index][0] === "enter";
          if (inRow) {
            cellStart = index + 1;
          }
        }
        if (token.type === "tableDelimiterRow") {
          inDelimiterRow = events[index][0] === "enter";
          if (inDelimiterRow) {
            cellStart = index + 1;
          }
        }
        if (token.type === "tableHead") {
          inHead = events[index][0] === "enter";
        }
      }
      return events;
    }
    function tokenizeTable(effects, ok, nok) {
      var align = [];
      var tableHeaderCount = 0;
      var seenDelimiter;
      var hasDash;
      return start;
      function start(code) {
        if (code === null || code === -5 || code === -4 || code === -3) {
          return nok(code);
        }
        effects.enter("table")._align = align;
        effects.enter("tableHead");
        effects.enter("tableRow");
        if (code === 124) {
          return cellDividerHead(code);
        }
        tableHeaderCount++;
        effects.enter("temporaryTableCellContent");
        return inCellContentHead(code);
      }
      function cellDividerHead(code) {
        effects.enter("tableCellDivider");
        effects.consume(code);
        effects.exit("tableCellDivider");
        seenDelimiter = true;
        return cellBreakHead;
      }
      function cellBreakHead(code) {
        if (code === null || code === -5 || code === -4 || code === -3) {
          return atRowEndHead(code);
        }
        if (code === -2 || code === -1 || code === 32) {
          effects.enter("whitespace");
          effects.consume(code);
          return inWhitespaceHead;
        }
        if (seenDelimiter) {
          seenDelimiter = void 0;
          tableHeaderCount++;
        }
        if (code === 124) {
          return cellDividerHead(code);
        }
        effects.enter("temporaryTableCellContent");
        return inCellContentHead(code);
      }
      function inWhitespaceHead(code) {
        if (code === -2 || code === -1 || code === 32) {
          effects.consume(code);
          return inWhitespaceHead;
        }
        effects.exit("whitespace");
        return cellBreakHead(code);
      }
      function inCellContentHead(code) {
        if (code === null || code < 0 || code === 32 || code === 124) {
          effects.exit("temporaryTableCellContent");
          return cellBreakHead(code);
        }
        effects.consume(code);
        return code === 92 ? inCellContentEscapeHead : inCellContentHead;
      }
      function inCellContentEscapeHead(code) {
        if (code === 92 || code === 124) {
          effects.consume(code);
          return inCellContentHead;
        }
        return inCellContentHead(code);
      }
      function atRowEndHead(code) {
        if (code === null) {
          return nok(code);
        }
        effects.exit("tableRow");
        effects.exit("tableHead");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return effects.check(
          setextUnderlineMini,
          nok,
          // Support an indent before the delimiter row.
          createSpace(effects, rowStartDelimiter, "linePrefix", 4)
        );
      }
      function rowStartDelimiter(code) {
        if (code === null || code < 0 || code === 32) {
          return nok(code);
        }
        effects.enter("tableDelimiterRow");
        return atDelimiterRowBreak(code);
      }
      function atDelimiterRowBreak(code) {
        if (code === null || code === -5 || code === -4 || code === -3) {
          return rowEndDelimiter(code);
        }
        if (code === -2 || code === -1 || code === 32) {
          effects.enter("whitespace");
          effects.consume(code);
          return inWhitespaceDelimiter;
        }
        if (code === 45) {
          effects.enter("tableDelimiterFiller");
          effects.consume(code);
          hasDash = true;
          align.push(null);
          return inFillerDelimiter;
        }
        if (code === 58) {
          effects.enter("tableDelimiterAlignment");
          effects.consume(code);
          effects.exit("tableDelimiterAlignment");
          align.push("left");
          return afterLeftAlignment;
        }
        if (code === 124) {
          effects.enter("tableCellDivider");
          effects.consume(code);
          effects.exit("tableCellDivider");
          return atDelimiterRowBreak;
        }
        return nok(code);
      }
      function inWhitespaceDelimiter(code) {
        if (code === -2 || code === -1 || code === 32) {
          effects.consume(code);
          return inWhitespaceDelimiter;
        }
        effects.exit("whitespace");
        return atDelimiterRowBreak(code);
      }
      function inFillerDelimiter(code) {
        if (code === 45) {
          effects.consume(code);
          return inFillerDelimiter;
        }
        effects.exit("tableDelimiterFiller");
        if (code === 58) {
          effects.enter("tableDelimiterAlignment");
          effects.consume(code);
          effects.exit("tableDelimiterAlignment");
          align[align.length - 1] = align[align.length - 1] === "left" ? "center" : "right";
          return afterRightAlignment;
        }
        return atDelimiterRowBreak(code);
      }
      function afterLeftAlignment(code) {
        if (code === 45) {
          effects.enter("tableDelimiterFiller");
          effects.consume(code);
          hasDash = true;
          return inFillerDelimiter;
        }
        return nok(code);
      }
      function afterRightAlignment(code) {
        if (code === null || code === -5 || code === -4 || code === -3) {
          return rowEndDelimiter(code);
        }
        if (code === -2 || code === -1 || code === 32) {
          effects.enter("whitespace");
          effects.consume(code);
          return inWhitespaceDelimiter;
        }
        if (code === 124) {
          effects.enter("tableCellDivider");
          effects.consume(code);
          effects.exit("tableCellDivider");
          return atDelimiterRowBreak;
        }
        return nok(code);
      }
      function rowEndDelimiter(code) {
        effects.exit("tableDelimiterRow");
        if (!hasDash || tableHeaderCount !== align.length) {
          return nok(code);
        }
        if (code === null) {
          return tableClose(code);
        }
        return effects.check(nextPrefixedOrBlank, tableClose, tableContinue)(code);
      }
      function tableClose(code) {
        effects.exit("table");
        return ok(code);
      }
      function tableContinue(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return createSpace(effects, bodyStart, "linePrefix", 4);
      }
      function bodyStart(code) {
        effects.enter("tableBody");
        return rowStartBody(code);
      }
      function rowStartBody(code) {
        effects.enter("tableRow");
        if (code === 124) {
          return cellDividerBody(code);
        }
        effects.enter("temporaryTableCellContent");
        return inCellContentBody(code);
      }
      function cellDividerBody(code) {
        effects.enter("tableCellDivider");
        effects.consume(code);
        effects.exit("tableCellDivider");
        return cellBreakBody;
      }
      function cellBreakBody(code) {
        if (code === null || code === -5 || code === -4 || code === -3) {
          return atRowEndBody(code);
        }
        if (code === -2 || code === -1 || code === 32) {
          effects.enter("whitespace");
          effects.consume(code);
          return inWhitespaceBody;
        }
        if (code === 124) {
          return cellDividerBody(code);
        }
        effects.enter("temporaryTableCellContent");
        return inCellContentBody(code);
      }
      function inWhitespaceBody(code) {
        if (code === -2 || code === -1 || code === 32) {
          effects.consume(code);
          return inWhitespaceBody;
        }
        effects.exit("whitespace");
        return cellBreakBody(code);
      }
      function inCellContentBody(code) {
        if (code === null || code < 0 || code === 32 || code === 124) {
          effects.exit("temporaryTableCellContent");
          return cellBreakBody(code);
        }
        effects.consume(code);
        return code === 92 ? inCellContentEscapeBody : inCellContentBody;
      }
      function inCellContentEscapeBody(code) {
        if (code === 92 || code === 124) {
          effects.consume(code);
          return inCellContentBody;
        }
        return inCellContentBody(code);
      }
      function atRowEndBody(code) {
        effects.exit("tableRow");
        if (code === null) {
          return tableBodyClose(code);
        }
        return effects.check(
          nextPrefixedOrBlank,
          tableBodyClose,
          tableBodyContinue
        )(code);
      }
      function tableBodyClose(code) {
        effects.exit("tableBody");
        return tableClose(code);
      }
      function tableBodyContinue(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return createSpace(effects, rowStartBody, "linePrefix", 4);
      }
    }
    function tokenizeSetextUnderlineMini(effects, ok, nok) {
      return start;
      function start(code) {
        if (code !== 45) {
          return nok(code);
        }
        effects.enter("setextUnderline");
        return sequence(code);
      }
      function sequence(code) {
        if (code === 45) {
          effects.consume(code);
          return sequence;
        }
        return whitespace(code);
      }
      function whitespace(code) {
        if (code === -2 || code === -1 || code === 32) {
          effects.consume(code);
          return whitespace;
        }
        if (code === null || code === -5 || code === -4 || code === -3) {
          return ok(code);
        }
        return nok(code);
      }
    }
    function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
      var size = 0;
      return start;
      function start(code) {
        effects.enter("check");
        effects.consume(code);
        return whitespace;
      }
      function whitespace(code) {
        if (code === -1 || code === 32) {
          effects.consume(code);
          size++;
          return size === 4 ? ok : whitespace;
        }
        if (code === null || code < 0) {
          return ok(code);
        }
        return nok(code);
      }
    }
  }
});

// node_modules/micromark-extension-gfm-table/index.js
var require_micromark_extension_gfm_table = __commonJS({
  "node_modules/micromark-extension-gfm-table/index.js"(exports, module) {
    module.exports = require_syntax2();
  }
});

// node_modules/micromark-extension-gfm-task-list-item/syntax.js
var require_syntax3 = __commonJS({
  "node_modules/micromark-extension-gfm-task-list-item/syntax.js"(exports) {
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var spaceFactory = require_factory_space();
    var prefixSize = require_prefix_size();
    var tasklistCheck = { tokenize: tokenizeTasklistCheck };
    exports.text = { 91: tasklistCheck };
    function tokenizeTasklistCheck(effects, ok, nok) {
      var self2 = this;
      return open;
      function open(code) {
        if (
          // Exit if not `[`.
          code !== 91 || // Exit if there’s stuff before.
          self2.previous !== null || // Exit if not in the first content that is the first child of a list
          // item.
          !self2._gfmTasklistFirstContentOfListItem
        ) {
          return nok(code);
        }
        effects.enter("taskListCheck");
        effects.enter("taskListCheckMarker");
        effects.consume(code);
        effects.exit("taskListCheckMarker");
        return inside;
      }
      function inside(code) {
        if (code === -2 || code === 32) {
          effects.enter("taskListCheckValueUnchecked");
          effects.consume(code);
          effects.exit("taskListCheckValueUnchecked");
          return close;
        }
        if (code === 88 || code === 120) {
          effects.enter("taskListCheckValueChecked");
          effects.consume(code);
          effects.exit("taskListCheckValueChecked");
          return close;
        }
        return nok(code);
      }
      function close(code) {
        if (code === 93) {
          effects.enter("taskListCheckMarker");
          effects.consume(code);
          effects.exit("taskListCheckMarker");
          effects.exit("taskListCheck");
          return effects.check({ tokenize: spaceThenNonSpace }, ok, nok);
        }
        return nok(code);
      }
    }
    function spaceThenNonSpace(effects, ok, nok) {
      var self2 = this;
      return spaceFactory(effects, after, "whitespace");
      function after(code) {
        return prefixSize(self2.events, "whitespace") && code !== null && !markdownLineEndingOrSpace(code) ? ok(code) : nok(code);
      }
    }
  }
});

// node_modules/micromark-extension-gfm-task-list-item/index.js
var require_micromark_extension_gfm_task_list_item = __commonJS({
  "node_modules/micromark-extension-gfm-task-list-item/index.js"(exports, module) {
    module.exports = require_syntax3();
  }
});

// node_modules/micromark-extension-gfm/syntax.js
var require_syntax4 = __commonJS({
  "node_modules/micromark-extension-gfm/syntax.js"(exports, module) {
    var combine = require_combine_extensions();
    var autolink = require_micromark_extension_gfm_autolink_literal();
    var strikethrough = require_micromark_extension_gfm_strikethrough();
    var table = require_micromark_extension_gfm_table();
    var tasklist = require_micromark_extension_gfm_task_list_item();
    module.exports = create;
    function create(options) {
      return combine([autolink, strikethrough(options), table, tasklist]);
    }
  }
});

// node_modules/micromark-extension-gfm/index.js
var require_micromark_extension_gfm = __commonJS({
  "node_modules/micromark-extension-gfm/index.js"(exports, module) {
    module.exports = require_syntax4();
  }
});

// node_modules/ccount/index.js
var require_ccount = __commonJS({
  "node_modules/ccount/index.js"(exports, module) {
    "use strict";
    module.exports = ccount;
    function ccount(source, character) {
      var value = String(source);
      var count = 0;
      var index;
      if (typeof character !== "string") {
        throw new Error("Expected character");
      }
      index = value.indexOf(character);
      while (index !== -1) {
        count++;
        index = value.indexOf(character, index + character.length);
      }
      return count;
    }
  }
});

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/escape-string-regexp/index.js"(exports, module) {
    "use strict";
    module.exports = (string) => {
      if (typeof string !== "string") {
        throw new TypeError("Expected a string");
      }
      return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    };
  }
});

// node_modules/mdast-util-find-and-replace/index.js
var require_mdast_util_find_and_replace = __commonJS({
  "node_modules/mdast-util-find-and-replace/index.js"(exports, module) {
    "use strict";
    module.exports = findAndReplace;
    var visit = require_unist_util_visit_parents();
    var convert = require_convert();
    var escape = require_escape_string_regexp();
    var splice = [].splice;
    function findAndReplace(tree, find, replace, options) {
      var settings;
      var schema;
      if (typeof find === "string" || find && typeof find.exec === "function") {
        schema = [[find, replace]];
      } else {
        schema = find;
        options = replace;
      }
      settings = options || {};
      search(tree, settings, handlerFactory(toPairs(schema)));
      return tree;
      function handlerFactory(pairs) {
        var pair = pairs[0];
        return handler;
        function handler(node, parent) {
          var find2 = pair[0];
          var replace2 = pair[1];
          var nodes = [];
          var start = 0;
          var index = parent.children.indexOf(node);
          var position;
          var match;
          var subhandler;
          var value;
          find2.lastIndex = 0;
          match = find2.exec(node.value);
          while (match) {
            position = match.index;
            value = replace2.apply(
              null,
              [].concat(match, { index: match.index, input: match.input })
            );
            if (value !== false) {
              if (start !== position) {
                nodes.push({ type: "text", value: node.value.slice(start, position) });
              }
              if (typeof value === "string" && value.length > 0) {
                value = { type: "text", value };
              }
              if (value) {
                nodes = [].concat(nodes, value);
              }
              start = position + match[0].length;
            }
            if (!find2.global) {
              break;
            }
            match = find2.exec(node.value);
          }
          if (position === void 0) {
            nodes = [node];
            index--;
          } else {
            if (start < node.value.length) {
              nodes.push({ type: "text", value: node.value.slice(start) });
            }
            nodes.unshift(index, 1);
            splice.apply(parent.children, nodes);
          }
          if (pairs.length > 1) {
            subhandler = handlerFactory(pairs.slice(1));
            position = -1;
            while (++position < nodes.length) {
              node = nodes[position];
              if (node.type === "text") {
                subhandler(node, parent);
              } else {
                search(node, settings, subhandler);
              }
            }
          }
          return index + nodes.length + 1;
        }
      }
    }
    function search(tree, settings, handler) {
      var ignored = convert(settings.ignore || []);
      var result = [];
      visit(tree, "text", visitor);
      return result;
      function visitor(node, parents) {
        var index = -1;
        var parent;
        var grandparent;
        while (++index < parents.length) {
          parent = parents[index];
          if (ignored(
            parent,
            grandparent ? grandparent.children.indexOf(parent) : void 0,
            grandparent
          )) {
            return;
          }
          grandparent = parent;
        }
        return handler(node, grandparent);
      }
    }
    function toPairs(schema) {
      var result = [];
      var key;
      var index;
      if (typeof schema !== "object") {
        throw new Error("Expected array or object as schema");
      }
      if ("length" in schema) {
        index = -1;
        while (++index < schema.length) {
          result.push([
            toExpression(schema[index][0]),
            toFunction(schema[index][1])
          ]);
        }
      } else {
        for (key in schema) {
          result.push([toExpression(key), toFunction(schema[key])]);
        }
      }
      return result;
    }
    function toExpression(find) {
      return typeof find === "string" ? new RegExp(escape(find), "g") : find;
    }
    function toFunction(replace) {
      return typeof replace === "function" ? replace : returner;
      function returner() {
        return replace;
      }
    }
  }
});

// node_modules/mdast-util-gfm-autolink-literal/from-markdown.js
var require_from_markdown = __commonJS({
  "node_modules/mdast-util-gfm-autolink-literal/from-markdown.js"(exports) {
    var ccount = require_ccount();
    var findAndReplace = require_mdast_util_find_and_replace();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    exports.transforms = [transformGfmAutolinkLiterals];
    exports.enter = {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue
    };
    exports.exit = {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww
    };
    function enterLiteralAutolink(token) {
      this.enter({ type: "link", title: null, url: "", children: [] }, token);
    }
    function enterLiteralAutolinkValue(token) {
      this.config.enter.autolinkProtocol.call(this, token);
    }
    function exitLiteralAutolinkHttp(token) {
      this.config.exit.autolinkProtocol.call(this, token);
    }
    function exitLiteralAutolinkWww(token) {
      this.config.exit.data.call(this, token);
      this.stack[this.stack.length - 1].url = "http://" + this.sliceSerialize(token);
    }
    function exitLiteralAutolinkEmail(token) {
      this.config.exit.autolinkEmail.call(this, token);
    }
    function exitLiteralAutolink(token) {
      this.exit(token);
    }
    function transformGfmAutolinkLiterals(tree) {
      findAndReplace(
        tree,
        [
          [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, findUrl],
          [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, findEmail]
        ],
        { ignore: ["link", "linkReference"] }
      );
    }
    function findUrl($0, protocol, domain, path, match) {
      var prefix = "";
      var parts;
      var result;
      if (!previous(match)) {
        return false;
      }
      if (/^w/i.test(protocol)) {
        domain = protocol + domain;
        protocol = "";
        prefix = "http://";
      }
      if (!isCorrectDomain(domain)) {
        return false;
      }
      parts = splitUrl(domain + path);
      if (!parts[0])
        return false;
      result = {
        type: "link",
        title: null,
        url: prefix + protocol + parts[0],
        children: [{ type: "text", value: protocol + parts[0] }]
      };
      if (parts[1]) {
        result = [result, { type: "text", value: parts[1] }];
      }
      return result;
    }
    function findEmail($0, atext, label, match) {
      if (!previous(match, true) || /[_-]$/.test(label)) {
        return false;
      }
      return {
        type: "link",
        title: null,
        url: "mailto:" + atext + "@" + label,
        children: [{ type: "text", value: atext + "@" + label }]
      };
    }
    function isCorrectDomain(domain) {
      var parts = domain.split(".");
      if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
        return false;
      }
      return true;
    }
    function splitUrl(url) {
      var trail = /[!"&'),.:;<>?\]}]+$/.exec(url);
      var closingParenIndex;
      var openingParens;
      var closingParens;
      if (trail) {
        url = url.slice(0, trail.index);
        trail = trail[0];
        closingParenIndex = trail.indexOf(")");
        openingParens = ccount(url, "(");
        closingParens = ccount(url, ")");
        while (closingParenIndex !== -1 && openingParens > closingParens) {
          url += trail.slice(0, closingParenIndex + 1);
          trail = trail.slice(closingParenIndex + 1);
          closingParenIndex = trail.indexOf(")");
          closingParens++;
        }
      }
      return [url, trail];
    }
    function previous(match, email) {
      var code = match.input.charCodeAt(match.index - 1);
      return (code !== code || unicodeWhitespace(code) || unicodePunctuation(code)) && (!email || code !== 47);
    }
  }
});

// node_modules/mdast-util-gfm-strikethrough/from-markdown.js
var require_from_markdown2 = __commonJS({
  "node_modules/mdast-util-gfm-strikethrough/from-markdown.js"(exports) {
    exports.canContainEols = ["delete"];
    exports.enter = { strikethrough: enterStrikethrough };
    exports.exit = { strikethrough: exitStrikethrough };
    function enterStrikethrough(token) {
      this.enter({ type: "delete", children: [] }, token);
    }
    function exitStrikethrough(token) {
      this.exit(token);
    }
  }
});

// node_modules/mdast-util-gfm-table/from-markdown.js
var require_from_markdown3 = __commonJS({
  "node_modules/mdast-util-gfm-table/from-markdown.js"(exports) {
    exports.enter = {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow
    };
    exports.exit = {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit,
      tableHeader: exit,
      tableRow: exit
    };
    function enterTable(token) {
      this.enter({ type: "table", align: token._align, children: [] }, token);
      this.setData("inTable", true);
    }
    function exitTable(token) {
      this.exit(token);
      this.setData("inTable");
    }
    function enterRow(token) {
      this.enter({ type: "tableRow", children: [] }, token);
    }
    function exit(token) {
      this.exit(token);
    }
    function enterCell(token) {
      this.enter({ type: "tableCell", children: [] }, token);
    }
    function exitCodeText(token) {
      var value = this.resume();
      if (this.getData("inTable")) {
        value = value.replace(/\\([\\|])/g, replace);
      }
      this.stack[this.stack.length - 1].value = value;
      this.exit(token);
    }
    function replace($0, $1) {
      return $1 === "|" ? $1 : $0;
    }
  }
});

// node_modules/mdast-util-gfm-task-list-item/from-markdown.js
var require_from_markdown4 = __commonJS({
  "node_modules/mdast-util-gfm-task-list-item/from-markdown.js"(exports) {
    exports.exit = {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem
    };
    function exitCheck(token) {
      this.stack[this.stack.length - 2].checked = token.type === "taskListCheckValueChecked";
    }
    function exitParagraphWithTaskListItem(token) {
      var parent = this.stack[this.stack.length - 2];
      var node = this.stack[this.stack.length - 1];
      var siblings = parent.children;
      var head = node.children[0];
      var index = -1;
      var firstParaghraph;
      if (parent && parent.type === "listItem" && typeof parent.checked === "boolean" && head && head.type === "text") {
        while (++index < siblings.length) {
          if (siblings[index].type === "paragraph") {
            firstParaghraph = siblings[index];
            break;
          }
        }
        if (firstParaghraph === node) {
          head.value = head.value.slice(1);
          if (head.value.length === 0) {
            node.children.shift();
          } else {
            head.position.start.column++;
            head.position.start.offset++;
            node.position.start = Object.assign({}, head.position.start);
          }
        }
      }
      this.exit(token);
    }
  }
});

// node_modules/mdast-util-gfm/from-markdown.js
var require_from_markdown5 = __commonJS({
  "node_modules/mdast-util-gfm/from-markdown.js"(exports, module) {
    var autolinkLiteral = require_from_markdown();
    var strikethrough = require_from_markdown2();
    var table = require_from_markdown3();
    var taskListItem = require_from_markdown4();
    var own = {}.hasOwnProperty;
    module.exports = configure([
      autolinkLiteral,
      strikethrough,
      table,
      taskListItem
    ]);
    function configure(extensions) {
      var config = { transforms: [], canContainEols: [] };
      var length = extensions.length;
      var index = -1;
      while (++index < length) {
        extension(config, extensions[index]);
      }
      return config;
    }
    function extension(config, extension2) {
      var key;
      var left;
      var right;
      for (key in extension2) {
        left = own.call(config, key) ? config[key] : config[key] = {};
        right = extension2[key];
        if (key === "canContainEols" || key === "transforms") {
          config[key] = [].concat(left, right);
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
});

// node_modules/mdast-util-gfm-autolink-literal/to-markdown.js
var require_to_markdown = __commonJS({
  "node_modules/mdast-util-gfm-autolink-literal/to-markdown.js"(exports) {
    var inConstruct = "phrasing";
    var notInConstruct = ["autolink", "link", "image", "label"];
    exports.unsafe = [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct,
        notInConstruct
      }
    ];
  }
});

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
var require_container_phrasing = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js"(exports, module) {
    module.exports = phrasing;
    function phrasing(parent, context, safeOptions) {
      var children = parent.children || [];
      var results = [];
      var index = -1;
      var before = safeOptions.before;
      var after;
      var handle;
      var child;
      while (++index < children.length) {
        child = children[index];
        if (index + 1 < children.length) {
          handle = context.handle.handlers[children[index + 1].type];
          if (handle && handle.peek)
            handle = handle.peek;
          after = handle ? handle(children[index + 1], parent, context, {
            before: "",
            after: ""
          }).charAt(0) : "";
        } else {
          after = safeOptions.after;
        }
        if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
          results[results.length - 1] = results[results.length - 1].replace(
            /(\r?\n|\r)$/,
            " "
          );
          before = " ";
        }
        results.push(
          context.handle(child, parent, context, {
            before,
            after
          })
        );
        before = results[results.length - 1].slice(-1);
      }
      return results.join("");
    }
  }
});

// node_modules/mdast-util-gfm-strikethrough/to-markdown.js
var require_to_markdown2 = __commonJS({
  "node_modules/mdast-util-gfm-strikethrough/to-markdown.js"(exports) {
    var phrasing = require_container_phrasing();
    exports.unsafe = [{ character: "~", inConstruct: "phrasing" }];
    exports.handlers = { delete: handleDelete };
    handleDelete.peek = peekDelete;
    function handleDelete(node, _, context) {
      var exit = context.enter("emphasis");
      var value = phrasing(node, context, { before: "~", after: "~" });
      exit();
      return "~~" + value + "~~";
    }
    function peekDelete() {
      return "~";
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
var require_pattern_compile = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js"(exports, module) {
    module.exports = patternCompile;
    function patternCompile(pattern) {
      var before;
      var after;
      if (!pattern._compiled) {
        before = pattern.before ? "(?:" + pattern.before + ")" : "";
        after = pattern.after ? "(?:" + pattern.after + ")" : "";
        if (pattern.atBreak) {
          before = "[\\r\\n][\\t ]*" + before;
        }
        pattern._compiled = new RegExp(
          (before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (after || ""),
          "g"
        );
      }
      return pattern._compiled;
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
var require_inline_code2 = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/handle/inline-code.js"(exports, module) {
    module.exports = inlineCode;
    inlineCode.peek = inlineCodePeek;
    var patternCompile = require_pattern_compile();
    function inlineCode(node, parent, context) {
      var value = node.value || "";
      var sequence = "`";
      var index = -1;
      var pattern;
      var expression;
      var match;
      var position;
      while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
        sequence += "`";
      }
      if (/[^ \r\n]/.test(value) && (/[ \r\n`]/.test(value.charAt(0)) || /[ \r\n`]/.test(value.charAt(value.length - 1)))) {
        value = " " + value + " ";
      }
      while (++index < context.unsafe.length) {
        pattern = context.unsafe[index];
        if (!pattern.atBreak)
          continue;
        expression = patternCompile(pattern);
        while (match = expression.exec(value)) {
          position = match.index;
          if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) {
            position--;
          }
          value = value.slice(0, position) + " " + value.slice(match.index + 1);
        }
      }
      return sequence + value + sequence;
    }
    function inlineCodePeek() {
      return "`";
    }
  }
});

// node_modules/repeat-string/index.js
var require_repeat_string = __commonJS({
  "node_modules/repeat-string/index.js"(exports, module) {
    "use strict";
    var res = "";
    var cache;
    module.exports = repeat;
    function repeat(str, num) {
      if (typeof str !== "string") {
        throw new TypeError("expected a string");
      }
      if (num === 1)
        return str;
      if (num === 2)
        return str + str;
      var max = str.length * num;
      if (cache !== str || typeof cache === "undefined") {
        cache = str;
        res = "";
      } else if (res.length >= max) {
        return res.substr(0, max);
      }
      while (max > res.length && num > 1) {
        if (num & 1) {
          res += str;
        }
        num >>= 1;
        str += str;
      }
      res += str;
      res = res.substr(0, max);
      return res;
    }
  }
});

// node_modules/markdown-table/index.js
var require_markdown_table = __commonJS({
  "node_modules/markdown-table/index.js"(exports, module) {
    "use strict";
    var repeat = require_repeat_string();
    module.exports = markdownTable;
    var trailingWhitespace = / +$/;
    var space = " ";
    var lineFeed = "\n";
    var dash = "-";
    var colon = ":";
    var verticalBar = "|";
    var x = 0;
    var C2 = 67;
    var L = 76;
    var R = 82;
    var c = 99;
    var l = 108;
    var r2 = 114;
    function markdownTable(table, options) {
      var settings = options || {};
      var padding = settings.padding !== false;
      var start = settings.delimiterStart !== false;
      var end = settings.delimiterEnd !== false;
      var align = (settings.align || []).concat();
      var alignDelimiters = settings.alignDelimiters !== false;
      var alignments = [];
      var stringLength = settings.stringLength || defaultStringLength;
      var rowIndex = -1;
      var rowLength = table.length;
      var cellMatrix = [];
      var sizeMatrix = [];
      var row = [];
      var sizes = [];
      var longestCellByColumn = [];
      var mostCellsPerRow = 0;
      var cells;
      var columnIndex;
      var columnLength;
      var largest;
      var size;
      var cell;
      var lines;
      var line;
      var before;
      var after;
      var code;
      while (++rowIndex < rowLength) {
        cells = table[rowIndex];
        columnIndex = -1;
        columnLength = cells.length;
        row = [];
        sizes = [];
        if (columnLength > mostCellsPerRow) {
          mostCellsPerRow = columnLength;
        }
        while (++columnIndex < columnLength) {
          cell = serialize(cells[columnIndex]);
          if (alignDelimiters === true) {
            size = stringLength(cell);
            sizes[columnIndex] = size;
            largest = longestCellByColumn[columnIndex];
            if (largest === void 0 || size > largest) {
              longestCellByColumn[columnIndex] = size;
            }
          }
          row.push(cell);
        }
        cellMatrix[rowIndex] = row;
        sizeMatrix[rowIndex] = sizes;
      }
      columnIndex = -1;
      columnLength = mostCellsPerRow;
      if (typeof align === "object" && "length" in align) {
        while (++columnIndex < columnLength) {
          alignments[columnIndex] = toAlignment(align[columnIndex]);
        }
      } else {
        code = toAlignment(align);
        while (++columnIndex < columnLength) {
          alignments[columnIndex] = code;
        }
      }
      columnIndex = -1;
      columnLength = mostCellsPerRow;
      row = [];
      sizes = [];
      while (++columnIndex < columnLength) {
        code = alignments[columnIndex];
        before = "";
        after = "";
        if (code === l) {
          before = colon;
        } else if (code === r2) {
          after = colon;
        } else if (code === c) {
          before = colon;
          after = colon;
        }
        size = alignDelimiters ? Math.max(
          1,
          longestCellByColumn[columnIndex] - before.length - after.length
        ) : 1;
        cell = before + repeat(dash, size) + after;
        if (alignDelimiters === true) {
          size = before.length + size + after.length;
          if (size > longestCellByColumn[columnIndex]) {
            longestCellByColumn[columnIndex] = size;
          }
          sizes[columnIndex] = size;
        }
        row[columnIndex] = cell;
      }
      cellMatrix.splice(1, 0, row);
      sizeMatrix.splice(1, 0, sizes);
      rowIndex = -1;
      rowLength = cellMatrix.length;
      lines = [];
      while (++rowIndex < rowLength) {
        row = cellMatrix[rowIndex];
        sizes = sizeMatrix[rowIndex];
        columnIndex = -1;
        columnLength = mostCellsPerRow;
        line = [];
        while (++columnIndex < columnLength) {
          cell = row[columnIndex] || "";
          before = "";
          after = "";
          if (alignDelimiters === true) {
            size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
            code = alignments[columnIndex];
            if (code === r2) {
              before = repeat(space, size);
            } else if (code === c) {
              if (size % 2 === 0) {
                before = repeat(space, size / 2);
                after = before;
              } else {
                before = repeat(space, size / 2 + 0.5);
                after = repeat(space, size / 2 - 0.5);
              }
            } else {
              after = repeat(space, size);
            }
          }
          if (start === true && columnIndex === 0) {
            line.push(verticalBar);
          }
          if (padding === true && // Don’t add the opening space if we’re not aligning and the cell is
          // empty: there will be a closing space.
          !(alignDelimiters === false && cell === "") && (start === true || columnIndex !== 0)) {
            line.push(space);
          }
          if (alignDelimiters === true) {
            line.push(before);
          }
          line.push(cell);
          if (alignDelimiters === true) {
            line.push(after);
          }
          if (padding === true) {
            line.push(space);
          }
          if (end === true || columnIndex !== columnLength - 1) {
            line.push(verticalBar);
          }
        }
        line = line.join("");
        if (end === false) {
          line = line.replace(trailingWhitespace, "");
        }
        lines.push(line);
      }
      return lines.join(lineFeed);
    }
    function serialize(value) {
      return value === null || value === void 0 ? "" : String(value);
    }
    function defaultStringLength(value) {
      return value.length;
    }
    function toAlignment(value) {
      var code = typeof value === "string" ? value.charCodeAt(0) : x;
      return code === L || code === l ? l : code === R || code === r2 ? r2 : code === C2 || code === c ? c : x;
    }
  }
});

// node_modules/mdast-util-gfm-table/to-markdown.js
var require_to_markdown3 = __commonJS({
  "node_modules/mdast-util-gfm-table/to-markdown.js"(exports, module) {
    var phrasing = require_container_phrasing();
    var defaultInlineCode = require_inline_code2();
    var markdownTable = require_markdown_table();
    module.exports = toMarkdown;
    function toMarkdown(options) {
      var settings = options || {};
      var padding = settings.tableCellPadding;
      var alignDelimiters = settings.tablePipeAlign;
      var stringLength = settings.stringLength;
      var around = padding ? " " : "|";
      return {
        unsafe: [
          { character: "\r", inConstruct: "tableCell" },
          { character: "\n", inConstruct: "tableCell" },
          // A pipe, when followed by a tab or space (padding), or a dash or colon
          // (unpadded delimiter row), could result in a table.
          { atBreak: true, character: "|", after: "[	 :-]" },
          // A pipe in a cell must be encoded.
          { character: "|", inConstruct: "tableCell" },
          // A colon must be followed by a dash, in which case it could start a
          // delimiter row.
          { atBreak: true, character: ":", after: "-" },
          // A delimiter row can also start with a dash, when followed by more
          // dashes, a colon, or a pipe.
          // This is a stricter version than the built in check for lists, thematic
          // breaks, and setex heading underlines though:
          // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
          { atBreak: true, character: "-", after: "[:|-]" }
        ],
        handlers: {
          table: handleTable,
          tableRow: handleTableRow,
          tableCell: handleTableCell,
          inlineCode: inlineCodeWithTable
        }
      };
      function handleTable(node, _, context) {
        return serializeData(handleTableAsData(node, context), node.align);
      }
      function handleTableRow(node, _, context) {
        var row = handleTableRowAsData(node, context);
        var value = serializeData([row]);
        return value.slice(0, value.indexOf("\n"));
      }
      function handleTableCell(node, _, context) {
        var exit = context.enter("tableCell");
        var value = phrasing(node, context, { before: around, after: around });
        exit();
        return value;
      }
      function serializeData(matrix, align) {
        return markdownTable(matrix, {
          align,
          alignDelimiters,
          padding,
          stringLength
        });
      }
      function handleTableAsData(node, context) {
        var children = node.children;
        var index = -1;
        var length = children.length;
        var result = [];
        var subexit = context.enter("table");
        while (++index < length) {
          result[index] = handleTableRowAsData(children[index], context);
        }
        subexit();
        return result;
      }
      function handleTableRowAsData(node, context) {
        var children = node.children;
        var index = -1;
        var length = children.length;
        var result = [];
        var subexit = context.enter("tableRow");
        while (++index < length) {
          result[index] = handleTableCell(children[index], node, context);
        }
        subexit();
        return result;
      }
      function inlineCodeWithTable(node, parent, context) {
        var value = defaultInlineCode(node, parent, context);
        if (context.stack.indexOf("tableCell") !== -1) {
          value = value.replace(/\|/g, "\\$&");
        }
        return value;
      }
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
var require_check_bullet = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/check-bullet.js"(exports, module) {
    module.exports = checkBullet;
    function checkBullet(context) {
      var marker = context.options.bullet || "*";
      if (marker !== "*" && marker !== "+" && marker !== "-") {
        throw new Error(
          "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
        );
      }
      return marker;
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
var require_check_list_item_indent = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js"(exports, module) {
    module.exports = checkListItemIndent;
    function checkListItemIndent(context) {
      var style = context.options.listItemIndent || "tab";
      if (style === 1 || style === "1") {
        return "one";
      }
      if (style !== "tab" && style !== "one" && style !== "mixed") {
        throw new Error(
          "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
        );
      }
      return style;
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
var require_container_flow = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/container-flow.js"(exports, module) {
    module.exports = flow;
    var repeat = require_repeat_string();
    function flow(parent, context) {
      var children = parent.children || [];
      var results = [];
      var index = -1;
      var child;
      while (++index < children.length) {
        child = children[index];
        results.push(
          context.handle(child, parent, context, { before: "\n", after: "\n" })
        );
        if (index + 1 < children.length) {
          results.push(between(child, children[index + 1]));
        }
      }
      return results.join("");
      function between(left, right) {
        var index2 = -1;
        var result;
        while (++index2 < context.join.length) {
          result = context.join[index2](left, right, parent, context);
          if (result === true || result === 1) {
            break;
          }
          if (typeof result === "number") {
            return repeat("\n", 1 + Number(result));
          }
          if (result === false) {
            return "\n\n<!---->\n\n";
          }
        }
        return "\n\n";
      }
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var require_indent_lines = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/indent-lines.js"(exports, module) {
    module.exports = indentLines;
    var eol = /\r?\n|\r/g;
    function indentLines(value, map) {
      var result = [];
      var start = 0;
      var line = 0;
      var match;
      while (match = eol.exec(value)) {
        one(value.slice(start, match.index));
        result.push(match[0]);
        start = match.index + match[0].length;
        line++;
      }
      one(value.slice(start));
      return result.join("");
      function one(value2) {
        result.push(map(value2, line, !value2));
      }
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
var require_list_item2 = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/handle/list-item.js"(exports, module) {
    module.exports = listItem;
    var repeat = require_repeat_string();
    var checkBullet = require_check_bullet();
    var checkListItemIndent = require_check_list_item_indent();
    var flow = require_container_flow();
    var indentLines = require_indent_lines();
    function listItem(node, parent, context) {
      var bullet = checkBullet(context);
      var listItemIndent = checkListItemIndent(context);
      var size;
      var value;
      var exit;
      if (parent && parent.ordered) {
        bullet = (parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + ".";
      }
      size = bullet.length + 1;
      if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.spread || node.spread)) {
        size = Math.ceil(size / 4) * 4;
      }
      exit = context.enter("listItem");
      value = indentLines(flow(node, context), map);
      exit();
      return value;
      function map(line, index, blank) {
        if (index) {
          return (blank ? "" : repeat(" ", size)) + line;
        }
        return (blank ? bullet : bullet + repeat(" ", size - bullet.length)) + line;
      }
    }
  }
});

// node_modules/mdast-util-gfm-task-list-item/to-markdown.js
var require_to_markdown4 = __commonJS({
  "node_modules/mdast-util-gfm-task-list-item/to-markdown.js"(exports) {
    var defaultListItem = require_list_item2();
    exports.unsafe = [{ atBreak: true, character: "-", after: "[:|-]" }];
    exports.handlers = {
      listItem: listItemWithTaskListItem
    };
    function listItemWithTaskListItem(node, parent, context) {
      var value = defaultListItem(node, parent, context);
      var head = node.children[0];
      if (typeof node.checked === "boolean" && head && head.type === "paragraph") {
        value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
      }
      return value;
      function check($0) {
        return $0 + "[" + (node.checked ? "x" : " ") + "] ";
      }
    }
  }
});

// node_modules/mdast-util-to-markdown/lib/configure.js
var require_configure = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/configure.js"(exports, module) {
    module.exports = configure;
    function configure(base, extension) {
      var index = -1;
      var key;
      if (extension.extensions) {
        while (++index < extension.extensions.length) {
          configure(base, extension.extensions[index]);
        }
      }
      for (key in extension) {
        if (key === "extensions") {
        } else if (key === "unsafe" || key === "join") {
          base[key] = base[key].concat(extension[key] || []);
        } else if (key === "handlers") {
          base[key] = Object.assign(base[key], extension[key] || {});
        } else {
          base.options[key] = extension[key];
        }
      }
      return base;
    }
  }
});

// node_modules/mdast-util-gfm/to-markdown.js
var require_to_markdown5 = __commonJS({
  "node_modules/mdast-util-gfm/to-markdown.js"(exports, module) {
    var autolinkLiteral = require_to_markdown();
    var strikethrough = require_to_markdown2();
    var table = require_to_markdown3();
    var taskListItem = require_to_markdown4();
    var configure = require_configure();
    module.exports = toMarkdown;
    function toMarkdown(options) {
      var config = configure(
        { handlers: {}, join: [], unsafe: [], options: {} },
        {
          extensions: [autolinkLiteral, strikethrough, table(options), taskListItem]
        }
      );
      return Object.assign(config.options, {
        handlers: config.handlers,
        join: config.join,
        unsafe: config.unsafe
      });
    }
  }
});

// node_modules/remark-gfm/index.js
var require_remark_gfm = __commonJS({
  "node_modules/remark-gfm/index.js"(exports, module) {
    "use strict";
    var syntax = require_micromark_extension_gfm();
    var fromMarkdown = require_from_markdown5();
    var toMarkdown = require_to_markdown5();
    var warningIssued;
    module.exports = gfm2;
    function gfm2(options) {
      var data = this.data();
      if (!warningIssued && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors)) {
        warningIssued = true;
        console.warn(
          "[remark-gfm] Warning: please upgrade to remark 13 to use this plugin"
        );
      }
      add("micromarkExtensions", syntax(options));
      add("fromMarkdownExtensions", fromMarkdown);
      add("toMarkdownExtensions", toMarkdown(options));
      function add(field, value) {
        if (data[field])
          data[field].push(value);
        else
          data[field] = [value];
      }
    }
  }
});

// node_modules/notistack/dist/notistack.esm.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/notistack/node_modules/clsx/dist/clsx.m.js
function r(e2) {
  var t, f, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t = 0; t < e2.length; t++)
        e2[t] && (f = r(e2[t])) && (n2 && (n2 += " "), n2 += f);
    else
      for (t in e2)
        e2[t] && (n2 && (n2 += " "), n2 += t);
  return n2;
}
function clsx() {
  for (var e2, t, f = 0, n2 = ""; f < arguments.length; )
    (e2 = arguments[f++]) && (t = r(e2)) && (n2 && (n2 += " "), n2 += t);
  return n2;
}
var clsx_m_default = clsx;

// node_modules/notistack/dist/notistack.esm.js
init_SvgIcon();
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
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
  return _extends2.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
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
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
var SnackbarContext = import_react.default.createContext();
var allClasses = {
  mui: {
    root: {},
    anchorOriginTopCenter: {},
    anchorOriginBottomCenter: {},
    anchorOriginTopRight: {},
    anchorOriginBottomRight: {},
    anchorOriginTopLeft: {},
    anchorOriginBottomLeft: {}
  },
  container: {
    containerRoot: {},
    containerAnchorOriginTopCenter: {},
    containerAnchorOriginBottomCenter: {},
    containerAnchorOriginTopRight: {},
    containerAnchorOriginBottomRight: {},
    containerAnchorOriginTopLeft: {},
    containerAnchorOriginBottomLeft: {}
  }
};
var MESSAGES = {
  NO_PERSIST_ALL: "WARNING - notistack: Reached maxSnack while all enqueued snackbars have 'persist' flag. Notistack will dismiss the oldest snackbar anyway to allow other ones in the queue to be presented."
};
var SNACKBAR_INDENTS = {
  view: {
    "default": 20,
    dense: 4
  },
  snackbar: {
    "default": 6,
    dense: 2
  }
};
var DEFAULTS = {
  maxSnack: 3,
  dense: false,
  hideIconVariant: false,
  variant: "default",
  autoHideDuration: 5e3,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  TransitionComponent: Slide_default,
  transitionDuration: {
    enter: 225,
    exit: 195
  }
};
var capitalise = function capitalise2(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
var originKeyExtractor = function originKeyExtractor2(anchor) {
  return "" + capitalise(anchor.vertical) + capitalise(anchor.horizontal);
};
var omitContainerKeys = function omitContainerKeys2(classes2) {
  return (
    // @ts-ignore
    Object.keys(classes2).filter(function(key) {
      return !allClasses.container[key];
    }).reduce(function(obj, key) {
      var _extends22;
      return _extends2({}, obj, (_extends22 = {}, _extends22[key] = classes2[key], _extends22));
    }, {})
  );
};
var REASONS = {
  TIMEOUT: "timeout",
  CLICKAWAY: "clickaway",
  MAXSNACK: "maxsnack",
  INSTRUCTED: "instructed"
};
var transformer = {
  toContainerAnchorOrigin: function toContainerAnchorOrigin(origin) {
    return "containerAnchorOrigin" + origin;
  },
  toAnchorOrigin: function toAnchorOrigin(_ref) {
    var vertical = _ref.vertical, horizontal = _ref.horizontal;
    return "anchorOrigin" + capitalise(vertical) + capitalise(horizontal);
  },
  toVariant: function toVariant(variant) {
    return "variant" + capitalise(variant);
  }
};
var isDefined = function isDefined2(value) {
  return !!value || value === 0;
};
var numberOrNull = function numberOrNull2(numberish) {
  return typeof numberish === "number" || numberish === null;
};
var merge = function merge2(options, props, defaults) {
  return function(name) {
    if (name === "autoHideDuration") {
      if (numberOrNull(options.autoHideDuration))
        return options.autoHideDuration;
      if (numberOrNull(props.autoHideDuration))
        return props.autoHideDuration;
      return DEFAULTS.autoHideDuration;
    }
    return options[name] || props[name] || defaults[name];
  };
};
function objectMerge(options, props, defaults) {
  if (options === void 0) {
    options = {};
  }
  if (props === void 0) {
    props = {};
  }
  if (defaults === void 0) {
    defaults = {};
  }
  return _extends2({}, defaults, {}, props, {}, options);
}
var componentName = "SnackbarContent";
var classes = {
  root: componentName + "-root"
};
var Root = styled_default("div")(function(_ref) {
  var _ref2, _ref3;
  var theme = _ref.theme;
  return _ref3 = {}, _ref3["&." + classes.root] = (_ref2 = {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
  }, _ref2[theme.breakpoints.up("sm")] = {
    flexGrow: "initial",
    minWidth: 288
  }, _ref2), _ref3;
});
var SnackbarContent = (0, import_react.forwardRef)(function(_ref4, ref) {
  var className = _ref4.className, props = _objectWithoutPropertiesLoose2(_ref4, ["className"]);
  return import_react.default.createElement(Root, Object.assign({
    ref,
    className: clsx_m_default(classes.root, className)
  }, props));
});
var DIRECTION = {
  right: "left",
  left: "right",
  bottom: "up",
  top: "down"
};
var getTransitionDirection = function getTransitionDirection2(anchorOrigin) {
  if (anchorOrigin.horizontal !== "center") {
    return DIRECTION[anchorOrigin.horizontal];
  }
  return DIRECTION[anchorOrigin.vertical];
};
var CheckIcon = function CheckIcon2(props) {
  return import_react.default.createElement(SvgIcon_default, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"
  }));
};
var WarningIcon = function WarningIcon2(props) {
  return import_react.default.createElement(SvgIcon_default, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
  }));
};
var ErrorIcon = function ErrorIcon2(props) {
  return import_react.default.createElement(SvgIcon_default, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
  }));
};
var InfoIcon = function InfoIcon2(props) {
  return import_react.default.createElement(SvgIcon_default, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"
  }));
};
var iconStyles = {
  fontSize: 20,
  marginInlineEnd: 8
};
var defaultIconVariants = {
  "default": void 0,
  success: import_react.default.createElement(CheckIcon, {
    style: iconStyles
  }),
  warning: import_react.default.createElement(WarningIcon, {
    style: iconStyles
  }),
  error: import_react.default.createElement(ErrorIcon, {
    style: iconStyles
  }),
  info: import_react.default.createElement(InfoIcon, {
    style: iconStyles
  })
};
function createChainedFunction(funcs, extraArg) {
  return funcs.reduce(function(acc, func) {
    if (func == null)
      return acc;
    if (true) {
      if (typeof func !== "function") {
        console.error("Invalid Argument Type. must only provide functions, undefined, or null.");
      }
    }
    return function chainedFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var argums = [].concat(args);
      if (extraArg && argums.indexOf(extraArg) === -1) {
        argums.push(extraArg);
      }
      acc.apply(this, argums);
      func.apply(this, argums);
    };
  }, function() {
  });
}
var useEnhancedEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function useEventCallback(fn) {
  var ref = (0, import_react.useRef)(fn);
  useEnhancedEffect(function() {
    ref.current = fn;
  });
  return (0, import_react.useCallback)(function() {
    return ref.current.apply(void 0, arguments);
  }, []);
}
var Snackbar = (0, import_react.forwardRef)(function(props, ref) {
  var children = props.children, autoHideDuration = props.autoHideDuration, ClickAwayListenerProps = props.ClickAwayListenerProps, _props$disableWindowB = props.disableWindowBlurListener, disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB, onClose = props.onClose, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, open = props.open, resumeHideDuration = props.resumeHideDuration, other = _objectWithoutPropertiesLoose2(props, ["children", "autoHideDuration", "ClickAwayListenerProps", "disableWindowBlurListener", "onClose", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration"]);
  var timerAutoHide = (0, import_react.useRef)();
  var handleClose = useEventCallback(function() {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = useEventCallback(function(autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function() {
      handleClose(null, REASONS.TIMEOUT);
    }, autoHideDurationParam);
  });
  (0, import_react.useEffect)(function() {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return function() {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  var handlePause = function handlePause2() {
    clearTimeout(timerAutoHide.current);
  };
  var handleResume = (0, import_react.useCallback)(function() {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  var handleMouseEnter = function handleMouseEnter2(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }
    handlePause();
  };
  var handleMouseLeave = function handleMouseLeave2(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    handleResume();
  };
  var handleClickAway = function handleClickAway2(event) {
    if (onClose) {
      onClose(event, REASONS.CLICKAWAY);
    }
  };
  (0, import_react.useEffect)(function() {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return function() {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  return (0, import_react.createElement)(ClickAwayListener, _extends2({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), (0, import_react.createElement)("div", _extends2({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref
  }, other), children));
});
var componentName$1 = "SnackbarItem";
var classes$1 = {
  contentRoot: componentName$1 + "-contentRoot",
  lessPadding: componentName$1 + "-lessPadding",
  variantSuccess: componentName$1 + "-variantSuccess",
  variantError: componentName$1 + "-variantError",
  variantInfo: componentName$1 + "-variantInfo",
  variantWarning: componentName$1 + "-variantWarning",
  message: componentName$1 + "-message",
  action: componentName$1 + "-action",
  wrappedRoot: componentName$1 + "-wrappedRoot"
};
var StyledSnackbar = styled_default(Snackbar)(function(_ref) {
  var _ref2;
  var theme = _ref.theme;
  var mode = theme.palette.mode || theme.palette.type;
  var backgroundColor = emphasize(theme.palette.background["default"], mode === "light" ? 0.8 : 0.98);
  return _ref2 = {}, _ref2["&." + classes$1.wrappedRoot] = {
    position: "relative",
    transform: "translateX(0)",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, _ref2["." + classes$1.contentRoot] = _extends2({}, theme.typography.body2, {
    backgroundColor,
    color: theme.palette.getContrastText(backgroundColor),
    alignItems: "center",
    padding: "6px 16px",
    borderRadius: "4px",
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
  }), _ref2["." + classes$1.lessPadding] = {
    paddingLeft: 8 * 2.5
  }, _ref2["." + classes$1.variantSuccess] = {
    backgroundColor: "#43a047",
    color: "#fff"
  }, _ref2["." + classes$1.variantError] = {
    backgroundColor: "#d32f2f",
    color: "#fff"
  }, _ref2["." + classes$1.variantInfo] = {
    backgroundColor: "#2196f3",
    color: "#fff"
  }, _ref2["." + classes$1.variantWarning] = {
    backgroundColor: "#ff9800",
    color: "#fff"
  }, _ref2["." + classes$1.message] = {
    display: "flex",
    alignItems: "center",
    padding: "8px 0"
  }, _ref2["." + classes$1.action] = {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }, _ref2;
});
var SnackbarItem = function SnackbarItem2(_ref3) {
  var propClasses = _ref3.classes, props = _objectWithoutPropertiesLoose2(_ref3, ["classes"]);
  var timeout = (0, import_react.useRef)();
  var _useState = (0, import_react.useState)(true), collapsed = _useState[0], setCollapsed = _useState[1];
  (0, import_react.useEffect)(function() {
    return function() {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
  var handleClose = createChainedFunction([props.snack.onClose, props.onClose], props.snack.key);
  var handleEntered = function handleEntered2() {
    if (props.snack.requestClose) {
      handleClose(null, REASONS.INSTRCUTED);
    }
  };
  var handleExitedScreen = function handleExitedScreen2() {
    timeout.current = setTimeout(function() {
      setCollapsed(!collapsed);
    }, 125);
  };
  var style = props.style, otherAriaAttributes = props.ariaAttributes, otherClassName = props.className, hideIconVariant = props.hideIconVariant, iconVariant = props.iconVariant, snack = props.snack, otherAction = props.action, otherContent = props.content, otherTranComponent = props.TransitionComponent, otherTranProps = props.TransitionProps, otherTranDuration = props.transitionDuration, other = _objectWithoutPropertiesLoose2(props, ["style", "dense", "ariaAttributes", "className", "hideIconVariant", "iconVariant", "snack", "action", "content", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);
  var key = snack.key, open = snack.open, singleClassName = snack.className, variant = snack.variant, singleContent = snack.content, singleAction = snack.action, singleAriaAttributes = snack.ariaAttributes, anchorOrigin = snack.anchorOrigin, snackMessage = snack.message, singleTranComponent = snack.TransitionComponent, singleTranProps = snack.TransitionProps, singleTranDuration = snack.transitionDuration, singleSnackProps = _objectWithoutPropertiesLoose2(snack, ["persist", "key", "open", "entered", "requestClose", "className", "variant", "content", "action", "ariaAttributes", "anchorOrigin", "message", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);
  var icon = _extends2({}, defaultIconVariants, {}, iconVariant)[variant];
  var ariaAttributes = _extends2({
    "aria-describedby": "notistack-snackbar"
  }, objectMerge(singleAriaAttributes, otherAriaAttributes));
  var TransitionComponent = singleTranComponent || otherTranComponent || DEFAULTS.TransitionComponent;
  var transitionDuration = objectMerge(singleTranDuration, otherTranDuration, DEFAULTS.transitionDuration);
  var transitionProps = _extends2({
    direction: getTransitionDirection(anchorOrigin)
  }, objectMerge(singleTranProps, otherTranProps));
  var action = singleAction || otherAction;
  if (typeof action === "function") {
    action = action(key);
  }
  var content = singleContent || otherContent;
  if (typeof content === "function") {
    content = content(key, snack.message);
  }
  var callbacks = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"].reduce(function(acc, cbName) {
    var _extends22;
    return _extends2({}, acc, (_extends22 = {}, _extends22[cbName] = createChainedFunction([props.snack[cbName], props[cbName]], props.snack.key), _extends22));
  }, {});
  return import_react.default.createElement(Collapse_default, {
    unmountOnExit: true,
    timeout: 175,
    "in": collapsed,
    onExited: callbacks.onExited
  }, import_react.default.createElement(StyledSnackbar, Object.assign({}, other, singleSnackProps, {
    open,
    className: clsx_m_default(propClasses.root, classes$1.wrappedRoot, propClasses[transformer.toAnchorOrigin(anchorOrigin)]),
    onClose: handleClose
  }), import_react.default.createElement(TransitionComponent, Object.assign({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, transitionProps, {
    onExit: callbacks.onExit,
    onExiting: callbacks.onExiting,
    onExited: handleExitedScreen,
    onEnter: callbacks.onEnter,
    onEntering: callbacks.onEntering,
    // order matters. first callbacks.onEntered to set entered: true,
    // then handleEntered to check if there's a request for closing
    onEntered: createChainedFunction([callbacks.onEntered, handleEntered])
  }), content || import_react.default.createElement(SnackbarContent, Object.assign({}, ariaAttributes, {
    role: "alert",
    style,
    className: clsx_m_default(classes$1.contentRoot, classes$1[transformer.toVariant(variant)], propClasses[transformer.toVariant(variant)], otherClassName, singleClassName, !hideIconVariant && icon && classes$1.lessPadding)
  }), import_react.default.createElement("div", {
    id: ariaAttributes["aria-describedby"],
    className: classes$1.message
  }, !hideIconVariant ? icon : null, snackMessage), action && import_react.default.createElement("div", {
    className: classes$1.action
  }, action)))));
};
var collapse = {
  // Material-UI 4.12.x and above uses MuiCollapse-root; earlier versions use
  // Mui-Collapse-container.  https://github.com/mui-org/material-ui/pull/24084
  container: "& > .MuiCollapse-container, & > .MuiCollapse-root",
  wrapper: "& > .MuiCollapse-container > .MuiCollapse-wrapper, & > .MuiCollapse-root > .MuiCollapse-wrapper"
};
var xsWidthMargin = 16;
var componentName$2 = "SnackbarContainer";
var classes$2 = {
  root: componentName$2 + "-root",
  rootDense: componentName$2 + "-rootDense",
  top: componentName$2 + "-top",
  bottom: componentName$2 + "-bottom",
  left: componentName$2 + "-left",
  right: componentName$2 + "-right",
  center: componentName$2 + "-center"
};
var Root$1 = styled_default("div")(function(_ref) {
  var _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
  var theme = _ref.theme;
  return _ref7 = {}, _ref7["&." + classes$2.root] = (_ref2 = {
    boxSizing: "border-box",
    display: "flex",
    maxHeight: "100%",
    position: "fixed",
    zIndex: theme.zIndex.snackbar,
    height: "auto",
    width: "auto",
    transition: "top 300ms ease 0ms, right 300ms ease 0ms, bottom 300ms ease 0ms, left 300ms ease 0ms, margin 300ms ease 0ms, max-width 300ms ease 0ms",
    // container itself is invisible and should not block clicks, clicks should be passed to its children
    pointerEvents: "none"
  }, _ref2[collapse.container] = {
    pointerEvents: "all"
  }, _ref2[collapse.wrapper] = {
    padding: SNACKBAR_INDENTS.snackbar["default"] + "px 0px",
    transition: "padding 300ms ease 0ms"
  }, _ref2.maxWidth = "calc(100% - " + SNACKBAR_INDENTS.view["default"] * 2 + "px)", _ref2[theme.breakpoints.down("sm")] = {
    width: "100%",
    maxWidth: "calc(100% - " + xsWidthMargin * 2 + "px)"
  }, _ref2), _ref7["&." + classes$2.rootDense] = (_ref3 = {}, _ref3[collapse.wrapper] = {
    padding: SNACKBAR_INDENTS.snackbar.dense + "px 0px"
  }, _ref3), _ref7["&." + classes$2.top] = {
    top: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"],
    flexDirection: "column"
  }, _ref7["&." + classes$2.bottom] = {
    bottom: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"],
    flexDirection: "column-reverse"
  }, _ref7["&." + classes$2.left] = (_ref4 = {
    left: SNACKBAR_INDENTS.view["default"]
  }, _ref4[theme.breakpoints.up("sm")] = {
    alignItems: "flex-start"
  }, _ref4[theme.breakpoints.down("sm")] = {
    left: xsWidthMargin + "px"
  }, _ref4), _ref7["&." + classes$2.right] = (_ref5 = {
    right: SNACKBAR_INDENTS.view["default"]
  }, _ref5[theme.breakpoints.up("sm")] = {
    alignItems: "flex-end"
  }, _ref5[theme.breakpoints.down("sm")] = {
    right: xsWidthMargin + "px"
  }, _ref5), _ref7["&." + classes$2.center] = (_ref6 = {
    left: "50%",
    transform: "translateX(-50%)"
  }, _ref6[theme.breakpoints.up("sm")] = {
    alignItems: "center"
  }, _ref6), _ref7;
});
var SnackbarContainer = function SnackbarContainer2(props) {
  var className = props.className, anchorOrigin = props.anchorOrigin, dense = props.dense, other = _objectWithoutPropertiesLoose2(props, ["className", "anchorOrigin", "dense"]);
  var combinedClassname = clsx_m_default(
    classes$2[anchorOrigin.vertical],
    classes$2[anchorOrigin.horizontal],
    classes$2.root,
    // root should come after others to override maxWidth
    className,
    dense && classes$2.rootDense
  );
  return import_react.default.createElement(Root$1, Object.assign({
    className: combinedClassname
  }, other));
};
var SnackbarContainer$1 = import_react.default.memo(SnackbarContainer);
var __DEV__ = true;
var warning = function(message) {
  if (!__DEV__)
    return;
  if (typeof console !== "undefined") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (x) {
  }
};
var SnackbarProvider = function(_Component) {
  _inheritsLoose(SnackbarProvider2, _Component);
  function SnackbarProvider2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.enqueueSnackbar = function(message, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var _opts = opts, key = _opts.key, preventDuplicate = _opts.preventDuplicate, options = _objectWithoutPropertiesLoose2(_opts, ["key", "preventDuplicate"]);
      var hasSpecifiedKey = isDefined(key);
      var id = hasSpecifiedKey ? key : (/* @__PURE__ */ new Date()).getTime() + Math.random();
      var merger = merge(options, _this.props, DEFAULTS);
      var snack = _extends2({
        key: id
      }, options, {
        message,
        open: true,
        entered: false,
        requestClose: false,
        variant: merger("variant"),
        anchorOrigin: merger("anchorOrigin"),
        autoHideDuration: merger("autoHideDuration")
      });
      if (options.persist) {
        snack.autoHideDuration = void 0;
      }
      _this.setState(function(state) {
        if (preventDuplicate === void 0 && _this.props.preventDuplicate || preventDuplicate) {
          var compareFunction = function compareFunction2(item) {
            return hasSpecifiedKey ? item.key === key : item.message === message;
          };
          var inQueue = state.queue.findIndex(compareFunction) > -1;
          var inView = state.snacks.findIndex(compareFunction) > -1;
          if (inQueue || inView) {
            return state;
          }
        }
        return _this.handleDisplaySnack(_extends2({}, state, {
          queue: [].concat(state.queue, [snack])
        }));
      });
      return id;
    };
    _this.handleDisplaySnack = function(state) {
      var snacks = state.snacks;
      if (snacks.length >= _this.maxSnack) {
        return _this.handleDismissOldest(state);
      }
      return _this.processQueue(state);
    };
    _this.processQueue = function(state) {
      var queue = state.queue, snacks = state.snacks;
      if (queue.length > 0) {
        return _extends2({}, state, {
          snacks: [].concat(snacks, [queue[0]]),
          queue: queue.slice(1, queue.length)
        });
      }
      return state;
    };
    _this.handleDismissOldest = function(state) {
      if (state.snacks.some(function(item) {
        return !item.open || item.requestClose;
      })) {
        return state;
      }
      var popped = false;
      var ignore = false;
      var persistentCount = state.snacks.reduce(function(acc, current) {
        return acc + (current.open && current.persist ? 1 : 0);
      }, 0);
      if (persistentCount === _this.maxSnack) {
        true ? warning(MESSAGES.NO_PERSIST_ALL) : void 0;
        ignore = true;
      }
      var snacks = state.snacks.map(function(item) {
        if (!popped && (!item.persist || ignore)) {
          popped = true;
          if (!item.entered) {
            return _extends2({}, item, {
              requestClose: true
            });
          }
          if (item.onClose)
            item.onClose(null, REASONS.MAXSNACK, item.key);
          if (_this.props.onClose)
            _this.props.onClose(null, REASONS.MAXSNACK, item.key);
          return _extends2({}, item, {
            open: false
          });
        }
        return _extends2({}, item);
      });
      return _extends2({}, state, {
        snacks
      });
    };
    _this.handleEnteredSnack = function(node, isAppearing, key) {
      if (!isDefined(key)) {
        throw new Error("handleEnteredSnack Cannot be called with undefined key");
      }
      _this.setState(function(_ref) {
        var snacks = _ref.snacks;
        return {
          snacks: snacks.map(function(item) {
            return item.key === key ? _extends2({}, item, {
              entered: true
            }) : _extends2({}, item);
          })
        };
      });
    };
    _this.handleCloseSnack = function(event, reason, key) {
      if (_this.props.onClose) {
        _this.props.onClose(event, reason, key);
      }
      if (reason === REASONS.CLICKAWAY)
        return;
      var shouldCloseAll = key === void 0;
      _this.setState(function(_ref2) {
        var snacks = _ref2.snacks, queue = _ref2.queue;
        return {
          snacks: snacks.map(function(item) {
            if (!shouldCloseAll && item.key !== key) {
              return _extends2({}, item);
            }
            return item.entered ? _extends2({}, item, {
              open: false
            }) : _extends2({}, item, {
              requestClose: true
            });
          }),
          queue: queue.filter(function(item) {
            return item.key !== key;
          })
        };
      });
    };
    _this.closeSnackbar = function(key) {
      var toBeClosed = _this.state.snacks.find(function(item) {
        return item.key === key;
      });
      if (isDefined(key) && toBeClosed && toBeClosed.onClose) {
        toBeClosed.onClose(null, REASONS.INSTRUCTED, key);
      }
      _this.handleCloseSnack(null, REASONS.INSTRUCTED, key);
    };
    _this.handleExitedSnack = function(event, key1, key2) {
      var key = key1 || key2;
      if (!isDefined(key)) {
        throw new Error("handleExitedSnack Cannot be called with undefined key");
      }
      _this.setState(function(state) {
        var newState = _this.processQueue(_extends2({}, state, {
          snacks: state.snacks.filter(function(item) {
            return item.key !== key;
          })
        }));
        if (newState.queue.length === 0) {
          return newState;
        }
        return _this.handleDismissOldest(newState);
      });
    };
    _this.state = {
      snacks: [],
      queue: [],
      contextValue: {
        enqueueSnackbar: _this.enqueueSnackbar.bind(_assertThisInitialized(_this)),
        closeSnackbar: _this.closeSnackbar.bind(_assertThisInitialized(_this))
      }
    };
    return _this;
  }
  var _proto = SnackbarProvider2.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var contextValue = this.state.contextValue;
    var _this$props = this.props, iconVariant = _this$props.iconVariant, _this$props$dense = _this$props.dense, dense = _this$props$dense === void 0 ? DEFAULTS.dense : _this$props$dense, _this$props$hideIconV = _this$props.hideIconVariant, hideIconVariant = _this$props$hideIconV === void 0 ? DEFAULTS.hideIconVariant : _this$props$hideIconV, domRoot = _this$props.domRoot, children = _this$props.children, _this$props$classes = _this$props.classes, classes2 = _this$props$classes === void 0 ? {} : _this$props$classes, props = _objectWithoutPropertiesLoose2(_this$props, ["maxSnack", "preventDuplicate", "variant", "anchorOrigin", "iconVariant", "dense", "hideIconVariant", "domRoot", "children", "classes"]);
    var categ = this.state.snacks.reduce(function(acc, current) {
      var _extends22;
      var category = originKeyExtractor(current.anchorOrigin);
      var existingOfCategory = acc[category] || [];
      return _extends2({}, acc, (_extends22 = {}, _extends22[category] = [].concat(existingOfCategory, [current]), _extends22));
    }, {});
    var snackbars = Object.keys(categ).map(function(origin) {
      var snacks = categ[origin];
      return import_react.default.createElement(SnackbarContainer$1, {
        key: origin,
        dense,
        anchorOrigin: snacks[0].anchorOrigin,
        className: clsx_m_default(classes2.containerRoot, classes2[transformer.toContainerAnchorOrigin(origin)])
      }, snacks.map(function(snack) {
        return import_react.default.createElement(SnackbarItem, Object.assign({}, props, {
          key: snack.key,
          snack,
          dense,
          iconVariant,
          hideIconVariant,
          classes: omitContainerKeys(classes2),
          onClose: _this2.handleCloseSnack,
          onExited: createChainedFunction([_this2.handleExitedSnack, _this2.props.onExited]),
          onEntered: createChainedFunction([_this2.handleEnteredSnack, _this2.props.onEntered])
        }));
      }));
    });
    return import_react.default.createElement(SnackbarContext.Provider, {
      value: contextValue
    }, children, domRoot ? (0, import_react_dom.createPortal)(snackbars, domRoot) : snackbars);
  };
  _createClass(SnackbarProvider2, [{
    key: "maxSnack",
    get: function get() {
      return this.props.maxSnack || DEFAULTS.maxSnack;
    }
  }]);
  return SnackbarProvider2;
}(import_react.Component);
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
var getFunctionName = function getFunctionName2(fn) {
  var match = ("" + fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || "";
};
var getFunctionComponentName = function getFunctionComponentName2(Component2, fallback) {
  if (fallback === void 0) {
    fallback = "";
  }
  return Component2.displayName || Component2.name || getFunctionName(Component2) || fallback;
};
var getWrappedName = function getWrappedName2(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
};
var ForwardRef = function ForwardRef2() {
  var symbolFor = typeof Symbol === "function" && Symbol["for"];
  return symbolFor ? symbolFor("react.forward_ref") : 60112;
};
var getDisplayName = function(Component2) {
  if (Component2 == null) {
    return void 0;
  }
  if (typeof Component2 === "string") {
    return Component2;
  }
  if (typeof Component2 === "function") {
    return getFunctionComponentName(Component2, "Component");
  }
  if (typeof Component2 === "object") {
    switch (Component2.$$typeof) {
      case ForwardRef():
        return getWrappedName(Component2, Component2.render, "ForwardRef");
      default:
        return void 0;
    }
  }
  return void 0;
};
var withSnackbar = function withSnackbar2(Component2) {
  var WrappedComponent = import_react.default.forwardRef(function(props, ref) {
    return import_react.default.createElement(SnackbarContext.Consumer, null, function(context) {
      return import_react.default.createElement(Component2, _extends2({}, props, {
        ref,
        enqueueSnackbar: context.enqueueSnackbar,
        closeSnackbar: context.closeSnackbar
      }));
    });
  });
  if (true) {
    WrappedComponent.displayName = "WithSnackbar(" + getDisplayName(Component2) + ")";
  }
  (0, import_hoist_non_react_statics.default)(WrappedComponent, Component2);
  return WrappedComponent;
};
var useSnackbar = function() {
  return (0, import_react.useContext)(SnackbarContext);
};

// node_modules/@refinedev/mui/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/utils/createSvgIcon.js
init_utils2();

// node_modules/@mui/icons-material/esm/ListOutlined.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var ListOutlined_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7zm-4 6h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"
}), "ListOutlined");

// node_modules/@mui/icons-material/esm/Logout.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Logout_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
}), "Logout");

// node_modules/@mui/icons-material/esm/ExpandLess.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var ExpandLess_default = createSvgIcon((0, import_jsx_runtime3.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess");

// node_modules/@mui/icons-material/esm/ExpandMore.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var ExpandMore_default = createSvgIcon((0, import_jsx_runtime4.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");

// node_modules/@mui/icons-material/esm/ChevronLeft.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var ChevronLeft_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "ChevronLeft");

// node_modules/@mui/icons-material/esm/ChevronRight.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var ChevronRight_default = createSvgIcon((0, import_jsx_runtime6.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");

// node_modules/@mui/icons-material/esm/MenuRounded.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var MenuRounded_default = createSvgIcon((0, import_jsx_runtime7.jsx)("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded");

// node_modules/@mui/icons-material/esm/Dashboard.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var Dashboard_default = createSvgIcon((0, import_jsx_runtime8.jsx)("path", {
  d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
}), "Dashboard");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/Menu.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var Menu_default = createSvgIcon((0, import_jsx_runtime9.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react9 = __toESM(require_react(), 1);
init_SvgIcon();
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_react15 = __toESM(require_react(), 1);
var import_react16 = __toESM(require_react(), 1);
var import_react17 = __toESM(require_react(), 1);
var import_react18 = __toESM(require_react(), 1);
init_SvgIcon();
var React15 = __toESM(require_react(), 1);
var React16 = __toESM(require_react(), 1);
var import_react19 = __toESM(require_react(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/Info.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var Info_default = createSvgIcon((0, import_jsx_runtime10.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), "Info");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react21 = __toESM(require_react(), 1);
var React19 = __toESM(require_react(), 1);
var React20 = __toESM(require_react(), 1);
var React21 = __toESM(require_react(), 1);
var React222 = __toESM(require_react(), 1);
var import_react22 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/ArrowBack.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var ArrowBack_default = createSvgIcon((0, import_jsx_runtime11.jsx)("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), "ArrowBack");

// node_modules/@refinedev/ui-types/dist/index.mjs
var o = { Title: "refine-pageHeader-title", SubTitle: "refine-pageHeader-subTitle" };
var n = { CloneButton: "refine-clone-button", DeleteButton: "refine-delete-button", EditButton: "refine-edit-button", SaveButton: "refine-save-button", CreateButton: "refine-create-button", ImportButton: "refine-import-button", ExportButton: "refine-export-button", ListButton: "refine-list-button", RefreshButton: "refine-refresh-button", ShowButton: "refine-show-button" };

// node_modules/@refinedev/mui/dist/index.mjs
var import_react23 = __toESM(require_react(), 1);
var import_react24 = __toESM(require_react(), 1);
var import_react25 = __toESM(require_react(), 1);
var import_react26 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/AddBoxOutlined.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var AddBoxOutlined_default = createSvgIcon((0, import_jsx_runtime12.jsx)("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"
}), "AddBoxOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/EditOutlined.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var EditOutlined_default = createSvgIcon((0, import_jsx_runtime13.jsx)("path", {
  d: "m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
}), "EditOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();
init_utils2();
init_resolveProps();

// node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getLoadingButtonUtilityClass(slot) {
  return generateUtilityClass("MuiLoadingButton", slot);
}
var loadingButtonClasses = generateUtilityClasses("MuiLoadingButton", ["root", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]);
var loadingButtonClasses_default = loadingButtonClasses;

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];
var useUtilityClasses = (ownerState) => {
  const {
    loading,
    loadingPosition,
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading"],
    startIcon: [loading && `startIconLoading${capitalize_default(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${capitalize_default(loadingPosition)}`],
    loadingIndicator: ["loadingIndicator", loading && `loadingIndicator${capitalize_default(loadingPosition)}`]
  };
  const composedClasses = composeClasses(slots, getLoadingButtonUtilityClass, classes2);
  return _extends({}, classes2, composedClasses);
};
var rootShouldForwardProp = (prop) => prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "classes";
var LoadingButtonRoot = styled_default(Button_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${loadingButtonClasses_default.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${loadingButtonClasses_default.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => _extends({
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === "center" && {
  transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
    duration: theme.transitions.duration.short
  }),
  [`&.${loadingButtonClasses_default.loading}`]: {
    color: "transparent"
  }
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
var LoadingButtonLoadingIndicator = styled_default("span", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${capitalize_default(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "absolute",
  visibility: "visible",
  display: "flex"
}, ownerState.loadingPosition === "start" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  left: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "start" && ownerState.variant === "text" && {
  left: 6
}, ownerState.loadingPosition === "center" && {
  left: "50%",
  transform: "translate(-50%)",
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === "end" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  right: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "end" && ownerState.variant === "text" && {
  right: 6
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  position: "relative",
  left: -10
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  position: "relative",
  right: -10
}));
var LoadingButton = React.forwardRef(function LoadingButton2(inProps, ref) {
  const contextProps = React.useContext(ButtonGroupContext_default);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiLoadingButton"
  });
  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const id = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : (0, import_jsx_runtime14.jsx)(CircularProgress_default, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });
  const ownerState = _extends({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });
  const classes2 = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? (0, import_jsx_runtime14.jsx)(LoadingButtonLoadingIndicator, {
    className: classes2.loadingIndicator,
    ownerState,
    children: loadingIndicator
  }) : null;
  return (0, import_jsx_runtime15.jsxs)(LoadingButtonRoot, _extends({
    disabled: disabled || loading,
    id,
    ref
  }, other, {
    variant,
    classes: classes2,
    ownerState,
    children: [ownerState.loadingPosition === "end" ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === "end" ? loadingButtonLoadingIndicator : children]
  }));
});
true ? LoadingButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading: import_prop_types.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: chainPropTypes(import_prop_types.default.oneOf(["start", "end", "center"]), (props) => {
    if (props.loadingPosition === "start" && !props.startIcon) {
      return new Error(`MUI: The loadingPosition="start" should be used in combination with startIcon.`);
    }
    if (props.loadingPosition === "end" && !props.endIcon) {
      return new Error(`MUI: The loadingPosition="end" should be used in combination with endIcon.`);
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["contained", "outlined", "text"]), import_prop_types.default.string])
} : void 0;
var LoadingButton_default = LoadingButton;

// node_modules/@mui/icons-material/esm/DeleteOutline.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var DeleteOutline_default = createSvgIcon((0, import_jsx_runtime16.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
}), "DeleteOutline");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/RefreshOutlined.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var RefreshOutlined_default = createSvgIcon((0, import_jsx_runtime17.jsx)("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
}), "RefreshOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/VisibilityOutlined.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var VisibilityOutlined_default = createSvgIcon((0, import_jsx_runtime18.jsx)("path", {
  d: "M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"
}), "VisibilityOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react31 = __toESM(require_react(), 1);
var import_react32 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/ImportExportOutlined.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var ImportExportOutlined_default = createSvgIcon((0, import_jsx_runtime19.jsx)("path", {
  d: "M9 3 5 6.99h3V14h2V6.99h3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99z"
}), "ImportExportOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/SaveOutlined.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var SaveOutlined_default = createSvgIcon((0, import_jsx_runtime20.jsx)("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M6 6h9v4H6z"
}), "SaveOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react34 = __toESM(require_react(), 1);
var import_react35 = __toESM(require_react(), 1);
var import_react36 = __toESM(require_react(), 1);
var import_react37 = __toESM(require_react(), 1);
var import_react38 = __toESM(require_react(), 1);
var import_react39 = __toESM(require_react(), 1);
var import_react40 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/CheckOutlined.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var CheckOutlined_default = createSvgIcon((0, import_jsx_runtime21.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "CheckOutlined");

// node_modules/@mui/icons-material/esm/CloseOutlined.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var CloseOutlined_default = createSvgIcon((0, import_jsx_runtime22.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "CloseOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react41 = __toESM(require_react(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_localizedFormat = __toESM(require_localizedFormat(), 1);
var import_react42 = __toESM(require_react(), 1);
var import_react43 = __toESM(require_react(), 1);
var import_react44 = __toESM(require_react(), 1);
var import_react45 = __toESM(require_react(), 1);
var import_react_markdown = __toESM(require_react_markdown(), 1);
var import_remark_gfm = __toESM(require_remark_gfm(), 1);
var import_react46 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/HomeOutlined.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var HomeOutlined_default = createSvgIcon((0, import_jsx_runtime23.jsx)("path", {
  d: "m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"
}), "HomeOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react47 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/MoreHorizOutlined.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var MoreHorizOutlined_default = createSvgIcon((0, import_jsx_runtime24.jsx)("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "MoreHorizOutlined");

// node_modules/@mui/icons-material/esm/SyncOutlined.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var SyncOutlined_default = createSvgIcon((0, import_jsx_runtime25.jsx)("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"
}), "SyncOutlined");

// node_modules/@mui/icons-material/esm/TaskAltOutlined.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var TaskAltOutlined_default = createSvgIcon((0, import_jsx_runtime26.jsx)("path", {
  d: "M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z"
}), "TaskAltOutlined");

// node_modules/@mui/icons-material/esm/ErrorOutlineOutlined.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var ErrorOutlineOutlined_default = createSvgIcon((0, import_jsx_runtime27.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutlineOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react48 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/UndoOutlined.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var UndoOutlined_default = createSvgIcon((0, import_jsx_runtime28.jsx)("path", {
  d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8"
}), "UndoOutlined");

// node_modules/@refinedev/mui/dist/index.mjs
var import_react49 = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var Sider = __name(({
  Title: TitleFromProps,
  render,
  meta
}) => {
  const [collapsed, setCollapsed] = (0, import_react3.useState)(false);
  const [opened, setOpened] = (0, import_react3.useState)(false);
  const drawerWidth = __name(() => {
    if (collapsed)
      return 64;
    return 200;
  }, "drawerWidth");
  const t = G();
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  const { hasDashboard } = se();
  const translate = G();
  const { warnWhen, setWarnWhen } = pt();
  const { menuItems, selectedKey, defaultOpenKeys } = Cu({ meta });
  const isExistAuthentication = Jr();
  const TitleFromContext = Js();
  const authProvider = J();
  const { mutate: mutateLogout } = fr({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const [open, setOpen] = (0, import_react3.useState)({});
  import_react3.default.useEffect(() => {
    setOpen((previous) => {
      const previousKeys = Object.keys(previous);
      const previousOpenKeys = previousKeys.filter((key) => previous[key]);
      const uniqueKeys = /* @__PURE__ */ new Set([...previousOpenKeys, ...defaultOpenKeys]);
      const uniqueKeysRecord = Object.fromEntries(
        Array.from(uniqueKeys.values()).map((key) => [key, true])
      );
      return uniqueKeysRecord;
    });
  }, [defaultOpenKeys]);
  const RenderToTitle = TitleFromProps ?? TitleFromContext ?? Title;
  const handleClick = __name((key) => {
    setOpen({ ...open, [key]: !open[key] });
  }, "handleClick");
  const renderTreeView = __name((tree, selectedKey2) => {
    return tree.map((item) => {
      const { icon, label, route, name, children, parentName, meta: meta2, options } = item;
      const isOpen = open[item.key || ""] || false;
      const isSelected = item.key === selectedKey2;
      const isNested = !(S(meta2 == null ? void 0 : meta2.parent, options == null ? void 0 : options.parent, parentName) === void 0);
      if (children.length > 0) {
        return import_react3.default.createElement(
          nc,
          {
            key: item.key,
            resource: name.toLowerCase(),
            action: "list",
            params: {
              resource: item
            }
          },
          import_react3.default.createElement("div", { key: item.key }, import_react3.default.createElement(
            Tooltip_default,
            {
              title: label ?? name,
              placement: "right",
              disableHoverListener: !collapsed,
              arrow: true
            },
            import_react3.default.createElement(
              ListItemButton_default,
              {
                onClick: () => {
                  if (collapsed) {
                    setCollapsed(false);
                    if (!isOpen) {
                      handleClick(item.key || "");
                    }
                  } else {
                    handleClick(item.key || "");
                  }
                },
                sx: {
                  pl: isNested ? 4 : 2,
                  justifyContent: "center",
                  "&.Mui-selected": {
                    "&:hover": {
                      backgroundColor: "transparent"
                    },
                    backgroundColor: "transparent"
                  }
                }
              },
              import_react3.default.createElement(
                ListItemIcon_default,
                {
                  sx: {
                    justifyContent: "center",
                    minWidth: 36,
                    color: "secondary.contrastText"
                  }
                },
                icon ?? import_react3.default.createElement(ListOutlined_default, null)
              ),
              import_react3.default.createElement(
                ListItemText_default,
                {
                  primary: label,
                  primaryTypographyProps: {
                    noWrap: true,
                    fontSize: "14px",
                    fontWeight: isSelected ? "bold" : "normal"
                  }
                }
              ),
              !collapsed && (isOpen ? import_react3.default.createElement(ExpandLess_default, null) : import_react3.default.createElement(ExpandMore_default, null))
            )
          ), !collapsed && import_react3.default.createElement(
            Collapse_default,
            {
              in: open[item.key || ""],
              timeout: "auto",
              unmountOnExit: true
            },
            import_react3.default.createElement(List_default, { component: "div", disablePadding: true }, renderTreeView(children, selectedKey2))
          ))
        );
      }
      return import_react3.default.createElement(
        nc,
        {
          key: item.key,
          resource: name.toLowerCase(),
          action: "list",
          params: { resource: item }
        },
        import_react3.default.createElement(
          Tooltip_default,
          {
            title: label ?? name,
            placement: "right",
            disableHoverListener: !collapsed,
            arrow: true
          },
          import_react3.default.createElement(
            ListItemButton_default,
            {
              component: ActiveLink,
              to: route,
              selected: isSelected,
              onClick: () => {
                setOpened(false);
              },
              sx: {
                pl: isNested ? 4 : 2,
                py: isNested ? 1.25 : 1,
                "&.Mui-selected": {
                  "&:hover": {
                    backgroundColor: "transparent"
                  },
                  backgroundColor: "transparent"
                },
                justifyContent: "center"
              }
            },
            import_react3.default.createElement(
              ListItemIcon_default,
              {
                sx: {
                  justifyContent: "center",
                  minWidth: 36,
                  color: "secondary.contrastText"
                }
              },
              icon ?? import_react3.default.createElement(ListOutlined_default, null)
            ),
            import_react3.default.createElement(
              ListItemText_default,
              {
                primary: label,
                primaryTypographyProps: {
                  noWrap: true,
                  fontSize: "14px",
                  fontWeight: isSelected ? "bold" : "normal"
                }
              }
            )
          )
        )
      );
    });
  }, "renderTreeView");
  const dashboard = hasDashboard ? import_react3.default.createElement(nc, { resource: "dashboard", action: "list" }, import_react3.default.createElement(
    Tooltip_default,
    {
      title: translate("dashboard.title", "Dashboard"),
      placement: "right",
      disableHoverListener: !collapsed,
      arrow: true
    },
    import_react3.default.createElement(
      ListItemButton_default,
      {
        component: ActiveLink,
        to: "/",
        selected: selectedKey === "/",
        onClick: () => {
          setOpened(false);
        },
        sx: {
          pl: 2,
          py: 1,
          "&.Mui-selected": {
            "&:hover": {
              backgroundColor: "transparent"
            },
            backgroundColor: "transparent"
          },
          justifyContent: "center"
        }
      },
      import_react3.default.createElement(
        ListItemIcon_default,
        {
          sx: {
            justifyContent: "center",
            minWidth: 36,
            color: "secondary.contrastText"
          }
        },
        import_react3.default.createElement(Dashboard_default, null)
      ),
      import_react3.default.createElement(
        ListItemText_default,
        {
          primary: translate("dashboard.title", "Dashboard"),
          primaryTypographyProps: {
            noWrap: true,
            fontSize: "14px",
            fontWeight: selectedKey === "/" ? "bold" : "normal"
          }
        }
      )
    )
  )) : null;
  const handleLogout = __name(() => {
    if (warnWhen) {
      const confirm = window.confirm(
        translate(
          "warnWhenUnsavedChanges",
          "Are you sure you want to leave? You have unsaved changes."
        )
      );
      if (confirm) {
        setWarnWhen(false);
        mutateLogout();
      }
    } else {
      mutateLogout();
    }
  }, "handleLogout");
  const logout = isExistAuthentication && import_react3.default.createElement(
    Tooltip_default,
    {
      title: t("buttons.logout", "Logout"),
      placement: "right",
      disableHoverListener: !collapsed,
      arrow: true
    },
    import_react3.default.createElement(
      ListItemButton_default,
      {
        key: "logout",
        onClick: handleLogout,
        sx: { justifyContent: "center" }
      },
      import_react3.default.createElement(
        ListItemIcon_default,
        {
          sx: {
            justifyContent: "center",
            minWidth: 36,
            color: "secondary.contrastText"
          }
        },
        import_react3.default.createElement(Logout_default, null)
      ),
      import_react3.default.createElement(
        ListItemText_default,
        {
          primary: t("buttons.logout", "Logout"),
          primaryTypographyProps: {
            noWrap: true,
            fontSize: "14px"
          }
        }
      )
    )
  );
  const items = renderTreeView(menuItems, selectedKey);
  const renderSider = __name(() => {
    if (render) {
      return render({
        dashboard,
        logout,
        items,
        collapsed
      });
    }
    return import_react3.default.createElement(import_react3.default.Fragment, null, dashboard, items, logout);
  }, "renderSider");
  const drawer = import_react3.default.createElement(List_default, { disablePadding: true, sx: { mt: 1, color: "secondary.contrastText" } }, renderSider());
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement(
    Box_default,
    {
      sx: {
        width: { xs: drawerWidth() },
        display: {
          xs: "none",
          md: "block"
        },
        transition: "width 0.3s ease"
      }
    }
  ), import_react3.default.createElement(
    Box_default,
    {
      component: "nav",
      sx: {
        position: "fixed",
        zIndex: 1101,
        width: { sm: drawerWidth() },
        display: "flex"
      }
    },
    import_react3.default.createElement(
      Drawer_default,
      {
        variant: "temporary",
        open: opened,
        onClose: () => setOpened(false),
        ModalProps: {
          keepMounted: true
          // Better open performance on mobile.
        },
        sx: {
          display: { sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 256,
            bgcolor: "secondary.main"
          }
        }
      },
      import_react3.default.createElement(
        Box_default,
        {
          sx: {
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        import_react3.default.createElement(RenderToTitle, { collapsed: false })
      ),
      drawer
    ),
    import_react3.default.createElement(
      Drawer_default,
      {
        variant: "permanent",
        PaperProps: { elevation: 1 },
        sx: {
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "secondary.main",
            overflow: "hidden",
            transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
          }
        },
        open: true
      },
      import_react3.default.createElement(
        Box_default,
        {
          sx: {
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        import_react3.default.createElement(RenderToTitle, { collapsed })
      ),
      import_react3.default.createElement(
        Box_default,
        {
          sx: {
            flexGrow: 1,
            overflowX: "hidden",
            overflowY: "auto"
          }
        },
        drawer
      ),
      import_react3.default.createElement(
        Button_default,
        {
          sx: {
            background: "rgba(0,0,0,.5)",
            color: "secondary.contrastText",
            textAlign: "center",
            borderRadius: 0,
            borderTop: "1px solid #ffffff1a"
          },
          fullWidth: true,
          size: "large",
          onClick: () => setCollapsed((prev) => !prev)
        },
        collapsed ? import_react3.default.createElement(ChevronRight_default, null) : import_react3.default.createElement(ChevronLeft_default, null)
      )
    ),
    import_react3.default.createElement(
      Box_default,
      {
        sx: {
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: "64px",
          left: "0px",
          borderRadius: "0 6px 6px 0",
          bgcolor: "secondary.main",
          zIndex: 1199,
          width: "36px"
        }
      },
      import_react3.default.createElement(
        IconButton_default,
        {
          sx: { color: "#fff", width: "36px" },
          onClick: () => setOpened((prev) => !prev)
        },
        import_react3.default.createElement(MenuRounded_default, null)
      )
    )
  ));
}, "Sider");
var Header = __name(() => {
  const authProvider = J();
  const { data: user } = $r({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const shouldRenderHeader = user && (user.name || user.avatar);
  return shouldRenderHeader ? import_react4.default.createElement(AppBar_default, { color: "default", position: "sticky", elevation: 1 }, import_react4.default.createElement(Toolbar_default, null, import_react4.default.createElement(
    Stack_default,
    {
      direction: "row",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    import_react4.default.createElement(
      Stack_default,
      {
        direction: "row",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center"
      },
      import_react4.default.createElement(Typography_default, { variant: "subtitle2" }, user == null ? void 0 : user.name),
      import_react4.default.createElement(Avatar_default, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name })
    )
  ))) : null;
}, "Header");
var Layout = __name(({
  Sider: Sider2,
  Header: Header2,
  Title: Title2,
  Footer,
  OffLayoutArea,
  children
}) => {
  const SiderToRender = Sider2 ?? Sider;
  const HeaderToRender = Header2 ?? Header;
  return import_react2.default.createElement(Box_default, { display: "flex", flexDirection: "row" }, import_react2.default.createElement(SiderToRender, { Title: Title2 }), import_react2.default.createElement(
    Box_default,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: "100vh"
      }
    },
    import_react2.default.createElement(HeaderToRender, null),
    import_react2.default.createElement(
      Box_default,
      {
        component: "main",
        sx: {
          p: { xs: 1, md: 2, lg: 3 },
          flexGrow: 1,
          bgcolor: (theme) => theme.palette.background.default
        }
      },
      children
    ),
    Footer && import_react2.default.createElement(Footer, null)
  ), OffLayoutArea && import_react2.default.createElement(OffLayoutArea, null));
}, "Layout");
var Title = __name(({ collapsed }) => {
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  return import_react5.default.createElement(Button_default, { fullWidth: true, variant: "text", disableRipple: true }, import_react5.default.createElement(ActiveLink, { to: "/" }, collapsed ? import_react5.default.createElement(
    "img",
    {
      src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg",
      alt: "Refine",
      width: "28px",
      style: { maxHeight: "38px" }
    }
  ) : import_react5.default.createElement(
    "img",
    {
      src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg",
      alt: "Refine",
      width: "140px"
    }
  )));
}, "Title");
var ThemedSider = __name(({
  Title: TitleFromProps,
  render,
  meta,
  isSiderOpen,
  onToggleSiderClick
}) => {
  const [opened, setOpened] = (0, import_react7.useState)(false);
  const drawerWidth = __name(() => {
    if (isSiderOpen)
      return 240;
    return 56;
  }, "drawerWidth");
  const t = G();
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  const { hasDashboard } = se();
  const translate = G();
  const { menuItems, selectedKey, defaultOpenKeys } = Cu({ meta });
  const isExistAuthentication = Jr();
  const TitleFromContext = Js();
  const authProvider = J();
  const { warnWhen, setWarnWhen } = pt();
  const { mutate: mutateLogout } = fr({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const [open, setOpen] = (0, import_react7.useState)({});
  import_react7.default.useEffect(() => {
    setOpen((previous) => {
      const previousKeys = Object.keys(previous);
      const previousOpenKeys = previousKeys.filter((key) => previous[key]);
      const uniqueKeys = /* @__PURE__ */ new Set([...previousOpenKeys, ...defaultOpenKeys]);
      const uniqueKeysRecord = Object.fromEntries(
        Array.from(uniqueKeys.values()).map((key) => [key, true])
      );
      return uniqueKeysRecord;
    });
  }, [defaultOpenKeys]);
  const RenderToTitle = TitleFromProps ?? TitleFromContext ?? ThemedTitle;
  const handleClick = __name((key) => {
    setOpen({ ...open, [key]: !open[key] });
  }, "handleClick");
  const renderTreeView = __name((tree, selectedKey2) => {
    return tree.map((item) => {
      const { icon, label, route, name, children, parentName, meta: meta2, options } = item;
      const isOpen = open[item.key || ""] || false;
      const isSelected = item.key === selectedKey2;
      const isNested = !(S(meta2 == null ? void 0 : meta2.parent, options == null ? void 0 : options.parent, parentName) === void 0);
      if (children.length > 0) {
        return import_react7.default.createElement(
          nc,
          {
            key: item.key,
            resource: name.toLowerCase(),
            action: "list",
            params: {
              resource: item
            }
          },
          import_react7.default.createElement("div", { key: item.key }, import_react7.default.createElement(
            Tooltip_default,
            {
              title: label ?? name,
              placement: "right",
              disableHoverListener: isSiderOpen,
              arrow: true
            },
            import_react7.default.createElement(
              ListItemButton_default,
              {
                onClick: () => {
                  if (!isSiderOpen) {
                    onToggleSiderClick == null ? void 0 : onToggleSiderClick(true);
                    if (!isOpen) {
                      handleClick(item.key || "");
                    }
                  } else {
                    handleClick(item.key || "");
                  }
                },
                sx: {
                  pl: isNested ? 4 : 2,
                  justifyContent: "center",
                  marginTop: "8px"
                }
              },
              import_react7.default.createElement(
                ListItemIcon_default,
                {
                  sx: {
                    justifyContent: "center",
                    minWidth: "24px",
                    transition: "margin-right 0.3s",
                    marginRight: isSiderOpen ? "12px" : "0px",
                    color: "currentColor"
                  }
                },
                icon ?? import_react7.default.createElement(ListOutlined_default, null)
              ),
              import_react7.default.createElement(
                ListItemText_default,
                {
                  primary: label,
                  primaryTypographyProps: {
                    noWrap: true,
                    fontSize: "14px"
                  }
                }
              ),
              isOpen ? import_react7.default.createElement(
                ExpandLess_default,
                {
                  sx: {
                    color: "text.icon"
                  }
                }
              ) : import_react7.default.createElement(
                ExpandMore_default,
                {
                  sx: {
                    color: "text.icon"
                  }
                }
              )
            )
          ), isSiderOpen && import_react7.default.createElement(
            Collapse_default,
            {
              in: open[item.key || ""],
              timeout: "auto",
              unmountOnExit: true
            },
            import_react7.default.createElement(List_default, { component: "div", disablePadding: true }, renderTreeView(children, selectedKey2))
          ))
        );
      }
      return import_react7.default.createElement(
        nc,
        {
          key: item.key,
          resource: name.toLowerCase(),
          action: "list",
          params: { resource: item }
        },
        import_react7.default.createElement(
          Tooltip_default,
          {
            title: label ?? name,
            placement: "right",
            disableHoverListener: isSiderOpen,
            arrow: true
          },
          import_react7.default.createElement(
            ListItemButton_default,
            {
              component: ActiveLink,
              to: route,
              selected: isSelected,
              onClick: () => {
                setOpened(false);
              },
              sx: {
                pl: isNested ? 4 : 2,
                py: isNested ? 1.25 : 1,
                justifyContent: "center",
                color: isSelected ? "primary.main" : "text.primary"
              }
            },
            import_react7.default.createElement(
              ListItemIcon_default,
              {
                sx: {
                  justifyContent: "center",
                  transition: "margin-right 0.3s",
                  marginRight: isSiderOpen ? "12px" : "0px",
                  minWidth: "24px",
                  color: "currentColor"
                }
              },
              icon ?? import_react7.default.createElement(ListOutlined_default, null)
            ),
            import_react7.default.createElement(
              ListItemText_default,
              {
                primary: label,
                primaryTypographyProps: {
                  noWrap: true,
                  fontSize: "14px"
                }
              }
            )
          )
        )
      );
    });
  }, "renderTreeView");
  const dashboard = hasDashboard ? import_react7.default.createElement(nc, { resource: "dashboard", action: "list" }, import_react7.default.createElement(
    Tooltip_default,
    {
      title: translate("dashboard.title", "Dashboard"),
      placement: "right",
      disableHoverListener: isSiderOpen,
      arrow: true
    },
    import_react7.default.createElement(
      ListItemButton_default,
      {
        component: ActiveLink,
        to: "/",
        selected: selectedKey === "/",
        onClick: () => {
          setOpened(false);
        },
        sx: {
          pl: 2,
          py: 1,
          justifyContent: "center",
          color: selectedKey === "/" ? "primary.main" : "text.primary"
        }
      },
      import_react7.default.createElement(
        ListItemIcon_default,
        {
          sx: {
            justifyContent: "center",
            minWidth: "24px",
            transition: "margin-right 0.3s",
            marginRight: isSiderOpen ? "12px" : "0px",
            color: "currentColor",
            fontSize: "14px"
          }
        },
        import_react7.default.createElement(Dashboard_default, null)
      ),
      import_react7.default.createElement(
        ListItemText_default,
        {
          primary: translate("dashboard.title", "Dashboard"),
          primaryTypographyProps: {
            noWrap: true,
            fontSize: "14px"
          }
        }
      )
    )
  )) : null;
  const handleLogout = __name(() => {
    if (warnWhen) {
      const confirm = window.confirm(
        t(
          "warnWhenUnsavedChanges",
          "Are you sure you want to leave? You have unsaved changes."
        )
      );
      if (confirm) {
        setWarnWhen(false);
        mutateLogout();
      }
    } else {
      mutateLogout();
    }
  }, "handleLogout");
  const logout = isExistAuthentication && import_react7.default.createElement(
    Tooltip_default,
    {
      title: t("buttons.logout", "Logout"),
      placement: "right",
      disableHoverListener: isSiderOpen,
      arrow: true
    },
    import_react7.default.createElement(
      ListItemButton_default,
      {
        key: "logout",
        onClick: () => handleLogout(),
        sx: {
          justifyContent: "center"
        }
      },
      import_react7.default.createElement(
        ListItemIcon_default,
        {
          sx: {
            justifyContent: "center",
            minWidth: "24px",
            transition: "margin-right 0.3s",
            marginRight: isSiderOpen ? "12px" : "0px",
            marginLeft: "2px",
            color: "currentColor"
          }
        },
        import_react7.default.createElement(Logout_default, null)
      ),
      import_react7.default.createElement(
        ListItemText_default,
        {
          primary: t("buttons.logout", "Logout"),
          primaryTypographyProps: {
            noWrap: true,
            fontSize: "14px"
          }
        }
      )
    )
  );
  const items = renderTreeView(menuItems, selectedKey);
  const renderSider = __name(() => {
    if (render) {
      return render({
        dashboard,
        logout,
        items,
        collapsed: !isSiderOpen
      });
    }
    return import_react7.default.createElement(import_react7.default.Fragment, null, dashboard, items, logout);
  }, "renderSider");
  const drawer = import_react7.default.createElement(
    List_default,
    {
      disablePadding: true,
      sx: {
        flexGrow: 1,
        paddingTop: "16px"
      }
    },
    renderSider()
  );
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement(
    Box_default,
    {
      sx: {
        width: { xs: drawerWidth() },
        display: {
          xs: "none",
          md: "block"
        },
        transition: "width 0.3s ease"
      }
    }
  ), import_react7.default.createElement(
    Box_default,
    {
      component: "nav",
      sx: {
        position: "fixed",
        zIndex: 1101,
        width: { sm: drawerWidth() },
        display: "flex"
      }
    },
    import_react7.default.createElement(
      Drawer_default,
      {
        variant: "temporary",
        elevation: 2,
        open: opened,
        onClose: () => setOpened(false),
        ModalProps: {
          keepMounted: true
          // Better open performance on mobile.
        },
        sx: {
          display: {
            sm: "block",
            md: "none"
          }
        }
      },
      import_react7.default.createElement(
        Box_default,
        {
          sx: {
            width: drawerWidth()
          }
        },
        import_react7.default.createElement(
          Box_default,
          {
            sx: {
              height: 64,
              display: "flex",
              alignItems: "center",
              paddingLeft: "16px",
              fontSize: "14px"
            }
          },
          import_react7.default.createElement(RenderToTitle, { collapsed: false })
        ),
        drawer
      )
    ),
    import_react7.default.createElement(
      Drawer_default,
      {
        variant: "permanent",
        sx: {
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            overflow: "hidden",
            transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
          }
        },
        open: true
      },
      import_react7.default.createElement(
        Paper_default,
        {
          elevation: 0,
          sx: {
            fontSize: "14px",
            width: "100%",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: !isSiderOpen ? "center" : "space-between",
            paddingLeft: !isSiderOpen ? 0 : "16px",
            paddingRight: !isSiderOpen ? 0 : "8px",
            variant: "outlined",
            borderRadius: 0,
            borderBottom: (theme) => `1px solid ${theme.palette.action.focus}`
          }
        },
        import_react7.default.createElement(RenderToTitle, { collapsed: !isSiderOpen }),
        isSiderOpen && import_react7.default.createElement(
          IconButton_default,
          {
            size: "small",
            onClick: () => onToggleSiderClick == null ? void 0 : onToggleSiderClick(false)
          },
          import_react7.default.createElement(ChevronLeft_default, null)
        )
      ),
      import_react7.default.createElement(
        Box_default,
        {
          sx: {
            flexGrow: 1,
            overflowX: "hidden",
            overflowY: "auto"
          }
        },
        drawer
      )
    ),
    import_react7.default.createElement(
      IconButton_default,
      {
        sx: (theme) => {
          const { palette } = theme;
          const { mode, getContrastText, primary, background } = palette;
          return {
            color: mode === "light" ? getContrastText(primary.main) : getContrastText(background.paper),
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "12px",
            left: "16px",
            zIndex: 1199,
            height: "36px",
            width: "36px"
          };
        },
        onClick: () => setOpened((prev) => !prev)
      },
      import_react7.default.createElement(MenuRounded_default, null)
    )
  ));
}, "ThemedSider");
var ThemedHeader = __name(({
  isSiderOpen,
  onToggleSiderClick,
  toggleSiderIcon: toggleSiderIconFromProps
}) => {
  const authProvider = J();
  const { data: user } = $r({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const hasSidebarToggle = Boolean(onToggleSiderClick);
  return import_react8.default.createElement(AppBar_default, { position: "sticky" }, import_react8.default.createElement(Toolbar_default, null, hasSidebarToggle && import_react8.default.createElement(
    IconButton_default,
    {
      color: "inherit",
      "aria-label": "open drawer",
      onClick: () => onToggleSiderClick == null ? void 0 : onToggleSiderClick(),
      edge: "start",
      sx: {
        mr: 2,
        display: { xs: "none", md: "flex" },
        ...isSiderOpen && { display: "none" }
      }
    },
    (toggleSiderIconFromProps == null ? void 0 : toggleSiderIconFromProps(Boolean(isSiderOpen))) ?? import_react8.default.createElement(Menu_default, null)
  ), import_react8.default.createElement(
    Stack_default,
    {
      direction: "row",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    import_react8.default.createElement(
      Stack_default,
      {
        direction: "row",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center"
      },
      import_react8.default.createElement(
        Typography_default,
        {
          sx: {
            display: { xs: "none", md: "block" }
          },
          variant: "subtitle2"
        },
        user == null ? void 0 : user.name
      ),
      import_react8.default.createElement(Avatar_default, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name })
    )
  )));
}, "ThemedHeader");
var ThemedLayout = __name(({
  Sider: Sider2,
  Header: Header2,
  Title: Title2,
  Footer,
  OffLayoutArea,
  children
}) => {
  const [isSiderOpen, setIsSiderOpen] = (0, import_react6.useState)(true);
  const SiderToRender = Sider2 ?? ThemedSider;
  const HeaderToRender = Header2 ?? ThemedHeader;
  return import_react6.default.createElement(Box_default, { display: "flex", flexDirection: "row" }, import_react6.default.createElement(
    SiderToRender,
    {
      Title: Title2,
      isSiderOpen,
      onToggleSiderClick: (isOpen) => setIsSiderOpen(Boolean(isOpen))
    }
  ), import_react6.default.createElement(
    Box_default,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: "100vh"
      }
    },
    import_react6.default.createElement(
      HeaderToRender,
      {
        isSiderOpen,
        onToggleSiderClick: () => setIsSiderOpen((prev) => !prev)
      }
    ),
    import_react6.default.createElement(
      Box_default,
      {
        component: "main",
        sx: {
          p: { xs: 1, md: 2, lg: 3 },
          flexGrow: 1,
          bgcolor: (theme) => theme.palette.background.default
        }
      },
      children
    ),
    Footer && import_react6.default.createElement(Footer, null)
  ), OffLayoutArea && import_react6.default.createElement(OffLayoutArea, null));
}, "ThemedLayout");
var defaultText = "Refine Project";
var defaultIcon = import_react9.default.createElement(
  "svg",
  {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react9.default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.7889 0.422291C12.6627 -0.140764 11.3373 -0.140764 10.2111 0.422291L2.21115 4.42229C0.85601 5.09986 0 6.48491 0 8V16C0 17.5151 0.85601 18.9001 2.21115 19.5777L10.2111 23.5777C11.3373 24.1408 12.6627 24.1408 13.7889 23.5777L21.7889 19.5777C23.144 18.9001 24 17.5151 24 16V8C24 6.48491 23.144 5.09986 21.7889 4.42229L13.7889 0.422291ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8Z",
      fill: "currentColor"
    }
  ),
  import_react9.default.createElement(
    "path",
    {
      d: "M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z",
      fill: "currentColor"
    }
  )
);
var ThemedTitle = __name(({
  collapsed,
  wrapperStyles,
  icon = defaultIcon,
  text = defaultText
}) => {
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  return import_react9.default.createElement(
    Link_default,
    {
      to: "/",
      component: ActiveLink,
      underline: "none",
      sx: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles
      }
    },
    import_react9.default.createElement(SvgIcon_default, { height: "24px", width: "24px", color: "primary" }, icon),
    !collapsed && import_react9.default.createElement(
      Typography_default,
      {
        variant: "h6",
        fontWeight: 700,
        color: "text.primary",
        fontSize: "inherit",
        textOverflow: "ellipsis",
        overflow: "hidden"
      },
      text
    )
  );
}, "ThemedTitle");
var ThemedLayoutContext = import_react11.default.createContext({
  siderCollapsed: false,
  mobileSiderOpen: false,
  setSiderCollapsed: () => void 0,
  setMobileSiderOpen: () => void 0
});
var ThemedLayoutContextProvider = __name(({ children, initialSiderCollapsed }) => {
  const [siderCollapsed, setSiderCollapsed] = (0, import_react11.useState)(
    initialSiderCollapsed ?? false
  );
  const [mobileSiderOpen, setMobileSiderOpen] = (0, import_react11.useState)(false);
  return import_react11.default.createElement(
    ThemedLayoutContext.Provider,
    {
      value: {
        siderCollapsed,
        mobileSiderOpen,
        setSiderCollapsed,
        setMobileSiderOpen
      }
    },
    children
  );
}, "ThemedLayoutContextProvider");
var useAutocomplete = __name((props) => {
  var _a, _b;
  const { queryResult, defaultValueQueryResult, onSearch, overtime } = XC(props);
  return {
    autocompleteProps: {
      options: unionWith_default(
        ((_a = queryResult.data) == null ? void 0 : _a.data) || [],
        ((_b = defaultValueQueryResult.data) == null ? void 0 : _b.data) || [],
        isEqual_default
      ),
      loading: queryResult.isFetching || defaultValueQueryResult.isFetching,
      onInputChange: (event, value) => {
        if ((event == null ? void 0 : event.type) === "change") {
          onSearch(value);
        } else if ((event == null ? void 0 : event.type) === "click") {
          onSearch("");
        }
      },
      filterOptions: (x) => x
    },
    onSearch,
    queryResult,
    defaultValueQueryResult,
    overtime
  };
}, "useAutocomplete");
var transformSortModelToCrudSorting = __name((sortModel) => {
  const sorter = sortModel.map(({ field, sort }) => ({
    field,
    order: sort || "asc"
  }));
  return sorter;
}, "transformSortModelToCrudSorting");
var transformCrudSortingToSortModel = __name((crudSorting) => {
  const sortModel = crudSorting.map(({ field, order }) => ({
    field,
    sort: order
  }));
  return sortModel;
}, "transformCrudSortingToSortModel");
var transformMuiOperatorToCrudOperator = __name((operatorValue) => {
  if (!operatorValue) {
    return "eq";
  }
  switch (operatorValue) {
    case "equals":
    case "is":
    case "=":
      return "eq";
    case "!=":
    case "not":
      return "ne";
    case "contains":
      return "contains";
    case "isAnyOf":
      return "in";
    case ">":
    case "after":
      return "gt";
    case ">=":
    case "onOrAfter":
      return "gte";
    case "<":
    case "before":
      return "lt";
    case "<=":
    case "onOrBefore":
      return "lte";
    case "startsWith":
      return "startswith";
    case "endsWith":
      return "endswith";
    case "isEmpty":
      return "null";
    case "isNotEmpty":
      return "nnull";
    default:
      return operatorValue;
  }
}, "transformMuiOperatorToCrudOperator");
var transformFilterModelToCrudFilters = __name(({
  items,
  logicOperator
}) => {
  const filters = items.map(({ field, value, operator }) => {
    return {
      field,
      value: ["isEmpty", "isNotEmpty"].includes(operator) ? true : value ?? "",
      operator: transformMuiOperatorToCrudOperator(operator)
    };
  });
  if (logicOperator === GridLogicOperator.Or) {
    return [{ operator: "or", value: filters }];
  }
  return filters;
}, "transformFilterModelToCrudFilters");
var transformCrudOperatorToMuiOperator = __name((operator, columnType) => {
  switch (columnType) {
    case "number":
      switch (operator) {
        case "eq":
          return "=";
        case "ne":
          return "!=";
        case "gt":
          return ">";
        case "gte":
          return ">=";
        case "lt":
          return "<";
        case "lte":
          return "<=";
        case "null":
          return "isEmpty";
        case "nnull":
          return "isNotEmpty";
        case "in":
          return "isAnyOf";
        default:
          return operator;
      }
    case "singleSelect":
    case "boolean":
      switch (operator) {
        case "eq":
          return "is";
        default:
          return operator;
      }
    case void 0:
    case "string":
      switch (operator) {
        case "eq":
          return "equals";
        case "contains":
          return "contains";
        case "null":
          return "isEmpty";
        case "nnull":
          return "isNotEmpty";
        case "startswith":
          return "startsWith";
        case "endswith":
          return "endsWith";
        case "in":
          return "isAnyOf";
        default:
          return operator;
      }
    case "date":
    case "dateTime":
      switch (operator) {
        case "eq":
          return "is";
        case "ne":
          return "not";
        case "gt":
          return "after";
        case "gte":
          return "onOrAfter";
        case "lt":
          return "before";
        case "lte":
          return "onOrBefore";
        case "null":
          return "isEmpty";
        case "nnull":
          return "isNotEmpty";
        default:
          return operator;
      }
    default:
      return operator;
  }
}, "transformCrudOperatorToMuiOperator");
var transformCrudFiltersToFilterModel = __name((crudFilters, columnsType) => {
  var _a;
  const gridFilterItems = [];
  const isExistOrFilter = crudFilters.some(
    (filter) => filter.operator === "or"
  );
  if (columnsType) {
    if (isExistOrFilter) {
      const orLogicalFilters = (_a = crudFilters.find(
        (filter) => filter.operator === "or"
      )) == null ? void 0 : _a.value;
      orLogicalFilters.map(({ field, value, operator }) => {
        const columnType = columnsType[field];
        gridFilterItems.push({
          field,
          operator: transformCrudOperatorToMuiOperator(operator, columnType),
          value: value === "" ? void 0 : value,
          id: field + operator
        });
      });
    } else {
      crudFilters.map(({ field, value, operator }) => {
        const columnType = columnsType[field];
        gridFilterItems.push({
          field,
          operator: transformCrudOperatorToMuiOperator(operator, columnType),
          value: value === "" ? void 0 : value,
          id: field + operator
        });
      });
    }
  }
  return {
    items: gridFilterItems,
    // If there is "or" filter, default link operator is "or"
    logicOperator: isExistOrFilter ? GridLogicOperator.Or : GridLogicOperator.And
  };
}, "transformCrudFiltersToFilterModel");
function useDataGrid({
  onSearch: onSearchProp,
  initialCurrent,
  initialPageSize = 25,
  pagination,
  hasPagination = true,
  initialSorter,
  permanentSorter,
  defaultSetFilterBehavior = "replace",
  initialFilter,
  permanentFilter,
  filters: filtersFromProp,
  sorters: sortersFromProp,
  syncWithLocation: syncWithLocationProp,
  resource: resourceFromProp,
  successNotification,
  errorNotification,
  queryOptions,
  liveMode: liveModeFromProp,
  onLiveEvent,
  liveParams,
  meta,
  metaData,
  dataProviderName,
  overtimeOptions
} = {}) {
  const theme = useTheme();
  const liveMode = Bn(liveModeFromProp);
  const [columnsTypes, setColumnsType] = (0, import_react13.useState)();
  const {
    tableQueryResult,
    current,
    setCurrent,
    pageSize,
    setPageSize,
    filters,
    setFilters,
    sorters,
    setSorters,
    sorter,
    setSorter,
    pageCount,
    createLinkForSyncWithLocation,
    overtime
  } = cb({
    permanentSorter,
    permanentFilter,
    initialCurrent,
    initialPageSize,
    pagination,
    hasPagination,
    initialSorter,
    initialFilter,
    filters: filtersFromProp,
    sorters: sortersFromProp,
    syncWithLocation: syncWithLocationProp,
    defaultSetFilterBehavior,
    resource: resourceFromProp,
    successNotification,
    errorNotification,
    queryOptions,
    liveMode: liveModeFromProp,
    onLiveEvent,
    liveParams,
    meta: S(meta, metaData),
    metaData: S(meta, metaData),
    dataProviderName,
    overtimeOptions
  });
  const [muiCrudFilters, setMuiCrudFilters] = (0, import_react13.useState)(filters);
  const { data, isFetched, isLoading } = tableQueryResult;
  const isServerSideFilteringEnabled = ((filtersFromProp == null ? void 0 : filtersFromProp.mode) || "server") === "server";
  const isServerSideSortingEnabled = ((sortersFromProp == null ? void 0 : sortersFromProp.mode) || "server") === "server";
  const hasPaginationString = hasPagination === false ? "off" : "server";
  const isPaginationEnabled = ((pagination == null ? void 0 : pagination.mode) ?? hasPaginationString) !== "off";
  const preferredPermanentSorters = S(sortersFromProp == null ? void 0 : sortersFromProp.permanent, permanentSorter) ?? [];
  const preferredPermanentFilters = S(filtersFromProp == null ? void 0 : filtersFromProp.permanent, permanentFilter) ?? [];
  const handlePageChange = __name((page) => {
    if (isPaginationEnabled) {
      setCurrent(page + 1);
    }
  }, "handlePageChange");
  const handlePageSizeChange = __name((pageSize2) => {
    if (isPaginationEnabled) {
      setPageSize(pageSize2);
    }
  }, "handlePageSizeChange");
  const handleSortModelChange = __name((sortModel) => {
    const crudSorting = transformSortModelToCrudSorting(sortModel);
    setSorters(crudSorting);
  }, "handleSortModelChange");
  const handleFilterModelChange = __name((filterModel) => {
    const crudFilters = transformFilterModelToCrudFilters(filterModel);
    setMuiCrudFilters(crudFilters);
    setFilters(crudFilters.filter((f) => f.value !== ""));
    if (isPaginationEnabled) {
      setCurrent(1);
    }
  }, "handleFilterModelChange");
  const search = __name(async (value) => {
    if (onSearchProp) {
      const searchFilters = await onSearchProp(value);
      setMuiCrudFilters(searchFilters);
      setFilters(searchFilters.filter((f) => f.value !== ""));
      if (isPaginationEnabled) {
        setCurrent(1);
      }
    }
  }, "search");
  const dataGridPaginationValues = __name(() => {
    if (isPaginationEnabled) {
      return {
        paginationMode: "server",
        paginationModel: {
          page: current - 1,
          pageSize
        },
        onPaginationModelChange: (model) => {
          handlePageChange(model.page);
          handlePageSizeChange(model.pageSize);
        }
      };
    }
    return {
      paginationMode: "client"
    };
  }, "dataGridPaginationValues");
  return {
    tableQueryResult,
    dataGridProps: {
      disableRowSelectionOnClick: true,
      rows: (data == null ? void 0 : data.data) || [],
      loading: liveMode === "auto" ? isLoading : !isFetched,
      rowCount: (data == null ? void 0 : data.total) || 0,
      ...dataGridPaginationValues(),
      sortingMode: isServerSideSortingEnabled ? "server" : "client",
      sortModel: transformCrudSortingToSortModel(
        differenceWith_default(sorters, preferredPermanentSorters, isEqual_default)
      ),
      onSortModelChange: handleSortModelChange,
      filterMode: isServerSideFilteringEnabled ? "server" : "client",
      filterModel: transformCrudFiltersToFilterModel(
        differenceWith_default(muiCrudFilters, preferredPermanentFilters, isEqual_default),
        columnsTypes
      ),
      onFilterModelChange: handleFilterModelChange,
      onStateChange: (state) => {
        const newColumnsTypes = Object.fromEntries(
          Object.entries(state.columns.lookup).map(([key, value]) => {
            return [key, value.type];
          })
        );
        const isStateChanged = !isEqual_default(newColumnsTypes, columnsTypes);
        if (isStateChanged) {
          setColumnsType(newColumnsTypes);
        }
      },
      sx: {
        border: "none",
        "& .MuiDataGrid-columnHeaders": {
          background: darken(theme.palette.background.paper, 0.05),
          borderBottom: `1px solid ${darken(
            theme.palette.background.paper,
            0.1
          )}`
        },
        "& .MuiDataGrid-cell": {
          borderBottom: `1px solid ${darken(
            theme.palette.background.paper,
            0.05
          )}`
        }
      }
    },
    current,
    setCurrent,
    pageSize,
    setPageSize,
    pageCount,
    sorters,
    setSorters,
    sorter,
    setSorter,
    filters,
    setFilters,
    search,
    createLinkForSyncWithLocation,
    overtime
  };
}
__name(useDataGrid, "useDataGrid");
var useSiderVisible = __name(() => {
  const {
    mobileSiderOpen,
    siderCollapsed,
    setMobileSiderOpen,
    setSiderCollapsed
  } = (0, import_react14.useContext)(ThemedLayoutContext);
  return {
    siderVisible: mobileSiderOpen,
    setSiderVisible: setMobileSiderOpen,
    drawerSiderVisible: !siderCollapsed,
    setDrawerSiderVisible: (visible) => setSiderCollapsed(!visible)
  };
}, "useSiderVisible");
var useThemedLayoutContext = __name(() => {
  const {
    mobileSiderOpen,
    siderCollapsed,
    setMobileSiderOpen,
    setSiderCollapsed
  } = (0, import_react15.useContext)(ThemedLayoutContext);
  return {
    mobileSiderOpen,
    siderCollapsed,
    setMobileSiderOpen,
    setSiderCollapsed
  };
}, "useThemedLayoutContext");
var ThemedSiderV2 = __name(({
  Title: TitleFromProps,
  render,
  meta,
  activeItemDisabled = false
}) => {
  const {
    siderCollapsed,
    setSiderCollapsed,
    mobileSiderOpen,
    setMobileSiderOpen
  } = useThemedLayoutContext();
  const drawerWidth = __name(() => {
    if (siderCollapsed)
      return 56;
    return 240;
  }, "drawerWidth");
  const t = G();
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  const { hasDashboard } = se();
  const translate = G();
  const { menuItems, selectedKey, defaultOpenKeys } = Cu({ meta });
  const isExistAuthentication = Jr();
  const TitleFromContext = Js();
  const authProvider = J();
  const { warnWhen, setWarnWhen } = pt();
  const { mutate: mutateLogout } = fr({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const [open, setOpen] = (0, import_react12.useState)({});
  import_react12.default.useEffect(() => {
    setOpen((previous) => {
      const previousKeys = Object.keys(previous);
      const previousOpenKeys = previousKeys.filter((key) => previous[key]);
      const uniqueKeys = /* @__PURE__ */ new Set([...previousOpenKeys, ...defaultOpenKeys]);
      const uniqueKeysRecord = Object.fromEntries(
        Array.from(uniqueKeys.values()).map((key) => [key, true])
      );
      return uniqueKeysRecord;
    });
  }, [defaultOpenKeys]);
  const RenderToTitle = TitleFromProps ?? TitleFromContext ?? ThemedTitleV2;
  const handleClick = __name((key) => {
    setOpen({ ...open, [key]: !open[key] });
  }, "handleClick");
  const renderTreeView = __name((tree, selectedKey2) => {
    return tree.map((item) => {
      const { icon, label, route, name, children, parentName, meta: meta2, options } = item;
      const isOpen = open[item.key || ""] || false;
      const isSelected = item.key === selectedKey2;
      const isNested = !(S(meta2 == null ? void 0 : meta2.parent, options == null ? void 0 : options.parent, parentName) === void 0);
      if (children.length > 0) {
        return import_react12.default.createElement(
          nc,
          {
            key: item.key,
            resource: name.toLowerCase(),
            action: "list",
            params: {
              resource: item
            }
          },
          import_react12.default.createElement("div", { key: item.key }, import_react12.default.createElement(
            Tooltip_default,
            {
              title: label ?? name,
              placement: "right",
              disableHoverListener: !siderCollapsed,
              arrow: true
            },
            import_react12.default.createElement(
              ListItemButton_default,
              {
                onClick: () => {
                  if (siderCollapsed) {
                    setSiderCollapsed(false);
                    if (!isOpen) {
                      handleClick(item.key || "");
                    }
                  } else {
                    handleClick(item.key || "");
                  }
                },
                sx: {
                  pl: isNested ? 4 : 2,
                  justifyContent: "center"
                }
              },
              import_react12.default.createElement(
                ListItemIcon_default,
                {
                  sx: {
                    justifyContent: "center",
                    minWidth: "24px",
                    transition: "margin-right 0.3s",
                    marginRight: siderCollapsed ? "0px" : "12px",
                    color: "currentColor"
                  }
                },
                icon ?? import_react12.default.createElement(ListOutlined_default, null)
              ),
              import_react12.default.createElement(
                ListItemText_default,
                {
                  primary: label,
                  primaryTypographyProps: {
                    noWrap: true,
                    fontSize: "14px"
                  }
                }
              ),
              isOpen ? import_react12.default.createElement(
                ExpandLess_default,
                {
                  sx: {
                    color: "text.icon"
                  }
                }
              ) : import_react12.default.createElement(
                ExpandMore_default,
                {
                  sx: {
                    color: "text.icon"
                  }
                }
              )
            )
          ), !siderCollapsed && import_react12.default.createElement(
            Collapse_default,
            {
              in: open[item.key || ""],
              timeout: "auto",
              unmountOnExit: true
            },
            import_react12.default.createElement(List_default, { component: "div", disablePadding: true }, renderTreeView(children, selectedKey2))
          ))
        );
      }
      const linkStyle = activeItemDisabled && isSelected ? { pointerEvents: "none" } : {};
      return import_react12.default.createElement(
        nc,
        {
          key: item.key,
          resource: name.toLowerCase(),
          action: "list",
          params: { resource: item }
        },
        import_react12.default.createElement(
          Tooltip_default,
          {
            title: label ?? name,
            placement: "right",
            disableHoverListener: !siderCollapsed,
            arrow: true
          },
          import_react12.default.createElement(
            ListItemButton_default,
            {
              component: ActiveLink,
              to: route,
              selected: isSelected,
              style: linkStyle,
              onClick: () => {
                setMobileSiderOpen(false);
              },
              sx: {
                pl: isNested ? 4 : 2,
                py: isNested ? 1.25 : 1,
                justifyContent: "center",
                color: isSelected ? "primary.main" : "text.primary"
              }
            },
            import_react12.default.createElement(
              ListItemIcon_default,
              {
                sx: {
                  justifyContent: "center",
                  transition: "margin-right 0.3s",
                  marginRight: siderCollapsed ? "0px" : "12px",
                  minWidth: "24px",
                  color: "currentColor"
                }
              },
              icon ?? import_react12.default.createElement(ListOutlined_default, null)
            ),
            import_react12.default.createElement(
              ListItemText_default,
              {
                primary: label,
                primaryTypographyProps: {
                  noWrap: true,
                  fontSize: "14px"
                }
              }
            )
          )
        )
      );
    });
  }, "renderTreeView");
  const dashboard = hasDashboard ? import_react12.default.createElement(nc, { resource: "dashboard", action: "list" }, import_react12.default.createElement(
    Tooltip_default,
    {
      title: translate("dashboard.title", "Dashboard"),
      placement: "right",
      disableHoverListener: !siderCollapsed,
      arrow: true
    },
    import_react12.default.createElement(
      ListItemButton_default,
      {
        component: ActiveLink,
        to: "/",
        selected: selectedKey === "/",
        onClick: () => {
          setMobileSiderOpen(false);
        },
        sx: {
          pl: 2,
          py: 1,
          justifyContent: "center",
          color: selectedKey === "/" ? "primary.main" : "text.primary"
        }
      },
      import_react12.default.createElement(
        ListItemIcon_default,
        {
          sx: {
            justifyContent: "center",
            minWidth: "24px",
            transition: "margin-right 0.3s",
            marginRight: siderCollapsed ? "0px" : "12px",
            color: "currentColor",
            fontSize: "14px"
          }
        },
        import_react12.default.createElement(Dashboard_default, null)
      ),
      import_react12.default.createElement(
        ListItemText_default,
        {
          primary: translate("dashboard.title", "Dashboard"),
          primaryTypographyProps: {
            noWrap: true,
            fontSize: "14px"
          }
        }
      )
    )
  )) : null;
  const handleLogout = __name(() => {
    if (warnWhen) {
      const confirm = window.confirm(
        t(
          "warnWhenUnsavedChanges",
          "Are you sure you want to leave? You have unsaved changes."
        )
      );
      if (confirm) {
        setWarnWhen(false);
        mutateLogout();
      }
    } else {
      mutateLogout();
    }
  }, "handleLogout");
  const logout = isExistAuthentication && import_react12.default.createElement(
    Tooltip_default,
    {
      title: t("buttons.logout", "Logout"),
      placement: "right",
      disableHoverListener: !siderCollapsed,
      arrow: true
    },
    import_react12.default.createElement(
      ListItemButton_default,
      {
        key: "logout",
        onClick: () => handleLogout(),
        sx: {
          justifyContent: "center"
        }
      },
      import_react12.default.createElement(
        ListItemIcon_default,
        {
          sx: {
            justifyContent: "center",
            minWidth: "24px",
            transition: "margin-right 0.3s",
            marginRight: siderCollapsed ? "0px" : "12px",
            color: "currentColor"
          }
        },
        import_react12.default.createElement(Logout_default, null)
      ),
      import_react12.default.createElement(
        ListItemText_default,
        {
          primary: t("buttons.logout", "Logout"),
          primaryTypographyProps: {
            noWrap: true,
            fontSize: "14px"
          }
        }
      )
    )
  );
  const items = renderTreeView(menuItems, selectedKey);
  const renderSider = __name(() => {
    if (render) {
      return render({
        dashboard,
        logout,
        items,
        collapsed: siderCollapsed
      });
    }
    return import_react12.default.createElement(import_react12.default.Fragment, null, dashboard, items, logout);
  }, "renderSider");
  const drawer = import_react12.default.createElement(
    List_default,
    {
      disablePadding: true,
      sx: {
        flexGrow: 1,
        paddingTop: "16px"
      }
    },
    renderSider()
  );
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement(
    Box_default,
    {
      sx: {
        width: { xs: drawerWidth() },
        display: {
          xs: "none",
          md: "block"
        },
        transition: "width 0.3s ease"
      }
    }
  ), import_react12.default.createElement(
    Box_default,
    {
      component: "nav",
      sx: {
        position: "fixed",
        zIndex: 1101,
        width: { sm: drawerWidth() },
        display: "flex"
      }
    },
    import_react12.default.createElement(
      Drawer_default,
      {
        variant: "temporary",
        elevation: 2,
        open: mobileSiderOpen,
        onClose: () => setMobileSiderOpen(false),
        ModalProps: {
          keepMounted: true
          // Better open performance on mobile.
        },
        sx: {
          display: {
            sm: "block",
            md: "none"
          }
        }
      },
      import_react12.default.createElement(
        Box_default,
        {
          sx: {
            width: drawerWidth()
          }
        },
        import_react12.default.createElement(
          Box_default,
          {
            sx: {
              height: 64,
              display: "flex",
              alignItems: "center",
              paddingLeft: "16px",
              fontSize: "14px"
            }
          },
          import_react12.default.createElement(RenderToTitle, { collapsed: false })
        ),
        drawer
      )
    ),
    import_react12.default.createElement(
      Drawer_default,
      {
        variant: "permanent",
        sx: {
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth(),
            overflow: "hidden",
            transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
          }
        },
        open: true
      },
      import_react12.default.createElement(
        Paper_default,
        {
          elevation: 0,
          sx: {
            fontSize: "14px",
            width: "100%",
            height: 64,
            display: "flex",
            flexShrink: 0,
            alignItems: "center",
            justifyContent: siderCollapsed ? "center" : "space-between",
            paddingLeft: siderCollapsed ? 0 : "16px",
            paddingRight: siderCollapsed ? 0 : "8px",
            variant: "outlined",
            borderRadius: 0,
            borderBottom: (theme) => `1px solid ${theme.palette.action.focus}`
          }
        },
        import_react12.default.createElement(RenderToTitle, { collapsed: siderCollapsed }),
        !siderCollapsed && import_react12.default.createElement(IconButton_default, { size: "small", onClick: () => setSiderCollapsed(true) }, import_react12.default.createElement(ChevronLeft_default, null))
      ),
      import_react12.default.createElement(
        Box_default,
        {
          sx: {
            flexGrow: 1,
            overflowX: "hidden",
            overflowY: "auto"
          }
        },
        drawer
      )
    )
  ));
}, "ThemedSiderV2");
var HamburgerIcon = __name((props) => import_react17.default.createElement(IconButton_default, { color: "inherit", "aria-label": "open drawer", edge: "start", ...props }, import_react17.default.createElement(Menu_default, null)), "HamburgerIcon");
var HamburgerMenu = __name(() => {
  const {
    siderCollapsed,
    setSiderCollapsed,
    mobileSiderOpen,
    setMobileSiderOpen
  } = useThemedLayoutContext();
  return import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement(
    HamburgerIcon,
    {
      onClick: () => setSiderCollapsed(!siderCollapsed),
      sx: {
        mr: 2,
        display: { xs: "none", md: "flex" },
        ...!siderCollapsed && { display: "none" }
      }
    }
  ), import_react17.default.createElement(
    HamburgerIcon,
    {
      onClick: () => setMobileSiderOpen(!mobileSiderOpen),
      sx: {
        mr: 2,
        display: { xs: "flex", md: "none" },
        ...mobileSiderOpen && { display: "none" }
      }
    }
  ));
}, "HamburgerMenu");
var ThemedHeaderV2 = __name(({
  isSticky,
  sticky
}) => {
  const authProvider = J();
  const { data: user } = $r({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const prefferedSticky = S(sticky, isSticky) ?? true;
  return import_react16.default.createElement(AppBar_default, { position: prefferedSticky ? "sticky" : "relative" }, import_react16.default.createElement(Toolbar_default, null, import_react16.default.createElement(HamburgerMenu, null), import_react16.default.createElement(
    Stack_default,
    {
      direction: "row",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    import_react16.default.createElement(
      Stack_default,
      {
        direction: "row",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center"
      },
      (user == null ? void 0 : user.name) && import_react16.default.createElement(Typography_default, { variant: "subtitle2" }, user == null ? void 0 : user.name),
      (user == null ? void 0 : user.avatar) && import_react16.default.createElement(Avatar_default, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name })
    )
  )));
}, "ThemedHeaderV2");
var ThemedLayoutV2 = __name(({
  Sider: Sider2,
  Header: Header2,
  Title: Title2,
  Footer,
  OffLayoutArea,
  children,
  initialSiderCollapsed
}) => {
  const SiderToRender = Sider2 ?? ThemedSiderV2;
  const HeaderToRender = Header2 ?? ThemedHeaderV2;
  return import_react10.default.createElement(ThemedLayoutContextProvider, { initialSiderCollapsed }, import_react10.default.createElement(Box_default, { display: "flex", flexDirection: "row" }, import_react10.default.createElement(SiderToRender, { Title: Title2 }), import_react10.default.createElement(
    Box_default,
    {
      sx: [
        {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: "100vh"
        },
        { overflow: "auto" },
        { overflow: "clip" }
      ]
    },
    import_react10.default.createElement(HeaderToRender, null),
    import_react10.default.createElement(
      Box_default,
      {
        component: "main",
        sx: {
          p: { xs: 1, md: 2, lg: 3 },
          flexGrow: 1,
          bgcolor: (theme) => theme.palette.background.default
        }
      },
      children
    ),
    Footer && import_react10.default.createElement(Footer, null)
  ), OffLayoutArea && import_react10.default.createElement(OffLayoutArea, null)));
}, "ThemedLayoutV2");
var defaultText2 = "Refine Project";
var defaultIcon2 = import_react18.default.createElement(
  "svg",
  {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  import_react18.default.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.7889 0.422291C12.6627 -0.140764 11.3373 -0.140764 10.2111 0.422291L2.21115 4.42229C0.85601 5.09986 0 6.48491 0 8V16C0 17.5151 0.85601 18.9001 2.21115 19.5777L10.2111 23.5777C11.3373 24.1408 12.6627 24.1408 13.7889 23.5777L21.7889 19.5777C23.144 18.9001 24 17.5151 24 16V8C24 6.48491 23.144 5.09986 21.7889 4.42229L13.7889 0.422291ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8Z",
      fill: "currentColor"
    }
  ),
  import_react18.default.createElement(
    "path",
    {
      d: "M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z",
      fill: "currentColor"
    }
  )
);
var ThemedTitleV2 = __name(({
  collapsed,
  wrapperStyles,
  icon = defaultIcon2,
  text = defaultText2
}) => {
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  return import_react18.default.createElement(
    Link_default,
    {
      to: "/",
      component: ActiveLink,
      underline: "none",
      sx: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles
      }
    },
    import_react18.default.createElement(SvgIcon_default, { height: "24px", width: "24px", color: "primary" }, icon),
    !collapsed && import_react18.default.createElement(
      Typography_default,
      {
        variant: "h6",
        fontWeight: 700,
        color: "text.primary",
        fontSize: "inherit",
        textOverflow: "ellipsis",
        overflow: "hidden"
      },
      text
    )
  );
}, "ThemedTitleV2");
var LoginPage = __name(() => {
  var _a;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = C();
  const authProvider = J();
  const { mutate: login, isLoading } = At({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const translate = G();
  return React15.createElement(React15.Fragment, null, React15.createElement(
    Box_default,
    {
      component: "div",
      sx: {
        background: "radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)",
        backgroundSize: "cover"
      }
    },
    React15.createElement(
      Container_default,
      {
        component: "main",
        maxWidth: "xs",
        sx: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh"
        }
      },
      React15.createElement(
        Box_default,
        {
          sx: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
          }
        },
        React15.createElement("div", null, React15.createElement(
          "img",
          {
            src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg",
            alt: "Refine Logo",
            style: { maxWidth: 200 }
          }
        )),
        React15.createElement(Box_default, { mt: 4 }, React15.createElement(Card_default, null, React15.createElement(CardContent_default, { sx: { paddingX: "32px" } }, React15.createElement(
          Typography_default,
          {
            component: "h1",
            variant: "h5",
            align: "center",
            sx: {
              fontWeight: "700",
              margin: "12px 0"
            }
          },
          translate("pages.login.title", "Sign in your account")
        ), React15.createElement(
          Box_default,
          {
            component: "form",
            onSubmit: handleSubmit((data) => {
              login(data);
            }),
            gap: "16px"
          },
          React15.createElement(
            TextField_default,
            {
              ...register("username", {
                required: true
              }),
              id: "username",
              margin: "normal",
              size: "small",
              fullWidth: true,
              label: translate("pages.login.username", "Username"),
              name: "username",
              autoComplete: "username",
              autoFocus: true
            }
          ),
          React15.createElement(
            TextField_default,
            {
              ...register("password", {
                required: true
              }),
              id: "password",
              size: "small",
              margin: "normal",
              fullWidth: true,
              name: "password",
              label: translate("pages.login.password", "Password"),
              helperText: (_a = errors == null ? void 0 : errors.password) == null ? void 0 : _a.message,
              type: "password",
              placeholder: "●●●●●●●●",
              autoComplete: "current-password"
            }
          ),
          React15.createElement(
            Box_default,
            {
              component: "div",
              sx: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }
            },
            React15.createElement(
              FormControlLabel_default,
              {
                sx: {
                  span: {
                    fontSize: "12px",
                    color: "text.secondary"
                  }
                },
                color: "secondary",
                control: React15.createElement(
                  Checkbox_default,
                  {
                    size: "small",
                    id: "remember",
                    ...register("remember")
                  }
                ),
                label: translate("pages.login.remember", "Remember me")
              }
            ),
            React15.createElement(
              Link_default,
              {
                href: "#",
                sx: {
                  fontSize: "12px",
                  textDecoration: "none"
                }
              },
              React15.createElement(
                Typography_default,
                {
                  sx: {
                    fontSize: "12px"
                  }
                },
                translate(
                  "pages.login.forgotPassword",
                  "Forgot password?"
                )
              )
            )
          ),
          React15.createElement(
            Button_default,
            {
              type: "submit",
              fullWidth: true,
              variant: "contained",
              sx: {
                my: "8px",
                color: "white"
              },
              disabled: isLoading
            },
            translate("pages.login.signin", "Sign in")
          ),
          React15.createElement(Box_default, { style: { marginTop: 8 } }, React15.createElement(Typography_default, { variant: "subtitle2" }, translate(
            "pages.login.noAccount",
            "Don’t have an account?"
          ), " ", React15.createElement(
            Link_default,
            {
              underline: "none",
              href: "#",
              style: {
                fontWeight: "bold"
              }
            },
            translate("pages.login.signup", "Sign up")
          )))
        ))))
      )
    )
  ));
}, "LoginPage");
var ReadyPage = __name(() => {
  const renderCode = __name((text) => React16.createElement(
    Typography_default,
    {
      sx: {
        backgroundColor: (theme) => theme.palette.secondary.contrastText,
        color: (theme) => theme.palette.secondary.main,
        display: "inline-block",
        fontFamily: "monospace"
      }
    },
    text
  ), "renderCode");
  return React16.createElement(React16.Fragment, null, React16.createElement(
    Grid_default,
    {
      container: true,
      sx: {
        backgroundColor: (theme) => theme.palette.secondary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('https://refine.ams3.cdn.digitaloceanspaces.com/login-background/background.png')",
        backgroundSize: "cover"
      },
      p: 3
    },
    React16.createElement(
      Grid_default,
      {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        color: (theme) => theme.palette.primary.contrastText
      },
      React16.createElement(Typography_default, { display: "flex", justifyContent: "center" }, React16.createElement(
        "img",
        {
          style: { marginBottom: "48px" },
          src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg",
          alt: "Refine Logo"
        }
      )),
      React16.createElement(
        Typography_default,
        {
          variant: "h2",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center"
        },
        "Welcome on board"
      ),
      React16.createElement(Typography_default, { variant: "h5", mt: 2 }, "Your configuration is completed."),
      React16.createElement(Typography_default, { variant: "h6", mt: 2 }, "Now you can get started by adding your resources to the", " ", renderCode("resources"), " property of ", renderCode("Refine")),
      React16.createElement(Grid_default, { item: true, sm: 12, mt: 12, display: "flex", justifyContent: "center" }, React16.createElement(Stack_default, { spacing: 2, direction: { xs: "column", sm: "row" } }, React16.createElement(
        Link_default,
        {
          href: "https://refine.dev",
          target: "_blank",
          rel: "noreferrer",
          style: {
            textDecoration: "none"
          }
        },
        React16.createElement(Button_default, { variant: "outlined", fullWidth: true }, "Documentation")
      ), React16.createElement(
        Link_default,
        {
          href: "https://refine.dev/examples",
          target: "_blank",
          rel: "noreferrer",
          style: {
            textDecoration: "none"
          }
        },
        React16.createElement(Button_default, { variant: "outlined", fullWidth: true }, "Examples")
      ), React16.createElement(
        Link_default,
        {
          href: "https://discord.gg/refine",
          target: "_blank",
          rel: "noreferrer",
          style: {
            textDecoration: "none"
          }
        },
        React16.createElement(Button_default, { variant: "outlined", fullWidth: true }, "Community")
      )))
    )
  ));
}, "ReadyPage");
var WelcomePage = __name(() => {
  return import_react19.default.createElement(Nu, null);
}, "WelcomePage");
var ErrorComponent = __name(() => {
  const [errorMessage, setErrorMessage] = (0, import_react20.useState)();
  const { push } = ce();
  const go = ge();
  const routerType = Z();
  const { resource, action } = z();
  const translate = G();
  (0, import_react20.useEffect)(() => {
    if (resource && action) {
      setErrorMessage(
        translate(
          "pages.error.info",
          {
            action,
            resource: resource == null ? void 0 : resource.name
          },
          `You may have forgotten to add the "${action}" component to "${resource == null ? void 0 : resource.name}" resource.`
        )
      );
    }
  }, [action, resource]);
  return import_react20.default.createElement(Grid_default, { display: "flex", justifyContent: "center", alignItems: "center", mt: 20 }, import_react20.default.createElement(Grid_default, { container: true, direction: "column", display: "flex", alignItems: "center" }, import_react20.default.createElement(Typography_default, { variant: "h1" }, "404"), import_react20.default.createElement(Stack_default, { direction: "row", spacing: "2" }, import_react20.default.createElement(Typography_default, null, translate(
    "pages.error.404",
    "Sorry, the page you visited does not exist."
  )), errorMessage && import_react20.default.createElement(Tooltip_default, { title: errorMessage }, import_react20.default.createElement(Info_default, {}))), import_react20.default.createElement(
    Button_default,
    {
      onClick: () => {
        if (routerType === "legacy") {
          push("/");
        } else {
          go({ to: "/" });
        }
      }
    },
    translate("pages.error.backHome", "Back Home")
  )));
}, "ErrorComponent");
var layoutStyles = {};
var titleStyles = {
  textAlign: "center",
  fontSize: "24px",
  marginBottom: "24px",
  overflowWrap: "break-word",
  hyphens: "manual",
  textOverflow: "unset",
  whiteSpace: "pre-wrap"
};
var LoginPage2 = __name(({
  providers,
  registerLink,
  forgotPasswordLink,
  rememberMe,
  contentProps,
  wrapperProps,
  renderContent,
  formProps,
  title,
  hideForm
}) => {
  var _a;
  const { onSubmit, ...useFormProps } = formProps || {};
  const methods = C({
    ...useFormProps
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods;
  const authProvider = J();
  const { mutate: login, isLoading } = At({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const translate = G();
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  const PageTitle = title === false ? null : React19.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      }
    },
    title ?? React19.createElement(
      ThemedTitleV2,
      {
        collapsed: false,
        wrapperStyles: {
          gap: "8px"
        }
      }
    )
  );
  const renderProviders = __name(() => {
    if (providers && providers.length > 0) {
      return React19.createElement(React19.Fragment, null, React19.createElement(Stack_default, { spacing: 1 }, providers.map((provider) => {
        return React19.createElement(
          Button_default,
          {
            key: provider.name,
            variant: "outlined",
            fullWidth: true,
            sx: {
              color: "primary.light",
              borderColor: "primary.light",
              textTransform: "none"
            },
            onClick: () => login({ providerName: provider.name }),
            startIcon: provider.icon
          },
          provider.label
        );
      })), !hideForm && React19.createElement(
        Divider_default,
        {
          sx: {
            fontSize: "12px",
            marginY: "16px"
          }
        },
        translate("pages.login.divider", "or")
      ));
    }
    return null;
  }, "renderProviders");
  const Content = React19.createElement(Card_default, { ...contentProps ?? {} }, React19.createElement(CardContent_default, { sx: { p: "32px", "&:last-child": { pb: "32px" } } }, React19.createElement(
    Typography_default,
    {
      component: "h1",
      variant: "h5",
      align: "center",
      style: titleStyles,
      color: "primary",
      fontWeight: 700
    },
    translate("pages.login.title", "Sign in to your account")
  ), renderProviders(), !hideForm && React19.createElement(
    Box_default,
    {
      component: "form",
      onSubmit: handleSubmit((data) => {
        if (onSubmit) {
          return onSubmit(data);
        }
        return login(data);
      })
    },
    React19.createElement(
      TextField_default,
      {
        ...register("email", {
          required: translate(
            "pages.login.errors.requiredEmail",
            "Email is required"
          )
        }),
        id: "email",
        margin: "normal",
        fullWidth: true,
        label: translate("pages.login.fields.email", "Email"),
        error: !!errors.email,
        name: "email",
        type: "email",
        autoComplete: "email",
        sx: {
          mt: 0
        }
      }
    ),
    React19.createElement(
      TextField_default,
      {
        ...register("password", {
          required: translate(
            "pages.login.errors.requiredPassword",
            "Password is required"
          )
        }),
        id: "password",
        margin: "normal",
        fullWidth: true,
        name: "password",
        label: translate("pages.login.fields.password", "Password"),
        helperText: (_a = errors == null ? void 0 : errors.password) == null ? void 0 : _a.message,
        error: !!errors.password,
        type: "password",
        placeholder: "●●●●●●●●",
        autoComplete: "current-password",
        sx: {
          mb: 0
        }
      }
    ),
    React19.createElement(
      Box_default,
      {
        component: "div",
        sx: {
          mt: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      rememberMe ?? React19.createElement(
        FormControlLabel_default,
        {
          sx: {
            span: {
              fontSize: "14px",
              color: "text.secondary"
            }
          },
          color: "secondary",
          control: React19.createElement(
            Checkbox_default,
            {
              size: "small",
              id: "remember",
              ...register("remember")
            }
          ),
          label: translate(
            "pages.login.buttons.rememberMe",
            "Remember me"
          )
        }
      ),
      forgotPasswordLink ?? React19.createElement(
        Link_default,
        {
          variant: "body2",
          color: "primary",
          fontSize: "12px",
          component: ActiveLink,
          underline: "none",
          to: "/forgot-password"
        },
        translate(
          "pages.login.buttons.forgotPassword",
          "Forgot password?"
        )
      )
    ),
    React19.createElement(
      Button_default,
      {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        disabled: isLoading,
        sx: { mt: "24px" }
      },
      translate("pages.login.signin", "Sign in")
    )
  ), registerLink ?? React19.createElement(
    Box_default,
    {
      sx: {
        mt: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    },
    React19.createElement(
      Typography_default,
      {
        textAlign: "center",
        variant: "body2",
        component: "span",
        fontSize: "12px"
      },
      translate(
        "pages.login.buttons.noAccount",
        "Don’t have an account?"
      )
    ),
    React19.createElement(
      Link_default,
      {
        ml: "4px",
        fontSize: "12px",
        variant: "body2",
        color: "primary",
        component: ActiveLink,
        underline: "none",
        to: "/register",
        fontWeight: "bold"
      },
      translate("pages.login.signup", "Sign up")
    )
  )));
  return React19.createElement(FormProvider, { ...methods }, React19.createElement(Box_default, { component: "div", style: layoutStyles, ...wrapperProps ?? {} }, React19.createElement(
    Container_default,
    {
      component: "main",
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: hideForm ? "flex-start" : "center",
        alignItems: "center",
        minHeight: "100dvh",
        padding: "16px",
        width: "100%",
        maxWidth: "400px"
      }
    },
    React19.createElement(
      Box_default,
      {
        sx: {
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          paddingTop: hideForm ? "15dvh" : 0
        }
      },
      renderContent ? renderContent(Content, PageTitle) : React19.createElement(React19.Fragment, null, PageTitle, Content)
    )
  )));
}, "LoginPage");
var RegisterPage = __name(({
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  providers,
  formProps,
  title,
  hideForm
}) => {
  const { onSubmit, ...useFormProps } = formProps || {};
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = C({
    ...useFormProps
  });
  const authProvider = J();
  const { mutate: registerMutate, isLoading } = _r({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const translate = G();
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  const PageTitle = title === false ? null : React20.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      }
    },
    title ?? React20.createElement(
      ThemedTitleV2,
      {
        collapsed: false,
        wrapperStyles: {
          gap: "8px"
        }
      }
    )
  );
  const renderProviders = __name(() => {
    if (providers && providers.length > 0) {
      return React20.createElement(React20.Fragment, null, React20.createElement(Stack_default, { spacing: 1 }, providers.map((provider) => {
        return React20.createElement(
          Button_default,
          {
            key: provider.name,
            color: "secondary",
            fullWidth: true,
            variant: "outlined",
            sx: {
              color: "primary.light",
              borderColor: "primary.light",
              textTransform: "none"
            },
            onClick: () => registerMutate({
              providerName: provider.name
            }),
            startIcon: provider.icon
          },
          provider.label
        );
      })), !hideForm && React20.createElement(
        Divider_default,
        {
          sx: {
            fontSize: "12px",
            marginY: "16px"
          }
        },
        translate("pages.login.divider", "or")
      ));
    }
    return null;
  }, "renderProviders");
  const Content = React20.createElement(Card_default, { ...contentProps ?? {} }, React20.createElement(CardContent_default, { sx: { p: "32px", "&:last-child": { pb: "32px" } } }, React20.createElement(
    Typography_default,
    {
      component: "h1",
      variant: "h5",
      align: "center",
      style: titleStyles,
      color: "primary",
      fontWeight: 700
    },
    translate("pages.register.title", "Sign up for your account")
  ), renderProviders(), !hideForm && React20.createElement(
    Box_default,
    {
      component: "form",
      onSubmit: handleSubmit((data) => {
        if (onSubmit) {
          return onSubmit(data);
        }
        return registerMutate(data);
      })
    },
    React20.createElement(
      TextField_default,
      {
        ...register("email", {
          required: translate(
            "pages.register.errors.requiredEmail",
            "Email is required"
          ),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: translate(
              "pages.register.errors.validEmail",
              "Invalid email address"
            )
          }
        }),
        id: "email",
        margin: "normal",
        fullWidth: true,
        label: translate("pages.register.email", "Email"),
        error: !!errors.email,
        helperText: errors["email"] ? errors["email"].message : "",
        name: "email",
        autoComplete: "email",
        sx: {
          mt: 0
        }
      }
    ),
    React20.createElement(
      TextField_default,
      {
        ...register("password", {
          required: translate(
            "pages.register.errors.requiredPassword",
            "Password is required"
          )
        }),
        id: "password",
        margin: "normal",
        fullWidth: true,
        name: "password",
        label: translate("pages.register.fields.password", "Password"),
        helperText: errors["password"] ? errors["password"].message : "",
        error: !!errors.password,
        type: "password",
        placeholder: "●●●●●●●●",
        autoComplete: "current-password",
        sx: {
          mb: 0
        }
      }
    ),
    React20.createElement(
      Button_default,
      {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        disabled: isLoading,
        sx: {
          mt: "24px"
        }
      },
      translate("pages.register.signup", "Sign up")
    )
  ), loginLink ?? React20.createElement(
    Box_default,
    {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      sx: {
        mt: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    },
    React20.createElement(Typography_default, { variant: "body2", component: "span", fontSize: "12px" }, translate("pages.login.buttons.haveAccount", "Have an account?")),
    React20.createElement(
      Link_default,
      {
        ml: "4px",
        variant: "body2",
        color: "primary",
        component: ActiveLink,
        underline: "none",
        to: "/login",
        fontSize: "12px",
        fontWeight: "bold"
      },
      translate("pages.login.signin", "Sign in")
    )
  )));
  return React20.createElement(Box_default, { component: "div", style: layoutStyles, ...wrapperProps ?? {} }, React20.createElement(
    Container_default,
    {
      component: "main",
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: hideForm ? "flex-start" : "center",
        alignItems: "center",
        minHeight: "100dvh",
        padding: "16px",
        width: "100%",
        maxWidth: "400px"
      }
    },
    React20.createElement(
      Box_default,
      {
        sx: {
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          paddingTop: hideForm ? "15dvh" : 0
        }
      },
      renderContent ? renderContent(Content, PageTitle) : React20.createElement(React20.Fragment, null, PageTitle, Content)
    )
  ));
}, "RegisterPage");
var ForgotPasswordPage = __name(({
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title
}) => {
  const { onSubmit, ...useFormProps } = formProps || {};
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = C({
    ...useFormProps
  });
  const { mutate, isLoading } = Xr();
  const translate = G();
  const routerType = Z();
  const Link6 = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link6;
  const PageTitle = title === false ? null : React21.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      }
    },
    title ?? React21.createElement(
      ThemedTitleV2,
      {
        collapsed: false,
        wrapperStyles: {
          gap: "8px"
        }
      }
    )
  );
  const Content = React21.createElement(Card_default, { ...contentProps ?? {} }, React21.createElement(CardContent_default, { sx: { p: "32px", "&:last-child": { pb: "32px" } } }, React21.createElement(
    Typography_default,
    {
      component: "h1",
      variant: "h5",
      align: "center",
      style: titleStyles,
      color: "primary",
      fontWeight: 700
    },
    translate("pages.forgotPassword.title", "Forgot your password?")
  ), React21.createElement(
    Box_default,
    {
      component: "form",
      onSubmit: handleSubmit((data) => {
        if (onSubmit) {
          return onSubmit(data);
        }
        return mutate(data);
      })
    },
    React21.createElement(
      TextField_default,
      {
        ...register("email", {
          required: translate(
            "pages.forgotPassword.errors.requiredEmail",
            "Email is required"
          ),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: translate(
              "pages.register.errors.validEmail",
              "Invalid email address"
            )
          }
        }),
        id: "email",
        margin: "normal",
        fullWidth: true,
        label: translate("pages.forgotPassword.fields.email", "Email"),
        name: "email",
        type: "email",
        error: !!errors.email,
        autoComplete: "email",
        sx: {
          m: 0
        }
      }
    ),
    loginLink ?? React21.createElement(Box_default, { textAlign: "right", sx: { mt: "24px" } }, React21.createElement(Typography_default, { variant: "body2", component: "span", fontSize: "12px" }, translate(
      "pages.register.buttons.haveAccount",
      "Have an account?"
    )), " ", React21.createElement(
      Link_default,
      {
        variant: "body2",
        component: ActiveLink,
        underline: "none",
        to: "/login",
        fontWeight: "bold",
        fontSize: "12px",
        color: "primary.light"
      },
      translate("pages.login.signin", "Sign in")
    )),
    React21.createElement(
      Button_default,
      {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        sx: { mt: "24px" },
        disabled: isLoading
      },
      translate(
        "pages.forgotPassword.buttons.submit",
        "Send reset instructions"
      )
    )
  )));
  return React21.createElement(React21.Fragment, null, React21.createElement(Box_default, { component: "div", style: layoutStyles, ...wrapperProps ?? {} }, React21.createElement(
    Container_default,
    {
      component: "main",
      maxWidth: "xs",
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100dvh",
        padding: "16px",
        width: "100%",
        maxWidth: "400px"
      }
    },
    renderContent ? renderContent(Content, PageTitle) : React21.createElement(React21.Fragment, null, PageTitle, Content)
  )));
}, "ForgotPasswordPage");
var UpdatePasswordPage = __name(({
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title = void 0
}) => {
  var _a, _b;
  const { onSubmit, ...useFormProps } = formProps || {};
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = C({
    ...useFormProps
  });
  const authProvider = J();
  const { mutate: update, isLoading } = Yr({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const translate = G();
  const PageTitle = title === false ? null : React222.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      }
    },
    title ?? React222.createElement(
      ThemedTitleV2,
      {
        collapsed: false,
        wrapperStyles: {
          gap: "8px"
        }
      }
    )
  );
  const Content = React222.createElement(Card_default, { ...contentProps ?? {} }, React222.createElement(CardContent_default, { sx: { p: "32px", "&:last-child": { pb: "32px" } } }, React222.createElement(
    Typography_default,
    {
      component: "h1",
      variant: "h5",
      align: "center",
      style: titleStyles,
      color: "primary",
      fontWeight: 700
    },
    translate("pages.updatePassword.title", "Set New Password")
  ), React222.createElement(
    Box_default,
    {
      component: "form",
      onSubmit: handleSubmit((data) => {
        if (onSubmit) {
          return onSubmit(data);
        }
        return update(data);
      })
    },
    React222.createElement(
      TextField_default,
      {
        ...register("password", {
          required: translate(
            "pages.updatePassword.errors.requiredPassword",
            "Password required"
          )
        }),
        id: "password",
        margin: "normal",
        fullWidth: true,
        name: "password",
        label: translate(
          "pages.updatePassword.fields.password",
          "New Password"
        ),
        helperText: (_a = errors == null ? void 0 : errors.password) == null ? void 0 : _a.message,
        error: !!(errors == null ? void 0 : errors.password),
        type: "password",
        placeholder: "●●●●●●●●",
        autoComplete: "current-password",
        sx: {
          m: 0
        }
      }
    ),
    React222.createElement(
      TextField_default,
      {
        ...register("confirmPassword", {
          required: translate(
            "pages.updatePassword.errors.requiredConfirmPassword",
            "Confirm Password is required"
          ),
          validate: (value) => {
            if (watch("password") !== value) {
              return translate(
                "pages.updatePassword.errors.confirmPasswordNotMatch",
                "Passwords do not match"
              );
            }
            return true;
          }
        }),
        id: "confirmPassword",
        margin: "normal",
        fullWidth: true,
        name: "confirmPassword",
        label: translate(
          "pages.updatePassword.fields.confirmPassword",
          "Confirm New Password"
        ),
        helperText: (_b = errors == null ? void 0 : errors.confirmPassword) == null ? void 0 : _b.message,
        error: !!(errors == null ? void 0 : errors.confirmPassword),
        type: "password",
        placeholder: "●●●●●●●●",
        autoComplete: "current-confirm-password",
        sx: {
          mb: 0
        }
      }
    ),
    React222.createElement(
      Button_default,
      {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        sx: {
          mt: "24px"
        },
        disabled: isLoading
      },
      translate("pages.updatePassword.buttons.submit", "Update")
    )
  )));
  return React222.createElement(React222.Fragment, null, React222.createElement(Box_default, { component: "div", style: layoutStyles, ...wrapperProps ?? {} }, React222.createElement(
    Container_default,
    {
      component: "main",
      maxWidth: "xs",
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100dvh",
        padding: "16px",
        width: "100%",
        maxWidth: "400px"
      }
    },
    renderContent ? renderContent(Content, PageTitle) : React222.createElement(React222.Fragment, null, PageTitle, Content)
  )));
}, "UpdatePasswordPage");
var AuthPage = __name((props) => {
  const { type } = props;
  const renderView = __name(() => {
    switch (type) {
      case "register":
        return import_react21.default.createElement(RegisterPage, { ...props });
      case "forgotPassword":
        return import_react21.default.createElement(ForgotPasswordPage, { ...props });
      case "updatePassword":
        return import_react21.default.createElement(UpdatePasswordPage, { ...props });
      default:
        return import_react21.default.createElement(LoginPage2, { ...props });
    }
  }, "renderView");
  return import_react21.default.createElement(import_react21.default.Fragment, null, renderView());
}, "AuthPage");
var Create = __name(({
  title,
  children,
  saveButtonProps: saveButtonPropsFromProps,
  resource: resourceFromProps,
  isLoading = false,
  breadcrumb: breadcrumbFromProps,
  wrapperProps,
  headerProps,
  contentProps,
  headerButtonProps,
  headerButtons,
  footerButtonProps,
  footerButtons,
  goBack: goBackFromProps
}) => {
  var _a, _b;
  const translate = G();
  const {
    options: { breadcrumb: globalBreadcrumb } = {}
  } = se();
  const routerType = Z();
  const back = uo();
  const { goBack } = ce();
  const getUserFriendlyName = st();
  const { resource, action, identifier } = z(resourceFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const breadcrumbComponent = typeof breadcrumb !== "undefined" ? import_react22.default.createElement(import_react22.default.Fragment, null, breadcrumb) ?? void 0 : import_react22.default.createElement(Breadcrumb, null);
  const saveButtonProps = {
    ...isLoading ? { disabled: true } : {},
    ...saveButtonPropsFromProps
  };
  const defaultFooterButtons = import_react22.default.createElement(SaveButton, { ...saveButtonProps });
  return import_react22.default.createElement(Card_default, { ...wrapperProps ?? {} }, breadcrumbComponent, import_react22.default.createElement(
    CardHeader_default,
    {
      sx: {
        display: "flex",
        flexWrap: "wrap",
        ".MuiCardHeader-action": {
          margin: 0,
          alignSelf: "center"
        }
      },
      title: title ?? import_react22.default.createElement(
        Typography_default,
        {
          variant: "h5",
          className: o.Title
        },
        translate(
          `${identifier}.titles.create`,
          `Create ${getUserFriendlyName(
            ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
            "singular"
          )}`
        )
      ),
      avatar: typeof goBackFromProps !== "undefined" ? goBackFromProps : import_react22.default.createElement(
        IconButton_default,
        {
          onClick: action !== "list" || typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0
        },
        import_react22.default.createElement(ArrowBack_default, null)
      ),
      action: headerButtons ? import_react22.default.createElement(Box_default, { display: "flex", gap: "16px", ...headerButtonProps ?? {} }, headerButtons ? typeof headerButtons === "function" ? headerButtons({
        defaultButtons: null
      }) : headerButtons : null) : void 0,
      ...headerProps ?? {}
    }
  ), import_react22.default.createElement(CardContent_default, { ...contentProps ?? {} }, children), import_react22.default.createElement(
    CardActions_default,
    {
      sx: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "16px",
        padding: "16px"
      },
      ...footerButtonProps ?? {}
    },
    footerButtons ? typeof footerButtons === "function" ? footerButtons({
      defaultButtons: defaultFooterButtons,
      saveButtonProps
    }) : footerButtons : defaultFooterButtons
  ));
}, "Create");
var Edit = __name(({
  title,
  saveButtonProps: saveButtonPropsFromProps,
  mutationMode: mutationModeProp,
  recordItemId,
  children,
  deleteButtonProps: deleteButtonPropsFromProps,
  canDelete,
  resource: resourceFromProps,
  isLoading = false,
  breadcrumb: breadcrumbFromProps,
  dataProviderName,
  wrapperProps,
  headerProps,
  contentProps,
  headerButtonProps,
  headerButtons,
  footerButtonProps,
  footerButtons,
  goBack: goBackFromProps,
  autoSaveProps
}) => {
  var _a, _b, _c;
  const translate = G();
  const {
    options: { breadcrumb: globalBreadcrumb } = {}
  } = se();
  const { mutationMode: mutationModeContext } = Ae();
  const mutationMode = mutationModeProp ?? mutationModeContext;
  const routerType = Z();
  const back = uo();
  const go = ge();
  const { goBack, list: legacyGoList } = ce();
  const getUserFriendlyName = st();
  const {
    resource,
    action,
    id: idFromParams,
    identifier
  } = z(resourceFromProps);
  const goListPath = nu({
    resource,
    action: "list"
  });
  const id = recordItemId ?? idFromParams;
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const hasList = (resource == null ? void 0 : resource.list) && !recordItemId;
  const isDeleteButtonVisible = canDelete ?? ((((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.canDelete) ?? (resource == null ? void 0 : resource.canDelete)) || deleteButtonPropsFromProps);
  const breadcrumbComponent = typeof breadcrumb !== "undefined" ? import_react23.default.createElement(import_react23.default.Fragment, null, breadcrumb) ?? void 0 : import_react23.default.createElement(Breadcrumb, null);
  const listButtonProps = hasList ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier
  } : void 0;
  const refreshButtonProps = {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
    recordItemId: id,
    dataProviderName
  };
  const defaultHeaderButtons = import_react23.default.createElement(Box_default, { display: "flex", flexDirection: "row", alignItems: "center" }, autoSaveProps && import_react23.default.createElement(AutoSaveIndicator, { ...autoSaveProps }), hasList && import_react23.default.createElement(ListButton, { ...listButtonProps }), import_react23.default.createElement(RefreshButton, { ...refreshButtonProps }));
  const deleteButtonProps = isDeleteButtonVisible ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
    mutationMode,
    variant: "outlined",
    onSuccess: () => {
      if (routerType === "legacy") {
        legacyGoList((resource == null ? void 0 : resource.route) ?? (resource == null ? void 0 : resource.name) ?? "");
      } else {
        go({ to: goListPath });
      }
    },
    recordItemId: id,
    dataProviderName,
    ...deleteButtonPropsFromProps
  } : void 0;
  const saveButtonProps = {
    ...isLoading ? { disabled: true } : {},
    ...saveButtonPropsFromProps
  };
  const defaultFooterButtons = import_react23.default.createElement(import_react23.default.Fragment, null, isDeleteButtonVisible && import_react23.default.createElement(DeleteButton, { ...deleteButtonProps }), import_react23.default.createElement(SaveButton, { ...saveButtonProps }));
  return import_react23.default.createElement(Card_default, { ...wrapperProps ?? {} }, breadcrumbComponent, import_react23.default.createElement(
    CardHeader_default,
    {
      sx: {
        display: "flex",
        flexWrap: "wrap",
        ".MuiCardHeader-action": {
          margin: 0,
          alignSelf: "center"
        }
      },
      title: title ?? import_react23.default.createElement(
        Typography_default,
        {
          variant: "h5",
          className: o.Title
        },
        translate(
          `${identifier}.titles.edit`,
          `Edit ${getUserFriendlyName(
            ((_b = resource == null ? void 0 : resource.meta) == null ? void 0 : _b.label) ?? ((_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
            "singular"
          )}`
        )
      ),
      avatar: typeof goBackFromProps !== "undefined" ? goBackFromProps : import_react23.default.createElement(
        IconButton_default,
        {
          onClick: action !== "list" && typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0
        },
        import_react23.default.createElement(ArrowBack_default, null)
      ),
      action: import_react23.default.createElement(Box_default, { display: "flex", gap: "16px", ...headerButtonProps ?? {} }, headerButtons ? typeof headerButtons === "function" ? headerButtons({
        defaultButtons: defaultHeaderButtons,
        listButtonProps,
        refreshButtonProps
      }) : headerButtons : defaultHeaderButtons),
      ...headerProps ?? {}
    }
  ), import_react23.default.createElement(CardContent_default, { ...contentProps ?? {} }, children), import_react23.default.createElement(
    CardActions_default,
    {
      sx: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "16px",
        padding: "16px"
      },
      ...footerButtonProps ?? {}
    },
    footerButtons ? typeof footerButtons === "function" ? footerButtons({
      defaultButtons: defaultFooterButtons,
      deleteButtonProps,
      saveButtonProps
    }) : footerButtons : defaultFooterButtons
  ));
}, "Edit");
var List4 = __name(({
  title,
  canCreate,
  children,
  createButtonProps: createButtonPropsFromProps,
  resource: resourceFromProps,
  breadcrumb: breadcrumbFromProps,
  wrapperProps,
  headerProps,
  contentProps,
  headerButtonProps,
  headerButtons
}) => {
  var _a, _b;
  const translate = G();
  const {
    options: { breadcrumb: globalBreadcrumb } = {}
  } = se();
  const getUserFriendlyName = st();
  const routerType = Z();
  const { resource, identifier } = z(resourceFromProps);
  const isCreateButtonVisible = canCreate ?? (((resource == null ? void 0 : resource.canCreate) ?? !!(resource == null ? void 0 : resource.create)) || createButtonPropsFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const breadcrumbComponent = typeof breadcrumb !== "undefined" ? import_react24.default.createElement(import_react24.default.Fragment, null, breadcrumb) ?? void 0 : import_react24.default.createElement(Breadcrumb, null);
  const createButtonProps = isCreateButtonVisible ? {
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
    ...createButtonPropsFromProps
  } : void 0;
  const defaultHeaderButtons = isCreateButtonVisible ? import_react24.default.createElement(CreateButton, { ...createButtonProps }) : null;
  return import_react24.default.createElement(Card_default, { ...wrapperProps ?? {} }, breadcrumbComponent, import_react24.default.createElement(
    CardHeader_default,
    {
      sx: {
        display: "flex",
        flexWrap: "wrap",
        ".MuiCardHeader-action": {
          margin: 0,
          alignSelf: "center"
        }
      },
      title: title ?? import_react24.default.createElement(
        Typography_default,
        {
          variant: "h5",
          className: o.Title
        },
        translate(
          `${identifier}.titles.list`,
          getUserFriendlyName(
            ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
            "plural"
          )
        )
      ),
      action: import_react24.default.createElement(Box_default, { display: "flex", gap: "16px", ...headerButtonProps }, headerButtons ? typeof headerButtons === "function" ? headerButtons({
        defaultButtons: defaultHeaderButtons,
        createButtonProps
      }) : headerButtons : defaultHeaderButtons),
      ...headerProps ?? {}
    }
  ), import_react24.default.createElement(CardContent_default, { ...contentProps ?? {} }, children));
}, "List");
var Show = __name(({
  title,
  canEdit,
  canDelete,
  isLoading = false,
  children,
  resource: resourceFromProps,
  recordItemId,
  breadcrumb: breadcrumbFromProps,
  dataProviderName,
  wrapperProps,
  headerProps,
  contentProps,
  headerButtonProps,
  headerButtons,
  footerButtonProps,
  footerButtons,
  goBack: goBackFromProps
}) => {
  var _a, _b, _c;
  const translate = G();
  const {
    options: { breadcrumb: globalBreadcrumb } = {}
  } = se();
  const routerType = Z();
  const back = uo();
  const go = ge();
  const { goBack, list: legacyGoList } = ce();
  const getUserFriendlyName = st();
  const {
    resource,
    action,
    id: idFromParams,
    identifier
  } = z(resourceFromProps);
  const goListPath = nu({
    resource,
    action: "list"
  });
  const id = recordItemId ?? idFromParams;
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const hasList = (resource == null ? void 0 : resource.list) && !recordItemId;
  const hasDelete = canDelete ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.canDelete) ?? (resource == null ? void 0 : resource.canDelete);
  const isDeleteButtonVisible = hasDelete && typeof id !== "undefined";
  const isEditButtonVisible = canEdit ?? (resource == null ? void 0 : resource.canEdit) ?? !!(resource == null ? void 0 : resource.edit);
  const breadcrumbComponent = typeof breadcrumb !== "undefined" ? import_react25.default.createElement(import_react25.default.Fragment, null, breadcrumb) ?? void 0 : import_react25.default.createElement(Breadcrumb, null);
  const listButtonProps = hasList ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier
  } : void 0;
  const editButtonProps = isEditButtonVisible ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
    recordItemId: id
  } : void 0;
  const deleteButtonProps = isDeleteButtonVisible ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
    recordItemId: id,
    onSuccess: () => {
      if (routerType === "legacy") {
        legacyGoList((resource == null ? void 0 : resource.route) ?? (resource == null ? void 0 : resource.name) ?? "");
      } else {
        go({ to: goListPath });
      }
    },
    dataProviderName
  } : void 0;
  const refreshButtonProps = {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
    recordItemId: id,
    dataProviderName
  };
  const defaultHeaderButtons = import_react25.default.createElement(import_react25.default.Fragment, null, hasList && import_react25.default.createElement(ListButton, { ...listButtonProps }), isEditButtonVisible && import_react25.default.createElement(EditButton, { ...editButtonProps }), isDeleteButtonVisible && import_react25.default.createElement(DeleteButton, { ...deleteButtonProps }), import_react25.default.createElement(RefreshButton, { ...refreshButtonProps }));
  return import_react25.default.createElement(Card_default, { ...wrapperProps ?? {} }, breadcrumbComponent, import_react25.default.createElement(
    CardHeader_default,
    {
      sx: {
        display: "flex",
        flexWrap: "wrap",
        ".MuiCardHeader-action": {
          margin: 0,
          alignSelf: "center"
        }
      },
      title: title ?? import_react25.default.createElement(
        Typography_default,
        {
          variant: "h5",
          className: o.Title
        },
        translate(
          `${identifier}.titles.show`,
          `Show ${getUserFriendlyName(
            ((_b = resource == null ? void 0 : resource.meta) == null ? void 0 : _b.label) ?? ((_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
            "singular"
          )}`
        )
      ),
      avatar: typeof goBackFromProps !== "undefined" ? goBackFromProps : import_react25.default.createElement(
        IconButton_default,
        {
          onClick: action !== "list" && typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0
        },
        import_react25.default.createElement(ArrowBack_default, null)
      ),
      action: import_react25.default.createElement(Box_default, { display: "flex", gap: "16px", ...headerButtonProps ?? {} }, headerButtons ? typeof headerButtons === "function" ? headerButtons({
        defaultButtons: defaultHeaderButtons,
        deleteButtonProps,
        editButtonProps,
        listButtonProps,
        refreshButtonProps
      }) : headerButtons : defaultHeaderButtons),
      ...headerProps ?? {}
    }
  ), import_react25.default.createElement(CardContent_default, { ...contentProps ?? {} }, children), import_react25.default.createElement(CardActions_default, { sx: { padding: "16px" }, ...footerButtonProps ?? {} }, footerButtons ? typeof footerButtons === "function" ? footerButtons({ defaultButtons: null }) : footerButtons : null));
}, "Show");
var CreateButton = __name(({
  resource: resourceNameFromProps,
  resourceNameOrRouteName,
  hideText = false,
  accessControl,
  svgIconProps,
  meta,
  children,
  onClick,
  ...rest
}) => {
  const { to, label, title, disabled, hidden, LinkComponent } = FD(
    {
      resource: resourceNameFromProps ?? resourceNameOrRouteName,
      meta,
      accessControl
    }
  );
  if (hidden)
    return null;
  const { sx, ...restProps } = rest;
  return import_react26.default.createElement(
    LinkComponent,
    {
      to,
      replace: false,
      onClick: (e2) => {
        if (disabled) {
          e2.preventDefault();
          return;
        }
        if (onClick) {
          e2.preventDefault();
          onClick(e2);
        }
      },
      style: { textDecoration: "none" }
    },
    import_react26.default.createElement(
      Button_default,
      {
        disabled,
        startIcon: !hideText && import_react26.default.createElement(AddBoxOutlined_default, { ...svgIconProps }),
        title,
        variant: "contained",
        sx: { minWidth: 0, ...sx },
        className: n.CreateButton,
        ...restProps
      },
      hideText ? import_react26.default.createElement(AddBoxOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
    )
  );
}, "CreateButton");
var EditButton = __name(({
  resource: resourceNameFromProps,
  resourceNameOrRouteName,
  recordItemId,
  hideText = false,
  accessControl,
  svgIconProps,
  meta,
  children,
  onClick,
  ...rest
}) => {
  const { to, label, title, hidden, disabled, LinkComponent } = ID({
    resource: resourceNameFromProps ?? resourceNameOrRouteName,
    id: recordItemId,
    accessControl,
    meta
  });
  if (hidden)
    return null;
  const { sx, ...restProps } = rest;
  return import_react27.default.createElement(
    LinkComponent,
    {
      to,
      replace: false,
      onClick: (e2) => {
        if (disabled) {
          e2.preventDefault();
          return;
        }
        if (onClick) {
          e2.preventDefault();
          onClick(e2);
        }
      },
      style: { textDecoration: "none" }
    },
    import_react27.default.createElement(
      Button_default,
      {
        disabled,
        startIcon: !hideText && import_react27.default.createElement(EditOutlined_default, { sx: { selfAlign: "center" }, ...svgIconProps }),
        title,
        sx: { minWidth: 0, ...sx },
        className: n.EditButton,
        ...restProps
      },
      hideText ? import_react27.default.createElement(EditOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
    )
  );
}, "EditButton");
var DeleteButton = __name(({
  resource: resourceNameFromProps,
  resourceNameOrRouteName,
  recordItemId,
  onSuccess,
  mutationMode,
  children,
  successNotification,
  errorNotification,
  hideText = false,
  accessControl,
  meta,
  metaData,
  dataProviderName,
  confirmTitle,
  confirmOkText,
  confirmCancelText,
  svgIconProps,
  invalidates,
  ...rest
}) => {
  const {
    onConfirm,
    title,
    label,
    hidden,
    disabled,
    loading,
    confirmTitle: defaultConfirmTitle,
    confirmOkLabel,
    cancelLabel
  } = Du({
    resource: resourceNameFromProps ?? resourceNameOrRouteName,
    id: recordItemId,
    dataProviderName,
    mutationMode,
    accessControl,
    invalidates,
    onSuccess,
    meta,
    successNotification,
    errorNotification
  });
  const [open, setOpen] = import_react28.default.useState(false);
  const { sx, ...restProps } = rest;
  if (hidden)
    return null;
  return import_react28.default.createElement("div", null, import_react28.default.createElement(
    LoadingButton_default,
    {
      color: "error",
      onClick: () => setOpen(true),
      disabled,
      loading,
      startIcon: !hideText && import_react28.default.createElement(DeleteOutline_default, { ...svgIconProps }),
      title,
      sx: { minWidth: 0, ...sx },
      loadingPosition: hideText ? "center" : "start",
      className: n.DeleteButton,
      ...restProps
    },
    hideText ? import_react28.default.createElement(DeleteOutline_default, { fontSize: "small", ...svgIconProps }) : children ?? label
  ), import_react28.default.createElement(
    Dialog_default,
    {
      open,
      onClose: () => setOpen(false),
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    },
    import_react28.default.createElement(DialogTitle_default, { id: "alert-dialog-title" }, confirmTitle ?? defaultConfirmTitle),
    import_react28.default.createElement(DialogActions_default, { sx: { justifyContent: "center" } }, import_react28.default.createElement(Button_default, { onClick: () => setOpen(false) }, confirmCancelText ?? cancelLabel), import_react28.default.createElement(
      Button_default,
      {
        color: "error",
        onClick: () => {
          onConfirm();
          setOpen(false);
        },
        autoFocus: true
      },
      confirmOkText ?? confirmOkLabel
    ))
  ));
}, "DeleteButton");
var RefreshButton = __name(({
  resource: resourceNameFromProps,
  resourceNameOrRouteName,
  recordItemId,
  hideText = false,
  dataProviderName,
  svgIconProps,
  children,
  onClick,
  meta: _meta,
  metaData: _metaData,
  ...rest
}) => {
  const {
    onClick: onRefresh,
    loading,
    label
  } = Uu({
    resource: resourceNameFromProps ?? resourceNameOrRouteName,
    id: recordItemId,
    dataProviderName
  });
  const { sx, ...restProps } = rest;
  return import_react29.default.createElement(
    LoadingButton_default,
    {
      startIcon: !hideText && import_react29.default.createElement(RefreshOutlined_default, { ...svgIconProps }),
      loading,
      loadingPosition: hideText ? "center" : "start",
      onClick: onClick ? onClick : onRefresh,
      sx: { minWidth: 0, ...sx },
      className: n.RefreshButton,
      ...restProps
    },
    hideText ? import_react29.default.createElement(RefreshOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
  );
}, "RefreshButton");
var ShowButton = __name(({
  resource: resourceNameFromProps,
  resourceNameOrRouteName,
  recordItemId,
  hideText = false,
  accessControl,
  svgIconProps,
  meta,
  children,
  onClick,
  ...rest
}) => {
  const { to, label, title, hidden, disabled, LinkComponent } = wD({
    resource: resourceNameFromProps ?? resourceNameOrRouteName,
    id: recordItemId,
    accessControl,
    meta
  });
  if (hidden)
    return null;
  const { sx, ...restProps } = rest;
  return import_react30.default.createElement(
    LinkComponent,
    {
      to,
      replace: false,
      onClick: (e2) => {
        if (disabled) {
          e2.preventDefault();
          return;
        }
        if (onClick) {
          e2.preventDefault();
          onClick(e2);
        }
      },
      style: { textDecoration: "none" }
    },
    import_react30.default.createElement(
      Button_default,
      {
        disabled,
        startIcon: !hideText && import_react30.default.createElement(VisibilityOutlined_default, { ...svgIconProps }),
        title,
        sx: { minWidth: 0, ...sx },
        className: n.ShowButton,
        ...restProps
      },
      hideText ? import_react30.default.createElement(VisibilityOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
    )
  );
}, "ShowButton");
var ListButton = __name(({
  resource: resourceNameFromProps,
  resourceNameOrRouteName,
  hideText = false,
  accessControl,
  svgIconProps,
  meta,
  children,
  onClick,
  ...rest
}) => {
  const { to, label, title, hidden, disabled, LinkComponent } = AD({
    resource: resourceNameFromProps ?? resourceNameOrRouteName,
    meta,
    accessControl
  });
  if (hidden)
    return null;
  const { sx, ...restProps } = rest;
  return import_react31.default.createElement(
    LinkComponent,
    {
      to,
      replace: false,
      onClick: (e2) => {
        if (disabled) {
          e2.preventDefault();
          return;
        }
        if (onClick) {
          e2.preventDefault();
          onClick(e2);
        }
      },
      style: { textDecoration: "none" }
    },
    import_react31.default.createElement(
      Button_default,
      {
        disabled,
        startIcon: !hideText && import_react31.default.createElement(ListOutlined_default, { ...svgIconProps }),
        title,
        sx: { minWidth: 0, ...sx },
        className: n.ListButton,
        ...restProps
      },
      hideText ? import_react31.default.createElement(ListOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
    )
  );
}, "ListButton");
var ExportButton = __name(({
  hideText = false,
  children,
  loading = false,
  svgIconProps,
  ...rest
}) => {
  const { label } = QD();
  const { sx, ...restProps } = rest;
  return import_react32.default.createElement(
    LoadingButton_default,
    {
      ...rest,
      loading,
      startIcon: !hideText && import_react32.default.createElement(ImportExportOutlined_default, { ...svgIconProps }),
      loadingPosition: hideText ? "center" : "start",
      sx: { minWidth: 0, ...sx },
      className: n.ExportButton,
      ...restProps
    },
    hideText ? import_react32.default.createElement(ImportExportOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
  );
}, "ExportButton");
var SaveButton = __name(({
  hideText = false,
  svgIconProps,
  children,
  ...rest
}) => {
  const { label } = kD();
  const { sx, ...restProps } = rest;
  return import_react33.default.createElement(
    LoadingButton_default,
    {
      startIcon: !hideText && import_react33.default.createElement(SaveOutlined_default, { ...svgIconProps }),
      sx: { minWidth: 0, ...sx },
      variant: "contained",
      className: n.SaveButton,
      ...restProps
    },
    hideText ? import_react33.default.createElement(SaveOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
  );
}, "SaveButton");
var CloneButton = __name(({
  resource: resourceNameFromProps,
  resourceNameOrRouteName,
  recordItemId,
  hideText = false,
  accessControl,
  svgIconProps,
  meta,
  children,
  onClick,
  ...rest
}) => {
  const { to, label, title, hidden, disabled, LinkComponent } = SD({
    resource: resourceNameFromProps ?? resourceNameOrRouteName,
    id: recordItemId,
    meta,
    accessControl
  });
  if (hidden)
    return null;
  const { sx, ...restProps } = rest;
  return import_react34.default.createElement(
    LinkComponent,
    {
      to,
      replace: false,
      onClick: (e2) => {
        if (disabled) {
          e2.preventDefault();
          return;
        }
        if (onClick) {
          e2.preventDefault();
          onClick(e2);
        }
      },
      style: { textDecoration: "none" }
    },
    import_react34.default.createElement(
      Button_default,
      {
        disabled,
        startIcon: !hideText && import_react34.default.createElement(AddBoxOutlined_default, { ...svgIconProps }),
        title,
        sx: { minWidth: 0, ...sx },
        className: n.CloneButton,
        ...restProps
      },
      hideText ? import_react34.default.createElement(AddBoxOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
    )
  );
}, "CloneButton");
var ImportButton = __name(({
  inputProps,
  hideText = false,
  loading = false,
  svgIconProps,
  children,
  ...rest
}) => {
  const { label } = VD();
  const { sx, ...restProps } = rest;
  return import_react35.default.createElement("label", { htmlFor: "contained-button-file" }, import_react35.default.createElement("input", { ...inputProps, id: "contained-button-file", multiple: true, hidden: true }), import_react35.default.createElement(
    LoadingButton_default,
    {
      component: "span",
      startIcon: !hideText && import_react35.default.createElement(ImportExportOutlined_default, { ...svgIconProps }),
      loadingPosition: hideText ? "center" : "start",
      loading,
      sx: { minWidth: 0, ...sx },
      className: n.ImportButton,
      ...restProps
    },
    hideText ? import_react35.default.createElement(ImportExportOutlined_default, { fontSize: "small", ...svgIconProps }) : children ?? label
  ));
}, "ImportButton");
var CircularDeterminate = __name(({
  undoableTimeout,
  message
}) => {
  const [progress, setProgress] = (0, import_react36.useState)(100);
  const [timeCount, setTimeCount] = (0, import_react36.useState)(undoableTimeout);
  (0, import_react36.useEffect)(() => {
    const increaseProgress = 100 / undoableTimeout;
    const timer = setInterval(() => {
      setTimeCount((prevProgress) => prevProgress - 1);
      setProgress((prevProgress) => prevProgress - increaseProgress);
    }, 1e3);
    if (timeCount === 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeCount]);
  return import_react36.default.createElement(import_react36.default.Fragment, null, import_react36.default.createElement(Box_default, { sx: { position: "relative", display: "inline-flex" } }, import_react36.default.createElement(
    CircularProgress_default,
    {
      color: "inherit",
      variant: "determinate",
      value: progress
    }
  ), import_react36.default.createElement(
    Box_default,
    {
      sx: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    import_react36.default.createElement(Typography_default, { component: "div" }, timeCount)
  )), import_react36.default.createElement(
    Box_default,
    {
      sx: {
        marginLeft: "10px",
        maxWidth: { xs: "150px", md: "100%" }
      }
    },
    import_react36.default.createElement(Typography_default, { variant: "subtitle2" }, message)
  ));
}, "CircularDeterminate");
var TextField6 = __name(({ value, ...rest }) => {
  return import_react37.default.createElement(Typography_default, { variant: "body2", ...rest }, value);
}, "TextField");
var TagField = __name(({ value, ...rest }) => {
  return import_react38.default.createElement(Chip_default, { label: value == null ? void 0 : value.toString(), ...rest });
}, "TagField");
var EmailField = __name(({ value, ...rest }) => {
  return import_react39.default.createElement(Typography_default, { variant: "body2" }, import_react39.default.createElement(Link_default, { href: `mailto:${value}`, ...rest }, value));
}, "EmailField");
var BooleanField = __name(({
  value,
  valueLabelTrue = "true",
  valueLabelFalse = "false",
  trueIcon,
  falseIcon,
  svgIconProps,
  ...rest
}) => {
  return import_react40.default.createElement(Tooltip_default, { title: value ? valueLabelTrue : valueLabelFalse, ...rest }, value ? import_react40.default.createElement("span", null, trueIcon ?? import_react40.default.createElement(CheckOutlined_default, { ...svgIconProps })) : import_react40.default.createElement("span", null, falseIcon ?? import_react40.default.createElement(CloseOutlined_default, { ...svgIconProps })));
}, "BooleanField");
import_dayjs.default.extend(import_localizedFormat.default);
var defaultLocale = import_dayjs.default.locale();
var DateField = __name(({
  value,
  locales,
  format: dateFormat = "L",
  ...rest
}) => {
  return import_react41.default.createElement(Typography_default, { variant: "body2", ...rest }, (0, import_dayjs.default)(value).locale(locales || defaultLocale).format(dateFormat));
}, "DateField");
var FileField = __name(({
  title,
  src,
  ...rest
}) => {
  return import_react42.default.createElement(UrlField, { value: src, title, ...rest }, title ?? src);
}, "FileField");
var UrlField = __name(({
  children,
  value,
  ...rest
}) => {
  return import_react43.default.createElement(Typography_default, { variant: "body2" }, import_react43.default.createElement(Link_default, { href: value, ...rest }, children ?? value));
}, "UrlField");
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl === "object" && Intl && typeof Intl.NumberFormat === "function");
}
__name(toLocaleStringSupportsOptions, "toLocaleStringSupportsOptions");
var NumberField = __name(({
  value,
  locale,
  options,
  ...rest
}) => {
  const number = Number(value);
  return import_react44.default.createElement(Typography_default, { variant: "body2", ...rest }, toLocaleStringSupportsOptions() ? number.toLocaleString(locale, options) : number);
}, "NumberField");
var MarkdownField = __name(({ value = "" }) => {
  return import_react45.default.createElement(
    import_react_markdown.default,
    {
      remarkPlugins: [import_remark_gfm.default]
    },
    value
  );
}, "MarkdownField");
var Breadcrumb = __name(({
  breadcrumbProps,
  showHome = true,
  hideIcons = false,
  meta
}) => {
  var _a, _b;
  const { breadcrumbs } = Yb({ meta });
  const routerType = Z();
  const NewLink = rt();
  const { Link: LegacyLink } = te();
  const ActiveLink = routerType === "legacy" ? LegacyLink : NewLink;
  const { hasDashboard } = se();
  const { resources } = z();
  const rootRouteResource = Ko("/", resources);
  if (breadcrumbs.length === 1) {
    return null;
  }
  const LinkRouter = __name((props) => import_react46.default.createElement(Link_default, { ...props, component: ActiveLink }), "LinkRouter");
  return import_react46.default.createElement(
    Breadcrumbs_default,
    {
      "aria-label": "breadcrumb",
      sx: {
        paddingY: 2,
        paddingX: 2,
        ...(breadcrumbProps == null ? void 0 : breadcrumbProps.sx) ?? {}
      },
      ...breadcrumbProps
    },
    showHome && (hasDashboard || rootRouteResource.found) && import_react46.default.createElement(
      LinkRouter,
      {
        underline: "hover",
        sx: {
          display: "flex",
          alignItems: "center"
        },
        color: "inherit",
        to: "/"
      },
      ((_b = (_a = rootRouteResource == null ? void 0 : rootRouteResource.resource) == null ? void 0 : _a.meta) == null ? void 0 : _b.icon) ?? import_react46.default.createElement(
        HomeOutlined_default,
        {
          sx: {
            fontSize: "18px"
          }
        }
      )
    ),
    breadcrumbs.map(({ label, icon, href }) => {
      return import_react46.default.createElement(
        Grid_default,
        {
          key: label,
          sx: {
            display: "flex",
            alignItems: "center",
            "& .MuiSvgIcon-root": {
              fontSize: "16px"
            }
          }
        },
        !hideIcons && icon,
        href ? import_react46.default.createElement(
          LinkRouter,
          {
            underline: "hover",
            sx: {
              display: "flex",
              alignItems: "center",
              fontSize: "14px"
            },
            color: "inherit",
            to: href,
            variant: "subtitle1",
            marginLeft: 0.5
          },
          label
        ) : import_react46.default.createElement(Typography_default, { fontSize: "14px" }, label)
      );
    })
  );
}, "Breadcrumb");
var AutoSaveIndicator = __name(({
  status,
  elements: {
    success = import_react47.default.createElement(
      Message,
      {
        key: "autoSave.success",
        defaultMessage: "saved",
        icon: import_react47.default.createElement(TaskAltOutlined_default, { fontSize: "small" })
      }
    ),
    error = import_react47.default.createElement(
      Message,
      {
        key: "autoSave.error",
        defaultMessage: "auto save failure",
        icon: import_react47.default.createElement(ErrorOutlineOutlined_default, { fontSize: "small" })
      }
    ),
    loading = import_react47.default.createElement(
      Message,
      {
        key: "autoSave.loading",
        defaultMessage: "saving...",
        icon: import_react47.default.createElement(SyncOutlined_default, { fontSize: "small" })
      }
    ),
    idle = import_react47.default.createElement(
      Message,
      {
        key: "autoSave.idle",
        defaultMessage: "waiting for changes",
        icon: import_react47.default.createElement(MoreHorizOutlined_default, { fontSize: "small" })
      }
    )
  } = {}
}) => {
  return import_react47.default.createElement(
    cc,
    {
      status,
      elements: {
        success,
        error,
        loading,
        idle
      }
    }
  );
}, "AutoSaveIndicator");
var Message = __name(({
  key,
  defaultMessage,
  icon
}) => {
  const translate = G();
  return import_react47.default.createElement(
    Typography_default,
    {
      color: "gray",
      fontSize: "0.8rem",
      position: "relative",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      marginRight: ".3rem"
    },
    translate(key, defaultMessage),
    import_react47.default.createElement("span", { style: { position: "relative", top: "3px", marginLeft: "3px" } }, icon)
  );
}, "Message");
var lightPalette = {
  mode: "light",
  primary: {
    main: "#67be23",
    contrastText: "#fff"
  },
  secondary: {
    main: "#2A132E",
    contrastText: "#fff"
  },
  background: {
    default: "#f0f0f0",
    paper: "#ffffff"
  },
  success: {
    main: "#67be23",
    contrastText: "#fff"
  },
  error: {
    main: "#fa541c",
    contrastText: "#fff"
  },
  warning: {
    main: "#fa8c16",
    contrastText: "#fff"
  },
  info: {
    main: "#0b82f0",
    contrastText: "#fff"
  },
  divider: "rgba(0,0,0,0)",
  text: {
    primary: "#626262",
    secondary: "#9f9f9f",
    disabled: "#c1c1c1"
  }
};
var darkPalette = {
  mode: "dark",
  primary: {
    main: "#67be23",
    contrastText: "#fff"
  },
  secondary: {
    main: "#2A132E",
    contrastText: "#fff"
  },
  background: {
    default: "#212121",
    paper: "#242424"
  },
  success: {
    main: "#67be23",
    contrastText: "#fff"
  },
  error: {
    main: "#ee2a1e",
    contrastText: "#fff"
  },
  warning: {
    main: "#fa8c16",
    contrastText: "#fff"
  },
  info: {
    main: "#1890ff",
    contrastText: "#fff"
  },
  divider: "rgba(0,0,0,0)",
  text: {
    primary: "#fff",
    secondary: "rgba(255,255,255,0.7)",
    disabled: "#d1d1d1"
  }
};
var typography = {
  fontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(",")
};
var RefinePalettes = {
  Blue: {
    mode: "light",
    primary: {
      main: "#1976D2",
      light: "#4791db",
      dark: "#115293"
    }
  },
  BlueDark: {
    mode: "dark",
    primary: {
      main: "#67b7f7",
      light: "#85c5f8",
      dark: "#4880ac"
    }
  },
  Purple: {
    mode: "light",
    primary: {
      main: "#7B1FA2",
      light: "#954bb4",
      dark: "#561571"
    }
  },
  PurpleDark: {
    mode: "dark",
    primary: {
      main: "#AB47BC",
      light: "#bb6bc9",
      dark: "#773183"
    }
  },
  Magenta: {
    mode: "light",
    primary: {
      main: "#C2185B",
      light: "#ce467b",
      dark: "#87103f"
    }
  },
  MagentaDark: {
    mode: "dark",
    primary: {
      main: "#EC407A",
      light: "#ef6694",
      dark: "#a52c55"
    }
  },
  Red: {
    mode: "light",
    primary: {
      main: "#D32F2F",
      light: "#db5858",
      dark: "#932020"
    }
  },
  RedDark: {
    mode: "dark",
    primary: {
      main: "#EF5350",
      light: "#f27573",
      dark: "#a73a38"
    }
  },
  Orange: {
    mode: "light",
    primary: {
      main: "#F57C00",
      light: "#f79633",
      dark: "#ab5600"
    }
  },
  OrangeDark: {
    mode: "dark",
    primary: {
      main: "#FFA726",
      light: "#ffb851",
      dark: "#b2741a"
    }
  },
  Yellow: {
    mode: "light",
    primary: {
      main: "#FFA000",
      light: "#ffb333",
      dark: "#b27000"
    }
  },
  YellowDark: {
    mode: "dark",
    primary: {
      main: "#FFCA28",
      light: "#ffd453",
      dark: "#E87040"
    }
  },
  Green: {
    mode: "light",
    primary: {
      main: "#689F38",
      light: "#86b25f",
      dark: "#486f27"
    }
  },
  GreenDark: {
    mode: "dark",
    primary: {
      main: "#9CCC65",
      light: "#afd683",
      dark: "#6d8e46"
    }
  }
};
var commonThemeProperties = {
  shape: {
    borderRadius: 6
  },
  typography: {
    ...typography
  }
};
var LightTheme = createTheme_default({
  ...commonThemeProperties,
  palette: lightPalette,
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#fff"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01))"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 800,
          lineHeight: "2rem"
        }
      }
    }
  }
});
var DarkTheme = createTheme_default({
  ...commonThemeProperties,
  palette: darkPalette,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.025))"
        }
      }
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent"
      }
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 800,
          lineHeight: "2rem"
        }
      }
    }
  }
});
var RefineThemes = Object.keys(RefinePalettes).reduce((acc, key) => {
  const paletteName = key;
  return {
    ...acc,
    [key]: createTheme_default({
      palette: {
        ...RefinePalettes[paletteName]
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...ownerState.variant === "contained" && ownerState.color === "primary" && {
                color: "#fff"
              }
            })
          }
        }
      }
    })
  };
}, {});
var useNotificationProvider = __name(() => {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const notificationProvider2 = {
    open: ({
      message,
      type,
      undoableTimeout,
      key,
      cancelMutation,
      description
    }) => {
      if (type === "progress") {
        const action = __name((key2) => import_react48.default.createElement(
          IconButton_default,
          {
            onClick: () => {
              cancelMutation == null ? void 0 : cancelMutation();
              closeSnackbar(key2);
            },
            color: "inherit"
          },
          import_react48.default.createElement(UndoOutlined_default, null)
        ), "action");
        enqueueSnackbar(
          import_react48.default.createElement(import_react48.default.Fragment, null, import_react48.default.createElement(
            CircularDeterminate,
            {
              undoableTimeout: undoableTimeout ?? 0,
              message
            }
          )),
          {
            action,
            preventDuplicate: true,
            key,
            autoHideDuration: (undoableTimeout ?? 0) * 1e3
          }
        );
      } else {
        enqueueSnackbar(
          import_react48.default.createElement(Box_default, null, import_react48.default.createElement(Typography_default, { variant: "subtitle2", component: "h6" }, description), import_react48.default.createElement(Typography_default, { variant: "caption", component: "p" }, message)),
          {
            key,
            variant: type
          }
        );
      }
    },
    close: (key) => {
      closeSnackbar(key);
    }
  };
  return notificationProvider2;
}, "useNotificationProvider");
var notificationProvider = useNotificationProvider;
var SnackbarProviderWithDefaultValues = __name(({
  anchorOrigin = {
    vertical: "top",
    horizontal: "right"
  },
  disableWindowBlurListener = true,
  ...rest
}) => {
  return import_react49.default.createElement(
    SnackbarProvider,
    {
      anchorOrigin,
      disableWindowBlurListener,
      ...rest
    }
  );
}, "SnackbarProviderWithDefaultValues");
var RefineSnackbarProvider = styled_default(SnackbarProviderWithDefaultValues)`
&.SnackbarItem-contentRoot {
    background-color: ${(props) => props.theme.palette.background.default};
    color: ${(props) => props.theme.palette.primary.main};
}
&.SnackbarItem-variantSuccess {
    background-color: ${(props) => props.theme.palette.success.main};
    color: ${(props) => props.theme.palette.success.contrastText};
}
&.SnackbarItem-variantError {
    background-color: ${(props) => props.theme.palette.error.main};
    color: ${(props) => props.theme.palette.error.contrastText};
}
&.SnackbarItem-variantInfo {
    background-color: ${(props) => props.theme.palette.info.main};
    color: ${(props) => props.theme.palette.info.contrastText};
}
&.SnackbarItem-variantWarning {
    background-color: ${(props) => props.theme.palette.warning.main};
    color: ${(props) => props.theme.palette.warning.contrastText};
}
`;
export {
  AuthPage,
  AutoSaveIndicator,
  BooleanField,
  Breadcrumb,
  CircularDeterminate,
  CloneButton,
  Create,
  CreateButton,
  DarkTheme,
  DateField,
  DeleteButton,
  Edit,
  EditButton,
  EmailField,
  ErrorComponent,
  ExportButton,
  FileField,
  HamburgerMenu,
  Header,
  ImportButton,
  Layout,
  LightTheme,
  List4 as List,
  ListButton,
  LoginPage,
  MarkdownField,
  SnackbarContent as NotistackSnackbarContent,
  NumberField,
  ReadyPage,
  RefineSnackbarProvider,
  RefineThemes,
  RefreshButton,
  SaveButton,
  Show,
  ShowButton,
  Sider,
  SnackbarProvider,
  TagField,
  TextField6 as TextFieldComponent,
  ThemedHeader,
  ThemedHeaderV2,
  ThemedLayout,
  ThemedLayoutContext,
  ThemedLayoutContextProvider,
  ThemedLayoutV2,
  ThemedSider,
  ThemedSiderV2,
  ThemedTitle,
  ThemedTitleV2,
  Title,
  UrlField,
  WelcomePage,
  notificationProvider,
  useAutocomplete,
  useDataGrid,
  useNotificationProvider,
  useSiderVisible,
  useSnackbar,
  useThemedLayoutContext,
  withSnackbar
};
/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

react-is/cjs/react-is.development.js:
  (** @license React v17.0.2
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

repeat-string/index.js:
  (*!
   * repeat-string <https://github.com/jonschlinkert/repeat-string>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
*/
//# sourceMappingURL=@refinedev_mui.js.map
