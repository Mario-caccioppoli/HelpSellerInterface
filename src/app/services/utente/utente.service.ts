import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/models/Utente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private apiServerUrl = environment.apiBaseUrl+"/user";

  constructor(private http: HttpClient) { }

  public getAllUtente(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.apiServerUrl}/all`);
  }

  public loginUtente(Utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/login`, Utente);
  }

  public recuperoUtente(email: string): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/recupero-password`, { email });
  }

  public findById(UtenteID : number): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/findId/${UtenteID}`);
  }

  public deleteUtente(UtenteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${UtenteId}`);
  }

  public insertUtente(Utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/insert`, Utente);
  }

  public updateUtente(Utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/update`, Utente);
  }
}
