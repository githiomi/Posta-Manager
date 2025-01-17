import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: "",
      loadComponent: () => import('./components/pages/home/home.component').then(component => component.HomeComponent),
      title: "Angular Blog Posts | Home"
   },
   {
      path: "new",
      loadComponent: () => import('./components/pages/new-post/new-post.component').then(component => component.NewPostComponent),
      title: "Create New Blog Post"
   },
   {
      path: "logout",
      loadComponent: () => import('./components/pages/auth/login/login.component').then(component => component.LoginComponent),
      title: "Authentication Page"
   }
];
