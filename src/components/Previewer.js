import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faFire } from '@fortawesome/free-solid-svg-icons';

export default function Previewer(props) {
  return (
    <div className='preview-container'>
      <div className='preview-header'>
        <p><FontAwesomeIcon icon={faFire} /> Preview</p>
        <p><FontAwesomeIcon
          className='resize'
          onClick={props.onClick}
          icon={faMaximize} /></p>
      </div>
      <div id='preview'
        style={props.style}
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}>
      </div>
    </div>
  )
}