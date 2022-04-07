import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import medico from './images/medico1.jpg'

const App = () => {

    const estiloElemento1 = () => {
        return {
            margin: 'auto', 
            width: 768, 
            backgroundColor: '#EEE', 
            padding: 12, 
            borderRadius: 10,
            border: '1px solid'
        }
    }

    const medico1 = {
        "nome": "José da Silva"
    }

    const medico2 = {
        "nome": "Maria da Silva"
    }

    const medico3 = {
        "nome": "Jaqueline Mendes"
    }
    console.log(process.env.PUBLIC_URL)

    return (
        <div style={estiloElemento1()}>
            <h1 style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
                Profissionais de Saúde
            </h1>
            <div style={{margin: 'auto', width: '90%', padding: 12, borderRadius: 10, border: 'groove', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-around'}}>
                <div className="cards">
                    <img src={medico} alt="José da Silva" />
                    <p>{medico1.nome}</p>
                </div>
                <div className="cards">
                    <img src={ process.env.PUBLIC_URL + '/medico2.jpg'} alt="Maria da Silva" />
                    <p>{medico2.nome}</p>
                </div>
                <div className="cards">
                    <img src="https://www.ceen.com.br/wp-content/uploads/2019/08/Carreira-m%C3%A9dica-6-dicas-para-ser-um-m%C3%A9dico-bem-sucedido.jpg" alt="Jaqueline Mendes" />
                    <p>{medico3.nome}</p>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)

