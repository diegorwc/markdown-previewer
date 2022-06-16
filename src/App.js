import React from 'react';
import logo from './logo.svg';
import { add } from './features/markdown-preview/previewSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { marked } from 'marked';

function App() {  
  const text_preview = useSelector(state => state.preview.text)
  const dispatch = useDispatch()
  function handleEditor(event) {
    // console.log(event.target.value)
    let text = event.target.value;
    dispatch(add(text))
  }
  function markdownConverter() {
    let mkdown = marked.parse(text_preview)
    return {__html: mkdown}
  }  
  return (
    <div className="App container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <textarea name="markdown_editor" id="editor" onChange={handleEditor} value={text_preview}></textarea>          
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>          
        <div id="preview" dangerouslySetInnerHTML={markdownConverter()} className='col-10'></div>
        <div className="col-1"></div>
      </div>      
    </div>
  );
}

export default App;
