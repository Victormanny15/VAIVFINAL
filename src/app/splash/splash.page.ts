import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la redirección
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonImg } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,]
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      // Añadir clase 'hidden' para la animación de desvanecimiento
      const splashScreen = document.querySelector('.splash-container');
      if (splashScreen) {
        splashScreen.classList.add('hidden');
      }
      
      // Redirigir después de la animación
      setTimeout(() => {
        this.router.navigateByUrl('/loginscreen'); // ✅ Cambiado a loginscreen
      }, 1000); // Espera a que termine la animación antes de redirigir
    }, 4000); // Espera 4 segundos antes de iniciar la animación
  }
}
