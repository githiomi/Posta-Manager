import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from "@angular/material/divider";
import { NgOptimizedImage } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatListModule, MatDividerModule, NgOptimizedImage, MatButtonModule],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'Angular Blog Post';

  opened = signal<boolean>(false);

  toggleSideBar = (): void => this.opened.update(prev => !prev);

  list: string[] = ["Home", "About", "Contact"]
}
