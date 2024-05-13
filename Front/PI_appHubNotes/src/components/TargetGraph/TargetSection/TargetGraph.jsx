import './TargetGraph.css'
import Graph from "../Graph/Graph.jsx";

const TargetGraph = (props) => {

    console.log(props.ObjetoAqui)

    return(
        <section className="target-container">
            <h1 className="target-title">Resumo</h1>

            <div className="target-expl">
                <p className="target-expl-text left-text">dias executado</p>
                <p className="target-expl-text right-text">dias em sequencia</p>
            </div>

            <div className="target-items">
                {props.ObjetoAqui.map((item, index) => (
                    <Graph
                        key={item.id}
                        title={item.title}
                        sequencia={item.diasSeguidos}
                        total={item.totalDias}
                    />
                ))}
            </div>



        </section>
    )
}

export default TargetGraph