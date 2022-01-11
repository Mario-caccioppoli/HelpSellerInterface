import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recensione } from 'src/app/models/Recensione';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecensioneServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllRecensione(): Observable<Recensione[]> {
    return this.http.get<Recensione[]>(`${this.apiServerUrl}/recensione/all`);
  }

  public findById(RecensioneID : number): Observable<Recensione> {
    return this.http.get<Recensione>(`${this.apiServerUrl}/recensione/findId/${RecensioneID}`);
  }

  public deleteRecensione(RecensioneId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/recensione/deleteId/${RecensioneId}`);
  }

  public insertRecensione(Recensione: Recensione): Observable<Recensione> {
    return this.http.post<Recensione>(`${this.apiServerUrl}/recensione/insert`, Recensione);
  }

  public updateRecensione(Recensione: Recensione): Observable<Recensione> {
    return this.http.put<Recensione>(`${this.apiServerUrl}/recensione/update`, Recensione);
  }
}
