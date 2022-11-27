import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import {data} from './data'
import {Route, Routes} from "react-router-dom";
import CorrectTodo from "./components/CorrectTodo";

function App() {

    const [state, setState] = useState([])

    useEffect(() => {
        const loadedTodos = localStorage.getItem("data")
            ? JSON.parse(localStorage.getItem("data")!)
            : [];
        setState(prevState => loadedTodos)
    }, []);

    return (
        <>

            <Header/>
            <Routes>
                <Route path='/' element={<MainBlock array={state}/>}/>
                <Route path='/todo/:id' element={<CorrectTodo state={state}/>}/>
            </Routes>

        </>
    );
}

export default App;