import React, { useState } from 'react'

const Lists = ({item}) => {
  
  const [selected,setSelected] = useState(null)
  const handleclick = (getid) => {
      setSelected(getid === selected ? null : getid)
  }
  
  return (
    <div>
    <div onClick={()=>handleclick(item.id)}>
    <h2>{item.question}</h2>
    <span>➕</span>
    </div>
      <div>
      {
        selected === item.id && <p>{item.answer}</p> 
      }
        
      </div>
    </div>
  )
}

export default Lists