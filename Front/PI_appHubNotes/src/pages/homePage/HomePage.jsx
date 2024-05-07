import "./HomePage.css";
import calendar from "../../../public/images/calendar.svg";
import HomeButton from "../../components/HomeButton/HomeButton.jsx";
import notes from "../../../public/images/note.svg";
import target from "../../../public/images/target.svg";
import HomeEvents from "../../components/HomeEvents/EventCard/HomeEvents.jsx";
import {Link} from "react-router-dom";

const HomePage = () => {

    return(
        <section className="HomePage">
            <h1>HubNotes</h1>
            <section>
                <HomeEvents />
                <HomeButton image={calendar} title="Calendário" />
                <Link to={"notes"} style={{ color: 'inherit', textDecoration: 'inherit'}}><HomeButton image={notes} title="Suas Anotações" /></Link>
                <Link to={"target"} style={{ color: 'inherit', textDecoration: 'inherit'}}><HomeButton image={target} title="Metas" /></Link>
            </section>
        </section>
    )
}

export default HomePage