import React from 'react'
import Figure from './Figure'
import SyntaxHighlighter from 'react-syntax-highlighter';

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({node = {}}) => {
      const {code, language} = node
      if (!code) {
        return null
      }
      return <SyntaxHighlighter language={language || 'text'}>{node.code}</SyntaxHighlighter>
    },
    table: ({node = {}}) => {
      let {rows} = node
      const firstRow = rows.shift();

      return <table>
         <thead>
           <tr>
            {firstRow.cells.map((cell, index) => {
                  return <th key={index}>{cell}</th>
            })}
          </tr>
        </thead>
        <tbody>
        {rows.map((row, index) => {
          return <tr key={index}>
            {row.cells.map((cell, index) => {
              return <td key={index}>{cell}</td>
            })}
          </tr>
        })}
        </tbody>
      </table>
    }
  }
}

export default serializers
