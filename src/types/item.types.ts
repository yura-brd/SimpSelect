export interface IOptionItem {
  id: string;
  title: string;
  value: string | null;
  checked: boolean;
  disabled: boolean;
  position: number;
  isShowFilter: boolean;
}
export interface IOptionItems {
  idGroup: string;
  isGroup: boolean;
  titleGroup?: string;
  isDisabledGroup?:boolean
  items: IOptionItem[]
  isShowFilter: boolean;
}

export interface ICreateLiReturn {
  result: string;
  countShow: number
  countChecked: number
  countCheckedFull: number
}

export type selectorType = string | HTMLSelectElement | NodeListOf<HTMLSelectElement> | HTMLSelectElement[];
