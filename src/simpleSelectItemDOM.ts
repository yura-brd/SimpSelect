import { IItemLocalOptions, ISimpleSelectOptions } from './types/simpleSelect.types';
import {
  cloneObj, compareObj,
  compareStringWithClearSpace,
  createButton,
  getClass,
  ifTrueDataAttr,
  removeExtraSpaces,
  toCamelCase,
  triggerCustomEvent,
} from './utils/simpleSelection.utils';
import {
  ICreateLiReturn, IDataForCompareOptions, IOptionItem, IOptionItems,
} from './types/item.types';
import { store } from './utils/store';
import { initClass } from './const/simpleSelection.const';

interface IState {
  items: IOptionItems[];
  isOpen: boolean;
  isFloat: boolean;
  filterStr: string;
}
export class SimpleSelectItemDOM {
  options!: ISimpleSelectOptions;

  $select!:HTMLSelectElement;

  id!: string;

  titlePlaceholder!: string;

  isDisabled: boolean = false;

  isMulti!: boolean;

  state = store<IState>({
    items: [],
    isOpen: false,
    filterStr: '',
    isFloat: false,
  });

  // classSelectInit= 'SimpleSel__select_init'
  classSelectInit = getClass('select_init');

  isNative: boolean;

  elemWrap: HTMLDivElement = document.createElement('div'); // all

  elemTop: HTMLDivElement = document.createElement('div'); // all

  elemTopBody: HTMLDivElement = document.createElement('div'); // all

  elemDropDownWrap: HTMLDivElement | null = null; // not native

  elemDropDown: HTMLDivElement | null = null; // not native

  elemDropDownClose: HTMLButtonElement | null = null; // not native

  elemListBody: HTMLUListElement | null = null; // not native

  elemInputSearch: HTMLInputElement | null = null; // not native

  elemTitle!: HTMLDivElement; // not native

  confirmWrap: HTMLElement | null = null; // not native

  confirmOk: HTMLButtonElement | null = null; // not native

  confirmNo: HTMLButtonElement | null = null; // not native

  elemControl: HTMLDivElement | null = null; // not native

  elemSelectAll: HTMLButtonElement | null = null; // not native

  elemResetAll: HTMLButtonElement | null = null; // not native

  elemDebounceProgressBar: HTMLDivElement | null = null; // not native

  cloneClasses = '';

  isShowCheckbox = false;

  bodyLiHTMLBeforeFromSelect: null | string = null;

  bodyLiHTMLAfterFromSelect: null | string = null;

  isFloatWidth = false;

  bodyOpenClass = `${initClass}--body_open`;

  multiDebounceTime = 0;

  isDebounceStatusBar = false;

  constructor(select: HTMLSelectElement, options: ISimpleSelectOptions, localOptions: IItemLocalOptions) {
    const { id, isNative } = localOptions;
    this.$select = select;
    this.isMulti = select.multiple;
    this.id = id;
    this.isNative = isNative;

    this.options = cloneObj(options);
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

    if (this.isMulti && this.$select.hasAttribute('data-simple-is-confirm')) {
      this.options.isConfirmInMulti = ifTrueDataAttr(this.$select.getAttribute('data-simple-is-confirm'));
    }

    this.optionOverride();

    this.isDisabled = this.$select.disabled;

    // this.initDom()
  }

