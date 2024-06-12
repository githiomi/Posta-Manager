import {Component, input} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import {ViewState} from "../../pages/home/home.component";

@Component({
  selector: 'app-view-toggle',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon
  ],
  templateUrl: 'view-toggle.component.html',
  styles: ``
})
export class ViewToggleComponent {

  // Inputs
  viewState = input.required<ViewState>();

}
