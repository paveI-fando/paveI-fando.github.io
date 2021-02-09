/*1.4.6*/
function DopPlayer() {
    function e() {
        p("loadingImg").style.display = "block"
    }

    function t() {
        p("loadingImg").style.display = "none"
    }

    function o(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)"), n = t.exec(location.search);
        return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }

    var l, a, s, r, c = this, y = c.document, d = {}, u = !1, h = !1, p = function (e) {
        return y.getElementById(e)
    };
    y.addEventListener("touchmove", function (e) {
        e.preventDefault()
    }, {passive: !1});
    var g = function () {
        this.OnError = function () {
        }, this.OnLoadingStart = function () {
            e()
        }, this.OnLoadingEnd = function () {
            t()
        }, this.OnStartButtonShow = function () {
            h = !0
        }, this.OnStartButtonClose = function () {
            h = !1
        }, this.OnSlideTransitionEnd = function (e) {
        }, this.OnSlideChange = function (e) {
            f.HandleSlideChange(e)
        }, this.OnMovToNxtAnim = function () {
        }, this.OnMovToPrvAnim = function () {
        }, this.OnPlayingStart = function () {
            u = !0, f.HandlePlayAndPause(!0)
        }, this.OnPlayingEnd = function () {
            u = !1, f.HandlePlayAndPause(!1)
        }, this.OnProgressChange = function (e) {
            f.HandleProgress(e)
        }, this.OnSlideEnd = function (e, t) {
        }, this.OnClick = function (e) {
        }, this.OnSldOutlineLoad = function (e) {
        }, this.OnMediaPlay = function (e, t) {
        }, this.OnMediaPause = function (e) {
        }, this.InitaliseSettings = function (e) {
            d = e, n()
        }
    };
    Pcl = function () {
        function e() {
            a && (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) && (c.iabho = y.createElement("div"), y.body.appendChild(c.iabho), c.iabho.style.height = "1000px", setTimeout(function () {
                y.body.removeChild(c.iabho)
            }, 100), c.scrollTo(0, 1))
        }

        function t(e) {
            var t = e.toString();
            return t.indexOf("e") > 0 ? Math.floor(e) : e
        }

        function n(e) {
            var t = ("" + d.TotalSlides).length, n = ("" + e).length;
            return n === t ? e : n === t - 1 ? "0" + e : n === t - 2 ? "00" + e : e
        }

        this.r = function () {
            if (e(), navigator.userAgent.match(/iPad/i)) if (1 === c.orc && 1 === s) c.orc = 0; else if (1 === s) return;
            var n, i, o, r = c.innerWidth, y = c.innerHeight, u = p("player"), h = 50, g = 0;
            d.MaxScale > 0 ? (n = y > d.Height * d.MaxScale ? d.Height * d.MaxScale : y, i = r > d.Width * d.MaxScale ? d.Width * d.MaxScale : r) : (n = y, i = r), "block" === p("panel").style.display && (g = 250), o = i - g < d.Width || n - h < d.Height ? (d.Width - (i - g)) / d.Width < (d.Height - (n - h)) / d.Height ? 1 - (d.Height - (n - h)) / d.Height : 1 - (d.Width - (i - g)) / d.Width : (i - g - d.Width) / d.Width > (n - h - d.Height) / d.Height ? 1 + (n - h - d.Height) / d.Height : 1 + (i - g - d.Width) / d.Width, l.SetScale(o), 0 === d.MaxScale && (i = g + d.Width * o), u.style.height = t(n) + "px", u.style.width = t(i) + "px", u.style.top = t((y - n) / 2) + "px", u.style.left = t((r - i) / 2) + "px";
            var f = p("resizer");
            f.style.top = 0, f.style.left = 0, f.style.webkitTransform = "scale(" + t(o) + ")", f.style.MozTransform = "scale(" + t(o) + ")", f.style.OTransform = "scale(" + t(o) + ")", f.style.msTransform = "scale(" + t(o) + ")";
            var m = p("contentHolder");
            m.style.height = t(d.Height * o) + "px", m.style.width = t(d.Width * o) + "px";
            var v = t(g + (i - g - o * d.Width) / 2), L = t((n - h - o * d.Height) / 2);
            m.style.marginLeft = v + "px", m.style.marginTop = L + "px";
            var x = p("loadingImg");
            x.style.height = t(d.Height * o) + "px", x.style.width = t(d.Width * o) + "px", x.style.marginTop = L + "px", x.style.marginLeft = v + "px";
            var b = p("panel");
            b.style.height = t(n - h) + "px", p("noteDisplay").style.height = t(n - h - 40) + "px", p("buttonDiv").style.left = t(i / 2 - 25) + "px";
            var w = (i / 2 - 70 - 95) / 200;
            w = w > .8 ? .8 : w, w = .33 > w ? .33 : w;
            var M = p("progress");
            M.style.webkitTransform = "scale(" + t(w) + ",1)", M.style.MozTransform = "scale(" + t(w) + ",1)", M.style.OTransform = "scale(" + t(w) + ",1)", M.style.msTransform = "scale(" + t(w) + ",1)", M.parentNode.style.width = t(200 * w) + "px";
            var T = p("notesButton").style, C = p("status").style, P = p("time").style, S = p("logo").style;
            i > 700 ? (P.opacity = 1, C.opacity = 1, S.display = "block", M.style.opacity = 1, null !== b && (T.right = "65px", T.opacity = 1)) : (P.opacity = 0, S.display = "none", M.style.opacity = 0, C.opacity = 1, null !== b && (T.opacity = 1), 370 > i && (null !== b && (T.opacity = 0), a || (C.opacity = 0)));
            var H = p("play");
            if (null !== H) {
                var D = H.style;
                D.height = t(o * d.Height) + "px", D.width = t(o * d.Width) + "px"
            }
            var I = p("slideNote"), k = 10;
            I.style.height = parseInt(b.style.height) - k + "px", p("noteDisplay").style.height = parseInt(b.style.height) - k - 55 + "px"
        }, this.HandleProgress = function (e) {
            var t = Math.floor(e / 1e3 % 60), n = Math.floor(e / 1e3 / 60 % 60);
            10 > t && (t = "0" + t), 10 > n && (n = "0" + n), p("times").innerHTML = n + ":" + t;
            var i = 200 / d.TotalTime * e;
            i > 200 && (i = 200), p("Bar").style.width = i + "px"
        }, this.n = function (e) {
            var t = l.GetFormatedNotes(e), n = p("noteDisplay");
            n.innerHTML = "";
            for (var i = t.length, o = 0; i > o; o++) {
                var a = t[o], s = a.level, r = a.words, c = y.createElement("p");
                c.style.marginLeft = 10 * s + "px";
                for (var d = r.length, u = 0; d > u; u++) {
                    var h = r[u], g = h.text, f = y.createElement("span");
                    f.innerHTML = g, h.bold && (f.style.fontWeight = "bold"), h.italic && (f.style.fontStyle = "italic"), h.underline && h.line_through ? f.style.textDecoration = "line-through underline" : h.line_through ? f.style.textDecoration = "line-through" : h.underline && (f.style.textDecoration = "underline"), c.appendChild(f)
                }
                n.appendChild(c)
            }
        }, this.HandleSlideChange = function (e) {
            switch (e) {
                case-1:
                    break;
                case 0:
                    break;
                default:
                    p("statusCurrent").value = n(e), d.CurrentSlide = e, f.n(e)
            }
        }, this.HandlePlayAndPause = function (e) {
            var t = p("playB");
            switch (e) {
                case!0:
                    t.style.backgroundPosition = "-99px 0px";
                    break;
                case!1:
                    t.style.backgroundPosition = "-1px 0px"
            }
        }
    };
    var f = new Pcl;
    var v = o("step"), L = o("slide");
    v = "" === v ? 0 : v, L = "" === L ? 1 : L;
    var x = {
        playAnimationsOnLoad: !0,
        skipBlankSlide: !1,
        jumpTo: {step: v, playPrev: !0},
        disablePinchZoom: !1,
        dgradeAnim: !1,
        bcolor: r
    };
    l = new DopPresentation(new g, x), l.SetRPath("data/");
    try {
        y.createEvent("TouchEvent"), a = !0
    } catch (b) {
        a = !1
    }
    c.Presentation = l, c.Presentation.LoadPres("pres", L)
}

window.onload = DopPlayer;