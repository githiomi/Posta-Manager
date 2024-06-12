import {Component, inject, OnInit, Signal, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from "@angular/material/divider";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from './components/utils/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {SideBarComponent} from "./components/utils/side-bar/side-bar.component";
import {NavLinks} from "./interfaces/nav-link";
import {PostsService} from "./services/posts.service";
import {Post} from "./interfaces/post";

type Theme = 'dark' | 'light';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, MatSidenavModule, MatListModule, MatDividerModule, NgOptimizedImage, NgClass, RouterLink, MatIconModule, SideBarComponent],
    templateUrl: 'app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {

    // Local variables
    theme: Theme = 'light';
    title = 'Blog Post Manager';
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
    posts: Signal<Post[]> = signal<Post[]>([]);

    // Services
    private postService: PostsService = inject(PostsService);

    ngOnInit(): void {
        // Get data from service
        this.posts = this.postService.getAllPosts();
    }

    toggleTheme = (): void => {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
    }

}
