import React, {useState} from 'react';
import useRenderCounter from './useRenderCounter';

const UseMem = props => {

  const [info, setInfo] = useState('')
  let count = useRenderCounter('h3')

  const click = async() => {
    setInfo(await props.value)
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