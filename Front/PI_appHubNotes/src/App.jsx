import HomePage from "./pages/homePage/HomePage.jsx";
import NewNote from "./pages/newNote/NewNote.jsx";
import NoteList from "./pages/noteList/NoteList.jsx";
import {createBrowserRouter} from "react-router-dom";
import GoHome from "./components/GoHome/GoHome.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GoHome />,
        children: [
            {index: true, element: <HomePage />},
            {
                path: 'notes',
                element: <NoteList />
                loader: noteLoader
            }
        ]
    }
])

function App() {
  return (
    <div className="App">
        <HomePage />
    </div>
  );
}

export default App;
