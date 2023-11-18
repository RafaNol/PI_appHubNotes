import "./NoteList.css";
import AppButton from "../../components/AppButton/AppButton.jsx";
import Note from "../../components/Note/Note.jsx";
import {Link, useLoaderData} from "react-router-dom";

const NoteList = () => {

    const notes = useLoaderData();


    return (

        <div className="note-list">
            <div>
                <h1>Suas Anotações</h1>
                <div className="list-container">
                    {notes.length === 0? <p className="empty-note">Sem Anotações para Exibir, experimente Criar uma</p> : notes.map((note, index) => (
                        <Note to={note.id} key={note.id} index={index} title={note.title} idItem={note.id}/>
                    ))}
                </div>
            </div>
            <Link to={"/notes/new-note" } className="test"><AppButton >Criar Anotação</AppButton></Link>
        </div>
    );

};

export default NoteList;

export async function loader() {
    return await fetch('http://localhost:8080/notas');
}
