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
    return this.http.get<Distributore[]>(`${this.apiServerUrl}/all`);
  }

  public findById(DistributoreID : number): Observable<Distributore> {
    return this.http.get<Distributore>(`${this.apiServerUrl}/findId/${DistributoreID}`);
  }

  public deleteDistributore(DistributoreId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${DistributoreId}`);
  }

  public insertDistributore(Distributore: Distributore): Observable<Distributore> {
    return this.http.post<Distributore>(`${this.apiServerUrl}/insert`, Distributore);
  }

  public updateDistributore(Distributore: Distributore): Observable<Distributore> {
    return this.http.put<Distributore>(`${this.apiServerUrl}/update`, Distributore);
  }
}
