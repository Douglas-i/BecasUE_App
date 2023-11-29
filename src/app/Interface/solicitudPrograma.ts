export interface SolicitudProgramaCDTO {
    resumen: string;
}

export interface SolicitudProgramaDTO {
    solicitudId: number,
    resumen: string,
    fechaSolicitud: string,
    estado: string,
    persona: number,
    programaOfertadoId: number
}