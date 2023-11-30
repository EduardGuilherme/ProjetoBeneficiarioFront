
// beneficiario.model.ts
export interface Beneficiario {
    beneficiarioId: string;
    nome: string;
    telefone: string;
    dataNascimento: string;
    documentos: Documento[];
  }
  
  export interface Documento {
    tipoDocumento: string;
    descricao: string;
  }
  