import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonButton,} from '@ionic/angular/standalone';


@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
  standalone: true,
  imports: [  IonButton, IonContent,    CommonModule, FormsModule ,]
})
export class LoginscreenPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  goToLogin() {
    this.router.navigateByUrl('/login'); // ✅ Redirige a login
  }
  goToRegister() {
    this.router.navigateByUrl('/registro'); // Asegúrate de usar la ruta correcta
  }
  
  
}

