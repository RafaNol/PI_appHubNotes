import "./Event.css"

const Event = (props) => {
    return(
        <div className="event-container">
            <span>-</span>
            <p>{props.eventDate}</p>
            <p>{props.eventTitle}</p>
        </div>
    )

}

export default Event