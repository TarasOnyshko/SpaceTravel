!function () {
    "use strict"; var g = "https://www.omnicalculator.com";
    function t(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t); e && (r = r.filter(function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), a.push.apply(a, r)
        } return a
    }
    function e(n) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(o), !0).forEach(function (e) {
                var t, a, r; t = n, r = o[a = e], a in t ? Object.defineProperty(t, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[a] = r
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (e) { Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e)) })
        } return n
    }
    var p = Array.prototype.forEach,
        a = { visibility: "visible", opacity: 1 }, r = "8px", n = "#eee",
        b = { container: e({}, a, { display: "block", margin: 0, padding: 0, fontFamily: "Arial, sans-serif", fontSize: "16px", lineHeight: 1.15, color: "#666", boxSizing: "border-box", background: "#f9f9f9", border: "1px solid " + n, borderRadius: r }), header: e({}, a, { display: "block", padding: "20px 0", fontSize: "24px", textAlign: "center", background: n, borderTopLeftRadius: r, borderTopRightRadius: r }), iframe: e({}, a, { display: "block", border: "none", width: "100%", margin: 0, padding: 0 }), footer: e({}, a, { display: "block", marginTop: "16px", marginLeft: "16px", marginBottom: "20px", marginRight: "12px", textAlign: "right" }), link: e({}, a, { display: "inline", color: "#989c9d", textDecoration: "none", border: 0, boxShadow: "none" }), omniImageLink: e({}, { display: "inline-block", textIndent: "100%", whiteSpace: "nowrap", overflow: "hidden" }, { width: "51px", height: "13px", background: "url(https://cdn.omnicalculator.com/images/omni-db2e5a9837.svg)", backgroundRepeat: "no-repeat" }), logo: e({}, a, { width: "142px", height: "13px" }) }, y = "omni-calculator-loading", l = "omni-calculator-loaded";
    function h(t, a) { Object.keys(a).forEach(function (e) { t.style[e] = a[e] }) }
    function v(e) { return e.getElementsByClassName("omni-calculator-header")[0] }
    function w(e) { return e.getElementsByClassName("omni-calculator-footer")[0] }
    !function (e, d) {
        if (!e.OmniC) {
            var t, u = 0, f = /^\d+$/,
                a = function () { var e = d.getElementsByClassName("omni-calculator"); p.call(e, r) }, m = function (e, t) { return e.substring(0, t.length) === t };
            t = function () { e.addEventListener("message", n, !1), a() }, "loading" !== d.readyState ? t() : d.addEventListener("DOMContentLoaded", t), e.OmniC = e.OmniC || { parse: a }
        }
        function r(e) {
            if (!e.hasAttribute("data-parsed")) {
                var t = v(e), a = w(e); if (a && t) {
                    var r = e.getAttribute("data-calculator"); if (r) {
                        var n = a.getElementsByTagName("a"); p.call(n, function (e) { var t; (t = e).target || (t.target = "_blank") }); var o = Array.prototype.some.call(n, function (e) { return m(e.href, "https://www.omnicalculator.com") }); 
                        e.style.width = "360px"; var i = e.getAttribute("data-version") || 1, c = ++u, l = d.createElement("iframe"); l.className = "omni-calculator-frame", l.setAttribute("data-calculator-id", "" + c), l.src = g + "/embed/" + r + "#id=" + c + "&hasLink=" + o + "&version=" + i, h(l, b.iframe), l.style.height = "0", e.insertBefore(l, a); var s = e.getAttribute("data-width"); s && (s.match(f) && (s += "px"), e.style.width = s), o || a.parentElement.removeChild(a), e.setAttribute("data-parsed", "1"), e.classList && e.classList.add(y)
                    }
                }
            }
        }
        function n(e) {
            if (e.origin === g) {
                var t, a, r, n, o = e.data; if (o) switch (o.type) {
                    case "CHANGE_HEIGHT": return a = (t = o).calculatorId, r = t.value, void ((n = c(a)) && (n.style.height = r + "px")); 
                    case "LOADED": return void function (e) {
                        var t = c(e.calculatorId), a = t.parentNode; if (!a) return;s
                        var r, n = a.getAttribute("data-currency"), o = a.getAttribute("data-config"); if (o) try { r = JSON.parse(o) } catch (e) { }
                        r = r || {}; var i = a.getAttribute("data-show-row-controls"); !function (e, t) { e.contentWindow.postMessage(t, g) }(t, { type: "CONFIG", config: r, currency: n, showRowControls: "false" !== i })
                    }(o); 
                    case "READY": return void function (e) { var t = e.parentNode, a = v(t), r = w(t); if (h(a, b.header), h(t, b.container), r) { h(r, b.footer); var n = r.getElementsByTagName("a"); p.call(n, function (e) { h(e, b.link) }); var o = r.getElementsByClassName("omni-calculator-img-link"); p.call(o, function (e) { h(e, b.omniImageLink) }); var i = r.getElementsByClassName("omni-calculator-logo"); p.call(i, function (e) { h(e, b.logo) }) } var c = t.getElementsByClassName("omni-calculator-placeholder"); p.call(c, function (e) { e.parentNode.removeChild(e) }), t.classList && (t.classList.remove(y), t.classList.add(l)) }(c(o.calculatorId))
                }
            }
        } function c(e) { return d.querySelector('.omni-calculator-frame[data-calculator-id="' + e + '"]') }
    }(window, document)
}();