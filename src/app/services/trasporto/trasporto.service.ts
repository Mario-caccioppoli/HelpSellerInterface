import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trasporto } from 'src/app/models/Trasporto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrasportoService {

  private apiServerUrl = environment.apiBaseUrl+"/trasporto";

  constructor(private http: HttpClient) { }

  public getAllTrasporto(): Observable<Trasporto[]> {
    return this.http.get<Trasporto[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(TrasportoID : number): Observable<Trasporto> {
    return this.http.get<Trasporto>(`${this.apiServerUrl}/findId/${TrasportoID}`);
  }

  public deleteTrasporto(TrasportoId: number): Observable<number> {
    return this.http.delete<number>(`${this.apiServerUrl}/deleteId/${TrasportoId}`);
  }

  public insertTrasporto(Trasporto: Trasporto): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/insert`, Trasporto);
  }

  public updateTrasporto(Trasporto: Trasporto): Observable<number> {
    return this.http.put<number>(`${this.apiServerUrl}/update`, Trasporto);
  }
}
