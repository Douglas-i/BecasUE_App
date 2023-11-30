export interface PersonaCDTO {
    nombrePersona: string,
    apellidoPersona: string,
    paísPrecedencia: string,
    correoElectronico: string,
    pasaporte: string,
    usuarioID: 0 
}

export interface PersonaDTO {
    personaID: number,
    nombrePersona: string,
    apellidoPersona: string,
    paísPrecedencia: string,
    correoElectronico: string,
    pasaporte: string,
    usuarioID: 0 //Se tiene quitar del controller
}

export interface UsuarioCDTO {
    nombreUsuario: string,
    contraseña: string,
    fechaCreación: string,
    ultimaModificación: string,
    rolID: 0,
    personaId: number
}