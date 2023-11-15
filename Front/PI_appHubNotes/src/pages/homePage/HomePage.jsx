import "./HomePage.css";
import calendar from "../../../public/images/calendar.svg";
import HomeButton from "../../components/HomeButton/HomeButton.jsx";
import notes from "../../../public/images/note.svg";
import todo from "../../../public/images/todo.svg";
import HomeEvents from "../../components/HomeEvents/EventCard/HomeEvents.jsx";
import GoHome from "../../components/GoHome/GoHome.jsx";

const HomePage = () => {

    return(
        <section className="HomePage">
            <h1>HubNotes</h1>
            <section>
                <HomeEvents />
                <HomeButton image={calendar} title="Calendário" />
                <HomeButton image={notes} title="Suas Anotações" />
                <HomeButton image={todo} title="Lista de Tarefas" />
            </section>
        </section>
    )
}

export default HomePage