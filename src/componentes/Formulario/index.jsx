import './Formulario.css'
import { CampoTexto } from '../CampoTexto'
import { Select } from '../Select'
import { Button } from '../Button'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Formulario = (props) => {
    
        const css = {
        height: 200,
        border: '3px solid rgba(0, 0, 0, 0.1)', 
    }

    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[select, setSelect] = useState('')
    const[teamName, setTeamName] = useState('')
    const[teamColor, setTeamColor] = useState('')


    const Save = (evento) => {
        evento.preventDefault()
        props.Register({
            nome,
            cargo,
            imagem,
            select,
            id: uuidv4()
        })
        setNome('')
        setCargo('')
        setImagem('')
        setSelect('')
    }
    return(
        <section className='forms-all'>
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
                <form onSubmit={(evento) => {
                evento.preventDefault()
                props.RegisterTeam({nome: teamName, cor: teamColor })
            }}>

                <h2>Preencha os dados para criar um novo time</h2>

                    <CampoTexto 
                        label ="Nome" 
                        placeholder ="Digite o nome do time" 
                        obrigatorio 
                        value={teamName} 
                        Digit={value => setTeamName(value)}
                    />

                    <CampoTexto 
                        label ="Cor do time"
                        input="color"
                        obrigatorio
                        value={teamColor} 
                        Digit={value => setTeamColor(value)}
                        css={css}
                    />

                    <Button 
                    texto="Criar time"
                    />
            </form>
        </section>
    )
}