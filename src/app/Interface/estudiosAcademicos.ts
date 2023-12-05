export interface EstudiosAcademicosCDTO {
    tituloObtenido: string,
    entidadEmisora: string,
    fechaInicio: string,
    fechaFinalizacion: string,
    personaID: 1
}

export interface EstudiosAcademicosDTO {
    estudiosAcademicosID: number,
    tituloObtenido: string,
    entidadEmisora: string,
    fechaInicio: string,
    fechaFinalizacion: string,
    personaID: number
}

export interface ExperienciaLaboralCDTO {
    puesto: string,
    entidadTrabajo: string,
    fechaInicio: string,
    fechaFinalizacion: string,
    personaID: string
}

export interface ExperienciaLaboralDTO {
    experienciaLaboralID: number,
    puesto: string,
    entidadTrabajo: string,
    fechaInicio: string,
    fechaFinalizacion: string,
    personaID: number
}