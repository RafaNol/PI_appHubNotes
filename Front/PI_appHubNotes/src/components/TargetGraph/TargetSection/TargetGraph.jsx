import './TargetGraph.css'
import Graph from "../Graph/Graph.jsx";

const TargetGraph = (props) => {

    // preciso adicinar um objeto todo que venha com todos os itens do endpoit no props tipo props.listaDeTarefas ai la tem todos os titulos, dias e etc
    return(
        <section className="target-container">
            <h1 className="target-title">Resumo</h1>

            <div className="target-expl">
                <p className="target-expl-text left-text">dias executado</p>
                <p className="target-expl-text right-text">dias em sequencia</p>
            </div>

            <div className="target-items">
                <Graph title="Jogar Bola" sequencia={2} total={3} />
                <Graph title="Estudar 1 hora" sequencia={7} total={13} />
                <Graph title="Ler livro" sequencia={4} total={9} />
            </div>



        </section>
    )
}

export default TargetGraph