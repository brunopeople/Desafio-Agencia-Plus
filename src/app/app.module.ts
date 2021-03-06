import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ProdutoGetComponent } from './produto-get/produto-get.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './produto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoAddComponent,
    ProdutoGetComponent,
    ProdutoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
