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

  applicationTitle = input.required();
  theme = input.required();

  toggleTheme = (): void => this.themeEmitter.emit();

}
