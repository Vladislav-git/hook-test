import React, {useState, useCallback} from 'react';
import useRenderCounter from './useRenderCounter';
import axios from 'axios'

const UseCall = () => {

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

  const testCall = useCallback(() =>
    getNewData(),
    []
  )

  const click = () => {
    testCall()
  }

  return (
    <div>
      <h3>With useCallback: {info.name}</h3>
      <h2>{count}</h2>
      <button onClick={() => click()}>Update data</button>
    </div>
  );

}


export default UseCall