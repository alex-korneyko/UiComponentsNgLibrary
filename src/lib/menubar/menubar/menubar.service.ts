import { Injectable } from '@angular/core';
import {MenubarComponent} from './menubar.component';

@Injectable({
  providedIn: 'root'
})
export class MenubarService {

  menubarComponents = new Array<MenubarComponent>();

  constructor() {
    window.addEventListener('click', this.BrowserAreaMouseEvent);
    window.addEventListener('dragover', this.BrowserAreaMouseEvent);
  }

  BrowserAreaMouseEvent = () => {
    this.menubarComponents.forEach(component => {
      if (component.clickedNow) {
        component.clickedNow = false;
      } else {
        component.menubar.isActive = false;
      }
    })
  }

  AddMenubarComponent(component: MenubarComponent) {
    this.menubarComponents.push(component);
  }

  RemoveMenubarComponent(component: MenubarComponent) {
    let index = this.menubarComponents.findIndex(cmp => cmp == component);
    if (index > -1) {
      this.menubarComponents.splice(index, 1);
    }
  }
}
