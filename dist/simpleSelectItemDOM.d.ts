import { IItemLocalOptions, ISimpleSelectOptions } from './types/simpleSelect.types';
import { IOptionItem } from './types/item.types';
export declare class SimpleSelectItemDOM {
    options: ISimpleSelectOptions;
    $select: HTMLSelectElement;
    id: string;
    titlePlaceholder: string;
    isDisabled: boolean;
    isMulti: boolean;
    state: {
        getState: (k?: string | undefined) => any;
        setState: (k: string, val: any) => void;
        subscribe(k: string, cb: any): () => void;
        subscribeAll(cb: any): () => void;
        unSubscribe(k: string, cb: any): void;
    };
    classSelectInit: string;
    isNative: boolean;
    elemWrap: HTMLDivElement;
    elemTop: HTMLDivElement;
    elemTopBody: HTMLDivElement;
    elemDropDownWrap: HTMLDivElement | null;
    elemDropDown: HTMLDivElement | null;
    elemDropDownClose: HTMLButtonElement | null;
    elemListBody: HTMLUListElement | null;
    elemInputSearch: HTMLInputElement | null;
    elemTitle: HTMLDivElement;
    confirmWrap: HTMLElement | null;
    confirmOk: HTMLButtonElement | null;
    confirmNo: HTMLButtonElement | null;
    elemControl: HTMLDivElement | null;
    elemSelectAll: HTMLButtonElement | null;
    elemResetAll: HTMLButtonElement | null;
    elemDebounceProgressBar: HTMLDivElement | null;
    cloneClasses: string;
    isShowCheckbox: boolean;
    bodyLiHTMLBeforeFromSelect: null | string;
    bodyLiHTMLAfterFromSelect: null | string;
    isFloatWidth: boolean;
    bodyOpenClass: string;
    multiDebounceTime: number;
    isDebounceStatusBar: boolean;
    constructor(select: HTMLSelectElement, options: ISimpleSelectOptions, localOptions: IItemLocalOptions);
    optionOverride(): void;
    initDom(): void;
    toggleTabIndex(isOpen: boolean): void;
    updateHTML(): void;
    private createHTML;
    private createControlHTML;
    private createIcon;
    private createDropDown;
    private createIsConfirmInMultiHTML;
    private createTitleHTML;
    private filterList;
    protected createListHTML(isFilter?: boolean): void;
    private createInputHTML;
    getChecked(): IOptionItem[];
    private createLi;
    private createLiBody;
    protected handlerChangeChecked(): void;
    protected createList(_isCompare: boolean): void;
    protected inputSearchHandler(): void;
}
