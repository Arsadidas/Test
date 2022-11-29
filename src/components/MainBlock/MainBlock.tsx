import * as React from 'react';
import AllTodos from '../AllTodos/AllTodos';
import {ChangeEvent, useState} from 'react'
import Modal from '../Modal/Modal';
import ModalFunc from '../ModalFunc/ModalFunc';
// @ts-ignore
import ex from '../../assets/x.png'
import TextFieldInput from "../FormComponents/TextField/TextField";
import {useForm} from "react-hook-form";

export interface ITodo {
    id?: number
    title?: string
    desc?: string
    dataStart?: string | Date
    dataEnd?: string | Date
    priority?: string
    status?: string
}

interface ITodos {
    array: ITodo[]
}

const MainBlock: React.FC<ITodos> = ({array}) => {

    const [active, setActive] = useState<boolean>(false)



    return (
        <div className='mainBlock'>
            <div className='mainTitleBlock'>

                    {/*<TextFieldInput value={value}*/}
                    {/*                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}*/}
                    {/*                name={'search'}*/}
                    {/*                label={'search'} control={control} marginBottom={0} width={200}/>*/}

                <div className="mainTitle">
                    All To do's
                    <span onClick={() => setActive(true)} className="add">
                <img src={ex} alt=""/>
            </span>
                </div>
            </div>
            <AllTodos todos={array}/>
            <Modal active={active} setActive={setActive}>
                <ModalFunc setActive={setActive} array={array}/>
            </Modal>

            {array.length ? null : <div style={{textAlign: "center", color: "red"}}>The list is empty! </div>}
        </div>
    );
}

export default MainBlock;