import styles from './styles/notebook.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';

export default function Notebook({ postData }) {

  return (
    postData.notebook.cells.map(function (cell) {

      switch (cell.cell_type) {
        case "markdown":
          return (
            <div className={styles.Cell}>
              <div className={styles.Markdown}>
                <ReactMarkdown children={cell.source.join('')} />
              </div>
            </div>
          )

        case "code":
          return (
            <div className={styles.Cell}>
              <div className={styles.Code}>
                <div className={styles.Source}>
                  <SyntaxHighlighter language='python'>
                    {cell.source.join('')}
                  </SyntaxHighlighter>
                </div>
                <div className={styles.Output}>
                  {addNewLines(cell.outputs[0].text)}
                  {addNewLines(cell.outputs[0].data)}
                </div>
              </div>
            </div>
          )

        default:
          break;
      }
    })
  )
}

// Adds line breaks since \n is ignored by HTML
function addNewLines(text) {
  if (text != null) {
    // Convert object to array to bypass using JSON 'text/plain' invalid name
    if (typeof text === 'object' && !Array.isArray(text)) {
      text = Object.values(text)
    }
    if (Array.isArray(text)) {
      return (
        text.map(line => <div>{line}</div>)
      )
    }
  }
}
