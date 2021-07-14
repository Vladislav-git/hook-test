import './App.css';
import React, {useState, useCallback, useMemo} from 'react';
import useRenderCounter from './useRenderCounter';
import UseCall from './useCallbackTest';
import UseMem from './useMemoTest';
import axios from 'axios'

function App() {

  const [info, setInfo] = useState('')
  let count = useRenderCounter('h1')
  

  const getNewData = async() => {
    const data = await axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=87cbeb5a6565932d7931e837401e2def'
    })
    return data.data
  }

  const testCall = useCallback(async() =>
    await getNewData(),
    []
  )

  const memoizedValue = useMemo(async() => 
  await getNewData(),
    []
  );


  return (
    <div className="App">
      <h1>Without anything: {info.name}</h1>
      <h2>{count}</h2>
      <button onClick={async() => setInfo(await getNewData())}>Update data</button>
      <UseCall func={testCall} />
      <UseMem value={memoizedValue} />
    </div>
  );
}

export default App;
