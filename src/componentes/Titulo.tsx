import type{ Props} from '../interfaces/titulo'
export const Titulo =({titulo}: Props) =>{
    return(
        <h1 className="cabecera-titulo">{titulo}</h1>
    )
}