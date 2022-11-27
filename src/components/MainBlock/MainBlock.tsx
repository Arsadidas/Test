import * as React from 'react';
import AllTodos from '../AllTodos/AllTodos';
import {useState} from 'react'
import Modal from '../Modal/Modal';
import ModalFunc from '../ModalFunc/ModalFunc';
// @ts-ignore
import ex from '../../x.png'

export interface ITodo {
    id?: number
    title?: string
    desc?: string
    dataStart?: string | Date
    dataEnd?: string | Date
    priority?: string
    status?: string
}

export interface IStatus {
    id?: number
    status?: string
}

interface ITodos {
    array: ITodo[]
}

const MainBlock: React.FC<ITodos> = ({array}) => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div className='mainBlock'>
            <div className="mainTitle">
                All To do's
            </div>
            <span onClick={() => setActive(true)} className="add">
                <img src={ex} alt=""/>
            </span>
            <AllTodos todos={array}/>
            <Modal active={active} setActive={setActive}>
                <ModalFunc setActive={setActive} array={array} />
            </Modal>

            {array.length ? null : <div>The list is empty </div>}
        </div>
    );
}

export default MainBlock;