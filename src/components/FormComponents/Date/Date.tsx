import * as React from 'react';
import {Dayjs} from 'dayjs'
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {DatePicker} from '@mui/x-date-pickers';

interface Props {
    date: Dayjs | null
    setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>
    label: string
}

const Date: React.FC<Props> = ({setDate, date, label}) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                className='date'
                label={label}
                value={date}
                onChange={(newValue: any) => {
                    setDate(newValue);
                }}
                renderInput={(params: any) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default Date;