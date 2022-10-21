import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className='editor-container'>
        <div className='editor-header'>
          <p>Editor</p>
          <p>X</p>
        </div>
        <textarea id='editor' rows="4" cols="60"></textarea>
      </div>
      
      <div className='preview-container'>
        <div className='preview-header'>
        <p>Preview</p>
          <p>X</p>
        </div>
        <div id='preview'></div>
      </div>
    </div>
  );
}
