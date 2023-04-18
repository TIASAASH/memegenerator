import React, { useState , createRef} from 'react'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Text from '../Components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';
const EditPage = () => {
    const [params]=useSearchParams();
    const [count,setCount]=useState(0);

    const memeRef=createRef();
    console.log('params',params.get('url'));
    const addText = () => {
    setCount(count+1);
    }
  return (
    <div style={{margin:'30px'}}>
    <div style={{width:'600px',border: '1px solid '}} ref={memeRef} className='meme mt-5 mb-5'>
      <img src={params.get('url')} alt="" width='250px' />
      {Array(count)
      .fill(0)
      .map((e) => (
        <Text/>
    ))}
    </div>
    <Button style={{marginTop:'30px',marginRight:'15px'}} onClick={addText}>Add Text</Button>
    <Button style={{marginTop:'30px'}} variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)} >Save</Button>
    </div>
  )
}

export default EditPage;
