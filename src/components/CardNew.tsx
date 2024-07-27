import { useDrag } from 'react-dnd'

const CardNew = ({item}:any) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'task',
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className=' bg-blue-500 rounded-md text-center' ref={dragRef}>
            {item?.title}
            {isDragging && '😱'}
        </div>
    )
}
export default CardNew
