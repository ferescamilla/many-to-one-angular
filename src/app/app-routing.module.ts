import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosformComponent } from './components/productosform/productosform.component';

const routes: Routes = [
  { path: '',component: ProductosComponent},
  { path: 'formulario',component: ProductosformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }