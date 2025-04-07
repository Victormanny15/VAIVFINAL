import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la redirección
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonImg } from '@ionic/angular';

@Component({
  selector: 'app-splash', // Define el selector del componente
  templateUrl: './splash.page.html', // Especifica la plantilla asociada
  styleUrls: ['./splash.page.scss'], // Especifica los estilos asociados
  standalone: true, // Define si el componente es independiente
  imports: [IonContent, CommonModule, FormsModule] // Importa los módulos necesarios
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { } // Inyecta el servicio de enrutamiento

  ngOnInit() {
    setTimeout(() => {
      // Busca el contenedor de la pantalla de bienvenida
      const splashScreen = document.querySelector('.splash-container');
      if (splashScreen) {
        splashScreen.classList.add('hidden'); // Agrega la clase 'hidden' para la animación de desvanecimiento
      }
      
      // Redirige a la pantalla de inicio de sesión después de la animación
      setTimeout(() => {
        this.router.navigateByUrl('/loginscreen'); // Redirección a la pantalla de inicio de sesión
      }, 1000); // Espera 1 segundo después de la animación para la redirección
    }, 4000); // Espera 4 segundos antes de iniciar la animación de desvanecimiento
  }
}
