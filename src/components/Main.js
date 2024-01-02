import dataInfo from "../utillis/data";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState(dataInfo);

  const [enableMulti,setEnableMul] = useState(false)

  const [selected,setSelected] = useState()

  const [multipleSel,setMultipleSelc] = useState([])
  const handleSingleSelc = (getId) => {
    setSelected(getId)
  }

  const handleMulSelc = (getId) => {
    const copyMul = [...multipleSel]
    const findIndexOfCurrId = copyMul.indexOf(getId)

    if(findIndexOfCurrId === -1){
        copyMul.push(getId)
    }else{
        copyMul.splice(findIndexOfCurrId,1)
    }

    setMultipleSelc(copyMul)
  }
console.log(multipleSel)

  return (
    <div>
    <button onClick={() => setEnableMul(!enableMulti)}>Enable Multiple Selection</button>
      {data.map((item) => (
        <div>
        <div onClick={ enableMulti ? () => handleMulSelc(item.id) : ()=>handleSingleSelc(item.id)}>
        <h2>{item.question}</h2>
        <span>+</span>
        </div>
        <div>

        </div>
         {
            enableMulti ? multipleSel.indexOf(item.id) !== -1 && <div>{item.answer}</div>:
            selected === item.id ? (item.answer) : (<div></div>)
            }
        </div>
      ))}
    </div>
  );
};

export default Main;
