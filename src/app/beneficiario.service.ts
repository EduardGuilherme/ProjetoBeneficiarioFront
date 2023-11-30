// beneficiario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from './model/beneficiario.model';

@Injectable({
  providedIn: 'root',
})
export class BeneficiarioService {
  private apiUrl = 'http://localhost:8080/beneficiario';

  constructor(private http: HttpClient) {}

  criarBeneficiario(beneficiario: Beneficiario): Observable<any> {
    return this.http.post(this.apiUrl, beneficiario);
  }

  atualizarBeneficiario(id: string, beneficiario: Beneficiario): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, beneficiario);
  }

  deletarBeneficiario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  obterBeneficiarios(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.apiUrl);
  }

  obterDocumentos(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
