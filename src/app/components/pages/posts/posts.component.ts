import {Component, input} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {Post} from "../../../interfaces/post";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatButtonToggleModule, MatIconModule, JsonPipe],
  templateUrl: 'posts.component.html',
  styles: ``
})
export class PostsComponent {

  // Inputs
  readonly posts = input.required<Post[]>()

}
