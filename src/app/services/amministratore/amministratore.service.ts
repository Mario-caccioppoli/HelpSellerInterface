import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amministratore } from 'src/app/models/Amministratore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmministratoreService {

  private apiServerUrl = environment.apiBaseUrl+"/admin";

  constructor(private http: HttpClient) { }

  public getAllAmministratore(): Observable<Amministratore[]> {
    return this.http.get<Amministratore[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(amministratoreID : number): Observable<Amministratore> {
    return this.http.get<Amministratore>(`${this.apiServerUrl}/findId/${amministratoreID}`);
  }

  // public deleteAmministratore(amministratoreId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${amministratoreId}`);
  // }

  // public insertAmministratore(amministratore: Amministratore): Observable<Amministratore> {
  //   return this.http.post<Amministratore>(`${this.apiServerUrl}/insert`, amministratore);
  // }

  public updateAmministratore(amministratore: Amministratore): Observable<Amministratore> {
    return this.http.put<Amministratore>(`${this.apiServerUrl}/update`, amministratore);
  }
  
  
}
