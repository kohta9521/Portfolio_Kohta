(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5895: function (e, t, o) {
      Promise.resolve().then(o.bind(o, 3430)),
        Promise.resolve().then(o.bind(o, 2743)),
        Promise.resolve().then(o.t.bind(o, 4680, 23)),
        Promise.resolve().then(o.t.bind(o, 5906, 23)),
        Promise.resolve().then(o.t.bind(o, 2732, 23)),
        Promise.resolve().then(o.t.bind(o, 2380, 23)),
        Promise.resolve().then(o.t.bind(o, 4652, 23)),
        Promise.resolve().then(o.t.bind(o, 155, 23)),
        Promise.resolve().then(o.t.bind(o, 3372, 23)),
        Promise.resolve().then(o.t.bind(o, 9022, 23)),
        Promise.resolve().then(o.t.bind(o, 3868, 23));
    },
    3430: function (e, t, o) {
      'use strict';
      let i;
      o.r(t),
        o.d(t, {
          default: function () {
            return m;
          },
        });
      var n = o(9268),
        r = o(644),
        s = o(6006);
      let a = (e, t, o) => {
          (0, s.useEffect)(() => {
            let n = (n) => {
              i
                ? t.start({
                    opacity: 100,
                    top: n.y - e.height / (2 / o),
                    left: n.x - e.width / (2 / o),
                  })
                : t.start({
                    opacity: 100,
                    top: n.y - e.height / 2,
                    left: n.x - e.width / 2,
                  });
            };
            return (
              window.addEventListener('mousemove', n),
              () => {
                window.removeEventListener('mousemove', n);
              }
            );
          }, [t, e, o]);
        },
        l = (e, t, o, n) => {
          (0, s.useEffect)(() => {
            let r = document.querySelectorAll(n),
              s = () => {
                t.start({
                  width: e.width * o,
                  height: e.height * o,
                  borderRadius: e.borderRadius * o,
                }),
                  (i = !0);
              };
            return (
              r.forEach((e) => {
                e.addEventListener('mouseover', s);
              }),
              () => {
                r.forEach((e) => {
                  e.removeEventListener('mouseover', s);
                });
              }
            );
          }, [e, t, o, n]);
        },
        _ = (e, t, o, n) => {
          (0, s.useEffect)(() => {
            let o = document.querySelectorAll(n),
              r = () => {
                t.start({
                  width: e.width,
                  height: e.height,
                  borderRadius: e.borderRadius,
                }),
                  (i = !1);
              };
            return (
              o.forEach((e) => {
                e.addEventListener('mouseout', r);
              }),
              () => {
                o.forEach((e) => {
                  e.removeEventListener('mouseout', r);
                });
              }
            );
          }, [e, t, o, n]);
        };
      var u = (e, t, o) => {
        let [i, n] = (0, r.q_)(() => ({ to: e, config: t }));
        return a(e, n, o), l(e, n, o, 'a'), _(e, n, o, 'a'), i;
      };
      let d = {
          width: 16,
          height: 16,
          borderRadius: 8,
          opacity: 0,
          top: 0,
          left: 0,
        },
        c = { frequency: 0.2, damping: 2 },
        h = {
          pointerEvents: 'none',
          position: 'fixed',
          zIndex: 100,
          border: 'solid 1px black',
          backgroundColor: 'white',
          mixBlendMode: 'difference',
        };
      var m = () => {
        let e = u(d, c, 3);
        return (0, n.jsx)(r.q.div, { style: { ...h, ...e } });
      };
    },
    2743: function (e, t, o) {
      'use strict';
      o.r(t),
        o.d(t, {
          default: function () {
            return d;
          },
        });
      var i = o(9268),
        n = o(6006);
      o(231);
      var r = o(226);
      let s = r.ZP.timeline(),
        a = () => {
          s.to('body', {
            duration: 0.1,
            css: { overflowY: 'hidden' },
            ease: 'power3.inOut',
          })
            .to('.landing', {
              duration: 0.05,
              css: { overflowY: 'hidden', height: '90vh' },
            })
            .to('.texts-container', {
              duration: 0,
              opacity: 1,
              ease: 'Power3.easeOut',
            })
            .from('.texts-container span', {
              duration: 1.5,
              delay: 1,
              y: 70,
              skewY: 10,
              stagger: 0.4,
              ease: 'Power3.easeOut',
            })
            .to('.texts-container span', {
              duration: 1,
              y: 70,
              skewY: -20,
              stagger: 0.2,
              ease: 'Power3.easeOut',
            })
            .to('.landing', {
              duration: 0.05,
              css: { overflowY: 'hidden', height: 'unset' },
            })
            .to('body', {
              duration: 0.1,
              css: { overflowY: 'scroll' },
              ease: 'power3.inOut',
            })
            .from('.landing__top .sub', {
              duration: 1,
              opacity: 0,
              y: 80,
              ease: 'expo.easeOut',
            })
            .to(
              '.preloader',
              {
                duration: 1.5,
                height: '0vh',
                ease: 'Power3.easeOut',
                onComplete: l(),
              },
              '-=2',
            )
            .from('.landing__main .text', {
              duration: 2,
              y: 10,
              opacity: 0,
              stagger: { amount: 2 },
              ease: 'power3.easeInOut',
            })
            .from('.links .item', {
              duration: 0.5,
              opacity: 0,
              delay: window.innerWidth < 763 ? -3 : -0.6,
              stagger: { amount: 0.5 },
              ease: 'expo.easeOut',
              onComplete: u(),
            })
            .from('.main-circle', {
              duration: 1,
              opacity: 0,
              ease: 'power3.easeInOut',
              onComplete: _(),
            })
            .from('.shapes .shape', {
              duration: 1,
              opacity: 0,
              delay: -1,
              ease: 'power3.easeInOut',
              stagger: 1,
            })
            .to('.preloader', { duration: 0, css: { display: 'none' } });
        },
        l = () => {
          window.innerWidth < 763 &&
            s.from('.landing__main2', {
              duration: 1,
              delay: 0,
              opacity: 0,
              y: 80,
              ease: 'expo.easeOut',
            });
        },
        _ = () => {
          let e = r.ZP.timeline({ repeat: -1 });
          e.to('.shapes .shape', {
            duration: 4,
            rotate: 360,
            delay: -1,
            ease: 'power3.easeInOut',
            stagger: 2,
          })
            .to('.shapes .shape-3', {
              duration: 1,
              rotate: 360,
              delay: -2,
              ease: 'power3.easeInOut',
            })
            .to('.shapes .shape', {
              duration: 3,
              rotate: 0,
              ease: 'power3.easeInOut',
              stagger: 1,
            })
            .to('.shapes .shape', {
              duration: 1,
              opacity: 0,
              delay: -1,
              ease: 'power3.easeInOut',
              stagger: 1,
            })
            .to('.shapes .shape', {
              duration: 1.5,
              opacity: 1,
              ease: 'power3.easeInOut',
              stagger: 1,
            });
        },
        u = () => {
          let e = r.ZP.timeline({ repeat: -1 });
          e.to('.shapes .main-circle', {
            duration: 6,
            x: -30,
            y: -50,
            ease: 'expo.easeOut',
          })
            .to('.shapes .main-circle', {
              duration: 6,
              x: -30,
              y: 50,
              ease: 'expo.easeOut',
            })
            .to('.shapes .main-circle', {
              duration: 4,
              x: 0,
              y: 0,
              ease: 'expo.easeOut',
            });
        };
      var d = () => (
        (0, n.useEffect)(() => {
          a();
        }, []),
        (0, i.jsx)('div', {
          className: 'preloader',
          children: (0, i.jsxs)('div', {
            className: 'texts-container',
            children: [
              (0, i.jsx)('span', { children: 'Kohta　 ' }),
              (0, i.jsx)('span', { children: 'Engineer　 ' }),
              (0, i.jsx)('span', { children: 'Portfolio　' }),
            ],
          }),
        })
      );
    },
    231: function () {},
    9022: function (e) {
      e.exports = {
        button: 'Button_button__KJLpU',
        bgleft: 'Button_bgleft__xH4ot',
        small: 'Button_small__VOp9X',
        medium: 'Button_medium__I946X',
        large: 'Button_large__Z5Z4J',
        bgBlack: 'Button_bgBlack__9emVO',
        bgGreen: 'Button_bgGreen__ENH2t',
      };
    },
    2380: function (e) {
      e.exports = {
        listBox: 'ListItem_listBox__Im28g',
        listLink: 'ListItem_listLink__X6gqs',
      };
    },
    5906: function (e) {
      e.exports = {
        logoLink: 'Logo_logoLink__lYWFb',
        logoImg: 'Logo_logoImg__2JpzJ',
        small: 'Logo_small__3abwj',
        medium: 'Logo_medium___Cze3',
        large: 'Logo_large__BbhM2',
      };
    },
    3372: function (e) {
      e.exports = {
        sectionTitle: 'SectionTitle_sectionTitle__CsJt2',
        title: 'SectionTitle_title__oy6Zd',
        left: 'SectionTitle_left__5aqCr',
        center: 'SectionTitle_center__Vq06x',
        right: 'SectionTitle_right__Obidq',
        whiteText: 'SectionTitle_whiteText__7jw0e',
        blackText: 'SectionTitle_blackText__kBJYa',
      };
    },
    155: function (e) {
      e.exports = {
        heroTitleBox: 'HeroTitleBox_heroTitleBox__7IBeQ',
        title: 'HeroTitleBox_title__u2e5o',
        subTitle: 'HeroTitleBox_subTitle__9l25u',
      };
    },
    2732: function (e) {
      e.exports = { list: 'List_list__WltbM' };
    },
    3868: function (e) {
      e.exports = {
        about: 'About_about__h3eRi',
        container: 'About_container__xg1lP',
        flexbox: 'About_flexbox__ax_jl',
        textbox: 'About_textbox__3LVE5',
        text: 'About_text__Fy7Of',
        imgbox: 'About_imgbox__kkz_3',
        img: 'About_img__t_tq0',
      };
    },
    4680: function (e) {
      e.exports = {
        header: 'Header_header__Z48O_',
        container: 'Header_container__8_R9u',
      };
    },
    4652: function (e) {
      e.exports = {
        hero: 'Hero_hero__lJC9M',
        container: 'Hero_container__rk_wk',
        imgBox: 'Hero_imgBox__goeDl',
        img: 'Hero_img__hK3qX',
        scrolldown3: 'Hero_scrolldown3__eD_lT',
        mousemove: 'Hero_mousemove__Xeucu',
        mousepathmove: 'Hero_mousepathmove__Dnso1',
      };
    },
  },
  function (e) {
    e.O(0, [224, 924, 253, 961, 744], function () {
      return e((e.s = 5895));
    }),
      (_N_E = e.O());
  },
]);
