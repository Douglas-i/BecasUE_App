import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaCDTO, PersonaDTO, Usuario } from '../Interface/Persona';
import { UsuarioService } from '../services/usuario.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  personaForm: FormGroup;
  persona: PersonaDTO;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.personaForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      numeroPasaporte: ['', Validators.required],
      pais: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  inicializarFormulario(): void {
    // Inicializa tus controles de formulario aquí
    this.personaForm = this.fb.group({
      // Define tus controles de formulario con validadores
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      numeroPasaporte: ['', Validators.required],
      pais: ['', Validators.required],
      correo: [''],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.personaForm.valid) {
      // Crea instancias de PersonaCDTO y Usuario con los valores del formulario
      const datosPersona: PersonaCDTO = {
        nombrePersona: this.personaForm.value.nombres,
        apellidoPersona: this.personaForm.value.apellidos,
        paísPrecedencia: this.personaForm.value.pais,
        correoElectronico: this.personaForm.value.correo,
        pasaporte: this.personaForm.value.numeroPasaporte,
        usuarioID: 0, // Es posible que necesites establecer un ID válido aquí
      };

      this.usuarioService.crearPersona(datosPersona);

      const datosUsuario: Usuario = {
        nombreUsuario: this.personaForm.value.usuario,
        contraseña: this.personaForm.value.contrasena,
        fechaCreación: new Date().toISOString(),
        ultimaModificación: new Date().toISOString(),
        rolID: 0, // Es posible que necesites establecer un ID válido aquí
        personaId: 0, // Es posible que necesites establecer un ID válido aquí
      };
      
      this.usuarioService.obtenerPersona().subscribe(persona => {
        console.log(persona);
        this.persona = persona.find(x => x.correoElectronico == datosPersona.correoElectronico);
        console.log("Persona Encontrada: "+this.persona);
        //filtro
      });

      // Realiza la acción para guardar los datos, por ejemplo, llama a un método de servicio
      // this.tuServicio.guardarDatos(datosPersona, datosUsuario);
    }
  }
}
