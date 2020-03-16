(window.webpackJsonp=window.webpackJsonp||[]).push([["algorithm"],{"./node_modules/@splunk/splunk-web-core/build_tools/web_loaders/splunk-public-path-injection-loader.js?/static/app/Splunk_ML_Toolkit/!./src/main/webapp/pages/algorithm.es":function(e,t,n){var r,a;n.p=function(){function e(e,t){if(window.$C&&window.$C.hasOwnProperty(e))return window.$C[e];if(void 0!==t)return t;throw new Error("getConfigValue - "+e+" not set, no default provided")}return function(){for(var t,n,r="",a=0,i=arguments.length;a<i;a++)(n=(t=arguments[a].toString()).length)>1&&"/"==t.charAt(n-1)&&(t=t.substring(0,n-1)),"/"!=t.charAt(0)?r+="/"+t:r+=t;if("/"!=r){var o=r.split("/"),l=o[1];if("static"==l||"modules"==l){var s=r.substring(l.length+2,r.length);r="/"+l,window.$C.BUILD_NUMBER&&(r+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(r+="."+window.$C.BUILD_PUSH_NUMBER),"app"==o[2]&&(r+=":"+e("APP_BUILD",0)),r+="/"+s}}var u=e("MRSPARKLE_ROOT_PATH","/"),d="/"+e("LOCALE","en-US")+r;return""==u||"/"==u?d:u+d}("/static/app/Splunk_ML_Toolkit/")+"/"}(),r=[n("./src/main/webapp/routers/Algorithm.es"),n("util/router_utils")],void 0===(a=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}e=n(e),t=n(t),new e.default,t.default.start_backbone_history()}.apply(t,r))||(e.exports=a)},"./src/main/webapp/models/properties/MLSPL.es":function(e,t,n){var r,a;r=[t,n("./src/main/webapp/models/properties/Properties.es")],void 0===(a=function(n,r){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,r=(a=r)&&a.__esModule?a:{default:a};var i={handle_new_cat:{oneOf:["default","skip","stop"]},max_distinct_cat_values:{pattern:"digits"},max_distinct_cat_values_for_classifiers:{pattern:"digits"},max_distinct_cat_values_for_scoring:{pattern:"digits"},max_fit_time:{pattern:"digits"},max_inputs:{pattern:"digits"},max_memory_usage_mb:{pattern:"digits"},max_model_size_mb:{pattern:"digits"},max_score_time:{pattern:"digits"},streaming_apply:{oneOf:["true","false"]},summary_depth_limit:{pattern:"digits",required:!1},summary_return_json:{oneOf:["true","false"],required:!1},use_sampling:{oneOf:["true","false"]}};Object.keys(i).forEach(function(e){null!=i[e].pattern?"digits"===i[e].pattern&&(i[e].msg="".concat(e," must only contain digits")):null!=i[e].oneOf&&(i[e].msg="".concat(e," must be one of: ").concat(i[e].oneOf.join(", ")))});var o=r.default.extend({file:"mlspl",description:{default_prob_threshold:'\n            The default value for the area under the fitted probability density function curve, that is assigned as anomalous area.\n            "0.01" refers to that: "1%" of the area under the fitted density function curve will be assigned as outliers.\n            "default_prob_threshold" must have a value between 0.000000001 and 1.\n        ',handle_new_cat:"\n            Action to perform when new value(s) for categorical variable/explanatory variable is encountered in partial_fit.\n            - default: set all values of the column that corresponds to the new categorical value to 0's\n            - skip: skip over rows that contain the new value(s) and raise a warning\n            - stop: stop the operation by raising an error\n        ",max_distinct_cat_values:"\n            Determines the upper limit for the number of categorical values that will be encoded in one-hot encoding.\n            If the number of distinct values exceeds this limit, the field will be dropped (with a warning).\n        ",max_distinct_cat_values_for_classifiers:"\n            Determines the upper limit for the number of distinct values in a categorical field that is the target (or response) variable in a classifier algorithm.\n            If the number of distinct values exceeds this limit, the field will be dropped (with a warning).\n        ",max_distinct_cat_values_for_scoring:"\n            Determines the upper limit for the number of distinct values in a categorical field that is the target (or response) variable in a scoring method.\n            If the number of distinct values exceeds this limit, the field will be dropped (with an appropriate warning or error message).\n        ",max_fields_in_by_clause:'The maximum number of fields that can be provided in the "by" clause.',max_fit_time:'The maximum time, in seconds, to spend in the "fit" phase of an algorithm.',max_groups:'\n            The maximum number of groups created with the "by" clause.\n            "max_groups" prevents the model file from growing too large.\n            The bigger that cap the larger the size of your model file is going to be\n            and it will take longer to load at "apply" time.\n            Decreasing "max_kde_parameter_size" will allow increasing "max_groups"\n            and keeping model size small as a trade-off of accuracy for more groups.\n        ',max_inputs:'\n            The maximum number of events an algorithm considers when fitting a model.\n            If this limit is exceeded, follows the behavior defined by "use_sampling".\n        ',max_kde_parameter_size:'\n            The maximum number of data points as the parameter size for Gaussian KDE density function.\n            Decreasing "max_kde_parameter_size" will allow increasing "max_groups"\n            and keeping model size small as a trade-off of accuracy for more groups.\n        ',max_memory_usage_mb:"The maximum allowed memory usage, in megabytes, by the fit command while fitting a model.",max_model_size_mb:"The maximum allowed size of a model, in megabytes, created by the fit command.",max_score_time:'The maximum time, in seconds, to spend in the "score" phase of an algorithm',max_threshold_num:"The maximum number of thresholds that can be provided at the same time.",min_data_size_to_fit:'\n            The minimum number of data points required to fit a density function.\n            Warning about the inaccuracy of the density function if there are less than\n            "min_data_size_to_fit" data points in the training dataset.\n        ',streaming_apply:'Setting streaming_apply to true allows the execution of apply command at indexer level. Otherwise "apply" is done on search head.',summary_depth_limit:'The number of nodes in a decision tree to display when running the "summary" command on a model.',summary_return_json:'Whether or not to return a json representation instead of a ASCII representation of the nodes when running the "summary" command on a model.',use_sampling:"Indicates whether to use Reservoir Sampling for data sets that exceed max_inputs or to instead throw an error"},validation:i});n.default=o,e.exports=t.default}.apply(t,r))||(e.exports=a)},"./src/main/webapp/models/properties/Properties.es":function(e,t,n){var r,a;r=[t,n("shim/jquery"),n("./src/main/webapp/contrib_shim/underscore/underscore.es"),n("util/splunkd_utils"),n("models/Base")],void 0===(a=function(n,r,a,i,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,r=l(r),a=l(a),i=l(i);var p=(o=l(o)).default.extend({file:null,urlRoot:"properties",url:function(){if(null!=this.file){var e="".concat(this.urlRoot,"/").concat(encodeURIComponent(this.file));return null!=this.id?"".concat(e,"/").concat(encodeURIComponent(this.id)):e}return this.urlRoot},bootstrap:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.default.Deferred(),i=new this.constructor({id:this.id});return i.fetch(u({success:function(){e.set(i.toJSON()),a.resolve()},error:function(){if(n){(new e.constructor).save({__stanza:e.id},u({dataType:"text"},t)).done(function(){i.fetch(u({success:function(){e.set(i.toJSON()),a.resolve()},error:function(){a.reject()}},t))}).fail(function(){a.reject()})}else{var r=new e.constructor({id:"default"});r.fetch(u({success:function(){var t=r.toJSON();t.id=e.id,e.set(t),a.resolve()},error:function(){a.reject()}},t)).fail(function(){a.reject()})}}},t)),a},sync:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=a.default.isFunction(t.url)?t.url():t.url,s={data:{output_mode:"json"},url:i.default.fullpath(l,n.data)};r.default.extend(!0,s,n,{data:t.attributes}),delete s.data.app,delete s.data.owner,delete s.data.sharing,delete s.data.id;var u="update"===e?"create":e;return o.default.prototype.sync.apply(this,[u,t,s])},parse:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t={};return null!=e.entry&&e.entry.forEach(function(e){t[e.name]=e.content}),t}});n.default=p,e.exports=t.default}.apply(t,r))||(e.exports=a)},"./src/main/webapp/routers/Algorithm.es":function(e,t,n){var r,a;r=[t,n("./node_modules/@splunk/ui-utils/i18n.js"),n("./src/main/webapp/routers/Base.es"),n("algorithm/Master")],void 0===(a=function(n,r,a,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a=o(a),i=o(i);var l=a.default.extend({initialize:function(){a.default.prototype.initialize.apply(this,arguments),this.setPageTitle((0,r.gettext)("Algorithm Settings"))},page:function(){var e=this;a.default.prototype.page.apply(this,arguments),this.mlsplView&&this.mlsplView.remove(),this.deferreds.user.then(function(){e.mlsplView=new i.default({model:{application:e.model.application,classicurl:e.model.classicurl,user:e.model.user},deferreds:{layout:e.deferreds.layout}})})}});n.default=l,e.exports=t.default}.apply(t,r))||(e.exports=a)},"algorithm/Master":function(e,t,n){(function(e){var r,a;r=[t,n("shim/jquery"),e,n("util/splunkd_utils"),n("views/shared/FlashMessages"),n("./src/main/webapp/models/properties/MLSPL.es"),n("shared/BaseDashboard"),n("./src/main/webapp/util/url.es"),n("algorithm/mlspl/Master")],void 0===(a=function(e,n,r,a,i,o,l,s,u){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n=d(n),r=d(r),a=d(a),i=d(i),o=d(o),l=d(l),u=d(u);var p={data:{app:"Splunk_ML_Toolkit",owner:"nobody"},emulateJSON:!0},c=l.default.extend({moduleId:r.default.id,headerOptions:{title:"Algorithm Settings"},initialize:function(e){var t=this;this.deferreds.mlspl=n.default.Deferred(),this.requiredDeferredIds.push("mlspl"),l.default.prototype.initialize.call(this,e);var r=this.model.classicurl.get("stanza");null!=r&&""!==r||this.deferreds.mlspl.reject("No algorithm was specified."),this.model.mlspl=new o.default({id:r}),this.model.mlspl.bootstrap(p,this.model.user.isAdminLike()).done(function(e,n){t.deferreds.mlspl.resolve()}).fail(function(e,n){t.deferreds.mlspl.reject('Unable to load settings for "'.concat(t.model.mlspl.id,'".'))})},returnToAlgorithmList:function(){window.location=(0,s.buildMLTKPageUrl)(this.model.application,"settings")},render:function(){l.default.prototype.render.call(this);var e=this.model.classicurl.get("stanza");"default"===e?this.model.header.set({title:"Default Algorithm Settings",description:"Configure default settings for the fit and apply commands here.\n                              All algorithms will use these settings unless specifically configured with their own settings."}):this.model.header.set({title:"".concat(e," Algorithm"),description:"Configure settings for the fit and apply commands for the ".concat(e," algorithm here.\n                              Any settings not configured on the algorithm directly will be inherited from the default settings.")}),this.children.header.render(),this.children.flashMessage=new i.default({model:{mlspl:this.model.mlspl}}),this.model.mlspl.off("validated",null,this.children.flashMessage.flashMsgHelper);var t=this.model.user.isAdminLike();return t||this.children.flashMessage.flashMsgHelper.addGeneralMessage("notAdminLike",{type:a.default.WARNING,html:"You do not have permissions to edit this configuration."}),this.children.formView=new u.default({model:{mlspl:this.model.mlspl},labelWidth:300,readOnly:!t,onSave:function(){var e=this;this.children.formView.model.props.set("disabled",!0),this.model.mlspl.save(null,p).done(function(){e.returnToAlgorithmList()}).always(function(){e.children.formView.model.props.set("disabled",!1)})}.bind(this),onCancel:this.returnToAlgorithmList.bind(this)}),this.$el.append(this.children.flashMessage.render().el,this.children.formView.render().el),this}});e.default=c,r.default.exports=t.default}.apply(t,r))||(e.exports=a)}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"algorithm/mlspl/Form":function(e,t,n){var r,a;r=[t,n("./node_modules/react/index.js"),n("./node_modules/prop-types/index.js"),n("./node_modules/@splunk/react-ui/ControlGroup.js"),n("./node_modules/@splunk/react-ui/Text.js"),n("./src/main/webapp/contrib_shim/react-ui/Button/Button.jsx"),n("./node_modules/@splunk/react-ui/RadioBar.js")],void 0===(a=function(n,r,a,i,o,l,s){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,r=u(r),a=u(a),i=u(i),o=u(o),l=u(l),s=u(s);var p={attributes:a.default.arrayOf(a.default.object),dataTest:a.default.string,disabled:a.default.bool,isValid:a.default.bool,labelWidth:a.default.number,onCancel:a.default.func.isRequired,onChange:a.default.func.isRequired,onSave:a.default.func.isRequired,readOnly:a.default.bool};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.default.createElement("span",{style:{whiteSpace:"pre-line"}},e.trim())}var f=function(e){var t=e.attributes,n=e.dataTest,a=e.disabled,u=e.isValid,p=e.labelWidth,f=e.onCancel,m=e.onChange,h=e.onSave,b=e.readOnly,g={};return null!=n&&(g["data-test"]=n),r.default.createElement(r.default.Fragment,null,t.map(function(e){return r.default.createElement(i.default,d({error:null!=e.error,help:e.error,key:e.label,label:e.label,labelWidth:p,tooltip:c(e.tooltip)},g),e.validation&&null!=e.validation.oneOf?r.default.createElement(s.default,{error:null!=e.error,name:e.label,onChange:function(e,t){var n=t.value,r=t.name;return m(n,r)},value:e.value},e.validation.oneOf.map(function(e){return r.default.createElement(s.default.Option,{disabled:a||b,key:e,label:e,value:e})})):r.default.createElement(o.default,{disabled:a||b,error:null!=e.error,name:e.label,onChange:function(e,t){var n=t.value,r=t.name;return m(n,r)},value:e.value}))}),r.default.createElement(i.default,{controlsLayout:"none",label:"",labelWidth:p},r.default.createElement(l.default,{appearance:"secondary",disabled:a,label:"Cancel",onClick:f}),!b&&r.default.createElement(l.default,{appearance:"primary",disabled:a||!u,label:"Save",onClick:h})))};f.propTypes=p,f.defaultProps={attributes:[],dataTest:null,disabled:!1,readOnly:!1,isValid:!1,labelWidth:120};var m=f;n.default=m,e.exports=t.default}.apply(t,r))||(e.exports=a)},"algorithm/mlspl/FormContainer":function(e,t,n){var r,a;r=[t,n("./node_modules/react/index.js"),n("./node_modules/prop-types/index.js"),n("algorithm/mlspl/Form")],void 0===(a=function(n,r,a,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(r),a=o(a),i=o(i);var f={model:a.default.shape({mlspl:a.default.object.isRequired,props:a.default.object.isRequired}).isRequired},m=function(e){function t(e,n){var r,a,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(r=!(i=d(t).call(this,e,n))||"object"!==l(i)&&"function"!=typeof i?p(a):i).handleValueChange=r.handleValueChange.bind(p(r));var o=r.parseMLSPLModelToProps(),s=o.attributes,u=o.isValid;return r.state={attributes:s,isValid:u},r}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;this.props.model.props.on("change",function(t){e.setState(t.changed)}),this.props.model.mlspl.on("change",function(t){var n=e.parseMLSPLModelToProps(),r=n.attributes,a=n.isValid;e.setState({attributes:r,isValid:a})})}},{key:"parseMLSPLModelToProps",value:function(){var e=this,t=this.props.model.mlspl.validate()||{};return{attributes:Object.keys(this.props.model.mlspl.toJSON()).sort().reduce(function(n,r){return"id"!==r&&n.push({error:t[r],label:r,tooltip:e.props.model.mlspl.description[r],validation:e.props.model.mlspl.validation[r],value:e.props.model.mlspl.attributes[r]}),n},[]),isValid:0===Object.keys(t).length,validation:t}}},{key:"handleValueChange",value:function(e,t){this.props.model.mlspl.set(t,e)}},{key:"render",value:function(){return r.default.createElement(i.default,s({onChange:this.handleValueChange},this.state,this.props.model.props.attributes))}}])&&u(n.prototype,a),o&&u(n,o),t}();m.propTypes=f;var h=m;n.default=h,e.exports=t.default}.apply(t,r))||(e.exports=a)},"algorithm/mlspl/Master":function(e,t,n){(function(e){var r,a;r=[t,n("./node_modules/react/index.js"),n("require/backbone"),e,n("views/ReactAdapterBase"),n("./src/main/webapp/models/properties/MLSPL.es"),n("algorithm/mlspl/FormContainer")],void 0===(a=function(e,n,r,a,i,o,l){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n=s(n),r=s(r),a=s(a),i=s(i),o=s(o),l=s(l);var d=i.default.extend({moduleId:a.default.id,initialize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i.default.prototype.initialize.apply(this,e),this.model=this.model||{};e.model;var t=u(e,["model"]);this.model.mlspl=this.model.mlspl||new o.default,this.model.props=this.model.props||new r.default.Model,this.model.props.set(t)},getComponent:function(){return n.default.createElement(l.default,{model:this.model})}});e.default=d,a.default.exports=t.default}.apply(t,r))||(e.exports=a)}).call(this,n("./node_modules/webpack/buildin/module.js")(e))}},[["./node_modules/@splunk/splunk-web-core/build_tools/web_loaders/splunk-public-path-injection-loader.js?/static/app/Splunk_ML_Toolkit/!./src/main/webapp/pages/algorithm.es","pages_common"]]]);