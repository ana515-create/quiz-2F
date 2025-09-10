import React from 'react'
import './Quiz.css'

const Quiz = () => {
    return(
     <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Qual dispositivo é necessário para conexão com internet?</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
     </div>
    )
}

export default Quiz