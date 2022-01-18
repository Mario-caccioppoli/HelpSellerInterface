import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recensione } from 'src/app/models/Recensione';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecensioneService {

  private apiServerUrl = environment.apiBaseUrl+"/recensione";

  constructor(private http: HttpClient) { }

  public getAllRecensione(): Observable<Recensione[]> {
    return this.http.get<Recensione[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(RecensioneID : number): Observable<Recensione> {
    return this.http.get<Recensione>(`${this.apiServerUrl}/findId/${RecensioneID}`);
  }

  public deleteRecensione(RecensioneId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${RecensioneId}`);
  }

  public insertRecensione(Recensione: Recensione): Observable<Recensione> {
    return this.http.post<Recensione>(`${this.apiServerUrl}/insert`, Recensione);
  }

  public updateRecensione(Recensione: Recensione): Observable<Recensione> {
    return this.http.post<Recensione>(`${this.apiServerUrl}/update`, Recensione);
  }
}
