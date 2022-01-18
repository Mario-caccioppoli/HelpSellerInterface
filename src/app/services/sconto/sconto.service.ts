import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sconto } from 'src/app/models/Sconto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScontoService {

  private apiServerUrl = environment.apiBaseUrl+"/sconto";

  constructor(private http: HttpClient) { }

  public getAllSconto(): Observable<Sconto[]> {
    return this.http.get<Sconto[]>(`${this.apiServerUrl}/findAll`);
  }
  public findScontiByAzienda(id: number): Observable<Sconto[]>{
    return this.http.get<Sconto[]>(`${this.apiServerUrl}/findScontiByAzienda/${id}`)
  }
  public getAllScontoByTipo(tipo: string): Observable<Sconto[]>{
    return this.http.get<Sconto[]>(`${this.apiServerUrl}/findScontiByTipo/${tipo}`)
  }
  public findById(ScontoID : number): Observable<Sconto> {
    return this.http.get<Sconto>(`${this.apiServerUrl}/findId/${ScontoID}`);
  }

  public deleteSconto(ScontoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${ScontoId}`);
  }

  public insertSconto(Sconto: Sconto): Observable<Sconto> {
    return this.http.post<Sconto>(`${this.apiServerUrl}/insert`, Sconto);
  }

  public updateSconto(Sconto: Sconto): Observable<Sconto> {
    return this.http.put<Sconto>(`${this.apiServerUrl}/update`, Sconto);
  }
}
