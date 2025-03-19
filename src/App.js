import './App.css';
import {Button} from "./Button/Button";
import { createContext } from 'react';

function App() {
    return (
        <div className="App">
            <h1 className="header" style={{backgroundColor: "beige"}}>Header level1</h1>
            <div>Test Div</div>
            <Button/>
        </div>
    );
}



export default App;