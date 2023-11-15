import "./Note.css"

const Note = (props) => {
    return(
        <div className={`note-item ${props.index % 2 === 0? "var-colorB" : "var-colorA"}`}>
            <p>{props.title}</p>
        </div>
    )
}

export default Note