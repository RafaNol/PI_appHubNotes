
import "./NewNote.css"
import AppButton from "../../components/AppButton/AppButton.jsx";
import {Form, Link, redirect, useLoaderData, useNavigate, useParams, useSubmit} from "react-router-dom";
import {useState} from "react";
import deleteIcon from "../../../public/images/delete.svg"


const NewNote = (props) => {

    const note = useLoaderData();

    const [title, setTitle] = useState(note !== undefined? note.title : "");
    const [body, setBody] = useState(note!== undefined? note.body : "");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const bodyChangeHandler = (e) => {
        setBody(e.target.value)
    }

    return(
        <div className="new-note">
            <h1>Nova Anotação</h1>
            <Form method={props.method} className="container">
                    <input
                        type="text"
                        placeholder="Título"
                        defaultValue={title}
                        name="title"
                        onChange={titleChangeHandler}
                    />
                    <textarea
                        placeholder="nova Anotação"
                        defaultValue={body}
                        name="body"
                        onChange={bodyChangeHandler}
                    />
                    <div className="bottom-button">
                        <AppButton className="cancel" type="submit" name="intent" value="back">{note !== undefined? "Voltar" : "Cancelar"}</AppButton>
                        {note !== undefined && <AppButton className="delete" type="submit" name="intent" value="delete"><img src={deleteIcon} alt="delete buttom"/></AppButton>}
                        <AppButton className="save" type="submit" name="intent" value="save">Salvar</AppButton>
                    </div>
            </Form>



        </div>
    )

}

export async function loader({params}) {
    return await fetch('http://localhost:8080/notas/' + params.noteId);
}

export async function action({request, params}){
    let data = await request.formData();
    const type = request.method;
    const id = params.noteId

    let intent = data.get("intent");

    if (intent === "save"){
        if (type === "PUT"){
            const url = 'http://localhost:8080/notas/' + params.noteId;
            const note = {
                title: data.get('title'),
                body: data.get('body')
            }

            const response = await fetch(url, {
                method: "PUT",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(note)
            });

        } else {
            const note = {
                title: data.get('title'),
                body: data.get('body')
            }

            const response = await fetch('http://localhost:8080/notas', {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(note)
            });
        }
    } else if(intent === "delete"){
        const confirm = window.confirm("deletar?")
        if (confirm) {
            console.log(id)
            const response = await fetch('http://localhost:8080/notas/' + id, {
                method: "DELETE",
            });
        }
    }


    return redirect('/notes');

}



export default NewNote



