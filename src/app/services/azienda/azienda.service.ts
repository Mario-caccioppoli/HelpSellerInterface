import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Azienda } from 'src/app/models/Azienda';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AziendaService {

  private apiServerUrl = environment.apiBaseUrl+"/azienda";

  constructor(private http: HttpClient) { }

  public getAllAzienda(): Observable<Azienda[]> {
    return this.http.get<Azienda[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(AziendaID : number): Observable<Azienda> {
    return this.http.get<Azienda>(`${this.apiServerUrl}/findId/${AziendaID}`);
  }

  public deleteAzienda(AziendaId: number): Observable<number> {
    return this.http.delete<number>(`${this.apiServerUrl}/deleteId/${AziendaId}`);
  }

  public insertAzienda(Azienda: Azienda): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/insert`, Azienda);
  }

  public updateAzienda(Azienda: Azienda): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/update`, Azienda);
  }
  public findAziendeByName(nomeAzienda: string): Observable<Azienda[]>{
    return this.http.get<Azienda[]>(`${this.apiServerUrl}/findAziendaByNome/${nomeAzienda}`);
  }
  public findAziendaByProdotto(id: number) : Observable<Azienda>{
    return this.http.get<Azienda>(`${this.apiServerUrl}/findAziendaByProdotto/${id}`)
  }
}
