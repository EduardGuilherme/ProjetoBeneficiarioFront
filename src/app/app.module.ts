// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BeneficiarioModule } from './beneficiario/beneficiario.module';

@NgModule({
  declarations: [
    // outros componentes, se houver
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BeneficiarioModule,
    // outros módulos, se houver
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
