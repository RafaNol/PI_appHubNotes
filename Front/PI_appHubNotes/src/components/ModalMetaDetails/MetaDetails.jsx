import "./MetaDetails.css"
import AppButton from "../AppButton/AppButton.jsx";

const MetaDetails = (props) => {
    //trocar o botão pelo botão do modal

    return (
        <>
            <div className="metaDetails-container">
                <div className="modal-title">
                    <h1>props. title</h1>
                </div>

                <div className="metaDetails-detail">
                    <p className="metaDetails-detail-title">Estatísticas</p>
                    <div className="metaDetails-detail-textArea">

                        <div className="metaDetails-detail-left">
                            <p>Data de Criação</p>
                            <p>Total dias feito</p>
                            <p>Último dia feito</p>
                        </div>
                        <div className="metaDetails-detail-right">
                            <p>20/Mar/23</p>
                            <p>props aqui</p>
                            <p>15/Mar/23</p>
                        </div>

                    </div>

                </div>

                <div className="metaDetails-buttons">
                    <AppButton onClick={props.modalSwitch}>Voltar</AppButton>
                    <AppButton>Executar</AppButton>
                </div>



            </div>
            <div className="metaDetailsModal-container" onClick={props.modalSwitch}>

            </div>

        </>
    )
}

export default MetaDetails