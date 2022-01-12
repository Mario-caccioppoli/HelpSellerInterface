import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdineProdottoService {

  private apiServerUrl = environment.apiBaseUrl+"/ordineprodotto";

  constructor(private http: HttpClient) { }

  public getAllOrdineProdotto(): Observable<OrdineProdotto[]> {
    return this.http.get<OrdineProdotto[]>(`${this.apiServerUrl}/all`);
  }

  public findById(OrdineProdottoID : number): Observable<OrdineProdotto> {
    return this.http.get<OrdineProdotto>(`${this.apiServerUrl}/findId/${OrdineProdottoID}`);
  }

  public deleteOrdineProdotto(OrdineProdottoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${OrdineProdottoId}`);
  }

  public insertOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<OrdineProdotto> {
    return this.http.post<OrdineProdotto>(`${this.apiServerUrl}/insert`, OrdineProdotto);
  }

  public updateOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<OrdineProdotto> {
    return this.http.put<OrdineProdotto>(`${this.apiServerUrl}/update`, OrdineProdotto);
  }
}