  optionOverride() {
    const dataPlaceholder = toCamelCase('simple-placeholder');
    if (this.$select.dataset[dataPlaceholder]) {
      this.titlePlaceholder = this.$select.dataset[dataPlaceholder] || '';
    } else {
      this.titlePlaceholder = this.options.locale.title;
    }

    if (this.$select.hasAttribute('data-simple-debounce-status-bar')) {
      this.isDebounceStatusBar = ifTrueDataAttr(this.$select.getAttribute('data-simple-debounce-status-bar'));
    }
    if (this.$select.hasAttribute('data-simple-reset-all')) {
      this.options.resetAll = ifTrueDataAttr(this.$select.getAttribute('data-simple-reset-all'));
    }
    // const dataSelect = toCamelCase('simple-select-all');
    // if (dataSelect in this.$select.dataset) {
    //   const resSelect  = this.$select.dataset[dataSelect];
    //   this.options.selectAll = !(resSelect === 'false' || resSelect === '0');
    // }
    if (this.$select.hasAttribute('data-simple-select-all')) {
      const resSelect = this.$select.getAttribute('data-simple-select-all');
      this.options.selectAll = ifTrueDataAttr(resSelect);
    }

    const isShowCheckboxLocal = this.$select.dataset[toCamelCase('simple-show-checkbox')];
    if (this.isMulti) {
      this.isShowCheckbox = !((isShowCheckboxLocal && !ifTrueDataAttr(isShowCheckboxLocal)));
    } else if (isShowCheckboxLocal === 'true') {
      this.isShowCheckbox = true;
    }

    const itemHtmlBefore = this.$select.dataset[toCamelCase('simple-item-html-before')];
    if (itemHtmlBefore) {
      this.bodyLiHTMLBeforeFromSelect = itemHtmlBefore;
    }
    const itemHtmlAfter = this.$select.dataset[toCamelCase('simple-item-html-after')];
    if (itemHtmlAfter) {
      this.bodyLiHTMLAfterFromSelect = itemHtmlAfter;
    }

    if (this.$select.hasAttribute('data-simple-up')) {
      this.options.isUp = ifTrueDataAttr(this.$select.getAttribute('data-simple-up'));
    }
    if (this.$select.hasAttribute('data-simple-is-only-placeholder')) {
      this.options.isOnlyPlaceholder = ifTrueDataAttr(this.$select.getAttribute('data-simple-is-only-placeholder'));
    }
    if (this.$select.hasAttribute('data-simple-remove-top')) {
      this.options.isRemoveTop = ifTrueDataAttr(this.$select.getAttribute('data-simple-remove-top'));
    }

    if (this.$select.hasAttribute('data-simple-float-none')) {
      this.isFloatWidth = false;
      this.options.floatWidth = 0;
    }
    if (this.$select.hasAttribute('data-simple-float-width')) {
      const newWidth = Number(this.$select.dataset[toCamelCase('simple-float-width')]);
      if (newWidth) {
        this.options.floatWidth = newWidth;
      }
    }

    if (this.$select.hasAttribute('data-simple-always-open')) {
      this.options.isAlwaysOpen = ifTrueDataAttr(this.$select.getAttribute('data-simple-always-open'));

      this.isNative = false;
      this.isFloatWidth = false;
      this.options.floatWidth = 0;
    }

    // set debounce time
    if (this.isMulti && !this.options.isConfirmInMulti) {
      if (toCamelCase('simple-debounce-time') in this.$select.dataset) {
        this.multiDebounceTime = Number(this.$select.dataset[toCamelCase('simple-debounce-time')]);
      } else if (this.options.debounceTime || this.options.debounceTime === 0) {
        this.multiDebounceTime = this.options.debounceTime;
      }
    }
  }

  initDom() {
    this.createList(false);
    this.createHTML();

    this.state.subscribe('filterStr', (_val: IOptionItems[]) => {
      this.createListHTML(true);
    });
    this.state.subscribe('items', (_val: IOptionItems[]) => {
      this.createListHTML(true);
      this.createTitleHTML();
    });
    this.state.subscribe('isOpen', (val: boolean) => {
      this.createListHTML(false);
      this.createTitleHTML();

      this.toggleTabIndex(val);
    });
    this.state.subscribe('isFloat', (val: boolean) => {
      this.isFloatWidth = val;
      const cls = getClass('float', true);
      if (val) {
        this.elemWrap.classList.add(cls);
        if (!document.body.classList.contains(this.bodyOpenClass) && this.state.getState('isOpen')) {
          document.body.classList.add(this.bodyOpenClass);
        }
      } else {
        this.elemWrap.classList.remove(cls);
        if (document.body.classList.contains(this.bodyOpenClass)) {
          document.body.classList.remove(this.bodyOpenClass);
        }
      }
    });
  }

