export interface ProgramasOfertadosDTO {    
    programaOfertadoId: number,
    fechaInicio: string,
    fechaFinalazacion: string,
    montoAprobado: number,
    financiamiento: number,
    programasTitualcion: string,
    ofertaAnual: string,
    universidad: string
}

export interface ProgramasOfertadoCDTO {    
    fechaInicio: string,
    fechaFinalazacion: string,
    montoAprobado: number,
    financiamiento: number,
    programasTitualcion: number,
    ofertaAnual: number,
    universidad: number
}