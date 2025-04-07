import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importa el servicio HTTP para realizar peticiones al backend
import { Router } from '@angular/router'; // Servicio de enrutamiento para la navegación
import { AlertController } from '@ionic/angular'; // Controlador de alertas de Ionic

import { 
  IonContent, IonHeader, IonCard, IonCardHeader, IonCardContent, 
  IonItem, IonButton, IonCardTitle, IonInput 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro', // Define el selector del componente
  templateUrl: './registro.page.html', // Especifica la plantilla HTML asociada
  styleUrls: ['./registro.page.scss'], // Especifica los estilos de la página
  standalone: true, // Indica que el componente es independiente
  imports: [
    IonInput, IonCard, IonContent, IonHeader, CommonModule, 
    FormsModule, IonCardContent, IonCardHeader, IonItem, 
    IonButton, IonCardTitle // Importa los módulos y componentes necesarios
  ]
})
export class RegistroPage implements OnInit {
  name: string = ''; // Variable para almacenar el nombre de usuario
  password: string = ''; // Variable para almacenar la contraseña
  apiUrl: string; // Variable para almacenar la URL del backend

  constructor(
    private http: HttpClient, // Servicio HTTP para enviar datos al servidor
    private router: Router, // Servicio para gestionar la navegación
    private alertController: AlertController // Servicio para mostrar alertas
  ) {
    this.apiUrl = 'https://vaiv.onrender.com/postUser'; // URL del backend en Render
  }

  ngOnInit() { } // Método de inicialización, actualmente vacío

  // Método para validar la contraseña con expresiones regulares
  validatePassword(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // Requiere al menos una mayúscula, una minúscula y un número
    return regex.test(password);
  }

  // Método para validar el nombre de usuario
  validateName(name: string): boolean {
    return name.length >= 3; // El nombre debe tener al menos 3 caracteres
  }

  // Método asincrónico para mostrar alertas con mensajes personalizadoAs
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

  // Método para registrar un nuevo usuario
  async register() {
    if (!this.validateName(this.name)) { // Verifica si el nombre es válido
      this.showAlert('El nombre debe tener al menos 3 caracteres.', 'Error'); // Muestra un mensaje de error
      return;
    }

    if (!this.validatePassword(this.password)) { // Verifica si la contraseña cumple los requisitos
      this.showAlert('La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una minúscula y un número.', 'Error');
      return;
    }

    const userData = {
      Usuario: this.name, // Datos del usuario
      Contraseña: this.password // Datos de la contraseña
    };
    console.log('Datos del usuario:', userData); // Imprime los datos en consola para depuración

    // Envía los datos al backend utilizando HTTP POST
    this.http.post(this.apiUrl, userData).subscribe({
      next: async (response) => {
        console.log('Usuario registrado con éxito:', response); // Mensaje en consola de éxito
        this.showAlert('Registro exitoso.', 'Alerta'); // Muestra una alerta de éxito
        this.router.navigate(['/login']); // Redirige a la pantalla de inicio de sesión
      },
      error: async (error) => {
        console.error('Error en el registro:', error); // Muestra el error en consola
        this.showAlert('Error al registrar el usuario.', 'Error'); // Muestra una alerta de error
      }
    });
  }
}
