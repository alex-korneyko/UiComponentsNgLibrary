import {Component, Input, OnInit} from '@angular/core';
import {DropdownMenuItem} from '../dropdown-menu-item';
import {Size} from '../../../../size.enum';

@Component({
  selector: 'bs-dropdown-menu-item-content',
  templateUrl: './dropdown-menu-item-content.component.html',
  styleUrls: [
    './dropdown-menu-item-content.component.css',
    '../../../../../styles/bs-variables.css'
  ]
})
export class DropdownMenuItemContentComponent<T> implements OnInit {

  @Input()
  dropdownMenuItem: DropdownMenuItem<T>

  @Input()
  data: T

  sizeEnum = Size;

  constructor() { }

  ngOnInit(): void {
  }

}
