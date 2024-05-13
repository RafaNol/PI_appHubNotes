import TargetGraph from "../../components/TargetGraph/TargetSection/TargetGraph.jsx";
import "./Target.css"
import {getCurrentDateInfo} from "./dateUtilsF.js";
import AppButton from "../../components/AppButton/AppButton.jsx";
import TargetItem from "../../components/Target/TargetItem.jsx";
import {useState} from "react";
import MetaDetails from "../../components/ModalMetaDetails/MetaDetails.jsx";
import NewMeta from "../../components/ModalNewMeta/NewMeta.jsx";
import {useLoaderData} from "react-router-dom";

const Target = () => {

    const target = useLoaderData();

                                                                                                                        const {weekday, month, day, year} = getCurrentDateInfo();
    const datePhrase = `${weekday}. ${day} de ${month} de ${year} `

    const [modalDetail, setModalDetail] = useState(false);
    const [newMeta, setNewMeta] = useState(false);

    const modalSwitch = (id) => {
        setModalDetail(prevState => !prevState);
        setGetId(id)
    }

    const newMetaSwitch = () => {
        setNewMeta(prevState => !prevState);
    }


    const [getId, setGetId] = useState("");

    
    return (
        <div className="target-main-container">
            <div className="main-home-container">
                <h1>Meu Dia</h1>
                <p>{datePhrase}</p>
            </div>

            <TargetGraph ObjetoAqui={target} />

            <div className="target-targetArea">
                {target.length === 0? <p className="empty-note">Sem Metas para Exibir, experimente Criar uma</p> : target.map((target, index) => (
                    <TargetItem onClick={modalSwitch.bind(null, target.id)} to={target.id} key={target.id} index={index} title={target.title} idItem={target.id}/>
                ))}
                {modalDetail && <MetaDetails id={getId} modalSwitch={modalSwitch}/>}
            </div>


            <div className="target-buttons">
                <AppButton onClick={newMetaSwitch}>Nova Meta</AppButton>

            </div>

            {newMeta && <NewMeta newMetaSwitch={newMetaSwitch}/>}

        </div>

    )
}

export default Target

export async function loader() {
    return await fetch('http://localhost:8080/metas');
}