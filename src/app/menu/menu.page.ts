import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonButton, IonImg, IonCard, IonCardHeader, IonCardTitle, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonButton, IonImg, IonCard, IonCardHeader,
     IonCardTitle, IonList, IonLabel, IonItem]
})
export class MenuPage implements OnInit {
  light1: string = 'off';
  light2: string = 'off';
  light3: string = 'off';

  [key: string]: any; // Añade una firma de índice para solucionar el error

  constructor(private router: Router) { }

  ngOnInit() { }

  toggleLight(light: string) {
    this[light] = this[light] === 'on' ? 'off' : 'on';
  }

  toggleAllLights(state: string) {
    this.light1 = state;
    this.light2 = state;
    this.light3 = state;
  }

  logout() {
    // Lógica para cerrar sesión, por ejemplo, limpiar el almacenamiento local, etc.
    this.router.navigateByUrl('/login', { replaceUrl: true }); // Redirigir a la página de inicio de sesión y reemplazar la URL
  }
}