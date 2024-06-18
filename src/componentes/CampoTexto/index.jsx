import './CampoTexto.css'

export const CampoTexto = (props) =>{

    const Digit = (event) =>{
        props.Digit(event.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
            value={props.value} 
            onChange={Digit} 
            required={props.obrigatorio} 
            type={props.input} 
            placeholder={props.placeholder}
            style={props.css}
            />
        </div>
    )
}