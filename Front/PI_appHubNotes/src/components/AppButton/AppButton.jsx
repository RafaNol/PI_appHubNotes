import "./AppButton.css"
const AppButton = (props) => {
    return(
        <div className={`app-button ${props.className}`}>
            <button>{props.children}</button>
        </div>
    )
}

export default AppButton