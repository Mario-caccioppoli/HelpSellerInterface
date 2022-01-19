import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScontoProdotto } from 'src/app/models/ScontoProdotto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScontoProdottoService {

  private apiServerUrl = environment.apiBaseUrl+"/scontoprodotto";

  constructor(private http: HttpClient) { }

  public getAllScontoProdotto(): Observable<ScontoProdotto[]> {
    return this.http.get<ScontoProdotto[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(ScontoProdottoID : number): Observable<ScontoProdotto> {
    return this.http.get<ScontoProdotto>(`${this.apiServerUrl}/findId/${ScontoProdottoID}`);
  }

  public deleteScontoProdotto(ScontoProdottoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${ScontoProdottoId}`);
  }

  public insertScontoProdotto(ScontoProdotto: ScontoProdotto): Observable<ScontoProdotto> {
    return this.http.post<ScontoProdotto>(`${this.apiServerUrl}/insert`, ScontoProdotto);
  }

  public updateScontoProdotto(ScontoProdotto: ScontoProdotto): Observable<ScontoProdotto> {
    return this.http.post<ScontoProdotto>(`${this.apiServerUrl}/update`, ScontoProdotto);
  }
  public findProdottiScontatiAzienda(nomeProdotto: string, idAzienda: number): Observable<ScontoProdotto[]>{
    return this.http.get<ScontoProdotto[]>(`${this.apiServerUrl}/findProdottiScontatiAzienda/${nomeProdotto}/${idAzienda}`);
  }
}
