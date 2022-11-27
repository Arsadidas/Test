import React, {ChangeEvent, useRef, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {InputLabel, Select, TextField, MenuItem, SelectChangeEvent, Box, FormControl, Button} from "@mui/material";
import Date from "../Date/Date";
import {Dayjs} from "dayjs";
import TextFieldInput from "../TextField/TextField";
import {IStatus, ITodo} from "../../MainBlock/MainBlock";

interface Props {
    array: ITodo[]
}

const Form: React.FC<Props> = ({array}) => {

    const [title, setTitle] = useState<string>('')

    const [desc, setDesc] = useState<string>('')

    const [startDate, setStartDate] = useState<Dayjs | null>(null)

    const [endDate, setEndDate] = useState<Dayjs | null>(null)

    const [priority, setPriority] = useState<string>('');

    const [status, setStatus] = useState<string>('');

    const {reset, register, handleSubmit, formState: {errors}, control} = useForm({mode: "onChange"})

    const ref = useRef<HTMLInputElement>(null)

    const handleChangePriority = (event: SelectChangeEvent) => {
        setPriority(event.target.value);
    };

    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const onSubmit: SubmitHandler<ITodo> = (data) => {
        reset()
    }

    const add = (data?: ITodo) => {
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
                <Date date={startDate} setDate={setStartDate}/>

                <Date date={endDate} setDate={setEndDate}/>

                <Box sx={{width: 250, marginTop: 3}}>
                    <FormControl fullWidth>
                        <InputLabel id="priority">Priority</InputLabel>
                        <Select
                            labelId="priorityId"
                            id="priority"
                            value={priority}
                            label="priority"
                            onChange={handleChangePriority}
                        >
                            <MenuItem value={'Свободный'}>Свободный</MenuItem>
                            <MenuItem value={'Важно'}>Важно</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{width: 250, marginTop: 3}}>
                    <FormControl fullWidth>
                        <InputLabel id="status">Status</InputLabel>
                        <Select
                            labelId="statusId"
                            id="status"
                            value={status}
                            label="status"
                            onChange={handleChangeStatus}
                        >
                            <MenuItem value={'В очереди'}>В очереди</MenuItem>
                            <MenuItem value={'В процессе'}>В процессе</MenuItem>
                            <MenuItem value={'Сделано'}>Сделано</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Button onClick={() => add()}>Add</Button>
            </form>
        </div>
    );
};

export default Form;