  toggleTabIndex(isOpen: boolean) {
    const tabIndex = isOpen || this.options.isAlwaysOpen ? 0 : -1;

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

  public updateHTML() {
    this.createList(true);
  }

  private createHTML() {
    this.$select.classList.add(this.classSelectInit);
    this.$select.tabIndex = -1;

    this.elemTopBody.className = getClass('top_body');
    this.elemTopBody.tabIndex = this.isDisabled ? -1 : 0;

    this.createIcon();

    if (!this.options.isRemoveTop) {
      this.elemTop.appendChild(this.elemTopBody);
    }
    let resClassesWrap = initClass;
    if (this.options.isCloneClass) {
      resClassesWrap += ` ${this.cloneClasses}`;
    }
    if (this.options.addClasses) {
      resClassesWrap += ` ${this.options.addClasses}`;
    }
    if (this.$select.hasAttribute('data-simple-add-classes')) {
      resClassesWrap += ` ${this.$select.getAttribute('data-simple-add-classes')}`;
    }
    if (this.isDisabled) {
      resClassesWrap += ` ${getClass('disabled', true)}`;
    }
    if (this.options.isAlwaysOpen) {
      resClassesWrap += ` ${getClass('always_open', true)}`;
    }
    if (this.options.isUp) {
      resClassesWrap += ` ${getClass('up', true)}`;
    }
    resClassesWrap += ` ${this.isMulti ? getClass('multi', true) : getClass('single', true)}`;
    this.elemWrap.className = resClassesWrap;
    this.elemWrap.dataset.countAll = this.$select.options.length.toString();

    this.elemTop.className = getClass('top');

    // creating an initial structure
    const parentElement = this.$select.parentNode;
    if (parentElement) {
      parentElement.replaceChild(this.elemWrap, this.$select);
      this.elemWrap.appendChild(this.$select);
    }
    this.elemWrap.appendChild(this.elemTop);

    if (this.isNative) {
      this.$select.classList.add(getClass('native', true, this.classSelectInit));
      this.elemWrap.classList.add(getClass('native', true));
    } else {
      this.createDropDown();

      this.createControlHTML();

      this.createInputHTML();
    }

    this.createTitleHTML();
  }

  private createControlHTML() {
    if (!this.elemDropDown || !this.isMulti) {
      return;
    }
    if (!this.options.selectAll && !this.options.resetAll) {
      return;
    }
    this.elemControl = document.createElement('div');
    this.elemControl.classList.add(getClass('controls'));

    // this.elemDropDown.prepend(this.elemControl);
    this.elemDropDown.insertBefore(this.elemControl, this.elemDropDown.childNodes[0]);

    const classControl = getClass('control');
    if (this.options.selectAll) {
      this.elemSelectAll = createButton();
      this.elemSelectAll.className = `${classControl} ${getClass('select_all', true, classControl)}`;

      this.elemSelectAll.innerHTML = `<span class="${getClass('select_all__icon')}"></span> ${this.options.locale.selectAll}`;

      this.elemControl.appendChild(this.elemSelectAll);
    }

    if (this.options.resetAll) {
      this.elemResetAll = createButton();
      this.elemResetAll.className = `${classControl} ${getClass('reset_all', true, classControl)}`;

      this.elemResetAll.innerHTML = `<span class="${getClass('reset_all__icon')}"></span> ${this.options.locale.resetAll}`;

      this.elemControl.appendChild(this.elemResetAll);
    }
  }

  private createIcon() {
    const icon = document.createElement('span');
    icon.className = getClass('icon');
    this.elemTopBody.appendChild(icon);
  }

  private createDropDown() {
    if (this.isNative) {
      return;
    }
    this.elemDropDownWrap = document.createElement('div');
    this.elemDropDownWrap.className = getClass('body');

    if (this.options.isAlwaysOpen) {
      this.elemDropDownWrap.classList.add(getClass('body-always_open', true));
      // resClassesWrap += ` ${getClass('always_open', true)}`;
    }

    this.elemDropDown = document.createElement('div');
    this.elemDropDown.className = getClass('body_wrap');
    this.elemListBody = document.createElement('ul');

    this.elemListBody.className = getClass('list');

    /** start MultiSelect debounce animate status */
    if (this.isMulti && this.isDebounceStatusBar && this.multiDebounceTime) {
      this.elemDebounceProgressBar = document.createElement('div');
      this.elemDebounceProgressBar.className = getClass('debounce_progress_bar');
      this.elemDropDown.append(this.elemDebounceProgressBar);
    }
    /** end MultiSelect debounce animate status */

    this.elemDropDownWrap.append(this.elemDropDown);
    this.elemWrap.appendChild(this.elemDropDownWrap);
    this.elemDropDown.appendChild(this.elemListBody);

    this.elemDropDownClose = createButton();
    this.elemDropDownClose.classList.add(getClass('close'));

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

  private createIsConfirmInMultiHTML() {
    this.confirmWrap = document.createElement('div');

    const classesItem = getClass('bottom_control');
    this.confirmOk = createButton();
    this.confirmNo = createButton();
    this.confirmWrap.appendChild(this.confirmOk);
    this.confirmWrap.appendChild(this.confirmNo);

    this.confirmOk.innerHTML = this.options.locale.ok;
    this.confirmNo.innerHTML = this.options.locale.cancel;

    this.confirmOk.className = `${classesItem} ${getClass('ok', true, classesItem)}`;
    this.confirmNo.className = `${classesItem} ${getClass('no', true, classesItem)}`;

    let classes = getClass('bottom_controls');
    if (!this.options.isConfirmInMulti) {
      classes += ` ${getClass('hide', true, classes)}`;
    }
    this.confirmWrap.className = classes;

    this.elemDropDown?.appendChild(this.confirmWrap);
  }

  private createTitleHTML() {
    if (this.options.isRemoveTop) {
      return;
    }

    if (!this.elemTitle) {
      this.elemTitle = document.createElement('div');
      let classesTitle = getClass('title');
      if (this.options.isOnlyPlaceholder) {
        classesTitle += ` ${getClass('only-placeholder', true, classesTitle)}`;
      }
      this.elemTitle.className = classesTitle;
      // this.elemTopBody.prepend(this.elemTitle);
      this.elemTopBody.insertBefore(this.elemTitle, this.elemTopBody.childNodes[0]);
    }

    const itemsChecked = this.getChecked();

    this.elemTop.title = '';

    const isPlaceholder = !itemsChecked.length;
    let title:string = this.titlePlaceholder;
    if (itemsChecked.length && !this.options.isOnlyPlaceholder) {
      let attrTitle = '';
      let attrTitleText = '';
      itemsChecked.forEach((item, index) => {
        if (index !== 0) {
          attrTitle += `${this.options.sepChars}<span class="${getClass('sep_space', true)}">&nbsp;</span>`;
          attrTitleText += `${this.options.sepChars} `;
        }
        attrTitle += `${item.title}`;
        attrTitleText += `${item.title}`;
      });
      this.elemTop.title = attrTitleText;

      let maxShow = this.options.countShowSelected;
      const maxShowAttr = Number(this.$select.dataset.simpleCountShowsSelected);
      if (maxShowAttr && maxShowAttr > 0) {
        maxShow = maxShowAttr;
      }
      if (itemsChecked.length > maxShow) {
        title = `${this.options.locale.selected} ${itemsChecked.length}`;

        if (this.$select.querySelectorAll('option').length === itemsChecked.length) {
          title += ` (${this.options.locale.all})`;
        }
      } else if (attrTitle) {
        title = attrTitle;
      }
    }

    this.elemTitle.innerHTML = title;
    if (isPlaceholder) {
      this.elemTitle.classList.add('SimpleSel__title--placeholder');
      this.elemTitle.classList.remove('SimpleSel__title--fill');
      this.elemWrap.classList.remove(getClass('fill', true));
    } else {
      this.elemTitle.classList.remove('SimpleSel__title--placeholder');
      this.elemTitle.classList.add('SimpleSel__title--fill');
      this.elemWrap.classList.add(getClass('fill', true));
    }
  }

  private filterList() {
    let val = this.state.getState('filterStr');
    const itemsInit = this.state.getState('items');
    if (!val) {
      return itemsInit;
    }

    val = val.toLowerCase();
    const items:IOptionItems[] = cloneObj(itemsInit);

    items.forEach((group) => {
      let isShowGroup = false;
      group.items.forEach((item) => {
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

  protected createListHTML(isFilter = false) {
    if (!this.elemListBody) {
      return;
    }
    let resBodyList = '';
    let countShowItem = 0;
    let countCheckedItems = 0;
    let countCheckedFullItems = 0;

    const items = isFilter ? this.filterList() : this.state.getState('items');
    const dataForCompare: IDataForCompareOptions[] = [];
    items.forEach((group:IOptionItems) => {
      group.items.forEach((i) => {
        dataForCompare.push({
          value: i.value,
          checked: i.checked,
          disabled: i.disabled || !!group.isDisabledGroup,
          isShowFilter: i.isShowFilter,
        });
      });
      if (!group.isGroup) {
        const {
          result, countShow, countChecked, countCheckedFull,
        } = this.createLi(group);
        resBodyList += result;
        countShowItem += countShow;
        countCheckedItems += countChecked;
        countCheckedFullItems += countCheckedFull;
      } else {
        const {
          result, countShow, countChecked, countCheckedFull,
        } = this.createLi(group);
        let groupAttrs = `data-count-show="${countShow}" `;
        groupAttrs += `data-count-checked="${countChecked}" `;
        let classGroup = getClass('group_items');
        if (group.isDisabledGroup) {
          classGroup += ` ${getClass('disabled', true, classGroup)}`;
        }
        resBodyList += `<div class="${classGroup}" ${groupAttrs} data-simple-select-gruop>`;
        resBodyList += result;
        resBodyList += '</div>';

        countCheckedItems += countChecked;
        countShowItem += countShow;
        countCheckedFullItems += countCheckedFull;
      }
    });

    const isSearch:string = this.state.getState('filterStr');

    if (isSearch && isSearch.length && countShowItem === 0) {
      resBodyList = `<div class="${getClass('no_match')}">`;
      resBodyList = `${this.options.locale.noSearch} "${isSearch}"`;
      resBodyList += '</div>';
    }

    this.elemWrap.dataset.countChecked = countCheckedItems.toString();
    this.elemWrap.dataset.countCheckedFull = countCheckedFullItems.toString();
    if (this.isMulti) {
      this.elemWrap.dataset.checkAllMulti = (this.$select.options.length === countCheckedItems) ? 'yes' : 'no';
    }

    resBodyList = removeExtraSpaces(resBodyList);

    const dataForCompare2: IDataForCompareOptions[] = [];
    this.elemListBody.querySelectorAll('[data-sel-opt-item]').forEach((i: Element) => {
      dataForCompare2.push({
        value: i.getAttribute('data-sel-value'),
        checked: i.getAttribute('data-sel-opt-checked') === 'true',
        disabled: i.getAttribute('data-sel-opt-disabled') === 'true',
      });
    });
    // if (!compareStringWithClearSpace(this.elemListBody.innerHTML, resBodyList)) {
    if (!compareObj(dataForCompare, dataForCompare2)) {
      this.elemListBody.innerHTML = resBodyList;
      triggerCustomEvent(this.$select, 'createListBuild', {
        item: this,
      });
    }
  }

  private createInputHTML(): void {
    let { isSearch } = this.options;
    let { isSearchInDropdown } = this.options;
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
    this.elemInputSearch.name = `${initClass}_name_${this.id}`;

    const className = getClass('search');
    if (isSearchInDropdown) {
      if (this.elemDropDown) {
        const wrapSearch = document.createElement('div');
        wrapSearch.className = getClass('search_wrap');
        this.elemInputSearch.className = `${className} ${getClass('dropdown', true, className)}`;
        wrapSearch.appendChild(this.elemInputSearch);
        // this.elemDropDown.prepend(this.elemInputSearch);
        this.elemDropDown.insertBefore(wrapSearch, this.elemDropDown.childNodes[0]);
      }
    } else {
      this.elemInputSearch.className = `${className} ${getClass('top', true, className)}`;
      this.elemTop.appendChild(this.elemInputSearch);
    }

    this.inputSearchHandler();
  }

  getChecked(): IOptionItem[] {
    const items: IOptionItems[] = this.state.getState('items');
    let res: IOptionItem[] = [];

    items.forEach((group) => {
      res = [
        ...res,
        ...group.items.filter((i) => i.checked),
      ];
    });

    return res;
  }

  private createLi(data: IOptionItems): ICreateLiReturn {
    let result = '';
    let countShow = 0;
    let countChecked = 0;
    let countCheckedFull = 0;

    if (!data.isShowFilter) {
      return {
        result, countShow, countChecked, countCheckedFull,
      };
    }

    if (data.isGroup) {
      let classGroup = getClass('group');
      if (data.isDisabledGroup) {
        classGroup += ` ${getClass('disabled', true, classGroup)}`;
      }
      result += `<div class="${getClass('group_title')}">${data.titleGroup}</div>`;
      result += `<ul class="${classGroup}">`;
    }
    data.items.forEach((option) => {
      if (!option.isShowFilter) {
        return;
      }
      countShow++;
      const classLiInit = getClass('list_item');
      const disabledRes = !!(option.disabled || data.isDisabledGroup);
      let classLi = classLiInit;
      if (option.checked) {
        countChecked++;
        classLi += ` ${getClass('checked', true, classLiInit)}`;

        if (option.value) {
          countCheckedFull++;
        }
      }
      if (disabledRes) {
        classLi += ` ${getClass('disabled', true, classLiInit)}`;
      }
      if (!option.value) {
        classLi += ` ${getClass('not_value', true, classLiInit)}`;
      }

      let dataAttr = `data-sel-group-id="${data.idGroup}"`;
      dataAttr += 'data-sel-opt-item';
      dataAttr += ` data-sel-position="${option.position}"`;
      dataAttr += ` data-sel-id="${option.id}"`;

      if (option.value) {
        dataAttr += ` data-sel-value="${option.value}"`;
      }

      dataAttr += ` data-sel-opt-checked="${option.checked}"`;
      dataAttr += ` data-sel-opt-disabled="${disabledRes}"`;

      if (this.options.isAlwaysOpen) {
        if (disabledRes && !this.options.isAlwaysOpenShowDisabledTabindex) {
          dataAttr += ' tabindex="-1"';
        } else {
          dataAttr += ' tabindex="0"';
        }
      } else {
        dataAttr += ' tabindex="-1"';
      }

      result += `<li  class="${classLi}" ${dataAttr}>`;
      const createLiBodyRes = this.createLiBody(option, this.$select.options[option.position]);
      result += typeof createLiBodyRes === 'string' ? createLiBodyRes : createLiBodyRes.outerHTML;
      result += '</li>';
    });
    if (data.isGroup) {
      result += '</ul>';
    }
    return {
      result, countShow, countChecked, countCheckedFull,
    };
  }

  private createLiBody(option: IOptionItem, optionNative: HTMLOptionElement): HTMLElement | string {
    const item = document.createElement('div');

    item.className = getClass('list_item_body');

    let res:string = '';
    if (this.isShowCheckbox) {
      res = `<span class="${getClass('list_item_icon')}"></span>`;
    }

    if (this.bodyLiHTMLBeforeFromSelect) {
      res += this.bodyLiHTMLBeforeFromSelect;
    }

    if (optionNative.hasAttribute('data-simple-html-before')) {
      res += optionNative.getAttribute('data-simple-html-before');
    }

    res += `${option.title}`;
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

  protected handlerChangeChecked() {
    console.error('This method need redefine');
  }

  // only desktop
  protected createList(_isCompare: boolean) {
    console.error('This method need redefine');
  }

  // only desktop
  protected inputSearchHandler() {
    console.error('This method need redefine');
  }
}
