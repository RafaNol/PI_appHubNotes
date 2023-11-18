import "./AppButton.css"
const AppButton = (props) => {
    return(
        <div className={`app-button ${props.className}`}>
            <button onClick={props.onClick} type={props.type} name={props.name} value={props.value} className={props.className}>{props.children}</button>
        </div>
    )
}

export default AppButton