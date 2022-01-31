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

  public deleteRecensione(RecensioneId: number): Observable<number> {
    return this.http.delete<number>(`${this.apiServerUrl}/deleteId/${RecensioneId}`);
  }

  public insertRecensione(Recensione: Recensione): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/insert`, Recensione);
  }

  public updateRecensione(Recensione: Recensione): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/update`, Recensione);
  }
}
