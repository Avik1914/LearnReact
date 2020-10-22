//import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

//creating a react component
const App1=()=>{
    const buttonText='Click Me!';
    return (
    <div>
        <label className="label" htmlFor="name">
            Enter name:
        </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: "blue",color:'white'}}>{buttonText}</button>
    </div>    
    );
}


//Take react component and show it on the screen
ReactDOM.render(
    <App1 />,
    document.querySelector('#root')
);