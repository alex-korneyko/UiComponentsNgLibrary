import {IDropdownContent} from '../dropdown/idropdown-content';
import {DropdownMenu} from './dropdown-menu/dropdown-menu-component/dropdown-menu';

export interface IDropdownMenu<T> extends IDropdownContent<T>{
  menu: DropdownMenu<T>
}
