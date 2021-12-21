import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Menubar} from './menubar';
import {MenubarService} from './menubar.service';

@Component({
  selector: 'bs-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: [
    './menubar.component.css',
    '../../../styles/bs-variables.css'
  ]
})
export class MenubarComponent implements OnInit, OnDestroy {

  @Input() menubar: Menubar;

  clickedNow = false;

  constructor(private menubarService: MenubarService) {
  }

  ngOnInit(): void {
    this.menubarService.AddMenubarComponent(this);
  }

  ngOnDestroy() {
    this.menubarService.RemoveMenubarComponent(this);
  }

  MenubarClickedHandler() {
    this.clickedNow = true;
    this.menubar.isActive = true;
  }
}
