import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScontoProdotto } from 'src/app/models/ScontoProdotto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScontoProdottoServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllScontoProdotto(): Observable<ScontoProdotto[]> {
    return this.http.get<ScontoProdotto[]>(`${this.apiServerUrl}/scontoprodotto/all`);
  }

  public findById(ScontoProdottoID : number): Observable<ScontoProdotto> {
    return this.http.get<ScontoProdotto>(`${this.apiServerUrl}/scontoprodotto/findId/${ScontoProdottoID}`);
  }

  public deleteScontoProdotto(ScontoProdottoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/scontoprodotto/deleteId/${ScontoProdottoId}`);
  }

  public insertScontoProdotto(ScontoProdotto: ScontoProdotto): Observable<ScontoProdotto> {
    return this.http.post<ScontoProdotto>(`${this.apiServerUrl}/scontoprodotto/insert`, ScontoProdotto);
  }

  public updateScontoProdotto(ScontoProdotto: ScontoProdotto): Observable<ScontoProdotto> {
    return this.http.put<ScontoProdotto>(`${this.apiServerUrl}/scontoprodotto/update`, ScontoProdotto);
  }
}
