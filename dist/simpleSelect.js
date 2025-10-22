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

/***/ "./src/const/simpleSelection.const.ts":
/*!********************************************!*\
  !*** ./src/const/simpleSelection.const.ts ***!
  \********************************************/
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
  cancel: 'Cancel',
  selectAll: 'Select all',
  resetAll: 'Reset all'
};
exports.simpleSelectionOptions = {
  isSearch: false,
  searchTypeInput: 'search',
  isSearchInDropdown: false,
  countShowSelected: 3,
  isOnlyPlaceholder: false,
  historyMaxSize: 0,
  isRemoveTop: false,
  isConfirmInMulti: false,
  isConfirmInMultiOkClickOutside: false,
  nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
  locale: exports.simpleSelectLocale,
  sepChars: ',',
  isUp: false,
  isAlwaysOpen: false,
  isAlwaysOpenShowDisabledTabindex: false,
  floatWidth: 767,
  isCloneClass: true,
  selectAll: false,
  selectAllAfterClose: true,
  resetAll: false,
  resetAllAfterClose: true,
  isScrollToCheckedFirst: true,
  isScrollToCheckedAlways: false
};
exports.nameSelect = 'SimpSelect';
var markPrefix = 'simple-select-';
exports.nameMark = "".concat(markPrefix, "init");
exports.initClass = 'SimpleSel';

/***/ }),

