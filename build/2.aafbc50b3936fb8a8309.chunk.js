(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./app/containers/FeaturePage/containers/style.scss":function(e,t,n){var o=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/FeaturePage/containers/style.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,i);o.locals&&(e.exports=o.locals)},"./app/containers/FeaturePage/index.js":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),i=n.n(o),r=n("./node_modules/react-helmet/lib/Helmet.js"),a=(n("./app/containers/FeaturePage/containers/style.scss"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,i){var r=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=i;else if(a>1){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),l=(a("ul",{},void 0,a("li",{},void 0,a("p",{className:"title"},void 0,"Next generation JavaScript 11"),a("p",{},void 0,"Use template strings, object destructuring, arrow functions, JSX syntax and more, today.")),a("li",{},void 0,a("p",{className:"title"},void 0,"Instant feedback"),a("p",{},void 0,"Enjoy the best DX and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!")),a("li",{},void 0,a("p",{className:"title"},void 0,"Industry-standard routing"),a("p",{},void 0,"Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.")),a("li",{},void 0,a("p",{className:"title"},void 0,"The Best Test Setup"),a("p",{},void 0,"Automatically guarantee code quality and non-breaking changes. (Seen a react app with 99% test coverage before?)"))),n("./node_modules/classnames/index.js")),s=n.n(l),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,i){var r=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=i;else if(a>1){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLikeButtonClick=function(){var e=n.state,t=e.like,o=e.dislike;t.isClicked=!t.isClicked,t.isClicked?(t.counter++,o.isClicked&&n.handleDislikeButtonClick()):t.counter--,n.setState({like:t})},n.handleDislikeButtonClick=function(){var e=n.state,t=e.like,o=e.dislike;o.isClicked=!o.isClicked,o.isClicked?(o.counter++,t.isClicked&&n.handleLikeButtonClick()):o.counter--,n.setState({dislike:o})},n.state={like:{counter:100,isClicked:!1},dislike:{counter:25,isClicked:!1}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),c(t,[{key:"render",value:function(){var e=this.state,t=e.like,n=e.dislike;return u("div",{},void 0,u("div",{},void 0,u("button",{className:s()("like-button",{liked:t.isClicked}),onClick:this.handleLikeButtonClick},void 0,"Like | ",u("span",{className:"likes-counter"},void 0,t.counter)),u("button",{className:s()("dislike-button",{disliked:n.isClicked}),onClick:this.handleDislikeButtonClick},void 0,"Like | ",u("span",{className:"dislikes-counter"},void 0,n.counter))),u("style",{},void 0,"\n                .like-button, .dislike-button {\n                    font-size: 1rem;\n                    padding: 5px 10px;\n                    color:   #585858;\n                }\n\n                .liked, .disliked {\n                    font-weight: bold;\n                    color: #1565c0;\n                }\n                .likes-counter, .dislikes-counter {\n\n                }\n                "))}}]),t}(),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,i){var r=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=i;else if(a>1){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();console.log("--Load Feature page --");var y=f(r.Helmet,{},void 0,f("title",{},void 0,"Feature Page 1"),f("meta",{name:"description",content:"Feature page of React.js Boilerplate application"})),h=f("h1",{},void 0,"Features11"),v=f(d,{}),m=f("i",{},void 0,"and much more..."),b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),p(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this;return f("div",{className:"feature-page"},void 0,y,h,f("button",{onClick:function(t){e.props.history.push("/")}},void 0,"Back to home"),v,m)}}]),t}();n.d(t,"default",function(){return b})},"./node_modules/classnames/index.js":function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var a=i.apply(null,o);a&&e.push(a)}else if("object"===r)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}void 0!==e&&e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/FeaturePage/containers/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".feature-page h1{font-size:2em;margin-bottom:0.25em}.feature-page ul{font-family:Georgia, Times, 'Times New Roman', serif;padding-left:1.75em}.feature-page ul li{margin:1em 0}.feature-page ul li p.title{font-weight:bold}\n",""])}}]);