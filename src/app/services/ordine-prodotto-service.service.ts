import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdineProdottoServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllOrdineProdotto(): Observable<OrdineProdotto[]> {
    return this.http.get<OrdineProdotto[]>(`${this.apiServerUrl}/ordineprodotto/all`);
  }

  public findById(OrdineProdottoID : number): Observable<OrdineProdotto> {
    return this.http.get<OrdineProdotto>(`${this.apiServerUrl}/ordineprodotto/findId/${OrdineProdottoID}`);
  }

  public deleteOrdineProdotto(OrdineProdottoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ordineprodotto/deleteId/${OrdineProdottoId}`);
  }

  public insertOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<OrdineProdotto> {
    return this.http.post<OrdineProdotto>(`${this.apiServerUrl}/ordineprodotto/insert`, OrdineProdotto);
  }

  public updateOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<OrdineProdotto> {
    return this.http.put<OrdineProdotto>(`${this.apiServerUrl}/ordineprodotto/update`, OrdineProdotto);
  }
}
