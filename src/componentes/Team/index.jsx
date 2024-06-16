import { Card } from '../Card'
import './Team.css'

export const Team = (props) => {
    const css = {
        backgroundColor: props.secundaryColor
    }
    return(
        props.colaboradores.length > 0 && <section className='container-team' style={css}>
            <h3 style={{borderBottomColor: props.primaryColor}}>{props.name}</h3>
            <div className='cards'>
                {props.colaboradores.map(colaborador =><Card key={colaborador.nome} color={props.primaryColor} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}