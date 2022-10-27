import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faFire } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <p><FontAwesomeIcon icon={faFire} /> Editor</p>
        <p><FontAwesomeIcon
          className='resize'
          onClick={props.onClick}
          icon={faMaximize} /></p>
      </div>
      <textarea id='editor'
        style={props.style}
        value={props.value}
        onChange={props.handleChange}
        placeholder="Enter Your Markdown Here..."
      >
      </textarea>
    </div>
  )
}