(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SimpleSelect", [], factory);
	else if(typeof exports === 'object')
		exports["SimpleSelect"] = factory();
	else
		root["SimpleSelect"] = factory();
})(typeof self === 'undefined' ? this : self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 737:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initClass = exports.nameMark = exports.nameSelect = exports.simpleSelectionOptions = exports.simpleSelectLocale = void 0;
exports.simpleSelectLocale = {
  noSearch: 'No matches for',
  searchText: 'Search',
  title: 'Select',
  selected: 'Selected:',
  all: 'all',
  ok: 'Ok',
  cansel: 'Cansel',
  selectAll: 'Select all',
  resetAll: 'Reset all'
};
exports.simpleSelectionOptions = {
  isSearch: true,
  isSearchInDropdown: false,
  countShowSelected: 2,
  isConfirmInMulti: false,
  isConfirmInMultiOkClickOutside: false,
  nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
  locale: exports.simpleSelectLocale,
  sepChars: ',',
  isUp: false,
  floatWidth: 767,
  isCloneClass: true,
  selectAll: false,
  selectAllAfterClose: true,
  resetAll: false,
  resetAllAfterClose: true
};
exports.nameSelect = 'SimSel';
var markPrefix = 'simple-select-';
exports.nameMark = "".concat(markPrefix, "init");
exports.initClass = 'SimpleSel';

/***/ }),

