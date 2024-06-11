import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from "@angular/material/divider";
import { NgOptimizedImage } from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { MenuService } from './services/menu.service';
import { log } from 'console';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavModule, MatListModule, MatDividerModule, NgOptimizedImage,],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {

  // Local variables
  theme: Theme = 'light';
  title = 'Angular Blog Post';
  list: string[] = ["Home", "About", "Contact"]
  menuService: MenuService = inject(MenuService);
  isMenuOpened = this.menuService.getMenuState();

  toggleMenuState(): void {
    this.menuService.toggleState();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    console.log("theme", this.theme);

  }
}
