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
  private apiServerUrlReg = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  

  public insertUtenteDistributore(Distributore: Distributore): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrlReg}/distributore/insert`, Distributore);
  }

  public insertUtenteAzienda(Azienda: Azienda): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrlReg}/azienda/insert`, Azienda);
  }

  public loginUtente(tipo: string, email: string, password: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/login/${tipo}/${email}/${password}`);
  }

  public recuperoPassword(email: string): Observable<Number> {
    return this.http.post<number>(`${this.apiServerUrl}/recuperoPassword/${email}`,email);
  }

}
