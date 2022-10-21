import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faFire } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div className="container">
      <div className='editor-container'>
        <div className='editor-header'>
          <p><FontAwesomeIcon icon={faFire} /> Editor</p>
          <p><FontAwesomeIcon icon={faMaximize} /></p>
        </div>
        <textarea id='editor' rows="4" cols="60"></textarea>
      </div>

      <div className='preview-container'>
        <div className='preview-header'>
        <p><FontAwesomeIcon icon={faFire} /> Preview</p>
          <p><FontAwesomeIcon icon={faMaximize} /></p>
        </div>
        <div id='preview'></div>
      </div>
    </div>
  );
}
