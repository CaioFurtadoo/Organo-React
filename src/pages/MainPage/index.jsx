import { Banner } from "../../componentes/Banner"
import { Formulario } from "../../componentes/Formulario"
import { useState } from 'react'
import { Team } from "../../componentes/Team"
import './MainPage.css'

export const MainPage = () => {

    const times = [
        {
            nome: 'Programação',
            primaryColor: '#57c278',
            secundaryColor: '#d9f7e9'
        },
                {
            nome: 'Front-End',
            primaryColor: '#82CFFA',
            secundaryColor: '#E8F8FF'
        },
                {
            nome: 'Data Science',
            primaryColor: '#A6D157',
            secundaryColor: '#F0F8E2'
        },
                {
            nome: 'Devops',
            primaryColor: '#E06B69',
            secundaryColor: '#FDE7E8'
        },
                {
            nome: 'Ux e desing',
            primaryColor: '#DB6EBF',
            secundaryColor: '#FAE9F5'
        },
                {
            nome: 'Mobile',
            primaryColor: '#FFBA05',
            secundaryColor: '#FFF5D9'
        },
                {
            nome: 'Inovação e gestão',
            primaryColor: '#FF8A29',
            secundaryColor: '#FFEEDF'
        }
    ]
    
    const [colaboradores, setColaboradores] = useState([])

    const RegisterTrue = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores,colaborador])
    }

    return (
        <section className="home">
            <Banner />
            <div className="general">
                <div className="size-forms">
                    <Formulario 
                    name={times.map(time => time.nome)} 
                    Register ={colaborador => RegisterTrue(colaborador)}/>
                </div>
                    {times.map(time => <Team 
                    key={time.nome} 
                    name={time.nome}
                    primaryColor ={time.primaryColor}
                    secundaryColor ={time.secundaryColor}
                    colaboradores={colaboradores.filter(colaborador => colaborador.select === time.nome)}/>)}
            </div>
        </section>
    )
}