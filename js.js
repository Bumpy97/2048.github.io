/*! For license information please see all.js.LICENSE.txt */
(() => {
    var t = {
        840: (t, e, i) => {
            var n;
            ! function (r, s, o, a) {
                "use strict";
                var h, u = ["", "webkit", "Moz", "MS", "ms", "o"],
                    c = s.createElement("div"),
                    l = Math.round,
                    p = Math.abs,
                    f = Date.now;

                function v(t, e, i) {
                    return setTimeout(A(t, i), e)
                }

                function d(t, e, i) {
                    return !!Array.isArray(t) && (m(t, i[e], i), !0)
                }

                function m(t, e, i) {
                    var n;
                    if (t)
                        if (t.forEach) t.forEach(e, i);
                        else if (t.length !== a)
                            for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
                        else
                            for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
                }

                function y(t, e, i) {
                    var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                    return function () {
                        var e = new Error("get-stack-trace"),
                            i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                            s = r.console && (r.console.warn || r.console.log);
                        return s && s.call(r.console, n, i), t.apply(this, arguments)
                    }
                }
                h = "function" != typeof Object.assign ? function (t) {
                    if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), i = 1; i < arguments.length; i++) {
                        var n = arguments[i];
                        if (n !== a && null !== n)
                            for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
                    }
                    return e
                } : Object.assign;
                var g = y((function (t, e, i) {
                    for (var n = Object.keys(e), r = 0; r < n.length;)(!i || i && t[n[r]] === a) && (t[n[r]] = e[n[r]]), r++;
                    return t
                }), "extend", "Use `assign`."),
                    T = y((function (t, e) {
                        return g(t, e, !0)
                    }), "merge", "Use `assign`.");

                function E(t, e, i) {
                    var n, r = e.prototype;
                    (n = t.prototype = Object.create(r)).constructor = t, n._super = r, i && h(n, i)
                }

                function A(t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }

                function b(t, e) {
                    return "function" == typeof t ? t.apply(e && e[0] || a, e) : t
                }

                function w(t, e) {
                    return t === a ? e : t
                }

                function P(t, e, i) {
                    m(C(e), (function (e) {
                        t.addEventListener(e, i, !1)
                    }))
                }

                function I(t, e, i) {
                    m(C(e), (function (e) {
                        t.removeEventListener(e, i, !1)
                    }))
                }

                function S(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function x(t, e) {
                    return t.indexOf(e) > -1
                }

                function C(t) {
                    return t.trim().split(/\s+/g)
                }

                function M(t, e, i) {
                    if (t.indexOf && !i) return t.indexOf(e);
                    for (var n = 0; n < t.length;) {
                        if (i && t[n][i] == e || !i && t[n] === e) return n;
                        n++
                    }
                    return -1
                }

                function L(t) {
                    return Array.prototype.slice.call(t, 0)
                }

                function _(t, e, i) {
                    for (var n = [], r = [], s = 0; s < t.length;) {
                        var o = e ? t[s][e] : t[s];
                        M(r, o) < 0 && n.push(t[s]), r[s] = o, s++
                    }
                    return i && (n = e ? n.sort((function (t, i) {
                        return t[e] > i[e]
                    })) : n.sort()), n
                }

                function D(t, e) {
                    for (var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0; s < u.length;) {
                        if ((n = (i = u[s]) ? i + r : e) in t) return n;
                        s++
                    }
                    return a
                }
                var O = 1;

                function z(t) {
                    var e = t.ownerDocument || t;
                    return e.defaultView || e.parentWindow || r
                }
                var R = "ontouchstart" in r,
                    N = D(r, "PointerEvent") !== a,
                    Y = R && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    F = "touch",
                    H = "mouse",
                    X = ["x", "y"],
                    q = ["clientX", "clientY"];

                function k(t, e) {
                    var i = this;
                    this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                        b(t.options.enable, [t]) && i.handler(e)
                    }, this.init()
                }

                function W(t, e, i) {
                    var n = i.pointers.length,
                        r = i.changedPointers.length,
                        s = 1 & e && n - r == 0,
                        o = 12 & e && n - r == 0;
                    i.isFirst = !!s, i.isFinal = !!o, s && (t.session = {}), i.eventType = e,
                        function (t, e) {
                            var i = t.session,
                                n = e.pointers,
                                r = n.length;
                            i.firstInput || (i.firstInput = B(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = B(e) : 1 === r && (i.firstMultiple = !1);
                            var s = i.firstInput,
                                o = i.firstMultiple,
                                h = o ? o.center : s.center,
                                u = e.center = G(n);
                            e.timeStamp = f(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = Z(h, u), e.distance = V(h, u),
                                function (t, e) {
                                    var i = e.center,
                                        n = t.offsetDelta || {},
                                        r = t.prevDelta || {},
                                        s = t.prevInput || {};
                                    1 !== e.eventType && 4 !== s.eventType || (r = t.prevDelta = {
                                        x: s.deltaX || 0,
                                        y: s.deltaY || 0
                                    }, n = t.offsetDelta = {
                                        x: i.x,
                                        y: i.y
                                    }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y)
                                }(i, e), e.offsetDirection = j(e.deltaX, e.deltaY);
                            var c, l, v = U(e.deltaTime, e.deltaX, e.deltaY);
                            e.overallVelocityX = v.x, e.overallVelocityY = v.y, e.overallVelocity = p(v.x) > p(v.y) ? v.x : v.y, e.scale = o ? (c = o.pointers, V((l = n)[0], l[1], q) / V(c[0], c[1], q)) : 1, e.rotation = o ? function (t, e) {
                                return Z(e[1], e[0], q) + Z(t[1], t[0], q)
                            }(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
                                function (t, e) {
                                    var i, n, r, s, o = t.lastInterval || e,
                                        h = e.timeStamp - o.timeStamp;
                                    if (8 != e.eventType && (h > 25 || o.velocity === a)) {
                                        var u = e.deltaX - o.deltaX,
                                            c = e.deltaY - o.deltaY,
                                            l = U(h, u, c);
                                        n = l.x, r = l.y, i = p(l.x) > p(l.y) ? l.x : l.y, s = j(u, c), t.lastInterval = e
                                    } else i = o.velocity, n = o.velocityX, r = o.velocityY, s = o.direction;
                                    e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = s
                                }(i, e);
                            var d = t.element;
                            S(e.srcEvent.target, d) && (d = e.srcEvent.target), e.target = d
                        }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
                }

                function B(t) {
                    for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                        clientX: l(t.pointers[i].clientX),
                        clientY: l(t.pointers[i].clientY)
                    }, i++;
                    return {
                        timeStamp: f(),
                        pointers: e,
                        center: G(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }

                function G(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: l(t[0].clientX),
                        y: l(t[0].clientY)
                    };
                    for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++;
                    return {
                        x: l(i / e),
                        y: l(n / e)
                    }
                }

                function U(t, e, i) {
                    return {
                        x: e / t || 0,
                        y: i / t || 0
                    }
                }

                function j(t, e) {
                    return t === e ? 1 : p(t) >= p(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : 16
                }

                function V(t, e, i) {
                    i || (i = X);
                    var n = e[i[0]] - t[i[0]],
                        r = e[i[1]] - t[i[1]];
                    return Math.sqrt(n * n + r * r)
                }

                function Z(t, e, i) {
                    i || (i = X);
                    var n = e[i[0]] - t[i[0]],
                        r = e[i[1]] - t[i[1]];
                    return 180 * Math.atan2(r, n) / Math.PI
                }
                k.prototype = {
                    handler: function () { },
                    init: function () {
                        this.evEl && P(this.element, this.evEl, this.domHandler), this.evTarget && P(this.target, this.evTarget, this.domHandler), this.evWin && P(z(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function () {
                        this.evEl && I(this.element, this.evEl, this.domHandler), this.evTarget && I(this.target, this.evTarget, this.domHandler), this.evWin && I(z(this.element), this.evWin, this.domHandler)
                    }
                };
                var $ = {
                    mousedown: 1,
                    mousemove: 2,
                    mouseup: 4
                },
                    J = "mousedown",
                    K = "mousemove mouseup";

                function Q() {
                    this.evEl = J, this.evWin = K, this.pressed = !1, k.apply(this, arguments)
                }
                E(Q, k, {
                    handler: function (t) {
                        var e = $[t.type];
                        1 & e && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = 4), this.pressed && (4 & e && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: H,
                            srcEvent: t
                        }))
                    }
                });
                var tt = {
                    pointerdown: 1,
                    pointermove: 2,
                    pointerup: 4,
                    pointercancel: 8,
                    pointerout: 8
                },
                    et = {
                        2: F,
                        3: "pen",
                        4: H,
                        5: "kinect"
                    },
                    it = "pointerdown",
                    nt = "pointermove pointerup pointercancel";

                function rt() {
                    this.evEl = it, this.evWin = nt, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }
                r.MSPointerEvent && !r.PointerEvent && (it = "MSPointerDown", nt = "MSPointerMove MSPointerUp MSPointerCancel"), E(rt, k, {
                    handler: function (t) {
                        var e = this.store,
                            i = !1,
                            n = t.type.toLowerCase().replace("ms", ""),
                            r = tt[n],
                            s = et[t.pointerType] || t.pointerType,
                            o = s == F,
                            a = M(e, t.pointerId, "pointerId");
                        1 & r && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : 12 & r && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: s,
                            srcEvent: t
                        }), i && e.splice(a, 1))
                    }
                });
                var st = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                },
                    ot = "touchstart",
                    at = "touchstart touchmove touchend touchcancel";

                function ht() {
                    this.evTarget = ot, this.evWin = at, this.started = !1, k.apply(this, arguments)
                }

                function ut(t, e) {
                    var i = L(t.touches),
                        n = L(t.changedTouches);
                    return 12 & e && (i = _(i.concat(n), "identifier", !0)), [i, n]
                }
                E(ht, k, {
                    handler: function (t) {
                        var e = st[t.type];
                        if (1 === e && (this.started = !0), this.started) {
                            var i = ut.call(this, t, e);
                            12 & e && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                                pointers: i[0],
                                changedPointers: i[1],
                                pointerType: F,
                                srcEvent: t
                            })
                        }
                    }
                });
                var ct = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                },
                    lt = "touchstart touchmove touchend touchcancel";

                function pt() {
                    this.evTarget = lt, this.targetIds = {}, k.apply(this, arguments)
                }

                function ft(t, e) {
                    var i = L(t.touches),
                        n = this.targetIds;
                    if (3 & e && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                    var r, s, o = L(t.changedTouches),
                        a = [],
                        h = this.target;
                    if (s = i.filter((function (t) {
                        return S(t.target, h)
                    })), 1 === e)
                        for (r = 0; r < s.length;) n[s[r].identifier] = !0, r++;
                    for (r = 0; r < o.length;) n[o[r].identifier] && a.push(o[r]), 12 & e && delete n[o[r].identifier], r++;
                    return a.length ? [_(s.concat(a), "identifier", !0), a] : void 0
                }

                function vt() {
                    k.apply(this, arguments);
                    var t = A(this.handler, this);
                    this.touch = new pt(this.manager, t), this.mouse = new Q(this.manager, t), this.primaryTouch = null, this.lastTouches = []
                }

                function dt(t, e) {
                    1 & t ? (this.primaryTouch = e.changedPointers[0].identifier, mt.call(this, e)) : 12 & t && mt.call(this, e)
                }

                function mt(t) {
                    var e = t.changedPointers[0];
                    if (e.identifier === this.primaryTouch) {
                        var i = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        this.lastTouches.push(i);
                        var n = this.lastTouches;
                        setTimeout((function () {
                            var t = n.indexOf(i);
                            t > -1 && n.splice(t, 1)
                        }), 2500)
                    }
                }

                function yt(t) {
                    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                        var r = this.lastTouches[n],
                            s = Math.abs(e - r.x),
                            o = Math.abs(i - r.y);
                        if (s <= 25 && o <= 25) return !0
                    }
                    return !1
                }
                E(pt, k, {
                    handler: function (t) {
                        var e = ct[t.type],
                            i = ft.call(this, t, e);
                        i && this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: F,
                            srcEvent: t
                        })
                    }
                }), E(vt, k, {
                    handler: function (t, e, i) {
                        var n = i.pointerType == F,
                            r = i.pointerType == H;
                        if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                            if (n) dt.call(this, e, i);
                            else if (r && yt.call(this, i)) return;
                            this.callback(t, e, i)
                        }
                    },
                    destroy: function () {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var gt = D(c.style, "touchAction"),
                    Tt = gt !== a,
                    Et = "compute",
                    At = "auto",
                    bt = "manipulation",
                    wt = "none",
                    Pt = "pan-x",
                    It = "pan-y",
                    St = function () {
                        if (!Tt) return !1;
                        var t = {},
                            e = r.CSS && r.CSS.supports;
                        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function (i) {
                            t[i] = !e || r.CSS.supports("touch-action", i)
                        })), t
                    }();

                function xt(t, e) {
                    this.manager = t, this.set(e)
                }
                xt.prototype = {
                    set: function (t) {
                        t == Et && (t = this.compute()), Tt && this.manager.element.style && St[t] && (this.manager.element.style[gt] = t), this.actions = t.toLowerCase().trim()
                    },
                    update: function () {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function () {
                        var t = [];
                        return m(this.manager.recognizers, (function (e) {
                            b(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        })),
                            function (t) {
                                if (x(t, wt)) return wt;
                                var e = x(t, Pt),
                                    i = x(t, It);
                                return e && i ? wt : e || i ? e ? Pt : It : x(t, bt) ? bt : At
                            }(t.join(" "))
                    },
                    preventDefaults: function (t) {
                        var e = t.srcEvent,
                            i = t.offsetDirection;
                        if (this.manager.session.prevented) e.preventDefault();
                        else {
                            var n = this.actions,
                                r = x(n, wt) && !St.none,
                                s = x(n, It) && !St["pan-y"],
                                o = x(n, Pt) && !St["pan-x"];
                            if (r) {
                                var a = 1 === t.pointers.length,
                                    h = t.distance < 2,
                                    u = t.deltaTime < 250;
                                if (a && h && u) return
                            }
                            if (!o || !s) return r || s && 6 & i || o && 24 & i ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function (t) {
                        this.manager.session.prevented = !0, t.preventDefault()
                    }
                };
                var Ct = 32;

                function Mt(t) {
                    this.options = h({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
                }

                function Lt(t) {
                    return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
                }

                function _t(t) {
                    return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : ""
                }

                function Dt(t, e) {
                    var i = e.manager;
                    return i ? i.get(t) : t
                }

                function Ot() {
                    Mt.apply(this, arguments)
                }

                function zt() {
                    Ot.apply(this, arguments), this.pX = null, this.pY = null
                }

                function Rt() {
                    Ot.apply(this, arguments)
                }

                function Nt() {
                    Mt.apply(this, arguments), this._timer = null, this._input = null
                }

                function Yt() {
                    Ot.apply(this, arguments)
                }

                function Ft() {
                    Ot.apply(this, arguments)
                }

                function Ht() {
                    Mt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function Xt(t, e) {
                    return (e = e || {}).recognizers = w(e.recognizers, Xt.defaults.preset), new qt(t, e)
                }

                function qt(t, e) {
                    this.options = h({}, Xt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new (this.options.inputClass || (N ? rt : Y ? pt : R ? vt : Q))(this, W), this.touchAction = new xt(this, this.options.touchAction), kt(this, !0), m(this.options.recognizers, (function (t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }), this)
                }

                function kt(t, e) {
                    var i, n = t.element;
                    n.style && (m(t.options.cssProps, (function (r, s) {
                        i = D(n.style, s), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t.oldCssProps[i] || ""
                    })), e || (t.oldCssProps = {}))
                }
                Mt.prototype = {
                    defaults: {},
                    set: function (t) {
                        return h(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function (t) {
                        if (d(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return e[(t = Dt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function (t) {
                        return d(t, "dropRecognizeWith", this) || (t = Dt(t, this), delete this.simultaneous[t.id]), this
                    },
                    requireFailure: function (t) {
                        if (d(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return -1 === M(e, t = Dt(t, this)) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function (t) {
                        if (d(t, "dropRequireFailure", this)) return this;
                        t = Dt(t, this);
                        var e = M(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function () {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function (t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function (t) {
                        var e = this,
                            i = this.state;

                        function n(i) {
                            e.manager.emit(i, t)
                        }
                        i < 8 && n(e.options.event + Lt(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= 8 && n(e.options.event + Lt(i))
                    },
                    tryEmit: function (t) {
                        if (this.canEmit()) return this.emit(t);
                        this.state = Ct
                    },
                    canEmit: function () {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (!(33 & this.requireFail[t].state)) return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function (t) {
                        var e = h({}, t);
                        if (!b(this.options.enable, [this, e])) return this.reset(), void (this.state = Ct);
                        56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
                    },
                    process: function (t) { },
                    getTouchAction: function () { },
                    reset: function () { }
                }, E(Ot, Mt, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function (t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function (t) {
                        var e = this.state,
                            i = t.eventType,
                            n = 6 & e,
                            r = this.attrTest(t);
                        return n && (8 & i || !r) ? 16 | e : n || r ? 4 & i ? 8 | e : 2 & e ? 4 | e : 2 : Ct
                    }
                }), E(zt, Ot, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function () {
                        var t = this.options.direction,
                            e = [];
                        return 6 & t && e.push(It), 24 & t && e.push(Pt), e
                    },
                    directionTest: function (t) {
                        var e = this.options,
                            i = !0,
                            n = t.distance,
                            r = t.direction,
                            s = t.deltaX,
                            o = t.deltaY;
                        return r & e.direction || (6 & e.direction ? (r = 0 === s ? 1 : s < 0 ? 2 : 4, i = s != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === o ? 1 : o < 0 ? 8 : 16, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction
                    },
                    attrTest: function (t) {
                        return Ot.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
                    },
                    emit: function (t) {
                        this.pX = t.deltaX, this.pY = t.deltaY;
                        var e = _t(t.direction);
                        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                    }
                }), E(Rt, Ot, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function () {
                        return [wt]
                    },
                    attrTest: function (t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function (t) {
                        if (1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            t.additionalEvent = this.options.event + e
                        }
                        this._super.emit.call(this, t)
                    }
                }), E(Nt, Mt, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function () {
                        return [At]
                    },
                    process: function (t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            n = t.distance < e.threshold,
                            r = t.deltaTime > e.time;
                        if (this._input = t, !n || !i || 12 & t.eventType && !r) this.reset();
                        else if (1 & t.eventType) this.reset(), this._timer = v((function () {
                            this.state = 8, this.tryEmit()
                        }), e.time, this);
                        else if (4 & t.eventType) return 8;
                        return Ct
                    },
                    reset: function () {
                        clearTimeout(this._timer)
                    },
                    emit: function (t) {
                        8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
                    }
                }), E(Yt, Ot, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function () {
                        return [wt]
                    },
                    attrTest: function (t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                    }
                }), E(Ft, Ot, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function () {
                        return zt.prototype.getTouchAction.call(this)
                    },
                    attrTest: function (t) {
                        var e, i = this.options.direction;
                        return 30 & i ? e = t.overallVelocity : 6 & i ? e = t.overallVelocityX : 24 & i && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && p(e) > this.options.velocity && 4 & t.eventType
                    },
                    emit: function (t) {
                        var e = _t(t.offsetDirection);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                    }
                }), E(Ht, Mt, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function () {
                        return [bt]
                    },
                    process: function (t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            n = t.distance < e.threshold,
                            r = t.deltaTime < e.time;
                        if (this.reset(), 1 & t.eventType && 0 === this.count) return this.failTimeout();
                        if (n && r && i) {
                            if (4 != t.eventType) return this.failTimeout();
                            var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                o = !this.pCenter || V(this.pCenter, t.center) < e.posThreshold;
                            if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = v((function () {
                                this.state = 8, this.tryEmit()
                            }), e.interval, this), 2) : 8
                        }
                        return Ct
                    },
                    failTimeout: function () {
                        return this._timer = v((function () {
                            this.state = Ct
                        }), this.options.interval, this), Ct
                    },
                    reset: function () {
                        clearTimeout(this._timer)
                    },
                    emit: function () {
                        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), Xt.VERSION = "2.0.7", Xt.defaults = {
                    domEvents: !1,
                    touchAction: Et,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [Yt, {
                            enable: !1
                        }],
                        [Rt, {
                            enable: !1
                        },
                            ["rotate"]
                        ],
                        [Ft, {
                            direction: 6
                        }],
                        [zt, {
                            direction: 6
                        },
                            ["swipe"]
                        ],
                        [Ht],
                        [Ht, {
                            event: "doubletap",
                            taps: 2
                        },
                            ["tap"]
                        ],
                        [Nt]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                }, qt.prototype = {
                    set: function (t) {
                        return h(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                    },
                    stop: function (t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function (t) {
                        var e = this.session;
                        if (!e.stopped) {
                            var i;
                            this.touchAction.preventDefaults(t);
                            var n = this.recognizers,
                                r = e.curRecognizer;
                            (!r || r && 8 & r.state) && (r = e.curRecognizer = null);
                            for (var s = 0; s < n.length;) i = n[s], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && 14 & i.state && (r = e.curRecognizer = i), s++
                        }
                    },
                    get: function (t) {
                        if (t instanceof Mt) return t;
                        for (var e = this.recognizers, i = 0; i < e.length; i++)
                            if (e[i].options.event == t) return e[i];
                        return null
                    },
                    add: function (t) {
                        if (d(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                    },
                    remove: function (t) {
                        if (d(t, "remove", this)) return this;
                        if (t = this.get(t)) {
                            var e = this.recognizers,
                                i = M(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function (t, e) {
                        if (t !== a && e !== a) {
                            var i = this.handlers;
                            return m(C(t), (function (t) {
                                i[t] = i[t] || [], i[t].push(e)
                            })), this
                        }
                    },
                    off: function (t, e) {
                        if (t !== a) {
                            var i = this.handlers;
                            return m(C(t), (function (t) {
                                e ? i[t] && i[t].splice(M(i[t], e), 1) : delete i[t]
                            })), this
                        }
                    },
                    emit: function (t, e) {
                        this.options.domEvents && function (t, e) {
                            var i = s.createEvent("Event");
                            i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
                        }(t, e);
                        var i = this.handlers[t] && this.handlers[t].slice();
                        if (i && i.length) {
                            e.type = t, e.preventDefault = function () {
                                e.srcEvent.preventDefault()
                            };
                            for (var n = 0; n < i.length;) i[n](e), n++
                        }
                    },
                    destroy: function () {
                        this.element && kt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, h(Xt, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: Ct,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: 24,
                    DIRECTION_ALL: 30,
                    Manager: qt,
                    Input: k,
                    TouchAction: xt,
                    TouchInput: pt,
                    MouseInput: Q,
                    PointerEventInput: rt,
                    TouchMouseInput: vt,
                    SingleTouchInput: ht,
                    Recognizer: Mt,
                    AttrRecognizer: Ot,
                    Tap: Ht,
                    Pan: zt,
                    Swipe: Ft,
                    Pinch: Rt,
                    Rotate: Yt,
                    Press: Nt,
                    on: P,
                    off: I,
                    each: m,
                    merge: T,
                    extend: g,
                    assign: h,
                    inherit: E,
                    bindFn: A,
                    prefixed: D
                }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = Xt, (n = function () {
                    return Xt
                }.call(e, i, e, t)) === a || (t.exports = n)
            }(window, document)
        }
    },
        e = {};

    function i(n) {
        var r = e[n];
        if (void 0 !== r) return r.exports;
        var s = e[n] = {
            exports: {}
        };
        return t[n](s, s.exports, i), s.exports
    } (() => {
        "use strict";
        var t, e = i(840);

        function n(t) {
            var e = this;
            this.board = [], this.boardFlat = function () {
                return e.board.flat()
            }, this.rows = t, this.columns = t, this.score = 0, this.moveInProgress = !1, this.eventListenerArray = []
        }

        function r(e, i) {
            this.game = t, this.el, this.x = e, this.y = i, this.valueProp = 2, Object.defineProperties(this, {
                value: {
                    get: function () {
                        return this.valueProp
                    },
                    set: function (t) {
                        this.valueProp = t;
                        var e = this.el.querySelector(".tile_number");
                        e.innerHTML = this.valueProp, e.setAttribute("data-value", t)
                    }
                }
            }), this.canMove = !1, this.initialize()
        }

        function s() {
            t && t.destroyGame(), (t = new n(4)).initialize()
        }
        n.prototype.addEventListenerHelper = function (t, e, i) {
            t && t.addEventListener(e, i), this.eventListenerArray.push({
                eventElement: t,
                eventName: e,
                eventCallback: i
            })
        }, n.prototype.removeEventListenerHelper = function () {
            this.eventListenerArray.forEach((function (t) {
                t.eventElement.removeEventListener(t.eventName, t.eventCallback)
            })), this.eventListenerArray = []
        }, n.prototype.getEmptyCells = function () {
            return this.boardFlat().filter((function (t) {
                return !t.tilesArray.length
            }))
        }, n.prototype.getRandomEmptyCell = function () {
            var t = this.getEmptyCells();
            return t[Math.floor(Math.random() * Math.floor(t.length))]
        }, n.prototype.gameWon = function () {

            document.getElementById('overlay').style.display = 'block';
            document.getElementById('winMessage').style.display = 'block';


        },
            n.prototype.gameLost = function () {
                
                document.getElementById('overlay').style.display = 'block';
                document.getElementById('winMessage').style.display = 'block';

            }, n.prototype.isGameWon = function () {
                var t = !1;
                return this.boardFlat().forEach((function (e) {
                    e.tilesArray.forEach((function (e) {
                        2048 === e.valueProp && (t = !0)
                    }))
                })), t
            }, n.prototype.canAnyTileMove = function () {
                var t = !1;
                return this.boardFlat().forEach((function (e) {
                    e.tilesArray.forEach((function (e) {
                        e.canMove = e.isMoveable(), !0 === e.canMove && (t = !0)
                    }))
                })), t
            }, n.prototype.isGameOver = function () {
                var t = this.isGameWon(),
                    e = this.canAnyTileMove(),
                    i = this.getEmptyCells().length > 0;
                return t ? (this.gameWon(), !0) : !i && !e && (this.gameLost(), !0)
            }, n.prototype.mergeTiles = function () {
                var t = this.score;
                this.boardFlat().forEach((function (e) {
                    if (2 === e.tilesArray.length) {
                        var i = e.tilesArray[0].valueProp;
                        e.tilesArray[0].value = 2 * i, e.tilesArray.pop().el.remove(), t += i
                    }
                })), this.setScoreboard(t)
            }, n.prototype.moveAnimations = function (t) {
                var e = this,
                    i = [];

                function n() {
                    e.moveInProgress = !1, e.mergeTiles(), e.initTile()
                }
                if (this.moveInProgress) return !1;
                this.moveInProgress = !0, t.forEach((function (t) {
                    t.tilesArray.forEach((function (t) {
                        i.push(t.animatePosition())
                    }))
                })), 0 === i.length ? n() : Promise.all(i).then(n)
            }, n.prototype.getSortedBoardByPosition = function (t, e) {
                return this.boardFlat().sort((function (i, n) {
                    return i[t] < n[t] ? "asc" === e ? -1 : 1 : i[t] > n[t] ? "asc" === e ? 1 : -1 : 0
                }))
            }, n.prototype.move = function (t) {
                var e, i = t.toLowerCase(),
                    n = !1;
                if (this.moveInProgress) return !1;
                "up" === i ? e = this.getSortedBoardByPosition("y", "asc") : "right" === i ? e = this.getSortedBoardByPosition("x", "desc") : "down" === i ? e = this.getSortedBoardByPosition("y", "desc") : "left" === i && (e = this.getSortedBoardByPosition("y", "asc")), e.forEach((function (t) {
                    t.tilesArray.length && t.tilesArray.forEach((function (t) {
                        t.move(i, !0) && (n = !0, t.move(i))
                    }))
                })), n && this.moveAnimations(e)
            }, n.prototype.setScoreboard = function (t) {
                var e = this,
                    i = document.querySelectorAll('[data-js="score"]') || [];
                this.score = t, i.forEach((function (t) {
                    t.innerHTML = e.score.toString()
                }))
            }, n.prototype.createGridCellDOMElement = function () {
                var t = document.createElement("div");
                return t.innerHTML = '<div class="grid_cell"></div>', t.firstChild
            }, n.prototype.initBoard = function () {
                for (var t = this, e = function (e, i) {
                    var n = document.querySelector(".grid"),
                        r = t.createGridCellDOMElement();
                    return n.append(r), {
                        x: e,
                        y: i,
                        tilesArray: []
                    }
                }, i = 0; i < this.rows; i++) {
                    this.board.push([]);
                    for (var n = 0; n < this.columns; n++) {
                        var r = e(i, n);
                        this.board[i].push(r)
                    }
                }
            }, n.prototype.initTile = function () {
                this.isGameOver();
                var t = this.getRandomEmptyCell();
                new r(t.x, t.y), this.isGameOver()
            }, n.prototype.initEventListeners = function () {
                var t = this,
                    i = document.getElementById("touchGameboard"),
                    n = document.querySelector('[data-js="newGame"]');
                this.addEventListenerHelper(n, "click", s), window.hammertime && window.hammertime.destroy(), window.hammertime = new e(i, {
                    recognizers: [
                        [e.Swipe, {
                            direction: e.DIRECTION_ALL
                        }]
                    ]
                }), window.hammertime.on("swipeleft", (function () {
                    t.move("left")
                })).on("swiperight", (function () {
                    t.move("right")
                })).on("swipedown", (function () {
                    t.move("down")
                })).on("swipeup", (function () {
                    t.move("up")
                })), this.addEventListenerHelper(document, "keydown", (function (e) {
                    switch (e.preventDefault(), e.keyCode) {
                        case 37:
                            t.move("left");
                            break;
                        case 38:
                            t.move("up");
                            break;
                        case 39:
                            t.move("right");
                            break;
                        case 40:
                            t.move("down")
                    }
                }))
            }, n.prototype.clearBoardUI = function () {
                var t = document.querySelector(".grid"),
                    e = document.querySelector(".tile-container");
                t && (t.innerHTML = ""), e && (e.innerHTML = "")
            }, n.prototype.destroyGame = function () {
                this.removeEventListenerHelper()
            }, n.prototype.initialize = function () {
                this.destroyGame(), this.clearBoardUI(), this.setScoreboard(0), this.initBoard(), this.initTile(), this.initEventListeners()
            }, r.prototype.createTileDOMElement = function () {
                var t = document.createElement("div");
                return t.innerHTML = '<div class="tile"> <span class="tile_number"> </span> </div>', t.firstChild
            }, r.prototype.initialize = function () {
                var t = document.querySelector(".tile-container");
                this.el = this.createTileDOMElement();
                var e = this.el.querySelector(".tile_number");
                e.innerHTML = this.valueProp, e.setAttribute("data-value", 2), this.setPosition(this.x, this.y), this.animatePosition(!0), t.append(this.el)
            }, r.prototype.setPosition = function (t, e) {
                this.x = t, this.y = e, this.game.board[t][e].tilesArray.push(this)
            }, r.prototype.removeOldPosition = function (t, e) {
                this.game.board[t][e].tilesArray.pop()
            }, r.prototype.animatePosition = function (t) {
                var e = this,
                    i = this.x * (100 / this.game.rows),
                    n = this.y * (100 / this.game.columns),
                    r = "initialize",
                    s = "animate",
                    o = t ? 150 : 100;
                return t ? this.el.classList.add(r) : this.el.classList.remove(r), this.el.classList.add(s), this.el.setAttribute("data-x", i), this.el.setAttribute("data-y", n), new Promise((function (t) {
                    window.setTimeout((function () {
                        t(), e.el.classList.remove(s), e.el.classList.remove(r)
                    }), o)
                }))
            }, r.prototype.isMoveable = function () {
                return !!(this.move("up", !0) || this.move("right", !0) || this.move("down", !0) || this.move("left", !0))
            }, r.prototype.move = function (t, e) {
                var i, n = !!e,
                    r = t.toLowerCase(),
                    s = this.x,
                    o = this.y,
                    a = [];
                "up" === r ? (i = this.y > 0 && this.game.board[this.x][this.y - 1], a.push(this.x, this.y - 1)) : "right" === r ? (i = this.x < 3 && this.game.board[this.x + 1][this.y], a.push(this.x + 1, this.y)) : "down" === r ? (i = this.y < 3 && this.game.board[this.x][this.y + 1], a.push(this.x, this.y + 1)) : "left" === r && (i = this.x > 0 && this.game.board[this.x - 1][this.y], a.push(this.x - 1, this.y));
                var h = i && 1 === i.tilesArray.length && i.tilesArray[0].valueProp === this.valueProp,
                    u = i && 0 === i.tilesArray.length;
                if (n) return !(!u && !h);
                (u || h) && (this.setPosition(a[0], a[1]), this.removeOldPosition(s, o), h || this.move(r))
            }, "complete" === document.readyState ? s() : window.addEventListener("DOMContentLoaded", s)
    })()
})();

document.getElementById('winButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('winMessage').style.display = 'block';
});

document.getElementById('sgame1').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('winMessage').style.display = 'none';

    window.location.reload();

    vkBridge.send('VKWebAppShowNativeAds', {
        ad_format: 'interstitial' /* Тип рекламы */
      })
        .then((data) => {
          if (data.result) {
            // Реклама была показана
          } else {
            // Ошибка
          }
        })
        .catch((error) => { console.log(error); });
    });

vkBridge.send('VKWebAppShowBannerAd', {
    banner_location: 'bottom'
  })
    .then((data) => {
      if (data.result) {
        // Баннерная реклама отобразилась
      }
    })
    .catch((error) => {
      // Ошибка
      console.log(error);
    });

