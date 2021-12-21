import {DropdownComponent} from './dropdown/dropdown.component';

export interface IDropdownContent<T> {
  dropdownContainerComponent: DropdownComponent<T>;
  data: T | undefined;
}
