import { Card } from '../Card'
import hexToRgba from 'hex-to-rgba';
import './Team.css'

export const Team = (props) => {
    const css = {
        backgroundColor: hexToRgba(props.cor, '0.7'),
        backgroundImage: 'url(/imagens/fundo.png)'
    }
    return(
        props.colaboradores.length > 0 && <section className='container-team' style={css}>

            <input 
            value={props.cor} 
            onChange={evento => props.ChangeColor(evento.target.value, props.id )} 
            type="color" 
            className='input-color'/>

            <h3 style={{borderBottomColor: props.cor}}>{props.name}</h3>
            <div className='cards'>
                {props.colaboradores.map(colaborador =>{
                    return <Card 
                    key={colaborador.nome} 
                    color={props.cor}
                    id={colaborador.id} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    delete={props.delete}/>
                })}
            </div>
        </section>
    )
}