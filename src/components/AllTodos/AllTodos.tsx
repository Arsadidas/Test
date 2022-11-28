import React from 'react'
import {ITodo} from '../MainBlock/MainBlock'
import {Link} from "react-router-dom";

interface ITodos {
    todos: ITodo[]
}

const AllTodos: React.FC<ITodos> = ({todos}) => {

    return (
        <div className="mainContent">
            <div className="queue">
                <div className="queueTitle">
                    Queue
                </div>
                <div className="todoBody">
                    {todos.map((item, index) => {
                        if (item.status === 'В очереди') {
                            return (
                                <Link key={item.id} to={`/todo/${item.id}`}>
                                    <div
                                        style={{backgroundColor: item.priority === 'Важно' ? 'red' : 'antiquewhite'}}
                                        key={item.id} className="todoBodyText">
                                        {item.title}
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
                            return (
                                <Link key={item.id} to={`/todo/${item.id}`}>
                                    <div
                                        style={{backgroundColor: item.priority === 'Важно' ? 'red' : 'antiquewhite'}}
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
                        if (item.status === 'Сделано') {
                            return (
                                <Link key={item.id} to={`/todo/${item.id}`}>
                                    <div style={{backgroundColor: item.priority === 'Важно' ? 'red' : 'antiquewhite'}}
                                         className="todoBodyText"
                                    >
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