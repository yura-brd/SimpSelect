!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("SimpleSelect",[],t):"object"==typeof exports?exports.SimpleSelect=t():e.SimpleSelect=t()}("undefined"==typeof self?this:self,(function(){return function(){"use strict";var e={737:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.initClass=t.nameMark=t.nameSelect=t.simpleSelectionOptions=t.simpleSelectLocale=void 0,t.simpleSelectLocale={noSearch:"No matches for",searchText:"Search",title:"Select",selected:"Selected:",all:"all",ok:"Ok",cansel:"Cansel",selectAll:"Select all",resetAll:"Reset all"},t.simpleSelectionOptions={isSearch:!1,isSearchInDropdown:!1,countShowSelected:3,isOnlyPlaceholder:!1,isConfirmInMulti:!1,isConfirmInMultiOkClickOutside:!1,nativeOnDevice:["Android","BlackBerry","iPhone","iPad","iPod","Opera Mini","IEMobile","Silk"],locale:t.simpleSelectLocale,sepChars:",",isUp:!1,floatWidth:767,isCloneClass:!0,selectAll:!1,selectAllAfterClose:!0,resetAll:!1,resetAllAfterClose:!0},t.nameSelect="SimpSelect";t.nameMark="".concat("simple-select-","init"),t.initClass="SimpleSel"},874:function(e,t,i){function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,u(s.key),s)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=c(e);if(t){var l=c(this).constructor;i=Reflect.construct(n,arguments,l)}else i=n.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(this,i)}}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(){return r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var s=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(s){var n=Object.getOwnPropertyDescriptor(s,t);return n.get?n.get.call(arguments.length<3?e:i):n.value}},r.apply(this,arguments)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function h(e,t,i){return(t=u(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleSelectItem=void 0;var p=i(679),d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(d,e);var t,i,s,u=o(d);function d(e,t,i){var s,n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),h(a(n=u.call(this,e,t,i)),"closeOutsideHandler",void 0),h(a(n),"closeEscHandler",void 0),h(a(n),"changeListener",void 0),h(a(n),"searchHandler",void 0),h(a(n),"handleResize",void 0),h(a(n),"mql",null),h(a(n),"countOpen",0),h(a(n),"multiDebounceTime",0),h(a(n),"timeoutDebounceId",null),!e)throw Error("Select is required");return n.init(),r((s=a(n),c(d.prototype)),"initDom",s).call(s),n.initAfterDom(),n}return t=d,i=[{key:"init",value:function(){var e=this;this.changeListener=this.changeListenerInit.bind(this),this.$select.addEventListener("change",this.changeListener),this.searchHandler=this.searchHandlerInit.bind(this),this.closeOutsideHandler=this.closeOutsideHandlerInit.bind(this),this.closeEscHandler=this.closeEscHandlerInit.bind(this),this.handleResize=this.handleResizeInit.bind(this),this.options.callbackInitialization&&this.options.callbackInitialization(this),!this.isNative&&this.options.floatWidth&&(this.mql=window.matchMedia("screen and (max-width: ".concat(this.options.floatWidth,"px)")),this.mql&&(this.mql.onchange=this.handleResize,this.handleResizeInit(this.mql))),this.state.subscribe("isOpen",(function(t){e.toggleOpenHandler(),!t&&e.options.isConfirmInMulti&&e.createList(),t||e.elemInputSearch&&(e.elemInputSearch.value="",e.state.setState("filterStr",""))})),this.state.subscribe("filterStr",(function(t){e.filterList(t)})),this.isNative||(this.elemTopBody.onclick=this.clickToggleOpen.bind(this),this.elemTopBody.onkeyup=this.clickToggleOpen.bind(this))}},{key:"handleResizeInit",value:function(e){e&&(e.matches?this.state.setState("isFloat",!0):this.state.setState("isFloat",!1))}},{key:"initAfterDom",value:function(){this.confirmOk&&(this.confirmOk.onclick=this.confirmOkHandler.bind(this)),this.confirmNo&&(this.confirmNo.onclick=this.confirmNoHandler.bind(this)),this.options.callbackInitialized&&this.options.callbackInitialized(this),this.isMulti&&!this.options.isConfirmInMulti&&((0,p.toCamelCase)("simple-debounce-time")in this.$select.dataset?this.multiDebounceTime=Number(this.$select.dataset[(0,p.toCamelCase)("simple-debounce-time")]):(this.options.debounceTime||0===this.options.debounceTime)&&(this.multiDebounceTime=this.options.debounceTime)),this.multiDebounceTime&&(this.multiDebounceChange=this.debounce(this.multiDebounceChange.bind(this),this.multiDebounceTime)),this.elemSelectAll&&(this.elemSelectAll.onclick=this.selectAllHandler.bind(this)),this.elemResetAll&&(this.elemResetAll.onclick=this.resetAllHandler.bind(this)),this.elemDropDownClose&&(this.elemDropDownClose.onclick=this.closeHandler.bind(this))}},{key:"debounce",value:function(e,t){var i=this;return function(){for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];i.timeoutDebounceId&&clearTimeout(i.timeoutDebounceId),i.timeoutDebounceId=setTimeout((function(){e.apply(void 0,n),i.timeoutDebounceId=null}),t)}}},{key:"confirmOkHandler",value:function(e){e.preventDefault(),this.confirmOkBuild()}},{key:"confirmOkBuild",value:function(){var e=this.$select.options;this.elemListBody&&(this.elemListBody.querySelectorAll("[data-sel-position]").forEach((function(t){var i=parseInt(t.dataset[(0,p.toCamelCase)("sel-position")],10);if(i||0===i){var s=e[i];s&&!s.disabled&&(s.selected="true"===t.dataset[(0,p.toCamelCase)("sel-opt-checked")])}})),this.state.setState("isOpen",!1),this.triggerInit())}},{key:"confirmNoHandler",value:function(e){e.preventDefault(),this.state.setState("isOpen",!1)}},{key:"closeHandler",value:function(e){e.preventDefault(),this.state.setState("isOpen",!1)}},{key:"selectAllHandler",value:function(e){e.preventDefault(),Array.from(this.$select.options).forEach((function(e){e.disabled||(e.selected=!0)})),this.createList(),this.options.selectAllAfterClose&&this.state.setState("isOpen",!1),this.triggerInit()}},{key:"resetAllHandler",value:function(e){e.preventDefault(),Array.from(this.$select.options).forEach((function(e){e.disabled||(e.selected=!1)})),this.createList(),this.options.selectAllAfterClose&&this.state.setState("isOpen",!1),this.triggerInit()}},{key:"triggerSetup",value:function(e){if(0===e.button){var t=e.target.closest("li");t&&this.changeClickItem(t)}}},{key:"changeClickItem",value:function(e){if(e){var t=Number(e.dataset[(0,p.toCamelCase)("sel-position")])||0,i=this.$select.options[t];i&&!i.disabled&&(this.isMulti?this.options.isConfirmInMulti||this.isFloatWidth?"true"===e.dataset[(0,p.toCamelCase)("sel-opt-checked")]?(e.dataset[(0,p.toCamelCase)("sel-opt-checked")]="false",e.classList.remove("SimpleSel__list_item--checked")):(e.dataset[(0,p.toCamelCase)("sel-opt-checked")]="true",e.classList.add("SimpleSel__list_item--checked")):(i.selected=!i.selected,this.createList(),this.multiDebounceChange()):(i.selected=!i.selected,this.createList(),this.state.setState("isOpen",!1),this.triggerInit()))}}},{key:"multiDebounceChange",value:function(){this.triggerInit()}},{key:"triggerInit",value:function(){(0,p.triggerInputEvent)(this.$select)}},{key:"clickToggleOpen",value:function(e){e.preventDefault(),this.isDisabled||("click"!==e.type?e instanceof KeyboardEvent&&"Enter"===e.key&&this.state.setState("isOpen",!this.state.getState("isOpen")):this.state.setState("isOpen",!this.state.getState("isOpen")))}},{key:"closeOutsideHandlerInit",value:function(e){var t=e.target;t&&(this.elemWrap.contains(t)||(this.options.isConfirmInMulti&&this.options.isConfirmInMultiOkClickOutside&&this.confirmOkBuild(),this.state.setState("isOpen",!1)))}},{key:"closeEscHandlerInit",value:function(e){if("Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),this.state.setState("isOpen",!1)),"Tab"===e.code&&(e.preventDefault(),e.stopPropagation(),this.elemWrap.contains(e.target)||this.state.setState("isOpen",!1)),"ArrowUp"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),e.stopPropagation(),this.keyBoardChangeChecked("ArrowDown"===e.key)),"Enter"===e.key){var t=e.target;t&&(0,p.toCamelCase)("sel-opt-item")in t.dataset&&(e.preventDefault(),e.stopPropagation(),this.changeClickItem(t))}}},{key:"keyBoardChangeChecked",value:function(e){var t=this.elemListBody.querySelectorAll('[data-sel-position]:not([data-sel-opt-disabled="true"])');if(t.length){var i,s=0;t.forEach((function(e,t){document.activeElement===e&&(s=t,i=e),e.removeAttribute("tabindex")})),(i=i?e?t[s+1]||t[0]:t[s-1]||t[t.length-1]:e?t[0]:t[t.length-1]).tabIndex=0,i.focus()}}},{key:"searchHandlerInit",value:function(e){var t=e.target;if(t){var i=t.value;this.state.setState("filterStr",i)}}},{key:"toggleOpenHandler",value:function(){var e=this;this.state.getState("isOpen")?(this.elemWrap.classList.add("SimpleSel--open"),document.addEventListener("click",this.closeOutsideHandler),document.addEventListener("keyup",this.closeEscHandler),this.elemInputSearch&&setTimeout((function(){e.elemInputSearch.focus()}),50),this.options.callbackOpen&&this.options.callbackOpen(this),this.countOpen++,this.elemDropDown&&setTimeout((function(){e.elemDropDown.scrollTop=0}),10)):(this.state.setState("filterList",""),this.elemWrap.classList.remove("SimpleSel--open"),document.removeEventListener("click",this.closeOutsideHandler),document.removeEventListener("keyup",this.closeEscHandler),this.timeoutDebounceId&&(clearTimeout(this.timeoutDebounceId),this.triggerInit()),this.options.callbackClose&&this.countOpen>0&&this.options.callbackClose(this))}},{key:"changeListenerInit",value:function(e){this.options.callbackChangeSelect&&this.options.callbackChangeSelect(e,this),this.createList(!0)}},{key:"getSelect",value:function(){return this.$select}},{key:"handlerChangeChecked",value:function(){this.elemListBody&&(this.elemListBody.onmouseup=this.triggerSetup.bind(this))}},{key:"createList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[],i=this.$select.querySelectorAll("optgroup");if(i&&i.length?i.forEach((function(e,i){t.push((0,p.getCreateListItem)(e,(i+1).toString(),!0))})):t.push((0,p.getCreateListItem)(this.$select,"1",!1)),e){var s=this.state.getState("items");(0,p.compareObj)(s,t)||this.state.setState("items",t)}else this.state.setState("items",t)}},{key:"filterList",value:function(e){e=e.toLowerCase();var t=(0,p.cloneObj)(this.state.getState("items"));t.forEach((function(t){var i=!1;t.items.forEach((function(t){t.title.toLowerCase().indexOf(e)>=0?(i=!0,t.isShowFilter=!0):t.isShowFilter=!1})),t.isShowFilter=i})),this.state.setState("items",t)}},{key:"inputSearchHandler",value:function(){this.elemInputSearch&&this.elemInputSearch.addEventListener("input",this.searchHandler)}},{key:"detachItem",value:function(){this.options.callbackDestroyInit&&this.options.callbackDestroyInit(this);var e=this.elemWrap.parentNode;this.$select.removeEventListener("change",this.changeListener),this.elemInputSearch&&this.elemInputSearch.removeEventListener("input",this.searchHandler),this.confirmOk&&(this.confirmOk.onclick=null),this.confirmNo&&(this.confirmNo.onclick=null),e.replaceChild(this.$select,this.elemWrap),this.$select.classList.remove(this.classSelectInit),this.elemTopBody&&(this.elemTopBody.onclick=null,this.elemTopBody.onkeyup=null),this.elemListBody&&(this.elemListBody.onmouseup=null),this.elemSelectAll&&(this.elemSelectAll.onclick=null),this.elemResetAll&&(this.elemResetAll.onclick=null),this.options.callbackDestroy&&this.options.callbackDestroy(this),this.elemDropDownClose&&(this.elemDropDownClose.onclick=null),this.mql&&(this.mql.onchange=null,this.mql=null)}}],i&&n(t.prototype,i),s&&n(t,s),Object.defineProperty(t,"prototype",{writable:!1}),d}(i(844).SimpleSelectItemDOM);t.SimpleSelectItem=d},844:function(e,t,i){function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function n(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function o(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,r(s.key),s)}}function a(e,t,i){return(t=r(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleSelectItemDOM=void 0;var c=i(679),h=i(972),u=i(737),p=function(){function e(t,i,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"options",void 0),a(this,"$select",void 0),a(this,"id",void 0),a(this,"titlePlaceholder",void 0),a(this,"isDisabled",!1),a(this,"isMulti",void 0),a(this,"state",(0,h.store)({items:[],isOpen:!1,filterStr:"",isFloat:!1})),a(this,"classSelectInit",(0,c.getClass)("select_init")),a(this,"isNative",void 0),a(this,"elemWrap",document.createElement("div")),a(this,"elemTop",document.createElement("div")),a(this,"elemTopBody",document.createElement("div")),a(this,"elemDropDownWrap",null),a(this,"elemDropDown",null),a(this,"elemDropDownClose",null),a(this,"elemListBody",null),a(this,"elemInputSearch",null),a(this,"elemTitle",void 0),a(this,"confirmOk",null),a(this,"confirmNo",null),a(this,"elemControl",null),a(this,"elemSelectAll",null),a(this,"elemResetAll",null),a(this,"cloneClasses",""),a(this,"isShowCheckbox",!1),a(this,"bodyLiHTMLBeforeFromSelect",null),a(this,"bodyLiHTMLAfterFromSelect",null),a(this,"isFloatWidth",!1),a(this,"bodyOpenClass","".concat(u.initClass,"--body_open"));var n=s.id,l=s.isNative;this.$select=t,this.isMulti=t.multiple,this.id=n,this.isNative=l,this.options=(0,c.cloneObj)(i),this.options.isCloneClass&&(this.cloneClasses=this.$select.className),i.callbackInitialization&&(this.options.callbackInitialization=i.callbackInitialization),i.callbackInitialized&&(this.options.callbackInitialized=i.callbackInitialized),i.callbackOpen&&(this.options.callbackOpen=i.callbackOpen),i.callbackClose&&(this.options.callbackClose=i.callbackClose),i.callbackDestroyInit&&(this.options.callbackDestroyInit=i.callbackDestroyInit),i.callbackDestroy&&(this.options.callbackDestroy=i.callbackDestroy),i.callbackChangeSelect&&(this.options.callbackChangeSelect=i.callbackChangeSelect),i.changeBodyLi&&(this.options.changeBodyLi=i.changeBodyLi),this.isMulti&&this.$select.hasAttribute("data-simple-is-confirm")&&(this.options.isConfirmInMulti=(0,c.ifTrueDataAttr)(this.$select.getAttribute("data-simple-is-confirm"))),this.optionOverride(),this.isDisabled=this.$select.disabled}var t,i,s;return t=e,(i=[{key:"optionOverride",value:function(){var e=(0,c.toCamelCase)("simple-placeholder");if(this.$select.dataset[e]?this.titlePlaceholder=this.$select.dataset[e]||"":this.titlePlaceholder=this.options.locale.title,this.$select.hasAttribute("data-simple-reset-all")&&(this.options.resetAll=(0,c.ifTrueDataAttr)(this.$select.getAttribute("data-simple-reset-all"))),this.$select.hasAttribute("data-simple-select-all")){var t=this.$select.getAttribute("data-simple-select-all");this.options.selectAll=(0,c.ifTrueDataAttr)(t)}var i=this.$select.dataset[(0,c.toCamelCase)("simple-show-checkbox")];this.isMulti?this.isShowCheckbox=!(i&&!(0,c.ifTrueDataAttr)(i)):"true"===i&&(this.isShowCheckbox=!0);var s=this.$select.dataset[(0,c.toCamelCase)("simple-item-html-before")];s&&(this.bodyLiHTMLBeforeFromSelect=s);var n=this.$select.dataset[(0,c.toCamelCase)("simple-item-html-after")];n&&(this.bodyLiHTMLAfterFromSelect=n),this.$select.hasAttribute("data-simple-up")&&(this.options.isUp=(0,c.ifTrueDataAttr)(this.$select.getAttribute("data-simple-up"))),this.$select.hasAttribute("data-simple-is-only-placeholder")&&(this.options.isOnlyPlaceholder=(0,c.ifTrueDataAttr)(this.$select.getAttribute("data-simple-is-only-placeholder")))}},{key:"initDom",value:function(){var e=this;this.createList(!1),this.createHTML(),this.state.subscribe("items",(function(t){e.createListHTML(),e.createTitleHTML()})),this.state.subscribe("isOpen",(function(t){e.createListHTML(),e.createTitleHTML(),e.toggleTabIndex(t)})),this.state.subscribe("isFloat",(function(t){e.isFloatWidth=t;var i=(0,c.getClass)("float",!0);t?e.elemWrap.classList.add(i):e.elemWrap.classList.remove(i)}))}},{key:"toggleTabIndex",value:function(e){var t=e?0:-1;this.state.getState("isFloat")&&(e?document.body.classList.add(this.bodyOpenClass):document.body.classList.remove(this.bodyOpenClass)),this.elemInputSearch&&(this.elemInputSearch.tabIndex=t),this.elemResetAll&&(this.elemResetAll.tabIndex=t),this.elemSelectAll&&(this.elemSelectAll.tabIndex=t),this.confirmOk&&(this.confirmOk.tabIndex=t),this.confirmNo&&(this.confirmNo.tabIndex=t)}},{key:"updateHTML",value:function(){this.createList(!0)}},{key:"createHTML",value:function(){this.$select.classList.add(this.classSelectInit),this.$select.tabIndex=-1,this.elemTopBody.className=(0,c.getClass)("top_body"),this.elemTopBody.tabIndex=this.isDisabled?-1:0,this.createIcon(),this.elemTop.appendChild(this.elemTopBody);var e=u.initClass;this.options.isCloneClass&&(e+=" ".concat(this.cloneClasses)),this.$select.hasAttribute("data-simple-add-classes")&&(e+=" ".concat(this.$select.getAttribute("data-simple-add-classes"))),this.isDisabled&&(e+=" ".concat((0,c.getClass)("disabled",!0))),this.options.isUp&&(e+=" ".concat((0,c.getClass)("up",!0))),e+=" ".concat(this.isMulti?(0,c.getClass)("multi",!0):(0,c.getClass)("single",!0)),this.elemWrap.className=e,this.elemWrap.dataset.countAll=this.$select.options.length.toString(),this.elemTop.className=(0,c.getClass)("top");var t=this.$select.parentNode;t&&(t.replaceChild(this.elemWrap,this.$select),this.elemWrap.appendChild(this.$select)),this.elemWrap.appendChild(this.elemTop),this.isNative?(this.$select.classList.add((0,c.getClass)("native",!0,this.classSelectInit)),this.elemWrap.classList.add((0,c.getClass)("native",!0))):(this.createDropDown(),this.createControlHTML(),this.createInputHTML()),this.createTitleHTML()}},{key:"createControlHTML",value:function(){if(this.elemDropDown&&this.isMulti&&(this.options.selectAll||this.options.resetAll)){this.elemControl=document.createElement("div"),this.elemControl.classList.add((0,c.getClass)("controls")),this.elemDropDown.insertBefore(this.elemControl,this.elemDropDown.childNodes[0]);var e=(0,c.getClass)("control");this.options.selectAll&&(this.elemSelectAll=(0,c.createButton)(),this.elemSelectAll.className="".concat(e," ").concat((0,c.getClass)("select_all",!0,e)),this.elemSelectAll.innerHTML='<span class="'.concat((0,c.getClass)("select_all__icon"),'"></span> ').concat(this.options.locale.selectAll),this.elemControl.appendChild(this.elemSelectAll)),this.options.resetAll&&(this.elemResetAll=(0,c.createButton)(),this.elemResetAll.className="".concat(e," ").concat((0,c.getClass)("reset_all",!0,e)),this.elemResetAll.innerHTML='<span class="'.concat((0,c.getClass)("reset_all__icon"),'"></span> ').concat(this.options.locale.resetAll),this.elemControl.appendChild(this.elemResetAll))}}},{key:"createIcon",value:function(){var e=document.createElement("span");e.className=(0,c.getClass)("icon"),this.elemTopBody.appendChild(e)}},{key:"createDropDown",value:function(){this.isNative||(this.elemDropDownWrap=document.createElement("div"),this.elemDropDownWrap.className=(0,c.getClass)("body"),this.elemDropDown=document.createElement("div"),this.elemDropDown.className=(0,c.getClass)("body_wrap"),this.elemListBody=document.createElement("ul"),this.elemListBody.className=(0,c.getClass)("list"),this.elemDropDownWrap.append(this.elemDropDown),this.elemWrap.appendChild(this.elemDropDownWrap),this.elemDropDown.appendChild(this.elemListBody),this.elemDropDownClose=(0,c.createButton)(),this.elemDropDownClose.classList.add((0,c.getClass)("close")),this.elemDropDown.appendChild(this.elemDropDownClose),this.isMulti&&this.createIsConfirmInMultiHTML(),this.handlerChangeChecked())}},{key:"createIsConfirmInMultiHTML",value:function(){var e,t=document.createElement("div"),i=(0,c.getClass)("bottom_control");this.confirmOk=(0,c.createButton)(),this.confirmNo=(0,c.createButton)(),t.appendChild(this.confirmOk),t.appendChild(this.confirmNo),this.confirmOk.innerHTML=this.options.locale.ok,this.confirmNo.innerHTML=this.options.locale.cansel,this.confirmOk.className="".concat(i," ").concat((0,c.getClass)("ok",!0,i)),this.confirmNo.className="".concat(i," ").concat((0,c.getClass)("no",!0,i));var s=(0,c.getClass)("bottom_controls");this.options.isConfirmInMulti||(s+=" ".concat((0,c.getClass)("hide",!0,s))),t.className=s,null===(e=this.elemDropDown)||void 0===e||e.appendChild(t)}},{key:"createTitleHTML",value:function(){var e=this;if(!this.elemTitle){this.elemTitle=document.createElement("div");var t=(0,c.getClass)("title");this.options.isOnlyPlaceholder&&(t+=" ".concat((0,c.getClass)("only-placeholder",!0,t))),this.elemTitle.className=t,this.elemTopBody.insertBefore(this.elemTitle,this.elemTopBody.childNodes[0])}var i=this.getChecked();this.elemTop.title="";var s=!i.length,n=this.titlePlaceholder;if(i.length&&!this.options.isOnlyPlaceholder){var l="";i.forEach((function(t,i){0!==i&&(l+="".concat(e.options.sepChars,'<span class="').concat((0,c.getClass)("sep_space",!0),'">&nbsp;</span>')),l+="".concat(t.title)})),this.elemTop.title=l;var o=this.options.countShowSelected,a=Number(this.$select.dataset.simpleCountShowsSelected);a&&a>0&&(o=a),i.length>o?(n="".concat(this.options.locale.selected," ").concat(i.length),this.$select.querySelectorAll("option").length===i.length&&(n+=" (".concat(this.options.locale.all,")"))):l&&(n=l)}this.elemTitle.innerHTML=n,s?(this.elemTitle.classList.add("SimpleSel__title--placeholder"),this.elemTitle.classList.remove("SimpleSel__title--fill"),this.elemWrap.classList.remove((0,c.getClass)("fill",!0))):(this.elemTitle.classList.remove("SimpleSel__title--placeholder"),this.elemTitle.classList.add("SimpleSel__title--fill"),this.elemWrap.classList.add((0,c.getClass)("fill",!0)))}},{key:"createListHTML",value:function(){var e=this;if(this.elemListBody){var t="",i=0,s=0,n=0;this.state.getState("items").forEach((function(l){if(l.isGroup){var o=e.createLi(l),a=o.result,r=o.countShow,h=o.countChecked,u=o.countCheckedFull;t+='<div class="'.concat((0,c.getClass)("group_items"),'">'),t+=a,t+="</div>",s+=h,i+=r,n+=u}else{var p=e.createLi(l),d=p.result,m=p.countShow,f=p.countChecked,b=p.countCheckedFull;t+=d,i+=m,s+=f,n+=b}}));var l=this.state.getState("filterStr");l&&l.length&&0===i&&(t='<div class="'.concat((0,c.getClass)("no_match"),'">'),t="".concat(this.options.locale.noSearch,' "').concat(l,'"'),t+="</div>"),this.elemWrap.dataset.countChecked=s.toString(),this.elemWrap.dataset.countCheckedFull=n.toString(),this.isMulti&&(this.elemWrap.dataset.checkAllMulti=this.$select.options.length===s?"yes":"no"),this.elemListBody.innerHTML=t}}},{key:"createInputHTML",value:function(){var e=this.options.isSearch,t=this.options.isSearchInDropdown;if("simpleSelectSearch"in this.$select.dataset&&(e="false"!==this.$select.dataset.simpleSelectSearch),"simpleSelectSearchDropdown"in this.$select.dataset&&(t="false"!==this.$select.dataset.simpleSelectSearchDropdown),e||t){this.elemInputSearch=document.createElement("input"),this.elemInputSearch.type="text",this.elemInputSearch.tabIndex=-1,this.elemInputSearch.autocomplete="off",this.elemInputSearch.ariaAutoComplete="none",this.elemInputSearch.inputMode="off",this.elemInputSearch.placeholder=this.options.locale.searchText,this.elemInputSearch.name="".concat(u.initClass,"_name_").concat(this.id);var i=(0,c.getClass)("search");if(t){if(this.elemDropDown){var s=document.createElement("div");s.className=(0,c.getClass)("search_wrap"),this.elemInputSearch.className="".concat(i," ").concat((0,c.getClass)("dropdown",!0,i)),s.appendChild(this.elemInputSearch),this.elemDropDown.insertBefore(s,this.elemDropDown.childNodes[0])}}else this.elemInputSearch.className="".concat(i," ").concat((0,c.getClass)("top",!0,i)),this.elemTop.appendChild(this.elemInputSearch);this.inputSearchHandler()}}},{key:"getChecked",value:function(){var e=this.state.getState("items"),t=[];return e.forEach((function(e){t=[].concat(n(t),n(e.items.filter((function(e){return e.checked}))))})),t}},{key:"createLi",value:function(e){var t=this,i="",s=0,n=0,l=0;return e.isShowFilter?(e.isGroup&&(i+='<label class="'.concat((0,c.getClass)("group_title"),'">').concat(e.titleGroup,"</label>"),i+='<ul class="'.concat((0,c.getClass)("group"),'">')),e.items.forEach((function(o){if(o.isShowFilter){s++;var a=(0,c.getClass)("list_item"),r=a;o.checked&&(n++,r+=" ".concat((0,c.getClass)("checked",!0,a)),o.value&&l++),o.disabled&&(r+=" ".concat((0,c.getClass)("disabled",!0,a))),o.value||(r+=" ".concat((0,c.getClass)("not_value",!0,a)));var h='data-sel-group-id="'.concat(e.idGroup,'"');h+=' data-sel-position="'.concat(o.position,'"'),h+=' data-sel-id="'.concat(o.id,'"'),o.value&&(h+=' data-sel-value="'.concat(o.value,'"')),h+=" data-sel-opt-item",h+=' data-sel-opt-checked="'.concat(o.checked,'"'),h+=' data-sel-opt-disabled="'.concat(o.disabled,'"'),i+='<li  class="'.concat(r,'" ').concat(h,">");var u=t.createLiBody(o,t.$select.options[o.position]);i+="string"==typeof u?u:u.outerHTML,i+="</li>"}})),e.isGroup&&(i+="</ul>"),{result:i,countShow:s,countChecked:n,countCheckedFull:l}):{result:i,countShow:s,countChecked:n,countCheckedFull:l}}},{key:"createLiBody",value:function(e,t){var i=document.createElement("div");i.className=(0,c.getClass)("list_item_body");var s="";return this.isShowCheckbox&&(s='<span class="'.concat((0,c.getClass)("list_item_icon"),'"></span>')),this.bodyLiHTMLBeforeFromSelect&&(s+=this.bodyLiHTMLBeforeFromSelect),t.hasAttribute("data-simple-html-before")&&(s+=t.getAttribute("data-simple-html-before")),s+="".concat(e.title),this.bodyLiHTMLAfterFromSelect&&(s+=this.bodyLiHTMLAfterFromSelect),t.hasAttribute("data-simple-html-after")&&(s+=t.getAttribute("data-simple-html-after")),i.innerHTML=s,this.options.changeBodyLi?this.options.changeBodyLi(i,t):i}},{key:"handlerChangeChecked",value:function(){console.error("This method need redefine")}},{key:"createList",value:function(e){console.error("This method need redefine")}},{key:"inputSearchHandler",value:function(){console.error("This method need redefine")}}])&&o(t.prototype,i),s&&o(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.SimpleSelectItemDOM=p},679:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.createButton=t.cloneObj=t.compareObj=t.getClass=t.getCreateListItem=t.triggerInputEvent=t.ifTrueDataAttr=t.createDataAttr=t.toCamelCase=void 0;var s=i(737);t.toCamelCase=function(e){return e.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}))};t.createDataAttr=function(e){return"data-".concat(e)};t.ifTrueDataAttr=function(e){return!!e&&("true"===e||"1"===e)},t.triggerInputEvent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";try{var i=new Event(t,{bubbles:!0,cancelable:!0});e.dispatchEvent(i)}catch(i){var s=new CustomEvent(t,{bubbles:!0,cancelable:!0});e.dispatchEvent(s)}};t.getCreateListItem=function(e,t,i){var s=e.querySelectorAll("option"),n=[];s.forEach((function(e,t){n.push({id:(t+1).toString(),position:e.index,title:e.innerHTML,value:e.getAttribute("value"),checked:e.selected,disabled:e.disabled,isShowFilter:!0})}));var l={isGroup:i,idGroup:t,items:n,isShowFilter:!0};return e instanceof HTMLOptGroupElement&&(l.titleGroup=e.label||"",l.isDisabledGroup=e.disabled||!1),l};t.getClass=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.initClass,n=t?"--":"__";return"".concat(i).concat(n).concat(e)};t.compareObj=function(e,t){return JSON.stringify(e)===JSON.stringify(t)};t.cloneObj=function(e){return JSON.parse(JSON.stringify(e))};t.createButton=function(){var e=document.createElement("button");return e.type="button",e.tabIndex=-1,e}},972:function(e,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function n(e,t,s){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0,t.store=function(e){var t={},i={},l=[],o=function(e){return e?e in t?t[e]:null:t},a=function(e,o){var a=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},t),r=t[e]||0==t[e]?t[e]:null;t[e]=o,e in i&&i[e].forEach((function(e){return e(o,r,t)})),l.forEach((function(i){return i(e,a,t)}))};return e&&Object.keys(e).forEach((function(t){a(t,e[t])})),{getState:o,setState:a,subscribe:function(e,t){e in i||(i[e]=[]),i[e].push(t);var s=o(e);return t(s,null,o()),function(){i[e]=i[e].filter((function(e){return e!==t}))}},subscribeAll:function(e){return l.push(e),e(null,null,o()),function(){l=l.filter((function(t){return t!==e}))}},unSubscribe:function(e,t){e in i&&(i[e]=i[e].filter((function(e){return e!==t})))}}}},181:function(e,t,i){i.r(t)}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,i),l.exports}i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return function(){var e=s;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,r(s.key),s)}}function a(e,t,i){return(t=r(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e){var i=function(e,i){if("object"!==t(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,i||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"===t(i)?i:String(i)}var c=i(737),h=i(679),u=i(874);i(181);var p=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"callCount",Date.now()),a(this,"countInit",0),a(this,"$selects",[]),a(this,"options",void 0),a(this,"nameMarkTransform",(0,h.toCamelCase)(c.nameMark)),a(this,"dataNameMark",(0,h.createDataAttr)(c.nameMark)),a(this,"isNative",void 0),t||(t="select"),this.options=l(l({},c.simpleSelectionOptions),i),"string"==typeof t?this.init(Array.from(document.querySelectorAll(t))):t instanceof HTMLSelectElement?this.init([t]):t instanceof NodeList?this.init(Array.from(t)):Array.isArray(t)?this.init(t):console.warn("Wrong selector: ",t)}var t,i,s;return t=e,(i=[{key:"detectMobile",value:function(){if(this.options.detectNative)this.isNative=this.options.detectNative();else{for(var e=navigator.userAgent||navigator.vendor||window.opera,t=!1,i=0;i<this.options.nativeOnDevice.length;i++)e.toString().toLowerCase().indexOf(this.options.nativeOnDevice[i].toLowerCase())>0&&this.options.nativeOnDevice[i]&&(t=!0);this.isNative=t}}},{key:"init",value:function(e){var t=this;this.detectMobile(),e.forEach((function(e){t.build(e)}))}},{key:"createMethods",value:function(e){var t=this;return{getNativeSelect:function(){return e.getSelect()},reload:function(){t.rebuild(e)},update:function(){e.updateHTML()},detach:function(){t.detach(e)}}}},{key:"setMethods",value:function(e){e.$select[c.nameSelect]=this.createMethods(e)}},{key:"setMethodsClear",value:function(e){delete e.$select[c.nameSelect]}},{key:"build",value:function(e){if(this.nameMarkTransform in e.dataset)console.warn("This element has already been initialized",e);else{this.countInit+=1;var t="".concat(this.callCount,"-").concat(this.countInit);e.setAttribute(this.dataNameMark,t);var i=new u.SimpleSelectItem(e,this.options,{id:t,isNative:this.isNative});this.$selects.push(i),this.setMethods(i)}}},{key:"detach",value:function(e){e.detachItem(),e.$select.removeAttribute(this.dataNameMark),this.setMethodsClear(e),this.$selects=this.$selects.filter((function(t){return t!==e}))}},{key:"rebuild",value:function(e){var t=e.$select;this.detach(e),this.build(t)}},{key:"getSelects",value:function(){return this.$selects}},{key:"getSelectFirst",value:function(){return this.createMethods(this.$selects[0])}},{key:"getSelectById",value:function(e){var t=this.$selects.filter((function(t){return t.id===e}))[0];return t?this.createMethods(t):null}}])&&o(t.prototype,i),s&&o(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.default=p}(),s=s.default}()}));