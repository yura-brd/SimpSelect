import { SimpleSelectItem } from '../simpleSelectItem';

export interface ISimpleSelectLocale {
  noSearch: string;
  searchText: string;
  title: string;
  selected: string;
  all: string;
  ok: string;
  cansel: string;

  resetAll: string;
  selectAll: string;
}
export interface ISimpleSelectOptions {
  countShowSelected: number

  isConfirmInMulti: boolean;
  isConfirmInMultiOkClickOutside: boolean;

  searchTypeInput: string;
  isSearch: boolean;
  isSearchInDropdown: boolean;
  nativeOnDevice: string[];
  locale: ISimpleSelectLocale;

  debounceTime?: number;

  floatWidth?: number;

  isRemoveTop: boolean,

  sepChars: string;

  selectAll: boolean;
  selectAllAfterClose: boolean;
  resetAll: boolean;
  resetAllAfterClose: boolean;
  isCloneClass: boolean;

  isOnlyPlaceholder: boolean;
  isUp: boolean;

  isAlwaysOpen: boolean;
  isAlwaysOpenShowDisabledTabindex: boolean;

  detectNative?: () => boolean;

  callbackInitialization?: (item:SimpleSelectItem) => void;
  callbackInitialized?: (item:SimpleSelectItem) => void;
  callbackOpen?: (item:SimpleSelectItem) => void;
  callbackClose?: (item:SimpleSelectItem) => void;
  callbackDestroyInit?: (item:SimpleSelectItem) => void;
  callbackDestroy?: (item:SimpleSelectItem) => void;
  callbackChangeSelect?: (e: Event, item:SimpleSelectItem) => void;

  changeBodyLi?: (liBody:HTMLDivElement, option: HTMLOptionElement) => HTMLElement | string;
}
// export interface ISimpleSelectOptions extends Required<ISimpleSelectProps> {
// }
export interface IItemLocalOptions {
  id: string;
  isNative: boolean;
}

export type ISimpleSelectProps = Partial<ISimpleSelectOptions>;
