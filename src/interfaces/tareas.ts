export interface Tarea {
    id: number;
    texto: string;
    completada: boolean;
}

export type TipoFiltro = 'todas' | 'pendientes' | 'completadas';