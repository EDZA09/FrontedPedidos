import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    //relacionando ruta "/" con la ruta "inicio"
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    //Implementando la estrategia Lazy Loading

    //lazy loading del modulo de seguridad
    path: 'seguridad',
    loadChildren: () =>
      import('./modulos/seguridad/seguridad.module').then(
        (x) => x.SeguridadModule
      ),
  },
  {
    //lazy loading del modulo de administracion
    path: 'administracion',
    loadChildren: () =>
      import('./modulos/administracion/administracion.module').then(
        (x) => x.AdministracionModule
      ),
  },
  {
    //lazy loading del modulo de pedidos
    path: 'pedidos',
    loadChildren: () =>
      import('./modulos/pedidos/pedidos.module').then((x) => x.PedidosModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
