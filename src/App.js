import './App.css';
import React, {useState} from 'react';
import useRenderCounter from './useRenderCounter';
import UseCall from './useCallbackTest';
import UseMem from './useMemoTest';
import axios from 'axios'

function App() {

  const [data, setData] = useState('')
  let count = useRenderCounter('h1')
  

  const getNewData = () => {
    axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=87cbeb5a6565932d7931e837401e2def'
    })
      .then(info => setData(info.data))
  }


  return (
    <div className="App">
      <h1>Without anything: {data.name}</h1>
      <h2>{count}</h2>
      <button onClick={() => getNewData()}>Update data</button>
      <UseCall />
      <UseMem />
    </div>
  );
}

export default App;
