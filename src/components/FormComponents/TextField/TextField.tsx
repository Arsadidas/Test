import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";
import {Controller} from 'react-hook-form';

interface FormInputProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string;
    label: string;
    control: any;
    marginBottom: number
    width: number
}

const TextFieldInput = (props: FormInputProps) => {
    const {name, control, label, marginBottom, width, onChange, value} = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({fieldState: {error}}) => (
                <TextField
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    label={label}
                    variant="outlined"
                    sx={{marginBottom, width, marginRight: 2}}
                />
            )}
        />
    );
};

export default TextFieldInput