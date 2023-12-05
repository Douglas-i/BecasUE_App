export interface SolicitudProgramaCDTO {
    resumen: string,
    fechaSolicitud: string,
    estado: string,
    personaId: number,
    programaOfertadoId: number
}

export interface SolicitudProgramaDTO {
    solicitudId: number,
    resumen: string,
    fechaSolicitud: string,
    estado: string,
    personaId: number,
    programaOfertadoId: number
}

export interface SolicitudProgramaDTOv2 {
    solicitudId: number,
    resumen: string,
    fechaSolicitud: string,
    estado: string,
    personaId: string,
    programaOfertadoId: number
}

export interface SolicitudesAceptadas {
    solicitudAceptadaId: number,
    fechaAceptacion: string,
    solicitudID: number
}