/***/ 874:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SimpleSelectItem = void 0;
var simpleSelection_utils_1 = __webpack_require__(679);
var simpleSelectItemDOM_1 = __webpack_require__(844);
var SimpleSelectItem = /*#__PURE__*/function (_simpleSelectItemDOM_) {
  _inherits(SimpleSelectItem, _simpleSelectItemDOM_);
  var _super = _createSuper(SimpleSelectItem);
  function SimpleSelectItem(select, options, localOptions) {
    var _thisSuper, _this;
    _classCallCheck(this, SimpleSelectItem);
    _this = _super.call(this, select, options, localOptions);
    _defineProperty(_assertThisInitialized(_this), "closeOutsideHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "closeEscHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "changeListener", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "searchHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "clickToggleOpen", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "triggerSetup", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "confirmOkHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "confirmNoHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "selectAllHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "resetAllHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "closeHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "handleResize", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "mql", null);
    _defineProperty(_assertThisInitialized(_this), "countOpen", 0);
    _defineProperty(_assertThisInitialized(_this), "multiDebounceTime", 0);
    _defineProperty(_assertThisInitialized(_this), "timeoutDebounceId", null);
    if (!select) {
      throw Error('Select is required');
    }
    _this.init();
    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(SimpleSelectItem.prototype)), "initDom", _thisSuper).call(_thisSuper);
    _this.initAfterDom();
    return _this;
  }
  _createClass(SimpleSelectItem, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.changeListener = this.changeListenerInit.bind(this);
      this.$select.addEventListener('change', this.changeListener);
      this.searchHandler = this.searchHandlerInit.bind(this);
      this.closeOutsideHandler = this.closeOutsideHandlerInit.bind(this);
      this.closeEscHandler = this.closeEscHandlerInit.bind(this);
      this.clickToggleOpen = this.clickToggleOpenInit.bind(this);
      this.triggerSetup = this.triggerSetupInit.bind(this);
      this.confirmOkHandler = this.confirmOkHandlerInit.bind(this);
      this.confirmNoHandler = this.confirmNoHandlerInit.bind(this);
      this.selectAllHandler = this.selectAllHandlerInit.bind(this);
      this.resetAllHandler = this.resetAllHandlerInit.bind(this);
      this.closeHandler = this.closeHandlerInit.bind(this);
      this.handleResize = this.handleResizeInit.bind(this);
      if (this.options.callbackInitialization) {
        this.options.callbackInitialization(this);
      }
      if (!this.isNative && this.options.floatWidth) {
        this.mql = window.matchMedia("(max-width: ".concat(this.options.floatWidth, "px)"));
        if (this.mql) {
          // @ts-ignore
          this.mql.onchange = this.handleResize;
          this.handleResizeInit(this.mql);
        }
      }
      this.state.subscribe('isOpen', function (val) {
        _this2.toggleOpenHandler();
        if (!val && _this2.options.isConfirmInMulti) {
          _this2.createList();
        }
        if (val) {
          if (_this2.elemInputSearch) {
            _this2.elemInputSearch.value = '';
          }
        }
        // if (!val) {
        //   if (this.options.isConfirmInMulti) {
        //     this.triggerInit();
        //   }
        // }
      });

      this.state.subscribe('filterStr', function (val) {
        _this2.filterList(val);
      });
      if (!this.isNative) {
        this.elemTopBody.addEventListener('click', this.clickToggleOpen);
        this.elemTopBody.addEventListener('keyup', this.clickToggleOpen);
      }
    }
  }, {
    key: "handleResizeInit",
    value: function handleResizeInit(e) {
      if (!e) {
        return;
      }
      if (e.matches) {
        this.state.setState('isFloat', true);
      } else {
        this.state.setState('isFloat', false);
      }
    }
  }, {
    key: "initAfterDom",
    value: function initAfterDom() {
      if (this.confirmOk) {
        this.confirmOk.addEventListener('click', this.confirmOkHandler);
      }
      if (this.confirmNo) {
        this.confirmNo.addEventListener('click', this.confirmNoHandler);
      }
      if (this.options.callbackInitialized) {
        this.options.callbackInitialized(this);
      }
      if (this.isMulti && !this.options.isConfirmInMulti) {
        if ((0, simpleSelection_utils_1.toCamelCase)('simple-debounce-time') in this.$select.dataset) {
          this.multiDebounceTime = Number(this.$select.dataset[(0, simpleSelection_utils_1.toCamelCase)('simple-debounce-time')]);
        } else if (this.options.debounceTime || this.options.debounceTime === 0) {
          this.multiDebounceTime = this.options.debounceTime;
        }
      }
      if (this.multiDebounceTime) {
        this.multiDebounceChange = this.debounce(this.multiDebounceChange.bind(this), this.multiDebounceTime);
      }
      if (this.elemSelectAll) {
        this.elemSelectAll.addEventListener('click', this.selectAllHandler);
      }
      if (this.elemResetAll) {
        this.elemResetAll.addEventListener('click', this.resetAllHandler);
      }
      if (this.elemDropDownClose) {
        this.elemDropDownClose.addEventListener('click', this.closeHandler);
      }
    }
  }, {
    key: "debounce",
    value: function debounce(func, delay) {
      var _this3 = this;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (_this3.timeoutDebounceId) {
          clearTimeout(_this3.timeoutDebounceId);
        }
        _this3.timeoutDebounceId = setTimeout(function () {
          func.apply(void 0, args);
          _this3.timeoutDebounceId = null;
        }, delay);
      };
    }
  }, {
    key: "confirmOkHandlerInit",
    value: function confirmOkHandlerInit(e) {
      e.preventDefault();
      this.confirmOkBuild();
    }
  }, {
    key: "confirmOkBuild",
    value: function confirmOkBuild() {
      var options = this.$select.options;
      if (!this.elemListBody) {
        return;
      }
      var liItems = this.elemListBody.querySelectorAll('[data-sel-position]');
      liItems.forEach(function (item) {
        var pos = parseInt(item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-position')], 10);
        if (!pos && pos !== 0) {
          return;
        }
        var option = options[pos];
        if (!option || option.disabled) {
          return;
        }
        option.selected = item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] === 'true';
      });
      this.state.setState('isOpen', false);
      this.triggerInit();
    }
  }, {
    key: "confirmNoHandlerInit",
    value: function confirmNoHandlerInit(e) {
      e.preventDefault();
      this.state.setState('isOpen', false);
    }
  }, {
    key: "closeHandlerInit",
    value: function closeHandlerInit(e) {
      e.preventDefault();
      this.state.setState('isOpen', false);
    }
  }, {
    key: "selectAllHandlerInit",
    value: function selectAllHandlerInit(e) {
      e.preventDefault();
      Array.from(this.$select.options).forEach(function (option) {
        if (option.disabled) {
          return;
        }
        option.selected = true;
      });
      this.createList();
      if (this.options.selectAllAfterClose) {
        this.state.setState('isOpen', false);
      }
      this.triggerInit();
    }
  }, {
    key: "resetAllHandlerInit",
    value: function resetAllHandlerInit(e) {
      e.preventDefault();
      Array.from(this.$select.options).forEach(function (option) {
        if (option.disabled) {
          return;
        }
        option.selected = false;
      });
      this.createList();
      if (this.options.selectAllAfterClose) {
        this.state.setState('isOpen', false);
      }
      this.triggerInit();
    }
    // click for LI
  }, {
    key: "triggerSetupInit",
    value: function triggerSetupInit(e) {
      if (e.button !== 0) return;
      var target = e.target;
      var targetLi = target.closest('li');
      if (targetLi) {
        this.changeClickItem(targetLi);
      }
    }
  }, {
    key: "changeClickItem",
    value: function changeClickItem(item) {
      if (item) {
        var pos = Number(item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-position')]) || 0;
        var option = this.$select.options[pos];
        if (option && !option.disabled) {
          if (this.isMulti) {
            if (this.options.isConfirmInMulti || this.isFloatWidth) {
              if (item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] === 'true') {
                item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] = 'false';
                item.classList.remove('SimpleSel__list_item--checked');
              } else {
                item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] = 'true';
                item.classList.add('SimpleSel__list_item--checked');
              }
            } else {
              option.selected = !option.selected;
              this.createList();
              this.multiDebounceChange();
            }
          } else {
            option.selected = !option.selected;
            this.createList();
            this.state.setState('isOpen', false);
            this.triggerInit();
          }
        }
      }
    }
  }, {
    key: "multiDebounceChange",
    value: function multiDebounceChange() {
      // can be overridden for multiselect - debounce
      this.triggerInit();
    }
  }, {
    key: "triggerInit",
    value: function triggerInit() {
      (0, simpleSelection_utils_1.triggerInputEvent)(this.$select);
    }
  }, {
    key: "clickToggleOpenInit",
    value: function clickToggleOpenInit(e) {
      e.preventDefault();
      if (this.isDisabled) {
        return;
      }
      if (e.type === 'click') {
        this.state.setState('isOpen', !this.state.getState('isOpen'));
        return;
      }
      if (e instanceof KeyboardEvent) {
        if (e.key === 'Enter') {
          this.state.setState('isOpen', !this.state.getState('isOpen'));
        }
      }
    }
  }, {
    key: "closeOutsideHandlerInit",
    value: function closeOutsideHandlerInit(e) {
      var target = e.target;
      if (!target) {
        return;
      }
      if (!this.elemWrap.contains(target)) {
        if (this.options.isConfirmInMulti && this.options.isConfirmInMultiOkClickOutside) {
          this.confirmOkBuild();
        }
        this.state.setState('isOpen', false);
      }
    }
  }, {
    key: "closeEscHandlerInit",
    value: function closeEscHandlerInit(e) {
      if (e.code === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        this.state.setState('isOpen', false);
      }
      if (e.code === 'Tab') {
        e.preventDefault();
        e.stopPropagation();
        if (!this.elemWrap.contains(e.target)) {
          this.state.setState('isOpen', false);
        }
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        this.keyBoardChangeChecked(e.key === 'ArrowDown');
      }
      if (e.key === 'Enter') {
        var target = e.target;
        if (target && (0, simpleSelection_utils_1.toCamelCase)('sel-opt-item') in target.dataset) {
          e.preventDefault();
          e.stopPropagation();
          this.changeClickItem(target);
        }
      }
    }
  }, {
    key: "keyBoardChangeChecked",
    value: function keyBoardChangeChecked(isDown) {
      // eslint-disable-next-line max-len
      var liItems = this.elemListBody.querySelectorAll('[data-sel-position]:not([data-sel-opt-disabled="true"])');
      if (!liItems.length) {
        return;
      }
      var indCurrent = 0;
      var firstOption;
      liItems.forEach(function (el, i) {
        if (document.activeElement === el) {
          indCurrent = i;
          firstOption = el;
        }
        el.removeAttribute('tabindex');
      });
      if (!firstOption) {
        firstOption = isDown ? liItems[0] : liItems[liItems.length - 1];
      } else if (isDown) {
        firstOption = liItems[indCurrent + 1] || liItems[0];
      } else {
        firstOption = liItems[indCurrent - 1] || liItems[liItems.length - 1];
      }
      firstOption.tabIndex = 0;
      firstOption.focus();
    }
  }, {
    key: "searchHandlerInit",
    value: function searchHandlerInit(e) {
      var target = e.target;
      if (!target) {
        return;
      }
      var value = target.value;
      this.state.setState('filterStr', value);
    }
  }, {
    key: "toggleOpenHandler",
    value: function toggleOpenHandler() {
      var isOpen = this.state.getState('isOpen');
      if (isOpen) {
        this.elemWrap.classList.add('SimpleSel--open');
        document.addEventListener('click', this.closeOutsideHandler);
        document.addEventListener('keyup', this.closeEscHandler);
        if (this.elemInputSearch) {
          this.elemInputSearch.focus();
          // this.elemInputSearch.tabIndex = 0;
        }

        if (this.options.callbackOpen) {
          this.options.callbackOpen(this);
        }
        this.countOpen++;
      } else {
        this.state.setState('filterList', '');
        this.elemWrap.classList.remove('SimpleSel--open');
        document.removeEventListener('click', this.closeOutsideHandler);
        document.removeEventListener('keyup', this.closeEscHandler);
        if (this.timeoutDebounceId) {
          clearTimeout(this.timeoutDebounceId);
          this.triggerInit();
        }
        if (this.options.callbackClose && this.countOpen > 0) {
          this.options.callbackClose(this);
        }
      }
      // this.bodyElement.classList.toggle('SimpleSel--open', this.state.getState('isOpen'))
    }
  }, {
    key: "changeListenerInit",
    value: function changeListenerInit(e) {
      if (this.options.callbackChangeSelect) {
        this.options.callbackChangeSelect(e, this);
      }
      this.createList(true);
      // alert(e.target.value);
    }
  }, {
    key: "getSelect",
    value: function getSelect() {
      return this.$select;
    }
  }, {
    key: "handlerChangeChecked",
    value: function handlerChangeChecked() {
      if (this.elemListBody) {
        this.elemListBody.addEventListener('mouseup', this.triggerSetup);
        // this.elemListBody.addEventListener('mouseup', (e) => {})
      }
    }
  }, {
    key: "createList",
    value: function createList() {
      var isCompare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var newItems = [];
      var group = this.$select.querySelectorAll('optgroup');
      if (group && group.length) {
        group.forEach(function (item, ind) {
          newItems.push((0, simpleSelection_utils_1.getCreateListItem)(item, (ind + 1).toString(), true));
        });
      } else {
        newItems.push((0, simpleSelection_utils_1.getCreateListItem)(this.$select, '1', false));
      }
      if (isCompare) {
        var old = this.state.getState('items');
        if (!(0, simpleSelection_utils_1.compareObj)(old, newItems)) {
          this.state.setState('items', newItems);
        }
      } else {
        this.state.setState('items', newItems);
      }
    }
  }, {
    key: "filterList",
    value: function filterList(val) {
      val = val.toLowerCase();
      var items = (0, simpleSelection_utils_1.cloneObj)(this.state.getState('items'));
      items.forEach(function (group) {
        var isShowGroup = false;
        group.items.forEach(function (item) {
          if (item.title.toLowerCase().includes(val)) {
            isShowGroup = true;
            item.isShowFilter = true;
          } else {
            item.isShowFilter = false;
          }
        });
        group.isShowFilter = isShowGroup;
      });
      this.state.setState('items', items);
    }
  }, {
    key: "inputSearchHandler",
    value: function inputSearchHandler() {
      if (!this.elemInputSearch) {
        return;
      }
      this.elemInputSearch.addEventListener('input', this.searchHandler);
    }
  }, {
    key: "detachItem",
    value: function detachItem() {
      if (this.options.callbackDestroyInit) {
        this.options.callbackDestroyInit(this);
      }
      var parentElement = this.elemWrap.parentNode;
      this.$select.removeEventListener('change', this.changeListener);
      if (this.elemInputSearch) {
        this.elemInputSearch.removeEventListener('input', this.searchHandler);
      }
      if (this.confirmOk) {
        this.confirmOk.removeEventListener('click', this.confirmOkHandler);
      }
      if (this.confirmNo) {
        this.confirmNo.removeEventListener('click', this.confirmNoHandler);
      }
      parentElement.replaceChild(this.$select, this.elemWrap);
      this.$select.classList.remove(this.classSelectInit);
      if (this.elemSelectAll) {
        this.elemSelectAll.removeEventListener('click', this.selectAllHandler);
      }
      if (this.elemResetAll) {
        this.elemResetAll.removeEventListener('click', this.resetAllHandler);
      }
      if (this.options.callbackDestroy) {
        this.options.callbackDestroy(this);
      }
      if (this.elemDropDownClose) {
        this.elemDropDownClose.removeEventListener('click', this.closeHandler);
      }
      if (this.mql) {
        this.mql.onchange = null;
        this.mql = null;
      }
    }
  }]);
  return SimpleSelectItem;
}(simpleSelectItemDOM_1.SimpleSelectItemDOM);
exports.SimpleSelectItem = SimpleSelectItem;

