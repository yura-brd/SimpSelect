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
  isSearch: true,
  isSearchInDropdown: false,

  countShowSelected: 2,
  isConfirmInMulti: false,
  isConfirmInMultiOkClickOutside: false,

  nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
  locale: simpleSelectLocale,

  sepChars: ',',
  isUp: false,

  floatWidth: 767,
  isCloneClass: true,
  selectAll: false,
  selectAllAfterClose: true,
  resetAll: false,
  resetAllAfterClose: true,

};

export const nameSelect = 'SimSel';
const markPrefix = 'simple-select-';
export const nameMark = `${markPrefix}init`;

export const initClass = 'SimpleSel';
