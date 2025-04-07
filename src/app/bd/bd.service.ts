import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Define que este servicio estará disponible en toda la aplicación
})
export class BDService {

  // URLs del servidor para las solicitudes HTTP
  private apiUrl = 'https://vaiv.onrender.com/loginUser'; // URL específica para el login de usuario
  private apiUrl1 = 'https://vaiv.onrender.com'; // URL base para otras funcionalidades

  constructor(private http: HttpClient) { } // Inyección del servicio HttpClient para realizar solicitudes HTTP

  /**
   * Método para autenticar a un usuario enviando sus datos al servidor.
   * @param data - Información del usuario (puede incluir email, contraseña, etc.)
   * @returns Un Observable con la respuesta del servidor.
   */
  public loginUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data); // Envía una solicitud POST al endpoint de autenticación
  }

  /**
   * Método para cambiar el estado de un LED en el servidor.
   * @param ledId - Identificador del LED.
   * @param state - Estado deseado (true para encender, false para apagar).
   * @returns Un Observable con la respuesta del servidor.
   */
  setLedState(ledId: string, state: boolean): Observable<any> {
    // Determina la URL según el estado que se quiere establecer
    const endpoint = state ? `${this.apiUrl1}/setLedTrue/${ledId}` : `${this.apiUrl1}/setLedFalse/${ledId}`;
    return this.http.post(endpoint, {}); // Envía una solicitud POST al servidor para cambiar el estado del LED
  }
}
