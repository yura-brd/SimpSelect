# simp-select

Replacing native select, multiselect

## Features
- ~37 KB
- no dependencies
- select, multiselect
- Optgroup
- Search
- Mobile native select (setting)
- 

## Installation
```
npm install simp-select --save
```
Or you can load it via a script tag as follows:
```
<script src="https://unpkg.com/simp-select@1.0.17/dist/simpleSelect.js" ></script>
<script src="https://unpkg.com/simp-select@1.0.17/dist/polyfill.js" ></script> - for IE 11
Or get last version
<script src="https://unpkg.com/simp-select"></script>
```
## Importing
### ES6
```
import SimpSelect from 'simp-select';
Types
import { ISimpleSelectProps, ISimpleSelectLocale } from 'simp-select/dist/types/simpleSelect.types';
```
### CommonJS
```
var SimpSelect = require('simp-select');
```
### Global variable
the variable `SimpSelect` attached to `window` or `this` depending on what environment you are using

## API
#### `new ScrollToVertical(selector, <options>)`

| Property                                                             | Value                                                                                                                                                                                                               |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **selector**(required)                                               | string(css selector), HTMLSelectElement, HTMLSelectElement(Array, HTMLSelectElement)                                                                                                                                |
| **OPTIONS:**                                                         |                                                                                                                                                                                                                     |
| **countShowSelected**:number*                                        | <p>default: **3**  </p> Show count selected options. If more then this count, showed template: Selected: 4<p>Or - `data-simple-count-shows-selected="3"` - in select</p>                                            |
| **isSearch**:boolean*                                                | <p>default: **false**  </p>  Show input for filter items <p>Or - `data-simple-select-search="true"` - in select</p>                                                                                                 |
| **isSearchInDropdown**:boolean*                                      | <p>default: **false**  </p>  Show search input inside dropdown <p>Or - `data-simple-select-search-dropdown="true"` - in select</p>                                                                                  |
| **isConfirmInMulti**:boolean*                                        | <p>default: **false**  </p>  Show buttons `OK` and `Cansel`.  Only Multiselect <p>Or `data-simple-is-confirm="true" - in select`</>                                                                                 |
| **isConfirmInMultiOkClickOutside**:boolean                           | <p>default: **false**  </p> Click outside like click by button `OK`. Only if `isConfirmInMulti=true`                                                                                                                |
| **nativeOnDevice**:string[]                                          | <p>default: **'Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'**  </p> The system default select list is rendered on the matched device(Check useragent ).                       |
| **debounceTime**:number*                                             | <p>default: **0**  </p> The change event will not be triggered immediately, but after a specified amount of time. <p>Or `data-simple-debounce-time="1000"` in select</p>                                            |
| **floatWidth**:number*                                               | <p>default: **767**  </p> Minimum screen width of device below which the dropdown is rendered like popup. <p>Or `data-simple-float-width="500" in select. Or data-simple-float-none="true" - cancel for select`</p> |
| **sepChars**:string                                                  | <p>default: **,**  </p>   Separator for selected element. Show                                                                                                                                                      |
| **selectAll**:boolean*                                               | <p>default: **false**</p>  Show button - `Select all` <p>Or `data-simple-select-all="true"` in select</p>                                                                                                           |
| **selectAllAfterClose**:boolean                                      | <p>default: **false**</p>  Close dropdown after click for `select all`                                                                                                                                              |
| **resetAll**:boolean*                                                | <p>default: **false**</p>  Show button - `Reset all` <p>Or `data-simple-reset-all="true"` in select</p>                                                                                                             |
| **resetAllAfterClose**:boolean                                       | <p>default: **true**</p>  Close dropdown after click for `Reset all`                                                                                                                                                |
| **isCloneClass**:boolean                                             | <p>default: **true**</p>  Clone class from native select to wrapper created select                                                                                                                                  |
| **isRemoveTop**:boolean*                                             | <p>default: **false**</p> Do not create top element (Title, arrow, search ) (default: false) <p>Or `data-simple-remove-top="true"` in select</p>                                                                    |
| **isUp**:boolean*                                                    | <p>default: **false**</p> Dropdown rendering  the direction in which to open the dropdown (default: false) <p>Or `data-simple-up="true"` in select</p>                                                              |
| **isAlwaysOpen**:boolean*                                            | <p>default: **false**</p> Dropdown always open (default: false) <p>Or `data-simple-always-open="true"` in select</p>                                                                                                |
| **isAlwaysOpenShowDisabledTabindex**:boolean*                        | <p>default: **false**</p> Set tabindex (tabindex="0") for disabled element (In Always open list)                                                                                                                    |
| **isOnlyPlaceholder**:boolean*                                       | <p>default: **false**</p> Show only placeholder. Don't show selected options (default: false) <p>Or `data-simple-is-only-placeholder="true"` in select</p>                                                          |
| **detectNative**:function                                            | <p>default: **none**</p>  Return `true` if need rendering native select                                                                                                                                             |
| **changeBodyLi**:function                                            | <p>default: **none**</p>  Custom <li>(body) item renderer                                                                                                                                                           |
| **locale**:{key: string}                                             | <p>default: **simpleSelectLocale** **</p>  Object of locales. **                                                                                                                                                    |
| **historyMaxSize**: number                                           | <p>default: **0** **</p>  Maximum number of saved changes. **                                                                                                                                                       |
| ***Options only DOM elements***                                      |                                                                                                                                                                                                                     |
| **data-simple-placeholder="text": Select**                           | Replace default placeholder (locale.title)                                                                                                                                                                          |
| **data-simple-item-html-before="<div>before</div>: Select**          | Add HTML before content (for item Li)                                                                                                                                                                               |
| **data-simple-item-html-after="<div>after</div>": Select**           | Add HTML after content (for item Li)                                                                                                                                                                                |
| **data-simple-add-classes="class1 class2": Select**                  | Add classes for wrapper SimpSelect                                                                                                                                                                                  |
| **data-simple-html-before="<span>before</span>": option**            | Add HTML before content (for item Li)                                                                                                                                                                               |
| **data-simple-html-after="<span>after</span>": option**              | Add HTML after content (for item Li)                                                                                                                                                                                |
| **data-simple-show-checkbox: Select**                                | Show checkbox in item (Li) (for single select)                                                                                                                                                                      |
| ***Callbacks***                                                      |                                                                                                                                                                                                                     |
| **callbackInitialization: (item:SimpleSelectItem) => void**          | Before initialization                                                                                                                                                                                               |
| **callbackInitialized**:(item:SimpleSelectItem) => void;             | After initialization                                                                                                                                                                                                |
| **callbackOpen**: (item:SimpleSelectItem) => void;                   | Open dropdown                                                                                                                                                                                                       |
| **callbackClose**:Open dropdown                                      | Close dropdown                                                                                                                                                                                                      |
| **callbackDestroyInit**: (item:SimpleSelectItem) => void;            | Before destroy SimpSelect                                                                                                                                                                                           |
| **callbackDestroy**: (item:SimpleSelectItem) => void;                | After destroy SimpSelect                                                                                                                                                                                            |
| **callbackChangeSelect** :(e: Event, item:SimpleSelectItem) => void; | Change SimpSelect (change options)                                                                                                                                                                                  |
| ***Methods***                                                        |                                                                                                                                                                                                                     |
| **reload**:select(DomElement).SimpSelect.reload()                    | Reload SimpSelect.                                                                                                                                                                                                  |
| **update**:select(DomElement).SimpSelect.update()                    | Update list (ul in dropdown)                                                                                                                                                                                        |
| **detach**:select(DomElement).SimpSelect.detach()                    | Detach SimpSelect.                                                                                                                                                                                                  |
| **getHistory**:select(DomElement).SimpSelect.getHistory()            | Get history.                                                                                                                                                                                                        |
| **getHistoryLast**:select(DomElement).SimpSelect.getHistoryLast()    | Get history - last element.                                                                                                                                                                                         |
| **getHistoryFirst**:select(DomElement).SimpSelect.getHistoryFirst()  | Get history - first element.                                                                                                                                                                                        |
| ***const simpleSelect = new SimpleSelect('select')***                | Instance of the SimpleSelect plugin object                                                                                                                                                                          |
| **getSelectById('ID')**:simpleSelect.getSelectById('ID')             | Get item SimpSelect for ID (data-simple-select-init="ID" - dem element select)                                                                                                                                      |
| **getSelectFirst()**:simpleSelect.getSelectFirst()                   | Get first item SimpSelect                                                                                                                                                                                           |
| **getSelects()**:simpleSelect.getSelects()                           | Get list SimpSelect                                                                                                                                                                                                 |

**Data attributes in DOM element(select) more important than initialization options.*
```
**Object of locales.
const simpleSelectLocale: = {
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
```


## Example Usage
``` 
import SimpleSelect from 'simp-select';

new SimpleSelect('select');
```
## Browser Support
Supported on all modern browsers

### For IE 11 need polyfills (Or Include file polyfill.js):
#### window.CustomEvent, Array.from, Array.prototype.forEach, NodeList.prototype.forEach, Element.prototype.matches,Element.prototype.closest
