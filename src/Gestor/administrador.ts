import { useState, useEffect } from 'react';
import type { Tarea, TipoFiltro } from '../interfaces/tareas';

export const administrador = () => {
    const [tareas, setTareas] = useState<Tarea[]>(() => {
        const guardadas = localStorage.getItem('tareas');
        return guardadas ? JSON.parse(guardadas) : [{ id: 1, texto: 'Estudiar React', completada: false }];
    });
    const [filtro, setFiltro] = useState<TipoFiltro>('todas');

    useEffect(() => { localStorage.setItem('tareas', JSON.stringify(tareas)); }, [tareas]);

    const agregarTarea = (texto: string) => setTareas([{ id: Date.now(), texto, completada: false }, ...tareas]);
    const alternarTarea = (id: number) => setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
    const eliminarTarea = (id: number) => setTareas(tareas.filter(t => t.id !== id));

    const tareasFiltradas = tareas.filter(t => {
        if (filtro === 'pendientes') return !t.completada;
        if (filtro === 'completadas') return t.completada;
        return true;
    });

    return { filtro, tareasFiltradas, setFiltro, agregarTarea, alternarTarea, eliminarTarea };
};
