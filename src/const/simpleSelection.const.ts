import { ISimpleSelectLocale, ISimpleSelectOptions } from '../types/simpleSelect.types';

export const simpleSelectLocale: ISimpleSelectLocale = {
  noSearch: 'No matches for',
  searchText: 'Search',
  title: 'Select',
  selected: 'Selected:',
  all: 'all',
  ok: 'Ok',
  cansel: 'Cansel',
  selectAll: 'Select all',
  resetAll: 'Reset all',
};
export const simpleSelectionOptions: ISimpleSelectOptions = {
  isSearch: false,
  isSearchInDropdown: false,

  countShowSelected: 3,
  isOnlyPlaceholder: false,

  isConfirmInMulti: false,
  isConfirmInMultiOkClickOutside: false,

  nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
  locale: simpleSelectLocale,

  sepChars: ',',
  isUp: false,

  isAlwaysOpen: false,

  floatWidth: 767,
  isCloneClass: true,
  selectAll: false,
  selectAllAfterClose: true,
  resetAll: false,
  resetAllAfterClose: true,

};

export const nameSelect = 'SimpSelect';
const markPrefix = 'simple-select-';
export const nameMark = `${markPrefix}init`;

export const initClass = 'SimpleSel';
