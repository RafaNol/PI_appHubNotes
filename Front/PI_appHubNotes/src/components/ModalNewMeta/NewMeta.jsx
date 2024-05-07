import "./NewMeta.css"
import AppButton from "../AppButton/AppButton.jsx";

const NewMeta = (props) => {
    return(
        <>
            <div onClick={props.newMetaSwitch} className="newMeta-blackContainer">
            </div>
            <div className="newMeta-container">
                <p className="newMeta-title">Nova Meta</p>
                <div className="newMeta-inputHolder">
                    <input className="newMeta-input" type="text" placeholder="Título"/>
                </div>

                <div className="newMeta-buttons">
                    <AppButton onClick={props.newMetaSwitch}>Voltar</AppButton>
                    <AppButton>Salvar</AppButton>
                </div>

            </div>
        </>

    )
}

export default NewMeta
