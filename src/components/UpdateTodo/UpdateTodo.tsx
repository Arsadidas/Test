import React, {ChangeEvent, useState} from 'react';
import {useParams} from "react-router-dom";
import {ITodo} from "../MainBlock/MainBlock";
import TextFieldInput from "../FormComponents/TextField/TextField";
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";

interface P {
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    state: ITodo[]
}

const UpdateTodo: React.FC<P> = ({setActive, state}) => {

    const {id} = useParams()

    const [title, setTitle] = useState('')

    const {control} = useForm()

    const actualTodo = state.find((item) => item.id === Number(id))

    const change = () => {
        actualTodo!.title = title
        setTitle('')
        localStorage.setItem('data', JSON.stringify(state))
    }

    return (
        <div className='updBlock'>
            <div className={'updM'}>
                <TextFieldInput value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                name={'upd'} label={"Change To Do"} control={control} marginBottom={3} width={250}/>
                <Button onClick={() => {
                    change()
                    setActive(false)
                }} variant={"outlined"}>Change</Button>
                <div onClick={() => setActive(false)} className={'close'}>X</div>
            </div>
        </div>
    );
};

export default UpdateTodo;