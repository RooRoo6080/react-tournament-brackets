! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react"), require("styled-components")) : "function" == typeof define && define.amd ? define(["react", "styled-components"], t) : "object" == typeof exports ? exports["@g-loot/react-tournament-brackets"] = t(require("react"), require("styled-components")) : e["@g-loot/react-tournament-brackets"] = t(e[void 0], e[void 0])
}(window, (function (e, t) {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
        for (var o in e) n.d(r, o, function (t) {
          return e[t]
        }.bind(null, o));
      return r
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 16)
  }([function (e, t, n) {
    e.exports = n(34)()
  }, function (t, n) {
    t.exports = e
  }, function (e, t, n) {
    "use strict";
    e.exports = n(18)
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getCalculatedStyles = t.defaultStyle = void 0, t.defaultStyle = {
      width: 125,
      boxHeight: 125,
      canvasPadding: 50,
      spaceBetweenColumns: 15,
      spaceBetweenRows: -60,
      connectorColor: "#415a77",
      connectorColorHighlight: "#DDD",
      roundHeader: {
        isShown: !0,
        height: 10,
        marginBottom: 0,
        fontSize: 12,
        fontColor: "white",
        backgroundColor: "rgb(47, 54, 72)",
        fontFamily: '"Montserrat", "Arial", "Helvetica", "sans-serif"',
        roundTextGenerator: void 0
      },
      roundSeparatorWidth: 0,
      lineInfo: {
        separation: -13,
        homeVisitorSpread: 0.5
      },
      horizontalOffset: 8,
      wonBywalkOverText: "WO",
      lostByNoShowText: "NS"
    };
    t.getCalculatedStyles = (e = t.defaultStyle) => {
      const {
        boxHeight: n,
        width: r,
        spaceBetweenColumns: o,
        spaceBetweenRows: i
      } = e, a = r + o, c = n + i;
      return Object.assign(Object.assign({}, e), {
        rowHeight: c,
        columnWidth: a
      })
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.calculatePositionOfMatchLowerBracket = t.returnLowerBracketColumnIndex = t.calculatePositionOfMatchUpperBracket = t.calculatePositionOfFinalGame = t.calculateVerticalPositioning = t.calculateHeightIncrease = t.columnIncrement = t.calculateVerticalStartingPoint = void 0;
    t.calculateVerticalStartingPoint = (e, t) => 2 ** e * (t / 2) - t / 2;
    t.columnIncrement = (e, t) => 2 ** e * t;
    t.calculateHeightIncrease = (e, n, r) => (0, t.columnIncrement)(e, r) * n;
    t.calculateVerticalPositioning = ({
      rowIndex: e,
      columnIndex: n,
      rowHeight: r
    }) => (0, t.calculateHeightIncrease)(n, e, r) + (0, t.calculateVerticalStartingPoint)(n, r);
    t.calculatePositionOfFinalGame = (e, t, {
      canvasPadding: n,
      rowHeight: r,
      columnWidth: o,
      gameHeight: i,
      upperBracketHeight: a,
      lowerBracketHeight: c,
      offsetX: u = 0,
      offsetY: l = 0,
    }) => ({
      x: t * o + n + u,
      y: i * (c / a) - r + n + l
    });
    t.calculatePositionOfMatchUpperBracket = (e, n, {
      canvasPadding: r,
      rowHeight: o,
      columnWidth: i,
      offsetX: a = 0,
      offsetY: c = 0
    }) => {
      const u = (0, t.calculateVerticalPositioning)({
        rowHeight: o,
        rowIndex: e,
        columnIndex: n
      });
      var l;
      return {
        x: (0 === n || 1 === n ? n * i : (l = n, (Math.floor(2 * (l + 1)) - 3) * i)) + r + a,
        y: u + r + c
      }
    };
    t.returnLowerBracketColumnIndex = e => Math.ceil((e + 1) / 2) - 1;
    t.calculatePositionOfMatchLowerBracket = (e, n, {
      canvasPadding: r,
      rowHeight: o,
      columnWidth: i,
      offsetX: a = 0,
      offsetY: c = 0
    }) => ({
      x: n * i + r + a,
      y: (0, t.calculateVerticalPositioning)({
        rowHeight: o,
        rowIndex: e,
        columnIndex: (0, t.returnLowerBracketColumnIndex)(n)
      }) + r + c
    })
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__rest || function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
      }
      return n
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = n(1),
      a = n(9),
      c = n(13),
      u = n(3),
      l = n(6);
    t.default = function (e) {
      var t, {
        rowIndex: n,
        columnIndex: s,
        match: f,
        previousBottomMatch: d = null,
        teams: h,
        topText: p,
        bottomText: m,
        style: y = u.defaultStyle,
        matchComponent: g,
        onMatchClick: b,
        onPartyClick: v
      } = e,
        w = r(e, ["rowIndex", "columnIndex", "match", "previousBottomMatch", "teams", "topText", "bottomText", "style", "matchComponent", "onMatchClick", "onPartyClick"]);
      const {
        state: {
          hoveredPartyId: O
        },
        dispatch: x
      } = (0, i.useContext)(a.matchContext), P = (0, u.getCalculatedStyles)(y), {
        width: S = 300,
        boxHeight: j = 70,
        connectorColor: M
      } = P, k = h.sort((0, l.sortTeamsSeedOrder)(d)), T = (null == k ? void 0 : k[0]) ? k[0] : {}, _ = (null == k ? void 0 : k[1]) ? k[1] : {}, C = !Number.isNaN(O) && void 0 !== (null == T ? void 0 : T.id) && O === T.id, V = !Number.isNaN(O) && void 0 !== (null == _ ? void 0 : _.id) && O === _.id, E = e => f.state === c.MATCH_STATES.WALK_OVER && h.filter(e => !!e.id).length < 2 && e.id, H = T.status === c.MATCH_STATES.WALK_OVER || E(T) || T.isWinner, R = _.status === c.MATCH_STATES.WALK_OVER || E(_) || _.isWinner, D = c.MATCH_STATES[f.state], A = null !== (t = {
        [c.MATCH_STATES.WALK_OVER]: "",
        [c.MATCH_STATES.NO_SHOW]: "",
        [c.MATCH_STATES.DONE]: "",
        [c.MATCH_STATES.SCORE_DONE]: "",
        [c.MATCH_STATES.NO_PARTY]: ""
      }[D]) && void 0 !== t ? t : "", I = e => {
        var t;
        return e.status ? null !== (t = {
          WALKOVER: P.wonBywalkOverText,
          [c.MATCH_STATES.WALK_OVER]: P.wonBywalkOverText,
          [c.MATCH_STATES.NO_SHOW]: P.lostByNoShowText,
          [c.MATCH_STATES.NO_PARTY]: ""
        }[e.status]) && void 0 !== t ? t : "" : E(e) ? P.wonBywalkOverText : ""
      };
      return _.name = _.name || A, _.resultText = _.resultText || I(_), T.name = T.name || A, T.resultText = T.resultText || I(T), (0, o.jsx)("svg", Object.assign({
        width: S,
        height: j,
        viewBox: `0 0 ${S} ${j}`
      }, w, {
        children: (0, o.jsx)("foreignObject", Object.assign({
          x: 0,
          y: 0,
          width: S,
          height: j
        }, {
          children: g && (0, o.jsx)(g, Object.assign({}, {
            match: f,
            onMatchClick: b,
            onPartyClick: v,
            onMouseEnter: e => {
              x({
                type: "SET_HOVERED_PARTYID",
                payload: {
                  partyId: e,
                  matchId: f.id,
                  rowIndex: n,
                  columnIndex: s
                }
              })
            },
            onMouseLeave: () => {
              x({
                type: "SET_HOVERED_PARTYID",
                payload: null
              })
            },
            topParty: T,
            bottomParty: _,
            topWon: H,
            bottomWon: R,
            topHovered: C,
            bottomHovered: V,
            topText: p,
            bottomText: m,
            connectorColor: M,
            computedStyles: P
          }))
        }))
      }))
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.sortTeamsSeedOrder = t.getPreviousMatches = t.generatePreviousRound = void 0;
    const r = n(11);
    t.generatePreviousRound = (e, t) => e.reduce((e, n) => [...e, ...t.filter(e => e.nextMatchId === n.id).sort((e, t) => (0, r.sortAlphanumerically)(e.name, t.name))], []), t.getPreviousMatches = function (e, t, n) {
      return {
        previousTopMatch: 0 !== e && t[e - 1][n - 1],
        previousBottomMatch: 0 !== e && t[e - 1][n]
      }
    }, t.sortTeamsSeedOrder = function (e) {
      return (t, n) => {
        var r, o;
        const i = null === (r = null == e ? void 0 : e.participants) || void 0 === r ? void 0 : r.find(e => e.id === t.id),
          a = null === (o = null == e ? void 0 : e.participants) || void 0 === o ? void 0 : o.find(e => e.id === n.id);
        return i ? 1 : a ? -1 : 0
      }
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(20)),
      a = n(3);
    t.default = ({
      bracketSnippet: e,
      previousBottomMatchPosition: t = null,
      previousTopMatchPosition: n = null,
      currentMatchPosition: r,
      style: c
    }) => {
      const {
        boxHeight: u,
        connectorColor: l,
        roundHeader: s,
        roundSeparatorWidth: f,
        lineInfo: d,
        horizontalOffset: h,
        connectorColorHighlight: p,
        width: m
      } = (0, a.getCalculatedStyles)(c), y = e => {
        const o = u / 2,
          i = e > 0 ? t : n,
          a = `${r.x - h - d.separation} ${r.y + d.homeVisitorSpread * e + o + (s.isShown ? s.height + s.marginBottom : 0)}`,
          c = r.x - f / 2 - h,
          l = Math.abs(r.y - i.y) < 1,
          p = i.y + o + (s.isShown ? s.height + s.marginBottom : 0),
          y = i.x + m;
        return l ? ["M" + a, "H" + y] : ["M" + a, "H" + c, "V" + p, "H" + y]
      }, {
        topHighlighted: g,
        bottomHighlighted: b
      } = (0, i.default)({
        bracketSnippet: e
      }), {
        x: v,
        y: w
      } = r;
      return (0, o.jsxs)(o.Fragment, {
        children: [n && (0, o.jsx)("path", {
          d: y(-1).join(" "),
          id: `connector-${v}-${w}--1`,
          fill: "transparent",
          stroke: g ? p : l
        }), t && (0, o.jsx)("path", {
          d: y(1).join(" "),
          id: `connector-${v}-${w}-1`,
          fill: "transparent",
          stroke: b ? p : l
        }), g && (0, o.jsx)("use", {
          href: `connector-${v}-${w}--1`
        }), b && (0, o.jsx)("use", {
          href: `connector-${v}-${w}-1`
        })]
      })
    }
  }, function (e, n) {
    e.exports = t
  }, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "matchContext", (function () {
      return d
    })), n.d(t, "MatchContextProvider", (function () {
      return p
    }));
    var r = n(1),
      o = n.n(r);

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function a(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(n), !0).forEach((function (t) {
          u(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function u(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== i(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === i(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function l(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r, o, i, a, c = [],
            u = !0,
            l = !1;
          try {
            if (i = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              u = !1
            } else
              for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
          } catch (e) {
            l = !0, o = e
          } finally {
            try {
              if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
              if (l) throw o
            }
          }
          return c
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return s(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    var f = {
      hoveredMatchId: null,
      hoveredPartyId: null,
      hoveredColumnIndex: null,
      hoveredRowIndex: null
    },
      d = Object(r.createContext)(f),
      h = d.Provider,
      p = function (e) {
        var t = e.children,
          n = l(Object(r.useReducer)((function (e, t) {
            switch (t.type) {
              case "SET_HOVERED_PARTYID":
                var n, r = null !== (n = t.payload) && void 0 !== n ? n : {},
                  o = r.partyId,
                  i = r.columnIndex,
                  a = r.rowIndex,
                  u = r.matchId;
                return c(c({}, e), {}, {
                  hoveredPartyId: o,
                  hoveredColumnIndex: i,
                  hoveredRowIndex: a,
                  hoveredMatchId: u
                });
              default:
                throw new Error
            }
          }), f), 2),
          i = n[0],
          a = n[1];
        return o.a.createElement(h, {
          value: {
            state: i,
            dispatch: a
          }
        }, t)
      }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.createTheme = void 0;
    const o = r(n(21)),
      i = {
        fontFamily: '"Montserrat", "Arial", "Helvetica", "sans-serif"',
        transitionTimingFunction: "cubic-bezier(0, 0.92, 0.77, 0.99)",
        disabledColor: "#5D6371",
        roundHeaders: {
          background: "#00000000"
        },
        matchBackground: {
          wonColor: "#1D2232",
          lostColor: "#141822"
        },
        border: {
          color: "#22293B",
          highlightedColor: "#707582"
        },
        textColor: {
          highlighted: "#E9EAEC",
          main: "#BEC0C6",
          dark: "#707582",
          disabled: "#5D6371"
        },
        score: {
          text: {
            highlightedWonColor: "#118ADE",
            highlightedLostColor: "#FF9505"
          },
          background: {
            wonColor: "#10131C",
            lostColor: "#10131C"
          }
        },
        canvasBackground: "#0B0D13"
      };
    t.createTheme = function (e) {
      return (0, o.default)(i, e || {})
    }, t.default = i
  }, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "sortAlphanumerically", (function () {
      return r
    }));
    var r = function (e, t) {
      return new Intl.Collator(void 0, {
        numeric: !0,
        sensitivity: "base"
      }).compare(e, t)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.calculateSVGDimensions = void 0, t.calculateSVGDimensions = function (e, t, n, r, o, i, a = "") {
      return {
        gameWidth: t * r + 2 * o,
        gameHeight: e * n + 2 * o + (i.isShown ? i.height + i.marginBottom : 0),
        startPosition: [a ? -(parseInt(a, 10) * r - 2 * o) : 0, 0]
      }
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MATCH_STATES = void 0, t.MATCH_STATES = {
      PLAYED: "PLAYED",
      NO_SHOW: "NO_SHOW",
      WALK_OVER: "WALK_OVER",
      NO_PARTY: "NO_PARTY",
      DONE: "DONE",
      SCORE_DONE: "SCORE_DONE"
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(8)),
      a = i.default.text`
font-family: ${({ theme: e }) => e.fontFamily};
color: ${({ theme: e }) => e.textColor.highlighted};
`,
      c = i.default.rect.attrs(({
        theme: e
      }) => ({
        fill: e.roundHeaders.background
      }))``;
    t.default = function ({
      x: e,
      y: t = 0,
      width: n,
      roundHeader: r,
      canvasPadding: i,
      numOfRounds: u,
      tournamentRoundText: l,
      columnIndex: s
    }) {
      return (0, o.jsxs)("g", {
        children: [(0, o.jsx)(c, {
          x: e,
          y: t + i,
          width: n,
          height: r.height,
          fill: r.backgroundColor,
          rx: "3",
          ry: "3"
        }), (0, o.jsxs)(a, Object.assign({
          x: e + n / 2,
          y: t + i + r.height / 2,
          style: {
            fontFamily: r.fontFamily,
            fontSize: r.fontSize + "px",
            color: r.fontColor
          },
          fill: "currentColor",
          dominantBaseline: "middle",
          textAnchor: "middle"
        }, {
          children: [!r.roundTextGenerator && s + 1 === u && "Grand Final", !r.roundTextGenerator && s + 1 === u - 1 && "Final", !r.roundTextGenerator && s + 1 === u - 2 && "Semi-final", !r.roundTextGenerator && s + 1 < u - 2 && "Round " + l, r.roundTextGenerator && r.roundTextGenerator(s + 1, u)]
        }))]
      })
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.calculatePositionOfMatch = t.calculateVerticalPositioning = t.calculateHeightIncrease = t.columnIncrement = t.calculateVerticalStartingPoint = void 0;
    t.calculateVerticalStartingPoint = (e, t) => 2 ** e * (t / 2) - t / 2;
    t.columnIncrement = (e, t) => 2 ** e * t;
    t.calculateHeightIncrease = (e, n, r) => (0, t.columnIncrement)(e, r) * n;
    t.calculateVerticalPositioning = ({
      rowIndex: e,
      columnIndex: n,
      rowHeight: r
    }) => (0, t.calculateHeightIncrease)(n, e, r) + (0, t.calculateVerticalStartingPoint)(n, r);
    t.calculatePositionOfMatch = (e, n, {
      canvasPadding: r,
      rowHeight: o,
      columnWidth: i,
      offsetX: a = 0,
      offsetY: c = 0
    }) => ({
      x: n * i + r + a,
      y: (0, t.calculateVerticalPositioning)({
        rowHeight: o,
        rowIndex: e,
        columnIndex: n
      }) + r + c
    })
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.createTheme = t.SVGViewer = t.MATCH_STATES = t.Match = t.DoubleEliminationBracket = t.SingleEliminationBracket = void 0;
    const o = r(n(17));
    t.SingleEliminationBracket = o.default;
    const i = r(n(22));
    t.DoubleEliminationBracket = i.default;
    const a = r(n(32));
    t.Match = a.default;
    const c = n(13);
    Object.defineProperty(t, "MATCH_STATES", {
      enumerable: !0,
      get: function () {
        return c.MATCH_STATES
      }
    });
    const u = r(n(36));
    t.SVGViewer = u.default;
    const l = n(10);
    Object.defineProperty(t, "createTheme", {
      enumerable: !0,
      get: function () {
        return l.createTheme
      }
    })
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = n(8),
      a = n(11),
      c = n(12),
      u = n(9),
      l = r(n(5)),
      s = r(n(14)),
      f = n(6),
      d = n(3),
      h = n(15),
      p = r(n(19)),
      m = r(n(10));
    t.default = ({
      matches: e,
      matchComponent: t,
      currentRound: n,
      onMatchClick: r,
      onPartyClick: y,
      svgWrapper: g = (({
        children: e
      }) => (0, o.jsx)("div", {
        children: e
      })),
      theme: b = m.default,
      options: {
        style: v
      } = {
        style: d.defaultStyle
      }
    }) => {
      var w, O;
      const x = Object.assign(Object.assign(Object.assign({}, d.defaultStyle), v), {
        roundHeader: Object.assign(Object.assign({}, d.defaultStyle.roundHeader), null !== (w = null == v ? void 0 : v.roundHeader) && void 0 !== w ? w : {}),
        lineInfo: Object.assign(Object.assign({}, d.defaultStyle.lineInfo), null !== (O = null == v ? void 0 : v.lineInfo) && void 0 !== O ? O : {})
      }),
        {
          roundHeader: P,
          columnWidth: S,
          canvasPadding: j,
          rowHeight: M,
          width: k
        } = (0, d.getCalculatedStyles)(x),
        T = e.find(e => !e.nextMatchId),
        _ = t => {
          const n = t.reduce((t, n) => [...t, ...e.filter(e => e.nextMatchId === n.id).sort((e, t) => (0, a.sortAlphanumerically)(e.name, t.name))], []);
          return n.length > 0 ? [..._(n), n] : [n]
        },
        C = (V = T) ? [..._([V]), [V]].filter(e => e.length > 0) : [];
      var V;
      const {
        gameWidth: E,
        gameHeight: H,
        startPosition: R
      } = (0, c.calculateSVGDimensions)(C[0].length, C.length, M, S, j, P, n);
      return (0, o.jsx)(i.ThemeProvider, Object.assign({
        theme: b
      }, {
        children: (0, o.jsx)(g, Object.assign({
          bracketWidth: E,
          bracketHeight: H,
          startAt: R
        }, {
          children: (0, o.jsx)("svg", Object.assign({
            height: H,
            width: E,
            viewBox: `0 0 ${E} ${H}`
          }, {
            children: (0, o.jsx)(u.MatchContextProvider, {
              children: (0, o.jsx)("g", {
                children: C.map((e, n) => e.map((e, i) => {
                  const {
                    x: a,
                    y: c
                  } = (0, h.calculatePositionOfMatch)(i, n, {
                    canvasPadding: j,
                    columnWidth: S,
                    rowHeight: M
                  }), u = 2 * (i + 1) - 1, {
                    previousTopMatch: d,
                    previousBottomMatch: m
                  } = (0, f.getPreviousMatches)(n, C, u);
                  return (0, o.jsxs)("g", {
                    children: [P.isShown && (0, o.jsx)(s.default, {
                      x: a,
                      roundHeader: P,
                      canvasPadding: j,
                      width: k,
                      numOfRounds: C.length,
                      tournamentRoundText: e.tournamentRoundText,
                      columnIndex: n
                    }), 0 !== n && (0, o.jsx)(p.default, Object.assign({}, {
                      bracketSnippet: {
                        currentMatch: e,
                        previousTopMatch: d,
                        previousBottomMatch: m
                      },
                      rowIndex: i,
                      columnIndex: n,
                      gameHeight: H,
                      gameWidth: E,
                      style: x
                    })), (0, o.jsx)("g", {
                      children: (0, o.jsx)(l.default, {
                        x: a,
                        y: c + (P.isShown ? P.height + P.marginBottom : 0),
                        rowIndex: i,
                        columnIndex: n,
                        match: e,
                        previousBottomMatch: m,
                        topText: e.startTime,
                        bottomText: e.name,
                        teams: e.participants,
                        onMatchClick: r,
                        onPartyClick: y,
                        style: x,
                        matchComponent: t
                      })
                    })]
                  }, a + c)
                }))
              })
            })
          }))
        }))
      }))
    }
  }, function (e, t, n) {
    "use strict";
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(1),
      o = Symbol.for("react.element"),
      i = Symbol.for("react.fragment"),
      a = Object.prototype.hasOwnProperty,
      c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

    function l(e, t, n) {
      var r, i = {},
        l = null,
        s = null;
      for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (s = t.ref), t) a.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
      if (e && e.defaultProps)
        for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
      return {
        $$typeof: o,
        type: e,
        key: l,
        ref: s,
        props: i,
        _owner: c.current
      }
    }
    t.Fragment = i, t.jsx = l, t.jsxs = l
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(7)),
      a = n(3),
      c = n(15);
    t.default = ({
      bracketSnippet: e,
      rowIndex: t,
      columnIndex: n,
      style: r,
      offsetY: u = 0
    }) => {
      const {
        columnWidth: l,
        rowHeight: s,
        canvasPadding: f
      } = (0, a.getCalculatedStyles)(r), d = (0, c.calculatePositionOfMatch)(t, n, {
        canvasPadding: f,
        rowHeight: s,
        columnWidth: l,
        offsetY: u
      }), h = 2 * (t + 1) - 1, p = (0, c.calculatePositionOfMatch)(h - 1, n - 1, {
        canvasPadding: f,
        rowHeight: s,
        columnWidth: l,
        offsetY: u
      }), m = (0, c.calculatePositionOfMatch)(h, n - 1, {
        canvasPadding: f,
        rowHeight: s,
        columnWidth: l,
        offsetY: u
      });
      return (0, o.jsx)(i.default, {
        bracketSnippet: e,
        previousBottomMatchPosition: m,
        previousTopMatchPosition: p,
        currentMatchPosition: d,
        style: r
      })
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const r = n(1),
      o = n(9);
    t.default = ({
      bracketSnippet: e = null
    }) => {
      var t, n, i, a;
      const {
        state: {
          hoveredPartyId: c
        }
      } = (0, r.useContext)(o.matchContext), u = null == e ? void 0 : e.previousTopMatch, l = null == e ? void 0 : e.previousBottomMatch, s = null == e ? void 0 : e.currentMatch;
      return {
        topHighlighted: (null === (t = null == s ? void 0 : s.participants) || void 0 === t ? void 0 : t.some(e => e.id === c)) && (null === (n = null == u ? void 0 : u.participants) || void 0 === n ? void 0 : n.some(e => e.id === c)),
        bottomHighlighted: (null === (i = null == s ? void 0 : s.participants) || void 0 === i ? void 0 : i.some(e => e.id === c)) && (null === (a = null == l ? void 0 : l.participants) || void 0 === a ? void 0 : a.some(e => e.id === c))
      }
    }
  }, function (e, t, n) {
    "use strict";
    var r = function (e) {
      return function (e) {
        return !!e && "object" == typeof e
      }(e) && ! function (e) {
        var t = Object.prototype.toString.call(e);
        return "[object RegExp]" === t || "[object Date]" === t || function (e) {
          return e.$$typeof === o
        }(e)
      }(e)
    };
    var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function i(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? s((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
      var n
    }

    function a(e, t, n) {
      return e.concat(t).map((function (e) {
        return i(e, n)
      }))
    }

    function c(e) {
      return Object.keys(e).concat(function (e) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function (t) {
          return Object.propertyIsEnumerable.call(e, t)
        })) : []
      }(e))
    }

    function u(e, t) {
      try {
        return t in e
      } catch (e) {
        return !1
      }
    }

    function l(e, t, n) {
      var r = {};
      return n.isMergeableObject(e) && c(e).forEach((function (t) {
        r[t] = i(e[t], n)
      })), c(t).forEach((function (o) {
        (function (e, t) {
          return u(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
        })(e, o) || (u(e, o) && n.isMergeableObject(t[o]) ? r[o] = function (e, t) {
          if (!t.customMerge) return s;
          var n = t.customMerge(e);
          return "function" == typeof n ? n : s
        }(o, n)(e[o], t[o], n) : r[o] = i(t[o], n))
      })), r
    }

    function s(e, t, n) {
      (n = n || {}).arrayMerge = n.arrayMerge || a, n.isMergeableObject = n.isMergeableObject || r, n.cloneUnlessOtherwiseSpecified = i;
      var o = Array.isArray(t);
      return o === Array.isArray(e) ? o ? n.arrayMerge(e, t, n) : l(e, t, n) : i(t, n)
    }
    s.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error("first argument should be an array");
      return e.reduce((function (e, n) {
        return s(e, n, t)
      }), {})
    };
    var f = s;
    e.exports = f
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = n(8),
      a = n(6),
      c = n(12),
      u = n(9),
      l = n(3),
      s = r(n(10)),
      f = r(n(23)),
      d = r(n(25)),
      h = r(n(27)),
      p = r(n(28)),
      m = r(n(30));
    t.default = ({
      matches: e,
      matchComponent: t,
      currentRound: n,
      onMatchClick: r,
      onPartyClick: y,
      svgWrapper: g = (({
        children: e
      }) => (0, o.jsx)("div", {
        children: e
      })),
      theme: b = s.default,
      options: {
        style: v
      } = {
        style: l.defaultStyle
      }
    }) => {
      const w = Object.assign(Object.assign(Object.assign({}, l.defaultStyle), v), {
        roundHeader: Object.assign(Object.assign({}, l.defaultStyle.roundHeader), v.roundHeader),
        lineInfo: Object.assign(Object.assign({}, l.defaultStyle.lineInfo), v.lineInfo)
      }),
        O = (0, l.getCalculatedStyles)(w),
        {
          roundHeader: x,
          columnWidth: P,
          canvasPadding: S,
          rowHeight: j
        } = O,
        {
          convergingMatch: M,
          finalsArray: k
        } = function (e) {
          const t = e.upper.some(e => !e.nextMatchId);
          let n, r;
          if (e.lower.some(e => !e.nextMatchId)) {
            const t = e.upper.find(t => !e.upper.some(e => e.id === t.nextMatchId));
            n = e.lower.find(e => e.id === t.nextMatchId), r = [n, e.lower.find(e => e.id === n.nextMatchId)].filter(e => null == e ? void 0 : e.id)
          }
          if (t) {
            const t = e.lower.find(t => !e.lower.some(e => e.id === t.nextMatchId));
            n = e.upper.find(e => e.id === t.nextMatchId), r = [n, e.upper.find(e => e.id === n.nextMatchId)].filter(e => null == e ? void 0 : e.id)
          }
          return {
            convergingMatch: n,
            finalsArray: r
          }
        }(e),
        T = (null == k ? void 0 : k.length) > 1,
        _ = (e, t) => {
          const n = (0, a.generatePreviousRound)(e, t);
          return n.length > 0 ? [..._(n, t), n] : [n]
        },
        C = (e, t) => e ? [..._([e], t), []].filter(e => e.length > 0) : [],
        V = C(M, e.upper),
        E = C(M, e.lower),
        H = E.length + 1 + (T && k.length - 1),
        R = (0, c.calculateSVGDimensions)(V[0].length, V.length, j, P, S, x, n),
        D = (0, c.calculateSVGDimensions)(E[0].length, E.length, j, P, S, x, n),
        A = (0, c.calculateSVGDimensions)(E[0].length, H, j, P, S, x, n),
        {
          gameWidth: I
        } = A,
        B = R.gameHeight + D.gameHeight,
        {
          startPosition: W
        } = R;
      return (0, o.jsx)(i.ThemeProvider, Object.assign({
        theme: b
      }, {
        children: (0, o.jsx)(g, Object.assign({
          bracketWidth: I,
          bracketHeight: B,
          startAt: W
        }, {
          children: (0, o.jsx)("svg", Object.assign({
            height: B,
            width: I,
            viewBox: `0 0 ${I} ${B}`
          }, {
            children: (0, o.jsx)(u.MatchContextProvider, {
              children: (0, o.jsxs)("g", {
                children: [(0, o.jsx)(h.default, Object.assign({}, {
                  numOfRounds: H,
                  calculatedStyles: O
                })), (0, o.jsx)(f.default, Object.assign({}, {
                  columns: V,
                  calculatedStyles: O,
                  gameHeight: B,
                  gameWidth: I,
                  onMatchClick: r,
                  onPartyClick: y,
                  matchComponent: t
                })), (0, o.jsx)(d.default, Object.assign({}, {
                  columns: E,
                  calculatedStyles: O,
                  gameHeight: B,
                  gameWidth: I,
                  onMatchClick: r,
                  onPartyClick: y,
                  matchComponent: t,
                  upperBracketHeight: R.gameHeight
                })), (0, o.jsx)(p.default, Object.assign({}, {
                  match: M,
                  numOfUpperRounds: V.length,
                  numOfLowerRounds: E.length,
                  bracketSnippet: {
                    previousTopMatch: V[V.length - 1][0],
                    previousBottomMatch: E[E.length - 1][0],
                    currentMatch: M
                  },
                  upperBracketHeight: R.gameHeight,
                  lowerBracketHeight: D.gameHeight,
                  calculatedStyles: O,
                  columnIndex: E.length,
                  rowIndex: 0,
                  gameHeight: B,
                  gameWidth: I,
                  matchComponent: t,
                  onMatchClick: r,
                  onPartyClick: y
                })), (null == k ? void 0 : k.length) > 1 && (0, o.jsx)(m.default, Object.assign({}, {
                  match: k[1],
                  numOfUpperRounds: V.length,
                  numOfLowerRounds: E.length,
                  bracketSnippet: {
                    previousBottomMatch: k[0],
                    currentMatch: k[1]
                  },
                  upperBracketHeight: R.gameHeight,
                  lowerBracketHeight: D.gameHeight,
                  calculatedStyles: O,
                  columnIndex: E.length + 1,
                  rowIndex: 0,
                  gameHeight: B,
                  gameWidth: I,
                  matchComponent: t,
                  onMatchClick: r,
                  onPartyClick: y
                }))]
              })
            })
          }))
        }))
      }))
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(5)),
      a = n(6),
      c = n(4),
      u = r(n(24));
    t.default = ({
      columns: e,
      calculatedStyles: t,
      gameHeight: n,
      gameWidth: r,
      onMatchClick: l,
      onPartyClick: s,
      matchComponent: f
    }) => {
      const {
        canvasPadding: d,
        columnWidth: h,
        rowHeight: p,
        roundHeader: m
      } = t;
      return e.map((y, g) => y.map((y, b) => {
        const {
          x: v,
          y: w
        } = (0, c.calculatePositionOfMatchUpperBracket)(b, g, {
          canvasPadding: d,
          columnWidth: h,
          rowHeight: p
        }), O = 2 * (b + 1) - 1, {
          previousTopMatch: x,
          previousBottomMatch: P
        } = (0, a.getPreviousMatches)(g, e, O);
        return (0, o.jsxs)("g", {
          children: [0 !== g && (0, o.jsx)(u.default, Object.assign({}, {
            bracketSnippet: {
              currentMatch: y,
              previousTopMatch: x,
              previousBottomMatch: P
            },
            rowIndex: b,
            columnIndex: g,
            gameHeight: n,
            gameWidth: r,
            style: t
          })), (0, o.jsx)("g", {
            children: (0, o.jsx)(i.default, {
              x: v,
              y: w + (m.isShown ? m.height + m.marginBottom : 0),
              rowIndex: b,
              columnIndex: g,
              match: y,
              previousBottomMatch: P,
              topText: y.startTime,
              bottomText: y.name,
              teams: y.participants,
              onMatchClick: l,
              onPartyClick: s,
              style: t,
              matchComponent: f
            })
          })]
        }, v + w)
      }))
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(7)),
      a = n(3),
      c = n(4);
    t.default = ({
      bracketSnippet: e,
      rowIndex: t,
      columnIndex: n,
      style: r,
      offsetY: u = 10.5, //upper bracket connector offset
      isLowerBracket: l = !1
    }) => {
      const {
        columnWidth: s,
        rowHeight: f,
        canvasPadding: d
      } = (0, a.getCalculatedStyles)(r), h = l && n % 2 != 0, p = l ? c.calculatePositionOfMatchLowerBracket : c.calculatePositionOfMatchUpperBracket, m = p(t, n, {
        canvasPadding: d,
        rowHeight: f,
        columnWidth: s,
        offsetY: u
      }), y = h ? t : 2 * (t + 1) - 1, g = !h && p(y - 1, n - 1, {
        canvasPadding: d,
        rowHeight: f,
        columnWidth: s,
        offsetY: u
      }), b = p(y, n - 1, {
        canvasPadding: d,
        rowHeight: f,
        columnWidth: s,
        offsetY: u
      });
      return (0, o.jsx)(i.default, {
        bracketSnippet: e,
        previousBottomMatchPosition: b,
        previousTopMatchPosition: g,
        currentMatchPosition: m,
        style: r
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(5)),
      a = n(6),
      c = n(4),
      u = r(n(26));
    t.default = ({
      columns: e,
      calculatedStyles: t,
      gameHeight: n,
      gameWidth: r,
      onMatchClick: l,
      onPartyClick: s,
      matchComponent: f,
      upperBracketHeight: d
    }) => {
      const {
        canvasPadding: h,
        columnWidth: p,
        rowHeight: m,
        roundHeader: y
      } = t;
      return e.map((g, b) => g.map((g, v) => {
        const {
          x: w,
          y: O
        } = (0, c.calculatePositionOfMatchLowerBracket)(v, b, {
          canvasPadding: h,
          columnWidth: p,
          rowHeight: m,
          offsetY: d - 10
        }), x = b % 2 != 0, P = x ? v : 2 * (v + 1) - 1, {
          previousTopMatch: S,
          previousBottomMatch: j
        } = (0, a.getPreviousMatches)(b, e, P);
        return (0, o.jsxs)("g", {
          children: [0 !== b && (0, o.jsx)(u.default, Object.assign({}, {
            bracketSnippet: {
              currentMatch: g,
              previousTopMatch: !x && S,
              previousBottomMatch: j
            },
            rowIndex: v,
            columnIndex: b,
            gameHeight: n,
            gameWidth: r,
            style: t,
            offsetY: d
          })), (0, o.jsx)("g", {
            children: (0, o.jsx)(i.default, {
              x: w,
              y: O + (y.isShown ? y.height + y.marginBottom : 0),
              rowIndex: v,
              columnIndex: b,
              match: g,
              previousBottomMatch: j,
              topText: g.startTime,
              bottomText: g.name,
              teams: g.participants,
              onMatchClick: l,
              onPartyClick: s,
              style: t,
              matchComponent: f
            })
          })]
        }, w + O)
      }))
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(7)),
      a = n(3),
      c = n(4);
    t.default = ({
      bracketSnippet: e,
      rowIndex: t,
      columnIndex: n,
      style: r,
      offsetY: u = 0
    }) => {
      const {
        columnWidth: l,
        rowHeight: s,
        canvasPadding: f
      } = (0, a.getCalculatedStyles)(r), d = n % 2 != 0, h = (0, c.calculatePositionOfMatchLowerBracket)(t, n, {
        canvasPadding: f,
        rowHeight: s,
        columnWidth: l,
        offsetY: u
      }), p = d ? t : 2 * (t + 1) - 1, m = !d && (0, c.calculatePositionOfMatchLowerBracket)(p - 1, n - 1, {
        canvasPadding: f,
        rowHeight: s,
        columnWidth: l,
        offsetY: u
      }), y = (0, c.calculatePositionOfMatchLowerBracket)(p, n - 1, {
        canvasPadding: f,
        rowHeight: s,
        columnWidth: l,
        offsetY: u
      });
      return (0, o.jsx)(i.default, {
        bracketSnippet: e,
        previousBottomMatchPosition: y,
        previousTopMatchPosition: m,
        currentMatchPosition: h,
        style: r
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(14)),
      a = n(4);
    t.default = function ({
      numOfRounds: e,
      calculatedStyles: {
        canvasPadding: t,
        columnWidth: n,
        rowHeight: r,
        roundHeader: c,
        width: u
      }
    }) {
      return (0, o.jsx)(o.Fragment, {
        children: [...new Array(e)].map((l, s) => {
          const {
            x: f
          } = (0, a.calculatePositionOfMatchLowerBracket)(0, s, {
            canvasPadding: t,
            columnWidth: n,
            rowHeight: r
          });
          return (0, o.jsx)("g", {
            children: c.isShown && (0, o.jsx)(i.default, {
              x: f,
              roundHeader: c,
              canvasPadding: t,
              width: u,
              numOfRounds: e,
              tournamentRoundText: (s + 1).toString(),
              columnIndex: s
            })
          }, "round " + f)
        })
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(5)),
      a = n(4),
      c = r(n(29));
    t.default = ({
      match: e,
      rowIndex: t,
      columnIndex: n,
      gameHeight: r,
      gameWidth: u,
      calculatedStyles: l,
      onMatchClick: s,
      onPartyClick: f,
      matchComponent: d,
      bracketSnippet: h,
      numOfUpperRounds: p,
      numOfLowerRounds: m,
      upperBracketHeight: y,
      lowerBracketHeight: g
    }) => {
      const {
        canvasPadding: b,
        columnWidth: v,
        rowHeight: w,
        roundHeader: O
      } = l, {
        x: x,
        y: P
      } = (0, a.calculatePositionOfFinalGame)(t, n, {
        canvasPadding: b,
        columnWidth: v,
        rowHeight: w,
        gameHeight: r,
        upperBracketHeight: y,
        lowerBracketHeight: g
      });
      return (0, o.jsxs)(o.Fragment, {
        children: [0 !== n && (0, o.jsx)(c.default, Object.assign({}, {
          numOfUpperRounds: p,
          numOfLowerRounds: m,
          rowIndex: t,
          columnIndex: n,
          gameWidth: u,
          gameHeight: r,
          lowerBracketHeight: g,
          upperBracketHeight: y,
          style: l,
          bracketSnippet: h
        })), (0, o.jsx)("g", {
          children: (0, o.jsx)(i.default, {
            x: x,
            y: P + (O.isShown ? O.height + O.marginBottom : 0),
            rowIndex: t,
            columnIndex: n,
            match: e,
            previousBottomMatch: h.previousBottomMatch,
            topText: e.startTime,
            bottomText: e.name,
            teams: e.participants,
            onMatchClick: s,
            onPartyClick: f,
            style: l,
            matchComponent: d
          })
        })]
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(7)),
      a = n(3),
      c = n(4);
    t.default = ({
      rowIndex: e,
      columnIndex: t,
      style: n,
      bracketSnippet: r = null,
      offsetY: u = 10.5,
      numOfUpperRounds: l,
      numOfLowerRounds: s,
      lowerBracketHeight: f,
      upperBracketHeight: d,
      gameHeight: h
    }) => {
      const {
        columnWidth: p,
        rowHeight: m,
        canvasPadding: y
      } = (0, a.getCalculatedStyles)(n), g = (0, c.calculatePositionOfFinalGame)(e, t, {
        canvasPadding: y,
        rowHeight: m,
        columnWidth: p,
        offsetY: u,
        lowerBracketHeight: f,
        upperBracketHeight: d,
        gameHeight: h
      }), b = (0, c.calculatePositionOfMatchUpperBracket)(0, l - 1, {
        canvasPadding: y,
        rowHeight: m,
        columnWidth: p,
        offsetY: u
      }), v = (0, c.calculatePositionOfMatchLowerBracket)(0, s - 1, {
        canvasPadding: y,
        rowHeight: m,
        columnWidth: p,
        offsetY: d + u - 10
      });
      return (0, o.jsx)(i.default, {
        bracketSnippet: r,
        previousBottomMatchPosition: v,
        previousTopMatchPosition: b,
        currentMatchPosition: g,
        style: n
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(5)),
      a = n(4),
      c = r(n(31));
    t.default = ({
      match: e,
      rowIndex: t,
      columnIndex: n,
      gameHeight: r,
      gameWidth: u,
      calculatedStyles: l,
      onMatchClick: s,
      onPartyClick: f,
      matchComponent: d,
      bracketSnippet: h,
      numOfUpperRounds: p,
      numOfLowerRounds: m,
      upperBracketHeight: y,
      lowerBracketHeight: g
    }) => {
      const {
        canvasPadding: b,
        columnWidth: v,
        rowHeight: w,
        roundHeader: O
      } = l, {
        x: x,
        y: P
      } = (0, a.calculatePositionOfFinalGame)(t, n, {
        canvasPadding: b,
        columnWidth: v,
        rowHeight: w,
        gameHeight: r,
        upperBracketHeight: y,
        lowerBracketHeight: g
      });
      return (0, o.jsxs)(o.Fragment, {
        children: [0 !== n && (0, o.jsx)(c.default, Object.assign({}, {
          numOfUpperRounds: p,
          numOfLowerRounds: m,
          rowIndex: t,
          columnIndex: n,
          gameWidth: u,
          gameHeight: r,
          lowerBracketHeight: g,
          upperBracketHeight: y,
          style: l,
          bracketSnippet: h
        })), (0, o.jsx)("g", {
          children: (0, o.jsx)(i.default, {
            x: x,
            y: P + (O.isShown ? O.height + O.marginBottom : 0),
            rowIndex: t,
            columnIndex: n,
            match: e,
            previousBottomMatch: h.previousBottomMatch,
            topText: e.startTime,
            bottomText: e.name,
            teams: e.participants,
            onMatchClick: s,
            onPartyClick: f,
            style: l,
            matchComponent: d
          })
        })]
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const o = n(2),
      i = r(n(7)),
      a = n(3),
      c = n(4);
    t.default = ({
      rowIndex: e,
      columnIndex: t,
      style: n,
      bracketSnippet: r = null,
      offsetY: u = 10,
      numOfLowerRounds: l,
      lowerBracketHeight: s,
      upperBracketHeight: f,
      gameHeight: d
    }) => {
      const {
        columnWidth: h,
        rowHeight: p,
        canvasPadding: m
      } = (0, a.getCalculatedStyles)(n), y = (0, c.calculatePositionOfFinalGame)(e, t, {
        canvasPadding: m,
        rowHeight: p,
        columnWidth: h,
        offsetY: u,
        lowerBracketHeight: s,
        upperBracketHeight: f,
        gameHeight: d
      }), g = (0, c.calculatePositionOfFinalGame)(0, l, {
        canvasPadding: m,
        rowHeight: p,
        columnWidth: h,
        offsetY: u,
        lowerBracketHeight: s,
        upperBracketHeight: f,
        gameHeight: d
      });
      return (0, o.jsx)(i.default, {
        bracketSnippet: r,
        previousBottomMatchPosition: g,
        currentMatchPosition: y,
        style: n
      })
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const r = n(2),
      o = n(33);
    t.default = function ({
      bottomHovered: e,
      bottomParty: t,
      bottomText: n,
      bottomWon: i,
      match: a,
      onMatchClick: c,
      onMouseEnter: u,
      onMouseLeave: l,
      onPartyClick: s,
      topHovered: f,
      topParty: d,
      topText: h,
      topWon: p
    }) {
      return (0, r.jsxs)(o.Wrapper, {
        children: [(0, r.jsxs)("div", Object.assign({
          style: {
            display: "flex",
            justifyContent: "space-between"
          }
        }, {
          children: [(0, r.jsx)(o.TopText, {
            children: h
          }), (a.href || "function" == typeof c) && (0, r.jsx)(o.Anchor, Object.assign({
            href: a.href,
            onClick: e => null == c ? void 0 : c({
              match: a,
              topWon: p,
              bottomWon: i,
              event: e
            })
          }, {
            children: (0, r.jsx)(o.TopText, {
              children: "Match Details"
            })
          }))]
        })), (0, r.jsxs)(o.StyledMatch, {
          children: [(0, r.jsxs)(o.Side, Object.assign({
            onMouseEnter: () => u(d.id),
            onMouseLeave: l,
            won: p,
            hovered: f,
            onClick: () => null == s ? void 0 : s(d, p)
          }, {
            children: [(0, r.jsx)(o.Team, {
              children: null == d ? void 0 : d.name
            }), (0, r.jsx)(o.Score, Object.assign({
              won: p
            }, {
              children: null == d ? void 0 : d.resultText
            }))]
          })), (0, r.jsx)(o.Line, {
            highlighted: f || e
          }), (0, r.jsxs)(o.Side, Object.assign({
            onMouseEnter: () => u(t.id),
            onMouseLeave: l,
            won: i,
            hovered: e,
            onClick: () => null == s ? void 0 : s(t, i)
          }, {
            children: [(0, r.jsx)(o.Team, {
              children: null == t ? void 0 : t.name
            }), (0, r.jsx)(o.Score, Object.assign({
              won: i
            }, {
              children: null == t ? void 0 : t.resultText
            }))]
          }))]
        }), (0, r.jsx)(o.BottomText, {
          children: null != n ? n : " "
        })]
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
      void 0 === r && (r = n);
      var o = Object.getOwnPropertyDescriptor(t, n);
      o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
        enumerable: !0,
        get: function () {
          return t[n]
        }
      }), Object.defineProperty(e, r, o)
    } : function (e, t, n, r) {
      void 0 === r && (r = n), e[r] = t[n]
    }),
      o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
        Object.defineProperty(e, "default", {
          enumerable: !0,
          value: t
        })
      } : function (e, t) {
        e.default = t
      }),
      i = this && this.__importStar || function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
        return o(t, e), t
      };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Anchor = t.Line = t.Side = t.Score = t.Team = t.StyledMatch = t.BottomText = t.TopText = t.Wrapper = void 0;
    const a = i(n(8));
    t.Wrapper = a.default.div`
display: flex;
flex-direction: column;
font-size: 12px;
justify-content: center;
align-items: stretch;
height: 100%;
font-family: ${({ theme: e }) => e.fontFamily};
`, t.TopText = a.default.p`
color: ${({ theme: e }) => e.textColor.dark};
margin-bottom: 0.2rem;
min-height: 2.25rem;
`, t.BottomText = a.default.p`
color: ${({ theme: e }) => e.textColor.dark};

flex: 0 0 none;
text-align: center;
margin-top: 0.1rem;
font-size: 8px;
min-height: 1.25rem;
`, t.StyledMatch = a.default.div`
display: flex;
flex-direction: column;
flex: 1 1 auto;
justify-content: space-between;
`, t.Team = a.default.div``, t.Score = a.default.div`
display: flex;
height: 100%;
padding: 0 1rem;
align-items: center;
width: 0%;
justify-content: center;
background: ${({ theme: e, won: t }) => t ? e.score.background.wonColor : e.score.background.lostColor};
color: ${({ theme: e, won: t }) => t ? e.textColor.highlighted : e.textColor.dark};
`, t.Side = a.default.div`
display: flex;
height: 100%;
align-items: center;
justify-content: space-between;
padding: 0 0 0 .2rem;
background: ${({ theme: e, won: t }) => t ? e.matchBackground.wonColor : e.matchBackground.lostColor};

:first-of-type {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-width: 2px;
}
:last-of-type {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-width: 2px;
}
border-right: 4px solid ${({ theme: e }) => e.border.color};
border-left: 4px solid ${({ theme: e }) => e.border.color};
border-top: 1px solid ${({ theme: e }) => e.border.color};
border-bottom: 1px solid ${({ theme: e }) => e.border.color};

transition: border-color 0.5s ${({ theme: e }) => e.transitionTimingFunction};
${t.Team} {
  color: ${({ theme: e, won: t }) => t ? e.textColor.highlighted : e.textColor.dark};
}
${t.Score} {
  color: ${({ theme: e, won: t }) => t ? e.textColor.highlighted : e.textColor.dark};
}
${({ hovered: e, theme: n, won: r }) => e && a.css`
      border - color: $ {
          n.border.highlightedColor
      };
      $ {
          t.Team
      } {
          color: $ {
              n.textColor.highlighted
          };
      }
      $ {
          t.Score
      } {
          color: $ {
              r ? n.score.text.highlightedWonColor : n.score.text.highlightedLostColor
          };
      }
      `}
`, t.Line = a.default.div`
height: 0px;
transition: border-color 0.5s ${({ theme: e }) => e.smooth};

border-width: 0px;
border-style: solid;
border-color: ${({ highlighted: e, theme: t }) => e ? t.border.highlightedColor : t.border.color};
`, t.Anchor = a.default.a`
font-family: ${e => e.font ? e.font : e.theme.fontFamily};
font-weight: ${e => e.bold ? "700" : "400"};
color: '${e => e.theme.textColor.main}';
font-size: ${e => e.size ? e.size : "0.5rem"};
line-height: 1.375rem;
text-decoration: none;
cursor: pointer;
&:hover {
  text-decoration: underline;
}
`
  }, function (e, t, n) {
    "use strict";
    var r = n(35);

    function o() { }

    function i() { }
    i.resetWarningCache = o, e.exports = function () {
      function e(e, t, n, o, i, a) {
        if (a !== r) {
          var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw c.name = "Invariant Violation", c
        }
      }

      function t() {
        return e
      }
      e.isRequired = e;
      var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: i,
        resetWarningCache: o
      };
      return n.PropTypes = n, n
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
      o = n.n(r),
      i = n(0),
      a = n.n(i);

    function c(e, t) {
      return Array.isArray(t) ? [e.a * t[0] + e.c * t[1] + e.e, e.b * t[0] + e.d * t[1] + e.f] : {
        x: e.a * t.x + e.c * t.y + e.e,
        y: e.b * t.x + e.d * t.y + e.f
      }
    }

    function u(e, t) {
      return t.map(t => c(e, t))
    }

    function l(e) {
      return {
        a: parseFloat(e.a),
        b: parseFloat(e.b),
        c: parseFloat(e.c),
        d: parseFloat(e.d),
        e: parseFloat(e.e),
        f: parseFloat(e.f)
      }
    }

    function s(e) {
      const {
        a: t,
        b: n,
        c: r,
        d: o,
        e: i,
        f: a
      } = e, c = t * o - n * r;
      return {
        a: o / c,
        b: n / -c,
        c: r / -c,
        d: t / c,
        e: (o * i - r * a) / -c,
        f: (n * i - t * a) / c
      }
    }

    function f(e) {
      return void 0 === e
    }

    function d(e, t = 0) {
      return {
        a: 1,
        c: 0,
        e: e,
        b: 0,
        d: 1,
        f: t
      }
    }

    function h(...e) {
      const t = (e, t) => ({
        a: e.a * t.a + e.c * t.b,
        c: e.a * t.c + e.c * t.d,
        e: e.a * t.e + e.c * t.f + e.e,
        b: e.b * t.a + e.d * t.b,
        d: e.b * t.c + e.d * t.d,
        f: e.b * t.e + e.d * t.f + e.f
      });
      switch ((e = Array.isArray(e[0]) ? e[0] : e).length) {
        case 0:
          throw new Error("no matrices provided");
        case 1:
          return e[0];
        case 2:
          return t(e[0], e[1]);
        default: {
          const [n, r, ...o] = e;
          return h(t(n, r), ...o)
        }
      }
    }
    const {
      cos: p,
      sin: m,
      PI: y
    } = Math;

    function g(e, t, n, r) {
      f(t) && (t = e);
      const o = {
        a: e,
        c: 0,
        e: 0,
        b: 0,
        d: t,
        f: 0
      };
      return f(n) || f(r) ? o : h([d(n, r), o, d(-n, -r)])
    }
    const {
      tan: b
    } = Math;

    function v(e) {
      return `matrix(${e.a},${e.b},${e.c},${e.d},${e.e},${e.f})`
    }

    function w(e, t, n, r) {
      var o = Error.call(this, e);
      return Object.setPrototypeOf && Object.setPrototypeOf(o, w.prototype), o.expected = t, o.found = n, o.location = r, o.name = "SyntaxError", o
    }

    function O(e, t, n) {
      return n = n || " ", e.length > t ? e : (t -= e.length, e + (n += n.repeat(t)).slice(0, t))
    } ! function (e, t) {
      function n() {
        this.constructor = e
      }
      n.prototype = t.prototype, e.prototype = new n
    }(w, Error), w.prototype.format = function (e) {
      var t = "Error: " + this.message;
      if (this.location) {
        var n, r = null;
        for (n = 0; n < e.length; n++)
          if (e[n].source === this.location.source) {
            r = e[n].text.split(/\r\n|\n|\r/g);
            break
          } var o = this.location.start,
            i = this.location.source && "function" == typeof this.location.source.offset ? this.location.source.offset(o) : o,
            a = this.location.source + ":" + i.line + ":" + i.column;
        if (r) {
          var c = this.location.end,
            u = O("", i.line.toString().length, " "),
            l = r[o.line - 1],
            s = (o.line === c.line ? c.column : l.length + 1) - o.column || 1;
          t += "\n --\x3e " + a + "\n" + u + " |\n" + i.line + " | " + l + "\n" + u + " | " + O("", o.column - 1, " ") + O("", s, "^")
        } else t += "\n at " + a
      }
      return t
    }, w.buildMessage = function (e, t) {
      var n = {
        literal: function (e) {
          return '"' + o(e.text) + '"'
        },
        class: function (e) {
          var t = e.parts.map((function (e) {
            return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e)
          }));
          return "[" + (e.inverted ? "^" : "") + t.join("") + "]"
        },
        any: function () {
          return "any character"
        },
        end: function () {
          return "end of input"
        },
        other: function (e) {
          return e.description
        }
      };

      function r(e) {
        return e.charCodeAt(0).toString(16).toUpperCase()
      }

      function o(e) {
        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (function (e) {
          return "\\x0" + r(e)
        })).replace(/[\x10-\x1F\x7F-\x9F]/g, (function (e) {
          return "\\x" + r(e)
        }))
      }

      function i(e) {
        return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (function (e) {
          return "\\x0" + r(e)
        })).replace(/[\x10-\x1F\x7F-\x9F]/g, (function (e) {
          return "\\x" + r(e)
        }))
      }

      function a(e) {
        return n[e.type](e)
      }
      return "Expected " + function (e) {
        var t, n, r = e.map(a);
        if (r.sort(), r.length > 0) {
          for (t = 1, n = 1; t < r.length; t++) r[t - 1] !== r[t] && (r[n] = r[t], n++);
          r.length = n
        }
        switch (r.length) {
          case 1:
            return r[0];
          case 2:
            return r[0] + " or " + r[1];
          default:
            return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
        }
      }(e) + " but " + function (e) {
        return e ? '"' + o(e) + '"' : "end of input"
      }(t) + " found."
    };
    var x = "idle",
      P = "panning",
      S = "zooming",
      j = "auto",
      M = "none",
      k = "pan",
      T = "zoom-in",
      _ = "zoom-out",
      C = "top",
      V = "right",
      E = "bottom",
      H = "left",
      R = {};

    function D(e) {
      return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function A(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function I(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? A(Object(n), !0).forEach((function (t) {
          B(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function B(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== D(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== D(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === D(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }
    var W = x;

    function Y(e, t, n, r, o, i) {
      var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
        c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
      return F({}, I(I({}, {
        a: 1,
        c: 0,
        e: 0,
        b: 0,
        d: 1,
        f: 0
      }), {}, {
        version: 3,
        mode: W,
        focus: !1,
        pinchPointDistance: null,
        prePinchMode: null,
        viewerWidth: e,
        viewerHeight: t,
        SVGMinX: n,
        SVGMinY: r,
        SVGWidth: o,
        SVGHeight: i,
        scaleFactorMin: 0.99,
        scaleFactorMax: 4,
        startX: null,
        startY: null,
        endX: null,
        endY: null,
        miniatureOpen: !0,
        lastAction: null
      }))
    }

    function F(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return e = Object.assign({}, e, t, {
        lastAction: n
      }), Object.freeze(e)
    }

    function G(e, t, n) {
      return c(s(l(e)), {
        x: t,
        y: n
      })
    }

    function L(e) {
      var t = l(e);
      return {
        scaleFactor: t.a,
        translationX: t.e,
        translationY: t.f
      }
    }

    function X(e, t) {
      return F(e, {
        focus: t
      })
    }

    function q(e, t, n, r, o) {
      return F(e, {
        SVGMinX: t,
        SVGMinY: n,
        SVGWidth: r,
        SVGHeight: o
      })
    }

    function $(e) {
      return F(e, {
        mode: W,
        startX: null,
        startY: null,
        endX: null,
        endY: null
      })
    }

    function N(e) {
      return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function z(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function (e, t) {
          if ("object" !== N(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== N(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(o, "string"), "symbol" === N(i) ? i : String(i)), r)
      }
      var o, i
    }
    var U = function () {
      function e(t, n, r) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.originalEvent = t, this.value = n, this.SVGViewer = r
      }
      var t, n, r;
      return t = e, (n = [{
        key: "scaleFactor",
        get: function () {
          return this._cacheDecomposedValue = this._cacheDecomposedValue || L(this.value), this._cacheDecomposedValue.scaleFactor
        }
      }, {
        key: "translationX",
        get: function () {
          return this._cacheDecomposedValue = this._cacheDecomposedValue || L(this.value), this._cacheDecomposedValue.translationX
        }
      }, {
        key: "translationY",
        get: function () {
          return this._cacheDecomposedValue = this._cacheDecomposedValue || L(this.value), this._cacheDecomposedValue.translationY
        }
      }, {
        key: "preventDefault",
        value: function () {
          this.originalEvent.preventDefault()
        }
      }, {
        key: "stopPropagation",
        value: function () {
          this.originalEvent.stopPropagation()
        }
      }]) && z(t.prototype, n), r && z(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();

    function Z(e) {
      return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function K(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function J(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? K(Object(n), !0).forEach((function (t) {
          Q(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function Q(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== Z(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Z(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === Z(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function ee(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r, o, i, a, c = [],
            u = !0,
            l = !1;
          try {
            if (i = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              u = !1
            } else
              for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
          } catch (e) {
            l = !0, o = e
          } finally {
            try {
              if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
              if (l) throw o
            }
          }
          return c
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return te(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return te(e, t)
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function te(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }

    function ne(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        o = h(l(e), d(t, n));
      if (r) {
        var i = u(o, [{
          x: e.SVGMinX + r,
          y: e.SVGMinY + r
        }, {
          x: e.SVGMinX + e.SVGWidth - r,
          y: e.SVGMinY + e.SVGHeight - r
        }]),
          a = ee(i, 2),
          c = a[0],
          s = c.x,
          f = c.y,
          p = a[1],
          m = p.x,
          y = p.y,
          g = 0;
        e.viewerWidth - s < 0 ? g = e.viewerWidth - s : m < 0 && (g = -m);
        var b = 0;
        e.viewerHeight - f < 0 ? b = e.viewerHeight - f : y < 0 && (b = -y), o = h(d(g, b), o)
      }
      return F(e, J({
        mode: x
      }, o), "pan")
    }

    function re(e, t, n) {
      return F(e, {
        mode: P,
        startX: t,
        startY: n,
        endX: t,
        endY: n
      }, "pan")
    }

    function oe(e, t, n, r) {
      if (e.mode !== P) throw new Error("update pan not allowed in this mode " + e.mode);
      var o = G(e, e.endX, e.endY),
        i = G(e, t, n);
      return F(ne(e, i.x - o.x, i.y - o.y, r), {
        mode: P,
        endX: t,
        endY: n
      }, "pan")
    }

    function ie(e) {
      return F(e, {
        mode: x,
        startX: null,
        startY: null,
        endX: null,
        endY: null
      }, "pan")
    }

    function ae(e, t, n) {
      var r = 0,
        o = 0;
      return n <= 20 && (o = 2), e.viewerWidth - t <= 20 && (r = -2), e.viewerHeight - n <= 20 && (o = -2), t <= 20 && (r = 2), r /= e.d, o /= e.d, 0 === r && 0 === o ? e : ne(e, r, o)
    }

    function ce(e, t) {
      return e.x <= t.x && e.y <= t.y ? {
        x: e.x,
        y: e.y,
        width: t.x - e.x,
        height: t.y - e.y
      } : e.x >= t.x && e.y <= t.y ? {
        x: t.x,
        y: e.y,
        width: e.x - t.x,
        height: t.y - e.y
      } : e.x >= t.x && e.y >= t.y ? {
        x: t.x,
        y: t.y,
        width: e.x - t.x,
        height: e.y - t.y
      } : e.x <= t.x && e.y >= t.y ? {
        x: e.x,
        y: t.y,
        width: t.x - e.x,
        height: e.y - t.y
      } : void 0
    }

    function ue(e) {
      return (ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function le(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function se(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? le(Object(n), !0).forEach((function (t) {
          fe(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function fe(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== ue(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== ue(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === ue(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function de(e, t) {
      var n = L(e).scaleFactor,
        r = e.scaleFactorMin && n * t < e.scaleFactorMin,
        o = e.scaleFactorMax && n * t > e.scaleFactorMax;
      return r && t < 1 || o && t > 1
    }

    function he(e, t) {
      var n = t.a;
      return null != e.scaleFactorMin && (n = Math.max(n, e.scaleFactorMin)), null != e.scaleFactorMax && (n = Math.min(n, e.scaleFactorMax)), F(t, {
        a: n,
        d: n
      })
    }

    function pe(e, t, n, r) {
      if (de(e, r)) return e;
      var o = h(l(e), d(t, n), g(r, r), d(-t, -n));
      return F(e, se(se({
        mode: x
      }, o), {}, {
        startX: null,
        startY: null,
        endX: null,
        endY: null
      }), "zoom")
    }

    function me(e, t, n, r, o) {
      var i = e.viewerWidth / r,
        a = e.viewerHeight / o,
        c = Math.min(i, a),
        u = h(g(c, c), d(-t, -n));
      return de(e, c / e.d) ? F(e, {
        mode: x,
        startX: null,
        startY: null,
        endX: null,
        endY: null
      }) : F(e, se(se({
        mode: x
      }, he(e, u)), {}, {
        startX: null,
        startY: null,
        endX: null,
        endY: null
      }), "zoom")
    }

    function ye(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "left",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "top",
        r = e.viewerWidth,
        o = e.viewerHeight,
        i = e.SVGMinX,
        a = e.SVGMinY,
        c = e.SVGWidth,
        u = e.SVGHeight,
        l = r / c,
        s = o / u,
        f = Math.min(l, s),
        p = g(f, f),
        m = -i * l,
        y = -a * s;
      if (l < s) {
        var b = o - l * u;
        switch (n) {
          case "top":
            y = -a * f;
            break;
          case "center":
            y = Math.round(b / 2) - a * f;
            break;
          case "bottom":
            y = b - a * f;
            break;
          case "cover":
            p = g(s, s);
            var v = r - s * c;
            m = i + Math.round(v / 2)
        }
      } else {
        var w = r - s * c;
        switch (t) {
          case "left":
            m = -i * f;
            break;
          case "center":
            m = Math.round(w / 2) - i * f;
            break;
          case "right":
            m = w - i * f;
            break;
          case "cover":
            p = g(l, l);
            var O = o - l * u;
            y = a + Math.round(O / 2)
        }
      }
      var P = d(m, y),
        S = h(P, p);
      return de(e, f / e.d) ? F(e, {
        mode: x,
        startX: null,
        startY: null,
        endX: null,
        endY: null
      }) : F(e, se(se({
        mode: x
      }, he(e, S)), {}, {
        startX: null,
        startY: null,
        endX: null,
        endY: null
      }), "zoom")
    }

    function ge(e, t, n) {
      return F(e, {
        mode: S,
        startX: t,
        startY: n,
        endX: t,
        endY: n
      })
    }

    function be(e, t, n) {
      if (e.mode !== S) throw new Error("update selection not allowed in this mode " + e.mode);
      return F(e, {
        endX: t,
        endY: n
      })
    }

    function ve(e, t, n, r) {
      var o = e.startX,
        i = e.startY,
        a = G(e, o, i),
        c = G(e, t, n);
      if (Math.abs(o - t) > 7 && Math.abs(i - n) > 7) {
        var u = ce(a, c);
        return me(e, u.x, u.y, u.width, u.height)
      }
      var l = G(e, t, n);
      return pe(e, l.x, l.y, r)
    }

    function we(e, t, n, r, o) {
      return r + (o - r) * (e - t) / (n - t)
    }

    function Oe(e, t) {
      var n = t.getBoundingClientRect(),
        r = n.left,
        o = n.top;
      return {
        x: e.clientX - Math.round(r),
        y: e.clientY - Math.round(o)
      }
    }

    function xe(e, t, n, r, o) {
      var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        a = i || Oe(e, t),
        c = a.x,
        u = a.y,
        l = r;
      switch (n) {
        case _:
          var s = G(r, c, u);
          l = pe(r, s.x, s.y, 1 / o.scaleFactor);
          break;
        case T:
          l = ge(r, c, u);
          break;
        case j:
        case k:
          l = re(r, c, u);
          break;
        default:
          return r
      }
      return e.preventDefault(), l
    }

    function Pe(e, t, n, r, o) {
      var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        a = i || Oe(e, t),
        c = a.x,
        u = a.y,
        l = 0 === e.buttons,
        s = r;
      switch (n) {
        case T:
          r.mode === S && (s = l ? ve(r, c, u, o.scaleFactor) : be(r, c, u));
          break;
        case j:
        case k:
          r.mode === P && (s = l ? ie(r) : oe(r, c, u, o.preventPanOutside ? 20 : void 0));
          break;
        default:
          return r
      }
      return e.preventDefault(), s
    }

    function Se(e, t, n, r, o) {
      var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        a = i || Oe(e, t),
        c = a.x,
        u = a.y,
        l = r;
      switch (n) {
        case _:
          r.mode === S && (l = ve(r, c, u, 1 / o.scaleFactor));
          break;
        case T:
          r.mode === S && (l = ve(r, c, u, o.scaleFactor));
          break;
        case j:
        case k:
          r.mode === P && (l = ie(r));
          break;
        default:
          return r
      }
      return e.preventDefault(), l
    }

    function je(e, t, n, r, o) {
      var i = X(r, "mouseenter" === e.type);
      return e.preventDefault(), i
    }

    function Me(e) {
      return (Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ke(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Te(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function (e, t) {
          if ("object" !== Me(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Me(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(o, "string"), "symbol" === Me(i) ? i : String(i)), r)
      }
      var o, i
    }

    function _e(e, t) {
      return (_e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function Ce(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
        } catch (e) {
          return !1
        }
      }();
      return function () {
        var n, r = Ee(e);
        if (t) {
          var o = Ee(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else n = r.apply(this, arguments);
        return Ve(this, n)
      }
    }

    function Ve(e, t) {
      if (t && ("object" === Me(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e)
    }

    function Ee(e) {
      return (Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var He = function (e) {
      ! function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && _e(e, t)
      }(i, e);
      var t, n, r, o = Ce(i);

      function i() {
        return ke(this, i), o.apply(this, arguments)
      }
      return t = i, (n = [{
        key: "point",
        get: function () {
          if (!this._cachePoint) {
            var e = this.originalEvent,
              t = this.SVGViewer,
              n = this.value,
              r = Oe(e, t);
            this._cachePoint = G(n, r.x, r.y)
          }
          return this._cachePoint
        }
      }, {
        key: "x",
        get: function () {
          return this.point.x
        }
      }, {
        key: "y",
        get: function () {
          return this.point.y
        }
      }]) && Te(t.prototype, n), r && Te(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), i
    }(U);

    function Re(e) {
      return (Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function De(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function Ae(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? De(Object(n), !0).forEach((function (t) {
          Ie(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function Ie(e, t, n) {
      return (t = Ye(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function Be(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function We(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ye(r.key), r)
      }
    }

    function Ye(e) {
      var t = function (e, t) {
        if ("object" !== Re(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== Re(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" === Re(t) ? t : String(t)
    }

    function Fe(e, t) {
      return (Fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function Ge(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
        } catch (e) {
          return !1
        }
      }();
      return function () {
        var n, r = Xe(e);
        if (t) {
          var o = Xe(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else n = r.apply(this, arguments);
        return Le(this, n)
      }
    }

    function Le(e, t) {
      if (t && ("object" === Re(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e)
    }

    function Xe(e) {
      return (Xe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var qe = function (e) {
      ! function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Fe(e, t)
      }(i, e);
      var t, n, r, o = Ge(i);

      function i() {
        return Be(this, i), o.apply(this, arguments)
      }
      return t = i, r = [{
        key: "touchesToPoints",
        value: function (e, t, n) {
          for (var r = [], o = 0; o < e.length; o++) {
            var i = e[o],
              a = t.getBoundingClientRect(),
              c = G(n, i.clientX - Math.round(a.left), i.clientY - Math.round(a.top));
            r.push(Ae(Ae({}, c), {}, {
              identifier: i.identifier
            }))
          }
          return r
        }
      }], (n = [{
        key: "points",
        get: function () {
          return this._cachePoints || (this._cachePoints = i.touchesToPoints(this.originalEvent.touches, this.SVGViewer, this.value)), this._cachePoints
        }
      }, {
        key: "changedPoints",
        get: function () {
          return this._cacheChangedPoints || (this._cacheChangedPoints = i.touchesToPoints(this.originalEvent.changedTouches, this.SVGViewer, this.value)), this._cacheChangedPoints
        }
      }]) && We(t.prototype, n), r && We(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), i
    }(U);

    function $e(e) {
      return e.split(/[ ,]/).filter(Boolean).map(Number)
    }

    function Ne(e) {
      return (Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ze(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function Ue(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ze(Object(n), !0).forEach((function (t) {
          Ze(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function Ze(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== Ne(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Ne(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === Ne(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function Ke(e, t, n, r, o) {
      if (!([P, S].indexOf(r.mode) >= 0)) return r;
      var i = function (e, t, n) {
        return n.detectPinchGesture && Je(t) && e.touches.length < 2
      }(e, r, o) ? F(r, {
        pinchPointDistance: null
      }) : r;
      return e.touches.length > 0 ? i : et(e, t, n, i, o, Se)
    }

    function Je(e) {
      return "number" == typeof e.pinchPointDistance
    }

    function Qe(e, t) {
      return t.detectPinchGesture && e.touches.length > 1
    }

    function et(e, t, n, r, o, i) {
      var a = 0 === e.touches.length ? F(r, {
        mode: r.prePinchMode ? x : r.mode,
        prePinchMode: null
      }) : r,
        c = function (e, t) {
          var n = t.getBoundingClientRect(),
            r = n.left,
            o = n.top;
          return {
            x: e.clientX - Math.round(r),
            y: e.clientY - Math.round(o)
          }
        }(e.touches.length > 0 ? e.touches[0] : e.changedTouches[0], t);
      switch (n) {
        case _:
        case T:
        case j:
        case k:
          return e.stopPropagation(), e.preventDefault(), i(e, t, n, a, o, c);
        default:
          return a
      }
    }

    function tt(e, t, n, r, o) {
      var i = t.getBoundingClientRect(),
        a = i.left,
        c = i.top,
        u = e.touches[0].clientX - Math.round(a),
        s = e.touches[0].clientY - Math.round(c),
        f = e.touches[1].clientX - Math.round(a),
        p = e.touches[1].clientY - Math.round(c),
        m = Math.sqrt(Math.pow(f - u, 2) + Math.pow(p - s, 2)),
        y = Je(r) ? r.pinchPointDistance : m,
        b = G(r, (u + f) / 2, (s + p) / 2),
        v = m / y;
      if (de(r, v)) return r;
      e.cancelable && e.preventDefault();
      var w = h(l(r), d(b.x, b.y), g(v, v), d(-b.x, -b.y));
      return F(r, F(Ue(Ue({
        mode: S
      }, he(r, w)), {}, {
        startX: null,
        startY: null,
        endX: null,
        endY: null,
        prePinchMode: r.prePinchMode ? r.prePinchMode : r.mode,
        pinchPointDistance: m
      })))
    }

    function nt(e) {
      return F(e, {
        miniatureOpen: !0
      })
    }

    function rt(e) {
      return F(e, {
        miniatureOpen: !1
      })
    }
    var ot = function () {
      return navigator.userAgent.toLowerCase()
    },
      it = function (e) {
        return function (e) {
          return ["zoom-in", "zoom-out", "grab", "grabbing"].indexOf(e) > -1
        }(e) ? ot().indexOf("firefox") > -1 ? "-moz-".concat(e) : ot().indexOf("webkit") > -1 ? "-webkit-".concat(e) : void 0 : e
      };

    function at(e) {
      return (at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ct() {
      return (ct = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }

    function ut(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function (e, t) {
          if ("object" !== at(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== at(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(o, "string"), "symbol" === at(i) ? i : String(i)), r)
      }
      var o, i
    }

    function lt(e, t) {
      return (lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function st(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
        } catch (e) {
          return !1
        }
      }();
      return function () {
        var n, r = dt(e);
        if (t) {
          var o = dt(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else n = r.apply(this, arguments);
        return ft(this, n)
      }
    }

    function ft(e, t) {
      if (t && ("object" === at(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e)
    }

    function dt(e) {
      return (dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var ht = 1;

    function pt(e) {
      var t = function (t) {
        ! function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && lt(e, t)
        }(c, t);
        var n, r, i, a = st(c);

        function c(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (t = a.call(this, e)).state = {
            uid: "uid".concat(ht++)
          }, t
        }
        return n = c, (r = [{
          key: "render",
          value: function () {
            return o.a.createElement(e, ct({
              _uid: this.state.uid
            }, this.props))
          }
        }]) && ut(n.prototype, r), i && ut(n, i), Object.defineProperty(n, "prototype", {
          writable: !1
        }), c
      }(o.a.Component);
      return t.displayName = "RandomUID(".concat(function (e) {
        return e.displayName || e.name || "Component"
      }(e), ")"), t
    }
    var mt = "react-svg-pan-zoom_border_gradient";

    function yt(e) {
      var t, n = e.direction,
        r = e.width,
        i = e.height,
        a = e._uid;
      switch (n) {
        case C:
          t = "translate(".concat(r, ", 0) rotate(90)");
          break;
        case V:
          t = "translate(".concat(r, ", ").concat(i, ") rotate(180)");
          break;
        case E:
          t = "translate(0, ".concat(i, ") rotate(270)");
          break;
        case H:
        default:
          t = " "
      }
      var c = "".concat(mt, "_gradient_").concat(a),
        u = "".concat(mt, "_mask_").concat(a);
      return o.a.createElement("g", null, o.a.createElement("defs", null, o.a.createElement("linearGradient", {
        id: c,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        spreadMethod: "pad"
      }, o.a.createElement("stop", {
        offset: "0%",
        stopColor: "#fff",
        stopOpacity: "0.8"
      }), o.a.createElement("stop", {
        offset: "100%",
        stopColor: "#000",
        stopOpacity: "0.5"
      })), o.a.createElement("mask", {
        id: u,
        x: "0",
        y: "0",
        width: "20",
        height: Math.max(r, i)
      }, o.a.createElement("rect", {
        x: "0",
        y: "0",
        width: "20",
        height: Math.max(r, i),
        style: {
          stroke: "none",
          fill: "url(#".concat(c, ")")
        }
      }))), o.a.createElement("rect", {
        x: "0",
        y: "0",
        width: "20",
        height: Math.max(r, i),
        style: {
          stroke: "none",
          fill: "#000",
          mask: "url(#".concat(u, ")")
        },
        transform: t
      }))
    }
    yt.propTypes = {
      direction: a.a.oneOf([C, V, E, H]).isRequired,
      width: a.a.number.isRequired,
      height: a.a.number.isRequired
    };
    var gt = pt(yt);

    function bt(e) {
      var t = e.startX,
        n = e.startY,
        r = e.endX,
        i = e.endY;
      if (!(t && n && r && i)) return null;
      var a = ce({
        x: t,
        y: n
      }, {
        x: r,
        y: i
      });
      return o.a.createElement("rect", {
        stroke: "#969FFF",
        strokeOpacity: .7,
        fill: "#F3F4FF",
        fillOpacity: .7,
        x: a.x,
        y: a.y,
        width: a.width,
        height: a.height,
        style: {
          pointerEvents: "none"
        }
      })
    }

    function vt() {
      return o.a.createElement("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor"
      }, o.a.createElement("path", {
        d: "M10.07,14.27C10.57,14.03 11.16,14.25 11.4,14.75L13.7,19.74L15.5,18.89L13.19,13.91C12.95,13.41 13.17,12.81 13.67,12.58L13.95,12.5L16.25,12.05L8,5.12V15.9L9.82,14.43L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"
      }))
    }

    function wt() {
      return o.a.createElement("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor"
      }, o.a.createElement("path", {
        d: "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"
      }))
    }

    function Ot() {
      return o.a.createElement("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor"
      }, o.a.createElement("g", null, o.a.createElement("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      }), o.a.createElement("path", {
        d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
      })))
    }

    function xt() {
      return o.a.createElement("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor"
      }, o.a.createElement("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
      }))
    }

    function Pt() {
      return o.a.createElement("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor"
      }, o.a.createElement("path", {
        d: "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"
      }))
    }

    function St(e) {
      return (St = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function jt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function (e, t) {
          if ("object" !== St(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== St(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(o, "string"), "symbol" === St(i) ? i : String(i)), r)
      }
      var o, i
    }

    function Mt(e, t) {
      return (Mt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function kt(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
        } catch (e) {
          return !1
        }
      }();
      return function () {
        var n, r = _t(e);
        if (t) {
          var o = _t(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else n = r.apply(this, arguments);
        return Tt(this, n)
      }
    }

    function Tt(e, t) {
      if (t && ("object" === St(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e)
    }

    function _t(e) {
      return (_t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    bt.propTypes = {
      startX: a.a.number,
      startY: a.a.number,
      endX: a.a.number,
      endY: a.a.number
    };
    var Ct = function (e) {
      ! function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Mt(e, t)
      }(a, e);
      var t, n, r, i = kt(a);

      function a(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), (t = i.call(this, e)).state = {
          hover: !1
        }, t
      }
      return t = a, (n = [{
        key: "change",
        value: function (e) {
          switch (e.preventDefault(), e.stopPropagation(), e.type) {
            case "mouseenter":
            case "touchstart":
              this.setState({
                hover: !0
              });
              break;
            case "mouseleave":
            case "touchend":
            case "touchcancel":
              this.setState({
                hover: !1
              })
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this,
            t = {
              display: "block",
              width: "24px",
              height: "24px",
              margin: [C, E].indexOf(this.props.toolbarPosition) >= 0 ? "2px 1px" : "1px 2px",
              color: this.props.active || this.state.hover ? this.props.activeColor : "#FFF",
              transition: "color 200ms ease",
              background: "none",
              padding: "0px",
              border: "0px",
              outline: "0px",
              cursor: "pointer"
            };
          return o.a.createElement("button", {
            onMouseEnter: function (t) {
              return e.change(t)
            },
            onMouseLeave: function (t) {
              return e.change(t)
            },
            onTouchStart: function (t) {
              e.change(t), e.props.onClick(t)
            },
            onTouchEnd: function (t) {
              return e.change(t)
            },
            onTouchCancel: function (t) {
              return e.change(t)
            },
            onClick: this.props.onClick,
            style: t,
            title: this.props.title,
            name: this.props.name,
            type: "button"
          }, this.props.children)
        }
      }]) && jt(t.prototype, n), r && jt(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(o.a.Component);

    function Vt(e) {
      var t = e.tool,
        n = e.value,
        r = e.onChangeValue,
        i = e.onChangeTool,
        a = e.activeToolColor,
        c = e.position,
        u = e.SVGAlignX,
        l = e.SVGAlignY,
        s = function (e, t) {
          i(t), e.stopPropagation(), e.preventDefault()
        },
        f = [C, E].indexOf(c) >= 0,
        d = {
          position: "absolute",
          transform: [C, E].indexOf(c) >= 0 ? "translate(-50%, 0px)" : "none",
          top: [H, V, C].indexOf(c) >= 0 ? "5px" : "unset",
          left: [C, E].indexOf(c) >= 0 ? "50%" : H === c ? "5px" : "unset",
          right: [V].indexOf(c) >= 0 ? "5px" : "unset",
          bottom: [E].indexOf(c) >= 0 ? "5px" : "unset",
          backgroundColor: "rgba(19, 20, 22, 0.90)",
          borderRadius: "2px",
          display: "flex",
          flexDirection: f ? "row" : "column",
          padding: f ? "1px 2px" : "2px 1px"
        };
      return o.a.createElement("div", {
        style: d,
        role: "toolbar"
      }, o.a.createElement(Ct, {
        toolbarPosition: c,
        active: t === M,
        activeColor: a,
        name: "unselect-tools",
        title: "Selection",
        onClick: function (e) {
          return s(e, M)
        }
      }, o.a.createElement(vt, null)), o.a.createElement(Ct, {
        toolbarPosition: c,
        active: t === k,
        activeColor: a,
        name: "select-tool-pan",
        title: "Pan",
        onClick: function (e) {
          return s(e, k)
        }
      }, o.a.createElement(wt, null)), o.a.createElement(Ct, {
        toolbarPosition: c,
        active: t === T,
        activeColor: a,
        name: "select-tool-zoom-in",
        title: "Zoom in",
        onClick: function (e) {
          return s(e, T)
        }
      }, o.a.createElement(Ot, null)), o.a.createElement(Ct, {
        toolbarPosition: c,
        active: t === _,
        activeColor: a,
        name: "select-tool-zoom-out",
        title: "Zoom out",
        onClick: function (e) {
          return s(e, _)
        }
      }, o.a.createElement(xt, null)), o.a.createElement(Ct, {
        toolbarPosition: c,
        active: !1,
        activeColor: a,
        name: "fit-to-viewer",
        title: "Fit to viewer",
        onClick: function (e) {
          return function (e) {
            r(ye(n, u, l)), e.stopPropagation(), e.preventDefault()
          }(e)
        }
      }, o.a.createElement(Pt, null)))
    }

    function Et(e) {
      var t = e.open,
        n = 0;
      switch (e.position) {
        case H:
          n = t ? "rotate(225, 12, 13)" : "rotate(45, 12, 13)";
          break;
        case V:
          n = n = t ? "rotate(135, 12, 13)" : "rotate(-45, 12, 13)"
      }
      return o.a.createElement("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor"
      }, o.a.createElement("g", {
        transform: n
      }, o.a.createElement("path", {
        fill: "#000000",
        d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
      })))
    }

    function Ht(e) {
      return (Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Rt(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== Ht(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Ht(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === Ht(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function Dt(e) {
      var t, n = e.value,
        r = e.onChangeValue,
        i = e.position,
        a = (Rt(t = {
          width: "24px",
          height: "24px",
          display: "block",
          position: "absolute",
          bottom: 0
        }, i === H ? "left" : "right", "0px"), Rt(t, "background", "rgba(19, 20, 22, 0.901961)"), Rt(t, "border", 0), Rt(t, "padding", 0), Rt(t, "outline", 0), Rt(t, "color", "#fff"), t),
        c = n.miniatureOpen ? rt : nt;
      return o.a.createElement("button", {
        type: "button",
        style: a,
        onClick: function () {
          return r(c(n))
        }
      }, o.a.createElement(Et, {
        open: n.miniatureOpen,
        position: i
      }))
    }
    Ct.propTypes = {
      title: a.a.string.isRequired,
      name: a.a.string.isRequired,
      toolbarPosition: a.a.string.isRequired,
      activeColor: a.a.string.isRequired,
      onClick: a.a.func.isRequired,
      active: a.a.bool.isRequired
    }, Vt.propTypes = {
      tool: a.a.string.isRequired,
      onChangeTool: a.a.func.isRequired,
      value: a.a.object.isRequired,
      onChangeValue: a.a.func.isRequired,
      position: a.a.oneOf([C, V, E, H]),
      SVGAlignX: a.a.oneOf(["center", "left", "right"]),
      SVGAlignY: a.a.oneOf(["center", "top", "bottom"]),
      activeToolColor: a.a.string
    }, Vt.defaultProps = {
      position: V,
      SVGAlignX: "left",
      SVGAlignY: "top",
      activeToolColor: "#1CA6FC"
    }, Et.propTypes = {
      open: a.a.bool.isRequired,
      position: a.a.oneOf([V, H]).isRequired
    }, Dt.propTypes = {
      value: a.a.object.isRequired,
      onChangeValue: a.a.func.isRequired,
      position: a.a.oneOf([V, H]).isRequired
    };

    function At(e) {
      var t = e.SVGMinX,
        n = e.SVGMinY,
        r = e.SVGWidth,
        i = e.SVGHeight,
        a = e.x1,
        c = e.y1,
        u = e.x2,
        l = e.y2,
        s = (e.zoomToFit, e._uid),
        f = "".concat("react-svg-pan-zoom_miniature", "_mask_").concat(s);
      return o.a.createElement("g", null, o.a.createElement("defs", null, o.a.createElement("mask", {
        id: f
      }, o.a.createElement("rect", {
        x: t,
        y: n,
        width: r,
        height: i,
        fill: "#ffffff"
      }), o.a.createElement("rect", {
        x: a,
        y: c,
        width: u - a,
        height: l - c
      }))), o.a.createElement("rect", {
        x: t,
        y: n,
        width: r,
        height: i,
        style: {
          stroke: "none",
          fill: "#000",
          mask: "url(#".concat(f, ")"),
          opacity: .4
        }
      }))
    }
    At.propTypes = {
      SVGWidth: a.a.number.isRequired,
      SVGHeight: a.a.number.isRequired,
      SVGMinX: a.a.number.isRequired,
      SVGMinY: a.a.number.isRequired,
      x1: a.a.number.isRequired,
      y1: a.a.number.isRequired,
      x2: a.a.number.isRequired,
      y2: a.a.number.isRequired,
      zoomToFit: a.a.number.isRequired
    };
    var It = pt(At);

    function Bt(e) {
      return (Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Wt(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== Bt(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Bt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === Bt(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function Yt(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r, o, i, a, c = [],
            u = !0,
            l = !1;
          try {
            if (i = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              u = !1
            } else
              for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
          } catch (e) {
            l = !0, o = e
          } finally {
            try {
              if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
              if (l) throw o
            }
          }
          return c
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Ft(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ft(e, t)
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ft(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }

    function Gt(e) {
      var t, n, r, i = e.value,
        a = e.onChangeValue,
        c = e.children,
        l = e.position,
        f = e.background,
        d = e.SVGBackground,
        h = e.width,
        p = e.height,
        m = i.SVGMinX,
        y = i.SVGMinY,
        g = i.SVGWidth,
        b = i.SVGHeight,
        v = i.viewerWidth,
        w = i.viewerHeight,
        O = b / g,
        x = O >= 1 ? p / b : h / g,
        P = Yt(u(s(i), [{
          x: 0,
          y: 0
        }, {
          x: v,
          y: w
        }]), 2),
        S = P[0],
        j = S.x,
        M = S.y,
        k = P[1],
        T = k.x,
        _ = k.y;
      i.miniatureOpen ? (n = h, r = p) : (n = 24, r = 24);
      var C = (Wt(t = {
        position: "absolute",
        overflow: "hidden",
        outline: "1px solid rgba(19, 20, 22, 0.90)",
        transition: "width 200ms ease, height 200ms ease, bottom 200ms ease",
        width: n + "px",
        height: r + "px",
        bottom: "6px"
      }, l === H ? "left" : "right", "6px"), Wt(t, "background", f), t),
        V = O >= 1 ? "translate(".concat((h - g * x) / 2 - m * x, ", ").concat(-y * x, ")") : "translate(".concat(-m * x, ", ").concat((p - b * x) / 2 - y * x, ")");
      return o.a.createElement("div", {
        role: "navigation",
        style: C
      }, o.a.createElement("svg", {
        width: h,
        height: p,
        style: {
          pointerEvents: "none"
        }
      }, o.a.createElement("g", {
        transform: V
      }, o.a.createElement("g", {
        transform: "scale(".concat(x, ", ").concat(x, ")")
      }, o.a.createElement("rect", {
        fill: d,
        x: m,
        y: y,
        width: g,
        height: b
      }), c, o.a.createElement(It, {
        SVGWidth: g,
        SVGHeight: b,
        SVGMinX: m,
        SVGMinY: y,
        x1: j,
        y1: M,
        x2: T,
        y2: _,
        zoomToFit: x
      })))), o.a.createElement(Dt, {
        value: i,
        onChangeValue: a,
        position: l
      }))
    }
    Gt.propTypes = {
      value: a.a.object.isRequired,
      onChangeValue: a.a.func.isRequired,
      SVGBackground: a.a.string.isRequired,
      position: a.a.oneOf([V, H]),
      background: a.a.string.isRequired,
      width: a.a.number.isRequired,
      height: a.a.number.isRequired
    }, Gt.defaultProps = {
      position: H,
      background: "#616264",
      width: 100,
      height: 80
    };

    function Lt(e) {
      return (Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Xt() {
      return (Xt = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }

    function qt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function $t(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? qt(Object(n), !0).forEach((function (t) {
          Nt(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function Nt(e, t, n) {
      return (t = Kt(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function zt(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r, o, i, a, c = [],
            u = !0,
            l = !1;
          try {
            if (i = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              u = !1
            } else
              for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
          } catch (e) {
            l = !0, o = e
          } finally {
            try {
              if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
              if (l) throw o
            }
          }
          return c
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Ut(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ut(e, t)
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ut(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }

    function Zt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Kt(r.key), r)
      }
    }

    function Kt(e) {
      var t = function (e, t) {
        if ("object" !== Lt(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== Lt(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" === Lt(t) ? t : String(t)
    }

    function Jt(e, t) {
      return (Jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function Qt(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
        } catch (e) {
          return !1
        }
      }();
      return function () {
        var n, r = nn(e);
        if (t) {
          var o = nn(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else n = r.apply(this, arguments);
        return en(this, n)
      }
    }

    function en(e, t) {
      if (t && ("object" === Lt(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return tn(e)
    }

    function tn(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function nn(e) {
      return (nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var rn = function (e) {
      ! function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Jt(e, t)
      }(a, e);
      var t, n, r, i = Qt(a);

      function a(e, t) {
        var n;
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a);
        var r, o = e.width,
          c = e.height,
          u = e.scaleFactorMin,
          l = e.scaleFactorMax,
          s = e.children,
          f = s.props.viewBox;
        if (f) {
          var d = zt($e(f), 4);
          r = Y(o, c, d[0], d[1], d[2], d[3], u, l)
        } else {
          var h = s.props;
          r = Y(o, c, 0, 0, h.width, h.height, u, l)
        }
        return (n = i.call(this, e, t)).ViewerDOM = null, n.state = {
          pointerX: null,
          pointerY: null,
          defaultValue: r
        }, n.autoPanLoop = n.autoPanLoop.bind(tn(n)), n.onWheel = n.onWheel.bind(tn(n)), n
      }
      return t = a, (n = [{
        key: "componentDidUpdate",
        value: function (e) {
          var t = this.getValue(),
            n = this.props,
            r = t,
            o = !1,
            i = n.children.props.viewBox;
          if (i) {
            var a = zt($e(i), 4),
              c = a[0],
              u = a[1],
              l = a[2],
              s = a[3];
            t.SVGMinX === c && t.SVGMinY === u && t.SVGWidth === l && t.SVGHeight === s || (r = q(r, c, u, l, s), o = !0)
          } else {
            var f = n.children.props,
              d = f.width,
              h = f.height;
            t.SVGWidth === d && t.SVGHeight === h || (r = q(r, 0, 0, d, h), o = !0)
          }
          e.width === n.width && e.height === n.height || (r = function (e, t, n) {
            return F(e, {
              viewerWidth: t,
              viewerHeight: n
            })
          }(r, n.width, n.height), o = !0), e.scaleFactorMin === n.scaleFactorMin && e.scaleFactorMax === n.scaleFactorMax || (r = function (e, t, n) {
            return F(e, {
              scaleFactorMin: t,
              scaleFactorMax: n
            })
          }(r, n.scaleFactorMin, n.scaleFactorMax), o = !0), o && this.setValue(r)
        }
      }, {
        key: "componentDidMount",
        value: function () {
          this.autoPanIsRunning = !0, requestAnimationFrame(this.autoPanLoop), this.ViewerDOM.addEventListener("wheel", this.onWheel, !1)
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.autoPanIsRunning = !1, this.ViewerDOM.removeEventListener("wheel", this.onWheel)
        }
      }, {
        key: "getValue",
        value: function () {
          return null !== (e = this.props.value) && "object" === D(e) && e.hasOwnProperty("version") && 3 === e.version ? this.props.value : this.state.defaultValue;
          var e
        }
      }, {
        key: "getTool",
        value: function () {
          return this.props.tool ? this.props.tool : M
        }
      }, {
        key: "setValue",
        value: function (e) {
          var t = this.props,
            n = t.onChangeValue,
            r = t.onZoom,
            o = t.onPan;
          n && n(e), e.lastAction && (r && "zoom" === e.lastAction && r(e), o && "pan" === e.lastAction && o(e))
        }
      }, {
        key: "pan",
        value: function (e, t) {
          var n = ne(this.getValue(), e, t);
          this.setValue(n)
        }
      }, {
        key: "zoom",
        value: function (e, t, n) {
          var r = pe(this.getValue(), e, t, n);
          this.setValue(r)
        }
      }, {
        key: "fitSelection",
        value: function (e, t, n, r) {
          var o = me(this.getValue(), e, t, n, r);
          this.setValue(o)
        }
      }, {
        key: "fitToViewer",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = ye(this.getValue(), e, t);
          this.setValue(n)
        }
      }, {
        key: "zoomOnViewerCenter",
        value: function (e) {
          var t = function (e, t) {
            var n = G(e, e.viewerWidth / 2, e.viewerHeight / 2);
            return pe(e, n.x, n.y, t)
          }(this.getValue(), e);
          this.setValue(t)
        }
      }, {
        key: "setPointOnViewerCenter",
        value: function (e, t, n) {
          var r = function (e, t, n, r) {
            var o = h(d(e.viewerWidth / 2 - t, e.viewerHeight / 2 - n), d(t, n), g(r, r), d(-t, -n));
            return F(e, I({
              mode: x
            }, o))
          }(this.getValue(), e, t, n);
          this.setValue(r)
        }
      }, {
        key: "reset",
        value: function () {
          var e = F(this.getValue(), I({
            mode: x
          }, {
            a: 1,
            c: 0,
            e: 0,
            b: 0,
            d: 1,
            f: 0
          }));
          this.setValue(e)
        }
      }, {
        key: "openMiniature",
        value: function () {
          var e = nt(this.getValue());
          this.setValue(e)
        }
      }, {
        key: "closeMiniature",
        value: function () {
          var e = rt(this.getValue());
          this.setValue(e)
        }
      }, {
        key: "handleViewerEvent",
        value: function (e) {
          var t = this.props,
            n = this.ViewerDOM;
          if ([M, j].indexOf(this.getTool()) >= 0 && e.target !== n) {
            var r = {
              click: t.onClick,
              dblclick: t.onDoubleClick,
              mousemove: t.onMouseMove,
              mouseup: t.onMouseUp,
              mousedown: t.onMouseDown,
              touchstart: t.onTouchStart,
              touchmove: t.onTouchMove,
              touchend: t.onTouchEnd,
              touchcancel: t.onTouchCancel
            }[e.type];
            r && r(function (e, t, n) {
              var r = e.type;
              switch (r) {
                case "mousemove":
                case "mouseup":
                case "mousedown":
                case "click":
                case "dblclick":
                  return new He(e, t, n);
                case "touchstart":
                case "touchmove":
                case "touchend":
                case "touchcancel":
                  return new qe(e, t, n);
                default:
                  throw new Error("".concat(r, " not supported"))
              }
            }(e, t.value, n))
          }
        }
      }, {
        key: "autoPanLoop",
        value: function () {
          var e = {
            x: this.state.pointerX,
            y: this.state.pointerY
          },
            t = function (e, t, n, r, o) {
              var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                a = i.x,
                c = i.y;
              return [M, j].indexOf(n) >= 0 && o.detectAutoPan && r.focus ? ae(r, a, c) : r
            }(null, this.ViewerDOM, this.getTool(), this.getValue(), this.props, e);
          this.getValue() !== t && this.setValue(t), this.autoPanIsRunning && requestAnimationFrame(this.autoPanLoop)
        }
      }, {
        key: "onWheel",
        value: function (e) {
          var t = function (e, t, n, r, o) {
            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              a = i || Oe(e, t),
              c = a.x,
              u = a.y;
            if (!o.detectWheel) return r;
            var l = Math.max(-1, Math.min(1, e.deltaY)),
              s = we(l, -1, 1, o.scaleFactorOnWheel, 1 / o.scaleFactorOnWheel),
              f = G(r, c, u),
              d = pe(r, f.x, f.y, s);
            return e.preventDefault(), d
          }(e, this.ViewerDOM, this.getTool(), this.getValue(), this.props);
          this.getValue() !== t && this.setValue(t)
        }
      }, {
        key: "render",
        value: function () {
          var e, t = this,
            n = this.props,
            r = this.state,
            i = r.pointerX,
            a = r.pointerY,
            c = this.getTool(),
            u = this.getValue(),
            l = n.customToolbar,
            s = void 0 === l ? Vt : l,
            f = n.customMiniature,
            d = void 0 === f ? Gt : f,
            h = c === j && u.mode === P && u.startX !== u.endX && u.startY !== u.endY;
          c === k && (e = it(u.mode === P ? "grabbing" : "grab")), c === T && (e = it("zoom-in")), c === _ && (e = it("zoom-out")), h && (e = it("grabbing"));
          var p = [k, T, _].indexOf(c) >= 0;
          p = p || h;
          var m, y = {
            display: "block",
            cursor: e,
            touchAction: this.props.detectPinchGesture || -1 !== [k, j].indexOf(this.getTool()) ? "none" : void 0
          };
          return o.a.createElement("div", {
            style: $t({
              position: "relative",
              width: u.viewerWidth,
              height: u.viewerHeight
            }, n.style),
            className: this.props.className
          }, o.a.createElement("svg", {
            ref: function (e) {
              return t.ViewerDOM = e
            },
            width: u.viewerWidth,
            height: u.viewerHeight,
            style: y,
            onMouseDown: function (e) {
              var n = xe(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n), t.handleViewerEvent(e)
            },
            onMouseMove: function (e) {
              var n = t.ViewerDOM.getBoundingClientRect(),
                r = n.left,
                o = n.top,
                i = e.clientX - Math.round(r),
                a = e.clientY - Math.round(o),
                c = Pe(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props, {
                  x: i,
                  y: a
                });
              t.getValue() !== c && t.setValue(c), t.setState({
                pointerX: i,
                pointerY: a
              }), t.handleViewerEvent(e)
            },
            onMouseUp: function (e) {
              var n = Se(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n), t.handleViewerEvent(e)
            },
            onClick: function (e) {
              t.handleViewerEvent(e)
            },
            onDoubleClick: function (e) {
              var n = function (e, t, n, r, o) {
                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                  a = i || Oe(e, t),
                  c = a.x,
                  u = a.y,
                  l = r;
                if (n === j && !o.disableDoubleClickZoomWithToolAuto) {
                  var s = o.modifierKeys,
                    f = void 0 === s ? [] : s,
                    d = G(r, c, u),
                    h = function (t, n) {
                      return t || e.getModifierState(n)
                    },
                    p = f.reduce(h, !1),
                    m = p ? 1 / o.scaleFactor : o.scaleFactor;
                  l = pe(r, d.x, d.y, m)
                }
                return e.preventDefault(), l
              }(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n), t.handleViewerEvent(e)
            },
            onMouseEnter: function (e) {
              if (!("ontouchstart" in window) && !navigator.maxTouchPoints) {
                var n = je(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
                t.getValue() !== n && t.setValue(n)
              }
            },
            onMouseLeave: function (e) {
              var n = je(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n)
            },
            onTouchStart: function (e) {
              var n = function (e, t, n, r, o) {
                if (Qe(e, o)) return tt(e, t, 0, r);
                if (1 !== e.touches.length) {
                  if ([P, S].indexOf(r.mode) >= 0) return $(r);
                  if ([x].indexOf(r.mode) >= 0) return r
                }
                return et(e, t, n, r, o, xe)
              }(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n), t.handleViewerEvent(e)
            },
            onTouchMove: function (e) {
              var n = function (e, t, n, r, o) {
                return Qe(e, o) ? tt(e, t, 0, r) : [P, S].indexOf(r.mode) >= 0 ? et(e, t, n, r, o, Pe) : r
              }(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n), t.handleViewerEvent(e)
            },
            onTouchEnd: function (e) {
              var n = Ke(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n), t.handleViewerEvent(e)
            },
            onTouchCancel: function (e) {
              var n = function (e, t, n, r, o) {
                return e.stopPropagation(), e.preventDefault(), $(r)
              }(e, t.ViewerDOM, t.getTool(), t.getValue(), t.props);
              t.getValue() !== n && t.setValue(n), t.handleViewerEvent(e)
            }
          }, o.a.createElement("rect", {
            fill: n.background,
            x: 0,
            y: 0,
            width: u.viewerWidth,
            height: u.viewerHeight,
            style: {
              pointerEvents: "none"
            }
          }), o.a.createElement("g", {
            transform: (m = u, v(m)),
            style: p ? {
              pointerEvents: "none"
            } : {}
          }, o.a.createElement("rect", {
            fill: this.props.SVGBackground,
            style: this.props.SVGStyle,
            x: u.SVGMinX || 0,
            y: u.SVGMinY || 0,
            width: u.SVGWidth,
            height: u.SVGHeight
          }), o.a.createElement("g", null, n.children.props.children)), [M, j].indexOf(c) >= 0 && n.detectAutoPan && u.focus ? o.a.createElement("g", {
            style: {
              pointerEvents: "none"
            }
          }, a <= 20 ? o.a.createElement(gt, {
            direction: C,
            width: u.viewerWidth,
            height: u.viewerHeight
          }) : null, u.viewerWidth - i <= 20 ? o.a.createElement(gt, {
            direction: V,
            width: u.viewerWidth,
            height: u.viewerHeight
          }) : null, u.viewerHeight - a <= 20 ? o.a.createElement(gt, {
            direction: E,
            width: u.viewerWidth,
            height: u.viewerHeight
          }) : null, u.focus && i <= 20 ? o.a.createElement(gt, {
            direction: H,
            width: u.viewerWidth,
            height: u.viewerHeight
          }) : null) : null, u.mode !== S ? null : o.a.createElement(bt, {
            startX: u.startX,
            startY: u.startY,
            endX: u.endX,
            endY: u.endY
          })), "none" === n.toolbarProps.position ? null : o.a.createElement(s, Xt({}, this.props.toolbarProps, {
            value: u,
            onChangeValue: function (e) {
              return t.setValue(e)
            },
            tool: c,
            onChangeTool: function (e) {
              return t.props.onChangeTool(e)
            }
          })), "none" === n.miniatureProps.position ? null : o.a.createElement(d, Xt({}, this.props.miniatureProps, {
            value: u,
            onChangeValue: function (e) {
              return t.setValue(e)
            },
            SVGBackground: this.props.SVGBackground
          }), n.children.props.children))
        }
      }]) && Zt(t.prototype, n), r && Zt(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(o.a.Component);

    function on(e) {
      return (on = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }
    rn.propTypes = {
      width: a.a.number.isRequired,
      height: a.a.number.isRequired,
      value: a.a.oneOfType([a.a.object, a.a.shape({
        version: a.a.oneOf([2]).isRequired,
        mode: a.a.oneOf([x, P, S]).isRequired,
        focus: a.a.bool.isRequired,
        a: a.a.number.isRequired,
        b: a.a.number.isRequired,
        c: a.a.number.isRequired,
        d: a.a.number.isRequired,
        e: a.a.number.isRequired,
        f: a.a.number.isRequired,
        viewerWidth: a.a.number.isRequired,
        viewerHeight: a.a.number.isRequired,
        SVGMinX: a.a.number.isRequired,
        SVGMinY: a.a.number.isRequired,
        SVGWidth: a.a.number.isRequired,
        SVGHeight: a.a.number.isRequired,
        startX: a.a.number,
        startY: a.a.number,
        endX: a.a.number,
        endY: a.a.number,
        miniatureOpen: a.a.bool.isRequired
      })]).isRequired,
      onChangeValue: a.a.func.isRequired,
      tool: a.a.oneOf([j, M, k, T, _]).isRequired,
      onChangeTool: a.a.func.isRequired,
      background: a.a.string,
      SVGBackground: a.a.string,
      SVGStyle: a.a.object,
      style: a.a.object,
      className: a.a.string,
      detectWheel: a.a.bool,
      detectAutoPan: a.a.bool,
      detectPinchGesture: a.a.bool,
      onZoom: a.a.func,
      onPan: a.a.func,
      onClick: a.a.func,
      onDoubleClick: a.a.func,
      onMouseUp: a.a.func,
      onMouseMove: a.a.func,
      onMouseDown: a.a.func,
      preventPanOutside: a.a.bool,
      scaleFactor: a.a.number,
      scaleFactorOnWheel: a.a.number,
      scaleFactorMax: a.a.number,
      scaleFactorMin: a.a.number,
      modifierKeys: a.a.array,
      disableDoubleClickZoomWithToolAuto: a.a.bool,
      customMiniature: a.a.oneOfType([a.a.element, a.a.func]),
      miniatureProps: a.a.shape({
        position: a.a.oneOf(["none", V, H]),
        background: a.a.string,
        width: a.a.number,
        height: a.a.number
      }),
      customToolbar: a.a.oneOfType([a.a.element, a.a.func]),
      toolbarProps: a.a.shape({
        position: a.a.oneOf(["none", C, V, E, H]),
        SVGAlignX: a.a.oneOf(["center", "left", "right"]),
        SVGAlignY: a.a.oneOf(["center", "top", "bottom"]),
        activeToolColor: a.a.string
      }),
      children: function (e, t, n) {
        var r = e[t],
          i = ["svg"];
        return 1 !== o.a.Children.count(r) || -1 === i.indexOf(r.type) ? new Error("`" + n + "` should have a single child of the following types:  `" + i.join("`, `") + "`.") : r.props.hasOwnProperty("width") && r.props.hasOwnProperty("height") || r.props.hasOwnProperty("viewBox") ? void 0 : new Error("SVG should have props `width` and `height` or `viewBox`")
      }
    }, rn.defaultProps = {
      style: {},
      background: "#616264",
      SVGBackground: "#fff",
      SVGStyle: {},
      detectWheel: !0,
      detectAutoPan: !0,
      detectPinchGesture: !0,
      modifierKeys: ["Alt", "Shift", "Control"],
      preventPanOutside: !0,
      scaleFactor: 1.1,
      scaleFactorOnWheel: 1.06,
      disableZoomWithToolAuto: !1,
      onZoom: null,
      onPan: null,
      toolbarProps: {},
      miniatureProps: {}
    };
    var an = ["width", "height", "onChangeTool", "onChangeValue"];

    function cn() {
      return (cn = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }

    function un(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }

    function ln(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function (e, t) {
          if ("object" !== on(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== on(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(o, "string"), "symbol" === on(i) ? i : String(i)), r)
      }
      var o, i
    }

    function sn(e, t) {
      return (sn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function fn(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
        } catch (e) {
          return !1
        }
      }();
      return function () {
        var n, r = pn(e);
        if (t) {
          var o = pn(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else n = r.apply(this, arguments);
        return dn(this, n)
      }
    }

    function dn(e, t) {
      if (t && ("object" === on(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return hn(e)
    }

    function hn(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function pn(e) {
      return (pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    } (function (e) {
      ! function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && sn(e, t)
      }(a, e);
      var t, n, r, i = fn(a);

      function a(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), (t = i.call(this, e)).state = {
          value: e.defaultValue || {},
          tool: e.defaultTool || M
        }, t.Viewer = null, t.changeTool = t.changeTool.bind(hn(t)), t.changeValue = t.changeValue.bind(hn(t)), t
      }
      return t = a, (n = [{
        key: "changeTool",
        value: function (e) {
          this.setState({
            tool: e
          })
        }
      }, {
        key: "changeValue",
        value: function (e) {
          this.setState({
            value: e
          })
        }
      }, {
        key: "pan",
        value: function (e, t) {
          this.Viewer.pan(e, t)
        }
      }, {
        key: "zoom",
        value: function (e, t, n) {
          this.Viewer.zoom(e, t, n)
        }
      }, {
        key: "fitSelection",
        value: function (e, t, n, r) {
          this.Viewer.fitSelection(e, t, n, r)
        }
      }, {
        key: "fitToViewer",
        value: function (e, t) {
          this.Viewer.fitToViewer(e, t)
        }
      }, {
        key: "zoomOnViewerCenter",
        value: function (e) {
          this.Viewer.zoomOnViewerCenter(e)
        }
      }, {
        key: "setPointOnViewerCenter",
        value: function (e, t, n) {
          this.Viewer.setPointOnViewerCenter(e, t, n)
        }
      }, {
        key: "reset",
        value: function () {
          this.Viewer.reset()
        }
      }, {
        key: "openMiniature",
        value: function () {
          this.Viewer.openMiniature()
        }
      }, {
        key: "closeMiniature",
        value: function () {
          this.Viewer.closeMiniature()
        }
      }, {
        key: "render",
        value: function () {
          var e = this,
            t = this.props,
            n = t.width,
            r = t.height,
            i = (t.onChangeTool, t.onChangeValue, un(t, an)),
            a = this.state,
            c = a.tool,
            u = a.value;
          return o.a.createElement(rn, cn({
            width: n,
            height: r,
            tool: c,
            onChangeTool: this.changeTool,
            value: u,
            onChangeValue: this.changeValue,
            ref: function (t) {
              return e.Viewer = t
            }
          }, i))
        }
      }]) && ln(t.prototype, n), r && ln(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(o.a.Component)).propTypes = {
      width: a.a.number.isRequired,
      height: a.a.number.isRequired,
      defaultValue: a.a.object,
      defaultTool: a.a.string
    };
    var mn = function (e, t) {
      if (Number.isNaN(Number(e))) return e;
      var n = Math.pow(10, t);
      return Math.round(e * n) / n
    };

    function yn(e) {
      return (yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }
    var gn = ["height", "width", "bracketWidth", "bracketHeight", "children", "startAt", "scaleFactor", "customToolbar"];

    function bn() {
      return (bn = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }

    function vn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function wn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? vn(Object(n), !0).forEach((function (t) {
          On(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vn(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function On(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" !== yn(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== yn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === yn(t) ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function xn(e) {
      return function (e) {
        if (Array.isArray(e)) return jn(e)
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || Sn(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pn(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r, o, i, a, c = [],
            u = !0,
            l = !1;
          try {
            if (i = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              u = !1
            } else
              for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
          } catch (e) {
            l = !0, o = e
          } finally {
            try {
              if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
              if (l) throw o
            }
          }
          return c
        }
      }(e, t) || Sn(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Sn(e, t) {
      if (e) {
        if ("string" == typeof e) return jn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jn(e, t) : void 0
      }
    }

    function jn(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }

    function Mn(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }
    t.default = function (e) {
      var t = e.height,
        n = void 0 === t ? 500 : t,
        i = e.width,
        a = void 0 === i ? 500 : i,
        c = e.bracketWidth,
        u = e.bracketHeight,
        l = e.children,
        s = e.startAt,
        f = void 0 === s ? [0, 0] : s,
        d = e.scaleFactor,
        h = void 0 === d ? 1.1 : d,
        p = e.customToolbar,
        m = void 0 === p ? null : p,
        y = Mn(e, gn),
        g = Object(r.useRef)(null),
        b = Pn(Object(r.useState)(j), 2),
        v = b[0],
        w = b[1],
        O = Pn(Object(r.useState)(R), 2),
        x = O[0],
        P = O[1],
        S = Pn(Object(r.useState)(1), 2),
        M = S[0],
        k = S[1];
      Object(r.useEffect)((function () {
        var e;
        (e = g.current).pan.apply(e, xn(f))
      }), []);
      var T = function (e) {
        var t = e.a || e.d,
          n = e.SVGHeight * t - e.viewerHeight,
          r = e.SVGWidth * t - e.viewerWidth,
          o = mn(e.viewerHeight / e.SVGHeight, 2),
          i = mn(e.viewerWidth / e.SVGWidth, 2);
        k(Math.max(o, i)), P(wn(wn({}, e), {}, {
          e: e.e > 0 ? 0 : e.e < 0 - r ? 0 - r : e.e,
          f: e.f > 0 ? 0 : e.f < 0 - n ? 0 - n : e.f
        }))
      };
      return o.a.createElement(rn, bn({
        detectAutoPan: !1,
        ref: g,
        scaleFactor: h,
        scaleFactorMax: 1.25,
        scaleFactorMin: M,
        width: Math.min(a, c),
        height: Math.min(n, u),
        tool: v,
        onChangeTool: w,
        value: x,
        onChangeValue: P,
        onZoom: T,
        onPan: T,
        miniatureProps: {
          position: "right"
        },
        customToolbar: null != m ? m : function () {
          return o.a.createElement(o.a.Fragment, null)
        }
      }, y), l)
    }
  }])
}));