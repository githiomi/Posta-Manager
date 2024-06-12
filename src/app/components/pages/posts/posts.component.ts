import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatButtonToggleModule, MatIconModule],
  templateUrl: 'posts.component.html',
  styles: ``
})
export class PostsComponent {

}
