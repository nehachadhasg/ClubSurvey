const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./codeMirrorModule-DpJ-EmBQ.js",
      "../codeMirrorModule.C3UTv-Ge.css",
    ]),
) => i.map((i) => d[i]);
var Q0 = Object.defineProperty;
var X0 = (t, e, n) =>
  e in t
    ? Q0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var xe = (t, e, n) => X0(t, typeof e != "symbol" ? e + "" : e, n);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function G0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var au = { exports: {} },
  Ni = {},
  cu = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lp;
function J0() {
  if (Lp) return me;
  Lp = 1;
  var t = Symbol.for("react.element"),
    e = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    l = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    u = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function m(L) {
    return L === null || typeof L != "object"
      ? null
      : ((L = (v && L[v]) || L["@@iterator"]),
        typeof L == "function" ? L : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    S = {};
  function E(L, H, fe) {
    (this.props = L),
      (this.context = H),
      (this.refs = S),
      (this.updater = fe || w);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (L, H) {
      if (typeof L != "object" && typeof L != "function" && L != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, L, H, "setState");
    }),
    (E.prototype.forceUpdate = function (L) {
      this.updater.enqueueForceUpdate(this, L, "forceUpdate");
    });
  function T() {}
  T.prototype = E.prototype;
  function C(L, H, fe) {
    (this.props = L),
      (this.context = H),
      (this.refs = S),
      (this.updater = fe || w);
  }
  var O = (C.prototype = new T());
  (O.constructor = C), _(O, E.prototype), (O.isPureReactComponent = !0);
  var R = Array.isArray,
    D = Object.prototype.hasOwnProperty,
    F = { current: null },
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(L, H, fe) {
    var ue,
      ve = {},
      ge = null,
      pe = null;
    if (H != null)
      for (ue in (H.ref !== void 0 && (pe = H.ref),
      H.key !== void 0 && (ge = "" + H.key),
      H))
        D.call(H, ue) && !U.hasOwnProperty(ue) && (ve[ue] = H[ue]);
    var Se = arguments.length - 2;
    if (Se === 1) ve.children = fe;
    else if (1 < Se) {
      for (var Te = Array(Se), ct = 0; ct < Se; ct++)
        Te[ct] = arguments[ct + 2];
      ve.children = Te;
    }
    if (L && L.defaultProps)
      for (ue in ((Se = L.defaultProps), Se))
        ve[ue] === void 0 && (ve[ue] = Se[ue]);
    return {
      $$typeof: t,
      type: L,
      key: ge,
      ref: pe,
      props: ve,
      _owner: F.current,
    };
  }
  function j(L, H) {
    return {
      $$typeof: t,
      type: L.type,
      key: H,
      ref: L.ref,
      props: L.props,
      _owner: L._owner,
    };
  }
  function Q(L) {
    return typeof L == "object" && L !== null && L.$$typeof === t;
  }
  function W(L) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      L.replace(/[=:]/g, function (fe) {
        return H[fe];
      })
    );
  }
  var z = /\/+/g;
  function J(L, H) {
    return typeof L == "object" && L !== null && L.key != null
      ? W("" + L.key)
      : H.toString(36);
  }
  function de(L, H, fe, ue, ve) {
    var ge = typeof L;
    (ge === "undefined" || ge === "boolean") && (L = null);
    var pe = !1;
    if (L === null) pe = !0;
    else
      switch (ge) {
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case t:
            case e:
              pe = !0;
          }
      }
    if (pe)
      return (
        (pe = L),
        (ve = ve(pe)),
        (L = ue === "" ? "." + J(pe, 0) : ue),
        R(ve)
          ? ((fe = ""),
            L != null && (fe = L.replace(z, "$&/") + "/"),
            de(ve, H, fe, "", function (ct) {
              return ct;
            }))
          : ve != null &&
            (Q(ve) &&
              (ve = j(
                ve,
                fe +
                  (!ve.key || (pe && pe.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(z, "$&/") + "/") +
                  L,
              )),
            H.push(ve)),
        1
      );
    if (((pe = 0), (ue = ue === "" ? "." : ue + ":"), R(L)))
      for (var Se = 0; Se < L.length; Se++) {
        ge = L[Se];
        var Te = ue + J(ge, Se);
        pe += de(ge, H, fe, Te, ve);
      }
    else if (((Te = m(L)), typeof Te == "function"))
      for (L = Te.call(L), Se = 0; !(ge = L.next()).done; )
        (ge = ge.value), (Te = ue + J(ge, Se++)), (pe += de(ge, H, fe, Te, ve));
    else if (ge === "object")
      throw (
        ((H = String(L)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(L).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return pe;
  }
  function Ee(L, H, fe) {
    if (L == null) return L;
    var ue = [],
      ve = 0;
    return (
      de(L, ue, "", "", function (ge) {
        return H.call(fe, ge, ve++);
      }),
      ue
    );
  }
  function Ce(L) {
    if (L._status === -1) {
      var H = L._result;
      (H = H()),
        H.then(
          function (fe) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 1), (L._result = fe));
          },
          function (fe) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 2), (L._result = fe));
          },
        ),
        L._status === -1 && ((L._status = 0), (L._result = H));
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var ye = { current: null },
    G = { transition: null },
    se = {
      ReactCurrentDispatcher: ye,
      ReactCurrentBatchConfig: G,
      ReactCurrentOwner: F,
    };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (me.Children = {
      map: Ee,
      forEach: function (L, H, fe) {
        Ee(
          L,
          function () {
            H.apply(this, arguments);
          },
          fe,
        );
      },
      count: function (L) {
        var H = 0;
        return (
          Ee(L, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (L) {
        return (
          Ee(L, function (H) {
            return H;
          }) || []
        );
      },
      only: function (L) {
        if (!Q(L))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return L;
      },
    }),
    (me.Component = E),
    (me.Fragment = n),
    (me.Profiler = o),
    (me.PureComponent = C),
    (me.StrictMode = s),
    (me.Suspense = d),
    (me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se),
    (me.act = Z),
    (me.cloneElement = function (L, H, fe) {
      if (L == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            L +
            ".",
        );
      var ue = _({}, L.props),
        ve = L.key,
        ge = L.ref,
        pe = L._owner;
      if (H != null) {
        if (
          (H.ref !== void 0 && ((ge = H.ref), (pe = F.current)),
          H.key !== void 0 && (ve = "" + H.key),
          L.type && L.type.defaultProps)
        )
          var Se = L.type.defaultProps;
        for (Te in H)
          D.call(H, Te) &&
            !U.hasOwnProperty(Te) &&
            (ue[Te] = H[Te] === void 0 && Se !== void 0 ? Se[Te] : H[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) ue.children = fe;
      else if (1 < Te) {
        Se = Array(Te);
        for (var ct = 0; ct < Te; ct++) Se[ct] = arguments[ct + 2];
        ue.children = Se;
      }
      return {
        $$typeof: t,
        type: L.type,
        key: ve,
        ref: ge,
        props: ue,
        _owner: pe,
      };
    }),
    (me.createContext = function (L) {
      return (
        (L = {
          $$typeof: c,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (L.Provider = { $$typeof: l, _context: L }),
        (L.Consumer = L)
      );
    }),
    (me.createElement = B),
    (me.createFactory = function (L) {
      var H = B.bind(null, L);
      return (H.type = L), H;
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (L) {
      return { $$typeof: u, render: L };
    }),
    (me.isValidElement = Q),
    (me.lazy = function (L) {
      return { $$typeof: y, _payload: { _status: -1, _result: L }, _init: Ce };
    }),
    (me.memo = function (L, H) {
      return { $$typeof: p, type: L, compare: H === void 0 ? null : H };
    }),
    (me.startTransition = function (L) {
      var H = G.transition;
      G.transition = {};
      try {
        L();
      } finally {
        G.transition = H;
      }
    }),
    (me.unstable_act = Z),
    (me.useCallback = function (L, H) {
      return ye.current.useCallback(L, H);
    }),
    (me.useContext = function (L) {
      return ye.current.useContext(L);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (L) {
      return ye.current.useDeferredValue(L);
    }),
    (me.useEffect = function (L, H) {
      return ye.current.useEffect(L, H);
    }),
    (me.useId = function () {
      return ye.current.useId();
    }),
    (me.useImperativeHandle = function (L, H, fe) {
      return ye.current.useImperativeHandle(L, H, fe);
    }),
    (me.useInsertionEffect = function (L, H) {
      return ye.current.useInsertionEffect(L, H);
    }),
    (me.useLayoutEffect = function (L, H) {
      return ye.current.useLayoutEffect(L, H);
    }),
    (me.useMemo = function (L, H) {
      return ye.current.useMemo(L, H);
    }),
    (me.useReducer = function (L, H, fe) {
      return ye.current.useReducer(L, H, fe);
    }),
    (me.useRef = function (L) {
      return ye.current.useRef(L);
    }),
    (me.useState = function (L) {
      return ye.current.useState(L);
    }),
    (me.useSyncExternalStore = function (L, H, fe) {
      return ye.current.useSyncExternalStore(L, H, fe);
    }),
    (me.useTransition = function () {
      return ye.current.useTransition();
    }),
    (me.version = "18.3.1"),
    me
  );
}
var Ip;
function sf() {
  return Ip || ((Ip = 1), (cu.exports = J0())), cu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jp;
function Y0() {
  if (jp) return Ni;
  jp = 1;
  var t = sf(),
    e = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, d, p) {
    var y,
      v = {},
      m = null,
      w = null;
    p !== void 0 && (m = "" + p),
      d.key !== void 0 && (m = "" + d.key),
      d.ref !== void 0 && (w = d.ref);
    for (y in d) s.call(d, y) && !l.hasOwnProperty(y) && (v[y] = d[y]);
    if (u && u.defaultProps)
      for (y in ((d = u.defaultProps), d)) v[y] === void 0 && (v[y] = d[y]);
    return {
      $$typeof: e,
      type: u,
      key: m,
      ref: w,
      props: v,
      _owner: o.current,
    };
  }
  return (Ni.Fragment = n), (Ni.jsx = c), (Ni.jsxs = c), Ni;
}
var Mp;
function Z0() {
  return Mp || ((Mp = 1), (au.exports = Y0())), au.exports;
}
var x = Z0(),
  P = sf();
const At = G0(P);
function Vm(t, e, n, s) {
  const [o, l] = At.useState(n);
  return (
    At.useEffect(() => {
      let c = !1;
      return (
        t().then((u) => {
          c || l(u);
        }),
        () => {
          c = !0;
        }
      );
    }, e),
    o
  );
}
function Lr() {
  const t = At.useRef(null),
    [e, n] = At.useState(new DOMRect(0, 0, 10, 10));
  return (
    At.useLayoutEffect(() => {
      const s = t.current;
      if (!s) return;
      const o = s.getBoundingClientRect();
      n(new DOMRect(0, 0, o.width, o.height));
      const l = new ResizeObserver((c) => {
        const u = c[c.length - 1];
        u && u.contentRect && n(u.contentRect);
      });
      return l.observe(s), () => l.disconnect();
    }, [t]),
    [e, t]
  );
}
function mt(t) {
  if (t < 0 || !isFinite(t)) return "-";
  if (t === 0) return "0";
  if (t < 1e3) return t.toFixed(0) + "ms";
  const e = t / 1e3;
  if (e < 60) return e.toFixed(1) + "s";
  const n = e / 60;
  if (n < 60) return n.toFixed(1) + "m";
  const s = n / 60;
  return s < 24 ? s.toFixed(1) + "h" : (s / 24).toFixed(1) + "d";
}
function e1(t) {
  if (t < 0 || !isFinite(t)) return "-";
  if (t === 0) return "0";
  if (t < 1e3) return t.toFixed(0);
  const e = t / 1024;
  if (e < 1e3) return e.toFixed(1) + "K";
  const n = e / 1024;
  return n < 1e3 ? n.toFixed(1) + "M" : (n / 1024).toFixed(1) + "G";
}
function Wm(t, e, n, s, o) {
  let l = 0,
    c = t.length;
  for (; l < c; ) {
    const u = (l + c) >> 1;
    n(e, t[u]) >= 0 ? (l = u + 1) : (c = u);
  }
  return c;
}
function Op(t) {
  const e = document.createElement("textarea");
  (e.style.position = "absolute"),
    (e.style.zIndex = "-1000"),
    (e.value = t),
    document.body.appendChild(e),
    e.select(),
    document.execCommand("copy"),
    e.remove();
}
function bs(t, e) {
  t && (e = _r.getObject(t, e));
  const [n, s] = At.useState(e),
    o = At.useCallback(
      (l) => {
        t ? _r.setObject(t, l) : s(l);
      },
      [t, s],
    );
  return (
    At.useEffect(() => {
      if (t) {
        const l = () => s(_r.getObject(t, e));
        return (
          _r.onChangeEmitter.addEventListener(t, l),
          () => _r.onChangeEmitter.removeEventListener(t, l)
        );
      }
    }, [e, t]),
    [n, o]
  );
}
class t1 {
  constructor() {
    this.onChangeEmitter = new EventTarget();
  }
  getString(e, n) {
    return localStorage[e] || n;
  }
  setString(e, n) {
    var s;
    (localStorage[e] = n),
      this.onChangeEmitter.dispatchEvent(new Event(e)),
      (s = window.saveSettings) == null || s.call(window);
  }
  getObject(e, n) {
    if (!localStorage[e]) return n;
    try {
      return JSON.parse(localStorage[e]);
    } catch {
      return n;
    }
  }
  setObject(e, n) {
    var s;
    (localStorage[e] = JSON.stringify(n)),
      this.onChangeEmitter.dispatchEvent(new Event(e)),
      (s = window.saveSettings) == null || s.call(window);
  }
}
const _r = new t1();
function ze(...t) {
  return t.filter(Boolean).join(" ");
}
function Km(t) {
  t &&
    (t != null && t.scrollIntoViewIfNeeded
      ? t.scrollIntoViewIfNeeded(!1)
      : t == null || t.scrollIntoView());
}
const $p = "\\u0000-\\u0020\\u007f-\\u009f",
  Qm = new RegExp(
    "(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s" +
      $p +
      '"]{2,}[^\\s' +
      $p +
      `"')}\\],:;.!?]`,
    "ug",
  );
function n1() {
  const [t, e] = At.useState(!1),
    n = At.useCallback(() => {
      const s = [];
      return (
        e(
          (o) => (
            s.push(setTimeout(() => e(!1), 1e3)),
            o ? (s.push(setTimeout(() => e(!0), 50)), !1) : !0
          ),
        ),
        () => s.forEach(clearTimeout)
      );
    }, [e]);
  return [t, n];
}
function r1() {
  return At.useMemo(
    () =>
      document.cookie
        .split("; ")
        .filter((e) => e.includes("="))
        .map((e) => {
          const n = e.indexOf("=");
          return [e.substring(0, n), e.substring(n + 1)];
        }),
    [],
  );
}
function uT() {
  if (document.playwrightThemeInitialized) return;
  (document.playwrightThemeInitialized = !0),
    document.defaultView.addEventListener(
      "focus",
      (n) => {
        n.target.document.nodeType === Node.DOCUMENT_NODE &&
          document.body.classList.remove("inactive");
      },
      !1,
    ),
    document.defaultView.addEventListener(
      "blur",
      (n) => {
        document.body.classList.add("inactive");
      },
      !1,
    );
  const t = _r.getString("theme", "light-mode"),
    e = window.matchMedia("(prefers-color-scheme: dark)");
  (t === "dark-mode" || e.matches) && document.body.classList.add("dark-mode");
}
const of = new Set();
function s1() {
  const t = Fu(),
    e = t === "dark-mode" ? "light-mode" : "dark-mode";
  t && document.body.classList.remove(t),
    document.body.classList.add(e),
    _r.setString("theme", e);
  for (const n of of) n(e);
}
function fT(t) {
  of.add(t);
}
function dT(t) {
  of.delete(t);
}
function Fu() {
  return document.body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";
}
function i1() {
  const [t, e] = At.useState(Fu() === "dark-mode");
  return [
    t,
    (n) => {
      (Fu() === "dark-mode") !== n && s1(), e(n);
    },
  ];
}
var dl = {},
  uu = { exports: {} },
  kt = {},
  fu = { exports: {} },
  du = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp;
function o1() {
  return (
    Pp ||
      ((Pp = 1),
      (function (t) {
        function e(G, se) {
          var Z = G.length;
          G.push(se);
          e: for (; 0 < Z; ) {
            var L = (Z - 1) >>> 1,
              H = G[L];
            if (0 < o(H, se)) (G[L] = se), (G[Z] = H), (Z = L);
            else break e;
          }
        }
        function n(G) {
          return G.length === 0 ? null : G[0];
        }
        function s(G) {
          if (G.length === 0) return null;
          var se = G[0],
            Z = G.pop();
          if (Z !== se) {
            G[0] = Z;
            e: for (var L = 0, H = G.length, fe = H >>> 1; L < fe; ) {
              var ue = 2 * (L + 1) - 1,
                ve = G[ue],
                ge = ue + 1,
                pe = G[ge];
              if (0 > o(ve, Z))
                ge < H && 0 > o(pe, ve)
                  ? ((G[L] = pe), (G[ge] = Z), (L = ge))
                  : ((G[L] = ve), (G[ue] = Z), (L = ue));
              else if (ge < H && 0 > o(pe, Z))
                (G[L] = pe), (G[ge] = Z), (L = ge);
              else break e;
            }
          }
          return se;
        }
        function o(G, se) {
          var Z = G.sortIndex - se.sortIndex;
          return Z !== 0 ? Z : G.id - se.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var c = Date,
            u = c.now();
          t.unstable_now = function () {
            return c.now() - u;
          };
        }
        var d = [],
          p = [],
          y = 1,
          v = null,
          m = 3,
          w = !1,
          _ = !1,
          S = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          T = typeof clearTimeout == "function" ? clearTimeout : null,
          C = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(G) {
          for (var se = n(p); se !== null; ) {
            if (se.callback === null) s(p);
            else if (se.startTime <= G)
              s(p), (se.sortIndex = se.expirationTime), e(d, se);
            else break;
            se = n(p);
          }
        }
        function R(G) {
          if (((S = !1), O(G), !_))
            if (n(d) !== null) (_ = !0), Ce(D);
            else {
              var se = n(p);
              se !== null && ye(R, se.startTime - G);
            }
        }
        function D(G, se) {
          (_ = !1), S && ((S = !1), T(B), (B = -1)), (w = !0);
          var Z = m;
          try {
            for (
              O(se), v = n(d);
              v !== null && (!(v.expirationTime > se) || (G && !W()));

            ) {
              var L = v.callback;
              if (typeof L == "function") {
                (v.callback = null), (m = v.priorityLevel);
                var H = L(v.expirationTime <= se);
                (se = t.unstable_now()),
                  typeof H == "function"
                    ? (v.callback = H)
                    : v === n(d) && s(d),
                  O(se);
              } else s(d);
              v = n(d);
            }
            if (v !== null) var fe = !0;
            else {
              var ue = n(p);
              ue !== null && ye(R, ue.startTime - se), (fe = !1);
            }
            return fe;
          } finally {
            (v = null), (m = Z), (w = !1);
          }
        }
        var F = !1,
          U = null,
          B = -1,
          j = 5,
          Q = -1;
        function W() {
          return !(t.unstable_now() - Q < j);
        }
        function z() {
          if (U !== null) {
            var G = t.unstable_now();
            Q = G;
            var se = !0;
            try {
              se = U(!0, G);
            } finally {
              se ? J() : ((F = !1), (U = null));
            }
          } else F = !1;
        }
        var J;
        if (typeof C == "function")
          J = function () {
            C(z);
          };
        else if (typeof MessageChannel < "u") {
          var de = new MessageChannel(),
            Ee = de.port2;
          (de.port1.onmessage = z),
            (J = function () {
              Ee.postMessage(null);
            });
        } else
          J = function () {
            E(z, 0);
          };
        function Ce(G) {
          (U = G), F || ((F = !0), J());
        }
        function ye(G, se) {
          B = E(function () {
            G(t.unstable_now());
          }, se);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            _ || w || ((_ = !0), Ce(D));
          }),
          (t.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (j = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return n(d);
          }),
          (t.unstable_next = function (G) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var se = 3;
                break;
              default:
                se = m;
            }
            var Z = m;
            m = se;
            try {
              return G();
            } finally {
              m = Z;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (G, se) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var Z = m;
            m = G;
            try {
              return se();
            } finally {
              m = Z;
            }
          }),
          (t.unstable_scheduleCallback = function (G, se, Z) {
            var L = t.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? L + Z : L))
                : (Z = L),
              G)
            ) {
              case 1:
                var H = -1;
                break;
              case 2:
                H = 250;
                break;
              case 5:
                H = 1073741823;
                break;
              case 4:
                H = 1e4;
                break;
              default:
                H = 5e3;
            }
            return (
              (H = Z + H),
              (G = {
                id: y++,
                callback: se,
                priorityLevel: G,
                startTime: Z,
                expirationTime: H,
                sortIndex: -1,
              }),
              Z > L
                ? ((G.sortIndex = Z),
                  e(p, G),
                  n(d) === null &&
                    G === n(p) &&
                    (S ? (T(B), (B = -1)) : (S = !0), ye(R, Z - L)))
                : ((G.sortIndex = H), e(d, G), _ || w || ((_ = !0), Ce(D))),
              G
            );
          }),
          (t.unstable_shouldYield = W),
          (t.unstable_wrapCallback = function (G) {
            var se = m;
            return function () {
              var Z = m;
              m = se;
              try {
                return G.apply(this, arguments);
              } finally {
                m = Z;
              }
            };
          });
      })(du)),
    du
  );
}
var Rp;
function l1() {
  return Rp || ((Rp = 1), (fu.exports = o1())), fu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dp;
function a1() {
  if (Dp) return kt;
  Dp = 1;
  var t = sf(),
    e = l1();
  function n(r) {
    for (
      var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r,
        a = 1;
      a < arguments.length;
      a++
    )
      i += "&args[]=" + encodeURIComponent(arguments[a]);
    return (
      "Minified React error #" +
      r +
      "; visit " +
      i +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    o = {};
  function l(r, i) {
    c(r, i), c(r + "Capture", i);
  }
  function c(r, i) {
    for (o[r] = i, r = 0; r < i.length; r++) s.add(i[r]);
  }
  var u = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    d = Object.prototype.hasOwnProperty,
    p =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    v = {};
  function m(r) {
    return d.call(v, r)
      ? !0
      : d.call(y, r)
        ? !1
        : p.test(r)
          ? (v[r] = !0)
          : ((y[r] = !0), !1);
  }
  function w(r, i, a, f) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f
          ? !1
          : a !== null
            ? !a.acceptsBooleans
            : ((r = r.toLowerCase().slice(0, 5)),
              r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function _(r, i, a, f) {
    if (i === null || typeof i > "u" || w(r, i, a, f)) return !0;
    if (f) return !1;
    if (a !== null)
      switch (a.type) {
        case 3:
          return !i;
        case 4:
          return i === !1;
        case 5:
          return isNaN(i);
        case 6:
          return isNaN(i) || 1 > i;
      }
    return !1;
  }
  function S(r, i, a, f, h, g, k) {
    (this.acceptsBooleans = i === 2 || i === 3 || i === 4),
      (this.attributeName = f),
      (this.attributeNamespace = h),
      (this.mustUseProperty = a),
      (this.propertyName = r),
      (this.type = i),
      (this.sanitizeURL = g),
      (this.removeEmptyString = k);
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (r) {
      E[r] = new S(r, 0, !1, r, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (r) {
      var i = r[0];
      E[i] = new S(i, 1, !1, r[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (r) {
        E[r] = new S(r, 2, !1, r.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (r) {
      E[r] = new S(r, 2, !1, r, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (r) {
        E[r] = new S(r, 3, !1, r.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (r) {
      E[r] = new S(r, 3, !0, r, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (r) {
      E[r] = new S(r, 4, !1, r, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (r) {
      E[r] = new S(r, 6, !1, r, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (r) {
      E[r] = new S(r, 5, !1, r.toLowerCase(), null, !1, !1);
    });
  var T = /[\-:]([a-z])/g;
  function C(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (r) {
      var i = r.replace(T, C);
      E[i] = new S(i, 1, !1, r, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (r) {
        var i = r.replace(T, C);
        E[i] = new S(i, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
      var i = r.replace(T, C);
      E[i] = new S(i, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (r) {
      E[r] = new S(r, 1, !1, r.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new S(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (r) {
      E[r] = new S(r, 1, !1, r.toLowerCase(), null, !0, !0);
    });
  function O(r, i, a, f) {
    var h = E.hasOwnProperty(i) ? E[i] : null;
    (h !== null
      ? h.type !== 0
      : f ||
        !(2 < i.length) ||
        (i[0] !== "o" && i[0] !== "O") ||
        (i[1] !== "n" && i[1] !== "N")) &&
      (_(i, a, h, f) && (a = null),
      f || h === null
        ? m(i) &&
          (a === null ? r.removeAttribute(i) : r.setAttribute(i, "" + a))
        : h.mustUseProperty
          ? (r[h.propertyName] = a === null ? (h.type === 3 ? !1 : "") : a)
          : ((i = h.attributeName),
            (f = h.attributeNamespace),
            a === null
              ? r.removeAttribute(i)
              : ((h = h.type),
                (a = h === 3 || (h === 4 && a === !0) ? "" : "" + a),
                f ? r.setAttributeNS(f, i, a) : r.setAttribute(i, a))));
  }
  var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    D = Symbol.for("react.element"),
    F = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    Q = Symbol.for("react.provider"),
    W = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    J = Symbol.for("react.suspense"),
    de = Symbol.for("react.suspense_list"),
    Ee = Symbol.for("react.memo"),
    Ce = Symbol.for("react.lazy"),
    ye = Symbol.for("react.offscreen"),
    G = Symbol.iterator;
  function se(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (G && r[G]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var Z = Object.assign,
    L;
  function H(r) {
    if (L === void 0)
      try {
        throw Error();
      } catch (a) {
        var i = a.stack.trim().match(/\n( *(at )?)/);
        L = (i && i[1]) || "";
      }
    return (
      `
` +
      L +
      r
    );
  }
  var fe = !1;
  function ue(r, i) {
    if (!r || fe) return "";
    fe = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (i)
        if (
          ((i = function () {
            throw Error();
          }),
          Object.defineProperty(i.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(i, []);
          } catch ($) {
            var f = $;
          }
          Reflect.construct(r, [], i);
        } else {
          try {
            i.call();
          } catch ($) {
            f = $;
          }
          r.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch ($) {
          f = $;
        }
        r();
      }
    } catch ($) {
      if ($ && f && typeof $.stack == "string") {
        for (
          var h = $.stack.split(`
`),
            g = f.stack.split(`
`),
            k = h.length - 1,
            b = g.length - 1;
          1 <= k && 0 <= b && h[k] !== g[b];

        )
          b--;
        for (; 1 <= k && 0 <= b; k--, b--)
          if (h[k] !== g[b]) {
            if (k !== 1 || b !== 1)
              do
                if ((k--, b--, 0 > b || h[k] !== g[b])) {
                  var N =
                    `
` + h[k].replace(" at new ", " at ");
                  return (
                    r.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", r.displayName)),
                    N
                  );
                }
              while (1 <= k && 0 <= b);
            break;
          }
      }
    } finally {
      (fe = !1), (Error.prepareStackTrace = a);
    }
    return (r = r ? r.displayName || r.name : "") ? H(r) : "";
  }
  function ve(r) {
    switch (r.tag) {
      case 5:
        return H(r.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (r = ue(r.type, !1)), r;
      case 11:
        return (r = ue(r.type.render, !1)), r;
      case 1:
        return (r = ue(r.type, !0)), r;
      default:
        return "";
    }
  }
  function ge(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case U:
        return "Fragment";
      case F:
        return "Portal";
      case j:
        return "Profiler";
      case B:
        return "StrictMode";
      case J:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case W:
          return (r.displayName || "Context") + ".Consumer";
        case Q:
          return (r._context.displayName || "Context") + ".Provider";
        case z:
          var i = r.render;
          return (
            (r = r.displayName),
            r ||
              ((r = i.displayName || i.name || ""),
              (r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")),
            r
          );
        case Ee:
          return (
            (i = r.displayName || null), i !== null ? i : ge(r.type) || "Memo"
          );
        case Ce:
          (i = r._payload), (r = r._init);
          try {
            return ge(r(i));
          } catch {}
      }
    return null;
  }
  function pe(r) {
    var i = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (r = i.render),
          (r = r.displayName || r.name || ""),
          i.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return i;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ge(i);
      case 8:
        return i === B ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof i == "function") return i.displayName || i.name || null;
        if (typeof i == "string") return i;
    }
    return null;
  }
  function Se(r) {
    switch (typeof r) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return r;
      case "object":
        return r;
      default:
        return "";
    }
  }
  function Te(r) {
    var i = r.type;
    return (
      (r = r.nodeName) &&
      r.toLowerCase() === "input" &&
      (i === "checkbox" || i === "radio")
    );
  }
  function ct(r) {
    var i = Te(r) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(r.constructor.prototype, i),
      f = "" + r[i];
    if (
      !r.hasOwnProperty(i) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var h = a.get,
        g = a.set;
      return (
        Object.defineProperty(r, i, {
          configurable: !0,
          get: function () {
            return h.call(this);
          },
          set: function (k) {
            (f = "" + k), g.call(this, k);
          },
        }),
        Object.defineProperty(r, i, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return f;
          },
          setValue: function (k) {
            f = "" + k;
          },
          stopTracking: function () {
            (r._valueTracker = null), delete r[i];
          },
        }
      );
    }
  }
  function Ln(r) {
    r._valueTracker || (r._valueTracker = ct(r));
  }
  function zs(r) {
    if (!r) return !1;
    var i = r._valueTracker;
    if (!i) return !0;
    var a = i.getValue(),
      f = "";
    return (
      r && (f = Te(r) ? (r.checked ? "true" : "false") : r.value),
      (r = f),
      r !== a ? (i.setValue(r), !0) : !1
    );
  }
  function or(r) {
    if (
      ((r = r || (typeof document < "u" ? document : void 0)), typeof r > "u")
    )
      return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function sn(r, i) {
    var a = i.checked;
    return Z({}, i, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? r._wrapperState.initialChecked,
    });
  }
  function eo(r, i) {
    var a = i.defaultValue == null ? "" : i.defaultValue,
      f = i.checked != null ? i.checked : i.defaultChecked;
    (a = Se(i.value != null ? i.value : a)),
      (r._wrapperState = {
        initialChecked: f,
        initialValue: a,
        controlled:
          i.type === "checkbox" || i.type === "radio"
            ? i.checked != null
            : i.value != null,
      });
  }
  function to(r, i) {
    (i = i.checked), i != null && O(r, "checked", i, !1);
  }
  function Bs(r, i) {
    to(r, i);
    var a = Se(i.value),
      f = i.type;
    if (a != null)
      f === "number"
        ? ((a === 0 && r.value === "") || r.value != a) && (r.value = "" + a)
        : r.value !== "" + a && (r.value = "" + a);
    else if (f === "submit" || f === "reset") {
      r.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value")
      ? $r(r, i.type, a)
      : i.hasOwnProperty("defaultValue") && $r(r, i.type, Se(i.defaultValue)),
      i.checked == null &&
        i.defaultChecked != null &&
        (r.defaultChecked = !!i.defaultChecked);
  }
  function no(r, i, a) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var f = i.type;
      if (
        !(
          (f !== "submit" && f !== "reset") ||
          (i.value !== void 0 && i.value !== null)
        )
      )
        return;
      (i = "" + r._wrapperState.initialValue),
        a || i === r.value || (r.value = i),
        (r.defaultValue = i);
    }
    (a = r.name),
      a !== "" && (r.name = ""),
      (r.defaultChecked = !!r._wrapperState.initialChecked),
      a !== "" && (r.name = a);
  }
  function $r(r, i, a) {
    (i !== "number" || or(r.ownerDocument) !== r) &&
      (a == null
        ? (r.defaultValue = "" + r._wrapperState.initialValue)
        : r.defaultValue !== "" + a && (r.defaultValue = "" + a));
  }
  var pn = Array.isArray;
  function In(r, i, a, f) {
    if (((r = r.options), i)) {
      i = {};
      for (var h = 0; h < a.length; h++) i["$" + a[h]] = !0;
      for (a = 0; a < r.length; a++)
        (h = i.hasOwnProperty("$" + r[a].value)),
          r[a].selected !== h && (r[a].selected = h),
          h && f && (r[a].defaultSelected = !0);
    } else {
      for (a = "" + Se(a), i = null, h = 0; h < r.length; h++) {
        if (r[h].value === a) {
          (r[h].selected = !0), f && (r[h].defaultSelected = !0);
          return;
        }
        i !== null || r[h].disabled || (i = r[h]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Us(r, i) {
    if (i.dangerouslySetInnerHTML != null) throw Error(n(91));
    return Z({}, i, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue,
    });
  }
  function ro(r, i) {
    var a = i.value;
    if (a == null) {
      if (((a = i.children), (i = i.defaultValue), a != null)) {
        if (i != null) throw Error(n(92));
        if (pn(a)) {
          if (1 < a.length) throw Error(n(93));
          a = a[0];
        }
        i = a;
      }
      i == null && (i = ""), (a = i);
    }
    r._wrapperState = { initialValue: Se(a) };
  }
  function jn(r, i) {
    var a = Se(i.value),
      f = Se(i.defaultValue);
    a != null &&
      ((a = "" + a),
      a !== r.value && (r.value = a),
      i.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)),
      f != null && (r.defaultValue = "" + f);
  }
  function Pr(r) {
    var i = r.textContent;
    i === r._wrapperState.initialValue &&
      i !== "" &&
      i !== null &&
      (r.value = i);
  }
  function lr(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Hs(r, i) {
    return r == null || r === "http://www.w3.org/1999/xhtml"
      ? lr(i)
      : r === "http://www.w3.org/2000/svg" && i === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : r;
  }
  var Rr,
    qs = (function (r) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (i, a, f, h) {
            MSApp.execUnsafeLocalFunction(function () {
              return r(i, a, f, h);
            });
          }
        : r;
    })(function (r, i) {
      if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r)
        r.innerHTML = i;
      else {
        for (
          Rr = Rr || document.createElement("div"),
            Rr.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>",
            i = Rr.firstChild;
          r.firstChild;

        )
          r.removeChild(r.firstChild);
        for (; i.firstChild; ) r.appendChild(i.firstChild);
      }
    });
  function le(r, i) {
    if (i) {
      var a = r.firstChild;
      if (a && a === r.lastChild && a.nodeType === 3) {
        a.nodeValue = i;
        return;
      }
    }
    r.textContent = i;
  }
  var yt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Kt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(yt).forEach(function (r) {
    Kt.forEach(function (i) {
      (i = i + r.charAt(0).toUpperCase() + r.substring(1)), (yt[i] = yt[r]);
    });
  });
  function Vf(r, i, a) {
    return i == null || typeof i == "boolean" || i === ""
      ? ""
      : a || typeof i != "number" || i === 0 || (yt.hasOwnProperty(r) && yt[r])
        ? ("" + i).trim()
        : i + "px";
  }
  function Wf(r, i) {
    r = r.style;
    for (var a in i)
      if (i.hasOwnProperty(a)) {
        var f = a.indexOf("--") === 0,
          h = Vf(a, i[a], f);
        a === "float" && (a = "cssFloat"), f ? r.setProperty(a, h) : (r[a] = h);
      }
  }
  var Zv = Z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function xa(r, i) {
    if (i) {
      if (Zv[r] && (i.children != null || i.dangerouslySetInnerHTML != null))
        throw Error(n(137, r));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null) throw Error(n(60));
        if (
          typeof i.dangerouslySetInnerHTML != "object" ||
          !("__html" in i.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (i.style != null && typeof i.style != "object") throw Error(n(62));
    }
  }
  function Sa(r, i) {
    if (r.indexOf("-") === -1) return typeof i.is == "string";
    switch (r) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _a = null;
  function ka(r) {
    return (
      (r = r.target || r.srcElement || window),
      r.correspondingUseElement && (r = r.correspondingUseElement),
      r.nodeType === 3 ? r.parentNode : r
    );
  }
  var Ea = null,
    Dr = null,
    Fr = null;
  function Kf(r) {
    if ((r = di(r))) {
      if (typeof Ea != "function") throw Error(n(280));
      var i = r.stateNode;
      i && ((i = No(i)), Ea(r.stateNode, r.type, i));
    }
  }
  function Qf(r) {
    Dr ? (Fr ? Fr.push(r) : (Fr = [r])) : (Dr = r);
  }
  function Xf() {
    if (Dr) {
      var r = Dr,
        i = Fr;
      if (((Fr = Dr = null), Kf(r), i)) for (r = 0; r < i.length; r++) Kf(i[r]);
    }
  }
  function Gf(r, i) {
    return r(i);
  }
  function Jf() {}
  var ba = !1;
  function Yf(r, i, a) {
    if (ba) return r(i, a);
    ba = !0;
    try {
      return Gf(r, i, a);
    } finally {
      (ba = !1), (Dr !== null || Fr !== null) && (Jf(), Xf());
    }
  }
  function Vs(r, i) {
    var a = r.stateNode;
    if (a === null) return null;
    var f = No(a);
    if (f === null) return null;
    a = f[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) ||
          ((r = r.type),
          (f = !(
            r === "button" ||
            r === "input" ||
            r === "select" ||
            r === "textarea"
          ))),
          (r = !f);
        break e;
      default:
        r = !1;
    }
    if (r) return null;
    if (a && typeof a != "function") throw Error(n(231, i, typeof a));
    return a;
  }
  var Ta = !1;
  if (u)
    try {
      var Ws = {};
      Object.defineProperty(Ws, "passive", {
        get: function () {
          Ta = !0;
        },
      }),
        window.addEventListener("test", Ws, Ws),
        window.removeEventListener("test", Ws, Ws);
    } catch {
      Ta = !1;
    }
  function ew(r, i, a, f, h, g, k, b, N) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(a, $);
    } catch (V) {
      this.onError(V);
    }
  }
  var Ks = !1,
    so = null,
    io = !1,
    Na = null,
    tw = {
      onError: function (r) {
        (Ks = !0), (so = r);
      },
    };
  function nw(r, i, a, f, h, g, k, b, N) {
    (Ks = !1), (so = null), ew.apply(tw, arguments);
  }
  function rw(r, i, a, f, h, g, k, b, N) {
    if ((nw.apply(this, arguments), Ks)) {
      if (Ks) {
        var $ = so;
        (Ks = !1), (so = null);
      } else throw Error(n(198));
      io || ((io = !0), (Na = $));
    }
  }
  function ar(r) {
    var i = r,
      a = r;
    if (r.alternate) for (; i.return; ) i = i.return;
    else {
      r = i;
      do (i = r), i.flags & 4098 && (a = i.return), (r = i.return);
      while (r);
    }
    return i.tag === 3 ? a : null;
  }
  function Zf(r) {
    if (r.tag === 13) {
      var i = r.memoizedState;
      if (
        (i === null && ((r = r.alternate), r !== null && (i = r.memoizedState)),
        i !== null)
      )
        return i.dehydrated;
    }
    return null;
  }
  function ed(r) {
    if (ar(r) !== r) throw Error(n(188));
  }
  function sw(r) {
    var i = r.alternate;
    if (!i) {
      if (((i = ar(r)), i === null)) throw Error(n(188));
      return i !== r ? null : r;
    }
    for (var a = r, f = i; ; ) {
      var h = a.return;
      if (h === null) break;
      var g = h.alternate;
      if (g === null) {
        if (((f = h.return), f !== null)) {
          a = f;
          continue;
        }
        break;
      }
      if (h.child === g.child) {
        for (g = h.child; g; ) {
          if (g === a) return ed(h), r;
          if (g === f) return ed(h), i;
          g = g.sibling;
        }
        throw Error(n(188));
      }
      if (a.return !== f.return) (a = h), (f = g);
      else {
        for (var k = !1, b = h.child; b; ) {
          if (b === a) {
            (k = !0), (a = h), (f = g);
            break;
          }
          if (b === f) {
            (k = !0), (f = h), (a = g);
            break;
          }
          b = b.sibling;
        }
        if (!k) {
          for (b = g.child; b; ) {
            if (b === a) {
              (k = !0), (a = g), (f = h);
              break;
            }
            if (b === f) {
              (k = !0), (f = g), (a = h);
              break;
            }
            b = b.sibling;
          }
          if (!k) throw Error(n(189));
        }
      }
      if (a.alternate !== f) throw Error(n(190));
    }
    if (a.tag !== 3) throw Error(n(188));
    return a.stateNode.current === a ? r : i;
  }
  function td(r) {
    return (r = sw(r)), r !== null ? nd(r) : null;
  }
  function nd(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var i = nd(r);
      if (i !== null) return i;
      r = r.sibling;
    }
    return null;
  }
  var rd = e.unstable_scheduleCallback,
    sd = e.unstable_cancelCallback,
    iw = e.unstable_shouldYield,
    ow = e.unstable_requestPaint,
    Be = e.unstable_now,
    lw = e.unstable_getCurrentPriorityLevel,
    Ca = e.unstable_ImmediatePriority,
    id = e.unstable_UserBlockingPriority,
    oo = e.unstable_NormalPriority,
    aw = e.unstable_LowPriority,
    od = e.unstable_IdlePriority,
    lo = null,
    on = null;
  function cw(r) {
    if (on && typeof on.onCommitFiberRoot == "function")
      try {
        on.onCommitFiberRoot(lo, r, void 0, (r.current.flags & 128) === 128);
      } catch {}
  }
  var Qt = Math.clz32 ? Math.clz32 : dw,
    uw = Math.log,
    fw = Math.LN2;
  function dw(r) {
    return (r >>>= 0), r === 0 ? 32 : (31 - ((uw(r) / fw) | 0)) | 0;
  }
  var ao = 64,
    co = 4194304;
  function Qs(r) {
    switch (r & -r) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return r;
    }
  }
  function uo(r, i) {
    var a = r.pendingLanes;
    if (a === 0) return 0;
    var f = 0,
      h = r.suspendedLanes,
      g = r.pingedLanes,
      k = a & 268435455;
    if (k !== 0) {
      var b = k & ~h;
      b !== 0 ? (f = Qs(b)) : ((g &= k), g !== 0 && (f = Qs(g)));
    } else (k = a & ~h), k !== 0 ? (f = Qs(k)) : g !== 0 && (f = Qs(g));
    if (f === 0) return 0;
    if (
      i !== 0 &&
      i !== f &&
      !(i & h) &&
      ((h = f & -f), (g = i & -i), h >= g || (h === 16 && (g & 4194240) !== 0))
    )
      return i;
    if ((f & 4 && (f |= a & 16), (i = r.entangledLanes), i !== 0))
      for (r = r.entanglements, i &= f; 0 < i; )
        (a = 31 - Qt(i)), (h = 1 << a), (f |= r[a]), (i &= ~h);
    return f;
  }
  function hw(r, i) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return i + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pw(r, i) {
    for (
      var a = r.suspendedLanes,
        f = r.pingedLanes,
        h = r.expirationTimes,
        g = r.pendingLanes;
      0 < g;

    ) {
      var k = 31 - Qt(g),
        b = 1 << k,
        N = h[k];
      N === -1
        ? (!(b & a) || b & f) && (h[k] = hw(b, i))
        : N <= i && (r.expiredLanes |= b),
        (g &= ~b);
    }
  }
  function Aa(r) {
    return (
      (r = r.pendingLanes & -1073741825),
      r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    );
  }
  function ld() {
    var r = ao;
    return (ao <<= 1), !(ao & 4194240) && (ao = 64), r;
  }
  function La(r) {
    for (var i = [], a = 0; 31 > a; a++) i.push(r);
    return i;
  }
  function Xs(r, i, a) {
    (r.pendingLanes |= i),
      i !== 536870912 && ((r.suspendedLanes = 0), (r.pingedLanes = 0)),
      (r = r.eventTimes),
      (i = 31 - Qt(i)),
      (r[i] = a);
  }
  function mw(r, i) {
    var a = r.pendingLanes & ~i;
    (r.pendingLanes = i),
      (r.suspendedLanes = 0),
      (r.pingedLanes = 0),
      (r.expiredLanes &= i),
      (r.mutableReadLanes &= i),
      (r.entangledLanes &= i),
      (i = r.entanglements);
    var f = r.eventTimes;
    for (r = r.expirationTimes; 0 < a; ) {
      var h = 31 - Qt(a),
        g = 1 << h;
      (i[h] = 0), (f[h] = -1), (r[h] = -1), (a &= ~g);
    }
  }
  function Ia(r, i) {
    var a = (r.entangledLanes |= i);
    for (r = r.entanglements; a; ) {
      var f = 31 - Qt(a),
        h = 1 << f;
      (h & i) | (r[f] & i) && (r[f] |= i), (a &= ~h);
    }
  }
  var ke = 0;
  function ad(r) {
    return (
      (r &= -r), 1 < r ? (4 < r ? (r & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var cd,
    ja,
    ud,
    fd,
    dd,
    Ma = !1,
    fo = [],
    Mn = null,
    On = null,
    $n = null,
    Gs = new Map(),
    Js = new Map(),
    Pn = [],
    gw =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function hd(r, i) {
    switch (r) {
      case "focusin":
      case "focusout":
        Mn = null;
        break;
      case "dragenter":
      case "dragleave":
        On = null;
        break;
      case "mouseover":
      case "mouseout":
        $n = null;
        break;
      case "pointerover":
      case "pointerout":
        Gs.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Js.delete(i.pointerId);
    }
  }
  function Ys(r, i, a, f, h, g) {
    return r === null || r.nativeEvent !== g
      ? ((r = {
          blockedOn: i,
          domEventName: a,
          eventSystemFlags: f,
          nativeEvent: g,
          targetContainers: [h],
        }),
        i !== null && ((i = di(i)), i !== null && ja(i)),
        r)
      : ((r.eventSystemFlags |= f),
        (i = r.targetContainers),
        h !== null && i.indexOf(h) === -1 && i.push(h),
        r);
  }
  function yw(r, i, a, f, h) {
    switch (i) {
      case "focusin":
        return (Mn = Ys(Mn, r, i, a, f, h)), !0;
      case "dragenter":
        return (On = Ys(On, r, i, a, f, h)), !0;
      case "mouseover":
        return ($n = Ys($n, r, i, a, f, h)), !0;
      case "pointerover":
        var g = h.pointerId;
        return Gs.set(g, Ys(Gs.get(g) || null, r, i, a, f, h)), !0;
      case "gotpointercapture":
        return (
          (g = h.pointerId), Js.set(g, Ys(Js.get(g) || null, r, i, a, f, h)), !0
        );
    }
    return !1;
  }
  function pd(r) {
    var i = cr(r.target);
    if (i !== null) {
      var a = ar(i);
      if (a !== null) {
        if (((i = a.tag), i === 13)) {
          if (((i = Zf(a)), i !== null)) {
            (r.blockedOn = i),
              dd(r.priority, function () {
                ud(a);
              });
            return;
          }
        } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function ho(r) {
    if (r.blockedOn !== null) return !1;
    for (var i = r.targetContainers; 0 < i.length; ) {
      var a = $a(r.domEventName, r.eventSystemFlags, i[0], r.nativeEvent);
      if (a === null) {
        a = r.nativeEvent;
        var f = new a.constructor(a.type, a);
        (_a = f), a.target.dispatchEvent(f), (_a = null);
      } else return (i = di(a)), i !== null && ja(i), (r.blockedOn = a), !1;
      i.shift();
    }
    return !0;
  }
  function md(r, i, a) {
    ho(r) && a.delete(i);
  }
  function vw() {
    (Ma = !1),
      Mn !== null && ho(Mn) && (Mn = null),
      On !== null && ho(On) && (On = null),
      $n !== null && ho($n) && ($n = null),
      Gs.forEach(md),
      Js.forEach(md);
  }
  function Zs(r, i) {
    r.blockedOn === i &&
      ((r.blockedOn = null),
      Ma ||
        ((Ma = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, vw)));
  }
  function ei(r) {
    function i(h) {
      return Zs(h, r);
    }
    if (0 < fo.length) {
      Zs(fo[0], r);
      for (var a = 1; a < fo.length; a++) {
        var f = fo[a];
        f.blockedOn === r && (f.blockedOn = null);
      }
    }
    for (
      Mn !== null && Zs(Mn, r),
        On !== null && Zs(On, r),
        $n !== null && Zs($n, r),
        Gs.forEach(i),
        Js.forEach(i),
        a = 0;
      a < Pn.length;
      a++
    )
      (f = Pn[a]), f.blockedOn === r && (f.blockedOn = null);
    for (; 0 < Pn.length && ((a = Pn[0]), a.blockedOn === null); )
      pd(a), a.blockedOn === null && Pn.shift();
  }
  var zr = R.ReactCurrentBatchConfig,
    po = !0;
  function ww(r, i, a, f) {
    var h = ke,
      g = zr.transition;
    zr.transition = null;
    try {
      (ke = 1), Oa(r, i, a, f);
    } finally {
      (ke = h), (zr.transition = g);
    }
  }
  function xw(r, i, a, f) {
    var h = ke,
      g = zr.transition;
    zr.transition = null;
    try {
      (ke = 4), Oa(r, i, a, f);
    } finally {
      (ke = h), (zr.transition = g);
    }
  }
  function Oa(r, i, a, f) {
    if (po) {
      var h = $a(r, i, a, f);
      if (h === null) Ya(r, i, f, mo, a), hd(r, f);
      else if (yw(h, r, i, a, f)) f.stopPropagation();
      else if ((hd(r, f), i & 4 && -1 < gw.indexOf(r))) {
        for (; h !== null; ) {
          var g = di(h);
          if (
            (g !== null && cd(g),
            (g = $a(r, i, a, f)),
            g === null && Ya(r, i, f, mo, a),
            g === h)
          )
            break;
          h = g;
        }
        h !== null && f.stopPropagation();
      } else Ya(r, i, f, null, a);
    }
  }
  var mo = null;
  function $a(r, i, a, f) {
    if (((mo = null), (r = ka(f)), (r = cr(r)), r !== null))
      if (((i = ar(r)), i === null)) r = null;
      else if (((a = i.tag), a === 13)) {
        if (((r = Zf(i)), r !== null)) return r;
        r = null;
      } else if (a === 3) {
        if (i.stateNode.current.memoizedState.isDehydrated)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        r = null;
      } else i !== r && (r = null);
    return (mo = r), null;
  }
  function gd(r) {
    switch (r) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (lw()) {
          case Ca:
            return 1;
          case id:
            return 4;
          case oo:
          case aw:
            return 16;
          case od:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rn = null,
    Pa = null,
    go = null;
  function yd() {
    if (go) return go;
    var r,
      i = Pa,
      a = i.length,
      f,
      h = "value" in Rn ? Rn.value : Rn.textContent,
      g = h.length;
    for (r = 0; r < a && i[r] === h[r]; r++);
    var k = a - r;
    for (f = 1; f <= k && i[a - f] === h[g - f]; f++);
    return (go = h.slice(r, 1 < f ? 1 - f : void 0));
  }
  function yo(r) {
    var i = r.keyCode;
    return (
      "charCode" in r
        ? ((r = r.charCode), r === 0 && i === 13 && (r = 13))
        : (r = i),
      r === 10 && (r = 13),
      32 <= r || r === 13 ? r : 0
    );
  }
  function vo() {
    return !0;
  }
  function vd() {
    return !1;
  }
  function Lt(r) {
    function i(a, f, h, g, k) {
      (this._reactName = a),
        (this._targetInst = h),
        (this.type = f),
        (this.nativeEvent = g),
        (this.target = k),
        (this.currentTarget = null);
      for (var b in r)
        r.hasOwnProperty(b) && ((a = r[b]), (this[b] = a ? a(g) : g[b]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? vo
          : vd),
        (this.isPropagationStopped = vd),
        this
      );
    }
    return (
      Z(i.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = vo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = vo));
        },
        persist: function () {},
        isPersistent: vo,
      }),
      i
    );
  }
  var Br = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (r) {
        return r.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ra = Lt(Br),
    ti = Z({}, Br, { view: 0, detail: 0 }),
    Sw = Lt(ti),
    Da,
    Fa,
    ni,
    wo = Z({}, ti, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ba,
      button: 0,
      buttons: 0,
      relatedTarget: function (r) {
        return r.relatedTarget === void 0
          ? r.fromElement === r.srcElement
            ? r.toElement
            : r.fromElement
          : r.relatedTarget;
      },
      movementX: function (r) {
        return "movementX" in r
          ? r.movementX
          : (r !== ni &&
              (ni && r.type === "mousemove"
                ? ((Da = r.screenX - ni.screenX), (Fa = r.screenY - ni.screenY))
                : (Fa = Da = 0),
              (ni = r)),
            Da);
      },
      movementY: function (r) {
        return "movementY" in r ? r.movementY : Fa;
      },
    }),
    wd = Lt(wo),
    _w = Z({}, wo, { dataTransfer: 0 }),
    kw = Lt(_w),
    Ew = Z({}, ti, { relatedTarget: 0 }),
    za = Lt(Ew),
    bw = Z({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tw = Lt(bw),
    Nw = Z({}, Br, {
      clipboardData: function (r) {
        return "clipboardData" in r ? r.clipboardData : window.clipboardData;
      },
    }),
    Cw = Lt(Nw),
    Aw = Z({}, Br, { data: 0 }),
    xd = Lt(Aw),
    Lw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Iw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    jw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mw(r) {
    var i = this.nativeEvent;
    return i.getModifierState
      ? i.getModifierState(r)
      : (r = jw[r])
        ? !!i[r]
        : !1;
  }
  function Ba() {
    return Mw;
  }
  var Ow = Z({}, ti, {
      key: function (r) {
        if (r.key) {
          var i = Lw[r.key] || r.key;
          if (i !== "Unidentified") return i;
        }
        return r.type === "keypress"
          ? ((r = yo(r)), r === 13 ? "Enter" : String.fromCharCode(r))
          : r.type === "keydown" || r.type === "keyup"
            ? Iw[r.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ba,
      charCode: function (r) {
        return r.type === "keypress" ? yo(r) : 0;
      },
      keyCode: function (r) {
        return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
      },
      which: function (r) {
        return r.type === "keypress"
          ? yo(r)
          : r.type === "keydown" || r.type === "keyup"
            ? r.keyCode
            : 0;
      },
    }),
    $w = Lt(Ow),
    Pw = Z({}, wo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Sd = Lt(Pw),
    Rw = Z({}, ti, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ba,
    }),
    Dw = Lt(Rw),
    Fw = Z({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zw = Lt(Fw),
    Bw = Z({}, wo, {
      deltaX: function (r) {
        return "deltaX" in r
          ? r.deltaX
          : "wheelDeltaX" in r
            ? -r.wheelDeltaX
            : 0;
      },
      deltaY: function (r) {
        return "deltaY" in r
          ? r.deltaY
          : "wheelDeltaY" in r
            ? -r.wheelDeltaY
            : "wheelDelta" in r
              ? -r.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Uw = Lt(Bw),
    Hw = [9, 13, 27, 32],
    Ua = u && "CompositionEvent" in window,
    ri = null;
  u && "documentMode" in document && (ri = document.documentMode);
  var qw = u && "TextEvent" in window && !ri,
    _d = u && (!Ua || (ri && 8 < ri && 11 >= ri)),
    kd = " ",
    Ed = !1;
  function bd(r, i) {
    switch (r) {
      case "keyup":
        return Hw.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Td(r) {
    return (r = r.detail), typeof r == "object" && "data" in r ? r.data : null;
  }
  var Ur = !1;
  function Vw(r, i) {
    switch (r) {
      case "compositionend":
        return Td(i);
      case "keypress":
        return i.which !== 32 ? null : ((Ed = !0), kd);
      case "textInput":
        return (r = i.data), r === kd && Ed ? null : r;
      default:
        return null;
    }
  }
  function Ww(r, i) {
    if (Ur)
      return r === "compositionend" || (!Ua && bd(r, i))
        ? ((r = yd()), (go = Pa = Rn = null), (Ur = !1), r)
        : null;
    switch (r) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return _d && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var Kw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Nd(r) {
    var i = r && r.nodeName && r.nodeName.toLowerCase();
    return i === "input" ? !!Kw[r.type] : i === "textarea";
  }
  function Cd(r, i, a, f) {
    Qf(f),
      (i = Eo(i, "onChange")),
      0 < i.length &&
        ((a = new Ra("onChange", "change", null, a, f)),
        r.push({ event: a, listeners: i }));
  }
  var si = null,
    ii = null;
  function Qw(r) {
    Wd(r, 0);
  }
  function xo(r) {
    var i = Kr(r);
    if (zs(i)) return r;
  }
  function Xw(r, i) {
    if (r === "change") return i;
  }
  var Ad = !1;
  if (u) {
    var Ha;
    if (u) {
      var qa = "oninput" in document;
      if (!qa) {
        var Ld = document.createElement("div");
        Ld.setAttribute("oninput", "return;"),
          (qa = typeof Ld.oninput == "function");
      }
      Ha = qa;
    } else Ha = !1;
    Ad = Ha && (!document.documentMode || 9 < document.documentMode);
  }
  function Id() {
    si && (si.detachEvent("onpropertychange", jd), (ii = si = null));
  }
  function jd(r) {
    if (r.propertyName === "value" && xo(ii)) {
      var i = [];
      Cd(i, ii, r, ka(r)), Yf(Qw, i);
    }
  }
  function Gw(r, i, a) {
    r === "focusin"
      ? (Id(), (si = i), (ii = a), si.attachEvent("onpropertychange", jd))
      : r === "focusout" && Id();
  }
  function Jw(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown")
      return xo(ii);
  }
  function Yw(r, i) {
    if (r === "click") return xo(i);
  }
  function Zw(r, i) {
    if (r === "input" || r === "change") return xo(i);
  }
  function e0(r, i) {
    return (r === i && (r !== 0 || 1 / r === 1 / i)) || (r !== r && i !== i);
  }
  var Xt = typeof Object.is == "function" ? Object.is : e0;
  function oi(r, i) {
    if (Xt(r, i)) return !0;
    if (
      typeof r != "object" ||
      r === null ||
      typeof i != "object" ||
      i === null
    )
      return !1;
    var a = Object.keys(r),
      f = Object.keys(i);
    if (a.length !== f.length) return !1;
    for (f = 0; f < a.length; f++) {
      var h = a[f];
      if (!d.call(i, h) || !Xt(r[h], i[h])) return !1;
    }
    return !0;
  }
  function Md(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function Od(r, i) {
    var a = Md(r);
    r = 0;
    for (var f; a; ) {
      if (a.nodeType === 3) {
        if (((f = r + a.textContent.length), r <= i && f >= i))
          return { node: a, offset: i - r };
        r = f;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Md(a);
    }
  }
  function $d(r, i) {
    return r && i
      ? r === i
        ? !0
        : r && r.nodeType === 3
          ? !1
          : i && i.nodeType === 3
            ? $d(r, i.parentNode)
            : "contains" in r
              ? r.contains(i)
              : r.compareDocumentPosition
                ? !!(r.compareDocumentPosition(i) & 16)
                : !1
      : !1;
  }
  function Pd() {
    for (var r = window, i = or(); i instanceof r.HTMLIFrameElement; ) {
      try {
        var a = typeof i.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) r = i.contentWindow;
      else break;
      i = or(r.document);
    }
    return i;
  }
  function Va(r) {
    var i = r && r.nodeName && r.nodeName.toLowerCase();
    return (
      i &&
      ((i === "input" &&
        (r.type === "text" ||
          r.type === "search" ||
          r.type === "tel" ||
          r.type === "url" ||
          r.type === "password")) ||
        i === "textarea" ||
        r.contentEditable === "true")
    );
  }
  function t0(r) {
    var i = Pd(),
      a = r.focusedElem,
      f = r.selectionRange;
    if (
      i !== a &&
      a &&
      a.ownerDocument &&
      $d(a.ownerDocument.documentElement, a)
    ) {
      if (f !== null && Va(a)) {
        if (
          ((i = f.start),
          (r = f.end),
          r === void 0 && (r = i),
          "selectionStart" in a)
        )
          (a.selectionStart = i),
            (a.selectionEnd = Math.min(r, a.value.length));
        else if (
          ((r = ((i = a.ownerDocument || document) && i.defaultView) || window),
          r.getSelection)
        ) {
          r = r.getSelection();
          var h = a.textContent.length,
            g = Math.min(f.start, h);
          (f = f.end === void 0 ? g : Math.min(f.end, h)),
            !r.extend && g > f && ((h = f), (f = g), (g = h)),
            (h = Od(a, g));
          var k = Od(a, f);
          h &&
            k &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== h.node ||
              r.anchorOffset !== h.offset ||
              r.focusNode !== k.node ||
              r.focusOffset !== k.offset) &&
            ((i = i.createRange()),
            i.setStart(h.node, h.offset),
            r.removeAllRanges(),
            g > f
              ? (r.addRange(i), r.extend(k.node, k.offset))
              : (i.setEnd(k.node, k.offset), r.addRange(i)));
        }
      }
      for (i = [], r = a; (r = r.parentNode); )
        r.nodeType === 1 &&
          i.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < i.length; a++)
        (r = i[a]),
          (r.element.scrollLeft = r.left),
          (r.element.scrollTop = r.top);
    }
  }
  var n0 = u && "documentMode" in document && 11 >= document.documentMode,
    Hr = null,
    Wa = null,
    li = null,
    Ka = !1;
  function Rd(r, i, a) {
    var f =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ka ||
      Hr == null ||
      Hr !== or(f) ||
      ((f = Hr),
      "selectionStart" in f && Va(f)
        ? (f = { start: f.selectionStart, end: f.selectionEnd })
        : ((f = (
            (f.ownerDocument && f.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (f = {
            anchorNode: f.anchorNode,
            anchorOffset: f.anchorOffset,
            focusNode: f.focusNode,
            focusOffset: f.focusOffset,
          })),
      (li && oi(li, f)) ||
        ((li = f),
        (f = Eo(Wa, "onSelect")),
        0 < f.length &&
          ((i = new Ra("onSelect", "select", null, i, a)),
          r.push({ event: i, listeners: f }),
          (i.target = Hr))));
  }
  function So(r, i) {
    var a = {};
    return (
      (a[r.toLowerCase()] = i.toLowerCase()),
      (a["Webkit" + r] = "webkit" + i),
      (a["Moz" + r] = "moz" + i),
      a
    );
  }
  var qr = {
      animationend: So("Animation", "AnimationEnd"),
      animationiteration: So("Animation", "AnimationIteration"),
      animationstart: So("Animation", "AnimationStart"),
      transitionend: So("Transition", "TransitionEnd"),
    },
    Qa = {},
    Dd = {};
  u &&
    ((Dd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete qr.animationend.animation,
      delete qr.animationiteration.animation,
      delete qr.animationstart.animation),
    "TransitionEvent" in window || delete qr.transitionend.transition);
  function _o(r) {
    if (Qa[r]) return Qa[r];
    if (!qr[r]) return r;
    var i = qr[r],
      a;
    for (a in i) if (i.hasOwnProperty(a) && a in Dd) return (Qa[r] = i[a]);
    return r;
  }
  var Fd = _o("animationend"),
    zd = _o("animationiteration"),
    Bd = _o("animationstart"),
    Ud = _o("transitionend"),
    Hd = new Map(),
    qd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Dn(r, i) {
    Hd.set(r, i), l(i, [r]);
  }
  for (var Xa = 0; Xa < qd.length; Xa++) {
    var Ga = qd[Xa],
      r0 = Ga.toLowerCase(),
      s0 = Ga[0].toUpperCase() + Ga.slice(1);
    Dn(r0, "on" + s0);
  }
  Dn(Fd, "onAnimationEnd"),
    Dn(zd, "onAnimationIteration"),
    Dn(Bd, "onAnimationStart"),
    Dn("dblclick", "onDoubleClick"),
    Dn("focusin", "onFocus"),
    Dn("focusout", "onBlur"),
    Dn(Ud, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ai =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    i0 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ai),
    );
  function Vd(r, i, a) {
    var f = r.type || "unknown-event";
    (r.currentTarget = a), rw(f, i, void 0, r), (r.currentTarget = null);
  }
  function Wd(r, i) {
    i = (i & 4) !== 0;
    for (var a = 0; a < r.length; a++) {
      var f = r[a],
        h = f.event;
      f = f.listeners;
      e: {
        var g = void 0;
        if (i)
          for (var k = f.length - 1; 0 <= k; k--) {
            var b = f[k],
              N = b.instance,
              $ = b.currentTarget;
            if (((b = b.listener), N !== g && h.isPropagationStopped()))
              break e;
            Vd(h, b, $), (g = N);
          }
        else
          for (k = 0; k < f.length; k++) {
            if (
              ((b = f[k]),
              (N = b.instance),
              ($ = b.currentTarget),
              (b = b.listener),
              N !== g && h.isPropagationStopped())
            )
              break e;
            Vd(h, b, $), (g = N);
          }
      }
    }
    if (io) throw ((r = Na), (io = !1), (Na = null), r);
  }
  function Ae(r, i) {
    var a = i[sc];
    a === void 0 && (a = i[sc] = new Set());
    var f = r + "__bubble";
    a.has(f) || (Kd(i, r, 2, !1), a.add(f));
  }
  function Ja(r, i, a) {
    var f = 0;
    i && (f |= 4), Kd(a, r, f, i);
  }
  var ko = "_reactListening" + Math.random().toString(36).slice(2);
  function ci(r) {
    if (!r[ko]) {
      (r[ko] = !0),
        s.forEach(function (a) {
          a !== "selectionchange" && (i0.has(a) || Ja(a, !1, r), Ja(a, !0, r));
        });
      var i = r.nodeType === 9 ? r : r.ownerDocument;
      i === null || i[ko] || ((i[ko] = !0), Ja("selectionchange", !1, i));
    }
  }
  function Kd(r, i, a, f) {
    switch (gd(i)) {
      case 1:
        var h = ww;
        break;
      case 4:
        h = xw;
        break;
      default:
        h = Oa;
    }
    (a = h.bind(null, i, a, r)),
      (h = void 0),
      !Ta ||
        (i !== "touchstart" && i !== "touchmove" && i !== "wheel") ||
        (h = !0),
      f
        ? h !== void 0
          ? r.addEventListener(i, a, { capture: !0, passive: h })
          : r.addEventListener(i, a, !0)
        : h !== void 0
          ? r.addEventListener(i, a, { passive: h })
          : r.addEventListener(i, a, !1);
  }
  function Ya(r, i, a, f, h) {
    var g = f;
    if (!(i & 1) && !(i & 2) && f !== null)
      e: for (;;) {
        if (f === null) return;
        var k = f.tag;
        if (k === 3 || k === 4) {
          var b = f.stateNode.containerInfo;
          if (b === h || (b.nodeType === 8 && b.parentNode === h)) break;
          if (k === 4)
            for (k = f.return; k !== null; ) {
              var N = k.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = k.stateNode.containerInfo),
                N === h || (N.nodeType === 8 && N.parentNode === h))
              )
                return;
              k = k.return;
            }
          for (; b !== null; ) {
            if (((k = cr(b)), k === null)) return;
            if (((N = k.tag), N === 5 || N === 6)) {
              f = g = k;
              continue e;
            }
            b = b.parentNode;
          }
        }
        f = f.return;
      }
    Yf(function () {
      var $ = g,
        V = ka(a),
        K = [];
      e: {
        var q = Hd.get(r);
        if (q !== void 0) {
          var Y = Ra,
            te = r;
          switch (r) {
            case "keypress":
              if (yo(a) === 0) break e;
            case "keydown":
            case "keyup":
              Y = $w;
              break;
            case "focusin":
              (te = "focus"), (Y = za);
              break;
            case "focusout":
              (te = "blur"), (Y = za);
              break;
            case "beforeblur":
            case "afterblur":
              Y = za;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = wd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = kw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = Dw;
              break;
            case Fd:
            case zd:
            case Bd:
              Y = Tw;
              break;
            case Ud:
              Y = zw;
              break;
            case "scroll":
              Y = Sw;
              break;
            case "wheel":
              Y = Uw;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Cw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Sd;
          }
          var ne = (i & 4) !== 0,
            Ue = !ne && r === "scroll",
            I = ne ? (q !== null ? q + "Capture" : null) : q;
          ne = [];
          for (var A = $, M; A !== null; ) {
            M = A;
            var X = M.stateNode;
            if (
              (M.tag === 5 &&
                X !== null &&
                ((M = X),
                I !== null &&
                  ((X = Vs(A, I)), X != null && ne.push(ui(A, X, M)))),
              Ue)
            )
              break;
            A = A.return;
          }
          0 < ne.length &&
            ((q = new Y(q, te, null, a, V)),
            K.push({ event: q, listeners: ne }));
        }
      }
      if (!(i & 7)) {
        e: {
          if (
            ((q = r === "mouseover" || r === "pointerover"),
            (Y = r === "mouseout" || r === "pointerout"),
            q &&
              a !== _a &&
              (te = a.relatedTarget || a.fromElement) &&
              (cr(te) || te[mn]))
          )
            break e;
          if (
            (Y || q) &&
            ((q =
              V.window === V
                ? V
                : (q = V.ownerDocument)
                  ? q.defaultView || q.parentWindow
                  : window),
            Y
              ? ((te = a.relatedTarget || a.toElement),
                (Y = $),
                (te = te ? cr(te) : null),
                te !== null &&
                  ((Ue = ar(te)),
                  te !== Ue || (te.tag !== 5 && te.tag !== 6)) &&
                  (te = null))
              : ((Y = null), (te = $)),
            Y !== te)
          ) {
            if (
              ((ne = wd),
              (X = "onMouseLeave"),
              (I = "onMouseEnter"),
              (A = "mouse"),
              (r === "pointerout" || r === "pointerover") &&
                ((ne = Sd),
                (X = "onPointerLeave"),
                (I = "onPointerEnter"),
                (A = "pointer")),
              (Ue = Y == null ? q : Kr(Y)),
              (M = te == null ? q : Kr(te)),
              (q = new ne(X, A + "leave", Y, a, V)),
              (q.target = Ue),
              (q.relatedTarget = M),
              (X = null),
              cr(V) === $ &&
                ((ne = new ne(I, A + "enter", te, a, V)),
                (ne.target = M),
                (ne.relatedTarget = Ue),
                (X = ne)),
              (Ue = X),
              Y && te)
            )
              t: {
                for (ne = Y, I = te, A = 0, M = ne; M; M = Vr(M)) A++;
                for (M = 0, X = I; X; X = Vr(X)) M++;
                for (; 0 < A - M; ) (ne = Vr(ne)), A--;
                for (; 0 < M - A; ) (I = Vr(I)), M--;
                for (; A--; ) {
                  if (ne === I || (I !== null && ne === I.alternate)) break t;
                  (ne = Vr(ne)), (I = Vr(I));
                }
                ne = null;
              }
            else ne = null;
            Y !== null && Qd(K, q, Y, ne, !1),
              te !== null && Ue !== null && Qd(K, Ue, te, ne, !0);
          }
        }
        e: {
          if (
            ((q = $ ? Kr($) : window),
            (Y = q.nodeName && q.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && q.type === "file"))
          )
            var re = Xw;
          else if (Nd(q))
            if (Ad) re = Zw;
            else {
              re = Jw;
              var ie = Gw;
            }
          else
            (Y = q.nodeName) &&
              Y.toLowerCase() === "input" &&
              (q.type === "checkbox" || q.type === "radio") &&
              (re = Yw);
          if (re && (re = re(r, $))) {
            Cd(K, re, a, V);
            break e;
          }
          ie && ie(r, q, $),
            r === "focusout" &&
              (ie = q._wrapperState) &&
              ie.controlled &&
              q.type === "number" &&
              $r(q, "number", q.value);
        }
        switch (((ie = $ ? Kr($) : window), r)) {
          case "focusin":
            (Nd(ie) || ie.contentEditable === "true") &&
              ((Hr = ie), (Wa = $), (li = null));
            break;
          case "focusout":
            li = Wa = Hr = null;
            break;
          case "mousedown":
            Ka = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ka = !1), Rd(K, a, V);
            break;
          case "selectionchange":
            if (n0) break;
          case "keydown":
          case "keyup":
            Rd(K, a, V);
        }
        var oe;
        if (Ua)
          e: {
            switch (r) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          Ur
            ? bd(r, a) && (ce = "onCompositionEnd")
            : r === "keydown" &&
              a.keyCode === 229 &&
              (ce = "onCompositionStart");
        ce &&
          (_d &&
            a.locale !== "ko" &&
            (Ur || ce !== "onCompositionStart"
              ? ce === "onCompositionEnd" && Ur && (oe = yd())
              : ((Rn = V),
                (Pa = "value" in Rn ? Rn.value : Rn.textContent),
                (Ur = !0))),
          (ie = Eo($, ce)),
          0 < ie.length &&
            ((ce = new xd(ce, r, null, a, V)),
            K.push({ event: ce, listeners: ie }),
            oe
              ? (ce.data = oe)
              : ((oe = Td(a)), oe !== null && (ce.data = oe)))),
          (oe = qw ? Vw(r, a) : Ww(r, a)) &&
            (($ = Eo($, "onBeforeInput")),
            0 < $.length &&
              ((V = new xd("onBeforeInput", "beforeinput", null, a, V)),
              K.push({ event: V, listeners: $ }),
              (V.data = oe)));
      }
      Wd(K, i);
    });
  }
  function ui(r, i, a) {
    return { instance: r, listener: i, currentTarget: a };
  }
  function Eo(r, i) {
    for (var a = i + "Capture", f = []; r !== null; ) {
      var h = r,
        g = h.stateNode;
      h.tag === 5 &&
        g !== null &&
        ((h = g),
        (g = Vs(r, a)),
        g != null && f.unshift(ui(r, g, h)),
        (g = Vs(r, i)),
        g != null && f.push(ui(r, g, h))),
        (r = r.return);
    }
    return f;
  }
  function Vr(r) {
    if (r === null) return null;
    do r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Qd(r, i, a, f, h) {
    for (var g = i._reactName, k = []; a !== null && a !== f; ) {
      var b = a,
        N = b.alternate,
        $ = b.stateNode;
      if (N !== null && N === f) break;
      b.tag === 5 &&
        $ !== null &&
        ((b = $),
        h
          ? ((N = Vs(a, g)), N != null && k.unshift(ui(a, N, b)))
          : h || ((N = Vs(a, g)), N != null && k.push(ui(a, N, b)))),
        (a = a.return);
    }
    k.length !== 0 && r.push({ event: i, listeners: k });
  }
  var o0 = /\r\n?/g,
    l0 = /\u0000|\uFFFD/g;
  function Xd(r) {
    return (typeof r == "string" ? r : "" + r)
      .replace(
        o0,
        `
`,
      )
      .replace(l0, "");
  }
  function bo(r, i, a) {
    if (((i = Xd(i)), Xd(r) !== i && a)) throw Error(n(425));
  }
  function To() {}
  var Za = null,
    ec = null;
  function tc(r, i) {
    return (
      r === "textarea" ||
      r === "noscript" ||
      typeof i.children == "string" ||
      typeof i.children == "number" ||
      (typeof i.dangerouslySetInnerHTML == "object" &&
        i.dangerouslySetInnerHTML !== null &&
        i.dangerouslySetInnerHTML.__html != null)
    );
  }
  var nc = typeof setTimeout == "function" ? setTimeout : void 0,
    a0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Gd = typeof Promise == "function" ? Promise : void 0,
    c0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Gd < "u"
          ? function (r) {
              return Gd.resolve(null).then(r).catch(u0);
            }
          : nc;
  function u0(r) {
    setTimeout(function () {
      throw r;
    });
  }
  function rc(r, i) {
    var a = i,
      f = 0;
    do {
      var h = a.nextSibling;
      if ((r.removeChild(a), h && h.nodeType === 8))
        if (((a = h.data), a === "/$")) {
          if (f === 0) {
            r.removeChild(h), ei(i);
            return;
          }
          f--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || f++;
      a = h;
    } while (a);
    ei(i);
  }
  function Fn(r) {
    for (; r != null; r = r.nextSibling) {
      var i = r.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (((i = r.data), i === "$" || i === "$!" || i === "$?")) break;
        if (i === "/$") return null;
      }
    }
    return r;
  }
  function Jd(r) {
    r = r.previousSibling;
    for (var i = 0; r; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (i === 0) return r;
          i--;
        } else a === "/$" && i++;
      }
      r = r.previousSibling;
    }
    return null;
  }
  var Wr = Math.random().toString(36).slice(2),
    ln = "__reactFiber$" + Wr,
    fi = "__reactProps$" + Wr,
    mn = "__reactContainer$" + Wr,
    sc = "__reactEvents$" + Wr,
    f0 = "__reactListeners$" + Wr,
    d0 = "__reactHandles$" + Wr;
  function cr(r) {
    var i = r[ln];
    if (i) return i;
    for (var a = r.parentNode; a; ) {
      if ((i = a[mn] || a[ln])) {
        if (
          ((a = i.alternate),
          i.child !== null || (a !== null && a.child !== null))
        )
          for (r = Jd(r); r !== null; ) {
            if ((a = r[ln])) return a;
            r = Jd(r);
          }
        return i;
      }
      (r = a), (a = r.parentNode);
    }
    return null;
  }
  function di(r) {
    return (
      (r = r[ln] || r[mn]),
      !r || (r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3)
        ? null
        : r
    );
  }
  function Kr(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function No(r) {
    return r[fi] || null;
  }
  var ic = [],
    Qr = -1;
  function zn(r) {
    return { current: r };
  }
  function Le(r) {
    0 > Qr || ((r.current = ic[Qr]), (ic[Qr] = null), Qr--);
  }
  function Ne(r, i) {
    Qr++, (ic[Qr] = r.current), (r.current = i);
  }
  var Bn = {},
    rt = zn(Bn),
    vt = zn(!1),
    ur = Bn;
  function Xr(r, i) {
    var a = r.type.contextTypes;
    if (!a) return Bn;
    var f = r.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === i)
      return f.__reactInternalMemoizedMaskedChildContext;
    var h = {},
      g;
    for (g in a) h[g] = i[g];
    return (
      f &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = i),
        (r.__reactInternalMemoizedMaskedChildContext = h)),
      h
    );
  }
  function wt(r) {
    return (r = r.childContextTypes), r != null;
  }
  function Co() {
    Le(vt), Le(rt);
  }
  function Yd(r, i, a) {
    if (rt.current !== Bn) throw Error(n(168));
    Ne(rt, i), Ne(vt, a);
  }
  function Zd(r, i, a) {
    var f = r.stateNode;
    if (((i = i.childContextTypes), typeof f.getChildContext != "function"))
      return a;
    f = f.getChildContext();
    for (var h in f) if (!(h in i)) throw Error(n(108, pe(r) || "Unknown", h));
    return Z({}, a, f);
  }
  function Ao(r) {
    return (
      (r =
        ((r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext) ||
        Bn),
      (ur = rt.current),
      Ne(rt, r),
      Ne(vt, vt.current),
      !0
    );
  }
  function eh(r, i, a) {
    var f = r.stateNode;
    if (!f) throw Error(n(169));
    a
      ? ((r = Zd(r, i, ur)),
        (f.__reactInternalMemoizedMergedChildContext = r),
        Le(vt),
        Le(rt),
        Ne(rt, r))
      : Le(vt),
      Ne(vt, a);
  }
  var gn = null,
    Lo = !1,
    oc = !1;
  function th(r) {
    gn === null ? (gn = [r]) : gn.push(r);
  }
  function h0(r) {
    (Lo = !0), th(r);
  }
  function Un() {
    if (!oc && gn !== null) {
      oc = !0;
      var r = 0,
        i = ke;
      try {
        var a = gn;
        for (ke = 1; r < a.length; r++) {
          var f = a[r];
          do f = f(!0);
          while (f !== null);
        }
        (gn = null), (Lo = !1);
      } catch (h) {
        throw (gn !== null && (gn = gn.slice(r + 1)), rd(Ca, Un), h);
      } finally {
        (ke = i), (oc = !1);
      }
    }
    return null;
  }
  var Gr = [],
    Jr = 0,
    Io = null,
    jo = 0,
    $t = [],
    Pt = 0,
    fr = null,
    yn = 1,
    vn = "";
  function dr(r, i) {
    (Gr[Jr++] = jo), (Gr[Jr++] = Io), (Io = r), (jo = i);
  }
  function nh(r, i, a) {
    ($t[Pt++] = yn), ($t[Pt++] = vn), ($t[Pt++] = fr), (fr = r);
    var f = yn;
    r = vn;
    var h = 32 - Qt(f) - 1;
    (f &= ~(1 << h)), (a += 1);
    var g = 32 - Qt(i) + h;
    if (30 < g) {
      var k = h - (h % 5);
      (g = (f & ((1 << k) - 1)).toString(32)),
        (f >>= k),
        (h -= k),
        (yn = (1 << (32 - Qt(i) + h)) | (a << h) | f),
        (vn = g + r);
    } else (yn = (1 << g) | (a << h) | f), (vn = r);
  }
  function lc(r) {
    r.return !== null && (dr(r, 1), nh(r, 1, 0));
  }
  function ac(r) {
    for (; r === Io; )
      (Io = Gr[--Jr]), (Gr[Jr] = null), (jo = Gr[--Jr]), (Gr[Jr] = null);
    for (; r === fr; )
      (fr = $t[--Pt]),
        ($t[Pt] = null),
        (vn = $t[--Pt]),
        ($t[Pt] = null),
        (yn = $t[--Pt]),
        ($t[Pt] = null);
  }
  var It = null,
    jt = null,
    Ie = !1,
    Gt = null;
  function rh(r, i) {
    var a = zt(5, null, null, 0);
    (a.elementType = "DELETED"),
      (a.stateNode = i),
      (a.return = r),
      (i = r.deletions),
      i === null ? ((r.deletions = [a]), (r.flags |= 16)) : i.push(a);
  }
  function sh(r, i) {
    switch (r.tag) {
      case 5:
        var a = r.type;
        return (
          (i =
            i.nodeType !== 1 || a.toLowerCase() !== i.nodeName.toLowerCase()
              ? null
              : i),
          i !== null
            ? ((r.stateNode = i), (It = r), (jt = Fn(i.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (i = r.pendingProps === "" || i.nodeType !== 3 ? null : i),
          i !== null ? ((r.stateNode = i), (It = r), (jt = null), !0) : !1
        );
      case 13:
        return (
          (i = i.nodeType !== 8 ? null : i),
          i !== null
            ? ((a = fr !== null ? { id: yn, overflow: vn } : null),
              (r.memoizedState = {
                dehydrated: i,
                treeContext: a,
                retryLane: 1073741824,
              }),
              (a = zt(18, null, null, 0)),
              (a.stateNode = i),
              (a.return = r),
              (r.child = a),
              (It = r),
              (jt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function cc(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function uc(r) {
    if (Ie) {
      var i = jt;
      if (i) {
        var a = i;
        if (!sh(r, i)) {
          if (cc(r)) throw Error(n(418));
          i = Fn(a.nextSibling);
          var f = It;
          i && sh(r, i)
            ? rh(f, a)
            : ((r.flags = (r.flags & -4097) | 2), (Ie = !1), (It = r));
        }
      } else {
        if (cc(r)) throw Error(n(418));
        (r.flags = (r.flags & -4097) | 2), (Ie = !1), (It = r);
      }
    }
  }
  function ih(r) {
    for (
      r = r.return;
      r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13;

    )
      r = r.return;
    It = r;
  }
  function Mo(r) {
    if (r !== It) return !1;
    if (!Ie) return ih(r), (Ie = !0), !1;
    var i;
    if (
      ((i = r.tag !== 3) &&
        !(i = r.tag !== 5) &&
        ((i = r.type),
        (i = i !== "head" && i !== "body" && !tc(r.type, r.memoizedProps))),
      i && (i = jt))
    ) {
      if (cc(r)) throw (oh(), Error(n(418)));
      for (; i; ) rh(r, i), (i = Fn(i.nextSibling));
    }
    if ((ih(r), r.tag === 13)) {
      if (((r = r.memoizedState), (r = r !== null ? r.dehydrated : null), !r))
        throw Error(n(317));
      e: {
        for (r = r.nextSibling, i = 0; r; ) {
          if (r.nodeType === 8) {
            var a = r.data;
            if (a === "/$") {
              if (i === 0) {
                jt = Fn(r.nextSibling);
                break e;
              }
              i--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || i++;
          }
          r = r.nextSibling;
        }
        jt = null;
      }
    } else jt = It ? Fn(r.stateNode.nextSibling) : null;
    return !0;
  }
  function oh() {
    for (var r = jt; r; ) r = Fn(r.nextSibling);
  }
  function Yr() {
    (jt = It = null), (Ie = !1);
  }
  function fc(r) {
    Gt === null ? (Gt = [r]) : Gt.push(r);
  }
  var p0 = R.ReactCurrentBatchConfig;
  function hi(r, i, a) {
    if (
      ((r = a.ref),
      r !== null && typeof r != "function" && typeof r != "object")
    ) {
      if (a._owner) {
        if (((a = a._owner), a)) {
          if (a.tag !== 1) throw Error(n(309));
          var f = a.stateNode;
        }
        if (!f) throw Error(n(147, r));
        var h = f,
          g = "" + r;
        return i !== null &&
          i.ref !== null &&
          typeof i.ref == "function" &&
          i.ref._stringRef === g
          ? i.ref
          : ((i = function (k) {
              var b = h.refs;
              k === null ? delete b[g] : (b[g] = k);
            }),
            (i._stringRef = g),
            i);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!a._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Oo(r, i) {
    throw (
      ((r = Object.prototype.toString.call(i)),
      Error(
        n(
          31,
          r === "[object Object]"
            ? "object with keys {" + Object.keys(i).join(", ") + "}"
            : r,
        ),
      ))
    );
  }
  function lh(r) {
    var i = r._init;
    return i(r._payload);
  }
  function ah(r) {
    function i(I, A) {
      if (r) {
        var M = I.deletions;
        M === null ? ((I.deletions = [A]), (I.flags |= 16)) : M.push(A);
      }
    }
    function a(I, A) {
      if (!r) return null;
      for (; A !== null; ) i(I, A), (A = A.sibling);
      return null;
    }
    function f(I, A) {
      for (I = new Map(); A !== null; )
        A.key !== null ? I.set(A.key, A) : I.set(A.index, A), (A = A.sibling);
      return I;
    }
    function h(I, A) {
      return (I = Gn(I, A)), (I.index = 0), (I.sibling = null), I;
    }
    function g(I, A, M) {
      return (
        (I.index = M),
        r
          ? ((M = I.alternate),
            M !== null
              ? ((M = M.index), M < A ? ((I.flags |= 2), A) : M)
              : ((I.flags |= 2), A))
          : ((I.flags |= 1048576), A)
      );
    }
    function k(I) {
      return r && I.alternate === null && (I.flags |= 2), I;
    }
    function b(I, A, M, X) {
      return A === null || A.tag !== 6
        ? ((A = nu(M, I.mode, X)), (A.return = I), A)
        : ((A = h(A, M)), (A.return = I), A);
    }
    function N(I, A, M, X) {
      var re = M.type;
      return re === U
        ? V(I, A, M.props.children, X, M.key)
        : A !== null &&
            (A.elementType === re ||
              (typeof re == "object" &&
                re !== null &&
                re.$$typeof === Ce &&
                lh(re) === A.type))
          ? ((X = h(A, M.props)), (X.ref = hi(I, A, M)), (X.return = I), X)
          : ((X = sl(M.type, M.key, M.props, null, I.mode, X)),
            (X.ref = hi(I, A, M)),
            (X.return = I),
            X);
    }
    function $(I, A, M, X) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== M.containerInfo ||
        A.stateNode.implementation !== M.implementation
        ? ((A = ru(M, I.mode, X)), (A.return = I), A)
        : ((A = h(A, M.children || [])), (A.return = I), A);
    }
    function V(I, A, M, X, re) {
      return A === null || A.tag !== 7
        ? ((A = xr(M, I.mode, X, re)), (A.return = I), A)
        : ((A = h(A, M)), (A.return = I), A);
    }
    function K(I, A, M) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (A = nu("" + A, I.mode, M)), (A.return = I), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case D:
            return (
              (M = sl(A.type, A.key, A.props, null, I.mode, M)),
              (M.ref = hi(I, null, A)),
              (M.return = I),
              M
            );
          case F:
            return (A = ru(A, I.mode, M)), (A.return = I), A;
          case Ce:
            var X = A._init;
            return K(I, X(A._payload), M);
        }
        if (pn(A) || se(A))
          return (A = xr(A, I.mode, M, null)), (A.return = I), A;
        Oo(I, A);
      }
      return null;
    }
    function q(I, A, M, X) {
      var re = A !== null ? A.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return re !== null ? null : b(I, A, "" + M, X);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case D:
            return M.key === re ? N(I, A, M, X) : null;
          case F:
            return M.key === re ? $(I, A, M, X) : null;
          case Ce:
            return (re = M._init), q(I, A, re(M._payload), X);
        }
        if (pn(M) || se(M)) return re !== null ? null : V(I, A, M, X, null);
        Oo(I, M);
      }
      return null;
    }
    function Y(I, A, M, X, re) {
      if ((typeof X == "string" && X !== "") || typeof X == "number")
        return (I = I.get(M) || null), b(A, I, "" + X, re);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case D:
            return (
              (I = I.get(X.key === null ? M : X.key) || null), N(A, I, X, re)
            );
          case F:
            return (
              (I = I.get(X.key === null ? M : X.key) || null), $(A, I, X, re)
            );
          case Ce:
            var ie = X._init;
            return Y(I, A, M, ie(X._payload), re);
        }
        if (pn(X) || se(X)) return (I = I.get(M) || null), V(A, I, X, re, null);
        Oo(A, X);
      }
      return null;
    }
    function te(I, A, M, X) {
      for (
        var re = null, ie = null, oe = A, ce = (A = 0), Je = null;
        oe !== null && ce < M.length;
        ce++
      ) {
        oe.index > ce ? ((Je = oe), (oe = null)) : (Je = oe.sibling);
        var _e = q(I, oe, M[ce], X);
        if (_e === null) {
          oe === null && (oe = Je);
          break;
        }
        r && oe && _e.alternate === null && i(I, oe),
          (A = g(_e, A, ce)),
          ie === null ? (re = _e) : (ie.sibling = _e),
          (ie = _e),
          (oe = Je);
      }
      if (ce === M.length) return a(I, oe), Ie && dr(I, ce), re;
      if (oe === null) {
        for (; ce < M.length; ce++)
          (oe = K(I, M[ce], X)),
            oe !== null &&
              ((A = g(oe, A, ce)),
              ie === null ? (re = oe) : (ie.sibling = oe),
              (ie = oe));
        return Ie && dr(I, ce), re;
      }
      for (oe = f(I, oe); ce < M.length; ce++)
        (Je = Y(oe, I, ce, M[ce], X)),
          Je !== null &&
            (r &&
              Je.alternate !== null &&
              oe.delete(Je.key === null ? ce : Je.key),
            (A = g(Je, A, ce)),
            ie === null ? (re = Je) : (ie.sibling = Je),
            (ie = Je));
      return (
        r &&
          oe.forEach(function (Jn) {
            return i(I, Jn);
          }),
        Ie && dr(I, ce),
        re
      );
    }
    function ne(I, A, M, X) {
      var re = se(M);
      if (typeof re != "function") throw Error(n(150));
      if (((M = re.call(M)), M == null)) throw Error(n(151));
      for (
        var ie = (re = null), oe = A, ce = (A = 0), Je = null, _e = M.next();
        oe !== null && !_e.done;
        ce++, _e = M.next()
      ) {
        oe.index > ce ? ((Je = oe), (oe = null)) : (Je = oe.sibling);
        var Jn = q(I, oe, _e.value, X);
        if (Jn === null) {
          oe === null && (oe = Je);
          break;
        }
        r && oe && Jn.alternate === null && i(I, oe),
          (A = g(Jn, A, ce)),
          ie === null ? (re = Jn) : (ie.sibling = Jn),
          (ie = Jn),
          (oe = Je);
      }
      if (_e.done) return a(I, oe), Ie && dr(I, ce), re;
      if (oe === null) {
        for (; !_e.done; ce++, _e = M.next())
          (_e = K(I, _e.value, X)),
            _e !== null &&
              ((A = g(_e, A, ce)),
              ie === null ? (re = _e) : (ie.sibling = _e),
              (ie = _e));
        return Ie && dr(I, ce), re;
      }
      for (oe = f(I, oe); !_e.done; ce++, _e = M.next())
        (_e = Y(oe, I, ce, _e.value, X)),
          _e !== null &&
            (r &&
              _e.alternate !== null &&
              oe.delete(_e.key === null ? ce : _e.key),
            (A = g(_e, A, ce)),
            ie === null ? (re = _e) : (ie.sibling = _e),
            (ie = _e));
      return (
        r &&
          oe.forEach(function (K0) {
            return i(I, K0);
          }),
        Ie && dr(I, ce),
        re
      );
    }
    function Ue(I, A, M, X) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === U &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case D:
            e: {
              for (var re = M.key, ie = A; ie !== null; ) {
                if (ie.key === re) {
                  if (((re = M.type), re === U)) {
                    if (ie.tag === 7) {
                      a(I, ie.sibling),
                        (A = h(ie, M.props.children)),
                        (A.return = I),
                        (I = A);
                      break e;
                    }
                  } else if (
                    ie.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === Ce &&
                      lh(re) === ie.type)
                  ) {
                    a(I, ie.sibling),
                      (A = h(ie, M.props)),
                      (A.ref = hi(I, ie, M)),
                      (A.return = I),
                      (I = A);
                    break e;
                  }
                  a(I, ie);
                  break;
                } else i(I, ie);
                ie = ie.sibling;
              }
              M.type === U
                ? ((A = xr(M.props.children, I.mode, X, M.key)),
                  (A.return = I),
                  (I = A))
                : ((X = sl(M.type, M.key, M.props, null, I.mode, X)),
                  (X.ref = hi(I, A, M)),
                  (X.return = I),
                  (I = X));
            }
            return k(I);
          case F:
            e: {
              for (ie = M.key; A !== null; ) {
                if (A.key === ie)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === M.containerInfo &&
                    A.stateNode.implementation === M.implementation
                  ) {
                    a(I, A.sibling),
                      (A = h(A, M.children || [])),
                      (A.return = I),
                      (I = A);
                    break e;
                  } else {
                    a(I, A);
                    break;
                  }
                else i(I, A);
                A = A.sibling;
              }
              (A = ru(M, I.mode, X)), (A.return = I), (I = A);
            }
            return k(I);
          case Ce:
            return (ie = M._init), Ue(I, A, ie(M._payload), X);
        }
        if (pn(M)) return te(I, A, M, X);
        if (se(M)) return ne(I, A, M, X);
        Oo(I, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number"
        ? ((M = "" + M),
          A !== null && A.tag === 6
            ? (a(I, A.sibling), (A = h(A, M)), (A.return = I), (I = A))
            : (a(I, A), (A = nu(M, I.mode, X)), (A.return = I), (I = A)),
          k(I))
        : a(I, A);
    }
    return Ue;
  }
  var Zr = ah(!0),
    ch = ah(!1),
    $o = zn(null),
    Po = null,
    es = null,
    dc = null;
  function hc() {
    dc = es = Po = null;
  }
  function pc(r) {
    var i = $o.current;
    Le($o), (r._currentValue = i);
  }
  function mc(r, i, a) {
    for (; r !== null; ) {
      var f = r.alternate;
      if (
        ((r.childLanes & i) !== i
          ? ((r.childLanes |= i), f !== null && (f.childLanes |= i))
          : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i),
        r === a)
      )
        break;
      r = r.return;
    }
  }
  function ts(r, i) {
    (Po = r),
      (dc = es = null),
      (r = r.dependencies),
      r !== null &&
        r.firstContext !== null &&
        (r.lanes & i && (xt = !0), (r.firstContext = null));
  }
  function Rt(r) {
    var i = r._currentValue;
    if (dc !== r)
      if (((r = { context: r, memoizedValue: i, next: null }), es === null)) {
        if (Po === null) throw Error(n(308));
        (es = r), (Po.dependencies = { lanes: 0, firstContext: r });
      } else es = es.next = r;
    return i;
  }
  var hr = null;
  function gc(r) {
    hr === null ? (hr = [r]) : hr.push(r);
  }
  function uh(r, i, a, f) {
    var h = i.interleaved;
    return (
      h === null ? ((a.next = a), gc(i)) : ((a.next = h.next), (h.next = a)),
      (i.interleaved = a),
      wn(r, f)
    );
  }
  function wn(r, i) {
    r.lanes |= i;
    var a = r.alternate;
    for (a !== null && (a.lanes |= i), a = r, r = r.return; r !== null; )
      (r.childLanes |= i),
        (a = r.alternate),
        a !== null && (a.childLanes |= i),
        (a = r),
        (r = r.return);
    return a.tag === 3 ? a.stateNode : null;
  }
  var Hn = !1;
  function yc(r) {
    r.updateQueue = {
      baseState: r.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function fh(r, i) {
    (r = r.updateQueue),
      i.updateQueue === r &&
        (i.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          effects: r.effects,
        });
  }
  function xn(r, i) {
    return {
      eventTime: r,
      lane: i,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function qn(r, i, a) {
    var f = r.updateQueue;
    if (f === null) return null;
    if (((f = f.shared), we & 2)) {
      var h = f.pending;
      return (
        h === null ? (i.next = i) : ((i.next = h.next), (h.next = i)),
        (f.pending = i),
        wn(r, a)
      );
    }
    return (
      (h = f.interleaved),
      h === null ? ((i.next = i), gc(f)) : ((i.next = h.next), (h.next = i)),
      (f.interleaved = i),
      wn(r, a)
    );
  }
  function Ro(r, i, a) {
    if (
      ((i = i.updateQueue), i !== null && ((i = i.shared), (a & 4194240) !== 0))
    ) {
      var f = i.lanes;
      (f &= r.pendingLanes), (a |= f), (i.lanes = a), Ia(r, a);
    }
  }
  function dh(r, i) {
    var a = r.updateQueue,
      f = r.alternate;
    if (f !== null && ((f = f.updateQueue), a === f)) {
      var h = null,
        g = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var k = {
            eventTime: a.eventTime,
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          };
          g === null ? (h = g = k) : (g = g.next = k), (a = a.next);
        } while (a !== null);
        g === null ? (h = g = i) : (g = g.next = i);
      } else h = g = i;
      (a = {
        baseState: f.baseState,
        firstBaseUpdate: h,
        lastBaseUpdate: g,
        shared: f.shared,
        effects: f.effects,
      }),
        (r.updateQueue = a);
      return;
    }
    (r = a.lastBaseUpdate),
      r === null ? (a.firstBaseUpdate = i) : (r.next = i),
      (a.lastBaseUpdate = i);
  }
  function Do(r, i, a, f) {
    var h = r.updateQueue;
    Hn = !1;
    var g = h.firstBaseUpdate,
      k = h.lastBaseUpdate,
      b = h.shared.pending;
    if (b !== null) {
      h.shared.pending = null;
      var N = b,
        $ = N.next;
      (N.next = null), k === null ? (g = $) : (k.next = $), (k = N);
      var V = r.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (b = V.lastBaseUpdate),
        b !== k &&
          (b === null ? (V.firstBaseUpdate = $) : (b.next = $),
          (V.lastBaseUpdate = N)));
    }
    if (g !== null) {
      var K = h.baseState;
      (k = 0), (V = $ = N = null), (b = g);
      do {
        var q = b.lane,
          Y = b.eventTime;
        if ((f & q) === q) {
          V !== null &&
            (V = V.next =
              {
                eventTime: Y,
                lane: 0,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null,
              });
          e: {
            var te = r,
              ne = b;
            switch (((q = i), (Y = a), ne.tag)) {
              case 1:
                if (((te = ne.payload), typeof te == "function")) {
                  K = te.call(Y, K, q);
                  break e;
                }
                K = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = ne.payload),
                  (q = typeof te == "function" ? te.call(Y, K, q) : te),
                  q == null)
                )
                  break e;
                K = Z({}, K, q);
                break e;
              case 2:
                Hn = !0;
            }
          }
          b.callback !== null &&
            b.lane !== 0 &&
            ((r.flags |= 64),
            (q = h.effects),
            q === null ? (h.effects = [b]) : q.push(b));
        } else
          (Y = {
            eventTime: Y,
            lane: q,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            V === null ? (($ = V = Y), (N = K)) : (V = V.next = Y),
            (k |= q);
        if (((b = b.next), b === null)) {
          if (((b = h.shared.pending), b === null)) break;
          (q = b),
            (b = q.next),
            (q.next = null),
            (h.lastBaseUpdate = q),
            (h.shared.pending = null);
        }
      } while (!0);
      if (
        (V === null && (N = K),
        (h.baseState = N),
        (h.firstBaseUpdate = $),
        (h.lastBaseUpdate = V),
        (i = h.shared.interleaved),
        i !== null)
      ) {
        h = i;
        do (k |= h.lane), (h = h.next);
        while (h !== i);
      } else g === null && (h.shared.lanes = 0);
      (gr |= k), (r.lanes = k), (r.memoizedState = K);
    }
  }
  function hh(r, i, a) {
    if (((r = i.effects), (i.effects = null), r !== null))
      for (i = 0; i < r.length; i++) {
        var f = r[i],
          h = f.callback;
        if (h !== null) {
          if (((f.callback = null), (f = a), typeof h != "function"))
            throw Error(n(191, h));
          h.call(f);
        }
      }
  }
  var pi = {},
    an = zn(pi),
    mi = zn(pi),
    gi = zn(pi);
  function pr(r) {
    if (r === pi) throw Error(n(174));
    return r;
  }
  function vc(r, i) {
    switch ((Ne(gi, i), Ne(mi, r), Ne(an, pi), (r = i.nodeType), r)) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Hs(null, "");
        break;
      default:
        (r = r === 8 ? i.parentNode : i),
          (i = r.namespaceURI || null),
          (r = r.tagName),
          (i = Hs(i, r));
    }
    Le(an), Ne(an, i);
  }
  function ns() {
    Le(an), Le(mi), Le(gi);
  }
  function ph(r) {
    pr(gi.current);
    var i = pr(an.current),
      a = Hs(i, r.type);
    i !== a && (Ne(mi, r), Ne(an, a));
  }
  function wc(r) {
    mi.current === r && (Le(an), Le(mi));
  }
  var $e = zn(0);
  function Fo(r) {
    for (var i = r; i !== null; ) {
      if (i.tag === 13) {
        var a = i.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if (i.flags & 128) return i;
      } else if (i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === r) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === r) return null;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
    return null;
  }
  var xc = [];
  function Sc() {
    for (var r = 0; r < xc.length; r++)
      xc[r]._workInProgressVersionPrimary = null;
    xc.length = 0;
  }
  var zo = R.ReactCurrentDispatcher,
    _c = R.ReactCurrentBatchConfig,
    mr = 0,
    Pe = null,
    We = null,
    Xe = null,
    Bo = !1,
    yi = !1,
    vi = 0,
    m0 = 0;
  function st() {
    throw Error(n(321));
  }
  function kc(r, i) {
    if (i === null) return !1;
    for (var a = 0; a < i.length && a < r.length; a++)
      if (!Xt(r[a], i[a])) return !1;
    return !0;
  }
  function Ec(r, i, a, f, h, g) {
    if (
      ((mr = g),
      (Pe = i),
      (i.memoizedState = null),
      (i.updateQueue = null),
      (i.lanes = 0),
      (zo.current = r === null || r.memoizedState === null ? w0 : x0),
      (r = a(f, h)),
      yi)
    ) {
      g = 0;
      do {
        if (((yi = !1), (vi = 0), 25 <= g)) throw Error(n(301));
        (g += 1),
          (Xe = We = null),
          (i.updateQueue = null),
          (zo.current = S0),
          (r = a(f, h));
      } while (yi);
    }
    if (
      ((zo.current = qo),
      (i = We !== null && We.next !== null),
      (mr = 0),
      (Xe = We = Pe = null),
      (Bo = !1),
      i)
    )
      throw Error(n(300));
    return r;
  }
  function bc() {
    var r = vi !== 0;
    return (vi = 0), r;
  }
  function cn() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xe === null ? (Pe.memoizedState = Xe = r) : (Xe = Xe.next = r), Xe;
  }
  function Dt() {
    if (We === null) {
      var r = Pe.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = We.next;
    var i = Xe === null ? Pe.memoizedState : Xe.next;
    if (i !== null) (Xe = i), (We = r);
    else {
      if (r === null) throw Error(n(310));
      (We = r),
        (r = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        Xe === null ? (Pe.memoizedState = Xe = r) : (Xe = Xe.next = r);
    }
    return Xe;
  }
  function wi(r, i) {
    return typeof i == "function" ? i(r) : i;
  }
  function Tc(r) {
    var i = Dt(),
      a = i.queue;
    if (a === null) throw Error(n(311));
    a.lastRenderedReducer = r;
    var f = We,
      h = f.baseQueue,
      g = a.pending;
    if (g !== null) {
      if (h !== null) {
        var k = h.next;
        (h.next = g.next), (g.next = k);
      }
      (f.baseQueue = h = g), (a.pending = null);
    }
    if (h !== null) {
      (g = h.next), (f = f.baseState);
      var b = (k = null),
        N = null,
        $ = g;
      do {
        var V = $.lane;
        if ((mr & V) === V)
          N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: $.action,
                hasEagerState: $.hasEagerState,
                eagerState: $.eagerState,
                next: null,
              }),
            (f = $.hasEagerState ? $.eagerState : r(f, $.action));
        else {
          var K = {
            lane: V,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null,
          };
          N === null ? ((b = N = K), (k = f)) : (N = N.next = K),
            (Pe.lanes |= V),
            (gr |= V);
        }
        $ = $.next;
      } while ($ !== null && $ !== g);
      N === null ? (k = f) : (N.next = b),
        Xt(f, i.memoizedState) || (xt = !0),
        (i.memoizedState = f),
        (i.baseState = k),
        (i.baseQueue = N),
        (a.lastRenderedState = f);
    }
    if (((r = a.interleaved), r !== null)) {
      h = r;
      do (g = h.lane), (Pe.lanes |= g), (gr |= g), (h = h.next);
      while (h !== r);
    } else h === null && (a.lanes = 0);
    return [i.memoizedState, a.dispatch];
  }
  function Nc(r) {
    var i = Dt(),
      a = i.queue;
    if (a === null) throw Error(n(311));
    a.lastRenderedReducer = r;
    var f = a.dispatch,
      h = a.pending,
      g = i.memoizedState;
    if (h !== null) {
      a.pending = null;
      var k = (h = h.next);
      do (g = r(g, k.action)), (k = k.next);
      while (k !== h);
      Xt(g, i.memoizedState) || (xt = !0),
        (i.memoizedState = g),
        i.baseQueue === null && (i.baseState = g),
        (a.lastRenderedState = g);
    }
    return [g, f];
  }
  function mh() {}
  function gh(r, i) {
    var a = Pe,
      f = Dt(),
      h = i(),
      g = !Xt(f.memoizedState, h);
    if (
      (g && ((f.memoizedState = h), (xt = !0)),
      (f = f.queue),
      Cc(wh.bind(null, a, f, r), [r]),
      f.getSnapshot !== i || g || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        xi(9, vh.bind(null, a, f, h, i), void 0, null),
        Ge === null)
      )
        throw Error(n(349));
      mr & 30 || yh(a, i, h);
    }
    return h;
  }
  function yh(r, i, a) {
    (r.flags |= 16384),
      (r = { getSnapshot: i, value: a }),
      (i = Pe.updateQueue),
      i === null
        ? ((i = { lastEffect: null, stores: null }),
          (Pe.updateQueue = i),
          (i.stores = [r]))
        : ((a = i.stores), a === null ? (i.stores = [r]) : a.push(r));
  }
  function vh(r, i, a, f) {
    (i.value = a), (i.getSnapshot = f), xh(i) && Sh(r);
  }
  function wh(r, i, a) {
    return a(function () {
      xh(i) && Sh(r);
    });
  }
  function xh(r) {
    var i = r.getSnapshot;
    r = r.value;
    try {
      var a = i();
      return !Xt(r, a);
    } catch {
      return !0;
    }
  }
  function Sh(r) {
    var i = wn(r, 1);
    i !== null && en(i, r, 1, -1);
  }
  function _h(r) {
    var i = cn();
    return (
      typeof r == "function" && (r = r()),
      (i.memoizedState = i.baseState = r),
      (r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wi,
        lastRenderedState: r,
      }),
      (i.queue = r),
      (r = r.dispatch = v0.bind(null, Pe, r)),
      [i.memoizedState, r]
    );
  }
  function xi(r, i, a, f) {
    return (
      (r = { tag: r, create: i, destroy: a, deps: f, next: null }),
      (i = Pe.updateQueue),
      i === null
        ? ((i = { lastEffect: null, stores: null }),
          (Pe.updateQueue = i),
          (i.lastEffect = r.next = r))
        : ((a = i.lastEffect),
          a === null
            ? (i.lastEffect = r.next = r)
            : ((f = a.next), (a.next = r), (r.next = f), (i.lastEffect = r))),
      r
    );
  }
  function kh() {
    return Dt().memoizedState;
  }
  function Uo(r, i, a, f) {
    var h = cn();
    (Pe.flags |= r),
      (h.memoizedState = xi(1 | i, a, void 0, f === void 0 ? null : f));
  }
  function Ho(r, i, a, f) {
    var h = Dt();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (We !== null) {
      var k = We.memoizedState;
      if (((g = k.destroy), f !== null && kc(f, k.deps))) {
        h.memoizedState = xi(i, a, g, f);
        return;
      }
    }
    (Pe.flags |= r), (h.memoizedState = xi(1 | i, a, g, f));
  }
  function Eh(r, i) {
    return Uo(8390656, 8, r, i);
  }
  function Cc(r, i) {
    return Ho(2048, 8, r, i);
  }
  function bh(r, i) {
    return Ho(4, 2, r, i);
  }
  function Th(r, i) {
    return Ho(4, 4, r, i);
  }
  function Nh(r, i) {
    if (typeof i == "function")
      return (
        (r = r()),
        i(r),
        function () {
          i(null);
        }
      );
    if (i != null)
      return (
        (r = r()),
        (i.current = r),
        function () {
          i.current = null;
        }
      );
  }
  function Ch(r, i, a) {
    return (
      (a = a != null ? a.concat([r]) : null), Ho(4, 4, Nh.bind(null, i, r), a)
    );
  }
  function Ac() {}
  function Ah(r, i) {
    var a = Dt();
    i = i === void 0 ? null : i;
    var f = a.memoizedState;
    return f !== null && i !== null && kc(i, f[1])
      ? f[0]
      : ((a.memoizedState = [r, i]), r);
  }
  function Lh(r, i) {
    var a = Dt();
    i = i === void 0 ? null : i;
    var f = a.memoizedState;
    return f !== null && i !== null && kc(i, f[1])
      ? f[0]
      : ((r = r()), (a.memoizedState = [r, i]), r);
  }
  function Ih(r, i, a) {
    return mr & 21
      ? (Xt(a, i) ||
          ((a = ld()), (Pe.lanes |= a), (gr |= a), (r.baseState = !0)),
        i)
      : (r.baseState && ((r.baseState = !1), (xt = !0)), (r.memoizedState = a));
  }
  function g0(r, i) {
    var a = ke;
    (ke = a !== 0 && 4 > a ? a : 4), r(!0);
    var f = _c.transition;
    _c.transition = {};
    try {
      r(!1), i();
    } finally {
      (ke = a), (_c.transition = f);
    }
  }
  function jh() {
    return Dt().memoizedState;
  }
  function y0(r, i, a) {
    var f = Qn(r);
    if (
      ((a = {
        lane: f,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Mh(r))
    )
      Oh(i, a);
    else if (((a = uh(r, i, a, f)), a !== null)) {
      var h = ft();
      en(a, r, f, h), $h(a, i, f);
    }
  }
  function v0(r, i, a) {
    var f = Qn(r),
      h = {
        lane: f,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Mh(r)) Oh(i, h);
    else {
      var g = r.alternate;
      if (
        r.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = i.lastRenderedReducer), g !== null)
      )
        try {
          var k = i.lastRenderedState,
            b = g(k, a);
          if (((h.hasEagerState = !0), (h.eagerState = b), Xt(b, k))) {
            var N = i.interleaved;
            N === null
              ? ((h.next = h), gc(i))
              : ((h.next = N.next), (N.next = h)),
              (i.interleaved = h);
            return;
          }
        } catch {
        } finally {
        }
      (a = uh(r, i, h, f)),
        a !== null && ((h = ft()), en(a, r, f, h), $h(a, i, f));
    }
  }
  function Mh(r) {
    var i = r.alternate;
    return r === Pe || (i !== null && i === Pe);
  }
  function Oh(r, i) {
    yi = Bo = !0;
    var a = r.pending;
    a === null ? (i.next = i) : ((i.next = a.next), (a.next = i)),
      (r.pending = i);
  }
  function $h(r, i, a) {
    if (a & 4194240) {
      var f = i.lanes;
      (f &= r.pendingLanes), (a |= f), (i.lanes = a), Ia(r, a);
    }
  }
  var qo = {
      readContext: Rt,
      useCallback: st,
      useContext: st,
      useEffect: st,
      useImperativeHandle: st,
      useInsertionEffect: st,
      useLayoutEffect: st,
      useMemo: st,
      useReducer: st,
      useRef: st,
      useState: st,
      useDebugValue: st,
      useDeferredValue: st,
      useTransition: st,
      useMutableSource: st,
      useSyncExternalStore: st,
      useId: st,
      unstable_isNewReconciler: !1,
    },
    w0 = {
      readContext: Rt,
      useCallback: function (r, i) {
        return (cn().memoizedState = [r, i === void 0 ? null : i]), r;
      },
      useContext: Rt,
      useEffect: Eh,
      useImperativeHandle: function (r, i, a) {
        return (
          (a = a != null ? a.concat([r]) : null),
          Uo(4194308, 4, Nh.bind(null, i, r), a)
        );
      },
      useLayoutEffect: function (r, i) {
        return Uo(4194308, 4, r, i);
      },
      useInsertionEffect: function (r, i) {
        return Uo(4, 2, r, i);
      },
      useMemo: function (r, i) {
        var a = cn();
        return (
          (i = i === void 0 ? null : i),
          (r = r()),
          (a.memoizedState = [r, i]),
          r
        );
      },
      useReducer: function (r, i, a) {
        var f = cn();
        return (
          (i = a !== void 0 ? a(i) : i),
          (f.memoizedState = f.baseState = i),
          (r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: i,
          }),
          (f.queue = r),
          (r = r.dispatch = y0.bind(null, Pe, r)),
          [f.memoizedState, r]
        );
      },
      useRef: function (r) {
        var i = cn();
        return (r = { current: r }), (i.memoizedState = r);
      },
      useState: _h,
      useDebugValue: Ac,
      useDeferredValue: function (r) {
        return (cn().memoizedState = r);
      },
      useTransition: function () {
        var r = _h(!1),
          i = r[0];
        return (r = g0.bind(null, r[1])), (cn().memoizedState = r), [i, r];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (r, i, a) {
        var f = Pe,
          h = cn();
        if (Ie) {
          if (a === void 0) throw Error(n(407));
          a = a();
        } else {
          if (((a = i()), Ge === null)) throw Error(n(349));
          mr & 30 || yh(f, i, a);
        }
        h.memoizedState = a;
        var g = { value: a, getSnapshot: i };
        return (
          (h.queue = g),
          Eh(wh.bind(null, f, g, r), [r]),
          (f.flags |= 2048),
          xi(9, vh.bind(null, f, g, a, i), void 0, null),
          a
        );
      },
      useId: function () {
        var r = cn(),
          i = Ge.identifierPrefix;
        if (Ie) {
          var a = vn,
            f = yn;
          (a = (f & ~(1 << (32 - Qt(f) - 1))).toString(32) + a),
            (i = ":" + i + "R" + a),
            (a = vi++),
            0 < a && (i += "H" + a.toString(32)),
            (i += ":");
        } else (a = m0++), (i = ":" + i + "r" + a.toString(32) + ":");
        return (r.memoizedState = i);
      },
      unstable_isNewReconciler: !1,
    },
    x0 = {
      readContext: Rt,
      useCallback: Ah,
      useContext: Rt,
      useEffect: Cc,
      useImperativeHandle: Ch,
      useInsertionEffect: bh,
      useLayoutEffect: Th,
      useMemo: Lh,
      useReducer: Tc,
      useRef: kh,
      useState: function () {
        return Tc(wi);
      },
      useDebugValue: Ac,
      useDeferredValue: function (r) {
        var i = Dt();
        return Ih(i, We.memoizedState, r);
      },
      useTransition: function () {
        var r = Tc(wi)[0],
          i = Dt().memoizedState;
        return [r, i];
      },
      useMutableSource: mh,
      useSyncExternalStore: gh,
      useId: jh,
      unstable_isNewReconciler: !1,
    },
    S0 = {
      readContext: Rt,
      useCallback: Ah,
      useContext: Rt,
      useEffect: Cc,
      useImperativeHandle: Ch,
      useInsertionEffect: bh,
      useLayoutEffect: Th,
      useMemo: Lh,
      useReducer: Nc,
      useRef: kh,
      useState: function () {
        return Nc(wi);
      },
      useDebugValue: Ac,
      useDeferredValue: function (r) {
        var i = Dt();
        return We === null ? (i.memoizedState = r) : Ih(i, We.memoizedState, r);
      },
      useTransition: function () {
        var r = Nc(wi)[0],
          i = Dt().memoizedState;
        return [r, i];
      },
      useMutableSource: mh,
      useSyncExternalStore: gh,
      useId: jh,
      unstable_isNewReconciler: !1,
    };
  function Jt(r, i) {
    if (r && r.defaultProps) {
      (i = Z({}, i)), (r = r.defaultProps);
      for (var a in r) i[a] === void 0 && (i[a] = r[a]);
      return i;
    }
    return i;
  }
  function Lc(r, i, a, f) {
    (i = r.memoizedState),
      (a = a(f, i)),
      (a = a == null ? i : Z({}, i, a)),
      (r.memoizedState = a),
      r.lanes === 0 && (r.updateQueue.baseState = a);
  }
  var Vo = {
    isMounted: function (r) {
      return (r = r._reactInternals) ? ar(r) === r : !1;
    },
    enqueueSetState: function (r, i, a) {
      r = r._reactInternals;
      var f = ft(),
        h = Qn(r),
        g = xn(f, h);
      (g.payload = i),
        a != null && (g.callback = a),
        (i = qn(r, g, h)),
        i !== null && (en(i, r, h, f), Ro(i, r, h));
    },
    enqueueReplaceState: function (r, i, a) {
      r = r._reactInternals;
      var f = ft(),
        h = Qn(r),
        g = xn(f, h);
      (g.tag = 1),
        (g.payload = i),
        a != null && (g.callback = a),
        (i = qn(r, g, h)),
        i !== null && (en(i, r, h, f), Ro(i, r, h));
    },
    enqueueForceUpdate: function (r, i) {
      r = r._reactInternals;
      var a = ft(),
        f = Qn(r),
        h = xn(a, f);
      (h.tag = 2),
        i != null && (h.callback = i),
        (i = qn(r, h, f)),
        i !== null && (en(i, r, f, a), Ro(i, r, f));
    },
  };
  function Ph(r, i, a, f, h, g, k) {
    return (
      (r = r.stateNode),
      typeof r.shouldComponentUpdate == "function"
        ? r.shouldComponentUpdate(f, g, k)
        : i.prototype && i.prototype.isPureReactComponent
          ? !oi(a, f) || !oi(h, g)
          : !0
    );
  }
  function Rh(r, i, a) {
    var f = !1,
      h = Bn,
      g = i.contextType;
    return (
      typeof g == "object" && g !== null
        ? (g = Rt(g))
        : ((h = wt(i) ? ur : rt.current),
          (f = i.contextTypes),
          (g = (f = f != null) ? Xr(r, h) : Bn)),
      (i = new i(a, g)),
      (r.memoizedState =
        i.state !== null && i.state !== void 0 ? i.state : null),
      (i.updater = Vo),
      (r.stateNode = i),
      (i._reactInternals = r),
      f &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = h),
        (r.__reactInternalMemoizedMaskedChildContext = g)),
      i
    );
  }
  function Dh(r, i, a, f) {
    (r = i.state),
      typeof i.componentWillReceiveProps == "function" &&
        i.componentWillReceiveProps(a, f),
      typeof i.UNSAFE_componentWillReceiveProps == "function" &&
        i.UNSAFE_componentWillReceiveProps(a, f),
      i.state !== r && Vo.enqueueReplaceState(i, i.state, null);
  }
  function Ic(r, i, a, f) {
    var h = r.stateNode;
    (h.props = a), (h.state = r.memoizedState), (h.refs = {}), yc(r);
    var g = i.contextType;
    typeof g == "object" && g !== null
      ? (h.context = Rt(g))
      : ((g = wt(i) ? ur : rt.current), (h.context = Xr(r, g))),
      (h.state = r.memoizedState),
      (g = i.getDerivedStateFromProps),
      typeof g == "function" && (Lc(r, i, g, a), (h.state = r.memoizedState)),
      typeof i.getDerivedStateFromProps == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function" ||
        (typeof h.UNSAFE_componentWillMount != "function" &&
          typeof h.componentWillMount != "function") ||
        ((i = h.state),
        typeof h.componentWillMount == "function" && h.componentWillMount(),
        typeof h.UNSAFE_componentWillMount == "function" &&
          h.UNSAFE_componentWillMount(),
        i !== h.state && Vo.enqueueReplaceState(h, h.state, null),
        Do(r, a, h, f),
        (h.state = r.memoizedState)),
      typeof h.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function rs(r, i) {
    try {
      var a = "",
        f = i;
      do (a += ve(f)), (f = f.return);
      while (f);
      var h = a;
    } catch (g) {
      h =
        `
Error generating stack: ` +
        g.message +
        `
` +
        g.stack;
    }
    return { value: r, source: i, stack: h, digest: null };
  }
  function jc(r, i, a) {
    return { value: r, source: null, stack: a ?? null, digest: i ?? null };
  }
  function Mc(r, i) {
    try {
      console.error(i.value);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  var _0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Fh(r, i, a) {
    (a = xn(-1, a)), (a.tag = 3), (a.payload = { element: null });
    var f = i.value;
    return (
      (a.callback = function () {
        Yo || ((Yo = !0), (Qc = f)), Mc(r, i);
      }),
      a
    );
  }
  function zh(r, i, a) {
    (a = xn(-1, a)), (a.tag = 3);
    var f = r.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = i.value;
      (a.payload = function () {
        return f(h);
      }),
        (a.callback = function () {
          Mc(r, i);
        });
    }
    var g = r.stateNode;
    return (
      g !== null &&
        typeof g.componentDidCatch == "function" &&
        (a.callback = function () {
          Mc(r, i),
            typeof f != "function" &&
              (Wn === null ? (Wn = new Set([this])) : Wn.add(this));
          var k = i.stack;
          this.componentDidCatch(i.value, {
            componentStack: k !== null ? k : "",
          });
        }),
      a
    );
  }
  function Bh(r, i, a) {
    var f = r.pingCache;
    if (f === null) {
      f = r.pingCache = new _0();
      var h = new Set();
      f.set(i, h);
    } else (h = f.get(i)), h === void 0 && ((h = new Set()), f.set(i, h));
    h.has(a) || (h.add(a), (r = P0.bind(null, r, i, a)), i.then(r, r));
  }
  function Uh(r) {
    do {
      var i;
      if (
        ((i = r.tag === 13) &&
          ((i = r.memoizedState),
          (i = i !== null ? i.dehydrated !== null : !0)),
        i)
      )
        return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function Hh(r, i, a, f, h) {
    return r.mode & 1
      ? ((r.flags |= 65536), (r.lanes = h), r)
      : (r === i
          ? (r.flags |= 65536)
          : ((r.flags |= 128),
            (a.flags |= 131072),
            (a.flags &= -52805),
            a.tag === 1 &&
              (a.alternate === null
                ? (a.tag = 17)
                : ((i = xn(-1, 1)), (i.tag = 2), qn(a, i, 1))),
            (a.lanes |= 1)),
        r);
  }
  var k0 = R.ReactCurrentOwner,
    xt = !1;
  function ut(r, i, a, f) {
    i.child = r === null ? ch(i, null, a, f) : Zr(i, r.child, a, f);
  }
  function qh(r, i, a, f, h) {
    a = a.render;
    var g = i.ref;
    return (
      ts(i, h),
      (f = Ec(r, i, a, f, g, h)),
      (a = bc()),
      r !== null && !xt
        ? ((i.updateQueue = r.updateQueue),
          (i.flags &= -2053),
          (r.lanes &= ~h),
          Sn(r, i, h))
        : (Ie && a && lc(i), (i.flags |= 1), ut(r, i, f, h), i.child)
    );
  }
  function Vh(r, i, a, f, h) {
    if (r === null) {
      var g = a.type;
      return typeof g == "function" &&
        !tu(g) &&
        g.defaultProps === void 0 &&
        a.compare === null &&
        a.defaultProps === void 0
        ? ((i.tag = 15), (i.type = g), Wh(r, i, g, f, h))
        : ((r = sl(a.type, null, f, i, i.mode, h)),
          (r.ref = i.ref),
          (r.return = i),
          (i.child = r));
    }
    if (((g = r.child), !(r.lanes & h))) {
      var k = g.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : oi), a(k, f) && r.ref === i.ref)
      )
        return Sn(r, i, h);
    }
    return (
      (i.flags |= 1),
      (r = Gn(g, f)),
      (r.ref = i.ref),
      (r.return = i),
      (i.child = r)
    );
  }
  function Wh(r, i, a, f, h) {
    if (r !== null) {
      var g = r.memoizedProps;
      if (oi(g, f) && r.ref === i.ref)
        if (((xt = !1), (i.pendingProps = f = g), (r.lanes & h) !== 0))
          r.flags & 131072 && (xt = !0);
        else return (i.lanes = r.lanes), Sn(r, i, h);
    }
    return Oc(r, i, a, f, h);
  }
  function Kh(r, i, a) {
    var f = i.pendingProps,
      h = f.children,
      g = r !== null ? r.memoizedState : null;
    if (f.mode === "hidden")
      if (!(i.mode & 1))
        (i.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ne(is, Mt),
          (Mt |= a);
      else {
        if (!(a & 1073741824))
          return (
            (r = g !== null ? g.baseLanes | a : a),
            (i.lanes = i.childLanes = 1073741824),
            (i.memoizedState = {
              baseLanes: r,
              cachePool: null,
              transitions: null,
            }),
            (i.updateQueue = null),
            Ne(is, Mt),
            (Mt |= r),
            null
          );
        (i.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (f = g !== null ? g.baseLanes : a),
          Ne(is, Mt),
          (Mt |= f);
      }
    else
      g !== null ? ((f = g.baseLanes | a), (i.memoizedState = null)) : (f = a),
        Ne(is, Mt),
        (Mt |= f);
    return ut(r, i, h, a), i.child;
  }
  function Qh(r, i) {
    var a = i.ref;
    ((r === null && a !== null) || (r !== null && r.ref !== a)) &&
      ((i.flags |= 512), (i.flags |= 2097152));
  }
  function Oc(r, i, a, f, h) {
    var g = wt(a) ? ur : rt.current;
    return (
      (g = Xr(i, g)),
      ts(i, h),
      (a = Ec(r, i, a, f, g, h)),
      (f = bc()),
      r !== null && !xt
        ? ((i.updateQueue = r.updateQueue),
          (i.flags &= -2053),
          (r.lanes &= ~h),
          Sn(r, i, h))
        : (Ie && f && lc(i), (i.flags |= 1), ut(r, i, a, h), i.child)
    );
  }
  function Xh(r, i, a, f, h) {
    if (wt(a)) {
      var g = !0;
      Ao(i);
    } else g = !1;
    if ((ts(i, h), i.stateNode === null))
      Ko(r, i), Rh(i, a, f), Ic(i, a, f, h), (f = !0);
    else if (r === null) {
      var k = i.stateNode,
        b = i.memoizedProps;
      k.props = b;
      var N = k.context,
        $ = a.contextType;
      typeof $ == "object" && $ !== null
        ? ($ = Rt($))
        : (($ = wt(a) ? ur : rt.current), ($ = Xr(i, $)));
      var V = a.getDerivedStateFromProps,
        K =
          typeof V == "function" ||
          typeof k.getSnapshotBeforeUpdate == "function";
      K ||
        (typeof k.UNSAFE_componentWillReceiveProps != "function" &&
          typeof k.componentWillReceiveProps != "function") ||
        ((b !== f || N !== $) && Dh(i, k, f, $)),
        (Hn = !1);
      var q = i.memoizedState;
      (k.state = q),
        Do(i, f, k, h),
        (N = i.memoizedState),
        b !== f || q !== N || vt.current || Hn
          ? (typeof V == "function" && (Lc(i, a, V, f), (N = i.memoizedState)),
            (b = Hn || Ph(i, a, b, f, q, N, $))
              ? (K ||
                  (typeof k.UNSAFE_componentWillMount != "function" &&
                    typeof k.componentWillMount != "function") ||
                  (typeof k.componentWillMount == "function" &&
                    k.componentWillMount(),
                  typeof k.UNSAFE_componentWillMount == "function" &&
                    k.UNSAFE_componentWillMount()),
                typeof k.componentDidMount == "function" &&
                  (i.flags |= 4194308))
              : (typeof k.componentDidMount == "function" &&
                  (i.flags |= 4194308),
                (i.memoizedProps = f),
                (i.memoizedState = N)),
            (k.props = f),
            (k.state = N),
            (k.context = $),
            (f = b))
          : (typeof k.componentDidMount == "function" && (i.flags |= 4194308),
            (f = !1));
    } else {
      (k = i.stateNode),
        fh(r, i),
        (b = i.memoizedProps),
        ($ = i.type === i.elementType ? b : Jt(i.type, b)),
        (k.props = $),
        (K = i.pendingProps),
        (q = k.context),
        (N = a.contextType),
        typeof N == "object" && N !== null
          ? (N = Rt(N))
          : ((N = wt(a) ? ur : rt.current), (N = Xr(i, N)));
      var Y = a.getDerivedStateFromProps;
      (V =
        typeof Y == "function" ||
        typeof k.getSnapshotBeforeUpdate == "function") ||
        (typeof k.UNSAFE_componentWillReceiveProps != "function" &&
          typeof k.componentWillReceiveProps != "function") ||
        ((b !== K || q !== N) && Dh(i, k, f, N)),
        (Hn = !1),
        (q = i.memoizedState),
        (k.state = q),
        Do(i, f, k, h);
      var te = i.memoizedState;
      b !== K || q !== te || vt.current || Hn
        ? (typeof Y == "function" && (Lc(i, a, Y, f), (te = i.memoizedState)),
          ($ = Hn || Ph(i, a, $, f, q, te, N) || !1)
            ? (V ||
                (typeof k.UNSAFE_componentWillUpdate != "function" &&
                  typeof k.componentWillUpdate != "function") ||
                (typeof k.componentWillUpdate == "function" &&
                  k.componentWillUpdate(f, te, N),
                typeof k.UNSAFE_componentWillUpdate == "function" &&
                  k.UNSAFE_componentWillUpdate(f, te, N)),
              typeof k.componentDidUpdate == "function" && (i.flags |= 4),
              typeof k.getSnapshotBeforeUpdate == "function" &&
                (i.flags |= 1024))
            : (typeof k.componentDidUpdate != "function" ||
                (b === r.memoizedProps && q === r.memoizedState) ||
                (i.flags |= 4),
              typeof k.getSnapshotBeforeUpdate != "function" ||
                (b === r.memoizedProps && q === r.memoizedState) ||
                (i.flags |= 1024),
              (i.memoizedProps = f),
              (i.memoizedState = te)),
          (k.props = f),
          (k.state = te),
          (k.context = N),
          (f = $))
        : (typeof k.componentDidUpdate != "function" ||
            (b === r.memoizedProps && q === r.memoizedState) ||
            (i.flags |= 4),
          typeof k.getSnapshotBeforeUpdate != "function" ||
            (b === r.memoizedProps && q === r.memoizedState) ||
            (i.flags |= 1024),
          (f = !1));
    }
    return $c(r, i, a, f, g, h);
  }
  function $c(r, i, a, f, h, g) {
    Qh(r, i);
    var k = (i.flags & 128) !== 0;
    if (!f && !k) return h && eh(i, a, !1), Sn(r, i, g);
    (f = i.stateNode), (k0.current = i);
    var b =
      k && typeof a.getDerivedStateFromError != "function" ? null : f.render();
    return (
      (i.flags |= 1),
      r !== null && k
        ? ((i.child = Zr(i, r.child, null, g)), (i.child = Zr(i, null, b, g)))
        : ut(r, i, b, g),
      (i.memoizedState = f.state),
      h && eh(i, a, !0),
      i.child
    );
  }
  function Gh(r) {
    var i = r.stateNode;
    i.pendingContext
      ? Yd(r, i.pendingContext, i.pendingContext !== i.context)
      : i.context && Yd(r, i.context, !1),
      vc(r, i.containerInfo);
  }
  function Jh(r, i, a, f, h) {
    return Yr(), fc(h), (i.flags |= 256), ut(r, i, a, f), i.child;
  }
  var Pc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Rc(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function Yh(r, i, a) {
    var f = i.pendingProps,
      h = $e.current,
      g = !1,
      k = (i.flags & 128) !== 0,
      b;
    if (
      ((b = k) ||
        (b = r !== null && r.memoizedState === null ? !1 : (h & 2) !== 0),
      b
        ? ((g = !0), (i.flags &= -129))
        : (r === null || r.memoizedState !== null) && (h |= 1),
      Ne($e, h & 1),
      r === null)
    )
      return (
        uc(i),
        (r = i.memoizedState),
        r !== null && ((r = r.dehydrated), r !== null)
          ? (i.mode & 1
              ? r.data === "$!"
                ? (i.lanes = 8)
                : (i.lanes = 1073741824)
              : (i.lanes = 1),
            null)
          : ((k = f.children),
            (r = f.fallback),
            g
              ? ((f = i.mode),
                (g = i.child),
                (k = { mode: "hidden", children: k }),
                !(f & 1) && g !== null
                  ? ((g.childLanes = 0), (g.pendingProps = k))
                  : (g = il(k, f, 0, null)),
                (r = xr(r, f, a, null)),
                (g.return = i),
                (r.return = i),
                (g.sibling = r),
                (i.child = g),
                (i.child.memoizedState = Rc(a)),
                (i.memoizedState = Pc),
                r)
              : Dc(i, k))
      );
    if (((h = r.memoizedState), h !== null && ((b = h.dehydrated), b !== null)))
      return E0(r, i, k, f, b, h, a);
    if (g) {
      (g = f.fallback), (k = i.mode), (h = r.child), (b = h.sibling);
      var N = { mode: "hidden", children: f.children };
      return (
        !(k & 1) && i.child !== h
          ? ((f = i.child),
            (f.childLanes = 0),
            (f.pendingProps = N),
            (i.deletions = null))
          : ((f = Gn(h, N)), (f.subtreeFlags = h.subtreeFlags & 14680064)),
        b !== null ? (g = Gn(b, g)) : ((g = xr(g, k, a, null)), (g.flags |= 2)),
        (g.return = i),
        (f.return = i),
        (f.sibling = g),
        (i.child = f),
        (f = g),
        (g = i.child),
        (k = r.child.memoizedState),
        (k =
          k === null
            ? Rc(a)
            : {
                baseLanes: k.baseLanes | a,
                cachePool: null,
                transitions: k.transitions,
              }),
        (g.memoizedState = k),
        (g.childLanes = r.childLanes & ~a),
        (i.memoizedState = Pc),
        f
      );
    }
    return (
      (g = r.child),
      (r = g.sibling),
      (f = Gn(g, { mode: "visible", children: f.children })),
      !(i.mode & 1) && (f.lanes = a),
      (f.return = i),
      (f.sibling = null),
      r !== null &&
        ((a = i.deletions),
        a === null ? ((i.deletions = [r]), (i.flags |= 16)) : a.push(r)),
      (i.child = f),
      (i.memoizedState = null),
      f
    );
  }
  function Dc(r, i) {
    return (
      (i = il({ mode: "visible", children: i }, r.mode, 0, null)),
      (i.return = r),
      (r.child = i)
    );
  }
  function Wo(r, i, a, f) {
    return (
      f !== null && fc(f),
      Zr(i, r.child, null, a),
      (r = Dc(i, i.pendingProps.children)),
      (r.flags |= 2),
      (i.memoizedState = null),
      r
    );
  }
  function E0(r, i, a, f, h, g, k) {
    if (a)
      return i.flags & 256
        ? ((i.flags &= -257), (f = jc(Error(n(422)))), Wo(r, i, k, f))
        : i.memoizedState !== null
          ? ((i.child = r.child), (i.flags |= 128), null)
          : ((g = f.fallback),
            (h = i.mode),
            (f = il({ mode: "visible", children: f.children }, h, 0, null)),
            (g = xr(g, h, k, null)),
            (g.flags |= 2),
            (f.return = i),
            (g.return = i),
            (f.sibling = g),
            (i.child = f),
            i.mode & 1 && Zr(i, r.child, null, k),
            (i.child.memoizedState = Rc(k)),
            (i.memoizedState = Pc),
            g);
    if (!(i.mode & 1)) return Wo(r, i, k, null);
    if (h.data === "$!") {
      if (((f = h.nextSibling && h.nextSibling.dataset), f)) var b = f.dgst;
      return (
        (f = b), (g = Error(n(419))), (f = jc(g, f, void 0)), Wo(r, i, k, f)
      );
    }
    if (((b = (k & r.childLanes) !== 0), xt || b)) {
      if (((f = Ge), f !== null)) {
        switch (k & -k) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        (h = h & (f.suspendedLanes | k) ? 0 : h),
          h !== 0 &&
            h !== g.retryLane &&
            ((g.retryLane = h), wn(r, h), en(f, r, h, -1));
      }
      return eu(), (f = jc(Error(n(421)))), Wo(r, i, k, f);
    }
    return h.data === "$?"
      ? ((i.flags |= 128),
        (i.child = r.child),
        (i = R0.bind(null, r)),
        (h._reactRetry = i),
        null)
      : ((r = g.treeContext),
        (jt = Fn(h.nextSibling)),
        (It = i),
        (Ie = !0),
        (Gt = null),
        r !== null &&
          (($t[Pt++] = yn),
          ($t[Pt++] = vn),
          ($t[Pt++] = fr),
          (yn = r.id),
          (vn = r.overflow),
          (fr = i)),
        (i = Dc(i, f.children)),
        (i.flags |= 4096),
        i);
  }
  function Zh(r, i, a) {
    r.lanes |= i;
    var f = r.alternate;
    f !== null && (f.lanes |= i), mc(r.return, i, a);
  }
  function Fc(r, i, a, f, h) {
    var g = r.memoizedState;
    g === null
      ? (r.memoizedState = {
          isBackwards: i,
          rendering: null,
          renderingStartTime: 0,
          last: f,
          tail: a,
          tailMode: h,
        })
      : ((g.isBackwards = i),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = f),
        (g.tail = a),
        (g.tailMode = h));
  }
  function ep(r, i, a) {
    var f = i.pendingProps,
      h = f.revealOrder,
      g = f.tail;
    if ((ut(r, i, f.children, a), (f = $e.current), f & 2))
      (f = (f & 1) | 2), (i.flags |= 128);
    else {
      if (r !== null && r.flags & 128)
        e: for (r = i.child; r !== null; ) {
          if (r.tag === 13) r.memoizedState !== null && Zh(r, a, i);
          else if (r.tag === 19) Zh(r, a, i);
          else if (r.child !== null) {
            (r.child.return = r), (r = r.child);
            continue;
          }
          if (r === i) break e;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === i) break e;
            r = r.return;
          }
          (r.sibling.return = r.return), (r = r.sibling);
        }
      f &= 1;
    }
    if ((Ne($e, f), !(i.mode & 1))) i.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (a = i.child, h = null; a !== null; )
            (r = a.alternate),
              r !== null && Fo(r) === null && (h = a),
              (a = a.sibling);
          (a = h),
            a === null
              ? ((h = i.child), (i.child = null))
              : ((h = a.sibling), (a.sibling = null)),
            Fc(i, !1, h, a, g);
          break;
        case "backwards":
          for (a = null, h = i.child, i.child = null; h !== null; ) {
            if (((r = h.alternate), r !== null && Fo(r) === null)) {
              i.child = h;
              break;
            }
            (r = h.sibling), (h.sibling = a), (a = h), (h = r);
          }
          Fc(i, !0, a, null, g);
          break;
        case "together":
          Fc(i, !1, null, null, void 0);
          break;
        default:
          i.memoizedState = null;
      }
    return i.child;
  }
  function Ko(r, i) {
    !(i.mode & 1) &&
      r !== null &&
      ((r.alternate = null), (i.alternate = null), (i.flags |= 2));
  }
  function Sn(r, i, a) {
    if (
      (r !== null && (i.dependencies = r.dependencies),
      (gr |= i.lanes),
      !(a & i.childLanes))
    )
      return null;
    if (r !== null && i.child !== r.child) throw Error(n(153));
    if (i.child !== null) {
      for (
        r = i.child, a = Gn(r, r.pendingProps), i.child = a, a.return = i;
        r.sibling !== null;

      )
        (r = r.sibling),
          (a = a.sibling = Gn(r, r.pendingProps)),
          (a.return = i);
      a.sibling = null;
    }
    return i.child;
  }
  function b0(r, i, a) {
    switch (i.tag) {
      case 3:
        Gh(i), Yr();
        break;
      case 5:
        ph(i);
        break;
      case 1:
        wt(i.type) && Ao(i);
        break;
      case 4:
        vc(i, i.stateNode.containerInfo);
        break;
      case 10:
        var f = i.type._context,
          h = i.memoizedProps.value;
        Ne($o, f._currentValue), (f._currentValue = h);
        break;
      case 13:
        if (((f = i.memoizedState), f !== null))
          return f.dehydrated !== null
            ? (Ne($e, $e.current & 1), (i.flags |= 128), null)
            : a & i.child.childLanes
              ? Yh(r, i, a)
              : (Ne($e, $e.current & 1),
                (r = Sn(r, i, a)),
                r !== null ? r.sibling : null);
        Ne($e, $e.current & 1);
        break;
      case 19:
        if (((f = (a & i.childLanes) !== 0), r.flags & 128)) {
          if (f) return ep(r, i, a);
          i.flags |= 128;
        }
        if (
          ((h = i.memoizedState),
          h !== null &&
            ((h.rendering = null), (h.tail = null), (h.lastEffect = null)),
          Ne($e, $e.current),
          f)
        )
          break;
        return null;
      case 22:
      case 23:
        return (i.lanes = 0), Kh(r, i, a);
    }
    return Sn(r, i, a);
  }
  var tp, zc, np, rp;
  (tp = function (r, i) {
    for (var a = i.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) r.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === i) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === i) return;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
  }),
    (zc = function () {}),
    (np = function (r, i, a, f) {
      var h = r.memoizedProps;
      if (h !== f) {
        (r = i.stateNode), pr(an.current);
        var g = null;
        switch (a) {
          case "input":
            (h = sn(r, h)), (f = sn(r, f)), (g = []);
            break;
          case "select":
            (h = Z({}, h, { value: void 0 })),
              (f = Z({}, f, { value: void 0 })),
              (g = []);
            break;
          case "textarea":
            (h = Us(r, h)), (f = Us(r, f)), (g = []);
            break;
          default:
            typeof h.onClick != "function" &&
              typeof f.onClick == "function" &&
              (r.onclick = To);
        }
        xa(a, f);
        var k;
        a = null;
        for ($ in h)
          if (!f.hasOwnProperty($) && h.hasOwnProperty($) && h[$] != null)
            if ($ === "style") {
              var b = h[$];
              for (k in b) b.hasOwnProperty(k) && (a || (a = {}), (a[k] = ""));
            } else
              $ !== "dangerouslySetInnerHTML" &&
                $ !== "children" &&
                $ !== "suppressContentEditableWarning" &&
                $ !== "suppressHydrationWarning" &&
                $ !== "autoFocus" &&
                (o.hasOwnProperty($)
                  ? g || (g = [])
                  : (g = g || []).push($, null));
        for ($ in f) {
          var N = f[$];
          if (
            ((b = h != null ? h[$] : void 0),
            f.hasOwnProperty($) && N !== b && (N != null || b != null))
          )
            if ($ === "style")
              if (b) {
                for (k in b)
                  !b.hasOwnProperty(k) ||
                    (N && N.hasOwnProperty(k)) ||
                    (a || (a = {}), (a[k] = ""));
                for (k in N)
                  N.hasOwnProperty(k) &&
                    b[k] !== N[k] &&
                    (a || (a = {}), (a[k] = N[k]));
              } else a || (g || (g = []), g.push($, a)), (a = N);
            else
              $ === "dangerouslySetInnerHTML"
                ? ((N = N ? N.__html : void 0),
                  (b = b ? b.__html : void 0),
                  N != null && b !== N && (g = g || []).push($, N))
                : $ === "children"
                  ? (typeof N != "string" && typeof N != "number") ||
                    (g = g || []).push($, "" + N)
                  : $ !== "suppressContentEditableWarning" &&
                    $ !== "suppressHydrationWarning" &&
                    (o.hasOwnProperty($)
                      ? (N != null && $ === "onScroll" && Ae("scroll", r),
                        g || b === N || (g = []))
                      : (g = g || []).push($, N));
        }
        a && (g = g || []).push("style", a);
        var $ = g;
        (i.updateQueue = $) && (i.flags |= 4);
      }
    }),
    (rp = function (r, i, a, f) {
      a !== f && (i.flags |= 4);
    });
  function Si(r, i) {
    if (!Ie)
      switch (r.tailMode) {
        case "hidden":
          i = r.tail;
          for (var a = null; i !== null; )
            i.alternate !== null && (a = i), (i = i.sibling);
          a === null ? (r.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = r.tail;
          for (var f = null; a !== null; )
            a.alternate !== null && (f = a), (a = a.sibling);
          f === null
            ? i || r.tail === null
              ? (r.tail = null)
              : (r.tail.sibling = null)
            : (f.sibling = null);
      }
  }
  function it(r) {
    var i = r.alternate !== null && r.alternate.child === r.child,
      a = 0,
      f = 0;
    if (i)
      for (var h = r.child; h !== null; )
        (a |= h.lanes | h.childLanes),
          (f |= h.subtreeFlags & 14680064),
          (f |= h.flags & 14680064),
          (h.return = r),
          (h = h.sibling);
    else
      for (h = r.child; h !== null; )
        (a |= h.lanes | h.childLanes),
          (f |= h.subtreeFlags),
          (f |= h.flags),
          (h.return = r),
          (h = h.sibling);
    return (r.subtreeFlags |= f), (r.childLanes = a), i;
  }
  function T0(r, i, a) {
    var f = i.pendingProps;
    switch ((ac(i), i.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(i), null;
      case 1:
        return wt(i.type) && Co(), it(i), null;
      case 3:
        return (
          (f = i.stateNode),
          ns(),
          Le(vt),
          Le(rt),
          Sc(),
          f.pendingContext &&
            ((f.context = f.pendingContext), (f.pendingContext = null)),
          (r === null || r.child === null) &&
            (Mo(i)
              ? (i.flags |= 4)
              : r === null ||
                (r.memoizedState.isDehydrated && !(i.flags & 256)) ||
                ((i.flags |= 1024), Gt !== null && (Jc(Gt), (Gt = null)))),
          zc(r, i),
          it(i),
          null
        );
      case 5:
        wc(i);
        var h = pr(gi.current);
        if (((a = i.type), r !== null && i.stateNode != null))
          np(r, i, a, f, h),
            r.ref !== i.ref && ((i.flags |= 512), (i.flags |= 2097152));
        else {
          if (!f) {
            if (i.stateNode === null) throw Error(n(166));
            return it(i), null;
          }
          if (((r = pr(an.current)), Mo(i))) {
            (f = i.stateNode), (a = i.type);
            var g = i.memoizedProps;
            switch (((f[ln] = i), (f[fi] = g), (r = (i.mode & 1) !== 0), a)) {
              case "dialog":
                Ae("cancel", f), Ae("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ae("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < ai.length; h++) Ae(ai[h], f);
                break;
              case "source":
                Ae("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Ae("error", f), Ae("load", f);
                break;
              case "details":
                Ae("toggle", f);
                break;
              case "input":
                eo(f, g), Ae("invalid", f);
                break;
              case "select":
                (f._wrapperState = { wasMultiple: !!g.multiple }),
                  Ae("invalid", f);
                break;
              case "textarea":
                ro(f, g), Ae("invalid", f);
            }
            xa(a, g), (h = null);
            for (var k in g)
              if (g.hasOwnProperty(k)) {
                var b = g[k];
                k === "children"
                  ? typeof b == "string"
                    ? f.textContent !== b &&
                      (g.suppressHydrationWarning !== !0 &&
                        bo(f.textContent, b, r),
                      (h = ["children", b]))
                    : typeof b == "number" &&
                      f.textContent !== "" + b &&
                      (g.suppressHydrationWarning !== !0 &&
                        bo(f.textContent, b, r),
                      (h = ["children", "" + b]))
                  : o.hasOwnProperty(k) &&
                    b != null &&
                    k === "onScroll" &&
                    Ae("scroll", f);
              }
            switch (a) {
              case "input":
                Ln(f), no(f, g, !0);
                break;
              case "textarea":
                Ln(f), Pr(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (f.onclick = To);
            }
            (f = h), (i.updateQueue = f), f !== null && (i.flags |= 4);
          } else {
            (k = h.nodeType === 9 ? h : h.ownerDocument),
              r === "http://www.w3.org/1999/xhtml" && (r = lr(a)),
              r === "http://www.w3.org/1999/xhtml"
                ? a === "script"
                  ? ((r = k.createElement("div")),
                    (r.innerHTML = "<script><\/script>"),
                    (r = r.removeChild(r.firstChild)))
                  : typeof f.is == "string"
                    ? (r = k.createElement(a, { is: f.is }))
                    : ((r = k.createElement(a)),
                      a === "select" &&
                        ((k = r),
                        f.multiple
                          ? (k.multiple = !0)
                          : f.size && (k.size = f.size)))
                : (r = k.createElementNS(r, a)),
              (r[ln] = i),
              (r[fi] = f),
              tp(r, i, !1, !1),
              (i.stateNode = r);
            e: {
              switch (((k = Sa(a, f)), a)) {
                case "dialog":
                  Ae("cancel", r), Ae("close", r), (h = f);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ae("load", r), (h = f);
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < ai.length; h++) Ae(ai[h], r);
                  h = f;
                  break;
                case "source":
                  Ae("error", r), (h = f);
                  break;
                case "img":
                case "image":
                case "link":
                  Ae("error", r), Ae("load", r), (h = f);
                  break;
                case "details":
                  Ae("toggle", r), (h = f);
                  break;
                case "input":
                  eo(r, f), (h = sn(r, f)), Ae("invalid", r);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!f.multiple }),
                    (h = Z({}, f, { value: void 0 })),
                    Ae("invalid", r);
                  break;
                case "textarea":
                  ro(r, f), (h = Us(r, f)), Ae("invalid", r);
                  break;
                default:
                  h = f;
              }
              xa(a, h), (b = h);
              for (g in b)
                if (b.hasOwnProperty(g)) {
                  var N = b[g];
                  g === "style"
                    ? Wf(r, N)
                    : g === "dangerouslySetInnerHTML"
                      ? ((N = N ? N.__html : void 0), N != null && qs(r, N))
                      : g === "children"
                        ? typeof N == "string"
                          ? (a !== "textarea" || N !== "") && le(r, N)
                          : typeof N == "number" && le(r, "" + N)
                        : g !== "suppressContentEditableWarning" &&
                          g !== "suppressHydrationWarning" &&
                          g !== "autoFocus" &&
                          (o.hasOwnProperty(g)
                            ? N != null && g === "onScroll" && Ae("scroll", r)
                            : N != null && O(r, g, N, k));
                }
              switch (a) {
                case "input":
                  Ln(r), no(r, f, !1);
                  break;
                case "textarea":
                  Ln(r), Pr(r);
                  break;
                case "option":
                  f.value != null && r.setAttribute("value", "" + Se(f.value));
                  break;
                case "select":
                  (r.multiple = !!f.multiple),
                    (g = f.value),
                    g != null
                      ? In(r, !!f.multiple, g, !1)
                      : f.defaultValue != null &&
                        In(r, !!f.multiple, f.defaultValue, !0);
                  break;
                default:
                  typeof h.onClick == "function" && (r.onclick = To);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (i.flags |= 4);
          }
          i.ref !== null && ((i.flags |= 512), (i.flags |= 2097152));
        }
        return it(i), null;
      case 6:
        if (r && i.stateNode != null) rp(r, i, r.memoizedProps, f);
        else {
          if (typeof f != "string" && i.stateNode === null) throw Error(n(166));
          if (((a = pr(gi.current)), pr(an.current), Mo(i))) {
            if (
              ((f = i.stateNode),
              (a = i.memoizedProps),
              (f[ln] = i),
              (g = f.nodeValue !== a) && ((r = It), r !== null))
            )
              switch (r.tag) {
                case 3:
                  bo(f.nodeValue, a, (r.mode & 1) !== 0);
                  break;
                case 5:
                  r.memoizedProps.suppressHydrationWarning !== !0 &&
                    bo(f.nodeValue, a, (r.mode & 1) !== 0);
              }
            g && (i.flags |= 4);
          } else
            (f = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(f)),
              (f[ln] = i),
              (i.stateNode = f);
        }
        return it(i), null;
      case 13:
        if (
          (Le($e),
          (f = i.memoizedState),
          r === null ||
            (r.memoizedState !== null && r.memoizedState.dehydrated !== null))
        ) {
          if (Ie && jt !== null && i.mode & 1 && !(i.flags & 128))
            oh(), Yr(), (i.flags |= 98560), (g = !1);
          else if (((g = Mo(i)), f !== null && f.dehydrated !== null)) {
            if (r === null) {
              if (!g) throw Error(n(318));
              if (
                ((g = i.memoizedState),
                (g = g !== null ? g.dehydrated : null),
                !g)
              )
                throw Error(n(317));
              g[ln] = i;
            } else
              Yr(),
                !(i.flags & 128) && (i.memoizedState = null),
                (i.flags |= 4);
            it(i), (g = !1);
          } else Gt !== null && (Jc(Gt), (Gt = null)), (g = !0);
          if (!g) return i.flags & 65536 ? i : null;
        }
        return i.flags & 128
          ? ((i.lanes = a), i)
          : ((f = f !== null),
            f !== (r !== null && r.memoizedState !== null) &&
              f &&
              ((i.child.flags |= 8192),
              i.mode & 1 &&
                (r === null || $e.current & 1 ? Ke === 0 && (Ke = 3) : eu())),
            i.updateQueue !== null && (i.flags |= 4),
            it(i),
            null);
      case 4:
        return (
          ns(),
          zc(r, i),
          r === null && ci(i.stateNode.containerInfo),
          it(i),
          null
        );
      case 10:
        return pc(i.type._context), it(i), null;
      case 17:
        return wt(i.type) && Co(), it(i), null;
      case 19:
        if ((Le($e), (g = i.memoizedState), g === null)) return it(i), null;
        if (((f = (i.flags & 128) !== 0), (k = g.rendering), k === null))
          if (f) Si(g, !1);
          else {
            if (Ke !== 0 || (r !== null && r.flags & 128))
              for (r = i.child; r !== null; ) {
                if (((k = Fo(r)), k !== null)) {
                  for (
                    i.flags |= 128,
                      Si(g, !1),
                      f = k.updateQueue,
                      f !== null && ((i.updateQueue = f), (i.flags |= 4)),
                      i.subtreeFlags = 0,
                      f = a,
                      a = i.child;
                    a !== null;

                  )
                    (g = a),
                      (r = f),
                      (g.flags &= 14680066),
                      (k = g.alternate),
                      k === null
                        ? ((g.childLanes = 0),
                          (g.lanes = r),
                          (g.child = null),
                          (g.subtreeFlags = 0),
                          (g.memoizedProps = null),
                          (g.memoizedState = null),
                          (g.updateQueue = null),
                          (g.dependencies = null),
                          (g.stateNode = null))
                        : ((g.childLanes = k.childLanes),
                          (g.lanes = k.lanes),
                          (g.child = k.child),
                          (g.subtreeFlags = 0),
                          (g.deletions = null),
                          (g.memoizedProps = k.memoizedProps),
                          (g.memoizedState = k.memoizedState),
                          (g.updateQueue = k.updateQueue),
                          (g.type = k.type),
                          (r = k.dependencies),
                          (g.dependencies =
                            r === null
                              ? null
                              : {
                                  lanes: r.lanes,
                                  firstContext: r.firstContext,
                                })),
                      (a = a.sibling);
                  return Ne($e, ($e.current & 1) | 2), i.child;
                }
                r = r.sibling;
              }
            g.tail !== null &&
              Be() > os &&
              ((i.flags |= 128), (f = !0), Si(g, !1), (i.lanes = 4194304));
          }
        else {
          if (!f)
            if (((r = Fo(k)), r !== null)) {
              if (
                ((i.flags |= 128),
                (f = !0),
                (a = r.updateQueue),
                a !== null && ((i.updateQueue = a), (i.flags |= 4)),
                Si(g, !0),
                g.tail === null &&
                  g.tailMode === "hidden" &&
                  !k.alternate &&
                  !Ie)
              )
                return it(i), null;
            } else
              2 * Be() - g.renderingStartTime > os &&
                a !== 1073741824 &&
                ((i.flags |= 128), (f = !0), Si(g, !1), (i.lanes = 4194304));
          g.isBackwards
            ? ((k.sibling = i.child), (i.child = k))
            : ((a = g.last),
              a !== null ? (a.sibling = k) : (i.child = k),
              (g.last = k));
        }
        return g.tail !== null
          ? ((i = g.tail),
            (g.rendering = i),
            (g.tail = i.sibling),
            (g.renderingStartTime = Be()),
            (i.sibling = null),
            (a = $e.current),
            Ne($e, f ? (a & 1) | 2 : a & 1),
            i)
          : (it(i), null);
      case 22:
      case 23:
        return (
          Zc(),
          (f = i.memoizedState !== null),
          r !== null && (r.memoizedState !== null) !== f && (i.flags |= 8192),
          f && i.mode & 1
            ? Mt & 1073741824 &&
              (it(i), i.subtreeFlags & 6 && (i.flags |= 8192))
            : it(i),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, i.tag));
  }
  function N0(r, i) {
    switch ((ac(i), i.tag)) {
      case 1:
        return (
          wt(i.type) && Co(),
          (r = i.flags),
          r & 65536 ? ((i.flags = (r & -65537) | 128), i) : null
        );
      case 3:
        return (
          ns(),
          Le(vt),
          Le(rt),
          Sc(),
          (r = i.flags),
          r & 65536 && !(r & 128) ? ((i.flags = (r & -65537) | 128), i) : null
        );
      case 5:
        return wc(i), null;
      case 13:
        if (
          (Le($e), (r = i.memoizedState), r !== null && r.dehydrated !== null)
        ) {
          if (i.alternate === null) throw Error(n(340));
          Yr();
        }
        return (
          (r = i.flags), r & 65536 ? ((i.flags = (r & -65537) | 128), i) : null
        );
      case 19:
        return Le($e), null;
      case 4:
        return ns(), null;
      case 10:
        return pc(i.type._context), null;
      case 22:
      case 23:
        return Zc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Qo = !1,
    ot = !1,
    C0 = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function ss(r, i) {
    var a = r.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (f) {
          Fe(r, i, f);
        }
      else a.current = null;
  }
  function Bc(r, i, a) {
    try {
      a();
    } catch (f) {
      Fe(r, i, f);
    }
  }
  var sp = !1;
  function A0(r, i) {
    if (((Za = po), (r = Pd()), Va(r))) {
      if ("selectionStart" in r)
        var a = { start: r.selectionStart, end: r.selectionEnd };
      else
        e: {
          a = ((a = r.ownerDocument) && a.defaultView) || window;
          var f = a.getSelection && a.getSelection();
          if (f && f.rangeCount !== 0) {
            a = f.anchorNode;
            var h = f.anchorOffset,
              g = f.focusNode;
            f = f.focusOffset;
            try {
              a.nodeType, g.nodeType;
            } catch {
              a = null;
              break e;
            }
            var k = 0,
              b = -1,
              N = -1,
              $ = 0,
              V = 0,
              K = r,
              q = null;
            t: for (;;) {
              for (
                var Y;
                K !== a || (h !== 0 && K.nodeType !== 3) || (b = k + h),
                  K !== g || (f !== 0 && K.nodeType !== 3) || (N = k + f),
                  K.nodeType === 3 && (k += K.nodeValue.length),
                  (Y = K.firstChild) !== null;

              )
                (q = K), (K = Y);
              for (;;) {
                if (K === r) break t;
                if (
                  (q === a && ++$ === h && (b = k),
                  q === g && ++V === f && (N = k),
                  (Y = K.nextSibling) !== null)
                )
                  break;
                (K = q), (q = K.parentNode);
              }
              K = Y;
            }
            a = b === -1 || N === -1 ? null : { start: b, end: N };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      ec = { focusedElem: r, selectionRange: a }, po = !1, ee = i;
      ee !== null;

    )
      if (
        ((i = ee), (r = i.child), (i.subtreeFlags & 1028) !== 0 && r !== null)
      )
        (r.return = i), (ee = r);
      else
        for (; ee !== null; ) {
          i = ee;
          try {
            var te = i.alternate;
            if (i.flags & 1024)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (te !== null) {
                    var ne = te.memoizedProps,
                      Ue = te.memoizedState,
                      I = i.stateNode,
                      A = I.getSnapshotBeforeUpdate(
                        i.elementType === i.type ? ne : Jt(i.type, ne),
                        Ue,
                      );
                    I.__reactInternalSnapshotBeforeUpdate = A;
                  }
                  break;
                case 3:
                  var M = i.stateNode.containerInfo;
                  M.nodeType === 1
                    ? (M.textContent = "")
                    : M.nodeType === 9 &&
                      M.documentElement &&
                      M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(n(163));
              }
          } catch (X) {
            Fe(i, i.return, X);
          }
          if (((r = i.sibling), r !== null)) {
            (r.return = i.return), (ee = r);
            break;
          }
          ee = i.return;
        }
    return (te = sp), (sp = !1), te;
  }
  function _i(r, i, a) {
    var f = i.updateQueue;
    if (((f = f !== null ? f.lastEffect : null), f !== null)) {
      var h = (f = f.next);
      do {
        if ((h.tag & r) === r) {
          var g = h.destroy;
          (h.destroy = void 0), g !== void 0 && Bc(i, a, g);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function Xo(r, i) {
    if (
      ((i = i.updateQueue), (i = i !== null ? i.lastEffect : null), i !== null)
    ) {
      var a = (i = i.next);
      do {
        if ((a.tag & r) === r) {
          var f = a.create;
          a.destroy = f();
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function Uc(r) {
    var i = r.ref;
    if (i !== null) {
      var a = r.stateNode;
      switch (r.tag) {
        case 5:
          r = a;
          break;
        default:
          r = a;
      }
      typeof i == "function" ? i(r) : (i.current = r);
    }
  }
  function ip(r) {
    var i = r.alternate;
    i !== null && ((r.alternate = null), ip(i)),
      (r.child = null),
      (r.deletions = null),
      (r.sibling = null),
      r.tag === 5 &&
        ((i = r.stateNode),
        i !== null &&
          (delete i[ln],
          delete i[fi],
          delete i[sc],
          delete i[f0],
          delete i[d0])),
      (r.stateNode = null),
      (r.return = null),
      (r.dependencies = null),
      (r.memoizedProps = null),
      (r.memoizedState = null),
      (r.pendingProps = null),
      (r.stateNode = null),
      (r.updateQueue = null);
  }
  function op(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function lp(r) {
    e: for (;;) {
      for (; r.sibling === null; ) {
        if (r.return === null || op(r.return)) return null;
        r = r.return;
      }
      for (
        r.sibling.return = r.return, r = r.sibling;
        r.tag !== 5 && r.tag !== 6 && r.tag !== 18;

      ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        (r.child.return = r), (r = r.child);
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function Hc(r, i, a) {
    var f = r.tag;
    if (f === 5 || f === 6)
      (r = r.stateNode),
        i
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(r, i)
            : a.insertBefore(r, i)
          : (a.nodeType === 8
              ? ((i = a.parentNode), i.insertBefore(r, a))
              : ((i = a), i.appendChild(r)),
            (a = a._reactRootContainer),
            a != null || i.onclick !== null || (i.onclick = To));
    else if (f !== 4 && ((r = r.child), r !== null))
      for (Hc(r, i, a), r = r.sibling; r !== null; )
        Hc(r, i, a), (r = r.sibling);
  }
  function qc(r, i, a) {
    var f = r.tag;
    if (f === 5 || f === 6)
      (r = r.stateNode), i ? a.insertBefore(r, i) : a.appendChild(r);
    else if (f !== 4 && ((r = r.child), r !== null))
      for (qc(r, i, a), r = r.sibling; r !== null; )
        qc(r, i, a), (r = r.sibling);
  }
  var Ze = null,
    Yt = !1;
  function Vn(r, i, a) {
    for (a = a.child; a !== null; ) ap(r, i, a), (a = a.sibling);
  }
  function ap(r, i, a) {
    if (on && typeof on.onCommitFiberUnmount == "function")
      try {
        on.onCommitFiberUnmount(lo, a);
      } catch {}
    switch (a.tag) {
      case 5:
        ot || ss(a, i);
      case 6:
        var f = Ze,
          h = Yt;
        (Ze = null),
          Vn(r, i, a),
          (Ze = f),
          (Yt = h),
          Ze !== null &&
            (Yt
              ? ((r = Ze),
                (a = a.stateNode),
                r.nodeType === 8
                  ? r.parentNode.removeChild(a)
                  : r.removeChild(a))
              : Ze.removeChild(a.stateNode));
        break;
      case 18:
        Ze !== null &&
          (Yt
            ? ((r = Ze),
              (a = a.stateNode),
              r.nodeType === 8
                ? rc(r.parentNode, a)
                : r.nodeType === 1 && rc(r, a),
              ei(r))
            : rc(Ze, a.stateNode));
        break;
      case 4:
        (f = Ze),
          (h = Yt),
          (Ze = a.stateNode.containerInfo),
          (Yt = !0),
          Vn(r, i, a),
          (Ze = f),
          (Yt = h);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ot &&
          ((f = a.updateQueue), f !== null && ((f = f.lastEffect), f !== null))
        ) {
          h = f = f.next;
          do {
            var g = h,
              k = g.destroy;
            (g = g.tag),
              k !== void 0 && (g & 2 || g & 4) && Bc(a, i, k),
              (h = h.next);
          } while (h !== f);
        }
        Vn(r, i, a);
        break;
      case 1:
        if (
          !ot &&
          (ss(a, i),
          (f = a.stateNode),
          typeof f.componentWillUnmount == "function")
        )
          try {
            (f.props = a.memoizedProps),
              (f.state = a.memoizedState),
              f.componentWillUnmount();
          } catch (b) {
            Fe(a, i, b);
          }
        Vn(r, i, a);
        break;
      case 21:
        Vn(r, i, a);
        break;
      case 22:
        a.mode & 1
          ? ((ot = (f = ot) || a.memoizedState !== null), Vn(r, i, a), (ot = f))
          : Vn(r, i, a);
        break;
      default:
        Vn(r, i, a);
    }
  }
  function cp(r) {
    var i = r.updateQueue;
    if (i !== null) {
      r.updateQueue = null;
      var a = r.stateNode;
      a === null && (a = r.stateNode = new C0()),
        i.forEach(function (f) {
          var h = D0.bind(null, r, f);
          a.has(f) || (a.add(f), f.then(h, h));
        });
    }
  }
  function Zt(r, i) {
    var a = i.deletions;
    if (a !== null)
      for (var f = 0; f < a.length; f++) {
        var h = a[f];
        try {
          var g = r,
            k = i,
            b = k;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case 5:
                (Ze = b.stateNode), (Yt = !1);
                break e;
              case 3:
                (Ze = b.stateNode.containerInfo), (Yt = !0);
                break e;
              case 4:
                (Ze = b.stateNode.containerInfo), (Yt = !0);
                break e;
            }
            b = b.return;
          }
          if (Ze === null) throw Error(n(160));
          ap(g, k, h), (Ze = null), (Yt = !1);
          var N = h.alternate;
          N !== null && (N.return = null), (h.return = null);
        } catch ($) {
          Fe(h, i, $);
        }
      }
    if (i.subtreeFlags & 12854)
      for (i = i.child; i !== null; ) up(i, r), (i = i.sibling);
  }
  function up(r, i) {
    var a = r.alternate,
      f = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Zt(i, r), un(r), f & 4)) {
          try {
            _i(3, r, r.return), Xo(3, r);
          } catch (ne) {
            Fe(r, r.return, ne);
          }
          try {
            _i(5, r, r.return);
          } catch (ne) {
            Fe(r, r.return, ne);
          }
        }
        break;
      case 1:
        Zt(i, r), un(r), f & 512 && a !== null && ss(a, a.return);
        break;
      case 5:
        if (
          (Zt(i, r),
          un(r),
          f & 512 && a !== null && ss(a, a.return),
          r.flags & 32)
        ) {
          var h = r.stateNode;
          try {
            le(h, "");
          } catch (ne) {
            Fe(r, r.return, ne);
          }
        }
        if (f & 4 && ((h = r.stateNode), h != null)) {
          var g = r.memoizedProps,
            k = a !== null ? a.memoizedProps : g,
            b = r.type,
            N = r.updateQueue;
          if (((r.updateQueue = null), N !== null))
            try {
              b === "input" && g.type === "radio" && g.name != null && to(h, g),
                Sa(b, k);
              var $ = Sa(b, g);
              for (k = 0; k < N.length; k += 2) {
                var V = N[k],
                  K = N[k + 1];
                V === "style"
                  ? Wf(h, K)
                  : V === "dangerouslySetInnerHTML"
                    ? qs(h, K)
                    : V === "children"
                      ? le(h, K)
                      : O(h, V, K, $);
              }
              switch (b) {
                case "input":
                  Bs(h, g);
                  break;
                case "textarea":
                  jn(h, g);
                  break;
                case "select":
                  var q = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!g.multiple;
                  var Y = g.value;
                  Y != null
                    ? In(h, !!g.multiple, Y, !1)
                    : q !== !!g.multiple &&
                      (g.defaultValue != null
                        ? In(h, !!g.multiple, g.defaultValue, !0)
                        : In(h, !!g.multiple, g.multiple ? [] : "", !1));
              }
              h[fi] = g;
            } catch (ne) {
              Fe(r, r.return, ne);
            }
        }
        break;
      case 6:
        if ((Zt(i, r), un(r), f & 4)) {
          if (r.stateNode === null) throw Error(n(162));
          (h = r.stateNode), (g = r.memoizedProps);
          try {
            h.nodeValue = g;
          } catch (ne) {
            Fe(r, r.return, ne);
          }
        }
        break;
      case 3:
        if (
          (Zt(i, r), un(r), f & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ei(i.containerInfo);
          } catch (ne) {
            Fe(r, r.return, ne);
          }
        break;
      case 4:
        Zt(i, r), un(r);
        break;
      case 13:
        Zt(i, r),
          un(r),
          (h = r.child),
          h.flags & 8192 &&
            ((g = h.memoizedState !== null),
            (h.stateNode.isHidden = g),
            !g ||
              (h.alternate !== null && h.alternate.memoizedState !== null) ||
              (Kc = Be())),
          f & 4 && cp(r);
        break;
      case 22:
        if (
          ((V = a !== null && a.memoizedState !== null),
          r.mode & 1 ? ((ot = ($ = ot) || V), Zt(i, r), (ot = $)) : Zt(i, r),
          un(r),
          f & 8192)
        ) {
          if (
            (($ = r.memoizedState !== null),
            (r.stateNode.isHidden = $) && !V && r.mode & 1)
          )
            for (ee = r, V = r.child; V !== null; ) {
              for (K = ee = V; ee !== null; ) {
                switch (((q = ee), (Y = q.child), q.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _i(4, q, q.return);
                    break;
                  case 1:
                    ss(q, q.return);
                    var te = q.stateNode;
                    if (typeof te.componentWillUnmount == "function") {
                      (f = q), (a = q.return);
                      try {
                        (i = f),
                          (te.props = i.memoizedProps),
                          (te.state = i.memoizedState),
                          te.componentWillUnmount();
                      } catch (ne) {
                        Fe(f, a, ne);
                      }
                    }
                    break;
                  case 5:
                    ss(q, q.return);
                    break;
                  case 22:
                    if (q.memoizedState !== null) {
                      hp(K);
                      continue;
                    }
                }
                Y !== null ? ((Y.return = q), (ee = Y)) : hp(K);
              }
              V = V.sibling;
            }
          e: for (V = null, K = r; ; ) {
            if (K.tag === 5) {
              if (V === null) {
                V = K;
                try {
                  (h = K.stateNode),
                    $
                      ? ((g = h.style),
                        typeof g.setProperty == "function"
                          ? g.setProperty("display", "none", "important")
                          : (g.display = "none"))
                      : ((b = K.stateNode),
                        (N = K.memoizedProps.style),
                        (k =
                          N != null && N.hasOwnProperty("display")
                            ? N.display
                            : null),
                        (b.style.display = Vf("display", k)));
                } catch (ne) {
                  Fe(r, r.return, ne);
                }
              }
            } else if (K.tag === 6) {
              if (V === null)
                try {
                  K.stateNode.nodeValue = $ ? "" : K.memoizedProps;
                } catch (ne) {
                  Fe(r, r.return, ne);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) ||
                K.memoizedState === null ||
                K === r) &&
              K.child !== null
            ) {
              (K.child.return = K), (K = K.child);
              continue;
            }
            if (K === r) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === r) break e;
              V === K && (V = null), (K = K.return);
            }
            V === K && (V = null),
              (K.sibling.return = K.return),
              (K = K.sibling);
          }
        }
        break;
      case 19:
        Zt(i, r), un(r), f & 4 && cp(r);
        break;
      case 21:
        break;
      default:
        Zt(i, r), un(r);
    }
  }
  function un(r) {
    var i = r.flags;
    if (i & 2) {
      try {
        e: {
          for (var a = r.return; a !== null; ) {
            if (op(a)) {
              var f = a;
              break e;
            }
            a = a.return;
          }
          throw Error(n(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (le(h, ""), (f.flags &= -33));
            var g = lp(r);
            qc(r, g, h);
            break;
          case 3:
          case 4:
            var k = f.stateNode.containerInfo,
              b = lp(r);
            Hc(r, b, k);
            break;
          default:
            throw Error(n(161));
        }
      } catch (N) {
        Fe(r, r.return, N);
      }
      r.flags &= -3;
    }
    i & 4096 && (r.flags &= -4097);
  }
  function L0(r, i, a) {
    (ee = r), fp(r);
  }
  function fp(r, i, a) {
    for (var f = (r.mode & 1) !== 0; ee !== null; ) {
      var h = ee,
        g = h.child;
      if (h.tag === 22 && f) {
        var k = h.memoizedState !== null || Qo;
        if (!k) {
          var b = h.alternate,
            N = (b !== null && b.memoizedState !== null) || ot;
          b = Qo;
          var $ = ot;
          if (((Qo = k), (ot = N) && !$))
            for (ee = h; ee !== null; )
              (k = ee),
                (N = k.child),
                k.tag === 22 && k.memoizedState !== null
                  ? pp(h)
                  : N !== null
                    ? ((N.return = k), (ee = N))
                    : pp(h);
          for (; g !== null; ) (ee = g), fp(g), (g = g.sibling);
          (ee = h), (Qo = b), (ot = $);
        }
        dp(r);
      } else
        h.subtreeFlags & 8772 && g !== null
          ? ((g.return = h), (ee = g))
          : dp(r);
    }
  }
  function dp(r) {
    for (; ee !== null; ) {
      var i = ee;
      if (i.flags & 8772) {
        var a = i.alternate;
        try {
          if (i.flags & 8772)
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ot || Xo(5, i);
                break;
              case 1:
                var f = i.stateNode;
                if (i.flags & 4 && !ot)
                  if (a === null) f.componentDidMount();
                  else {
                    var h =
                      i.elementType === i.type
                        ? a.memoizedProps
                        : Jt(i.type, a.memoizedProps);
                    f.componentDidUpdate(
                      h,
                      a.memoizedState,
                      f.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var g = i.updateQueue;
                g !== null && hh(i, g, f);
                break;
              case 3:
                var k = i.updateQueue;
                if (k !== null) {
                  if (((a = null), i.child !== null))
                    switch (i.child.tag) {
                      case 5:
                        a = i.child.stateNode;
                        break;
                      case 1:
                        a = i.child.stateNode;
                    }
                  hh(i, k, a);
                }
                break;
              case 5:
                var b = i.stateNode;
                if (a === null && i.flags & 4) {
                  a = b;
                  var N = i.memoizedProps;
                  switch (i.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && a.focus();
                      break;
                    case "img":
                      N.src && (a.src = N.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (i.memoizedState === null) {
                  var $ = i.alternate;
                  if ($ !== null) {
                    var V = $.memoizedState;
                    if (V !== null) {
                      var K = V.dehydrated;
                      K !== null && ei(K);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(n(163));
            }
          ot || (i.flags & 512 && Uc(i));
        } catch (q) {
          Fe(i, i.return, q);
        }
      }
      if (i === r) {
        ee = null;
        break;
      }
      if (((a = i.sibling), a !== null)) {
        (a.return = i.return), (ee = a);
        break;
      }
      ee = i.return;
    }
  }
  function hp(r) {
    for (; ee !== null; ) {
      var i = ee;
      if (i === r) {
        ee = null;
        break;
      }
      var a = i.sibling;
      if (a !== null) {
        (a.return = i.return), (ee = a);
        break;
      }
      ee = i.return;
    }
  }
  function pp(r) {
    for (; ee !== null; ) {
      var i = ee;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var a = i.return;
            try {
              Xo(4, i);
            } catch (N) {
              Fe(i, a, N);
            }
            break;
          case 1:
            var f = i.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = i.return;
              try {
                f.componentDidMount();
              } catch (N) {
                Fe(i, h, N);
              }
            }
            var g = i.return;
            try {
              Uc(i);
            } catch (N) {
              Fe(i, g, N);
            }
            break;
          case 5:
            var k = i.return;
            try {
              Uc(i);
            } catch (N) {
              Fe(i, k, N);
            }
        }
      } catch (N) {
        Fe(i, i.return, N);
      }
      if (i === r) {
        ee = null;
        break;
      }
      var b = i.sibling;
      if (b !== null) {
        (b.return = i.return), (ee = b);
        break;
      }
      ee = i.return;
    }
  }
  var I0 = Math.ceil,
    Go = R.ReactCurrentDispatcher,
    Vc = R.ReactCurrentOwner,
    Ft = R.ReactCurrentBatchConfig,
    we = 0,
    Ge = null,
    qe = null,
    et = 0,
    Mt = 0,
    is = zn(0),
    Ke = 0,
    ki = null,
    gr = 0,
    Jo = 0,
    Wc = 0,
    Ei = null,
    St = null,
    Kc = 0,
    os = 1 / 0,
    _n = null,
    Yo = !1,
    Qc = null,
    Wn = null,
    Zo = !1,
    Kn = null,
    el = 0,
    bi = 0,
    Xc = null,
    tl = -1,
    nl = 0;
  function ft() {
    return we & 6 ? Be() : tl !== -1 ? tl : (tl = Be());
  }
  function Qn(r) {
    return r.mode & 1
      ? we & 2 && et !== 0
        ? et & -et
        : p0.transition !== null
          ? (nl === 0 && (nl = ld()), nl)
          : ((r = ke),
            r !== 0 ||
              ((r = window.event), (r = r === void 0 ? 16 : gd(r.type))),
            r)
      : 1;
  }
  function en(r, i, a, f) {
    if (50 < bi) throw ((bi = 0), (Xc = null), Error(n(185)));
    Xs(r, a, f),
      (!(we & 2) || r !== Ge) &&
        (r === Ge && (!(we & 2) && (Jo |= a), Ke === 4 && Xn(r, et)),
        _t(r, f),
        a === 1 &&
          we === 0 &&
          !(i.mode & 1) &&
          ((os = Be() + 500), Lo && Un()));
  }
  function _t(r, i) {
    var a = r.callbackNode;
    pw(r, i);
    var f = uo(r, r === Ge ? et : 0);
    if (f === 0)
      a !== null && sd(a), (r.callbackNode = null), (r.callbackPriority = 0);
    else if (((i = f & -f), r.callbackPriority !== i)) {
      if ((a != null && sd(a), i === 1))
        r.tag === 0 ? h0(gp.bind(null, r)) : th(gp.bind(null, r)),
          c0(function () {
            !(we & 6) && Un();
          }),
          (a = null);
      else {
        switch (ad(f)) {
          case 1:
            a = Ca;
            break;
          case 4:
            a = id;
            break;
          case 16:
            a = oo;
            break;
          case 536870912:
            a = od;
            break;
          default:
            a = oo;
        }
        a = Ep(a, mp.bind(null, r));
      }
      (r.callbackPriority = i), (r.callbackNode = a);
    }
  }
  function mp(r, i) {
    if (((tl = -1), (nl = 0), we & 6)) throw Error(n(327));
    var a = r.callbackNode;
    if (ls() && r.callbackNode !== a) return null;
    var f = uo(r, r === Ge ? et : 0);
    if (f === 0) return null;
    if (f & 30 || f & r.expiredLanes || i) i = rl(r, f);
    else {
      i = f;
      var h = we;
      we |= 2;
      var g = vp();
      (Ge !== r || et !== i) && ((_n = null), (os = Be() + 500), vr(r, i));
      do
        try {
          O0();
          break;
        } catch (b) {
          yp(r, b);
        }
      while (!0);
      hc(),
        (Go.current = g),
        (we = h),
        qe !== null ? (i = 0) : ((Ge = null), (et = 0), (i = Ke));
    }
    if (i !== 0) {
      if (
        (i === 2 && ((h = Aa(r)), h !== 0 && ((f = h), (i = Gc(r, h)))),
        i === 1)
      )
        throw ((a = ki), vr(r, 0), Xn(r, f), _t(r, Be()), a);
      if (i === 6) Xn(r, f);
      else {
        if (
          ((h = r.current.alternate),
          !(f & 30) &&
            !j0(h) &&
            ((i = rl(r, f)),
            i === 2 && ((g = Aa(r)), g !== 0 && ((f = g), (i = Gc(r, g)))),
            i === 1))
        )
          throw ((a = ki), vr(r, 0), Xn(r, f), _t(r, Be()), a);
        switch (((r.finishedWork = h), (r.finishedLanes = f), i)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            wr(r, St, _n);
            break;
          case 3:
            if (
              (Xn(r, f),
              (f & 130023424) === f && ((i = Kc + 500 - Be()), 10 < i))
            ) {
              if (uo(r, 0) !== 0) break;
              if (((h = r.suspendedLanes), (h & f) !== f)) {
                ft(), (r.pingedLanes |= r.suspendedLanes & h);
                break;
              }
              r.timeoutHandle = nc(wr.bind(null, r, St, _n), i);
              break;
            }
            wr(r, St, _n);
            break;
          case 4:
            if ((Xn(r, f), (f & 4194240) === f)) break;
            for (i = r.eventTimes, h = -1; 0 < f; ) {
              var k = 31 - Qt(f);
              (g = 1 << k), (k = i[k]), k > h && (h = k), (f &= ~g);
            }
            if (
              ((f = h),
              (f = Be() - f),
              (f =
                (120 > f
                  ? 120
                  : 480 > f
                    ? 480
                    : 1080 > f
                      ? 1080
                      : 1920 > f
                        ? 1920
                        : 3e3 > f
                          ? 3e3
                          : 4320 > f
                            ? 4320
                            : 1960 * I0(f / 1960)) - f),
              10 < f)
            ) {
              r.timeoutHandle = nc(wr.bind(null, r, St, _n), f);
              break;
            }
            wr(r, St, _n);
            break;
          case 5:
            wr(r, St, _n);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return _t(r, Be()), r.callbackNode === a ? mp.bind(null, r) : null;
  }
  function Gc(r, i) {
    var a = Ei;
    return (
      r.current.memoizedState.isDehydrated && (vr(r, i).flags |= 256),
      (r = rl(r, i)),
      r !== 2 && ((i = St), (St = a), i !== null && Jc(i)),
      r
    );
  }
  function Jc(r) {
    St === null ? (St = r) : St.push.apply(St, r);
  }
  function j0(r) {
    for (var i = r; ; ) {
      if (i.flags & 16384) {
        var a = i.updateQueue;
        if (a !== null && ((a = a.stores), a !== null))
          for (var f = 0; f < a.length; f++) {
            var h = a[f],
              g = h.getSnapshot;
            h = h.value;
            try {
              if (!Xt(g(), h)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((a = i.child), i.subtreeFlags & 16384 && a !== null))
        (a.return = i), (i = a);
      else {
        if (i === r) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === r) return !0;
          i = i.return;
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    return !0;
  }
  function Xn(r, i) {
    for (
      i &= ~Wc,
        i &= ~Jo,
        r.suspendedLanes |= i,
        r.pingedLanes &= ~i,
        r = r.expirationTimes;
      0 < i;

    ) {
      var a = 31 - Qt(i),
        f = 1 << a;
      (r[a] = -1), (i &= ~f);
    }
  }
  function gp(r) {
    if (we & 6) throw Error(n(327));
    ls();
    var i = uo(r, 0);
    if (!(i & 1)) return _t(r, Be()), null;
    var a = rl(r, i);
    if (r.tag !== 0 && a === 2) {
      var f = Aa(r);
      f !== 0 && ((i = f), (a = Gc(r, f)));
    }
    if (a === 1) throw ((a = ki), vr(r, 0), Xn(r, i), _t(r, Be()), a);
    if (a === 6) throw Error(n(345));
    return (
      (r.finishedWork = r.current.alternate),
      (r.finishedLanes = i),
      wr(r, St, _n),
      _t(r, Be()),
      null
    );
  }
  function Yc(r, i) {
    var a = we;
    we |= 1;
    try {
      return r(i);
    } finally {
      (we = a), we === 0 && ((os = Be() + 500), Lo && Un());
    }
  }
  function yr(r) {
    Kn !== null && Kn.tag === 0 && !(we & 6) && ls();
    var i = we;
    we |= 1;
    var a = Ft.transition,
      f = ke;
    try {
      if (((Ft.transition = null), (ke = 1), r)) return r();
    } finally {
      (ke = f), (Ft.transition = a), (we = i), !(we & 6) && Un();
    }
  }
  function Zc() {
    (Mt = is.current), Le(is);
  }
  function vr(r, i) {
    (r.finishedWork = null), (r.finishedLanes = 0);
    var a = r.timeoutHandle;
    if ((a !== -1 && ((r.timeoutHandle = -1), a0(a)), qe !== null))
      for (a = qe.return; a !== null; ) {
        var f = a;
        switch ((ac(f), f.tag)) {
          case 1:
            (f = f.type.childContextTypes), f != null && Co();
            break;
          case 3:
            ns(), Le(vt), Le(rt), Sc();
            break;
          case 5:
            wc(f);
            break;
          case 4:
            ns();
            break;
          case 13:
            Le($e);
            break;
          case 19:
            Le($e);
            break;
          case 10:
            pc(f.type._context);
            break;
          case 22:
          case 23:
            Zc();
        }
        a = a.return;
      }
    if (
      ((Ge = r),
      (qe = r = Gn(r.current, null)),
      (et = Mt = i),
      (Ke = 0),
      (ki = null),
      (Wc = Jo = gr = 0),
      (St = Ei = null),
      hr !== null)
    ) {
      for (i = 0; i < hr.length; i++)
        if (((a = hr[i]), (f = a.interleaved), f !== null)) {
          a.interleaved = null;
          var h = f.next,
            g = a.pending;
          if (g !== null) {
            var k = g.next;
            (g.next = h), (f.next = k);
          }
          a.pending = f;
        }
      hr = null;
    }
    return r;
  }
  function yp(r, i) {
    do {
      var a = qe;
      try {
        if ((hc(), (zo.current = qo), Bo)) {
          for (var f = Pe.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), (f = f.next);
          }
          Bo = !1;
        }
        if (
          ((mr = 0),
          (Xe = We = Pe = null),
          (yi = !1),
          (vi = 0),
          (Vc.current = null),
          a === null || a.return === null)
        ) {
          (Ke = 1), (ki = i), (qe = null);
          break;
        }
        e: {
          var g = r,
            k = a.return,
            b = a,
            N = i;
          if (
            ((i = et),
            (b.flags |= 32768),
            N !== null && typeof N == "object" && typeof N.then == "function")
          ) {
            var $ = N,
              V = b,
              K = V.tag;
            if (!(V.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var q = V.alternate;
              q
                ? ((V.updateQueue = q.updateQueue),
                  (V.memoizedState = q.memoizedState),
                  (V.lanes = q.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var Y = Uh(k);
            if (Y !== null) {
              (Y.flags &= -257),
                Hh(Y, k, b, g, i),
                Y.mode & 1 && Bh(g, $, i),
                (i = Y),
                (N = $);
              var te = i.updateQueue;
              if (te === null) {
                var ne = new Set();
                ne.add(N), (i.updateQueue = ne);
              } else te.add(N);
              break e;
            } else {
              if (!(i & 1)) {
                Bh(g, $, i), eu();
                break e;
              }
              N = Error(n(426));
            }
          } else if (Ie && b.mode & 1) {
            var Ue = Uh(k);
            if (Ue !== null) {
              !(Ue.flags & 65536) && (Ue.flags |= 256),
                Hh(Ue, k, b, g, i),
                fc(rs(N, b));
              break e;
            }
          }
          (g = N = rs(N, b)),
            Ke !== 4 && (Ke = 2),
            Ei === null ? (Ei = [g]) : Ei.push(g),
            (g = k);
          do {
            switch (g.tag) {
              case 3:
                (g.flags |= 65536), (i &= -i), (g.lanes |= i);
                var I = Fh(g, N, i);
                dh(g, I);
                break e;
              case 1:
                b = N;
                var A = g.type,
                  M = g.stateNode;
                if (
                  !(g.flags & 128) &&
                  (typeof A.getDerivedStateFromError == "function" ||
                    (M !== null &&
                      typeof M.componentDidCatch == "function" &&
                      (Wn === null || !Wn.has(M))))
                ) {
                  (g.flags |= 65536), (i &= -i), (g.lanes |= i);
                  var X = zh(g, b, i);
                  dh(g, X);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        xp(a);
      } catch (re) {
        (i = re), qe === a && a !== null && (qe = a = a.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vp() {
    var r = Go.current;
    return (Go.current = qo), r === null ? qo : r;
  }
  function eu() {
    (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
      Ge === null || (!(gr & 268435455) && !(Jo & 268435455)) || Xn(Ge, et);
  }
  function rl(r, i) {
    var a = we;
    we |= 2;
    var f = vp();
    (Ge !== r || et !== i) && ((_n = null), vr(r, i));
    do
      try {
        M0();
        break;
      } catch (h) {
        yp(r, h);
      }
    while (!0);
    if ((hc(), (we = a), (Go.current = f), qe !== null)) throw Error(n(261));
    return (Ge = null), (et = 0), Ke;
  }
  function M0() {
    for (; qe !== null; ) wp(qe);
  }
  function O0() {
    for (; qe !== null && !iw(); ) wp(qe);
  }
  function wp(r) {
    var i = kp(r.alternate, r, Mt);
    (r.memoizedProps = r.pendingProps),
      i === null ? xp(r) : (qe = i),
      (Vc.current = null);
  }
  function xp(r) {
    var i = r;
    do {
      var a = i.alternate;
      if (((r = i.return), i.flags & 32768)) {
        if (((a = N0(a, i)), a !== null)) {
          (a.flags &= 32767), (qe = a);
          return;
        }
        if (r !== null)
          (r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null);
        else {
          (Ke = 6), (qe = null);
          return;
        }
      } else if (((a = T0(a, i, Mt)), a !== null)) {
        qe = a;
        return;
      }
      if (((i = i.sibling), i !== null)) {
        qe = i;
        return;
      }
      qe = i = r;
    } while (i !== null);
    Ke === 0 && (Ke = 5);
  }
  function wr(r, i, a) {
    var f = ke,
      h = Ft.transition;
    try {
      (Ft.transition = null), (ke = 1), $0(r, i, a, f);
    } finally {
      (Ft.transition = h), (ke = f);
    }
    return null;
  }
  function $0(r, i, a, f) {
    do ls();
    while (Kn !== null);
    if (we & 6) throw Error(n(327));
    a = r.finishedWork;
    var h = r.finishedLanes;
    if (a === null) return null;
    if (((r.finishedWork = null), (r.finishedLanes = 0), a === r.current))
      throw Error(n(177));
    (r.callbackNode = null), (r.callbackPriority = 0);
    var g = a.lanes | a.childLanes;
    if (
      (mw(r, g),
      r === Ge && ((qe = Ge = null), (et = 0)),
      (!(a.subtreeFlags & 2064) && !(a.flags & 2064)) ||
        Zo ||
        ((Zo = !0),
        Ep(oo, function () {
          return ls(), null;
        })),
      (g = (a.flags & 15990) !== 0),
      a.subtreeFlags & 15990 || g)
    ) {
      (g = Ft.transition), (Ft.transition = null);
      var k = ke;
      ke = 1;
      var b = we;
      (we |= 4),
        (Vc.current = null),
        A0(r, a),
        up(a, r),
        t0(ec),
        (po = !!Za),
        (ec = Za = null),
        (r.current = a),
        L0(a),
        ow(),
        (we = b),
        (ke = k),
        (Ft.transition = g);
    } else r.current = a;
    if (
      (Zo && ((Zo = !1), (Kn = r), (el = h)),
      (g = r.pendingLanes),
      g === 0 && (Wn = null),
      cw(a.stateNode),
      _t(r, Be()),
      i !== null)
    )
      for (f = r.onRecoverableError, a = 0; a < i.length; a++)
        (h = i[a]), f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Yo) throw ((Yo = !1), (r = Qc), (Qc = null), r);
    return (
      el & 1 && r.tag !== 0 && ls(),
      (g = r.pendingLanes),
      g & 1 ? (r === Xc ? bi++ : ((bi = 0), (Xc = r))) : (bi = 0),
      Un(),
      null
    );
  }
  function ls() {
    if (Kn !== null) {
      var r = ad(el),
        i = Ft.transition,
        a = ke;
      try {
        if (((Ft.transition = null), (ke = 16 > r ? 16 : r), Kn === null))
          var f = !1;
        else {
          if (((r = Kn), (Kn = null), (el = 0), we & 6)) throw Error(n(331));
          var h = we;
          for (we |= 4, ee = r.current; ee !== null; ) {
            var g = ee,
              k = g.child;
            if (ee.flags & 16) {
              var b = g.deletions;
              if (b !== null) {
                for (var N = 0; N < b.length; N++) {
                  var $ = b[N];
                  for (ee = $; ee !== null; ) {
                    var V = ee;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _i(8, V, g);
                    }
                    var K = V.child;
                    if (K !== null) (K.return = V), (ee = K);
                    else
                      for (; ee !== null; ) {
                        V = ee;
                        var q = V.sibling,
                          Y = V.return;
                        if ((ip(V), V === $)) {
                          ee = null;
                          break;
                        }
                        if (q !== null) {
                          (q.return = Y), (ee = q);
                          break;
                        }
                        ee = Y;
                      }
                  }
                }
                var te = g.alternate;
                if (te !== null) {
                  var ne = te.child;
                  if (ne !== null) {
                    te.child = null;
                    do {
                      var Ue = ne.sibling;
                      (ne.sibling = null), (ne = Ue);
                    } while (ne !== null);
                  }
                }
                ee = g;
              }
            }
            if (g.subtreeFlags & 2064 && k !== null) (k.return = g), (ee = k);
            else
              e: for (; ee !== null; ) {
                if (((g = ee), g.flags & 2048))
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _i(9, g, g.return);
                  }
                var I = g.sibling;
                if (I !== null) {
                  (I.return = g.return), (ee = I);
                  break e;
                }
                ee = g.return;
              }
          }
          var A = r.current;
          for (ee = A; ee !== null; ) {
            k = ee;
            var M = k.child;
            if (k.subtreeFlags & 2064 && M !== null) (M.return = k), (ee = M);
            else
              e: for (k = A; ee !== null; ) {
                if (((b = ee), b.flags & 2048))
                  try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xo(9, b);
                    }
                  } catch (re) {
                    Fe(b, b.return, re);
                  }
                if (b === k) {
                  ee = null;
                  break e;
                }
                var X = b.sibling;
                if (X !== null) {
                  (X.return = b.return), (ee = X);
                  break e;
                }
                ee = b.return;
              }
          }
          if (
            ((we = h),
            Un(),
            on && typeof on.onPostCommitFiberRoot == "function")
          )
            try {
              on.onPostCommitFiberRoot(lo, r);
            } catch {}
          f = !0;
        }
        return f;
      } finally {
        (ke = a), (Ft.transition = i);
      }
    }
    return !1;
  }
  function Sp(r, i, a) {
    (i = rs(a, i)),
      (i = Fh(r, i, 1)),
      (r = qn(r, i, 1)),
      (i = ft()),
      r !== null && (Xs(r, 1, i), _t(r, i));
  }
  function Fe(r, i, a) {
    if (r.tag === 3) Sp(r, r, a);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          Sp(i, r, a);
          break;
        } else if (i.tag === 1) {
          var f = i.stateNode;
          if (
            typeof i.type.getDerivedStateFromError == "function" ||
            (typeof f.componentDidCatch == "function" &&
              (Wn === null || !Wn.has(f)))
          ) {
            (r = rs(a, r)),
              (r = zh(i, r, 1)),
              (i = qn(i, r, 1)),
              (r = ft()),
              i !== null && (Xs(i, 1, r), _t(i, r));
            break;
          }
        }
        i = i.return;
      }
  }
  function P0(r, i, a) {
    var f = r.pingCache;
    f !== null && f.delete(i),
      (i = ft()),
      (r.pingedLanes |= r.suspendedLanes & a),
      Ge === r &&
        (et & a) === a &&
        (Ke === 4 || (Ke === 3 && (et & 130023424) === et && 500 > Be() - Kc)
          ? vr(r, 0)
          : (Wc |= a)),
      _t(r, i);
  }
  function _p(r, i) {
    i === 0 &&
      (r.mode & 1
        ? ((i = co), (co <<= 1), !(co & 130023424) && (co = 4194304))
        : (i = 1));
    var a = ft();
    (r = wn(r, i)), r !== null && (Xs(r, i, a), _t(r, a));
  }
  function R0(r) {
    var i = r.memoizedState,
      a = 0;
    i !== null && (a = i.retryLane), _p(r, a);
  }
  function D0(r, i) {
    var a = 0;
    switch (r.tag) {
      case 13:
        var f = r.stateNode,
          h = r.memoizedState;
        h !== null && (a = h.retryLane);
        break;
      case 19:
        f = r.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    f !== null && f.delete(i), _p(r, a);
  }
  var kp;
  kp = function (r, i, a) {
    if (r !== null)
      if (r.memoizedProps !== i.pendingProps || vt.current) xt = !0;
      else {
        if (!(r.lanes & a) && !(i.flags & 128)) return (xt = !1), b0(r, i, a);
        xt = !!(r.flags & 131072);
      }
    else (xt = !1), Ie && i.flags & 1048576 && nh(i, jo, i.index);
    switch (((i.lanes = 0), i.tag)) {
      case 2:
        var f = i.type;
        Ko(r, i), (r = i.pendingProps);
        var h = Xr(i, rt.current);
        ts(i, a), (h = Ec(null, i, f, r, h, a));
        var g = bc();
        return (
          (i.flags |= 1),
          typeof h == "object" &&
          h !== null &&
          typeof h.render == "function" &&
          h.$$typeof === void 0
            ? ((i.tag = 1),
              (i.memoizedState = null),
              (i.updateQueue = null),
              wt(f) ? ((g = !0), Ao(i)) : (g = !1),
              (i.memoizedState =
                h.state !== null && h.state !== void 0 ? h.state : null),
              yc(i),
              (h.updater = Vo),
              (i.stateNode = h),
              (h._reactInternals = i),
              Ic(i, f, r, a),
              (i = $c(null, i, f, !0, g, a)))
            : ((i.tag = 0), Ie && g && lc(i), ut(null, i, h, a), (i = i.child)),
          i
        );
      case 16:
        f = i.elementType;
        e: {
          switch (
            (Ko(r, i),
            (r = i.pendingProps),
            (h = f._init),
            (f = h(f._payload)),
            (i.type = f),
            (h = i.tag = z0(f)),
            (r = Jt(f, r)),
            h)
          ) {
            case 0:
              i = Oc(null, i, f, r, a);
              break e;
            case 1:
              i = Xh(null, i, f, r, a);
              break e;
            case 11:
              i = qh(null, i, f, r, a);
              break e;
            case 14:
              i = Vh(null, i, f, Jt(f.type, r), a);
              break e;
          }
          throw Error(n(306, f, ""));
        }
        return i;
      case 0:
        return (
          (f = i.type),
          (h = i.pendingProps),
          (h = i.elementType === f ? h : Jt(f, h)),
          Oc(r, i, f, h, a)
        );
      case 1:
        return (
          (f = i.type),
          (h = i.pendingProps),
          (h = i.elementType === f ? h : Jt(f, h)),
          Xh(r, i, f, h, a)
        );
      case 3:
        e: {
          if ((Gh(i), r === null)) throw Error(n(387));
          (f = i.pendingProps),
            (g = i.memoizedState),
            (h = g.element),
            fh(r, i),
            Do(i, f, null, a);
          var k = i.memoizedState;
          if (((f = k.element), g.isDehydrated))
            if (
              ((g = {
                element: f,
                isDehydrated: !1,
                cache: k.cache,
                pendingSuspenseBoundaries: k.pendingSuspenseBoundaries,
                transitions: k.transitions,
              }),
              (i.updateQueue.baseState = g),
              (i.memoizedState = g),
              i.flags & 256)
            ) {
              (h = rs(Error(n(423)), i)), (i = Jh(r, i, f, a, h));
              break e;
            } else if (f !== h) {
              (h = rs(Error(n(424)), i)), (i = Jh(r, i, f, a, h));
              break e;
            } else
              for (
                jt = Fn(i.stateNode.containerInfo.firstChild),
                  It = i,
                  Ie = !0,
                  Gt = null,
                  a = ch(i, null, f, a),
                  i.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((Yr(), f === h)) {
              i = Sn(r, i, a);
              break e;
            }
            ut(r, i, f, a);
          }
          i = i.child;
        }
        return i;
      case 5:
        return (
          ph(i),
          r === null && uc(i),
          (f = i.type),
          (h = i.pendingProps),
          (g = r !== null ? r.memoizedProps : null),
          (k = h.children),
          tc(f, h) ? (k = null) : g !== null && tc(f, g) && (i.flags |= 32),
          Qh(r, i),
          ut(r, i, k, a),
          i.child
        );
      case 6:
        return r === null && uc(i), null;
      case 13:
        return Yh(r, i, a);
      case 4:
        return (
          vc(i, i.stateNode.containerInfo),
          (f = i.pendingProps),
          r === null ? (i.child = Zr(i, null, f, a)) : ut(r, i, f, a),
          i.child
        );
      case 11:
        return (
          (f = i.type),
          (h = i.pendingProps),
          (h = i.elementType === f ? h : Jt(f, h)),
          qh(r, i, f, h, a)
        );
      case 7:
        return ut(r, i, i.pendingProps, a), i.child;
      case 8:
        return ut(r, i, i.pendingProps.children, a), i.child;
      case 12:
        return ut(r, i, i.pendingProps.children, a), i.child;
      case 10:
        e: {
          if (
            ((f = i.type._context),
            (h = i.pendingProps),
            (g = i.memoizedProps),
            (k = h.value),
            Ne($o, f._currentValue),
            (f._currentValue = k),
            g !== null)
          )
            if (Xt(g.value, k)) {
              if (g.children === h.children && !vt.current) {
                i = Sn(r, i, a);
                break e;
              }
            } else
              for (g = i.child, g !== null && (g.return = i); g !== null; ) {
                var b = g.dependencies;
                if (b !== null) {
                  k = g.child;
                  for (var N = b.firstContext; N !== null; ) {
                    if (N.context === f) {
                      if (g.tag === 1) {
                        (N = xn(-1, a & -a)), (N.tag = 2);
                        var $ = g.updateQueue;
                        if ($ !== null) {
                          $ = $.shared;
                          var V = $.pending;
                          V === null
                            ? (N.next = N)
                            : ((N.next = V.next), (V.next = N)),
                            ($.pending = N);
                        }
                      }
                      (g.lanes |= a),
                        (N = g.alternate),
                        N !== null && (N.lanes |= a),
                        mc(g.return, a, i),
                        (b.lanes |= a);
                      break;
                    }
                    N = N.next;
                  }
                } else if (g.tag === 10) k = g.type === i.type ? null : g.child;
                else if (g.tag === 18) {
                  if (((k = g.return), k === null)) throw Error(n(341));
                  (k.lanes |= a),
                    (b = k.alternate),
                    b !== null && (b.lanes |= a),
                    mc(k, a, i),
                    (k = g.sibling);
                } else k = g.child;
                if (k !== null) k.return = g;
                else
                  for (k = g; k !== null; ) {
                    if (k === i) {
                      k = null;
                      break;
                    }
                    if (((g = k.sibling), g !== null)) {
                      (g.return = k.return), (k = g);
                      break;
                    }
                    k = k.return;
                  }
                g = k;
              }
          ut(r, i, h.children, a), (i = i.child);
        }
        return i;
      case 9:
        return (
          (h = i.type),
          (f = i.pendingProps.children),
          ts(i, a),
          (h = Rt(h)),
          (f = f(h)),
          (i.flags |= 1),
          ut(r, i, f, a),
          i.child
        );
      case 14:
        return (
          (f = i.type),
          (h = Jt(f, i.pendingProps)),
          (h = Jt(f.type, h)),
          Vh(r, i, f, h, a)
        );
      case 15:
        return Wh(r, i, i.type, i.pendingProps, a);
      case 17:
        return (
          (f = i.type),
          (h = i.pendingProps),
          (h = i.elementType === f ? h : Jt(f, h)),
          Ko(r, i),
          (i.tag = 1),
          wt(f) ? ((r = !0), Ao(i)) : (r = !1),
          ts(i, a),
          Rh(i, f, h),
          Ic(i, f, h, a),
          $c(null, i, f, !0, r, a)
        );
      case 19:
        return ep(r, i, a);
      case 22:
        return Kh(r, i, a);
    }
    throw Error(n(156, i.tag));
  };
  function Ep(r, i) {
    return rd(r, i);
  }
  function F0(r, i, a, f) {
    (this.tag = r),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = i),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = f),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function zt(r, i, a, f) {
    return new F0(r, i, a, f);
  }
  function tu(r) {
    return (r = r.prototype), !(!r || !r.isReactComponent);
  }
  function z0(r) {
    if (typeof r == "function") return tu(r) ? 1 : 0;
    if (r != null) {
      if (((r = r.$$typeof), r === z)) return 11;
      if (r === Ee) return 14;
    }
    return 2;
  }
  function Gn(r, i) {
    var a = r.alternate;
    return (
      a === null
        ? ((a = zt(r.tag, i, r.key, r.mode)),
          (a.elementType = r.elementType),
          (a.type = r.type),
          (a.stateNode = r.stateNode),
          (a.alternate = r),
          (r.alternate = a))
        : ((a.pendingProps = i),
          (a.type = r.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = r.flags & 14680064),
      (a.childLanes = r.childLanes),
      (a.lanes = r.lanes),
      (a.child = r.child),
      (a.memoizedProps = r.memoizedProps),
      (a.memoizedState = r.memoizedState),
      (a.updateQueue = r.updateQueue),
      (i = r.dependencies),
      (a.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (a.sibling = r.sibling),
      (a.index = r.index),
      (a.ref = r.ref),
      a
    );
  }
  function sl(r, i, a, f, h, g) {
    var k = 2;
    if (((f = r), typeof r == "function")) tu(r) && (k = 1);
    else if (typeof r == "string") k = 5;
    else
      e: switch (r) {
        case U:
          return xr(a.children, h, g, i);
        case B:
          (k = 8), (h |= 8);
          break;
        case j:
          return (
            (r = zt(12, a, i, h | 2)), (r.elementType = j), (r.lanes = g), r
          );
        case J:
          return (r = zt(13, a, i, h)), (r.elementType = J), (r.lanes = g), r;
        case de:
          return (r = zt(19, a, i, h)), (r.elementType = de), (r.lanes = g), r;
        case ye:
          return il(a, h, g, i);
        default:
          if (typeof r == "object" && r !== null)
            switch (r.$$typeof) {
              case Q:
                k = 10;
                break e;
              case W:
                k = 9;
                break e;
              case z:
                k = 11;
                break e;
              case Ee:
                k = 14;
                break e;
              case Ce:
                (k = 16), (f = null);
                break e;
            }
          throw Error(n(130, r == null ? r : typeof r, ""));
      }
    return (
      (i = zt(k, a, i, h)), (i.elementType = r), (i.type = f), (i.lanes = g), i
    );
  }
  function xr(r, i, a, f) {
    return (r = zt(7, r, f, i)), (r.lanes = a), r;
  }
  function il(r, i, a, f) {
    return (
      (r = zt(22, r, f, i)),
      (r.elementType = ye),
      (r.lanes = a),
      (r.stateNode = { isHidden: !1 }),
      r
    );
  }
  function nu(r, i, a) {
    return (r = zt(6, r, null, i)), (r.lanes = a), r;
  }
  function ru(r, i, a) {
    return (
      (i = zt(4, r.children !== null ? r.children : [], r.key, i)),
      (i.lanes = a),
      (i.stateNode = {
        containerInfo: r.containerInfo,
        pendingChildren: null,
        implementation: r.implementation,
      }),
      i
    );
  }
  function B0(r, i, a, f, h) {
    (this.tag = i),
      (this.containerInfo = r),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = La(0)),
      (this.expirationTimes = La(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = La(0)),
      (this.identifierPrefix = f),
      (this.onRecoverableError = h),
      (this.mutableSourceEagerHydrationData = null);
  }
  function su(r, i, a, f, h, g, k, b, N) {
    return (
      (r = new B0(r, i, a, b, N)),
      i === 1 ? ((i = 1), g === !0 && (i |= 8)) : (i = 0),
      (g = zt(3, null, null, i)),
      (r.current = g),
      (g.stateNode = r),
      (g.memoizedState = {
        element: f,
        isDehydrated: a,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      yc(g),
      r
    );
  }
  function U0(r, i, a) {
    var f =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: F,
      key: f == null ? null : "" + f,
      children: r,
      containerInfo: i,
      implementation: a,
    };
  }
  function bp(r) {
    if (!r) return Bn;
    r = r._reactInternals;
    e: {
      if (ar(r) !== r || r.tag !== 1) throw Error(n(170));
      var i = r;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break e;
          case 1:
            if (wt(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(n(171));
    }
    if (r.tag === 1) {
      var a = r.type;
      if (wt(a)) return Zd(r, a, i);
    }
    return i;
  }
  function Tp(r, i, a, f, h, g, k, b, N) {
    return (
      (r = su(a, f, !0, r, h, g, k, b, N)),
      (r.context = bp(null)),
      (a = r.current),
      (f = ft()),
      (h = Qn(a)),
      (g = xn(f, h)),
      (g.callback = i ?? null),
      qn(a, g, h),
      (r.current.lanes = h),
      Xs(r, h, f),
      _t(r, f),
      r
    );
  }
  function ol(r, i, a, f) {
    var h = i.current,
      g = ft(),
      k = Qn(h);
    return (
      (a = bp(a)),
      i.context === null ? (i.context = a) : (i.pendingContext = a),
      (i = xn(g, k)),
      (i.payload = { element: r }),
      (f = f === void 0 ? null : f),
      f !== null && (i.callback = f),
      (r = qn(h, i, k)),
      r !== null && (en(r, h, k, g), Ro(r, h, k)),
      k
    );
  }
  function ll(r) {
    if (((r = r.current), !r.child)) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function Np(r, i) {
    if (((r = r.memoizedState), r !== null && r.dehydrated !== null)) {
      var a = r.retryLane;
      r.retryLane = a !== 0 && a < i ? a : i;
    }
  }
  function iu(r, i) {
    Np(r, i), (r = r.alternate) && Np(r, i);
  }
  function H0() {
    return null;
  }
  var Cp =
    typeof reportError == "function"
      ? reportError
      : function (r) {
          console.error(r);
        };
  function ou(r) {
    this._internalRoot = r;
  }
  (al.prototype.render = ou.prototype.render =
    function (r) {
      var i = this._internalRoot;
      if (i === null) throw Error(n(409));
      ol(r, i, null, null);
    }),
    (al.prototype.unmount = ou.prototype.unmount =
      function () {
        var r = this._internalRoot;
        if (r !== null) {
          this._internalRoot = null;
          var i = r.containerInfo;
          yr(function () {
            ol(null, r, null, null);
          }),
            (i[mn] = null);
        }
      });
  function al(r) {
    this._internalRoot = r;
  }
  al.prototype.unstable_scheduleHydration = function (r) {
    if (r) {
      var i = fd();
      r = { blockedOn: null, target: r, priority: i };
      for (var a = 0; a < Pn.length && i !== 0 && i < Pn[a].priority; a++);
      Pn.splice(a, 0, r), a === 0 && pd(r);
    }
  };
  function lu(r) {
    return !(!r || (r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11));
  }
  function cl(r) {
    return !(
      !r ||
      (r.nodeType !== 1 &&
        r.nodeType !== 9 &&
        r.nodeType !== 11 &&
        (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ap() {}
  function q0(r, i, a, f, h) {
    if (h) {
      if (typeof f == "function") {
        var g = f;
        f = function () {
          var $ = ll(k);
          g.call($);
        };
      }
      var k = Tp(i, f, r, 0, null, !1, !1, "", Ap);
      return (
        (r._reactRootContainer = k),
        (r[mn] = k.current),
        ci(r.nodeType === 8 ? r.parentNode : r),
        yr(),
        k
      );
    }
    for (; (h = r.lastChild); ) r.removeChild(h);
    if (typeof f == "function") {
      var b = f;
      f = function () {
        var $ = ll(N);
        b.call($);
      };
    }
    var N = su(r, 0, !1, null, null, !1, !1, "", Ap);
    return (
      (r._reactRootContainer = N),
      (r[mn] = N.current),
      ci(r.nodeType === 8 ? r.parentNode : r),
      yr(function () {
        ol(i, N, a, f);
      }),
      N
    );
  }
  function ul(r, i, a, f, h) {
    var g = a._reactRootContainer;
    if (g) {
      var k = g;
      if (typeof h == "function") {
        var b = h;
        h = function () {
          var N = ll(k);
          b.call(N);
        };
      }
      ol(i, k, r, h);
    } else k = q0(a, i, r, h, f);
    return ll(k);
  }
  (cd = function (r) {
    switch (r.tag) {
      case 3:
        var i = r.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var a = Qs(i.pendingLanes);
          a !== 0 &&
            (Ia(i, a | 1), _t(i, Be()), !(we & 6) && ((os = Be() + 500), Un()));
        }
        break;
      case 13:
        yr(function () {
          var f = wn(r, 1);
          if (f !== null) {
            var h = ft();
            en(f, r, 1, h);
          }
        }),
          iu(r, 1);
    }
  }),
    (ja = function (r) {
      if (r.tag === 13) {
        var i = wn(r, 134217728);
        if (i !== null) {
          var a = ft();
          en(i, r, 134217728, a);
        }
        iu(r, 134217728);
      }
    }),
    (ud = function (r) {
      if (r.tag === 13) {
        var i = Qn(r),
          a = wn(r, i);
        if (a !== null) {
          var f = ft();
          en(a, r, i, f);
        }
        iu(r, i);
      }
    }),
    (fd = function () {
      return ke;
    }),
    (dd = function (r, i) {
      var a = ke;
      try {
        return (ke = r), i();
      } finally {
        ke = a;
      }
    }),
    (Ea = function (r, i, a) {
      switch (i) {
        case "input":
          if ((Bs(r, a), (i = a.name), a.type === "radio" && i != null)) {
            for (a = r; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                "input[name=" + JSON.stringify("" + i) + '][type="radio"]',
              ),
                i = 0;
              i < a.length;
              i++
            ) {
              var f = a[i];
              if (f !== r && f.form === r.form) {
                var h = No(f);
                if (!h) throw Error(n(90));
                zs(f), Bs(f, h);
              }
            }
          }
          break;
        case "textarea":
          jn(r, a);
          break;
        case "select":
          (i = a.value), i != null && In(r, !!a.multiple, i, !1);
      }
    }),
    (Gf = Yc),
    (Jf = yr);
  var V0 = { usingClientEntryPoint: !1, Events: [di, Kr, No, Qf, Xf, Yc] },
    Ti = {
      findFiberByHostInstance: cr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    W0 = {
      bundleType: Ti.bundleType,
      version: Ti.version,
      rendererPackageName: Ti.rendererPackageName,
      rendererConfig: Ti.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: R.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (r) {
        return (r = td(r)), r === null ? null : r.stateNode;
      },
      findFiberByHostInstance: Ti.findFiberByHostInstance || H0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber)
      try {
        (lo = fl.inject(W0)), (on = fl);
      } catch {}
  }
  return (
    (kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V0),
    (kt.createPortal = function (r, i) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!lu(i)) throw Error(n(200));
      return U0(r, i, null, a);
    }),
    (kt.createRoot = function (r, i) {
      if (!lu(r)) throw Error(n(299));
      var a = !1,
        f = "",
        h = Cp;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (a = !0),
          i.identifierPrefix !== void 0 && (f = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (h = i.onRecoverableError)),
        (i = su(r, 1, !1, null, null, a, !1, f, h)),
        (r[mn] = i.current),
        ci(r.nodeType === 8 ? r.parentNode : r),
        new ou(i)
      );
    }),
    (kt.findDOMNode = function (r) {
      if (r == null) return null;
      if (r.nodeType === 1) return r;
      var i = r._reactInternals;
      if (i === void 0)
        throw typeof r.render == "function"
          ? Error(n(188))
          : ((r = Object.keys(r).join(",")), Error(n(268, r)));
      return (r = td(i)), (r = r === null ? null : r.stateNode), r;
    }),
    (kt.flushSync = function (r) {
      return yr(r);
    }),
    (kt.hydrate = function (r, i, a) {
      if (!cl(i)) throw Error(n(200));
      return ul(null, r, i, !0, a);
    }),
    (kt.hydrateRoot = function (r, i, a) {
      if (!lu(r)) throw Error(n(405));
      var f = (a != null && a.hydratedSources) || null,
        h = !1,
        g = "",
        k = Cp;
      if (
        (a != null &&
          (a.unstable_strictMode === !0 && (h = !0),
          a.identifierPrefix !== void 0 && (g = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (k = a.onRecoverableError)),
        (i = Tp(i, null, r, 1, a ?? null, h, !1, g, k)),
        (r[mn] = i.current),
        ci(r),
        f)
      )
        for (r = 0; r < f.length; r++)
          (a = f[r]),
            (h = a._getVersion),
            (h = h(a._source)),
            i.mutableSourceEagerHydrationData == null
              ? (i.mutableSourceEagerHydrationData = [a, h])
              : i.mutableSourceEagerHydrationData.push(a, h);
      return new al(i);
    }),
    (kt.render = function (r, i, a) {
      if (!cl(i)) throw Error(n(200));
      return ul(null, r, i, !1, a);
    }),
    (kt.unmountComponentAtNode = function (r) {
      if (!cl(r)) throw Error(n(40));
      return r._reactRootContainer
        ? (yr(function () {
            ul(null, null, r, !1, function () {
              (r._reactRootContainer = null), (r[mn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (kt.unstable_batchedUpdates = Yc),
    (kt.unstable_renderSubtreeIntoContainer = function (r, i, a, f) {
      if (!cl(a)) throw Error(n(200));
      if (r == null || r._reactInternals === void 0) throw Error(n(38));
      return ul(r, i, a, !1, f);
    }),
    (kt.version = "18.3.1-next-f1338f8080-20240426"),
    kt
  );
}
var Fp;
function c1() {
  if (Fp) return uu.exports;
  Fp = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), (uu.exports = a1()), uu.exports;
}
var zp;
function u1() {
  if (zp) return dl;
  zp = 1;
  var t = c1();
  return (dl.createRoot = t.createRoot), (dl.hydrateRoot = t.hydrateRoot), dl;
}
var hT = u1();
const f1 = "_attach",
  Pi = Symbol("context"),
  Xm = Symbol("next"),
  Gm = Symbol("prev"),
  Bp = Symbol("events");
class pT {
  constructor(e) {
    xe(this, "startTime");
    xe(this, "endTime");
    xe(this, "browserName");
    xe(this, "channel");
    xe(this, "platform");
    xe(this, "wallTime");
    xe(this, "title");
    xe(this, "options");
    xe(this, "pages");
    xe(this, "actions");
    xe(this, "attachments");
    xe(this, "visibleAttachments");
    xe(this, "events");
    xe(this, "stdio");
    xe(this, "errors");
    xe(this, "errorDescriptors");
    xe(this, "hasSource");
    xe(this, "hasStepData");
    xe(this, "sdkLanguage");
    xe(this, "testIdAttributeName");
    xe(this, "sources");
    xe(this, "resources");
    e.forEach((s) => d1(s));
    const n = e.find((s) => s.origin === "library");
    (this.browserName = (n == null ? void 0 : n.browserName) || ""),
      (this.sdkLanguage = n == null ? void 0 : n.sdkLanguage),
      (this.channel = n == null ? void 0 : n.channel),
      (this.testIdAttributeName = n == null ? void 0 : n.testIdAttributeName),
      (this.platform = (n == null ? void 0 : n.platform) || ""),
      (this.title = (n == null ? void 0 : n.title) || ""),
      (this.options = (n == null ? void 0 : n.options) || {}),
      (this.actions = h1(e)),
      (this.pages = [].concat(...e.map((s) => s.pages))),
      (this.wallTime = e
        .map((s) => s.wallTime)
        .reduce(
          (s, o) => Math.min(s || Number.MAX_VALUE, o),
          Number.MAX_VALUE,
        )),
      (this.startTime = e
        .map((s) => s.startTime)
        .reduce((s, o) => Math.min(s, o), Number.MAX_VALUE)),
      (this.endTime = e
        .map((s) => s.endTime)
        .reduce((s, o) => Math.max(s, o), Number.MIN_VALUE)),
      (this.events = [].concat(...e.map((s) => s.events))),
      (this.stdio = [].concat(...e.map((s) => s.stdio))),
      (this.errors = [].concat(...e.map((s) => s.errors))),
      (this.hasSource = e.some((s) => s.hasSource)),
      (this.hasStepData = e.some((s) => s.origin === "testRunner")),
      (this.resources = [...e.map((s) => s.resources)].flat()),
      (this.attachments = this.actions.flatMap((s) => {
        var o;
        return (
          ((o = s.attachments) == null
            ? void 0
            : o.map((l) => ({ ...l, traceUrl: s.context.traceUrl }))) ?? []
        );
      })),
      (this.visibleAttachments = this.attachments.filter(
        (s) => !s.name.startsWith("_"),
      )),
      this.events.sort((s, o) => s.time - o.time),
      this.resources.sort((s, o) => s._monotonicTime - o._monotonicTime),
      (this.errorDescriptors = this.hasStepData
        ? this._errorDescriptorsFromTestRunner()
        : this._errorDescriptorsFromActions()),
      (this.sources = k1(this.actions, this.errorDescriptors));
  }
  failedAction() {
    return this.actions.findLast((e) => e.error);
  }
  _errorDescriptorsFromActions() {
    var n;
    const e = [];
    for (const s of this.actions || [])
      (n = s.error) != null &&
        n.message &&
        e.push({ action: s, stack: s.stack, message: s.error.message });
    return e;
  }
  _errorDescriptorsFromTestRunner() {
    return this.errors
      .filter((e) => !!e.message)
      .map((e, n) => ({
        stack: e.stack,
        message: e.message,
        prompt: this.attachments.find((s) => s.name === `_prompt-${n}`),
      }));
  }
}
function d1(t) {
  for (const n of t.pages) n[Pi] = t;
  for (let n = 0; n < t.actions.length; ++n) {
    const s = t.actions[n];
    s[Pi] = t;
  }
  let e;
  for (let n = t.actions.length - 1; n >= 0; n--) {
    const s = t.actions[n];
    (s[Xm] = e), s.apiName.includes("route.") || (e = s);
  }
  for (const n of t.events) n[Pi] = t;
  for (const n of t.resources) n[Pi] = t;
}
function h1(t) {
  const e = new Map();
  for (const o of t) {
    const l = o.traceUrl;
    let c = e.get(l);
    c || ((c = []), e.set(l, c)), c.push(o);
  }
  const n = [];
  let s = 0;
  for (const [, o] of e) {
    e.size > 1 && p1(o, ++s);
    const l = m1(o);
    n.push(...l);
  }
  n.sort((o, l) =>
    l.parentId === o.callId
      ? -1
      : o.parentId === l.callId
        ? 1
        : o.startTime - l.startTime,
  );
  for (let o = 1; o < n.length; ++o) n[o][Gm] = n[o - 1];
  return n;
}
function p1(t, e) {
  for (const n of t)
    for (const s of n.actions)
      s.callId && (s.callId = `${e}:${s.callId}`),
        s.parentId && (s.parentId = `${e}:${s.parentId}`);
}
function m1(t) {
  const e = new Map(),
    n = t.filter((u) => u.origin === "library"),
    s = t.filter((u) => u.origin === "testRunner");
  if (!s.length || !n.length)
    return t.map((u) => u.actions.map((d) => ({ ...d, context: u }))).flat();
  const o = n.some((u) => u.actions.some((d) => !!d.stepId));
  for (const u of n)
    for (const d of u.actions) {
      const p = o ? d.stepId : `${d.apiName}@${d.wallTime}`;
      e.set(p, { ...d, context: u });
    }
  const l = y1(s, e, o);
  l && g1(n, l);
  const c = new Map();
  for (const u of s)
    for (const d of u.actions) {
      const p = o ? d.callId : `${d.apiName}@${d.wallTime}`,
        y = e.get(p);
      if (y) {
        c.set(d.callId, y.callId),
          d.error && (y.error = d.error),
          d.attachments && (y.attachments = d.attachments),
          d.annotations && (y.annotations = d.annotations),
          d.parentId && (y.parentId = c.get(d.parentId) ?? d.parentId),
          (y.startTime = d.startTime),
          (y.endTime = d.endTime);
        continue;
      }
      d.parentId && (d.parentId = c.get(d.parentId) ?? d.parentId),
        e.set(p, { ...d, context: u });
    }
  return [...e.values()];
}
function g1(t, e) {
  for (const n of t) {
    (n.startTime += e), (n.endTime += e);
    for (const s of n.actions)
      s.startTime && (s.startTime += e), s.endTime && (s.endTime += e);
    for (const s of n.events) s.time += e;
    for (const s of n.stdio) s.timestamp += e;
    for (const s of n.pages)
      for (const o of s.screencastFrames) o.timestamp += e;
    for (const s of n.resources) s._monotonicTime && (s._monotonicTime += e);
  }
}
function y1(t, e, n) {
  for (const s of t)
    for (const o of s.actions) {
      if (!o.startTime) continue;
      const l = n ? o.callId : `${o.apiName}@${o.wallTime}`,
        c = e.get(l);
      if (c) return o.startTime - c.startTime;
    }
  return 0;
}
function v1(t) {
  var s;
  const e = new Map();
  for (const o of t)
    e.set(o.callId, { id: o.callId, parent: void 0, children: [], action: o });
  const n = { id: "", parent: void 0, children: [] };
  for (const o of e.values()) {
    if ((s = o.action) != null && s.apiName.startsWith(f1)) continue;
    const l = (o.action.parentId && e.get(o.action.parentId)) || n;
    l.children.push(o), (o.parent = l);
  }
  return { rootItem: n, itemMap: e };
}
function Dl(t) {
  return t[Pi];
}
function w1(t) {
  return t[Xm];
}
function x1(t) {
  return t[Gm];
}
function S1(t) {
  let e = 0,
    n = 0;
  for (const s of _1(t)) {
    if (s.type === "console") {
      const o = s.messageType;
      o === "warning" ? ++n : o === "error" && ++e;
    }
    s.type === "event" && s.method === "pageError" && ++e;
  }
  return { errors: e, warnings: n };
}
function _1(t) {
  let e = t[Bp];
  if (e) return e;
  const n = w1(t);
  return (
    (e = Dl(t).events.filter(
      (s) => s.time >= t.startTime && (!n || s.time < n.startTime),
    )),
    (t[Bp] = e),
    e
  );
}
function k1(t, e) {
  var s;
  const n = new Map();
  for (const o of t)
    for (const l of o.stack || []) {
      let c = n.get(l.file);
      c || ((c = { errors: [], content: void 0 }), n.set(l.file, c));
    }
  for (const o of e) {
    const { action: l, stack: c, message: u } = o;
    !l ||
      !c ||
      (s = n.get(c[0].file)) == null ||
      s.errors.push({ line: c[0].line || 0, message: u });
  }
  return n;
}
const hu = new Set([
  "page.route",
  "page.routefromhar",
  "page.unroute",
  "page.unrouteall",
  "browsercontext.route",
  "browsercontext.routefromhar",
  "browsercontext.unroute",
  "browsercontext.unrouteall",
]);
{
  for (const t of [...hu]) hu.add(t + "async");
  for (const t of [
    "page.route_from_har",
    "page.unroute_all",
    "context.route_from_har",
    "context.unroute_all",
  ])
    hu.add(t);
}
const E1 = 50,
  Fl = ({
    sidebarSize: t,
    sidebarHidden: e = !1,
    sidebarIsFirst: n = !1,
    orientation: s = "vertical",
    minSidebarSize: o = E1,
    settingName: l,
    sidebar: c,
    main: u,
  }) => {
    const d = Math.max(o, t) * window.devicePixelRatio,
      [p, y] = bs(l ? l + "." + s + ":size" : void 0, d),
      [v, m] = bs(l ? l + "." + s + ":size" : void 0, d),
      [w, _] = P.useState(null),
      [S, E] = Lr();
    let T;
    s === "vertical"
      ? ((T = v / window.devicePixelRatio),
        S && S.height < T && (T = S.height - 10))
      : ((T = p / window.devicePixelRatio),
        S && S.width < T && (T = S.width - 10)),
      (document.body.style.userSelect = w ? "none" : "inherit");
    let C = {};
    return (
      s === "vertical"
        ? n
          ? (C = {
              top: w ? 0 : T - 4,
              bottom: w ? 0 : void 0,
              height: w ? "initial" : 8,
            })
          : (C = {
              bottom: w ? 0 : T - 4,
              top: w ? 0 : void 0,
              height: w ? "initial" : 8,
            })
        : n
          ? (C = {
              left: w ? 0 : T - 4,
              right: w ? 0 : void 0,
              width: w ? "initial" : 8,
            })
          : (C = {
              right: w ? 0 : T - 4,
              left: w ? 0 : void 0,
              width: w ? "initial" : 8,
            }),
      x.jsxs("div", {
        className: ze("split-view", s, n && "sidebar-first"),
        ref: E,
        children: [
          x.jsx("div", { className: "split-view-main", children: u }),
          !e &&
            x.jsx("div", {
              style: { flexBasis: T },
              className: "split-view-sidebar",
              children: c,
            }),
          !e &&
            x.jsx("div", {
              style: C,
              className: "split-view-resizer",
              onMouseDown: (O) =>
                _({
                  offset: s === "vertical" ? O.clientY : O.clientX,
                  size: T,
                }),
              onMouseUp: () => _(null),
              onMouseMove: (O) => {
                if (!O.buttons) _(null);
                else if (w) {
                  const D =
                      (s === "vertical" ? O.clientY : O.clientX) - w.offset,
                    F = n ? w.size + D : w.size - D,
                    B = O.target.parentElement.getBoundingClientRect(),
                    j = Math.min(
                      Math.max(o, F),
                      (s === "vertical" ? B.height : B.width) - o,
                    );
                  s === "vertical"
                    ? m(j * window.devicePixelRatio)
                    : y(j * window.devicePixelRatio);
                }
              },
            }),
        ],
      })
    );
  },
  Ve = function (t, e, n) {
    return t >= e && t <= n;
  };
function Et(t) {
  return Ve(t, 48, 57);
}
function Up(t) {
  return Et(t) || Ve(t, 65, 70) || Ve(t, 97, 102);
}
function b1(t) {
  return Ve(t, 65, 90);
}
function T1(t) {
  return Ve(t, 97, 122);
}
function N1(t) {
  return b1(t) || T1(t);
}
function C1(t) {
  return t >= 128;
}
function El(t) {
  return N1(t) || C1(t) || t === 95;
}
function Hp(t) {
  return El(t) || Et(t) || t === 45;
}
function A1(t) {
  return Ve(t, 0, 8) || t === 11 || Ve(t, 14, 31) || t === 127;
}
function bl(t) {
  return t === 10;
}
function kn(t) {
  return bl(t) || t === 9 || t === 32;
}
const L1 = 1114111;
class lf extends Error {
  constructor(e) {
    super(e), (this.name = "InvalidCharacterError");
  }
}
function I1(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    let s = t.charCodeAt(n);
    if (
      (s === 13 && t.charCodeAt(n + 1) === 10 && ((s = 10), n++),
      (s === 13 || s === 12) && (s = 10),
      s === 0 && (s = 65533),
      Ve(s, 55296, 56319) && Ve(t.charCodeAt(n + 1), 56320, 57343))
    ) {
      const o = s - 55296,
        l = t.charCodeAt(n + 1) - 56320;
      (s = Math.pow(2, 16) + o * Math.pow(2, 10) + l), n++;
    }
    e.push(s);
  }
  return e;
}
function Qe(t) {
  if (t <= 65535) return String.fromCharCode(t);
  t -= Math.pow(2, 16);
  const e = Math.floor(t / Math.pow(2, 10)) + 55296,
    n = (t % Math.pow(2, 10)) + 56320;
  return String.fromCharCode(e) + String.fromCharCode(n);
}
function j1(t) {
  const e = I1(t);
  let n = -1;
  const s = [];
  let o;
  const l = function (z) {
      return z >= e.length ? -1 : e[z];
    },
    c = function (z) {
      if ((z === void 0 && (z = 1), z > 3))
        throw "Spec Error: no more than three codepoints of lookahead.";
      return l(n + z);
    },
    u = function (z) {
      return z === void 0 && (z = 1), (n += z), (o = l(n)), !0;
    },
    d = function () {
      return (n -= 1), !0;
    },
    p = function (z) {
      return z === void 0 && (z = o), z === -1;
    },
    y = function () {
      if ((v(), u(), kn(o))) {
        for (; kn(c()); ) u();
        return new zu();
      } else {
        if (o === 34) return _();
        if (o === 35)
          if (Hp(c()) || T(c(1), c(2))) {
            const z = new fg("");
            return O(c(1), c(2), c(3)) && (z.type = "id"), (z.value = U()), z;
          } else return new lt(o);
        else
          return o === 36
            ? c() === 61
              ? (u(), new P1())
              : new lt(o)
            : o === 39
              ? _()
              : o === 40
                ? new og()
                : o === 41
                  ? new lg()
                  : o === 42
                    ? c() === 61
                      ? (u(), new R1())
                      : new lt(o)
                    : o === 43
                      ? F()
                        ? (d(), m())
                        : new lt(o)
                      : o === 44
                        ? new ng()
                        : o === 45
                          ? F()
                            ? (d(), m())
                            : c(1) === 45 && c(2) === 62
                              ? (u(2), new Zm())
                              : R()
                                ? (d(), w())
                                : new lt(o)
                          : o === 46
                            ? F()
                              ? (d(), m())
                              : new lt(o)
                            : o === 58
                              ? new eg()
                              : o === 59
                                ? new tg()
                                : o === 60
                                  ? c(1) === 33 && c(2) === 45 && c(3) === 45
                                    ? (u(3), new Ym())
                                    : new lt(o)
                                  : o === 64
                                    ? O(c(1), c(2), c(3))
                                      ? new ug(U())
                                      : new lt(o)
                                    : o === 91
                                      ? new ig()
                                      : o === 92
                                        ? C()
                                          ? (d(), w())
                                          : new lt(o)
                                        : o === 93
                                          ? new Bu()
                                          : o === 94
                                            ? c() === 61
                                              ? (u(), new $1())
                                              : new lt(o)
                                            : o === 123
                                              ? new rg()
                                              : o === 124
                                                ? c() === 61
                                                  ? (u(), new O1())
                                                  : c() === 124
                                                    ? (u(), new ag())
                                                    : new lt(o)
                                                : o === 125
                                                  ? new sg()
                                                  : o === 126
                                                    ? c() === 61
                                                      ? (u(), new M1())
                                                      : new lt(o)
                                                    : Et(o)
                                                      ? (d(), m())
                                                      : El(o)
                                                        ? (d(), w())
                                                        : p()
                                                          ? new Nl()
                                                          : new lt(o);
      }
    },
    v = function () {
      for (; c(1) === 47 && c(2) === 42; )
        for (u(2); ; )
          if ((u(), o === 42 && c() === 47)) {
            u();
            break;
          } else if (p()) return;
    },
    m = function () {
      const z = B();
      if (O(c(1), c(2), c(3))) {
        const J = new D1();
        return (
          (J.value = z.value),
          (J.repr = z.repr),
          (J.type = z.type),
          (J.unit = U()),
          J
        );
      } else if (c() === 37) {
        u();
        const J = new mg();
        return (J.value = z.value), (J.repr = z.repr), J;
      } else {
        const J = new pg();
        return (J.value = z.value), (J.repr = z.repr), (J.type = z.type), J;
      }
    },
    w = function () {
      const z = U();
      if (z.toLowerCase() === "url" && c() === 40) {
        for (u(); kn(c(1)) && kn(c(2)); ) u();
        return c() === 34 || c() === 39
          ? new Cl(z)
          : kn(c()) && (c(2) === 34 || c(2) === 39)
            ? new Cl(z)
            : S();
      } else return c() === 40 ? (u(), new Cl(z)) : new cg(z);
    },
    _ = function (z) {
      z === void 0 && (z = o);
      let J = "";
      for (; u(); ) {
        if (o === z || p()) return new dg(J);
        if (bl(o)) return d(), new Jm();
        o === 92 ? p(c()) || (bl(c()) ? u() : (J += Qe(E()))) : (J += Qe(o));
      }
      throw new Error("Internal error");
    },
    S = function () {
      const z = new hg("");
      for (; kn(c()); ) u();
      if (p(c())) return z;
      for (; u(); ) {
        if (o === 41 || p()) return z;
        if (kn(o)) {
          for (; kn(c()); ) u();
          return c() === 41 || p(c()) ? (u(), z) : (Q(), new Tl());
        } else {
          if (o === 34 || o === 39 || o === 40 || A1(o)) return Q(), new Tl();
          if (o === 92)
            if (C()) z.value += Qe(E());
            else return Q(), new Tl();
          else z.value += Qe(o);
        }
      }
      throw new Error("Internal error");
    },
    E = function () {
      if ((u(), Up(o))) {
        const z = [o];
        for (let de = 0; de < 5 && Up(c()); de++) u(), z.push(o);
        kn(c()) && u();
        let J = parseInt(
          z
            .map(function (de) {
              return String.fromCharCode(de);
            })
            .join(""),
          16,
        );
        return J > L1 && (J = 65533), J;
      } else return p() ? 65533 : o;
    },
    T = function (z, J) {
      return !(z !== 92 || bl(J));
    },
    C = function () {
      return T(o, c());
    },
    O = function (z, J, de) {
      return z === 45
        ? El(J) || J === 45 || T(J, de)
        : El(z)
          ? !0
          : z === 92
            ? T(z, J)
            : !1;
    },
    R = function () {
      return O(o, c(1), c(2));
    },
    D = function (z, J, de) {
      return z === 43 || z === 45
        ? !!(Et(J) || (J === 46 && Et(de)))
        : z === 46
          ? !!Et(J)
          : !!Et(z);
    },
    F = function () {
      return D(o, c(1), c(2));
    },
    U = function () {
      let z = "";
      for (; u(); )
        if (Hp(o)) z += Qe(o);
        else if (C()) z += Qe(E());
        else return d(), z;
      throw new Error("Internal parse error");
    },
    B = function () {
      let z = "",
        J = "integer";
      for ((c() === 43 || c() === 45) && (u(), (z += Qe(o))); Et(c()); )
        u(), (z += Qe(o));
      if (c(1) === 46 && Et(c(2)))
        for (u(), z += Qe(o), u(), z += Qe(o), J = "number"; Et(c()); )
          u(), (z += Qe(o));
      const de = c(1),
        Ee = c(2),
        Ce = c(3);
      if ((de === 69 || de === 101) && Et(Ee))
        for (u(), z += Qe(o), u(), z += Qe(o), J = "number"; Et(c()); )
          u(), (z += Qe(o));
      else if ((de === 69 || de === 101) && (Ee === 43 || Ee === 45) && Et(Ce))
        for (
          u(), z += Qe(o), u(), z += Qe(o), u(), z += Qe(o), J = "number";
          Et(c());

        )
          u(), (z += Qe(o));
      const ye = j(z);
      return { type: J, value: ye, repr: z };
    },
    j = function (z) {
      return +z;
    },
    Q = function () {
      for (; u(); ) {
        if (o === 41 || p()) return;
        C() && E();
      }
    };
  let W = 0;
  for (; !p(c()); )
    if ((s.push(y()), W++, W > e.length * 2))
      throw new Error("I'm infinite-looping!");
  return s;
}
class He {
  constructor() {
    this.tokenType = "";
  }
  toJSON() {
    return { token: this.tokenType };
  }
  toString() {
    return this.tokenType;
  }
  toSource() {
    return "" + this;
  }
}
class Jm extends He {
  constructor() {
    super(...arguments), (this.tokenType = "BADSTRING");
  }
}
class Tl extends He {
  constructor() {
    super(...arguments), (this.tokenType = "BADURL");
  }
}
class zu extends He {
  constructor() {
    super(...arguments), (this.tokenType = "WHITESPACE");
  }
  toString() {
    return "WS";
  }
  toSource() {
    return " ";
  }
}
class Ym extends He {
  constructor() {
    super(...arguments), (this.tokenType = "CDO");
  }
  toSource() {
    return "<!--";
  }
}
class Zm extends He {
  constructor() {
    super(...arguments), (this.tokenType = "CDC");
  }
  toSource() {
    return "-->";
  }
}
class eg extends He {
  constructor() {
    super(...arguments), (this.tokenType = ":");
  }
}
class tg extends He {
  constructor() {
    super(...arguments), (this.tokenType = ";");
  }
}
class ng extends He {
  constructor() {
    super(...arguments), (this.tokenType = ",");
  }
}
class Ls extends He {
  constructor() {
    super(...arguments), (this.value = ""), (this.mirror = "");
  }
}
class rg extends Ls {
  constructor() {
    super(), (this.tokenType = "{"), (this.value = "{"), (this.mirror = "}");
  }
}
class sg extends Ls {
  constructor() {
    super(), (this.tokenType = "}"), (this.value = "}"), (this.mirror = "{");
  }
}
class ig extends Ls {
  constructor() {
    super(), (this.tokenType = "["), (this.value = "["), (this.mirror = "]");
  }
}
class Bu extends Ls {
  constructor() {
    super(), (this.tokenType = "]"), (this.value = "]"), (this.mirror = "[");
  }
}
class og extends Ls {
  constructor() {
    super(), (this.tokenType = "("), (this.value = "("), (this.mirror = ")");
  }
}
class lg extends Ls {
  constructor() {
    super(), (this.tokenType = ")"), (this.value = ")"), (this.mirror = "(");
  }
}
class M1 extends He {
  constructor() {
    super(...arguments), (this.tokenType = "~=");
  }
}
class O1 extends He {
  constructor() {
    super(...arguments), (this.tokenType = "|=");
  }
}
class $1 extends He {
  constructor() {
    super(...arguments), (this.tokenType = "^=");
  }
}
class P1 extends He {
  constructor() {
    super(...arguments), (this.tokenType = "$=");
  }
}
class R1 extends He {
  constructor() {
    super(...arguments), (this.tokenType = "*=");
  }
}
class ag extends He {
  constructor() {
    super(...arguments), (this.tokenType = "||");
  }
}
class Nl extends He {
  constructor() {
    super(...arguments), (this.tokenType = "EOF");
  }
  toSource() {
    return "";
  }
}
class lt extends He {
  constructor(e) {
    super(),
      (this.tokenType = "DELIM"),
      (this.value = ""),
      (this.value = Qe(e));
  }
  toString() {
    return "DELIM(" + this.value + ")";
  }
  toJSON() {
    const e =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (e.value = this.value), e;
  }
  toSource() {
    return this.value === "\\"
      ? `\\
`
      : this.value;
  }
}
class Is extends He {
  constructor() {
    super(...arguments), (this.value = "");
  }
  ASCIIMatch(e) {
    return this.value.toLowerCase() === e.toLowerCase();
  }
  toJSON() {
    const e =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (e.value = this.value), e;
  }
}
class cg extends Is {
  constructor(e) {
    super(), (this.tokenType = "IDENT"), (this.value = e);
  }
  toString() {
    return "IDENT(" + this.value + ")";
  }
  toSource() {
    return Gi(this.value);
  }
}
class Cl extends Is {
  constructor(e) {
    super(),
      (this.tokenType = "FUNCTION"),
      (this.value = e),
      (this.mirror = ")");
  }
  toString() {
    return "FUNCTION(" + this.value + ")";
  }
  toSource() {
    return Gi(this.value) + "(";
  }
}
class ug extends Is {
  constructor(e) {
    super(), (this.tokenType = "AT-KEYWORD"), (this.value = e);
  }
  toString() {
    return "AT(" + this.value + ")";
  }
  toSource() {
    return "@" + Gi(this.value);
  }
}
class fg extends Is {
  constructor(e) {
    super(),
      (this.tokenType = "HASH"),
      (this.value = e),
      (this.type = "unrestricted");
  }
  toString() {
    return "HASH(" + this.value + ")";
  }
  toJSON() {
    const e =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (e.value = this.value), (e.type = this.type), e;
  }
  toSource() {
    return this.type === "id" ? "#" + Gi(this.value) : "#" + F1(this.value);
  }
}
class dg extends Is {
  constructor(e) {
    super(), (this.tokenType = "STRING"), (this.value = e);
  }
  toString() {
    return '"' + gg(this.value) + '"';
  }
}
class hg extends Is {
  constructor(e) {
    super(), (this.tokenType = "URL"), (this.value = e);
  }
  toString() {
    return "URL(" + this.value + ")";
  }
  toSource() {
    return 'url("' + gg(this.value) + '")';
  }
}
class pg extends He {
  constructor() {
    super(),
      (this.tokenType = "NUMBER"),
      (this.type = "integer"),
      (this.repr = "");
  }
  toString() {
    return this.type === "integer"
      ? "INT(" + this.value + ")"
      : "NUMBER(" + this.value + ")";
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.value = this.value), (e.type = this.type), (e.repr = this.repr), e
    );
  }
  toSource() {
    return this.repr;
  }
}
class mg extends He {
  constructor() {
    super(), (this.tokenType = "PERCENTAGE"), (this.repr = "");
  }
  toString() {
    return "PERCENTAGE(" + this.value + ")";
  }
  toJSON() {
    const e =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (e.value = this.value), (e.repr = this.repr), e;
  }
  toSource() {
    return this.repr + "%";
  }
}
class D1 extends He {
  constructor() {
    super(),
      (this.tokenType = "DIMENSION"),
      (this.type = "integer"),
      (this.repr = ""),
      (this.unit = "");
  }
  toString() {
    return "DIM(" + this.value + "," + this.unit + ")";
  }
  toJSON() {
    const e =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (
      (e.value = this.value),
      (e.type = this.type),
      (e.repr = this.repr),
      (e.unit = this.unit),
      e
    );
  }
  toSource() {
    const e = this.repr;
    let n = Gi(this.unit);
    return (
      n[0].toLowerCase() === "e" &&
        (n[1] === "-" || Ve(n.charCodeAt(1), 48, 57)) &&
        (n = "\\65 " + n.slice(1, n.length)),
      e + n
    );
  }
}
function Gi(t) {
  t = "" + t;
  let e = "";
  const n = t.charCodeAt(0);
  for (let s = 0; s < t.length; s++) {
    const o = t.charCodeAt(s);
    if (o === 0) throw new lf("Invalid character: the input contains U+0000.");
    Ve(o, 1, 31) ||
    o === 127 ||
    (s === 0 && Ve(o, 48, 57)) ||
    (s === 1 && Ve(o, 48, 57) && n === 45)
      ? (e += "\\" + o.toString(16) + " ")
      : o >= 128 ||
          o === 45 ||
          o === 95 ||
          Ve(o, 48, 57) ||
          Ve(o, 65, 90) ||
          Ve(o, 97, 122)
        ? (e += t[s])
        : (e += "\\" + t[s]);
  }
  return e;
}
function F1(t) {
  t = "" + t;
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const s = t.charCodeAt(n);
    if (s === 0) throw new lf("Invalid character: the input contains U+0000.");
    s >= 128 ||
    s === 45 ||
    s === 95 ||
    Ve(s, 48, 57) ||
    Ve(s, 65, 90) ||
    Ve(s, 97, 122)
      ? (e += t[n])
      : (e += "\\" + s.toString(16) + " ");
  }
  return e;
}
function gg(t) {
  t = "" + t;
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const s = t.charCodeAt(n);
    if (s === 0) throw new lf("Invalid character: the input contains U+0000.");
    Ve(s, 1, 31) || s === 127
      ? (e += "\\" + s.toString(16) + " ")
      : s === 34 || s === 92
        ? (e += "\\" + t[n])
        : (e += t[n]);
  }
  return e;
}
class bt extends Error {}
function z1(t, e) {
  let n;
  try {
    (n = j1(t)), n[n.length - 1] instanceof Nl || n.push(new Nl());
  } catch (j) {
    const Q =
        j.message +
        ` while parsing css selector "${t}". Did you mean to CSS.escape it?`,
      W = (j.stack || "").indexOf(j.message);
    throw (
      (W !== -1 &&
        (j.stack =
          j.stack.substring(0, W) +
          Q +
          j.stack.substring(W + j.message.length)),
      (j.message = Q),
      j)
    );
  }
  const s = n.find(
    (j) =>
      j instanceof ug ||
      j instanceof Jm ||
      j instanceof Tl ||
      j instanceof ag ||
      j instanceof Ym ||
      j instanceof Zm ||
      j instanceof tg ||
      j instanceof rg ||
      j instanceof sg ||
      j instanceof hg ||
      j instanceof mg,
  );
  if (s)
    throw new bt(
      `Unsupported token "${s.toSource()}" while parsing css selector "${t}". Did you mean to CSS.escape it?`,
    );
  let o = 0;
  const l = new Set();
  function c() {
    return new bt(
      `Unexpected token "${n[o].toSource()}" while parsing css selector "${t}". Did you mean to CSS.escape it?`,
    );
  }
  function u() {
    for (; n[o] instanceof zu; ) o++;
  }
  function d(j = o) {
    return n[j] instanceof cg;
  }
  function p(j = o) {
    return n[j] instanceof dg;
  }
  function y(j = o) {
    return n[j] instanceof pg;
  }
  function v(j = o) {
    return n[j] instanceof ng;
  }
  function m(j = o) {
    return n[j] instanceof og;
  }
  function w(j = o) {
    return n[j] instanceof lg;
  }
  function _(j = o) {
    return n[j] instanceof Cl;
  }
  function S(j = o) {
    return n[j] instanceof lt && n[j].value === "*";
  }
  function E(j = o) {
    return n[j] instanceof Nl;
  }
  function T(j = o) {
    return n[j] instanceof lt && [">", "+", "~"].includes(n[j].value);
  }
  function C(j = o) {
    return v(j) || w(j) || E(j) || T(j) || n[j] instanceof zu;
  }
  function O() {
    const j = [R()];
    for (; u(), !!v(); ) o++, j.push(R());
    return j;
  }
  function R() {
    return u(), y() || p() ? n[o++].value : D();
  }
  function D() {
    const j = { simples: [] };
    for (
      u(),
        T()
          ? j.simples.push({
              selector: { functions: [{ name: "scope", args: [] }] },
              combinator: "",
            })
          : j.simples.push({ selector: F(), combinator: "" });
      ;

    ) {
      if ((u(), T()))
        (j.simples[j.simples.length - 1].combinator = n[o++].value), u();
      else if (C()) break;
      j.simples.push({ combinator: "", selector: F() });
    }
    return j;
  }
  function F() {
    let j = "";
    const Q = [];
    for (; !C(); )
      if (d() || S()) j += n[o++].toSource();
      else if (n[o] instanceof fg) j += n[o++].toSource();
      else if (n[o] instanceof lt && n[o].value === ".")
        if ((o++, d())) j += "." + n[o++].toSource();
        else throw c();
      else if (n[o] instanceof eg)
        if ((o++, d()))
          if (!e.has(n[o].value.toLowerCase())) j += ":" + n[o++].toSource();
          else {
            const W = n[o++].value.toLowerCase();
            Q.push({ name: W, args: [] }), l.add(W);
          }
        else if (_()) {
          const W = n[o++].value.toLowerCase();
          if (
            (e.has(W)
              ? (Q.push({ name: W, args: O() }), l.add(W))
              : (j += `:${W}(${U()})`),
            u(),
            !w())
          )
            throw c();
          o++;
        } else throw c();
      else if (n[o] instanceof ig) {
        for (j += "[", o++; !(n[o] instanceof Bu) && !E(); )
          j += n[o++].toSource();
        if (!(n[o] instanceof Bu)) throw c();
        (j += "]"), o++;
      } else throw c();
    if (!j && !Q.length) throw c();
    return { css: j || void 0, functions: Q };
  }
  function U() {
    let j = "",
      Q = 1;
    for (; !E() && ((m() || _()) && Q++, w() && Q--, !!Q); )
      j += n[o++].toSource();
    return j;
  }
  const B = O();
  if (!E()) throw c();
  if (B.some((j) => typeof j != "object" || !("simples" in j)))
    throw new bt(
      `Error while parsing css selector "${t}". Did you mean to CSS.escape it?`,
    );
  return { selector: B, names: Array.from(l) };
}
const Uu = new Set([
    "internal:has",
    "internal:has-not",
    "internal:and",
    "internal:or",
    "internal:chain",
    "left-of",
    "right-of",
    "above",
    "below",
    "near",
  ]),
  B1 = new Set(["left-of", "right-of", "above", "below", "near"]),
  yg = new Set([
    "not",
    "is",
    "where",
    "has",
    "scope",
    "light",
    "visible",
    "text",
    "text-matches",
    "text-is",
    "has-text",
    "above",
    "below",
    "right-of",
    "left-of",
    "near",
    "nth-match",
  ]);
function Yl(t) {
  const e = q1(t),
    n = [];
  for (const s of e.parts) {
    if (s.name === "css" || s.name === "css:light") {
      s.name === "css:light" && (s.body = ":light(" + s.body + ")");
      const o = z1(s.body, yg);
      n.push({ name: "css", body: o.selector, source: s.body });
      continue;
    }
    if (Uu.has(s.name)) {
      let o, l;
      try {
        const p = JSON.parse("[" + s.body + "]");
        if (
          !Array.isArray(p) ||
          p.length < 1 ||
          p.length > 2 ||
          typeof p[0] != "string"
        )
          throw new bt(`Malformed selector: ${s.name}=` + s.body);
        if (((o = p[0]), p.length === 2)) {
          if (typeof p[1] != "number" || !B1.has(s.name))
            throw new bt(`Malformed selector: ${s.name}=` + s.body);
          l = p[1];
        }
      } catch {
        throw new bt(`Malformed selector: ${s.name}=` + s.body);
      }
      const c = {
          name: s.name,
          source: s.body,
          body: { parsed: Yl(o), distance: l },
        },
        u = [...c.body.parsed.parts]
          .reverse()
          .find(
            (p) => p.name === "internal:control" && p.body === "enter-frame",
          ),
        d = u ? c.body.parsed.parts.indexOf(u) : -1;
      d !== -1 &&
        U1(c.body.parsed.parts.slice(0, d + 1), n.slice(0, d + 1)) &&
        c.body.parsed.parts.splice(0, d + 1),
        n.push(c);
      continue;
    }
    n.push({ ...s, source: s.body });
  }
  if (Uu.has(n[0].name))
    throw new bt(`"${n[0].name}" selector cannot be first`);
  return { capture: e.capture, parts: n };
}
function U1(t, e) {
  return Nn({ parts: t }) === Nn({ parts: e });
}
function Nn(t, e) {
  return typeof t == "string"
    ? t
    : t.parts
        .map((n, s) => {
          let o = !0;
          !e &&
            s !== t.capture &&
            (n.name === "css" ||
              (n.name === "xpath" && n.source.startsWith("//")) ||
              n.source.startsWith("..")) &&
            (o = !1);
          const l = o ? n.name + "=" : "";
          return `${s === t.capture ? "*" : ""}${l}${n.source}`;
        })
        .join(" >> ");
}
function H1(t, e) {
  const n = (s, o) => {
    for (const l of s.parts) e(l, o), Uu.has(l.name) && n(l.body.parsed, !0);
  };
  n(t, !1);
}
function q1(t) {
  let e = 0,
    n,
    s = 0;
  const o = { parts: [] },
    l = () => {
      const u = t.substring(s, e).trim(),
        d = u.indexOf("=");
      let p, y;
      d !== -1 &&
      u
        .substring(0, d)
        .trim()
        .match(/^[a-zA-Z_0-9-+:*]+$/)
        ? ((p = u.substring(0, d).trim()), (y = u.substring(d + 1)))
        : (u.length > 1 && u[0] === '"' && u[u.length - 1] === '"') ||
            (u.length > 1 && u[0] === "'" && u[u.length - 1] === "'")
          ? ((p = "text"), (y = u))
          : /^\(*\/\//.test(u) || u.startsWith("..")
            ? ((p = "xpath"), (y = u))
            : ((p = "css"), (y = u));
      let v = !1;
      if (
        (p[0] === "*" && ((v = !0), (p = p.substring(1))),
        o.parts.push({ name: p, body: y }),
        v)
      ) {
        if (o.capture !== void 0)
          throw new bt(
            "Only one of the selectors can capture using * modifier",
          );
        o.capture = o.parts.length - 1;
      }
    };
  if (!t.includes(">>")) return (e = t.length), l(), o;
  const c = () => {
    const d = t.substring(s, e).match(/^\s*text\s*=(.*)$/);
    return !!d && !!d[1];
  };
  for (; e < t.length; ) {
    const u = t[e];
    u === "\\" && e + 1 < t.length
      ? (e += 2)
      : u === n
        ? ((n = void 0), e++)
        : !n && (u === '"' || u === "'" || u === "`") && !c()
          ? ((n = u), e++)
          : !n && u === ">" && t[e + 1] === ">"
            ? (l(), (e += 2), (s = e))
            : e++;
  }
  return l(), o;
}
function Cr(t, e) {
  let n = 0,
    s = t.length === 0;
  const o = () => t[n] || "",
    l = () => {
      const E = o();
      return ++n, (s = n >= t.length), E;
    },
    c = (E) => {
      throw s
        ? new bt(`Unexpected end of selector while parsing selector \`${t}\``)
        : new bt(
            `Error while parsing selector \`${t}\` - unexpected symbol "${o()}" at position ${n}` +
              (E ? " during " + E : ""),
          );
    };
  function u() {
    for (; !s && /\s/.test(o()); ) l();
  }
  function d(E) {
    return (
      E >= "" ||
      (E >= "0" && E <= "9") ||
      (E >= "A" && E <= "Z") ||
      (E >= "a" && E <= "z") ||
      (E >= "0" && E <= "9") ||
      E === "_" ||
      E === "-"
    );
  }
  function p() {
    let E = "";
    for (u(); !s && d(o()); ) E += l();
    return E;
  }
  function y(E) {
    let T = l();
    for (T !== E && c("parsing quoted string"); !s && o() !== E; )
      o() === "\\" && l(), (T += l());
    return o() !== E && c("parsing quoted string"), (T += l()), T;
  }
  function v() {
    l() !== "/" && c("parsing regular expression");
    let E = "",
      T = !1;
    for (; !s; ) {
      if (o() === "\\") (E += l()), s && c("parsing regular expression");
      else if (T && o() === "]") T = !1;
      else if (!T && o() === "[") T = !0;
      else if (!T && o() === "/") break;
      E += l();
    }
    l() !== "/" && c("parsing regular expression");
    let C = "";
    for (; !s && o().match(/[dgimsuy]/); ) C += l();
    try {
      return new RegExp(E, C);
    } catch (O) {
      throw new bt(`Error while parsing selector \`${t}\`: ${O.message}`);
    }
  }
  function m() {
    let E = "";
    return (
      u(),
      o() === "'" || o() === '"' ? (E = y(o()).slice(1, -1)) : (E = p()),
      E || c("parsing property path"),
      E
    );
  }
  function w() {
    u();
    let E = "";
    return (
      s || (E += l()),
      !s && E !== "=" && (E += l()),
      ["=", "*=", "^=", "$=", "|=", "~="].includes(E) || c("parsing operator"),
      E
    );
  }
  function _() {
    l();
    const E = [];
    for (E.push(m()), u(); o() === "."; ) l(), E.push(m()), u();
    if (o() === "]")
      return (
        l(),
        {
          name: E.join("."),
          jsonPath: E,
          op: "<truthy>",
          value: null,
          caseSensitive: !1,
        }
      );
    const T = w();
    let C,
      O = !0;
    if ((u(), o() === "/")) {
      if (T !== "=")
        throw new bt(
          `Error while parsing selector \`${t}\` - cannot use ${T} in attribute with regular expression`,
        );
      C = v();
    } else if (o() === "'" || o() === '"')
      (C = y(o()).slice(1, -1)),
        u(),
        o() === "i" || o() === "I"
          ? ((O = !1), l())
          : (o() === "s" || o() === "S") && ((O = !0), l());
    else {
      for (C = ""; !s && (d(o()) || o() === "+" || o() === "."); ) C += l();
      C === "true"
        ? (C = !0)
        : C === "false"
          ? (C = !1)
          : e || ((C = +C), Number.isNaN(C) && c("parsing attribute value"));
    }
    if (
      (u(),
      o() !== "]" && c("parsing attribute value"),
      l(),
      T !== "=" && typeof C != "string")
    )
      throw new bt(
        `Error while parsing selector \`${t}\` - cannot use ${T} in attribute with non-string matching value - ${C}`,
      );
    return {
      name: E.join("."),
      jsonPath: E,
      op: T,
      value: C,
      caseSensitive: O,
    };
  }
  const S = { name: "", attributes: [] };
  for (S.name = p(), u(); o() === "["; ) S.attributes.push(_()), u();
  if ((s || c(void 0), !S.name && !S.attributes.length))
    throw new bt(
      `Error while parsing selector \`${t}\` - selector cannot be empty`,
    );
  return S;
}
function Zl(t, e = "'") {
  const n = JSON.stringify(t),
    s = n.substring(1, n.length - 1).replace(/\\"/g, '"');
  if (e === "'") return e + s.replace(/[']/g, "\\'") + e;
  if (e === '"') return e + s.replace(/["]/g, '\\"') + e;
  if (e === "`") return e + s.replace(/[`]/g, "`") + e;
  throw new Error("Invalid escape char");
}
function zl(t) {
  return t.charAt(0).toUpperCase() + t.substring(1);
}
function vg(t) {
  return t
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}
function Ht(t) {
  let e = "";
  for (let n = 0; n < t.length; n++) e += V1(t, n);
  return e;
}
function Ci(t) {
  return `"${Ht(t).replace(/\\ /g, " ")}"`;
}
function V1(t, e) {
  const n = t.charCodeAt(e);
  return n === 0
    ? "�"
    : (n >= 1 && n <= 31) ||
        (n >= 48 && n <= 57 && (e === 0 || (e === 1 && t.charCodeAt(0) === 45)))
      ? "\\" + n.toString(16) + " "
      : e === 0 && n === 45 && t.length === 1
        ? "\\" + t.charAt(e)
        : n >= 128 ||
            n === 45 ||
            n === 95 ||
            (n >= 48 && n <= 57) ||
            (n >= 65 && n <= 90) ||
            (n >= 97 && n <= 122)
          ? t.charAt(e)
          : "\\" + t.charAt(e);
}
let Sr;
function W1() {
  Sr = new Map();
}
function gt(t) {
  let e = Sr == null ? void 0 : Sr.get(t);
  return (
    e === void 0 &&
      ((e = t
        .replace(/[\u200b\u00ad]/g, "")
        .trim()
        .replace(/\s+/g, " ")),
      Sr == null || Sr.set(t, e)),
    e
  );
}
function ea(t) {
  return t.replace(/(^|[^\\])(\\\\)*\\(['"`])/g, "$1$2$3");
}
function wg(t) {
  return t.unicode || t.unicodeSets
    ? String(t)
    : String(t)
        .replace(/(^|[^\\])(\\\\)*(["'`])/g, "$1$2\\$3")
        .replace(/>>/g, "\\>\\>");
}
function Tt(t, e) {
  return typeof t != "string" ? wg(t) : `${JSON.stringify(t)}${e ? "s" : "i"}`;
}
function ht(t, e) {
  return typeof t != "string"
    ? wg(t)
    : `"${t.replace(/\\/g, "\\\\").replace(/["]/g, '\\"')}"${e ? "s" : "i"}`;
}
function K1(t, e, n = "") {
  if (t.length <= e) return t;
  const s = [...t];
  return s.length > e ? s.slice(0, e - n.length).join("") + n : s.join("");
}
function qp(t, e) {
  return K1(t, e, "…");
}
function Bl(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Q1(t, e) {
  const n = t.length,
    s = e.length;
  let o = 0,
    l = 0;
  const c = Array(n + 1)
    .fill(null)
    .map(() => Array(s + 1).fill(0));
  for (let u = 1; u <= n; u++)
    for (let d = 1; d <= s; d++)
      t[u - 1] === e[d - 1] &&
        ((c[u][d] = c[u - 1][d - 1] + 1),
        c[u][d] > o && ((o = c[u][d]), (l = u)));
  return t.slice(l - o, l);
}
function nr(t, e, n = !1) {
  return xg(t, e, n, 1)[0];
}
function xg(t, e, n = !1, s = 20, o) {
  try {
    return hs(new tx[t](o), Yl(e), n, s);
  } catch {
    return [e];
  }
}
function hs(t, e, n = !1, s = 20) {
  const o = [...e.parts],
    l = [];
  let c = n ? "frame-locator" : "page";
  for (let u = 0; u < o.length; u++) {
    const d = o[u],
      p = c;
    if (((c = "locator"), d.name === "nth")) {
      d.body === "0"
        ? l.push([
            t.generateLocator(p, "first", ""),
            t.generateLocator(p, "nth", "0"),
          ])
        : d.body === "-1"
          ? l.push([
              t.generateLocator(p, "last", ""),
              t.generateLocator(p, "nth", "-1"),
            ])
          : l.push([t.generateLocator(p, "nth", d.body)]);
      continue;
    }
    if (d.name === "visible") {
      l.push([
        t.generateLocator(p, "visible", d.body),
        t.generateLocator(p, "default", `visible=${d.body}`),
      ]);
      continue;
    }
    if (d.name === "internal:text") {
      const { exact: _, text: S } = Ai(d.body);
      l.push([t.generateLocator(p, "text", S, { exact: _ })]);
      continue;
    }
    if (d.name === "internal:has-text") {
      const { exact: _, text: S } = Ai(d.body);
      if (!_) {
        l.push([t.generateLocator(p, "has-text", S, { exact: _ })]);
        continue;
      }
    }
    if (d.name === "internal:has-not-text") {
      const { exact: _, text: S } = Ai(d.body);
      if (!_) {
        l.push([t.generateLocator(p, "has-not-text", S, { exact: _ })]);
        continue;
      }
    }
    if (d.name === "internal:has") {
      const _ = hs(t, d.body.parsed, !1, s);
      l.push(_.map((S) => t.generateLocator(p, "has", S)));
      continue;
    }
    if (d.name === "internal:has-not") {
      const _ = hs(t, d.body.parsed, !1, s);
      l.push(_.map((S) => t.generateLocator(p, "hasNot", S)));
      continue;
    }
    if (d.name === "internal:and") {
      const _ = hs(t, d.body.parsed, !1, s);
      l.push(_.map((S) => t.generateLocator(p, "and", S)));
      continue;
    }
    if (d.name === "internal:or") {
      const _ = hs(t, d.body.parsed, !1, s);
      l.push(_.map((S) => t.generateLocator(p, "or", S)));
      continue;
    }
    if (d.name === "internal:chain") {
      const _ = hs(t, d.body.parsed, !1, s);
      l.push(_.map((S) => t.generateLocator(p, "chain", S)));
      continue;
    }
    if (d.name === "internal:label") {
      const { exact: _, text: S } = Ai(d.body);
      l.push([t.generateLocator(p, "label", S, { exact: _ })]);
      continue;
    }
    if (d.name === "internal:role") {
      const _ = Cr(d.body, !0),
        S = { attrs: [] };
      for (const E of _.attributes)
        E.name === "name"
          ? ((S.exact = E.caseSensitive), (S.name = E.value))
          : (E.name === "level" &&
              typeof E.value == "string" &&
              (E.value = +E.value),
            S.attrs.push({
              name: E.name === "include-hidden" ? "includeHidden" : E.name,
              value: E.value,
            }));
      l.push([t.generateLocator(p, "role", _.name, S)]);
      continue;
    }
    if (d.name === "internal:testid") {
      const _ = Cr(d.body, !0),
        { value: S } = _.attributes[0];
      l.push([t.generateLocator(p, "test-id", S)]);
      continue;
    }
    if (d.name === "internal:attr") {
      const _ = Cr(d.body, !0),
        { name: S, value: E, caseSensitive: T } = _.attributes[0],
        C = E,
        O = !!T;
      if (S === "placeholder") {
        l.push([t.generateLocator(p, "placeholder", C, { exact: O })]);
        continue;
      }
      if (S === "alt") {
        l.push([t.generateLocator(p, "alt", C, { exact: O })]);
        continue;
      }
      if (S === "title") {
        l.push([t.generateLocator(p, "title", C, { exact: O })]);
        continue;
      }
    }
    if (d.name === "internal:control" && d.body === "enter-frame") {
      const _ = l[l.length - 1],
        S = o[u - 1],
        E = _.map((T) =>
          t.chainLocators([T, t.generateLocator(p, "frame", "")]),
        );
      ["xpath", "css"].includes(S.name) &&
        E.push(
          t.generateLocator(p, "frame-locator", Nn({ parts: [S] })),
          t.generateLocator(p, "frame-locator", Nn({ parts: [S] }, !0)),
        ),
        _.splice(0, _.length, ...E),
        (c = "frame-locator");
      continue;
    }
    const y = o[u + 1],
      v = Nn({ parts: [d] }),
      m = t.generateLocator(p, "default", v);
    if (y && ["internal:has-text", "internal:has-not-text"].includes(y.name)) {
      const { exact: _, text: S } = Ai(y.body);
      if (!_) {
        const E = t.generateLocator(
            "locator",
            y.name === "internal:has-text" ? "has-text" : "has-not-text",
            S,
            { exact: _ },
          ),
          T = {};
        y.name === "internal:has-text" ? (T.hasText = S) : (T.hasNotText = S);
        const C = t.generateLocator(p, "default", v, T);
        l.push([t.chainLocators([m, E]), C]), u++;
        continue;
      }
    }
    let w;
    if (["xpath", "css"].includes(d.name)) {
      const _ = Nn({ parts: [d] }, !0);
      w = t.generateLocator(p, "default", _);
    }
    l.push([m, w].filter(Boolean));
  }
  return X1(t, l, s);
}
function X1(t, e, n) {
  const s = e.map(() => ""),
    o = [],
    l = (c) => {
      if (c === e.length) return o.push(t.chainLocators(s)), o.length < n;
      for (const u of e[c]) if (((s[c] = u), !l(c + 1))) return !1;
      return !0;
    };
  return l(0), o;
}
function Ai(t) {
  let e = !1;
  const n = t.match(/^\/(.*)\/([igm]*)$/);
  return n
    ? { text: new RegExp(n[1], n[2]) }
    : (t.endsWith('"')
        ? ((t = JSON.parse(t)), (e = !0))
        : t.endsWith('"s')
          ? ((t = JSON.parse(t.substring(0, t.length - 1))), (e = !0))
          : t.endsWith('"i') &&
            ((t = JSON.parse(t.substring(0, t.length - 1))), (e = !1)),
      { exact: e, text: t });
}
class G1 {
  constructor(e) {
    this.preferredQuote = e;
  }
  generateLocator(e, n, s, o = {}) {
    switch (n) {
      case "default":
        return o.hasText !== void 0
          ? `locator(${this.quote(s)}, { hasText: ${this.toHasText(o.hasText)} })`
          : o.hasNotText !== void 0
            ? `locator(${this.quote(s)}, { hasNotText: ${this.toHasText(o.hasNotText)} })`
            : `locator(${this.quote(s)})`;
      case "frame-locator":
        return `frameLocator(${this.quote(s)})`;
      case "frame":
        return "contentFrame()";
      case "nth":
        return `nth(${s})`;
      case "first":
        return "first()";
      case "last":
        return "last()";
      case "visible":
        return `filter({ visible: ${s === "true" ? "true" : "false"} })`;
      case "role":
        const l = [];
        tt(o.name)
          ? l.push(`name: ${this.regexToSourceString(o.name)}`)
          : typeof o.name == "string" &&
            (l.push(`name: ${this.quote(o.name)}`),
            o.exact && l.push("exact: true"));
        for (const { name: u, value: d } of o.attrs)
          l.push(`${u}: ${typeof d == "string" ? this.quote(d) : d}`);
        const c = l.length ? `, { ${l.join(", ")} }` : "";
        return `getByRole(${this.quote(s)}${c})`;
      case "has-text":
        return `filter({ hasText: ${this.toHasText(s)} })`;
      case "has-not-text":
        return `filter({ hasNotText: ${this.toHasText(s)} })`;
      case "has":
        return `filter({ has: ${s} })`;
      case "hasNot":
        return `filter({ hasNot: ${s} })`;
      case "and":
        return `and(${s})`;
      case "or":
        return `or(${s})`;
      case "chain":
        return `locator(${s})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(s)})`;
      case "text":
        return this.toCallWithExact("getByText", s, !!o.exact);
      case "alt":
        return this.toCallWithExact("getByAltText", s, !!o.exact);
      case "placeholder":
        return this.toCallWithExact("getByPlaceholder", s, !!o.exact);
      case "label":
        return this.toCallWithExact("getByLabel", s, !!o.exact);
      case "title":
        return this.toCallWithExact("getByTitle", s, !!o.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(e) {
    return e.join(".");
  }
  regexToSourceString(e) {
    return ea(String(e));
  }
  toCallWithExact(e, n, s) {
    return tt(n)
      ? `${e}(${this.regexToSourceString(n)})`
      : s
        ? `${e}(${this.quote(n)}, { exact: true })`
        : `${e}(${this.quote(n)})`;
  }
  toHasText(e) {
    return tt(e) ? this.regexToSourceString(e) : this.quote(e);
  }
  toTestIdValue(e) {
    return tt(e) ? this.regexToSourceString(e) : this.quote(e);
  }
  quote(e) {
    return Zl(e, this.preferredQuote ?? "'");
  }
}
class J1 {
  generateLocator(e, n, s, o = {}) {
    switch (n) {
      case "default":
        return o.hasText !== void 0
          ? `locator(${this.quote(s)}, has_text=${this.toHasText(o.hasText)})`
          : o.hasNotText !== void 0
            ? `locator(${this.quote(s)}, has_not_text=${this.toHasText(o.hasNotText)})`
            : `locator(${this.quote(s)})`;
      case "frame-locator":
        return `frame_locator(${this.quote(s)})`;
      case "frame":
        return "content_frame";
      case "nth":
        return `nth(${s})`;
      case "first":
        return "first";
      case "last":
        return "last";
      case "visible":
        return `filter(visible=${s === "true" ? "True" : "False"})`;
      case "role":
        const l = [];
        tt(o.name)
          ? l.push(`name=${this.regexToString(o.name)}`)
          : typeof o.name == "string" &&
            (l.push(`name=${this.quote(o.name)}`),
            o.exact && l.push("exact=True"));
        for (const { name: u, value: d } of o.attrs) {
          let p = typeof d == "string" ? this.quote(d) : d;
          typeof d == "boolean" && (p = d ? "True" : "False"),
            l.push(`${vg(u)}=${p}`);
        }
        const c = l.length ? `, ${l.join(", ")}` : "";
        return `get_by_role(${this.quote(s)}${c})`;
      case "has-text":
        return `filter(has_text=${this.toHasText(s)})`;
      case "has-not-text":
        return `filter(has_not_text=${this.toHasText(s)})`;
      case "has":
        return `filter(has=${s})`;
      case "hasNot":
        return `filter(has_not=${s})`;
      case "and":
        return `and_(${s})`;
      case "or":
        return `or_(${s})`;
      case "chain":
        return `locator(${s})`;
      case "test-id":
        return `get_by_test_id(${this.toTestIdValue(s)})`;
      case "text":
        return this.toCallWithExact("get_by_text", s, !!o.exact);
      case "alt":
        return this.toCallWithExact("get_by_alt_text", s, !!o.exact);
      case "placeholder":
        return this.toCallWithExact("get_by_placeholder", s, !!o.exact);
      case "label":
        return this.toCallWithExact("get_by_label", s, !!o.exact);
      case "title":
        return this.toCallWithExact("get_by_title", s, !!o.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(e) {
    return e.join(".");
  }
  regexToString(e) {
    const n = e.flags.includes("i") ? ", re.IGNORECASE" : "";
    return `re.compile(r"${ea(e.source).replace(/\\\//, "/").replace(/"/g, '\\"')}"${n})`;
  }
  toCallWithExact(e, n, s) {
    return tt(n)
      ? `${e}(${this.regexToString(n)})`
      : s
        ? `${e}(${this.quote(n)}, exact=True)`
        : `${e}(${this.quote(n)})`;
  }
  toHasText(e) {
    return tt(e) ? this.regexToString(e) : `${this.quote(e)}`;
  }
  toTestIdValue(e) {
    return tt(e) ? this.regexToString(e) : this.quote(e);
  }
  quote(e) {
    return Zl(e, '"');
  }
}
class Y1 {
  generateLocator(e, n, s, o = {}) {
    let l;
    switch (e) {
      case "page":
        l = "Page";
        break;
      case "frame-locator":
        l = "FrameLocator";
        break;
      case "locator":
        l = "Locator";
        break;
    }
    switch (n) {
      case "default":
        return o.hasText !== void 0
          ? `locator(${this.quote(s)}, new ${l}.LocatorOptions().setHasText(${this.toHasText(o.hasText)}))`
          : o.hasNotText !== void 0
            ? `locator(${this.quote(s)}, new ${l}.LocatorOptions().setHasNotText(${this.toHasText(o.hasNotText)}))`
            : `locator(${this.quote(s)})`;
      case "frame-locator":
        return `frameLocator(${this.quote(s)})`;
      case "frame":
        return "contentFrame()";
      case "nth":
        return `nth(${s})`;
      case "first":
        return "first()";
      case "last":
        return "last()";
      case "visible":
        return `filter(new ${l}.FilterOptions().setVisible(${s === "true" ? "true" : "false"}))`;
      case "role":
        const c = [];
        tt(o.name)
          ? c.push(`.setName(${this.regexToString(o.name)})`)
          : typeof o.name == "string" &&
            (c.push(`.setName(${this.quote(o.name)})`),
            o.exact && c.push(".setExact(true)"));
        for (const { name: d, value: p } of o.attrs)
          c.push(`.set${zl(d)}(${typeof p == "string" ? this.quote(p) : p})`);
        const u = c.length ? `, new ${l}.GetByRoleOptions()${c.join("")}` : "";
        return `getByRole(AriaRole.${vg(s).toUpperCase()}${u})`;
      case "has-text":
        return `filter(new ${l}.FilterOptions().setHasText(${this.toHasText(s)}))`;
      case "has-not-text":
        return `filter(new ${l}.FilterOptions().setHasNotText(${this.toHasText(s)}))`;
      case "has":
        return `filter(new ${l}.FilterOptions().setHas(${s}))`;
      case "hasNot":
        return `filter(new ${l}.FilterOptions().setHasNot(${s}))`;
      case "and":
        return `and(${s})`;
      case "or":
        return `or(${s})`;
      case "chain":
        return `locator(${s})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(s)})`;
      case "text":
        return this.toCallWithExact(l, "getByText", s, !!o.exact);
      case "alt":
        return this.toCallWithExact(l, "getByAltText", s, !!o.exact);
      case "placeholder":
        return this.toCallWithExact(l, "getByPlaceholder", s, !!o.exact);
      case "label":
        return this.toCallWithExact(l, "getByLabel", s, !!o.exact);
      case "title":
        return this.toCallWithExact(l, "getByTitle", s, !!o.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(e) {
    return e.join(".");
  }
  regexToString(e) {
    const n = e.flags.includes("i") ? ", Pattern.CASE_INSENSITIVE" : "";
    return `Pattern.compile(${this.quote(ea(e.source))}${n})`;
  }
  toCallWithExact(e, n, s, o) {
    return tt(s)
      ? `${n}(${this.regexToString(s)})`
      : o
        ? `${n}(${this.quote(s)}, new ${e}.${zl(n)}Options().setExact(true))`
        : `${n}(${this.quote(s)})`;
  }
  toHasText(e) {
    return tt(e) ? this.regexToString(e) : this.quote(e);
  }
  toTestIdValue(e) {
    return tt(e) ? this.regexToString(e) : this.quote(e);
  }
  quote(e) {
    return Zl(e, '"');
  }
}
class Z1 {
  generateLocator(e, n, s, o = {}) {
    switch (n) {
      case "default":
        return o.hasText !== void 0
          ? `Locator(${this.quote(s)}, new() { ${this.toHasText(o.hasText)} })`
          : o.hasNotText !== void 0
            ? `Locator(${this.quote(s)}, new() { ${this.toHasNotText(o.hasNotText)} })`
            : `Locator(${this.quote(s)})`;
      case "frame-locator":
        return `FrameLocator(${this.quote(s)})`;
      case "frame":
        return "ContentFrame";
      case "nth":
        return `Nth(${s})`;
      case "first":
        return "First";
      case "last":
        return "Last";
      case "visible":
        return `Filter(new() { Visible = ${s === "true" ? "true" : "false"} })`;
      case "role":
        const l = [];
        tt(o.name)
          ? l.push(`NameRegex = ${this.regexToString(o.name)}`)
          : typeof o.name == "string" &&
            (l.push(`Name = ${this.quote(o.name)}`),
            o.exact && l.push("Exact = true"));
        for (const { name: u, value: d } of o.attrs)
          l.push(`${zl(u)} = ${typeof d == "string" ? this.quote(d) : d}`);
        const c = l.length ? `, new() { ${l.join(", ")} }` : "";
        return `GetByRole(AriaRole.${zl(s)}${c})`;
      case "has-text":
        return `Filter(new() { ${this.toHasText(s)} })`;
      case "has-not-text":
        return `Filter(new() { ${this.toHasNotText(s)} })`;
      case "has":
        return `Filter(new() { Has = ${s} })`;
      case "hasNot":
        return `Filter(new() { HasNot = ${s} })`;
      case "and":
        return `And(${s})`;
      case "or":
        return `Or(${s})`;
      case "chain":
        return `Locator(${s})`;
      case "test-id":
        return `GetByTestId(${this.toTestIdValue(s)})`;
      case "text":
        return this.toCallWithExact("GetByText", s, !!o.exact);
      case "alt":
        return this.toCallWithExact("GetByAltText", s, !!o.exact);
      case "placeholder":
        return this.toCallWithExact("GetByPlaceholder", s, !!o.exact);
      case "label":
        return this.toCallWithExact("GetByLabel", s, !!o.exact);
      case "title":
        return this.toCallWithExact("GetByTitle", s, !!o.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(e) {
    return e.join(".");
  }
  regexToString(e) {
    const n = e.flags.includes("i") ? ", RegexOptions.IgnoreCase" : "";
    return `new Regex(${this.quote(ea(e.source))}${n})`;
  }
  toCallWithExact(e, n, s) {
    return tt(n)
      ? `${e}(${this.regexToString(n)})`
      : s
        ? `${e}(${this.quote(n)}, new() { Exact = true })`
        : `${e}(${this.quote(n)})`;
  }
  toHasText(e) {
    return tt(e)
      ? `HasTextRegex = ${this.regexToString(e)}`
      : `HasText = ${this.quote(e)}`;
  }
  toTestIdValue(e) {
    return tt(e) ? this.regexToString(e) : this.quote(e);
  }
  toHasNotText(e) {
    return tt(e)
      ? `HasNotTextRegex = ${this.regexToString(e)}`
      : `HasNotText = ${this.quote(e)}`;
  }
  quote(e) {
    return Zl(e, '"');
  }
}
class ex {
  generateLocator(e, n, s, o = {}) {
    return JSON.stringify({ kind: n, body: s, options: o });
  }
  chainLocators(e) {
    const n = e.map((s) => JSON.parse(s));
    for (let s = 0; s < n.length - 1; ++s) n[s].next = n[s + 1];
    return JSON.stringify(n[0]);
  }
}
const tx = { javascript: G1, python: J1, java: Y1, csharp: Z1, jsonl: ex };
function tt(t) {
  return t instanceof RegExp;
}
const Vp = new Map();
function nx({
  name: t,
  rootItem: e,
  render: n,
  title: s,
  icon: o,
  isError: l,
  isVisible: c,
  selectedItem: u,
  onAccepted: d,
  onSelected: p,
  onHighlighted: y,
  treeState: v,
  setTreeState: m,
  noItemsMessage: w,
  dataTestId: _,
  autoExpandDepth: S,
}) {
  const E = P.useMemo(
      () => rx(e, u, v.expandedItems, S || 0, c),
      [e, u, v, S, c],
    ),
    T = P.useRef(null),
    [C, O] = P.useState(),
    [R, D] = P.useState(!1);
  P.useEffect(() => {
    y == null || y(C);
  }, [y, C]),
    P.useEffect(() => {
      const U = T.current;
      if (!U) return;
      const B = () => {
        Vp.set(t, U.scrollTop);
      };
      return (
        U.addEventListener("scroll", B, { passive: !0 }),
        () => U.removeEventListener("scroll", B)
      );
    }, [t]),
    P.useEffect(() => {
      T.current && (T.current.scrollTop = Vp.get(t) || 0);
    }, [t]);
  const F = P.useCallback(
    (U) => {
      const { expanded: B } = E.get(U);
      if (B) {
        for (let j = u; j; j = j.parent)
          if (j === U) {
            p == null || p(U);
            break;
          }
        v.expandedItems.set(U.id, !1);
      } else v.expandedItems.set(U.id, !0);
      m({ ...v });
    },
    [E, u, p, v, m],
  );
  return x.jsx("div", {
    className: ze("tree-view vbox", t + "-tree-view"),
    role: "tree",
    "data-testid": _ || t + "-tree",
    children: x.jsxs("div", {
      className: ze("tree-view-content"),
      tabIndex: 0,
      onKeyDown: (U) => {
        if (u && U.key === "Enter") {
          d == null || d(u);
          return;
        }
        if (
          U.key !== "ArrowDown" &&
          U.key !== "ArrowUp" &&
          U.key !== "ArrowLeft" &&
          U.key !== "ArrowRight"
        )
          return;
        if (
          (U.stopPropagation(), U.preventDefault(), u && U.key === "ArrowLeft")
        ) {
          const { expanded: j, parent: Q } = E.get(u);
          j
            ? (v.expandedItems.set(u.id, !1), m({ ...v }))
            : Q && (p == null || p(Q));
          return;
        }
        if (u && U.key === "ArrowRight") {
          u.children.length && (v.expandedItems.set(u.id, !0), m({ ...v }));
          return;
        }
        let B = u;
        if (
          (U.key === "ArrowDown" &&
            (u ? (B = E.get(u).next) : E.size && (B = [...E.keys()][0])),
          U.key === "ArrowUp")
        ) {
          if (u) B = E.get(u).prev;
          else if (E.size) {
            const j = [...E.keys()];
            B = j[j.length - 1];
          }
        }
        y == null || y(void 0), B && (D(!0), p == null || p(B)), O(void 0);
      },
      ref: T,
      children: [
        w &&
          E.size === 0 &&
          x.jsx("div", { className: "tree-view-empty", children: w }),
        e.children.map(
          (U) =>
            E.get(U) &&
            x.jsx(
              Sg,
              {
                item: U,
                treeItems: E,
                selectedItem: u,
                onSelected: p,
                onAccepted: d,
                isError: l,
                toggleExpanded: F,
                highlightedItem: C,
                setHighlightedItem: O,
                render: n,
                icon: o,
                title: s,
                isKeyboardNavigation: R,
                setIsKeyboardNavigation: D,
              },
              U.id,
            ),
        ),
      ],
    }),
  });
}
function Sg({
  item: t,
  treeItems: e,
  selectedItem: n,
  onSelected: s,
  highlightedItem: o,
  setHighlightedItem: l,
  isError: c,
  onAccepted: u,
  toggleExpanded: d,
  render: p,
  title: y,
  icon: v,
  isKeyboardNavigation: m,
  setIsKeyboardNavigation: w,
}) {
  const _ = P.useId(),
    S = P.useRef(null);
  P.useEffect(() => {
    n === t && m && S.current && (Km(S.current), w(!1));
  }, [t, n, m, w]);
  const E = e.get(t),
    T = E.depth,
    C = E.expanded;
  let O = "codicon-blank";
  typeof C == "boolean" &&
    (O = C ? "codicon-chevron-down" : "codicon-chevron-right");
  const R = p(t),
    D = C && t.children.length ? t.children : [],
    F = y == null ? void 0 : y(t),
    U = (v == null ? void 0 : v(t)) || "codicon-blank";
  return x.jsxs("div", {
    ref: S,
    role: "treeitem",
    "aria-selected": t === n,
    "aria-expanded": C,
    "aria-controls": _,
    title: F,
    className: "vbox",
    style: { flex: "none" },
    children: [
      x.jsxs("div", {
        onDoubleClick: () => (u == null ? void 0 : u(t)),
        className: ze(
          "tree-view-entry",
          n === t && "selected",
          o === t && "highlighted",
          (c == null ? void 0 : c(t)) && "error",
        ),
        onClick: () => (s == null ? void 0 : s(t)),
        onMouseEnter: () => l(t),
        onMouseLeave: () => l(void 0),
        children: [
          T
            ? new Array(T)
                .fill(0)
                .map((B, j) =>
                  x.jsx(
                    "div",
                    { className: "tree-view-indent" },
                    "indent-" + j,
                  ),
                )
            : void 0,
          x.jsx("div", {
            "aria-hidden": "true",
            className: "codicon " + O,
            style: { minWidth: 16, marginRight: 4 },
            onDoubleClick: (B) => {
              B.preventDefault(), B.stopPropagation();
            },
            onClick: (B) => {
              B.stopPropagation(), B.preventDefault(), d(t);
            },
          }),
          v &&
            x.jsx("div", {
              className: "codicon " + U,
              style: { minWidth: 16, marginRight: 4 },
              "aria-label": "[" + U.replace("codicon", "icon") + "]",
            }),
          typeof R == "string"
            ? x.jsx("div", {
                style: { textOverflow: "ellipsis", overflow: "hidden" },
                children: R,
              })
            : R,
        ],
      }),
      !!D.length &&
        x.jsx("div", {
          id: _,
          role: "group",
          children: D.map(
            (B) =>
              e.get(B) &&
              x.jsx(
                Sg,
                {
                  item: B,
                  treeItems: e,
                  selectedItem: n,
                  onSelected: s,
                  onAccepted: u,
                  isError: c,
                  toggleExpanded: d,
                  highlightedItem: o,
                  setHighlightedItem: l,
                  render: p,
                  title: y,
                  icon: v,
                  isKeyboardNavigation: m,
                  setIsKeyboardNavigation: w,
                },
                B.id,
              ),
          ),
        }),
    ],
  });
}
function rx(t, e, n, s, o = () => !0) {
  if (!o(t)) return new Map();
  const l = new Map(),
    c = new Set();
  for (let p = e == null ? void 0 : e.parent; p; p = p.parent) c.add(p.id);
  let u = null;
  const d = (p, y) => {
    for (const v of p.children) {
      if (!o(v)) continue;
      const m = c.has(v.id) || n.get(v.id),
        w = s > y && l.size < 25 && m !== !1,
        _ = v.children.length ? (m ?? w) : void 0,
        S = {
          depth: y,
          expanded: _,
          parent: t === p ? null : p,
          next: null,
          prev: u,
        };
      u && (l.get(u).next = v), (u = v), l.set(v, S), _ && d(v, y + 1);
    }
  };
  return d(t, 0), l;
}
const Vt = P.forwardRef(function (
    {
      children: e,
      title: n = "",
      icon: s,
      disabled: o = !1,
      toggled: l = !1,
      onClick: c = () => {},
      style: u,
      testId: d,
      className: p,
      ariaLabel: y,
    },
    v,
  ) {
    return x.jsxs("button", {
      ref: v,
      className: ze(p, "toolbar-button", s, l && "toggled"),
      onMouseDown: Wp,
      onClick: c,
      onDoubleClick: Wp,
      title: n,
      disabled: !!o,
      style: u,
      "data-testid": d,
      "aria-label": y || n,
      children: [
        s &&
          x.jsx("span", {
            className: `codicon codicon-${s}`,
            style: e ? { marginRight: 5 } : {},
          }),
        e,
      ],
    });
  }),
  Wp = (t) => {
    t.stopPropagation(), t.preventDefault();
  };
function _g(t) {
  return t === "scheduled"
    ? "codicon-clock"
    : t === "running"
      ? "codicon-loading"
      : t === "failed"
        ? "codicon-error"
        : t === "passed"
          ? "codicon-check"
          : t === "skipped"
            ? "codicon-circle-slash"
            : "codicon-circle-outline";
}
function sx(t) {
  return t === "scheduled"
    ? "Pending"
    : t === "running"
      ? "Running"
      : t === "failed"
        ? "Failed"
        : t === "passed"
          ? "Passed"
          : t === "skipped"
            ? "Skipped"
            : "Did not run";
}
const ix = nx,
  ox = ({
    actions: t,
    selectedAction: e,
    selectedTime: n,
    setSelectedTime: s,
    sdkLanguage: o,
    onSelected: l,
    onHighlighted: c,
    revealConsole: u,
    revealAttachment: d,
    isLive: p,
  }) => {
    const [y, v] = P.useState({ expandedItems: new Map() }),
      { rootItem: m, itemMap: w } = P.useMemo(() => v1(t), [t]),
      { selectedItem: _ } = P.useMemo(
        () => ({ selectedItem: e ? w.get(e.callId) : void 0 }),
        [w, e],
      ),
      S = P.useCallback((D) => {
        var F, U;
        return !!(
          (U = (F = D.action) == null ? void 0 : F.error) != null && U.message
        );
      }, []),
      E = P.useCallback(
        (D) => s({ minimum: D.action.startTime, maximum: D.action.endTime }),
        [s],
      ),
      T = P.useCallback(
        (D) =>
          af(D.action, {
            sdkLanguage: o,
            revealConsole: u,
            revealAttachment: d,
            isLive: p,
            showDuration: !0,
            showBadges: !0,
          }),
        [p, u, d, o],
      ),
      C = P.useCallback(
        (D) =>
          !n ||
          !D.action ||
          (D.action.startTime <= n.maximum && D.action.endTime >= n.minimum),
        [n],
      ),
      O = P.useCallback(
        (D) => {
          l == null || l(D.action);
        },
        [l],
      ),
      R = P.useCallback(
        (D) => {
          c == null || c(D == null ? void 0 : D.action);
        },
        [c],
      );
    return x.jsxs("div", {
      className: "vbox",
      children: [
        n &&
          x.jsxs("div", {
            className: "action-list-show-all",
            onClick: () => s(void 0),
            children: [
              x.jsx("span", { className: "codicon codicon-triangle-left" }),
              "Show all",
            ],
          }),
        x.jsx(ix, {
          name: "actions",
          rootItem: m,
          treeState: y,
          setTreeState: v,
          selectedItem: _,
          onSelected: O,
          onHighlighted: R,
          onAccepted: E,
          isError: S,
          isVisible: C,
          render: T,
        }),
      ],
    });
  },
  af = (t, e) => {
    var _, S;
    const {
        sdkLanguage: n,
        revealConsole: s,
        revealAttachment: o,
        isLive: l,
        showDuration: c,
        showBadges: u,
      } = e,
      { errors: d, warnings: p } = S1(t),
      y = !!((_ = t.attachments) != null && _.length) && !!o,
      v = kg(t, n || "javascript"),
      m =
        t.class === "Test" &&
        t.method === "step" &&
        ((S = t.annotations) == null
          ? void 0
          : S.some((E) => E.type === "skip"));
    let w = "";
    return (
      t.endTime
        ? (w = mt(t.endTime - t.startTime))
        : t.error
          ? (w = "Timed out")
          : l || (w = "-"),
      x.jsxs(x.Fragment, {
        children: [
          x.jsxs("div", {
            className: "action-title",
            title: t.apiName,
            children: [
              x.jsx("span", { children: t.apiName }),
              v &&
                (v.type === "locator"
                  ? x.jsxs(x.Fragment, {
                      children: [
                        x.jsx("span", {
                          className:
                            "action-parameter action-locator-parameter",
                          children: v.value,
                        }),
                        v.childDisplayString &&
                          x.jsx("span", {
                            className:
                              "action-parameter action-generic-parameter",
                            children: v.childDisplayString.value,
                          }),
                      ],
                    })
                  : x.jsx("span", {
                      className: "action-parameter action-generic-parameter",
                      children: v.value,
                    })),
              t.method === "goto" &&
                t.params.url &&
                x.jsx("div", {
                  className: "action-url",
                  title: t.params.url,
                  children: t.params.url,
                }),
              t.class === "APIRequestContext" &&
                t.params.url &&
                x.jsx("div", {
                  className: "action-url",
                  title: t.params.url,
                  children: lx(t.params.url),
                }),
            ],
          }),
          (c || u || y || m) && x.jsx("div", { className: "spacer" }),
          y &&
            x.jsx(Vt, {
              icon: "attach",
              title: "Open Attachment",
              onClick: () => o(t.attachments[0]),
            }),
          c &&
            !m &&
            x.jsx("div", {
              className: "action-duration",
              children:
                w || x.jsx("span", { className: "codicon codicon-loading" }),
            }),
          m &&
            x.jsx("span", {
              className: ze("action-skipped", "codicon", _g("skipped")),
              title: "skipped",
            }),
          u &&
            x.jsxs("div", {
              className: "action-icons",
              onClick: () => (s == null ? void 0 : s()),
              children: [
                !!d &&
                  x.jsxs("div", {
                    className: "action-icon",
                    children: [
                      x.jsx("span", { className: "codicon codicon-error" }),
                      x.jsx("span", {
                        className: "action-icon-value",
                        children: d,
                      }),
                    ],
                  }),
                !!p &&
                  x.jsxs("div", {
                    className: "action-icon",
                    children: [
                      x.jsx("span", { className: "codicon codicon-warning" }),
                      x.jsx("span", {
                        className: "action-icon-value",
                        children: p,
                      }),
                    ],
                  }),
              ],
            }),
        ],
      })
    );
  };
function lx(t) {
  try {
    const e = new URL(t);
    return e.pathname + e.search;
  } catch {
    return t;
  }
}
const ax = (t) => {
    switch (t.method) {
      case "clockPauseAt":
      case "clockSetFixedTime":
      case "clockSetSystemTime":
        return t.params.timeString === void 0 && t.params.timeNumber === void 0
          ? void 0
          : {
              type: "generic",
              value: new Date(
                t.params.timeString ?? t.params.timeNumber,
              ).toLocaleString(void 0, { timeZone: "UTC" }),
            };
      case "clockFastForward":
      case "clockRunFor":
        return t.params.ticksNumber === void 0 &&
          t.params.ticksString === void 0
          ? void 0
          : {
              type: "generic",
              value: t.params.ticksString ?? `${t.params.ticksNumber}ms`,
            };
    }
  },
  cx = (t) => {
    switch (t.method) {
      case "press":
      case "keyboardPress":
      case "keyboardDown":
      case "keyboardUp":
        return t.params.key === void 0
          ? void 0
          : { type: "generic", value: t.params.key };
      case "type":
      case "fill":
      case "keyboardType":
      case "keyboardInsertText": {
        const e = t.params.text ?? t.params.value;
        return e === void 0 ? void 0 : { type: "generic", value: `"${e}"` };
      }
    }
  },
  ux = (t) => {
    switch (t.method) {
      case "click":
      case "dblclick":
      case "mouseClick":
      case "mouseMove":
        return t.params.x === void 0 || t.params.y === void 0
          ? void 0
          : { type: "generic", value: `(${t.params.x}, ${t.params.y})` };
      case "mouseWheel":
        return t.params.deltaX === void 0 || t.params.deltaY === void 0
          ? void 0
          : {
              type: "generic",
              value: `(${t.params.deltaX}, ${t.params.deltaY})`,
            };
    }
  },
  fx = (t) => {
    switch (t.method) {
      case "tap":
        return t.params.x === void 0 || t.params.y === void 0
          ? void 0
          : { type: "generic", value: `(${t.params.x}, ${t.params.y})` };
    }
  },
  kg = (t, e, n = !1) => {
    const s = t.params;
    if (!n && s.selector !== void 0)
      return {
        type: "locator",
        value: nr(e, s.selector),
        childDisplayString: kg(t, e, !0),
      };
    switch (t.class.toLowerCase()) {
      case "browsercontext":
        return ax(t);
      case "page":
      case "frame":
      case "elementhandle":
        return cx(t) ?? ux(t) ?? fx(t);
    }
  },
  Eg = ({ value: t, description: e }) => {
    const [n, s] = P.useState("copy"),
      o = P.useCallback(() => {
        (typeof t == "function" ? t() : Promise.resolve(t)).then(
          (c) => {
            navigator.clipboard.writeText(c).then(
              () => {
                s("check"),
                  setTimeout(() => {
                    s("copy");
                  }, 3e3);
              },
              () => {
                s("close");
              },
            );
          },
          () => {
            s("close");
          },
        );
      }, [t]);
    return x.jsx(Vt, { title: e || "Copy", icon: n, onClick: o });
  },
  Al = ({ value: t, description: e, copiedDescription: n = e, style: s }) => {
    const [o, l] = P.useState(!1),
      c = P.useCallback(async () => {
        const u = typeof t == "function" ? await t() : t;
        await navigator.clipboard.writeText(u),
          l(!0),
          setTimeout(() => l(!1), 3e3);
      }, [t]);
    return x.jsx(Vt, {
      style: s,
      title: e,
      onClick: c,
      className: "copy-to-clipboard-text-button",
      children: o ? n : e,
    });
  },
  Ir = ({ text: t }) =>
    x.jsx("div", {
      className: "fill",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: "bold",
        opacity: 0.5,
      },
      children: t,
    }),
  dx = ({ action: t, startTimeOffset: e, sdkLanguage: n }) => {
    const s = P.useMemo(
      () =>
        Object.keys((t == null ? void 0 : t.params) ?? {}).filter(
          (c) => c !== "info",
        ),
      [t],
    );
    if (!t) return x.jsx(Ir, { text: "No action selected" });
    const o = t.startTime - e,
      l = mt(o);
    return x.jsxs("div", {
      className: "call-tab",
      children: [
        x.jsx("div", { className: "call-line", children: t.apiName }),
        x.jsx("div", { className: "call-section", children: "Time" }),
        x.jsx(Kp, { name: "start:", value: l }),
        x.jsx(Kp, { name: "duration:", value: hx(t) }),
        !!s.length &&
          x.jsxs(x.Fragment, {
            children: [
              x.jsx("div", {
                className: "call-section",
                children: "Parameters",
              }),
              s.map((c) => Qp(Xp(t, c, t.params[c], n))),
            ],
          }),
        !!t.result &&
          x.jsxs(x.Fragment, {
            children: [
              x.jsx("div", {
                className: "call-section",
                children: "Return value",
              }),
              Object.keys(t.result).map((c) => Qp(Xp(t, c, t.result[c], n))),
            ],
          }),
      ],
    });
  },
  Kp = ({ name: t, value: e }) =>
    x.jsxs("div", {
      className: "call-line",
      children: [
        t,
        x.jsx("span", {
          className: "call-value datetime",
          title: e,
          children: e,
        }),
      ],
    });
function hx(t) {
  return t.endTime
    ? mt(t.endTime - t.startTime)
    : t.error
      ? "Timed Out"
      : "Running";
}
function Qp(t) {
  let e = t.text.replace(/\n/g, "↵");
  return (
    t.type === "string" && (e = `"${e}"`),
    x.jsxs(
      "div",
      {
        className: "call-line",
        children: [
          t.name,
          ":",
          x.jsx("span", {
            className: ze("call-value", t.type),
            title: t.text,
            children: e,
          }),
          ["string", "number", "object", "locator"].includes(t.type) &&
            x.jsx(Eg, { value: t.text }),
        ],
      },
      t.name,
    )
  );
}
function Xp(t, e, n, s) {
  const o = t.method.includes("eval") || t.method === "waitForFunction";
  if (e === "files") return { text: "<files>", type: "string", name: e };
  if (
    ((e === "eventInit" || e === "expectedValue" || (e === "arg" && o)) &&
      (n = Ul(n.value, new Array(10).fill({ handle: "<handle>" }))),
    ((e === "value" && o) || (e === "received" && t.method === "expect")) &&
      (n = Ul(n, new Array(10).fill({ handle: "<handle>" }))),
    e === "selector")
  )
    return {
      text: nr(s || "javascript", t.params.selector),
      type: "locator",
      name: "locator",
    };
  const l = typeof n;
  return l !== "object" || n === null
    ? { text: String(n), type: l, name: e }
    : n.guid
      ? { text: "<handle>", type: "handle", name: e }
      : { text: JSON.stringify(n).slice(0, 1e3), type: "object", name: e };
}
function Ul(t, e) {
  if (t.n !== void 0) return t.n;
  if (t.s !== void 0) return t.s;
  if (t.b !== void 0) return t.b;
  if (t.v !== void 0) {
    if (t.v === "undefined") return;
    if (t.v === "null") return null;
    if (t.v === "NaN") return NaN;
    if (t.v === "Infinity") return 1 / 0;
    if (t.v === "-Infinity") return -1 / 0;
    if (t.v === "-0") return -0;
  }
  if (t.d !== void 0) return new Date(t.d);
  if (t.r !== void 0) return new RegExp(t.r.p, t.r.f);
  if (t.a !== void 0) return t.a.map((n) => Ul(n, e));
  if (t.o !== void 0) {
    const n = {};
    for (const { k: s, v: o } of t.o) n[s] = Ul(o, e);
    return n;
  }
  return t.h !== void 0 ? (e === void 0 ? "<object>" : e[t.h]) : "<object>";
}
const Gp = new Map();
function ta({
  name: t,
  items: e = [],
  id: n,
  render: s,
  icon: o,
  isError: l,
  isWarning: c,
  isInfo: u,
  selectedItem: d,
  onAccepted: p,
  onSelected: y,
  onHighlighted: v,
  onIconClicked: m,
  noItemsMessage: w,
  dataTestId: _,
  notSelectable: S,
}) {
  const E = P.useRef(null),
    [T, C] = P.useState();
  return (
    P.useEffect(() => {
      v == null || v(T);
    }, [v, T]),
    P.useEffect(() => {
      const O = E.current;
      if (!O) return;
      const R = () => {
        Gp.set(t, O.scrollTop);
      };
      return (
        O.addEventListener("scroll", R, { passive: !0 }),
        () => O.removeEventListener("scroll", R)
      );
    }, [t]),
    P.useEffect(() => {
      E.current && (E.current.scrollTop = Gp.get(t) || 0);
    }, [t]),
    x.jsx("div", {
      className: ze("list-view vbox", t + "-list-view"),
      role: e.length > 0 ? "list" : void 0,
      "data-testid": _ || t + "-list",
      children: x.jsxs("div", {
        className: ze("list-view-content", S && "not-selectable"),
        tabIndex: 0,
        onKeyDown: (O) => {
          var U;
          if (d && O.key === "Enter") {
            p == null || p(d, e.indexOf(d));
            return;
          }
          if (O.key !== "ArrowDown" && O.key !== "ArrowUp") return;
          O.stopPropagation(), O.preventDefault();
          const R = d ? e.indexOf(d) : -1;
          let D = R;
          O.key === "ArrowDown" &&
            (R === -1 ? (D = 0) : (D = Math.min(R + 1, e.length - 1))),
            O.key === "ArrowUp" &&
              (R === -1 ? (D = e.length - 1) : (D = Math.max(R - 1, 0)));
          const F = (U = E.current) == null ? void 0 : U.children.item(D);
          Km(F || void 0),
            v == null || v(void 0),
            y == null || y(e[D], D),
            C(void 0);
        },
        ref: E,
        children: [
          w &&
            e.length === 0 &&
            x.jsx("div", { className: "list-view-empty", children: w }),
          e.map((O, R) => {
            const D = s(O, R);
            return x.jsxs(
              "div",
              {
                onDoubleClick: () => (p == null ? void 0 : p(O, R)),
                role: "listitem",
                className: ze(
                  "list-view-entry",
                  d === O && "selected",
                  !S && T === O && "highlighted",
                  (l == null ? void 0 : l(O, R)) && "error",
                  (c == null ? void 0 : c(O, R)) && "warning",
                  (u == null ? void 0 : u(O, R)) && "info",
                ),
                onClick: () => (y == null ? void 0 : y(O, R)),
                onMouseEnter: () => C(O),
                onMouseLeave: () => C(void 0),
                children: [
                  o &&
                    x.jsx("div", {
                      className: "codicon " + (o(O, R) || "codicon-blank"),
                      style: { minWidth: 16, marginRight: 4 },
                      onDoubleClick: (F) => {
                        F.preventDefault(), F.stopPropagation();
                      },
                      onClick: (F) => {
                        F.stopPropagation(),
                          F.preventDefault(),
                          m == null || m(O, R);
                      },
                    }),
                  typeof D == "string"
                    ? x.jsx("div", {
                        style: { textOverflow: "ellipsis", overflow: "hidden" },
                        children: D,
                      })
                    : D,
                ],
              },
              (n == null ? void 0 : n(O, R)) || R,
            );
          }),
        ],
      }),
    })
  );
}
const px = ta,
  mx = ({ action: t, isLive: e }) => {
    const n = P.useMemo(() => {
      var c;
      if (!t || !t.log.length) return [];
      const s = t.log,
        o = t.context.wallTime - t.context.startTime,
        l = [];
      for (let u = 0; u < s.length; ++u) {
        let d = "";
        if (s[u].time !== -1) {
          const p = (c = s[u]) == null ? void 0 : c.time;
          u + 1 < s.length
            ? (d = mt(s[u + 1].time - p))
            : t.endTime > 0
              ? (d = mt(t.endTime - p))
              : e
                ? (d = mt(Date.now() - o - p))
                : (d = "-");
        }
        l.push({ message: s[u].message, time: d });
      }
      return l;
    }, [t, e]);
    return n.length
      ? x.jsx(px, {
          name: "log",
          items: n,
          render: (s) =>
            x.jsxs("div", {
              className: "log-list-item",
              children: [
                x.jsx("span", {
                  className: "log-list-duration",
                  children: s.time,
                }),
                s.message,
              ],
            }),
          notSelectable: !0,
        })
      : x.jsx(Ir, { text: "No log entries" });
  };
function qi(t, e) {
  const n = /(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g,
    s = [];
  let o,
    l = {},
    c = !1,
    u = e == null ? void 0 : e.fg,
    d = e == null ? void 0 : e.bg;
  for (; (o = n.exec(t)) !== null; ) {
    const [, , p, , y] = o;
    if (p) {
      const v = +p;
      switch (v) {
        case 0:
          l = {};
          break;
        case 1:
          l["font-weight"] = "bold";
          break;
        case 2:
          l.opacity = "0.8";
          break;
        case 3:
          l["font-style"] = "italic";
          break;
        case 4:
          l["text-decoration"] = "underline";
          break;
        case 7:
          c = !0;
          break;
        case 8:
          l.display = "none";
          break;
        case 9:
          l["text-decoration"] = "line-through";
          break;
        case 22:
          delete l["font-weight"],
            delete l["font-style"],
            delete l.opacity,
            delete l["text-decoration"];
          break;
        case 23:
          delete l["font-weight"], delete l["font-style"], delete l.opacity;
          break;
        case 24:
          delete l["text-decoration"];
          break;
        case 27:
          c = !1;
          break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
          u = Jp[v - 30];
          break;
        case 39:
          u = e == null ? void 0 : e.fg;
          break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          d = Jp[v - 40];
          break;
        case 49:
          d = e == null ? void 0 : e.bg;
          break;
        case 53:
          l["text-decoration"] = "overline";
          break;
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
          u = Yp[v - 90];
          break;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
          d = Yp[v - 100];
          break;
      }
    } else if (y) {
      const v = { ...l },
        m = c ? d : u;
      m !== void 0 && (v.color = m);
      const w = c ? u : d;
      w !== void 0 && (v["background-color"] = w),
        s.push(`<span style="${yx(v)}">${gx(y)}</span>`);
    }
  }
  return s.join("");
}
const Jp = {
    0: "var(--vscode-terminal-ansiBlack)",
    1: "var(--vscode-terminal-ansiRed)",
    2: "var(--vscode-terminal-ansiGreen)",
    3: "var(--vscode-terminal-ansiYellow)",
    4: "var(--vscode-terminal-ansiBlue)",
    5: "var(--vscode-terminal-ansiMagenta)",
    6: "var(--vscode-terminal-ansiCyan)",
    7: "var(--vscode-terminal-ansiWhite)",
  },
  Yp = {
    0: "var(--vscode-terminal-ansiBrightBlack)",
    1: "var(--vscode-terminal-ansiBrightRed)",
    2: "var(--vscode-terminal-ansiBrightGreen)",
    3: "var(--vscode-terminal-ansiBrightYellow)",
    4: "var(--vscode-terminal-ansiBrightBlue)",
    5: "var(--vscode-terminal-ansiBrightMagenta)",
    6: "var(--vscode-terminal-ansiBrightCyan)",
    7: "var(--vscode-terminal-ansiBrightWhite)",
  };
function gx(t) {
  return t.replace(
    /[&"<>]/g,
    (e) => ({ "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" })[e],
  );
}
function yx(t) {
  return Object.entries(t)
    .map(([e, n]) => `${e}: ${n}`)
    .join("; ");
}
const vx = ({ error: t }) => {
  const e = P.useMemo(() => qi(t), [t]);
  return x.jsx("div", {
    className: "error-message",
    dangerouslySetInnerHTML: { __html: e || "" },
  });
};
function kr() {
  return (
    (kr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
    kr.apply(this, arguments)
  );
}
const wx = ["children", "options"],
  ae = {
    blockQuote: "0",
    breakLine: "1",
    breakThematic: "2",
    codeBlock: "3",
    codeFenced: "4",
    codeInline: "5",
    footnote: "6",
    footnoteReference: "7",
    gfmTask: "8",
    heading: "9",
    headingSetext: "10",
    htmlBlock: "11",
    htmlComment: "12",
    htmlSelfClosing: "13",
    image: "14",
    link: "15",
    linkAngleBraceStyleDetector: "16",
    linkBareUrlDetector: "17",
    linkMailtoDetector: "18",
    newlineCoalescer: "19",
    orderedList: "20",
    paragraph: "21",
    ref: "22",
    refImage: "23",
    refLink: "24",
    table: "25",
    text: "27",
    textBolded: "28",
    textEmphasized: "29",
    textEscaped: "30",
    textMarked: "31",
    textStrikethroughed: "32",
    unorderedList: "33",
  };
var Zp;
(function (t) {
  (t[(t.MAX = 0)] = "MAX"),
    (t[(t.HIGH = 1)] = "HIGH"),
    (t[(t.MED = 2)] = "MED"),
    (t[(t.LOW = 3)] = "LOW"),
    (t[(t.MIN = 4)] = "MIN");
})(Zp || (Zp = {}));
const em = [
    "allowFullScreen",
    "allowTransparency",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "charSet",
    "classId",
    "colSpan",
    "contentEditable",
    "contextMenu",
    "crossOrigin",
    "encType",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "hrefLang",
    "inputMode",
    "keyParams",
    "keyType",
    "marginHeight",
    "marginWidth",
    "maxLength",
    "mediaGroup",
    "minLength",
    "noValidate",
    "radioGroup",
    "readOnly",
    "rowSpan",
    "spellCheck",
    "srcDoc",
    "srcLang",
    "srcSet",
    "tabIndex",
    "useMap",
  ].reduce((t, e) => ((t[e.toLowerCase()] = e), t), {
    class: "className",
    for: "htmlFor",
  }),
  tm = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
  xx = ["style", "script"],
  Sx =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  _x = /mailto:/i,
  kx = /\n{2,}$/,
  bg = /^(\s*>[\s\S]*?)(?=\n\n|$)/,
  Ex = /^ *> ?/gm,
  bx = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,
  Tx = /^ {2,}\n/,
  Nx = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  Tg = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,
  Ng = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  Cx = /^(`+)((?:\\`|[^`])+)\1/,
  Ax = /^(?:\n *)*\n/,
  Lx = /\r\n?/g,
  Ix = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
  jx = /^\[\^([^\]]+)]/,
  Mx = /\f/g,
  Ox = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
  $x = /^\s*?\[(x|\s)\]/,
  Cg = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Ag = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Lg = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  Hu =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
  Px = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
  Ig = /^<!--[\s\S]*?(?:-->)/,
  Rx = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  qu = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  Dx = /^\{.*\}$/,
  Fx = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  zx = /^<([^ >]+@[^ >]+)>/,
  Bx = /^<([^ >]+:\/[^ >]+)>/,
  Ux = /-([a-z])?/gi,
  jg = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
  Hx = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  qx = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  Vx = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  Wx = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  Kx = /\t/g,
  Qx = /(^ *\||\| *$)/g,
  Xx = /^ *:-+: *$/,
  Gx = /^ *:-+ *$/,
  Jx = /^ *-+: *$/,
  na =
    "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)",
  Yx = new RegExp(`^([*_])\\1${na}\\1\\1(?!\\1)`),
  Zx = new RegExp(`^([*_])${na}\\1(?!\\1)`),
  eS = new RegExp(`^(==)${na}\\1`),
  tS = new RegExp(`^(~~)${na}\\1`),
  nS = /^\\([^0-9A-Za-z\s])/,
  pu = /\\([^0-9A-Za-z\s])/g,
  rS = /^([\s\S](?:(?!  |[0-9]\.)[^*_~\-\n<`\\\[!])*)/,
  sS = /^\n+/,
  iS = /^([ \t]*)/,
  oS = /\\([^\\])/g,
  lS = /(?:^|\n)( *)$/,
  cf = "(?:\\d+\\.)",
  uf = "(?:[*+-])";
function Mg(t) {
  return "( *)(" + (t === 1 ? cf : uf) + ") +";
}
const Og = Mg(1),
  $g = Mg(2);
function Pg(t) {
  return new RegExp("^" + (t === 1 ? Og : $g));
}
const aS = Pg(1),
  cS = Pg(2);
function Rg(t) {
  return new RegExp(
    "^" +
      (t === 1 ? Og : $g) +
      "[^\\n]*(?:\\n(?!\\1" +
      (t === 1 ? cf : uf) +
      " )[^\\n]*)*(\\n|$)",
    "gm",
  );
}
const uS = Rg(1),
  fS = Rg(2);
function Dg(t) {
  const e = t === 1 ? cf : uf;
  return new RegExp(
    "^( *)(" +
      e +
      ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
      e +
      " (?!" +
      e +
      " ))\\n*|\\s*\\n*$)",
  );
}
const Fg = Dg(1),
  zg = Dg(2);
function nm(t, e) {
  const n = e === 1,
    s = n ? Fg : zg,
    o = n ? uS : fS,
    l = n ? aS : cS;
  return {
    match: Ts(function (c, u) {
      const d = lS.exec(u.prevCapture);
      return d && (u.list || (!u.inline && !u.simple))
        ? s.exec((c = d[1] + c))
        : null;
    }),
    order: 1,
    parse(c, u, d) {
      const p = n ? +c[2] : void 0,
        y = c[0]
          .replace(
            kx,
            `
`,
          )
          .match(o);
      let v = !1;
      return {
        items: y.map(function (m, w) {
          const _ = l.exec(m)[0].length,
            S = new RegExp("^ {1," + _ + "}", "gm"),
            E = m.replace(S, "").replace(l, ""),
            T = w === y.length - 1,
            C =
              E.indexOf(`

`) !== -1 ||
              (T && v);
          v = C;
          const O = d.inline,
            R = d.list;
          let D;
          (d.list = !0),
            C
              ? ((d.inline = !1),
                (D =
                  Vi(E) +
                  `

`))
              : ((d.inline = !0), (D = Vi(E)));
          const F = u(D, d);
          return (d.inline = O), (d.list = R), F;
        }),
        ordered: n,
        start: p,
      };
    },
    render: (c, u, d) =>
      t(
        c.ordered ? "ol" : "ul",
        { key: d.key, start: c.type === ae.orderedList ? c.start : void 0 },
        c.items.map(function (p, y) {
          return t("li", { key: y }, u(p, d));
        }),
      ),
  };
}
const dS = new RegExp(
    `^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`,
  ),
  hS = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Bg = [bg, Tg, Ng, Cg, Lg, Ag, jg, Fg, zg],
  pS = [...Bg, /^[^\n]+(?:  \n|\n{2,})/, Hu, Ig, qu];
function Vi(t) {
  let e = t.length;
  for (; e > 0 && t[e - 1] <= " "; ) e--;
  return t.slice(0, e);
}
function Li(t) {
  return t
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
    .replace(/[çÇ]/g, "c")
    .replace(/[ðÐ]/g, "d")
    .replace(/[ÈÉÊËéèêë]/g, "e")
    .replace(/[ÏïÎîÍíÌì]/g, "i")
    .replace(/[Ññ]/g, "n")
    .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
    .replace(/[ÜüÛûÚúÙù]/g, "u")
    .replace(/[ŸÿÝý]/g, "y")
    .replace(/[^a-z0-9- ]/gi, "")
    .replace(/ /gi, "-")
    .toLowerCase();
}
function mS(t) {
  return Jx.test(t)
    ? "right"
    : Xx.test(t)
      ? "center"
      : Gx.test(t)
        ? "left"
        : null;
}
function rm(t, e, n, s) {
  const o = n.inTable;
  n.inTable = !0;
  let l = [[]],
    c = "";
  function u() {
    if (!c) return;
    const d = l[l.length - 1];
    d.push.apply(d, e(c, n)), (c = "");
  }
  return (
    t
      .trim()
      .split(/(`[^`]*`|\\\||\|)/)
      .filter(Boolean)
      .forEach((d, p, y) => {
        d.trim() === "|" && (u(), s)
          ? p !== 0 && p !== y.length - 1 && l.push([])
          : (c += d);
      }),
    u(),
    (n.inTable = o),
    l
  );
}
function gS(t, e, n) {
  n.inline = !0;
  const s = t[2] ? t[2].replace(Qx, "").split("|").map(mS) : [],
    o = t[3]
      ? (function (c, u, d) {
          return c
            .trim()
            .split(
              `
`,
            )
            .map(function (p) {
              return rm(p, u, d, !0);
            });
        })(t[3], e, n)
      : [],
    l = rm(t[1], e, n, !!o.length);
  return (
    (n.inline = !1),
    o.length
      ? { align: s, cells: o, header: l, type: ae.table }
      : { children: l, type: ae.paragraph }
  );
}
function sm(t, e) {
  return t.align[e] == null ? {} : { textAlign: t.align[e] };
}
function Ts(t) {
  return (t.inline = 1), t;
}
function Yn(t) {
  return Ts(function (e, n) {
    return n.inline ? t.exec(e) : null;
  });
}
function Zn(t) {
  return Ts(function (e, n) {
    return n.inline || n.simple ? t.exec(e) : null;
  });
}
function En(t) {
  return function (e, n) {
    return n.inline || n.simple ? null : t.exec(e);
  };
}
function Ii(t) {
  return Ts(function (e) {
    return t.exec(e);
  });
}
function yS(t, e) {
  if (e.inline || e.simple) return null;
  let n = "";
  t.split(
    `
`,
  ).every(
    (o) => (
      (o += `
`),
      !Bg.some((l) => l.test(o)) && ((n += o), !!o.trim())
    ),
  );
  const s = Vi(n);
  return s == "" ? null : [n, , s];
}
function vS(t) {
  try {
    if (
      decodeURIComponent(t)
        .replace(/[^A-Za-z0-9/:]/g, "")
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return null;
  } catch {
    return null;
  }
  return t;
}
function im(t) {
  return t.replace(oS, "$1");
}
function Ll(t, e, n) {
  const s = n.inline || !1,
    o = n.simple || !1;
  (n.inline = !0), (n.simple = !0);
  const l = t(e, n);
  return (n.inline = s), (n.simple = o), l;
}
function wS(t, e, n) {
  const s = n.inline || !1,
    o = n.simple || !1;
  (n.inline = !1), (n.simple = !0);
  const l = t(e, n);
  return (n.inline = s), (n.simple = o), l;
}
function xS(t, e, n) {
  const s = n.inline || !1;
  n.inline = !1;
  const o = t(e, n);
  return (n.inline = s), o;
}
const mu = (t, e, n) => ({ children: Ll(e, t[2], n) });
function gu() {
  return {};
}
function yu() {
  return null;
}
function SS(...t) {
  return t.filter(Boolean).join(" ");
}
function vu(t, e, n) {
  let s = t;
  const o = e.split(".");
  for (; o.length && ((s = s[o[0]]), s !== void 0); ) o.shift();
  return s || n;
}
function _S(t = "", e = {}) {
  function n(m, w, ..._) {
    const S = vu(e.overrides, `${m}.props`, {});
    return e.createElement(
      (function (E, T) {
        const C = vu(T, E);
        return C
          ? typeof C == "function" || (typeof C == "object" && "render" in C)
            ? C
            : vu(T, `${E}.component`, E)
          : E;
      })(m, e.overrides),
      kr({}, w, S, {
        className: SS(w == null ? void 0 : w.className, S.className) || void 0,
      }),
      ..._,
    );
  }
  function s(m) {
    m = m.replace(Ox, "");
    let w = !1;
    e.forceInline ? (w = !0) : e.forceBlock || (w = Wx.test(m) === !1);
    const _ = p(
      d(
        w
          ? m
          : `${Vi(m).replace(sS, "")}

`,
        { inline: w },
      ),
    );
    for (; typeof _[_.length - 1] == "string" && !_[_.length - 1].trim(); )
      _.pop();
    if (e.wrapper === null) return _;
    const S = e.wrapper || (w ? "span" : "div");
    let E;
    if (_.length > 1 || e.forceWrapper) E = _;
    else {
      if (_.length === 1)
        return (
          (E = _[0]), typeof E == "string" ? n("span", { key: "outer" }, E) : E
        );
      E = null;
    }
    return e.createElement(S, { key: "outer" }, E);
  }
  function o(m, w) {
    const _ = w.match(Sx);
    return _
      ? _.reduce(function (S, E) {
          const T = E.indexOf("=");
          if (T !== -1) {
            const C = (function (F) {
                return (
                  F.indexOf("-") !== -1 &&
                    F.match(Rx) === null &&
                    (F = F.replace(Ux, function (U, B) {
                      return B.toUpperCase();
                    })),
                  F
                );
              })(E.slice(0, T)).trim(),
              O = (function (F) {
                const U = F[0];
                return (U === '"' || U === "'") &&
                  F.length >= 2 &&
                  F[F.length - 1] === U
                  ? F.slice(1, -1)
                  : F;
              })(E.slice(T + 1).trim()),
              R = em[C] || C;
            if (R === "ref") return S;
            const D = (S[R] = (function (F, U, B, j) {
              return U === "style"
                ? B.split(/;\s?/).reduce(function (Q, W) {
                    const z = W.slice(0, W.indexOf(":"));
                    return (
                      (Q[
                        z.trim().replace(/(-[a-z])/g, (J) => J[1].toUpperCase())
                      ] = W.slice(z.length + 1).trim()),
                      Q
                    );
                  }, {})
                : U === "href" || U === "src"
                  ? j(B, F, U)
                  : (B.match(Dx) && (B = B.slice(1, B.length - 1)),
                    B === "true" || (B !== "false" && B));
            })(m, C, O, e.sanitizer));
            typeof D == "string" &&
              (Hu.test(D) || qu.test(D)) &&
              (S[R] = s(D.trim()));
          } else E !== "style" && (S[em[E] || E] = !0);
          return S;
        }, {})
      : null;
  }
  (e.overrides = e.overrides || {}),
    (e.sanitizer = e.sanitizer || vS),
    (e.slugify = e.slugify || Li),
    (e.namedCodesToUnicode = e.namedCodesToUnicode
      ? kr({}, tm, e.namedCodesToUnicode)
      : tm),
    (e.createElement = e.createElement || P.createElement);
  const l = [],
    c = {},
    u = {
      [ae.blockQuote]: {
        match: En(bg),
        order: 1,
        parse(m, w, _) {
          const [, S, E] = m[0].replace(Ex, "").match(bx);
          return { alert: S, children: w(E, _) };
        },
        render(m, w, _) {
          const S = { key: _.key };
          return (
            m.alert &&
              ((S.className =
                "markdown-alert-" + e.slugify(m.alert.toLowerCase(), Li)),
              m.children.unshift({
                attrs: {},
                children: [{ type: ae.text, text: m.alert }],
                noInnerParse: !0,
                type: ae.htmlBlock,
                tag: "header",
              })),
            n("blockquote", S, w(m.children, _))
          );
        },
      },
      [ae.breakLine]: {
        match: Ii(Tx),
        order: 1,
        parse: gu,
        render: (m, w, _) => n("br", { key: _.key }),
      },
      [ae.breakThematic]: {
        match: En(Nx),
        order: 1,
        parse: gu,
        render: (m, w, _) => n("hr", { key: _.key }),
      },
      [ae.codeBlock]: {
        match: En(Ng),
        order: 0,
        parse: (m) => ({
          lang: void 0,
          text: Vi(m[0].replace(/^ {4}/gm, "")).replace(pu, "$1"),
        }),
        render: (m, w, _) =>
          n(
            "pre",
            { key: _.key },
            n(
              "code",
              kr({}, m.attrs, { className: m.lang ? `lang-${m.lang}` : "" }),
              m.text,
            ),
          ),
      },
      [ae.codeFenced]: {
        match: En(Tg),
        order: 0,
        parse: (m) => ({
          attrs: o("code", m[3] || ""),
          lang: m[2] || void 0,
          text: m[4].replace(pu, "$1"),
          type: ae.codeBlock,
        }),
      },
      [ae.codeInline]: {
        match: Zn(Cx),
        order: 3,
        parse: (m) => ({ text: m[2].replace(pu, "$1") }),
        render: (m, w, _) => n("code", { key: _.key }, m.text),
      },
      [ae.footnote]: {
        match: En(Ix),
        order: 0,
        parse: (m) => (l.push({ footnote: m[2], identifier: m[1] }), {}),
        render: yu,
      },
      [ae.footnoteReference]: {
        match: Yn(jx),
        order: 1,
        parse: (m) => ({ target: `#${e.slugify(m[1], Li)}`, text: m[1] }),
        render: (m, w, _) =>
          n(
            "a",
            { key: _.key, href: e.sanitizer(m.target, "a", "href") },
            n("sup", { key: _.key }, m.text),
          ),
      },
      [ae.gfmTask]: {
        match: Yn($x),
        order: 1,
        parse: (m) => ({ completed: m[1].toLowerCase() === "x" }),
        render: (m, w, _) =>
          n("input", {
            checked: m.completed,
            key: _.key,
            readOnly: !0,
            type: "checkbox",
          }),
      },
      [ae.heading]: {
        match: En(e.enforceAtxHeadings ? Ag : Cg),
        order: 1,
        parse: (m, w, _) => ({
          children: Ll(w, m[2], _),
          id: e.slugify(m[2], Li),
          level: m[1].length,
        }),
        render: (m, w, _) =>
          n(`h${m.level}`, { id: m.id, key: _.key }, w(m.children, _)),
      },
      [ae.headingSetext]: {
        match: En(Lg),
        order: 0,
        parse: (m, w, _) => ({
          children: Ll(w, m[1], _),
          level: m[2] === "=" ? 1 : 2,
          type: ae.heading,
        }),
      },
      [ae.htmlBlock]: {
        match: Ii(Hu),
        order: 1,
        parse(m, w, _) {
          const [, S] = m[3].match(iS),
            E = new RegExp(`^${S}`, "gm"),
            T = m[3].replace(E, ""),
            C = ((O = T), pS.some((B) => B.test(O)) ? xS : Ll);
          var O;
          const R = m[1].toLowerCase(),
            D = xx.indexOf(R) !== -1,
            F = (D ? R : m[1]).trim(),
            U = { attrs: o(F, m[2]), noInnerParse: D, tag: F };
          return (
            (_.inAnchor = _.inAnchor || R === "a"),
            D ? (U.text = m[3]) : (U.children = C(w, T, _)),
            (_.inAnchor = !1),
            U
          );
        },
        render: (m, w, _) =>
          n(
            m.tag,
            kr({ key: _.key }, m.attrs),
            m.text || (m.children ? w(m.children, _) : ""),
          ),
      },
      [ae.htmlSelfClosing]: {
        match: Ii(qu),
        order: 1,
        parse(m) {
          const w = m[1].trim();
          return { attrs: o(w, m[2] || ""), tag: w };
        },
        render: (m, w, _) => n(m.tag, kr({}, m.attrs, { key: _.key })),
      },
      [ae.htmlComment]: {
        match: Ii(Ig),
        order: 1,
        parse: () => ({}),
        render: yu,
      },
      [ae.image]: {
        match: Zn(hS),
        order: 1,
        parse: (m) => ({ alt: m[1], target: im(m[2]), title: m[3] }),
        render: (m, w, _) =>
          n("img", {
            key: _.key,
            alt: m.alt || void 0,
            title: m.title || void 0,
            src: e.sanitizer(m.target, "img", "src"),
          }),
      },
      [ae.link]: {
        match: Yn(dS),
        order: 3,
        parse: (m, w, _) => ({
          children: wS(w, m[1], _),
          target: im(m[2]),
          title: m[3],
        }),
        render: (m, w, _) =>
          n(
            "a",
            {
              key: _.key,
              href: e.sanitizer(m.target, "a", "href"),
              title: m.title,
            },
            w(m.children, _),
          ),
      },
      [ae.linkAngleBraceStyleDetector]: {
        match: Yn(Bx),
        order: 0,
        parse: (m) => ({
          children: [{ text: m[1], type: ae.text }],
          target: m[1],
          type: ae.link,
        }),
      },
      [ae.linkBareUrlDetector]: {
        match: Ts((m, w) =>
          w.inAnchor || e.disableAutoLink ? null : Yn(Fx)(m, w),
        ),
        order: 0,
        parse: (m) => ({
          children: [{ text: m[1], type: ae.text }],
          target: m[1],
          title: void 0,
          type: ae.link,
        }),
      },
      [ae.linkMailtoDetector]: {
        match: Yn(zx),
        order: 0,
        parse(m) {
          let w = m[1],
            _ = m[1];
          return (
            _x.test(_) || (_ = "mailto:" + _),
            {
              children: [{ text: w.replace("mailto:", ""), type: ae.text }],
              target: _,
              type: ae.link,
            }
          );
        },
      },
      [ae.orderedList]: nm(n, 1),
      [ae.unorderedList]: nm(n, 2),
      [ae.newlineCoalescer]: {
        match: En(Ax),
        order: 3,
        parse: gu,
        render: () => `
`,
      },
      [ae.paragraph]: {
        match: Ts(yS),
        order: 3,
        parse: mu,
        render: (m, w, _) => n("p", { key: _.key }, w(m.children, _)),
      },
      [ae.ref]: {
        match: Yn(Hx),
        order: 0,
        parse: (m) => ((c[m[1]] = { target: m[2], title: m[4] }), {}),
        render: yu,
      },
      [ae.refImage]: {
        match: Zn(qx),
        order: 0,
        parse: (m) => ({ alt: m[1] || void 0, ref: m[2] }),
        render: (m, w, _) =>
          c[m.ref]
            ? n("img", {
                key: _.key,
                alt: m.alt,
                src: e.sanitizer(c[m.ref].target, "img", "src"),
                title: c[m.ref].title,
              })
            : null,
      },
      [ae.refLink]: {
        match: Yn(Vx),
        order: 0,
        parse: (m, w, _) => ({
          children: w(m[1], _),
          fallbackChildren: m[0],
          ref: m[2],
        }),
        render: (m, w, _) =>
          c[m.ref]
            ? n(
                "a",
                {
                  key: _.key,
                  href: e.sanitizer(c[m.ref].target, "a", "href"),
                  title: c[m.ref].title,
                },
                w(m.children, _),
              )
            : n("span", { key: _.key }, m.fallbackChildren),
      },
      [ae.table]: {
        match: En(jg),
        order: 1,
        parse: gS,
        render(m, w, _) {
          const S = m;
          return n(
            "table",
            { key: _.key },
            n(
              "thead",
              null,
              n(
                "tr",
                null,
                S.header.map(function (E, T) {
                  return n("th", { key: T, style: sm(S, T) }, w(E, _));
                }),
              ),
            ),
            n(
              "tbody",
              null,
              S.cells.map(function (E, T) {
                return n(
                  "tr",
                  { key: T },
                  E.map(function (C, O) {
                    return n("td", { key: O, style: sm(S, O) }, w(C, _));
                  }),
                );
              }),
            ),
          );
        },
      },
      [ae.text]: {
        match: Ii(rS),
        order: 4,
        parse: (m) => ({
          text: m[0].replace(Px, (w, _) =>
            e.namedCodesToUnicode[_] ? e.namedCodesToUnicode[_] : w,
          ),
        }),
        render: (m) => m.text,
      },
      [ae.textBolded]: {
        match: Zn(Yx),
        order: 2,
        parse: (m, w, _) => ({ children: w(m[2], _) }),
        render: (m, w, _) => n("strong", { key: _.key }, w(m.children, _)),
      },
      [ae.textEmphasized]: {
        match: Zn(Zx),
        order: 3,
        parse: (m, w, _) => ({ children: w(m[2], _) }),
        render: (m, w, _) => n("em", { key: _.key }, w(m.children, _)),
      },
      [ae.textEscaped]: {
        match: Zn(nS),
        order: 1,
        parse: (m) => ({ text: m[1], type: ae.text }),
      },
      [ae.textMarked]: {
        match: Zn(eS),
        order: 3,
        parse: mu,
        render: (m, w, _) => n("mark", { key: _.key }, w(m.children, _)),
      },
      [ae.textStrikethroughed]: {
        match: Zn(tS),
        order: 3,
        parse: mu,
        render: (m, w, _) => n("del", { key: _.key }, w(m.children, _)),
      },
    };
  e.disableParsingRawHTML === !0 &&
    (delete u[ae.htmlBlock], delete u[ae.htmlSelfClosing]);
  const d = (function (m) {
      let w = Object.keys(m);
      function _(S, E) {
        let T,
          C,
          O = [],
          R = "",
          D = "";
        for (E.prevCapture = E.prevCapture || ""; S; ) {
          let F = 0;
          for (; F < w.length; ) {
            if (((R = w[F]), (T = m[R]), E.inline && !T.match.inline)) {
              F++;
              continue;
            }
            const U = T.match(S, E);
            if (U) {
              (D = U[0]),
                (E.prevCapture += D),
                (S = S.substring(D.length)),
                (C = T.parse(U, _, E)),
                C.type == null && (C.type = R),
                O.push(C);
              break;
            }
            F++;
          }
        }
        return (E.prevCapture = ""), O;
      }
      return (
        w.sort(function (S, E) {
          let T = m[S].order,
            C = m[E].order;
          return T !== C ? T - C : S < E ? -1 : 1;
        }),
        function (S, E) {
          return _(
            (function (T) {
              return T.replace(
                Lx,
                `
`,
              )
                .replace(Mx, "")
                .replace(Kx, "    ");
            })(S),
            E,
          );
        }
      );
    })(u),
    p =
      ((y = (function (m, w) {
        return function (_, S, E) {
          const T = m[_.type].render;
          return w ? w(() => T(_, S, E), _, S, E) : T(_, S, E);
        };
      })(u, e.renderRule)),
      function m(w, _ = {}) {
        if (Array.isArray(w)) {
          const S = _.key,
            E = [];
          let T = !1;
          for (let C = 0; C < w.length; C++) {
            _.key = C;
            const O = m(w[C], _),
              R = typeof O == "string";
            R && T ? (E[E.length - 1] += O) : O !== null && E.push(O), (T = R);
          }
          return (_.key = S), E;
        }
        return y(w, m, _);
      });
  var y;
  const v = s(t);
  return l.length
    ? n(
        "div",
        null,
        v,
        n(
          "footer",
          { key: "footer" },
          l.map(function (m) {
            return n(
              "div",
              { id: e.slugify(m.identifier, Li), key: m.identifier },
              m.identifier,
              p(d(m.footnote, { inline: !0 })),
            );
          }),
        ),
      )
    : v;
}
const kS = (t) => {
  let { children: e = "", options: n } = t,
    s = (function (o, l) {
      if (o == null) return {};
      var c,
        u,
        d = {},
        p = Object.keys(o);
      for (u = 0; u < p.length; u++)
        l.indexOf((c = p[u])) >= 0 || (d[c] = o[c]);
      return d;
    })(t, wx);
  return P.cloneElement(_S(e, n), s);
};
var om;
((t) => {
  function e(n) {
    for (const s of n.splice(0)) s.dispose();
  }
  t.disposeAll = e;
})(om || (om = {}));
class ps {
  constructor() {
    (this._listeners = new Set()),
      (this.event = (e, n) => {
        this._listeners.add(e);
        let s = !1;
        const o = this,
          l = {
            dispose() {
              s || ((s = !0), o._listeners.delete(e));
            },
          };
        return n && n.push(l), l;
      });
  }
  fire(e) {
    const n = !this._deliveryQueue;
    this._deliveryQueue || (this._deliveryQueue = []);
    for (const s of this._listeners)
      this._deliveryQueue.push({ listener: s, event: e });
    if (n) {
      for (let s = 0; s < this._deliveryQueue.length; s++) {
        const { listener: o, event: l } = this._deliveryQueue[s];
        o.call(null, l);
      }
      this._deliveryQueue = void 0;
    }
  }
  dispose() {
    this._listeners.clear(), this._deliveryQueue && (this._deliveryQueue = []);
  }
}
async function* Ug(t) {
  const e = t.pipeThrough(new TextDecoderStream()).getReader();
  let n = "",
    s = "",
    o = "",
    l = "";
  for (;;) {
    const { value: c, done: u } = await e.read();
    if (u) break;
    n += c;
    const d = n.split(`
`);
    n = d.pop();
    for (const p of d) {
      if (p.length === 0) {
        if (l === "") {
          (l = ""), (o = "");
          continue;
        }
        l[l.length - 1] ===
          `
` && (l = l.substring(0, l.length - 1));
        const w = { type: o || "message", data: l, id: s };
        (o = ""), (l = ""), yield w;
      }
      if (p[0] === ":") continue;
      let y = "",
        v = "";
      const m = p.indexOf(":");
      switch (
        (m === -1
          ? (y = p)
          : ((y = p.substring(0, m)),
            (v = p[m + 1] === " " ? p.substring(m + 2) : p.substring(m + 1))),
        y)
      ) {
        case "event":
          o = v;
          break;
        case "data":
          l +=
            v +
            `
`;
          break;
        case "id":
          s = v;
          break;
      }
    }
  }
}
class ES {
  constructor(e, n = "https://api.openai.com") {
    xe(this, "name", "OpenAI");
    (this.apiKey = e), (this.baseURL = n);
  }
  async *chatCompletion(e, n) {
    const s = new URL("./v1/chat/completions", this.baseURL),
      o = await fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
          "x-pw-serviceworker": "forward",
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: e.map(({ role: l, content: c }) => ({
            role: l,
            content: c,
          })),
          stream: !0,
        }),
        signal: n,
      });
    if (o.status !== 200 || !o.body)
      throw new Error(
        "Failed to chat with OpenAI, unexpected status: " +
          o.status +
          (await o.text()),
      );
    for await (const l of Ug(o.body)) {
      const c = JSON.parse(l.data);
      if (c.object === "chat.completion.chunk") {
        if (c.choices[0].finish_reason) break;
        yield c.choices[0].delta.content;
      }
    }
  }
}
class bS {
  constructor(e, n = "https://api.anthropic.com") {
    xe(this, "name", "Anthropic");
    (this.apiKey = e), (this.baseURL = n);
  }
  async *chatCompletion(e, n) {
    var o;
    const s = await fetch(new URL("./v1/messages", this.baseURL), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
        "x-pw-serviceworker": "forward",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        messages: e
          .filter(({ role: l }) => l !== "developer")
          .map(({ role: l, content: c }) => ({ role: l, content: c })),
        system:
          (o = e.find(({ role: l }) => l === "developer")) == null
            ? void 0
            : o.content,
        max_tokens: 1024,
        stream: !0,
      }),
      signal: n,
    });
    if (s.status !== 200 || !s.body)
      throw new Error(
        "Failed to chat with Anthropic, unexpected status: " +
          s.status +
          (await s.text()),
      );
    for await (const l of Ug(s.body)) {
      const c = JSON.parse(l.data);
      c.type === "content_block_delta" && (yield c.delta.text);
    }
  }
}
class lm {
  constructor(e) {
    xe(this, "conversations", new Map());
    this.api = e;
  }
  getConversation(e) {
    return this.conversations.get(e);
  }
  startConversation(e, n) {
    const s = new TS(this, n);
    return this.conversations.set(e, s), s;
  }
}
class TS {
  constructor(e, n) {
    xe(this, "history");
    xe(this, "onChange", new ps());
    xe(this, "_abortControllers", new Set());
    (this.chat = e), (this.history = [{ role: "developer", content: n }]);
  }
  async send(e, n) {
    const s = { role: "assistant", content: "" };
    this.history.push({ role: "user", content: e, displayContent: n }, s);
    const o = new AbortController();
    this._abortControllers.add(o), this.onChange.fire();
    try {
      for await (const l of this.chat.api.chatCompletion(
        this.history,
        o.signal,
      ))
        (s.content += l), this.onChange.fire();
    } finally {
      this._abortControllers.delete(o), this.onChange.fire();
    }
  }
  isSending() {
    return this._abortControllers.size > 0;
  }
  abortSending() {
    for (const e of this._abortControllers) e.abort();
    this._abortControllers.clear(), this.onChange.fire();
  }
  isEmpty() {
    return this.history.length < 2;
  }
}
const ff = P.createContext(void 0);
function mT({ children: t }) {
  const e = r1(),
    n = P.useMemo(() => {
      const s = Object.fromEntries(e);
      if (s.openai_api_key)
        return new lm(new ES(s.openai_api_key, s.openai_base_url));
      if (s.anthropic_api_key)
        return new lm(new bS(s.anthropic_api_key, s.anthropic_base_url));
    }, [e]);
  return x.jsx(ff.Provider, { value: n, children: t });
}
function Hg() {
  const t = P.useContext(ff);
  if (!t)
    throw new Error(
      "No LLM chat available, make sure theres a LLMProvider above",
    );
  return t;
}
function NS() {
  return !!P.useContext(ff);
}
function CS(t) {
  const e = Hg().getConversation(t);
  if (!e) throw new Error("No conversation found for id: " + t);
  const [n, s] = P.useState(e.history);
  return (
    P.useEffect(() => {
      function o() {
        s([...e.history]);
      }
      return o(), e.onChange.event(o).dispose;
    }, [e]),
    [n, e]
  );
}
function AS({ conversationId: t }) {
  const [e, n] = CS(t),
    [s, o] = P.useState(""),
    l = P.useCallback(() => {
      o((c) => (n.send(c), ""));
    }, [n]);
  return x.jsxs("div", {
    className: "chat-container",
    children: [
      x.jsxs("p", {
        className: "chat-disclaimer",
        children: ["Chat based on ", n.chat.api.name, ". Check for mistakes."],
      }),
      x.jsx("hr", {}),
      x.jsx("div", {
        className: "messages-container",
        children: e
          .filter(({ role: c }) => c !== "developer")
          .map((c, u) =>
            x.jsxs(
              "div",
              {
                className: ze("message", c.role === "user" && "user-message"),
                children: [
                  c.role === "assistant" &&
                    x.jsx("div", {
                      className: "message-icon",
                      children: x.jsx("img", { src: "playwright-logo.svg" }),
                    }),
                  x.jsx("div", {
                    className: "message-content",
                    children: x.jsx(kS, {
                      options: { disableParsingRawHTML: !0 },
                      children: c.displayContent ?? c.content,
                    }),
                  }),
                ],
              },
              "" + u,
            ),
          ),
      }),
      x.jsxs("div", {
        className: "input-form",
        children: [
          x.jsx("textarea", {
            name: "content",
            value: s,
            onChange: (c) => o(c.target.value),
            onKeyDown: (c) => {
              c.key === "Enter" && !c.shiftKey && (c.preventDefault(), l());
            },
            placeholder: "Ask a question...",
            className: "message-input",
          }),
          n.isSending()
            ? x.jsx("button", {
                type: "button",
                className: "send-button",
                onClick: (c) => {
                  c.preventDefault(), n.abortSending();
                },
                children: "Cancel",
              })
            : x.jsx("button", {
                className: "send-button",
                disabled: !s.trim(),
                onClick: l,
                children: "Send",
              }),
        ],
      }),
    ],
  });
}
const qg = ({
    cursor: t,
    onPaneMouseMove: e,
    onPaneMouseUp: n,
    onPaneDoubleClick: s,
  }) => (
    At.useEffect(() => {
      const o = document.createElement("div");
      return (
        (o.style.position = "fixed"),
        (o.style.top = "0"),
        (o.style.right = "0"),
        (o.style.bottom = "0"),
        (o.style.left = "0"),
        (o.style.zIndex = "9999"),
        (o.style.cursor = t),
        document.body.appendChild(o),
        e && o.addEventListener("mousemove", e),
        n && o.addEventListener("mouseup", n),
        s && document.body.addEventListener("dblclick", s),
        () => {
          e && o.removeEventListener("mousemove", e),
            n && o.removeEventListener("mouseup", n),
            s && document.body.removeEventListener("dblclick", s),
            document.body.removeChild(o);
        }
      );
    }, [t, e, n, s]),
    x.jsx(x.Fragment, {})
  ),
  LS = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
  Vg = ({
    orientation: t,
    offsets: e,
    setOffsets: n,
    resizerColor: s,
    resizerWidth: o,
    minColumnWidth: l,
  }) => {
    const c = l || 0,
      [u, d] = At.useState(null),
      [p, y] = Lr(),
      v = {
        position: "absolute",
        right: t === "horizontal" ? void 0 : 0,
        bottom: t === "horizontal" ? 0 : void 0,
        width: t === "horizontal" ? 7 : void 0,
        height: t === "horizontal" ? void 0 : 7,
        borderTopWidth: t === "horizontal" ? void 0 : (7 - o) / 2,
        borderRightWidth: t === "horizontal" ? (7 - o) / 2 : void 0,
        borderBottomWidth: t === "horizontal" ? void 0 : (7 - o) / 2,
        borderLeftWidth: t === "horizontal" ? (7 - o) / 2 : void 0,
        borderColor: "transparent",
        borderStyle: "solid",
        cursor: t === "horizontal" ? "ew-resize" : "ns-resize",
      };
    return x.jsxs("div", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: -(7 - o) / 2,
        zIndex: 100,
        pointerEvents: "none",
      },
      ref: y,
      children: [
        !!u &&
          x.jsx(qg, {
            cursor: t === "horizontal" ? "ew-resize" : "ns-resize",
            onPaneMouseUp: () => d(null),
            onPaneMouseMove: (m) => {
              if (!m.buttons) d(null);
              else if (u) {
                const w =
                    t === "horizontal"
                      ? m.clientX - u.clientX
                      : m.clientY - u.clientY,
                  _ = u.offset + w,
                  S = u.index > 0 ? e[u.index - 1] : 0,
                  E = t === "horizontal" ? p.width : p.height,
                  T = Math.min(Math.max(S + c, _), E - c) - e[u.index];
                for (let C = u.index; C < e.length; ++C) e[C] = e[C] + T;
                n([...e]);
              }
            },
          }),
        e.map((m, w) =>
          x.jsx(
            "div",
            {
              style: {
                ...v,
                top: t === "horizontal" ? 0 : m,
                left: t === "horizontal" ? m : 0,
                pointerEvents: "initial",
              },
              onMouseDown: (_) =>
                d({
                  clientX: _.clientX,
                  clientY: _.clientY,
                  offset: m,
                  index: w,
                }),
              children: x.jsx("div", { style: { ...LS, background: s } }),
            },
            w,
          ),
        ),
      ],
    });
  };
async function wu(t) {
  const e = new Image();
  return (
    t &&
      ((e.src = t),
      await new Promise((n, s) => {
        (e.onload = n), (e.onerror = n);
      })),
    e
  );
}
const Vu = {
    backgroundImage: `linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
    boxShadow: `rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`,
  },
  IS = ({ diff: t, noTargetBlank: e, hideDetails: n }) => {
    const [s, o] = P.useState(t.diff ? "diff" : "actual"),
      [l, c] = P.useState(!1),
      [u, d] = P.useState(null),
      [p, y] = P.useState("Expected"),
      [v, m] = P.useState(null),
      [w, _] = P.useState(null),
      [S, E] = Lr();
    P.useEffect(() => {
      (async () => {
        var j, Q, W, z;
        d(await wu((j = t.expected) == null ? void 0 : j.attachment.path)),
          y(((Q = t.expected) == null ? void 0 : Q.title) || "Expected"),
          m(await wu((W = t.actual) == null ? void 0 : W.attachment.path)),
          _(await wu((z = t.diff) == null ? void 0 : z.attachment.path));
      })();
    }, [t]);
    const T = u && v && w,
      C = T ? Math.max(u.naturalWidth, v.naturalWidth, 200) : 500,
      O = T ? Math.max(u.naturalHeight, v.naturalHeight, 200) : 500,
      R = Math.min(1, (S.width - 30) / C),
      D = Math.min(1, (S.width - 50) / C / 2),
      F = C * R,
      U = O * R,
      B = {
        flex: "none",
        margin: "0 10px",
        cursor: "pointer",
        userSelect: "none",
      };
    return x.jsx("div", {
      "data-testid": "test-result-image-mismatch",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "auto",
      },
      ref: E,
      children:
        T &&
        x.jsxs(x.Fragment, {
          children: [
            x.jsxs("div", {
              "data-testid": "test-result-image-mismatch-tabs",
              style: { display: "flex", margin: "10px 0 20px" },
              children: [
                t.diff &&
                  x.jsx("div", {
                    style: { ...B, fontWeight: s === "diff" ? 600 : "initial" },
                    onClick: () => o("diff"),
                    children: "Diff",
                  }),
                x.jsx("div", {
                  style: { ...B, fontWeight: s === "actual" ? 600 : "initial" },
                  onClick: () => o("actual"),
                  children: "Actual",
                }),
                x.jsx("div", {
                  style: {
                    ...B,
                    fontWeight: s === "expected" ? 600 : "initial",
                  },
                  onClick: () => o("expected"),
                  children: p,
                }),
                x.jsx("div", {
                  style: { ...B, fontWeight: s === "sxs" ? 600 : "initial" },
                  onClick: () => o("sxs"),
                  children: "Side by side",
                }),
                x.jsx("div", {
                  style: { ...B, fontWeight: s === "slider" ? 600 : "initial" },
                  onClick: () => o("slider"),
                  children: "Slider",
                }),
              ],
            }),
            x.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                flex: "auto",
                minHeight: U + 60,
              },
              children: [
                t.diff &&
                  s === "diff" &&
                  x.jsx(bn, {
                    image: w,
                    alt: "Diff",
                    hideSize: n,
                    canvasWidth: F,
                    canvasHeight: U,
                    scale: R,
                  }),
                t.diff &&
                  s === "actual" &&
                  x.jsx(bn, {
                    image: v,
                    alt: "Actual",
                    hideSize: n,
                    canvasWidth: F,
                    canvasHeight: U,
                    scale: R,
                  }),
                t.diff &&
                  s === "expected" &&
                  x.jsx(bn, {
                    image: u,
                    alt: p,
                    hideSize: n,
                    canvasWidth: F,
                    canvasHeight: U,
                    scale: R,
                  }),
                t.diff &&
                  s === "slider" &&
                  x.jsx(jS, {
                    expectedImage: u,
                    actualImage: v,
                    hideSize: n,
                    canvasWidth: F,
                    canvasHeight: U,
                    scale: R,
                    expectedTitle: p,
                  }),
                t.diff &&
                  s === "sxs" &&
                  x.jsxs("div", {
                    style: { display: "flex" },
                    children: [
                      x.jsx(bn, {
                        image: u,
                        title: p,
                        hideSize: n,
                        canvasWidth: D * C,
                        canvasHeight: D * O,
                        scale: D,
                      }),
                      x.jsx(bn, {
                        image: l ? w : v,
                        title: l ? "Diff" : "Actual",
                        onClick: () => c(!l),
                        hideSize: n,
                        canvasWidth: D * C,
                        canvasHeight: D * O,
                        scale: D,
                      }),
                    ],
                  }),
                !t.diff &&
                  s === "actual" &&
                  x.jsx(bn, {
                    image: v,
                    title: "Actual",
                    hideSize: n,
                    canvasWidth: F,
                    canvasHeight: U,
                    scale: R,
                  }),
                !t.diff &&
                  s === "expected" &&
                  x.jsx(bn, {
                    image: u,
                    title: p,
                    hideSize: n,
                    canvasWidth: F,
                    canvasHeight: U,
                    scale: R,
                  }),
                !t.diff &&
                  s === "sxs" &&
                  x.jsxs("div", {
                    style: { display: "flex" },
                    children: [
                      x.jsx(bn, {
                        image: u,
                        title: p,
                        canvasWidth: D * C,
                        canvasHeight: D * O,
                        scale: D,
                      }),
                      x.jsx(bn, {
                        image: v,
                        title: "Actual",
                        canvasWidth: D * C,
                        canvasHeight: D * O,
                        scale: D,
                      }),
                    ],
                  }),
              ],
            }),
            !n &&
              x.jsxs("div", {
                style: {
                  alignSelf: "start",
                  lineHeight: "18px",
                  marginLeft: "15px",
                },
                children: [
                  x.jsx("div", {
                    children:
                      t.diff &&
                      x.jsx("a", {
                        target: "_blank",
                        href: t.diff.attachment.path,
                        rel: "noreferrer",
                        children: t.diff.attachment.name,
                      }),
                  }),
                  x.jsx("div", {
                    children: x.jsx("a", {
                      target: e ? "" : "_blank",
                      href: t.actual.attachment.path,
                      rel: "noreferrer",
                      children: t.actual.attachment.name,
                    }),
                  }),
                  x.jsx("div", {
                    children: x.jsx("a", {
                      target: e ? "" : "_blank",
                      href: t.expected.attachment.path,
                      rel: "noreferrer",
                      children: t.expected.attachment.name,
                    }),
                  }),
                ],
              }),
          ],
        }),
    });
  },
  jS = ({
    expectedImage: t,
    actualImage: e,
    canvasWidth: n,
    canvasHeight: s,
    scale: o,
    expectedTitle: l,
    hideSize: c,
  }) => {
    const u = { position: "absolute", top: 0, left: 0 },
      [d, p] = P.useState(n / 2),
      y =
        t.naturalWidth === e.naturalWidth &&
        t.naturalHeight === e.naturalHeight;
    return x.jsxs("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        userSelect: "none",
      },
      children: [
        !c &&
          x.jsxs("div", {
            style: { margin: 5 },
            children: [
              !y &&
                x.jsx("span", {
                  style: { flex: "none", margin: "0 5px" },
                  children: "Expected ",
                }),
              x.jsx("span", { children: t.naturalWidth }),
              x.jsx("span", {
                style: { flex: "none", margin: "0 5px" },
                children: "x",
              }),
              x.jsx("span", { children: t.naturalHeight }),
              !y &&
                x.jsx("span", {
                  style: { flex: "none", margin: "0 5px 0 15px" },
                  children: "Actual ",
                }),
              !y && x.jsx("span", { children: e.naturalWidth }),
              !y &&
                x.jsx("span", {
                  style: { flex: "none", margin: "0 5px" },
                  children: "x",
                }),
              !y && x.jsx("span", { children: e.naturalHeight }),
            ],
          }),
        x.jsxs("div", {
          style: {
            position: "relative",
            width: n,
            height: s,
            margin: 15,
            ...Vu,
          },
          children: [
            x.jsx(Vg, {
              orientation: "horizontal",
              offsets: [d],
              setOffsets: (v) => p(v[0]),
              resizerColor: "#57606a80",
              resizerWidth: 6,
            }),
            x.jsx("img", {
              alt: l,
              style: { width: t.naturalWidth * o, height: t.naturalHeight * o },
              draggable: "false",
              src: t.src,
            }),
            x.jsx("div", {
              style: { ...u, bottom: 0, overflow: "hidden", width: d, ...Vu },
              children: x.jsx("img", {
                alt: "Actual",
                style: {
                  width: e.naturalWidth * o,
                  height: e.naturalHeight * o,
                },
                draggable: "false",
                src: e.src,
              }),
            }),
          ],
        }),
      ],
    });
  },
  bn = ({
    image: t,
    title: e,
    alt: n,
    hideSize: s,
    canvasWidth: o,
    canvasHeight: l,
    scale: c,
    onClick: u,
  }) =>
    x.jsxs("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      },
      children: [
        !s &&
          x.jsxs("div", {
            style: { margin: 5 },
            children: [
              e &&
                x.jsx("span", {
                  style: { flex: "none", margin: "0 5px" },
                  children: e,
                }),
              x.jsx("span", { children: t.naturalWidth }),
              x.jsx("span", {
                style: { flex: "none", margin: "0 5px" },
                children: "x",
              }),
              x.jsx("span", { children: t.naturalHeight }),
            ],
          }),
        x.jsx("div", {
          style: {
            display: "flex",
            flex: "none",
            width: o,
            height: l,
            margin: 15,
            ...Vu,
          },
          children: x.jsx("img", {
            width: t.naturalWidth * c,
            height: t.naturalHeight * c,
            alt: e || n,
            style: { cursor: u ? "pointer" : "initial" },
            draggable: "false",
            src: t.src,
            onClick: u,
          }),
        }),
      ],
    }),
  MS = "modulepreload",
  OS = function (t, e) {
    return new URL(t, e).href;
  },
  am = {},
  $S = function (e, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      const c = document.getElementsByTagName("link"),
        u = document.querySelector("meta[property=csp-nonce]"),
        d =
          (u == null ? void 0 : u.nonce) ||
          (u == null ? void 0 : u.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((p) => {
          if (((p = OS(p, s)), p in am)) return;
          am[p] = !0;
          const y = p.endsWith(".css"),
            v = y ? '[rel="stylesheet"]' : "";
          if (!!s)
            for (let _ = c.length - 1; _ >= 0; _--) {
              const S = c[_];
              if (S.href === p && (!y || S.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${p}"]${v}`)) return;
          const w = document.createElement("link");
          if (
            ((w.rel = y ? "stylesheet" : MS),
            y || (w.as = "script"),
            (w.crossOrigin = ""),
            (w.href = p),
            d && w.setAttribute("nonce", d),
            document.head.appendChild(w),
            y)
          )
            return new Promise((_, S) => {
              w.addEventListener("load", _),
                w.addEventListener("error", () =>
                  S(new Error(`Unable to preload CSS for ${p}`)),
                );
            });
        }),
      );
    }
    function l(c) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = c), window.dispatchEvent(u), !u.defaultPrevented))
        throw c;
    }
    return o.then((c) => {
      for (const u of c || []) u.status === "rejected" && l(u.reason);
      return e().catch(l);
    });
  },
  PS = 20,
  Ns = ({
    text: t,
    language: e,
    mimeType: n,
    linkify: s,
    readOnly: o,
    highlight: l,
    revealLine: c,
    lineNumbers: u,
    isFocused: d,
    focusOnChange: p,
    wrapLines: y,
    onChange: v,
    dataTestId: m,
    placeholder: w,
  }) => {
    const [_, S] = Lr(),
      [E] = P.useState(
        $S(
          () => import("./codeMirrorModule-DpJ-EmBQ.js"),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ).then((R) => R.default),
      ),
      T = P.useRef(null),
      [C, O] = P.useState();
    return (
      P.useEffect(() => {
        (async () => {
          var B, j;
          const R = await E;
          DS(R);
          const D = S.current;
          if (!D) return;
          const F = zS(e) || FS(n) || (s ? "text/linkified" : "");
          if (
            T.current &&
            F === T.current.cm.getOption("mode") &&
            !!o === T.current.cm.getOption("readOnly") &&
            u === T.current.cm.getOption("lineNumbers") &&
            y === T.current.cm.getOption("lineWrapping") &&
            w === T.current.cm.getOption("placeholder")
          )
            return;
          (j = (B = T.current) == null ? void 0 : B.cm) == null ||
            j.getWrapperElement().remove();
          const U = R(D, {
            value: "",
            mode: F,
            readOnly: !!o,
            lineNumbers: u,
            lineWrapping: y,
            placeholder: w,
          });
          return (T.current = { cm: U }), d && U.focus(), O(U), U;
        })();
      }, [E, C, S, e, n, s, u, y, o, d, w]),
      P.useEffect(() => {
        T.current && T.current.cm.setSize(_.width, _.height);
      }, [_]),
      P.useLayoutEffect(() => {
        var F;
        if (!C) return;
        let R = !1;
        if (
          (C.getValue() !== t &&
            (C.setValue(t),
            (R = !0),
            p && (C.execCommand("selectAll"), C.focus())),
          R || JSON.stringify(l) !== JSON.stringify(T.current.highlight))
        ) {
          for (const j of T.current.highlight || [])
            C.removeLineClass(j.line - 1, "wrap");
          for (const j of l || [])
            C.addLineClass(j.line - 1, "wrap", `source-line-${j.type}`);
          for (const j of T.current.widgets || []) C.removeLineWidget(j);
          for (const j of T.current.markers || []) j.clear();
          const U = [],
            B = [];
          for (const j of l || []) {
            if (j.type !== "subtle-error" && j.type !== "error") continue;
            const Q =
              (F = T.current) == null ? void 0 : F.cm.getLine(j.line - 1);
            if (Q) {
              const W = {};
              (W.title = j.message || ""),
                B.push(
                  C.markText(
                    { line: j.line - 1, ch: 0 },
                    { line: j.line - 1, ch: j.column || Q.length },
                    { className: "source-line-error-underline", attributes: W },
                  ),
                );
            }
            if (j.type === "error") {
              const W = document.createElement("div");
              (W.innerHTML = qi(j.message || "")),
                (W.className = "source-line-error-widget"),
                U.push(
                  C.addLineWidget(j.line, W, { above: !0, coverGutter: !1 }),
                );
            }
          }
          (T.current.highlight = l),
            (T.current.widgets = U),
            (T.current.markers = B);
        }
        typeof c == "number" &&
          T.current.cm.lineCount() >= c &&
          C.scrollIntoView({ line: Math.max(0, c - 1), ch: 0 }, 50);
        let D;
        return (
          v && ((D = () => v(C.getValue())), C.on("change", D)),
          () => {
            D && C.off("change", D);
          }
        );
      }, [C, t, l, c, p, v]),
      x.jsx("div", {
        "data-testid": m,
        className: "cm-wrapper",
        ref: S,
        onClick: RS,
      })
    );
  };
function RS(t) {
  var n;
  if (!(t.target instanceof HTMLElement)) return;
  let e;
  t.target.classList.contains("cm-linkified")
    ? (e = t.target.textContent)
    : t.target.classList.contains("cm-link") &&
      (n = t.target.nextElementSibling) != null &&
      n.classList.contains("cm-url") &&
      (e = t.target.nextElementSibling.textContent.slice(1, -1)),
    e && (t.preventDefault(), t.stopPropagation(), window.open(e, "_blank"));
}
let cm = !1;
function DS(t) {
  cm ||
    ((cm = !0),
    t.defineSimpleMode("text/linkified", {
      start: [{ regex: Qm, token: "linkified" }],
    }));
}
function FS(t) {
  if (t) {
    if (t.includes("javascript") || t.includes("json")) return "javascript";
    if (t.includes("python")) return "python";
    if (t.includes("csharp")) return "text/x-csharp";
    if (t.includes("java")) return "text/x-java";
    if (t.includes("markdown")) return "markdown";
    if (t.includes("html") || t.includes("svg")) return "htmlmixed";
    if (t.includes("css")) return "css";
  }
}
function zS(t) {
  if (t)
    return {
      javascript: "javascript",
      jsonl: "javascript",
      python: "python",
      csharp: "text/x-csharp",
      java: "text/x-java",
      markdown: "markdown",
      html: "htmlmixed",
      css: "css",
      yaml: "yaml",
    }[t];
}
function BS(t) {
  return !!t.match(
    /^(text\/.*?|application\/(json|(x-)?javascript|xml.*?|ecmascript|graphql|x-www-form-urlencoded)|image\/svg(\+xml)?|application\/.*?(\+json|\+xml))(;\s*charset=.*)?$/,
  );
}
const US = ({
  title: t,
  children: e,
  setExpanded: n,
  expanded: s,
  expandOnTitleClick: o,
}) => {
  const l = P.useId();
  return x.jsxs("div", {
    className: ze("expandable", s && "expanded"),
    children: [
      x.jsxs("div", {
        role: "button",
        "aria-expanded": s,
        "aria-controls": l,
        className: "expandable-title",
        onClick: () => o && n(!s),
        children: [
          x.jsx("div", {
            className: ze(
              "codicon",
              s ? "codicon-chevron-down" : "codicon-chevron-right",
            ),
            style: {
              cursor: "pointer",
              color: "var(--vscode-foreground)",
              marginLeft: "5px",
            },
            onClick: () => !o && n(!s),
          }),
          t,
        ],
      }),
      s &&
        x.jsx("div", {
          id: l,
          role: "region",
          style: { marginLeft: 25 },
          children: e,
        }),
    ],
  });
};
function Wg(t) {
  const e = [];
  let n = 0,
    s;
  for (; (s = Qm.exec(t)) !== null; ) {
    const l = t.substring(n, s.index);
    l && e.push(l);
    const c = s[0];
    e.push(HS(c)), (n = s.index + c.length);
  }
  const o = t.substring(n);
  return o && e.push(o), e;
}
function HS(t) {
  let e = t;
  return (
    e.startsWith("www.") && (e = "https://" + e),
    x.jsx("a", {
      href: e,
      target: "_blank",
      rel: "noopener noreferrer",
      children: t,
    })
  );
}
const qS = ({ attachment: t, reveal: e }) => {
    const [n, s] = P.useState(!1),
      [o, l] = P.useState(null),
      [c, u] = P.useState(null),
      [d, p] = n1(),
      y = P.useRef(null),
      v = BS(t.contentType),
      m = !!t.sha1 || !!t.path;
    P.useEffect(() => {
      var S;
      if (e)
        return (
          (S = y.current) == null || S.scrollIntoView({ behavior: "smooth" }),
          p()
        );
    }, [e, p]),
      P.useEffect(() => {
        n &&
          o === null &&
          c === null &&
          (u("Loading ..."),
          fetch(ra(t))
            .then((S) => S.text())
            .then((S) => {
              l(S), u(null);
            })
            .catch((S) => {
              u("Failed to load: " + S.message);
            }));
      }, [n, o, c, t]);
    const w = P.useMemo(() => {
        const S = o
          ? o.split(`
`).length
          : 0;
        return Math.min(Math.max(5, S), 20) * PS;
      }, [o]),
      _ = x.jsxs("span", {
        style: { marginLeft: 5 },
        ref: y,
        "aria-label": t.name,
        children: [
          x.jsx("span", { children: Wg(t.name) }),
          m &&
            x.jsx("a", {
              style: { marginLeft: 5 },
              href: Il(t),
              children: "download",
            }),
        ],
      });
    return !v || !m
      ? x.jsx("div", { style: { marginLeft: 20 }, children: _ })
      : x.jsxs("div", {
          className: ze(d && "yellow-flash"),
          children: [
            x.jsx(US, {
              title: _,
              expanded: n,
              setExpanded: s,
              expandOnTitleClick: !0,
              children: c && x.jsx("i", { children: c }),
            }),
            n &&
              o !== null &&
              x.jsx("div", {
                className: "vbox",
                style: { height: w },
                children: x.jsx(Ns, {
                  text: o,
                  readOnly: !0,
                  mimeType: t.contentType,
                  linkify: !0,
                  lineNumbers: !0,
                  wrapLines: !1,
                }),
              }),
          ],
        });
  },
  VS = ({ model: t, revealedAttachment: e }) => {
    const {
      diffMap: n,
      screenshots: s,
      attachments: o,
    } = P.useMemo(() => {
      const l = new Set((t == null ? void 0 : t.visibleAttachments) ?? []),
        c = new Set(),
        u = new Map();
      for (const d of l) {
        if (!d.path && !d.sha1) continue;
        const p = d.name.match(/^(.*)-(expected|actual|diff)\.png$/);
        if (p) {
          const y = p[1],
            v = p[2],
            m = u.get(y) || { expected: void 0, actual: void 0, diff: void 0 };
          (m[v] = d), u.set(y, m), l.delete(d);
        } else d.contentType.startsWith("image/") && (c.add(d), l.delete(d));
      }
      return { diffMap: u, attachments: l, screenshots: c };
    }, [t]);
    return !n.size && !s.size && !o.size
      ? x.jsx(Ir, { text: "No attachments" })
      : x.jsxs("div", {
          className: "attachments-tab",
          children: [
            [...n.values()].map(({ expected: l, actual: c, diff: u }) =>
              x.jsxs(x.Fragment, {
                children: [
                  l &&
                    c &&
                    x.jsx("div", {
                      className: "attachments-section",
                      children: "Image diff",
                    }),
                  l &&
                    c &&
                    x.jsx(IS, {
                      noTargetBlank: !0,
                      diff: {
                        name: "Image diff",
                        expected: {
                          attachment: { ...l, path: Il(l) },
                          title: "Expected",
                        },
                        actual: { attachment: { ...c, path: Il(c) } },
                        diff: u
                          ? { attachment: { ...u, path: Il(u) } }
                          : void 0,
                      },
                    }),
                ],
              }),
            ),
            s.size
              ? x.jsx("div", {
                  className: "attachments-section",
                  children: "Screenshots",
                })
              : void 0,
            [...s.values()].map((l, c) => {
              const u = ra(l);
              return x.jsxs(
                "div",
                {
                  className: "attachment-item",
                  children: [
                    x.jsx("div", {
                      children: x.jsx("img", { draggable: "false", src: u }),
                    }),
                    x.jsx("div", {
                      children: x.jsx("a", {
                        target: "_blank",
                        href: u,
                        rel: "noreferrer",
                        children: l.name,
                      }),
                    }),
                  ],
                },
                `screenshot-${c}`,
              );
            }),
            o.size
              ? x.jsx("div", {
                  className: "attachments-section",
                  children: "Attachments",
                })
              : void 0,
            [...o.values()].map((l, c) =>
              x.jsx(
                "div",
                {
                  className: "attachment-item",
                  children: x.jsx(qS, {
                    attachment: l,
                    reveal: e && WS(l, e[0]) ? e : void 0,
                  }),
                },
                KS(l, c),
              ),
            ),
          ],
        });
  };
function WS(t, e) {
  return t.name === e.name && t.path === e.path && t.sha1 === e.sha1;
}
function ra(t, e = {}) {
  const n = new URLSearchParams(e);
  return t.sha1
    ? (n.set("trace", t.traceUrl), "sha1/" + t.sha1 + "?" + n.toString())
    : (n.set("path", t.path), "file?" + n.toString());
}
function Il(t) {
  const e = { dn: t.name };
  return t.contentType && (e.dct = t.contentType), ra(t, e);
}
function KS(t, e) {
  return e + "-" + (t.sha1 ? "sha1-" + t.sha1 : "path-" + t.path);
}
const QS = ({ prompt: t }) =>
  x.jsx(Al, {
    value: t,
    description: "Copy prompt",
    copiedDescription: x.jsxs(x.Fragment, {
      children: [
        "Copied ",
        x.jsx("span", {
          className: "codicon codicon-copy",
          style: { marginLeft: "5px" },
        }),
      ],
    }),
    style: { width: "120px", justifyContent: "center" },
  });
function XS(t) {
  return P.useMemo(() => {
    if (!t) return { errors: new Map() };
    const e = new Map();
    for (const n of t.errorDescriptors) e.set(n.message, n);
    return { errors: e };
  }, [t]);
}
function GS({
  message: t,
  error: e,
  errorId: n,
  sdkLanguage: s,
  revealInSource: o,
}) {
  var m;
  const [l, c] = P.useState(!1),
    u = NS();
  let d, p;
  const y = (m = e.stack) == null ? void 0 : m[0];
  y &&
    ((d = y.file.replace(/.*[/\\](.*)/, "$1") + ":" + y.line),
    (p = y.file + ":" + y.line));
  const v = Vm(
    async () => (e.prompt ? await (await fetch(ra(e.prompt))).text() : void 0),
    [e],
    void 0,
  );
  return x.jsxs("div", {
    style: { display: "flex", flexDirection: "column", overflowX: "clip" },
    children: [
      x.jsxs("div", {
        className: "hbox",
        style: {
          alignItems: "center",
          padding: "5px 10px",
          minHeight: 36,
          fontWeight: "bold",
          color: "var(--vscode-errorForeground)",
          flex: 0,
        },
        children: [
          e.action && af(e.action, { sdkLanguage: s }),
          d &&
            x.jsxs("div", {
              className: "action-location",
              children: [
                "@ ",
                x.jsx("span", { title: p, onClick: () => o(e), children: d }),
              ],
            }),
          x.jsx("span", {
            style: { position: "absolute", right: "5px" },
            children:
              v &&
              (u
                ? x.jsx(JS, {
                    conversationId: n,
                    onChange: c,
                    value: l,
                    prompt: v,
                  })
                : x.jsx(QS, { prompt: v })),
          }),
        ],
      }),
      x.jsx(vx, { error: t }),
      l && x.jsx(AS, { conversationId: n }),
    ],
  });
}
function JS({ conversationId: t, value: e, onChange: n, prompt: s }) {
  const o = Hg();
  return x.jsx(Vt, {
    onClick: () => {
      if (!o.getConversation(t)) {
        const l = o.startConversation(
          t,
          [
            "My Playwright test failed. What's going wrong?",
            "Please give me a suggestion how to fix it, and then explain what went wrong. Be very concise and apply Playwright best practices.",
            "Don't include many headings in your output. Make sure what you're saying is correct, and take into account whether there might be a bug in the app.",
          ].join(`
`),
        );
        let c = "Help me with the error above.";
        const u = s.includes("Local changes:"),
          d = s.includes("Page snapshot:");
        u
          ? (c += ` Take the code diff${d ? " and page snapshot" : ""} into account.`)
          : d && (c += " Take the page snapshot into account."),
          l.send(s, c);
      }
      n((l) => !l);
    },
    style: { width: "96px", justifyContent: "center" },
    title: "Fix with AI",
    className: "copy-to-clipboard-text-button",
    children: e ? "Hide AI" : "Fix with AI",
  });
}
const YS = ({
    errorsModel: t,
    sdkLanguage: e,
    revealInSource: n,
    wallTime: s,
  }) =>
    t.errors.size
      ? x.jsx("div", {
          className: "fill",
          style: { overflow: "auto" },
          children: [...t.errors.entries()].map(([o, l]) => {
            const c = `error-${s}-${o}`;
            return x.jsx(
              GS,
              {
                errorId: c,
                message: o,
                error: l,
                revealInSource: n,
                sdkLanguage: e,
              },
              c,
            );
          }),
        })
      : x.jsx(Ir, { text: "No errors" }),
  ZS = ta;
function e_(t, e) {
  const { entries: n } = P.useMemo(() => {
    if (!t) return { entries: [] };
    const o = [];
    function l(u) {
      var y, v, m, w, _, S;
      const d = o[o.length - 1];
      d &&
      ((y = u.browserMessage) == null ? void 0 : y.bodyString) ===
        ((v = d.browserMessage) == null ? void 0 : v.bodyString) &&
      ((m = u.browserMessage) == null ? void 0 : m.location) ===
        ((w = d.browserMessage) == null ? void 0 : w.location) &&
      u.browserError === d.browserError &&
      ((_ = u.nodeMessage) == null ? void 0 : _.html) ===
        ((S = d.nodeMessage) == null ? void 0 : S.html) &&
      u.isError === d.isError &&
      u.isWarning === d.isWarning &&
      u.timestamp - d.timestamp < 1e3
        ? d.repeat++
        : o.push({ ...u, repeat: 1 });
    }
    const c = [...t.events, ...t.stdio].sort((u, d) => {
      const p = "time" in u ? u.time : u.timestamp,
        y = "time" in d ? d.time : d.timestamp;
      return p - y;
    });
    for (const u of c) {
      if (u.type === "console") {
        const d = u.args && u.args.length ? n_(u.args) : Kg(u.text),
          p = u.location.url,
          v = `${p ? p.substring(p.lastIndexOf("/") + 1) : "<anonymous>"}:${u.location.lineNumber}`;
        l({
          browserMessage: { body: d, bodyString: u.text, location: v },
          isError: u.messageType === "error",
          isWarning: u.messageType === "warning",
          timestamp: u.time,
        });
      }
      if (
        (u.type === "event" &&
          u.method === "pageError" &&
          l({
            browserError: u.params.error,
            isError: !0,
            isWarning: !1,
            timestamp: u.time,
          }),
        u.type === "stderr" || u.type === "stdout")
      ) {
        let d = "";
        u.text && (d = qi(u.text.trim()) || ""),
          u.base64 && (d = qi(atob(u.base64).trim()) || ""),
          l({
            nodeMessage: { html: d },
            isError: u.type === "stderr",
            isWarning: !1,
            timestamp: u.timestamp,
          });
      }
    }
    return { entries: o };
  }, [t]);
  return {
    entries: P.useMemo(
      () =>
        e
          ? n.filter(
              (o) => o.timestamp >= e.minimum && o.timestamp <= e.maximum,
            )
          : n,
      [n, e],
    ),
  };
}
const t_ = ({
  consoleModel: t,
  boundaries: e,
  onEntryHovered: n,
  onAccepted: s,
}) =>
  t.entries.length
    ? x.jsx("div", {
        className: "console-tab",
        children: x.jsx(ZS, {
          name: "console",
          onAccepted: s,
          onHighlighted: n,
          items: t.entries,
          isError: (o) => o.isError,
          isWarning: (o) => o.isWarning,
          render: (o) => {
            const l = mt(o.timestamp - e.minimum),
              c = x.jsx("span", { className: "console-time", children: l }),
              u = o.isError
                ? "status-error"
                : o.isWarning
                  ? "status-warning"
                  : "status-none",
              d =
                o.browserMessage || o.browserError
                  ? x.jsx("span", {
                      className: ze("codicon", "codicon-browser", u),
                      title: "Browser message",
                    })
                  : x.jsx("span", {
                      className: ze("codicon", "codicon-file", u),
                      title: "Runner message",
                    });
            let p, y, v, m;
            const { browserMessage: w, browserError: _, nodeMessage: S } = o;
            if ((w && ((p = w.location), (y = w.body)), _)) {
              const { error: E, value: T } = _;
              E ? ((y = E.message), (m = E.stack)) : (y = String(T));
            }
            return (
              S && (v = S.html),
              x.jsxs("div", {
                className: "console-line",
                children: [
                  c,
                  d,
                  p &&
                    x.jsx("span", {
                      className: "console-location",
                      children: p,
                    }),
                  o.repeat > 1 &&
                    x.jsx("span", {
                      className: "console-repeat",
                      children: o.repeat,
                    }),
                  y &&
                    x.jsx("span", {
                      className: "console-line-message",
                      children: y,
                    }),
                  v &&
                    x.jsx("span", {
                      className: "console-line-message",
                      dangerouslySetInnerHTML: { __html: v },
                    }),
                  m &&
                    x.jsx("div", { className: "console-stack", children: m }),
                ],
              })
            );
          },
        }),
      })
    : x.jsx(Ir, { text: "No console entries" });
function n_(t) {
  if (t.length === 1) return Kg(t[0].preview);
  const e = typeof t[0].value == "string" && t[0].value.includes("%"),
    n = e ? t[0].value : "",
    s = e ? t.slice(1) : t;
  let o = 0;
  const l = /%([%sdifoOc])/g;
  let c;
  const u = [];
  let d = [];
  u.push(x.jsx("span", { children: d }));
  let p = 0;
  for (; (c = l.exec(n)) !== null; ) {
    const y = n.substring(p, c.index);
    d.push(x.jsx("span", { children: y })), (p = c.index + 2);
    const v = c[0][1];
    if (v === "%") d.push(x.jsx("span", { children: "%" }));
    else if (
      v === "s" ||
      v === "o" ||
      v === "O" ||
      v === "d" ||
      v === "i" ||
      v === "f"
    ) {
      const m = s[o++],
        w = {};
      typeof (m == null ? void 0 : m.value) != "string" &&
        (w.color = "var(--vscode-debugTokenExpression-number)"),
        d.push(
          x.jsx("span", {
            style: w,
            children: (m == null ? void 0 : m.preview) || "",
          }),
        );
    } else if (v === "c") {
      d = [];
      const m = s[o++],
        w = m ? r_(m.preview) : {};
      u.push(x.jsx("span", { style: w, children: d }));
    }
  }
  for (
    p < n.length && d.push(x.jsx("span", { children: n.substring(p) }));
    o < s.length;
    o++
  ) {
    const y = s[o],
      v = {};
    d.length && d.push(x.jsx("span", { children: " " })),
      typeof (y == null ? void 0 : y.value) != "string" &&
        (v.color = "var(--vscode-debugTokenExpression-number)"),
      d.push(
        x.jsx("span", {
          style: v,
          children: (y == null ? void 0 : y.preview) || "",
        }),
      );
  }
  return u;
}
function Kg(t) {
  return [x.jsx("span", { dangerouslySetInnerHTML: { __html: qi(t.trim()) } })];
}
function r_(t) {
  try {
    const e = {},
      n = t.split(";");
    for (const s of n) {
      const o = s.trim();
      if (!o) continue;
      let [l, c] = o.split(":");
      if (((l = l.trim()), (c = c.trim()), !s_(l))) continue;
      const u = l.replace(/-([a-z])/g, (d) => d[1].toUpperCase());
      e[u] = c;
    }
    return e;
  } catch {
    return {};
  }
}
function s_(t) {
  return [
    "background",
    "border",
    "color",
    "font",
    "line",
    "margin",
    "padding",
    "text",
  ].some((n) => t.startsWith(n));
}
const df = ({
    noShadow: t,
    children: e,
    noMinHeight: n,
    className: s,
    sidebarBackground: o,
    onClick: l,
  }) =>
    x.jsx("div", {
      className: ze(
        "toolbar",
        t && "no-shadow",
        n && "no-min-height",
        s,
        o && "toolbar-sidebar-background",
      ),
      onClick: l,
      children: e,
    }),
  Wu = ({
    tabs: t,
    selectedTab: e,
    setSelectedTab: n,
    leftToolbar: s,
    rightToolbar: o,
    dataTestId: l,
    mode: c,
  }) => {
    const u = P.useId();
    return (
      e || (e = t[0].id),
      c || (c = "default"),
      x.jsx("div", {
        className: "tabbed-pane",
        "data-testid": l,
        children: x.jsxs("div", {
          className: "vbox",
          children: [
            x.jsxs(df, {
              children: [
                s &&
                  x.jsxs("div", {
                    style: {
                      flex: "none",
                      display: "flex",
                      margin: "0 4px",
                      alignItems: "center",
                    },
                    children: [...s],
                  }),
                c === "default" &&
                  x.jsx("div", {
                    style: {
                      flex: "auto",
                      display: "flex",
                      height: "100%",
                      overflow: "hidden",
                    },
                    role: "tablist",
                    children: [
                      ...t.map((d) =>
                        x.jsx(
                          Qg,
                          {
                            id: d.id,
                            ariaControls: `${u}-${d.id}`,
                            title: d.title,
                            count: d.count,
                            errorCount: d.errorCount,
                            selected: e === d.id,
                            onSelect: n,
                          },
                          d.id,
                        ),
                      ),
                    ],
                  }),
                c === "select" &&
                  x.jsx("div", {
                    style: {
                      flex: "auto",
                      display: "flex",
                      height: "100%",
                      overflow: "hidden",
                    },
                    role: "tablist",
                    children: x.jsx("select", {
                      style: {
                        width: "100%",
                        background: "none",
                        cursor: "pointer",
                      },
                      onChange: (d) => {
                        n == null || n(t[d.currentTarget.selectedIndex].id);
                      },
                      children: t.map((d) => {
                        let p = "";
                        return (
                          d.count && (p = ` (${d.count})`),
                          d.errorCount && (p = ` (${d.errorCount})`),
                          x.jsxs(
                            "option",
                            {
                              value: d.id,
                              selected: d.id === e,
                              role: "tab",
                              "aria-controls": `${u}-${d.id}`,
                              children: [d.title, p],
                            },
                            d.id,
                          )
                        );
                      }),
                    }),
                  }),
                o &&
                  x.jsxs("div", {
                    style: {
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                    },
                    children: [...o],
                  }),
              ],
            }),
            t.map((d) => {
              const p = "tab-content tab-" + d.id;
              if (d.component)
                return x.jsx(
                  "div",
                  {
                    id: `${u}-${d.id}`,
                    role: "tabpanel",
                    "aria-label": d.title,
                    className: p,
                    style: { display: e === d.id ? "inherit" : "none" },
                    children: d.component,
                  },
                  d.id,
                );
              if (e === d.id)
                return x.jsx(
                  "div",
                  {
                    id: `${u}-${d.id}`,
                    role: "tabpanel",
                    "aria-label": d.title,
                    className: p,
                    children: d.render(),
                  },
                  d.id,
                );
            }),
          ],
        }),
      })
    );
  },
  Qg = ({
    id: t,
    title: e,
    count: n,
    errorCount: s,
    selected: o,
    onSelect: l,
    ariaControls: c,
  }) =>
    x.jsxs("div", {
      className: ze("tabbed-pane-tab", o && "selected"),
      onClick: () => (l == null ? void 0 : l(t)),
      role: "tab",
      title: e,
      "aria-controls": c,
      children: [
        x.jsx("div", { className: "tabbed-pane-tab-label", children: e }),
        !!n &&
          x.jsx("div", { className: "tabbed-pane-tab-counter", children: n }),
        !!s &&
          x.jsx("div", {
            className: "tabbed-pane-tab-counter error",
            children: s,
          }),
      ],
    });
async function i_(t) {
  const e = navigator.platform.includes("Win") ? "win" : "unix";
  let n = [];
  const s = new Set([
    "accept-encoding",
    "host",
    "method",
    "path",
    "scheme",
    "version",
    "authority",
    "protocol",
  ]);
  function o(v) {
    const m = '^"';
    return (
      m +
      v
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`]/g, "^$&")
        .replace(/%(?=[a-zA-Z0-9_])/g, "%^")
        .replace(
          /\r?\n/g,
          `^

`,
        ) +
      m
    );
  }
  function l(v) {
    function m(w) {
      let S = w.charCodeAt(0).toString(16);
      for (; S.length < 4; ) S = "0" + S;
      return "\\u" + S;
    }
    return /[\0-\x1F\x7F-\x9F!]|\'/.test(v)
      ? "$'" +
          v
            .replace(/\\/g, "\\\\")
            .replace(/\'/g, "\\'")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/[\0-\x1F\x7F-\x9F!]/g, m) +
          "'"
      : "'" + v + "'";
  }
  const c = e === "win" ? o : l;
  n.push(c(t.request.url).replace(/[[{}\]]/g, "\\$&"));
  let u = "GET";
  const d = [],
    p = await Xg(t);
  p && (d.push("--data-raw " + c(p)), s.add("content-length"), (u = "POST")),
    t.request.method !== u && n.push("-X " + c(t.request.method));
  const y = t.request.headers;
  for (let v = 0; v < y.length; v++) {
    const m = y[v],
      w = m.name.replace(/^:/, "");
    s.has(w.toLowerCase()) ||
      (m.value.trim()
        ? n.push("-H " + c(w + ": " + m.value))
        : n.push("-H " + c(w + ";")));
  }
  return (
    (n = n.concat(d)),
    "curl " +
      n.join(
        n.length >= 3
          ? e === "win"
            ? ` ^
  `
            : ` \\
  `
          : " ",
      )
  );
}
async function o_(t, e = 0) {
  const n = new Set([
      "method",
      "path",
      "scheme",
      "version",
      "accept-charset",
      "accept-encoding",
      "access-control-request-headers",
      "access-control-request-method",
      "connection",
      "content-length",
      "cookie",
      "cookie2",
      "date",
      "dnt",
      "expect",
      "host",
      "keep-alive",
      "origin",
      "referer",
      "te",
      "trailer",
      "transfer-encoding",
      "upgrade",
      "via",
      "user-agent",
    ]),
    s = new Set(["cookie", "authorization"]),
    o = JSON.stringify(t.request.url),
    l = t.request.headers,
    c = l.reduce((_, S) => {
      const E = S.name;
      return (
        !n.has(E.toLowerCase()) && !E.includes(":") && _.append(E, S.value), _
      );
    }, new Headers()),
    u = {};
  for (const _ of c) u[_[0]] = _[1];
  const d =
      t.request.cookies.length ||
      l.some(({ name: _ }) => s.has(_.toLowerCase()))
        ? "include"
        : "omit",
    p = l.find(({ name: _ }) => _.toLowerCase() === "referer"),
    y = p ? p.value : void 0,
    v = await Xg(t),
    m = {
      headers: Object.keys(u).length ? u : void 0,
      referrer: y,
      body: v,
      method: t.request.method,
      mode: "cors",
    };
  if (e === 1) {
    const _ = l.find((E) => E.name.toLowerCase() === "cookie"),
      S = {};
    delete m.mode,
      _ && (S.cookie = _.value),
      y && (delete m.referrer, (S.Referer = y)),
      Object.keys(S).length && (m.headers = { ...u, ...S });
  } else m.credentials = d;
  const w = JSON.stringify(m, null, 2);
  return `fetch(${o}, ${w});`;
}
async function Xg(t) {
  var e, n;
  return (e = t.request.postData) != null && e._sha1
    ? await fetch(`sha1/${t.request.postData._sha1}`).then((s) => s.text())
    : (n = t.request.postData) == null
      ? void 0
      : n.text;
}
class l_ {
  generatePlaywrightRequestCall(e, n) {
    let s = e.method.toLowerCase();
    const o = new URL(e.url),
      l = `${o.origin}${o.pathname}`,
      c = {};
    ["delete", "get", "head", "post", "put", "patch"].includes(s) ||
      ((c.method = s), (s = "fetch")),
      o.searchParams.size &&
        (c.params = Object.fromEntries(o.searchParams.entries())),
      n && (c.data = n),
      e.headers.length &&
        (c.headers = Object.fromEntries(
          e.headers.map((p) => [p.name, p.value]),
        ));
    const u = [`'${l}'`];
    return (
      Object.keys(c).length > 0 && u.push(this.prettyPrintObject(c)),
      `await page.request.${s}(${u.join(", ")});`
    );
  }
  prettyPrintObject(e, n = 2, s = 0) {
    if (e === null) return "null";
    if (e === void 0) return "undefined";
    if (typeof e != "object")
      return typeof e == "string" ? this.stringLiteral(e) : String(e);
    if (Array.isArray(e)) {
      if (e.length === 0) return "[]";
      const u = " ".repeat(s * n),
        d = " ".repeat((s + 1) * n);
      return `[
${e.map((y) => `${d}${this.prettyPrintObject(y, n, s + 1)}`).join(`,
`)}
${u}]`;
    }
    if (Object.keys(e).length === 0) return "{}";
    const o = " ".repeat(s * n),
      l = " ".repeat((s + 1) * n);
    return `{
${Object.entries(e).map(([u, d]) => {
  const p = this.prettyPrintObject(d, n, s + 1),
    y = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(u) ? u : this.stringLiteral(u);
  return `${l}${y}: ${p}`;
}).join(`,
`)}
${o}}`;
  }
  stringLiteral(e) {
    return (
      (e = e.replace(/\\/g, "\\\\").replace(/'/g, "\\'")),
      e.includes(`
`) ||
      e.includes("\r") ||
      e.includes("	")
        ? "`" + e + "`"
        : `'${e}'`
    );
  }
}
class a_ {
  generatePlaywrightRequestCall(e, n) {
    const s = new URL(e.url),
      l = [`"${`${s.origin}${s.pathname}`}"`];
    let c = e.method.toLowerCase();
    ["delete", "get", "head", "post", "put", "patch"].includes(c) ||
      (l.push(`method="${c}"`), (c = "fetch")),
      s.searchParams.size &&
        l.push(
          `params=${this.prettyPrintObject(Object.fromEntries(s.searchParams.entries()))}`,
        ),
      n && l.push(`data=${this.prettyPrintObject(n)}`),
      e.headers.length &&
        l.push(
          `headers=${this.prettyPrintObject(Object.fromEntries(e.headers.map((d) => [d.name, d.value])))}`,
        );
    const u =
      l.length === 1
        ? l[0]
        : `
${l.map((d) => this.indent(d, 2)).join(`,
`)}
`;
    return `await page.request.${c}(${u})`;
  }
  indent(e, n) {
    return e
      .split(
        `
`,
      )
      .map((s) => " ".repeat(n) + s).join(`
`);
  }
  prettyPrintObject(e, n = 2, s = 0) {
    if (e === null || e === void 0) return "None";
    if (typeof e != "object")
      return typeof e == "string"
        ? this.stringLiteral(e)
        : typeof e == "boolean"
          ? e
            ? "True"
            : "False"
          : String(e);
    if (Array.isArray(e)) {
      if (e.length === 0) return "[]";
      const u = " ".repeat(s * n),
        d = " ".repeat((s + 1) * n);
      return `[
${e.map((y) => `${d}${this.prettyPrintObject(y, n, s + 1)}`).join(`,
`)}
${u}]`;
    }
    if (Object.keys(e).length === 0) return "{}";
    const o = " ".repeat(s * n),
      l = " ".repeat((s + 1) * n);
    return `{
${Object.entries(e).map(([u, d]) => {
  const p = this.prettyPrintObject(d, n, s + 1);
  return `${l}${this.stringLiteral(u)}: ${p}`;
}).join(`,
`)}
${o}}`;
  }
  stringLiteral(e) {
    return JSON.stringify(e);
  }
}
class c_ {
  generatePlaywrightRequestCall(e, n) {
    const s = new URL(e.url),
      o = `${s.origin}${s.pathname}`,
      l = {},
      c = [];
    let u = e.method.toLowerCase();
    ["delete", "get", "head", "post", "put", "patch"].includes(u) ||
      ((l.Method = u), (u = "fetch")),
      s.searchParams.size &&
        (l.Params = Object.fromEntries(s.searchParams.entries())),
      n && (l.Data = n),
      e.headers.length &&
        (l.Headers = Object.fromEntries(
          e.headers.map((y) => [y.name, y.value]),
        ));
    const d = [`"${o}"`];
    return (
      Object.keys(l).length > 0 && d.push(this.prettyPrintObject(l)),
      `${c.join(`
`)}${
        c.length
          ? `
`
          : ""
      }await request.${this.toFunctionName(u)}(${d.join(", ")});`
    );
  }
  toFunctionName(e) {
    return e[0].toUpperCase() + e.slice(1) + "Async";
  }
  prettyPrintObject(e, n = 2, s = 0) {
    if (e === null || e === void 0) return "null";
    if (typeof e != "object")
      return typeof e == "string"
        ? this.stringLiteral(e)
        : typeof e == "boolean"
          ? e
            ? "true"
            : "false"
          : String(e);
    if (Array.isArray(e)) {
      if (e.length === 0) return "new object[] {}";
      const u = " ".repeat(s * n),
        d = " ".repeat((s + 1) * n);
      return `new object[] {
${e.map((y) => `${d}${this.prettyPrintObject(y, n, s + 1)}`).join(`,
`)}
${u}}`;
    }
    if (Object.keys(e).length === 0) return "new {}";
    const o = " ".repeat(s * n),
      l = " ".repeat((s + 1) * n);
    return `new() {
${Object.entries(e).map(([u, d]) => {
  const p = this.prettyPrintObject(d, n, s + 1),
    y = s === 0 ? u : `[${this.stringLiteral(u)}]`;
  return `${l}${y} = ${p}`;
}).join(`,
`)}
${o}}`;
  }
  stringLiteral(e) {
    return JSON.stringify(e);
  }
}
class u_ {
  generatePlaywrightRequestCall(e, n) {
    const s = new URL(e.url),
      o = [`"${s.origin}${s.pathname}"`],
      l = [];
    let c = e.method.toLowerCase();
    ["delete", "get", "head", "post", "put", "patch"].includes(c) ||
      (l.push(`setMethod("${c}")`), (c = "fetch"));
    for (const [u, d] of s.searchParams)
      l.push(
        `setQueryParam(${this.stringLiteral(u)}, ${this.stringLiteral(d)})`,
      );
    n && l.push(`setData(${this.stringLiteral(n)})`);
    for (const u of e.headers)
      l.push(
        `setHeader(${this.stringLiteral(u.name)}, ${this.stringLiteral(u.value)})`,
      );
    return (
      l.length > 0 &&
        o.push(`RequestOptions.create()
  .${l.join(`
  .`)}
`),
      `request.${c}(${o.join(", ")});`
    );
  }
  stringLiteral(e) {
    return JSON.stringify(e);
  }
}
function f_(t) {
  if (t === "javascript") return new l_();
  if (t === "python") return new a_();
  if (t === "csharp") return new c_();
  if (t === "java") return new u_();
  throw new Error("Unsupported language: " + t);
}
const d_ = ({
    resource: t,
    sdkLanguage: e,
    startTimeOffset: n,
    onClose: s,
  }) => {
    const [o, l] = P.useState("request");
    return x.jsx(Wu, {
      dataTestId: "network-request-details",
      leftToolbar: [
        x.jsx(Vt, { icon: "close", title: "Close", onClick: s }, "close"),
      ],
      tabs: [
        {
          id: "request",
          title: "Request",
          render: () =>
            x.jsx(h_, { resource: t, sdkLanguage: e, startTimeOffset: n }),
        },
        {
          id: "response",
          title: "Response",
          render: () => x.jsx(p_, { resource: t }),
        },
        { id: "body", title: "Body", render: () => x.jsx(m_, { resource: t }) },
      ],
      selectedTab: o,
      setSelectedTab: l,
    });
  },
  h_ = ({ resource: t, sdkLanguage: e, startTimeOffset: n }) => {
    const [s, o] = P.useState(null);
    return (
      P.useEffect(() => {
        (async () => {
          if (t.request.postData) {
            const c = t.request.headers.find(
                (d) => d.name.toLowerCase() === "content-type",
              ),
              u = c ? c.value : "";
            if (t.request.postData._sha1) {
              const d = await fetch(`sha1/${t.request.postData._sha1}`);
              o({ text: Ku(await d.text(), u), mimeType: u });
            } else o({ text: Ku(t.request.postData.text, u), mimeType: u });
          } else o(null);
        })();
      }, [t]),
      x.jsxs("div", {
        className: "network-request-details-tab",
        children: [
          x.jsx("div", {
            className: "network-request-details-header",
            children: "General",
          }),
          x.jsx("div", {
            className: "network-request-details-url",
            children: `URL: ${t.request.url}`,
          }),
          x.jsx("div", {
            className: "network-request-details-general",
            children: `Method: ${t.request.method}`,
          }),
          t.response.status !== -1 &&
            x.jsxs("div", {
              className: "network-request-details-general",
              style: { display: "flex" },
              children: [
                "Status Code: ",
                x.jsx("span", {
                  className: y_(t.response.status),
                  style: { display: "inline-flex" },
                  children: `${t.response.status} ${t.response.statusText}`,
                }),
              ],
            }),
          t.request.queryString.length
            ? x.jsxs(x.Fragment, {
                children: [
                  x.jsx("div", {
                    className: "network-request-details-header",
                    children: "Query String Parameters",
                  }),
                  x.jsx("div", {
                    className: "network-request-details-headers",
                    children: t.request.queryString.map(
                      (l) => `${l.name}: ${l.value}`,
                    ).join(`
`),
                  }),
                ],
              })
            : null,
          x.jsx("div", {
            className: "network-request-details-header",
            children: "Request Headers",
          }),
          x.jsx("div", {
            className: "network-request-details-headers",
            children: t.request.headers.map((l) => `${l.name}: ${l.value}`)
              .join(`
`),
          }),
          x.jsx("div", {
            className: "network-request-details-header",
            children: "Time",
          }),
          x.jsx("div", {
            className: "network-request-details-general",
            children: `Start: ${mt(n)}`,
          }),
          x.jsx("div", {
            className: "network-request-details-general",
            children: `Duration: ${mt(t.time)}`,
          }),
          x.jsxs("div", {
            className: "network-request-details-copy",
            children: [
              x.jsx(Al, { description: "Copy as cURL", value: () => i_(t) }),
              x.jsx(Al, { description: "Copy as Fetch", value: () => o_(t) }),
              x.jsx(Al, {
                description: "Copy as Playwright",
                value: async () =>
                  f_(e).generatePlaywrightRequestCall(
                    t.request,
                    s == null ? void 0 : s.text,
                  ),
              }),
            ],
          }),
          s &&
            x.jsx("div", {
              className: "network-request-details-header",
              children: "Request Body",
            }),
          s &&
            x.jsx(Ns, {
              text: s.text,
              mimeType: s.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  p_ = ({ resource: t }) =>
    x.jsxs("div", {
      className: "network-request-details-tab",
      children: [
        x.jsx("div", {
          className: "network-request-details-header",
          children: "Response Headers",
        }),
        x.jsx("div", {
          className: "network-request-details-headers",
          children: t.response.headers.map((e) => `${e.name}: ${e.value}`)
            .join(`
`),
        }),
      ],
    }),
  m_ = ({ resource: t }) => {
    const [e, n] = P.useState(null);
    return (
      P.useEffect(() => {
        (async () => {
          if (t.response.content._sha1) {
            const o = t.response.content.mimeType.includes("image"),
              l = t.response.content.mimeType.includes("font"),
              c = await fetch(`sha1/${t.response.content._sha1}`);
            if (o) {
              const u = await c.blob(),
                d = new FileReader(),
                p = new Promise((y) => (d.onload = y));
              d.readAsDataURL(u), n({ dataUrl: (await p).target.result });
            } else if (l) {
              const u = await c.arrayBuffer();
              n({ font: u });
            } else {
              const u = Ku(await c.text(), t.response.content.mimeType);
              n({ text: u, mimeType: t.response.content.mimeType });
            }
          } else n(null);
        })();
      }, [t]),
      x.jsxs("div", {
        className: "network-request-details-tab",
        children: [
          !t.response.content._sha1 &&
            x.jsx("div", {
              children: "Response body is not available for this request.",
            }),
          e && e.font && x.jsx(g_, { font: e.font }),
          e &&
            e.dataUrl &&
            x.jsx("img", { draggable: "false", src: e.dataUrl }),
          e &&
            e.text &&
            x.jsx(Ns, {
              text: e.text,
              mimeType: e.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  g_ = ({ font: t }) => {
    const [e, n] = P.useState(!1);
    return (
      P.useEffect(() => {
        let s;
        try {
          (s = new FontFace("font-preview", t)),
            s.status === "loaded" && document.fonts.add(s),
            s.status === "error" && n(!0);
        } catch {
          n(!0);
        }
        return () => {
          document.fonts.delete(s);
        };
      }, [t]),
      e
        ? x.jsx("div", {
            className: "network-font-preview-error",
            children: "Could not load font preview",
          })
        : x.jsxs("div", {
            className: "network-font-preview",
            children: [
              "ABCDEFGHIJKLM",
              x.jsx("br", {}),
              "NOPQRSTUVWXYZ",
              x.jsx("br", {}),
              "abcdefghijklm",
              x.jsx("br", {}),
              "nopqrstuvwxyz",
              x.jsx("br", {}),
              "1234567890",
            ],
          })
    );
  };
function y_(t) {
  return t < 300 || t === 304
    ? "green-circle"
    : t < 400
      ? "yellow-circle"
      : "red-circle";
}
function Ku(t, e) {
  if (t === null) return "Loading...";
  const n = t;
  if (n === "") return "<Empty>";
  if (e.includes("application/json"))
    try {
      return JSON.stringify(JSON.parse(n), null, 2);
    } catch {
      return n;
    }
  return e.includes("application/x-www-form-urlencoded")
    ? decodeURIComponent(n)
    : n;
}
function v_(t) {
  const [e, n] = P.useState([]);
  P.useEffect(() => {
    const l = [];
    for (let c = 0; c < t.columns.length - 1; ++c) {
      const u = t.columns[c];
      l[c] = (l[c - 1] || 0) + t.columnWidths.get(u);
    }
    n(l);
  }, [t.columns, t.columnWidths]);
  function s(l) {
    const c = new Map(t.columnWidths.entries());
    for (let u = 0; u < l.length; ++u) {
      const d = l[u] - (l[u - 1] || 0),
        p = t.columns[u];
      c.set(p, d);
    }
    t.setColumnWidths(c);
  }
  const o = P.useCallback(
    (l) => {
      var c, u;
      (u = t.setSorting) == null ||
        u.call(t, {
          by: l,
          negate:
            ((c = t.sorting) == null ? void 0 : c.by) === l
              ? !t.sorting.negate
              : !1,
        });
    },
    [t],
  );
  return x.jsxs("div", {
    className: `grid-view ${t.name}-grid-view`,
    children: [
      x.jsx(Vg, {
        orientation: "horizontal",
        offsets: e,
        setOffsets: s,
        resizerColor: "var(--vscode-panel-border)",
        resizerWidth: 1,
        minColumnWidth: 25,
      }),
      x.jsxs("div", {
        className: "vbox",
        children: [
          x.jsx("div", {
            className: "grid-view-header",
            children: t.columns.map((l, c) =>
              x.jsxs(
                "div",
                {
                  className: "grid-view-header-cell " + w_(l, t.sorting),
                  style: {
                    width:
                      c < t.columns.length - 1 ? t.columnWidths.get(l) : void 0,
                  },
                  onClick: () => t.setSorting && o(l),
                  children: [
                    x.jsx("span", {
                      className: "grid-view-header-cell-title",
                      children: t.columnTitle(l),
                    }),
                    x.jsx("span", { className: "codicon codicon-triangle-up" }),
                    x.jsx("span", {
                      className: "codicon codicon-triangle-down",
                    }),
                  ],
                },
                t.columnTitle(l),
              ),
            ),
          }),
          x.jsx(ta, {
            name: t.name,
            items: t.items,
            id: t.id,
            render: (l, c) =>
              x.jsx(x.Fragment, {
                children: t.columns.map((u, d) => {
                  const { body: p, title: y } = t.render(l, u, c);
                  return x.jsx(
                    "div",
                    {
                      className: `grid-view-cell grid-view-column-${String(u)}`,
                      title: y,
                      style: {
                        width:
                          d < t.columns.length - 1
                            ? t.columnWidths.get(u)
                            : void 0,
                      },
                      children: p,
                    },
                    t.columnTitle(u),
                  );
                }),
              }),
            icon: t.icon,
            isError: t.isError,
            isWarning: t.isWarning,
            isInfo: t.isInfo,
            selectedItem: t.selectedItem,
            onAccepted: t.onAccepted,
            onSelected: t.onSelected,
            onHighlighted: t.onHighlighted,
            onIconClicked: t.onIconClicked,
            noItemsMessage: t.noItemsMessage,
            dataTestId: t.dataTestId,
            notSelectable: t.notSelectable,
          }),
        ],
      }),
    ],
  });
}
function w_(t, e) {
  return t === (e == null ? void 0 : e.by)
    ? " filter-" + (e.negate ? "negative" : "positive")
    : "";
}
const x_ = ["All", "Fetch", "HTML", "JS", "CSS", "Font", "Image"],
  S_ = { searchValue: "", resourceType: "All" },
  __ = ({ filterState: t, onFilterStateChange: e }) =>
    x.jsxs("div", {
      className: "network-filters",
      children: [
        x.jsx("input", {
          type: "search",
          placeholder: "Filter network",
          spellCheck: !1,
          value: t.searchValue,
          onChange: (n) => e({ ...t, searchValue: n.target.value }),
        }),
        x.jsx("div", {
          className: "network-filters-resource-types",
          children: x_.map((n) =>
            x.jsx(
              "div",
              {
                title: n,
                onClick: () => e({ ...t, resourceType: n }),
                className: `network-filters-resource-type ${t.resourceType === n ? "selected" : ""}`,
                children: n,
              },
              n,
            ),
          ),
        }),
      ],
    }),
  k_ = v_;
function E_(t, e) {
  const n = P.useMemo(
      () =>
        ((t == null ? void 0 : t.resources) || []).filter((c) =>
          e
            ? !!c._monotonicTime &&
              c._monotonicTime >= e.minimum &&
              c._monotonicTime <= e.maximum
            : !0,
        ),
      [t, e],
    ),
    s = P.useMemo(() => new L_(t), [t]);
  return { resources: n, contextIdMap: s };
}
const b_ = ({
    boundaries: t,
    networkModel: e,
    onEntryHovered: n,
    sdkLanguage: s,
  }) => {
    const [o, l] = P.useState(void 0),
      [c, u] = P.useState(void 0),
      [d, p] = P.useState(S_),
      { renderedEntries: y } = P.useMemo(() => {
        const S = e.resources
          .map((E) => I_(E, t, e.contextIdMap))
          .filter(P_(d));
        return o && M_(S, o), { renderedEntries: S };
      }, [e.resources, e.contextIdMap, d, o, t]),
      [v, m] = P.useState(() => new Map(Gg().map((S) => [S, N_(S)]))),
      w = P.useCallback((S) => {
        p(S), u(void 0);
      }, []);
    if (!e.resources.length) return x.jsx(Ir, { text: "No network calls" });
    const _ = x.jsx(k_, {
      name: "network",
      items: y,
      selectedItem: c,
      onSelected: (S) => u(S),
      onHighlighted: (S) =>
        n == null ? void 0 : n(S == null ? void 0 : S.resource),
      columns: C_(!!c, y),
      columnTitle: T_,
      columnWidths: v,
      setColumnWidths: m,
      isError: (S) => S.status.code >= 400 || S.status.code === -1,
      isInfo: (S) => !!S.route,
      render: (S, E) => A_(S, E),
      sorting: o,
      setSorting: l,
    });
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(__, { filterState: d, onFilterStateChange: w }),
        !c && _,
        c &&
          x.jsx(Fl, {
            sidebarSize: v.get("name"),
            sidebarIsFirst: !0,
            orientation: "horizontal",
            settingName: "networkResourceDetails",
            main: x.jsx(d_, {
              resource: c.resource,
              sdkLanguage: s,
              startTimeOffset: c.start,
              onClose: () => u(void 0),
            }),
            sidebar: _,
          }),
      ],
    });
  },
  T_ = (t) =>
    t === "contextId"
      ? "Source"
      : t === "name"
        ? "Name"
        : t === "method"
          ? "Method"
          : t === "status"
            ? "Status"
            : t === "contentType"
              ? "Content Type"
              : t === "duration"
                ? "Duration"
                : t === "size"
                  ? "Size"
                  : t === "start"
                    ? "Start"
                    : t === "route"
                      ? "Route"
                      : "",
  N_ = (t) =>
    t === "name"
      ? 200
      : t === "method" || t === "status"
        ? 60
        : t === "contentType"
          ? 200
          : t === "contextId"
            ? 60
            : 100;
function C_(t, e) {
  if (t) {
    const s = ["name"];
    return um(e) && s.unshift("contextId"), s;
  }
  let n = Gg();
  return um(e) || (n = n.filter((s) => s !== "contextId")), n;
}
function Gg() {
  return [
    "contextId",
    "name",
    "method",
    "status",
    "contentType",
    "duration",
    "size",
    "start",
    "route",
  ];
}
const A_ = (t, e) =>
  e === "contextId"
    ? { body: t.contextId, title: t.name.url }
    : e === "name"
      ? { body: t.name.name, title: t.name.url }
      : e === "method"
        ? { body: t.method }
        : e === "status"
          ? {
              body: t.status.code > 0 ? t.status.code : "",
              title: t.status.text,
            }
          : e === "contentType"
            ? { body: t.contentType }
            : e === "duration"
              ? { body: mt(t.duration) }
              : e === "size"
                ? { body: e1(t.size) }
                : e === "start"
                  ? { body: mt(t.start) }
                  : e === "route"
                    ? { body: t.route }
                    : { body: "" };
class L_ {
  constructor(e) {
    xe(this, "_pagerefToShortId", new Map());
    xe(this, "_contextToId", new Map());
    xe(this, "_lastPageId", 0);
    xe(this, "_lastApiRequestContextId", 0);
  }
  contextId(e) {
    return e.pageref
      ? this._pageId(e.pageref)
      : e._apiRequest
        ? this._apiRequestContextId(e)
        : "";
  }
  _pageId(e) {
    let n = this._pagerefToShortId.get(e);
    return (
      n ||
        (++this._lastPageId,
        (n = "page#" + this._lastPageId),
        this._pagerefToShortId.set(e, n)),
      n
    );
  }
  _apiRequestContextId(e) {
    const n = Dl(e);
    if (!n) return "";
    let s = this._contextToId.get(n);
    return (
      s ||
        (++this._lastApiRequestContextId,
        (s = "api#" + this._lastApiRequestContextId),
        this._contextToId.set(n, s)),
      s
    );
  }
}
function um(t) {
  const e = new Set();
  for (const n of t) if ((e.add(n.contextId), e.size > 1)) return !0;
  return !1;
}
const I_ = (t, e, n) => {
  const s = j_(t);
  let o;
  try {
    const u = new URL(t.request.url);
    (o = u.pathname.substring(u.pathname.lastIndexOf("/") + 1)),
      o || (o = u.host),
      u.search && (o += u.search);
  } catch {
    o = t.request.url;
  }
  let l = t.response.content.mimeType;
  const c = l.match(/^(.*);\s*charset=.*$/);
  return (
    c && (l = c[1]),
    {
      name: { name: o, url: t.request.url },
      method: t.request.method,
      status: { code: t.response.status, text: t.response.statusText },
      contentType: l,
      duration: t.time,
      size:
        t.response._transferSize > 0
          ? t.response._transferSize
          : t.response.bodySize,
      start: t._monotonicTime - e.minimum,
      route: s,
      resource: t,
      contextId: n.contextId(t),
    }
  );
};
function j_(t) {
  return t._wasAborted
    ? "aborted"
    : t._wasContinued
      ? "continued"
      : t._wasFulfilled
        ? "fulfilled"
        : t._apiRequest
          ? "api"
          : "";
}
function M_(t, e) {
  const n = O_(e == null ? void 0 : e.by);
  n && t.sort(n), e.negate && t.reverse();
}
function O_(t) {
  if (t === "start") return (e, n) => e.start - n.start;
  if (t === "duration") return (e, n) => e.duration - n.duration;
  if (t === "status") return (e, n) => e.status.code - n.status.code;
  if (t === "method")
    return (e, n) => {
      const s = e.method,
        o = n.method;
      return s.localeCompare(o);
    };
  if (t === "size") return (e, n) => e.size - n.size;
  if (t === "contentType")
    return (e, n) => e.contentType.localeCompare(n.contentType);
  if (t === "name") return (e, n) => e.name.name.localeCompare(n.name.name);
  if (t === "route") return (e, n) => e.route.localeCompare(n.route);
  if (t === "contextId")
    return (e, n) => e.contextId.localeCompare(n.contextId);
}
const $_ = {
  All: () => !0,
  Fetch: (t) => t === "application/json",
  HTML: (t) => t === "text/html",
  CSS: (t) => t === "text/css",
  JS: (t) => t.includes("javascript"),
  Font: (t) => t.includes("font"),
  Image: (t) => t.includes("image"),
};
function P_({ searchValue: t, resourceType: e }) {
  return (n) => {
    const s = $_[e];
    return (
      s(n.contentType) && n.name.url.toLowerCase().includes(t.toLowerCase())
    );
  };
}
function hf(t, e, n = {}) {
  var m;
  const s = new t.LineCounter(),
    o = { keepSourceTokens: !0, lineCounter: s, ...n },
    l = t.parseDocument(e, o),
    c = [],
    u = (w) => [s.linePos(w[0]), s.linePos(w[1])],
    d = (w) => {
      c.push({
        message: w.message,
        range: [s.linePos(w.pos[0]), s.linePos(w.pos[1])],
      });
    },
    p = (w, _) => {
      for (const S of _.items) {
        if (S instanceof t.Scalar && typeof S.value == "string") {
          const C = Hl.parse(S, o, c);
          C && ((w.children = w.children || []), w.children.push(C));
          continue;
        }
        if (S instanceof t.YAMLMap) {
          y(w, S);
          continue;
        }
        c.push({
          message: "Sequence items should be strings or maps",
          range: u(S.range || _.range),
        });
      }
    },
    y = (w, _) => {
      for (const S of _.items) {
        if (
          ((w.children = w.children || []),
          !(S.key instanceof t.Scalar && typeof S.key.value == "string"))
        ) {
          c.push({
            message: "Only string keys are supported",
            range: u(S.key.range || _.range),
          });
          continue;
        }
        const T = S.key,
          C = S.value;
        if (T.value === "text") {
          if (!(C instanceof t.Scalar && typeof C.value == "string")) {
            c.push({
              message: "Text value should be a string",
              range: u(S.value.range || _.range),
            });
            continue;
          }
          w.children.push({ kind: "text", text: fm(C.value) });
          continue;
        }
        const O = Hl.parse(T, o, c);
        if (!O) continue;
        if (C instanceof t.Scalar) {
          const F = typeof C.value;
          if (F !== "string" && F !== "number" && F !== "boolean") {
            c.push({
              message: "Node value should be a string or a sequence",
              range: u(S.value.range || _.range),
            });
            continue;
          }
          w.children.push({
            ...O,
            children: [{ kind: "text", text: fm(String(C.value)) }],
          });
          continue;
        }
        if (C instanceof t.YAMLSeq) {
          w.children.push(O), p(O, C);
          continue;
        }
        c.push({
          message: "Map values should be strings or sequences",
          range: u(S.value.range || _.range),
        });
      }
    },
    v = { kind: "role", role: "fragment" };
  return (
    l.errors.forEach(d),
    c.length
      ? { errors: c, fragment: v }
      : (l.contents instanceof t.YAMLSeq ||
          c.push({
            message:
              'Aria snapshot must be a YAML sequence, elements starting with " -"',
            range: l.contents
              ? u(l.contents.range)
              : [
                  { line: 0, col: 0 },
                  { line: 0, col: 0 },
                ],
          }),
        c.length
          ? { errors: c, fragment: v }
          : (p(v, l.contents),
            c.length
              ? { errors: c, fragment: R_ }
              : ((m = v.children) == null ? void 0 : m.length) === 1
                ? { fragment: v.children[0], errors: c }
                : { fragment: v, errors: c }))
  );
}
const R_ = { kind: "role", role: "fragment" };
function Jg(t) {
  return t
    .replace(/[\u200b\u00ad]/g, "")
    .replace(/[\r\n\s\t]+/g, " ")
    .trim();
}
function fm(t) {
  return t.startsWith("/") && t.endsWith("/") && t.length > 1
    ? { pattern: t.slice(1, -1) }
    : Jg(t);
}
class Hl {
  static parse(e, n, s) {
    try {
      return new Hl(e.value)._parse();
    } catch (o) {
      if (o instanceof dm) {
        const l =
          n.prettyErrors === !1
            ? o.message
            : o.message +
              `:

` +
              e.value +
              `
` +
              " ".repeat(o.pos) +
              `^
`;
        return (
          s.push({
            message: l,
            range: [
              n.lineCounter.linePos(e.range[0]),
              n.lineCounter.linePos(e.range[0] + o.pos),
            ],
          }),
          null
        );
      }
      throw o;
    }
  }
  constructor(e) {
    (this._input = e), (this._pos = 0), (this._length = e.length);
  }
  _peek() {
    return this._input[this._pos] || "";
  }
  _next() {
    return this._pos < this._length ? this._input[this._pos++] : null;
  }
  _eof() {
    return this._pos >= this._length;
  }
  _isWhitespace() {
    return !this._eof() && /\s/.test(this._peek());
  }
  _skipWhitespace() {
    for (; this._isWhitespace(); ) this._pos++;
  }
  _readIdentifier(e) {
    this._eof() &&
      this._throwError(`Unexpected end of input when expecting ${e}`);
    const n = this._pos;
    for (; !this._eof() && /[a-zA-Z]/.test(this._peek()); ) this._pos++;
    return this._input.slice(n, this._pos);
  }
  _readString() {
    let e = "",
      n = !1;
    for (; !this._eof(); ) {
      const s = this._next();
      if (n) (e += s), (n = !1);
      else if (s === "\\") n = !0;
      else {
        if (s === '"') return e;
        e += s;
      }
    }
    this._throwError("Unterminated string");
  }
  _throwError(e, n = 0) {
    throw new dm(e, n || this._pos);
  }
  _readRegex() {
    let e = "",
      n = !1,
      s = !1;
    for (; !this._eof(); ) {
      const o = this._next();
      if (n) (e += o), (n = !1);
      else if (o === "\\") (n = !0), (e += o);
      else {
        if (o === "/" && !s) return { pattern: e };
        o === "["
          ? ((s = !0), (e += o))
          : o === "]" && s
            ? ((e += o), (s = !1))
            : (e += o);
      }
    }
    this._throwError("Unterminated regex");
  }
  _readStringOrRegex() {
    const e = this._peek();
    return e === '"'
      ? (this._next(), Jg(this._readString()))
      : e === "/"
        ? (this._next(), this._readRegex())
        : null;
  }
  _readAttributes(e) {
    let n = this._pos;
    for (; this._skipWhitespace(), this._peek() === "["; ) {
      this._next(), this._skipWhitespace(), (n = this._pos);
      const s = this._readIdentifier("attribute");
      this._skipWhitespace();
      let o = "";
      if (this._peek() === "=")
        for (
          this._next(), this._skipWhitespace(), n = this._pos;
          this._peek() !== "]" && !this._isWhitespace() && !this._eof();

        )
          o += this._next();
      this._skipWhitespace(),
        this._peek() !== "]" && this._throwError("Expected ]"),
        this._next(),
        this._applyAttribute(e, s, o || "true", n);
    }
  }
  _parse() {
    this._skipWhitespace();
    const e = this._readIdentifier("role");
    this._skipWhitespace();
    const n = this._readStringOrRegex() || "",
      s = { kind: "role", role: e, name: n };
    return (
      this._readAttributes(s),
      this._skipWhitespace(),
      this._eof() || this._throwError("Unexpected input"),
      s
    );
  }
  _applyAttribute(e, n, s, o) {
    if (n === "checked") {
      this._assert(
        s === "true" || s === "false" || s === "mixed",
        'Value of "checked" attribute must be a boolean or "mixed"',
        o,
      ),
        (e.checked = s === "true" ? !0 : s === "false" ? !1 : "mixed");
      return;
    }
    if (n === "disabled") {
      this._assert(
        s === "true" || s === "false",
        'Value of "disabled" attribute must be a boolean',
        o,
      ),
        (e.disabled = s === "true");
      return;
    }
    if (n === "expanded") {
      this._assert(
        s === "true" || s === "false",
        'Value of "expanded" attribute must be a boolean',
        o,
      ),
        (e.expanded = s === "true");
      return;
    }
    if (n === "level") {
      this._assert(
        !isNaN(Number(s)),
        'Value of "level" attribute must be a number',
        o,
      ),
        (e.level = Number(s));
      return;
    }
    if (n === "pressed") {
      this._assert(
        s === "true" || s === "false" || s === "mixed",
        'Value of "pressed" attribute must be a boolean or "mixed"',
        o,
      ),
        (e.pressed = s === "true" ? !0 : s === "false" ? !1 : "mixed");
      return;
    }
    if (n === "selected") {
      this._assert(
        s === "true" || s === "false",
        'Value of "selected" attribute must be a boolean',
        o,
      ),
        (e.selected = s === "true");
      return;
    }
    this._assert(!1, `Unsupported attribute [${n}]`, o);
  }
  _assert(e, n, s) {
    e || this._throwError(n || "Assertion error", s);
  }
}
class dm extends Error {
  constructor(e, n) {
    super(e), (this.pos = n);
  }
}
let Yg = "";
function D_(t) {
  Yg = t;
}
function sa(t, e) {
  for (; e; ) {
    if (t.contains(e)) return !0;
    e = ey(e);
  }
  return !1;
}
function pt(t) {
  if (t.parentElement) return t.parentElement;
  if (t.parentNode && t.parentNode.nodeType === 11 && t.parentNode.host)
    return t.parentNode.host;
}
function Zg(t) {
  let e = t;
  for (; e.parentNode; ) e = e.parentNode;
  if (e.nodeType === 11 || e.nodeType === 9) return e;
}
function ey(t) {
  for (; t.parentElement; ) t = t.parentElement;
  return pt(t);
}
function Ri(t, e, n) {
  for (; t; ) {
    const s = t.closest(e);
    if (n && s !== n && s != null && s.contains(n)) return;
    if (s) return s;
    t = ey(t);
  }
}
function jr(t, e) {
  return t.ownerDocument && t.ownerDocument.defaultView
    ? t.ownerDocument.defaultView.getComputedStyle(t, e)
    : void 0;
}
function ty(t, e) {
  if (((e = e ?? jr(t)), !e)) return !0;
  if (Element.prototype.checkVisibility && Yg !== "webkit") {
    if (!t.checkVisibility()) return !1;
  } else {
    const n = t.closest("details,summary");
    if (n !== t && (n == null ? void 0 : n.nodeName) === "DETAILS" && !n.open)
      return !1;
  }
  return e.visibility === "visible";
}
function _s(t) {
  const e = jr(t);
  if (!e) return !0;
  if (e.display === "contents") {
    for (let s = t.firstChild; s; s = s.nextSibling)
      if ((s.nodeType === 1 && _s(s)) || (s.nodeType === 3 && ny(s))) return !0;
    return !1;
  }
  if (!ty(t, e)) return !1;
  const n = t.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function ny(t) {
  const e = t.ownerDocument.createRange();
  e.selectNode(t);
  const n = e.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function nt(t) {
  return t instanceof HTMLFormElement ? "FORM" : t.tagName.toUpperCase();
}
function hm(t) {
  return t.hasAttribute("aria-label") || t.hasAttribute("aria-labelledby");
}
const pm =
    "article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]",
  F_ = new Map([
    ["aria-atomic", void 0],
    ["aria-busy", void 0],
    ["aria-controls", void 0],
    ["aria-current", void 0],
    ["aria-describedby", void 0],
    ["aria-details", void 0],
    ["aria-dropeffect", void 0],
    ["aria-flowto", void 0],
    ["aria-grabbed", void 0],
    ["aria-hidden", void 0],
    ["aria-keyshortcuts", void 0],
    [
      "aria-label",
      new Set([
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript",
      ]),
    ],
    [
      "aria-labelledby",
      new Set([
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript",
      ]),
    ],
    ["aria-live", void 0],
    ["aria-owns", void 0],
    ["aria-relevant", void 0],
    ["aria-roledescription", new Set(["generic"])],
  ]);
function ry(t, e) {
  return [...F_].some(
    ([n, s]) => !(s != null && s.has(e || "")) && t.hasAttribute(n),
  );
}
function sy(t) {
  return !Number.isNaN(Number(String(t.getAttribute("tabindex"))));
}
function z_(t) {
  return !gy(t) && (B_(t) || sy(t));
}
function B_(t) {
  const e = nt(t);
  return ["BUTTON", "DETAILS", "SELECT", "TEXTAREA"].includes(e)
    ? !0
    : e === "A" || e === "AREA"
      ? t.hasAttribute("href")
      : e === "INPUT"
        ? !t.hidden
        : !1;
}
const xu = {
    A: (t) => (t.hasAttribute("href") ? "link" : null),
    AREA: (t) => (t.hasAttribute("href") ? "link" : null),
    ARTICLE: () => "article",
    ASIDE: () => "complementary",
    BLOCKQUOTE: () => "blockquote",
    BUTTON: () => "button",
    CAPTION: () => "caption",
    CODE: () => "code",
    DATALIST: () => "listbox",
    DD: () => "definition",
    DEL: () => "deletion",
    DETAILS: () => "group",
    DFN: () => "term",
    DIALOG: () => "dialog",
    DT: () => "term",
    EM: () => "emphasis",
    FIELDSET: () => "group",
    FIGURE: () => "figure",
    FOOTER: (t) => (Ri(t, pm) ? null : "contentinfo"),
    FORM: (t) => (hm(t) ? "form" : null),
    H1: () => "heading",
    H2: () => "heading",
    H3: () => "heading",
    H4: () => "heading",
    H5: () => "heading",
    H6: () => "heading",
    HEADER: (t) => (Ri(t, pm) ? null : "banner"),
    HR: () => "separator",
    HTML: () => "document",
    IMG: (t) =>
      t.getAttribute("alt") === "" &&
      !t.getAttribute("title") &&
      !ry(t) &&
      !sy(t)
        ? "presentation"
        : "img",
    INPUT: (t) => {
      const e = t.type.toLowerCase();
      if (e === "search")
        return t.hasAttribute("list") ? "combobox" : "searchbox";
      if (["email", "tel", "text", "url", ""].includes(e)) {
        const n = js(t, t.getAttribute("list"))[0];
        return n && nt(n) === "DATALIST" ? "combobox" : "textbox";
      }
      return e === "hidden" ? null : tk[e] || "textbox";
    },
    INS: () => "insertion",
    LI: () => "listitem",
    MAIN: () => "main",
    MARK: () => "mark",
    MATH: () => "math",
    MENU: () => "list",
    METER: () => "meter",
    NAV: () => "navigation",
    OL: () => "list",
    OPTGROUP: () => "group",
    OPTION: () => "option",
    OUTPUT: () => "status",
    P: () => "paragraph",
    PROGRESS: () => "progressbar",
    SECTION: (t) => (hm(t) ? "region" : null),
    SELECT: (t) =>
      t.hasAttribute("multiple") || t.size > 1 ? "listbox" : "combobox",
    STRONG: () => "strong",
    SUB: () => "subscript",
    SUP: () => "superscript",
    SVG: () => "img",
    TABLE: () => "table",
    TBODY: () => "rowgroup",
    TD: (t) => {
      const e = Ri(t, "table"),
        n = e ? ql(e) : "";
      return n === "grid" || n === "treegrid" ? "gridcell" : "cell";
    },
    TEXTAREA: () => "textbox",
    TFOOT: () => "rowgroup",
    TH: (t) => {
      if (t.getAttribute("scope") === "col") return "columnheader";
      if (t.getAttribute("scope") === "row") return "rowheader";
      const e = Ri(t, "table"),
        n = e ? ql(e) : "";
      return n === "grid" || n === "treegrid" ? "gridcell" : "cell";
    },
    THEAD: () => "rowgroup",
    TIME: () => "time",
    TR: () => "row",
    UL: () => "list",
  },
  U_ = {
    DD: ["DL", "DIV"],
    DIV: ["DL"],
    DT: ["DL", "DIV"],
    LI: ["OL", "UL"],
    TBODY: ["TABLE"],
    TD: ["TR"],
    TFOOT: ["TABLE"],
    TH: ["TR"],
    THEAD: ["TABLE"],
    TR: ["THEAD", "TBODY", "TFOOT", "TABLE"],
  };
function mm(t) {
  var s;
  const e = ((s = xu[nt(t)]) == null ? void 0 : s.call(xu, t)) || "";
  if (!e) return null;
  let n = t;
  for (; n; ) {
    const o = pt(n),
      l = U_[nt(n)];
    if (!l || !o || !l.includes(nt(o))) break;
    const c = ql(o);
    if ((c === "none" || c === "presentation") && !iy(o, c)) return c;
    n = o;
  }
  return e;
}
const H_ = [
  "alert",
  "alertdialog",
  "application",
  "article",
  "banner",
  "blockquote",
  "button",
  "caption",
  "cell",
  "checkbox",
  "code",
  "columnheader",
  "combobox",
  "complementary",
  "contentinfo",
  "definition",
  "deletion",
  "dialog",
  "directory",
  "document",
  "emphasis",
  "feed",
  "figure",
  "form",
  "generic",
  "grid",
  "gridcell",
  "group",
  "heading",
  "img",
  "insertion",
  "link",
  "list",
  "listbox",
  "listitem",
  "log",
  "main",
  "mark",
  "marquee",
  "math",
  "meter",
  "menu",
  "menubar",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "navigation",
  "none",
  "note",
  "option",
  "paragraph",
  "presentation",
  "progressbar",
  "radio",
  "radiogroup",
  "region",
  "row",
  "rowgroup",
  "rowheader",
  "scrollbar",
  "search",
  "searchbox",
  "separator",
  "slider",
  "spinbutton",
  "status",
  "strong",
  "subscript",
  "superscript",
  "switch",
  "tab",
  "table",
  "tablist",
  "tabpanel",
  "term",
  "textbox",
  "time",
  "timer",
  "toolbar",
  "tooltip",
  "tree",
  "treegrid",
  "treeitem",
];
function ql(t) {
  return (
    (t.getAttribute("role") || "")
      .split(" ")
      .map((n) => n.trim())
      .find((n) => H_.includes(n)) || null
  );
}
function iy(t, e) {
  return ry(t, e) || z_(t);
}
function Ye(t) {
  const e = ql(t);
  if (!e) return mm(t);
  if (e === "none" || e === "presentation") {
    const n = mm(t);
    if (iy(t, n)) return n;
  }
  return e;
}
function oy(t) {
  return t === null ? void 0 : t.toLowerCase() === "true";
}
function ly(t) {
  return ["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"].includes(nt(t));
}
function Ut(t) {
  if (ly(t)) return !0;
  const e = jr(t),
    n = t.nodeName === "SLOT";
  if ((e == null ? void 0 : e.display) === "contents" && !n) {
    for (let o = t.firstChild; o; o = o.nextSibling)
      if ((o.nodeType === 1 && !Ut(o)) || (o.nodeType === 3 && ny(o)))
        return !1;
    return !0;
  }
  return !(t.nodeName === "OPTION" && !!t.closest("select")) && !n && !ty(t, e)
    ? !0
    : ay(t);
}
function ay(t) {
  let e = er == null ? void 0 : er.get(t);
  if (e === void 0) {
    if (
      ((e = !1),
      t.parentElement &&
        t.parentElement.shadowRoot &&
        !t.assignedSlot &&
        (e = !0),
      !e)
    ) {
      const n = jr(t);
      e =
        !n || n.display === "none" || oy(t.getAttribute("aria-hidden")) === !0;
    }
    if (!e) {
      const n = pt(t);
      n && (e = ay(n));
    }
    er == null || er.set(t, e);
  }
  return e;
}
function js(t, e) {
  if (!e) return [];
  const n = Zg(t);
  if (!n) return [];
  try {
    const s = e.split(" ").filter((l) => !!l),
      o = new Set();
    for (const l of s) {
      const c = n.querySelector("#" + CSS.escape(l));
      c && o.add(c);
    }
    return [...o];
  } catch {
    return [];
  }
}
function Tn(t) {
  return t.trim();
}
function Bi(t) {
  return t
    .split(" ")
    .map((e) =>
      e
        .replace(
          /\r\n/g,
          `
`,
        )
        .replace(/[\u200b\u00ad]/g, "")
        .replace(/\s\s*/g, " "),
    )
    .join(" ")
    .trim();
}
function gm(t, e) {
  const n = [...t.querySelectorAll(e)];
  for (const s of js(t, t.getAttribute("aria-owns")))
    s.matches(e) && n.push(s), n.push(...s.querySelectorAll(e));
  return n;
}
function Vl(t, e) {
  const n = e === "::before" ? Ef : bf;
  if (n != null && n.has(t)) return (n == null ? void 0 : n.get(t)) || "";
  const s = jr(t, e),
    o = q_(t, s);
  return n && n.set(t, o), o;
}
function q_(t, e) {
  if (!e || e.display === "none" || e.visibility === "hidden") return "";
  const n = e.content;
  let s;
  if (
    (n[0] === "'" && n[n.length - 1] === "'") ||
    (n[0] === '"' && n[n.length - 1] === '"')
  )
    s = n.substring(1, n.length - 1);
  else if (n.startsWith("attr(") && n.endsWith(")")) {
    const o = n.substring(5, n.length - 1).trim();
    s = t.getAttribute(o) || "";
  }
  return s !== void 0
    ? (e.display || "inline") !== "inline"
      ? " " + s + " "
      : s
    : "";
}
function cy(t) {
  const e = t.getAttribute("aria-labelledby");
  if (e === null) return null;
  const n = js(t, e);
  return n.length ? n : null;
}
function V_(t, e) {
  const n = [
      "button",
      "cell",
      "checkbox",
      "columnheader",
      "gridcell",
      "heading",
      "link",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "option",
      "radio",
      "row",
      "rowheader",
      "switch",
      "tab",
      "tooltip",
      "treeitem",
    ].includes(t),
    s =
      e &&
      [
        "",
        "caption",
        "code",
        "contentinfo",
        "definition",
        "deletion",
        "emphasis",
        "insertion",
        "list",
        "listitem",
        "mark",
        "none",
        "paragraph",
        "presentation",
        "region",
        "row",
        "rowgroup",
        "section",
        "strong",
        "subscript",
        "superscript",
        "table",
        "term",
        "time",
      ].includes(t);
  return n || s;
}
function Wi(t, e) {
  const n = e ? Sf : xf;
  let s = n == null ? void 0 : n.get(t);
  return (
    s === void 0 &&
      ((s = ""),
      [
        "caption",
        "code",
        "definition",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "mark",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "suggestion",
        "superscript",
        "term",
        "time",
      ].includes(Ye(t) || "") ||
        (s = Bi(
          nn(t, {
            includeHidden: e,
            visitedElements: new Set(),
            embeddedInTargetElement: "self",
          }),
        )),
      n == null || n.set(t, s)),
    s
  );
}
function ym(t, e) {
  const n = e ? kf : _f;
  let s = n == null ? void 0 : n.get(t);
  if (s === void 0) {
    if (((s = ""), t.hasAttribute("aria-describedby"))) {
      const o = js(t, t.getAttribute("aria-describedby"));
      s = Bi(
        o
          .map((l) =>
            nn(l, {
              includeHidden: e,
              visitedElements: new Set(),
              embeddedInDescribedBy: { element: l, hidden: Ut(l) },
            }),
          )
          .join(" "),
      );
    } else
      t.hasAttribute("aria-description")
        ? (s = Bi(t.getAttribute("aria-description") || ""))
        : (s = Bi(t.getAttribute("title") || ""));
    n == null || n.set(t, s);
  }
  return s;
}
const W_ = [
  "application",
  "checkbox",
  "combobox",
  "gridcell",
  "listbox",
  "radiogroup",
  "slider",
  "spinbutton",
  "textbox",
  "tree",
  "columnheader",
  "rowheader",
  "searchbox",
  "switch",
  "treegrid",
];
function K_(t) {
  const e = Ye(t) || "";
  if (!e || !W_.includes(e)) return "false";
  const n = t.getAttribute("aria-invalid");
  return !n || n.trim() === "" || n.toLocaleLowerCase() === "false"
    ? "false"
    : n === "true" || n === "grammar" || n === "spelling"
      ? n
      : "true";
}
function Q_(t) {
  if ("validity" in t) {
    const e = t.validity;
    return (e == null ? void 0 : e.valid) === !1;
  }
  return !1;
}
function X_(t) {
  const e = gs;
  let n = gs == null ? void 0 : gs.get(t);
  if (n === void 0) {
    n = "";
    const s = K_(t) !== "false",
      o = Q_(t);
    if (s || o) {
      const l = t.getAttribute("aria-errormessage");
      n = js(t, l)
        .map((d) =>
          Bi(
            nn(d, {
              visitedElements: new Set(),
              embeddedInDescribedBy: { element: d, hidden: Ut(d) },
            }),
          ),
        )
        .join(" ")
        .trim();
    }
    e == null || e.set(t, n);
  }
  return n;
}
function nn(t, e) {
  var d, p, y, v;
  if (e.visitedElements.has(t)) return "";
  const n = {
    ...e,
    embeddedInTargetElement:
      e.embeddedInTargetElement === "self"
        ? "descendant"
        : e.embeddedInTargetElement,
  };
  if (!e.includeHidden) {
    const m =
      !!((d = e.embeddedInLabelledBy) != null && d.hidden) ||
      !!((p = e.embeddedInDescribedBy) != null && p.hidden) ||
      !!((y = e.embeddedInNativeTextAlternative) != null && y.hidden) ||
      !!((v = e.embeddedInLabel) != null && v.hidden);
    if (ly(t) || (!m && Ut(t))) return e.visitedElements.add(t), "";
  }
  const s = cy(t);
  if (!e.embeddedInLabelledBy) {
    const m = (s || [])
      .map((w) =>
        nn(w, {
          ...e,
          embeddedInLabelledBy: { element: w, hidden: Ut(w) },
          embeddedInDescribedBy: void 0,
          embeddedInTargetElement: void 0,
          embeddedInLabel: void 0,
          embeddedInNativeTextAlternative: void 0,
        }),
      )
      .join(" ");
    if (m) return m;
  }
  const o = Ye(t) || "",
    l = nt(t);
  if (
    e.embeddedInLabel ||
    e.embeddedInLabelledBy ||
    e.embeddedInTargetElement === "descendant"
  ) {
    const m = [...(t.labels || [])].includes(t),
      w = (s || []).includes(t);
    if (!m && !w) {
      if (o === "textbox")
        return (
          e.visitedElements.add(t),
          l === "INPUT" || l === "TEXTAREA" ? t.value : t.textContent || ""
        );
      if (["combobox", "listbox"].includes(o)) {
        e.visitedElements.add(t);
        let _;
        if (l === "SELECT")
          (_ = [...t.selectedOptions]),
            !_.length && t.options.length && _.push(t.options[0]);
        else {
          const S =
            o === "combobox" ? gm(t, "*").find((E) => Ye(E) === "listbox") : t;
          _ = S
            ? gm(S, '[aria-selected="true"]').filter((E) => Ye(E) === "option")
            : [];
        }
        return !_.length && l === "INPUT"
          ? t.value
          : _.map((S) => nn(S, n)).join(" ");
      }
      if (
        ["progressbar", "scrollbar", "slider", "spinbutton", "meter"].includes(
          o,
        )
      )
        return (
          e.visitedElements.add(t),
          t.hasAttribute("aria-valuetext")
            ? t.getAttribute("aria-valuetext") || ""
            : t.hasAttribute("aria-valuenow")
              ? t.getAttribute("aria-valuenow") || ""
              : t.getAttribute("value") || ""
        );
      if (["menu"].includes(o)) return e.visitedElements.add(t), "";
    }
  }
  const c = t.getAttribute("aria-label") || "";
  if (Tn(c)) return e.visitedElements.add(t), c;
  if (!["presentation", "none"].includes(o)) {
    if (l === "INPUT" && ["button", "submit", "reset"].includes(t.type)) {
      e.visitedElements.add(t);
      const m = t.value || "";
      return Tn(m)
        ? m
        : t.type === "submit"
          ? "Submit"
          : t.type === "reset"
            ? "Reset"
            : t.getAttribute("title") || "";
    }
    if (l === "INPUT" && t.type === "image") {
      e.visitedElements.add(t);
      const m = t.labels || [];
      if (m.length && !e.embeddedInLabelledBy) return hl(m, e);
      const w = t.getAttribute("alt") || "";
      if (Tn(w)) return w;
      const _ = t.getAttribute("title") || "";
      return Tn(_) ? _ : "Submit";
    }
    if (!s && l === "BUTTON") {
      e.visitedElements.add(t);
      const m = t.labels || [];
      if (m.length) return hl(m, e);
    }
    if (!s && l === "OUTPUT") {
      e.visitedElements.add(t);
      const m = t.labels || [];
      return m.length ? hl(m, e) : t.getAttribute("title") || "";
    }
    if (!s && (l === "TEXTAREA" || l === "SELECT" || l === "INPUT")) {
      e.visitedElements.add(t);
      const m = t.labels || [];
      if (m.length) return hl(m, e);
      const w =
          (l === "INPUT" &&
            ["text", "password", "search", "tel", "email", "url"].includes(
              t.type,
            )) ||
          l === "TEXTAREA",
        _ = t.getAttribute("placeholder") || "",
        S = t.getAttribute("title") || "";
      return !w || S ? S : _;
    }
    if (!s && l === "FIELDSET") {
      e.visitedElements.add(t);
      for (let w = t.firstElementChild; w; w = w.nextElementSibling)
        if (nt(w) === "LEGEND")
          return nn(w, {
            ...n,
            embeddedInNativeTextAlternative: { element: w, hidden: Ut(w) },
          });
      return t.getAttribute("title") || "";
    }
    if (!s && l === "FIGURE") {
      e.visitedElements.add(t);
      for (let w = t.firstElementChild; w; w = w.nextElementSibling)
        if (nt(w) === "FIGCAPTION")
          return nn(w, {
            ...n,
            embeddedInNativeTextAlternative: { element: w, hidden: Ut(w) },
          });
      return t.getAttribute("title") || "";
    }
    if (l === "IMG") {
      e.visitedElements.add(t);
      const m = t.getAttribute("alt") || "";
      return Tn(m) ? m : t.getAttribute("title") || "";
    }
    if (l === "TABLE") {
      e.visitedElements.add(t);
      for (let w = t.firstElementChild; w; w = w.nextElementSibling)
        if (nt(w) === "CAPTION")
          return nn(w, {
            ...n,
            embeddedInNativeTextAlternative: { element: w, hidden: Ut(w) },
          });
      const m = t.getAttribute("summary") || "";
      if (m) return m;
    }
    if (l === "AREA") {
      e.visitedElements.add(t);
      const m = t.getAttribute("alt") || "";
      return Tn(m) ? m : t.getAttribute("title") || "";
    }
    if (l === "SVG" || t.ownerSVGElement) {
      e.visitedElements.add(t);
      for (let m = t.firstElementChild; m; m = m.nextElementSibling)
        if (nt(m) === "TITLE" && m.ownerSVGElement)
          return nn(m, {
            ...n,
            embeddedInLabelledBy: { element: m, hidden: Ut(m) },
          });
    }
    if (t.ownerSVGElement && l === "A") {
      const m = t.getAttribute("xlink:title") || "";
      if (Tn(m)) return e.visitedElements.add(t), m;
    }
  }
  const u = l === "SUMMARY" && !["presentation", "none"].includes(o);
  if (
    V_(o, e.embeddedInTargetElement === "descendant") ||
    u ||
    e.embeddedInLabelledBy ||
    e.embeddedInDescribedBy ||
    e.embeddedInLabel ||
    e.embeddedInNativeTextAlternative
  ) {
    e.visitedElements.add(t);
    const m = G_(t, n);
    if (e.embeddedInTargetElement === "self" ? Tn(m) : m) return m;
  }
  if (!["presentation", "none"].includes(o) || l === "IFRAME") {
    e.visitedElements.add(t);
    const m = t.getAttribute("title") || "";
    if (Tn(m)) return m;
  }
  return e.visitedElements.add(t), "";
}
function G_(t, e) {
  const n = [],
    s = (l, c) => {
      var u;
      if (!(c && l.assignedSlot))
        if (l.nodeType === 1) {
          const d = ((u = jr(l)) == null ? void 0 : u.display) || "inline";
          let p = nn(l, e);
          (d !== "inline" || l.nodeName === "BR") && (p = " " + p + " "),
            n.push(p);
        } else l.nodeType === 3 && n.push(l.textContent || "");
    };
  n.push(Vl(t, "::before"));
  const o = t.nodeName === "SLOT" ? t.assignedNodes() : [];
  if (o.length) for (const l of o) s(l, !1);
  else {
    for (let l = t.firstChild; l; l = l.nextSibling) s(l, !0);
    if (t.shadowRoot)
      for (let l = t.shadowRoot.firstChild; l; l = l.nextSibling) s(l, !0);
    for (const l of js(t, t.getAttribute("aria-owns"))) s(l, !0);
  }
  return n.push(Vl(t, "::after")), n.join("");
}
const pf = [
  "gridcell",
  "option",
  "row",
  "tab",
  "rowheader",
  "columnheader",
  "treeitem",
];
function uy(t) {
  return nt(t) === "OPTION"
    ? t.selected
    : pf.includes(Ye(t) || "")
      ? oy(t.getAttribute("aria-selected")) === !0
      : !1;
}
const mf = [
  "checkbox",
  "menuitemcheckbox",
  "option",
  "radio",
  "switch",
  "menuitemradio",
  "treeitem",
];
function fy(t) {
  const e = gf(t, !0);
  return e === "error" ? !1 : e;
}
function J_(t) {
  return gf(t, !0);
}
function Y_(t) {
  return gf(t, !1);
}
function gf(t, e) {
  const n = nt(t);
  if (e && n === "INPUT" && t.indeterminate) return "mixed";
  if (n === "INPUT" && ["checkbox", "radio"].includes(t.type)) return t.checked;
  if (mf.includes(Ye(t) || "")) {
    const s = t.getAttribute("aria-checked");
    return s === "true" ? !0 : e && s === "mixed" ? "mixed" : !1;
  }
  return "error";
}
const Z_ = [
  "checkbox",
  "combobox",
  "grid",
  "gridcell",
  "listbox",
  "radiogroup",
  "slider",
  "spinbutton",
  "textbox",
  "columnheader",
  "rowheader",
  "searchbox",
  "switch",
  "treegrid",
];
function ek(t) {
  const e = nt(t);
  return ["INPUT", "TEXTAREA", "SELECT"].includes(e)
    ? t.hasAttribute("readonly")
    : Z_.includes(Ye(t) || "")
      ? t.getAttribute("aria-readonly") === "true"
      : t.isContentEditable
        ? !1
        : "error";
}
const yf = ["button"];
function dy(t) {
  if (yf.includes(Ye(t) || "")) {
    const e = t.getAttribute("aria-pressed");
    if (e === "true") return !0;
    if (e === "mixed") return "mixed";
  }
  return !1;
}
const vf = [
  "application",
  "button",
  "checkbox",
  "combobox",
  "gridcell",
  "link",
  "listbox",
  "menuitem",
  "row",
  "rowheader",
  "tab",
  "treeitem",
  "columnheader",
  "menuitemcheckbox",
  "menuitemradio",
  "rowheader",
  "switch",
];
function hy(t) {
  if (nt(t) === "DETAILS") return t.open;
  if (vf.includes(Ye(t) || "")) {
    const e = t.getAttribute("aria-expanded");
    return e === null ? void 0 : e === "true";
  }
}
const wf = ["heading", "listitem", "row", "treeitem"];
function py(t) {
  const e = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[nt(t)];
  if (e) return e;
  if (wf.includes(Ye(t) || "")) {
    const n = t.getAttribute("aria-level"),
      s = n === null ? Number.NaN : Number(n);
    if (Number.isInteger(s) && s >= 1) return s;
  }
  return 0;
}
const my = [
  "application",
  "button",
  "composite",
  "gridcell",
  "group",
  "input",
  "link",
  "menuitem",
  "scrollbar",
  "separator",
  "tab",
  "checkbox",
  "columnheader",
  "combobox",
  "grid",
  "listbox",
  "menu",
  "menubar",
  "menuitemcheckbox",
  "menuitemradio",
  "option",
  "radio",
  "radiogroup",
  "row",
  "rowheader",
  "searchbox",
  "select",
  "slider",
  "spinbutton",
  "switch",
  "tablist",
  "textbox",
  "toolbar",
  "tree",
  "treegrid",
  "treeitem",
];
function Wl(t) {
  return gy(t) || vy(t);
}
function gy(t) {
  return (
    ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTION", "OPTGROUP"].includes(
      t.tagName,
    ) &&
    (t.hasAttribute("disabled") || yy(t))
  );
}
function yy(t) {
  return t
    ? nt(t) === "FIELDSET" && t.hasAttribute("disabled")
      ? !0
      : yy(t.parentElement)
    : !1;
}
function vy(t) {
  if (!t) return !1;
  if (my.includes(Ye(t) || "")) {
    const e = (t.getAttribute("aria-disabled") || "").toLowerCase();
    if (e === "true") return !0;
    if (e === "false") return !1;
  }
  return vy(pt(t));
}
function hl(t, e) {
  return [...t]
    .map((n) =>
      nn(n, {
        ...e,
        embeddedInLabel: { element: n, hidden: Ut(n) },
        embeddedInNativeTextAlternative: void 0,
        embeddedInLabelledBy: void 0,
        embeddedInDescribedBy: void 0,
        embeddedInTargetElement: void 0,
      }),
    )
    .filter((n) => !!n)
    .join(" ");
}
let xf,
  Sf,
  _f,
  kf,
  gs,
  er,
  Ef,
  bf,
  wy = 0;
function Tf() {
  ++wy,
    xf ?? (xf = new Map()),
    Sf ?? (Sf = new Map()),
    _f ?? (_f = new Map()),
    kf ?? (kf = new Map()),
    gs ?? (gs = new Map()),
    er ?? (er = new Map()),
    Ef ?? (Ef = new Map()),
    bf ?? (bf = new Map());
}
function Nf() {
  --wy ||
    ((xf = void 0),
    (Sf = void 0),
    (_f = void 0),
    (kf = void 0),
    (gs = void 0),
    (er = void 0),
    (Ef = void 0),
    (bf = void 0));
}
const tk = {
  button: "button",
  checkbox: "checkbox",
  image: "button",
  number: "spinbutton",
  radio: "radio",
  range: "slider",
  reset: "button",
  submit: "button",
};
function nk(t) {
  return xy(t) ? "'" + t.replace(/'/g, "''") + "'" : t;
}
function vm(t) {
  return xy(t)
    ? '"' +
        t.replace(/[\\"\x00-\x1f\x7f-\x9f]/g, (e) => {
          switch (e) {
            case "\\":
              return "\\\\";
            case '"':
              return '\\"';
            case "\b":
              return "\\b";
            case "\f":
              return "\\f";
            case `
`:
              return "\\n";
            case "\r":
              return "\\r";
            case "	":
              return "\\t";
            default:
              return "\\x" + e.charCodeAt(0).toString(16).padStart(2, "0");
          }
        }) +
        '"'
    : t;
}
function xy(t) {
  return !!(
    t.length === 0 ||
    /^\s|\s$/.test(t) ||
    /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/.test(t) ||
    /^-/.test(t) ||
    /[\n:](\s|$)/.test(t) ||
    /\s#/.test(t) ||
    /[\n\r]/.test(t) ||
    /^[&*\],?!>|@"'#%]/.test(t) ||
    /[{}`]/.test(t) ||
    /^\[/.test(t) ||
    !isNaN(Number(t)) ||
    ["y", "n", "yes", "no", "true", "false", "on", "off", "null"].includes(
      t.toLowerCase(),
    )
  );
}
function Kl(t) {
  const e = new Set(),
    n = {
      root: { role: "fragment", name: "", children: [], element: t },
      elements: new Map(),
      ids: new Map(),
    },
    s = (c) => {
      const u = n.elements.size + 1;
      n.elements.set(u, c), n.ids.set(c, u);
    };
  s(t);
  const o = (c, u) => {
    if (e.has(u)) return;
    if ((e.add(u), u.nodeType === Node.TEXT_NODE && u.nodeValue)) {
      const v = u.nodeValue;
      c.role !== "textbox" && v && c.children.push(u.nodeValue || "");
      return;
    }
    if (u.nodeType !== Node.ELEMENT_NODE) return;
    const d = u;
    if (Ut(d)) return;
    const p = [];
    if (d.hasAttribute("aria-owns")) {
      const v = d.getAttribute("aria-owns").split(/\s+/);
      for (const m of v) {
        const w = t.ownerDocument.getElementById(m);
        w && p.push(w);
      }
    }
    s(d);
    const y = rk(d);
    y && c.children.push(y), l(y || c, d, p);
  };
  function l(c, u, d = []) {
    var m;
    const y =
      (((m = jr(u)) == null ? void 0 : m.display) || "inline") !== "inline" ||
      u.nodeName === "BR"
        ? " "
        : "";
    y && c.children.push(y), c.children.push(Vl(u, "::before"));
    const v = u.nodeName === "SLOT" ? u.assignedNodes() : [];
    if (v.length) for (const w of v) o(c, w);
    else {
      for (let w = u.firstChild; w; w = w.nextSibling)
        w.assignedSlot || o(c, w);
      if (u.shadowRoot)
        for (let w = u.shadowRoot.firstChild; w; w = w.nextSibling) o(c, w);
    }
    for (const w of d) o(c, w);
    c.children.push(Vl(u, "::after")),
      y && c.children.push(y),
      c.children.length === 1 && c.name === c.children[0] && (c.children = []);
  }
  Tf();
  try {
    o(n.root, t);
  } finally {
    Nf();
  }
  return sk(n.root), n;
}
function rk(t) {
  const e = Ye(t);
  if (!e || e === "presentation" || e === "none") return null;
  const n = gt(Wi(t, !1) || ""),
    s = { role: e, name: n, children: [], element: t };
  return (
    mf.includes(e) && (s.checked = fy(t)),
    my.includes(e) && (s.disabled = Wl(t)),
    vf.includes(e) && (s.expanded = hy(t)),
    wf.includes(e) && (s.level = py(t)),
    yf.includes(e) && (s.pressed = dy(t)),
    pf.includes(e) && (s.selected = uy(t)),
    (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) &&
      t.type !== "checkbox" &&
      t.type !== "radio" &&
      (s.children = [t.value]),
    s
  );
}
function sk(t) {
  const e = (s, o) => {
      if (!s.length) return;
      const l = gt(s.join(""));
      l && o.push(l), (s.length = 0);
    },
    n = (s) => {
      const o = [],
        l = [];
      for (const c of s.children || [])
        typeof c == "string" ? l.push(c) : (e(l, o), n(c), o.push(c));
      e(l, o),
        (s.children = o.length ? o : []),
        s.children.length === 1 &&
          s.children[0] === s.name &&
          (s.children = []);
    };
  n(t);
}
function Sy(t, e) {
  return e
    ? t
      ? typeof e == "string"
        ? t === e
        : !!t.match(new RegExp(e.pattern))
      : !1
    : !0;
}
function ik(t, e) {
  return Sy(t, e.text);
}
function ok(t, e) {
  return Sy(t, e.name);
}
function lk(t, e) {
  const n = Kl(t).root;
  return {
    matches: ky(n, e, !1),
    received: { raw: Ui(n, { mode: "raw" }), regex: Ui(n, { mode: "regex" }) },
  };
}
function ak(t, e) {
  const n = Kl(t).root;
  return ky(n, e, !0).map((o) => o.element);
}
function _y(t, e, n) {
  return typeof t == "string" && e.kind === "text"
    ? ik(t, e)
    : t !== null && typeof t == "object" && e.kind === "role"
      ? !(
          (e.role !== "fragment" && e.role !== t.role) ||
          (e.checked !== void 0 && e.checked !== t.checked) ||
          (e.disabled !== void 0 && e.disabled !== t.disabled) ||
          (e.expanded !== void 0 && e.expanded !== t.expanded) ||
          (e.level !== void 0 && e.level !== t.level) ||
          (e.pressed !== void 0 && e.pressed !== t.pressed) ||
          (e.selected !== void 0 && e.selected !== t.selected) ||
          !ok(t.name, e) ||
          !ck(t.children || [], e.children || [])
        )
      : !1;
}
function ck(t, e, n) {
  if (e.length > t.length) return !1;
  const s = t.slice(),
    o = e.slice();
  for (const l of o) {
    let c = s.shift();
    for (; c && !_y(c, l); ) c = s.shift();
    if (!c) return !1;
  }
  return !0;
}
function ky(t, e, n) {
  const s = [],
    o = (l, c) => {
      if (_y(l, e)) {
        const u = typeof l == "string" ? c : l;
        return u && s.push(u), !n;
      }
      if (typeof l == "string") return !1;
      for (const u of l.children || []) if (o(u, l)) return !0;
      return !1;
    };
  return o(t, null), s;
}
function Ui(t, e) {
  const n = [],
    s = (e == null ? void 0 : e.mode) === "regex" ? fk : () => !0,
    o = (e == null ? void 0 : e.mode) === "regex" ? uk : (c) => c,
    l = (c, u, d) => {
      if (typeof c == "string") {
        if (u && !s(u, c)) return;
        const v = vm(o(c));
        v && n.push(d + "- text: " + v);
        return;
      }
      let p = c.role;
      if (c.name && c.name.length <= 900) {
        const v = o(c.name);
        if (v) {
          const m =
            v.startsWith("/") && v.endsWith("/") ? v : JSON.stringify(v);
          p += " " + m;
        }
      }
      if (
        (c.checked === "mixed" && (p += " [checked=mixed]"),
        c.checked === !0 && (p += " [checked]"),
        c.disabled && (p += " [disabled]"),
        c.expanded && (p += " [expanded]"),
        c.level && (p += ` [level=${c.level}]`),
        c.pressed === "mixed" && (p += " [pressed=mixed]"),
        c.pressed === !0 && (p += " [pressed]"),
        c.selected === !0 && (p += " [selected]"),
        e != null && e.ids)
      ) {
        const v = e == null ? void 0 : e.ids.get(c.element);
        v && (p += ` [id=${v}]`);
      }
      const y = d + "- " + nk(p);
      if (!c.children.length) n.push(y);
      else if (c.children.length === 1 && typeof c.children[0] == "string") {
        const v = s(c, c.children[0]) ? o(c.children[0]) : null;
        v ? n.push(y + ": " + vm(v)) : n.push(y);
      } else {
        n.push(y + ":");
        for (const v of c.children || []) l(v, c, d + "  ");
      }
    };
  if (t.role === "fragment") for (const c of t.children || []) l(c, t, "");
  else l(t, null, "");
  return n.join(`
`);
}
function uk(t) {
  const e = [
    { regex: /\b[\d,.]+[bkmBKM]+\b/, replacement: "[\\d,.]+[bkmBKM]+" },
    { regex: /\b\d+[hmsp]+\b/, replacement: "\\d+[hmsp]+" },
    { regex: /\b[\d,.]+[hmsp]+\b/, replacement: "[\\d,.]+[hmsp]+" },
    { regex: /\b\d+,\d+\b/, replacement: "\\d+,\\d+" },
    { regex: /\b\d+\.\d{2,}\b/, replacement: "\\d+\\.\\d+" },
    { regex: /\b\d{2,}\.\d+\b/, replacement: "\\d+\\.\\d+" },
    { regex: /\b\d{2,}\b/, replacement: "\\d+" },
  ];
  let n = "",
    s = 0;
  const o = new RegExp(e.map((l) => "(" + l.regex.source + ")").join("|"), "g");
  return (
    t.replace(o, (l, ...c) => {
      const u = c[c.length - 2],
        d = c.slice(0, -2);
      n += Bl(t.slice(s, u));
      for (let p = 0; p < d.length; p++)
        if (d[p]) {
          const { replacement: y } = e[p];
          n += y;
          break;
        }
      return (s = u + l.length), l;
    }),
    n ? ((n += Bl(t.slice(s))), String(new RegExp(n))) : t
  );
}
function fk(t, e) {
  if (!e.length) return !1;
  if (!t.name) return !0;
  if (t.name.length > e.length) return !1;
  const n = e.length <= 200 && t.name.length <= 200 ? Q1(e, t.name) : "";
  let s = e;
  for (; n && s.includes(n); ) s = s.replace(n, "");
  return s.trim().length / e.length > 0.1;
}
const wm =
  ":host{font-size:13px;font-family:system-ui,Ubuntu,Droid Sans,sans-serif;color:#333}svg{position:absolute;height:0}x-pw-tooltip{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#fff;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:none;font-size:12.8px;font-weight:400;left:0;line-height:1.5;max-width:600px;position:absolute;top:0;padding:0;flex-direction:column;overflow:hidden}x-pw-tooltip-line{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;cursor:pointer}x-pw-tooltip-line.selectable:hover{background-color:#f2f2f2;overflow:hidden}x-pw-tooltip-footer{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;color:#777}x-pw-dialog{background-color:#fff;pointer-events:auto;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:flex;flex-direction:column;position:absolute;width:400px;height:150px;z-index:10;font-size:13px}x-pw-dialog-body{display:flex;flex-direction:column;flex:auto}x-pw-dialog-body label{margin:5px 8px;display:flex;flex-direction:row;align-items:center}x-pw-highlight{position:absolute;top:0;left:0;width:0;height:0}x-pw-action-point{position:absolute;width:20px;height:20px;background:red;border-radius:10px;margin:-10px 0 0 -10px;z-index:2}x-pw-separator{height:1px;margin:6px 9px;background:#949494e5}x-pw-tool-gripper{height:28px;width:24px;margin:2px 0;cursor:grab}x-pw-tool-gripper:active{cursor:grabbing}x-pw-tool-gripper>x-div{width:16px;height:16px;margin:6px 4px;clip-path:url(#icon-gripper);background-color:#555}x-pw-tools-list>label{display:flex;align-items:center;margin:0 10px;-webkit-user-select:none;user-select:none}x-pw-tools-list{display:flex;width:100%;border-bottom:1px solid #dddddd}x-pw-tool-item{pointer-events:auto;height:28px;width:28px;border-radius:3px}x-pw-tool-item:not(.disabled){cursor:pointer}x-pw-tool-item:not(.disabled):hover{background-color:#dbdbdb}x-pw-tool-item.toggled{background-color:#8acae480}x-pw-tool-item.toggled:not(.disabled):hover{background-color:#8acae4c4}x-pw-tool-item>x-div{width:16px;height:16px;margin:6px;background-color:#3a3a3a}x-pw-tool-item.disabled>x-div{background-color:#61616180;cursor:default}x-pw-tool-item.record.toggled{background-color:transparent}x-pw-tool-item.record.toggled:not(.disabled):hover{background-color:#dbdbdb}x-pw-tool-item.record.toggled>x-div{background-color:#a1260d}x-pw-tool-item.record.disabled.toggled>x-div{opacity:.8}x-pw-tool-item.accept>x-div{background-color:#388a34}x-pw-tool-item.record>x-div{clip-path:url(#icon-circle-large-filled)}x-pw-tool-item.pick-locator>x-div{clip-path:url(#icon-inspect)}x-pw-tool-item.text>x-div{clip-path:url(#icon-whole-word)}x-pw-tool-item.visibility>x-div{clip-path:url(#icon-eye)}x-pw-tool-item.value>x-div{clip-path:url(#icon-symbol-constant)}x-pw-tool-item.snapshot>x-div{clip-path:url(#icon-gist)}x-pw-tool-item.accept>x-div{clip-path:url(#icon-check)}x-pw-tool-item.cancel>x-div{clip-path:url(#icon-close)}x-pw-tool-item.succeeded>x-div{clip-path:url(#icon-pass);background-color:#388a34!important}x-pw-overlay{position:absolute;top:0;max-width:min-content;z-index:2147483647;background:transparent;pointer-events:auto}x-pw-overlay x-pw-tools-list{background-color:#fffd;box-shadow:#0000001a 0 5px 5px;border-radius:3px;border-bottom:none}x-pw-overlay x-pw-tool-item{margin:2px}textarea.text-editor{font-family:system-ui,Ubuntu,Droid Sans,sans-serif;flex:auto;border:none;margin:6px 10px;color:#333;outline:1px solid transparent!important;resize:none;padding:0;font-size:13px}textarea.text-editor.does-not-match{outline:1px solid red!important}x-div{display:block}x-spacer{flex:auto}*{box-sizing:border-box}*[hidden]{display:none!important}x-locator-editor{flex:none;width:100%;height:60px;padding:4px;border-bottom:1px solid #dddddd;outline:1px solid transparent}x-locator-editor.does-not-match{outline:1px solid red}.CodeMirror{width:100%!important;height:100%!important}";
class Su {
  constructor(e) {
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._language = "javascript"),
      (this._injectedScript = e);
    const n = e.document;
    (this._isUnderTest = e.isUnderTest),
      (this._glassPaneElement = n.createElement("x-pw-glass")),
      (this._glassPaneElement.style.position = "fixed"),
      (this._glassPaneElement.style.top = "0"),
      (this._glassPaneElement.style.right = "0"),
      (this._glassPaneElement.style.bottom = "0"),
      (this._glassPaneElement.style.left = "0"),
      (this._glassPaneElement.style.zIndex = "2147483646"),
      (this._glassPaneElement.style.pointerEvents = "none"),
      (this._glassPaneElement.style.display = "flex"),
      (this._glassPaneElement.style.backgroundColor = "transparent");
    for (const s of [
      "click",
      "auxclick",
      "dragstart",
      "input",
      "keydown",
      "keyup",
      "pointerdown",
      "pointerup",
      "mousedown",
      "mouseup",
      "mouseleave",
      "focus",
      "scroll",
    ])
      this._glassPaneElement.addEventListener(s, (o) => {
        o.stopPropagation(),
          o.stopImmediatePropagation(),
          o.type === "click" &&
            o.button === 0 &&
            this._highlightOptions.tooltipListItemSelected &&
            this._highlightOptions.tooltipListItemSelected(void 0);
      });
    if (
      ((this._actionPointElement = n.createElement("x-pw-action-point")),
      this._actionPointElement.setAttribute("hidden", "true"),
      (this._glassPaneShadow = this._glassPaneElement.attachShadow({
        mode: this._isUnderTest ? "open" : "closed",
      })),
      typeof this._glassPaneShadow.adoptedStyleSheets.push == "function")
    ) {
      const s = new this._injectedScript.window.CSSStyleSheet();
      s.replaceSync(wm), this._glassPaneShadow.adoptedStyleSheets.push(s);
    } else {
      const s = this._injectedScript.document.createElement("style");
      (s.textContent = wm), this._glassPaneShadow.appendChild(s);
    }
    this._glassPaneShadow.appendChild(this._actionPointElement);
  }
  install() {
    this._injectedScript.document.documentElement &&
      !this._injectedScript.document.documentElement.contains(
        this._glassPaneElement,
      ) &&
      this._injectedScript.document.documentElement.appendChild(
        this._glassPaneElement,
      );
  }
  setLanguage(e) {
    this._language = e;
  }
  runHighlightOnRaf(e) {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this.updateHighlight(
        this._injectedScript.querySelectorAll(
          e,
          this._injectedScript.document.documentElement,
        ),
        { tooltipText: nr(this._language, Nn(e)) },
      ),
      (this._rafRequest = this._injectedScript.builtinRequestAnimationFrame(
        () => this.runHighlightOnRaf(e),
      ));
  }
  uninstall() {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this._glassPaneElement.remove();
  }
  showActionPoint(e, n) {
    (this._actionPointElement.style.top = n + "px"),
      (this._actionPointElement.style.left = e + "px"),
      (this._actionPointElement.hidden = !1);
  }
  hideActionPoint() {
    this._actionPointElement.hidden = !0;
  }
  clearHighlight() {
    var e, n;
    for (const s of this._highlightEntries)
      (e = s.highlightElement) == null || e.remove(),
        (n = s.tooltipElement) == null || n.remove();
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._glassPaneElement.style.pointerEvents = "none");
  }
  updateHighlight(e, n) {
    this._innerUpdateHighlight(e, n);
  }
  maskElements(e, n) {
    this._innerUpdateHighlight(e, { color: n });
  }
  _innerUpdateHighlight(e, n) {
    let s = n.color;
    if (
      (s || (s = e.length > 1 ? "#f6b26b7f" : "#6fa8dc7f"),
      !this._highlightIsUpToDate(e, n))
    ) {
      this.clearHighlight(),
        (this._highlightOptions = n),
        (this._glassPaneElement.style.pointerEvents = n.tooltipListItemSelected
          ? "initial"
          : "none");
      for (let o = 0; o < e.length; ++o) {
        const l = this._createHighlightElement();
        this._glassPaneShadow.appendChild(l);
        let c;
        if (n.tooltipList || n.tooltipText || n.tooltipFooter) {
          (c = this._injectedScript.document.createElement("x-pw-tooltip")),
            this._glassPaneShadow.appendChild(c),
            (c.style.top = "0"),
            (c.style.left = "0"),
            (c.style.display = "flex");
          let u = [];
          if (n.tooltipList) u = n.tooltipList;
          else if (n.tooltipText) {
            const d = e.length > 1 ? ` [${o + 1} of ${e.length}]` : "";
            u = [n.tooltipText + d];
          }
          for (let d = 0; d < u.length; d++) {
            const p =
              this._injectedScript.document.createElement("x-pw-tooltip-line");
            (p.textContent = u[d]),
              c.appendChild(p),
              n.tooltipListItemSelected &&
                (p.classList.add("selectable"),
                p.addEventListener("click", () => {
                  var y;
                  return (y = n.tooltipListItemSelected) == null
                    ? void 0
                    : y.call(n, d);
                }));
          }
          if (n.tooltipFooter) {
            const d = this._injectedScript.document.createElement(
              "x-pw-tooltip-footer",
            );
            (d.textContent = n.tooltipFooter), c.appendChild(d);
          }
        }
        this._highlightEntries.push({
          targetElement: e[o],
          tooltipElement: c,
          highlightElement: l,
        });
      }
      for (const o of this._highlightEntries) {
        if (
          ((o.box = o.targetElement.getBoundingClientRect()), !o.tooltipElement)
        )
          continue;
        const { anchorLeft: l, anchorTop: c } = this.tooltipPosition(
          o.box,
          o.tooltipElement,
        );
        (o.tooltipTop = c), (o.tooltipLeft = l);
      }
      for (const o of this._highlightEntries) {
        o.tooltipElement &&
          ((o.tooltipElement.style.top = o.tooltipTop + "px"),
          (o.tooltipElement.style.left = o.tooltipLeft + "px"));
        const l = o.box;
        (o.highlightElement.style.backgroundColor = s),
          (o.highlightElement.style.left = l.x + "px"),
          (o.highlightElement.style.top = l.y + "px"),
          (o.highlightElement.style.width = l.width + "px"),
          (o.highlightElement.style.height = l.height + "px"),
          (o.highlightElement.style.display = "block"),
          this._isUnderTest &&
            console.error(
              "Highlight box for test: " +
                JSON.stringify({
                  x: l.x,
                  y: l.y,
                  width: l.width,
                  height: l.height,
                }),
            );
      }
    }
  }
  firstBox() {
    var e;
    return (e = this._highlightEntries[0]) == null ? void 0 : e.box;
  }
  tooltipPosition(e, n) {
    const s = n.offsetWidth,
      o = n.offsetHeight,
      l = this._glassPaneElement.offsetWidth,
      c = this._glassPaneElement.offsetHeight;
    let u = e.left;
    u + s > l - 5 && (u = l - s - 5);
    let d = e.bottom + 5;
    return (
      d + o > c - 5 && (e.top > o + 5 ? (d = e.top - o - 5) : (d = c - 5 - o)),
      { anchorLeft: u, anchorTop: d }
    );
  }
  _highlightIsUpToDate(e, n) {
    var s, o;
    if (
      n.tooltipText !== this._highlightOptions.tooltipText ||
      n.tooltipListItemSelected !==
        this._highlightOptions.tooltipListItemSelected ||
      n.tooltipFooter !== this._highlightOptions.tooltipFooter ||
      ((s = n.tooltipList) == null ? void 0 : s.length) !==
        ((o = this._highlightOptions.tooltipList) == null ? void 0 : o.length)
    )
      return !1;
    if (n.tooltipList && this._highlightOptions.tooltipList) {
      for (let l = 0; l < n.tooltipList.length; l++)
        if (n.tooltipList[l] !== this._highlightOptions.tooltipList[l])
          return !1;
    }
    if (e.length !== this._highlightEntries.length) return !1;
    for (let l = 0; l < this._highlightEntries.length; ++l) {
      if (e[l] !== this._highlightEntries[l].targetElement) return !1;
      const c = this._highlightEntries[l].box;
      if (!c) return !1;
      const u = e[l].getBoundingClientRect();
      if (
        u.top !== c.top ||
        u.right !== c.right ||
        u.bottom !== c.bottom ||
        u.left !== c.left
      )
        return !1;
    }
    return !0;
  }
  _createHighlightElement() {
    return this._injectedScript.document.createElement("x-pw-highlight");
  }
  appendChild(e) {
    this._glassPaneShadow.appendChild(e);
  }
}
function dk(t, e, n) {
  const s = t.left - e.right;
  if (!(s < 0 || (n !== void 0 && s > n)))
    return s + Math.max(e.bottom - t.bottom, 0) + Math.max(t.top - e.top, 0);
}
function hk(t, e, n) {
  const s = e.left - t.right;
  if (!(s < 0 || (n !== void 0 && s > n)))
    return s + Math.max(e.bottom - t.bottom, 0) + Math.max(t.top - e.top, 0);
}
function pk(t, e, n) {
  const s = e.top - t.bottom;
  if (!(s < 0 || (n !== void 0 && s > n)))
    return s + Math.max(t.left - e.left, 0) + Math.max(e.right - t.right, 0);
}
function mk(t, e, n) {
  const s = t.top - e.bottom;
  if (!(s < 0 || (n !== void 0 && s > n)))
    return s + Math.max(t.left - e.left, 0) + Math.max(e.right - t.right, 0);
}
function gk(t, e, n) {
  const s = n === void 0 ? 50 : n;
  let o = 0;
  return (
    t.left - e.right >= 0 && (o += t.left - e.right),
    e.left - t.right >= 0 && (o += e.left - t.right),
    e.top - t.bottom >= 0 && (o += e.top - t.bottom),
    t.top - e.bottom >= 0 && (o += t.top - e.bottom),
    o > s ? void 0 : o
  );
}
const yk = ["left-of", "right-of", "above", "below", "near"];
function Ey(t, e, n, s) {
  const o = e.getBoundingClientRect(),
    l = { "left-of": hk, "right-of": dk, above: pk, below: mk, near: gk }[t];
  let c;
  for (const u of n) {
    if (u === e) continue;
    const d = l(o, u.getBoundingClientRect(), s);
    d !== void 0 && (c === void 0 || d < c) && (c = d);
  }
  return c;
}
function by(t, e) {
  for (const n of e.jsonPath) t != null && (t = t[n]);
  return Ty(t, e);
}
function Ty(t, e) {
  const n = typeof t == "string" && !e.caseSensitive ? t.toUpperCase() : t,
    s =
      typeof e.value == "string" && !e.caseSensitive
        ? e.value.toUpperCase()
        : e.value;
  return e.op === "<truthy>"
    ? !!n
    : e.op === "="
      ? s instanceof RegExp
        ? typeof n == "string" && !!n.match(s)
        : n === s
      : typeof n != "string" || typeof s != "string"
        ? !1
        : e.op === "*="
          ? n.includes(s)
          : e.op === "^="
            ? n.startsWith(s)
            : e.op === "$="
              ? n.endsWith(s)
              : e.op === "|="
                ? n === s || n.startsWith(s + "-")
                : e.op === "~="
                  ? n.split(" ").includes(s)
                  : !1;
}
function Cf(t) {
  const e = t.ownerDocument;
  return (
    t.nodeName === "SCRIPT" ||
    t.nodeName === "NOSCRIPT" ||
    t.nodeName === "STYLE" ||
    (e.head && e.head.contains(t))
  );
}
function Ct(t, e) {
  let n = t.get(e);
  if (n === void 0) {
    if (((n = { full: "", normalized: "", immediate: [] }), !Cf(e))) {
      let s = "";
      if (
        e instanceof HTMLInputElement &&
        (e.type === "submit" || e.type === "button")
      )
        n = { full: e.value, normalized: gt(e.value), immediate: [e.value] };
      else {
        for (let o = e.firstChild; o; o = o.nextSibling)
          if (o.nodeType === Node.TEXT_NODE)
            (n.full += o.nodeValue || ""), (s += o.nodeValue || "");
          else {
            if (o.nodeType === Node.COMMENT_NODE) continue;
            s && n.immediate.push(s),
              (s = ""),
              o.nodeType === Node.ELEMENT_NODE && (n.full += Ct(t, o).full);
          }
        s && n.immediate.push(s),
          e.shadowRoot && (n.full += Ct(t, e.shadowRoot).full),
          n.full && (n.normalized = gt(n.full));
      }
    }
    t.set(e, n);
  }
  return n;
}
function ia(t, e, n) {
  if (Cf(e) || !n(Ct(t, e))) return "none";
  for (let s = e.firstChild; s; s = s.nextSibling)
    if (s.nodeType === Node.ELEMENT_NODE && n(Ct(t, s)))
      return "selfAndChildren";
  return e.shadowRoot && n(Ct(t, e.shadowRoot)) ? "selfAndChildren" : "self";
}
function Ny(t, e) {
  const n = cy(e);
  if (n) return n.map((l) => Ct(t, l));
  const s = e.getAttribute("aria-label");
  if (s !== null && s.trim())
    return [{ full: s, normalized: gt(s), immediate: [s] }];
  const o = e.nodeName === "INPUT" && e.type !== "hidden";
  if (
    ["BUTTON", "METER", "OUTPUT", "PROGRESS", "SELECT", "TEXTAREA"].includes(
      e.nodeName,
    ) ||
    o
  ) {
    const l = e.labels;
    if (l) return [...l].map((c) => Ct(t, c));
  }
  return [];
}
function xm(t) {
  return t.displayName || t.name || "Anonymous";
}
function vk(t) {
  if (t.type)
    switch (typeof t.type) {
      case "function":
        return xm(t.type);
      case "string":
        return t.type;
      case "object":
        return t.type.displayName || (t.type.render ? xm(t.type.render) : "");
    }
  if (t._currentElement) {
    const e = t._currentElement.type;
    if (typeof e == "string") return e;
    if (typeof e == "function") return e.displayName || e.name || "Anonymous";
  }
  return "";
}
function wk(t) {
  var e;
  return t.key ?? ((e = t._currentElement) == null ? void 0 : e.key);
}
function xk(t) {
  if (t.child) {
    const n = [];
    for (let s = t.child; s; s = s.sibling) n.push(s);
    return n;
  }
  if (!t._currentElement) return [];
  const e = (n) => {
    var o;
    const s = (o = n._currentElement) == null ? void 0 : o.type;
    return typeof s == "function" || typeof s == "string";
  };
  if (t._renderedComponent) {
    const n = t._renderedComponent;
    return e(n) ? [n] : [];
  }
  return t._renderedChildren
    ? [...Object.values(t._renderedChildren)].filter(e)
    : [];
}
function Sk(t) {
  var s;
  const e =
    t.memoizedProps || ((s = t._currentElement) == null ? void 0 : s.props);
  if (!e || typeof e == "string") return e;
  const n = { ...e };
  return delete n.children, n;
}
function Cy(t) {
  var s;
  const e = {
      key: wk(t),
      name: vk(t),
      children: xk(t).map(Cy),
      rootElements: [],
      props: Sk(t),
    },
    n =
      t.stateNode ||
      t._hostNode ||
      ((s = t._renderedComponent) == null ? void 0 : s._hostNode);
  if (n instanceof Element) e.rootElements.push(n);
  else for (const o of e.children) e.rootElements.push(...o.rootElements);
  return e;
}
function Ay(t, e, n = []) {
  e(t) && n.push(t);
  for (const s of t.children) Ay(s, e, n);
  return n;
}
function Ly(t, e = []) {
  const s = (t.ownerDocument || t).createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
  do {
    const o = s.currentNode,
      l = o,
      c = Object.keys(l).find(
        (d) => d.startsWith("__reactContainer") && l[d] !== null,
      );
    if (c) e.push(l[c].stateNode.current);
    else {
      const d = "_reactRootContainer";
      l.hasOwnProperty(d) &&
        l[d] !== null &&
        e.push(l[d]._internalRoot.current);
    }
    if (o instanceof Element && o.hasAttribute("data-reactroot"))
      for (const d of Object.keys(o))
        (d.startsWith("__reactInternalInstance") ||
          d.startsWith("__reactFiber")) &&
          e.push(o[d]);
    const u = o instanceof Element ? o.shadowRoot : null;
    u && Ly(u, e);
  } while (s.nextNode());
  return e;
}
const _k = {
    queryAll(t, e) {
      const { name: n, attributes: s } = Cr(e, !1),
        c = Ly(t.ownerDocument || t)
          .map((d) => Cy(d))
          .map((d) =>
            Ay(d, (p) => {
              const y = p.props ?? {};
              if (
                (p.key !== void 0 && (y.key = p.key),
                (n && p.name !== n) || p.rootElements.some((v) => !sa(t, v)))
              )
                return !1;
              for (const v of s) if (!by(y, v)) return !1;
              return !0;
            }),
          )
          .flat(),
        u = new Set();
      for (const d of c) for (const p of d.rootElements) u.add(p);
      return [...u];
    },
  },
  Iy = [
    "selected",
    "checked",
    "pressed",
    "expanded",
    "level",
    "disabled",
    "name",
    "include-hidden",
  ];
Iy.sort();
function ji(t, e, n) {
  if (!e.includes(n))
    throw new Error(
      `"${t}" attribute is only supported for roles: ${e
        .slice()
        .sort()
        .map((s) => `"${s}"`)
        .join(", ")}`,
    );
}
function as(t, e) {
  if (t.op !== "<truthy>" && !e.includes(t.value))
    throw new Error(
      `"${t.name}" must be one of ${e.map((n) => JSON.stringify(n)).join(", ")}`,
    );
}
function cs(t, e) {
  if (!e.includes(t.op))
    throw new Error(`"${t.name}" does not support "${t.op}" matcher`);
}
function kk(t, e) {
  const n = { role: e };
  for (const s of t)
    switch (s.name) {
      case "checked": {
        ji(s.name, mf, e),
          as(s, [!0, !1, "mixed"]),
          cs(s, ["<truthy>", "="]),
          (n.checked = s.op === "<truthy>" ? !0 : s.value);
        break;
      }
      case "pressed": {
        ji(s.name, yf, e),
          as(s, [!0, !1, "mixed"]),
          cs(s, ["<truthy>", "="]),
          (n.pressed = s.op === "<truthy>" ? !0 : s.value);
        break;
      }
      case "selected": {
        ji(s.name, pf, e),
          as(s, [!0, !1]),
          cs(s, ["<truthy>", "="]),
          (n.selected = s.op === "<truthy>" ? !0 : s.value);
        break;
      }
      case "expanded": {
        ji(s.name, vf, e),
          as(s, [!0, !1]),
          cs(s, ["<truthy>", "="]),
          (n.expanded = s.op === "<truthy>" ? !0 : s.value);
        break;
      }
      case "level": {
        if (
          (ji(s.name, wf, e),
          typeof s.value == "string" && (s.value = +s.value),
          s.op !== "=" || typeof s.value != "number" || Number.isNaN(s.value))
        )
          throw new Error('"level" attribute must be compared to a number');
        n.level = s.value;
        break;
      }
      case "disabled": {
        as(s, [!0, !1]),
          cs(s, ["<truthy>", "="]),
          (n.disabled = s.op === "<truthy>" ? !0 : s.value);
        break;
      }
      case "name": {
        if (s.op === "<truthy>")
          throw new Error('"name" attribute must have a value');
        if (typeof s.value != "string" && !(s.value instanceof RegExp))
          throw new Error(
            '"name" attribute must be a string or a regular expression',
          );
        (n.name = s.value), (n.nameOp = s.op), (n.exact = s.caseSensitive);
        break;
      }
      case "include-hidden": {
        as(s, [!0, !1]),
          cs(s, ["<truthy>", "="]),
          (n.includeHidden = s.op === "<truthy>" ? !0 : s.value);
        break;
      }
      default:
        throw new Error(
          `Unknown attribute "${s.name}", must be one of ${Iy.map((o) => `"${o}"`).join(", ")}.`,
        );
    }
  return n;
}
function Ek(t, e, n) {
  const s = [],
    o = (c) => {
      if (
        Ye(c) === e.role &&
        !(e.selected !== void 0 && uy(c) !== e.selected) &&
        !(e.checked !== void 0 && fy(c) !== e.checked) &&
        !(e.pressed !== void 0 && dy(c) !== e.pressed) &&
        !(e.expanded !== void 0 && hy(c) !== e.expanded) &&
        !(e.level !== void 0 && py(c) !== e.level) &&
        !(e.disabled !== void 0 && Wl(c) !== e.disabled) &&
        !(!e.includeHidden && Ut(c))
      ) {
        if (e.name !== void 0) {
          const u = gt(Wi(c, !!e.includeHidden));
          if (
            (typeof e.name == "string" && (e.name = gt(e.name)),
            n && !e.exact && e.nameOp === "=" && (e.nameOp = "*="),
            !Ty(u, {
              op: e.nameOp || "=",
              value: e.name,
              caseSensitive: !!e.exact,
            }))
          )
            return;
        }
        s.push(c);
      }
    },
    l = (c) => {
      const u = [];
      c.shadowRoot && u.push(c.shadowRoot);
      for (const d of c.querySelectorAll("*"))
        o(d), d.shadowRoot && u.push(d.shadowRoot);
      u.forEach(l);
    };
  return l(t), s;
}
function Sm(t) {
  return {
    queryAll: (e, n) => {
      const s = Cr(n, !0),
        o = s.name.toLowerCase();
      if (!o) throw new Error("Role must not be empty");
      const l = kk(s.attributes, o);
      Tf();
      try {
        return Ek(e, l, t);
      } finally {
        Nf();
      }
    },
  };
}
class bk {
  constructor(e) {
    (this._engines = new Map()),
      (this._cacheQueryCSS = new Map()),
      (this._cacheMatches = new Map()),
      (this._cacheQuery = new Map()),
      (this._cacheMatchesSimple = new Map()),
      (this._cacheMatchesParents = new Map()),
      (this._cacheCallMatches = new Map()),
      (this._cacheCallQuery = new Map()),
      (this._cacheQuerySimple = new Map()),
      (this._cacheText = new Map()),
      (this._retainCacheCounter = 0);
    for (const [o, l] of e) this._engines.set(o, l);
    this._engines.set("not", Ck),
      this._engines.set("is", Di),
      this._engines.set("where", Di),
      this._engines.set("has", Tk),
      this._engines.set("scope", Nk),
      this._engines.set("light", Ak),
      this._engines.set("visible", Lk),
      this._engines.set("text", Ik),
      this._engines.set("text-is", jk),
      this._engines.set("text-matches", Mk),
      this._engines.set("has-text", Ok),
      this._engines.set("right-of", Mi("right-of")),
      this._engines.set("left-of", Mi("left-of")),
      this._engines.set("above", Mi("above")),
      this._engines.set("below", Mi("below")),
      this._engines.set("near", Mi("near")),
      this._engines.set("nth-match", $k);
    const n = [...this._engines.keys()];
    n.sort();
    const s = [...yg];
    if ((s.sort(), n.join("|") !== s.join("|")))
      throw new Error(
        `Please keep customCSSNames in sync with evaluator engines: ${n.join("|")} vs ${s.join("|")}`,
      );
  }
  begin() {
    ++this._retainCacheCounter;
  }
  end() {
    --this._retainCacheCounter,
      this._retainCacheCounter ||
        (this._cacheQueryCSS.clear(),
        this._cacheMatches.clear(),
        this._cacheQuery.clear(),
        this._cacheMatchesSimple.clear(),
        this._cacheMatchesParents.clear(),
        this._cacheCallMatches.clear(),
        this._cacheCallQuery.clear(),
        this._cacheQuerySimple.clear(),
        this._cacheText.clear());
  }
  _cached(e, n, s, o) {
    e.has(n) || e.set(n, []);
    const l = e.get(n),
      c = l.find((d) => s.every((p, y) => d.rest[y] === p));
    if (c) return c.result;
    const u = o();
    return l.push({ rest: s, result: u }), u;
  }
  _checkSelector(e) {
    if (
      !(
        typeof e == "object" &&
        e &&
        (Array.isArray(e) || ("simples" in e && e.simples.length))
      )
    )
      throw new Error(`Malformed selector "${e}"`);
    return e;
  }
  matches(e, n, s) {
    const o = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheMatches,
        e,
        [o, s.scope, s.pierceShadow, s.originalScope],
        () =>
          Array.isArray(o)
            ? this._matchesEngine(Di, e, o, s)
            : (this._hasScopeClause(o) &&
                (s = this._expandContextForScopeMatching(s)),
              this._matchesSimple(
                e,
                o.simples[o.simples.length - 1].selector,
                s,
              )
                ? this._matchesParents(e, o, o.simples.length - 2, s)
                : !1),
      );
    } finally {
      this.end();
    }
  }
  query(e, n) {
    const s = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheQuery,
        s,
        [e.scope, e.pierceShadow, e.originalScope],
        () => {
          if (Array.isArray(s)) return this._queryEngine(Di, e, s);
          this._hasScopeClause(s) &&
            (e = this._expandContextForScopeMatching(e));
          const o = this._scoreMap;
          this._scoreMap = new Map();
          let l = this._querySimple(
            e,
            s.simples[s.simples.length - 1].selector,
          );
          return (
            (l = l.filter((c) =>
              this._matchesParents(c, s, s.simples.length - 2, e),
            )),
            this._scoreMap.size &&
              l.sort((c, u) => {
                const d = this._scoreMap.get(c),
                  p = this._scoreMap.get(u);
                return d === p
                  ? 0
                  : d === void 0
                    ? 1
                    : p === void 0
                      ? -1
                      : d - p;
              }),
            (this._scoreMap = o),
            l
          );
        },
      );
    } finally {
      this.end();
    }
  }
  _markScore(e, n) {
    this._scoreMap && this._scoreMap.set(e, n);
  }
  _hasScopeClause(e) {
    return e.simples.some((n) =>
      n.selector.functions.some((s) => s.name === "scope"),
    );
  }
  _expandContextForScopeMatching(e) {
    if (e.scope.nodeType !== 1) return e;
    const n = pt(e.scope);
    return n
      ? { ...e, scope: n, originalScope: e.originalScope || e.scope }
      : e;
  }
  _matchesSimple(e, n, s) {
    return this._cached(
      this._cacheMatchesSimple,
      e,
      [n, s.scope, s.pierceShadow, s.originalScope],
      () => {
        if (e === s.scope || (n.css && !this._matchesCSS(e, n.css))) return !1;
        for (const o of n.functions)
          if (!this._matchesEngine(this._getEngine(o.name), e, o.args, s))
            return !1;
        return !0;
      },
    );
  }
  _querySimple(e, n) {
    return n.functions.length
      ? this._cached(
          this._cacheQuerySimple,
          n,
          [e.scope, e.pierceShadow, e.originalScope],
          () => {
            let s = n.css;
            const o = n.functions;
            s === "*" && o.length && (s = void 0);
            let l,
              c = -1;
            s !== void 0
              ? (l = this._queryCSS(e, s))
              : ((c = o.findIndex(
                  (u) => this._getEngine(u.name).query !== void 0,
                )),
                c === -1 && (c = 0),
                (l = this._queryEngine(
                  this._getEngine(o[c].name),
                  e,
                  o[c].args,
                )));
            for (let u = 0; u < o.length; u++) {
              if (u === c) continue;
              const d = this._getEngine(o[u].name);
              d.matches !== void 0 &&
                (l = l.filter((p) => this._matchesEngine(d, p, o[u].args, e)));
            }
            for (let u = 0; u < o.length; u++) {
              if (u === c) continue;
              const d = this._getEngine(o[u].name);
              d.matches === void 0 &&
                (l = l.filter((p) => this._matchesEngine(d, p, o[u].args, e)));
            }
            return l;
          },
        )
      : this._queryCSS(e, n.css || "*");
  }
  _matchesParents(e, n, s, o) {
    return s < 0
      ? !0
      : this._cached(
          this._cacheMatchesParents,
          e,
          [n, s, o.scope, o.pierceShadow, o.originalScope],
          () => {
            const { selector: l, combinator: c } = n.simples[s];
            if (c === ">") {
              const u = pl(e, o);
              return !u || !this._matchesSimple(u, l, o)
                ? !1
                : this._matchesParents(u, n, s - 1, o);
            }
            if (c === "+") {
              const u = _u(e, o);
              return !u || !this._matchesSimple(u, l, o)
                ? !1
                : this._matchesParents(u, n, s - 1, o);
            }
            if (c === "") {
              let u = pl(e, o);
              for (; u; ) {
                if (this._matchesSimple(u, l, o)) {
                  if (this._matchesParents(u, n, s - 1, o)) return !0;
                  if (n.simples[s - 1].combinator === "") break;
                }
                u = pl(u, o);
              }
              return !1;
            }
            if (c === "~") {
              let u = _u(e, o);
              for (; u; ) {
                if (this._matchesSimple(u, l, o)) {
                  if (this._matchesParents(u, n, s - 1, o)) return !0;
                  if (n.simples[s - 1].combinator === "~") break;
                }
                u = _u(u, o);
              }
              return !1;
            }
            if (c === ">=") {
              let u = e;
              for (; u; ) {
                if (this._matchesSimple(u, l, o)) {
                  if (this._matchesParents(u, n, s - 1, o)) return !0;
                  if (n.simples[s - 1].combinator === "") break;
                }
                u = pl(u, o);
              }
              return !1;
            }
            throw new Error(`Unsupported combinator "${c}"`);
          },
        );
  }
  _matchesEngine(e, n, s, o) {
    if (e.matches) return this._callMatches(e, n, s, o);
    if (e.query) return this._callQuery(e, s, o).includes(n);
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _queryEngine(e, n, s) {
    if (e.query) return this._callQuery(e, s, n);
    if (e.matches)
      return this._queryCSS(n, "*").filter((o) =>
        this._callMatches(e, o, s, n),
      );
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _callMatches(e, n, s, o) {
    return this._cached(
      this._cacheCallMatches,
      n,
      [e, o.scope, o.pierceShadow, o.originalScope, ...s],
      () => e.matches(n, s, o, this),
    );
  }
  _callQuery(e, n, s) {
    return this._cached(
      this._cacheCallQuery,
      e,
      [s.scope, s.pierceShadow, s.originalScope, ...n],
      () => e.query(s, n, this),
    );
  }
  _matchesCSS(e, n) {
    return e.matches(n);
  }
  _queryCSS(e, n) {
    return this._cached(
      this._cacheQueryCSS,
      n,
      [e.scope, e.pierceShadow, e.originalScope],
      () => {
        let s = [];
        function o(l) {
          if (((s = s.concat([...l.querySelectorAll(n)])), !!e.pierceShadow)) {
            l.shadowRoot && o(l.shadowRoot);
            for (const c of l.querySelectorAll("*"))
              c.shadowRoot && o(c.shadowRoot);
          }
        }
        return o(e.scope), s;
      },
    );
  }
  _getEngine(e) {
    const n = this._engines.get(e);
    if (!n) throw new Error(`Unknown selector engine "${e}"`);
    return n;
  }
}
const Di = {
    matches(t, e, n, s) {
      if (e.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      return e.some((o) => s.matches(t, o, n));
    },
    query(t, e, n) {
      if (e.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      let s = [];
      for (const o of e) s = s.concat(n.query(t, o));
      return e.length === 1 ? s : jy(s);
    },
  },
  Tk = {
    matches(t, e, n, s) {
      if (e.length === 0)
        throw new Error('"has" engine expects non-empty selector list');
      return s.query({ ...n, scope: t }, e).length > 0;
    },
  },
  Nk = {
    matches(t, e, n, s) {
      if (e.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const o = n.originalScope || n.scope;
      return o.nodeType === 9 ? t === o.documentElement : t === o;
    },
    query(t, e, n) {
      if (e.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const s = t.originalScope || t.scope;
      if (s.nodeType === 9) {
        const o = s.documentElement;
        return o ? [o] : [];
      }
      return s.nodeType === 1 ? [s] : [];
    },
  },
  Ck = {
    matches(t, e, n, s) {
      if (e.length === 0)
        throw new Error('"not" engine expects non-empty selector list');
      return !s.matches(t, e, n);
    },
  },
  Ak = {
    query(t, e, n) {
      return n.query({ ...t, pierceShadow: !1 }, e);
    },
    matches(t, e, n, s) {
      return s.matches(t, e, { ...n, pierceShadow: !1 });
    },
  },
  Lk = {
    matches(t, e, n, s) {
      if (e.length) throw new Error('"visible" engine expects no arguments');
      return _s(t);
    },
  },
  Ik = {
    matches(t, e, n, s) {
      if (e.length !== 1 || typeof e[0] != "string")
        throw new Error('"text" engine expects a single string');
      const o = gt(e[0]).toLowerCase(),
        l = (c) => c.normalized.toLowerCase().includes(o);
      return ia(s._cacheText, t, l) === "self";
    },
  },
  jk = {
    matches(t, e, n, s) {
      if (e.length !== 1 || typeof e[0] != "string")
        throw new Error('"text-is" engine expects a single string');
      const o = gt(e[0]),
        l = (c) =>
          !o && !c.immediate.length ? !0 : c.immediate.some((u) => gt(u) === o);
      return ia(s._cacheText, t, l) !== "none";
    },
  },
  Mk = {
    matches(t, e, n, s) {
      if (
        e.length === 0 ||
        typeof e[0] != "string" ||
        e.length > 2 ||
        (e.length === 2 && typeof e[1] != "string")
      )
        throw new Error(
          '"text-matches" engine expects a regexp body and optional regexp flags',
        );
      const o = new RegExp(e[0], e.length === 2 ? e[1] : void 0),
        l = (c) => o.test(c.full);
      return ia(s._cacheText, t, l) === "self";
    },
  },
  Ok = {
    matches(t, e, n, s) {
      if (e.length !== 1 || typeof e[0] != "string")
        throw new Error('"has-text" engine expects a single string');
      if (Cf(t)) return !1;
      const o = gt(e[0]).toLowerCase();
      return ((c) => c.normalized.toLowerCase().includes(o))(
        Ct(s._cacheText, t),
      );
    },
  };
function Mi(t) {
  return {
    matches(e, n, s, o) {
      const l =
          n.length && typeof n[n.length - 1] == "number"
            ? n[n.length - 1]
            : void 0,
        c = l === void 0 ? n : n.slice(0, n.length - 1);
      if (n.length < 1 + (l === void 0 ? 0 : 1))
        throw new Error(
          `"${t}" engine expects a selector list and optional maximum distance in pixels`,
        );
      const u = o.query(s, c),
        d = Ey(t, e, u, l);
      return d === void 0 ? !1 : (o._markScore(e, d), !0);
    },
  };
}
const $k = {
  query(t, e, n) {
    let s = e[e.length - 1];
    if (e.length < 2)
      throw new Error(
        '"nth-match" engine expects non-empty selector list and an index argument',
      );
    if (typeof s != "number" || s < 1)
      throw new Error(
        '"nth-match" engine expects a one-based index as the last argument',
      );
    const o = Di.query(t, e.slice(0, e.length - 1), n);
    return s--, s < o.length ? [o[s]] : [];
  },
};
function pl(t, e) {
  if (t !== e.scope) return e.pierceShadow ? pt(t) : t.parentElement || void 0;
}
function _u(t, e) {
  if (t !== e.scope) return t.previousElementSibling || void 0;
}
function jy(t) {
  const e = new Map(),
    n = [],
    s = [];
  function o(c) {
    let u = e.get(c);
    if (u) return u;
    const d = pt(c);
    return (
      d ? o(d).children.push(c) : n.push(c),
      (u = { children: [], taken: !1 }),
      e.set(c, u),
      u
    );
  }
  for (const c of t) o(c).taken = !0;
  function l(c) {
    const u = e.get(c);
    if ((u.taken && s.push(c), u.children.length > 1)) {
      const d = new Set(u.children);
      u.children = [];
      let p = c.firstElementChild;
      for (; p && u.children.length < d.size; )
        d.has(p) && u.children.push(p), (p = p.nextElementSibling);
      for (
        p = c.shadowRoot ? c.shadowRoot.firstElementChild : null;
        p && u.children.length < d.size;

      )
        d.has(p) && u.children.push(p), (p = p.nextElementSibling);
    }
    u.children.forEach(l);
  }
  return n.forEach(l), s;
}
const Qu = new Map(),
  Xu = new Map(),
  My = 10,
  Ms = My / 2,
  _m = 1,
  Pk = 2,
  Rk = 10,
  Dk = 50,
  Oy = 100,
  $y = 120,
  Py = 140,
  Ry = 160,
  jl = 180,
  Dy = 200,
  km = 250,
  Fk = $y + Ms,
  zk = Py + Ms,
  Bk = Oy + Ms,
  Uk = Ry + Ms,
  Hk = jl + Ms,
  qk = Dy + Ms,
  Vk = 300,
  Wk = 500,
  Fy = 510,
  ku = 520,
  zy = 530,
  By = 1e4,
  Kk = 1e7,
  Qk = 1e3;
function Em(t, e, n) {
  t._evaluator.begin(), Tf();
  try {
    let s = [];
    if (n.forTextExpect) {
      let c = ml(t, e.ownerDocument.documentElement, n);
      for (let u = e; u; u = pt(u)) {
        const d = us(t, u, { ...n, noText: !0 });
        if (!d) continue;
        if (tr(d) <= Qk) {
          c = d;
          break;
        }
      }
      s = [Ml(c)];
    } else {
      if (!e.matches("input,textarea,select") && !e.isContentEditable) {
        const c = Ri(
          e,
          "button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]",
          n.root,
        );
        c && _s(c) && (e = c);
      }
      if (n.multiple) {
        const c = us(t, e, n),
          u = us(t, e, { ...n, noText: !0 });
        let d = [c, u];
        if (
          (Qu.clear(),
          Xu.clear(),
          c && Eu(c) && d.push(us(t, e, { ...n, noCSSId: !0 })),
          u && Eu(u) && d.push(us(t, e, { ...n, noText: !0, noCSSId: !0 })),
          (d = d.filter(Boolean)),
          !d.length)
        ) {
          const p = ml(t, e, n);
          d.push(p), Eu(p) && d.push(ml(t, e, { ...n, noCSSId: !0 }));
        }
        s = [...new Set(d.map((p) => Ml(p)))];
      } else {
        const c = us(t, e, n) || ml(t, e, n);
        s = [Ml(c)];
      }
    }
    const o = s[0],
      l = t.parseSelector(o);
    return {
      selector: o,
      selectors: s,
      elements: t.querySelectorAll(l, n.root ?? e.ownerDocument),
    };
  } finally {
    Qu.clear(), Xu.clear(), Nf(), t._evaluator.end();
  }
}
function bm(t) {
  return t.filter((e) => e[0].selector[0] !== "/");
}
function us(t, e, n) {
  if (n.root && !sa(n.root, e))
    throw new Error("Target element must belong to the root's subtree");
  if (e === n.root) return [{ engine: "css", selector: ":scope", score: 1 }];
  if (e.ownerDocument.documentElement === e)
    return [{ engine: "css", selector: "html", score: 1 }];
  const s = (l, c) => {
      const u = l === e;
      let d = c ? Gk(t, l, l === e) : [];
      l !== e && (d = bm(d));
      const p = Xk(t, l, n)
        .filter(
          (m) => !n.omitInternalEngines || !m.engine.startsWith("internal:"),
        )
        .map((m) => [m]);
      let y = Tm(t, n.root ?? e.ownerDocument, l, [...d, ...p], u);
      d = bm(d);
      const v = (m) => {
        const w = c && !m.length,
          _ = [...m, ...p].filter((E) => (y ? tr(E) < tr(y) : !0));
        let S = _[0];
        if (S)
          for (let E = pt(l); E && E !== n.root; E = pt(E)) {
            const T = o(E, w);
            if (!T || (y && tr([...T, ...S]) >= tr(y))) continue;
            if (((S = Tm(t, E, l, _, u)), !S)) return;
            const C = [...T, ...S];
            (!y || tr(C) < tr(y)) && (y = C);
          }
      };
      return v(d), l === e && d.length && v([]), y;
    },
    o = (l, c) => {
      const u = c ? Qu : Xu;
      let d = u.get(l);
      return d === void 0 && ((d = s(l, c)), u.set(l, d)), d;
    };
  return s(e, !n.noText);
}
function Xk(t, e, n) {
  const s = [];
  {
    for (const c of ["data-testid", "data-test-id", "data-test"])
      c !== n.testIdAttributeName &&
        e.getAttribute(c) &&
        s.push({
          engine: "css",
          selector: `[${c}=${Ci(e.getAttribute(c))}]`,
          score: Pk,
        });
    if (!n.noCSSId) {
      const c = e.getAttribute("id");
      c && !Jk(c) && s.push({ engine: "css", selector: Uy(c), score: Wk });
    }
    s.push({
      engine: "css",
      selector: Ht(e.nodeName.toLowerCase()),
      score: zy,
    });
  }
  if (e.nodeName === "IFRAME") {
    for (const c of ["name", "title"])
      e.getAttribute(c) &&
        s.push({
          engine: "css",
          selector: `${Ht(e.nodeName.toLowerCase())}[${c}=${Ci(e.getAttribute(c))}]`,
          score: Rk,
        });
    return (
      e.getAttribute(n.testIdAttributeName) &&
        s.push({
          engine: "css",
          selector: `[${n.testIdAttributeName}=${Ci(e.getAttribute(n.testIdAttributeName))}]`,
          score: _m,
        }),
      Gu([s]),
      s
    );
  }
  if (
    (e.getAttribute(n.testIdAttributeName) &&
      s.push({
        engine: "internal:testid",
        selector: `[${n.testIdAttributeName}=${ht(e.getAttribute(n.testIdAttributeName), !0)}]`,
        score: _m,
      }),
    e.nodeName === "INPUT" || e.nodeName === "TEXTAREA")
  ) {
    const c = e;
    if (c.placeholder) {
      s.push({
        engine: "internal:attr",
        selector: `[placeholder=${ht(c.placeholder, !0)}]`,
        score: Fk,
      });
      for (const u of ys(c.placeholder))
        s.push({
          engine: "internal:attr",
          selector: `[placeholder=${ht(u.text, !1)}]`,
          score: $y - u.scoreBonus,
        });
    }
  }
  const o = Ny(t._evaluator._cacheText, e);
  for (const c of o) {
    const u = c.normalized;
    s.push({ engine: "internal:label", selector: Tt(u, !0), score: zk });
    for (const d of ys(u))
      s.push({
        engine: "internal:label",
        selector: Tt(d.text, !1),
        score: Py - d.scoreBonus,
      });
  }
  const l = Ye(e);
  return (
    l &&
      !["none", "presentation"].includes(l) &&
      s.push({ engine: "internal:role", selector: l, score: Fy }),
    e.getAttribute("name") &&
      [
        "BUTTON",
        "FORM",
        "FIELDSET",
        "FRAME",
        "IFRAME",
        "INPUT",
        "KEYGEN",
        "OBJECT",
        "OUTPUT",
        "SELECT",
        "TEXTAREA",
        "MAP",
        "META",
        "PARAM",
      ].includes(e.nodeName) &&
      s.push({
        engine: "css",
        selector: `${Ht(e.nodeName.toLowerCase())}[name=${Ci(e.getAttribute("name"))}]`,
        score: ku,
      }),
    ["INPUT", "TEXTAREA"].includes(e.nodeName) &&
      e.getAttribute("type") !== "hidden" &&
      e.getAttribute("type") &&
      s.push({
        engine: "css",
        selector: `${Ht(e.nodeName.toLowerCase())}[type=${Ci(e.getAttribute("type"))}]`,
        score: ku,
      }),
    ["INPUT", "TEXTAREA", "SELECT"].includes(e.nodeName) &&
      e.getAttribute("type") !== "hidden" &&
      s.push({
        engine: "css",
        selector: Ht(e.nodeName.toLowerCase()),
        score: ku + 1,
      }),
    Gu([s]),
    s
  );
}
function Gk(t, e, n) {
  if (e.nodeName === "SELECT") return [];
  const s = [],
    o = e.getAttribute("title");
  if (o) {
    s.push([
      { engine: "internal:attr", selector: `[title=${ht(o, !0)}]`, score: qk },
    ]);
    for (const p of ys(o))
      s.push([
        {
          engine: "internal:attr",
          selector: `[title=${ht(p.text, !1)}]`,
          score: Dy - p.scoreBonus,
        },
      ]);
  }
  const l = e.getAttribute("alt");
  if (l && ["APPLET", "AREA", "IMG", "INPUT"].includes(e.nodeName)) {
    s.push([
      { engine: "internal:attr", selector: `[alt=${ht(l, !0)}]`, score: Uk },
    ]);
    for (const p of ys(l))
      s.push([
        {
          engine: "internal:attr",
          selector: `[alt=${ht(p.text, !1)}]`,
          score: Ry - p.scoreBonus,
        },
      ]);
  }
  const c = Ct(t._evaluator._cacheText, e).normalized,
    u = c ? ys(c) : [];
  if (c) {
    if (n) {
      c.length <= 80 &&
        s.push([{ engine: "internal:text", selector: Tt(c, !0), score: Hk }]);
      for (const y of u)
        s.push([
          {
            engine: "internal:text",
            selector: Tt(y.text, !1),
            score: jl - y.scoreBonus,
          },
        ]);
    }
    const p = {
      engine: "css",
      selector: Ht(e.nodeName.toLowerCase()),
      score: zy,
    };
    for (const y of u)
      s.push([
        p,
        {
          engine: "internal:has-text",
          selector: Tt(y.text, !1),
          score: jl - y.scoreBonus,
        },
      ]);
    if (c.length <= 80) {
      const y = new RegExp("^" + Bl(c) + "$");
      s.push([
        p,
        { engine: "internal:has-text", selector: Tt(y, !1), score: km },
      ]);
    }
  }
  const d = Ye(e);
  if (d && !["none", "presentation"].includes(d)) {
    const p = Wi(e, !1);
    if (p) {
      const y = {
        engine: "internal:role",
        selector: `${d}[name=${ht(p, !0)}]`,
        score: Bk,
      };
      s.push([y]);
      for (const v of ys(p))
        s.push([
          {
            engine: "internal:role",
            selector: `${d}[name=${ht(v.text, !1)}]`,
            score: Oy - v.scoreBonus,
          },
        ]);
    } else {
      const y = { engine: "internal:role", selector: `${d}`, score: Fy };
      for (const v of u)
        s.push([
          y,
          {
            engine: "internal:has-text",
            selector: Tt(v.text, !1),
            score: jl - v.scoreBonus,
          },
        ]);
      if (c.length <= 80) {
        const v = new RegExp("^" + Bl(c) + "$");
        s.push([
          y,
          { engine: "internal:has-text", selector: Tt(v, !1), score: km },
        ]);
      }
    }
  }
  return Gu(s), s;
}
function Uy(t) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(t) ? "#" + t : `[id="${Ht(t)}"]`;
}
function Eu(t) {
  return t.some(
    (e) =>
      e.engine === "css" &&
      (e.selector.startsWith("#") || e.selector.startsWith('[id="')),
  );
}
function ml(t, e, n) {
  const s = n.root ?? e.ownerDocument,
    o = [];
  function l(u) {
    const d = o.slice();
    u && d.unshift(u);
    const p = d.join(" > "),
      y = t.parseSelector(p);
    return t.querySelector(y, s, !1) === e ? p : void 0;
  }
  function c(u) {
    const d = { engine: "css", selector: u, score: Kk },
      p = t.parseSelector(u),
      y = t.querySelectorAll(p, s);
    if (y.length === 1) return [d];
    const v = { engine: "nth", selector: String(y.indexOf(e)), score: By };
    return [d, v];
  }
  for (let u = e; u && u !== s; u = pt(u)) {
    const d = u.nodeName.toLowerCase();
    let p = "";
    if (u.id && !n.noCSSId) {
      const m = Uy(u.id),
        w = l(m);
      if (w) return c(w);
      p = m;
    }
    const y = u.parentNode,
      v = [...u.classList];
    for (let m = 0; m < v.length; ++m) {
      const w = "." + Ht(v.slice(0, m + 1).join(".")),
        _ = l(w);
      if (_) return c(_);
      !p && y && y.querySelectorAll(w).length === 1 && (p = w);
    }
    if (y) {
      const m = [...y.children],
        _ =
          m.filter((E) => E.nodeName.toLowerCase() === d).indexOf(u) === 0
            ? Ht(d)
            : `${Ht(d)}:nth-child(${1 + m.indexOf(u)})`,
        S = l(_);
      if (S) return c(S);
      p || (p = _);
    } else p || (p = Ht(d));
    o.unshift(p);
  }
  return c(l());
}
function Gu(t) {
  for (const e of t)
    for (const n of e)
      n.score > Dk &&
        n.score < Vk &&
        (n.score += Math.min(My, (n.selector.length / 10) | 0));
}
function Ml(t) {
  const e = [];
  let n = "";
  for (const { engine: s, selector: o } of t)
    e.length &&
      (n !== "css" || s !== "css" || o.startsWith(":nth-match(")) &&
      e.push(">>"),
      (n = s),
      s === "css" ? e.push(o) : e.push(`${s}=${o}`);
  return e.join(" ");
}
function tr(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) e += t[n].score * (t.length - n);
  return e;
}
function Tm(t, e, n, s, o) {
  const l = s.map((u) => ({ tokens: u, score: tr(u) }));
  l.sort((u, d) => u.score - d.score);
  let c = null;
  for (const { tokens: u } of l) {
    const d = t.parseSelector(Ml(u)),
      p = t.querySelectorAll(d, e);
    if (p[0] === n && p.length === 1) return u;
    const y = p.indexOf(n);
    if (!o || c || y === -1 || p.length > 5) continue;
    const v = { engine: "nth", selector: String(y), score: By };
    c = [...u, v];
  }
  return c;
}
function Jk(t) {
  let e,
    n = 0;
  for (let s = 0; s < t.length; ++s) {
    const o = t[s];
    let l;
    if (!(o === "-" || o === "_")) {
      if (
        (o >= "a" && o <= "z"
          ? (l = "lower")
          : o >= "A" && o <= "Z"
            ? (l = "upper")
            : o >= "0" && o <= "9"
              ? (l = "digit")
              : (l = "other"),
        l === "lower" && e === "upper")
      ) {
        e = l;
        continue;
      }
      e && e !== l && ++n, (e = l);
    }
  }
  return n >= t.length / 4;
}
function gl(t, e) {
  if (t.length <= e) return t;
  t = t.substring(0, e);
  const n = t.match(/^(.*)\b(.+?)$/);
  return n ? n[1].trimEnd() : "";
}
function ys(t) {
  let e = [];
  {
    const n = t.match(/^([\d.,]+)[^.,\w]/),
      s = n ? n[1].length : 0;
    if (s) {
      const o = gl(t.substring(s).trimStart(), 80);
      e.push({ text: o, scoreBonus: o.length <= 30 ? 2 : 1 });
    }
  }
  {
    const n = t.match(/[^.,\w]([\d.,]+)$/),
      s = n ? n[1].length : 0;
    if (s) {
      const o = gl(t.substring(0, t.length - s).trimEnd(), 80);
      e.push({ text: o, scoreBonus: o.length <= 30 ? 2 : 1 });
    }
  }
  return (
    t.length <= 30
      ? e.push({ text: t, scoreBonus: 0 })
      : (e.push({ text: gl(t, 80), scoreBonus: 0 }),
        e.push({ text: gl(t, 30), scoreBonus: 1 })),
    (e = e.filter((n) => n.text)),
    e.length || e.push({ text: t.substring(0, 80), scoreBonus: 0 }),
    e
  );
}
function Hy(t, e) {
  const n = t.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
  let s = n.substring(n.lastIndexOf("/") + 1);
  return s.endsWith(e) && (s = s.substring(0, s.length - e.length)), s;
}
function Yk(t, e) {
  return e ? e.toUpperCase() : "";
}
const Zk = /(?:^|[-_/])(\w)/g,
  qy = (t) => t && t.replace(Zk, Yk);
function eE(t) {
  function e(y) {
    const v = y.name || y._componentTag || y.__playwright_guessedName;
    if (v) return v;
    const m = y.__file;
    if (m) return qy(Hy(m, ".vue"));
  }
  function n(y, v) {
    return (y.type.__playwright_guessedName = v), v;
  }
  function s(y) {
    var m, w, _, S;
    const v = e(y.type || {});
    if (v) return v;
    if (y.root === y) return "Root";
    for (const E in (w = (m = y.parent) == null ? void 0 : m.type) == null
      ? void 0
      : w.components)
      if (((_ = y.parent) == null ? void 0 : _.type.components[E]) === y.type)
        return n(y, E);
    for (const E in (S = y.appContext) == null ? void 0 : S.components)
      if (y.appContext.components[E] === y.type) return n(y, E);
    return "Anonymous Component";
  }
  function o(y) {
    return y._isBeingDestroyed || y.isUnmounted;
  }
  function l(y) {
    return y.subTree.type.toString() === "Symbol(Fragment)";
  }
  function c(y) {
    const v = [];
    return (
      y.component && v.push(y.component),
      y.suspense && v.push(...c(y.suspense.activeBranch)),
      Array.isArray(y.children) &&
        y.children.forEach((m) => {
          m.component ? v.push(m.component) : v.push(...c(m));
        }),
      v.filter((m) => {
        var w;
        return !o(m) && !((w = m.type.devtools) != null && w.hide);
      })
    );
  }
  function u(y) {
    return l(y) ? d(y.subTree) : [y.subTree.el];
  }
  function d(y) {
    if (!y.children) return [];
    const v = [];
    for (let m = 0, w = y.children.length; m < w; m++) {
      const _ = y.children[m];
      _.component ? v.push(...u(_.component)) : _.el && v.push(_.el);
    }
    return v;
  }
  function p(y) {
    return {
      name: s(y),
      children: c(y.subTree).map(p),
      rootElements: u(y),
      props: y.props,
    };
  }
  return p(t);
}
function tE(t) {
  function e(l) {
    const c = l.displayName || l.name || l._componentTag;
    if (c) return c;
    const u = l.__file;
    if (u) return qy(Hy(u, ".vue"));
  }
  function n(l) {
    const c = e(l.$options || l.fnOptions || {});
    return c || (l.$root === l ? "Root" : "Anonymous Component");
  }
  function s(l) {
    return l.$children
      ? l.$children
      : Array.isArray(l.subTree.children)
        ? l.subTree.children
            .filter((c) => !!c.component)
            .map((c) => c.component)
        : [];
  }
  function o(l) {
    return {
      name: n(l),
      children: s(l).map(o),
      rootElements: [l.$el],
      props: l._props,
    };
  }
  return o(t);
}
function Vy(t, e, n = []) {
  e(t) && n.push(t);
  for (const s of t.children) Vy(s, e, n);
  return n;
}
function Wy(t, e = []) {
  const s = (t.ownerDocument || t).createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
    o = new Set();
  do {
    const l = s.currentNode;
    l.__vue__ && o.add(l.__vue__.$root),
      l.__vue_app__ &&
        l._vnode &&
        l._vnode.component &&
        e.push({ root: l._vnode.component, version: 3 });
    const c = l instanceof Element ? l.shadowRoot : null;
    c && Wy(c, e);
  } while (s.nextNode());
  for (const l of o) e.push({ version: 2, root: l });
  return e;
}
const nE = {
    queryAll(t, e) {
      const n = t.ownerDocument || t,
        { name: s, attributes: o } = Cr(e, !1),
        u = Wy(n)
          .map((p) => (p.version === 3 ? eE(p.root) : tE(p.root)))
          .map((p) =>
            Vy(p, (y) => {
              if ((s && y.name !== s) || y.rootElements.some((v) => !sa(t, v)))
                return !1;
              for (const v of o) if (!by(y.props, v)) return !1;
              return !0;
            }),
          )
          .flat(),
        d = new Set();
      for (const p of u) for (const y of p.rootElements) d.add(y);
      return [...d];
    },
  },
  Nm = {
    queryAll(t, e) {
      e.startsWith("/") && t.nodeType !== Node.DOCUMENT_NODE && (e = "." + e);
      const n = [],
        s = t.ownerDocument || t;
      if (!s) return n;
      const o = s.evaluate(e, t, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
      for (let l = o.iterateNext(); l; l = o.iterateNext())
        l.nodeType === Node.ELEMENT_NODE && n.push(l);
      return n;
    },
  };
class Ky {
  constructor(e, n, s, o, l, c, u) {
    (this.onGlobalListenersRemoved = new Set()),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen =
        "data-testid"),
      (this.utils = {
        asLocator: nr,
        cacheNormalizedWhitespaces: W1,
        elementText: Ct,
        getAriaRole: Ye,
        getElementAccessibleDescription: ym,
        getElementAccessibleName: Wi,
        isElementVisible: _s,
        isInsideScope: sa,
        normalizeWhiteSpace: gt,
        parseAriaSnapshot: hf,
      }),
      (this.window = e),
      (this.document = e.document),
      (this.isUnderTest = n),
      (this._sdkLanguage = s),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen = o),
      (this._evaluator = new bk(new Map())),
      (this._engines = new Map()),
      this._engines.set("xpath", Nm),
      this._engines.set("xpath:light", Nm),
      this._engines.set("_react", _k),
      this._engines.set("_vue", nE),
      this._engines.set("role", Sm(!1)),
      this._engines.set("text", this._createTextEngine(!0, !1)),
      this._engines.set("text:light", this._createTextEngine(!1, !1)),
      this._engines.set("id", this._createAttributeEngine("id", !0)),
      this._engines.set("id:light", this._createAttributeEngine("id", !1)),
      this._engines.set(
        "data-testid",
        this._createAttributeEngine("data-testid", !0),
      ),
      this._engines.set(
        "data-testid:light",
        this._createAttributeEngine("data-testid", !1),
      ),
      this._engines.set(
        "data-test-id",
        this._createAttributeEngine("data-test-id", !0),
      ),
      this._engines.set(
        "data-test-id:light",
        this._createAttributeEngine("data-test-id", !1),
      ),
      this._engines.set(
        "data-test",
        this._createAttributeEngine("data-test", !0),
      ),
      this._engines.set(
        "data-test:light",
        this._createAttributeEngine("data-test", !1),
      ),
      this._engines.set("css", this._createCSSEngine()),
      this._engines.set("nth", { queryAll: () => [] }),
      this._engines.set("visible", this._createVisibleEngine()),
      this._engines.set("internal:control", this._createControlEngine()),
      this._engines.set("internal:has", this._createHasEngine()),
      this._engines.set("internal:has-not", this._createHasNotEngine()),
      this._engines.set("internal:and", { queryAll: () => [] }),
      this._engines.set("internal:or", { queryAll: () => [] }),
      this._engines.set("internal:chain", this._createInternalChainEngine()),
      this._engines.set("internal:label", this._createInternalLabelEngine()),
      this._engines.set("internal:text", this._createTextEngine(!0, !0)),
      this._engines.set(
        "internal:has-text",
        this._createInternalHasTextEngine(),
      ),
      this._engines.set(
        "internal:has-not-text",
        this._createInternalHasNotTextEngine(),
      ),
      this._engines.set("internal:attr", this._createNamedAttributeEngine()),
      this._engines.set("internal:testid", this._createNamedAttributeEngine()),
      this._engines.set("internal:role", Sm(!0)),
      this._engines.set("internal:aria-id", this._createAriaIdEngine());
    for (const { name: d, engine: p } of u) this._engines.set(d, p);
    (this._stableRafCount = l),
      (this._browserName = c),
      D_(c),
      this._setupGlobalListenersRemovalDetection(),
      this._setupHitTargetInterceptors(),
      n && (this.window.__injectedScript = this);
  }
  builtinSetTimeout(e, n) {
    var s;
    return (s = this.window.__pwClock) != null && s.builtin
      ? this.window.__pwClock.builtin.setTimeout(e, n)
      : this.window.setTimeout(e, n);
  }
  builtinClearTimeout(e) {
    var n;
    return (n = this.window.__pwClock) != null && n.builtin
      ? this.window.__pwClock.builtin.clearTimeout(e)
      : this.window.clearTimeout(e);
  }
  builtinRequestAnimationFrame(e) {
    var n;
    return (n = this.window.__pwClock) != null && n.builtin
      ? this.window.__pwClock.builtin.requestAnimationFrame(e)
      : this.window.requestAnimationFrame(e);
  }
  eval(e) {
    return this.window.eval(e);
  }
  testIdAttributeNameForStrictErrorAndConsoleCodegen() {
    return this._testIdAttributeNameForStrictErrorAndConsoleCodegen;
  }
  parseSelector(e) {
    const n = Yl(e);
    return (
      H1(n, (s) => {
        if (!this._engines.has(s.name))
          throw this.createStacklessError(
            `Unknown engine "${s.name}" while parsing selector ${e}`,
          );
      }),
      n
    );
  }
  generateSelector(e, n) {
    return Em(this, e, n);
  }
  generateSelectorSimple(e, n) {
    return Em(this, e, {
      ...n,
      testIdAttributeName:
        this._testIdAttributeNameForStrictErrorAndConsoleCodegen,
    }).selector;
  }
  querySelector(e, n, s) {
    const o = this.querySelectorAll(e, n);
    if (s && o.length > 1) throw this.strictModeViolationError(e, o);
    return o[0];
  }
  _queryNth(e, n) {
    const s = [...e];
    let o = +n.body;
    return o === -1 && (o = s.length - 1), new Set(s.slice(o, o + 1));
  }
  _queryLayoutSelector(e, n, s) {
    const o = n.name,
      l = n.body,
      c = [],
      u = this.querySelectorAll(l.parsed, s);
    for (const d of e) {
      const p = Ey(o, d, u, l.distance);
      p !== void 0 && c.push({ element: d, score: p });
    }
    return (
      c.sort((d, p) => d.score - p.score), new Set(c.map((d) => d.element))
    );
  }
  ariaSnapshot(e, n) {
    if (e.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError(
        "Can only capture aria snapshot of Element nodes.",
      );
    const s = Kl(e);
    return (
      (this._ariaElementById = s.elements),
      Ui(s.root, { ...n, ids: n != null && n.id ? s.ids : void 0 })
    );
  }
  ariaSnapshotAsObject(e) {
    return Kl(e);
  }
  ariaSnapshotElement(e, n) {
    return e.elements.get(n) || null;
  }
  renderAriaTree(e, n) {
    return Ui(e, n);
  }
  renderAriaSnapshotWithIds(e) {
    return Ui(e.root, { ids: e.ids });
  }
  getAllByAria(e, n) {
    return ak(e.documentElement, n);
  }
  querySelectorAll(e, n) {
    if (e.capture !== void 0) {
      if (e.parts.some((o) => o.name === "nth"))
        throw this.createStacklessError(
          "Can't query n-th element in a request with the capture.",
        );
      const s = { parts: e.parts.slice(0, e.capture + 1) };
      if (e.capture < e.parts.length - 1) {
        const o = { parts: e.parts.slice(e.capture + 1) },
          l = { name: "internal:has", body: { parsed: o }, source: Nn(o) };
        s.parts.push(l);
      }
      return this.querySelectorAll(s, n);
    }
    if (!n.querySelectorAll)
      throw this.createStacklessError("Node is not queryable.");
    if (e.capture !== void 0)
      throw this.createStacklessError(
        "Internal error: there should not be a capture in the selector.",
      );
    if (
      n.nodeType === 11 &&
      e.parts.length === 1 &&
      e.parts[0].name === "css" &&
      e.parts[0].source === ":scope"
    )
      return [n];
    this._evaluator.begin();
    try {
      let s = new Set([n]);
      for (const o of e.parts)
        if (o.name === "nth") s = this._queryNth(s, o);
        else if (o.name === "internal:and") {
          const l = this.querySelectorAll(o.body.parsed, n);
          s = new Set(l.filter((c) => s.has(c)));
        } else if (o.name === "internal:or") {
          const l = this.querySelectorAll(o.body.parsed, n);
          s = new Set(jy(new Set([...s, ...l])));
        } else if (yk.includes(o.name)) s = this._queryLayoutSelector(s, o, n);
        else {
          const l = new Set();
          for (const c of s) {
            const u = this._queryEngineAll(o, c);
            for (const d of u) l.add(d);
          }
          s = l;
        }
      return [...s];
    } finally {
      this._evaluator.end();
    }
  }
  _queryEngineAll(e, n) {
    const s = this._engines.get(e.name).queryAll(n, e.body);
    for (const o of s)
      if (!("nodeName" in o))
        throw this.createStacklessError(
          `Expected a Node but got ${Object.prototype.toString.call(o)}`,
        );
    return s;
  }
  _createAttributeEngine(e, n) {
    const s = (o) => [
      {
        simples: [
          {
            selector: { css: `[${e}=${JSON.stringify(o)}]`, functions: [] },
            combinator: "",
          },
        ],
      },
    ];
    return {
      queryAll: (o, l) =>
        this._evaluator.query({ scope: o, pierceShadow: n }, s(l)),
    };
  }
  _createCSSEngine() {
    return {
      queryAll: (e, n) =>
        this._evaluator.query({ scope: e, pierceShadow: !0 }, n),
    };
  }
  _createTextEngine(e, n) {
    return {
      queryAll: (o, l) => {
        const { matcher: c, kind: u } = vl(l, n),
          d = [];
        let p = null;
        const y = (m) => {
          if (u === "lax" && p && p.contains(m)) return !1;
          const w = ia(this._evaluator._cacheText, m, c);
          w === "none" && (p = m),
            (w === "self" ||
              (w === "selfAndChildren" && u === "strict" && !n)) &&
              d.push(m);
        };
        o.nodeType === Node.ELEMENT_NODE && y(o);
        const v = this._evaluator._queryCSS({ scope: o, pierceShadow: e }, "*");
        for (const m of v) y(m);
        return d;
      },
    };
  }
  _createInternalHasTextEngine() {
    return {
      queryAll: (e, n) => {
        if (e.nodeType !== 1) return [];
        const s = e,
          o = Ct(this._evaluator._cacheText, s),
          { matcher: l } = vl(n, !0);
        return l(o) ? [s] : [];
      },
    };
  }
  _createInternalHasNotTextEngine() {
    return {
      queryAll: (e, n) => {
        if (e.nodeType !== 1) return [];
        const s = e,
          o = Ct(this._evaluator._cacheText, s),
          { matcher: l } = vl(n, !0);
        return l(o) ? [] : [s];
      },
    };
  }
  _createInternalLabelEngine() {
    return {
      queryAll: (e, n) => {
        const { matcher: s } = vl(n, !0);
        return this._evaluator
          ._queryCSS({ scope: e, pierceShadow: !0 }, "*")
          .filter((l) => Ny(this._evaluator._cacheText, l).some((c) => s(c)));
      },
    };
  }
  _createNamedAttributeEngine() {
    return {
      queryAll: (n, s) => {
        const o = Cr(s, !0);
        if (o.name || o.attributes.length !== 1)
          throw new Error("Malformed attribute selector: " + s);
        const { name: l, value: c, caseSensitive: u } = o.attributes[0],
          d = u ? null : c.toLowerCase();
        let p;
        return (
          c instanceof RegExp
            ? (p = (v) => !!v.match(c))
            : u
              ? (p = (v) => v === c)
              : (p = (v) => v.toLowerCase().includes(d)),
          this._evaluator
            ._queryCSS({ scope: n, pierceShadow: !0 }, `[${l}]`)
            .filter((v) => p(v.getAttribute(l)))
        );
      },
    };
  }
  _createControlEngine() {
    return {
      queryAll(e, n) {
        if (n === "enter-frame") return [];
        if (n === "return-empty") return [];
        if (n === "component")
          return e.nodeType !== 1
            ? []
            : [e.childElementCount === 1 ? e.firstElementChild : e];
        throw new Error(
          `Internal error, unknown internal:control selector ${n}`,
        );
      },
    };
  }
  _createHasEngine() {
    return {
      queryAll: (n, s) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(s.parsed, n, !1)
            ? [n]
            : [],
    };
  }
  _createHasNotEngine() {
    return {
      queryAll: (n, s) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(s.parsed, n, !1)
            ? []
            : [n],
    };
  }
  _createVisibleEngine() {
    return {
      queryAll: (n, s) => {
        if (n.nodeType !== 1) return [];
        const o = s === "true";
        return _s(n) === o ? [n] : [];
      },
    };
  }
  _createInternalChainEngine() {
    return { queryAll: (n, s) => this.querySelectorAll(s.parsed, n) };
  }
  extend(e, n) {
    const s = this.window.eval(`
    (() => {
      const module = {};
      ${e}
      return module.exports.default();
    })()`);
    return new s(this, n);
  }
  async viewportRatio(e) {
    return await new Promise((n) => {
      const s = new IntersectionObserver((o) => {
        n(o[0].intersectionRatio), s.disconnect();
      });
      s.observe(e), this.builtinRequestAnimationFrame(() => {});
    });
  }
  getElementBorderWidth(e) {
    if (
      e.nodeType !== Node.ELEMENT_NODE ||
      !e.ownerDocument ||
      !e.ownerDocument.defaultView
    )
      return { left: 0, top: 0 };
    const n = e.ownerDocument.defaultView.getComputedStyle(e);
    return {
      left: parseInt(n.borderLeftWidth || "", 10),
      top: parseInt(n.borderTopWidth || "", 10),
    };
  }
  describeIFrameStyle(e) {
    if (!e.ownerDocument || !e.ownerDocument.defaultView)
      return "error:notconnected";
    const n = e.ownerDocument.defaultView;
    for (let o = e; o; o = pt(o))
      if (n.getComputedStyle(o).transform !== "none") return "transformed";
    const s = n.getComputedStyle(e);
    return {
      left:
        parseInt(s.borderLeftWidth || "", 10) +
        parseInt(s.paddingLeft || "", 10),
      top:
        parseInt(s.borderTopWidth || "", 10) + parseInt(s.paddingTop || "", 10),
    };
  }
  retarget(e, n) {
    let s = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    if (!s) return null;
    if (n === "none") return s;
    if (
      (!s.matches("input, textarea, select") &&
        !s.isContentEditable &&
        (n === "button-link"
          ? (s = s.closest("button, [role=button], a, [role=link]") || s)
          : (s =
              s.closest(
                "button, [role=button], [role=checkbox], [role=radio]",
              ) || s)),
      n === "follow-label" &&
        !s.matches(
          "a, input, textarea, button, select, [role=link], [role=button], [role=checkbox], [role=radio]",
        ) &&
        !s.isContentEditable)
    ) {
      const o = s.closest("label");
      o && o.control && (s = o.control);
    }
    return s;
  }
  async checkElementStates(e, n) {
    if (n.includes("stable")) {
      const s = await this._checkElementIsStable(e);
      if (s === !1) return { missingState: "stable" };
      if (s === "error:notconnected") return "error:notconnected";
    }
    for (const s of n)
      if (s !== "stable") {
        const o = this.elementState(e, s);
        if (o.received === "error:notconnected") return "error:notconnected";
        if (!o.matches) return { missingState: s };
      }
  }
  async _checkElementIsStable(e) {
    const n = Symbol("continuePolling");
    let s,
      o = 0,
      l = 0;
    const c = () => {
      const v = this.retarget(e, "no-follow-label");
      if (!v) return "error:notconnected";
      const m = performance.now();
      if (this._stableRafCount > 1 && m - l < 15) return n;
      l = m;
      const w = v.getBoundingClientRect(),
        _ = { x: w.top, y: w.left, width: w.width, height: w.height };
      if (s) {
        if (
          !(
            _.x === s.x &&
            _.y === s.y &&
            _.width === s.width &&
            _.height === s.height
          )
        )
          return !1;
        if (++o >= this._stableRafCount) return !0;
      }
      return (s = _), n;
    };
    let u, d;
    const p = new Promise((v, m) => {
        (u = v), (d = m);
      }),
      y = () => {
        try {
          const v = c();
          v !== n ? u(v) : this.builtinRequestAnimationFrame(y);
        } catch (v) {
          d(v);
        }
      };
    return this.builtinRequestAnimationFrame(y), p;
  }
  _createAriaIdEngine() {
    return {
      queryAll: (n, s) => {
        var c;
        const o = parseInt(s, 10),
          l = (c = this._ariaElementById) == null ? void 0 : c.get(o);
        return l && l.isConnected ? [l] : [];
      },
    };
  }
  elementState(e, n) {
    const s = this.retarget(
      e,
      ["visible", "hidden"].includes(n) ? "none" : "follow-label",
    );
    if (!s || !s.isConnected)
      return n === "hidden"
        ? { matches: !0, received: "hidden" }
        : { matches: !1, received: "error:notconnected" };
    if (n === "visible" || n === "hidden") {
      const o = _s(s);
      return {
        matches: n === "visible" ? o : !o,
        received: o ? "visible" : "hidden",
      };
    }
    if (n === "disabled" || n === "enabled") {
      const o = Wl(s);
      return {
        matches: n === "disabled" ? o : !o,
        received: o ? "disabled" : "enabled",
      };
    }
    if (n === "editable") {
      const o = Wl(s),
        l = ek(s);
      if (l === "error")
        throw this.createStacklessError(
          "Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]",
        );
      return {
        matches: !o && !l,
        received: o ? "disabled" : l ? "readOnly" : "editable",
      };
    }
    if (n === "checked" || n === "unchecked") {
      const o = n === "checked",
        l = Y_(s);
      if (l === "error")
        throw this.createStacklessError("Not a checkbox or radio button");
      return { matches: o === l, received: l ? "checked" : "unchecked" };
    }
    if (n === "indeterminate") {
      const o = J_(s);
      if (o === "error")
        throw this.createStacklessError("Not a checkbox or radio button");
      return {
        matches: o === "mixed",
        received: o === !0 ? "checked" : o === !1 ? "unchecked" : "mixed",
      };
    }
    throw this.createStacklessError(`Unexpected element state "${n}"`);
  }
  selectOptions(e, n) {
    const s = this.retarget(e, "follow-label");
    if (!s) return "error:notconnected";
    if (s.nodeName.toLowerCase() !== "select")
      throw this.createStacklessError("Element is not a <select> element");
    const o = s,
      l = [...o.options],
      c = [];
    let u = n.slice();
    for (let d = 0; d < l.length; d++) {
      const p = l[d],
        y = (v) => {
          if (v instanceof Node) return p === v;
          let m = !0;
          return (
            v.valueOrLabel !== void 0 &&
              (m =
                m &&
                (v.valueOrLabel === p.value || v.valueOrLabel === p.label)),
            v.value !== void 0 && (m = m && v.value === p.value),
            v.label !== void 0 && (m = m && v.label === p.label),
            v.index !== void 0 && (m = m && v.index === d),
            m
          );
        };
      if (u.some(y))
        if ((c.push(p), o.multiple)) u = u.filter((v) => !y(v));
        else {
          u = [];
          break;
        }
    }
    return u.length
      ? "error:optionsnotfound"
      : ((o.value = void 0),
        c.forEach((d) => (d.selected = !0)),
        o.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
        o.dispatchEvent(new Event("change", { bubbles: !0 })),
        c.map((d) => d.value));
  }
  fill(e, n) {
    const s = this.retarget(e, "follow-label");
    if (!s) return "error:notconnected";
    if (s.nodeName.toLowerCase() === "input") {
      const o = s,
        l = o.type.toLowerCase(),
        c = new Set([
          "color",
          "date",
          "time",
          "datetime-local",
          "month",
          "range",
          "week",
        ]);
      if (
        !new Set([
          "",
          "email",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "url",
        ]).has(l) &&
        !c.has(l)
      )
        throw this.createStacklessError(
          `Input of type "${l}" cannot be filled`,
        );
      if (l === "number" && ((n = n.trim()), isNaN(Number(n))))
        throw this.createStacklessError(
          "Cannot type text into input[type=number]",
        );
      if (c.has(l)) {
        if (((n = n.trim()), o.focus(), (o.value = n), o.value !== n))
          throw this.createStacklessError("Malformed value");
        return (
          s.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
          s.dispatchEvent(new Event("change", { bubbles: !0 })),
          "done"
        );
      }
    } else if (s.nodeName.toLowerCase() !== "textarea") {
      if (!s.isContentEditable)
        throw this.createStacklessError(
          "Element is not an <input>, <textarea> or [contenteditable] element",
        );
    }
    return this.selectText(s), "needsinput";
  }
  selectText(e) {
    const n = this.retarget(e, "follow-label");
    if (!n) return "error:notconnected";
    if (n.nodeName.toLowerCase() === "input") {
      const l = n;
      return l.select(), l.focus(), "done";
    }
    if (n.nodeName.toLowerCase() === "textarea") {
      const l = n;
      return (
        (l.selectionStart = 0),
        (l.selectionEnd = l.value.length),
        l.focus(),
        "done"
      );
    }
    const s = n.ownerDocument.createRange();
    s.selectNodeContents(n);
    const o = n.ownerDocument.defaultView.getSelection();
    return o && (o.removeAllRanges(), o.addRange(s)), n.focus(), "done";
  }
  _activelyFocused(e) {
    const n = e.getRootNode().activeElement,
      s = n === e && !!e.ownerDocument && e.ownerDocument.hasFocus();
    return { activeElement: n, isFocused: s };
  }
  focusNode(e, n) {
    if (!e.isConnected) return "error:notconnected";
    if (e.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    const { activeElement: s, isFocused: o } = this._activelyFocused(e);
    if (
      (e.isContentEditable && !o && s && s.blur && s.blur(),
      e.focus(),
      e.focus(),
      n && !o && e.nodeName.toLowerCase() === "input")
    )
      try {
        e.setSelectionRange(0, 0);
      } catch {}
    return "done";
  }
  blurNode(e) {
    if (!e.isConnected) return "error:notconnected";
    if (e.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    return e.blur(), "done";
  }
  setInputFiles(e, n) {
    if (e.nodeType !== Node.ELEMENT_NODE)
      return "Node is not of type HTMLElement";
    const s = e;
    if (s.nodeName !== "INPUT") return "Not an <input> element";
    const o = s;
    if ((o.getAttribute("type") || "").toLowerCase() !== "file")
      return "Not an input[type=file] element";
    const c = n.map((d) => {
        const p = Uint8Array.from(atob(d.buffer), (y) => y.charCodeAt(0));
        return new File([p], d.name, {
          type: d.mimeType,
          lastModified: d.lastModifiedMs,
        });
      }),
      u = new DataTransfer();
    for (const d of c) u.items.add(d);
    (o.files = u.files),
      o.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
      o.dispatchEvent(new Event("change", { bubbles: !0 }));
  }
  expectHitTarget(e, n) {
    const s = [];
    let o = n;
    for (; o; ) {
      const y = Zg(o);
      if (!y || (s.push(y), y.nodeType === 9)) break;
      o = y.host;
    }
    let l;
    for (let y = s.length - 1; y >= 0; y--) {
      const v = s[y],
        m = v.elementsFromPoint(e.x, e.y),
        w = v.elementFromPoint(e.x, e.y);
      if (w && m[0] && pt(w) === m[0]) {
        const S = this.window.getComputedStyle(w);
        (S == null ? void 0 : S.display) === "contents" && m.unshift(w);
      }
      m[0] && m[0].shadowRoot === v && m[1] === w && m.shift();
      const _ = m[0];
      if (!_ || ((l = _), y && _ !== s[y - 1].host)) break;
    }
    const c = [];
    for (; l && l !== n; ) c.push(l), (l = pt(l));
    if (l === n) return "done";
    const u = this.previewNode(c[0] || this.document.documentElement);
    let d,
      p = n;
    for (; p; ) {
      const y = c.indexOf(p);
      if (y !== -1) {
        y > 1 && (d = this.previewNode(c[y - 1]));
        break;
      }
      p = pt(p);
    }
    return d
      ? { hitTargetDescription: `${u} from ${d} subtree` }
      : { hitTargetDescription: u };
  }
  setupHitTargetInterceptor(e, n, s, o) {
    const l = this.retarget(e, "button-link");
    if (!l || !l.isConnected) return "error:notconnected";
    if (s) {
      const y = this.expectHitTarget(s, l);
      if (y !== "done") return y.hitTargetDescription;
    }
    if (n === "drag") return { stop: () => "done" };
    const c = { hover: Qy, tap: Xy, mouse: Gy }[n];
    let u;
    const d = (y) => {
        if (!c.has(y.type) || !y.isTrusted) return;
        const v =
          this.window.TouchEvent && y instanceof this.window.TouchEvent
            ? y.touches[0]
            : y;
        u === void 0 &&
          v &&
          (u = this.expectHitTarget({ x: v.clientX, y: v.clientY }, l)),
          (o || (u !== "done" && u !== void 0)) &&
            (y.preventDefault(),
            y.stopPropagation(),
            y.stopImmediatePropagation());
      },
      p = () => (
        this._hitTargetInterceptor === d &&
          (this._hitTargetInterceptor = void 0),
        u || "done"
      );
    return (this._hitTargetInterceptor = d), { stop: p };
  }
  dispatchEvent(e, n, s) {
    var c, u, d;
    let o;
    const l = { bubbles: !0, cancelable: !0, composed: !0, ...s };
    switch (iE.get(n)) {
      case "mouse":
        o = new MouseEvent(n, l);
        break;
      case "keyboard":
        o = new KeyboardEvent(n, l);
        break;
      case "touch": {
        if (this._browserName === "webkit") {
          const p = (v) => {
              var _, S;
              if (v instanceof Touch) return v;
              let m = v.pageX;
              m === void 0 &&
                v.clientX !== void 0 &&
                (m =
                  v.clientX +
                  (((_ = this.document.scrollingElement) == null
                    ? void 0
                    : _.scrollLeft) || 0));
              let w = v.pageY;
              return (
                w === void 0 &&
                  v.clientY !== void 0 &&
                  (w =
                    v.clientY +
                    (((S = this.document.scrollingElement) == null
                      ? void 0
                      : S.scrollTop) || 0)),
                this.document.createTouch(
                  this.window,
                  v.target ?? e,
                  v.identifier,
                  m,
                  w,
                  v.screenX,
                  v.screenY,
                  v.radiusX,
                  v.radiusY,
                  v.rotationAngle,
                  v.force,
                )
              );
            },
            y = (v) =>
              v instanceof TouchList || !v
                ? v
                : this.document.createTouchList(...v.map(p));
          l.target ?? (l.target = e),
            (l.touches = y(l.touches)),
            (l.targetTouches = y(l.targetTouches)),
            (l.changedTouches = y(l.changedTouches)),
            (o = new TouchEvent(n, l));
        } else
          l.target ?? (l.target = e),
            (l.touches =
              (c = l.touches) == null
                ? void 0
                : c.map((p) =>
                    p instanceof Touch
                      ? p
                      : new Touch({ ...p, target: p.target ?? e }),
                  )),
            (l.targetTouches =
              (u = l.targetTouches) == null
                ? void 0
                : u.map((p) =>
                    p instanceof Touch
                      ? p
                      : new Touch({ ...p, target: p.target ?? e }),
                  )),
            (l.changedTouches =
              (d = l.changedTouches) == null
                ? void 0
                : d.map((p) =>
                    p instanceof Touch
                      ? p
                      : new Touch({ ...p, target: p.target ?? e }),
                  )),
            (o = new TouchEvent(n, l));
        break;
      }
      case "pointer":
        o = new PointerEvent(n, l);
        break;
      case "focus":
        o = new FocusEvent(n, l);
        break;
      case "drag":
        o = new DragEvent(n, l);
        break;
      case "wheel":
        o = new WheelEvent(n, l);
        break;
      case "deviceorientation":
        try {
          o = new DeviceOrientationEvent(n, l);
        } catch {
          const {
            bubbles: p,
            cancelable: y,
            alpha: v,
            beta: m,
            gamma: w,
            absolute: _,
          } = l;
          (o = this.document.createEvent("DeviceOrientationEvent")),
            o.initDeviceOrientationEvent(n, p, y, v, m, w, _);
        }
        break;
      case "devicemotion":
        try {
          o = new DeviceMotionEvent(n, l);
        } catch {
          const {
            bubbles: p,
            cancelable: y,
            acceleration: v,
            accelerationIncludingGravity: m,
            rotationRate: w,
            interval: _,
          } = l;
          (o = this.document.createEvent("DeviceMotionEvent")),
            o.initDeviceMotionEvent(n, p, y, v, m, w, _);
        }
        break;
      default:
        o = new Event(n, l);
        break;
    }
    e.dispatchEvent(o);
  }
  previewNode(e) {
    if (e.nodeType === Node.TEXT_NODE) return yl(`#text=${e.nodeValue || ""}`);
    if (e.nodeType !== Node.ELEMENT_NODE)
      return yl(`<${e.nodeName.toLowerCase()} />`);
    const n = e,
      s = [];
    for (let d = 0; d < n.attributes.length; d++) {
      const { name: p, value: y } = n.attributes[d];
      p !== "style" &&
        (!y && sE.has(p) ? s.push(` ${p}`) : s.push(` ${p}="${y}"`));
    }
    s.sort((d, p) => d.length - p.length);
    const o = qp(s.join(""), 500);
    if (rE.has(n.nodeName)) return yl(`<${n.nodeName.toLowerCase()}${o}/>`);
    const l = n.childNodes;
    let c = !1;
    if (l.length <= 5) {
      c = !0;
      for (let d = 0; d < l.length; d++)
        c = c && l[d].nodeType === Node.TEXT_NODE;
    }
    const u = c ? n.textContent || "" : l.length ? "…" : "";
    return yl(
      `<${n.nodeName.toLowerCase()}${o}>${qp(u, 50)}</${n.nodeName.toLowerCase()}>`,
    );
  }
  strictModeViolationError(e, n) {
    const s = n
        .slice(0, 10)
        .map((l) => ({
          preview: this.previewNode(l),
          selector: this.generateSelectorSimple(l),
        })),
      o = s.map(
        (l, c) => `
    ${c + 1}) ${l.preview} aka ${nr(this._sdkLanguage, l.selector)}`,
      );
    return (
      s.length < n.length &&
        o.push(`
    ...`),
      this
        .createStacklessError(`strict mode violation: ${nr(this._sdkLanguage, Nn(e))} resolved to ${n.length} elements:${o.join("")}
`)
    );
  }
  createStacklessError(e) {
    if (this._browserName === "firefox") {
      const s = new Error("Error: " + e);
      return (s.stack = ""), s;
    }
    const n = new Error(e);
    return delete n.stack, n;
  }
  createHighlight() {
    return new Su(this);
  }
  maskSelectors(e, n) {
    this._highlight && this.hideHighlight(),
      (this._highlight = new Su(this)),
      this._highlight.install();
    const s = [];
    for (const o of e)
      s.push(this.querySelectorAll(o, this.document.documentElement));
    this._highlight.maskElements(s.flat(), n);
  }
  highlight(e) {
    this._highlight ||
      ((this._highlight = new Su(this)), this._highlight.install()),
      this._highlight.runHighlightOnRaf(e);
  }
  hideHighlight() {
    this._highlight && (this._highlight.uninstall(), delete this._highlight);
  }
  markTargetElements(e, n) {
    var c, u;
    ((c = this._markedElements) == null ? void 0 : c.callId) !== n &&
      (this._markedElements = void 0);
    const s =
        ((u = this._markedElements) == null ? void 0 : u.elements) || new Set(),
      o = new CustomEvent("__playwright_unmark_target__", {
        bubbles: !0,
        cancelable: !0,
        detail: n,
        composed: !0,
      });
    for (const d of s) e.has(d) || d.dispatchEvent(o);
    const l = new CustomEvent("__playwright_mark_target__", {
      bubbles: !0,
      cancelable: !0,
      detail: n,
      composed: !0,
    });
    for (const d of e) s.has(d) || d.dispatchEvent(l);
    this._markedElements = { callId: n, elements: e };
  }
  _setupGlobalListenersRemovalDetection() {
    const e = "__playwright_global_listeners_check__";
    let n = !1;
    const s = () => (n = !0);
    this.window.addEventListener(e, s),
      new MutationObserver((o) => {
        if (
          o.some((c) =>
            Array.from(c.addedNodes).includes(this.document.documentElement),
          ) &&
          ((n = !1), this.window.dispatchEvent(new CustomEvent(e)), !n)
        ) {
          this.window.addEventListener(e, s);
          for (const c of this.onGlobalListenersRemoved) c();
        }
      }).observe(this.document, { childList: !0 });
  }
  _setupHitTargetInterceptors() {
    const e = (s) => {
        var o;
        return (o = this._hitTargetInterceptor) == null
          ? void 0
          : o.call(this, s);
      },
      n = () => {
        for (const s of oE)
          this.window.addEventListener(s, e, { capture: !0, passive: !1 });
      };
    n(), this.onGlobalListenersRemoved.add(n);
  }
  async expect(e, n, s) {
    return n.expression === "to.have.count" || n.expression.endsWith(".array")
      ? this.expectArray(s, n)
      : e
        ? await this.expectSingleElement(e, n)
        : !n.isNot && n.expression === "to.be.hidden"
          ? { matches: !0 }
          : n.isNot && n.expression === "to.be.visible"
            ? { matches: !1 }
            : !n.isNot && n.expression === "to.be.detached"
              ? { matches: !0 }
              : n.isNot && n.expression === "to.be.attached"
                ? { matches: !1 }
                : n.isNot && n.expression === "to.be.in.viewport"
                  ? { matches: !1 }
                  : { matches: n.isNot, missingReceived: !0 };
  }
  async expectSingleElement(e, n) {
    var o;
    const s = n.expression;
    {
      let l;
      if (s === "to.have.attribute") {
        const c = e.hasAttribute(n.expressionArg);
        l = {
          matches: c,
          received: c ? "attribute present" : "attribute not present",
        };
      } else if (s === "to.be.checked") {
        const { checked: c, indeterminate: u } = n.expectedValue;
        if (u) {
          if (c !== void 0)
            throw this.createStacklessError(
              "Can't assert indeterminate and checked at the same time",
            );
          l = this.elementState(e, "indeterminate");
        } else l = this.elementState(e, c === !1 ? "unchecked" : "checked");
      } else if (s === "to.be.disabled") l = this.elementState(e, "disabled");
      else if (s === "to.be.editable") l = this.elementState(e, "editable");
      else if (s === "to.be.readonly")
        (l = this.elementState(e, "editable")), (l.matches = !l.matches);
      else if (s === "to.be.empty")
        if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
          const c = e.value;
          l = { matches: !c, received: c ? "notEmpty" : "empty" };
        } else {
          const c = (o = e.textContent) == null ? void 0 : o.trim();
          l = { matches: !c, received: c ? "notEmpty" : "empty" };
        }
      else if (s === "to.be.enabled") l = this.elementState(e, "enabled");
      else if (s === "to.be.focused") {
        const c = this._activelyFocused(e).isFocused;
        l = { matches: c, received: c ? "focused" : "inactive" };
      } else
        s === "to.be.hidden"
          ? (l = this.elementState(e, "hidden"))
          : s === "to.be.visible"
            ? (l = this.elementState(e, "visible"))
            : s === "to.be.attached"
              ? (l = { matches: !0, received: "attached" })
              : s === "to.be.detached" &&
                (l = { matches: !1, received: "attached" });
      if (l) {
        if (l.received === "error:notconnected")
          throw this.createStacklessError("Element is not connected");
        return l;
      }
    }
    if (s === "to.have.property") {
      let l = e;
      const c = n.expressionArg.split(".");
      for (let p = 0; p < c.length - 1; p++) {
        if (typeof l != "object" || !(c[p] in l))
          return { received: void 0, matches: !1 };
        l = l[c[p]];
      }
      const u = l[c[c.length - 1]],
        d = Ju(u, n.expectedValue);
      return { received: u, matches: d };
    }
    if (s === "to.be.in.viewport") {
      const l = await this.viewportRatio(e);
      return {
        received: `viewport ratio ${l}`,
        matches: l > 0 && l > (n.expectedNumber ?? 0) - 1e-9,
      };
    }
    if (s === "to.have.values") {
      if (
        ((e = this.retarget(e, "follow-label")),
        e.nodeName !== "SELECT" || !e.multiple)
      )
        throw this.createStacklessError(
          "Not a select element with a multiple attribute",
        );
      const l = [...e.selectedOptions].map((c) => c.value);
      return l.length !== n.expectedText.length
        ? { received: l, matches: !1 }
        : {
            received: l,
            matches: l
              .map((c, u) => new bu(n.expectedText[u]).matches(c))
              .every(Boolean),
          };
    }
    if (s === "to.match.aria") {
      const l = lk(e, n.expectedValue);
      return { received: l.received, matches: !!l.matches.length };
    }
    {
      let l;
      if (s === "to.have.attribute.value") {
        const c = e.getAttribute(n.expressionArg);
        if (c === null) return { received: null, matches: !1 };
        l = c;
      } else if (s === "to.have.class") l = e.classList.toString();
      else if (s === "to.have.css")
        l = this.window.getComputedStyle(e).getPropertyValue(n.expressionArg);
      else if (s === "to.have.id") l = e.id;
      else if (s === "to.have.text")
        l = n.useInnerText ? e.innerText : Ct(new Map(), e).full;
      else if (s === "to.have.accessible.name") l = Wi(e, !1);
      else if (s === "to.have.accessible.description") l = ym(e, !1);
      else if (s === "to.have.accessible.error.message") l = X_(e);
      else if (s === "to.have.role") l = Ye(e) || "";
      else if (s === "to.have.title") l = this.document.title;
      else if (s === "to.have.url") l = this.document.location.href;
      else if (s === "to.have.value") {
        if (
          ((e = this.retarget(e, "follow-label")),
          e.nodeName !== "INPUT" &&
            e.nodeName !== "TEXTAREA" &&
            e.nodeName !== "SELECT")
        )
          throw this.createStacklessError("Not an input element");
        l = e.value;
      }
      if (l !== void 0 && n.expectedText) {
        const c = new bu(n.expectedText[0]);
        return { received: l, matches: c.matches(l) };
      }
    }
    throw this.createStacklessError("Unknown expect matcher: " + s);
  }
  expectArray(e, n) {
    const s = n.expression;
    if (s === "to.have.count") {
      const l = e.length,
        c = l === n.expectedNumber;
      return { received: l, matches: c };
    }
    let o;
    if (
      (s === "to.have.text.array" || s === "to.contain.text.array"
        ? (o = e.map((l) =>
            n.useInnerText ? l.innerText : Ct(new Map(), l).full,
          ))
        : s === "to.have.class.array" &&
          (o = e.map((l) => l.classList.toString())),
      o && n.expectedText)
    ) {
      const l = s !== "to.contain.text.array";
      if (!(o.length === n.expectedText.length || !l))
        return { received: o, matches: !1 };
      const u = n.expectedText.map((y) => new bu(y));
      let d = 0,
        p = 0;
      for (; d < u.length && p < o.length; ) u[d].matches(o[p]) && ++d, ++p;
      return { received: o, matches: d === u.length };
    }
    throw this.createStacklessError("Unknown expect matcher: " + s);
  }
}
const rE = new Set([
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "MENUITEM",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR",
  ]),
  sE = new Set(["checked", "selected", "disabled", "readonly", "multiple"]);
function yl(t) {
  return t.replace(/\n/g, "↵").replace(/\t/g, "⇆");
}
const iE = new Map([
    ["auxclick", "mouse"],
    ["click", "mouse"],
    ["dblclick", "mouse"],
    ["mousedown", "mouse"],
    ["mouseeenter", "mouse"],
    ["mouseleave", "mouse"],
    ["mousemove", "mouse"],
    ["mouseout", "mouse"],
    ["mouseover", "mouse"],
    ["mouseup", "mouse"],
    ["mouseleave", "mouse"],
    ["mousewheel", "mouse"],
    ["keydown", "keyboard"],
    ["keyup", "keyboard"],
    ["keypress", "keyboard"],
    ["textInput", "keyboard"],
    ["touchstart", "touch"],
    ["touchmove", "touch"],
    ["touchend", "touch"],
    ["touchcancel", "touch"],
    ["pointerover", "pointer"],
    ["pointerout", "pointer"],
    ["pointerenter", "pointer"],
    ["pointerleave", "pointer"],
    ["pointerdown", "pointer"],
    ["pointerup", "pointer"],
    ["pointermove", "pointer"],
    ["pointercancel", "pointer"],
    ["gotpointercapture", "pointer"],
    ["lostpointercapture", "pointer"],
    ["focus", "focus"],
    ["blur", "focus"],
    ["drag", "drag"],
    ["dragstart", "drag"],
    ["dragend", "drag"],
    ["dragover", "drag"],
    ["dragenter", "drag"],
    ["dragleave", "drag"],
    ["dragexit", "drag"],
    ["drop", "drag"],
    ["wheel", "wheel"],
    ["deviceorientation", "deviceorientation"],
    ["deviceorientationabsolute", "deviceorientation"],
    ["devicemotion", "devicemotion"],
  ]),
  Qy = new Set(["mousemove"]),
  Xy = new Set([
    "pointerdown",
    "pointerup",
    "touchstart",
    "touchend",
    "touchcancel",
  ]),
  Gy = new Set([
    "mousedown",
    "mouseup",
    "pointerdown",
    "pointerup",
    "click",
    "auxclick",
    "dblclick",
    "contextmenu",
  ]),
  oE = new Set([...Qy, ...Xy, ...Gy]);
function lE(t) {
  if (((t = t.substring(1, t.length - 1)), !t.includes("\\"))) return t;
  const e = [];
  let n = 0;
  for (; n < t.length; )
    t[n] === "\\" && n + 1 < t.length && n++, e.push(t[n++]);
  return e.join("");
}
function vl(t, e) {
  if (t[0] === "/" && t.lastIndexOf("/") > 0) {
    const o = t.lastIndexOf("/"),
      l = new RegExp(t.substring(1, o), t.substring(o + 1));
    return { matcher: (c) => l.test(c.full), kind: "regex" };
  }
  const n = e ? JSON.parse.bind(JSON) : lE;
  let s = !1;
  return (
    t.length > 1 && t[0] === '"' && t[t.length - 1] === '"'
      ? ((t = n(t)), (s = !0))
      : e &&
          t.length > 1 &&
          t[0] === '"' &&
          t[t.length - 2] === '"' &&
          t[t.length - 1] === "i"
        ? ((t = n(t.substring(0, t.length - 1))), (s = !1))
        : e &&
            t.length > 1 &&
            t[0] === '"' &&
            t[t.length - 2] === '"' &&
            t[t.length - 1] === "s"
          ? ((t = n(t.substring(0, t.length - 1))), (s = !0))
          : t.length > 1 &&
            t[0] === "'" &&
            t[t.length - 1] === "'" &&
            ((t = n(t)), (s = !0)),
    (t = gt(t)),
    s
      ? e
        ? { kind: "strict", matcher: (l) => l.normalized === t }
        : {
            matcher: (l) =>
              !t && !l.immediate.length
                ? !0
                : l.immediate.some((c) => gt(c) === t),
            kind: "strict",
          }
      : ((t = t.toLowerCase()),
        { kind: "lax", matcher: (o) => o.normalized.toLowerCase().includes(t) })
  );
}
class bu {
  constructor(e) {
    if (
      ((this._normalizeWhiteSpace = e.normalizeWhiteSpace),
      (this._ignoreCase = e.ignoreCase),
      (this._string = e.matchSubstring ? void 0 : this.normalize(e.string)),
      (this._substring = e.matchSubstring ? this.normalize(e.string) : void 0),
      e.regexSource)
    ) {
      const n = new Set((e.regexFlags || "").split(""));
      e.ignoreCase === !1 && n.delete("i"),
        e.ignoreCase === !0 && n.add("i"),
        (this._regex = new RegExp(e.regexSource, [...n].join("")));
    }
  }
  matches(e) {
    return (
      this._regex || (e = this.normalize(e)),
      this._string !== void 0
        ? e === this._string
        : this._substring !== void 0
          ? e.includes(this._substring)
          : this._regex
            ? !!this._regex.test(e)
            : !1
    );
  }
  normalize(e) {
    return (
      e &&
      (this._normalizeWhiteSpace && (e = gt(e)),
      this._ignoreCase && (e = e.toLocaleLowerCase()),
      e)
    );
  }
}
function Ju(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    if (Array.isArray(t)) {
      if (t.length !== e.length) return !1;
      for (let s = 0; s < t.length; ++s) if (!Ju(t[s], e[s])) return !1;
      return !0;
    }
    if (t instanceof RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !1;
    for (let s = 0; s < n.length; ++s) if (!e.hasOwnProperty(n[s])) return !1;
    for (const s of n) if (!Ju(t[s], e[s])) return !1;
    return !0;
  }
  return typeof t == "number" && typeof e == "number"
    ? isNaN(t) && isNaN(e)
    : !1;
}
const aE = {
  tagName: "svg",
  children: [
    {
      tagName: "defs",
      children: [
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-gripper",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-circle-large-filled",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-inspect",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-whole-word",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0 11H1V13H15V11H16V14H15H1H0V11Z",
              },
            },
            {
              tagName: "path",
              attrs: {
                d: "M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z",
              },
            },
            {
              tagName: "path",
              attrs: {
                d: "M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-eye",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-symbol-constant",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M4 6h8v1H4V6zm8 3H4v1h8V9z",
              },
            },
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-check",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-close",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-pass",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z",
              },
            },
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-gist",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10.57 1.14l3.28 3.3.15.36v9.7l-.5.5h-11l-.5-.5v-13l.5-.5h7.72l.35.14zM10 5h3l-3-3v3zM3 2v12h10V6H9.5L9 5.5V2H3zm2.062 7.533l1.817-1.828L6.17 7 4 9.179v.707l2.171 2.174.707-.707-1.816-1.82zM8.8 7.714l.7-.709 2.189 2.175v.709L9.5 12.062l-.705-.709 1.831-1.82L8.8 7.714z",
              },
            },
          ],
        },
      ],
    },
  ],
};
class Cm {
  cursor() {
    return "default";
  }
}
class Tu {
  constructor(e, n) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null),
      (this._recorder = e),
      (this._assertVisibility = n);
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null);
  }
  onClick(e) {
    var n;
    Me(e),
      e.button === 0 &&
        (n = this._hoveredModel) != null &&
        n.selector &&
        this._commit(this._hoveredModel.selector, this._hoveredModel);
  }
  onContextMenu(e) {
    if (
      this._hoveredModel &&
      !this._hoveredModel.tooltipListItemSelected &&
      this._hoveredSelectors &&
      this._hoveredSelectors.length > 1
    ) {
      Me(e);
      const n = this._hoveredSelectors,
        s = this._hoveredModel;
      (this._hoveredModel.tooltipFooter = void 0),
        (this._hoveredModel.tooltipList = n.map((o) =>
          this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            o,
          ),
        )),
        (this._hoveredModel.tooltipListItemSelected = (o) => {
          o === void 0 ? this._reset(!0) : this._commit(n[o], s);
        }),
        this._recorder.updateHighlight(this._hoveredModel, !0);
    }
  }
  onPointerDown(e) {
    Me(e);
  }
  onPointerUp(e) {
    Me(e);
  }
  onMouseDown(e) {
    Me(e);
  }
  onMouseUp(e) {
    Me(e);
  }
  onMouseMove(e) {
    var l;
    Me(e);
    let n = this._recorder.deepEventTarget(e);
    if ((n.isConnected || (n = null), this._hoveredElement === n)) return;
    this._hoveredElement = n;
    let s = null,
      o = [];
    if (this._hoveredElement) {
      const c = this._recorder.injectedScript.generateSelector(
        this._hoveredElement,
        {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
          multiple: !1,
        },
      );
      (o = c.selectors),
        (s = {
          selector: c.selector,
          elements: c.elements,
          tooltipText: this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            c.selector,
          ),
          tooltipFooter:
            o.length > 1
              ? "Click to select, right-click for more options"
              : void 0,
          color: this._assertVisibility ? "#8acae480" : void 0,
        });
    }
    ((l = this._hoveredModel) == null ? void 0 : l.selector) !==
      (s == null ? void 0 : s.selector) &&
      ((this._hoveredModel = s),
      (this._hoveredSelectors = o),
      this._recorder.updateHighlight(s, !0));
  }
  onMouseEnter(e) {
    Me(e);
  }
  onMouseLeave(e) {
    Me(e);
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(e).nodeType === Node.DOCUMENT_NODE &&
      this._reset(!0);
  }
  onKeyDown(e) {
    var n;
    Me(e),
      e.key === "Escape" &&
        ((n = this._hoveredModel) != null && n.tooltipListItemSelected
          ? this._reset(!0)
          : this._assertVisibility && this._recorder.setMode("recording"));
  }
  onKeyUp(e) {
    Me(e);
  }
  onScroll(e) {
    this._reset(!1);
  }
  _commit(e, n) {
    var s;
    this._assertVisibility
      ? (this._recorder.recordAction({
          name: "assertVisible",
          selector: e,
          signals: [],
        }),
        this._recorder.setMode("recording"),
        (s = this._recorder.overlay) == null ||
          s.flashToolSucceeded("assertingVisibility"))
      : this._recorder.elementPicked(e, n);
  }
  _reset(e) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._hoveredSelectors = null),
      this._recorder.updateHighlight(null, e);
  }
}
class cE {
  constructor(e) {
    (this._performingActions = new Set()),
      (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1),
      (this._recorder = e);
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1);
  }
  onClick(e) {
    if (
      Iu(this._hoveredElement) ||
      (e.button === 2 && e.type === "auxclick") ||
      this._shouldIgnoreMouseEvent(e) ||
      this._actionInProgress(e) ||
      this._consumedDueToNoModel(e, this._hoveredModel)
    )
      return;
    const n = Lu(this._recorder.deepEventTarget(e));
    if (n) {
      this._performAction({
        name: n.checked ? "check" : "uncheck",
        selector: this._hoveredModel.selector,
        signals: [],
      });
      return;
    }
    this._cancelPendingClickAction(),
      e.detail === 1 &&
        (this._pendingClickAction = {
          action: {
            name: "click",
            selector: this._hoveredModel.selector,
            position: Au(e),
            signals: [],
            button: Am(e),
            modifiers: Cu(e),
            clickCount: e.detail,
          },
          timeout: this._recorder.injectedScript.builtinSetTimeout(
            () => this._commitPendingClickAction(),
            200,
          ),
        });
  }
  onDblClick(e) {
    Iu(this._hoveredElement) ||
      this._shouldIgnoreMouseEvent(e) ||
      this._actionInProgress(e) ||
      this._consumedDueToNoModel(e, this._hoveredModel) ||
      (this._cancelPendingClickAction(),
      this._performAction({
        name: "click",
        selector: this._hoveredModel.selector,
        position: Au(e),
        signals: [],
        button: Am(e),
        modifiers: Cu(e),
        clickCount: e.detail,
      }));
  }
  _commitPendingClickAction() {
    this._pendingClickAction &&
      this._performAction(this._pendingClickAction.action),
      this._cancelPendingClickAction();
  }
  _cancelPendingClickAction() {
    this._pendingClickAction && clearTimeout(this._pendingClickAction.timeout),
      (this._pendingClickAction = void 0);
  }
  onContextMenu(e) {
    this._shouldIgnoreMouseEvent(e) ||
      this._actionInProgress(e) ||
      this._consumedDueToNoModel(e, this._hoveredModel) ||
      this._performAction({
        name: "click",
        selector: this._hoveredModel.selector,
        position: Au(e),
        signals: [],
        button: "right",
        modifiers: 0,
        clickCount: 0,
      });
  }
  onPointerDown(e) {
    this._shouldIgnoreMouseEvent(e) || this._performingActions.size || Me(e);
  }
  onPointerUp(e) {
    this._shouldIgnoreMouseEvent(e) || this._performingActions.size || Me(e);
  }
  onMouseDown(e) {
    this._shouldIgnoreMouseEvent(e) ||
      (this._performingActions.size || Me(e),
      (this._activeModel = this._hoveredModel));
  }
  onMouseUp(e) {
    this._shouldIgnoreMouseEvent(e) || this._performingActions.size || Me(e);
  }
  onMouseMove(e) {
    const n = this._recorder.deepEventTarget(e);
    this._hoveredElement !== n &&
      ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  onMouseLeave(e) {
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(e).nodeType === Node.DOCUMENT_NODE &&
      ((this._hoveredElement = null), this._updateModelForHoveredElement());
  }
  onFocus(e) {
    this._onFocus(!0);
  }
  onInput(e) {
    const n = this._recorder.deepEventTarget(e);
    if (n.nodeName === "INPUT" && n.type.toLowerCase() === "file") {
      this._recorder.recordAction({
        name: "setInputFiles",
        selector: this._activeModel.selector,
        signals: [],
        files: [...(n.files || [])].map((s) => s.name),
      });
      return;
    }
    if (Iu(n)) {
      this._recorder.recordAction({
        name: "fill",
        selector: this._hoveredModel.selector,
        signals: [],
        text: n.value,
      });
      return;
    }
    if (["INPUT", "TEXTAREA"].includes(n.nodeName) || n.isContentEditable) {
      if (
        (n.nodeName === "INPUT" &&
          ["checkbox", "radio"].includes(n.type.toLowerCase())) ||
        this._consumedDueWrongTarget(e)
      )
        return;
      this._recorder.recordAction({
        name: "fill",
        selector: this._activeModel.selector,
        signals: [],
        text: n.isContentEditable ? n.innerText : n.value,
      });
    }
    if (n.nodeName === "SELECT") {
      const s = n;
      if (this._actionInProgress(e)) return;
      this._performAction({
        name: "select",
        selector: this._activeModel.selector,
        options: [...s.selectedOptions].map((o) => o.value),
        signals: [],
      });
    }
  }
  onKeyDown(e) {
    if (this._shouldGenerateKeyPressFor(e)) {
      if (this._actionInProgress(e)) {
        this._expectProgrammaticKeyUp = !0;
        return;
      }
      if (!this._consumedDueWrongTarget(e)) {
        if (e.key === " ") {
          const n = Lu(this._recorder.deepEventTarget(e));
          if (n) {
            this._performAction({
              name: n.checked ? "uncheck" : "check",
              selector: this._activeModel.selector,
              signals: [],
            });
            return;
          }
        }
        this._performAction({
          name: "press",
          selector: this._activeModel.selector,
          signals: [],
          key: e.key,
          modifiers: Cu(e),
        });
      }
    }
  }
  onKeyUp(e) {
    if (this._shouldGenerateKeyPressFor(e)) {
      if (!this._expectProgrammaticKeyUp) {
        Me(e);
        return;
      }
      this._expectProgrammaticKeyUp = !1;
    }
  }
  onScroll(e) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      this._recorder.updateHighlight(null, !1);
  }
  _onFocus(e) {
    const n = hE(this._recorder.document);
    if (e && n === this._recorder.document.body) return;
    const s = n
      ? this._recorder.injectedScript.generateSelector(n, {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
        })
      : null;
    (this._activeModel = s && s.selector ? s : null),
      e && ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  _shouldIgnoreMouseEvent(e) {
    const n = this._recorder.deepEventTarget(e),
      s = n.nodeName;
    return !!(
      s === "SELECT" ||
      s === "OPTION" ||
      (s === "INPUT" && ["date", "range"].includes(n.type))
    );
  }
  _actionInProgress(e) {
    const n = e instanceof KeyboardEvent,
      s = e instanceof MouseEvent || e instanceof PointerEvent;
    for (const o of this._performingActions)
      if (
        (n && o.name === "press" && e.key === o.key) ||
        (s &&
          (o.name === "click" || o.name === "check" || o.name === "uncheck"))
      )
        return !0;
    return Me(e), !1;
  }
  _consumedDueToNoModel(e, n) {
    return n ? !1 : (Me(e), !0);
  }
  _consumedDueWrongTarget(e) {
    return this._activeModel &&
      this._activeModel.elements[0] === this._recorder.deepEventTarget(e)
      ? !1
      : (Me(e), !0);
  }
  _performAction(e) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._activeModel = null),
      this._recorder.updateHighlight(null, !1),
      this._performingActions.add(e),
      this._recorder.performAction(e).then(() => {
        this._performingActions.delete(e),
          this._onFocus(!1),
          this._recorder.injectedScript.isUnderTest &&
            console.error(
              "Action performed for test: " +
                JSON.stringify({
                  hovered: this._hoveredModel
                    ? this._hoveredModel.selector
                    : null,
                  active: this._activeModel ? this._activeModel.selector : null,
                }),
            );
      });
  }
  _shouldGenerateKeyPressFor(e) {
    if (
      (e.key === "Enter" &&
        (this._recorder.deepEventTarget(e).nodeName === "TEXTAREA" ||
          this._recorder.deepEventTarget(e).isContentEditable)) ||
      ["Backspace", "Delete", "AltGraph"].includes(e.key) ||
      (e.key === "@" && e.code === "KeyL")
    )
      return !1;
    if (navigator.platform.includes("Mac")) {
      if (e.key === "v" && e.metaKey) return !1;
    } else if (
      (e.key === "v" && e.ctrlKey) ||
      (e.key === "Insert" && e.shiftKey)
    )
      return !1;
    if (["Shift", "Control", "Meta", "Alt", "Process"].includes(e.key))
      return !1;
    const n = e.ctrlKey || e.altKey || e.metaKey;
    return e.key.length === 1 && !n
      ? !!Lu(this._recorder.deepEventTarget(e))
      : !0;
  }
  _updateModelForHoveredElement() {
    if (this._performingActions.size) return;
    if (!this._hoveredElement || !this._hoveredElement.isConnected) {
      (this._hoveredModel = null),
        (this._hoveredElement = null),
        this._recorder.updateHighlight(null, !0);
      return;
    }
    const { selector: e, elements: n } =
      this._recorder.injectedScript.generateSelector(this._hoveredElement, {
        testIdAttributeName: this._recorder.state.testIdAttributeName,
      });
    (this._hoveredModel && this._hoveredModel.selector === e) ||
      ((this._hoveredModel = e
        ? { selector: e, elements: n, color: "#dc6f6f7f" }
        : null),
      this._recorder.updateHighlight(this._hoveredModel, !0));
  }
}
class Nu {
  constructor(e, n) {
    (this._hoverHighlight = null),
      (this._action = null),
      (this._textCache = new Map()),
      (this._recorder = e),
      (this._kind = n),
      (this._dialog = new dE(e));
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._dialog.close(), (this._hoverHighlight = null);
  }
  onClick(e) {
    Me(e),
      this._kind === "value"
        ? this._commitAssertValue()
        : this._dialog.isShowing() || this._showDialog();
  }
  onMouseDown(e) {
    const n = this._recorder.deepEventTarget(e);
    this._elementHasValue(n) && e.preventDefault();
  }
  onPointerUp(e) {
    var s;
    const n = (s = this._hoverHighlight) == null ? void 0 : s.elements[0];
    this._kind === "value" &&
      n &&
      (n.nodeName === "INPUT" || n.nodeName === "SELECT") &&
      n.disabled &&
      this._commitAssertValue();
  }
  onMouseMove(e) {
    var s;
    if (this._dialog.isShowing()) return;
    const n = this._recorder.deepEventTarget(e);
    ((s = this._hoverHighlight) == null ? void 0 : s.elements[0]) !== n &&
      (this._kind === "text" || this._kind === "snapshot"
        ? (this._hoverHighlight =
            this._recorder.injectedScript.utils.elementText(this._textCache, n)
              .full
              ? { elements: [n], selector: "" }
              : null)
        : (this._hoverHighlight = this._elementHasValue(n)
            ? this._recorder.injectedScript.generateSelector(n, {
                testIdAttributeName: this._recorder.state.testIdAttributeName,
              })
            : null),
      this._hoverHighlight && (this._hoverHighlight.color = "#8acae480"),
      this._recorder.updateHighlight(this._hoverHighlight, !0));
  }
  onKeyDown(e) {
    e.key === "Escape" && this._recorder.setMode("recording"), Me(e);
  }
  onScroll(e) {
    this._recorder.updateHighlight(this._hoverHighlight, !1);
  }
  _elementHasValue(e) {
    return (
      e.nodeName === "TEXTAREA" ||
      e.nodeName === "SELECT" ||
      (e.nodeName === "INPUT" &&
        !["button", "image", "reset", "submit"].includes(e.type))
    );
  }
  _generateAction() {
    var n;
    this._textCache.clear();
    const e = (n = this._hoverHighlight) == null ? void 0 : n.elements[0];
    if (!e) return null;
    if (this._kind === "value") {
      if (!this._elementHasValue(e)) return null;
      const { selector: s } = this._recorder.injectedScript.generateSelector(
        e,
        { testIdAttributeName: this._recorder.state.testIdAttributeName },
      );
      return e.nodeName === "INPUT" &&
        ["checkbox", "radio"].includes(e.type.toLowerCase())
        ? {
            name: "assertChecked",
            selector: s,
            signals: [],
            checked: !e.checked,
          }
        : { name: "assertValue", selector: s, signals: [], value: e.value };
    } else
      return this._kind === "snapshot"
        ? ((this._hoverHighlight =
            this._recorder.injectedScript.generateSelector(e, {
              testIdAttributeName: this._recorder.state.testIdAttributeName,
              forTextExpect: !0,
            })),
          (this._hoverHighlight.color = "#8acae480"),
          this._recorder.updateHighlight(this._hoverHighlight, !0),
          {
            name: "assertSnapshot",
            selector: this._hoverHighlight.selector,
            signals: [],
            snapshot: this._recorder.injectedScript.ariaSnapshot(e, {
              mode: "regex",
            }),
          })
        : ((this._hoverHighlight =
            this._recorder.injectedScript.generateSelector(e, {
              testIdAttributeName: this._recorder.state.testIdAttributeName,
              forTextExpect: !0,
            })),
          (this._hoverHighlight.color = "#8acae480"),
          this._recorder.updateHighlight(this._hoverHighlight, !0),
          {
            name: "assertText",
            selector: this._hoverHighlight.selector,
            signals: [],
            text: this._recorder.injectedScript.utils.elementText(
              this._textCache,
              e,
            ).normalized,
            substring: !0,
          });
  }
  _renderValue(e) {
    return (e == null ? void 0 : e.name) === "assertText"
      ? this._recorder.injectedScript.utils.normalizeWhiteSpace(e.text)
      : (e == null ? void 0 : e.name) === "assertChecked"
        ? String(e.checked)
        : (e == null ? void 0 : e.name) === "assertValue"
          ? e.value
          : (e == null ? void 0 : e.name) === "assertSnapshot"
            ? e.snapshot
            : "";
  }
  _commit() {
    !this._action ||
      !this._dialog.isShowing() ||
      (this._dialog.close(),
      this._recorder.recordAction(this._action),
      this._recorder.setMode("recording"));
  }
  _showDialog() {
    var e, n, s, o;
    (e = this._hoverHighlight) != null &&
      e.elements[0] &&
      ((this._action = this._generateAction()),
      ((n = this._action) == null ? void 0 : n.name) === "assertText"
        ? this._showTextDialog(this._action)
        : ((s = this._action) == null ? void 0 : s.name) === "assertSnapshot" &&
          (this._recorder.recordAction(this._action),
          this._recorder.setMode("recording"),
          (o = this._recorder.overlay) == null ||
            o.flashToolSucceeded("assertingSnapshot")));
  }
  _showTextDialog(e) {
    const n = this._recorder.document.createElement("textarea");
    n.setAttribute("spellcheck", "false"),
      (n.value = this._renderValue(e)),
      n.classList.add("text-editor");
    const s = () => {
      var v;
      const u = this._recorder.injectedScript.utils.normalizeWhiteSpace(
          n.value,
        ),
        d = (v = this._hoverHighlight) == null ? void 0 : v.elements[0];
      if (!d) return;
      e.text = u;
      const p = this._recorder.injectedScript.utils.elementText(
          this._textCache,
          d,
        ).normalized,
        y = u && p.includes(u);
      n.classList.toggle("does-not-match", !y);
    };
    n.addEventListener("input", s);
    const l = this._dialog.show({
        label: "Assert that element contains text",
        body: n,
        onCommit: () => this._commit(),
      }),
      c = this._recorder.highlight.tooltipPosition(
        this._recorder.highlight.firstBox(),
        l,
      );
    this._dialog.moveTo(c.anchorTop, c.anchorLeft), n.focus();
  }
  _commitAssertValue() {
    var n;
    if (this._kind !== "value") return;
    const e = this._generateAction();
    e &&
      (this._recorder.recordAction(e),
      this._recorder.setMode("recording"),
      (n = this._recorder.overlay) == null ||
        n.flashToolSucceeded("assertingValue"));
  }
}
class uE {
  constructor(e) {
    (this._listeners = []),
      (this._offsetX = 0),
      (this._measure = { width: 0, height: 0 }),
      (this._recorder = e);
    const n = this._recorder.document;
    this._overlayElement = n.createElement("x-pw-overlay");
    const s = n.createElement("x-pw-tools-list");
    this._overlayElement.appendChild(s),
      (this._dragHandle = n.createElement("x-pw-tool-gripper")),
      this._dragHandle.appendChild(n.createElement("x-div")),
      s.appendChild(this._dragHandle),
      (this._recordToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._recordToggle.title = "Record"),
      this._recordToggle.classList.add("record"),
      this._recordToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      s.appendChild(this._recordToggle),
      (this._pickLocatorToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._pickLocatorToggle.title = "Pick locator"),
      this._pickLocatorToggle.classList.add("pick-locator"),
      this._pickLocatorToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      s.appendChild(this._pickLocatorToggle),
      (this._assertVisibilityToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertVisibilityToggle.title = "Assert visibility"),
      this._assertVisibilityToggle.classList.add("visibility"),
      this._assertVisibilityToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      s.appendChild(this._assertVisibilityToggle),
      (this._assertTextToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertTextToggle.title = "Assert text"),
      this._assertTextToggle.classList.add("text"),
      this._assertTextToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      s.appendChild(this._assertTextToggle),
      (this._assertValuesToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertValuesToggle.title = "Assert value"),
      this._assertValuesToggle.classList.add("value"),
      this._assertValuesToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      s.appendChild(this._assertValuesToggle),
      (this._assertSnapshotToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertSnapshotToggle.title = "Assert snapshot"),
      this._assertSnapshotToggle.classList.add("snapshot"),
      this._assertSnapshotToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      s.appendChild(this._assertSnapshotToggle),
      this._updateVisualPosition(),
      this._refreshListeners();
  }
  _refreshListeners() {
    Jy(this._listeners),
      (this._listeners = [
        je(this._dragHandle, "mousedown", (e) => {
          this._dragState = {
            offsetX: this._offsetX,
            dragStart: { x: e.clientX, y: 0 },
          };
        }),
        je(this._recordToggle, "click", () => {
          this._recordToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "none" ||
                this._recorder.state.mode === "standby" ||
                this._recorder.state.mode === "inspecting"
                ? "recording"
                : "standby",
            );
        }),
        je(this._pickLocatorToggle, "click", () => {
          if (this._pickLocatorToggle.classList.contains("disabled")) return;
          const e = {
            inspecting: "standby",
            none: "inspecting",
            standby: "inspecting",
            recording: "recording-inspecting",
            "recording-inspecting": "recording",
            assertingText: "recording-inspecting",
            assertingVisibility: "recording-inspecting",
            assertingValue: "recording-inspecting",
            assertingSnapshot: "recording-inspecting",
          };
          this._recorder.setMode(e[this._recorder.state.mode]);
        }),
        je(this._assertVisibilityToggle, "click", () => {
          this._assertVisibilityToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingVisibility"
                ? "recording"
                : "assertingVisibility",
            );
        }),
        je(this._assertTextToggle, "click", () => {
          this._assertTextToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingText"
                ? "recording"
                : "assertingText",
            );
        }),
        je(this._assertValuesToggle, "click", () => {
          this._assertValuesToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingValue"
                ? "recording"
                : "assertingValue",
            );
        }),
        je(this._assertSnapshotToggle, "click", () => {
          this._assertSnapshotToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingSnapshot"
                ? "recording"
                : "assertingSnapshot",
            );
        }),
      ]);
  }
  install() {
    this._recorder.highlight.appendChild(this._overlayElement),
      this._refreshListeners(),
      this._updateVisualPosition();
  }
  contains(e) {
    return this._recorder.injectedScript.utils.isInsideScope(
      this._overlayElement,
      e,
    );
  }
  setUIState(e) {
    this._recordToggle.classList.toggle(
      "toggled",
      e.mode === "recording" ||
        e.mode === "assertingText" ||
        e.mode === "assertingVisibility" ||
        e.mode === "assertingValue" ||
        e.mode === "assertingSnapshot" ||
        e.mode === "recording-inspecting",
    ),
      this._pickLocatorToggle.classList.toggle(
        "toggled",
        e.mode === "inspecting" || e.mode === "recording-inspecting",
      ),
      this._assertVisibilityToggle.classList.toggle(
        "toggled",
        e.mode === "assertingVisibility",
      ),
      this._assertVisibilityToggle.classList.toggle(
        "disabled",
        e.mode === "none" || e.mode === "standby" || e.mode === "inspecting",
      ),
      this._assertTextToggle.classList.toggle(
        "toggled",
        e.mode === "assertingText",
      ),
      this._assertTextToggle.classList.toggle(
        "disabled",
        e.mode === "none" || e.mode === "standby" || e.mode === "inspecting",
      ),
      this._assertValuesToggle.classList.toggle(
        "toggled",
        e.mode === "assertingValue",
      ),
      this._assertValuesToggle.classList.toggle(
        "disabled",
        e.mode === "none" || e.mode === "standby" || e.mode === "inspecting",
      ),
      this._assertSnapshotToggle.classList.toggle(
        "toggled",
        e.mode === "assertingSnapshot",
      ),
      this._assertSnapshotToggle.classList.toggle(
        "disabled",
        e.mode === "none" || e.mode === "standby" || e.mode === "inspecting",
      ),
      this._offsetX !== e.overlay.offsetX &&
        ((this._offsetX = e.overlay.offsetX), this._updateVisualPosition()),
      e.mode === "none" ? this._hideOverlay() : this._showOverlay();
  }
  flashToolSucceeded(e) {
    let n;
    e === "assertingVisibility"
      ? (n = this._assertVisibilityToggle)
      : e === "assertingSnapshot"
        ? (n = this._assertSnapshotToggle)
        : (n = this._assertValuesToggle),
      n.classList.add("succeeded"),
      this._recorder.injectedScript.builtinSetTimeout(
        () => n.classList.remove("succeeded"),
        2e3,
      );
  }
  _hideOverlay() {
    this._overlayElement.setAttribute("hidden", "true");
  }
  _showOverlay() {
    this._overlayElement.hasAttribute("hidden") &&
      (this._overlayElement.removeAttribute("hidden"),
      this._updateVisualPosition());
  }
  _updateVisualPosition() {
    (this._measure = this._overlayElement.getBoundingClientRect()),
      (this._overlayElement.style.left =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 +
        this._offsetX +
        "px");
  }
  onMouseMove(e) {
    if (!e.buttons) return (this._dragState = void 0), !1;
    if (this._dragState) {
      this._offsetX =
        this._dragState.offsetX + e.clientX - this._dragState.dragStart.x;
      const n =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 -
        10;
      return (
        (this._offsetX = Math.max(-n, Math.min(n, this._offsetX))),
        this._updateVisualPosition(),
        this._recorder.setOverlayState({ offsetX: this._offsetX }),
        Me(e),
        !0
      );
    }
    return !1;
  }
  onMouseUp(e) {
    return this._dragState ? (Me(e), !0) : !1;
  }
  onClick(e) {
    return this._dragState ? ((this._dragState = void 0), Me(e), !0) : !1;
  }
  onDblClick(e) {
    return !1;
  }
}
class fE {
  constructor(e) {
    (this._listeners = []),
      (this._lastHighlightedSelector = void 0),
      (this._lastHighlightedAriaTemplateJSON = "undefined"),
      (this.state = {
        mode: "none",
        testIdAttributeName: "data-testid",
        language: "javascript",
        overlay: { offsetX: 0 },
      }),
      (this._delegate = {}),
      (this.document = e.document),
      (this.injectedScript = e),
      (this.highlight = e.createHighlight()),
      (this._tools = {
        none: new Cm(),
        standby: new Cm(),
        inspecting: new Tu(this, !1),
        recording: new cE(this),
        "recording-inspecting": new Tu(this, !1),
        assertingText: new Nu(this, "text"),
        assertingVisibility: new Tu(this, !0),
        assertingValue: new Nu(this, "value"),
        assertingSnapshot: new Nu(this, "snapshot"),
      }),
      (this._currentTool = this._tools.none),
      e.window.top === e.window &&
        ((this.overlay = new uE(this)), this.overlay.setUIState(this.state)),
      (this._stylesheet = new e.window.CSSStyleSheet()),
      this._stylesheet.replaceSync(`
      body[data-pw-cursor=pointer] *, body[data-pw-cursor=pointer] *::after { cursor: pointer !important; }
      body[data-pw-cursor=text] *, body[data-pw-cursor=text] *::after { cursor: text !important; }
    `),
      this.installListeners(),
      e.utils.cacheNormalizedWhitespaces(),
      e.isUnderTest && console.error("Recorder script ready for test");
  }
  installListeners() {
    var s;
    Jy(this._listeners),
      (this._listeners = [
        je(this.document, "click", (o) => this._onClick(o), !0),
        je(this.document, "auxclick", (o) => this._onClick(o), !0),
        je(this.document, "dblclick", (o) => this._onDblClick(o), !0),
        je(this.document, "contextmenu", (o) => this._onContextMenu(o), !0),
        je(this.document, "dragstart", (o) => this._onDragStart(o), !0),
        je(this.document, "input", (o) => this._onInput(o), !0),
        je(this.document, "keydown", (o) => this._onKeyDown(o), !0),
        je(this.document, "keyup", (o) => this._onKeyUp(o), !0),
        je(this.document, "pointerdown", (o) => this._onPointerDown(o), !0),
        je(this.document, "pointerup", (o) => this._onPointerUp(o), !0),
        je(this.document, "mousedown", (o) => this._onMouseDown(o), !0),
        je(this.document, "mouseup", (o) => this._onMouseUp(o), !0),
        je(this.document, "mousemove", (o) => this._onMouseMove(o), !0),
        je(this.document, "mouseleave", (o) => this._onMouseLeave(o), !0),
        je(this.document, "mouseenter", (o) => this._onMouseEnter(o), !0),
        je(this.document, "focus", (o) => this._onFocus(o), !0),
        je(this.document, "scroll", (o) => this._onScroll(o), !0),
      ]),
      this.highlight.install();
    let e;
    const n = () => {
      this.highlight.install(),
        (e = this.injectedScript.builtinSetTimeout(n, 500));
    };
    (e = this.injectedScript.builtinSetTimeout(n, 500)),
      this._listeners.push(() => this.injectedScript.builtinClearTimeout(e)),
      this.highlight.appendChild(Yy(this.document, aE)),
      (s = this.overlay) == null || s.install(),
      this.document.adoptedStyleSheets.push(this._stylesheet);
  }
  _switchCurrentTool() {
    var n, s, o;
    const e = this._tools[this.state.mode];
    e !== this._currentTool &&
      ((s = (n = this._currentTool).cleanup) == null || s.call(n),
      this.clearHighlight(),
      (this._currentTool = e),
      (o = this.injectedScript.document.body) == null ||
        o.setAttribute("data-pw-cursor", e.cursor()));
  }
  setUIState(e, n) {
    var l;
    (this._delegate = n),
      (e.actionPoint &&
        this.state.actionPoint &&
        e.actionPoint.x === this.state.actionPoint.x &&
        e.actionPoint.y === this.state.actionPoint.y) ||
        (!e.actionPoint && !this.state.actionPoint) ||
        (e.actionPoint
          ? this.highlight.showActionPoint(e.actionPoint.x, e.actionPoint.y)
          : this.highlight.hideActionPoint()),
      (this.state = e),
      this.highlight.setLanguage(e.language),
      this._switchCurrentTool(),
      (l = this.overlay) == null || l.setUIState(e);
    let s = "noop";
    if (e.actionSelector !== this._lastHighlightedSelector) {
      const c = e.actionSelector
        ? pE(this.injectedScript, e.actionSelector, this.document)
        : null;
      (s = c != null && c.elements.length ? c : "clear"),
        (this._lastHighlightedSelector =
          c != null && c.elements.length ? e.actionSelector : void 0);
    }
    const o = JSON.stringify(e.ariaTemplate);
    if (this._lastHighlightedAriaTemplateJSON !== o) {
      const c = e.ariaTemplate
        ? this.injectedScript.getAllByAria(this.document, e.ariaTemplate)
        : [];
      c.length
        ? ((s = { elements: c }), (this._lastHighlightedAriaTemplateJSON = o))
        : (this._lastHighlightedSelector || (s = "clear"),
          (this._lastHighlightedAriaTemplateJSON = "undefined"));
    }
    s === "clear"
      ? this.clearHighlight()
      : s !== "noop" && this._updateHighlight(s, !1);
  }
  clearHighlight() {
    this.updateHighlight(null, !1);
  }
  _onClick(e) {
    var n, s, o;
    e.isTrusted &&
      (((n = this.overlay) != null && n.onClick(e)) ||
        this._ignoreOverlayEvent(e) ||
        (o = (s = this._currentTool).onClick) == null ||
        o.call(s, e));
  }
  _onDblClick(e) {
    var n, s, o;
    e.isTrusted &&
      (((n = this.overlay) != null && n.onDblClick(e)) ||
        this._ignoreOverlayEvent(e) ||
        (o = (s = this._currentTool).onDblClick) == null ||
        o.call(s, e));
  }
  _onContextMenu(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onContextMenu) == null ||
        s.call(n, e));
  }
  _onDragStart(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onDragStart) == null ||
        s.call(n, e));
  }
  _onPointerDown(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onPointerDown) == null ||
        s.call(n, e));
  }
  _onPointerUp(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onPointerUp) == null ||
        s.call(n, e));
  }
  _onMouseDown(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onMouseDown) == null ||
        s.call(n, e));
  }
  _onMouseUp(e) {
    var n, s, o;
    e.isTrusted &&
      (((n = this.overlay) != null && n.onMouseUp(e)) ||
        this._ignoreOverlayEvent(e) ||
        (o = (s = this._currentTool).onMouseUp) == null ||
        o.call(s, e));
  }
  _onMouseMove(e) {
    var n, s, o;
    e.isTrusted &&
      (((n = this.overlay) != null && n.onMouseMove(e)) ||
        this._ignoreOverlayEvent(e) ||
        (o = (s = this._currentTool).onMouseMove) == null ||
        o.call(s, e));
  }
  _onMouseEnter(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onMouseEnter) == null ||
        s.call(n, e));
  }
  _onMouseLeave(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onMouseLeave) == null ||
        s.call(n, e));
  }
  _onFocus(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onFocus) == null ||
        s.call(n, e));
  }
  _onScroll(e) {
    var n, s;
    e.isTrusted &&
      ((this._lastHighlightedSelector = void 0),
      (this._lastHighlightedAriaTemplateJSON = "undefined"),
      this.highlight.hideActionPoint(),
      (s = (n = this._currentTool).onScroll) == null || s.call(n, e));
  }
  _onInput(e) {
    var n, s;
    this._ignoreOverlayEvent(e) ||
      (s = (n = this._currentTool).onInput) == null ||
      s.call(n, e);
  }
  _onKeyDown(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onKeyDown) == null ||
        s.call(n, e));
  }
  _onKeyUp(e) {
    var n, s;
    e.isTrusted &&
      (this._ignoreOverlayEvent(e) ||
        (s = (n = this._currentTool).onKeyUp) == null ||
        s.call(n, e));
  }
  updateHighlight(e, n) {
    (this._lastHighlightedSelector = void 0),
      (this._lastHighlightedAriaTemplateJSON = "undefined"),
      this._updateHighlight(e, n);
  }
  _updateHighlight(e, n) {
    var o, l;
    let s = e == null ? void 0 : e.tooltipText;
    s === void 0 &&
      !(e != null && e.tooltipList) &&
      e != null &&
      e.selector &&
      (s = this.injectedScript.utils.asLocator(
        this.state.language,
        e.selector,
      )),
      this.highlight.updateHighlight((e == null ? void 0 : e.elements) || [], {
        ...e,
        tooltipText: s,
      }),
      n && ((l = (o = this._delegate).highlightUpdated) == null || l.call(o));
  }
  _ignoreOverlayEvent(e) {
    return e
      .composedPath()
      .some((n) => (n.nodeName || "").toLowerCase() === "x-pw-glass");
  }
  deepEventTarget(e) {
    var n;
    for (const s of e.composedPath())
      if (!((n = this.overlay) != null && n.contains(s))) return s;
    return e.composedPath()[0];
  }
  setMode(e) {
    var n, s;
    (s = (n = this._delegate).setMode) == null || s.call(n, e);
  }
  async performAction(e) {
    var n, s;
    await ((s = (n = this._delegate).performAction) == null
      ? void 0
      : s.call(n, e).catch(() => {}));
  }
  recordAction(e) {
    var n, s;
    (s = (n = this._delegate).recordAction) == null || s.call(n, e);
  }
  setOverlayState(e) {
    var n, s;
    (s = (n = this._delegate).setOverlayState) == null || s.call(n, e);
  }
  elementPicked(e, n) {
    var o, l;
    const s = this.injectedScript.ariaSnapshot(n.elements[0]);
    (l = (o = this._delegate).elementPicked) == null ||
      l.call(o, { selector: e, ariaSnapshot: s });
  }
}
class dE {
  constructor(e) {
    (this._dialogElement = null), (this._recorder = e);
  }
  isShowing() {
    return !!this._dialogElement;
  }
  show(e) {
    const n = this._recorder.document.createElement("x-pw-tool-item");
    (n.title = "Accept"),
      n.classList.add("accept"),
      n.appendChild(this._recorder.document.createElement("x-div")),
      n.addEventListener("click", () => e.onCommit());
    const s = this._recorder.document.createElement("x-pw-tool-item");
    (s.title = "Close"),
      s.classList.add("cancel"),
      s.appendChild(this._recorder.document.createElement("x-div")),
      s.addEventListener("click", () => {
        var u;
        this.close(), (u = e.onCancel) == null || u.call(e);
      }),
      (this._dialogElement =
        this._recorder.document.createElement("x-pw-dialog")),
      (this._keyboardListener = (u) => {
        var d;
        if (u.key === "Escape") {
          this.close(), (d = e.onCancel) == null || d.call(e);
          return;
        }
        if (u.key === "Enter" && (u.ctrlKey || u.metaKey)) {
          this._dialogElement && e.onCommit();
          return;
        }
      }),
      this._recorder.document.addEventListener(
        "keydown",
        this._keyboardListener,
        !0,
      );
    const o = this._recorder.document.createElement("x-pw-tools-list"),
      l = this._recorder.document.createElement("label");
    (l.textContent = e.label),
      o.appendChild(l),
      o.appendChild(this._recorder.document.createElement("x-spacer")),
      o.appendChild(n),
      o.appendChild(s),
      this._dialogElement.appendChild(o);
    const c = this._recorder.document.createElement("x-pw-dialog-body");
    return (
      c.appendChild(e.body),
      this._dialogElement.appendChild(c),
      this._recorder.highlight.appendChild(this._dialogElement),
      this._dialogElement
    );
  }
  moveTo(e, n) {
    this._dialogElement &&
      ((this._dialogElement.style.top = e + "px"),
      (this._dialogElement.style.left = n + "px"));
  }
  close() {
    this._dialogElement &&
      (this._dialogElement.remove(),
      this._recorder.document.removeEventListener(
        "keydown",
        this._keyboardListener,
      ),
      (this._dialogElement = null));
  }
}
function hE(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Cu(t) {
  return (
    (t.altKey ? 1 : 0) |
    (t.ctrlKey ? 2 : 0) |
    (t.metaKey ? 4 : 0) |
    (t.shiftKey ? 8 : 0)
  );
}
function Am(t) {
  switch (t.which) {
    case 1:
      return "left";
    case 2:
      return "middle";
    case 3:
      return "right";
  }
  return "left";
}
function Au(t) {
  if (t.target.nodeName === "CANVAS") return { x: t.offsetX, y: t.offsetY };
}
function Me(t) {
  t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
}
function Lu(t) {
  if (!t || t.nodeName !== "INPUT") return null;
  const e = t;
  return ["checkbox", "radio"].includes(e.type) ? e : null;
}
function Iu(t) {
  return !t || t.nodeName !== "INPUT" ? !1 : t.type.toLowerCase() === "range";
}
function je(t, e, n, s) {
  return (
    t.addEventListener(e, n, s),
    () => {
      t.removeEventListener(e, n, s);
    }
  );
}
function Jy(t) {
  for (const e of t) e();
  t.splice(0, t.length);
}
function pE(t, e, n) {
  try {
    const s = t.parseSelector(e);
    return { selector: e, elements: t.querySelectorAll(s, n) };
  } catch {
    return { selector: e, elements: [] };
  }
}
function Yy(t, { tagName: e, attrs: n, children: s }) {
  const o = t.createElementNS("http://www.w3.org/2000/svg", e);
  if (n) for (const [l, c] of Object.entries(n)) o.setAttribute(l, c);
  if (s) for (const l of s) o.appendChild(Yy(t, l));
  return o;
}
function Af(t, e, n) {
  return `internal:attr=[${t}=${ht(e, (n == null ? void 0 : n.exact) || !1)}]`;
}
function mE(t, e) {
  return `internal:testid=[${t}=${ht(e, !0)}]`;
}
function gE(t, e) {
  return "internal:label=" + Tt(t, !!(e != null && e.exact));
}
function yE(t, e) {
  return Af("alt", t, e);
}
function vE(t, e) {
  return Af("title", t, e);
}
function wE(t, e) {
  return Af("placeholder", t, e);
}
function xE(t, e) {
  return "internal:text=" + Tt(t, !!(e != null && e.exact));
}
function SE(t, e = {}) {
  const n = [];
  return (
    e.checked !== void 0 && n.push(["checked", String(e.checked)]),
    e.disabled !== void 0 && n.push(["disabled", String(e.disabled)]),
    e.selected !== void 0 && n.push(["selected", String(e.selected)]),
    e.expanded !== void 0 && n.push(["expanded", String(e.expanded)]),
    e.includeHidden !== void 0 &&
      n.push(["include-hidden", String(e.includeHidden)]),
    e.level !== void 0 && n.push(["level", String(e.level)]),
    e.name !== void 0 && n.push(["name", ht(e.name, !!e.exact)]),
    e.pressed !== void 0 && n.push(["pressed", String(e.pressed)]),
    `internal:role=${t}${n.map(([s, o]) => `[${s}=${o}]`).join("")}`
  );
}
const Oi = Symbol("selector"),
  _E = class Fi {
    constructor(e, n, s) {
      if (
        (s != null &&
          s.hasText &&
          (n += ` >> internal:has-text=${Tt(s.hasText, !1)}`),
        s != null &&
          s.hasNotText &&
          (n += ` >> internal:has-not-text=${Tt(s.hasNotText, !1)}`),
        s != null &&
          s.has &&
          (n += " >> internal:has=" + JSON.stringify(s.has[Oi])),
        s != null &&
          s.hasNot &&
          (n += " >> internal:has-not=" + JSON.stringify(s.hasNot[Oi])),
        (s == null ? void 0 : s.visible) !== void 0 &&
          (n += ` >> visible=${s.visible ? "true" : "false"}`),
        (this[Oi] = n),
        n)
      ) {
        const c = e.parseSelector(n);
        (this.element = e.querySelector(c, e.document, !1)),
          (this.elements = e.querySelectorAll(c, e.document));
      }
      const o = n,
        l = this;
      (l.locator = (c, u) => new Fi(e, o ? o + " >> " + c : c, u)),
        (l.getByTestId = (c) =>
          l.locator(
            mE(e.testIdAttributeNameForStrictErrorAndConsoleCodegen(), c),
          )),
        (l.getByAltText = (c, u) => l.locator(yE(c, u))),
        (l.getByLabel = (c, u) => l.locator(gE(c, u))),
        (l.getByPlaceholder = (c, u) => l.locator(wE(c, u))),
        (l.getByText = (c, u) => l.locator(xE(c, u))),
        (l.getByTitle = (c, u) => l.locator(vE(c, u))),
        (l.getByRole = (c, u = {}) => l.locator(SE(c, u))),
        (l.filter = (c) => new Fi(e, n, c)),
        (l.first = () => l.locator("nth=0")),
        (l.last = () => l.locator("nth=-1")),
        (l.nth = (c) => l.locator(`nth=${c}`)),
        (l.and = (c) =>
          new Fi(e, o + " >> internal:and=" + JSON.stringify(c[Oi]))),
        (l.or = (c) =>
          new Fi(e, o + " >> internal:or=" + JSON.stringify(c[Oi])));
    }
  };
let kE = _E;
class EE {
  constructor(e) {
    (this._injectedScript = e),
      !this._injectedScript.window.playwright &&
        ((this._injectedScript.window.playwright = {
          $: (n, s) => this._querySelector(n, !!s),
          $$: (n) => this._querySelectorAll(n),
          inspect: (n) => this._inspect(n),
          selector: (n) => this._selector(n),
          generateLocator: (n, s) => this._generateLocator(n, s),
          ariaSnapshot: (n, s) =>
            this._injectedScript.ariaSnapshot(
              n || this._injectedScript.document.body,
              s,
            ),
          resume: () => this._resume(),
          ...new kE(e, ""),
        }),
        delete this._injectedScript.window.playwright.filter,
        delete this._injectedScript.window.playwright.first,
        delete this._injectedScript.window.playwright.last,
        delete this._injectedScript.window.playwright.nth,
        delete this._injectedScript.window.playwright.and,
        delete this._injectedScript.window.playwright.or);
  }
  _querySelector(e, n) {
    if (typeof e != "string")
      throw new Error("Usage: playwright.query('Playwright >> selector').");
    const s = this._injectedScript.parseSelector(e);
    return this._injectedScript.querySelector(
      s,
      this._injectedScript.document,
      n,
    );
  }
  _querySelectorAll(e) {
    if (typeof e != "string")
      throw new Error("Usage: playwright.$$('Playwright >> selector').");
    const n = this._injectedScript.parseSelector(e);
    return this._injectedScript.querySelectorAll(
      n,
      this._injectedScript.document,
    );
  }
  _inspect(e) {
    if (typeof e != "string")
      throw new Error("Usage: playwright.inspect('Playwright >> selector').");
    this._injectedScript.window.inspect(this._querySelector(e, !1));
  }
  _selector(e) {
    if (!(e instanceof Element))
      throw new Error("Usage: playwright.selector(element).");
    return this._injectedScript.generateSelectorSimple(e);
  }
  _generateLocator(e, n) {
    if (!(e instanceof Element))
      throw new Error("Usage: playwright.locator(element).");
    const s = this._injectedScript.generateSelectorSimple(e);
    return nr(n || "javascript", s);
  }
  _resume() {
    this._injectedScript.window.__pw_resume().catch(() => {});
  }
}
function bE(t, e) {
  t = t
    .replace(/AriaRole\s*\.\s*([\w]+)/g, (l, c) => c.toLowerCase())
    .replace(
      /(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g,
      (l, c, u) => `${c}(${u.toLowerCase()}`,
    );
  const n = [];
  let s = "";
  for (let l = 0; l < t.length; ++l) {
    const c = t[l];
    if (c !== '"' && c !== "'" && c !== "`" && c !== "/") {
      s += c;
      continue;
    }
    const u = t[l - 1] === "r" || t[l] === "/";
    ++l;
    let d = "";
    for (; l < t.length; ) {
      if (t[l] === "\\") {
        u
          ? (t[l + 1] !== c && (d += t[l]), ++l, (d += t[l]))
          : (++l,
            t[l] === "n"
              ? (d += `
`)
              : t[l] === "r"
                ? (d += "\r")
                : t[l] === "t"
                  ? (d += "	")
                  : (d += t[l])),
          ++l;
        continue;
      }
      if (t[l] !== c) {
        d += t[l++];
        continue;
      }
      break;
    }
    n.push({ quote: c, text: d }),
      (s += (c === "/" ? "r" : "") + "$" + n.length);
  }
  s = s
    .toLowerCase()
    .replace(/get_by_alt_text/g, "getbyalttext")
    .replace(/get_by_test_id/g, "getbytestid")
    .replace(/get_by_([\w]+)/g, "getby$1")
    .replace(/has_not_text/g, "hasnottext")
    .replace(/has_text/g, "hastext")
    .replace(/has_not/g, "hasnot")
    .replace(/frame_locator/g, "framelocator")
    .replace(/content_frame/g, "contentframe")
    .replace(/[{}\s]/g, "")
    .replace(/new\(\)/g, "")
    .replace(/new[\w]+\.[\w]+options\(\)/g, "")
    .replace(/\.set/g, ",set")
    .replace(/\.or_\(/g, "or(")
    .replace(/\.and_\(/g, "and(")
    .replace(/:/g, "=")
    .replace(/,re\.ignorecase/g, "i")
    .replace(/,pattern.case_insensitive/g, "i")
    .replace(/,regexoptions.ignorecase/g, "i")
    .replace(/re.compile\(([^)]+)\)/g, "$1")
    .replace(/pattern.compile\(([^)]+)\)/g, "r$1")
    .replace(/newregex\(([^)]+)\)/g, "r$1")
    .replace(/string=/g, "=")
    .replace(/regex=/g, "=")
    .replace(/,,/g, ",")
    .replace(/,\)/g, ")");
  const o = n.map((l) => l.quote).filter((l) => "'\"`".includes(l))[0];
  return { selector: Zy(s, n, e), preferredQuote: o };
}
function Lm(t) {
  return [...t.matchAll(/\$\d+/g)].length;
}
function Im(t, e) {
  return t.replace(/\$(\d+)/g, (n, s) => `$${s - e}`);
}
function Zy(t, e, n) {
  for (;;) {
    const o = t.match(/filter\(,?(has=|hasnot=|sethas\(|sethasnot\()/);
    if (!o) break;
    const l = o.index + o[0].length;
    let c = 0,
      u = l;
    for (
      ;
      u < t.length && (t[u] === "(" ? c++ : t[u] === ")" && c--, !(c < 0));
      u++
    );
    let d = t.substring(0, l),
      p = 0;
    ["sethas(", "sethasnot("].includes(o[1]) &&
      ((p = 1),
      (d = d.replace(/sethas\($/, "has=").replace(/sethasnot\($/, "hasnot=")));
    const y = Lm(t.substring(0, l)),
      v = Im(t.substring(l, u), y),
      m = Lm(v),
      w = e.slice(y, y + m),
      _ = JSON.stringify(Zy(v, w, n));
    t = d.replace(/=$/, "2=") + `$${y + 1}` + Im(t.substring(u + p), m - 1);
    const S = e.slice(0, y),
      E = e.slice(y + m);
    e = S.concat([{ quote: '"', text: _ }]).concat(E);
  }
  t = t
    .replace(
      /\,set([\w]+)\(([^)]+)\)/g,
      (o, l, c) => "," + l.toLowerCase() + "=" + c.toLowerCase(),
    )
    .replace(/framelocator\(([^)]+)\)/g, "$1.internal:control=enter-frame")
    .replace(/contentframe(\(\))?/g, "internal:control=enter-frame")
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      "locator($1).internal:has-text=$2",
    )
    .replace(
      /locator\(([^)]+),hasnottext=([^),]+)\)/g,
      "locator($1).internal:has-not-text=$2",
    )
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      "locator($1).internal:has-text=$2",
    )
    .replace(/locator\(([^)]+)\)/g, "$1")
    .replace(/getbyrole\(([^)]+)\)/g, "internal:role=$1")
    .replace(/getbytext\(([^)]+)\)/g, "internal:text=$1")
    .replace(/getbylabel\(([^)]+)\)/g, "internal:label=$1")
    .replace(/getbytestid\(([^)]+)\)/g, `internal:testid=[${n}=$1]`)
    .replace(
      /getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g,
      "internal:attr=[$1=$2]",
    )
    .replace(/first(\(\))?/g, "nth=0")
    .replace(/last(\(\))?/g, "nth=-1")
    .replace(/nth\(([^)]+)\)/g, "nth=$1")
    .replace(/filter\(,?visible=true\)/g, "visible=true")
    .replace(/filter\(,?visible=false\)/g, "visible=false")
    .replace(/filter\(,?hastext=([^)]+)\)/g, "internal:has-text=$1")
    .replace(/filter\(,?hasnottext=([^)]+)\)/g, "internal:has-not-text=$1")
    .replace(/filter\(,?has2=([^)]+)\)/g, "internal:has=$1")
    .replace(/filter\(,?hasnot2=([^)]+)\)/g, "internal:has-not=$1")
    .replace(/,exact=false/g, "")
    .replace(/,exact=true/g, "s")
    .replace(/,includehidden=/g, ",include-hidden=")
    .replace(/\,/g, "][");
  const s = t.split(".");
  for (let o = 0; o < s.length - 1; o++)
    if (
      s[o] === "internal:control=enter-frame" &&
      s[o + 1].startsWith("nth=")
    ) {
      const [l] = s.splice(o, 1);
      s.splice(o + 1, 0, l);
    }
  return s
    .map((o) =>
      !o.startsWith("internal:") || o === "internal:control"
        ? o.replace(/\$(\d+)/g, (l, c) => e[+c - 1].text)
        : ((o = o.includes("[") ? o.replace(/\]/, "") + "]" : o),
          (o = o
            .replace(/(?:r)\$(\d+)(i)?/g, (l, c, u) => {
              const d = e[+c - 1];
              return o.startsWith("internal:attr") ||
                o.startsWith("internal:testid") ||
                o.startsWith("internal:role")
                ? ht(new RegExp(d.text), !1) + (u || "")
                : Tt(new RegExp(d.text, u), !1);
            })
            .replace(/\$(\d+)(i|s)?/g, (l, c, u) => {
              const d = e[+c - 1];
              return o.startsWith("internal:has=") ||
                o.startsWith("internal:has-not=")
                ? d.text
                : o.startsWith("internal:testid")
                  ? ht(d.text, !0)
                  : o.startsWith("internal:attr") ||
                      o.startsWith("internal:role")
                    ? ht(d.text, u === "s")
                    : Tt(d.text, u === "s");
            })),
          o),
    )
    .join(" >> ");
}
function TE(t, e, n) {
  try {
    return NE(t, e, n);
  } catch {
    return "";
  }
}
function NE(t, e, n) {
  try {
    return Yl(e), e;
  } catch {}
  const { selector: s, preferredQuote: o } = bE(e, n),
    l = xg(t, s, void 0, void 0, o),
    c = jm(t, e);
  return l.some((u) => jm(t, u) === c) ? s : "";
}
function jm(t, e) {
  return (
    (e = e.replace(/\s/g, "")),
    t === "javascript" && (e = e.replace(/\\?["`]/g, "'").replace(/,{}/g, "")),
    e
  );
}
const CE = ({ url: t }) =>
    x.jsxs("div", {
      className: "browser-frame-header",
      children: [
        x.jsxs("div", {
          style: { whiteSpace: "nowrap" },
          children: [
            x.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(242, 95, 88)" },
            }),
            x.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(251, 190, 60)" },
            }),
            x.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(88, 203, 66)" },
            }),
          ],
        }),
        x.jsx("div", {
          className: "browser-frame-address-bar",
          title: t || "about:blank",
          children: t || "about:blank",
        }),
        x.jsx("div", {
          style: { marginLeft: "auto" },
          children: x.jsxs("div", {
            children: [
              x.jsx("span", { className: "browser-frame-menu-bar" }),
              x.jsx("span", { className: "browser-frame-menu-bar" }),
              x.jsx("span", { className: "browser-frame-menu-bar" }),
            ],
          }),
        }),
      ],
    }),
  Lf = Symbol.for("yaml.alias"),
  Yu = Symbol.for("yaml.document"),
  rr = Symbol.for("yaml.map"),
  ev = Symbol.for("yaml.pair"),
  hn = Symbol.for("yaml.scalar"),
  Os = Symbol.for("yaml.seq"),
  Wt = Symbol.for("yaml.node.type"),
  Mr = (t) => !!t && typeof t == "object" && t[Wt] === Lf,
  Or = (t) => !!t && typeof t == "object" && t[Wt] === Yu,
  $s = (t) => !!t && typeof t == "object" && t[Wt] === rr,
  Oe = (t) => !!t && typeof t == "object" && t[Wt] === ev,
  be = (t) => !!t && typeof t == "object" && t[Wt] === hn,
  Ps = (t) => !!t && typeof t == "object" && t[Wt] === Os;
function Re(t) {
  if (t && typeof t == "object")
    switch (t[Wt]) {
      case rr:
      case Os:
        return !0;
    }
  return !1;
}
function De(t) {
  if (t && typeof t == "object")
    switch (t[Wt]) {
      case Lf:
      case rr:
      case hn:
      case Os:
        return !0;
    }
  return !1;
}
const AE = (t) => (be(t) || Re(t)) && !!t.anchor,
  Nt = Symbol("break visit"),
  tv = Symbol("skip children"),
  dn = Symbol("remove node");
function sr(t, e) {
  const n = nv(e);
  Or(t)
    ? vs(null, t.contents, n, Object.freeze([t])) === dn && (t.contents = null)
    : vs(null, t, n, Object.freeze([]));
}
sr.BREAK = Nt;
sr.SKIP = tv;
sr.REMOVE = dn;
function vs(t, e, n, s) {
  const o = rv(t, e, n, s);
  if (De(o) || Oe(o)) return sv(t, s, o), vs(t, o, n, s);
  if (typeof o != "symbol") {
    if (Re(e)) {
      s = Object.freeze(s.concat(e));
      for (let l = 0; l < e.items.length; ++l) {
        const c = vs(l, e.items[l], n, s);
        if (typeof c == "number") l = c - 1;
        else {
          if (c === Nt) return Nt;
          c === dn && (e.items.splice(l, 1), (l -= 1));
        }
      }
    } else if (Oe(e)) {
      s = Object.freeze(s.concat(e));
      const l = vs("key", e.key, n, s);
      if (l === Nt) return Nt;
      l === dn && (e.key = null);
      const c = vs("value", e.value, n, s);
      if (c === Nt) return Nt;
      c === dn && (e.value = null);
    }
  }
  return o;
}
async function oa(t, e) {
  const n = nv(e);
  Or(t)
    ? (await ws(null, t.contents, n, Object.freeze([t]))) === dn &&
      (t.contents = null)
    : await ws(null, t, n, Object.freeze([]));
}
oa.BREAK = Nt;
oa.SKIP = tv;
oa.REMOVE = dn;
async function ws(t, e, n, s) {
  const o = await rv(t, e, n, s);
  if (De(o) || Oe(o)) return sv(t, s, o), ws(t, o, n, s);
  if (typeof o != "symbol") {
    if (Re(e)) {
      s = Object.freeze(s.concat(e));
      for (let l = 0; l < e.items.length; ++l) {
        const c = await ws(l, e.items[l], n, s);
        if (typeof c == "number") l = c - 1;
        else {
          if (c === Nt) return Nt;
          c === dn && (e.items.splice(l, 1), (l -= 1));
        }
      }
    } else if (Oe(e)) {
      s = Object.freeze(s.concat(e));
      const l = await ws("key", e.key, n, s);
      if (l === Nt) return Nt;
      l === dn && (e.key = null);
      const c = await ws("value", e.value, n, s);
      if (c === Nt) return Nt;
      c === dn && (e.value = null);
    }
  }
  return o;
}
function nv(t) {
  return typeof t == "object" && (t.Collection || t.Node || t.Value)
    ? Object.assign(
        { Alias: t.Node, Map: t.Node, Scalar: t.Node, Seq: t.Node },
        t.Value && { Map: t.Value, Scalar: t.Value, Seq: t.Value },
        t.Collection && { Map: t.Collection, Seq: t.Collection },
        t,
      )
    : t;
}
function rv(t, e, n, s) {
  var o, l, c, u, d;
  if (typeof n == "function") return n(t, e, s);
  if ($s(e)) return (o = n.Map) == null ? void 0 : o.call(n, t, e, s);
  if (Ps(e)) return (l = n.Seq) == null ? void 0 : l.call(n, t, e, s);
  if (Oe(e)) return (c = n.Pair) == null ? void 0 : c.call(n, t, e, s);
  if (be(e)) return (u = n.Scalar) == null ? void 0 : u.call(n, t, e, s);
  if (Mr(e)) return (d = n.Alias) == null ? void 0 : d.call(n, t, e, s);
}
function sv(t, e, n) {
  const s = e[e.length - 1];
  if (Re(s)) s.items[t] = n;
  else if (Oe(s)) t === "key" ? (s.key = n) : (s.value = n);
  else if (Or(s)) s.contents = n;
  else {
    const o = Mr(s) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${o} parent`);
  }
}
const LE = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D",
  },
  IE = (t) => t.replace(/[!,[\]{}]/g, (e) => LE[e]);
class dt {
  constructor(e, n) {
    (this.docStart = null),
      (this.docEnd = !1),
      (this.yaml = Object.assign({}, dt.defaultYaml, e)),
      (this.tags = Object.assign({}, dt.defaultTags, n));
  }
  clone() {
    const e = new dt(this.yaml, this.tags);
    return (e.docStart = this.docStart), e;
  }
  atDocument() {
    const e = new dt(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = !0;
        break;
      case "1.2":
        (this.atNextDocument = !1),
          (this.yaml = { explicit: dt.defaultYaml.explicit, version: "1.2" }),
          (this.tags = Object.assign({}, dt.defaultTags));
        break;
    }
    return e;
  }
  add(e, n) {
    this.atNextDocument &&
      ((this.yaml = { explicit: dt.defaultYaml.explicit, version: "1.1" }),
      (this.tags = Object.assign({}, dt.defaultTags)),
      (this.atNextDocument = !1));
    const s = e.trim().split(/[ \t]+/),
      o = s.shift();
    switch (o) {
      case "%TAG": {
        if (
          s.length !== 2 &&
          (n(0, "%TAG directive should contain exactly two parts"),
          s.length < 2)
        )
          return !1;
        const [l, c] = s;
        return (this.tags[l] = c), !0;
      }
      case "%YAML": {
        if (((this.yaml.explicit = !0), s.length !== 1))
          return n(0, "%YAML directive should contain exactly one part"), !1;
        const [l] = s;
        if (l === "1.1" || l === "1.2") return (this.yaml.version = l), !0;
        {
          const c = /^\d+\.\d+$/.test(l);
          return n(6, `Unsupported YAML version ${l}`, c), !1;
        }
      }
      default:
        return n(0, `Unknown directive ${o}`, !0), !1;
    }
  }
  tagName(e, n) {
    if (e === "!") return "!";
    if (e[0] !== "!") return n(`Not a valid tag: ${e}`), null;
    if (e[1] === "<") {
      const c = e.slice(2, -1);
      return c === "!" || c === "!!"
        ? (n(`Verbatim tags aren't resolved, so ${e} is invalid.`), null)
        : (e[e.length - 1] !== ">" && n("Verbatim tags must end with a >"), c);
    }
    const [, s, o] = e.match(/^(.*!)([^!]*)$/s);
    o || n(`The ${e} tag has no suffix`);
    const l = this.tags[s];
    if (l)
      try {
        return l + decodeURIComponent(o);
      } catch (c) {
        return n(String(c)), null;
      }
    return s === "!" ? e : (n(`Could not resolve tag: ${e}`), null);
  }
  tagString(e) {
    for (const [n, s] of Object.entries(this.tags))
      if (e.startsWith(s)) return n + IE(e.substring(s.length));
    return e[0] === "!" ? e : `!<${e}>`;
  }
  toString(e) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [],
      s = Object.entries(this.tags);
    let o;
    if (e && s.length > 0 && De(e.contents)) {
      const l = {};
      sr(e.contents, (c, u) => {
        De(u) && u.tag && (l[u.tag] = !0);
      }),
        (o = Object.keys(l));
    } else o = [];
    for (const [l, c] of s)
      (l === "!!" && c === "tag:yaml.org,2002:") ||
        ((!e || o.some((u) => u.startsWith(c))) && n.push(`%TAG ${l} ${c}`));
    return n.join(`
`);
  }
}
dt.defaultYaml = { explicit: !1, version: "1.2" };
dt.defaultTags = { "!!": "tag:yaml.org,2002:" };
function iv(t) {
  if (/[\x00-\x19\s,[\]{}]/.test(t)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;
    throw new Error(n);
  }
  return !0;
}
function ov(t) {
  const e = new Set();
  return (
    sr(t, {
      Value(n, s) {
        s.anchor && e.add(s.anchor);
      },
    }),
    e
  );
}
function lv(t, e) {
  for (let n = 1; ; ++n) {
    const s = `${t}${n}`;
    if (!e.has(s)) return s;
  }
}
function jE(t, e) {
  const n = [],
    s = new Map();
  let o = null;
  return {
    onAnchor: (l) => {
      n.push(l), o || (o = ov(t));
      const c = lv(e, o);
      return o.add(c), c;
    },
    setAnchors: () => {
      for (const l of n) {
        const c = s.get(l);
        if (typeof c == "object" && c.anchor && (be(c.node) || Re(c.node)))
          c.node.anchor = c.anchor;
        else {
          const u = new Error(
            "Failed to resolve repeated object (this should not happen)",
          );
          throw ((u.source = l), u);
        }
      }
    },
    sourceObjects: s,
  };
}
function xs(t, e, n, s) {
  if (s && typeof s == "object")
    if (Array.isArray(s))
      for (let o = 0, l = s.length; o < l; ++o) {
        const c = s[o],
          u = xs(t, s, String(o), c);
        u === void 0 ? delete s[o] : u !== c && (s[o] = u);
      }
    else if (s instanceof Map)
      for (const o of Array.from(s.keys())) {
        const l = s.get(o),
          c = xs(t, s, o, l);
        c === void 0 ? s.delete(o) : c !== l && s.set(o, c);
      }
    else if (s instanceof Set)
      for (const o of Array.from(s)) {
        const l = xs(t, s, o, o);
        l === void 0 ? s.delete(o) : l !== o && (s.delete(o), s.add(l));
      }
    else
      for (const [o, l] of Object.entries(s)) {
        const c = xs(t, s, o, l);
        c === void 0 ? delete s[o] : c !== l && (s[o] = c);
      }
  return t.call(e, n, s);
}
function qt(t, e, n) {
  if (Array.isArray(t)) return t.map((s, o) => qt(s, String(o), n));
  if (t && typeof t.toJSON == "function") {
    if (!n || !AE(t)) return t.toJSON(e, n);
    const s = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(t, s),
      (n.onCreate = (l) => {
        (s.res = l), delete n.onCreate;
      });
    const o = t.toJSON(e, n);
    return n.onCreate && n.onCreate(o), o;
  }
  return typeof t == "bigint" && !(n != null && n.keep) ? Number(t) : t;
}
class If {
  constructor(e) {
    Object.defineProperty(this, Wt, { value: e });
  }
  clone() {
    const e = Object.create(
      Object.getPrototypeOf(this),
      Object.getOwnPropertyDescriptors(this),
    );
    return this.range && (e.range = this.range.slice()), e;
  }
  toJS(e, { mapAsMap: n, maxAliasCount: s, onAnchor: o, reviver: l } = {}) {
    if (!Or(e)) throw new TypeError("A document argument is required");
    const c = {
        anchors: new Map(),
        doc: e,
        keep: !0,
        mapAsMap: n === !0,
        mapKeyWarned: !1,
        maxAliasCount: typeof s == "number" ? s : 100,
      },
      u = qt(this, "", c);
    if (typeof o == "function")
      for (const { count: d, res: p } of c.anchors.values()) o(p, d);
    return typeof l == "function" ? xs(l, { "": u }, "", u) : u;
  }
}
class la extends If {
  constructor(e) {
    super(Lf),
      (this.source = e),
      Object.defineProperty(this, "tag", {
        set() {
          throw new Error("Alias nodes cannot have tags");
        },
      });
  }
  resolve(e) {
    let n;
    return (
      sr(e, {
        Node: (s, o) => {
          if (o === this) return sr.BREAK;
          o.anchor === this.source && (n = o);
        },
      }),
      n
    );
  }
  toJSON(e, n) {
    if (!n) return { source: this.source };
    const { anchors: s, doc: o, maxAliasCount: l } = n,
      c = this.resolve(o);
    if (!c) {
      const d = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(d);
    }
    let u = s.get(c);
    if ((u || (qt(c, null, n), (u = s.get(c))), !u || u.res === void 0)) {
      const d = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(d);
    }
    if (
      l >= 0 &&
      ((u.count += 1),
      u.aliasCount === 0 && (u.aliasCount = Ol(o, c, s)),
      u.count * u.aliasCount > l)
    ) {
      const d = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(d);
    }
    return u.res;
  }
  toString(e, n, s) {
    const o = `*${this.source}`;
    if (e) {
      if (
        (iv(this.source),
        e.options.verifyAliasOrder && !e.anchors.has(this.source))
      ) {
        const l = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(l);
      }
      if (e.implicitKey) return `${o} `;
    }
    return o;
  }
}
function Ol(t, e, n) {
  if (Mr(e)) {
    const s = e.resolve(t),
      o = n && s && n.get(s);
    return o ? o.count * o.aliasCount : 0;
  } else if (Re(e)) {
    let s = 0;
    for (const o of e.items) {
      const l = Ol(t, o, n);
      l > s && (s = l);
    }
    return s;
  } else if (Oe(e)) {
    const s = Ol(t, e.key, n),
      o = Ol(t, e.value, n);
    return Math.max(s, o);
  }
  return 1;
}
const av = (t) => !t || (typeof t != "function" && typeof t != "object");
class he extends If {
  constructor(e) {
    super(hn), (this.value = e);
  }
  toJSON(e, n) {
    return n != null && n.keep ? this.value : qt(this.value, e, n);
  }
  toString() {
    return String(this.value);
  }
}
he.BLOCK_FOLDED = "BLOCK_FOLDED";
he.BLOCK_LITERAL = "BLOCK_LITERAL";
he.PLAIN = "PLAIN";
he.QUOTE_DOUBLE = "QUOTE_DOUBLE";
he.QUOTE_SINGLE = "QUOTE_SINGLE";
const ME = "tag:yaml.org,2002:";
function OE(t, e, n) {
  if (e) {
    const s = n.filter((l) => l.tag === e),
      o = s.find((l) => !l.format) ?? s[0];
    if (!o) throw new Error(`Tag ${e} not found`);
    return o;
  }
  return n.find((s) => {
    var o;
    return ((o = s.identify) == null ? void 0 : o.call(s, t)) && !s.format;
  });
}
function Ki(t, e, n) {
  var v, m, w;
  if ((Or(t) && (t = t.contents), De(t))) return t;
  if (Oe(t)) {
    const _ =
      (m = (v = n.schema[rr]).createNode) == null
        ? void 0
        : m.call(v, n.schema, null, n);
    return _.items.push(t), _;
  }
  (t instanceof String ||
    t instanceof Number ||
    t instanceof Boolean ||
    (typeof BigInt < "u" && t instanceof BigInt)) &&
    (t = t.valueOf());
  const {
    aliasDuplicateObjects: s,
    onAnchor: o,
    onTagObj: l,
    schema: c,
    sourceObjects: u,
  } = n;
  let d;
  if (s && t && typeof t == "object") {
    if (((d = u.get(t)), d))
      return d.anchor || (d.anchor = o(t)), new la(d.anchor);
    (d = { anchor: null, node: null }), u.set(t, d);
  }
  e != null && e.startsWith("!!") && (e = ME + e.slice(2));
  let p = OE(t, e, c.tags);
  if (!p) {
    if (
      (t && typeof t.toJSON == "function" && (t = t.toJSON()),
      !t || typeof t != "object")
    ) {
      const _ = new he(t);
      return d && (d.node = _), _;
    }
    p = t instanceof Map ? c[rr] : Symbol.iterator in Object(t) ? c[Os] : c[rr];
  }
  l && (l(p), delete n.onTagObj);
  const y =
    p != null && p.createNode
      ? p.createNode(n.schema, t, n)
      : typeof ((w = p == null ? void 0 : p.nodeClass) == null
            ? void 0
            : w.from) == "function"
        ? p.nodeClass.from(n.schema, t, n)
        : new he(t);
  return e ? (y.tag = e) : p.default || (y.tag = p.tag), d && (d.node = y), y;
}
function Ql(t, e, n) {
  let s = n;
  for (let o = e.length - 1; o >= 0; --o) {
    const l = e[o];
    if (typeof l == "number" && Number.isInteger(l) && l >= 0) {
      const c = [];
      (c[l] = s), (s = c);
    } else s = new Map([[l, s]]);
  }
  return Ki(s, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: t,
    sourceObjects: new Map(),
  });
}
const zi = (t) =>
  t == null || (typeof t == "object" && !!t[Symbol.iterator]().next().done);
class cv extends If {
  constructor(e, n) {
    super(e),
      Object.defineProperty(this, "schema", {
        value: n,
        configurable: !0,
        enumerable: !1,
        writable: !0,
      });
  }
  clone(e) {
    const n = Object.create(
      Object.getPrototypeOf(this),
      Object.getOwnPropertyDescriptors(this),
    );
    return (
      e && (n.schema = e),
      (n.items = n.items.map((s) => (De(s) || Oe(s) ? s.clone(e) : s))),
      this.range && (n.range = this.range.slice()),
      n
    );
  }
  addIn(e, n) {
    if (zi(e)) this.add(n);
    else {
      const [s, ...o] = e,
        l = this.get(s, !0);
      if (Re(l)) l.addIn(o, n);
      else if (l === void 0 && this.schema) this.set(s, Ql(this.schema, o, n));
      else
        throw new Error(
          `Expected YAML collection at ${s}. Remaining path: ${o}`,
        );
    }
  }
  deleteIn(e) {
    const [n, ...s] = e;
    if (s.length === 0) return this.delete(n);
    const o = this.get(n, !0);
    if (Re(o)) return o.deleteIn(s);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`);
  }
  getIn(e, n) {
    const [s, ...o] = e,
      l = this.get(s, !0);
    return o.length === 0
      ? !n && be(l)
        ? l.value
        : l
      : Re(l)
        ? l.getIn(o, n)
        : void 0;
  }
  hasAllNullValues(e) {
    return this.items.every((n) => {
      if (!Oe(n)) return !1;
      const s = n.value;
      return (
        s == null ||
        (e &&
          be(s) &&
          s.value == null &&
          !s.commentBefore &&
          !s.comment &&
          !s.tag)
      );
    });
  }
  hasIn(e) {
    const [n, ...s] = e;
    if (s.length === 0) return this.has(n);
    const o = this.get(n, !0);
    return Re(o) ? o.hasIn(s) : !1;
  }
  setIn(e, n) {
    const [s, ...o] = e;
    if (o.length === 0) this.set(s, n);
    else {
      const l = this.get(s, !0);
      if (Re(l)) l.setIn(o, n);
      else if (l === void 0 && this.schema) this.set(s, Ql(this.schema, o, n));
      else
        throw new Error(
          `Expected YAML collection at ${s}. Remaining path: ${o}`,
        );
    }
  }
}
const $E = (t) => t.replace(/^(?!$)(?: $)?/gm, "#");
function Cn(t, e) {
  return /^\n+$/.test(t) ? t.substring(1) : e ? t.replace(/^(?! *$)/gm, e) : t;
}
const br = (t, e, n) =>
    t.endsWith(`
`)
      ? Cn(n, e)
      : n.includes(`
`)
        ? `
` + Cn(n, e)
        : (t.endsWith(" ") ? "" : " ") + n,
  uv = "flow",
  Zu = "block",
  $l = "quoted";
function aa(
  t,
  e,
  n = "flow",
  {
    indentAtStart: s,
    lineWidth: o = 80,
    minContentWidth: l = 20,
    onFold: c,
    onOverflow: u,
  } = {},
) {
  if (!o || o < 0) return t;
  o < l && (l = 0);
  const d = Math.max(1 + l, 1 + o - e.length);
  if (t.length <= d) return t;
  const p = [],
    y = {};
  let v = o - e.length;
  typeof s == "number" && (s > o - Math.max(2, l) ? p.push(0) : (v = o - s));
  let m,
    w,
    _ = !1,
    S = -1,
    E = -1,
    T = -1;
  n === Zu && ((S = Mm(t, S, e.length)), S !== -1 && (v = S + d));
  for (let O; (O = t[(S += 1)]); ) {
    if (n === $l && O === "\\") {
      switch (((E = S), t[S + 1])) {
        case "x":
          S += 3;
          break;
        case "u":
          S += 5;
          break;
        case "U":
          S += 9;
          break;
        default:
          S += 1;
      }
      T = S;
    }
    if (
      O ===
      `
`
    )
      n === Zu && (S = Mm(t, S, e.length)),
        (v = S + e.length + d),
        (m = void 0);
    else {
      if (
        O === " " &&
        w &&
        w !== " " &&
        w !==
          `
` &&
        w !== "	"
      ) {
        const R = t[S + 1];
        R &&
          R !== " " &&
          R !==
            `
` &&
          R !== "	" &&
          (m = S);
      }
      if (S >= v)
        if (m) p.push(m), (v = m + d), (m = void 0);
        else if (n === $l) {
          for (; w === " " || w === "	"; ) (w = O), (O = t[(S += 1)]), (_ = !0);
          const R = S > T + 1 ? S - 2 : E - 1;
          if (y[R]) return t;
          p.push(R), (y[R] = !0), (v = R + d), (m = void 0);
        } else _ = !0;
    }
    w = O;
  }
  if ((_ && u && u(), p.length === 0)) return t;
  c && c();
  let C = t.slice(0, p[0]);
  for (let O = 0; O < p.length; ++O) {
    const R = p[O],
      D = p[O + 1] || t.length;
    R === 0
      ? (C = `
${e}${t.slice(0, D)}`)
      : (n === $l && y[R] && (C += `${t[R]}\\`),
        (C += `
${e}${t.slice(R + 1, D)}`));
  }
  return C;
}
function Mm(t, e, n) {
  let s = e,
    o = e + 1,
    l = t[o];
  for (; l === " " || l === "	"; )
    if (e < o + n) l = t[++e];
    else {
      do l = t[++e];
      while (
        l &&
        l !==
          `
`
      );
      (s = e), (o = e + 1), (l = t[o]);
    }
  return s;
}
const ca = (t, e) => ({
    indentAtStart: e ? t.indent.length : t.indentAtStart,
    lineWidth: t.options.lineWidth,
    minContentWidth: t.options.minContentWidth,
  }),
  ua = (t) => /^(%|---|\.\.\.)/m.test(t);
function PE(t, e, n) {
  if (!e || e < 0) return !1;
  const s = e - n,
    o = t.length;
  if (o <= s) return !1;
  for (let l = 0, c = 0; l < o; ++l)
    if (
      t[l] ===
      `
`
    ) {
      if (l - c > s) return !0;
      if (((c = l + 1), o - c <= s)) return !1;
    }
  return !0;
}
function Hi(t, e) {
  const n = JSON.stringify(t);
  if (e.options.doubleQuotedAsJSON) return n;
  const { implicitKey: s } = e,
    o = e.options.doubleQuotedMinMultiLineLength,
    l = e.indent || (ua(t) ? "  " : "");
  let c = "",
    u = 0;
  for (let d = 0, p = n[d]; p; p = n[++d])
    if (
      (p === " " &&
        n[d + 1] === "\\" &&
        n[d + 2] === "n" &&
        ((c += n.slice(u, d) + "\\ "), (d += 1), (u = d), (p = "\\")),
      p === "\\")
    )
      switch (n[d + 1]) {
        case "u":
          {
            c += n.slice(u, d);
            const y = n.substr(d + 2, 4);
            switch (y) {
              case "0000":
                c += "\\0";
                break;
              case "0007":
                c += "\\a";
                break;
              case "000b":
                c += "\\v";
                break;
              case "001b":
                c += "\\e";
                break;
              case "0085":
                c += "\\N";
                break;
              case "00a0":
                c += "\\_";
                break;
              case "2028":
                c += "\\L";
                break;
              case "2029":
                c += "\\P";
                break;
              default:
                y.substr(0, 2) === "00"
                  ? (c += "\\x" + y.substr(2))
                  : (c += n.substr(d, 6));
            }
            (d += 5), (u = d + 1);
          }
          break;
        case "n":
          if (s || n[d + 2] === '"' || n.length < o) d += 1;
          else {
            for (
              c +=
                n.slice(u, d) +
                `

`;
              n[d + 2] === "\\" && n[d + 3] === "n" && n[d + 4] !== '"';

            )
              (c += `
`),
                (d += 2);
            (c += l), n[d + 2] === " " && (c += "\\"), (d += 1), (u = d + 1);
          }
          break;
        default:
          d += 1;
      }
  return (c = u ? c + n.slice(u) : n), s ? c : aa(c, l, $l, ca(e, !1));
}
function ef(t, e) {
  if (
    e.options.singleQuote === !1 ||
    (e.implicitKey &&
      t.includes(`
`)) ||
    /[ \t]\n|\n[ \t]/.test(t)
  )
    return Hi(t, e);
  const n = e.indent || (ua(t) ? "  " : ""),
    s =
      "'" +
      t.replace(/'/g, "''").replace(
        /\n+/g,
        `$&
${n}`,
      ) +
      "'";
  return e.implicitKey ? s : aa(s, n, uv, ca(e, !1));
}
function Ss(t, e) {
  const { singleQuote: n } = e.options;
  let s;
  if (n === !1) s = Hi;
  else {
    const o = t.includes('"'),
      l = t.includes("'");
    o && !l ? (s = ef) : l && !o ? (s = Hi) : (s = n ? ef : Hi);
  }
  return s(t, e);
}
let tf;
try {
  tf = new RegExp(
    `(^|(?<!
))
+(?!
|$)`,
    "g",
  );
} catch {
  tf = /\n+(?!\n|$)/g;
}
function Pl({ comment: t, type: e, value: n }, s, o, l) {
  const { blockQuote: c, commentString: u, lineWidth: d } = s.options;
  if (!c || /\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return Ss(n, s);
  const p = s.indent || (s.forceBlockIndent || ua(n) ? "  " : ""),
    y =
      c === "literal"
        ? !0
        : c === "folded" || e === he.BLOCK_FOLDED
          ? !1
          : e === he.BLOCK_LITERAL
            ? !0
            : !PE(n, d, p.length);
  if (!n)
    return y
      ? `|
`
      : `>
`;
  let v, m;
  for (m = n.length; m > 0; --m) {
    const F = n[m - 1];
    if (
      F !==
        `
` &&
      F !== "	" &&
      F !== " "
    )
      break;
  }
  let w = n.substring(m);
  const _ = w.indexOf(`
`);
  _ === -1
    ? (v = "-")
    : n === w || _ !== w.length - 1
      ? ((v = "+"), l && l())
      : (v = ""),
    w &&
      ((n = n.slice(0, -w.length)),
      w[w.length - 1] ===
        `
` && (w = w.slice(0, -1)),
      (w = w.replace(tf, `$&${p}`)));
  let S = !1,
    E,
    T = -1;
  for (E = 0; E < n.length; ++E) {
    const F = n[E];
    if (F === " ") S = !0;
    else if (
      F ===
      `
`
    )
      T = E;
    else break;
  }
  let C = n.substring(0, T < E ? T + 1 : E);
  C && ((n = n.substring(C.length)), (C = C.replace(/\n+/g, `$&${p}`)));
  let R = (y ? "|" : ">") + (S ? (p ? "2" : "1") : "") + v;
  if ((t && ((R += " " + u(t.replace(/ ?[\r\n]+/g, " "))), o && o()), y))
    return (
      (n = n.replace(/\n+/g, `$&${p}`)),
      `${R}
${p}${C}${n}${w}`
    );
  n = n
    .replace(
      /\n+/g,
      `
$&`,
    )
    .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2")
    .replace(/\n+/g, `$&${p}`);
  const D = aa(`${C}${n}${w}`, p, Zu, ca(s, !0));
  return `${R}
${p}${D}`;
}
function RE(t, e, n, s) {
  const { type: o, value: l } = t,
    {
      actualString: c,
      implicitKey: u,
      indent: d,
      indentStep: p,
      inFlow: y,
    } = e;
  if (
    (u &&
      l.includes(`
`)) ||
    (y && /[[\]{},]/.test(l))
  )
    return Ss(l, e);
  if (
    !l ||
    /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(
      l,
    )
  )
    return u ||
      y ||
      !l.includes(`
`)
      ? Ss(l, e)
      : Pl(t, e, n, s);
  if (
    !u &&
    !y &&
    o !== he.PLAIN &&
    l.includes(`
`)
  )
    return Pl(t, e, n, s);
  if (ua(l)) {
    if (d === "") return (e.forceBlockIndent = !0), Pl(t, e, n, s);
    if (u && d === p) return Ss(l, e);
  }
  const v = l.replace(
    /\n+/g,
    `$&
${d}`,
  );
  if (c) {
    const m = (S) => {
        var E;
        return (
          S.default &&
          S.tag !== "tag:yaml.org,2002:str" &&
          ((E = S.test) == null ? void 0 : E.test(v))
        );
      },
      { compat: w, tags: _ } = e.doc.schema;
    if (_.some(m) || (w != null && w.some(m))) return Ss(l, e);
  }
  return u ? v : aa(v, d, uv, ca(e, !1));
}
function Ji(t, e, n, s) {
  const { implicitKey: o, inFlow: l } = e,
    c =
      typeof t.value == "string"
        ? t
        : Object.assign({}, t, { value: String(t.value) });
  let { type: u } = t;
  u !== he.QUOTE_DOUBLE &&
    /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(c.value) &&
    (u = he.QUOTE_DOUBLE);
  const d = (y) => {
    switch (y) {
      case he.BLOCK_FOLDED:
      case he.BLOCK_LITERAL:
        return o || l ? Ss(c.value, e) : Pl(c, e, n, s);
      case he.QUOTE_DOUBLE:
        return Hi(c.value, e);
      case he.QUOTE_SINGLE:
        return ef(c.value, e);
      case he.PLAIN:
        return RE(c, e, n, s);
      default:
        return null;
    }
  };
  let p = d(u);
  if (p === null) {
    const { defaultKeyType: y, defaultStringType: v } = e.options,
      m = (o && y) || v;
    if (((p = d(m)), p === null))
      throw new Error(`Unsupported default string type ${m}`);
  }
  return p;
}
function fv(t, e) {
  const n = Object.assign(
    {
      blockQuote: !0,
      commentString: $E,
      defaultKeyType: null,
      defaultStringType: "PLAIN",
      directives: null,
      doubleQuotedAsJSON: !1,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: "false",
      flowCollectionPadding: !0,
      indentSeq: !0,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: "null",
      simpleKeys: !1,
      singleQuote: null,
      trueStr: "true",
      verifyAliasOrder: !0,
    },
    t.schema.toStringOptions,
    e,
  );
  let s;
  switch (n.collectionStyle) {
    case "block":
      s = !1;
      break;
    case "flow":
      s = !0;
      break;
    default:
      s = null;
  }
  return {
    anchors: new Set(),
    doc: t,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: s,
    options: n,
  };
}
function DE(t, e) {
  var o;
  if (e.tag) {
    const l = t.filter((c) => c.tag === e.tag);
    if (l.length > 0) return l.find((c) => c.format === e.format) ?? l[0];
  }
  let n, s;
  if (be(e)) {
    s = e.value;
    let l = t.filter((c) => {
      var u;
      return (u = c.identify) == null ? void 0 : u.call(c, s);
    });
    if (l.length > 1) {
      const c = l.filter((u) => u.test);
      c.length > 0 && (l = c);
    }
    n = l.find((c) => c.format === e.format) ?? l.find((c) => !c.format);
  } else (s = e), (n = t.find((l) => l.nodeClass && s instanceof l.nodeClass));
  if (!n) {
    const l =
      ((o = s == null ? void 0 : s.constructor) == null ? void 0 : o.name) ??
      typeof s;
    throw new Error(`Tag not resolved for ${l} value`);
  }
  return n;
}
function FE(t, e, { anchors: n, doc: s }) {
  if (!s.directives) return "";
  const o = [],
    l = (be(t) || Re(t)) && t.anchor;
  l && iv(l) && (n.add(l), o.push(`&${l}`));
  const c = t.tag ? t.tag : e.default ? null : e.tag;
  return c && o.push(s.directives.tagString(c)), o.join(" ");
}
function Cs(t, e, n, s) {
  var d;
  if (Oe(t)) return t.toString(e, n, s);
  if (Mr(t)) {
    if (e.doc.directives) return t.toString(e);
    if ((d = e.resolvedAliases) != null && d.has(t))
      throw new TypeError(
        "Cannot stringify circular structure without alias nodes",
      );
    e.resolvedAliases
      ? e.resolvedAliases.add(t)
      : (e.resolvedAliases = new Set([t])),
      (t = t.resolve(e.doc));
  }
  let o;
  const l = De(t) ? t : e.doc.createNode(t, { onTagObj: (p) => (o = p) });
  o || (o = DE(e.doc.schema.tags, l));
  const c = FE(l, o, e);
  c.length > 0 && (e.indentAtStart = (e.indentAtStart ?? 0) + c.length + 1);
  const u =
    typeof o.stringify == "function"
      ? o.stringify(l, e, n, s)
      : be(l)
        ? Ji(l, e, n, s)
        : l.toString(e, n, s);
  return c
    ? be(l) || u[0] === "{" || u[0] === "["
      ? `${c} ${u}`
      : `${c}
${e.indent}${u}`
    : u;
}
function zE({ key: t, value: e }, n, s, o) {
  const {
    allNullValues: l,
    doc: c,
    indent: u,
    indentStep: d,
    options: { commentString: p, indentSeq: y, simpleKeys: v },
  } = n;
  let m = (De(t) && t.comment) || null;
  if (v) {
    if (m) throw new Error("With simple keys, key nodes cannot have comments");
    if (Re(t) || (!De(t) && typeof t == "object")) {
      const U = "With simple keys, collection cannot be used as a key value";
      throw new Error(U);
    }
  }
  let w =
    !v &&
    (!t ||
      (m && e == null && !n.inFlow) ||
      Re(t) ||
      (be(t)
        ? t.type === he.BLOCK_FOLDED || t.type === he.BLOCK_LITERAL
        : typeof t == "object"));
  n = Object.assign({}, n, {
    allNullValues: !1,
    implicitKey: !w && (v || !l),
    indent: u + d,
  });
  let _ = !1,
    S = !1,
    E = Cs(
      t,
      n,
      () => (_ = !0),
      () => (S = !0),
    );
  if (!w && !n.inFlow && E.length > 1024) {
    if (v)
      throw new Error(
        "With simple keys, single line scalar must not span more than 1024 characters",
      );
    w = !0;
  }
  if (n.inFlow) {
    if (l || e == null) return _ && s && s(), E === "" ? "?" : w ? `? ${E}` : E;
  } else if ((l && !v) || (e == null && w))
    return (
      (E = `? ${E}`), m && !_ ? (E += br(E, n.indent, p(m))) : S && o && o(), E
    );
  _ && (m = null),
    w
      ? (m && (E += br(E, n.indent, p(m))),
        (E = `? ${E}
${u}:`))
      : ((E = `${E}:`), m && (E += br(E, n.indent, p(m))));
  let T, C, O;
  De(e)
    ? ((T = !!e.spaceBefore), (C = e.commentBefore), (O = e.comment))
    : ((T = !1),
      (C = null),
      (O = null),
      e && typeof e == "object" && (e = c.createNode(e))),
    (n.implicitKey = !1),
    !w && !m && be(e) && (n.indentAtStart = E.length + 1),
    (S = !1),
    !y &&
      d.length >= 2 &&
      !n.inFlow &&
      !w &&
      Ps(e) &&
      !e.flow &&
      !e.tag &&
      !e.anchor &&
      (n.indent = n.indent.substring(2));
  let R = !1;
  const D = Cs(
    e,
    n,
    () => (R = !0),
    () => (S = !0),
  );
  let F = " ";
  if (m || T || C) {
    if (
      ((F = T
        ? `
`
        : ""),
      C)
    ) {
      const U = p(C);
      F += `
${Cn(U, n.indent)}`;
    }
    D === "" && !n.inFlow
      ? F ===
          `
` &&
        (F = `

`)
      : (F += `
${n.indent}`);
  } else if (!w && Re(e)) {
    const U = D[0],
      B = D.indexOf(`
`),
      j = B !== -1,
      Q = n.inFlow ?? e.flow ?? e.items.length === 0;
    if (j || !Q) {
      let W = !1;
      if (j && (U === "&" || U === "!")) {
        let z = D.indexOf(" ");
        U === "&" &&
          z !== -1 &&
          z < B &&
          D[z + 1] === "!" &&
          (z = D.indexOf(" ", z + 1)),
          (z === -1 || B < z) && (W = !0);
      }
      W ||
        (F = `
${n.indent}`);
    }
  } else
    (D === "" ||
      D[0] ===
        `
`) &&
      (F = "");
  return (
    (E += F + D),
    n.inFlow
      ? R && s && s()
      : O && !R
        ? (E += br(E, n.indent, p(O)))
        : S && o && o(),
    E
  );
}
function dv(t, e) {
  (t === "debug" || t === "warn") &&
    (typeof process < "u" && process.emitWarning
      ? process.emitWarning(e)
      : console.warn(e));
}
const wl = "<<",
  An = {
    identify: (t) => t === wl || (typeof t == "symbol" && t.description === wl),
    default: "key",
    tag: "tag:yaml.org,2002:merge",
    test: /^<<$/,
    resolve: () => Object.assign(new he(Symbol(wl)), { addToJSMap: hv }),
    stringify: () => wl,
  },
  BE = (t, e) =>
    (An.identify(e) ||
      (be(e) && (!e.type || e.type === he.PLAIN) && An.identify(e.value))) &&
    (t == null
      ? void 0
      : t.doc.schema.tags.some((n) => n.tag === An.tag && n.default));
function hv(t, e, n) {
  if (((n = t && Mr(n) ? n.resolve(t.doc) : n), Ps(n)))
    for (const s of n.items) ju(t, e, s);
  else if (Array.isArray(n)) for (const s of n) ju(t, e, s);
  else ju(t, e, n);
}
function ju(t, e, n) {
  const s = t && Mr(n) ? n.resolve(t.doc) : n;
  if (!$s(s)) throw new Error("Merge sources must be maps or map aliases");
  const o = s.toJSON(null, t, Map);
  for (const [l, c] of o)
    e instanceof Map
      ? e.has(l) || e.set(l, c)
      : e instanceof Set
        ? e.add(l)
        : Object.prototype.hasOwnProperty.call(e, l) ||
          Object.defineProperty(e, l, {
            value: c,
            writable: !0,
            enumerable: !0,
            configurable: !0,
          });
  return e;
}
function pv(t, e, { key: n, value: s }) {
  if (De(n) && n.addToJSMap) n.addToJSMap(t, e, s);
  else if (BE(t, n)) hv(t, e, s);
  else {
    const o = qt(n, "", t);
    if (e instanceof Map) e.set(o, qt(s, o, t));
    else if (e instanceof Set) e.add(o);
    else {
      const l = UE(n, o, t),
        c = qt(s, l, t);
      l in e
        ? Object.defineProperty(e, l, {
            value: c,
            writable: !0,
            enumerable: !0,
            configurable: !0,
          })
        : (e[l] = c);
    }
  }
  return e;
}
function UE(t, e, n) {
  if (e === null) return "";
  if (typeof e != "object") return String(e);
  if (De(t) && n != null && n.doc) {
    const s = fv(n.doc, {});
    s.anchors = new Set();
    for (const l of n.anchors.keys()) s.anchors.add(l.anchor);
    (s.inFlow = !0), (s.inStringifyKey = !0);
    const o = t.toString(s);
    if (!n.mapKeyWarned) {
      let l = JSON.stringify(o);
      l.length > 40 && (l = l.substring(0, 36) + '..."'),
        dv(
          n.doc.options.logLevel,
          `Keys with collection values will be stringified due to JS Object restrictions: ${l}. Set mapAsMap: true to use object keys.`,
        ),
        (n.mapKeyWarned = !0);
    }
    return o;
  }
  return JSON.stringify(e);
}
function jf(t, e, n) {
  const s = Ki(t, void 0, n),
    o = Ki(e, void 0, n);
  return new at(s, o);
}
class at {
  constructor(e, n = null) {
    Object.defineProperty(this, Wt, { value: ev }),
      (this.key = e),
      (this.value = n);
  }
  clone(e) {
    let { key: n, value: s } = this;
    return De(n) && (n = n.clone(e)), De(s) && (s = s.clone(e)), new at(n, s);
  }
  toJSON(e, n) {
    const s = n != null && n.mapAsMap ? new Map() : {};
    return pv(n, s, this);
  }
  toString(e, n, s) {
    return e != null && e.doc ? zE(this, e, n, s) : JSON.stringify(this);
  }
}
function mv(t, e, n) {
  return ((e.inFlow ?? t.flow) ? qE : HE)(t, e, n);
}
function HE(
  { comment: t, items: e },
  n,
  {
    blockItemPrefix: s,
    flowChars: o,
    itemIndent: l,
    onChompKeep: c,
    onComment: u,
  },
) {
  const {
      indent: d,
      options: { commentString: p },
    } = n,
    y = Object.assign({}, n, { indent: l, type: null });
  let v = !1;
  const m = [];
  for (let _ = 0; _ < e.length; ++_) {
    const S = e[_];
    let E = null;
    if (De(S))
      !v && S.spaceBefore && m.push(""),
        Xl(n, m, S.commentBefore, v),
        S.comment && (E = S.comment);
    else if (Oe(S)) {
      const C = De(S.key) ? S.key : null;
      C && (!v && C.spaceBefore && m.push(""), Xl(n, m, C.commentBefore, v));
    }
    v = !1;
    let T = Cs(
      S,
      y,
      () => (E = null),
      () => (v = !0),
    );
    E && (T += br(T, l, p(E))), v && E && (v = !1), m.push(s + T);
  }
  let w;
  if (m.length === 0) w = o.start + o.end;
  else {
    w = m[0];
    for (let _ = 1; _ < m.length; ++_) {
      const S = m[_];
      w += S
        ? `
${d}${S}`
        : `
`;
    }
  }
  return (
    t
      ? ((w +=
          `
` + Cn(p(t), d)),
        u && u())
      : v && c && c(),
    w
  );
}
function qE({ items: t }, e, { flowChars: n, itemIndent: s }) {
  const {
    indent: o,
    indentStep: l,
    flowCollectionPadding: c,
    options: { commentString: u },
  } = e;
  s += l;
  const d = Object.assign({}, e, { indent: s, inFlow: !0, type: null });
  let p = !1,
    y = 0;
  const v = [];
  for (let _ = 0; _ < t.length; ++_) {
    const S = t[_];
    let E = null;
    if (De(S))
      S.spaceBefore && v.push(""),
        Xl(e, v, S.commentBefore, !1),
        S.comment && (E = S.comment);
    else if (Oe(S)) {
      const C = De(S.key) ? S.key : null;
      C &&
        (C.spaceBefore && v.push(""),
        Xl(e, v, C.commentBefore, !1),
        C.comment && (p = !0));
      const O = De(S.value) ? S.value : null;
      O
        ? (O.comment && (E = O.comment), O.commentBefore && (p = !0))
        : S.value == null && C != null && C.comment && (E = C.comment);
    }
    E && (p = !0);
    let T = Cs(S, d, () => (E = null));
    _ < t.length - 1 && (T += ","),
      E && (T += br(T, s, u(E))),
      !p &&
        (v.length > y ||
          T.includes(`
`)) &&
        (p = !0),
      v.push(T),
      (y = v.length);
  }
  const { start: m, end: w } = n;
  if (v.length === 0) return m + w;
  if (!p) {
    const _ = v.reduce((S, E) => S + E.length + 2, 2);
    p = e.options.lineWidth > 0 && _ > e.options.lineWidth;
  }
  if (p) {
    let _ = m;
    for (const S of v)
      _ += S
        ? `
${l}${o}${S}`
        : `
`;
    return `${_}
${o}${w}`;
  } else return `${m}${c}${v.join(" ")}${c}${w}`;
}
function Xl({ indent: t, options: { commentString: e } }, n, s, o) {
  if ((s && o && (s = s.replace(/^\n+/, "")), s)) {
    const l = Cn(e(s), t);
    n.push(l.trimStart());
  }
}
function Tr(t, e) {
  const n = be(e) ? e.value : e;
  for (const s of t)
    if (
      Oe(s) &&
      (s.key === e || s.key === n || (be(s.key) && s.key.value === n))
    )
      return s;
}
class Ot extends cv {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(e) {
    super(rr, e), (this.items = []);
  }
  static from(e, n, s) {
    const { keepUndefined: o, replacer: l } = s,
      c = new this(e),
      u = (d, p) => {
        if (typeof l == "function") p = l.call(n, d, p);
        else if (Array.isArray(l) && !l.includes(d)) return;
        (p !== void 0 || o) && c.items.push(jf(d, p, s));
      };
    if (n instanceof Map) for (const [d, p] of n) u(d, p);
    else if (n && typeof n == "object")
      for (const d of Object.keys(n)) u(d, n[d]);
    return (
      typeof e.sortMapEntries == "function" && c.items.sort(e.sortMapEntries), c
    );
  }
  add(e, n) {
    var c;
    let s;
    Oe(e)
      ? (s = e)
      : !e || typeof e != "object" || !("key" in e)
        ? (s = new at(e, e == null ? void 0 : e.value))
        : (s = new at(e.key, e.value));
    const o = Tr(this.items, s.key),
      l = (c = this.schema) == null ? void 0 : c.sortMapEntries;
    if (o) {
      if (!n) throw new Error(`Key ${s.key} already set`);
      be(o.value) && av(s.value)
        ? (o.value.value = s.value)
        : (o.value = s.value);
    } else if (l) {
      const u = this.items.findIndex((d) => l(s, d) < 0);
      u === -1 ? this.items.push(s) : this.items.splice(u, 0, s);
    } else this.items.push(s);
  }
  delete(e) {
    const n = Tr(this.items, e);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
  }
  get(e, n) {
    const s = Tr(this.items, e),
      o = s == null ? void 0 : s.value;
    return (!n && be(o) ? o.value : o) ?? void 0;
  }
  has(e) {
    return !!Tr(this.items, e);
  }
  set(e, n) {
    this.add(new at(e, n), !0);
  }
  toJSON(e, n, s) {
    const o = s ? new s() : n != null && n.mapAsMap ? new Map() : {};
    n != null && n.onCreate && n.onCreate(o);
    for (const l of this.items) pv(n, o, l);
    return o;
  }
  toString(e, n, s) {
    if (!e) return JSON.stringify(this);
    for (const o of this.items)
      if (!Oe(o))
        throw new Error(
          `Map items must all be pairs; found ${JSON.stringify(o)} instead`,
        );
    return (
      !e.allNullValues &&
        this.hasAllNullValues(!1) &&
        (e = Object.assign({}, e, { allNullValues: !0 })),
      mv(this, e, {
        blockItemPrefix: "",
        flowChars: { start: "{", end: "}" },
        itemIndent: e.indent || "",
        onChompKeep: s,
        onComment: n,
      })
    );
  }
}
const Rs = {
  collection: "map",
  default: !0,
  nodeClass: Ot,
  tag: "tag:yaml.org,2002:map",
  resolve(t, e) {
    return $s(t) || e("Expected a mapping for this tag"), t;
  },
  createNode: (t, e, n) => Ot.from(t, e, n),
};
class ir extends cv {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(e) {
    super(Os, e), (this.items = []);
  }
  add(e) {
    this.items.push(e);
  }
  delete(e) {
    const n = xl(e);
    return typeof n != "number" ? !1 : this.items.splice(n, 1).length > 0;
  }
  get(e, n) {
    const s = xl(e);
    if (typeof s != "number") return;
    const o = this.items[s];
    return !n && be(o) ? o.value : o;
  }
  has(e) {
    const n = xl(e);
    return typeof n == "number" && n < this.items.length;
  }
  set(e, n) {
    const s = xl(e);
    if (typeof s != "number")
      throw new Error(`Expected a valid index, not ${e}.`);
    const o = this.items[s];
    be(o) && av(n) ? (o.value = n) : (this.items[s] = n);
  }
  toJSON(e, n) {
    const s = [];
    n != null && n.onCreate && n.onCreate(s);
    let o = 0;
    for (const l of this.items) s.push(qt(l, String(o++), n));
    return s;
  }
  toString(e, n, s) {
    return e
      ? mv(this, e, {
          blockItemPrefix: "- ",
          flowChars: { start: "[", end: "]" },
          itemIndent: (e.indent || "") + "  ",
          onChompKeep: s,
          onComment: n,
        })
      : JSON.stringify(this);
  }
  static from(e, n, s) {
    const { replacer: o } = s,
      l = new this(e);
    if (n && Symbol.iterator in Object(n)) {
      let c = 0;
      for (let u of n) {
        if (typeof o == "function") {
          const d = n instanceof Set ? u : String(c++);
          u = o.call(n, d, u);
        }
        l.items.push(Ki(u, void 0, s));
      }
    }
    return l;
  }
}
function xl(t) {
  let e = be(t) ? t.value : t;
  return (
    e && typeof e == "string" && (e = Number(e)),
    typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : null
  );
}
const Ds = {
    collection: "seq",
    default: !0,
    nodeClass: ir,
    tag: "tag:yaml.org,2002:seq",
    resolve(t, e) {
      return Ps(t) || e("Expected a sequence for this tag"), t;
    },
    createNode: (t, e, n) => ir.from(t, e, n),
  },
  fa = {
    identify: (t) => typeof t == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (t) => t,
    stringify(t, e, n, s) {
      return (e = Object.assign({ actualString: !0 }, e)), Ji(t, e, n, s);
    },
  },
  da = {
    identify: (t) => t == null,
    createNode: () => new he(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: () => new he(null),
    stringify: ({ source: t }, e) =>
      typeof t == "string" && da.test.test(t) ? t : e.options.nullStr,
  },
  Mf = {
    identify: (t) => typeof t == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (t) => new he(t[0] === "t" || t[0] === "T"),
    stringify({ source: t, value: e }, n) {
      if (t && Mf.test.test(t)) {
        const s = t[0] === "t" || t[0] === "T";
        if (e === s) return t;
      }
      return e ? n.options.trueStr : n.options.falseStr;
    },
  };
function rn({ format: t, minFractionDigits: e, tag: n, value: s }) {
  if (typeof s == "bigint") return String(s);
  const o = typeof s == "number" ? s : Number(s);
  if (!isFinite(o)) return isNaN(o) ? ".nan" : o < 0 ? "-.inf" : ".inf";
  let l = JSON.stringify(s);
  if (!t && e && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(l)) {
    let c = l.indexOf(".");
    c < 0 && ((c = l.length), (l += "."));
    let u = e - (l.length - c - 1);
    for (; u-- > 0; ) l += "0";
  }
  return l;
}
const gv = {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (t) =>
      t.slice(-3).toLowerCase() === "nan"
        ? NaN
        : t[0] === "-"
          ? Number.NEGATIVE_INFINITY
          : Number.POSITIVE_INFINITY,
    stringify: rn,
  },
  yv = {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (t) => parseFloat(t),
    stringify(t) {
      const e = Number(t.value);
      return isFinite(e) ? e.toExponential() : rn(t);
    },
  },
  vv = {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(t) {
      const e = new he(parseFloat(t)),
        n = t.indexOf(".");
      return (
        n !== -1 &&
          t[t.length - 1] === "0" &&
          (e.minFractionDigits = t.length - n - 1),
        e
      );
    },
    stringify: rn,
  },
  ha = (t) => typeof t == "bigint" || Number.isInteger(t),
  Of = (t, e, n, { intAsBigInt: s }) =>
    s ? BigInt(t) : parseInt(t.substring(e), n);
function wv(t, e, n) {
  const { value: s } = t;
  return ha(s) && s >= 0 ? n + s.toString(e) : rn(t);
}
const xv = {
    identify: (t) => ha(t) && t >= 0,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^0o[0-7]+$/,
    resolve: (t, e, n) => Of(t, 2, 8, n),
    stringify: (t) => wv(t, 8, "0o"),
  },
  Sv = {
    identify: ha,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9]+$/,
    resolve: (t, e, n) => Of(t, 0, 10, n),
    stringify: rn,
  },
  _v = {
    identify: (t) => ha(t) && t >= 0,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (t, e, n) => Of(t, 2, 16, n),
    stringify: (t) => wv(t, 16, "0x"),
  },
  VE = [Rs, Ds, fa, da, Mf, xv, Sv, _v, gv, yv, vv];
function Om(t) {
  return typeof t == "bigint" || Number.isInteger(t);
}
const Sl = ({ value: t }) => JSON.stringify(t),
  WE = [
    {
      identify: (t) => typeof t == "string",
      default: !0,
      tag: "tag:yaml.org,2002:str",
      resolve: (t) => t,
      stringify: Sl,
    },
    {
      identify: (t) => t == null,
      createNode: () => new he(null),
      default: !0,
      tag: "tag:yaml.org,2002:null",
      test: /^null$/,
      resolve: () => null,
      stringify: Sl,
    },
    {
      identify: (t) => typeof t == "boolean",
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^true|false$/,
      resolve: (t) => t === "true",
      stringify: Sl,
    },
    {
      identify: Om,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (t, e, { intAsBigInt: n }) => (n ? BigInt(t) : parseInt(t, 10)),
      stringify: ({ value: t }) => (Om(t) ? t.toString() : JSON.stringify(t)),
    },
    {
      identify: (t) => typeof t == "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: (t) => parseFloat(t),
      stringify: Sl,
    },
  ],
  KE = {
    default: !0,
    tag: "",
    test: /^/,
    resolve(t, e) {
      return e(`Unresolved plain scalar ${JSON.stringify(t)}`), t;
    },
  },
  QE = [Rs, Ds].concat(WE, KE),
  $f = {
    identify: (t) => t instanceof Uint8Array,
    default: !1,
    tag: "tag:yaml.org,2002:binary",
    resolve(t, e) {
      if (typeof Buffer == "function") return Buffer.from(t, "base64");
      if (typeof atob == "function") {
        const n = atob(t.replace(/[\n\r]/g, "")),
          s = new Uint8Array(n.length);
        for (let o = 0; o < n.length; ++o) s[o] = n.charCodeAt(o);
        return s;
      } else
        return (
          e(
            "This environment does not support reading binary tags; either Buffer or atob is required",
          ),
          t
        );
    },
    stringify({ comment: t, type: e, value: n }, s, o, l) {
      const c = n;
      let u;
      if (typeof Buffer == "function")
        u =
          c instanceof Buffer
            ? c.toString("base64")
            : Buffer.from(c.buffer).toString("base64");
      else if (typeof btoa == "function") {
        let d = "";
        for (let p = 0; p < c.length; ++p) d += String.fromCharCode(c[p]);
        u = btoa(d);
      } else
        throw new Error(
          "This environment does not support writing binary tags; either Buffer or btoa is required",
        );
      if ((e || (e = he.BLOCK_LITERAL), e !== he.QUOTE_DOUBLE)) {
        const d = Math.max(
            s.options.lineWidth - s.indent.length,
            s.options.minContentWidth,
          ),
          p = Math.ceil(u.length / d),
          y = new Array(p);
        for (let v = 0, m = 0; v < p; ++v, m += d) y[v] = u.substr(m, d);
        u = y.join(
          e === he.BLOCK_LITERAL
            ? `
`
            : " ",
        );
      }
      return Ji({ comment: t, type: e, value: u }, s, o, l);
    },
  };
function kv(t, e) {
  if (Ps(t))
    for (let n = 0; n < t.items.length; ++n) {
      let s = t.items[n];
      if (!Oe(s)) {
        if ($s(s)) {
          s.items.length > 1 &&
            e("Each pair must have its own sequence indicator");
          const o = s.items[0] || new at(new he(null));
          if (
            (s.commentBefore &&
              (o.key.commentBefore = o.key.commentBefore
                ? `${s.commentBefore}
${o.key.commentBefore}`
                : s.commentBefore),
            s.comment)
          ) {
            const l = o.value ?? o.key;
            l.comment = l.comment
              ? `${s.comment}
${l.comment}`
              : s.comment;
          }
          s = o;
        }
        t.items[n] = Oe(s) ? s : new at(s);
      }
    }
  else e("Expected a sequence for this tag");
  return t;
}
function Ev(t, e, n) {
  const { replacer: s } = n,
    o = new ir(t);
  o.tag = "tag:yaml.org,2002:pairs";
  let l = 0;
  if (e && Symbol.iterator in Object(e))
    for (let c of e) {
      typeof s == "function" && (c = s.call(e, String(l++), c));
      let u, d;
      if (Array.isArray(c))
        if (c.length === 2) (u = c[0]), (d = c[1]);
        else throw new TypeError(`Expected [key, value] tuple: ${c}`);
      else if (c && c instanceof Object) {
        const p = Object.keys(c);
        if (p.length === 1) (u = p[0]), (d = c[u]);
        else
          throw new TypeError(
            `Expected tuple with one key, not ${p.length} keys`,
          );
      } else u = c;
      o.items.push(jf(u, d, n));
    }
  return o;
}
const Pf = {
  collection: "seq",
  default: !1,
  tag: "tag:yaml.org,2002:pairs",
  resolve: kv,
  createNode: Ev,
};
class ks extends ir {
  constructor() {
    super(),
      (this.add = Ot.prototype.add.bind(this)),
      (this.delete = Ot.prototype.delete.bind(this)),
      (this.get = Ot.prototype.get.bind(this)),
      (this.has = Ot.prototype.has.bind(this)),
      (this.set = Ot.prototype.set.bind(this)),
      (this.tag = ks.tag);
  }
  toJSON(e, n) {
    if (!n) return super.toJSON(e);
    const s = new Map();
    n != null && n.onCreate && n.onCreate(s);
    for (const o of this.items) {
      let l, c;
      if (
        (Oe(o)
          ? ((l = qt(o.key, "", n)), (c = qt(o.value, l, n)))
          : (l = qt(o, "", n)),
        s.has(l))
      )
        throw new Error("Ordered maps must not include duplicate keys");
      s.set(l, c);
    }
    return s;
  }
  static from(e, n, s) {
    const o = Ev(e, n, s),
      l = new this();
    return (l.items = o.items), l;
  }
}
ks.tag = "tag:yaml.org,2002:omap";
const Rf = {
  collection: "seq",
  identify: (t) => t instanceof Map,
  nodeClass: ks,
  default: !1,
  tag: "tag:yaml.org,2002:omap",
  resolve(t, e) {
    const n = kv(t, e),
      s = [];
    for (const { key: o } of n.items)
      be(o) &&
        (s.includes(o.value)
          ? e(`Ordered maps must not include duplicate keys: ${o.value}`)
          : s.push(o.value));
    return Object.assign(new ks(), n);
  },
  createNode: (t, e, n) => ks.from(t, e, n),
};
function bv({ value: t, source: e }, n) {
  return e && (t ? Tv : Nv).test.test(e)
    ? e
    : t
      ? n.options.trueStr
      : n.options.falseStr;
}
const Tv = {
    identify: (t) => t === !0,
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new he(!0),
    stringify: bv,
  },
  Nv = {
    identify: (t) => t === !1,
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: () => new he(!1),
    stringify: bv,
  },
  XE = {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (t) =>
      t.slice(-3).toLowerCase() === "nan"
        ? NaN
        : t[0] === "-"
          ? Number.NEGATIVE_INFINITY
          : Number.POSITIVE_INFINITY,
    stringify: rn,
  },
  GE = {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (t) => parseFloat(t.replace(/_/g, "")),
    stringify(t) {
      const e = Number(t.value);
      return isFinite(e) ? e.toExponential() : rn(t);
    },
  },
  JE = {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(t) {
      const e = new he(parseFloat(t.replace(/_/g, ""))),
        n = t.indexOf(".");
      if (n !== -1) {
        const s = t.substring(n + 1).replace(/_/g, "");
        s[s.length - 1] === "0" && (e.minFractionDigits = s.length);
      }
      return e;
    },
    stringify: rn,
  },
  Yi = (t) => typeof t == "bigint" || Number.isInteger(t);
function pa(t, e, n, { intAsBigInt: s }) {
  const o = t[0];
  if (
    ((o === "-" || o === "+") && (e += 1),
    (t = t.substring(e).replace(/_/g, "")),
    s)
  ) {
    switch (n) {
      case 2:
        t = `0b${t}`;
        break;
      case 8:
        t = `0o${t}`;
        break;
      case 16:
        t = `0x${t}`;
        break;
    }
    const c = BigInt(t);
    return o === "-" ? BigInt(-1) * c : c;
  }
  const l = parseInt(t, n);
  return o === "-" ? -1 * l : l;
}
function Df(t, e, n) {
  const { value: s } = t;
  if (Yi(s)) {
    const o = s.toString(e);
    return s < 0 ? "-" + n + o.substr(1) : n + o;
  }
  return rn(t);
}
const YE = {
    identify: Yi,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "BIN",
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (t, e, n) => pa(t, 2, 2, n),
    stringify: (t) => Df(t, 2, "0b"),
  },
  ZE = {
    identify: Yi,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^[-+]?0[0-7_]+$/,
    resolve: (t, e, n) => pa(t, 1, 8, n),
    stringify: (t) => Df(t, 8, "0"),
  },
  eb = {
    identify: Yi,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (t, e, n) => pa(t, 0, 10, n),
    stringify: rn,
  },
  tb = {
    identify: Yi,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (t, e, n) => pa(t, 2, 16, n),
    stringify: (t) => Df(t, 16, "0x"),
  };
class Es extends Ot {
  constructor(e) {
    super(e), (this.tag = Es.tag);
  }
  add(e) {
    let n;
    Oe(e)
      ? (n = e)
      : e &&
          typeof e == "object" &&
          "key" in e &&
          "value" in e &&
          e.value === null
        ? (n = new at(e.key, null))
        : (n = new at(e, null)),
      Tr(this.items, n.key) || this.items.push(n);
  }
  get(e, n) {
    const s = Tr(this.items, e);
    return !n && Oe(s) ? (be(s.key) ? s.key.value : s.key) : s;
  }
  set(e, n) {
    if (typeof n != "boolean")
      throw new Error(
        `Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`,
      );
    const s = Tr(this.items, e);
    s && !n
      ? this.items.splice(this.items.indexOf(s), 1)
      : !s && n && this.items.push(new at(e));
  }
  toJSON(e, n) {
    return super.toJSON(e, n, Set);
  }
  toString(e, n, s) {
    if (!e) return JSON.stringify(this);
    if (this.hasAllNullValues(!0))
      return super.toString(Object.assign({}, e, { allNullValues: !0 }), n, s);
    throw new Error("Set items must all have null values");
  }
  static from(e, n, s) {
    const { replacer: o } = s,
      l = new this(e);
    if (n && Symbol.iterator in Object(n))
      for (let c of n)
        typeof o == "function" && (c = o.call(n, c, c)),
          l.items.push(jf(c, null, s));
    return l;
  }
}
Es.tag = "tag:yaml.org,2002:set";
const Ff = {
  collection: "map",
  identify: (t) => t instanceof Set,
  nodeClass: Es,
  default: !1,
  tag: "tag:yaml.org,2002:set",
  createNode: (t, e, n) => Es.from(t, e, n),
  resolve(t, e) {
    if ($s(t)) {
      if (t.hasAllNullValues(!0)) return Object.assign(new Es(), t);
      e("Set items must all have null values");
    } else e("Expected a mapping for this tag");
    return t;
  },
};
function zf(t, e) {
  const n = t[0],
    s = n === "-" || n === "+" ? t.substring(1) : t,
    o = (c) => (e ? BigInt(c) : Number(c)),
    l = s
      .replace(/_/g, "")
      .split(":")
      .reduce((c, u) => c * o(60) + o(u), o(0));
  return n === "-" ? o(-1) * l : l;
}
function Cv(t) {
  let { value: e } = t,
    n = (c) => c;
  if (typeof e == "bigint") n = (c) => BigInt(c);
  else if (isNaN(e) || !isFinite(e)) return rn(t);
  let s = "";
  e < 0 && ((s = "-"), (e *= n(-1)));
  const o = n(60),
    l = [e % o];
  return (
    e < 60
      ? l.unshift(0)
      : ((e = (e - l[0]) / o),
        l.unshift(e % o),
        e >= 60 && ((e = (e - l[0]) / o), l.unshift(e))),
    s +
      l
        .map((c) => String(c).padStart(2, "0"))
        .join(":")
        .replace(/000000\d*$/, "")
  );
}
const Av = {
    identify: (t) => typeof t == "bigint" || Number.isInteger(t),
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (t, e, { intAsBigInt: n }) => zf(t, n),
    stringify: Cv,
  },
  Lv = {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (t) => zf(t, !1),
    stringify: Cv,
  },
  ma = {
    identify: (t) => t instanceof Date,
    default: !0,
    tag: "tag:yaml.org,2002:timestamp",
    test: RegExp(
      "^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$",
    ),
    resolve(t) {
      const e = t.match(ma.test);
      if (!e)
        throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
      const [, n, s, o, l, c, u] = e.map(Number),
        d = e[7] ? Number((e[7] + "00").substr(1, 3)) : 0;
      let p = Date.UTC(n, s - 1, o, l || 0, c || 0, u || 0, d);
      const y = e[8];
      if (y && y !== "Z") {
        let v = zf(y, !1);
        Math.abs(v) < 30 && (v *= 60), (p -= 6e4 * v);
      }
      return new Date(p);
    },
    stringify: ({ value: t }) =>
      t.toISOString().replace(/((T00:00)?:00)?\.000Z$/, ""),
  },
  $m = [
    Rs,
    Ds,
    fa,
    da,
    Tv,
    Nv,
    YE,
    ZE,
    eb,
    tb,
    XE,
    GE,
    JE,
    $f,
    An,
    Rf,
    Pf,
    Ff,
    Av,
    Lv,
    ma,
  ],
  Pm = new Map([
    ["core", VE],
    ["failsafe", [Rs, Ds, fa]],
    ["json", QE],
    ["yaml11", $m],
    ["yaml-1.1", $m],
  ]),
  Rm = {
    binary: $f,
    bool: Mf,
    float: vv,
    floatExp: yv,
    floatNaN: gv,
    floatTime: Lv,
    int: Sv,
    intHex: _v,
    intOct: xv,
    intTime: Av,
    map: Rs,
    merge: An,
    null: da,
    omap: Rf,
    pairs: Pf,
    seq: Ds,
    set: Ff,
    timestamp: ma,
  },
  nb = {
    "tag:yaml.org,2002:binary": $f,
    "tag:yaml.org,2002:merge": An,
    "tag:yaml.org,2002:omap": Rf,
    "tag:yaml.org,2002:pairs": Pf,
    "tag:yaml.org,2002:set": Ff,
    "tag:yaml.org,2002:timestamp": ma,
  };
function Mu(t, e, n) {
  const s = Pm.get(e);
  if (s && !t) return n && !s.includes(An) ? s.concat(An) : s.slice();
  let o = s;
  if (!o)
    if (Array.isArray(t)) o = [];
    else {
      const l = Array.from(Pm.keys())
        .filter((c) => c !== "yaml11")
        .map((c) => JSON.stringify(c))
        .join(", ");
      throw new Error(
        `Unknown schema "${e}"; use one of ${l} or define customTags array`,
      );
    }
  if (Array.isArray(t)) for (const l of t) o = o.concat(l);
  else typeof t == "function" && (o = t(o.slice()));
  return (
    n && (o = o.concat(An)),
    o.reduce((l, c) => {
      const u = typeof c == "string" ? Rm[c] : c;
      if (!u) {
        const d = JSON.stringify(c),
          p = Object.keys(Rm)
            .map((y) => JSON.stringify(y))
            .join(", ");
        throw new Error(`Unknown custom tag ${d}; use one of ${p}`);
      }
      return l.includes(u) || l.push(u), l;
    }, [])
  );
}
const rb = (t, e) => (t.key < e.key ? -1 : t.key > e.key ? 1 : 0);
class ga {
  constructor({
    compat: e,
    customTags: n,
    merge: s,
    resolveKnownTags: o,
    schema: l,
    sortMapEntries: c,
    toStringDefaults: u,
  }) {
    (this.compat = Array.isArray(e) ? Mu(e, "compat") : e ? Mu(null, e) : null),
      (this.name = (typeof l == "string" && l) || "core"),
      (this.knownTags = o ? nb : {}),
      (this.tags = Mu(n, this.name, s)),
      (this.toStringOptions = u ?? null),
      Object.defineProperty(this, rr, { value: Rs }),
      Object.defineProperty(this, hn, { value: fa }),
      Object.defineProperty(this, Os, { value: Ds }),
      (this.sortMapEntries = typeof c == "function" ? c : c === !0 ? rb : null);
  }
  clone() {
    const e = Object.create(
      ga.prototype,
      Object.getOwnPropertyDescriptors(this),
    );
    return (e.tags = this.tags.slice()), e;
  }
}
function sb(t, e) {
  var d;
  const n = [];
  let s = e.directives === !0;
  if (e.directives !== !1 && t.directives) {
    const p = t.directives.toString(t);
    p ? (n.push(p), (s = !0)) : t.directives.docStart && (s = !0);
  }
  s && n.push("---");
  const o = fv(t, e),
    { commentString: l } = o.options;
  if (t.commentBefore) {
    n.length !== 1 && n.unshift("");
    const p = l(t.commentBefore);
    n.unshift(Cn(p, ""));
  }
  let c = !1,
    u = null;
  if (t.contents) {
    if (De(t.contents)) {
      if (
        (t.contents.spaceBefore && s && n.push(""), t.contents.commentBefore)
      ) {
        const v = l(t.contents.commentBefore);
        n.push(Cn(v, ""));
      }
      (o.forceBlockIndent = !!t.comment), (u = t.contents.comment);
    }
    const p = u ? void 0 : () => (c = !0);
    let y = Cs(t.contents, o, () => (u = null), p);
    u && (y += br(y, "", l(u))),
      (y[0] === "|" || y[0] === ">") && n[n.length - 1] === "---"
        ? (n[n.length - 1] = `--- ${y}`)
        : n.push(y);
  } else n.push(Cs(t.contents, o));
  if ((d = t.directives) != null && d.docEnd)
    if (t.comment) {
      const p = l(t.comment);
      p.includes(`
`)
        ? (n.push("..."), n.push(Cn(p, "")))
        : n.push(`... ${p}`);
    } else n.push("...");
  else {
    let p = t.comment;
    p && c && (p = p.replace(/^\n+/, "")),
      p &&
        ((!c || u) && n[n.length - 1] !== "" && n.push(""),
        n.push(Cn(l(p), "")));
  }
  return (
    n.join(`
`) +
    `
`
  );
}
class Fs {
  constructor(e, n, s) {
    (this.commentBefore = null),
      (this.comment = null),
      (this.errors = []),
      (this.warnings = []),
      Object.defineProperty(this, Wt, { value: Yu });
    let o = null;
    typeof n == "function" || Array.isArray(n)
      ? (o = n)
      : s === void 0 && n && ((s = n), (n = void 0));
    const l = Object.assign(
      {
        intAsBigInt: !1,
        keepSourceTokens: !1,
        logLevel: "warn",
        prettyErrors: !0,
        strict: !0,
        stringKeys: !1,
        uniqueKeys: !0,
        version: "1.2",
      },
      s,
    );
    this.options = l;
    let { version: c } = l;
    s != null && s._directives
      ? ((this.directives = s._directives.atDocument()),
        this.directives.yaml.explicit && (c = this.directives.yaml.version))
      : (this.directives = new dt({ version: c })),
      this.setSchema(c, s),
      (this.contents = e === void 0 ? null : this.createNode(e, o, s));
  }
  clone() {
    const e = Object.create(Fs.prototype, { [Wt]: { value: Yu } });
    return (
      (e.commentBefore = this.commentBefore),
      (e.comment = this.comment),
      (e.errors = this.errors.slice()),
      (e.warnings = this.warnings.slice()),
      (e.options = Object.assign({}, this.options)),
      this.directives && (e.directives = this.directives.clone()),
      (e.schema = this.schema.clone()),
      (e.contents = De(this.contents)
        ? this.contents.clone(e.schema)
        : this.contents),
      this.range && (e.range = this.range.slice()),
      e
    );
  }
  add(e) {
    fs(this.contents) && this.contents.add(e);
  }
  addIn(e, n) {
    fs(this.contents) && this.contents.addIn(e, n);
  }
  createAlias(e, n) {
    if (!e.anchor) {
      const s = ov(this);
      e.anchor = !n || s.has(n) ? lv(n || "a", s) : n;
    }
    return new la(e.anchor);
  }
  createNode(e, n, s) {
    let o;
    if (typeof n == "function") (e = n.call({ "": e }, "", e)), (o = n);
    else if (Array.isArray(n)) {
      const E = (C) =>
          typeof C == "number" || C instanceof String || C instanceof Number,
        T = n.filter(E).map(String);
      T.length > 0 && (n = n.concat(T)), (o = n);
    } else s === void 0 && n && ((s = n), (n = void 0));
    const {
        aliasDuplicateObjects: l,
        anchorPrefix: c,
        flow: u,
        keepUndefined: d,
        onTagObj: p,
        tag: y,
      } = s ?? {},
      { onAnchor: v, setAnchors: m, sourceObjects: w } = jE(this, c || "a"),
      _ = {
        aliasDuplicateObjects: l ?? !0,
        keepUndefined: d ?? !1,
        onAnchor: v,
        onTagObj: p,
        replacer: o,
        schema: this.schema,
        sourceObjects: w,
      },
      S = Ki(e, y, _);
    return u && Re(S) && (S.flow = !0), m(), S;
  }
  createPair(e, n, s = {}) {
    const o = this.createNode(e, null, s),
      l = this.createNode(n, null, s);
    return new at(o, l);
  }
  delete(e) {
    return fs(this.contents) ? this.contents.delete(e) : !1;
  }
  deleteIn(e) {
    return zi(e)
      ? this.contents == null
        ? !1
        : ((this.contents = null), !0)
      : fs(this.contents)
        ? this.contents.deleteIn(e)
        : !1;
  }
  get(e, n) {
    return Re(this.contents) ? this.contents.get(e, n) : void 0;
  }
  getIn(e, n) {
    return zi(e)
      ? !n && be(this.contents)
        ? this.contents.value
        : this.contents
      : Re(this.contents)
        ? this.contents.getIn(e, n)
        : void 0;
  }
  has(e) {
    return Re(this.contents) ? this.contents.has(e) : !1;
  }
  hasIn(e) {
    return zi(e)
      ? this.contents !== void 0
      : Re(this.contents)
        ? this.contents.hasIn(e)
        : !1;
  }
  set(e, n) {
    this.contents == null
      ? (this.contents = Ql(this.schema, [e], n))
      : fs(this.contents) && this.contents.set(e, n);
  }
  setIn(e, n) {
    zi(e)
      ? (this.contents = n)
      : this.contents == null
        ? (this.contents = Ql(this.schema, Array.from(e), n))
        : fs(this.contents) && this.contents.setIn(e, n);
  }
  setSchema(e, n = {}) {
    typeof e == "number" && (e = String(e));
    let s;
    switch (e) {
      case "1.1":
        this.directives
          ? (this.directives.yaml.version = "1.1")
          : (this.directives = new dt({ version: "1.1" })),
          (s = { resolveKnownTags: !1, schema: "yaml-1.1" });
        break;
      case "1.2":
      case "next":
        this.directives
          ? (this.directives.yaml.version = e)
          : (this.directives = new dt({ version: e })),
          (s = { resolveKnownTags: !0, schema: "core" });
        break;
      case null:
        this.directives && delete this.directives, (s = null);
        break;
      default: {
        const o = JSON.stringify(e);
        throw new Error(
          `Expected '1.1', '1.2' or null as first argument, but found: ${o}`,
        );
      }
    }
    if (n.schema instanceof Object) this.schema = n.schema;
    else if (s) this.schema = new ga(Object.assign(s, n));
    else
      throw new Error(
        "With a null YAML version, the { schema: Schema } option is required",
      );
  }
  toJS({
    json: e,
    jsonArg: n,
    mapAsMap: s,
    maxAliasCount: o,
    onAnchor: l,
    reviver: c,
  } = {}) {
    const u = {
        anchors: new Map(),
        doc: this,
        keep: !e,
        mapAsMap: s === !0,
        mapKeyWarned: !1,
        maxAliasCount: typeof o == "number" ? o : 100,
      },
      d = qt(this.contents, n ?? "", u);
    if (typeof l == "function")
      for (const { count: p, res: y } of u.anchors.values()) l(y, p);
    return typeof c == "function" ? xs(c, { "": d }, "", d) : d;
  }
  toJSON(e, n) {
    return this.toJS({ json: !0, jsonArg: e, mapAsMap: !1, onAnchor: n });
  }
  toString(e = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if (
      "indent" in e &&
      (!Number.isInteger(e.indent) || Number(e.indent) <= 0)
    ) {
      const n = JSON.stringify(e.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return sb(this, e);
  }
}
function fs(t) {
  if (Re(t)) return !0;
  throw new Error("Expected a YAML collection as document contents");
}
class Bf extends Error {
  constructor(e, n, s, o) {
    super(),
      (this.name = e),
      (this.code = s),
      (this.message = o),
      (this.pos = n);
  }
}
class Nr extends Bf {
  constructor(e, n, s) {
    super("YAMLParseError", e, n, s);
  }
}
class Iv extends Bf {
  constructor(e, n, s) {
    super("YAMLWarning", e, n, s);
  }
}
const Gl = (t, e) => (n) => {
  if (n.pos[0] === -1) return;
  n.linePos = n.pos.map((u) => e.linePos(u));
  const { line: s, col: o } = n.linePos[0];
  n.message += ` at line ${s}, column ${o}`;
  let l = o - 1,
    c = t
      .substring(e.lineStarts[s - 1], e.lineStarts[s])
      .replace(/[\n\r]+$/, "");
  if (l >= 60 && c.length > 80) {
    const u = Math.min(l - 39, c.length - 79);
    (c = "…" + c.substring(u)), (l -= u - 1);
  }
  if (
    (c.length > 80 && (c = c.substring(0, 79) + "…"),
    s > 1 && /^ *$/.test(c.substring(0, l)))
  ) {
    let u = t.substring(e.lineStarts[s - 2], e.lineStarts[s - 1]);
    u.length > 80 &&
      (u =
        u.substring(0, 79) +
        `…
`),
      (c = u + c);
  }
  if (/[^ ]/.test(c)) {
    let u = 1;
    const d = n.linePos[1];
    d &&
      d.line === s &&
      d.col > o &&
      (u = Math.max(1, Math.min(d.col - o, 80 - l)));
    const p = " ".repeat(l) + "^".repeat(u);
    n.message += `:

${c}
${p}
`;
  }
};
function As(
  t,
  {
    flow: e,
    indicator: n,
    next: s,
    offset: o,
    onError: l,
    parentIndent: c,
    startOnNewline: u,
  },
) {
  let d = !1,
    p = u,
    y = u,
    v = "",
    m = "",
    w = !1,
    _ = !1,
    S = null,
    E = null,
    T = null,
    C = null,
    O = null,
    R = null,
    D = null;
  for (const B of t)
    switch (
      (_ &&
        (B.type !== "space" &&
          B.type !== "newline" &&
          B.type !== "comma" &&
          l(
            B.offset,
            "MISSING_CHAR",
            "Tags and anchors must be separated from the next token by white space",
          ),
        (_ = !1)),
      S &&
        (p &&
          B.type !== "comment" &&
          B.type !== "newline" &&
          l(S, "TAB_AS_INDENT", "Tabs are not allowed as indentation"),
        (S = null)),
      B.type)
    ) {
      case "space":
        !e &&
          (n !== "doc-start" ||
            (s == null ? void 0 : s.type) !== "flow-collection") &&
          B.source.includes("	") &&
          (S = B),
          (y = !0);
        break;
      case "comment": {
        y ||
          l(
            B,
            "MISSING_CHAR",
            "Comments must be separated from other tokens by white space characters",
          );
        const j = B.source.substring(1) || " ";
        v ? (v += m + j) : (v = j), (m = ""), (p = !1);
        break;
      }
      case "newline":
        p ? (v ? (v += B.source) : (d = !0)) : (m += B.source),
          (p = !0),
          (w = !0),
          (E || T) && (C = B),
          (y = !0);
        break;
      case "anchor":
        E && l(B, "MULTIPLE_ANCHORS", "A node can have at most one anchor"),
          B.source.endsWith(":") &&
            l(
              B.offset + B.source.length - 1,
              "BAD_ALIAS",
              "Anchor ending in : is ambiguous",
              !0,
            ),
          (E = B),
          D === null && (D = B.offset),
          (p = !1),
          (y = !1),
          (_ = !0);
        break;
      case "tag": {
        T && l(B, "MULTIPLE_TAGS", "A node can have at most one tag"),
          (T = B),
          D === null && (D = B.offset),
          (p = !1),
          (y = !1),
          (_ = !0);
        break;
      }
      case n:
        (E || T) &&
          l(
            B,
            "BAD_PROP_ORDER",
            `Anchors and tags must be after the ${B.source} indicator`,
          ),
          R &&
            l(
              B,
              "UNEXPECTED_TOKEN",
              `Unexpected ${B.source} in ${e ?? "collection"}`,
            ),
          (R = B),
          (p = n === "seq-item-ind" || n === "explicit-key-ind"),
          (y = !1);
        break;
      case "comma":
        if (e) {
          O && l(B, "UNEXPECTED_TOKEN", `Unexpected , in ${e}`),
            (O = B),
            (p = !1),
            (y = !1);
          break;
        }
      default:
        l(B, "UNEXPECTED_TOKEN", `Unexpected ${B.type} token`),
          (p = !1),
          (y = !1);
    }
  const F = t[t.length - 1],
    U = F ? F.offset + F.source.length : o;
  return (
    _ &&
      s &&
      s.type !== "space" &&
      s.type !== "newline" &&
      s.type !== "comma" &&
      (s.type !== "scalar" || s.source !== "") &&
      l(
        s.offset,
        "MISSING_CHAR",
        "Tags and anchors must be separated from the next token by white space",
      ),
    S &&
      ((p && S.indent <= c) ||
        (s == null ? void 0 : s.type) === "block-map" ||
        (s == null ? void 0 : s.type) === "block-seq") &&
      l(S, "TAB_AS_INDENT", "Tabs are not allowed as indentation"),
    {
      comma: O,
      found: R,
      spaceBefore: d,
      comment: v,
      hasNewline: w,
      anchor: E,
      tag: T,
      newlineAfterProp: C,
      end: U,
      start: D ?? U,
    }
  );
}
function Qi(t) {
  if (!t) return null;
  switch (t.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (
        t.source.includes(`
`)
      )
        return !0;
      if (t.end) {
        for (const e of t.end) if (e.type === "newline") return !0;
      }
      return !1;
    case "flow-collection":
      for (const e of t.items) {
        for (const n of e.start) if (n.type === "newline") return !0;
        if (e.sep) {
          for (const n of e.sep) if (n.type === "newline") return !0;
        }
        if (Qi(e.key) || Qi(e.value)) return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function nf(t, e, n) {
  if ((e == null ? void 0 : e.type) === "flow-collection") {
    const s = e.end[0];
    s.indent === t &&
      (s.source === "]" || s.source === "}") &&
      Qi(e) &&
      n(
        s,
        "BAD_INDENT",
        "Flow end indicator should be more indented than parent",
        !0,
      );
  }
}
function jv(t, e, n) {
  const { uniqueKeys: s } = t.options;
  if (s === !1) return !1;
  const o =
    typeof s == "function"
      ? s
      : (l, c) => l === c || (be(l) && be(c) && l.value === c.value);
  return e.some((l) => o(l.key, n));
}
const Dm = "All mapping items must start at the same column";
function ib({ composeNode: t, composeEmptyNode: e }, n, s, o, l) {
  var y;
  const c = (l == null ? void 0 : l.nodeClass) ?? Ot,
    u = new c(n.schema);
  n.atRoot && (n.atRoot = !1);
  let d = s.offset,
    p = null;
  for (const v of s.items) {
    const { start: m, key: w, sep: _, value: S } = v,
      E = As(m, {
        indicator: "explicit-key-ind",
        next: w ?? (_ == null ? void 0 : _[0]),
        offset: d,
        onError: o,
        parentIndent: s.indent,
        startOnNewline: !0,
      }),
      T = !E.found;
    if (T) {
      if (
        (w &&
          (w.type === "block-seq"
            ? o(
                d,
                "BLOCK_AS_IMPLICIT_KEY",
                "A block sequence may not be used as an implicit map key",
              )
            : "indent" in w && w.indent !== s.indent && o(d, "BAD_INDENT", Dm)),
        !E.anchor && !E.tag && !_)
      ) {
        (p = E.end),
          E.comment &&
            (u.comment
              ? (u.comment +=
                  `
` + E.comment)
              : (u.comment = E.comment));
        continue;
      }
      (E.newlineAfterProp || Qi(w)) &&
        o(
          w ?? m[m.length - 1],
          "MULTILINE_IMPLICIT_KEY",
          "Implicit keys need to be on a single line",
        );
    } else
      ((y = E.found) == null ? void 0 : y.indent) !== s.indent &&
        o(d, "BAD_INDENT", Dm);
    n.atKey = !0;
    const C = E.end,
      O = w ? t(n, w, E, o) : e(n, C, m, null, E, o);
    n.schema.compat && nf(s.indent, w, o),
      (n.atKey = !1),
      jv(n, u.items, O) && o(C, "DUPLICATE_KEY", "Map keys must be unique");
    const R = As(_ ?? [], {
      indicator: "map-value-ind",
      next: S,
      offset: O.range[2],
      onError: o,
      parentIndent: s.indent,
      startOnNewline: !w || w.type === "block-scalar",
    });
    if (((d = R.end), R.found)) {
      T &&
        ((S == null ? void 0 : S.type) === "block-map" &&
          !R.hasNewline &&
          o(
            d,
            "BLOCK_AS_IMPLICIT_KEY",
            "Nested mappings are not allowed in compact mappings",
          ),
        n.options.strict &&
          E.start < R.found.offset - 1024 &&
          o(
            O.range,
            "KEY_OVER_1024_CHARS",
            "The : indicator must be at most 1024 chars after the start of an implicit block mapping key",
          ));
      const D = S ? t(n, S, R, o) : e(n, d, _, null, R, o);
      n.schema.compat && nf(s.indent, S, o), (d = D.range[2]);
      const F = new at(O, D);
      n.options.keepSourceTokens && (F.srcToken = v), u.items.push(F);
    } else {
      T &&
        o(
          O.range,
          "MISSING_CHAR",
          "Implicit map keys need to be followed by map values",
        ),
        R.comment &&
          (O.comment
            ? (O.comment +=
                `
` + R.comment)
            : (O.comment = R.comment));
      const D = new at(O);
      n.options.keepSourceTokens && (D.srcToken = v), u.items.push(D);
    }
  }
  return (
    p && p < d && o(p, "IMPOSSIBLE", "Map comment with trailing content"),
    (u.range = [s.offset, d, p ?? d]),
    u
  );
}
function ob({ composeNode: t, composeEmptyNode: e }, n, s, o, l) {
  const c = (l == null ? void 0 : l.nodeClass) ?? ir,
    u = new c(n.schema);
  n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let d = s.offset,
    p = null;
  for (const { start: y, value: v } of s.items) {
    const m = As(y, {
      indicator: "seq-item-ind",
      next: v,
      offset: d,
      onError: o,
      parentIndent: s.indent,
      startOnNewline: !0,
    });
    if (!m.found)
      if (m.anchor || m.tag || v)
        v && v.type === "block-seq"
          ? o(
              m.end,
              "BAD_INDENT",
              "All sequence items must start at the same column",
            )
          : o(d, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        (p = m.end), m.comment && (u.comment = m.comment);
        continue;
      }
    const w = v ? t(n, v, m, o) : e(n, m.end, y, null, m, o);
    n.schema.compat && nf(s.indent, v, o), (d = w.range[2]), u.items.push(w);
  }
  return (u.range = [s.offset, d, p ?? d]), u;
}
function Zi(t, e, n, s) {
  let o = "";
  if (t) {
    let l = !1,
      c = "";
    for (const u of t) {
      const { source: d, type: p } = u;
      switch (p) {
        case "space":
          l = !0;
          break;
        case "comment": {
          n &&
            !l &&
            s(
              u,
              "MISSING_CHAR",
              "Comments must be separated from other tokens by white space characters",
            );
          const y = d.substring(1) || " ";
          o ? (o += c + y) : (o = y), (c = "");
          break;
        }
        case "newline":
          o && (c += d), (l = !0);
          break;
        default:
          s(u, "UNEXPECTED_TOKEN", `Unexpected ${p} at node end`);
      }
      e += d.length;
    }
  }
  return { comment: o, offset: e };
}
const Ou = "Block collections are not allowed within flow collections",
  $u = (t) => t && (t.type === "block-map" || t.type === "block-seq");
function lb({ composeNode: t, composeEmptyNode: e }, n, s, o, l) {
  const c = s.start.source === "{",
    u = c ? "flow map" : "flow sequence",
    d = (l == null ? void 0 : l.nodeClass) ?? (c ? Ot : ir),
    p = new d(n.schema);
  p.flow = !0;
  const y = n.atRoot;
  y && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let v = s.offset + s.start.source.length;
  for (let E = 0; E < s.items.length; ++E) {
    const T = s.items[E],
      { start: C, key: O, sep: R, value: D } = T,
      F = As(C, {
        flow: u,
        indicator: "explicit-key-ind",
        next: O ?? (R == null ? void 0 : R[0]),
        offset: v,
        onError: o,
        parentIndent: s.indent,
        startOnNewline: !1,
      });
    if (!F.found) {
      if (!F.anchor && !F.tag && !R && !D) {
        E === 0 && F.comma
          ? o(F.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${u}`)
          : E < s.items.length - 1 &&
            o(F.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${u}`),
          F.comment &&
            (p.comment
              ? (p.comment +=
                  `
` + F.comment)
              : (p.comment = F.comment)),
          (v = F.end);
        continue;
      }
      !c &&
        n.options.strict &&
        Qi(O) &&
        o(
          O,
          "MULTILINE_IMPLICIT_KEY",
          "Implicit keys of flow sequence pairs need to be on a single line",
        );
    }
    if (E === 0)
      F.comma && o(F.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${u}`);
    else if (
      (F.comma || o(F.start, "MISSING_CHAR", `Missing , between ${u} items`),
      F.comment)
    ) {
      let U = "";
      e: for (const B of C)
        switch (B.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            U = B.source.substring(1);
            break e;
          default:
            break e;
        }
      if (U) {
        let B = p.items[p.items.length - 1];
        Oe(B) && (B = B.value ?? B.key),
          B.comment
            ? (B.comment +=
                `
` + U)
            : (B.comment = U),
          (F.comment = F.comment.substring(U.length + 1));
      }
    }
    if (!c && !R && !F.found) {
      const U = D ? t(n, D, F, o) : e(n, F.end, R, null, F, o);
      p.items.push(U),
        (v = U.range[2]),
        $u(D) && o(U.range, "BLOCK_IN_FLOW", Ou);
    } else {
      n.atKey = !0;
      const U = F.end,
        B = O ? t(n, O, F, o) : e(n, U, C, null, F, o);
      $u(O) && o(B.range, "BLOCK_IN_FLOW", Ou), (n.atKey = !1);
      const j = As(R ?? [], {
        flow: u,
        indicator: "map-value-ind",
        next: D,
        offset: B.range[2],
        onError: o,
        parentIndent: s.indent,
        startOnNewline: !1,
      });
      if (j.found) {
        if (!c && !F.found && n.options.strict) {
          if (R)
            for (const z of R) {
              if (z === j.found) break;
              if (z.type === "newline") {
                o(
                  z,
                  "MULTILINE_IMPLICIT_KEY",
                  "Implicit keys of flow sequence pairs need to be on a single line",
                );
                break;
              }
            }
          F.start < j.found.offset - 1024 &&
            o(
              j.found,
              "KEY_OVER_1024_CHARS",
              "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key",
            );
        }
      } else
        D &&
          ("source" in D && D.source && D.source[0] === ":"
            ? o(D, "MISSING_CHAR", `Missing space after : in ${u}`)
            : o(j.start, "MISSING_CHAR", `Missing , or : between ${u} items`));
      const Q = D ? t(n, D, j, o) : j.found ? e(n, j.end, R, null, j, o) : null;
      Q
        ? $u(D) && o(Q.range, "BLOCK_IN_FLOW", Ou)
        : j.comment &&
          (B.comment
            ? (B.comment +=
                `
` + j.comment)
            : (B.comment = j.comment));
      const W = new at(B, Q);
      if ((n.options.keepSourceTokens && (W.srcToken = T), c)) {
        const z = p;
        jv(n, z.items, B) && o(U, "DUPLICATE_KEY", "Map keys must be unique"),
          z.items.push(W);
      } else {
        const z = new Ot(n.schema);
        (z.flow = !0), z.items.push(W);
        const J = (Q ?? B).range;
        (z.range = [B.range[0], J[1], J[2]]), p.items.push(z);
      }
      v = Q ? Q.range[2] : j.end;
    }
  }
  const m = c ? "}" : "]",
    [w, ..._] = s.end;
  let S = v;
  if (w && w.source === m) S = w.offset + w.source.length;
  else {
    const E = u[0].toUpperCase() + u.substring(1),
      T = y
        ? `${E} must end with a ${m}`
        : `${E} in block collection must be sufficiently indented and end with a ${m}`;
    o(v, y ? "MISSING_CHAR" : "BAD_INDENT", T),
      w && w.source.length !== 1 && _.unshift(w);
  }
  if (_.length > 0) {
    const E = Zi(_, S, n.options.strict, o);
    E.comment &&
      (p.comment
        ? (p.comment +=
            `
` + E.comment)
        : (p.comment = E.comment)),
      (p.range = [s.offset, S, E.offset]);
  } else p.range = [s.offset, S, S];
  return p;
}
function Pu(t, e, n, s, o, l) {
  const c =
      n.type === "block-map"
        ? ib(t, e, n, s, l)
        : n.type === "block-seq"
          ? ob(t, e, n, s, l)
          : lb(t, e, n, s, l),
    u = c.constructor;
  return o === "!" || o === u.tagName
    ? ((c.tag = u.tagName), c)
    : (o && (c.tag = o), c);
}
function ab(t, e, n, s, o) {
  var m;
  const l = s.tag,
    c = l
      ? e.directives.tagName(l.source, (w) => o(l, "TAG_RESOLVE_FAILED", w))
      : null;
  if (n.type === "block-seq") {
    const { anchor: w, newlineAfterProp: _ } = s,
      S = w && l ? (w.offset > l.offset ? w : l) : (w ?? l);
    S &&
      (!_ || _.offset < S.offset) &&
      o(S, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const u =
    n.type === "block-map"
      ? "map"
      : n.type === "block-seq"
        ? "seq"
        : n.start.source === "{"
          ? "map"
          : "seq";
  if (
    !l ||
    !c ||
    c === "!" ||
    (c === Ot.tagName && u === "map") ||
    (c === ir.tagName && u === "seq")
  )
    return Pu(t, e, n, o, c);
  let d = e.schema.tags.find((w) => w.tag === c && w.collection === u);
  if (!d) {
    const w = e.schema.knownTags[c];
    if (w && w.collection === u)
      e.schema.tags.push(Object.assign({}, w, { default: !1 })), (d = w);
    else
      return (
        w != null && w.collection
          ? o(
              l,
              "BAD_COLLECTION_TYPE",
              `${w.tag} used for ${u} collection, but expects ${w.collection}`,
              !0,
            )
          : o(l, "TAG_RESOLVE_FAILED", `Unresolved tag: ${c}`, !0),
        Pu(t, e, n, o, c)
      );
  }
  const p = Pu(t, e, n, o, c, d),
    y =
      ((m = d.resolve) == null
        ? void 0
        : m.call(d, p, (w) => o(l, "TAG_RESOLVE_FAILED", w), e.options)) ?? p,
    v = De(y) ? y : new he(y);
  return (
    (v.range = p.range),
    (v.tag = c),
    d != null && d.format && (v.format = d.format),
    v
  );
}
function Mv(t, e, n) {
  const s = e.offset,
    o = cb(e, t.options.strict, n);
  if (!o) return { value: "", type: null, comment: "", range: [s, s, s] };
  const l = o.mode === ">" ? he.BLOCK_FOLDED : he.BLOCK_LITERAL,
    c = e.source ? ub(e.source) : [];
  let u = c.length;
  for (let S = c.length - 1; S >= 0; --S) {
    const E = c[S][1];
    if (E === "" || E === "\r") u = S;
    else break;
  }
  if (u === 0) {
    const S =
      o.chomp === "+" && c.length > 0
        ? `
`.repeat(Math.max(1, c.length - 1))
        : "";
    let E = s + o.length;
    return (
      e.source && (E += e.source.length),
      { value: S, type: l, comment: o.comment, range: [s, E, E] }
    );
  }
  let d = e.indent + o.indent,
    p = e.offset + o.length,
    y = 0;
  for (let S = 0; S < u; ++S) {
    const [E, T] = c[S];
    if (T === "" || T === "\r")
      o.indent === 0 && E.length > d && (d = E.length);
    else {
      E.length < d &&
        n(
          p + E.length,
          "MISSING_CHAR",
          "Block scalars with more-indented leading empty lines must use an explicit indentation indicator",
        ),
        o.indent === 0 && (d = E.length),
        (y = S),
        d === 0 &&
          !t.atRoot &&
          n(
            p,
            "BAD_INDENT",
            "Block scalar values in collections must be indented",
          );
      break;
    }
    p += E.length + T.length + 1;
  }
  for (let S = c.length - 1; S >= u; --S) c[S][0].length > d && (u = S + 1);
  let v = "",
    m = "",
    w = !1;
  for (let S = 0; S < y; ++S)
    v +=
      c[S][0].slice(d) +
      `
`;
  for (let S = y; S < u; ++S) {
    let [E, T] = c[S];
    p += E.length + T.length + 1;
    const C = T[T.length - 1] === "\r";
    if ((C && (T = T.slice(0, -1)), T && E.length < d)) {
      const R = `Block scalar lines must not be less indented than their ${o.indent ? "explicit indentation indicator" : "first line"}`;
      n(p - T.length - (C ? 2 : 1), "BAD_INDENT", R), (E = "");
    }
    l === he.BLOCK_LITERAL
      ? ((v += m + E.slice(d) + T),
        (m = `
`))
      : E.length > d || T[0] === "	"
        ? (m === " "
            ? (m = `
`)
            : !w &&
              m ===
                `
` &&
              (m = `

`),
          (v += m + E.slice(d) + T),
          (m = `
`),
          (w = !0))
        : T === ""
          ? m ===
            `
`
            ? (v += `
`)
            : (m = `
`)
          : ((v += m + T), (m = " "), (w = !1));
  }
  switch (o.chomp) {
    case "-":
      break;
    case "+":
      for (let S = u; S < c.length; ++S)
        v +=
          `
` + c[S][0].slice(d);
      v[v.length - 1] !==
        `
` &&
        (v += `
`);
      break;
    default:
      v += `
`;
  }
  const _ = s + o.length + e.source.length;
  return { value: v, type: l, comment: o.comment, range: [s, _, _] };
}
function cb({ offset: t, props: e }, n, s) {
  if (e[0].type !== "block-scalar-header")
    return s(e[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: o } = e[0],
    l = o[0];
  let c = 0,
    u = "",
    d = -1;
  for (let m = 1; m < o.length; ++m) {
    const w = o[m];
    if (!u && (w === "-" || w === "+")) u = w;
    else {
      const _ = Number(w);
      !c && _ ? (c = _) : d === -1 && (d = t + m);
    }
  }
  d !== -1 &&
    s(
      d,
      "UNEXPECTED_TOKEN",
      `Block scalar header includes extra characters: ${o}`,
    );
  let p = !1,
    y = "",
    v = o.length;
  for (let m = 1; m < e.length; ++m) {
    const w = e[m];
    switch (w.type) {
      case "space":
        p = !0;
      case "newline":
        v += w.source.length;
        break;
      case "comment":
        n &&
          !p &&
          s(
            w,
            "MISSING_CHAR",
            "Comments must be separated from other tokens by white space characters",
          ),
          (v += w.source.length),
          (y = w.source.substring(1));
        break;
      case "error":
        s(w, "UNEXPECTED_TOKEN", w.message), (v += w.source.length);
        break;
      default: {
        const _ = `Unexpected token in block scalar header: ${w.type}`;
        s(w, "UNEXPECTED_TOKEN", _);
        const S = w.source;
        S && typeof S == "string" && (v += S.length);
      }
    }
  }
  return { mode: l, indent: c, chomp: u, comment: y, length: v };
}
function ub(t) {
  const e = t.split(/\n( *)/),
    n = e[0],
    s = n.match(/^( *)/),
    l = [s != null && s[1] ? [s[1], n.slice(s[1].length)] : ["", n]];
  for (let c = 1; c < e.length; c += 2) l.push([e[c], e[c + 1]]);
  return l;
}
function Ov(t, e, n) {
  const { offset: s, type: o, source: l, end: c } = t;
  let u, d;
  const p = (m, w, _) => n(s + m, w, _);
  switch (o) {
    case "scalar":
      (u = he.PLAIN), (d = fb(l, p));
      break;
    case "single-quoted-scalar":
      (u = he.QUOTE_SINGLE), (d = db(l, p));
      break;
    case "double-quoted-scalar":
      (u = he.QUOTE_DOUBLE), (d = hb(l, p));
      break;
    default:
      return (
        n(
          t,
          "UNEXPECTED_TOKEN",
          `Expected a flow scalar value, but found: ${o}`,
        ),
        {
          value: "",
          type: null,
          comment: "",
          range: [s, s + l.length, s + l.length],
        }
      );
  }
  const y = s + l.length,
    v = Zi(c, y, e, n);
  return { value: d, type: u, comment: v.comment, range: [s, y, v.offset] };
}
function fb(t, e) {
  let n = "";
  switch (t[0]) {
    case "	":
      n = "a tab character";
      break;
    case ",":
      n = "flow indicator character ,";
      break;
    case "%":
      n = "directive indicator character %";
      break;
    case "|":
    case ">": {
      n = `block scalar indicator ${t[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${t[0]}`;
      break;
    }
  }
  return (
    n && e(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), $v(t)
  );
}
function db(t, e) {
  return (
    (t[t.length - 1] !== "'" || t.length === 1) &&
      e(t.length, "MISSING_CHAR", "Missing closing 'quote"),
    $v(t.slice(1, -1)).replace(/''/g, "'")
  );
}
function $v(t) {
  let e, n;
  try {
    (e = new RegExp(
      `(.*?)(?<![ 	])[ 	]*\r?
`,
      "sy",
    )),
      (n = new RegExp(
        `[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,
        "sy",
      ));
  } catch {
    (e = /(.*?)[ \t]*\r?\n/sy), (n = /[ \t]*(.*?)[ \t]*\r?\n/sy);
  }
  let s = e.exec(t);
  if (!s) return t;
  let o = s[1],
    l = " ",
    c = e.lastIndex;
  for (n.lastIndex = c; (s = n.exec(t)); )
    s[1] === ""
      ? l ===
        `
`
        ? (o += l)
        : (l = `
`)
      : ((o += l + s[1]), (l = " ")),
      (c = n.lastIndex);
  const u = /[ \t]*(.*)/sy;
  return (
    (u.lastIndex = c),
    (s = u.exec(t)),
    o + l + ((s == null ? void 0 : s[1]) ?? "")
  );
}
function hb(t, e) {
  let n = "";
  for (let s = 1; s < t.length - 1; ++s) {
    const o = t[s];
    if (
      !(
        o === "\r" &&
        t[s + 1] ===
          `
`
      )
    )
      if (
        o ===
        `
`
      ) {
        const { fold: l, offset: c } = pb(t, s);
        (n += l), (s = c);
      } else if (o === "\\") {
        let l = t[++s];
        const c = mb[l];
        if (c) n += c;
        else if (
          l ===
          `
`
        )
          for (l = t[s + 1]; l === " " || l === "	"; ) l = t[++s + 1];
        else if (
          l === "\r" &&
          t[s + 1] ===
            `
`
        )
          for (l = t[++s + 1]; l === " " || l === "	"; ) l = t[++s + 1];
        else if (l === "x" || l === "u" || l === "U") {
          const u = { x: 2, u: 4, U: 8 }[l];
          (n += gb(t, s + 1, u, e)), (s += u);
        } else {
          const u = t.substr(s - 1, 2);
          e(s - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${u}`), (n += u);
        }
      } else if (o === " " || o === "	") {
        const l = s;
        let c = t[s + 1];
        for (; c === " " || c === "	"; ) c = t[++s + 1];
        c !==
          `
` &&
          !(
            c === "\r" &&
            t[s + 2] ===
              `
`
          ) &&
          (n += s > l ? t.slice(l, s + 1) : o);
      } else n += o;
  }
  return (
    (t[t.length - 1] !== '"' || t.length === 1) &&
      e(t.length, "MISSING_CHAR", 'Missing closing "quote'),
    n
  );
}
function pb(t, e) {
  let n = "",
    s = t[e + 1];
  for (
    ;
    (s === " " ||
      s === "	" ||
      s ===
        `
` ||
      s === "\r") &&
    !(
      s === "\r" &&
      t[e + 2] !==
        `
`
    );

  )
    s ===
      `
` &&
      (n += `
`),
      (e += 1),
      (s = t[e + 1]);
  return n || (n = " "), { fold: n, offset: e };
}
const mb = {
  0: "\0",
  a: "\x07",
  b: "\b",
  e: "\x1B",
  f: "\f",
  n: `
`,
  r: "\r",
  t: "	",
  v: "\v",
  N: "",
  _: " ",
  L: "\u2028",
  P: "\u2029",
  " ": " ",
  '"': '"',
  "/": "/",
  "\\": "\\",
  "	": "	",
};
function gb(t, e, n, s) {
  const o = t.substr(e, n),
    c = o.length === n && /^[0-9a-fA-F]+$/.test(o) ? parseInt(o, 16) : NaN;
  if (isNaN(c)) {
    const u = t.substr(e - 2, n + 2);
    return s(e - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${u}`), u;
  }
  return String.fromCodePoint(c);
}
function Pv(t, e, n, s) {
  const {
      value: o,
      type: l,
      comment: c,
      range: u,
    } = e.type === "block-scalar" ? Mv(t, e, s) : Ov(e, t.options.strict, s),
    d = n
      ? t.directives.tagName(n.source, (v) => s(n, "TAG_RESOLVE_FAILED", v))
      : null;
  let p;
  t.options.stringKeys && t.atKey
    ? (p = t.schema[hn])
    : d
      ? (p = yb(t.schema, o, d, n, s))
      : e.type === "scalar"
        ? (p = vb(t, o, e, s))
        : (p = t.schema[hn]);
  let y;
  try {
    const v = p.resolve(
      o,
      (m) => s(n ?? e, "TAG_RESOLVE_FAILED", m),
      t.options,
    );
    y = be(v) ? v : new he(v);
  } catch (v) {
    const m = v instanceof Error ? v.message : String(v);
    s(n ?? e, "TAG_RESOLVE_FAILED", m), (y = new he(o));
  }
  return (
    (y.range = u),
    (y.source = o),
    l && (y.type = l),
    d && (y.tag = d),
    p.format && (y.format = p.format),
    c && (y.comment = c),
    y
  );
}
function yb(t, e, n, s, o) {
  var u;
  if (n === "!") return t[hn];
  const l = [];
  for (const d of t.tags)
    if (!d.collection && d.tag === n)
      if (d.default && d.test) l.push(d);
      else return d;
  for (const d of l) if ((u = d.test) != null && u.test(e)) return d;
  const c = t.knownTags[n];
  return c && !c.collection
    ? (t.tags.push(Object.assign({}, c, { default: !1, test: void 0 })), c)
    : (o(
        s,
        "TAG_RESOLVE_FAILED",
        `Unresolved tag: ${n}`,
        n !== "tag:yaml.org,2002:str",
      ),
      t[hn]);
}
function vb({ atKey: t, directives: e, schema: n }, s, o, l) {
  const c =
    n.tags.find((u) => {
      var d;
      return (
        (u.default === !0 || (t && u.default === "key")) &&
        ((d = u.test) == null ? void 0 : d.test(s))
      );
    }) || n[hn];
  if (n.compat) {
    const u =
      n.compat.find((d) => {
        var p;
        return d.default && ((p = d.test) == null ? void 0 : p.test(s));
      }) ?? n[hn];
    if (c.tag !== u.tag) {
      const d = e.tagString(c.tag),
        p = e.tagString(u.tag),
        y = `Value may be parsed as either ${d} or ${p}`;
      l(o, "TAG_RESOLVE_FAILED", y, !0);
    }
  }
  return c;
}
function wb(t, e, n) {
  if (e) {
    n === null && (n = e.length);
    for (let s = n - 1; s >= 0; --s) {
      let o = e[s];
      switch (o.type) {
        case "space":
        case "comment":
        case "newline":
          t -= o.source.length;
          continue;
      }
      for (o = e[++s]; (o == null ? void 0 : o.type) === "space"; )
        (t += o.source.length), (o = e[++s]);
      break;
    }
  }
  return t;
}
const xb = { composeNode: Rv, composeEmptyNode: Uf };
function Rv(t, e, n, s) {
  const o = t.atKey,
    { spaceBefore: l, comment: c, anchor: u, tag: d } = n;
  let p,
    y = !0;
  switch (e.type) {
    case "alias":
      (p = Sb(t, e, s)),
        (u || d) &&
          s(e, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      (p = Pv(t, e, d, s)), u && (p.anchor = u.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      (p = ab(xb, t, e, n, s)), u && (p.anchor = u.source.substring(1));
      break;
    default: {
      const v =
        e.type === "error" ? e.message : `Unsupported token (type: ${e.type})`;
      s(e, "UNEXPECTED_TOKEN", v),
        (p = Uf(t, e.offset, void 0, null, n, s)),
        (y = !1);
    }
  }
  return (
    u &&
      p.anchor === "" &&
      s(u, "BAD_ALIAS", "Anchor cannot be an empty string"),
    o &&
      t.options.stringKeys &&
      (!be(p) ||
        typeof p.value != "string" ||
        (p.tag && p.tag !== "tag:yaml.org,2002:str")) &&
      s(d ?? e, "NON_STRING_KEY", "With stringKeys, all keys must be strings"),
    l && (p.spaceBefore = !0),
    c &&
      (e.type === "scalar" && e.source === ""
        ? (p.comment = c)
        : (p.commentBefore = c)),
    t.options.keepSourceTokens && y && (p.srcToken = e),
    p
  );
}
function Uf(
  t,
  e,
  n,
  s,
  { spaceBefore: o, comment: l, anchor: c, tag: u, end: d },
  p,
) {
  const y = { type: "scalar", offset: wb(e, n, s), indent: -1, source: "" },
    v = Pv(t, y, u, p);
  return (
    c &&
      ((v.anchor = c.source.substring(1)),
      v.anchor === "" && p(c, "BAD_ALIAS", "Anchor cannot be an empty string")),
    o && (v.spaceBefore = !0),
    l && ((v.comment = l), (v.range[2] = d)),
    v
  );
}
function Sb({ options: t }, { offset: e, source: n, end: s }, o) {
  const l = new la(n.substring(1));
  l.source === "" && o(e, "BAD_ALIAS", "Alias cannot be an empty string"),
    l.source.endsWith(":") &&
      o(e + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
  const c = e + n.length,
    u = Zi(s, c, t.strict, o);
  return (l.range = [e, c, u.offset]), u.comment && (l.comment = u.comment), l;
}
function _b(t, e, { offset: n, start: s, value: o, end: l }, c) {
  const u = Object.assign({ _directives: e }, t),
    d = new Fs(void 0, u),
    p = {
      atKey: !1,
      atRoot: !0,
      directives: d.directives,
      options: d.options,
      schema: d.schema,
    },
    y = As(s, {
      indicator: "doc-start",
      next: o ?? (l == null ? void 0 : l[0]),
      offset: n,
      onError: c,
      parentIndent: 0,
      startOnNewline: !0,
    });
  y.found &&
    ((d.directives.docStart = !0),
    o &&
      (o.type === "block-map" || o.type === "block-seq") &&
      !y.hasNewline &&
      c(
        y.end,
        "MISSING_CHAR",
        "Block collection cannot start on same line with directives-end marker",
      )),
    (d.contents = o ? Rv(p, o, y, c) : Uf(p, y.end, s, null, y, c));
  const v = d.contents.range[2],
    m = Zi(l, v, !1, c);
  return m.comment && (d.comment = m.comment), (d.range = [n, v, m.offset]), d;
}
function $i(t) {
  if (typeof t == "number") return [t, t + 1];
  if (Array.isArray(t)) return t.length === 2 ? t : [t[0], t[1]];
  const { offset: e, source: n } = t;
  return [e, e + (typeof n == "string" ? n.length : 1)];
}
function Fm(t) {
  var o;
  let e = "",
    n = !1,
    s = !1;
  for (let l = 0; l < t.length; ++l) {
    const c = t[l];
    switch (c[0]) {
      case "#":
        (e +=
          (e === ""
            ? ""
            : s
              ? `

`
              : `
`) + (c.substring(1) || " ")),
          (n = !0),
          (s = !1);
        break;
      case "%":
        ((o = t[l + 1]) == null ? void 0 : o[0]) !== "#" && (l += 1), (n = !1);
        break;
      default:
        n || (s = !0), (n = !1);
    }
  }
  return { comment: e, afterEmptyLine: s };
}
class Hf {
  constructor(e = {}) {
    (this.doc = null),
      (this.atDirectives = !1),
      (this.prelude = []),
      (this.errors = []),
      (this.warnings = []),
      (this.onError = (n, s, o, l) => {
        const c = $i(n);
        l
          ? this.warnings.push(new Iv(c, s, o))
          : this.errors.push(new Nr(c, s, o));
      }),
      (this.directives = new dt({ version: e.version || "1.2" })),
      (this.options = e);
  }
  decorate(e, n) {
    const { comment: s, afterEmptyLine: o } = Fm(this.prelude);
    if (s) {
      const l = e.contents;
      if (n)
        e.comment = e.comment
          ? `${e.comment}
${s}`
          : s;
      else if (o || e.directives.docStart || !l) e.commentBefore = s;
      else if (Re(l) && !l.flow && l.items.length > 0) {
        let c = l.items[0];
        Oe(c) && (c = c.key);
        const u = c.commentBefore;
        c.commentBefore = u
          ? `${s}
${u}`
          : s;
      } else {
        const c = l.commentBefore;
        l.commentBefore = c
          ? `${s}
${c}`
          : s;
      }
    }
    n
      ? (Array.prototype.push.apply(e.errors, this.errors),
        Array.prototype.push.apply(e.warnings, this.warnings))
      : ((e.errors = this.errors), (e.warnings = this.warnings)),
      (this.prelude = []),
      (this.errors = []),
      (this.warnings = []);
  }
  streamInfo() {
    return {
      comment: Fm(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings,
    };
  }
  *compose(e, n = !1, s = -1) {
    for (const o of e) yield* this.next(o);
    yield* this.end(n, s);
  }
  *next(e) {
    switch (e.type) {
      case "directive":
        this.directives.add(e.source, (n, s, o) => {
          const l = $i(e);
          (l[0] += n), this.onError(l, "BAD_DIRECTIVE", s, o);
        }),
          this.prelude.push(e.source),
          (this.atDirectives = !0);
        break;
      case "document": {
        const n = _b(this.options, this.directives, e, this.onError);
        this.atDirectives &&
          !n.directives.docStart &&
          this.onError(
            e,
            "MISSING_CHAR",
            "Missing directives-end/doc-start indicator line",
          ),
          this.decorate(n, !1),
          this.doc && (yield this.doc),
          (this.doc = n),
          (this.atDirectives = !1);
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(e.source);
        break;
      case "error": {
        const n = e.source
            ? `${e.message}: ${JSON.stringify(e.source)}`
            : e.message,
          s = new Nr($i(e), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc
          ? this.errors.push(s)
          : this.doc.errors.push(s);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const s = "Unexpected doc-end without preceding document";
          this.errors.push(new Nr($i(e), "UNEXPECTED_TOKEN", s));
          break;
        }
        this.doc.directives.docEnd = !0;
        const n = Zi(
          e.end,
          e.offset + e.source.length,
          this.doc.options.strict,
          this.onError,
        );
        if ((this.decorate(this.doc, !0), n.comment)) {
          const s = this.doc.comment;
          this.doc.comment = s
            ? `${s}
${n.comment}`
            : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(
          new Nr($i(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`),
        );
    }
  }
  *end(e = !1, n = -1) {
    if (this.doc)
      this.decorate(this.doc, !0), yield this.doc, (this.doc = null);
    else if (e) {
      const s = Object.assign({ _directives: this.directives }, this.options),
        o = new Fs(void 0, s);
      this.atDirectives &&
        this.onError(
          n,
          "MISSING_CHAR",
          "Missing directives-end indicator line",
        ),
        (o.range = [0, n, n]),
        this.decorate(o, !1),
        yield o;
    }
  }
}
function kb(t, e = !0, n) {
  if (t) {
    const s = (o, l, c) => {
      const u = typeof o == "number" ? o : Array.isArray(o) ? o[0] : o.offset;
      if (n) n(u, l, c);
      else throw new Nr([u, u + 1], l, c);
    };
    switch (t.type) {
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return Ov(t, e, s);
      case "block-scalar":
        return Mv({ options: { strict: e } }, t, s);
    }
  }
  return null;
}
function Eb(t, e) {
  const {
      implicitKey: n = !1,
      indent: s,
      inFlow: o = !1,
      offset: l = -1,
      type: c = "PLAIN",
    } = e,
    u = Ji(
      { type: c, value: t },
      {
        implicitKey: n,
        indent: s > 0 ? " ".repeat(s) : "",
        inFlow: o,
        options: { blockQuote: !0, lineWidth: -1 },
      },
    ),
    d = e.end ?? [
      {
        type: "newline",
        offset: -1,
        indent: s,
        source: `
`,
      },
    ];
  switch (u[0]) {
    case "|":
    case ">": {
      const p = u.indexOf(`
`),
        y = u.substring(0, p),
        v =
          u.substring(p + 1) +
          `
`,
        m = [{ type: "block-scalar-header", offset: l, indent: s, source: y }];
      return (
        Dv(m, d) ||
          m.push({
            type: "newline",
            offset: -1,
            indent: s,
            source: `
`,
          }),
        { type: "block-scalar", offset: l, indent: s, props: m, source: v }
      );
    }
    case '"':
      return {
        type: "double-quoted-scalar",
        offset: l,
        indent: s,
        source: u,
        end: d,
      };
    case "'":
      return {
        type: "single-quoted-scalar",
        offset: l,
        indent: s,
        source: u,
        end: d,
      };
    default:
      return { type: "scalar", offset: l, indent: s, source: u, end: d };
  }
}
function bb(t, e, n = {}) {
  let { afterKey: s = !1, implicitKey: o = !1, inFlow: l = !1, type: c } = n,
    u = "indent" in t ? t.indent : null;
  if ((s && typeof u == "number" && (u += 2), !c))
    switch (t.type) {
      case "single-quoted-scalar":
        c = "QUOTE_SINGLE";
        break;
      case "double-quoted-scalar":
        c = "QUOTE_DOUBLE";
        break;
      case "block-scalar": {
        const p = t.props[0];
        if (p.type !== "block-scalar-header")
          throw new Error("Invalid block scalar header");
        c = p.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
        break;
      }
      default:
        c = "PLAIN";
    }
  const d = Ji(
    { type: c, value: e },
    {
      implicitKey: o || u === null,
      indent: u !== null && u > 0 ? " ".repeat(u) : "",
      inFlow: l,
      options: { blockQuote: !0, lineWidth: -1 },
    },
  );
  switch (d[0]) {
    case "|":
    case ">":
      Tb(t, d);
      break;
    case '"':
      Ru(t, d, "double-quoted-scalar");
      break;
    case "'":
      Ru(t, d, "single-quoted-scalar");
      break;
    default:
      Ru(t, d, "scalar");
  }
}
function Tb(t, e) {
  const n = e.indexOf(`
`),
    s = e.substring(0, n),
    o =
      e.substring(n + 1) +
      `
`;
  if (t.type === "block-scalar") {
    const l = t.props[0];
    if (l.type !== "block-scalar-header")
      throw new Error("Invalid block scalar header");
    (l.source = s), (t.source = o);
  } else {
    const { offset: l } = t,
      c = "indent" in t ? t.indent : -1,
      u = [{ type: "block-scalar-header", offset: l, indent: c, source: s }];
    Dv(u, "end" in t ? t.end : void 0) ||
      u.push({
        type: "newline",
        offset: -1,
        indent: c,
        source: `
`,
      });
    for (const d of Object.keys(t))
      d !== "type" && d !== "offset" && delete t[d];
    Object.assign(t, { type: "block-scalar", indent: c, props: u, source: o });
  }
}
function Dv(t, e) {
  if (e)
    for (const n of e)
      switch (n.type) {
        case "space":
        case "comment":
          t.push(n);
          break;
        case "newline":
          return t.push(n), !0;
      }
  return !1;
}
function Ru(t, e, n) {
  switch (t.type) {
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      (t.type = n), (t.source = e);
      break;
    case "block-scalar": {
      const s = t.props.slice(1);
      let o = e.length;
      t.props[0].type === "block-scalar-header" &&
        (o -= t.props[0].source.length);
      for (const l of s) l.offset += o;
      delete t.props, Object.assign(t, { type: n, source: e, end: s });
      break;
    }
    case "block-map":
    case "block-seq": {
      const o = {
        type: "newline",
        offset: t.offset + e.length,
        indent: t.indent,
        source: `
`,
      };
      delete t.items, Object.assign(t, { type: n, source: e, end: [o] });
      break;
    }
    default: {
      const s = "indent" in t ? t.indent : -1,
        o =
          "end" in t && Array.isArray(t.end)
            ? t.end.filter(
                (l) =>
                  l.type === "space" ||
                  l.type === "comment" ||
                  l.type === "newline",
              )
            : [];
      for (const l of Object.keys(t))
        l !== "type" && l !== "offset" && delete t[l];
      Object.assign(t, { type: n, indent: s, source: e, end: o });
    }
  }
}
const Nb = (t) => ("type" in t ? Jl(t) : Rl(t));
function Jl(t) {
  switch (t.type) {
    case "block-scalar": {
      let e = "";
      for (const n of t.props) e += Jl(n);
      return e + t.source;
    }
    case "block-map":
    case "block-seq": {
      let e = "";
      for (const n of t.items) e += Rl(n);
      return e;
    }
    case "flow-collection": {
      let e = t.start.source;
      for (const n of t.items) e += Rl(n);
      for (const n of t.end) e += n.source;
      return e;
    }
    case "document": {
      let e = Rl(t);
      if (t.end) for (const n of t.end) e += n.source;
      return e;
    }
    default: {
      let e = t.source;
      if ("end" in t && t.end) for (const n of t.end) e += n.source;
      return e;
    }
  }
}
function Rl({ start: t, key: e, sep: n, value: s }) {
  let o = "";
  for (const l of t) o += l.source;
  if ((e && (o += Jl(e)), n)) for (const l of n) o += l.source;
  return s && (o += Jl(s)), o;
}
const rf = Symbol("break visit"),
  Cb = Symbol("skip children"),
  Fv = Symbol("remove item");
function Ar(t, e) {
  "type" in t &&
    t.type === "document" &&
    (t = { start: t.start, value: t.value }),
    zv(Object.freeze([]), t, e);
}
Ar.BREAK = rf;
Ar.SKIP = Cb;
Ar.REMOVE = Fv;
Ar.itemAtPath = (t, e) => {
  let n = t;
  for (const [s, o] of e) {
    const l = n == null ? void 0 : n[s];
    if (l && "items" in l) n = l.items[o];
    else return;
  }
  return n;
};
Ar.parentCollection = (t, e) => {
  const n = Ar.itemAtPath(t, e.slice(0, -1)),
    s = e[e.length - 1][0],
    o = n == null ? void 0 : n[s];
  if (o && "items" in o) return o;
  throw new Error("Parent collection not found");
};
function zv(t, e, n) {
  let s = n(e, t);
  if (typeof s == "symbol") return s;
  for (const o of ["key", "value"]) {
    const l = e[o];
    if (l && "items" in l) {
      for (let c = 0; c < l.items.length; ++c) {
        const u = zv(Object.freeze(t.concat([[o, c]])), l.items[c], n);
        if (typeof u == "number") c = u - 1;
        else {
          if (u === rf) return rf;
          u === Fv && (l.items.splice(c, 1), (c -= 1));
        }
      }
      typeof s == "function" && o === "key" && (s = s(e, t));
    }
  }
  return typeof s == "function" ? s(e, t) : s;
}
const ya = "\uFEFF",
  va = "",
  wa = "",
  Xi = "",
  Ab = (t) => !!t && "items" in t,
  Lb = (t) =>
    !!t &&
    (t.type === "scalar" ||
      t.type === "single-quoted-scalar" ||
      t.type === "double-quoted-scalar" ||
      t.type === "block-scalar");
function Ib(t) {
  switch (t) {
    case ya:
      return "<BOM>";
    case va:
      return "<DOC>";
    case wa:
      return "<FLOW_END>";
    case Xi:
      return "<SCALAR>";
    default:
      return JSON.stringify(t);
  }
}
function Bv(t) {
  switch (t) {
    case ya:
      return "byte-order-mark";
    case va:
      return "doc-mode";
    case wa:
      return "flow-error-end";
    case Xi:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case `
`:
    case `\r
`:
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (t[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}
const jb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      BOM: ya,
      DOCUMENT: va,
      FLOW_END: wa,
      SCALAR: Xi,
      createScalarToken: Eb,
      isCollection: Ab,
      isScalar: Lb,
      prettyToken: Ib,
      resolveAsScalar: kb,
      setScalarValue: bb,
      stringify: Nb,
      tokenType: Bv,
      visit: Ar,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function tn(t) {
  switch (t) {
    case void 0:
    case " ":
    case `
`:
    case "\r":
    case "	":
      return !0;
    default:
      return !1;
  }
}
const zm = new Set("0123456789ABCDEFabcdef"),
  Mb = new Set(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()",
  ),
  _l = new Set(",[]{}"),
  Ob = new Set(` ,[]{}
\r	`),
  Du = (t) => !t || Ob.has(t);
class Uv {
  constructor() {
    (this.atEnd = !1),
      (this.blockScalarIndent = -1),
      (this.blockScalarKeep = !1),
      (this.buffer = ""),
      (this.flowKey = !1),
      (this.flowLevel = 0),
      (this.indentNext = 0),
      (this.indentValue = 0),
      (this.lineEndPos = null),
      (this.next = null),
      (this.pos = 0);
  }
  *lex(e, n = !1) {
    if (e) {
      if (typeof e != "string") throw TypeError("source is not a string");
      (this.buffer = this.buffer ? this.buffer + e : e),
        (this.lineEndPos = null);
    }
    this.atEnd = !n;
    let s = this.next ?? "stream";
    for (; s && (n || this.hasChars(1)); ) s = yield* this.parseNext(s);
  }
  atLineEnd() {
    let e = this.pos,
      n = this.buffer[e];
    for (; n === " " || n === "	"; ) n = this.buffer[++e];
    return !n ||
      n === "#" ||
      n ===
        `
`
      ? !0
      : n === "\r"
        ? this.buffer[e + 1] ===
          `
`
        : !1;
  }
  charAt(e) {
    return this.buffer[this.pos + e];
  }
  continueScalar(e) {
    let n = this.buffer[e];
    if (this.indentNext > 0) {
      let s = 0;
      for (; n === " "; ) n = this.buffer[++s + e];
      if (n === "\r") {
        const o = this.buffer[s + e + 1];
        if (
          o ===
            `
` ||
          (!o && !this.atEnd)
        )
          return e + s + 1;
      }
      return n ===
        `
` ||
        s >= this.indentNext ||
        (!n && !this.atEnd)
        ? e + s
        : -1;
    }
    if (n === "-" || n === ".") {
      const s = this.buffer.substr(e, 3);
      if ((s === "---" || s === "...") && tn(this.buffer[e + 3])) return -1;
    }
    return e;
  }
  getLine() {
    let e = this.lineEndPos;
    return (
      (typeof e != "number" || (e !== -1 && e < this.pos)) &&
        ((e = this.buffer.indexOf(
          `
`,
          this.pos,
        )),
        (this.lineEndPos = e)),
      e === -1
        ? this.atEnd
          ? this.buffer.substring(this.pos)
          : null
        : (this.buffer[e - 1] === "\r" && (e -= 1),
          this.buffer.substring(this.pos, e))
    );
  }
  hasChars(e) {
    return this.pos + e <= this.buffer.length;
  }
  setNext(e) {
    return (
      (this.buffer = this.buffer.substring(this.pos)),
      (this.pos = 0),
      (this.lineEndPos = null),
      (this.next = e),
      null
    );
  }
  peek(e) {
    return this.buffer.substr(this.pos, e);
  }
  *parseNext(e) {
    switch (e) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let e = this.getLine();
    if (e === null) return this.setNext("stream");
    if (
      (e[0] === ya && (yield* this.pushCount(1), (e = e.substring(1))),
      e[0] === "%")
    ) {
      let n = e.length,
        s = e.indexOf("#");
      for (; s !== -1; ) {
        const l = e[s - 1];
        if (l === " " || l === "	") {
          n = s - 1;
          break;
        } else s = e.indexOf("#", s + 1);
      }
      for (;;) {
        const l = e[n - 1];
        if (l === " " || l === "	") n -= 1;
        else break;
      }
      const o = (yield* this.pushCount(n)) + (yield* this.pushSpaces(!0));
      return yield* this.pushCount(e.length - o), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(!0);
      return (
        yield* this.pushCount(e.length - n), yield* this.pushNewline(), "stream"
      );
    }
    return yield va, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const e = this.charAt(0);
    if (!e && !this.atEnd) return this.setNext("line-start");
    if (e === "-" || e === ".") {
      if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && tn(this.charAt(3)))
        return (
          yield* this.pushCount(3),
          (this.indentValue = 0),
          (this.indentNext = 0),
          n === "---" ? "doc" : "stream"
        );
    }
    return (
      (this.indentValue = yield* this.pushSpaces(!1)),
      this.indentNext > this.indentValue &&
        !tn(this.charAt(1)) &&
        (this.indentNext = this.indentValue),
      yield* this.parseBlockStart()
    );
  }
  *parseBlockStart() {
    const [e, n] = this.peek(2);
    if (!n && !this.atEnd) return this.setNext("block-start");
    if ((e === "-" || e === "?" || e === ":") && tn(n)) {
      const s = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      return (
        (this.indentNext = this.indentValue + 1),
        (this.indentValue += s),
        yield* this.parseBlockStart()
      );
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(!0);
    const e = this.getLine();
    if (e === null) return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (e[n]) {
      case "#":
        yield* this.pushCount(e.length - n);
      case void 0:
        return yield* this.pushNewline(), yield* this.parseLineStart();
      case "{":
      case "[":
        return (
          yield* this.pushCount(1),
          (this.flowKey = !1),
          (this.flowLevel = 1),
          "flow"
        );
      case "}":
      case "]":
        return yield* this.pushCount(1), "doc";
      case "*":
        return yield* this.pushUntil(Du), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return (
          (n += yield* this.parseBlockScalarHeader()),
          (n += yield* this.pushSpaces(!0)),
          yield* this.pushCount(e.length - n),
          yield* this.pushNewline(),
          yield* this.parseBlockScalar()
        );
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let e,
      n,
      s = -1;
    do
      (e = yield* this.pushNewline()),
        e > 0
          ? ((n = yield* this.pushSpaces(!1)), (this.indentValue = s = n))
          : (n = 0),
        (n += yield* this.pushSpaces(!0));
    while (e + n > 0);
    const o = this.getLine();
    if (o === null) return this.setNext("flow");
    if (
      ((s !== -1 && s < this.indentNext && o[0] !== "#") ||
        (s === 0 &&
          (o.startsWith("---") || o.startsWith("...")) &&
          tn(o[3]))) &&
      !(
        s === this.indentNext - 1 &&
        this.flowLevel === 1 &&
        (o[0] === "]" || o[0] === "}")
      )
    )
      return (this.flowLevel = 0), yield wa, yield* this.parseLineStart();
    let l = 0;
    for (; o[l] === ","; )
      (l += yield* this.pushCount(1)),
        (l += yield* this.pushSpaces(!0)),
        (this.flowKey = !1);
    switch (((l += yield* this.pushIndicators()), o[l])) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(o.length - l), "flow";
      case "{":
      case "[":
        return (
          yield* this.pushCount(1),
          (this.flowKey = !1),
          (this.flowLevel += 1),
          "flow"
        );
      case "}":
      case "]":
        return (
          yield* this.pushCount(1),
          (this.flowKey = !0),
          (this.flowLevel -= 1),
          this.flowLevel ? "flow" : "doc"
        );
      case "*":
        return yield* this.pushUntil(Du), "flow";
      case '"':
      case "'":
        return (this.flowKey = !0), yield* this.parseQuotedScalar();
      case ":": {
        const c = this.charAt(1);
        if (this.flowKey || tn(c) || c === ",")
          return (
            (this.flowKey = !1),
            yield* this.pushCount(1),
            yield* this.pushSpaces(!0),
            "flow"
          );
      }
      default:
        return (this.flowKey = !1), yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const e = this.charAt(0);
    let n = this.buffer.indexOf(e, this.pos + 1);
    if (e === "'")
      for (; n !== -1 && this.buffer[n + 1] === "'"; )
        n = this.buffer.indexOf("'", n + 2);
    else
      for (; n !== -1; ) {
        let l = 0;
        for (; this.buffer[n - 1 - l] === "\\"; ) l += 1;
        if (l % 2 === 0) break;
        n = this.buffer.indexOf('"', n + 1);
      }
    const s = this.buffer.substring(0, n);
    let o = s.indexOf(
      `
`,
      this.pos,
    );
    if (o !== -1) {
      for (; o !== -1; ) {
        const l = this.continueScalar(o + 1);
        if (l === -1) break;
        o = s.indexOf(
          `
`,
          l,
        );
      }
      o !== -1 && (n = o - (s[o - 1] === "\r" ? 2 : 1));
    }
    if (n === -1) {
      if (!this.atEnd) return this.setNext("quoted-scalar");
      n = this.buffer.length;
    }
    return yield* this.pushToIndex(n + 1, !1), this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    (this.blockScalarIndent = -1), (this.blockScalarKeep = !1);
    let e = this.pos;
    for (;;) {
      const n = this.buffer[++e];
      if (n === "+") this.blockScalarKeep = !0;
      else if (n > "0" && n <= "9") this.blockScalarIndent = Number(n) - 1;
      else if (n !== "-") break;
    }
    return yield* this.pushUntil((n) => tn(n) || n === "#");
  }
  *parseBlockScalar() {
    let e = this.pos - 1,
      n = 0,
      s;
    e: for (let l = this.pos; (s = this.buffer[l]); ++l)
      switch (s) {
        case " ":
          n += 1;
          break;
        case `
`:
          (e = l), (n = 0);
          break;
        case "\r": {
          const c = this.buffer[l + 1];
          if (!c && !this.atEnd) return this.setNext("block-scalar");
          if (
            c ===
            `
`
          )
            break;
        }
        default:
          break e;
      }
    if (!s && !this.atEnd) return this.setNext("block-scalar");
    if (n >= this.indentNext) {
      this.blockScalarIndent === -1
        ? (this.indentNext = n)
        : (this.indentNext =
            this.blockScalarIndent +
            (this.indentNext === 0 ? 1 : this.indentNext));
      do {
        const l = this.continueScalar(e + 1);
        if (l === -1) break;
        e = this.buffer.indexOf(
          `
`,
          l,
        );
      } while (e !== -1);
      if (e === -1) {
        if (!this.atEnd) return this.setNext("block-scalar");
        e = this.buffer.length;
      }
    }
    let o = e + 1;
    for (s = this.buffer[o]; s === " "; ) s = this.buffer[++o];
    if (s === "	") {
      for (
        ;
        s === "	" ||
        s === " " ||
        s === "\r" ||
        s ===
          `
`;

      )
        s = this.buffer[++o];
      e = o - 1;
    } else if (!this.blockScalarKeep)
      do {
        let l = e - 1,
          c = this.buffer[l];
        c === "\r" && (c = this.buffer[--l]);
        const u = l;
        for (; c === " "; ) c = this.buffer[--l];
        if (
          c ===
            `
` &&
          l >= this.pos &&
          l + 1 + n > u
        )
          e = l;
        else break;
      } while (!0);
    return (
      yield Xi, yield* this.pushToIndex(e + 1, !0), yield* this.parseLineStart()
    );
  }
  *parsePlainScalar() {
    const e = this.flowLevel > 0;
    let n = this.pos - 1,
      s = this.pos - 1,
      o;
    for (; (o = this.buffer[++s]); )
      if (o === ":") {
        const l = this.buffer[s + 1];
        if (tn(l) || (e && _l.has(l))) break;
        n = s;
      } else if (tn(o)) {
        let l = this.buffer[s + 1];
        if (
          (o === "\r" &&
            (l ===
            `
`
              ? ((s += 1),
                (o = `
`),
                (l = this.buffer[s + 1]))
              : (n = s)),
          l === "#" || (e && _l.has(l)))
        )
          break;
        if (
          o ===
          `
`
        ) {
          const c = this.continueScalar(s + 1);
          if (c === -1) break;
          s = Math.max(s, c - 2);
        }
      } else {
        if (e && _l.has(o)) break;
        n = s;
      }
    return !o && !this.atEnd
      ? this.setNext("plain-scalar")
      : (yield Xi, yield* this.pushToIndex(n + 1, !0), e ? "flow" : "doc");
  }
  *pushCount(e) {
    return e > 0
      ? (yield this.buffer.substr(this.pos, e), (this.pos += e), e)
      : 0;
  }
  *pushToIndex(e, n) {
    const s = this.buffer.slice(this.pos, e);
    return s
      ? (yield s, (this.pos += s.length), s.length)
      : (n && (yield ""), 0);
  }
  *pushIndicators() {
    switch (this.charAt(0)) {
      case "!":
        return (
          (yield* this.pushTag()) +
          (yield* this.pushSpaces(!0)) +
          (yield* this.pushIndicators())
        );
      case "&":
        return (
          (yield* this.pushUntil(Du)) +
          (yield* this.pushSpaces(!0)) +
          (yield* this.pushIndicators())
        );
      case "-":
      case "?":
      case ":": {
        const e = this.flowLevel > 0,
          n = this.charAt(1);
        if (tn(n) || (e && _l.has(n)))
          return (
            e
              ? this.flowKey && (this.flowKey = !1)
              : (this.indentNext = this.indentValue + 1),
            (yield* this.pushCount(1)) +
              (yield* this.pushSpaces(!0)) +
              (yield* this.pushIndicators())
          );
      }
    }
    return 0;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let e = this.pos + 2,
        n = this.buffer[e];
      for (; !tn(n) && n !== ">"; ) n = this.buffer[++e];
      return yield* this.pushToIndex(n === ">" ? e + 1 : e, !1);
    } else {
      let e = this.pos + 1,
        n = this.buffer[e];
      for (; n; )
        if (Mb.has(n)) n = this.buffer[++e];
        else if (
          n === "%" &&
          zm.has(this.buffer[e + 1]) &&
          zm.has(this.buffer[e + 2])
        )
          n = this.buffer[(e += 3)];
        else break;
      return yield* this.pushToIndex(e, !1);
    }
  }
  *pushNewline() {
    const e = this.buffer[this.pos];
    return e ===
      `
`
      ? yield* this.pushCount(1)
      : e === "\r" &&
          this.charAt(1) ===
            `
`
        ? yield* this.pushCount(2)
        : 0;
  }
  *pushSpaces(e) {
    let n = this.pos - 1,
      s;
    do s = this.buffer[++n];
    while (s === " " || (e && s === "	"));
    const o = n - this.pos;
    return o > 0 && (yield this.buffer.substr(this.pos, o), (this.pos = n)), o;
  }
  *pushUntil(e) {
    let n = this.pos,
      s = this.buffer[n];
    for (; !e(s); ) s = this.buffer[++n];
    return yield* this.pushToIndex(n, !1);
  }
}
class Hv {
  constructor() {
    (this.lineStarts = []),
      (this.addNewLine = (e) => this.lineStarts.push(e)),
      (this.linePos = (e) => {
        let n = 0,
          s = this.lineStarts.length;
        for (; n < s; ) {
          const l = (n + s) >> 1;
          this.lineStarts[l] < e ? (n = l + 1) : (s = l);
        }
        if (this.lineStarts[n] === e) return { line: n + 1, col: 1 };
        if (n === 0) return { line: 0, col: e };
        const o = this.lineStarts[n - 1];
        return { line: n, col: e - o + 1 };
      });
  }
}
function Er(t, e) {
  for (let n = 0; n < t.length; ++n) if (t[n].type === e) return !0;
  return !1;
}
function Bm(t) {
  for (let e = 0; e < t.length; ++e)
    switch (t[e].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return e;
    }
  return -1;
}
function qv(t) {
  switch (t == null ? void 0 : t.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return !0;
    default:
      return !1;
  }
}
function kl(t) {
  switch (t.type) {
    case "document":
      return t.start;
    case "block-map": {
      const e = t.items[t.items.length - 1];
      return e.sep ?? e.start;
    }
    case "block-seq":
      return t.items[t.items.length - 1].start;
    default:
      return [];
  }
}
function ds(t) {
  var n;
  if (t.length === 0) return [];
  let e = t.length;
  e: for (; --e >= 0; )
    switch (t[e].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e;
    }
  for (; ((n = t[++e]) == null ? void 0 : n.type) === "space"; );
  return t.splice(e, t.length);
}
function Um(t) {
  if (t.start.type === "flow-seq-start")
    for (const e of t.items)
      e.sep &&
        !e.value &&
        !Er(e.start, "explicit-key-ind") &&
        !Er(e.sep, "map-value-ind") &&
        (e.key && (e.value = e.key),
        delete e.key,
        qv(e.value)
          ? e.value.end
            ? Array.prototype.push.apply(e.value.end, e.sep)
            : (e.value.end = e.sep)
          : Array.prototype.push.apply(e.start, e.sep),
        delete e.sep);
}
class qf {
  constructor(e) {
    (this.atNewLine = !0),
      (this.atScalar = !1),
      (this.indent = 0),
      (this.offset = 0),
      (this.onKeyLine = !1),
      (this.stack = []),
      (this.source = ""),
      (this.type = ""),
      (this.lexer = new Uv()),
      (this.onNewLine = e);
  }
  *parse(e, n = !1) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const s of this.lexer.lex(e, n)) yield* this.next(s);
    n || (yield* this.end());
  }
  *next(e) {
    if (((this.source = e), this.atScalar)) {
      (this.atScalar = !1), yield* this.step(), (this.offset += e.length);
      return;
    }
    const n = Bv(e);
    if (n)
      if (n === "scalar")
        (this.atNewLine = !1), (this.atScalar = !0), (this.type = "scalar");
      else {
        switch (((this.type = n), yield* this.step(), n)) {
          case "newline":
            (this.atNewLine = !0),
              (this.indent = 0),
              this.onNewLine && this.onNewLine(this.offset + e.length);
            break;
          case "space":
            this.atNewLine && e[0] === " " && (this.indent += e.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += e.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += e.length;
      }
    else {
      const s = `Not a YAML token: ${e}`;
      yield* this.pop({
        type: "error",
        offset: this.offset,
        message: s,
        source: e,
      }),
        (this.offset += e.length);
    }
  }
  *end() {
    for (; this.stack.length > 0; ) yield* this.pop();
  }
  get sourceToken() {
    return {
      type: this.type,
      offset: this.offset,
      indent: this.indent,
      source: this.source,
    };
  }
  *step() {
    const e = this.peek(1);
    if (this.type === "doc-end" && (!e || e.type !== "doc-end")) {
      for (; this.stack.length > 0; ) yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source,
      });
      return;
    }
    if (!e) return yield* this.stream();
    switch (e.type) {
      case "document":
        return yield* this.document(e);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(e);
      case "block-scalar":
        return yield* this.blockScalar(e);
      case "block-map":
        return yield* this.blockMap(e);
      case "block-seq":
        return yield* this.blockSequence(e);
      case "flow-collection":
        return yield* this.flowCollection(e);
      case "doc-end":
        return yield* this.documentEnd(e);
    }
    yield* this.pop();
  }
  peek(e) {
    return this.stack[this.stack.length - e];
  }
  *pop(e) {
    const n = e ?? this.stack.pop();
    if (!n)
      yield {
        type: "error",
        offset: this.offset,
        source: "",
        message: "Tried to pop an empty stack",
      };
    else if (this.stack.length === 0) yield n;
    else {
      const s = this.peek(1);
      switch (
        (n.type === "block-scalar"
          ? (n.indent = "indent" in s ? s.indent : 0)
          : n.type === "flow-collection" &&
            s.type === "document" &&
            (n.indent = 0),
        n.type === "flow-collection" && Um(n),
        s.type)
      ) {
        case "document":
          s.value = n;
          break;
        case "block-scalar":
          s.props.push(n);
          break;
        case "block-map": {
          const o = s.items[s.items.length - 1];
          if (o.value) {
            s.items.push({ start: [], key: n, sep: [] }), (this.onKeyLine = !0);
            return;
          } else if (o.sep) o.value = n;
          else {
            Object.assign(o, { key: n, sep: [] }),
              (this.onKeyLine = !o.explicitKey);
            return;
          }
          break;
        }
        case "block-seq": {
          const o = s.items[s.items.length - 1];
          o.value ? s.items.push({ start: [], value: n }) : (o.value = n);
          break;
        }
        case "flow-collection": {
          const o = s.items[s.items.length - 1];
          !o || o.value
            ? s.items.push({ start: [], key: n, sep: [] })
            : o.sep
              ? (o.value = n)
              : Object.assign(o, { key: n, sep: [] });
          return;
        }
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if (
        (s.type === "document" ||
          s.type === "block-map" ||
          s.type === "block-seq") &&
        (n.type === "block-map" || n.type === "block-seq")
      ) {
        const o = n.items[n.items.length - 1];
        o &&
          !o.sep &&
          !o.value &&
          o.start.length > 0 &&
          Bm(o.start) === -1 &&
          (n.indent === 0 ||
            o.start.every(
              (l) => l.type !== "comment" || l.indent < n.indent,
            )) &&
          (s.type === "document"
            ? (s.end = o.start)
            : s.items.push({ start: o.start }),
          n.items.splice(-1, 1));
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        const e = { type: "document", offset: this.offset, start: [] };
        this.type === "doc-start" && e.start.push(this.sourceToken),
          this.stack.push(e);
        return;
      }
    }
    yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source,
    };
  }
  *document(e) {
    if (e.value) return yield* this.lineEnd(e);
    switch (this.type) {
      case "doc-start": {
        Bm(e.start) !== -1
          ? (yield* this.pop(), yield* this.step())
          : e.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        e.start.push(this.sourceToken);
        return;
    }
    const n = this.startBlockValue(e);
    n
      ? this.stack.push(n)
      : yield {
          type: "error",
          offset: this.offset,
          message: `Unexpected ${this.type} token in YAML document`,
          source: this.source,
        };
  }
  *scalar(e) {
    if (this.type === "map-value-ind") {
      const n = kl(this.peek(2)),
        s = ds(n);
      let o;
      e.end
        ? ((o = e.end), o.push(this.sourceToken), delete e.end)
        : (o = [this.sourceToken]);
      const l = {
        type: "block-map",
        offset: e.offset,
        indent: e.indent,
        items: [{ start: s, key: e, sep: o }],
      };
      (this.onKeyLine = !0), (this.stack[this.stack.length - 1] = l);
    } else yield* this.lineEnd(e);
  }
  *blockScalar(e) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        e.props.push(this.sourceToken);
        return;
      case "scalar":
        if (
          ((e.source = this.source),
          (this.atNewLine = !0),
          (this.indent = 0),
          this.onNewLine)
        ) {
          let n =
            this.source.indexOf(`
`) + 1;
          for (; n !== 0; )
            this.onNewLine(this.offset + n),
              (n =
                this.source.indexOf(
                  `
`,
                  n,
                ) + 1);
        }
        yield* this.pop();
        break;
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(e) {
    var s;
    const n = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (((this.onKeyLine = !1), n.value)) {
          const o = "end" in n.value ? n.value.end : void 0,
            l = Array.isArray(o) ? o[o.length - 1] : void 0;
          (l == null ? void 0 : l.type) === "comment"
            ? o == null || o.push(this.sourceToken)
            : e.items.push({ start: [this.sourceToken] });
        } else
          n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value) e.items.push({ start: [this.sourceToken] });
        else if (n.sep) n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            const o = e.items[e.items.length - 2],
              l = (s = o == null ? void 0 : o.value) == null ? void 0 : s.end;
            if (Array.isArray(l)) {
              Array.prototype.push.apply(l, n.start),
                l.push(this.sourceToken),
                e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= e.indent) {
      const o = !this.onKeyLine && this.indent === e.indent,
        l = o && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let c = [];
      if (l && n.sep && !n.value) {
        const u = [];
        for (let d = 0; d < n.sep.length; ++d) {
          const p = n.sep[d];
          switch (p.type) {
            case "newline":
              u.push(d);
              break;
            case "space":
              break;
            case "comment":
              p.indent > e.indent && (u.length = 0);
              break;
            default:
              u.length = 0;
          }
        }
        u.length >= 2 && (c = n.sep.splice(u[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          l || n.value
            ? (c.push(this.sourceToken),
              e.items.push({ start: c }),
              (this.onKeyLine = !0))
            : n.sep
              ? n.sep.push(this.sourceToken)
              : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey
            ? (n.start.push(this.sourceToken), (n.explicitKey = !0))
            : l || n.value
              ? (c.push(this.sourceToken),
                e.items.push({ start: c, explicitKey: !0 }))
              : this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: [this.sourceToken], explicitKey: !0 }],
                }),
            (this.onKeyLine = !0);
          return;
        case "map-value-ind":
          if (n.explicitKey)
            if (n.sep)
              if (n.value)
                e.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (Er(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: c, key: null, sep: [this.sourceToken] }],
                });
              else if (qv(n.key) && !Er(n.sep, "newline")) {
                const u = ds(n.start),
                  d = n.key,
                  p = n.sep;
                p.push(this.sourceToken),
                  delete n.key,
                  delete n.sep,
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: u, key: d, sep: p }],
                  });
              } else
                c.length > 0
                  ? (n.sep = n.sep.concat(c, this.sourceToken))
                  : n.sep.push(this.sourceToken);
            else if (Er(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const u = ds(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: u, key: null, sep: [this.sourceToken] }],
              });
            }
          else
            n.sep
              ? n.value || l
                ? e.items.push({ start: c, key: null, sep: [this.sourceToken] })
                : Er(n.sep, "map-value-ind")
                  ? this.stack.push({
                      type: "block-map",
                      offset: this.offset,
                      indent: this.indent,
                      items: [
                        { start: [], key: null, sep: [this.sourceToken] },
                      ],
                    })
                  : n.sep.push(this.sourceToken)
              : Object.assign(n, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = !0;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const u = this.flowScalar(this.type);
          l || n.value
            ? (e.items.push({ start: c, key: u, sep: [] }),
              (this.onKeyLine = !0))
            : n.sep
              ? this.stack.push(u)
              : (Object.assign(n, { key: u, sep: [] }), (this.onKeyLine = !0));
          return;
        }
        default: {
          const u = this.startBlockValue(e);
          if (u) {
            o && u.type !== "block-seq" && e.items.push({ start: c }),
              this.stack.push(u);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(e) {
    var s;
    const n = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const o = "end" in n.value ? n.value.end : void 0,
            l = Array.isArray(o) ? o[o.length - 1] : void 0;
          (l == null ? void 0 : l.type) === "comment"
            ? o == null || o.push(this.sourceToken)
            : e.items.push({ start: [this.sourceToken] });
        } else n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value) e.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            const o = e.items[e.items.length - 2],
              l = (s = o == null ? void 0 : o.value) == null ? void 0 : s.end;
            if (Array.isArray(l)) {
              Array.prototype.push.apply(l, n.start),
                l.push(this.sourceToken),
                e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (n.value || this.indent <= e.indent) break;
        n.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== e.indent) break;
        n.value || Er(n.start, "seq-item-ind")
          ? e.items.push({ start: [this.sourceToken] })
          : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > e.indent) {
      const o = this.startBlockValue(e);
      if (o) {
        this.stack.push(o);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(e) {
    const n = e.items[e.items.length - 1];
    if (this.type === "flow-error-end") {
      let s;
      do yield* this.pop(), (s = this.peek(1));
      while (s && s.type === "flow-collection");
    } else if (e.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !n || n.sep
            ? e.items.push({ start: [this.sourceToken] })
            : n.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !n || n.value
            ? e.items.push({ start: [], key: null, sep: [this.sourceToken] })
            : n.sep
              ? n.sep.push(this.sourceToken)
              : Object.assign(n, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !n || n.value
            ? e.items.push({ start: [this.sourceToken] })
            : n.sep
              ? n.sep.push(this.sourceToken)
              : n.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const o = this.flowScalar(this.type);
          !n || n.value
            ? e.items.push({ start: [], key: o, sep: [] })
            : n.sep
              ? this.stack.push(o)
              : Object.assign(n, { key: o, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          e.end.push(this.sourceToken);
          return;
      }
      const s = this.startBlockValue(e);
      s ? this.stack.push(s) : (yield* this.pop(), yield* this.step());
    } else {
      const s = this.peek(2);
      if (
        s.type === "block-map" &&
        ((this.type === "map-value-ind" && s.indent === e.indent) ||
          (this.type === "newline" && !s.items[s.items.length - 1].sep))
      )
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && s.type !== "flow-collection") {
        const o = kl(s),
          l = ds(o);
        Um(e);
        const c = e.end.splice(1, e.end.length);
        c.push(this.sourceToken);
        const u = {
          type: "block-map",
          offset: e.offset,
          indent: e.indent,
          items: [{ start: l, key: e, sep: c }],
        };
        (this.onKeyLine = !0), (this.stack[this.stack.length - 1] = u);
      } else yield* this.lineEnd(e);
    }
  }
  flowScalar(e) {
    if (this.onNewLine) {
      let n =
        this.source.indexOf(`
`) + 1;
      for (; n !== 0; )
        this.onNewLine(this.offset + n),
          (n =
            this.source.indexOf(
              `
`,
              n,
            ) + 1);
    }
    return {
      type: e,
      offset: this.offset,
      indent: this.indent,
      source: this.source,
    };
  }
  startBlockValue(e) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return {
          type: "block-scalar",
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: "",
        };
      case "flow-map-start":
      case "flow-seq-start":
        return {
          type: "flow-collection",
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: [],
        };
      case "seq-item-ind":
        return {
          type: "block-seq",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: [this.sourceToken] }],
        };
      case "explicit-key-ind": {
        this.onKeyLine = !0;
        const n = kl(e),
          s = ds(n);
        return (
          s.push(this.sourceToken),
          {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: s, explicitKey: !0 }],
          }
        );
      }
      case "map-value-ind": {
        this.onKeyLine = !0;
        const n = kl(e),
          s = ds(n);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: s, key: null, sep: [this.sourceToken] }],
        };
      }
    }
    return null;
  }
  atIndentedComment(e, n) {
    return this.type !== "comment" || this.indent <= n
      ? !1
      : e.every((s) => s.type === "newline" || s.type === "space");
  }
  *documentEnd(e) {
    this.type !== "doc-mode" &&
      (e.end ? e.end.push(this.sourceToken) : (e.end = [this.sourceToken]),
      this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(e) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop(), yield* this.step();
        break;
      case "newline":
        this.onKeyLine = !1;
      case "space":
      case "comment":
      default:
        e.end ? e.end.push(this.sourceToken) : (e.end = [this.sourceToken]),
          this.type === "newline" && (yield* this.pop());
    }
  }
}
function Vv(t) {
  const e = t.prettyErrors !== !1;
  return {
    lineCounter: t.lineCounter || (e && new Hv()) || null,
    prettyErrors: e,
  };
}
function $b(t, e = {}) {
  const { lineCounter: n, prettyErrors: s } = Vv(e),
    o = new qf(n == null ? void 0 : n.addNewLine),
    l = new Hf(e),
    c = Array.from(l.compose(o.parse(t)));
  if (s && n)
    for (const u of c) u.errors.forEach(Gl(t, n)), u.warnings.forEach(Gl(t, n));
  return c.length > 0 ? c : Object.assign([], { empty: !0 }, l.streamInfo());
}
function Wv(t, e = {}) {
  const { lineCounter: n, prettyErrors: s } = Vv(e),
    o = new qf(n == null ? void 0 : n.addNewLine),
    l = new Hf(e);
  let c = null;
  for (const u of l.compose(o.parse(t), !0, t.length))
    if (!c) c = u;
    else if (c.options.logLevel !== "silent") {
      c.errors.push(
        new Nr(
          u.range.slice(0, 2),
          "MULTIPLE_DOCS",
          "Source contains multiple documents; please use YAML.parseAllDocuments()",
        ),
      );
      break;
    }
  return (
    s && n && (c.errors.forEach(Gl(t, n)), c.warnings.forEach(Gl(t, n))), c
  );
}
function Pb(t, e, n) {
  let s;
  typeof e == "function"
    ? (s = e)
    : n === void 0 && e && typeof e == "object" && (n = e);
  const o = Wv(t, n);
  if (!o) return null;
  if (
    (o.warnings.forEach((l) => dv(o.options.logLevel, l)), o.errors.length > 0)
  ) {
    if (o.options.logLevel !== "silent") throw o.errors[0];
    o.errors = [];
  }
  return o.toJS(Object.assign({ reviver: s }, n));
}
function Rb(t, e, n) {
  let s = null;
  if (
    (typeof e == "function" || Array.isArray(e)
      ? (s = e)
      : n === void 0 && e && (n = e),
    typeof n == "string" && (n = n.length),
    typeof n == "number")
  ) {
    const o = Math.round(n);
    n = o < 1 ? void 0 : o > 8 ? { indent: 8 } : { indent: o };
  }
  if (t === void 0) {
    const { keepUndefined: o } = n ?? e ?? {};
    if (!o) return;
  }
  return Or(t) && !s ? t.toString(n) : new Fs(t, s, n).toString(n);
}
const Kv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Alias: la,
        CST: jb,
        Composer: Hf,
        Document: Fs,
        Lexer: Uv,
        LineCounter: Hv,
        Pair: at,
        Parser: qf,
        Scalar: he,
        Schema: ga,
        YAMLError: Bf,
        YAMLMap: Ot,
        YAMLParseError: Nr,
        YAMLSeq: ir,
        YAMLWarning: Iv,
        isAlias: Mr,
        isCollection: Re,
        isDocument: Or,
        isMap: $s,
        isNode: De,
        isPair: Oe,
        isScalar: be,
        isSeq: Ps,
        parse: Pb,
        parseAllDocuments: $b,
        parseDocument: Wv,
        stringify: Rb,
        visit: sr,
        visitAsync: oa,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Db = ({
    action: t,
    sdkLanguage: e,
    testIdAttributeName: n,
    isInspecting: s,
    setIsInspecting: o,
    highlightedElement: l,
    setHighlightedElement: c,
  }) => {
    const [u, d] = P.useState("action"),
      [p, y] = bs("shouldPopulateCanvasFromScreenshot", !1),
      v = P.useMemo(() => Ub(t), [t]),
      m = P.useMemo(() => {
        const w = v[u];
        return w ? qb(w, p) : void 0;
      }, [v, u, p]);
    return x.jsxs("div", {
      className: "snapshot-tab vbox",
      children: [
        x.jsxs(df, {
          children: [
            x.jsx(Vt, {
              className: "pick-locator",
              title: "Pick locator",
              icon: "target",
              toggled: s,
              onClick: () => o(!s),
            }),
            ["action", "before", "after"].map((w) =>
              x.jsx(
                Qg,
                {
                  id: w,
                  title: Bb(w),
                  selected: u === w,
                  onSelect: () => d(w),
                },
                w,
              ),
            ),
            x.jsx("div", { style: { flex: "auto" } }),
            x.jsx(Vt, {
              icon: "link-external",
              title: "Open snapshot in a new tab",
              disabled: !(m != null && m.popoutUrl),
              onClick: () => {
                const w = window.open(
                  (m == null ? void 0 : m.popoutUrl) || "",
                  "_blank",
                );
                w == null ||
                  w.addEventListener("DOMContentLoaded", () => {
                    const _ = new Ky(w, !1, e, n, 1, "chromium", []);
                    new EE(_);
                  });
              },
            }),
          ],
        }),
        x.jsx(Fb, {
          snapshotUrls: m,
          sdkLanguage: e,
          testIdAttributeName: n,
          isInspecting: s,
          setIsInspecting: o,
          highlightedElement: l,
          setHighlightedElement: c,
        }),
      ],
    });
  },
  Fb = ({
    snapshotUrls: t,
    sdkLanguage: e,
    testIdAttributeName: n,
    isInspecting: s,
    setIsInspecting: o,
    highlightedElement: l,
    setHighlightedElement: c,
  }) => {
    const u = P.useRef(null),
      d = P.useRef(null),
      [p, y] = P.useState({ viewport: Xv, url: "" }),
      v = P.useRef({ iteration: 0, visibleIframe: 0 });
    return (
      P.useEffect(() => {
        (async () => {
          const m = v.current.iteration + 1,
            w = 1 - v.current.visibleIframe;
          v.current.iteration = m;
          const _ = await Vb(t == null ? void 0 : t.snapshotInfoUrl);
          if (v.current.iteration !== m) return;
          const S = [u, d][w].current;
          if (S) {
            let E = () => {};
            const T = new Promise((C) => (E = C));
            try {
              S.addEventListener("load", E), S.addEventListener("error", E);
              const C = (t == null ? void 0 : t.snapshotUrl) || Wb;
              S.contentWindow
                ? S.contentWindow.location.replace(C)
                : (S.src = C),
                await T;
            } catch {
            } finally {
              S.removeEventListener("load", E),
                S.removeEventListener("error", E);
            }
          }
          v.current.iteration === m && ((v.current.visibleIframe = w), y(_));
        })();
      }, [t]),
      x.jsxs("div", {
        className: "vbox",
        tabIndex: 0,
        onKeyDown: (m) => {
          m.key === "Escape" && s && o(!1);
        },
        children: [
          x.jsx(Hm, {
            isInspecting: s,
            sdkLanguage: e,
            testIdAttributeName: n,
            highlightedElement: l,
            setHighlightedElement: c,
            iframe: u.current,
            iteration: v.current.iteration,
          }),
          x.jsx(Hm, {
            isInspecting: s,
            sdkLanguage: e,
            testIdAttributeName: n,
            highlightedElement: l,
            setHighlightedElement: c,
            iframe: d.current,
            iteration: v.current.iteration,
          }),
          x.jsx(zb, {
            snapshotInfo: p,
            children: x.jsxs("div", {
              className: "snapshot-switcher",
              children: [
                x.jsx("iframe", {
                  ref: u,
                  name: "snapshot",
                  title: "DOM Snapshot",
                  className: ze(
                    v.current.visibleIframe === 0 && "snapshot-visible",
                  ),
                }),
                x.jsx("iframe", {
                  ref: d,
                  name: "snapshot",
                  title: "DOM Snapshot",
                  className: ze(
                    v.current.visibleIframe === 1 && "snapshot-visible",
                  ),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  zb = ({ snapshotInfo: t, children: e }) => {
    const [n, s] = Lr(),
      l = { width: t.viewport.width, height: t.viewport.height + 40 },
      c = Math.min(n.width / l.width, n.height / l.height, 1),
      u = { x: (n.width - l.width) / 2, y: (n.height - l.height) / 2 };
    return x.jsx("div", {
      ref: s,
      className: "snapshot-wrapper",
      children: x.jsxs("div", {
        className: "snapshot-container",
        style: {
          width: l.width + "px",
          height: l.height + "px",
          transform: `translate(${u.x}px, ${u.y}px) scale(${c})`,
        },
        children: [x.jsx(CE, { url: t.url }), e],
      }),
    });
  };
function Bb(t) {
  return t === "before"
    ? "Before"
    : t === "after"
      ? "After"
      : t === "action"
        ? "Action"
        : t;
}
const Hm = ({
  iframe: t,
  isInspecting: e,
  sdkLanguage: n,
  testIdAttributeName: s,
  highlightedElement: o,
  setHighlightedElement: l,
  iteration: c,
}) => (
  P.useEffect(() => {
    const u = [],
      d =
        new URLSearchParams(window.location.search).get("isUnderTest") ===
        "true";
    try {
      Qv(u, n, s, d, "", t == null ? void 0 : t.contentWindow);
    } catch {}
    const p =
        o.lastEdited === "ariaSnapshot" && o.ariaSnapshot
          ? hf(Kv, o.ariaSnapshot)
          : void 0,
      y =
        o.lastEdited === "locator" && o.locator ? TE(n, o.locator, s) : void 0;
    for (const { recorder: v, frameSelector: m } of u) {
      const w =
          y != null && y.startsWith(m) ? y.substring(m.length).trim() : void 0,
        _ = (p == null ? void 0 : p.errors.length) === 0 ? p.fragment : void 0;
      v.setUIState(
        {
          mode: e ? "inspecting" : "none",
          actionSelector: w,
          ariaTemplate: _,
          language: n,
          testIdAttributeName: s,
          overlay: { offsetX: 0 },
        },
        {
          async elementPicked(S) {
            l({
              locator: nr(n, m + S.selector),
              ariaSnapshot: S.ariaSnapshot,
              lastEdited: "none",
            });
          },
          highlightUpdated() {
            for (const S of u) S.recorder !== v && S.recorder.clearHighlight();
          },
        },
      );
    }
  }, [t, e, o, l, n, s, c]),
  x.jsx(x.Fragment, {})
);
function Qv(t, e, n, s, o, l) {
  if (!l) return;
  const c = l;
  if (!c._recorder) {
    const u = new Ky(l, s, e, n, 1, "chromium", []),
      d = new fE(u);
    (c._injectedScript = u),
      (c._recorder = { recorder: d, frameSelector: o }),
      s &&
        ((window._weakRecordersForTest =
          window._weakRecordersForTest || new Set()),
        window._weakRecordersForTest.add(new WeakRef(d)));
  }
  t.push(c._recorder);
  for (let u = 0; u < l.frames.length; ++u) {
    const d = l.frames[u],
      p = d.frameElement
        ? c._injectedScript.generateSelectorSimple(d.frameElement, {
            omitInternalEngines: !0,
            testIdAttributeName: n,
          }) + " >> internal:control=enter-frame >> "
        : "";
    Qv(t, e, n, s, o + p, d);
  }
}
function Ub(t) {
  if (!t) return {};
  let e = t.beforeSnapshot
      ? { action: t, snapshotName: t.beforeSnapshot }
      : void 0,
    n = t;
  for (; !e && n; )
    (n = x1(n)),
      (e =
        n != null && n.afterSnapshot
          ? { action: n, snapshotName: n == null ? void 0 : n.afterSnapshot }
          : void 0);
  const s = t.afterSnapshot ? { action: t, snapshotName: t.afterSnapshot } : e,
    o = t.inputSnapshot
      ? { action: t, snapshotName: t.inputSnapshot, hasInputTarget: !0 }
      : s;
  return o && (o.point = t.point), { action: o, before: e, after: s };
}
const Hb = new URLSearchParams(window.location.search).has("isUnderTest"),
  qm = new URLSearchParams(window.location.search).get("server");
function qb(t, e) {
  const n = new URLSearchParams();
  n.set("trace", Dl(t.action).traceUrl),
    n.set("name", t.snapshotName),
    Hb && n.set("isUnderTest", "true"),
    t.point &&
      (n.set("pointX", String(t.point.x)),
      n.set("pointY", String(t.point.y)),
      t.hasInputTarget && n.set("hasInputTarget", "1")),
    e && n.set("shouldPopulateCanvasFromScreenshot", "1");
  const s = new URL(
      `snapshot/${t.action.pageId}?${n.toString()}`,
      window.location.href,
    ).toString(),
    o = new URL(
      `snapshotInfo/${t.action.pageId}?${n.toString()}`,
      window.location.href,
    ).toString(),
    l = new URLSearchParams();
  l.set("r", s),
    qm && l.set("server", qm),
    l.set("trace", Dl(t.action).traceUrl),
    t.point &&
      (l.set("pointX", String(t.point.x)),
      l.set("pointY", String(t.point.y)),
      t.hasInputTarget && n.set("hasInputTarget", "1"));
  const c = new URL(
    `snapshot.html?${l.toString()}`,
    window.location.href,
  ).toString();
  return { snapshotInfoUrl: o, snapshotUrl: s, popoutUrl: c };
}
async function Vb(t) {
  const e = { url: "", viewport: Xv, timestamp: void 0, wallTime: void 0 };
  if (t) {
    const s = await (await fetch(t)).json();
    s.error ||
      ((e.url = s.url),
      (e.viewport = s.viewport),
      (e.timestamp = s.timestamp),
      (e.wallTime = s.wallTime));
  }
  return e;
}
const Xv = { width: 1280, height: 720 },
  Wb = 'data:text/html,<body style="background: #ddd"></body>',
  Kb = ta,
  Qb = ({ stack: t, setSelectedFrame: e, selectedFrame: n }) => {
    const s = t || [];
    return x.jsx(Kb, {
      name: "stack-trace",
      items: s,
      selectedItem: s[n],
      render: (o) => {
        const l = o.file[1] === ":" ? "\\" : "/";
        return x.jsxs(x.Fragment, {
          children: [
            x.jsx("span", {
              className: "stack-trace-frame-function",
              children: o.function || "(anonymous)",
            }),
            x.jsx("span", {
              className: "stack-trace-frame-location",
              children: o.file.split(l).pop(),
            }),
            x.jsx("span", {
              className: "stack-trace-frame-line",
              children: ":" + o.line,
            }),
          ],
        });
      },
      onSelected: (o) => e(s.indexOf(o)),
    });
  };
function Xb(t, e, n, s, o) {
  return Vm(
    async () => {
      var w, _, S, E;
      const l = t == null ? void 0 : t[e],
        c = !(l != null && l.file);
      if (c && !o)
        return {
          source: { file: "", errors: [], content: void 0 },
          targetLine: 0,
          highlight: [],
        };
      const u = c ? o.file : l.file;
      let d = n.get(u);
      d ||
        ((d = {
          errors:
            ((w = o == null ? void 0 : o.source) == null ? void 0 : w.errors) ||
            [],
          content:
            (_ = o == null ? void 0 : o.source) == null ? void 0 : _.content,
        }),
        n.set(u, d));
      const p = c ? o : l,
        y = c
          ? (o == null ? void 0 : o.line) ||
            ((S = d.errors[0]) == null ? void 0 : S.line) ||
            0
          : l.line,
        v = s && u.startsWith(s) ? u.substring(s.length + 1) : u,
        m = d.errors.map((T) => ({
          type: "error",
          line: T.line,
          message: T.message,
        }));
      if (
        (m.push({ line: y, type: "running" }),
        ((E = o == null ? void 0 : o.source) == null ? void 0 : E.content) !==
          void 0)
      )
        d.content = o.source.content;
      else if (d.content === void 0 || c) {
        const T = await Jb(u);
        try {
          let C = await fetch(`sha1/src@${T}.txt`);
          C.status === 404 &&
            (C = await fetch(`file?path=${encodeURIComponent(u)}`)),
            C.status >= 400
              ? (d.content = `<Unable to read "${u}">`)
              : (d.content = await C.text());
        } catch {
          d.content = `<Unable to read "${u}">`;
        }
      }
      return {
        source: d,
        highlight: m,
        targetLine: y,
        fileName: v,
        location: p,
      };
    },
    [t, e, s, o],
    { source: { errors: [], content: "Loading…" }, highlight: [] },
  );
}
const Gb = ({
  stack: t,
  sources: e,
  rootDir: n,
  fallbackLocation: s,
  stackFrameLocation: o,
  onOpenExternally: l,
}) => {
  const [c, u] = P.useState(),
    [d, p] = P.useState(0);
  P.useEffect(() => {
    c !== t && (u(t), p(0));
  }, [t, c, u, p]);
  const {
      source: y,
      highlight: v,
      targetLine: m,
      fileName: w,
      location: _,
    } = Xb(t, d, e, n, s),
    S = P.useCallback(() => {
      _ &&
        (l
          ? l(_)
          : (window.location.href = `vscode://file//${_.file}:${_.line}`));
    }, [l, _]),
    E = ((t == null ? void 0 : t.length) ?? 0) > 1,
    T = Yb(w);
  return x.jsx(Fl, {
    sidebarSize: 200,
    orientation: o === "bottom" ? "vertical" : "horizontal",
    sidebarHidden: !E,
    main: x.jsxs("div", {
      className: "vbox",
      "data-testid": "source-code",
      children: [
        w &&
          x.jsxs(df, {
            children: [
              x.jsx("div", {
                className: "source-tab-file-name",
                title: w,
                children: x.jsx("div", { children: T }),
              }),
              x.jsx(Eg, { description: "Copy filename", value: T }),
              _ &&
                x.jsx(Vt, {
                  icon: "link-external",
                  title: "Open in VS Code",
                  onClick: S,
                }),
            ],
          }),
        x.jsx(Ns, {
          text: y.content || "",
          language: "javascript",
          highlight: v,
          revealLine: m,
          readOnly: !0,
          lineNumbers: !0,
          dataTestId: "source-code-mirror",
        }),
      ],
    }),
    sidebar: x.jsx(Qb, { stack: t, selectedFrame: d, setSelectedFrame: p }),
  });
};
async function Jb(t) {
  const e = new TextEncoder().encode(t),
    n = await crypto.subtle.digest("SHA-1", e),
    s = [],
    o = new DataView(n);
  for (let l = 0; l < o.byteLength; l += 1) {
    const c = o.getUint8(l).toString(16).padStart(2, "0");
    s.push(c);
  }
  return s.join("");
}
function Yb(t) {
  if (!t) return "";
  const e = t != null && t.includes("/") ? "/" : "\\";
  return (t == null ? void 0 : t.split(e).pop()) ?? "";
}
const Gv = { width: 200, height: 45 },
  ms = 2.5,
  Zb = Gv.height + ms * 2,
  eT = ({ model: t, boundaries: e, previewPoint: n }) => {
    var y, v;
    const [s, o] = Lr(),
      l = P.useRef(null);
    let c = 0;
    if (l.current && n) {
      const m = l.current.getBoundingClientRect();
      c = ((n.clientY - m.top + l.current.scrollTop) / Zb) | 0;
    }
    const u =
      (v = (y = t == null ? void 0 : t.pages) == null ? void 0 : y[c]) == null
        ? void 0
        : v.screencastFrames;
    let d, p;
    if (n !== void 0 && u && u.length) {
      const m = e.minimum + ((e.maximum - e.minimum) * n.x) / s.width;
      d = u[Wm(u, m, Jv) - 1];
      const w = {
        width: Math.min(800, (window.innerWidth / 2) | 0),
        height: Math.min(800, (window.innerHeight / 2) | 0),
      };
      p = d ? Yv({ width: d.width, height: d.height }, w) : void 0;
    }
    return x.jsxs("div", {
      className: "film-strip",
      ref: o,
      children: [
        x.jsx("div", {
          className: "film-strip-lanes",
          ref: l,
          children:
            t == null
              ? void 0
              : t.pages.map((m, w) =>
                  m.screencastFrames.length
                    ? x.jsx(tT, { boundaries: e, page: m, width: s.width }, w)
                    : null,
                ),
        }),
        (n == null ? void 0 : n.x) !== void 0 &&
          x.jsxs("div", {
            className: "film-strip-hover",
            style: {
              top: s.bottom + 5,
              left: Math.min(n.x, s.width - (p ? p.width : 0) - 10),
            },
            children: [
              n.action &&
                x.jsx("div", {
                  className: "film-strip-hover-title",
                  children: af(n.action, n),
                }),
              d &&
                p &&
                x.jsx("div", {
                  style: { width: p.width, height: p.height },
                  children: x.jsx("img", {
                    src: `sha1/${d.sha1}`,
                    width: p.width,
                    height: p.height,
                  }),
                }),
            ],
          }),
      ],
    });
  },
  tT = ({ boundaries: t, page: e, width: n }) => {
    const s = { width: 0, height: 0 },
      o = e.screencastFrames;
    for (const S of o)
      (s.width = Math.max(s.width, S.width)),
        (s.height = Math.max(s.height, S.height));
    const l = Yv(s, Gv),
      c = o[0].timestamp,
      u = o[o.length - 1].timestamp,
      d = t.maximum - t.minimum,
      p = ((c - t.minimum) / d) * n,
      y = ((t.maximum - u) / d) * n,
      m = ((((u - c) / d) * n) / (l.width + 2 * ms)) | 0,
      w = (u - c) / m,
      _ = [];
    for (let S = 0; c && w && S < m; ++S) {
      const E = c + w * S,
        T = Wm(o, E, Jv) - 1;
      _.push(
        x.jsx(
          "div",
          {
            className: "film-strip-frame",
            style: {
              width: l.width,
              height: l.height,
              backgroundImage: `url(sha1/${o[T].sha1})`,
              backgroundSize: `${l.width}px ${l.height}px`,
              margin: ms,
              marginRight: ms,
            },
          },
          S,
        ),
      );
    }
    return (
      _.push(
        x.jsx(
          "div",
          {
            className: "film-strip-frame",
            style: {
              width: l.width,
              height: l.height,
              backgroundImage: `url(sha1/${o[o.length - 1].sha1})`,
              backgroundSize: `${l.width}px ${l.height}px`,
              margin: ms,
              marginRight: ms,
            },
          },
          _.length,
        ),
      ),
      x.jsx("div", {
        className: "film-strip-lane",
        style: { marginLeft: p + "px", marginRight: y + "px" },
        children: _,
      })
    );
  };
function Jv(t, e) {
  return t - e.timestamp;
}
function Yv(t, e) {
  const n = Math.max(t.width / e.width, t.height / e.height);
  return { width: (t.width / n) | 0, height: (t.height / n) | 0 };
}
const nT = ({
  model: t,
  boundaries: e,
  consoleEntries: n,
  onSelected: s,
  highlightedAction: o,
  highlightedEntry: l,
  highlightedConsoleEntry: c,
  selectedTime: u,
  setSelectedTime: d,
  sdkLanguage: p,
}) => {
  const [y, v] = Lr(),
    [m, w] = P.useState(),
    [_, S] = P.useState(),
    {
      offsets: E,
      curtainLeft: T,
      curtainRight: C,
    } = P.useMemo(() => {
      let Q = u || e;
      if (m && m.startX !== m.endX) {
        const de = fn(y.width, e, m.startX),
          Ee = fn(y.width, e, m.endX);
        Q = { minimum: Math.min(de, Ee), maximum: Math.max(de, Ee) };
      }
      const W = Bt(y.width, e, Q.minimum),
        J = Bt(y.width, e, e.maximum) - Bt(y.width, e, Q.maximum);
      return { offsets: rT(y.width, e), curtainLeft: W, curtainRight: J };
    }, [u, e, m, y]),
    O = P.useMemo(() => {
      const Q = [];
      for (const W of (t == null ? void 0 : t.actions) || [])
        W.class !== "Test" &&
          Q.push({
            action: W,
            leftTime: W.startTime,
            rightTime: W.endTime || e.maximum,
            leftPosition: Bt(y.width, e, W.startTime),
            rightPosition: Bt(y.width, e, W.endTime || e.maximum),
            active: !1,
            error: !!W.error,
          });
      for (const W of (t == null ? void 0 : t.resources) || []) {
        const z = W._monotonicTime,
          J = W._monotonicTime + W.time;
        Q.push({
          resource: W,
          leftTime: z,
          rightTime: J,
          leftPosition: Bt(y.width, e, z),
          rightPosition: Bt(y.width, e, J),
          active: !1,
          error: !1,
        });
      }
      for (const W of n || [])
        Q.push({
          consoleMessage: W,
          leftTime: W.timestamp,
          rightTime: W.timestamp,
          leftPosition: Bt(y.width, e, W.timestamp),
          rightPosition: Bt(y.width, e, W.timestamp),
          active: !1,
          error: W.isError,
        });
      return Q;
    }, [t, n, e, y]);
  P.useMemo(() => {
    for (const Q of O)
      o
        ? (Q.active = Q.action === o)
        : l
          ? (Q.active = Q.resource === l)
          : c
            ? (Q.active = Q.consoleMessage === c)
            : (Q.active = !1);
  }, [O, o, l, c]);
  const R = P.useCallback(
      (Q) => {
        if ((S(void 0), !v.current)) return;
        const W = Q.clientX - v.current.getBoundingClientRect().left,
          z = fn(y.width, e, W),
          J = u ? Bt(y.width, e, u.minimum) : 0,
          de = u ? Bt(y.width, e, u.maximum) : 0;
        u && Math.abs(W - J) < 10
          ? w({ startX: de, endX: W, type: "resize" })
          : u && Math.abs(W - de) < 10
            ? w({ startX: J, endX: W, type: "resize" })
            : u &&
                z > u.minimum &&
                z < u.maximum &&
                Q.clientY - v.current.getBoundingClientRect().top < 20
              ? w({ startX: J, endX: de, pivot: W, type: "move" })
              : w({ startX: W, endX: W, type: "resize" });
      },
      [e, y, v, u],
    ),
    D = P.useCallback(
      (Q) => {
        if (!v.current) return;
        const W = Q.clientX - v.current.getBoundingClientRect().left,
          z = fn(y.width, e, W),
          J =
            t == null ? void 0 : t.actions.findLast((ye) => ye.startTime <= z);
        if (!Q.buttons) {
          w(void 0);
          return;
        }
        if ((J && s(J), !m)) return;
        let de = m;
        if (m.type === "resize") de = { ...m, endX: W };
        else {
          const ye = W - m.pivot;
          let G = m.startX + ye,
            se = m.endX + ye;
          G < 0 && ((G = 0), (se = G + (m.endX - m.startX))),
            se > y.width && ((se = y.width), (G = se - (m.endX - m.startX))),
            (de = { ...m, startX: G, endX: se, pivot: W });
        }
        w(de);
        const Ee = fn(y.width, e, de.startX),
          Ce = fn(y.width, e, de.endX);
        Ee !== Ce &&
          d({ minimum: Math.min(Ee, Ce), maximum: Math.max(Ee, Ce) });
      },
      [e, m, y, t, s, v, d],
    ),
    F = P.useCallback(() => {
      if ((S(void 0), !!m)) {
        if (m.startX !== m.endX) {
          const Q = fn(y.width, e, m.startX),
            W = fn(y.width, e, m.endX);
          d({ minimum: Math.min(Q, W), maximum: Math.max(Q, W) });
        } else {
          const Q = fn(y.width, e, m.startX),
            W =
              t == null ? void 0 : t.actions.findLast((z) => z.startTime <= Q);
          W && s(W), d(void 0);
        }
        w(void 0);
      }
    }, [e, m, y, t, d, s]),
    U = P.useCallback(
      (Q) => {
        if (!v.current) return;
        const W = Q.clientX - v.current.getBoundingClientRect().left,
          z = fn(y.width, e, W),
          J =
            t == null ? void 0 : t.actions.findLast((de) => de.startTime <= z);
        S({ x: W, clientY: Q.clientY, action: J, sdkLanguage: p });
      },
      [e, y, t, v, p],
    ),
    B = P.useCallback(() => {
      S(void 0);
    }, []),
    j = P.useCallback(() => {
      d(void 0);
    }, [d]);
  return x.jsxs("div", {
    style: {
      flex: "none",
      borderBottom: "1px solid var(--vscode-panel-border)",
    },
    children: [
      !!m &&
        x.jsx(qg, {
          cursor:
            (m == null ? void 0 : m.type) === "resize" ? "ew-resize" : "grab",
          onPaneMouseUp: F,
          onPaneMouseMove: D,
          onPaneDoubleClick: j,
        }),
      x.jsxs("div", {
        ref: v,
        className: "timeline-view",
        onMouseDown: R,
        onMouseMove: U,
        onMouseLeave: B,
        children: [
          x.jsx("div", {
            className: "timeline-grid",
            children: E.map((Q, W) =>
              x.jsx(
                "div",
                {
                  className: "timeline-divider",
                  style: { left: Q.position + "px" },
                  children: x.jsx("div", {
                    className: "timeline-time",
                    children: mt(Q.time - e.minimum),
                  }),
                },
                W,
              ),
            ),
          }),
          x.jsx("div", { style: { height: 8 } }),
          x.jsx(eT, { model: t, boundaries: e, previewPoint: _ }),
          x.jsx("div", {
            className: "timeline-bars",
            children: O.map((Q, W) =>
              x.jsx(
                "div",
                {
                  className: ze(
                    "timeline-bar",
                    Q.action && "action",
                    Q.resource && "network",
                    Q.consoleMessage && "console-message",
                    Q.active && "active",
                    Q.error && "error",
                  ),
                  style: {
                    left: Q.leftPosition,
                    width: Math.max(5, Q.rightPosition - Q.leftPosition),
                    top: sT(Q),
                    bottom: 0,
                  },
                },
                W,
              ),
            ),
          }),
          x.jsx("div", {
            className: "timeline-marker",
            style: {
              display: _ !== void 0 ? "block" : "none",
              left: ((_ == null ? void 0 : _.x) || 0) + "px",
            },
          }),
          u &&
            x.jsxs("div", {
              className: "timeline-window",
              children: [
                x.jsx("div", {
                  className: "timeline-window-curtain left",
                  style: { width: T },
                }),
                x.jsx("div", {
                  className: "timeline-window-resizer",
                  style: { left: -5 },
                }),
                x.jsx("div", {
                  className: "timeline-window-center",
                  children: x.jsx("div", { className: "timeline-window-drag" }),
                }),
                x.jsx("div", {
                  className: "timeline-window-resizer",
                  style: { left: 5 },
                }),
                x.jsx("div", {
                  className: "timeline-window-curtain right",
                  style: { width: C },
                }),
              ],
            }),
        ],
      }),
    ],
  });
};
function rT(t, e) {
  let s = t / 64;
  const o = e.maximum - e.minimum,
    l = t / o;
  let c = o / s;
  const u = Math.ceil(Math.log(c) / Math.LN10);
  (c = Math.pow(10, u)),
    c * l >= 5 * 64 && (c = c / 5),
    c * l >= 2 * 64 && (c = c / 2);
  const d = e.minimum;
  let p = e.maximum;
  (p += 64 / l), (s = Math.ceil((p - d) / c)), c || (s = 0);
  const y = [];
  for (let v = 0; v < s; ++v) {
    const m = d + c * v;
    y.push({ position: Bt(t, e, m), time: m });
  }
  return y;
}
function Bt(t, e, n) {
  return ((n - e.minimum) / (e.maximum - e.minimum)) * t;
}
function fn(t, e, n) {
  return (n / t) * (e.maximum - e.minimum) + e.minimum;
}
function sT(t) {
  return t.resource ? 25 : 20;
}
const iT = ({ model: t }) => {
    var n, s;
    if (!t) return x.jsx(x.Fragment, {});
    const e =
      t.wallTime !== void 0
        ? new Date(t.wallTime).toLocaleString(void 0, { timeZoneName: "short" })
        : void 0;
    return x.jsxs("div", {
      "data-testid": "metadata-view",
      className: "vbox",
      style: { flexShrink: 0 },
      children: [
        x.jsx("div", {
          className: "call-section",
          style: { paddingTop: 2 },
          children: "Time",
        }),
        !!e &&
          x.jsxs("div", {
            className: "call-line",
            children: [
              "start time:",
              x.jsx("span", {
                className: "call-value datetime",
                title: e,
                children: e,
              }),
            ],
          }),
        x.jsxs("div", {
          className: "call-line",
          children: [
            "duration:",
            x.jsx("span", {
              className: "call-value number",
              title: mt(t.endTime - t.startTime),
              children: mt(t.endTime - t.startTime),
            }),
          ],
        }),
        x.jsx("div", { className: "call-section", children: "Browser" }),
        x.jsxs("div", {
          className: "call-line",
          children: [
            "engine:",
            x.jsx("span", {
              className: "call-value string",
              title: t.browserName,
              children: t.browserName,
            }),
          ],
        }),
        t.channel &&
          x.jsxs("div", {
            className: "call-line",
            children: [
              "channel:",
              x.jsx("span", {
                className: "call-value string",
                title: t.channel,
                children: t.channel,
              }),
            ],
          }),
        t.platform &&
          x.jsxs("div", {
            className: "call-line",
            children: [
              "platform:",
              x.jsx("span", {
                className: "call-value string",
                title: t.platform,
                children: t.platform,
              }),
            ],
          }),
        t.options.userAgent &&
          x.jsxs("div", {
            className: "call-line",
            children: [
              "user agent:",
              x.jsx("span", {
                className: "call-value datetime",
                title: t.options.userAgent,
                children: t.options.userAgent,
              }),
            ],
          }),
        t.options.baseURL &&
          x.jsxs(x.Fragment, {
            children: [
              x.jsx("div", {
                className: "call-section",
                style: { paddingTop: 2 },
                children: "Config",
              }),
              x.jsxs("div", {
                className: "call-line",
                children: [
                  "baseURL:",
                  x.jsx("a", {
                    className: "call-value string",
                    href: t.options.baseURL,
                    title: t.options.baseURL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: t.options.baseURL,
                  }),
                ],
              }),
            ],
          }),
        x.jsx("div", { className: "call-section", children: "Viewport" }),
        t.options.viewport &&
          x.jsxs("div", {
            className: "call-line",
            children: [
              "width:",
              x.jsx("span", {
                className: "call-value number",
                title: String(!!((n = t.options.viewport) != null && n.width)),
                children: t.options.viewport.width,
              }),
            ],
          }),
        t.options.viewport &&
          x.jsxs("div", {
            className: "call-line",
            children: [
              "height:",
              x.jsx("span", {
                className: "call-value number",
                title: String(!!((s = t.options.viewport) != null && s.height)),
                children: t.options.viewport.height,
              }),
            ],
          }),
        x.jsxs("div", {
          className: "call-line",
          children: [
            "is mobile:",
            x.jsx("span", {
              className: "call-value boolean",
              title: String(!!t.options.isMobile),
              children: String(!!t.options.isMobile),
            }),
          ],
        }),
        t.options.deviceScaleFactor &&
          x.jsxs("div", {
            className: "call-line",
            children: [
              "device scale:",
              x.jsx("span", {
                className: "call-value number",
                title: String(t.options.deviceScaleFactor),
                children: String(t.options.deviceScaleFactor),
              }),
            ],
          }),
        x.jsx("div", { className: "call-section", children: "Counts" }),
        x.jsxs("div", {
          className: "call-line",
          children: [
            "pages:",
            x.jsx("span", {
              className: "call-value number",
              children: t.pages.length,
            }),
          ],
        }),
        x.jsxs("div", {
          className: "call-line",
          children: [
            "actions:",
            x.jsx("span", {
              className: "call-value number",
              children: t.actions.length,
            }),
          ],
        }),
        x.jsxs("div", {
          className: "call-line",
          children: [
            "events:",
            x.jsx("span", {
              className: "call-value number",
              children: t.events.length,
            }),
          ],
        }),
      ],
    });
  },
  oT = ({ annotations: t }) =>
    t.length
      ? x.jsx("div", {
          className: "annotations-tab",
          children: t.map((e, n) =>
            x.jsxs(
              "div",
              {
                className: "annotation-item",
                children: [
                  x.jsx("span", {
                    style: { fontWeight: "bold" },
                    children: e.type,
                  }),
                  e.description &&
                    x.jsxs("span", { children: [": ", Wg(e.description)] }),
                ],
              },
              `annotation-${n}`,
            ),
          ),
        })
      : x.jsx(Ir, { text: "No annotations" }),
  lT = ({
    sdkLanguage: t,
    setIsInspecting: e,
    highlightedElement: n,
    setHighlightedElement: s,
  }) => {
    const [o, l] = P.useState(),
      c = P.useCallback(
        (u) => {
          const { errors: d } = hf(Kv, u, { prettyErrors: !1 }),
            p = d.map((y) => ({
              message: y.message,
              line: y.range[1].line,
              column: y.range[1].col,
              type: "subtle-error",
            }));
          l(p), s({ ...n, ariaSnapshot: u, lastEdited: "ariaSnapshot" }), e(!1);
        },
        [n, s, e],
      );
    return x.jsxs("div", {
      style: {
        flex: "auto",
        backgroundColor: "var(--vscode-sideBar-background)",
        padding: "0 10px 10px 10px",
        overflow: "auto",
      },
      children: [
        x.jsxs("div", {
          className: "hbox",
          style: {
            lineHeight: "28px",
            color: "var(--vscode-editorCodeLens-foreground)",
          },
          children: [
            x.jsx("div", { style: { flex: "auto" }, children: "Locator" }),
            x.jsx(Vt, {
              icon: "files",
              title: "Copy locator",
              onClick: () => {
                Op(n.locator || "");
              },
            }),
          ],
        }),
        x.jsx("div", {
          style: { height: 50 },
          children: x.jsx(Ns, {
            text: n.locator || "",
            language: t,
            isFocused: !0,
            wrapLines: !0,
            onChange: (u) => {
              s({ ...n, locator: u, lastEdited: "locator" }), e(!1);
            },
          }),
        }),
        x.jsxs("div", {
          className: "hbox",
          style: {
            lineHeight: "28px",
            color: "var(--vscode-editorCodeLens-foreground)",
          },
          children: [
            x.jsx("div", {
              style: { flex: "auto" },
              children: "Aria snapshot",
            }),
            x.jsx(Vt, {
              icon: "files",
              title: "Copy snapshot",
              onClick: () => {
                Op(n.ariaSnapshot || "");
              },
            }),
          ],
        }),
        x.jsx("div", {
          style: { height: 150 },
          children: x.jsx(Ns, {
            text: n.ariaSnapshot || "",
            language: "yaml",
            wrapLines: !1,
            highlight: o,
            onChange: c,
          }),
        }),
      ],
    });
  },
  gT = ({
    model: t,
    showSourcesFirst: e,
    rootDir: n,
    fallbackLocation: s,
    isLive: o,
    hideTimeline: l,
    status: c,
    annotations: u,
    inert: d,
    onOpenExternally: p,
    revealSource: y,
  }) => {
    var qs;
    const [v, m] = P.useState(void 0),
      [w, _] = P.useState(void 0),
      [S, E] = P.useState(void 0),
      [T, C] = P.useState(),
      [O, R] = P.useState(),
      [D, F] = P.useState(),
      [U, B] = P.useState("actions"),
      [j, Q] = bs("propertiesTab", e ? "source" : "call"),
      [W, z] = P.useState(!1),
      [J, de] = P.useState({ lastEdited: "none" }),
      [Ee, Ce] = P.useState(),
      [ye, G] = bs("propertiesSidebarLocation", "bottom"),
      se = P.useCallback((le) => {
        m(le == null ? void 0 : le.callId), _(void 0);
      }, []),
      Z = P.useMemo(
        () => (t == null ? void 0 : t.actions.find((le) => le.callId === T)),
        [t, T],
      ),
      L = P.useCallback((le) => {
        C(le == null ? void 0 : le.callId);
      }, []),
      H = P.useMemo(() => (t == null ? void 0 : t.sources) || new Map(), [t]);
    P.useEffect(() => {
      Ce(void 0), _(void 0);
    }, [t]);
    const fe = P.useMemo(() => {
        if (v) {
          const yt =
            t == null ? void 0 : t.actions.find((Kt) => Kt.callId === v);
          if (yt) return yt;
        }
        const le = t == null ? void 0 : t.failedAction();
        if (le) return le;
        if (t != null && t.actions.length) {
          let yt = t.actions.length - 1;
          for (let Kt = 0; Kt < t.actions.length; ++Kt)
            if (t.actions[Kt].apiName === "After Hooks" && Kt) {
              yt = Kt - 1;
              break;
            }
          return t.actions[yt];
        }
      }, [t, v]),
      ue = P.useMemo(() => Z || fe, [fe, Z]),
      ve = P.useMemo(
        () => (w ? w.stack : ue == null ? void 0 : ue.stack),
        [ue, w],
      ),
      ge = P.useCallback(
        (le) => {
          se(le), L(void 0);
        },
        [se, L],
      ),
      pe = P.useCallback(
        (le) => {
          Q(le), le !== "inspector" && z(!1);
        },
        [Q],
      ),
      Se = P.useCallback(
        (le) => {
          !W && le && pe("inspector"), z(le);
        },
        [z, pe, W],
      ),
      Te = P.useCallback(
        (le) => {
          de(le), pe("inspector");
        },
        [pe],
      ),
      ct = P.useCallback(
        (le) => {
          pe("attachments"),
            E((yt) => {
              if (!yt) return [le, 0];
              const Kt = yt[1];
              return [le, Kt + 1];
            });
        },
        [pe],
      );
    P.useEffect(() => {
      y && pe("source");
    }, [y, pe]);
    const Ln = e_(t, Ee),
      zs = E_(t, Ee),
      or = XS(t),
      sn = (t == null ? void 0 : t.sdkLanguage) || "javascript",
      eo = {
        id: "inspector",
        title: "Locator",
        render: () =>
          x.jsx(lT, {
            sdkLanguage: sn,
            setIsInspecting: Se,
            highlightedElement: J,
            setHighlightedElement: de,
          }),
      },
      to = {
        id: "call",
        title: "Call",
        render: () =>
          x.jsx(dx, {
            action: ue,
            startTimeOffset: (t == null ? void 0 : t.startTime) ?? 0,
            sdkLanguage: sn,
          }),
      },
      Bs = {
        id: "log",
        title: "Log",
        render: () => x.jsx(mx, { action: ue, isLive: o }),
      },
      no = {
        id: "errors",
        title: "Errors",
        errorCount: or.errors.size,
        render: () =>
          x.jsx(YS, {
            errorsModel: or,
            sdkLanguage: sn,
            revealInSource: (le) => {
              le.action ? se(le.action) : _(le), pe("source");
            },
            wallTime: (t == null ? void 0 : t.wallTime) ?? 0,
          }),
      };
    let $r;
    !fe && s && ($r = (qs = s.source) == null ? void 0 : qs.errors.length);
    const pn = {
        id: "source",
        title: "Source",
        errorCount: $r,
        render: () =>
          x.jsx(Gb, {
            stack: ve,
            sources: H,
            rootDir: n,
            stackFrameLocation: ye === "bottom" ? "right" : "bottom",
            fallbackLocation: s,
            onOpenExternally: p,
          }),
      },
      In = {
        id: "console",
        title: "Console",
        count: Ln.entries.length,
        render: () =>
          x.jsx(t_, {
            consoleModel: Ln,
            boundaries: Pr,
            selectedTime: Ee,
            onAccepted: (le) =>
              Ce({ minimum: le.timestamp, maximum: le.timestamp }),
            onEntryHovered: F,
          }),
      },
      Us = {
        id: "network",
        title: "Network",
        count: zs.resources.length,
        render: () =>
          x.jsx(b_, {
            boundaries: Pr,
            networkModel: zs,
            onEntryHovered: R,
            sdkLanguage: (t == null ? void 0 : t.sdkLanguage) ?? "javascript",
          }),
      },
      ro = {
        id: "attachments",
        title: "Attachments",
        count: t == null ? void 0 : t.visibleAttachments.length,
        render: () => x.jsx(VS, { model: t, revealedAttachment: S }),
      },
      jn = [eo, to, Bs, no, In, Us, pn, ro];
    if (u !== void 0) {
      const le = {
        id: "annotations",
        title: "Annotations",
        count: u.length,
        render: () => x.jsx(oT, { annotations: u }),
      };
      jn.push(le);
    }
    if (e) {
      const le = jn.indexOf(pn);
      jn.splice(le, 1), jn.splice(1, 0, pn);
    }
    const { boundaries: Pr } = P.useMemo(() => {
      const le = {
        minimum: (t == null ? void 0 : t.startTime) || 0,
        maximum: (t == null ? void 0 : t.endTime) || 3e4,
      };
      return (
        le.minimum > le.maximum && ((le.minimum = 0), (le.maximum = 3e4)),
        (le.maximum += (le.maximum - le.minimum) / 20),
        { boundaries: le }
      );
    }, [t]);
    let lr = 0;
    !o && t && t.endTime >= 0
      ? (lr = t.endTime - t.startTime)
      : t && t.wallTime && (lr = Date.now() - t.wallTime);
    const Hs = {
        id: "actions",
        title: "Actions",
        component: x.jsxs("div", {
          className: "vbox",
          children: [
            c &&
              x.jsxs("div", {
                className: "workbench-run-status",
                children: [
                  x.jsx("span", { className: ze("codicon", _g(c)) }),
                  x.jsx("div", { children: sx(c) }),
                  x.jsx("div", { className: "spacer" }),
                  x.jsx("div", {
                    className: "workbench-run-duration",
                    children: lr ? mt(lr) : "",
                  }),
                ],
              }),
            x.jsx(ox, {
              sdkLanguage: sn,
              actions: (t == null ? void 0 : t.actions) || [],
              selectedAction: t ? fe : void 0,
              selectedTime: Ee,
              setSelectedTime: Ce,
              onSelected: ge,
              onHighlighted: L,
              revealAttachment: ct,
              revealConsole: () => pe("console"),
              isLive: o,
            }),
          ],
        }),
      },
      Rr = {
        id: "metadata",
        title: "Metadata",
        component: x.jsx(iT, { model: t }),
      };
    return x.jsxs("div", {
      className: "vbox workbench",
      ...(d ? { inert: "true" } : {}),
      children: [
        !l &&
          x.jsx(nT, {
            model: t,
            consoleEntries: Ln.entries,
            boundaries: Pr,
            highlightedAction: Z,
            highlightedEntry: O,
            highlightedConsoleEntry: D,
            onSelected: ge,
            sdkLanguage: sn,
            selectedTime: Ee,
            setSelectedTime: Ce,
          }),
        x.jsx(Fl, {
          sidebarSize: 250,
          orientation: ye === "bottom" ? "vertical" : "horizontal",
          settingName: "propertiesSidebar",
          main: x.jsx(Fl, {
            sidebarSize: 250,
            orientation: "horizontal",
            sidebarIsFirst: !0,
            settingName: "actionListSidebar",
            main: x.jsx(Db, {
              action: ue,
              model: t,
              sdkLanguage: sn,
              testIdAttributeName:
                (t == null ? void 0 : t.testIdAttributeName) || "data-testid",
              isInspecting: W,
              setIsInspecting: Se,
              highlightedElement: J,
              setHighlightedElement: Te,
            }),
            sidebar: x.jsx(Wu, {
              tabs: [Hs, Rr],
              selectedTab: U,
              setSelectedTab: B,
            }),
          }),
          sidebar: x.jsx(Wu, {
            tabs: jn,
            selectedTab: j,
            setSelectedTab: pe,
            rightToolbar: [
              ye === "bottom"
                ? x.jsx(Vt, {
                    title: "Dock to right",
                    icon: "layout-sidebar-right-off",
                    onClick: () => {
                      G("right");
                    },
                  })
                : x.jsx(Vt, {
                    title: "Dock to bottom",
                    icon: "layout-panel-off",
                    onClick: () => {
                      G("bottom");
                    },
                  }),
            ],
            mode: ye === "bottom" ? "default" : "select",
          }),
        }),
      ],
    });
  };
class yT {
  constructor(e) {
    this._ws = new WebSocket(e);
  }
  onmessage(e) {
    this._ws.addEventListener("message", (n) => e(n.data));
  }
  onopen(e) {
    this._ws.addEventListener("open", e);
  }
  onerror(e) {
    this._ws.addEventListener("error", e);
  }
  onclose(e) {
    this._ws.addEventListener("close", e);
  }
  send(e) {
    this._ws.send(e);
  }
  close() {
    this._ws.close();
  }
}
class vT {
  constructor(e) {
    (this._onCloseEmitter = new ps()),
      (this._onReportEmitter = new ps()),
      (this._onStdioEmitter = new ps()),
      (this._onTestFilesChangedEmitter = new ps()),
      (this._onLoadTraceRequestedEmitter = new ps()),
      (this._lastId = 0),
      (this._callbacks = new Map()),
      (this._isClosed = !1),
      (this.onClose = this._onCloseEmitter.event),
      (this.onReport = this._onReportEmitter.event),
      (this.onStdio = this._onStdioEmitter.event),
      (this.onTestFilesChanged = this._onTestFilesChangedEmitter.event),
      (this.onLoadTraceRequested = this._onLoadTraceRequestedEmitter.event),
      (this._transport = e),
      this._transport.onmessage((s) => {
        const o = JSON.parse(s),
          { id: l, result: c, error: u, method: d, params: p } = o;
        if (l) {
          const y = this._callbacks.get(l);
          if (!y) return;
          this._callbacks.delete(l), u ? y.reject(new Error(u)) : y.resolve(c);
        } else this._dispatchEvent(d, p);
      });
    const n = setInterval(() => this._sendMessage("ping").catch(() => {}), 3e4);
    (this._connectedPromise = new Promise((s, o) => {
      this._transport.onopen(s), this._transport.onerror(o);
    })),
      this._transport.onclose(() => {
        (this._isClosed = !0), this._onCloseEmitter.fire(), clearInterval(n);
      });
  }
  isClosed() {
    return this._isClosed;
  }
  async _sendMessage(e, n) {
    const s = globalThis.__logForTest;
    s == null || s({ method: e, params: n }), await this._connectedPromise;
    const o = ++this._lastId,
      l = { id: o, method: e, params: n };
    return (
      this._transport.send(JSON.stringify(l)),
      new Promise((c, u) => {
        this._callbacks.set(o, { resolve: c, reject: u });
      })
    );
  }
  _sendMessageNoReply(e, n) {
    this._sendMessage(e, n).catch(() => {});
  }
  _dispatchEvent(e, n) {
    e === "report"
      ? this._onReportEmitter.fire(n)
      : e === "stdio"
        ? this._onStdioEmitter.fire(n)
        : e === "testFilesChanged"
          ? this._onTestFilesChangedEmitter.fire(n)
          : e === "loadTraceRequested" &&
            this._onLoadTraceRequestedEmitter.fire(n);
  }
  async initialize(e) {
    await this._sendMessage("initialize", e);
  }
  async ping(e) {
    await this._sendMessage("ping", e);
  }
  async pingNoReply(e) {
    this._sendMessageNoReply("ping", e);
  }
  async watch(e) {
    await this._sendMessage("watch", e);
  }
  watchNoReply(e) {
    this._sendMessageNoReply("watch", e);
  }
  async open(e) {
    await this._sendMessage("open", e);
  }
  openNoReply(e) {
    this._sendMessageNoReply("open", e);
  }
  async resizeTerminal(e) {
    await this._sendMessage("resizeTerminal", e);
  }
  resizeTerminalNoReply(e) {
    this._sendMessageNoReply("resizeTerminal", e);
  }
  async checkBrowsers(e) {
    return await this._sendMessage("checkBrowsers", e);
  }
  async installBrowsers(e) {
    await this._sendMessage("installBrowsers", e);
  }
  async runGlobalSetup(e) {
    return await this._sendMessage("runGlobalSetup", e);
  }
  async runGlobalTeardown(e) {
    return await this._sendMessage("runGlobalTeardown", e);
  }
  async startDevServer(e) {
    return await this._sendMessage("startDevServer", e);
  }
  async stopDevServer(e) {
    return await this._sendMessage("stopDevServer", e);
  }
  async clearCache(e) {
    return await this._sendMessage("clearCache", e);
  }
  async listFiles(e) {
    return await this._sendMessage("listFiles", e);
  }
  async listTests(e) {
    return await this._sendMessage("listTests", e);
  }
  async runTests(e) {
    return await this._sendMessage("runTests", e);
  }
  async findRelatedTestFiles(e) {
    return await this._sendMessage("findRelatedTestFiles", e);
  }
  async stopTests(e) {
    await this._sendMessage("stopTests", e);
  }
  stopTestsNoReply(e) {
    this._sendMessageNoReply("stopTests", e);
  }
  async closeGracefully(e) {
    await this._sendMessage("closeGracefully", e);
  }
  close() {
    try {
      this._transport.close();
    } catch {}
  }
}
const aT = ({ settings: t }) =>
    x.jsx("div", {
      className: "vbox settings-view",
      children: t.map(({ value: e, set: n, name: s, title: o }) => {
        const l = `setting-${s}`;
        return x.jsxs(
          "div",
          {
            className: "setting",
            title: o,
            children: [
              x.jsx("input", {
                type: "checkbox",
                id: l,
                checked: e,
                onChange: () => n(!e),
              }),
              x.jsx("label", { htmlFor: l, children: s }),
            ],
          },
          s,
        );
      }),
    }),
  wT = () => {
    const [t, e] = bs("shouldPopulateCanvasFromScreenshot", !1),
      [n, s] = i1();
    return x.jsx(aT, {
      settings: [
        { value: n, set: s, name: "Dark mode" },
        {
          value: t,
          set: e,
          name: "Display canvas content",
          title:
            "Attempt to display the captured canvas appearance in the snapshot preview. May not be accurate.",
        },
      ],
    });
  };
export {
  wT as D,
  US as E,
  mT as L,
  pT as M,
  At as R,
  Fl as S,
  Vt as T,
  yT as W,
  $S as _,
  vT as a,
  gT as b,
  uT as c,
  hT as d,
  Fu as e,
  fT as f,
  dT as g,
  ze as h,
  nx as i,
  x as j,
  df as k,
  bs as l,
  mt as m,
  G0 as n,
  P as r,
  _r as s,
  _g as t,
  Lr as u,
};
