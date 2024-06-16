import './Card.css'

export const Card = (props) =>{

    const css = {backgroundColor: props.color}

    return(
        <div className="container-geral">
            <div className='container-cor' style={css}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='container-texto'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}