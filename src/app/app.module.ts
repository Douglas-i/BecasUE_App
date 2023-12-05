import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import {MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { SolicitudProgramasComponent } from './solicitud-programas/solicitud-programas.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { UniversidadComponent } from './universidad/universidad.component';
import { LoginComponent } from './seguridad/login/login.component';
import { PersonaComponent } from './persona/persona.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { AceptarProgramasComponent } from './aceptar-programas/aceptar-programas.component';
import { ProgramasOfertadosComponent } from './programas-ofertados/programas-ofertados.component';
import { OfertaAnualComponent } from './oferta-anual/oferta-anual.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EstudiosAcademicosComponent } from './estudios-academicos/estudios-academicos.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ModalProgramaComponent } from './modal-programa/modal-programa.component';
import { AgregarUniversidadComponent } from './agregar-universidad/agregar-universidad.component';
import { AgregarOfertaAnualComponent } from './agregar-oferta-anual/agregar-oferta-anual.component';
import { ProgramasOfertadosListaComponent } from './programas-ofertados-lista/programas-ofertados-lista.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { DetallesProgramaComponent } from './detalles-programa/detalles-programa.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SolicitudProgramasComponent,
    InicioComponent,
    RegistroComponent,
    UniversidadComponent,
    LoginComponent,
    PersonaComponent,
    ListadoGenericoComponent,
    AceptarProgramasComponent,
    ProgramasOfertadosComponent,
    OfertaAnualComponent,
    UsuarioComponent,
    EstudiosAcademicosComponent,
    MenuAdminComponent,
    ModalProgramaComponent,
    AgregarUniversidadComponent,
    AgregarOfertaAnualComponent,
    ProgramasOfertadosListaComponent,
    UsuariosListaComponent,
    DetallesProgramaComponent,
    ExperienciaLaboralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
