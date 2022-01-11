import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from 'src/app/models/Prodotto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdottoServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllProdotto(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.apiServerUrl}/prodotto/all`);
  }

  public findById(ProdottoID : number): Observable<Prodotto> {
    return this.http.get<Prodotto>(`${this.apiServerUrl}/prodotto/findId/${ProdottoID}`);
  }

  public deleteProdotto(ProdottoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/prodotto/deleteId/${ProdottoId}`);
  }

  public insertProdotto(Prodotto: Prodotto): Observable<Prodotto> {
    return this.http.post<Prodotto>(`${this.apiServerUrl}/prodotto/insert`, Prodotto);
  }

  public updateProdotto(Prodotto: Prodotto): Observable<Prodotto> {
    return this.http.put<Prodotto>(`${this.apiServerUrl}/prodotto/update`, Prodotto);
  }
}
