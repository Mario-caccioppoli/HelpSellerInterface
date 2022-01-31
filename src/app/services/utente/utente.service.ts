import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/models/Utente';
import { environment } from 'src/environments/environment';
import { Distributore } from 'src/app/models/Distributore';
import { Azienda } from 'src/app/models/Azienda';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private apiServerUrl = environment.apiBaseUrl+"/user";

  constructor(private http: HttpClient) { }

  public loginUtente(tipo: string, email: string, password: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/login/${tipo}/${email}/${password}`);
  }

  public recuperoPassword(email: string): Observable<Number> {
    return this.http.post<number>(`${this.apiServerUrl}/recuperoPassword/${email}`,email);
  }

}
