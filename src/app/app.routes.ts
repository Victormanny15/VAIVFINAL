import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'splash', loadComponent: () => import('./splash/splash.page').then(m => m.SplashPage) },
  { path: 'loginscreen', loadComponent: () => import('./loginscreen/loginscreen.page').then(m => m.LoginscreenPage) },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'registro', loadComponent: () => import('./registro/registro.page').then(m => m.RegistroPage) },   
  {path: 'menu',loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)}
// Ruta de registro
];
