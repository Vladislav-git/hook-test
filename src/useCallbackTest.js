import React, {useState} from 'react';
import useRenderCounter from './useRenderCounter';

const UseCall = props => {

  const [info, setInfo] = useState([])
  let count = useRenderCounter('h3')

  const click = async() => {
    const data = await props.func()
    setInfo(data)
  }

  return (
    <div>
      <h3>With useCallback: {info.name ? info.name : null}</h3>
      <h2>{count}</h2>
      <button onClick={async() => await click()}>Update data</button>
    </div>
  );

}


export default UseCall