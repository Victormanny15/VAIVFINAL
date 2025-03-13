import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { IonContent, IonHeader, IonCard, IonCardHeader, IonCardContent, 
  IonItem,  IonButton, IonCardTitle, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonInput, IonCard, IonContent, IonHeader, CommonModule, FormsModule, IonCardContent, IonCardHeader,
    IonItem,IonButton, IonCardTitle]
})
export class RegistroPage implements OnInit {
  name: string = '';
  password: string = '';
  apiUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {
    this.apiUrl = 'https://vaiv.onrender.com/postUser'; // URL del backend en Render
  }

  ngOnInit() { }

  validatePassword(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  }

  validateName(name: string): boolean {
    return name.length >= 3;
  }

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

  async register() {
    if (!this.validateName(this.name)) {
      this.showAlert('El nombre debe tener al menos 3 caracteres.', 'Error');
      return;
    }

    if (!this.validatePassword(this.password)) {
      this.showAlert('La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una minúscula y un número.', 'Error');
      return;
    }

    const userData = {
      Usuario: this.name,
      Contraseña: this.password
    };
    console.log('Datos del usuario:', userData);

    this.http.post(this.apiUrl, userData).subscribe({
      next: async (response) => {
        console.log('Usuario registrado con éxito:', response);
        this.showAlert('Registro exitoso.', 'Alerta');
        this.router.navigate(['/login']);
      },
      error: async (error) => {
        console.error('Error en el registro:', error);
        this.showAlert('Error al registrar el usuario.', 'Error');
      }
    });
  }
}
