// beneficioario.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioComponent } from './beneficiario.component';

@NgModule({
  declarations: [BeneficiarioComponent],
  imports: [CommonModule],
  exports: [BeneficiarioComponent], // Certifique-se de exportar o componente se você pretende usá-lo em outros módulos
})
export class BeneficiarioModule {}
