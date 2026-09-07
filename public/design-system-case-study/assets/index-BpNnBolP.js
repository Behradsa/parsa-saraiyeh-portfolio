(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) _(N);
  new MutationObserver((N) => {
    for (const F of N)
      if (F.type === "childList")
        for (const B of F.addedNodes)
          B.tagName === "LINK" && B.rel === "modulepreload" && _(B);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(N) {
    const F = {};
    return (
      N.integrity && (F.integrity = N.integrity),
      N.referrerPolicy && (F.referrerPolicy = N.referrerPolicy),
      N.crossOrigin === "use-credentials"
        ? (F.credentials = "include")
        : N.crossOrigin === "anonymous"
          ? (F.credentials = "omit")
          : (F.credentials = "same-origin"),
      F
    );
  }
  function _(N) {
    if (N.ep) return;
    N.ep = !0;
    const F = c(N);
    fetch(N.href, F);
  }
})();
var jo = { exports: {} },
  wr = {},
  _o = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ju;
function Yf() {
  if (ju) return U;
  ju = 1;
  var g = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    F = Symbol.for("react.provider"),
    B = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    ie = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    $ = Symbol.iterator;
  function Y(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = ($ && d[$]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var Qe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $e = Object.assign,
    ne = {};
  function X(d, y, A) {
    ((this.props = d),
      (this.context = y),
      (this.refs = ne),
      (this.updater = A || Qe));
  }
  ((X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (d, y) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, d, y, "setState");
    }),
    (X.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    }));
  function yt() {}
  yt.prototype = X.prototype;
  function ct(d, y, A) {
    ((this.props = d),
      (this.context = y),
      (this.refs = ne),
      (this.updater = A || Qe));
  }
  var et = (ct.prototype = new yt());
  ((et.constructor = ct), $e(et, X.prototype), (et.isPureReactComponent = !0));
  var Se = Array.isArray,
    tt = Object.prototype.hasOwnProperty,
    _e = { current: null },
    Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ge(d, y, A) {
    var W,
      V = {},
      K = null,
      Z = null;
    if (y != null)
      for (W in (y.ref !== void 0 && (Z = y.ref),
      y.key !== void 0 && (K = "" + y.key),
      y))
        tt.call(y, W) && !Te.hasOwnProperty(W) && (V[W] = y[W]);
    var G = arguments.length - 2;
    if (G === 1) V.children = A;
    else if (1 < G) {
      for (var re = Array(G), Ue = 0; Ue < G; Ue++) re[Ue] = arguments[Ue + 2];
      V.children = re;
    }
    if (d && d.defaultProps)
      for (W in ((G = d.defaultProps), G)) V[W] === void 0 && (V[W] = G[W]);
    return {
      $$typeof: g,
      type: d,
      key: K,
      ref: Z,
      props: V,
      _owner: _e.current,
    };
  }
  function zt(d, y) {
    return {
      $$typeof: g,
      type: d.type,
      key: y,
      ref: d.ref,
      props: d.props,
      _owner: d._owner,
    };
  }
  function xt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === g;
  }
  function Yt(d) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (A) {
        return y[A];
      })
    );
  }
  var ft = /\/+/g;
  function Ae(d, y) {
    return typeof d == "object" && d !== null && d.key != null
      ? Yt("" + d.key)
      : y.toString(36);
  }
  function nt(d, y, A, W, V) {
    var K = typeof d;
    (K === "undefined" || K === "boolean") && (d = null);
    var Z = !1;
    if (d === null) Z = !0;
    else
      switch (K) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case g:
            case S:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = d),
        (V = V(Z)),
        (d = W === "" ? "." + Ae(Z, 0) : W),
        Se(V)
          ? ((A = ""),
            d != null && (A = d.replace(ft, "$&/") + "/"),
            nt(V, y, A, "", function (Ue) {
              return Ue;
            }))
          : V != null &&
            (xt(V) &&
              (V = zt(
                V,
                A +
                  (!V.key || (Z && Z.key === V.key)
                    ? ""
                    : ("" + V.key).replace(ft, "$&/") + "/") +
                  d,
              )),
            y.push(V)),
        1
      );
    if (((Z = 0), (W = W === "" ? "." : W + ":"), Se(d)))
      for (var G = 0; G < d.length; G++) {
        K = d[G];
        var re = W + Ae(K, G);
        Z += nt(K, y, A, re, V);
      }
    else if (((re = Y(d)), typeof re == "function"))
      for (d = re.call(d), G = 0; !(K = d.next()).done; )
        ((K = K.value), (re = W + Ae(K, G++)), (Z += nt(K, y, A, re, V)));
    else if (K === "object")
      throw (
        (y = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Z;
  }
  function dt(d, y, A) {
    if (d == null) return d;
    var W = [],
      V = 0;
    return (
      nt(d, W, "", "", function (K) {
        return y.call(A, K, V++);
      }),
      W
    );
  }
  function Le(d) {
    if (d._status === -1) {
      var y = d._result;
      ((y = y()),
        y.then(
          function (A) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = A));
          },
          function (A) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = A));
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = y)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ae = { current: null },
    E = { transition: null },
    D = {
      ReactCurrentDispatcher: ae,
      ReactCurrentBatchConfig: E,
      ReactCurrentOwner: _e,
    };
  function z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: dt,
      forEach: function (d, y, A) {
        dt(
          d,
          function () {
            y.apply(this, arguments);
          },
          A,
        );
      },
      count: function (d) {
        var y = 0;
        return (
          dt(d, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (d) {
        return (
          dt(d, function (y) {
            return y;
          }) || []
        );
      },
      only: function (d) {
        if (!xt(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return d;
      },
    }),
    (U.Component = X),
    (U.Fragment = c),
    (U.Profiler = N),
    (U.PureComponent = ct),
    (U.StrictMode = _),
    (U.Suspense = O),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (U.act = z),
    (U.cloneElement = function (d, y, A) {
      if (d == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            d +
            ".",
        );
      var W = $e({}, d.props),
        V = d.key,
        K = d.ref,
        Z = d._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((K = y.ref), (Z = _e.current)),
          y.key !== void 0 && (V = "" + y.key),
          d.type && d.type.defaultProps)
        )
          var G = d.type.defaultProps;
        for (re in y)
          tt.call(y, re) &&
            !Te.hasOwnProperty(re) &&
            (W[re] = y[re] === void 0 && G !== void 0 ? G[re] : y[re]);
      }
      var re = arguments.length - 2;
      if (re === 1) W.children = A;
      else if (1 < re) {
        G = Array(re);
        for (var Ue = 0; Ue < re; Ue++) G[Ue] = arguments[Ue + 2];
        W.children = G;
      }
      return { $$typeof: g, type: d.type, key: V, ref: K, props: W, _owner: Z };
    }),
    (U.createContext = function (d) {
      return (
        (d = {
          $$typeof: B,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (d.Provider = { $$typeof: F, _context: d }),
        (d.Consumer = d)
      );
    }),
    (U.createElement = Ge),
    (U.createFactory = function (d) {
      var y = Ge.bind(null, d);
      return ((y.type = d), y);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (d) {
      return { $$typeof: q, render: d };
    }),
    (U.isValidElement = xt),
    (U.lazy = function (d) {
      return { $$typeof: de, _payload: { _status: -1, _result: d }, _init: Le };
    }),
    (U.memo = function (d, y) {
      return { $$typeof: ie, type: d, compare: y === void 0 ? null : y };
    }),
    (U.startTransition = function (d) {
      var y = E.transition;
      E.transition = {};
      try {
        d();
      } finally {
        E.transition = y;
      }
    }),
    (U.unstable_act = z),
    (U.useCallback = function (d, y) {
      return ae.current.useCallback(d, y);
    }),
    (U.useContext = function (d) {
      return ae.current.useContext(d);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (d) {
      return ae.current.useDeferredValue(d);
    }),
    (U.useEffect = function (d, y) {
      return ae.current.useEffect(d, y);
    }),
    (U.useId = function () {
      return ae.current.useId();
    }),
    (U.useImperativeHandle = function (d, y, A) {
      return ae.current.useImperativeHandle(d, y, A);
    }),
    (U.useInsertionEffect = function (d, y) {
      return ae.current.useInsertionEffect(d, y);
    }),
    (U.useLayoutEffect = function (d, y) {
      return ae.current.useLayoutEffect(d, y);
    }),
    (U.useMemo = function (d, y) {
      return ae.current.useMemo(d, y);
    }),
    (U.useReducer = function (d, y, A) {
      return ae.current.useReducer(d, y, A);
    }),
    (U.useRef = function (d) {
      return ae.current.useRef(d);
    }),
    (U.useState = function (d) {
      return ae.current.useState(d);
    }),
    (U.useSyncExternalStore = function (d, y, A) {
      return ae.current.useSyncExternalStore(d, y, A);
    }),
    (U.useTransition = function () {
      return ae.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var _u;
function Lo() {
  return (_u || ((_u = 1), (_o.exports = Yf())), _o.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zu;
function Xf() {
  if (zu) return wr;
  zu = 1;
  var g = Lo(),
    S = Symbol.for("react.element"),
    c = Symbol.for("react.fragment"),
    _ = Object.prototype.hasOwnProperty,
    N = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(q, O, ie) {
    var de,
      $ = {},
      Y = null,
      Qe = null;
    (ie !== void 0 && (Y = "" + ie),
      O.key !== void 0 && (Y = "" + O.key),
      O.ref !== void 0 && (Qe = O.ref));
    for (de in O) _.call(O, de) && !F.hasOwnProperty(de) && ($[de] = O[de]);
    if (q && q.defaultProps)
      for (de in ((O = q.defaultProps), O)) $[de] === void 0 && ($[de] = O[de]);
    return {
      $$typeof: S,
      type: q,
      key: Y,
      ref: Qe,
      props: $,
      _owner: N.current,
    };
  }
  return ((wr.Fragment = c), (wr.jsx = B), (wr.jsxs = B), wr);
}
var Pu;
function Zf() {
  return (Pu || ((Pu = 1), (jo.exports = Xf())), jo.exports);
}
var a = Zf(),
  Ll = {},
  zo = { exports: {} },
  Fe = {},
  Po = { exports: {} },
  To = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tu;
function Jf() {
  return (
    Tu ||
      ((Tu = 1),
      (function (g) {
        function S(E, D) {
          var z = E.length;
          E.push(D);
          e: for (; 0 < z; ) {
            var d = (z - 1) >>> 1,
              y = E[d];
            if (0 < N(y, D)) ((E[d] = D), (E[z] = y), (z = d));
            else break e;
          }
        }
        function c(E) {
          return E.length === 0 ? null : E[0];
        }
        function _(E) {
          if (E.length === 0) return null;
          var D = E[0],
            z = E.pop();
          if (z !== D) {
            E[0] = z;
            e: for (var d = 0, y = E.length, A = y >>> 1; d < A; ) {
              var W = 2 * (d + 1) - 1,
                V = E[W],
                K = W + 1,
                Z = E[K];
              if (0 > N(V, z))
                K < y && 0 > N(Z, V)
                  ? ((E[d] = Z), (E[K] = z), (d = K))
                  : ((E[d] = V), (E[W] = z), (d = W));
              else if (K < y && 0 > N(Z, z)) ((E[d] = Z), (E[K] = z), (d = K));
              else break e;
            }
          }
          return D;
        }
        function N(E, D) {
          var z = E.sortIndex - D.sortIndex;
          return z !== 0 ? z : E.id - D.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var F = performance;
          g.unstable_now = function () {
            return F.now();
          };
        } else {
          var B = Date,
            q = B.now();
          g.unstable_now = function () {
            return B.now() - q;
          };
        }
        var O = [],
          ie = [],
          de = 1,
          $ = null,
          Y = 3,
          Qe = !1,
          $e = !1,
          ne = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          ct = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function et(E) {
          for (var D = c(ie); D !== null; ) {
            if (D.callback === null) _(ie);
            else if (D.startTime <= E)
              (_(ie), (D.sortIndex = D.expirationTime), S(O, D));
            else break;
            D = c(ie);
          }
        }
        function Se(E) {
          if (((ne = !1), et(E), !$e))
            if (c(O) !== null) (($e = !0), Le(tt));
            else {
              var D = c(ie);
              D !== null && ae(Se, D.startTime - E);
            }
        }
        function tt(E, D) {
          (($e = !1), ne && ((ne = !1), yt(Ge), (Ge = -1)), (Qe = !0));
          var z = Y;
          try {
            for (
              et(D), $ = c(O);
              $ !== null && (!($.expirationTime > D) || (E && !Yt()));
            ) {
              var d = $.callback;
              if (typeof d == "function") {
                (($.callback = null), (Y = $.priorityLevel));
                var y = d($.expirationTime <= D);
                ((D = g.unstable_now()),
                  typeof y == "function"
                    ? ($.callback = y)
                    : $ === c(O) && _(O),
                  et(D));
              } else _(O);
              $ = c(O);
            }
            if ($ !== null) var A = !0;
            else {
              var W = c(ie);
              (W !== null && ae(Se, W.startTime - D), (A = !1));
            }
            return A;
          } finally {
            (($ = null), (Y = z), (Qe = !1));
          }
        }
        var _e = !1,
          Te = null,
          Ge = -1,
          zt = 5,
          xt = -1;
        function Yt() {
          return !(g.unstable_now() - xt < zt);
        }
        function ft() {
          if (Te !== null) {
            var E = g.unstable_now();
            xt = E;
            var D = !0;
            try {
              D = Te(!0, E);
            } finally {
              D ? Ae() : ((_e = !1), (Te = null));
            }
          } else _e = !1;
        }
        var Ae;
        if (typeof ct == "function")
          Ae = function () {
            ct(ft);
          };
        else if (typeof MessageChannel < "u") {
          var nt = new MessageChannel(),
            dt = nt.port2;
          ((nt.port1.onmessage = ft),
            (Ae = function () {
              dt.postMessage(null);
            }));
        } else
          Ae = function () {
            X(ft, 0);
          };
        function Le(E) {
          ((Te = E), _e || ((_e = !0), Ae()));
        }
        function ae(E, D) {
          Ge = X(function () {
            E(g.unstable_now());
          }, D);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            $e || Qe || (($e = !0), Le(tt));
          }),
          (g.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (zt = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return Y;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return c(O);
          }),
          (g.unstable_next = function (E) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = Y;
            }
            var z = Y;
            Y = D;
            try {
              return E();
            } finally {
              Y = z;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (E, D) {
            switch (E) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                E = 3;
            }
            var z = Y;
            Y = E;
            try {
              return D();
            } finally {
              Y = z;
            }
          }),
          (g.unstable_scheduleCallback = function (E, D, z) {
            var d = g.unstable_now();
            switch (
              (typeof z == "object" && z !== null
                ? ((z = z.delay),
                  (z = typeof z == "number" && 0 < z ? d + z : d))
                : (z = d),
              E)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = z + y),
              (E = {
                id: de++,
                callback: D,
                priorityLevel: E,
                startTime: z,
                expirationTime: y,
                sortIndex: -1,
              }),
              z > d
                ? ((E.sortIndex = z),
                  S(ie, E),
                  c(O) === null &&
                    E === c(ie) &&
                    (ne ? (yt(Ge), (Ge = -1)) : (ne = !0), ae(Se, z - d)))
                : ((E.sortIndex = y), S(O, E), $e || Qe || (($e = !0), Le(tt))),
              E
            );
          }),
          (g.unstable_shouldYield = Yt),
          (g.unstable_wrapCallback = function (E) {
            var D = Y;
            return function () {
              var z = Y;
              Y = D;
              try {
                return E.apply(this, arguments);
              } finally {
                Y = z;
              }
            };
          }));
      })(To)),
    To
  );
}
var Lu;
function qf() {
  return (Lu || ((Lu = 1), (Po.exports = Jf())), Po.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mu;
function ed() {
  if (Mu) return Fe;
  Mu = 1;
  var g = Lo(),
    S = qf();
  function c(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var _ = new Set(),
    N = {};
  function F(e, t) {
    (B(e, t), B(e + "Capture", t));
  }
  function B(e, t) {
    for (N[e] = t, e = 0; e < t.length; e++) _.add(t[e]);
  }
  var q = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    O = Object.prototype.hasOwnProperty,
    ie =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    de = {},
    $ = {};
  function Y(e) {
    return O.call($, e)
      ? !0
      : O.call(de, e)
        ? !1
        : ie.test(e)
          ? ($[e] = !0)
          : ((de[e] = !0), !1);
  }
  function Qe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $e(e, t, n, r) {
    if (t === null || typeof t > "u" || Qe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function ne(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var X = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      X[e] = new ne(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      X[t] = new ne(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        X[e] = new ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      X[e] = new ne(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        X[e] = new ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      X[e] = new ne(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      X[e] = new ne(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      X[e] = new ne(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      X[e] = new ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function ct(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, ct);
      X[t] = new ne(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, ct);
        X[t] = new ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, ct);
      X[t] = new ne(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      X[e] = new ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (X.xlinkHref = new ne(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      X[e] = new ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function et(e, t, n, r) {
    var l = X.hasOwnProperty(t) ? X[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      ($e(t, n, l, r) && (n = null),
      r || l === null
        ? Y(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Se = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for("react.element"),
    _e = Symbol.for("react.portal"),
    Te = Symbol.for("react.fragment"),
    Ge = Symbol.for("react.strict_mode"),
    zt = Symbol.for("react.profiler"),
    xt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    nt = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var z = Object.assign,
    d;
  function y(e) {
    if (d === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        d = (t && t[1]) || "";
      }
    return (
      `
` +
      d +
      e
    );
  }
  var A = !1;
  function W(e, t) {
    if (!e || A) return "";
    A = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            s = i.length - 1;
          1 <= o && 0 <= s && l[o] !== i[s];
        )
          s--;
        for (; 1 <= o && 0 <= s; o--, s--)
          if (l[o] !== i[s]) {
            if (o !== 1 || s !== 1)
              do
                if ((o--, s--, 0 > s || l[o] !== i[s])) {
                  var u =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              while (1 <= o && 0 <= s);
            break;
          }
      }
    } finally {
      ((A = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = W(e.type, !1)), e);
      case 11:
        return ((e = W(e.type.render, !1)), e);
      case 1:
        return ((e = W(e.type, !0)), e);
      default:
        return "";
    }
  }
  function K(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case _e:
        return "Portal";
      case zt:
        return "Profiler";
      case Ge:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case xt:
          return (e._context.displayName || "Context") + ".Provider";
        case ft:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dt:
          return (
            (t = e.displayName || null),
            t !== null ? t : K(e.type) || "Memo"
          );
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return K(e(t));
          } catch {}
      }
    return null;
  }
  function Z(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return K(t);
      case 8:
        return t === Ge ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function G(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function re(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ue(e) {
    var t = re(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = "" + o), i.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function kr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Mo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = re(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ml(e, t) {
    var n = t.checked;
    return z({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ro(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = G(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Do(e, t) {
    ((t = t.checked), t != null && et(e, "checked", t, !1));
  }
  function Rl(e, t) {
    Do(e, t);
    var n = G(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Dl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Dl(e, t.type, G(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Oo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Dl(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function cn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + G(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return z({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Io(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(c(92));
        if (On(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: G(n) };
  }
  function Fo(e, t) {
    var n = G(t.value),
      r = G(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ao(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Uo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Uo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Nr,
    Wo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Nr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Fn = {
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
    Ju = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fn).forEach(function (e) {
    Ju.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]));
    });
  });
  function Bo(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bo(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var qu = z(
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
  function Fl(e, t) {
    if (t) {
      if (qu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(c(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(c(62));
    }
  }
  function Al(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
  var Ul = null;
  function Wl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Bl = null,
    fn = null,
    dn = null;
  function Vo(e) {
    if ((e = ir(e))) {
      if (typeof Bl != "function") throw Error(c(280));
      var t = e.stateNode;
      t && ((t = $r(t)), Bl(e.stateNode, e.type, t));
    }
  }
  function Ko(e) {
    fn ? (dn ? dn.push(e) : (dn = [e])) : (fn = e);
  }
  function Qo() {
    if (fn) {
      var e = fn,
        t = dn;
      if (((dn = fn = null), Vo(e), t)) for (e = 0; e < t.length; e++) Vo(t[e]);
    }
  }
  function $o(e, t) {
    return e(t);
  }
  function Go() {}
  var Hl = !1;
  function bo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return $o(e, t, n);
    } finally {
      ((Hl = !1), (fn !== null || dn !== null) && (Go(), Qo()));
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $r(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var Vl = !1;
  if (q)
    try {
      var Un = {};
      (Object.defineProperty(Un, "passive", {
        get: function () {
          Vl = !0;
        },
      }),
        window.addEventListener("test", Un, Un),
        window.removeEventListener("test", Un, Un));
    } catch {
      Vl = !1;
    }
  function ec(e, t, n, r, l, i, o, s, u) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (x) {
      this.onError(x);
    }
  }
  var Wn = !1,
    Er = null,
    Cr = !1,
    Kl = null,
    tc = {
      onError: function (e) {
        ((Wn = !0), (Er = e));
      },
    };
  function nc(e, t, n, r, l, i, o, s, u) {
    ((Wn = !1), (Er = null), ec.apply(tc, arguments));
  }
  function rc(e, t, n, r, l, i, o, s, u) {
    if ((nc.apply(this, arguments), Wn)) {
      if (Wn) {
        var h = Er;
        ((Wn = !1), (Er = null));
      } else throw Error(c(198));
      Cr || ((Cr = !0), (Kl = h));
    }
  }
  function Xt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Yo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Xo(e) {
    if (Xt(e) !== e) throw Error(c(188));
  }
  function lc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (Xo(l), e);
          if (i === r) return (Xo(l), t);
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, s = l.child; s; ) {
          if (s === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (s === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          s = s.sibling;
        }
        if (!o) {
          for (s = i.child; s; ) {
            if (s === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (s === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            s = s.sibling;
          }
          if (!o) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zo(e) {
    return ((e = lc(e)), e !== null ? Jo(e) : null);
  }
  function Jo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Jo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qo = S.unstable_scheduleCallback,
    es = S.unstable_cancelCallback,
    ic = S.unstable_shouldYield,
    oc = S.unstable_requestPaint,
    ce = S.unstable_now,
    sc = S.unstable_getCurrentPriorityLevel,
    Ql = S.unstable_ImmediatePriority,
    ts = S.unstable_UserBlockingPriority,
    jr = S.unstable_NormalPriority,
    ac = S.unstable_LowPriority,
    ns = S.unstable_IdlePriority,
    _r = null,
    pt = null;
  function uc(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
      try {
        pt.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : dc,
    cc = Math.log,
    fc = Math.LN2;
  function dc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((cc(e) / fc) | 0)) | 0);
  }
  var zr = 64,
    Pr = 4194304;
  function Bn(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var s = o & ~l;
      s !== 0 ? (r = Bn(s)) : ((i &= o), i !== 0 && (r = Bn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Bn(o)) : i !== 0 && (r = Bn(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function pc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function mc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - rt(i),
        s = 1 << o,
        u = l[o];
      (u === -1
        ? ((s & n) === 0 || (s & r) !== 0) && (l[o] = pc(s, t))
        : u <= t && (e.expiredLanes |= s),
        (i &= ~s));
    }
  }
  function $l(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function rs() {
    var e = zr;
    return ((zr <<= 1), (zr & 4194240) === 0 && (zr = 64), e);
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - rt(t)),
      (e[t] = n));
  }
  function hc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - rt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function bl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var b = 0;
  function ls(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var is,
    Yl,
    os,
    ss,
    as,
    Xl = !1,
    Lr = [],
    Pt = null,
    Tt = null,
    Lt = null,
    Vn = new Map(),
    Kn = new Map(),
    Mt = [],
    gc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function us(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kn.delete(t.pointerId);
    }
  }
  function Qn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = ir(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function vc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Pt = Qn(Pt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Tt = Qn(Tt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = Qn(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Vn.set(i, Qn(Vn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          Kn.set(i, Qn(Kn.get(i) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function cs(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Yo(n)), t !== null)) {
            ((e.blockedOn = t),
              as(e.priority, function () {
                os(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ul = r), n.target.dispatchEvent(r), (Ul = null));
      } else return ((t = ir(n)), t !== null && Yl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fs(e, t, n) {
    Mr(e) && n.delete(t);
  }
  function yc() {
    ((Xl = !1),
      Pt !== null && Mr(Pt) && (Pt = null),
      Tt !== null && Mr(Tt) && (Tt = null),
      Lt !== null && Mr(Lt) && (Lt = null),
      Vn.forEach(fs),
      Kn.forEach(fs));
  }
  function $n(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, yc)));
  }
  function Gn(e) {
    function t(l) {
      return $n(l, e);
    }
    if (0 < Lr.length) {
      $n(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && $n(Pt, e),
        Tt !== null && $n(Tt, e),
        Lt !== null && $n(Lt, e),
        Vn.forEach(t),
        Kn.forEach(t),
        n = 0;
      n < Mt.length;
      n++
    )
      ((r = Mt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
      (cs(n), n.blockedOn === null && Mt.shift());
  }
  var pn = Se.ReactCurrentBatchConfig,
    Rr = !0;
  function xc(e, t, n, r) {
    var l = b,
      i = pn.transition;
    pn.transition = null;
    try {
      ((b = 1), Zl(e, t, n, r));
    } finally {
      ((b = l), (pn.transition = i));
    }
  }
  function wc(e, t, n, r) {
    var l = b,
      i = pn.transition;
    pn.transition = null;
    try {
      ((b = 4), Zl(e, t, n, r));
    } finally {
      ((b = l), (pn.transition = i));
    }
  }
  function Zl(e, t, n, r) {
    if (Rr) {
      var l = Jl(e, t, n, r);
      if (l === null) (hi(e, t, r, Dr, n), us(e, r));
      else if (vc(l, e, t, n, r)) r.stopPropagation();
      else if ((us(e, r), t & 4 && -1 < gc.indexOf(e))) {
        for (; l !== null; ) {
          var i = ir(l);
          if (
            (i !== null && is(i),
            (i = Jl(e, t, n, r)),
            i === null && hi(e, t, r, Dr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else hi(e, t, r, null, n);
    }
  }
  var Dr = null;
  function Jl(e, t, n, r) {
    if (((Dr = null), (e = Wl(r)), (e = Zt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Yo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Dr = e), null);
  }
  function ds(e) {
    switch (e) {
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
        switch (sc()) {
          case Ql:
            return 1;
          case ts:
            return 4;
          case jr:
          case ac:
            return 16;
          case ns:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    ql = null,
    Or = null;
  function ps() {
    if (Or) return Or;
    var e,
      t = ql,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function ms() {
    return !1;
  }
  function We(e) {
    function t(n, r, l, i, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Fr
          : ms),
        (this.isPropagationStopped = ms),
        this
      );
    }
    return (
      z(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
      }),
      t
    );
  }
  var mn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ei = We(mn),
    bn = z({}, mn, { view: 0, detail: 0 }),
    kc = We(bn),
    ti,
    ni,
    Yn,
    Ar = z({}, bn, {
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
      getModifierState: li,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((ti = e.screenX - Yn.screenX), (ni = e.screenY - Yn.screenY))
                : (ni = ti = 0),
              (Yn = e)),
            ti);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ni;
      },
    }),
    hs = We(Ar),
    Sc = z({}, Ar, { dataTransfer: 0 }),
    Nc = We(Sc),
    Ec = z({}, bn, { relatedTarget: 0 }),
    ri = We(Ec),
    Cc = z({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jc = We(Cc),
    _c = z({}, mn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    zc = We(_c),
    Pc = z({}, mn, { data: 0 }),
    gs = We(Pc),
    Tc = {
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
    Lc = {
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
    Mc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Rc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Mc[e])
        ? !!t[e]
        : !1;
  }
  function li() {
    return Rc;
  }
  var Dc = z({}, bn, {
      key: function (e) {
        if (e.key) {
          var t = Tc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Lc[e.keyCode] || "Unidentified"
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
      getModifierState: li,
      charCode: function (e) {
        return e.type === "keypress" ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ir(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Oc = We(Dc),
    Ic = z({}, Ar, {
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
    vs = We(Ic),
    Fc = z({}, bn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: li,
    }),
    Ac = We(Fc),
    Uc = z({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wc = We(Uc),
    Bc = z({}, Ar, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Hc = We(Bc),
    Vc = [9, 13, 27, 32],
    ii = q && "CompositionEvent" in window,
    Xn = null;
  q && "documentMode" in document && (Xn = document.documentMode);
  var Kc = q && "TextEvent" in window && !Xn,
    ys = q && (!ii || (Xn && 8 < Xn && 11 >= Xn)),
    xs = " ",
    ws = !1;
  function ks(e, t) {
    switch (e) {
      case "keyup":
        return Vc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ss(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var hn = !1;
  function Qc(e, t) {
    switch (e) {
      case "compositionend":
        return Ss(t);
      case "keypress":
        return t.which !== 32 ? null : ((ws = !0), xs);
      case "textInput":
        return ((e = t.data), e === xs && ws ? null : e);
      default:
        return null;
    }
  }
  function $c(e, t) {
    if (hn)
      return e === "compositionend" || (!ii && ks(e, t))
        ? ((e = ps()), (Or = ql = Rt = null), (hn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ys && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gc = {
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
  function Ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gc[e.type] : t === "textarea";
  }
  function Es(e, t, n, r) {
    (Ko(r),
      (t = Vr(t, "onChange")),
      0 < t.length &&
        ((n = new ei("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    Jn = null;
  function bc(e) {
    Hs(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Mo(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var Cs = !1;
  if (q) {
    var oi;
    if (q) {
      var si = "oninput" in document;
      if (!si) {
        var js = document.createElement("div");
        (js.setAttribute("oninput", "return;"),
          (si = typeof js.oninput == "function"));
      }
      oi = si;
    } else oi = !1;
    Cs = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function _s() {
    Zn && (Zn.detachEvent("onpropertychange", zs), (Jn = Zn = null));
  }
  function zs(e) {
    if (e.propertyName === "value" && Ur(Jn)) {
      var t = [];
      (Es(t, Jn, e, Wl(e)), bo(bc, t));
    }
  }
  function Xc(e, t, n) {
    e === "focusin"
      ? (_s(), (Zn = t), (Jn = n), Zn.attachEvent("onpropertychange", zs))
      : e === "focusout" && _s();
  }
  function Zc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ur(Jn);
  }
  function Jc(e, t) {
    if (e === "click") return Ur(t);
  }
  function qc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function ef(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == "function" ? Object.is : ef;
  function qn(e, t) {
    if (lt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!O.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ps(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ts(e, t) {
    var n = Ps(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ps(n);
    }
  }
  function Ls(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ls(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ms() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function ai(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function tf(e) {
    var t = Ms(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ls(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ai(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Ts(n, i)));
          var o = Ts(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var nf = q && "documentMode" in document && 11 >= document.documentMode,
    gn = null,
    ui = null,
    er = null,
    ci = !1;
  function Rs(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ci ||
      gn == null ||
      gn !== Sr(r) ||
      ((r = gn),
      "selectionStart" in r && ai(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (er && qn(er, r)) ||
        ((er = r),
        (r = Vr(ui, "onSelect")),
        0 < r.length &&
          ((t = new ei("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = gn))));
  }
  function Wr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vn = {
      animationend: Wr("Animation", "AnimationEnd"),
      animationiteration: Wr("Animation", "AnimationIteration"),
      animationstart: Wr("Animation", "AnimationStart"),
      transitionend: Wr("Transition", "TransitionEnd"),
    },
    fi = {},
    Ds = {};
  q &&
    ((Ds = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Br(e) {
    if (fi[e]) return fi[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ds) return (fi[e] = t[n]);
    return e;
  }
  var Os = Br("animationend"),
    Is = Br("animationiteration"),
    Fs = Br("animationstart"),
    As = Br("transitionend"),
    Us = new Map(),
    Ws =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Dt(e, t) {
    (Us.set(e, t), F(t, [e]));
  }
  for (var di = 0; di < Ws.length; di++) {
    var pi = Ws[di],
      rf = pi.toLowerCase(),
      lf = pi[0].toUpperCase() + pi.slice(1);
    Dt(rf, "on" + lf);
  }
  (Dt(Os, "onAnimationEnd"),
    Dt(Is, "onAnimationIteration"),
    Dt(Fs, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(As, "onTransitionEnd"),
    B("onMouseEnter", ["mouseout", "mouseover"]),
    B("onMouseLeave", ["mouseout", "mouseover"]),
    B("onPointerEnter", ["pointerout", "pointerover"]),
    B("onPointerLeave", ["pointerout", "pointerover"]),
    F(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    F(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    F("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    F(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    F(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    F(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    of = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(tr),
    );
  function Bs(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), rc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Hs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var s = r[o],
              u = s.instance,
              h = s.currentTarget;
            if (((s = s.listener), u !== i && l.isPropagationStopped()))
              break e;
            (Bs(l, s, h), (i = u));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((s = r[o]),
              (u = s.instance),
              (h = s.currentTarget),
              (s = s.listener),
              u !== i && l.isPropagationStopped())
            )
              break e;
            (Bs(l, s, h), (i = u));
          }
      }
    }
    if (Cr) throw ((e = Kl), (Cr = !1), (Kl = null), e);
  }
  function ee(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Vs(t, e, 2, !1), n.add(r));
  }
  function mi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Vs(n, e, r, t));
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Hr]) {
      ((e[Hr] = !0),
        _.forEach(function (n) {
          n !== "selectionchange" && (of.has(n) || mi(n, !1, e), mi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hr] || ((t[Hr] = !0), mi("selectionchange", !1, t));
    }
  }
  function Vs(e, t, n, r) {
    switch (ds(t)) {
      case 1:
        var l = xc;
        break;
      case 4:
        l = wc;
        break;
      default:
        l = Zl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Vl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function hi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var s = r.stateNode.containerInfo;
          if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var u = o.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = o.stateNode.containerInfo),
                u === l || (u.nodeType === 8 && u.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; s !== null; ) {
            if (((o = Zt(s)), o === null)) return;
            if (((u = o.tag), u === 5 || u === 6)) {
              r = i = o;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    bo(function () {
      var h = i,
        x = Wl(n),
        w = [];
      e: {
        var v = Us.get(e);
        if (v !== void 0) {
          var C = ei,
            P = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = Oc;
              break;
            case "focusin":
              ((P = "focus"), (C = ri));
              break;
            case "focusout":
              ((P = "blur"), (C = ri));
              break;
            case "beforeblur":
            case "afterblur":
              C = ri;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = hs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Nc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Ac;
              break;
            case Os:
            case Is:
            case Fs:
              C = jc;
              break;
            case As:
              C = Wc;
              break;
            case "scroll":
              C = kc;
              break;
            case "wheel":
              C = Hc;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = zc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = vs;
          }
          var T = (t & 4) !== 0,
            fe = !T && e === "scroll",
            p = T ? (v !== null ? v + "Capture" : null) : v;
          T = [];
          for (var f = h, m; f !== null; ) {
            m = f;
            var k = m.stateNode;
            if (
              (m.tag === 5 &&
                k !== null &&
                ((m = k),
                p !== null &&
                  ((k = An(f, p)), k != null && T.push(rr(f, k, m)))),
              fe)
            )
              break;
            f = f.return;
          }
          0 < T.length &&
            ((v = new C(v, P, null, n, x)), w.push({ event: v, listeners: T }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            v &&
              n !== Ul &&
              (P = n.relatedTarget || n.fromElement) &&
              (Zt(P) || P[wt]))
          )
            break e;
          if (
            (C || v) &&
            ((v =
              x.window === x
                ? x
                : (v = x.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            C
              ? ((P = n.relatedTarget || n.toElement),
                (C = h),
                (P = P ? Zt(P) : null),
                P !== null &&
                  ((fe = Xt(P)), P !== fe || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((C = null), (P = h)),
            C !== P)
          ) {
            if (
              ((T = hs),
              (k = "onMouseLeave"),
              (p = "onMouseEnter"),
              (f = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((T = vs),
                (k = "onPointerLeave"),
                (p = "onPointerEnter"),
                (f = "pointer")),
              (fe = C == null ? v : wn(C)),
              (m = P == null ? v : wn(P)),
              (v = new T(k, f + "leave", C, n, x)),
              (v.target = fe),
              (v.relatedTarget = m),
              (k = null),
              Zt(x) === h &&
                ((T = new T(p, f + "enter", P, n, x)),
                (T.target = m),
                (T.relatedTarget = fe),
                (k = T)),
              (fe = k),
              C && P)
            )
              t: {
                for (T = C, p = P, f = 0, m = T; m; m = yn(m)) f++;
                for (m = 0, k = p; k; k = yn(k)) m++;
                for (; 0 < f - m; ) ((T = yn(T)), f--);
                for (; 0 < m - f; ) ((p = yn(p)), m--);
                for (; f--; ) {
                  if (T === p || (p !== null && T === p.alternate)) break t;
                  ((T = yn(T)), (p = yn(p)));
                }
                T = null;
              }
            else T = null;
            (C !== null && Ks(w, v, C, T, !1),
              P !== null && fe !== null && Ks(w, fe, P, T, !0));
          }
        }
        e: {
          if (
            ((v = h ? wn(h) : window),
            (C = v.nodeName && v.nodeName.toLowerCase()),
            C === "select" || (C === "input" && v.type === "file"))
          )
            var L = Yc;
          else if (Ns(v))
            if (Cs) L = qc;
            else {
              L = Zc;
              var M = Xc;
            }
          else
            (C = v.nodeName) &&
              C.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (L = Jc);
          if (L && (L = L(e, h))) {
            Es(w, L, n, x);
            break e;
          }
          (M && M(e, v, h),
            e === "focusout" &&
              (M = v._wrapperState) &&
              M.controlled &&
              v.type === "number" &&
              Dl(v, "number", v.value));
        }
        switch (((M = h ? wn(h) : window), e)) {
          case "focusin":
            (Ns(M) || M.contentEditable === "true") &&
              ((gn = M), (ui = h), (er = null));
            break;
          case "focusout":
            er = ui = gn = null;
            break;
          case "mousedown":
            ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ci = !1), Rs(w, n, x));
            break;
          case "selectionchange":
            if (nf) break;
          case "keydown":
          case "keyup":
            Rs(w, n, x);
        }
        var R;
        if (ii)
          e: {
            switch (e) {
              case "compositionstart":
                var I = "onCompositionStart";
                break e;
              case "compositionend":
                I = "onCompositionEnd";
                break e;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break e;
            }
            I = void 0;
          }
        else
          hn
            ? ks(e, n) && (I = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (I = "onCompositionStart");
        (I &&
          (ys &&
            n.locale !== "ko" &&
            (hn || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && hn && (R = ps())
              : ((Rt = x),
                (ql = "value" in Rt ? Rt.value : Rt.textContent),
                (hn = !0))),
          (M = Vr(h, I)),
          0 < M.length &&
            ((I = new gs(I, e, null, n, x)),
            w.push({ event: I, listeners: M }),
            R ? (I.data = R) : ((R = Ss(n)), R !== null && (I.data = R)))),
          (R = Kc ? Qc(e, n) : $c(e, n)) &&
            ((h = Vr(h, "onBeforeInput")),
            0 < h.length &&
              ((x = new gs("onBeforeInput", "beforeinput", null, n, x)),
              w.push({ event: x, listeners: h }),
              (x.data = R))));
      }
      Hs(w, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = An(e, n)),
        i != null && r.unshift(rr(e, i, l)),
        (i = An(e, t)),
        i != null && r.push(rr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ks(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var s = n,
        u = s.alternate,
        h = s.stateNode;
      if (u !== null && u === r) break;
      (s.tag === 5 &&
        h !== null &&
        ((s = h),
        l
          ? ((u = An(n, i)), u != null && o.unshift(rr(n, u, s)))
          : l || ((u = An(n, i)), u != null && o.push(rr(n, u, s)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var sf = /\r\n?/g,
    af = /\u0000|\uFFFD/g;
  function Qs(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        sf,
        `
`,
      )
      .replace(af, "");
  }
  function Kr(e, t, n) {
    if (((t = Qs(t)), Qs(e) !== t && n)) throw Error(c(425));
  }
  function Qr() {}
  var gi = null,
    vi = null;
  function yi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var xi = typeof setTimeout == "function" ? setTimeout : void 0,
    uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $s = typeof Promise == "function" ? Promise : void 0,
    cf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $s < "u"
          ? function (e) {
              return $s.resolve(null).then(e).catch(ff);
            }
          : xi;
  function ff(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Gn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Gn(t);
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Gs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var xn = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + xn,
    lr = "__reactProps$" + xn,
    wt = "__reactContainer$" + xn,
    ki = "__reactEvents$" + xn,
    df = "__reactListeners$" + xn,
    pf = "__reactHandles$" + xn;
  function Zt(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[wt] || n[mt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Gs(e); e !== null; ) {
            if ((n = e[mt])) return n;
            e = Gs(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ir(e) {
    return (
      (e = e[mt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function $r(e) {
    return e[lr] || null;
  }
  var Si = [],
    kn = -1;
  function It(e) {
    return { current: e };
  }
  function te(e) {
    0 > kn || ((e.current = Si[kn]), (Si[kn] = null), kn--);
  }
  function J(e, t) {
    (kn++, (Si[kn] = e.current), (e.current = t));
  }
  var Ft = {},
    Ne = It(Ft),
    Me = It(!1),
    Jt = Ft;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Re(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Gr() {
    (te(Me), te(Ne));
  }
  function bs(e, t, n) {
    if (Ne.current !== Ft) throw Error(c(168));
    (J(Ne, t), J(Me, n));
  }
  function Ys(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, Z(e) || "Unknown", l));
    return z({}, n, r);
  }
  function br(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (Jt = Ne.current),
      J(Ne, e),
      J(Me, Me.current),
      !0
    );
  }
  function Xs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    (n
      ? ((e = Ys(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        te(Me),
        te(Ne),
        J(Ne, e))
      : te(Me),
      J(Me, n));
  }
  var kt = null,
    Yr = !1,
    Ni = !1;
  function Zs(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function mf(e) {
    ((Yr = !0), Zs(e));
  }
  function At() {
    if (!Ni && kt !== null) {
      Ni = !0;
      var e = 0,
        t = b;
      try {
        var n = kt;
        for (b = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Yr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), qo(Ql, At), l);
      } finally {
        ((b = t), (Ni = !1));
      }
    }
    return null;
  }
  var Nn = [],
    En = 0,
    Xr = null,
    Zr = 0,
    be = [],
    Ye = 0,
    qt = null,
    St = 1,
    Nt = "";
  function en(e, t) {
    ((Nn[En++] = Zr), (Nn[En++] = Xr), (Xr = e), (Zr = t));
  }
  function Js(e, t, n) {
    ((be[Ye++] = St), (be[Ye++] = Nt), (be[Ye++] = qt), (qt = e));
    var r = St;
    e = Nt;
    var l = 32 - rt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (St = (1 << (32 - rt(t) + l)) | (n << l) | r),
        (Nt = i + e));
    } else ((St = (1 << i) | (n << l) | r), (Nt = e));
  }
  function Ei(e) {
    e.return !== null && (en(e, 1), Js(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Xr; )
      ((Xr = Nn[--En]), (Nn[En] = null), (Zr = Nn[--En]), (Nn[En] = null));
    for (; e === qt; )
      ((qt = be[--Ye]),
        (be[Ye] = null),
        (Nt = be[--Ye]),
        (be[Ye] = null),
        (St = be[--Ye]),
        (be[Ye] = null));
  }
  var Be = null,
    He = null,
    le = !1,
    it = null;
  function qs(e, t) {
    var n = qe(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ea(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Be = e), (He = Ot(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Be = e), (He = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: St, overflow: Nt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Be = e),
              (He = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ji(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _i(e) {
    if (le) {
      var t = He;
      if (t) {
        var n = t;
        if (!ea(e, t)) {
          if (ji(e)) throw Error(c(418));
          t = Ot(n.nextSibling);
          var r = Be;
          t && ea(e, t)
            ? qs(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Be = e));
        }
      } else {
        if (ji(e)) throw Error(c(418));
        ((e.flags = (e.flags & -4097) | 2), (le = !1), (Be = e));
      }
    }
  }
  function ta(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Be = e;
  }
  function Jr(e) {
    if (e !== Be) return !1;
    if (!le) return (ta(e), (le = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps))),
      t && (t = He))
    ) {
      if (ji(e)) throw (na(), Error(c(418)));
      for (; t; ) (qs(e, t), (t = Ot(t.nextSibling)));
    }
    if ((ta(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                He = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Be ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function na() {
    for (var e = He; e; ) e = Ot(e.nextSibling);
  }
  function Cn() {
    ((He = Be = null), (le = !1));
  }
  function zi(e) {
    it === null ? (it = [e]) : it.push(e);
  }
  var hf = Se.ReactCurrentBatchConfig;
  function or(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(c(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(c(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var s = l.refs;
              o === null ? delete s[i] : (s[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(c(284));
      if (!n._owner) throw Error(c(290, e));
    }
    return e;
  }
  function qr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        c(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function ra(e) {
    var t = e._init;
    return t(e._payload);
  }
  function la(e) {
    function t(p, f) {
      if (e) {
        var m = p.deletions;
        m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
      }
    }
    function n(p, f) {
      if (!e) return null;
      for (; f !== null; ) (t(p, f), (f = f.sibling));
      return null;
    }
    function r(p, f) {
      for (p = new Map(); f !== null; )
        (f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling));
      return p;
    }
    function l(p, f) {
      return ((p = $t(p, f)), (p.index = 0), (p.sibling = null), p);
    }
    function i(p, f, m) {
      return (
        (p.index = m),
        e
          ? ((m = p.alternate),
            m !== null
              ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
              : ((p.flags |= 2), f))
          : ((p.flags |= 1048576), f)
      );
    }
    function o(p) {
      return (e && p.alternate === null && (p.flags |= 2), p);
    }
    function s(p, f, m, k) {
      return f === null || f.tag !== 6
        ? ((f = wo(m, p.mode, k)), (f.return = p), f)
        : ((f = l(f, m)), (f.return = p), f);
    }
    function u(p, f, m, k) {
      var L = m.type;
      return L === Te
        ? x(p, f, m.props.children, k, m.key)
        : f !== null &&
            (f.elementType === L ||
              (typeof L == "object" &&
                L !== null &&
                L.$$typeof === Le &&
                ra(L) === f.type))
          ? ((k = l(f, m.props)), (k.ref = or(p, f, m)), (k.return = p), k)
          : ((k = Nl(m.type, m.key, m.props, null, p.mode, k)),
            (k.ref = or(p, f, m)),
            (k.return = p),
            k);
    }
    function h(p, f, m, k) {
      return f === null ||
        f.tag !== 4 ||
        f.stateNode.containerInfo !== m.containerInfo ||
        f.stateNode.implementation !== m.implementation
        ? ((f = ko(m, p.mode, k)), (f.return = p), f)
        : ((f = l(f, m.children || [])), (f.return = p), f);
    }
    function x(p, f, m, k, L) {
      return f === null || f.tag !== 7
        ? ((f = un(m, p.mode, k, L)), (f.return = p), f)
        : ((f = l(f, m)), (f.return = p), f);
    }
    function w(p, f, m) {
      if ((typeof f == "string" && f !== "") || typeof f == "number")
        return ((f = wo("" + f, p.mode, m)), (f.return = p), f);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case tt:
            return (
              (m = Nl(f.type, f.key, f.props, null, p.mode, m)),
              (m.ref = or(p, null, f)),
              (m.return = p),
              m
            );
          case _e:
            return ((f = ko(f, p.mode, m)), (f.return = p), f);
          case Le:
            var k = f._init;
            return w(p, k(f._payload), m);
        }
        if (On(f) || D(f))
          return ((f = un(f, p.mode, m, null)), (f.return = p), f);
        qr(p, f);
      }
      return null;
    }
    function v(p, f, m, k) {
      var L = f !== null ? f.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return L !== null ? null : s(p, f, "" + m, k);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case tt:
            return m.key === L ? u(p, f, m, k) : null;
          case _e:
            return m.key === L ? h(p, f, m, k) : null;
          case Le:
            return ((L = m._init), v(p, f, L(m._payload), k));
        }
        if (On(m) || D(m)) return L !== null ? null : x(p, f, m, k, null);
        qr(p, m);
      }
      return null;
    }
    function C(p, f, m, k, L) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((p = p.get(m) || null), s(f, p, "" + k, L));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case tt:
            return (
              (p = p.get(k.key === null ? m : k.key) || null),
              u(f, p, k, L)
            );
          case _e:
            return (
              (p = p.get(k.key === null ? m : k.key) || null),
              h(f, p, k, L)
            );
          case Le:
            var M = k._init;
            return C(p, f, m, M(k._payload), L);
        }
        if (On(k) || D(k)) return ((p = p.get(m) || null), x(f, p, k, L, null));
        qr(f, k);
      }
      return null;
    }
    function P(p, f, m, k) {
      for (
        var L = null, M = null, R = f, I = (f = 0), xe = null;
        R !== null && I < m.length;
        I++
      ) {
        R.index > I ? ((xe = R), (R = null)) : (xe = R.sibling);
        var Q = v(p, R, m[I], k);
        if (Q === null) {
          R === null && (R = xe);
          break;
        }
        (e && R && Q.alternate === null && t(p, R),
          (f = i(Q, f, I)),
          M === null ? (L = Q) : (M.sibling = Q),
          (M = Q),
          (R = xe));
      }
      if (I === m.length) return (n(p, R), le && en(p, I), L);
      if (R === null) {
        for (; I < m.length; I++)
          ((R = w(p, m[I], k)),
            R !== null &&
              ((f = i(R, f, I)),
              M === null ? (L = R) : (M.sibling = R),
              (M = R)));
        return (le && en(p, I), L);
      }
      for (R = r(p, R); I < m.length; I++)
        ((xe = C(R, p, I, m[I], k)),
          xe !== null &&
            (e &&
              xe.alternate !== null &&
              R.delete(xe.key === null ? I : xe.key),
            (f = i(xe, f, I)),
            M === null ? (L = xe) : (M.sibling = xe),
            (M = xe)));
      return (
        e &&
          R.forEach(function (Gt) {
            return t(p, Gt);
          }),
        le && en(p, I),
        L
      );
    }
    function T(p, f, m, k) {
      var L = D(m);
      if (typeof L != "function") throw Error(c(150));
      if (((m = L.call(m)), m == null)) throw Error(c(151));
      for (
        var M = (L = null), R = f, I = (f = 0), xe = null, Q = m.next();
        R !== null && !Q.done;
        I++, Q = m.next()
      ) {
        R.index > I ? ((xe = R), (R = null)) : (xe = R.sibling);
        var Gt = v(p, R, Q.value, k);
        if (Gt === null) {
          R === null && (R = xe);
          break;
        }
        (e && R && Gt.alternate === null && t(p, R),
          (f = i(Gt, f, I)),
          M === null ? (L = Gt) : (M.sibling = Gt),
          (M = Gt),
          (R = xe));
      }
      if (Q.done) return (n(p, R), le && en(p, I), L);
      if (R === null) {
        for (; !Q.done; I++, Q = m.next())
          ((Q = w(p, Q.value, k)),
            Q !== null &&
              ((f = i(Q, f, I)),
              M === null ? (L = Q) : (M.sibling = Q),
              (M = Q)));
        return (le && en(p, I), L);
      }
      for (R = r(p, R); !Q.done; I++, Q = m.next())
        ((Q = C(R, p, I, Q.value, k)),
          Q !== null &&
            (e && Q.alternate !== null && R.delete(Q.key === null ? I : Q.key),
            (f = i(Q, f, I)),
            M === null ? (L = Q) : (M.sibling = Q),
            (M = Q)));
      return (
        e &&
          R.forEach(function (bf) {
            return t(p, bf);
          }),
        le && en(p, I),
        L
      );
    }
    function fe(p, f, m, k) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Te &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case tt:
            e: {
              for (var L = m.key, M = f; M !== null; ) {
                if (M.key === L) {
                  if (((L = m.type), L === Te)) {
                    if (M.tag === 7) {
                      (n(p, M.sibling),
                        (f = l(M, m.props.children)),
                        (f.return = p),
                        (p = f));
                      break e;
                    }
                  } else if (
                    M.elementType === L ||
                    (typeof L == "object" &&
                      L !== null &&
                      L.$$typeof === Le &&
                      ra(L) === M.type)
                  ) {
                    (n(p, M.sibling),
                      (f = l(M, m.props)),
                      (f.ref = or(p, M, m)),
                      (f.return = p),
                      (p = f));
                    break e;
                  }
                  n(p, M);
                  break;
                } else t(p, M);
                M = M.sibling;
              }
              m.type === Te
                ? ((f = un(m.props.children, p.mode, k, m.key)),
                  (f.return = p),
                  (p = f))
                : ((k = Nl(m.type, m.key, m.props, null, p.mode, k)),
                  (k.ref = or(p, f, m)),
                  (k.return = p),
                  (p = k));
            }
            return o(p);
          case _e:
            e: {
              for (M = m.key; f !== null; ) {
                if (f.key === M)
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === m.containerInfo &&
                    f.stateNode.implementation === m.implementation
                  ) {
                    (n(p, f.sibling),
                      (f = l(f, m.children || [])),
                      (f.return = p),
                      (p = f));
                    break e;
                  } else {
                    n(p, f);
                    break;
                  }
                else t(p, f);
                f = f.sibling;
              }
              ((f = ko(m, p.mode, k)), (f.return = p), (p = f));
            }
            return o(p);
          case Le:
            return ((M = m._init), fe(p, f, M(m._payload), k));
        }
        if (On(m)) return P(p, f, m, k);
        if (D(m)) return T(p, f, m, k);
        qr(p, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number"
        ? ((m = "" + m),
          f !== null && f.tag === 6
            ? (n(p, f.sibling), (f = l(f, m)), (f.return = p), (p = f))
            : (n(p, f), (f = wo(m, p.mode, k)), (f.return = p), (p = f)),
          o(p))
        : n(p, f);
    }
    return fe;
  }
  var jn = la(!0),
    ia = la(!1),
    el = It(null),
    tl = null,
    _n = null,
    Pi = null;
  function Ti() {
    Pi = _n = tl = null;
  }
  function Li(e) {
    var t = el.current;
    (te(el), (e._currentValue = t));
  }
  function Mi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function zn(e, t) {
    ((tl = e),
      (Pi = _n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (De = !0), (e.firstContext = null)));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Pi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
        if (tl === null) throw Error(c(308));
        ((_n = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var tn = null;
  function Ri(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  function oa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ri(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Et(e, r)
    );
  }
  function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Di(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function sa(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Ct(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (H & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ri(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function nl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n));
    }
  }
  function aa(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function rl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var u = s,
        h = u.next;
      ((u.next = null), o === null ? (i = h) : (o.next = h), (o = u));
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (s = x.lastBaseUpdate),
        s !== o &&
          (s === null ? (x.firstBaseUpdate = h) : (s.next = h),
          (x.lastBaseUpdate = u)));
    }
    if (i !== null) {
      var w = l.baseState;
      ((o = 0), (x = h = u = null), (s = i));
      do {
        var v = s.lane,
          C = s.eventTime;
        if ((r & v) === v) {
          x !== null &&
            (x = x.next =
              {
                eventTime: C,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var P = e,
              T = s;
            switch (((v = t), (C = n), T.tag)) {
              case 1:
                if (((P = T.payload), typeof P == "function")) {
                  w = P.call(C, w, v);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = T.payload),
                  (v = typeof P == "function" ? P.call(C, w, v) : P),
                  v == null)
                )
                  break e;
                w = z({}, w, v);
                break e;
              case 2:
                Ut = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [s]) : v.push(s));
        } else
          ((C = {
            eventTime: C,
            lane: v,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            x === null ? ((h = x = C), (u = w)) : (x = x.next = C),
            (o |= v));
        if (((s = s.next), s === null)) {
          if (((s = l.shared.pending), s === null)) break;
          ((v = s),
            (s = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (x === null && (u = w),
        (l.baseState = u),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = x),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((ln |= o), (e.lanes = o), (e.memoizedState = w));
    }
  }
  function ua(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(c(191, l));
          l.call(r);
        }
      }
  }
  var sr = {},
    ht = It(sr),
    ar = It(sr),
    ur = It(sr);
  function nn(e) {
    if (e === sr) throw Error(c(174));
    return e;
  }
  function Oi(e, t) {
    switch ((J(ur, t), J(ar, e), J(ht, sr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Il(t, e)));
    }
    (te(ht), J(ht, t));
  }
  function Pn() {
    (te(ht), te(ar), te(ur));
  }
  function ca(e) {
    nn(ur.current);
    var t = nn(ht.current),
      n = Il(t, e.type);
    t !== n && (J(ar, e), J(ht, n));
  }
  function Ii(e) {
    ar.current === e && (te(ht), te(ar));
  }
  var oe = It(0);
  function ll(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Fi = [];
  function Ai() {
    for (var e = 0; e < Fi.length; e++)
      Fi[e]._workInProgressVersionPrimary = null;
    Fi.length = 0;
  }
  var il = Se.ReactCurrentDispatcher,
    Ui = Se.ReactCurrentBatchConfig,
    rn = 0,
    se = null,
    me = null,
    ve = null,
    ol = !1,
    cr = !1,
    fr = 0,
    gf = 0;
  function Ee() {
    throw Error(c(321));
  }
  function Wi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Bi(e, t, n, r, l, i) {
    if (
      ((rn = i),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? wf : kf),
      (e = n(r, l)),
      cr)
    ) {
      i = 0;
      do {
        if (((cr = !1), (fr = 0), 25 <= i)) throw Error(c(301));
        ((i += 1),
          (ve = me = null),
          (t.updateQueue = null),
          (il.current = Sf),
          (e = n(r, l)));
      } while (cr);
    }
    if (
      ((il.current = ul),
      (t = me !== null && me.next !== null),
      (rn = 0),
      (ve = me = se = null),
      (ol = !1),
      t)
    )
      throw Error(c(300));
    return e;
  }
  function Hi() {
    var e = fr !== 0;
    return ((fr = 0), e);
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ve === null ? (se.memoizedState = ve = e) : (ve = ve.next = e), ve);
  }
  function Ze() {
    if (me === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ve === null ? se.memoizedState : ve.next;
    if (t !== null) ((ve = t), (me = e));
    else {
      if (e === null) throw Error(c(310));
      ((me = e),
        (e = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        ve === null ? (se.memoizedState = ve = e) : (ve = ve.next = e));
    }
    return ve;
  }
  function dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vi(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = me,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var s = (o = null),
        u = null,
        h = i;
      do {
        var x = h.lane;
        if ((rn & x) === x)
          (u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var w = {
            lane: x,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (u === null ? ((s = u = w), (o = r)) : (u = u.next = w),
            (se.lanes |= x),
            (ln |= x));
        }
        h = h.next;
      } while (h !== null && h !== i);
      (u === null ? (o = r) : (u.next = s),
        lt(r, t.memoizedState) || (De = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = u),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (se.lanes |= i), (ln |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ki(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (lt(i, t.memoizedState) || (De = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function fa() {}
  function da(e, t) {
    var n = se,
      r = Ze(),
      l = t(),
      i = !lt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (De = !0)),
      (r = r.queue),
      Qi(ha.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        pr(9, ma.bind(null, n, r, l, t), void 0, null),
        ye === null)
      )
        throw Error(c(349));
      (rn & 30) !== 0 || pa(n, t, l);
    }
    return l;
  }
  function pa(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (se.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ma(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ga(t) && va(e));
  }
  function ha(e, t, n) {
    return n(function () {
      ga(t) && va(e);
    });
  }
  function ga(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !lt(e, n);
    } catch {
      return !0;
    }
  }
  function va(e) {
    var t = Et(e, 1);
    t !== null && ut(t, e, 1, -1);
  }
  function ya(e) {
    var t = gt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = xf.bind(null, se, e)),
      [t.memoizedState, e]
    );
  }
  function pr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function xa() {
    return Ze().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = gt();
    ((se.flags |= e),
      (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function al(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (((i = o.destroy), r !== null && Wi(r, o.deps))) {
        l.memoizedState = pr(t, n, i, r);
        return;
      }
    }
    ((se.flags |= e), (l.memoizedState = pr(1 | t, n, i, r)));
  }
  function wa(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Qi(e, t) {
    return al(2048, 8, e, t);
  }
  function ka(e, t) {
    return al(4, 2, e, t);
  }
  function Sa(e, t) {
    return al(4, 4, e, t);
  }
  function Na(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ea(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      al(4, 4, Na.bind(null, t, e), n)
    );
  }
  function $i() {}
  function Ca(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ja(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function _a(e, t, n) {
    return (rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n))
      : (lt(n, t) ||
          ((n = rs()), (se.lanes |= n), (ln |= n), (e.baseState = !0)),
        t);
  }
  function vf(e, t) {
    var n = b;
    ((b = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ui.transition;
    Ui.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((b = n), (Ui.transition = r));
    }
  }
  function za() {
    return Ze().memoizedState;
  }
  function yf(e, t, n) {
    var r = Kt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pa(e))
    )
      Ta(t, n);
    else if (((n = oa(e, t, n, r)), n !== null)) {
      var l = Pe();
      (ut(n, e, r, l), La(n, t, r));
    }
  }
  function xf(e, t, n) {
    var r = Kt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Pa(e)) Ta(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            s = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = s), lt(s, o))) {
            var u = t.interleaved;
            (u === null
              ? ((l.next = l), Ri(t))
              : ((l.next = u.next), (u.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = oa(e, t, l, r)),
        n !== null && ((l = Pe()), ut(n, e, r, l), La(n, t, r)));
    }
  }
  function Pa(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function Ta(e, t) {
    cr = ol = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function La(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n));
    }
  }
  var ul = {
      readContext: Xe,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((gt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Xe,
      useEffect: wa,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          sl(4194308, 4, Na.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = gt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = gt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = yf.bind(null, se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = gt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ya,
      useDebugValue: $i,
      useDeferredValue: function (e) {
        return (gt().memoizedState = e);
      },
      useTransition: function () {
        var e = ya(!1),
          t = e[0];
        return ((e = vf.bind(null, e[1])), (gt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = se,
          l = gt();
        if (le) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), ye === null)) throw Error(c(349));
          (rn & 30) !== 0 || pa(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          wa(ha.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          pr(9, ma.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = gt(),
          t = ye.identifierPrefix;
        if (le) {
          var n = Nt,
            r = St;
          ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = gf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    kf = {
      readContext: Xe,
      useCallback: Ca,
      useContext: Xe,
      useEffect: Qi,
      useImperativeHandle: Ea,
      useInsertionEffect: ka,
      useLayoutEffect: Sa,
      useMemo: ja,
      useReducer: Vi,
      useRef: xa,
      useState: function () {
        return Vi(dr);
      },
      useDebugValue: $i,
      useDeferredValue: function (e) {
        var t = Ze();
        return _a(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Vi(dr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: fa,
      useSyncExternalStore: da,
      useId: za,
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: Xe,
      useCallback: Ca,
      useContext: Xe,
      useEffect: Qi,
      useImperativeHandle: Ea,
      useInsertionEffect: ka,
      useLayoutEffect: Sa,
      useMemo: ja,
      useReducer: Ki,
      useRef: xa,
      useState: function () {
        return Ki(dr);
      },
      useDebugValue: $i,
      useDeferredValue: function (e) {
        var t = Ze();
        return me === null ? (t.memoizedState = e) : _a(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Ki(dr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: fa,
      useSyncExternalStore: da,
      useId: za,
      unstable_isNewReconciler: !1,
    };
  function ot(e, t) {
    if (e && e.defaultProps) {
      ((t = z({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : z({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Kt(e),
        i = Ct(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Wt(e, i, l)),
        t !== null && (ut(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Kt(e),
        i = Ct(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Wt(e, i, l)),
        t !== null && (ut(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Kt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Wt(e, l, r)),
        t !== null && (ut(t, e, r, n), nl(t, e, r)));
    },
  };
  function Ma(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, i)
          : !0
    );
  }
  function Ra(e, t, n) {
    var r = !1,
      l = Ft,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Xe(i))
        : ((l = Re(t) ? Jt : Ne.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Sn(e, l) : Ft)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Da(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function bi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Di(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Xe(i))
      : ((i = Re(t) ? Jt : Ne.current), (l.context = Sn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Gi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && cl.enqueueReplaceState(l, l.state, null),
        rl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Tn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += V(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Yi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Nf = typeof WeakMap == "function" ? WeakMap : Map;
  function Oa(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (fo = r)), Xi(e, t));
      }),
      n
    );
  }
  function Ia(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Xi(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Xi(e, t),
            typeof r != "function" &&
              (Ht === null ? (Ht = new Set([this])) : Ht.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Fa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Nf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Ff.bind(null, e, t, n)), t.then(e, e));
  }
  function Aa(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ua(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ct(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ef = Se.ReactCurrentOwner,
    De = !1;
  function ze(e, t, n, r) {
    t.child = e === null ? ia(t, null, n, r) : jn(t, e.child, n, r);
  }
  function Wa(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      zn(t, l),
      (r = Bi(e, t, n, r, i, l)),
      (n = Hi()),
      e !== null && !De
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (le && n && Ei(t), (t.flags |= 1), ze(e, t, r, l), t.child)
    );
  }
  function Ba(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !xo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ha(e, t, i, r, l))
        : ((e = Nl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : qn), n(o, r) && e.ref === t.ref)
      )
        return jt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = $t(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ha(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qn(i, r) && e.ref === t.ref)
        if (((De = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (De = !0);
        else return ((t.lanes = e.lanes), jt(e, t, l));
    }
    return Zi(e, t, n, r, l);
  }
  function Va(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          J(Mn, Ve),
          (Ve |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            J(Mn, Ve),
            (Ve |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          J(Mn, Ve),
          (Ve |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        J(Mn, Ve),
        (Ve |= r));
    return (ze(e, t, l, n), t.child);
  }
  function Ka(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zi(e, t, n, r, l) {
    var i = Re(n) ? Jt : Ne.current;
    return (
      (i = Sn(t, i)),
      zn(t, l),
      (n = Bi(e, t, n, r, i, l)),
      (r = Hi()),
      e !== null && !De
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (le && r && Ei(t), (t.flags |= 1), ze(e, t, n, l), t.child)
    );
  }
  function Qa(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0;
      br(t);
    } else i = !1;
    if ((zn(t, l), t.stateNode === null))
      (dl(e, t), Ra(t, n, r), bi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        s = t.memoizedProps;
      o.props = s;
      var u = o.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = Xe(h))
        : ((h = Re(n) ? Jt : Ne.current), (h = Sn(t, h)));
      var x = n.getDerivedStateFromProps,
        w =
          typeof x == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((s !== r || u !== h) && Da(t, o, r, h)),
        (Ut = !1));
      var v = t.memoizedState;
      ((o.state = v),
        rl(t, r, o, l),
        (u = t.memoizedState),
        s !== r || v !== u || Me.current || Ut
          ? (typeof x == "function" && (Gi(t, n, x, r), (u = t.memoizedState)),
            (s = Ut || Ma(t, n, s, r, v, u, h))
              ? (w ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (o.props = r),
            (o.state = u),
            (o.context = h),
            (r = s))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((o = t.stateNode),
        sa(e, t),
        (s = t.memoizedProps),
        (h = t.type === t.elementType ? s : ot(t.type, s)),
        (o.props = h),
        (w = t.pendingProps),
        (v = o.context),
        (u = n.contextType),
        typeof u == "object" && u !== null
          ? (u = Xe(u))
          : ((u = Re(n) ? Jt : Ne.current), (u = Sn(t, u))));
      var C = n.getDerivedStateFromProps;
      ((x =
        typeof C == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((s !== w || v !== u) && Da(t, o, r, u)),
        (Ut = !1),
        (v = t.memoizedState),
        (o.state = v),
        rl(t, r, o, l));
      var P = t.memoizedState;
      s !== w || v !== P || Me.current || Ut
        ? (typeof C == "function" && (Gi(t, n, C, r), (P = t.memoizedState)),
          (h = Ut || Ma(t, n, h, r, v, P, u) || !1)
            ? (x ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, P, u),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, P, u)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (s === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (o.props = r),
          (o.state = P),
          (o.context = u),
          (r = h))
        : (typeof o.componentDidUpdate != "function" ||
            (s === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ji(e, t, n, r, i, l);
  }
  function Ji(e, t, n, r, l, i) {
    Ka(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Xs(t, n, !1), jt(e, t, i));
    ((r = t.stateNode), (Ef.current = t));
    var s =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = jn(t, e.child, null, i)), (t.child = jn(t, null, s, i)))
        : ze(e, t, s, i),
      (t.memoizedState = r.state),
      l && Xs(t, n, !0),
      t.child
    );
  }
  function $a(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? bs(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && bs(e, t.context, !1),
      Oi(e, t.containerInfo));
  }
  function Ga(e, t, n, r, l) {
    return (Cn(), zi(l), (t.flags |= 256), ze(e, t, n, r), t.child);
  }
  var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function eo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ba(e, t, n) {
    var r = t.pendingProps,
      l = oe.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      s;
    if (
      ((s = o) ||
        (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      s
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      J(oe, l & 1),
      e === null)
    )
      return (
        _i(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = El(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = eo(n)),
                (t.memoizedState = qi),
                e)
              : to(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
      return Cf(e, t, o, r, s, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling));
      var u = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = u),
            (t.deletions = null))
          : ((r = $t(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        s !== null ? (i = $t(s, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? eo(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = qi),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = $t(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function to(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && zi(r),
      jn(t, e.child, null, n),
      (e = to(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Cf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Yi(Error(c(422)))), fl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (i = un(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && jn(t, e.child, null, o),
            (t.child.memoizedState = eo(o)),
            (t.memoizedState = qi),
            i);
    if ((t.mode & 1) === 0) return fl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s),
        (i = Error(c(419))),
        (r = Yi(i, r, void 0)),
        fl(e, t, o, r)
      );
    }
    if (((s = (o & e.childLanes) !== 0), De || s)) {
      if (((r = ye), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Et(e, l), ut(r, e, l, -1)));
      }
      return (yo(), (r = Yi(Error(c(421)))), fl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Af.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (He = Ot(l.nextSibling)),
        (Be = t),
        (le = !0),
        (it = null),
        e !== null &&
          ((be[Ye++] = St),
          (be[Ye++] = Nt),
          (be[Ye++] = qt),
          (St = e.id),
          (Nt = e.overflow),
          (qt = t)),
        (t = to(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ya(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Mi(e.return, t, n));
  }
  function no(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Xa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((ze(e, t, r.children, n), (r = oe.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ya(e, n, t);
          else if (e.tag === 19) Ya(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((J(oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && ll(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            no(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          no(t, !0, n, null, i);
          break;
        case "together":
          no(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function dl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function jt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ln |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = $t(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function jf(e, t, n) {
    switch (t.tag) {
      case 3:
        ($a(t), Cn());
        break;
      case 5:
        ca(t);
        break;
      case 1:
        Re(t.type) && br(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (J(el, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (J(oe, oe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ba(e, t, n)
              : (J(oe, oe.current & 1),
                (e = jt(e, t, n)),
                e !== null ? e.sibling : null);
        J(oe, oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Xa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          J(oe, oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Va(e, t, n));
    }
    return jt(e, t, n);
  }
  var Za, ro, Ja, qa;
  ((Za = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ro = function () {}),
    (Ja = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), nn(ht.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Ml(e, l)), (r = Ml(e, r)), (i = []));
            break;
          case "select":
            ((l = z({}, l, { value: void 0 })),
              (r = z({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((l = Ol(e, l)), (r = Ol(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Qr);
        }
        Fl(n, r);
        var o;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var s = l[h];
              for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (N.hasOwnProperty(h)
                  ? i || (i = [])
                  : (i = i || []).push(h, null));
        for (h in r) {
          var u = r[h];
          if (
            ((s = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && u !== s && (u != null || s != null))
          )
            if (h === "style")
              if (s) {
                for (o in s)
                  !s.hasOwnProperty(o) ||
                    (u && u.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in u)
                  u.hasOwnProperty(o) &&
                    s[o] !== u[o] &&
                    (n || (n = {}), (n[o] = u[o]));
              } else (n || (i || (i = []), i.push(h, n)), (n = u));
            else
              h === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0),
                  (s = s ? s.__html : void 0),
                  u != null && s !== u && (i = i || []).push(h, u))
                : h === "children"
                  ? (typeof u != "string" && typeof u != "number") ||
                    (i = i || []).push(h, "" + u)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    (N.hasOwnProperty(h)
                      ? (u != null && h === "onScroll" && ee("scroll", e),
                        i || s === u || (i = []))
                      : (i = i || []).push(h, u));
        }
        n && (i = i || []).push("style", n);
        var h = i;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (qa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function mr(e, t) {
    if (!le)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function _f(e, t, n) {
    var r = t.pendingProps;
    switch ((Ci(t), t.tag)) {
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
        return (Ce(t), null);
      case 1:
        return (Re(t.type) && Gr(), Ce(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          te(Me),
          te(Ne),
          Ai(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), it !== null && (ho(it), (it = null)))),
          ro(e, t),
          Ce(t),
          null
        );
      case 5:
        Ii(t);
        var l = nn(ur.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Ja(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ce(t), null);
          }
          if (((e = nn(ht.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[mt] = t), (r[lr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (ee("cancel", r), ee("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) ee(tr[l], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (ee("error", r), ee("load", r));
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                (Ro(r, i), ee("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  ee("invalid", r));
                break;
              case "textarea":
                (Io(r, i), ee("invalid", r));
            }
            (Fl(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, s, e),
                      (l = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, s, e),
                      (l = ["children", "" + s]))
                  : N.hasOwnProperty(o) &&
                    s != null &&
                    o === "onScroll" &&
                    ee("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Oo(r, i, !0));
                break;
              case "textarea":
                (kr(r), Ao(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Qr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Uo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[mt] = t),
              (e[lr] = r),
              Za(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Al(n, r)), n)) {
                case "dialog":
                  (ee("cancel", e), ee("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ee("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < tr.length; l++) ee(tr[l], e);
                  l = r;
                  break;
                case "source":
                  (ee("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (ee("error", e), ee("load", e), (l = r));
                  break;
                case "details":
                  (ee("toggle", e), (l = r));
                  break;
                case "input":
                  (Ro(e, r), (l = Ml(e, r)), ee("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = z({}, r, { value: void 0 })),
                    ee("invalid", e));
                  break;
                case "textarea":
                  (Io(e, r), (l = Ol(e, r)), ee("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (s = l));
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var u = s[i];
                  i === "style"
                    ? Ho(e, u)
                    : i === "dangerouslySetInnerHTML"
                      ? ((u = u ? u.__html : void 0), u != null && Wo(e, u))
                      : i === "children"
                        ? typeof u == "string"
                          ? (n !== "textarea" || u !== "") && In(e, u)
                          : typeof u == "number" && In(e, "" + u)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (N.hasOwnProperty(i)
                            ? u != null && i === "onScroll" && ee("scroll", e)
                            : u != null && et(e, i, u, o));
                }
              switch (n) {
                case "input":
                  (kr(e), Oo(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Ao(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + G(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? cn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        cn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ce(t), null);
      case 6:
        if (e && t.stateNode != null) qa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (((n = nn(ur.current)), nn(ht.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[mt] = t),
              (i = r.nodeValue !== n) && ((e = Be), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Kr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[mt] = t),
              (t.stateNode = r));
        }
        return (Ce(t), null);
      case 13:
        if (
          (te(oe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (le && He !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (na(), Cn(), (t.flags |= 98560), (i = !1));
          else if (((i = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(c(317));
              i[mt] = t;
            } else
              (Cn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ce(t), (i = !1));
          } else (it !== null && (ho(it), (it = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (oe.current & 1) !== 0
                  ? he === 0 && (he = 3)
                  : yo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (
          Pn(),
          ro(e, t),
          e === null && nr(t.stateNode.containerInfo),
          Ce(t),
          null
        );
      case 10:
        return (Li(t.type._context), Ce(t), null);
      case 17:
        return (Re(t.type) && Gr(), Ce(t), null);
      case 19:
        if ((te(oe), (i = t.memoizedState), i === null)) return (Ce(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) mr(i, !1);
          else {
            if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = ll(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      mr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (J(oe, (oe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ce() > Rn &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                mr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !le)
              )
                return (Ce(t), null);
            } else
              2 * ce() - i.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ce()),
            (t.sibling = null),
            (n = oe.current),
            J(oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          vo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ve & 1073741824) !== 0 &&
              (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ce(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function zf(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Gr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          te(Me),
          te(Ne),
          Ai(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Ii(t), null);
      case 13:
        if (
          (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          Cn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (te(oe), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Li(t.type._context), null);
      case 22:
      case 23:
        return (vo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    je = !1,
    Pf = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ue(e, t, r);
        }
      else n.current = null;
  }
  function lo(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var eu = !1;
  function Tf(e, t) {
    if (((gi = Rr), (e = Ms()), ai(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              s = -1,
              u = -1,
              h = 0,
              x = 0,
              w = e,
              v = null;
            t: for (;;) {
              for (
                var C;
                w !== n || (l !== 0 && w.nodeType !== 3) || (s = o + l),
                  w !== i || (r !== 0 && w.nodeType !== 3) || (u = o + r),
                  w.nodeType === 3 && (o += w.nodeValue.length),
                  (C = w.firstChild) !== null;
              )
                ((v = w), (w = C));
              for (;;) {
                if (w === e) break t;
                if (
                  (v === n && ++h === l && (s = o),
                  v === i && ++x === r && (u = o),
                  (C = w.nextSibling) !== null)
                )
                  break;
                ((w = v), (v = w.parentNode));
              }
              w = C;
            }
            n = s === -1 || u === -1 ? null : { start: s, end: u };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      vi = { focusedElem: e, selectionRange: n }, Rr = !1, j = t;
      j !== null;
    )
      if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (j = e));
      else
        for (; j !== null; ) {
          t = j;
          try {
            var P = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (P !== null) {
                    var T = P.memoizedProps,
                      fe = P.memoizedState,
                      p = t.stateNode,
                      f = p.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? T : ot(t.type, T),
                        fe,
                      );
                    p.__reactInternalSnapshotBeforeUpdate = f;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = "")
                    : m.nodeType === 9 &&
                      m.documentElement &&
                      m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (k) {
            ue(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (j = e));
            break;
          }
          j = t.return;
        }
    return ((P = eu), (eu = !1), P);
  }
  function hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && lo(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function io(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function tu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), tu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[mt],
          delete t[lr],
          delete t[ki],
          delete t[df],
          delete t[pf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function nu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ru(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || nu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Qr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oo(e, t, n), e = e.sibling; e !== null; )
        (oo(e, t, n), (e = e.sibling));
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (so(e, t, n), e = e.sibling; e !== null; )
        (so(e, t, n), (e = e.sibling));
  }
  var we = null,
    st = !1;
  function Bt(e, t, n) {
    for (n = n.child; n !== null; ) (lu(e, t, n), (n = n.sibling));
  }
  function lu(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(_r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        je || Ln(n, t);
      case 6:
        var r = we,
          l = st;
        ((we = null),
          Bt(e, t, n),
          (we = r),
          (st = l),
          we !== null &&
            (st
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : we.removeChild(n.stateNode)));
        break;
      case 18:
        we !== null &&
          (st
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8
                ? wi(e.parentNode, n)
                : e.nodeType === 1 && wi(e, n),
              Gn(e))
            : wi(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = st),
          (we = n.stateNode.containerInfo),
          (st = !0),
          Bt(e, t, n),
          (we = r),
          (st = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !je &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && lo(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Bt(e, t, n);
        break;
      case 1:
        if (
          !je &&
          (Ln(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (s) {
            ue(n, t, s);
          }
        Bt(e, t, n);
        break;
      case 21:
        Bt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((je = (r = je) || n.memoizedState !== null), Bt(e, t, n), (je = r))
          : Bt(e, t, n);
        break;
      default:
        Bt(e, t, n);
    }
  }
  function iu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Pf()),
        t.forEach(function (r) {
          var l = Uf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function at(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            s = o;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                ((we = s.stateNode), (st = !1));
                break e;
              case 3:
                ((we = s.stateNode.containerInfo), (st = !0));
                break e;
              case 4:
                ((we = s.stateNode.containerInfo), (st = !0));
                break e;
            }
            s = s.return;
          }
          if (we === null) throw Error(c(160));
          (lu(i, o, l), (we = null), (st = !1));
          var u = l.alternate;
          (u !== null && (u.return = null), (l.return = null));
        } catch (h) {
          ue(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ou(t, e), (t = t.sibling));
  }
  function ou(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((at(t, e), vt(e), r & 4)) {
          try {
            (hr(3, e, e.return), ml(3, e));
          } catch (T) {
            ue(e, e.return, T);
          }
          try {
            hr(5, e, e.return);
          } catch (T) {
            ue(e, e.return, T);
          }
        }
        break;
      case 1:
        (at(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if (
          (at(t, e),
          vt(e),
          r & 512 && n !== null && Ln(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (T) {
            ue(e, e.return, T);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            s = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              (s === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Do(l, i),
                Al(s, o));
              var h = Al(s, i);
              for (o = 0; o < u.length; o += 2) {
                var x = u[o],
                  w = u[o + 1];
                x === "style"
                  ? Ho(l, w)
                  : x === "dangerouslySetInnerHTML"
                    ? Wo(l, w)
                    : x === "children"
                      ? In(l, w)
                      : et(l, x, w, h);
              }
              switch (s) {
                case "input":
                  Rl(l, i);
                  break;
                case "textarea":
                  Fo(l, i);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var C = i.value;
                  C != null
                    ? cn(l, !!i.multiple, C, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? cn(l, !!i.multiple, i.defaultValue, !0)
                        : cn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[lr] = i;
            } catch (T) {
              ue(e, e.return, T);
            }
        }
        break;
      case 6:
        if ((at(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (T) {
            ue(e, e.return, T);
          }
        }
        break;
      case 3:
        if (
          (at(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Gn(t.containerInfo);
          } catch (T) {
            ue(e, e.return, T);
          }
        break;
      case 4:
        (at(t, e), vt(e));
        break;
      case 13:
        (at(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (co = ce())),
          r & 4 && iu(e));
        break;
      case 22:
        if (
          ((x = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((je = (h = je) || x), at(t, e), (je = h)) : at(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !x && (e.mode & 1) !== 0)
          )
            for (j = e, x = e.child; x !== null; ) {
              for (w = j = x; j !== null; ) {
                switch (((v = j), (C = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, v, v.return);
                    break;
                  case 1:
                    Ln(v, v.return);
                    var P = v.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (T) {
                        ue(r, n, T);
                      }
                    }
                    break;
                  case 5:
                    Ln(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      uu(w);
                      continue;
                    }
                }
                C !== null ? ((C.return = v), (j = C)) : uu(w);
              }
              x = x.sibling;
            }
          e: for (x = null, w = e; ; ) {
            if (w.tag === 5) {
              if (x === null) {
                x = w;
                try {
                  ((l = w.stateNode),
                    h
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((s = w.stateNode),
                        (u = w.memoizedProps.style),
                        (o =
                          u != null && u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (s.style.display = Bo("display", o))));
                } catch (T) {
                  ue(e, e.return, T);
                }
              }
            } else if (w.tag === 6) {
              if (x === null)
                try {
                  w.stateNode.nodeValue = h ? "" : w.memoizedProps;
                } catch (T) {
                  ue(e, e.return, T);
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) ||
                w.memoizedState === null ||
                w === e) &&
              w.child !== null
            ) {
              ((w.child.return = w), (w = w.child));
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              (x === w && (x = null), (w = w.return));
            }
            (x === w && (x = null),
              (w.sibling.return = w.return),
              (w = w.sibling));
          }
        }
        break;
      case 19:
        (at(t, e), vt(e), r & 4 && iu(e));
        break;
      case 21:
        break;
      default:
        (at(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (nu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var i = ru(e);
            so(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              s = ru(e);
            oo(e, s, o);
            break;
          default:
            throw Error(c(161));
        }
      } catch (u) {
        ue(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lf(e, t, n) {
    ((j = e), su(e));
  }
  function su(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
      var l = j,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || pl;
        if (!o) {
          var s = l.alternate,
            u = (s !== null && s.memoizedState !== null) || je;
          s = pl;
          var h = je;
          if (((pl = o), (je = u) && !h))
            for (j = l; j !== null; )
              ((o = j),
                (u = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? cu(l)
                  : u !== null
                    ? ((u.return = o), (j = u))
                    : cu(l));
          for (; i !== null; ) ((j = i), su(i), (i = i.sibling));
          ((j = l), (pl = s), (je = h));
        }
        au(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (j = i))
          : au(e);
    }
  }
  function au(e) {
    for (; j !== null; ) {
      var t = j;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                je || ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !je)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ot(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && ua(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ua(t, o, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
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
                if (t.memoizedState === null) {
                  var h = t.alternate;
                  if (h !== null) {
                    var x = h.memoizedState;
                    if (x !== null) {
                      var w = x.dehydrated;
                      w !== null && Gn(w);
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
                throw Error(c(163));
            }
          je || (t.flags & 512 && io(t));
        } catch (v) {
          ue(t, t.return, v);
        }
      }
      if (t === e) {
        j = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (j = n));
        break;
      }
      j = t.return;
    }
  }
  function uu(e) {
    for (; j !== null; ) {
      var t = j;
      if (t === e) {
        j = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (j = n));
        break;
      }
      j = t.return;
    }
  }
  function cu(e) {
    for (; j !== null; ) {
      var t = j;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (u) {
              ue(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                ue(t, l, u);
              }
            }
            var i = t.return;
            try {
              io(t);
            } catch (u) {
              ue(t, i, u);
            }
            break;
          case 5:
            var o = t.return;
            try {
              io(t);
            } catch (u) {
              ue(t, o, u);
            }
        }
      } catch (u) {
        ue(t, t.return, u);
      }
      if (t === e) {
        j = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        ((s.return = t.return), (j = s));
        break;
      }
      j = t.return;
    }
  }
  var Mf = Math.ceil,
    hl = Se.ReactCurrentDispatcher,
    ao = Se.ReactCurrentOwner,
    Je = Se.ReactCurrentBatchConfig,
    H = 0,
    ye = null,
    pe = null,
    ke = 0,
    Ve = 0,
    Mn = It(0),
    he = 0,
    gr = null,
    ln = 0,
    gl = 0,
    uo = 0,
    vr = null,
    Oe = null,
    co = 0,
    Rn = 1 / 0,
    _t = null,
    vl = !1,
    fo = null,
    Ht = null,
    yl = !1,
    Vt = null,
    xl = 0,
    yr = 0,
    po = null,
    wl = -1,
    kl = 0;
  function Pe() {
    return (H & 6) !== 0 ? ce() : wl !== -1 ? wl : (wl = ce());
  }
  function Kt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && ke !== 0
        ? ke & -ke
        : hf.transition !== null
          ? (kl === 0 && (kl = rs()), kl)
          : ((e = b),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ds(e.type))),
            e);
  }
  function ut(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (po = null), Error(c(185)));
    (Hn(e, n, r),
      ((H & 2) === 0 || e !== ye) &&
        (e === ye && ((H & 2) === 0 && (gl |= n), he === 4 && Qt(e, ke)),
        Ie(e, r),
        n === 1 &&
          H === 0 &&
          (t.mode & 1) === 0 &&
          ((Rn = ce() + 500), Yr && At())));
  }
  function Ie(e, t) {
    var n = e.callbackNode;
    mc(e, t);
    var r = Tr(e, e === ye ? ke : 0);
    if (r === 0)
      (n !== null && es(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && es(n), t === 1))
        (e.tag === 0 ? mf(du.bind(null, e)) : Zs(du.bind(null, e)),
          cf(function () {
            (H & 6) === 0 && At();
          }),
          (n = null));
      else {
        switch (ls(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = ts;
            break;
          case 16:
            n = jr;
            break;
          case 536870912:
            n = ns;
            break;
          default:
            n = jr;
        }
        n = wu(n, fu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function fu(e, t) {
    if (((wl = -1), (kl = 0), (H & 6) !== 0)) throw Error(c(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === ye ? ke : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var i = mu();
      (ye !== e || ke !== t) && ((_t = null), (Rn = ce() + 500), sn(e, t));
      do
        try {
          Of();
          break;
        } catch (s) {
          pu(e, s);
        }
      while (!0);
      (Ti(),
        (hl.current = i),
        (H = l),
        pe !== null ? (t = 0) : ((ye = null), (ke = 0), (t = he)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = $l(e)), l !== 0 && ((r = l), (t = mo(e, l)))),
        t === 1)
      )
        throw ((n = gr), sn(e, 0), Qt(e, r), Ie(e, ce()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Rf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((i = $l(e)), i !== 0 && ((r = i), (t = mo(e, i)))),
            t === 1))
        )
          throw ((n = gr), sn(e, 0), Qt(e, r), Ie(e, ce()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            an(e, Oe, _t);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = co + 500 - ce()), 10 < t))
            ) {
              if (Tr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = xi(an.bind(null, e, Oe, _t), t);
              break;
            }
            an(e, Oe, _t);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - rt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = ce() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Mf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = xi(an.bind(null, e, Oe, _t), r);
              break;
            }
            an(e, Oe, _t);
            break;
          case 5:
            an(e, Oe, _t);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return (Ie(e, ce()), e.callbackNode === n ? fu.bind(null, e) : null);
  }
  function mo(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && ho(t)),
      e
    );
  }
  function ho(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function Rf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!lt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (
      t &= ~uo,
        t &= ~gl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function du(e) {
    if ((H & 6) !== 0) throw Error(c(327));
    Dn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return (Ie(e, ce()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = $l(e);
      r !== 0 && ((t = r), (n = mo(e, r)));
    }
    if (n === 1) throw ((n = gr), sn(e, 0), Qt(e, t), Ie(e, ce()), n);
    if (n === 6) throw Error(c(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      an(e, Oe, _t),
      Ie(e, ce()),
      null
    );
  }
  function go(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Rn = ce() + 500), Yr && At()));
    }
  }
  function on(e) {
    Vt !== null && Vt.tag === 0 && (H & 6) === 0 && Dn();
    var t = H;
    H |= 1;
    var n = Je.transition,
      r = b;
    try {
      if (((Je.transition = null), (b = 1), e)) return e();
    } finally {
      ((b = r), (Je.transition = n), (H = t), (H & 6) === 0 && At());
    }
  }
  function vo() {
    ((Ve = Mn.current), te(Mn));
  }
  function sn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), pe !== null))
      for (n = pe.return; n !== null; ) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Gr());
            break;
          case 3:
            (Pn(), te(Me), te(Ne), Ai());
            break;
          case 5:
            Ii(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            te(oe);
            break;
          case 19:
            te(oe);
            break;
          case 10:
            Li(r.type._context);
            break;
          case 22:
          case 23:
            vo();
        }
        n = n.return;
      }
    if (
      ((ye = e),
      (pe = e = $t(e.current, null)),
      (ke = Ve = t),
      (he = 0),
      (gr = null),
      (uo = gl = ln = 0),
      (Oe = vr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      tn = null;
    }
    return e;
  }
  function pu(e, t) {
    do {
      var n = pe;
      try {
        if ((Ti(), (il.current = ul), ol)) {
          for (var r = se.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ol = !1;
        }
        if (
          ((rn = 0),
          (ve = me = se = null),
          (cr = !1),
          (fr = 0),
          (ao.current = null),
          n === null || n.return === null)
        ) {
          ((he = 1), (gr = t), (pe = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            s = n,
            u = t;
          if (
            ((t = ke),
            (s.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
          ) {
            var h = u,
              x = s,
              w = x.tag;
            if ((x.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var v = x.alternate;
              v
                ? ((x.updateQueue = v.updateQueue),
                  (x.memoizedState = v.memoizedState),
                  (x.lanes = v.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var C = Aa(o);
            if (C !== null) {
              ((C.flags &= -257),
                Ua(C, o, s, i, t),
                C.mode & 1 && Fa(i, h, t),
                (t = C),
                (u = h));
              var P = t.updateQueue;
              if (P === null) {
                var T = new Set();
                (T.add(u), (t.updateQueue = T));
              } else P.add(u);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Fa(i, h, t), yo());
                break e;
              }
              u = Error(c(426));
            }
          } else if (le && s.mode & 1) {
            var fe = Aa(o);
            if (fe !== null) {
              ((fe.flags & 65536) === 0 && (fe.flags |= 256),
                Ua(fe, o, s, i, t),
                zi(Tn(u, s)));
              break e;
            }
          }
          ((i = u = Tn(u, s)),
            he !== 4 && (he = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var p = Oa(i, u, t);
                aa(i, p);
                break e;
              case 1:
                s = u;
                var f = i.type,
                  m = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof f.getDerivedStateFromError == "function" ||
                    (m !== null &&
                      typeof m.componentDidCatch == "function" &&
                      (Ht === null || !Ht.has(m))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = Ia(i, s, t);
                  aa(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        gu(n);
      } catch (L) {
        ((t = L), pe === n && n !== null && (pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function mu() {
    var e = hl.current;
    return ((hl.current = ul), e === null ? ul : e);
  }
  function yo() {
    ((he === 0 || he === 3 || he === 2) && (he = 4),
      ye === null ||
        ((ln & 268435455) === 0 && (gl & 268435455) === 0) ||
        Qt(ye, ke));
  }
  function Sl(e, t) {
    var n = H;
    H |= 2;
    var r = mu();
    (ye !== e || ke !== t) && ((_t = null), sn(e, t));
    do
      try {
        Df();
        break;
      } catch (l) {
        pu(e, l);
      }
    while (!0);
    if ((Ti(), (H = n), (hl.current = r), pe !== null)) throw Error(c(261));
    return ((ye = null), (ke = 0), he);
  }
  function Df() {
    for (; pe !== null; ) hu(pe);
  }
  function Of() {
    for (; pe !== null && !ic(); ) hu(pe);
  }
  function hu(e) {
    var t = xu(e.alternate, e, Ve);
    ((e.memoizedProps = e.pendingProps),
      t === null ? gu(e) : (pe = t),
      (ao.current = null));
  }
  function gu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = _f(n, t, Ve)), n !== null)) {
          pe = n;
          return;
        }
      } else {
        if (((n = zf(n, t)), n !== null)) {
          ((n.flags &= 32767), (pe = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((he = 6), (pe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function an(e, t, n) {
    var r = b,
      l = Je.transition;
    try {
      ((Je.transition = null), (b = 1), If(e, t, n, r));
    } finally {
      ((Je.transition = l), (b = r));
    }
    return null;
  }
  function If(e, t, n, r) {
    do Dn();
    while (Vt !== null);
    if ((H & 6) !== 0) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(c(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (hc(e, i),
      e === ye && ((pe = ye = null), (ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        wu(jr, function () {
          return (Dn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Je.transition), (Je.transition = null));
      var o = b;
      b = 1;
      var s = H;
      ((H |= 4),
        (ao.current = null),
        Tf(e, n),
        ou(n, e),
        tf(vi),
        (Rr = !!gi),
        (vi = gi = null),
        (e.current = n),
        Lf(n),
        oc(),
        (H = s),
        (b = o),
        (Je.transition = i));
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Vt = e), (xl = l)),
      (i = e.pendingLanes),
      i === 0 && (Ht = null),
      uc(n.stateNode),
      Ie(e, ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = fo), (fo = null), e);
    return (
      (xl & 1) !== 0 && e.tag !== 0 && Dn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === po ? yr++ : ((yr = 0), (po = e))) : (yr = 0),
      At(),
      null
    );
  }
  function Dn() {
    if (Vt !== null) {
      var e = ls(xl),
        t = Je.transition,
        n = b;
      try {
        if (((Je.transition = null), (b = 16 > e ? 16 : e), Vt === null))
          var r = !1;
        else {
          if (((e = Vt), (Vt = null), (xl = 0), (H & 6) !== 0))
            throw Error(c(331));
          var l = H;
          for (H |= 4, j = e.current; j !== null; ) {
            var i = j,
              o = i.child;
            if ((j.flags & 16) !== 0) {
              var s = i.deletions;
              if (s !== null) {
                for (var u = 0; u < s.length; u++) {
                  var h = s[u];
                  for (j = h; j !== null; ) {
                    var x = j;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, x, i);
                    }
                    var w = x.child;
                    if (w !== null) ((w.return = x), (j = w));
                    else
                      for (; j !== null; ) {
                        x = j;
                        var v = x.sibling,
                          C = x.return;
                        if ((tu(x), x === h)) {
                          j = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = C), (j = v));
                          break;
                        }
                        j = C;
                      }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var T = P.child;
                  if (T !== null) {
                    P.child = null;
                    do {
                      var fe = T.sibling;
                      ((T.sibling = null), (T = fe));
                    } while (T !== null);
                  }
                }
                j = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null)
              ((o.return = i), (j = o));
            else
              e: for (; j !== null; ) {
                if (((i = j), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  ((p.return = i.return), (j = p));
                  break e;
                }
                j = i.return;
              }
          }
          var f = e.current;
          for (j = f; j !== null; ) {
            o = j;
            var m = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && m !== null)
              ((m.return = o), (j = m));
            else
              e: for (o = f; j !== null; ) {
                if (((s = j), (s.flags & 2048) !== 0))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, s);
                    }
                  } catch (L) {
                    ue(s, s.return, L);
                  }
                if (s === o) {
                  j = null;
                  break e;
                }
                var k = s.sibling;
                if (k !== null) {
                  ((k.return = s.return), (j = k));
                  break e;
                }
                j = s.return;
              }
          }
          if (
            ((H = l), At(), pt && typeof pt.onPostCommitFiberRoot == "function")
          )
            try {
              pt.onPostCommitFiberRoot(_r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((b = n), (Je.transition = t));
      }
    }
    return !1;
  }
  function vu(e, t, n) {
    ((t = Tn(n, t)),
      (t = Oa(e, t, 1)),
      (e = Wt(e, t, 1)),
      (t = Pe()),
      e !== null && (Hn(e, 1, t), Ie(e, t)));
  }
  function ue(e, t, n) {
    if (e.tag === 3) vu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Ht === null || !Ht.has(r)))
          ) {
            ((e = Tn(n, e)),
              (e = Ia(t, e, 1)),
              (t = Wt(t, e, 1)),
              (e = Pe()),
              t !== null && (Hn(t, 1, e), Ie(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ff(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ye === e &&
        (ke & n) === n &&
        (he === 4 || (he === 3 && (ke & 130023424) === ke && 500 > ce() - co)
          ? sn(e, 0)
          : (uo |= n)),
      Ie(e, t));
  }
  function yu(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Pr), (Pr <<= 1), (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = Pe();
    ((e = Et(e, t)), e !== null && (Hn(e, t, n), Ie(e, n)));
  }
  function Af(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), yu(e, n));
  }
  function Uf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    (r !== null && r.delete(t), yu(e, n));
  }
  var xu;
  xu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Me.current) De = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((De = !1), jf(e, t, n));
        De = (e.flags & 131072) !== 0;
      }
    else ((De = !1), le && (t.flags & 1048576) !== 0 && Js(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = Sn(t, Ne.current);
        (zn(t, n), (l = Bi(null, t, r, e, l, n)));
        var i = Hi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((i = !0), br(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Di(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              bi(t, r, e, n),
              (t = Ji(null, t, r, !0, i, n)))
            : ((t.tag = 0), le && i && Ei(t), ze(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (dl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Bf(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = Zi(null, t, r, e, n);
              break e;
            case 1:
              t = Qa(null, t, r, e, n);
              break e;
            case 11:
              t = Wa(null, t, r, e, n);
              break e;
            case 14:
              t = Ba(null, t, r, ot(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Zi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Qa(e, t, r, l, n)
        );
      case 3:
        e: {
          if (($a(t), e === null)) throw Error(c(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            sa(e, t),
            rl(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = Tn(Error(c(423)), t)), (t = Ga(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Tn(Error(c(424)), t)), (t = Ga(e, t, r, n, l)));
              break e;
            } else
              for (
                He = Ot(t.stateNode.containerInfo.firstChild),
                  Be = t,
                  le = !0,
                  it = null,
                  n = ia(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Cn(), r === l)) {
              t = jt(e, t, n);
              break e;
            }
            ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ca(t),
          e === null && _i(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          yi(r, l) ? (o = null) : i !== null && yi(r, i) && (t.flags |= 32),
          Ka(e, t),
          ze(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && _i(t), null);
      case 13:
        return ba(e, t, n);
      case 4:
        return (
          Oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jn(t, null, r, n)) : ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Wa(e, t, r, l, n)
        );
      case 7:
        return (ze(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ze(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ze(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            J(el, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (lt(i.value, o)) {
              if (i.children === l.children && !Me.current) {
                t = jt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var s = i.dependencies;
                if (s !== null) {
                  o = i.child;
                  for (var u = s.firstContext; u !== null; ) {
                    if (u.context === r) {
                      if (i.tag === 1) {
                        ((u = Ct(-1, n & -n)), (u.tag = 2));
                        var h = i.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var x = h.pending;
                          (x === null
                            ? (u.next = u)
                            : ((u.next = x.next), (x.next = u)),
                            (h.pending = u));
                        }
                      }
                      ((i.lanes |= n),
                        (u = i.alternate),
                        u !== null && (u.lanes |= n),
                        Mi(i.return, n, t),
                        (s.lanes |= n));
                      break;
                    }
                    u = u.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(c(341));
                  ((o.lanes |= n),
                    (s = o.alternate),
                    s !== null && (s.lanes |= n),
                    Mi(o, n, t),
                    (o = i.sibling));
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (ze(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          zn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          ze(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ot(r, t.pendingProps)),
          (l = ot(r.type, l)),
          Ba(e, t, r, l, n)
        );
      case 15:
        return Ha(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          dl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), br(t)) : (e = !1),
          zn(t, n),
          Ra(t, r, l),
          bi(t, r, l, n),
          Ji(null, t, r, !0, e, n)
        );
      case 19:
        return Xa(e, t, n);
      case 22:
        return Va(e, t, n);
    }
    throw Error(c(156, t.tag));
  };
  function wu(e, t) {
    return qo(e, t);
  }
  function Wf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function qe(e, t, n, r) {
    return new Wf(e, t, n, r);
  }
  function xo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Bf(e) {
    if (typeof e == "function") return xo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function $t(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = qe(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Nl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) xo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Te:
          return un(n.children, l, i, t);
        case Ge:
          ((o = 8), (l |= 8));
          break;
        case zt:
          return (
            (e = qe(12, n, t, l | 2)),
            (e.elementType = zt),
            (e.lanes = i),
            e
          );
        case Ae:
          return (
            (e = qe(13, n, t, l)),
            (e.elementType = Ae),
            (e.lanes = i),
            e
          );
        case nt:
          return (
            (e = qe(19, n, t, l)),
            (e.elementType = nt),
            (e.lanes = i),
            e
          );
        case ae:
          return El(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xt:
                o = 10;
                break e;
              case Yt:
                o = 9;
                break e;
              case ft:
                o = 11;
                break e;
              case dt:
                o = 14;
                break e;
              case Le:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = qe(o, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function un(e, t, n, r) {
    return ((e = qe(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = ae),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wo(e, t, n) {
    return ((e = qe(6, e, null, t)), (e.lanes = n), e);
  }
  function ko(e, t, n) {
    return (
      (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Hf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Gl(0)),
      (this.expirationTimes = Gl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function So(e, t, n, r, l, i, o, s, u) {
    return (
      (e = new Hf(e, t, n, s, u)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = qe(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Di(i),
      e
    );
  }
  function Vf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _e,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ku(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Re(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Re(n)) return Ys(e, n, t);
    }
    return t;
  }
  function Su(e, t, n, r, l, i, o, s, u) {
    return (
      (e = So(n, r, !0, e, l, i, o, s, u)),
      (e.context = ku(null)),
      (n = e.current),
      (r = Pe()),
      (l = Kt(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      Wt(n, i, l),
      (e.current.lanes = l),
      Hn(e, l, r),
      Ie(e, r),
      e
    );
  }
  function Cl(e, t, n, r) {
    var l = t.current,
      i = Pe(),
      o = Kt(l);
    return (
      (n = ku(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Wt(l, t, o)),
      e !== null && (ut(e, l, o, i), nl(e, l, o)),
      o
    );
  }
  function jl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Nu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    (Nu(e, t), (e = e.alternate) && Nu(e, t));
  }
  function Kf() {
    return null;
  }
  var Eu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eo(e) {
    this._internalRoot = e;
  }
  ((_l.prototype.render = Eo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      Cl(e, t, null, null);
    }),
    (_l.prototype.unmount = Eo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (on(function () {
            Cl(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ss();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
      (Mt.splice(n, 0, e), n === 0 && cs(e));
    }
  };
  function Co(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Cu() {}
  function Qf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var h = jl(o);
          i.call(h);
        };
      }
      var o = Su(t, r, e, 0, null, !1, !1, "", Cu);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        on(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var h = jl(u);
        s.call(h);
      };
    }
    var u = So(e, 0, !1, null, null, !1, !1, "", Cu);
    return (
      (e._reactRootContainer = u),
      (e[wt] = u.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      on(function () {
        Cl(t, u, n, r);
      }),
      u
    );
  }
  function Pl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var s = l;
        l = function () {
          var u = jl(o);
          s.call(u);
        };
      }
      Cl(t, o, e, l);
    } else o = Qf(n, t, e, l, r);
    return jl(o);
  }
  ((is = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 &&
            (bl(t, n | 1),
            Ie(t, ce()),
            (H & 6) === 0 && ((Rn = ce() + 500), At()));
        }
        break;
      case 13:
        (on(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = Pe();
            ut(r, e, 1, l);
          }
        }),
          No(e, 1));
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = Pe();
          ut(t, e, 134217728, n);
        }
        No(e, 134217728);
      }
    }),
    (os = function (e) {
      if (e.tag === 13) {
        var t = Kt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = Pe();
          ut(n, e, t, r);
        }
        No(e, t);
      }
    }),
    (ss = function () {
      return b;
    }),
    (as = function (e, t) {
      var n = b;
      try {
        return ((b = e), t());
      } finally {
        b = n;
      }
    }),
    (Bl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Rl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = $r(r);
                if (!l) throw Error(c(90));
                (Mo(r), Rl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fo(e, n);
          break;
        case "select":
          ((t = n.value), t != null && cn(e, !!n.multiple, t, !1));
      }
    }),
    ($o = go),
    (Go = on));
  var $f = { usingClientEntryPoint: !1, Events: [ir, wn, $r, Ko, Qo, go] },
    xr = {
      findFiberByHostInstance: Zt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Gf = {
      bundleType: xr.bundleType,
      version: xr.version,
      rendererPackageName: xr.rendererPackageName,
      rendererConfig: xr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Zo(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: xr.findFiberByHostInstance || Kf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber)
      try {
        ((_r = Tl.inject(Gf)), (pt = Tl));
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f),
    (Fe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Co(t)) throw Error(c(200));
      return Vf(e, t, null, n);
    }),
    (Fe.createRoot = function (e, t) {
      if (!Co(e)) throw Error(c(299));
      var n = !1,
        r = "",
        l = Eu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = So(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new Eo(t)
      );
    }),
    (Fe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(c(188))
          : ((e = Object.keys(e).join(",")), Error(c(268, e)));
      return ((e = Zo(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Fe.flushSync = function (e) {
      return on(e);
    }),
    (Fe.hydrate = function (e, t, n) {
      if (!zl(t)) throw Error(c(200));
      return Pl(null, e, t, !0, n);
    }),
    (Fe.hydrateRoot = function (e, t, n) {
      if (!Co(e)) throw Error(c(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Eu;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Su(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new _l(t);
    }),
    (Fe.render = function (e, t, n) {
      if (!zl(t)) throw Error(c(200));
      return Pl(null, e, t, !1, n);
    }),
    (Fe.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(c(40));
      return e._reactRootContainer
        ? (on(function () {
            Pl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Fe.unstable_batchedUpdates = go),
    (Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!zl(n)) throw Error(c(200));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return Pl(e, t, n, !1, r);
    }),
    (Fe.version = "18.3.1-next-f1338f8080-20240426"),
    Fe
  );
}
var Ru;
function td() {
  if (Ru) return zo.exports;
  Ru = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (S) {
        console.error(S);
      }
  }
  return (g(), (zo.exports = ed()), zo.exports);
}
var Du;
function nd() {
  if (Du) return Ll;
  Du = 1;
  var g = td();
  return ((Ll.createRoot = g.createRoot), (Ll.hydrateRoot = g.hydrateRoot), Ll);
}
var rd = nd(),
  Ke = Lo();
const ld = "" + new URL("parsa-logo-BJmMXFZX.svg", import.meta.url).href,
  Ou =
    "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20id%3D%22Ellipse%201%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%2210%22%20fill%3D%22var(--fill-0%2C%20%23D9D9D9)%22%2F%3E%0A%3C%2Fsvg%3E%0A";
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const id = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  od = (g) =>
    g.replace(/^([A-Z])|[\s-_]+(\w)/g, (S, c, _) =>
      _ ? _.toUpperCase() : c.toLowerCase(),
    ),
  Iu = (g) => {
    const S = od(g);
    return S.charAt(0).toUpperCase() + S.slice(1);
  },
  bu = (...g) =>
    g
      .filter((S, c, _) => !!S && S.trim() !== "" && _.indexOf(S) === c)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var sd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ad = Ke.forwardRef(
  (
    {
      color: g = "currentColor",
      size: S = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: _,
      className: N = "",
      children: F,
      iconNode: B,
      ...q
    },
    O,
  ) =>
    Ke.createElement(
      "svg",
      {
        ref: O,
        ...sd,
        width: S,
        height: S,
        stroke: g,
        strokeWidth: _ ? (Number(c) * 24) / Number(S) : c,
        className: bu("lucide", N),
        ...q,
      },
      [
        ...B.map(([ie, de]) => Ke.createElement(ie, de)),
        ...(Array.isArray(F) ? F : [F]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ge = (g, S) => {
  const c = Ke.forwardRef(({ className: _, ...N }, F) =>
    Ke.createElement(ad, {
      ref: F,
      iconNode: S,
      className: bu(`lucide-${id(Iu(g))}`, `lucide-${g}`, _),
      ...N,
    }),
  );
  return ((c.displayName = Iu(g)), c);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  cd = ge("arrow-down", ud);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  dd = ge("arrow-right", fd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pd = [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ],
  Fu = ge("arrow-up", pd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const md = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  hd = ge("check", md);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  vd = ge("chevron-down", gd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  xd = ge("chevron-up", yd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ],
  Au = ge("clock", wd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = [
    ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
    ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
  ],
  Sd = ge("code", kd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ],
  Uu = ge("coins", Nd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ed = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  Yu = ge("external-link", Ed);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cd = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  Wu = ge("file-text", Cd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jd = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  Bu = ge("layers", jd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _d = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  zd = ge("lightbulb", _d);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pd = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  Td = ge("menu", Pd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = [
    ["path", { d: "M2 3h20", key: "91anmk" }],
    ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
    ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }],
  ],
  Md = ge("presentation", Ld);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rd = [
    [
      "path",
      { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" },
    ],
    [
      "path",
      { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" },
    ],
    ["path", { d: "M7 21h10", key: "1b0cd5" }],
    ["path", { d: "M12 3v18", key: "108xh3" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
  ],
  Dd = ge("scale", Rd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Id = ge("target", Od);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fd = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ],
  Hu = ge("users", Fd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Xu = ge("x", Ad),
  Ud = {
    en: { home: "Home", projects: "Projects", contact: "Contact", cv: "My CV" },
    de: {
      home: "Home",
      projects: "Projekte",
      contact: "Kontakt",
      cv: "Mein CV",
    },
  };
function Vu() {
  return a.jsxs("div", {
    className:
      "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0",
    children: [
      a.jsx("div", {
        className:
          "col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_20px] ml-0 mt-0 relative row-1 size-[20px]",
        style: { maskImage: `url('${Ou}')` },
        children: a.jsx("svg", {
          className: "absolute block size-full",
          fill: "none",
          preserveAspectRatio: "none",
          viewBox: "0 0 20 20",
          children: a.jsx("circle", {
            cx: "10",
            cy: "10",
            fill: "#2d1b4e",
            id: "Ellipse 2",
            r: "10",
          }),
        }),
      }),
      a.jsx("div", {
        className:
          "col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1px] mask-size-[20px_20px] ml-0 mt-px relative row-1 size-[19px]",
        style: { maskImage: `url('${Ou}')` },
        children: a.jsx("img", {
          alt: "",
          className:
            "absolute inset-0 max-w-none object-cover pointer-events-none size-full",
          src: ld,
        }),
      }),
    ],
  });
}
function Wd({ language: g, onLanguageChange: S }) {
  const c = Ud[g],
    [_, N] = Ke.useState(!1);
  return a.jsxs("header", {
    className:
      "sticky top-0 z-50 bg-[#1a0a2e]/95 backdrop-blur-sm border-b border-[#ffabf1]/20",
    children: [
      a.jsxs("div", {
        className:
          "hidden lg:flex items-center justify-between px-8 lg:px-[220px] py-[30px] relative",
        children: [
          a.jsxs("div", {
            className: "flex gap-[8px] items-center",
            children: [
              a.jsx(Vu, {}),
              a.jsx("p", {
                className:
                  "font-['Montserrat',sans-serif] font-medium leading-[22px] text-[15px] text-[#ffabf1]",
                children: "PARSA",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex gap-[40px] items-center",
            children: [
              a.jsx("a", {
                href: "https://parsa-sa.com/#",
                className:
                  "font-['Montserrat',sans-serif] font-medium text-[15px] text-[#e3e2e6] hover:text-[#ffabf1] transition-colors whitespace-nowrap",
                children: c.home,
              }),
              a.jsx("a", {
                href: "https://parsa-sa.com/#/#projects",
                className:
                  "font-['Montserrat',sans-serif] font-medium text-[15px] text-[#e3e2e6] hover:text-[#ffabf1] transition-colors whitespace-nowrap",
                children: c.projects,
              }),
              a.jsx("a", {
                href: "https://parsa-sa.com/#/#contact_me_home_page",
                className:
                  "font-['Montserrat',sans-serif] font-medium text-[15px] text-[#e3e2e6] hover:text-[#ffabf1] transition-colors whitespace-nowrap",
                children: c.contact,
              }),
              a.jsx("a", {
                href: "https://parsa-sa.com/PARSA_SARAIYEH_2026-09-05.pdf",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "bg-[#2d1b4e] hover:bg-[#3d2b5e] transition-colors font-['Montserrat',sans-serif] font-medium text-[15px] text-[#ffabf1] px-[16px] py-[8px] rounded-[10px] whitespace-nowrap",
                children: c.cv,
              }),
            ],
          }),
          a.jsxs("div", {
            className:
              "flex items-center gap-1 bg-[#2d1b4e]/30 rounded-full p-1 border border-[#ffabf1]/20",
            children: [
              a.jsx("button", {
                onClick: () => S("en"),
                className: `px-3 py-1 rounded-full text-sm font-semibold transition-colors ${g === "en" ? "bg-[#ffabf1] text-[#1a0a2e]" : "text-[#e3e2e6] hover:text-[#ffabf1]"}`,
                children: "EN",
              }),
              a.jsx("button", {
                onClick: () => S("de"),
                className: `px-3 py-1 rounded-full text-sm font-semibold transition-colors ${g === "de" ? "bg-[#ffabf1] text-[#1a0a2e]" : "text-[#e3e2e6] hover:text-[#ffabf1]"}`,
                children: "DE",
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "lg:hidden px-6 py-4",
        children: [
          a.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              a.jsxs("div", {
                className: "flex gap-[8px] items-center",
                children: [
                  a.jsx(Vu, {}),
                  a.jsx("p", {
                    className:
                      "font-['Montserrat',sans-serif] font-medium leading-[22px] text-[15px] text-[#ffabf1]",
                    children: "PARSA",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  a.jsxs("div", {
                    className:
                      "flex items-center gap-1 bg-[#2d1b4e]/30 rounded-full p-1 border border-[#ffabf1]/20",
                    children: [
                      a.jsx("button", {
                        onClick: () => S("en"),
                        className: `px-3 py-1 rounded-full text-sm font-semibold transition-colors ${g === "en" ? "bg-[#ffabf1] text-[#1a0a2e]" : "text-[#e3e2e6] hover:text-[#ffabf1]"}`,
                        children: "EN",
                      }),
                      a.jsx("button", {
                        onClick: () => S("de"),
                        className: `px-3 py-1 rounded-full text-sm font-semibold transition-colors ${g === "de" ? "bg-[#ffabf1] text-[#1a0a2e]" : "text-[#e3e2e6] hover:text-[#ffabf1]"}`,
                        children: "DE",
                      }),
                    ],
                  }),
                  a.jsx("button", {
                    onClick: () => N(!_),
                    className:
                      "flex items-center justify-center p-2 text-[#ffabf1] hover:bg-[#2d1b4e]/30 transition-colors rounded-lg",
                    "aria-label": "Toggle menu",
                    children: _
                      ? a.jsx(Xu, { size: 24 })
                      : a.jsx(Td, { size: 24 }),
                  }),
                ],
              }),
            ],
          }),
          _ &&
            a.jsxs("nav", {
              className: "mt-4 flex flex-col gap-3 pb-4",
              children: [
                a.jsx("a", {
                  href: "https://parsa-sa.com/#",
                  onClick: () => N(!1),
                  className:
                    "font-['Montserrat',sans-serif] font-medium text-[15px] text-[#e3e2e6] hover:text-[#ffabf1] hover:bg-[#2d1b4e]/30 transition-colors p-3 rounded-lg",
                  children: c.home,
                }),
                a.jsx("a", {
                  href: "https://parsa-sa.com/#/#projects",
                  onClick: () => N(!1),
                  className:
                    "font-['Montserrat',sans-serif] font-medium text-[15px] text-[#e3e2e6] hover:text-[#ffabf1] hover:bg-[#2d1b4e]/30 transition-colors p-3 rounded-lg",
                  children: c.projects,
                }),
                a.jsx("a", {
                  href: "https://parsa-sa.com/#/#contact_me_home_page",
                  onClick: () => N(!1),
                  className:
                    "font-['Montserrat',sans-serif] font-medium text-[15px] text-[#e3e2e6] hover:text-[#ffabf1] hover:bg-[#2d1b4e]/30 transition-colors p-3 rounded-lg",
                  children: c.contact,
                }),
                a.jsx("a", {
                  href: "https://parsa-sa.com/PARSA_SARAIYEH_2026-09-05.pdf",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => N(!1),
                  className:
                    "bg-[#2d1b4e] hover:bg-[#3d2b5e] transition-colors font-['Montserrat',sans-serif] font-medium text-[15px] text-[#ffabf1] p-3 rounded-[10px] text-center",
                  children: c.cv,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
const Bd = {
  en: {
    title: "On this page",
    sections: [
      { id: "snapshot", label: "Project snapshot" },
      { id: "challenge", label: "The challenge" },
      { id: "role", label: "My role" },
      { id: "strategy", label: "Strategy & decisions" },
      { id: "built", label: "What we built" },
      { id: "governance", label: "Governance" },
      { id: "outcomes", label: "Outcomes" },
      { id: "learnings", label: "Learnings" },
      { id: "artifacts", label: "Artifacts" },
    ],
  },
  de: {
    title: "Auf dieser Seite",
    sections: [
      { id: "snapshot", label: "Projektüberblick" },
      { id: "challenge", label: "Herausforderung" },
      { id: "role", label: "Meine Rolle" },
      { id: "strategy", label: "Strategie & Entscheidungen" },
      { id: "built", label: "Was wir gebaut haben" },
      { id: "governance", label: "Governance" },
      { id: "outcomes", label: "Ergebnisse" },
      { id: "learnings", label: "Learnings" },
      { id: "artifacts", label: "Artefakte" },
    ],
  },
};
function Ku({ language: g, isMobile: S = !1 }) {
  const [c, _] = Ke.useState(!1),
    [N, F] = Ke.useState(""),
    B = Bd[g];
  Ke.useEffect(() => {
    const O = () => {
      const ie = B.sections.map(($) => document.getElementById($.id)),
        de = window.scrollY + 200;
      for (let $ = ie.length - 1; $ >= 0; $--) {
        const Y = ie[$];
        if (Y && Y.offsetTop <= de) {
          F(B.sections[$].id);
          break;
        }
      }
    };
    return (
      window.addEventListener("scroll", O),
      () => window.removeEventListener("scroll", O)
    );
  }, [B.sections]);
  const q = (O) => {
    const ie = document.getElementById(O);
    ie && (ie.scrollIntoView({ behavior: "smooth", block: "start" }), _(!1));
  };
  return S
    ? a.jsx(a.Fragment, {
        children:
          c &&
          a.jsx("div", {
            className:
              "lg:hidden fixed inset-0 z-50 bg-[#1a0a2e]/95 backdrop-blur-sm",
            children: a.jsxs("div", {
              className: "flex flex-col h-full p-8",
              children: [
                a.jsxs("div", {
                  className: "flex items-center justify-between mb-8",
                  children: [
                    a.jsx("h3", {
                      className: "text-xl text-[#ffabf1] font-semibold",
                      children: B.title,
                    }),
                    a.jsx("button", {
                      onClick: () => _(!1),
                      className:
                        "w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#ffabf1]/10 transition-colors",
                      children: a.jsx(Xu, {
                        className: "text-[#ffabf1]",
                        size: 24,
                      }),
                    }),
                  ],
                }),
                a.jsx("nav", {
                  className: "flex flex-col gap-2",
                  children: B.sections.map((O) =>
                    a.jsx(
                      "button",
                      {
                        onClick: () => q(O.id),
                        className: `text-left px-4 py-3 rounded-lg transition-colors ${N === O.id ? "bg-[#ffabf1] text-[#1a0a2e] font-semibold" : "text-[#e3e2e6] hover:bg-[#2d1b4e]/30"}`,
                        children: O.label,
                      },
                      O.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
      })
    : a.jsx("aside", {
        className: "hidden lg:block sticky top-20 z-30 w-full mb-8",
        children: a.jsx("nav", {
          className:
            "hidden bg-[#1a0a2e]/98 backdrop-blur-md border-b border-[#ffabf1]/20 rounded-lg py-4 px-6 shadow-lg",
          children: a.jsxs("div", {
            className: "flex items-center gap-6 overflow-x-auto",
            children: [
              a.jsx("span", {
                className:
                  "text-xs text-[#ffabf1] font-semibold uppercase tracking-wide whitespace-nowrap",
                children: B.title,
              }),
              a.jsx("div", {
                className: "flex items-center gap-2 flex-wrap",
                children: B.sections.map((O) =>
                  a.jsx(
                    "button",
                    {
                      onClick: () => q(O.id),
                      className: `text-sm px-4 py-2 rounded-full transition-all whitespace-nowrap ${N === O.id ? "bg-[#ffabf1] text-[#1a0a2e] font-semibold shadow-md" : "text-[#e3e2e6] hover:bg-[#2d1b4e] hover:text-[#ffabf1]"}`,
                      children: O.label,
                    },
                    O.id,
                  ),
                ),
              }),
            ],
          }),
        }),
      });
}
const Hd = "" + new URL("img-nik-hero-DWhzKVvc.png", import.meta.url).href;
function Vd({ label: g, value: S, note: c, icon: _ }) {
  return a.jsxs("div", {
    className:
      "flex flex-col gap-2 bg-[#2d1b4e]/20 border border-[#ffabf1]/10 rounded-xl p-6",
    children: [
      a.jsxs("div", {
        className: "flex items-center gap-2 text-[#ffabf1]",
        children: [
          a.jsx(_, { size: 20 }),
          a.jsx("span", { className: "text-sm font-semibold", children: g }),
        ],
      }),
      a.jsx("div", { className: "text-3xl font-bold text-white", children: S }),
      c &&
        a.jsx("p", {
          className: "text-xs text-[#e3e2e6]/70 italic",
          children: c,
        }),
    ],
  });
}
const Kd = {
  en: {
    title: "Defining Three Brands,",
    titleLine2: "Unified by One System",
    valueStatement:
      "Building a scalable, multi-brand design system to unify experiences across products while maintaining distinct brand identities.",
    snapshotTitle: "Project Snapshot",
    chips: [
      {
        label: "Role",
        value: "Visual Designer, Design Chapter Lead Assistant",
      },
      { label: "Team", value: "3 designers, 5 engineers" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Deliverables", value: "Design system, tokens, documentation" },
      { label: "Timeframe", value: "18 months (2022–2024)" },
    ],
    metricsTitle: "Key Metrics",
    metrics: [
      {
        label: "Components",
        value: "120+",
        note: "Cross-platform coverage",
        icon: Bu,
      },
      {
        label: "Adoption",
        value: "85%",
        note: "Team usage after 6 months",
        icon: Hu,
      },
      {
        label: "Design Tokens",
        value: "450+",
        note: "Semantic & reference tokens",
        icon: Uu,
      },
      {
        label: "Time Saved",
        value: "40%",
        note: "Reduction in design time",
        icon: Au,
      },
    ],
    primaryCta: "View key decisions",
    secondaryCta: "See artifacts",
  },
  de: {
    title: "Drei Marken definieren,",
    titleLine2: "vereint durch ein System",
    valueStatement:
      "Aufbau eines skalierbaren Multi-Brand-Designsystems zur Vereinheitlichung von Erfahrungen über Produkte hinweg bei gleichzeitiger Beibehaltung unterschiedlicher Markenidentitäten.",
    snapshotTitle: "Projektüberblick",
    chips: [
      {
        label: "Rolle",
        value: "Visual Designer, Design Chapter Lead Assistant",
      },
      { label: "Team", value: "3 Designer, 5 Engineers" },
      { label: "Plattformen", value: "Web, iOS, Android" },
      { label: "Ergebnisse", value: "Designsystem, Tokens, Dokumentation" },
      { label: "Zeitrahmen", value: "18 Monate (2022–2024)" },
    ],
    metricsTitle: "Wichtige Kennzahlen",
    metrics: [
      {
        label: "Komponenten",
        value: "120+",
        note: "Plattformübergreifende Abdeckung",
        icon: Bu,
      },
      {
        label: "Akzeptanz",
        value: "85%",
        note: "Teamnutzung nach 6 Monaten",
        icon: Hu,
      },
      {
        label: "Design-Tokens",
        value: "450+",
        note: "Semantische & Referenz-Tokens",
        icon: Uu,
      },
      {
        label: "Zeitersparnis",
        value: "40%",
        note: "Reduzierung der Designzeit",
        icon: Au,
      },
    ],
    primaryCta: "Wichtige Entscheidungen ansehen",
    secondaryCta: "Artefakte ansehen",
  },
};
function Qd({ language: g }) {
  const S = Kd[g];
  return a.jsxs("section", {
    id: "snapshot",
    className: "flex flex-col gap-12 py-16 relative",
    children: [
      a.jsxs("div", {
        className:
          "absolute inset-0 overflow-hidden pointer-events-none opacity-20",
        children: [
          a.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-r from-[#1a0a2e] via-transparent to-[#1a0a2e]",
          }),
          a.jsx("img", {
            src: Hd,
            alt: "",
            className: "w-full h-full object-contain object-center",
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex flex-col gap-6 relative z-10",
        children: [
          a.jsxs("h1", {
            className:
              "text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] text-[#ffabf1] font-bold",
            children: [S.title, a.jsx("br", {}), S.titleLine2],
          }),
          a.jsx("p", {
            className: "text-xl text-[#e3e2e6] leading-relaxed",
            children: S.valueStatement,
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex flex-col gap-4 relative z-10",
        children: [
          a.jsx("h3", {
            className:
              "text-sm text-[#ffabf1] font-semibold uppercase tracking-wide",
            children: S.snapshotTitle,
          }),
          a.jsx("div", {
            className: "flex flex-wrap gap-3",
            children: S.chips.map((c, _) =>
              a.jsxs(
                "div",
                {
                  className:
                    "flex items-center gap-2 bg-[#2d1b4e]/30 border border-[#ffabf1]/20 rounded-full px-4 py-2",
                  children: [
                    a.jsxs("span", {
                      className: "text-[#ffabf1] text-sm font-semibold",
                      children: [c.label, ":"],
                    }),
                    a.jsx("span", {
                      className: "text-[#e3e2e6] text-sm",
                      children: c.value,
                    }),
                  ],
                },
                _,
              ),
            ),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex flex-col gap-6 relative z-10",
        children: [
          a.jsx("h3", {
            className:
              "text-sm text-[#ffabf1] font-semibold uppercase tracking-wide",
            children: S.metricsTitle,
          }),
          a.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
            children: S.metrics.map((c, _) =>
              a.jsx(
                Vd,
                { label: c.label, value: c.value, note: c.note, icon: c.icon },
                _,
              ),
            ),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex flex-wrap gap-4 relative z-10",
        children: [
          a.jsx("a", {
            href: "#strategy",
            className:
              "px-8 py-4 bg-[#ffabf1] text-[#1a0a2e] rounded-full hover:bg-[#ff9ee8] transition-colors font-semibold",
            children: S.primaryCta,
          }),
          a.jsx("a", {
            href: "#artifacts",
            className:
              "px-8 py-4 bg-transparent border-2 border-[#ffabf1] text-[#ffabf1] rounded-full hover:bg-[#ffabf1]/10 transition-colors font-semibold",
            children: S.secondaryCta,
          }),
        ],
      }),
    ],
  });
}
const $d = {
  en: { deepDive: "Deep dive", showLess: "Show less" },
  de: { deepDive: "Tiefere Einblicke", showLess: "Weniger anzeigen" },
};
function bt({
  id: g,
  title: S,
  summary: c,
  children: _,
  deepDiveContent: N,
  language: F,
}) {
  const [B, q] = Ke.useState(!1),
    O = $d[F];
  return a.jsxs("section", {
    id: g,
    className: "flex flex-col gap-8 py-16 scroll-mt-24",
    children: [
      a.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [
          a.jsx("h2", {
            className:
              "text-[clamp(1.75rem,4vw,2.5rem)] text-[#ffabf1] font-bold",
            children: S,
          }),
          a.jsx("p", {
            className: "text-lg text-[#e3e2e6] leading-relaxed",
            children: c,
          }),
        ],
      }),
      a.jsx("div", { className: "flex flex-col gap-8", children: _ }),
      N &&
        a.jsxs("div", {
          className:
            "mt-8 border border-[#ffabf1]/20 rounded-xl overflow-hidden",
          children: [
            a.jsxs("button", {
              onClick: () => q(!B),
              className:
                "w-full flex items-center justify-between p-6 bg-[#2d1b4e]/20 hover:bg-[#2d1b4e]/30 transition-colors",
              children: [
                a.jsx("span", {
                  className: "text-[#ffabf1] font-semibold",
                  children: B ? O.showLess : O.deepDive,
                }),
                B
                  ? a.jsx(xd, { className: "text-[#ffabf1]", size: 24 })
                  : a.jsx(vd, { className: "text-[#ffabf1]", size: 24 }),
              ],
            }),
            B &&
              a.jsx("div", { className: "p-6 bg-[#2d1b4e]/10", children: N }),
          ],
        }),
    ],
  });
}
function Gd({
  decision: g,
  why: S,
  tradeoffs: c,
  outcome: _,
  emphasis: N = "normal",
}) {
  return a.jsxs("div", {
    className:
      "flex flex-col gap-4 rounded-xl p-5 transition-all duration-300 bg-[#2d1b4e]/20 border-2 border-[#ffabf1]/10 hover:bg-[#ffabf1]/10 hover:border-[#ffabf1]",
    children: [
      a.jsxs("div", {
        className: "flex items-start gap-2",
        children: [
          a.jsx(zd, {
            className: "text-[#ffabf1] flex-shrink-0 mt-1",
            size: 16,
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              a.jsx("h4", {
                className: "text-[#ffabf1] font-semibold text-sm",
                children: "Decision",
              }),
              a.jsx("p", {
                className: "text-[#e3e2e6] leading-relaxed text-sm",
                children: g,
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex items-start gap-2",
        children: [
          a.jsx(Id, {
            className: "text-[#ffabf1] flex-shrink-0 mt-1",
            size: 16,
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              a.jsx("h4", {
                className: "text-[#ffabf1] font-semibold text-sm",
                children: "Why",
              }),
              a.jsx("p", {
                className: "text-[#e3e2e6] leading-relaxed text-sm",
                children: S,
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex items-start gap-2",
        children: [
          a.jsx(Dd, {
            className: "text-[#ffabf1] flex-shrink-0 mt-1",
            size: 16,
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              a.jsx("h4", {
                className: "text-[#ffabf1] font-semibold text-sm",
                children: "Tradeoffs",
              }),
              a.jsx("p", {
                className: "text-[#e3e2e6] leading-relaxed text-sm",
                children: c,
              }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "bg-[#1a0a2e]/30 rounded-lg p-3 border-l-4 border-[#ffabf1]",
        children: a.jsxs("p", {
          className: "text-[#e3e2e6] leading-relaxed text-sm",
          children: [
            a.jsx("span", {
              className: "text-[#ffabf1] font-semibold",
              children: "Outcome: ",
            }),
            _,
          ],
        }),
      }),
    ],
  });
}
const bd = {
  en: {
    decisions: [
      {
        decision: "Adopted semantic token architecture",
        why: "Enable multi-brand theming without redefining components for each brand",
        tradeoffs:
          "Higher upfront complexity in token structure; requires team education",
        outcome:
          "Successfully deployed 4 brand themes using the same component library",
      },
      {
        decision: "Component tiering model (primitives → components  recipes)",
        why: "Reduce one-off variations and establish clear contribution paths",
        tradeoffs:
          'Teams initially frustrated by "rules"; needed governance framework',
        outcome: "40% reduction in duplicate components after 6 months",
      },
      {
        decision: "Platform-specific interaction patterns documented",
        why: "Ensure native feel on Web vs iOS vs Android while maintaining visual consistency",
        tradeoffs:
          "More documentation overhead; platform teams need to collaborate closely",
        outcome:
          "Improved accessibility scores and platform compliance reviews",
      },
    ],
  },
  de: {
    decisions: [
      {
        decision: "Semantische Token-Architektur übernommen",
        why: "Multi-Brand-Theming ermöglichen, ohne Komponenten für jede Marke neu zu definieren",
        tradeoffs:
          "Höhere Anfangskomplexität in der Token-Struktur; erfordert Team-Schulung",
        outcome:
          "4 Markenthemen erfolgreich mit derselben Komponentenbibliothek bereitgestellt",
      },
      {
        decision:
          "Komponenten-Stufenmodell (Primitive → Komponenten → Rezepte)",
        why: "Einmalige Variationen reduzieren und klare Beitragspfade etablieren",
        tradeoffs:
          'Teams anfangs frustriert über „Regeln"; benötigten Governance-Framework',
        outcome: "40% Reduzierung doppelter Komponenten nach 6 Monaten",
      },
      {
        decision: "Plattformspezifische Interaktionsmuster dokumentiert",
        why: "Natives Gefühl auf Web vs iOS vs Android sicherstellen bei gleichzeitiger visueller Konsistenz",
        tradeoffs:
          "Mehr Dokumentationsaufwand; Plattform-Teams müssen eng zusammenarbeiten",
        outcome:
          "Verbesserte Barrierefreiheits-Scores und Plattform-Compliance-Reviews",
      },
    ],
  },
};
function Yd({ language: g }) {
  const S = bd[g];
  return a.jsx("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
    children: S.decisions.map((c, _) =>
      a.jsx(
        Gd,
        {
          decision: c.decision,
          why: c.why,
          tradeoffs: c.tradeoffs,
          outcome: c.outcome,
          emphasis: _ === 0 ? "key" : "normal",
        },
        _,
      ),
    ),
  });
}
const Xd = {
  en: {
    steps: [
      {
        label: "Discover/Align",
        description: "Audit existing patterns, align stakeholders",
      },
      {
        label: "Foundations",
        description: "Define typography, color, spacing rules",
      },
      { label: "Tokens", description: "Create semantic token system" },
      { label: "Components", description: "Standardize component library" },
      { label: "Governance", description: "Establish contribution process" },
      { label: "Adoption", description: "Roll out to product teams" },
      { label: "Outcomes", description: "Measure impact and iterate" },
    ],
  },
  de: {
    steps: [
      {
        label: "Entdecken/Abstimmen",
        description: "Bestehende Muster prüfen, Stakeholder abstimmen",
      },
      {
        label: "Grundlagen",
        description: "Typografie, Farbe, Abstandsregeln definieren",
      },
      { label: "Tokens", description: "Semantisches Token-System erstellen" },
      {
        label: "Komponenten",
        description: "Komponentenbibliothek standardisieren",
      },
      { label: "Governance", description: "Beitragsprozess etablieren" },
      { label: "Einführung", description: "Einführung bei Produktteams" },
      { label: "Ergebnisse", description: "Auswirkungen messen und iterieren" },
    ],
  },
};
function Qu({ language: g, orientation: S = "horizontal" }) {
  const c = Xd[g];
  return S === "vertical"
    ? a.jsx("div", {
        className: "flex flex-col gap-4",
        children: c.steps.map((_, N) =>
          a.jsxs(
            "div",
            {
              className: "flex gap-4",
              children: [
                a.jsxs("div", {
                  className: "flex flex-col items-center flex-shrink-0",
                  children: [
                    a.jsx("div", {
                      className:
                        "w-10 h-10 rounded-full bg-[#ffabf1] flex items-center justify-center",
                      children: a.jsx(hd, {
                        className: "text-[#1a0a2e]",
                        size: 20,
                      }),
                    }),
                    N < c.steps.length - 1 &&
                      a.jsx("div", {
                        className:
                          "w-0.5 h-full min-h-[60px] bg-[#ffabf1]/30 mt-2",
                      }),
                  ],
                }),
                a.jsxs("div", {
                  className: "flex flex-col gap-2 pb-8",
                  children: [
                    a.jsx("h4", {
                      className: "text-[#ffabf1] font-semibold",
                      children: _.label,
                    }),
                    a.jsx("p", {
                      className: "text-[#e3e2e6] text-sm leading-relaxed",
                      children: _.description,
                    }),
                  ],
                }),
              ],
            },
            N,
          ),
        ),
      })
    : a.jsxs("div", {
        className: "relative",
        children: [
          a.jsx("div", {
            className:
              "absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-[#1a0a2e] to-transparent z-10 pointer-events-none",
          }),
          a.jsx("div", {
            className:
              "absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-[#1a0a2e] to-transparent z-10 pointer-events-none",
          }),
          a.jsx("div", {
            className:
              "hidden md:block overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#ffabf1]/50 scrollbar-track-[#2d1b4e]/30",
            children: a.jsx("div", {
              className: "flex items-start gap-4 min-w-max px-16",
              children: c.steps.map((_, N) =>
                a.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2",
                    children: [
                      a.jsxs("div", {
                        className:
                          "flex flex-col items-center gap-2 min-w-[180px]",
                        children: [
                          a.jsx("div", {
                            className:
                              "w-12 h-12 rounded-full bg-[#ffabf1] flex items-center justify-center font-bold text-[#1a0a2e]",
                            children: N + 1,
                          }),
                          a.jsxs("div", {
                            className: "flex flex-col gap-2 text-center",
                            children: [
                              a.jsx("h4", {
                                className:
                                  "text-[#ffabf1] font-semibold text-sm",
                                children: _.label,
                              }),
                              a.jsx("p", {
                                className:
                                  "text-[#e3e2e6] text-xs leading-relaxed",
                                children: _.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                      N < c.steps.length - 1 &&
                        a.jsx("div", {
                          className:
                            "w-8 h-0.5 bg-[#ffabf1]/30 mt-6 flex-shrink-0",
                        }),
                    ],
                  },
                  N,
                ),
              ),
            }),
          }),
        ],
      });
}
const Zu = {
  figma: { icon: Wu, label: "Figma", color: "text-purple-400" },
  docs: { icon: Wu, label: "Docs", color: "text-blue-400" },
  repo: { icon: Sd, label: "Repository", color: "text-green-400" },
  slides: { icon: Md, label: "Slides", color: "text-orange-400" },
};
function Zd({ type: g, title: S, description: c, url: _ }) {
  const N = Zu[g],
    F = N.icon;
  return a.jsxs("div", {
    className:
      "flex flex-col gap-4 bg-[#2d1b4e]/20 border border-[#ffabf1]/10 rounded-xl p-6 hover:border-[#ffabf1]/30 transition-colors group",
    children: [
      a.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          a.jsx(F, { className: N.color, size: 16 }),
          a.jsx("span", {
            className: `text-xs font-semibold ${N.color}`,
            children: N.label,
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          a.jsx("h4", {
            className: "text-[#ffabf1] font-semibold",
            children: S,
          }),
          a.jsx("p", {
            className: "text-[#e3e2e6] text-sm leading-relaxed",
            children: c,
          }),
        ],
      }),
      a.jsxs("a", {
        href: _,
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "flex items-center gap-2 text-[#ffabf1] hover:underline text-sm font-semibold mt-auto",
        children: ["View artifact", a.jsx(Yu, { size: 14 })],
      }),
    ],
  });
}
function Jd({ type: g, title: S, description: c, url: _ }) {
  const N = Zu[g],
    F = N.icon;
  return a.jsxs("div", {
    className:
      "flex flex-col gap-4 bg-gradient-to-br from-[#ffabf1]/10 to-[#2d1b4e]/20 border-2 border-[#ffabf1]/30 rounded-xl p-8 hover:border-[#ffabf1]/50 transition-all hover:shadow-lg hover:shadow-[#ffabf1]/20 min-h-[280px]",
    children: [
      a.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          a.jsx(F, { className: N.color, size: 20 }),
          a.jsx("span", {
            className: `text-sm font-semibold ${N.color}`,
            children: N.label,
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex flex-col gap-3 flex-1",
        children: [
          a.jsx("h4", {
            className:
              "text-[#ffabf1] text-xl font-bold break-words hyphens-auto",
            lang: "de",
            children: S,
          }),
          a.jsx("p", {
            className:
              "text-[#e3e2e6] leading-relaxed break-words hyphens-auto overflow-hidden",
            lang: "de",
            children: c,
          }),
        ],
      }),
      a.jsxs("a", {
        href: _,
        target: "__blank",
        rel: "noopener noreferrer",
        className:
          "flex items-center gap-2 text-[#ffabf1] hover:underline font-semibold mt-auto group-hover:gap-3 transition-all",
        children: ["View artifact", a.jsx(Yu, { size: 16 })],
      }),
    ],
  });
}
const qd = {
  en: {
    products: [
      {
        name: "Nebulox.io",
        artifacts: [
          {
            type: "figma",
            title: "Component Library",
            description:
              "Complete component library with variants and states for Nebulox platform.",
            url: "https://www.figma.com/design/OaNgcYd4rnxLrIKUhphcsk/Parsa---Nebulox-Component-Library--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
          {
            type: "figma",
            title: "Style Guide",
            description:
              "Visual style guidelines including typography, colors, and spacing.",
            url: "https://www.figma.com/design/1N7nPM3s1rQ4SkFpigz29q/Parsa---Nebulox-Style-Guide--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
          {
            type: "figma",
            title: "Comps",
            description:
              "High-fidelity compositions and screen designs for Nebulox.",
            url: "https://www.figma.com/design/Yem9CuV1MAyu1vGjAJd560/Parsa---Nebulox-Comps--Copy-?m=auto&t=xO41HsFWWQirbI2W-6",
          },
          {
            type: "figma",
            title: "Recipes Library",
            description: "Common UI patterns and component recipes.",
            url: "https://www.figma.com/design/1g5iQb4FVB1wg0UG1ktMWm/Parsa---Nebulox-Recipes-Library--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
          {
            type: "figma",
            title: "Brand Guidelines",
            description: "Brand identity guidelines and asset usage rules.",
            url: "https://www.figma.com/design/D5S7ozJCiWM1en0WuuLuvy/Parsa---Nebulox-Brand-Guidelines--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
        ],
      },
      {
        name: "Nikpardakht.com",
        artifacts: [
          {
            type: "figma",
            title: "Component Library",
            description:
              "Payment-focused components and patterns for Nikpardakht.",
            url: "https://www.figma.com/design/Oee7lZXBzGa6kLdW77JWxv/Parsa---Nik-Pardakht-Component-Library?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Style Guide",
            description:
              "Visual design system documentation and usage guidelines.",
            url: "https://www.figma.com/design/AYtCOxhB6EERMEmfMdtK9p/Parsa---Nik-Pardakht-Style-Guide?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Brand Guidelines",
            description:
              "Brand identity guidelines and asset usage rules for Nikpardakht.",
            url: "https://www.figma.com/design/JnleURpmSUa1ImlTjcf7O4/Parsa---Nik-Pardakht-Brand-Guidelines?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
        ],
      },
      {
        name: "Hi.exchange",
        artifacts: [
          {
            type: "figma",
            title: "Component Library",
            description:
              "Crypto exchange components with real-time data visualizations.",
            url: "https://www.figma.com/design/2ZiG2ITHAPHE3xuPlXGbXS/Parsa---HiExchange-Component-Library?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Style Guide",
            description: "Design system guidelines for Hi.exchange platform.",
            url: "https://www.figma.com/design/BP4R3S1J7935gdJ2NJeO1S/Parsa---HiExchange-Style-Guide?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Comps",
            description:
              "Trading interface compositions and dashboard designs.",
            url: "https://www.figma.com/design/r5A8rRmuN0bvjAh9obiUyf/Parsa---HiExchange-Comps?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Recipes Library",
            description:
              "Common UI patterns and component recipes for exchange platform.",
            url: "https://www.figma.com/design/vsvpz9LDdH65GCcC0aGjd7/Parsa---HiExchange-Recipes-Library?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
        ],
      },
    ],
    mainCompany: {
      name: "Nikandish",
      label: "Nikandish Group",
      artifacts: [
        {
          type: "figma",
          title: "Style Guide",
          description:
            "Main company design system guidelines and visual standards.",
          url: "https://www.figma.com/design/mfX3Gr9bQmIyU9BFhqiNJ2/Parsa---Nik-Andish-Style-Guide?m=auto&t=Y64O7oKIEjiehwi6-1",
        },
      ],
    },
  },
  de: {
    products: [
      {
        name: "Nebulox.io",
        artifacts: [
          {
            type: "figma",
            title: "Komponentenbibliothek",
            description:
              "Komplette Komponentenbibliothek mit Varianten und Zuständen für die Nebulox-Plattform.",
            url: "https://www.figma.com/design/OaNgcYd4rnxLrIKUhphcsk/Parsa---Nebulox-Component-Library--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
          {
            type: "figma",
            title: "Style Guide",
            description:
              "Visuelle Stilrichtlinien einschließlich Typografie, Farben und Abständen.",
            url: "https://www.figma.com/design/1N7nPM3s1rQ4SkFpigz29q/Parsa---Nebulox-Style-Guide--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
          {
            type: "figma",
            title: "Comps",
            description:
              "Hohe Fidelität-Kompositionen und Bildschirmdesigns für Nebulox.",
            url: "https://www.figma.com/design/Yem9CuV1MAyu1vGjAJd560/Parsa---Nebulox-Comps--Copy-?m=auto&t=xO41HsFWWQirbI2W-6",
          },
          {
            type: "figma",
            title: "Recipes Library",
            description: "Gängige UI-Muster und Komponentenrezepte.",
            url: "https://www.figma.com/design/1g5iQb4FVB1wg0UG1ktMWm/Parsa---Nebulox-Recipes-Library--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
          {
            type: "figma",
            title: "Markenrichtlinien",
            description:
              "Markenidentitätsrichtlinien und Regeln für die Verwendung von Assets.",
            url: "https://www.figma.com/design/D5S7ozJCiWM1en0WuuLuvy/Parsa---Nebulox-Brand-Guidelines--Copy-?m=auto&t=xO41HsFWWQirbI2W-1",
          },
        ],
      },
      {
        name: "Nikpardakht.com",
        artifacts: [
          {
            type: "figma",
            title: "Komponentenbibliothek",
            description:
              "Zahlungsorientierte Komponenten und Muster für Nikpardakht.",
            url: "https://www.figma.com/design/Oee7lZXBzGa6kLdW77JWxv/Parsa---Nik-Pardakht-Component-Library?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Style Guide",
            description:
              "Dokumentation des visuellen Designsystems und Nutzungsrichtlinien.",
            url: "https://www.figma.com/design/AYtCOxhB6EERMEmfMdtK9p/Parsa---Nik-Pardakht-Style-Guide?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Markenrichtlinien",
            description:
              "Markenidentitätsrichtlinien und Regeln für die Verwendung von Assets für Nikpardakht.",
            url: "https://www.figma.com/design/JnleURpmSUa1ImlTjcf7O4/Parsa---Nik-Pardakht-Brand-Guidelines?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
        ],
      },
      {
        name: "Hi.exchange",
        artifacts: [
          {
            type: "figma",
            title: "Komponentenbibliothek",
            description:
              "Krypto-Exchange-Komponenten mit Echtzeit-Datenvisualisierungen.",
            url: "https://www.figma.com/design/2ZiG2ITHAPHE3xuPlXGbXS/Parsa---HiExchange-Component-Library?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Style Guide",
            description: "Designsystem-Richtlinien für Hi.exchange-Plattform.",
            url: "https://www.figma.com/design/BP4R3S1J7935gdJ2NJeO1S/Parsa---HiExchange-Style-Guide?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Comps",
            description:
              "Trading-Interface-Kompositionen und Dashboard-Designs.",
            url: "https://www.figma.com/design/r5A8rRmuN0bvjAh9obiUyf/Parsa---HiExchange-Comps?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
          {
            type: "figma",
            title: "Recipes Library",
            description:
              "Gängige UI-Muster und Komponentenrezepte für Exchange-Plattform.",
            url: "https://www.figma.com/design/vsvpz9LDdH65GCcC0aGjd7/Parsa---HiExchange-Recipes-Library?m=auto&t=Y64O7oKIEjiehwi6-1",
          },
        ],
      },
    ],
    mainCompany: {
      name: "Nikandish",
      label: "Nikandish Group",
      artifacts: [
        {
          type: "figma",
          title: "Style Guide",
          description:
            "Hauptunternehmensdesignsystemrichtlinien und visuelle Standards.",
          url: "https://www.figma.com/design/mfX3Gr9bQmIyU9BFhqiNJ2/Parsa---Nik-Andish-Style-Guide?m=auto&t=Y64O7oKIEjiehwi6-1",
        },
      ],
    },
  },
};
function ep({ language: g }) {
  const S = qd[g];
  return a.jsxs("div", {
    className: "flex flex-col gap-12",
    children: [
      S.products.map((c, _) =>
        a.jsxs(
          "div",
          {
            className: "flex flex-col gap-6",
            children: [
              a.jsx("h3", {
                className: "text-2xl text-[#ffabf1] font-bold",
                children: c.name,
              }),
              a.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                children: c.artifacts.map((N, F) =>
                  a.jsx(
                    Zd,
                    {
                      type: N.type,
                      title: N.title,
                      description: N.description,
                      url: N.url,
                    },
                    F,
                  ),
                ),
              }),
            ],
          },
          _,
        ),
      ),
      a.jsxs("div", {
        className: "flex flex-col gap-6",
        children: [
          a.jsx("h3", {
            className: "text-2xl text-[#ffabf1] font-bold",
            children: S.mainCompany.label,
          }),
          a.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
            children: S.mainCompany.artifacts.map((c, _) =>
              a.jsx(
                Jd,
                {
                  type: c.type,
                  title: c.title,
                  description: c.description,
                  url: c.url,
                },
                _,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
const tp = { en: { backToTop: "Back to top" }, de: { backToTop: "Nach oben" } };
function $u({ language: g, style: S = "floating" }) {
  const [c, _] = Ke.useState(!1),
    N = tp[g];
  Ke.useEffect(() => {
    const B = () => {
      window.scrollY > 400 ? _(!0) : _(!1);
    };
    return (
      window.addEventListener("scroll", B),
      () => window.removeEventListener("scroll", B)
    );
  }, []);
  const F = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return S === "inline"
    ? a.jsxs("button", {
        onClick: F,
        className:
          "flex items-center gap-2 text-[#ffabf1] hover:underline font-semibold",
        children: [a.jsx(Fu, { size: 20 }), N.backToTop],
      })
    : c
      ? a.jsx("button", {
          onClick: F,
          className:
            "fixed bottom-6 left-6 z-40 w-12 h-12 bg-[#ffabf1] rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff9ee8] transition-all hover:scale-110",
          "aria-label": N.backToTop,
          children: a.jsx(Fu, { className: "text-[#1a0a2e]", size: 24 }),
        })
      : null;
}
const np = {
  en: {
    steps: [
      "Design Tokens",
      "Foundations",
      "Core Components",
      "Recipes / Product Patterns",
      "Multi-brand Products",
    ],
  },
  de: {
    steps: [
      "Design-Tokens",
      "Fundamente",
      "Kern-Komponenten",
      "Rezepte / Produktmuster",
      "Multi-Brand-Produkte",
    ],
  },
};
function rp({ language: g }) {
  const S = np[g];
  return a.jsx("div", {
    className: "flex items-center justify-center gap-3 flex-wrap my-6",
    children: S.steps.map((c, _) =>
      a.jsxs(
        "div",
        {
          className: "flex items-center gap-3",
          children: [
            a.jsx("div", {
              className:
                "px-4 py-2 bg-[#2d1b4e]/40 border border-[#ffabf1]/40 rounded-lg hover:border-[#ffabf1] transition-colors",
              children: a.jsx("span", {
                className:
                  "text-[#ffabf1] font-medium text-sm whitespace-nowrap",
                children: c,
              }),
            }),
            _ < S.steps.length - 1 &&
              a.jsx(cd, {
                className: "text-[#ffabf1]/60 rotate-[-90deg] shrink-0",
                size: 18,
                strokeWidth: 2,
              }),
          ],
        },
        _,
      ),
    ),
  });
}
const Gu = [
  { emoji: "📝", en: "Request", de: "Anfrage" },
  { emoji: "🔍", en: "Review", de: "Review" },
  { emoji: "✨", en: "Prototype", de: "Prototyp" },
  { emoji: "⚙️", en: "Implement", de: "Implementierung" },
  { emoji: "📚", en: "Document", de: "Dokumentation" },
  { emoji: "🚀", en: "Release", de: "Release" },
];
function lp({ language: g }) {
  return a.jsx("div", {
    className:
      "bg-gradient-to-r from-[#2d1b4e]/30 to-[#1a0a2e]/30 border border-[#ffabf1]/20 rounded-lg p-4 my-4",
    children: a.jsx("div", {
      className: "flex items-center justify-center gap-2 flex-wrap",
      children: Gu.map((S, c) =>
        a.jsxs(
          "div",
          {
            className: "flex items-center gap-2",
            children: [
              a.jsxs("div", {
                className:
                  "flex items-center gap-2 px-3 py-2 bg-[#1a0a2e]/60 border border-[#ffabf1]/30 rounded-md hover:bg-[#2d1b4e]/60 hover:border-[#ffabf1]/50 transition-all",
                children: [
                  a.jsx("span", { className: "text-lg", children: S.emoji }),
                  a.jsx("span", {
                    className:
                      "text-[#e3e2e6] text-sm font-medium whitespace-nowrap",
                    children: g === "en" ? S.en : S.de,
                  }),
                ],
              }),
              c < Gu.length - 1 &&
                a.jsx(dd, {
                  className: "text-[#ffabf1]/40 shrink-0",
                  size: 16,
                  strokeWidth: 2,
                }),
            ],
          },
          c,
        ),
      ),
    }),
  });
}
const ip = {
  en: {
    challenge: {
      title: "The Challenge",
      summary:
        "Teams were building similar patterns independently, creating visual drift and slowing delivery. We needed a unified system that could support multiple brands without sacrificing consistency or speed.",
    },
    role: {
      title: "My Role & Collaboration",
      summary:
        "As Design Chapter Lead Assistant, I drove the design system strategy, token architecture, and component standardization while coordinating with 3 designers and 5 engineers across platform teams.",
    },
    strategy: {
      title: "Strategy & Key Decisions",
      summary:
        "We adopted a semantic token architecture and component tiering model to enable multi-brand theming while maintaining design consistency and clear governance.",
    },
    built: {
      title: "What We Built",
      summary:
        "A comprehensive design system with 120+ components, 450+ design tokens, and platform-specific documentation covering Web, iOS, and Android.",
    },
    governance: {
      title: "Governance & Adoption",
      summary:
        "Established a contribution process, documentation standards, and regular design review sessions to ensure quality and encourage team adoption.",
    },
    outcomes: {
      title: "Outcomes & Impact",
      summary:
        "Achieved 85% team adoption within 6 months, reduced design time by 40%, and successfully deployed 4 brand themes using the same component library.",
    },
    learnings: {
      title: "Learnings & Next Steps",
      summary:
        "Semantic tokens are key for multi-brand scaling. Documentation drives adoption more than perfection. Early governance prevents drift. Next: expand mobile component coverage and automated testing.",
      bullets: [
        "Multi-brand scaling works best with semantic tokens that express intent",
        "Documentation and examples drive adoption more than component completeness",
        "Governance is necessary early—otherwise inconsistency returns",
        "Platform teams need dedicated support during initial adoption phase",
      ],
    },
    artifacts: {
      title: "Artifacts & Resources",
      summary:
        "Explore the design system files, documentation, token repositories, and presentation materials.",
    },
  },
  de: {
    challenge: {
      title: "Die Herausforderung",
      summary:
        "Teams entwickelten ähnliche Muster unabhängig voneinander, was zu visuellen Abweichungen führte und die Lieferung verlangsamte. Wir brauchten ein einheitliches System, das mehrere Marken unterstützen konnte, ohne Konsistenz oder Geschwindigkeit zu opfern.",
    },
    role: {
      title: "Meine Rolle & Zusammenarbeit",
      summary:
        "Als Design Chapter Lead Assistant trieb ich die Designsystem-Strategie, Token-Architektur und Komponentenstandardisierung voran und koordinierte mit 3 Designern und 5 Engineers über Plattform-Teams hinweg.",
    },
    strategy: {
      title: "Strategie & Schlüsselentscheidungen",
      summary:
        "Wir übernahmen eine semantische Token-Architektur und ein Komponenten-Stufenmodell, um Multi-Brand-Theming zu ermöglichen und gleichzeitig Design-Konsistenz und klare Governance beizubehalten.",
    },
    built: {
      title: "Was wir gebaut haben",
      summary:
        "Ein umfassendes Designsystem mit 120+ Komponenten, 450+ Design-Tokens und plattformspezifischer Dokumentation für Web, iOS und Android.",
    },
    governance: {
      title: "Governance & Einführung",
      summary:
        "Etablierung eines Beitragsprozesses, Dokumentationsstandards und regelmäßiger Design-Review-Sitzungen zur Qualitätssicherung und Förderung der Team-Akzeptanz.",
    },
    outcomes: {
      title: "Ergebnisse & Auswirkungen",
      summary:
        "85% Team-Akzeptanz innerhalb von 6 Monaten erreicht, Designzeit um 40% reduziert und 4 Markenthemen erfolgreich mit derselben Komponentenbibliothek bereitgestellt.",
    },
    learnings: {
      title: "Learnings & Nächste Schritte",
      summary:
        "Semantische Tokens sind der Schlüssel für Multi-Brand-Skalierung. Dokumentation fördert die Akzeptanz mehr als Perfektion. Frühe Governance verhindert Abweichungen. Nächstes: Mobile-Komponenten-Abdeckung erweitern und automatisierte Tests.",
      bullets: [
        "Multi-Brand-Skalierung funktioniert am besten mit semantischen Tokens, die Absicht ausdrücken",
        "Dokumentation und Beispiele fördern die Akzeptanz mehr als Komponentenvollständigkeit",
        "Governance ist frühzeitig notwendig—sonst kehrt Inkonsistenz zurück",
        "Plattform-Teams benötigen dedizierte Unterstützung während der anfänglichen Einführungsphase",
      ],
    },
    artifacts: {
      title: "Artefakte & Ressourcen",
      summary:
        "Erkunden Sie die Designsystem-Dateien, Dokumentation, Token-Repositories und Präsentationsmaterialien.",
    },
  },
};
function op() {
  const [g, S] = Ke.useState("en"),
    c = ip[g];
  return a.jsxs("div", {
    className: "min-h-screen bg-[#1a0a2e] text-white",
    lang: g,
    children: [
      a.jsx(Wd, { language: g, onLanguageChange: S }),
      a.jsxs("div", {
        className: "max-w-[1440px] mx-auto px-8",
        children: [
          a.jsx(Ku, { language: g }),
          a.jsxs("main", {
            id: "main-content",
            className: "max-w-[1000px] mx-auto",
            children: [
              a.jsx(Qd, { language: g }),
              a.jsx(bt, {
                id: "challenge",
                title: c.challenge.title,
                summary: c.challenge.summary,
                language: g,
                children: a.jsx("div", {
                  className: "flex flex-col gap-4",
                  children: a.jsx("p", {
                    className: "text-[#e3e2e6] leading-relaxed",
                    children:
                      g === "en"
                        ? "Each product team had developed their own component patterns, leading to inconsistent spacing, typography, and interaction behaviors. This created rework for designers and increased QA overhead for engineers."
                        : "Jedes Produktteam hatte seine eigenen Komponentenmuster entwickelt, was zu inkonsistenten Abständen, Typografie und Interaktionsverhalten führte. Dies führte zu Nacharbeit für Designer und erhöhtem QA-Aufwand für Engineers.",
                  }),
                }),
              }),
              a.jsxs(bt, {
                id: "role",
                title: c.role.title,
                summary: c.role.summary,
                language: g,
                children: [
                  a.jsx(Qu, { language: g, orientation: "horizontal" }),
                  a.jsx("div", {
                    className: "md:hidden",
                    children: a.jsx(Qu, {
                      language: g,
                      orientation: "vertical",
                    }),
                  }),
                ],
              }),
              a.jsx(bt, {
                id: "strategy",
                title: c.strategy.title,
                summary: c.strategy.summary,
                language: g,
                children: a.jsx(Yd, { language: g }),
              }),
              a.jsxs(bt, {
                id: "built",
                title: c.built.title,
                summary: c.built.summary,
                language: g,
                children: [
                  a.jsx(rp, { language: g }),
                  a.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8",
                    children: [
                      a.jsxs("div", {
                        className:
                          "bg-[#2d1b4e]/20 border border-[#ffabf1]/10 rounded-xl p-6 text-center",
                        children: [
                          a.jsx("div", {
                            className: "text-4xl font-bold text-[#ffabf1] mb-2",
                            children: "120+",
                          }),
                          a.jsx("div", {
                            className: "text-sm text-[#e3e2e6]",
                            children: g === "en" ? "Components" : "Komponenten",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "bg-[#2d1b4e]/20 border border-[#ffabf1]/10 rounded-xl p-6 text-center",
                        children: [
                          a.jsx("div", {
                            className: "text-4xl font-bold text-[#ffabf1] mb-2",
                            children: "450+",
                          }),
                          a.jsx("div", {
                            className: "text-sm text-[#e3e2e6]",
                            children:
                              g === "en" ? "Design Tokens" : "Design-Tokens",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "bg-[#2d1b4e]/20 border border-[#ffabf1]/10 rounded-xl p-6 text-center",
                        children: [
                          a.jsx("div", {
                            className: "text-4xl font-bold text-[#ffabf1] mb-2",
                            children: "3",
                          }),
                          a.jsx("div", {
                            className: "text-sm text-[#e3e2e6]",
                            children: g === "en" ? "Platforms" : "Plattformen",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(bt, {
                id: "governance",
                title: c.governance.title,
                summary: c.governance.summary,
                language: g,
                children: [
                  a.jsx("p", {
                    className: "text-[#e3e2e6] leading-relaxed mb-8",
                    children:
                      g === "en"
                        ? "We created clear contribution guidelines, established a design review process, and built comprehensive documentation to help teams adopt the system effectively."
                        : "Wir erstellten klare Beitragsrichtlinien, etablierten einen Design-Review-Prozess und bauten umfassende Dokumentation auf, um Teams bei der effektiven Einführung des Systems zu unterstützen.",
                  }),
                  a.jsx(lp, { language: g }),
                ],
              }),
              a.jsx(bt, {
                id: "outcomes",
                title: c.outcomes.title,
                summary: c.outcomes.summary,
                language: g,
                children: a.jsxs("ul", {
                  className: "flex flex-col gap-4",
                  children: [
                    a.jsxs("li", {
                      className: "flex items-start gap-3",
                      children: [
                        a.jsx("span", {
                          className: "text-[#ffabf1] mt-1",
                          children: "✓",
                        }),
                        a.jsx("span", {
                          className: "text-[#e3e2e6] leading-relaxed",
                          children:
                            g === "en"
                              ? "85% team adoption within 6 months"
                              : "85% Team-Akzeptanz innerhalb von 6 Monaten",
                        }),
                      ],
                    }),
                    a.jsxs("li", {
                      className: "flex items-start gap-3",
                      children: [
                        a.jsx("span", {
                          className: "text-[#ffabf1] mt-1",
                          children: "✓",
                        }),
                        a.jsx("span", {
                          className: "text-[#e3e2e6] leading-relaxed",
                          children:
                            g === "en"
                              ? "40% reduction in design time for common flows"
                              : "40% Reduzierung der Designzeit für gängige Flows",
                        }),
                      ],
                    }),
                    a.jsxs("li", {
                      className: "flex items-start gap-3",
                      children: [
                        a.jsx("span", {
                          className: "text-[#ffabf1] mt-1",
                          children: "✓",
                        }),
                        a.jsx("span", {
                          className: "text-[#e3e2e6] leading-relaxed",
                          children:
                            g === "en"
                              ? "4 brand themes deployed using the same component library"
                              : "4 Markenthemen mit derselben Komponentenbibliothek bereitgestellt",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              a.jsx(bt, {
                id: "learnings",
                title: c.learnings.title,
                summary: c.learnings.summary,
                language: g,
                children: a.jsx("ul", {
                  className: "flex flex-col gap-4",
                  children: c.learnings.bullets.map((_, N) =>
                    a.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-3",
                        children: [
                          a.jsx("span", {
                            className: "text-[#ffabf1] mt-1",
                            children: "→",
                          }),
                          a.jsx("span", {
                            className: "text-[#e3e2e6] leading-relaxed",
                            children: _,
                          }),
                        ],
                      },
                      N,
                    ),
                  ),
                }),
              }),
              a.jsx(bt, {
                id: "artifacts",
                title: c.artifacts.title,
                summary: c.artifacts.summary,
                language: g,
                children: a.jsx(ep, { language: g }),
              }),
              a.jsx("div", {
                className: "py-16 flex justify-center",
                children: a.jsx($u, { language: g, style: "inline" }),
              }),
            ],
          }),
        ],
      }),
      a.jsx(Ku, { language: g, isMobile: !0 }),
      a.jsx($u, { language: g, style: "floating" }),
    ],
  });
}
rd.createRoot(document.getElementById("root")).render(a.jsx(op, {}));
