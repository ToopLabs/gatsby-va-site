(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(187),o=n(185);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},181:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(59),l=n.n(c);n.d(t,"a",function(){return l.a});n(182);var u=r.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:n,render:a||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},182:function(e,t,n){var a;e.exports=(a=n(184))&&a.default||a},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Britt Clennett"}}}}},184:function(e,t,n){"use strict";n.r(t);n(21),n(14),n(13),n(7),n(20);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(85);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){l(e,t,n[t])})}return e}({location:t,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},185:function(e,t,n){"use strict";var a=n(186),r=n(0),i=n.n(r),o=n(12),c=n.n(o),l=n(190),u=n.n(l),s=n(181);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(s.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"}))},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},186:function(e){e.exports={data:{site:{siteMetadata:{title:"Britt Clennett",description:"See my latest articles, stories and showreels",author:"Jordan"}}}}},187:function(e,t,n){"use strict";var a=n(183),r=n(0),i=n.n(r),o=n(12),c=n.n(o),l=n(181),u=(n(188),function(){var e=function(){return document.querySelector(".toggle-nav").click()};return i.a.createElement("div",{className:"navigation"},i.a.createElement("input",{className:"toggle-nav",type:"checkbox",name:""}),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("ul",{className:"menu"},i.a.createElement("li",null,i.a.createElement(l.a,{onClick:e,to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(l.a,{onClick:e,to:"/portfolio"},"Portfolio")),i.a.createElement("li",null,i.a.createElement(l.a,{onClick:e,to:"/contact"},"Contact"))))}),s=(n(189),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null),i.a.createElement("div",null,t))},data:a})});s.propTypes={children:c.a.node.isRequired};t.a=s}}]);
//# sourceMappingURL=component---src-pages-404-js-2b8cf29b5d6205d50830.js.map