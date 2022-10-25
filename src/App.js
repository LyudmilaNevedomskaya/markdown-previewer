import './App.css';
import React from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked'
import defaultMarkdown from './utils/defaultMarkdown';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let clean = DOMPurify.sanitize(event.target.value)
    this.setState({ value: clean });
  }

  getMarkdownText() {
    let rawMarkup = marked(this.state.value);
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="container">
        <Editor value={this.state.value} handleChange={this.handleChange} />

        <Previewer getMarkdownText={this.getMarkdownText()} />
      </div>
    );
  }
}

export default App;