import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faFire } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {marked} from 'marked'
const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

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
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('An essay was submitted: ' + this.state.value);
  event.preventDefault();
}

getMarkdownText() {
  var rawMarkup = marked(this.state.value, {sanitize: true});
  return { __html: rawMarkup };
}

  render() {
    return (
      <div className="container">
        <div className='editor-container'>
          <div className='editor-header'>
            <p><FontAwesomeIcon icon={faFire} /> Editor</p>
            <p><FontAwesomeIcon icon={faMaximize} /></p>
          </div>
          <textarea id='editor'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter Your Markdown Here..."
            rows="4" cols="60">
          </textarea>

        </div>

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