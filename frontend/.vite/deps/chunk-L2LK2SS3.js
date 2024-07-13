import {
  useForm
} from "./chunk-IDCMWMQK.js";
import {
  Ce,
  G,
  Oh,
  XR,
  ae,
  ge,
  get_default,
  hasPath_default,
  ir,
  pt,
  se,
  st,
  z
} from "./chunk-GPR7TKAP.js";
import {
  require_react
} from "./chunk-HCG2JFOZ.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/@refinedev/react-hook-form/dist/index.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/lodash-es/_baseHas.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
var baseHas_default = baseHas;

// node_modules/lodash-es/has.js
function has(object, path) {
  return object != null && hasPath_default(object, path, baseHas_default);
}
var has_default = has;

// node_modules/@refinedev/react-hook-form/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var L = Object.defineProperty;
var F = (t, a) => L(t, "name", { value: a, configurable: true });
var C = F(({ refineCoreProps: t, warnWhenUnsavedChanges: a, disableServerSideValidation: c = false, ...g } = {}) => {
  let { options: R } = se(), S = (R == null ? void 0 : R.disableServerSideValidation) || c, U = G(), { warnWhenUnsavedChanges: h, setWarnWhen: y } = pt(), f = a ?? h, o = useForm({ ...g }), { watch: m, setValue: E, getValues: i, handleSubmit: n, setError: x } = o, b = XR({ ...t, onMutationError: (r, s, e) => {
    var v, H;
    if (S) {
      (v = t == null ? void 0 : t.onMutationError) == null || v.call(t, r, s, e);
      return;
    }
    let u = r == null ? void 0 : r.errors;
    for (let V in u) {
      if (!Object.keys(ir(s)).includes(V))
        continue;
      let p = u[V], D = "";
      Array.isArray(p) && (D = p.join(" ")), typeof p == "string" && (D = p), typeof p == "boolean" && p && (D = "Field is not valid."), typeof p == "object" && "key" in p && (D = U(p.key, p.message)), x(V, { message: D });
    }
    (H = t == null ? void 0 : t.onMutationError) == null || H.call(t, r, s, e);
  } }), { queryResult: l, onFinish: d, formLoading: B, onFinishAutoSave: M } = b;
  (0, import_react.useEffect)(() => {
    var e;
    let r = (e = l == null ? void 0 : l.data) == null ? void 0 : e.data;
    if (!r)
      return;
    Object.keys(ir(i())).forEach((u) => {
      let v = has_default(r, u), H = get_default(r, u);
      v && E(u, H);
    });
  }, [l == null ? void 0 : l.data, E, i]), (0, import_react.useEffect)(() => {
    let r = m((s, { type: e }) => {
      e === "change" && W(s);
    });
    return () => r.unsubscribe();
  }, [m]);
  let W = F((r) => {
    var s;
    if (f && y(true), t != null && t.autoSave) {
      y(false);
      let e = ((s = t.autoSave) == null ? void 0 : s.onFinish) ?? ((u) => u);
      return M(e(r)).catch((u) => u);
    }
    return r;
  }, "onValuesChange"), Q = F((r, s) => async (e) => (y(false), n(r, s)(e)), "handleSubmit");
  return { ...o, handleSubmit: Q, refineCore: b, saveButtonProps: { disabled: B, onClick: (r) => {
    Q((s) => d(s).catch(() => {
    }), () => false)(r);
  } } };
}, "useForm");
var le = F(({ stepsProps: t, ...a } = {}) => {
  let { defaultStep: c = 0, isBackValidate: g = false } = t ?? {}, [R, S] = (0, import_react2.useState)(c), U = C({ ...a }), { trigger: h, getValues: y, setValue: f, formState: { dirtyFields: o }, refineCore: { queryResult: m } } = U;
  (0, import_react2.useEffect)(() => {
    var b;
    let n = (b = m == null ? void 0 : m.data) == null ? void 0 : b.data;
    if (!n)
      return;
    let x = Object.keys(y());
    console.log({ dirtyFields: o, registeredFields: x, data: n }), Object.entries(n).forEach(([l, d]) => {
      let B = l;
      x.includes(B) && (get_default(o, B) || f(B, d));
    });
  }, [m == null ? void 0 : m.data, R, f, y]);
  let E = F((n) => {
    let x = n;
    n < 0 && (x = 0), S(x);
  }, "go");
  return { ...U, steps: { currentStep: R, gotoStep: F(async (n) => {
    if (n === R)
      return;
    if (n < R && !g) {
      E(n);
      return;
    }
    await h() && E(n);
  }, "gotoStep") } };
}, "useStepsForm");
var be = F(({ modalProps: t, refineCoreProps: a, syncWithLocation: c, ...g } = {}) => {
  var A, N;
  let R = Ce(), [S, U] = import_react4.default.useState(false), h = G(), { resource: y, action: f } = a ?? {}, { resource: o, action: m, identifier: E } = z(y), i = ae(), n = ge(), x = st(), b = f ?? m ?? "", l = !(typeof c == "object" && (c == null ? void 0 : c.syncId) === false), d = typeof c == "object" && "key" in c ? c.key : o && b && c ? `modal-${E}-${b}` : void 0, { defaultVisible: B = false, autoSubmitClose: M = true, autoResetForm: W = true } = t ?? {}, Q = C({ refineCoreProps: { ...a, meta: { ...d ? { [d]: void 0 } : {}, ...a == null ? void 0 : a.meta } }, ...g }), { reset: $, refineCore: { onFinish: r, id: s, setId: e, autoSaveProps: u }, saveButtonProps: v, handleSubmit: H } = Q, { visible: V, show: k, close: p } = Oh({ defaultVisible: B });
  import_react4.default.useEffect(() => {
    var T, j, K, I;
    if (S === false && d) {
      let w = (j = (T = i == null ? void 0 : i.params) == null ? void 0 : T[d]) == null ? void 0 : j.open;
      if (typeof w == "boolean" ? w && k() : typeof w == "string" && w === "true" && k(), l) {
        let G2 = (I = (K = i == null ? void 0 : i.params) == null ? void 0 : K[d]) == null ? void 0 : I.id;
        G2 && (e == null || e(G2));
      }
      U(true);
    }
  }, [d, i, l, e]), import_react4.default.useEffect(() => {
    var T;
    S === true && (V && d ? n({ query: { [d]: { ...(T = i == null ? void 0 : i.params) == null ? void 0 : T[d], open: true, ...l && s && { id: s } } }, options: { keepQuery: true }, type: "replace" }) : d && !V && n({ query: { [d]: void 0 }, options: { keepQuery: true }, type: "replace" }));
  }, [s, V, k, d, l]);
  let D = F(async (T) => {
    await r(T), M && p(), W && $();
  }, "submit"), { warnWhen: O, setWarnWhen: X } = pt(), Z = (0, import_react3.useCallback)(() => {
    var T;
    if (u.status === "success" && ((T = a == null ? void 0 : a.autoSave) != null && T.invalidateOnClose) && R({ id: s, invalidates: a.invalidates || ["list", "many", "detail"], dataProviderName: a.dataProviderName, resource: E }), O)
      if (window.confirm(h("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")))
        X(false);
      else
        return;
    e == null || e(void 0), p();
  }, [O, u.status]), _ = (0, import_react3.useCallback)((T) => {
    typeof T < "u" && (e == null || e(T)), (!(b === "edit" || b === "clone") || (typeof T < "u" || typeof s < "u")) && k();
  }, [s]), q = h(`${E}.titles.${f}`, void 0, `${x(`${f} ${((A = o == null ? void 0 : o.meta) == null ? void 0 : A.label) ?? ((N = o == null ? void 0 : o.options) == null ? void 0 : N.label) ?? (o == null ? void 0 : o.label) ?? E}`, "singular")}`);
  return { modal: { submit: D, close: Z, show: _, visible: V, title: q }, ...Q, saveButtonProps: { ...v, onClick: (T) => H(D)(T) } };
}, "useModalForm");

export {
  C,
  le,
  be
};
//# sourceMappingURL=chunk-L2LK2SS3.js.map
