import Tasks from "./pages/Tasks"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
    <DndProvider backend={HTML5Backend}>
        <Tasks />
    </DndProvider>
    </div>
  )
}

export default App
