import React, {useState} from 'react';
import {Dayjs} from "dayjs";
import {SubmitHandler, useForm} from "react-hook-form";
import {SelectChangeEvent, Button} from "@mui/material";
import {ITodo} from "../../MainBlock/MainBlock";
import Date from "../Date/Date";
import TextFieldInput from "../TextField/TextField";
import SelectComponent from "../Select/Select";

interface Props {
    array: ITodo[]
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Form: React.FC<Props> = ({array, setActive}) => {

    const [title, setTitle] = useState<string>('')

    const [desc, setDesc] = useState<string>('')

    const [startDate, setStartDate] = useState<Dayjs | null>(null)

    const [endDate, setEndDate] = useState<Dayjs | null>(null)

    const [priority, setPriority] = useState<string>('');

    const [status, setStatus] = useState<string>('');

    const {reset, handleSubmit, control} = useForm({mode: "onChange"})


    const handleChangePriority = (event: SelectChangeEvent) => {
        setPriority(event.target.value);
    };

    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const onSubmit: SubmitHandler<ITodo> = (data) => {
        reset()
    }

    const add = () => {
        let start = startDate?.toISOString().substr(0, 10).split('-')
        let end = endDate?.toISOString().substr(0, 10).split('-')

        const currentStart = `${start![0]}-${start![1]}-${Number(start![2]) + 1}`
        const currentEnd = `${end![0]}-${end![1]}-${Number(end![2]) + 1}`

        const todo = {
            id: Number(Math.random()),
            title: title,
            desc: desc,
            dataStart: currentStart,
            dataEnd: currentEnd,
            priority: priority,
            status: status
        }

        array.push(todo)
        localStorage.setItem('data', JSON.stringify(array))
        setTitle('')
        setDesc('')
        setStartDate(null)
        setEndDate(null)
        setPriority('')
        setStatus('')
    }

    return (
        <div className='formBlock'>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <TextFieldInput onChange={(e) => setTitle(e.target.value)} value={title} name={'title'}
                                label={'Write Title'} control={control} marginBottom={3}
                                width={250}/>
                <TextFieldInput onChange={(e) => setDesc(e.target.value)} value={desc} name={'desc'}
                                label={'Write Description'} control={control}
                                marginBottom={3}
                                width={250}/>
                <Date label={'Write start day'} date={startDate} setDate={setStartDate}/>

                <Date label={'Write end day '} date={endDate} setDate={setEndDate}/>

                <SelectComponent width={250} id={'priority'} labelId={'priority'} value={priority}
                                 onChange={handleChangePriority} label={'priority'} array={['Свободный', 'Важно']}/>
                <SelectComponent width={250} id={'status'} labelId={'status'} value={status}
                                 onChange={handleChangeStatus} label={'status'}
                                 array={['В очереди', 'В процессе', 'Сделано']}/>
                <div style={{maxWidth: 250, margin: '40px auto 0'}}>

                    <Button sx={{width: 250, padding: 1, marginLeft: 32}} variant={'contained'}
                            onClick={() => {
                                add()
                                setActive(false)
                            }}>Add</Button>
                </div>
            </form>
        </div>
    );
};

export default Form;