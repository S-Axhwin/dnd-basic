import { useState } from "react"

const useTask = () => {
    const [task, setTask] = useState([
        {
            id: 1,
            title: "sleep",
        },
        {
            id: 2,
            title: "code",
        },
        {
            id: 3,
            title: "walk",
        }
    ]);

    const [selTask, setSelTask] = useState([] as any);

    return { task, setTask, selTask, setSelTask };
}


export default useTask
