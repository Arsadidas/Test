import React, {useState} from 'react';
import {ITodo} from "../MainBlock/MainBlock";
import {useParams} from "react-router-dom";
import moment from 'moment';
import Modal from "../Modal/Modal";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
// @ts-ignore
import upd from "../../assets/upd.png";

interface P {
    state: ITodo[]
}

const CurrentTodo: React.FC<P> = ({state}) => {

    const [active, setActive] = useState(false)

    const {id} = useParams()

    const actualTodo = state.find((item) => item.id === Number(id))

    const todoDate = new Date(actualTodo?.dataEnd!).toISOString().slice(0, 10)

    const actualDate = moment().toISOString().slice(0, 10)

    return (
        <div className={'currBlock'}>
            <div className={'curr'}>
                <div>
                    <span>
                        <b>Title:</b>
                    </span>
                    <span>{actualTodo?.title}</span>
                </div>
                <div>
                    <b>Your description:</b>{actualTodo?.desc}
                </div>
                <div>
                    <b>Создан:</b>
                    {moment(actualTodo?.dataStart).format("MMM Do YY")}
                </div>
                <div>
                    <b>Дата окончания:</b>
                    {moment(actualTodo?.dataEnd).format("MMM D YY")}
                </div>
                <div onClick={() => setActive(true)}>
                    <span>Редактировать:</span><img className='upd' src={upd}
                                                    alt="upd"/>
                </div>
                <Modal active={active} setActive={setActive}>
                    <UpdateTodo setActive={setActive} state={state}/>
                </Modal>
                <div>{actualDate > todoDate ?
                    <span style={{color: "red"}}><b>К сожалению срок выполнения истек</b></span> :
                    <span style={{color: "green"}}>Активный</span>}</div>
            </div>
        </div>
    );
};

export default CurrentTodo;