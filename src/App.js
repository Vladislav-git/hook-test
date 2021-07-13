import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback, useMemo, useEffect} from 'react';
import useRenderCounter from './useRenderCounter';
import UseCall from './useCallbackTest';
import axios from 'axios'

function App() {

  const [data, setData] = useState('')
  let count = useRenderCounter('h1')
  

  const getNewData = () => {
    axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Minsk&appid=87cbeb5a6565932d7931e837401e2def'
    })
      .then(info => setData(info.data))
  }

  

  useEffect(() => {
    getNewData()
  }, [])


  return (
    <div className="App">
      <h1>Without anything: {data.name}</h1>
      <h2>{count}</h2>
      <button onClick={() => getNewData()}>Update data</button>
      <UseCall />
    </div>
  );
}

export default App;
