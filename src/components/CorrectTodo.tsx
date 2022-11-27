import React from 'react';
import {ITodo} from "./MainBlock/MainBlock";
import {useParams} from "react-router-dom";
import moment from 'moment';
interface P {
    state: ITodo[]
}

const CorrectTodo: React.FC<P> = ({state}) => {
    const {id} = useParams()
    return (
        <div>
            {state.map((item) => {
                if(Number(id) === item.id){
                    return (
                        <div>
                            <div>{item.title}</div>
                            <span>c</span>{moment(item.dataStart).format("MMM Do YY")}<span>по</span> {moment(item.dataEnd).format("MMM Do YY")}
                        </div>
                    )

                }
            })}
        </div>
    );
};

export default CorrectTodo;