/*! For license information please see component---src-pages-components-sections-section-notifications-jsx-9e5a306e05ce3da447f1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"186y":function(e,t,a){"use strict";a.r(t);var n=a("dI71"),r=a("q1tI"),o=a.n(r),i=a("Hk+Y"),l=a.n(i),c=a("5rCv"),s=a.n(c),d=a("xV1m"),p=a.n(d),u=a("JX7q"),f=a("32VJ"),g=a.n(f),h=a("1IiC"),m=a.n(h),b=a("E49Y"),x=a.n(b),y=a("ZPUd"),v=a.n(y),E=a("y4MT"),w={root:Object.assign({},E.h,{position:"relative",padding:"20px 15px",lineHeight:"20px",marginBottom:"20px",fontSize:"14px",backgroundColor:"white",color:"#555555",borderRadius:"0px",maxWidth:"100%",minWidth:"auto",boxShadow:"0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"}),info:Object.assign({backgroundColor:"#00d3ee",color:"#ffffff"},E.k),success:Object.assign({backgroundColor:"#5cb860",color:"#ffffff"},E.s),warning:Object.assign({backgroundColor:"#ffa21a",color:"#ffffff"},E.x),danger:Object.assign({backgroundColor:"#f55a4e",color:"#ffffff"},E.e),primary:Object.assign({backgroundColor:"#af2cc5",color:"#ffffff"},E.n),message:{padding:"0",display:"block",maxWidth:"89%"},close:{width:"14px",height:"14px"},iconButton:{width:"24px",height:"24px",float:"right",fontSize:"1.5rem",fontWeight:"500",lineHeight:"1",position:"absolute",right:"-4px",top:"0",padding:"0"},icon:{display:"block",float:"left",marginRight:"1.071rem"},container:Object.assign({},E.d,{position:"relative"})},S=function(e){function t(t){var a;(a=e.call(this,t)||this).closeAlert=a.closeAlert.bind(Object(u.a)(a));var n=t.classes,r=t.message,i=t.color,l=t.close,c=t.icon,s=[];void 0!==l&&(s=[o.a.createElement(m.a,{className:n.iconButton,key:"close","aria-label":"Close",color:"inherit",onClick:a.closeAlert},o.a.createElement(v.a,{className:n.close}))]);var d=null;switch(typeof c){case"function":d=o.a.createElement(t.icon,{className:n.icon});break;case"string":d=o.a.createElement(x.a,{className:n.icon},t.icon);break;default:d=null}return a.state={alert:o.a.createElement(g.a,{message:o.a.createElement("div",null,d,r,void 0!==l?s:null),classes:{root:n.root+" "+n[i],message:n.message+" "+n.container}})},a}Object(n.a)(t,e);var a=t.prototype;return a.closeAlert=function(){this.setState({alert:null})},a.render=function(){return this.state.alert},t}(o.a.Component),j=l()(w)(S),k=a("hGi/");var O=l()({clearfix:{"&:after,&:before":{display:"table",content:'" "'},"&:after":{clear:"both"}}})((function(e){var t=Object.assign({},(Object(k.a)(e),e)).classes;return o.a.createElement("div",{className:t.clearfix})})),T={section:{backgroundColor:"#FFFFFF",display:"block",width:"100%",position:"relative",padding:"0"},title:Object.assign({},E.v,{marginTop:"30px",minHeight:"32px",textDecoration:"none"}),container:E.d},N=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.section,id:"notifications"},o.a.createElement("div",{className:e.container},o.a.createElement("div",{className:e.title},o.a.createElement("h3",null,"Notifications"))),o.a.createElement(j,{message:o.a.createElement("span",null,o.a.createElement("b",null,"INFO ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"info",icon:"info_outline"}),o.a.createElement(j,{message:o.a.createElement("span",null,o.a.createElement("b",null,"SUCCESS ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"success",icon:s.a}),o.a.createElement(j,{message:o.a.createElement("span",null,o.a.createElement("b",null,"WARNING ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"warning",icon:p.a}),o.a.createElement(j,{message:o.a.createElement("span",null,o.a.createElement("b",null,"DANGER ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"danger",icon:"info_outline"}),o.a.createElement(O,null))},t}(o.a.Component);t.default=l()(T)(N)},"2Bf+":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a("pVnL")),o=n(a("lSNA")),i=n(a("QILm")),l=n(a("q1tI")),c=(n(a("17x9")),n(a("TSYQ"))),s=(a("j4Xf"),n(a("Hk+Y"))),d=a("gasH"),p=function(e){return{root:{userSelect:"none",fontSize:24,width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:20},fontSizeLarge:{fontSize:36}}};function u(e){var t,a=e.children,n=e.classes,s=e.className,p=e.color,u=e.component,f=e.fontSize,g=(0,i.default)(e,["children","classes","className","color","component","fontSize"]);return l.default.createElement(u,(0,r.default)({className:(0,c.default)("material-icons",n.root,(t={},(0,o.default)(t,n["color".concat((0,d.capitalize)(p))],"inherit"!==p),(0,o.default)(t,n["fontSize".concat((0,d.capitalize)(f))],"default"!==f),t),s),"aria-hidden":"true"},g),a)}t.styles=p,u.defaultProps={color:"inherit",component:"span",fontSize:"default"},u.muiName="Icon";var f=(0,s.default)(p,{name:"MuiIcon"})(u);t.default=f},"32VJ":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a("GTII"))},"5rCv":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),o=(0,n(a("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),"Check");t.default=o},"6ZaM":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a("v3sT"))},E49Y:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a("2Bf+"))},GTII:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a("pVnL")),o=n(a("QILm")),i=n(a("lSNA")),l=n(a("q1tI")),c=(n(a("17x9")),n(a("TSYQ"))),s=n(a("Hk+Y")),d=n(a("pPbJ")),p=n(a("6ZaM")),u=a("wClv"),f=function(e){var t,a="light"===e.palette.type?.8:.98,n=(0,u.emphasize)(e.palette.background.default,a);return{root:(t={color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 24px"},(0,i.default)(t,e.breakpoints.up("md"),{minWidth:288,maxWidth:568,borderRadius:e.shape.borderRadius}),(0,i.default)(t,e.breakpoints.down("sm"),{flexGrow:1}),t),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:24,marginRight:-8}}};t.styles=f;var g=(0,s.default)(f,{name:"MuiSnackbarContent"})((function(e){var t=e.action,a=e.classes,n=e.className,i=e.message,s=(0,o.default)(e,["action","classes","className","message"]);return l.default.createElement(d.default,(0,r.default)({component:p.default,headlineMapping:{body1:"div",body2:"div"},role:"alertdialog",square:!0,elevation:6,className:(0,c.default)(a.root,n)},s),l.default.createElement("div",{className:a.message},i),t?l.default.createElement("div",{className:a.action},t):null)}));t.default=g},JX7q:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},ZPUd:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),o=(0,n(a("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");t.default=o},"hGi/":function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure "+e)}a.d(t,"a",(function(){return n}))},v3sT:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a("pVnL")),o=n(a("lSNA")),i=n(a("QILm")),l=n(a("q1tI")),c=(n(a("17x9")),n(a("TSYQ"))),s=(a("j4Xf"),n(a("Hk+Y"))),d=a("gasH"),p=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},inline:{display:"inline"}}};t.styles=p;var u={display4:"h1",display3:"h2",display2:"h3",display1:"h4",headline:"h5",title:"h6",subheading:"subtitle1"};var f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3"};function g(e){var t,a=e.align,n=e.classes,s=e.className,p=e.color,g=e.component,h=e.gutterBottom,m=e.headlineMapping,b=e.inline,x=(e.internalDeprecatedVariant,e.noWrap),y=e.paragraph,v=e.theme,E=e.variant,w=(0,i.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","inline","internalDeprecatedVariant","noWrap","paragraph","theme","variant"]),S=function(e,t){var a=e.typography,n=t;return n||(n=a.useNextVariants?"body2":"body1"),a.useNextVariants&&(n=u[n]||n),n}(v,E),j=(0,c.default)(n.root,(t={},(0,o.default)(t,n[S],"inherit"!==S),(0,o.default)(t,n["color".concat((0,d.capitalize)(p))],"default"!==p),(0,o.default)(t,n.noWrap,x),(0,o.default)(t,n.gutterBottom,h),(0,o.default)(t,n.paragraph,y),(0,o.default)(t,n["align".concat((0,d.capitalize)(a))],"inherit"!==a),(0,o.default)(t,n.inline,b),t),s),k=g||(y?"p":m[S]||f[S])||"span";return l.default.createElement(k,(0,r.default)({className:j},w))}g.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:f,inline:!1,noWrap:!1,paragraph:!1};var h=(0,s.default)(p,{name:"MuiTypography",withTheme:!0})(g);t.default=h},xV1m:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),o=(0,n(a("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),"Warning");t.default=o},y4MT:function(e,t,a){"use strict";a.d(t,"i",(function(){return n})),a.d(t,"w",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"h",(function(){return c})),a.d(t,"p",(function(){return s})),a.d(t,"z",(function(){return d})),a.d(t,"g",(function(){return p})),a.d(t,"u",(function(){return u})),a.d(t,"m",(function(){return f})),a.d(t,"r",(function(){return g})),a.d(t,"j",(function(){return h})),a.d(t,"n",(function(){return m})),a.d(t,"k",(function(){return b})),a.d(t,"s",(function(){return x})),a.d(t,"x",(function(){return y})),a.d(t,"e",(function(){return v})),a.d(t,"q",(function(){return E})),a.d(t,"y",(function(){return w})),a.d(t,"t",(function(){return S})),a.d(t,"f",(function(){return j})),a.d(t,"l",(function(){return k})),a.d(t,"o",(function(){return O})),a.d(t,"v",(function(){return T})),a.d(t,"b",(function(){return N}));var n=260,r={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},o={paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},i=Object.assign({},o,{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),l={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},c={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},s="#9c27b0",d="#ff9800",p="#f44336",u="#4caf50",f="#00acc1",g="#e91e63",h="#999999",m={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"},b={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"},x={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"},y={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"},v={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"},E={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"},w=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},y),S=Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},x),j=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},v),k=Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},b),O=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},m),T=(Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},E),Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},c),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),N=Object.assign({},T,{marginTop:".625rem"})}}]);
//# sourceMappingURL=component---src-pages-components-sections-section-notifications-jsx-9e5a306e05ce3da447f1.js.map