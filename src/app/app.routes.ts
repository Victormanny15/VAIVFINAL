import { Routes } from '@angular/router'; // Importa la interfaz Routes para definir rutas en Angular

export const routes: Routes = [
  { 
    path: 'splash', // Ruta para la pantalla de bienvenida
    loadComponent: () => import('./splash/splash.page').then(m => m.SplashPage) // Carga dinámica del componente SplashPage
  },
  { 
    path: 'loginscreen', // Ruta para la pantalla de inicio de sesión alternativa
    loadComponent: () => import('./loginscreen/loginscreen.page').then(m => m.LoginscreenPage) // Carga dinámica del componente LoginscreenPage
  },
  { 
    path: 'login', // Ruta para la pantalla de autenticación principal
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage) // Carga dinámica del componente LoginPage
  },
  { 
    path: '', // Ruta raíz (vacía)
    redirectTo: 'splash', // Redirige automáticamente a la pantalla de bienvenida
    pathMatch: 'full' // Asegura coincidencia exacta de la ruta
  },
  { 
    path: 'registro', // Ruta para la pantalla de registro de usuarios
    loadComponent: () => import('./registro/registro.page').then(m => m.RegistroPage) // Carga dinámica del componente RegistroPage
  },   
  { 
    path: 'menu', // Ruta para la pantalla principal del menú
    loadComponent: () => import('./menu/menu.page').then(m => m.MenuPage) // Carga dinámica del componente MenuPage
  }
// Ruta de registro
];
