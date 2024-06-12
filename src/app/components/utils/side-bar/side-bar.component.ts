import {Component, input} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {NavLinks} from "../../../interfaces/nav-link";
import {NgOptimizedImage} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatSidenavModule, MatDividerModule, NgOptimizedImage, MatListModule, MatIconModule, RouterLink],
  templateUrl: 'side-bar.component.html',
  styles: ``
})
export class SideBarComponent {
  
  navLinks = input.required<NavLinks>()

}
