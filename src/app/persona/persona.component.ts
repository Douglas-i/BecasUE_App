import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaCDTO, PersonaDTO,} from '../Interface/Persona';
import { UsuarioService } from '../services/usuario.service';
import { last } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  personaForm: FormGroup;
  persona: PersonaDTO;  

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router,) {}

  ngOnInit() {
    this.personaForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      numeroPasaporte: ['', Validators.required],
      pais: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
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

      this.usuarioService.crearPersona(datosPersona).subscribe(data => {
        console.log(data);
      });

      
      this.usuarioService.obtenerPersona().subscribe(persona => {
        console.log(persona);
        this.persona = persona.find(x => x.correoElectronico == datosPersona.correoElectronico);
        console.log("Persona Encontrada: "+this.persona);
        //filtro
      });

      this.router.navigate(['/usuario']); 

      // Realiza la acción para guardar los datos, por ejemplo, llama a un método de servicio
      // this.tuServicio.guardarDatos(datosPersona, datosUsuario);
    }
  }
}
