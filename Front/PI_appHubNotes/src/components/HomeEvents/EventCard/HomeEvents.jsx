import "./HomeEvents.css"
import Event from "../Event/Event.jsx"

const HomeEvents = () => {
    return (
        <div className="home-events">
            <h2>Próximas Datas</h2>
            <Event eventTitle="Teste de item" eventDate="22/09"/>
        </div>
    )
}

export default HomeEvents