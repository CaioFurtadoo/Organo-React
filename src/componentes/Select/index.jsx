import './Select.css'

export const Select = (props) => {

    const Digit = (event) =>{
        props.Digit(event.target.value)
    }

    return (
        <div className='select-container'>
            <label>{props.label}</label>
                <select value={props.value} onChange={Digit} required={props.obrigatorio}>
                    <option value=""></option>
                    {props.item.map(item => {
                        return <option key={item}>{item}</option>})}
                </select>
        </div>
    )
}