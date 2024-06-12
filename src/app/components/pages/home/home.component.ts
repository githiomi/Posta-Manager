import {Component, inject, signal, Signal} from '@angular/core';
import {Post} from "../../../interfaces/post";
import {PostsService} from "../../../services/posts.service";
import {ViewToggleComponent} from "../../utils/view-toggle/view-toggle.component";
import {PostsComponent} from "../posts/posts.component";

export type ViewState = 'grid' | 'list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ViewToggleComponent,
    PostsComponent
  ],
  templateUrl: `home.component.html`,
  styles: ``
})
export class HomeComponent {

  // Local variables
  readonly posts : Signal<Post[]> = signal([]);
  viewState = signal<ViewState>('list');

  // Services
  postsService : PostsService = inject(PostsService);

  constructor() {
    // Get posts
    this.posts = this.postsService.getAllPosts();
  }

  // Methods
  toggleViewState(viewState : ViewState) {
    this.viewState.set(viewState);
    console.log(viewState)
  }
}
