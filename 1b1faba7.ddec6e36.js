(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(87)),i={id:"tunnel-my",title:"Tunnel My ...",sidebar_label:"Tunnel My ...",slug:"/tunnel-my"},c={unversionedId:"tunnel-my",id:"tunnel-my",isDocsHomePage:!1,title:"Tunnel My ...",description:"Wordpress",source:"@site/docs/tunnel-my.md",slug:"/tunnel-my",permalink:"/docs/tunnel-my",editUrl:"https://github.com/localhost-run/site/edit/main/docs/tunnel-my.md",version:"current",sidebar_label:"Tunnel My ...",sidebar:"docs",previous:{title:"TLS Passthru Tunnels",permalink:"/docs/tls-passthru-tunnels"},next:{title:"The Forever Free Tier",permalink:"/docs/forever-free"}},s=[{value:"Wordpress",id:"wordpress",children:[]},{value:"Favourite Web framework",id:"favourite-web-framework",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"wordpress"},"Wordpress"),Object(o.b)("p",null,"Wordpress is configured to run under a specific URL, usually ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost"),". This is excellent for local development but not for being on the internet."),Object(o.b)("p",null,"Follow the instructions at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wordpress.org/support/article/changing-the-site-url/"}),"https://wordpress.org/support/article/changing-the-site-url/")," to set the URL of your wordpress installation."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Free domains change after a period of time and are not recommended for Wordpress due to Wordpress's lengthy URL update procedure."),Object(o.b)("p",{parentName:"div"},"If you will primarily be developing Wordpress sites please consider a Custom Domain plan from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://admin.localhost.run."}),"https://admin.localhost.run.")," This will give your tunnel a stable domain name which you only need to configure once."))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you want to use Wordpress with a free domain you can explore ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wordpress.org/plugins/relative-url/"}),"https://wordpress.org/plugins/relative-url/")," and setting ",Object(o.b)("inlineCode",{parentName:"p"},"WP_HOME")," and ",Object(o.b)("inlineCode",{parentName:"p"},"WP_SITEURL")," to ",Object(o.b)("inlineCode",{parentName:"p"},"'https://' . $_SERVER['HTTP_HOST']"),", but please pay attention to the warnings on the relative-url plugin."))),Object(o.b)("h2",{id:"favourite-web-framework"},"Favourite Web framework"),Object(o.b)("p",null,"If you see requests going to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:{your locally running apps port}")," in your browsers dev tools when browsing your site through localhost.run check your framework for reverse proxy settings."),Object(o.b)("p",null,"More information can be found in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"faq#i-can-see-requests-to-localhost8080-when-browsing-my-site-thru-localhostrun"}),"the faq"),"."))}p.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);