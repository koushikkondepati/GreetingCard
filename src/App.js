import React from 'react';




function App(){

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


    return(
        <div>
            <h1>Hello sir, <span style={cssStyle}> {greeting} </span> </h1>
        </div>
    );
}

export default App;