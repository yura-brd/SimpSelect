import { IItemLocalOptions, ISimpleSelectOptions } from './types/simpleSelect.types';
import {
  cloneObj, createButton, getClass, ifTrueDataAttr, toCamelCase,
} from './utils/simpleSelection.utils';
import { ICreateLiReturn, IOptionItem, IOptionItems } from './types/item.types';
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

  elemDropDown: HTMLDivElement | null = null; // not native

  elemDropDownClose: HTMLButtonElement | null = null; // not native

  elemListBody: HTMLUListElement | null = null; // not native

  elemInputSearch: HTMLInputElement | null = null; // not native

  elemTitle!: HTMLDivElement; // not native

  confirmOk: HTMLButtonElement | null = null; // not native

  confirmNo: HTMLButtonElement | null = null; // not native

  elemControl: HTMLDivElement | null = null; // not native

  elemSelectAll: HTMLButtonElement | null = null; // not native

  elemResetAll: HTMLButtonElement | null = null; // not native

  cloneClasses = '';

  isShowCheckbox = false;

  bodyLiHTMLBeforeFromSelect: null | string = null;

  bodyLiHTMLAfterFromSelect: null | string = null;

  isFloatWidth = false;

  bodyOpenClass = `${initClass}--body_open`;

  constructor(select: HTMLSelectElement, options: ISimpleSelectOptions, localOptions: IItemLocalOptions) {
    const { id, isNative } = localOptions;
    this.$select = select;
    this.isMulti = select.multiple;
    this.id = id;
    this.isNative = isNative;

    this.options = cloneObj(options);
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

    const dataConfirm = this.$select.dataset[toCamelCase('simple-is-confirm')];
    if (this.isMulti && dataConfirm) {
      this.options.isConfirmInMulti = dataConfirm === '1' || dataConfirm === 'true';
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

    const dataResetAll = toCamelCase('simple-reset-all');
    if (dataResetAll in this.$select.dataset) {
      const resReset = this.$select.dataset[dataResetAll];
      this.options.resetAll = !(resReset === 'false' || resReset === '0');
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
  }

  initDom() {
    this.createList(false);
    this.createHTML();

    this.state.subscribe('items', (_val: IOptionItems[]) => {
      this.createListHTML();
      this.createTitleHTML();
    });
    this.state.subscribe('isOpen', (val: boolean) => {
      this.createListHTML();
      this.createTitleHTML();

      this.toggleTabIndex(val);
    });
    this.state.subscribe('isFloat', (val: boolean) => {
      this.isFloatWidth = val;
      const cls = getClass('float', true);
      this.elemWrap.classList.toggle(cls, val);
    });
  }

  toggleTabIndex(isOpen: boolean) {
    const tabIndex = isOpen ? 0 : -1;

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

  public updateHTML() {
    this.createList(true);
  }

  private createHTML() {
    this.$select.classList.add(this.classSelectInit);
    this.$select.tabIndex = -1;

    this.elemTopBody.className = getClass('top_body');
    this.elemTopBody.tabIndex = this.isDisabled ? -1 : 0;

    this.createIcon();
    this.elemTop.append(this.elemTopBody);
    let resClassesWrap = initClass;
    if (this.options.isCloneClass) {
      resClassesWrap += ` ${this.cloneClasses}`;
    }
    if (this.$select.hasAttribute('data-simple-add-classes')) {
      resClassesWrap += ` ${this.$select.getAttribute('data-simple-add-classes')}`;
    }
    if (this.isDisabled) {
      resClassesWrap += ` ${getClass('disabled', true)}`;
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
    this.elemWrap.append(this.elemTop);

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

    this.elemDropDown.prepend(this.elemControl);

    const classControl = getClass('control');
    if (this.options.selectAll) {
      this.elemSelectAll = createButton();
      this.elemSelectAll.className = `${classControl} ${getClass('select_all', true, classControl)}`;

      this.elemSelectAll.innerHTML = `<span class="${getClass('select_all__icon')}"></span> ${this.options.locale.selectAll}`;

      this.elemControl.append(this.elemSelectAll);
    }

    if (this.options.resetAll) {
      this.elemResetAll = createButton();
      this.elemResetAll.className = `${classControl} ${getClass('reset_all', true, classControl)}`;

      this.elemResetAll.innerHTML = `<span class="${getClass('reset_all__icon')}"></span> ${this.options.locale.resetAll}`;

      this.elemControl.append(this.elemResetAll);
    }
  }

  private createIcon() {
    const icon = document.createElement('span');
    icon.className = getClass('icon');
    this.elemTopBody.append(icon);
  }

  private createDropDown() {
    if (this.isNative) {
      return;
    }
    this.elemDropDown = document.createElement('div');
    this.elemDropDown.className = getClass('body');
    this.elemListBody = document.createElement('ul');

    this.elemListBody.className = getClass('list');

    this.elemWrap.append(this.elemDropDown);
    this.elemDropDown.append(this.elemListBody);

    this.elemDropDownClose = createButton();
    this.elemDropDownClose.classList.add(getClass('close'));

    this.elemDropDown.append(this.elemDropDownClose);

    if (this.isMulti) {
      this.createIsConfirmInMultiHTML();
    }
    this.handlerChangeChecked();
  }

  private createIsConfirmInMultiHTML() {
    const confirm = document.createElement('div');

    const classesItem = getClass('bottom_control');
    this.confirmOk = createButton();
    this.confirmNo = createButton();
    confirm.append(this.confirmOk);
    confirm.append(this.confirmNo);

    this.confirmOk.innerHTML = this.options.locale.ok;
    this.confirmNo.innerHTML = this.options.locale.cansel;

    this.confirmOk.className = `${classesItem} ${getClass('ok', true, classesItem)}`;
    this.confirmNo.className = `${classesItem} ${getClass('no', true, classesItem)}`;

    let classes = getClass('bottom_controls');
    if (!this.options.isConfirmInMulti) {
      classes += ` ${getClass('hide', true, classes)}`;
    }
    confirm.className = classes;

    this.elemDropDown?.append(confirm);
  }

  private createTitleHTML() {
    if (!this.elemTitle) {
      this.elemTitle = document.createElement('div');
      this.elemTitle.className = getClass('title');
      this.elemTopBody.prepend(this.elemTitle);
    }

    const itemsChecked = this.getChecked();

    this.elemTop.title = '';
    const isPlaceholder = !itemsChecked.length;
    let title:string = this.titlePlaceholder;
    if (itemsChecked.length) {
      let attrTitle = '';
      itemsChecked.forEach((item, index) => {
        if (index !== 0) {
          attrTitle += `${this.options.sepChars}<span class="${getClass('sep_space', true)}">&nbsp;</span>`;
        }
        attrTitle += `${item.title}`;
      });
      this.elemTop.title = attrTitle;

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
    this.elemTitle.classList.toggle('SimpleSel__title--placeholder', isPlaceholder);
    this.elemTitle.classList.toggle('SimpleSel__title--fill', !isPlaceholder);

    this.elemWrap.classList.toggle(getClass('fill', true), !isPlaceholder);
  }

  protected createListHTML() {
    if (!this.elemListBody) {
      return;
    }
    let resBodyList = '';
    let countShowItem = 0;
    let countCheckedItems = 0;
    let countCheckedFullItems = 0;

    // this.items.forEach(group => {
    this.state.getState('items').forEach((group:IOptionItems) => {
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
        resBodyList += `<div class="${getClass('group_items')}">`;
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
    this.elemListBody.innerHTML = resBodyList;
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
    this.elemInputSearch.type = 'text';
    this.elemInputSearch.tabIndex = -1;
    this.elemInputSearch.autocomplete = 'off';
    this.elemInputSearch.ariaAutoComplete = 'none';
    this.elemInputSearch.inputMode = 'off';
    this.elemInputSearch.placeholder = this.options.locale.searchText;
    this.elemInputSearch.name = `${initClass}_name_${this.id}`;

    const className = getClass('search');
    if (isSearchInDropdown) {
      if (this.elemDropDown) {
        this.elemInputSearch.className = `${className} ${getClass('dropdown', true, className)}`;
        this.elemDropDown.prepend(this.elemInputSearch);
      }
    } else {
      this.elemInputSearch.className = `${className} ${getClass('top', true, className)}`;
      this.elemTop.append(this.elemInputSearch);
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
      result += `<label class="${getClass('group_title')}">${data.titleGroup}</label>`;
      result += `<ul class="${getClass('group')}">`;
    }
    data.items.forEach((option) => {
      if (!option.isShowFilter) {
        return;
      }
      countShow++;
      const classLiInit = getClass('list_item');
      let classLi = classLiInit;
      if (option.checked) {
        countChecked++;
        classLi += ` ${getClass('checked', true, classLiInit)}`;

        if (option.value) {
          countCheckedFull++;
        }
      }
      if (option.disabled) {
        classLi += ` ${getClass('disabled', true, classLiInit)}`;
      }
      if (!option.value) {
        classLi += ` ${getClass('not_value', true, classLiInit)}`;
      }

      let dataAttr = `data-sel-group-id="${data.idGroup}"`;
      dataAttr += ` data-sel-position="${option.position}"`;
      dataAttr += ` data-sel-id="${option.id}"`;

      if (option.value) {
        dataAttr += ` data-sel-value="${option.value}"`;
      }

      dataAttr += ' data-sel-opt-item';
      dataAttr += ` data-sel-opt-checked="${option.checked}"`;
      dataAttr += ` data-sel-opt-disabled="${option.disabled}"`;

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
