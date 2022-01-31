import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordine } from 'src/app/models/Ordine';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { Prodotto } from 'src/app/models/Prodotto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdineService {

  private apiServerUrl = environment.apiBaseUrl+"/ordine";

  constructor(private http: HttpClient) { }

  public getAllOrdine(): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(`${this.apiServerUrl}/findAll`);
  }

  public getAllOrdinebyDistributore(idDistributore: number): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(`${this.apiServerUrl}/findOrdiniByDistributore/${idDistributore}`);
  }

  public getAllOrdinebyAzienda(idAzienda: number): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(`${this.apiServerUrl}/findOrdiniByAzienda/${idAzienda}`);
  }

  public findById(OrdineID : number): Observable<Ordine> {
    return this.http.get<Ordine>(`${this.apiServerUrl}/findId/${OrdineID}`);
  }

  public deleteOrdine(OrdineId: number): Observable<number> {
    return this.http.delete<number>(`${this.apiServerUrl}/deleteId/${OrdineId}`);
  }

  public insertOrdine(Ordine: Ordine): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/insert`, Ordine);
  }

  public updateOrdine(Ordine: Ordine): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/update`, Ordine);
  }
  
}
