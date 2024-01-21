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
import { UsuarioComponent } from './usuario/usuario.component';
import { EstudiosAcademicosComponent } from './estudios-academicos/estudios-academicos.component';
import { MenuComponent } from './menu/menu.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AgregarUniversidadComponent } from './agregar-universidad/agregar-universidad.component';
import { AgregarOfertaAnualComponent } from './agregar-oferta-anual/agregar-oferta-anual.component';
import { ProgramasOfertadosListaComponent } from './programas-ofertados-lista/programas-ofertados-lista.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'solicitudProgramas', component: SolicitudProgramasComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'universidad', component: UniversidadComponent},
  {path: 'login', component: LoginComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'aceptarProgramas', component: AceptarProgramasComponent},
  {path: 'OfertaAnual', component: OfertaAnualComponent},
  {path: 'programaOfertados', component: ProgramasOfertadosComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'estudiosAcademicos', component: EstudiosAcademicosComponent},
  {path: 'menuAdmin', component: MenuAdminComponent},
  {path: 'agregarUniversidad', component: AgregarUniversidadComponent},
  {path: 'agregarOferta', component: AgregarOfertaAnualComponent},
  {path: 'programasList', component: ProgramasOfertadosListaComponent},
  {path: 'candidatos', component: UsuariosListaComponent},
  {path: 'experienciaLaboral', component: ExperienciaLaboralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
