(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9985)}])},4263:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var r={nickname:"shelooks16",navbar:{title:"Andrew Hulenko",links:[{text:"Github \ud83d\udd25",href:"https://github.com/shelooks16",target:"_blank",rel:"noreferrer"},{text:"CV \u2728",href:"/cv"},{text:"RSS \ud83d\udd16",href:"/rss.xml"}]},home:{meta:{title:"Home | shelooks16",description:"Andrew Hulenko (shelooks16) personal webpage and blog."},articles:{title:"Articles"}},notFound:{meta:{title:"Not Found \u2620\ufe0f shelooks16",description:"Page does not exist."},header:{title:"\u2620\ufe0f Page not found \u2620\ufe0f",description:"Seems like \ud83e\udd16 destroyed this page completely..."},backToHomeText:"Go back to Home page"},cv:{meta:{title:"Curriculum Vitae | shelooks16",description:"Read Curriculum Vitae Andrew Hulenko (shelooks16)"}}}},2284:function(e,t,n){"use strict";var r=n(5893),i=n(9110),o=n.n(i),a=n(4184),l=n.n(a);t.Z=function(e){var t=e.children,n=e.className;return(0,r.jsx)("div",{className:l()(o().container,n),children:t})}},3479:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),i=n(2284),o=n(852),a=n.n(o),l=n(1664),c=n(4263);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=function(){return(0,r.jsxs)("nav",{className:a().nav,children:[(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("a",{className:a().title,children:c.Q.navbar.title})}),(0,r.jsx)("div",{className:a().links,children:c.Q.navbar.links.map((function(e){var t=e.href,n=e.text,i=f(e,["href","text"]);return(0,r.jsx)("div",{className:a().linkItem,children:(0,r.jsx)(l.default,{href:t,children:(0,r.jsx)("a",u({},i,{children:n}))})},t)}))})]})},h=n(7213),p=n.n(h),v=function(e){var t=e.children;return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{className:p().main,children:t})]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),l=n(387),c=n(7190);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=l.useRouter(),f=o.default.useMemo((function(){var t=r(a.resolveHref(i,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?a.resolveHref(i,e.as):o||n}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,_=e.scroll,y=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var x=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,b=r(c.useIntersection({rootMargin:"200px"}),2),j=b[0],g=b[1],k=o.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);o.default.useEffect((function(){var e=g&&n&&a.isLocalURL(d),t="undefined"!==typeof y?y:i&&i.locale,r=s[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(i,d,h,{locale:t})}),[h,d,g,y,n,i]);var w={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:l}))}(e,i,d,h,v,m,_,y)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof y?y:i&&i.locale,O=i&&i.isLocaleDomain&&a.getDomainLocale(h,N,i&&i.locales,i&&i.domainLocales);w.href=O||a.addBasePath(a.addLocale(h,N,i&&i.defaultLocale))}return o.default.cloneElement(t,w)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=i.useRef(),s=r(i.useState(!1),2),u=s[0],f=s[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var l=new Map},9985:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return y}});var r=n(5893),i=n(9008),o=n(4263),a=n(3479),l=n(2249),c=n.n(l),s=function(e){var t=e.title,n=e.children;return(0,r.jsxs)("section",{className:c().section,children:[(0,r.jsx)("h2",{className:c().title,children:t}),(0,r.jsx)("div",{children:n})]})},u=n(5214),f=n.n(u),d=n(1664),h=n(4768),p=n.n(h),v=function(e){var t=e.data,n=t.date,i=t.description,o=t.readingTime,a=t.slug,l=t.title;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:p().infos,children:function(){var e=[];return e.push("\ud83d\udcf0 "+n),o&&e.push("~"+o),e.join(" | ")}()}),(0,r.jsx)("h3",{className:p().itemTitle,children:(0,r.jsx)(d.default,{href:"/articles/".concat(a),children:(0,r.jsx)("a",{children:l})})}),(0,r.jsx)("p",{className:p().description,children:i})]})},m=function(e){var t=e.articles;return(0,r.jsx)("ul",{className:f().list,children:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(v,{data:e})},e.slug)}))})},_=!0;function y(e){var t=e.articles;return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:o.Q.home.meta.title}),(0,r.jsx)("meta",{name:"description",content:o.Q.home.meta.description})]}),(0,r.jsx)(s,{title:o.Q.home.articles.title,children:(0,r.jsx)(m,{articles:t})})]})}},9110:function(e){e.exports={container:"Container_container__2TJTd"}},2249:function(e){e.exports={section:"Section_section__3RPji",title:"Section_title__1SNNZ"}},4768:function(e){e.exports={cover:"ArticlePreviewItem_cover__2W2MB",itemTitle:"ArticlePreviewItem_itemTitle__hJx6W",infos:"ArticlePreviewItem_infos__27ntt",description:"ArticlePreviewItem_description__og-b0"}},5214:function(e){e.exports={list:"ArticlePreviewList_list__iVYYP"}},852:function(e){e.exports={nav:"Nav_nav__1X3wC",links:"Nav_links__3O9Ls",title:"Nav_title__2ikB7",linkItem:"Nav_linkItem__2Zm8n"}},7213:function(e){e.exports={main:"PageWithNav_main__1ygJR"}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);