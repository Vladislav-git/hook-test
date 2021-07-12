import React, {useState, useCallback, useMemo, useEffect} from 'react';
import useRenderCounter from './useRenderCounter';
import axios from 'axios'

const UseCall = () => {

  const [data, setData] = useState('')
  let count = useRenderCounter('h1')

  const memoizedCallback = useCallback(
    () => {
      ;
    },
    [],
  );
  

  const getNewData = () => {
    axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=87cbeb5a6565932d7931e837401e2def'
    })
      .then(info => setData(info.data))
  }

  

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=87cbeb5a6565932d7931e837401e2def'
    })
      .then(info => setData(info.data))
  }, [])

  console.log(data)

  return (
    <div className="App">
      <h1>Without anything: {data.name}</h1>
      <h2>{count}</h2>
      <button onClick={() => getNewData()}>Update data</button>
      <UseCall />
    </div>
  );

}


export default UseCall