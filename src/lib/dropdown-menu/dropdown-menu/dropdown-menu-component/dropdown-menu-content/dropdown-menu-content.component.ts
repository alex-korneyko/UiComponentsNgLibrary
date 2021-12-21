import { Component, OnInit } from '@angular/core';
import {DropdownComponent} from '../../../../dropdown/dropdown/dropdown.component';
import {DropdownMenu} from '../dropdown-menu';
import {IDropdownMenu} from '../../../idropdown-menu';

@Component({
  selector: 'bs-dropdown-menu-content',
  templateUrl: './dropdown-menu-content.component.html',
  styleUrls: ['./dropdown-menu-content.component.css']
})
export class DropdownMenuContentComponent<T> implements OnInit, IDropdownMenu<T> {

  data: T;
  dropdownContainerComponent: DropdownComponent<T>;
  menu: DropdownMenu<T>
  onInitListeners = Array<() => void>();

  constructor() { }

  ngOnInit(): void {
    this.onInitListeners.forEach(listener => listener())
  }
}
