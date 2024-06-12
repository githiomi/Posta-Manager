import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from "@angular/material/divider";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from './components/utils/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {SideBarComponent} from "./components/utils/side-bar/side-bar.component";
import {NavLinks} from "./interfaces/nav-link";

type Theme = 'dark' | 'light';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, MatSidenavModule, MatListModule, MatDividerModule, NgOptimizedImage, NgClass, RouterLink, MatIconModule, SideBarComponent],
    templateUrl: 'app.component.html',
    styles: [],
})
export class AppComponent {

    // Local variables
    theme: Theme = 'light';
    title = 'Angular Blog Post';
    navList: NavLinks = [
        {
            name: "Home",
            path: "",
            icon: "home"
        },
        {
            name: "Create Post",
            path: "/new",
            icon: "edit"
        },
        {
            name: 'Logout',
            path: "/logout",
            icon: "reply"
        }]

    toggleTheme = (): void => {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
    }

}
