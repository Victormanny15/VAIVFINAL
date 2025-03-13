import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BDService } from '../bd/bd.service';
import { AlertController } from '@ionic/angular';
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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCard, CommonModule, FormsModule, IonContent, IonHeader, IonItem, IonInput, IonButton, IonCardContent, IonCardTitle]
})
export class LoginPage {
  password = '';
  name = '';
  isSubmitting = false;

  constructor(
    private router: Router,
    private usuarioServicio: BDService,
    private alertController: AlertController
  ) {}

  async showAlert(message: string, header: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Cerrar'],
      cssClass: 'custom-alert',
      backdropDismiss: false
    });
    await alert.present();
  }

  login() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    const loginData = {
      Usuario: this.name,
      Contraseña: this.password
    };

    this.usuarioServicio.loginUser(loginData).subscribe({
      next: (res: any) => {
        this.isSubmitting = false; // Mover aquí para garantizar que se ejecute
        if (res.Respuesta) {
          this.showAlert('Login exitoso', 'Alerta');
          this.router.navigate(['menu']);
        } else {
          this.showAlert('Usuario o contraseña incorrectos.', 'Error');
        }
      },
      error: (error) => {
        this.isSubmitting = false; // Asegurar que isSubmitting se restablezca en caso de error
        this.showAlert('Error al iniciar sesión.', 'Error');
        console.error('Error de login:', error);
      }
    });
  }
}