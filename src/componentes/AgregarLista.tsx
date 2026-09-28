import { useState } from 'react';
import type { Props } from '../interfaces/agregartarea';
export const AgregarLista = ({ onAgregarTarea }: Props) => {
    const [valorInput, setValorInput] = useState('');
    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        if (valorInput.trim() === '') return;
        onAgregarTarea(valorInput);
        setValorInput('');
    };
    return (
        <form className="seccion-agregar" onSubmit={manejarEnvio}>
            <input className="input-tarea" placeholder="Nueva tarea..." value={valorInput} onChange={(e) => setValorInput(e.target.value)} />
            <button type="submit" className="btn-agregar">Agregar</button>
        </form>
    );
};


