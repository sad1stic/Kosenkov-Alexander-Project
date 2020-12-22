(function(_) {
    var window = this,
        document = this.document;
    var ba, da, fa, ka, la, na, oa, pa, ta, ua, va, wa, xa, ya, Aa, za, Ba, Ca, Ea, Fa, Ga, Ja, Ka, Ma, Na, Oa, Pa;
    ba = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    da = function(a) {
        return a ? a.passive && ca() ? a : a.capture || !1 : a
    };
    fa = function(a) {
        a = ea(a.split(/\s+/), function(a) {
            return (a = /^(-?\d+)(px|%)$/.exec(a)) ? {
                value: (0, window.parseFloat)(a[1]),
                type: a[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    ka = function(a) {
        if (!a) return [0];
        a = _.m(a) ? [a] : a;
        a = _.ha(a, function(a) {
            return _.m(a) && 0 <= a && 1 >= a ? !0 : !1
        });
        ia(a);
        ja(a, function(a, c) {
            return a - c
        });
        return a
    };
    la = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    na = function(a, b, c) {
        ma(function(d) {
            _.q(d);
            _.r(d, "ppid", a);
            _.r(d, "key", b);
            _.r(d, "value", c)
        })
    };
    _.aa = [];
    oa = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    };
    if ("function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    ta = pa;
    ua = function(a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (ta) ta(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Rb = b.prototype
    };
    va = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };
    wa = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this;
    xa = function() {
        xa = function() {};
        wa.Symbol || (wa.Symbol = ya)
    };
    ya = function() {
        var a = 0;
        return function(b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }();
    Aa = function() {
        xa();
        var a = wa.Symbol.iterator;
        a || (a = wa.Symbol.iterator = wa.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && va(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return za(this)
            }
        });
        Aa = function() {}
    };
    za = function(a) {
        var b = 0;
        return Ba(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    };
    Ba = function(a) {
        Aa();
        a = {
            next: a
        };
        a[wa.Symbol.iterator] = function() {
            return this
        };
        return a
    };
    Ca = function(a) {
        if (!(a instanceof Array)) {
            Aa();
            var b = a[window.Symbol.iterator];
            a = b ? b.call(a) : za(a);
            for (var c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    _.t = this;
    _.u = function(a) {
        return void 0 !== a
    };
    _.w = function(a) {
        return "string" == typeof a
    };
    _.Da = function(a) {
        return "boolean" == typeof a
    };
    _.m = function(a) {
        return "number" == typeof a
    };
    Ea = function() {};
    Fa = function(a) {
        a.ya = void 0;
        a.u = function() {
            return a.ya ? a.ya : a.ya = new a
        }
    };
    Ga = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    };
    _.y = function(a) {
        return "array" == Ga(a)
    };
    _.Ha = function(a) {
        var b = Ga(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.Ia = function(a) {
        return "function" == Ga(a)
    };
    _.z = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    Ja = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Ka = 0;
    Ma = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Na = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.A = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.A = Ma : _.A = Na;
        return _.A.apply(null, arguments)
    };
    Oa = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    Pa = function(a, b) {
        a = a.split(".");
        var c = _.t;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && _.u(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    };
    _.Qa = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Rb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.af = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var Ra = window.document,
        Sa = window;
    var Ta = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ta);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    _.Qa(Ta, Error);
    Ta.prototype.name = "CustomError";
    var Ua;
    var Va, Wa, Xa, Za, $a, ab, bb, cb, db, Ya, hb, fb, gb, ib, jb, lb;
    Va = function(a) {
        var b = a.length - 1;
        return 0 <= b && a.indexOf("#", b) == b
    };
    Wa = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    Xa = function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    _.eb = function(a) {
        if (!Ya.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Za, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace($a, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ab, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(bb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(cb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(db, "&#0;"));
        return a
    };
    Za = /&/g;
    $a = /</g;
    ab = />/g;
    bb = /"/g;
    cb = /'/g;
    db = /\x00/g;
    Ya = /[\x00&<>"']/;
    hb = function(a) {
        return -1 != a.indexOf("&") ? "document" in _.t ? fb(a) : gb(a) : a
    };
    fb = function(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = _.t.document.createElement("div");
        return a.replace(ib, function(a, e) {
            var d = b[a];
            if (d) return d;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), (0, window.isNaN)(e) || (d = String.fromCharCode(e)));
            d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = d
        })
    };
    gb = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), (0, window.isNaN)(c)) ? a : String.fromCharCode(c)
            }
        })
    };
    ib = /&([^;\s<&]+);?/g;
    jb = function(a) {
        return null == a ? "" : String(a)
    };
    _.kb = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36)
    };
    _.mb = function(a, b) {
        var c = 0;
        a = Xa(String(a)).split(".");
        b = Xa(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = lb(0 == f[1].length ? 0 : (0, window.parseInt)(f[1], 10), 0 == g[1].length ? 0 : (0, window.parseInt)(g[1], 10)) || lb(0 == f[2].length, 0 == g[2].length) || lb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    };
    lb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var nb, ea, ob, pb, qb, sb, rb, vb, xb, yb, Ab, ia, ja, Bb, Db, Eb;
    nb = function(a, b) {
        if (_.w(a)) return _.w(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.B = function(a, b, c) {
        for (var d = a.length, e = _.w(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.ha = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = _.w(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    };
    ea = function(a, b, c) {
        for (var d = a.length, e = Array(d), f = _.w(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    };
    ob = function(a, b) {
        var c = 0;
        _.B(a, function(d, e) {
            c = b.call(void 0, c, d, e, a)
        });
        return c
    };
    pb = function(a, b) {
        for (var c = a.length, d = _.w(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    };
    qb = function(a, b) {
        for (var c = a.length, d = _.w(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };
    sb = function(a, b) {
        b = rb(a, b, void 0);
        return 0 > b ? null : _.w(a) ? a.charAt(b) : a[b]
    };
    rb = function(a, b, c) {
        for (var d = a.length, e = _.w(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    };
    _.ub = function(a, b) {
        return 0 <= nb(a, b)
    };
    vb = function(a, b) {
        _.ub(a, b) || a.push(b)
    };
    _.wb = function(a, b) {
        b = nb(a, b);
        0 <= b && Array.prototype.splice.call(a, b, 1)
    };
    xb = function(a, b) {
        b = rb(a, b, void 0);
        0 <= b && Array.prototype.splice.call(a, b, 1)
    };
    yb = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.zb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    Ab = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ia = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++];
            var f = e;
            f = _.z(f) ? "o" + (f[Ja] || (f[Ja] = ++Ka)) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    };
    ja = function(a, b) {
        a.sort(b || Bb)
    };
    _.Cb = function(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || Bb;
        ja(c, function(a, b) {
            return e(a.value, b.value) || a.index - b.index
        });
        for (d = 0; d < a.length; d++) a[d] = c[d].value
    };
    Bb = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    Db = function(a, b) {
        return a === b
    };
    Eb = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            _.u(f) && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    a: {
        var Gb = _.t.navigator;
        if (Gb) {
            var Hb = Gb.userAgent;
            if (Hb) {
                _.Fb = Hb;
                break a
            }
        }
        _.Fb = ""
    }
    var C = function(a) {
            return -1 != _.Fb.indexOf(a)
        },
        Ib = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var Kb, Lb, Mb, Nb, Ob, Pb, Qb;
    _.Jb = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    Kb = function(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };
    Lb = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    Mb = function(a, b) {
        return null !== a && b in a
    };
    Nb = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    };
    Ob = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Pb = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    Qb = function(a) {
        var b = {},
            c;
        for (c in a) b[a[c]] = c;
        return b
    };
    var Sb, Tb;
    _.Rb = function() {
        return C("Trident") || C("MSIE")
    };
    Sb = function() {
        return (C("Chrome") || C("CriOS")) && !C("Edge")
    };
    _.Ub = function() {
        function a(a) {
            a = sb(a, d);
            return c[a] || ""
        }
        var b = _.Fb;
        if (_.Rb()) return Tb(b);
        b = Ib(b);
        var c = {};
        _.B(b, function(a) {
            c[a[0]] = a[1]
        });
        var d = Oa(Mb, c);
        return C("Opera") ? a(["Version", "Opera"]) : C("Edge") ? a(["Edge"]) : Sb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    };
    Tb = function(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };
    var Vb = function() {
        return C("iPhone") && !C("iPod") && !C("iPad")
    };
    var Wb = function(a) {
        Wb[" "](a);
        return a
    };
    Wb[" "] = Ea;
    var Xb = function(a, b) {
            try {
                return Wb(a[b]), !0
            } catch (c) {}
            return !1
        },
        Zb = function(a, b) {
            var c = Yb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var $b, bc, cc, dc, ec, gc, hc, jc, kc, lc, mc, nc, oc, sc, Yb, uc;
    $b = C("Opera");
    _.ac = _.Rb();
    bc = C("Edge");
    cc = bc || _.ac;
    dc = C("Gecko") && !(-1 != _.Fb.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge");
    ec = -1 != _.Fb.toLowerCase().indexOf("webkit") && !C("Edge");
    _.fc = ec && C("Mobile");
    gc = C("Macintosh");
    hc = C("Windows");
    _.ic = C("Android");
    jc = Vb();
    kc = C("iPad");
    lc = C("iPod");
    mc = Vb() || C("iPad") || C("iPod");
    nc = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var pc = "",
            qc = function() {
                var a = _.Fb;
                if (dc) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (bc) return /Edge\/([\d\.]+)/.exec(a);
                if (_.ac) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ec) return /WebKit\/(\S+)/.exec(a);
                if ($b) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();qc && (pc = qc ? qc[1] : "");
        if (_.ac) {
            var rc = nc();
            if (null != rc && rc > (0, window.parseFloat)(pc)) {
                oc = String(rc);
                break a
            }
        }
        oc = pc
    }
    sc = oc;
    Yb = {};
    _.tc = function(a) {
        return Zb(a, function() {
            return 0 <= _.mb(sc, a)
        })
    };
    var vc = _.t.document;
    uc = vc && _.ac ? nc() || ("CSS1Compat" == vc.compatMode ? (0, window.parseInt)(sc, 10) : 5) : void 0;
    var wc = Sb(),
        xc = C("Safari") && !(Sb() || C("Coast") || C("Opera") || C("Edge") || C("Silk") || C("Android")) && !(Vb() || C("iPad") || C("iPod"));
    var yc = null,
        zc = null,
        Ac = dc || ec && !xc || $b || "function" == typeof _.t.btoa,
        Bc = function(a, b) {
            if (!yc) {
                yc = {};
                zc = {};
                for (var c = 0; 65 > c; c++) yc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), zc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
            }
            b = b ? zc : yc;
            c = [];
            for (var d = 0; d < a.length; d += 3) {
                var e = a[d],
                    f = d + 1 < a.length,
                    g = f ? a[d + 1] : 0,
                    k = d + 2 < a.length,
                    l = k ? a[d + 2] : 0,
                    n = e >> 2;
                e = (e & 3) << 4 | g >> 4;
                g = (g & 15) << 2 | l >> 6;
                l &= 63;
                k || (l = 64, f || (g = 64));
                c.push(b[n], b[e], b[g], b[l])
            }
            return c.join("")
        };
    var Cc = 0,
        Dc = 0;
    var Ec = function() {
        this.j = []
    };
    Ec.prototype.length = function() {
        return this.j.length
    };
    var Fc = function(a) {
        var b = a.j;
        a.j = [];
        return b
    };
    var Gc = function() {
        this.l = [];
        this.m = 0;
        this.j = new Ec
    };
    Gc.prototype.reset = function() {
        this.l = [];
        Fc(this.j);
        this.m = 0
    };
    var Hc = function(a, b, c) {
        if (null != c) {
            var d = a.j;
            for (b = 8 * b + 0; 127 < b;) d.j.push(b & 127 | 128), b >>>= 7;
            d.j.push(b);
            a = a.j;
            b = c;
            c = 0 > b;
            b = Math.abs(b);
            d = b >>> 0;
            b = Math.floor((b - d) / 4294967296);
            b >>>= 0;
            c && (b = ~b >>> 0, d = (~d >>> 0) + 1, 4294967295 < d && (d = 0, b++, 4294967295 < b && (b = 0)));
            Cc = d;
            Dc = b;
            c = Cc;
            for (d = Dc; 0 < d || 127 < c;) a.j.push(c & 127 | 128), c = (c >>> 7 | d << 25) >>> 0, d >>>= 7;
            a.j.push(c)
        }
    };
    var Ic = function() {},
        Jc = "function" == typeof window.Uint8Array,
        Kc = function(a, b) {
            a.l = null;
            b || (b = []);
            a.C = void 0;
            a.m = -1;
            a.j = b;
            a: {
                if (a.j.length) {
                    b = a.j.length - 1;
                    var c = a.j[b];
                    if (c && "object" == typeof c && !_.y(c) && !(Jc && c instanceof window.Uint8Array)) {
                        a.v = b - a.m;
                        a.o = c;
                        break a
                    }
                }
                a.v = Number.MAX_VALUE
            }
            a.A = {}
        },
        Lc = [],
        Mc = function(a, b) {
            if (b < a.v) {
                b += a.m;
                var c = a.j[b];
                return c === Lc ? a.j[b] = [] : c
            }
            if (a.o) return c = a.o[b], c === Lc ? a.o[b] = [] : c
        },
        Nc = function(a, b, c) {
            if (b < a.v) a.j[b + a.m] = c;
            else {
                var d = a.v + a.m;
                a.j[d] || (a.o = a.j[d] = {});
                a.o[b] = c
            }
        },
        Oc = function(a, b, c, d) {
            c != d ? Nc(a, b, c) : a.j[b + a.m] = null
        },
        Qc = function(a, b, c) {
            a.l || (a.l = {});
            var d = c ? Pc(c) : c;
            a.l[b] = c;
            Nc(a, b, d)
        },
        Rc = function(a) {
            if (a.l)
                for (var b in a.l) {
                    var c = a.l[b];
                    if (_.y(c))
                        for (var d = 0; d < c.length; d++) c[d] && Pc(c[d]);
                    else c && Pc(c)
                }
        },
        Pc = function(a) {
            Rc(a);
            return a.j
        };
    Ic.prototype.toString = function() {
        Rc(this);
        return this.j.toString()
    };
    var Sc = function(a) {
        Kc(this, a)
    };
    _.Qa(Sc, Ic);
    var Tc = function(a) {
        Kc(this, a)
    };
    _.Qa(Tc, Ic);
    var Uc = function(a) {
        Kc(this, a)
    };
    _.Qa(Uc, Ic);
    var Wc = function() {
        this.j = "";
        this.l = Vc
    };
    Wc.prototype.hb = !0;
    Wc.prototype.Oa = function() {
        return this.j
    };
    var Xc = function(a) {
            if (a instanceof Wc && a.constructor === Wc && a.l === Vc) return a.j;
            Ga(a);
            return "type_error:TrustedResourceUrl"
        },
        Vc = {};
    var Zc = function() {
        this.eb = "";
        this.Cc = Yc
    };
    Zc.prototype.hb = !0;
    Zc.prototype.Oa = function() {
        return this.eb
    };
    var $c = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Yc = {},
        ad = function(a) {
            var b = new Zc;
            b.eb = a;
            return b
        };
    ad("about:blank");
    var cd = function(a) {
            bd();
            var b = new Wc;
            b.j = a;
            return b
        },
        bd = Ea;
    var dd, fd, gd, hd, id, jd, kd, ld, md;
    dd = function(a) {
        try {
            return !!a && null != a.location.href && Xb(a, "foo")
        } catch (b) {
            return !1
        }
    };
    _.ed = function(a, b) {
        var c = a.createElement("script");
        b = cd(b);
        c.src = Xc(b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    fd = function(a, b) {
        if (!(1E-4 > Math.random())) {
            var c = Math.random();
            if (c < b) {
                try {
                    var d = new window.Uint32Array(1);
                    _.t.crypto.getRandomValues(d);
                    c = d[0] / 65536 / 65536
                } catch (e) {
                    c = Math.random()
                }
                return a[Math.floor(c * a.length)]
            }
        }
        return null
    };
    _.D = function(a, b, c) {
        for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    };
    gd = function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
        return !0
    };
    hd = function(a) {
        var b = 0;
        _.D(a, function() {
            b++
        });
        return b
    };
    id = function(a) {
        var b = [];
        _.D(a, function(a, d) {
            b.push(d)
        });
        return b
    };
    jd = function(a) {
        var b = [];
        _.D(a, function(a) {
            b.push(a)
        });
        return b
    };
    kd = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    ld = function() {
        return /^true$/.test("false")
    };
    md = function(a, b) {
        try {
            for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !!b;
                case "http:":
                    return !1
            }
        } catch (d) {}
        return !0
    };
    _.nd = function(a) {
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec((0, window.decodeURIComponent)(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var pd;
    _.od = !_.ac || 9 <= Number(uc);
    pd = !dc && !_.ac || _.ac && 9 <= Number(uc) || dc && _.tc("1.9.1");
    _.ac && _.tc("9");
    var qd = _.ac || $b || ec;
    var rd = function(a, b) {
        this.x = _.u(a) ? a : 0;
        this.y = _.u(b) ? b : 0
    };
    rd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    rd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    rd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.sd = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.h = _.sd.prototype;
    _.h.Oc = function() {
        return this.width * this.height
    };
    _.h.aspectRatio = function() {
        return this.width / this.height
    };
    _.h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var wd, xd, zd, Ad, ud;
    _.vd = function(a) {
        return a ? new _.td(ud(a)) : Ua || (Ua = new _.td)
    };
    wd = function(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new _.sd(a.clientWidth, a.clientHeight)
    };
    xd = function(a) {
        return a.scrollingElement ? a.scrollingElement : ec || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    };
    _.yd = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    zd = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    Ad = function(a) {
        return pd && void 0 != a.children ? a.children : _.ha(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    ud = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.td = function(a) {
        this.j = a || _.t.document || window.document
    };
    _.td.prototype.l = ba(6);
    _.Bd = function(a) {
        a = a.j;
        return a.parentWindow || a.defaultView
    };
    var Dd;
    _.Cd = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    Dd = function(a) {
        return new _.Cd(a.top, a.right, a.bottom, a.left)
    };
    _.Cd.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Cd.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Cd.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Gd;
    _.Ed = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    _.Fd = function(a) {
        return new _.Cd(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    Gd = function(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new _.Ed(c, e, d - c, a - e)
        }
        return null
    };
    _.Ed.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.Ed.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.Ed.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Hd = function(a, b) {
            var c = ud(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        Id = function(a, b) {
            return Hd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        Jd = function(a) {
            try {
                var b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            _.ac && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Kd = function(a) {
            if (_.ac && !(8 <= Number(uc))) return a.offsetParent;
            var b = ud(a),
                c = Id(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = Id(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        Ld = function(a) {
            var b = ud(a),
                c = new rd(0, 0);
            var d = b ? ud(b) : window.document;
            d = !_.ac || 9 <= Number(uc) || "CSS1Compat" == _.vd(d).j.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = Jd(a);
            d = _.vd(b).j;
            b = xd(d);
            d = d.parentWindow || d.defaultView;
            b = _.ac && _.tc("10") && d.pageYOffset != b.scrollTop ? new rd(b.scrollLeft, b.scrollTop) : new rd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Md = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = ec && !b && !c;
            return _.u(b) && !d || !a.getBoundingClientRect ? new _.sd(b, c) : (a = Jd(a), new _.sd(a.right - a.left, a.bottom - a.top))
        };
    var Nd = function(a) {
            return function() {
                return a
            }
        },
        Od = function(a) {
            var b = arguments,
                c = b.length;
            return function() {
                for (var a = 0; a < c; a++)
                    if (!b[a].apply(this, arguments)) return !1;
                return !0
            }
        },
        Pd = function(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        },
        Qd = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        Rd = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var a = b;
                    b = null;
                    a()
                }
            }
        },
        Sd = function(a, b, c) {
            var d = 0,
                e = !1,
                f = [],
                g = function() {
                    d = 0;
                    e && (e = !1, k())
                },
                k = function() {
                    d = _.t.setTimeout(g, b);
                    a.apply(c, f)
                };
            return function(a) {
                f = arguments;
                d ? e = !0 : k()
            }
        };
    var ca;
    ca = Qd(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.E = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, da(d)), !0) : a.attachEvent ? (a.attachEvent("on" + b, c), !0) : !1
    };
    _.Td = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, da(void 0)) : a.detachEvent && a.detachEvent("on" + b, c)
    };
    var Ud = {
            "AMP-CAROUSEL": "ac",
            "AMP-FX-FLYING-CARPET": "fc",
            "AMP-LIGHTBOX": "lb",
            "AMP-STICKY-AD": "sa"
        },
        Vd = function(a) {
            a = a || _.t;
            var b = a.context;
            if (!b) try {
                b = a.parent.context
            } catch (c) {}
            try {
                if (b && "pageViewId" in b && "canonicalUrl" in b) return b
            } catch (c) {}
            return null
        },
        Wd = function() {
            var a = Vd();
            return a && a.initialIntersection ? a.initialIntersection : null
        },
        Xd = function() {
            var a = Wd();
            return a && _.z(a.rootBounds) ? new _.sd(a.rootBounds.width, a.rootBounds.height) : null
        },
        Yd = function() {
            var a = Vd();
            var b;
            return (a = a && (b = a.initialLayoutRect) && _.m(b.top) && _.m(b.left) && _.m(b.width) && _.m(b.height) ? new _.Ed(b.left, b.top, b.width, b.height) : null) ? new rd(a.left, a.top) : (b = Wd()) && _.z(b.rootBounds) ? new rd(b.rootBounds.left + b.boundingClientRect.left, b.rootBounds.top + b.boundingClientRect.top) : null
        },
        Zd = function(a) {
            a = a || Vd();
            if (!a) return null;
            a = a.master;
            return dd(a) ? a : null
        },
        $d = !!Vd() && _.t != _.t.top;
    _.ae = function(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        if (c) {
            var e = function(a) {
                c(a);
                _.Td(d, "load", e);
                _.Td(d, "error", e)
            };
            _.E(d, "load", e);
            _.E(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d);
        return d
    };
    var be = Object.prototype.hasOwnProperty,
        ce = function(a, b) {
            for (var c in a) be.call(a, c) && b.call(void 0, a[c], c, a)
        },
        ee = function() {
            var a = de();
            "google_onload_fired" in a || (a.google_onload_fired = !1, _.E(a, "load", function() {
                a.google_onload_fired = !0
            }))
        },
        fe = !!window.google_async_iframe_id,
        ge = fe && window.parent || window,
        de = function() {
            if (fe && !dd(ge)) {
                var a = "." + Ra.domain;
                try {
                    for (; 2 < a.split(".").length && !dd(ge);) Ra.domain = a = a.substr(a.indexOf(".") + 1), ge = window.parent
                } catch (b) {}
                dd(ge) || (ge = window)
            }
            return ge
        },
        he = function() {
            var a, b = window.ActiveXObject;
            if (window.navigator.plugins && window.navigator.mimeTypes.length) {
                if ((a = window.navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (window.navigator.userAgent && 0 <= window.navigator.userAgent.indexOf("Windows CE")) {
                    var c = 3;
                    for (a = 1; a;) try {
                        a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                    } catch (d) {
                        a = null
                    }
                    return c.toString()
                }
                if (_.Rb()) {
                    a = null;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        c = 0;
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === c) return c.toString()
                        }
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
                }
            }
            return "0"
        };
    var ie = null,
        je = function(a, b) {
            for (var c = 0, d = a, e = 0; a && a != a.parent;)
                if (a = a.parent, e++, dd(a)) d = a, c = e;
                else if (b) break;
            return {
                nb: d,
                level: c
            }
        };
    var ke = function(a) {
            return !!a && a.top == a
        },
        le = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (ke(a)) return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        me = function(a, b) {
            var c = {};
            c.zd = je(a, !1).nb;
            var d = c.zd;
            var e = d.location.href;
            if (d == d.top) e = {
                url: e,
                Jb: !0
            };
            else {
                var f = !1,
                    g = d.document;
                g && g.referrer && (e = g.referrer, d.parent == d.top && (f = !0));
                (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 == e.indexOf(d) && (f = !1, e = d);
                e = {
                    url: e,
                    Jb: f
                }
            }
            c.Ad = e;
            c.dd = le(de(), b, a.google_ad_width, a.google_ad_height);
            a = c.dd;
            b = c.Ad.Jb;
            e = de();
            e = e.top == e ? 0 : dd(e.top) ? 1 : 2;
            f = 4;
            a || 1 != e ? a || 2 != e ? a && 1 == e ? f = 7 : a && 2 == e && (f = 8) : f = 6 : f = 5;
            b && (f |= 16);
            c.cd = "" + f;
            return c
        };
    _.ne = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    var oe = function() {
            return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
        },
        pe = function() {
            return !(!oe() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))) && !oe()
        };
    var se, te;
    _.qe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.re = function(a) {
        return a ? (0, window.decodeURI)(a) : a
    };
    se = /#|$/;
    te = function(a, b) {
        var c = a.search(se);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return (0, window.decodeURIComponent)(a.substr(d, e - d).replace(/\+/g, " "))
    };
    var ue = !1,
        ve = "",
        we = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (window.navigator.plugins && window.navigator.plugins.length) {
            var a = window.navigator.plugins["Shockwave Flash"];
            if (a && (ue = !0, a.description)) {
                ve = we(a.description);
                return
            }
            if (window.navigator.plugins["Shockwave Flash 2.0"]) {
                ue = !0;
                ve = "2.0.0.11";
                return
            }
        }
        if (window.navigator.mimeTypes && window.navigator.mimeTypes.length && (a = window.navigator.mimeTypes["application/x-shockwave-flash"], ue = !(!a || !a.enabledPlugin))) {
            ve = we(a.enabledPlugin.description);
            return
        }
        try {
            var b = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            ue = !0;
            ve = we(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            ue = !0;
            ve = "6.0.21";
            return
        } catch (c) {}
        try {
            b = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), ue = !0, ve = we(b.GetVariable("$version"))
        } catch (c) {}
    })();
    _.xe = ue;
    _.ye = ve;
    var ze = function() {
        if (hc) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(_.Fb)) ? a[1] : "0"
        }
        return gc ? (a = /10[_.][0-9_.]+/, (a = a.exec(_.Fb)) ? a[0].replace(/_/g, ".") : "10") : _.ic ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.Fb)) ? a[1] : "") : jc || kc || lc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.Fb)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var Ae = function(a) {
            if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
                a = a[0].toLowerCase();
                for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
                switch (b) {
                    case 1967261364:
                        return 0;
                    case 3147493546:
                        return 1;
                    case 1567346461:
                        return 2;
                    case 2183041838:
                        return 3;
                    case 763236279:
                        return 4;
                    case 1342279801:
                        return 5;
                    case 526831769:
                        return 6;
                    case 352806002:
                        return 7;
                    case 2755048925:
                        return 8;
                    case 3306848407:
                        return 9;
                    case 2207000920:
                        return 10;
                    case 484037040:
                        return 11;
                    case 3506871055:
                        return 12;
                    case 672143848:
                        return 13;
                    case 2528751226:
                        return 14;
                    case 2744854768:
                        return 15;
                    case 3703278665:
                        return 16;
                    case 2014749173:
                        return 17;
                    case 133063824:
                        return 18;
                    case 2749334602:
                        return 19;
                    case 3131239845:
                        return 20;
                    case 2074086763:
                        return 21;
                    case 795772493:
                        return 22;
                    case 290857819:
                        return 23;
                    case 3035947606:
                        return 24;
                    case 2983138003:
                        return 25;
                    case 2197138676:
                        return 26;
                    case 4216016165:
                        return 27;
                    case 239803524:
                        return 28;
                    case 975993579:
                        return 29;
                    case 1794940339:
                        return 30;
                    case 1314429186:
                        return 31;
                    case 1643618937:
                        return 32;
                    case 497159982:
                        return 33
                }
            }
            return -1
        },
        Be = function(a) {
            if (!a.length) return 0;
            for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
            for (c = a.length - 1; 0 <= c; c--) {
                var d = Ae(a[c]);
                0 <= d && (b[33 - d] = 1)
            }
            return (0, window.parseInt)(b.join(""), 2)
        };
    var Ce = function(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var De = function(a, b) {
            this.j = a;
            this.l = b
        },
        Ee = function(a, b, c) {
            this.url = a;
            this.nb = b;
            this.Hb = !!c;
            this.depth = _.m(void 0) ? void 0 : null
        },
        Ge = function(a) {
            a = (this.l = a || _.t) || _.t;
            this.m = a.top == a ? 1 : dd(a.top) ? 2 : 3;
            3 != this.m && Date.parse(_.t.top.document.lastModified);
            this.j = Fe(this.l)
        },
        He = function(a, b) {
            for (var c = 0, d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && _.re(a.match(_.qe)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++)
                if (a = null != b[f] && _.re(b[f].match(_.qe)[3] || null) || "", c *= 4, a)
                    if (d && a == d) c += 3;
                    else {
                        a: {
                            var g = b[f];
                            for (var k = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(tpc|pagead2).googlesyndication\.com(\:\d+)?($|(\/.*))/i, /^https?:\/\/www.googletagservices\.com(\:\d+)?($|(\/.*))/i], l = 0; l < k.length; ++l)
                                if (k[l].test(g)) {
                                    g = !0;
                                    break a
                                }
                            g = !1
                        }
                        g ? c += 2 : a && 0 <= Ae(a) && (c += 1)
                    }
            return c
        },
        Fe = function(a) {
            var b = a || _.t,
                c = [],
                d = null;
            do {
                var e = b;
                if (dd(e)) {
                    var f = e.location.href;
                    d = e.document && e.document.referrer || null
                } else f = d, d = null;
                c.push(new Ee(f || "", e));
                try {
                    b = e.parent
                } catch (g) {
                    b = null
                }
            } while (b && e != b);
            b = 0;
            for (e = c.length - 1; b <= e; ++b) c[b].depth = e - b;
            e = a || _.t;
            if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)
                for (b = 1; b < c.length; ++b) a = c[b], a.url || (a.url = e.location.ancestorOrigins[b - 1] || "", a.Hb = !0);
            return c
        };
    var Ie = function(a, b, c, d, e) {
            this.A = c || 4E3;
            this.m = a || "&";
            this.C = b || ",$";
            this.o = _.u(d) ? d : "trn";
            this.F = e || null;
            this.v = !1;
            this.l = {};
            this.D = 0;
            this.j = []
        },
        Je = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Le = function(a, b, c, d, e) {
            var f = [];
            _.D(a, function(a, k) {
                (a = Ke(a, b, c, d, e)) && f.push(k + "=" + a)
            });
            return f.join(b)
        },
        Ke = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(Ke(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? (0, window.encodeURIComponent)(Le(a, b, c, d, e + 1)) : "...";
            return (0, window.encodeURIComponent)(String(a))
        },
        Me = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = Je(c, d)
        },
        Oe = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = Ne(a) - d.length - 0;
            if (0 > e) return "";
            a.j.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.j.length; f++)
                for (var g = a.j[f], k = a.l[g], l = 0; l < k.length; l++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    var n = Le(k[l], a.m, a.C);
                    if (n) {
                        n = c + n;
                        if (e >= n.length) {
                            e -= n.length;
                            b += n;
                            c = a.m;
                            break
                        } else a.v && (c = e, n[c - 1] == a.m && --c, b += n.substr(0, c), c = a.m, e = 0);
                        d = null == d ? g : d
                    }
                }
            f = "";
            a.o && null != d && (f = c + a.o + "=" + (a.F || d));
            return b + f + ""
        },
        Ne = function(a) {
            if (!a.o) return a.A;
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return a.A - a.o.length - b - a.m.length - 1
        };
    var Pe = function(a, b, c, d, e, f) {
        if ((d ? a.v : Math.random()) < (e || a.j)) try {
            if (c instanceof Ie) var g = c;
            else g = new Ie, _.D(c, function(a, b) {
                var c = g,
                    d = c.D++;
                a = Je(b, a);
                c.j.push(d);
                c.l[d] = a
            });
            var k = Oe(g, a.o, a.l, a.m + b + "&");
            k && ("undefined" === typeof f ? _.ae(_.t, k, void 0) : _.ae(_.t, k, f))
        } catch (l) {}
    };
    var Qe, Re, Se, Te;
    Qe = null;
    Re = function() {
        if (null === Qe) {
            Qe = "";
            try {
                var a = _.t.top.location.hash;
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Qe = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Qe
    };
    Se = function(a, b, c) {
        "" != b && (c ? a.j.hasOwnProperty(c) && (a.j[c] = b) : a.l[b] = !0)
    };
    Te = function(a, b) {
        return a.j.hasOwnProperty(b) ? a.j[b] : ""
    };
    _.Ve = function() {
        var a = Ue,
            b = [];
        _.D(a.l, function(a, d) {
            b.push(d)
        });
        _.D(a.j, function(a) {
            "" != a && b.push(a)
        });
        return b
    };
    var We = function() {
            var a = _.t.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
        },
        Xe = function() {
            var a = _.t.performance;
            return a && a.now ? a.now() : null
        };
    var Ye = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = e
    };
    var Ze = _.t.performance,
        $e = !!(Ze && Ze.mark && Ze.measure && Ze.clearMarks),
        af = Qd(function() {
            var a;
            if (a = $e) a = Re(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        bf = function(a, b) {
            this.events = [];
            this.l = b || _.t;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = af() || (null != c ? c : Math.random() < a)
        },
        cf = function(a) {
            a && af() && (Ze.clearMarks("goog_" + a.uniqueId + "_start"), Ze.clearMarks("goog_" + a.uniqueId + "_end"))
        },
        df;
    bf.prototype.start = function(a, b) {
        if (!this.j) return null;
        var c = Xe() || We();
        a = new Ye(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        af() && Ze.mark(b);
        return a
    };
    df = function(a, b) {
        if (a.j && _.m(b.value)) {
            var c = Xe() || We();
            b.duration = c - b.value;
            c = "goog_" + b.uniqueId + "_end";
            af() && Ze.mark(c);
            a.j && a.events.push(b)
        }
    };
    _.ef = function(a, b, c) {
        var d = Xe();
        d && a.j && (b = new Ye(b, 9, d, 0, c), a.j && a.events.push(b))
    };
    var ff = function(a, b, c, d) {
            this.m = a;
            this.A = b;
            this.o = c;
            this.v = this.l;
            this.j = void 0 === d ? null : d
        },
        hf = function(a, b) {
            try {
                if (a.j && a.j.j) {
                    var c = a.j.start((192).toString(), 3);
                    var d = b();
                    df(a.j, c)
                } else d = b()
            } catch (f) {
                b = a.o;
                try {
                    cf(c);
                    var e = gf(f);
                    b = a.v.call(a, 192, e, void 0, void 0)
                } catch (g) {
                    a.l(217, g)
                }
                if (!b) throw f;
            }
            return d
        },
        kf = function(a) {
            var b = jf;
            return function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                return hf(b, function() {
                    return a.apply(void 0, d)
                })
            }
        };
    ff.prototype.l = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new Ie;
            f.v = !0;
            Me(f, 1, "context", a);
            b.error && b.meta && b.id || (b = gf(b));
            b.msg && Me(f, 2, "msg", b.msg.substring(0, 512));
            b.file && Me(f, 3, "file", b.file);
            0 < b.line && Me(f, 4, "line", b.line);
            var g = b.meta || {};
            if (d) try {
                d(g)
            } catch (J) {}
            b = [g];
            f.j.push(5);
            f.l[5] = b;
            var k = Fe(),
                l = new Ee(_.t.location.href, _.t, !1),
                n = k.length - 1;
            for (b = n; 0 <= b; --b) {
                var p = k[b];
                if (p.url && !p.Hb) {
                    l = p;
                    break
                }
            }
            p = null;
            var v = k.length && k[n].url;
            0 != l.depth && v && (p = k[n]);
            var x = new De(l, p);
            x.l && Me(f, 6, "top", x.l.url || "");
            Me(f, 7, "url", x.j.url || "");
            Pe(this.m, e, f, !1, c)
        } catch (J) {
            try {
                Pe(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: lf(J),
                    url: x.j.url
                }, !1, c)
            } catch (La) {}
        }
        return this.o
    };
    var gf = function(a) {
            return new mf(lf(a), a.fileName, a.lineNumber)
        },
        lf = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            a.stack && (b = nf(a.stack, b));
            return b
        },
        nf = function(a, b) {
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                return a.replace(/\n */g, "\n")
            } catch (d) {
                return b
            }
        },
        mf = function(a, b, c) {
            Ce.call(this, Error(a), {
                message: a,
                file: void 0 === b ? "" : b,
                line: void 0 === c ? -1 : c
            })
        };
    ua(mf, Ce);
    var of , pf; of = function(a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    };
    pf = function(a) {
        try {
            var b = of (a.document);
            return new _.sd(b.clientWidth, b.clientHeight)
        } catch (c) {
            return new _.sd(-12245933, -12245933)
        }
    };
    _.qf = function(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var rf;
    rf = {};
    _.sf = (rf[1] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/backdrop/resources/content_binder.js", rf);
    dc || ec || _.ac && _.tc(11);
    var tf, uf;
    tf = function(a, b, c, d, e, f) {
        this.m = Dd(a);
        this.l = Dd(b);
        this.o = c;
        this.j = Dd(d);
        this.v = e;
        this.A = f
    };
    _.vf = function(a, b, c, d) {
        if (c) {
            var e = window,
                f = e.screenX || e.screenLeft || 0,
                g = e.screenY || e.screenTop || 0;
            c = e.outerWidth || window.document.documentElement.clientWidth || 0;
            e = e.outerHeight || window.document.documentElement.clientHeight || 0;
            c = new _.Cd(g, f + c, g + e, f)
        } else f = window.screenX || window.screenLeft || 0, g = window.screenY || window.screenTop || 0, c = window.outerWidth || window.document.documentElement.clientWidth || 0, e = window.outerHeight || window.document.documentElement.clientHeight || 0, c = b ? new _.Cd(g, c + f, e + g, f) : new _.Cd(g, c - f, e - g, f);
        var k = Ld(a);
        if ("none" != Id(a, "display")) e = Md(a);
        else {
            e = a.style;
            f = e.display;
            g = e.visibility;
            var l = e.position;
            e.visibility = "hidden";
            e.position = "absolute";
            e.display = "inline";
            var n = Md(a);
            e.display = f;
            e.position = l;
            e.visibility = g;
            e = n
        }
        g = new _.Ed(k.x, k.y, e.width, e.height);
        e = _.Fd(g);
        f = String(Id(a, "zIndex"));
        if (b) {
            k = new _.Ed(0, 0, window.Infinity, window.Infinity);
            d = new _.Ed(0, 0, window.Infinity, window.Infinity);
            b = _.vd(a);
            l = b.j.body;
            n = b.j.documentElement;
            var p = !0;
            a = Kd(a);
            for (var v = 0; a; a = Kd(a), v++) {
                var x = Hd(a, "overflow") || (a.currentStyle ? a.currentStyle.overflow : null) || a.style && a.style.overflow;
                if (_.ac && 0 == a.clientWidth || ec && 0 == a.clientHeight && a == l || a == l || a == n) p = !1;
                else {
                    var J = Ld(a);
                    J.x += a.clientLeft;
                    J.y += a.clientTop;
                    J = new _.Ed(J.x, J.y, a.clientWidth, a.clientHeight);
                    "visible" != x && d && (d = Gd(d, J));
                    "hidden" == x ? p && k && 100 > v && (k = Gd(k, J)) : p = !1
                }
            }
            k && (l = window, a = l.document, l = pf(l), a = new _.sd(Math.max(l.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), Math.max(l.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight))), k = uf(k, new _.Ed(0, 0, a.width, a.height)));
            d && (a = xd(b.j), b = wd(_.Bd(b) || window), d = uf(new _.Ed(d.left, d.top, d.width, d.height), new _.Ed(a.scrollLeft, a.scrollTop, b.width, b.height)));
            a = k;
            b = d
        } else {
            b = new _.Cd(0, window.Infinity, window.Infinity, 0);
            l = _.vd(a);
            p = l.j.body;
            v = l.j.documentElement;
            for (n = xd(l.j); a = Kd(a);) _.ac && 0 == a.clientWidth || ec && 0 == a.clientHeight && a == p || a == p || a == v || "visible" == Id(a, "overflow") || (x = Ld(a), J = new rd(a.clientLeft, a.clientTop), x.x += J.x, x.y += J.y, b.top = Math.max(b.top, x.y), b.right = Math.min(b.right, x.x + a.clientWidth), b.bottom = Math.min(b.bottom, x.y + a.clientHeight), b.left = Math.max(b.left, x.x));
            a = n.scrollLeft;
            n = n.scrollTop;
            b.left = Math.max(b.left, a);
            b.top = Math.max(b.top, n);
            l = wd(_.Bd(l) || window);
            b.right = Math.min(b.right, a + l.width);
            b.bottom = Math.min(b.bottom, n + l.height);
            b = (a = 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null) ? new _.Ed(a.left, a.top, a.right - a.left, a.bottom - a.top) : null;
            d ? (a = d.boundingClientRect, a = new _.Ed(k.x - a.left, k.y - a.top, d.rootBounds.width, d.rootBounds.height)) : a = b
        }
        b = b ? Gd(g, b) : null;
        k = d = 0;
        b && (new _.sd(b.width, b.height)).Oc() && (d = b.width / g.width, k = b.height / g.height);
        b = new _.Cd(0, 0, 0, 0);
        if (l = a)(g = Gd(g, a)) ? (n = _.Fd(a), p = _.Fd(g), l = p.right != n.left && n.right != p.left, n = p.bottom != n.top && n.bottom != p.top, l = (0 != g.width || l) && (0 != g.height || n)) : l = !1;
        l && (b = new _.Cd(Math.max(e.top - a.top, 0), Math.max(a.left + a.width - e.right, 0), Math.max(a.top + a.height - e.bottom, 0), Math.max(e.left - a.left, 0)));
        return new tf(c, e, f, b, d, k)
    };
    uf = function(a, b) {
        return (a = Gd(a, b)) && 0 < a.width && 0 < a.height ? a : null
    };
    _.wf = function(a, b, c, d) {
        var e = c;
        e && (e = "?" + e);
        b = "//tpc.googlesyndication.com/safeframe/" + b + "/html/container.html" + e;
        e = a;
        for (var f = 0; e != e.parent;) f++, e = e.parent;
        (e = f) && (b += (c ? "&" : "?") + "n=" + e);
        return (d || md(a) ? "https:" : "http:") + b
    };
    var yf;
    _.xf = function(a) {
        for (var b = a.o, c = b.j.length - 1; 0 <= c; c--) {
            var d = b.j[c];
            d.l ? (d.m.style.removeProperty(d.j), d.m.style.setProperty(d.j, String(d.o), d.v)) : d.m.style[d.j] = d.o
        }
        b.j.length = 0;
        a.L = 0;
        a.j && (a.v = _.vf(a.j, a.K, a.I))
    };
    yf = function(a) {
        if (100 != a.status) {
            2 == a.L && _.xf(a);
            window.clearTimeout(a.O);
            a.O = -1;
            a.C = 3;
            if (a.l) {
                var b = a.l;
                b.l || (b.l = !0, b.v());
                a.l = null
            }
            a.F && a.j ? a.F.unobserve(a.j) : (_.Td(window, "resize", a.N), _.Td(window, "scroll", a.N));
            if (b = a.j) {
                b = a.A;
                a: {
                    var c = a.j;
                    var d;
                    if (qd && !(_.ac && _.tc("9") && !_.tc("10") && _.t.SVGElement && c instanceof _.t.SVGElement) && (d = c.parentElement)) {
                        c = d;
                        break a
                    }
                    d = c.parentNode;c = _.z(d) && 1 == d.nodeType ? d : null
                }
                b = b == c
            }
            b && a.A.removeChild(a.j);
            a.j = null;
            a.A = null;
            a.F && (a.F.disconnect(), a.F = null);
            a.status = 100
        }
    };
    var zf = function(a, b) {
        this.l = a;
        this.j = b || []
    };
    zf.prototype.getMessageId = function() {
        return this.l
    };
    zf.prototype.getMessageArgs = function() {
        return this.j
    };
    var Af = function(a, b, c, d, e) {
        this.l = new Date;
        this.A = d || null;
        this.v = c || null;
        this.m = a;
        this.o = b;
        this.j = e || null
    };
    _.h = Af.prototype;
    _.h.getSlot = function() {
        return this.A
    };
    _.h.getService = function() {
        return this.v
    };
    _.h.getLevel = function() {
        return this.m
    };
    _.h.getTimestamp = function() {
        return this.l
    };
    _.h.getMessage = function() {
        return this.o
    };
    _.h.getReference = function() {
        return this.j
    };
    var Bf = ["Debug", "Info", "Warning", "Error", "Fatal"];
    Af.prototype.toString = function() {
        var a = this.l.toTimeString() + ": " + Bf[this.m] + ": " + this.o;
        this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
        return a
    };
    var Df, Ef, Ff;
    _.Cf = function() {
        return _.t.googletag || (_.t.googletag = {})
    };
    Df = function(a, b) {
        var c = _.Cf();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    Ef = function(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    };
    Ff = function(a, b) {
        a.addEventListener ? a.addEventListener("beforeunload", b, !1) : a.attachEvent && a.attachEvent("onbeforeunload", b)
    };
    var Gf = function() {
        this.j = []
    };
    Gf.prototype.getAllEvents = function() {
        return this.j
    };
    Gf.prototype.getEventsByService = function(a) {
        return Hf(this, function(b) {
            return b.getService() === a
        })
    };
    Gf.prototype.getEventsBySlot = function(a) {
        return Hf(this, function(b) {
            return b.getSlot() === a
        })
    };
    Gf.prototype.getEventsByLevel = function(a) {
        return Hf(this, function(b) {
            return b.getLevel() >= a
        })
    };
    var Hf = function(a, b) {
        for (var c = [], d = 0; d < a.j.length; ++d) b(a.j[d]) && c.push(a.j[d]);
        return c
    };
    Gf.prototype.log = function(a, b, c, d, e) {
        a = new Af(a, b, c, d, e);
        this.j.push(a);
        return a
    };
    Gf.prototype.info = function(a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    Gf.prototype.G = function(a, b, c, d) {
        return this.log(2, a, b, c, d)
    };
    Gf.prototype.error = function(a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    var If = function() {
        var a = _.Cf();
        return a.debug_log || (a.debug_log = new Gf)
    };
    Df("getEventLog", If);
    var Jf = {
        1: "pagead2.googlesyndication.com",
        2: "pubads.g.doubleclick.net",
        3: "securepubads.g.doubleclick.net",
        7: 0,
        10: 0,
        13: 1500,
        16: 0,
        17: 0,
        20: 0,
        23: .001,
        24: 200,
        27: 0,
        28: 0,
        29: 0,
        33: "pagead2.googlesyndication.com",
        34: 0,
        37: 0,
        38: .001,
        47: 0,
        53: "",
        54: 0,
        57: 0,
        58: 0,
        159: 0,
        60: 0,
        63: 0,
        65: 0,
        66: 0,
        67: 0,
        68: 0,
        69: 0,
        71: 0,
        73: 0,
        74: 0,
        75: "",
        161: 0,
        162: 0,
        163: "",
        76: "",
        77: 0,
        78: 0,
        88: 0,
        79: 0,
        81: 0,
        83: 0,
        84: 0,
        85: 0,
        87: 0,
        89: 0,
        90: 0,
        91: 0,
        92: 0,
        93: 0,
        94: 0,
        95: 0,
        96: 0,
        97: 0,
        98: 0,
        99: 0,
        101: 0,
        103: 0,
        104: "/pagead/js/rum.js",
        105: 0,
        106: "",
        107: "",
        110: 0,
        113: 0,
        114: 0,
        115: 0,
        116: 0,
        117: 0,
        118: 0,
        123: 0,
        120: 0,
        121: 0,
        124: 0,
        122: 0,
        125: 0,
        126: 0,
        127: 0,
        129: 0,
        130: 0,
        131: "",
        132: 0,
        156: 0,
        133: 0,
        134: 0,
        135: 0,
        136: 0,
        137: 0,
        138: "",
        143: 0,
        144: 0,
        141: 1,
        145: 0,
        151: 0,
        157: 0,
        158: 0,
        150: "",
        153: 0,
        154: !1,
        155: !1,
        160: "",
        152: []
    };
    Jf[6] = md(window);
    Jf[49] = (new Date).getTime();
    Jf[36] = ld();
    Jf[46] = ld();
    Jf[148] = ld();
    _.F = function() {
        this.j = Pb(Jf)
    };
    _.F.prototype.get = function(a) {
        return this.j[a]
    };
    _.F.prototype.set = function(a, b) {
        this.j[a] = b
    };
    Fa(_.F);
    var Kf = _.F.u().j,
        Lf = _.Cf(),
        Mf = Lf._vars_,
        Nf;
    for (Nf in Mf) Kf[Nf] = Mf[Nf];
    Lf._vars_ = Kf;
    var Ue, Of, Pf, Qf, G, Sf, Uf, Tf, Yf, Zf, $f, ag, bg, cg, dg, eg, fg, ig, Wf, jg, kg, lg, pg, qg, rg, sg, ug, vg, wg, xg, yg, zg, Ag, Bg, Cg, Dg, Eg, Fg, Hg, Ig, Jg, Kg, Lg, Ng, Og, Pg, Qg, Rg, Sg, Ug, Vg, Wg, Xg, Yg, Zg, bh, dh, eh, fh, hh, jh, lh, mh, nh, oh, ph, qh, sh, th, uh, vh, wh, xh, yh, zh, Ah, Bh, Ch, Eh, Fh, Hh, Ih, Kh, Lh, Mh, Nh, Oh, Ph, Sh, Th, Vh, Wh, Xh, ai, bi, ci, di, fi, gi, hi, ii, ji, ki, li, mi, ni, oi, yi, zi, Ai, Bi, Ci, Di, Ei, Fi, Gi, Hi, Ii, Ji, Mi, Oi, Pi, Qi, Ri, Ti, Vi, Yi, Zi, $i, aj, bj, cj, ej, fj, gj, hj, ij, jj, kj, lj, mj, nj, pj, rj;
    Ue = new function() {
        this.l = {};
        this.j = {};
        for (var a = [], b = 0, c = a.length; b < c; ++b) this.j[a[b]] = ""
    };
    Of = [];
    Pf = !1;
    Qf = !(!_.t.JSON || !_.t.JSON.parse) && (!_.ac || _.tc(10)) && (!$b || _.tc(12));
    _.Rf = {};
    G = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = new Sf(a, Ue);
        c.U && Tf(d, c.U);
        c.M || Uf(d, b, c.ia, c.Ua);
        c.jb && _.B(jd(a), function(a) {
            _.Rf[a] = !0
        });
        Of.push(d);
        return d
    };
    Sf = function(a, b) {
        this.j = a;
        this.l = b;
        this.o = "exp" + (this[Ja] || (this[Ja] = ++Ka));
        this.A = 0;
        this.m = this.l.j[this.o] = "";
        this.v = !1
    };
    Uf = function(a, b, c, d) {
        c = void 0 === c ? [] : c;
        d = void 0 === d ? !1 : d;
        if (!a.v && Od.apply(a, c)()) {
            var e = jd(a.j),
                f = b;
            .5 < b && 1 >= b && a.m && (f = .5 < b && 1 >= b ? 1 - b : 0);
            c = a.l;
            var g = f * e.length;
            if ((f = a.o) ? c.j.hasOwnProperty(f) && "" == c.j[f] : 1) {
                var k;
                k = (k = Re()) ? (k = k.match(new RegExp("\\b(" + e.join("|") + ")\\b"))) ? k[0] : null : null;
                (e = k ? k : fd(e, g)) && Se(c, e, f)
            }
            a.A = b;
            d && b && (!_.Vf(a) || .5 < b && 1 >= b) && !Pf && !a.is(Wf.B) && (d = hd(a.j), Pf = a.is(Wf.w) || Math.random() * b * d < _.F.u().get(37));
            a.v = !0
        }
    };
    Tf = function(a, b) {
        Nb(a.j, b) && (a.m = b)
    };
    Sf.prototype.is = function(a) {
        return Nb(this.j, a) && a == _.Xf(this)
    };
    _.H = function(a, b) {
        Nb(a.j, b) && Se(a.l, b, a.o)
    };
    _.Vf = function(a) {
        return !Te(a.l, a.o)
    };
    _.Xf = function(a) {
        var b = Te(a.l, a.o);
        if (b) a = b;
        else {
            if (b = a.m == a.m) b = a.A, b = .5 < b && 1 >= b;
            a = b ? a.m : ""
        }
        return a
    };
    Yf = {};
    Zf = {};
    $f = {};
    ag = {};
    bg = {};
    cg = {};
    dg = {};
    eg = {
        B: "108809097",
        w: "108809098"
    };
    fg = {
        B: "108809124",
        w: "108809125"
    };
    _.gg = {
        B: "108809132",
        w: "108809133"
    };
    _.hg = {
        B: "21060612",
        w: "21060613"
    };
    ig = {
        B: "108809141",
        w: "108809140"
    };
    Wf = {
        w: "108809144",
        B: "108809167"
    };
    jg = {
        B: "108809147",
        w: "108809148"
    };
    kg = {
        B: "108809103",
        Qd: "108809107"
    };
    lg = {
        wc: "108809152",
        bc: "108809153",
        ub: "108809154",
        Ja: "108809155"
    };
    _.mg = {
        B: "108809159",
        w: "108809160"
    };
    _.ng = {
        Kd: "21060242",
        Md: "21060244",
        Ld: "21060246",
        Nd: "21060248",
        Pd: "21060250",
        Od: "21060252",
        Ac: "21060254"
    };
    _.og = {
        aa: "21060231",
        Ja: "21060230"
    };
    pg = {
        B: "21060002",
        w: "21060003"
    };
    qg = {
        B: "21060015",
        w: "21060016"
    };
    rg = {
        B: "21060017",
        w: "21060018"
    };
    sg = {
        B: "21060019",
        w: "21060020"
    };
    _.tg = {
        B: "21060000",
        w: "21060001"
    };
    ug = {
        B: "21060013",
        w: "21060014"
    };
    vg = {
        B: "21060063",
        tb: "21060062",
        mc: "21060066"
    };
    wg = {
        B: "21060064",
        w: "21060065"
    };
    xg = {
        B: "21060092",
        w: "21060093"
    };
    yg = {
        B: "21060096",
        w: "21060097"
    };
    zg = {
        B: "21060668",
        Ya: "21060669",
        Za: "21060670"
    };
    Ag = {
        B: "21060674",
        Ya: "21060675",
        Za: "21060676"
    };
    Bg = {
        Ec: "21060671",
        Fc: "21060672",
        Gc: "21060673",
        gc: "21060677",
        hc: "21060678",
        ic: "21060679"
    };
    Cg = {
        B: "21060088",
        w: "21060089",
        fc: "21060094",
        qb: "21060095"
    };
    Dg = {
        B: "21060132",
        w: "21060133"
    };
    Eg = {
        B: "21060116",
        pc: "21060117",
        qc: "21060118"
    };
    Fg = {
        Bc: "21060155",
        dc: "21060157"
    };
    _.Gg = {
        Ke: "21060692",
        $a: "21060693"
    };
    Hg = {
        B: "21060167",
        w: "21060168"
    };
    Ig = {
        oc: "1337"
    };
    Jg = {
        B: "21060608",
        aa: "21060609"
    };
    Kg = {
        B: "21060610",
        aa: "21060611"
    };
    Lg = {
        B: "21060334",
        w: "21060335"
    };
    _.Mg = {
        B: "21060340",
        Hc: "21060341",
        Ic: "21060342",
        Jc: "21060343",
        Kc: "21060344"
    };
    Ng = {
        B: "21060327",
        w: "21060328"
    };
    Og = {
        B: "21060331",
        w: "21060332"
    };
    Pg = {
        B: "21060329",
        w: "21060330"
    };
    Qg = {
        B: "21060325",
        w: "21060326"
    };
    Rg = {
        B: "21060301",
        w: "21060302"
    };
    Sg = {
        B: "21060361",
        w: "21060362"
    };
    Ug = {
        B: "21060377",
        w: "21060378"
    };
    Vg = {
        B: "21060380",
        w: "21060381"
    };
    Wg = {
        B: "21060363",
        w: "21060364"
    };
    Xg = {
        B: "21060213",
        aa: "21060214",
        Xa: "21060215",
        Wa: "21060216"
    };
    Yg = {
        B: "21060217",
        aa: "21060218",
        Xa: "21060219",
        Wa: "21060220"
    };
    Zg = {
        B: "21060494",
        w: "21060495"
    };
    _.$g = {
        B: "21060355",
        w: "21060356"
    };
    _.ah = {
        B: "21060509",
        w: "21060510"
    };
    bh = {
        B: "21060511",
        jc: "21060514",
        uc: "21060515"
    };
    _.ch = {
        B: "21060544",
        lc: "21060545",
        kc: "21060617"
    };
    dh = {
        B: "21060552",
        Va: "21060553",
        bb: "21060554",
        ab: "21060555"
    };
    eh = {
        B: "21060556",
        Va: "21060557",
        bb: "21060558",
        ab: "21060559"
    };
    fh = {
        B: "21060593",
        wb: "21060594",
        zc: "21060595"
    };
    _.gh = {
        B: "21060722",
        Ka: "21060723",
        La: "21060724"
    };
    hh = {
        B: "21060740",
        Ka: "21060741",
        La: "21060742"
    };
    _.ih = {
        B: "21060903",
        w: "21060904"
    };
    jh = {
        B: "21060905",
        w: "21060906"
    };
    _.kh = {
        B: "21060606",
        w: "21060607"
    };
    lh = {
        B: "21060923",
        Ye: "21060924",
        $e: "21060925",
        vb: "21060926",
        Rd: "21060927",
        Ue: "21060928",
        rc: "21060929"
    };
    mh = {
        B: "21060754",
        Hd: "21060755",
        vb: "21060756"
    };
    nh = {
        B: "21060535",
        w: "21060536"
    };
    oh = {
        B: "3313960",
        w: "3313959"
    };
    ph = {
        B: "21060697",
        w: "21060698"
    };
    qh = {
        B: "21060636",
        ec: "21060637",
        Te: "21060638",
        cc: "21060639"
    };
    _.rh = {
        B: "21060748",
        w: "21060749"
    };
    sh = {
        B: "21060716",
        w: "21060717"
    };
    th = {
        B: "21060820",
        w: "21060821"
    };
    uh = {
        B: "21060963",
        w: "21060964"
    };
    vh = {
        B: "21060961",
        w: "21060962"
    };
    wh = (Yf["1"] = "21060873", Yf["2"] = "21060874", Yf["3"] = "21060875", Yf);
    xh = (Zf["1"] = "21060876", Zf["2"] = "21060877", Zf["3"] = "21060878", Zf);
    yh = ($f["1"] = "21060879", $f["2"] = "21060880", $f["3"] = "21060881", $f);
    zh = (ag["1"] = "21060882", ag["2"] = "21060883", ag["3"] = "21060884", ag);
    Ah = (bg["1"] = "21060885", bg["2"] = "21060886", bg["3"] = "21060887", bg);
    Bh = (cg["1"] = "21060888", cg["2"] = "21060889", cg["3"] = "21060890", cg);
    Ch = (dg["1"] = "21060891", dg["2"] = "21060892", dg["3"] = "21060893", dg);
    _.Dh = {
        B: "21060894",
        w: "21060895"
    };
    Eh = {
        B: "21060986",
        w: "21060987"
    };
    Fh = {
        B: "21060621",
        Lc: "21060622",
        Mc: "21060833",
        Dc: "21060713"
    };
    _.Gh = {
        B: "21061016",
        w: "21061017"
    };
    Hh = {};
    Ih = (Hh[bh.jc] = 800, Hh[bh.uc] = 1E4, Hh);
    _.Jh = function(a, b) {
        b = void 0 === b ? !1 : b;
        for (var c = 0; c < Of.length; ++c) {
            var d = Of[c];
            if (null != Qb(d.j)[a]) {
                b && !_.Vf(d) || _.H(d, a);
                return
            }
        }
        Se(Ue, a)
    };
    Kh = Nd(Qf);
    Lh = Nd(!!_.t.IntersectionObserver);
    Mh = Nd(!!_.t.Uint8Array);
    Nh = Nd(-1 != (window.navigator && window.navigator.userAgent || "").indexOf("Opera Mini"));
    G({
        Le: "108809028",
        Me: "108809029",
        Fd: "21060596",
        Gd: "21060597"
    }, _.F.u().get(27));
    Oh = G(eg, _.F.u().get(54), {
        ia: [Nd(_.F.u().get(46))]
    });
    Ph = G(fg, _.F.u().get(63));
    _.Qh = G(_.gg, _.F.u().get(65));
    _.Rh = G(_.hg, _.F.u().get(136), {
        U: _.hg.w
    });
    Sh = G(qh, _.F.u().get(144));
    Th = G(ig, _.F.u().get(69), {
        ia: [Nd(!!_.Cf().fifWin)],
        U: ig.w
    });
    G(Wf, _.F.u().get(37), {
        Ua: !0,
        U: Wf.w
    });
    var Uh = G(jg, _.F.u().get(71), {
        U: jg.w
    });
    G(kg, _.F.u().get(88), {
        U: kg.w
    });
    Vh = G(lg, _.F.u().get(74));
    Wh = G(rg, _.F.u().get(77), {
        M: !0
    });
    Xh = G(sg, _.F.u().get(77), {
        M: !0
    });
    _.Yh = G(_.mg, _.F.u().get(78));
    _.Zh = G(_.ng, 0, {
        M: !0,
        jb: !0
    });
    _.$h = G(_.og, 0, {
        M: !0,
        jb: !0
    });
    G({
        aa: "21060375",
        Ja: "21060374"
    }, 0, {
        M: !0,
        jb: !0
    });
    ai = G(pg, _.F.u().get(79), {
        U: pg.w
    });
    bi = G(qg, 0, {
        M: !0,
        U: qg.w
    });
    ci = G({
        Jd: "21060169",
        we: "21060170",
        xe: "21060171",
        ye: "21060172",
        ze: "21060173",
        Ae: "21060174",
        Be: "21060175",
        Ce: "21060176",
        De: "21060177",
        Ee: "21060178",
        ve: "21060179",
        ce: "21060180",
        de: "21060181",
        ee: "21060182",
        fe: "21060183",
        ge: "21060184",
        he: "21060185",
        ie: "21060186",
        je: "21060187",
        ke: "21060188",
        be: "21060189"
    }, 0, {
        M: !0
    });
    di = G({
        Id: "21060190",
        me: "21060191",
        ne: "21060192",
        oe: "21060193",
        pe: "21060194",
        qe: "21060195",
        re: "21060196",
        se: "21060197",
        te: "21060198",
        ue: "21060199",
        le: "21060200",
        Td: "21060201",
        Ud: "21060202",
        Vd: "21060203",
        Wd: "21060204",
        Xd: "21060205",
        Yd: "21060206",
        Zd: "21060207",
        $d: "21060208",
        ae: "21060209",
        Sd: "21060210"
    }, 0, {
        M: !0
    });
    _.ei = G(_.tg, 0, {
        M: !0
    });
    fi = G(ug, _.F.u().get(85), {
        U: ug.w
    });
    gi = G(vg, _.F.u().get(87), {
        M: !0,
        U: vg.tb
    });
    hi = G(wg, _.F.u().get(89), {
        ia: [Pd(Nh), Pd(Od(Sb, pe))],
        Ua: !0,
        U: wg.w
    });
    ii = G(xg, _.F.u().get(96), {
        ia: [Sb, pe],
        Ua: !0,
        U: xg.w
    });
    ji = G(yg, _.F.u().get(97), {
        ia: [Nh],
        Ua: !0,
        U: yg.w
    });
    ki = G(zg, _.F.u().get(90), {
        ia: [Pd(Nd(!dd(_.t.top)))]
    });
    li = G(Ag, _.F.u().get(91), {
        ia: [Nd(!dd(_.t.top))]
    });
    mi = G(Bg, 0, {
        M: !0
    });
    if (ni = mc) ni = 0 <= _.mb(ze, 9);
    if (ni || xc && _.tc(601)) ki.is(zg.B) ? _.H(mi, Bg.Ec) : ki.is(zg.Ya) ? _.H(mi, Bg.Fc) : ki.is(zg.Za) ? _.H(mi, Bg.Gc) : li.is(Ag.B) ? _.H(mi, Bg.gc) : li.is(Ag.Ya) ? _.H(mi, Bg.hc) : li.is(Ag.Za) && _.H(mi, Bg.ic);
    oi = G(Cg, _.F.u().get(81));
    _.pi = G(_.Gg, _.F.u().get(141), {
        U: _.Gg.$a
    });
    oi.is(Cg.qb) && (Pf = !0);
    var qi = G(Dg, _.F.u().get(99)),
        ri = G(Eg, _.F.u().get(101)),
        si = G(Fg, _.F.u().get(105)),
        ti = G(Hg, _.F.u().get(103)),
        ui = G(Jg, _.F.u().get(134)),
        vi = G(Kg, _.F.u().get(135), {
            ia: [function() {
                return ui.is(Jg.aa)
            }]
        }),
        wi = G(Lg, _.F.u().get(113), {
            ia: [function() {
                return !!_.Cf().enableSampledInstrumentation
            }]
        });
    wi.is(Lg.w) && (Pf = !0);
    G(Ig, 0).is(Ig.oc) && (_.F.u().set(104, "/pagead/js/rum_debug.js"), Pf = !0);
    _.xi = G(_.Mg, 0, {
        M: !0
    });
    yi = G(Ng, _.F.u().get(114), {
        U: Ng.w
    });
    zi = G(Og, _.F.u().get(114), {
        M: !0
    });
    if (Va(window.location.href)) switch (_.Xf(yi)) {
        case Ng.B:
            _.H(zi, Og.B);
            break;
        case Ng.w:
            _.H(zi, Og.w)
    }
    Ai = G(Pg, _.F.u().get(115), {
        M: !0,
        U: Pg.w
    });
    Bi = G(Rg, _.F.u().get(117), {
        U: Rg.w
    });
    Ci = G(Qg, _.F.u().get(116));
    Di = G(Sg, _.F.u().get(118));
    Ei = G(Ug, _.F.u().get(123), {
        U: Ug.w
    });
    Fi = G(Vg, 0, {
        M: !0
    });
    Gi = G(Wg, _.F.u().get(120), {
        U: Wg.w
    });
    Hi = G(Xg, _.F.u().get(122), {
        M: !0,
        U: Xg.aa
    });
    Ii = G(Yg, _.F.u().get(121), {
        M: !0,
        U: Yg.aa
    });
    Ji = G(Zg, _.F.u().get(124), {
        M: !0,
        U: Zg.w
    });
    _.Ki = G(_.$g, _.F.u().get(125), {
        U: _.$g.w
    });
    _.Li = G(_.ah, _.F.u().get(126));
    Mi = G(bh, _.F.u().get(127), {
        ia: [Lh]
    });
    _.Ni = G(_.ch, 0, {
        M: !0
    });
    Oi = G(dh, _.F.u().get(129));
    Pi = G(eh, 0, {
        M: !0
    });
    Qi = G({
        B: "21060516",
        w: "21060517"
    }, 0);
    Ri = G(fh, _.F.u().get(132), {
        U: fh.wb
    });
    _.Si = G(_.gh, _.F.u().get(133));
    Ti = G(hh, 0);
    _.Ui = G(_.ih, _.F.u().get(156));
    Vi = G(jh, 0);
    _.Wi = G(_.kh, 0, {
        M: !0
    });
    _.Xi = G(lh, 0, {
        M: !0
    });
    Yi = G(mh, 0, {
        M: !0
    });
    Zi = G(nh, 0, {
        M: !0
    });
    $i = G(oh, 0, {
        M: !0
    });
    aj = _.F.u().get(143);
    bj = _.F.u().get(134);
    cj = G(ph, bj ? aj / bj : 0, {
        ia: [function() {
            return ui.is(Jg.aa)
        }, Lh, Mh]
    });
    G(sh, _.F.u().get(145), {
        U: sh.w
    });
    _.dj = G(_.rh, 0, {
        M: !0
    });
    ej = G(th, _.F.u().get(151), {
        U: th.w
    });
    fj = G(uh, _.F.u().get(157), {
        U: uh.w
    });
    gj = G(vh, _.F.u().get(158));
    _.F.u().get(154) && delete wh["2"];
    _.F.u().get(155) && delete wh["3"];
    hj = G(wh, _.F.u().get(153), {
        U: wh["3"]
    });
    ij = G(xh, 0, {
        M: !0
    });
    jj = G(yh, 0, {
        M: !0
    });
    kj = G(zh, 0, {
        M: !0
    });
    lj = G(Ah, 0, {
        M: !0
    });
    mj = G(Bh, 0, {
        M: !0
    });
    nj = G(Ch, 0, {
        M: !0
    });
    _.oj = G(_.Dh, 0, {
        M: !0
    });
    pj = G(Fh, 0, {
        M: !0
    });
    _.qj = G(_.Gh, 0, {
        M: !0
    });
    rj = G(Eh, 0, {
        M: !0
    });
    var sj = function(a) {
            return function() {
                return new zf(a, [])
            }
        },
        I = function(a) {
            return function(b) {
                return new zf(a, [b])
            }
        },
        tj = function(a) {
            return function(b, c) {
                return new zf(a, [b, c])
            }
        },
        uj = function(a) {
            return function(b, c, d) {
                return new zf(a, [b, c, d])
            }
        },
        vj = function(a) {
            return "[" + ea(a, function(a) {
                return _.w(a) ? "'" + a + "'" : _.y(a) ? vj(a) : String(a)
            }).join(", ") + "]"
        },
        wj = sj(1),
        xj = I(2),
        yj = I(3),
        zj = I(4),
        Aj = I(5),
        Bj = I(6),
        Cj = sj(8),
        Dj = uj(9),
        Ej = uj(10),
        Fj = tj(12),
        Gj = I(13),
        Hj = I(14),
        Ij = sj(16),
        Jj = uj(17),
        Kj = sj(19),
        Lj = I(20),
        Mj = I(21),
        Nj = tj(22),
        Oj = tj(23),
        Pj = I(26),
        Qj = I(27),
        Rj = I(28),
        Sj = I(30),
        Tj = tj(31),
        Uj = sj(34),
        Vj = I(35),
        Wj = uj(36),
        Xj = uj(37),
        Yj = sj(38),
        Zj = I(39),
        ak = tj(40),
        bk = sj(42),
        ck = tj(43),
        dk = sj(44),
        ek = sj(45),
        fk = I(46),
        gk = I(47),
        hk = I(48),
        ik = sj(49),
        jk = sj(50),
        kk = sj(52),
        lk = tj(57),
        mk = uj(58),
        nk = I(59),
        ok = I(60),
        pk = tj(61),
        qk = tj(62),
        rk = I(63),
        sk = tj(64),
        tk = I(65),
        uk = sj(66),
        vk = sj(67),
        wk = sj(68),
        xk = sj(69),
        yk = sj(70),
        zk = sj(71),
        Ak = sj(72),
        Bk = I(74),
        Ck = I(75),
        Dk = uj(77),
        Ek = I(78),
        Fk = sj(79),
        Gk = I(80),
        Hk = tj(82),
        Ik = tj(84),
        Jk = I(85),
        Kk = sj(87),
        Lk = uj(88),
        Mk = I(90),
        Nk = I(92),
        Ok = I(93),
        Pk = I(94),
        Qk = I(95),
        K = function(a, b) {
            b = vj(b);
            b = b.substring(1, b.length - 1);
            return new zf(96, [a, b])
        },
        Rk = I(97),
        Sk = I(98),
        Tk = I(99),
        Uk = I(100),
        Vk = tj(101),
        Wk = tj(102),
        Xk = tj(103),
        Yk = I(104);
    var Zk, $k, cl;
    Zk = "";
    $k = void 0;
    _.al = function() {
        return Zk ? Zk : Zk = (si.is(Fg.dc) ? _.F.u().get(106) : _.F.u().get(107)) || "1-0-10"
    };
    _.bl = function(a) {
        if (null == $k) {
            var b = [],
                c = si.is(Fg.Bc),
                d = Ci.is(Qg.w),
                e = _.F.u().get(106);
            c && b.push("v=" + e);
            d && b.push("host=" + a);
            $k = b.join("&")
        }
        return $k
    };
    cl = function(a) {
        var b = If(),
            c = {};
        if (!a || !_.z(a)) return null;
        var d = !1;
        _.D(a, function(e, f) {
            switch (f) {
                case "allowOverlayExpansion":
                    _.Da(e) ? c.allowOverlayExpansion = a.allowOverlayExpansion : (b.error(Vk("allowOverlayExpansion", a.allowOverlayExpansion), null, this), d = !0);
                    break;
                case "allowPushExpansion":
                    _.Da(e) ? c.allowPushExpansion = a.allowPushExpansion : (b.error(Vk("allowPushExpansion", a.allowPushExpansion), null, this), d = !0);
                    break;
                case "sandbox":
                    !0 === e ? c.sandbox = a.sandbox : (b.error(Vk("sandbox", a.sandbox), null, this), d = !0);
                    break;
                default:
                    b.G(Uk(f), null, this)
            }
        });
        return d ? null : c
    };
    _.el = function() {
        var a = dl || ui.is(Jg.aa);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing;
        bf.call(this, a ? 1 : 0, _.t)
    };
    ua(_.el, bf);
    var dl = vi.is(Kg.aa) || oi.is(Cg.w) || oi.is(Cg.qb) || oi.is(Cg.fc);
    Fa(_.el);
    var gl, il, kl, ll, pl, ql, sl, tl, ul, vl, wl, xl, yl, zl, Al, Bl, Cl, El, Fl, Gl;
    gl = function(a, b) {
        var c = a.getPassbackPageUrl();
        if ("" != c) return c;
        a = b[_.L(a)];
        return null != a ? fl(a) : null
    };
    il = function() {
        return hl().replace(/[\W_]/g, function(a) {
            return "&#" + a.charCodeAt() + ";"
        })
    };
    _.jl = function(a) {
        var b = a;
        "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
        return b
    };
    kl = /\+/g;
    ll = function(a) {
        a = void 0 === a ? !1 : a;
        var b = _.F.u().get(6);
        return a || b ? "https://" + _.F.u().get(3) : "http://" + _.F.u().get(2)
    };
    _.nl = function() {
        var a = Di.is(Sg.w);
        return (_.ml(window, a) ? "http" : "https") + "://" + _.F.u().get(33)
    };
    _.ol = function() {
        var a = window.navigator.userAgent,
            b = a.indexOf("MSIE ");
        return -1 == b ? 0 : (0, window.parseFloat)(a.substring(b + 5, a.indexOf(";", b)))
    };
    pl = Qd(function() {
        return -1 != _.Fb.indexOf("Google Web Preview")
    });
    ql = Qd(function() {
        return -1 != _.Fb.indexOf("Opera Mini")
    });
    sl = function(a, b) {
        var c = 0,
            d = [];
        a && (d.push(a.getAdUnitPath()), d.push(rl(a)), d.push(a.getSlotElementId()));
        if (b) {
            a = [];
            for (var e = 0; b && 25 > e; b = b.parentNode, ++e) a.push(9 !== b.nodeType && b.id || "");
            (b = a.join()) && d.push(b)
        }
        0 < d.length && (c = kd(d.join(":")));
        return c.toString()
    };
    tl = function(a) {
        try {
            var b = window.top,
                c = new rd(0, 0),
                d = _.yd(ud(a));
            if (Xb(d, "parent")) {
                do {
                    if (d == b) var e = Ld(a);
                    else {
                        var f = Jd(a);
                        e = new rd(f.left, f.top)
                    }
                    var g = e;
                    c.x += g.x;
                    c.y += g.y
                } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent))
            }
            var k = c
        } catch (l) {
            k = new rd(-12245933, -12245933)
        }
        return k
    };
    ul = function(a, b) {
        if (null == b) return a;
        b = a.indexOf("google_preview=", a.lastIndexOf("?"));
        var c = a.indexOf("&", b); - 1 == c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    vl = {
        Ze: "visible",
        Ie: "hidden",
        Re: "prerender",
        Ne: "other"
    };
    wl = function(a) {
        a = a || window.document;
        a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
        return Nb(vl, a) ? a : "other"
    };
    xl = Qd(function() {
        return "XMLHttpRequest" in window && "withCredentials" in new window.XMLHttpRequest
    });
    yl = function() {
        return !!(wc && _.t.fetch && _.t.TextDecoder && _.t.Promise)
    };
    _.ml = function(a, b) {
        var c = !1;
        _.F.u().get(46) ? c = !0 : null != b && (c = !b);
        return c && !md(a, b)
    };
    zl = Qd(function() {
        return !!_.nd(_.t.location.href)
    });
    Al = Math.floor(Math.random() * Math.pow(2, 53));
    Bl = function() {
        return ui.is(Jg.aa) || ti.is(Hg.w) || wi.is(Lg.w) || _.el.u().j
    };
    Cl = function(a) {
        return 0 === a || _.m(a) && (0, window.isFinite)(a) && 0 == a % 1 && 0 < a
    };
    _.Dl = function() {
        return _.F.u().get(6) ? "https:" : "http:"
    };
    El = function(a) {
        var b = a.split("/");
        return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    Fl = function(a) {
        var b = [];
        b = ea(a, function(a) {
            return El(a.getAdUnitPath())
        });
        ia(b);
        return b
    };
    Gl = function(a) {
        return "complete" == a.readyState
    };
    var Il, Jl, Ml, Nl, Ll;
    _.Hl = function(a, b) {
        a && (a.style.display = b ? "" : "none")
    };
    Il = function(a, b) {
        window.document.write('<script type="text/javascript" src="' + a + '" id="' + b + '">\x3c/script>')
    };
    Jl = function(a, b, c, d, e, f) {
        f = (f || window.document).createElement("iframe");
        f.id = b;
        f.title = c;
        f.name = b;
        _.y(e) ? null != e[0] && null != e[1] && (f.width = String(e[0]), f.height = String(e[1])) : (f.width = "100%", f.height = "0");
        f.vspace = "0";
        f.hspace = "0";
        f.allowTransparency = "true";
        f.scrolling = "no";
        f.marginWidth = "0";
        f.marginHeight = "0";
        f.frameBorder = "0";
        f.style.border = "0";
        f.style.verticalAlign = "bottom";
        d && (f.style.visibility = "hidden", f.style.display = "none");
        ai.is(pg.w) && (f.srcdoc = "");
        a.appendChild(f);
        return f
    };
    _.Ol = function(a, b, c, d, e) {
        (void 0 === c ? 0 : c) && (b = _.Kl(b, "<script>var inDapIF=true;\x3c/script>\n"));
        if (Ll) {
            var f = b,
                g = void 0 === d ? !0 : d,
                k = void 0 === e ? !0 : e;
            k = void 0 === k ? !0 : k;
            try {
                var l = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                void 0 !== g && !g || -1 == window.navigator.userAgent.indexOf("Firefox") && !Uh.is(jg.w) || l.open("text/html", "replace");
                l.write(f);
                yi.is(Ng.w) && a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && Va(a.contentWindow.location.href) && a.contentWindow.history.replaceState(null, "", "#" + Math.random());
                k && l.close()
            } catch (Tg) {}
        } else {
            try {
                var n = !!a.contentWindow.document
            } catch (Tg) {
                n = !1
            }
            if (n) {
                l = b;
                var p = Ml();
                try {
                    f = window.frames[a.name];
                    a = l;
                    var v = "http://" + _.F.u().get(1) + "/pagead/inject_object_div.js";
                    if (6 < (0, window.parseInt)(_.ol(), 10) || 0 > a.indexOf(v)) {
                        b: {
                            a = l;v = window.document;
                            var x = _.ol(),
                                J;
                            if (!(J = 0 == x || (0, window.isNaN)(x) || 7 > x || 9 < x || v.documentMode && 10 <= v.documentMode)) {
                                var La = window.navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                                J = 6 <= (La ? (0, window.parseFloat)(La[1]) : 0)
                            }
                            if (!J)
                                for (x = 0; x < a.length; ++x)
                                    if (127 < a.charCodeAt(x)) {
                                        var tb = !0;
                                        break b
                                    }
                            tb = !1
                        }
                        if (tb) {
                            g = (0, window.unescape)((0, window.encodeURIComponent)(l));
                            k = Math.floor(g.length / 2);
                            a = [];
                            for (tb = 0; tb < k; ++tb) a[tb] = String.fromCharCode(256 * g.charCodeAt(2 * tb + 1) + g.charCodeAt(2 * tb));
                            1 == g.length % 2 && (a[k] = g.charAt(g.length - 1));
                            l = a.join("")
                        }
                        f.contents = l;f.location.replace("javascript:window.contents")
                    }
                    else f.contents = l, f.location.replace("javascript:document.write(window.contents);document.close();")
                } catch (Tg) {} finally {
                    Nl(p)
                }
            } else {
                g = b;
                f = Ml();
                try {
                    p = "google-ad-content-" + _.kb(), window[p] = g, g = 'var adContent = window.parent["' + p + '"];window.parent["' + p + '"] = null;document.write(adContent);', g = 6 == _.ol() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + window.document.domain + '";' + g + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + window.document.domain + '";' + g + "document.close();", a.src = 'javascript:\'<script type="text/javascript">' + g + "\x3c/script>'"
                } catch (Tg) {
                    window[p] = null
                } finally {
                    Nl(f)
                }
            }
        }
    };
    _.Kl = function(a, b) {
        if (!a) return a;
        var c = a.toLowerCase();
        return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<html>\n<head>\n" + (b || "") + "</head><body>" + a + "</body></html>\n"
    };
    Ml = function() {
        var a = [],
            b = window.document.getElementsByTagName("base");
        if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c],
                    f = e.getAttribute("target");
                f && (a.push({
                    Pc: e,
                    pd: f
                }), e.removeAttribute("target"))
            }
        return a
    };
    Nl = function(a) {
        if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b];
                d.Pc.setAttribute("target", d.pd)
            }
    };
    Ll = !_.ol();
    var Pl = function() {
        return "20170920"
    };
    Df("getVersion", Pl);
    var Rl, Ql, Sl, ma;
    _.M = function(a, b, c) {
        b = b || Ql;
        if (!_.u(c) || 0 > c || 1 < c) c = _.F.u().get(23);
        this.l = Math.random();
        this.o = this.l < c;
        this.m = a;
        this.j = b + "/pagead/gen_204?id=" + (0, window.encodeURIComponent)(a)
    };
    Rl = [];
    Ql = _.F.u().get(6) ? "https://" + _.F.u().get(33) : "http://" + _.F.u().get(33);
    _.r = function(a, b, c) {
        b && b.match(/^\w+$/) && c && (a.j += "&" + b + "=" + (0, window.encodeURIComponent)(c))
    };
    _.N = function(a, b, c) {
        var d = a.o;
        b && 0 <= b && (d = (c ? a.l : Math.random()) < b);
        (d || zl()) && a.m && a.j && _.ae(window, a.j, void 0)
    };
    Sl = function(a, b) {
        0 < b.length && (3 >= b.length || (b = Ab(b, 0, 3), b.push("__extra__")), _.r(a, "nw_id", b.join(",")))
    };
    _.q = function(a, b) {
        _.r(a, "vrg", Pl());
        var c = window.document;
        b ? (Sl(a, Tl(b)), _.r(a, "nslots", Ul(b).toString())) : (Sl(a, Fl(Rl)), _.r(a, "nslots", Rl.length.toString()));
        b = _.Ve();
        0 < b.length && _.r(a, "eid", b.join());
        _.r(a, "pub_url", c.URL)
    };
    ma = function(a) {
        var b = {
            hd: _.F.u().get(159)
        };
        b = void 0 === b ? {} : b;
        var c = b.bf || Ql;
        b = b.hd;
        if (!_.u(b) || 0 > b || 1 < b) b = _.F.u().get(23);
        Math.random() < b && (c = new _.M("gpt_adsense_legacy", c), a(c), _.N(c, 1, !0))
    };
    var Vl, Wl, Yl, Zl, Xl, $l, am, bm;
    Vl = _.F.u().get(38);
    Wl = function(a, b) {
        a = {
            methodId: a
        };
        b.name && (a.name = b.name);
        b.message && (a.message = b.message.substring(0, 512));
        b.fileName && (a.fileName = b.fileName);
        b.lineNumber && (a.lineNumber = b.lineNumber);
        b.stack && (a.stack = nf(b.stack, ""));
        return a
    };
    Yl = function(a, b, c) {
        Xl(a, b);
        if (!c) throw b;
    };
    Zl = function(a, b) {
        Xl(a, b);
        window.console && window.console.error && window.console.error(b)
    };
    Xl = function(a, b, c) {
        c = void 0 === c ? Vl : c;
        if (!b.gd) try {
            b.gd = !0;
            var d = Wl(a, b),
                e = new _.M("gpt_exception");
            try {
                _.q(e)
            } catch (f) {}
            _.D(d, function(a, b) {
                return _.r(e, b, a)
            });
            _.N(e, c)
        } catch (f) {}
    };
    _.O = function(a, b, c) {
        return function() {
            var d = !1,
                e = null,
                f = c || Yl,
                g = _.el.u();
            try {
                dl && (e = g.start(a.toString(), 3));
                var k = b.apply(this, arguments);
                d = !0;
                dl && df(g, e)
            } catch (l) {
                d ? Xl(110, l) : k = f.call(this, a, l), cf(e)
            }
            return k
        }
    };
    $l = function(a, b) {
        b = !b || vi.is(Kg.aa);
        var c = new Sc,
            d = new Uc;
        Oc(c, 1, Al, 0);
        var e = _.Ve().join();
        Oc(c, 5, e, "");
        Oc(c, 2, 1, 0);
        Qc(d, 1, c);
        c = new Tc;
        Oc(c, 7, b, !1);
        Oc(c, 8, b, !1);
        Oc(c, 9, b, !1);
        Oc(c, 10, !0, !1);
        Qc(d, 2, c);
        a.google_rum_config = Pc(d)
    };
    am = function(a) {
        var b = _.F.u().get(1),
            c = _.F.u().get(104);
        b = _.Dl() + "//" + b + c;
        _.ed(a.document, b)
    };
    bm = function() {
        var a = window,
            b = ui.is(Jg.aa);
        $l(a, b);
        b || Gl(a.document) ? am(a) : Ef(a, function() {
            return am(a)
        })
    };
    var cm, dm, em;
    cm = function() {
        var a = _.ml(window),
            b = a ? "http:" : "https:";
        a = _.F.u().get(a ? 2 : 3);
        var c = Pl(),
            d = _.F.u().get(163),
            e = "";
        d && (e = "?cb=" + d);
        return b + "//" + a + "/gpt/pubads_impl_rendering_" + c + ".js" + e
    };
    dm = !1;
    em = function(a) {
        a = void 0 === a ? !1 : a;
        if (!dm) {
            window.googletag._ = _.O(340, function(a) {
                a(_);
                window.googletag._({});
                delete window.googletag._
            });
            var b = cm();
            a ? Il(b, "gpt_rendering") : _.ed(window.document, b);
            dm = !0
        }
    };
    _.fm = [];
    var gm = function() {
        this.l = this.j = 0
    };
    gm.prototype.push = function(a) {
        for (var b = If(), c = 0; c < arguments.length; ++c) try {
            _.Ia(arguments[c]) && (arguments[c](), this.j++)
        } catch (d) {
            this.l++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Sj(String(d.message)))
        }
        b.info(Tj(String(this.j), String(this.l)));
        return this.j
    };
    gm.prototype.push = _.O(76, gm.prototype.push);
    var hm = function() {
        var a = _.Cf().cmd;
        if (!a || _.y(a)) {
            var b = _.Cf().cmd = new gm;
            a && 0 < a.length && b.push.apply(b, a)
        }
    };
    hm = _.O(77, hm);
    (function() {
        function a(a) {
            this.t = {};
            this.tick = function(a, b, c) {
                this.t[a] = [void 0 != c ? c : (new Date).getTime(), b];
                if (void 0 == c) try {
                    window.console.timeStamp("CSI/" + a)
                } catch (l) {}
            };
            this.tick("start", null, a)
        }
        var b;
        if (window.performance) var c = (b = window.performance.timing) && b.responseStart;
        var d = 0 < c ? new a(c) : new a;
        window.GPT_jstiming = {
            Timer: a,
            load: d
        };
        b && (b = b.navigationStart, 0 < b && c >= b && (window.GPT_jstiming.srt = c - b));
        try {
            c = null, window.chrome && window.chrome.csi && (c = Math.floor(window.chrome.csi().pageT)), null == c && window.gtbExternal && (c = window.gtbExternal.pageT()), null == c && window.external && (c = window.external.pageT), c && (window.GPT_jstiming.pt = c)
        } catch (e) {}
    })();
    if (window.GPT_jstiming) {
        window.GPT_jstiming.yb = {};
        window.GPT_jstiming.sd = 1;
        var im = function(a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        };
        window.GPT_jstiming.getTick = im;
        var jm = function(a, b, c) {
            var d = "";
            window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt);
            window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (v) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (window.encodeURIComponent || window.escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t,
                k = g.start;
            e = [];
            f = [];
            for (var l in g)
                if ("start" != l && 0 != l.indexOf("_")) {
                    var n = g[l][1];
                    n ? g[n] && f.push(l + "." + im(a, l, g[n][0])) : k && e.push(l + "." + im(a, l))
                }
            if (b)
                for (var p in b) d += "&" + p + "=" + b[p];
            (b = c) || (b = "https:" == window.document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        };
        window.GPT_jstiming.getReportUri = jm;
        var km = function(a, b, c) {
            a = jm(a, b, c);
            if (!a) return "";
            b = new window.Image;
            var d = window.GPT_jstiming.sd++;
            window.GPT_jstiming.yb[d] = b;
            b.onload = b.onerror = function() {
                window.GPT_jstiming && delete window.GPT_jstiming.yb[d]
            };
            b.src = a;
            b = null;
            return a
        };
        window.GPT_jstiming.report = function(a, b, c) {
            if ("prerender" == window.document.webkitVisibilityState) {
                var d = !1,
                    e = function() {
                        if (!d) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            if ("prerender" == window.document.webkitVisibilityState) var f = !1;
                            else km(a, b, c), f = !0;
                            f && (d = !0, window.document.removeEventListener("webkitvisibilitychange", e, !1))
                        }
                    };
                window.document.addEventListener("webkitvisibilitychange", e, !1);
                return ""
            }
            return km(a, b, c)
        }
    };
    var lm = function(a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return b.document && !b.document.body ? new _.sd(-1, -1) : (void 0 === c ? 0 : c) ? (new _.sd(b.innerWidth, b.innerHeight)).round() : wd(b || window).round()
        } catch (d) {
            return new _.sd(-12245933, -12245933)
        }
    };
    var mm = function(a, b) {
        this.l = a;
        this.j = b
    };
    var nm = function(a) {
        if (!a.performance || !a.performance.getEntriesByType) return null;
        var b = a.performance.getEntriesByType("resource");
        a = b.length;
        b = ob(b, function(a, b) {
            return a + (b.transferSize || 0)
        });
        return {
            nd: a,
            Bd: b
        }
    };
    var om = function(a, b, c, d, e, f, g, k) {
        this.advertiserId = a;
        this.campaignId = b;
        this.creativeId = c;
        this.labelIds = d;
        this.lineItemId = e;
        this.sourceAgnosticCreativeId = f;
        this.sourceAgnosticLineItemId = g;
        this.isBackfill = k
    };
    var pm = {
            We: "slotRenderEnded",
            Je: "impressionViewable",
            Xe: "slotVisibilityChanged",
            Ve: "slotOnload"
        },
        qm = function(a, b, c) {
            this.slot = a;
            this.isEmpty = b;
            this.serviceName = c;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1
        },
        rm = function(a) {
            this.slot = a;
            this.serviceName = "publisher_ads"
        },
        sm = function(a, b) {
            this.slot = a;
            this.serviceName = "publisher_ads";
            this.inViewPercentage = b
        },
        tm = function(a) {
            this.slot = a;
            this.serviceName = "publisher_ads"
        };
    var um = function() {
        this.ha = [];
        this.ma = {};
        this.l = !1;
        this.C = {};
        this.log = If();
        this.log.info(Vj(this.getName()), this)
    };
    _.h = um.prototype;
    _.h.getName = function() {
        return "unknown"
    };
    _.h.getVersion = function() {
        return "unversioned"
    };
    _.h.getSlots = function() {
        return this.ha
    };
    _.h.getSlotIdMap = function() {
        return this.ma
    };
    _.h.enable = function() {
        this.l ? this.log.info(Yj(), this) : (this.ib(), this.l = !0)
    };
    _.h.enable = _.O(87, um.prototype.enable, function(a, b) {
        Xl(a, b);
        this.log.error(Zj(String(b)), this)
    });
    _.h.mb = function(a) {
        this.ha.push(a);
        this.ma[_.L(a)] = a;
        this.log.info(ak(this.getName(), a.getAdUnitPath()), this, a)
    };
    _.h.destroySlots = function(a) {
        var b = this.getSlots(),
            c = _.ha(b, function(b) {
                return _.ub(a, b)
            });
        _.B(c, function(a) {
            _.wb(b, a)
        });
        return c
    };
    _.h.addEventListener = function(a, b) {
        if (!_.Ia(b) || !_.w(a)) return a = K("Service.addEventListener", [a, b]), this.log.G(a, this), this;
        if (!Nb(pm, a)) return this.log.G(Ok(a), this), this;
        _.y(this.C[a]) || (this.C[a] = []);
        this.C[a].push(b);
        b = new _.M("gpt_callback_usage");
        _.r(b, "type", a);
        _.q(b);
        _.N(b);
        return this
    };
    _.h.addEventListener = _.O(86, um.prototype.addEventListener);
    var vm = function(a, b, c) {
        b = a.C[b];
        _.y(b) && _.B(b, function(a) {
            try {
                a(c)
            } catch (g) {
                a = g && _.w(g.name) ? g.name : null;
                var b = g && _.w(g.message) ? g.message : null,
                    d = "";
                a && b ? d = a + ": " + b : a ? d = a : b && (d = b);
                this.log.G(Nk(d), this)
            }
        }, a)
    };
    var wm, xm, ym, zm, Am, Bm, Cm, Fm, Jm, Km, Nm, Em, Hm, Pm, Om, Im, Qm, Sm, Gm, Um, Vm, Tm;
    wm = {
        Ge: "loader_loaded_instant",
        He: "loader_loaded_instant_nw",
        Se: "impl_loaded_instant",
        Oe: "page_load_time",
        Pe: "page_load_time_nw",
        Qe: "page_unload_time",
        Fe: "fpt"
    };
    xm = "v" + Pl();
    ym = {
        start_ad_fetch_period: !0,
        start_ad_render_period: !0
    };
    zm = {
        ad_fetch_period: "start_ad_fetch_period",
        ad_render_period: "start_ad_render_period"
    };
    Am = function() {
        this.l = !1;
        _.t.GPT_jstiming && _.t.GPT_jstiming.load && ("http:" == _.t.location.protocol || "https:" == _.t.location.protocol) && Pf && (this.l = !0);
        this.l && Uf(gi, _.F.u().get(87), [Nd(!(!_.t.navigator || !_.t.navigator.sendBeacon))]);
        this.C = this.v = this.da = null;
        this.R = this.O = this.N = !1;
        this.I = window.GPT_jstiming.getTick(window.GPT_jstiming.load, "start", 0);
        this.o = window.GPT_jstiming.load;
        this.o.name = "global";
        if (!window.performance || !window.performance.timing) {
            var a = _.F.u().get(49);
            this.I = a;
            this.o.tick("start", void 0, a)
        }
        this.A = {};
        this.K = 500;
        this.ba = [];
        this.L = {};
        this.P = !1;
        this.ga = this.ca = 0;
        this.F = !1;
        this.D = {};
        this.H = {};
        this.fa = this.W = this.Y = this.X = this.$ = this.V = this.Z = 0
    };
    Bm = null;
    _.Dm = function() {
        return Bm || Cm()
    };
    Cm = function() {
        var a = window,
            b = new Am;
        Bm = b;
        if (!b.l) return b;
        Em(b);
        Fm(b);
        _.Cf().fifWin && Gl(window.document) ? a.performance && a.performance.timing && Gm(b, a.performance.timing.loadEventStart) : Ef(a, function() {
            Gm(b)
        });
        Ff(a, function() {
            b.m("page_unload_time");
            Hm(b, !0)
        });
        Im(b, xm);
        return b
    };
    Fm = function(a) {
        _.D(wm, function(a) {
            this.A[a] = !1
        }, a)
    };
    Jm = function(a, b, c, d) {
        a.o || (a.o = new _.t.GPT_jstiming.Timer(a.I), a.o.name = "global");
        var e = "_" == b[0];
        if (c || e || window.performance && window.performance.timing) a.o.tick(b, c, d), e || (a.O = !0);
        a.P || Hm(a)
    };
    Km = function(a, b, c, d, e) {
        c ? a.C || (a.C = new _.t.GPT_jstiming.Timer(a.I), a.C.name = "ad_events_psbk") : a.v || (a.v = new _.t.GPT_jstiming.Timer(a.I), a.v.name = "ad_events");
        var f = "_" == b.charAt(0);
        c ? (a.C.tick(b, d, e), f || (a.R = !0)) : (a.v.tick(b, d, e), f || (a.N = !0))
    };
    Am.prototype.m = function(a, b) {
        this.l && (Jm(this, a, void 0, b), this.A[a] = !0)
    };
    Am.prototype.m = _.O(104, Am.prototype.m);
    Am.prototype.j = function(a, b, c) {
        a = a + "." + b;
        if (b = "_" + a) Jm(this, b, void 0, 0), Jm(this, a, b, c)
    };
    Am.prototype.j = _.O(104, Am.prototype.j);
    _.Lm = function(a, b, c, d, e) {
        b = b + "." + c;
        c = "_" + b;
        Km(a, c, d, void 0, 0);
        Km(a, b, d, c, e)
    };
    _.Mm = function(a, b, c, d) {
        if (a.l && !(1E3 < c)) {
            var e = zm[b],
                f = e;
            e && (f += "." + c);
            c = b + ("." + c);
            f && a.L.hasOwnProperty("_" + f) && (f = "_" + f, Km(a, f, d || !1, void 0, a.L[f] + a.I), delete a.L[f]);
            Km(a, c, d || !1, f);
            d = d ? a.C : a.v;
            ym.hasOwnProperty(b) && (b = window.GPT_jstiming.getTick(d, c), a.L["_" + c] = b)
        }
    };
    Nm = function(a) {
        a.A.loader_loaded_instant && !a.A.loader_loaded_instant_nw && a.m("loader_loaded_instant_nw", a.ca);
        a.A.page_load_time && !a.A.page_load_time_nw && a.m("page_load_time_nw", a.ga)
    };
    Em = function(a) {
        window.setTimeout(_.O(105, (0, _.A)(function() {
            var a = Hm(this);
            if (this.l) {
                var c = !1;
                this.v && this.N && (Om(this, this.D), Pm(this.v, this.D), this.v = null, this.N = !1, this.D = {}, c = !0);
                this.C && this.R && (Om(this, this.H), Pm(this.C, this.H), this.C = null, this.R = !1, this.H = {}, c = !0)
            } else c = !1;
            if (a || c) this.K = 32E3 < 2 * this.K ? 32E3 : 2 * this.K;
            Em(this)
        }, a)), a.K)
    };
    Hm = function(a, b) {
        if (!a.l) return !1;
        var c = !1;
        if (a.o && (b || null != a.o && a.O && (a.A.page_load_time || Gl(window.document)) && a.A.loader_loaded_instant)) {
            b ? Im(a, "page_unload") : Im(a, "page_load");
            c = {};
            if (!a.P || b) c.count_of_slots = a.Z, c.count_of_requested_slots = a.$, c.count_of_rendered_slots = a.X, c.count_of_requests = a.Y, c.count_of_refreshes_called = a.W, c.count_of_passback = a.V;
            Om(a, c);
            Pm(a.o, c);
            a.P = !0;
            a.O = !1;
            a.o = null;
            c = !0
        }
        return c
    };
    Pm = function(a, b) {
        var c = "https:" == _.t.location.protocol ? "https://www.google.com/csi" : "http://csi.gstatic.com/csi";
        gi.is(vg.tb) ? (c = _.t.GPT_jstiming.getReportUri(a, b, c), _.t.navigator.sendBeacon(c, "") || _.ae(_.t, c, void 0)) : gi.is(vg.mc) ? (c = _.t.GPT_jstiming.getReportUri(a, b, c), _.t.navigator.sendBeacon(c, "")) : _.t.GPT_jstiming.report(a, b, c)
    };
    Om = function(a, b) {
        b.vrg = Pl();
        b.pl_id = Al;
        a = a.ba.join();
        var c = _.Ve().join();
        b.e = a.length && c.length ? a + "," + c : a + c
    };
    Im = function(a, b) {
        0 < b.length && vb(a.ba, b)
    };
    Qm = function(a, b) {
        null === a.da && ((a.da = b) ? Im(a, "sra") : Im(a, "non-sra"))
    };
    _.Rm = function(a, b, c, d) {
        a.l && (d ? (a.H[b] = a.H[b] || [], a.H[b].push(c)) : (a.D[b] = a.D[b] || [], a.D[b].push(c)))
    };
    Sm = function(a, b) {
        switch (b) {
            case "count_of_slots":
                ++a.Z;
                break;
            case "count_of_requested_slots":
                ++a.$;
                break;
            case "count_of_rendered_slots":
                ++a.X;
                break;
            case "count_of_requests":
                ++a.Y;
                break;
            case "count_of_refreshes_called":
                ++a.W;
                break;
            case "count_of_passback":
                ++a.V
        }
    };
    Gm = function(a, b) {
        if (a.l) {
            a.m("page_load_time", b);
            var c = Tm();
            c && Jm(a, "fpt", void 0, c);
            a.F ? a.m("page_load_time_nw", b) : a.ga = b || (new Date).getTime()
        }
    };
    Um = function(a, b, c, d) {
        _.Mm(a, "start_ad_fetch_period", b, c);
        _.ef(_.el.u(), (3).toString(), b);
        d && _.D(d, function(d, f) {
            _.Rm(a, f, b + "_" + d, c)
        });
        Sm(a, "count_of_requests")
    };
    Vm = function(a, b, c, d) {
        if (a.l) try {
            var e = c && c.contentWindow;
            if (e) {
                var f = nm(e);
                f && (_.Lm(a, "nres", b, d, f.nd), _.Lm(a, "tts", b, d, f.Bd))
            }
        } catch (g) {}
    };
    _.Wm = function(a, b, c) {
        if (a.l) {
            var d = _.Cf().fifWin || window;
            d.performance && d.performance.getEntriesByName && (b = d.performance.getEntriesByName(b)[0]) && (a.j("rt_st", c, b.startTime), a.j("rt_fs", c, b.fetchStart), 0 < b.responseStart && (a.j("rt_dns", c, b.domainLookupEnd - b.domainLookupStart), a.j("rt_tcp", c, b.connectEnd - b.connectStart), b.secureConnectionStart && a.j("rt_ssl", c, b.connectEnd - b.secureConnectionStart), a.j("rt_rtt", c, b.responseStart - b.fetchStart), a.j("rt_tft", c, b.responseEnd - b.responseStart), void 0 !== b.transferSize && (a.j("rt_ts", c, b.transferSize), a.j("rt_eb", c, b.encodedBodySize), a.j("rt_db", c, b.decodedBodySize))), a.j("rt_duration", c, b.duration))
        }
    };
    Tm = function() {
        var a = window.performance && window.performance.timing;
        if (!a) return 0;
        if (window.chrome && window.chrome.loadTimes) {
            var b = window.chrome.loadTimes(),
                c = 1E3 * b.firstPaintTime;
            a && a.navigationStart && b.startLoadTime && (c -= 1E3 * b.startLoadTime - a.navigationStart);
            return c
        }
        return a && a.msFirstPaint ? a.msFirstPaint : 0
    };
    var Xm = function() {
            this.j = {};
            this.m = !1;
            this.J = If();
            this.o = this.J.info(Cj());
            Ef(window, (0, _.A)(Xm.prototype.l, this))
        },
        Ym = function(a, b) {
            var c = null;
            b in a.j && (c = a.j[b]);
            return c
        },
        $m = function() {
            var a = Zm();
            _.D(a.j, function(a, c) {
                a.enable();
                Im(_.Dm(), c)
            })
        };
    Xm.prototype.destroySlots = function(a) {
        _.D(this.j, function(b) {
            return b.destroySlots(a)
        })
    };
    Xm.prototype.l = function() {
        this.m = !0;
        this.J.info(wj(), null, null, this.o)
    };
    Xm.prototype.l = _.O(92, Xm.prototype.l);
    var Zm = function() {
            var a = _.Cf();
            return a.service_manager_instance || (a.service_manager_instance = new Xm)
        },
        an = function() {
            $m()
        };
    an = _.O(91, an);
    Df("enableServices", an);
    var bn = function(a, b) {
        this.l = a;
        this.j = b
    };
    bn.prototype.getWidth = function() {
        return this.l
    };
    bn.prototype.getHeight = function() {
        return this.j
    };
    var cn = function(a) {
            var b = _.y(a) && 2 == a.length && Cl(a[0]) && Cl(a[1]);
            a = _.w(a) && "fluid" == a;
            return b || a
        },
        dn = function(a) {
            return _.y(a) ? new bn(a[0], a[1]) : a
        },
        fn = function(a) {
            var b = [];
            if (en(a)) b.push(dn(a));
            else if (_.y(a))
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    en(d) && b.push(dn(d));
                    a: {
                        var e = ["fluid"];
                        if (_.Ha(d) && _.Ha(e) && d.length == e.length) {
                            for (var f = d.length, g = Db, k = 0; k < f; k++)
                                if (!g(d[k], e[k])) {
                                    d = !1;
                                    break a
                                }
                            d = !0
                        } else d = !1
                    }
                    d && (Uf(Ai, _.F.u().get(115), []), d = Ai.is(Pg.w), e = Bi.is(Rg.w), (d || e) && b.push("fluid"))
                }
            return b
        },
        en = function(a) {
            var b = _.y(a) && 1 < a.length && _.m(a[0]) && _.m(a[1]);
            a = _.w(a) && "fluid" == a;
            return b || a
        };
    var gn = function(a) {
            this.j = a
        },
        hn = function(a, b) {
            a = sb(a.j, function(a) {
                a = a.l;
                return a.width <= b.width && a.height <= b.height
            });
            return null == a ? null : a.j
        },
        jn = function(a) {
            if (!_.y(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
            var b = a[0];
            if (!cn(b) || "fluid" == b) throw Error("Size has to be an array of two non-negative integers");
            b = new _.sd(b[0], b[1]);
            if (_.y(a[1]) && 0 == a[1].length) a = [];
            else if (a = fn(a[1]), 0 == a.length) throw Error("At least one slot size must be present");
            return new mm(b, a)
        };
    var kn = function(a, b, c) {
        this.j = a;
        this.ya = _.m(b) ? b : 0;
        this.l = this.j + "_" + this.ya;
        this.m = c || "gpt_unit_" + this.l
    };
    kn.prototype.getId = function() {
        return this.l
    };
    kn.prototype.getAdUnitPath = function() {
        return this.j
    };
    kn.prototype.getName = function() {
        return this.j
    };
    kn.prototype.u = function() {
        return this.ya
    };
    kn.prototype.getInstance = kn.prototype.u;
    kn.prototype.toString = kn.prototype.getId;
    kn.prototype.getDomId = function() {
        return this.m
    };
    var ln = [null, null],
        mn = !1,
        nn = function(a, b) {
            b = void 0 === b ? !1 : b;
            var c = Ri.is(fh.wb),
                d = Ri.is(fh.zc),
                e = ln[(void 0 === b ? 0 : b) ? 1 : 0] || null;
            if (c && e) return e;
            var f = lm(b, a);
            if (d && e && !(f == e || f && e && f.width == e.width && f.height == e.height)) {
                var g = new _.M("gpt_viewport_cache");
                _.r(g, "cv", e.width + "x" + e.height);
                _.r(g, "av", f.width + "x" + f.height);
                _.N(g, 1)
            }
            if ((c || d) && !mn) {
                c = function() {
                    ln = [null, null]
                };
                _.E(a, "resize", c, {
                    passive: !0
                });
                if (null !== a && a != a.top) try {
                    _.E(a.top, "resize", c, {
                        passive: !0
                    })
                } catch (k) {}
                mn = !0
            }
            return ln[b ? 1 : 0] = f
        };
    var P = function(a, b, c, d) {
            this.I = a;
            this.Ra = fn(c);
            this.ga = null;
            this.l = new kn(a, b, d);
            this.o = [];
            this.L = {};
            this.W = null;
            this.J = If();
            this.J.info(xj(this.l.toString()), null, this);
            this.Ba = this.D = this.va = this.C = null;
            this.ma = this.R = this.oa = "";
            this.fa = !0;
            this.v = {};
            this.V = [];
            this.za = !1;
            this.ta = this.na = null;
            this.ka = 0;
            this.xa = -1;
            this.wa = 0;
            this.j = !1;
            this.$ = {};
            this.Aa = "";
            this.ba = !1;
            this.X = null;
            this.Z = !1;
            this.H = null;
            this.Sa = Sd(function() {
                null !== this.H && this.visibilityChanged(this.H)
            }, 200, this);
            this.ra = El(this.I);
            this.la = "";
            this.P = this.m = null;
            this.Ca = !1;
            this.T = null;
            this.da = this.O = 0;
            this.A = this.Y = !1;
            this.K = this.N = this.F = null;
            this.ha = -1;
            this.ca = !1;
            this.pa = ++_.Dm().fa
        },
        pn;
    _.h = P.prototype;
    _.h.getPassbackPageUrl = function() {
        return this.Aa
    };
    _.h.set = function(a, b) {
        if (!_.w(a) || !b) return this.J.G(K("Slot.set", [a, b]), null, this), this;
        var c = this.getAdUnitPath();
        this.L[a] = b;
        this.C || this.D ? this.J.G(Ej(a, String(b), c), null, this) : this.J.info(Dj(a, String(b), c), null, this);
        return this
    };
    _.h.set = _.O(40, P.prototype.set);
    _.h.get = function(a) {
        return _.w(a) ? this.L.hasOwnProperty(a) ? this.L[a] : null : (this.J.G(K("Slot.get", [a]), null, this), null)
    };
    _.h.get = _.O(41, P.prototype.get);
    _.h.getAttributeKeys = function() {
        return id(this.L)
    };
    _.h.getAttributeKeys = _.O(42, P.prototype.getAttributeKeys);
    _.h.addService = function(a) {
        var b = Zm();
        if (!Nb(b.j, a)) return this.J.G(Pk(this.l.toString()), null, this), this;
        for (b = 0; b < this.o.length; ++b)
            if (a == this.o[b]) return this.J.G(Fj(a.getName(), this.l.toString()), a, this), this;
        this.o.push(a);
        a.mb(this);
        return this
    };
    _.h.addService = _.O(43, P.prototype.addService);
    _.h.getName = function() {
        return this.I
    };
    _.h.getName = _.O(170, P.prototype.getName);
    _.h.getAdUnitPath = function() {
        return this.I
    };
    _.h.getAdUnitPath = _.O(54, P.prototype.getAdUnitPath);
    _.h.u = function() {
        return this.getSlotId().u()
    };
    _.h.getSlotElementId = function() {
        return this.l.getDomId()
    };
    _.Q = function(a, b) {
        b = void 0 === b ? window.document : b;
        return a.F || b.getElementById(a.l.getDomId())
    };
    P.prototype.getSlotId = function() {
        return this.l
    };
    P.prototype.getServices = function() {
        return this.o
    };
    P.prototype.getSizes = function(a, b) {
        return _.m(a) && _.m(b) && this.ga ? hn(this.ga, new _.sd(a, b)) : this.Ra
    };
    _.L = function(a) {
        return a.I + "_" + a.l.u()
    };
    P.prototype.defineSizeMapping = function(a) {
        if (!_.y(a)) throw Error("Size mapping has to be an array");
        a = ea(a, jn);
        this.ga = new gn(a);
        return this
    };
    P.prototype.defineSizeMapping = _.O(44, P.prototype.defineSizeMapping, function(a, b) {
        Xl(a, b);
        this.J.G(Gj(b.message), null, this);
        _.t.console && _.t.console.warn && _.t.console.warn("Incorrect usage of googletag.Slot defineSizeMapping: " + b.message);
        return this
    });
    var on = function(a) {
            var b = window,
                c = null;
            b.top == b && (b = nn(b, !1), c = a.getSizes(b.width, b.height));
            null == c && (c = a.getSizes());
            return ea(c, function(a) {
                return _.w(a) ? a : [a.getWidth(), a.getHeight()]
            })
        },
        rl = function(a) {
            var b = [],
                c = !1;
            _.B(on(a), function(a) {
                _.y(a) ? b.push(a.join("x")) : "fluid" == a ? c = !0 : b.push(a)
            });
            c && b.unshift("320x50");
            return b.join("|")
        };
    _.h = P.prototype;
    _.h.hasWrapperDiv = function() {
        return !!_.Q(this)
    };
    _.h.setClickUrl = function(a) {
        if (!_.w(a)) return this.J.G(K("Slot.setClickUrl", [a]), null, this), this;
        this.ma = a;
        return this
    };
    _.h.setClickUrl = _.O(45, P.prototype.setClickUrl);
    _.h.getClickUrl = function() {
        return this.ma
    };
    _.h.setForceSafeFrame = function(a) {
        if (!_.Da(a)) return this.J.G(K("Slot.setForceSafeFrame", [a]), null, this), this;
        this.X = a;
        return this
    };
    _.h.setForceSafeFrame = _.O(55, P.prototype.setForceSafeFrame);
    _.h.setCategoryExclusion = function(a) {
        _.w(a) && !Wa(jb(a)) ? (vb(this.V, a), this.J.info(Hj(a), null, this)) : this.J.G(K("Slot.setCategoryExclusion", [a]), null, this);
        return this
    };
    _.h.setCategoryExclusion = _.O(46, P.prototype.setCategoryExclusion);
    _.h.clearCategoryExclusions = function() {
        this.J.info(Ij(), null, this);
        this.V = [];
        return this
    };
    _.h.clearCategoryExclusions = _.O(47, P.prototype.clearCategoryExclusions);
    _.h.getCategoryExclusions = function() {
        return _.zb(this.V)
    };
    _.h.getCategoryExclusions = _.O(48, P.prototype.getCategoryExclusions);
    _.h.setTargeting = function(a, b) {
        var c = [];
        _.y(b) ? c = b : b && c.push(b.toString());
        _.w(a) ? (this.J.info(Jj(a, c.join(), this.getAdUnitPath()), null, this), this.v[a] = c) : this.J.G(K("Slot.setTargeting", [a, b]), null, this);
        return this
    };
    _.h.setTargeting = _.O(49, P.prototype.setTargeting);
    _.h.clearTargeting = function(a) {
        if ("undefined" != typeof a) {
            if (!_.w(a) || Wa(jb(a))) return this.J.G(K("Slot.clearTargeting", [a]), null, this), this;
            if (!this.v[a]) return this.J.G(Wk(a, this.getAdUnitPath()), null, this), this;
            delete this.v[a];
            this.J.info(Xk(a, this.getAdUnitPath()), null, this)
        } else this.J.info(Kj(), null, this), this.v = {};
        return this
    };
    _.h.clearTargeting = _.O(50, P.prototype.clearTargeting);
    _.h.getTargetingMap = function() {
        return Pb(this.v)
    };
    _.h.getTargeting = function(a) {
        return _.w(a) ? this.v.hasOwnProperty(a) ? _.zb(this.v[a]) : [] : (this.J.G(K("Slot.getTargeting", [a]), null, this), [])
    };
    _.h.getTargeting = _.O(51, P.prototype.getTargeting);
    _.h.getTargetingKeys = function() {
        return id(this.v)
    };
    _.h.getTargetingKeys = _.O(52, P.prototype.getTargetingKeys);
    _.h.Ta = function(a) {
        this.za = a
    };
    _.h.getOutOfPage = function() {
        return this.za
    };
    _.h.getAudExtId = function() {
        return this.ka
    };
    _.h.gtfcd = function() {
        return this.xa
    };
    _.h.setCollapseEmptyDiv = function(a, b) {
        if (!_.Da(a) || b && !_.Da(b)) return this.J.G(K("Slot.setCollapseEmptyDiv", _.ha([a, b], _.u)), null, this), this;
        this.ta = (this.na = a) && !!b;
        b && !a && this.J.G(Lj(this.l.toString()), null, this);
        return this
    };
    _.h.setCollapseEmptyDiv = _.O(53, P.prototype.setCollapseEmptyDiv);
    _.h.getCollapseEmptyDiv = function() {
        return this.na
    };
    _.h.getDivStartsCollapsed = function() {
        return this.ta
    };
    pn = function(a, b) {
        if (!a.hasWrapperDiv()) return a.J.error(Mj(a.l.toString()), null, a), !1;
        var c = _.t.document,
            d = a.l.getDomId();
        c = _.Q(a, c);
        if (!c) return a.J.error(Nj(d, a.l.toString()), null, a), !1;
        d = a.W;
        return _.w(d) && 0 < d.length ? (a.renderStarted(), c.innerHTML = d, a.renderEnded(b), !0) : !1
    };
    _.qn = function(a, b) {
        a = new qm(a, !0, "publisher_ads");
        if (_.z(b)) {
            var c = b._empty_;
            a.isEmpty = c;
            c || (a.size = [b._width_, b._height_], b._creative_ids_ && b._adgroup2_ids_ && (a.sourceAgnosticCreativeId = b._creative_ids_[0], a.sourceAgnosticLineItemId = b._adgroup2_ids_[0], c = !!b._is_afc_, a.isBackfill = c, c || (a.creativeId = b._creative_ids_[0], a.lineItemId = b._adgroup2_ids_[0])), b._advertiser_ids_ && (a.advertiserId = b._advertiser_ids_[0]), b._campaign_ids_ && (a.campaignId = b._campaign_ids_[0]), b._label_ids_ && b._label_ids_[0] && (a.labelIds = _.w(b._label_ids_[0]) ? b._label_ids_[0].split("|") : [b._label_ids_[0]]))
        }
        return a
    };
    _.rn = function(a) {
        return new qm(a, !0, "publisher_ads")
    };
    _.h = P.prototype;
    _.h.fetchStarted = function(a) {
        this.C || Sm(_.Dm(), "count_of_requested_slots");
        this.C = this.J.info(yj(this.getAdUnitPath()), null, this);
        this.oa = a;
        this.O++
    };
    _.h.getContentUrl = function() {
        return this.oa
    };
    _.h.fetchEnded = function() {
        this.va = this.J.info(zj(this.getAdUnitPath()), null, this, this.C)
    };
    _.h.renderStarted = function() {
        this.D = this.J.info(Aj(this.getAdUnitPath()), null, this)
    };
    _.h.getResponseInformation = function() {
        return this.P
    };
    _.h.renderEnded = function(a) {
        a.isEmpty ? this.P = null : this.P = new om(a.advertiserId, a.campaignId, a.creativeId, a.labelIds, a.lineItemId, a.sourceAgnosticCreativeId, a.sourceAgnosticLineItemId, a.isBackfill);
        this.Ba || Sm(_.Dm(), "count_of_rendered_slots");
        this.Ba = this.J.info(Bj(this.getAdUnitPath()), null, this, this.D);
        _.B(this.o, function(b) {
            if (b.getName() == a.serviceName) {
                var c;
                if (c = !a.slotContentChanged) c = b.C.slotRenderEnded, c = !!c && 0 < c.length;
                c && (c = new _.M("slot_render_ended_false_positive"), _.q(c), _.N(c));
                vm(b, "slotRenderEnded", a)
            }
        })
    };
    _.h.loaded = function() {
        sn(this, "slotOnload", new tm(this));
        var a = _.Dm(),
            b = this.getCsiId(),
            c = this.j;
        _.Mm(a, "ad_render_period", b, c);
        _.ef(_.el.u(), (6).toString(), b);
        if (!this.m) {
            var d = _.tn(this, window.document);
            Vm(a, b, d, c);
            window.setTimeout(function() {
                Vm(a, b, d, c)
            }, 1E3)
        }
    };
    _.h.impressionViewable = function() {
        sn(this, "impressionViewable", new rm(this))
    };
    var un = function(a) {
        a.Z = !1;
        a.H = null;
        a.P = null;
        a.Y = !1;
        a.T = null;
        a.ha = -1;
        a.ca = !1
    };
    P.prototype.Qa = function(a, b) {
        a && !this.Z && (this.impressionViewable(), this.Z = !0);
        a = this.H;
        this.H = Math.floor(b);
        a !== this.H && this.Sa()
    };
    P.prototype.visibilityChanged = function(a) {
        sn(this, "slotVisibilityChanged", new sm(this, a))
    };
    P.prototype.setFirstLook = function(a) {
        if (!_.Da(a)) return this.J.G(K("Slot.setFirstLook", [a]), null, this), this;
        this.wa = a ? 1 : 2;
        return this
    };
    P.prototype.getFirstLook = function() {
        return this.wa
    };
    var vn = function(a) {
        var b = [],
            c = a.getTargetingMap();
        _.D(c, function(a, c) {
            for (var d = [], e = 0; e < a.length; ++e) d.push((0, window.encodeURIComponent)(a[e]));
            b.push((0, window.encodeURIComponent)(c) + "=" + d.join(","))
        });
        a = a.getCategoryExclusions();
        if (0 < a.length && !("excl_cat" in c)) {
            c = [];
            for (var d = 0; d < a.length; ++d) c.push((0, window.encodeURIComponent)(a[d]));
            b.push((0, window.encodeURIComponent)("excl_cat") + "=" + c.join(","))
        }
        return b.join("&")
    };
    P.prototype.Pa = function() {
        return this.O
    };
    P.prototype.getEscapedQemQueryId = function() {
        return this.T && this.T._qqid_ || ""
    };
    var sn = function(a, b, c) {
        _.B(a.o, function(a) {
            a.getName() == c.serviceName && vm(a, b, c)
        })
    };
    P.prototype.setSafeFrameConfig = function(a) {
        if (a && _.z(a)) {
            if (a = cl(a)) this.$ = a
        } else this.J.error(K("Slot.setSafeFrameConfig", [a]), null, this);
        return this
    };
    P.prototype.setSafeFrameConfig = _.O(56, P.prototype.setSafeFrameConfig);
    _.wn = function(a) {
        return "google_ads_iframe_" + _.L(a)
    };
    P.prototype.getCsiId = function() {
        return this.pa
    };
    _.tn = function(a, b) {
        return a.N ? a.N : b.getElementById(_.wn(a))
    };
    _.xn = function(a, b) {
        if (a.K) return a.K;
        a = _.wn(a) + "__container__";
        return b.getElementById(a)
    };
    var yn = function() {
            this.l = [];
            this.m = [];
            this.j = {}
        },
        zn = function(a, b) {
            return a.j[b] || []
        };
    Fa(yn);
    var An = function() {
            this.j = {};
            this.m = {};
            this.l = {};
            this.J = If()
        },
        Bn = function(a, b, c, d) {
            if (!_.w(b) || 0 >= b.length || !c) return null;
            b in a.j || (a.j[b] = [], a.m[b] = 0);
            c = new P(b, a.m[b], c, d);
            a.m[b]++;
            d = c.getSlotId().getDomId();
            if (a.l[d]) return a.J.error(Rj(d)), null;
            a.j[b].push(c);
            a.l[c.getSlotId().getDomId()] = c;
            Rl.push(c);
            a = Fl([c])[0];
            b = _.Dm();
            Sm(b, "count_of_slots");
            b.F || (b.F = !0, Im(b, "n" + a));
            Nm(b);
            return c
        },
        Cn = function(a) {
            var b = [];
            _.Jb(a.j, function(a) {
                _.B(a, function(a) {
                    b.push(a)
                })
            });
            return b
        },
        Gn, In;
    An.prototype.o = function(a) {
        var b = [];
        a = zn(yn.u(), a);
        _.B(a, function(a) {
            (a = _.tn(a, window.document)) && b.push(a.contentWindow)
        });
        return b
    };
    var Dn = function(a, b) {
            _.B(b, function(a) {
                a.ba = !0;
                a.J.info(Tk(a.l.toString()), null, a);
                var b = a.getAdUnitPath();
                _.wb(this.j[b], a);
                if (0 == this.j[b].length) {
                    var c = this.j;
                    b in c && delete c[b]
                }
                b = this.l;
                c = a.getSlotId().getDomId();
                c in b && delete b[c];
                _.wb(Rl, a)
            }, a)
        },
        En = function(a, b) {
            if (b && !_.y(b)) return a.J.G(K("googletag.destroySlots", [b])), !1;
            b ? (ia(b), b = _.ha(b, function(a) {
                return a instanceof P && !a.ba
            })) : b = Cn(a);
            if (!b || 0 == b.length) return !1;
            Zm().destroySlots(b);
            Dn(a, b);
            return !0
        };
    An.prototype.v = function(a, b) {
        b = b || 0;
        a = _.w(a) && this.j[a] || [];
        return 0 <= b && b < a.length && (a = a[b], a.getSlotId().u() == b) ? a : null
    };
    _.Fn = function(a, b) {
        return a.l[b] ? a.l[b] : null
    };
    Gn = function(a, b) {
        return Lb(a.j, function(a) {
            return _.ub(a, b)
        })
    };
    _.Hn = function() {
        var a = _.Cf();
        return a.slot_manager_instance || (a.slot_manager_instance = new An)
    };
    In = function(a, b, c) {
        if (_.w(a) && (!_.u(c) || _.w(c))) {
            var d = _.Hn();
            return d && Bn(d, a, b, c)
        }
        return null
    };
    In = _.O(74, In);
    var Jn = function(a) {
        var b = _.Hn();
        return !(!b || !En(b, a))
    };
    Jn = _.O(75, Jn);
    var Kn = function(a, b) {
        var c = null;
        if (_.w(a) && (!_.u(b) || _.w(b))) {
            c = _.Hn();
            if (!c) return null;
            c = Bn(c, a, [1, 1], b)
        }
        c && c.Ta(!0);
        return c
    };
    Kn = _.O(73, Kn);
    Df("defineOutOfPageSlot", Kn);
    Df("defineSlot", In);
    Df("defineUnit", In);
    Df("destroySlots", Jn);
    Df("getWindowsThatCanCommunicateWithHostpageLibrary", An.prototype.o);
    An.prototype.find = An.prototype.v;
    An.getInstance = _.Hn;
    var Ln = _.O(95, function(a) {
        var b = If(),
            c = null;
        if (_.w(a)) var d = a;
        else if (_.z(a) && 1 == a.nodeType) c = a, d = c.id;
        else {
            b.error(Pj(String(a)));
            return
        }
        if (a = _.Fn(_.Hn(), d))
            if (b = c, a.Ca = !0, a.F = void 0 === b ? null : b, a.fa && !a.hasWrapperDiv()) a.J.G(Oj(a.I, a.l.getDomId()), null, a);
            else
                for (b = 0; b < a.o.length; ++b) a.o[b].l && a.o[b].fb(a);
        else b.error(Qj(String(d)))
    });
    Df("display", Ln);
    var R = {},
        Mn = (R.google_ad_channel = "channel", R.google_ad_type = "ad_type", R.google_ad_format = "format", R.google_color_bg = "color_bg", R.google_color_border = "color_border", R.google_color_link = "color_link", R.google_color_text = "color_text", R.google_color_url = "color_url", R.google_page_url = "url", R.google_allow_expandable_ads = "ea", R.google_ad_section = "region", R.google_cpm = "cpm", R.google_encoding = "oe", R.google_safe = "adsafe", R.google_flash_version = "flash", R.google_font_face = "f", R.google_font_size = "fs", R.google_hints = "hints", R.google_ad_host = "host", R.google_ad_host_channel = "h_ch", R.google_ad_host_tier_id = "ht_id", R.google_kw_type = "kw_type", R.google_kw = "kw", R.google_contents = "contents", R.google_reuse_colors = "reuse_colors", R.google_targeting = "targeting", R.google_adtest = "adtest", R.google_alternate_color = "alt_color", R.google_alternate_ad_url = "alternate_ad_url", R.google_cust_age = "cust_age", R.google_cust_ch = "cust_ch", R.google_cust_gender = "cust_gender", R.google_cust_interests = "cust_interests", R.google_cust_job = "cust_job", R.google_cust_l = "cust_l", R.google_cust_lh = "cust_lh", R.google_cust_u_url = "cust_u_url", R.google_cust_id = "cust_id", R.google_language = "hl", R.google_city = "gcs", R.google_country = "gl", R.google_region = "gr", R.google_available_width = "avail_w", R.google_content_recommendation_columns_num = "cr_col", R.google_content_recommendation_rows_num = "cr_row", R.google_content_recommendation_ui_type = "crui", R.google_color_line = "color_line", R.google_disable_video_autoplay = "disable_video_autoplay", R.google_full_width_responsive_allowed = "fwr", R.google_is_split_slot = "spl", R.google_pgb_reactive = "pra", R.google_resizing_allowed = "rs", R.google_resizing_height = "rh", R.google_resizing_width = "rw", R.google_responsive_formats = "resp_fmts", R.google_safe_for_responsive_override = "sfro", R.google_video_doc_id = "video_doc_id", R.google_video_product_type = "video_product_type", R.google_webgl_support = "wgl", R),
        S = {},
        Nn = (S.google_ad_block = "ad_block", S.google_ad_client = "client", S.google_ad_output = "output", S.google_ad_callback = "callback", S.google_ad_height = "h", S.google_ad_resize = "twa", S.google_ad_slot = "slotname", S.google_ad_unit_key = "adk", S.google_ad_dom_fingerprint = "adf", S.google_ad_width = "w", S.google_analytics_url_parameters = "aup", S.google_captcha_token = "captok", S.google_content_recommendation_ui_type = "crui", S.google_content_recommendation_columns_num = "cr_col", S.google_content_recommendation_rows_num = "cr_row", S.google_ctr_threshold = "ctr_t", S.google_cust_criteria = "cust_params", S.google_delay_requests_count = "drc", S.google_delay_requests_delay = "drd", S.google_full_width_responsive = "fwr_optout", S.google_image_size = "image_size", S.google_last_modified_time = "lmt", S.google_loeid = "loeid", S.google_max_num_ads = "num_ads", S.google_max_radlink_len = "max_radlink_len", S.google_mtl = "mtl", S.google_native_settings_key = "nsk", S.google_nofo = "nofo", S.google_enable_content_recommendations = "ecr", S.google_infinite_scroll_slot_type = "ifsl", S.google_num_radlinks = "num_radlinks", S.google_num_radlinks_per_unit = "num_radlinks_per_unit", S.google_pucrd = "pucrd", S.google_reactive_plaf = "plaf", S.google_reactive_plat = "plat", S.google_reactive_fba = "fba", S.google_reactive_sra_channels = "plach", S.google_responsive_auto_format = "rafmt", S.google_only_ads_with_video = "only_ads_with_video", S.google_rl_dest_url = "rl_dest_url", S.google_rl_filtering = "rl_filtering", S.google_rl_mode = "rl_mode", S.google_rt = "rt", S.google_source_type = "src_type", S.google_sui = "sui", S.google_tag_for_child_directed_treatment = "tfcd", S.google_tag_origin = "to", S.google_tdsma = "tdsma", S.google_tfs = "tfs", S.google_tl = "tl", S),
        On = {},
        Pn = (On.google_core_dbp = "dbp", On.google_lact = "lact", On.google_only_pyv_ads = "pyv", On.google_scs = "scs", On.google_with_pyv_ads = "withpyv", On.google_previous_watch = "p_w", On.google_previous_searches = "p_s", On.google_video_url_to_fetch = "durl", On.google_yt_pt = "yt_pt", On.google_yt_up = "yt_up", On);
    var Qn, jf, Rn = de(),
        Sn = new bf(1, Rn),
        Tn = function() {
            Rn.google_measure_js_timing || (Sn.j = !1, Sn.events != Sn.l.google_js_reporting_queue && (af() && _.B(Sn.events, cf), Sn.events.length = 0))
        };
    Qn = new function() {
        var a = void 0 === a ? Sa : a;
        this.o = "http:" === a.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.m = "/pagead/gen_204?id=";
        this.j = .01;
        this.v = Math.random()
    };
    jf = new ff(Qn, "jserror", !0, Sn);
    "complete" == Rn.document.readyState ? Tn() : Sn.j && _.E(Rn, "load", function() {
        Tn()
    });
    var Un = window.navigator,
        Vn = function() {
            try {
                return Un.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        Wn = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Xn = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Wn(a.toLowerCase())
        },
        Yn = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Zn = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        $n = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    var bo;
    _.ao = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
    };
    bo = function() {
        var a = window.document,
            b;
        a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState ? b = "webkitvisibilitychange" : a.visibilityState && (b = "visibilitychange");
        return b
    };
    var fo = function() {
            var a = co,
                b = eo;
            if (!(window && Math.random && window.navigator)) return -1;
            if (window.__google_ad_urls) {
                var c = window.__google_ad_urls;
                try {
                    if (c && c.getOseId()) return c.getOseId()
                } catch (e) {}
            }
            if (!window.__google_ad_urls_id) {
                c = window.google_enable_ose;
                if (!0 === c) var d = 2;
                else !1 !== c && (d = fd([0], a), null == d && ((d = fd([2], b)) || (d = 3)));
                if (!d) return 0;
                window.__google_ad_urls_id = d
            }
            return window.__google_ad_urls_id
        },
        go = function() {
            var a = 0;
            !_.u(_.t.postMessage) && (a |= 1);
            return a
        };
    var ho = function() {};
    _.h = ho.prototype;
    _.h.getNewBlocks = function() {};
    _.h.setupOse = function() {};
    _.h.getOseId = function() {
        return -1
    };
    _.h.getCorrelator = function() {
        return ""
    };
    _.h.numBlocks = function() {
        return 0
    };
    _.h.registerAdBlock = function() {};
    _.h.unloadAdBlock = function() {};
    _.h.setLoadOsdJsOnPubWindow = function() {};
    var io = /Trident|MSIE/,
        jo = /rv:11|Trident\/[78]/,
        lo = function(a, b) {
            ko() ? _.E(a, "readystatechange", function(c) {
                a && "complete" == a.readyState && b(c)
            }) : _.E(a, "load", b)
        },
        mo = function() {
            var a = (de() || _.t).google_osd_amcb;
            return _.Ia(a) ? a : null
        },
        ko = function() {
            var a = _.t.navigator;
            return (a = a && a.userAgent) ? io.test(a) && !jo.test(a) : !1
        };
    var no = function(a, b) {
            this.o = a;
            this.l = b && b.l ? b.l : [];
            this.m = b && b.m ? b.m : 0;
            this.v = b ? b.v : "";
            this.j = b && b.j ? b.j : [];
            this.A = !1;
            if (b) {
                for (a = 0; a < this.l.length; ++a) this.l[a].push("true");
                for (a = 0; a < this.j.length; ++a) this.j[a].o = !0
            }
        },
        oo = function(a, b) {
            var c = a.l,
                d = a.o.google_ad_request_done;
            d && (d = d.orig_callback || d, a.o.google_ad_request_done = function(a) {
                if (a && 0 < a.length) {
                    var e = 1 < a.length ? a[1].url : null,
                        g = a[0].log_info || null,
                        k = a[0].activeview_url || null,
                        l = a[0].activeview_js_enabled || null,
                        n = a[0].activeview_js_immediate_enabled || null,
                        p = a[0].activeview_js_tos_enabled || null,
                        v = a[0].activeview_cid || null,
                        x = a[0].activeview_metadata || null,
                        J = a[0].image_url || "",
                        La = a[0].type || null;
                    c.push([b, hb(a[0].url), e, g, null, k, l, n, p, v, x, hb(J), La])
                }
                d(a)
            }, a.o.google_ad_request_done.orig_callback = d)
        },
        qo = function(a) {
            var b = a.A ? de() : _.t;
            b && b.document || Pe(Qn, "osdgnd", {
                win: !(!window || !window.document),
                global: !(!_.t || !_.t.document)
            }, !0, void 0, void 0);
            a = po;
            b = b || _.t;
            b.google_osd_loaded ? a = !1 : (_.ed(b.document, a), a = b.google_osd_loaded = !0);
            a && ee()
        },
        so = function(a, b, c, d) {
            var e = a.l,
                f = d || 0,
                g = b.document;
            if (0 < e.length)
                for (var k = g.getElementsByTagName("a"), l = 0; l < k.length; l++)
                    for (var n = 0; n < e.length; n++)
                        if (0 <= k[l].href.indexOf(e[n][1])) {
                            var p = k[l].parentNode;
                            if (e[n][2])
                                for (var v = p, x = 0; 4 > x; x++) {
                                    if (0 <= v.innerHTML.indexOf(e[n][2])) {
                                        p = v;
                                        break
                                    }
                                    v = v.parentNode
                                }
                            ro(e[n], p, f, c);
                            e.splice(n, 1);
                            break
                        }
            if (0 < e.length)
                for (k = g.getElementsByTagName("embed"), l = 0; l < k.length; l++)
                    for (n = 0; n < e.length; n++)
                        if (p = e[n][11], "flash" == e[n][12] && p && (v = k[l], v.src == p)) {
                            p = v;
                            0 == p.getBoundingClientRect().height && p.parentElement && "OBJECT" == p.parentElement.tagName && (p = p.parentElement);
                            ro(e[n], p, f, c);
                            e.splice(n, 1);
                            break
                        }
            if (0 < e.length)
                for (g = g.getElementsByTagName("param"), k = 0; k < g.length; k++)
                    for (l = 0; l < e.length; l++)
                        if (p = e[l][11], "flash" == e[l][12] && p && (n = g[k], "movie" == n.name && n.value == p)) {
                            p = void 0;
                            n.parentNode && "OBJECT" == n.parentNode.tagName && (p = n.parentNode);
                            if (!p) break;
                            ro(e[l], p, f, c);
                            e.splice(l, 1);
                            break
                        }
            if (f = 0 < e.length) ie || (ie = je(_.t, !0).nb), f = b != ie;
            if (f) try {
                so(a, b.parent, c, d)
            } catch (J) {}
            for (a = 0; a < e.length; ++a) b = e[a], "true" == b[6] && to("osd2", b[3]), "true" == b[7] && to("osdim", b[3])
        },
        ro = function(a, b, c, d) {
            d(b, a[0], c, !0, a[3], void 0, a[5], "true" == a[6], "true" == a[7], "true" == a[13], "true" == a[8], a[9], a[10])
        },
        to = function(a, b) {
            a && b && _.ae(_.t, "//pagead2.googlesyndication.com/activeview?id=" + a + "&r=j" + ("&avi=" + b), void 0)
        };
    _.h = no.prototype;
    _.h.getNewBlocks = function(a, b) {
        b && so(this, this.o, a, 1);
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.m && e.j && (a(e.j, e.v, e.C, e.l, "", void 0, "", !1, !1, e.o, !1, "", "", e.A), e.m = !0)
        }
        b && ((de() || _.t).google_osd_amcb = a)
    };
    _.h.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = fo();
        if (!b) return 0;
        this.m = b;
        this.v = String(a || 0);
        return this.getOseId()
    };
    _.h.getOseId = function() {
        return window && Math.random && window.navigator ? this.m : -1
    };
    _.h.getCorrelator = function() {
        return this.v
    };
    _.h.numBlocks = function() {
        return this.l.length + this.j.length
    };
    _.h.registerAdBlock = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? function() {
            return null
        } : g;
        if ((e = mo()) && d) e(d, a, b, !0, "", void 0, "", !1, !1, !1, !1, "", "", g);
        else {
            if ("js" == c) oo(this, a);
            else {
                var k = new uo(a, b, d, g);
                this.j.push(k);
                d && lo(d, kf(function() {
                    k.l = !0
                }))
            }
            po || (_.ae(_.t, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a), void 0), po = Oe(new Ie, "https:", "pagead2.googlesyndication.com", "/pagead/osd.js"));
            qo(this)
        }
    };
    _.h.unloadAdBlock = function(a, b) {
        _.u(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, void 0 === b ? !1 : b)
    };
    _.h.setLoadOsdJsOnPubWindow = function(a) {
        this.A = a
    };
    var vo = function() {
            var a = de(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new no(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new no(a, b)
            } catch (c) {
                return a.__google_ad_urls = new no(a)
            }
        },
        po = "",
        eo = 0,
        co = 0,
        uo = function(a, b, c, d) {
            d = void 0 === d ? Ea : d;
            this.v = a;
            this.C = b;
            this.j = c;
            this.o = this.m = this.l = !1;
            this.A = d
        };
    Pa("Goog_AdSense_getAdAdapterInstance", vo);
    Pa("Goog_AdSense_OsdAdapter", no);
    var wo = function() {
        if (!_.Rb() || 0 <= _.mb(_.Ub(), 10)) var a = vo();
        else {
            a = de();
            var b = a.__google_ad_urls;
            a = b ? b : a.__google_ad_urls = new ho
        }
        return a
    };
    var xo = function(a, b, c) {
        this.o = c;
        this.m = a;
        this.v = b;
        this.l = 0;
        this.j = null
    };
    xo.prototype.get = function() {
        if (0 < this.l) {
            this.l--;
            var a = this.j;
            this.j = a.next;
            a.next = null
        } else a = this.m();
        return a
    };
    var yo = function(a, b) {
        a.v(b);
        a.l < a.o && (a.l++, b.next = a.j, a.j = b)
    };
    var zo = function(a) {
            _.t.setTimeout(function() {
                throw a;
            }, 0)
        },
        Ao, Bo = function() {
            var a = _.t.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
                var a = window.document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                window.document.documentElement.appendChild(a);
                var b = a.contentWindow;
                a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
                a = (0, _.A)(function(a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !_.Rb()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (_.u(c.next)) {
                        c = c.next;
                        var a = c.zb;
                        c.zb = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        zb: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
                var b = window.document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                window.document.documentElement.appendChild(b)
            } : function(a) {
                _.t.setTimeout(a, 0)
            }
        };
    var Do = new xo(function() {
            return new Co
        }, function(a) {
            a.reset()
        }, 100),
        Fo = function() {
            var a = Eo,
                b = null;
            a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
            return b
        },
        Co = function() {
            this.next = this.l = this.j = null
        };
    Co.prototype.set = function(a, b) {
        this.j = a;
        this.l = b;
        this.next = null
    };
    Co.prototype.reset = function() {
        this.next = this.l = this.j = null
    };
    var Jo = function(a, b) {
            Go || Ho();
            Io || (Go(), Io = !0);
            var c = Eo,
                d = Do.get();
            d.set(a, b);
            c.l ? c.l.next = d : c.j = d;
            c.l = d
        },
        Go, Ho = function() {
            if (-1 != String(_.t.Promise).indexOf("[native code]")) {
                var a = _.t.Promise.resolve(void 0);
                Go = function() {
                    a.then(Ko)
                }
            } else Go = function() {
                var a = Ko;
                !_.Ia(_.t.setImmediate) || _.t.Window && _.t.Window.prototype && !C("Edge") && _.t.Window.prototype.setImmediate == _.t.setImmediate ? (Ao || (Ao = Bo()), Ao(a)) : _.t.setImmediate(a)
            }
        },
        Io = !1,
        Eo = new function() {
            this.l = this.j = null
        },
        Ko = function() {
            for (var a; a = Fo();) {
                try {
                    a.j.call(a.l)
                } catch (b) {
                    zo(b)
                }
                yo(Do, a)
            }
            Io = !1
        };
    var Lo = function() {};
    var Mo, No = function() {};
    _.Qa(No, Lo);
    No.prototype.j = function() {
        a: {
            if (!this.l && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
                for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                    var c = a[b];
                    try {
                        new window.ActiveXObject(c);
                        var d = this.l = c;
                        break a
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            d = this.l
        }
        return d ? new window.ActiveXObject(d) : new window.XMLHttpRequest
    };
    Mo = new No;
    var Po = function(a, b) {
            this.j = 0;
            this.C = void 0;
            this.o = this.l = this.m = null;
            this.v = this.A = !1;
            if (a != Ea) try {
                var c = this;
                a.call(b, function(a) {
                    Oo(c, 2, a)
                }, function(a) {
                    Oo(c, 3, a)
                })
            } catch (d) {
                Oo(this, 3, d)
            }
        },
        Qo = function() {
            this.next = this.context = this.l = this.m = this.j = null;
            this.o = !1
        };
    Qo.prototype.reset = function() {
        this.context = this.l = this.m = this.j = null;
        this.o = !1
    };
    var Ro = new xo(function() {
            return new Qo
        }, function(a) {
            a.reset()
        }, 100),
        So = function(a, b, c) {
            var d = Ro.get();
            d.m = a;
            d.l = b;
            d.context = c;
            return d
        };
    Po.prototype.then = function(a, b, c) {
        return To(this, _.Ia(a) ? a : null, _.Ia(b) ? b : null, c)
    };
    Po.prototype.then = Po.prototype.then;
    Po.prototype.$goog_Thenable = !0;
    var Uo = function(a, b) {
        return To(a, null, b, void 0)
    };
    Po.prototype.cancel = function(a) {
        0 == this.j && Jo(function() {
            var b = new Vo(a);
            Wo(this, b)
        }, this)
    };
    var Wo = function(a, b) {
            if (0 == a.j)
                if (a.m) {
                    var c = a.m;
                    if (c.l) {
                        for (var d = 0, e = null, f = null, g = c.l; g && (g.o || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.j && 1 == d ? Wo(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Xo(c), Yo(c, e, 3, b)))
                    }
                    a.m = null
                } else Oo(a, 3, b)
        },
        $o = function(a, b) {
            a.l || 2 != a.j && 3 != a.j || Zo(a);
            a.o ? a.o.next = b : a.l = b;
            a.o = b
        },
        To = function(a, b, c, d) {
            var e = So(null, null, null);
            e.j = new Po(function(a, g) {
                e.m = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (n) {
                        g(n)
                    }
                } : a;
                e.l = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        !_.u(e) && b instanceof Vo ? g(b) : a(e)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.j.m = a;
            $o(a, e);
            return e.j
        };
    Po.prototype.F = function(a) {
        this.j = 0;
        Oo(this, 2, a)
    };
    Po.prototype.H = function(a) {
        this.j = 0;
        Oo(this, 3, a)
    };
    var Oo = function(a, b, c) {
            if (0 == a.j) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.j = 1;
                a: {
                    var d = c,
                        e = a.F,
                        f = a.H;
                    if (d instanceof Po) {
                        $o(d, So(e || Ea, f || null, a));
                        var g = !0
                    } else {
                        if (d) try {
                            var k = !!d.$goog_Thenable
                        } catch (n) {
                            k = !1
                        } else k = !1;
                        if (k) d.then(e, f, a), g = !0;
                        else {
                            if (_.z(d)) try {
                                var l = d.then;
                                if (_.Ia(l)) {
                                    ap(d, l, e, f, a);
                                    g = !0;
                                    break a
                                }
                            } catch (n) {
                                f.call(a, n);
                                g = !0;
                                break a
                            }
                            g = !1
                        }
                    }
                }
                g || (a.C = c, a.j = b, a.m = null, Zo(a), 3 != b || c instanceof Vo || bp(a, c))
            }
        },
        ap = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, k)
            } catch (l) {
                k(l)
            }
        },
        Zo = function(a) {
            a.A || (a.A = !0, Jo(a.D, a))
        },
        Xo = function(a) {
            var b = null;
            a.l && (b = a.l, a.l = b.next, b.next = null);
            a.l || (a.o = null);
            return b
        };
    Po.prototype.D = function() {
        for (var a; a = Xo(this);) Yo(this, a, this.j, this.C);
        this.A = !1
    };
    var Yo = function(a, b, c, d) {
            if (3 == c && b.l && !b.o)
                for (; a && a.v; a = a.m) a.v = !1;
            if (b.j) b.j.m = null, cp(b, c, d);
            else try {
                b.o ? b.m.call(b.context) : cp(b, c, d)
            } catch (e) {
                dp.call(null, e)
            }
            yo(Ro, b)
        },
        cp = function(a, b, c) {
            2 == b ? a.m.call(a.context, c) : a.l && a.l.call(a.context, c)
        },
        bp = function(a, b) {
            a.v = !0;
            Jo(function() {
                a.v && dp.call(null, b)
            })
        },
        dp = zo,
        Vo = function(a) {
            Ta.call(this, a)
        };
    _.Qa(Vo, Ta);
    Vo.prototype.name = "cancel";
    var hp = function(a, b, c, d) {
            var e = d || {},
                f = e.Ed ? e.Ed.j() : Mo.j();
            return Uo(new Po(function(d, k) {
                var g;
                try {
                    f.open(a, b, !0)
                } catch (v) {
                    k(new ep("Error opening XHR: " + v.message, b))
                }
                f.onreadystatechange = function() {
                    if (4 == f.readyState) {
                        _.t.clearTimeout(g);
                        a: switch (f.status) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var a = !0;
                                break a;
                            default:
                                a = !1
                        }!a && (a = 0 === f.status) && (a = b.match(_.qe)[1] || null, !a && _.t.self && _.t.self.location && (a = _.t.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a));
                        a ? d(f) : k(new fp(f.status, b))
                    }
                };
                f.onerror = function() {
                    k(new ep("Network error", b))
                };
                if (e.headers) {
                    for (var n in e.headers) {
                        var p = e.headers[n];
                        null != p && f.setRequestHeader(n, p)
                    }
                    p = e.headers["Content-Type"]
                }
                n = _.t.FormData && c instanceof _.t.FormData;
                "POST" != a || void 0 !== p || n || f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                e.withCredentials && (f.withCredentials = e.withCredentials);
                e.responseType && (f.responseType = e.responseType);
                e.mimeType && f.overrideMimeType(e.mimeType);
                0 < e.yd && (g = _.t.setTimeout(function() {
                    f.onreadystatechange = Ea;
                    f.abort();
                    k(new gp(b))
                }, e.yd));
                try {
                    f.send(c)
                } catch (v) {
                    f.onreadystatechange = Ea, _.t.clearTimeout(g), k(new ep("Error sending XHR: " + v.message, b))
                }
            }), function(a) {
                a instanceof Vo && f.abort();
                throw a;
            })
        },
        ep = function(a, b) {
            Ta.call(this, a + ", url=" + b);
            this.url = b
        };
    _.Qa(ep, Ta);
    ep.prototype.name = "XhrError";
    var fp = function(a, b) {
        ep.call(this, "Request Failed, status=" + a, b);
        this.status = a
    };
    _.Qa(fp, ep);
    fp.prototype.name = "XhrHttpError";
    var gp = function(a) {
        ep.call(this, "Request timed out", a)
    };
    _.Qa(gp, ep);
    gp.prototype.name = "XhrTimeoutError";
    var jp = function(a) {
            var b = ip;
            return function() {
                var c = this || _.t;
                c = c.closure_memoize_cache_ || (c.closure_memoize_cache_ = {});
                var d = b(a[Ja] || (a[Ja] = ++Ka), arguments);
                return c.hasOwnProperty(d) ? c[d] : c[d] = a.apply(this, arguments)
            }
        },
        ip = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\x0B")
        };
    var kp = function() {};
    _.Qa(kp, Lo);
    kp.prototype.j = function() {
        var a = new window.XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof window.XDomainRequest) return new lp;
        throw Error("Unsupported browser");
    };
    var lp = function() {
        this.j = new window.XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseText = "";
        this.status = -1;
        this.statusText = null;
        this.j.onload = (0, _.A)(this.Zc, this);
        this.j.onerror = (0, _.A)(this.Fb, this);
        this.j.onprogress = (0, _.A)(this.$c, this);
        this.j.ontimeout = (0, _.A)(this.bd, this)
    };
    _.h = lp.prototype;
    _.h.open = function(a, b, c) {
        if (null != c && !c) throw Error("Only async requests are supported.");
        this.j.open(a, b)
    };
    _.h.send = function(a) {
        if (a)
            if ("string" == typeof a) this.j.send(a);
            else throw Error("Only string data is supported");
        else this.j.send()
    };
    _.h.abort = function() {
        this.j.abort()
    };
    _.h.setRequestHeader = function() {};
    _.h.Zc = function() {
        this.status = 200;
        this.responseText = this.j.responseText;
        mp(this, 4)
    };
    _.h.Fb = function() {
        this.status = 500;
        this.responseText = "";
        mp(this, 4)
    };
    _.h.bd = function() {
        this.Fb()
    };
    _.h.$c = function() {
        this.status = 200;
        mp(this, 1)
    };
    var mp = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    var pp = function() {
            var a = _.t;
            this.l = a = void 0 === a ? _.t : a;
            this.v = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
            this.j = 2;
            this.m = [];
            this.o = !1;
            a: {
                var b = [_.t.top];a = [];
                for (var c = 0, d; d = b[c++];) {
                    a.push(d);
                    try {
                        if (d.frames)
                            for (var e = d.frames.length, f = 0; f < e && 50 > b.length; ++f) b.push(d.frames[f])
                    } catch (v) {}
                }
                b: {
                    try {
                        var g = _.t.parent;
                        if (g && g != _.t) {
                            var k = g;
                            break b
                        }
                    } catch (v) {}
                    k = null
                }(e = k) && a.unshift(e);a.unshift(_.t);
                var l;
                for (e = 0; e < a.length; ++e) try {
                    var n = a[e],
                        p = np(n);
                    if (p) {
                        this.j = op(p);
                        if (2 != this.j) break a;
                        !l && dd(n) && (l = n)
                    }
                } catch (v) {}
                this.l = l || this.l
            }
        },
        rp = function(a) {
            if (2 != qp(a)) {
                for (var b = 1 == qp(a), c = 0; c < a.m.length; c++) try {
                    a.m[c](b)
                } catch (d) {}
                a.m = []
            }
        },
        sp = function(a) {
            var b = np(a.l);
            b && 2 == a.j && (a.j = op(b))
        },
        qp = function(a) {
            sp(a);
            return a.j
        },
        up = function(a) {
            var b = tp;
            b.m.push(a);
            if (2 != b.j) rp(b);
            else if (b.o || (_.E(b.l, "message", function(a) {
                    var c = np(b.l);
                    if (c && a.source == c && 2 == b.j) {
                        switch (a.data) {
                            case "3p_cookie_yes":
                                b.j = 1;
                                break;
                            case "3p_cookie_no":
                                b.j = 0
                        }
                        rp(b)
                    }
                }), b.o = !0), np(b.l)) rp(b);
            else {
                a = b.l.document.createElement("iframe");
                a.src = b.v;
                a.name = "detect_3p_cookie";
                a.style.visibility = "hidden";
                a.style.height = "0";
                a.onload = function() {
                    sp(b);
                    rp(b)
                };
                try {
                    b.l.document.body.appendChild(a)
                } catch (c) {}
            }
        },
        vp = function(a, b) {
            try {
                return !!a.frames[b]
            } catch (c) {
                return !1
            }
        },
        np = function(a) {
            return a.frames[Wb("detect_3p_cookie")] || null
        },
        op = function(a) {
            return vp(a, "3p_cookie_yes") ? 1 : vp(a, "3p_cookie_no") ? 0 : 2
        };
    var wp = /^\.google\.(com\.)?[a-z]{2,3}$/,
        xp = /\.(cn|com\.bi|do|sl)$/,
        yp = function(a) {
            return wp.test(a) && !xp.test(a)
        },
        zp = _.t,
        tp, Cp = function() {
            var a = "https://adservice" + Ap[1] + (Ap[3] ? "/generate_204" : "/adsid/integrator.js"),
                b = ["domain=" + (0, window.encodeURIComponent)(_.t.location.hostname)];
            Bp[3] >= +new Date && b.push("adsid=" + (0, window.encodeURIComponent)(Bp[1]));
            return a + "?" + b.join("&")
        },
        Bp, Ap, Dp = function() {
            zp = _.t;
            Bp = zp.googleToken = zp.googleToken || {};
            var a = +new Date;
            Bp[1] && Bp[3] > a && 0 < Bp[2] || (Bp[1] = "", Bp[2] = -1, Bp[3] = -1, Bp[4] = "");
            Ap = zp.googleIMState = zp.googleIMState || {};
            yp(Ap[1]) || (Ap[1] = ".google.com");
            0 != Ap[2] && (Ap[2] = 1);
            _.Da(Ap[3]) || (Ap[3] = !1);
            _.Da(Ap[4]) || (Ap[4] = !1);
            _.y(Ap[5]) || (Ap[5] = [])
        },
        Ep = function(a) {
            try {
                a()
            } catch (b) {
                _.t.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Fp = function() {
            if (!Ap[4]) {
                Ap[4] = !0;
                var a = _.t.document;
                if (0 == Ap[2]) {
                    var b = Cp().replace(/[\W]/g, function(a) {
                            return "&#" + a.charCodeAt() + ";"
                        }),
                        c = Wb("script");
                    a.write("<" + c + ' src="' + b + '"></' + c + ">" + ("<" + c + ">processGoogleToken(" + (Ap[3] ? '{"newToken":"FBS"}' : "{}") + ");</" + c + ">"))
                } else {
                    b = a.createElement("script");
                    b.type = "text/javascript";
                    b.onerror = function() {
                        return _.t.processGoogleToken({}, 2)
                    };
                    Ap[3] && (b.onload = function() {
                        var a = {};
                        return _.t.processGoogleToken((a.newToken = "FBA", a))
                    });
                    c = cd(Cp());
                    b.src = Xc(c);
                    try {
                        (a.head || a.body || a.documentElement).appendChild(b)
                    } catch (d) {}
                    _.t.setTimeout(function() {
                        return _.t.processGoogleToken({}, 1)
                    }, 1E3)
                }
            }
        },
        Hp = function(a) {
            _.t.processGoogleToken = _.t.processGoogleToken || Gp;
            Dp();
            var b = zp.googleToken[5] || 0;
            a && (0 != b || Bp[3] >= +new Date ? Ep(a) : (Ap[5].push(a), Fp()));
            Bp[3] >= +new Date && Bp[2] >= +new Date || Fp()
        },
        Ip = function(a) {
            var b = Rd(function() {
                a && a()
            });
            tp = tp || new pp;
            up(function(a) {
                a && b()
            });
            Hp(b)
        },
        Jp = 0,
        Gp = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? 0 : b;
            var c = a.newToken || "",
                d = a.altDomain || "",
                e = (0, window.parseInt)(a.freshLifetimeSecs || "", 10) || 3600,
                f = (0, window.parseInt)(a.validLifetimeSecs || "", 10) || 86400;
            a = a["1p_jar"] || "";
            Dp();
            Ap[4] = !1;
            1E-5 > Math.random() && _.ae(_.t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + b, void 0);
            if (!c && d && yp(d) && 2 >= ++Jp) yp(d) && (Ap[1] = d), Fp();
            else {
                d = zp.googleToken = zp.googleToken || {};
                d[5] = b;
                0 == b && c && _.w(c) && 0 < e && 0 < f && _.w(a) && (b = +new Date, d[1] = c, d[2] = b + 1E3 * e, d[3] = b + 1E3 * f, d[4] = a, Dp());
                c = Ap[5];
                for (e = 0; e < c.length; e++) Ep(c[e]);
                Ap[5] = []
            }
        };
    var Kp = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.C = b.rootMargin ? fa(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = ea(this.C, function(a) {
                return "" + a.value + a.type
            }).join(" ");
            this.F = ka(b.threshold);
            this.D = a;
            this.j = [];
            this.o = [];
            this.v = !1;
            this.l = null;
            this.m = Sd(this.A, 100, this)
        },
        Lp = function(a) {
            if (a.root) var b = la(a.root);
            else {
                var c = wd(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = ea(a.C, function(a, c) {
                return "px" == a.type ? a.value : a.value * (c % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        Mp = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : pb(a.F, function(a) {
                return a < d != a < e
            })
        };
    Kp.prototype.A = function() {
        var a = this,
            b = Lp(this);
        _.B(this.j, function(c) {
            var d = c.target,
                e = la(d),
                f = e.width * e.height,
                g = Math.max(b.top, e.top),
                k = Math.min(b.right, e.right),
                l = Math.min(b.bottom, e.bottom),
                n = Math.max(b.left, e.left),
                p = k - n,
                v = l - g;
            g = 0 <= p && 0 <= v ? {
                top: g,
                right: k,
                bottom: l,
                left: n,
                width: p,
                height: v
            } : null;
            l = (k = !!g) ? g.width * g.height : 0;
            n = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? l / f : k ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: k,
                rootBounds: b,
                target: d,
                time: n && n.now ? n.now() : 0
            };
            Mp(a, c.Cb, d) && a.o.push(d);
            c.Cb = d
        });
        this.o.length && this.D(Np(this), this)
    };
    Kp.prototype.observe = function(a) {
        pb(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            Cb: null
        }), this.A(), this.v || (this.v = !0, _.E(_.t, "scroll", this.m), _.E(_.t, "resize", this.m), _.t.MutationObserver && !this.l && (this.l = new window.MutationObserver(this.m), this.l.observe(_.t.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    Kp.prototype.unobserve = function(a) {
        this.j = _.ha(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && (this.v = !1, this.j.length = 0, _.Td(_.t, "scroll", this.m), _.Td(_.t, "resize", this.m), this.l && (this.l.disconnect(), this.l = null))
    };
    var Np = function(a) {
        var b = [].concat(Ca(a.o));
        a.o.length = 0;
        return b
    };
    var Op;
    Op = Qd(function() {
        return !(kc || lc || jc) && (wc || dc || cc && _.tc(11))
    });
    _.Pp = Qd(function() {
        return wc && _.tc(56)
    });
    _.Qp = function(a, b, c, d) {
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        e.rel = c; - 1 != c.toLowerCase().indexOf("stylesheet") ? b = Xc(b) : b instanceof Wc ? b = Xc(b) : b instanceof Zc ? b instanceof Zc && b.constructor === Zc && b.Cc === Yc ? b = b.eb : (Ga(b), b = "type_error:SafeUrl") : (b instanceof Zc || (b = b.hb ? b.Oa() : String(b), $c.test(b) || (b = "about:invalid#zClosurez"), b = ad(b)), b = b.Oa());
        e.href = b;
        d && "preload" == c && (e.j = d);
        a = a.getElementsByTagName("head")[0];
        if (!a) return null;
        a.appendChild(e);
        return e
    };
    var Rp = function(a) {
        Kc(this, a)
    };
    _.Qa(Rp, Ic);
    var Sp = [.05, .1, .2, .5],
        Tp = [0, .5, 1],
        Up = function(a) {
            a = dd(a.top) ? a.top : null;
            if (!a) return -1;
            a = pf(a);
            return -12245933 == a.width || -12245933 == a.height ? -1 : a.width * a.height
        },
        Xp = function(a, b, c, d, e) {
            if (!_.t.IntersectionObserver) return null;
            c = c.offsetWidth * c.offsetHeight;
            var f = Up(a);
            c = [].concat(Ca(Tp), Ca(Vp(f, c)));
            ia(c);
            return new _.t.IntersectionObserver(function(c) {
                return Wp(a, b, d, c, e)
            }, {
                threshold: c
            })
        },
        Vp = function(a, b) {
            return 0 > a ? [] : ea(Sp, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        Wp = function(a, b, c, d, e) {
            try {
                var f = Up(a);
                _.B(d, function(a) {
                    var d = a.boundingClientRect.width * a.boundingClientRect.height,
                        e = a.intersectionRect.width * a.intersectionRect.height,
                        g = Math.round(a.time);
                    a = new Rp;
                    Nc(a, 1, d);
                    Nc(a, 2, e);
                    Nc(a, 3, f);
                    Nc(a, 4, g);
                    d = new Gc;
                    e = Mc(a, 4);
                    null != e && null != e && Hc(d, 4, e);
                    e = Mc(a, 2);
                    null != e && null != e && Hc(d, 2, e);
                    e = Mc(a, 1);
                    null != e && null != e && Hc(d, 1, e);
                    e = Mc(a, 3);
                    null != e && null != e && Hc(d, 3, e);
                    a = new window.Uint8Array(d.m + d.j.length());
                    g = d.l;
                    for (var p = g.length, v = e = 0; v < p; v++) {
                        var x = g[v];
                        a.set(x, e);
                        e += x.length
                    }
                    g = Fc(d.j);
                    a.set(g, e);
                    d.l = [a];
                    d = Bc(a, !0).replace(/\.+$/, "");
                    b.j && (d = new Ye("1", 10, d, 0, c), b.j && b.events.push(d))
                })
            } catch (g) {
                e && e(g)
            }
        };
    var Yp = function(a) {
            this.j = {};
            this.l = a
        },
        aq = function(a, b, c, d) {
            var e = Zp(a, $p(b), c, d);
            a = Zp(a, b, c, d);
            b = [];
            e[0] && 0 < e[0].length && b.push(e[0].join("&"));
            a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
            return b.join("&")
        },
        Zp = function(a, b, c, d) {
            var e = [],
                f = [],
                g = b.j;
            _.D(d, function(b, d) {
                if (b) {
                    var k = "";
                    null != g[d] && (k = (0, window.encodeURIComponent)(g[d]));
                    for (var l = [], v = -1, x = -1, J = 0; J < a.length; ++J) {
                        var La = _.L(a[J]);
                        ++v;
                        null == c[La] ? l.push("") : (La = c[La].j, null != La[d] ? (l.push((0, window.encodeURIComponent)((0, window.encodeURIComponent)(La[d]))), x = v) : l.push(""))
                    }
                    if (0 <= x) {
                        J = (0, window.encodeURIComponent)(k);
                        d = [];
                        d.push(J);
                        for (J = 0; J <= x; ++J) d.push(l[J]);
                        f.push(b + "," + d.join(","))
                    } else k && e.push(b + "=" + k)
                }
            });
            b = [];
            b.push(e);
            b.push(f);
            return b
        },
        bq = function(a, b) {
            a: {
                var c = a.navigator,
                    d = c.userAgent,
                    e = c.platform,
                    f = /WebKit\/(\d+)/,
                    g = /rv\:(\d+\.\d+)/,
                    k = /rv\:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(d) && (f = (f.exec(d) || [0, 0])[1], g = (g.exec(d) || [0, 0])[1], /Win/.test(e) && /Trident/.test(d) && 11 <= b.documentMode || !f && "Gecko" === c.product && 27 <= g && !k.test(d) || 536 <= f)) {
                    b = !0;
                    break a
                }
                b = !1
            }
            a = le(a, a.document, 500, 300);c = {};
            if (!b || a) c.ea = "0";
            return c
        },
        cq = function(a, b, c, d) {
            b && (c || (c = ""), "google_gl" == b ? b = "google_country" : "google_region" == b && (b = "google_section"), b in a.l && ("undefined" == typeof d || d || !a.j[b]) && (a.j[b] = c))
        },
        dq = function(a, b) {
            _.D(b.j, function(a, b) {
                this.j[b] || (this.j[b] = a)
            }, a)
        },
        $p = function(a) {
            var b = new Yp(a.l);
            b.j = Pb(a.j);
            delete b.j.google_page_url;
            return b
        },
        fl = function(a) {
            return a.j.google_page_url
        };
    Yp.prototype.qa = function() {
        var a = [];
        _.D(this.j, function(b, c) {
            (c = Mn[c] || Nn[c] || Pn[c] || null) && b && a.push(c + "=" + (0, window.encodeURIComponent)(b))
        });
        return a.join("&")
    };
    var eq, fq, hq, iq, jq, Ul, gq, Tl, mq, nq, pq, qq;
    eq = function(a) {
        this.j = {};
        this.l = {};
        this.F = [];
        this.W = a;
        this.v = new Yp(a);
        this.A = {};
        this.I = {};
        this.m = {};
        this.O = {};
        this.N = {};
        this.H = this.D = "";
        this.o = !1;
        this.P = -1;
        this.V = 0;
        this.K = this.C = !1;
        this.L = {};
        this.R = !1
    };
    fq = function(a, b) {
        var c = _.L(b);
        return a.j[c] ? a.j[c] : a.j[c] = b
    };
    hq = function(a) {
        return _.ha(gq(a), function(a) {
            return !a.C
        })
    };
    iq = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            _.L(d) in a.j && un(d)
        }
    };
    jq = function(a) {
        a = _.ha(gq(a), function(a) {
            return !!a.C && !a.va
        });
        return ea(a, function(a) {
            return [a.getAdUnitPath(), a.getSlotId().u()]
        })
    };
    _.kq = function(a, b) {
        return !(_.L(b) in a.N)
    };
    _.lq = function(a, b) {
        a.renderEnded(b)
    };
    Ul = function(a) {
        var b = 0;
        _.D(a.j, function() {
            b++
        });
        return b
    };
    eq.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        _.D(this.j, function(a) {
            b.push(a.toString())
        });
        _.D(this.l, function(a, d) {
            b.push("[" + d + "," + a + "]")
        });
        a += b.join();
        return a + "]"
    };
    gq = function(a) {
        var b = [];
        _.D(a.j, function(a) {
            b.push(a)
        });
        return b
    };
    Tl = function(a, b) {
        a = b || gq(a);
        a = ea(a, function(a) {
            return a.ra
        });
        ia(a);
        return a
    };
    mq = function(a) {
        var b = [];
        _.D(a.l, function(a, d) {
            b.push((0, window.encodeURIComponent)(d) + "=" + (0, window.encodeURIComponent)(a))
        });
        0 < a.F.length && !("excl_cat" in a.l) && (a = a.F.join(","), b.push((0, window.encodeURIComponent)("excl_cat") + "=" + (0, window.encodeURIComponent)(a)));
        return b.join("&")
    };
    nq = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = a.m[_.L(b)];
        if (!d) return null;
        c || (c = ej.is(th.w));
        c && !_.qf(d) ? (c = _.Q(b, window.document), c.style.display = "", d = tl(d), c.style.display = "none") : d = tl(d);
        d && (a.O[_.L(b)] = d);
        return d
    };
    _.oq = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        return a.O[_.L(b)] || nq(a, b, c)
    };
    pq = function(a) {
        for (var b = [], c = 0; c < a.length; ++c) b.push(rl(a[c]));
        return b.join()
    };
    qq = function(a) {
        for (var b = [], c = !1, d = 0; d < a.length; ++d) {
            var e = a[d].getFirstLook();
            0 != e && (c = !0);
            b.push(e)
        }
        return c ? b.join() : void 0
    };
    var rq = function() {
        this.j = [];
        this.L = !1;
        this.C = "";
        this.K = "json_html";
        this.o = "fif";
        this.A = 1;
        this.D = !1;
        this.l = "";
        this.m = [];
        this.persistentRoadblocksOnly = !1;
        this.videoPodNumber = this.videoPodPosition = window.NaN;
        this.H = this.I = "";
        this.F = !1;
        this.videoStreamCorrelator = window.NaN;
        this.v = 0;
        this.Kb = this.xb = ""
    };
    var uq, tq, sq, wq, xq;
    uq = function(a) {
        this.v = window.document;
        this.j = a || 0;
        this.l = sq(this, "__gads=");
        this.A = this.o = !1;
        tq(this)
    };
    _.vq = function(a, b) {
        b._cookies_ && b._cookies_.length && (a.m = b._cookies_[0], null != a.m && (a.l = a.m._value_, null != a.m && a.l && (b = new Date, b.setTime(1E3 * a.m._expires_), a.v.cookie = "__gads=" + a.l + "; expires=" + b.toGMTString() + "; path=" + a.m._path_ + "; domain=." + a.m._domain_)))
    };
    tq = function(a) {
        if (!a.l && !a.A && 1 != a.j) {
            a.v.cookie = "GoogleAdServingTest=Good";
            var b = "Good" == sq(a, "GoogleAdServingTest=");
            if (b) {
                var c = new Date;
                c.setTime((new Date).valueOf() + -1);
                a.v.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
            }
            a.o = b;
            a.A = !0
        }
    };
    sq = function(a, b) {
        a = a.v.cookie;
        var c = a.indexOf(b),
            d = ""; - 1 != c && (b = c + b.length, c = a.indexOf(";", b), -1 == c && (c = a.length), d = a.substring(b, c));
        return d
    };
    wq = null;
    xq = function(a) {
        null == wq && (wq = new uq(a));
        return wq
    };
    var zq;
    zq = function() {
        this.j = {};
        var a = Ra.URL;
        null == _.yq(this, "target_platform") && (this.j.target_platform = "DESKTOP");
        var b = this.j;
        a = a.split("?");
        a = a[a.length - 1].split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (d[0]) {
                var e = d[0].toLowerCase();
                if ("google_domain_reset_url" != e) try {
                    if (1 < d.length) {
                        var f = d[1];
                        var g = window.decodeURIComponent ? (0, window.decodeURIComponent)(f.replace(kl, " ")) : (0, window.unescape)(f)
                    } else g = "";
                    b[e] = g
                } catch (k) {}
            }
        }
    };
    _.yq = function(a, b) {
        return null == b ? null : a.j[b]
    };
    var Aq = function(a, b, c, d, e) {
        this.j = b;
        this.v = c;
        this.m = d;
        this.mode = a;
        this.l = e;
        this.o = "";
        this.I = Mn;
        this.A = [];
        this.H = []
    };
    Aq.prototype.qa = function(a, b) {
        b = b || window;
        if (!_.y(a)) return "";
        if ("sra" == this.mode) 0 == a.length && (a = gq(this.j));
        else {
            if (0 == a.length) return "";
            1 < a.length && (a = [a[0]])
        }
        this.D();
        this.F(a, b);
        return this.o
    };
    Aq.prototype.F = function(a, b) {
        b = b || window;
        try {
            if (!pl()) {
                if ("prerender" == wl(window.document)) {
                    var c = "108809008";
                    var d = _.F.u().get(17)
                } else c = "108809007", d = _.F.u().get(16);
                var e = fd([c], d);
                T(this, "eid", (e ? yb(this.l.m, e) : this.l.m).join());
                var f = Re();
                f && T(this, "debug_experiment_id", f)
            }
        } catch (J) {}
        this.m && 0 !== this.m.j && T(this, "co", this.m.j);
        c = this.j.P; - 1 !== c && T(this, "tfcd", c);
        1 === this.j.V && T(this, "kfa", 1);
        T(this, "sc", _.F.u().get(6) ? 1 : 0);
        window.postMessage && T(this, "sfv", _.al());
        if ("sra" == this.mode) {
            Bq(this, a);
            Cq(this);
            c = [];
            for (d = 0; d < a.length; ++d) c.push(vn(a[d]));
            d = c.join("|");
            d.length == c.length - 1 && (d = null);
            T(this, "prev_scp", d)
        } else c = a[0].gtfcd(), -1 !== c && T(this, "tfcd", c), c = a[0], T(this, "iu", c.getAdUnitPath()), T(this, "sz", rl(c)), _.ub(on(c), "fluid") && T(this, "fluid", "height"), (d = c.getFirstLook()) && T(this, "fl", d), d = Dq(c.X, this.j.K), "1" == d && T(this, "fsf", d), d = c.O, 0 < d && T(this, "rc", d), c.getClickUrl() && T(this, "click", c.getClickUrl()), c.getOutOfPage() && T(this, "ists", "1"), _.kq(this.j, c) || T(this, "logonly", "1"), Cq(this), c = a[0], d = vn(c), T(this, "scp", d), c = c.getAudExtId(), 0 < c && T(this, "audextid", c);
        c = 1 != this.l.A;
        d = a[0].j;
        e = this.j.A;
        if (null != fl(this.j.v)) e = !0;
        else {
            f = !1;
            for (var g = 0; g < a.length && !f; g++) f = null != gl(a[g], e);
            e = f
        }
        f = this.l.D;
        g = 3 == this.l.A;
        var k = _.F.u().get(46),
            l = 0;
        c && (l |= 1);
        d && (l |= 2);
        e && (l |= 4);
        f && (l |= 8);
        g && (l |= 16);
        k && (l |= 32);
        c = l;
        0 < c && T(this, "eri", c);
        "prerender" == wl() && T(this, "d_imp", 1);
        c = b.document;
        T(this, "cust_params", mq(this.j));
        this.m && 1 != this.m.j && (T(this, "cookie", this.m.l), this.m.o && T(this, "cookie_enabled", "1"));
        (d = this.j.D) && T(this, "uule", d);
        this.m && 1 != this.m.j && (c = (fl(this.j.v) || (ke(b) ? c.URL : c.referrer)) != c.URL ? c.domain : "") && T(this, "cdm", c);
        null != _.yq(this.v, "google_preview") && T(this, "gct", _.yq(this.v, "google_preview"));
        if (this.j.C) {
            T(this, "is_amp", "1");
            c = Vd();
            T(this, "amp_v", c && c.mode ? +c.mode.version || null : null);
            if ((c = Vd()) && c.container) {
                c = c.container.split(",");
                d = [];
                for (e = 0; e < c.length; e++) d.push(Ud[c[e]] || "x");
                c = d.join()
            } else c = null;
            T(this, "act", c);
            $d && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(b.location.href) && T(this, "ati", 1)
        }
        b == b.top && T(this, "abxe", 1);
        this.C(new Date, a, b);
        c = {};
        c.u_tz = -(new Date).getTimezoneOffset();
        var n = void 0 === n ? Sa : n;
        try {
            var p = n.history.length
        } catch (J) {
            p = 0
        }
        c.u_his = p;
        c.u_java = !!Sa.navigator && "unknown" !== typeof Sa.navigator.javaEnabled && !!Sa.navigator.javaEnabled && Sa.navigator.javaEnabled();
        Sa.screen && (c.u_h = Sa.screen.height, c.u_w = Sa.screen.width, c.u_ah = Sa.screen.availHeight, c.u_aw = Sa.screen.availWidth, c.u_cd = Sa.screen.colorDepth);
        Sa.navigator && Sa.navigator.plugins && (c.u_nplug = Sa.navigator.plugins.length);
        Sa.navigator && Sa.navigator.mimeTypes && (c.u_nmime = Sa.navigator.mimeTypes.length);
        Eq(this, c);
        p = _.t.devicePixelRatio;
        (p = _.m(p) ? +p.toFixed(3) : null) && U(this, "u_sd", p);
        try {
            var v = he()
        } catch (J) {
            v = "0"
        }
        U(this, "flash", v);
        d = b || window;
        v = d.document;
        a = "sra" == this.mode ? fl(this.j.v) : gl(a[0], this.j.A) || fl(this.j.v);
        n = ul(v.URL, _.yq(this.v, "google_preview"));
        p = ul(v.referrer, _.yq(this.v, "google_preview"));
        v = !1;
        if (null != a) {
            var x = n;
            ke(d) || (p = "", v = !0)
        } else a = n;
        this.j.C && (p = (p = Vd()) ? p.referrer : null);
        if (qi.is(Dg.w)) T(this, "url", a), T(this, "ref", p);
        else {
            n = new Ge(d);
            e = n.j[0].depth;
            if (c = 0 < e)
                if (T(this, "nhd", e), d.location.ancestorOrigins) {
                    d = [];
                    e = Math.min(n.j.length, 27);
                    for (f = 1; f < e; f++) n.j[f] && n.j[f].url && (d[f - 1] = n.j[f].url);
                    d = He(n, d.reverse());
                    T(this, "iag", d);
                    d = n.j;
                    e = [];
                    for (f = d.length - 1; 0 < f; f--)(g = d[f]) && null != g.url && e.push(_.re(g.url.match(_.qe)[3] || null));
                    d = Be(e);
                    0 < d && T(this, "mdo", d)
                }
            T(this, "url", a);
            null != x && x != a && T(this, "loc", x);
            T(this, "ref", p);
            c && (x = n.j[Math.max(n.j.length - 1, 0)].url) && T(this, "top", v ? _.re(x.match(_.qe)[3] || null) : x)
        }
        if (!qi.is(Dg.w)) {
            a = b || window;
            x = a.document;
            (v = x.scripts) && T(this, "dssz", v.length);
            a = new Ge(a);
            if (v = a.l.document && a.l.document.scripts ? a.l.document.scripts : []) {
                p = [];
                for (n = v.length - 1; 0 <= n && 26 > p.length;) v[n].src && p.unshift(v[n].src), n--;
                v = He(a, p)
            } else v = 0;
            T(this, "icsg", v);
            if (a = a.l.document && a.l.document.scripts ? a.l.document.scripts : []) {
                v = [];
                for (p = a.length - 1; 0 <= p; p--)(n = a[p]) && null != n.src && v.push(_.re(n.src.match(_.qe)[3] || null));
                a = Be(v)
            } else a = 0;
            0 < a && T(this, "mso", a);
            a = Error();
            a.stack && (v = a.stack, p = v.split(/\r\n|\r|\n/).length, "Error" == v.slice(0, 5) && p--, v = p - 10, 0 > v && (v = 0, p = new _.M("gpt_negative_stack_trace", _.nl(), _.F.u().get(23)), _.q(p, this.j), _.r(p, "stackTrace", a.stack), _.N(p)), T(this, "std", v));
            x.currentScript && x.currentScript.text && T(this, "csl", x.currentScript.text.length)
        }
        if (Math.random() < _.F.u().get(73) && ke(b)) {
            x = 0;
            a = _.Cf();
            x |= !!a._syncTagged_ << 0;
            a = (b || _.t).navigator.connection;
            x |= (!!a && "cellular" == a.type && .5 > a.downlinkMax) << 1;
            a: {
                a = b.document.getElementsByTagName("script");
                for (v = 1; v < a.length; v++)
                    if (-1 < a[v].src.indexOf("/tag/js/gpt.js") && -1 < a[v - 1].innerHTML.indexOf("/tag/js/gpt.js")) {
                        a = !0;
                        break a
                    }
                a = !1
            }
            T(this, "cdw", x | a << 2)
        }
        T(this, "vrg", Pl());
        (Pf || Bl()) && U(this, "rumc", Al);
        ui.is(Jg.aa) && U(this, "rume", 1);
        U(this, "vis", _.ao(b.document))
    };
    var Gq = function(a, b) {
            for (var c = b.length, d = [], e = [], f = 0; f < c; f++) {
                var g = nq(a.j, b[f]) || Fq;
                d.push(Math.round(g.x));
                e.push(Math.round(g.y))
            }
            T(a, "adxs", d.join(","));
            T(a, "adys", e.join(","))
        },
        Hq = function(a, b) {
            for (var c = b.length, d = [], e = 0; e < c; e++) {
                var f = sl(b[e]);
                b[e].la = f;
                d.push(f)
            }
            T(a, "adks", d.join(","))
        },
        Eq = function(a, b) {
            _.D(b, function(b, d) {
                U(a, d, b)
            })
        },
        Cq = function(a) {
            a.m && 1 == a.m.j || T(a, "ppid", a.j.H)
        };
    Aq.prototype.C = function(a, b, c) {
        var d = c.document;
        T(this, "lmt", (Date.parse(d.lastModified) / 1E3).toString());
        U(this, "dt", a.getTime());
        a = _.yq(this.v, "deb");
        null != a && T(this, "deb", a);
        a = _.yq(this.v, "haonly");
        null != a && T(this, "haonly", a);
        a = bq(c, d);
        ce(a, (0, _.A)(function(a, b) {
            T(this, b, a)
        }, this));
        d = me(c, d).cd || null;
        null != d && T(this, "frm", d);
        if (d = this.j.C ? Xd() : nn(c, !0)) T(this, "biw", d.width), T(this, "bih", d.height);
        !ke(c) && (c = lm(!1, c)) && (T(this, "isw", c.width), T(this, "ish", c.height));
        this.l.v && T(this, "oid", this.l.v);
        if ("sra" == this.mode) Gq(this, b), Hq(this, b);
        else {
            if (c = (this.j.C ? Yd() : null) || nq(this.j, b[0])) T(this, "adx", Math.round(c.x)), T(this, "ady", Math.round(c.y));
            c = b[0].la;
            c = bi.is(qg.w) ? c || sl(b[0]) : c || sl(b[0], this.j.I[_.L(b[0])]);
            T(this, "adk", c)
        }
        c = go();
        0 < c && T(this, "osd", c);
        b[0].j || U(this, "gut", "v2");
        c = this.j.v;
        d = "";
        "sra" == this.mode ? d = aq(b, c, this.j.A, this.I) : (b = this.j.A[_.L(b[0])], null == b ? b = c : dq(b, c), b = $p(b), d = b.qa());
        d && (this.o += "&" + d)
    };
    Aq.prototype.D = function() {
        var a = this.j.D,
            b = !1,
            c = _.F.u().get(46);
        !a && c && (b = !Oh.is(eg.w));
        this.o = ll(!b) + "/gampad/ads?";
        U(this, "gdfp_req", 1);
        T(this, "correlator", this.l.C);
        U(this, "output", this.l.K);
        U(this, "callback", this.l.l);
        U(this, "impl", this.l.o);
        T(this, "jar", this.l.Kb);
        this.m && 1 == this.m.j || T(this, "adsid", this.l.xb);
        this.l.persistentRoadblocksOnly && T(this, "per_only", 1);
        "sra" == this.mode && T(this, "json_a", 1)
    };
    var Bq = function(a, b) {
            for (var c = b.length, d = 0; d < c; d++) Iq(a, b[d].getAdUnitPath());
            T(a, "iu_parts", a.A.join());
            T(a, "enc_prev_ius", a.H.join());
            T(a, "prev_iu_szs", pq(b));
            pb(b, function(a) {
                return _.ub(on(a), "fluid")
            }) && (c = ea(b, function(a) {
                return _.ub(on(a), "fluid") ? "height" : "0"
            }).join(), T(a, "fluid", c));
            (c = qq(b)) && T(a, "fla", c);
            c = ea(b, function(b) {
                return Dq(b.X, a.j.K)
            }).join();
            0 <= c.indexOf("1") && T(a, "fsfs", c);
            c = ea(b, Function.prototype.call, P.prototype.Pa);
            0 < pb(c, function(a) {
                return 0 < a
            }) && T(a, "rcs", c.join());
            (c = Jq(b)) && T(a, "ists", c);
            var e = {};
            _.B(b, function(a) {
                (a = a.getClickUrl()) && (e[a] = (e[a] || 0) + 1)
            });
            if (!gd(e)) {
                b = new _.M("gpt_sra_setclickurl");
                var f = [];
                _.D(e, function(a, b) {
                    f.push(b.length + ":" + a)
                });
                _.r(b, "lenfreqs", f.join());
                _.q(b);
                _.N(b, _.F.u().get(58))
            }
        },
        Dq = function(a, b) {
            return (null === a ? b : a) ? "1" : "0"
        },
        T = function(a, b, c) {
            null != c && U(a, b, (0, window.encodeURIComponent)("" + c))
        },
        U = function(a, b, c) {
            null != c && "" != c && (a.o = "?" != a.o.charAt(a.o.length - 1) ? a.o + ("&" + b + "=" + c) : a.o + (b + "=" + c))
        },
        Iq = function(a, b) {
            var c = "";
            if ("" != b) {
                b = b.split("/");
                for (c = 0; c < b.length; c++)
                    if ("" != b[c]) {
                        for (var d = !1, e = 0; e < a.A.length; e++)
                            if (b[c] == a.A[e]) {
                                d = !0;
                                break
                            }
                        d || a.A.push(b[c])
                    }
                c = "";
                for (d = 0; d < b.length; d++) {
                    if (0 < d) c += "/";
                    else if ("" == b[0]) continue;
                    for (e = 0; e < a.A.length; e++)
                        if (b[d] == a.A[e]) {
                            c += e;
                            break
                        }
                }
            }
            a.H.push(c)
        },
        Jq = function(a) {
            if (!a.length) return 0;
            for (var b = "", c = 0; c < a.length; ++c) b += a[c].getOutOfPage() ? "1" : "0";
            return (0, window.parseInt)(b, 2)
        },
        Fq = {
            x: -9,
            y: -9
        };
    var Kq = function(a, b, c, d, e) {
        Aq.call(this, a, b, c, d, e)
    };
    ua(Kq, Aq);
    Kq.prototype.C = function(a, b, c) {
        0 < window.navigator.userAgent.indexOf("MSIE ") && cq(this.j.v, "google_encoding", window.document.charset, !1);
        Aq.prototype.C.call(this, a, b, c);
        T(this, "ifi", b[0].da);
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = lm(!1, c, !1), a.push(c.width.toString()), a.push(c.height.toString()), c = kd(a.join(""))) : c = 0;
        0 != c && T(this, "ifk", c.toString())
    };
    Kq.prototype.F = function(a) {
        var b = a[0],
            c = window;
        c = Zd(Vd(c)) || c;
        c.google_unique_id ? ++c.google_unique_id : c.google_unique_id = 1;
        b.da = c.google_unique_id;
        this.l.F ? (U(this, "hxva", 1), T(this, "cmsid", this.l.H), T(this, "vid", this.l.I)) : window.google_test_extended_pageview && U(this, "hxva", 1);
        (0, window.isNaN)(this.l.videoPodNumber) || U(this, "pod", this.l.videoPodNumber);
        (0, window.isNaN)(this.l.videoPodPosition) || U(this, "ppos", this.l.videoPodPosition);
        (0, window.isNaN)(this.l.videoStreamCorrelator) || U(this, "scor", this.l.videoStreamCorrelator);
        Aq.prototype.F.call(this, a);
        a = window;
        b = a.document.domain;
        var d = a.document.cookie,
            e = a.history.length,
            f = a.screen,
            g = a.document.referrer;
        if (Vd()) var k = de().gaGlobal || {};
        else {
            var l = Math.round((new Date).getTime() / 1E3),
                n = a.google_analytics_domain_name;
            b = "undefined" == typeof n ? Xn("auto", b) : Xn(n, b);
            var p = -1 < d.indexOf("__utma=" + b + "."),
                v = -1 < d.indexOf("__utmb=" + b);
            (c = (Zd() || de()).gaGlobal) || (c = {}, (Zd() || de()).gaGlobal = c);
            var x = !1;
            if (p) g = d.split("__utma=" + b + ".")[1].split(";")[0].split("."), v ? c.sid = g[3] + "" : c.sid || (c.sid = l + ""), c.vid = g[0] + "." + g[1], c.from_cookie = !0;
            else {
                c.sid || (c.sid = l + "");
                if (!c.vid) {
                    x = !0;
                    v = Math.round(2147483647 * Math.random());
                    p = [Un.appName, Un.version, Un.language ? Un.language : Un.browserLanguage, Un.platform, Un.userAgent, Vn() ? 1 : 0].join("");
                    f ? p += f.width + "x" + f.height + f.colorDepth : _.t.java && _.t.java.awt && (f = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), p += f.screen.width + "x" + f.screen.height);
                    p = p + d + (g || "");
                    for (g = p.length; 0 < e;) p += e-- ^ g++;
                    c.vid = (v ^ Wn(p) & 2147483647) + "." + l
                }
                c.from_cookie = !1
            }
            if (!c.cid) {
                b: for (l = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, l = ("" + n).split(".").length), n = 999, d = d.split(";"), g = 0; g < d.length; g++)
                    if (f = Yn.exec(d[g]) || Zn.exec(d[g]) || $n.exec(d[g])) {
                        e = f[1] || 0;
                        if (e == l) {
                            k = f[2];
                            break b
                        }
                        e < n && (n = e, k = f[2])
                    }x && k && -1 != k.search(/^\d+\.\d+$/) ? c.vid = k : k != c.vid && (c.cid = k)
            }
            c.dh = b;
            c.hid || (c.hid = Math.round(2147483647 * Math.random()));
            k = c
        }
        U(this, "ga_vid", k.vid);
        U(this, "ga_sid", k.sid);
        U(this, "ga_hid", k.hid);
        U(this, "ga_fc", k.from_cookie);
        U(this, "ga_cid", k.cid);
        T(this, "ga_wpids", a.google_analytics_uacct)
    };
    var Oq, Pq;
    _.Lq = function() {
        this.m = (this.l = !_.Vf(Vh)) ? !Vh.is(lg.Ja) : Math.random() < _.F.u().get(34);
        this.j = {}
    };
    Oq = function(a, b) {
        if (a.m && (!a.l || Vh.is(b))) {
            a.m = !1;
            var c = window;
            b = _.Mq(c);
            a.j[b] = 1;
            Op() ? _.Nq(a, b, "prefetch") : Th.is(ig.w) || (a = c.document, c = (c = _.Cf().fifWin) && c.document || a, a = c.createElement("iframe"), a.src = b, a.style.visibility = "hidden", a.style.display = "none", b = c.getElementsByTagName("script"), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
    };
    _.Mq = function(a) {
        var b = _.Ki.is(_.$g.w);
        b = !_.ml(a, b);
        return _.wf(a, _.al(), _.bl(a.location.host), b)
    };
    Pq = function() {
        _.Lq.u();
        var a = _.F.u().get(57);
        if (Math.random() < a) {
            a = window.document;
            var b = ll(!0) + "/static/glade.js";
            _.Qp(a, b, "prefetch")
        }
    };
    _.Nq = function(a, b, c, d) {
        var e = _.Qp(window.document, b, c, void 0 === d ? "" : d);
        e && _.E(e, "load", function() {
            a.j[b] = 3;
            e && zd(e)
        })
    };
    Fa(_.Lq);
    var Qq = function(a, b, c, d) {
            var e = _.yq(c, "api_experiment");
            Wa(jb(e)) || _.B(ea(e.split(","), Xa), function(a) {
                _.Jh(a)
            });
            this.j = b;
            this.o = c;
            this.X = d;
            this.ka = yn.u();
            this.L = Math.floor(4503599627370496 * Math.random());
            this.Nb = !1;
            this.l = a;
            (this.m = (a = _.Xf(hj)) ? Qb(hj.j)[a] : "") && (_.ac ? _.tc(10) ? _.H(lj, Ah[this.m]) : _.H(kj, zh[this.m]) : wc ? pe() ? _.H(ij, xh[this.m]) : _.H(jj, yh[this.m]) : ql() ? _.H(mj, Bh[this.m]) : _.H(nj, Ch[this.m]));
            this.m && "1" != this.m || _.ac && _.tc(9) && (Mo = new kp);
            this.Ba = _.Dm();
            this.H = {};
            this.V = jp(this.V);
            this.ba = _.O(291, this.ba);
            this.ma = _.O(331, this.ma);
            this.fa = _.O(337, this.fa);
            this.Ra = this.Pa = !1
        },
        Vq, $q, ar, er, Wq, fr, Uq, Zq, Yq, Xq;
    Qq.prototype.la = function() {
        return "json_html"
    };
    Qq.prototype.W = function() {
        return "lean"
    };
    var Rq = function(a, b) {
        var c = window;
        !b || ke(c) ? b = Math.floor(4503599627370496 * Math.random()) : a.Nb = !0;
        a.L = Math.floor(b)
    };
    Qq.prototype.Xb = function() {
        return null
    };
    Qq.prototype.wa = function() {
        return !1
    };
    Qq.prototype.Yb = function() {};
    Qq.prototype.loaded = function(a) {
        a.loaded();
        this.ma(window.document, a)
    };
    var Sq = function(a, b, c, d) {
        var e = new rq;
        e.K = a.la();
        e.o = a.da(a.l);
        e.A = c;
        e.l = d;
        e.j = b;
        return e
    };
    Qq.prototype.O = function(a) {
        a.C = this.L + "";
        a.m = _.Ve();
        a.D = this.Nb
    };
    Qq.prototype.qa = function(a) {
        this.O(a);
        return Tq(this, this.l ? "sra" : "single", a).qa(a.j)
    };
    Qq.prototype.Qa = function(a) {
        switch (this.m) {
            case "2":
                return 3;
            case "3":
                return xl() ? 2 : 3;
            default:
                return Qf && a.length > Uq(this, a) ? 1 : 3
        }
    };
    Vq = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        a = Uq(a, b);
        if (c) switch (_.Xf(Ei)) {
            case Ug.w:
                _.H(Fi, Vg.w);
                a = 16384;
                break;
            case Ug.B:
                _.H(Fi, Vg.B);
            default:
                a = 8192
        }
        c = a - 8;
        b.length > a && (a = b.lastIndexOf("&", c), -1 !== a ? b = b.substring(0, a) : (b = b.substring(0, c), b = b.replace(/%\w?$/, "")), b += "&trunc=1");
        return b
    };
    $q = function(a, b, c, d, e) {
        if (hj.is(wh["3"])) {
            var f = new window.XMLHttpRequest;
            f.open("GET", b);
            f.withCredentials = !0;
            var g = function() {
                Wq(a, {
                    message: f.statusText,
                    status: f.status
                }, !1)
            };
            f.onload = function() {
                if (4 == f.readyState)
                    if (200 != f.status) g();
                    else {
                        var a = Xq(f.responseText);
                        a && c(a)
                    }
            };
            f.onerror = g;
            f.send()
        } else {
            var k = {
                    timeoutMs: 0,
                    withCredentials: !0
                },
                l = function(a) {
                    Wq(this, a, e)
                },
                n = function(a) {
                    if (a = Xq(a.responseText)) e && Yq(a), c(a)
                };
            e ? (b = Zq(b, d), hp("POST", b.url, b.body, k).then(n, l, a)) : hp("GET", b, null, k).then(n, l, a)
        }
    };
    ar = function(a, b, c, d) {
        _.B(b, function(b) {
            var e = Sq(a, [b], 1, c);
            a.O(e);
            e.o = a.da(!1);
            e = Vq(a, Tq(a, "single", e).qa([b]), d);
            b.fetchStarted(e)
        })
    };
    _.br = function(a, b, c, d) {
        _.kq(a.j, c) && (d && a.wa([c]), d = c.getCollapseEmptyDiv(), null == d && (d = "true" === _.yq(a.o, "google_collapse_empty_div")), d && _.Hl(_.Q(c, b), !1))
    };
    Qq.prototype.ma = function(a, b) {
        var c = _.Q(b, a);
        b = b.T && b.T._os_ || "";
        c && b && (a = a.createElement("div"), a.setAttribute("style", b), 0 < c.childNodes.length ? c.insertBefore(a, c.childNodes[0]) : c.appendChild(a))
    };
    Qq.prototype.fa = function(a, b) {
        gj.is(vh.w) && (b = _.Q(b, a), a = a.createElement("div"), 0 < b.childNodes.length ? b.insertBefore(a, b.childNodes[0]) : b.appendChild(a))
    };
    _.dr = function(a, b) {
        if (!b.T) return null;
        b = _.cr(b);
        var c = -1 === b;
        return null == b || 0 > b && !c ? null : a.V(Math.max(b, 0) + "%", c)
    };
    Qq.prototype.V = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        return _.ac || !_.Xi.is(lh.rc) && !Yi.is(mh.vb) ? _.t.IntersectionObserver ? new _.t.IntersectionObserver(function(a, e) {
            return c.ba(a, e, b)
        }, {
            rootMargin: a
        }) : null : new Kp(function(a, e) {
            return c.ba(a, e, b)
        }, {
            rootMargin: a
        })
    };
    Qq.prototype.ba = function(a, b, c) {
        var d = this;
        c = void 0 === c ? !1 : c;
        _.B(a, function(a) {
            if (c || !(0 >= a.intersectionRatio)) {
                b.unobserve(a.target);
                a = a.target.id;
                var e = d.H[a];
                e && (e.call(d), delete d.H[a])
            }
        })
    };
    er = function() {
        _.t.googletag._getcook_ = 1
    };
    Wq = function(a, b, c) {
        c = new _.M(c ? "gpt_post_error" : "gpt_get_error", _.nl());
        b.name && _.r(c, "name", b.name);
        b.status && _.r(c, "status", b.status);
        b.message && _.r(c, "message", b.message);
        _.q(c, a.j);
        _.N(c)
    };
    fr = function(a, b, c) {
        if (b.length) {
            var d = ea(b, function(a) {
                return a.getCsiId()
            });
            d = {
                req_len: c.length,
                req_s: d.join("-")
            };
            b = b[0];
            b.R = c;
            Um(a.Ba, b.getCsiId(), b.j, d)
        }
    };
    Uq = function(a, b) {
        if (a.m) switch (a.m) {
            case "2":
            case "3":
                return _.ac && !_.tc(9) ? 2048 : 8192;
            default:
                return 4096
        }
        a = b && 4096 < b.length;
        switch (_.Xf(Oi)) {
            case dh.Va:
                a && _.H(Pi, eh.Va);
                a = 8192;
                break;
            case dh.bb:
                a && _.H(Pi, eh.bb);
                a = 12288;
                break;
            case dh.ab:
                a && _.H(Pi, eh.ab);
                a = 16384;
                break;
            case dh.B:
                a && _.H(Pi, eh.B);
            default:
                a = 4096
        }
        return a
    };
    Zq = function(a, b) {
        a = a.match(_.qe);
        var c = a[1],
            d = a[2],
            e = a[3],
            f = a[4],
            g = a[5];
        b = "nwids=" + (0, window.encodeURIComponent)(b);
        var k = "";
        c && (k += c + ":");
        e && (k += "//", d && (k += d + "@"), k += e, f && (k += ":" + f));
        g && (k += g);
        b && (k += "?" + b);
        return {
            url: k,
            body: a[6] || null
        }
    };
    Yq = function(a) {
        _.y(a) ? _.B(a, Yq) : _.D(a, function(a) {
            a._cookies_ && delete a._cookies_
        })
    };
    Xq = function(a) {
        a = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).replace(/\\x/g, "\\u00");
        var b = _.t.JSON.parse;
        try {
            return b(a)
        } catch (c) {
            return null
        }
    };
    _.cr = function(a) {
        a = (a = a.T) && a._margin_render_;
        return _.m(a) ? a : null
    };
    var gr = function(a, b, c, d, e) {
        Aq.call(this, a, b, c, d, e)
    };
    ua(gr, Aq);
    gr.prototype.D = function() {
        Aq.prototype.D.call(this);
        U(this, "m_ast", "js");
        U(this, "markup", "html");
        U(this, "js", "afmc")
    };
    var hr = _.F.u().get(6),
        ir = _.F.u().get(1),
        jr = _.F.u().get(7),
        kr = _.F.u().get(20);
    po = Oe(new Ie, hr ? "https:" : "http:", ir, "/pagead/osd.js");
    eo = jr;
    co = kr;
    var lr = function(a, b, c, d) {
            Qq.call(this, a, b, c, d);
            this.Vb = this.N = this.na = this.$ = !1;
            this.oa = this.pa = "";
            this.videoStreamCorrelator = window.NaN;
            this.K = 0;
            this.xc = Math.random() < _.F.u().get(66);
            this.nc = ri.is(Eg.pc);
            this.sc = ri.is(Eg.qc);
            this.P = !1
        },
        mr, or, nr, pr, Tq, qr;
    ua(lr, Qq);
    lr.prototype.W = function() {
        return "unknown"
    };
    var rr = function(a) {
        a.$ = null != _.yq(a.o, "google_nofetch") || !!window.google_noFetch || a.$;
        a.na = null != _.yq(a.o, "google_disable_initial_load") || !!window.google_DisableInitialLoad || a.na;
        a.N = null != _.yq(a.o, "google_norender") || a.N;
        mr(function() {
            nr(a)
        });
        or(function() {
            var b = new _.M("gpt_req_disp_mismatch", _.nl(), _.F.u().get(23));
            _.r(b, "dslots", pr(a).toString());
            _.r(b, "impl", a.da(a.l));
            _.r(b, "sra", a.l ? "1" : "0");
            _.r(b, "correlator", a.L.toString());
            _.q(b, a.j);
            _.N(b)
        });
        a.P = Sh.is(qh.ec) || Sh.is(qh.cc);
        qr(a);
        Oq(_.Lq.u(), lg.bc)
    };
    lr.prototype.O = function(a) {
        Qq.prototype.O.call(this, a);
        a.F = this.Vb;
        a.H = this.oa;
        a.I = this.pa;
        a.v = this.K
    };
    mr = function(a) {
        var b = window;
        b.attachEvent ? b.attachEvent("onload", a) : b.addEventListener && b.addEventListener("load", a, !1)
    };
    or = function(a) {
        var b = window;
        b.attachEvent ? b.attachEvent("onunload", a) : b.addEventListener && b.addEventListener("unload", a, !1)
    };
    nr = function(a) {
        var b = jq(a.j);
        if (0 < b.length) {
            for (var c = {}, d = [], e = 0; e < b.length; ++e) c[b[e][0]] = !0;
            _.D(c, function(a, b) {
                d.push(b)
            });
            b = new _.M("gpt_missing_cb", _.nl(), _.F.u().get(10));
            _.r(b, "pending", d.join());
            _.r(b, "correlator", a.L.toString());
            _.r(b, "impl", a.W());
            _.q(b, a.j);
            _.N(b)
        }
    };
    pr = function(a) {
        return ob(gq(a.j), function(a, c) {
            return c.Ca ? a + 1 : a
        })
    };
    Tq = function(a, b, c) {
        switch (_.yq(a.o, "target_platform")) {
            case "MOBILE":
                return new gr(b, a.j, a.o, a.X, c);
            default:
                return new Kq(b, a.j, a.o, a.X, c)
        }
    };
    _.sr = function(a, b, c) {
        if (a.K && b && !Zi.is(nh.w) && !$i.is(oh.w)) {
            c = a.j.j[c];
            var d = "";
            c && (d = c.getContentUrl());
            (a.P ? wo() : vo()).registerAdBlock(d, 3, a.la(), b, void 0, void 0, (0, _.A)(c.Qa, c))
        }
    };
    qr = function(a) {
        Ph.is(fg.w) || (a.K = (a.P ? wo() : vo()).setupOse(a.L))
    };
    lr.prototype.v = function(a) {
        var b = !!a._use_safe_frame_;
        return a._afc_expandable_ || "height" == a._fluid_ ? b : !this.nc && (this.sc || b)
    };
    var tr = {
        adsense_channel_ids: "google_ad_channel",
        adsense_ad_types: "google_ad_type",
        adsense_ad_format: "google_ad_format",
        adsense_background_color: "google_color_bg",
        adsense_border_color: "google_color_border",
        adsense_link_color: "google_color_link",
        adsense_text_color: "google_color_text",
        adsense_url_color: "google_color_url",
        page_url: "google_page_url",
        adsense_allow_expandable_ads: "google_allow_expandable_ads",
        adsense_content_section: "google_ad_section",
        adsense_cpm: "google_cpm",
        adsense_encoding: "google_encoding",
        adsense_family_safe: "google_safe",
        adsense_flash_version: "google_flash_version",
        adsense_font_face: "google_font_face",
        adsense_font_size: "google_font_size",
        adsense_hints: "google_hints",
        adsense_host: "google_ad_host",
        adsense_host_channel: "google_ad_host_channel",
        adsense_host_tier_id: "google_ad_host_tier_id",
        adsense_keyword_type: "google_kw_type",
        adsense_keywords: "google_kw",
        adsense_relevant_content: "google_contents",
        adsense_reuse_colors: "google_reuse_colors",
        adsense_targeting: "google_targeting",
        adsense_targeting_types: "google_targeting",
        adsense_test_mode: "google_adtest",
        alternate_ad_iframe_color: "google_alternate_color",
        alternate_ad_url: "google_alternate_ad_url",
        demographic_age: "google_cust_age",
        demographic_ch: "google_cust_ch",
        demographic_gender: "google_cust_gender",
        demographic_interests: "google_cust_interests",
        demographic_job: "google_cust_job",
        demographic_l: "google_cust_l",
        demographic_lh: "google_cust_lh",
        demographic_u_url: "google_cust_u_url",
        demographic_unique_id: "google_cust_id",
        document_language: "google_language",
        geography_override_city: "google_city",
        geography_override_country: "google_country",
        geography_override_region: "google_region",
        matched_content_columns_num: "google_content_recommendation_columns_num",
        matched_content_rows_num: "google_content_recommendation_rows_num",
        matched_content_ui_type: "google_content_recommendation_ui_type"
    };
    _.ur = "3rd party ad content";
    Df("setAdIframeTitle", function(a) {
        _.ur = a
    });
    var yr, vr, wr, xr, Cr, Er, Fr, Gr, Dr, Rr, Mr, Tr, Or, Yr, Qr, Hr, $r, as, Kr;
    _.V = function(a, b, c, d) {
        lr.call(this, a, b, c, d);
        a ? (Uf(Xh, _.F.u().get(77), [], !0), Uf(ci, _.F.u().get(84), [], !0), Uf(Ji, _.F.u().get(124), [])) : (Uf(Wh, _.F.u().get(77), [], !0), Uf(di, _.F.u().get(84), [], !0));
        this.D = [];
        this.ca = {};
        this.ta = 0;
        this.pb = {};
        this.sb = this.rb = window.NaN;
        this.ga = !1;
        this.za = window.NaN;
        this.$b = !1;
        this.Aa = Wh.is(rg.w) || Xh.is(sg.w);
        this.ob = fi.is(ug.w);
        this.F = {};
        this.Zb = bi.is(qg.w);
        this.tc = 0;
        this.xa = hi.is(wg.w) || ii.is(xg.w) || ji.is(yg.w) || hj.is(wh["2"]) || hj.is(wh["3"]);
        this.R = {};
        this.A = {};
        this.Y = {};
        this.I = !1;
        this.Z = null;
        this.yc = fj.is(uh.w);
        this.ha = _.O(109, this.ha);
        this.Ea = _.O(203, this.Ea);
        a = _.ao(window.document);
        if (1 !== a && 0 !== a) {
            a = _.gh;
            b = hh;
            c = Ti;
            switch (_.Xf(_.Si)) {
                case a.B:
                    _.H(c, b.B);
                    break;
                case a.Ka:
                    _.H(c, b.Ka);
                    break;
                case a.La:
                    _.H(c, b.La)
            }
            a = _.ih;
            b = jh;
            c = Vi;
            switch (_.Xf(_.Ui)) {
                case a.B:
                    _.H(c, b.B);
                    break;
                case a.w:
                    _.H(c, b.w)
            }
        }
    };
    ua(_.V, lr);
    _.V.prototype.W = function() {
        return this.l ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
    };
    _.V.prototype.da = function(a) {
        return a ? "fifs" : "fif"
    };
    _.V.prototype.O = function(a) {
        lr.prototype.O.call(this, a);
        a.persistentRoadblocksOnly = this.$b;
        a.videoPodNumber = this.rb;
        a.videoPodPosition = this.sb;
        a.videoStreamCorrelator = this.videoStreamCorrelator
    };
    yr = function(a, b, c, d) {
        b = {
            ja: b,
            Ub: c,
            Xc: d
        };
        vr(a, b) || wr(a, b) || xr(a, b)
    };
    vr = function(a, b) {
        var c = _.Xf(Mi),
            d = Ih[c];
        if (null == d) return !1;
        var e = Math.max(d / 100, 1);
        c = b.ja.j;
        if (!qb(c, function(b) {
                var c = _.Q(b);
                return _.qf(c) && !_.zr(a, window, e, b)
            })) return !1;
        var f = a.V(d + "%");
        if (!f) return !1;
        var g = function() {
            return xr(a, b, d)
        };
        _.B(c, function(b) {
            var c = b.getSlotElementId();
            if (b = _.Q(b)) a.H[c] = g, f.observe(b)
        });
        return !0
    };
    wr = function(a, b) {
        if (!_.Si.is(_.gh.Ka) && !_.Ui.is(_.ih.w)) return !1;
        var c = _.ao(window.document);
        if (1 === c || 0 === c) return !1;
        c = b.ja.j;
        if (!qb(c, function(b) {
                return !_.zr(a, window, 0, b)
            })) return !1;
        _.Ar(a);
        if (!a.I) return !1;
        _.B(c, function(c) {
            var d = c.getSlotElementId();
            a.Y[d] = b;
            a.A[d] = function() {
                var b = a.Y[d];
                b && xr(a, b)
            }
        });
        return !0
    };
    _.Ar = function(a) {
        var b = bo();
        !a.I && b && (a.I = _.E(window.document, b, _.O(324, function() {
            _.D(a.A, function(b) {
                return b.call(a)
            });
            a.A = {}
        })))
    };
    xr = function(a, b, c) {
        c = void 0 === c ? null : c;
        var d = b.ja.j;
        null != c && _.B(d, function(b) {
            var d = b.getSlotElementId(),
                e = _.Q(b);
            _.Br(a, e, d, b, c + "%")
        });
        a.I && !gd(a.A) && _.B(d, function(b) {
            b = b.getSlotElementId();
            delete a.A[b];
            delete a.Y[b]
        });
        if (d = _.Xf(pj)) Dp(), Ap[2] = 1;
        var e = function() {
            var c = b.ja;
            Dp();
            c.xb = Bp[1];
            c = b.ja;
            Dp();
            c.Kb = Bp[4];
            Cr(a, b)
        };
        switch (d) {
            case Fh.Lc:
                Hp(e);
                break;
            case Fh.Mc:
                Ip(e);
                break;
            case Fh.Dc:
                e();
                break;
            default:
                Cr(a, b)
        }
    };
    Cr = function(a, b) {
        var c = b.ja.j,
            d = a.qa(b.ja),
            e = a.Qa(d);
        if (3 == e) Dr(a, d, c, b.Ub, b.ja.l, b.Xc);
        else if (e = 1 == e, a.Tb(d, c, e), e && a.X && 1 != _.t.googletag._getcook_) {
            d = c[b.Ub].ra;
            var f = window;
            e = window.document.domain;
            var g = Gi.is(Wg.w),
                k = !!a.j.D;
            g = g && !_.ml(f, g);
            f = a.X;
            1 == f.j || !f.l && !f.o ? d = null : (k = ll(k || g) + "/gampad/cookie.js?", k += "domain=" + (0, window.encodeURIComponent)(e), k = k + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" + ("&iu=" + d), f.l && (k += "&cookie=" + (0, window.encodeURIComponent)(f.l)), f.o && (k += "&cookie_enabled=1"), d = k);
            d && (d = _.jl(d), _.ed(window.document, d))
        }
        b.ja.L = !0;
        er();
        a.l || (a.pb[_.L(c[0])] = window.setTimeout((0, _.A)(a.ad, a), _.F.u().get(13)));
        em();
        Oq(_.Lq.u(), lg.ub)
    };
    Er = function(a, b, c, d) {
        var e = "";
        d && (e = e + '<script type="text/javascript">' + ("function " + c + "(adContents) { ") + ("window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + a + ");}") + "\x3c/script>");
        return e += '<script src = "' + b + '">\x3c/script>'
    };
    Fr = function(a, b, c, d, e) {
        for (var f = d.split("."), g = window, k = 0; k < f.length && g; k++) g = g[f[k]];
        g && (f = new _.M("gpt_callbackexists"), _.q(f), _.r(f, "callback", d), _.N(f));
        e ? Pa(d, function(c) {
            a.Ea(window, c, b)
        }) : g || Pa(d, Ea);
        _.ed(window.document, c)
    };
    Gr = function(a) {
        var b = new _.M("gpt_ignore_resp");
        _.q(b);
        _.r(b, "req_id", String(a));
        _.N(b)
    };
    Dr = function(a, b, c, d, e, f) {
        b = Vq(a, b);
        var g = _.jl(b);
        a.l ? ar(a, c, e) : c[0].fetchStarted(g);
        Hr(a, c, d);
        var k = ++a.ta;
        a.ca[k] = c;
        var l = a.l || _.kq(a.j, c[0]);
        l || Gr(k);
        b = "";
        a.xa || (b = Er(k, g, e, l));
        fr(a, c, g);
        if (a.xa) Fr(a, k, g, e, l);
        else {
            if (null == _.Q(c[d]))
                if (e = rb(c, function(a) {
                        return null != _.Q(a)
                    }), -1 != e) d = e;
                else {
                    f && Ir(a, c[d], b, f);
                    return
                }
            Ir(a, c[d], b, c[d])
        }
    };
    _.V.prototype.Tb = function(a, b, c) {
        var d = this;
        a = Vq(this, a, c);
        var e = _.jl(a);
        this.l ? ar(this, b, "callbackProxy", c) : b[0].fetchStarted(e);
        var f = ++this.ta;
        this.ca[f] = b;
        $q(this, a, function(a) {
            d.l || _.kq(d.j, b[0]) ? d.Ea(window, a, f) : Gr(f)
        }, Tl(this.j, b).join(","), c);
        fr(this, b, a)
    };
    var Ir = function(a, b, c, d) {
            var e = window.document,
                f = b.getSlotElementId(),
                g = a.R[f];
            if (!g) {
                d = _.Q(d, e);
                if (null == d) return;
                b = _.wn(b) + "__hidden__";
                g = Jl(d, b, "", !0, [0, 0], e);
                a.R[f] = g
            }
            _.Ol(g, c, !1)
        },
        Jr = function(a) {
            return _.wn(a) + "__container__"
        },
        Nr = function(a, b) {
            var c = window.document;
            if (_.kq(a.j, b)) {
                var d = b.getSlotElementId(),
                    e = _.Q(b, c);
                if (e) {
                    _.Br(a, e, d, b);
                    d = Jr(b);
                    var f = _.wn(b) + "__hidden__";
                    e = e.childNodes;
                    for (var g = !1, k = 0; k < e.length; ++k)
                        if (1 == e[k].nodeType) {
                            var l = e[k];
                            if (l.id != d && l.id != f && !Kr.test(l.id)) {
                                g = !0;
                                break
                            }
                        }(g = g || Lr(c, b)) && Mr(a, b)
                }
            }
        },
        Lr = function(a, b) {
            a = _.xn(b, a);
            return !!a && pb(Ad(a), function(a) {
                return a.id != _.wn(b)
            })
        };
    _.V.prototype.Yb = function(a, b) {
        var c = this;
        if (!this.I || !qb(a, function(a) {
                return !c.A[a.getSlotElementId()]
            })) {
            if (rj.is(Eh.w) && qb(a, function(a) {
                    return 0 < a.O
                })) {
                var d = _.ao(window.document);
                if (1 != d && 0 != d) return
            }
            a = Eb(a, function(a) {
                return 0 != on(a).length
            });
            a[!1] && _.B(a[!1], function(a) {
                _.br(this, window.document, a, !0)
            }, this);
            if (a = a[!0]) {
                var e = b.isVideoRefresh ? 3 : 2,
                    f = _.Dm();
                _.B(a, function(a) {
                    a.pa = ++_.Dm().fa;
                    var b = a.getCsiId();
                    _.Rm(f, "request_refresh_type", b + "_" + e, a.j)
                });
                _.u(b.videoStreamCorrelator) ? this.videoStreamCorrelator = b.videoStreamCorrelator : (d = !0, _.u(b.changeCorrelator) && (d = b.changeCorrelator), d && Rq(this));
                this.rb = b.videoPodNumber || window.NaN;
                this.sb = b.videoPodPosition || window.NaN;
                this.$b = b.persistentRoadblocksOnly || !1;
                this.ga = b.clearUnfilledSlots || !1;
                iq(this.j, a);
                this.za = a.length;
                for (b = 0; b < a.length; ++b) Nr(this, a[b]);
                if (!this.$) {
                    var g = (0, _.A)(function(a) {
                        var b = Or(this);
                        return Sq(this, a, e, b)
                    }, this);
                    if (this.l) a = Eb(a, function(a) {
                        return a.ra
                    }), _.D(a, function(a) {
                        Pr(this, g(a), 0)
                    }, this);
                    else
                        for (b = 0; b < a.length; ++b) Pr(this, g([a[b]]), 0)
                }
            }
        }
    };
    _.V.prototype.wa = function(a) {
        for (var b = 0; b < a.length; ++b) Mr(this, a[b]), Qr(this, a[b]), un(a[b]);
        return !0
    };
    _.Br = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        b && a.H[c] && ((d = e ? a.V(e) : _.dr(a, d)) && d.unobserve(b), delete a.H[c])
    };
    Rr = function(a, b) {
        delete a.Y[b];
        delete a.A[b];
        _.D(a.Y, function(a) {
            xb(a.ja.j, function(a) {
                return a.getSlotElementId() === b
            })
        })
    };
    Mr = function(a, b) {
        var c = !!b.m;
        _.Sr(a, b);
        var d = b.getSlotElementId(),
            e = _.Q(b);
        _.Br(a, e, d, b);
        Rr(a, d);
        if (c) {
            if (!e) return;
            var f = Jr(b) + "__to_be_removed__";
            c = _.zb(e.childNodes);
            _.B(c, function(a) {
                1 == a.nodeType && a.id == f || e.removeChild(a)
            })
        } else e && (e.innerHTML = "");
        delete a.R[b.getSlotElementId()]
    };
    Tr = function(a, b, c, d, e) {
        var f = Jr(c);
        b = b.createElement("div");
        b.id = f;
        b.name = f;
        f = b.style;
        f.border = "0pt none";
        a.j.o && (f.margin = "auto", f.textAlign = "center");
        e && (a = _.y(e), f.width = a ? e[0] + "px" : "100%", f.height = a ? e[1] + "px" : "0%");
        d.appendChild(b);
        c.F && (c.K = b);
        return b
    };
    _.Vr = function(a, b, c, d, e) {
        var f = _.wn(c);
        b = Jl(d, f, _.ur, !1, e, b);
        _.E(b, "load", function() {
            c.D && (_.Ur(a, c), a.loaded(c))
        });
        c.A = !0;
        c.F && (c.N = b);
        return b
    };
    _.V.prototype.ha = function(a) {
        _.D(this.F, function(b) {
            _.tn(b.slot, a) || _.Vr(this, a, b.slot, b.Sc, b.size)
        }, this);
        this.F = {}
    };
    var Wr = function(a, b, c, d) {
        var e = on(c);
        if (0 == e.length) var f = null;
        else if (f = e[0], 1 < e.length) {
            b: if ((e = _.Q(c, b)) && e.style.height && e.style.width) {
                e = [e.style.width, e.style.height];
                for (var g = 0; g < e.length; ++g)
                    if (2 < e[g].length && "px" == e[g].substring(e[g].length - 2)) e[g] = (0, window.parseInt)(e[g], 10);
                    else {
                        e = null;
                        break b
                    }
            } else e = null;f = e || f
        }
        f && (e = _.tn(c, b), null != e ? a.j.m[_.L(c)] = e : (e = _.Q(c, b), null != e && (a.Aa && d ? (d = _.xn(c, b) || Tr(a, b, c, e, f), e = _.wn(c), a.F[e] || (g = gd(a.F), a.j.m[_.L(c)] = d, a.F[e] = {
            slot: c,
            Sc: d,
            size: f
        }, g && window.setTimeout((0, _.A)(a.ha, a, b), 0))) : (d = Tr(a, b, c, e), b = _.Vr(a, b, c, d, f), a.j.m[_.L(c)] = b))))
    };
    _.h = _.V.prototype;
    _.h.Ha = function() {};
    _.h.Bb = function() {};
    _.h.Sb = function() {};
    _.h.Ea = function(a, b, c) {
        _.fm.push({
            Fa: this,
            ua: 1,
            sa: [window, b, c]
        })
    };
    _.h.Pb = ba(0);
    _.h.ad = function() {
        var a = new _.M("gpt_request_timeout", _.nl(), _.F.u().get(23));
        _.q(a, this.j);
        _.N(a);
        _.Xr(this)
    };
    _.Xr = function(a) {
        0 < a.D.length && (a.D.shift(), 0 < a.D.length && yr(a, a.D[0], 0))
    };
    _.V.prototype.Ca = function(a, b) {
        if (Ji.is(Zg.w) && _.tn(a, b) && !a.A) return !1;
        var c = a.T;
        Wr(this, b, a, !c);
        return null != c ? (_.fm.push({
            Fa: this,
            ua: 3,
            sa: [a, b]
        }), !0) : !1
    };
    var Pr = function(a, b, c, d, e) {
        d = d || window.document;
        for (var f = 0, g = b.j.length; f < g; f++) Wr(a, d, b.j[f], !0);
        a.l || !a.j.R ? yr(a, b, c, e) : (a.D.push(b), 1 == a.D.length ? yr(a, b, c) : (b = _.ha(a.D, function(a) {
            return !a.L
        }), 1 < b.length && (c = new _.M("gpt_request_queue_length", _.nl()), _.r(c, "len", "" + b.length), _.q(c, a.j), _.N(c))))
    };
    _.V.prototype.Db = function(a) {
        if (!this.l) {
            var b = _.Q(a);
            b && (this.j.I[_.L(a)] = b)
        }
    };
    _.V.prototype.Mb = function() {};
    _.V.prototype.Ab = function() {};
    _.V.prototype.kb = function(a, b) {
        var c = this,
            d = this.yc;
        d || Qr(this, a);
        var e = [],
            f = [],
            g = -1,
            k = null,
            l = b || window.document;
        if (this.l || this.Zb) {
            this.Ca(a, l) && d && (d = !1);
            e = hq(this.j);
            if (0 == e.length) return;
            e = Eb(e, function(a) {
                return 0 != on(a).length
            });
            e[!1] && Yr(this, e[!1]);
            e = e[!0];
            if (!e) return
        }
        if (this.l) b = Eb(e, function(a) {
            return a.ra
        }), k = sb(e, function(a) {
            return null != _.Q(a)
        }), _.D(b, function(b, c) {
            c == a.ra ? f.unshift(b) : f.push(b)
        }), e = f[0], g = a.C || !_.ub(e, a) ? 0 : rb(e, function(b) {
            return _.L(a) == _.L(b)
        });
        else {
            if (this.Zb) k = sb(e, function(a) {
                return null != _.Q(a)
            }), f = ea(e, function(a) {
                return [a]
            });
            else {
                if (0 == on(a).length) {
                    _.br(this, window.document, a, !0);
                    return
                }
                e = [a];
                f = [e]
            }
            g = 0
        }
        this.$ || this.na || (_.B(f, function(a) {
            var b = Or(c);
            a = Sq(c, a, 1, b);
            Pr(c, a, g, l, k);
            g = 0
        }), d && Qr(this, a))
    };
    Or = function(a) {
        var b = "callbackProxy";
        a.xa && (a = ++a.tc, b = "googletag.impl.pubads." + b + a);
        return b
    };
    Yr = function(a, b) {
        _.B(b, function(b) {
            0 == on(b).length && _.br(a, window.document, b, !0)
        })
    };
    Qr = function(a, b) {
        var c = b.getDivStartsCollapsed();
        null == c && (c = "true" === _.yq(a.o, "google_divs_start_collapsed"));
        c && _.Hl(_.Q(b), !1)
    };
    _.zr = function(a, b, c, d) {
        a = _.oq(a.j, d, !0);
        if (!a || -12245933 == a.y) return !1;
        try {
            var e = b.top.document,
                f = b.top;
            f = void 0 === f ? _.t : f;
            var g = e.scrollingElement || of (e);
            var k = (new rd(f.pageXOffset || g.scrollLeft, f.pageYOffset || g.scrollTop)).y
        } catch (l) {
            return !1
        }
        b = ln[1] || nn(b, !0);
        c = k + b.height * (c + 1);
        return a.y >= k && a.y <= c
    };
    _.V.prototype.va = ba(1);
    _.Sr = function(a, b) {
        var c = _.xn(b, window.document),
            d = b.m;
        if (c) {
            var e = _.tn(b, window.document);
            a.K && (a.P ? wo() : vo()).unloadAdBlock(e, !!b.m);
            if (_.pi.is(_.Gg.$a)) {
                var f = _.t.ampInaboxIframes;
                f && _.wb(f, e)
            }
            b.m ? a.K ? (c.style.display = "none", c.id += "__to_be_removed__", e.id = e.id + "__to_be_removed__", a = _.F.u().get(24), window.setTimeout(function() {
                d && yf(d);
                zd(c)
            }, a)) : (d && yf(d), zd(c)) : c.parentNode.removeChild(c)
        } else d && yf(d);
        b.F && (b.K = null);
        b.F && (b.N = null);
        b.m = null
    };
    _.Zr = function(a, b) {
        var c = window.document,
            d = !!b.m,
            e = a.v(b.T),
            f = _.wn(b);
        f = a.F[f];
        e = !b.A && !e && !f;
        d || !a.ob && e ? (_.Sr(a, b), Wr(a, c, b)) : (c = _.tn(b, c), a.ob && e && (d = c.parentNode, d.removeChild(c), d.appendChild(c)), a.K && (a.P ? wo() : vo()).unloadAdBlock(c, !!b.m))
    };
    _.V.prototype.Xb = function() {
        return (0, window.isNaN)(this.za) || this.l ? 0 == hq(this.j).length : hq(this.j).length == Ul(this.j) - this.za
    };
    Hr = function(a, b, c) {
        null == _.Q(b[c]) && $r(a);
        a.l && (pb(b, function(a) {
            return null != _.Q(a)
        }) || as(a))
    };
    $r = function(a) {
        var b = new _.M("gpt_target_slot_has_no_div", _.nl(), _.F.u().get(29));
        _.r(b, "sra", a.l ? "1" : "0");
        _.q(b, a.j);
        _.N(b)
    };
    as = function(a) {
        var b = new _.M("gpt_request_slots_have_no_divs", _.nl(), _.F.u().get(29));
        _.q(b, a.j);
        _.N(b)
    };
    _.Ur = function(a, b) {
        var c = _.t.performance,
            d = _.cr(b);
        if (d && a.Z && c && c.now) {
            var e = b.ha;
            c = -1 < e ? c.now() - e : 0;
            if (0 < c) {
                e = new _.M("gpt_vor_rtl");
                var f = _.oq(a.j, b);
                _.q(e);
                _.r(e, "marg", String(d));
                _.r(e, "invp", String(b.ca));
                _.r(e, "mslate", String(Math.round(c)));
                _.r(e, "ifi", String(b.da));
                _.r(e, "ady", String(Math.round(f.y)));
                _.r(e, "adx", String(Math.round(f.x)));
                _.r(e, "rumc", String(Al));
                _.N(e, 1)
            }
            b = _.Q(b, window.document);
            a.Z.unobserve(b)
        }
    };
    Kr = /google_ads_iframe_\S+__hidden__/;
    var bs = function(a, b, c, d, e) {
            this.F = b;
            this.D = c;
            this.H = d;
            this.o = a;
            this.m = -1;
            this.j = 1;
            this.l = "";
            this.C = e;
            this.A = this.v = 0
        },
        fs = function(a, b) {
            if (b)
                if (1 != a.j && 2 != a.j) Xl(321, Error("state err: " + cs(a)));
                else {
                    a.A++;
                    a.l && (b = a.l + b);
                    var c = 0,
                        d;
                    do {
                        var e = b.indexOf("\n", c),
                            f = (d = -1 != e) ? e : b.length;
                        if (!d)
                            if (1 == a.j || a.C) break;
                            else {
                                for (var g = f - 1, k = 0; 0 <= g && "\\" == b[g--];) k++;
                                k & 1 && f--
                            }
                        c = b.substr(c, f - c);
                        var l = a;
                        k = d && 2 == a.j;
                        var n = 1 == l.j;
                        n && ++l.m;
                        if (g = l.o[l.m])
                            if (n) {
                                k = l;
                                try {
                                    k.F(g, ds(c))
                                } catch (p) {}
                                k.j = 2
                            } else {
                                try {
                                    l.D(g, es(c), k)
                                } catch (p) {}
                                k && (l.j = 1)
                            }
                        else Xl(321, Error("missing slot: " + cs(l)));
                        a.v += c.length;
                        c = d ? e + 1 : f
                    } while (d && c < b.length);
                    a.l = b.substr(c)
                }
        },
        gs = function(a, b) {
            a.j = 4;
            try {
                a.H(b)
            } catch (c) {}
        },
        hs = function(a) {
            1 != a.j || a.l ? gs(a, Error("state err" + cs(a))) : 0 < a.o.length - (a.m + 1) ? gs(a, Error("unhandled slots: " + cs(a))) : a.j = 3
        },
        cs = function(a) {
            return "(" + [a.j, a.o.length, a.m, a.v, a.l.length, a.A].join() + ")"
        },
        ds = function(a) {
            try {
                var b = _.t.JSON.parse(a);
                return _.z(b) ? b : null
            } catch (c) {
                return Xl(321, c), null
            }
        },
        es = function(a) {
            return a.replace(/\\(n|r|\\)/g, function(a, c) {
                return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
            })
        };
    var is = function(a, b, c, d) {
            this.v = null == b ? "GET" : "POST";
            this.l = b;
            this.A = a;
            this.j = c;
            this.C = !1;
            this.D = d || !yl();
            this.F = 0;
            this.H = this.D ? null : new _.t.TextDecoder;
            this.m = _.O(323, this.m);
            this.o = _.O(323, this.o)
        },
        ls = function(a) {
            a.C || (a.C = !0, a.D ? js(a) : ks(a))
        },
        ks = function(a) {
            var b = {
                method: a.v,
                credentials: "include"
            };
            a.l && (b.body = a.l);
            _.t.fetch(a.A, b).then(_.O(323, function(b) {
                return a.m(b)
            }))["catch"](function(b) {
                return gs(a.j, b)
            })
        };
    is.prototype.m = function(a) {
        var b = this;
        if (400 <= a.status) throw Error("fetch err: " + a.status);
        if (!a.body) return a.text().then(_.O(323, function(a) {
            fs(b.j, a);
            hs(b.j)
        }));
        a = a.body.getReader();
        return ms(this, a)
    };
    is.prototype.o = function(a, b) {
        if (a.value) {
            var c = this.H.decode(a.value, {
                stream: !0
            });
            fs(this.j, c)
        }
        if (a.done) hs(this.j);
        else return ms(this, b)
    };
    var ms = function(a, b) {
            return b.read().then(function(c) {
                return a.o(c, b)
            })
        },
        js = function(a) {
            var b = new _.t.XMLHttpRequest;
            b.open(a.v, a.A);
            b.withCredentials = !0;
            b.onreadystatechange = _.O(322, function() {
                if (400 <= b.status) gs(a.j, Error("xhr err: " + b.status));
                else if (3 == b.readyState || 4 == b.readyState) {
                    var c = b.responseText.substr(a.F);
                    c && fs(a.j, c);
                    a.F = b.responseText.length;
                    4 == b.readyState && hs(a.j)
                }
            });
            b.onerror = function(b) {
                return gs(a.j, b)
            };
            b.send(a.l)
        };
    var ps;
    _.ns = function(a, b, c, d) {
        _.F.u().set(77, 0);
        _.V.call(this, a, b, c, d);
        this.vc = 1;
        this.C = {};
        this.ac = {}
    };
    ua(_.ns, _.V);
    _.ns.prototype.la = function() {
        return "ldjh"
    };
    _.ns.prototype.Qa = function(a) {
        return 4096 > a.length ? 2 : 1
    };
    var os = function(a, b, c, d) {
        b = _.jl(Vq(a, b, d));
        return d ? Zq(b, Tl(a.j, c).join()) : {
            url: b,
            body: null
        }
    };
    _.ns.prototype.Tb = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? window.document : d;
        var f = this.vc++,
            g = _.O(287, function(a, b) {
                _.fm.push({
                    Fa: e,
                    ua: 6,
                    sa: [f, a, b, d]
                })
            }),
            k = _.O(288, function(a, b, c) {
                _.fm.push({
                    Fa: e,
                    ua: 5,
                    sa: [f, a, b, c, d]
                })
            }),
            l = _.O(289, function(a) {
                return ps(e, a, f)
            });
        c = os(this, a, b, c);
        a = c.url;
        c = c.body;
        var n = !Ll || Hi.is(Xg.Wa) || Ii.is(Yg.Wa);
        g = new bs(b, g, k, l, n);
        k = Hi.is(Xg.Xa) || Ii.is(Yg.Xa);
        fr(this, b, a);
        ls(new is(a, c, g, k));
        this.l ? ar(this, b, "") : b[0].fetchStarted(a);
        em()
    };
    ps = function(a, b, c) {
        var d = Ob(a.C, function(a) {
            return a == c
        });
        d && delete a.C[d];
        Yl(289, Error(b && b.message || "strm_err"), !0)
    };
    _.qs = function(a, b, c) {
        var d = b.T;
        d && !d._empty_ && (_.Hl(_.Q(b, c), !0), _.Zr(a, b), !a.v(d) && (b.A = !0, a = _.tn(b, c))) && (d._width_ && (a.width = String(d._width_)), d._height_ && (a.height = String(d._height_)))
    };
    _.ns.prototype.Ob = ba(2);
    _.rs = function(a, b, c, d, e) {
        _.Ol(b, c, !1, d, e);
        a.A = !1
    };
    _.ns.prototype.Sa = ba(3);
    _.ns.prototype.Ca = function(a, b) {
        if (!this.C[_.L(a)]) return _.V.prototype.Ca.call(this, a, b);
        var c = a.T;
        return !_.tn(a, b) && !this.v(c) && (Wr(this, b, a), _.qs(this, a, b), b = _.tn(a, b)) ? (_.rs(a, b, c._html_, !0, !1), !0) : !1
    };
    var ss = function(a) {
        return a ? !_.Vf(Ii) && !Ii.is(Yg.B) : !_.Vf(Hi) && !Hi.is(Xg.B)
    };
    _.ts = function(a, b, c, d) {
        lr.call(this, a, b, c, d);
        this.Z = 0;
        this.D = this.F = null;
        this.A = [];
        this.Y = Math.random() < _.F.u().get(23);
        this.C = !1;
        this.R = 0;
        this.Ha = _.O(204, this.Ha)
    };
    ua(_.ts, lr);
    _.ts.prototype.W = function() {
        return this.l ? "gut_sync_sra" : "gut_sync"
    };
    _.ts.prototype.da = function(a) {
        return a ? "ss" : "s"
    };
    _.us = function(a, b) {
        if (!a.$) {
            a.F = b.j;
            var c = a.qa(b);
            c = _.jl(Vq(a, c, !1));
            var d = ++a.Z;
            a.l ? ar(a, b.j, "googletag.impl.pubads.setAdContentsBySlotForSync") : b.j[0].fetchStarted(c);
            er();
            fr(a, b.j, c);
            var e = "sae-script-" + d;
            Il(c, e);
            a.Y && (a.R = window.setTimeout(function() {
                if (!window.document.getElementById(e)) {
                    var a = new _.M("gpt_write_script_failed");
                    _.q(a);
                    _.N(a, 1)
                }
            }, 0));
            Oq(_.Lq.u(), lg.ub);
            em(!0)
        }
    };
    _.h = _.ts.prototype;
    _.h.Ea = function() {};
    _.h.Ha = function(a) {
        _.fm.push({
            Fa: this,
            ua: 2,
            sa: [a]
        })
    };
    _.h.Qb = ba(4);
    _.h.Db = function(a) {
        if (!this.l) {
            var b = null,
                c = Ra.getElementsByTagName("script");
            c && c.length && (b = c[c.length - 1]);
            (b = b && b.parentElement) && (this.j.I[_.L(a)] = b)
        }
    };
    _.h.Mb = function(a) {
        var b = "google_temp_div_" + _.L(a),
            c = '<div id="' + _.eb(b) + '"></div>';
        window.document.write(c);
        c = window.document;
        (b = _.w(b) ? c.getElementById(b) : b) && (this.j.m[_.L(a)] = b)
    };
    _.h.Ab = function(a) {
        var b = this.j;
        a = _.L(a);
        var c = b.m[a];
        c && (zd(c), delete b.m[a])
    };
    _.h.kb = function(a) {
        var b = null == this.D;
        this.D = a;
        this.C = !1;
        if (this.l)
            if (b) {
                if (b = _.ha(gq(this.j), function(a) {
                        return 0 != on(a).length
                    }), _.ub(b, a) || _.br(this, window.document, a, !1), b.length) {
                    b = Eb(b, function(a) {
                        return a.ra
                    });
                    for (var c in b)
                        if (b.hasOwnProperty(c)) {
                            var d = Sq(this, b[c], 1, "googletag.impl.pubads.setAdContentsBySlotForSync");
                            c == a.ra ? this.A.unshift(d) : this.A.push(d)
                        }
                    this.A.length && _.us(this, this.A.shift())
                }
            } else _.vs(this, a);
        else 0 == on(a).length ? _.br(this, window.document, a, !1) : _.us(this, Sq(this, [a], 1, a.j ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"))
    };
    _.vs = function(a, b) {
        _.fm.push({
            Fa: a,
            ua: 4,
            sa: [window, window.document, b]
        })
    };
    _.ts.prototype.I = ba(5);
    var ws = function(a, b, c) {
        var d = c.T,
            e = b.parentNode,
            f = d && d._html_;
        f ? (!d._expandable_ || d._is_afc_ && d._is_3pas_ ? (_.E(b, "load", function() {
            c.D && a.loaded(c)
        }), _.Ol(b, f, !0)) : e.innerHTML = f, _.lq(c, _.qn(c, d))) : (e.removeChild(b), c.renderEnded(_.rn(c)))
    };
    _.ts.prototype.Sb = function(a, b) {
        b && (b = this.j.j[b]) && !b.Y && (b.Y = !0, ws(this, a, b))
    };
    var xs = function(a, b, c, d, e, f, g) {
            a = a.createElement(b);
            a.style.width = d + "px";
            e && (a.style.height = e + "px");
            a.style.display = f;
            a.style.position = "relative";
            g && (a.style.margin = g);
            a.style.border = 0;
            c && a.appendChild(c);
            return a
        },
        ys = function(a, b, c, d, e, f) {
            e = xs(a, "ins", e, c, d, "block");
            d = xs(a, "ins", e, c, d, "inline-table");
            d.style.verticalAlign = "bottom";
            b = a.getElementById(b);
            f ? (a = xs(a, "div", d, c, null, "block", "auto"), b.appendChild(a)) : b.appendChild(d)
        };
    _.ts.prototype.Bb = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f = c.T,
            g = f._width_,
            k = f._height_,
            l = f._html_,
            n = a.createElement("iframe"),
            p = _.wn(c);
        n.id = p;
        n.title = _.ur;
        n.name = p;
        n.width = g;
        n.height = k;
        n.vspace = 0;
        n.hspace = 0;
        n.allowTransparency = "true";
        n.scrolling = "no";
        n.marginWidth = 0;
        n.marginHeight = 0;
        n.frameBorder = 0;
        n.style.border = 0;
        n.style.position = "absolute";
        n.style.top = "0";
        n.style.left = "0";
        _.E(n, "load", function() {
            c.D && e.loaded(c)
        });
        ys(a, b, g, k, n, d);
        n.contentWindow.document.write(l);
        n.contentWindow.document.write("<script>document.close();\x3c/script>");
        _.lq(c, _.qn(c, f))
    };
    _.ts.prototype.v = function(a) {
        return a._snippet_ && !a._is_afc_ ? !!a._use_safe_frame_ : lr.prototype.v.call(this, a)
    };
    var zs = function() {
            this.m = this.j = this.l = null
        },
        W = function(a) {
            null == a.l && (a.l = new eq(Mn));
            return a.l
        },
        Bs = function(a) {
            if (null != a.j) return a.j;
            var b = _.yq(As(a), "google_ad_impl"),
                c = _.Dm(),
                d = [yl, Kh];
            switch (b) {
                case "gut_sync_sra":
                    Qm(c, !0);
                    a.j = new _.ts(!0, W(a), As(a), xq(void 0));
                    Im(c, "sync");
                    break;
                case "gut_friendly_iframe":
                    Qm(c, !1);
                    Uf(Hi, _.F.u().get(122), d, !1);
                    ss(!1) ? a.j = new _.ns(!1, W(a), As(a), xq(void 0)) : a.j = new _.V(!1, W(a), As(a), xq(void 0));
                    Im(c, "fif");
                    break;
                case "gut_friendly_iframe_sra":
                    Qm(c, !0);
                    Uf(Ii, _.F.u().get(121), d, !1);
                    ss(!0) ? a.j = new _.ns(!0, W(a), As(a), xq(void 0)) : a.j = new _.V(!0, W(a), As(a), xq(void 0));
                    Im(c, "fif");
                    break;
                default:
                    Qm(c, !1), a.j = new _.ts(!1, W(a), As(a), xq(void 0)), Im(c, "sync")
            }
            rr(a.j);
            return a.j
        },
        As = function(a) {
            null == a.m && (a.m = new zq);
            return a.m
        },
        Cs = null,
        X = function() {
            Cs || (Cs = new zs);
            return Cs
        },
        Ds = null,
        Es = function() {
            Ds || (Ds = new zs);
            return Ds
        };
    var Fs = function() {};
    _.h = Fs.prototype;
    _.h.addSlot = function(a) {
        if (!a) return null;
        var b = a.getAdUnitPath();
        return b && b.length ? fq(W(X()), a) : null
    };
    _.h.fillSlot = function(a) {
        var b = X(),
            c = Bs(b);
        b = W(b);
        a && b.j[_.L(a)] && (null == a.T || c.l) && (c.Db(a), c.Mb(a), c.kb(a), c.Ab(a))
    };
    _.h.setCookieOptions = function(a) {
        X();
        var b = xq(a);
        b.j = a;
        tq(b)
    };
    _.h.setTagForChildDirectedTreatment = function(a) {
        W(X()).P = a
    };
    _.h.setKidsFriendlyAds = function(a) {
        W(X()).V = a
    };
    _.h.passback = function(a) {
        if (a) {
            var b = a.getAdUnitPath();
            b && b.length && (b = Es(), fq(W(b), a), Bs(b).kb(a))
        }
    };
    _.h.disableInitialLoad = function() {
        window.google_DisableInitialLoad = !0
    };
    _.h.addAttribute = function(a, b) {
        var c = W(X());
        if (!Wa(jb(a))) {
            Wa(jb(b)) && (b = "");
            var d = c.l[a];
            c.l[a] = d ? d + "," + b : b
        }
    };
    _.h.clearAttribute = function(a) {
        var b = W(X());
        void 0 != a ? Wa(jb(a)) || b.l[a] && delete b.l[a] : b.l = {}
    };
    _.h.addPageCategoryExclusion = function(a) {
        var b = W(X());
        Wa(jb(a)) || vb(b.F, a)
    };
    _.h.clearPageCategoryExclusions = function() {
        W(X()).F = []
    };
    _.h.addAdSensePageAttribute = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = W(X());
        c = void 0 === c ? !1 : c;
        cq(d.v, a, b);
        c || na(d.H, a, b)
    };
    _.h.addAdSenseSlotAttribute = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = W(X());
        a && e.j[_.L(a)] && (d = void 0 === d ? !1 : d, a = _.L(a), null == e.A[a] && (e.A[a] = new Yp(e.W)), cq(e.A[a], b, c), d || na(e.H, b, c))
    };
    _.h.enableSingleRequest = function() {
        var a = As(X());
        null == _.yq(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_sync_sra")
    };
    _.h.collapseEmptyDivs = function(a) {
        var b = As(X());
        b.j.google_collapse_empty_div = "true";
        a && (b.j.google_divs_start_collapsed = "true")
    };
    _.h.enableAsyncRendering = function() {
        var a = As(X());
        null == _.yq(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe")
    };
    _.h.enableAsyncSingleRequest = function() {
        var a = As(X());
        null == _.yq(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe_sra")
    };
    _.h.setVideoContentInformation = function(a, b) {
        var c = Bs(X());
        c.Vb = !0;
        c.pa = a;
        c.oa = b;
        c.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random())
    };
    _.h.getVideoContentInformation = function() {
        var a = Bs(X());
        return {
            cmsid: a.oa,
            vid: a.pa
        }
    };
    _.h.getVideoStreamCorrelator = function() {
        return Bs(X()).videoStreamCorrelator
    };
    _.h.refresh = function(a, b) {
        var c = X(),
            d = Bs(c);
        c = W(c);
        a = null != a ? Gs(a) : gq(c);
        0 == a.length || d.Yb(a, b)
    };
    _.h.destroySlots = function(a) {
        var b = W(X());
        this.clearSlotContents(a);
        for (var c = 0; c < a.length; ++c)
            if (b.j[_.L(a[c])]) {
                var d = b.j,
                    e = _.L(a[c]);
                e in d && delete d[e]
            }
    };
    _.h.getCorrelator = function() {
        return Bs(X()).L + ""
    };
    _.h.setCorrelator = function(a) {
        Rq(Bs(X()), a)
    };
    _.h.setMobilePlatform = function() {
        As(X()).j.target_platform = "MOBILE"
    };
    _.h.setApiExperiment = function(a) {
        _.Jh(a)
    };
    _.h.isAdRequestFinished = function() {
        return Bs(X()).Xb()
    };
    _.h.isSlotAPersistentRoadblock = function(a) {
        return a ? !_.kq(W(X()), a) : !1
    };
    _.h.clearNoRefreshState = function() {
        W(X()).N = {}
    };
    _.h.clearSlotContents = function(a) {
        var b = X(),
            c = Bs(b);
        b = W(b);
        a = a ? Gs(a) : gq(b);
        return c.wa(a)
    };
    var Hs = function(a) {
            W(X()).K = a
        },
        Is = function(a) {
            W(X()).L = a
        },
        Js = function(a) {
            W(X()).R = a
        };
    Fs.prototype.setLocation = function(a) {
        W(X()).D = a
    };
    Fs.prototype.setPublisherProvidedId = function(a) {
        W(X()).H = a
    };
    Fs.prototype.getVersion = function() {
        return Pl()
    };
    Fs.prototype.setCenterAds = function(a) {
        W(X()).o = a
    };
    var Gs = function(a) {
            var b = W(X());
            return _.ha(a, function(a) {
                return !!b.j[_.L(a)]
            })
        },
        Ks = null,
        Ls = function(a, b) {
            var c = _.t.googletag || (_.t.googletag = {});
            c = c.impl || (c.impl = {});
            c = c.pubads || (c.pubads = {});
            c[a] || (c[a] = b)
        };
    Ls("createDomIframe", _.O(96, function(a, b, c, d) {
        var e = d ? Es() : X();
        d = Bs(e);
        if (e = W(e).j[b]) d.Bb(window.document, a, e, c), (a = _.tn(e, window.document)) && _.sr(d, a, b)
    }));
    Ls("setAdContentsBySlotForSync", _.O(98, function(a) {
        Bs(X()).Ha(a)
    }));
    Ls("setPassbackAdContents", _.O(99, function(a) {
        Bs(Es()).Ha(a)
    }));
    Ls("setAdContentsBySlotForAsync", _.O(100, function(a, b) {
        Bs(X()).Ea(window, a, b)
    }));
    Ls("syncAdSlotLoaded", _.O(102, function(a, b, c) {
        Bs(c ? Es() : X()).Sb(a, b)
    }));
    Ls("setCookieInfo", _.O(103, function(a) {
        X();
        var b = xq(void 0);
        _.vq(b, a)
    }));
    var Ms = null,
        Ps = function() {
            var a = this;
            this.j = {};
            this.l = _.el.u();
            _.E(_.t, "DOMContentLoaded", _.O(334, function() {
                return Ns(a)
            }));
            _.E(_.t, "beforeunload", _.O(335, function() {
                Os(a, "gpt_br_bu", !0)
            }))
        },
        Qs = function() {
            return Ms ? Ms : _.t.IntersectionObserver ? Ms = new Ps : null
        },
        Rs = function(a, b) {
            var c = _.Q(b, _.t.document);
            return c && "DIV" == c.nodeName ? ((a = Xp(_.t, a.l, c, b.getCsiId(), function(a) {
                Xl(336, a, 1)
            })) && a.observe(c), !0) : !1
        },
        Ns = function(a) {
            gd(a.j) || (a.j = Kb(a.j, function(b) {
                return !Rs(a, b)
            }), Os(a, "gpt_br_dcl", !1))
        },
        Os = function(a, b, c) {
            b = new _.M(b);
            _.q(b);
            _.r(b, "unobslots", String(hd(a.j)));
            if (c) {
                var d = 0;
                _.D(a.j, function(a) {
                    _.Q(a, _.t.document) && d++
                });
                _.r(b, "unobdivs", String(d))
            }
            _.N(b, 1)
        };
    var Ss = _.F.u().get(36);
    var Us = function(a, b, c) {
            var d = Ts++;
            this.j = new P(a, d, b);
            this.j.j = !0;
            this.j.addService(c);
            this.l = c
        },
        Ts = 1;
    _.h = Us.prototype;
    _.h.setClickUrl = function(a) {
        this.j.setClickUrl(a);
        return this
    };
    _.h.setClickUrl = _.O(79, Us.prototype.setClickUrl);
    _.h.setTargeting = function(a, b) {
        this.j.setTargeting(a, b);
        return this
    };
    _.h.setTargeting = _.O(81, Us.prototype.setTargeting);
    _.h.updateTargetingFromMap = function(a) {
        var b = this.j.getTargetingMap();
        if (!a || _.w(a) || "number" == typeof a) return If().error(K("PassbackSlot.updateTargetingFromMap", [a])), this;
        try {
            return _.D(a, function(a, b) {
                this.setTargeting(b, a)
            }, this), this
        } catch (c) {
            return this.j.v = Pb(b), If().error(K("PassbackSlot.updateTargetingFromMap", [a])), this
        }
    };
    _.h.updateTargetingFromMap = _.O(85, Us.prototype.updateTargetingFromMap);
    _.h.setAudExtId = function(a) {
        Cl(a) && (this.j.ka = a);
        return this
    };
    _.h.setAudExtId = _.O(82, Us.prototype.setAudExtId);
    _.h.setTagForChildDirectedTreatment = function(a) {
        if (0 === a || 1 === a) this.j.xa = a;
        return this
    };
    _.h.setTagForChildDirectedTreatment = _.O(80, Us.prototype.setTagForChildDirectedTreatment);
    _.h.display = function() {
        var a = this.l,
            b = this.j;
        a.Ia();
        a.j.passback(b)
    };
    _.h.display = _.O(78, Us.prototype.display);
    _.h.setForceSafeFrame = function(a) {
        this.j.setForceSafeFrame(a);
        return this
    };
    _.h.set = function(a, b) {
        if (!_.w(a) || !b || "page_url" != a) return this;
        a = this.j;
        a.j && (a.Aa = "" + b);
        return this
    };
    _.h.set = _.O(83, Us.prototype.set);
    _.h.get = function(a) {
        return _.w(a) && "page_url" == a ? this.j.getPassbackPageUrl() : null
    };
    _.h.get = _.O(84, Us.prototype.get);
    _.h.Ta = function(a) {
        this.j.Ta(a)
    };
    var Vs = function(a, b) {
            this.j = a;
            this.l = b || {
                changeCorrelator: !0
            }
        },
        Y = function() {
            um.call(this);
            this.j = null;
            this.Z = 0;
            this.N = -1;
            this.da = 0;
            this.L = {};
            this.v = {};
            this.V = [];
            this.fa = this.R = "";
            this.o = this.ba = this.ka = this.la = !1;
            this.m = !Ss;
            this.Y = Ss;
            this.I = this.F = !1;
            this.D = [];
            this.na = {};
            this.K = !1;
            this.H = -1;
            this.W = this.X = this.oa = this.pa = "";
            this.A = [];
            this.P = this.O = this.ca = !1;
            this.ga = {};
            this.$ = cj.is(ph.w) ? Qs() : null;
            null !== te(window.location.href, "google_force_sra") && this.A.push("108809056");
            Ws(this);
            _.ub(this.A, "108809056") && (this.o = !0)
        };
    _.Qa(Y, um);
    _.h = Y.prototype;
    _.h.set = function(a, b) {
        if (!(_.w(a) && 0 < a.length)) return this.log.G(K("PubAdsService.set", [a, b]), this, null), this;
        this.L[a] = b;
        this.log.info(Wj(a, String(b), this.getName()), this, null);
        return this
    };
    _.h.set = _.O(21, Y.prototype.set);
    _.h.get = function(a) {
        return this.L[a]
    };
    _.h.get = _.O(22, Y.prototype.get);
    _.h.getAttributeKeys = function() {
        var a = [];
        _.D(this.L, function(b, c) {
            a.push(c)
        });
        return a
    };
    _.h.getAttributeKeys = _.O(23, Y.prototype.getAttributeKeys);
    _.h.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        if (c)
            if (_.z(c) && 1 == c.nodeType) {
                var e = c;
                var f = e.id
            } else f = c;
        this.enable();
        a = f ? In(a, b, f) : In(a, b);
        e && !f && (e.id = a.getSlotId().getDomId());
        a.addService(this);
        d && a.setClickUrl(d);
        Ln(e || a.getSlotId().getDomId())
    };
    _.h.display = _.O(24, Y.prototype.display);
    _.h.ib = function() {
        var a = this;
        window.setTimeout(function() {
            return a.Ia()
        }, 0)
    };
    _.h.getName = function() {
        return "publisher_ads"
    };
    _.h.Ia = function() {
        if (!this.j) {
            var a = _.Dm();
            a.m("impl_loaded_instant");
            var b = _.F.u().get(76);
            _.Wm(a, b, "impl");
            window.google_noFetch = !1;
            window.google_DisableInitialLoad = !1;
            this.j = Ks || (Ks = new Fs);
            this.log.info(hk("GPT"), this);
            this.j.setCookieOptions(this.Z);
            this.j.setTagForChildDirectedTreatment(this.N);
            this.j.setKidsFriendlyAds(this.da);
            _.B(this.A, function(a) {
                this.j.setApiExperiment(a)
            }, this);
            this.j.setCenterAds(this.Y);
            Ss && (this.o = !1, this.j.setMobilePlatform());
            this.F && this.j.collapseEmptyDivs(this.I);
            this.m && this.o && (Uf(bi, _.F.u().get(83), []), bi.is(qg.w) && (this.o = !1));
            Js(this.O);
            !this.ka && this.j && (this.ka = !0, this.o ? (this.m ? this.j.enableAsyncSingleRequest() : this.j.enableSingleRequest(), Xs(this), Ys(this)) : this.m && (this.j.enableAsyncRendering(), bi.is(qg.w) && (Xs(this), Ys(this))), this.ba && this.j.disableInitialLoad(), Zs(this), $s(this));
            this.ca && (W(X()).C = !0);
            Hs(this.P);
            Is(this.ga);
            Df("pubadsReady", !0)
        }
    };
    _.h.Ia = _.O(107, Y.prototype.Ia, function(a, b) {
        Xl(a, b)
    });
    _.h.mb = function(a) {
        this.m || (a.fa = !1);
        a.j || at(this, a);
        if (this.$) {
            var b = this.$;
            if (!Rs(b, a)) {
                var c = a.getSlotId().getDomId();
                c && (b.j[c] = a)
            }
        }
        um.prototype.mb.call(this, a)
    };
    _.h.fb = function(a) {
        if (Zm().m && !this.m) this.log.error(kk(), this);
        else if (this.Ia(), Xs(this), at(this, a))
            if (this.log.info(jk()), this.j.fillSlot(a), this.na[a.getAdUnitPath()] = !0, this.j)
                for (a = 0; a < this.D.length; a++) {
                    var b = this.D[a];
                    b.j[0].getAdUnitPath() in this.na && (this.refresh(b.j, b.l), Array.prototype.splice.call(this.D, a, 1), a--)
                } else this.log.error(ik(), this)
    };
    var at = function(a, b) {
            if (a.j && null == a.j.addSlot(b)) return a.log.error(Sk(b.getAdUnitPath()), a, b), !1;
            if (a.j)
                for (var c = b.getAttributeKeys(), d = 0; d < c.length; ++d) c[d] in tr ? a.j.addAdSenseSlotAttribute(b, tr[c[d]], String(b.get(c[d])), !0) : a.log.G(mk(String(c[d]), String(b.get(c[d])), b.getAdUnitPath()), a, b);
            return !0
        },
        Ys = function(a) {
            for (var b = a.getSlots(), c = 0; c < b.length; ++c) at(a, b[c])
        },
        Xs = function(a) {
            if (!a.la && a.j) {
                a.la = !0;
                for (var b = a.getAttributeKeys(), c = 0; c < b.length; ++c) b[c] in tr ? a.j.addAdSensePageAttribute(tr[b[c]], String(a.get(b[c])), !0) : a.log.G(lk(String(b[c]), String(a.get(b[c]))), a);
                _.D(a.v, function(a, b) {
                    if (_.y(a)) {
                        this.j.clearAttribute(b);
                        for (var c = 0; c < a.length; ++c) this.j.addAttribute(b, a[c])
                    }
                }, a);
                _.B(a.V, function(a) {
                    this.j.addPageCategoryExclusion(a)
                }, a);
                a.j.setPublisherProvidedId(a.fa);
                a.R && a.j.setLocation(a.R)
            }
        };
    _.h = Y.prototype;
    _.h.setCookieOptions = function(a) {
        if (!Cl(a)) return this.log.G(nk(String(a)), this), this;
        this.Z = a;
        this.j && this.j.setCookieOptions(a);
        return this
    };
    _.h.setCookieOptions = _.O(17, Y.prototype.setCookieOptions);
    _.h.setTagForChildDirectedTreatment = function(a) {
        if (0 !== a && 1 !== a) return this.log.G(Mk(String(a)), this), this;
        this.N = a;
        this.j && this.j.setTagForChildDirectedTreatment(a);
        return this
    };
    _.h.setTagForChildDirectedTreatment = _.O(18, Y.prototype.setTagForChildDirectedTreatment);
    _.h.clearTagForChildDirectedTreatment = function() {
        this.N = -1;
        this.j && this.j.setTagForChildDirectedTreatment(-1);
        return this
    };
    _.h.clearTagForChildDirectedTreatment = _.O(19, Y.prototype.clearTagForChildDirectedTreatment);
    _.h.setKidsFriendlyAds = function(a) {
        if (0 !== a && 1 !== a) return this.log.G(Rk(String(a)), this), this;
        this.da = a;
        this.j && this.j.setKidsFriendlyAds(a);
        return this
    };
    _.h.setKidsFriendlyAds = _.O(18, Y.prototype.setKidsFriendlyAds);
    _.h.setTargeting = function(a, b) {
        var c = null;
        _.w(b) ? c = [b] : _.y(b) ? c = b : _.Ha(b) && (c = _.zb(b));
        var d = c ? c.join() : String(b);
        if (!_.w(a) || Wa(jb(a)) || !c) return this.log.G(K("PubAdsService.setTargeting", [a, b]), this), this;
        this.v[a] = c;
        this.log.info(Lk(a, d, this.getName()), this);
        if (this.j)
            for (this.j.clearAttribute(a), b = 0; b < c.length; ++b) this.j.addAttribute(a, c[b]);
        return this
    };
    _.h.setTargeting = _.O(1, Y.prototype.setTargeting);
    _.h.clearTargeting = function(a) {
        if ("undefined" != typeof a) {
            var b = a;
            if (!_.w(b) || Wa(jb(b))) return this.log.G(K("PubAdsService.clearTargeting", [b]), this), this;
            if (!this.v[b]) return this.log.G(Ik(b, this.getName()), this), this;
            delete this.v[b];
            this.log.info(Hk(b, this.getName()), this)
        } else this.v = {}, this.log.info(Yk(this.getName()), this);
        this.j && this.j.clearAttribute(b);
        return this
    };
    _.h.clearTargeting = _.O(2, Y.prototype.clearTargeting);
    _.h.getTargeting = function(a) {
        return _.w(a) ? Object.prototype.hasOwnProperty.call(this.v, a) ? _.zb(this.v[a]) : [] : (this.log.G(K("PubAdsService.getTargeting", [a]), this), [])
    };
    _.h.getTargeting = _.O(38, Y.prototype.getTargeting);
    _.h.getTargetingKeys = function() {
        return id(this.v)
    };
    _.h.getTargetingKeys = _.O(39, Y.prototype.getTargetingKeys);
    _.h.setCategoryExclusion = function(a) {
        if (!_.w(a) || Wa(jb(a))) return this.log.G(K("PubAdsService.setCategoryExclusion", [a]), this), this;
        vb(this.V, a);
        this.log.info(Jk(a), this);
        this.j && this.j.addPageCategoryExclusion(a);
        return this
    };
    _.h.setCategoryExclusion = _.O(3, Y.prototype.setCategoryExclusion);
    _.h.clearCategoryExclusions = function() {
        this.V = [];
        this.log.info(Kk(), this);
        this.j && this.j.clearPageCategoryExclusions();
        return this
    };
    _.h.clearCategoryExclusions = _.O(4, Y.prototype.clearCategoryExclusions);
    _.h.disableInitialLoad = function() {
        this.j ? this.log.G(pk("disableInitialLoad", "pubads"), this) : this.ba = !0
    };
    _.h.disableInitialLoad = _.O(5, Y.prototype.disableInitialLoad);
    _.h.enableSingleRequest = function() {
        this.l && !this.o ? this.log.G(ok("enableSingleRequest"), this) : _.ub(this.A, "108809057") || _.ub(this.A, "108809056") || (this.log.info(rk("single request"), this), this.o = !0);
        return this.o
    };
    _.h.enableSingleRequest = _.O(6, Y.prototype.enableSingleRequest);
    _.h.enableAsyncRendering = function() {
        this.l && !this.m ? this.log.G(ok("enableAsyncRendering"), this) : (this.log.info(rk("asynchronous rendering"), this), this.m = !0);
        return this.m
    };
    _.h.enableAsyncRendering = _.O(7, Y.prototype.enableAsyncRendering);
    _.h.enableSyncRendering = function() {
        if (this.l && this.m) this.log.G(ok("enableSyncRendering"), this);
        else {
            this.log.info(rk("synchronous rendering"), this);
            this.m = !1;
            for (var a = this.getSlots(), b = 0; b < a.length; ++b) a[b].fa = !1
        }
        return !this.m
    };
    _.h.enableSyncRendering = _.O(8, Y.prototype.enableSyncRendering);
    _.h.setCentering = function(a) {
        this.log.info(sk("centering", String(a)), this);
        this.Y = a
    };
    _.h.setCentering = _.O(9, Y.prototype.setCentering);
    _.h.setPublisherProvidedId = function(a) {
        this.l ? this.log.G(qk("setPublisherProvidedId", a), this) : (this.log.info(sk("PPID", a), this), this.fa = a);
        return this
    };
    _.h.setPublisherProvidedId = _.O(20, Y.prototype.setPublisherProvidedId);
    _.h.definePassback = function(a, b) {
        if (!_.w(a) || 0 >= a.length || !b) return this.log.error(K("PubAdsService.definePassback", [a, b])), null;
        var c = El(a),
            d = _.Dm();
        Sm(d, "count_of_passback");
        d.F || (d.F = !0, Im(d, "n" + c));
        Nm(d);
        return new Us(a, b, this)
    };
    _.h.definePassback = _.O(10, Y.prototype.definePassback);
    _.h.defineOutOfPagePassback = _.O(35, function(a) {
        a = this.definePassback(a, [1, 1]);
        a.Ta(!0);
        return a
    });
    _.h.refresh = function(a, b) {
        if (a && !_.y(a) || b && (!_.z(b) || b.changeCorrelator && !_.Da(b.changeCorrelator))) this.log.G(K("PubAdsService.refresh", _.ha([a, b], _.u)), this);
        else {
            var c = null;
            if (a && (c = bt(this, a), !c.length)) {
                this.log.G(K("PubAdsService.refresh", _.ha([a, b], _.u)), this);
                return
            }
            this.j ? (this.log.info(yk(), this), a = !0, _.u(b) && _.u(b.changeCorrelator) && (a = b.changeCorrelator), Sm(_.Dm(), "count_of_refreshes_called"), this.j.refresh(c, {
                changeCorrelator: a
            })) : this.o ? (this.log.info(xk(), this), c ? vb(this.D, new Vs(c, b)) : vb(this.D, new Vs(this.getSlots(), b))) : this.log.G(uk(), this)
        }
    };
    _.h.refresh = _.O(11, Y.prototype.refresh);
    _.h.enableVideoAds = function() {
        this.K = !0;
        Zs(this)
    };
    _.h.enableVideoAds = _.O(12, Y.prototype.enableVideoAds);
    _.h.setVideoContent = function(a, b) {
        this.K = !0;
        this.pa = a;
        this.oa = b;
        Zs(this)
    };
    _.h.setVideoContent = _.O(13, Y.prototype.setVideoContent);
    _.h.getVideoContent = function() {
        return this.j ? this.j.getVideoContentInformation() : null
    };
    _.h.getVideoContent = _.O(30, Y.prototype.getVideoContent);
    _.h.setImaContent = function(a, b) {
        _.w(a) && (this.X = a);
        _.w(b) && (this.W = b)
    };
    _.h.setImaContent = _.O(328, Y.prototype.setImaContent);
    _.h.getImaContent = function() {
        return this.X || this.W ? {
            vid: this.X,
            cmsid: this.W
        } : null
    };
    _.h.getImaContent = _.O(329, Y.prototype.getImaContent);
    var Zs = function(a) {
            a.K && a.j && a.j.setVideoContentInformation(a.pa, a.oa)
        },
        $s = function(a) {
            a.j && a.j.setCorrelator(-1 == a.H ? void 0 : a.H)
        };
    _.h = Y.prototype;
    _.h.getCorrelator = function() {
        return 0 == this.getSlots().length ? "not_available" : this.j ? this.j.getCorrelator() : "not_loaded"
    };
    _.h.getCorrelator = _.O(27, Y.prototype.getCorrelator);
    _.h.setCorrelator = function(a) {
        if (ke(window)) return this;
        if (!(_.m(a) && (0, window.isFinite)(a) && 0 == a % 1 && 0 < a)) return this.log.G(Qk(String(a)), this), this;
        this.H = a;
        $s(this);
        return this
    };
    _.h.setCorrelator = _.O(28, Y.prototype.setCorrelator);
    _.h.updateCorrelator = function() {
        this.H = -1;
        $s(this);
        return this
    };
    _.h.updateCorrelator = _.O(25, Y.prototype.updateCorrelator);
    _.h.isAdRequestFinished = function() {
        return this.j ? this.j.isAdRequestFinished() : !1
    };
    _.h.isAdRequestFinished = _.O(29, Y.prototype.isAdRequestFinished);
    _.h.collapseEmptyDivs = function(a) {
        this.F ? this.log.G(Fk(), this) : this.l ? this.log.G(ok("collapseEmptyDivs"), this) : (this.I = !!a, this.log.info(Ek(String(this.I)), this), this.F = !0);
        return this.F
    };
    _.h.collapseEmptyDivs = _.O(14, Y.prototype.collapseEmptyDivs);
    _.h.clear = function(a) {
        if (!this.j) return this.log.G(wk(), this), !1;
        var b = null;
        if (a && (b = bt(this, a), 0 == b.length)) return this.log.G(K("PubAdsService.clear", _.ha([a], _.u)), this), !1;
        this.log.info(zk(), this);
        return this.j.clearSlotContents(b)
    };
    _.h.clear = _.O(15, Y.prototype.clear);
    _.h.setLocation = function(a, b, c) {
        var d = "role:1 producer:12";
        if (_.u(b)) {
            if (!_.m(a)) return this.log.G(Ck("Latitude")), this;
            if (!_.m(b)) return this.log.G(Ck("Longitude")), this;
            d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
            if (_.u(c)) {
                if ((0, window.isNaN)(c)) return this.log.G(Ck("Radius")), this;
                d += " radius:" + Math.round(c)
            }
        } else 50 < a.length && (b = a.substring(0, 50), this.log.G(Dk(String(a), "50", b)), a = b), d += ' loc:"' + a + '"';
        if (Ac) d = _.t.btoa(d);
        else {
            a = [];
            for (c = b = 0; c < d.length; c++) {
                var e = d.charCodeAt(c);
                255 < e && (a[b++] = e & 255, e >>= 8);
                a[b++] = e
            }
            d = Bc(a, void 0)
        }
        this.R = "a " + d;
        return this
    };
    _.h.setLocation = _.O(16, Y.prototype.setLocation);
    _.h.getVersion = function() {
        if (this.j) return this.j.getVersion()
    };
    _.h.forceExperiment = function(a) {
        this.l ? this.log.G(qk("forceExperiment", a), this) : this.A.push(a)
    };
    var ct = function() {
        var a = Zm(),
            b = Ym(a, "publisher_ads");
        if (!b) {
            var c = b = new Y;
            a.j[c.getName()] = c
        }
        return b
    };
    ct = _.O(26, ct);
    var bt = function(a, b) {
            for (var c = [], d = 0; d < b.length; ++d) {
                var e = b[d];
                e instanceof P ? e.ba || c.push(e) : a.log.G(Gk(String(d)), a)
            }
            return c
        },
        Ws = function(a) {
            var b = _.F.u().get(53);
            b && a.forceExperiment(b);
            b = fd(["108809055", "108809056", "108809057"], 3 * _.F.u().get(47));
            Wa(jb(b)) || a.forceExperiment(b);
            (b = _.F.u().get(75)) && a.forceExperiment(b);
            (b = _.F.u().get(131)) && _.H(Qi, b);
            (b = _.F.u().get(152)) && b.length && _.B(b, function(b) {
                return a.forceExperiment(b)
            })
        };
    _.h = Y.prototype;
    _.h.markAsAmp = function() {
        this.ca = !0;
        this.j && (W(X()).C = !0)
    };
    _.h.setSafeFrameConfig = function(a) {
        if (a && _.z(a)) {
            if (a = cl(a)) this.ga = a
        } else this.log.error(K("PubAdsService.setSafeFrameConfig", [a]), this);
        return this
    };
    _.h.setSafeFrameConfig = _.O(37, Y.prototype.setSafeFrameConfig);
    _.h.destroySlots = function(a) {
        a = um.prototype.destroySlots.call(this, a);
        if (0 == a.length) return a;
        this.j && this.j.destroySlots(a);
        return a
    };
    _.h.isSRA = function() {
        return this.o
    };
    _.h.setForceSafeFrame = function(a) {
        if (!_.Da(a)) return this.log.G(Bk(String(a)), this), this;
        this.P = a;
        this.j && Hs(this.P);
        return this
    };
    _.h.setForceSafeFrame = _.O(36, Y.prototype.setForceSafeFrame);
    _.h.enableChromeInterventionSignals = function() {
        _.F.u().set(73, 1)
    };
    _.h.markAsGladeControl = function() {
        this.forceExperiment("108809101")
    };
    _.h.markAsGladeOptOut = function() {
        this.forceExperiment("108809110")
    };
    _.h.setFetchAdsSerially = function(a) {
        if (!_.Da(a)) return this.log.G(Bk(String(a)), this), this;
        this.O = a;
        this.j && Js(this.O);
        return this
    };
    _.h.setFetchAdsSerially = _.O(275, Y.prototype.setFetchAdsSerially);
    Df("pubads", ct);
    var dt = function() {
        um.call(this);
        this.N = !0;
        this.m = this.H = !1;
        this.L = 0;
        this.K = this.I = void 0;
        this.O = this.A = !1;
        this.v = {};
        this.j = {};
        this.o = !1;
        this.F = {}
    };
    ua(dt, um);
    _.h = dt.prototype;
    _.h.set = function(a, b) {
        _.w(a) && 0 < a.length ? (this.F[a] = b, this.log.info(Wj(a, String(b), this.getName()), this, null)) : this.log.G(Xj(String(a), String(b), this.getName()), this, null);
        return this
    };
    _.h.get = function(a) {
        return this.F[a]
    };
    _.h.kd = function() {
        return id(this.F)
    };
    _.h.display = function(a, b, c, d) {
        this.enable();
        a = c ? In(a, b, c) : In(a, b);
        a.addService(this);
        d && a.setClickUrl(d);
        Ln(a.getSlotId().getDomId())
    };
    _.h.ib = function() {
        this.N ? this.D() : this.A || (_.t.document.write('<script type="text/javascript" src="' + il() + '">\x3c/script>'), this.A = !0)
    };
    _.h.enableSyncLoading = function() {
        this.N = !1
    };
    _.h.setRefreshUnfilledSlots = function(a) {
        _.Da(a) && (this.H = a)
    };
    _.h.wd = function(a) {
        _.Da(a) && (this.m = a)
    };
    _.h.md = function(a) {
        if (this.H) et(this, ft(this, a));
        else if (this.m) {
            a = ft(this, a);
            var b = ct();
            if (b.l) {
                b.clear(a);
                for (var c = 0; c < a.length; ++c) {
                    var d = new qm(a[c], !0, b.getName());
                    vm(b, "slotRenderEnded", d)
                }
            } else this.log.error(ck("PubAds", "clear"))
        }
    };
    _.h.Ib = function() {
        var a = ct();
        if (!a.l) return !1;
        a = a.getSlots();
        var b = this.getSlots();
        if (a.length != b.length) return !1;
        for (var c = 0; c < b.length; ++c) {
            for (var d = !1, e = 0; e < a.length; ++e)
                if (b[c] === a[e]) {
                    d = !0;
                    break
                }
            if (!d) return !1
        }
        return !0
    };
    _.h.qd = function() {
        this.H && et(this, null)
    };
    _.h.xd = function(a, b, c, d) {
        this.L = a;
        this.I = b;
        this.K = c;
        this.o = d
    };
    _.h.Yc = function() {
        return ct().getCorrelator()
    };
    _.h.ld = function() {
        var a = ct();
        a.j ? (a = a.j.getVideoStreamCorrelator(), a = (0, window.isNaN)(a) ? 0 : a) : a = 0;
        return a
    };
    var et = function(a, b) {
        var c = ct();
        if (c.l) {
            if (a.o) {
                if (!a.Ib()) {
                    a.log.G(bk());
                    return
                }
                c.j ? (c.log.info(Ak(), c), c.j.clearNoRefreshState()) : c.log.G(vk(), c);
                c.clear()
            }
            var d = {
                isVideoRefresh: !0
            };
            _.u(a.L) && (d.videoStreamCorrelator = a.L);
            a.I && (d.videoPodNumber = a.I);
            a.K && (d.videoPodPosition = a.K);
            a.o && (d.persistentRoadblocksOnly = a.o);
            a.m && (d.clearUnfilledSlots = a.m);
            a: if (b && !_.y(b) || d.videoStreamCorrelator && !_.m(d.videoStreamCorrelator) || d.videoPodNumber && !_.m(d.videoPodNumber) || d.videoPodPosition && !_.m(d.videoPodPosition) || d.persistentRoadblocksOnly && !_.Da(d.persistentRoadblocksOnly) || d.clearUnfilledSlots && !_.Da(d.clearUnfilledSlots)) c.log.G(K("PubAdsService.internalVideoRefresh", _.ha([b, d], _.u)), c);
                else
            if (c.j) {
                a = null;
                if (b && (a = bt(c, b), !a.length)) {
                    c.log.error(tk("internalVideoRefresh"), c);
                    break a
                }
                c.log.info(yk(), c);
                c.j.refresh(a, d)
            } else c.log.G(uk(), c)
        } else a.log.error(ck("PubAds", "refresh"))
    };
    dt.prototype.P = function(a) {
        var b = ct();
        if (b.l && Gn(_.Hn(), a)) return b.j ? b.j.isSlotAPersistentRoadblock(a) : !1;
        this.log.error(dk());
        return !1
    };
    var ft = function(a, b) {
        for (var c = a.getSlotIdMap(), d = [], e = 0; e < b.length; ++e) {
            var f = b[e];
            Mb(c, f) ? d.push(c[f]) : a.log.G(ek(), a)
        }
        return d
    };
    dt.prototype.getName = function() {
        return "companion_ads"
    };
    var hl = function() {
        return _.Dl() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    };
    dt.prototype.D = function() {
        if (!this.O) {
            var a = window.document,
                b = hl();
            this.log.info(fk("GPT CompanionAds"), this);
            _.ed(a, b);
            this.O = !0
        }
    };
    dt.prototype.R = function(a, b) {
        Xl(a, b);
        this.log.error(gk("GPT CompanionAds"), this)
    };
    var gt = function(a, b) {
        var c = b && b.getSlotId().getId();
        if (c && c in a.v && b.hasWrapperDiv() && a.l && !a.P(b)) {
            b.W = a.v[c];
            var d = new qm(b, !1, a.getName());
            if (a.j.hasOwnProperty(c)) {
                var e = a.j[c];
                delete a.j[c];
                d.size = e
            }
            return pn(b, d)
        }
        return !1
    };
    dt.prototype.fb = function(a) {
        gt(this, a)
    };
    dt.prototype.V = function(a, b, c, d) {
        return Gn(_.Hn(), a) && _.w(b) && 0 < b.length ? (this.v[a.getSlotId().getId()] = b, null != c && null != d && (this.j[a.getSlotId().getId()] = [c, d]), gt(this, a)) : !1
    };
    dt.prototype.X = function(a, b, c) {
        a = new qm(a, !1, this.getName());
        null != b && null != c && (a.size = [b, c]);
        vm(this, "slotRenderEnded", a)
    };
    dt.prototype.W = function() {
        this.log.info(hk("GPT CompanionAds"), this);
        this.A = !0
    };
    var Z = dt.prototype;
    Z.D = _.O(70, Z.D, Z.R);
    Z.enableSyncLoading = _.O(58, Z.enableSyncLoading);
    Z.setRefreshUnfilledSlots = _.O(59, Z.setRefreshUnfilledSlots);
    Z.setClearUnfilledSlots = _.O(68, Z.wd);
    Z.notifyUnfilledSlots = _.O(69, Z.md);
    Z.isRoadblockingSupported = _.O(111, Z.Ib);
    Z.refreshAllSlots = _.O(60, Z.qd);
    Z.setVideoSession = _.O(61, Z.xd);
    Z.getDisplayAdsCorrelator = _.O(62, Z.Yc);
    Z.getVideoStreamCorrelator = _.O(63, Z.ld);
    Z.isSlotAPersistentRoadblock = _.O(64, Z.P);
    Z.onImplementationLoaded = _.O(65, Z.W);
    Z.fillSlot = _.O(66, Z.V);
    Z.slotRenderEnded = _.O(67, Z.X);
    Z.set = Z.set;
    Z.get = Z.get;
    Z.getAttributeKeys = Z.kd;
    Z.display = Z.display;
    Df("companionAds", _.O(57, function() {
        var a = Zm(),
            b = Ym(a, "companion_ads");
        if (!b) {
            var c = b = new dt;
            a.j[c.getName()] = c
        }
        return b
    }));
    var ht = function() {
        um.call(this);
        this.j = {};
        this.m = {}
    };
    _.Qa(ht, um);
    _.h = ht.prototype;
    _.h.getName = function() {
        return "content"
    };
    _.h.set = function(a, b) {
        _.w(a) && 0 < a.length ? (this.j[a] = b, this.log.info(Wj(a, String(b), this.getName()), this, null)) : this.log.G(Xj(String(a), String(b), this.getName()), this, null);
        return this
    };
    _.h.get = function(a) {
        return this.j[a]
    };
    _.h.getAttributeKeys = function() {
        var a = [];
        _.D(this.j, function(b, c) {
            a.push(c)
        });
        return a
    };
    _.h.display = function(a, b, c, d) {
        this.enable();
        a = c ? In(a, b, c) : In(a, b);
        a.addService(this);
        d && a.setClickUrl(d);
        Ln(a.getSlotId().getDomId())
    };
    var it = function(a, b) {
        var c = b && b.getSlotId().getId();
        c in a.m && a.l && b.hasWrapperDiv() && !b.D && (b.W = a.m[c], a = new qm(b, !1, a.getName()), pn(b, a))
    };
    ht.prototype.ib = function() {
        for (var a = this.getSlots(), b = 0; b < a.length; ++b) it(this, a[b])
    };
    ht.prototype.fb = function(a) {
        it(this, a)
    };
    ht.prototype.setContent = function(a, b) {
        Gn(_.Hn(), a) && _.w(b) && 0 < b.length && (this.m[a.getSlotId().getId()] = b, it(this, a))
    };
    ht.prototype.setContent = _.O(72, ht.prototype.setContent);
    var jt = function() {
        var a = Zm(),
            b = Ym(a, "content");
        if (!b) {
            var c = b = new ht;
            a.j[c.getName()] = c
        }
        return b
    };
    jt = _.O(71, jt);
    Df("content", jt);
    var kt = null,
        lt = !1,
        mt = !1,
        nt = function() {
            if (!mt) {
                var a = new _.M("pubconsole_loaded");
                _.q(a);
                _.N(a);
                a = _.Dl() + "//publisherconsole.appspot.com/js/loader.js";
                _.ed(window.document, a);
                mt = !0
            }
        },
        ot = function() {
            var a = window,
                b = window.document;
            if (_.Cf()._pubconsole_disable_) return !1;
            var c = window.document.cookie.split("google_pubconsole=");
            if (c = 2 == c.length ? c[1].split(";")[0] : "")
                if (c = c.split("|"), 0 < c.length && ("1" == c[0] || "0" == c[0])) return !0;
            Zm();
            c = !1;
            try {
                c = a.top.document.URL === b.URL
            } catch (d) {}
            a = c ? b.URL : b.referrer;
            return null !== te(a, "google_debug") || null !== te(a, "dfpdeb") || null !== te(a, "google_console") || null !== te(a, "google_force_console") || null !== te(a, "googfc")
        },
        qt = function() {
            ot() && nt();
            pt()
        };
    qt = _.O(94, qt);
    var rt = function() {
        _.Cf()._pubconsole_disable_ = !0
    };
    rt = _.O(93, rt);
    var pt = function() {
            _.E(window, "message", function(a) {
                a.source == window && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && st(a)
            })
        },
        st = function(a) {
            window.googletag && window.googletag.console ? window.googletag.console.openConsole(a) : (a && (kt = a), lt = !0, nt())
        };
    "complete" === window.document.readyState ? qt() : Ef(window, qt);
    Df("disablePublisherConsole", rt);
    Df("onPubConsoleJsLoad", function() {
        lt && (window.googletag.console.openConsole(kt), kt = null, lt = !1)
    });
    Df("openConsole", st);
    var tt = function() {
        this.j = [];
        this.l = !1;
        this.J = If()
    };
    tt.prototype.addSize = function(a, b) {
        var c;
        (c = !cn(a) || "fluid" == a) || ((c = cn(b)) || (c = _.y(b) && qb(b, cn)), c = !c);
        if (c) return this.l = !0, this.J.G(K("SizeMappingBuilder.addSize", [a, b])), this;
        this.j.push([a, b]);
        return this
    };
    tt.prototype.addSize = _.O(88, tt.prototype.addSize);
    tt.prototype.build = function() {
        if (this.l) return this.J.G(Uj()), null;
        _.Cb(this.j, ut);
        return this.j
    };
    tt.prototype.build = _.O(89, tt.prototype.build);
    var ut = function(a, b) {
            a: {
                b = b[0];a = a[0];
                for (var c = Bb, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                    var f = c(b[e], a[e]);
                    if (0 != f) {
                        b = f;
                        break a
                    }
                }
                b = Bb(b.length, a.length)
            }
            return b
        },
        vt = function() {
            return new tt
        };
    vt = _.O(90, vt);
    Df("sizeMapping", vt);
    var wt = function() {
            _.B(window.document.getElementsByTagName("script"), function(a) {
                var b = a.src;
                !b || -1 == b.indexOf("/tag/js/gpt.js") && -1 == b.indexOf("/tag/js/gpt_mobile.js") || !a.innerHTML || a.googletag_executed || (a.googletag_executed = !0, eval(a.innerHTML))
            })
        },
        xt = function() {
            try {
                zl() && (Pf = !0);
                var a = _.F.u().get(138);
                a && _.Jh(a);
                var b = _.Dm();
                Df("apiReady", !0);
                !Th.is(ig.w) || Gl(window.document) ? hm() : Ef(window, function() {
                    window.setTimeout(function() {
                        hm()
                    }, 0)
                });
                _.O(297, function() {
                    return wt()
                }, Zl).call();
                Oq(_.Lq.u(), lg.wc);
                Pq();
                b.m("loader_loaded_instant");
                b.F ? b.m("loader_loaded_instant_nw") : b.ca = (new Date).getTime();
                var c = _.Dl() + "//www.googletagservices.com";
                _.Wm(b, c + "/tag/js/gpt.js", "gpt");
                _.Wm(b, c + "/tag/js/gpt_mobile.js", "gpt");
                Bl() && bm();
                _.Qp(window.document, "https://securepubads.g.doubleclick.net/static/3p_cookie.html", "prefetch", "html")
            } catch (d) {
                Yl(106, d)
            }
        };
    if (window.googletag.evalScripts) window.googletag.evalScripts();
    else {
        var yt = window,
            zt = yt.performance;
        if (zt && zt.now) {
            var At = zt.now();
            (yt.google_js_reporting_queue = yt.google_js_reporting_queue || []).push({
                label: "2",
                type: 9,
                value: At,
                uniqueId: "rt." + Math.random()
            })
        }
        Df("evalScripts", function() {
            wt()
        });
        xt()
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, {})
