import { IItemLocalOptions, ISimpleSelectOptions } from './types/simpleSelect.types';
import { IOptionItems } from './types/item.types';
import {
  cloneObj,
  compareObj,
  getCreateListItem,
  toCamelCase,
  triggerInputEvent,
} from './utils/simpleSelection.utils';
import { SimpleSelectItemDOM } from './simpleSelectItemDOM';

export class SimpleSelectItem extends SimpleSelectItemDOM {
  closeOutsideHandler!: (e:MouseEvent) => void; // not native

  closeEscHandler!: (e:KeyboardEvent) => void; // not native

  changeListener!: (e:Event) => void; // not native

  searchHandler!: (e:Event) => void; // not native

  handleResize!: (e: MediaQueryList | null) => void; // not native

  mql: MediaQueryList | null = null;

  countOpen = 0;

  multiDebounceTime = 0;

  timeoutDebounceId: NodeJS.Timeout | null = null;

  constructor(select: HTMLSelectElement, options: ISimpleSelectOptions, localOptions: IItemLocalOptions) {
    super(select, options, localOptions);

    if (!select) {
      throw Error('Select is required');
    }
    this.init();
    super.initDom();
    this.initAfterDom();
  }

  init() {
    this.changeListener = this.changeListenerInit.bind(this);
    this.$select.addEventListener('change', this.changeListener);

    this.searchHandler = this.searchHandlerInit.bind(this);
    this.closeOutsideHandler = this.closeOutsideHandlerInit.bind(this);
    this.closeEscHandler = this.closeEscHandlerInit.bind(this);

    this.handleResize = this.handleResizeInit.bind(this);

    if (this.options.callbackInitialization) {
      this.options.callbackInitialization(this);
    }

    if (!this.isNative && this.options.floatWidth) {
      this.mql = window.matchMedia(`screen and (max-width: ${this.options.floatWidth}px)`);
      if (this.mql) {
        // @ts-ignore
        this.mql.onchange = this.handleResize;
        this.handleResizeInit(this.mql);
      }
    }

    this.state.subscribe('isOpen', (val: IOptionItems[]) => {
      this.toggleOpenHandler();
      if (!val && this.options.isConfirmInMulti) {
        this.createList();
      }
      if (!val) {
        if (this.elemInputSearch) {
          this.elemInputSearch.value = '';
          this.state.setState('filterStr', '');
        }
      }
    });

    this.state.subscribe('filterStr', (val: string) => {
      this.filterList(val);
    });

    if (!this.isNative && !this.options.isAlwaysOpen) {
      this.elemTopBody.onclick = this.clickToggleOpen.bind(this);
      this.elemTopBody.onkeyup = this.clickToggleOpen.bind(this);
    }
  }

  private handleResizeInit(e: MediaQueryList | null) {
    if (!e) {
      return;
    }

    if (e.matches) {
      this.state.setState('isFloat', true);
    } else {
      this.state.setState('isFloat', false);
    }
  }

