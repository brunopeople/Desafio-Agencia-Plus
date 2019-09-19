import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ProdutoGetComponent } from './produto-get/produto-get.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
const routes: Routes = [
  {
    path: 'produto/create',
    component: ProdutoAddComponent
  },

  {
    path: 'edit/:id',
    component: ProdutoEditComponent
  },

  {
    path: 'produtos',
    component: ProdutoGetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
