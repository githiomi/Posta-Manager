import { Component } from '@angular/core';
import {AnimationOptions, LottieComponent} from "ngx-lottie";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LottieComponent],
  templateUrl : 'login.component.html'
})
export class LoginComponent {

  animationsOptions : AnimationOptions = {
    path: '/animations/login.json',
    autoplay: true,
    loop: true
  }

}
