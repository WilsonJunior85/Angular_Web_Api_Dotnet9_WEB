import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UsuarioCriacaoDto } from '../models/usuarioCriacaoDtoModel';
import { Observable } from 'rxjs';
import { ResultViewModel } from '../models/resultViewModel';
import { UsuarioModel } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  ApiUrl = environment.ApiUrl;
  constructor(
    private http: HttpClient,

  ) { }


  RegistrarUsuario(usuario: UsuarioCriacaoDto): Observable<ResultViewModel<UsuarioModel>> {
    return this.http.post<ResultViewModel<UsuarioModel>>(`${this.ApiUrl}/Login/Register`, usuario);
  }


}
