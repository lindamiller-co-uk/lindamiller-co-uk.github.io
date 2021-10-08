(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{292:function(e,t,a){"use strict";a.r(t);var n=a(10),o=a.n(n),r=a(0),i=a.n(r),l=a(126),c=a.n(l),u=a(470),d=a.n(u),s=a(545),f=a.n(s),p=a(38),m=a.n(p),g=a(1),h=a.n(g),b=a(543),v=a.n(b),y=a(393),x=a.n(y),S=a(341),E=a.n(S),O=a(475),w=a.n(O),j=(a(53),a(324)),k={root:Object.assign({},j.h,{position:"relative",padding:"20px 15px",lineHeight:"20px",marginBottom:"20px",fontSize:"14px",backgroundColor:"white",color:"#555555",borderRadius:"0px",maxWidth:"100%",minWidth:"auto",boxShadow:"0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"}),info:Object.assign({backgroundColor:"#00d3ee",color:"#ffffff"},j.k),success:Object.assign({backgroundColor:"#5cb860",color:"#ffffff"},j.s),warning:Object.assign({backgroundColor:"#ffa21a",color:"#ffffff"},j.x),danger:Object.assign({backgroundColor:"#f55a4e",color:"#ffffff"},j.e),primary:Object.assign({backgroundColor:"#af2cc5",color:"#ffffff"},j.n),message:{padding:"0",display:"block",maxWidth:"89%"},close:{width:"14px",height:"14px"},iconButton:{width:"24px",height:"24px",float:"right",fontSize:"1.5rem",fontWeight:"500",lineHeight:"1",position:"absolute",right:"-4px",top:"0",padding:"0"},icon:{display:"block",float:"left",marginRight:"1.071rem"},container:Object.assign({},j.d,{position:"relative"})},_=function(e){function t(t){var a;(a=e.call(this,t)||this).closeAlert=a.closeAlert.bind(m()(a));var n=t.classes,o=t.message,r=t.color,l=t.close,c=t.icon,u=[];void 0!==l&&(u=[i.a.createElement(x.a,{className:n.iconButton,key:"close","aria-label":"Close",color:"inherit",onClick:a.closeAlert},i.a.createElement(w.a,{className:n.close}))]);var d=null;switch(typeof c){case"function":d=i.a.createElement(t.icon,{className:n.icon});break;case"string":d=i.a.createElement(E.a,{className:n.icon},t.icon);break;default:d=null}return a.state={alert:i.a.createElement(v.a,{message:i.a.createElement("div",null,d,o,void 0!==l?u:null),classes:{root:n.root+" "+n[r],message:n.message+" "+n.container}})},a}o()(t,e);var a=t.prototype;return a.closeAlert=function(){this.setState({alert:null})},a.render=function(){return this.state.alert},t}(i.a.Component);_.propTypes={classes:h.a.object.isRequired,message:h.a.node.isRequired,color:h.a.oneOf(["info","success","warning","danger","primary"]),close:h.a.bool,icon:h.a.oneOfType([h.a.func,h.a.string])};var z=c()(k)(_);function N(e){var t=Object.assign({},e).classes;return i.a.createElement("div",{className:t.clearfix})}N.propTypes={classes:h.a.object.isRequired};var M=c()({clearfix:{"&:after,&:before":{display:"table",content:'" "'},"&:after":{clear:"both"}}})(N),C={section:{backgroundColor:"#FFFFFF",display:"block",width:"100%",position:"relative",padding:"0"},title:Object.assign({},j.v,{marginTop:"30px",minHeight:"32px",textDecoration:"none"}),container:j.d},P=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.section,id:"notifications"},i.a.createElement("div",{className:e.container},i.a.createElement("div",{className:e.title},i.a.createElement("h3",null,"Notifications"))),i.a.createElement(z,{message:i.a.createElement("span",null,i.a.createElement("b",null,"INFO ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"info",icon:"info_outline"}),i.a.createElement(z,{message:i.a.createElement("span",null,i.a.createElement("b",null,"SUCCESS ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"success",icon:d.a}),i.a.createElement(z,{message:i.a.createElement("span",null,i.a.createElement("b",null,"WARNING ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"warning",icon:f.a}),i.a.createElement(z,{message:i.a.createElement("span",null,i.a.createElement("b",null,"DANGER ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"danger",icon:"info_outline"}),i.a.createElement(M,null))},t}(i.a.Component);t.default=c()(C)(P)},324:function(e,t,a){"use strict";a.d(t,"i",function(){return n}),a.d(t,"w",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return l}),a.d(t,"h",function(){return c}),a.d(t,"p",function(){return u}),a.d(t,"z",function(){return d}),a.d(t,"g",function(){return s}),a.d(t,"u",function(){return f}),a.d(t,"m",function(){return p}),a.d(t,"r",function(){return m}),a.d(t,"j",function(){return g}),a.d(t,"n",function(){return h}),a.d(t,"k",function(){return b}),a.d(t,"s",function(){return v}),a.d(t,"x",function(){return y}),a.d(t,"e",function(){return x}),a.d(t,"q",function(){return S}),a.d(t,"y",function(){return E}),a.d(t,"t",function(){return O}),a.d(t,"f",function(){return w}),a.d(t,"l",function(){return j}),a.d(t,"o",function(){return k}),a.d(t,"v",function(){return _}),a.d(t,"b",function(){return z});a(53);var n=260,o={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},r={paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},i=Object.assign({},r,{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),l={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},c={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},u="#9c27b0",d="#ff9800",s="#f44336",f="#4caf50",p="#00acc1",m="#e91e63",g="#999999",h={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"},b={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"},v={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"},y={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"},x={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"},S={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"},E=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},y),O=Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},v),w=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},x),j=Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},b),k=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},h),_=(Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},S),Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},c),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),z=Object.assign({},_,{marginTop:".625rem"})},330:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(361)),i=n(a(362));var l=function(e,t){var a=function(t){return o.default.createElement(i.default,t,e)};return a.displayName="".concat(t,"Icon"),(a=(0,r.default)(a)).muiName="SvgIcon",a};t.default=l},333:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(424))},341:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(352))},352:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(6)),r=n(a(12)),i=n(a(15)),l=n(a(0)),c=(n(a(1)),n(a(323))),u=(a(19),n(a(126))),d=a(325),s=function(e){return{root:{userSelect:"none",fontSize:24,width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:20},fontSizeLarge:{fontSize:36}}};function f(e){var t,a=e.children,n=e.classes,u=e.className,s=e.color,f=e.component,p=e.fontSize,m=(0,i.default)(e,["children","classes","className","color","component","fontSize"]);return l.default.createElement(f,(0,o.default)({className:(0,c.default)("material-icons",n.root,(t={},(0,r.default)(t,n["color".concat((0,d.capitalize)(s))],"inherit"!==s),(0,r.default)(t,n["fontSize".concat((0,d.capitalize)(p))],"default"!==p),t),u),"aria-hidden":"true"},m),a)}t.styles=s,f.defaultProps={color:"inherit",component:"span",fontSize:"default"},f.muiName="Icon";var p=(0,u.default)(s,{name:"MuiIcon"})(f);t.default=p},361:function(e,t,a){"use strict";var n=a(2);t.__esModule=!0,t.default=void 0;var o=n(a(402)),r=n(a(405)),i=(n(a(389)),n(a(390)),function(e){return(0,o.default)(function(e,t){return!(0,r.default)(e,t)})(e)});t.default=i},362:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(407))},389:function(e,t,a){"use strict";var n=a(2);t.__esModule=!0,t.default=void 0;var o=n(a(403)),r=function(e){return(0,o.default)("displayName",e)};t.default=r},390:function(e,t,a){"use strict";var n=a(2);t.__esModule=!0,t.default=void 0;var o=n(a(404)),r=function(e,t){return t+"("+(0,o.default)(e)+")"};t.default=r},393:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(420))},402:function(e,t,a){"use strict";var n=a(2);t.__esModule=!0,t.default=void 0;var o=n(a(10)),r=a(0),i=(n(a(389)),n(a(390)),function(e){return function(t){var a=(0,r.createFactory)(t);return function(t){function n(){return t.apply(this,arguments)||this}(0,o.default)(n,t);var r=n.prototype;return r.shouldComponentUpdate=function(t){return e(this.props,t)},r.render=function(){return a(this.props)},n}(r.Component)}});t.default=i},403:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e,t){return function(a){return a[e]=t,a}};t.default=n},404:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){return"string"==typeof e?e:e?e.displayName||e.name||"Component":void 0};t.default=n},405:function(e,t,a){"use strict";var n=a(2);t.__esModule=!0,t.default=void 0;var o=n(a(406)).default;t.default=o},406:function(e,t,a){"use strict";var n=Object.prototype.hasOwnProperty;function o(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(o(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(var i=0;i<a.length;i++)if(!n.call(t,a[i])||!o(e[a[i]],t[a[i]]))return!1;return!0}},407:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(6)),r=n(a(12)),i=n(a(15)),l=n(a(0)),c=(n(a(1)),n(a(323))),u=(a(19),n(a(126))),d=a(325),s=function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:24,transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:20},fontSizeLarge:{fontSize:35}}};function f(e){var t,a=e.children,n=e.classes,u=e.className,s=e.color,f=e.component,p=e.fontSize,m=e.nativeColor,g=e.titleAccess,h=e.viewBox,b=(0,i.default)(e,["children","classes","className","color","component","fontSize","nativeColor","titleAccess","viewBox"]);return l.default.createElement(f,(0,o.default)({className:(0,c.default)(n.root,(t={},(0,r.default)(t,n["color".concat((0,d.capitalize)(s))],"inherit"!==s),(0,r.default)(t,n["fontSize".concat((0,d.capitalize)(p))],"default"!==p),t),u),focusable:"false",viewBox:h,color:m,"aria-hidden":g?"false":"true",role:g?"img":"presentation"},b),a,g?l.default.createElement("title",null,g):null)}t.styles=s,f.defaultProps={color:"inherit",component:"svg",fontSize:"default",viewBox:"0 0 24 24"},f.muiName="SvgIcon";var p=(0,u.default)(s,{name:"MuiSvgIcon"})(f);t.default=p},420:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(6)),r=n(a(12)),i=n(a(15)),l=n(a(0)),c=(n(a(1)),n(a(323))),u=(a(19),n(a(126))),d=a(131),s=n(a(394)),f=a(325),p=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,d.fade)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}};function m(e){var t,a=e.children,n=e.classes,u=e.className,d=e.color,p=e.disabled,m=(0,i.default)(e,["children","classes","className","color","disabled"]);return l.default.createElement(s.default,(0,o.default)({className:(0,c.default)(n.root,(t={},(0,r.default)(t,n["color".concat((0,f.capitalize)(d))],"default"!==d),(0,r.default)(t,n.disabled,p),t),u),centerRipple:!0,focusRipple:!0,disabled:p},m),l.default.createElement("span",{className:n.label},a))}t.styles=p,m.defaultProps={color:"default",disabled:!1};var g=(0,u.default)(p,{name:"MuiIconButton"})(m);t.default=g},424:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(12)),r=n(a(15)),i=n(a(6)),l=n(a(0)),c=(n(a(1)),n(a(323))),u=(n(a(11)),a(19),n(a(126))),d=function(e){var t={};return e.shadows.forEach(function(e,a){t["elevation".concat(a)]={boxShadow:e}}),(0,i.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function s(e){var t=e.classes,a=e.className,n=e.component,u=e.square,d=e.elevation,s=(0,r.default)(e,["classes","className","component","square","elevation"]),f=(0,c.default)(t.root,t["elevation".concat(d)],(0,o.default)({},t.rounded,!u),a);return l.default.createElement(n,(0,i.default)({className:f},s))}t.styles=d,s.defaultProps={component:"div",elevation:2,square:!1};var f=(0,u.default)(d,{name:"MuiPaper"})(s);t.default=f},448:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(460))},460:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(6)),r=n(a(12)),i=n(a(15)),l=n(a(0)),c=(n(a(1)),n(a(323))),u=(a(19),n(a(126))),d=a(325),s=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},inline:{display:"inline"}}};t.styles=s;var f={display4:"h1",display3:"h2",display2:"h3",display1:"h4",headline:"h5",title:"h6",subheading:"subtitle1"};var p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3"};function m(e){var t,a=e.align,n=e.classes,u=e.className,s=e.color,m=e.component,g=e.gutterBottom,h=e.headlineMapping,b=e.inline,v=(e.internalDeprecatedVariant,e.noWrap),y=e.paragraph,x=e.theme,S=e.variant,E=(0,i.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","inline","internalDeprecatedVariant","noWrap","paragraph","theme","variant"]),O=function(e,t){var a=e.typography,n=t;return n||(n=a.useNextVariants?"body2":"body1"),a.useNextVariants&&(n=f[n]||n),n}(x,S),w=(0,c.default)(n.root,(t={},(0,r.default)(t,n[O],"inherit"!==O),(0,r.default)(t,n["color".concat((0,d.capitalize)(s))],"default"!==s),(0,r.default)(t,n.noWrap,v),(0,r.default)(t,n.gutterBottom,g),(0,r.default)(t,n.paragraph,y),(0,r.default)(t,n["align".concat((0,d.capitalize)(a))],"inherit"!==a),(0,r.default)(t,n.inline,b),t),u),j=m||(y?"p":h[O]||p[O])||"span";return l.default.createElement(j,(0,o.default)({className:w},E))}m.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:p,inline:!1,noWrap:!1,paragraph:!1};var g=(0,u.default)(s,{name:"MuiTypography",withTheme:!0})(m);t.default=g},470:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(330)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),"Check");t.default=r},475:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(330)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");t.default=r},543:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(544))},544:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(6)),r=n(a(15)),i=n(a(12)),l=n(a(0)),c=(n(a(1)),n(a(323))),u=n(a(126)),d=n(a(333)),s=n(a(448)),f=a(131),p=function(e){var t,a="light"===e.palette.type?.8:.98,n=(0,f.emphasize)(e.palette.background.default,a);return{root:(t={color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 24px"},(0,i.default)(t,e.breakpoints.up("md"),{minWidth:288,maxWidth:568,borderRadius:e.shape.borderRadius}),(0,i.default)(t,e.breakpoints.down("sm"),{flexGrow:1}),t),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:24,marginRight:-8}}};t.styles=p;var m=(0,u.default)(p,{name:"MuiSnackbarContent"})(function(e){var t=e.action,a=e.classes,n=e.className,i=e.message,u=(0,r.default)(e,["action","classes","className","message"]);return l.default.createElement(d.default,(0,o.default)({component:s.default,headlineMapping:{body1:"div",body2:"div"},role:"alertdialog",square:!0,elevation:6,className:(0,c.default)(a.root,n)},u),l.default.createElement("div",{className:a.message},i),t?l.default.createElement("div",{className:a.action},t):null)});t.default=m},545:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(330)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),"Warning");t.default=r}}]);
//# sourceMappingURL=component---src-pages-components-sections-section-notifications-jsx-18ec77e22d946d181573.js.map