/***/ }),

/***/ 844:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SimpleSelectItemDOM = void 0;
var simpleSelection_utils_1 = __webpack_require__(679);
var store_1 = __webpack_require__(972);
var simpleSelection_const_1 = __webpack_require__(737);
var SimpleSelectItemDOM = /*#__PURE__*/function () {
  function SimpleSelectItemDOM(select, options, localOptions) {
    _classCallCheck(this, SimpleSelectItemDOM);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "$select", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "titlePlaceholder", void 0);
    _defineProperty(this, "isDisabled", false);
    _defineProperty(this, "isMulti", void 0);
    _defineProperty(this, "state", (0, store_1.store)({
      items: [],
      isOpen: false,
      filterStr: '',
      isFloat: false
    }));
    // classSelectInit= 'SimpleSel__select_init'
    _defineProperty(this, "classSelectInit", (0, simpleSelection_utils_1.getClass)('select_init'));
    _defineProperty(this, "isNative", void 0);
    _defineProperty(this, "elemWrap", document.createElement('div'));
    // all
    _defineProperty(this, "elemTop", document.createElement('div'));
    // all
    _defineProperty(this, "elemTopBody", document.createElement('div'));
    // all
    _defineProperty(this, "elemDropDown", null);
    // not native
    _defineProperty(this, "elemDropDownClose", null);
    // not native
    _defineProperty(this, "elemListBody", null);
    // not native
    _defineProperty(this, "elemInputSearch", null);
    // not native
    _defineProperty(this, "elemTitle", void 0);
    // not native
    _defineProperty(this, "confirmOk", null);
    // not native
    _defineProperty(this, "confirmNo", null);
    // not native
    _defineProperty(this, "elemControl", null);
    // not native
    _defineProperty(this, "elemSelectAll", null);
    // not native
    _defineProperty(this, "elemResetAll", null);
    // not native
    _defineProperty(this, "cloneClasses", '');
    _defineProperty(this, "isShowCheckbox", false);
    _defineProperty(this, "bodyLiHTMLBeforeFromSelect", null);
    _defineProperty(this, "bodyLiHTMLAfterFromSelect", null);
    _defineProperty(this, "isFloatWidth", false);
    _defineProperty(this, "bodyOpenClass", "".concat(simpleSelection_const_1.initClass, "--body_open"));
    var id = localOptions.id,
      isNative = localOptions.isNative;
    this.$select = select;
    this.isMulti = select.multiple;
    this.id = id;
    this.isNative = isNative;
    this.options = (0, simpleSelection_utils_1.cloneObj)(options);
    if (this.options.isCloneClass) {
      this.cloneClasses = this.$select.className;
    }
    if (options.callbackInitialization) {
      this.options.callbackInitialization = options.callbackInitialization;
    }
    if (options.callbackInitialized) {
      this.options.callbackInitialized = options.callbackInitialized;
    }
    if (options.callbackOpen) {
      this.options.callbackOpen = options.callbackOpen;
    }
    if (options.callbackClose) {
      this.options.callbackClose = options.callbackClose;
    }
    if (options.callbackDestroyInit) {
      this.options.callbackDestroyInit = options.callbackDestroyInit;
    }
    if (options.callbackDestroy) {
      this.options.callbackDestroy = options.callbackDestroy;
    }
    if (options.callbackChangeSelect) {
      this.options.callbackChangeSelect = options.callbackChangeSelect;
    }
    if (options.changeBodyLi) {
      this.options.changeBodyLi = options.changeBodyLi;
    }
    var dataConfirm = this.$select.dataset[(0, simpleSelection_utils_1.toCamelCase)('simple-is-confirm')];
    if (this.isMulti && dataConfirm) {
      this.options.isConfirmInMulti = dataConfirm === '1' || dataConfirm === 'true';
    }
    this.optionOverride();
    this.isDisabled = this.$select.disabled;
    // this.initDom()
  }
  _createClass(SimpleSelectItemDOM, [{
    key: "optionOverride",
    value: function optionOverride() {
      var dataPlaceholder = (0, simpleSelection_utils_1.toCamelCase)('simple-placeholder');
      if (this.$select.dataset[dataPlaceholder]) {
        this.titlePlaceholder = this.$select.dataset[dataPlaceholder] || '';
      } else {
        this.titlePlaceholder = this.options.locale.title;
      }
      var dataResetAll = (0, simpleSelection_utils_1.toCamelCase)('simple-reset-all');
      if (dataResetAll in this.$select.dataset) {
        var resReset = this.$select.dataset[dataResetAll];
        this.options.resetAll = !(resReset === 'false' || resReset === '0');
      }
      // const dataSelect = toCamelCase('simple-select-all');
      // if (dataSelect in this.$select.dataset) {
      //   const resSelect  = this.$select.dataset[dataSelect];
      //   this.options.selectAll = !(resSelect === 'false' || resSelect === '0');
      // }
      if (this.$select.hasAttribute('data-simple-select-all')) {
        var resSelect = this.$select.getAttribute('data-simple-select-all');
        this.options.selectAll = (0, simpleSelection_utils_1.ifTrueDataAttr)(resSelect);
      }
      var isShowCheckboxLocal = this.$select.dataset[(0, simpleSelection_utils_1.toCamelCase)('simple-show-checkbox')];
      if (this.isMulti) {
        this.isShowCheckbox = !(isShowCheckboxLocal && !(0, simpleSelection_utils_1.ifTrueDataAttr)(isShowCheckboxLocal));
      } else if (isShowCheckboxLocal === 'true') {
        this.isShowCheckbox = true;
      }
      var itemHtmlBefore = this.$select.dataset[(0, simpleSelection_utils_1.toCamelCase)('simple-item-html-before')];
      if (itemHtmlBefore) {
        this.bodyLiHTMLBeforeFromSelect = itemHtmlBefore;
      }
      var itemHtmlAfter = this.$select.dataset[(0, simpleSelection_utils_1.toCamelCase)('simple-item-html-after')];
      if (itemHtmlAfter) {
        this.bodyLiHTMLAfterFromSelect = itemHtmlAfter;
      }
      if (this.$select.hasAttribute('data-simple-up')) {
        this.options.isUp = (0, simpleSelection_utils_1.ifTrueDataAttr)(this.$select.getAttribute('data-simple-up'));
      }
    }
  }, {
    key: "initDom",
    value: function initDom() {
      var _this = this;
      this.createList(false);
      this.createHTML();
      this.state.subscribe('items', function (_val) {
        _this.createListHTML();
        _this.createTitleHTML();
      });
      this.state.subscribe('isOpen', function (val) {
        _this.createListHTML();
        _this.createTitleHTML();
        _this.toggleTabIndex(val);
      });
      this.state.subscribe('isFloat', function (val) {
        _this.isFloatWidth = val;
        var cls = (0, simpleSelection_utils_1.getClass)('float', true);
        _this.elemWrap.classList.toggle(cls, val);
      });
    }
  }, {
    key: "toggleTabIndex",
    value: function toggleTabIndex(isOpen) {
      var tabIndex = isOpen ? 0 : -1;
      if (this.state.getState('isFloat')) {
        document.body.classList.toggle(this.bodyOpenClass, isOpen);
      }
      if (this.elemInputSearch) {
        this.elemInputSearch.tabIndex = tabIndex;
      }
      if (this.elemResetAll) {
        this.elemResetAll.tabIndex = tabIndex;
      }
      if (this.elemSelectAll) {
        this.elemSelectAll.tabIndex = tabIndex;
      }
      if (this.confirmOk) {
        this.confirmOk.tabIndex = tabIndex;
      }
      if (this.confirmNo) {
        this.confirmNo.tabIndex = tabIndex;
      }
    }
  }, {
    key: "updateHTML",
    value: function updateHTML() {
      this.createList(true);
    }
  }, {
    key: "createHTML",
    value: function createHTML() {
      this.$select.classList.add(this.classSelectInit);
      this.$select.tabIndex = -1;
      this.elemTopBody.className = (0, simpleSelection_utils_1.getClass)('top_body');
      this.elemTopBody.tabIndex = this.isDisabled ? -1 : 0;
      this.createIcon();
      this.elemTop.append(this.elemTopBody);
      var resClassesWrap = simpleSelection_const_1.initClass;
      if (this.options.isCloneClass) {
        resClassesWrap += " ".concat(this.cloneClasses);
      }
      if (this.$select.hasAttribute('data-simple-add-classes')) {
        resClassesWrap += " ".concat(this.$select.getAttribute('data-simple-add-classes'));
      }
      if (this.isDisabled) {
        resClassesWrap += " ".concat((0, simpleSelection_utils_1.getClass)('disabled', true));
      }
      if (this.options.isUp) {
        resClassesWrap += " ".concat((0, simpleSelection_utils_1.getClass)('up', true));
      }
      resClassesWrap += " ".concat(this.isMulti ? (0, simpleSelection_utils_1.getClass)('multi', true) : (0, simpleSelection_utils_1.getClass)('single', true));
      this.elemWrap.className = resClassesWrap;
      this.elemWrap.dataset.countAll = this.$select.options.length.toString();
      this.elemTop.className = (0, simpleSelection_utils_1.getClass)('top');
      // creating an initial structure
      var parentElement = this.$select.parentNode;
      if (parentElement) {
        parentElement.replaceChild(this.elemWrap, this.$select);
        this.elemWrap.appendChild(this.$select);
      }
      this.elemWrap.append(this.elemTop);
      if (this.isNative) {
        this.$select.classList.add((0, simpleSelection_utils_1.getClass)('native', true, this.classSelectInit));
        this.elemWrap.classList.add((0, simpleSelection_utils_1.getClass)('native', true));
      } else {
        this.createDropDown();
        this.createControlHTML();
        this.createInputHTML();
      }
      this.createTitleHTML();
    }
  }, {
    key: "createControlHTML",
    value: function createControlHTML() {
      if (!this.elemDropDown || !this.isMulti) {
        return;
      }
      if (!this.options.selectAll && !this.options.resetAll) {
        return;
      }
      this.elemControl = document.createElement('div');
      this.elemControl.classList.add((0, simpleSelection_utils_1.getClass)('controls'));
      this.elemDropDown.prepend(this.elemControl);
      var classControl = (0, simpleSelection_utils_1.getClass)('control');
      if (this.options.selectAll) {
        this.elemSelectAll = (0, simpleSelection_utils_1.createButton)();
        this.elemSelectAll.className = "".concat(classControl, " ").concat((0, simpleSelection_utils_1.getClass)('select_all', true, classControl));
        this.elemSelectAll.innerHTML = "<span class=\"".concat((0, simpleSelection_utils_1.getClass)('select_all__icon'), "\"></span> ").concat(this.options.locale.selectAll);
        this.elemControl.append(this.elemSelectAll);
      }
      if (this.options.resetAll) {
        this.elemResetAll = (0, simpleSelection_utils_1.createButton)();
        this.elemResetAll.className = "".concat(classControl, " ").concat((0, simpleSelection_utils_1.getClass)('reset_all', true, classControl));
        this.elemResetAll.innerHTML = "<span class=\"".concat((0, simpleSelection_utils_1.getClass)('reset_all__icon'), "\"></span> ").concat(this.options.locale.resetAll);
        this.elemControl.append(this.elemResetAll);
      }
    }
  }, {
    key: "createIcon",
    value: function createIcon() {
      var icon = document.createElement('span');
      icon.className = (0, simpleSelection_utils_1.getClass)('icon');
      this.elemTopBody.append(icon);
    }
  }, {
    key: "createDropDown",
    value: function createDropDown() {
      if (this.isNative) {
        return;
      }
      this.elemDropDown = document.createElement('div');
      this.elemDropDown.className = (0, simpleSelection_utils_1.getClass)('body');
      this.elemListBody = document.createElement('ul');
      this.elemListBody.className = (0, simpleSelection_utils_1.getClass)('list');
      this.elemWrap.append(this.elemDropDown);
      this.elemDropDown.append(this.elemListBody);
      this.elemDropDownClose = (0, simpleSelection_utils_1.createButton)();
      this.elemDropDownClose.classList.add((0, simpleSelection_utils_1.getClass)('close'));
      this.elemDropDown.append(this.elemDropDownClose);
      if (this.isMulti) {
        this.createIsConfirmInMultiHTML();
      }
      this.handlerChangeChecked();
    }
  }, {
    key: "createIsConfirmInMultiHTML",
    value: function createIsConfirmInMultiHTML() {
      var _this$elemDropDown;
      var confirm = document.createElement('div');
      var classesItem = (0, simpleSelection_utils_1.getClass)('bottom_control');
      this.confirmOk = (0, simpleSelection_utils_1.createButton)();
      this.confirmNo = (0, simpleSelection_utils_1.createButton)();
      confirm.append(this.confirmOk);
      confirm.append(this.confirmNo);
      this.confirmOk.innerHTML = this.options.locale.ok;
      this.confirmNo.innerHTML = this.options.locale.cansel;
      this.confirmOk.className = "".concat(classesItem, " ").concat((0, simpleSelection_utils_1.getClass)('ok', true, classesItem));
      this.confirmNo.className = "".concat(classesItem, " ").concat((0, simpleSelection_utils_1.getClass)('no', true, classesItem));
      var classes = (0, simpleSelection_utils_1.getClass)('bottom_controls');
      if (!this.options.isConfirmInMulti) {
        classes += " ".concat((0, simpleSelection_utils_1.getClass)('hide', true, classes));
      }
      confirm.className = classes;
      (_this$elemDropDown = this.elemDropDown) === null || _this$elemDropDown === void 0 || _this$elemDropDown.append(confirm);
    }
  }, {
    key: "createTitleHTML",
    value: function createTitleHTML() {
      var _this2 = this;
      if (!this.elemTitle) {
        this.elemTitle = document.createElement('div');
        this.elemTitle.className = (0, simpleSelection_utils_1.getClass)('title');
        this.elemTopBody.prepend(this.elemTitle);
      }
      var itemsChecked = this.getChecked();
      this.elemTop.title = '';
      var isPlaceholder = !itemsChecked.length;
      var title = this.titlePlaceholder;
      if (itemsChecked.length) {
        var attrTitle = '';
        itemsChecked.forEach(function (item, index) {
          if (index !== 0) {
            attrTitle += "".concat(_this2.options.sepChars, "<span class=\"").concat((0, simpleSelection_utils_1.getClass)('sep_space', true), "\">&nbsp;</span>");
          }
          attrTitle += "".concat(item.title);
        });
        this.elemTop.title = attrTitle;
        var maxShow = this.options.countShowSelected;
        var maxShowAttr = Number(this.$select.dataset.simpleCountShowsSelected);
        if (maxShowAttr && maxShowAttr > 0) {
          maxShow = maxShowAttr;
        }
        if (itemsChecked.length > maxShow) {
          title = "".concat(this.options.locale.selected, " ").concat(itemsChecked.length);
          if (this.$select.querySelectorAll('option').length === itemsChecked.length) {
            title += " (".concat(this.options.locale.all, ")");
          }
        } else if (attrTitle) {
          title = attrTitle;
        }
      }
      this.elemTitle.innerHTML = title;
      this.elemTitle.classList.toggle('SimpleSel__title--placeholder', isPlaceholder);
      this.elemTitle.classList.toggle('SimpleSel__title--fill', !isPlaceholder);
      this.elemWrap.classList.toggle((0, simpleSelection_utils_1.getClass)('fill', true), !isPlaceholder);
    }
  }, {
    key: "createListHTML",
    value: function createListHTML() {
      var _this3 = this;
      if (!this.elemListBody) {
        return;
      }
      var resBodyList = '';
      var countShowItem = 0;
      var countCheckedItems = 0;
      var countCheckedFullItems = 0;
      // this.items.forEach(group => {
      this.state.getState('items').forEach(function (group) {
        if (!group.isGroup) {
          var _this3$createLi = _this3.createLi(group),
            result = _this3$createLi.result,
            countShow = _this3$createLi.countShow,
            countChecked = _this3$createLi.countChecked,
            countCheckedFull = _this3$createLi.countCheckedFull;
          resBodyList += result;
          countShowItem += countShow;
          countCheckedItems += countChecked;
          countCheckedFullItems += countCheckedFull;
        } else {
          var _this3$createLi2 = _this3.createLi(group),
            _result = _this3$createLi2.result,
            _countShow = _this3$createLi2.countShow,
            _countChecked = _this3$createLi2.countChecked,
            _countCheckedFull = _this3$createLi2.countCheckedFull;
          resBodyList += "<div class=\"".concat((0, simpleSelection_utils_1.getClass)('group_items'), "\">");
          resBodyList += _result;
          resBodyList += '</div>';
          countCheckedItems += _countChecked;
          countShowItem += _countShow;
          countCheckedFullItems += _countCheckedFull;
        }
      });
      var isSearch = this.state.getState('filterStr');
      if (isSearch && isSearch.length && countShowItem === 0) {
        resBodyList = "<div class=\"".concat((0, simpleSelection_utils_1.getClass)('no_match'), "\">");
        resBodyList = "".concat(this.options.locale.noSearch, " \"").concat(isSearch, "\"");
        resBodyList += '</div>';
      }
      this.elemWrap.dataset.countChecked = countCheckedItems.toString();
      this.elemWrap.dataset.countCheckedFull = countCheckedFullItems.toString();
      if (this.isMulti) {
        this.elemWrap.dataset.checkAllMulti = this.$select.options.length === countCheckedItems ? 'yes' : 'no';
      }
      this.elemListBody.innerHTML = resBodyList;
    }
  }, {
    key: "createInputHTML",
    value: function createInputHTML() {
      var isSearch = this.options.isSearch;
      var isSearchInDropdown = this.options.isSearchInDropdown;
      if ('simpleSelectSearch' in this.$select.dataset) {
        isSearch = this.$select.dataset.simpleSelectSearch !== 'false';
      }
      if ('simpleSelectSearchDropdown' in this.$select.dataset) {
        isSearchInDropdown = this.$select.dataset.simpleSelectSearchDropdown !== 'false';
      }
      if (!isSearch && !isSearchInDropdown) {
        return;
      }
      this.elemInputSearch = document.createElement('input');
      this.elemInputSearch.type = 'text';
      this.elemInputSearch.tabIndex = -1;
      this.elemInputSearch.autocomplete = 'off';
      this.elemInputSearch.ariaAutoComplete = 'none';
      this.elemInputSearch.inputMode = 'off';
      this.elemInputSearch.placeholder = this.options.locale.searchText;
      this.elemInputSearch.name = "".concat(simpleSelection_const_1.initClass, "_name_").concat(this.id);
      var className = (0, simpleSelection_utils_1.getClass)('search');
      if (isSearchInDropdown) {
        if (this.elemDropDown) {
          this.elemInputSearch.className = "".concat(className, " ").concat((0, simpleSelection_utils_1.getClass)('dropdown', true, className));
          this.elemDropDown.prepend(this.elemInputSearch);
        }
      } else {
        this.elemInputSearch.className = "".concat(className, " ").concat((0, simpleSelection_utils_1.getClass)('top', true, className));
        this.elemTop.append(this.elemInputSearch);
      }
      this.inputSearchHandler();
    }
  }, {
    key: "getChecked",
    value: function getChecked() {
      var items = this.state.getState('items');
      var res = [];
      items.forEach(function (group) {
        res = [].concat(_toConsumableArray(res), _toConsumableArray(group.items.filter(function (i) {
          return i.checked;
        })));
      });
      return res;
    }
  }, {
    key: "createLi",
    value: function createLi(data) {
      var _this4 = this;
      var result = '';
      var countShow = 0;
      var countChecked = 0;
      var countCheckedFull = 0;
      if (!data.isShowFilter) {
        return {
          result: result,
          countShow: countShow,
          countChecked: countChecked,
          countCheckedFull: countCheckedFull
        };
      }
      if (data.isGroup) {
        result += "<label class=\"".concat((0, simpleSelection_utils_1.getClass)('group_title'), "\">").concat(data.titleGroup, "</label>");
        result += "<ul class=\"".concat((0, simpleSelection_utils_1.getClass)('group'), "\">");
      }
      data.items.forEach(function (option) {
        if (!option.isShowFilter) {
          return;
        }
        countShow++;
        var classLiInit = (0, simpleSelection_utils_1.getClass)('list_item');
        var classLi = classLiInit;
        if (option.checked) {
          countChecked++;
          classLi += " ".concat((0, simpleSelection_utils_1.getClass)('checked', true, classLiInit));
          if (option.value) {
            countCheckedFull++;
          }
        }
        if (option.disabled) {
          classLi += " ".concat((0, simpleSelection_utils_1.getClass)('disabled', true, classLiInit));
        }
        if (!option.value) {
          classLi += " ".concat((0, simpleSelection_utils_1.getClass)('not_value', true, classLiInit));
        }
        var dataAttr = "data-sel-group-id=\"".concat(data.idGroup, "\"");
        dataAttr += " data-sel-position=\"".concat(option.position, "\"");
        dataAttr += " data-sel-id=\"".concat(option.id, "\"");
        if (option.value) {
          dataAttr += " data-sel-value=\"".concat(option.value, "\"");
        }
        dataAttr += ' data-sel-opt-item';
        dataAttr += " data-sel-opt-checked=\"".concat(option.checked, "\"");
        dataAttr += " data-sel-opt-disabled=\"".concat(option.disabled, "\"");
        result += "<li  class=\"".concat(classLi, "\" ").concat(dataAttr, ">");
        var createLiBodyRes = _this4.createLiBody(option, _this4.$select.options[option.position]);
        result += typeof createLiBodyRes === 'string' ? createLiBodyRes : createLiBodyRes.outerHTML;
        result += '</li>';
      });
      if (data.isGroup) {
        result += '</ul>';
      }
      return {
        result: result,
        countShow: countShow,
        countChecked: countChecked,
        countCheckedFull: countCheckedFull
      };
    }
  }, {
    key: "createLiBody",
    value: function createLiBody(option, optionNative) {
      var item = document.createElement('div');
      item.className = (0, simpleSelection_utils_1.getClass)('list_item_body');
      var res = '';
      if (this.isShowCheckbox) {
        res = "<span class=\"".concat((0, simpleSelection_utils_1.getClass)('list_item_icon'), "\"></span>");
      }
      if (this.bodyLiHTMLBeforeFromSelect) {
        res += this.bodyLiHTMLBeforeFromSelect;
      }
      if (optionNative.hasAttribute('data-simple-html-before')) {
        res += optionNative.getAttribute('data-simple-html-before');
      }
      res += "".concat(option.title);
      if (this.bodyLiHTMLAfterFromSelect) {
        res += this.bodyLiHTMLAfterFromSelect;
      }
      if (optionNative.hasAttribute('data-simple-html-after')) {
        res += optionNative.getAttribute('data-simple-html-after');
      }
      item.innerHTML = res;
      if (this.options.changeBodyLi) {
        return this.options.changeBodyLi(item, optionNative);
      }
      return item;
    }
  }, {
    key: "handlerChangeChecked",
    value: function handlerChangeChecked() {
      console.error('This method need redefine');
    }
    // only desktop
  }, {
    key: "createList",
    value: function createList(_isCompare) {
      console.error('This method need redefine');
    }
    // only desktop
  }, {
    key: "inputSearchHandler",
    value: function inputSearchHandler() {
      console.error('This method need redefine');
    }
  }]);
  return SimpleSelectItemDOM;
}();
exports.SimpleSelectItemDOM = SimpleSelectItemDOM;

