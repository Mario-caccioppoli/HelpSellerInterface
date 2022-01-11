import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordine } from 'src/app/models/Ordine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdineServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllOrdine(): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(`${this.apiServerUrl}/ordine/all`);
  }

  public findById(OrdineID : number): Observable<Ordine> {
    return this.http.get<Ordine>(`${this.apiServerUrl}/ordine/findId/${OrdineID}`);
  }

  public deleteOrdine(OrdineId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ordine/deleteId/${OrdineId}`);
  }

  public insertOrdine(Ordine: Ordine): Observable<Ordine> {
    return this.http.post<Ordine>(`${this.apiServerUrl}/ordine/insert`, Ordine);
  }

  public updateOrdine(Ordine: Ordine): Observable<Ordine> {
    return this.http.put<Ordine>(`${this.apiServerUrl}/ordine/update`, Ordine);
  }
}
