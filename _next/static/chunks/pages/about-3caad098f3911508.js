(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(4228)}])},6673:function(e,t,r){"use strict";var n=r(5893),o=r(214),i=r.n(o),s=r(1664);t.Z=function(){return(0,n.jsxs)("footer",{className:i().footer,children:[(0,n.jsx)(s.default,{href:"/",passHref:!0,children:"HOME"}),(0,n.jsx)(s.default,{href:"/about",passHref:!0,children:"ABOUT"}),(0,n.jsx)(s.default,{href:"/demo/cat",passHref:!0,children:"DEMO: CAT"}),(0,n.jsx)(s.default,{href:"/demo/dog",passHref:!0,children:"DEMO: DOG"})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(c){a=!0,o=c}finally{try{s||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,s=(i=r(7294))&&i.__esModule?i:{default:i},a=r(6273),c=r(387),l=r(7190);var d={};function u(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[t+"%"+r+(o?"%"+o:"")]=!0}}var h=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),i=s.default.useMemo((function(){var t=o(a.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?a.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),h=i.href,p=i.as,f=e.children,m=e.replace,g=e.shallow,x=e.scroll,j=e.locale;"string"===typeof f&&(f=s.default.createElement("a",null,f));var y=(t=s.default.Children.only(f))&&"object"===typeof t&&t.ref,b=o(l.useIntersection({rootMargin:"200px"}),2),v=b[0],w=b[1],_=s.default.useCallback((function(e){v(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,v]);s.default.useEffect((function(){var e=w&&r&&a.isLocalURL(h),t="undefined"!==typeof j?j:n&&n.locale,o=d[h+"%"+p+(t?"%"+t:"")];e&&!o&&u(n,h,p,{locale:t})}),[p,h,w,j,r,n]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:s}))}(e,n,h,p,m,g,x,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(h)&&u(n,h,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof j?j:n&&n.locale,E=n&&n.isLocaleDomain&&a.getDomainLocale(p,S,n&&n.locales,n&&n.domainLocales);k.href=E||a.addBasePath(a.addLocale(p,S,n&&n.defaultLocale))}return s.default.cloneElement(t,k)};t.default=h},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(c){a=!0,o=c}finally{try{s||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!a,d=i.useRef(),u=o(i.useState(!1),2),h=u[0],p=u[1],f=o(i.useState(t?t.current:null),2),m=f[0],g=f[1],x=i.useCallback((function(e){d.current&&(d.current(),d.current=void 0),n||h||e&&e.tagName&&(d.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,s=n.elements;return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,h]);return i.useEffect((function(){if(!a&&!h){var e=s.requestIdleCallback((function(){return p(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[h]),i.useEffect((function(){t&&g(t.current)}),[t]),[x,h]};var i=r(7294),s=r(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},4228:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(9008),i=r(6673),s=r(214),a=r.n(s);t.default=function(){return(0,n.jsxs)("div",{className:a().container,children:[(0,n.jsxs)("div",{className:a().about,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"About this template"}),(0,n.jsx)("meta",{name:"description",content:"This is a Next.js template that can be exported as a static website and deployed on GitHub Pages."}),(0,n.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,n.jsxs)("main",{className:a().main,style:{alignItems:"flex-start"},children:[(0,n.jsxs)("h1",{className:a().description,children:[(0,n.jsx)("a",{href:"https://github.com/ethanppl/gh-pages-nextjs",children:"This is a Next.js project template with typescript"})," ","that can be exported as a static website and deployed on GitHub Pages."]}),(0,n.jsxs)("h3",{id:"what-are-basepath-and-assetprefix-in-next-config-js-",children:["What are ",(0,n.jsx)("code",{children:"basePath"})," and ",(0,n.jsx)("code",{children:"assetPrefix"})," in"," ",(0,n.jsx)("code",{children:"next.config.js"}),"?"]}),(0,n.jsxs)("p",{children:["They change the root directory from ",(0,n.jsx)("code",{children:"/"})," to ",(0,n.jsx)("code",{children:"/repository_name"}),"."," ",(0,n.jsx)("code",{children:"basePath"})," ensures all links point to the right path and"," ",(0,n.jsx)("code",{children:"assetPrefix"})," ensures assets like CSS files can be loaded from the right place. Remember you have to replace the ",(0,n.jsx)("code",{children:"repoName"})," in"," ",(0,n.jsx)("code",{children:"next.config.js"})," if you are deploying this on a new GitHub repository."]}),(0,n.jsxs)("h3",{id:"what-are-getstaticpaths-and-getstaticprops-",children:["What are ",(0,n.jsx)("code",{children:"getStaticPaths()"})," and ",(0,n.jsx)("code",{children:"getStaticProps()"}),"?"]}),(0,n.jsxs)("p",{children:["They are used to define dynamic inputs for static pages. ",(0,n.jsx)("code",{children:"pages/demo/[page]"})," ","is a dynamic route, Next.js requires a list of predefined paths to generate the static webpage. As specified in"," ",(0,n.jsx)("a",{href:"https://nextjs.org/docs/api-reference/data-fetching/get-static-paths",children:"Next.js documentation"}),", the list of possible routes has to be defined at build time in"," ",(0,n.jsx)("code",{children:"getStaticPaths()"}),", and fallback has to be false. With"," ",(0,n.jsx)("code",{children:"getStaticPaths"}),", we have to include ",(0,n.jsx)("code",{children:"getStaticProps"})," as well."]}),(0,n.jsx)("h3",{id:"image-not-showing-in-github-pages-but-works-fine-in-localhost-3000",children:"Image not showing in GitHub Pages but works fine in localhost:3000"}),(0,n.jsxs)("p",{children:["Try to use a relative path for images. After ",(0,n.jsx)("code",{children:"yarn export"}),", opening the corresponding HTML file in the ",(0,n.jsx)("code",{children:"out"})," directory should still load the images properly, only CSS files and navigation links cannot work properly."]}),(0,n.jsx)("h3",{id:"error-getstaticpaths-was-added-without-a-getstaticprops-in-page-without-getstaticprops-getstaticpaths-does-nothing-",children:"Error: getStaticPaths was added without a getStaticProps in page. Without getStaticProps, getStaticPaths does nothing."}),(0,n.jsxs)("p",{children:["You have to provide"," ",(0,n.jsx)("a",{href:"https://nextjs.org/docs/api-reference/data-fetching/get-static-props",children:(0,n.jsx)("code",{children:"getStaticProps()"})})," ","as well. Returning empty props will do the job:"]}),(0,n.jsx)("pre",{style:{overflow:"auto",width:"100%",textAlign:"center"},children:(0,n.jsxs)("code",{className:"lang-ts",children:[(0,n.jsx)("span",{className:"hljs-keyword",children:"export"})," ",(0,n.jsx)("span",{className:"hljs-keyword",children:"async"})," ",(0,n.jsxs)("span",{className:"hljs-function",children:[(0,n.jsx)("span",{className:"hljs-keyword",children:"function"})," ",(0,n.jsx)("span",{className:"hljs-title",children:"getStaticProps"}),"(",(0,n.jsx)("span",{className:"hljs-params"}),")"," "]}),"{",(0,n.jsx)("span",{className:"hljs-keyword",children:"return"})," {",(0,n.jsx)("span",{className:"hljs-attr",children:"props"}),": {}, }; }"]})}),(0,n.jsx)("h3",{id:"error-require-of-es-modules-is-not-supported-code-err_require_esm-",children:"Error: require() of ES modules is not supported. (code: 'ERR_REQUIRE_ESM')"}),(0,n.jsx)("p",{children:"It will say something like:"}),(0,n.jsx)("blockquote",{children:(0,n.jsx)("p",{children:'the module is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules. Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from the module package.json.'})}),(0,n.jsxs)("p",{children:["This happens because starting from Next.js version 12, Next.js follows the"," ",(0,n.jsx)("a",{href:"https://nextjs.org/blog/next-12#es-modules-support-and-url-imports",children:"JavaScript ecosystem transitions from CommonJS to ES modules"}),". Importing ES modules are prioritized over CommonJS modules."]}),(0,n.jsx)("p",{children:'To fix this, first find out which modules is packaged as an ES module, meaning it specified "type": "module" in package.json. If possible, avoid depending on that node modules. If not possible, fix it by:'}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Rename ",(0,n.jsx)("code",{children:"index.js"})," to ",(0,n.jsx)("code",{children:"index.cjs"}),", or"]}),(0,n.jsxs)("li",{children:["Change require code to use ",(0,n.jsx)("code",{children:"import()"}),", or"]}),(0,n.jsx)("li",{children:'Remove the "type": "module" declaration in package.json'})]}),(0,n.jsxs)("h3",{id:"error-image-optimization-using-next-js-default-loader-is-not-compatible-with-next-export-",children:["Error: Image Optimization using Next.js default loader is not compatible with"," ",(0,n.jsx)("code",{children:"next export"})]}),(0,n.jsxs)("p",{children:["You cannot use the ",(0,n.jsx)("code",{children:"<Image>"})," component provided by"," ",(0,n.jsx)("code",{children:"next/image"})," because the default loader in this component is not compatible with ",(0,n.jsx)("code",{children:"next export"}),". To solve this, use basic ",(0,n.jsx)("code",{children:"<img />"})," tag. Remember to set the path to relative path so that it works on GitHub Pages as well."]}),(0,n.jsxs)("p",{children:["Alternatively, you can use custom image-optimizer like"," ",(0,n.jsx)("a",{href:"https://github.com/cyrilwanner/next-optimized-images",children:"next-optimized-images"})," ","or other"," ",(0,n.jsx)("a",{href:"https://nextjs.org/docs/api-reference/next/image#built-in-loaders",children:"built-in loaders"}),". However, you have to be careful how they handle the image path."]}),(0,n.jsxs)("h3",{id:"links-redirected-to-username-github-io-page-instead-of-username-github-io-repository-page-",children:["Links redirected to ",(0,n.jsx)("code",{children:"username.github.io/page"})," instead of"," ",(0,n.jsx)("code",{children:"username.github.io/repository/page"})]}),(0,n.jsxs)("p",{children:["You have to use the ",(0,n.jsx)("code",{children:"<Link>"})," component provided by"," ",(0,n.jsx)("code",{children:"next/link"})," for all the links pointing to other Next.js routes. This component will prefix all the hyperlinks with your repository name so that all linkes work on GitHub Pages."]})]})]}),(0,n.jsx)(i.Z,{})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",about:"Home_about__6Y_1_",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",demoImg:"Home_demoImg__FEiXR"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);