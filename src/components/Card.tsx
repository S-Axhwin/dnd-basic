
import { useDrag } from 'react-dnd'

const Card = ({item}:any) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'task',
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className=' bg-pink-500 rounded-md' ref={dragRef}>
            {item.title}
            {isDragging && '😱'}
        </div>
    )
}

export default Card