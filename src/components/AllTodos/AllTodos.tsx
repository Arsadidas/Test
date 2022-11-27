import React, {useState} from 'react'
import {ITodo} from '../MainBlock/MainBlock'
import {Link} from "react-router-dom";


interface ITodos {
    todos: ITodo[]
}

const AllTodos: React.FC<ITodos> = ({todos}) => {

    const [currentBoard, setCurrentBoard] = useState<null | string>(null)

    const [currentItem, setCurrentItem] = useState(null)

    function dragOverHandler(e: any,) {
        e.preventDefault()
        if (e.target.className == 'todoBodyText') {
            e.target.style.boxShadow = '0 4px 3px grey'
        }
    }

    function dragLeaveHandler(e: any) {
        e.target.style.boxShadow = 'none'

    }

    function dragStartHandler(e: any, boardName: string, item: any) {
        setCurrentBoard(boardName)
        setCurrentItem(item)
    }


    // получить индекс в массиве у текущей карточки которую мы держим
    function dragEndHandler(e: any) {
        e.target.style.boxShadow = 'none'

    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, board: any, todo: any, todos: ITodo[]) {
        e.preventDefault()
        const curentIndex = todos.indexOf(currentItem!)
    }

    return (
        <div className="mainContent">

            <div className="queue">
                <div className="queueTitle">
                    Queue
                </div>
                <div className="todoBody">
                    {todos.map((item, index) => {
                        if (item.status === 'В очереди') {
                            let board = item.status
                            return (
                                <Link to={`/todo/${item.id}`}>
                                    <div

                                        key={item.id} className="todoBodyText">
                                        <span>{index + 1}</span> {item.title} <br/>
                                    </div>
                                </Link>
                            )
                        }
                        return null
                    })}
                </div>
            </div>
            <div className="development">
                <div className="developmentTitle">
                    Development
                </div>
                <div className="todoBody">
                    {todos.map((item, index) => {
                        if (item.status === 'В процессе') {
                            let board = item.status
                            return (
                                <Link to={`/todo/${item.id}`}>
                                    <div

                                        className="todoBodyText">
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        }
                        return null
                    })}
                </div>
            </div>
            <div className="done">
                <div className="doneTitle">
                    Done
                </div>
                <div className="todoBody">
                    {todos.map((item, index) => {
                        let board = item.status
                        if (item.status === 'Сделано') {
                            return (
                                <Link to={`/todo/${item.id}`}>

                                    <div key={item.id} draggable={true}
                                         onDragOver={(e) => dragOverHandler(e)}
                                         onDragLeave={(e) => dragLeaveHandler(e)}
                                         onDragStart={(e) => dragStartHandler(e, board!, item)}
                                         onDragEnd={(e) => dragEndHandler(e)}
                                         onDrop={(e) => dropHandler(e, board, item, todos)} className="todoBodyText">
                                        {item.title} <br/>
                                    </div>
                                </Link>
                            )
                        }
                        return null
                    })}
                        </div>
                        </div>
                        </div>
                        )
                    }

                    export default AllTodos