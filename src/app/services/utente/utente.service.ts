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

  public getAllUtente(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.apiServerUrl}/all`);
  }

  public loginUtente(stringa: string): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/login`, stringa);
  }

  public recuperoPassword(email: string): Observable<Number> {
    return this.http.post<Number>(`${this.apiServerUrl}/recuperoPassword`,email);
  }

  public findById(UtenteID : number): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/findId/${UtenteID}`);
  }

  public deleteUtente(UtenteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${UtenteId}`);
  }

  public insertUtenteDistributore(Distributore: Distributore): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrlReg}/distributore/insert`, Distributore);
  }

  public insertUtenteAzienda(Azienda: Azienda): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrlReg}/azienda/insert`, Azienda);
  }

  public updateUtente(Utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/update`, Utente);
  }
}
