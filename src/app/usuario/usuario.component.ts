import { Component } from '@angular/core';
import { PersonaDTO, UsuarioCDTO } from '../Interface/Persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuarioForm: FormGroup;
  usuario: UsuarioCDTO;
  personaList: any[] = [];
  idPersona: any;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      correo: ['',Validators.required]
    });
  }

  inicializarFormulario(): void {
    // Inicializa tus controles de formulario aquí
    this.usuarioForm = this.fb.group({
      // Define tus controles de formulario con validadores
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      correo: ['',Validators.required]
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      

      //obtener el id de la persona
      this.usuarioService.obtenerPersona().subscribe(data => {        
        this.idPersona = data.find(x => x.correoElectronico == this.usuarioForm.value.correo); 
        
        // Crea instancias de UsuarioCDTO y Usuario con los valores del formulario
        const datosUsuario: UsuarioCDTO = {
          nombreUsuario: this.usuarioForm.value.usuario,
          contraseña: this.usuarioForm.value.contrasena,
          fechaCreación: new Date().toISOString(),
          ultimaModificación: new Date().toISOString(),
          rolID: 0,
          personaId: this.idPersona.personaID
        };        

        this.usuarioService.crearUsuario(datosUsuario).subscribe(data => {
          console.log(data);
        });
      });
      
      this.router.navigate(['/login']); 

    }
  }
}
