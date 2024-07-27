import Tasks from "./pages/Tasks"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
        <Tasks />
    </DndProvider>
  )
}

export default App
