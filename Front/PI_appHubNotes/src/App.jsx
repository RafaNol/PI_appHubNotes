import HomePage from "./pages/homePage/HomePage.jsx";
import NewNote, {loader as fetchNoteById, action as submitData} from "./pages/newNote/NewNote.jsx";
import NoteList, {loader as notesLoader} from "./pages/noteList/NoteList.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GoHome from "./components/GoHome/GoHome.jsx";

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
