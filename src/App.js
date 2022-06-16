import React from 'react';
import logo from './logo.svg';
import { add } from './features/markdown-preview/previewSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const text_preview = useSelector(state => state.preview.text)
  const dispatch = useDispatch()
  function handleEditor(event) {
    // console.log(event.target.value)
    let text = event.target.value;
    dispatch(add(text))
  }

  return (
    <div className="App container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <textarea name="markdown_editor" id="editor" onChange={handleEditor}></textarea>
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>  
        <div id="preview" className='col-10'>
          <p>This is the preview</p>
          <p>{text_preview}</p>
          <p></p>
        </div>
        <div className="col-1"></div>
      </div>            
    </div>
  );
}

export default App;
