import { ISimpleSelectOptions, ISimpleSelectProps } from './types/simpleSelect.types';
import { selectorType } from './types/item.types';

import {
  nameMark, nameSelect, simpleSelectionOptions,
} from './const/simpleSelection.const';
import { createDataAttr, toCamelCase } from './utils/simpleSelection.utils';
import { SimpleSelectItem } from './simpleSelectItem';
import './style.css';

export default class SimpleSelect {
  callCount = Date.now();

  countInit = 0;

  // $selects: HTMLSelectElement[] = [];
  $selects: SimpleSelectItem[] = [];

  options!: ISimpleSelectOptions;

  nameMarkTransform = toCamelCase(nameMark);

  dataNameMark = createDataAttr(nameMark);

  isNative!: boolean;

  constructor(selector: selectorType, options?: ISimpleSelectProps) {
    if (!selector) {
      selector = 'select';
    }
    // this.$selects = Array.from(document.querySelectorAll(selector));

    this.options = {
      ...simpleSelectionOptions,
      ...options,
    };

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

  detectMobile() {
    if (this.options.detectNative) {
      this.isNative = this.options.detectNative();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    let res = false;
    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
    for (let i = 0; i < this.options.nativeOnDevice.length; i++) {
      if (ua.toString().toLowerCase().indexOf(this.options.nativeOnDevice[i].toLowerCase()) > 0) {
        if (this.options.nativeOnDevice[i]) {
          res = true;
        }
      }
    }
    this.isNative = res;
  }

  private init(selects: HTMLSelectElement[]) {
    this.detectMobile();
    selects.forEach(($select) => {
      this.build($select);
    });
  }

  createMethods(select: SimpleSelectItem) {
    const self = this;
    return {
      getHistory: () => select.history,
      getHistoryLast: () => {
        if (select.history.length) {
          return select.history[select.history.length - 1];
        }
        return null;
      },
      getHistoryFirst: () => {
        if (select.history.length) {
          return select.history[0];
        }
        return null;
      },
      getNativeSelect: () => select.getSelect(),
      reload() {
        self.rebuild(select);
      },
      update() {
        select.updateHTML();
      },
      detach() {
        self.detach(select);
      },
    };
  }

  setMethods(select: SimpleSelectItem) {
    // @ts-ignore
    select.$select[nameSelect] = this.createMethods(select);
  }

  setMethodsClear(select: SimpleSelectItem) {
    // @ts-ignore
    delete select.$select[nameSelect];
  }

  private build(select: HTMLSelectElement) {
    const isProcessed = this.nameMarkTransform in select.dataset;
    if (isProcessed) {
      console.warn('This element has already been initialized', select);
      return;
    }

    this.countInit += 1;
    const id = `${this.callCount}-${this.countInit}`;
    select.setAttribute(this.dataNameMark, id);
    // this.$selects.push(select);

    const newSelect = new SimpleSelectItem(select, this.options, {
      id, isNative: this.isNative,
    });
    this.$selects.push(newSelect);
    this.setMethods(newSelect);
  }

  private detach(itemSelect: SimpleSelectItem) {
    itemSelect.detachItem();

    itemSelect.$select.removeAttribute(this.dataNameMark);
    this.setMethodsClear(itemSelect);
    this.$selects = this.$selects.filter((item) => item !== itemSelect);
  }

  public rebuild(selectsItems: SimpleSelectItem) {
    const select = selectsItems.$select;
    this.detach(selectsItems);
    this.build(select);
  }

  public getSelects() {
    return this.$selects;
  }

  public getSelectFirst() {
    // return this.$selects[0];
    return this.createMethods(this.$selects[0]);
  }

  public getSelectById(id:string) {
    const search = this.$selects.filter((item) => item.id === id)[0];
    if (!search) {
      return null;
    }
    return this.createMethods(search);
  }
}
