import React, {ChangeEvent} from 'react';
import {InputLabel, Select, MenuItem, SelectChangeEvent, Box, FormControl, Button} from "@mui/material";

interface Props {
    width: number
    id: string
    labelId: string
    value: string
    onChange: (e: SelectChangeEvent) => void
    label: string
    array?: string[]
}

const SelectComponent: React.FC<Props> = ({value, label, labelId, width, onChange, id, array}) => {
    return (
        <Box sx={{width}}>
            <FormControl fullWidth>
                <InputLabel id={id}>Priority</InputLabel>
                <Select
                    labelId={labelId}
                    id={id}
                    value={value}
                    label={label}
                    onChange={onChange}
                >
                    {array?.map((item, index) => {
                        return <MenuItem key={index} value={String(item)}>{item}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectComponent;