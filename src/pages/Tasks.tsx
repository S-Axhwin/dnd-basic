import { useDrop } from "react-dnd";
import Card from "../components/Card"
import useTask from "./useTask"

const Tasks = () => {
  const { setTask, setSelTask, selTask, task } = useTask();


  const [, drop]:any = useDrop(() => {
    console.log("dropped");
    return {
        accept: "task",
        drop: (item:any) => {
            setSelTask((cur:any) => ([...cur, item]))
            setTask((cur:any) => (cur.filter((item1:any) => (item.id!=item1.id))))
        },
        collect: (monitor:any)=> ({
            isOver: !!monitor.isOver()
        }),
    }
  },);
  const handleDropper = (item:any) => {
    console.log(item);
  }

  return (
    <div className="flex gap-4">
    <div className="flex p-3 gap-3 bg-pink-800 flex-col w-40">
        <div className="text-white">
        Tasks
        </div>
      {task.map((item):any => {
        return (
                <Card key={item.id} item={item}  />
        )
      })}
    </div>
    <div className="flex p-3 gap-3 bg-blue-400 flex-col w-40" ref={drop}>
        <div className="text-white">Process</div>
        {selTask.map((item:any) => {
            return <div key={item.id}  className="text-white text-center  bg-blue-700 rounded-md">{item.title}</div>
        })}
    </div>
    </div>
  )
}

export default Tasks
