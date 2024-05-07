import TargetGraph from "../../components/TargetGraph/TargetSection/TargetGraph.jsx";
import "./Target.css"
import {getCurrentDateInfo} from "./dateUtilsF.js";
import AppButton from "../../components/AppButton/AppButton.jsx";
import TargetItem from "../../components/Target/TargetItem.jsx";
import {useState} from "react";
import MetaDetails from "../../components/ModalMetaDetails/MetaDetails.jsx";
import NewMeta from "../../components/ModalNewMeta/NewMeta.jsx";

const Target = () => {

    const {weekday, month, day, year} = getCurrentDateInfo();
    const datePhrase = `${weekday}. ${day} de ${month} de ${year} `

    const [modalDetail, setModalDetail] = useState(false);
    const [newMeta, setNewMeta] = useState(false);

    const modalSwitch = () => {
        setModalDetail(prevState => !prevState);
    }

    const newMetaSwitch = () => {
        setNewMeta(prevState => !prevState);
    }

    return (
        <div className="target-main-container">
            <div className="main-home-container">
                <h1>Meu Dia</h1>
                <p>{datePhrase}</p>
            </div>

            <TargetGraph ObjetoAqui={"objeto da api"}/>

            <div className="target-targetArea">
                <TargetItem onClick={modalSwitch} title="Teste item 1"/>
                <TargetItem onClick={modalSwitch} title="Teste item 2"/>
                <TargetItem onClick={modalSwitch} title="Teste item 3"/>
                <TargetItem onClick={modalSwitch} title="Teste item 4"/>
                <TargetItem onClick={modalSwitch} title="Teste item 5"/>
                <TargetItem onClick={modalSwitch} title="Teste item 6"/>
                <TargetItem onClick={modalSwitch} title="Teste item 7"/>
                <TargetItem onClick={modalSwitch} title="Teste item 8"/>
                <TargetItem onClick={modalSwitch} title="Teste item 9"/>
                <TargetItem onClick={modalSwitch} title="Teste item 10"/>
                {modalDetail && <MetaDetails modalSwitch={modalSwitch}/>}
            </div>


            <div className="target-buttons">
                <AppButton onClick={newMetaSwitch}>Nova Meta</AppButton>

            </div>

            {newMeta && <NewMeta newMetaSwitch={newMetaSwitch}/>}

        </div>

    )
}

export default Target