import './App.css';
import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { marked } from 'marked'
import DOMPurify from 'dompurify';
import defaultMarkdown from './utils/defaultMarkdown';

const markdownRenderer = new marked.Renderer();
markdownRenderer.link = function (href, title, text) {
  return `<a target='_blank' href="${href}">${text}</a>`;
};
marked.setOptions({ breaks: true });
// remove the most common zerowidth characters from the start of the file 
marked.parse(
  defaultMarkdown.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
);

const App = () => {

  const [content, setContent] = React.useState(defaultMarkdown);
  const [textareaHeight, setTextareaHeight] = React.useState({ height: '250px' });
  const [previewHeight, setPreviewHeight] = React.useState({})

  const handleChange = (event) => {
    let clean = DOMPurify.sanitize(event.target.value);
    clean = clean.replace(/&gt;+/g, '>');
    setContent(clean);
  }

  const resizeTextarea = (e) => {
    const areaHeight = document.getElementById('editor').scrollHeight + 'px';
    if (textareaHeight.height !== areaHeight) {
      setTextareaHeight({ height: areaHeight })
    } else {
      setTextareaHeight({ height: '250px' })
    }
  }

  const resizePreview = () => {
    if (!previewHeight.height) {
      setPreviewHeight({ height: '250px', overflowY: 'scroll' })
    } else {
      setPreviewHeight({})
    }
  }

  return (
    <div className="container">
      <Editor
        style={textareaHeight}
        value={content}
        handleChange={handleChange}
        onClick={resizeTextarea}
      />
      <Previewer
        style={previewHeight}
        onClick={resizePreview}
        dangerouslySetInnerHTML={{ __html: marked(content, { renderer: markdownRenderer }) }}
      />
    </div>
  );
}
export default App;

