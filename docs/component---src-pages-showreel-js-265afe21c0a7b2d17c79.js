(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,n){"use strict";n.r(t);var a=n(182),r=n(0),o=n.n(r),i=n(188),l=n(186);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("body",null,o.a.createElement(l.a,{title:"Showreel"}),o.a.createElement("h1",null,"Showreel"),o.a.createElement(a.a,{to:"/"},"Go back to the homepage")))}},182:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(59),c=n.n(l);n.d(t,"a",function(){return c.a});n(183);var u=r.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:n,render:a||o,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},183:function(e,t,n){var a;e.exports=(a=n(185))&&a.default||a},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Britt Clennett"}}}}},185:function(e,t,n){"use strict";n.r(t);n(21),n(14),n(13),n(7),n(20);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(85);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}({location:t,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},186:function(e,t,n){"use strict";var a=n(187),r=n(0),o=n.n(r),i=n(12),l=n.n(i),c=n(192),u=n.n(c),s=n(182);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(s.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},o.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"}))},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Britt Clennett",description:"See my latest articles, stories and showreels",author:"Jordan"}}}}},188:function(e,t,n){"use strict";var a=n(184),r=n(0),o=n.n(r),i=n(12),l=n.n(i),c=n(182),u=(n(189),function(){return o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{to:"/showreel"},"Showreel")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/tv"},"TV")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/about"},"About"))))}),s=(n(190),function(){return o.a.createElement("header",null,o.a.createElement(c.a,{to:"/"},"Britt Clennett"),o.a.createElement(u,null))}),d=(n(191),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null),o.a.createElement("div",null,t))},data:a})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-showreel-js-265afe21c0a7b2d17c79.js.map