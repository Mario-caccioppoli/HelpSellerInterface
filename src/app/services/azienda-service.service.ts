import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Azienda } from 'src/app/models/Azienda';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AziendaServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllAzienda(): Observable<Azienda[]> {
    return this.http.get<Azienda[]>(`${this.apiServerUrl}/azienda/all`);
  }

  public findById(AziendaID : number): Observable<Azienda> {
    return this.http.get<Azienda>(`${this.apiServerUrl}/azienda/findId/${AziendaID}`);
  }

  public deleteAzienda(AziendaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/azienda/deleteId/${AziendaId}`);
  }

  public insertAzienda(Azienda: Azienda): Observable<Azienda> {
    return this.http.post<Azienda>(`${this.apiServerUrl}/azienda/insert`, Azienda);
  }

  public updateAzienda(Azienda: Azienda): Observable<Azienda> {
    return this.http.put<Azienda>(`${this.apiServerUrl}/azienda/update`, Azienda);
  }
}
