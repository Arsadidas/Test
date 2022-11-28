import React from 'react'
// @ts-ignore
import ex from '../../assets/x.png'
import Form from "../FormComponents/Form/Form";
import {ITodo} from "../MainBlock/MainBlock";

interface Props {
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    array: ITodo[]
}

const ModalFunc: React.FC<Props> = ({setActive, array}) => {
    return (
        <div className='modalFuncMain'>
            <div className='modalFuncBlock'>
                <div className='modalTitle'>
                    Add new To do
                </div>
                <div className={'closeModal'} onClick={() => setActive(false)}>
                    <img src={ex} alt="x"/>
                </div>
                <Form array={array} setActive={setActive}/>
            </div>
        </div>
    );
};

export default ModalFunc;