import React, { useState,useRef } from "react";
import './Style.css'
export default function BodyPage(props) {
  const {answer,setAnswer,setPages} = props;
  const defAsk = [
    "ס",
    "ל",
    "י",
    "ח",
    "ה",
    " ",
    "מ",
    "ד",
    "ם",
    " ",
    "ע",
    "נ",
    "י",
    " ",
    "ל",
    "י",
    " ",
    "ע",
    "ל",
    " ",
    "ה",
    "ש",
    "א",
    "ל",
    "ה"
  ];
  const askRef = useRef(null);
  const [fakeAsk, setfakeAsk] = useState("");
  const [askCounter, setaskCounter] = useState(0);
  const [first, setfirst] = useState(false);
  function runAsk() {
     if(askCounter<defAsk.length){
        setfakeAsk(fakeAsk + defAsk[askCounter])
        setaskCounter(askCounter+1);}
        setfirst(true);
    }
  function cleare(){
    setaskCounter(0);
    setfakeAsk('');
    setfirst(false);
    askRef.current.value = null;
  }
  function answerAlgo(){
    let full = askRef.current.value;
    if(full.indexOf('.')!== -1){
      let newAns = full.slice(full.indexOf(".") + 1,full.lastIndexOf('.'))
      setAnswer(newAns)
      setPages(false)
    }else{ 
      setAnswer("לא מגיע לך תשובה");
      setPages(false)
    }
      
  }
  return (
    <div className="bodyPage">
        <div className="askRoolse">
          <h1>
            תחילה בקש את רשות 
            לשאול שאלה
          </h1>
        </div>
        <p>*רשום סליחה מדם עני לי על השאלה*</p>
        <div className="askBox">
          {first?<div className="askCover">
            <p>{fakeAsk}</p>
          </div>:null}
          <input
            ref={askRef}
            className="askInput"
            type="text"
            placeholder="בקשה לשאלה"
            onChange={runAsk}
          />
        </div>  
        <br />
        <button onClick={cleare}>מחק</button>
        <h1>:השאלה שלך</h1>
        <input type="text" placeholder="question" />
        <br />
        <br />
        <button onClick={answerAlgo}>שלח שאלה</button>
        <br />
        <br />
        <br />
    </div>
  );
}
