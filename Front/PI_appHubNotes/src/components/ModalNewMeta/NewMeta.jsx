import "./NewMeta.css"
import AppButton from "../AppButton/AppButton.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const NewMeta = (props) => {


    const [title, setTitle] = useState("");
    const navigate = useNavigate();


    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/metas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title }),
            });
            if (response.ok) {
                props.newMetaSwitch()
                navigate("/target")
            } else {
                console.error("Failed to submit title:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting title:", error);
        }
    };

    return(
        <>
            <div onClick={props.newMetaSwitch} className="newMeta-blackContainer">
            </div>
            <div className="newMeta-container">
                <p className="newMeta-title">Nova Meta</p>
                <div className="newMeta-inputHolder">
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={changeTitle}
                            value={title}
                            className="newMeta-input"
                            type="text"
                            placeholder="Título"
                        />
                    </form>

                </div>

                <div className="newMeta-buttons">
                    <AppButton onClick={props.newMetaSwitch}>Voltar</AppButton>
                    <AppButton
                        onClick={handleSubmit}
                        className={title.trim().length <= 3 ? "newMeta-saveButton" : ""}
                        able={title.trim().length <= 3}
                    >
                        Salvar
                    </AppButton>
                </div>

            </div>
        </>

    )
}

export default NewMeta
