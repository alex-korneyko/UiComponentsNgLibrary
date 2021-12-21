import { Injectable } from '@angular/core';
import {DropdownMenuComponent} from './dropdown-menu-component/dropdown-menu.component';
import {DropdownService} from '../../dropdown/dropdown/dropdown.service';

@Injectable({
  providedIn: 'root'
})
export class DropdownMenuService {

  constructor(private dropdownService: DropdownService) { }

  Show(bsDropdownMenu: DropdownMenuComponent<any>, event: MouseEvent) {
    this.dropdownService.Show(bsDropdownMenu.dropdownComponent, event);
  }
}
