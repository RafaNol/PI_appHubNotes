import "./NoteList.css";
import AppButton from "../../components/AppButton/AppButton.jsx";
import Note from "../../components/Note/Note.jsx";
import {useLoaderData} from "react-router-dom";

const NoteList = () => {

    const data = useLoaderData();

    const lists = ["Compras", "Etapas do PI", "Temas De Estudos", "Itens Para Viagem", "Planos Para o Ano", "Temas De Estudos", "Itens Para Viagem", "Planos Para o Ano", "Temas De Estudos", "Itens Para Viagem", "Planos Para o Ano"];

    return (
        <div className="note-list">
            <h1>Suas Anotações</h1>
            <div className="list-container">
                {lists.map((list, index) => (
                    <Note key={index} index={index} title={list}/>
                ))}
            </div>
            <div className="button-position">
                <AppButton className="test">Criar Nota</AppButton>
            </div>

        </div>
    );

};

export async function loader(){
    
}

export default NoteList;
