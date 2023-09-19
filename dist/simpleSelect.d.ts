import { ISimpleSelectOptions, ISimpleSelectProps } from './types/simpleSelect.types';
import { selectorType } from './types/item.types';
import './polyfill.js';
import { SimpleSelectItem } from './simpleSelectItem';
import './style.css';
export default class SimpleSelect {
    callCount: number;
    countInit: number;
    $selects: SimpleSelectItem[];
    options: ISimpleSelectOptions;
    nameMarkTransform: string;
    dataNameMark: string;
    isNative: boolean;
    constructor(selector: selectorType, options?: ISimpleSelectProps);
    detectMobile(): void;
    private init;
    createMethods(select: SimpleSelectItem): {
        getInstance: () => HTMLSelectElement;
        reload(): void;
        update(): void;
        detach(): void;
    };
    setMethods(select: SimpleSelectItem): void;
    setMethodsClear(select: SimpleSelectItem): void;
    private build;
    private detach;
    rebuild(selectsItems: SimpleSelectItem): void;
    getSelects(): SimpleSelectItem[];
    getSelectFirst(): {
        getInstance: () => HTMLSelectElement;
        reload(): void;
        update(): void;
        detach(): void;
    };
    getSelectById(id: string): {
        getInstance: () => HTMLSelectElement;
        reload(): void;
        update(): void;
        detach(): void;
    } | null;
}
