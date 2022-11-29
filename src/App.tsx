import React, {ChangeEvent, useEffect, useState} from 'react';
import Header from './components/Header/Header';
import MainBlock, {ITodo} from './components/MainBlock/MainBlock';
import {Route, Routes} from "react-router-dom";
import CurrentTodo from "./components/CurrentTodo/CurrentTodo";
import {useForm} from "react-hook-form";

function App() {

    const [state, setState] = useState([])

    const [value, setValue] = useState('')



    useEffect(() => {
        const loadedTodos = localStorage.getItem("data")
            ? JSON.parse(localStorage.getItem("data")!)
            : [];
        setState(prevState => loadedTodos)
    }, []);

    const filteredArray = state.filter((item: ITodo) => {
        return item?.title!.toLowerCase().includes(value.toLowerCase())

    })

    return (
        <>
            <Header value={value}
                    setValue={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
            <Routes>
                <Route path='/' element={<MainBlock array={filteredArray}/>}/>
                <Route path='/todo/:id' element={
                    <CurrentTodo state={state}/>}/>
            </Routes>

        </>
    );
}

export default App;