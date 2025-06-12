import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultViewModel } from '../models/resultViewModel';
import { UsuarioModel } from '../models/usuarioModel';
import { UsuarioEdicaoDtoModel } from '../models/usuarioEdicaoDtoModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = environment.ApiUrl;

  constructor
    (
      private http: HttpClient

    ) { }



  BuscarUsuarios(): Observable<ResultViewModel<UsuarioModel[]>> {
    return this.http.get<ResultViewModel<UsuarioModel[]>>(`${this.ApiUrl}/Usuario`)
  }


  RemoverUsuarios(id: number): Observable<ResultViewModel<UsuarioModel>> {
    return this.http.delete<ResultViewModel<UsuarioModel>>(`${this.ApiUrl}/Usuario/${id}`);
  }

  BuscarUsuarioPorId(id: number): Observable<ResultViewModel<UsuarioModel>> {
    return this.http.get<ResultViewModel<UsuarioModel>>(`${this.ApiUrl}/Usuario/${id}`);
  }

  EditarUsuario(usuario: UsuarioEdicaoDtoModel): Observable<ResultViewModel<UsuarioModel>> {
    return this.http.put<ResultViewModel<UsuarioModel>>(`${this.ApiUrl}/Usuario`, usuario);
  }
}
