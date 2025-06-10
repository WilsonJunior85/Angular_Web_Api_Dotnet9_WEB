import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ResultViewModel } from '../models/resultViewModel';
import { Observable } from 'rxjs';
import { AuditoriaModel } from '../models/auditoriaModel';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {
  ApiUrl = environment.ApiUrl;



  constructor(
    private http: HttpClient
  ) {

  }


  BuscarAuditorias(): Observable<AuditoriaModel[]> {
    return this.http.get<AuditoriaModel[]>(`${this.ApiUrl}/Auditoria/Auditorias`);
  }

}
