import { IOptionItem, IOptionItems } from '../types/item.types';
import { initClass } from '../const/simpleSelection.const';
import { SimpleSelectItemDOM } from '../simpleSelectItemDOM';

export const toCamelCase = (input:string):string => input.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

export const removeExtraSpaces = (str:string):string => str.replace(/\s+/g, ' ').trim();
export const clearSpaceAndEmptyAttr = (str:string):string => str.replace(/\s+|=""/g, '');

// eslint-disable-next-line max-len
export const compareStringWithClearSpace = (str1:string, str2:string):boolean => clearSpaceAndEmptyAttr(str1) === clearSpaceAndEmptyAttr(str2);

export const createDataAttr = (name: string):string => `data-${name}`;

export const ifTrueDataAttr = (attr: string | null): boolean => {
  if (!attr) {
    return false;
  }
  return attr === 'true' || attr === '1';
};

type triggerCustomEventType = 'initialized' | 'open.before' | 'open.after' | 'close.before' | 'close.after' | 'createListBuild'
  | 'resetAll' | 'selectAll' | 'multiConfirm' | 'multiCancel' | 'updateHistory';
type triggerCustomEventDataType = {
  item: SimpleSelectItemDOM,
  [key: string]: any
};
export function triggerCustomEvent(element: HTMLElement, type: triggerCustomEventType, data: triggerCustomEventDataType) {
  const myCustomEvent = new CustomEvent(`simpSelect:${type}`, {
    detail: data,
  });
  element.dispatchEvent(myCustomEvent);
}

export function triggerInputEvent(element: HTMLElement, type = 'change') {
  try {
    const event = new Event(type, {
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(event);
  } catch (e) {
    const event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(event);
  }
}

export const getCreateItem = (option: HTMLOptionElement, index: number) => ({
  id: (index + 1).toString(),
  position: option.index,
  title: option.innerHTML,
  value: option.getAttribute('value'),
  checked: option.selected,
  disabled: option.disabled,
  isShowFilter: true,
});

export const createOptionItems = (isGroup: boolean, idGroup: string, items:IOptionItem[], isShowFilter = true): IOptionItems => {
  return {
    isGroup,
    idGroup,
    items,
    isShowFilter: true,
  };
};

export const getCreateListItem = (item: HTMLSelectElement | HTMLOptGroupElement | HTMLOptionElement, idGroup: string, isGroup: boolean) => {
  // Если есть группы, но может быть option вне группы
  if (item instanceof HTMLOptionElement) {
    return createOptionItems(
      isGroup,
      idGroup,
      [getCreateItem(item, 1)],
      true,
    );
  }
  const options = item.querySelectorAll('option');
  const items:IOptionItem[] = [];
  options.forEach((option, ind) => {
    items.push(getCreateItem(option, ind));
  });
  const newItem: IOptionItems = createOptionItems(
    isGroup,
    idGroup,
    items,
    true,
  );
  if (item instanceof HTMLOptGroupElement) {
    newItem.titleGroup = item.label || '';
    newItem.isDisabledGroup = item.disabled || false;
  }
  return newItem;
};

export const getClass = (cls: string, mod = false, classInit = initClass): string => {
  const sep = mod ? '--' : '__';
  return `${classInit}${sep}${cls}`;
};

export const compareObj = <T1, T2>(obj1:T1, obj2:T2):boolean => JSON.stringify(obj1) === JSON.stringify(obj2);

export const cloneObj = <T>(obj:T):T => JSON.parse(JSON.stringify(obj));

export const createButton = (): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.tabIndex = -1;

  return btn;
};
