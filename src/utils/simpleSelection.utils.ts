import { IOptionItem, IOptionItems } from '../types/item.types';
import { initClass } from '../const/simpleSelection.const';

export const toCamelCase = (input:string):string => input.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

export const createDataAttr = (name: string):string => `data-${name}`;

export const ifTrueDataAttr = (attr: string | null): boolean => {
  if (!attr) {
    return false;
  }
  return attr === 'true' || attr === '1';
};

export function triggerInputEvent(element: HTMLElement, type = 'change') {
  const event = new Event(type, {
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
}

export const getCreateListItem = (item: HTMLSelectElement | HTMLOptGroupElement, idGroup: string, isGroup: boolean) => {
  const options = item.querySelectorAll('option');
  const items:IOptionItem[] = [];
  options.forEach((option, ind) => {
    items.push({
      id: (ind + 1).toString(),
      position: option.index,
      title: option.innerHTML,
      // value: option.value,
      value: option.getAttribute('value'),
      checked: option.selected,
      disabled: option.disabled,
      isShowFilter: true,
    });
  });
  const newItem: IOptionItems = {
    isGroup,
    idGroup,
    items,
    isShowFilter: true,
  };
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
