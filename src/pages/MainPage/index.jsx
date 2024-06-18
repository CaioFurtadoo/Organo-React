import { Banner } from "../../componentes/Banner"
import { Formulario } from "../../componentes/Formulario"
import { useState } from 'react'
import { Team } from "../../componentes/Team"
import './MainPage.css'
import { Rodape } from "../../componentes/Rodape"
import { v4 as uuidv4 } from 'uuid';


export const MainPage = () => {

    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Programação',
            cor: '#57c278',
        },
                {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#82CFFA',
        },
                {
            id: uuidv4(),                    
            nome: 'Data Science',
            cor: '#A6D157',
        },
                {
            id: uuidv4(),
            nome: 'Devops',
            cor: '#E06B69',
        },
                {
            id: uuidv4(),
            nome: 'Ux e desing',
            cor: '#DB6EBF',
        },
                {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05',
        },
                {
            id: uuidv4(),
            nome: 'Inovação e gestão',
            cor: '#FF8A29',
        }
    ])
    
    const [colaboradores, setColaboradores] = useState([])

    const RegisterTrue = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores,colaborador])
    }

    function DeleteCard(props) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== props))
    }

    function ChangeColor(cor, id) {
        setTimes(times.map(time =>{
            if(time.id === id){
                time.cor = cor;
            }
            return time;
        }));
    }

    function RegisterTeam(newTeam){
        setTimes([ ...times, { ...newTeam, id: uuidv4() }])
    }

    return (
        <section className="home">
            <Banner />
            <div className="general">
                <div className="size-forms">
                    <Formulario 
                    name={times.map(time => time.nome)} 
                    Register ={colaborador => RegisterTrue(colaborador)}
                    RegisterTeam ={RegisterTeam}/>
                </div>
                <h1 className="organization">Minha organização</h1>
                    {times.map(time => 
                    <Team
                        id={time.id}
                        key={time.nome} 
                        name={time.nome}
                        cor ={time.cor}
                        colaboradores={colaboradores.filter(colaborador => colaborador.select === time.nome)}
                        delete={DeleteCard}
                        ChangeColor ={ChangeColor}
                    />)}
            </div>
            <Rodape />
        </section>
    )
}