import type { Props } from "../interfaces/acciones";
export const Acciones = ({ onAlternar, onEliminar }: Props) => (
    <div className="acciones-tarea">
        <button className="btn-accion check" onClick={onAlternar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
        </button>
        <button className="btn-accion eliminar" onClick={onEliminar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
        </button>
    </div>
);