import type{Props} from '../interfaces/checkbox'

export const CheckboxTarea = ({ completada, onAlternar }: Props) => (
    <div className={`checkbox-tarea ${completada ? 'completado' : ''}`} onClick={onAlternar}>
        {completada && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
    </div>
);