  private initAfterDom() {
    if (this.confirmOk) {
      this.confirmOk.onclick = this.confirmOkHandler.bind(this);
    }
    if (this.confirmNo) {
      this.confirmNo.onclick = this.confirmNoHandler.bind(this);
    }

    if (this.options.callbackInitialized) {
      this.options.callbackInitialized(this);
    }

    if (this.isMulti && !this.options.isConfirmInMulti) {
      if (toCamelCase('simple-debounce-time') in this.$select.dataset) {
        this.multiDebounceTime = Number(this.$select.dataset[toCamelCase('simple-debounce-time')]);
      } else if (this.options.debounceTime || this.options.debounceTime === 0) {
        this.multiDebounceTime = this.options.debounceTime;
      }
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
  }

  debounce<T extends (
    ...args: never[]) => void>(
    func: T,
    delay: number,
  ): (...args: Parameters<T>) => void {
    return (...args: Parameters<T>): void => {
      if (this.timeoutDebounceId) {
        clearTimeout(this.timeoutDebounceId);
      }

      this.timeoutDebounceId = setTimeout(() => {
        func(...args);
        this.timeoutDebounceId = null;
      }, delay);
    };
  }

  confirmOkHandler(e:MouseEvent) {
    e.preventDefault();

    this.confirmOkBuild();
  }

  confirmOkBuild() {
    const { options } = this.$select;
    if (!this.elemListBody) {
      return;
    }
    const liItems: NodeListOf<HTMLLIElement> = this.elemListBody.querySelectorAll('[data-sel-position]');
    liItems.forEach((item:HTMLLIElement) => {
      const pos = parseInt(item.dataset[toCamelCase('sel-position')]!, 10);
      if (!pos && pos !== 0) {
        return;
      }
      const option = options[pos];
      if (!option || option.disabled) {
        return;
      }
      option.selected = item.dataset[toCamelCase('sel-opt-checked')] === 'true';
    });
    this.state.setState('isOpen', false);
    this.triggerInit();
  }

  confirmNoHandler(e:MouseEvent) {
    e.preventDefault();
    this.state.setState('isOpen', false);
  }

  closeHandler(e:MouseEvent) {
    e.preventDefault();
    this.state.setState('isOpen', false);
  }

  selectAllHandler(e:MouseEvent) {
    e.preventDefault();
    Array.from(this.$select.options).forEach((option) => {
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

  resetAllHandler(e:MouseEvent) {
    e.preventDefault();
    Array.from(this.$select.options).forEach((option) => {
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
  triggerSetup(e:MouseEvent) {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    const targetLi = target.closest('li');
    if (targetLi) {
      this.changeClickItem(targetLi);
    }
  }

  changeClickItemDom(item: HTMLLIElement) {
    if (item.dataset[toCamelCase('sel-opt-checked')] === 'true') {
      item.dataset[toCamelCase('sel-opt-checked')] = 'false';
      item.classList.remove('SimpleSel__list_item--checked');
    } else {
      item.dataset[toCamelCase('sel-opt-checked')] = 'true';
      item.classList.add('SimpleSel__list_item--checked');
    }
  }

  changeClickItem(item: HTMLLIElement) {
    if (item) {
      const pos = Number(item.dataset[toCamelCase('sel-position')]) || 0;
      const option = this.$select.options[pos];
      if (option && !option.disabled) {
        if (this.isMulti) {
          if (this.options.isConfirmInMulti || this.isFloatWidth) {
            this.changeClickItemDom(item);
          } else {
            option.selected = !option.selected;
            this.changeClickItemDom(item);
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

  multiDebounceChange() {
    // can be overridden for multiselect - debounce
    this.triggerInit();
  }

  triggerInit() {
    triggerInputEvent(this.$select);
  }

  clickToggleOpen(e:MouseEvent | KeyboardEvent) {
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

  closeOutsideHandlerInit(e: MouseEvent) {
    const target: HTMLElement = e.target as HTMLElement;
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

  closeEscHandlerInit(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      this.state.setState('isOpen', false);
    }
    if (e.code === 'Tab') {
      e.preventDefault();
      e.stopPropagation();

      if (!this.elemWrap.contains(e.target as HTMLElement)) {
        this.state.setState('isOpen', false);
      }
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      this.keyBoardChangeChecked(e.key === 'ArrowDown');
    }
    if (e.key === 'Enter') {
      const target = e.target as HTMLLIElement;
      if (target && toCamelCase('sel-opt-item') in target.dataset) {
        e.preventDefault();
        e.stopPropagation();
        this.changeClickItem(target);
      }
    }
  }

  keyBoardChangeChecked(isDown: boolean) {
    // eslint-disable-next-line max-len
    const liItems: NodeListOf<HTMLLIElement> = this.elemListBody!.querySelectorAll('[data-sel-position]:not([data-sel-opt-disabled="true"])');
    if (!liItems.length) {
      return;
    }

    let indCurrent = 0;
    let firstOption!: HTMLLIElement;
    liItems.forEach((el, i) => {
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

  searchHandlerInit(e: Event) {
    const target = e.target as HTMLInputElement;
    if (!target) {
      return;
    }
    const { value } = target;
    this.state.setState('filterStr', value);
  }

  toggleOpenHandler() {
    const isOpen = this.state.getState('isOpen');

    if (isOpen) {
      this.elemWrap.classList.add('SimpleSel--open');
      document.addEventListener('click', this.closeOutsideHandler);
      document.addEventListener('keyup', this.closeEscHandler);

      if (this.elemInputSearch) {
        setTimeout(() => {
          this.elemInputSearch!.focus();
        }, 50);
      }

      if (this.options.callbackOpen) {
        this.options.callbackOpen(this);
      }
      this.countOpen++;
      if (this.elemDropDown) {
        setTimeout(() => {
          this.elemDropDown!.scrollTop = 0;
        }, 10);
      }
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
  }

  private changeListenerInit(e: Event) {
    if (this.options.callbackChangeSelect) {
      this.options.callbackChangeSelect(e, this);
    }

    this.createList(true);
  }

  public getSelect() {
    return this.$select;
  }

  protected handlerChangeChecked() {
    if (this.elemListBody) {
      this.elemListBody.onmouseup = this.triggerSetup.bind(this);
    }
  }

  protected createList(isCompare = false) {
    const newItems:IOptionItems[] = [];
    const group = this.$select.querySelectorAll('optgroup');
    if (group && group.length) {
      group.forEach((item, ind) => {
        newItems.push(getCreateListItem(item, (ind + 1).toString(), true));
      });
    } else {
      newItems.push(getCreateListItem(this.$select, '1', false));
    }

    if (isCompare) {
      const old = this.state.getState('items');
      if (!compareObj(old, newItems)) {
        this.state.setState('items', newItems);
      }
    } else {
      this.state.setState('items', newItems);
    }
  }

  private filterList(val: string) {
    val = val.toLowerCase();
    const items:IOptionItems[] = cloneObj(this.state.getState('items'));

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
    this.state.setState('items', items);
  }

  inputSearchHandler() {
    if (!this.elemInputSearch) {
      return;
    }
    this.elemInputSearch.addEventListener('input', this.searchHandler);
  }

  public detachItem() {
    if (this.options.callbackDestroyInit) {
      this.options.callbackDestroyInit(this);
    }
    const parentElement = this.elemWrap.parentNode;
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

    parentElement!.replaceChild(this.$select, this.elemWrap);
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
}
