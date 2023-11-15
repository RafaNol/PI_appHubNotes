
import "./NewNote.css"
import AppButton from "../../components/AppButton/AppButton.jsx";

const NewNote = () => {
    return(
        <div className="new-note">
            <h1>Nova Anotação</h1>
            <form className="container">
                    <input type="text" placeholder="Título"/>
                    <textarea placeholder="nova Anotação"/>
                    <div className="bottom-button">
                        <AppButton>Cancelar</AppButton>
                        <AppButton>Adicionar</AppButton>
                    </div>

            </form>
        </div>
    )
}

export default NewNote