/***/ "./src/simpleSelectItem.ts":
/*!*********************************!*\
  !*** ./src/simpleSelectItem.ts ***!
  \*********************************/
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
var simpleSelection_utils_1 = __webpack_require__(/*! ./utils/simpleSelection.utils */ "./src/utils/simpleSelection.utils.ts");
var simpleSelectItemDOM_1 = __webpack_require__(/*! ./simpleSelectItemDOM */ "./src/simpleSelectItemDOM.ts");
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
    _defineProperty(_assertThisInitialized(_this), "selectKeyDownListener", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "searchHandler", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "handleResize", void 0);
    // not native
    _defineProperty(_assertThisInitialized(_this), "mql", null);
    _defineProperty(_assertThisInitialized(_this), "isInitialized", false);
    _defineProperty(_assertThisInitialized(_this), "isFirstOpen", false);
    _defineProperty(_assertThisInitialized(_this), "countOpen", 0);
    _defineProperty(_assertThisInitialized(_this), "timeoutDebounceId", null);
    _defineProperty(_assertThisInitialized(_this), "history", []);
    if (!select) {
      throw Error('Select is required');
    }
    _this.init();
    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(SimpleSelectItem.prototype)), "initDom", _thisSuper).call(_thisSuper);
    _this.initAfterDom();
    setTimeout(function () {
      _this.isInitialized = true;
      (0, simpleSelection_utils_1.triggerCustomEvent)(_this.$select, 'initialized', {
        item: _assertThisInitialized(_this)
      });
    }, 10);
    return _this;
  }
  _createClass(SimpleSelectItem, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.changeListener = this.changeListenerInit.bind(this);
      this.selectKeyDownListener = this.selectKeyDownInit.bind(this);
      this.$select.addEventListener('change', this.changeListener);
      this.$select.addEventListener('keydown', this.selectKeyDownListener);
      /**
       * TODO
       * onkeydawn by native select
       *    this.isNative ; - Enter - убрать открывющееся меню
       */
      this.searchHandler = this.searchHandlerInit.bind(this);
      this.closeOutsideHandler = this.closeOutsideHandlerInit.bind(this);
      this.closeEscHandler = this.closeEscHandlerInit.bind(this);
      this.handleResize = this.handleResizeInit.bind(this);
      if (this.options.callbackInitialization) {
        this.options.callbackInitialization(this);
      }
      if (!this.isNative && this.options.floatWidth) {
        this.mql = window.matchMedia("screen and (max-width: ".concat(this.options.floatWidth, "px)"));
        if (this.mql) {
          // @ts-ignore
          this.mql.onchange = this.handleResize;
          this.handleResizeInit(this.mql);
        }
      }
      this.state.subscribe('isOpen', function (val) {
        /** stroll to first checked by open */
        if (val && _this2.elemListBody) {
          var _this2$options = _this2.options,
            isScrollToCheckedFirst = _this2$options.isScrollToCheckedFirst,
            isScrollToCheckedAlways = _this2$options.isScrollToCheckedAlways;
          if (!_this2.isFirstOpen && isScrollToCheckedFirst && !isScrollToCheckedAlways) {
            _this2.scrollToFirstChecked();
          }
          if (isScrollToCheckedAlways) {
            _this2.scrollToFirstChecked();
          }
        }
        if (val && !_this2.isFirstOpen) {
          _this2.isFirstOpen = true;
        }
        if (_this2.isInitialized) {
          (0, simpleSelection_utils_1.triggerCustomEvent)(_this2.$select, "".concat(val ? 'open' : 'close', ".before"), {
            item: _this2
          });
        }
        _this2.toggleOpenHandler();
        if (!val && _this2.options.isConfirmInMulti) {
          _this2.createList();
        }
        if (!val) {
          if (_this2.elemInputSearch) {
            _this2.elemInputSearch.value = '';
            _this2.state.setState('filterStr', '');
          }
        }
        if (_this2.isInitialized) {
          (0, simpleSelection_utils_1.triggerCustomEvent)(_this2.$select, "".concat(val ? 'open' : 'close', ".after"), {
            item: _this2
          });
        }
      });
      // this.state.subscribe('filterStr', (val: string) => {
      //   this.filterList(val);
      // });
      if (!this.isNative && !this.options.isAlwaysOpen) {
        this.elemTopBody.onclick = this.clickToggleOpen.bind(this);
        this.elemTopBody.onkeyup = this.clickToggleOpen.bind(this);
      }
    }
  }, {
    key: "scrollToFirstChecked",
    value: function scrollToFirstChecked() {
      if (this.elemListBody && this.elemDropDownWrap) {
        var firstChecked = this.elemListBody.querySelector('[data-sel-opt-checked="true"]');
        if (firstChecked) {
          this.elemDropDownWrap.scrollTop = firstChecked.offsetTop;
        }
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
      var _this3 = this;
      if (this.confirmOk) {
        this.confirmOk.onclick = this.confirmOkHandler.bind(this);
      }
      if (this.confirmNo) {
        this.confirmNo.onclick = this.confirmNoHandler.bind(this);
      }
      if (this.options.callbackInitialized) {
        this.options.callbackInitialized(this);
      }
      if (this.multiDebounceTime) {
        this.multiDebounceChange = this.debounce(this.multiDebounceChange.bind(this), this.multiDebounceTime);
      }
      if (this.elemSelectAll) {
        this.elemSelectAll.onclick = this.selectAllHandler.bind(this);
      }
      if (this.elemResetAll) {
        this.elemResetAll.onclick = this.resetAllHandler.bind(this);
      }
      if (this.elemDropDownClose) {
        this.elemDropDownClose.onclick = this.closeHandler.bind(this);
      }
      if (this.elemListBody) {
        this.elemListBody.addEventListener('keyup', function (e) {
          if (e.key === 'Enter') {
            var target = e.target;
            if (target && (0, simpleSelection_utils_1.toCamelCase)('sel-opt-item') in target.dataset) {
              e.preventDefault();
              e.stopPropagation();
              _this3.changeClickItem(target);
              // set active (focus) element
              var oldId = target.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-position')];
              var newEl = _this3.elemListBody.querySelector("[data-sel-position=\"".concat(oldId, "\"]"));
              if (newEl) {
                newEl.focus();
              }
            }
          }
        });
      }
    }
  }, {
    key: "debounce",
    value: function debounce(func, delay) {
      var _this4 = this;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (_this4.timeoutDebounceId) {
          clearTimeout(_this4.timeoutDebounceId);
        }
        _this4.timeoutDebounceId = setTimeout(function () {
          func.apply(void 0, args);
          _this4.timeoutDebounceId = null;
        }, delay);
      };
    }
  }, {
    key: "confirmOkHandler",
    value: function confirmOkHandler(e) {
      e.preventDefault();
      this.confirmOkBuild();
    }
  }, {
    key: "confirmOkBuild",
    value: function confirmOkBuild() {
      var _this5 = this;
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
        var disabled = option.disabled || item.getAttribute('data-sel-opt-disabled') === 'true';
        if (!option || disabled) {
          return;
        }
        var isSelected = item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] === 'true';
        if (isSelected !== option.selected) {
          _this5.addHistory(option, isSelected);
        }
        option.selected = isSelected;
      });
      this.state.setState('isOpen', false);
      this.triggerInit();
      (0, simpleSelection_utils_1.triggerCustomEvent)(this.$select, 'multiConfirm', {
        item: this
      });
    }
  }, {
    key: "confirmNoHandler",
    value: function confirmNoHandler(e) {
      e.preventDefault();
      this.state.setState('isOpen', false);
      (0, simpleSelection_utils_1.triggerCustomEvent)(this.$select, 'multiCancel', {
        item: this
      });
    }
  }, {
    key: "closeHandler",
    value: function closeHandler(e) {
      e.preventDefault();
      this.state.setState('isOpen', false);
    }
  }, {
    key: "selectAllHandler",
    value: function selectAllHandler(e) {
      e.preventDefault();
      Array.from(this.$select.options).forEach(function (option) {
        var _option$closest;
        var disabled = option.disabled;
        if ((_option$closest = option.closest('optgroup')) !== null && _option$closest !== void 0 && _option$closest.disabled) {
          disabled = true;
        }
        if (disabled) {
          return;
        }
        option.selected = true;
      });
      this.createList();
      if (this.options.selectAllAfterClose) {
        this.state.setState('isOpen', false);
      }
      this.triggerInit();
      (0, simpleSelection_utils_1.triggerCustomEvent)(this.$select, 'selectAll', {
        item: this
      });
    }
  }, {
    key: "resetAllHandler",
    value: function resetAllHandler(e) {
      e.preventDefault();
      Array.from(this.$select.options).forEach(function (option) {
        var _option$closest2;
        var disabled = option.disabled;
        if ((_option$closest2 = option.closest('optgroup')) !== null && _option$closest2 !== void 0 && _option$closest2.disabled) {
          disabled = true;
        }
        if (disabled) {
          return;
        }
        option.selected = false;
      });
      this.createList();
      if (this.options.selectAllAfterClose) {
        this.state.setState('isOpen', false);
      }
      this.triggerInit();
      (0, simpleSelection_utils_1.triggerCustomEvent)(this.$select, 'resetAll', {
        item: this
      });
    }
    // click for LI
  }, {
    key: "triggerSetup",
    value: function triggerSetup(e) {
      if (e.button !== 0) return;
      var target = e.target;
      var targetLi = target.closest('li');
      if (targetLi) {
        this.changeClickItem(targetLi);
      }
    }
  }, {
    key: "changeClickItemDom",
    value: function changeClickItemDom(item) {
      var wrapGroup = item.closest('[data-simple-select-gruop]');
      if (item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] === 'true') {
        item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] = 'false';
        item.classList.remove('SimpleSel__list_item--checked');
        if (wrapGroup) {
          var cur = Number(wrapGroup.getAttribute('data-count-checked')) || 1;
          wrapGroup.setAttribute('data-count-checked', (cur - 1).toString());
        }
      } else {
        item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-opt-checked')] = 'true';
        item.classList.add('SimpleSel__list_item--checked');
        if (wrapGroup) {
          var _cur = Number(wrapGroup.getAttribute('data-count-checked')) || 0;
          wrapGroup.setAttribute('data-count-checked', (_cur + 1).toString());
        }
      }
    }
  }, {
    key: "addHistory",
    value: function addHistory(option, isCheck) {
      if (this.options.historyMaxSize > 0) {
        this.history.push({
          value: option.value,
          text: option.innerHTML,
          selected: isCheck,
          indexOption: option.index
        });
        if (this.history.length > this.options.historyMaxSize) {
          this.history = this.history.slice(this.history.length - this.options.historyMaxSize);
        }
        (0, simpleSelection_utils_1.triggerCustomEvent)(this.$select, 'updateHistory', {
          item: this,
          history: this.history
        });
      }
    }
  }, {
    key: "changeClickItem",
    value: function changeClickItem(item) {
      if (item) {
        var pos = Number(item.dataset[(0, simpleSelection_utils_1.toCamelCase)('sel-position')]) || 0;
        var option = this.$select.options[pos];
        var disabled = option.disabled || item.getAttribute('data-sel-opt-disabled') === 'true';
        if (option && !disabled) {
          if (this.isMulti) {
            if (this.options.isConfirmInMulti || this.isFloatWidth) {
              this.changeClickItemDom(item);
            } else {
              var nextSelected = !option.selected;
              option.selected = nextSelected;
              this.addHistory(option, nextSelected);
              this.changeClickItemDom(item);
              this.createList();
              this.multiDebounceChangeAnimation(true);
              this.multiDebounceChange();
            }
          } else {
            // option.selected = !option.selected;
            option.selected = true;
            this.addHistory(option, true);
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
    key: "multiDebounceChangeAnimation",
    value: function multiDebounceChangeAnimation(isStart) {
      if (!this.isDebounceStatusBar || !this.elemDebounceProgressBar) {
        return;
      }
      // reset
      this.elemDebounceProgressBar.classList.remove('this--animating');
      this.elemDebounceProgressBar.style.setProperty('--duration', '0ms');
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.elemDebounceProgressBar.offsetWidth; // принудительная перерисовка (force reflow)
      if (!isStart) {
        return;
      }
      // start
      this.elemDebounceProgressBar.style.setProperty('--duration', "".concat(this.multiDebounceTime, "ms"));
      this.elemDebounceProgressBar.classList.add('this--animating');
      // this.elemDebounceProgressBar.style.transitionDuration = '0ms';
      // this.elemDebounceProgressBar.style.width = '0%';
      // if (!isStart) {
      //   return;
      // }
      // requestAnimationFrame(() => {
      //   this.elemDebounceProgressBar!.style.transitionDuration = `${this.multiDebounceTime}ms`;
      //   this.elemDebounceProgressBar!.style.width = '100%';
      // });
    }
  }, {
    key: "triggerInit",
    value: function triggerInit() {
      this.multiDebounceChangeAnimation(false);
      (0, simpleSelection_utils_1.triggerInputEvent)(this.$select);
    }
  }, {
    key: "clickToggleOpen",
    value: function clickToggleOpen(e) {
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
      // if (e.key === 'Enter') {
      //   const target = e.target as HTMLLIElement;
      //   if (target && toCamelCase('sel-opt-item') in target.dataset) {
      //     e.preventDefault();
      //     e.stopPropagation();
      //     this.changeClickItem(target);
      //   }
      // }
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
    key: "toggleOpen",
    value: function toggleOpen() {
      var isOpen = this.state.getState('isOpen');
      this.state.setState('isOpen', !isOpen);
    }
  }, {
    key: "toggleOpenHandler",
    value: function toggleOpenHandler() {
      var _this6 = this;
      var isOpen = this.state.getState('isOpen');
      if (isOpen) {
        this.elemWrap.classList.add('SimpleSel--open');
        document.addEventListener('click', this.closeOutsideHandler);
        document.addEventListener('keyup', this.closeEscHandler);
        if (this.elemInputSearch) {
          setTimeout(function () {
            _this6.elemInputSearch.focus();
          }, 50);
        }
        if (this.options.callbackOpen) {
          this.options.callbackOpen(this);
        }
        this.countOpen++;
        if (this.elemDropDown) {
          setTimeout(function () {
            _this6.elemDropDown.scrollTop = 0;
          }, 10);
        }
      } else {
        this.state.setState('filterList', '');
        this.elemWrap.classList.remove('SimpleSel--open');
        document.removeEventListener('click', this.closeOutsideHandler);
        document.removeEventListener('keyup', this.closeEscHandler);
        if (this.timeoutDebounceId) {
          clearTimeout(this.timeoutDebounceId);
          this.timeoutDebounceId = null;
          this.multiDebounceChangeAnimation(false);
          this.triggerInit();
        }
        if (this.options.callbackClose && this.countOpen > 0) {
          this.options.callbackClose(this);
        }
      }
    }
  }, {
    key: "changeListenerInit",
    value: function changeListenerInit(e) {
      if (this.options.callbackChangeSelect) {
        this.options.callbackChangeSelect(e, this);
      }
      this.createList(true);
    }
  }, {
    key: "selectKeyDownInit",
    value: function selectKeyDownInit(e) {
      if (this.isNative) {
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Блокируем открытие списка
        this.toggleOpen();
      }
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
        this.elemListBody.onmouseup = this.triggerSetup.bind(this);
      }
    }
  }, {
    key: "createList",
    value: function createList() {
      var isCompare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var newItems = [];
      var group = this.$select.querySelectorAll('optgroup');
      if (group && group.length) {
        var groupAndOptions = this.$select.querySelectorAll(':scope > *');
        groupAndOptions.forEach(function (item, ind) {
          var isGroup = item instanceof HTMLOptGroupElement;
          newItems.push((0, simpleSelection_utils_1.getCreateListItem)(item, (ind + 1).toString(), isGroup));
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
    // private filterList(val: string) {
    //   val = val.toLowerCase();
    //   const items:IOptionItems[] = cloneObj(this.state.getState('items'));
    //
    //   items.forEach((group) => {
    //     let isShowGroup = false;
    //     group.items.forEach((item) => {
    //       if (item.title.toLowerCase().indexOf(val) >= 0) {
    //         isShowGroup = true;
    //         item.isShowFilter = true;
    //       } else {
    //         item.isShowFilter = false;
    //       }
    //     });
    //     group.isShowFilter = isShowGroup;
    //   });
    //   this.state.setState('items', items);
    // }
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
        this.confirmOk.onclick = null;
      }
      if (this.confirmNo) {
        this.confirmNo.onclick = null;
      }
      parentElement.replaceChild(this.$select, this.elemWrap);
      this.$select.classList.remove(this.classSelectInit);
      if (this.elemTopBody) {
        this.elemTopBody.onclick = null;
        this.elemTopBody.onkeyup = null;
      }
      if (this.elemListBody) {
        this.elemListBody.onmouseup = null;
      }
      if (this.elemSelectAll) {
        this.elemSelectAll.onclick = null;
      }
      if (this.elemResetAll) {
        this.elemResetAll.onclick = null;
      }
      if (this.options.callbackDestroy) {
        this.options.callbackDestroy(this);
      }
      if (this.elemDropDownClose) {
        this.elemDropDownClose.onclick = null;
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

/***/ "./src/simpleSelectItemDOM.ts":
/*!************************************!*\
  !*** ./src/simpleSelectItemDOM.ts ***!
  \************************************/
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
var simpleSelection_utils_1 = __webpack_require__(/*! ./utils/simpleSelection.utils */ "./src/utils/simpleSelection.utils.ts");
var store_1 = __webpack_require__(/*! ./utils/store */ "./src/utils/store.ts");
var simpleSelection_const_1 = __webpack_require__(/*! ./const/simpleSelection.const */ "./src/const/simpleSelection.const.ts");
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
    _defineProperty(this, "elemDropDownWrap", null);
    // not native
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
    _defineProperty(this, "confirmWrap", null);
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
    _defineProperty(this, "elemDebounceProgressBar", null);
    // not native
    _defineProperty(this, "cloneClasses", '');
    _defineProperty(this, "isShowCheckbox", false);
    _defineProperty(this, "bodyLiHTMLBeforeFromSelect", null);
    _defineProperty(this, "bodyLiHTMLAfterFromSelect", null);
    _defineProperty(this, "isFloatWidth", false);
    _defineProperty(this, "bodyOpenClass", "".concat(simpleSelection_const_1.initClass, "--body_open"));
    _defineProperty(this, "multiDebounceTime", 0);
    _defineProperty(this, "isDebounceStatusBar", false);
    var id = localOptions.id,
      isNative = localOptions.isNative;
    this.$select = select;
    this.isMulti = select.multiple;
    this.id = id;
    this.isNative = isNative;
    this.options = (0, simpleSelection_utils_1.cloneObj)(options);
    if (this.options.isDebounceStatusBar) {
      this.isDebounceStatusBar = this.options.isDebounceStatusBar;
    }
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
    if (options.formatTitle) {
      this.options.formatTitle = options.formatTitle;
    }
    if (this.isMulti && this.$select.hasAttribute('data-simple-is-confirm')) {
      this.options.isConfirmInMulti = (0, simpleSelection_utils_1.ifTrueDataAttr)(this.$select.getAttribute('data-simple-is-confirm'));
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
      if (this.$select.hasAttribute('data-simple-debounce-status-bar')) {
        this.isDebounceStatusBar = (0, simpleSelection_utils_1.ifTrueDataAttr)(this.$select.getAttribute('data-simple-debounce-status-bar'));
      }
      if (this.$select.hasAttribute('data-simple-reset-all')) {
        this.options.resetAll = (0, simpleSelection_utils_1.ifTrueDataAttr)(this.$select.getAttribute('data-simple-reset-all'));
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
      if (this.$select.hasAttribute('data-simple-is-only-placeholder')) {
        this.options.isOnlyPlaceholder = (0, simpleSelection_utils_1.ifTrueDataAttr)(this.$select.getAttribute('data-simple-is-only-placeholder'));
      }
      if (this.$select.hasAttribute('data-simple-remove-top')) {
        this.options.isRemoveTop = (0, simpleSelection_utils_1.ifTrueDataAttr)(this.$select.getAttribute('data-simple-remove-top'));
      }
      if (this.$select.hasAttribute('data-simple-float-none')) {
        this.isFloatWidth = false;
        this.options.floatWidth = 0;
      }
      if (this.$select.hasAttribute('data-simple-float-width')) {
        var newWidth = Number(this.$select.dataset[(0, simpleSelection_utils_1.toCamelCase)('simple-float-width')]);
        if (newWidth) {
          this.options.floatWidth = newWidth;
        }
      }
      if (this.$select.hasAttribute('data-simple-always-open')) {
        this.options.isAlwaysOpen = (0, simpleSelection_utils_1.ifTrueDataAttr)(this.$select.getAttribute('data-simple-always-open'));
        this.isNative = false;
        this.isFloatWidth = false;
        this.options.floatWidth = 0;
      }
      // set debounce time
      if (this.isMulti && !this.options.isConfirmInMulti) {
        if ((0, simpleSelection_utils_1.toCamelCase)('simple-debounce-time') in this.$select.dataset) {
          this.multiDebounceTime = Number(this.$select.dataset[(0, simpleSelection_utils_1.toCamelCase)('simple-debounce-time')]);
        } else if (this.options.debounceTime || this.options.debounceTime === 0) {
          this.multiDebounceTime = this.options.debounceTime;
        }
      }
    }
  }, {
    key: "initDom",
    value: function initDom() {
      var _this = this;
      this.createList(false);
      this.createHTML();
      this.state.subscribe('filterStr', function (_val) {
        _this.createListHTML(true);
      });
      this.state.subscribe('items', function (_val) {
        _this.createListHTML(true);
        _this.createTitleHTML();
      });
      this.state.subscribe('isOpen', function (val) {
        _this.createListHTML(false);
        _this.createTitleHTML();
        _this.toggleTabIndex(val);
      });
      this.state.subscribe('isFloat', function (val) {
        _this.isFloatWidth = val;
        var cls = (0, simpleSelection_utils_1.getClass)('float', true);
        if (val) {
          _this.elemWrap.classList.add(cls);
          if (!document.body.classList.contains(_this.bodyOpenClass) && _this.state.getState('isOpen')) {
            document.body.classList.add(_this.bodyOpenClass);
          }
        } else {
          _this.elemWrap.classList.remove(cls);
          if (document.body.classList.contains(_this.bodyOpenClass)) {
            document.body.classList.remove(_this.bodyOpenClass);
          }
        }
      });
    }
  }, {
    key: "toggleTabIndex",
    value: function toggleTabIndex(isOpen) {
      var tabIndex = isOpen || this.options.isAlwaysOpen ? 0 : -1;
      if (this.state.getState('isFloat')) {
        if (isOpen) {
          document.body.classList.add(this.bodyOpenClass);
        } else {
          document.body.classList.remove(this.bodyOpenClass);
        }
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
      if (!this.options.isRemoveTop) {
        this.elemTop.appendChild(this.elemTopBody);
      }
      var resClassesWrap = simpleSelection_const_1.initClass;
      if (this.options.isCloneClass) {
        resClassesWrap += " ".concat(this.cloneClasses);
      }
      if (this.options.addClasses) {
        resClassesWrap += " ".concat(this.options.addClasses);
      }
      if (this.$select.hasAttribute('data-simple-add-classes')) {
        resClassesWrap += " ".concat(this.$select.getAttribute('data-simple-add-classes'));
      }
      if (this.isDisabled) {
        resClassesWrap += " ".concat((0, simpleSelection_utils_1.getClass)('disabled', true));
      }
      if (this.options.isAlwaysOpen) {
        resClassesWrap += " ".concat((0, simpleSelection_utils_1.getClass)('always_open', true));
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
      this.elemWrap.appendChild(this.elemTop);
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
      // this.elemDropDown.prepend(this.elemControl);
      this.elemDropDown.insertBefore(this.elemControl, this.elemDropDown.childNodes[0]);
      var classControl = (0, simpleSelection_utils_1.getClass)('control');
      if (this.options.selectAll) {
        this.elemSelectAll = (0, simpleSelection_utils_1.createButton)();
        this.elemSelectAll.className = "".concat(classControl, " ").concat((0, simpleSelection_utils_1.getClass)('select_all', true, classControl));
        this.elemSelectAll.innerHTML = "<span class=\"".concat((0, simpleSelection_utils_1.getClass)('select_all__icon'), "\"></span> ").concat(this.options.locale.selectAll);
        this.elemControl.appendChild(this.elemSelectAll);
      }
      if (this.options.resetAll) {
        this.elemResetAll = (0, simpleSelection_utils_1.createButton)();
        this.elemResetAll.className = "".concat(classControl, " ").concat((0, simpleSelection_utils_1.getClass)('reset_all', true, classControl));
        this.elemResetAll.innerHTML = "<span class=\"".concat((0, simpleSelection_utils_1.getClass)('reset_all__icon'), "\"></span> ").concat(this.options.locale.resetAll);
        this.elemControl.appendChild(this.elemResetAll);
      }
    }
  }, {
    key: "createIcon",
    value: function createIcon() {
      var icon = document.createElement('span');
      icon.className = (0, simpleSelection_utils_1.getClass)('icon');
      this.elemTopBody.appendChild(icon);
    }
  }, {
    key: "createDropDown",
    value: function createDropDown() {
      if (this.isNative) {
        return;
      }
      this.elemDropDownWrap = document.createElement('div');
      this.elemDropDownWrap.className = (0, simpleSelection_utils_1.getClass)('body');
      if (this.options.isAlwaysOpen) {
        this.elemDropDownWrap.classList.add((0, simpleSelection_utils_1.getClass)('body-always_open', true));
        // resClassesWrap += ` ${getClass('always_open', true)}`;
      }

      this.elemDropDown = document.createElement('div');
      this.elemDropDown.className = (0, simpleSelection_utils_1.getClass)('body_wrap');
      this.elemListBody = document.createElement('ul');
      this.elemListBody.className = (0, simpleSelection_utils_1.getClass)('list');
      /** start MultiSelect debounce animate status */
      if (this.isMulti && this.isDebounceStatusBar && this.multiDebounceTime) {
        this.elemDebounceProgressBar = document.createElement('div');
        this.elemDebounceProgressBar.className = (0, simpleSelection_utils_1.getClass)('debounce_progress_bar');
        this.elemDropDown.append(this.elemDebounceProgressBar);
      }
      /** end MultiSelect debounce animate status */
      this.elemDropDownWrap.append(this.elemDropDown);
      this.elemWrap.appendChild(this.elemDropDownWrap);
      this.elemDropDown.appendChild(this.elemListBody);
      this.elemDropDownClose = (0, simpleSelection_utils_1.createButton)();
      this.elemDropDownClose.classList.add((0, simpleSelection_utils_1.getClass)('close'));
      this.elemDropDown.appendChild(this.elemDropDownClose);
      if (this.isMulti) {
        this.createIsConfirmInMultiHTML();
      }
      // this.elemDropDownWrap.addEventListener('wheel', (e) => {
      //   const delta = e.deltaY;
      //   const { scrollTop, scrollHeight, clientHeight } = this.elemDropDownWrap as HTMLDivElement;
      //
      //   const atBottom = delta > 0 && scrollTop + clientHeight >= scrollHeight;
      //   const atTop = delta < 0 && scrollTop <= 0;
      //
      //   if (atBottom || atTop) {
      //     e.preventDefault();
      //   }
      // }, { passive: false });
      this.handlerChangeChecked();
    }
  }, {
    key: "createIsConfirmInMultiHTML",
    value: function createIsConfirmInMultiHTML() {
      var _this$elemDropDown;
      this.confirmWrap = document.createElement('div');
      var classesItem = (0, simpleSelection_utils_1.getClass)('bottom_control');
      this.confirmOk = (0, simpleSelection_utils_1.createButton)();
      this.confirmNo = (0, simpleSelection_utils_1.createButton)();
      this.confirmWrap.appendChild(this.confirmOk);
      this.confirmWrap.appendChild(this.confirmNo);
      this.confirmOk.innerHTML = this.options.locale.ok;
      this.confirmNo.innerHTML = this.options.locale.cancel;
      this.confirmOk.className = "".concat(classesItem, " ").concat((0, simpleSelection_utils_1.getClass)('ok', true, classesItem));
      this.confirmNo.className = "".concat(classesItem, " ").concat((0, simpleSelection_utils_1.getClass)('no', true, classesItem));
      var classes = (0, simpleSelection_utils_1.getClass)('bottom_controls');
      if (!this.options.isConfirmInMulti) {
        classes += " ".concat((0, simpleSelection_utils_1.getClass)('hide', true, classes));
      }
      this.confirmWrap.className = classes;
      (_this$elemDropDown = this.elemDropDown) === null || _this$elemDropDown === void 0 || _this$elemDropDown.appendChild(this.confirmWrap);
    }
  }, {
    key: "createTitleHTML",
    value: function createTitleHTML() {
      var _this2 = this;
      if (this.options.isRemoveTop) {
        return;
      }
      if (!this.elemTitle) {
        this.elemTitle = document.createElement('div');
        var classesTitle = (0, simpleSelection_utils_1.getClass)('title');
        if (this.options.isOnlyPlaceholder) {
          classesTitle += " ".concat((0, simpleSelection_utils_1.getClass)('only-placeholder', true, classesTitle));
        }
        this.elemTitle.className = classesTitle;
        // this.elemTopBody.prepend(this.elemTitle);
        this.elemTopBody.insertBefore(this.elemTitle, this.elemTopBody.childNodes[0]);
      }
      var itemsChecked = this.getChecked();
      this.elemTop.title = '';
      var isPlaceholder = !itemsChecked.length;
      var title = this.titlePlaceholder;
      if (itemsChecked.length && !this.options.isOnlyPlaceholder) {
        var attrTitle = '';
        var attrTitleText = '';
        itemsChecked.forEach(function (item, index) {
          if (index !== 0) {
            attrTitle += "".concat(_this2.options.sepChars, "<span class=\"").concat((0, simpleSelection_utils_1.getClass)('sep_space', true), "\">&nbsp;</span>");
            attrTitleText += "".concat(_this2.options.sepChars, " ");
          }
          attrTitle += "".concat(item.title);
          attrTitleText += "".concat(item.title);
        });
        if (this.options.formatTitle) {
          attrTitleText = this.options.formatTitle(attrTitleText);
        } else if (this.options.isNeedFormatTitle) {
          attrTitleText = (0, simpleSelection_utils_1.decodeHtmlEntities)(attrTitleText);
        }
        this.elemTop.title = attrTitleText;
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
      if (isPlaceholder) {
        this.elemTitle.classList.add('SimpleSel__title--placeholder');
        this.elemTitle.classList.remove('SimpleSel__title--fill');
        this.elemWrap.classList.remove((0, simpleSelection_utils_1.getClass)('fill', true));
      } else {
        this.elemTitle.classList.remove('SimpleSel__title--placeholder');
        this.elemTitle.classList.add('SimpleSel__title--fill');
        this.elemWrap.classList.add((0, simpleSelection_utils_1.getClass)('fill', true));
      }
    }
  }, {
    key: "filterList",
    value: function filterList() {
      var val = this.state.getState('filterStr');
      var itemsInit = this.state.getState('items');
      if (!val) {
        return itemsInit;
      }
      val = val.toLowerCase();
      var items = (0, simpleSelection_utils_1.cloneObj)(itemsInit);
      items.forEach(function (group) {
        var isShowGroup = false;
        group.items.forEach(function (item) {
          if (item.title.toLowerCase().indexOf(val) >= 0) {
            isShowGroup = true;
            item.isShowFilter = true;
          } else {
            item.isShowFilter = false;
          }
        });
        group.isShowFilter = isShowGroup;
      });
      return items;
    }
  }, {
    key: "createListHTML",
    value: function createListHTML() {
      var _this3 = this;
      var isFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.elemListBody) {
        return;
      }
      var resBodyList = '';
      var countShowItem = 0;
      var countCheckedItems = 0;
      var countCheckedFullItems = 0;
      var items = isFilter ? this.filterList() : this.state.getState('items');
      var dataForCompare = [];
      items.forEach(function (group) {
        group.items.forEach(function (i) {
          dataForCompare.push({
            value: i.value,
            checked: i.checked,
            disabled: i.disabled || !!group.isDisabledGroup,
            isShowFilter: i.isShowFilter
          });
        });
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
          var groupAttrs = "data-count-show=\"".concat(_countShow, "\" ");
          groupAttrs += "data-count-checked=\"".concat(_countChecked, "\" ");
          var classGroup = (0, simpleSelection_utils_1.getClass)('group_items');
          if (group.isDisabledGroup) {
            classGroup += " ".concat((0, simpleSelection_utils_1.getClass)('disabled', true, classGroup));
          }
          resBodyList += "<div class=\"".concat(classGroup, "\" ").concat(groupAttrs, " data-simple-select-gruop>");
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
      resBodyList = (0, simpleSelection_utils_1.removeExtraSpaces)(resBodyList);
      var dataForCompare2 = [];
      this.elemListBody.querySelectorAll('[data-sel-opt-item]').forEach(function (i) {
        dataForCompare2.push({
          value: i.getAttribute('data-sel-value'),
          checked: i.getAttribute('data-sel-opt-checked') === 'true',
          disabled: i.getAttribute('data-sel-opt-disabled') === 'true'
        });
      });
      // if (!compareStringWithClearSpace(this.elemListBody.innerHTML, resBodyList)) {
      if (!(0, simpleSelection_utils_1.compareObj)(dataForCompare, dataForCompare2)) {
        this.elemListBody.innerHTML = resBodyList;
        (0, simpleSelection_utils_1.triggerCustomEvent)(this.$select, 'createListBuild', {
          item: this
        });
      }
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
      this.elemInputSearch.type = this.options.searchTypeInput;
      this.elemInputSearch.tabIndex = -1;
      this.elemInputSearch.autocomplete = 'off';
      this.elemInputSearch.ariaAutoComplete = 'none';
      this.elemInputSearch.inputMode = 'off';
      this.elemInputSearch.placeholder = this.options.locale.searchText;
      this.elemInputSearch.name = "".concat(simpleSelection_const_1.initClass, "_name_").concat(this.id);
      var className = (0, simpleSelection_utils_1.getClass)('search');
      if (isSearchInDropdown) {
        if (this.elemDropDown) {
          var wrapSearch = document.createElement('div');
          wrapSearch.className = (0, simpleSelection_utils_1.getClass)('search_wrap');
          this.elemInputSearch.className = "".concat(className, " ").concat((0, simpleSelection_utils_1.getClass)('dropdown', true, className));
          wrapSearch.appendChild(this.elemInputSearch);
          // this.elemDropDown.prepend(this.elemInputSearch);
          this.elemDropDown.insertBefore(wrapSearch, this.elemDropDown.childNodes[0]);
        }
      } else {
        this.elemInputSearch.className = "".concat(className, " ").concat((0, simpleSelection_utils_1.getClass)('top', true, className));
        this.elemTop.appendChild(this.elemInputSearch);
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
        var classGroup = (0, simpleSelection_utils_1.getClass)('group');
        if (data.isDisabledGroup) {
          classGroup += " ".concat((0, simpleSelection_utils_1.getClass)('disabled', true, classGroup));
        }
        result += "<div class=\"".concat((0, simpleSelection_utils_1.getClass)('group_title'), "\">").concat(data.titleGroup, "</div>");
        result += "<ul class=\"".concat(classGroup, "\">");
      }
      data.items.forEach(function (option) {
        if (!option.isShowFilter) {
          return;
        }
        countShow++;
        var classLiInit = (0, simpleSelection_utils_1.getClass)('list_item');
        var disabledRes = !!(option.disabled || data.isDisabledGroup);
        var classLi = classLiInit;
        if (option.checked) {
          countChecked++;
          classLi += " ".concat((0, simpleSelection_utils_1.getClass)('checked', true, classLiInit));
          if (option.value) {
            countCheckedFull++;
          }
        }
        if (disabledRes) {
          classLi += " ".concat((0, simpleSelection_utils_1.getClass)('disabled', true, classLiInit));
        }
        if (!option.value) {
          classLi += " ".concat((0, simpleSelection_utils_1.getClass)('not_value', true, classLiInit));
        }
        var dataAttr = "data-sel-group-id=\"".concat(data.idGroup, "\"");
        dataAttr += 'data-sel-opt-item';
        dataAttr += " data-sel-position=\"".concat(option.position, "\"");
        dataAttr += " data-sel-id=\"".concat(option.id, "\"");
        if (option.value) {
          dataAttr += " data-sel-value=\"".concat(option.value, "\"");
        }
        dataAttr += " data-sel-opt-checked=\"".concat(option.checked, "\"");
        dataAttr += " data-sel-opt-disabled=\"".concat(disabledRes, "\"");
        if (_this4.options.isAlwaysOpen) {
          if (disabledRes && !_this4.options.isAlwaysOpenShowDisabledTabindex) {
            dataAttr += ' tabindex="-1"';
          } else {
            dataAttr += ' tabindex="0"';
          }
        } else {
          dataAttr += ' tabindex="-1"';
        }
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

/***/ "./src/utils/simpleSelection.utils.ts":
/*!********************************************!*\
  !*** ./src/utils/simpleSelection.utils.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.decodeHtmlEntities = exports.createButton = exports.cloneObj = exports.compareObj = exports.getClass = exports.getCreateListItem = exports.createOptionItems = exports.getCreateItem = exports.triggerInputEvent = exports.triggerCustomEvent = exports.ifTrueDataAttr = exports.createDataAttr = exports.compareStringWithClearSpace = exports.clearSpaceAndEmptyAttr = exports.removeExtraSpaces = exports.toCamelCase = void 0;
var simpleSelection_const_1 = __webpack_require__(/*! ../const/simpleSelection.const */ "./src/const/simpleSelection.const.ts");
var toCamelCase = function toCamelCase(input) {
  return input.replace(/-([a-z])/g, function (_, letter) {
    return letter.toUpperCase();
  });
};
exports.toCamelCase = toCamelCase;
var removeExtraSpaces = function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
};
exports.removeExtraSpaces = removeExtraSpaces;
var clearSpaceAndEmptyAttr = function clearSpaceAndEmptyAttr(str) {
  return str.replace(/\s+|=""/g, '');
};
exports.clearSpaceAndEmptyAttr = clearSpaceAndEmptyAttr;
// eslint-disable-next-line max-len
var compareStringWithClearSpace = function compareStringWithClearSpace(str1, str2) {
  return (0, exports.clearSpaceAndEmptyAttr)(str1) === (0, exports.clearSpaceAndEmptyAttr)(str2);
};
exports.compareStringWithClearSpace = compareStringWithClearSpace;
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
function triggerCustomEvent(element, type, data) {
  var myCustomEvent = new CustomEvent("simpSelect:".concat(type), {
    detail: data
  });
  element.dispatchEvent(myCustomEvent);
}
exports.triggerCustomEvent = triggerCustomEvent;
function triggerInputEvent(element) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'change';
  try {
    var event = new Event(type, {
      bubbles: true,
      cancelable: true
    });
    element.dispatchEvent(event);
  } catch (e) {
    var _event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true
    });
    element.dispatchEvent(_event);
  }
}
exports.triggerInputEvent = triggerInputEvent;
var getCreateItem = function getCreateItem(option, index) {
  return {
    id: (index + 1).toString(),
    position: option.index,
    title: option.innerHTML,
    value: option.getAttribute('value'),
    checked: option.selected,
    disabled: option.disabled,
    isShowFilter: true
  };
};
exports.getCreateItem = getCreateItem;
var createOptionItems = function createOptionItems(isGroup, idGroup, items) {
  var isShowFilter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    isGroup: isGroup,
    idGroup: idGroup,
    items: items,
    isShowFilter: true
  };
};
exports.createOptionItems = createOptionItems;
var getCreateListItem = function getCreateListItem(item, idGroup, isGroup) {
  // Если есть группы, но может быть option вне группы
  if (item instanceof HTMLOptionElement) {
    return (0, exports.createOptionItems)(isGroup, idGroup, [(0, exports.getCreateItem)(item, 1)], true);
  }
  var options = item.querySelectorAll('option');
  var items = [];
  options.forEach(function (option, ind) {
    items.push((0, exports.getCreateItem)(option, ind));
  });
  var newItem = (0, exports.createOptionItems)(isGroup, idGroup, items, true);
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
var decodeHtmlEntities = function decodeHtmlEntities(str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  return div.textContent || div.innerText || '';
};
exports.decodeHtmlEntities = decodeHtmlEntities;

/***/ }),

/***/ "./src/utils/store.ts":
/*!****************************!*\
  !*** ./src/utils/store.ts ***!
  \****************************/
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
  var subscribers = {};
  var subscribersAll = [];
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/*!*****************************!*\
  !*** ./src/simpleSelect.ts ***!
  \*****************************/


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var simpleSelection_const_1 = __webpack_require__(/*! ./const/simpleSelection.const */ "./src/const/simpleSelection.const.ts");
var simpleSelection_utils_1 = __webpack_require__(/*! ./utils/simpleSelection.utils */ "./src/utils/simpleSelection.utils.ts");
var simpleSelectItem_1 = __webpack_require__(/*! ./simpleSelectItem */ "./src/simpleSelectItem.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
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
          return select;
        },
        getHistory: function getHistory() {
          return select.history;
        },
        getHistoryLast: function getHistoryLast() {
          if (select.history.length) {
            return select.history[select.history.length - 1];
          }
          return null;
        },
        getHistoryFirst: function getHistoryFirst() {
          if (select.history.length) {
            return select.history[0];
          }
          return null;
        },
        getNativeSelect: function getNativeSelect() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFFTC9lLGtCQUFlLEdBQUcrZSxZQUFZLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TaW1wbGVTZWxlY3Qvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NpbXBsZVNlbGVjdC8uL3NyYy9jb25zdC9zaW1wbGVTZWxlY3Rpb24uY29uc3QudHMiLCJ3ZWJwYWNrOi8vU2ltcGxlU2VsZWN0Ly4vc3JjL3NpbXBsZVNlbGVjdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vU2ltcGxlU2VsZWN0Ly4vc3JjL3NpbXBsZVNlbGVjdEl0ZW1ET00udHMiLCJ3ZWJwYWNrOi8vU2ltcGxlU2VsZWN0Ly4vc3JjL3V0aWxzL3NpbXBsZVNlbGVjdGlvbi51dGlscy50cyIsIndlYnBhY2s6Ly9TaW1wbGVTZWxlY3QvLi9zcmMvdXRpbHMvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vU2ltcGxlU2VsZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9TaW1wbGVTZWxlY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU2ltcGxlU2VsZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU2ltcGxlU2VsZWN0Ly4vc3JjL3NpbXBsZVNlbGVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlNpbXBsZVNlbGVjdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTaW1wbGVTZWxlY3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU2ltcGxlU2VsZWN0XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnID8gdGhpcyA6IHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0Q2xhc3MgPSBleHBvcnRzLm5hbWVNYXJrID0gZXhwb3J0cy5uYW1lU2VsZWN0ID0gZXhwb3J0cy5zaW1wbGVTZWxlY3Rpb25PcHRpb25zID0gZXhwb3J0cy5zaW1wbGVTZWxlY3RMb2NhbGUgPSB2b2lkIDA7XG5leHBvcnRzLnNpbXBsZVNlbGVjdExvY2FsZSA9IHtcbiAgICBub1NlYXJjaDogJ05vIG1hdGNoZXMgZm9yJyxcbiAgICBzZWFyY2hUZXh0OiAnU2VhcmNoJyxcbiAgICB0aXRsZTogJ1NlbGVjdCcsXG4gICAgc2VsZWN0ZWQ6ICdTZWxlY3RlZDonLFxuICAgIGFsbDogJ2FsbCcsXG4gICAgb2s6ICdPaycsXG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcbiAgICByZXNldEFsbDogJ1Jlc2V0IGFsbCcsXG59O1xuZXhwb3J0cy5zaW1wbGVTZWxlY3Rpb25PcHRpb25zID0ge1xuICAgIGlzU2VhcmNoOiBmYWxzZSxcbiAgICBzZWFyY2hUeXBlSW5wdXQ6ICdzZWFyY2gnLFxuICAgIGlzU2VhcmNoSW5Ecm9wZG93bjogZmFsc2UsXG4gICAgY291bnRTaG93U2VsZWN0ZWQ6IDMsXG4gICAgaXNPbmx5UGxhY2Vob2xkZXI6IGZhbHNlLFxuICAgIGhpc3RvcnlNYXhTaXplOiAwLFxuICAgIGlzUmVtb3ZlVG9wOiBmYWxzZSxcbiAgICBpc0NvbmZpcm1Jbk11bHRpOiBmYWxzZSxcbiAgICBpc0NvbmZpcm1Jbk11bHRpT2tDbGlja091dHNpZGU6IGZhbHNlLFxuICAgIG5hdGl2ZU9uRGV2aWNlOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeScsICdpUGhvbmUnLCAnaVBhZCcsICdpUG9kJywgJ09wZXJhIE1pbmknLCAnSUVNb2JpbGUnLCAnU2lsayddLFxuICAgIGxvY2FsZTogZXhwb3J0cy5zaW1wbGVTZWxlY3RMb2NhbGUsXG4gICAgc2VwQ2hhcnM6ICcsJyxcbiAgICBpc1VwOiBmYWxzZSxcbiAgICBpc0Fsd2F5c09wZW46IGZhbHNlLFxuICAgIGlzQWx3YXlzT3BlblNob3dEaXNhYmxlZFRhYmluZGV4OiBmYWxzZSxcbiAgICBmbG9hdFdpZHRoOiA3NjcsXG4gICAgaXNDbG9uZUNsYXNzOiB0cnVlLFxuICAgIHNlbGVjdEFsbDogZmFsc2UsXG4gICAgc2VsZWN0QWxsQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgICByZXNldEFsbDogZmFsc2UsXG4gICAgcmVzZXRBbGxBZnRlckNsb3NlOiB0cnVlLFxuICAgIGlzU2Nyb2xsVG9DaGVja2VkRmlyc3Q6IHRydWUsXG4gICAgaXNTY3JvbGxUb0NoZWNrZWRBbHdheXM6IGZhbHNlLFxufTtcbmV4cG9ydHMubmFtZVNlbGVjdCA9ICdTaW1wU2VsZWN0JztcbmNvbnN0IG1hcmtQcmVmaXggPSAnc2ltcGxlLXNlbGVjdC0nO1xuZXhwb3J0cy5uYW1lTWFyayA9IGAke21hcmtQcmVmaXh9aW5pdGA7XG5leHBvcnRzLmluaXRDbGFzcyA9ICdTaW1wbGVTZWwnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNpbXBsZVNlbGVjdEl0ZW0gPSB2b2lkIDA7XG5jb25zdCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3NpbXBsZVNlbGVjdGlvbi51dGlsc1wiKTtcbmNvbnN0IHNpbXBsZVNlbGVjdEl0ZW1ET01fMSA9IHJlcXVpcmUoXCIuL3NpbXBsZVNlbGVjdEl0ZW1ET01cIik7XG5jbGFzcyBTaW1wbGVTZWxlY3RJdGVtIGV4dGVuZHMgc2ltcGxlU2VsZWN0SXRlbURPTV8xLlNpbXBsZVNlbGVjdEl0ZW1ET00ge1xuICAgIGNsb3NlT3V0c2lkZUhhbmRsZXI7IC8vIG5vdCBuYXRpdmVcbiAgICBjbG9zZUVzY0hhbmRsZXI7IC8vIG5vdCBuYXRpdmVcbiAgICBjaGFuZ2VMaXN0ZW5lcjsgLy8gbm90IG5hdGl2ZVxuICAgIHNlbGVjdEtleURvd25MaXN0ZW5lcjsgLy8gbm90IG5hdGl2ZVxuICAgIHNlYXJjaEhhbmRsZXI7IC8vIG5vdCBuYXRpdmVcbiAgICBoYW5kbGVSZXNpemU7IC8vIG5vdCBuYXRpdmVcbiAgICBtcWwgPSBudWxsO1xuICAgIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBpc0ZpcnN0T3BlbiA9IGZhbHNlO1xuICAgIGNvdW50T3BlbiA9IDA7XG4gICAgdGltZW91dERlYm91bmNlSWQgPSBudWxsO1xuICAgIGhpc3RvcnkgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3QsIG9wdGlvbnMsIGxvY2FsT3B0aW9ucykge1xuICAgICAgICBzdXBlcihzZWxlY3QsIG9wdGlvbnMsIGxvY2FsT3B0aW9ucyk7XG4gICAgICAgIGlmICghc2VsZWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2VsZWN0IGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHN1cGVyLmluaXREb20oKTtcbiAgICAgICAgdGhpcy5pbml0QWZ0ZXJEb20oKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRyaWdnZXJDdXN0b21FdmVudCkodGhpcy4kc2VsZWN0LCAnaW5pdGlhbGl6ZWQnLCB7XG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXIgPSB0aGlzLmNoYW5nZUxpc3RlbmVySW5pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdEtleURvd25MaXN0ZW5lciA9IHRoaXMuc2VsZWN0S2V5RG93bkluaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy4kc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLiRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0S2V5RG93bkxpc3RlbmVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRPRE9cbiAgICAgICAgICogb25rZXlkYXduIGJ5IG5hdGl2ZSBzZWxlY3RcbiAgICAgICAgICogICAgdGhpcy5pc05hdGl2ZSA7IC0gRW50ZXIgLSDRg9Cx0YDQsNGC0Ywg0L7RgtC60YDRi9Cy0Y7RidC10LXRgdGPINC80LXQvdGOXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlYXJjaEhhbmRsZXIgPSB0aGlzLnNlYXJjaEhhbmRsZXJJbml0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VPdXRzaWRlSGFuZGxlciA9IHRoaXMuY2xvc2VPdXRzaWRlSGFuZGxlckluaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZUVzY0hhbmRsZXIgPSB0aGlzLmNsb3NlRXNjSGFuZGxlckluaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZUluaXQuYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWxsYmFja0luaXRpYWxpemF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2tJbml0aWFsaXphdGlvbih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNOYXRpdmUgJiYgdGhpcy5vcHRpb25zLmZsb2F0V2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGlzLm9wdGlvbnMuZmxvYXRXaWR0aH1weClgKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1xbCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLm1xbC5vbmNoYW5nZSA9IHRoaXMuaGFuZGxlUmVzaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzaXplSW5pdCh0aGlzLm1xbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5zdWJzY3JpYmUoJ2lzT3BlbicsICh2YWwpID0+IHtcbiAgICAgICAgICAgIC8qKiBzdHJvbGwgdG8gZmlyc3QgY2hlY2tlZCBieSBvcGVuICovXG4gICAgICAgICAgICBpZiAodmFsICYmIHRoaXMuZWxlbUxpc3RCb2R5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1Njcm9sbFRvQ2hlY2tlZEZpcnN0LCBpc1Njcm9sbFRvQ2hlY2tlZEFsd2F5cyB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0T3BlbiAmJiBpc1Njcm9sbFRvQ2hlY2tlZEZpcnN0ICYmICFpc1Njcm9sbFRvQ2hlY2tlZEFsd2F5cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvRmlyc3RDaGVja2VkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1Njcm9sbFRvQ2hlY2tlZEFsd2F5cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvRmlyc3RDaGVja2VkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbCAmJiAhdGhpcy5pc0ZpcnN0T3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50cmlnZ2VyQ3VzdG9tRXZlbnQpKHRoaXMuJHNlbGVjdCwgYCR7dmFsID8gJ29wZW4nIDogJ2Nsb3NlJ30uYmVmb3JlYCwge1xuICAgICAgICAgICAgICAgICAgICBpdGVtOiB0aGlzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b2dnbGVPcGVuSGFuZGxlcigpO1xuICAgICAgICAgICAgaWYgKCF2YWwgJiYgdGhpcy5vcHRpb25zLmlzQ29uZmlybUluTXVsdGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbUlucHV0U2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbUlucHV0U2VhcmNoLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2ZpbHRlclN0cicsICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRyaWdnZXJDdXN0b21FdmVudCkodGhpcy4kc2VsZWN0LCBgJHt2YWwgPyAnb3BlbicgOiAnY2xvc2UnfS5hZnRlcmAsIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogdGhpcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc3Vic2NyaWJlKCdmaWx0ZXJTdHInLCAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gICB0aGlzLmZpbHRlckxpc3QodmFsKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIGlmICghdGhpcy5pc05hdGl2ZSAmJiAhdGhpcy5vcHRpb25zLmlzQWx3YXlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5lbGVtVG9wQm9keS5vbmNsaWNrID0gdGhpcy5jbGlja1RvZ2dsZU9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbVRvcEJvZHkub25rZXl1cCA9IHRoaXMuY2xpY2tUb2dnbGVPcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2Nyb2xsVG9GaXJzdENoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1MaXN0Qm9keSAmJiB0aGlzLmVsZW1Ecm9wRG93bldyYXApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2hlY2tlZCA9IHRoaXMuZWxlbUxpc3RCb2R5LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbC1vcHQtY2hlY2tlZD1cInRydWVcIl0nKTtcbiAgICAgICAgICAgIGlmIChmaXJzdENoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1Ecm9wRG93bldyYXAuc2Nyb2xsVG9wID0gZmlyc3RDaGVja2VkLm9mZnNldFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVSZXNpemVJbml0KGUpIHtcbiAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUubWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnaXNGbG9hdCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnaXNGbG9hdCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0QWZ0ZXJEb20oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1Paykge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtT2sub25jbGljayA9IHRoaXMuY29uZmlybU9rSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1Obykge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTm8ub25jbGljayA9IHRoaXMuY29uZmlybU5vSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2FsbGJhY2tJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSW5pdGlhbGl6ZWQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXVsdGlEZWJvdW5jZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMubXVsdGlEZWJvdW5jZUNoYW5nZSA9IHRoaXMuZGVib3VuY2UodGhpcy5tdWx0aURlYm91bmNlQ2hhbmdlLmJpbmQodGhpcyksIHRoaXMubXVsdGlEZWJvdW5jZVRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1TZWxlY3RBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbVNlbGVjdEFsbC5vbmNsaWNrID0gdGhpcy5zZWxlY3RBbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbVJlc2V0QWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1SZXNldEFsbC5vbmNsaWNrID0gdGhpcy5yZXNldEFsbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtRHJvcERvd25DbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtRHJvcERvd25DbG9zZS5vbmNsaWNrID0gdGhpcy5jbG9zZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtTGlzdEJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbUxpc3RCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRvQ2FtZWxDYXNlKSgnc2VsLW9wdC1pdGVtJykgaW4gdGFyZ2V0LmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNsaWNrSXRlbSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGFjdGl2ZSAoZm9jdXMpIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZElkID0gdGFyZ2V0LmRhdGFzZXRbKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRvQ2FtZWxDYXNlKSgnc2VsLXBvc2l0aW9uJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RWwgPSB0aGlzLmVsZW1MaXN0Qm9keS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zZWwtcG9zaXRpb249XCIke29sZElkfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dERlYm91bmNlSWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0RGVib3VuY2VJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXREZWJvdW5jZUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXREZWJvdW5jZUlkID0gbnVsbDtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uZmlybU9rSGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jb25maXJtT2tCdWlsZCgpO1xuICAgIH1cbiAgICBjb25maXJtT2tCdWlsZCgpIHtcbiAgICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLiRzZWxlY3Q7XG4gICAgICAgIGlmICghdGhpcy5lbGVtTGlzdEJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaUl0ZW1zID0gdGhpcy5lbGVtTGlzdEJvZHkucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2VsLXBvc2l0aW9uXScpO1xuICAgICAgICBsaUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHBhcnNlSW50KGl0ZW0uZGF0YXNldFsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEudG9DYW1lbENhc2UpKCdzZWwtcG9zaXRpb24nKV0sIDEwKTtcbiAgICAgICAgICAgIGlmICghcG9zICYmIHBvcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNbcG9zXTtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkIHx8IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNlbC1vcHQtZGlzYWJsZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgaWYgKCFvcHRpb24gfHwgZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gaXRlbS5kYXRhc2V0WygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50b0NhbWVsQ2FzZSkoJ3NlbC1vcHQtY2hlY2tlZCcpXSA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWQgIT09IG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGlzdG9yeShvcHRpb24sIGlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gaXNTZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2lzT3BlbicsIGZhbHNlKTtcbiAgICAgICAgdGhpcy50cmlnZ2VySW5pdCgpO1xuICAgICAgICAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEudHJpZ2dlckN1c3RvbUV2ZW50KSh0aGlzLiRzZWxlY3QsICdtdWx0aUNvbmZpcm0nLCB7IGl0ZW06IHRoaXMgfSk7XG4gICAgfVxuICAgIGNvbmZpcm1Ob0hhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2lzT3BlbicsIGZhbHNlKTtcbiAgICAgICAgKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRyaWdnZXJDdXN0b21FdmVudCkodGhpcy4kc2VsZWN0LCAnbXVsdGlDYW5jZWwnLCB7IGl0ZW06IHRoaXMgfSk7XG4gICAgfVxuICAgIGNsb3NlSGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnaXNPcGVuJywgZmFsc2UpO1xuICAgIH1cbiAgICBzZWxlY3RBbGxIYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMuJHNlbGVjdC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB7IGRpc2FibGVkIH0gPSBvcHRpb247XG4gICAgICAgICAgICBpZiAob3B0aW9uLmNsb3Nlc3QoJ29wdGdyb3VwJyk/LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdEFsbEFmdGVyQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2lzT3BlbicsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXJJbml0KCk7XG4gICAgICAgICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50cmlnZ2VyQ3VzdG9tRXZlbnQpKHRoaXMuJHNlbGVjdCwgJ3NlbGVjdEFsbCcsIHsgaXRlbTogdGhpcyB9KTtcbiAgICB9XG4gICAgcmVzZXRBbGxIYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMuJHNlbGVjdC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB7IGRpc2FibGVkIH0gPSBvcHRpb247XG4gICAgICAgICAgICBpZiAob3B0aW9uLmNsb3Nlc3QoJ29wdGdyb3VwJyk/LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RBbGxBZnRlckNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdpc09wZW4nLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VySW5pdCgpO1xuICAgICAgICAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEudHJpZ2dlckN1c3RvbUV2ZW50KSh0aGlzLiRzZWxlY3QsICdyZXNldEFsbCcsIHsgaXRlbTogdGhpcyB9KTtcbiAgICB9XG4gICAgLy8gY2xpY2sgZm9yIExJXG4gICAgdHJpZ2dlclNldHVwKGUpIHtcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgdGFyZ2V0TGkgPSB0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgaWYgKHRhcmdldExpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNsaWNrSXRlbSh0YXJnZXRMaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQ2xpY2tJdGVtRG9tKGl0ZW0pIHtcbiAgICAgICAgY29uc3Qgd3JhcEdyb3VwID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1zaW1wbGUtc2VsZWN0LWdydW9wXScpO1xuICAgICAgICBpZiAoaXRlbS5kYXRhc2V0WygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50b0NhbWVsQ2FzZSkoJ3NlbC1vcHQtY2hlY2tlZCcpXSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBpdGVtLmRhdGFzZXRbKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRvQ2FtZWxDYXNlKSgnc2VsLW9wdC1jaGVja2VkJyldID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnU2ltcGxlU2VsX19saXN0X2l0ZW0tLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGlmICh3cmFwR3JvdXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSBOdW1iZXIod3JhcEdyb3VwLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudC1jaGVja2VkJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgd3JhcEdyb3VwLnNldEF0dHJpYnV0ZSgnZGF0YS1jb3VudC1jaGVja2VkJywgKGN1ciAtIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5kYXRhc2V0WygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50b0NhbWVsQ2FzZSkoJ3NlbC1vcHQtY2hlY2tlZCcpXSA9ICd0cnVlJztcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnU2ltcGxlU2VsX19saXN0X2l0ZW0tLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGlmICh3cmFwR3JvdXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSBOdW1iZXIod3JhcEdyb3VwLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudC1jaGVja2VkJykpIHx8IDA7XG4gICAgICAgICAgICAgICAgd3JhcEdyb3VwLnNldEF0dHJpYnV0ZSgnZGF0YS1jb3VudC1jaGVja2VkJywgKGN1ciArIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEhpc3Rvcnkob3B0aW9uLCBpc0NoZWNrKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlzdG9yeU1heFNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBvcHRpb24uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpc0NoZWNrLFxuICAgICAgICAgICAgICAgIGluZGV4T3B0aW9uOiBvcHRpb24uaW5kZXgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID4gdGhpcy5vcHRpb25zLmhpc3RvcnlNYXhTaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5ID0gdGhpcy5oaXN0b3J5LnNsaWNlKHRoaXMuaGlzdG9yeS5sZW5ndGggLSB0aGlzLm9wdGlvbnMuaGlzdG9yeU1heFNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRyaWdnZXJDdXN0b21FdmVudCkodGhpcy4kc2VsZWN0LCAndXBkYXRlSGlzdG9yeScsIHsgaXRlbTogdGhpcywgaGlzdG9yeTogdGhpcy5oaXN0b3J5IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNsaWNrSXRlbShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBOdW1iZXIoaXRlbS5kYXRhc2V0WygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50b0NhbWVsQ2FzZSkoJ3NlbC1wb3NpdGlvbicpXSkgfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuJHNlbGVjdC5vcHRpb25zW3Bvc107XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZCB8fCBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWwtb3B0LWRpc2FibGVkJykgPT09ICd0cnVlJztcbiAgICAgICAgICAgIGlmIChvcHRpb24gJiYgIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNdWx0aSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ29uZmlybUluTXVsdGkgfHwgdGhpcy5pc0Zsb2F0V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2xpY2tJdGVtRG9tKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFNlbGVjdGVkID0gIW9wdGlvbi5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG5leHRTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGlzdG9yeShvcHRpb24sIG5leHRTZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNsaWNrSXRlbURvbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aURlYm91bmNlQ2hhbmdlQW5pbWF0aW9uKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aURlYm91bmNlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbi5zZWxlY3RlZCA9ICFvcHRpb24uc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGlzdG9yeShvcHRpb24sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnaXNPcGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJJbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG11bHRpRGVib3VuY2VDaGFuZ2UoKSB7XG4gICAgICAgIC8vIGNhbiBiZSBvdmVycmlkZGVuIGZvciBtdWx0aXNlbGVjdCAtIGRlYm91bmNlXG4gICAgICAgIHRoaXMudHJpZ2dlckluaXQoKTtcbiAgICB9XG4gICAgbXVsdGlEZWJvdW5jZUNoYW5nZUFuaW1hdGlvbihpc1N0YXJ0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlYm91bmNlU3RhdHVzQmFyIHx8ICF0aGlzLmVsZW1EZWJvdW5jZVByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgdGhpcy5lbGVtRGVib3VuY2VQcm9ncmVzc0Jhci5jbGFzc0xpc3QucmVtb3ZlKCd0aGlzLS1hbmltYXRpbmcnKTtcbiAgICAgICAgdGhpcy5lbGVtRGVib3VuY2VQcm9ncmVzc0Jhci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kdXJhdGlvbicsICcwbXMnKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgdGhpcy5lbGVtRGVib3VuY2VQcm9ncmVzc0Jhci5vZmZzZXRXaWR0aDsgLy8g0L/RgNC40L3Rg9C00LjRgtC10LvRjNC90LDRjyDQv9C10YDQtdGA0LjRgdC+0LLQutCwIChmb3JjZSByZWZsb3cpXG4gICAgICAgIGlmICghaXNTdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0YXJ0XG4gICAgICAgIHRoaXMuZWxlbURlYm91bmNlUHJvZ3Jlc3NCYXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tZHVyYXRpb24nLCBgJHt0aGlzLm11bHRpRGVib3VuY2VUaW1lfW1zYCk7XG4gICAgICAgIHRoaXMuZWxlbURlYm91bmNlUHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LmFkZCgndGhpcy0tYW5pbWF0aW5nJyk7XG4gICAgICAgIC8vIHRoaXMuZWxlbURlYm91bmNlUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG4gICAgICAgIC8vIHRoaXMuZWxlbURlYm91bmNlUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgICAvLyBpZiAoIWlzU3RhcnQpIHtcbiAgICAgICAgLy8gICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gICB0aGlzLmVsZW1EZWJvdW5jZVByb2dyZXNzQmFyIS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aGlzLm11bHRpRGVib3VuY2VUaW1lfW1zYDtcbiAgICAgICAgLy8gICB0aGlzLmVsZW1EZWJvdW5jZVByb2dyZXNzQmFyIS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuICAgIHRyaWdnZXJJbml0KCkge1xuICAgICAgICB0aGlzLm11bHRpRGVib3VuY2VDaGFuZ2VBbmltYXRpb24oZmFsc2UpO1xuICAgICAgICAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEudHJpZ2dlcklucHV0RXZlbnQpKHRoaXMuJHNlbGVjdCk7XG4gICAgfVxuICAgIGNsaWNrVG9nZ2xlT3BlbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2lzT3BlbicsICF0aGlzLnN0YXRlLmdldFN0YXRlKCdpc09wZW4nKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdpc09wZW4nLCAhdGhpcy5zdGF0ZS5nZXRTdGF0ZSgnaXNPcGVuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsb3NlT3V0c2lkZUhhbmRsZXJJbml0KGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmVsZW1XcmFwLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDb25maXJtSW5NdWx0aSAmJiB0aGlzLm9wdGlvbnMuaXNDb25maXJtSW5NdWx0aU9rQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtT2tCdWlsZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnaXNPcGVuJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsb3NlRXNjSGFuZGxlckluaXQoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2lzT3BlbicsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5jb2RlID09PSAnVGFiJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtV3JhcC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdpc09wZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcgfHwgZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5rZXlCb2FyZENoYW5nZUNoZWNrZWQoZS5rZXkgPT09ICdBcnJvd0Rvd24nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgLy8gICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MTElFbGVtZW50O1xuICAgICAgICAvLyAgIGlmICh0YXJnZXQgJiYgdG9DYW1lbENhc2UoJ3NlbC1vcHQtaXRlbScpIGluIHRhcmdldC5kYXRhc2V0KSB7XG4gICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyAgICAgdGhpcy5jaGFuZ2VDbGlja0l0ZW0odGFyZ2V0KTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAga2V5Qm9hcmRDaGFuZ2VDaGVja2VkKGlzRG93bikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICBjb25zdCBsaUl0ZW1zID0gdGhpcy5lbGVtTGlzdEJvZHkucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2VsLXBvc2l0aW9uXTpub3QoW2RhdGEtc2VsLW9wdC1kaXNhYmxlZD1cInRydWVcIl0pJyk7XG4gICAgICAgIGlmICghbGlJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kQ3VycmVudCA9IDA7XG4gICAgICAgIGxldCBmaXJzdE9wdGlvbjtcbiAgICAgICAgbGlJdGVtcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsKSB7XG4gICAgICAgICAgICAgICAgaW5kQ3VycmVudCA9IGk7XG4gICAgICAgICAgICAgICAgZmlyc3RPcHRpb24gPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZmlyc3RPcHRpb24pIHtcbiAgICAgICAgICAgIGZpcnN0T3B0aW9uID0gaXNEb3duID8gbGlJdGVtc1swXSA6IGxpSXRlbXNbbGlJdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Rvd24pIHtcbiAgICAgICAgICAgIGZpcnN0T3B0aW9uID0gbGlJdGVtc1tpbmRDdXJyZW50ICsgMV0gfHwgbGlJdGVtc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpcnN0T3B0aW9uID0gbGlJdGVtc1tpbmRDdXJyZW50IC0gMV0gfHwgbGlJdGVtc1tsaUl0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZpcnN0T3B0aW9uLnRhYkluZGV4ID0gMDtcbiAgICAgICAgZmlyc3RPcHRpb24uZm9jdXMoKTtcbiAgICB9XG4gICAgc2VhcmNoSGFuZGxlckluaXQoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2ZpbHRlclN0cicsIHZhbHVlKTtcbiAgICB9XG4gICAgdG9nZ2xlT3BlbigpIHtcbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgnaXNPcGVuJyk7XG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2lzT3BlbicsICFpc09wZW4pO1xuICAgIH1cbiAgICB0b2dnbGVPcGVuSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgnaXNPcGVuJyk7XG4gICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbVdyYXAuY2xhc3NMaXN0LmFkZCgnU2ltcGxlU2VsLS1vcGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuY2xvc2VFc2NIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1JbnB1dFNlYXJjaCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1JbnB1dFNlYXJjaC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2FsbGJhY2tPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrT3Blbih0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY291bnRPcGVuKys7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtRHJvcERvd24pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtRHJvcERvd24uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdmaWx0ZXJMaXN0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5lbGVtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdTaW1wbGVTZWwtLW9wZW4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU91dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5jbG9zZUVzY0hhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dERlYm91bmNlSWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0RGVib3VuY2VJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0RGVib3VuY2VJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aURlYm91bmNlQ2hhbmdlQW5pbWF0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJJbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNhbGxiYWNrQ2xvc2UgJiYgdGhpcy5jb3VudE9wZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrQ2xvc2UodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlTGlzdGVuZXJJbml0KGUpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWxsYmFja0NoYW5nZVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrQ2hhbmdlU2VsZWN0KGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdCh0cnVlKTtcbiAgICB9XG4gICAgc2VsZWN0S2V5RG93bkluaXQoZSkge1xuICAgICAgICBpZiAodGhpcy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vINCR0LvQvtC60LjRgNGD0LXQvCDQvtGC0LrRgNGL0YLQuNC1INGB0L/QuNGB0LrQsFxuICAgICAgICAgICAgdGhpcy50b2dnbGVPcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2VsZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2VsZWN0O1xuICAgIH1cbiAgICBoYW5kbGVyQ2hhbmdlQ2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbUxpc3RCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1MaXN0Qm9keS5vbm1vdXNldXAgPSB0aGlzLnRyaWdnZXJTZXR1cC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUxpc3QoaXNDb21wYXJlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbXTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLiRzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0Z3JvdXAnKTtcbiAgICAgICAgaWYgKGdyb3VwICYmIGdyb3VwLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBBbmRPcHRpb25zID0gdGhpcy4kc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IConKTtcbiAgICAgICAgICAgIGdyb3VwQW5kT3B0aW9ucy5mb3JFYWNoKChpdGVtLCBpbmQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dyb3VwID0gaXRlbSBpbnN0YW5jZW9mIEhUTUxPcHRHcm91cEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbmV3SXRlbXMucHVzaCgoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q3JlYXRlTGlzdEl0ZW0pKGl0ZW0sIChpbmQgKyAxKS50b1N0cmluZygpLCBpc0dyb3VwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2goKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENyZWF0ZUxpc3RJdGVtKSh0aGlzLiRzZWxlY3QsICcxJywgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDb21wYXJlKSB7XG4gICAgICAgICAgICBjb25zdCBvbGQgPSB0aGlzLnN0YXRlLmdldFN0YXRlKCdpdGVtcycpO1xuICAgICAgICAgICAgaWYgKCEoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuY29tcGFyZU9iaikob2xkLCBuZXdJdGVtcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKCdpdGVtcycsIG5ld0l0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoJ2l0ZW1zJywgbmV3SXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHByaXZhdGUgZmlsdGVyTGlzdCh2YWw6IHN0cmluZykge1xuICAgIC8vICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gICBjb25zdCBpdGVtczpJT3B0aW9uSXRlbXNbXSA9IGNsb25lT2JqKHRoaXMuc3RhdGUuZ2V0U3RhdGUoJ2l0ZW1zJykpO1xuICAgIC8vXG4gICAgLy8gICBpdGVtcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIC8vICAgICBsZXQgaXNTaG93R3JvdXAgPSBmYWxzZTtcbiAgICAvLyAgICAgZ3JvdXAuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICAgIGlmIChpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAvLyAgICAgICAgIGlzU2hvd0dyb3VwID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIGl0ZW0uaXNTaG93RmlsdGVyID0gdHJ1ZTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgaXRlbS5pc1Nob3dGaWx0ZXIgPSBmYWxzZTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBncm91cC5pc1Nob3dGaWx0ZXIgPSBpc1Nob3dHcm91cDtcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSgnaXRlbXMnLCBpdGVtcyk7XG4gICAgLy8gfVxuICAgIGlucHV0U2VhcmNoSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1JbnB1dFNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbUlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5zZWFyY2hIYW5kbGVyKTtcbiAgICB9XG4gICAgZGV0YWNoSXRlbSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWxsYmFja0Rlc3Ryb3lJbml0KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2tEZXN0cm95SW5pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtV3JhcC5wYXJlbnROb2RlO1xuICAgICAgICB0aGlzLiRzZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICAgIGlmICh0aGlzLmVsZW1JbnB1dFNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtSW5wdXRTZWFyY2gucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnNlYXJjaEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1Paykge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtT2sub25jbGljayA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlybU5vKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Oby5vbmNsaWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh0aGlzLiRzZWxlY3QsIHRoaXMuZWxlbVdyYXApO1xuICAgICAgICB0aGlzLiRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzU2VsZWN0SW5pdCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1Ub3BCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1Ub3BCb2R5Lm9uY2xpY2sgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lbGVtVG9wQm9keS5vbmtleXVwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtTGlzdEJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbUxpc3RCb2R5Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbVNlbGVjdEFsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtU2VsZWN0QWxsLm9uY2xpY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1SZXNldEFsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtUmVzZXRBbGwub25jbGljayA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWxsYmFja0Rlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0Rlc3Ryb3kodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbURyb3BEb3duQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbURyb3BEb3duQ2xvc2Uub25jbGljayA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXFsKSB7XG4gICAgICAgICAgICB0aGlzLm1xbC5vbmNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm1xbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlNpbXBsZVNlbGVjdEl0ZW0gPSBTaW1wbGVTZWxlY3RJdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNpbXBsZVNlbGVjdEl0ZW1ET00gPSB2b2lkIDA7XG5jb25zdCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3NpbXBsZVNlbGVjdGlvbi51dGlsc1wiKTtcbmNvbnN0IHN0b3JlXzEgPSByZXF1aXJlKFwiLi91dGlscy9zdG9yZVwiKTtcbmNvbnN0IHNpbXBsZVNlbGVjdGlvbl9jb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3Qvc2ltcGxlU2VsZWN0aW9uLmNvbnN0XCIpO1xuY2xhc3MgU2ltcGxlU2VsZWN0SXRlbURPTSB7XG4gICAgb3B0aW9ucztcbiAgICAkc2VsZWN0O1xuICAgIGlkO1xuICAgIHRpdGxlUGxhY2Vob2xkZXI7XG4gICAgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlzTXVsdGk7XG4gICAgc3RhdGUgPSAoMCwgc3RvcmVfMS5zdG9yZSkoe1xuICAgICAgICBpdGVtczogW10sXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGZpbHRlclN0cjogJycsXG4gICAgICAgIGlzRmxvYXQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIC8vIGNsYXNzU2VsZWN0SW5pdD0gJ1NpbXBsZVNlbF9fc2VsZWN0X2luaXQnXG4gICAgY2xhc3NTZWxlY3RJbml0ID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnc2VsZWN0X2luaXQnKTtcbiAgICBpc05hdGl2ZTtcbiAgICBlbGVtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhbGxcbiAgICBlbGVtVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFsbFxuICAgIGVsZW1Ub3BCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFsbFxuICAgIGVsZW1Ecm9wRG93bldyYXAgPSBudWxsOyAvLyBub3QgbmF0aXZlXG4gICAgZWxlbURyb3BEb3duID0gbnVsbDsgLy8gbm90IG5hdGl2ZVxuICAgIGVsZW1Ecm9wRG93bkNsb3NlID0gbnVsbDsgLy8gbm90IG5hdGl2ZVxuICAgIGVsZW1MaXN0Qm9keSA9IG51bGw7IC8vIG5vdCBuYXRpdmVcbiAgICBlbGVtSW5wdXRTZWFyY2ggPSBudWxsOyAvLyBub3QgbmF0aXZlXG4gICAgZWxlbVRpdGxlOyAvLyBub3QgbmF0aXZlXG4gICAgY29uZmlybVdyYXAgPSBudWxsOyAvLyBub3QgbmF0aXZlXG4gICAgY29uZmlybU9rID0gbnVsbDsgLy8gbm90IG5hdGl2ZVxuICAgIGNvbmZpcm1ObyA9IG51bGw7IC8vIG5vdCBuYXRpdmVcbiAgICBlbGVtQ29udHJvbCA9IG51bGw7IC8vIG5vdCBuYXRpdmVcbiAgICBlbGVtU2VsZWN0QWxsID0gbnVsbDsgLy8gbm90IG5hdGl2ZVxuICAgIGVsZW1SZXNldEFsbCA9IG51bGw7IC8vIG5vdCBuYXRpdmVcbiAgICBlbGVtRGVib3VuY2VQcm9ncmVzc0JhciA9IG51bGw7IC8vIG5vdCBuYXRpdmVcbiAgICBjbG9uZUNsYXNzZXMgPSAnJztcbiAgICBpc1Nob3dDaGVja2JveCA9IGZhbHNlO1xuICAgIGJvZHlMaUhUTUxCZWZvcmVGcm9tU2VsZWN0ID0gbnVsbDtcbiAgICBib2R5TGlIVE1MQWZ0ZXJGcm9tU2VsZWN0ID0gbnVsbDtcbiAgICBpc0Zsb2F0V2lkdGggPSBmYWxzZTtcbiAgICBib2R5T3BlbkNsYXNzID0gYCR7c2ltcGxlU2VsZWN0aW9uX2NvbnN0XzEuaW5pdENsYXNzfS0tYm9keV9vcGVuYDtcbiAgICBtdWx0aURlYm91bmNlVGltZSA9IDA7XG4gICAgaXNEZWJvdW5jZVN0YXR1c0JhciA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdCwgb3B0aW9ucywgbG9jYWxPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIGlzTmF0aXZlIH0gPSBsb2NhbE9wdGlvbnM7XG4gICAgICAgIHRoaXMuJHNlbGVjdCA9IHNlbGVjdDtcbiAgICAgICAgdGhpcy5pc011bHRpID0gc2VsZWN0Lm11bHRpcGxlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuaXNOYXRpdmUgPSBpc05hdGl2ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmNsb25lT2JqKShvcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc0RlYm91bmNlU3RhdHVzQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGVib3VuY2VTdGF0dXNCYXIgPSB0aGlzLm9wdGlvbnMuaXNEZWJvdW5jZVN0YXR1c0JhcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2xvbmVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5jbG9uZUNsYXNzZXMgPSB0aGlzLiRzZWxlY3QuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrSW5pdGlhbGl6YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0luaXRpYWxpemF0aW9uID0gb3B0aW9ucy5jYWxsYmFja0luaXRpYWxpemF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0luaXRpYWxpemVkID0gb3B0aW9ucy5jYWxsYmFja0luaXRpYWxpemVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrT3BlbiA9IG9wdGlvbnMuY2FsbGJhY2tPcGVuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0Nsb3NlID0gb3B0aW9ucy5jYWxsYmFja0Nsb3NlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrRGVzdHJveUluaXQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0Rlc3Ryb3lJbml0ID0gb3B0aW9ucy5jYWxsYmFja0Rlc3Ryb3lJbml0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrRGVzdHJveSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrRGVzdHJveSA9IG9wdGlvbnMuY2FsbGJhY2tEZXN0cm95O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrQ2hhbmdlU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2tDaGFuZ2VTZWxlY3QgPSBvcHRpb25zLmNhbGxiYWNrQ2hhbmdlU2VsZWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNoYW5nZUJvZHlMaSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoYW5nZUJvZHlMaSA9IG9wdGlvbnMuY2hhbmdlQm9keUxpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZvcm1hdFRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9ybWF0VGl0bGUgPSBvcHRpb25zLmZvcm1hdFRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkgJiYgdGhpcy4kc2VsZWN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtaXMtY29uZmlybScpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNDb25maXJtSW5NdWx0aSA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5pZlRydWVEYXRhQXR0cikodGhpcy4kc2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtaXMtY29uZmlybScpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbk92ZXJyaWRlKCk7XG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRoaXMuJHNlbGVjdC5kaXNhYmxlZDtcbiAgICAgICAgLy8gdGhpcy5pbml0RG9tKClcbiAgICB9XG4gICAgb3B0aW9uT3ZlcnJpZGUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFQbGFjZWhvbGRlciA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50b0NhbWVsQ2FzZSkoJ3NpbXBsZS1wbGFjZWhvbGRlcicpO1xuICAgICAgICBpZiAodGhpcy4kc2VsZWN0LmRhdGFzZXRbZGF0YVBsYWNlaG9sZGVyXSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZVBsYWNlaG9sZGVyID0gdGhpcy4kc2VsZWN0LmRhdGFzZXRbZGF0YVBsYWNlaG9sZGVyXSB8fCAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGVQbGFjZWhvbGRlciA9IHRoaXMub3B0aW9ucy5sb2NhbGUudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlLWRlYm91bmNlLXN0YXR1cy1iYXInKSkge1xuICAgICAgICAgICAgdGhpcy5pc0RlYm91bmNlU3RhdHVzQmFyID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmlmVHJ1ZURhdGFBdHRyKSh0aGlzLiRzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXNpbXBsZS1kZWJvdW5jZS1zdGF0dXMtYmFyJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNpbXBsZS1yZXNldC1hbGwnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlc2V0QWxsID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmlmVHJ1ZURhdGFBdHRyKSh0aGlzLiRzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXNpbXBsZS1yZXNldC1hbGwnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3QgZGF0YVNlbGVjdCA9IHRvQ2FtZWxDYXNlKCdzaW1wbGUtc2VsZWN0LWFsbCcpO1xuICAgICAgICAvLyBpZiAoZGF0YVNlbGVjdCBpbiB0aGlzLiRzZWxlY3QuZGF0YXNldCkge1xuICAgICAgICAvLyAgIGNvbnN0IHJlc1NlbGVjdCAgPSB0aGlzLiRzZWxlY3QuZGF0YXNldFtkYXRhU2VsZWN0XTtcbiAgICAgICAgLy8gICB0aGlzLm9wdGlvbnMuc2VsZWN0QWxsID0gIShyZXNTZWxlY3QgPT09ICdmYWxzZScgfHwgcmVzU2VsZWN0ID09PSAnMCcpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNpbXBsZS1zZWxlY3QtYWxsJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc1NlbGVjdCA9IHRoaXMuJHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlLXNlbGVjdC1hbGwnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RBbGwgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuaWZUcnVlRGF0YUF0dHIpKHJlc1NlbGVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTaG93Q2hlY2tib3hMb2NhbCA9IHRoaXMuJHNlbGVjdC5kYXRhc2V0WygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50b0NhbWVsQ2FzZSkoJ3NpbXBsZS1zaG93LWNoZWNrYm94JyldO1xuICAgICAgICBpZiAodGhpcy5pc011bHRpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2hvd0NoZWNrYm94ID0gISgoaXNTaG93Q2hlY2tib3hMb2NhbCAmJiAhKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmlmVHJ1ZURhdGFBdHRyKShpc1Nob3dDaGVja2JveExvY2FsKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2hvd0NoZWNrYm94TG9jYWwgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dDaGVja2JveCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbUh0bWxCZWZvcmUgPSB0aGlzLiRzZWxlY3QuZGF0YXNldFsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEudG9DYW1lbENhc2UpKCdzaW1wbGUtaXRlbS1odG1sLWJlZm9yZScpXTtcbiAgICAgICAgaWYgKGl0ZW1IdG1sQmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlMaUhUTUxCZWZvcmVGcm9tU2VsZWN0ID0gaXRlbUh0bWxCZWZvcmU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbUh0bWxBZnRlciA9IHRoaXMuJHNlbGVjdC5kYXRhc2V0WygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS50b0NhbWVsQ2FzZSkoJ3NpbXBsZS1pdGVtLWh0bWwtYWZ0ZXInKV07XG4gICAgICAgIGlmIChpdGVtSHRtbEFmdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlMaUhUTUxBZnRlckZyb21TZWxlY3QgPSBpdGVtSHRtbEFmdGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNpbXBsZS11cCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNVcCA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5pZlRydWVEYXRhQXR0cikodGhpcy4kc2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtdXAnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlLWlzLW9ubHktcGxhY2Vob2xkZXInKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzT25seVBsYWNlaG9sZGVyID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmlmVHJ1ZURhdGFBdHRyKSh0aGlzLiRzZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXNpbXBsZS1pcy1vbmx5LXBsYWNlaG9sZGVyJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNpbXBsZS1yZW1vdmUtdG9wJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc1JlbW92ZVRvcCA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5pZlRydWVEYXRhQXR0cikodGhpcy4kc2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtcmVtb3ZlLXRvcCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtZmxvYXQtbm9uZScpKSB7XG4gICAgICAgICAgICB0aGlzLmlzRmxvYXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZsb2F0V2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNpbXBsZS1mbG9hdC13aWR0aCcpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IE51bWJlcih0aGlzLiRzZWxlY3QuZGF0YXNldFsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEudG9DYW1lbENhc2UpKCdzaW1wbGUtZmxvYXQtd2lkdGgnKV0pO1xuICAgICAgICAgICAgaWYgKG5ld1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZsb2F0V2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtYWx3YXlzLW9wZW4nKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzQWx3YXlzT3BlbiA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5pZlRydWVEYXRhQXR0cikodGhpcy4kc2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtYWx3YXlzLW9wZW4nKSk7XG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRmxvYXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZsb2F0V2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBkZWJvdW5jZSB0aW1lXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkgJiYgIXRoaXMub3B0aW9ucy5pc0NvbmZpcm1Jbk11bHRpKSB7XG4gICAgICAgICAgICBpZiAoKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRvQ2FtZWxDYXNlKSgnc2ltcGxlLWRlYm91bmNlLXRpbWUnKSBpbiB0aGlzLiRzZWxlY3QuZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlEZWJvdW5jZVRpbWUgPSBOdW1iZXIodGhpcy4kc2VsZWN0LmRhdGFzZXRbKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRvQ2FtZWxDYXNlKSgnc2ltcGxlLWRlYm91bmNlLXRpbWUnKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLmRlYm91bmNlVGltZSB8fCB0aGlzLm9wdGlvbnMuZGVib3VuY2VUaW1lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aURlYm91bmNlVGltZSA9IHRoaXMub3B0aW9ucy5kZWJvdW5jZVRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdERvbSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVIVE1MKCk7XG4gICAgICAgIHRoaXMuc3RhdGUuc3Vic2NyaWJlKCdmaWx0ZXJTdHInLCAoX3ZhbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0SFRNTCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc3Vic2NyaWJlKCdpdGVtcycsIChfdmFsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3RIVE1MKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaXRsZUhUTUwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc3Vic2NyaWJlKCdpc09wZW4nLCAodmFsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3RIVE1MKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGl0bGVIVE1MKCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVRhYkluZGV4KHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlLnN1YnNjcmliZSgnaXNGbG9hdCcsICh2YWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGbG9hdFdpZHRoID0gdmFsO1xuICAgICAgICAgICAgY29uc3QgY2xzID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnZmxvYXQnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1XcmFwLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuYm9keU9wZW5DbGFzcykgJiYgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgnaXNPcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuYm9keU9wZW5DbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuYm9keU9wZW5DbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYm9keU9wZW5DbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9nZ2xlVGFiSW5kZXgoaXNPcGVuKSB7XG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gaXNPcGVuIHx8IHRoaXMub3B0aW9ucy5pc0Fsd2F5c09wZW4gPyAwIDogLTE7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldFN0YXRlKCdpc0Zsb2F0JykpIHtcbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5ib2R5T3BlbkNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmJvZHlPcGVuQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1JbnB1dFNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtSW5wdXRTZWFyY2gudGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtUmVzZXRBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbVJlc2V0QWxsLnRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbVNlbGVjdEFsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtU2VsZWN0QWxsLnRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlybU9rKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Pay50YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1Obykge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTm8udGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVIVE1MKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3QodHJ1ZSk7XG4gICAgfVxuICAgIGNyZWF0ZUhUTUwoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NTZWxlY3RJbml0KTtcbiAgICAgICAgdGhpcy4kc2VsZWN0LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuZWxlbVRvcEJvZHkuY2xhc3NOYW1lID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgndG9wX2JvZHknKTtcbiAgICAgICAgdGhpcy5lbGVtVG9wQm9keS50YWJJbmRleCA9IHRoaXMuaXNEaXNhYmxlZCA/IC0xIDogMDtcbiAgICAgICAgdGhpcy5jcmVhdGVJY29uKCk7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmlzUmVtb3ZlVG9wKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1Ub3AuYXBwZW5kQ2hpbGQodGhpcy5lbGVtVG9wQm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc0NsYXNzZXNXcmFwID0gc2ltcGxlU2VsZWN0aW9uX2NvbnN0XzEuaW5pdENsYXNzO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2xvbmVDbGFzcykge1xuICAgICAgICAgICAgcmVzQ2xhc3Nlc1dyYXAgKz0gYCAke3RoaXMuY2xvbmVDbGFzc2VzfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGRDbGFzc2VzKSB7XG4gICAgICAgICAgICByZXNDbGFzc2VzV3JhcCArPSBgICR7dGhpcy5vcHRpb25zLmFkZENsYXNzZXN9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtYWRkLWNsYXNzZXMnKSkge1xuICAgICAgICAgICAgcmVzQ2xhc3Nlc1dyYXAgKz0gYCAke3RoaXMuJHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlLWFkZC1jbGFzc2VzJyl9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXNDbGFzc2VzV3JhcCArPSBgICR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnZGlzYWJsZWQnLCB0cnVlKX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNBbHdheXNPcGVuKSB7XG4gICAgICAgICAgICByZXNDbGFzc2VzV3JhcCArPSBgICR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnYWx3YXlzX29wZW4nLCB0cnVlKX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNVcCkge1xuICAgICAgICAgICAgcmVzQ2xhc3Nlc1dyYXAgKz0gYCAkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ3VwJywgdHJ1ZSl9YDtcbiAgICAgICAgfVxuICAgICAgICByZXNDbGFzc2VzV3JhcCArPSBgICR7dGhpcy5pc011bHRpID8gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnbXVsdGknLCB0cnVlKSA6ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ3NpbmdsZScsIHRydWUpfWA7XG4gICAgICAgIHRoaXMuZWxlbVdyYXAuY2xhc3NOYW1lID0gcmVzQ2xhc3Nlc1dyYXA7XG4gICAgICAgIHRoaXMuZWxlbVdyYXAuZGF0YXNldC5jb3VudEFsbCA9IHRoaXMuJHNlbGVjdC5vcHRpb25zLmxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmVsZW1Ub3AuY2xhc3NOYW1lID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgndG9wJyk7XG4gICAgICAgIC8vIGNyZWF0aW5nIGFuIGluaXRpYWwgc3RydWN0dXJlXG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLiRzZWxlY3QucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMuZWxlbVdyYXAsIHRoaXMuJHNlbGVjdCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1XcmFwLmFwcGVuZENoaWxkKHRoaXMuJHNlbGVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtV3JhcC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1Ub3ApO1xuICAgICAgICBpZiAodGhpcy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0LmNsYXNzTGlzdC5hZGQoKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnbmF0aXZlJywgdHJ1ZSwgdGhpcy5jbGFzc1NlbGVjdEluaXQpKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbVdyYXAuY2xhc3NMaXN0LmFkZCgoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCduYXRpdmUnLCB0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3BEb3duKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbnRyb2xIVE1MKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUlucHV0SFRNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlVGl0bGVIVE1MKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNvbnRyb2xIVE1MKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbURyb3BEb3duIHx8ICF0aGlzLmlzTXVsdGkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zZWxlY3RBbGwgJiYgIXRoaXMub3B0aW9ucy5yZXNldEFsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtQ29udHJvbC5jbGFzc0xpc3QuYWRkKCgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2NvbnRyb2xzJykpO1xuICAgICAgICAvLyB0aGlzLmVsZW1Ecm9wRG93bi5wcmVwZW5kKHRoaXMuZWxlbUNvbnRyb2wpO1xuICAgICAgICB0aGlzLmVsZW1Ecm9wRG93bi5pbnNlcnRCZWZvcmUodGhpcy5lbGVtQ29udHJvbCwgdGhpcy5lbGVtRHJvcERvd24uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGNvbnN0IGNsYXNzQ29udHJvbCA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2NvbnRyb2wnKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbVNlbGVjdEFsbCA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5jcmVhdGVCdXR0b24pKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1TZWxlY3RBbGwuY2xhc3NOYW1lID0gYCR7Y2xhc3NDb250cm9sfSAkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ3NlbGVjdF9hbGwnLCB0cnVlLCBjbGFzc0NvbnRyb2wpfWA7XG4gICAgICAgICAgICB0aGlzLmVsZW1TZWxlY3RBbGwuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiJHsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdzZWxlY3RfYWxsX19pY29uJyl9XCI+PC9zcGFuPiAke3RoaXMub3B0aW9ucy5sb2NhbGUuc2VsZWN0QWxsfWA7XG4gICAgICAgICAgICB0aGlzLmVsZW1Db250cm9sLmFwcGVuZENoaWxkKHRoaXMuZWxlbVNlbGVjdEFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNldEFsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtUmVzZXRBbGwgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuY3JlYXRlQnV0dG9uKSgpO1xuICAgICAgICAgICAgdGhpcy5lbGVtUmVzZXRBbGwuY2xhc3NOYW1lID0gYCR7Y2xhc3NDb250cm9sfSAkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ3Jlc2V0X2FsbCcsIHRydWUsIGNsYXNzQ29udHJvbCl9YDtcbiAgICAgICAgICAgIHRoaXMuZWxlbVJlc2V0QWxsLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIiR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgncmVzZXRfYWxsX19pY29uJyl9XCI+PC9zcGFuPiAke3RoaXMub3B0aW9ucy5sb2NhbGUucmVzZXRBbGx9YDtcbiAgICAgICAgICAgIHRoaXMuZWxlbUNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5lbGVtUmVzZXRBbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUljb24oKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnaWNvbicpO1xuICAgICAgICB0aGlzLmVsZW1Ub3BCb2R5LmFwcGVuZENoaWxkKGljb24pO1xuICAgIH1cbiAgICBjcmVhdGVEcm9wRG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1Ecm9wRG93bldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtRHJvcERvd25XcmFwLmNsYXNzTmFtZSA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2JvZHknKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc0Fsd2F5c09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbURyb3BEb3duV3JhcC5jbGFzc0xpc3QuYWRkKCgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2JvZHktYWx3YXlzX29wZW4nLCB0cnVlKSk7XG4gICAgICAgICAgICAvLyByZXNDbGFzc2VzV3JhcCArPSBgICR7Z2V0Q2xhc3MoJ2Fsd2F5c19vcGVuJywgdHJ1ZSl9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1Ecm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1Ecm9wRG93bi5jbGFzc05hbWUgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdib2R5X3dyYXAnKTtcbiAgICAgICAgdGhpcy5lbGVtTGlzdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0aGlzLmVsZW1MaXN0Qm9keS5jbGFzc05hbWUgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdsaXN0Jyk7XG4gICAgICAgIC8qKiBzdGFydCBNdWx0aVNlbGVjdCBkZWJvdW5jZSBhbmltYXRlIHN0YXR1cyAqL1xuICAgICAgICBpZiAodGhpcy5pc011bHRpICYmIHRoaXMuaXNEZWJvdW5jZVN0YXR1c0JhciAmJiB0aGlzLm11bHRpRGVib3VuY2VUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1EZWJvdW5jZVByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1EZWJvdW5jZVByb2dyZXNzQmFyLmNsYXNzTmFtZSA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2RlYm91bmNlX3Byb2dyZXNzX2JhcicpO1xuICAgICAgICAgICAgdGhpcy5lbGVtRHJvcERvd24uYXBwZW5kKHRoaXMuZWxlbURlYm91bmNlUHJvZ3Jlc3NCYXIpO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBlbmQgTXVsdGlTZWxlY3QgZGVib3VuY2UgYW5pbWF0ZSBzdGF0dXMgKi9cbiAgICAgICAgdGhpcy5lbGVtRHJvcERvd25XcmFwLmFwcGVuZCh0aGlzLmVsZW1Ecm9wRG93bik7XG4gICAgICAgIHRoaXMuZWxlbVdyYXAuYXBwZW5kQ2hpbGQodGhpcy5lbGVtRHJvcERvd25XcmFwKTtcbiAgICAgICAgdGhpcy5lbGVtRHJvcERvd24uYXBwZW5kQ2hpbGQodGhpcy5lbGVtTGlzdEJvZHkpO1xuICAgICAgICB0aGlzLmVsZW1Ecm9wRG93bkNsb3NlID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmNyZWF0ZUJ1dHRvbikoKTtcbiAgICAgICAgdGhpcy5lbGVtRHJvcERvd25DbG9zZS5jbGFzc0xpc3QuYWRkKCgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2Nsb3NlJykpO1xuICAgICAgICB0aGlzLmVsZW1Ecm9wRG93bi5hcHBlbmRDaGlsZCh0aGlzLmVsZW1Ecm9wRG93bkNsb3NlKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJc0NvbmZpcm1Jbk11bHRpSFRNTCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZWxlbURyb3BEb3duV3JhcC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XG4gICAgICAgIC8vICAgY29uc3QgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICAgICAgLy8gICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuZWxlbURyb3BEb3duV3JhcCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICBjb25zdCBhdEJvdHRvbSA9IGRlbHRhID4gMCAmJiBzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAvLyAgIGNvbnN0IGF0VG9wID0gZGVsdGEgPCAwICYmIHNjcm9sbFRvcCA8PSAwO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIGlmIChhdEJvdHRvbSB8fCBhdFRvcCkge1xuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ2hhbmdlQ2hlY2tlZCgpO1xuICAgIH1cbiAgICBjcmVhdGVJc0NvbmZpcm1Jbk11bHRpSFRNTCgpIHtcbiAgICAgICAgdGhpcy5jb25maXJtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjbGFzc2VzSXRlbSA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2JvdHRvbV9jb250cm9sJyk7XG4gICAgICAgIHRoaXMuY29uZmlybU9rID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmNyZWF0ZUJ1dHRvbikoKTtcbiAgICAgICAgdGhpcy5jb25maXJtTm8gPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuY3JlYXRlQnV0dG9uKSgpO1xuICAgICAgICB0aGlzLmNvbmZpcm1XcmFwLmFwcGVuZENoaWxkKHRoaXMuY29uZmlybU9rKTtcbiAgICAgICAgdGhpcy5jb25maXJtV3JhcC5hcHBlbmRDaGlsZCh0aGlzLmNvbmZpcm1Obyk7XG4gICAgICAgIHRoaXMuY29uZmlybU9rLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5sb2NhbGUub2s7XG4gICAgICAgIHRoaXMuY29uZmlybU5vLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5sb2NhbGUuY2FuY2VsO1xuICAgICAgICB0aGlzLmNvbmZpcm1Pay5jbGFzc05hbWUgPSBgJHtjbGFzc2VzSXRlbX0gJHsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdvaycsIHRydWUsIGNsYXNzZXNJdGVtKX1gO1xuICAgICAgICB0aGlzLmNvbmZpcm1Oby5jbGFzc05hbWUgPSBgJHtjbGFzc2VzSXRlbX0gJHsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdubycsIHRydWUsIGNsYXNzZXNJdGVtKX1gO1xuICAgICAgICBsZXQgY2xhc3NlcyA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2JvdHRvbV9jb250cm9scycpO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pc0NvbmZpcm1Jbk11bHRpKSB7XG4gICAgICAgICAgICBjbGFzc2VzICs9IGAgJHsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdoaWRlJywgdHJ1ZSwgY2xhc3Nlcyl9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpcm1XcmFwLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gICAgICAgIHRoaXMuZWxlbURyb3BEb3duPy5hcHBlbmRDaGlsZCh0aGlzLmNvbmZpcm1XcmFwKTtcbiAgICB9XG4gICAgY3JlYXRlVGl0bGVIVE1MKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzUmVtb3ZlVG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmVsZW1UaXRsZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBjbGFzc2VzVGl0bGUgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCd0aXRsZScpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc09ubHlQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIGNsYXNzZXNUaXRsZSArPSBgICR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnb25seS1wbGFjZWhvbGRlcicsIHRydWUsIGNsYXNzZXNUaXRsZSl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWxlbVRpdGxlLmNsYXNzTmFtZSA9IGNsYXNzZXNUaXRsZTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWxlbVRvcEJvZHkucHJlcGVuZCh0aGlzLmVsZW1UaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1Ub3BCb2R5Lmluc2VydEJlZm9yZSh0aGlzLmVsZW1UaXRsZSwgdGhpcy5lbGVtVG9wQm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtc0NoZWNrZWQgPSB0aGlzLmdldENoZWNrZWQoKTtcbiAgICAgICAgdGhpcy5lbGVtVG9wLnRpdGxlID0gJyc7XG4gICAgICAgIGNvbnN0IGlzUGxhY2Vob2xkZXIgPSAhaXRlbXNDaGVja2VkLmxlbmd0aDtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy50aXRsZVBsYWNlaG9sZGVyO1xuICAgICAgICBpZiAoaXRlbXNDaGVja2VkLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25zLmlzT25seVBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICBsZXQgYXR0clRpdGxlID0gJyc7XG4gICAgICAgICAgICBsZXQgYXR0clRpdGxlVGV4dCA9ICcnO1xuICAgICAgICAgICAgaXRlbXNDaGVja2VkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJUaXRsZSArPSBgJHt0aGlzLm9wdGlvbnMuc2VwQ2hhcnN9PHNwYW4gY2xhc3M9XCIkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ3NlcF9zcGFjZScsIHRydWUpfVwiPiZuYnNwOzwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICBhdHRyVGl0bGVUZXh0ICs9IGAke3RoaXMub3B0aW9ucy5zZXBDaGFyc30gYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0clRpdGxlICs9IGAke2l0ZW0udGl0bGV9YDtcbiAgICAgICAgICAgICAgICBhdHRyVGl0bGVUZXh0ICs9IGAke2l0ZW0udGl0bGV9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXRUaXRsZSkge1xuICAgICAgICAgICAgICAgIGF0dHJUaXRsZVRleHQgPSB0aGlzLm9wdGlvbnMuZm9ybWF0VGl0bGUoYXR0clRpdGxlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuaXNOZWVkRm9ybWF0VGl0bGUpIHtcbiAgICAgICAgICAgICAgICBhdHRyVGl0bGVUZXh0ID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmRlY29kZUh0bWxFbnRpdGllcykoYXR0clRpdGxlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1Ub3AudGl0bGUgPSBhdHRyVGl0bGVUZXh0O1xuICAgICAgICAgICAgbGV0IG1heFNob3cgPSB0aGlzLm9wdGlvbnMuY291bnRTaG93U2VsZWN0ZWQ7XG4gICAgICAgICAgICBjb25zdCBtYXhTaG93QXR0ciA9IE51bWJlcih0aGlzLiRzZWxlY3QuZGF0YXNldC5zaW1wbGVDb3VudFNob3dzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgaWYgKG1heFNob3dBdHRyICYmIG1heFNob3dBdHRyID4gMCkge1xuICAgICAgICAgICAgICAgIG1heFNob3cgPSBtYXhTaG93QXR0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtc0NoZWNrZWQubGVuZ3RoID4gbWF4U2hvdykge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gYCR7dGhpcy5vcHRpb25zLmxvY2FsZS5zZWxlY3RlZH0gJHtpdGVtc0NoZWNrZWQubGVuZ3RofWA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKS5sZW5ndGggPT09IGl0ZW1zQ2hlY2tlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgKz0gYCAoJHt0aGlzLm9wdGlvbnMubG9jYWxlLmFsbH0pYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhdHRyVGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGF0dHJUaXRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1UaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgaWYgKGlzUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ1NpbXBsZVNlbF9fdGl0bGUtLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdTaW1wbGVTZWxfX3RpdGxlLS1maWxsJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnZmlsbCcsIHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ1NpbXBsZVNlbF9fdGl0bGUtLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdTaW1wbGVTZWxfX3RpdGxlLS1maWxsJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1XcmFwLmNsYXNzTGlzdC5hZGQoKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnZmlsbCcsIHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWx0ZXJMaXN0KCkge1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgnZmlsdGVyU3RyJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1zSW5pdCA9IHRoaXMuc3RhdGUuZ2V0U3RhdGUoJ2l0ZW1zJyk7XG4gICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXNJbml0O1xuICAgICAgICB9XG4gICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpdGVtcyA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5jbG9uZU9iaikoaXRlbXNJbml0KTtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGxldCBpc1Nob3dHcm91cCA9IGZhbHNlO1xuICAgICAgICAgICAgZ3JvdXAuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTaG93R3JvdXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzU2hvd0ZpbHRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzU2hvd0ZpbHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ3JvdXAuaXNTaG93RmlsdGVyID0gaXNTaG93R3JvdXA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICAgIGNyZWF0ZUxpc3RIVE1MKGlzRmlsdGVyID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1MaXN0Qm9keSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNCb2R5TGlzdCA9ICcnO1xuICAgICAgICBsZXQgY291bnRTaG93SXRlbSA9IDA7XG4gICAgICAgIGxldCBjb3VudENoZWNrZWRJdGVtcyA9IDA7XG4gICAgICAgIGxldCBjb3VudENoZWNrZWRGdWxsSXRlbXMgPSAwO1xuICAgICAgICBjb25zdCBpdGVtcyA9IGlzRmlsdGVyID8gdGhpcy5maWx0ZXJMaXN0KCkgOiB0aGlzLnN0YXRlLmdldFN0YXRlKCdpdGVtcycpO1xuICAgICAgICBjb25zdCBkYXRhRm9yQ29tcGFyZSA9IFtdO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgZ3JvdXAuaXRlbXMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGFGb3JDb21wYXJlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogaS5jaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaS5kaXNhYmxlZCB8fCAhIWdyb3VwLmlzRGlzYWJsZWRHcm91cCxcbiAgICAgICAgICAgICAgICAgICAgaXNTaG93RmlsdGVyOiBpLmlzU2hvd0ZpbHRlcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFncm91cC5pc0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXN1bHQsIGNvdW50U2hvdywgY291bnRDaGVja2VkLCBjb3VudENoZWNrZWRGdWxsLCB9ID0gdGhpcy5jcmVhdGVMaShncm91cCk7XG4gICAgICAgICAgICAgICAgcmVzQm9keUxpc3QgKz0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvdW50U2hvd0l0ZW0gKz0gY291bnRTaG93O1xuICAgICAgICAgICAgICAgIGNvdW50Q2hlY2tlZEl0ZW1zICs9IGNvdW50Q2hlY2tlZDtcbiAgICAgICAgICAgICAgICBjb3VudENoZWNrZWRGdWxsSXRlbXMgKz0gY291bnRDaGVja2VkRnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0LCBjb3VudFNob3csIGNvdW50Q2hlY2tlZCwgY291bnRDaGVja2VkRnVsbCwgfSA9IHRoaXMuY3JlYXRlTGkoZ3JvdXApO1xuICAgICAgICAgICAgICAgIGxldCBncm91cEF0dHJzID0gYGRhdGEtY291bnQtc2hvdz1cIiR7Y291bnRTaG93fVwiIGA7XG4gICAgICAgICAgICAgICAgZ3JvdXBBdHRycyArPSBgZGF0YS1jb3VudC1jaGVja2VkPVwiJHtjb3VudENoZWNrZWR9XCIgYDtcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NHcm91cCA9ICgwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2dyb3VwX2l0ZW1zJyk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwLmlzRGlzYWJsZWRHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc0dyb3VwICs9IGAgJHsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdkaXNhYmxlZCcsIHRydWUsIGNsYXNzR3JvdXApfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc0JvZHlMaXN0ICs9IGA8ZGl2IGNsYXNzPVwiJHtjbGFzc0dyb3VwfVwiICR7Z3JvdXBBdHRyc30gZGF0YS1zaW1wbGUtc2VsZWN0LWdydW9wPmA7XG4gICAgICAgICAgICAgICAgcmVzQm9keUxpc3QgKz0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlc0JvZHlMaXN0ICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIGNvdW50Q2hlY2tlZEl0ZW1zICs9IGNvdW50Q2hlY2tlZDtcbiAgICAgICAgICAgICAgICBjb3VudFNob3dJdGVtICs9IGNvdW50U2hvdztcbiAgICAgICAgICAgICAgICBjb3VudENoZWNrZWRGdWxsSXRlbXMgKz0gY291bnRDaGVja2VkRnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGlzU2VhcmNoID0gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgnZmlsdGVyU3RyJyk7XG4gICAgICAgIGlmIChpc1NlYXJjaCAmJiBpc1NlYXJjaC5sZW5ndGggJiYgY291bnRTaG93SXRlbSA9PT0gMCkge1xuICAgICAgICAgICAgcmVzQm9keUxpc3QgPSBgPGRpdiBjbGFzcz1cIiR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnbm9fbWF0Y2gnKX1cIj5gO1xuICAgICAgICAgICAgcmVzQm9keUxpc3QgPSBgJHt0aGlzLm9wdGlvbnMubG9jYWxlLm5vU2VhcmNofSBcIiR7aXNTZWFyY2h9XCJgO1xuICAgICAgICAgICAgcmVzQm9keUxpc3QgKz0gJzwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtV3JhcC5kYXRhc2V0LmNvdW50Q2hlY2tlZCA9IGNvdW50Q2hlY2tlZEl0ZW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuZWxlbVdyYXAuZGF0YXNldC5jb3VudENoZWNrZWRGdWxsID0gY291bnRDaGVja2VkRnVsbEl0ZW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbVdyYXAuZGF0YXNldC5jaGVja0FsbE11bHRpID0gKHRoaXMuJHNlbGVjdC5vcHRpb25zLmxlbmd0aCA9PT0gY291bnRDaGVja2VkSXRlbXMpID8gJ3llcycgOiAnbm8nO1xuICAgICAgICB9XG4gICAgICAgIHJlc0JvZHlMaXN0ID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnJlbW92ZUV4dHJhU3BhY2VzKShyZXNCb2R5TGlzdCk7XG4gICAgICAgIGNvbnN0IGRhdGFGb3JDb21wYXJlMiA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1MaXN0Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zZWwtb3B0LWl0ZW1dJykuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgZGF0YUZvckNvbXBhcmUyLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBpLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWwtdmFsdWUnKSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBpLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWwtb3B0LWNoZWNrZWQnKSA9PT0gJ3RydWUnLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWwtb3B0LWRpc2FibGVkJykgPT09ICd0cnVlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgKCFjb21wYXJlU3RyaW5nV2l0aENsZWFyU3BhY2UodGhpcy5lbGVtTGlzdEJvZHkuaW5uZXJIVE1MLCByZXNCb2R5TGlzdCkpIHtcbiAgICAgICAgaWYgKCEoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuY29tcGFyZU9iaikoZGF0YUZvckNvbXBhcmUsIGRhdGFGb3JDb21wYXJlMikpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbUxpc3RCb2R5LmlubmVySFRNTCA9IHJlc0JvZHlMaXN0O1xuICAgICAgICAgICAgKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLnRyaWdnZXJDdXN0b21FdmVudCkodGhpcy4kc2VsZWN0LCAnY3JlYXRlTGlzdEJ1aWxkJywge1xuICAgICAgICAgICAgICAgIGl0ZW06IHRoaXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVJbnB1dEhUTUwoKSB7XG4gICAgICAgIGxldCB7IGlzU2VhcmNoIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGxldCB7IGlzU2VhcmNoSW5Ecm9wZG93biB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAoJ3NpbXBsZVNlbGVjdFNlYXJjaCcgaW4gdGhpcy4kc2VsZWN0LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGlzU2VhcmNoID0gdGhpcy4kc2VsZWN0LmRhdGFzZXQuc2ltcGxlU2VsZWN0U2VhcmNoICE9PSAnZmFsc2UnO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc2ltcGxlU2VsZWN0U2VhcmNoRHJvcGRvd24nIGluIHRoaXMuJHNlbGVjdC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBpc1NlYXJjaEluRHJvcGRvd24gPSB0aGlzLiRzZWxlY3QuZGF0YXNldC5zaW1wbGVTZWxlY3RTZWFyY2hEcm9wZG93biAhPT0gJ2ZhbHNlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzU2VhcmNoICYmICFpc1NlYXJjaEluRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1JbnB1dFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuZWxlbUlucHV0U2VhcmNoLnR5cGUgPSB0aGlzLm9wdGlvbnMuc2VhcmNoVHlwZUlucHV0O1xuICAgICAgICB0aGlzLmVsZW1JbnB1dFNlYXJjaC50YWJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmVsZW1JbnB1dFNlYXJjaC5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICAgICAgdGhpcy5lbGVtSW5wdXRTZWFyY2guYXJpYUF1dG9Db21wbGV0ZSA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtSW5wdXRTZWFyY2guaW5wdXRNb2RlID0gJ29mZic7XG4gICAgICAgIHRoaXMuZWxlbUlucHV0U2VhcmNoLnBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLmxvY2FsZS5zZWFyY2hUZXh0O1xuICAgICAgICB0aGlzLmVsZW1JbnB1dFNlYXJjaC5uYW1lID0gYCR7c2ltcGxlU2VsZWN0aW9uX2NvbnN0XzEuaW5pdENsYXNzfV9uYW1lXyR7dGhpcy5pZH1gO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdzZWFyY2gnKTtcbiAgICAgICAgaWYgKGlzU2VhcmNoSW5Ecm9wZG93bikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbURyb3BEb3duKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3JhcFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHdyYXBTZWFyY2guY2xhc3NOYW1lID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnc2VhcmNoX3dyYXAnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1JbnB1dFNlYXJjaC5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnZHJvcGRvd24nLCB0cnVlLCBjbGFzc05hbWUpfWA7XG4gICAgICAgICAgICAgICAgd3JhcFNlYXJjaC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1JbnB1dFNlYXJjaCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbGVtRHJvcERvd24ucHJlcGVuZCh0aGlzLmVsZW1JbnB1dFNlYXJjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtRHJvcERvd24uaW5zZXJ0QmVmb3JlKHdyYXBTZWFyY2gsIHRoaXMuZWxlbURyb3BEb3duLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtSW5wdXRTZWFyY2guY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ3RvcCcsIHRydWUsIGNsYXNzTmFtZSl9YDtcbiAgICAgICAgICAgIHRoaXMuZWxlbVRvcC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1JbnB1dFNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFNlYXJjaEhhbmRsZXIoKTtcbiAgICB9XG4gICAgZ2V0Q2hlY2tlZCgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLmdldFN0YXRlKCdpdGVtcycpO1xuICAgICAgICBsZXQgcmVzID0gW107XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICByZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4ucmVzLFxuICAgICAgICAgICAgICAgIC4uLmdyb3VwLml0ZW1zLmZpbHRlcigoaSkgPT4gaS5jaGVja2VkKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBjcmVhdGVMaShkYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgbGV0IGNvdW50U2hvdyA9IDA7XG4gICAgICAgIGxldCBjb3VudENoZWNrZWQgPSAwO1xuICAgICAgICBsZXQgY291bnRDaGVja2VkRnVsbCA9IDA7XG4gICAgICAgIGlmICghZGF0YS5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LCBjb3VudFNob3csIGNvdW50Q2hlY2tlZCwgY291bnRDaGVja2VkRnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuaXNHcm91cCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzR3JvdXAgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdncm91cCcpO1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNEaXNhYmxlZEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NHcm91cCArPSBgICR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnZGlzYWJsZWQnLCB0cnVlLCBjbGFzc0dyb3VwKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ICs9IGA8ZGl2IGNsYXNzPVwiJHsoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdncm91cF90aXRsZScpfVwiPiR7ZGF0YS50aXRsZUdyb3VwfTwvZGl2PmA7XG4gICAgICAgICAgICByZXN1bHQgKz0gYDx1bCBjbGFzcz1cIiR7Y2xhc3NHcm91cH1cIj5gO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuaXRlbXMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFNob3crKztcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTGlJbml0ID0gKDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnbGlzdF9pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZFJlcyA9ICEhKG9wdGlvbi5kaXNhYmxlZCB8fCBkYXRhLmlzRGlzYWJsZWRHcm91cCk7XG4gICAgICAgICAgICBsZXQgY2xhc3NMaSA9IGNsYXNzTGlJbml0O1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgY291bnRDaGVja2VkKys7XG4gICAgICAgICAgICAgICAgY2xhc3NMaSArPSBgICR7KDAsIHNpbXBsZVNlbGVjdGlvbl91dGlsc18xLmdldENsYXNzKSgnY2hlY2tlZCcsIHRydWUsIGNsYXNzTGlJbml0KX1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRDaGVja2VkRnVsbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXNhYmxlZFJlcykge1xuICAgICAgICAgICAgICAgIGNsYXNzTGkgKz0gYCAkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2Rpc2FibGVkJywgdHJ1ZSwgY2xhc3NMaUluaXQpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTGkgKz0gYCAkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ25vdF92YWx1ZScsIHRydWUsIGNsYXNzTGlJbml0KX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFBdHRyID0gYGRhdGEtc2VsLWdyb3VwLWlkPVwiJHtkYXRhLmlkR3JvdXB9XCJgO1xuICAgICAgICAgICAgZGF0YUF0dHIgKz0gJ2RhdGEtc2VsLW9wdC1pdGVtJztcbiAgICAgICAgICAgIGRhdGFBdHRyICs9IGAgZGF0YS1zZWwtcG9zaXRpb249XCIke29wdGlvbi5wb3NpdGlvbn1cImA7XG4gICAgICAgICAgICBkYXRhQXR0ciArPSBgIGRhdGEtc2VsLWlkPVwiJHtvcHRpb24uaWR9XCJgO1xuICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGFBdHRyICs9IGAgZGF0YS1zZWwtdmFsdWU9XCIke29wdGlvbi52YWx1ZX1cImA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhQXR0ciArPSBgIGRhdGEtc2VsLW9wdC1jaGVja2VkPVwiJHtvcHRpb24uY2hlY2tlZH1cImA7XG4gICAgICAgICAgICBkYXRhQXR0ciArPSBgIGRhdGEtc2VsLW9wdC1kaXNhYmxlZD1cIiR7ZGlzYWJsZWRSZXN9XCJgO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc0Fsd2F5c09wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZWRSZXMgJiYgIXRoaXMub3B0aW9ucy5pc0Fsd2F5c09wZW5TaG93RGlzYWJsZWRUYWJpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhQXR0ciArPSAnIHRhYmluZGV4PVwiLTFcIic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhQXR0ciArPSAnIHRhYmluZGV4PVwiMFwiJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhQXR0ciArPSAnIHRhYmluZGV4PVwiLTFcIic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gYDxsaSAgY2xhc3M9XCIke2NsYXNzTGl9XCIgJHtkYXRhQXR0cn0+YDtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUxpQm9keVJlcyA9IHRoaXMuY3JlYXRlTGlCb2R5KG9wdGlvbiwgdGhpcy4kc2VsZWN0Lm9wdGlvbnNbb3B0aW9uLnBvc2l0aW9uXSk7XG4gICAgICAgICAgICByZXN1bHQgKz0gdHlwZW9mIGNyZWF0ZUxpQm9keVJlcyA9PT0gJ3N0cmluZycgPyBjcmVhdGVMaUJvZHlSZXMgOiBjcmVhdGVMaUJvZHlSZXMub3V0ZXJIVE1MO1xuICAgICAgICAgICAgcmVzdWx0ICs9ICc8L2xpPic7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGF0YS5pc0dyb3VwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJzwvdWw+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdWx0LCBjb3VudFNob3csIGNvdW50Q2hlY2tlZCwgY291bnRDaGVja2VkRnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY3JlYXRlTGlCb2R5KG9wdGlvbiwgb3B0aW9uTmF0aXZlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuZ2V0Q2xhc3MpKCdsaXN0X2l0ZW1fYm9keScpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGlmICh0aGlzLmlzU2hvd0NoZWNrYm94KSB7XG4gICAgICAgICAgICByZXMgPSBgPHNwYW4gY2xhc3M9XCIkeygwLCBzaW1wbGVTZWxlY3Rpb25fdXRpbHNfMS5nZXRDbGFzcykoJ2xpc3RfaXRlbV9pY29uJyl9XCI+PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm9keUxpSFRNTEJlZm9yZUZyb21TZWxlY3QpIHtcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLmJvZHlMaUhUTUxCZWZvcmVGcm9tU2VsZWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25OYXRpdmUuaGFzQXR0cmlidXRlKCdkYXRhLXNpbXBsZS1odG1sLWJlZm9yZScpKSB7XG4gICAgICAgICAgICByZXMgKz0gb3B0aW9uTmF0aXZlLmdldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGUtaHRtbC1iZWZvcmUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXMgKz0gYCR7b3B0aW9uLnRpdGxlfWA7XG4gICAgICAgIGlmICh0aGlzLmJvZHlMaUhUTUxBZnRlckZyb21TZWxlY3QpIHtcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLmJvZHlMaUhUTUxBZnRlckZyb21TZWxlY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbk5hdGl2ZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlLWh0bWwtYWZ0ZXInKSkge1xuICAgICAgICAgICAgcmVzICs9IG9wdGlvbk5hdGl2ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlLWh0bWwtYWZ0ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmlubmVySFRNTCA9IHJlcztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaGFuZ2VCb2R5TGkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2hhbmdlQm9keUxpKGl0ZW0sIG9wdGlvbk5hdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIGhhbmRsZXJDaGFuZ2VDaGVja2VkKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIG1ldGhvZCBuZWVkIHJlZGVmaW5lJyk7XG4gICAgfVxuICAgIC8vIG9ubHkgZGVza3RvcFxuICAgIGNyZWF0ZUxpc3QoX2lzQ29tcGFyZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIG1ldGhvZCBuZWVkIHJlZGVmaW5lJyk7XG4gICAgfVxuICAgIC8vIG9ubHkgZGVza3RvcFxuICAgIGlucHV0U2VhcmNoSGFuZGxlcigpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhpcyBtZXRob2QgbmVlZCByZWRlZmluZScpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2ltcGxlU2VsZWN0SXRlbURPTSA9IFNpbXBsZVNlbGVjdEl0ZW1ET007XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZXhwb3J0cy5jcmVhdGVCdXR0b24gPSBleHBvcnRzLmNsb25lT2JqID0gZXhwb3J0cy5jb21wYXJlT2JqID0gZXhwb3J0cy5nZXRDbGFzcyA9IGV4cG9ydHMuZ2V0Q3JlYXRlTGlzdEl0ZW0gPSBleHBvcnRzLmNyZWF0ZU9wdGlvbkl0ZW1zID0gZXhwb3J0cy5nZXRDcmVhdGVJdGVtID0gZXhwb3J0cy50cmlnZ2VySW5wdXRFdmVudCA9IGV4cG9ydHMudHJpZ2dlckN1c3RvbUV2ZW50ID0gZXhwb3J0cy5pZlRydWVEYXRhQXR0ciA9IGV4cG9ydHMuY3JlYXRlRGF0YUF0dHIgPSBleHBvcnRzLmNvbXBhcmVTdHJpbmdXaXRoQ2xlYXJTcGFjZSA9IGV4cG9ydHMuY2xlYXJTcGFjZUFuZEVtcHR5QXR0ciA9IGV4cG9ydHMucmVtb3ZlRXh0cmFTcGFjZXMgPSBleHBvcnRzLnRvQ2FtZWxDYXNlID0gdm9pZCAwO1xuY29uc3Qgc2ltcGxlU2VsZWN0aW9uX2NvbnN0XzEgPSByZXF1aXJlKFwiLi4vY29uc3Qvc2ltcGxlU2VsZWN0aW9uLmNvbnN0XCIpO1xuY29uc3QgdG9DYW1lbENhc2UgPSAoaW5wdXQpID0+IGlucHV0LnJlcGxhY2UoLy0oW2Etel0pL2csIChfLCBsZXR0ZXIpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKTtcbmV4cG9ydHMudG9DYW1lbENhc2UgPSB0b0NhbWVsQ2FzZTtcbmNvbnN0IHJlbW92ZUV4dHJhU3BhY2VzID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XG5leHBvcnRzLnJlbW92ZUV4dHJhU3BhY2VzID0gcmVtb3ZlRXh0cmFTcGFjZXM7XG5jb25zdCBjbGVhclNwYWNlQW5kRW1wdHlBdHRyID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoL1xccyt8PVwiXCIvZywgJycpO1xuZXhwb3J0cy5jbGVhclNwYWNlQW5kRW1wdHlBdHRyID0gY2xlYXJTcGFjZUFuZEVtcHR5QXR0cjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5jb25zdCBjb21wYXJlU3RyaW5nV2l0aENsZWFyU3BhY2UgPSAoc3RyMSwgc3RyMikgPT4gKDAsIGV4cG9ydHMuY2xlYXJTcGFjZUFuZEVtcHR5QXR0cikoc3RyMSkgPT09ICgwLCBleHBvcnRzLmNsZWFyU3BhY2VBbmRFbXB0eUF0dHIpKHN0cjIpO1xuZXhwb3J0cy5jb21wYXJlU3RyaW5nV2l0aENsZWFyU3BhY2UgPSBjb21wYXJlU3RyaW5nV2l0aENsZWFyU3BhY2U7XG5jb25zdCBjcmVhdGVEYXRhQXR0ciA9IChuYW1lKSA9PiBgZGF0YS0ke25hbWV9YDtcbmV4cG9ydHMuY3JlYXRlRGF0YUF0dHIgPSBjcmVhdGVEYXRhQXR0cjtcbmNvbnN0IGlmVHJ1ZURhdGFBdHRyID0gKGF0dHIpID0+IHtcbiAgICBpZiAoIWF0dHIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYXR0ciA9PT0gJ3RydWUnIHx8IGF0dHIgPT09ICcxJztcbn07XG5leHBvcnRzLmlmVHJ1ZURhdGFBdHRyID0gaWZUcnVlRGF0YUF0dHI7XG5mdW5jdGlvbiB0cmlnZ2VyQ3VzdG9tRXZlbnQoZWxlbWVudCwgdHlwZSwgZGF0YSkge1xuICAgIGNvbnN0IG15Q3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoYHNpbXBTZWxlY3Q6JHt0eXBlfWAsIHtcbiAgICAgICAgZGV0YWlsOiBkYXRhLFxuICAgIH0pO1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChteUN1c3RvbUV2ZW50KTtcbn1cbmV4cG9ydHMudHJpZ2dlckN1c3RvbUV2ZW50ID0gdHJpZ2dlckN1c3RvbUV2ZW50O1xuZnVuY3Rpb24gdHJpZ2dlcklucHV0RXZlbnQoZWxlbWVudCwgdHlwZSA9ICdjaGFuZ2UnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy50cmlnZ2VySW5wdXRFdmVudCA9IHRyaWdnZXJJbnB1dEV2ZW50O1xuY29uc3QgZ2V0Q3JlYXRlSXRlbSA9IChvcHRpb24sIGluZGV4KSA9PiAoe1xuICAgIGlkOiAoaW5kZXggKyAxKS50b1N0cmluZygpLFxuICAgIHBvc2l0aW9uOiBvcHRpb24uaW5kZXgsXG4gICAgdGl0bGU6IG9wdGlvbi5pbm5lckhUTUwsXG4gICAgdmFsdWU6IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyksXG4gICAgY2hlY2tlZDogb3B0aW9uLnNlbGVjdGVkLFxuICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgaXNTaG93RmlsdGVyOiB0cnVlLFxufSk7XG5leHBvcnRzLmdldENyZWF0ZUl0ZW0gPSBnZXRDcmVhdGVJdGVtO1xuY29uc3QgY3JlYXRlT3B0aW9uSXRlbXMgPSAoaXNHcm91cCwgaWRHcm91cCwgaXRlbXMsIGlzU2hvd0ZpbHRlciA9IHRydWUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc0dyb3VwLFxuICAgICAgICBpZEdyb3VwLFxuICAgICAgICBpdGVtcyxcbiAgICAgICAgaXNTaG93RmlsdGVyOiB0cnVlLFxuICAgIH07XG59O1xuZXhwb3J0cy5jcmVhdGVPcHRpb25JdGVtcyA9IGNyZWF0ZU9wdGlvbkl0ZW1zO1xuY29uc3QgZ2V0Q3JlYXRlTGlzdEl0ZW0gPSAoaXRlbSwgaWRHcm91cCwgaXNHcm91cCkgPT4ge1xuICAgIC8vINCV0YHQu9C4INC10YHRgtGMINCz0YDRg9C/0L/Riywg0L3QviDQvNC+0LbQtdGCINCx0YvRgtGMIG9wdGlvbiDQstC90LUg0LPRgNGD0L/Qv9GLXG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gKDAsIGV4cG9ydHMuY3JlYXRlT3B0aW9uSXRlbXMpKGlzR3JvdXAsIGlkR3JvdXAsIFsoMCwgZXhwb3J0cy5nZXRDcmVhdGVJdGVtKShpdGVtLCAxKV0sIHRydWUpO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uLCBpbmQpID0+IHtcbiAgICAgICAgaXRlbXMucHVzaCgoMCwgZXhwb3J0cy5nZXRDcmVhdGVJdGVtKShvcHRpb24sIGluZCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSAoMCwgZXhwb3J0cy5jcmVhdGVPcHRpb25JdGVtcykoaXNHcm91cCwgaWRHcm91cCwgaXRlbXMsIHRydWUpO1xuICAgIGlmIChpdGVtIGluc3RhbmNlb2YgSFRNTE9wdEdyb3VwRWxlbWVudCkge1xuICAgICAgICBuZXdJdGVtLnRpdGxlR3JvdXAgPSBpdGVtLmxhYmVsIHx8ICcnO1xuICAgICAgICBuZXdJdGVtLmlzRGlzYWJsZWRHcm91cCA9IGl0ZW0uZGlzYWJsZWQgfHwgZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBuZXdJdGVtO1xufTtcbmV4cG9ydHMuZ2V0Q3JlYXRlTGlzdEl0ZW0gPSBnZXRDcmVhdGVMaXN0SXRlbTtcbmNvbnN0IGdldENsYXNzID0gKGNscywgbW9kID0gZmFsc2UsIGNsYXNzSW5pdCA9IHNpbXBsZVNlbGVjdGlvbl9jb25zdF8xLmluaXRDbGFzcykgPT4ge1xuICAgIGNvbnN0IHNlcCA9IG1vZCA/ICctLScgOiAnX18nO1xuICAgIHJldHVybiBgJHtjbGFzc0luaXR9JHtzZXB9JHtjbHN9YDtcbn07XG5leHBvcnRzLmdldENsYXNzID0gZ2V0Q2xhc3M7XG5jb25zdCBjb21wYXJlT2JqID0gKG9iajEsIG9iajIpID0+IEpTT04uc3RyaW5naWZ5KG9iajEpID09PSBKU09OLnN0cmluZ2lmeShvYmoyKTtcbmV4cG9ydHMuY29tcGFyZU9iaiA9IGNvbXBhcmVPYmo7XG5jb25zdCBjbG9uZU9iaiA9IChvYmopID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5leHBvcnRzLmNsb25lT2JqID0gY2xvbmVPYmo7XG5jb25zdCBjcmVhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidG4udGFiSW5kZXggPSAtMTtcbiAgICByZXR1cm4gYnRuO1xufTtcbmV4cG9ydHMuY3JlYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uO1xuY29uc3QgZGVjb2RlSHRtbEVudGl0aWVzID0gKHN0cikgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIGRpdi50ZXh0Q29udGVudCB8fCBkaXYuaW5uZXJUZXh0IHx8ICcnO1xufTtcbmV4cG9ydHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZGVjb2RlSHRtbEVudGl0aWVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlID0gdm9pZCAwO1xuZnVuY3Rpb24gc3RvcmUob2JqKSB7XG4gICAgY29uc3Qgc3RhdGVEYXRhID0ge307XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcbiAgICBsZXQgc3Vic2NyaWJlcnNBbGwgPSBbXTtcbiAgICBjb25zdCBnZXRTdGF0ZSA9IChrKSA9PiB7XG4gICAgICAgIGlmICghaykge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShrIGluIHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZURhdGFba107XG4gICAgfTtcbiAgICBjb25zdCBzZXRTdGF0ZSA9IChrLCB2YWwpID0+IHtcbiAgICAgICAgY29uc3QgcHJldlN0YXRlID0geyAuLi5zdGF0ZURhdGEgfTtcbiAgICAgICAgY29uc3QgcHJldiA9IHN0YXRlRGF0YVtrXSB8fCBzdGF0ZURhdGFba10gPT0gMCA/IHN0YXRlRGF0YVtrXSA6IG51bGw7XG4gICAgICAgIHN0YXRlRGF0YVtrXSA9IHZhbDtcbiAgICAgICAgaWYgKGsgaW4gc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzW2tdLmZvckVhY2goKGNiKSA9PiBjYih2YWwsIHByZXYsIHN0YXRlRGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXJzQWxsLmZvckVhY2goKGNiKSA9PiBjYihrLCBwcmV2U3RhdGUsIHN0YXRlRGF0YSkpO1xuICAgIH07XG4gICAgaWYgKG9iaikge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNldFN0YXRlKGssIG9ialtrXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTdGF0ZSxcbiAgICAgICAgc2V0U3RhdGUsXG4gICAgICAgIHN1YnNjcmliZShrLCBjYikge1xuICAgICAgICAgICAgaWYgKCEoayBpbiBzdWJzY3JpYmVycykpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyc1trXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaWJlcnNba10ucHVzaChjYik7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSBnZXRTdGF0ZShrKTtcbiAgICAgICAgICAgIGNiKGN1ciwgbnVsbCwgZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzW2tdID0gc3Vic2NyaWJlcnNba10uZmlsdGVyKChpKSA9PiBpICE9PSBjYik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzdWJzY3JpYmVBbGwoY2IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzQWxsLnB1c2goY2IpO1xuICAgICAgICAgICAgY2IobnVsbCwgbnVsbCwgZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzQWxsID0gc3Vic2NyaWJlcnNBbGwuZmlsdGVyKChpKSA9PiBpICE9PSBjYik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB1blN1YnNjcmliZShrLCBjYikge1xuICAgICAgICAgICAgaWYgKGsgaW4gc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyc1trXSA9IHN1YnNjcmliZXJzW2tdLmZpbHRlcigoaSkgPT4gaSAhPT0gY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNpbXBsZVNlbGVjdGlvbl9jb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3Qvc2ltcGxlU2VsZWN0aW9uLmNvbnN0XCIpO1xuY29uc3Qgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy9zaW1wbGVTZWxlY3Rpb24udXRpbHNcIik7XG5jb25zdCBzaW1wbGVTZWxlY3RJdGVtXzEgPSByZXF1aXJlKFwiLi9zaW1wbGVTZWxlY3RJdGVtXCIpO1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xuY2xhc3MgU2ltcGxlU2VsZWN0IHtcbiAgICBjYWxsQ291bnQgPSBEYXRlLm5vdygpO1xuICAgIGNvdW50SW5pdCA9IDA7XG4gICAgLy8gJHNlbGVjdHM6IEhUTUxTZWxlY3RFbGVtZW50W10gPSBbXTtcbiAgICAkc2VsZWN0cyA9IFtdO1xuICAgIG9wdGlvbnM7XG4gICAgbmFtZU1hcmtUcmFuc2Zvcm0gPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEudG9DYW1lbENhc2UpKHNpbXBsZVNlbGVjdGlvbl9jb25zdF8xLm5hbWVNYXJrKTtcbiAgICBkYXRhTmFtZU1hcmsgPSAoMCwgc2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEuY3JlYXRlRGF0YUF0dHIpKHNpbXBsZVNlbGVjdGlvbl9jb25zdF8xLm5hbWVNYXJrKTtcbiAgICBpc05hdGl2ZTtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuJHNlbGVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgLi4uc2ltcGxlU2VsZWN0aW9uX2NvbnN0XzEuc2ltcGxlU2VsZWN0aW9uT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdChbc2VsZWN0b3JdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoQXJyYXkuZnJvbShzZWxlY3RvcikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdXcm9uZyBzZWxlY3RvcjogJywgc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRldGVjdE1vYmlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZXRlY3ROYXRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgPSB0aGlzLm9wdGlvbnMuZGV0ZWN0TmF0aXZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYTtcbiAgICAgICAgbGV0IHJlcyA9IGZhbHNlO1xuICAgICAgICAvLyBDaGVja3MgZm9yIGlPcywgQW5kcm9pZCwgQmxhY2tiZXJyeSwgT3BlcmEgTWluaSwgYW5kIFdpbmRvd3MgbW9iaWxlIGRldmljZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubmF0aXZlT25EZXZpY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh1YS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLm9wdGlvbnMubmF0aXZlT25EZXZpY2VbaV0udG9Mb3dlckNhc2UoKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5uYXRpdmVPbkRldmljZVtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTmF0aXZlID0gcmVzO1xuICAgIH1cbiAgICBpbml0KHNlbGVjdHMpIHtcbiAgICAgICAgdGhpcy5kZXRlY3RNb2JpbGUoKTtcbiAgICAgICAgc2VsZWN0cy5mb3JFYWNoKCgkc2VsZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCRzZWxlY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlTWV0aG9kcyhzZWxlY3QpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRJbnN0YW5jZTogKCkgPT4gc2VsZWN0LFxuICAgICAgICAgICAgZ2V0SGlzdG9yeTogKCkgPT4gc2VsZWN0Lmhpc3RvcnksXG4gICAgICAgICAgICBnZXRIaXN0b3J5TGFzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3QuaGlzdG9yeS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdC5oaXN0b3J5W3NlbGVjdC5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRIaXN0b3J5Rmlyc3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0Lmhpc3RvcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3QuaGlzdG9yeVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TmF0aXZlU2VsZWN0OiAoKSA9PiBzZWxlY3QuZ2V0U2VsZWN0KCksXG4gICAgICAgICAgICByZWxvYWQoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWJ1aWxkKHNlbGVjdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdC51cGRhdGVIVE1MKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGV0YWNoKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGV0YWNoKHNlbGVjdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzZXRNZXRob2RzKHNlbGVjdCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNlbGVjdC4kc2VsZWN0W3NpbXBsZVNlbGVjdGlvbl9jb25zdF8xLm5hbWVTZWxlY3RdID0gdGhpcy5jcmVhdGVNZXRob2RzKHNlbGVjdCk7XG4gICAgfVxuICAgIHNldE1ldGhvZHNDbGVhcihzZWxlY3QpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZWxldGUgc2VsZWN0LiRzZWxlY3Rbc2ltcGxlU2VsZWN0aW9uX2NvbnN0XzEubmFtZVNlbGVjdF07XG4gICAgfVxuICAgIGJ1aWxkKHNlbGVjdCkge1xuICAgICAgICBjb25zdCBpc1Byb2Nlc3NlZCA9IHRoaXMubmFtZU1hcmtUcmFuc2Zvcm0gaW4gc2VsZWN0LmRhdGFzZXQ7XG4gICAgICAgIGlmIChpc1Byb2Nlc3NlZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGlzIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCcsIHNlbGVjdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudEluaXQgKz0gMTtcbiAgICAgICAgY29uc3QgaWQgPSBgJHt0aGlzLmNhbGxDb3VudH0tJHt0aGlzLmNvdW50SW5pdH1gO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKHRoaXMuZGF0YU5hbWVNYXJrLCBpZCk7XG4gICAgICAgIC8vIHRoaXMuJHNlbGVjdHMucHVzaChzZWxlY3QpO1xuICAgICAgICBjb25zdCBuZXdTZWxlY3QgPSBuZXcgc2ltcGxlU2VsZWN0SXRlbV8xLlNpbXBsZVNlbGVjdEl0ZW0oc2VsZWN0LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgIGlkLCBpc05hdGl2ZTogdGhpcy5pc05hdGl2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJHNlbGVjdHMucHVzaChuZXdTZWxlY3QpO1xuICAgICAgICB0aGlzLnNldE1ldGhvZHMobmV3U2VsZWN0KTtcbiAgICB9XG4gICAgZGV0YWNoKGl0ZW1TZWxlY3QpIHtcbiAgICAgICAgaXRlbVNlbGVjdC5kZXRhY2hJdGVtKCk7XG4gICAgICAgIGl0ZW1TZWxlY3QuJHNlbGVjdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5kYXRhTmFtZU1hcmspO1xuICAgICAgICB0aGlzLnNldE1ldGhvZHNDbGVhcihpdGVtU2VsZWN0KTtcbiAgICAgICAgdGhpcy4kc2VsZWN0cyA9IHRoaXMuJHNlbGVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBpdGVtU2VsZWN0KTtcbiAgICB9XG4gICAgcmVidWlsZChzZWxlY3RzSXRlbXMpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gc2VsZWN0c0l0ZW1zLiRzZWxlY3Q7XG4gICAgICAgIHRoaXMuZGV0YWNoKHNlbGVjdHNJdGVtcyk7XG4gICAgICAgIHRoaXMuYnVpbGQoc2VsZWN0KTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlbGVjdHM7XG4gICAgfVxuICAgIGdldFNlbGVjdEZpcnN0KCkge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy4kc2VsZWN0c1swXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWV0aG9kcyh0aGlzLiRzZWxlY3RzWzBdKTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0QnlJZChpZCkge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSB0aGlzLiRzZWxlY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgICAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWV0aG9kcyhzZWFyY2gpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNpbXBsZVNlbGVjdDtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImluaXRDbGFzcyIsIm5hbWVNYXJrIiwibmFtZVNlbGVjdCIsInNpbXBsZVNlbGVjdGlvbk9wdGlvbnMiLCJzaW1wbGVTZWxlY3RMb2NhbGUiLCJub1NlYXJjaCIsInNlYXJjaFRleHQiLCJ0aXRsZSIsInNlbGVjdGVkIiwiYWxsIiwib2siLCJjYW5jZWwiLCJzZWxlY3RBbGwiLCJyZXNldEFsbCIsImlzU2VhcmNoIiwic2VhcmNoVHlwZUlucHV0IiwiaXNTZWFyY2hJbkRyb3Bkb3duIiwiY291bnRTaG93U2VsZWN0ZWQiLCJpc09ubHlQbGFjZWhvbGRlciIsImhpc3RvcnlNYXhTaXplIiwiaXNSZW1vdmVUb3AiLCJpc0NvbmZpcm1Jbk11bHRpIiwiaXNDb25maXJtSW5NdWx0aU9rQ2xpY2tPdXRzaWRlIiwibmF0aXZlT25EZXZpY2UiLCJsb2NhbGUiLCJzZXBDaGFycyIsImlzVXAiLCJpc0Fsd2F5c09wZW4iLCJpc0Fsd2F5c09wZW5TaG93RGlzYWJsZWRUYWJpbmRleCIsImZsb2F0V2lkdGgiLCJpc0Nsb25lQ2xhc3MiLCJzZWxlY3RBbGxBZnRlckNsb3NlIiwicmVzZXRBbGxBZnRlckNsb3NlIiwiaXNTY3JvbGxUb0NoZWNrZWRGaXJzdCIsImlzU2Nyb2xsVG9DaGVja2VkQWx3YXlzIiwibWFya1ByZWZpeCIsImNvbmNhdCIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsInAiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwicmVzdWx0IiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiZSIsIl9nZXQiLCJnZXQiLCJwcm9wZXJ0eSIsInJlY2VpdmVyIiwiYmFzZSIsIl9zdXBlclByb3BCYXNlIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm9iamVjdCIsImhhc093blByb3BlcnR5IiwiZ2V0UHJvdG90eXBlT2YiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJ1bmRlZmluZWQiLCJyZXMiLCJOdW1iZXIiLCJTaW1wbGVTZWxlY3RJdGVtIiwic2ltcGxlU2VsZWN0aW9uX3V0aWxzXzEiLCJyZXF1aXJlIiwic2ltcGxlU2VsZWN0SXRlbURPTV8xIiwiX3NpbXBsZVNlbGVjdEl0ZW1ET01fIiwiX3N1cGVyIiwic2VsZWN0Iiwib3B0aW9ucyIsImxvY2FsT3B0aW9ucyIsIl90aGlzU3VwZXIiLCJfdGhpcyIsIkVycm9yIiwiaW5pdCIsImluaXRBZnRlckRvbSIsInNldFRpbWVvdXQiLCJpc0luaXRpYWxpemVkIiwidHJpZ2dlckN1c3RvbUV2ZW50IiwiJHNlbGVjdCIsIml0ZW0iLCJfdGhpczIiLCJjaGFuZ2VMaXN0ZW5lciIsImNoYW5nZUxpc3RlbmVySW5pdCIsInNlbGVjdEtleURvd25MaXN0ZW5lciIsInNlbGVjdEtleURvd25Jbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlYXJjaEhhbmRsZXIiLCJzZWFyY2hIYW5kbGVySW5pdCIsImNsb3NlT3V0c2lkZUhhbmRsZXIiLCJjbG9zZU91dHNpZGVIYW5kbGVySW5pdCIsImNsb3NlRXNjSGFuZGxlciIsImNsb3NlRXNjSGFuZGxlckluaXQiLCJoYW5kbGVSZXNpemUiLCJoYW5kbGVSZXNpemVJbml0IiwiY2FsbGJhY2tJbml0aWFsaXphdGlvbiIsImlzTmF0aXZlIiwibXFsIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm9uY2hhbmdlIiwic3RhdGUiLCJzdWJzY3JpYmUiLCJ2YWwiLCJlbGVtTGlzdEJvZHkiLCJfdGhpczIkb3B0aW9ucyIsImlzRmlyc3RPcGVuIiwic2Nyb2xsVG9GaXJzdENoZWNrZWQiLCJ0b2dnbGVPcGVuSGFuZGxlciIsImNyZWF0ZUxpc3QiLCJlbGVtSW5wdXRTZWFyY2giLCJzZXRTdGF0ZSIsImVsZW1Ub3BCb2R5Iiwib25jbGljayIsImNsaWNrVG9nZ2xlT3BlbiIsIm9ua2V5dXAiLCJlbGVtRHJvcERvd25XcmFwIiwiZmlyc3RDaGVja2VkIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvcCIsIm9mZnNldFRvcCIsIm1hdGNoZXMiLCJfdGhpczMiLCJjb25maXJtT2siLCJjb25maXJtT2tIYW5kbGVyIiwiY29uZmlybU5vIiwiY29uZmlybU5vSGFuZGxlciIsImNhbGxiYWNrSW5pdGlhbGl6ZWQiLCJtdWx0aURlYm91bmNlVGltZSIsIm11bHRpRGVib3VuY2VDaGFuZ2UiLCJkZWJvdW5jZSIsImVsZW1TZWxlY3RBbGwiLCJzZWxlY3RBbGxIYW5kbGVyIiwiZWxlbVJlc2V0QWxsIiwicmVzZXRBbGxIYW5kbGVyIiwiZWxlbURyb3BEb3duQ2xvc2UiLCJjbG9zZUhhbmRsZXIiLCJ0b0NhbWVsQ2FzZSIsImRhdGFzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNoYW5nZUNsaWNrSXRlbSIsIm9sZElkIiwibmV3RWwiLCJmb2N1cyIsImZ1bmMiLCJkZWxheSIsIl90aGlzNCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwidGltZW91dERlYm91bmNlSWQiLCJjbGVhclRpbWVvdXQiLCJjb25maXJtT2tCdWlsZCIsIl90aGlzNSIsImxpSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInBvcyIsInBhcnNlSW50Iiwib3B0aW9uIiwiZGlzYWJsZWQiLCJnZXRBdHRyaWJ1dGUiLCJpc1NlbGVjdGVkIiwiYWRkSGlzdG9yeSIsInRyaWdnZXJJbml0IiwiZnJvbSIsIl9vcHRpb24kY2xvc2VzdCIsImNsb3Nlc3QiLCJfb3B0aW9uJGNsb3Nlc3QyIiwidHJpZ2dlclNldHVwIiwiYnV0dG9uIiwidGFyZ2V0TGkiLCJjaGFuZ2VDbGlja0l0ZW1Eb20iLCJ3cmFwR3JvdXAiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjdXIiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImFkZCIsImlzQ2hlY2siLCJoaXN0b3J5IiwicHVzaCIsInRleHQiLCJpbm5lckhUTUwiLCJpbmRleE9wdGlvbiIsImluZGV4Iiwic2xpY2UiLCJpc011bHRpIiwiaXNGbG9hdFdpZHRoIiwibmV4dFNlbGVjdGVkIiwibXVsdGlEZWJvdW5jZUNoYW5nZUFuaW1hdGlvbiIsImlzU3RhcnQiLCJpc0RlYm91bmNlU3RhdHVzQmFyIiwiZWxlbURlYm91bmNlUHJvZ3Jlc3NCYXIiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwib2Zmc2V0V2lkdGgiLCJ0cmlnZ2VySW5wdXRFdmVudCIsImlzRGlzYWJsZWQiLCJ0eXBlIiwiZ2V0U3RhdGUiLCJLZXlib2FyZEV2ZW50IiwiZWxlbVdyYXAiLCJjb250YWlucyIsImNvZGUiLCJrZXlCb2FyZENoYW5nZUNoZWNrZWQiLCJpc0Rvd24iLCJpbmRDdXJyZW50IiwiZmlyc3RPcHRpb24iLCJlbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInRhYkluZGV4IiwidG9nZ2xlT3BlbiIsImlzT3BlbiIsIl90aGlzNiIsImNhbGxiYWNrT3BlbiIsImNvdW50T3BlbiIsImVsZW1Ecm9wRG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja0Nsb3NlIiwiY2FsbGJhY2tDaGFuZ2VTZWxlY3QiLCJnZXRTZWxlY3QiLCJoYW5kbGVyQ2hhbmdlQ2hlY2tlZCIsIm9ubW91c2V1cCIsImlzQ29tcGFyZSIsIm5ld0l0ZW1zIiwiZ3JvdXAiLCJncm91cEFuZE9wdGlvbnMiLCJpbmQiLCJpc0dyb3VwIiwiSFRNTE9wdEdyb3VwRWxlbWVudCIsImdldENyZWF0ZUxpc3RJdGVtIiwib2xkIiwiY29tcGFyZU9iaiIsImlucHV0U2VhcmNoSGFuZGxlciIsImRldGFjaEl0ZW0iLCJjYWxsYmFja0Rlc3Ryb3lJbml0IiwicGFyZW50RWxlbWVudCIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJjbGFzc1NlbGVjdEluaXQiLCJjYWxsYmFja0Rlc3Ryb3kiLCJTaW1wbGVTZWxlY3RJdGVtRE9NIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsIm5hbWUiLCJ0ZXN0IiwiaXRlciIsImlzQXJyYXkiLCJsZW4iLCJhcnIyIiwic3RvcmVfMSIsInNpbXBsZVNlbGVjdGlvbl9jb25zdF8xIiwic3RvcmUiLCJpdGVtcyIsImZpbHRlclN0ciIsImlzRmxvYXQiLCJnZXRDbGFzcyIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm11bHRpcGxlIiwiY2xvbmVPYmoiLCJjbG9uZUNsYXNzZXMiLCJjbGFzc05hbWUiLCJjaGFuZ2VCb2R5TGkiLCJmb3JtYXRUaXRsZSIsImhhc0F0dHJpYnV0ZSIsImlmVHJ1ZURhdGFBdHRyIiwib3B0aW9uT3ZlcnJpZGUiLCJkYXRhUGxhY2Vob2xkZXIiLCJ0aXRsZVBsYWNlaG9sZGVyIiwicmVzU2VsZWN0IiwiaXNTaG93Q2hlY2tib3hMb2NhbCIsImlzU2hvd0NoZWNrYm94IiwiaXRlbUh0bWxCZWZvcmUiLCJib2R5TGlIVE1MQmVmb3JlRnJvbVNlbGVjdCIsIml0ZW1IdG1sQWZ0ZXIiLCJib2R5TGlIVE1MQWZ0ZXJGcm9tU2VsZWN0IiwibmV3V2lkdGgiLCJkZWJvdW5jZVRpbWUiLCJpbml0RG9tIiwiY3JlYXRlSFRNTCIsIl92YWwiLCJjcmVhdGVMaXN0SFRNTCIsImNyZWF0ZVRpdGxlSFRNTCIsInRvZ2dsZVRhYkluZGV4IiwiY2xzIiwiYm9keSIsImJvZHlPcGVuQ2xhc3MiLCJ1cGRhdGVIVE1MIiwiY3JlYXRlSWNvbiIsImVsZW1Ub3AiLCJhcHBlbmRDaGlsZCIsInJlc0NsYXNzZXNXcmFwIiwiYWRkQ2xhc3NlcyIsImNvdW50QWxsIiwiY3JlYXRlRHJvcERvd24iLCJjcmVhdGVDb250cm9sSFRNTCIsImNyZWF0ZUlucHV0SFRNTCIsImVsZW1Db250cm9sIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGROb2RlcyIsImNsYXNzQ29udHJvbCIsImNyZWF0ZUJ1dHRvbiIsImljb24iLCJhcHBlbmQiLCJjcmVhdGVJc0NvbmZpcm1Jbk11bHRpSFRNTCIsIl90aGlzJGVsZW1Ecm9wRG93biIsImNvbmZpcm1XcmFwIiwiY2xhc3Nlc0l0ZW0iLCJjbGFzc2VzIiwiZWxlbVRpdGxlIiwiY2xhc3Nlc1RpdGxlIiwiaXRlbXNDaGVja2VkIiwiZ2V0Q2hlY2tlZCIsImlzUGxhY2Vob2xkZXIiLCJhdHRyVGl0bGUiLCJhdHRyVGl0bGVUZXh0IiwiaXNOZWVkRm9ybWF0VGl0bGUiLCJkZWNvZGVIdG1sRW50aXRpZXMiLCJtYXhTaG93IiwibWF4U2hvd0F0dHIiLCJzaW1wbGVDb3VudFNob3dzU2VsZWN0ZWQiLCJmaWx0ZXJMaXN0IiwiaXRlbXNJbml0IiwidG9Mb3dlckNhc2UiLCJpc1Nob3dHcm91cCIsImluZGV4T2YiLCJpc1Nob3dGaWx0ZXIiLCJpc0ZpbHRlciIsInJlc0JvZHlMaXN0IiwiY291bnRTaG93SXRlbSIsImNvdW50Q2hlY2tlZEl0ZW1zIiwiY291bnRDaGVja2VkRnVsbEl0ZW1zIiwiZGF0YUZvckNvbXBhcmUiLCJjaGVja2VkIiwiaXNEaXNhYmxlZEdyb3VwIiwiX3RoaXMzJGNyZWF0ZUxpIiwiY3JlYXRlTGkiLCJjb3VudFNob3ciLCJjb3VudENoZWNrZWQiLCJjb3VudENoZWNrZWRGdWxsIiwiX3RoaXMzJGNyZWF0ZUxpMiIsImdyb3VwQXR0cnMiLCJjbGFzc0dyb3VwIiwiY2hlY2tBbGxNdWx0aSIsInJlbW92ZUV4dHJhU3BhY2VzIiwiZGF0YUZvckNvbXBhcmUyIiwic2ltcGxlU2VsZWN0U2VhcmNoIiwic2ltcGxlU2VsZWN0U2VhcmNoRHJvcGRvd24iLCJhdXRvY29tcGxldGUiLCJhcmlhQXV0b0NvbXBsZXRlIiwiaW5wdXRNb2RlIiwicGxhY2Vob2xkZXIiLCJ3cmFwU2VhcmNoIiwiZmlsdGVyIiwiZGF0YSIsInRpdGxlR3JvdXAiLCJjbGFzc0xpSW5pdCIsImRpc2FibGVkUmVzIiwiY2xhc3NMaSIsImRhdGFBdHRyIiwiaWRHcm91cCIsInBvc2l0aW9uIiwiY3JlYXRlTGlCb2R5UmVzIiwiY3JlYXRlTGlCb2R5Iiwib3V0ZXJIVE1MIiwib3B0aW9uTmF0aXZlIiwiY29uc29sZSIsImVycm9yIiwiX2lzQ29tcGFyZSIsImNyZWF0ZU9wdGlvbkl0ZW1zIiwiZ2V0Q3JlYXRlSXRlbSIsImNyZWF0ZURhdGFBdHRyIiwiY29tcGFyZVN0cmluZ1dpdGhDbGVhclNwYWNlIiwiY2xlYXJTcGFjZUFuZEVtcHR5QXR0ciIsInJlcGxhY2UiLCJfIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJzdHIiLCJ0cmltIiwic3RyMSIsInN0cjIiLCJhdHRyIiwiZWxlbWVudCIsIm15Q3VzdG9tRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJIVE1MT3B0aW9uRWxlbWVudCIsIm5ld0l0ZW0iLCJsYWJlbCIsIm1vZCIsImNsYXNzSW5pdCIsInNlcCIsIm9iajEiLCJvYmoyIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiYnRuIiwiZGl2IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJvd25LZXlzIiwiciIsInQiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiX29iamVjdFNwcmVhZCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwic3RhdGVEYXRhIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmVyc0FsbCIsImsiLCJwcmV2U3RhdGUiLCJwcmV2IiwiY2IiLCJzdWJzY3JpYmVBbGwiLCJ1blN1YnNjcmliZSIsInNpbXBsZVNlbGVjdEl0ZW1fMSIsIlNpbXBsZVNlbGVjdCIsInNlbGVjdG9yIiwiRGF0ZSIsIm5vdyIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTm9kZUxpc3QiLCJ3YXJuIiwiZGV0ZWN0TW9iaWxlIiwiZGV0ZWN0TmF0aXZlIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsInNlbGVjdHMiLCJidWlsZCIsImNyZWF0ZU1ldGhvZHMiLCJnZXRJbnN0YW5jZSIsImdldEhpc3RvcnkiLCJnZXRIaXN0b3J5TGFzdCIsImdldEhpc3RvcnlGaXJzdCIsImdldE5hdGl2ZVNlbGVjdCIsInJlbG9hZCIsInJlYnVpbGQiLCJ1cGRhdGUiLCJkZXRhY2giLCJzZXRNZXRob2RzIiwic2V0TWV0aG9kc0NsZWFyIiwiaXNQcm9jZXNzZWQiLCJuYW1lTWFya1RyYW5zZm9ybSIsImNvdW50SW5pdCIsImNhbGxDb3VudCIsImRhdGFOYW1lTWFyayIsIm5ld1NlbGVjdCIsIiRzZWxlY3RzIiwiaXRlbVNlbGVjdCIsInNlbGVjdHNJdGVtcyIsImdldFNlbGVjdHMiLCJnZXRTZWxlY3RGaXJzdCIsImdldFNlbGVjdEJ5SWQiLCJzZWFyY2giLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==