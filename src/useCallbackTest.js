import React, {useState, useCallback, useMemo, useEffect} from 'react';
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
    setInfo(data.data)
  }

  const testCall = useCallback(async() =>
    await getNewData(),
    []
  )

  useEffect(async() => {
      await testCall
    },
    []
  )

  const click = async() => {
    await testCall

  }

  console.log(info)

  return (
    <div>
      <h3>With useCallback: {info.name}</h3>
      <h2>{count}</h2>
      <button onClick={async() => await click()}>Update data</button>
    </div>
  );

}


export default UseCall