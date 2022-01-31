import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distributore } from 'src/app/models/Distributore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistributoreService {

  private apiServerUrl = environment.apiBaseUrl+"/distributore";

  constructor(private http: HttpClient) { }

  public getAllDistributore(): Observable<Distributore[]> {
    return this.http.get<Distributore[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(DistributoreID : number): Observable<Distributore> {
    return this.http.get<Distributore>(`${this.apiServerUrl}/findId/${DistributoreID}`);
  }

  public deleteDistributore(DistributoreId: number): Observable<number> {
    return this.http.delete<number>(`${this.apiServerUrl}/deleteId/${DistributoreId}`);
  }

  public insertDistributore(Distributore: Distributore): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/insert`, Distributore);
  }

  public updateDistributore(Distributore: Distributore): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/update`, Distributore);
  }
}
