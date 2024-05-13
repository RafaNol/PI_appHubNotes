import './App.css';
import HomePage from "./pages/homePage/HomePage.jsx";
import NewNote, {loader as fetchNoteById, action as submitData} from "./pages/newNote/NewNote.jsx";
import NoteList, {loader as notesLoader} from "./pages/noteList/NoteList.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GoHome from "./components/GoHome/GoHome.jsx";
import Target, {loader as targetLoader} from "./pages/target/Target.jsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <GoHome />,
        children: [
            {index: true, element: <HomePage />},
            {
                path: '/notes',
                element: <NoteList />,
                loader: notesLoader,
            },
            {
                path: '/notes/:noteId',
                element: <NewNote method="PUT"/>,
                loader: fetchNoteById,
                action: submitData
            },
            {
                path: "/notes/new-note",
                element: <NewNote method="POST" />,
                action: submitData
            },
            {
                path: "/target",
                element: <Target />,
                loader: targetLoader
            }
        ]
    }
])

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
