import './Formulario.css'
import { CampoTexto } from '../CampoTexto'
import { Select } from '../Select'
import { Button } from '../Button'
import { useState } from 'react'

export const Formulario = (props) => {

    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[select, setSelect] = useState('')

    const Save = (evento) => {
        evento.preventDefault()
        props.Register({
            nome,
            cargo,
            imagem,
            select
        })
        setNome('')
        setCargo('')
        setImagem('')
        setSelect('')
    }
    return(
        <form onSubmit={Save}>

            <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                    label ="Nome" 
                    placeholder ="Digite seu Nome" 
                    obrigatorio ={true} 
                    value={nome} 
                    Digit={value => setNome(value)}
                />

                <CampoTexto 
                    label ="Cargo" 
                    placeholder ="Digite seu Cargo" 
                    obrigatorio ={true} 
                    value={cargo} 
                    Digit={value => setCargo(value)}
                />

                <CampoTexto 
                    label ="Imagem" 
                    placeholder ="informe o endereço da imagem" 
                    obrigatorio ={true} 
                    value={imagem} 
                    Digit={value => setImagem(value)}
                />

                <Select 
                    item = {props.name} 
                    label ="Escolha o time" 
                    obrigatorio ={true}
                    value ={select}
                    Digit={value => setSelect(value)}
                />

                <Button 
                texto="Criar card"
                />

        </form>
    )
}