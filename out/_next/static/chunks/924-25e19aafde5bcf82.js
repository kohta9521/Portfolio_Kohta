'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [924],
  {
    226: function (e, t, r) {
      r.d(t, {
        ZP: function () {
          return eP;
        },
      });
      var n,
        s,
        i,
        a,
        o,
        l,
        u,
        h,
        d,
        c,
        p = r(4136),
        f = {},
        g = 180 / Math.PI,
        m = Math.PI / 180,
        y = Math.atan2,
        v = /([A-Z])/g,
        b = /(left|right|width|margin|padding|x)/i,
        _ = /[\s,\(]\S/,
        w = {
          autoAlpha: 'opacity,visibility',
          scale: 'scaleX,scaleY',
          alpha: 'opacity',
        },
        x = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t,
          );
        },
        P = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t,
          );
        },
        O = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t,
          );
        },
        k = function (e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        S = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        A = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        C = function (e, t, r) {
          return (e.style[t] = r);
        },
        M = function (e, t, r) {
          return e.style.setProperty(t, r);
        },
        F = function (e, t, r) {
          return (e._gsap[t] = r);
        },
        I = function (e, t, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        E = function (e, t, r, n, s) {
          var i = e._gsap;
          (i.scaleX = i.scaleY = r), i.renderTransform(s, i);
        },
        V = function (e, t, r, n, s) {
          var i = e._gsap;
          (i[t] = r), i.renderTransform(s, i);
        },
        R = 'transform',
        T = R + 'Origin',
        j = function e(t, r) {
          var n = this,
            s = this.target,
            i = s.style;
          if (t in f && i) {
            if (((this.tfm = this.tfm || {}), 'transform' === t))
              return w.transform.split(',').forEach(function (t) {
                return e.call(n, t, r);
              });
            if (
              (~(t = w[t] || t).indexOf(',')
                ? t.split(',').forEach(function (e) {
                    return (n.tfm[e] = ee(s, e));
                  })
                : (this.tfm[t] = s._gsap.x ? s._gsap[t] : ee(s, t)),
              this.props.indexOf(R) >= 0)
            )
              return;
            s._gsap.svg &&
              ((this.svgo = s.getAttribute('data-svg-origin')),
              this.props.push(T, r, '')),
              (t = R);
          }
          (i || r) && this.props.push(t, r, i[t]);
        },
        z = function (e) {
          e.translate &&
            (e.removeProperty('translate'),
            e.removeProperty('scale'),
            e.removeProperty('rotate'));
        },
        q = function () {
          var e,
            t,
            r = this.props,
            n = this.target,
            s = n.style,
            i = n._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? (n[r[e]] = r[e + 2])
              : r[e + 2]
              ? (s[r[e]] = r[e + 2])
              : s.removeProperty(
                  '--' === r[e].substr(0, 2)
                    ? r[e]
                    : r[e].replace(v, '-$1').toLowerCase(),
                );
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg &&
              (i.renderTransform(),
              n.setAttribute('data-svg-origin', this.svgo || '')),
              ((e = d()) && e.isStart) || s[R] || (z(s), (i.uncache = 1));
          }
        },
        $ = function (e, t) {
          var r = { target: e, props: [], revert: q, save: j };
          return (
            e._gsap || p.p8.core.getCache(e),
            t &&
              t.split(',').forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        N = function (e, t) {
          var r = a.createElementNS
            ? a.createElementNS(
                (t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                e,
              )
            : a.createElement(e);
          return r.style ? r : a.createElement(e);
        },
        B = function e(t, r, n) {
          var s = getComputedStyle(t);
          return (
            s[r] ||
            s.getPropertyValue(r.replace(v, '-$1').toLowerCase()) ||
            s.getPropertyValue(r) ||
            (!n && e(t, D(r) || r, 1)) ||
            ''
          );
        },
        Y = 'O,Moz,ms,Ms,Webkit'.split(','),
        D = function (e, t, r) {
          var n = (t || u).style,
            s = 5;
          if (e in n && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            s-- && !(Y[s] + e in n);

          );
          return s < 0 ? null : (3 === s ? 'ms' : s >= 0 ? Y[s] : '') + e;
        },
        U = function () {
          'undefined' != typeof window &&
            window.document &&
            ((o = (a = window.document).documentElement),
            (u = N('div') || { style: {} }),
            N('div'),
            (T = (R = D(R)) + 'Origin'),
            (u.style.cssText =
              'border-width:0;line-height:0;position:absolute;padding:0'),
            (c = !!D('perspective')),
            (d = p.p8.core.reverting),
            (l = 1));
        },
        X = function e(t) {
          var r,
            n = N(
              'svg',
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg',
            ),
            s = this.parentNode,
            i = this.nextSibling,
            a = this.style.cssText;
          if (
            (o.appendChild(n),
            n.appendChild(this),
            (this.style.display = 'block'),
            t)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            s && (i ? s.insertBefore(this, i) : s.appendChild(this)),
            o.removeChild(n),
            (this.style.cssText = a),
            r
          );
        },
        W = function (e, t) {
          for (var r = t.length; r--; )
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
        },
        L = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (r) {
            t = X.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === X ||
              (t = X.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +W(e, ['x', 'cx', 'x1']) || 0,
                  y: +W(e, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Q = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && L(e));
        },
        G = function (e, t) {
          if (t) {
            var r = e.style;
            t in f && t !== T && (t = R),
              r.removeProperty
                ? (('ms' === t.substr(0, 2) || 'webkit' === t.substr(0, 6)) &&
                    (t = '-' + t),
                  r.removeProperty(t.replace(v, '-$1').toLowerCase()))
                : r.removeAttribute(t);
          }
        },
        Z = function (e, t, r, n, s, i) {
          var a = new p.Fo(e._pt, t, r, 0, 1, i ? A : S);
          return (e._pt = a), (a.b = n), (a.e = s), e._props.push(r), a;
        },
        H = { deg: 1, rad: 1, turn: 1 },
        J = { grid: 1, flex: 1 },
        K = function e(t, r, n, s) {
          var i,
            o,
            l,
            h,
            d = parseFloat(n) || 0,
            c = (n + '').trim().substr((d + '').length) || 'px',
            g = u.style,
            m = b.test(r),
            y = 'svg' === t.tagName.toLowerCase(),
            v = (y ? 'client' : 'offset') + (m ? 'Width' : 'Height'),
            _ = 'px' === s,
            w = '%' === s;
          return s === c || !d || H[s] || H[c]
            ? d
            : ('px' === c || _ || (d = e(t, r, n, 'px')),
              (h = t.getCTM && Q(t)),
              (w || '%' === c) && (f[r] || ~r.indexOf('adius')))
            ? ((i = h ? t.getBBox()[m ? 'width' : 'height'] : t[v]),
              (0, p.Pr)(w ? (d / i) * 100 : (d / 100) * i))
            : ((g[m ? 'width' : 'height'] = 100 + (_ ? c : s)),
              (o =
                ~r.indexOf('adius') || ('em' === s && t.appendChild && !y)
                  ? t
                  : t.parentNode),
              h && (o = (t.ownerSVGElement || {}).parentNode),
              (o && o !== a && o.appendChild) || (o = a.body),
              (l = o._gsap) &&
                w &&
                l.width &&
                m &&
                l.time === p.xr.time &&
                !l.uncache)
            ? (0, p.Pr)((d / l.width) * 100)
            : ((w || '%' === c) &&
                !J[B(o, 'display')] &&
                (g.position = B(t, 'position')),
              o === t && (g.position = 'static'),
              o.appendChild(u),
              (i = u[v]),
              o.removeChild(u),
              (g.position = 'absolute'),
              m &&
                w &&
                (((l = (0, p.DY)(o)).time = p.xr.time), (l.width = o[v])),
              (0, p.Pr)(_ ? (i * d) / 100 : i && d ? (100 / i) * d : 0));
        },
        ee = function (e, t, r, n) {
          var s;
          return (
            l || U(),
            t in w &&
              'transform' !== t &&
              ~(t = w[t]).indexOf(',') &&
              (t = t.split(',')[0]),
            f[t] && 'transform' !== t
              ? ((s = ec(e, n)),
                (s =
                  'transformOrigin' !== t
                    ? s[t]
                    : s.svg
                    ? s.origin
                    : ep(B(e, T)) + ' ' + s.zOrigin + 'px'))
              : (!(s = e.style[t]) ||
                  'auto' === s ||
                  n ||
                  ~(s + '').indexOf('calc(')) &&
                (s =
                  (ei[t] && ei[t](e, t, r)) ||
                  B(e, t) ||
                  (0, p.Ok)(e, t) ||
                  ('opacity' === t ? 1 : 0)),
            r && !~(s + '').trim().indexOf(' ') ? K(e, t, s, r) + r : s
          );
        },
        et = function (e, t, r, n) {
          if (!r || 'none' === r) {
            var s = D(t, e, 1),
              i = s && B(e, s, 1);
            i && i !== r
              ? ((t = s), (r = i))
              : 'borderColor' === t && (r = B(e, 'borderTopColor'));
          }
          var a,
            o,
            l,
            u,
            h,
            d,
            c,
            f,
            g,
            m,
            y,
            v = new p.Fo(this._pt, e.style, t, 0, 1, p.Ks),
            b = 0,
            _ = 0;
          if (
            ((v.b = r),
            (v.e = n),
            (r += ''),
            'auto' == (n += '') &&
              ((e.style[t] = n), (n = B(e, t) || n), (e.style[t] = r)),
            (a = [r, n]),
            (0, p.kr)(a),
            (r = a[0]),
            (n = a[1]),
            (l = r.match(p.d4) || []),
            (n.match(p.d4) || []).length)
          ) {
            for (; (o = p.d4.exec(n)); )
              (c = o[0]),
                (g = n.substring(b, o.index)),
                h
                  ? (h = (h + 1) % 5)
                  : ('rgba(' === g.substr(-5) || 'hsla(' === g.substr(-5)) &&
                    (h = 1),
                c !== (d = l[_++] || '') &&
                  ((u = parseFloat(d) || 0),
                  (y = d.substr((u + '').length)),
                  '=' === c.charAt(1) && (c = (0, p.cy)(u, c) + y),
                  (f = parseFloat(c)),
                  (m = c.substr((f + '').length)),
                  (b = p.d4.lastIndex - m.length),
                  m ||
                    ((m = m || p.Fc.units[t] || y),
                    b !== n.length || ((n += m), (v.e += m))),
                  y !== m && (u = K(e, t, d, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: g || 1 === _ ? g : ',',
                    s: u,
                    c: f - u,
                    m: (h && h < 4) || 'zIndex' === t ? Math.round : 0,
                  }));
            v.c = b < n.length ? n.substring(b, n.length) : '';
          } else v.r = 'display' === t && 'none' === n ? A : S;
          return p.bQ.test(n) && (v.e = 0), (this._pt = v), v;
        },
        er = {
          top: '0%',
          bottom: '100%',
          left: '0%',
          right: '100%',
          center: '50%',
        },
        en = function (e) {
          var t = e.split(' '),
            r = t[0],
            n = t[1] || '50%';
          return (
            ('top' === r || 'bottom' === r || 'left' === n || 'right' === n) &&
              ((e = r), (r = n), (n = e)),
            (t[0] = er[r] || r),
            (t[1] = er[n] || n),
            t.join(' ')
          );
        },
        es = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r,
              n,
              s,
              i = t.t,
              a = i.style,
              o = t.u,
              l = i._gsap;
            if ('all' === o || !0 === o) (a.cssText = ''), (n = 1);
            else
              for (s = (o = o.split(',')).length; --s > -1; )
                f[(r = o[s])] &&
                  ((n = 1), (r = 'transformOrigin' === r ? T : R)),
                  G(i, r);
            n &&
              (G(i, R),
              l &&
                (l.svg && i.removeAttribute('transform'),
                ec(i, 1),
                (l.uncache = 1),
                z(a)));
          }
        },
        ei = {
          clearProps: function (e, t, r, n, s) {
            if ('isFromStart' !== s.data) {
              var i = (e._pt = new p.Fo(e._pt, t, r, 0, 0, es));
              return (
                (i.u = n), (i.pr = -10), (i.tween = s), e._props.push(r), 1
              );
            }
          },
        },
        ea = [1, 0, 0, 1, 0, 0],
        eo = {},
        el = function (e) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === e || 'none' === e || !e;
        },
        eu = function (e) {
          var t = B(e, R);
          return el(t) ? ea : t.substr(7).match(p.SI).map(p.Pr);
        },
        eh = function (e, t) {
          var r,
            n,
            s,
            i,
            a = e._gsap || (0, p.DY)(e),
            l = e.style,
            u = eu(e);
          return a.svg && e.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (u = [
                (s = e.transform.baseVal.consolidate().matrix).a,
                s.b,
                s.c,
                s.d,
                s.e,
                s.f,
              ]).join(',')
              ? ea
              : u
            : (u !== ea ||
                e.offsetParent ||
                e === o ||
                a.svg ||
                ((s = l.display),
                (l.display = 'block'),
                ((r = e.parentNode) && e.offsetParent) ||
                  ((i = 1), (n = e.nextElementSibling), o.appendChild(e)),
                (u = eu(e)),
                s ? (l.display = s) : G(e, 'display'),
                i &&
                  (n
                    ? r.insertBefore(e, n)
                    : r
                    ? r.appendChild(e)
                    : o.removeChild(e))),
              t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        ed = function (e, t, r, n, s, i) {
          var a,
            o,
            l,
            u,
            h = e._gsap,
            d = s || eh(e, !0),
            c = h.xOrigin || 0,
            p = h.yOrigin || 0,
            f = h.xOffset || 0,
            g = h.yOffset || 0,
            m = d[0],
            y = d[1],
            v = d[2],
            b = d[3],
            _ = d[4],
            w = d[5],
            x = t.split(' '),
            P = parseFloat(x[0]) || 0,
            O = parseFloat(x[1]) || 0;
          r
            ? d !== ea &&
              (o = m * b - y * v) &&
              ((l = P * (b / o) + O * (-v / o) + (v * w - b * _) / o),
              (u = P * (-y / o) + O * (m / o) - (m * w - y * _) / o),
              (P = l),
              (O = u))
            : ((P =
                (a = L(e)).x + (~x[0].indexOf('%') ? (P / 100) * a.width : P)),
              (O =
                a.y +
                (~(x[1] || x[0]).indexOf('%') ? (O / 100) * a.height : O))),
            n || (!1 !== n && h.smooth)
              ? ((_ = P - c),
                (w = O - p),
                (h.xOffset = f + (_ * m + w * v) - _),
                (h.yOffset = g + (_ * y + w * b) - w))
              : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = P),
            (h.yOrigin = O),
            (h.smooth = !!n),
            (h.origin = t),
            (h.originIsAbsolute = !!r),
            (e.style[T] = '0px 0px'),
            i &&
              (Z(i, h, 'xOrigin', c, P),
              Z(i, h, 'yOrigin', p, O),
              Z(i, h, 'xOffset', f, h.xOffset),
              Z(i, h, 'yOffset', g, h.yOffset)),
            e.setAttribute('data-svg-origin', P + ' ' + O);
        },
        ec = function (e, t) {
          var r = e._gsap || new p.l1(e);
          if ('x' in r && !t && !r.uncache) return r;
          var n,
            s,
            i,
            a,
            o,
            l,
            u,
            h,
            d,
            f,
            v,
            b,
            _,
            w,
            x,
            P,
            O,
            k,
            S,
            A,
            C,
            M,
            F,
            I,
            E,
            V,
            j,
            z,
            q,
            $,
            N,
            Y,
            D = e.style,
            U = r.scaleX < 0,
            X = getComputedStyle(e),
            W = B(e, T) || '0';
          return (
            (n = s = i = l = u = h = d = f = v = 0),
            (a = o = 1),
            (r.svg = !!(e.getCTM && Q(e))),
            X.translate &&
              (('none' !== X.translate ||
                'none' !== X.scale ||
                'none' !== X.rotate) &&
                (D[R] =
                  ('none' !== X.translate
                    ? 'translate3d(' +
                      (X.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                      ') '
                    : '') +
                  ('none' !== X.rotate ? 'rotate(' + X.rotate + ') ' : '') +
                  ('none' !== X.scale
                    ? 'scale(' + X.scale.split(' ').join(',') + ') '
                    : '') +
                  ('none' !== X[R] ? X[R] : '')),
              (D.scale = D.rotate = D.translate = 'none')),
            (w = eh(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((E = e.getBBox()),
                  (W = r.xOrigin - E.x + 'px ' + (r.yOrigin - E.y) + 'px'),
                  (I = ''))
                : (I = !t && e.getAttribute('data-svg-origin')),
              ed(e, I || W, !!I || r.originIsAbsolute, !1 !== r.smooth, w)),
            (b = r.xOrigin || 0),
            (_ = r.yOrigin || 0),
            w !== ea &&
              ((k = w[0]),
              (S = w[1]),
              (A = w[2]),
              (C = w[3]),
              (n = M = w[4]),
              (s = F = w[5]),
              6 === w.length
                ? ((a = Math.sqrt(k * k + S * S)),
                  (o = Math.sqrt(C * C + A * A)),
                  (l = k || S ? y(S, k) * g : 0),
                  (d = A || C ? y(A, C) * g + l : 0) &&
                    (o *= Math.abs(Math.cos(d * m))),
                  r.svg &&
                    ((n -= b - (b * k + _ * A)), (s -= _ - (b * S + _ * C))))
                : ((Y = w[6]),
                  ($ = w[7]),
                  (j = w[8]),
                  (z = w[9]),
                  (q = w[10]),
                  (N = w[11]),
                  (n = w[12]),
                  (s = w[13]),
                  (i = w[14]),
                  (u = (x = y(Y, q)) * g),
                  x &&
                    ((I = M * (P = Math.cos(-x)) + j * (O = Math.sin(-x))),
                    (E = F * P + z * O),
                    (V = Y * P + q * O),
                    (j = -(M * O) + j * P),
                    (z = -(F * O) + z * P),
                    (q = -(Y * O) + q * P),
                    (N = -($ * O) + N * P),
                    (M = I),
                    (F = E),
                    (Y = V)),
                  (h = (x = y(-A, q)) * g),
                  x &&
                    ((I = k * (P = Math.cos(-x)) - j * (O = Math.sin(-x))),
                    (E = S * P - z * O),
                    (V = A * P - q * O),
                    (N = C * O + N * P),
                    (k = I),
                    (S = E),
                    (A = V)),
                  (l = (x = y(S, k)) * g),
                  x &&
                    ((P = Math.cos(x)),
                    (O = Math.sin(x)),
                    (I = k * P + S * O),
                    (E = M * P + F * O),
                    (S = S * P - k * O),
                    (F = F * P - M * O),
                    (k = I),
                    (M = E)),
                  u &&
                    Math.abs(u) + Math.abs(l) > 359.9 &&
                    ((u = l = 0), (h = 180 - h)),
                  (a = (0, p.Pr)(Math.sqrt(k * k + S * S + A * A))),
                  (o = (0, p.Pr)(Math.sqrt(F * F + Y * Y))),
                  (d = Math.abs((x = y(M, F))) > 2e-4 ? x * g : 0),
                  (v = N ? 1 / (N < 0 ? -N : N) : 0)),
              r.svg &&
                ((I = e.getAttribute('transform')),
                (r.forceCSS = e.setAttribute('transform', '') || !el(B(e, R))),
                I && e.setAttribute('transform', I))),
            Math.abs(d) > 90 &&
              270 > Math.abs(d) &&
              (U
                ? ((a *= -1),
                  (d += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((o *= -1), (d += d <= 0 ? 180 : -180))),
            (t = t || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!t && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              'px'),
            (r.y =
              s -
              ((r.yPercent =
                s &&
                ((!t && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-s)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              'px'),
            (r.z = i + 'px'),
            (r.scaleX = (0, p.Pr)(a)),
            (r.scaleY = (0, p.Pr)(o)),
            (r.rotation = (0, p.Pr)(l) + 'deg'),
            (r.rotationX = (0, p.Pr)(u) + 'deg'),
            (r.rotationY = (0, p.Pr)(h) + 'deg'),
            (r.skewX = d + 'deg'),
            (r.skewY = f + 'deg'),
            (r.transformPerspective = v + 'px'),
            (r.zOrigin = parseFloat(W.split(' ')[2]) || 0) && (D[T] = ep(W)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = p.Fc.force3D),
            (r.renderTransform = r.svg ? ev : c ? ey : eg),
            (r.uncache = 0),
            r
          );
        },
        ep = function (e) {
          return (e = e.split(' '))[0] + ' ' + e[1];
        },
        ef = function (e, t, r) {
          var n = (0, p.Wy)(t);
          return (
            (0, p.Pr)(parseFloat(t) + parseFloat(K(e, 'x', r + 'px', n))) + n
          );
        },
        eg = function (e, t) {
          (t.z = '0px'),
            (t.rotationY = t.rotationX = '0deg'),
            (t.force3D = 0),
            ey(e, t);
        },
        em = '0deg',
        ey = function (e, t) {
          var r = t || this,
            n = r.xPercent,
            s = r.yPercent,
            i = r.x,
            a = r.y,
            o = r.z,
            l = r.rotation,
            u = r.rotationY,
            h = r.rotationX,
            d = r.skewX,
            c = r.skewY,
            p = r.scaleX,
            f = r.scaleY,
            g = r.transformPerspective,
            y = r.force3D,
            v = r.target,
            b = r.zOrigin,
            _ = '',
            w = ('auto' === y && e && 1 !== e) || !0 === y;
          if (b && (h !== em || u !== em)) {
            var x,
              P = parseFloat(u) * m,
              O = Math.sin(P),
              k = Math.cos(P);
            (i = ef(v, i, -(O * (x = Math.cos((P = parseFloat(h) * m))) * b))),
              (a = ef(v, a, -(-Math.sin(P) * b))),
              (o = ef(v, o, -(k * x * b) + b));
          }
          '0px' !== g && (_ += 'perspective(' + g + ') '),
            (n || s) && (_ += 'translate(' + n + '%, ' + s + '%) '),
            (w || '0px' !== i || '0px' !== a || '0px' !== o) &&
              (_ +=
                '0px' !== o || w
                  ? 'translate3d(' + i + ', ' + a + ', ' + o + ') '
                  : 'translate(' + i + ', ' + a + ') '),
            l !== em && (_ += 'rotate(' + l + ') '),
            u !== em && (_ += 'rotateY(' + u + ') '),
            h !== em && (_ += 'rotateX(' + h + ') '),
            (d !== em || c !== em) && (_ += 'skew(' + d + ', ' + c + ') '),
            (1 !== p || 1 !== f) && (_ += 'scale(' + p + ', ' + f + ') '),
            (v.style[R] = _ || 'translate(0, 0)');
        },
        ev = function (e, t) {
          var r,
            n,
            s,
            i,
            a,
            o = t || this,
            l = o.xPercent,
            u = o.yPercent,
            h = o.x,
            d = o.y,
            c = o.rotation,
            f = o.skewX,
            g = o.skewY,
            y = o.scaleX,
            v = o.scaleY,
            b = o.target,
            _ = o.xOrigin,
            w = o.yOrigin,
            x = o.xOffset,
            P = o.yOffset,
            O = o.forceCSS,
            k = parseFloat(h),
            S = parseFloat(d);
          (c = parseFloat(c)),
            (f = parseFloat(f)),
            (g = parseFloat(g)) && ((f += g = parseFloat(g)), (c += g)),
            c || f
              ? ((c *= m),
                (f *= m),
                (r = Math.cos(c) * y),
                (n = Math.sin(c) * y),
                (s = -(Math.sin(c - f) * v)),
                (i = Math.cos(c - f) * v),
                f &&
                  ((g *= m),
                  (s *= a = Math.sqrt(1 + (a = Math.tan(f - g)) * a)),
                  (i *= a),
                  g &&
                    ((r *= a = Math.sqrt(1 + (a = Math.tan(g)) * a)),
                    (n *= a))),
                (r = (0, p.Pr)(r)),
                (n = (0, p.Pr)(n)),
                (s = (0, p.Pr)(s)),
                (i = (0, p.Pr)(i)))
              : ((r = y), (i = v), (n = s = 0)),
            ((k && !~(h + '').indexOf('px')) ||
              (S && !~(d + '').indexOf('px'))) &&
              ((k = K(b, 'x', h, 'px')), (S = K(b, 'y', d, 'px'))),
            (_ || w || x || P) &&
              ((k = (0, p.Pr)(k + _ - (_ * r + w * s) + x)),
              (S = (0, p.Pr)(S + w - (_ * n + w * i) + P))),
            (l || u) &&
              ((a = b.getBBox()),
              (k = (0, p.Pr)(k + (l / 100) * a.width)),
              (S = (0, p.Pr)(S + (u / 100) * a.height))),
            (a =
              'matrix(' +
              r +
              ',' +
              n +
              ',' +
              s +
              ',' +
              i +
              ',' +
              k +
              ',' +
              S +
              ')'),
            b.setAttribute('transform', a),
            O && (b.style[R] = a);
        },
        eb = function (e, t, r, n, s) {
          var i,
            a,
            o = (0, p.r9)(s),
            l = parseFloat(s) * (o && ~s.indexOf('rad') ? g : 1) - n,
            u = n + l + 'deg';
          return (
            o &&
              ('short' === (i = s.split('_')[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              'cw' === i && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : 'ccw' === i &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = a = new p.Fo(e._pt, t, r, n, l, P)),
            (a.e = u),
            (a.u = 'deg'),
            e._props.push(r),
            a
          );
        },
        e_ = function (e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        },
        ew = function (e, t, r) {
          var n,
            s,
            i,
            a,
            o,
            l,
            u,
            h = e_({}, r._gsap),
            d = r.style;
          for (s in (h.svg
            ? ((i = r.getAttribute('transform')),
              r.setAttribute('transform', ''),
              (d[R] = t),
              (n = ec(r, 1)),
              G(r, R),
              r.setAttribute('transform', i))
            : ((i = getComputedStyle(r)[R]),
              (d[R] = t),
              (n = ec(r, 1)),
              (d[R] = i)),
          f))
            (i = h[s]) !== (a = n[s]) &&
              0 > 'perspective,force3D,transformOrigin,svgOrigin'.indexOf(s) &&
              ((o =
                (0, p.Wy)(i) !== (u = (0, p.Wy)(a))
                  ? K(r, s, i, u)
                  : parseFloat(i)),
              (l = parseFloat(a)),
              (e._pt = new p.Fo(e._pt, n, s, o, l - o, x)),
              (e._pt.u = u || 0),
              e._props.push(s));
          e_(n, h);
        };
      (0, p.fS)('padding,margin,Width,Radius', function (e, t) {
        var r = 'Right',
          n = 'Bottom',
          s = 'Left',
          i = (
            t < 3 ? ['Top', r, n, s] : ['Top' + s, 'Top' + r, n + r, n + s]
          ).map(function (r) {
            return t < 2 ? e + r : 'border' + r + e;
          });
        ei[t > 1 ? 'border' + e : e] = function (e, t, r, n, s) {
          var a, o;
          if (arguments.length < 4)
            return 5 ===
              (o = (a = i.map(function (t) {
                return ee(e, t, r);
              })).join(' ')).split(a[0]).length
              ? a[0]
              : o;
          (a = (n + '').split(' ')),
            (o = {}),
            i.forEach(function (e, t) {
              return (o[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, o, s);
        };
      });
      var ex = {
        name: 'css',
        register: U,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, r, n, s) {
          var i,
            a,
            o,
            u,
            h,
            d,
            c,
            g,
            m,
            y,
            v,
            b,
            P,
            S,
            A,
            C,
            M = this._props,
            F = e.style,
            I = r.vars.startAt;
          for (c in (l || U(),
          (this.styles = this.styles || $(e)),
          (C = this.styles.props),
          (this.tween = r),
          t))
            if (
              'autoRound' !== c &&
              ((a = t[c]), !(p.$i[c] && (0, p.if)(c, t, r, n, e, s)))
            ) {
              if (
                ((h = typeof a),
                (d = ei[c]),
                'function' === h && (h = typeof (a = a.call(r, n, e, s))),
                'string' === h && ~a.indexOf('random(') && (a = (0, p.UI)(a)),
                d)
              )
                d(this, e, c, a, r) && (A = 1);
              else if ('--' === c.substr(0, 2))
                (i = (getComputedStyle(e).getPropertyValue(c) + '').trim()),
                  (a += ''),
                  (p.GN.lastIndex = 0),
                  p.GN.test(i) || ((g = (0, p.Wy)(i)), (m = (0, p.Wy)(a))),
                  m ? g !== m && (i = K(e, c, i, m) + m) : g && (a += g),
                  this.add(F, 'setProperty', i, a, n, s, 0, 0, c),
                  M.push(c),
                  C.push(c, 0, F[c]);
              else if ('undefined' !== h) {
                if (
                  (I && c in I
                    ? ((i =
                        'function' == typeof I[c]
                          ? I[c].call(r, n, e, s)
                          : I[c]),
                      (0, p.r9)(i) &&
                        ~i.indexOf('random(') &&
                        (i = (0, p.UI)(i)),
                      (0, p.Wy)(i + '') ||
                        (i += p.Fc.units[c] || (0, p.Wy)(ee(e, c)) || ''),
                      '=' === (i + '').charAt(1) && (i = ee(e, c)))
                    : (i = ee(e, c)),
                  (u = parseFloat(i)),
                  (y =
                    'string' === h && '=' === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (o = parseFloat(a)),
                  c in w &&
                    ('autoAlpha' === c &&
                      (1 === u &&
                        'hidden' === ee(e, 'visibility') &&
                        o &&
                        (u = 0),
                      C.push('visibility', 0, F.visibility),
                      Z(
                        this,
                        F,
                        'visibility',
                        u ? 'inherit' : 'hidden',
                        o ? 'inherit' : 'hidden',
                        !o,
                      )),
                    'scale' !== c &&
                      'transform' !== c &&
                      ~(c = w[c]).indexOf(',') &&
                      (c = c.split(',')[0])),
                  (v = c in f))
                ) {
                  if (
                    (this.styles.save(c),
                    b ||
                      (((P = e._gsap).renderTransform && !t.parseTransform) ||
                        ec(e, t.parseTransform),
                      (S = !1 !== t.smoothOrigin && P.smooth),
                      ((b = this._pt =
                        new p.Fo(
                          this._pt,
                          F,
                          R,
                          0,
                          1,
                          P.renderTransform,
                          P,
                          0,
                          -1,
                        )).dep = 1)),
                    'scale' === c)
                  )
                    (this._pt = new p.Fo(
                      this._pt,
                      P,
                      'scaleY',
                      P.scaleY,
                      (y ? (0, p.cy)(P.scaleY, y + o) : o) - P.scaleY || 0,
                      x,
                    )),
                      (this._pt.u = 0),
                      M.push('scaleY', c),
                      (c += 'X');
                  else if ('transformOrigin' === c) {
                    C.push(T, 0, F[T]),
                      (a = en(a)),
                      P.svg
                        ? ed(e, a, 0, S, 0, this)
                        : ((m = parseFloat(a.split(' ')[2]) || 0) !==
                            P.zOrigin && Z(this, P, 'zOrigin', P.zOrigin, m),
                          Z(this, F, c, ep(i), ep(a)));
                    continue;
                  } else if ('svgOrigin' === c) {
                    ed(e, a, 1, S, 0, this);
                    continue;
                  } else if (c in eo) {
                    eb(this, P, c, u, y ? (0, p.cy)(u, y + a) : a);
                    continue;
                  } else if ('smoothOrigin' === c) {
                    Z(this, P, 'smooth', P.smooth, a);
                    continue;
                  } else if ('force3D' === c) {
                    P[c] = a;
                    continue;
                  } else if ('transform' === c) {
                    ew(this, a, e);
                    continue;
                  }
                } else c in F || (c = D(c) || c);
                if (
                  v ||
                  ((o || 0 === o) && (u || 0 === u) && !_.test(a) && c in F)
                )
                  (g = (i + '').substr((u + '').length)),
                    o || (o = 0),
                    (m = (0, p.Wy)(a) || (c in p.Fc.units ? p.Fc.units[c] : g)),
                    g !== m && (u = K(e, c, i, m)),
                    (this._pt = new p.Fo(
                      this._pt,
                      v ? P : F,
                      c,
                      u,
                      (y ? (0, p.cy)(u, y + o) : o) - u,
                      v || ('px' !== m && 'zIndex' !== c) || !1 === t.autoRound
                        ? x
                        : k,
                    )),
                    (this._pt.u = m || 0),
                    g !== m &&
                      '%' !== m &&
                      ((this._pt.b = i), (this._pt.r = O));
                else if (c in F) et.call(this, e, c, i, y ? y + a : a);
                else if (c in e) this.add(e, c, i || e[c], y ? y + a : a, n, s);
                else if ('parseTransform' !== c) {
                  (0, p.lC)(c, a);
                  continue;
                }
                v || (c in F ? C.push(c, 0, F[c]) : C.push(c, 1, i || e[c])),
                  M.push(c);
              }
            }
          A && (0, p.JV)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !d())
            for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
          else t.styles.revert();
        },
        get: ee,
        aliases: w,
        getSetter: function (e, t, r) {
          var n = w[t];
          return (
            n && 0 > n.indexOf(',') && (t = n),
            t in f && t !== T && (e._gsap.x || ee(e, 'x'))
              ? r && h === r
                ? 'scale' === t
                  ? I
                  : F
                : ((h = r || {}), 'scale' === t ? E : V)
              : e.style && !(0, p.m2)(e.style[t])
              ? C
              : ~t.indexOf('-')
              ? M
              : (0, p.S5)(e, t)
          );
        },
        core: { _removeProperty: G, _getMatrix: eh },
      };
      (p.p8.utils.checkPrefix = D),
        (p.p8.core.getStyleSaver = $),
        (n = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent'),
        (s = 'rotation,rotationX,rotationY,skewX,skewY'),
        (i = (0, p.fS)(
          n +
            ',' +
            s +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (e) {
            f[e] = 1;
          },
        )),
        (0, p.fS)(s, function (e) {
          (p.Fc.units[e] = 'deg'), (eo[e] = 1);
        }),
        (w[i[13]] = n + ',' + s),
        (0, p.fS)(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (e) {
            var t = e.split(':');
            w[t[1]] = i[t[0]];
          },
        ),
        (0, p.fS)(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (e) {
            p.Fc.units[e] = 'px';
          },
        ),
        p.p8.registerPlugin(ex);
      var eP = p.p8.registerPlugin(ex) || p.p8;
      eP.core.Tween;
    },
    3177: function (e, t, r) {
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(6006),
        s = Symbol.for('react.element'),
        i = (Symbol.for('react.fragment'), Object.prototype.hasOwnProperty),
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, t, r) {
        var n,
          l = {},
          u = null,
          h = null;
        for (n in (void 0 !== r && (u = '' + r),
        void 0 !== t.key && (u = '' + t.key),
        void 0 !== t.ref && (h = t.ref),
        t))
          i.call(t, n) && !o.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: u,
          ref: h,
          props: l,
          _owner: a.current,
        };
      }
      (t.jsx = l), (t.jsxs = l);
    },
    9268: function (e, t, r) {
      e.exports = r(3177);
    },
    644: function (e, t, r) {
      r.d(t, {
        q: function () {
          return rl;
        },
        q_: function () {
          return t0;
        },
      });
      var n,
        s,
        i,
        a = r(6006),
        o = Object.defineProperty,
        l = {};
      ((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(l, {
        assign: () => N,
        colors: () => z,
        createStringInterpolator: () => n,
        skipAnimation: () => q,
        to: () => s,
        willAdvance: () => $,
      });
      var u = k(),
        h = (e) => w(e, u),
        d = k();
      h.write = (e) => w(e, d);
      var c = k();
      h.onStart = (e) => w(e, c);
      var p = k();
      h.onFrame = (e) => w(e, p);
      var f = k();
      h.onFinish = (e) => w(e, f);
      var g = [];
      h.setTimeout = (e, t) => {
        let r = h.now() + t,
          n = () => {
            let e = g.findIndex((e) => e.cancel == n);
            ~e && g.splice(e, 1), (b -= ~e ? 1 : 0);
          },
          s = { time: r, handler: e, cancel: n };
        return g.splice(m(r), 0, s), (b += 1), x(), s;
      };
      var m = (e) => ~(~g.findIndex((t) => t.time > e) || ~g.length);
      (h.cancel = (e) => {
        c.delete(e), p.delete(e), f.delete(e), u.delete(e), d.delete(e);
      }),
        (h.sync = (e) => {
          (_ = !0), h.batchedUpdates(e), (_ = !1);
        }),
        (h.throttle = (e) => {
          let t;
          function r() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function n(...e) {
            (t = e), h.onStart(r);
          }
          return (
            (n.handler = e),
            (n.cancel = () => {
              c.delete(r), (t = null);
            }),
            n
          );
        });
      var y =
        'undefined' != typeof window ? window.requestAnimationFrame : () => {};
      (h.use = (e) => (y = e)),
        (h.now =
          'undefined' != typeof performance
            ? () => performance.now()
            : Date.now),
        (h.batchedUpdates = (e) => e()),
        (h.catch = console.error),
        (h.frameLoop = 'always'),
        (h.advance = () => {
          'demand' !== h.frameLoop
            ? console.warn(
                'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand',
              )
            : O();
        });
      var v = -1,
        b = 0,
        _ = !1;
      function w(e, t) {
        _ ? (t.delete(e), e(0)) : (t.add(e), x());
      }
      function x() {
        v < 0 && ((v = 0), 'demand' !== h.frameLoop && y(P));
      }
      function P() {
        ~v && (y(P), h.batchedUpdates(O));
      }
      function O() {
        let e = v;
        v = h.now();
        let t = m(v);
        if ((t && (S(g.splice(0, t), (e) => e.handler()), (b -= t)), !b)) {
          v = -1;
          return;
        }
        c.flush(),
          u.flush(e ? Math.min(64, v - e) : 16.667),
          p.flush(),
          d.flush(),
          f.flush();
      }
      function k() {
        let e = new Set(),
          t = e;
        return {
          add(r) {
            (b += t != e || e.has(r) ? 0 : 1), e.add(r);
          },
          delete: (r) => ((b -= t == e && e.has(r) ? 1 : 0), e.delete(r)),
          flush(r) {
            t.size &&
              ((e = new Set()),
              (b -= t.size),
              S(t, (t) => t(r) && e.add(t)),
              (b += e.size),
              (t = e));
          },
        };
      }
      function S(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            h.catch(e);
          }
        });
      }
      function A() {}
      var C = (e, t, r) =>
          Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0,
          }),
        M = {
          arr: Array.isArray,
          obj: (e) => !!e && 'Object' === e.constructor.name,
          fun: (e) => 'function' == typeof e,
          str: (e) => 'string' == typeof e,
          num: (e) => 'number' == typeof e,
          und: (e) => void 0 === e,
        };
      function F(e, t) {
        if (M.arr(e)) {
          if (!M.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
          return !0;
        }
        return e === t;
      }
      var I = (e, t) => e.forEach(t);
      function E(e, t, r) {
        if (M.arr(e)) {
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
          return;
        }
        for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n);
      }
      var V = (e) => (M.und(e) ? [] : M.arr(e) ? e : [e]);
      function R(e, t) {
        if (e.size) {
          let r = Array.from(e);
          e.clear(), I(r, t);
        }
      }
      var T = (e, ...t) => R(e, (e) => e(...t)),
        j = () =>
          'undefined' == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        z = null,
        q = !1,
        $ = A,
        N = (e) => {
          e.to && (s = e.to),
            e.now && (h.now = e.now),
            void 0 !== e.colors && (z = e.colors),
            null != e.skipAnimation && (q = e.skipAnimation),
            e.createStringInterpolator && (n = e.createStringInterpolator),
            e.requestAnimationFrame && h.use(e.requestAnimationFrame),
            e.batchedUpdates && (h.batchedUpdates = e.batchedUpdates),
            e.willAdvance && ($ = e.willAdvance),
            e.frameLoop && (h.frameLoop = e.frameLoop);
        },
        B = new Set(),
        Y = [],
        D = [],
        U = 0,
        X = {
          get idle() {
            return !B.size && !Y.length;
          },
          start(e) {
            U > e.priority ? (B.add(e), h.onStart(W)) : (L(e), h(G));
          },
          advance: G,
          sort(e) {
            if (U) h.onFrame(() => X.sort(e));
            else {
              let t = Y.indexOf(e);
              ~t && (Y.splice(t, 1), Q(e));
            }
          },
          clear() {
            (Y = []), B.clear();
          },
        };
      function W() {
        B.forEach(L), B.clear(), h(G);
      }
      function L(e) {
        Y.includes(e) || Q(e);
      }
      function Q(e) {
        Y.splice(
          (function (e, t) {
            let r = e.findIndex(t);
            return r < 0 ? e.length : r;
          })(Y, (t) => t.priority > e.priority),
          0,
          e,
        );
      }
      function G(e) {
        let t = D;
        for (let r = 0; r < Y.length; r++) {
          let n = Y[r];
          (U = n.priority), n.idle || ($(n), n.advance(e), n.idle || t.push(n));
        }
        return (U = 0), ((D = Y).length = 0), (Y = t).length > 0;
      }
      var Z = '[-+]?\\d*\\.?\\d+',
        H = Z + '%';
      function J(...e) {
        return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
      }
      var K = RegExp('rgb' + J(Z, Z, Z)),
        ee = RegExp('rgba' + J(Z, Z, Z, Z)),
        et = RegExp('hsl' + J(Z, H, H)),
        er = RegExp('hsla' + J(Z, H, H, Z)),
        en = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        es =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ei = /^#([0-9a-fA-F]{6})$/,
        ea = /^#([0-9a-fA-F]{8})$/;
      function eo(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      function el(e, t, r) {
        let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
          s = 2 * r - n,
          i = eo(s, n, e + 1 / 3),
          a = eo(s, n, e),
          o = eo(s, n, e - 1 / 3);
        return (
          (Math.round(255 * i) << 24) |
          (Math.round(255 * a) << 16) |
          (Math.round(255 * o) << 8)
        );
      }
      function eu(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function eh(e) {
        let t = parseFloat(e);
        return (((t % 360) + 360) % 360) / 360;
      }
      function ed(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function ec(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function ep(e) {
        let t;
        let r =
          'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = ei.exec(e))
            ? parseInt(t[1] + 'ff', 16) >>> 0
            : z && void 0 !== z[e]
            ? z[e]
            : (t = K.exec(e))
            ? ((eu(t[1]) << 24) | (eu(t[2]) << 16) | (eu(t[3]) << 8) | 255) >>>
              0
            : (t = ee.exec(e))
            ? ((eu(t[1]) << 24) |
                (eu(t[2]) << 16) |
                (eu(t[3]) << 8) |
                ed(t[4])) >>>
              0
            : (t = en.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
            : (t = ea.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = es.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16,
              ) >>> 0
            : (t = et.exec(e))
            ? (255 | el(eh(t[1]), ec(t[2]), ec(t[3]))) >>> 0
            : (t = er.exec(e))
            ? (el(eh(t[1]), ec(t[2]), ec(t[3])) | ed(t[4])) >>> 0
            : null;
        if (null === r) return e;
        r = r || 0;
        let n = (4278190080 & r) >>> 24,
          s = (16711680 & r) >>> 16,
          i = (65280 & r) >>> 8,
          a = (255 & r) / 255;
        return `rgba(${n}, ${s}, ${i}, ${a})`;
      }
      var ef = (e, t, r) => {
          if (M.fun(e)) return e;
          if (M.arr(e)) return ef({ range: e, output: t, extrapolate: r });
          if (M.str(e.output[0])) return n(e);
          let s = e.output,
            i = e.range || [0, 1],
            a = e.extrapolateLeft || e.extrapolate || 'extend',
            o = e.extrapolateRight || e.extrapolate || 'extend',
            l = e.easing || ((e) => e);
          return (t) => {
            let r = (function (e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1;
            })(t, i);
            return (function (e, t, r, n, s, i, a, o, l) {
              let u = l ? l(e) : e;
              if (u < t) {
                if ('identity' === a) return u;
                'clamp' === a && (u = t);
              }
              if (u > r) {
                if ('identity' === o) return u;
                'clamp' === o && (u = r);
              }
              return n === s
                ? n
                : t === r
                ? e <= t
                  ? n
                  : s
                : (t === -1 / 0
                    ? (u = -u)
                    : r === 1 / 0
                    ? (u -= t)
                    : (u = (u - t) / (r - t)),
                  (u = i(u)),
                  n === -1 / 0
                    ? (u = -u)
                    : s === 1 / 0
                    ? (u += n)
                    : (u = u * (s - n) + n),
                  u);
            })(t, i[r], i[r + 1], s[r], s[r + 1], l, a, o, e.map);
          };
        },
        eg = Symbol.for('FluidValue.get'),
        em = Symbol.for('FluidValue.observers'),
        ey = (e) => !!(e && e[eg]),
        ev = (e) => (e && e[eg] ? e[eg]() : e),
        eb = (e) => e[em] || null;
      function e_(e, t) {
        let r = e[em];
        r &&
          r.forEach((e) => {
            e.eventObserved ? e.eventObserved(t) : e(t);
          });
      }
      var ew = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            ex(this, e);
          }
        },
        ex = (e, t) => ek(e, eg, t);
      function eP(e, t) {
        if (e[eg]) {
          let r = e[em];
          r || ek(e, em, (r = new Set())),
            !r.has(t) &&
              (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
        }
        return t;
      }
      function eO(e, t) {
        let r = e[em];
        if (r && r.has(t)) {
          let n = r.size - 1;
          n ? r.delete(t) : (e[em] = null),
            e.observerRemoved && e.observerRemoved(n, t);
        }
      }
      var ek = (e, t, r) =>
          Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0,
          }),
        eS = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        eA =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        eC = RegExp(`(${eS.source})(%|[a-z]+)`, 'i'),
        eM = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        eF = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        eI = (e) => {
          let [t, r] = eE(e);
          if (!t || j()) return e;
          let n = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith('--')) {
            let e = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(r);
            if (e) return e;
          } else if (r && eF.test(r)) return eI(r);
          else if (r) return r;
          return e;
        },
        eE = (e) => {
          let t = eF.exec(e);
          if (!t) return [,];
          let [, r, n] = t;
          return [r, n];
        },
        eV = (e, t, r, n, s) =>
          `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${s})`,
        eR = (e) => {
          i ||
            (i = z
              ? RegExp(`(${Object.keys(z).join('|')})(?!\\w)`, 'g')
              : /^\b$/);
          let t = e.output.map((e) =>
              ev(e).replace(eF, eI).replace(eA, ep).replace(i, ep),
            ),
            r = t.map((e) => e.match(eS).map(Number)),
            n = r[0].map((e, t) =>
              r.map((e) => {
                if (!(t in e))
                  throw Error('The arity of each "output" value must be equal');
                return e[t];
              }),
            ),
            s = n.map((t) => ef({ ...e, output: t }));
          return (e) => {
            let r =
                !eC.test(t[0]) && t.find((e) => eC.test(e))?.replace(eS, ''),
              n = 0;
            return t[0]
              .replace(eS, () => `${s[n++](e)}${r || ''}`)
              .replace(eM, eV);
          };
        },
        eT = 'react-spring: ',
        ej = (e) => {
          let t = !1;
          if ('function' != typeof e)
            throw TypeError(`${eT}once requires a function parameter`);
          return (...r) => {
            t || (e(...r), (t = !0));
          };
        },
        ez = ej(console.warn),
        eq = ej(console.warn);
      function e$(e) {
        return (
          M.str(e) &&
          ('#' == e[0] ||
            /\d/.test(e) ||
            (!j() && eF.test(e)) ||
            e in (z || {}))
        );
      }
      var eN = j() ? a.useEffect : a.useLayoutEffect,
        eB = () => {
          let e = (0, a.useRef)(!1);
          return (
            eN(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              [],
            ),
            e
          );
        };
      function eY() {
        let e = (0, a.useState)()[1],
          t = eB();
        return () => {
          t.current && e(Math.random());
        };
      }
      var eD = (e) => (0, a.useEffect)(e, eU),
        eU = [];
      function eX(e) {
        let t = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      }
      var eW = Symbol.for('Animated:node'),
        eL = (e) => !!e && e[eW] === e,
        eQ = (e) => e && e[eW],
        eG = (e, t) => C(e, eW, t),
        eZ = (e) => e && e[eW] && e[eW].getPayload(),
        eH = class {
          constructor() {
            eG(this, this);
          }
          getPayload() {
            return this.payload || [];
          }
        },
        eJ = class extends eH {
          constructor(e) {
            super(),
              (this._value = e),
              (this.done = !0),
              (this.durationProgress = 0),
              M.num(this._value) && (this.lastPosition = this._value);
          }
          static create(e) {
            return new eJ(e);
          }
          getPayload() {
            return [this];
          }
          getValue() {
            return this._value;
          }
          setValue(e, t) {
            return (
              M.num(e) &&
                ((this.lastPosition = e),
                t &&
                  ((e = Math.round(e / t) * t),
                  this.done && (this.lastPosition = e))),
              this._value !== e && ((this._value = e), !0)
            );
          }
          reset() {
            let { done: e } = this;
            (this.done = !1),
              M.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null));
          }
        },
        eK = class extends eJ {
          constructor(e) {
            super(0),
              (this._string = null),
              (this._toString = ef({ output: [e, e] }));
          }
          static create(e) {
            return new eK(e);
          }
          getValue() {
            let e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
          }
          setValue(e) {
            if (M.str(e)) {
              if (e == this._string) return !1;
              (this._string = e), (this._value = 1);
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null;
            }
            return !0;
          }
          reset(e) {
            e && (this._toString = ef({ output: [this.getValue(), e] })),
              (this._value = 0),
              super.reset();
          }
        },
        e0 = { dependencies: null },
        e1 = class extends eH {
          constructor(e) {
            super(), (this.source = e), this.setValue(e);
          }
          getValue(e) {
            let t = {};
            return (
              E(this.source, (r, n) => {
                eL(r)
                  ? (t[n] = r.getValue(e))
                  : ey(r)
                  ? (t[n] = ev(r))
                  : e || (t[n] = r);
              }),
              t
            );
          }
          setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
          }
          reset() {
            this.payload && I(this.payload, (e) => e.reset());
          }
          _makePayload(e) {
            if (e) {
              let t = new Set();
              return E(e, this._addToPayload, t), Array.from(t);
            }
          }
          _addToPayload(e) {
            e0.dependencies && ey(e) && e0.dependencies.add(e);
            let t = eZ(e);
            t && I(t, (e) => this.add(e));
          }
        },
        e2 = class extends e1 {
          constructor(e) {
            super(e);
          }
          static create(e) {
            return new e2(e);
          }
          getValue() {
            return this.source.map((e) => e.getValue());
          }
          setValue(e) {
            let t = this.getPayload();
            return e.length == t.length
              ? t.map((t, r) => t.setValue(e[r])).some(Boolean)
              : (super.setValue(e.map(e3)), !0);
          }
        };
      function e3(e) {
        let t = e$(e) ? eK : eJ;
        return t.create(e);
      }
      function e5(e) {
        let t = eQ(e);
        return t ? t.constructor : M.arr(e) ? e2 : e$(e) ? eK : eJ;
      }
      var e4 = (e, t) => {
          let r = !M.fun(e) || (e.prototype && e.prototype.isReactComponent);
          return (0, a.forwardRef)((n, s) => {
            let i = (0, a.useRef)(null),
              o =
                r &&
                (0, a.useCallback)(
                  (e) => {
                    i.current = (s && (M.fun(s) ? s(e) : (s.current = e)), e);
                  },
                  [s],
                ),
              [l, u] = (function (e, t) {
                let r = new Set();
                return (
                  (e0.dependencies = r),
                  e.style &&
                    (e = { ...e, style: t.createAnimatedStyle(e.style) }),
                  (e = new e1(e)),
                  (e0.dependencies = null),
                  [e, r]
                );
              })(n, t),
              d = eY(),
              c = () => {
                let e = i.current;
                if (r && !e) return;
                let n = !!e && t.applyAnimatedValues(e, l.getValue(!0));
                !1 === n && d();
              },
              p = new e9(c, u),
              f = (0, a.useRef)();
            eN(
              () => (
                (f.current = p),
                I(u, (e) => eP(e, p)),
                () => {
                  f.current &&
                    (I(f.current.deps, (e) => eO(e, f.current)),
                    h.cancel(f.current.update));
                }
              ),
            ),
              (0, a.useEffect)(c, []),
              eD(() => () => {
                let e = f.current;
                I(e.deps, (t) => eO(t, e));
              });
            let g = t.getComponentProps(l.getValue());
            return a.createElement(e, { ...g, ref: o });
          });
        },
        e9 = class {
          constructor(e, t) {
            (this.update = e), (this.deps = t);
          }
          eventObserved(e) {
            'change' == e.type && h.write(this.update);
          }
        },
        e7 = Symbol.for('AnimatedComponent'),
        e8 = (e) =>
          M.str(e)
            ? e
            : e && M.str(e.displayName)
            ? e.displayName
            : (M.fun(e) && e.name) || null;
      function e6(e, ...t) {
        return M.fun(e) ? e(...t) : e;
      }
      var te = (e, t) =>
          !0 === e || !!(t && e && (M.fun(e) ? e(t) : V(e).includes(t))),
        tt = (e, t) => (M.obj(e) ? t && e[t] : e),
        tr = (e, t) =>
          !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        tn = (e) => e,
        ts = (e, t = tn) => {
          let r = ti;
          e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
          let n = {};
          for (let s of r) {
            let r = t(e[s], s);
            M.und(r) || (n[s] = r);
          }
          return n;
        },
        ti = [
          'config',
          'onProps',
          'onStart',
          'onChange',
          'onPause',
          'onResume',
          'onRest',
        ],
        ta = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function to(e) {
        let t = (function (e) {
          let t = {},
            r = 0;
          if (
            (E(e, (e, n) => {
              !ta[n] && ((t[n] = e), r++);
            }),
            r)
          )
            return t;
        })(e);
        if (t) {
          let r = { to: t };
          return E(e, (e, n) => n in t || (r[n] = e)), r;
        }
        return { ...e };
      }
      function tl(e) {
        return (
          (e = ev(e)),
          M.arr(e)
            ? e.map(tl)
            : e$(e)
            ? l.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e
        );
      }
      function tu(e) {
        return M.fun(e) || (M.arr(e) && M.obj(e[0]));
      }
      var th = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: (e) => e,
          clamp: !1,
        },
        td = class {
          constructor() {
            (this.velocity = 0), Object.assign(this, th);
          }
        };
      function tc(e, t) {
        if (M.und(t.decay)) {
          let r = !M.und(t.tension) || !M.und(t.friction);
          (!r && M.und(t.frequency) && M.und(t.damping) && M.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            r && (e.frequency = void 0);
        } else e.duration = void 0;
      }
      var tp = [],
        tf = class {
          constructor() {
            (this.changed = !1),
              (this.values = tp),
              (this.toValues = null),
              (this.fromValues = tp),
              (this.config = new td()),
              (this.immediate = !1);
          }
        };
      function tg(
        e,
        { key: t, props: r, defaultProps: n, state: s, actions: i },
      ) {
        return new Promise((a, o) => {
          let u, d;
          let c = te(r.cancel ?? n?.cancel, t);
          if (c) g();
          else {
            M.und(r.pause) || (s.paused = te(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = s.paused || te(e, t)),
              (u = e6(r.delay || 0, t)),
              e ? (s.resumeQueue.add(f), i.pause()) : (i.resume(), f());
          }
          function p() {
            s.resumeQueue.add(f),
              s.timeouts.delete(d),
              d.cancel(),
              (u = d.time - h.now());
          }
          function f() {
            u > 0 && !l.skipAnimation
              ? ((s.delayed = !0),
                (d = h.setTimeout(g, u)),
                s.pauseQueue.add(p),
                s.timeouts.add(d))
              : g();
          }
          function g() {
            s.delayed && (s.delayed = !1),
              s.pauseQueue.delete(p),
              s.timeouts.delete(d),
              e <= (s.cancelId || 0) && (c = !0);
            try {
              i.start({ ...r, callId: e, cancel: c }, a);
            } catch (e) {
              o(e);
            }
          }
        });
      }
      var tm = (e, t) =>
          1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
            ? tb(e.get())
            : t.every((e) => e.noop)
            ? ty(e.get())
            : tv(
                e.get(),
                t.every((e) => e.finished),
              ),
        ty = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        tv = (e, t, r = !1) => ({ value: e, finished: t, cancelled: r }),
        tb = (e) => ({ value: e, cancelled: !0, finished: !1 });
      function t_(e, t, r, n) {
        let { callId: s, parentId: i, onRest: a } = t,
          { asyncTo: o, promise: u } = r;
        return i || e !== o || t.reset
          ? (r.promise = (async () => {
              let d, c, p;
              (r.asyncId = s), (r.asyncTo = e);
              let f = ts(t, (e, t) => ('onRest' === t ? void 0 : e)),
                g = new Promise((e, t) => ((d = e), (c = t))),
                m = (e) => {
                  let t =
                    (s <= (r.cancelId || 0) && tb(n)) ||
                    (s !== r.asyncId && tv(n, !1));
                  if (t) throw ((e.result = t), c(e), e);
                },
                y = (e, t) => {
                  let i = new tx(),
                    a = new tP();
                  return (async () => {
                    if (l.skipAnimation)
                      throw (tw(r), (a.result = tv(n, !1)), c(a), a);
                    m(i);
                    let o = M.obj(e) ? { ...e } : { ...t, to: e };
                    (o.parentId = s),
                      E(f, (e, t) => {
                        M.und(o[t]) && (o[t] = e);
                      });
                    let u = await n.start(o);
                    return (
                      m(i),
                      r.paused &&
                        (await new Promise((e) => {
                          r.resumeQueue.add(e);
                        })),
                      u
                    );
                  })();
                };
              if (l.skipAnimation) return tw(r), tv(n, !1);
              try {
                let t;
                (t = M.arr(e)
                  ? (async (e) => {
                      for (let t of e) await y(t);
                    })(e)
                  : Promise.resolve(e(y, n.stop.bind(n)))),
                  await Promise.all([t.then(d), g]),
                  (p = tv(n.get(), !0, !1));
              } catch (e) {
                if (e instanceof tx) p = e.result;
                else if (e instanceof tP) p = e.result;
                else throw e;
              } finally {
                s == r.asyncId &&
                  ((r.asyncId = i),
                  (r.asyncTo = i ? o : void 0),
                  (r.promise = i ? u : void 0));
              }
              return (
                M.fun(a) &&
                  h.batchedUpdates(() => {
                    a(p, n, n.item);
                  }),
                p
              );
            })())
          : u;
      }
      function tw(e, t) {
        R(e.timeouts, (e) => e.cancel()),
          e.pauseQueue.clear(),
          e.resumeQueue.clear(),
          (e.asyncId = e.asyncTo = e.promise = void 0),
          t && (e.cancelId = t);
      }
      var tx = class extends Error {
          constructor() {
            super(
              'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
          }
        },
        tP = class extends Error {
          constructor() {
            super('SkipAnimationSignal');
          }
        },
        tO = (e) => e instanceof tS,
        tk = 1,
        tS = class extends ew {
          constructor() {
            super(...arguments), (this.id = tk++), (this._priority = 0);
          }
          get priority() {
            return this._priority;
          }
          set priority(e) {
            this._priority != e &&
              ((this._priority = e), this._onPriorityChange(e));
          }
          get() {
            let e = eQ(this);
            return e && e.getValue();
          }
          to(...e) {
            return l.to(this, e);
          }
          interpolate(...e) {
            return (
              ez(
                `${eT}The "interpolate" function is deprecated in v9 (use "to" instead)`,
              ),
              l.to(this, e)
            );
          }
          toJSON() {
            return this.get();
          }
          observerAdded(e) {
            1 == e && this._attach();
          }
          observerRemoved(e) {
            0 == e && this._detach();
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            e_(this, { type: 'change', parent: this, value: e, idle: t });
          }
          _onPriorityChange(e) {
            this.idle || X.sort(this),
              e_(this, { type: 'priority', parent: this, priority: e });
          }
        },
        tA = Symbol.for('SpringPhase'),
        tC = (e) => (1 & e[tA]) > 0,
        tM = (e) => (2 & e[tA]) > 0,
        tF = (e) => (4 & e[tA]) > 0,
        tI = (e, t) => (t ? (e[tA] |= 3) : (e[tA] &= -3)),
        tE = (e, t) => (t ? (e[tA] |= 4) : (e[tA] &= -5)),
        tV = class extends tS {
          constructor(e, t) {
            if (
              (super(),
              (this.animation = new tf()),
              (this.defaultProps = {}),
              (this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._pendingCalls = new Set()),
              (this._lastCallId = 0),
              (this._lastToId = 0),
              (this._memoizedDuration = 0),
              !M.und(e) || !M.und(t))
            ) {
              let r = M.obj(e) ? { ...e } : { ...t, from: e };
              M.und(r.default) && (r.default = !0), this.start(r);
            }
          }
          get idle() {
            return !(tM(this) || this._state.asyncTo) || tF(this);
          }
          get goal() {
            return ev(this.animation.to);
          }
          get velocity() {
            let e = eQ(this);
            return e instanceof eJ
              ? e.lastVelocity || 0
              : e.getPayload().map((e) => e.lastVelocity || 0);
          }
          get hasAnimated() {
            return tC(this);
          }
          get isAnimating() {
            return tM(this);
          }
          get isPaused() {
            return tF(this);
          }
          get isDelayed() {
            return this._state.delayed;
          }
          advance(e) {
            let t = !0,
              r = !1,
              n = this.animation,
              { toValues: s } = n,
              { config: i } = n,
              a = eZ(n.to);
            !a && ey(n.to) && (s = V(ev(n.to))),
              n.values.forEach((o, l) => {
                if (o.done) return;
                let u = o.constructor == eK ? 1 : a ? a[l].lastPosition : s[l],
                  h = n.immediate,
                  d = u;
                if (!h) {
                  let t;
                  if (((d = o.lastPosition), i.tension <= 0)) {
                    o.done = !0;
                    return;
                  }
                  let r = (o.elapsedTime += e),
                    s = n.fromValues[l],
                    a =
                      null != o.v0
                        ? o.v0
                        : (o.v0 = M.arr(i.velocity)
                            ? i.velocity[l]
                            : i.velocity),
                    c =
                      i.precision ||
                      (s == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - s)));
                  if (M.und(i.duration)) {
                    if (i.decay) {
                      let e = !0 === i.decay ? 0.998 : i.decay,
                        n = Math.exp(-(1 - e) * r);
                      (d = s + (a / (1 - e)) * (1 - n)),
                        (h = Math.abs(o.lastPosition - d) <= c),
                        (t = a * n);
                    } else {
                      t = null == o.lastVelocity ? a : o.lastVelocity;
                      let r = i.restVelocity || c / 10,
                        n = i.clamp ? 0 : i.bounce,
                        l = !M.und(n),
                        p = s == u ? o.v0 > 0 : s < u,
                        f = Math.ceil(e / 1);
                      for (
                        let e = 0;
                        e < f &&
                        !(!(Math.abs(t) > r) && (h = Math.abs(u - d) <= c));
                        ++e
                      ) {
                        l && (d == u || d > u == p) && ((t = -t * n), (d = u));
                        let e = -(1e-6 * i.tension) * (d - u),
                          r = -(0.001 * i.friction) * t,
                          s = (e + r) / i.mass;
                        (t += 1 * s), (d += 1 * t);
                      }
                    }
                  } else {
                    let n = 1;
                    i.duration > 0 &&
                      (this._memoizedDuration !== i.duration &&
                        ((this._memoizedDuration = i.duration),
                        o.durationProgress > 0 &&
                          ((o.elapsedTime = i.duration * o.durationProgress),
                          (r = o.elapsedTime += e))),
                      (n =
                        (n = (i.progress || 0) + r / this._memoizedDuration) > 1
                          ? 1
                          : n < 0
                          ? 0
                          : n),
                      (o.durationProgress = n)),
                      (t =
                        ((d = s + i.easing(n) * (u - s)) - o.lastPosition) / e),
                      (h = 1 == n);
                  }
                  (o.lastVelocity = t),
                    Number.isNaN(d) &&
                      (console.warn('Got NaN while animating:', this),
                      (h = !0));
                }
                a && !a[l].done && (h = !1),
                  h ? (o.done = !0) : (t = !1),
                  o.setValue(d, i.round) && (r = !0);
              });
            let o = eQ(this),
              l = o.getValue();
            if (t) {
              let e = ev(n.to);
              (l !== e || r) && !i.decay
                ? (o.setValue(e), this._onChange(e))
                : r && i.decay && this._onChange(l),
                this._stop();
            } else r && this._onChange(l);
          }
          set(e) {
            return (
              h.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e);
              }),
              this
            );
          }
          pause() {
            this._update({ pause: !0 });
          }
          resume() {
            this._update({ pause: !1 });
          }
          finish() {
            if (tM(this)) {
              let { to: e, config: t } = this.animation;
              h.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop();
              });
            }
            return this;
          }
          update(e) {
            let t = this.queue || (this.queue = []);
            return t.push(e), this;
          }
          start(e, t) {
            let r;
            return (
              M.und(e)
                ? ((r = this.queue || []), (this.queue = []))
                : (r = [M.obj(e) ? e : { ...t, to: e }]),
              Promise.all(
                r.map((e) => {
                  let t = this._update(e);
                  return t;
                }),
              ).then((e) => tm(this, e))
            );
          }
          stop(e) {
            let { to: t } = this.animation;
            return (
              this._focus(this.get()),
              tw(this._state, e && this._lastCallId),
              h.batchedUpdates(() => this._stop(t, e)),
              this
            );
          }
          reset() {
            this._update({ reset: !0 });
          }
          eventObserved(e) {
            'change' == e.type
              ? this._start()
              : 'priority' == e.type && (this.priority = e.priority + 1);
          }
          _prepareNode(e) {
            let t = this.key || '',
              { to: r, from: n } = e;
            (null == (r = M.obj(r) ? r[t] : r) || tu(r)) && (r = void 0),
              null == (n = M.obj(n) ? n[t] : n) && (n = void 0);
            let s = { to: r, from: n };
            return (
              tC(this) ||
                (e.reverse && ([r, n] = [n, r]),
                (n = ev(n)),
                M.und(n) ? eQ(this) || this._set(r) : this._set(n)),
              s
            );
          }
          _update({ ...e }, t) {
            let { key: r, defaultProps: n } = this;
            e.default &&
              Object.assign(
                n,
                ts(e, (e, t) => (/^on/.test(t) ? tt(e, r) : e)),
              ),
              t$(this, e, 'onProps'),
              tN(this, 'onProps', e, this);
            let s = this._prepareNode(e);
            if (Object.isFrozen(this))
              throw Error(
                'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
              );
            let i = this._state;
            return tg(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  tF(this) ||
                    (tE(this, !0),
                    T(i.pauseQueue),
                    tN(
                      this,
                      'onPause',
                      tv(this, tR(this, this.animation.to)),
                      this,
                    ));
                },
                resume: () => {
                  tF(this) &&
                    (tE(this, !1),
                    tM(this) && this._resume(),
                    T(i.resumeQueue),
                    tN(
                      this,
                      'onResume',
                      tv(this, tR(this, this.animation.to)),
                      this,
                    ));
                },
                start: this._merge.bind(this, s),
              },
            }).then((r) => {
              if (e.loop && r.finished && !(t && r.noop)) {
                let t = tT(e);
                if (t) return this._update(t, !0);
              }
              return r;
            });
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(tb(this));
            let n = !M.und(e.to),
              s = !M.und(e.from);
            if (n || s) {
              if (!(t.callId > this._lastToId)) return r(tb(this));
              this._lastToId = t.callId;
            }
            let { key: i, defaultProps: a, animation: o } = this,
              { to: l, from: u } = o,
              { to: d = l, from: c = u } = e;
            s && !n && (!t.default || M.und(d)) && (d = c),
              t.reverse && ([d, c] = [c, d]);
            let p = !F(c, u);
            p && (o.from = c), (c = ev(c));
            let f = !F(d, l);
            f && this._focus(d);
            let g = tu(t.to),
              { config: m } = o,
              { decay: y, velocity: v } = m;
            (n || s) && (m.velocity = 0),
              t.config &&
                !g &&
                (function (e, t, r) {
                  for (let n in (r &&
                    (tc((r = { ...r }), t), (t = { ...r, ...t })),
                  tc(e, t),
                  Object.assign(e, t),
                  th))
                    null == e[n] && (e[n] = th[n]);
                  let { frequency: n, damping: s } = e,
                    { mass: i } = e;
                  M.und(n) ||
                    (n < 0.01 && (n = 0.01),
                    s < 0 && (s = 0),
                    (e.tension = Math.pow((2 * Math.PI) / n, 2) * i),
                    (e.friction = (4 * Math.PI * s * i) / n));
                })(
                  m,
                  e6(t.config, i),
                  t.config !== a.config ? e6(a.config, i) : void 0,
                );
            let b = eQ(this);
            if (!b || M.und(d)) return r(tv(this, !0));
            let _ = M.und(t.reset)
                ? s && !t.default
                : !M.und(c) && te(t.reset, i),
              w = _ ? c : this.get(),
              x = tl(d),
              P = M.num(x) || M.arr(x) || e$(x),
              O = !g && (!P || te(a.immediate || t.immediate, i));
            if (f) {
              let e = e5(d);
              if (e !== b.constructor) {
                if (O) b = this._set(x);
                else
                  throw Error(
                    `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                  );
              }
            }
            let k = b.constructor,
              S = ey(d),
              A = !1;
            if (!S) {
              let e = _ || (!tC(this) && p);
              (f || e) && (S = !(A = F(tl(w), x))),
                ((F(o.immediate, O) || O) &&
                  F(m.decay, y) &&
                  F(m.velocity, v)) ||
                  (S = !0);
            }
            if (
              (A &&
                tM(this) &&
                (o.changed && !_ ? (S = !0) : S || this._stop(l)),
              !g &&
                ((S || ey(l)) &&
                  ((o.values = b.getPayload()),
                  (o.toValues = ey(d) ? null : k == eK ? [1] : V(x))),
                o.immediate == O || ((o.immediate = O), O || _ || this._set(l)),
                S))
            ) {
              let { onRest: e } = o;
              I(tq, (e) => t$(this, t, e));
              let n = tv(this, tR(this, l));
              T(this._pendingCalls, n),
                this._pendingCalls.add(r),
                o.changed &&
                  h.batchedUpdates(() => {
                    (o.changed = !_),
                      e?.(n, this),
                      _ ? e6(a.onRest, n) : o.onStart?.(n, this);
                  });
            }
            _ && this._set(w),
              g
                ? r(t_(t.to, t, this._state, this))
                : S
                ? this._start()
                : tM(this) && !f
                ? this._pendingCalls.add(r)
                : r(ty(w));
          }
          _focus(e) {
            let t = this.animation;
            e !== t.to &&
              (eb(this) && this._detach(),
              (t.to = e),
              eb(this) && this._attach());
          }
          _attach() {
            let e = 0,
              { to: t } = this.animation;
            ey(t) && (eP(t, this), tO(t) && (e = t.priority + 1)),
              (this.priority = e);
          }
          _detach() {
            let { to: e } = this.animation;
            ey(e) && eO(e, this);
          }
          _set(e, t = !0) {
            let r = ev(e);
            if (!M.und(r)) {
              let e = eQ(this);
              if (!e || !F(r, e.getValue())) {
                let n = e5(r);
                e && e.constructor == n ? e.setValue(r) : eG(this, n.create(r)),
                  e &&
                    h.batchedUpdates(() => {
                      this._onChange(r, t);
                    });
              }
            }
            return eQ(this);
          }
          _onStart() {
            let e = this.animation;
            e.changed ||
              ((e.changed = !0),
              tN(this, 'onStart', tv(this, tR(this, e.to)), this));
          }
          _onChange(e, t) {
            t || (this._onStart(), e6(this.animation.onChange, e, this)),
              e6(this.defaultProps.onChange, e, this),
              super._onChange(e, t);
          }
          _start() {
            let e = this.animation;
            eQ(this).reset(ev(e.to)),
              e.immediate ||
                (e.fromValues = e.values.map((e) => e.lastPosition)),
              tM(this) || (tI(this, !0), tF(this) || this._resume());
          }
          _resume() {
            l.skipAnimation ? this.finish() : X.start(this);
          }
          _stop(e, t) {
            if (tM(this)) {
              tI(this, !1);
              let r = this.animation;
              I(r.values, (e) => {
                e.done = !0;
              }),
                r.toValues && (r.onChange = r.onPause = r.onResume = void 0),
                e_(this, { type: 'idle', parent: this });
              let n = t ? tb(this.get()) : tv(this.get(), tR(this, e ?? r.to));
              T(this._pendingCalls, n),
                r.changed && ((r.changed = !1), tN(this, 'onRest', n, this));
            }
          }
        };
      function tR(e, t) {
        let r = tl(t),
          n = tl(e.get());
        return F(n, r);
      }
      function tT(e, t = e.loop, r = e.to) {
        let n = e6(t);
        if (n) {
          let s = !0 !== n && to(n),
            i = (s || e).reverse,
            a = !s || s.reset;
          return tj({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || tu(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...s,
          });
        }
      }
      function tj(e) {
        let { to: t, from: r } = (e = to(e)),
          n = new Set();
        return (
          M.obj(t) && tz(t, n),
          M.obj(r) && tz(r, n),
          (e.keys = n.size ? Array.from(n) : null),
          e
        );
      }
      function tz(e, t) {
        E(e, (e, r) => null != e && t.add(r));
      }
      var tq = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
      function t$(e, t, r) {
        e.animation[r] = t[r] !== tr(t, r) ? tt(t[r], e.key) : void 0;
      }
      function tN(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r);
      }
      var tB = ['onStart', 'onChange', 'onRest'],
        tY = 1,
        tD = class {
          constructor(e, t) {
            (this.id = tY++),
              (this.springs = {}),
              (this.queue = []),
              (this._lastAsyncId = 0),
              (this._active = new Set()),
              (this._changed = new Set()),
              (this._started = !1),
              (this._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._events = {
                onStart: new Map(),
                onChange: new Map(),
                onRest: new Map(),
              }),
              (this._onFrame = this._onFrame.bind(this)),
              t && (this._flush = t),
              e && this.start({ default: !0, ...e });
          }
          get idle() {
            return (
              !this._state.asyncTo &&
              Object.values(this.springs).every(
                (e) => e.idle && !e.isDelayed && !e.isPaused,
              )
            );
          }
          get item() {
            return this._item;
          }
          set item(e) {
            this._item = e;
          }
          get() {
            let e = {};
            return this.each((t, r) => (e[r] = t.get())), e;
          }
          set(e) {
            for (let t in e) {
              let r = e[t];
              M.und(r) || this.springs[t].set(r);
            }
          }
          update(e) {
            return e && this.queue.push(tj(e)), this;
          }
          start(e) {
            let { queue: t } = this;
            return (e ? (t = V(e).map(tj)) : (this.queue = []), this._flush)
              ? this._flush(this, t)
              : (tZ(this, t), tU(this, t));
          }
          stop(e, t) {
            if ((!!e !== e && (t = e), t)) {
              let r = this.springs;
              I(V(t), (t) => r[t].stop(!!e));
            } else
              tw(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
            return this;
          }
          pause(e) {
            if (M.und(e)) this.start({ pause: !0 });
            else {
              let t = this.springs;
              I(V(e), (e) => t[e].pause());
            }
            return this;
          }
          resume(e) {
            if (M.und(e)) this.start({ pause: !1 });
            else {
              let t = this.springs;
              I(V(e), (e) => t[e].resume());
            }
            return this;
          }
          each(e) {
            E(this.springs, e);
          }
          _onFrame() {
            let { onStart: e, onChange: t, onRest: r } = this._events,
              n = this._active.size > 0,
              s = this._changed.size > 0;
            ((n && !this._started) || (s && !this._started)) &&
              ((this._started = !0),
              R(e, ([e, t]) => {
                (t.value = this.get()), e(t, this, this._item);
              }));
            let i = !n && this._started,
              a = s || (i && r.size) ? this.get() : null;
            s &&
              t.size &&
              R(t, ([e, t]) => {
                (t.value = a), e(t, this, this._item);
              }),
              i &&
                ((this._started = !1),
                R(r, ([e, t]) => {
                  (t.value = a), e(t, this, this._item);
                }));
          }
          eventObserved(e) {
            if ('change' == e.type)
              this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ('idle' != e.type) return;
              this._active.delete(e.parent);
            }
            h.onFrame(this._onFrame);
          }
        };
      function tU(e, t) {
        return Promise.all(t.map((t) => tX(e, t))).then((t) => tm(e, t));
      }
      async function tX(e, t, r) {
        let { keys: n, to: s, from: i, loop: a, onRest: o, onResolve: l } = t,
          u = M.obj(t.default) && t.default;
        a && (t.loop = !1),
          !1 === s && (t.to = null),
          !1 === i && (t.from = null);
        let d = M.arr(s) || M.fun(s) ? s : void 0;
        d
          ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
          : I(tB, (r) => {
              let n = t[r];
              if (M.fun(n)) {
                let s = e._events[r];
                (t[r] = ({ finished: e, cancelled: t }) => {
                  let r = s.get(n);
                  r
                    ? (e || (r.finished = !1), t && (r.cancelled = !0))
                    : s.set(n, {
                        value: null,
                        finished: e || !1,
                        cancelled: t || !1,
                      });
                }),
                  u && (u[r] = t[r]);
              }
            });
        let c = e._state;
        !c.paused === t.pause
          ? ((c.paused = t.pause), T(t.pause ? c.pauseQueue : c.resumeQueue))
          : c.paused && (t.pause = !0);
        let p = (n || Object.keys(e.springs)).map((r) => e.springs[r].start(t)),
          f = !0 === t.cancel || !0 === tr(t, 'cancel');
        (d || (f && c.asyncId)) &&
          p.push(
            tg(++e._lastAsyncId, {
              props: t,
              state: c,
              actions: {
                pause: A,
                resume: A,
                start(t, r) {
                  f
                    ? (tw(c, e._lastAsyncId), r(tb(e)))
                    : ((t.onRest = o), r(t_(d, t, c, e)));
                },
              },
            }),
          ),
          c.paused &&
            (await new Promise((e) => {
              c.resumeQueue.add(e);
            }));
        let g = tm(e, await Promise.all(p));
        if (a && g.finished && !(r && g.noop)) {
          let r = tT(t, a, s);
          if (r) return tZ(e, [r]), tX(e, r, !0);
        }
        return l && h.batchedUpdates(() => l(g, e, e.item)), g;
      }
      function tW(e, t) {
        let r = { ...e.springs };
        return (
          t &&
            I(V(t), (e) => {
              M.und(e.keys) && (e = tj(e)),
                M.obj(e.to) || (e = { ...e, to: void 0 }),
                tG(r, e, (e) => tQ(e));
            }),
          tL(e, r),
          r
        );
      }
      function tL(e, t) {
        E(t, (t, r) => {
          e.springs[r] || ((e.springs[r] = t), eP(t, e));
        });
      }
      function tQ(e, t) {
        let r = new tV();
        return (r.key = e), t && eP(r, t), r;
      }
      function tG(e, t, r) {
        t.keys &&
          I(t.keys, (n) => {
            let s = e[n] || (e[n] = r(n));
            s._prepareNode(t);
          });
      }
      function tZ(e, t) {
        I(t, (t) => {
          tG(e.springs, t, (t) => tQ(t, e));
        });
      }
      var tH = ({ children: e, ...t }) => {
          let r = (0, a.useContext)(tJ),
            n = t.pause || !!r.pause,
            s = t.immediate || !!r.immediate;
          t = (function (e, t) {
            let [r] = (0, a.useState)(() => ({ inputs: t, result: e() })),
              n = (0, a.useRef)(),
              s = n.current,
              i = s;
            if (i) {
              let r = !!(
                t &&
                i.inputs &&
                (function (e, t) {
                  if (e.length !== t.length) return !1;
                  for (let r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                  return !0;
                })(t, i.inputs)
              );
              r || (i = { inputs: t, result: e() });
            } else i = r;
            return (
              (0, a.useEffect)(() => {
                (n.current = i), s == r && (r.inputs = r.result = void 0);
              }, [i]),
              i.result
            );
          })(() => ({ pause: n, immediate: s }), [n, s]);
          let { Provider: i } = tJ;
          return a.createElement(i, { value: t }, e);
        },
        tJ =
          (Object.assign(tH, a.createContext({})),
          (tH.Provider._context = tH),
          (tH.Consumer._context = tH),
          tH);
      (tH.Provider = tJ.Provider), (tH.Consumer = tJ.Consumer);
      var tK = () => {
        let e = [],
          t = function (t) {
            eq(
              `${eT}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            let n = [];
            return (
              I(e, (e, s) => {
                if (M.und(t)) n.push(e.start());
                else {
                  let i = r(t, e, s);
                  i && n.push(e.start(i));
                }
              }),
              n
            );
          };
        (t.current = e),
          (t.add = function (t) {
            e.includes(t) || e.push(t);
          }),
          (t.delete = function (t) {
            let r = e.indexOf(t);
            ~r && e.splice(r, 1);
          }),
          (t.pause = function () {
            return I(e, (e) => e.pause(...arguments)), this;
          }),
          (t.resume = function () {
            return I(e, (e) => e.resume(...arguments)), this;
          }),
          (t.set = function (t) {
            I(e, (e, r) => {
              let n = M.fun(t) ? t(r, e) : t;
              n && e.set(n);
            });
          }),
          (t.start = function (t) {
            let r = [];
            return (
              I(e, (e, n) => {
                if (M.und(t)) r.push(e.start());
                else {
                  let s = this._getProps(t, e, n);
                  s && r.push(e.start(s));
                }
              }),
              r
            );
          }),
          (t.stop = function () {
            return I(e, (e) => e.stop(...arguments)), this;
          }),
          (t.update = function (t) {
            return I(e, (e, r) => e.update(this._getProps(t, e, r))), this;
          });
        let r = function (e, t, r) {
          return M.fun(e) ? e(r, t) : e;
        };
        return (t._getProps = r), t;
      };
      function t0(e, t) {
        let r = M.fun(e),
          [[n], s] = (function (e, t, r) {
            let n = M.fun(t) && t;
            n && !r && (r = []);
            let s = (0, a.useMemo)(
                () => (n || 3 == arguments.length ? tK() : void 0),
                [],
              ),
              i = (0, a.useRef)(0),
              o = eY(),
              l = (0, a.useMemo)(
                () => ({
                  ctrls: [],
                  queue: [],
                  flush(e, t) {
                    let r = tW(e, t),
                      n =
                        i.current > 0 &&
                        !l.queue.length &&
                        !Object.keys(r).some((t) => !e.springs[t]);
                    return n
                      ? tU(e, t)
                      : new Promise((n) => {
                          tL(e, r),
                            l.queue.push(() => {
                              n(tU(e, t));
                            }),
                            o();
                        });
                  },
                }),
                [],
              ),
              u = (0, a.useRef)([...l.ctrls]),
              h = [],
              d = eX(e) || 0;
            function c(e, r) {
              for (let s = e; s < r; s++) {
                let e = u.current[s] || (u.current[s] = new tD(null, l.flush)),
                  r = n ? n(s, e) : t[s];
                r &&
                  (h[s] = (function (e) {
                    let t = tj(e);
                    return M.und(t.default) && (t.default = ts(t)), t;
                  })(r));
              }
            }
            (0, a.useMemo)(() => {
              I(u.current.slice(e, d), (e) => {
                e.ref?.delete(e), s?.delete(e), e.stop(!0);
              }),
                (u.current.length = e),
                c(d, e);
            }, [e]),
              (0, a.useMemo)(() => {
                c(0, Math.min(d, e));
              }, r);
            let p = u.current.map((e, t) => tW(e, h[t])),
              f = (0, a.useContext)(tH),
              g = eX(f),
              m =
                f !== g &&
                (function (e) {
                  for (let t in e) return !0;
                  return !1;
                })(f);
            eN(() => {
              i.current++, (l.ctrls = u.current);
              let { queue: e } = l;
              e.length && ((l.queue = []), I(e, (e) => e())),
                I(u.current, (e, t) => {
                  s?.add(e), m && e.start({ default: f });
                  let r = h[t];
                  if (r) {
                    var n;
                    (n = r.ref) &&
                      e.ref !== n &&
                      (e.ref?.delete(e), n.add(e), (e.ref = n)),
                      e.ref ? e.queue.push(r) : e.start(r);
                  }
                });
            }),
              eD(() => () => {
                I(l.ctrls, (e) => e.stop(!0));
              });
            let y = p.map((e) => ({ ...e }));
            return s ? [y, s] : y;
          })(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, s] : n;
      }
      var t1 = class extends tS {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.idle = !0),
            (this._active = new Set()),
            (this.calc = ef(...t));
          let r = this._get(),
            n = e5(r);
          eG(this, n.create(r));
        }
        advance(e) {
          let t = this._get(),
            r = this.get();
          F(t, r) || (eQ(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && t3(this._active) && t5(this);
        }
        _get() {
          let e = M.arr(this.source) ? this.source.map(ev) : V(ev(this.source));
          return this.calc(...e);
        }
        _start() {
          this.idle &&
            !t3(this._active) &&
            ((this.idle = !1),
            I(eZ(this), (e) => {
              e.done = !1;
            }),
            l.skipAnimation
              ? (h.batchedUpdates(() => this.advance()), t5(this))
              : X.start(this));
        }
        _attach() {
          let e = 1;
          I(V(this.source), (t) => {
            ey(t) && eP(t, this),
              tO(t) &&
                (t.idle || this._active.add(t),
                (e = Math.max(e, t.priority + 1)));
          }),
            (this.priority = e),
            this._start();
        }
        _detach() {
          I(V(this.source), (e) => {
            ey(e) && eO(e, this);
          }),
            this._active.clear(),
            t5(this);
        }
        eventObserved(e) {
          'change' == e.type
            ? e.idle
              ? this.advance()
              : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
            ? this._active.delete(e.parent)
            : 'priority' == e.type &&
              (this.priority = V(this.source).reduce(
                (e, t) => Math.max(e, (tO(t) ? t.priority : 0) + 1),
                0,
              ));
        }
      };
      function t2(e) {
        return !1 !== e.idle;
      }
      function t3(e) {
        return !e.size || Array.from(e).every(t2);
      }
      function t5(e) {
        e.idle ||
          ((e.idle = !0),
          I(eZ(e), (e) => {
            e.done = !0;
          }),
          e_(e, { type: 'idle', parent: e }));
      }
      l.assign({ createStringInterpolator: eR, to: (e, t) => new t1(e, t) }),
        X.advance;
      var t4 = r(8431),
        t9 = /^--/,
        t7 = {},
        t8 = {
          animationIterationCount: !0,
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
        t6 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
        re = ['Webkit', 'Ms', 'Moz', 'O'];
      t8 = Object.keys(t8).reduce(
        (e, t) => (re.forEach((r) => (e[t6(r, t)] = e[t])), e),
        t8,
      );
      var rt = /^(matrix|translate|scale|rotate|skew)/,
        rr = /^(translate)/,
        rn = /^(rotate|skew)/,
        rs = (e, t) => (M.num(e) && 0 !== e ? e + t : e),
        ri = (e, t) =>
          M.arr(e)
            ? e.every((e) => ri(e, t))
            : M.num(e)
            ? e === t
            : parseFloat(e) === t,
        ra = class extends e1 {
          constructor({ x: e, y: t, z: r, ...n }) {
            let s = [],
              i = [];
            (e || t || r) &&
              (s.push([e || 0, t || 0, r || 0]),
              i.push((e) => [
                `translate3d(${e.map((e) => rs(e, 'px')).join(',')})`,
                ri(e, 0),
              ])),
              E(n, (e, t) => {
                if ('transform' === t)
                  s.push([e || '']), i.push((e) => [e, '' === e]);
                else if (rt.test(t)) {
                  if ((delete n[t], M.und(e))) return;
                  let r = rr.test(t) ? 'px' : rn.test(t) ? 'deg' : '';
                  s.push(V(e)),
                    i.push(
                      'rotate3d' === t
                        ? ([e, t, n, s]) => [
                            `rotate3d(${e},${t},${n},${rs(s, r)})`,
                            ri(s, 0),
                          ]
                        : (e) => [
                            `${t}(${e.map((e) => rs(e, r)).join(',')})`,
                            ri(e, t.startsWith('scale') ? 1 : 0),
                          ],
                    );
                }
              }),
              s.length && (n.transform = new ro(s, i)),
              super(n);
          }
        },
        ro = class extends ew {
          constructor(e, t) {
            super(),
              (this.inputs = e),
              (this.transforms = t),
              (this._value = null);
          }
          get() {
            return this._value || (this._value = this._get());
          }
          _get() {
            let e = '',
              t = !0;
            return (
              I(this.inputs, (r, n) => {
                let s = ev(r[0]),
                  [i, a] = this.transforms[n](M.arr(s) ? s : r.map(ev));
                (e += ' ' + i), (t = t && a);
              }),
              t ? 'none' : e
            );
          }
          observerAdded(e) {
            1 == e && I(this.inputs, (e) => I(e, (e) => ey(e) && eP(e, this)));
          }
          observerRemoved(e) {
            0 == e && I(this.inputs, (e) => I(e, (e) => ey(e) && eO(e, this)));
          }
          eventObserved(e) {
            'change' == e.type && (this._value = null), e_(this, e);
          }
        };
      l.assign({
        batchedUpdates: t4.unstable_batchedUpdates,
        createStringInterpolator: eR,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      var rl = ((
        e,
        {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = (e) => new e1(e),
          getComponentProps: n = (e) => e,
        } = {},
      ) => {
        let s = {
            applyAnimatedValues: t,
            createAnimatedStyle: r,
            getComponentProps: n,
          },
          i = (e) => {
            let t = e8(e) || 'Anonymous';
            return (
              ((e = M.str(e)
                ? i[e] || (i[e] = e4(e, s))
                : e[e7] || (e[e7] = e4(e, s))).displayName = `Animated(${t})`),
              e
            );
          };
        return (
          E(e, (t, r) => {
            M.arr(e) && (r = e8(t)), (i[r] = i(t));
          }),
          { animated: i }
        );
      })(
        [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ],
        {
          applyAnimatedValues: function (e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let r =
                'filter' === e.nodeName ||
                (e.parentNode && 'filter' === e.parentNode.nodeName),
              {
                style: n,
                children: s,
                scrollTop: i,
                scrollLeft: a,
                viewBox: o,
                ...l
              } = t,
              u = Object.values(l),
              h = Object.keys(l).map((t) =>
                r || e.hasAttribute(t)
                  ? t
                  : t7[t] ||
                    (t7[t] = t.replace(
                      /([A-Z])/g,
                      (e) => '-' + e.toLowerCase(),
                    )),
              );
            for (let t in (void 0 !== s && (e.textContent = s), n))
              if (n.hasOwnProperty(t)) {
                var d;
                let r =
                  null == (d = n[t]) || 'boolean' == typeof d || '' === d
                    ? ''
                    : 'number' != typeof d ||
                      0 === d ||
                      t9.test(t) ||
                      (t8.hasOwnProperty(t) && t8[t])
                    ? ('' + d).trim()
                    : d + 'px';
                t9.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
              }
            h.forEach((t, r) => {
              e.setAttribute(t, u[r]);
            }),
              void 0 !== i && (e.scrollTop = i),
              void 0 !== a && (e.scrollLeft = a),
              void 0 !== o && e.setAttribute('viewBox', o);
          },
          createAnimatedStyle: (e) => new ra(e),
          getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r,
        },
      ).animated;
    },
  },
]);