/***/ }),

/***/ 679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createButton = exports.cloneObj = exports.compareObj = exports.getClass = exports.getCreateListItem = exports.triggerInputEvent = exports.ifTrueDataAttr = exports.createDataAttr = exports.toCamelCase = void 0;
var simpleSelection_const_1 = __webpack_require__(737);
var toCamelCase = function toCamelCase(input) {
  return input.replace(/-([a-z])/g, function (_, letter) {
    return letter.toUpperCase();
  });
};
exports.toCamelCase = toCamelCase;
var createDataAttr = function createDataAttr(name) {
  return "data-".concat(name);
};
exports.createDataAttr = createDataAttr;
var ifTrueDataAttr = function ifTrueDataAttr(attr) {
  if (!attr) {
    return false;
  }
  return attr === 'true' || attr === '1';
};
exports.ifTrueDataAttr = ifTrueDataAttr;
function triggerInputEvent(element) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'change';
  var event = new Event(type, {
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
}
exports.triggerInputEvent = triggerInputEvent;
var getCreateListItem = function getCreateListItem(item, idGroup, isGroup) {
  var options = item.querySelectorAll('option');
  var items = [];
  options.forEach(function (option, ind) {
    items.push({
      id: (ind + 1).toString(),
      position: option.index,
      title: option.innerHTML,
      // value: option.value,
      value: option.getAttribute('value'),
      checked: option.selected,
      disabled: option.disabled,
      isShowFilter: true
    });
  });
  var newItem = {
    isGroup: isGroup,
    idGroup: idGroup,
    items: items,
    isShowFilter: true
  };
  if (item instanceof HTMLOptGroupElement) {
    newItem.titleGroup = item.label || '';
    newItem.isDisabledGroup = item.disabled || false;
  }
  return newItem;
};
exports.getCreateListItem = getCreateListItem;
var getClass = function getClass(cls) {
  var mod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var classInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : simpleSelection_const_1.initClass;
  var sep = mod ? '--' : '__';
  return "".concat(classInit).concat(sep).concat(cls);
};
exports.getClass = getClass;
var compareObj = function compareObj(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
exports.compareObj = compareObj;
var cloneObj = function cloneObj(obj) {
  return JSON.parse(JSON.stringify(obj));
};
exports.cloneObj = cloneObj;
var createButton = function createButton() {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.tabIndex = -1;
  return btn;
};
exports.createButton = createButton;

/***/ }),

