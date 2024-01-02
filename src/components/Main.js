import dataInfo from "../utillis/data";
import { useState } from "react";
import Lists from "./Lists";

const Main = () => {
  const [data, setData] = useState(dataInfo);
  const [selected, setSelected] = useState(null);

  return <div>
    {
        data && data.length > 0 ? <div>
            {
                data.map(item => <Lists item={item}/>)
            }
        </div> : null
    }
  </div>;
};

export default Main;
