import type { Tarea } from '../interfaces/tareas';
import { CheckboxTarea } from './CheckboxTarea';
import { Etiquetas } from './Etiquetas';
import { Acciones } from './Acciones';

interface Props { tarea: Tarea; onAlternar: (id: number) => void; onEliminar: (id: number) => void; }

export const Items = ({ tarea, onAlternar, onEliminar }: Props) => (
    <div className="item-tarea">
        <CheckboxTarea completada={tarea.completada} onAlternar={() => onAlternar(tarea.id)} />
        <span className={`texto-tarea ${tarea.completada ? 'completado' : ''}`}>{tarea.texto}</span>
        <Etiquetas completada={tarea.completada} onAlternar={function (): void {
            throw new Error('Function not implemented.');
        } } />
        <Acciones onAlternar={() => onAlternar(tarea.id)} onEliminar={() => onEliminar(tarea.id)} />
    </div>
);