/***/ 972:
/***/ (function(__unused_webpack_module, exports) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.store = void 0;
function store(obj) {
  var stateData = {};
  var subscribers = {}; /** подписка на конкретное свойство */
  var subscribersAll = []; /** подписка на все свойства */
  var getState = function getState(k) {
    if (!k) {
      return stateData;
    }
    if (!(k in stateData)) {
      return null;
    }
    return stateData[k];
  };
  var setState = function setState(k, val) {
    var prevState = _objectSpread({}, stateData);
    var prev = stateData[k] || stateData[k] == 0 ? stateData[k] : null;
    stateData[k] = val;
    if (k in subscribers) {
      subscribers[k].forEach(function (cb) {
        return cb(val, prev, stateData);
      });
    }
    subscribersAll.forEach(function (cb) {
      return cb(k, prevState, stateData);
    });
  };
  if (obj) {
    Object.keys(obj).forEach(function (k) {
      // @ts-ignore
      setState(k, obj[k]);
    });
  }
  return {
    getState: getState,
    setState: setState,
    subscribe: function subscribe(k, cb) {
      if (!(k in subscribers)) {
        subscribers[k] = [];
      }
      subscribers[k].push(cb);
      var cur = getState(k);
      cb(cur, null, getState());
      return function () {
        subscribers[k] = subscribers[k].filter(function (i) {
          return i !== cb;
        });
      };
    },
    subscribeAll: function subscribeAll(cb) {
      subscribersAll.push(cb);
      cb(null, null, getState());
      return function () {
        subscribersAll = subscribersAll.filter(function (i) {
          return i !== cb;
        });
      };
    },
    unSubscribe: function unSubscribe(k, cb) {
      if (k in subscribers) {
        subscribers[k] = subscribers[k].filter(function (i) {
          return i !== cb;
        });
      }
    }
  };
}
exports.store = store;

/***/ }),

