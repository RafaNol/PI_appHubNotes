import "./Graph.css"
import LineGenerator from "../LineGenerator/LineGenerator.jsx";

const Graph = (props) => {


    return(
        <div className="graph-container">
            <div className="graph-title">
                <p className="graph-title-text">{props.title}</p>
            </div>
            <div className="graph-lines">
                {props.total !== 0 && <LineGenerator seq={props.sequencia} total={props.total}/>}

            </div>
        </div>
    )
}

export default Graph