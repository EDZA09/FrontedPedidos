import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './persona/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './persona/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './persona/buscar-persona/buscar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
