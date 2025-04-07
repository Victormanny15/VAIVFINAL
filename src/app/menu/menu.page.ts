import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonButton, IonImg, IonCard, IonCardHeader, IonCardTitle, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { BDService } from '../bd/bd.service';

@Component({
  selector: 'app-menu', // Define el selector del componente
  templateUrl: './menu.page.html', // Especifica el archivo de plantilla asociado
  styleUrls: ['./menu.page.scss'], // Especifica los estilos del componente
  standalone: true, // Indica que el componente es independiente
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonButton, IonImg, IonCard, IonCardHeader,
     IonCardTitle, IonList, IonLabel, IonItem] // Importa módulos y componentes de Ionic y Angular
})
export class MenuPage implements OnInit {
  // Declaración de variables para representar el estado de cada luz (encendido/apagado)
  light1: string = 'off';
  light2: string = 'off';
  light3: string = 'off';
  light4: string = 'off';
  light5: string = 'off';
  light6: string = 'off';
  light7: string = 'off';
  light8: string = 'off';
  light9: string = 'off';
  light10: string = 'off';
  light11: string = 'off';
  light12: string = 'off';
  light13: string = 'off';

  [key: string]: any; // Añade una firma de índice para permitir acceso dinámico a las propiedades

  constructor(private router: Router, private bdService: BDService) { }

  ngOnInit() { } // Método de ciclo de vida que se ejecuta al inicializar el componente

  /**
   * Alterna el estado de una luz específica y actualiza su estado en la base de datos.
   * @param light - Nombre de la variable de la luz.
   * @param ledId - Identificador único de la luz en la base de datos.
   */
  toggleLight(light: string, ledId: string) {
    const newState = this[light] === 'on' ? 'off' : 'on'; // Alterna entre encendido y apagado
    this.bdService.setLedState(ledId, newState === 'on').subscribe(
      () => {
        this[light] = newState; // Actualiza el estado de la luz en la clase
        console.log(`LED ${ledId} ${newState === 'on' ? 'encendido' : 'apagado'}`);
      },
      error => console.error(`Error al ${newState === 'on' ? 'encender' : 'apagar'} el LED:`, error)
    );
  }

  /**
   * Cambia el estado de todas las luces en la base de datos y en la clase.
   * @param state - Estado global ('on' o 'off') para todas las luces.
   */
  toggleAllLights(state: string) {
    const newState = state === 'on'; // Convierte el estado a booleano
    const lightIds = [
      '67d31611842becca9a01983b', '67d31611842becca9a01983c', '67d31611842becca9a01983d',
      '67d31611842becca9a01983e', '67d31611842becca9a01983f', '67d31611842becca9a019840',
      '67d31611842becca9a019841', '67d31611842becca9a019842', '67d31611842becca9a019843',
      '67d31611842becca9a019844', '67d31611842becca9a019845', '67d31611842becca9a019846',
      '67d31611842becca9a019847' // Lista de identificadores de las luces
    ];
    lightIds.forEach((id, index) => {
      this.bdService.setLedState(id, newState).subscribe(
        () => this[`light${index + 1}`] = state, // Actualiza el estado de cada luz individualmente
        error => console.error(`Error al ${state === 'on' ? 'encender' : 'apagar'} el LED ${index + 1}:`, error)
      );
    });
  }

  /**
   * Método para cerrar sesión y redirigir al usuario a la página de inicio de sesión.
   */
  logout() {
    // Lógica para cerrar sesión, por ejemplo, limpiar el almacenamiento local, etc.
    this.router.navigateByUrl('/login', { replaceUrl: true }); // Redirigir a la página de inicio de sesión y reemplazar la URL
  }
}
