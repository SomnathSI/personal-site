(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[962],{9727:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return x()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?d:p,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",g={};function v(){}function y(){}function m(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,C=w&&w(w(Z([])));C&&C!==r&&n.call(C,a)&&(b=C);var E=m.prototype=v.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function Z(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:x}}function x(){return{value:e,done:!0}}return y.prototype=E.constructor=m,m.constructor=y,y.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(E),l(E,c,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=Z,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:Z(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}},4322:function(t,e,r){t.exports=r(9727)},9962:function(t,e,r){"use strict";r.d(e,{kL:function(){return F}});var n=r(6148),o=r(2327);function a(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=(0,o.Z)(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}var i=r(5531),c=r(8489),l=r(7853),u=r(4531),s=r(8932),f=r(6621);function p(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){p(a,n,o,i,c,"next",t)}function c(t){p(a,n,o,i,c,"throw",t)}i(void 0)}))}}function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var g=r(3430),v=r(4322),y=r(2791),m=["onLoad","onError"];function b(t){var e,r,n,o=t.chartVersion,a=void 0===o?"current":o,i=t.chartPackages,c=void 0===i?["corechart","controls"]:i,l=t.chartLanguage,u=void 0===l?"en":l,s=t.mapsApiKey,f=(0,y.useState)(null),p=(0,g.Z)(f,2),h=p[0],d=p[1],v=(0,y.useState)(!1),m=(0,g.Z)(v,2),b=m[0],w=m[1];return e="https://www.gstatic.com/charts/loader.js",r=function(){var t=null===window||void 0===window?void 0:window.google;t&&(t.charts.load(a,{packages:c,language:u,mapsApiKey:s}),t.charts.setOnLoadCallback((function(){d(t)})))},n=function(){w(!0)},(0,y.useEffect)((function(){if(document){var t=document.querySelector('script[src="'.concat(e,'"]'));if(!(null===t||void 0===t?void 0:t.dataset.loaded)){var o=t||document.createElement("script");t||(o.src=e);var a=function(){o.dataset.loaded="1",null===r||void 0===r||r()};return o.addEventListener("load",a),n&&o.addEventListener("error",n),t||document.head.append(o),function(){o.removeEventListener("load",a),n&&o.removeEventListener("error",n)}}null===r||void 0===r||r()}}),[]),[h,b]}function w(t){var e=t.onLoad,r=t.onError,n=b(d(t,m)),o=(0,g.Z)(n,2),a=o[0],i=o[1];return(0,y.useEffect)((function(){a&&e&&e(a)}),[a]),(0,y.useEffect)((function(){i&&r&&r()}),[i]),null}var C,E={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:function(){},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}},O=0,k=function(){return"reactgooglegraph-".concat(O+=1)},L=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],D=function(){var t=h(v.mark((function t(e,r){var n,o=arguments;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:{},t.abrupt("return",new Promise((function(t,o){var a="".concat(n.headers?"headers=".concat(n.headers):"headers=0"),i="".concat(n.query?"&tq=".concat(encodeURIComponent(n.query)):""),c="".concat(n.gid?"&gid=".concat(n.gid):""),l="".concat(n.sheet?"&sheet=".concat(n.sheet):""),u="".concat(n.access_token?"&access_token=".concat(n.access_token):""),s="".concat(a).concat(c).concat(l).concat(i).concat(u),f="".concat(r,"/gviz/tq?").concat(s);new e.visualization.Query(f).send((function(e){e.isError()?o("Error in query:  ".concat(e.getMessage()," ").concat(e.getDetailedMessage())):t(e.getDataTable())}))})));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),T=y.createContext(E),P=T.Provider,Z=T.Consumer,x=function(t){var e=t.children,r=t.value;return y.createElement(P,{value:r},e)},_=function(t){var e=t.render;return y.createElement(Z,null,(function(t){return e(t)}))},j="#CCCCCC",S=function(t){(0,s.Z)(r,t);var e=(0,f.Z)(r);function r(){var t;(0,l.Z)(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return(t=e.call.apply(e,[this].concat(o))).state={hiddenColumns:[]},t.listenToLegendToggle=function(){var e=t.props,r=e.google,n=e.googleChartWrapper;r.visualization.events.addListener(n,"select",(function(){var e=n.getChart().getSelection(),r=n.getDataTable();if(0!==e.length&&!e[0].row&&r){var o=e[0].column,a=t.getColumnID(r,o);t.state.hiddenColumns.includes(a)?t.setState((function(t){return(0,c.Z)((0,c.Z)({},t),{},{hiddenColumns:(0,i.Z)(t.hiddenColumns.filter((function(t){return t!==a})))})})):t.setState((function(t){return(0,c.Z)((0,c.Z)({},t),{},{hiddenColumns:[].concat((0,i.Z)(t.hiddenColumns),[a])})}))}}))},t.applyFormatters=function(e,r){var n,o=t.props.google,c=a(r);try{for(c.s();!(n=c.n()).done;){var l=n.value;switch(l.type){case"ArrowFormat":new o.visualization.ArrowFormat(l.options).format(e,l.column);break;case"BarFormat":new o.visualization.BarFormat(l.options).format(e,l.column);break;case"ColorFormat":var u,s=new o.visualization.ColorFormat(l.options),f=a(l.ranges);try{for(f.s();!(u=f.n()).done;){var p=u.value;s.addRange.apply(s,(0,i.Z)(p))}}catch(h){f.e(h)}finally{f.f()}s.format(e,l.column);break;case"DateFormat":new o.visualization.DateFormat(l.options).format(e,l.column);break;case"NumberFormat":new o.visualization.NumberFormat(l.options).format(e,l.column);break;case"PatternFormat":new o.visualization.PatternFormat(l.options).format(e,l.column)}}}catch(h){c.e(h)}finally{c.f()}},t.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},t.draw=function(){var e=h(v.mark((function e(r){var n,o,a,c,l,u,s,f,p,h,d,g,y,m,b,w,C,E,O,k,L,T,P,Z,x;return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.data,o=r.diffdata,a=r.rows,c=r.columns,l=r.options,u=r.legend_toggle,s=r.legendToggle,f=r.chartType,p=r.formatters,h=r.spreadSheetUrl,d=r.spreadSheetQueryParameters,g=t.props,y=g.google,m=g.googleChartWrapper,w=null,o&&(C=y.visualization.arrayToDataTable(o.old),E=y.visualization.arrayToDataTable(o.new),w=y.visualization[f].prototype.computeDiff(C,E)),null===n){e.next=8;break}b=Array.isArray(n)?y.visualization.arrayToDataTable(n):new y.visualization.DataTable(n),e.next=19;break;case 8:if(!a||!c){e.next=12;break}b=y.visualization.arrayToDataTable([c].concat((0,i.Z)(a))),e.next=19;break;case 12:if(!h){e.next=18;break}return e.next=15,D(y,h,d);case 15:b=e.sent,e.next=19;break;case 18:b=y.visualization.arrayToDataTable([]);case 19:for(O=b.getNumberOfColumns(),k=0;k<O;k+=1)L=t.getColumnID(b,k),t.state.hiddenColumns.includes(L)&&(T=b.getColumnLabel(k),P=b.getColumnId(k),Z=b.getColumnType(k),b.removeColumn(k),b.addColumn({label:T,id:P,type:Z}));return x=m.getChart(),"Timeline"===m.getChartType()&&x&&x.clearChart(),m.setChartType(f),m.setOptions(l||{}),m.setDataTable(b),m.draw(),null!==t.props.googleChartDashboard&&t.props.googleChartDashboard.draw(b),w&&(m.setDataTable(w),m.draw()),p&&(t.applyFormatters(b,p),m.setDataTable(b),m.draw()),!0!==s&&!0!==u||t.grayOutHiddenColumns({options:l}),e.abrupt("return");case 32:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.grayOutHiddenColumns=function(e){var r=e.options,n=t.props.googleChartWrapper,o=n.getDataTable();if(o){var a=o.getNumberOfColumns();if(!1!==t.state.hiddenColumns.length>0){var i=Array.from({length:a-1}).map((function(e,n){var a=t.getColumnID(o,n+1);return t.state.hiddenColumns.includes(a)?j:r&&r.colors?r.colors[n]:L[n]}));n.setOptions((0,c.Z)((0,c.Z)({},r),{},{colors:i})),n.draw()}}},t.onResize=function(){t.props.googleChartWrapper.draw()},t}return(0,u.Z)(r,[{key:"componentDidMount",value:function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}},{key:"componentWillUnmount",value:function(){var t=this.props,e=t.google,r=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()}},{key:"componentDidUpdate",value:function(){this.draw(this.props)}},{key:"render",value:function(){return null}}]),r}(y.Component),z=function(t){(0,s.Z)(r,t);var e=(0,f.Z)(r);function r(){return(0,l.Z)(this,r),e.apply(this,arguments)}return(0,u.Z)(r,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var t=this.props,e=t.google,r=t.googleChartWrapper,n=t.googleChartDashboard;return y.createElement(_,{render:function(t){return y.createElement(S,Object.assign({},t,{google:e,googleChartWrapper:r,googleChartDashboard:n}))}})}}]),r}(y.Component),I=function(t){(0,s.Z)(r,t);var e=(0,f.Z)(r);function r(){return(0,l.Z)(this,r),e.apply(this,arguments)}return(0,u.Z)(r,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"listenToEvents",value:function(t){var e=this,r=t.chartEvents,n=t.google,o=t.googleChartWrapper;if(r){n.visualization.events.removeAllListeners(o);var i,c=a(r);try{var l=function(){var t=i.value;u=e;var r=t.eventName,a=t.callback;n.visualization.events.addListener(o,r,(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];a({chartWrapper:o,props:u.props,google:n,eventArgs:e})}))};for(c.s();!(i=c.n()).done;){var u;l()}}catch(s){c.e(s)}finally{c.f()}}}},{key:"render",value:function(){var t=this,e=this.props,r=e.google,n=e.googleChartWrapper;return y.createElement(_,{render:function(e){return t.listenToEvents({chartEvents:e.chartEvents||null,google:r,googleChartWrapper:n}),null}})}}]),r}(y.Component),A=0,W=function(t){(0,s.Z)(r,t);var e=(0,f.Z)(r);function r(){for(var t,o,i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s];return(0,l.Z)(this,r),t=e.call(this),o=(0,n.Z)(t),t.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},t.graphID=null,t.dashboard_ref=y.createRef(),t.toolbar_ref=y.createRef(),t.getGraphID=function(){var e,r=t.props,n=r.graphID,o=r.graph_id;return e=n||o?n&&!o?n:o&&!n?o:n:t.graphID?t.graphID:k(),t.graphID=e,t.graphID},t.getControlID=function(t,e){return A+=1,"undefined"===typeof t?"googlechart-control-".concat(e,"-").concat(A):t},t.addControls=function(e,r){var o=t.props,i=o.google,l=o.controls,u=l?l.map((function(e,r){var n=e.controlID,o=e.controlType,a=e.options,l=e.controlWrapperParams,u=t.getControlID(n,r);return{controlProp:e,control:new i.visualization.ControlWrapper((0,c.Z)({containerId:u,controlType:o,options:a},l))}})):null;if(!u)return null;r.bind(u.map((function(t){return t.control})),e);var s,f=a(u);try{var p=function(){var r,o=s.value,c=o.control,l=o.controlProp.controlEvents,u=a(void 0===l?[]:l);try{var f=function(){var o=r.value;h=(0,n.Z)(t);var a=o.callback,l=o.eventName;i.visualization.events.removeListener(c,l,a),i.visualization.events.addListener(c,l,(function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];a({chartWrapper:e,controlWrapper:c,props:h.props,google:i,eventArgs:r})}))};for(u.s();!(r=u.n()).done;)f()}catch(p){u.e(p)}finally{u.f()}};for(f.s();!(s=f.n()).done;){var h;p()}}catch(d){f.e(d)}finally{f.f()}return u},t.renderChart=function(){var e=t.props,r=e.width,n=e.height,o=e.options,a=e.style,i=e.className,l=e.rootProps,u=e.google,s=(0,c.Z)({height:n||o&&o.height,width:r||o&&o.width},a);return y.createElement("div",Object.assign({id:t.getGraphID(),style:s,className:i},l),t.state.isReady&&null!==t.state.googleChartWrapper?y.createElement(y.Fragment,null,y.createElement(z,{googleChartWrapper:t.state.googleChartWrapper,google:u,googleChartDashboard:t.state.googleChartDashboard}),y.createElement(I,{googleChartWrapper:t.state.googleChartWrapper,google:u})):null)},t.renderControl=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return!0};return o.state.isReady&&null!==o.state.googleChartControls?y.createElement(y.Fragment,null,o.state.googleChartControls.filter((function(e){var r=e.controlProp,n=e.control;return t({control:n,controlProp:r})})).map((function(t){var e=t.control;t.controlProp;return y.createElement("div",{key:e.getContainerId(),id:e.getContainerId()})}))):null},t.renderToolBar=function(){return t.props.toolbarItems?y.createElement("div",{ref:t.toolbar_ref}):null},t}return(0,u.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.options,r=t.google,n=t.chartType,o=t.chartWrapperParams,a=t.toolbarItems,i=t.getChartEditor,l=t.getChartWrapper,u=(0,c.Z)({chartType:n,options:e,containerId:this.getGraphID()},o),s=new r.visualization.ChartWrapper(u);s.setOptions(e||{}),l&&l(s,r);var f=new r.visualization.Dashboard(this.dashboard_ref),p=this.addControls(s,f);a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var h=null;i&&i({chartEditor:h=new r.visualization.ChartEditor,chartWrapper:s,google:r}),this.setState({googleChartEditor:h,googleChartControls:p,googleChartDashboard:f,googleChartWrapper:s,isReady:!0})}},{key:"componentDidUpdate",value:function(){if(this.state.googleChartWrapper&&this.state.googleChartDashboard&&this.state.googleChartControls){var t=this.props.controls;if(t)for(var e=0;e<t.length;e+=1){var r=t[e],n=r.controlType,o=r.options,a=r.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(o),this.state.googleChartControls[e].control.setControlType(n)}}}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls}},{key:"render",value:function(){var t=this.props,e=t.width,r=t.height,n=t.options,o=t.style,a=(0,c.Z)({height:r||n&&n.height,width:e||n&&n.width},o);return this.props.render?y.createElement("div",{ref:this.dashboard_ref,style:a},y.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):y.createElement("div",{ref:this.dashboard_ref,style:a},this.renderControl((function(t){return"bottom"!==t.controlProp.controlPosition})),this.renderChart(),this.renderControl((function(t){return"bottom"===t.controlProp.controlPosition})),this.renderToolBar())}}]),r}(y.Component),F=function(t){(0,s.Z)(r,t);var e=(0,f.Z)(r);function r(){var t;(0,l.Z)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o)))._isMounted=!1,t.state={loadingStatus:"loading",google:null},t.onLoad=function(e){if(t.props.onLoad&&t.props.onLoad(e),t.isFullyLoaded(e))t.onSuccess(e);else var r=setInterval((function(){var e=window.google;t._isMounted?e&&t.isFullyLoaded(e)&&(clearInterval(r),t.onSuccess(e)):clearInterval(r)}),1e3)},t.onSuccess=function(e){t.setState({loadingStatus:"ready",google:e})},t.onError=function(){t.setState({loadingStatus:"errored"})},t}return(0,u.Z)(r,[{key:"render",value:function(){var t=this.props,e=t.chartLanguage,r=t.chartPackages,n=t.chartVersion,o=t.mapsApiKey,a=t.loader,i=t.errorElement;return y.createElement(x,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?y.createElement(W,Object.assign({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&i?i:a,y.createElement(w,{chartLanguage:e,chartPackages:r,chartVersion:n,mapsApiKey:o,onLoad:this.onLoad,onError:this.onError}))}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"isFullyLoaded",value:function(t){var e=this.props,r=e.controls,n=e.toolbarItems,o=e.getChartEditor;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!r||t.visualization.ChartWrapper)&&(!o||t.visualization.ChartEditor)&&(!n||t.visualization.drawToolbar)}}]),r}(y.Component);F.defaultProps=E,function(t){t.annotation="annotation",t.annotationText="annotationText",t.certainty="certainty",t.emphasis="emphasis",t.interval="interval",t.scope="scope",t.style="style",t.tooltip="tooltip",t.domain="domain"}(C||(C={}))},6148:function(t,e,r){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{Z:function(){return n}})},7853:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,{Z:function(){return n}})},4531:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}r.d(e,{Z:function(){return o}})},6621:function(t,e,r){"use strict";function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}r.d(e,{Z:function(){return c}});var a=r(6148);function i(t,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(t)}function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=n(t);if(e){var a=n(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return i(this,r)}}},6222:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})},8932:function(t,e,r){"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}r.d(e,{Z:function(){return o}})},8489:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(6222);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},5531:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(4400);var o=r(2327);function a(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=962.fefc3522.chunk.js.map