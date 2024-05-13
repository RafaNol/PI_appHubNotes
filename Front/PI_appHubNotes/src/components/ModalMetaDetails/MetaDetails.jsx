import "./MetaDetails.css"
import AppButton from "../AppButton/AppButton.jsx";
import {useEffect, useState} from "react";
import {formatDate} from "./DataFormatF.js";
import {getCurrentDateInfo} from "../../pages/target/dateUtilsF.js";
import {useNavigate} from "react-router-dom";



const MetaDetails = (props) => {


    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [reloadComponent, setReloadComponent] = useState(false);
    const [sameData, setSameData] = useState(false);
    const {day, monthShort, year} = getCurrentDateInfo();
    const formatDay = `${day}/${monthShort}/${year}`;
    const navigate = useNavigate();
    
    
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/metas/${props.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                //logic to block the button
                if (
                    formatDate(jsonData.updated_at) !== formatDay &&
                    formatDate(jsonData.created_at) !== formatDay ||
                    jsonData.totalDias === 0
                ) {
                    setSameData(false);
                } else {
                    setSameData(true);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [props.id]);

    useEffect(() => {
        setReloadComponent(false);
    }, [reloadComponent]);

    const updateCount = async () => {
        props.modalSwitch();
        try {

            const url = `http://localhost:8080/metas/${props.id}`;
            const requestBody = {
                title: data.title,
            };

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error('Failed to update count');
            }

            navigate("/target")
        } catch (error) {
            console.error('Error updating count:', error);
        }
    };
    
    const deleteHandle = async () => {
        try {
            const response = await fetch(`http://localhost:8080/metas/${props.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                props.modalSwitch()
                navigate("/target")
            }
        } catch (error) { /* empty */ }
    }


    return (
        <>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&             <>
            <div className="metaDetails-container">
                <div className="modal-title">
                    <h1>{data.title}</h1>
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
                            <p>{formatDate(data.created_at)}</p>
                            <p>{data.totalDias}</p>
                            <p>{data.updated_at === null? "Sem dado" : formatDate(data.updated_at)}</p>
                        </div>
                    </div>
                    <AppButton onClick={deleteHandle} className="metaButton">Deletar</AppButton>
                </div>

                <div className="metaDetails-buttons">
                    <AppButton onClick={props.modalSwitch}>Voltar</AppButton>
                    <AppButton onClick={updateCount} className={sameData && "metaDetails-buttons-disable"} able={sameData && true}>Executar</AppButton>
                </div>



            </div>
            <div className="metaDetailsModal-container" onClick={props.modalSwitch}>

            </div>
        </>}



        </>
    )
}

export default MetaDetails