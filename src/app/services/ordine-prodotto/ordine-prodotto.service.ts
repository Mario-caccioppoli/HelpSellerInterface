import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { environment } from 'src/environments/environment';
import { Prodotto } from 'src/app/models/Prodotto';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrdineProdottoService {

  private apiServerUrl = environment.apiBaseUrl+"/ordineprodotto";

  constructor(private http: HttpClient) { }

  public getAllOrdineProdotto(): Observable<OrdineProdotto[]> {
    return this.http.get<OrdineProdotto[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(OrdineProdottoID : number): Observable<OrdineProdotto> {
    return this.http.get<OrdineProdotto>(`${this.apiServerUrl}/findId/${OrdineProdottoID}`);
  }

  public findDettagliOrdine(OrdineID : number): Observable<OrdineProdotto[]> {
    return this.http.get<OrdineProdotto[]>(`${this.apiServerUrl}/findDettagliOrdine/${OrdineID}`);
  }

  // public deleteOrdineProdotto(OrdineId: number, ProdottoId: number): Observable<number> {
  //   return this.http.delete<number>(`${this.apiServerUrl}/deleteId/${OrdineId}/${ProdottoId}`);
  // }

  // public insertOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<number[]> {
  //   return this.http.post<number[]>(`${this.apiServerUrl}/insert`, OrdineProdotto);
  // }

  // public updateOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<number> {
  //   return this.http.post<number>(`${this.apiServerUrl}/update`, OrdineProdotto);
  // }

  public findReportAnnuale(): Observable<number[][]>{
    return this.http.get<number[][]>(`${this.apiServerUrl}/findReportAnnuale/`);
  }
  public findReportAnnualeAzienda(idAzienda: number): Observable<number[][]>{
    return this.http.get<number[][]>(`${this.apiServerUrl}/findReportAnnualeAzienda/${idAzienda}`);
  }

  public findReportMensileGruppo(anno: number): Observable<number[]>{
    return this.http.get<number[]>(`${this.apiServerUrl}/findReportMensileGruppo/${anno}`)
  }

  public findReportMensileAzienda(anno: number, idAzienda:number): Observable<number[]>{
    return this.http.get<number[]>(`${this.apiServerUrl}/findReportMensileAzienda/${anno}/${idAzienda}`)
  }
}
