import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from "@angular/material/divider";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { HeaderComponent } from './components/utils/header/header.component';

type Theme = 'dark' | 'light';
type SideNavItems = {
  name: string,
  path: string,
}[]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavModule, MatListModule, MatDividerModule, NgOptimizedImage, NgClass, RouterLink],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {

  // Local variables
  theme: Theme = 'light';
  title = 'Angular Blog Post';
  navList: SideNavItems = [{
    name: "Home",
    path: ""
  },
  {
    name: "Create Post",
    path: "/new"
  },
  {
    name: 'Logout',
    path: "/logout"
  }]

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    console.log("theme", this.theme);

  }
}
