import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from 'src/app/models/Prodotto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private apiServerUrl = environment.apiBaseUrl + "/prodotto";

  constructor(private http: HttpClient) { }

  public getAllProdotto(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(ProdottoID : number): Observable<Prodotto> {
    return this.http.get<Prodotto>(`${this.apiServerUrl}/findId/${ProdottoID}`);
  }

  public deleteProdotto(ProdottoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${ProdottoId}`);
  }

  public insertProdotto(Prodotto: Prodotto): Observable<Prodotto> {
    return this.http.post<Prodotto>(`${this.apiServerUrl}/insert`, Prodotto);
  }

  public updateProdotto(Prodotto: Prodotto): Observable<Prodotto> {
    return this.http.put<Prodotto>(`${this.apiServerUrl}/update`, Prodotto);
  }

  public getProdottoByIdAzienda(idAzienda : number): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.apiServerUrl}/findProdottiByAzienda/${idAzienda}`);
  }

  public findProdottiBySconto(id : number): Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>(`${this.apiServerUrl}/findProdottiBySconto/${id}`);
  }
  public findProdottiByIdInAzienda(idProdotto: number, idAzienda: number): Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>(`${this.apiServerUrl}/findProdottiByIdInAzienda/${idProdotto}/${idAzienda}`);
  }
  public findProdottiByNomeInAzienda(nomeProdotto: string, id: number): Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>(`${this.apiServerUrl}/findProdottiByNomeInAzienda/${nomeProdotto}/${id}`);
  }
}
