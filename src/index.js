import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greeting = "";
let cssStyle = { };
let curDate = new Date();
let curTime = curDate.getHours();
if((curTime>=1) && (curTime<12)){
    greeting = "Good Morning"; 
    cssStyle.color = "Green";
} else if((curTime >=12) && (curTime<17)){
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
} else if((curTime>=17) && (curTime<20)){
    greeting = "Good Evening";
    cssStyle.color = "Blue";
} else{
    greeting = "Good Night";
    cssStyle.color = "Black";
}


ReactDOM.render(<div>
                    <h1>Hello sir, <span style={cssStyle}> {greeting} </span> </h1>
                </div>,
                document.getElementById('root')
               );