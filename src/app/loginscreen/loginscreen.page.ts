import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento para la navegación
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone'; // Importa componentes de Ionic

@Component({
  selector: 'app-loginscreen', // Define el selector del componente
  templateUrl: './loginscreen.page.html', // Especifica la plantilla HTML asociada
  styleUrls: ['./loginscreen.page.scss'], // Especifica los estilos de la página
  standalone: true, // Indica que el componente es independiente
  imports: [IonButton, IonContent, CommonModule, FormsModule] // Importa módulos necesarios
})
export class LoginscreenPage implements OnInit {

  constructor(private router: Router) {} // Inyecta el servicio Router para manejar la navegación

  ngOnInit() {} // Método de inicialización, actualmente vacío

  goToLogin() {
    this.router.navigateByUrl('/login'); // Redirige a la pantalla de inicio de sesión
  }

  goToRegister() {
    this.router.navigateByUrl('/registro'); // Redirige a la pantalla de registro
  }
}