/***/ 181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
var __webpack_unused_export__;


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
__webpack_unused_export__ = ({
  value: true
});
var simpleSelection_const_1 = __webpack_require__(737);
var simpleSelection_utils_1 = __webpack_require__(679);
var simpleSelectItem_1 = __webpack_require__(874);
__webpack_require__(181);
var SimpleSelect = /*#__PURE__*/function () {
  function SimpleSelect(selector, options) {
    _classCallCheck(this, SimpleSelect);
    _defineProperty(this, "callCount", Date.now());
    _defineProperty(this, "countInit", 0);
    // $selects: HTMLSelectElement[] = [];
    _defineProperty(this, "$selects", []);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "nameMarkTransform", (0, simpleSelection_utils_1.toCamelCase)(simpleSelection_const_1.nameMark));
    _defineProperty(this, "dataNameMark", (0, simpleSelection_utils_1.createDataAttr)(simpleSelection_const_1.nameMark));
    _defineProperty(this, "isNative", void 0);
    if (!selector) {
      selector = 'select';
    }
    // this.$selects = Array.from(document.querySelectorAll(selector));
    this.options = _objectSpread(_objectSpread({}, simpleSelection_const_1.simpleSelectionOptions), options);
    if (typeof selector === 'string') {
      this.init(Array.from(document.querySelectorAll(selector)));
    } else if (selector instanceof HTMLSelectElement) {
      this.init([selector]);
    } else if (selector instanceof NodeList) {
      this.init(Array.from(selector));
    } else if (Array.isArray(selector)) {
      this.init(selector);
    } else {
      console.warn('Wrong selector: ', selector);
    }
  }
  _createClass(SimpleSelect, [{
    key: "detectMobile",
    value: function detectMobile() {
      if (this.options.detectNative) {
        this.isNative = this.options.detectNative();
        return;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      var ua = navigator.userAgent || navigator.vendor || window.opera;
      var res = false;
      // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
      for (var i = 0; i < this.options.nativeOnDevice.length; i++) {
        if (ua.toString().toLowerCase().indexOf(this.options.nativeOnDevice[i].toLowerCase()) > 0) {
          if (this.options.nativeOnDevice[i]) {
            res = true;
          }
        }
      }
      this.isNative = res;
    }
  }, {
    key: "init",
    value: function init(selects) {
      var _this = this;
      this.detectMobile();
      selects.forEach(function ($select) {
        _this.build($select);
      });
    }
  }, {
    key: "createMethods",
    value: function createMethods(select) {
      var self = this;
      return {
        getInstance: function getInstance() {
          return select.getSelect();
        },
        reload: function reload() {
          self.rebuild(select);
        },
        update: function update() {
          select.updateHTML();
        },
        detach: function detach() {
          self.detach(select);
        }
      };
    }
  }, {
    key: "setMethods",
    value: function setMethods(select) {
      // @ts-ignore
      select.$select[simpleSelection_const_1.nameSelect] = this.createMethods(select);
    }
  }, {
    key: "setMethodsClear",
    value: function setMethodsClear(select) {
      // @ts-ignore
      delete select.$select[simpleSelection_const_1.nameSelect];
    }
  }, {
    key: "build",
    value: function build(select) {
      var isProcessed = (this.nameMarkTransform in select.dataset);
      if (isProcessed) {
        console.warn('This element has already been initialized', select);
        return;
      }
      this.countInit += 1;
      var id = "".concat(this.callCount, "-").concat(this.countInit);
      select.setAttribute(this.dataNameMark, id);
      // this.$selects.push(select);
      var newSelect = new simpleSelectItem_1.SimpleSelectItem(select, this.options, {
        id: id,
        isNative: this.isNative
      });
      this.$selects.push(newSelect);
      this.setMethods(newSelect);
    }
  }, {
    key: "detach",
    value: function detach(itemSelect) {
      itemSelect.detachItem();
      itemSelect.$select.removeAttribute(this.dataNameMark);
      this.setMethodsClear(itemSelect);
      this.$selects = this.$selects.filter(function (item) {
        return item !== itemSelect;
      });
    }
  }, {
    key: "rebuild",
    value: function rebuild(selectsItems) {
      var select = selectsItems.$select;
      this.detach(selectsItems);
      this.build(select);
    }
  }, {
    key: "getSelects",
    value: function getSelects() {
      return this.$selects;
    }
  }, {
    key: "getSelectFirst",
    value: function getSelectFirst() {
      // return this.$selects[0];
      return this.createMethods(this.$selects[0]);
    }
  }, {
    key: "getSelectById",
    value: function getSelectById(id) {
      var search = this.$selects.filter(function (item) {
        return item.id === id;
      })[0];
      if (!search) {
        return null;
      }
      return this.createMethods(search);
    }
  }]);
  return SimpleSelect;
}();
exports["default"] = SimpleSelect;
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});