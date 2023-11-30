import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolicitudProgramasComponent } from './solicitud-programas/solicitud-programas.component';
import { InicioComponent } from './inicio/inicio.component';
import { UniversidadComponent } from './universidad/universidad.component';
import { LoginComponent } from './seguridad/login/login.component';
import { PersonaComponent } from './persona/persona.component';
import { AceptarProgramasComponent } from './aceptar-programas/aceptar-programas.component';
import { OfertaAnualComponent } from './oferta-anual/oferta-anual.component';
import { ProgramasOfertadosComponent } from './programas-ofertados/programas-ofertados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'solicitudProgramas', component: SolicitudProgramasComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'universidad', component: UniversidadComponent},
  {path: 'login', component: LoginComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'aceptarProgramas', component: AceptarProgramasComponent},
  {path: 'OfertaAnual', component: OfertaAnualComponent},
  {path: 'programaOfertados', component: ProgramasOfertadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
