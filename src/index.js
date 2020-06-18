// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom';



// Create a React component
const App = function()  {
    const buttonText = {text: "click me"}
    const style = {backgroundColor:'blue', color:'white'}
    return(
        <div>
        <label className="label" htmlFor="name">
            Enter name:
        </label>
        <input id="name" type="text"/> {/*You can also use double quote instead of single quote*/}
        <button style = {style}>
            {buttonText.text}
        </button>
    </div>
    );
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);