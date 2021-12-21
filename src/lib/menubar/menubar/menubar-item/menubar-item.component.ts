import {Component, Input, OnInit} from '@angular/core';
import {MenubarItem} from './menubar-item';
import {Size} from '../../../size.enum';
import {DropdownDirection} from '../../../dropdown/dropdown-direction.enum';
import {DropdownEventType} from '../../../dropdown/dropdown-event-type.enum';

@Component({
  selector: 'bs-menubar-item',
  templateUrl: './menubar-item.component.html',
  styleUrls: [
    './menubar-item.component.css',
    '../../../../styles/bs-variables.css'
  ]
})
export class MenubarItemComponent implements OnInit {

  @Input() menubarItem: MenubarItem;

  Size = Size;
  DropdownDirection = DropdownDirection;
  DropdownEventType = DropdownEventType;

  clickedNow = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  MenuOnShowHandler = () => {

  }
}
