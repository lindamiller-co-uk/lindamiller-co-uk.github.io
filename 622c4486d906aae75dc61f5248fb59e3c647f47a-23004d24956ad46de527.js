(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5HhQ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){var a=e%t;return a<0?a+t:a};t.default=n},"5Mnx":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"List");t.default=i},"7HEc":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,a=e.children,n=e.startIndex,o=e.startX,l=e.pageX,s=e.viewLength,d=e.resistance,c=r.default.Children.count(a)-1,u=n+(o-l)/s;d?u<0?u=Math.exp(u*i.default.RESISTANCE_COEF)-1:u>c&&(u=c+1-Math.exp((c-u)*i.default.RESISTANCE_COEF)):u<0?t=((u=0)-n)*s+l:u>c&&(t=((u=c)-n)*s+l);return{index:u,startX:t}};var r=n(a("q1tI")),i=n(a("UlPe"))},"7VIw":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("xZgz")).default;t.default=r},"8SQk":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=function(e,t){var a=!1,n=function(e){return e?e.key:"empty"};if(e.children.length&&t.children.length){var i=r.default.Children.map(e.children,n)[e.index];if(null!=i)i===r.default.Children.map(t.children,n)[t.index]&&(a=!0)}return a};t.default=i},IX3w:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),r=a("q1tI"),i=a.n(r),o=a("Hk+Y"),l=a.n(o),s=a("JxCS"),d=a.n(s),c=a("WB8x"),u=a.n(c),p=a("5Mnx"),h=a.n(p),v=a("aoJa"),f=a("HdOC"),m=a("TSYQ"),g=a.n(m),x=a("7VIw"),y=a.n(x),b=a("TIln"),w=a.n(b),S=a("gktk"),E=a.n(S),C=a("y4MT"),M=function(e){var t;return{root:{marginTop:"20px",paddingLeft:"0",marginBottom:"0",overflow:"visible !important"},flexContainer:(t={},t[e.breakpoints.down("xs")]={display:"flex",flexWrap:"wrap"},t),displayNone:{display:"none !important"},fixed:{overflowX:"visible"},horizontalDisplay:{display:"block"},pills:{float:"left",position:"relative",display:"block",borderRadius:"30px",minWidth:"100px",textAlign:"center",transition:"all .3s",padding:"10px 15px",color:"#555555",height:"auto",opacity:"1",maxWidth:"100%",margin:"0 5px"},pillsWithIcons:{borderRadius:"4px"},tabIcon:{width:"30px",height:"30px",display:"block",margin:"15px 0"},horizontalPills:{width:"100%",float:"none !important","& + button":{margin:"10px 0"}},labelContainer:{padding:"0!important",color:"inherit"},label:{lineHeight:"24px",textTransform:"uppercase",fontSize:"12px",fontWeight:"500",position:"relative",display:"block",color:"inherit"},contentWrapper:{marginTop:"20px"},primary:{"&,&:hover":{color:"#FFFFFF",backgroundColor:C.p,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"}},info:{"&,&:hover":{color:"#FFFFFF",backgroundColor:C.m,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"}},success:{"&,&:hover":{color:"#FFFFFF",backgroundColor:C.u,boxShadow:"0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"}},warning:{"&,&:hover":{color:"#FFFFFF",backgroundColor:C.z,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"}},danger:{"&,&:hover":{color:"#FFFFFF",backgroundColor:C.g,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"}},rose:{"&,&:hover":{color:"#FFFFFF",backgroundColor:C.r,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}},alignCenter:{alignItems:"center",justifyContent:"center"}}},T=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e,t){a.setState({active:t})},a.handleChangeIndex=function(e){a.setState({active:e})},a.state={active:t.active},a}return Object(n.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.classes,n=t.tabs,r=t.direction,o=t.color,l=t.horizontal,s=t.alignCenter,d=g()(((e={})[a.flexContainer]=!0,e[a.horizontalDisplay]=void 0!==l,e)),c=i.a.createElement(w.a,{classes:{root:a.root,fixed:a.fixed,flexContainer:d,indicator:a.displayNone},value:this.state.active,onChange:this.handleChange,centered:s},n.map((function(e,t){var n,r={};void 0!==e.tabIcon&&(r.icon=i.a.createElement(e.tabIcon,{className:a.tabIcon}));var s=g()(((n={})[a.pills]=!0,n[a.horizontalPills]=void 0!==l,n[a.pillsWithIcons]=void 0!==e.tabIcon,n));return i.a.createElement(E.a,Object.assign({label:e.tabButton,key:t},r,{classes:{root:s,labelContainer:a.labelContainer,label:a.label,selected:a[o]}}))}))),u=i.a.createElement("div",{className:a.contentWrapper},i.a.createElement(y.a,{axis:"rtl"===r?"x-reverse":"x",index:this.state.active,onChangeIndex:this.handleChangeIndex},n.map((function(e,t){return i.a.createElement("div",{className:a.tabContent,key:t},e.tabContent)}))));return void 0!==l?i.a.createElement(v.a,null,i.a.createElement(f.a,l.tabsGrid,c),i.a.createElement(f.a,l.contentGrid,u)):i.a.createElement("div",null,c,u)},t}(i.a.Component);T.defaultProps={active:0,color:"primary"};var I=l()(M)(T),k={section:{padding:"70px 0"},container:C.d,title:Object.assign({},C.v,{marginTop:"30px",minHeight:"32px",textDecoration:"none"})},L=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.section},i.a.createElement("div",{className:e.container},i.a.createElement("div",{id:"navigation-pills"},i.a.createElement("div",{className:e.title},i.a.createElement("h3",null,"Navigation Pills")),i.a.createElement("div",{className:e.title},i.a.createElement("h3",null,i.a.createElement("small",null,"With Icons"))),i.a.createElement(v.a,null,i.a.createElement(f.a,{xs:12,sm:12,md:8,lg:6},i.a.createElement(I,{color:"primary",tabs:[{tabButton:"Dashboard",tabIcon:d.a,tabContent:i.a.createElement("span",null,i.a.createElement("p",null,"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))},{tabButton:"Schedule",tabIcon:u.a,tabContent:i.a.createElement("span",null,i.a.createElement("p",null,"Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))},{tabButton:"Tasks",tabIcon:h.a,tabContent:i.a.createElement("span",null,i.a.createElement("p",null,"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))}]})),i.a.createElement(f.a,{xs:12,sm:12,md:12,lg:6},i.a.createElement(I,{color:"rose",horizontal:{tabsGrid:{xs:12,sm:4,md:4},contentGrid:{xs:12,sm:8,md:8}},tabs:[{tabButton:"Dashboard",tabIcon:d.a,tabContent:i.a.createElement("span",null,i.a.createElement("p",null,"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))},{tabButton:"Schedule",tabIcon:u.a,tabContent:i.a.createElement("span",null,i.a.createElement("p",null,"Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."),i.a.createElement("br",null),i.a.createElement("p",null,"Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))}]}))))))},t}(i.a.Component);t.default=l()(k)(L)},JxCS:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})),"Dashboard");t.default=i},KJF0:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"checkIndexBounds",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"computeIndex",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"constant",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"getDisplaySameSlide",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"mod",{enumerable:!0,get:function(){return s.default}});var r=n(a("rRnn")),i=n(a("7HEc")),o=n(a("UlPe")),l=n(a("8SQk")),s=n(a("5HhQ"))},UlPe:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3}},WB8x:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"Schedule");t.default=i},rRnn:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(n(a("2W6z")),function(e){e.index;var t=e.children;r.default.Children.count(t)});t.default=i},xZgz:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getDomTreeShapes=w,t.findNativeHandler=E,t.default=void 0;var r=n(a("pVnL")),i=n(a("QILm")),o=n(a("lwsE")),l=n(a("W8MJ")),s=n(a("a1gu")),d=n(a("Nsbk")),c=n(a("7W2i")),u=n(a("q1tI")),p=n(a("17x9")),h=(n(a("2W6z")),a("KJF0"));function v(e,t,a,n){return e.addEventListener(t,a,n),{remove:function(){e.removeEventListener(t,a,n)}}}var f={direction:"ltr",display:"flex",willChange:"transform"},m={width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"},g={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(e){return"translate(".concat(-e,"%, 0)")},"x-reverse":function(e){return"translate(".concat(e,"%, 0)")},y:function(e){return"translate(0, ".concat(-e,"%)")},"y-reverse":function(e){return"translate(0, ".concat(e,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function x(e,t){var a=t.duration,n=t.easeFunction,r=t.delay;return"".concat(e," ").concat(a," ").concat(n," ").concat(r)}function y(e,t){var a=g.rotationMatrix[t];return{pageX:a.x[0]*e.pageX+a.x[1]*e.pageY,pageY:a.y[0]*e.pageX+a.y[1]*e.pageY}}function b(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function w(e,t){for(var a=[];e&&e!==t&&!e.hasAttribute("data-swipeable");){var n=window.getComputedStyle(e);"absolute"===n.getPropertyValue("position")||"hidden"===n.getPropertyValue("overflow-x")?a=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&a.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return a}var S=null;function E(e){var t=e.domTreeShapes,a=e.pageX,n=e.startX,r=e.axis;return t.some((function(e){var t=a>=n;"x"!==r&&"y"!==r||(t=!t);var i=e[g.scrollPosition[r]],o=i>0,l=i+e[g.clientLength[r]]<e[g.scrollLength[r]];return!!(t&&l||!t&&o)&&(S=e.element,!0)}))}var C=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,s.default)(this,(0,d.default)(t).call(this,e))).rootNode=null,a.containerNode=null,a.ignoreNextScrollEvents=!1,a.viewLength=0,a.startX=0,a.lastX=0,a.vx=0,a.startY=0,a.isSwiping=void 0,a.started=!1,a.startIndex=0,a.transitionListener=null,a.touchMoveListener=null,a.activeSlide=null,a.indexCurrent=null,a.firstRenderTimeout=null,a.setRootNode=function(e){a.rootNode=e},a.setContainerNode=function(e){a.containerNode=e},a.setActiveSlide=function(e){a.activeSlide=e,a.updateHeight()},a.handleSwipeStart=function(e){var t=a.props.axis,n=y(e.touches[0],t);a.viewLength=a.rootNode.getBoundingClientRect()[g.length[t]],a.startX=n.pageX,a.lastX=n.pageX,a.vx=0,a.startY=n.pageY,a.isSwiping=void 0,a.started=!0;var r=window.getComputedStyle(a.containerNode),i=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform");if(i&&"none"!==i){var o=i.split("(")[1].split(")")[0].split(","),l=window.getComputedStyle(a.rootNode),s=y({pageX:parseInt(o[4],10),pageY:parseInt(o[5],10)},t);a.startIndex=-s.pageX/(a.viewLength-parseInt(l.paddingLeft,10)-parseInt(l.paddingRight,10))||0}},a.handleSwipeMove=function(e){if(a.started){if(null===S||S===a.rootNode){var t=a.props,n=t.axis,r=t.children,i=t.ignoreNativeScroll,o=t.onSwitching,l=t.resistance,s=y(e.touches[0],n);if(void 0===a.isSwiping){var d=Math.abs(s.pageX-a.startX),c=Math.abs(s.pageY-a.startY),p=d>c&&d>h.constant.UNCERTAINTY_THRESHOLD;if(!l&&("y"===n||"y-reverse"===n)&&(0===a.indexCurrent&&a.startX<s.pageX||a.indexCurrent===u.default.Children.count(a.props.children)-1&&a.startX>s.pageX))return void(a.isSwiping=!1);if(d>c&&e.preventDefault(),!0===p||c>h.constant.UNCERTAINTY_THRESHOLD)return a.isSwiping=p,void(a.startX=s.pageX)}if(!0===a.isSwiping){e.preventDefault(),a.vx=.5*a.vx+.5*(s.pageX-a.lastX),a.lastX=s.pageX;var v=(0,h.computeIndex)({children:r,resistance:l,pageX:s.pageX,startIndex:a.startIndex,startX:a.startX,viewLength:a.viewLength}),f=v.index,m=v.startX;if(null===S&&!i)if(E({domTreeShapes:w(e.target,a.rootNode),startX:a.startX,pageX:s.pageX,axis:n}))return;m?a.startX=m:null===S&&(S=a.rootNode),a.setIndexCurrent(f);var g=function(){o&&o(f,"move")};!a.state.displaySameSlide&&a.state.isDragging||a.setState({displaySameSlide:!1,isDragging:!0},g),g()}}}else a.handleTouchStart(e)},a.handleSwipeEnd=function(){if(S=null,a.started&&(a.started=!1,!0===a.isSwiping)){var e,t=a.state.indexLatest,n=a.indexCurrent,r=t-n;e=Math.abs(a.vx)>a.props.threshold?a.vx>0?Math.floor(n):Math.ceil(n):Math.abs(r)>a.props.hysteresis?r>0?Math.floor(n):Math.ceil(n):t;var i=u.default.Children.count(a.props.children)-1;e<0?e=0:e>i&&(e=i),a.setIndexCurrent(e),a.setState({indexLatest:e,isDragging:!1},(function(){a.props.onSwitching&&a.props.onSwitching(e,"end"),a.props.onChangeIndex&&e!==t&&a.props.onChangeIndex(e,t,{reason:"swipe"}),n===t&&a.handleTransitionEnd()}))}},a.handleTouchStart=function(e){a.props.onTouchStart&&a.props.onTouchStart(e),a.handleSwipeStart(e)},a.handleTouchEnd=function(e){a.props.onTouchEnd&&a.props.onTouchEnd(e),a.handleSwipeEnd(e)},a.handleMouseDown=function(e){a.props.onMouseDown&&a.props.onMouseDown(e),e.persist(),a.handleSwipeStart(b(e))},a.handleMouseUp=function(e){a.props.onMouseUp&&a.props.onMouseUp(e),a.handleSwipeEnd(b(e))},a.handleMouseLeave=function(e){a.props.onMouseLeave&&a.props.onMouseLeave(e),a.started&&a.handleSwipeEnd(b(e))},a.handleMouseMove=function(e){a.props.onMouseMove&&a.props.onMouseMove(e),a.started&&a.handleSwipeMove(b(e))},a.handleScroll=function(e){if(a.props.onScroll&&a.props.onScroll(e),e.target===a.rootNode)if(a.ignoreNextScrollEvents)a.ignoreNextScrollEvents=!1;else{var t=a.state.indexLatest,n=Math.ceil(e.target.scrollLeft/e.target.clientWidth)+t;a.ignoreNextScrollEvents=!0,e.target.scrollLeft=0,a.props.onChangeIndex&&n!==t&&a.props.onChangeIndex(n,t,{reason:"focus"})}},a.updateHeight=function(){if(null!==a.activeSlide){var e=a.activeSlide.children[0];void 0!==e&&void 0!==e.offsetHeight&&a.state.heightLatest!==e.offsetHeight&&a.setState({heightLatest:e.offsetHeight})}},a.state={indexLatest:e.index,isDragging:!1,renderOnlyActive:!e.disableLazyLoading,heightLatest:0,displaySameSlide:!0},a.setIndexCurrent(e.index),a}return(0,c.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){var e=this;return{swipeableViews:{slideUpdateHeight:function(){e.updateHeight()}}}}},{key:"componentDidMount",value:function(){var e=this;this.transitionListener=v(this.containerNode,"transitionend",(function(t){t.target===e.containerNode&&e.handleTransitionEnd()})),this.touchMoveListener=v(this.rootNode,"touchmove",(function(t){e.props.disabled||e.handleSwipeMove(t)}),{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout((function(){e.setState({renderOnlyActive:!1})}),0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"componentWillReceiveProps",value:function(e){var t=e.index;"number"==typeof t&&t!==this.props.index&&(this.setIndexCurrent(t),this.setState({displaySameSlide:(0,h.getDisplaySameSlide)(this.props,e),indexLatest:t}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"setIndexCurrent",value:function(e){if(this.props.animateTransitions||this.indexCurrent===e||this.handleTransitionEnd(),this.indexCurrent=e,this.containerNode){var t=this.props.axis,a=g.transform[t](100*e);this.containerNode.style.WebkitTransform=a,this.containerNode.style.transform=a}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var e,t,a=this,n=this.props,o=(n.action,n.animateHeight),l=n.animateTransitions,s=n.axis,d=n.children,c=n.containerStyle,p=n.disabled,h=(n.disableLazyLoading,n.enableMouseEvents),v=(n.hysteresis,n.ignoreNativeScroll,n.index,n.onChangeIndex,n.onSwitching,n.onTransitionEnd,n.resistance,n.slideStyle),y=n.slideClassName,b=n.springConfig,w=n.style,S=(n.threshold,(0,i.default)(n,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"])),E=this.state,C=E.displaySameSlide,M=E.heightLatest,T=E.indexLatest,I=E.isDragging,k=E.renderOnlyActive,L=p?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},N=!p&&h?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},D=(0,r.default)({},m,v);if(I||!l||C)e="all 0s ease 0s",t="all 0s ease 0s";else if(e=x("transform",b),t=x("-webkit-transform",b),0!==M){var H=", ".concat(x("height",b));e+=H,t+=H}var F={height:null,WebkitFlexDirection:g.flexDirection[s],flexDirection:g.flexDirection[s],WebkitTransition:t,transition:e};if(!k){var z=g.transform[s](100*this.indexCurrent);F.WebkitTransform=z,F.transform=z}return o&&(F.height=M),u.default.createElement("div",(0,r.default)({ref:this.setRootNode,style:(0,r.default)({},g.root[s],w)},S,L,N,{onScroll:this.handleScroll}),u.default.createElement("div",{ref:this.setContainerNode,style:(0,r.default)({},F,f,c),className:"react-swipeable-view-container"},u.default.Children.map(d,(function(e,t){if(k&&t!==T)return null;var n,r=!0;return t===T&&(r=!1,o&&(n=a.setActiveSlide,D.overflowY="hidden")),u.default.createElement("div",{ref:n,style:D,className:y,"aria-hidden":r,"data-swipeable":"true"},e)}))))}}]),t}(u.default.Component);C.displayName="ReactSwipableView",C.propTypes={},C.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1},C.childContextTypes={swipeableViews:p.default.shape({slideUpdateHeight:p.default.func})};var M=C;t.default=M}}]);
//# sourceMappingURL=622c4486d906aae75dc61f5248fb59e3c647f47a-23004d24956ad46de527.js.map