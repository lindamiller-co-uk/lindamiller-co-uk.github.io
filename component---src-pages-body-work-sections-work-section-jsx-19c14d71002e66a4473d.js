(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{DKAG:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("lwsE")),i=a(n("W8MJ")),o=a(n("a1gu")),l=a(n("Nsbk")),u=a(n("7W2i")),s=a(n("cDf5")),c=a(n("QILm")),p=a(n("pVnL")),f=a(n("q1tI"));a(n("17x9")),a(n("2W6z"));var m,d=(m=null,function(){if(null!==m)return m;var e,t,n,a=!1;try{window.addEventListener("test",null,(e={},t="passive",n={get:function(){a=!0}},Object.defineProperty(e,t,n)))}catch(r){}return m=a,a}()),h={capture:!1,passive:!1};function v(e){return p({},h,e)}function y(e,t,n){var a=[e,t];return a.push(d?n:n.capture),a}function g(e,t,n,a){e.addEventListener.apply(e,y(t,n,a))}function E(e,t,n,a){e.removeEventListener.apply(e,y(t,n,a))}function b(e,t){e.children,e.target;var n=c(e,["children","target"]);Object.keys(n).forEach((function(e){if("on"===e.substring(0,2)){var a=n[e],r=s(a),i="object"===r;if(i||"function"===r){var o="capture"===e.substr(-7).toLowerCase(),l=e.substring(2).toLowerCase();l=o?l.substring(0,l.length-7):l,i?t(l,a.handler,a.options):t(l,a,v({capture:o}))}}}))}var x=function(e){function t(){return r(this,t),o(this,l(t).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.applyListeners(g)}},{key:"componentDidUpdate",value:function(e){this.applyListeners(E,e),this.applyListeners(g)}},{key:"componentWillUnmount",value:function(){this.applyListeners(E)}},{key:"applyListeners",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props,n=t.target;if(n){var a=n;"string"==typeof n&&(a=window[n]),b(t,e.bind(null,a))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(f.PureComponent);x.propTypes={},t.withOptions=function(e,t){return{handler:e,options:v(t)}},t.default=x},HqBL:function(e,t,n){"use strict";var a=n("y4MT"),r={section:{padding:"70px 0"},title:Object.assign({},a.v,{marginBottom:"50px",marginTop:"30px",minHeight:"32px",textDecoration:"none",textAlign:"center"}),description:{color:"#999",textAlign:"center"},textCenter:{textAlign:"center"},textArea:{marginRight:"15px",marginLeft:"15px"}};t.a=r},Wz2Q:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Hk+Y"),l=n.n(o),u=n("aoJa"),s=n("HdOC"),c=n("SpY8"),p=n("FJqC"),f=n("HqBL"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.section},i.a.createElement(u.a,{justify:"center"},i.a.createElement(s.a,{cs:12,sm:12,md:8},i.a.createElement("h2",{className:e.title},"Work with us"),i.a.createElement("h4",{className:e.description},"Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."),i.a.createElement("form",null,i.a.createElement(u.a,null,i.a.createElement(s.a,{xs:12,sm:12,md:6},i.a.createElement(c.a,{labelText:"Your Name",id:"name",formControlProps:{fullWidth:!0}})),i.a.createElement(s.a,{xs:12,sm:12,md:6},i.a.createElement(c.a,{labelText:"Your Email",id:"email",formControlProps:{fullWidth:!0}})),i.a.createElement(c.a,{labelText:"Your Message",id:"message",formControlProps:{fullWidth:!0,className:e.textArea},inputProps:{multiline:!0,rows:5}}),i.a.createElement(u.a,{justify:"center"},i.a.createElement(s.a,{xs:12,sm:12,md:4,className:e.textCenter},i.a.createElement(p.a,{color:"primary"},"Send Message"))))))))},t}(i.a.Component);t.default=l()(f.a)(m)},hD82:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.cloneElementWithClassName=o,t.cloneChildrenWithClassName=function(e,t){return r.default.Children.map(e,(function(e){return r.default.isValidElement(e)&&o(e,t)}))},t.isMuiElement=function(e,t){return r.default.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},t.setRef=function(e,t){"function"==typeof e?e(t):e&&(e.current=t)};var r=a(n("q1tI")),i=a(n("TSYQ"));function o(e,t){return r.default.cloneElement(e,{className:(0,i.default)(e.props.className,t)})}},"sBL/":function(e,t){function n(e,t,n){var a,r,i,o,l;function u(){var s=Date.now()-o;s<t&&s>=0?a=setTimeout(u,t-s):(a=null,n||(l=e.apply(i,r),i=r=null))}null==t&&(t=100);var s=function(){i=this,r=arguments,o=Date.now();var s=n&&!a;return a||(a=setTimeout(u,t)),s&&(l=e.apply(i,r),i=r=null),l};return s.clear=function(){a&&(clearTimeout(a),a=null)},s.flush=function(){a&&(l=e.apply(i,r),i=r=null,clearTimeout(a),a=null)},s}n.debounce=n,e.exports=n}}]);
//# sourceMappingURL=component---src-pages-body-work-sections-work-section-jsx-19c14d71002e66a4473d.js.map