import { useEffect, useState } from 'react'
import axios from "axios"
import "./App.css"
function App() {

  const [data, setData] = useState([])
  const [next, setnext] = useState(0)

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json")
    .then(data=>setData(data.data.kural[next]))
    
  },[next])
console.log(data);
  return (
  
    <div className='body'>

      <div className='kural'>

        <div className='number'> குறள் {data.Number}  </div>

       <div  className='sec'>
          <div className='head'>திருக்குறள்</div>
          <div> {data.Line1} </div>
          <div> {data.Line2} </div>
       </div>

        <div className='sec'>
          <div className='head'>பொருள்</div>
          <p>{data.mk}</p>
        </div>

        <div className='sec'>
          <div className='head'>English</div>
          <p>{data.Translation}</p>
        </div>

        <div className='sec'>
          <div className='head'>Explanation</div>
          <p>{data.explanation}</p>
        </div>

        <div className='btn'>
          <button onClick={()=>(setnext((pre)=>pre-1))}> Previos </button>
          <button onClick={()=>(setnext((pre)=>pre+1))}> Next </button>
        </div>

      </div>
      
    </div>
  )
}

export default App
