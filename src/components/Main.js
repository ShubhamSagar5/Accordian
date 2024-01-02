import data from "../utillis/data";
import {useState} from 'react'

const Main = () => {
  
    const [selected,setSelected] = useState(null)

    const handleClick = (getId) => {
        setSelected(getId === selected ? null : getId)
    }
  
    return (
     <div>{
        data.map(item => <div key={item.id} onClick={() => handleClick(item.id)}><h2>{item.question}</h2>
        <span >+</span>
        <p>{selected === item.id ? <p>{item.answer}</p>: null}</p>
        </div>
        )
     }
  </div>
  )
 
  
};

export default Main;
