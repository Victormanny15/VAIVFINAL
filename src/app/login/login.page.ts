import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento para la navegación
import { FormsModule } from '@angular/forms';
import { BDService } from '../bd/bd.service'; // Importa el servicio de base de datos
import { AlertController } from '@ionic/angular'; // Controlador de alertas de Ionic
import { 
  IonContent, 
  IonHeader, 
  IonInput, 
  IonButton, 
  IonItem, 
  IonCard, 
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login', // Define el selector del componente
  templateUrl: './login.page.html', // Especifica la plantilla HTML asociada
  styleUrls: ['./login.page.scss'], // Especifica los estilos de la página
  standalone: true, // Indica que el componente es independiente
  imports: [
    IonCardHeader, IonCard, CommonModule, FormsModule, 
    IonContent, IonHeader, IonItem, IonInput, 
    IonButton, IonCardContent, IonCardTitle // Importa módulos y componentes necesarios
  ]
})
export class LoginPage {
  password = ''; // Variable para almacenar la contraseña ingresada
  name = ''; // Variable para almacenar el nombre de usuario
  isSubmitting = false; // Bandera para evitar múltiples envíos de formulario

  constructor(
    private router: Router, // Servicio para gestionar la navegación
    private usuarioServicio: BDService, // Servicio para la autenticación
    private alertController: AlertController // Servicio para mostrar alertas
  ) {}

  // Método asincrónico para mostrar alertas con mensajes personalizados
  async showAlert(message: string, header: string) {
    const alert = await this.alertController.create({
      header: header, // Encabezado de la alerta
      message: message, // Mensaje que se mostrará en la alerta
      buttons: ['Cerrar'], // Botón de cierre de la alerta
      cssClass: 'custom-alert', // Clase CSS personalizada para estilos adicionales
      backdropDismiss: false // Evita que la alerta se cierre al tocar fuera de ella
    });
    await alert.present();
  }

  // Método para manejar el inicio de sesión
  login() {
    if (this.isSubmitting) return; // Evita múltiples clics en el botón de inicio de sesión
    this.isSubmitting = true; // Marca la acción como en proceso

    const loginData = {
      Usuario: this.name, // Datos del usuario
      Contraseña: this.password // Datos de la contraseña
    };

    // Llamada al servicio de autenticación
    this.usuarioServicio.loginUser(loginData).subscribe({
      next: (res: any) => {
        this.isSubmitting = false; // Restablece la bandera después de la respuesta
        if (res.Respuesta) { // Si la autenticación es exitosa
          this.showAlert('Login exitoso', 'Alerta'); // Muestra alerta de éxito
          this.router.navigate(['menu']); // Redirige al menú principal
        } else {
          this.showAlert('Usuario o contraseña incorrectos.', 'Error'); // Muestra alerta de error
        }
      },
      error: (error) => {
        this.isSubmitting = false; // Restablece la bandera en caso de error
        this.showAlert('Error al iniciar sesión.', 'Error'); // Muestra alerta de error
        console.error('Error de login:', error); // Loggea el error en la consola
      }
    });
  }
}
