import React, {useState, useMemo} from 'react';
import useRenderCounter from './useRenderCounter';
import axios from 'axios'

const UseMem = () => {

  const [info, setInfo] = useState([])
  let count = useRenderCounter('h3')


  const getNewData = async() => {
    const data = await axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=87cbeb5a6565932d7931e837401e2def'
    })
    console.log(data)
    setInfo(data.data)
  }

  const memoizedValue = useMemo(() => 
    getNewData(),
    []
  );

  const click = async() => {
    await getNewData()
  }

  return (
    <div>
      <h3>With useMem: {info.name}</h3>
      <h2>{count}</h2>
      <button onClick={async() => await click()}>Update data</button>
    </div>
  );

}


export default UseMem