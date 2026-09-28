import type { Props } from "../interfaces/checkbox";

export const Etiquetas = ({ completada }: Props) => (
    <span className={`badge ${completada ? 'completada' : 'pendiente'}`}>
        {completada ? 'Completada' : 'Pendiente'}
    </span>
);