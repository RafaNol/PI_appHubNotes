import "./HomeButton.css"

const HomeButton = (props) => {
    return (
        <div className="button-container">
            <span><img src={props.image} alt=""/></span>
            {props.title}
        </div>
    )
}

export default HomeButton