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

  const [content, setContent] = React.useState(defaultMarkdown)

  const handleChange = (event) => {
    let clean = DOMPurify.sanitize(event.target.value);
    clean = clean.replace(/&gt;+/g, '>');
    setContent(clean);
  }

  return (
    <div className="container">
      <Editor value={content} handleChange={handleChange} />
      <Previewer dangerouslySetInnerHTML={{ __html: marked(content, { renderer: markdownRenderer }) }} />
    </div>
  );
}
export default App;