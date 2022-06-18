import React from 'react'

export default function Answer(props) {
  const {answer,setPages} = props;
  function goBack(){
    setPages(true)
  }
  return (
    <div className='answerPage'>
      <h1>{answer}</h1>
      <button onClick={goBack}>שאלה נוספת</button>
    </div>
  )
}
