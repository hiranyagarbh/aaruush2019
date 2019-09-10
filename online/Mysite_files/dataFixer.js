define("dataFixer",["lodash","coreUtils","experiment","skinExports","santa-data-fixer"],function(e,n,t,o,r){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=667)}({0:function(n,t){n.exports=e},1:function(e,t){e.exports=n},127:function(e,n){e.exports=o},667:function(e,n,t){var o,r;o=[t(0),t(8),t(668),t(669),t(670),t(671),t(672),t(673)],void 0===(r=function(e,n,t,o,r,i,a,u){"use strict";var c={fix:function(o,r,i,a,u,s,l,p){var f=e(e.get(l,"runningExperiments",{})).pickBy(function(e,t){return n.isOpen(t,{rendererModel:l})}).keys().value(),d=e.get(l,"clientSpecMap"),m=e.get(l,"siteMetaData.quickActions.configuration.quickActionsMenuEnabled",!1);return o=t.fix({pageJson:o,clientSpecMap:d,urlFormatModel:u,quickActionsMenuEnabled:m,isViewerMode:s,experiments:f,pageIdsArray:r,pageId:e.get(p,e.get(o.structure,"id","masterPage"))}),c.clientOnlyDataFixers(o,r,i,a,u,s,l),o},clientOnlyDataFixers:function(n,t,c,s,l,p,f){return e.forEach([o,r,i,a,u],function(e){return e.exec(n,t,c,s,l,p,f)}),n}};return e.assign({},t,c)}.apply(n,o))||(e.exports=r)},668:function(e,n){e.exports=r},669:function(e,n,t){var o,r;o=[t(0),t(1),t(127)],void 0===(r=function(e,n,t){"use strict";var o=!1,r={},i={},a=[];function u(n,t){return"wysiwyg.common.components.verticalmenu.viewer.VerticalMenu"===t.componentType&&!function(n,t){var o=c(n,t);return!e.isUndefined(o.menuItemHeight)}(n,t)}function c(e,n){return e.data.component_properties[n.propertyQuery.replace("#","")]}function s(o,a){var u=function(e,n){return e.data.document_data[n.dataQuery.replace("#","")]}(o,a),s=e.get(u,"menuRef","").replace("#",""),l=i[s],p=function(e,n){return e.data.theme_data[n.styleId]||r[n.styleId]}(o,a);if(p){var f=parseInt(p.style.properties.sepw||p.style.properties.separatorHeight||0,10),d=t[p.skin];!function(e,t,o){var r=c(e,t);o?r.menuItemHeight=o:n.log.error("cannot find menu items")}(o,a,n.verticalMenuCalculations.getItemHeight(a.layout.height,f,l,d))}else n.log.error("cannot find style")}function l(n,t){e.forEach(t,function(e){u(n,e)&&s(n,e),e.components&&l(n,e.components)})}function p(e){var n=e.structure;n&&(n.components&&l(e,n.components),n.mobileComponents&&l(e,n.mobileComponents),n.children&&l(e,n.children))}return{exec:function(n){if(function(e){return!!e.data.theme_data.THEME_DATA}(n))for(!function(e){r=e.data.theme_data}(n),function(n){var t=n.data.document_data,o=t.CUSTOM_MENUS&&t.CUSTOM_MENUS.menus||[];e.forEach(o,function(n){var o=n.replace("#",""),r=t[o]&&t[o].items||[],a=e.filter(r,function(e){var n=e.replace("#","");return t[n]&&t[n].isVisible}).length;i[o]=a||1})}(n),p(n),o=!0;a.length>0;)p(a.pop());else o?p(n):a.push(n)}}}.apply(n,o))||(e.exports=r)},670:function(e,n,t){var o,r;o=[t(0),t(1)],void 0===(r=function(e,n){"use strict";var t="BOXSLIDESHOW_Regular_Slideshow_Slides_New_Slide_Label";return{exec:function(o,r,i,a,u,c,s){var l=o.data.document_data;"Template"===e.get(s,"siteInfo.documentType")&&function(o,r){if(e.includes(n.languages,r)){var i=n.translationsLoader.getTranslationAllKeys("boxSlideShow",r,{},{useOldTranslations:!0});i&&e.forOwn(o,function(e){if("boxSlideShowSlide"===e.type||"StripContainerSlideShowSlide"===e.type){var n=e.title?e.title.split(" ")[1]:"";e.title=i[t]&&n?i[t].replace("<%= curr_slide %>",n):e.title}})}}(l,i?n.wixUserApi.getLanguage(i.cookie,a,i.language):"en")}}}.apply(n,o))||(e.exports=r)},671:function(e,n,t){var o,r;o=[t(0),t(1)],void 0===(r=function(e,n){"use strict";var t=["addressFieldLabel","emailFieldLabel","errorMessage","messageFieldLabel","nameFieldLabel","phoneFieldLabel","subjectFieldLabel","submitButtonLabel","successMessage","validationErrorMessage"];return{exec:function(o,r,i,a,u,c,s){var l=o.data.document_data;"Template"===e.get(s,"siteInfo.documentType")&&(!function(o,r){if(e.includes(n.languages,r)){var i=n.translationsLoader.getTranslationAllKeys("contactFormTranslations",r,{},{useOldTranslations:!0});i&&e.forOwn(o,function(n){"ContactForm"===n.type&&e.forEach(t,function(e){n[e]=i[e]||n[e]})})}}(l,n.wixUserApi.getLanguage(i.cookie,a,i.language)),function(n){e.forOwn(n,function(e){"ContactForm"===e.type&&(e.onSubmitBehavior||(e.onSubmitBehavior="message"))})}(l))}}}.apply(n,o))||(e.exports=r)},672:function(e,n,t){var o,r;o=[t(0),t(1)],void 0===(r=function(e,n){"use strict";var t=["emailFieldLabel","errorMessage","firstNameFieldLabel","lastNameFieldLabel","phoneFieldLabel","submitButtonLabel","subscribeFormTitle","successMessage","validationErrorMessage"];return{exec:function(o,r,i,a,u,c,s){var l=o.data.document_data;(function(n){return"Template"===e.get(n,"siteInfo.documentType")})(s)&&(!function(o,r){if(e.includes(n.languages,r)){var i=n.translationsLoader.getTranslationAllKeys("subscribeFormTranslations",r,{},{useOldTranslations:!0});i&&e.forOwn(o,function(n){"SubscribeForm"===n.type&&e.forEach(t,function(e){n[e]=i[e]||n[e]})})}}(l,n.wixUserApi.getLanguage(i.cookie,a,i.language)),function(n){e.forOwn(n,function(e){"SubscribeForm"===e.type&&(e.onSubmitBehavior||(e.onSubmitBehavior="message"))})}(l))}}}.apply(n,o))||(e.exports=r)},673:function(e,n,t){var o,r;o=[t(0)],void 0===(r=function(e){"use strict";var n=["wysiwyg.viewer.components.inputs.TextInput","wixapps.integration.components.inputs.TextArea","wysiwyg.viewer.components.inputs.TextAreaInput","wysiwyg.viewer.components.inputs.ComboBoxInput","wysiwyg.viewer.components.inputs.DatePicker"];function t(e){return e.propertyQuery.replace("#","")}function o(n,o){!function(n,o,r){var i=n.data.document_data[t(o)];i&&(i.placeholder=e.get(i,"placeholder")||r)}(n,o,function(e,n){return e.data.component_properties[t(n)]}(n,o).placeholder)}function r(t,i){e.forEach(i,function(i){(function(t){return e.includes(n,t.componentType)})(i)&&o(t,i),i.components&&r(t,i.components)})}return{exec:function(e){!function(e){var n=e.structure;n&&(n.components&&r(e,n.components),n.mobileComponents&&r(e,n.mobileComponents),n.children&&r(e,n.children))}(e)}}}.apply(n,o))||(e.exports=r)},8:function(e,n){e.exports=t}})});
//# sourceMappingURL=dataFixer.min.js.map