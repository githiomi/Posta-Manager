import { Component, EventEmitter, Output, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: 'header.component.html',
  styles: ``
})
export class HeaderComponent {

  @Output()
  themeEmitter = new EventEmitter();

  @Output()
  menuToggleEmitter = new EventEmitter();

  theme = input.required();

  toggleSideBar(): void {
    this.menuToggleEmitter.emit()
  };

  toggleTheme(): void {
    this.themeEmitter.emit();
  }

}
