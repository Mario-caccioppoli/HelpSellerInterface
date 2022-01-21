import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { environment } from 'src/environments/environment';
import { Prodotto } from 'src/app/models/Prodotto';

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

  public deleteOrdineProdotto(OrdineProdottoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${OrdineProdottoId}`);
  }

  public insertOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<OrdineProdotto> {
    return this.http.post<OrdineProdotto>(`${this.apiServerUrl}/insert`, OrdineProdotto);
  }

  public updateOrdineProdotto(OrdineProdotto: OrdineProdotto): Observable<OrdineProdotto> {
    return this.http.put<OrdineProdotto>(`${this.apiServerUrl}/update`, OrdineProdotto);
  }



  public findReportAnnuale(anno: number): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/findReportAnnuale/${anno}`);
  }
  public findReportAnnualeAzienda(anno:number,idAzienda: number): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/findReportAnnualeAzienda/${anno}/${idAzienda}`);
  }

  
  // public findReportGennaioAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportGennaio/${anno}/${idAzienda}`)
  // }
  // public findReportFebbraioAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportFebbraio/${anno}/${idAzienda}`)
  // }
  // public findReportMarzoAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportMarzo/${anno}/${idAzienda}`)
  // }
  // public findReportAprileAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportAprile/${anno}/${idAzienda}`)
  // }
  // public findReportMaggioAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportMaggio/${anno}/${idAzienda}`)
  // }
  // public findReportGiugnoAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportGiugno/${anno}/${idAzienda}`)
  // }
  // public findReportLuglioAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportLuglio/${anno}/${idAzienda}`)
  // }
  // public findReportAgostoAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportAgosto/${anno}/${idAzienda}`)
  // }
  // public findReportSettembreAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportSettembre/${anno}/${idAzienda}`)
  // }
  // public findReportOttobreAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportOttobre/${anno}/${idAzienda}`)
  // }
  // public findReportNovembreAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportNovembre/${anno}/${idAzienda}`)
  // }
  // public findReportDicembreAzienda(anno:number,idAzienda: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportDicembre/${anno}/${idAzienda}`)
  // }


  // public findReportGennaioGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportGennaioGruppo/${anno}`)
  // }
  // public findReportFebbraioGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportFebbraioGruppo/${anno}`)
  // }
  // public findReportMarzoGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportMarzoGruppo/${anno}`)
  // }
  // public findReportAprileGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportAprileGruppo/${anno}`)
  // }
  // public findReportMaggioGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportMaggioGruppo/${anno}`)
  // }
  // public findReportGiugnoGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportGiugnoGruppo/${anno}`)
  // }
  // public findReportLuglioGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportLuglioGruppo/${anno}`)
  // }
  // public findReportAgostoGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportAgostoGruppo/${anno}`)
  // }
  // public findReportSettembreGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportSettembreGruppo/${anno}`)
  // }
  // public findReportOttobreGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportOttobreGruppo/${anno}`)
  // }
  // public findReportNovembreGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportNovembreGruppo/${anno}`)
  // }
  // public findReportDicembreGruppo(anno: number): Observable<number>{
  //   return this.http.get<number>(`${this.apiServerUrl}/findReportDicembreGruppo/${anno}`)
  // }
  

  public findReportMensileGruppo(anno: number): Observable<number[]>{
    return this.http.get<number[]>(`${this.apiServerUrl}/findReportMensileGruppo/${anno}`)
  }

  public findReportMensileAzienda(anno: number, idAzienda:number): Observable<number[]>{
    return this.http.get<number[]>(`${this.apiServerUrl}/findReportMensileAzienda/${anno}/${idAzienda}`)
  }
}
