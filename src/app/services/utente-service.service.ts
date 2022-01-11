import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/models/Utente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllUtente(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.apiServerUrl}/user/all`);
  }

  public findById(UtenteID : number): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/user/findId/${UtenteID}`);
  }

  public deleteUtente(UtenteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/deleteId/${UtenteId}`);
  }

  public insertUtente(Utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/user/insert`, Utente);
  }

  public updateUtente(Utente: Utente): Observable<Utente> {
    return this.http.put<Utente>(`${this.apiServerUrl}/user/update`, Utente);
  }
}
