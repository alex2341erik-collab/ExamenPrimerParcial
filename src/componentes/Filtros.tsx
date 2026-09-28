import type { TipoFiltro } from '../interfaces/tareas';

interface Props { filtroActual: TipoFiltro; onCambiarFiltro: (f: TipoFiltro) => void; }

export const Filtros = ({ filtroActual, onCambiarFiltro }: Props) => {
    const filtros: { etiqueta: string; valor: TipoFiltro }[] = [
        { etiqueta: 'Todas', valor: 'todas' },
        { etiqueta: 'Pendientes', valor: 'pendientes' },
        { etiqueta: 'Completadas', valor: 'completadas' }
    ];
    return (
        <div className="grupo-filtros">
            {filtros.map((f) => (
                <button key={f.valor} className={`btn-filtro ${filtroActual === f.valor ? 'activo' : 'inactivo'}`} onClick={() => onCambiarFiltro(f.valor)}>
                    {f.etiqueta}
                </button>
            ))}
        </div>
    );
};