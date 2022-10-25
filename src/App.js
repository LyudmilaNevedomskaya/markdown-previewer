import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faFire } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked'
import defaultMarkdown from './utils/defaultMarkdown';
import Editor from './components/Editor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    let clean = DOMPurify.sanitize(event.target.value)
    this.setState({ value: clean });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  getMarkdownText() {
    var rawMarkup = marked(this.state.value);
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="container">
        <Editor value={this.state.value} handleChange={this.handleChange}/>

        <div className='preview-container'>
          <div className='preview-header'>
            <p><FontAwesomeIcon icon={faFire} /> Preview</p>
            <p><FontAwesomeIcon icon={faMaximize} /></p>
          </div>
          <div id='preview'
            dangerouslySetInnerHTML={this.getMarkdownText()}>

          </div>
        </div>
      </div>
    );
  }
}

export default App;