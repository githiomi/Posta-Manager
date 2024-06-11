import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly menuOpened = signal<boolean>(false)

  constructor() { }

  getMenuState(): Signal<boolean> {
    return this.menuOpened.asReadonly();
  }

  toggleState(): void {
    this.menuOpened.update(prev => !prev);
  }
}
