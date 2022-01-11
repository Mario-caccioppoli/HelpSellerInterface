import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sconto } from 'src/app/models/Sconto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScontoServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllSconto(): Observable<Sconto[]> {
    return this.http.get<Sconto[]>(`${this.apiServerUrl}/sconto/all`);
  }

  public findById(ScontoID : number): Observable<Sconto> {
    return this.http.get<Sconto>(`${this.apiServerUrl}/sconto/findId/${ScontoID}`);
  }

  public deleteSconto(ScontoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/sconto/deleteId/${ScontoId}`);
  }

  public insertSconto(Sconto: Sconto): Observable<Sconto> {
    return this.http.post<Sconto>(`${this.apiServerUrl}/sconto/insert`, Sconto);
  }

  public updateSconto(Sconto: Sconto): Observable<Sconto> {
    return this.http.put<Sconto>(`${this.apiServerUrl}/sconto/update`, Sconto);
  }
}
