// beneficiario.component.ts
import { Component, OnInit } from '@angular/core';
import { BeneficiarioService } from '../beneficiario.service';
import { Beneficiario, Documento } from '../model/beneficiario.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css'],
})
export class BeneficiarioComponent implements OnInit {
  beneficiario: Beneficiario = {
    beneficiarioId: uuidv4(),
    nome: '',
    telefone: '',
    dataNascimento: '',
    documentos: [],
  };

  beneficiarios: Beneficiario[] = [];
  documentos: Documento[] = [];
  editMode: boolean = false;

  constructor(private beneficiarioService: BeneficiarioService) {}

  ngOnInit() {
    this.obterBeneficiarios();
  }

  criarBeneficiario() {
    this.beneficiarioService.criarBeneficiario(this.beneficiario).subscribe(() => {
      this.obterBeneficiarios(); // Atualiza a lista após a criação
      this.resetarFormulario();
    });
  }

  atualizarBeneficiario(id: string) {
    this.beneficiarioService.atualizarBeneficiario(id, this.beneficiario).subscribe(() => {
      this.obterBeneficiarios(); // Atualiza a lista após a atualização
      this.resetarFormulario();
    });
  }

  deletarBeneficiario(id: string) {
    this.beneficiarioService.deletarBeneficiario(id).subscribe(() => {
      this.obterBeneficiarios(); // Atualiza a lista após a exclusão
    });
  }

  obterBeneficiarios() {
    this.beneficiarioService.obterBeneficiarios().subscribe((beneficiarios) => {
      this.beneficiarios = beneficiarios;
    });
  }

  obterDocumentos(id: string) {
    this.beneficiarioService.obterDocumentos(id).subscribe((documentos) => {
      this.documentos = documentos;
    });
  }

  carregarBeneficiario(beneficiarioId: string) {
    // Chamada ao serviço para obter os detalhes do beneficiário por ID
    this.beneficiarioService.obterDocumentos(beneficiarioId).subscribe((beneficiario) => {
      // Atualiza o estado do componente com os detalhes do beneficiário
      this.beneficiario = beneficiario;
      // Ativa o modo de edição, pois você está carregando para editar
      this.editMode = true;
    });
  }

  resetarFormulario() {
    this.beneficiario = {
      beneficiarioId: uuidv4(),
      nome: '',
      telefone: '',
      dataNascimento: '',
      documentos: [],
    };
  }
}
