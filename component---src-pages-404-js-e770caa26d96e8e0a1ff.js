(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{196:function(e,t,a){"use strict";a.r(t);a(200);var r=a(0),n=a.n(r),i=a(3),s=a.n(i),o=a(197),l=a.n(o),d=a(201),c=(a(18),a(203)),u=a.n(c);a(191);function f(e){var t=Object.assign({},e);return n.a.createElement(u.a,Object.assign({},t,{className:"rounded-image"}))}a(192);a.d(t,"pageQuery",function(){return p});var m=function(e){var t=e.data,a=Object(r.useState)(0),i=a[0],s=a[1],o=Object(r.useState)(0),c=o[0],u=o[1],m=t.allFile.edges;Object(r.useEffect)(function(){var e=null;if(0===c){var t=0;do{t=Math.floor(Math.random()*m.length)}while(t===i);e=setTimeout(function(){s(t)},400)}else e=setTimeout(function(){return u(0)},5e3);return function(){clearTimeout(e)}},[c]),Object(r.useEffect)(function(){var e=null;return 0===c&&(e=setTimeout(function(){return u(1)},400)),function(){clearTimeout(e)}},[i]);var p=l()("fourOFour__image-wrapper",{"fourOFour__image-wrapper--hidden":0===c});return n.a.createElement(d.a,null,n.a.createElement("h2",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... In the meantime you can enjoy some random images of my cats!"),n.a.createElement("section",{className:p},n.a.createElement(f,{fadeIn:!1,fixed:m[i].node.childImageSharp.fixed})))};m.propTypes={data:s.a.object.isRequired};var p="2066797770";t.default=m},198:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(30),a(23),a(17),a(45),a(18);var r=a(0),n=a.n(r),i=a(197),s=a.n(i),o=a(3),l=a.n(o),d=a(88);a(184);function c(e){var t=e.children,a=e.inverse,r=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["children","inverse"]),i=s()("styled-link",{"styled-link--inverse":a});return n.a.createElement(d.Link,Object.assign({},r,{className:i}),t)}c.propTypes={children:l.a.element,inverse:l.a.bool},c.defaultProps={children:[],inverse:!1}},200:function(e,t,a){"use strict";a(202)("fixed",function(e){return function(){return e(this,"tt","","")}})},201:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(199),s=a.n(i),o=a(3),l=a.n(o),d=a(198),c=a(197),u=a.n(c);a(185);function f(e){var t=e.children,a=e.className,r=u()("content-wrapper",a);return n.a.createElement("div",{className:r},t)}f.propTypes={children:l.a.element,className:l.a.string},f.defaultProps={children:[],className:void 0};a(186);var m=function(e){var t=e.siteTitle;return n.a.createElement("header",{className:"header"},n.a.createElement(f,null,n.a.createElement(d.a,{inverse:!0,to:"/"},n.a.createElement("h1",{style:{margin:0}},t))))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var p=m,g=(a(187),function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(f,{className:"column"},n.a.createElement("section",{className:"footer__links"},n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/antonholmberg"},n.a.createElement("figure",{className:"fab fa-github footer__social-media-icon"}),n.a.createElement("figcaption",{className:"footer__social-media-text"},"antonholmberg")),n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/540GrunkSpin"},n.a.createElement("figure",{className:"fab fa-twitter-square footer__social-media-icon"}),n.a.createElement("figcaption",{className:"footer__social-media-text"},"540GrunkSpin")),n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/anton-holmberg-9738a281/"},n.a.createElement("figure",{className:"fab fa-linkedin footer__social-media-icon"}),n.a.createElement("figcaption",{className:"footer__social-media-text"},"Anton Holmberg.")))))}),h=(a(188),function(e){var t=e.children;return n.a.createElement("div",{className:"layout"},n.a.createElement(s.a,null,n.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.2/css/all.css",integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",crossOrigin:"anonymous"})),n.a.createElement(p,{siteTitle:"Anton Holmberg"}),n.a.createElement("main",null,n.a.createElement(f,null,t)),n.a.createElement(g,null))});h.propTypes={children:l.a.arrayOf(l.a.element)},h.defaultProps={children:[]};t.a=h},202:function(e,t,a){var r=a(6),n=a(8),i=a(36),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},203:function(e,t,a){"use strict";a(30),a(23),a(17),a(63),a(125),a(200);var r=a(13);t.__esModule=!0,t.default=void 0;var n,i=r(a(61)),s=r(a(62)),o=r(a(122)),l=r(a(123)),d=r(a(0)),c=r(a(3)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)}).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(T,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},T=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});T.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,O=e.loading,L=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:k?1:0,transition:_?"opacity "+b+"ms":"none"},o),j="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},_&&V,o,f),x={title:t,alt:this.state.isVisible?"":a,style:z,className:m};if(p){var P=p,C=P[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),j&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&V)}),C.base64&&d.default.createElement(I,{src:C.base64,spreadProps:x,imageVariants:P,generateSources:w}),C.tracedSVG&&d.default.createElement(I,{src:C.tracedSVG,spreadProps:x,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(P),d.default.createElement(T,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:O},C,{imageVariants:P}))}}))}if(g){var q=g,M=q[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},j&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},_&&V)}),M.base64&&d.default.createElement(I,{src:M.base64,spreadProps:x,imageVariants:q,generateSources:w}),M.tracedSVG&&d.default.createElement(I,{src:M.tracedSVG,spreadProps:x,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(q),d.default.createElement(T,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:O},M,{imageVariants:q}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:_,sizes:R,fixed:c.default.oneOfType([_,c.default.arrayOf(_)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=k;t.default=j}}]);
//# sourceMappingURL=component---src-pages-404-js-e770caa26d96e8e0a1ff.js.map