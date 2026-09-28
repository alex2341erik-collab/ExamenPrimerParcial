import { administrador } from './Gestor/administrador';
import { Titulo } from './componentes/Titulo';
import { AgregarLista } from './componentes/AgregarLista';
import { Filtros } from './componentes/Filtros';
import { Lista } from './componentes/Lista';

export const PrincipalApp = () => {
    const { filtro, tareasFiltradas, setFiltro, agregarTarea, alternarTarea, eliminarTarea } = administrador();
    return (
        <div className="tarjeta-contenedor">
            <Titulo titulo='Mi Lista de Tareas' />
            <AgregarLista onAgregarTarea={agregarTarea} />
            <div className="seccion-controles">
                <Filtros filtroActual={filtro} onCambiarFiltro={setFiltro} />
            </div>
            <Lista tareas={tareasFiltradas} onAlternar={alternarTarea} onEliminar={eliminarTarea} />
        </div>
    );
};
