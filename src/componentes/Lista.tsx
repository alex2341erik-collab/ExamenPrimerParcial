import type { Tarea } from '../interfaces/tareas';
import { Items } from './Items'
interface Props { tareas: Tarea[]; onAlternar: (id: number) => void; onEliminar: (id: number) => void; }

export const Lista = ({ tareas, onAlternar, onEliminar }: Props) => {
    if (tareas.length === 0) return <div className="lista-vacia">No hay tareas</div>;
    return (
        <div className="lista-tareas">
            {tareas.map((tarea) => (
                <Items key={tarea.id} tarea={tarea} onAlternar={onAlternar} onEliminar={onEliminar} />
            ))}
        </div>
    );
};