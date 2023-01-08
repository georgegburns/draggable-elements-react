import React, { useState, useRef } from "react";

function DragNDrop({data}){
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log(list)
        console.log('Drag Starting', params);
        e.dataTransfer.effectAllowed = "copyMove";
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        },0);
    }

    const handleDragEnter = (e, params) => {
        console.log('Entering Drag', params);
        const currentItem = dragItem.current;
        e.dataTransfer.effectAllowed = "copy";
        if (e.target !== dragNode.current){
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                console.log(newList[params], newList[currentItem])
                newList.splice(params,0, newList.splice(currentItem,1)[0]);
                dragItem.current = params;
                return newList
            }
        )};
    }

    const handleDragEnd = (e) => {
        console.log('Ending Drag');
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current
        if (currentItem.index === params){
            return 'current item'
        }
        return 'item'
    }

    const editMode = () => {
        console.log("working")
    }


    return (

    <>
    <table className='drag-n-drop'>
        <thead className='headings'>
            <td >Title</td>
            <td >Description</td>
            <td >Due Date</td>
            <td >Completed</td>
        </thead>
        {list.map((tasks, index) => (
                <tr
                draggable
                onDragStart={(e) => {handleDragStart(e, index)}}
                onDragEnter={dragging?(e) => (handleDragEnter(e, index)):null}
                key={tasks.title}
                className={dragging? getStyles(index):'item'}>
                <td className="item-d">{tasks.title}</td>
                <td className="item-d">{tasks.task}</td>
                <td className="item-d">{tasks.due}</td>
                <td className="item-d">{tasks.completed}</td>
                </tr>
            ))}
    </table>
    </>
    )
}

export default DragNDrop;
