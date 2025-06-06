import {
  r as n,
  j as e,
  T as W,
  D as M,
  M as D,
  a as F,
  W as B,
  L as C,
  b as z,
  c as A,
  d as O,
} from "./assets/defaultSettingsView-DTenqiGw.js";
const I = ({
    className: r,
    style: c,
    open: s,
    width: i,
    verticalOffset: h,
    requestClose: f,
    anchor: g,
    dataTestId: b,
    children: L,
  }) => {
    const m = n.useRef(null),
      [T, w] = n.useState(0);
    let y = c;
    if (g != null && g.current) {
      const d = g.current.getBoundingClientRect();
      y = {
        position: "fixed",
        margin: 0,
        top: d.bottom + (h ?? 0),
        left: V(d, i),
        width: i,
        zIndex: 1,
        ...c,
      };
    }
    return (
      n.useEffect(() => {
        const d = (x) => {
            !m.current ||
              !(x.target instanceof Node) ||
              m.current.contains(x.target) ||
              f == null ||
              f();
          },
          p = (x) => {
            x.key === "Escape" && (f == null || f());
          };
        return s
          ? (document.addEventListener("mousedown", d),
            document.addEventListener("keydown", p),
            () => {
              document.removeEventListener("mousedown", d),
                document.removeEventListener("keydown", p);
            })
          : () => {};
      }, [s, f]),
      n.useEffect(() => {
        const d = () => w((p) => p + 1);
        return (
          window.addEventListener("resize", d),
          () => {
            window.removeEventListener("resize", d);
          }
        );
      }, []),
      s &&
        e.jsx("dialog", {
          ref: m,
          style: y,
          className: r,
          "data-testid": b,
          open: !0,
          children: L,
        })
    );
  },
  V = (r, c) => {
    const s = R(r, c, "left");
    if (s.inBounds) return s.value;
    const i = R(r, c, "right");
    return i.inBounds ? i.value : s.value;
  },
  R = (r, c, s) => {
    const i = document.documentElement.clientWidth;
    if (s === "left") {
      const h = r.left;
      return { value: h, inBounds: h + c <= i };
    } else return { value: r.right - c, inBounds: r.right - c >= 0 };
  },
  $ = () => {
    const r = n.useRef(null),
      [c, s] = n.useState(!1);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(W, {
          ref: r,
          icon: "settings-gear",
          title: "Settings",
          onClick: () => s((i) => !i),
        }),
        e.jsx(I, {
          style: {
            backgroundColor: "var(--vscode-sideBar-background)",
            padding: "4px 8px",
          },
          open: c,
          width: 200,
          verticalOffset: 8,
          requestClose: () => s(!1),
          anchor: r,
          dataTestId: "settings-toolbar-dialog",
          children: e.jsx(M, {}),
        }),
      ],
    });
  },
  G = () => {
    const [r, c] = n.useState(!1),
      [s, i] = n.useState([]),
      [h, f] = n.useState([]),
      [g, b] = n.useState(N),
      [L, m] = n.useState({ done: 0, total: 0 }),
      [T, w] = n.useState(!1),
      [y, d] = n.useState(null),
      [p, x] = n.useState(null),
      S = n.useCallback((t) => {
        const o = [],
          l = [],
          a = new URL(window.location.href);
        for (let u = 0; u < t.length; u++) {
          const v = t.item(u);
          if (!v) continue;
          const k = URL.createObjectURL(v);
          o.push(k),
            l.push(v.name),
            a.searchParams.append("trace", k),
            a.searchParams.append("traceFileName", v.name);
        }
        const j = a.toString();
        window.history.pushState({}, "", j), i(o), f(l), w(!1), d(null);
      }, []);
    n.useEffect(() => {
      const t = async (o) => {
        var l;
        if ((l = o.clipboardData) != null && l.files.length) {
          for (const a of o.clipboardData.files)
            if (a.type !== "application/zip") return;
          o.preventDefault(), S(o.clipboardData.files);
        }
      };
      return (
        document.addEventListener("paste", t),
        () => document.removeEventListener("paste", t)
      );
    });
    const U = n.useCallback(
        (t) => {
          t.preventDefault(), S(t.dataTransfer.files);
        },
        [S],
      ),
      P = n.useCallback(
        (t) => {
          t.preventDefault(), t.target.files && S(t.target.files);
        },
        [S],
      );
    n.useEffect(() => {
      const t = new URL(window.location.href).searchParams,
        o = t.getAll("trace");
      c(t.has("isServer"));
      for (const l of o)
        if (l.startsWith("file:")) {
          x(l || null);
          return;
        }
      if (t.has("isServer")) {
        const l = new URLSearchParams(window.location.search).get("ws"),
          a = new URL(`../${l}`, window.location.toString());
        a.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        const j = new F(new B(a));
        j.onLoadTraceRequested(async (u) => {
          i(u.traceUrl ? [u.traceUrl] : []), w(!1), d(null);
        }),
          j.initialize({}).catch(() => {});
      } else o.some((l) => l.startsWith("blob:")) || i(o);
    }, []),
      n.useEffect(() => {
        (async () => {
          if (s.length) {
            const t = (a) => {
              a.data.method === "progress" && m(a.data.params);
            };
            navigator.serviceWorker.addEventListener("message", t),
              m({ done: 0, total: 1 });
            const o = [];
            for (let a = 0; a < s.length; a++) {
              const j = s[a],
                u = new URLSearchParams();
              u.set("trace", j),
                h.length && u.set("traceFileName", h[a]),
                u.set("limit", String(s.length));
              const v = await fetch(`contexts?${u.toString()}`);
              if (!v.ok) {
                r || i([]), d((await v.json()).error);
                return;
              }
              o.push(...(await v.json()));
            }
            navigator.serviceWorker.removeEventListener("message", t);
            const l = new D(o);
            m({ done: 0, total: 0 }), b(l);
          } else b(N);
        })();
      }, [r, s, h]);
    const E = !!(!r && !T && !p && (!s.length || y));
    return e.jsxs("div", {
      className: "vbox workbench-loader",
      onDragOver: (t) => {
        t.preventDefault(), w(!0);
      },
      children: [
        e.jsxs("div", {
          className: "hbox header",
          ...(E ? { inert: "true" } : {}),
          children: [
            e.jsx("div", {
              className: "logo",
              children: e.jsx("img", {
                src: "playwright-logo.svg",
                alt: "Playwright logo",
              }),
            }),
            e.jsx("div", { className: "product", children: "Playwright" }),
            g.title && e.jsx("div", { className: "title", children: g.title }),
            e.jsx("div", { className: "spacer" }),
            e.jsx($, {}),
          ],
        }),
        e.jsx("div", {
          className: "progress",
          children: e.jsx("div", {
            className: "inner-progress",
            style: { width: L.total ? (100 * L.done) / L.total + "%" : 0 },
          }),
        }),
        e.jsx(C, { children: e.jsx(z, { model: g, inert: E }) }),
        p &&
          e.jsxs("div", {
            className: "drop-target",
            children: [
              e.jsx("div", {
                children:
                  "Trace Viewer uses Service Workers to show traces. To view trace:",
              }),
              e.jsxs("div", {
                style: { paddingTop: 20 },
                children: [
                  e.jsxs("div", {
                    children: [
                      "1. Click ",
                      e.jsx("a", { href: p, children: "here" }),
                      " to put your trace into the download shelf",
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      "2. Go to ",
                      e.jsx("a", {
                        href: "https://trace.playwright.dev",
                        children: "trace.playwright.dev",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    children:
                      "3. Drop the trace from the download shelf into the page",
                  }),
                ],
              }),
            ],
          }),
        E &&
          e.jsxs("div", {
            className: "drop-target",
            children: [
              e.jsx("div", {
                className: "processing-error",
                role: "alert",
                children: y,
              }),
              e.jsx("div", {
                className: "title",
                role: "heading",
                "aria-level": 1,
                children: "Drop Playwright Trace to load",
              }),
              e.jsx("div", { children: "or" }),
              e.jsx("button", {
                onClick: () => {
                  const t = document.createElement("input");
                  (t.type = "file"),
                    (t.multiple = !0),
                    t.click(),
                    t.addEventListener("change", (o) => P(o));
                },
                type: "button",
                children: "Select file(s)",
              }),
              e.jsx("div", {
                style: { maxWidth: 400 },
                children:
                  "Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally.",
              }),
            ],
          }),
        r &&
          !s.length &&
          e.jsx("div", {
            className: "drop-target",
            children: e.jsx("div", {
              className: "title",
              children: "Select test to see the trace",
            }),
          }),
        T &&
          e.jsx("div", {
            className: "drop-target",
            onDragLeave: () => {
              w(!1);
            },
            onDrop: (t) => U(t),
            children: e.jsx("div", {
              className: "title",
              children: "Release to analyse the Playwright Trace",
            }),
          }),
      ],
    });
  },
  N = new D([]);
(async () => {
  if ((A(), window.location.protocol !== "file:")) {
    if (
      (window.location.href.includes("isUnderTest=true") &&
        (await new Promise((r) => setTimeout(r, 1e3))),
      !navigator.serviceWorker)
    )
      throw new Error(`Service workers are not supported.
Make sure to serve the Trace Viewer (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js"),
      navigator.serviceWorker.controller ||
        (await new Promise((r) => {
          navigator.serviceWorker.oncontrollerchange = () => r();
        })),
      setInterval(function () {
        fetch("ping");
      }, 1e4);
  }
  O.createRoot(document.querySelector("#root")).render(e.jsx(G, {}));
})();
