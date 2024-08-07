"use client";
import {
  L,
  d,
  debounce_default,
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
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/@refinedev/devtools/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/@aliemir/dom-to-fiber-utils/dist/index.mjs
var F = (e) => {
  let r = e, t;
  for (; !t && r; )
    t = Object.keys(r).find((n) => n.startsWith("__reactFiber$")), t || (r = r.parentElement);
  return t && r ? r[t] : null;
};
var i = (e) => {
  var r, t, n, u2;
  return e && (((r = e.type) == null ? void 0 : r.displayName) || ((t = e.type) == null ? void 0 : t.name) || ((n = e.elementType) == null ? void 0 : n.displayName) || ((u2 = e.elementType) == null ? void 0 : u2.name)) || null;
};
var l = (e) => e.return || null;
var s = (e) => {
  let r = e;
  for (; r; ) {
    if (r.stateNode)
      return r;
    r = l(r);
  }
  return null;
};
var p = (e) => e.stateNode;
var o = (e) => {
  if (!e)
    return null;
  if (i(e))
    return e;
  let r = l(e);
  return r ? o(r) : null;
};

// node_modules/@refinedev/devtools/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react7 = __toESM(require_react(), 1);
var y2 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var W = (e) => {
  let { devtoolsUrl: s2 } = import_react4.default.useContext(y), [m, n] = import_react4.default.useState([]), c = import_react4.default.useCallback(async () => (await (await fetch(`${s2 ?? "http://localhost:5001"}/api/unique-trace-items`)).json()).data, [s2]), o2 = import_react4.default.useCallback((r, p2) => {
    let t = r, h, i2, x = false;
    for (; !x && t; )
      h = o(t), i2 = s(h), x = p2.includes(i(h) ?? ""), x || (t = l(t));
    return i2 && h ? { stateNode: i2, nameFiber: h } : { stateNode: null, nameFiber: null };
  }, []), l2 = import_react4.default.useCallback((r) => {
    let p2 = [];
    return r.forEach((t) => {
      p2.find((i2) => i2.element === t.element) || p2.push(t);
    }), p2;
  }, []), d2 = import_react4.default.useCallback((r, p2) => {
    var x;
    if (!r)
      return [];
    let t = [], h = F(r), i2 = o2(h, p2);
    if (i2.nameFiber && i2.stateNode) {
      let w = p(i2.stateNode), D = i(i2.nameFiber);
      w && D && t.push({ element: w, name: D });
    }
    for (let w = 0; w < ((x = r == null ? void 0 : r.children) == null ? void 0 : x.length); w++)
      t.push(...d2(r.children[w], p2));
    return t;
  }, [o2]), a = import_react4.default.useCallback(async () => {
    let r = await c(), p2 = d2(document.body, r), t = l2(p2);
    n(t);
  }, [c, d2, l2]);
  return import_react4.default.useEffect(() => {
    e && a();
  }, [e, a]), { selectableElements: m };
};
var S = ({ children: e }) => (import_react5.default.useEffect(() => {
  let s2 = document.createElement("style");
  return s2.innerHTML = e, document.head.appendChild(s2), () => {
    document.head.removeChild(s2);
  };
}, [e]), null);
var k = (e) => import_react7.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", ...e }, import_react7.default.createElement("path", { fill: "#0FBDBD", fillRule: "evenodd", d: "M9 1a1 1 0 0 0-2 0v2.1A5.006 5.006 0 0 0 3.1 7H1a1 1 0 0 0 0 2h2.1A5.006 5.006 0 0 0 7 12.9V15a1 1 0 1 0 2 0v-2.1A5.006 5.006 0 0 0 12.9 9H15a1 1 0 1 0 0-2h-2.1A5.006 5.006 0 0 0 9 3.1V1Zm2 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z", clipRule: "evenodd" }));
var $ = (e) => import_react7.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", ...e }, import_react7.default.createElement("path", { fill: "#14141F", fillRule: "evenodd", d: "M9 1a1 1 0 0 0-2 0v2.1A5.006 5.006 0 0 0 3.1 7H1a1 1 0 0 0 0 2h2.1A5.006 5.006 0 0 0 7 12.9V15a1 1 0 1 0 2 0v-2.1A5.006 5.006 0 0 0 12.9 9H15a1 1 0 1 0 0-2h-2.1A5.006 5.006 0 0 0 9 3.1V1Zm2 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z", clipRule: "evenodd" }));
var se = ({ element: e, name: s2, onSelect: m }) => {
  let [n] = import_react6.default.useState(() => {
    let { top: l2, left: d2, width: a, height: r } = e.getBoundingClientRect(), { scrollLeft: p2, scrollTop: t } = document.documentElement, h = d2 + p2, i2 = l2 + t;
    return { left: h, top: i2, width: a, height: r };
  }), c = import_react6.default.useRef(null);
  import_react6.default.useEffect(() => {
    let l2 = debounce_default(() => {
      var D, V, z, _, B;
      let { top: a, left: r, width: p2, height: t } = e.getBoundingClientRect(), { scrollLeft: h, scrollTop: i2 } = document.documentElement, x = r + h, w = a + i2;
      (D = c.current) == null || D.style.setProperty("left", `${x}px`), (V = c.current) == null || V.style.setProperty("top", `${w}px`), (z = c.current) == null || z.style.setProperty("width", `${p2}px`), (_ = c.current) == null || _.style.setProperty("height", `${t}px`), (B = c.current) == null || B.style.setProperty("opacity", "1");
    }, 200, { leading: false, trailing: true }), d2 = debounce_default(() => {
      var a;
      (a = c.current) == null || a.style.setProperty("opacity", "0");
    }, 200, { leading: true, trailing: false });
    return document.addEventListener("scroll", l2), document.addEventListener("scroll", d2), () => {
      document.removeEventListener("scroll", l2), document.removeEventListener("scroll", d2);
    };
  }, [e]);
  let o2 = import_react6.default.useMemo(() => {
    let l2 = { width: 22, height: 22 }, d2 = s2.length * 7.5, a = { width: l2.width + d2, height: l2.height }, r = 4;
    return n.top - a.height > 0 && n.left + a.width < window.innerWidth && n.width > a.width ? { left: r / 2, top: a.height * -1 - r } : n.height >= a.height * 1.5 && n.width >= a.width * 1.5 ? { left: 0 + r, top: 0 + r } : n.left - a.width > 0 ? { right: n.width + r, top: 0 - 1 } : n.left + n.width + a.width < window.innerWidth ? { left: n.width + r, top: 0 - 1 } : n.top + n.height + a.height < document.documentElement.scrollHeight ? { left: 0 - 1, top: n.height + r } : { left: 0, top: 0 };
  }, [n, s2.length]);
  return import_react6.default.createElement("button", { type: "button", className: "selector-xray-box", onClick: (l2) => {
    l2 == null || l2.preventDefault(), l2 == null || l2.stopPropagation(), m(s2);
  }, ref: c, style: { position: "absolute", ...n } }, import_react6.default.createElement("div", { style: { position: "absolute", ...o2 }, className: "selector-xray-info" }, import_react6.default.createElement("span", { className: "selector-xray-info-icon" }, import_react6.default.createElement($, { width: 12, height: 12, style: { pointerEvents: "none" } })), import_react6.default.createElement("span", { className: "selector-xray-info-title" }, ` ${s2}`)));
};
var R = ({ elements: e, onSelect: s2 }) => {
  let [m, n] = import_react6.default.useState(null);
  return import_react6.default.useEffect(() => {
    if (!m) {
      let c = document.createElement("div");
      return c.id = "selector-box-root", document.body.appendChild(c), n(c), () => {
        document.body.removeChild(c), n(null);
      };
    }
    return () => 0;
  }, []), m ? import_react6.default.createElement(import_react6.default.Fragment, null, (0, import_react_dom.createPortal)(e.map((c, o2) => import_react6.default.createElement(se, { key: `selector-element-${o2}-${c.name}`, ...c, onSelect: s2 })), m), import_react6.default.createElement(S, null, `
          .selector-xray-box {
            display: flex;
            margin: 0;
            padding: 0;
            appearance: none;
            z-index: 9999;
            border: 2px dashed #47EBEB;
            border-radius: 6px;
            background: rgba(71, 235, 235, 0.01);
            transition: opacity 0.2s ease-in-out;
            cursor: crosshair;
          }
        
          .selector-xray-info {
            display: flex;
            justify-content: center;
            align-items: center;
      
            z-index: 10;
      
            padding: 3px 0;
            min-width: 22px;
            height: 22px;
      
            color: #14141F;
            background: #47EBEB;
      
            font-size: 12px;
            line-height: 16px;
            font-family: monospace;
            border-radius: 11px;
          }
      
          .selector-xray-info-icon {
            display: flex;
            min-width: 22px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
          }
      
          .selector-xray-info-title {
            display: block;
            max-width: 0;
            overflow: hidden;
            transition-property: max-width, padding-right;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0.1s;
          }
      
          .selector-xray-box:hover .selector-xray-info-title {
            max-width: 200px;
            padding-right: 8px;
          }
        `)) : null;
};
var X = ({ active: e, setActive: s2, onHighlight: m, icon: n, style: c }) => {
  let { selectableElements: o2 } = W(e);
  return import_react3.default.createElement("div", { style: c }, import_react3.default.createElement("div", { role: "button", title: "Element Selector", className: "refine-devtools-selector-button", onClick: (d2) => {
    var a;
    d2.preventDefault(), d2.stopPropagation(), (a = document == null ? void 0 : document.activeElement) == null || a.blur(), s2((r) => !r);
  } }, n), e && import_react3.default.createElement(R, { elements: o2, onSelect: (d2) => {
    m(d2), s2(false);
  } }), import_react3.default.createElement(S, null, `
        .refine-devtools-selector-button {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
          transform: rotate(0deg);
          transition: transform 0.2s ease-in-out;
        }

        .refine-devtools-selector-button:hover {
          transform: rotate(180deg);
        }
    `));
};
var Y = (e) => y2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 157, height: 25, viewBox: "0 0 157 25", fill: "none", ...e }, y2.createElement("g", null, y2.createElement("path", { fill: "#1D1E30", d: "M17 1h123v24H17z" }), y2.createElement("path", { fill: "#1D1E30", d: "M6.265 9.205A12 12 0 0 1 17.649 1H25v24H1L6.265 9.205ZM150.735 9.205A12 12 0 0 0 139.351 1H132v24h24l-5.265-15.795Z" }), y2.createElement("path", { fill: "currentColor", d: "M25 14.333A1.333 1.333 0 1 1 25 17a1.333 1.333 0 0 1 0-2.667Z" }), y2.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M23.211 20.578a4 4 0 0 0 3.578 0l4-2A4 4 0 0 0 33 15v-4a4 4 0 0 0-2.211-3.578l-4-2a4 4 0 0 0-3.578 0l-4 2A4 4 0 0 0 17 11v4a4 4 0 0 0 2.211 3.578l4 2Zm-.878-4.911a2.667 2.667 0 0 0 5.334 0v-5.334a2.667 2.667 0 0 0-5.334 0v5.334Z", clipRule: "evenodd" }), y2.createElement("path", { fill: "#CFD7E2", d: "M42.152 17a.287.287 0 0 1-.192-.072.287.287 0 0 1-.072-.192V9.032c0-.072.024-.132.072-.18a.264.264 0 0 1 .192-.084h4.2c.288 0 .56.056.816.168a2.135 2.135 0 0 1 1.14 1.128c.112.256.168.532.168.828v3.984c0 .296-.056.572-.168.828a2.135 2.135 0 0 1-1.14 1.128 2.014 2.014 0 0 1-.816.168h-4.2Zm1.38-1.644h2.82a.455.455 0 0 0 .336-.132.497.497 0 0 0 .132-.348v-3.984a.455.455 0 0 0-.132-.336.436.436 0 0 0-.336-.144h-2.82v4.944Zm13.18-5.196a.244.244 0 0 1-.253.252h-4.44v1.656h4.02c.072 0 .132.024.18.072a.227.227 0 0 1 .084.18v1.128a.264.264 0 0 1-.084.192.244.244 0 0 1-.18.072h-4.02v1.644h4.44c.072 0 .132.028.18.084a.244.244 0 0 1 .072.18v1.116a.287.287 0 0 1-.072.192.244.244 0 0 1-.18.072h-5.832a.244.244 0 0 1-.18-.072.287.287 0 0 1-.072-.192V9.032c0-.072.024-.132.072-.18a.227.227 0 0 1 .18-.084h5.832c.072 0 .132.028.18.084a.244.244 0 0 1 .072.18v1.128ZM63.014 17h-2.232a.387.387 0 0 1-.216-.072.356.356 0 0 1-.144-.168l-1.716-4.296a.853.853 0 0 1-.072-.24 1.783 1.783 0 0 1-.024-.264V9.032c0-.072.024-.132.072-.18a.227.227 0 0 1 .18-.084h1.128c.072 0 .132.028.18.084a.227.227 0 0 1 .084.18v2.616c0 .072.008.156.024.252s.04.176.072.24l1.284 3.216h.528l1.284-3.216a.853.853 0 0 0 .072-.24c.016-.096.024-.18.024-.252V9.032c0-.072.024-.132.072-.18a.264.264 0 0 1 .192-.084h1.128c.072 0 .132.028.18.084a.244.244 0 0 1 .072.18v2.928c0 .072-.008.16-.024.264a.853.853 0 0 1-.072.24l-1.716 4.296a.356.356 0 0 1-.144.168.387.387 0 0 1-.216.072ZM73.29 8.768c.072 0 .132.028.18.084a.227.227 0 0 1 .084.18v1.128a.227.227 0 0 1-.084.18.244.244 0 0 1-.18.072h-2.208v6.324a.264.264 0 0 1-.084.192.244.244 0 0 1-.18.072H69.69a.244.244 0 0 1-.18-.072.287.287 0 0 1-.072-.192v-6.324H67.23a.287.287 0 0 1-.192-.072.244.244 0 0 1-.072-.18V9.032c0-.072.024-.132.072-.18a.264.264 0 0 1 .192-.084h6.06Zm6.507.012c.296 0 .572.056.828.168a2.171 2.171 0 0 1 1.128 1.128c.112.256.168.528.168.816v3.996c0 .288-.056.56-.168.816a2.171 2.171 0 0 1-1.128 1.128 2.043 2.043 0 0 1-.828.168h-2.34c-.296 0-.572-.056-.828-.168a2.171 2.171 0 0 1-1.128-1.128 2.014 2.014 0 0 1-.168-.816v-3.996c0-.288.056-.56.168-.816a2.171 2.171 0 0 1 1.128-1.128c.256-.112.532-.168.828-.168h2.34Zm.48 2.112a.436.436 0 0 0-.144-.336.455.455 0 0 0-.336-.132h-2.34a.497.497 0 0 0-.348.132.455.455 0 0 0-.132.336v3.996c0 .136.044.248.132.336a.497.497 0 0 0 .348.132h2.34a.455.455 0 0 0 .336-.132.436.436 0 0 0 .144-.336v-3.996Zm7.888-2.112c.295 0 .572.056.828.168a2.171 2.171 0 0 1 1.128 1.128c.112.256.168.528.168.816v3.996c0 .288-.056.56-.168.816a2.171 2.171 0 0 1-1.128 1.128 2.043 2.043 0 0 1-.828.168h-2.34c-.297 0-.573-.056-.829-.168a2.171 2.171 0 0 1-1.127-1.128 2.014 2.014 0 0 1-.168-.816v-3.996c0-.288.056-.56.168-.816a2.171 2.171 0 0 1 1.127-1.128c.257-.112.532-.168.829-.168h2.34Zm.48 2.112a.436.436 0 0 0-.144-.336.455.455 0 0 0-.337-.132h-2.34a.497.497 0 0 0-.347.132.455.455 0 0 0-.133.336v3.996c0 .136.044.248.133.336a.497.497 0 0 0 .347.132h2.34a.455.455 0 0 0 .337-.132.436.436 0 0 0 .143-.336v-3.996ZM98.294 17H92.68a.287.287 0 0 1-.192-.072.287.287 0 0 1-.072-.192V9.032c0-.072.024-.132.072-.18a.264.264 0 0 1 .192-.084h1.116c.072 0 .132.028.18.084a.227.227 0 0 1 .084.18v6.324h4.236c.072 0 .132.028.18.084a.244.244 0 0 1 .072.18v1.116a.287.287 0 0 1-.072.192.244.244 0 0 1-.18.072Zm7.336-5.76a.287.287 0 0 1-.192-.072.287.287 0 0 1-.072-.192v-.084a.455.455 0 0 0-.132-.336.436.436 0 0 0-.336-.144h-2.352a.46.46 0 0 0-.336.144.455.455 0 0 0-.132.336v.696c0 .136.044.252.132.348a.482.482 0 0 0 .336.132h2.352c.288 0 .56.056.816.168a2.171 2.171 0 0 1 1.128 1.128c.112.256.168.528.168.816v.696c0 .296-.056.572-.168.828a2.171 2.171 0 0 1-1.128 1.128 2.014 2.014 0 0 1-.816.168h-2.352c-.288 0-.56-.056-.816-.168a2.171 2.171 0 0 1-1.128-1.128 2.043 2.043 0 0 1-.168-.828v-.084c0-.072.024-.132.072-.18a.264.264 0 0 1 .192-.084h1.116c.072 0 .132.028.18.084a.227.227 0 0 1 .084.18v.084c0 .136.044.252.132.348a.482.482 0 0 0 .336.132h2.352a.455.455 0 0 0 .336-.132.497.497 0 0 0 .132-.348v-.696a.455.455 0 0 0-.132-.336.455.455 0 0 0-.336-.132h-2.352c-.288 0-.56-.056-.816-.168a2.171 2.171 0 0 1-1.128-1.128 2.099 2.099 0 0 1-.168-.828v-.696c0-.296.056-.572.168-.828a2.171 2.171 0 0 1 1.128-1.128c.256-.112.528-.168.816-.168h2.352c.288 0 .56.056.816.168a2.171 2.171 0 0 1 1.128 1.128c.112.256.168.532.168.828v.084a.287.287 0 0 1-.072.192.244.244 0 0 1-.18.072h-1.128Z" })));
var O = ({ onClick: e, onSelectorHighlight: s2, selectorActive: m, setSelectorActive: n }) => import_react2.default.createElement("div", { role: "button", className: "devtools-selector-pin-box", onClick: e }, import_react2.default.createElement(Y, null), import_react2.default.createElement(X, { style: { position: "absolute", top: 5, right: 18, width: "16px", height: "16px" }, icon: import_react2.default.createElement(k, { width: 16, height: 16, style: { pointerEvents: "none" } }), onHighlight: s2, active: m, setActive: n }), import_react2.default.createElement(S, null, `
            .devtools-selector-pin-box {
              z-index: 9999;
              position: relative;
              user-select: none;
              -webkit-user-select: none;
              background: none;
              border: none;
              padding: 0;
              margin: 0;
              appearance: none;
              padding-right: 1px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              color: #6C7793;
              transition: color 0.1s ease-in-out;
            }

            .devtools-selector-pin-box:hover {
              color: #0FBDBD;
            }
          `));
var U = (e) => e ? "scaleX(1) translateY(0)" : "scaleX(0) translateY(25vw)";
var P = 50;
var v2 = 10;
var le = () => typeof window < "u" ? window.innerWidth * 0.7 : 1440 * 0.7;
var ae = () => typeof window < "u" ? window.innerHeight * 0.7 : 900 * 0.7;
var j = 640;
var q = 360;
var A = (e) => {
  switch (e) {
    case "left":
      return { left: `calc(${P}px + ${v2}px)`, top: "50%", transform: "translateY(-50%)" };
    case "right":
      return { right: `calc(${P}px + ${v2}px)`, top: "50%", transform: "translateY(-50%)" };
    case "top":
      return { left: "50%", top: `calc(${P}px + ${v2}px)`, transform: "translateX(-50%)" };
    case "bottom":
      return { left: "50%", bottom: `calc(${P}px + ${v2}px)`, transform: "translateX(-50%)" };
  }
};
var N = (e) => {
  switch (e) {
    case "left":
    case "right":
      return -v2 - P - v2 + (typeof window < "u" ? window.innerWidth : 1440) - v2;
    case "top":
    case "bottom":
      return -v2 + (typeof window < "u" ? window.innerWidth : 1440) - v2;
  }
};
var L2 = (e) => {
  switch (e) {
    case "left":
    case "right":
      return -v2 + (typeof window < "u" ? window.innerHeight : 900) - v2;
    case "top":
    case "bottom":
      return -v2 - P - v2 + (typeof window < "u" ? window.innerHeight : 900) - v2;
  }
};
var I = (e, s2) => {
  let m = { width: le(), height: ae() }, n = N(e), c = L2(e), o2 = Math.min(n, (s2 ?? m).width), l2 = Math.min(c, (s2 ?? m).height);
  return { width: o2, height: l2 };
};
var E = (e) => {
  let s2 = Math.round(e);
  return s2 % 2 === 0 ? s2 : s2 + 1;
};
var C = (e) => import_react9.default.createElement("svg", { width: 10, height: 26, viewBox: "0 0 10 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, import_react9.default.createElement("rect", { x: 0.5, y: 0.5, width: 9, height: 25, rx: 4.5, fill: "#1D1E30" }), import_react9.default.createElement("path", { d: "M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z", fill: "#303450" }), import_react9.default.createElement("path", { d: "M7 13C7 14.1046 6.10457 15 5 15C3.89543 15 3 14.1046 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13Z", fill: "#303450" }), import_react9.default.createElement("path", { d: "M7 21C7 22.1046 6.10457 23 5 23C3.89543 23 3 22.1046 3 21C3 19.8954 3.89543 19 5 19C6.10457 19 7 19.8954 7 21Z", fill: "#303450" }), import_react9.default.createElement("rect", { x: 0.5, y: 0.5, width: 9, height: 25, rx: 4.5, stroke: "#303450" }));
var J = ({ placement: e, visible: s2, children: m }) => {
  let [n, c] = import_react8.default.useState(false), [o2, l2] = import_react8.default.useState(null), [d2, a] = import_react8.default.useState(null), [r, p2] = import_react8.default.useState(() => {
    let t = I(e);
    return { width: E(t.width), height: E(t.height) };
  });
  return import_react8.default.useEffect(() => {
    let t = () => {
      p2((h) => {
        let i2 = I(e, h);
        return { width: E(i2.width), height: E(i2.height) };
      });
    };
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [e]), import_react8.default.useEffect(() => {
    let t = () => {
      l2(null);
    };
    if (o2 !== null)
      return window.addEventListener("mouseup", t), () => {
        window.removeEventListener("mouseup", t);
      };
  }, [o2]), import_react8.default.useEffect(() => {
    let t = document.body.style.cursor;
    return o2 != null && o2.includes("x") ? document.body.style.cursor = "col-resize" : o2 != null && o2.includes("y") && (document.body.style.cursor = "row-resize"), () => {
      document.body.style.cursor = t;
    };
  }, [o2]), import_react8.default.useEffect(() => {
    let t = (h) => {
      if ((o2 == null ? void 0 : o2[1]) === "x") {
        let i2 = h.clientX - ((d2 == null ? void 0 : d2.x) ?? h.clientX), x = r.width + (o2 === "lx" ? -i2 : i2) * 2;
        p2((w) => ({ ...w, width: E(Math.min(N(e), Math.max(j, x))) }));
      } else if ((o2 == null ? void 0 : o2[1]) === "y") {
        let i2 = h.clientY - ((d2 == null ? void 0 : d2.y) ?? h.clientY), x = r.height + (o2 === "ty" ? -i2 : i2) * 1;
        p2((w) => ({ ...w, height: E(Math.min(L2(e), Math.max(q, x))) }));
      }
    };
    if (o2 !== null)
      return window.addEventListener("mousemove", t), () => {
        window.removeEventListener("mousemove", t);
      };
  }, [o2, e]), import_react8.default.createElement("div", { style: { position: "absolute", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", border: "1px solid rgba(0, 0, 0, 0.5)", transitionProperty: "transform, opacity", transitionTimingFunction: "ease-in-out", transitionDuration: "0.2s", ...A(e), opacity: s2 ? 1 : 0, transform: `${A(e).transform} ${U(s2 ?? false)}`, ...r }, onMouseEnter: () => {
    c(true);
  }, onMouseLeave: () => {
    c(false);
  } }, m({ resizing: o2 }), import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("div", { style: { position: "absolute", left: 0, top: "50%", width: "10px", height: "26px", transform: "translateY(-13px) translateX(-5px)", cursor: "col-resize", transition: "opacity ease-in-out 0.2s", pointerEvents: n || o2 ? "auto" : "none", opacity: n || o2 ? 1 : 0 }, onMouseDown: (t) => {
    l2("lx"), a({ x: t.clientX, y: t.clientY }), t.preventDefault();
  } }, import_react8.default.createElement(C, null)), import_react8.default.createElement("div", { style: { position: "absolute", right: 0, top: "50%", width: "10px", height: "26px", transform: "translateY(-13px) translateX(5px)", cursor: "col-resize", transition: "opacity ease-in-out 0.2s", pointerEvents: n || o2 ? "auto" : "none", opacity: n || o2 ? 1 : 0 }, onMouseDown: (t) => {
    l2("rx"), a({ x: t.clientX, y: t.clientY }), t.preventDefault();
  } }, import_react8.default.createElement(C, null)), import_react8.default.createElement("div", { style: { position: "absolute", left: "50%", top: 0, width: "26px", height: "10px", transform: "translateY(-5px) translateX(-13px)", cursor: "row-resize", transition: "opacity ease-in-out 0.2s", pointerEvents: n || o2 ? "auto" : "none", opacity: n || o2 ? 1 : 0 }, onMouseDown: (t) => {
    l2("ty"), a({ x: t.clientX, y: t.clientY }), t.preventDefault();
  } }, import_react8.default.createElement(C, { style: { transform: "rotate(90deg)", transformOrigin: "13px 13px" } })), import_react8.default.createElement("div", { style: { position: "absolute", left: "50%", bottom: 0, width: "26px", height: "10px", transform: "translateY(5px) translateX(-13px)", cursor: "row-resize", transition: "opacity ease-in-out 0.2s", pointerEvents: n || o2 ? "auto" : "none", opacity: n || o2 ? 1 : 0 }, onMouseDown: (t) => {
    l2("by"), a({ x: t.clientX, y: t.clientY }), t.preventDefault();
  } }, import_react8.default.createElement(C, { style: { transform: "rotate(90deg)", transformOrigin: "13px 13px" } }))));
};
var he = false ? () => null : () => {
  let [e, s2] = import_react.default.useState(false), [m, n] = import_react.default.useState(false), [c] = import_react.default.useState("bottom"), { devtoolsUrl: o2, ws: l2 } = import_react.default.useContext(y), [d2, a] = import_react.default.useState(0), [r, p2] = import_react.default.useState(false), t = import_react.default.useCallback((i2) => {
    l2 && d(l2, v.DEVTOOLS_HIGHLIGHT_IN_MONITOR, { name: i2 }), n(true);
  }, [l2]), h = import_react.default.useCallback(() => {
    n(false);
  }, []);
  return import_react.default.useEffect(() => {
    r && n(false);
  }, [r]), import_react.default.useEffect(() => {
    typeof window < "u" && s2(true);
  }, []), import_react.default.useEffect(() => {
    if (e) {
      a(window.innerWidth);
      let i2 = () => {
        a(window.innerWidth);
      };
      return window.addEventListener("resize", i2), () => {
        window.removeEventListener("resize", i2);
      };
    }
    return () => {
    };
  }, [e]), e ? import_react.default.createElement("div", { style: { position: "fixed", left: `${Math.round(d2 / 2)}px`, transform: "translateX(-50%)", bottom: 0, zIndex: 99999 } }, import_react.default.createElement(O, { onClick: () => {
    n((i2) => !i2), p2(false);
  }, onSelectorHighlight: t, selectorActive: r, setSelectorActive: p2 }), import_react.default.createElement(J, { visible: m, placement: c }, ({ resizing: i2 }) => import_react.default.createElement("iframe", { allow: "clipboard-write;", src: o2, srcDoc: o2 ? void 0 : `
                            <html style="height:100%;padding:0;margin:0;">
                                <body style="display:flex;justify-content:center;height:100%;padding:24px;margin:0;align-items:center;box-sizing:border-box;">
                                    <h1 style="font-family:ui-monospace,monospace;color:#CFD7E2;text-align:center;">Could not connect to the devtools server</h1>
                                </body>
                            </html>
                        `, style: { width: "100%", height: "100%", border: "none", borderRadius: "7px", pointerEvents: i2 ? "none" : "auto", background: "#14141F" } }))) : null;
};
var fe = false ? ({ children: e }) => e : ({ children: e }) => import_react10.default.createElement(L, null, e);
export {
  he as DevtoolsPanel,
  fe as DevtoolsProvider
};
//# sourceMappingURL=@refinedev_devtools.js.map
