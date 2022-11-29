import * as React from 'react';
import TextFieldInput from "../FormComponents/TextField/TextField";
import {ChangeEvent} from "react";
import {useForm} from "react-hook-form";

interface Props {
    value: string
    setValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const Header: React.FC<Props> = ({setValue, value}) => {

    const {control} = useForm()

    return (
        <header>
            <div className="header">
                <div className="headerTitle">
                    Uptrader Test Task
                </div>
                <div>
                    <TextFieldInput
                        value={value}
                        onChange={setValue}
                        name={'search'}
                        label={'search'} control={control}
                        width={200}
                        className={'headerInp'}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;