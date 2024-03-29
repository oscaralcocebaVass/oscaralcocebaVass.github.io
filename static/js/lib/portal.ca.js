/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */ ;
! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) {
                for (b in a) {
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d))
                }
            }
        }
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            } else {
                for (d in a) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d]
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a)) {
                for (d = a.length; d > g; g++) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            } else {
                for (g in a) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            }
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    if (a[c] === b) {
                        return c
                    }
                }
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) {
                return d
            }
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) {
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) {
                                return d
                            }
                            if (j.id === f) {
                                return d.push(j), d
                            }
                        } else {
                            if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
                                return d.push(j), d
                            }
                        }
                    } else {
                        if (o[2]) {
                            return H.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return H.apply(d, b.getElementsByClassName(f)), d
                        }
                    }
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) {
                        w = b, s = a
                    } else {
                        if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) {
                                r[h] = l + " " + qa(r[h])
                            }
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                    }
                    if (s) {
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) {
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                }
                if (e === f) {
                    return ka(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    g.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                while (g[d] === h[d]) {
                    d++
                }
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                                }
                            } else {
                                if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) {
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            d.pseudos[b] = la(b)
        }
        for (b in {
                submit: !0,
                reset: !0
            }) {
            d.pseudos[b] = ma(b)
        }

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return k[2] = h[2]
                            }
                            if (i[d] = k, k[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fa(a, b[d], c)
            }
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                }
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [ra(sa(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || 0.1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++]) {
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) {
                            q(t, u, g, h)
                        }
                        if (f) {
                            if (r > 0) {
                                while (s--) {
                                    t[s] || u[s] || (u[s] = F.call(i))
                                }
                            }
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = wa(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) {
                            return H.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) {
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) {
                        break
                    }
                    d.push(a)
                }
            }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return n.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (y.test(b)) {
                return n.filter(b, a, c)
            }
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) {
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++) {
                        if (n.contains(e[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; c > b; b++) {
                n.find(a, e[b], d)
            }
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) {
                return this
            }
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) {
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) {
                        for (e in b) {
                            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e])
                        }
                    }
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) {
                    if (n.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) {
                        f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) {
                            f.splice(c, 1), h >= c && h--
                        }
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1) {
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) {
                    K(a, b, h, c[h], !0, f, g)
                }
            } else {
                if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b)) {
                    for (; i > h; h++) {
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                    }
                }
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) {
                return {}
            }
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) {
                e[b] = c
            } else {
                for (d in b) {
                    e[d] = b[d]
                }
            }
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) {
                    this.register(a)
                } else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) {
                        delete f[d[c]]
                    }
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) {
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                O.set(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])))
                    }
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) {
                        return c
                    }
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) {
                        return c
                    }
                    if (c = R(f, d, void 0), void 0 !== c) {
                        return c
                    }
                } else {
                    d = n.camelCase(a), this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
                }
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
        }
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
            if (f = a[o], f || 0 === f) {
                if ("object" === n.type(f)) {
                    n.merge(m, f.nodeType ? [f] : f)
                } else {
                    if (ba.test(f)) {
                        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
                        while (k--) {
                            g = g.lastChild
                        }
                        n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
                    } else {
                        m.push(b.createTextNode(f))
                    }
                }
            }
        }
        l.textContent = "", o = 0;
        while (f = m[o++]) {
            if (d && n.inArray(f, d) > -1) {
                e && e.push(f)
            } else {
                if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
                    k = 0;
                    while (f = g[k++]) {
                        Z.test(f.type || "") && c.push(f)
                    }
                }
            }
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) {
                ja(a, h, c, d, b[h], f)
            }
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) {
            e = ha
        } else {
            if (!e) {
                return this
            }
        }
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) {
                    h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
                }
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--) {
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) {
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k))
                        }
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else {
                        for (o in i) {
                            n.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                        (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) {
                for (; i !== this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) {
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f)
                        }
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) {
                return a
            }
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) {
                c = e[b], a[c] = g[c]
            }
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        n.event.add(b, e, j[e][c])
                    }
                }
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) {
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
            })
        }
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
                j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m)
            }
            if (i) {
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
                    j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
                }
            }
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d))
        }
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
                    ta(f[d], g[d])
                }
            }
            if (b) {
                if (c) {
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
                        sa(f[d], g[d])
                    }
                } else {
                    sa(a, h)
                }
            }
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events) {
                            for (d in b.events) {
                                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle)
                            }
                        }
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
            }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "")
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) {
                    return b.innerHTML
                }
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
                c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get())
            }
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) {
                g[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.apply(a, d || []);
            for (f in b) {
                a.style[f] = g[f]
            }
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) {
            return a
        }
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--) {
            if (a = Ka[c] + b, a in La) {
                return a
            }
        }
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)))
        }
        return g
    }

    function Pa(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) {
                return g
            }
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) {
                        f[b[g]] = n.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = U[d], e["margin" + c] = e["padding" + c] = a
        }
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) {
                        continue
                    }
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else {
                j = void 0
            }
        }
        if (n.isEmptyObject(m)) {
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j)
        } else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) {
                    n.style(a, b, m[b])
                }
            });
            for (d in m) {
                g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++) {
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) {
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d
            }
        }
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) {
                    c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
                }
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) {
                        g[e] && g[e].stop && d(g[e])
                    } else {
                        for (e in g) {
                            g[e] && g[e].stop && Va.test(e) && d(g[e])
                        }
                    }
                    for (e = f.length; e--;) {
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                    }(b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                    }
                    for (b = 0; g > b; b++) {
                        d[b] && d[b].finish && d[b].finish.call(this)
                    }
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) {
                a = c[b], a() || c[b] !== a || c.splice(b--, 1)
            }
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
                }
            }
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                })
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ")
                        }
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ")
                            }
                        }
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
                }
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) {
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        }
    });
    var gb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    return n.trim(a.value)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) {
                        d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0)
                    }
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var hb = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
                        p.push(h), i = h
                    }
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault())
                }
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var ib = a.location,
        jb = n.now(),
        kb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = {},
        sb = {},
        tb = "*/".concat("*"),
        ub = d.createElement("a");
    ub.href = ib.href;

    function vb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function wb(a, b, c, d) {
        var e = {},
            f = a === sb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function xb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c])
        }
        return d && n.extend(!0, a, d), a
    }

    function yb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (d) {
            for (e in h) {
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function zb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a.throws) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ib.href,
            type: "GET",
            isLocal: ob.test(ib.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a)
        },
        ajaxPrefilter: vb(rb),
        ajaxTransport: vb(sb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = nb.exec(g)) {
                                    h[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > v) {
                                for (b in a) {
                                    s[b] = [s[b], a[b]]
                                }
                            } else {
                                x.always(a[x.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) {
                return x
            }
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) {
                x.setRequestHeader(l, m.headers[l])
            }
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) {
                return x.abort()
            }
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                x[l](m[l])
            }
            if (e = wb(sb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) {
                    return x
                }
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) {
                        throw y
                    }
                    z(-1, y)
                }
            } else {
                z(-1, "No Transport")
            }

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) {
                    a = a.firstElementChild
                }
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Ab = /%20/g,
        Bb = /\[\]$/,
        Cb = /\r?\n/g,
        Db = /^(?:submit|button|image|reset|file)$/i,
        Eb = /^(?:input|select|textarea|keygen)/i;

    function Fb(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function(b, e) {
                c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== n.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Fb(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Fb(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Ab, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Cb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Cb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Gb = {
            0: 200,
            1223: 204
        },
        Hb = n.ajaxSettings.xhr();
    l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Hb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) {
                    for (g in b.xhrFields) {
                        h[g] = b.xhrFields[g]
                    }
                }
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) {
                    h.setRequestHeader(g, e[g])
                }
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) {
                        throw i
                    }
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Ib = [],
        Jb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ib.pop() || n.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), l.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Kb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Kb) {
            return Kb.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Lb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) {
                return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Lb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Mb = a.jQuery,
        Nb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n
    }, b || (a.jQuery = a.$ = n), n
});
this.Element && function(a) {
    a.matches = a.matches || a.matchesSelector || a.webkitMatchesSelector || a.msMatchesSelector || function(b) {
        var e = this,
            c = (e.parentNode || e.document).querySelectorAll(b),
            d = -1;
        while (c[++d] && c[d] != e) {}
        return !!c[d]
    }
}(Element.prototype);
this.Element && function(a) {
    a.closest = a.closest || function(b) {
        var c = this;
        while (c.matches && !c.matches(b)) {
            c = c.parentNode
        }
        return c.matches ? c : null
    }
}(Element.prototype);
(function(e, d) {
    if (e.addEventListener) {
        return
    }

    function a(g) {
        var f = d[g];
        d[g] = function(h) {
            return b(f(h))
        }
    }

    function c(f, h, g) {
        return (g = this).attachEvent("on" + f, function(j) {
            var j = j || e.event;
            j.preventDefault = j.preventDefault || function() {
                j.returnValue = false
            };
            j.stopPropagation = j.stopPropagation || function() {
                j.cancelBubble = true
            };
            h.call(g, j)
        })
    }

    function b(g, f) {
        if (f = g.length) {
            while (f--) {
                g[f].addEventListener = c
            }
        } else {
            g.addEventListener = c
        }
        return g
    }
    b([d, e]);
    if ("Element" in e) {
        e.Element.prototype.addEventListener = c
    } else {
        d.attachEvent("onreadystatechange", function() {
            b(d.all)
        });
        a("getElementsByTagName");
        a("getElementById");
        a("createElement");
        b(d.all)
    }
})(window, document);
Element.prototype.addDelegateListener = function(c, a, b) {
    this.addEventListener(c, function(f) {
        var d = f.target;
        while (d && d !== this && !d.matches(a)) {
            d = d.parentNode
        }
        if (d && d !== this) {
            return b.call(d, f)
        }
    }, false)
};
(function(b) {
    if (document.createEvent) {
        function a(c, e) {
            e = e || {
                bubbles: false,
                cancelable: false
            };
            var d = document.createEvent("MouseEvent");
            d.initMouseEvent(c, e.bubbles, e.cancelable, b, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            return d
        }
        a.prototype = Event.prototype;
        b.MouseEvent = a
    }
})(window);
!window.addEventListener && (function(b, c, d, e, a) {
    b[e] = c[e] = d[e] = function(f) {
        return this.fireEvent("on" + f.type, f)
    }
})(Window.prototype, HTMLDocument.prototype, Element.prototype, "dispatchEvent", []);
(function() {
    var a = function(d) {
        return new RegExp("(^| )" + d + "( |$)")
    };
    var c = function(g, f, e) {
        for (var d = 0; d < g.length; d++) {
            f.call(e, g[d])
        }
    };

    function b(d) {
        this.element = d
    }
    b.prototype = {
        add: function() {
            c(arguments, function(d) {
                if (!this.contains(d)) {
                    this.element.className += this.element.className.length > 0 ? " " + d : d
                }
            }, this)
        },
        remove: function() {
            c(arguments, function(d) {
                this.element.className = this.element.className.replace(a(d), "")
            }, this)
        },
        toggle: function(d) {
            return this.contains(d) ? (this.remove(d), false) : (this.add(d), true)
        },
        contains: function(d) {
            return a(d).test(this.element.className)
        },
        replace: function(e, d) {
            this.remove(e), this.add(d)
        }
    };
    if (!("classList" in Element.prototype)) {
        Object.defineProperty(Element.prototype, "classList", {
            get: function() {
                return new b(this)
            }
        })
    }
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = b.prototype.replace
    }
})();
var fw_BrowserDetect = {};
fw_BrowserDetect = {
    EXPLORER: "Explorer",
    MS_EDGE: "MS Edge",
    FIREFOX: "Firefox",
    OPERA: "Opera",
    CHROME: "Chrome",
    SAFARI: "Safari",
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
    },
    searchString: function(c) {
        for (var a = 0; a < c.length; a++) {
            var b = c[a].string;
            this.versionSearchString = c[a].subString;
            if (b.indexOf(c[a].subString) !== -1) {
                return c[a].identity
            }
        }
    },
    searchVersion: function(b) {
        var a = b.indexOf(this.versionSearchString);
        if (a === -1) {
            return
        }
        var c = b.indexOf("rv:");
        if (this.versionSearchString === "Trident" && c !== -1) {
            return parseFloat(b.substring(c + 3))
        } else {
            return parseFloat(b.substring(a + this.versionSearchString.length + 1))
        }
    },
    checkBrowsers: function(a) {
        for (var b = a.length; b--;) {
            if (a[b] === fw_BrowserDetect.browser) {
                return true
            }
        }
        return false
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Edge",
        identity: "MS Edge"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer"
    }, {
        string: navigator.userAgent,
        subString: "Trident",
        identity: "Explorer"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.userAgent,
        subString: "Opera",
        identity: "Opera"
    }, {
        string: navigator.userAgent,
        subString: "OPR",
        identity: "Opera"
    }, {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "Safari",
        identity: "Safari"
    }]
};

function fw_accesibilityInit() {
    var a = "role",
        f = "aria-hidden",
        g = "aria-controls",
        h = "aria-required",
        j = "aria-invalid",
        c = "aria-selected",
        b = "aria-labelledby";
    var d = "data-switcher";

    function e(l) {
        return "[" + l + "]"
    }
    document.querySelector("body").addDelegateListener("mouseover", ".form-tip " + e(g), function(m) {
        var l = document.getElementById(m.target.getAttribute(g));
        if (l != null) {
            l.setAttribute(f, "false")
        }
    });
    document.querySelector("body").addDelegateListener("mouseout", ".form-tip " + e(g), function(m) {
        var l = document.getElementById(m.target.getAttribute(g));
        if (l != null) {
            l.setAttribute(f, "true")
        }
    });
    document.querySelector("body").addDelegateListener("focusout", e(h), function(l) {
        if (l.target.value == "") {
            l.target.setAttribute(j, "true")
        } else {
            l.target.setAttribute(j, "false")
        }
    });
    document.querySelector("body").addDelegateListener("click", e(c), function(q) {
        var m = null,
            p = null;
        if (this.getAttribute(a) == "tab") {
            m = this.parentNode;
            while (m != null && m.getAttribute(a) != "tablist") {
                m = m.parentNode
            }
        } else {
            m = this.parentNode.parentNode
        }
        if (m) {
            var o = m.querySelectorAll(e(c));
            if (o.length > 0) {
                for (var l = 0; l < o.length; l++) {
                    o[l].setAttribute(c, "false");
                    p = document.getElementById(o[l].getAttribute(g));
                    if (p != null) {
                        p.setAttribute(f, "true")
                    }
                }
            }
        }
        this.setAttribute(c, "true");
        p = document.getElementById(this.getAttribute(g));
        if (p != null) {
            p.setAttribute(f, "false")
        }
    });
    document.querySelector("body").addDelegateListener("click", e(d), function(m) {
        var o = this.getAttribute(b),
            l = document.getElementById(o);
        if (l) {
            if (l.previousElementSibling) {
                this.setAttribute(b, l.previousElementSibling.getAttribute("id"))
            } else {
                this.setAttribute(b, l.nextElementSibling.getAttribute("id"))
            }
        }
    })
}(function(a, b) {
    if (typeof define === "function" && define.amd) {
        define([], b)
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = b()
        } else {
            a.appendAround = b()
        }
    }
})(this, function() {
    var d = {};

    function a(g, j, f) {
        var h;
        return function() {
            var p = this;
            var o = arguments;
            var m = function() {
                h = null;
                if (!f) {
                    g.apply(p, o)
                }
            };
            var l = f && !h;
            clearTimeout(h);
            h = setTimeout(m, j);
            if (l) {
                g.apply(p, o)
            }
        }
    }

    function b(f) {
        return window.getComputedStyle(f, null).getPropertyValue("display") === "none"
    }

    function c(j) {
        var h = j.parentNode;
        var g = h.getAttribute(d.attribute);
        var m = "[" + d.attribute + '="' + g + '"]';
        var f = document.querySelectorAll(m);
        if (b(h) && f.length) {
            var l = 0;
            [].forEach.call(f, function(o) {
                if (!b(o) && !l) {
                    o.appendChild(j);
                    l++;
                    h = j
                }
            })
        }
    }

    function e(f) {
        [].forEach.call(f, function(g) {
            c(g);
            window.addEventListener("resize", a(function() {
                c(g)
            }), d.debounceDuration)
        })
    }
    return function(h) {
        var g = ("querySelector" in document && "getComputedStyle" in window);
        if (!g) {
            return false
        }
        d = {
            selector: h && h.selector || ".js-append",
            attribute: h && h.attribute || "data-set",
            debounceDuration: h && h.debounceDuration || 66
        };
        var f = document.querySelectorAll(d.selector);
        if (f.length) {
            e(f)
        }
    }
});

function fw_appendAroundInit() {
    appendAround({
        selector: "[data-append]",
        attribute: "data-append-container",
        debounceDuration: 66
    })
}
var mobileBreakpoint = 544;
var tabletBreakpoint = 768;
var desktopBreakpoint1 = 992;
var desktopBreakpoint = 1200;
var CollapseManager = (function() {
    var D;

    function r() {
        D = new Object("Collapse Manager instance");
        D.fw_collapseInit = c;
        D.fw_collapseUpdateHeight = s;
        D.fw_clickCollapseTrigger = B;
        return D
    }
    var z = "[data-collapse-system]",
        G = "[data-collapse-system-mode]",
        b = "[data-collapse-system-excluded]",
        q = "[data-collapse-system-trigger]",
        x = "[data-collapse]",
        v = "[data-collapse-trigger]",
        A = "[data-collapse-content]",
        h = "[data-collapse-inner]",
        a = "is-trigger-active",
        o = "uncollapsed",
        H = "uncollapsed-sm",
        E = "uncollapsed-md",
        y = "uncollapsed-lg",
        p = "aria-expanded",
        F = "aria-hidden";
    var C = {
        NORMAL: "normal",
        CUSTOM: "custom"
    };
    var e = "[data-collapse-flipflap]",
        w = "[data-collapse-flipflap-trigger]",
        f = "is-flap-active";

    function u(af) {
        var M = af.target,
            ad, K, Q, ag, W, S, Z, V, P, T;
        af.preventDefault();
        while (!M.matches(v)) {
            M = M.parentNode
        }
        M.classList.toggle(a);
        M.setAttribute(p, !(M.getAttribute(p) === "true"));
        if (M.matches(q)) {
            K = M.parentNode;
            while (!K.matches(z) && (K.tagName !== "BODY")) {
                K = K.parentNode
            }
            if (K.tagName === "BODY") {
                K = false
            }
        }
        ad = M.parentNode;
        while (!ad.matches(x)) {
            ad = ad.parentNode
        }
        ad.classList.toggle(o);
        if (fw_BrowserDetect.checkBrowsers([fw_BrowserDetect.EXPLORER, fw_BrowserDetect.MS_EDGE])) {
            var J = ad.classList.contains(o);
            if (J) {
                setTimeout(function(ah) {
                    ad.querySelector(A).style.overflow = "visible"
                }, 200)
            } else {
                ad.querySelector(A).style.overflow = "hidden"
            }
        }
        if (K) {
            var I = K.getAttribute("data-collapse-system-mode");
            S = K.querySelectorAll(x);
            G = I !== null ? I : C.CUSTOM;
            var ac = ad.matches(b);
            for (Z = 0; Z < S.length && !ac; Z++) {
                var U = S[Z];
                var R = !U.matches(b);
                if (U !== ad && R) {
                    if (G === C.NORMAL) {
                        U.classList.remove(o)
                    }
                    if (G === C.CUSTOM) {
                        var ab = t(U, "data-collapse") !== null;
                        var X = U.querySelectorAll(x).length === 0;
                        if (ab || X) {
                            U.classList.remove(o)
                        }
                    }
                    U.querySelector(A).style.maxHeight = 0;
                    U.querySelector(v).classList.remove(a);
                    U.querySelector(v).setAttribute(p, "false");
                    U.querySelector(A).setAttribute(F, "true");
                    if (fw_BrowserDetect.checkBrowsers([fw_BrowserDetect.EXPLORER, fw_BrowserDetect.MS_EDGE])) {
                        U.querySelector(A).style.overflow = "hidden"
                    }
                }
            }
        }
        W = ad.querySelector(A);
        if (W.closest(x).classList.contains(o)) {
            var L = g(ad);
            var ae = g(ad.querySelector(h));
            W.style.maxHeight = (L + ae) + "px";
            W.setAttribute(F, "false");
            W.setAttribute("tabindex", -1);
            if (typeof af.data === "undefined" || !af.data.isFakeEvent) {
                W.focus()
            }
        } else {
            W.setAttribute(F, "true");
            W.removeAttribute("tabindex");
            W.style.maxHeight = 0
        }
        V = ad.parentNode;
        while (typeof V.matches !== "undefined" && !V.matches(x)) {
            V = V.parentNode
        }
        if (typeof V.matches === "undefined") {
            V = null
        }
        if (V) {
            P = V.querySelector(A);
            T = V.querySelector(h);
            if (P && T) {
                ag = 0;
                var O = m(T);
                var aa = null;
                var N = null;
                for (var Y = 0; Y < O.length; Y++) {
                    if ((aa = O[Y].querySelector(h)) === null) {
                        ag += g(O[Y])
                    } else {
                        ag += g(aa);
                        if ((N = O[Y].querySelector(v)) !== null) {
                            ag += g(N) + 21
                        }
                    }
                }
                if (P.getAttribute(z) !== "") {
                    P.style.maxHeight = ag + "px"
                }
            }
        }
    }

    function d(N) {
        var J = N.target,
            M, I, O, K, L;
        N.preventDefault();
        while (!J.matches(w)) {
            J = J.parentNode
        }
        J.classList.toggle(a);
        J.setAttribute(p, !(J.getAttribute(p) === "true"));
        if (J.children[0].getAttribute(F) === "true") {
            J.children[0].setAttribute(F, "false");
            J.children[1].setAttribute(F, "true")
        } else {
            J.children[1].setAttribute(F, "false");
            J.children[0].setAttribute(F, "true")
        }
        M = J.parentNode;
        while (!M.matches(e)) {
            M = M.parentNode
        }
        M.classList.toggle(f)
    }

    function c() {
        document.querySelector("body").addDelegateListener("click", v, function(I) {
            u(I)
        });
        document.querySelector("body").addDelegateListener("click", w, function(I) {
            d(I)
        });
        j();
        window.onresize = l
    }

    function t(J, I) {
        while ((J = J.parentElement) && J.getAttribute(I) == null) {}
        return J
    }

    function j() {
        var L = document.querySelectorAll(x + "." + o);
        var J = L.length;
        while (J--) {
            var M = L[J];
            var K = false;
            if (I(0, mobileBreakpoint) && M.classList.contains(H)) {
                K = true
            }
            if (I(mobileBreakpoint, tabletBreakpoint) && M.classList.contains(E)) {
                K = true
            }
            if (I(tabletBreakpoint, 99999) && M.classList.contains(y)) {
                K = true
            }
            if (!M.classList.contains(H) && !M.classList.contains(E) && !M.classList.contains(y)) {
                K = true
            }
            if (K) {
                B(M)
            }
        }

        function I(P, Q) {
            var O = window.innerWidth;
            var N = O > P && O <= Q;
            return N
        }
    }

    function B(J) {
        J.classList.toggle(o);
        var I = J.querySelector(v);
        var K = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true
        });
        K.data = {
            isFakeEvent: "true"
        };
        I.dispatchEvent(K)
    }

    function s(I) {
        var J = I.querySelector(A);
        if (I.classList.contains(o)) {
            setTimeout(function() {
                J.style.maxHeight = g(I.querySelector(h)) + "px"
            }, 200)
        }
    }

    function l() {
        var K = document.querySelectorAll(x);
        var J = K.length;
        for (var I = J; I--;) {
            s(K[I])
        }
    }

    function m(J) {
        var I = [];
        for (var K in J.childNodes) {
            if (J.childNodes[K].nodeType === 1) {
                I.push(J.childNodes[K])
            }
        }
        return I
    }

    function g(I) {
        return I.clientHeight
    }
    return {
        getInstance: function() {
            if (!D) {
                D = r()
            }
            return D
        }
    }
})();

function fw_dropDownInit() {
    var p = "[data-dropdown-trigger]",
        t = "[data-dropdown]",
        x = "is-open",
        b = "is-trigger-active",
        r = "[data-collapse-trigger]",
        f = "aria-expanded";

    function l(C) {
        C.preventDefault();
        var B = C.target.parentNode,
            A, D, z;
        while (!B.matches(t)) {
            B = B.parentNode
        }
        B.classList.toggle(b);
        D = B.querySelector(p);
        A = document.querySelectorAll(t);
        for (z = 0; z < A.length; z++) {
            if (A[z] !== B) {
                A[z].classList.remove(x);
                var E = A[z].querySelector(p);
                E.setAttribute(f, "false")
            }
        }
        B.classList.toggle(x);
        D.setAttribute(f, !(D.getAttribute(f) == "true"))
    }

    function a(C) {
        var B, z, D, A;
        if (!C.target.closest(t)) {
            B = document.querySelectorAll(t);
            for (A = 0; A < B.length; A++) {
                B[A].classList.remove(x);
                B[A].classList.remove(b);
                D = B[A].querySelector(p);
                D.setAttribute(f, "false")
            }
        }
    }
    document.querySelector("body").addDelegateListener("click", p, function(z) {
        l(z)
    });
    document.addEventListener("click", a);

    function s(E, B) {
        var C = [];
        var A = E.getElementsByTagName("*");
        for (var z = 0, D = A.length; z < D; z++) {
            if (A[z].getAttribute(B) !== null) {
                C.push(A[z])
            }
        }
        return C
    }

    function e(B) {
        var A = new Array();
        for (var z = 0; z < B.childNodes.length; z++) {
            if (B.childNodes[z].nodeType == 1) {
                A.push(B.childNodes[z])
            }
        }
        return A
    }

    function w(A, z) {
        while ((A = A.parentElement) && !A.classList.contains(z) && !A.classList.contains("location__sub-section")) {}
        return A
    }

    function o(A, z) {
        while ((A = A.parentElement) && A.getAttribute(z) == null) {}
        return A
    }

    function c(A, z) {
        if (A.classList) {
            return A.classList.contains(z)
        } else {
            return !!A.className.match(new RegExp("(\\s|^)" + z + "(\\s|$)"))
        }
    }

    function h(A, z) {
        if (A.classList) {
            A.classList.add(z)
        } else {
            if (!c(A, z)) {
                A.className += " " + z
            }
        }
    }

    function m(B, A) {
        if (B.classList) {
            B.classList.remove(A)
        } else {
            if (c(B, A)) {
                var z = new RegExp("(\\s|^)" + A + "(\\s|$)");
                B.className = B.className.replace(z, " ")
            }
        }
    }
    var g = "data-dropdown-secondary-trigger",
        y = "data-dropdown-secondary",
        v = "data-collapse-inner",
        q = "data-dropdown-secondary-content",
        u = 0;

    function d() {
        var z = s(document, y);
        if (z != null) {
            for (var B = 0; B < z.length; B++) {
                var A = s(z[B], g);
                if (A != null) {
                    if (A.length > 0) {
                        A = A[0]
                    }
                    A.onclick = function() {
                        var C = this.nextElementSibling;
                        if (C != null) {
                            if (C.length > 0) {
                                C = C[0]
                            }
                            if (parseInt(C.style.maxHeight, 10) == 0 || C.style.maxHeight == "") {
                                var I = 1000;
                                var H = e(C);
                                if (H != null) {
                                    I = 0;
                                    for (var F = 0; F < H.length; F++) {
                                        if (u == 0) {
                                            u = H[F].offsetHeight
                                        }
                                        I += u
                                    }
                                }
                                C.style.maxHeight = (I + 200) + "px";
                                if (!c(this, b)) {
                                    h(this, b);
                                    this.setAttribute(f, "true")
                                }
                            } else {
                                C.style.maxHeight = "0px";
                                var D = C.getElementsByClassName("dropdown-secondary-content");
                                if (D != null) {
                                    for (var F = 0; F < D.length; F++) {
                                        D[F].style.maxHeight = "0px";
                                        var E = D[F].previousElementSibling;
                                        if (c(E, b)) {
                                            m(E, b);
                                            E.setAttribute(f, "false")
                                        }
                                    }
                                }
                                if (c(this, b)) {
                                    m(this, b);
                                    this.setAttribute(f, "false")
                                }
                            }
                        }
                        var G = C;
                        while ((G = w(G, "dropdown-secondary-content")) != null) {
                            var I = G.offsetHeight;
                            var H = e(G);
                            if (H != null) {
                                for (var F = 0; F < H.length; F++) {
                                    I += u
                                }
                            }
                            if (G.style.maxHeight != "0px") {
                                G.style.maxHeight = (I + 200) + "px"
                            }
                        }
                    }
                }
            }
        }
    }

    function j(F) {
        var z = F.target,
            I;
        if (z != null) {
            I = o(z, y);
            if (I != null) {
                var E = I;
                var H = E;
                while ((H = w(H, "dropdown-secondary-content")) !== null) {
                    var G = 1000;
                    var A = e(H);
                    if (A != null) {
                        G = 0;
                        for (var D = 0; D < A.length; D++) {
                            G += A[D].offsetHeight;
                            var B = s(A[D], v);
                            for (var C = 0; C < B.length; C++) {
                                G += B[C].offsetHeight
                            }
                        }
                    }
                    H.style.maxHeight = G + "px"
                }
            }
        }
    }
    d();
    document.querySelector("body").addDelegateListener("click", r, function(z) {
        j(z)
    })
}
var FileManager = (function() {
    var o;
    var a = "[data-file]",
        d = "[data-file-input]",
        m = "[data-file-fake-input]",
        l = "[data-file-delete]",
        h = "is-input-filled";

    function j() {
        o = new Object("File Input Manager instance");
        o.fw_fileInit = g;
        return o
    }

    function g() {
        var t = document.querySelectorAll(a);
        var s = t.length;
        for (var r = s; r--;) {
            var v = t[r];
            var u = v.querySelector(d);
            var p = v.querySelector(m);
            var q = v.querySelector(l);
            u.addEventListener("change", c.bind(this, u, p), false);
            u.addEventListener("change", f.bind(this, v, p), false);
            q.addEventListener("click", e.bind(this, v, u, p), false)
        }
    }

    function c(p, r, q) {
        r.value = b(p.value)
    }

    function f(r, q, p) {
        if (q.value && q.value !== "") {
            r.classList.add(h)
        } else {
            r.classList.remove(h)
        }
    }

    function e(s, p, r, q) {
        q.preventDefault();
        p.value = "";
        r.value = "";
        f(s, r, q)
    }

    function b(p) {
        return p.replace(/^.*\\/, "")
    }
    return {
        getInstance: function() {
            if (!o) {
                o = j()
            }
            return o
        }
    }
})();

function fw_headerSearchInit() {
    var e = "[data-form-search]",
        b = "[data-form-search-open]",
        f = "[data-form-search-close]",
        a = "is-open";

    function c(l) {
        l.preventDefault();
        var g = l.target.parentNode,
            j, h;
        while (!g.matches(e)) {
            g = g.parentNode
        }
        g.classList.toggle(a);
        if (g.classList.contains(a)) {
            g.querySelector("input").focus()
        }
    }

    function d(j) {
        var h, g;
        if (!j.target.closest(e)) {
            h = document.querySelectorAll(e);
            for (g = 0; g < h.length; g++) {
                h[g].classList.remove(a)
            }
        }
    }
    document.querySelector("body").addDelegateListener("click", b, function(g) {
        c(g)
    });
    document.querySelector("body").addDelegateListener("click", f, function(g) {
        c(g)
    });
    document.addEventListener("click", d)
}

function fw_mainNavInit() {
    var a = "[data-nav]",
        d = "[data-nav-open]",
        c = "[data-nav-close]",
        b = "is-nav-open";

    function e(f) {
        f.preventDefault();
        document.querySelector(a).classList.toggle(b)
    }
    document.querySelector("body").addDelegateListener("click", d, function(f) {
        e(f)
    });
    document.querySelector("body").addDelegateListener("click", c, function(f) {
        e(f)
    })
}
var ModalManager = (function() {
    var u;
    var e = "[data-modal-trigger]",
        h = "[data-modal-close]",
        c = "[data-modal-action]",
        r = "[data-modal]",
        f = "[data-modal-dialog]",
        p = "[data-modal-blocked]",
        t = "is-modal-open",
        l = "is-blocked-scroll",
        v = "aria-hidden",
        d = "";

    function m() {
        u = new Object("Modal Manager instance");
        u.fw_modalInit = q;
        u.fw_addListeners = g;
        return u
    }

    function q() {
        document.onkeydown = function(A) {
            A = A || window.event;
            var y = false;
            var z = A.target;
            if ("key" in A) {
                y = (A.key == "Escape" || A.key == "Esc")
            } else {
                y = (A.keyCode == 27)
            }
            if (y) {
                var x = document.querySelector("." + t);
                if (x) {
                    o(A, x);
                    if (document.activeElement) {
                        document.activeElement.blur()
                    }
                }
            }
            var x = document.querySelector("." + t);
            if (x) {
                if (x.querySelector(".tab-block-last")) {
                    x.querySelector(".tab-block-last").onkeydown = function(B) {
                        if (B.which === 9 && B.shiftKey === false) {
                            if (this.nextElementSibling === null) {
                                x.querySelector(".tab-block-first").focus()
                            } else {
                                this.nextElementSibling.focus()
                            }
                        } else {
                            if (B.which === 9 && B.shiftKey === true) {
                                this.previousElementSibling.focus()
                            }
                        }
                        B.preventDefault()
                    };
                    x.querySelector(".tab-block-first").onkeydown = function(B) {
                        if (B.which === 9 && B.shiftKey === false) {
                            if (this.nextElementSibling !== null) {
                                this.nextElementSibling.focus()
                            }
                        } else {
                            if (B.which === 9 && B.shiftKey === true) {
                                if (this.nextElementSibling !== null) {
                                    this.nextElementSibling.focus()
                                }
                            }
                        }
                        B.preventDefault()
                    }
                }
            }
        };
        document.addEventListener("focus", function(y) {
            var x = document.querySelector("." + t);
            if (x && !x.contains(y.target)) {
                y.stopPropagation();
                x.focus()
            }
        }, true);
        g()
    }

    function j(A) {
        A.preventDefault();
        var x = A.target,
            E, F, C, z;
        while (!x.matches(e)) {
            x = x.parentNode
        }
        E = x.getAttribute("href");
        F = document.querySelector(E);
        if (F !== null) {
            F.classList.add(t);
            C = F.querySelector(f);
            if (C !== null) {
                C.setAttribute(v, "false");
                var G = C.querySelector(".modal-image-banner");
                if (G != null) {
                    var y = 690;
                    var B = G.naturalWidth;
                    var D = B > y || B === 0 ? y : B;
                    C.style.maxWidth = D + "px"
                }
            }
        }
        d = document.activeElement;
        document.querySelector("body").classList.add(l);
        document.querySelector(E).querySelector(f).setAttribute("aria-hidden", "false");
        document.querySelector(E).setAttribute("tabindex", "-1");
        document.querySelector(E).focus()
    }

    function a() {
        var y, z, x;
        y = document.querySelectorAll(r);
        for (x = 0; x < y.length; x++) {
            y[x].classList.remove(t);
            z = y[x].querySelector(f);
            if (z !== null) {
                z.setAttribute(v, "true")
            }
        }
        document.querySelector("body").classList.remove(l);
        setTimeout(function() {
            d.focus()
        }, 0);
        s("close")
    }

    function b(x) {
        x.preventDefault();
        a()
    }

    function w(x) {
        a()
    }

    function o(B, z) {
        var y, x;
        var A = B.target;
        if (z) {
            A = z
        }
        if (!A.closest(f) && !A.closest(p)) {
            B.preventDefault();
            a()
        }
    }

    function s(y) {
        var x = PlayerManager.getInstance().getMainPlayer();
        if (typeof x !== "undefined" && x !== null) {
            if (y === "close") {
                if (x !== null) {
                    x.stopVideo()
                }
            } else {
                if (y === "open") {
                    if (x !== null) {
                        x.seekTo(0);
                        x.playVideo()
                    }
                }
            }
        }
    }

    function g() {
        document.querySelector("body").addDelegateListener("click", e, function(x) {
            j(x)
        });
        document.querySelector("body").addDelegateListener("click", c, function(x) {
            w(x)
        });
        document.querySelector("body").addDelegateListener("click", h, function(x) {
            b(x)
        });
        document.querySelector("body").addDelegateListener("touchend", h, function(x) {
            b(x)
        });
        document.querySelector("body").addDelegateListener("click", r, function(x) {
            o(x)
        });
        document.querySelector("body").addDelegateListener("touchend", r, function(x) {
            o(x)
        })
    }
    return {
        getInstance: function() {
            if (!u) {
                u = m()
            }
            return u
        }
    }
})();
var PlayerManager = (function() {
    var b;

    function a() {
        b = new Object("Player Manager instance");
        b.mainplayer = null;
        b.setMainPlayer = f;
        b.getMainPlayer = d;
        b.setInitFunction = c;
        b.loadInitFunction = e;
        return b
    }

    function c(g) {
        b.initFunction = g
    }

    function e() {
        b.initFunction()
    }

    function f(g) {
        b.mainplayer = g
    }

    function d() {
        return b.mainplayer
    }
    return {
        getInstance: function() {
            if (!b) {
                b = a()
            }
            return b
        }
    }
}());
var selectElement = "data-select",
    selectLazyLoad = "data-lazy-load",
    selectValue = "data-select-value",
    selectTrigger = "data-select-trigger",
    selectText = "data-select-text",
    selectList = "data-select-list",
    selectListItem = "data-select-list-item",
    selectId = "data-select-id",
    selectDependent = "data-dependent",
    dataBinded = "data-bind",
    selectRoleListbox = "listbox",
    selectRoleOption = "option",
    selectOpenClass = "is-select-open",
    selectLoadedClass = "is-select-loaded",
    selectHintClass = "hint",
    selectSelectedClass = "selected",
    selectItemClass = "select--custom--dropdown__item",
    selectContentClass = "select--custom--dropdown__content",
    selectValuesClass = "select--custom--dropdown__values",
    selectSelectedValueClass = "select--custom--dropdown__selected-value",
    selectFormItemClass = "form-item",
    selectAttrSend = "data-send";

function fw_customSelectsInit() {
    function e(j) {
        j.preventDefault();
        var h = j.target;
        while (!h.matches(buildAttribute(selectElement))) {
            h = h.parentNode
        }
        if (h != null) {
            h.classList.toggle(selectOpenClass);
            var g = h.querySelector(buildAttribute(selectValue));
            if (g != null) {
                g.focus()
            }
        }
    }

    function d() {
        var h, g;
        h = document.querySelectorAll(buildAttribute(selectElement));
        for (g = 0; g < h.length; g++) {
            h[g].classList.remove(selectOpenClass)
        }
    }

    function f(g) {
        if (!g.target.closest(buildAttribute(selectElement))) {
            d()
        }
    }

    function a(o) {
        var p = "",
            l = o.target,
            j = l.closest(buildAttribute(selectElement));
        if (j != null) {
            var m = j.querySelector(buildAttribute(selectValue)),
                h = j.querySelector(buildAttribute(selectText));
            if (m != null) {
                var g = c(l),
                    p = l.innerHTML;
                if (g >= 0) {
                    m.options[g].selected = true;
                    if (g == 0) {
                        j.classList.add(selectHintClass)
                    } else {
                        j.classList.remove(selectHintClass)
                    }
                    fw_setSelectedOption(j, g)
                }
            }
            j.classList.remove(selectOpenClass);
            h.innerHTML = p;
            if (typeof window.jQuery !== "undefined") {
                $(m).trigger("change")
            }
        }
    }

    function c(g) {
        var h = g.parentNode;
        return Array.prototype.indexOf.call(h.children, g)
    }
    document.querySelector("body").addDelegateListener("click", buildAttribute(selectTrigger), function(g) {
        d();
        e(g)
    });
    document.addEventListener("click", function(g) {
        f(g)
    });
    document.querySelector("body").addDelegateListener("click", buildAttribute(selectListItem), function(g) {
        a(g)
    });
    var b = document.querySelectorAll(buildAttribute(selectElement));
    fw_initializeSelects(b)
}

function buildAttribute(a) {
    return "[" + a + "]"
}

function isLazyLoadSelect(a) {
    return a.getAttribute(selectLazyLoad) !== null && a.getAttribute(selectLazyLoad) !== "false"
}

function fw_isSelectLoaded(a) {
    return a.classList.contains(selectLoadedClass)
}

function findAncestorByTag(b, a) {
    while ((b = b.parentElement) && b.tagName != a.toUpperCase()) {}
    return b
}

function fw_setSelectedOption(d, b) {
    var a = d.querySelectorAll(buildAttribute(selectListItem));
    for (var c = 0; c < a.length; c++) {
        if (c == b) {
            a[c].classList.add(selectSelectedClass)
        } else {
            a[c].classList.remove(selectSelectedClass)
        }
    }
}

function fw_initLazyLoadSelect(b) {
    var a = b.querySelector("select");
    if (a != null && isLazyLoadSelect(b)) {
        fw_initializeSelect(b)
    }
}

function fw_initAllLazyLoadSelects() {
    var c = document.querySelectorAll(buildAttribute(selectLazyLoad));
    if (c != null) {
        for (var b = 0; b < c.length; b++) {
            var a = c[b];
            if (a != null && isLazyLoadSelect(a)) {
                fw_initializeSelect(c[b])
            }
        }
    }
}

function fw_initializeSelects(c) {
    if (c != null) {
        for (var b = 0; b < c.length; b++) {
            var a = c[b];
            if (a != null && !isLazyLoadSelect(a)) {
                fw_initializeSelect(c[b])
            }
        }
    }
}

function fw_initializeSelect(m) {
    if (!fw_isSelectLoaded(m)) {
        var h = m.querySelector("select");
        h.setAttribute("aria-hidden", "true");
        var b = document.createElement("div");
        b.classList.add(selectContentClass);
        b.classList.add(selectFormItemClass);
        b.setAttribute(selectTrigger, "");
        var d = document.createElement("div");
        d.classList.add(selectSelectedValueClass);
        d.setAttribute(selectText, "");
        if (b != null && d != null) {
            var a = "";
            for (var e = 0; e < h.options.length; e++) {
                if (h.options[e].selected) {
                    a = h.options[e].text
                }
            }
            var o = document.createTextNode(a);
            d.appendChild(o);
            b.appendChild(d);
            m.appendChild(b);
            m.classList.add(selectLoadedClass)
        }
        var g = document.createElement("div");
        var l = h.getAttribute(selectDependent);
        g.classList.add(selectValuesClass);
        g.setAttribute(selectList, "");
        g.setAttribute("role", selectRoleListbox);
        if (g != null) {
            g.setAttribute(selectId, h.id);
            for (var e = 0; e < h.options.length; e++) {
                var f = document.createElement("div");
                f.setAttribute("role", selectRoleOption);
                f.classList.add(selectItemClass);
                if (l != null) {
                    var c = h.options[e].className;
                    f.setAttribute(dataBinded, c)
                }
                f.setAttribute(selectListItem, h.options[e].value);
                if (e == 0) {
                    f.classList.add(selectSelectedClass)
                }
                if (f != null) {
                    var o = document.createTextNode(h.options[e].text);
                    f.appendChild(o);
                    g.appendChild(f)
                }
            }
            m.appendChild(g);
            m.classList.add(selectLoadedClass)
        }
        h.onchange = function(z) {
            var r = "",
                A = z.target,
                t = A.closest(buildAttribute(selectElement)),
                s = "FORM";
            if (t != null) {
                var w = t.querySelector(buildAttribute(selectValue)),
                    y = t.querySelector(buildAttribute(selectText));
                if (w != null) {
                    var x = A.options[A.selectedIndex].value;
                    var q = t.querySelectorAll(buildAttribute(selectListItem));
                    if (q != null) {
                        var v = false;
                        for (var u = 0; u < q.length && !v; u++) {
                            if (q[u].getAttribute(selectListItem) && x == q[u].getAttribute(selectListItem)) {
                                r = q[u].childNodes[0].nodeValue;
                                v = true
                            }
                        }
                        if (!v) {
                            r = A.options[0].childNodes[0].nodeValue
                        }
                    }
                    if (!v) {
                        t.classList.add(selectHintClass)
                    } else {
                        t.classList.remove(selectHintClass)
                    }
                    fw_setSelectedOption(t, A.selectedIndex)
                }
                y.innerHTML = r;
                var p = findAncestorByTag(t, s);
                if (typeof p !== "undefined" && A.getAttribute(selectAttrSend) !== null) {
                    p.submit()
                }
            }
        };
        h.onkeydown = function(q) {
            var j = q.target;
            var p = event.which || event.keyCode;
            if (p == 32) {
                var j = h.closest(buildAttribute(selectElement));
                if (j != null) {
                    j.classList.toggle(selectOpenClass)
                }
            }
        }
    }
}

function fw_stickyInit() {
    var a = "sticky",
        c = "sticky--stuck",
        b = document.getElementsByClassName(a),
        g = [],
        m = [],
        o, f = document.body.clientHeight * 2;
    for (o = 0; o < b.length; o++) {
        g[o] = l(b[o]).top;
        m[o] = l(b[o]).left
    }
    var h = 10;

    function e() {
        var p = window.pageYOffset;
        for (o = 0; o < g.length; o++) {
            var q = g[o];
            if (p > q - h) {
                if (!b[o].classList.contains(c)) {
                    b[o].classList.add(c);
                    b[o].style.left = m[o] + "px";
                    b[o].style.top = h + "px";
                    h = h + b[o].offsetHeight + 10
                }
            } else {
                if (b[o].classList.contains(c)) {
                    h = h - b[o].offsetHeight - 10;
                    b[o].style.left = "auto";
                    b[o].style.top = "auto";
                    b[o].classList.remove(c)
                }
            }
        }
    }

    function l(q) {
        var r = 0,
            p = 0;
        if (q.offsetParent) {
            do {
                r += q.offsetLeft;
                p += q.offsetTop
            } while (q = q.offsetParent);
            return {
                top: p,
                left: r
            }
        }
    }
    var a = "sticky",
        c = "sticky--stuck",
        j = "-right",
        d = "-left",
        b = document.getElementsByClassName(a);
    document.addEventListener("scroll", e)
}

function fw_tabsInit() {
    var a = "[data-tab-system]",
        b = "[data-tab-trigger]",
        e = "[data-tab-content]",
        c = "is-active",
        d = "." + c;

    function f(l) {
        var g = l.target,
            h, j;
        l.preventDefault();
        while (!g.matches(b)) {
            g = g.parentNode
        }
        h = document.querySelector(g.getAttribute("href"));
        j = l.target.parentNode;
        while (!j.matches(a) && (j.tagName !== "BODY")) {
            j = j.parentNode
        }
        if (j.tagName === "BODY") {
            j = false
        }
        if (j.querySelector(e + d)) {
            j.querySelector(e + d).classList.remove(c)
        }
        if (j.querySelector(b + d)) {
            j.querySelector(b + d).classList.remove(c)
        }
        h.classList.add(c);
        g.classList.add(c)
    }
    document.querySelector("body").addDelegateListener("click", b, function(g) {
        f(g)
    })
}
var YoutubeManager = (function() {
    var P;
    var f = 544,
        m = 768,
        aa = 992,
        z = 1200;
    var J = "data-video",
        L = "[data-video-play]",
        e = "data-video-playonload",
        a = "[data-video-hidden]",
        V = "[data-video-img]",
        Q = "[data-video-container]",
        W = "data-video-lock",
        B = "data-video-time",
        r = "data-video-preview",
        M = "data-subtitle-language",
        G = "[data-video-id]",
        y = "data-video-id",
        N = "data-video-autoplay",
        u = "data-loop-mode",
        F = "data-modal-trigger",
        D = "data-play-hidden",
        C = "data-modal",
        v = ".card__embedded-video",
        I = "embedded-video__iframe",
        Z = ".banner-full__tint",
        t = null,
        T = "small-video",
        w = false,
        E = 100;

    function X(ab) {
        return "[" + ab + "]"
    }

    function b(ac, ab) {
        while ((ac = ac.parentElement) && ac.getAttribute(ab) === null) {}
        if (typeof ac === "undefined") {
            ac = null
        }
        return ac
    }

    function h() {
        P = new Object("Modal Manager instance");
        return P
    }
    if (document.querySelectorAll(X(J)) !== null) {
        var R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api";
        var O = document.getElementsByTagName("script")[0];
        O.parentNode.insertBefore(R, O);
        var o = PlayerManager.getInstance().getMainPlayer();
        A();
        PlayerManager.getInstance().setInitFunction(j)
    }

    function A() {
        document.addEventListener("DOMContentLoaded", j);
        window.addEventListener("load", U)
    }

    function j() {
        var af = document.getElementsByClassName(I);
        var ad = document.getElementsByClassName(T);
        for (var ah = 0; ah < af.length; ah++) {
            var ac = b(af[ah], J);
            if (ac !== null) {
                var ag = ac.querySelector(L);
                ag.onclick = q
            }
        }
        for (var ab = 0; ab < ad.length; ab++) {
            var ae = ad[ab];
            if (ae !== null) {
                ae.onclick = H
            }
        }
    }

    function d(ad) {
        var ab = ad.target || null,
            ac = null;
        if (ab && ab.getPlayerState() != 1) {
            ab.setVolume(E);
            ac = ab.getIframe();
            if (ac !== null) {
                if (ac.getAttribute(N) !== null) {
                    if (ac.getAttribute(B) !== null) {
                        if (w == false) {
                            ab.seekTo(parseInt(ac.getAttribute(B)))
                        }
                    }
                    w = false;
                    ab.playVideo()
                }
            }
        }
    }

    function p(ac) {
        var ab = ac.target || null;
        if (ab !== null) {
            if (ac.data == YT.PlayerState.ENDED || ac.data == YT.PlayerState.PAUSED) {
                setTimeout(function(ad) {
                    if (this.data != YT.PlayerState.PLAYING) {
                        K(ab)
                    }
                }.bind(ac, ab), 100)
            }
        }
    }

    function U() {
        var ab = document.querySelectorAll(L);
        var ad = window.innerWidth;
        if (ab !== null) {
            for (var ac = 0; ac < ab.length; ac++) {
                var ae = ab[ac];
                if (ae !== null) {
                    ae.classList.remove("invisible");
                    if (ae.getAttribute(e) !== null) {
                        c(ae)
                    }
                }
            }
        }
    }

    function S(ad) {
        if (o != null && typeof o.getCurrentTime === "function" && typeof o.getIframe === "function") {
            if (!ad) {
                o.getIframe().setAttribute(B, o.getCurrentTime())
            } else {
                o.getIframe().setAttribute(B, 0)
            }
        }
        var ab = document.querySelectorAll("iframe.embedded-video__iframe");
        if (ab.length > 0) {
            for (var ac = 0; ac < ab.length; ac++) {
                l(ab[ac])
            }
            o = null;
            PlayerManager.getInstance().setMainPlayer(null)
        }
    }

    function x(ac) {
        var ab = '<div class="embedded-video__iframe" id="ID1" ' + y + '="ID2" ' + N + '="AUTOPLAY" ' + B + '="TIME"></div>';
        ab = ab.replace("ID2", ac.getAttribute(y)).replace("AUTOPLAY", ac.getAttribute(N)).replace("ID1", ac.getAttribute("id")).replace("TIME", ac.getAttribute(B));
        var ad = document.createElement("div");
        ad.innerHTML = ab;
        ac.parentNode.replaceChild(ad.childNodes[0], ac)
    }

    function s(ac) {
        var ab = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">';
        return ab.replace("ID", ac)
    }

    function c(ad) {
        var ab = b(ad, J);
        var af = null;
        if (ab !== null) {
            af = ab.querySelector(G);
            if (af != null) {
                var ag = af.getAttribute(M);
                var ac = Y(ag) ? 1 : 0;
                var ah = ac ? ag : "ca";
                var ae = af.getAttribute(u) === "1" ? 1 : 0;
                af.setAttribute(r, 1);
                S(true);
                E = 0;
                o = new YT.Player(af.getAttribute("id"), {
                    height: "390",
                    width: "640",
                    videoId: af.getAttribute(y),
                    playerVars: {
                        controls: 0,
                        showinfo: 0,
                        modestbranding: 1,
                        autohide: 0,
                        cc_load_policy: ac,
                        cc_lang_pref: ah,
                        loop: ae,
                        rel: 0,
                        playlist: ae === 1 ? af.getAttribute(y) : ""
                    },
                    events: {
                        onReady: d,
                        onStateChange: p
                    }
                });
                PlayerManager.getInstance().setMainPlayer(o);
                g(ad, true)
            }
        }
    }

    function Y(ac) {
        var ab = ["ca", "es", "en", "fr"];
        return ab.indexOf(ac) !== -1
    }

    function q(ah) {
        ah.preventDefault();
        var ab = b(this, J);
        var ae = null;
        if (ab !== null) {
            ae = ab.querySelector(G);
            if (ae != null) {
                ae = ab.querySelector(G);
                var ad = ae.getAttribute(u) === "1" ? 1 : 0;
                var ag = ae.getAttribute(r);
                var af = ae.getAttribute(M);
                var ac = Y(af) ? 1 : 0;
                var ai = ac ? af : "ca";
                S(false);
                E = 100;
                o = new YT.Player(ae.getAttribute("id"), {
                    height: "390",
                    width: "640",
                    videoId: ae.getAttribute(y),
                    playerVars: {
                        controls: 1,
                        showinfo: 0,
                        modestbranding: 1,
                        autohide: 1,
                        cc_load_policy: ac,
                        cc_lang_pref: ai,
                        rel: 0,
                        loop: ad,
                        playlist: ad === 1 ? ae.getAttribute(y) : ""
                    },
                    events: {
                        onReady: d,
                        onStateChange: p
                    }
                });
                PlayerManager.getInstance().setMainPlayer(o);
                g(this, false);
                ae = ab.querySelector(G);
                if (ag != null && ag == "1") {
                    ae.setAttribute(r, 0);
                    ae.setAttribute(B, 0)
                }
            }
        }
    }

    function l(af) {
        if (typeof af !== "undefined" && af !== null) {
            var ah = b(af, J),
                ai = ah.querySelector(L),
                ad = null,
                ac = null,
                ab = null,
                ae = null;
            if (ai.getAttribute(F) === null) {
                ai.classList.remove("invisible")
            }
            if (ah !== null) {
                ae = ah.querySelector(Z);
                ad = ah.querySelector(V);
                ac = ah.querySelector(Q);
                ab = ah.querySelectorAll(a);
                if (ae !== null) {
                    ae.classList.remove("invisible")
                }
                if (ad !== null) {
                    ad.classList.remove("invisible")
                }
                if (ac !== null) {
                    ac.classList.remove("invisible")
                }
                if (ab !== null) {
                    for (var ag = 0; ag < ab.length; ag++) {
                        ab[ag].classList.remove("invisible")
                    }
                }
            }
            if (typeof ah !== "undefined") {
                var aj = ah.querySelector(v);
                if (aj !== null) {
                    aj.classList.remove("visible");
                    aj.setAttribute("aria-hidden", true)
                }
            }
            o = null;
            PlayerManager.getInstance().setMainPlayer(null);
            x(af)
        }
    }

    function K(ad) {
        if (ad.getPlayerState() == 0 || ad.getPlayerState() == 2) {
            var ae = ad.getIframe();
            if (ae != null) {
                var ab = b(ae, J),
                    ag = null,
                    ac = null;
                var af = ab.querySelector(L);
                if (ab) {
                    ag = ab.querySelector(X(F))
                }
                if (ad.getPlayerState() == 2) {
                    ae.setAttribute(B, ad.getCurrentTime())
                } else {
                    ae.setAttribute(B, 0);
                    if (ag) {
                        ac = ab.querySelector(X(C));
                        if (ac !== null) {
                            ac.click()
                        }
                    }
                }
                if (ag === null) {
                    l(ae)
                }
            }
        }
    }

    function H(ap) {
        ap.preventDefault();
        var ag = this;
        w = true;
        var aq = $(ag).siblings("img").attr("src");
        var ad = $(ag).next().html();
        var af = $(ag).parents();
        var ab = $(ag).parents(".card__video");
        var ae = $(ag).parents(".card--responsive-mobile");
        var at = $(ab).next();
        var aj = $(at).find(".embedded-video__iframe");
        var ak = $(aj).attr("data-video-id");
        var ao = $(ae).children().first().find(".card__video__time").html();
        var al = $(ag).parents(".expand-container").prev(".main-video");
        var an = $(al).find("img").attr("src");
        var ac = $(al).find(".card-text").html();
        var ah = $(al).find(".embedded-video__iframe");
        var ai = $(ah).attr("data-video-id");
        var am = $(al).find(".card__video__time").text();
        $(ag).siblings("img").attr("src", an);
        $(ag).next().html("");
        $(ag).parents(".modal__body").siblings(".col-md-9").html(ac);
        $(ag).parents(".modal__body").find(".img-wpr__contents").html(ac);
        $(aj).attr("data-video-id", ai);
        $(ae).children().first().find(".card__video__time").html(am);
        $(ae).children().first().find(".img-wpr__contents").html(ac);
        $(ae).children().first().find("img").attr("src", an);
        $(al).find("img").attr("src", aq);
        $(al).find(".card-text").html(ad);
        $(ah).attr("data-video-id", ak);
        $(al).find(".card__video__time").text(ao);
        var ar = $(al).find("a");
        ar.click()
    }

    function g(aj, ak) {
        var ai = b(aj, J),
            ad = null,
            ac = null,
            ab = null,
            ae = null;
        var al = ai.getAttribute(D);
        if ((aj.getAttribute(F) === null && aj.getAttribute(W) === null && !ak) || al === "1") {
            aj.classList.add("invisible")
        }
        if (ai) {
            ae = ai.querySelector(Z);
            ad = ai.querySelector(V);
            ac = ai.querySelector(Q);
            ab = ai.querySelectorAll(a);
            if (ad !== null) {
                ad.classList.add("invisible")
            }
            if (ak) {
                if (ae !== null) {
                    ae.classList.remove("invisible")
                }
            }
            if (!ak) {
                if (ae !== null) {
                    ae.classList.add("invisible")
                }
                if (ac !== null && ac.getAttribute(W) === null) {
                    ac.classList.add("invisible")
                }
                if (ab !== null) {
                    for (var ah = 0; ah < ab.length; ah++) {
                        if (ab[ah].getAttribute(W) === null) {
                            ab[ah].classList.add("invisible")
                        }
                    }
                }
            }
        }
        if (typeof ai !== "undefined" && !ak) {
            var ag = ai.querySelector("iframe");
            var am = ai.querySelector(v);
            if (ag !== null) {
                if (am !== null) {
                    if (ai.offsetWidth > ai.offsetHeight) {
                        am.classList.add("horizontal");
                        ag.parentNode.style.height = parseInt(am.offsetHeight) + "px";
                        ag.style.height = parseInt(am.offsetHeight) + "px"
                    }
                    am.classList.add("visible");
                    am.setAttribute("aria-hidden", false)
                }
            }
            var af = ai.querySelector(X(F));
            if (af === null) {
                if (am !== null) {
                    am.classList.add("visible");
                    am.setAttribute("aria-hidden", false)
                }
            } else {
                if (ag !== null) {
                    t = ag
                }
            }
        }
    }
    return {
        getInstance: function() {
            if (!P) {
                P = h()
            }
            return P
        }
    }
})(PlayerManager);
(function vimeoVideo() {
    var e = "data-video-vimeo",
        p = "[data-vimeo-play]",
        B = "[data-vimeo-hidden]",
        A = "[data-vimeo-img]",
        j = "[data-vimeo-container]",
        f = "data-vimeo-lock",
        z = "data-vimeo-time",
        I = "data-vimeo-preview",
        c = "[vimeo-id]",
        w = "vimeo-id",
        d = "data-vimeo-autoplay",
        F = "data-modal-trigger-vimeo",
        D = "data-modal-vimeo",
        a = ".card__embedded-video",
        H = "embedded-video__iframe",
        x = ".banner-full__tint",
        K = null,
        g = 1;

    function o(M) {
        return "[" + M + "]"
    }
    if (document.querySelectorAll(o(e)) !== null) {
        function u(N, M) {
            while ((N = N.parentElement) && N.getAttribute(M) === null) {}
            if (typeof N === "undefined") {
                N = null
            }
            return N
        }
        var m = document.createElement("script");
        m.src = "https://player.vimeo.com/api/player.js";
        var L = document.getElementsByTagName("script")[0];
        L.parentNode.insertBefore(m, L);
        var J = PlayerManager.getInstance().getMainPlayer();
        window.addEventListener("load", function(P) {
            var N = document.getElementsByClassName(H);
            for (var Q = 0; Q < N.length; Q++) {
                var M = u(N[Q], e);
                if (M !== null) {
                    var O = M.querySelector(p);
                    O.onclick = v
                }
            }
            s()
        }, false);

        function s() {
            var U = document.querySelectorAll(p);
            var N = window.innerWidth;
            if (U !== null && U !== "undefined") {
                for (var P = 0; P < U.length; P++) {
                    var R = U[P];
                    if (R !== null) {
                        R.classList.remove("invisible");
                        var Q = u(R, e);
                        var S = Q.querySelector(c);
                        var M = S.getAttribute(d);
                        var T = M !== "" && M !== null ? M : 0;
                        if (T == 1 && N >= desktopBreakpoint) {
                            v(R)
                        }
                        var V = S.getAttribute(I);
                        var O = V !== "" && V !== null ? V : 0;
                        if (O == 1 && N >= desktopBreakpoint) {
                            h(R)
                        }
                    }
                }
            }
        }

        function l(N, M) {
            if (M !== null) {
                if (N == "ended" || N == "pause") {
                    G(M)
                }
            }
        }

        function r(M) {
            M.off("pause", function(N) {
                r()
            });
            G(M)
        }

        function q(M) {
            M.off("pause", function(N) {
                q()
            });
            G(M)
        }

        function E(P, O) {
            if (J != null && typeof J.getCurrentTime === "function" && typeof J.getVideoEmbedCode === "function") {
                if (!P) {} else {
                    O.setAttribute(z, 0)
                }
            }
            var M = document.querySelectorAll(".embedded-video__iframe iframe");
            if (M.length > 0) {
                for (var N = 0; N < M.length; N++) {
                    y(M[N])
                }
                J = null;
                PlayerManager.getInstance().setMainPlayer(null)
            }
        }

        function h(O) {
            var M = u(O, e);
            var P = null;
            if (M !== null) {
                P = M.querySelector(c);
                if (P != null) {
                    P.setAttribute(I, 1);
                    g = 0;
                    var N = P.getAttribute(w);
                    J = new Vimeo.Player(P.getAttribute("id"), {
                        height: "390",
                        width: "640",
                        title: false,
                        id: N,
                        byline: false,
                        playbar: false,
                        autoplay: true
                    });
                    J.setVolume(g);
                    J.ready().then(function() {
                        var Q = M.querySelector(c).firstElementChild;
                        $(Q).addClass("full-vimeo");
                        C(J)
                    });
                    J.on("pause", function(Q) {
                        r(J)
                    });
                    J.on("ended", function(Q) {
                        q(J)
                    });
                    PlayerManager.getInstance().setMainPlayer(J);
                    b(O, true)
                }
            }
        }

        function v(Q) {
            parentNode = null;
            var M = this;
            if (Q.type == "click") {
                Q.preventDefault();
                parentNode = u(M, e)
            } else {
                parentNode = u(Q, e);
                M = Q
            }
            var O = null;
            if (parentNode !== null) {
                O = parentNode.querySelector(c);
                if (O != null) {
                    O = parentNode.querySelector(c);
                    var P = O.getAttribute(I);
                    var N = O.getAttribute(w);
                    g = 1;
                    J = new Vimeo.Player(O.getAttribute("id"), {
                        height: "390",
                        width: "640",
                        title: false,
                        id: N,
                        byline: false,
                        loop: true
                    });
                    J.setVolume(g);
                    J.ready().then(function() {
                        C(J, parentNode);
                        var R = parentNode.querySelector(c).firstElementChild;
                        J.play();
                        J.setCurrentTime(0).then(function(S) {});
                        $(R).addClass("full-vimeo")
                    });
                    PlayerManager.getInstance().setMainPlayer(J);
                    b(M, false);
                    O = parentNode.querySelector(c);
                    if (P != null && P == "1") {
                        O.setAttribute(I, 0);
                        O.setAttribute(z, 0)
                    }
                }
            }
        }

        function C(M, O) {
            var N = null;
            if (M) {
                M.getPaused().then(function(P) {
                    if (P == true) {
                        M.setVolume(g)
                    }
                })
            }
        }

        function b(Q, U) {
            var T = u(Q, e),
                O = null,
                N = null,
                M = null,
                P = null;
            if (Q.getAttribute(F) === null && Q.getAttribute(f) === null && !U) {
                Q.classList.add("invisible")
            }
            if (T) {
                P = T.querySelector(x);
                O = T.querySelector(A);
                N = T.querySelector(j);
                M = T.querySelectorAll(B);
                if (O !== null) {
                    O.classList.add("invisible")
                }
                if (P !== null) {
                    P.classList.remove("invisible")
                }
                if (!U) {
                    if (P !== null) {
                        P.classList.add("invisible")
                    }
                    if (N !== null && N.getAttribute(f) === null) {
                        N.classList.add("invisible")
                    }
                    if (M !== null) {
                        for (var S = 0; S < M.length; S++) {
                            if (M[S].getAttribute(f) === null) {
                                M[S].classList.add("invisible")
                            }
                        }
                    }
                }
            }
            if (typeof T !== "undefined" && !U) {
                iframe = T.querySelector("iframe");
                var V = T.querySelector(a);
                if (iframe !== null) {
                    if (V !== null) {
                        if (T.offsetWidth > T.offsetHeight) {
                            V.classList.add("horizontal");
                            iframe.parentNode.style.height = parseInt(V.offsetHeight) + "px";
                            iframe.style.height = parseInt(V.offsetHeight) + "px"
                        }
                        V.classList.add("visible")
                    }
                }
                var R = T.querySelector(o(F));
                if (R === null) {
                    if (V !== null) {
                        V.classList.add("visible")
                    }
                } else {
                    if (iframe !== null) {
                        currentIframe = iframe
                    }
                }
            }
        }

        function y(N, M) {
            if (typeof N !== "undefined" && N !== null) {
                M.getVideoId().then(function(Q) {
                    var U = document.querySelector("[data-video-vimeo]");
                    var V = U.querySelector(p);
                    var R = null,
                        P = null,
                        O = null,
                        S = null;
                    if (V.getAttribute(F) === null) {
                        V.classList.remove("invisible")
                    }
                    if (U !== null) {
                        S = U.querySelector(x);
                        R = U.querySelector(A);
                        P = U.querySelector(j);
                        O = U.querySelectorAll(B);
                        if (S !== null) {
                            S.classList.remove("invisible")
                        }
                        if (R !== null) {
                            R.classList.remove("invisible")
                        }
                        if (P !== null) {
                            P.classList.remove("invisible")
                        }
                        if (O !== null) {
                            for (var T = 0; T < O.length; T++) {
                                O[T].classList.remove("invisible")
                            }
                        }
                    }
                    if (typeof U !== "undefined") {
                        var W = U.querySelector(a);
                        if (W !== null) {
                            W.classList.remove("visible")
                        }
                    }
                    J = null;
                    PlayerManager.getInstance().setMainPlayer(null);
                    t(N)
                }).catch(function(O) {})
            }
        }

        function G(M) {
            var N;
            M.getVideoEmbedCode().then(function(Q) {
                if (Q != null) {
                    var O = u(Q, e),
                        R = null,
                        P = null;
                    if (R === null) {
                        y(Q, M)
                    }
                }
            })
        }

        function t(N) {
            var M = '<div class="embedded-video__iframe" id="ID1" ' + attrVideoId + '="ID2" ' + attrVideoAuto + '="AUTOPLAY" ' + cnVideoTime + '="TIME"></div>';
            M = M.replace("ID2", N.getAttribute(attrVideoId)).replace("AUTOPLAY", N.getAttribute(attrVideoAuto)).replace("ID1", N.getAttribute("id")).replace("TIME", N.getAttribute(cnVideoTime));
            var O = document.createElement("div");
            O.innerHTML = M;
            N.parentNode.replaceChild(O.childNodes[0], N)
        }
    }
})();

function fw_init() {
    document.querySelector("body").classList.add("fw-is-js");
    fw_BrowserDetect.init();
    fw_dropDownInit();
    fw_headerSearchInit();
    fw_mainNavInit();
    CollapseManager.getInstance().fw_collapseInit();
    fw_tabsInit();
    fw_appendAroundInit();
    ModalManager.getInstance().fw_modalInit();
    fw_stickyInit();
    fw_customSelectsInit();
    fw_accesibilityInit();
    FileManager.getInstance().fw_fileInit()
}
if ("querySelector" in document && "addEventListener" in window) {
    document.addEventListener("DOMContentLoaded", fw_init)
}
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://new.modernizr.com/download/?-fontface-objectfit-touchevents-setclasses !*/
;
! function(ai, Z, Q) {
    function W(a, b) {
        return typeof a === b
    }

    function Y() {
        var j, m, d, l, g, c, b;
        for (var h in I) {
            if (I.hasOwnProperty(h)) {
                if (j = [], m = I[h], m.name && (j.push(m.name.toLowerCase()), m.options && m.options.aliases && m.options.aliases.length)) {
                    for (d = 0; d < m.options.aliases.length; d++) {
                        j.push(m.options.aliases[d].toLowerCase())
                    }
                }
                for (l = W(m.fn, "function") ? m.fn() : m.fn, g = 0; g < j.length; g++) {
                    c = j[g], b = c.split("."), 1 === b.length ? F[b[0]] = l : (!F[b[0]] || F[b[0]] instanceof Boolean || (F[b[0]] = new Boolean(F[b[0]])), F[b[0]][b[1]] = l), ag.push((l ? "" : "no-") + b.join("-"))
                }
            }
        }
    }

    function U(c) {
        var d = K.className,
            a = F._config.classPrefix || "";
        if (J && (d = d.baseVal), F._config.enableJSClass) {
            var b = new RegExp("(^|\\s)" + a + "no-js(\\s|$)");
            d = d.replace(b, "$1" + a + "js$2")
        }
        F._config.enableClasses && (d += " " + a + c.join(" " + a), J ? K.className.baseVal = d : K.className = d)
    }

    function ae(a) {
        return a.replace(/([a-z])-([a-z])/g, function(c, d, b) {
            return d + b.toUpperCase()
        }).replace(/^-/, "")
    }

    function am() {
        return "function" != typeof Z.createElement ? Z.createElement(arguments[0]) : J ? Z.createElementNS.call(Z, "http://www.w3.org/2000/svg", arguments[0]) : Z.createElement.apply(Z, arguments)
    }

    function ah() {
        var a = Z.body;
        return a || (a = am(J ? "svg" : "body"), a.fake = !0), a
    }

    function ab(j, x, a, f) {
        var y, h, g, w, v = "modernizr",
            b = am("div"),
            m = ah();
        if (parseInt(a, 10)) {
            for (; a--;) {
                g = am("div"), g.id = f ? f[a] : v + (a + 1), b.appendChild(g)
            }
        }
        return y = am("style"), y.type = "text/css", y.id = "s" + v, (m.fake ? m : b).appendChild(y), m.appendChild(b), y.styleSheet ? y.styleSheet.cssText = j : y.appendChild(Z.createTextNode(j)), b.id = v, m.fake && (m.style.background = "", m.style.overflow = "hidden", w = K.style.overflow, K.style.overflow = "hidden", K.appendChild(m)), h = x(b, j), m.fake ? (m.parentNode.removeChild(m), K.style.overflow = w, K.offsetHeight) : b.parentNode.removeChild(b), !!h
    }

    function M(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function ak(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }

    function X(c, f, a) {
        var d;
        for (var b in c) {
            if (c[b] in f) {
                return a === !1 ? c[b] : (d = f[c[b]], W(d, "function") ? ak(d, a || f) : d)
            }
        }
        return !1
    }

    function aj(a) {
        return a.replace(/([A-Z])/g, function(b, c) {
            return "-" + c.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function aa(d, b) {
        var c = d.length;
        if ("CSS" in ai && "supports" in ai.CSS) {
            for (; c--;) {
                if (ai.CSS.supports(aj(d[c]), b)) {
                    return !0
                }
            }
            return !1
        }
        if ("CSSSupportsRule" in ai) {
            for (var a = []; c--;) {
                a.push("(" + aj(d[c]) + ":" + b + ")")
            }
            return a = a.join(" or "), ab("@supports (" + a + ") { #modernizr { position: absolute; } }", function(f) {
                return "absolute" == getComputedStyle(f, null).position
            })
        }
        return Q
    }

    function af(w, j, b, N) {
        function u() {
            z && (delete B.style, delete B.modElem)
        }
        if (N = W(N, "undefined") ? !1 : N, !W(b, "undefined")) {
            var m = aa(w, b);
            if (!W(m, "undefined")) {
                return m
            }
        }
        for (var z, a, x, r, E, t = ["modernizr", "tspan", "samp"]; !B.style && t.length;) {
            z = !0, B.modElem = am(t.shift()), B.style = B.modElem.style
        }
        for (x = w.length, a = 0; x > a; a++) {
            if (r = w[a], E = B.style[r], M(r, "-") && (r = ae(r)), B.style[r] !== Q) {
                if (N || W(b, "undefined")) {
                    return u(), "pfx" == j ? r : !0
                }
                try {
                    B.style[r] = b
                } catch (C) {}
                if (B.style[r] != E) {
                    return u(), "pfx" == j ? r : !0
                }
            }
        }
        return u(), !1
    }

    function L(g, j, d, h, f) {
        var c = g.charAt(0).toUpperCase() + g.slice(1),
            b = (g + " " + q.join(c + " ") + c).split(" ");
        return W(j, "string") || W(j, "undefined") ? af(b, j, h, f) : (b = (g + " " + H.join(c + " ") + c).split(" "), X(b, j, d))
    }
    var ag = [],
        I = [],
        V = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(b, c) {
                var a = this;
                setTimeout(function() {
                    c(a[b])
                }, 0)
            },
            addTest: function(b, c, a) {
                I.push({
                    name: b,
                    fn: c,
                    options: a
                })
            },
            addAsyncTest: function(a) {
                I.push({
                    name: null,
                    fn: a
                })
            }
        },
        F = function() {};
    F.prototype = V, F = new F;
    var K = Z.documentElement,
        J = "svg" === K.nodeName.toLowerCase(),
        an = V.testStyles = ab,
        al = function() {
            var c = navigator.userAgent,
                f = c.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
                a = c.match(/w(eb)?osbrowser/gi),
                b = c.match(/windows phone/gi) && c.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
                d = 533 > f && c.match(/android/gi);
            return a || d || b
        }();
    al ? F.addTest("fontface", !1) : an('@font-face {font-family:"font";src:url("https://")}', function(f, b) {
        var d = Z.getElementById("smodernizr"),
            g = d.sheet || d.styleSheet,
            c = g ? g.cssRules && g.cssRules[0] ? g.cssRules[0].cssText : g.cssText || "" : "",
            a = /src/i.test(c) && 0 === c.indexOf(b.split(" ")[0]);
        F.addTest("fontface", a)
    });
    var A = "Moz O ms Webkit",
        q = V._config.usePrefixes ? A.split(" ") : [];
    V._cssomPrefixes = q;
    var O = function(j) {
        var e, h = G.length,
            d = ai.CSSRule;
        if ("undefined" == typeof d) {
            return Q
        }
        if (!j) {
            return !1
        }
        if (j = j.replace(/^@/, ""), e = j.replace(/-/g, "_").toUpperCase() + "_RULE", e in d) {
            return "@" + j
        }
        for (var c = 0; h > c; c++) {
            var b = G[c],
                g = b.toUpperCase() + "_" + e;
            if (g in d) {
                return "@-" + b.toLowerCase() + "-" + j
            }
        }
        return !1
    };
    V.atRule = O;
    var H = V._config.usePrefixes ? A.toLowerCase().split(" ") : [];
    V._domPrefixes = H;
    var ad = {
        elem: am("modernizr")
    };
    F._q.push(function() {
        delete ad.elem
    });
    var B = {
        style: ad.elem.style
    };
    F._q.unshift(function() {
        delete B.style
    }), V.testAllProps = L;
    var D = V.prefixed = function(b, c, a) {
        return 0 === b.indexOf("@") ? O(b) : (-1 != b.indexOf("-") && (b = ae(b)), c ? L(b, c, a) : L(b, "pfx"))
    };
    F.addTest("objectfit", !!D("objectFit"), {
        aliases: ["object-fit"]
    });
    var G = V._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    V._prefixes = G, F.addTest("touchevents", function() {
        var a;
        if ("ontouchstart" in ai || ai.DocumentTouch && Z instanceof DocumentTouch) {
            a = !0
        } else {
            var b = ["@media (", G.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            an(b, function(c) {
                a = 9 === c.offsetTop
            })
        }
        return a
    }), Y(), U(ag), delete V.addTest, delete V.addAsyncTest;
    for (var ac = 0; ac < F._q.length; ac++) {
        F._q[ac]()
    }
    ai.Modernizr = F
}(window, document);
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(g) {
    var j = Array.prototype.slice;
    var d = Array.prototype.splice;
    var f = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: false,
            getWidthFrom: "",
            widthFromWrapper: true,
            responsiveWidth: false
        },
        b = g(window),
        e = g(document),
        m = [],
        a = b.height(),
        h = function() {
            var o = b.scrollTop(),
                y = e.height(),
                x = y - a,
                q = (o > x) ? x - o : 0;
            for (var u = 0, r = m.length; u < r; u++) {
                var z = m[u],
                    p = z.stickyWrapper.offset().top,
                    v = p - z.topSpacing - q;
                z.stickyWrapper.css("height", z.stickyElement.outerHeight());
                if (o <= v) {
                    if (z.currentTop !== null) {
                        z.stickyElement.css({
                            width: "",
                            position: "",
                            top: ""
                        });
                        z.stickyElement.parent().removeClass(z.className);
                        z.stickyElement.trigger("sticky-end", [z]);
                        z.currentTop = null
                    }
                } else {
                    var w = y - z.stickyElement.outerHeight() - z.topSpacing - z.bottomSpacing - o - q;
                    if (w < 0) {
                        w = w + z.topSpacing
                    } else {
                        w = z.topSpacing
                    }
                    if (z.currentTop !== w) {
                        var t;
                        if (z.getWidthFrom) {
                            t = g(z.getWidthFrom).width() || null
                        } else {
                            if (z.widthFromWrapper) {
                                t = z.stickyWrapper.width()
                            }
                        }
                        if (t == null) {
                            t = z.stickyElement.width()
                        }
                        z.stickyElement.css("width", t).css("position", "fixed").css("top", w);
                        z.stickyElement.parent().addClass(z.className);
                        if (z.currentTop === null) {
                            z.stickyElement.trigger("sticky-start", [z])
                        } else {
                            z.stickyElement.trigger("sticky-update", [z])
                        }
                        if (z.currentTop === z.topSpacing && z.currentTop > w || z.currentTop === null && w < z.topSpacing) {
                            z.stickyElement.trigger("sticky-bottom-reached", [z])
                        } else {
                            if (z.currentTop !== null && w === z.topSpacing && z.currentTop < w) {
                                z.stickyElement.trigger("sticky-bottom-unreached", [z])
                            }
                        }
                        z.currentTop = w
                    }
                }
            }
        },
        l = function() {
            a = b.height();
            for (var p = 0, o = m.length; p < o; p++) {
                var q = m[p];
                var r = null;
                if (q.getWidthFrom) {
                    if (q.responsiveWidth) {
                        r = g(q.getWidthFrom).width()
                    }
                } else {
                    if (q.widthFromWrapper) {
                        r = q.stickyWrapper.width()
                    }
                }
                if (r != null) {
                    q.stickyElement.css("width", r)
                }
            }
        },
        c = {
            init: function(p) {
                var q = g.extend({}, f, p);
                return this.each(function() {
                    var r = g(this);
                    var s = r.attr("id");
                    var o = r.outerHeight();
                    var u = s ? s + "-" + f.wrapperClassName : f.wrapperClassName;
                    var v = g("<div></div>").attr("id", u).addClass(q.wrapperClassName);
                    r.wrapAll(v);
                    var t = r.parent();
                    if (q.center) {
                        t.css({
                            width: r.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        })
                    }
                    if (r.css("float") === "right") {
                        r.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        })
                    }
                    t.css("height", o);
                    q.stickyElement = r;
                    q.stickyWrapper = t;
                    q.currentTop = null;
                    m.push(q)
                })
            },
            update: h,
            unstick: function(o) {
                return this.each(function() {
                    var s = this;
                    var q = g(s);
                    var p = -1;
                    var r = m.length;
                    while (r-- > 0) {
                        if (m[r].stickyElement.get(0) === s) {
                            d.call(m, r, 1);
                            p = r
                        }
                    }
                    if (p !== -1) {
                        q.unwrap();
                        q.css({
                            width: "",
                            position: "",
                            top: "",
                            "float": ""
                        })
                    }
                })
            }
        };
    if (window.addEventListener) {
        window.addEventListener("scroll", h, false);
        window.addEventListener("resize", l, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onscroll", h);
            window.attachEvent("onresize", l)
        }
    }
    g.fn.sticky = function(o) {
        if (c[o]) {
            return c[o].apply(this, j.call(arguments, 1))
        } else {
            if (typeof o === "object" || !o) {
                return c.init.apply(this, arguments)
            } else {
                g.error("Method " + o + " does not exist on jQuery.sticky")
            }
        }
    };
    g.fn.unstick = function(o) {
        if (c[o]) {
            return c[o].apply(this, j.call(arguments, 1))
        } else {
            if (typeof o === "object" || !o) {
                return c.unstick.apply(this, arguments)
            } else {
                g.error("Method " + o + " does not exist on jQuery.sticky")
            }
        }
    };
    g(function() {
        setTimeout(h, 0)
    })
}));
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var toggle_button;
jQuery(document).ready(function() {
    var b = "aria-hidden";
    var a = "aria-expanded";
    jQuery("[data-toggle]").on("click keyup", function(c) {
        c.preventDefault();
        var f = jQuery(this);
        var q = c.type;
        var s = c.charCode || c.keyCode || c.which;
        var d = f.data("toggle");
        var h = f.data("toggle-delay");
        var u = f.data("toggle-group");
        var j = f.data("toggle-slide");
        var z = f.data("toggle-active-class") ? f.data("toggle-active-class") : "active";
        var g = f.data("toggle-hide-class") ? f.data("toggle-hide-class") : "hide";
        var t = jQuery(d);
        toggle_button = f;
        var m = d.split("," + /\s+/g);
        if ((q === "keyup" && s !== 27) || (q === "keyup" && s !== 13 && !f.hasClass("active"))) {
            return
        }
        for (var w = 0; w < m.length; w++) {
            var y = jQuery(m[w]);
            var x = y.find("ul");
            var r = x.find("li");
            r.on("keyup", v);
            if (y.attr(b)) {
                if (y.attr(b) === "true") {
                    setTimeout(function(A) {
                        A.eq(0).find("a").focus()
                    }, 200);
                    y.attr(b, false)
                } else {
                    y.attr(b, true)
                }
            }
        }

        function v(B) {
            var A = B.charCode || B.keyCode || B.which;
            if (A === 27) {
                setTimeout(function() {
                    if (f.attr("data-custom-focus-enabled") !== "undefined") {
                        f.find(".custom-focus").focus()
                    } else {
                        f.focus()
                    }
                }, 200);
                f.click()
            }
            $(this).siblings().off("keyup");
            $(this).off("keyup")
        }
        if (u) {
            var p = jQuery(u);
            p.each(function() {
                var C = jQuery(this);
                var A = $(C.data("toggle"));
                var B = C.data("toggle-slide");
                if (!C.is(f) && !A.is(t)) {
                    C.removeClass(z);
                    C.attr(a, false);
                    if (B) {
                        var D = jQuery(B);
                        A.addClass(g);
                        D.hide()
                    } else {
                        A.addClass(g)
                    }
                }
            })
        }
        var e = 0;
        if (typeof h !== "undefined") {
            e = h.length !== 0 ? h : 200
        }
        setTimeout(function() {
            if (j) {
                var A = jQuery(j);
                if (!f.hasClass(z)) {
                    f.addClass(z);
                    t.removeClass(g, "");
                    A.slideDown("normal", function() {
                        f.attr(a, true)
                    })
                } else {
                    f.removeClass(z);
                    A.slideUp("normal", function() {
                        t.addClass(g, "");
                        f.attr(a, false)
                    })
                }
            } else {
                t.toggleClass(g, "");
                f.toggleClass(z);
                f.attr(a, f.hasClass(z))
            }
        }, e);
        var l = t.find("form");
        if (l.length > 0 && l.is(":visible")) {
            l.on("keyup", function(B) {
                var A = B.charCode || B.keyCode || B.which;
                if (A === "27") {
                    setTimeout(function() {
                        f.focus()
                    }, 200);
                    f.click();
                    l.off()
                }
            });
            var o = l.find("input, textarea, select").not(":input[type=button], :input[type=submit], :input[type=reset]");
            if (o.length > 0) {
                setTimeout(function() {
                    if (!iOS) {
                        o.first().focus()
                    }
                }, 200)
            }
        }
    });
    jQuery("[data-add-class-target]").on("click", function() {
        var c = jQuery(this).data("add-class-target");
        jQuery(c).addClass("active")
    });
    jQuery("[data-toggle-class-target]").on("click", function() {
        var d = jQuery(this).data("toggle-class-target");
        var c = jQuery(this).data("toggle-class-target-value");
        if (!c) {
            c = "hide"
        }
        jQuery(d).toggleClass(c)
    });
    jQuery("[data-toggle-animate]").on("click", function() {
        var c = jQuery(this).data("toggle-animate");
        jQuery(c).slideToggle("fast")
    });
    window.addEventListener("load", function(c) {
        $(".sticky-element").sticky({
            topSpacing: 12,
            zIndex: 10
        })
    })
});
$(window).load(function() {
    setTabletMenuSize()
});
$(document).ready(function() {
    var a = window.navigator.userAgent;
    if (a.match(/iPad/i) || a.match(/iPhone/i)) {
        $(function() {
            $(".cards-group-01 > .col-md-6.flexbox-layout > .col-md-6").matchHeight();
            $(".cards-group-01 > .col-md-6").matchHeight();
            var s = $(".cards-group-01 > .col-md-6.flexbox-layout > .col-xs-12");
            var m = s.height();
            s.children().height(m);
            var d = $(".cards-group-02 > .col-md-6.flexbox-layout > .col-xs-12");
            var u = d.height();
            d.children().height(u);
            var t = $(".cards-group-02 > .col-md-6");
            var q = $(".cards-group-03 > .col-xs-12");
            var C = $(".cards-group-03 > .col-xs-12 > .col-md-12");
            var o = $(".cards-group-03 > .col-xs-12 > .col-xs-12 .flexbox-layout > .col-md-4");
            var c = $(".cards-group-04 > .col-xs-12");
            var e = $(".cards-group-04 > .col-xs-12.col-divider > .col-md-6");
            var B = $(".cards-group-04 > .col-xs-12.col-divider .col-xs-12:first-child");
            var r = 1;
            if (r == 1) {
                $(".cards-group-02 > .col-md-6.flexbox-layout > .col-xs-12 .col-md-6").matchHeight();
                t.matchHeight();
                o.matchHeight();
                C.matchHeight();
                q.matchHeight();
                $(".cards-group-04 > .col-xs-12.col-divider:first-child .col-md-6").matchHeight();
                $(".cards-group-04 > .col-xs-12 > .col-md-6").matchHeight();
                c.matchHeight();
                r = 0
            }
            var h = t.height();
            var g = $(".cards-group-02 > .col-md-6.flexbox-layout .cold-xs-12:first-child").height();
            var f = $(".cards-group-02 > .col-md-6.flexbox-layout:eq(2)").height();
            var v = h - (g + f);
            $(".cards-group-02 > .col-xs-12 > .col-xs-12").height(w + (A));
            var z = q.height();
            var y = C.height();
            var w = o.height();
            var A = z - (y + w);
            C.height(y + (A / 2));
            $(".cards-group-03 > .col-xs-12 > .col-xs-12").height(w + (A / 2));
            var p = c.height();
            var l = B.height();
            var j = e.height();
            var b = p - (l + j);
            if ($(".cards-group-04 > .col-xs-12.col-divider > .col-xs-12:first-child").hasClass("card--2y")) {
                B.height(l + (b / 2));
                e.height(j + (b / 4))
            } else {
                e.height(j + (b / 2))
            }
            $(".flexbox-layout > .col-xs-12 > .card").matchHeight();
            $(".flexbox-layout > .col-xs-12 > .col-sm-12 > .card").matchHeight();
            $(".page-footer-top > .col-xs-12").matchHeight()
        })
    }
    if (/^((?!chrome|android|crios|fxios).)*safari/i.test(a)) {
        $(function() {
            $(".flexbox-layout.row").addClass("row--fix");
            if ($("#dialog-loading").length) {
                window.addEventListener("pageshow", function(b) {
                    $("body").removeClass("is-blocked-scroll");
                    $("#dialog-loading").hide()
                })
            }
        })
    }
});
var headerHeight = 0;
var $mainContainer = null;

function initHeaderHeight() {
    headerHeight = (getWindowSize() >= desktopBreakpoint1 && !jQuery("body").is(".header-simple") && !jQuery("body").is(".header-1") && !jQuery("body").is(".header-services") ? parseInt(jQuery("#main-header").innerHeight()) + 26 : parseInt(jQuery("#main-header").innerHeight()));
    if (!jQuery("body #main-header").is(".active")) {
        jQuery("body").css({
            "margin-top": "0px",
            "padding-top": parseInt(headerHeight) + "px"
        })
    }
    jQuery("body > .site-wrapper").css({
        "margin-top": "0px",
        "padding-top": "0px"
    })
}
var cnBannerFull = ".banner-full:not(.banner-full--slider)",
    cnBannerFitted = "banner--fitted",
    cnBannerImg = "img",
    cnBannerTint = ".banner-full__tint",
    cnBannerVideo = ".embedded-video",
    attrLoaded = "loaded",
    $bannersFull = null;

function manageBannersFull(d) {
    if (!d.hasClass(cnBannerFitted)) {
        var c = d.find(cnBannerImg),
            a = d.find(cnBannerTint),
            b = d.find(cnBannerVideo);
        if (c.length > 0) {
            c.css({
                position: "absolute",
                left: parseInt(-(d.offset().left)) + "px",
                width: parseInt(getWindowSize()) + "px",
                "max-width": "none",
                "min-width": "0px",
                margin: "0px",
                "object-fit": "cover"
            })
        }
        if (a.length > 0) {
            a.css({
                position: "absolute",
                left: parseInt(-(d.offset().left)) + "px",
                width: parseInt(getWindowSize()) + "px",
                "max-width": "none",
                "min-width": "0px",
                margin: "0px"
            })
        }
        if (b.length > 0) {
            b.css({
                position: "absolute",
                left: parseInt(-(d.offset().left)) + "px",
                width: parseInt(getWindowSize()) + "px",
                "max-width": "none",
                "min-width": "0px",
                margin: "0px"
            })
        }
    }
}

function initBannersFull() {
    if ($bannersFull === null) {
        $bannersFull = jQuery(cnBannerFull)
    }
    if ($bannersFull.length > 0) {
        $bannersFull.each(function(b) {
            var a = null;
            if (typeof jQuery(this).data(attrLoaded) === "undefined") {
                a = jQuery(this).find(cnBannerImg)
            }
            manageBannersFull(jQuery(this));
            if (a !== null && a.length > 0) {
                a.load(function() {
                    jQuery(this).parents(cnBannerFull).first().removeClass("invisible");
                    jQuery(this).parents(cnBannerFull).first().attr("data-" + attrLoaded, 1)
                }).each(function() {
                    if (this.complete) {
                        var c = new Date();
                        $(this).attr("src", $(this).attr("src") + "?v=" + c.getTime());
                        $(this).load()
                    }
                });
                if (jQuery(this).parents(cnBannerFull).first().data(attrLoaded) == 1) {
                    jQuery(this).parents(cnBannerFull).first().removeClass("invisible")
                }
            }
        })
    }
}

function initAnchors() {
    var d = "data-target";

    function c(m, f) {
        var l = jQuery(m);
        var j = jQuery("#main-header");
        if (l.length > 0 && j.length > 0) {
            var o = 0;
            if (typeof f !== "undefined" && l.attr("id") == f.attr("id")) {
                o = 250
            }
            var g = l.offset().top;
            var h = g - j.outerHeight();
            if (!j.hasClass("smaller") && g > 68 && getWindowSize() >= desktopBreakpoint1) {
                h += 100
            }
            if ((l.data("animate") !== undefined && l.data("animate") !== "false") || l.data(d) === undefined) {
                setTimeout(function() {
                    jQuery("html,body").animate({
                        scrollTop: parseInt(h) + "px"
                    }, 1, function() {}).promise().done(p)
                }, o)
            } else {
                setTimeout(function() {
                    jQuery("html,body").animate({
                        scrollTop: parseInt(h) + "px"
                    }, 500, function() {}).promise().done(p)
                }, o)
            }

            function p() {
                var t = "[data-collapse]";
                var r = "[data-collapse-trigger]";
                var q = "is-trigger-active";
                var u = "anchor";
                var s = l.find(r);
                if (s.length > 0 && s.parents(".card").length == 0) {
                    if (!s.first().hasClass(q)) {
                        s.get(0).click()
                    }
                } else {
                    var s = l.parents(t);
                    (s.length > 0 ? s = s.first() : s = null);
                    if (s != null) {
                        s = s.find(r);
                        if (s.length > 0) {
                            if (!s.first().hasClass(q) && (typeof f === "undefined" || f.attr("id") != s.first().attr("id"))) {
                                s.get(0).click()
                            }
                        }
                    }
                }
            }
        }
    }(function() {
        var f = jQuery(".anchor");
        if (f.length > 0) {
            f.each(function(g) {
                if (typeof jQuery(this).attr(d) === "undefined" && typeof jQuery(this).attr("href") !== "undefined") {
                    jQuery(this).attr(d, jQuery(this).attr("href"))
                }
            })
        }
        f = null
    })();
    var b = window.location.href.split("#");
    (b.length > 0 ? b = b[0] : b = "");
    jQuery("body").on("click", ".anchor", function(g) {
        var f = jQuery(this).attr("href").split("#");
        (f.length > 0 ? f = f[0] : f = "");
        if (f === "" || f === b) {
            g.preventDefault();
            var h = jQuery(this).data("target").split("#");
            (h.length > 1 ? h = h[h.length - 1] : h = "");
            if (h != "") {
                c("#" + h, jQuery(this))
            }
        }
    });
    if (location.hash !== "") {
        var a = location.hash;
        var e = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        if (e) {
            $(window).scrollTop(0);
            $(window).on("load", function() {
                c(a)
            })
        } else {
            $(document).ready(function() {
                c(a)
            })
        }
    }
}
var buttonXAxis = 0;
var buttonYAxis = 0;
var $forms = null;
var $button = null;
var button2XAxis = 0;
var button2YAxis = 0;
var $form2 = null;
var $button2 = null;
var mobileBreakpoint = 544;
var tabletBreakpoint = 768;
var desktopBreakpoint1 = 992;
var desktopBreakpoint = 1200;

function isFormVisible(c) {
    if (c.length > 0) {
        var e = jQuery(window).scrollTop();
        var b = jQuery(window).scrollTop() + jQuery(window).height();
        var a = c.offset().top;
        var d = c.offset().top + c.height();
        return ((a > e && a < b) || (d > e && d < b) || (e >= a && b <= d)) ? true : false
    }
}

function isAccessVisible() {
    if ($form2.length > 0) {
        var d = jQuery(window).scrollTop();
        var b = jQuery(window).scrollTop() + jQuery(window).height();
        var a = $form2.offset().top;
        var c = $form2.offset().top + $form2.height();
        return ((a > d && a < b) || (c > d && c < b) || (d >= a && b <= c)) ? true : false
    }
}

function setVisibleElement(a, b) {
    if (a != null) {
        a.css({
            display: (b ? "block" : "none")
        })
    }
}

function getWindowSize() {
    return jQuery(window).width()
}

function getWindowHeight() {
    return jQuery(window).height()
}

function initFloatingFormButton() {
    if ($button != null) {
        (function() {
            if (typeof buttonXAxis !== "undefined") {
                buttonXAxis = getWindowSize() - (getWindowSize() / 2 + (jQuery("main").width() / 2))
            }
            if (typeof buttonYAxis !== "undefined") {
                if (getWindowSize() >= tabletBreakpoint) {
                    buttonYAxis = jQuery(window).height() / 2 + ($button.height() / 2)
                } else {
                    buttonYAxis = 0
                }
            }
            if (!isAccessVisible()) {
                buttonYAxis += $button2.outerHeight(true) + 2
            }
            $button.css({
                right: parseInt(buttonXAxis) + "px",
                bottom: parseInt(buttonYAxis) + "px",
                "z-index": "50"
            })
        })();
        var a = false;
        for (var b = 0; b < $forms.length && !a; b++) {
            var c = jQuery($forms[b]);
            if (isFormVisible(c)) {
                a = true
            }
        }
        if (!a) {
            setVisibleElement($button, true)
        } else {
            setVisibleElement($button, false)
        }
    }
}

function initFloatingAccessButton() {
    if ($button2 != null) {
        (function() {
            if (typeof button2XAxis !== "undefined") {
                button2XAxis = getWindowSize() - (getWindowSize() / 2 + (jQuery("main").width() / 2))
            }
            if (typeof button2YAxis !== "undefined") {
                if (getWindowSize() >= tabletBreakpoint) {
                    button2YAxis = jQuery(window).height() / 2 + ($button2.height() / 2)
                } else {
                    button2YAxis = 0
                }
            }
            $button2.css({
                right: parseInt(button2XAxis) + "px",
                bottom: parseInt(button2YAxis) + "px",
                "z-index": "50"
            })
        })();
        if (tabletBreakpoint > getWindowSize()) {
            if (isAccessVisible()) {
                setVisibleElement($button2, false)
            } else {
                setVisibleElement($button2, true)
            }
        } else {
            $button2.css({
                display: "none"
            })
        }
    }
}
jQuery(document).ready(function() {
    jQuery("body").removeClass("noscript");
    initHeaderHeight();
    initBannersFull();
    jQuery(window).resize(function() {
        initHeaderHeight();
        initBannersFull()
    });
    var a = null;
    jQuery("#main-nav-menu .nav-dropdown").on("keyup", function(c) {
        var b = c.charCode || c.keyCode || c.which;
        var d = jQuery(this).siblings(".dropdown-button-header:not(.virtual-campus-button):visible");
        if (getWindowSize() >= desktopBreakpoint1 && b == "27") {
            d.click();
            setTimeout(function() {
                d.focus()
            }, 200)
        }
    });
    jQuery('.mobile-menu .mobile-buttons .mobile-button[data-toggle="#main-nav-menu, .mobile-menu"]').click(function(b) {
        var c = jQuery("#main-nav-menu, .mobile-menu").find(".selected:first");
        c.trigger("click").removeClass("selected")
    });
    jQuery(document).on("click", function(c) {
        var b = c.target;
        if ($(b).parents("#nav-menu-scrollable-container-expand").length == 0) {
            jQuery(".nav-menu>ul>li").removeClass("show active")
        }
    });
    jQuery(".no-touchevents button").on("mouseup", function(b) {
        if (typeof jQuery(this).data("href") !== "undefined") {
            b.preventDefault();
            window.location.href = jQuery(this).data("href")
        }
    });
    jQuery(".page-overlay.clickable").on("click", function() {
        jQuery("#main-header").find("[data-animated]").attr("data-animated", false)
    });
    jQuery("body").on("click", ".resetter", function(c) {
        c.preventDefault();
        var b = jQuery(this).data("reset") || "";
        if (b != "") {
            jQuery(b).val("")
        }
    });
    initAnchors();
    $forms = jQuery("[data-form-hide-sticky]");
    $button = jQuery("#vmi-button");
    $form2 = jQuery("#ao-form");
    $button2 = jQuery("#ao-button");
    if ($forms.length > 0 && $button.length > 0) {
        initFloatingFormButton();
        jQuery(window).scroll(function() {
            initFloatingFormButton()
        });
        jQuery(window).resize(function() {
            initFloatingFormButton()
        })
    } else {
        if ($button.length > 0) {
            setVisibleElement($button, false)
        }
    }
    if ($form2.length > 0 && $button2.length > 0) {
        initFloatingAccessButton();
        jQuery(window).scroll(function() {
            initFloatingAccessButton()
        });
        jQuery(window).resize(function() {
            initFloatingAccessButton()
        })
    } else {
        if ($button2.length > 0) {
            setVisibleElement($button2, false)
        }
    }
});

function getHeaderHeight() {
    return jQuery("#main-header").outerHeight()
}

function smoothScroll(b, a) {
    if (b) {
        var c = 0;
        var e = null;
        if (a === true) {
            c = getHeaderHeight();
            e = function() {
                c = getHeaderHeight();
                jQuery("html, body").animate({
                    scrollTop: d.offset().top - c
                }, 400)
            }
        }
        if (location.pathname.replace(/^\//, "") === b.pathname.replace(/^\//, "") && location.hostname === b.hostname) {
            var d = jQuery(b.hash);
            d = d.length ? d : jQuery("[name=" + b.hash.slice(1) + "]");
            if (d.length) {
                jQuery("html, body").animate({
                    scrollTop: d.offset().top - c
                }, 800, "swing", e);
                return false
            }
        }
    }
}
jQuery(document).ready(function() {
    var d = jQuery("#main-header");
    var b = jQuery("#nav-menu-scrollable-container");
    var a = jQuery("#nav-menu-scrollable-container-expand");
    var c = jQuery(".nav-menu-top .top-logo-desktop a");
    jQuery(window).on("scroll", function(h) {
        if (jQuery("#login-dropdown").hasClass("hide")) {
            if (getWindowSize() >= desktopBreakpoint1) {
                var g = window.pageYOffset || document.documentElement.scrollTop;
                var f = Math.min(g, 68);
                if (b.css("top") !== f) {
                    b.css("top", -f);
                    a.css("height", 68 - f)
                }
                c.css("height", 136 - f);
                if (f < g) {
                    d.addClass("smaller")
                } else {
                    if (d.hasClass("smaller")) {
                        d.removeClass("smaller")
                    }
                }
            }
        }
    });
    jQuery(".virtual-campus-button").click(function(f) {
        f.preventDefault();
        f.stopPropagation();
        var e = jQuery(f.target);
        jQuery("html").toggleClass("prevent-scroll-html");
        jQuery("body").toggleClass("prevent-scroll-body")
    });
    jQuery("[data-scroll-lock]").click(function(h) {
        var j = !$("#main-header").hasClass("active");
        var g = !(getWindowSize() < mobileBreakpoint);
        if (j || g) {
            return
        }
        var f = jQuery(h.currentTarget);
        var e = f.attr("data-scroll-container");
        if (typeof e !== "undefined" && e !== "") {
            jQuery("html").addClass("prevent-scroll-html");
            jQuery("body").addClass("prevent-scroll-body")
        }
    });
    jQuery("[data-scroll-unlock]").click(function(g) {
        var f = jQuery(g.currentTarget);
        var e = f.attr("data-scroll-container");
        if (typeof e !== "undefined" && e !== "") {
            jQuery("html").removeClass("prevent-scroll-html");
            jQuery("body").removeClass("prevent-scroll-body")
        }
    });
    jQuery("[data-scroll-toggle]").click(function(g) {
        var f = jQuery(g.currentTarget);
        var e = f.attr("data-scroll-container");
        if (typeof e !== "undefined" && e !== "") {
            jQuery("html").toggleClass("prevent-scroll-html");
            jQuery("body").toggleClass("prevent-scroll-body")
        }
    });
    jQuery("body").on("click keydown", function(u) {
        var g = false;
        var z = false;
        if (u.type !== "keydown" && "key" in u) {
            g = (u.key === "Escape" || u.key === "Esc");
            z = (u.key === "Enter" || u.key === "Esc")
        } else {
            g = (u.keyCode === 27);
            z = (u.keyCode === 13)
        }
        var w = u.type === "click" || z;
        if (u.type === "keydown" && !g) {
            return
        }
        var h = jQuery(u.target);
        var A = $("[data-scroll-container]");
        var q = [];
        var f = !h.is("#login-dropdown");
        var y = !(h.is(".virtual-campus-dropdown [data-toggle]") || h.is(".virtual-campus-dropdown .icon--close"));
        var s = h.parents(".virtual-campus-dropdown").length === 0;
        var e = (h.parents("[data-scroll-lock]").length !== 0 || h.is("[data-scroll-lock]"));
        var x = (h.parents("[data-scroll-toggle]").length !== 0 || h.is("[data-scroll-toggle]"));
        var m = (h.parents("[data-scroll-unlock]").length !== 0 || h.is("[data-scroll-unlock]"));
        var l = false;
        var o = A.length;
        for (var v = o; v--;) {
            var r = A[v].getAttribute("data-scroll-container");
            q.push(jQuery(r))
        }
        var p = q.length;
        for (var t = p; t--;) {
            if (h.parents(q[t])) {
                l = true
            }
        }
        if (((g) && (x && m && w)) || ((w && !l && !x && !m) && (f && y && s && !e))) {
            jQuery("html").removeClass("prevent-scroll-html");
            jQuery("body").removeClass("prevent-scroll-body")
        }
    });
    jQuery(".search-form-container .resetter").on("click", function(f) {
        jQuery(".search-form-button.active, .mobile-button.active").each(function() {
            if (jQuery(this).hasClass("icon--search") || jQuery(this).find(".icon--search").length > 0) {
                jQuery(this).trigger("click")
            }
        })
    });
    jQuery('.banner-full a[href*="#"]:not([href="#"])').on("click", function() {
        smoothScroll(this)
    });
    jQuery('a[href*="#"]:not([href="#"]):not(".banner-full a")').on("click", function() {
        smoothScroll(this, true)
    })
});
$(document).ready(function() {
    $("select[data-id-bind]").change(function() {
        var c = $(this).val();
        var a = $(this).attr("data-id-bind");
        var d = $(".select--custom--dropdown__values[data-select-id='" + a + "']");
        if (c !== "") {
            $(d).children().each(function() {
                var e = $(this);
                e.removeClass("selected");
                if (e.attr("data-bind")) {
                    if (e.attr("data-bind") == c) {
                        e.show()
                    } else {
                        e.hide()
                    }
                }
            })
        } else {
            $(d).children().each(function() {
                var e = $(this);
                e.show()
            })
        }
        var b = $(d).children().first().text();
        $(d).prev().children().first().text(b);
        $(d).children().first().show();
        $(d).children().first().addClass("selected")
    })
});

function modal_openById(b) {
    var a = "#" + b;
    document.querySelector(a).classList.add("is-modal-open");
    document.querySelector("body").classList.add("is-blocked-scroll");
    document.querySelector(a).querySelector("[data-modal-dialog]").setAttribute("aria-hidden", "false")
}

function modal_closeById(a) {
    document.getElementById(a).classList.remove("is-modal-open");
    document.getElementById(a).querySelector("[data-modal-dialog]").setAttribute("aria-hidden", "true");
    document.querySelector("body").classList.remove("is-blocked-scroll")
}
window.onload = function() {
    jQuery("[data-collapse-trigger]").click(function(d) {
        var b = jQuery(d.target);
        var c = jQuery(document).find(".card--with-collapse .is-trigger-active").children();
        var a = b.closest(".card__footer");
        c.not(b).click();
        c.closest(".card__footer").css({
            "z-index": "1",
            position: "relative !important"
        });
        a.css({
            "z-index": "15",
            position: "relative !important"
        })
    })
};
$(document).ready(function() {
    $("[data-collapse]").on("click", "[data-tab-system] li", function(u) {
        var t = $(u.target);
        var v;
        var r;
        var s;
        if (!t.hasClass("is-active")) {
            v = t.parents("[data-collapse-content]");
            r = v.find("[data-collapse-inner]");
            setTimeout(function() {
                s = r.outerHeight(true);
                v.css("max-height", s + "px")
            }, 1)
        }
    });

    function l() {
        var r = (getWindowSize() / 2);
        var s = $(".footer-bg-right-dynamic");
        if (s.length > 0 && getWindowSize() > desktopBreakpoint) {
            s.width(r)
        }
    }
    l();
    $(window).resize(function(r) {
        l();
        d()
    });
    (function() {
        var r = jQuery(".no-objectfit .card__image img, .no-object-fit .card__image img, .no-object-fit .card--image-vertical .img-wpr__cover ");
        var u = r.length;
        for (var t = u; t--;) {
            s(r[t])
        }

        function s(v) {
            var w = jQuery(v);
            if (w.height() > w.width()) {
                w.addClass("portrait")
            } else {
                w.addClass("landscape")
            }
        }
    })();
    var a = 544,
        o = 768,
        q = 992,
        e = 1200,
        g = 1400,
        b = 2000;

    function d() {
        var r = $(".hidden-xs, .hidden-sm, .hidden-md, .hidden-lg, .hidden-xl");
        r.each(function(t, s) {
            if (s.hasAttribute("data-dynamic-aria-hidden")) {
                if ($(this).hasClass("hidden-xs") && c(0, a)) {
                    $(this).attr("aria-hidden", "true")
                } else {
                    if ($(this).hasClass("hidden-sm") && c(a, o)) {
                        $(this).attr("aria-hidden", "true")
                    } else {
                        if ($(this).hasClass("hidden-md") && c(o, q)) {
                            $(this).attr("aria-hidden", "true")
                        } else {
                            if ($(this).hasClass("hidden-lg") && c(q, e)) {
                                $(this).attr("aria-hidden", "true")
                            } else {
                                if ($(this).hasClass("hidden-xl") && c(e, 99999)) {
                                    $(this).attr("aria-hidden", "true")
                                } else {
                                    $(this).attr("aria-hidden", "false")
                                }
                            }
                        }
                    }
                }
            }
        })
    }

    function c(s, r) {
        var t = $(window).width();
        return t.between(s, r)
    }
    Number.prototype.between = function(t, s) {
        var u = Math.min.apply(Math, [t, s]),
            r = Math.max.apply(Math, [t, s]);
        return this > u && this < r
    };
    d();
    $('[data-toggle="#nav-submenu-lang"]').on("click", function() {
        var r = $(this).attr("aria-expanded");
        if (r == "true") {
            $(this).attr("aria-expanded", "false")
        } else {
            $(this).attr("aria-expanded", "true")
        }
    });
    $(".close-button").on("click", function() {
        $('[data-toggle="#nav-submenu-lang"],.virtual-campus-button').attr("aria-expanded", "false");
        var r = $(this).closest("li").find('[data-toggle="#nav-submenu-lang"]');
        r.each(function(s) {
            if (this.offsetParent !== null) {
                $(this).focus()
            }
        })
    });
    $('[data-toggle="#login-dropdown"]').on("click", function() {
        $(".virtual-campus-button").focus()
    });
    $(".dropdown-menu .custom-close").on("click", function() {
        $('[data-toggle="#login-dropdown"]').focus()
    });
    $(".mobile-menu .clickable").on("click", function() {
        $(".menu-mobile-container .menu-bar").focus()
    });
    $(".search-container-top .resetter").click(function() {
        $(".search-form-button").focus();
        $('[data-toggle="#search-form-container-mobile"]').focus()
    });
    $(".dropdown-button-header").on("click", function() {
        $(".dropdown-menu ul li:first-child a").focus()
    });
    var m = ".no-touchevents #main-nav-menu > ul > li:not(.virtual-campus-button-container)";
    $(m).on("mouseenter", function(s) {
        if (getWindowSize() > desktopBreakpoint1) {
            var r = $(s.currentTarget);
            var t = r.find(".dropdown-button-header");
            setTimeout(function() {
                t.click()
            }, 200)
        }
    });
    $(m).on("mouseleave", function(s) {
        if (getWindowSize() > desktopBreakpoint1) {
            var r = $(s.currentTarget);
            var t = r.find(".dropdown-button-header");
            setTimeout(function() {
                if (t.hasClass("active")) {
                    t.click()
                }
            }, 300)
        }
    });
    $(".footer-top-title button").on("click", function() {
        var r = $(this).closest(".footer-top-title");
        if (r.attr("aria-expanded") !== "undefined" && r.attr("aria-expanded") === "false") {
            r.attr("aria-expanded", "true")
        } else {
            r.attr("aria-expanded", "false")
        }
    });
    $(".footer-top-title button").on("focus", function() {
        var r = $(this).closest(".footer-top-title");
        if (r.hasClass("active")) {
            r.attr("aria-expanded", "true")
        } else {
            r.attr("aria-expanded", "false")
        }
    });
    $(".virtual-campus-button").on("click", function() {
        var r = $(this).attr("aria-expanded");
        if (r == "true") {
            $(this).attr("aria-expanded", "false")
        } else {
            $(this).attr("aria-expanded", "true")
        }
    });
    $(document).on("keyup", function(r) {
        var s;
        if (r.keyCode === 27) {
            $(".virtual-campus-button").attr("aria-expanded", "false");
            $('[data-toggle="#nav-submenu-lang"]').attr("aria-expanded", "false");
            if ($(s).attr("data-toggle").indexOf("#main-nav-menu") !== -1) {
                $(s).focus()
            }
            if ($(s).attr("data-toggle").indexOf("#nav-submenu") !== -1) {
                $('.header-container [data-toggle="#main-nav-menu, .mobile-menu"]').focus()
            }
        }
    });
    $("#nav-submenu-lang").on("keydown", function(r) {
        if (r.keyCode == 27) {
            r.preventDefault();
            $(".nav-brands-desktop .desktop-lang-box").focus()
        }
    });
    var p = $("#nav-submenu-lang");
    var f = p.find("li , .close-button");
    var h = f.first();
    var j = f.last();
    j.on("keydown", function(r) {
        if ((r.which === 9 && !r.shiftKey)) {
            r.preventDefault();
            h.focus()
        }
    });
    h.on("keydown", function(r) {
        if ((r.which === 9 && r.shiftKey)) {
            r.preventDefault();
            j.focus()
        }
    });
    $(document).click(function(r) {
        $(".virtual-campus-button").attr("aria-expanded", "false")
    });
    $('.header-container [data-toggle="#main-nav-menu, .mobile-menu"]').click(function(s) {
        var r = $(s.target);
        var t;
        if (c(0, q)) {
            t = $(".nav-menu li:first button:visible");
            setTimeout(function() {
                t.focus()
            }, 1)
        }
    })
});

function checkMenuColumns() {
    var c = "data-columns",
        j = "data-column-items",
        a = "data-column-hidden-class";
    var m = document.querySelectorAll("[" + c + "]");
    var g = "WebkitAppearance" in document.documentElement.style;
    if (g) {
        var d = m.length;
        for (var f = d; f--;) {
            var e = m[f];
            var b = e.getAttribute(c);
            if (b !== null && b !== "") {
                h(e, b)
            }
        }
    }

    function h(q, l) {
        var x = q.getAttribute(a);
        var y = x !== null && x !== "" ? x : "hidden";
        var u = q.getAttribute(j);
        var z = u !== null && u !== "" ? u : "div";
        var w = q.querySelectorAll(z);
        var s = w.length;
        while (s % l !== 0) {
            var p = w[0].cloneNode(true);
            p.setAttribute("aria-hidden", "true");
            var v = y.split(" ");
            var t = v.length;
            for (var r = t; r--;) {
                var o = v[r];
                p.classList.add(o)
            }
            q.appendChild(p);
            s++
        }
    }
}

function lockEmptySelect() {
    var e = "data-id-bind",
        f = "[data-select]",
        j = "[data-block-bind]";
    var b = $(j);
    var g = b.length;
    for (var d = g; d--;) {
        var c = $(b.get(d));
        var h = c.attr(e);
        var a = $(f + ":has(#" + h + ")");
        a.addClass("is-select-locked");
        a.bind("click", {
            param: c
        }, function(l) {
            return l.data.param.val() !== ""
        });
        c.bind("change", {
            param: a
        }, function(l) {
            if (this.value === "") {
                l.data.param.addClass("is-select-locked")
            } else {
                l.data.param.removeClass("is-select-locked")
            }
        })
    }
}

function setTabletMenuSize() {
    if (getWindowSize() >= tabletBreakpoint && getWindowSize() < desktopBreakpoint1) {
        var c = $("#main-nav-menu");
        var a = $("#main-header").outerHeight();
        var e = getWindowHeight();
        var d = parseFloat(c.css("max-height"));
        var b = e - a;
        if (d + a > e) {
            c.css("max-height", b + "px")
        }
    }
}

function portalScrollTo(a, f, e, d) {
    if (!d.data || (d.data && d.data.isFakeEvent !== "true")) {
        var c = f === null ? 200 : f;
        var b = e === null ? false : e;
        setTimeout(function() {
            var g = a.offset().top;
            var h = $("html, body");
            h.bind("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(j) {
                if (j.which > 0 || j.type === "mousedown" || j.type === "mousewheel" || j.type === "touchmove") {
                    h.stop()
                }
            });
            if (b) {
                h.animate({
                    scrollTop: g - 120
                }, c)
            } else {
                h.scrollTop(g - 120)
            }
        }, c)
    }
}

function getCollapseAnchor() {
    var b;
    if (location.hash !== "") {
        var a = $(location.hash);
        if (a && a.length > 0) {
            b = a.parents("[data-collapse-anchor]")
        }
    }
    return b
}

function scrollToCollapseHash() {
    var a = getCollapseAnchor();
    if (a) {
        portalScrollTo(a, 200, true)
    }
}

function clickFirstCollapse() {
    if (!getCollapseAnchor()) {
        var b = $("#column-2 #layout-column_column-2 .portlet-boundary");
        var d = null;
        for (var a = 0; a < b.length && d == null; a++) {
            var c = $(b[a]);
            if (c.outerHeight() > 20) {
                d = c
            }
        }
        if (d && d.find(".is-collapse-exception").length === 0 && d.find("[data-collapse]").length > 0) {
            var e = d.first("[data-collapse]").get(0);
            CollapseManager.getInstance().fw_clickCollapseTrigger(e)
        }
    }
}

function checkCollapseAnchors() {
    var c = $("[data-collapse-anchor]");
    var d = c.find("[data-collapse-trigger]");
    for (var a = 0; a < d.length; a++) {
        var b = d[a];
        b.addEventListener("click", portalScrollTo.bind(this, $(b), 200, true))
    }
}

function makeInfographicsResponsive() {
    jQuery("#iframe-infographics").on("load", function() {
        var b = this;
        var c = null;
        try {
            c = b.contentDocument || b.contentWindow.document
        } catch (d) {
            void(0)
        }
        if (c) {
            a(c, b);
            c.addEventListener("click", function() {
                setTimeout(function() {
                    a(c, b)
                }, 300)
            });
            window.addEventListener("resize", function() {
                setTimeout(function() {
                    a(c, b)
                }, 300)
            })
        } else {
            b.classList.add("is-access-denied")
        }
    });

    function a(c, b) {
        var d = c.body.querySelector("#main-global");
        var e = d.offsetHeight;
        b.style.height = (e + 35) + "px"
    }
}
document.addEventListener("DOMContentLoaded", function() {
    checkMenuColumns();
    lockEmptySelect();
    checkCollapseAnchors();
    makeInfographicsResponsive()
});
window.addEventListener("load", function() {
    scrollToCollapseHash();
    clickFirstCollapse()
});
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
})(function(h) {
    var b = -1,
        g = -1;
    var e = function(j) {
        return parseFloat(j) || 0
    };
    var f = function(p) {
        var j = 1,
            m = h(p),
            l = null,
            o = [];
        m.each(function() {
            var q = h(this),
                s = q.offset().top - e(q.css("margin-top")),
                r = o.length > 0 ? o[o.length - 1] : null;
            if (r === null) {
                o.push(q)
            } else {
                if (Math.floor(Math.abs(l - s)) <= j) {
                    o[o.length - 1] = r.add(q)
                } else {
                    o.push(q)
                }
            }
            l = s
        });
        return o
    };
    var d = function(j) {
        var l = {
            byRow: true,
            property: "height",
            target: null,
            remove: false
        };
        if (typeof j === "object") {
            return h.extend(l, j)
        }
        if (typeof j === "boolean") {
            l.byRow = j
        } else {
            if (j === "remove") {
                l.remove = true
            }
        }
        return l
    };
    var a = h.fn.matchHeight = function(j) {
        var m = d(j);
        if (m.remove) {
            var l = this;
            this.css(m.property, "");
            h.each(a._groups, function(o, p) {
                p.elements = p.elements.not(l)
            });
            return this
        }
        if (this.length <= 1 && !m.target) {
            return this
        }
        a._groups.push({
            elements: this,
            options: m
        });
        a._apply(this, m);
        return this
    };
    a.version = "master";
    a._groups = [];
    a._throttle = 80;
    a._maintainScroll = false;
    a._beforeUpdate = null;
    a._afterUpdate = null;
    a._rows = f;
    a._parse = e;
    a._parseOptions = d;
    a._apply = function(r, m) {
        var p = d(m),
            o = h(r),
            q = [o];
        var s = h(window).scrollTop(),
            l = h("html").outerHeight(true);
        var j = o.parents().filter(":hidden");
        j.each(function() {
            var t = h(this);
            t.data("style-cache", t.attr("style"))
        });
        j.css("display", "block");
        if (p.byRow && !p.target) {
            o.each(function() {
                var t = h(this),
                    u = t.css("display");
                if (u !== "inline-block" && u !== "flex" && u !== "inline-flex") {
                    u = "block"
                }
                t.data("style-cache", t.attr("style"));
                t.css({
                    display: u,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            });
            q = f(o);
            o.each(function() {
                var t = h(this);
                t.attr("style", t.data("style-cache") || "")
            })
        }
        h.each(q, function(v, w) {
            var u = h(w),
                t = 0;
            if (!p.target) {
                if (p.byRow && u.length <= 1) {
                    u.css(p.property, "");
                    return
                }
                u.each(function() {
                    var x = h(this),
                        z = x.attr("style"),
                        A = x.css("display");
                    if (A !== "inline-block" && A !== "flex" && A !== "inline-flex") {
                        A = "block"
                    }
                    var y = {
                        display: A
                    };
                    y[p.property] = "";
                    x.css(y);
                    if (x.outerHeight(false) > t) {
                        t = x.outerHeight(false)
                    }
                    if (z) {
                        x.attr("style", z)
                    } else {
                        x.css("display", "")
                    }
                })
            } else {
                t = p.target.outerHeight(false)
            }
            u.each(function() {
                var y = h(this),
                    x = 0;
                if (p.target && y.is(p.target)) {
                    return
                }
                if (y.css("box-sizing") !== "border-box") {
                    x += e(y.css("border-top-width")) + e(y.css("border-bottom-width"));
                    x += e(y.css("padding-top")) + e(y.css("padding-bottom"))
                }
                y.css(p.property, (t - x) + "px")
            })
        });
        j.each(function() {
            var t = h(this);
            t.attr("style", t.data("style-cache") || null)
        });
        if (a._maintainScroll) {
            h(window).scrollTop((s / l) * h("html").outerHeight(true))
        }
        return this
    };
    a._applyDataApi = function() {
        var j = {};
        h("[data-match-height], [data-mh]").each(function() {
            var m = h(this),
                l = m.attr("data-mh") || m.attr("data-match-height");
            if (l in j) {
                j[l] = j[l].add(m)
            } else {
                j[l] = m
            }
        });
        h.each(j, function() {
            this.matchHeight(true)
        })
    };
    var c = function(j) {
        if (a._beforeUpdate) {
            a._beforeUpdate(j, a._groups)
        }
        h.each(a._groups, function() {
            a._apply(this.elements, this.options)
        });
        if (a._afterUpdate) {
            a._afterUpdate(j, a._groups)
        }
    };
    a._update = function(m, l) {
        if (l && l.type === "resize") {
            var j = h(window).width();
            if (j === b) {
                return
            }
            b = j
        }
        if (!m) {
            c(l)
        } else {
            if (g === -1) {
                g = setTimeout(function() {
                    c(l);
                    g = -1
                }, a._throttle)
            }
        }
    };
    h(a._applyDataApi);
    h(window).bind("load", function(j) {
        a._update(false, j)
    });
    h(window).bind("resize orientationchange", function(j) {
        a._update(true, j)
    })
});
(function(l) {
    var r = {
        dots: true,
        arrows: true,
        arrowPrevIcon: "icon icon--arrow-left",
        arrowNextIcon: "icon icon--arrow-right",
        playButton: true,
        playIcon: "icon icon--play-simple",
        pauseIcon: "icon icon--pause",
        autoPlay: true,
        delay: 10000
    };
    var f = [],
        t = [],
        p = 0,
        c = 0,
        o = 0,
        w = false,
        m = {},
        g = [],
        b = null,
        h = null,
        j = null,
        q = null,
        e = null,
        d = null,
        s = null;
    var v = {
        runAutoPlay: function() {
            if (m.autoPlay || e.is(":visible")) {
                q.hide();
                e.show();
                if (s === null) {
                    s = setInterval(function() {
                        j.trigger("click")
                    }, m.delay)
                }
            }
        },
        build: function(x) {
            f.each(function(y) {
                l(this).css({
                    position: "absolute",
                    left: (y === 0 ? p : o) + "px",
                    width: parseInt(l(window).width()) + "px",
                    height: parseInt(x.height()) + "px",
                    "max-width": "none",
                    "min-width": "0px",
                    margin: "0px"
                }).attr("data-order", y);
                if (y == 0) {
                    l(this).addClass("banner-full__item--active")
                }
                if (l(this).prop("tagName").toLowerCase() === "img") {
                    l(this).css({
                        "object-fit": "cover"
                    })
                }
                if (t.length > y) {
                    t.eq(y).css({
                        position: "absolute",
                        left: "0px",
                        width: parseInt(l(window).width()) + "px",
                        height: parseInt(x.height()) + "px",
                        "max-width": "none",
                        "min-width": "0px",
                        margin: "0px",
                        "object-fit": "cover"
                    })
                }
            })
        }
    };
    var u = {
        extend: function(x, y) {
            u[x] = y;
            return this
        },
        init: function(x) {
            m = l.extend(true, {}, r, x);
            g = this;
            g.each(function(y) {
                var z = l(this);
                p = parseInt(-(l(this).offset().left));
                c = parseInt(p - l(window).width());
                o = parseInt(p + l(window).width());
                f = l(this).find("> div:not(.banner-full__controls)");
                if (f.length === 0) {
                    f = l(this).find("img")
                } else {
                    t = l(this).find("img")
                }
                if (f.length > 0) {
                    v.build(z);
                    if (m.arrows || m.playButton || m.dots) {
                        b = l("<div/>", {
                            "class": "banner-full__controls"
                        }).appendTo(z)
                    }
                    h = l("<a/>", {
                        "class": "banner-full__controls-prev " + m.arrowPrevIcon
                    }).appendTo(b);
                    j = l("<a/>", {
                        "class": "banner-full__controls-next " + m.arrowNextIcon
                    }).appendTo(b);
                    if (!m.arrows) {
                        h.css("visibility", "hidden");
                        j.css("visibility", "hidden")
                    }
                    q = l("<a/>", {
                        "class": "banner-full__controls-play " + m.playIcon
                    }).appendTo(b);
                    e = l("<a/>", {
                        "class": "banner-full__controls-pause " + m.pauseIcon
                    }).appendTo(b);
                    if (!m.playButton) {
                        q.css("visibility", "hidden");
                        e.css("visibility", "hidden")
                    }
                    d = l("<ul/>", {
                        "class": "banner-full__controls-dots"
                    }).appendTo(b);
                    f.each(function(A) {
                        b = l("<li/>", {
                            "class": (A == 0 ? "active" : "")
                        }).appendTo(d)
                    });
                    d.find("li").on("click", function() {
                        if (!l(this).hasClass("active") && !w) {
                            clearInterval(s);
                            s = null;
                            w = true;
                            var B = l(this).parents(".banner-full__controls-dots").first().find(".active").index();
                            var A = l(this).index();
                            var F = null;
                            var D = null;
                            if (B < A) {
                                var E = l(this).parents(g.selector).first().find(".banner-full__item--active").first();
                                F = E.next(".banner-full__item");
                                for (var C = B; C < A; C++) {
                                    if (F.length == 0) {
                                        F = l(this).parents(g.selector).first().find(".banner-full__item").first();
                                        F.insertBefore(l(this).parents(g.selector).first().find(".banner-full__controls"))
                                    }
                                    F.css({
                                        display: "none",
                                        left: parseInt(o) + "px"
                                    });
                                    F.css({
                                        display: "block"
                                    });
                                    D = F;
                                    F = F.next(".banner-full__item")
                                }
                                E.animate({
                                    left: parseInt(c) + "px"
                                }, 750, function() {
                                    l(this).removeClass("banner-full__item--active")
                                });
                                D.animate({
                                    left: parseInt(p) + "px"
                                }, 750, function() {
                                    l(this).addClass("banner-full__item--active");
                                    l(this).parents(g.selector).first().find(".banner-full__controls-dots li").removeClass("active").eq(A).addClass("active");
                                    w = false;
                                    v.runAutoPlay()
                                })
                            } else {
                                var E = l(this).parents(g.selector).first().find(".banner-full__item--active").first();
                                F = E.prev(".banner-full__item");
                                for (var C = B; C > A; C--) {
                                    if (F.length == 0) {
                                        F = l(this).parents(g.selector).first().find(".banner-full__item").last();
                                        F.prependTo(l(this).parents(g.selector).first())
                                    }
                                    F.css({
                                        display: "none",
                                        left: parseInt(c) + "px"
                                    });
                                    F.css({
                                        display: "block"
                                    });
                                    D = F;
                                    F = F.prev(".banner-full__item")
                                }
                                E.animate({
                                    left: parseInt(o) + "px"
                                }, 750, function() {
                                    l(this).removeClass("banner-full__item--active")
                                });
                                D.animate({
                                    left: parseInt(p) + "px"
                                }, 750, function() {
                                    l(this).addClass("banner-full__item--active");
                                    l(this).parents(g.selector).first().find(".banner-full__controls-dots li").removeClass("active").eq(A).addClass("active");
                                    w = false;
                                    v.runAutoPlay()
                                })
                            }
                        }
                    });
                    if (!m.dots) {
                        d.css("visibility", "hidden")
                    }
                    h.on("click", function(A) {
                        A.preventDefault();
                        if (!w) {
                            clearInterval(s);
                            s = null;
                            w = true;
                            var B = l(this).parents(g.selector).first().find(".banner-full__item--active").first();
                            if (B) {
                                $prevItem = B.prev(".banner-full__item");
                                if ($prevItem.length == 0) {
                                    $prevItem = l(this).parents(g.selector).first().find(".banner-full__item").last();
                                    $prevItem.prependTo(l(this).parents(g.selector).first())
                                }
                                $prevItem.css({
                                    display: "none",
                                    left: parseInt(c) + "px"
                                });
                                $prevItem.css({
                                    display: "block"
                                });
                                B.animate({
                                    left: parseInt(o) + "px"
                                }, 750, function() {
                                    l(this).removeClass("banner-full__item--active")
                                });
                                $prevItem.animate({
                                    left: parseInt(p) + "px"
                                }, 750, function() {
                                    l(this).addClass("banner-full__item--active");
                                    var C = l(this).parents(g.selector).first().find(".banner-full__controls-dots li.active").prev();
                                    l(this).parents(g.selector).first().find(".banner-full__controls-dots li.active").removeClass("active");
                                    if (C.length == 0) {
                                        C = l(this).parents(g.selector).first().find(".banner-full__controls-dots li").last()
                                    }
                                    C.addClass("active");
                                    w = false;
                                    v.runAutoPlay()
                                })
                            }
                        }
                    });
                    j.on("click", function(A) {
                        A.preventDefault();
                        if (!w) {
                            clearInterval(s);
                            s = null;
                            w = true;
                            var B = l(this).parents(g.selector).first().find(".banner-full__item--active").first();
                            if (B) {
                                $nextItem = B.next(".banner-full__item");
                                if ($nextItem.length == 0) {
                                    $nextItem = l(this).parents(g.selector).first().find(".banner-full__item").first();
                                    $nextItem.insertBefore(l(this).parents(g.selector).first().find(".banner-full__controls"))
                                }
                                $nextItem.css({
                                    display: "none",
                                    left: parseInt(o) + "px"
                                });
                                $nextItem.css({
                                    display: "block"
                                });
                                B.animate({
                                    left: parseInt(c) + "px"
                                }, 750, function() {
                                    l(this).removeClass("banner-full__item--active")
                                });
                                $nextItem.animate({
                                    left: parseInt(p) + "px"
                                }, 750, function() {
                                    l(this).addClass("banner-full__item--active");
                                    var C = l(this).parents(g.selector).first().find(".banner-full__controls-dots li.active").next();
                                    l(this).parents(g.selector).first().find(".banner-full__controls-dots li.active").removeClass("active");
                                    if (C.length == 0) {
                                        C = l(this).parents(g.selector).first().find(".banner-full__controls-dots li").first()
                                    }
                                    C.addClass("active");
                                    w = false;
                                    v.runAutoPlay()
                                })
                            }
                        }
                    });
                    q.on("click", function(A) {
                        A.preventDefault();
                        s = setInterval(function() {
                            j.trigger("click")
                        }, m.delay);
                        q.css("display", "none");
                        e.css("display", "block")
                    });
                    e.on("click", function(A) {
                        A.preventDefault();
                        clearInterval(s);
                        s = null;
                        e.css("display", "none");
                        q.css("display", "block")
                    });
                    v.runAutoPlay()
                } else {
                    l(this).css("display", "none")
                }
            });
            l(window).resize(function() {
                g.each(function(y) {
                    var z = l(this);
                    p = parseInt(-(l(this).offset().left));
                    c = parseInt(p - l(window).width());
                    o = parseInt(p + l(window).width());
                    f = l(this).find("> div:not(.banner-full__controls)");
                    if (f.length > 0) {
                        v.build(z)
                    }
                })
            });
            return this
        }
    };
    var a = "slider";
    l.fn[a] = function(x) {
        if (u[x]) {
            return u[x].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof x === "object" || !x) {
                return u.init.apply(this, arguments)
            } else {
                l.error("Method " + x + "does not exist")
            }
        }
    }
})(jQuery);
jQuery(document).ready(function() {
    if (jQuery(".banner-full.banner-full--slider").length && jQuery().slider) {
        jQuery(".banner-full.banner-full--slider").slider()
    }
});

function TL_Error(b, c) {
    this.name = "TL.Error", this.message = b || "error", this.message_key = this.message, this.detail = c || "";
    var a = new Error;
    a.hasOwnProperty("stack") && (this.stack = a.stack)
}! function(a) {
    a.TL = {
        VERSION: "0.1",
        _originalL: a.TL
    }
}(this), TL.debug = !1, TL.Bind = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, trace = function(a) {
        TL.debug && (window.console ? console.log(a) : "undefined" != typeof jsTrace && jsTrace.send(a))
    }, TL_Error.prototype = Object.create(Error.prototype), TL_Error.prototype.constructor = TL_Error, TL.Error = TL_Error, TL.Util = {
        mergeData: function(b, c) {
            var a;
            for (a in c) {
                Object.prototype.hasOwnProperty.call(c, a) && (b[a] = c[a])
            }
            return b
        },
        extend: function(d) {
            for (var f, c = Array.prototype.slice.call(arguments, 1), g = 0, b = c.length; b > g; g++) {
                f = c[g] || {}, TL.Util.mergeData(d, f)
            }
            return d
        },
        isEven: function(a) {
            return a == parseFloat(a) ? !(a % 2) : void 0
        },
        isTrue: function(a) {
            return null == a ? !1 : 1 == a || "true" == String(a).toLowerCase() || 1 == Number(a)
        },
        findArrayNumberByUniqueID: function(d, g, c, h) {
            for (var b = h || 0, f = 0; f < g.length; f++) {
                g[f].data[c] == d && (b = f)
            }
            return b
        },
        convertUnixTime: function(q) {
            var m, g, d, p, u, c, b = [],
                f = {
                    ymd: "",
                    time: "",
                    time_array: [],
                    date_array: [],
                    full_array: []
                };
            f.ymd = q.split(" ")[0], f.time = q.split(" ")[1], f.date_array = f.ymd.split("-"), f.time_array = f.time.split(":"), f.full_array = f.date_array.concat(f.time_array);
            for (var j = 0; j < f.full_array.length; j++) {
                b.push(parseInt(f.full_array[j]))
            }
            return m = new Date(b[0], b[1], b[2], b[3], b[4], b[5]), g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], d = m.getFullYear(), p = g[m.getMonth()], u = m.getDate(), c = p + ", " + u + " " + d
        },
        setData: function(a, b) {
            a.data = TL.Util.extend({}, a.data, b), "" === a.data.unique_id && (a.data.unique_id = TL.Util.unique_ID(6))
        },
        stamp: function() {
            var a = 0,
                b = "_tl_id";
            return function(c) {
                return c[b] = c[b] || ++a, c[b]
            }
        }(),
        isArray: function() {
            if (Array.isArray) {
                return Array.isArray
            }
            var a = Object.prototype.toString,
                b = a.call([]);
            return function(c) {
                return a.call(c) === b
            }
        }(),
        getRandomNumber: function(a) {
            return Math.floor(Math.random() * a)
        },
        unique_ID: function(d, f) {
            var c = function(a) {
                    return Math.floor(Math.random() * a)
                },
                g = function() {
                    var a = "abcdefghijklmnopqurstuvwxyz";
                    return a.substr(c(32), 1)
                },
                b = function(h) {
                    for (var j = "", a = 0; h > a; a++) {
                        j += g()
                    }
                    return j
                };
            return f ? f + "-" + b(d) : "tl-" + b(d)
        },
        ensureUniqueKey: function(d, f) {
            if (f || (f = TL.Util.unique_ID(6)), !(f in d)) {
                return f
            }
            var c = f.match(/^(.+)(-\d+)?$/)[1],
                g = [];
            for (key in d) {
                key.match(/^(.+?)(-\d+)?$/)[1] == c && g.push(key)
            }
            f = c + "-" + (g.length + 1);
            for (var b = g.length; - 1 != g.indexOf(f); b++) {
                f = c + "-" + b
            }
            return f
        },
        htmlify: function(a) {
            return a.match(/<p>[\s\S]*?<\/p>/) ? a : "<p>" + a + "</p>"
        },
        unhtmlify: function(a) {
            return a = a.replace(/(<[^>]*>)+/g, ""), a.replace('"', "'")
        },
        linkify: function(d) {
            var f = function(h, j, a) {
                    a || (a = "");
                    var l = 30;
                    return j && j.length > l && (j = j.substring(0, l) + "â€¦"), a + "<a class='tl-makelink' href='" + h + "' onclick='void(0)'>" + j + "</a>"
                },
                c = /\b(?:https?|ftp):\/\/([a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|])/gim,
                g = /(^|[^\/>])(www\.[\S]+(\b|$))/gim,
                b = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gim;
            return d.replace(c, function(j, h, m, e) {
                if (m > 0) {
                    var l = e[m - 1];
                    if ('"' == l || "'" == l || "=" == l) {
                        return j
                    }
                }
                return f(j, h)
            }).replace(g, function(e, a, h) {
                return f("http://" + h, h, a)
            }).replace(b, function(e, a) {
                return f("mailto:" + a, a)
            })
        },
        unlinkify: function(a) {
            return a ? (a = a.replace(/<a\b[^>]*>/i, ""), a = a.replace(/<\/a>/i, "")) : a
        },
        getParamString: function(b) {
            var c = [];
            for (var a in b) {
                b.hasOwnProperty(a) && c.push(a + "=" + b[a])
            }
            return "?" + c.join("&")
        },
        formatNum: function(b, c) {
            var a = Math.pow(10, c || 5);
            return Math.round(b * a) / a
        },
        falseFn: function() {
            return !1
        },
        requestAnimFrame: function() {
            function a(c) {
                window.setTimeout(c, 1000 / 60)
            }
            var b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || a;
            return function(d, f, c, e) {
                d = f ? TL.Util.bind(d, f) : d, c && b === a ? d() : b(d, e)
            }
        }(),
        bind: function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        template: function(a, b) {
            return a.replace(/\{ *([\w_]+) *\}/g, function(d, c) {
                var e = b[c];
                if (!b.hasOwnProperty(c)) {
                    throw new TL.Error("template_value_err", d)
                }
                return e
            })
        },
        hexToRgb: function(b) {
            TL.Util.css_named_colors[b.toLowerCase()] && (b = TL.Util.css_named_colors[b.toLowerCase()]);
            var c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            b = b.replace(c, function(f, g, d, h) {
                return g + g + d + d + h + h
            });
            var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);
            return a ? {
                r: parseInt(a[1], 16),
                g: parseInt(a[2], 16),
                b: parseInt(a[3], 16)
            } : null
        },
        rgbToHex: function(d) {
            var f, c, g;
            if ("object" == typeof d) {
                f = d.r, c = d.g, g = d.b
            } else {
                if ("function" == typeof d.match) {
                    var b = d.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
                    b && (f = b[1], c = b[2], g = b[3])
                }
            }
            if (isNaN(f) || isNaN(g) || isNaN(c)) {
                throw new TL.Error("invalid_rgb_err")
            }
            return "#" + TL.Util.intToHexString(f) + TL.Util.intToHexString(c) + TL.Util.intToHexString(g)
        },
        colorObjToHex: function(a) {
            var b = [a.r, a.g, a.b];
            return TL.Util.rgbToHex("rgb(" + b.join(",") + ")")
        },
        css_named_colors: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        ratio: {
            square: function(a) {
                var b = {
                    w: 0,
                    h: 0
                };
                return a.w > a.h && a.h > 0 ? (b.h = a.h, b.w = a.h) : (b.w = a.w, b.h = a.w), b
            },
            r16_9: function(a) {
                return null !== a.w && "" !== a.w ? Math.round(a.w / 16 * 9) : null !== a.h && "" !== a.h ? Math.round(a.h / 9 * 16) : 0
            },
            r4_3: function(a) {
                return null !== a.w && "" !== a.w ? Math.round(a.w / 4 * 3) : null !== a.h && "" !== a.h ? Math.round(a.h / 3 * 4) : void 0
            }
        },
        getObjectAttributeByIndex: function(b, c) {
            if ("undefined" != typeof b) {
                var a = 0;
                for (var d in b) {
                    if (c === a) {
                        return b[d]
                    }
                    a++
                }
                return ""
            }
            return ""
        },
        getUrlVars: function(d) {
            var g, c, h, b = [];
            g = d.toString(), g.match("&#038;") ? g = g.replace("&#038;", "&") : g.match("&#38;") ? g = g.replace("&#38;", "&") : g.match("&amp;") && (g = g.replace("&amp;", "&")), h = g.slice(g.indexOf("?") + 1).split("&");
            for (var f = 0; f < h.length; f++) {
                c = h[f].split("="), b.push(c[0]), b[c[0]] = c[1]
            }
            return b
        },
        trim: function(a) {
            return a && "function" == typeof a.replace ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        slugify: function(d) {
            d = TL.Util.trim(d), d = d.toLowerCase();
            for (var f = "Ã£Ã Ã¡Ã¤Ã¢áº½Ã¨Ã©Ã«ÃªÃ¬ÃÃ¯Ã®ÃµÃ²Ã³Ã¶Ã´Ã¹ÃºÃ¼Ã»Ã±Ã§Â·/_,:;", c = "aaaaaeeeeeiiiiooooouuuunc------", g = 0, b = f.length; b > g; g++) {
                d = d.replace(new RegExp(f.charAt(g), "g"), c.charAt(g))
            }
            return d = d.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"), d = d.replace(/^([0-9])/, "_$1")
        },
        maxDepth: function(d) {
            for (var g = [], c = 0, j = 0; j < d.length; j++) {
                if (g.push(d[j]), g.length > 1) {
                    for (var b = g[g.length - 1], f = -1, h = 0; h < g.length - 1; h++) {
                        g[h][1] < b[0] && (f = h)
                    }
                    f >= 0 && (g = g.slice(f + 1))
                }
                g.length > c && (c = g.length)
            }
            return c
        },
        pad: function(a, b) {
            for (a = String(a), b = b || 2; a.length < b;) {
                a = "0" + a
            }
            return a
        },
        intToHexString: function(a) {
            return TL.Util.pad(parseInt(a, 10).toString(16))
        },
        findNextGreater: function(b, c, a) {
            for (var d = 0; d < b.length; d++) {
                if (c < b[d]) {
                    return b[d]
                }
            }
            return a ? a : c
        },
        findNextLesser: function(b, c, a) {
            for (var d = b.length - 1; d >= 0; d--) {
                if (c > b[d]) {
                    return b[d]
                }
            }
            return a ? a : c
        },
        isEmptyObject: function(d) {
            var f = [];
            if (Object.keys) {
                f = Object.keys(d)
            } else {
                for (var c in d) {
                    Object.prototype.hasOwnProperty.call(d, c) && f.push(c)
                }
            }
            for (var g = 0; g < f.length; g++) {
                var b = f[g];
                if (null != d[b] && "string" != typeof d[b]) {
                    return !1
                }
                if (0 != TL.Util.trim(d[b]).length) {
                    return !1
                }
            }
            return !0
        },
        parseYouTubeTime: function(b) {
            if ("string" == typeof b) {
                if (parts = b.match(/^\s*(\d+h)?(\d+m)?(\d+s)?\s*/i)) {
                    var c = parseInt(parts[1]) || 0,
                        a = parseInt(parts[2]) || 0,
                        d = parseInt(parts[3]) || 0;
                    return d + 60 * a + 60 * c * 60
                }
            } else {
                if ("number" == typeof b) {
                    return b
                }
            }
            return 0
        },
        transformImageURL: function(a) {
            return a.replace(/(.*)www.dropbox.com\/(.*)/, "$1dl.dropboxusercontent.com/$2")
        },
        base58: function(b) {
            var c = b || "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
                a = c.length;
            return {
                encode: function(e) {
                    if ("number" != typeof e || e !== parseInt(e)) {
                        throw '"encode" only accepts integers.'
                    }
                    for (var f = ""; e;) {
                        var d = e % a;
                        e = Math.floor(e / a), f = c[d].toString() + f
                    }
                    return f
                },
                decode: function(e) {
                    if ("string" != typeof e) {
                        throw '"decode" only accepts strings.'
                    }
                    for (var g = 0; e;) {
                        var d = c.indexOf(e[0]);
                        if (0 > d) {
                            throw '"decode" can\'t find "' + e[0] + '" in the alphabet: "' + c + '"'
                        }
                        var f = e.length - 1;
                        g += d * Math.pow(a, f), e = e.substring(1)
                    }
                    return g
                }
            }
        }()
    },
    function(t) {
        var e = function() {
            function t(t) {
                return null == t ? String(t) : Y[Z.call(t)] || "object"
            }

            function e(e) {
                return "function" == t(e)
            }

            function i(t) {
                return null != t && t == t.window
            }

            function n(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE
            }

            function a(e) {
                return "object" == t(e)
            }

            function s(t) {
                return a(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype
            }

            function o(t) {
                return "number" == typeof t.length
            }

            function r(t) {
                return E.call(t, function(t) {
                    return null != t
                })
            }

            function l(t) {
                return t.length > 0 ? $.fn.concat.apply([], t) : t
            }

            function h(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function d(t) {
                return t in N ? N[t] : N[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
            }

            function c(t, e) {
                return "number" != typeof e || I[h(t)] ? e : e + "px"
            }

            function u(t) {
                var e, i;
                return C[t] || (e = S.createElement(t), S.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), C[t] = i), C[t]
            }

            function m(t) {
                return "children" in t ? D.call(t.children) : $.map(t.childNodes, function(t) {
                    return 1 == t.nodeType ? t : void 0
                })
            }

            function _(t, e, i) {
                for (w in e) {
                    i && (s(e[w]) || X(e[w])) ? (s(e[w]) && !s(t[w]) && (t[w] = {}), X(e[w]) && !X(t[w]) && (t[w] = []), _(t[w], e[w], i)) : e[w] !== L && (t[w] = e[w])
                }
            }

            function p(t, e) {
                return null == e ? $(t) : $(t).filter(e)
            }

            function f(t, i, n, a) {
                return e(i) ? i.call(t, n, a) : i
            }

            function g(t, e, i) {
                null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
            }

            function v(t, e) {
                var i = t.className,
                    n = i && i.baseVal !== L;
                return e === L ? n ? i.baseVal : i : void(n ? i.baseVal = e : t.className = e)
            }

            function y(t) {
                var e;
                try {
                    return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? $.parseJSON(t) : t : e) : t
                } catch (i) {
                    return t
                }
            }

            function T(t, e) {
                e(t);
                for (var i in t.childNodes) {
                    T(t.childNodes[i], e)
                }
            }
            var L, w, $, b, x, k, M = [],
                D = M.slice,
                E = M.filter,
                S = window.document,
                C = {},
                N = {},
                I = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                },
                A = /^\s*<(\w+|!)[^>]*>/,
                U = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                j = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                O = /^(?:body|html)$/i,
                P = /([A-Z])/g,
                B = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                z = ["after", "prepend", "before", "append"],
                q = S.createElement("table"),
                R = S.createElement("tr"),
                H = {
                    tr: S.createElement("tbody"),
                    tbody: q,
                    thead: q,
                    tfoot: q,
                    td: R,
                    th: R,
                    "*": S.createElement("div")
                },
                F = /complete|loaded|interactive/,
                W = /^[\w-]*$/,
                Y = {},
                Z = Y.toString,
                G = {},
                V = S.createElement("div"),
                J = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                X = Array.isArray || function(t) {
                    return t instanceof Array
                };
            return G.matches = function(t, e) {
                if (!e || !t || 1 !== t.nodeType) {
                    return !1
                }
                var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (i) {
                    return i.call(t, e)
                }
                var n, a = t.parentNode,
                    s = !a;
                return s && (a = V).appendChild(t), n = ~G.qsa(a, e).indexOf(t), s && V.removeChild(t), n
            }, x = function(t) {
                return t.replace(/-+(.)?/g, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }, k = function(t) {
                return E.call(t, function(e, i) {
                    return t.indexOf(e) == i
                })
            }, G.fragment = function(t, e, i) {
                var n, a, o;
                return U.test(t) && (n = $(S.createElement(RegExp.$1))), n || (t.replace && (t = t.replace(j, "<$1></$2>")), e === L && (e = A.test(t) && RegExp.$1), e in H || (e = "*"), o = H[e], o.innerHTML = "" + t, n = $.each(D.call(o.childNodes), function() {
                    o.removeChild(this)
                })), s(i) && (a = $(n), $.each(i, function(t, e) {
                    B.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
                })), n
            }, G.Z = function(t, e) {
                return t = t || [], t.__proto__ = $.fn, t.selector = e || "", t
            }, G.isZ = function(t) {
                return t instanceof G.Z
            }, G.init = function(t, i) {
                var n;
                if (!t) {
                    return G.Z()
                }
                if ("string" == typeof t) {
                    if (t = t.trim(), "<" == t[0] && A.test(t)) {
                        n = G.fragment(t, RegExp.$1, i), t = null
                    } else {
                        if (i !== L) {
                            return $(i).find(t)
                        }
                        n = G.qsa(S, t)
                    }
                } else {
                    if (e(t)) {
                        return $(S).ready(t)
                    }
                    if (G.isZ(t)) {
                        return t
                    }
                    if (X(t)) {
                        n = r(t)
                    } else {
                        if (a(t)) {
                            n = [t], t = null
                        } else {
                            if (A.test(t)) {
                                n = G.fragment(t.trim(), RegExp.$1, i), t = null
                            } else {
                                if (i !== L) {
                                    return $(i).find(t)
                                }
                                n = G.qsa(S, t)
                            }
                        }
                    }
                }
                return G.Z(n, t)
            }, $ = function(t, e) {
                return G.init(t, e)
            }, $.extend = function(t) {
                var e, i = D.call(arguments, 1);
                return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach(function(i) {
                    _(t, i, e)
                }), t
            }, G.qsa = function(t, e) {
                var i, a = "#" == e[0],
                    s = !a && "." == e[0],
                    o = a || s ? e.slice(1) : e,
                    r = W.test(o);
                return n(t) && r && a ? (i = t.getElementById(o)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : D.call(r && !a ? s ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
            }, $.contains = function(t, e) {
                return t !== e && t.contains(e)
            }, $.type = t, $.isFunction = e, $.isWindow = i, $.isArray = X, $.isPlainObject = s, $.isEmptyObject = function(t) {
                var e;
                for (e in t) {
                    return !1
                }
                return !0
            }, $.inArray = function(t, e, i) {
                return M.indexOf.call(e, t, i)
            }, $.camelCase = x, $.trim = function(t) {
                return null == t ? "" : String.prototype.trim.call(t)
            }, $.uuid = 0, $.support = {}, $.expr = {}, $.map = function(t, e) {
                var i, n, a, s = [];
                if (o(t)) {
                    for (n = 0; n < t.length; n++) {
                        i = e(t[n], n), null != i && s.push(i)
                    }
                } else {
                    for (a in t) {
                        i = e(t[a], a), null != i && s.push(i)
                    }
                }
                return l(s)
            }, $.each = function(t, e) {
                var i, n;
                if (o(t)) {
                    for (i = 0; i < t.length; i++) {
                        if (e.call(t[i], i, t[i]) === !1) {
                            return t
                        }
                    }
                } else {
                    for (n in t) {
                        if (e.call(t[n], n, t[n]) === !1) {
                            return t
                        }
                    }
                }
                return t
            }, $.grep = function(t, e) {
                return E.call(t, e)
            }, window.JSON && ($.parseJSON = JSON.parse), $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                Y["[object " + e + "]"] = e.toLowerCase()
            }), $.fn = {
                forEach: M.forEach,
                reduce: M.reduce,
                push: M.push,
                sort: M.sort,
                indexOf: M.indexOf,
                concat: M.concat,
                map: function(t) {
                    return $($.map(this, function(e, i) {
                        return t.call(e, i, e)
                    }))
                },
                slice: function() {
                    return $(D.apply(this, arguments))
                },
                ready: function(t) {
                    return F.test(S.readyState) && S.body ? t($) : S.addEventListener("DOMContentLoaded", function() {
                        t($)
                    }, !1), this
                },
                get: function(t) {
                    return t === L ? D.call(this) : this[t >= 0 ? t : t + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each(function() {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function(t) {
                    return M.every.call(this, function(e, i) {
                        return t.call(e, i, e) !== !1
                    }), this
                },
                filter: function(t) {
                    return e(t) ? this.not(this.not(t)) : $(E.call(this, function(e) {
                        return G.matches(e, t)
                    }))
                },
                add: function(t, e) {
                    return $(k(this.concat($(t, e))))
                },
                is: function(t) {
                    return this.length > 0 && G.matches(this[0], t)
                },
                not: function(t) {
                    var i = [];
                    if (e(t) && t.call !== L) {
                        this.each(function(e) {
                            t.call(this, e) || i.push(this)
                        })
                    } else {
                        var n = "string" == typeof t ? this.filter(t) : o(t) && e(t.item) ? D.call(t) : $(t);
                        this.forEach(function(t) {
                            n.indexOf(t) < 0 && i.push(t)
                        })
                    }
                    return $(i)
                },
                has: function(t) {
                    return this.filter(function() {
                        return a(t) ? $.contains(this, t) : $(this).find(t).size()
                    })
                },
                eq: function(t) {
                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                },
                first: function() {
                    var t = this[0];
                    return t && !a(t) ? t : $(t)
                },
                last: function() {
                    var t = this[this.length - 1];
                    return t && !a(t) ? t : $(t)
                },
                find: function(t) {
                    var e, i = this;
                    return e = "object" == typeof t ? $(t).filter(function() {
                        var t = this;
                        return M.some.call(i, function(e) {
                            return $.contains(e, t)
                        })
                    }) : 1 == this.length ? $(G.qsa(this[0], t)) : this.map(function() {
                        return G.qsa(this, t)
                    })
                },
                closest: function(t, e) {
                    var i = this[0],
                        a = !1;
                    for ("object" == typeof t && (a = $(t)); i && !(a ? a.indexOf(i) >= 0 : G.matches(i, t));) {
                        i = i !== e && !n(i) && i.parentNode
                    }
                    return $(i)
                },
                parents: function(t) {
                    for (var e = [], i = this; i.length > 0;) {
                        i = $.map(i, function(t) {
                            return (t = t.parentNode) && !n(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                        })
                    }
                    return p(e, t)
                },
                parent: function(t) {
                    return p(k(this.pluck("parentNode")), t)
                },
                children: function(t) {
                    return p(this.map(function() {
                        return m(this)
                    }), t)
                },
                contents: function() {
                    return this.map(function() {
                        return D.call(this.childNodes)
                    })
                },
                siblings: function(t) {
                    return p(this.map(function(t, e) {
                        return E.call(m(e.parentNode), function(t) {
                            return t !== e
                        })
                    }), t)
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                pluck: function(t) {
                    return $.map(this, function(e) {
                        return e[t]
                    })
                },
                show: function() {
                    return this.each(function() {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = u(this.nodeName))
                    })
                },
                replaceWith: function(t) {
                    return this.before(t).remove()
                },
                wrap: function(t) {
                    var i = e(t);
                    if (this[0] && !i) {
                        var n = $(t).get(0),
                            a = n.parentNode || this.length > 1
                    }
                    return this.each(function(e) {
                        $(this).wrapAll(i ? t.call(this, e) : a ? n.cloneNode(!0) : n)
                    })
                },
                wrapAll: function(t) {
                    if (this[0]) {
                        $(this[0]).before(t = $(t));
                        for (var e;
                            (e = t.children()).length;) {
                            t = e.first()
                        }
                        $(t).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    var i = e(t);
                    return this.each(function(e) {
                        var n = $(this),
                            a = n.contents(),
                            s = i ? t.call(this, e) : t;
                        a.length ? a.wrapAll(s) : n.append(s)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        $(this).replaceWith($(this).children())
                    }), this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0)
                    })
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(t) {
                    return this.each(function() {
                        var e = $(this);
                        (t === L ? "none" == e.css("display") : t) ? e.show(): e.hide()
                    })
                },
                prev: function(t) {
                    return $(this.pluck("previousElementSibling")).filter(t || "*")
                },
                next: function(t) {
                    return $(this.pluck("nextElementSibling")).filter(t || "*")
                },
                html: function(t) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function(e) {
                        var i = this.innerHTML;
                        $(this).empty().append(f(this, t, e, i))
                    })
                },
                text: function(t) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                        this.textContent = t === L ? "" : "" + t
                    })
                },
                attr: function(t, e) {
                    var i;
                    return "string" == typeof t && e === L ? 0 == this.length || 1 !== this[0].nodeType ? L : "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i : this.each(function(i) {
                        if (1 === this.nodeType) {
                            if (a(t)) {
                                for (w in t) {
                                    g(this, w, t[w])
                                }
                            } else {
                                g(this, t, f(this, e, i, this.getAttribute(t)))
                            }
                        }
                    })
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        1 === this.nodeType && g(this, t)
                    })
                },
                prop: function(t, e) {
                    return t = J[t] || t, e === L ? this[0] && this[0][t] : this.each(function(i) {
                        this[t] = f(this, e, i, this[t])
                    })
                },
                data: function(t, e) {
                    var i = this.attr("data-" + t.replace(P, "-$1").toLowerCase(), e);
                    return null !== i ? y(i) : L
                },
                val: function(t) {
                    return 0 === arguments.length ? this[0] && (this[0].multiple ? $(this[0]).find("option").filter(function() {
                        return this.selected
                    }).pluck("value") : this[0].value) : this.each(function(e) {
                        this.value = f(this, t, e, this.value)
                    })
                },
                offset: function(t) {
                    if (t) {
                        return this.each(function(e) {
                            var i = $(this),
                                n = f(this, t, e, i.offset()),
                                a = i.offsetParent().offset(),
                                s = {
                                    top: n.top - a.top,
                                    left: n.left - a.left
                                };
                            "static" == i.css("position") && (s.position = "relative"), i.css(s)
                        })
                    }
                    if (0 == this.length) {
                        return null
                    }
                    var e = this[0].getBoundingClientRect();
                    return {
                        left: e.left + window.pageXOffset,
                        top: e.top + window.pageYOffset,
                        width: Math.round(e.width),
                        height: Math.round(e.height)
                    }
                },
                css: function(e, i) {
                    if (arguments.length < 2) {
                        var n = this[0],
                            a = getComputedStyle(n, "");
                        if (!n) {
                            return
                        }
                        if ("string" == typeof e) {
                            return n.style[x(e)] || a.getPropertyValue(e)
                        }
                        if (X(e)) {
                            var s = {};
                            return $.each(X(e) ? e : [e], function(t, e) {
                                s[e] = n.style[x(e)] || a.getPropertyValue(e)
                            }), s
                        }
                    }
                    var o = "";
                    if ("string" == t(e)) {
                        i || 0 === i ? o = h(e) + ":" + c(e, i) : this.each(function() {
                            this.style.removeProperty(h(e))
                        })
                    } else {
                        for (w in e) {
                            e[w] || 0 === e[w] ? o += h(w) + ":" + c(w, e[w]) + ";" : this.each(function() {
                                this.style.removeProperty(h(w))
                            })
                        }
                    }
                    return this.each(function() {
                        this.style.cssText += ";" + o
                    })
                },
                index: function(t) {
                    return t ? this.indexOf($(t)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(t) {
                    return t ? M.some.call(this, function(t) {
                        return this.test(v(t))
                    }, d(t)) : !1
                },
                addClass: function(t) {
                    return t ? this.each(function(e) {
                        b = [];
                        var i = v(this),
                            n = f(this, t, e, i);
                        n.split(/\s+/g).forEach(function(t) {
                            $(this).hasClass(t) || b.push(t)
                        }, this), b.length && v(this, i + (i ? " " : "") + b.join(" "))
                    }) : this
                },
                removeClass: function(t) {
                    return this.each(function(e) {
                        return t === L ? v(this, "") : (b = v(this), f(this, t, e, b).split(/\s+/g).forEach(function(t) {
                            b = b.replace(d(t), " ")
                        }), void v(this, b.trim()))
                    })
                },
                toggleClass: function(t, e) {
                    return t ? this.each(function(i) {
                        var n = $(this),
                            a = f(this, t, i, v(this));
                        a.split(/\s+/g).forEach(function(t) {
                            (e === L ? !n.hasClass(t) : e) ? n.addClass(t): n.removeClass(t)
                        })
                    }) : this
                },
                scrollTop: function(t) {
                    if (this.length) {
                        var e = "scrollTop" in this[0];
                        return t === L ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                            this.scrollTop = t
                        } : function() {
                            this.scrollTo(this.scrollX, t)
                        })
                    }
                },
                scrollLeft: function(t) {
                    if (this.length) {
                        var e = "scrollLeft" in this[0];
                        return t === L ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                            this.scrollLeft = t
                        } : function() {
                            this.scrollTo(t, this.scrollY)
                        })
                    }
                },
                position: function() {
                    if (this.length) {
                        var t = this[0],
                            e = this.offsetParent(),
                            i = this.offset(),
                            n = O.test(e[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : e.offset();
                        return i.top -= parseFloat($(t).css("margin-top")) || 0, i.left -= parseFloat($(t).css("margin-left")) || 0, n.top += parseFloat($(e[0]).css("border-top-width")) || 0, n.left += parseFloat($(e[0]).css("border-left-width")) || 0, {
                            top: i.top - n.top,
                            left: i.left - n.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || S.body; t && !O.test(t.nodeName) && "static" == $(t).css("position");) {
                            t = t.offsetParent
                        }
                        return t
                    })
                }
            }, $.fn.detach = $.fn.remove, ["width", "height"].forEach(function(t) {
                var e = t.replace(/./, function(t) {
                    return t[0].toUpperCase()
                });
                $.fn[t] = function(a) {
                    var s, o = this[0];
                    return a === L ? i(o) ? o["inner" + e] : n(o) ? o.documentElement["scroll" + e] : (s = this.offset()) && s[t] : this.each(function(e) {
                        o = $(this), o.css(t, f(this, a, e, o[t]()))
                    })
                }
            }), z.forEach(function(e, i) {
                var n = i % 2;
                $.fn[e] = function() {
                    var e, a, s = $.map(arguments, function(i) {
                            return e = t(i), "object" == e || "array" == e || null == i ? i : G.fragment(i)
                        }),
                        o = this.length > 1;
                    return s.length < 1 ? this : this.each(function(t, e) {
                        a = n ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null, s.forEach(function(t) {
                            if (o) {
                                t = t.cloneNode(!0)
                            } else {
                                if (!a) {
                                    return $(t).remove()
                                }
                            }
                            T(a.insertBefore(t, e), function(t) {
                                null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                            })
                        })
                    })
                }, $.fn[n ? e + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
                    return $(t)[e](this), this
                }
            }), G.Z.prototype = $.fn, G.uniq = k, G.deserializeValue = y, $.zepto = G, $
        }();
        window.Zepto = e, void 0 === window.$ && (window.$ = e),
            function($) {
                function t(t) {
                    return t._zid || (t._zid = c++)
                }

                function e(e, a, s, o) {
                    if (a = i(a), a.ns) {
                        var r = n(a.ns)
                    }
                    return (p[t(e)] || []).filter(function(e) {
                        return !(!e || a.e && e.e != a.e || a.ns && !r.test(e.ns) || s && t(e.fn) !== t(s) || o && e.sel != o)
                    })
                }

                function i(t) {
                    var e = ("" + t).split(".");
                    return {
                        e: e[0],
                        ns: e.slice(1).sort().join(" ")
                    }
                }

                function n(t) {
                    return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
                }

                function a(t, e) {
                    return t.del && !g && t.e in v || !!e
                }

                function s(t) {
                    return y[t] || g && v[t] || t
                }

                function o(e, n, o, r, h, c, u) {
                    var m = t(e),
                        _ = p[m] || (p[m] = []);
                    n.split(/\s/).forEach(function(t) {
                        if ("ready" == t) {
                            return $(document).ready(o)
                        }
                        var n = i(t);
                        n.fn = o, n.sel = h, n.e in y && (o = function(t) {
                            var e = t.relatedTarget;
                            return !e || e !== this && !$.contains(this, e) ? n.fn.apply(this, arguments) : void 0
                        }), n.del = c;
                        var m = c || o;
                        n.proxy = function(t) {
                            if (t = l(t), !t.isImmediatePropagationStopped()) {
                                t.data = r;
                                var i = m.apply(e, t._args == d ? [t] : [t].concat(t._args));
                                return i === !1 && (t.preventDefault(), t.stopPropagation()), i
                            }
                        }, n.i = _.length, _.push(n), "addEventListener" in e && e.addEventListener(s(n.e), n.proxy, a(n, u))
                    })
                }

                function r(i, n, o, r, l) {
                    var h = t(i);
                    (n || "").split(/\s/).forEach(function(t) {
                        e(i, t, o, r).forEach(function(t) {
                            delete p[h][t.i], "removeEventListener" in i && i.removeEventListener(s(t.e), t.proxy, a(t, l))
                        })
                    })
                }

                function l(t, e) {
                    return (e || !t.isDefaultPrevented) && (e || (e = t), $.each(b, function(i, n) {
                        var a = e[i];
                        t[i] = function() {
                            return this[n] = T, a && a.apply(e, arguments)
                        }, t[n] = L
                    }), (e.defaultPrevented !== d ? e.defaultPrevented : "returnValue" in e ? e.returnValue === !1 : e.getPreventDefault && e.getPreventDefault()) && (t.isDefaultPrevented = T)), t
                }

                function h(t) {
                    var e, i = {
                        originalEvent: t
                    };
                    for (e in t) {
                        w.test(e) || t[e] === d || (i[e] = t[e])
                    }
                    return l(i, t)
                }
                var d, c = ($.zepto.qsa, 1),
                    u = Array.prototype.slice,
                    m = $.isFunction,
                    _ = function(t) {
                        return "string" == typeof t
                    },
                    p = {},
                    f = {},
                    g = "onfocusin" in window,
                    v = {
                        focus: "focusin",
                        blur: "focusout"
                    },
                    y = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };
                f.click = f.mousedown = f.mouseup = f.mousemove = "MouseEvents", $.event = {
                    add: o,
                    remove: r
                }, $.proxy = function(e, i) {
                    if (m(e)) {
                        var n = function() {
                            return e.apply(i, arguments)
                        };
                        return n._zid = t(e), n
                    }
                    if (_(i)) {
                        return $.proxy(e[i], e)
                    }
                    throw new TypeError("expected function")
                }, $.fn.bind = function(t, e, i) {
                    return this.on(t, e, i)
                }, $.fn.unbind = function(t, e) {
                    return this.off(t, e)
                }, $.fn.one = function(t, e, i, n) {
                    return this.on(t, e, i, n, 1)
                };
                var T = function() {
                        return !0
                    },
                    L = function() {
                        return !1
                    },
                    w = /^([A-Z]|returnValue$|layer[XY]$)/,
                    b = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };
                $.fn.delegate = function(t, e, i) {
                    return this.on(e, t, i)
                }, $.fn.undelegate = function(t, e, i) {
                    return this.off(e, t, i)
                }, $.fn.live = function(t, e) {
                    return $(document.body).delegate(this.selector, t, e), this
                }, $.fn.die = function(t, e) {
                    return $(document.body).undelegate(this.selector, t, e), this
                }, $.fn.on = function(t, e, i, n, a) {
                    var s, l, c = this;
                    return t && !_(t) ? ($.each(t, function(t, n) {
                        c.on(t, e, i, n, a)
                    }), c) : (_(e) || m(n) || n === !1 || (n = i, i = e, e = d), (m(i) || i === !1) && (n = i, i = d), n === !1 && (n = L), c.each(function(d, c) {
                        a && (s = function(t) {
                            return r(c, t.type, n), n.apply(this, arguments)
                        }), e && (l = function(t) {
                            var i, a = $(t.target).closest(e, c).get(0);
                            return a && a !== c ? (i = $.extend(h(t), {
                                currentTarget: a,
                                liveFired: c
                            }), (s || n).apply(a, [i].concat(u.call(arguments, 1)))) : void 0
                        }), o(c, t, n, i, e, l || s)
                    }))
                }, $.fn.off = function(t, e, i) {
                    var n = this;
                    return t && !_(t) ? ($.each(t, function(t, i) {
                        n.off(t, e, i)
                    }), n) : (_(e) || m(i) || i === !1 || (i = e, e = d), i === !1 && (i = L), n.each(function() {
                        r(this, t, i, e)
                    }))
                }, $.fn.trigger = function(t, e) {
                    return t = _(t) || $.isPlainObject(t) ? $.Event(t) : l(t), t._args = e, this.each(function() {
                        "dispatchEvent" in this ? this.dispatchEvent(t) : $(this).triggerHandler(t, e)
                    })
                }, $.fn.triggerHandler = function(t, i) {
                    var n, a;
                    return this.each(function(s, o) {
                        n = h(_(t) ? $.Event(t) : t), n._args = i, n.target = o, $.each(e(o, t.type || t), function(t, e) {
                            return a = e.proxy(n), n.isImmediatePropagationStopped() ? !1 : void 0
                        })
                    }), a
                }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                    $.fn[t] = function(e) {
                        return e ? this.bind(t, e) : this.trigger(t)
                    }
                }), ["focus", "blur"].forEach(function(t) {
                    $.fn[t] = function(e) {
                        return e ? this.bind(t, e) : this.each(function() {
                            try {
                                this[t]()
                            } catch (e) {}
                        }), this
                    }
                }), $.Event = function(t, e) {
                    _(t) || (e = t, t = e.type);
                    var i = document.createEvent(f[t] || "Events"),
                        n = !0;
                    if (e) {
                        for (var a in e) {
                            "bubbles" == a ? n = !!e[a] : i[a] = e[a]
                        }
                    }
                    return i.initEvent(t, n, !0), l(i)
                }
            }(e),
            function($) {
                function t(t, e, i) {
                    var n = $.Event(e);
                    return $(t).trigger(n, i), !n.isDefaultPrevented()
                }

                function e(e, i, n, a) {
                    return e.global ? t(i || g, n, a) : void 0
                }

                function i(t) {
                    t.global && 0 === $.active++ && e(t, null, "ajaxStart")
                }

                function n(t) {
                    t.global && !--$.active && e(t, null, "ajaxStop")
                }

                function a(t, i) {
                    var n = i.context;
                    return i.beforeSend.call(n, t, i) === !1 || e(i, n, "ajaxBeforeSend", [t, i]) === !1 ? !1 : void e(i, n, "ajaxSend", [t, i])
                }

                function s(t, i, n, a) {
                    var s = n.context,
                        o = "success";
                    n.success.call(s, t, o, i), a && a.resolveWith(s, [t, o, i]), e(n, s, "ajaxSuccess", [i, n, t]), r(o, i, n)
                }

                function o(t, i, n, a, s) {
                    var o = a.context;
                    a.error.call(o, n, i, t), s && s.rejectWith(o, [n, i, t]), e(a, o, "ajaxError", [n, a, t || i]), r(i, n, a)
                }

                function r(t, i, a) {
                    var s = a.context;
                    a.complete.call(s, i, t), e(a, s, "ajaxComplete", [i, a]), n(a)
                }

                function l() {}

                function h(t) {
                    return t && (t = t.split(";", 2)[0]), t && (t == w ? "html" : t == L ? "json" : y.test(t) ? "script" : T.test(t) && "xml") || "text"
                }

                function d(t, e) {
                    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                }

                function c(t) {
                    t.processData && t.data && "string" != $.type(t.data) && (t.data = $.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = d(t.url, t.data), t.data = void 0)
                }

                function u(t, e, i, n) {
                    var a = !$.isFunction(e);
                    return {
                        url: t,
                        data: a ? e : void 0,
                        success: a ? $.isFunction(i) ? i : void 0 : e,
                        dataType: a ? n || i : i
                    }
                }

                function m(t, e, i, n) {
                    var a, s = $.isArray(e),
                        o = $.isPlainObject(e);
                    $.each(e, function(e, r) {
                        a = $.type(r), n && (e = i ? n : n + "[" + (o || "object" == a || "array" == a ? e : "") + "]"), !n && s ? t.add(r.name, r.value) : "array" == a || !i && "object" == a ? m(t, r, i, e) : t.add(e, r)
                    })
                }
                var _, p, f = 0,
                    g = window.document,
                    v = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    y = /^(?:text|application)\/javascript/i,
                    T = /^(?:text|application)\/xml/i,
                    L = "application/json",
                    w = "text/html",
                    b = /^\s*$/;
                $.active = 0, $.ajaxJSONP = function(t, e) {
                    if (!("type" in t)) {
                        return $.ajax(t)
                    }
                    var i, n, r = t.jsonpCallback,
                        l = ($.isFunction(r) ? r() : r) || "jsonp" + ++f,
                        h = g.createElement("script"),
                        d = window[l],
                        c = function(t) {
                            $(h).triggerHandler("error", t || "abort")
                        },
                        u = {
                            abort: c
                        };
                    return e && e.promise(u), $(h).on("load error", function(a, r) {
                        clearTimeout(n), $(h).off().remove(), "error" != a.type && i ? s(i[0], u, t, e) : o(null, r || "error", u, t, e), window[l] = d, i && $.isFunction(d) && d(i[0]), d = i = void 0
                    }), a(u, t) === !1 ? (c("abort"), u) : (window[l] = function() {
                        i = arguments
                    }, h.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l), g.head.appendChild(h), t.timeout > 0 && (n = setTimeout(function() {
                        c("timeout")
                    }, t.timeout)), u)
                }, $.ajaxSettings = {
                    type: "GET",
                    beforeSend: l,
                    success: l,
                    error: l,
                    complete: l,
                    context: null,
                    global: !0,
                    xhr: function() {
                        return new window.XMLHttpRequest
                    },
                    accepts: {
                        script: "text/javascript, application/javascript, application/x-javascript",
                        json: L,
                        xml: "application/xml, text/xml",
                        html: w,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0,
                    processData: !0,
                    cache: !0
                }, $.ajax = function(t) {
                    var e = $.extend({}, t || {}),
                        n = $.Deferred && $.Deferred();
                    for (_ in $.ajaxSettings) {
                        void 0 === e[_] && (e[_] = $.ajaxSettings[_])
                    }
                    i(e), e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 != window.location.host), e.url || (e.url = window.location.toString()), c(e), e.cache === !1 && (e.url = d(e.url, "_=" + Date.now()));
                    var r = e.dataType,
                        u = /\?.+=\?/.test(e.url);
                    if ("jsonp" == r || u) {
                        return u || (e.url = d(e.url, e.jsonp ? e.jsonp + "=?" : e.jsonp === !1 ? "" : "callback=?")), $.ajaxJSONP(e, n)
                    }
                    var m, f = e.accepts[r],
                        g = {},
                        v = function(t, e) {
                            g[t.toLowerCase()] = [t, e]
                        },
                        y = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol,
                        T = e.xhr(),
                        L = T.setRequestHeader;
                    if (n && n.promise(T), e.crossDomain || v("X-Requested-With", "XMLHttpRequest"), v("Accept", f || "*/*"), (f = e.mimeType || f) && (f.indexOf(",") > -1 && (f = f.split(",", 2)[0]), T.overrideMimeType && T.overrideMimeType(f)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && v("Content-Type", e.contentType || "application/x-www-form-urlencoded"), e.headers) {
                        for (p in e.headers) {
                            v(p, e.headers[p])
                        }
                    }
                    if (T.setRequestHeader = v, T.onreadystatechange = function() {
                            if (4 == T.readyState) {
                                T.onreadystatechange = l, clearTimeout(m);
                                var t, i = !1;
                                if (T.status >= 200 && T.status < 300 || 304 == T.status || 0 == T.status && "file:" == y) {
                                    r = r || h(e.mimeType || T.getResponseHeader("content-type")), t = T.responseText;
                                    try {
                                        "script" == r ? (1, eval)(t) : "xml" == r ? t = T.responseXML : "json" == r && (t = b.test(t) ? null : $.parseJSON(t))
                                    } catch (a) {
                                        i = a
                                    }
                                    i ? o(i, "parsererror", T, e, n) : s(t, T, e, n)
                                } else {
                                    o(T.statusText || null, T.status ? "error" : "abort", T, e, n)
                                }
                            }
                        }, a(T, e) === !1) {
                        return T.abort(), o(null, "abort", T, e, n), T
                    }
                    if (e.xhrFields) {
                        for (p in e.xhrFields) {
                            T[p] = e.xhrFields[p]
                        }
                    }
                    var w = "async" in e ? e.async : !0;
                    T.open(e.type, e.url, w, e.username, e.password);
                    for (p in g) {
                        L.apply(T, g[p])
                    }
                    return e.timeout > 0 && (m = setTimeout(function() {
                        T.onreadystatechange = l, T.abort(), o(null, "timeout", T, e, n)
                    }, e.timeout)), T.send(e.data ? e.data : null), T
                }, $.get = function() {
                    return $.ajax(u.apply(null, arguments))
                }, $.post = function() {
                    var t = u.apply(null, arguments);
                    return t.type = "POST", $.ajax(t)
                }, $.getJSON = function() {
                    var t = u.apply(null, arguments);
                    return t.dataType = "json", $.ajax(t)
                }, $.fn.load = function(t, e, i) {
                    if (!this.length) {
                        return this
                    }
                    var n, a = this,
                        s = t.split(/\s/),
                        o = u(t, e, i),
                        r = o.success;
                    return s.length > 1 && (o.url = s[0], n = s[1]), o.success = function(t) {
                        a.html(n ? $("<div>").html(t.replace(v, "")).find(n) : t), r && r.apply(a, arguments)
                    }, $.ajax(o), this
                };
                var x = encodeURIComponent;
                $.param = function(t, e) {
                    var i = [];
                    return i.add = function(t, e) {
                        this.push(x(t) + "=" + x(e))
                    }, m(i, t, e), i.join("&").replace(/%20/g, "+")
                }
            }(e),
            function($) {
                $.fn.serializeArray = function() {
                    var t, e = [];
                    return $([].slice.call(this.get(0).elements)).each(function() {
                        t = $(this);
                        var i = t.attr("type");
                        "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                            name: t.attr("name"),
                            value: t.val()
                        })
                    }), e
                }, $.fn.serialize = function() {
                    var t = [];
                    return this.serializeArray().forEach(function(e) {
                        t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                    }), t.join("&")
                }, $.fn.submit = function(t) {
                    if (t) {
                        this.bind("submit", t)
                    } else {
                        if (this.length) {
                            var e = $.Event("submit");
                            this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit()
                        }
                    }
                    return this
                }
            }(e),
            function($) {
                "__proto__" in {} || $.extend($.zepto, {
                    Z: function(t, e) {
                        return t = t || [], $.extend(t, $.fn), t.selector = e || "", t.__Z = !0, t
                    },
                    isZ: function(t) {
                        return "array" === $.type(t) && "__Z" in t
                    }
                });
                try {
                    getComputedStyle(void 0)
                } catch (t) {
                    var e = getComputedStyle;
                    window.getComputedStyle = function(t, i) {
                        try {
                            return e(t, i)
                        } catch (n) {
                            return null
                        }
                    }
                }
            }(e), t.getJSON = e.getJSON, t.ajax = e.ajax
    }(TL), TL.Class = function() {}, TL.Class.extend = function(d) {
        var f = function() {
                this.initialize && this.initialize.apply(this, arguments)
            },
            c = function() {};
        c.prototype = this.prototype;
        var g = new c;
        g.constructor = f, f.prototype = g, f.superclass = this.prototype;
        for (var b in this) {
            this.hasOwnProperty(b) && "prototype" !== b && "superclass" !== b && (f[b] = this[b])
        }
        return d.statics && (TL.Util.extend(f, d.statics), delete d.statics), d.includes && (TL.Util.extend.apply(null, [g].concat(d.includes)), delete d.includes), d.options && g.options && (d.options = TL.Util.extend({}, g.options, d.options)), TL.Util.extend(g, d), f.extend = TL.Class.extend, f.include = function(a) {
            TL.Util.extend(this.prototype, a)
        }, f
    }, TL.Events = {
        addEventListener: function(b, c, a) {
            var d = this._tl_events = this._tl_events || {};
            return d[b] = d[b] || [], d[b].push({
                action: c,
                context: a || this
            }), this
        },
        hasEventListeners: function(a) {
            var b = "_tl_events";
            return b in this && a in this[b] && this[b][a].length > 0
        },
        removeEventListener: function(d, g, c) {
            if (!this.hasEventListeners(d)) {
                return this
            }
            for (var h = 0, b = this._tl_events, f = b[d].length; f > h; h++) {
                if (b[d][h].action === g && (!c || b[d][h].context === c)) {
                    return b[d].splice(h, 1), this
                }
            }
            return this
        },
        fireEvent: function(d, g) {
            if (!this.hasEventListeners(d)) {
                return this
            }
            for (var c = TL.Util.mergeData({
                    type: d,
                    target: this
                }, g), h = this._tl_events[d].slice(), b = 0, f = h.length; f > b; b++) {
                h[b].action.call(h[b].context || this, c)
            }
            return this
        }
    }, TL.Events.on = TL.Events.addEventListener, TL.Events.off = TL.Events.removeEventListener, TL.Events.fire = TL.Events.fireEvent,
    function() {
        var E = navigator.userAgent.toLowerCase(),
            y = document.documentElement,
            w = "ActiveXObject" in window,
            j = -1 !== E.indexOf("webkit"),
            B = -1 !== E.indexOf("phantom"),
            F = -1 !== E.search("android [23]"),
            g = "undefined" != typeof orientation,
            b = navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent,
            v = window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints || b,
            x = w && "transition" in y.style,
            z = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !F,
            A = "MozPerspective" in y.style,
            D = "OTransition" in y.style,
            q = (window.opera, "devicePixelRatio" in window && window.devicePixelRatio > 1);
        if (!q && "matchMedia" in window) {
            var C = window.matchMedia("(min-resolution:144dpi)");
            q = C && C.matches
        }
        var f = !window.L_NO_TOUCH && !B && (v || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch);
        TL.Browser = {
            ie: w,
            ua: E,
            ie9: Boolean(w && E.match(/MSIE 9/i)),
            ielt9: w && !document.addEventListener,
            webkit: j,
            firefox: -1 !== E.indexOf("gecko") && !j && !window.opera && !w,
            android: -1 !== E.indexOf("android"),
            android23: F,
            chrome: -1 !== E.indexOf("chrome"),
            edge: -1 !== E.indexOf("edge/"),
            ie3d: x,
            webkit3d: z,
            gecko3d: A,
            opera3d: D,
            any3d: !window.L_DISABLE_3D && (x || z || A || D) && !B,
            mobile: g,
            mobileWebkit: g && j,
            mobileWebkit3d: g && z,
            mobileOpera: g && window.opera,
            touch: !!f,
            msPointer: !!b,
            pointer: !!v,
            retina: !!q,
            orientation: function() {
                var c = window.innerWidth,
                    d = window.innerHeight,
                    a = "portrait";
                return c > d && (a = "landscape"), 90 == Math.abs(window.orientation), trace(a), a
            }
        }
    }(), TL.Load = function() {
        function a(d) {
            var c = 0,
                e = !1;
            for (c = 0; c < b.length; c++) {
                b[c] == d && (e = !0)
            }
            return e ? !0 : (b.push(d), !1)
        }
        var b = [];
        return {
            css: function(f, d, g, c) {
                a(f) ? d() : TL.LoadIt.css(f, d, g, c)
            },
            js: function(f, d, g, c) {
                a(f) ? d() : TL.LoadIt.js(f, d, g, c)
            }
        }
    }(this.document), TL.LoadIt = function(z) {
        function q(h, d) {
            var l, c = z.createElement(h);
            for (l in d) {
                d.hasOwnProperty(l) && c.setAttribute(l, d[l])
            }
            return c
        }

        function m(c) {
            var d, a, h = p[c];
            h && (d = h.callback, a = h.urls, a.shift(), v = 0, a.length || (d && d.call(h.context, h.obj), p[c] = null, w[c].length && x(c)))
        }

        function g() {
            var a = navigator.userAgent;
            b = {
                async: z.createElement("script").async === !0
            }, (b.webkit = /AppleWebKit\//.test(a)) || (b.ie = /MSIE/.test(a)) || (b.opera = /Opera/.test(a)) || (b.gecko = /Gecko\//.test(a)) || (b.unknown = !0)
        }

        function x(C, r, G, e, F) {
            var c, o, l, E, B, h, s = function() {
                    m(C)
                },
                D = "css" === C,
                t = [];
            if (b || g(), r) {
                if (r = "string" == typeof r ? [r] : r.concat(), D || b.async || b.gecko || b.opera) {
                    w[C].push({
                        urls: r,
                        callback: G,
                        obj: e,
                        context: F
                    })
                } else {
                    for (c = 0, o = r.length; o > c; ++c) {
                        w[C].push({
                            urls: [r[c]],
                            callback: c === o - 1 ? G : null,
                            obj: e,
                            context: F
                        })
                    }
                }
            }
            if (!p[C] && (E = p[C] = w[C].shift())) {
                for (j || (j = z.head || z.getElementsByTagName("head")[0]), B = E.urls, c = 0, o = B.length; o > c; ++c) {
                    h = B[c], D ? l = b.gecko ? q("style") : q("link", {
                        href: h,
                        rel: "stylesheet"
                    }) : (l = q("script", {
                        src: h
                    }), l.async = !1), l.className = "lazyload", l.setAttribute("charset", "utf-8"), b.ie && !D ? l.onreadystatechange = function() {
                        /loaded|complete/.test(l.readyState) && (l.onreadystatechange = null, s())
                    } : D && (b.gecko || b.webkit) ? b.webkit ? (E.urls[c] = l.href, f()) : (l.innerHTML = '@import "' + h + '";', A(l)) : l.onload = l.onerror = s, t.push(l)
                }
                for (c = 0, o = t.length; o > c; ++c) {
                    j.appendChild(t[c])
                }
            }
        }

        function A(a) {
            var c;
            try {
                c = !!a.sheet.cssRules
            } catch (d) {
                return v += 1, void(200 > v ? setTimeout(function() {
                    A(a)
                }, 50) : c && m("css"))
            }
            m("css")
        }

        function f() {
            var a, c = p.css;
            if (c) {
                for (a = y.length; --a >= 0;) {
                    if (y[a].href === c.urls[0]) {
                        m("css");
                        break
                    }
                }
                v += 1, c && (200 > v ? setTimeout(f, 50) : m("css"))
            }
        }
        var b, j, p = {},
            v = 0,
            w = {
                css: [],
                js: []
            },
            y = z.styleSheets;
        return {
            css: function(c, d, a, h) {
                x("css", c, d, a, h)
            },
            js: function(c, d, a, h) {
                x("js", c, d, a, h)
            }
        }
    }(this.document), TL.TimelineConfig = TL.Class.extend({
        includes: [],
        initialize: function(b) {
            if (this.title = "", this.scale = "", this.events = [], this.eras = [], this.event_dict = {}, this.messages = {
                    errors: [],
                    warnings: []
                }, "object" == typeof b && b.events) {
                if (this.scale = b.scale, this.events = [], this._ensureValidScale(b.events), b.title) {
                    var c = this._assignID(b.title);
                    this._tidyFields(b.title), this.title = b.title, this.event_dict[c] = this.title
                }
                for (var a = 0; a < b.events.length; a++) {
                    try {
                        this.addEvent(b.events[a], !0)
                    } catch (d) {
                        this.logError(d)
                    }
                }
                if (b.eras) {
                    for (var a = 0; a < b.eras.length; a++) {
                        try {
                            this.addEra(b.eras[a], !0)
                        } catch (d) {
                            this.logError("Era " + a + ": " + d)
                        }
                    }
                }
                TL.DateUtil.sortByDate(this.events), TL.DateUtil.sortByDate(this.eras)
            }
        },
        logError: function(a) {
            trace(a), this.messages.errors.push(a)
        },
        getErrors: function(a) {
            return a ? this.messages.errors.join(a) : this.messages.errors
        },
        validate: function() {
            ("undefined" == typeof this.events || "undefined" == typeof this.events.length || 0 == this.events.length) && this.logError("Timeline configuration has no events.");
            for (var a = 0; a < this.eras.length; a++) {
                if ("undefined" == typeof this.eras[a].start_date || "undefined" == typeof this.eras[a].end_date) {
                    var b;
                    b = this.eras[a].text && this.eras[a].text.headline ? this.eras[a].text.headline : "era " + (a + 1), this.logError("All eras must have start and end dates. [" + b + "]")
                }
            }
        },
        isValid: function() {
            return 0 == this.messages.errors.length
        },
        addEvent: function(b, c) {
            var a = this._assignID(b);
            if ("undefined" == typeof b.start_date) {
                throw new TL.Error("missing_start_date_err", a)
            }
            return this._processDates(b), this._tidyFields(b), this.events.push(b), this.event_dict[a] = b, c || TL.DateUtil.sortByDate(this.events), a
        },
        addEra: function(b, c) {
            var a = this._assignID(b);
            if ("undefined" == typeof b.start_date) {
                throw new TL.Error("missing_start_date_err", a)
            }
            return this._processDates(b), this._tidyFields(b), this.eras.push(b), this.event_dict[a] = b, c || TL.DateUtil.sortByDate(this.eras), a
        },
        _assignID: function(a) {
            var b = a.unique_id;
            return TL.Util.trim(b) || (b = a.text ? TL.Util.slugify(a.text.headline) : null), a.unique_id = TL.Util.ensureUniqueKey(this.event_dict, b), a.unique_id
        },
        _makeUniqueIdentifiers: function(d, f) {
            for (var c = [d], g = 0; g < f.length; g++) {
                TL.Util.trim(f[g].unique_id) && (f[g].unique_id = TL.Util.slugify(f[g].unique_id), -1 == c.indexOf(f[g].unique_id) ? c.push(f[g].unique_id) : f[g].unique_id = "")
            }
            if (c.length != f.length + 1) {
                for (var g = 0; g < f.length; g++) {
                    if (!f[g].unique_id) {
                        var b = f[g].text ? TL.Util.slugify(f[g].text.headline) : null;
                        b || (b = TL.Util.unique_ID(6)), -1 != c.indexOf(b) && (b = b + "-" + g), c.push(b), f[g].unique_id = b
                    }
                }
            }
        },
        _ensureValidScale: function(d) {
            if (!this.scale) {
                trace("Determining scale dynamically"), this.scale = "human";
                for (var f = 0; f < d.length; f++) {
                    if ("cosmological" == d[f].scale) {
                        this.scale = "cosmological";
                        break
                    }
                    if (d[f].start_date && "undefined" != typeof d[f].start_date.year) {
                        var c = new TL.BigDate(d[f].start_date),
                            g = c.data.date_obj.year;
                        if (-271820 > g || g > 275759) {
                            this.scale = "cosmological";
                            break
                        }
                    }
                }
            }
            var b = TL.DateUtil.SCALE_DATE_CLASSES[this.scale];
            b || this.logError("Don't know how to process dates on scale " + this.scale)
        },
        _processDates: function(d) {
            var f = TL.DateUtil.SCALE_DATE_CLASSES[this.scale];
            if (!(d.start_date instanceof f)) {
                var c = d.start_date;
                if (d.start_date = new f(c), "undefined" != typeof d.end_date && !(d.end_date instanceof f)) {
                    var g = d.end_date,
                        b = !0;
                    for (property in c) {
                        b = b && c[property] == g[property]
                    }
                    b ? (trace("End date same as start date is redundant; dropping end date"), delete d.end_date) : d.end_date = new f(g)
                }
            }
        },
        getEarliestDate: function() {
            var a = this.events[0].start_date;
            return this.eras && this.eras.length > 0 && this.eras[0].start_date.isBefore(a) ? this.eras[0].start_date : a
        },
        getLatestDate: function() {
            for (var a = [], b = 0; b < this.events.length; b++) {
                a.push(this.events[b].end_date ? {
                    date: this.events[b].end_date
                } : {
                    date: this.events[b].start_date
                })
            }
            for (var b = 0; b < this.eras.length; b++) {
                a.push(this.eras[b].end_date ? {
                    date: this.eras[b].end_date
                } : {
                    date: this.eras[b].start_date
                })
            }
            return TL.DateUtil.sortByDate(a, "date"), a.slice(-1)[0].date
        },
        _tidyFields: function(a) {
            function b(d, f, c) {
                c || (c = ""), d.hasOwnProperty(f) || (d[f] = c)
            }
            a.group && (a.group = TL.Util.trim(a.group)), a.text || (a.text = {}), b(a.text, "text"), b(a.text, "headline")
        }
    }),
    function(m) {
        function h(q) {
            parts = {
                key: null,
                worksheet: 0
            };
            var r = /\bkey=([-_A-Za-z0-9]+)&?/i,
                o = /docs.google.com\/spreadsheets(.*?)\/d\//;
            if (q.match(r)) {
                parts.key = q.match(r)[1]
            } else {
                if (q.match(o)) {
                    var s = q.search(o) + q.match(o)[0].length,
                        l = q.substr(s);
                    parts.key = l.split("/")[0], q.match(/\?gid=(\d+)/) && (parts.worksheet = q.match(/\?gid=(\d+)/)[1])
                } else {
                    q.match(/^\b[-_A-Za-z0-9]+$/) && (parts.key = q)
                }
            }
            return parts.key ? parts : null
        }

        function g(l) {
            var a = {};
            for (k in l) {
                0 == k.indexOf("gsx$") && (a[k.substr(4)] = l[k].$t)
            }
            if (m.Util.isEmptyObject(a)) {
                return null
            }
            var o = {
                media: {
                    caption: a.mediacaption || "",
                    credit: a.mediacredit || "",
                    url: a.media || "",
                    thumbnail: a.mediathumbnail || ""
                },
                text: {
                    headline: a.headline || "",
                    text: a.text || ""
                },
                group: a.tag || "",
                type: a.type || ""
            };
            return a.startdate && (o.start_date = m.Date.parseDate(a.startdate)), a.enddate && (o.end_date = m.Date.parseDate(a.enddate)), o
        }

        function d(r) {
            function o(a) {
                return a ? a.replace(/[\s,]+/g, "") : void 0
            }
            var t = {};
            for (k in r) {
                0 == k.indexOf("gsx$") && (t[k.substr(4)] = m.Util.trim(r[k].$t))
            }
            if (m.Util.isEmptyObject(t)) {
                return null
            }
            var l = {
                media: {
                    caption: t.mediacaption || "",
                    credit: t.mediacredit || "",
                    url: t.media || "",
                    thumbnail: t.mediathumbnail || ""
                },
                text: {
                    headline: t.headline || "",
                    text: t.text || ""
                },
                start_date: {
                    year: o(t.year),
                    month: o(t.month) || "",
                    day: o(t.day) || ""
                },
                end_date: {
                    year: o(t.endyear) || "",
                    month: o(t.endmonth) || "",
                    day: o(t.endday) || ""
                },
                display_date: t.displaydate || "",
                type: t.type || ""
            };
            if (t.time && m.Util.mergeData(l.start_date, m.DateUtil.parseTime(t.time)), t.endtime && m.Util.mergeData(l.end_date, m.DateUtil.parseTime(t.endtime)), t.group && (l.group = t.group), "" == l.end_date.year) {
                var q = l.end_date;
                if (delete l.end_date, "" != q.month || "" != q.day || "" != q.time) {
                    l.text.headline || trace("Invalid end date for spreadsheet row. Must have a year if any other date fields are specified.");
                    trace(r)
                }
            }
            return t.background && (l.background = t.background.match(/^(https?:)?\/\/?/) ? {
                url: t.background
            } : {
                color: t.background
            }), l
        }
        var j = function(o) {
                if ("undefined" == typeof o.feed.entry || 0 == o.feed.entry.length) {
                    throw new m.Error("empty_feed_err")
                }
                var l = o.feed.entry[0];
                if ("undefined" != typeof l.gsx$startdate) {
                    return g
                }
                if ("undefined" != typeof l.gsx$year) {
                    return d
                }
                throw new m.Error("invalid_data_format_err")
            },
            p = function(a) {
                return "https://spreadsheets.google.com/feeds/list/" + a.key + "/1/public/values?alt=json"
            },
            c = function(a) {
                var a = p(h(a)),
                    e = m.ajax({
                        url: a,
                        async: !1
                    });
                return e = JSON.parse(e.responseText), b(e)
            },
            b = function(l) {
                for (var v = {
                        events: [],
                        errors: [],
                        warnings: [],
                        eras: []
                    }, a = j(l), x = 0; x < l.feed.entry.length; x++) {
                    try {
                        var q = a(l.feed.entry[x]);
                        if (q) {
                            var w = "event";
                            "undefined" != typeof q.type && (w = q.type, delete q.type), "title" == w ? v.title ? (v.warnings.push("Multiple title slides detected."), v.events.push(q)) : v.title = q : "era" == w ? v.eras.push(q) : v.events.push(q)
                        }
                    } catch (u) {
                        u.message && (u = u.message), v.errors.push(u + " [" + x + "]")
                    }
                }
                return v
            },
            f = function(q, w) {
                var o, u = h(q);
                if (u) {
                    try {
                        var v = c(q)
                    } catch (e) {
                        return o = new m.TimelineConfig, o.logError("NetworkError" == e.name ? new m.Error("network_err") : "TL.Error" == e.name ? e : new m.Error("unknown_read_err", e.name)), void w(o)
                    }
                    if (o = new m.TimelineConfig(v), v.errors) {
                        for (var t = 0; t < v.errors.length; t++) {
                            o.logError(v.errors[t])
                        }
                    }
                    w(o)
                } else {
                    m.ajax({
                        url: q,
                        dataType: "json",
                        success: function(l) {
                            try {
                                o = new m.TimelineConfig(l)
                            } catch (a) {
                                o = new m.TimelineConfig, o.logError(a)
                            }
                            w(o)
                        },
                        error: function(r, a, l) {
                            if (o = new m.TimelineConfig, "parsererror" == a) {
                                var l = new m.Error("invalid_url_err")
                            } else {
                                var l = new m.Error("unknown_read_err", a)
                            }
                            o.logError(l), w(o)
                        }
                    })
                }
            };
        m.ConfigFactory = {
            parseGoogleSpreadsheetURL: h,
            googleFeedJSONtoTimelineJSON: b,
            fromGoogle: function(a) {
                return console.warn("TL.ConfigFactory.fromGoogle is deprecated and will be removed soon. Use TL.ConfigFactory.makeConfig(url,callback)"), c(a)
            },
            makeConfig: f
        }
    }(TL), TL.Language = function(d) {
        for (k in TL.Language.languages.en) {
            this[k] = TL.Language.languages.en[k]
        }
        if (d && d.language && "string" == typeof d.language && "en" != d.language) {
            var g = d.language;
            if (!(g in TL.Language.languages)) {
                if (/\.json$/.test(g)) {
                    var c = g
                } else {
                    var h = "/locale/" + g + ".json",
                        b = d.script_path || TL.Timeline.source_path;
                    /\/$/.test(b) && (h = h.substr(1));
                    var c = b + h
                }
                var f = TL.ajax({
                    url: c,
                    async: !1
                });
                if (200 != f.status) {
                    throw "Could not load language [" + g + "]: " + f.statusText
                }
                TL.Language.languages[g] = JSON.parse(f.responseText)
            }
            TL.Util.mergeData(this, TL.Language.languages[g])
        }
    }, TL.Language.formatNumber = function(b, c) {
        if (c.match(/%(\.(\d+))?f/)) {
            var a = c.match(/%(\.(\d+))?f/),
                d = a[0];
            return a[2] && (b = b.toFixed(a[2])), c.replace(d, b)
        }
        return c
    }, TL.Language.prototype.mergeData = function(a) {
        for (k in TL.Language.languages.en) {
            a[k] && ("object" == typeof this[k] ? TL.Util.mergeData(a[k], this[k]) : this[k] = a[k])
        }
    }, TL.Language.fallback = {
        messages: {}
    }, TL.Language.prototype.getMessage = function(a) {
        return this.messages[a] || TL.Language.fallback.messages[a] || a
    }, TL.Language.prototype._ = TL.Language.prototype.getMessage, TL.Language.prototype.formatDate = function(a, b) {
        return a.constructor == Date ? this.formatJSDate(a, b) : a.constructor == TL.BigYear ? this.formatBigYear(a, b) : a.data && a.data.date_obj ? this.formatDate(a.data.date_obj, b) : (trace("Unfamiliar date presented for formatting"), a.toString())
    }, TL.Language.prototype.formatBigYear = function(d, g) {
        var c = d.year,
            h = this.bigdateformats[g] || this.bigdateformats.fallback;
        if (h) {
            for (var b = 0; b < h.length; b++) {
                var f = h[b];
                if (Math.abs(c / f[0]) > 1) {
                    return TL.Language.formatNumber(Math.abs(c / f[0]), f[1])
                }
            }
            return c.toString()
        }
        return trace("Language file dateformats missing cosmological. Falling back."), TL.Language.formatNumber(c, g)
    }, TL.Language.prototype.formatJSDate = function(w, J) {
        var F = this,
            C = function(a, c) {
                var d = F.period_labels[a];
                if (d) {
                    var a = 12 > c ? d[0] : d[1]
                }
                return "<span class='tl-timeaxis-timesuffix'>" + a + "</span>"
            },
            M = !1,
            x = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            B = /[^-+\dA-Z]/g;
        J || (J = "full");
        var z = this.dateformats[J] || TL.Language.fallback.dateformats[J];
        z || (z = J);
        var E = M ? "getUTC" : "get",
            G = w[E + "Date"](),
            K = w[E + "Day"](),
            L = w[E + "Month"](),
            q = w[E + "FullYear"](),
            D = w[E + "Hours"](),
            N = w[E + "Minutes"](),
            A = w[E + "Seconds"](),
            I = w[E + "Milliseconds"](),
            H = M ? 0 : w.getTimezoneOffset(),
            j = {
                d: G,
                dd: TL.Util.pad(G),
                ddd: this.date.day_abbr[K],
                dddd: this.date.day[K],
                m: L + 1,
                mm: TL.Util.pad(L + 1),
                mmm: this.date.month_abbr[L],
                mmmm: this.date.month[L],
                yy: String(q).slice(2),
                yyyy: 0 > q && this.has_negative_year_modifier() ? Math.abs(q) : q,
                h: D % 12 || 12,
                hh: TL.Util.pad(D % 12 || 12),
                H: D,
                HH: TL.Util.pad(D),
                M: N,
                MM: TL.Util.pad(N),
                s: A,
                ss: TL.Util.pad(A),
                l: TL.Util.pad(I, 3),
                L: TL.Util.pad(I > 99 ? Math.round(I / 10) : I),
                t: C("t", D),
                tt: C("tt", D),
                T: C("T", D),
                TT: C("TT", D),
                Z: M ? "UTC" : (String(w).match(x) || [""]).pop().replace(B, ""),
                o: (H > 0 ? "-" : "+") + TL.Util.pad(100 * Math.floor(Math.abs(H) / 60) + Math.abs(H) % 60, 4),
                S: ["th", "st", "nd", "rd"][G % 10 > 3 ? 0 : (G % 100 - G % 10 != 10) * G % 10]
            },
            b = z.replace(TL.Language.DATE_FORMAT_TOKENS, function(a) {
                return a in j ? j[a] : a.slice(1, a.length - 1)
            });
        return this._applyEra(b, q)
    }, TL.Language.prototype.has_negative_year_modifier = function() {
        return Boolean(this.era_labels.negative_year.prefix || this.era_labels.negative_year.suffix)
    }, TL.Language.prototype._applyEra = function(b, c) {
        var a = 0 > c ? this.era_labels.negative_year : this.era_labels.positive_year,
            d = "";
        return a.prefix && (d += "<span>" + a.prefix + "</span> "), d += b, a.suffix && (d += " <span>" + a.suffix + "</span>"), d
    }, TL.Language.DATE_FORMAT_TOKENS = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, TL.Language.languages = {
        en: {
            name: "English",
            lang: "en",
            api: {
                wikipedia: "en"
            },
            messages: {
                loading: "Loading",
                wikipedia: "From Wikipedia, the free encyclopedia",
                error: "Error",
                contract_timeline: "Contract Timeline",
                return_to_title: "Return to Title",
                loading_content: "Loading Content",
                expand_timeline: "Expand Timeline",
                loading_timeline: "Loading Timeline... ",
                swipe_to_navigate: "Swipe to Navigate<br><span class='tl-button'>OK</span>",
                unknown_read_err: "An unexpected error occurred trying to read your spreadsheet data",
                invalid_url_err: "Unable to read Timeline data. Make sure your URL is for a Google Spreadsheet or a Timeline JSON file.",
                network_err: "Unable to read your Google Spreadsheet. Make sure you have published it to the web.",
                empty_feed_err: "No data entries found",
                missing_start_date_err: "Missing start_date",
                invalid_data_format_err: "Header row has been modified.",
                date_compare_err: "Can't compare TL.Dates on different scales",
                invalid_scale_err: "Invalid scale",
                invalid_date_err: "Invalid date: month, day and year must be numbers.",
                invalid_separator_error: "Invalid time: misuse of : or . as separator.",
                invalid_hour_err: "Invalid time (hour)",
                invalid_minute_err: "Invalid time (minute)",
                invalid_second_err: "Invalid time (second)",
                invalid_fractional_err: "Invalid time (fractional seconds)",
                invalid_second_fractional_err: "Invalid time (seconds and fractional seconds)",
                invalid_year_err: "Invalid year",
                flickr_notfound_err: "Photo not found or private",
                flickr_invalidurl_err: "Invalid Flickr URL",
                imgur_invalidurl_err: "Invalid Imgur URL",
                twitter_invalidurl_err: "Invalid Twitter URL",
                twitter_load_err: "Unable to load Tweet",
                twitterembed_invalidurl_err: "Invalid Twitter Embed url",
                wikipedia_load_err: "Unable to load Wikipedia entry",
                youtube_invalidurl_err: "Invalid YouTube URL",
                spotify_invalid_url: "Invalid Spotify URL",
                template_value_err: "No value provided for variable",
                invalid_rgb_err: "Invalid RGB argument",
                time_scale_scale_err: "Don't know how to get date from time for scale",
                axis_helper_no_options_err: "Axis helper must be configured with options",
                axis_helper_scale_err: "No AxisHelper available for scale",
                invalid_integer_option: "Invalid option valueâ€”must be a whole number."
            },
            date: {
                month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
                day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
            },
            era_labels: {
                positive_year: {
                    prefix: "",
                    suffix: ""
                },
                negative_year: {
                    prefix: "",
                    suffix: "BCE"
                }
            },
            period_labels: {
                t: ["a", "p"],
                tt: ["am", "pm"],
                T: ["A", "P"],
                TT: ["AM", "PM"]
            },
            dateformats: {
                year: "yyyy",
                month_short: "mmm",
                month: "mmmm yyyy",
                full_short: "mmm d",
                full: "mmmm d',' yyyy",
                time: "h:MM:ss TT' <small>'mmmm d',' yyyy'</small>'",
                time_short: "h:MM:ss TT",
                time_no_seconds_short: "h:MM TT",
                time_no_minutes_short: "h TT",
                time_no_seconds_small_date: "h:MM TT' <small>'mmmm d',' yyyy'</small>'",
                time_milliseconds: "l",
                full_long: "mmm d',' yyyy 'at' h:MM TT",
                full_long_small_date: "h:MM TT' <small>mmm d',' yyyy'</small>'"
            },
            bigdateformats: {
                fallback: [
                    [1000000000, "%.2f billion years ago"],
                    [1000000, "%.1f million years ago"],
                    [1000, "%.1f thousand years ago"],
                    [1, "%f years ago"]
                ],
                compact: [
                    [1000000000, "%.2f bya"],
                    [1000000, "%.1f mya"],
                    [1000, "%.1f kya"],
                    [1, "%f years ago"]
                ],
                verbose: [
                    [1000000000, "%.2f billion years ago"],
                    [1000000, "%.1f million years ago"],
                    [1000, "%.1f thousand years ago"],
                    [1, "%f years ago"]
                ]
            }
        }
    }, TL.Language.fallback = new TL.Language, TL.I18NMixins = {
        getLanguage: function() {
            return this.options && this.options.language ? this.options.language : (trace("Expected a language option"), TL.Language.fallback)
        },
        _: function(a) {
            return this.getLanguage()._(a)
        }
    }, TL.Easings = {
        ease: [0.25, 0.1, 0.25, 1],
        linear: [0, 0, 1, 1],
        easein: [0.42, 0, 1, 1],
        easeout: [0, 0, 0.58, 1],
        easeinout: [0.42, 0, 0.58, 1]
    }, TL.Ease = {
        KeySpline: function(d) {
            function g(a, l) {
                return 1 - 3 * l + 3 * a
            }

            function c(a, l) {
                return 3 * l - 6 * a
            }

            function j(a) {
                return 3 * a
            }

            function b(l, e, m) {
                return ((g(e, m) * l + c(e, m)) * l + j(e)) * l
            }

            function f(l, e, m) {
                return 3 * g(e, m) * l * l + 2 * c(e, m) * l + j(e)
            }

            function h(m) {
                for (var a = m, q = 0; 4 > q; ++q) {
                    var p = f(a, d[0], d[2]);
                    if (0 == p) {
                        return a
                    }
                    var l = b(a, d[0], d[2]) - m;
                    a -= l / p
                }
                return a
            }
            this.get = function(a) {
                return d[0] == d[1] && d[2] == d[3] ? a : b(h(a), d[1], d[3])
            }
        },
        easeInSpline: function(a) {
            var b = new TL.Ease.KeySpline(TL.Easings.easein);
            return b.get(a)
        },
        easeInOutExpo: function(a) {
            var b = new TL.Ease.KeySpline(TL.Easings.easein);
            return b.get(a)
        },
        easeOut: function(a) {
            return Math.sin(a * Math.PI / 2)
        },
        easeOutStrong: function(a) {
            return 1 == a ? 1 : 1 - Math.pow(2, -10 * a)
        },
        easeIn: function(a) {
            return a * a
        },
        easeInStrong: function(a) {
            return 0 == a ? 0 : Math.pow(2, 10 * (a - 1))
        },
        easeOutBounce: function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        },
        easeInBack: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        easeOutBack: function(a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        },
        bounce: function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        },
        bouncePast: function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        },
        swingTo: function(a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        },
        swingFrom: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        elastic: function(a) {
            return -1 * Math.pow(4, -8 * a) * Math.sin(2 * (6 * a - 1) * Math.PI / 2) + 1
        },
        spring: function(a) {
            return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
        },
        blink: function(a, b) {
            return Math.round(a * (b || 5)) % 2
        },
        pulse: function(a, b) {
            return -Math.cos(a * ((b || 5) - 0.5) * 2 * Math.PI) / 2 + 0.5
        },
        wobble: function(a) {
            return -Math.cos(a * Math.PI * 9 * a) / 2 + 0.5
        },
        sinusoidal: function(a) {
            return -Math.cos(a * Math.PI) / 2 + 0.5
        },
        flicker: function(a) {
            var a = a + (Math.random() - 0.5) / 5;
            return easings.sinusoidal(0 > a ? 0 : a > 1 ? 1 : a)
        },
        mirror: function(a) {
            return easings.sinusoidal(0.5 > a ? 2 * a : 1 - 2 * (a - 0.5))
        },
        easeInQuad: function(a) {
            return a * a
        },
        easeOutQuad: function(a) {
            return a * (2 - a)
        },
        easeInOutQuad: function(a) {
            return 0.5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a
        },
        easeInCubic: function(a) {
            return a * a * a
        },
        easeOutCubic: function(a) {
            return --a * a * a + 1
        },
        easeInOutCubic: function(a) {
            return 0.5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
        },
        easeInQuart: function(a) {
            return a * a * a * a
        },
        easeOutQuart: function(a) {
            return 1 - --a * a * a * a
        },
        easeInOutQuart: function(a) {
            return 0.5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a
        },
        easeInQuint: function(a) {
            return a * a * a * a * a
        },
        easeOutQuint: function(a) {
            return 1 + --a * a * a * a * a
        },
        easeInOutQuint: function(a) {
            return 0.5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a
        }
    }, TL.Animate = function(b, c) {
        var a = new tlanimate(b, c);
        return a
    }, window.tlanimate = function() {
        function ad(b, c, a) {
            if (Array.prototype.indexOf) {
                return b.indexOf(c)
            }
            for (a = 0; a < b.length; ++a) {
                if (b[a] === c) {
                    return a
                }
            }
        }

        function ar(b) {
            var a, c = F.length;
            for (z && b > 1000000000000 && (b = K()), av && (b = K()), a = c; a--;) {
                F[a](b)
            }
            F.length && G(ar)
        }

        function an(a) {
            1 === F.push(a) && G(ar)
        }

        function ai(b) {
            var a, c = ad(F, b);
            c >= 0 && (a = F.slice(c + 1), F.length = c, F = F.concat(a))
        }

        function aw(b, c) {
            var a, d = {};
            return (a = b.match(R)) && (d.rotate = ag(a[1], c ? c.rotate : null)), (a = b.match(B)) && (d.scale = ag(a[1], c ? c.scale : null)), (a = b.match(W)) && (d.skewx = ag(a[1], c ? c.skewx : null), d.skewy = ag(a[3], c ? c.skewy : null)), (a = b.match(H)) && (d.translatex = ag(a[1], c ? c.translatex : null), d.translatey = ag(a[3], c ? c.translatey : null)), d
        }

        function ae(a) {
            var b = "";
            return "rotate" in a && (b += "rotate(" + a.rotate + "deg) "), "scale" in a && (b += "scale(" + a.scale + ") "), "translatex" in a && (b += "translate(" + a.translatex + "px," + a.translatey + "px) "), "skewx" in a && (b += "skew(" + a.skewx + "deg," + a.skewy + "deg)"), b
        }

        function ah(b, c, a) {
            return "#" + (1 << 24 | b << 16 | c << 8 | a).toString(16).slice(1)
        }

        function af(a) {
            var b = a.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            return (b ? ah(b[1], b[2], b[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
        }

        function ak(a) {
            return a.replace(/-(.)/g, function(b, c) {
                return c.toUpperCase()
            })
        }

        function ao(a) {
            return "function" == typeof a
        }

        function at(a) {
            return Math.sin(a * Math.PI / 2)
        }

        function au(D, w, y, E, f, b) {
            function j(c) {
                var a = c - A;
                return a > x || d ? (b = isFinite(b) ? b : 1, d ? v && w(b) : w(b), ai(j), y && y.apply(C)) : void w(isFinite(b) ? h * E(a / x) + f : E(a / x))
            }
            E = ao(E) ? E : aq.easings[E] || at;
            var x = D || Z,
                C = this,
                h = b - f,
                A = K(),
                d = 0,
                v = 0;
            return an(j), {
                stop: function(a) {
                    d = 1, v = a, a || (y = null)
                }
            }
        }

        function ac(d, g) {
            var c, h, b = d.length,
                f = [];
            for (c = 0; b > c; ++c) {
                f[c] = [d[c][0], d[c][1]]
            }
            for (h = 1; b > h; ++h) {
                for (c = 0; b - h > c; ++c) {
                    f[c][0] = (1 - g) * f[c][0] + g * f[parseInt(c + 1, 10)][0], f[c][1] = (1 - g) * f[c][1] + g * f[parseInt(c + 1, 10)][1]
                }
            }
            return [f[0][0], f[0][1]]
        }

        function aj(d, h, c) {
            var l, b, f, j, g = [];
            for (l = 0; 6 > l; l++) {
                f = Math.min(15, parseInt(h.charAt(l), 16)), j = Math.min(15, parseInt(c.charAt(l), 16)), b = Math.floor((j - f) * d + f), b = b > 15 ? 15 : 0 > b ? 0 : b, g[l] = b.toString(16)
            }
            return "#" + g.join("")
        }

        function ax(d, h, c, l, b, f, j) {
            if ("transform" == b) {
                j = {};
                for (var g in c[f][b]) {
                    j[g] = g in l[f][b] ? Math.round(((l[f][b][g] - c[f][b][g]) * d + c[f][b][g]) * Z) / Z : c[f][b][g]
                }
                return j
            }
            return "string" == typeof c[f][b] ? aj(d, c[f][b], l[f][b]) : (j = Math.round(((l[f][b] - c[f][b]) * d + c[f][b]) * Z) / Z, b in Q || (j += h[f][b] || "px"), j)
        }

        function ag(d, f, c, g, b) {
            return (c = J.exec(d)) ? (b = parseFloat(c[2])) && f + ("+" == c[1] ? 1 : -1) * b : parseFloat(d)
        }

        function aq(D, aB) {
            var ay, P, O, aC = D ? aC = isFinite(D.length) ? D : [D] : [],
                U = aB.complete,
                aA = aB.duration,
                az = aB.easing,
                u = aB.bezier,
                p = [],
                a = [],
                l = [],
                s = [];
            for (u && (P = aB.left, O = aB.top, delete aB.right, delete aB.bottom, delete aB.left, delete aB.top), ay = aC.length; ay--;) {
                if (p[ay] = {}, a[ay] = {}, l[ay] = {}, u) {
                    var aD = am(aC[ay], "left"),
                        r = am(aC[ay], "top"),
                        j = [ag(ao(P) ? P(aC[ay]) : P || 0, parseFloat(aD)), ag(ao(O) ? O(aC[ay]) : O || 0, parseFloat(r))];
                    s[ay] = ao(u) ? u(aC[ay], j) : u, s[ay].push(j), s[ay].unshift([parseInt(aD, 10), parseInt(r, 10)])
                }
                for (var A in aB) {
                    switch (A) {
                        case "complete":
                        case "duration":
                        case "easing":
                        case "bezier":
                            continue
                    }
                    var c, I = am(aC[ay], A),
                        h = ao(aB[A]) ? aB[A](aC[ay]) : aB[A];
                    "string" != typeof h || !al.test(h) || al.test(I) ? (p[ay][A] = "transform" == A ? aw(I) : "string" == typeof h && al.test(h) ? af(I).slice(1) : parseFloat(I), a[ay][A] = "transform" == A ? aw(h, p[ay][A]) : "string" == typeof h && "#" == h.charAt(0) ? af(h).slice(1) : ag(h, parseFloat(I)), "string" == typeof h && (c = h.match(V)) && (l[ay][A] = c[1])) : delete aB[A]
                }
            }
            return au.apply(aC, [aA, function(d, f, b) {
                for (ay = aC.length; ay--;) {
                    u && (b = ac(s[ay], d), aC[ay].style.left = b[0] + "px", aC[ay].style.top = b[1] + "px");
                    for (var e in aB) {
                        f = ax(d, l, p, a, e, ay), "transform" == e ? aC[ay].style[X] = ae(f) : "opacity" != e || q ? aC[ay].style[ak(e)] = f : aC[ay].style.filter = "alpha(opacity=" + 100 * f + ")"
                    }
                }
            }, U, az])
        }
        var ap = document,
            ab = window,
            Y = ab.performance,
            z = Y && (Y.now || Y.webkitNow || Y.msNow || Y.mozNow),
            K = z ? function() {
                return z.call(Y)
            } : function() {
                return +new Date
            },
            aa = ap.documentElement,
            av = !1,
            Z = 1000,
            al = /^rgb\(|#/,
            J = /^([+\-])=([\d\.]+)/,
            V = /^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,
            R = /rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/,
            B = /scale\(((?:[+\-]=)?([\d\.]+))\)/,
            W = /skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/,
            H = /translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/,
            Q = {
                lineHeight: 1,
                zoom: 1,
                zIndex: 1,
                opacity: 1,
                transform: 1
            },
            X = function() {
                var b, c = ap.createElement("a").style,
                    a = ["webkitTransform", "MozTransform", "OTransform", "msTransform", "Transform"];
                for (b = 0; b < a.length; b++) {
                    if (a[b] in c) {
                        return a[b]
                    }
                }
            }(),
            q = function() {
                return "undefined" != typeof ap.createElement("a").style.opacity
            }(),
            am = ap.defaultView && ap.defaultView.getComputedStyle ? function(b, c) {
                c = "transform" == c ? X : c, c = ak(c);
                var a = null,
                    d = ap.defaultView.getComputedStyle(b, "");
                return d && (a = d[c]), b.style[c] || a
            } : aa.currentStyle ? function(d, g) {
                if (g = ak(g), "opacity" == g) {
                    var c = 100;
                    try {
                        c = d.filters["DXImageTransform.Microsoft.Alpha"].opacity
                    } catch (h) {
                        try {
                            c = d.filters("alpha").opacity
                        } catch (b) {}
                    }
                    return c / 100
                }
                var f = d.currentStyle ? d.currentStyle[g] : null;
                return d.style[g] || f
            } : function(a, b) {
                return a.style[ak(b)]
            },
            G = function() {
                return ab.requestAnimationFrame || ab.webkitRequestAnimationFrame || ab.mozRequestAnimationFrame || ab.msRequestAnimationFrame || ab.oRequestAnimationFrame || function(a) {
                    ab.setTimeout(function() {
                        a(+new Date)
                    }, 17)
                }
            }(),
            F = [];
        return G(function(a) {
            av = a > 1000000000000 != K() > 1000000000000
        }), aq.tween = au, aq.getStyle = am, aq.bezier = ac, aq.transform = X, aq.parseTransform = aw, aq.formatTransform = ae, aq.easings = {}, aq
    }(), TL.Point = function(b, c, a) {
        this.x = a ? Math.round(b) : b, this.y = a ? Math.round(c) : c
    }, TL.Point.prototype = {
        add: function(a) {
            return this.clone()._add(a)
        },
        _add: function(a) {
            return this.x += a.x, this.y += a.y, this
        },
        subtract: function(a) {
            return this.clone()._subtract(a)
        },
        _subtract: function(a) {
            return this.x -= a.x, this.y -= a.y, this
        },
        divideBy: function(a, b) {
            return new TL.Point(this.x / a, this.y / a, b)
        },
        multiplyBy: function(a) {
            return new TL.Point(this.x * a, this.y * a)
        },
        distanceTo: function(b) {
            var c = b.x - this.x,
                a = b.y - this.y;
            return Math.sqrt(c * c + a * a)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        clone: function() {
            return new TL.Point(this.x, this.y)
        },
        toString: function() {
            return "Point(" + TL.Util.formatNum(this.x) + ", " + TL.Util.formatNum(this.y) + ")"
        }
    }, TL.DomMixins = {
        show: function(a) {
            a || (this._el.container.style.display = "block")
        },
        hide: function() {
            this._el.container.style.display = "none"
        },
        addTo: function(a) {
            a.appendChild(this._el.container), this.onAdd()
        },
        removeFrom: function(a) {
            a.removeChild(this._el.container), this.onRemove()
        },
        animatePosition: function(b, c) {
            var a = {
                duration: this.options.duration,
                easing: this.options.ease
            };
            for (var d in b) {
                b.hasOwnProperty(d) && (a[d] = b[d] + "px")
            }
            this.animator && this.animator.stop(), this.animator = TL.Animate(c, a)
        },
        onLoaded: function() {
            this.fire("loaded", this.data)
        },
        onAdd: function() {
            this.fire("added", this.data)
        },
        onRemove: function() {
            this.fire("removed", this.data)
        },
        setPosition: function(b, c) {
            for (var a in b) {
                b.hasOwnProperty(a) && (c ? c.style[a] = b[a] + "px" : this._el.container.style[a] = b[a] + "px")
            }
        },
        getPosition: function() {
            return TL.Dom.getPosition(this._el.container)
        }
    }, TL.Dom = {
        get: function(a) {
            return "string" == typeof a ? document.getElementById(a) : a
        },
        getByClass: function(a) {
            return a ? document.getElementsByClassName(a) : void 0
        },
        create: function(b, c, a) {
            var d = document.createElement(b);
            return d.className = c, a && a.appendChild(d), d
        },
        createText: function(b, c) {
            var a = document.createTextNode(b);
            return c && c.appendChild(a), a
        },
        getTranslateString: function(a) {
            return TL.Dom.TRANSLATE_OPEN + a.x + "px," + a.y + "px" + TL.Dom.TRANSLATE_CLOSE
        },
        setPosition: function(a, b) {
            a._tl_pos = b, TL.Browser.webkit3d ? (a.style[TL.Dom.TRANSFORM] = TL.Dom.getTranslateString(b), TL.Browser.android && (a.style["-webkit-perspective"] = "1000", a.style["-webkit-backface-visibility"] = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
        },
        getPosition: function(a) {
            for (var b = {
                    x: 0,
                    y: 0
                }; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) {
                b.x += a.offsetLeft, b.y += a.offsetTop, a = a.offsetParent
            }
            return b
        },
        testProp: function(b) {
            for (var c = document.documentElement.style, a = 0; a < b.length; a++) {
                if (b[a] in c) {
                    return b[a]
                }
            }
            return !1
        }
    }, TL.Util.mergeData(TL.Dom, {
        TRANSITION: TL.Dom.testProp(["transition", "webkitTransition", "OTransition", "MozTransition", "msTransition"]),
        TRANSFORM: TL.Dom.testProp(["transformProperty", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
        TRANSLATE_OPEN: "translate" + (TL.Browser.webkit3d ? "3d(" : "("),
        TRANSLATE_CLOSE: TL.Browser.webkit3d ? ",0)" : ")"
    }), TL.DomUtil = {
        get: function(a) {
            return "string" == typeof a ? document.getElementById(a) : a
        },
        getStyle: function(b, c) {
            var a = b.style[c];
            if (!a && b.currentStyle && (a = b.currentStyle[c]), !a || "auto" === a) {
                var d = document.defaultView.getComputedStyle(b, null);
                a = d ? d[c] : null
            }
            return "auto" === a ? null : a
        },
        getViewportOffset: function(d) {
            var f = 0,
                c = 0,
                g = d,
                b = document.body;
            do {
                if (f += g.offsetTop || 0, c += g.offsetLeft || 0, g.offsetParent === b && "absolute" === TL.DomUtil.getStyle(g, "position")) {
                    break
                }
                g = g.offsetParent
            } while (g);
            g = d;
            do {
                if (g === b) {
                    break
                }
                f -= g.scrollTop || 0, c -= g.scrollLeft || 0, g = g.parentNode
            } while (g);
            return new TL.Point(c, f)
        },
        create: function(b, c, a) {
            var d = document.createElement(b);
            return d.className = c, a && a.appendChild(d), d
        },
        disableTextSelection: function() {
            document.selection && document.selection.empty && document.selection.empty(), this._onselectstart || (this._onselectstart = document.onselectstart, document.onselectstart = TL.Util.falseFn)
        },
        enableTextSelection: function() {
            document.onselectstart = this._onselectstart, this._onselectstart = null
        },
        hasClass: function(a, b) {
            return a.className.length > 0 && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        },
        addClass: function(a, b) {
            TL.DomUtil.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
        },
        removeClass: function(a, b) {
            a.className = a.className.replace(/(\S+)\s*/g, function(d, c) {
                return c === b ? "" : d
            }).replace(/^\s+/, "")
        },
        setOpacity: function(a, b) {
            TL.Browser.ie ? a.style.filter = "alpha(opacity=" + Math.round(100 * b) + ")" : a.style.opacity = b
        },
        testProp: function(b) {
            for (var c = document.documentElement.style, a = 0; a < b.length; a++) {
                if (b[a] in c) {
                    return b[a]
                }
            }
            return !1
        },
        getTranslateString: function(a) {
            return TL.DomUtil.TRANSLATE_OPEN + a.x + "px," + a.y + "px" + TL.DomUtil.TRANSLATE_CLOSE
        },
        getScaleString: function(d, f) {
            var c = TL.DomUtil.getTranslateString(f),
                g = " scale(" + d + ") ",
                b = TL.DomUtil.getTranslateString(f.multiplyBy(-1));
            return c + g + b
        },
        setPosition: function(a, b) {
            a._tl_pos = b, TL.Browser.webkit3d ? (a.style[TL.DomUtil.TRANSFORM] = TL.DomUtil.getTranslateString(b), TL.Browser.android && (a.style["-webkit-perspective"] = "1000", a.style["-webkit-backface-visibility"] = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
        },
        getPosition: function(a) {
            return a._tl_pos
        }
    }, TL.DomEvent = {
        addListener: function(m, h, g, d) {
            var j = TL.Util.stamp(g),
                p = "_tl_" + h + j;
            if (!m[p]) {
                var c = function(a) {
                    return g.call(d || m, a || TL.DomEvent._getEvent())
                };
                if (TL.Browser.touch && "dblclick" === h && this.addDoubleTapListener) {
                    this.addDoubleTapListener(m, c, j)
                } else {
                    if ("addEventListener" in m) {
                        if ("mousewheel" === h) {
                            m.addEventListener("DOMMouseScroll", c, !1), m.addEventListener(h, c, !1)
                        } else {
                            if ("mouseenter" === h || "mouseleave" === h) {
                                var b = c,
                                    f = "mouseenter" === h ? "mouseover" : "mouseout";
                                c = function(a) {
                                    return TL.DomEvent._checkMouse(m, a) ? b(a) : void 0
                                }, m.addEventListener(f, c, !1)
                            } else {
                                m.addEventListener(h, c, !1)
                            }
                        }
                    } else {
                        "attachEvent" in m && m.attachEvent("on" + h, c)
                    }
                }
                m[p] = c
            }
        },
        removeListener: function(d, g, c) {
            var h = TL.Util.stamp(c),
                b = "_tl_" + g + h,
                f = d[b];
            f && (TL.Browser.touch && "dblclick" === g && this.removeDoubleTapListener ? this.removeDoubleTapListener(d, h) : "removeEventListener" in d ? "mousewheel" === g ? (d.removeEventListener("DOMMouseScroll", f, !1), d.removeEventListener(g, f, !1)) : "mouseenter" === g || "mouseleave" === g ? d.removeEventListener("mouseenter" === g ? "mouseover" : "mouseout", f, !1) : d.removeEventListener(g, f, !1) : "detachEvent" in d && d.detachEvent("on" + g, f), d[b] = null)
        },
        _checkMouse: function(b, c) {
            var a = c.relatedTarget;
            if (!a) {
                return !0
            }
            try {
                for (; a && a !== b;) {
                    a = a.parentNode
                }
            } catch (d) {
                return !1
            }
            return a !== b
        },
        _getEvent: function() {
            var a = window.event;
            if (!a) {
                for (var b = arguments.callee.caller; b && (a = b.arguments[0], !a || window.Event !== a.constructor);) {
                    b = b.caller
                }
            }
            return a
        },
        stopPropagation: function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
        },
        disableClickPropagation: function(a) {
            TL.DomEvent.addListener(a, TL.Draggable.START, TL.DomEvent.stopPropagation), TL.DomEvent.addListener(a, "click", TL.DomEvent.stopPropagation), TL.DomEvent.addListener(a, "dblclick", TL.DomEvent.stopPropagation)
        },
        preventDefault: function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        stop: function(a) {
            TL.DomEvent.preventDefault(a), TL.DomEvent.stopPropagation(a)
        },
        getWheelDelta: function(a) {
            var b = 0;
            return a.wheelDelta && (b = a.wheelDelta / 120), a.detail && (b = -a.detail / 3), b
        }
    }, TL.StyleSheet = TL.Class.extend({
        includes: [TL.Events],
        _el: {},
        initialize: function() {
            this.style = document.createElement("style"), this.style.appendChild(document.createTextNode("")), document.head.appendChild(this.style), this.sheet = this.style.sheet
        },
        addRule: function(b, c, a) {
            var d = 0;
            a && (d = a), "insertRule" in this.sheet ? this.sheet.insertRule(b + "{" + c + "}", d) : "addRule" in this.sheet && this.sheet.addRule(b, c, d)
        },
        onLoaded: function() {
            this._state.loaded = !0, this.fire("loaded", this.data)
        }
    }), TL.Date = TL.Class.extend({
        initialize: function(b, c, a) {
            "number" == typeof b ? this.data = {
                format: "yyyy mmmm",
                date_obj: new Date(b)
            } : Date == b.constructor ? this.data = {
                format: "yyyy mmmm",
                date_obj: b
            } : (this.data = JSON.parse(JSON.stringify(b)), this._createDateObj()), this._setFormat(c, a)
        },
        setDateFormat: function(a) {
            this.data.format = a
        },
        getDisplayDate: function(b, c) {
            if (this.data.display_date) {
                return this.data.display_date
            }
            b || (b = TL.Language.fallback), b.constructor != TL.Language && (trace("First argument to getDisplayDate must be TL.Language"), b = TL.Language.fallback);
            var a = c || this.data.format;
            return b.formatDate(this.data.date_obj, a)
        },
        getMillisecond: function() {
            return this.getTime()
        },
        getTime: function() {
            return this.data.date_obj.getTime()
        },
        isBefore: function(a) {
            if (!this.data.date_obj.constructor == a.data.date_obj.constructor) {
                throw new TL.Error("date_compare_err")
            }
            return "isBefore" in this.data.date_obj ? this.data.date_obj.isBefore(a.data.date_obj) : this.data.date_obj < a.data.date_obj
        },
        isAfter: function(a) {
            if (!this.data.date_obj.constructor == a.data.date_obj.constructor) {
                throw new TL.Error("date_compare_err")
            }
            return "isAfter" in this.data.date_obj ? this.data.date_obj.isAfter(a.data.date_obj) : this.data.date_obj > a.data.date_obj
        },
        floor: function(b) {
            for (var c = new Date(this.data.date_obj.getTime()), a = 0; a < TL.Date.SCALES.length; a++) {
                if (TL.Date.SCALES[a][2](c), TL.Date.SCALES[a][0] == b) {
                    return new TL.Date(c)
                }
            }
            throw new TL.Error("invalid_scale_err", b)
        },
        _getDateData: function() {
            var d = {
                year: 0,
                month: 1,
                day: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            };
            TL.Util.mergeData(d, this.data);
            var f = TL.Date.DATE_PARTS;
            for (var c in f) {
                var g = TL.Util.trim(d[f[c]]);
                if (!g.match(/^-?\d*$/)) {
                    throw new TL.Error("invalid_date_err", f[c] + " = '" + d[f[c]] + "'")
                }
                var b = parseInt(d[f[c]]);
                isNaN(b) && (b = 4 == c || 5 == c ? 1 : 0), d[f[c]] = b
            }
            return d.month > 0 && d.month <= 12 && (d.month = d.month - 1), d
        },
        _createDateObj: function() {
            var a = this._getDateData();
            this.data.date_obj = new Date(a.year, a.month, a.day, a.hour, a.minute, a.second, a.millisecond), this.data.date_obj.getFullYear() != a.year && this.data.date_obj.setFullYear(a.year)
        },
        findBestFormat: function(b) {
            for (var c = TL.Date.DATE_PARTS, a = 0; a < c.length; a++) {
                if (this.data[c[a]]) {
                    return b ? b in TL.Date.BEST_DATEFORMATS || (b = "short") : b = "base", TL.Date.BEST_DATEFORMATS[b][c[a]]
                }
            }
            return ""
        },
        _setFormat: function(a, b) {
            a ? this.data.format = a : this.data.format || (this.data.format = this.findBestFormat()), b ? this.data.format_short = b : this.data.format_short || (this.data.format_short = this.findBestFormat(!0))
        }
    }), TL.Date.makeDate = function(a) {
        var b = new TL.Date(a);
        return isNaN(b.getTime()) ? new TL.BigDate(a) : b
    }, TL.BigYear = TL.Class.extend({
        initialize: function(a) {
            if (this.year = parseInt(a), isNaN(this.year)) {
                throw new TL.Error("invalid_year_err", a)
            }
        },
        isBefore: function(a) {
            return this.year < a.year
        },
        isAfter: function(a) {
            return this.year > a.year
        },
        getTime: function() {
            return this.year
        }
    }),
    function(b) {
        b.SCALES = [
            ["millisecond", 1, function() {}],
            ["second", 1000, function(d) {
                d.setMilliseconds(0)
            }],
            ["minute", 60000, function(d) {
                d.setSeconds(0)
            }],
            ["hour", 3600000, function(d) {
                d.setMinutes(0)
            }],
            ["day", 86400000, function(d) {
                d.setHours(0)
            }],
            ["month", 2592000000, function(d) {
                d.setDate(1)
            }],
            ["year", 31536000000, function(d) {
                d.setMonth(0)
            }],
            ["decade", 315360000000, function(d) {
                var f = d.getFullYear();
                d.setFullYear(f - f % 10)
            }],
            ["century", 3153600000000, function(d) {
                var f = d.getFullYear();
                d.setFullYear(f - f % 100)
            }],
            ["millennium", 31536000000000, function(d) {
                var f = d.getFullYear();
                d.setFullYear(f - f % 1000)
            }]
        ], b.DATE_PARTS = ["millisecond", "second", "minute", "hour", "day", "month", "year"];
        var c = /^([\+-]?\d+?)(-\d{2}?)?(-\d{2}?)?$/,
            a = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
        b.parseISODate = function(d) {
            var f = new Date(d);
            if (isNaN(f)) {
                throw new TL.Error("invalid_date_err", d)
            }
            return {
                year: f.getFullYear(),
                month: f.getMonth() + 1,
                day: f.getDate(),
                hour: f.getHours(),
                minute: f.getMinutes(),
                second: f.getSeconds(),
                millisecond: f.getMilliseconds()
            }
        }, b.parseDate = function(p) {
            if (p.match(c)) {
                var e = p.match(c).slice(1),
                    g = {
                        year: e[0].replace("+", "")
                    };
                return e[1] && (g.month = e[1].replace("-", "")), e[2] && (g.day = e[2].replace("-", "")), g
            }
            if (p.match(a)) {
                return b.parseISODate(p)
            }
            if (p.match(/^\-?\d+$/)) {
                return {
                    year: p
                }
            }
            var m = {};
            if (p.match(/\d+\/\d+\/\d+/)) {
                var j = p.match(/\d+\/\d+\/\d+/)[0];
                p = TL.Util.trim(p.replace(j, ""));
                var d = j.split("/");
                m.month = d[0], m.day = d[1], m.year = d[2]
            }
            if (p.match(/\d+\/\d+/)) {
                var j = p.match(/\d+\/\d+/)[0];
                p = TL.Util.trim(p.replace(j, ""));
                var d = j.split("/");
                m.month = d[0], m.year = d[1]
            }
            if (p.match(":")) {
                var f = p.split(":");
                m.hour = f[0], m.minute = f[1], f[2] && (second_parts = f[2].split("."), m.second = second_parts[0], m.millisecond = second_parts[1])
            }
            return m
        }, b.BEST_DATEFORMATS = {
            base: {
                millisecond: "time_short",
                second: "time",
                minute: "time_no_seconds_small_date",
                hour: "time_no_seconds_small_date",
                day: "full",
                month: "month",
                year: "year",
                decade: "year",
                century: "year",
                millennium: "year",
                age: "fallback",
                epoch: "fallback",
                era: "fallback",
                eon: "fallback",
                eon2: "fallback"
            },
            "short": {
                millisecond: "time_short",
                second: "time_short",
                minute: "time_no_seconds_short",
                hour: "time_no_minutes_short",
                day: "full_short",
                month: "month_short",
                year: "year",
                decade: "year",
                century: "year",
                millennium: "year",
                age: "fallback",
                epoch: "fallback",
                era: "fallback",
                eon: "fallback",
                eon2: "fallback"
            }
        }
    }(TL.Date), TL.BigDate = TL.Date.extend({
        initialize: function(b, c, a) {
            TL.BigYear == b.constructor ? this.data = {
                date_obj: b
            } : (this.data = JSON.parse(JSON.stringify(b)), this._createDateObj()), this._setFormat(c, a)
        },
        _createDateObj: function() {
            var a = this._getDateData();
            this.data.date_obj = new TL.BigYear(a.year)
        },
        floor: function(b) {
            for (var c = 0; c < TL.BigDate.SCALES.length; c++) {
                if (TL.BigDate.SCALES[c][0] == b) {
                    var a = TL.BigDate.SCALES[c][2](this.data.date_obj);
                    return new TL.BigDate(a)
                }
            }
            throw new TL.Error("invalid_scale_err", b)
        }
    }),
    function(d) {
        var g = 1000000,
            c = 10 * g,
            h = 10 * c,
            b = 10 * h,
            f = function(a) {
                return function(l) {
                    var j = l.getTime();
                    return new TL.BigYear(Math.floor(j / a) * a)
                }
            };
        d.SCALES = [
            ["year", 1, new f(1)],
            ["decade", 10, new f(10)],
            ["century", 100, new f(100)],
            ["millennium", 1000, new f(1000)],
            ["age", g, new f(g)],
            ["epoch", c, new f(c)],
            ["era", h, new f(h)],
            ["eon", b, new f(b)]
        ]
    }(TL.BigDate), TL.DateUtil = {
        get: function(a) {
            return "string" == typeof a ? document.getElementById(a) : a
        },
        sortByDate: function(a, b) {
            var b = b || "start_date";
            a.sort(function(d, c) {
                return d[b].isBefore(c[b]) ? -1 : d[b].isAfter(c[b]) ? 1 : 0
            })
        },
        parseTime: function(d) {
            var h = {
                    hour: null,
                    minute: null,
                    second: null,
                    millisecond: null
                },
                c = null,
                l = d.match(/(\s*[AaPp]\.?[Mm]\.?\s*)$/);
            l && (c = TL.Util.trim(l[0]), d = TL.Util.trim(d.substring(0, d.lastIndexOf(c))));
            var b = [],
                f = d.match(/^\s*(\d{1,2})(\d{2})\s*$/);
            if (f ? b = f.slice(1) : (b = d.split(":"), 1 == b.length && (b = d.split("."))), b.length > 4) {
                throw new TL.Error("invalid_separator_error")
            }
            if (h.hour = parseInt(b[0]), c && "p" == c.toLowerCase()[0] && 12 != h.hour ? h.hour += 12 : c && "a" == c.toLowerCase()[0] && 12 == h.hour && (h.hour = 0), isNaN(h.hour) || h.hour < 0 || h.hour > 23) {
                throw new TL.Error("invalid_hour_err", h.hour)
            }
            if (b.length > 1 && (h.minute = parseInt(b[1]), isNaN(h.minute))) {
                throw new TL.Error("invalid_minute_err", h.minute)
            }
            if (b.length > 2) {
                var j = b[2].split(/[\.,]/);
                if (b = j.concat(b.slice(3)), b.length > 2) {
                    throw new TL.Error("invalid_second_fractional_err")
                }
                if (h.second = parseInt(b[0]), isNaN(h.second)) {
                    throw new TL.Error("invalid_second_err")
                }
                if (2 == b.length) {
                    var g = parseInt(b[1]);
                    if (isNaN(g)) {
                        throw new TL.Error("invalid_fractional_err")
                    }
                    h.millisecond = 100 * g
                }
            }
            return h
        },
        SCALE_DATE_CLASSES: {
            human: TL.Date,
            cosmological: TL.BigDate
        }
    }, TL.Draggable = TL.Class.extend({
        includes: TL.Events,
        _el: {},
        mousedrag: {
            down: "mousedown",
            up: "mouseup",
            leave: "mouseleave",
            move: "mousemove"
        },
        touchdrag: {
            down: "touchstart",
            up: "touchend",
            leave: "mouseleave",
            move: "touchmove"
        },
        initialize: function(b, c, a) {
            this._el = {
                drag: b,
                move: b
            }, a && (this._el.move = a), this.options = {
                enable: {
                    x: !0,
                    y: !0
                },
                constraint: {
                    top: !1,
                    bottom: !1,
                    left: !1,
                    right: !1
                },
                momentum_multiplier: 2000,
                duration: 1000,
                ease: TL.Ease.easeInOutQuint
            }, this.animator = null, this.dragevent = this.mousedrag, TL.Browser.touch && (this.dragevent = this.touchdrag), this.data = {
                sliding: !1,
                direction: "none",
                pagex: {
                    start: 0,
                    end: 0
                },
                pagey: {
                    start: 0,
                    end: 0
                },
                pos: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                new_pos: {
                    x: 0,
                    y: 0
                },
                new_pos_parent: {
                    x: 0,
                    y: 0
                },
                time: {
                    start: 0,
                    end: 0
                },
                touch: !1
            }, TL.Util.mergeData(this.options, c)
        },
        enable: function() {
            this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
        },
        disable: function() {
            TL.DomEvent.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), TL.DomEvent.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
        },
        stopMomentum: function() {
            this.animator && this.animator.stop()
        },
        updateConstraint: function(a) {
            this.options.constraint = a
        },
        _onDragStart: function(a) {
            TL.Browser.touch ? a.originalEvent ? (this.data.pagex.start = a.originalEvent.touches[0].screenX, this.data.pagey.start = a.originalEvent.touches[0].screenY) : (this.data.pagex.start = a.targetTouches[0].screenX, this.data.pagey.start = a.targetTouches[0].screenY) : (this.data.pagex.start = a.pageX, this.data.pagey.start = a.pageY), this.options.enable.x && (this._el.move.style.left = this.data.pagex.start - this._el.move.offsetWidth / 2 + "px"), this.options.enable.y && (this._el.move.style.top = this.data.pagey.start - this._el.move.offsetHeight / 2 + "px"), this.data.pos.start = TL.Dom.getPosition(this._el.drag), this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), TL.DomEvent.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), TL.DomEvent.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
        },
        _onDragEnd: function() {
            this.data.sliding = !1, TL.DomEvent.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), TL.DomEvent.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
        },
        _onDragMove: function(a) {
            a.preventDefault(), this.data.sliding = !0, TL.Browser.touch ? a.originalEvent ? (this.data.pagex.end = a.originalEvent.touches[0].screenX, this.data.pagey.end = a.originalEvent.touches[0].screenY) : (this.data.pagex.end = a.targetTouches[0].screenX, this.data.pagey.end = a.targetTouches[0].screenY) : (this.data.pagex.end = a.pageX, this.data.pagey.end = a.pageY), this.data.pos.end = TL.Dom.getPosition(this._el.drag), this.data.new_pos.x = -(this.data.pagex.start - this.data.pagex.end - this.data.pos.start.x), this.data.new_pos.y = -(this.data.pagey.start - this.data.pagey.end - this.data.pos.start.y), this.options.enable.x && (this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && (this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
        },
        _momentum: function() {
            var b = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                c = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                a = !1;
            TL.Browser.touch, b.time = 10 * ((new Date).getTime() - this.data.time.start), c.time = 10 * ((new Date).getTime() - this.data.time.start), c.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), c.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), b.x = Math.round(c.x / c.time), b.y = Math.round(c.y / c.time), this.data.new_pos.x = Math.min(this.data.pos.end.x + b.x), this.data.new_pos.y = Math.min(this.data.pos.end.y + b.y), this.options.enable.x ? this.data.new_pos.x < 0 && (this.data.new_pos.x = 0) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, c.time < 3000 && (a = !0), Math.abs(c.x) > 10000 && (this.data.direction = "left", c.x > 0 && (this.data.direction = "right")), Math.abs(c.y) > 10000 && (this.data.direction = "up", c.y > 0 && (this.data.direction = "down")), this._animateMomentum(), a && this.fire("swipe_" + this.data.direction, this.data)
        },
        _animateMomentum: function() {
            var a = {
                    x: this.data.new_pos.x,
                    y: this.data.new_pos.y
                },
                b = {
                    duration: this.options.duration,
                    easing: TL.Ease.easeOutStrong
                };
            this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (a.y > this.options.constraint.bottom ? a.y = this.options.constraint.bottom : a.y < this.options.constraint.top && (a.y = this.options.constraint.top)), b.top = Math.floor(a.y) + "px"), this.options.enable.x && ((this.options.constraint.left || this.options.constraint.right) && (a.x > this.options.constraint.left ? a.x = this.options.constraint.left : a.x < this.options.constraint.right && (a.x = this.options.constraint.right)), b.left = Math.floor(a.x) + "px"), this.animator = TL.Animate(this._el.move, b), this.fire("momentum", this.data)
        }
    }), TL.Swipable = TL.Class.extend({
        includes: TL.Events,
        _el: {},
        mousedrag: {
            down: "mousedown",
            up: "mouseup",
            leave: "mouseleave",
            move: "mousemove"
        },
        touchdrag: {
            down: "touchstart",
            up: "touchend",
            leave: "mouseleave",
            move: "touchmove"
        },
        initialize: function(b, c, a) {
            this._el = {
                drag: b,
                move: b
            }, c && (this._el.move = c), this.options = {
                snap: !1,
                enable: {
                    x: !0,
                    y: !0
                },
                constraint: {
                    top: !1,
                    bottom: !1,
                    left: 0,
                    right: !1
                },
                momentum_multiplier: 2000,
                duration: 1000,
                ease: TL.Ease.easeInOutQuint
            }, this.animator = null, this.dragevent = this.mousedrag, TL.Browser.touch && (this.dragevent = this.touchdrag), this.data = {
                sliding: !1,
                direction: "none",
                pagex: {
                    start: 0,
                    end: 0
                },
                pagey: {
                    start: 0,
                    end: 0
                },
                pos: {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                new_pos: {
                    x: 0,
                    y: 0
                },
                new_pos_parent: {
                    x: 0,
                    y: 0
                },
                time: {
                    start: 0,
                    end: 0
                },
                touch: !1
            }, TL.Util.mergeData(this.options, a)
        },
        enable: function() {
            TL.DomEvent.addListener(this._el.drag, this.dragevent.down, this._onDragStart, this), TL.DomEvent.addListener(this._el.drag, this.dragevent.up, this._onDragEnd, this), this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
        },
        disable: function() {
            TL.DomEvent.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), TL.DomEvent.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
        },
        stopMomentum: function() {
            this.animator && this.animator.stop()
        },
        updateConstraint: function(a) {
            this.options.constraint = a
        },
        _onDragStart: function(a) {
            this.animator && this.animator.stop(), TL.Browser.touch ? a.originalEvent ? (this.data.pagex.start = a.originalEvent.touches[0].screenX, this.data.pagey.start = a.originalEvent.touches[0].screenY) : (this.data.pagex.start = a.targetTouches[0].screenX, this.data.pagey.start = a.targetTouches[0].screenY) : (this.data.pagex.start = a.pageX, this.data.pagey.start = a.pageY), this.options.enable.x, this.options.enable.y, this.data.pos.start = {
                x: this._el.move.offsetLeft,
                y: this._el.move.offsetTop
            }, this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), TL.DomEvent.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), TL.DomEvent.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
        },
        _onDragEnd: function() {
            this.data.sliding = !1, TL.DomEvent.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), TL.DomEvent.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
        },
        _onDragMove: function(a) {
            var b = {
                x: 0,
                y: 0
            };
            this.data.sliding = !0, TL.Browser.touch ? a.originalEvent ? (this.data.pagex.end = a.originalEvent.touches[0].screenX, this.data.pagey.end = a.originalEvent.touches[0].screenY) : (this.data.pagex.end = a.targetTouches[0].screenX, this.data.pagey.end = a.targetTouches[0].screenY) : (this.data.pagex.end = a.pageX, this.data.pagey.end = a.pageY), b.x = this.data.pagex.start - this.data.pagex.end, b.y = this.data.pagey.start - this.data.pagey.end, this.data.pos.end = {
                x: this._el.drag.offsetLeft,
                y: this._el.drag.offsetTop
            }, this.data.new_pos.x = -(b.x - this.data.pos.start.x), this.data.new_pos.y = -(b.y - this.data.pos.start.y), this.options.enable.x && Math.abs(b.x) > Math.abs(b.y) && (a.preventDefault(), this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && Math.abs(b.y) > Math.abs(b.y) && (a.preventDefault(), this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
        },
        _momentum: function() {
            var b = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                c = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                a = {
                    x: !1,
                    y: !1
                },
                d = !1;
            this.data.direction = null, b.time = 10 * ((new Date).getTime() - this.data.time.start), c.time = 10 * ((new Date).getTime() - this.data.time.start), c.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), c.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), b.x = Math.round(c.x / c.time), b.y = Math.round(c.y / c.time), this.data.new_pos.x = Math.min(this.data.new_pos.x + b.x), this.data.new_pos.y = Math.min(this.data.new_pos.y + b.y), this.options.enable.x ? this.options.constraint.left && this.data.new_pos.x > this.options.constraint.left && (this.data.new_pos.x = this.options.constraint.left) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, c.time < 2000 && (d = !0), this.options.enable.x && this.options.enable.y ? Math.abs(c.x) > Math.abs(c.y) ? a.x = !0 : a.y = !0 : this.options.enable.x ? Math.abs(c.x) > Math.abs(c.y) && (a.x = !0) : Math.abs(c.y) > Math.abs(c.x) && (a.y = !0), a.x && (Math.abs(c.x) > this._el.drag.offsetWidth / 2 && (d = !0), Math.abs(c.x) > 10000 && (this.data.direction = "left", c.x > 0 && (this.data.direction = "right"))), a.y && (Math.abs(c.y) > this._el.drag.offsetHeight / 2 && (d = !0), Math.abs(c.y) > 10000 && (this.data.direction = "up", c.y > 0 && (this.data.direction = "down"))), c.time < 1000 || this._animateMomentum(), d && this.data.direction ? this.fire("swipe_" + this.data.direction, this.data) : this.data.direction ? this.fire("swipe_nodirection", this.data) : this.options.snap && (this.animator.stop(), this.animator = TL.Animate(this._el.move, {
                top: this.data.pos.start.y,
                left: this.data.pos.start.x,
                duration: this.options.duration,
                easing: TL.Ease.easeOutStrong
            }))
        },
        _animateMomentum: function() {
            var a = {
                    x: this.data.new_pos.x,
                    y: this.data.new_pos.y
                },
                b = {
                    duration: this.options.duration,
                    easing: TL.Ease.easeOutStrong
                };
            this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (a.y > this.options.constraint.bottom ? a.y = this.options.constraint.bottom : a.y < this.options.constraint.top && (a.y = this.options.constraint.top)), b.top = Math.floor(a.y) + "px"), this.options.enable.x && (this.options.constraint.left && a.x >= this.options.constraint.left && (a.x = this.options.constraint.left), this.options.constraint.right && a.x < this.options.constraint.right && (a.x = this.options.constraint.right), b.left = Math.floor(a.x) + "px"), this.animator = TL.Animate(this._el.move, b), this.fire("momentum", this.data)
        }
    }), TL.MenuBar = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins],
        _el: {},
        initialize: function(b, c, a) {
            this._el = {
                parent: {},
                container: {},
                button_backtostart: {},
                button_zoomin: {},
                button_zoomout: {},
                arrow: {},
                line: {},
                coverbar: {},
                grip: {}
            }, this.collapsed = !1, this._el.container = "object" == typeof b ? b : TL.Dom.get(b), c && (this._el.parent = c), this.options = {
                width: 600,
                height: 600,
                duration: 1000,
                ease: TL.Ease.easeInOutQuint,
                menubar_default_y: 0
            }, this.animator = {}, TL.Util.mergeData(this.options, a), this._initLayout(), this._initEvents()
        },
        show: function(a) {
            var b = this.options.duration;
            a && (b = a)
        },
        hide: function() {},
        toogleZoomIn: function(a) {
            a ? TL.DomUtil.removeClass(this._el.button_zoomin, "tl-menubar-button-inactive") : TL.DomUtil.addClass(this._el.button_zoomin, "tl-menubar-button-inactive")
        },
        toogleZoomOut: function(a) {
            a ? TL.DomUtil.removeClass(this._el.button_zoomout, "tl-menubar-button-inactive") : TL.DomUtil.addClass(this._el.button_zoomout, "tl-menubar-button-inactive")
        },
        setSticky: function(a) {
            this.options.menubar_default_y = a
        },
        setColor: function(a) {
            this._el.container.className = a ? "tl-menubar tl-menubar-inverted" : "tl-menubar"
        },
        updateDisplay: function(b, c, a, d) {
            this._updateDisplay(b, c, a, d)
        },
        _onButtonZoomIn: function(a) {
            this.fire("zoom_in", a)
        },
        _onButtonZoomOut: function(a) {
            this.fire("zoom_out", a)
        },
        _onButtonBackToStart: function(a) {
            this.fire("back_to_start", a)
        },
        _initLayout: function() {
            this._el.button_zoomin = TL.Dom.create("span", "tl-menubar-button", this._el.container), this._el.button_zoomout = TL.Dom.create("span", "tl-menubar-button", this._el.container), this._el.button_backtostart = TL.Dom.create("span", "tl-menubar-button", this._el.container), TL.Browser.mobile && this._el.container.setAttribute("ontouchstart", " "), this._el.button_backtostart.innerHTML = "<span class='tl-icon-goback'></span>", this._el.button_zoomin.innerHTML = "<span class='tl-icon-zoom-in'></span>", this._el.button_zoomout.innerHTML = "<span class='tl-icon-zoom-out'></span>"
        },
        _initEvents: function() {
            TL.DomEvent.addListener(this._el.button_backtostart, "click", this._onButtonBackToStart, this), TL.DomEvent.addListener(this._el.button_zoomin, "click", this._onButtonZoomIn, this), TL.DomEvent.addListener(this._el.button_zoomout, "click", this._onButtonZoomOut, this)
        },
        _updateDisplay: function(a, b) {
            a && (this.options.width = a), b && (this.options.height = b)
        }
    }), TL.Message = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins, TL.I18NMixins],
        _el: {},
        initialize: function(b, c, a) {
            this._el = {
                parent: {},
                container: {},
                message_container: {},
                loading_icon: {},
                message: {}
            }, this.options = {
                width: 600,
                height: 600,
                message_class: "tl-message",
                message_icon_class: "tl-loading-icon"
            }, this._add_to_container = a || {}, TL.Util.mergeData(this.data, b), TL.Util.mergeData(this.options, c), this._el.container = TL.Dom.create("div", this.options.message_class), a && (a.appendChild(this._el.container), this._el.parent = a), this.animator = {}, this._initLayout(), this._initEvents()
        },
        updateMessage: function(a) {
            this._updateMessage(a)
        },
        updateDisplay: function(a, b) {
            this._updateDisplay(a, b)
        },
        _updateMessage: function(a) {
            this._el.message.innerHTML = a ? a : this._("loading"), !this._el.parent.atrributes && this._add_to_container.attributes && (this._add_to_container.appendChild(this._el.container), this._el.parent = this._add_to_container)
        },
        _onMouseClick: function() {
            this.fire("clicked", this.options)
        },
        _onRemove: function() {
            this._el.parent = {}
        },
        _initLayout: function() {
            this._el.message_container = TL.Dom.create("div", "tl-message-container", this._el.container), this._el.loading_icon = TL.Dom.create("div", this.options.message_icon_class, this._el.message_container), this._el.message = TL.Dom.create("div", "tl-message-content", this._el.message_container), this._updateMessage()
        },
        _initEvents: function() {
            TL.DomEvent.addListener(this._el.container, "click", this._onMouseClick, this), TL.DomEvent.addListener(this, "removed", this._onRemove, this)
        },
        _updateDisplay: function() {}
    }), TL.MediaType = function(d, f) {
        var c = {},
            g = [{
                type: "youtube",
                name: "YouTube",
                match_str: "^(https?:)?/*(www.)?youtube|youtu.be",
                cls: TL.Media.YouTube
            }, {
                type: "vimeo",
                name: "Vimeo",
                match_str: "^(https?:)?/*(player.)?vimeo.com",
                cls: TL.Media.Vimeo
            }, {
                type: "dailymotion",
                name: "DailyMotion",
                match_str: "^(https?:)?/*(www.)?dailymotion.com",
                cls: TL.Media.DailyMotion
            }, {
                type: "vine",
                name: "Vine",
                match_str: "^(https?:)?/*(www.)?vine.co",
                cls: TL.Media.Vine
            }, {
                type: "soundcloud",
                name: "SoundCloud",
                match_str: "^(https?:)?/*(player.)?soundcloud.com",
                cls: TL.Media.SoundCloud
            }, {
                type: "twitter",
                name: "Twitter",
                match_str: "^(https?:)?/*(www.)?twitter.com",
                cls: TL.Media.Twitter
            }, {
                type: "twitterembed",
                name: "TwitterEmbed",
                match_str: "<blockquote class=['\"]twitter-tweet['\"]",
                cls: TL.Media.Twitter
            }, {
                type: "googlemaps",
                name: "Google Map",
                match_str: /google.+?\/maps\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/search\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/place\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/dir\/([\w\W]+)\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)/,
                cls: TL.Media.GoogleMap
            }, {
                type: "googleplus",
                name: "Google+",
                match_str: "^(https?:)?/*plus.google",
                cls: TL.Media.GooglePlus
            }, {
                type: "flickr",
                name: "Flickr",
                match_str: "^(https?:)?/*(www.)?flickr.com/photos",
                cls: TL.Media.Flickr
            }, {
                type: "flickr",
                name: "Flickr",
                match_str: "^(https?://)?flic.kr/.*",
                cls: TL.Media.Flickr
            }, {
                type: "instagram",
                name: "Instagram",
                match_str: /^(https?:)?\/*(www.)?(instagr.am|^(https?:)?\/*(www.)?instagram.com)\/p\//,
                cls: TL.Media.Instagram
            }, {
                type: "profile",
                name: "Profile",
                match_str: /^(https?:)?\/*(www.)?instagr.am\/[a-zA-Z0-9]{2,}|^(https?:)?\/*(www.)?instagram.com\/[a-zA-Z0-9]{2,}/,
                cls: TL.Media.Profile
            }, {
                type: "documentcloud",
                name: "Document Cloud",
                match_str: /documentcloud.org\//,
                cls: TL.Media.DocumentCloud
            }, {
                type: "image",
                name: "Image",
                match_str: /(jpg|jpeg|png|gif|svg)(\?.*)?$/i,
                cls: TL.Media.Image
            }, {
                type: "imgur",
                name: "Imgur",
                match_str: /^.*imgur.com\/.+$|<blockquote class=['\"]imgur-embed-pub['\"]/i,
                cls: TL.Media.Imgur
            }, {
                type: "googledocs",
                name: "Google Doc",
                match_str: "^(https?:)?/*[^.]*.google.com/[^/]*/d/[^/]*/[^/]*?usp=sharing|^(https?:)?/*drive.google.com/open?id=[^&]*&authuser=0|^(https?:)?/*drive.google.com/open?id=[^&]*|^(https?:)?/*[^.]*.googledrive.com/host/[^/]*/",
                cls: TL.Media.GoogleDoc
            }, {
                type: "pdf",
                name: "PDF",
                match_str: /^.*\.pdf(\?.*)?(\#.*)?/,
                cls: TL.Media.PDF
            }, {
                type: "wikipedia",
                name: "Wikipedia",
                match_str: "^(https?:)?/*(www.)?wikipedia.org|^(https?:)?/*([a-z][a-z].)?wikipedia.org",
                cls: TL.Media.Wikipedia
            }, {
                type: "spotify",
                name: "spotify",
                match_str: "spotify",
                cls: TL.Media.Spotify
            }, {
                type: "iframe",
                name: "iFrame",
                match_str: "iframe",
                cls: TL.Media.IFrame
            }, {
                type: "storify",
                name: "Storify",
                match_str: "storify",
                cls: TL.Media.Storify
            }, {
                type: "blockquote",
                name: "Quote",
                match_str: "blockquote",
                cls: TL.Media.Blockquote
            }, {
                type: "video",
                name: "Video",
                match_str: /(mp4)(\?.*)?$/i,
                cls: TL.Media.Video
            }, {
                type: "wistia",
                name: "Wistia",
                match_str: /https?:\/\/(.+)?(wistia\.com|wi\.st)\/.*/i,
                cls: TL.Media.Wistia
            }, {
                type: "audio",
                name: "Audio",
                match_str: /(mp3|wav|m4a)(\?.*)?$/i,
                cls: TL.Media.Audio
            }, {
                type: "imageblank",
                name: "Imageblank",
                match_str: "",
                cls: TL.Media.Image
            }];
        if (f) {
            if (d instanceof Array) {
                return !1
            }
            for (var b = 0; b < g.length; b++) {
                switch (g[b].type) {
                    case "flickr":
                    case "image":
                    case "instagram":
                        if (d.url.match(g[b].match_str)) {
                            return c = g[b]
                        }
                }
            }
        } else {
            for (var b = 0; b < g.length; b++) {
                if (d instanceof Array) {
                    return c = {
                        type: "slider",
                        cls: TL.Media.Slider
                    }
                }
                if (d.url.match(g[b].match_str)) {
                    return c = g[b]
                }
            }
        }
        return !1
    }, TL.Media = TL.Class.extend({
        includes: [TL.Events, TL.I18NMixins],
        _el: {},
        initialize: function(b, c, a) {
            this._el = {
                container: {},
                content_container: {},
                content: {},
                content_item: {},
                content_link: {},
                caption: null,
                credit: null,
                parent: {},
                link: null
            }, this.player = null, this.timer = null, this.load_timer = null, this.message = null, this.media_id = null, this._state = {
                loaded: !1,
                show_meta: !1,
                media_loaded: !1
            }, this.data = {
                unique_id: null,
                url: null,
                credit: null,
                caption: null,
                credit_alternate: null,
                caption_alternate: null,
                link: null,
                link_target: null
            }, this.options = {
                api_key_flickr: "f2cc870b4d233dd0a5bfe73fd0d64ef0",
                api_key_googlemaps: "AIzaSyB9dW8e_iRrATFa8g24qB6BDBGdkrLDZYI",
                api_key_embedly: "",
                credit_height: 0,
                caption_height: 0,
                background: 0
            }, this.animator = {}, TL.Util.mergeData(this.options, c), TL.Util.mergeData(this.data, b), this.options.background || (this._el.container = TL.Dom.create("div", "tl-media"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._initLayout(), a && (a.appendChild(this._el.container), this._el.parent = a))
        },
        loadMedia: function() {
            var a = this;
            if (!this._state.loaded) {
                try {
                    this.load_timer = setTimeout(function() {
                        a.loadingMessage(), a._loadMedia(), a._updateDisplay()
                    }, 1200)
                } catch (b) {
                    trace("Error loading media for ", this._media), trace(b)
                }
            }
        },
        _updateMessage: function(a) {
            this.message && this.message.updateMessage(a)
        },
        loadingMessage: function() {
            this._updateMessage(this._("loading") + " " + this.options.media_name)
        },
        errorMessage: function(a) {
            a = a ? this._("error") + ": " + a : this._("error"), this._updateMessage(a)
        },
        updateMediaDisplay: function(a) {
            this._state.loaded && !this.options.background && (this._el.content_item.style.maxHeight = TL.Browser.mobile ? this.options.height / 2 + "px" : this.options.height - this.options.credit_height - this.options.caption_height - 30 + "px", this._el.container.style.maxWidth = this.options.width + "px", TL.Browser.firefox && this._el.content_item.offsetWidth > this._el.content_item.offsetHeight, this._updateMediaDisplay(a), this._state.media_loaded && (this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")))
        },
        _loadMedia: function() {
            this.onLoaded()
        },
        _updateMediaDisplay: function() {
            TL.Browser.firefox && (this._el.content_item.style.maxWidth = this.options.width + "px", this._el.content_item.style.width = "auto")
        },
        _getMeta: function() {},
        _getImageURL: function() {
            return ""
        },
        show: function() {},
        hide: function() {},
        addTo: function(a) {
            a.appendChild(this._el.container), this.onAdd()
        },
        removeFrom: function(a) {
            a.removeChild(this._el.container), this.onRemove()
        },
        getImageURL: function(a, b) {
            return this._getImageURL(a, b)
        },
        updateDisplay: function(b, c, a) {
            this._updateDisplay(b, c, a)
        },
        stopMedia: function() {
            this._stopMedia()
        },
        loadErrorDisplay: function(a) {
            try {
                this._el.content.removeChild(this._el.content_item)
            } catch (b) {}
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-loaderror", this._el.content), this._el.content_item.innerHTML = "<div class='tl-icon-" + this.options.media_type + "'></div><p>" + a + "</p>", this.onLoaded(!0)
        },
        onLoaded: function(a) {
            this._state.loaded = !0, this.fire("loaded", this.data), this.message && this.message.hide(), a || this.options.background || this.showMeta(), this.updateDisplay()
        },
        onMediaLoaded: function() {
            this._state.media_loaded = !0, this.fire("media_loaded", this.data), this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")
        },
        showMeta: function() {
            this._state.show_meta = !0, this.data.credit && "" != this.data.credit && (this._el.credit = TL.Dom.create("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = 1 == this.options.autolink ? TL.Util.linkify(this.data.credit) : this.data.credit, this.options.credit_height = this._el.credit.offsetHeight), this.data.caption && "" != this.data.caption && (this._el.caption = TL.Dom.create("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = 1 == this.options.autolink ? TL.Util.linkify(this.data.caption) : this.data.caption, this.options.caption_height = this._el.caption.offsetHeight), this.data.caption && this.data.credit || this.getMeta()
        },
        getMeta: function() {
            this._getMeta()
        },
        updateMeta: function() {
            !this.data.credit && this.data.credit_alternate && (this._el.credit = TL.Dom.create("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = this.data.credit_alternate, this.options.credit_height = this._el.credit.offsetHeight), !this.data.caption && this.data.caption_alternate && (this._el.caption = TL.Dom.create("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = this.data.caption_alternate, this.options.caption_height = this._el.caption.offsetHeight), this.updateDisplay()
        },
        onAdd: function() {
            this.fire("added", this.data)
        },
        onRemove: function() {
            this.fire("removed", this.data)
        },
        _initLayout: function() {
            this.message = new TL.Message({}, this.options), this.message.addTo(this._el.container), this._el.content_container = TL.Dom.create("div", "tl-media-content-container", this._el.container), this.data.link && "" != this.data.link ? (this._el.link = TL.Dom.create("a", "tl-media-link", this._el.content_container), this._el.link.href = this.data.link, this._el.link.target = this.data.link_target && "" != this.data.link_target ? this.data.link_target : "_blank", this._el.content = TL.Dom.create("div", "tl-media-content", this._el.link)) : this._el.content = TL.Dom.create("div", "tl-media-content", this._el.content_container)
        },
        _updateDisplay: function(b, c, a) {
            b && (this.options.width = b), c && (this.options.height = c), a && (this.options.layout = a), this._el.credit && (this.options.credit_height = this._el.credit.offsetHeight), this._el.caption && (this.options.caption_height = this._el.caption.offsetHeight + 5), this.updateMediaDisplay(this.options.layout)
        },
        _stopMedia: function() {}
    }), TL.Media.Blockquote = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-blockquote", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.media_id = this.data.url, this._el.content_item.innerHTML = this.media_id, this.onLoaded()
        },
        updateMediaDisplay: function() {},
        _updateMediaDisplay: function() {}
    }), TL.Media.DailyMotion = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe tl-media-dailymotion", this._el.content), this.media_id = this.data.url.match("video") ? this.data.url.split("video/")[1].split(/[?&]/)[0] : this.data.url.split("embed/")[1].split(/[?&]/)[0], a = "https://www.dailymotion.com/embed/video/" + this.media_id + "?api=postMessage", this._el.content_item.innerHTML = "<iframe autostart='false' frameborder='0' width='100%' height='100%' src='" + a + "'></iframe>", this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = TL.Util.ratio.r16_9({
                w: this._el.content_item.offsetWidth
            }) + "px"
        },
        _stopMedia: function() {
            this._el.content_item.querySelector("iframe").contentWindow.postMessage('{"command":"pause","parameters":[]}', "*")
        }
    }), TL.Media.DocumentCloud = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a = this;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-documentcloud tl-media-shadow", this._el.content), this._el.content_item.id = TL.Util.unique_ID(7), this.data.url.match(/\.html$/) ? this.data.url = this._transformURL(this.data.url) : this.data.url.match(/.(json|js)$/) || trace("DOCUMENT CLOUD IN URL BUT INVALID SUFFIX"), TL.Load.js(["https://assets.documentcloud.org/viewer/loader.js", "https://assets.documentcloud.org/viewer/viewer.js"], function() {
                a.createMedia()
            })
        },
        _transformURL: function(a) {
            return a.replace(/(.*)\.html$/, "$1.js")
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = this.options.height + "px"
        },
        createMedia: function() {
            DV.load(this.data.url, {
                container: "#" + this._el.content_item.id,
                showSidebar: !1
            }), this.onLoaded()
        }
    }), TL.Media.Flickr = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var b, c = this;
            try {
                this.establishMediaID(), b = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", TL.getJSON(b, function(d) {
                    "ok" == d.stat ? (c.sizes = d.sizes.size, c.options.background || c.createMedia(), c.onLoaded()) : c.loadErrorDisplay(c._("flickr_notfound_err"))
                })
            } catch (a) {
                c.loadErrorDisplay(c._(a.message_key))
            }
        },
        establishMediaID: function() {
            if (this.data.url.match(/flic.kr\/.+/i)) {
                var b = this.data.url.split("/").slice(-1)[0];
                this.media_id = TL.Util.base58.decode(b)
            } else {
                var c = "flickr.com/photos/",
                    a = this.data.url.indexOf(c);
                if (-1 == a) {
                    throw new TL.Error("flickr_invalidurl_err")
                }
                var d = a + c.length;
                this.media_id = this.data.url.substr(d).split("/")[1]
            }
        },
        createMedia: function() {
            var a = this;
            this._el.content_link = TL.Dom.create("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_item = TL.Dom.create("img", "tl-media-item tl-media-image tl-media-flickr tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = TL.Util.unhtmlify(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = TL.Util.unhtmlify(this.data.caption)), this._el.content_item.addEventListener("load", function() {
                a.onMediaLoaded()
            }), this._el.content_item.src = this.getImageURL(this.options.width, this.options.height)
        },
        getImageURL: function(d, f) {
            for (var c = this.size_label(f), g = this.sizes[this.sizes.length - 2].source, b = 0; b < this.sizes.length; b++) {
                this.sizes[b].label == c && (g = this.sizes[b].source)
            }
            return g
        },
        _getMeta: function() {
            var a, b = this;
            a = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", TL.getJSON(a, function(c) {
                b.data.credit_alternate = "<a href='" + b.data.url + "' target='_blank'>" + c.photo.owner.realname + "</a>", b.data.caption_alternate = c.photo.title._content + " " + c.photo.description._content, b.updateMeta()
            })
        },
        size_label: function(a) {
            var b = "";
            return b = 75 >= a ? 0 >= a ? "Large" : "Thumbnail" : 180 >= a ? "Small" : 240 >= a ? "Small 320" : 375 >= a ? "Medium" : 480 >= a ? "Medium 640" : 600 >= a ? "Large" : "Large"
        }
    }), TL.Media.GoogleDoc = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a;
            if (this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe", this._el.content), this.data.url.match("open?id=")) {
                this.media_id = this.data.url.split("open?id=")[1], this.data.url.match("&authuser=0") && (a = this.media_id.match("&authuser=0")[0])
            } else {
                if (this.data.url.match(/file\/d\/([^\/]*)\/?/)) {
                    var b = this.data.url.match(/file\/d\/([^\/]*)\/?/)[1];
                    a = "https://drive.google.com/file/d/" + b + "/preview"
                } else {
                    a = this.data.url
                }
            }
            this._el.content_item.innerHTML = "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + a + "'></iframe>", this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = this.options.height + "px"
        }
    }), TL.Media.GooglePlus = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-googleplus", this._el.content), this.media_id = this.data.url, a = this.media_id, this._el.content_item.innerHTML = "<iframe frameborder='0' width='100%' height='100%' src='" + a + "'></iframe>", this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = this.options.height + "px"
        }
    }), TL.Media.IFrame = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe", this._el.content), this.media_id = this.data.url, a = this.media_id, this._el.content_item.innerHTML = a, this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = this.options.height + "px"
        }
    }), TL.Media.Image = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
        },
        createMedia: function() {
            var a = this,
                b = "tl-media-item tl-media-image tl-media-shadow";
            (this.data.url.match(/.png(\?.*)?$/) || this.data.url.match(/.svg(\?.*)?$/)) && (b = "tl-media-item tl-media-image"), this.data.link ? (this._el.content_link = TL.Dom.create("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_item = TL.Dom.create("img", b, this._el.content_link)) : this._el.content_item = TL.Dom.create("img", b, this._el.content), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = TL.Util.unhtmlify(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = TL.Util.unhtmlify(this.data.caption)), this._el.content_item.addEventListener("load", function() {
                a.onMediaLoaded()
            }), this._el.content_item.src = this.getImageURL()
        },
        getImageURL: function() {
            return TL.Util.transformImageURL(this.data.url)
        },
        _updateMediaDisplay: function() {
            TL.Browser.firefox && (this._el.content_item.style.width = "auto")
        }
    }), TL.Media.Imgur = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            try {
                var b = this;
                if (this.data.url.match("<blockquote class=['\"]imgur-embed-pub['\"]")) {
                    var c = this.data.url.match(/(imgur\.com)\/(\w+)/);
                    this.media_id = c[2], this.data.url = "http://imgur.com/gallery/" + this.media_id
                } else {
                    this.data.url && (this.media_id = this.data.url.split("/").slice(-1)[0])
                }
                TL.Load.js(["https://s.imgur.com/min/embed.js"], function() {
                    b.createMedia()
                })
            } catch (a) {
                this.loadErrorDisplay(this._("imgur_invalidurl_err"))
            }
        },
        createMedia: function() {
            var a = this,
                b = "https://api.imgur.com/oembed.json?url=" + this.data.url;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-image tl-media-imgur", this._el.content), TL.ajax({
                type: "GET",
                url: b,
                dataType: "json",
                success: function(d) {
                    try {
                        a._el.content_item.innerHTML = d.html, setInterval(function() {
                            null == document.querySelector("blockquote.imgur-embed-pub") ? clearInterval() : (imgurEmbed.createIframe(), document.getElementById("imageElement").removeAttribute("style"), document.getElementById("image").removeAttribute("style"))
                        }, 2000)
                    } catch (c) {}
                },
                error: function(d, c, f) {
                    if (tc = new TL.TimelineConfig, "parsererror" == c) {
                        var f = new TL.Error("invalid_url_err")
                    } else {
                        var f = new TL.Error("unknown_read_err", c)
                    }
                    a.loadErrorDisplay(a._("imgur_invalidurl_err")), tc.logError(f)
                }
            }), this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.width = this.options.width + "px", this._el.content_item.style.height = TL.Util.ratio.r16_9({
                w: this.options.width
            }) + "px"
        }
    }), TL.Media.Instagram = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this.media_id = this.data.url.split("/p/")[1].split("/")[0], this.options.background || this.createMedia(), this.onLoaded()
        },
        createMedia: function() {
            var a = this;
            this._el.content_link = TL.Dom.create("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_item = TL.Dom.create("img", "tl-media-item tl-media-image tl-media-instagram tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = TL.Util.unhtmlify(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = TL.Util.unhtmlify(this.data.caption)), this._el.content_item.addEventListener("load", function() {
                a.onMediaLoaded()
            }), this._el.content_item.src = this.getImageURL(this._el.content.offsetWidth)
        },
        getImageURL: function(a) {
            return "https://instagram.com/p/" + this.media_id + "/media/?size=" + this.sizes(a)
        },
        _getMeta: function() {
            var a, b = this;
            a = "https://api.instagram.com/oembed?url=https://instagr.am/p/" + this.media_id + "&callback=?", TL.getJSON(a, function(c) {
                b.data.credit_alternate = "<a href='" + c.author_url + "' target='_blank'>" + c.author_name + "</a>", b.data.caption_alternate = c.title, b.updateMeta()
            })
        },
        sizes: function(a) {
            var b = "";
            return b = 150 >= a ? "t" : 306 >= a ? "m" : "l"
        }
    }), TL.Media.GoogleMap = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-map tl-media-shadow", this._el.content), this.media_id = this.data.url, this.mapframe = TL.Dom.create("iframe", "", this._el.content_item), window.stash = this, this.mapframe.width = "100%", this.mapframe.height = "100%", this.mapframe.frameBorder = "0", this.mapframe.src = this.makeGoogleMapsEmbedURL(this.media_id, this.options.api_key_googlemaps), this.onLoaded()
        },
        _updateMediaDisplay: function() {
            if (this._state.loaded) {
                var a = TL.Util.ratio.square({
                    w: this._el.content_item.offsetWidth
                });
                this._el.content_item.style.height = a.h + "px"
            }
        },
        makeGoogleMapsEmbedURL: function(q, m) {
            function g(e) {
                function a(t, l) {
                    if ("z" == t.slice(-1)) {
                        l.zoom = t
                    } else {
                        if ("m" == t.slice(-1)) {
                            l.zoom = 14, l.maptype = "satellite"
                        } else {
                            if ("t" == t.slice(-1)) {
                                if (d = !0, "place" == mapmode) {
                                    var r = e.match(j.place)[3] + "," + e.match(j.place)[4]
                                } else {
                                    var r = l.center;
                                    delete l.center
                                }
                                l = {}, l.location = r, streetview_params = t.split(",");
                                for (param in p.streetview) {
                                    var v = parseInt(param) + 1;
                                    l[p.streetview[param]] = "pitch" == p.streetview[param] && "90t" == streetview_params[v] ? 0 : streetview_params[v].slice(0, -1)
                                }
                            }
                        }
                    }
                    return l
                }

                function h(w, y) {
                    var A = {},
                        z = y[1],
                        v = y[y.length - 1];
                    for (param in p[w]) {
                        var x = parseInt(param) + 2;
                        A[p[w][param]] = "center" == p[w][param] ? y[x] + "," + y[++x] : y[x]
                    }
                    return A = a(v, A), A.key = m, 1 == d && (w = "streetview"), z + "/embed/v1/" + w + TL.Util.getParamString(A)
                }
                return mapmode = "view", e.match(j.place) ? mapmode = "place" : e.match(j.directions) ? mapmode = "directions" : e.match(j.search) && (mapmode = "search"), h(mapmode, e.match(j[mapmode]))
            }
            var d = !1,
                p = {
                    view: ["center"],
                    place: ["q", "center"],
                    directions: ["origin", "destination", "center"],
                    search: ["q", "center"],
                    streetview: ["fov", "heading", "pitch"]
                },
                u = /(https:\/\/.+google.+?\/maps)/,
                c = /@([-\d.]+),([-\d.]+)/,
                b = /([\w\W]+)/,
                f = /,((?:[-\d.]+[zmayht],?)*)/,
                j = {
                    view: new RegExp(u.source + "/" + c.source + f.source),
                    place: new RegExp(u.source + "/place/" + b.source + "/" + c.source + f.source),
                    directions: new RegExp(u.source + "/dir/" + b.source + "/" + b.source + "/" + c.source + f.source),
                    search: new RegExp(u.source + "/search/" + b.source + "/" + c.source + f.source)
                };
            return g(q)
        }
    }), TL.Media.PDF = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a = TL.Util.transformImageURL(this.data.url);
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe", this._el.content);
            var b = "";
            b = TL.Browser.ie || TL.Browser.edge || a.match(/dl.dropboxusercontent.com/) ? "<iframe class='doc' frameborder='0' width='100%' height='100%' src='//docs.google.com/viewer?url=" + a + "&amp;embedded=true'></iframe>" : "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + a + "'></iframe>", this._el.content_item.innerHTML = b, this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = this.options.height + "px"
        }
    }), TL.Media.Profile = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this._el.content_item = TL.Dom.create("img", "tl-media-item tl-media-image tl-media-profile tl-media-shadow", this._el.content), this._el.content_item.src = this.data.url, this.onLoaded()
        },
        _updateMediaDisplay: function() {
            TL.Browser.firefox && (this._el.content_item.style.maxWidth = this.options.width / 2 - 40 + "px")
        }
    }), TL.Media.Slider = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this._el.content_item = TL.Dom.create("img", "tl-media-item tl-media-image", this._el.content), this._el.content_item.src = this.data.url, this.onLoaded()
        }
    });
var soundCoudCreated = !1;
TL.Media.SoundCloud = TL.Media.extend({
    includes: [TL.Events],
    _loadMedia: function() {
        var a, b = this;
        this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe tl-media-soundcloud tl-media-shadow", this._el.content), this.media_id = this.data.url, a = "https://soundcloud.com/oembed?url=" + this.media_id + "&format=js&callback=?", TL.getJSON(a, function(c) {
            TL.Load.js("https://w.soundcloud.com/player/api.js", function() {
                b.createMedia(c)
            })
        })
    },
    createMedia: function(a) {
        this._el.content_item.innerHTML = a.html, this.soundCloudCreated = !0, self.widget = SC.Widget(this._el.content_item.querySelector("iframe")), this.onLoaded()
    },
    _stopMedia: function() {
        this.soundCloudCreated && self.widget.pause()
    }
}), TL.Media.Spotify = TL.Media.extend({
    includes: [TL.Events],
    _loadMedia: function() {
        var b;
        if (this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe tl-media-spotify", this._el.content), (this.data.url.match(/^spotify:track/) || this.data.url.match(/^spotify:album/) || this.data.url.match(/^spotify:user:.+:playlist:/)) && (this.media_id = this.data.url), this.data.url.match(/spotify\.com\/track\/(.+)/)) {
            this.media_id = "spotify:track:" + this.data.url.match(/spotify\.com\/track\/(.+)/)[1]
        } else {
            if (this.data.url.match(/spotify\.com\/album\/(.+)/)) {
                this.media_id = "spotify:album:" + this.data.url.match(/spotify\.com\/album\/(.+)/)[1]
            } else {
                if (this.data.url.match(/spotify\.com\/user\/(.+?)\/playlist\/(.+)/)) {
                    var c = this.data.url.match(/spotify\.com\/user\/(.+?)\/playlist\/(.+)/)[1],
                        a = this.data.url.match(/spotify\.com\/user\/(.+?)\/playlist\/(.+)/)[2];
                    this.media_id = "spotify:user:" + c + ":playlist:" + a
                } else {
                    if (this.data.url.match(/spotify\.com\/artist\/(.+)/)) {
                        var d = this.data.url.match(/spotify\.com\/artist\/(.+)/)[1];
                        this.media_id = "spotify:artist:" + d
                    }
                }
            }
        }
        this.media_id ? (b = "https://embed.spotify.com/?uri=" + this.media_id + "&theme=white&view=coverart", this.player = TL.Dom.create("iframe", "tl-media-shadow", this._el.content_item), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = b, this.onLoaded()) : this.loadErrorDisplay(this._("spotify_invalid_url"))
    },
    _updateMediaDisplay: function() {
        var b = this.options.height,
            c = 0,
            a = 0;
        b = TL.Browser.mobile ? this.options.height / 2 : this.options.height - this.options.credit_height - this.options.caption_height - 30, this._el.content_item.style.maxHeight = "none", trace(b), trace(this.options.width), b > this.options.width ? (trace("height is greater"), c = this.options.width + 80 + "px", a = this.options.width + "px") : (trace("width is greater"), trace(this.options.width), c = b + "px", a = b - 80 + "px"), this.player.style.width = a, this.player.style.height = c, this._el.credit && (this._el.credit.style.width = a), this._el.caption && (this._el.caption.style.width = a)
    },
    _stopMedia: function() {}
}), TL.Media.Storify = TL.Media.extend({
    includes: [TL.Events],
    _loadMedia: function() {
        var a;
        this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe tl-media-storify", this._el.content), this.media_id = this.data.url, a = "<iframe frameborder='0' width='100%' height='100%' src='" + this.media_id + "/embed'></iframe>", a += "<script src='" + this.media_id + ".js'><\/script>", this._el.content_item.innerHTML = a, this.onLoaded()
    },
    _updateMediaDisplay: function() {
        this._el.content_item.style.height = this.options.height + "px"
    }
}), TL.Media.Text = TL.Class.extend({
    includes: [TL.Events],
    _el: {
        container: {},
        content_container: {},
        content: {},
        headline: {},
        date: {}
    },
    data: {
        unique_id: "",
        headline: "headline",
        text: "text"
    },
    options: {
        title: !1
    },
    initialize: function(b, c, a) {
        TL.Util.setData(this, b), TL.Util.mergeData(this.options, c), this._el.container = TL.Dom.create("div", "tl-text"), this._el.container.id = this.data.unique_id, this._initLayout(), a && a.appendChild(this._el.container)
    },
    show: function() {},
    hide: function() {},
    addTo: function(a) {
        a.appendChild(this._el.container)
    },
    removeFrom: function(a) {
        a.removeChild(this._el.container)
    },
    headlineHeight: function() {
        return this._el.headline.offsetHeight + 40
    },
    addDateText: function(a) {
        this._el.date.innerHTML = a
    },
    onLoaded: function() {
        this.fire("loaded", this.data)
    },
    onAdd: function() {
        this.fire("added", this.data)
    },
    onRemove: function() {
        this.fire("removed", this.data)
    },
    _initLayout: function() {
        if (this._el.content_container = TL.Dom.create("div", "tl-text-content-container", this._el.container), this._el.date = TL.Dom.create("h3", "tl-headline-date", this._el.content_container), "" != this.data.headline) {
            var a = "tl-headline";
            this.options.title && (a = "tl-headline tl-headline-title"), this._el.headline = TL.Dom.create("h2", a, this._el.content_container), this._el.headline.innerHTML = this.data.headline
        }
        if ("" != this.data.text) {
            var b = "";
            b += TL.Util.htmlify(1 == this.options.autolink ? TL.Util.linkify(this.data.text) : this.data.text), trace(this.data.text), this._el.content = TL.Dom.create("div", "tl-text-content", this._el.content_container), this._el.content.innerHTML = b, trace(b), trace(this._el.content)
        }
        this.onLoaded()
    }
}), TL.Media.Twitter = TL.Media.extend({
    includes: [TL.Events],
    _loadMedia: function() {
        var b, c = this;
        if (this._el.content_item = TL.Dom.create("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.data.url.match("^(https?:)?/*(www.)?twitter.com")) {
            this.media_id = this.data.url.match("status/") ? this.data.url.split("status/")[1] : this.data.url.match("statuses/") ? this.data.url.split("statuses/")[1] : ""
        } else {
            if (this.data.url.match("<blockquote class=['\"]twitter-tweet['\"]")) {
                var a = this.data.url.match(/(status|statuses)\/(\d+)/);
                if (!(a && a.length > 2)) {
                    return void c.loadErrorDisplay(c._("twitterembed_invalidurl_err"))
                }
                this.media_id = a[2]
            }
        }
        b = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", TL.ajax({
            type: "GET",
            url: b,
            dataType: "json",
            success: function(d) {
                c.createMedia(d)
            },
            error: function(e, d) {
                var f = "";
                f += c._("twitter_load_err") + "<br/>" + c.media_id + "<br/>" + d, c.loadErrorDisplay(f)
            }
        })
    },
    createMedia: function(d) {
        trace("create_media");
        var h = "",
            c = "",
            l = "",
            b = "",
            f = "",
            j = "",
            g = this;
        c = d.html.split("</p>&mdash;")[0] + "</p></blockquote>", l = d.author_url.split("twitter.com/")[1], b = d.html.split("</p>&mdash;")[1].split('<a href="')[1], f = b.split('">')[0], j = b.split('">')[1].split("</a>")[0], c = c.replace(/<a href/gi, '<a target="_blank" href'), c.includes("pic.twitter.com") ? (TL.Load.js("https://platform.twitter.com/widgets.js", function() {
            twttr.widgets.createTweet(g.media_id, g._el.content_item, {
                conversation: "none",
                linkColor: "#cc0000",
                theme: "light"
            })
        }), this.onLoaded()) : (h += c, h += "<div class='vcard'>", h += "<a href='" + f + "' class='twitter-date' target='_blank'>" + j + "</a>", h += "<img src='' class='tl-media-item tl-media-image' target='_blank'></a>", h += "<div class='author'>", h += "<a class='screen-name url' href='" + d.author_url + "' target='_blank'>", h += "<span class='avatar'></span>", h += "<span class='fn'>" + d.author_name + " <span class='tl-icon-twitter'></span></span>", h += "<span class='nickname'>@" + l + "<span class='thumbnail-inline'></span></span>", h += "</a>", h += "</div>", h += "</div>", this._el.content_item.innerHTML = h, this.onLoaded())
    },
    updateMediaDisplay: function() {},
    _updateMediaDisplay: function() {}
});
var mediaID;
TL.Media.TwitterEmbed = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var b, c = this;
            this._el.content_item = TL.Dom.create("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text";
            var a = this.data.url.match(/(status|statuses)\/(\d+)/);
            return a && a.length > 2 ? (this.media_id = a[2], b = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", window.twttr = function(g, j, f) {
                var l, d = g.getElementsByTagName(j)[0],
                    h = window.twttr || {};
                return g.getElementById(f) ? h : (l = g.createElement(j), l.id = f, l.src = "https://platform.twitter.com/widgets.js", d.parentNode.insertBefore(l, d), h._e = [], h.ready = function(e) {
                    h._e.push(e)
                }, h)
            }(document, "script", "twitter-wjs"), mediaID = this.media_id, void TL.ajax({
                type: "GET",
                url: b,
                dataType: "json",
                success: function(d) {
                    c.createMedia(d)
                },
                error: function(e, d) {
                    var f = "";
                    f += c._("twitter_load_err") + "<br/>" + c.media_id + "<br/>" + d, c.loadErrorDisplay(f)
                }
            })) : void c.loadErrorDisplay(c._("twitterembed_invalidurl_err"))
        },
        createMedia: function(d) {
            trace("create_media");
            var g = "",
                c = "",
                j = "",
                b = "",
                f = "",
                h = "";
            c = d.html.split("</p>&mdash;")[0] + "</p></blockquote>", console.log(c), j = d.author_url.split("twitter.com/")[1], b = d.html.split("</p>&mdash;")[1].split('<a href="')[1], f = b.split('">')[0], h = b.split('">')[1].split("</a>")[0], c = c.replace(/<a href/gi, '<a target="_blank" href'), c.includes("pic.twitter.com") ? (twttr.ready(function() {
                g = document.getElementsByClassName("tl-media-twitter")[0];
                var a = String(mediaID);
                twttr.widgets.createTweet(a, g, {
                    conversation: "none",
                    linkColor: "#cc0000",
                    theme: "light"
                }).then(function() {
                    this.onLoaded()
                })
            }), this._el.content_item.innerHTML = g, this.onLoaded()) : (g += c, g += "<div class='vcard'>", g += "<a href='" + f + "' class='twitter-date' target='_blank'>" + h + "</a>", g += "<div class='author'>", g += "<a class='screen-name url' href='" + d.author_url + "' target='_blank'>", g += "<span class='avatar'></span>", g += "<span class='fn'>" + d.author_name + " <span class='tl-icon-twitter'></span></span>", g += "<span class='nickname'>@" + j + "<span class='thumbnail-inline'></span></span>", g += "</a>", g += "</div>", g += "</div>", this._el.content_item.innerHTML = g, this.onLoaded())
        },
        updateMediaDisplay: function() {},
        _updateMediaDisplay: function() {}
    }), TL.Media.Vimeo = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a, b = this;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe tl-media-vimeo tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0], a = "https://player.vimeo.com/video/" + this.media_id + "?api=1&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff", this.player = TL.Dom.create("iframe", "", this._el.content_item), this.player.addEventListener("load", function() {
                b.onMediaLoaded()
            }), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = a, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = TL.Util.ratio.r16_9({
                w: this._el.content_item.offsetWidth
            }) + "px"
        },
        _stopMedia: function() {
            try {
                this.player.contentWindow.postMessage(JSON.stringify({
                    method: "pause"
                }), "https://player.vimeo.com")
            } catch (a) {
                trace(a)
            }
        }
    }), TL.Media.Vine = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe tl-media-vine tl-media-shadow", this._el.content), this.media_id = this.data.url.split("vine.co/v/")[1], a = "https://vine.co/v/" + this.media_id + "/embed/simple", this._el.content_item.innerHTML = "<iframe frameborder='0' width='100%' height='100%' src='" + a + "'></iframe><script async src='https://platform.vine.co/static/scripts/embed.js' charset='utf-8'><\/script>", this.onLoaded()
        },
        _updateMediaDisplay: function() {
            var a = TL.Util.ratio.square({
                w: this._el.content_item.offsetWidth,
                h: this.options.height
            });
            this._el.content_item.style.height = a.h + "px"
        },
        _stopMedia: function() {
            this._el.content_item.querySelector("iframe").contentWindow.postMessage("pause", "*")
        }
    }), TL.Media.Website = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a = this;
            this.media_id = this.data.url.replace(/.*?:\/\//g, ""), this.options.api_key_embedly ? (api_url = "https://api.embed.ly/1/extract?key=" + this.options.api_key_embedly + "&url=" + this.media_id + "&callback=?", TL.getJSON(api_url, function(b) {
                a.createMedia(b)
            })) : this.createCardContent()
        },
        createCardContent: function() {
            ! function(d, g) {
                var c = "embedly-platform",
                    h = "script";
                if (!g.getElementById(c)) {
                    d.embedly = d.embedly || function() {
                        (d.embedly.q = d.embedly.q || []).push(arguments)
                    };
                    var b = g.createElement(h);
                    b.id = c, b.async = 1, b.src = ("https:" === document.location.protocol ? "https" : "http") + "://cdn.embedly.com/widgets/platform.js";
                    var f = g.getElementsByTagName(h)[0];
                    f.parentNode.insertBefore(b, f)
                }
            }(window, document);
            var a = '<a href="' + this.data.url + '" class="embedly-card">' + this.data.url + "</a>";
            this._setContent(a)
        },
        createMedia: function(a) {
            var b = "";
            b += "<h4><a href='" + this.data.url + "' target='_blank'>" + a.title + "</a></h4>", a.images && a.images[0] && (trace(a.images[0].url), b += "<img src='" + a.images[0].url + "' />"), a.favicon_url && (b += "<img class='tl-media-website-icon' src='" + a.favicon_url + "' />"), b += "<span class='tl-media-website-description'>" + a.provider_name + "</span><br/>", b += "<p>" + a.description + "</p>", this._setContent(b)
        },
        _setContent: function(a) {
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-website", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this._el.content_item.innerHTML = a, this.onLoaded()
        },
        updateMediaDisplay: function() {},
        _updateMediaDisplay: function() {}
    }), TL.Media.Wikipedia = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var b, c, a = this;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-wikipedia", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.media_id = this.data.url.split("wiki/")[1].split("#")[0].replace("_", " "), this.media_id = this.media_id.replace(" ", "%20"), c = this.data.url.split("//")[1].split(".wikipedia")[0], b = "https://" + c + ".wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&redirects=&titles=" + this.media_id + "&exintro=1&format=json&callback=?", TL.ajax({
                type: "GET",
                url: b,
                dataType: "json",
                success: function(d) {
                    a.createMedia(d)
                },
                error: function(d, f) {
                    var g = "";
                    g += a._("wikipedia_load_err") + "<br/>" + a.media_id + "<br/>" + f, a.loadErrorDisplay(g)
                }
            })
        },
        createMedia: function(b) {
            var c = "";
            if (b.query) {
                var a = "",
                    c = {
                        entry: {},
                        title: "",
                        text: "",
                        extract: "",
                        paragraphs: 1,
                        page_image: "",
                        text_array: []
                    };
                c.entry = TL.Util.getObjectAttributeByIndex(b.query.pages, 0), c.extract = c.entry.extract, c.title = c.entry.title, c.page_image = c.entry.thumbnail, c.extract.match("<p>") ? c.text_array = c.extract.split("<p>") : c.text_array.push(c.extract);
                for (var d = 0; d < c.text_array.length; d++) {
                    d + 1 <= c.paragraphs && d + 1 < c.text_array.length && (c.text += "<p>" + c.text_array[d + 1])
                }
                a += "<span class='tl-icon-wikipedia'></span>", a += "<div class='tl-wikipedia-title'><h4><a href='" + this.data.url + "' target='_blank'>" + c.title + "</a></h4>", a += "<span class='tl-wikipedia-source'>" + this._("wikipedia") + "</span></div>", c.page_image, a += c.text, c.extract.match("REDIRECT") || (this._el.content_item.innerHTML = a, this.onLoaded())
            }
        },
        updateMediaDisplay: function() {},
        _updateMediaDisplay: function() {}
    }), TL.Media.Wistia = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a, b = this;
            this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-iframe tl-media-wistia tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/medias\/(.*)/)[3], a = "https://fast.wistia.com/embed/iframe/" + this.media_id + "?version=v1&controlsVisibleOnLoad=true&playerColor=aae3d8", this.player = TL.Dom.create("iframe", "", this._el.content_item), this.player.addEventListener("load", function() {
                b.onMediaLoaded()
            }), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = a, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = TL.Util.ratio.r16_9({
                w: this._el.content_item.offsetWidth
            }) + "px"
        },
        _stopMedia: function() {
            try {
                this.player.contentWindow.postMessage(JSON.stringify({
                    method: "pause"
                }), "https://player.vimeo.com")
            } catch (a) {
                trace(a)
            }
        }
    }), TL.Media.YouTube = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            var a, b = this;
            this.youtube_loaded = !1, this._el.content_item = TL.Dom.create("div", "tl-media-item tl-media-youtube tl-media-shadow", this._el.content), this._el.content_item.id = TL.Util.unique_ID(7), a = TL.Util.getUrlVars(this.data.url), this.media_id = {}, this.data.url.match("v=") ? this.media_id.id = a.v : this.data.url.match("/embed/") ? this.media_id.id = this.data.url.split("embed/")[1].split(/[?&]/)[0] : this.data.url.match(/v\/|v=|youtu\.be\//) ? this.media_id.id = this.data.url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0] : trace("YOUTUBE IN URL BUT NOT A VALID VIDEO"), this.media_id.start = parseInt(a.start), isNaN(this.media_id.start) && (this.media_id.start = TL.Util.parseYouTubeTime(a.t)), this.media_id.end = parseInt(a.end), this.media_id.hd = Boolean("undefined" != typeof a.hd), TL.Load.js("https://www.youtube.com/iframe_api", function() {
                b.createMedia()
            })
        },
        _updateMediaDisplay: function() {
            this._el.content_item.style.height = TL.Util.ratio.r16_9({
                w: this.options.width
            }) + "px", this._el.content_item.style.width = this.options.width + "px"
        },
        _stopMedia: function() {
            if (this.youtube_loaded) {
                try {
                    this.player.getPlayerState() == YT.PlayerState.PLAYING && this.player.pauseVideo()
                } catch (a) {
                    trace(a)
                }
            }
        },
        createMedia: function() {
            var a = this;
            clearTimeout(this.timer), "undefined" != typeof YT && "undefined" != typeof YT.Player ? this.player = new YT.Player(this._el.content_item.id, {
                playerVars: {
                    enablejsapi: 1,
                    color: "white",
                    autohide: 1,
                    showinfo: 0,
                    theme: "light",
                    start: this.media_id.start,
                    end: this.media_id.end,
                    fs: 0,
                    rel: 0
                },
                videoId: this.media_id.id,
                events: {
                    onReady: function() {
                        a.onPlayerReady(), a.onLoaded()
                    },
                    onStateChange: a.onStateChange
                }
            }) : this.timer = setTimeout(function() {
                a.createMedia()
            }, 1000)
        },
        onPlayerReady: function() {
            this.youtube_loaded = !0, this._el.content_item = document.getElementById(this._el.content_item.id), this.onMediaLoaded()
        },
        onStateChange: function(a) {
            a.data == YT.PlayerState.ENDED && (a.target.seekTo(0), a.target.pauseVideo())
        }
    }), TL.Media.Audio = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
        },
        createMedia: function() {
            var a = this,
                b = "tl-media-item tl-media-audio tl-media-shadow";
            this.data.link ? (this._el.content_link = TL.Dom.create("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_item = TL.Dom.create("audio", b, this._el.content_link)) : this._el.content_item = TL.Dom.create("audio", b, this._el.content), this._el.content_item.controls = !0, this._el.source_item = TL.Dom.create("source", "", this._el.content_item), this._el.content_item.addEventListener("load", function() {
                a.onMediaLoaded()
            }), this._el.source_item.src = this.data.url, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 audio with " + this._el.source_item.type
        },
        _updateMediaDisplay: function() {
            TL.Browser.firefox && (this._el.content_item.style.width = "auto")
        },
        _getType: function(b, c) {
            var a = b.match(c),
                d = "audio/";
            switch (a[1]) {
                case "mp3":
                    d += "mpeg";
                    break;
                case "wav":
                    d += "wav";
                    break;
                case "m4a":
                    d += "mp4";
                    break;
                default:
                    d = "audio"
            }
            return d
        }
    }), TL.Media.Video = TL.Media.extend({
        includes: [TL.Events],
        _loadMedia: function() {
            this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
        },
        createMedia: function() {
            var a = this,
                b = "tl-media-item tl-media-video tl-media-shadow";
            this.data.link ? (this._el.content_link = TL.Dom.create("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_item = TL.Dom.create("video", b, this._el.content_link)) : this._el.content_item = TL.Dom.create("video", b, this._el.content), this._el.content_item.controls = !0, this._el.source_item = TL.Dom.create("source", "", this._el.content_item), this._el.content_item.addEventListener("load", function() {
                a.onMediaLoaded()
            }), this._el.source_item.src = this.data.url, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 video with " + this._el.source_item.type
        },
        _updateMediaDisplay: function() {
            TL.Browser.firefox && (this._el.content_item.style.width = "auto")
        },
        _getType: function(b, c) {
            var a = b.match(c),
                d = "video/";
            switch (a[1]) {
                case "mp4":
                    d += "mp4";
                    break;
                default:
                    d = "video"
            }
            return d
        }
    }), TL.Slide = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins, TL.I18NMixins],
        _el: {},
        initialize: function(b, c, a) {
            this._el = {
                container: {},
                scroll_container: {},
                background: {},
                content_container: {},
                content: {}
            }, this._media = null, this._mediaclass = {}, this._text = {}, this._background_media = null, this._state = {
                loaded: !1
            }, this.has = {
                headline: !1,
                text: !1,
                media: !1,
                title: !1,
                background: {
                    image: !1,
                    color: !1,
                    color_value: ""
                }
            }, this.has.title = a, this.data = {
                unique_id: null,
                background: null,
                start_date: null,
                end_date: null,
                location: null,
                text: null,
                media: null,
                autolink: !0
            }, this.options = {
                duration: 1000,
                slide_padding_lr: 40,
                ease: TL.Ease.easeInSpline,
                width: 600,
                height: 600,
                skinny_size: 650,
                media_name: ""
            }, this.active = !1, this.animator = {}, TL.Util.mergeData(this.options, c), TL.Util.mergeData(this.data, b), this._initLayout(), this._initEvents()
        },
        show: function() {
            this.animator = TL.Animate(this._el.slider_container, {
                left: -(this._el.container.offsetWidth * n) + "px",
                duration: this.options.duration,
                easing: this.options.ease
            })
        },
        hide: function() {},
        setActive: function(a) {
            this.active = a, this.active ? (this.data.background && this.fire("background_change", this.has.background), this.loadMedia()) : this.stopMedia()
        },
        addTo: function(a) {
            a.appendChild(this._el.container)
        },
        removeFrom: function(a) {
            a.removeChild(this._el.container)
        },
        updateDisplay: function(b, c, a) {
            this._updateDisplay(b, c, a)
        },
        loadMedia: function() {
            var a = this;
            this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0), this._background_media && !this._background_media._state.loaded && (this._background_media.on("loaded", function() {
                a._updateBackgroundDisplay()
            }), this._background_media.loadMedia())
        },
        stopMedia: function() {
            this._media && this._state.loaded && this._media.stopMedia()
        },
        getBackground: function() {
            return this.has.background
        },
        scrollToTop: function() {
            this._el.container.scrollTop = 0
        },
        getFormattedDate: function() {
            if (TL.Util.trim(this.data.display_date).length > 0) {
                return this.data.display_date
            }
            var a = "";
            return this.has.title || (this.data.end_date && (a = " &mdash; " + this.data.end_date.getDisplayDate(this.getLanguage())), this.data.start_date && (a = this.data.start_date.getDisplayDate(this.getLanguage()) + a)), a
        },
        _initLayout: function() {
            if (this._el.container = TL.Dom.create("div", "tl-slide"), this.has.title && (this._el.container.className = "tl-slide tl-slide-titleslide"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._el.scroll_container = TL.Dom.create("div", "tl-slide-scrollable-container", this._el.container), this._el.content_container = TL.Dom.create("div", "tl-slide-content-container", this._el.scroll_container), this._el.content = TL.Dom.create("div", "tl-slide-content", this._el.content_container), this._el.background = TL.Dom.create("div", "tl-slide-background", this._el.container), this.data.background) {
                if (this.data.background.url) {
                    var a = TL.MediaType(this.data.background, !0);
                    a && (this._background_media = new a.cls(this.data.background, {
                        background: 1
                    }), this.has.background.image = !0, this._el.container.className += " tl-full-image-background", this.has.background.color_value = "#000", this._el.background.style.display = "block")
                }
                this.data.background.color && (this.has.background.color = !0, this._el.container.className += " tl-full-color-background", this.has.background.color_value = this.data.background.color), this.data.background.text_background && (this._el.container.className += " tl-text-background")
            }
            this.data.media && this.data.media.url && "" != this.data.media.url && (this.has.media = !0), this.data.text && this.data.text.text && (this.has.text = !0), this.data.text && this.data.text.headline && (this.has.headline = !0), this.has.media && (this.data.media.mediatype = TL.MediaType(this.data.media), this.options.media_name = this.data.media.mediatype.name, this.options.media_type = this.data.media.mediatype.type, this.options.autolink = this.data.autolink, this._media = new this.data.media.mediatype.cls(this.data.media, this.options)), (this.has.text || this.has.headline) && (this._text = new TL.Media.Text(this.data.text, {
                title: this.has.title,
                language: this.options.language,
                autolink: this.data.autolink
            }), this._text.addDateText(this.getFormattedDate())), this.has.text || this.has.headline || !this.has.media ? this.has.headline && this.has.media && !this.has.text ? (TL.DomUtil.addClass(this._el.container, "tl-slide-media-only"), this._text.addTo(this._el.content), this._media.addTo(this._el.content)) : this.has.text && this.has.media ? (this._media.addTo(this._el.content), this._text.addTo(this._el.content)) : (this.has.text || this.has.headline) && (TL.DomUtil.addClass(this._el.container, "tl-slide-text-only"), this._text.addTo(this._el.content)) : (TL.DomUtil.addClass(this._el.container, "tl-slide-media-only"), this._media.addTo(this._el.content)), this.onLoaded()
        },
        _initEvents: function() {},
        _updateDisplay: function(d, g, c) {
            var h, b = this.options.slide_padding_lr,
                f = this.options.slide_padding_lr;
            this.options.width = d ? d : this._el.container.offsetWidth, h = this.options.width - 2 * this.options.slide_padding_lr, TL.Browser.mobile && this.options.width <= this.options.skinny_size ? (b = 0, f = 0, h = this.options.width) : "landscape" == c || this.options.width <= this.options.skinny_size && (b = 50, f = 50, h = this.options.width - b - f), this._el.content.style.paddingLeft = b + "px", this._el.content.style.paddingRight = f + "px", this._el.content.style.width = h + "px", this.options.height = g ? g : this._el.container.offsetHeight, this._media && (!this.has.text && this.has.headline ? this._media.updateDisplay(h, this.options.height - this._text.headlineHeight(), c) : this.has.text || this.has.headline ? this.options.width <= this.options.skinny_size ? this._media.updateDisplay(h, this.options.height, c) : this._media.updateDisplay(h / 2, this.options.height, c) : this._media.updateDisplay(h, this.options.height, c)), this._updateBackgroundDisplay()
        },
        _updateBackgroundDisplay: function() {
            this._background_media && this._background_media._state.loaded && (this._el.background.style.backgroundImage = "url('" + this._background_media.getImageURL(this.options.width, this.options.height) + "')")
        }
    }), TL.SlideNav = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins],
        _el: {},
        initialize: function(b, c, a) {
            this._el = {
                container: {},
                content_container: {},
                icon: {},
                title: {},
                description: {}
            }, this.mediatype = {}, this.data = {
                title: "Navigation",
                description: "Description",
                date: "Date"
            }, this.options = {
                direction: "previous"
            }, this.animator = null, TL.Util.mergeData(this.options, c), TL.Util.mergeData(this.data, b), this._el.container = TL.Dom.create("div", "tl-slidenav-" + this.options.direction), TL.Browser.mobile && this._el.container.setAttribute("ontouchstart", " "), this._initLayout(), this._initEvents(), a && a.appendChild(this._el.container)
        },
        update: function(a) {
            var b = {
                title: "",
                description: "",
                date: a.getFormattedDate()
            };
            a.data.text && a.data.text.headline && (b.title = a.data.text.headline), this._update(b)
        },
        setColor: function(a) {
            this._el.content_container.className = a ? "tl-slidenav-content-container tl-slidenav-inverted" : "tl-slidenav-content-container"
        },
        _onMouseClick: function() {
            this.fire("clicked", this.options)
        },
        _update: function(a) {
            this.data = TL.Util.mergeData(this.data, a), this._el.title.innerHTML = TL.Util.unlinkify(this.data.title), this._el.description.innerHTML = TL.Util.unlinkify(this.data.date)
        },
        _initLayout: function() {
            this._el.content_container = TL.Dom.create("div", "tl-slidenav-content-container", this._el.container), this._el.icon = TL.Dom.create("div", "tl-slidenav-icon", this._el.content_container), this._el.title = TL.Dom.create("div", "tl-slidenav-title", this._el.content_container), this._el.description = TL.Dom.create("div", "tl-slidenav-description", this._el.content_container), this._el.icon.innerHTML = "&nbsp;", this._update()
        },
        _initEvents: function() {
            TL.DomEvent.addListener(this._el.container, "click", this._onMouseClick, this)
        }
    }), TL.StorySlider = TL.Class.extend({
        includes: [TL.Events, TL.I18NMixins],
        initialize: function(b, c, a, d) {
            this._el = {
                container: {},
                background: {},
                slider_container_mask: {},
                slider_container: {},
                slider_item_container: {}
            }, this._nav = {}, this._nav.previous = {}, this._nav.next = {}, this.slide_spacing = 0, this._slides = [], this._swipable, this.preloadTimer, this._message, this.current_id = "", this.data = {}, this.options = {
                id: "",
                layout: "portrait",
                width: 600,
                height: 600,
                default_bg_color: {
                    r: 255,
                    g: 255,
                    b: 255
                },
                slide_padding_lr: 40,
                start_at_slide: 1,
                slide_default_fade: "0%",
                duration: 1000,
                ease: TL.Ease.easeInOutQuint,
                dragging: !0,
                trackResize: !0
            }, "object" == typeof b ? (this._el.container = b, this.options.id = TL.Util.unique_ID(6, "tl")) : (this.options.id = b, this._el.container = TL.Dom.get(b)), this._el.container.id || (this._el.container.id = this.options.id), this.animator = null, TL.Util.mergeData(this.options, a), TL.Util.mergeData(this.data, c), d && this.init()
        },
        init: function() {
            this._initLayout(), this._initEvents(), this._initData(), this._updateDisplay(), this.goTo(this.options.start_at_slide), this._onLoaded()
        },
        _addSlide: function(a) {
            a.addTo(this._el.slider_item_container), a.on("added", this._onSlideAdded, this), a.on("background_change", this._onBackgroundChange, this)
        },
        _createSlide: function(b, c, a) {
            var d = new TL.Slide(b, this.options, c);
            this._addSlide(d), 0 > a ? this._slides.push(d) : this._slides.splice(a, 0, d)
        },
        _createSlides: function(a) {
            for (var b = 0; b < a.length; b++) {
                "" == a[b].unique_id && (a[b].unique_id = TL.Util.unique_ID(6, "tl-slide")), this._createSlide(a[b], !1, -1)
            }
        },
        _removeSlide: function(a) {
            a.removeFrom(this._el.slider_item_container), a.off("added", this._onSlideRemoved, this), a.off("background_change", this._onBackgroundChange)
        },
        _destroySlide: function(a) {
            this._removeSlide(this._slides[a]), this._slides.splice(a, 1)
        },
        _findSlideIndex: function(a) {
            var b = a;
            return ("string" == typeof a || a instanceof String) && (b = TL.Util.findArrayNumberByUniqueID(a, this._slides, "unique_id")), b
        },
        updateDisplay: function(b, c, a, d) {
            this._updateDisplay(b, c, a, d)
        },
        createSlide: function(a, b) {
            this._createSlide(a, !1, b)
        },
        createSlides: function(a) {
            this._createSlides(a)
        },
        destroySlide: function(a) {
            this._destroySlide(a)
        },
        destroySlideId: function(a) {
            this.destroySlide(this._findSlideIndex(a))
        },
        goTo: function(d, f, c) {
            d = parseInt(d), isNaN(d) && (d = 0);
            var g = this;
            this.changeBackground({
                color_value: "",
                image: !1
            }), this.preloadTimer && clearTimeout(this.preloadTimer);
            for (var b = 0; b < this._slides.length; b++) {
                this._slides[b].setActive(!1)
            }
            d < this._slides.length && d >= 0 && (this.current_id = this._slides[d].data.unique_id, this.animator && this.animator.stop(), this._swipable && this._swipable.stopMomentum(), f ? (this._el.slider_container.style.left = -(this.slide_spacing * d) + "px", this._onSlideChange(c)) : this.animator = TL.Animate(this._el.slider_container, {
                left: -(this.slide_spacing * d) + "px",
                duration: this.options.duration,
                easing: this.options.ease,
                complete: this._onSlideChange(c)
            }), this._slides[d].setActive(!0), this._slides[d + 1] ? (this.showNav(this._nav.next, !0), this._nav.next.update(this._slides[d + 1])) : this.showNav(this._nav.next, !1), this._slides[d - 1] ? (this.showNav(this._nav.previous, !0), this._nav.previous.update(this._slides[d - 1])) : this.showNav(this._nav.previous, !1), this.preloadTimer = setTimeout(function() {
                g.preloadSlides(d)
            }, this.options.duration))
        },
        goToId: function(b, c, a) {
            this.goTo(this._findSlideIndex(b), c, a)
        },
        preloadSlides: function(a) {
            this._slides[a + 1] && (this._slides[a + 1].loadMedia(), this._slides[a + 1].scrollToTop()), this._slides[a + 2] && (this._slides[a + 2].loadMedia(), this._slides[a + 2].scrollToTop()), this._slides[a - 1] && (this._slides[a - 1].loadMedia(), this._slides[a - 1].scrollToTop()), this._slides[a - 2] && (this._slides[a - 2].loadMedia(), this._slides[a - 2].scrollToTop())
        },
        next: function() {
            var a = this._findSlideIndex(this.current_id);
            this.goTo(a + 1 < this._slides.length ? a + 1 : a)
        },
        previous: function() {
            var a = this._findSlideIndex(this.current_id);
            this.goTo(a - 1 >= 0 ? a - 1 : a)
        },
        showNav: function(a, b) {
            this.options.width <= 500 && TL.Browser.mobile || (b ? a.show() : a.hide())
        },
        changeBackground: function(b) {
            var c, a = {
                r: 256,
                g: 256,
                b: 256
            };
            b.color_value && "" != b.color_value ? (a = TL.Util.hexToRgb(b.color_value), a || (trace("Invalid color value " + b.color_value), a = this.options.default_bg_color)) : (a = this.options.default_bg_color, b.color_value = "rgb(" + a.r + " , " + a.g + ", " + a.b + ")"), c = a.r + "," + a.g + "," + a.b, this._el.background.style.backgroundImage = "none", this._el.background.style.backgroundColor = b.color_value ? b.color_value : "transparent", a.r < 255 || a.g < 255 || a.b < 255 || b.image ? (this._nav.next.setColor(!0), this._nav.previous.setColor(!0)) : (this._nav.next.setColor(!1), this._nav.previous.setColor(!1))
        },
        _updateDisplay: function(d, g, c, j) {
            var b, f;
            f = "undefined" == typeof j ? this.options.layout : j, this.options.layout = f, this.slide_spacing = 2 * this.options.width, this.options.width = d ? d : this._el.container.offsetWidth, this.options.height = g ? g : this._el.container.offsetHeight, b = this.options.height / 2, this._nav.next.setPosition({
                top: b
            }), this._nav.previous.setPosition({
                top: b
            });
            for (var h = 0; h < this._slides.length; h++) {
                this._slides[h].updateDisplay(this.options.width, this.options.height, f), this._slides[h].setPosition({
                    left: this.slide_spacing * h,
                    top: 0
                })
            }
            this.goToId(this.current_id, !0, !0)
        },
        _updateDrawSlides: function() {
            for (var a = this.options.layout, b = 0; b < this._slides.length; b++) {
                this._slides[b].updateDisplay(this.options.width, this.options.height, a), this._slides[b].setPosition({
                    left: this.slide_spacing * b,
                    top: 0
                })
            }
            this.goToId(this.current_id, !0, !1)
        },
        _initLayout: function() {
            TL.DomUtil.addClass(this._el.container, "tl-storyslider"), this._el.slider_container_mask = TL.Dom.create("div", "tl-slider-container-mask", this._el.container), this._el.background = TL.Dom.create("div", "tl-slider-background tl-animate", this._el.container), this._el.slider_container = TL.Dom.create("div", "tl-slider-container tlanimate", this._el.slider_container_mask), this._el.slider_item_container = TL.Dom.create("div", "tl-slider-item-container", this._el.slider_container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this._nav.previous = new TL.SlideNav({
                title: "Previous",
                description: "description"
            }, {
                direction: "previous"
            }), this._nav.next = new TL.SlideNav({
                title: "Next",
                description: "description"
            }, {
                direction: "next"
            }), this._nav.next.addTo(this._el.container), this._nav.previous.addTo(this._el.container), this._el.slider_container.style.left = "0px", TL.Browser.touch && (this._swipable = new TL.Swipable(this._el.slider_container_mask, this._el.slider_container, {
                enable: {
                    x: !0,
                    y: !1
                },
                snap: !0
            }), this._swipable.enable(), this._message = new TL.Message({}, {
                message_class: "tl-message-full",
                message_icon_class: "tl-icon-swipe-left"
            }), this._message.updateMessage(this._("swipe_to_navigate")), this._message.addTo(this._el.container))
        },
        _initEvents: function() {
            this._nav.next.on("clicked", this._onNavigation, this), this._nav.previous.on("clicked", this._onNavigation, this), this._message && this._message.on("clicked", this._onMessageClick, this), this._swipable && (this._swipable.on("swipe_left", this._onNavigation, this), this._swipable.on("swipe_right", this._onNavigation, this), this._swipable.on("swipe_nodirection", this._onSwipeNoDirection, this))
        },
        _initData: function() {
            this.data.title && this._createSlide(this.data.title, !0, -1), this._createSlides(this.data.events)
        },
        _onBackgroundChange: function(b) {
            var c = this._findSlideIndex(this.current_id),
                a = this._slides[c].getBackground();
            this.changeBackground(b), this.fire("colorchange", a)
        },
        _onMessageClick: function() {
            this._message.hide()
        },
        _onSwipeNoDirection: function() {
            this.goToId(this.current_id)
        },
        _onNavigation: function(a) {
            "next" == a.direction || "left" == a.direction ? this.next() : ("previous" == a.direction || "right" == a.direction) && this.previous(), this.fire("nav_" + a.direction, this.data)
        },
        _onSlideAdded: function() {
            trace("slideadded"), this.fire("slideAdded", this.data)
        },
        _onSlideRemoved: function() {
            this.fire("slideRemoved", this.data)
        },
        _onSlideChange: function(a) {
            a || this.fire("change", {
                unique_id: this.current_id
            })
        },
        _onMouseClick: function() {},
        _fireMouseEvent: function(a) {
            if (this._loaded) {
                var b = a.type;
                b = "mouseenter" === b ? "mouseover" : "mouseleave" === b ? "mouseout" : b, this.hasEventListeners(b) && ("contextmenu" === b && TL.DomEvent.preventDefault(a), this.fire(b, {
                    latlng: "something",
                    layerPoint: "something else"
                }))
            }
        },
        _onLoaded: function() {
            this.fire("loaded", this.data)
        }
    }), TL.TimeNav = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins],
        _el: {},
        initialize: function(b, c, a, d) {
            this._el = {
                parent: {},
                container: {},
                slider: {},
                slider_background: {},
                line: {},
                marker_container_mask: {},
                marker_container: {},
                marker_item_container: {},
                timeaxis: {},
                timeaxis_background: {},
                attribution: {}
            }, this.collapsed = !1, this._el.container = "object" == typeof b ? b : TL.Dom.get(b), this.config = c, this.options = {
                width: 600,
                height: 600,
                duration: 1000,
                ease: TL.Ease.easeInOutQuint,
                has_groups: !1,
                optimal_tick_width: 50,
                scale_factor: 2,
                marker_padding: 5,
                timenav_height_min: 150,
                marker_height_min: 30,
                marker_width_min: 100,
                zoom_sequence: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
            }, this.animator = null, this.ready = !1, this._markers = [], this._eras = [], this.has_eras = !1, this._groups = [], this._calculated_row_height = 100, this.current_id = "", this.timescale = {}, this.timeaxis = {}, this.axishelper = {}, this.max_rows = 6, this.animate_css = !1, this._swipable, TL.Util.mergeData(this.options, a), d && this.init()
        },
        init: function() {
            this._initLayout(), this._initEvents(), this._initData(), this._updateDisplay(), this._onLoaded()
        },
        positionMarkers: function() {
            this._positionMarkers()
        },
        updateDisplay: function(b, c, a, d) {
            this._updateDisplay(b, c, a, d)
        },
        _getTimeScale: function() {
            var a = 0;
            try {
                a = parseInt(this.options.marker_height_min)
            } catch (b) {
                trace("Invalid value for marker_height_min option."), a = 30
            }
            return 0 == a && (trace("marker_height_min option must not be zero."), a = 30), this.max_rows = Math.round((this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding) / a), this.max_rows < 1 && (this.max_rows = 1), new TL.TimeScale(this.config, {
                display_width: this._el.container.offsetWidth,
                screen_multiplier: this.options.scale_factor,
                max_rows: this.max_rows
            })
        },
        _updateTimeScale: function(a) {
            this.options.scale_factor = a, this._updateDrawTimeline()
        },
        zoomIn: function() {
            var a = TL.Util.findNextGreater(this.options.zoom_sequence, this.options.scale_factor);
            this.setZoomFactor(a)
        },
        zoomOut: function() {
            var a = TL.Util.findNextLesser(this.options.zoom_sequence, this.options.scale_factor);
            this.setZoomFactor(a)
        },
        setZoom: function(a) {
            var b = this.options.zoom_sequence[a];
            "number" == typeof b ? this.setZoomFactor(b) : console.warn("Invalid zoom level. Please use an index number between 0 and " + (this.options.zoom_sequence.length - 1))
        },
        setZoomFactor: function(a) {
            a <= this.options.zoom_sequence[0] ? this.fire("zoomtoggle", {
                zoom: "out",
                show: !1
            }) : this.fire("zoomtoggle", {
                zoom: "out",
                show: !0
            }), a >= this.options.zoom_sequence[this.options.zoom_sequence.length - 1] ? this.fire("zoomtoggle", {
                zoom: "in",
                show: !1
            }) : this.fire("zoomtoggle", {
                zoom: "in",
                show: !0
            }), 0 == a && (console.warn("Zoom factor must be greater than zero. Using 0.1"), a = 0.1), this.options.scale_factor = a, this.goToId(this.current_id, !this._updateDrawTimeline(!0), !0)
        },
        _createGroups: function() {
            this._groups = [];
            var a = this.timescale.getGroupLabels();
            if (a) {
                this.options.has_groups = !0;
                for (var b = 0; b < a.length; b++) {
                    this._createGroup(a[b])
                }
            }
        },
        _createGroup: function(a) {
            var b = new TL.TimeGroup(a);
            this._addGroup(b), this._groups.push(b)
        },
        _addGroup: function(a) {
            a.addTo(this._el.container)
        },
        _positionGroups: function() {
            if (this.options.has_groups) {
                for (var d = this.options.height - this._el.timeaxis_background.offsetHeight, g = Math.floor(d / this.timescale.getNumberOfRows() - this.options.marker_padding), c = (this.timescale.getGroupLabels(), 0), h = 0; c < this._groups.length; c++) {
                    var b = Math.floor(h * (g + this.options.marker_padding)),
                        f = !1;
                    b > d - this.options.marker_padding && (f = !0), this._groups[c].setRowPosition(b, this._calculated_row_height + this.options.marker_padding / 2), this._groups[c].setAlternateRowColor(TL.Util.isEven(c), f), h += this._groups[c].data.rows
                }
            }
        },
        _addMarker: function(a) {
            a.addTo(this._el.marker_item_container), a.on("markerclick", this._onMarkerClick, this), a.on("added", this._onMarkerAdded, this)
        },
        _createMarker: function(b, c) {
            var a = new TL.TimeMarker(b, this.options);
            this._addMarker(a), 0 > c ? this._markers.push(a) : this._markers.splice(c, 0, a)
        },
        _createMarkers: function(a) {
            for (var b = 0; b < a.length; b++) {
                this._createMarker(a[b], -1)
            }
        },
        _removeMarker: function(a) {
            a.removeFrom(this._el.marker_item_container)
        },
        _destroyMarker: function(a) {
            this._removeMarker(this._markers[a]), this._markers.splice(a, 1)
        },
        _positionMarkers: function(b) {
            for (var c = 0; c < this._markers.length; c++) {
                var a = this.timescale.getPositionInfo(c);
                this._markers[c].setClass(b ? "tl-timemarker tl-timemarker-fast" : "tl-timemarker"), this._markers[c].setPosition({
                    left: a.start
                }), this._markers[c].setWidth(a.width)
            }
        },
        _calculateMarkerHeight: function(a) {
            return a / this.timescale.getNumberOfRows() - this.options.marker_padding
        },
        _calculateRowHeight: function(a) {
            return a / this.timescale.getNumberOfRows()
        },
        _calculateAvailableHeight: function() {
            return this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding
        },
        _calculateMinimumTimeNavHeight: function() {
            return this.timescale.getNumberOfRows() * this.options.marker_height_min + this._el.timeaxis_background.offsetHeight + this.options.marker_padding
        },
        getMinimumHeight: function() {
            return this._calculateMinimumTimeNavHeight()
        },
        _assignRowsToMarkers: function() {
            var d = this._calculateAvailableHeight(),
                g = this._calculateMarkerHeight(d);
            this._positionGroups(), this._calculated_row_height = this._calculateRowHeight(d);
            for (var c = 0; c < this._markers.length; c++) {
                this._markers[c].setHeight(g);
                var h = this.timescale.getPositionInfo(c).row,
                    b = Math.floor(h * (g + this.options.marker_padding)) + this.options.marker_padding,
                    f = d - b + this.options.marker_padding;
                this._markers[c].setRowPosition(b, f)
            }
        },
        _resetMarkersActive: function() {
            for (var a = 0; a < this._markers.length; a++) {
                this._markers[a].setActive(!1)
            }
        },
        _findMarkerIndex: function(a) {
            var b = -1;
            return ("string" == typeof a || a instanceof String) && (b = TL.Util.findArrayNumberByUniqueID(a, this._markers, "unique_id", b)), b
        },
        _createEras: function(a) {
            for (var b = 0; b < a.length; b++) {
                this._createEra(a[b], -1)
            }
        },
        _createEra: function(b, c) {
            var a = new TL.TimeEra(b, this.options);
            this._addEra(a), 0 > c ? this._eras.push(a) : this._eras.splice(c, 0, a)
        },
        _addEra: function(a) {
            a.addTo(this._el.marker_item_container), a.on("added", this._onEraAdded, this)
        },
        _removeEra: function(a) {
            a.removeFrom(this._el.marker_item_container)
        },
        _destroyEra: function(a) {
            this._removeEra(this._eras[a]), this._eras.splice(a, 1)
        },
        _positionEras: function(b) {
            for (var c = 0, a = 0; a < this._eras.length; a++) {
                var d = {
                    start: 0,
                    end: 0,
                    width: 0
                };
                d.start = this.timescale.getPosition(this._eras[a].data.start_date.getTime()), d.end = this.timescale.getPosition(this._eras[a].data.end_date.getTime()), d.width = d.end - d.start, this._eras[a].setClass(b ? "tl-timeera tl-timeera-fast" : "tl-timeera"), this._eras[a].setPosition({
                    left: d.start
                }), this._eras[a].setWidth(d.width), c++, c > 5 && (c = 0), this._eras[a].setColor(c)
            }
        },
        createMarker: function(a, b) {
            this._createMarker(a, b)
        },
        createMarkers: function(a) {
            this._createMarkers(a)
        },
        destroyMarker: function(a) {
            this._destroyMarker(a)
        },
        destroyMarkerId: function(a) {
            this.destroyMarker(this._findMarkerIndex(a))
        },
        goTo: function(d, g, c) {
            var h = this.options.ease,
                b = this.options.duration,
                f = 0 > d ? 0 : d;
            this._resetMarkersActive(), d >= 0 && d < this._markers.length && this._markers[d].setActive(!0), this.animator && this.animator.stop(), g ? (this._el.slider.className = "tl-timenav-slider", this._el.slider.style.left = -this._markers[f].getLeft() + this.options.width / 2 + "px") : c ? (this._el.slider.className = "tl-timenav-slider tl-timenav-slider-animate", this.animate_css = !0, this._el.slider.style.left = -this._markers[f].getLeft() + this.options.width / 2 + "px") : (this._el.slider.className = "tl-timenav-slider", this.animator = TL.Animate(this._el.slider, {
                left: -this._markers[f].getLeft() + this.options.width / 2 + "px",
                duration: b,
                easing: h
            })), this.current_id = d >= 0 && d < this._markers.length ? this._markers[d].data.unique_id : ""
        },
        goToId: function(b, c, a) {
            this.goTo(this._findMarkerIndex(b), c, a)
        },
        _onLoaded: function() {
            this.ready = !0, this.fire("loaded", this.config)
        },
        _onMarkerAdded: function() {
            this.fire("dateAdded", this.config)
        },
        _onEraAdded: function() {
            this.fire("eraAdded", this.config)
        },
        _onMarkerRemoved: function() {
            this.fire("dateRemoved", this.config)
        },
        _onMarkerClick: function(a) {
            this.goToId(a.unique_id), this.fire("change", {
                unique_id: a.unique_id
            })
        },
        _onMouseScroll: function(b) {
            var c = 0,
                a = 0,
                d = {
                    right: -(this.timescale.getPixelWidth() - this.options.width / 2),
                    left: this.options.width / 2
                };
            b || (b = window.event), b.originalEvent && (b = b.originalEvent), "undefined" != typeof b.wheelDeltaX && (c = b.wheelDeltaY / 6, c = Math.abs(b.wheelDeltaX) > Math.abs(b.wheelDeltaY) ? b.wheelDeltaX / 6 : 0), c && (b.preventDefault && b.preventDefault(), b.returnValue = !1), a = parseInt(this._el.slider.style.left.replace("px", "")) + c, a > d.left ? a = d.left : a < d.right && (a = d.right), this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1), this._el.slider.style.left = a + "px"
        },
        _onDragMove: function() {
            this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1)
        },
        _updateDisplay: function(a, b) {
            a && (this.options.width = a), b && b != this.options.height && (this.options.height = b, this.timescale = this._getTimeScale()), this._assignRowsToMarkers(), this._el.slider_background.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._el.slider_background.style.left = -(this.options.width / 2) + "px", this._el.slider.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._swipable.updateConstraint({
                top: !1,
                bottom: !1,
                left: this.options.width / 2,
                right: -(this.timescale.getPixelWidth() - this.options.width / 2)
            }), this.goToId(this.current_id, !0)
        },
        _drawTimeline: function(a) {
            this.timescale = this._getTimeScale(), this.timeaxis.drawTicks(this.timescale, this.options.optimal_tick_width), this._positionMarkers(a), this._assignRowsToMarkers(), this._createGroups(), this._positionGroups(), this.has_eras && this._positionEras(a)
        },
        _updateDrawTimeline: function(b) {
            var c = !1;
            if (b) {
                var a = new TL.TimeScale(this.config, {
                    display_width: this._el.container.offsetWidth,
                    screen_multiplier: this.options.scale_factor,
                    max_rows: this.max_rows
                });
                this.timescale.getMajorScale() == a.getMajorScale() && this.timescale.getMinorScale() == a.getMinorScale() && (c = !0)
            } else {
                c = !0
            }
            return c ? (this.timescale = this._getTimeScale(), this.timeaxis.positionTicks(this.timescale, this.options.optimal_tick_width), this._positionMarkers(), this._assignRowsToMarkers(), this._positionGroups(), this.has_eras && this._positionEras(), this._updateDisplay()) : this._drawTimeline(!0), c
        },
        _initLayout: function() {
            this._el.attribution = TL.Dom.create("div", "tl-attribution", this._el.container), this._el.line = TL.Dom.create("div", "tl-timenav-line", this._el.container), this._el.slider = TL.Dom.create("div", "tl-timenav-slider", this._el.container), this._el.slider_background = TL.Dom.create("div", "tl-timenav-slider-background", this._el.slider), this._el.marker_container_mask = TL.Dom.create("div", "tl-timenav-container-mask", this._el.slider), this._el.marker_container = TL.Dom.create("div", "tl-timenav-container", this._el.marker_container_mask), this._el.marker_item_container = TL.Dom.create("div", "tl-timenav-item-container", this._el.marker_container), this._el.timeaxis = TL.Dom.create("div", "tl-timeaxis", this._el.slider), this._el.timeaxis_background = TL.Dom.create("div", "tl-timeaxis-background", this._el.container), this._el.attribution.innerHTML = "<a href='http://timeline.knightlab.com' target='_blank'><span class='tl-knightlab-logo'></span>Timeline JS</a>", this.timeaxis = new TL.TimeAxis(this._el.timeaxis, this.options), this._swipable = new TL.Swipable(this._el.slider_background, this._el.slider, {
                enable: {
                    x: !0,
                    y: !1
                },
                constraint: {
                    top: !1,
                    bottom: !1,
                    left: this.options.width / 2,
                    right: !1
                },
                snap: !1
            }), this._swipable.enable()
        },
        _initEvents: function() {
            this._swipable.on("dragmove", this._onDragMove, this), TL.DomEvent.addListener(this._el.container, "mousewheel", this._onMouseScroll, this), TL.DomEvent.addListener(this._el.container, "DOMMouseScroll", this._onMouseScroll, this)
        },
        _initData: function() {
            this._createMarkers(this.config.events), this.config.eras && (this.has_eras = !0, this._createEras(this.config.eras)), this._drawTimeline()
        }
    }), TL.TimeMarker = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins],
        _el: {},
        initialize: function(a, b) {
            this._el = {
                container: {},
                content_container: {},
                media_container: {},
                timespan: {},
                line_left: {},
                line_right: {},
                content: {},
                text: {},
                media: {}
            }, this._text = {}, this._state = {
                loaded: !1
            }, this.data = {
                unique_id: "",
                background: null,
                date: {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0,
                    thumbnail: "",
                    format: ""
                },
                text: {
                    headline: "",
                    text: ""
                },
                media: null
            }, this.options = {
                duration: 1000,
                ease: TL.Ease.easeInSpline,
                width: 600,
                height: 600,
                marker_width_min: 100
            }, this.active = !1, this.animator = {}, this.has_end_date = !1, TL.Util.mergeData(this.options, b), TL.Util.mergeData(this.data, a), this._initLayout(), this._initEvents()
        },
        show: function() {},
        hide: function() {},
        setActive: function(a) {
            this.active = a, this._el.container.className = this.active && this.has_end_date ? "tl-timemarker tl-timemarker-with-end tl-timemarker-active" : this.active ? "tl-timemarker tl-timemarker-active" : this.has_end_date ? "tl-timemarker tl-timemarker-with-end" : "tl-timemarker"
        },
        addTo: function(a) {
            a.appendChild(this._el.container)
        },
        removeFrom: function(a) {
            a.removeChild(this._el.container)
        },
        updateDisplay: function(a, b) {
            this._updateDisplay(a, b)
        },
        loadMedia: function() {
            this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0)
        },
        stopMedia: function() {
            this._media && this._state.loaded && this._media.stopMedia()
        },
        getLeft: function() {
            return this._el.container.style.left.slice(0, -2)
        },
        getTime: function() {
            return this.data.start_date.getTime()
        },
        getEndTime: function() {
            return this.data.end_date ? this.data.end_date.getTime() : !1
        },
        setHeight: function(b) {
            var c = 12,
                a = 1;
            this._el.content_container.style.height = b + "px", this._el.timespan_content.style.height = b + "px", this._el.content.className = 30 >= b ? "tl-timemarker-content tl-timemarker-content-small" : "tl-timemarker-content", 56 >= b ? TL.DomUtil.addClass(this._el.content_container, "tl-timemarker-content-container-small") : TL.DomUtil.removeClass(this._el.content_container, "tl-timemarker-content-container-small"), TL.Browser.webkit ? (a = Math.floor(b / (c + 2)), 1 > a && (a = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = a) : (a = b / c, this._text.className = a > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = a * c + "px")
        },
        setWidth: function(a) {
            this.data.end_date && (this._el.container.style.width = a + "px", a > this.options.marker_width_min ? (this._el.content_container.style.width = a + "px", this._el.content_container.className = "tl-timemarker-content-container tl-timemarker-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timemarker-content-container"))
        },
        setClass: function(a) {
            this._el.container.className = a
        },
        setRowPosition: function(a, b) {
            this.setPosition({
                top: a
            }), this._el.timespan.style.height = b + "px"
        },
        _onMarkerClick: function() {
            this.fire("markerclick", {
                unique_id: this.data.unique_id
            })
        },
        _initLayout: function() {
            if (this._el.container = TL.Dom.create("div", "tl-timemarker"), this.data.unique_id && (this._el.container.id = this.data.unique_id + "-marker"), this.data.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timemarker tl-timemarker-with-end"), this._el.timespan = TL.Dom.create("div", "tl-timemarker-timespan", this._el.container), this._el.timespan_content = TL.Dom.create("div", "tl-timemarker-timespan-content", this._el.timespan), this._el.content_container = TL.Dom.create("div", "tl-timemarker-content-container", this._el.container), this._el.content = TL.Dom.create("div", "tl-timemarker-content", this._el.content_container), this._el.line_left = TL.Dom.create("div", "tl-timemarker-line-left", this._el.timespan), this._el.line_right = TL.Dom.create("div", "tl-timemarker-line-right", this._el.timespan), this.data.media) {
                this._el.media_container = TL.Dom.create("div", "tl-timemarker-media-container", this._el.content);
                var b = {
                        url: this.data.media.thumbnail
                    },
                    c = this.data.media.thumbnail ? TL.MediaType(b, !0) : null;
                if (c) {
                    var a = new c.cls(b);
                    a.on("loaded", function() {
                        this._el.media = TL.Dom.create("img", "tl-timemarker-media", this._el.media_container), this._el.media.src = a.getImageURL()
                    }.bind(this)), a.loadMedia()
                } else {
                    var d = TL.MediaType(this.data.media).type;
                    this._el.media = TL.Dom.create("span", "tl-icon-" + d, this._el.media_container)
                }
            }
            this._el.text = TL.Dom.create("div", "tl-timemarker-text", this._el.content), this._text = TL.Dom.create("h2", "tl-headline", this._el.text), this.data.text.headline && "" != this.data.text.headline ? this._text.innerHTML = TL.Util.unlinkify(this.data.text.headline) : this.data.text.text && "" != this.data.text.text ? this._text.innerHTML = TL.Util.unlinkify(this.data.text.text) : this.data.media && this.data.media.caption && "" != this.data.media.caption && (this._text.innerHTML = TL.Util.unlinkify(this.data.media.caption)), this.onLoaded()
        },
        _initEvents: function() {
            TL.DomEvent.addListener(this._el.container, "click", this._onMarkerClick, this)
        },
        _updateDisplay: function(a, b) {
            a && (this.options.width = a), b && (this.options.height = b)
        }
    }), TL.TimeEra = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins],
        _el: {},
        initialize: function(a, b) {
            this._el = {
                container: {},
                background: {},
                content_container: {},
                content: {},
                text: {}
            }, this._text = {}, this._state = {
                loaded: !1
            }, this.data = {
                unique_id: "",
                date: {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0,
                    thumbnail: "",
                    format: ""
                },
                text: {
                    headline: "",
                    text: ""
                }
            }, this.options = {
                duration: 1000,
                ease: TL.Ease.easeInSpline,
                width: 600,
                height: 600,
                marker_width_min: 100
            }, this.active = !1, this.animator = {}, this.has_end_date = !1, TL.Util.mergeData(this.options, b), TL.Util.mergeData(this.data, a), this._initLayout(), this._initEvents()
        },
        show: function() {},
        hide: function() {},
        setActive: function() {},
        addTo: function(a) {
            a.appendChild(this._el.container)
        },
        removeFrom: function(a) {
            a.removeChild(this._el.container)
        },
        updateDisplay: function(a, b) {
            this._updateDisplay(a, b)
        },
        getLeft: function() {
            return this._el.container.style.left.slice(0, -2)
        },
        getTime: function() {
            return this.data.start_date.getTime()
        },
        getEndTime: function() {
            return this.data.end_date ? this.data.end_date.getTime() : !1
        },
        setHeight: function(b) {
            var c = 12,
                a = 1;
            this._el.content_container.style.height = b + "px", this._el.content.className = "tl-timeera-content", TL.Browser.webkit ? (a = Math.floor(b / (c + 2)), 1 > a && (a = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = a) : (a = b / c, this._text.className = a > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = a * c + "px")
        },
        setWidth: function(a) {
            this.data.end_date && (this._el.container.style.width = a + "px", a > this.options.marker_width_min ? (this._el.content_container.style.width = a + "px", this._el.content_container.className = "tl-timeera-content-container tl-timeera-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timeera-content-container"))
        },
        setClass: function(a) {
            this._el.container.className = a
        },
        setRowPosition: function(a, b) {
            this.setPosition({
                top: a
            })
        },
        setColor: function(a) {
            this._el.container.className = "tl-timeera tl-timeera-color" + a
        },
        _initLayout: function() {
            this._el.container = TL.Dom.create("div", "tl-timeera"), this.data.unique_id && (this._el.container.id = this.data.unique_id + "-era"), this.data.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timeera tl-timeera-with-end"), this._el.content_container = TL.Dom.create("div", "tl-timeera-content-container", this._el.container), this._el.background = TL.Dom.create("div", "tl-timeera-background", this._el.content_container), this._el.content = TL.Dom.create("div", "tl-timeera-content", this._el.content_container), this._el.text = TL.Dom.create("div", "tl-timeera-text", this._el.content), this._text = TL.Dom.create("h2", "tl-headline", this._el.text), this.data.text.headline && "" != this.data.text.headline && (this._text.innerHTML = TL.Util.unlinkify(this.data.text.headline)), this.onLoaded()
        },
        _initEvents: function() {},
        _updateDisplay: function(a, b) {
            a && (this.options.width = a), b && (this.options.height = b)
        }
    }), TL.TimeGroup = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins],
        _el: {},
        initialize: function(a) {
            this._el = {
                parent: {},
                container: {},
                message: {}
            }, this.options = {
                width: 600,
                height: 600
            }, this.data = {
                label: "",
                rows: 1
            }, this._el.container = TL.Dom.create("div", "tl-timegroup"), TL.Util.mergeData(this.data, a), this.animator = {}, this._initLayout(), this._initEvents()
        },
        updateDisplay: function() {},
        setRowPosition: function(a, b) {
            this.options.height = b * this.data.rows, this.setPosition({
                top: a
            }), this._el.container.style.height = this.options.height + "px"
        },
        setAlternateRowColor: function(b, c) {
            var a = "tl-timegroup";
            b && (a += " tl-timegroup-alternate"), c && (a += " tl-timegroup-hidden"), this._el.container.className = a
        },
        _onMouseClick: function() {
            this.fire("clicked", this.options)
        },
        _initLayout: function() {
            this._el.message = TL.Dom.create("div", "tl-timegroup-message", this._el.container), this._el.message.innerHTML = this.data.label
        },
        _initEvents: function() {
            TL.DomEvent.addListener(this._el.container, "click", this._onMouseClick, this)
        },
        _updateDisplay: function() {}
    }), TL.TimeScale = TL.Class.extend({
        initialize: function(b, c) {
            var a = b.events;
            this._scale = b.scale, c = TL.Util.mergeData({
                display_width: 500,
                screen_multiplier: 3,
                max_rows: null
            }, c), this._display_width = c.display_width, this._screen_multiplier = c.screen_multiplier, this._pixel_width = this._screen_multiplier * this._display_width, this._group_labels = void 0, this._positions = [], this._pixels_per_milli = 0, this._earliest = b.getEarliestDate().getTime(), this._latest = b.getLatestDate().getTime(), this._span_in_millis = this._latest - this._earliest, this._span_in_millis <= 0 && (this._span_in_millis = this._computeDefaultSpan(b)), this._average = this._span_in_millis / a.length, this._pixels_per_milli = this.getPixelWidth() / this._span_in_millis, this._axis_helper = TL.AxisHelper.getBestHelper(this), this._scaled_padding = 1 / this.getPixelsPerTick() * (this._display_width / 2), this._computePositionInfo(a, c.max_rows)
        },
        _computeDefaultSpan: function(d) {
            if ("human" == d.scale) {
                for (var f = {}, c = 0; c < d.events.length; c++) {
                    var g = d.events[c].start_date.findBestFormat();
                    f[g] = f[g] ? f[g] + 1 : 1
                }
                for (var c = TL.Date.SCALES.length - 1; c >= 0; c--) {
                    if (f.hasOwnProperty(TL.Date.SCALES[c][0])) {
                        var b = TL.Date.SCALES[TL.Date.SCALES.length - 1];
                        return TL.Date.SCALES[c + 1] && (b = TL.Date.SCALES[c + 1]), b[1]
                    }
                }
                return 31536000000
            }
            return 200000
        },
        getGroupLabels: function() {
            return this._group_labels || []
        },
        getScale: function() {
            return this._scale
        },
        getNumberOfRows: function() {
            return this._number_of_rows
        },
        getPixelWidth: function() {
            return this._pixel_width
        },
        getPosition: function(a) {
            return (a - this._earliest) * this._pixels_per_milli
        },
        getPositionInfo: function(a) {
            return this._positions[a]
        },
        getPixelsPerTick: function() {
            return this._axis_helper.getPixelsPerTick(this._pixels_per_milli)
        },
        getTicks: function() {
            return {
                major: this._axis_helper.getMajorTicks(this),
                minor: this._axis_helper.getMinorTicks(this)
            }
        },
        getDateFromTime: function(a) {
            if ("human" == this._scale) {
                return new TL.Date(a)
            }
            if ("cosmological" == this._scale) {
                return new TL.BigDate(new TL.BigYear(a))
            }
            throw new TL.Error("time_scale_scale_err", this._scale)
        },
        getMajorScale: function() {
            return this._axis_helper.major.name
        },
        getMinorScale: function() {
            return this._axis_helper.minor.name
        },
        _assessGroups: function(b) {
            for (var c = [], a = !1, d = 0; d < b.length; d++) {
                b[d].group && (c.indexOf(b[d].group) < 0 ? c.push(b[d].group) : a = !0)
            }
            return c.length && a && c.push(""), c
        },
        _computeRowInfo: function(q, m) {
            for (var g = [], d = 0, p = 0; p < q.length; p++) {
                var u = q[p],
                    c = [];
                delete u.row;
                for (var b = 0; b < g.length; b++) {
                    if (c.push(g[b].end - u.start), c[b] <= 0) {
                        u.row = b, g[b] = u;
                        break
                    }
                }
                if ("undefined" == typeof u.row) {
                    if (null === m) {
                        u.row = g.length, g.push(u)
                    } else {
                        if (m > 0) {
                            u.row = g.length, g.push(u), m--
                        } else {
                            var f = Math.min.apply(null, c),
                                j = c.indexOf(f);
                            u.row = j, u.end > g[j].end && (g[j] = u), d++
                        }
                    }
                }
            }
            return {
                n_rows: g.length,
                n_overlaps: d
            }
        },
        _computePositionInfo: function(E, y, w) {
            w = w || 100;
            for (var j = [], B = !1, F = 0; F < E.length; F++) {
                var g = {
                    start: this.getPosition(E[F].start_date.getTime())
                };
                if (this._positions.push(g), "undefined" != typeof E[F].end_date) {
                    var b = this.getPosition(E[F].end_date.getTime());
                    g.width = b - g.start, g.end = g.width > w ? g.start + g.width : g.start + w
                } else {
                    g.width = w, g.end = g.start + w
                }
                E[F].group ? j.indexOf(E[F].group) < 0 && j.push(E[F].group) : B = !0
            }
            if (j.length) {
                B && j.push("");
                for (var v = [], F = 0; F < j.length; F++) {
                    v[F] = {
                        label: j[F],
                        idx: F,
                        positions: [],
                        n_rows: 1,
                        n_overlaps: 0
                    }
                }
                for (var F = 0; F < this._positions.length; F++) {
                    var g = this._positions[F];
                    g.group = j.indexOf(E[F].group || ""), g.row = 0;
                    for (var x = v[g.group], z = x.positions.length - 1; z >= 0; z--) {
                        x.positions[z].end > g.start && x.n_overlaps++
                    }
                    x.positions.push(g)
                }
                for (var A = j.length;;) {
                    var D = Math.max(0, y - A);
                    if (!D) {
                        break
                    }
                    if (v.sort(function(a, c) {
                            return a.n_overlaps > c.n_overlaps ? -1 : a.n_overlaps < c.n_overlaps ? 1 : a.idx - c.idx
                        }), !v[0].n_overlaps) {
                        break
                    }
                    for (var A = 0, F = 0; F < v.length; F++) {
                        var x = v[F];
                        if (x.n_overlaps && D) {
                            var q = this._computeRowInfo(x.positions, x.n_rows + 1);
                            x.n_rows = q.n_rows, x.n_overlaps = q.n_overlaps, D--
                        }
                        A += x.n_rows
                    }
                }
                this._number_of_rows = A, this._group_labels = [], v.sort(function(a, c) {
                    return a.idx - c.idx
                });
                for (var F = 0, C = 0; F < v.length; F++) {
                    this._group_labels.push({
                        label: v[F].label,
                        rows: v[F].n_rows
                    });
                    for (var z = 0; z < v[F].positions.length; z++) {
                        var g = v[F].positions[z];
                        g.row += C
                    }
                    C += v[F].n_rows
                }
            } else {
                var f = this._computeRowInfo(this._positions, y);
                this._number_of_rows = f.n_rows
            }
        }
    }), TL.TimeAxis = TL.Class.extend({
        includes: [TL.Events, TL.DomMixins, TL.I18NMixins],
        _el: {},
        initialize: function(a, b) {
            this._el = {
                container: {},
                content_container: {},
                major: {},
                minor: {}
            }, this._text = {}, this._state = {
                loaded: !1
            }, this.data = {}, this.options = {
                duration: 1000,
                ease: TL.Ease.easeInSpline,
                width: 600,
                height: 600
            }, this.active = !1, this.animator = {}, this.axis_helper = {}, this.minor_ticks = [], this.major_ticks = [], this.dateformat_lookup = {
                millisecond: "time_milliseconds",
                second: "time_short",
                minute: "time_no_seconds_short",
                hour: "time_no_minutes_short",
                day: "full_short",
                month: "month_short",
                year: "year",
                decade: "year",
                century: "year",
                millennium: "year",
                age: "compact",
                epoch: "compact",
                era: "compact",
                eon: "compact",
                eon2: "compact"
            }, this._el.container = "object" == typeof a ? a : TL.Dom.get(a), TL.Util.mergeData(this.options, b), this._initLayout(), this._initEvents()
        },
        show: function() {},
        hide: function() {},
        addTo: function(a) {
            a.appendChild(this._el.container)
        },
        removeFrom: function(a) {
            a.removeChild(this._el.container)
        },
        updateDisplay: function(a, b) {
            this._updateDisplay(a, b)
        },
        getLeft: function() {
            return this._el.container.style.left.slice(0, -2)
        },
        drawTicks: function(b, c) {
            var a = b.getTicks();
            ({
                minor: {
                    el: this._el.minor,
                    dateformat: this.dateformat_lookup[a.minor.name],
                    ts_ticks: a.minor.ticks,
                    tick_elements: this.minor_ticks
                },
                major: {
                    el: this._el.major,
                    dateformat: this.dateformat_lookup[a.major.name],
                    ts_ticks: a.major.ticks,
                    tick_elements: this.major_ticks
                }
            });
            this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor", this._el.major.style.opacity = 0, this._el.minor.style.opacity = 0, this.major_ticks = this._createTickElements(a.major.ticks, this._el.major, this.dateformat_lookup[a.major.name]), this.minor_ticks = this._createTickElements(a.minor.ticks, this._el.minor, this.dateformat_lookup[a.minor.name], a.major.ticks), this.positionTicks(b, c, !0), this._el.major.className = "tl-timeaxis-major tl-animate-opacity tl-timeaxis-animate-opacity", this._el.minor.className = "tl-timeaxis-minor tl-animate-opacity tl-timeaxis-animate-opacity", this._el.major.style.opacity = 1, this._el.minor.style.opacity = 1
        },
        _createTickElements: function(v, p, j, f) {
            p.innerHTML = "";
            var u = {},
                w = new Date(-1, 13, -30);
            if (u[w.getTime()] = !0, f) {
                for (var c = 0; c < f.length; c++) {
                    u[f[c].getTime()] = !0
                }
            }
            for (var b = [], c = 0; c < v.length; c++) {
                var g = v[c];
                if (!(g.getTime() in u)) {
                    var m = TL.Dom.create("div", "tl-timeaxis-tick", p),
                        q = TL.Dom.create("span", "tl-timeaxis-tick-text tl-animate-opacity", m);
                    q.innerHTML = g.getDisplayDate(this.getLanguage(), j), b.push({
                        tick: m,
                        tick_text: q,
                        display_date: g.getDisplayDate(this.getLanguage(), j),
                        date: g
                    })
                }
            }
            return b
        },
        positionTicks: function(b, c, a) {
            a ? (this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor") : (this._el.major.className = "tl-timeaxis-major tl-timeaxis-animate", this._el.minor.className = "tl-timeaxis-minor tl-timeaxis-animate"), this._positionTickArray(this.major_ticks, b, c), this._positionTickArray(this.minor_ticks, b, c)
        },
        _positionTickArray: function(d, h, c) {
            if (d[1] && d[0]) {
                var l = h.getPosition(d[1].date.getMillisecond()) - h.getPosition(d[0].date.getMillisecond()),
                    b = 1;
                c > l && (b = Math.round(c / h.getPixelsPerTick()));
                for (var f = 1, j = 0; j < d.length; j++) {
                    var g = d[j];
                    g.tick.style.left = h.getPosition(g.date.getMillisecond()) + "px", g.tick_text.innerHTML = g.display_date, b > 1 ? f >= b ? (f = 1, g.tick_text.style.opacity = 1, g.tick.className = "tl-timeaxis-tick") : (f++, g.tick_text.style.opacity = 0, g.tick.className = "tl-timeaxis-tick tl-timeaxis-tick-hidden") : (g.tick_text.style.opacity = 1, g.tick.className = "tl-timeaxis-tick")
                }
            }
        },
        _initLayout: function() {
            this._el.content_container = TL.Dom.create("div", "tl-timeaxis-content-container", this._el.container), this._el.major = TL.Dom.create("div", "tl-timeaxis-major", this._el.content_container), this._el.minor = TL.Dom.create("div", "tl-timeaxis-minor", this._el.content_container), this.onLoaded()
        },
        _initEvents: function() {},
        _updateDisplay: function(a, b) {
            a && (this.options.width = a), b && (this.options.height = b)
        }
    }), TL.AxisHelper = TL.Class.extend({
        initialize: function(a) {
            if (!a) {
                throw new TL.Error("axis_helper_no_options_err")
            }
            this.scale = a.scale, this.minor = a.minor, this.major = a.major
        },
        getPixelsPerTick: function(a) {
            return a * this.minor.factor
        },
        getMajorTicks: function(a) {
            return this._getTicks(a, this.major)
        },
        getMinorTicks: function(a) {
            return this._getTicks(a, this.minor)
        },
        _getTicks: function(d, g) {
            for (var c = d._scaled_padding * g.factor, j = d._earliest - c, b = d._latest + c, f = [], h = j; b > h; h += g.factor) {
                f.push(d.getDateFromTime(h).floor(g.name))
            }
            return {
                name: g.name,
                ticks: f
            }
        }
    }),
    function(b) {
        var c = {},
            a = function(e, h) {
                c[e] = [];
                for (var d = 0; d < h.length - 1; d++) {
                    var f = h[d],
                        g = h[d + 1];
                    c[e].push(new b({
                        scale: f[3],
                        minor: {
                            name: f[0],
                            factor: f[1]
                        },
                        major: {
                            name: g[0],
                            factor: g[1]
                        }
                    }))
                }
            };
        a("human", TL.Date.SCALES), a("cosmological", TL.BigDate.SCALES), b.HELPERS = c, b.getBestHelper = function(v, m) {
            "number" != typeof m && (m = 100);
            var g = v.getScale(),
                u = c[g];
            if (!u) {
                throw new TL.Error("axis_helper_scale_err", g)
            }
            for (var w = null, f = 0; f < u.length; f++) {
                var e = u[f],
                    j = e.getPixelsPerTick(v._pixels_per_milli);
                if (j > m) {
                    if (null == w) {
                        return e
                    }
                    var p = Math.abs(m - j),
                        q = Math.abs(m - j);
                    return q > p ? e : w
                }
                w = e
            }
            return u[u.length - 1]
        }
    }(TL.AxisHelper), TL.Timeline = TL.Class.extend({
        includes: [TL.Events, TL.I18NMixins],
        initialize: function(d, f, c) {
            var g = this;
            if (c || (c = {}), this.version = "3.2.6", this.ready = !1, this._el = {
                    container: {},
                    storyslider: {},
                    timenav: {},
                    menubar: {}
                }, this._el.container = "object" == typeof d ? d : TL.Dom.get(d), this._storyslider = {}, this._style_sheet = new TL.StyleSheet, this._timenav = {}, this._menubar = {}, this._loaded = {
                    storyslider: !1,
                    timenav: !1
                }, this.config = null, this.options = {
                    script_path: "",
                    height: this._el.container.offsetHeight,
                    width: this._el.container.offsetWidth,
                    debug: !1,
                    is_embed: !1,
                    is_full_embed: !1,
                    hash_bookmark: !1,
                    default_bg_color: {
                        r: 255,
                        g: 255,
                        b: 255
                    },
                    scale_factor: 2,
                    layout: "landscape",
                    timenav_position: "bottom",
                    optimal_tick_width: 60,
                    base_class: "tl-timeline",
                    timenav_height: null,
                    timenav_height_percentage: 25,
                    timenav_mobile_height_percentage: 40,
                    timenav_height_min: 175,
                    marker_height_min: 30,
                    marker_width_min: 100,
                    marker_padding: 5,
                    start_at_slide: 0,
                    start_at_end: !1,
                    menubar_height: 0,
                    skinny_size: 650,
                    medium_size: 800,
                    relative_date: !1,
                    use_bc: !1,
                    duration: 1000,
                    ease: TL.Ease.easeInOutQuint,
                    dragging: !0,
                    trackResize: !0,
                    map_type: "stamen:toner-lite",
                    slide_padding_lr: 100,
                    slide_default_fade: "0%",
                    zoom_sequence: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
                    language: "en",
                    ga_property_id: null,
                    track_events: ["back_to_start", "nav_next", "nav_previous", "zoom_in", "zoom_out"]
                }, this.animator_timenav = null, this.animator_storyslider = null, this.animator_menubar = null, this.message = new TL.Message({}, {
                    message_class: "tl-message-full"
                }, this._el.container), "string" == typeof c.default_bg_color) {
                var b = TL.Util.hexToRgb(c.default_bg_color);
                b ? c.default_bg_color = b : (delete c.default_bg_color, trace("Invalid default background color. Ignoring."))
            }
            TL.Util.mergeData(this.options, c), window.addEventListener("resize", function() {
                g.updateDisplay()
            }), TL.debug = this.options.debug, TL.DomUtil.addClass(this._el.container, "tl-timeline"), this.options.is_embed && TL.DomUtil.addClass(this._el.container, "tl-timeline-embed"), this.options.is_full_embed && TL.DomUtil.addClass(this._el.container, "tl-timeline-full-embed"), document.addEventListener("keydown", function(l) {
                var p = l.key,
                    j = g._getSlideIndex(g.current_id),
                    h = g.config.events.length - 1,
                    m = g.config.title ? h + 1 : h,
                    q = 0;
                "ArrowLeft" == p ? j != q && g.goToPrev() : "ArrowRight" == p && j != m && g.goToNext()
            }), this.options.relative_date ? "undefined" != typeof moment ? g._loadLanguage(f) : TL.Load.js(this.options.script_path + "/library/moment.js", function() {
                g._loadLanguage(f), trace("LOAD MOMENTJS")
            }) : g._loadLanguage(f)
        },
        _translateError: function(a) {
            return a.hasOwnProperty("stack") && trace(a.stack), a.message_key ? this._(a.message_key) + (a.detail ? " [" + a.detail + "]" : "") : a
        },
        _loadLanguage: function(a) {
            try {
                this.options.language = new TL.Language(this.options), this._initData(a)
            } catch (b) {
                this.showMessage(this._translateError(b))
            }
        },
        goToId: function(a) {
            this.current_id != a && (this.current_id = a, this._timenav.goToId(this.current_id), this._storyslider.goToId(this.current_id, !1, !0), this.fire("change", {
                unique_id: this.current_id
            }, this))
        },
        goTo: function(a) {
            this.goToId(this.config.title ? 0 == a ? this.config.title.unique_id : this.config.events[a - 1].unique_id : this.config.events[a].unique_id)
        },
        goToStart: function() {
            this.goTo(0)
        },
        goToEnd: function() {
            var a = this.config.events.length - 1;
            this.goTo(this.config.title ? a + 1 : a)
        },
        goToPrev: function() {
            this.goTo(this._getSlideIndex(this.current_id) - 1)
        },
        goToNext: function() {
            this.goTo(this._getSlideIndex(this.current_id) + 1)
        },
        add: function(b) {
            var c = this.config.addEvent(b),
                a = this._getEventIndex(c),
                d = this.config.events[a];
            this._storyslider.createSlide(d, this.config.title ? a + 1 : a), this._storyslider._updateDrawSlides(), this._timenav.createMarker(d, a), this._timenav._updateDrawTimeline(!1), this.fire("added", {
                unique_id: c
            })
        },
        remove: function(a) {
            if (a >= 0 && a < this.config.events.length) {
                this.config.events[a].unique_id == this.current_id && this.goTo(a < this.config.events.length - 1 ? a + 1 : a - 1);
                var b = this.config.events.splice(a, 1);
                delete this.config.event_dict[b[0].unique_id], this._storyslider.destroySlide(this.config.title ? a + 1 : a), this._storyslider._updateDrawSlides(), this._timenav.destroyMarker(a), this._timenav._updateDrawTimeline(!1), this.fire("removed", {
                    unique_id: b[0].unique_id
                })
            }
        },
        removeId: function(a) {
            this.remove(this._getEventIndex(a))
        },
        getData: function(a) {
            if (this.config.title) {
                if (0 == a) {
                    return this.config.title
                }
                if (a > 0 && a <= this.config.events.length) {
                    return this.config.events[a - 1]
                }
            } else {
                if (a >= 0 && a < this.config.events.length) {
                    return this.config.events[a]
                }
            }
            return null
        },
        getDataById: function(a) {
            return this.getData(this._getSlideIndex(a))
        },
        getSlide: function(a) {
            return a >= 0 && a < this._storyslider._slides.length ? this._storyslider._slides[a] : null
        },
        getSlideById: function(a) {
            return this.getSlide(this._getSlideIndex(a))
        },
        getCurrentSlide: function() {
            return this.getSlideById(this.current_id)
        },
        updateDisplay: function() {
            this.ready && this._updateDisplay()
        },
        _calculateTimeNavHeight: function(b, c) {
            var a = 0;
            return b ? a = b : (this.options.timenav_height_percentage || c) && (a = Math.round(c ? this.options.height / 100 * c : this.options.height / 100 * this.options.timenav_height_percentage)), this._timenav.ready && this.options.timenav_height_min < this._timenav.getMinimumHeight() && (this.options.timenav_height_min = this._timenav.getMinimumHeight()), a < this.options.timenav_height_min && (a = this.options.timenav_height_min), a -= 2 * this.options.marker_padding
        },
        _updateDisplay: function(d, g, c) {
            var h = this.options.duration,
                b = this.options.base_class,
                f = 0;
            c && (h = c), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.width <= this.options.skinny_size ? (b += " tl-skinny", this.options.layout = "portrait") : this.options.width <= this.options.medium_size ? (b += " tl-medium", this.options.layout = "landscape") : this.options.layout = "landscape", TL.Browser.touch && (this.options.layout = TL.Browser.orientation()), TL.Browser.mobile ? (b += " tl-mobile", this.options.timenav_height = this._calculateTimeNavHeight(d, this.options.timenav_mobile_height_percentage)) : this.options.timenav_height = this._calculateTimeNavHeight(d), b += "portrait" == this.options.layout ? " tl-layout-portrait" : " tl-layout-landscape", this.options.storyslider_height = this.options.height - this.options.timenav_height, f = "top" == this.options.timenav_position ? Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 19.5 : Math.round(this.options.storyslider_height + 1 + Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 17.5), g ? (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this.animator_storyslider && this.animator_storyslider.stop(), this.animator_storyslider = TL.Animate(this._el.storyslider, {
                height: this.options.storyslider_height + "px",
                duration: h / 2,
                easing: TL.Ease.easeOutStrong
            }), this.animator_menubar && this.animator_menubar.stop(), this.animator_menubar = TL.Animate(this._el.menubar, {
                top: f + "px",
                duration: h / 2,
                easing: TL.Ease.easeOutStrong
            })) : (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this._el.storyslider.style.height = this.options.storyslider_height + "px", this._el.menubar.style.top = f + "px"), this.message && this.message.updateDisplay(this.options.width, this.options.height), this._timenav.updateDisplay(this.options.width, this.options.timenav_height, g), this._storyslider.updateDisplay(this.options.width, this.options.storyslider_height, g, this.options.layout), "rtl" == this.options.language.direction && (b += " tl-rtl"), this._el.container.className = b
        },
        _updateHashBookmark: function(a) {
            var b = "#event-" + a.toString();
            "file:" != window.location.protocol && window.history.replaceState(null, "Browsing TimelineJS", b), this.fire("hash_updated", {
                unique_id: this.current_id,
                hashbookmark: "#event-" + a.toString()
            }, this)
        },
        _initData: function(a) {
            var b = this;
            if ("string" == typeof a) {
                var b = this;
                TL.ConfigFactory.makeConfig(a, function(c) {
                    b.setConfig(c)
                })
            } else {
                this.setConfig(TL.TimelineConfig == a.constructor ? a : new TL.TimelineConfig(a))
            }
        },
        setConfig: function(d) {
            if (this.config = d, this.config.validate(), this._validateOptions(), this.config.isValid()) {
                try {
                    this._onDataLoaded()
                } catch (f) {
                    this.showMessage("<strong>" + this._("error") + ":</strong> " + this._translateError(f))
                }
            } else {
                for (var c = [], g = 0, b = this.config.getErrors(); g < b.length; g++) {
                    c.push(this._translateError(b[g]))
                }
                this.showMessage("<strong>" + this._("error") + ":</strong> " + c.join("<br>"))
            }
        },
        _validateOptions: function() {
            for (var b = ["timenav_height", "timenav_height_min", "marker_height_min", "marker_width_min", "marker_padding", "start_at_slide", "slide_padding_lr"], c = 0; c < b.length; c++) {
                var a = b[c],
                    d = this.options[a];
                valid = !0, "number" == typeof d ? valid = d == parseInt(d) : "string" == typeof d && (valid = d.match(/^\s*(\-?\d+)?\s*$/)), valid || this.config.logError({
                    message_key: "invalid_integer_option",
                    detail: a
                })
            }
        },
        _initLayout: function() {
            this.message.removeFrom(this._el.container), this._el.container.innerHTML = "", "top" == this.options.timenav_position ? (this._el.timenav = TL.Dom.create("div", "tl-timenav", this._el.container), this._el.storyslider = TL.Dom.create("div", "tl-storyslider", this._el.container)) : (this._el.storyslider = TL.Dom.create("div", "tl-storyslider", this._el.container), this._el.timenav = TL.Dom.create("div", "tl-timenav", this._el.container)), this._el.menubar = TL.Dom.create("div", "tl-menubar", this._el.container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.timenav_height = this._calculateTimeNavHeight(this.options.timenav_height), this._timenav = new TL.TimeNav(this._el.timenav, this.config, this.options), this._timenav.on("loaded", this._onTimeNavLoaded, this), this._timenav.on("update_timenav_min", this._updateTimeNavHeightMin, this), this._timenav.options.height = this.options.timenav_height, this._timenav.init(), this.options.initial_zoom && this.setZoom(this.options.initial_zoom), this._storyslider = new TL.StorySlider(this._el.storyslider, this.config, this.options), this._storyslider.on("loaded", this._onStorySliderLoaded, this), this._storyslider.init(), this._menubar = new TL.MenuBar(this._el.menubar, this._el.container, this.options), this.options.storyslider_height = "portrait" == this.options.layout ? this.options.height - this.options.timenav_height - 1 : this.options.height - 1, this._updateDisplay(this._timenav.options.height, !0, 2000)
        },
        _initEvents: function() {
            this._timenav.on("change", this._onTimeNavChange, this), this._timenav.on("zoomtoggle", this._onZoomToggle, this), this._storyslider.on("change", this._onSlideChange, this), this._storyslider.on("colorchange", this._onColorChange, this), this._storyslider.on("nav_next", this._onStorySliderNext, this), this._storyslider.on("nav_previous", this._onStorySliderPrevious, this), this._menubar.on("zoom_in", this._onZoomIn, this), this._menubar.on("zoom_out", this._onZoomOut, this), this._menubar.on("back_to_start", this._onBackToStart, this)
        },
        _initGoogleAnalytics: function() {
            ! function(d, g, c, j, b, f, h) {
                d.GoogleAnalyticsObject = b, d[b] = d[b] || function() {
                    (d[b].q = d[b].q || []).push(arguments)
                }, d[b].l = 1 * new Date, f = g.createElement(c), h = g.getElementsByTagName(c)[0], f.async = 1, f.src = j, h.parentNode.insertBefore(f, h)
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", this.options.ga_property_id, "auto"), ga("set", "anonymizeIp", !0)
        },
        _initAnalytics: function() {
            if (null !== this.options.ga_property_id) {
                this._initGoogleAnalytics(), ga("send", "pageview");
                var a = this.options.track_events;
                for (i = 0; i < a.length; i++) {
                    var b = a[i];
                    this.addEventListener(b, function(c) {
                        ga("send", "event", c.type, "clicked")
                    })
                }
            }
        },
        _onZoomToggle: function(a) {
            "in" == a.zoom ? this._menubar.toogleZoomIn(a.show) : "out" == a.zoom && this._menubar.toogleZoomOut(a.show)
        },
        _getEventIndex: function(a) {
            for (var b = 0; b < this.config.events.length; b++) {
                if (a == this.config.events[b].unique_id) {
                    return b
                }
            }
            return -1
        },
        _getSlideIndex: function(a) {
            if (this.config.title && this.config.title.unique_id == a) {
                return 0
            }
            for (var b = 0; b < this.config.events.length; b++) {
                if (a == this.config.events[b].unique_id) {
                    return this.config.title ? b + 1 : b
                }
            }
            return -1
        },
        _onDataLoaded: function() {
            this.fire("dataloaded"), this._initLayout(), this._initEvents(), this._initAnalytics(), this.message && this.message.hide(), this.ready = !0
        },
        showMessage: function(a) {
            this.message ? this.message.updateMessage(a) : (trace("No message display available."), trace(a))
        },
        _onColorChange: function(a) {
            this.fire("color_change", {
                unique_id: this.current_id
            }, this), a.color || a.image
        },
        _onSlideChange: function(a) {
            this.current_id != a.unique_id && (this.current_id = a.unique_id, this._timenav.goToId(this.current_id), this._onChange(a))
        },
        _onTimeNavChange: function(a) {
            this.current_id != a.unique_id && (this.current_id = a.unique_id, this._storyslider.goToId(this.current_id), this._onChange(a))
        },
        _onChange: function() {
            this.fire("change", {
                unique_id: this.current_id
            }, this), this.options.hash_bookmark && this.current_id && this._updateHashBookmark(this.current_id)
        },
        _onBackToStart: function() {
            this._storyslider.goTo(0), this.fire("back_to_start", {
                unique_id: this.current_id
            }, this)
        },
        zoomIn: function() {
            this._timenav.zoomIn()
        },
        zoomOut: function() {
            this._timenav.zoomOut()
        },
        setZoom: function(a) {
            this._timenav.setZoom(a)
        },
        _onZoomIn: function() {
            this._timenav.zoomIn(), this.fire("zoom_in", {
                zoom_level: this._timenav.options.scale_factor
            }, this)
        },
        _onZoomOut: function() {
            this._timenav.zoomOut(), this.fire("zoom_out", {
                zoom_level: this._timenav.options.scale_factor
            }, this)
        },
        _onTimeNavLoaded: function() {
            this._loaded.timenav = !0, this._onLoaded()
        },
        _onStorySliderLoaded: function() {
            this._loaded.storyslider = !0, this._onLoaded()
        },
        _onStorySliderNext: function(a) {
            this.fire("nav_next", a)
        },
        _onStorySliderPrevious: function(a) {
            this.fire("nav_previous", a)
        },
        _onLoaded: function() {
            this._loaded.storyslider && this._loaded.timenav && (this.fire("loaded", this.config), this.options.hash_bookmark && "" != window.location.hash ? this.goToId(window.location.hash.replace("#event-", "")) : (TL.Util.isTrue(this.options.start_at_end) || this.options.start_at_slide > this.config.events.length ? this.goToEnd() : this.goTo(this.options.start_at_slide), this.options.hash_bookmark && this._updateHashBookmark(this.current_id)))
        }
    }), TL.Timeline.source_path = function() {
        var a = document.getElementsByTagName("script"),
            b = a[a.length - 1].src;
        return b.substr(0, b.lastIndexOf("/"))
    }();
var defaultvalue = "wordsent";
var defaultsurvive = 360000000;
var readid = null;
var restorehtml = null;
var newhtml = "";
var oldwordhl = null;
var oldsenthl = null;
var playeropen = false;

function rshlsetContent(a) {
    newhtml += a
}

function rshlsetId(a) {
    readid = a
}

function rshlinit() {
    var a = null;
    if (readid != null) {
        a = document.getElementById(readid)
    }
    if (a != null) {
        restorehtml = a.innerHTML;
        a.innerHTML = newhtml;
        newhtml = ""
    }
}

function rshltidy() {
    var a = null;
    if (readid != null) {
        a = document.getElementById(readid)
    }
    if (a != null && restorehtml != null) {
        a.innerHTML = restorehtml;
        restorehtml = null;
        readid = null
    }
}

function rshlexit() {
    closepage("xpl")
}

function rshlsync(a, c) {
    var b = document.getElementById("sync" + c);
    if (b && b.className == "sync_sent") {
        if (oldsenthl) {
            oldsenthl.className = "sync_sent"
        }
        oldsenthl = b;
        b.className = "sync_sent_highlighted"
    } else {
        if (b && b.className == "sync_word") {
            if (oldwordhl) {
                oldwordhl.className = "sync_word"
            }
            oldwordhl = b;
            b.className = "sync_word_highlighted"
        }
    }
}

function readpage(a, b, d) {
    if (playeropen == true) {
        $("#" + d).removeClass("active")
    } else {
        $("#" + d).addClass("active");
        playeropen = true;
        rshltidy();
        var c = loadSettings("ReadSpeakerHL");
        if (c == "") {
            c = defaultvalue
        }
        var e = "mp3";
        if (c != "none") {
            e = "flv"
        }
        origrscall = a;
        a = a + "&audioformat=" + e + "&sync=" + c;
        newrscall = escape(a);
        tmp_array = a.match(/lang=[^&]+/gi);
        rs_lang = tmp_array[0].replace("lang=", "");
        $labelClose = "Tanca";
        $labelDownload = "Descarrega't mp3";
        $labelPausePlay = "Pausa/Reproduir";
        $labelStop = "Aturar";
        $labelVolume = "Volum";
        $closeButton = '<button aria-label="Tanca" class="btn icon icon--close" onclick="closepage(\'' + b + "', '" + d + '\'); return false" title="' + $labelClose + '"></button>';
        $downloadButton = '<a href="' + origrscall + '&save=1" class="btn icon icon--download download-mp3" target="rs" title="' + $labelDownload + '"></a>';
        $playerUrl = "/portal/system/modules/edu.uoc.web.presentations/resources/swf/rplayerpro_v33_UOC_v2.swf?" + e + "=" + newrscall + "&autoplay=1&rskin=bump&rcontrol=mini&ricon=0&rprogress=0&c11=0xE8E7E7&text_play=" + $labelPausePlay + "&text_pause=" + $labelPausePlay + "&text_stop=" + $labelStop + "&text_vol=" + $labelVolume;
        $player = '<object id="rs-player" class="rs-player" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0">';
        $player += '<param name="movie" 				value="' + $playerUrl + '"  />';
        $player += '<param name="quality" 				value="high" 				/>';
        $player += '<param name="autostart" 			value="true" 				/>';
        $player += '<param name="allowScriptAccess" 	value="always" 				/>';
        $player += '<param name="bgcolor" 				value="#ffffff" 			/>';
        $player += '<param name="loop" 				value="false" 				/>';
        $player += '<embed src="' + $playerUrl + '"';
        $player += " allowScriptAccess='always' quality='high' autostart='true' bgcolor='#ffffff' loop='false' type='application/x-shockwave-flash'";
        $player += " pluginspage='//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' swliveconnect='true'></embed>";
        $player += "</object>";
        $readSpeakerHtml = '<div id="readspeaker" class="readspeaker"><div id="rs-controls" class="rs-controls">' + $closeButton + $player + $downloadButton + '</div><span id="rs-dropdown" class="rs-dropdown"></span></div>';
        $("#" + b).html($readSpeakerHtml);
        showDropdown(a, b, d)
    }
}

function closepage(a, b) {
    var c = $("#" + a);
    if (c.length > 0) {
        c.html("");
        $("#" + b).removeClass("active");
        playeropen = false
    }
    rshltidy()
}

function saveSettings(name, content, lifetime) {
    lifetime = parseInt(eval(lifetime));
    if (lifetime + "" == "NaN") {
        tmpdate = ""
    } else {
        var thedate = new Date();
        thedate.setTime(thedate.getTime() + lifetime);
        thedate = thedate.toGMTString();
        tmpdate = "; expires=" + thedate
    }
    document.cookie = name + "=" + escape(content) + tmpdate
}

function loadSettings(a) {
    ckarr = document.cookie;
    cks = ckarr.split("; ");
    for (i = 0; i < cks.length; i++) {
        cknameval = cks[i].split("=");
        if (cknameval[0] == a) {
            return unescape(cknameval[1])
        }
    }
    return ""
}

function setstyle(a) {
    saveSettings("ReadSpeakerHL", a, defaultsurvive);
    $("#rs-dropdown").html("")
}

function showDropdown(a, b, c) {
    $dropdown = $("#rs-dropdown");
    if ($dropdown.length == 0) {
        return false
    }
    var d = loadSettings("ReadSpeakerHL");
    if (d == "") {
        d = defaultvalue
    }
    $defaultOnclick = "closepage('" + b + "', '" + c + "'); readpage('" + a + "' ,'" + b + "', '" + c + "'); return false;";
    thestring = "";
    thestring += "<li class='";
    if (d != "wordsent") {
        thestring += "not"
    }
    thestring += "act'";
    thestring += '><a href="#" onclick="setstyle(\'wordsent\');' + $defaultOnclick + '"';
    if (d == "wordsent") {
        thestring += "class='actlink'"
    }
    thestring += ">Paraula i frase</a></li>";
    thestring += "<li class='";
    if (d != "sent") {
        thestring += "not"
    }
    thestring += "act'";
    thestring += '><a href="#" onclick="setstyle(\'sent\');' + $defaultOnclick + '"';
    if (d == "sent") {
        thestring += "class='actlink'"
    }
    thestring += ">Nom&eacute;s frase</a></li>";
    thestring += "<li class='";
    if (d != "word") {
        thestring += "not"
    }
    thestring += "act'";
    thestring += '><a href="#" onclick="setstyle(\'word\');' + $defaultOnclick + '"';
    if (d == "word") {
        thestring += "class='actlink'"
    }
    thestring += ">Nom&eacute;s paraula</a></li>";
    thestring += "<li class='";
    if (d != "none") {
        thestring += "not"
    }
    thestring += "act'";
    thestring += '><a href="#" onclick="setstyle(\'none\');' + $defaultOnclick + '"';
    if (d == "none") {
        thestring += "class='actlink'"
    }
    thestring += ">Sense resaltar</a></li>";
    $dropdown.html('<div id="rspopup"><ul>' + thestring + "</ul></div>")
}
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
;
! function(d) {
    var c = navigator.userAgent;
    d.HTMLPictureElement && /ecko/.test(c) && c.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var a, q = document.createElement("source"),
            p = function(g) {
                var f, r, h = g.parentNode;
                "PICTURE" === h.nodeName.toUpperCase() ? (f = q.cloneNode(), h.insertBefore(f, h.firstElementChild), setTimeout(function() {
                    h.removeChild(f)
                })) : (!g._pfLastSize || g.offsetWidth > g._pfLastSize) && (g._pfLastSize = g.offsetWidth, r = g.sizes, g.sizes += ",100vw", setTimeout(function() {
                    g.sizes = r
                }))
            },
            o = function() {
                var f, e = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (f = 0; f < e.length; f++) {
                    p(e[f])
                }
            },
            m = function() {
                clearTimeout(a), a = setTimeout(o, 99)
            },
            l = d.matchMedia && matchMedia("(orientation: landscape)"),
            j = function() {
                m(), l && l.addListener && l.addListener(m)
            };
        return q.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? j() : document.addEventListener("DOMContentLoaded", j), m
    }())
}(window),
function(a3, a2, a1) {
    function a0(b) {
        return " " === b || "	" === b || "\n" === b || "\f" === b || "\r" === b
    }

    function aZ(a, f) {
        var e = new a3.Image;
        return e.onerror = function() {
            aB[a] = !1, a4()
        }, e.onload = function() {
            aB[a] = 1 === e.width, a4()
        }, e.src = f, "pending"
    }

    function aY() {
        ao = !1, al = a3.devicePixelRatio, an = {}, am = {}, aL.DPR = al || 1, ak.width = Math.max(a3.innerWidth || 0, aE.clientWidth), ak.height = Math.max(a3.innerHeight || 0, aE.clientHeight), ak.vw = ak.width / 100, ak.vh = ak.height / 100, aM = [ak.height, ak.width, al].join("-"), ak.em = aL.getEmValue(), ak.rem = ak.em
    }

    function aX(l, j, s, r) {
        var q, p, o, m;
        return "saveData" === aA.algorithm ? l > 2.7 ? m = s + 1 : (p = j - s, q = Math.pow(l - 0.6, 1.5), o = p * q, r && (o += 0.1 * q), m = l + o) : m = s > 1 ? Math.sqrt(l * j) : l, m > s
    }

    function aW(f) {
        var e, h = aL.getSet(f),
            g = !1;
        "pending" !== h && (g = aM, h && (e = aL.setRes(h), aL.applySetCandidate(e, f))), f[aL.ns].evaled = g
    }

    function aV(d, c) {
        return d.res - c.res
    }

    function aU(f, e, h) {
        var g;
        return !h && e && (h = f[aL.ns].sets, h = h && h[h.length - 1]), g = aT(e, h), g && (e = aL.makeUrl(e), f[aL.ns].curSrc = e, f[aL.ns].curCan = g, g.res || aC(g, g.set.sizes)), g
    }

    function aT(g, f) {
        var l, j, h;
        if (g && f) {
            for (h = aL.parseSet(f), g = aL.makeUrl(g), l = 0; l < h.length; l++) {
                if (g === aL.makeUrl(h[l].url)) {
                    j = h[l];
                    break
                }
            }
        }
        return j
    }

    function aS(j, h) {
        var q, p, o, m, l = j.getElementsByTagName("source");
        for (q = 0, p = l.length; p > q; q++) {
            o = l[q], o[aL.ns] = !0, m = o.getAttribute("srcset"), m && h.push({
                srcset: m,
                media: o.getAttribute("media"),
                type: o.getAttribute("type"),
                sizes: o.getAttribute("sizes")
            })
        }
    }

    function aR(z, y) {
        function x(a) {
            var f, e = a.exec(z.substring(o));
            return e ? (f = e[0], o += f.length, f) : void 0
        }

        function w() {
            var H, G, F, E, D, C, B, A, h, g = !1,
                b = {};
            for (E = 0; E < t.length; E++) {
                D = t[E], C = D[D.length - 1], B = D.substring(0, D.length - 1), A = parseInt(B, 10), h = parseFloat(B), ad.test(B) && "w" === C ? ((H || G) && (g = !0), 0 === A ? g = !0 : H = A) : ac.test(B) && "x" === C ? ((H || G || F) && (g = !0), 0 > h ? g = !0 : G = h) : ad.test(B) && "h" === C ? ((F || G) && (g = !0), 0 === A ? g = !0 : F = A) : g = !0
            }
            g || (b.url = u, H && (b.w = H), G && (b.d = G), F && (b.h = F), F || G || H || (b.d = 1), 1 === b.d && (y.has1x = !0), b.set = y, d.push(b))
        }

        function v() {
            for (x(ah), s = "", r = "in descriptor";;) {
                if (q = z.charAt(o), "in descriptor" === r) {
                    if (a0(q)) {
                        s && (t.push(s), s = "", r = "after descriptor")
                    } else {
                        if ("," === q) {
                            return o += 1, s && t.push(s), void w()
                        }
                        if ("(" === q) {
                            s += q, r = "in parens"
                        } else {
                            if ("" === q) {
                                return s && t.push(s), void w()
                            }
                            s += q
                        }
                    }
                } else {
                    if ("in parens" === r) {
                        if (")" === q) {
                            s += q, r = "in descriptor"
                        } else {
                            if ("" === q) {
                                return t.push(s), void w()
                            }
                            s += q
                        }
                    } else {
                        if ("after descriptor" === r) {
                            if (a0(q)) {} else {
                                if ("" === q) {
                                    return void w()
                                }
                                r = "in descriptor", o -= 1
                            }
                        }
                    }
                }
                o += 1
            }
        }
        for (var u, t, s, r, q, p = z.length, o = 0, d = [];;) {
            if (x(ag), o >= p) {
                return d
            }
            u = x(af), t = [], "," === u.slice(-1) ? (u = u.replace(ae, ""), w()) : v()
        }
    }

    function aQ(w) {
        function v(F) {
            function E() {
                B && (A.push(B), B = "")
            }

            function D() {
                A[0] && (z.push(A), A = [])
            }
            for (var C, B = "", A = [], z = [], y = 0, x = 0, l = !1;;) {
                if (C = F.charAt(x), "" === C) {
                    return E(), D(), z
                }
                if (l) {
                    if ("*" === C && "/" === F[x + 1]) {
                        l = !1, x += 2, E();
                        continue
                    }
                    x += 1
                } else {
                    if (a0(C)) {
                        if (F.charAt(x - 1) && a0(F.charAt(x - 1)) || !B) {
                            x += 1;
                            continue
                        }
                        if (0 === y) {
                            E(), x += 1;
                            continue
                        }
                        C = " "
                    } else {
                        if ("(" === C) {
                            y += 1
                        } else {
                            if (")" === C) {
                                y -= 1
                            } else {
                                if ("," === C) {
                                    E(), D(), x += 1;
                                    continue
                                }
                                if ("/" === C && "*" === F.charAt(x + 1)) {
                                    l = !0, x += 2;
                                    continue
                                }
                            }
                        }
                    }
                    B += C, x += 1
                }
            }
        }

        function u(b) {
            return m.test(b) && parseFloat(b) >= 0 ? !0 : d.test(b) ? !0 : "0" === b || "-0" === b || "+0" === b ? !0 : !1
        }
        var t, s, r, q, p, o, m = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            d = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (s = v(w), r = s.length, t = 0; r > t; t++) {
            if (q = s[t], p = q[q.length - 1], u(p)) {
                if (o = p, q.pop(), 0 === q.length) {
                    return o
                }
                if (q = q.join(" "), aL.matchesMedia(q)) {
                    return o
                }
            }
        }
        return "100vw"
    }
    a2.createElement("picture");
    var aP, aO, aN, aM, aL = {},
        aK = !1,
        aJ = function() {},
        aI = a2.createElement("img"),
        aH = aI.getAttribute,
        aG = aI.setAttribute,
        aF = aI.removeAttribute,
        aE = a2.documentElement,
        aB = {},
        aA = {
            algorithm: ""
        },
        az = "data-pfsrc",
        ay = az + "set",
        ax = navigator.userAgent,
        aw = /rident/.test(ax) || /ecko/.test(ax) && ax.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        av = "currentSrc",
        au = /\s+\+?\d+(e\d+)?w/,
        at = /(\([^)]+\))?\s*(.+)/,
        ar = a3.picturefillCFG,
        aq = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        ap = "font-size:100%!important;",
        ao = !0,
        an = {},
        am = {},
        al = a3.devicePixelRatio,
        ak = {
            px: 1,
            "in": 96
        },
        aj = a2.createElement("a"),
        ai = !1,
        ah = /^[ \t\n\r\u000c]+/,
        ag = /^[, \t\n\r\u000c]+/,
        af = /^[^ \t\n\r\u000c]+/,
        ae = /[,]+$/,
        ad = /^\d+$/,
        ac = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        ab = function(f, e, h, g) {
            f.addEventListener ? f.addEventListener(e, h, g || !1) : f.attachEvent && f.attachEvent("on" + e, h)
        },
        aD = function(d) {
            var c = {};
            return function(a) {
                return a in c || (c[a] = d(a)), c[a]
            }
        },
        a5 = function() {
            var e = /^([\d\.]+)(em|vw|px)$/,
                d = function() {
                    for (var h = arguments, g = 0, j = h[0]; ++g in h;) {
                        j = j.replace(h[g], h[++g])
                    }
                    return j
                },
                f = aD(function(b) {
                    return "return " + d((b || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(a, h) {
                var g;
                if (!(a in an)) {
                    if (an[a] = !1, h && (g = a.match(e))) {
                        an[a] = g[1] * ak[g[2]]
                    } else {
                        try {
                            an[a] = new Function("e", f(a))(ak)
                        } catch (c) {}
                    }
                }
                return an[a]
            }
        }(),
        aC = function(d, c) {
            return d.w ? (d.cWidth = aL.calcListLength(c || "100vw"), d.res = d.w / d.cWidth) : d.res = d.d, d
        },
        a4 = function(b) {
            if (aK) {
                var l, j, h, g = b || {};
                if (g.elements && 1 === g.elements.nodeType && ("IMG" === g.elements.nodeName.toUpperCase() ? g.elements = [g.elements] : (g.context = g.elements, g.elements = null)), l = g.elements || aL.qsa(g.context || a2, g.reevaluate || g.reselect ? aL.sel : aL.selShort), h = l.length) {
                    for (aL.setupRun(g), ai = !0, j = 0; h > j; j++) {
                        aL.fillImg(l[j], g)
                    }
                    aL.teardownRun(g)
                }
            }
        };
    aP = a3.console && console.warn ? function(b) {
        console.warn(b)
    } : aJ, av in aI || (av = "src"), aB["image/jpeg"] = !0, aB["image/gif"] = !0, aB["image/png"] = !0, aB["image/svg+xml"] = a2.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), aL.ns = ("pf" + (new Date).getTime()).substr(0, 9), aL.supSrcset = "srcset" in aI, aL.supSizes = "sizes" in aI, aL.supPicture = !!a3.HTMLPictureElement, aL.supSrcset && aL.supPicture && !aL.supSizes && ! function(b) {
        aI.srcset = "data:,a", b.src = "data:,a", aL.supSrcset = aI.complete === b.complete, aL.supPicture = aL.supSrcset && aL.supPicture
    }(a2.createElement("img")), aL.supSrcset && !aL.supSizes ? ! function() {
        var b = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            h = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            g = a2.createElement("img"),
            f = function() {
                var c = g.width;
                2 === c && (aL.supSizes = !0), aN = aL.supSrcset && !aL.supSizes, aK = !0, setTimeout(a4)
            };
        g.onload = f, g.onerror = f, g.setAttribute("sizes", "9px"), g.srcset = h + " 1w," + b + " 9w", g.src = h
    }() : aK = !0, aL.selShort = "picture>img,img[srcset]", aL.sel = aL.selShort, aL.cfg = aA, aL.DPR = al || 1, aL.u = ak, aL.types = aB, aL.setSize = aJ, aL.makeUrl = aD(function(b) {
        return aj.href = b, aj.href
    }), aL.qsa = function(d, c) {
        return "querySelector" in d ? d.querySelectorAll(c) : []
    }, aL.matchesMedia = function() {
        return a3.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? aL.matchesMedia = function(b) {
            return !b || matchMedia(b).matches
        } : aL.matchesMedia = aL.mMQ, aL.matchesMedia.apply(this, arguments)
    }, aL.mMQ = function(b) {
        return b ? a5(b) : !0
    }, aL.calcLength = function(d) {
        var c = a5(d, !0) || !1;
        return 0 > c && (c = !1), c
    }, aL.supportsType = function(b) {
        return b ? aB[b] : !0
    }, aL.parseSize = aD(function(d) {
        var c = (d || "").match(at);
        return {
            media: c && c[1],
            length: c && c[2]
        }
    }), aL.parseSet = function(b) {
        return b.cands || (b.cands = aR(b.srcset, b)), b.cands
    }, aL.getEmValue = function() {
        var b;
        if (!aO && (b = a2.body)) {
            var h = a2.createElement("div"),
                g = aE.style.cssText,
                f = b.style.cssText;
            h.style.cssText = aq, aE.style.cssText = ap, b.style.cssText = ap, b.appendChild(h), aO = h.offsetWidth, b.removeChild(h), aO = parseFloat(aO, 10), aE.style.cssText = g, b.style.cssText = f
        }
        return aO || 16
    }, aL.calcListLength = function(d) {
        if (!(d in am) || aA.uT) {
            var c = aL.calcLength(aQ(d));
            am[d] = c ? c : ak.width
        }
        return am[d]
    }, aL.setRes = function(f) {
        var e;
        if (f) {
            e = aL.parseSet(f);
            for (var h = 0, g = e.length; g > h; h++) {
                aC(e[h], f.sizes)
            }
        }
        return e
    }, aL.setRes.res = aC, aL.applySetCandidate = function(A, z) {
        if (A.length) {
            var y, x, w, v, u, t, s, r, q, j = z[aL.ns],
                g = aL.DPR;
            if (t = j.curSrc || z[av], s = j.curCan || aU(z, t, A[0].set), s && s.set === A[0].set && (q = aw && !z.complete && s.res - 0.1 > g, q || (s.cached = !0, s.res >= g && (u = s))), !u) {
                for (A.sort(aV), v = A.length, u = A[v - 1], x = 0; v > x; x++) {
                    if (y = A[x], y.res >= g) {
                        w = x - 1, u = A[w] && (q || t !== aL.makeUrl(y.url)) && aX(A[w].res, y.res, g, A[w].cached) ? A[w] : y;
                        break
                    }
                }
            }
            u && (r = aL.makeUrl(u.url), j.curSrc = r, j.curCan = u, r !== t && aL.setSrc(z, u), aL.setSize(z))
        }
    }, aL.setSrc = function(e, d) {
        var f;
        e.src = d.url, "image/svg+xml" === d.set.type && (f = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = f))
    }, aL.getSet = function(h) {
        var g, o, m, l = !1,
            j = h[aL.ns].sets;
        for (g = 0; g < j.length && !l; g++) {
            if (o = j[g], o.srcset && aL.matchesMedia(o.media) && (m = aL.supportsType(o.type))) {
                "pending" === m && (o = m), l = o;
                break
            }
        }
        return l
    }, aL.parseSets = function(t, s, r) {
        var q, p, o, m, l = s && "PICTURE" === s.nodeName.toUpperCase(),
            c = t[aL.ns];
        (c.src === a1 || r.src) && (c.src = aH.call(t, "src"), c.src ? aG.call(t, az, c.src) : aF.call(t, az)), (c.srcset === a1 || r.srcset || !aL.supSrcset || t.srcset) && (q = aH.call(t, "srcset"), c.srcset = q, m = !0), c.sets = [], l && (c.pic = !0, aS(s, c.sets)), c.srcset ? (p = {
            srcset: c.srcset,
            sizes: aH.call(t, "sizes")
        }, c.sets.push(p), o = (aN || c.src) && au.test(c.srcset || ""), o || !c.src || aT(c.src, p) || p.has1x || (p.srcset += ", " + c.src, p.cands.push({
            url: c.src,
            d: 1,
            set: p
        }))) : c.src && c.sets.push({
            srcset: c.src,
            sizes: null
        }), c.curCan = null, c.curSrc = a1, c.supported = !(l || p && !aL.supSrcset || o && !aL.supSizes), m && aL.supSrcset && !c.supported && (q ? (aG.call(t, ay, q), t.srcset = "") : aF.call(t, ay)), c.supported && !c.srcset && (!c.src && t.src || t.src !== aL.makeUrl(c.src)) && (null === c.src ? t.removeAttribute("src") : t.src = c.src), c.parsed = !0
    }, aL.fillImg = function(f, e) {
        var h, g = e.reselect || e.reevaluate;
        f[aL.ns] || (f[aL.ns] = {}), h = f[aL.ns], (g || h.evaled !== aM) && ((!h.parsed || e.reevaluate) && aL.parseSets(f, f.parentNode, e), h.supported ? h.evaled = aM : aW(f))
    }, aL.setupRun = function() {
        (!ai || ao || al !== a3.devicePixelRatio) && aY()
    }, aL.supPicture ? (a4 = aJ, aL.fillImg = aJ) : ! function() {
        var p, o = a3.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            m = function() {
                var c = a2.readyState || "";
                l = setTimeout(m, "loading" === c ? 200 : 999), a2.body && (aL.fillImgs(), p = p || o.test(c), p && clearTimeout(l))
            },
            l = setTimeout(m, a2.body ? 9 : 99),
            j = function(g, f) {
                var r, q, h = function() {
                    var c = new Date - q;
                    f > c ? r = setTimeout(h, f - c) : (r = null, g())
                };
                return function() {
                    q = new Date, r || (r = setTimeout(h, f))
                }
            },
            b = aE.clientHeight,
            a = function() {
                ao = Math.max(a3.innerWidth || 0, aE.clientWidth) !== ak.width || aE.clientHeight !== b, b = aE.clientHeight, ao && aL.fillImgs()
            };
        ab(a3, "resize", j(a, 99)), ab(a2, "readystatechange", m)
    }(), aL.picturefill = a4, aL.fillImgs = a4, aL.teardownRun = aJ, a4._ = aL, a3.picturefillCFG = {
        pf: aL,
        push: function(d) {
            var c = d.shift();
            "function" == typeof aL[c] ? aL[c].apply(aL, d) : (aA[c] = d[0], ai && aL.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; ar && ar.length;) {
        a3.picturefillCFG.push(ar.shift())
    }
    a3.picturefill = a4, "object" == typeof module && "object" == typeof module.exports ? module.exports = a4 : "function" == typeof define && define.amd && define("picturefill", function() {
        return a4
    }), aL.supPicture || (aB["image/webp"] = aZ("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
var lazyloadUris = {
    "8.17.0": "/portal/system/modules/edu.uoc.responsive.images/resources/js/lazyload/lazyload-8.17.0.min.js",
    "11.0.5": "/portal/system/modules/edu.uoc.responsive.images/resources/js/lazyload/lazyload-11.0.5.min.js"
};
document.addEventListener("DOMContentLoaded", function(a) {
    (function() {
        if (typeof window.CustomEvent === "function") {
            return false
        }

        function b(d, e) {
            e = e || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(d, e.bubbles, e.cancelable, e.detail);
            return c
        }
        b.prototype = window.Event.prototype;
        window.CustomEvent = b
    })();
    (function(e, h) {
        var c = h.getElementsByTagName("body")[0];
        var g = h.createElement("script");
        var f = !("IntersectionObserver" in e) ? "8.17.0" : "11.0.5";
        g.async = true;
        g.src = lazyloadUris[f];
        e.lazyLoadOptions = {
            elements_selector: "[data-lazy-load]",
            load_delay: 300,
            threshold: 120,
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error"
        };
        c.appendChild(g)
    }(window, document))
});
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(a) {
    a.fn.tweet = function(d) {
        var w = a.extend({
            twitter_api_proxy_url: null,
            username: null,
            list: null,
            favorites: false,
            query: null,
            avatar_size: null,
            count: 3,
            fetch: null,
            page: 1,
            retweets: true,
            intro_text: null,
            outro_text: null,
            join_text: null,
            auto_join_text_default: " I said, ",
            auto_join_text_ed: " I ",
            auto_join_text_ing: " I am ",
            auto_join_text_reply: " I replied to ",
            auto_join_text_url: " I was looking at ",
            loading_text: null,
            refresh_interval: null,
            twitter_url: "twitter.com",
            template: "{avatar}{time}{join} {text}",
            comparator: function(s, o) {
                return o.tweet_time - s.tweet_time
            },
            filter: function(o) {
                return true
            }
        }, d);
        var b = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/gi;

        function r(t, x) {
            if (typeof t === "string") {
                var o = t;
                for (var s in x) {
                    var y = x[s];
                    o = o.split("{" + s + "}").join(y === null ? "" : y)
                }
                return o
            } else {
                return t(x)
            }
        }
        a.extend({
            tweet: {
                t: r
            }
        });

        function g(s, o) {
            return function() {
                var t = [];
                this.each(function() {
                    t.push(this.replace(s, o))
                });
                return a(t)
            }
        }

        function q(o) {
            return o.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
        }
        a.fn.extend({
            linkUser: g(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="//' + w.twitter_url + '/$2">$2</a>'),
            linkHash: g(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="https://' + w.twitter_url + "/search?q=%23$1&src=hash&lang=all" + ((w.username && w.username.length === 1 && !w.list) ? "&from=" + w.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: g(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        });

        function f(s, o) {
            return s.replace(b, function(y) {
                var x = (/^[a-z]+:/i).test(y) ? y : "//" + y;
                var A = y;
                for (var z = 0; z < o.length; ++z) {
                    var t = o[z];
                    if (t.url === x && t.expanded_url) {
                        x = t.expanded_url;
                        A = t.display_url;
                        break
                    }
                }
                return '<a href="' + q(x) + '">' + q(A) + "</a>"
            })
        }

        function p(o) {
            return Date.parse(o.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))
        }

        function v(o) {
            var t = function(y) {
                return parseInt(y, 10)
            };
            var s = new Date();
            var x = t((s.getTime() - o) / 1000);
            if (x < 1) {
                x = 0
            }
            return {
                days: t(x / 86400),
                hours: t(x / 3600),
                minutes: t(x / 60),
                seconds: t(x)
            }
        }

        function c(o) {
            if (o.days > 2) {
                return "about " + o.days + " days ago"
            }
            if (o.hours > 24) {
                return "about a day ago"
            }
            if (o.hours > 2) {
                return "about " + o.hours + " hours ago"
            }
            if (o.minutes > 45) {
                return "about an hour ago"
            }
            if (o.minutes > 2) {
                return "about " + o.minutes + " minutes ago"
            }
            if (o.seconds > 1) {
                return "about " + o.seconds + " seconds ago"
            }
            return "just now"
        }

        function j(o) {
            if (o.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
                return w.auto_join_text_reply
            } else {
                if (o.match(b)) {
                    return w.auto_join_text_url
                } else {
                    if (o.match(/^((\w+ed)|just) .*/im)) {
                        return w.auto_join_text_ed
                    } else {
                        if (o.match(/^(\w*ing) .*/i)) {
                            return w.auto_join_text_ing
                        } else {
                            return w.auto_join_text_default
                        }
                    }
                }
            }
        }

        function e() {
            return w.twitter_api_proxy_url
        }

        function u(o, s) {
            if (s) {
                return ("user" in o) ? o.user.profile_image_url_https : u(o, false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/")
            } else {
                return o.profile_image_url || o.user.profile_image_url
            }
        }

        function m(s) {
            var t = {};
            t.item = s;
            t.source = s.source;
            t.screen_name = s.from_user || s.user.screen_name;
            t.name = s.from_user_name || s.user.name;
            t.retweet = typeof(s.retweeted_status) != "undefined";
            t.tweet_time = p(s.created_at);
            t.join_text = w.join_text === "auto" ? j(s.text) : w.join_text;
            t.tweet_id = s.id_str;
            t.twitter_base = "//" + w.twitter_url + "/";
            t.user_url = t.twitter_base + t.screen_name;
            t.tweet_url = t.user_url + "/status/" + t.tweet_id;
            t.reply_url = t.twitter_base + "intent/tweet?in_reply_to=" + t.tweet_id;
            t.retweet_url = t.twitter_base + "intent/retweet?tweet_id=" + t.tweet_id;
            t.favorite_url = t.twitter_base + "intent/favorite?tweet_id=" + t.tweet_id;
            t.retweeted_screen_name = t.retweet && s.retweeted_status.user.screen_name;
            t.tweet_relative_time = c(v(t.tweet_time));
            t.entities = s.entities ? (s.entities.urls || []).concat(s.entities.media || []) : [];
            t.tweet_raw_text = t.retweet ? ("RT @" + t.retweeted_screen_name + " " + s.retweeted_status.text) : s.text;
            t.tweet_text = a([f(t.tweet_raw_text, t.entities)]).linkUser().linkHash()[0];
            t.retweeted_tweet_text = a([f(s.text, t.entities)]).linkUser().linkHash()[0];
            t.tweet_text_fancy = a([t.tweet_text]).makeHeart()[0];
            if (t.tweet_text_fancy.startsWith("?")) {
                t.tweet_text_fancy = t.tweet_text_fancy.replace(t.tweet_text_fancy.charAt(0), "")
            }
            t.avatar_size = w.avatar_size;
            t.avatar_url = u(t.retweet ? s.retweeted_status : s, (document.location.protocol === "https:"));
            t.avatar_screen_name = t.retweet ? t.retweeted_screen_name : t.screen_name;
            t.avatar_profile_url = t.twitter_base + t.avatar_screen_name;
            t.user = r('<a class="tweet_user" href="{user_url}">{screen_name}</a>', t);
            t.join = w.join_text ? r('<span class="tweet_join">{join_text}</span>', t) : "";
            t.avatar = t.avatar_size ? r('<a class="tweet_avatar" href="{avatar_profile_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{avatar_screen_name}\'s avatar" title="{avatar_screen_name}\'s avatar" border="0"/></a>', t) : "";
            t.time = r('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', t);
            t.text = r('<span class="tweet_text">{tweet_text_fancy}</span>', t);
            t.retweeted_text = r('<span class="tweet_text">{retweeted_tweet_text}</span>', t);
            t.reply_action = r('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', t);
            t.retweet_action = r('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', t);
            t.favorite_action = r('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', t);
            return t
        }

        function h(s, t) {
            var o = a('<ul class="tweet_list">');
            o.append(a.map(t, function(x) {
                return "<li>" + r(w.template, x) + "</li>"
            }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");
            a(s).empty().append(o);
            if (w.intro_text) {
                o.before('<p class="tweet_intro">' + w.intro_text + "</p>")
            }
            if (w.outro_text) {
                o.after('<p class="tweet_outro">' + w.outro_text + "</p>")
            }
            a(s).trigger("loaded").trigger((t.length === 0 ? "empty" : "full"));
            if (w.refresh_interval) {
                window.setTimeout(function() {
                    a(s).trigger("tweet:load")
                }, 1000 * w.refresh_interval)
            }
        }

        function l(o) {
            var s = a('<p class="loading">' + w.loading_text + "</p>");
            if (w.loading_text) {
                a(o).not(":has(.tweet_list)").empty().append(s)
            }
            a.getJSON(e(), function(t) {
                var x = a.map(t.statuses || t, m);
                x = a.grep(x, w.filter).sort(w.comparator).slice(0, w.count);
                a(o).trigger("tweet:retrieved", [x])
            })
        }
        return this.each(function(o, s) {
            if (w.username && typeof(w.username) === "string") {
                w.username = [w.username]
            }
            a(s).unbind("tweet:render").unbind("tweet:retrieved").unbind("tweet:load").bind({
                "tweet:load": function() {
                    l(s)
                },
                "tweet:retrieved": function(t, x) {
                    a(s).trigger("tweet:render", [x])
                },
                "tweet:render": function(t, x) {
                    h(a(s), x)
                }
            }).trigger("tweet:load")
        })
    }
}));
(function(a) {
    a.extend({
        feedToJson: function(c, d) {
            if (a.isFunction(c)) {
                d = c;
                c = null
            }
            c = a.extend(a.feedToJson.defaults, c);
            var b = c.yqlURL + c.yqlQS + "'" + encodeURIComponent(c.feed) + "'&_nocache=" + c.cacheBuster;
            return a.getJSON(b, function(e) {
                e = e.query.results;
                a.isFunction(d) && d(e);
                a.isFunction(c.success) && c.success(e)
            })
        }
    });
    a.feedToJson.defaults = {
        yqlURL: "//query.yahooapis.com/v1/public/yql",
        yqlQS: "?format=json&callback=?&q=select%20*%20from%20rss%20where%20url%3D",
        feed: "//feeds.feedburner.com/uoc/QSCe",
        cachebuster: Math.floor((new Date().getTime()) / 1200 / 1000),
        success: null
    }
})(jQuery);

function openModelCropImage(a) {
    $("#" + a).modal("show")
}

function previewCropImage(c) {
    var b = $("#" + c).val();
    if (!b || b == "") {
        alert("Has de seleccionar una imatge");
        return
    }
    var a = parseLink(b);
    $("#imgPreview" + c).attr("src", a);
    console.log(a);
    $("#cropImagePreviewModal" + c).modal("show")
}

function cleanCropParam(b) {
    var a = $("#" + b).val();
    if (!a || a == "") {
        return
    }
    a = removeURLParameter(a, "cropData");
    $("#" + b).val(a)
}

function loadImage(a, b, l, m) {
    var d = $("#cropped-image" + a);
    var f = "{'x1': 0, 'y1': 0, 'width': " + b + ", 'height': " + l + "}";
    var e = $("#" + a).val();
    if (!e || e == "") {
        $("#idSrcImage" + a).val("/system/modules/net.opentrends.widgets.imagecropper/resources/img/blank.jpg");
        $("#hidden-src" + a).text("/system/modules/net.opentrends.widgets.imagecropper/resources/img/blank.jpg");
        d.attr("src", "/portal/system/modules/net.opentrends.widgets.imagecropper/resources/img/blank.jpg")
    } else {
        var g = getParameterByName(e, "cropData");
        if (g && g != "") {
            f = g
        }
        var h = removeURLParameter(e, "cropData");
        $("#idSrcImage" + a).val(h);
        $("#hidden-src" + a).text(h);
        var c = parseLink(h);
        d.attr("src", c)
    }
    f = replaceAll(f, "'", '"');
    var j = $.parseJSON(f);
    d.cropper({
        aspectRatio: b / l,
        preview: ".epcropped-image" + a,
        done: function(o) {},
        data: j
    })
}

function reloadImage(a, b, h, j) {
    var f = $("#idSrcImage" + a).val();
    $("#hidden-src" + a).text(f);
    var c = parseLink(f);
    $("#cropped-image" + a).attr("src", c);
    var d = $("#cropped-image" + a);
    var e = "{'x1': 0, 'y1': 0, 'width': " + b + ", 'height': " + h + "}";
    var g = $.parseJSON(e);
    d.cropper({
        aspectRatio: b / h,
        preview: ".epcropped-image" + a,
        done: function(l) {},
        data: g
    })
}

function parseLink(b) {
    var a = "/opencms_portal2/opencms/system/modules/net.opentrends.widgets.imagecropper/elements/getCmsLink.jsp";
    a = a + "?link=" + b;
    var c = $.ajax({
        url: a,
        type: "GET",
        async: false
    }).responseText;
    return $.trim(c)
}

function saveImageCropped(d) {
    var b = $("#cropped-image" + d).cropper("getData");
    var a = $("#cropped-image" + d).cropper("getImgInfo");
    delete a.width;
    delete a.height;
    $.extend(b, a);
    var c = $("#hidden-src" + d).text();
    if (!c || c == "") {
        return
    }
    c = c + findSeparator(c) + "cropData=" + replaceAll(JSON.stringify(b), '"', "'");
    $("#" + d).val(c);
    $("#cropImageModal" + d).modal("toggle")
}

function replaceAll(c, b, a) {
    if (c) {
        while (c.toString().indexOf(b) != -1) {
            c = c.toString().replace(b, a)
        }
    }
    return c
}

function getParameterByName(b, a) {
    var f = b.split("?")[1];
    if (f) {
        var d = f.split("&");
        for (var c = 0; c < d.length; c++) {
            var e = d[c].split("=");
            if (e[0] == a) {
                return e[1]
            }
        }
    }
}

function removeURLParameter(a, f) {
    var d = a.split("?");
    if (d.length >= 2) {
        var e = encodeURIComponent(f) + "=";
        var c = d[1].split(/[&;]/g);
        for (var b = c.length; b-- > 0;) {
            if (c[b].lastIndexOf(e, 0) !== -1) {
                c.splice(b, 1)
            }
        }
        if (c.length > 0) {
            a = d[0] + "?" + c.join("&")
        } else {
            a = d[0]
        }
        return a
    } else {
        return a
    }
}

function findSeparator(a) {
    if (a.indexOf("?") != -1) {
        return "&"
    } else {
        return "?"
    }
}

function calcCropImage(c, d) {
    console.log("Recalc coords");
    width = c.parent().width();
    height = c.parent().height();
    if (height == 0) {
        height = width / d.aspectRatio
    }
    var f = width / (d.width / d.naturalWidth);
    var b = height / (d.height / d.naturalHeight);
    var e = f * (d.x1 / d.naturalWidth);
    var a = b * (d.y1 / d.naturalHeight);
    styles = {
        height: Math.round(b),
        marginLeft: -Math.round(e),
        marginTop: -Math.round(a),
        width: Math.round(f)
    };
    c.css(styles)
}

function cropImages() {
    $(".imgCropped").each(function(a, b) {
        $(this).load(function(g) {
            var h = getParameterByName($(this).attr("src"), "cropData");
            h = replaceAll(h, "'", '"');
            if ((!h || h == "") && $(this).hasClass("wrap")) {
                $(this).removeClass("wrap");
                styles = {
                    height: "",
                    marginLeft: "",
                    marginTop: "",
                    width: ""
                };
                $(this).css(styles);
                $(this).unwrap();
                console.log("unwrap")
            } else {
                if (h && h != "") {
                    var d = $.parseJSON(h);
                    if (!$(this).hasClass("wrap")) {
                        var c = $(this).height();
                        var f = $(this).width();
                        $(this).wrap(function() {
                            $div = $("<div class='marco_croppable' style='height:" + c + "px; width:" + f + "px; overflow:hidden;'></div>");
                            return $div
                        });
                        $(this).addClass("wrap");
                        console.log("wrap")
                    }
                    calcCropImage($(this), d)
                } else {
                    console.log("Nothing to do here")
                }
            }
        })
    })
}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(a, b) {
        b = b || 0;
        return this.indexOf(a, b) === b
    }
}
var currentValue = "null";
var urlPortalSearch = "/opencms_portal2/opencms/CA/_config/search/index.html";

function submitLocalitzacioForm() {
    if (currentValue == "null") {
        alert("Cal que seleccionis un centre o punt de suport");
        return false
    }
    return true
}

function clearSelectors(b, c) {
    selectors = document.getElementsByTagName("select");
    currentValue = c;
    var a = 0;
    for (a = 0; a < selectors.length; a++) {
        if (selectors[a].id != b) {
            selectors[a].value = "null"
        }
    }
    return true
}
jQuery.fn.valign = function() {
    xH = $(this).height();
    pH = $(this).parent().height();
    $(this).css({
        "margin-top": (pH - xH) / 2
    })
};

function retiraAcentos(f) {
    var c = "Ã¡Ã Ã£Ã¢Ã¢ÃÃ€ÃƒÃ‚Ã©Ã¨ÃªÃ‰ÃŠÃÃ¬ÃÃŒÃ³Ã²ÃµÃ´Ã“Ã”Ã•ÃºÃ¹Ã¼ÃšÃ™ÃœÃ§Ã‡abcdefghijklmnopqrstuvxwyz-";
    var g = "aaaaaaaaaeeeeeiiiiooooooouuuuuuccabcdefghijklmnopqrstuvxwyz ";
    var d, a;
    var e = "";
    for (var b = 0; b < f.length; b++) {
        a = f.charAt(b);
        d = c.indexOf(a);
        if (d > -1) {
            e += g.charAt(d)
        } else {
            e += f.charAt(b)
        }
    }
    return (e)
}
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(c) {
        var a = "";
        var l, h, f, j, g, e, d;
        var b = 0;
        c = Base64._utf8_encode(c);
        while (b < c.length) {
            l = c.charCodeAt(b++);
            h = c.charCodeAt(b++);
            f = c.charCodeAt(b++);
            j = l >> 2;
            g = ((l & 3) << 4) | (h >> 4);
            e = ((h & 15) << 2) | (f >> 6);
            d = f & 63;
            if (isNaN(h)) {
                e = d = 64
            } else {
                if (isNaN(f)) {
                    d = 64
                }
            }
            a = a + this._keyStr.charAt(j) + this._keyStr.charAt(g) + this._keyStr.charAt(e) + this._keyStr.charAt(d)
        }
        return a
    },
    decode: function(c) {
        var a = "";
        var l, h, f;
        var j, g, e, d;
        var b = 0;
        c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (b < c.length) {
            j = this._keyStr.indexOf(c.charAt(b++));
            g = this._keyStr.indexOf(c.charAt(b++));
            e = this._keyStr.indexOf(c.charAt(b++));
            d = this._keyStr.indexOf(c.charAt(b++));
            l = (j << 2) | (g >> 4);
            h = ((g & 15) << 4) | (e >> 2);
            f = ((e & 3) << 6) | d;
            a = a + String.fromCharCode(l);
            if (e != 64) {
                a = a + String.fromCharCode(h)
            }
            if (d != 64) {
                a = a + String.fromCharCode(f)
            }
        }
        a = Base64._utf8_decode(a);
        return a
    },
    _utf8_encode: function(b) {
        b = b.replace(/\r\n/g, "\n");
        var a = "";
        for (var e = 0; e < b.length; e++) {
            var d = b.charCodeAt(e);
            if (d < 128) {
                a += String.fromCharCode(d)
            } else {
                if ((d > 127) && (d < 2048)) {
                    a += String.fromCharCode((d >> 6) | 192);
                    a += String.fromCharCode((d & 63) | 128)
                } else {
                    a += String.fromCharCode((d >> 12) | 224);
                    a += String.fromCharCode(((d >> 6) & 63) | 128);
                    a += String.fromCharCode((d & 63) | 128)
                }
            }
        }
        return a
    },
    _utf8_decode: function(a) {
        var b = "";
        var d = 0;
        var e = c1 = c2 = 0;
        while (d < a.length) {
            e = a.charCodeAt(d);
            if (e < 128) {
                b += String.fromCharCode(e);
                d++
            } else {
                if ((e > 191) && (e < 224)) {
                    c2 = a.charCodeAt(d + 1);
                    b += String.fromCharCode(((e & 31) << 6) | (c2 & 63));
                    d += 2
                } else {
                    c2 = a.charCodeAt(d + 1);
                    c3 = a.charCodeAt(d + 2);
                    b += String.fromCharCode(((e & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    d += 3
                }
            }
        }
        return b
    }
};

function hasClass(b, a) {
    if (b.classList) {
        return b.classList.contains(a)
    } else {
        return !!b.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
    }
}

function addClass(b, a) {
    if (b.classList) {
        b.classList.add(a)
    } else {
        if (!hasClass(b, a)) {
            b.className += " " + a
        }
    }
}

function removeClass(c, b) {
    if (c.classList) {
        c.classList.remove(b)
    } else {
        if (hasClass(c, b)) {
            var a = new RegExp("(\\s|^)" + b + "(\\s|$)");
            c.className = c.className.replace(a, " ")
        }
    }
}

function offset(a) {
    var b = a.getBoundingClientRect(),
        c = document.body;
    return {
        top: b.top + c.scrollTop,
        left: b.left + c.scrollLeft
    }
}

function cleanString(a) {
    return a.replace(/[^\w\s]/gi, "")
}

function borracampo(b, a) {
    if (b.value == a) {
        b.value = ""
    }
}

function restauracampo(b, a) {
    if (b.value == "") {
        b.value = a
    }
}

function catchError(a) {
    alert(a)
}

function initMap() {
    var b;
    var g = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: -100
        }]
    }];
    var c;
    var e = "http://www.uoc.edu/opencms_portal2/opencms/_resources/common/config/geocode";
    if (typeof directMapsLink !== "undefined" && directMapsLink != null) {
        var j;
        if (directMapsLink.indexOf("data=") > 0 && directMapsLink.indexOf("!3d") > 0) {
            j = directMapsLink.substring(directMapsLink.indexOf("data=") + 5);
            j = j.substring(j.lastIndexOf("!3d") + 3);
            if (j.indexOf("?") > 0) {
                j = j.substring(0, j.indexOf("?"))
            }
            j = j.replace("!4d", ",");
            jQuery.ajaxSetup({
                async: false
            });
            jQuery.getJSON(e + "?latlng=" + j, null, function(l) {
                if (l.status === "OK") {
                    var m = l.results[0].geometry.location;
                    c = new google.maps.LatLng(m.lat, m.lng)
                }
            });
            jQuery.ajaxSetup({
                async: true
            })
        } else {
            j = directMapsLink.substring(directMapsLink.indexOf("/place/") + 7);
            j = j.substring(j.indexOf("/@") + 2, directMapsLink.indexOf("z/"));
            if (j.length <= 4) {
                j = directMapsLink.substring(directMapsLink.indexOf("l=") + 2, directMapsLink.indexOf("&z"))
            }
            jQuery.ajaxSetup({
                async: false
            });
            jQuery.getJSON(e + "?latlng=" + j + "&sensor=false", null, function(l) {
                if (l.status === "OK") {
                    var m = l.results[0].geometry.location;
                    c = new google.maps.LatLng(m.lat, m.lng)
                }
            });
            jQuery.ajaxSetup({
                async: true
            })
        }
    } else {
        if (typeof addressesArray !== "undefined" && addressesArray != null) {
            jQuery.ajaxSetup({
                async: false
            });
            for (var h = 0; h < addressesArray.length && c == null; h++) {
                jQuery.getJSON(e + "?address=" + addressesArray[h] + "&sensor=false", null, function(l) {
                    if (l.status === "OK") {
                        var m = l.results[0].geometry.location;
                        c = new google.maps.LatLng(m.lat, m.lng)
                    }
                })
            }
            jQuery.ajaxSetup({
                async: true
            })
        }
    }
    if (typeof(c) === "undefined") {
        c = new google.maps.LatLng("41.406523", "2.1924003")
    }
    b = new google.maps.Map(document.getElementById("map"), {
        center: c,
        zoom: 15,
        disableDefaultUI: true
    });
    var d = new google.maps.StyledMapType(g, {
        name: "gray"
    });
    b.mapTypes.set("uoc", d);
    b.setMapTypeId("uoc");
    var f = "//www.uoc.edu/portal/system/modules/edu.uoc.presentations/resources/img/map/blue-dot.png";
    var a = new google.maps.Marker({
        position: c,
        map: b,
        icon: f
    })
}

function getRSS(a) {
    a = a || {};
    if (a.xmlURL && a.callbackSuccess) {
        $.ajax({
            type: "GET",
            url: a.xmlURL,
            dataType: "xml",
            timeout: 30000,
            success: function(b) {
                var c = xml2json(b);
                c = c.replace(/undefined/g, "");
                c = c.replace(/#/g, "");
                c = c.replace(/&lt;/g, "<");
                c = c.replace(/&gt;/g, ">");
                c = c.replace(/&apos;/g, "'");
                a.json = JSON.parse(c);
                a.xml = b;
                executeFunctionByName(a.callbackSuccess, window, a)
            }
        })
    }
}

function processRSS(b) {
    b = b || {};
    if (b.idDivParent) {
        var d = $("#" + b.idDivParent);
        if (d && b.json) {
            var c = b.json;
            var a = c.rss.channel.item;
            if (a && !a.length > 0) {
                a = [c.rss.channel.item]
            }
            if (a && a.length > 0) {
                $.each(a, function(g, l) {
                    divChild = '<div class="col-xs-12 col-md-6"><div class="card card-responsive card--image-vertical card--with-footer ruler ruler--secondary card--hover">';
                    var m = "";
                    if (l.link) {
                        m = '<a href="' + l.link + '" class="card-absolute-link"></a>'
                    }
                    m = m + '<div class="card__contents">';
                    m = m + '<h2 class="h4 font-alternate">' + l.title + "</h2>";
                    var j = (l.description) ? l.description : "&nbsp;";
                    m = m + "<p>" + j + "</p>";
                    var h = l.category;
                    if (l.pubDate && l.description && l.description.indexOf("<span>") > 0) {
                        var e = new Date(l.pubDate);
                        Number.prototype.padLeft = function(q, p) {
                            var o = (String(q || 10).length - String(this).length) + 1;
                            return o > 0 ? new Array(o).join(p || "0") + this : this
                        };
                        var f = [e.getDate().padLeft(), (e.getMonth() + 1).padLeft(), e.getFullYear().toString().slice(-2)].join("/") + " " + [e.getHours().padLeft(), e.getMinutes().padLeft()].join(":");
                        m = m + '<div class="card__footer">';
                        m = m + '     <div class="float-left">' + f + "</div>";
                        m = m + "</div>"
                    }
                    divChild = divChild + m;
                    divChild = divChild + "</div>";
                    divChild = divChild + "</div>";
                    d.append(divChild)
                })
            }
        }
    }
}

function executeFunctionByName(f, c) {
    var a = Array.prototype.slice.call(arguments, 2);
    var e = f.split(".");
    var d = e.pop();
    for (var b = 0; b < e.length; b++) {
        c = c[e[b]]
    }
    return c[d].apply(c, a)
}(function(a) {
    a.extend({
        feedToJson: function(c, d) {
            if (a.isFunction(c)) {
                d = c;
                c = null
            }
            c = a.extend(a.feedToJson.defaults, c);
            var b = c.yqlURL + c.yqlQS + encodeURIComponent(c.feed);
            return a.getJSON(b, function(e) {
                a.isFunction(d) && d(e);
                a.isFunction(c.success) && c.success(e)
            })
        }
    });
    a.feedToJson.defaults = {
        yqlURL: "//api.rss2json.com/v1/api.json",
        yqlQS: "?rss_url=",
        feed: "//feeds.feedburner.com/uoc/QSCe",
        cachebuster: Math.floor((new Date().getTime()) / 1200 / 1000),
        success: null
    }
})(jQuery);

function ajaxRSS(c, b, a) {
    $.feedToJson({
        feed: c,
        success: function(d) {
            $divParent = $("#dinamic-feeds");
            if (d.items.length >= 1) {
                d = d.items
            }
            $.each(d, function() {
                divChild = '<div class="col-xs-12 col-md-6"><div class="card card-responsive card--image-vertical card--with-footer ruler ruler--secondary card--hover">';
                var h = "";
                if (typeof this.link != "undefined") {
                    h = '<a href="' + this.link + '" class="card-absolute-link"></a>'
                }
                h = h + '<div class="card__contents">';
                h = h + '<h2 class="h4 font-alternate">' + this.title + "</h2>";
                h = h + "<p>" + this.description + "</p>";
                var g = this.category;
                if (this.description.indexOf("<span>") > 0) {
                    var e = new Date(this.pubDate);
                    Number.prototype.padLeft = function(m, l) {
                        var j = (String(m || 10).length - String(this).length) + 1;
                        return j > 0 ? new Array(j).join(l || "0") + this : this
                    };
                    var f = [e.getDate().padLeft(), (e.getMonth() + 1).padLeft(), e.getFullYear().toString().slice(-2)].join("/") + " " + [e.getHours().padLeft(), e.getMinutes().padLeft()].join(":");
                    h = h + '<div class="card__footer">';
                    h = h + '     <div class="float-left">' + f + "</div>";
                    h = h + "</div>"
                }
                divChild = divChild + h;
                divChild = divChild + "</div>";
                divChild = divChild + "</div>";
                $divParent.append(divChild)
            })
        }
    })
}

function ajaxListRSS(d, c, b, a) {
    $.feedToJson({
        feed: c,
        success: function(g) {
            $divParent = $("#" + d);
            $divParent.empty();
            if (g.items.length > 1) {
                g = g.items
            }
            var f = 0;
            var e = 2;
            if (typeof itemsRss != "undefined") {
                e = itemsRss
            }
            $.each(g, function() {
                if (f == e) {
                    return false
                }
                divChild = "<p>";
                var m = "";
                m = m + '<a href="' + this.link + '" class="rss-link">' + this.title + "</a>";
                try {
                    if (typeof this.pubDate != "undefined") {
                        var h = new Date(this.pubDate);
                        Number.prototype.padLeft = function(q, p) {
                            var o = (String(q || 10).length - String(this).length) + 1;
                            return o > 0 ? new Array(o).join(p || "0") + this : this
                        };
                        var j = [h.getDate().padLeft(), (h.getMonth() + 1).padLeft(), h.getFullYear().toString().slice(-2)].join("/") + " " + [h.getHours().padLeft(), h.getMinutes().padLeft()].join(":");
                        m = m + "<date>" + j + "</date>"
                    }
                } catch (l) {}
                divChild = divChild + m;
                divChild = divChild + "</p>";
                $divParent.append(divChild);
                f = f + 1
            })
        }
    })
}

function mostrarProcesMatricula(d, b) {
    var a = 1;
    $tab = $("#tabProces" + a);
    while ($tab.length > 0) {
        if (!$tab.hasClass("oculto")) {
            $tab.addClass("oculto")
        }
        a++;
        $tab = $("#tabProces" + a)
    }
    var a = 1;
    $tab = $("#pestProces" + a);
    while ($tab.length > 0) {
        if ($tab.hasClass("active")) {
            $tab.removeClass("active");
            $tab.addClass("visited")
        }
        a++;
        $tab = $("#pestProces" + a)
    }
    var c = "#" + d;
    if ($(c).length > 0) {
        $(c).removeClass("oculto")
    }
    c = "#" + b;
    if ($(c).length > 0) {
        if ($(c).hasClass("visited")) {
            $(c).removeClass("visited")
        }
        $(c).addClass("active")
    }
}

function loadJsonResourcesList(g, a, c, d, f) {
    try {
        $("." + a + " ." + c + " .items_loading").show();
        var e = $.getJSON(g, function(j) {
            var h = [];
            if (typeof j !== "undefined" && j != null) {
                $.each(j, function(E, s) {
                    if (E == d) {
                        return false
                    }
                    var r = "";
                    var F = s.title;
                    var q = s.brand;
                    var A = s.date;
                    var x = s.dateFormatted;
                    var y = s.description;
                    var p = s.link;
                    if (p != undefined && p != "") {
                        var m = p.href;
                        var w = p.target;
                        var l = p.title;
                        var C = p.text
                    }
                    try {
                        var u = s.image;
                        if (u != undefined) {
                            var D = u.src;
                            var B = u.longdesc;
                            var z = u.title;
                            var t = u.alt;
                            r += "<img class='img-wpr__cover' src='" + D + "' longdesc='" + B + "' title='" + z + "' alt='" + t + "'>"
                        }
                    } catch (o) {}
                    r += "<div class='card__contents ruler ruler--" + q + "'>";
                    r += "<a class='text-decoration-underline' target='" + w + "' title='" + l + "' href='" + m + "'>";
                    r += "<div class='h5'>" + F + "</div>";
                    r += "</a>";
                    r += "<div>";
                    if (x != undefined && x != "") {
                        r += "<date>" + x + "</date>"
                    }
                    if (y != undefined && y != "") {
                        r += "<div>" + y + "</div>"
                    }
                    r += "</div>";
                    r += "</div>";
                    h.push("<div class='card' id='item_" + E + "'>" + r + "</div>")
                });
                if ($("." + a + " ." + c + " .card").length == 0) {
                    $("." + a + " ." + c).append(h.join(""))
                }
                $("." + a + " ." + c + " .items_loading").hide()
            } else {
                $("." + a + " ." + c + " .items_loading").hide();
                $("." + a + " ." + c).append("<div class='items_empty'>" + f + "</div>")
            }
        }).fail(function() {
            console.log("No hi ha elements a mostrar a la crida json");
            $("." + a + " ." + c + " .items_loading").hide();
            $("." + a + " ." + c).append("<div class='items_empty'>" + f + "</div>")
        })
    } catch (b) {}
}

function loadJsonResourcesListCards(e, a, b, c, d) {
    loadJsonResourcesListCards(e, a, b, c, d, true, "3")
}

function loadJsonResourcesListCards(f, a, b, d, e, c) {
    loadJsonResourcesListCards(f, a, b, d, e, c, "3")
}

function loadJsonResourcesListCards(b, d, f, h, a, j, g) {
    if (g == undefined) {
        var g = "3"
    }
    try {
        $("." + d + " ." + f + " .items_loading").show();
        var c = $.getJSON(b, function(q) {
            var v = [];
            var o = "paginacio";
            var u = "paginacio";
            if (typeof q !== "undefined" && q != null) {
                $.each(q, function(O, C) {
                    var B = "";
                    var P = C.title;
                    var A = C.brand;
                    var J = C.date;
                    var G = C.dateFormatted;
                    var H = C.description;
                    var z = C.link;
                    if (z != undefined && z != "") {
                        var x = z.href;
                        var F = z.target;
                        var w = z.title;
                        var L = z.text
                    }
                    var N = C.paginacio;
                    if (N != undefined || N != "") {
                        o = N.numPages;
                        u = N.actualPage
                    }
                    var E = C.image;
                    B += "<div class='card card--with-footer" + A + "'>";
                    try {
                        if (E != undefined) {
                            var M = E.src;
                            var K = E.longdesc;
                            var I = E.title;
                            var D = E.alt;
                            B += "<div class='card__image'><img class='imgCropped' src='" + M + "' longdesc='" + K + "' title='" + I + "' alt='" + D + "'></div>"
                        }
                    } catch (y) {}
                    B += "<a class='card-absolute-link' target='" + F + "' title='" + w + "' href='" + x + "'>&nbsp;</a>";
                    B += "<div class='card__contents ruler ruler--secondary'>";
                    B += "<h4 class='font-alternate'>" + P + "</h4>";
                    if (G != undefined && G != "") {
                        B += "<div class='card__footer'><div class='float-left'>" + G + "</div></div>"
                    }
                    B += "</div>";
                    B += "</div>";
                    v.push("<div class='col-xs-12 col-sm-6 col-md-" + g + " col-lg-" + g + "' id='item_" + O + "'>" + B + "</div>")
                });
                if ($("." + d + " ." + f + " .card").length == 0) {
                    $("." + d + " ." + f).append(v.join(""))
                }
                $("." + d + " ." + f + " .items_loading").hide()
            } else {
                $("." + d + " ." + f + " .items_loading").hide();
                $("." + d + " ." + f).append("<div class='items_empty'>" + a + "</div>")
            }
            if (j == "true" && o > 1) {
                var l = window.location.href;
                l = getCleanUrl(l);
                var s = '<section class="pagination float-left"><ul class="pagination m-bottom-large">';
                if (u < 4) {
                    for (var r = 1; r <= 5; r++) {
                        if (r <= o) {
                            if (r == u) {
                                s += '<li class="col-md-1 pagination__item is-active" ><span class="pagination__link">0' + r + "</span></li>"
                            } else {
                                if (r == 5) {
                                    s += '<li class="col-md-5 pagination__item"><a class="pagination__link" href="' + l.concat("?page=" + r) + '" target="_self" title="0' + r + '">0' + r + "</a></li>"
                                } else {
                                    s += '<li class="col-md-1 pagination__item"><a class="pagination__link" href="' + l.concat("?page=" + r) + '" target="_self" title="0' + r + '">0' + r + "</a></li>"
                                }
                            }
                        }
                    }
                } else {
                    var m = "";
                    if (u < 10) {
                        var m = "0"
                    }
                    s += '<li class="col-md-1 pagination__item"><a class="pagination__link" href="' + l + '?page=1" target="_self" title="01">01</a></li>';
                    s += '<li class="col-md-1 pagination__item"><span class="pagination__link"></span></li>';
                    s += '<li class="col-md-1 pagination__item"><a class="pagination__link" href="' + l.concat("?page=" + (u - 1)) + '" target="_self" title="' + m.concat(u - 1) + '">' + m.concat(u - 1) + "</a></li>";
                    s += '<li class="col-md-1 pagination__item is-active" ><a class="pagination__link">' + m.concat(u) + "</a></li>";
                    if (u < o) {
                        if ((u + 1) < 10) {
                            var m = "0"
                        } else {
                            m = ""
                        }
                        s += '<li class="col-md-5 pagination__item"><a class="pagination__link" href="' + l.concat("?page=" + (u + 1)) + '" target="_self" title="' + m.concat(u + 1) + '">' + m.concat(u + 1) + "</a></li>"
                    } else {
                        s += '<li class="col-md-5 pagination__item"></li>'
                    }
                }
                if (u < o) {
                    var p = u + 1;
                    s += '<li class="col-xs-12 col-lg-3 pagination__item pagination__item--next"><a class="btn btn--primary" target="_self" href="' + l.concat("?page=" + p) + '">Seg&uuml;ents</a></li>'
                } else {
                    s += '<li class="col-xs-12 col-md-3 pagination__item pagination__item--next"></li>'
                }
                var t = getUrlParameter("page");
                s += "</ul></section><!-- /.pagination  -->"
            } else {}
            $(".news-autor-pagination").append(s)
        }).fail(function() {
            console.log("No hi ha elements a mostrar a la crida json");
            $("." + d + " ." + f + " .items_loading").hide();
            $("." + d + " ." + f).append("<div class='items_empty'>" + a + "</div>")
        })
    } catch (e) {}
}

function getCleanUrl(a) {
    var b = getUrlParameter("page");
    if (b > 0) {
        var c = a.lenght - 1;
        a = a.substring(0, c)
    }
    return a
}

function getUrlParameter(a) {
    var d = decodeURIComponent(window.location.search.substring(1)),
        c = d.split("&"),
        e, b;
    for (b = 0; b < c.length; b++) {
        e = c[b].split("=");
        if (e[0] === a) {
            return e[1] === undefined ? true : e[1]
        }
    }
}

function textEndsWith(b, a) {
    return a.length > 0 && b.substring(b.length - a.length, b.length) === a
}

function isFunction(a) {
    return a && {}.toString.call(a) === "[object Function]"
}

function isArray(b, a) {
    return b && b instanceof Array && ((a && b.length > 0) || !a)
}

function existValueInArray(e, d) {
    var b = false;
    if (isArray(e, true)) {
        for (var a = 0; a < e.length && !b; a++) {
            var c = e[a];
            if (c === d) {
                b = true
            }
        }
    }
    return b
}

function getVideos(d) {
    var b;
    if (d && d.url && d.key && isArray(d.idsVideos, true) && isArray(d["getVideos.part"], true) && isFunction(d["getVideos.fncCallBackProcess"])) {
        if (!textEndsWith(d.url, "/") && !textEndsWith(d.url, "\\")) {
            b = d.url + "/"
        }
        b = b + "videos";
        var a = $.param({
            part: d["getVideos.part"].toString(),
            id: d.idsVideos.toString(),
            key: d.key
        }, true);
        var c = $.getJSON(b, a, function(e) {
            d.videos = e;
            d["getVideos.fncCallBackProcess"](d)
        }).fail(function(e, f) {})
    }
}

function processGetVideos(d) {
    var a = 0;
    var b = d.videos;
    var c = d.procesarNumeroVideos;
    if (b && b.items) {
        $.each(b.items, function(e, f) {
            if (f && a < c) {
                var g = getVideoId(f);
                if (!existValueInArray(d.videoIdsExcluir, g)) {
                    $("." + d.classToAppend).append(getVideoHTML(f, d));
                    a++
                }
            }
        })
    }
    PlayerManager.getInstance().loadInitFunction()
}

function getTimeline(d) {
    var h = $("#" + d);
    var b = h.attr("data-spread-sheet-id");
    var e = h.attr("data-range");
    var c = h.attr("data-action");
    var j = h.attr("data-locale");
    var g = c + "?spreadsheetId=" + b;
    var f = 250;
    var a = $.getJSON(g, function(m) {
        var l = {
            start_at_end: true,
            initial_zoom: 7,
            height: f,
            timenav_position: "top",
            language: j,
            debug: false
        };
        window.timeline = new TL.Timeline(d, m, l)
    })
}

function getVideosPlayList(d) {
    var b;
    if (d && d.url && d.key && d.playlistId && d.maxResults && d.procesarNumeroVideos && isArray(d["getVideosPlayList.part"], true) && isFunction(d["getVideosPlayList.fncCallBackProcess"])) {
        if (!textEndsWith(d.url, "/") && !textEndsWith(d.url, "\\")) {
            b = d.url + "/"
        }
        b = b + "playlistItems";
        var a = $.param({
            part: d["getVideosPlayList.part"].toString(),
            maxResults: d.maxResults,
            playlistId: d.playlistId,
            key: d.key
        }, true);
        var c = $.getJSON(b, a, function(e) {
            d.videos = e;
            d["getVideosPlayList.fncCallBackProcess"](d)
        }).fail(function() {})
    }
}

function processGetVideosPlayList(e) {
    if (e) {
        var b = e.videos;
        var c = e.procesarNumeroVideos;
        var a = 0;
        var d = [];
        if (b && b.items) {
            $.each(b.items, function(f, g) {
                if (g && a < c) {
                    var h = getVideoId(g);
                    if (!existValueInArray(e.videoIdsExcluir, h)) {
                        d.push(h);
                        a++
                    }
                }
            })
        }
        e.idsVideos = d;
        getVideos(e)
    }
}

function getVideoHTML(a, b) {
    var f;
    var g = b.labels;
    if (a && b) {
        var c = 150;
        if (b.maxLengthVideoDescription && b.maxLengthVideoDescription > 0) {
            c = b.maxLengthVideoDescription
        }
        var p = "...";
        if (b.separatorVideoDescription) {
            p = b.separatorVideoDescription
        }
        if (!g) {
            g = {}
        }
        var h;
        if (a.contentDetails.videoId) {
            h = a.contentDetails.videoId
        } else {
            h = a.id
        }
        var d;
        if (a.contentDetails.duration) {
            d = a.contentDetails.duration.replace("PT", "").replace("M", ":").replace("S", "")
        }
        var o = a.snippet.thumbnails.high.url;
        var e = a.snippet.title;
        var m = getUrlYoutubeVideo(h);
        var j = a.snippet.description;
        var l = "";
        f = '<div class="col-sm-12 col-md-6 col-xs-6 col-lg-4">';
        f = f + '<div class="card card--responsive-mobile responsive-text" data-video="">';
        f = f + '<div class="card__contents card__video img-wpr img--tint">';
        f = f + '<img class="img-wpr__cover" src="' + o + '" alt="' + e + '">';
        f = f + getTypeVideoHtml(h, true, g.dataSubtitle, g["modal.video.visualitzacio"], g["noscript.alert"]);
        f = f + '<div class="img-wpr__contents inverse">';
        f = f + "<h3>" + e + "</h3>";
        f = f + "<p><em>" + cropPreserveHTMLTags(j, c, p, false) + "</em></p>";
        f = f + '<div class="card__footer"><div class="card__video__time">' + l + "</div></div>";
        f = f + "</div>";
        f = f + "</div>";
        f = f + "</div>";
        f = f + "</div>"
    }
    return f
}

function getTypeVideoHtml(e, b, f, d, a) {
    var g = new Date().getTime();
    var c;
    if (b) {
        c = '<a href="#modal-' + g + '" data-modal-trigger data-video-play class="card__video__icon icon icon--play icon--small" title="' + d + '">&nbsp;</a>';
        c += '<div data-modal="" id="modal-' + g + '" class="modal modal--video">';
        c += '<div role="document" data-modal-dialog="" class="modal__dialog">';
        c += '<div class="modal__content">';
        c += '<div class="modal__body">';
        c += '<div class="embedded-video">';
        c += '<div class="embedded-video__iframe" id="ytplayermodal-modal-' + g + '" data-video-id="' + e + '" data-video-autoplay="1" data-video-time="0" ' + f + "></div>";
        c += "<noscript>";
        c += a;
        c += "</noscript>";
        c += "</div>";
        c += "</div>";
        c += "</div>";
        c += "</div>";
        c += "</div>"
    } else {
        c = '<div class="card__video__icon icon icon--play-center icon--big pointer" data-video-play=""></div>"';
        c += '<div class="card__embedded-video">';
        c += '<div class="embedded-video">';
        c += '<div class="embedded-video__iframe" id="ytplayermodal-modal-' + g + '" data-video-id="' + e + '" data-video-autoplay="1" data-video-time="0" ' + f + "></div>";
        c += "<noscript>";
        c += a;
        c += "</noscript>";
        c += "</div>";
        c += "</div>"
    }
    return c
}

function getUrlYoutubeVideo(a) {
    return "//www.youtube.com/v/" + a + "?version=3"
}

function getVideoId(a) {
    var b;
    if (a) {
        if (a.contentDetails.videoId) {
            b = a.contentDetails.videoId
        } else {
            if (a.id) {
                b = a.id
            }
        }
    }
    return b
}

function cropPreserveHTMLTags(p, g, b, e) {
    var h = p;
    var z;
    var v;
    var x = g;
    var o = 0;
    var m;
    var j = [];
    var y = false;
    var s = false;
    var u = false;
    var r = true;
    if (e) {
        v = '<span class="revealText">'
    } else {
        v = ""
    }
    h = h.replace(/[\s\n\r]{2,}/g, " ");
    h = h.replace(/(<[^<>]+>)/g, "|*|SPLITTER|*|$1|*|SPLITTER|*|");
    h = h.replace(/(\|\*\|SPLITTER\|\*\|)(\s*)\|\*\|SPLITTER\|\*\|/g, "$1$2");
    h = h.replace(/^[\s\t\r]*\|\*\|SPLITTER\|\*\||\|\*\|SPLITTER\|\*\|[\s\t\r]*$/g, "");
    h = h.split(/\|\*\|SPLITTER\|\*\|/);
    for (var t in h) {
        r = true;
        z = h[t];
        m = j[j.length - 1];
        if (!z.match(/<[^<>]+>/)) {
            s = true;
            u = false;
            if (m && z.charAt(0) == " " && !m[1].match(/span|SPAN/)) {
                z = z.substr(1)
            }
            if (!y) {
                o += z.length;
                if (o >= x) {
                    var c = z.length - 1;
                    var B = (c) - (o - x);
                    while (B != c) {
                        if (!!z.charAt(B).match(/[\s\t\n]/) || B == c) {
                            break
                        } else {
                            B++
                        }
                    }
                    if (B != c) {
                        B--
                    }
                    var l = "",
                        q = "";
                    var w = "",
                        f = "",
                        A = "";
                    if (j.length - 1 >= 0) {
                        var d = j.length - 1;
                        while (d >= 0) {
                            var C = j[d];
                            if (C) {
                                l = "</" + C[1] + ">";
                                q = "<" + C[1] + C[2] + ">";
                                if (C[1].toLowerCase() === "a") {
                                    w += l;
                                    j.pop()
                                } else {
                                    A = q + A;
                                    f = f + l
                                }
                            }
                            d--
                        }
                    }
                    if (e) {
                        w += '<span class="readMore"><span class="ellipsis">' + b + "</span></span>" + f + '</span><span class="hiddenText">' + A
                    } else {
                        w += b + f
                    }
                    if (B == c) {
                        v += (z).substr(0) + w
                    } else {
                        v += (z).substr(0, B + 1) + w;
                        if (e) {
                            v += (z).substr(B + 1).replace(/^\s/, "&nbsp;")
                        }
                    }
                    y = true;
                    continue
                }
            }
        } else {
            s = false;
            u = true;
            if (!z.match(/<br>|<BR>/)) {
                if (!z.match(/\//)) {
                    j.push(z.match(/<(\w+)(\s*[^>]*)>/))
                } else {
                    if (z.match(/<\/[pP]>/)) {} else {
                        if (z.match(/<\/[aA]>/)) {
                            r = false;
                            for (var a = 0; a < j.length && !r; a++) {
                                var C = j[a];
                                if (C[1].toLowerCase() === "a") {
                                    r = true
                                }
                            }
                        }
                    }
                    if (z.match(/<\/(\w+)>/)[1] == j[j.length - 1][1]) {
                        j.pop()
                    }
                }
            }
        }
        if (r) {
            v += (z)
        }
        if (y && !e) {
            break
        }
    }
    if (e) {
        v += ("</span>")
    }
    return v
}
$(document).ready(function() {
    $("form#directori-persones select[data-id-bind=select-dependent]").change(function(m, o) {
        var l = $(this).find(":selected");
        var j = $("form#directori-persones div[data-select-id=select-dependent]").children().first();
        var p = l.attr("header-text-selected");
        if (!o) {
            $('form#directori-persones select[id=select-dependent] option[value="ALL"]').prop("selected", true)
        }
        var g = $("form#directori-persones select[id=select-dependent]").find(":selected");
        var h = g.text();
        if (l.val() !== "ALL") {
            j.text(p);
            $("form#directori-persones #select-dependent").children().first().text(p);
            $('form#directori-persones div [id=div-select-dependent] div [data-select-text=""]').text(h);
            $("form#directori-persones div[data-select-id=totauoc]").children("div").each(function(q) {
                if ($(this).attr("data-select-list-item") === l.val()) {
                    $(this).addClass("selected")
                } else {
                    $(this).removeClass("selected")
                }
            });
            $("form#directori-persones div[data-select-id=select-dependent]").children("div").each(function(q) {
                if (($(this).attr("data-bind") === l.val() && $(this).attr("data-select-list-item") === g.val()) || (g.val() === "ALL" && $(this).attr("data-select-list-item") === g.val())) {
                    $(this).addClass("selected")
                } else {
                    $(this).removeClass("selected")
                }
            });
            $("form#directori-persones #div-select-dependent").show()
        } else {
            $("form#directori-persones #div-select-dependent").hide()
        }
    });
    setTimeout(function() {
        $("form#directori-persones select[data-id-bind=select-dependent]").trigger("change", [{
            init: true
        }])
    }, 250);
    $("#search-form-container-desktop-inner, #search-form-container-mobile-inner, #search-form-container, #search, #search-page, form[name=searchForm]").submit(function() {
        searchWords = $(this).find("input[name=searchWords]").val();
        searchWords = retiraAcentos(searchWords);
        searchWords = cleanString(searchWords);
        var g = Base64.encode(searchWords);
        g = g.replace("=", ".");
        $(this).append('<input type="hidden" name="searchBase" value="' + g + '" />');
        $(this).submit
    });
    $("#searchEUOC").click(function() {
        $("#search-form-container-desktop-inner").attr("action", "//estudis.uoc.edu/ca/cercador-resultats")
    });
    $("#m-searchEUOC").click(function() {
        $("#search-form-container-mobile-inner").attr("action", "//estudis.uoc.edu/ca/cercador-resultats")
    });
    $("#searchPortal").click(function() {
        $("#search-form-container-desktop-inner").attr("action", urlPortalSearch)
    });
    $("#m-searchPortal").click(function() {
        $("#search-form-container-mobile-inner").attr("action", urlPortalSearch)
    });
    $("form[name=contacteUOC]").submit(function() {
        var h = $(this).children("select").val();
        if (h == "null") {
            var g = "Cal que seleccionis un tipus d'estudi";
            alert(g)
        } else {
            document.location = h
        }
        return false
    });
    var c = new Array();
    c[0] = "Gener";
    c[1] = "Febrer";
    c[2] = "Mar&ccedil;";
    c[3] = "Abril";
    c[4] = "Maig";
    c[5] = "Juny";
    c[6] = "Juliol";
    c[7] = "Agost";
    c[8] = "Setembre";
    c[9] = "Octubre";
    c[10] = "Novembre";
    c[11] = "Desembre";
    if ($("#clock").length > 0) {
        $.ajax({
            url: "/opencms_portal2/opencms/system/modules/edu.uoc.presentations/resources/js/utils/date.json",
            dataType: "json"
        }).done(function(g) {
            f(g.milliseconds_since_epoch)
        });

        function f(g) {
            var j = new Date(g);
            var p = j.getDate();
            var m = j.getMonth();
            var o = j.getFullYear();
            var q = j.getHours();
            if (q.toString().length == 1) {
                q = "0" + q
            }
            var l = j.getMinutes();
            if (l.toString().length == 1) {
                l = "0" + l
            }
            var r = j.getSeconds();
            if (r.toString().length == 1) {
                r = "0" + r
            }
            var h = q + ":" + l + ":" + r;
            $(".num").html(p);
            $(".month").html(c[m]);
            $(".year").html(o);
            $(".hour").html(h);
            setTimeout(function() {
                f(g + 1000)
            }, 1000)
        }
    }
    $("#layout").removeClass("noscript");
    if ($(".anchor-layer").length > 0) {
        var a = $(".anchors-layers-items .anchor-layer-content:first").attr("id");
        $("#" + a).show();
        $(".anchors-layers-head-contents .head-contents .anchor-layer span:first").addClass("selected");
        var e = $(".anchors-layers-head-contents .head-contents .anchor-layer span:first");
        $(".anchor-layer span").click(function() {
            var g = $(this).attr("class");
            e.removeClass("selected");
            e = $(this);
            $(this).addClass("selected");
            $("#" + g).parent().children().not("#" + g).each(function() {
                $(this).hide()
            });
            $("#" + g).show()
        })
    }
    if (document.getElementById("map") != null) {
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCa8bvjXBxJC_ZFaS2cEP9PvoFyV8naEmk&callback=initMap",
            dataType: "script"
        })
    }
    if (document.getElementById("footer-twitter") != null && ft_username != null && ft_twitter_api_proxy_url != null) {
        var d = '<h4 class="inherited-color">@' + ft_username + '</h4><p><div class="footer-group__list">{text}</div></p>';
        var b = "Loading...";
        if (ft_template != null) {
            d = ft_template
        }
        if (ft_loading_text != null) {
            b = ft_loading_text
        }
        $("#footer-twitter").tweet({
            username: ft_username,
            loading_text: b,
            template: d,
            twitter_api_proxy_url: ft_twitter_api_proxy_url
        })
    }
});

function comprovaEstatLogin() {
    var c = false;
    if (window.XMLHttpRequest) {
        c = new XMLHttpRequest();
        if (c.overrideMimeType) {
            c.overrideMimeType("text/xml")
        }
    } else {
        if (window.ActiveXObject) {
            try {
                c = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (a) {
                try {
                    c = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (a) {}
            }
        }
    }
    if (!c) {
        alert(unescapeHTML("Malauradament el teu navegador no suporta accesos din&agrave;mics"));
        return false
    }
    var b = "/portal/tancament_campus/campus.xml";
    try {
        c.open("GET", b, true)
    } catch (a) {
        alert(unescapeHTML("El proxy que es vol usar no pertany al domini de la plana"));
        return false
    }
    c.setRequestHeader("Cache-Control", "no-cache");
    c.setRequestHeader("Pragma", "no-cache");
    c.onreadystatechange = function() {
        if (c.readyState == 4) {
            if (c.status == 200) {
                if (c.responseText != null) {
                    proces_response(c.responseXML)
                } else {
                    alert(unescapeHTML("S'ha produ&iuml;t un error recuperant el fitxer de configuraci&oacute;"));
                    return false
                }
            } else {
                alert(unescapeHTML("S'ha produ&iuml;t un error carregant el fitxer de configuraci&oacute;"));
                return false
            }
        }
    };
    c.send(null)
}

function proces_response(d) {
    var b = d;
    var a = b.getElementsByTagName("loginobert")[0];
    var c = a.childNodes[0].nodeValue;
    if (c == "true") {
        return true
    } else {
        alert(unescapeHTML("Campus tancat temporalment. Perdoneu les mol&egrave;sties"));
        return false
    }
}

function unescapeHTML(a) {
    var b = document.createElement("DIV");
    b.innerHTML = a;
    if (b.innerText) {
        return b.innerText
    }
    return b.textContent
}

function Unaccent(g) {
    var b = "",
        d, f, e;
    for (var c = 0, a = g.length; c < a; c++) {
        e = g.charAt(c);
        d = g.charCodeAt(c);
        if (d >= 192 && d <= 255) {
            f = Unaccent.map.charAt(d - 192);
            if (f !== " ") {
                e = f
            }
        }
        b += e
    }
    return (b)
}
Unaccent.map = "AAAAAAACEEEEIIIIDNOOOOO OUUUUY  aaaaaaaceeeeiiiionooooo  uuuuy y";
$(document).ready(function() {
    $("[name='publications']").submit(function() {
        var a = $(this).find("input[name='mask']");
        if (a.val()) {
            a.val(Unaccent(a.val()))
        }
    });
    $("[name='projects']").submit(function() {
        var a = $(this).find("input[name='mask']");
        if (a.val()) {
            a.val(Unaccent(a.val()))
        }
    })
});
$(document).ready(function() {
    var b = getURLParameter("utm_medium");
    var d = getURLParameter("utm_source");
    var g = getURLParameter("utm_campaign");
    var m = getURLParameter("utm_content");
    var h = getURLParameter("utm_term");
    var a = "";
    if (b != null && b != "") {
        a = "utm_medium=" + b + "|"
    }
    if (d != null && d != "") {
        a += "utm_source=" + d + "|"
    }
    if (g != null && g != "") {
        a += "utm_campaign=" + g + "|"
    }
    if (m != null && m != "") {
        a += "utm_content=" + m + "|"
    }
    if (h != null && h != "") {
        a += "utm_term=" + h + "|"
    }
    console.info(a);
    if (a != "") {
        var f = new Date();
        f.setTime(f.getTime() + (30 * 24 * 60 * 60 * 1000));
        var e = ";expires=" + f.toGMTString();
        var o = "EUOC_paramsPersisted=" + encodeURIComponent(a) + e + ";path=/;domain=.uoc.edu";
        document.cookie = o;
        console.info(o)
    } else {
        var p = readCookie("EUOC_paramsPersisted");
        if (p != null) {
            var c = decodeURIComponent(p);
            if (b == null || b == "") {
                b = getParamCookieValue(c, "utm_medium")
            }
            if (d == null || d == "") {
                d = getParamCookieValue(c, "utm_source")
            }
            if (g == null || g == "") {
                g = getParamCookieValue(c, "utm_campaign")
            }
            if (m == null || m == "") {
                m = getParamCookieValue(c, "utm_content")
            }
            if (h == null || h == "") {
                h = getParamCookieValue(c, "utm_term")
            }
        }
    }
    var j = $("#linkFormulariInformacio").attr("href");
    var l = $("#link310Matricula").attr("href");
    if (b != null && b != "") {
        $("#i_pro_medium").val(b);
        if (j != null) {
            j = canvisValorParametre(j, "i_pro_medium", b)
        }
        if (l != null) {
            l = canvisValorParametre(l, "i_pro_medium", b)
        }
    }
    if (d != null && d != "") {
        $("#i_pro_source").val(d);
        if (j != null) {
            j = canvisValorParametre(j, "i_pro_source", d)
        }
        if (l != null) {
            l = canvisValorParametre(l, "i_pro_source", d)
        }
    }
    if (g != null && g != "") {
        $("#i_pro_campaing").val(g);
        if (j != null) {
            j = canvisValorParametre(j, "i_pro_campaing", g)
        }
        if (l != null) {
            l = canvisValorParametre(l, "i_pro_campaing", g)
        }
    }
    if (m != null && m != "") {
        $("#i_pro_content").val(m);
        if (j != null) {
            j = canvisValorParametre(j, "i_pro_content", m)
        }
        if (l != null) {
            l = canvisValorParametre(l, "i_pro_content", m)
        }
    }
    if (h != null && h != "") {
        $("#i_pro_keyword").val(h);
        if (j != null) {
            j = canvisValorParametre(j, "i_pro_keyword", h)
        }
        if (l != null) {
            l = canvisValorParametre(l, "i_pro_keyword", h)
        }
    }
    if (j != null) {
        $("#linkFormulariInformacio").attr("href", j)
    }
    if (l != null) {
        $("#link310Matricula").attr("href", l)
    }
});

function canvisValorParametre(d, c, b) {
    if (d.indexOf(c) >= 0) {
        var e = d.indexOf(c);
        var a = d.indexOf("&", e + 1);
        d = d.substring(0, e) + c + "=" + b + d.substring(a)
    } else {
        d = d + (d.indexOf("?") >= 0 ? "&" : "?") + c + "=" + b
    }
    return d
}

function getURLParameter(a) {
    return decodeURI((RegExp(a + "=(.+?)(&|$)").exec(location.search) || [, ""])[1])
}

function readCookie(b) {
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length)
        }
    }
    return null
}

function getParamCookieValue(e, f) {
    var b = f + "=";
    var a = e.split("|");
    for (var d = 0; d < a.length; d++) {
        var g = a[d];
        while (g.charAt(0) == " ") {
            g = g.substring(1, g.length)
        }
        if (g.indexOf(b) == 0) {
            return g.substring(b.length, g.length)
        }
    }
    return null
}

function cerca_logobar() {
    var cercador_logobar = undefined;
    try {
        var cercador_logobar_str = "top.logobar";
        cercador_logobar = eval(cercador_logobar_str);
        var fi = 0,
            openers = "top.opener";
        while (!fi) {
            if (cercador_logobar == undefined) {
                if (eval(openers) != undefined) {
                    openers += ".top.opener";
                    cercador_logobar_str = "top.opener." + cercador_logobar_str;
                    cercador_logobar = eval(cercador_logobar_str)
                } else {
                    fi = 1
                }
            } else {
                fi = 1
            }
        }
    } catch (e) {
        cercador_logobar = undefined
    }
    return cercador_logobar
}

function draw_button() {
    if (cerca_logobar() != undefined) {
        document.write('<center><a href="javascript:doTrenCampus(\'PIOLIN.MATALTA&pEtapa=identificacion&institucio=FC&pClienteInstit=&pEntidad=1&campanya=&pCodGrup=&pIndComunidad=S\');" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    } else {
        document.write('<center><a id="link310Matricula" href="" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    }
}

function draw_button_po() {
    if (cerca_logobar() != undefined) {
        document.write('<center><a href="javascript:doTrenCampus(\'PIOLIN.MATALTA&pEtapa=identificacion&institucio=PO&pClienteInstit=90018&pEntidad=1&campanya=SemOct14Cat&pCodGrup=SOCT14C&pIndComunidad=S\');" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    } else {
        document.write('<center><a id="link310Matricula" href="https://cv.uoc.edu/tren/trenacc/web/MARQUETING.SEGUIMENT/form_xml.inici?i_tipus=A&idioma=CAT&i_ambit=167" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    }
}

function draw_button_escoles() {
    if (cerca_logobar() != undefined) {
        document.write('<center><a href="javascript:doTrenCampus(\'PIOLIN.MATALTA&pEtapa=identificacion&institucio=EL&pClienteInstit=910022&pEntidad=1&campanya=EL20131CAT&pCodGrup=EL20131C&pIndComunidad=S\');" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    } else {
        document.write('<center><a id="link310Matricula" href="https://cv.uoc.edu/tren/trenacc/web/MARQUETING.SEGUIMENT/form_xml.inici?i_tipus=A&idioma=CAT&i_ambit=190" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    }
}

function draw_button_bs() {
    if (cerca_logobar() != undefined) {
        document.write('<center><a href="javascript:doTrenCampus(\'PIOLIN.MATALTA&pEtapa=identificacion&institucio=BS&pClienteInstit=&pEntidad=1&campanya=&pCodGrup=&pIndComunidad=S\');" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    } else {
        document.write('<center><a id="link310Matricula" href="" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    }
}

function draw_button_ateneu() {
    if (cerca_logobar() != undefined) {
        document.write('<center><a href="javascript:doTrenCampus(\'PIOLIN.MATALTA&pEtapa=identificacion&institucio=AT&pClienteInstit=950001&pEntidad=1&campanya=ATENEU20141&pCodGrup=AT20141C&pIndComunidad=S\');" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    } else {
        document.write('<center><a id="link310Matricula" href="https://cv.uoc.edu/tren/trenacc/web/MARQUETING.SEGUIMENT/form_xml.inici?i_tipus=A&idioma=CAT&i_ambit=209" target="_self" class="textomainGen"><img border="0" src="/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg" onmouseover="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online-over.jpg\'" onmouseout="this.src=\'/portal/system/modules/edu.uoc.web.presentations/resources/images/structure/matricula_online.jpg\'" alt="mat_online" width="177" height="69" resource_type="image"></a></center>')
    }
}

function obtenirSessioMatricula() {
    return obtNumSes()
}

function doTrenCampus(e, j, h) {
    var d = new String("");
    var b = new Number(arguments.length);
    var l = new String("750");
    var f = new String("450");
    if (b < 3) {
        j = new String(l);
        h = new String(f)
    }
    var a = obtenirSessioMatricula();
    if (a == undefined || a == "") {
        self.location = "https://cv.uoc.edu/tren/trenacc/web/MARQUETING.SEGUIMENT/form_xml.inici?i_tipus=A&idioma=CAT&i_ambit=167"
    } else {
        d = "https://";
        var c = d + "cv.uoc.edu/tren/trenacc?s=" + a + "&modul=" + e;
        if (b == "2") {
            self.location = "/tren/trenacc?s=" + a + "&modul=" + e
        } else {
            var g = window.open(c, getWinNm(), "width=" + j + ",height=" + h + ",resizable=yes,menubar=yes,scrollbars=yes,status=yes")
        }
    }
}

function doTren(e, j, h) {
    var d = new String("");
    var b = new Number(arguments.length);
    var l = new String("750");
    var f = new String("450");
    if (b < 3) {
        j = new String(l);
        h = new String(f)
    }
    d = "https://";
    if (e == "GAT_EXP.CONSMATASIG" || e == "GAT_EXPIB.CONSMATASIG") {
        d = "//"
    }
    var a = obtNumSes();
    var c = d + location.hostname + "/tren/trenacc?s=" + a + "&modul=" + e;
    if (b == "2") {
        self.location = d + location.hostname + "/tren/trenacc?s=" + a + "&modul=" + e
    } else {
        var g = window.open(c, getWinNm(), "width=" + j + ",height=" + h + ",menubar=yes,resizable=yes,scrollbars=yes,status=yes")
    }
}

function getWinNm() {
    var b = new Date();
    var d = new String(b.getHours());
    var e = new String(b.getMinutes());
    var f = new String(b.getSeconds());
    var a = new String(b.getMilliseconds());
    var c = d + e + f + a;
    return c
}
var xhrcas = new XMLHttpRequest();

function doLoginOnLoad(a) {
    if (xhrcas.status == 200 && xhrcas.responseText.indexOf("FagjeHat") > -1) {
        a.elements.renew.value = "false";
        a.submit()
    } else {
        if (xhrcas.status == 200 && xhrcas.responseText.indexOf("DyRodiv5") > -1) {
            var b = a.elements.langId.value;
            doLoginAlert(b)
        } else {
            a.elements.renew.value = "true";
            a.submit()
        }
    }
}

function doLoginAlert(c) {
    var b = new Array();
    b.a = "El nom d'usuari o la contrasenya són incorrectes.\nSi us plau, torneu-los a escriure.";
    b.b = "El nombre de usuario o la contraseña son incorrectos.\nPor favor, escríbalos de nuevo.";
    b.c = "Your username or password is not correct.\nPlease try again.";
    b.d = "Le pseudonyme ou le mot de passe est incorrect.\nS'il vous plait, réécrivez-les.";
    var a = b[c];
    if (a == null || a === undefined) {
        a = b.a
    }
    alert(a)
}

function doLoginOnError(a) {
    a.elements.renew.value = "true";
    a.submit()
}

function doLogin(a) {
    try {
        if (a == null) {
            throw "form not found"
        }
        var c = a.action;
        if (c == null || c === undefined || !c.match(/^http/i)) {
            throw "action not found"
        }
        var d = a.elements.username.value;
        var h = a.elements.password.value;
        var g = a.elements.langId.value;
        var j = a.elements.appId.value;
        var f = a.elements.service.value;
        var e = "auto=true&renew=true";
        e += "&username=" + encodeURIComponent(d);
        e += "&password=" + encodeURIComponent(h);
        e += "&langId=" + encodeURIComponent(g);
        e += "&appId=" + encodeURIComponent(j);
        xhrcas.abort();
        xhrcas.open("POST", c, true);
        xhrcas.withCredentials = true;
        xhrcas.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhrcas.onload = function() {
            doLoginOnLoad(a)
        };
        xhrcas.onerror = function() {
            doLoginOnError(a)
        };
        xhrcas.send(e);
        return false
    } catch (b) {
        return true
    }
}

function xml2json(a, c) {
    var d = {
        toObj: function(f) {
            var l = {};
            if (f.nodeType == 1) {
                if (f.attributes.length) {
                    for (var j = 0; j < f.attributes.length; j++) {
                        l["@" + f.attributes[j].nodeName] = (f.attributes[j].nodeValue || "").toString()
                    }
                }
                if (f.firstChild) {
                    var e = 0,
                        h = 0,
                        g = false;
                    for (var m = f.firstChild; m; m = m.nextSibling) {
                        if (m.nodeType == 1) {
                            g = true
                        } else {
                            if (m.nodeType == 3 && m.nodeValue.match(/[^ \f\n\r\t\v]/)) {
                                e++
                            } else {
                                if (m.nodeType == 4) {
                                    h++
                                }
                            }
                        }
                    }
                    if (g) {
                        if (e < 2 && h < 2) {
                            d.removeWhite(f);
                            for (var m = f.firstChild; m; m = m.nextSibling) {
                                if (m.nodeType == 3) {
                                    l["#text"] = d.escape(m.nodeValue)
                                } else {
                                    if (m.nodeType == 4) {
                                        l["#cdata"] = d.escape(m.nodeValue)
                                    } else {
                                        if (l[m.nodeName]) {
                                            if (l[m.nodeName] instanceof Array) {
                                                l[m.nodeName][l[m.nodeName].length] = d.toObj(m)
                                            } else {
                                                l[m.nodeName] = [l[m.nodeName], d.toObj(m)]
                                            }
                                        } else {
                                            l[m.nodeName] = d.toObj(m)
                                        }
                                    }
                                }
                            }
                        } else {
                            if (!f.attributes.length) {
                                l = d.escape(d.innerXml(f))
                            } else {
                                l["#text"] = d.escape(d.innerXml(f))
                            }
                        }
                    } else {
                        if (e) {
                            if (!f.attributes.length) {
                                l = d.escape(d.innerXml(f))
                            } else {
                                l["#text"] = d.escape(d.innerXml(f))
                            }
                        } else {
                            if (h) {
                                if (h > 1) {
                                    l = d.escape(d.innerXml(f))
                                } else {
                                    for (var m = f.firstChild; m; m = m.nextSibling) {
                                        l["#cdata"] = d.escape(m.nodeValue)
                                    }
                                }
                            }
                        }
                    }
                }
                if (!f.attributes.length && !f.firstChild) {
                    l = null
                }
            } else {
                if (f.nodeType == 9) {
                    l = d.toObj(f.documentElement)
                } else {
                    alert("unhandled node type: " + f.nodeType)
                }
            }
            return l
        },
        toJson: function(p, g, l) {
            var j = g ? ('"' + g + '"') : "";
            if (p instanceof Array) {
                for (var h = 0, q = p.length; h < q; h++) {
                    p[h] = d.toJson(p[h], "", l + "\t")
                }
                j += (g ? ":[" : "[") + (p.length > 1 ? ("\n" + l + "\t" + p.join(",\n" + l + "\t") + "\n" + l) : p.join("")) + "]"
            } else {
                if (p == null) {
                    j += (g && ":") + "null"
                } else {
                    if (typeof(p) == "object") {
                        var f = [];
                        for (var e in p) {
                            f[f.length] = d.toJson(p[e], e, l + "\t")
                        }
                        j += (g ? ":{" : "{") + (f.length > 1 ? ("\n" + l + "\t" + f.join(",\n" + l + "\t") + "\n" + l) : f.join("")) + "}"
                    } else {
                        if (typeof(p) == "string") {
                            j += (g && ":") + '"' + p.toString() + '"'
                        } else {
                            j += (g && ":") + p.toString()
                        }
                    }
                }
            }
            return j
        },
        innerXml: function(g) {
            var f = "";
            if ("innerHTML" in g) {
                f = g.innerHTML
            } else {
                var e = function(o) {
                    var l = "";
                    if (o.nodeType == 1) {
                        l += "<" + o.nodeName;
                        for (var j = 0; j < o.attributes.length; j++) {
                            l += " " + o.attributes[j].nodeName + '="' + (o.attributes[j].nodeValue || "").toString() + '"'
                        }
                        if (o.firstChild) {
                            l += ">";
                            for (var m = o.firstChild; m; m = m.nextSibling) {
                                l += e(m)
                            }
                            l += "</" + o.nodeName + ">"
                        } else {
                            l += "/>"
                        }
                    } else {
                        if (o.nodeType == 3) {
                            l += o.nodeValue
                        } else {
                            if (o.nodeType == 4) {
                                l += "<![CDATA[" + o.nodeValue + "]]>"
                            }
                        }
                    }
                    return l
                };
                for (var h = g.firstChild; h; h = h.nextSibling) {
                    f += e(h)
                }
            }
            return f
        },
        escape: function(e) {
            return e.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, "\\n").replace(/[\r]/g, "\\r")
        },
        removeWhite: function(g) {
            g.normalize();
            for (var h = g.firstChild; h;) {
                if (h.nodeType == 3) {
                    if (!h.nodeValue.match(/[^ \f\n\r\t\v]/)) {
                        var f = h.nextSibling;
                        g.removeChild(h);
                        h = f
                    } else {
                        h = h.nextSibling
                    }
                } else {
                    if (h.nodeType == 1) {
                        d.removeWhite(h);
                        h = h.nextSibling
                    } else {
                        h = h.nextSibling
                    }
                }
            }
            return g
        }
    };
    if (a.nodeType == 9) {
        a = a.documentElement
    }
    var b = d.toJson(d.toObj(d.removeWhite(a)), a.nodeName, "\t");
    return "{\n" + c + (c ? b.replace(/\t/g, c) : b.replace(/\t|\n/g, "")) + "\n}"
}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function(a, b) {
    if (typeof exports === "object" && exports) {
        b(exports)
    } else {
        var c = {};
        b(c);
        if (typeof define === "function" && define.amd) {
            define(c)
        } else {
            a.Mustache = c
        }
    }
}(this, function(a) {
    var f = /\s*/;
    var p = /\s+/;
    var m = /\S/;
    var j = /\s*=/;
    var r = /\s*\}/;
    var w = /#|\^|\/|>|\{|&|=|!/;
    var g = RegExp.prototype.test;

    function v(C, B) {
        return g.call(C, B)
    }

    function h(B) {
        return !v(m, B)
    }
    var y = Object.prototype.toString;
    var o = Array.isArray || function(B) {
        return y.call(B) === "[object Array]"
    };

    function b(B) {
        return typeof B === "function"
    }

    function e(B) {
        return B.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    var d = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };

    function q(B) {
        return String(B).replace(/[&<>"'\/]/g, function(C) {
            return d[C]
        })
    }

    function u(B) {
        if (!o(B) || B.length !== 2) {
            throw new Error("Invalid tags: " + B)
        }
        return [new RegExp(e(B[0]) + "\\s*"), new RegExp("\\s*" + e(B[1]))]
    }

    function A(R, H) {
        H = H || a.tags;
        R = R || "";
        if (typeof H === "string") {
            H = H.split(p)
        }
        var L = u(H);
        var D = new x(R);
        var J = [];
        var I = [];
        var G = [];
        var S = false;
        var Q = false;

        function P() {
            if (S && !Q) {
                while (G.length) {
                    delete I[G.pop()]
                }
            } else {
                G = []
            }
            S = false;
            Q = false
        }
        var E, C, K, M, F, B;
        while (!D.eos()) {
            E = D.pos;
            K = D.scanUntil(L[0]);
            if (K) {
                for (var N = 0, O = K.length; N < O; ++N) {
                    M = K.charAt(N);
                    if (h(M)) {
                        G.push(I.length)
                    } else {
                        Q = true
                    }
                    I.push(["text", M, E, E + 1]);
                    E += 1;
                    if (M === "\n") {
                        P()
                    }
                }
            }
            if (!D.scan(L[0])) {
                break
            }
            S = true;
            C = D.scan(w) || "name";
            D.scan(f);
            if (C === "=") {
                K = D.scanUntil(j);
                D.scan(j);
                D.scanUntil(L[1])
            } else {
                if (C === "{") {
                    K = D.scanUntil(new RegExp("\\s*" + e("}" + H[1])));
                    D.scan(r);
                    D.scanUntil(L[1]);
                    C = "&"
                } else {
                    K = D.scanUntil(L[1])
                }
            }
            if (!D.scan(L[1])) {
                throw new Error("Unclosed tag at " + D.pos)
            }
            F = [C, K, E, D.pos];
            I.push(F);
            if (C === "#" || C === "^") {
                J.push(F)
            } else {
                if (C === "/") {
                    B = J.pop();
                    if (!B) {
                        throw new Error('Unopened section "' + K + '" at ' + E)
                    }
                    if (B[1] !== K) {
                        throw new Error('Unclosed section "' + B[1] + '" at ' + E)
                    }
                } else {
                    if (C === "name" || C === "{" || C === "&") {
                        Q = true
                    } else {
                        if (C === "=") {
                            L = u(H = K.split(p))
                        }
                    }
                }
            }
        }
        B = J.pop();
        if (B) {
            throw new Error('Unclosed section "' + B[1] + '" at ' + D.pos)
        }
        return z(c(I))
    }

    function c(G) {
        var D = [];
        var F, C;
        for (var E = 0, B = G.length; E < B; ++E) {
            F = G[E];
            if (F) {
                if (F[0] === "text" && C && C[0] === "text") {
                    C[1] += F[1];
                    C[3] = F[3]
                } else {
                    D.push(F);
                    C = F
                }
            }
        }
        return D
    }

    function z(G) {
        var I = [];
        var F = I;
        var H = [];
        var D, E;
        for (var C = 0, B = G.length; C < B; ++C) {
            D = G[C];
            switch (D[0]) {
                case "#":
                case "^":
                    F.push(D);
                    H.push(D);
                    F = D[4] = [];
                    break;
                case "/":
                    E = H.pop();
                    E[5] = D[2];
                    F = H.length > 0 ? H[H.length - 1][4] : I;
                    break;
                default:
                    F.push(D)
            }
        }
        return I
    }

    function x(B) {
        this.string = B;
        this.tail = B;
        this.pos = 0
    }
    x.prototype.eos = function() {
        return this.tail === ""
    };
    x.prototype.scan = function(D) {
        var C = this.tail.match(D);
        if (C && C.index === 0) {
            var B = C[0];
            this.tail = this.tail.substring(B.length);
            this.pos += B.length;
            return B
        }
        return ""
    };
    x.prototype.scanUntil = function(D) {
        var C = this.tail.search(D),
            B;
        switch (C) {
            case -1:
                B = this.tail;
                this.tail = "";
                break;
            case 0:
                B = "";
                break;
            default:
                B = this.tail.substring(0, C);
                this.tail = this.tail.substring(C)
        }
        this.pos += B.length;
        return B
    };

    function t(C, B) {
        this.view = C == null ? {} : C;
        this.cache = {
            ".": this.view
        };
        this.parent = B
    }
    t.prototype.push = function(B) {
        return new t(B, this)
    };
    t.prototype.lookup = function(B) {
        var E;
        if (B in this.cache) {
            E = this.cache[B]
        } else {
            var D = this;
            while (D) {
                if (B.indexOf(".") > 0) {
                    E = D.view;
                    var F = B.split("."),
                        C = 0;
                    while (E != null && C < F.length) {
                        E = E[F[C++]]
                    }
                } else {
                    E = D.view[B]
                }
                if (E != null) {
                    break
                }
                D = D.parent
            }
            this.cache[B] = E
        }
        if (b(E)) {
            E = E.call(this.view)
        }
        return E
    };

    function s() {
        this.cache = {}
    }
    s.prototype.clearCache = function() {
        this.cache = {}
    };
    s.prototype.parse = function(D, C) {
        var B = this.cache;
        var E = B[D];
        if (E == null) {
            E = B[D] = A(D, C)
        }
        return E
    };
    s.prototype.render = function(E, B, D) {
        var F = this.parse(E);
        var C = (B instanceof t) ? B : new t(B);
        return this.renderTokens(F, C, D, E)
    };
    s.prototype.renderTokens = function(J, B, H, L) {
        var F = "";
        var N = this;

        function C(O) {
            return N.render(O, B, H)
        }
        var D, K;
        for (var G = 0, I = J.length; G < I; ++G) {
            D = J[G];
            switch (D[0]) {
                case "#":
                    K = B.lookup(D[1]);
                    if (!K) {
                        continue
                    }
                    if (o(K)) {
                        for (var E = 0, M = K.length; E < M; ++E) {
                            F += this.renderTokens(D[4], B.push(K[E]), H, L)
                        }
                    } else {
                        if (typeof K === "object" || typeof K === "string") {
                            F += this.renderTokens(D[4], B.push(K), H, L)
                        } else {
                            if (b(K)) {
                                if (typeof L !== "string") {
                                    throw new Error("Cannot use higher-order sections without the original template")
                                }
                                K = K.call(B.view, L.slice(D[3], D[5]), C);
                                if (K != null) {
                                    F += K
                                }
                            } else {
                                F += this.renderTokens(D[4], B, H, L)
                            }
                        }
                    }
                    break;
                case "^":
                    K = B.lookup(D[1]);
                    if (!K || (o(K) && K.length === 0)) {
                        F += this.renderTokens(D[4], B, H, L)
                    }
                    break;
                case ">":
                    if (!H) {
                        continue
                    }
                    K = b(H) ? H(D[1]) : H[D[1]];
                    if (K != null) {
                        F += this.renderTokens(this.parse(K), B, H, K)
                    }
                    break;
                case "&":
                    K = B.lookup(D[1]);
                    if (K != null) {
                        F += K
                    }
                    break;
                case "name":
                    K = B.lookup(D[1]);
                    if (K != null) {
                        F += a.escape(K)
                    }
                    break;
                case "text":
                    F += D[1];
                    break
            }
        }
        return F
    };
    a.name = "mustache.js";
    a.version = "0.8.1";
    a.tags = ["{{", "}}"];
    var l = new s();
    a.clearCache = function() {
        return l.clearCache()
    };
    a.parse = function(C, B) {
        return l.parse(C, B)
    };
    a.render = function(D, B, C) {
        return l.render(D, B, C)
    };
    a.to_html = function(E, C, D, F) {
        var B = a.render(E, C, D);
        if (b(F)) {
            F(B)
        } else {
            return B
        }
    };
    a.escape = q;
    a.Scanner = x;
    a.Context = t;
    a.Writer = s
}));