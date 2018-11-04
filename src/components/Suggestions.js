import React from 'react'

var keyId = 0;
const Suggestions = ({ results: { suggestions }, suggestionSubmit, queryLenght }) => (
  Boolean(suggestions) && (
    <ul className="list-group" style={{'listStyleType': 'none', 'cursor': 'pointer'}}>
      {
        suggestions.map(({ value }) => (
          <li className="list-group-item mx-auto"
              style = {{'width': '50%'}}
              key={keyId++}
              onClick={() => suggestionSubmit(value)}>
                <span style={{'color': 'white', 'background': 'cadetblue'}}>
                  {value.slice(0, queryLenght)}
                </span>
                {value.slice(queryLenght)}
          </li>
        ))
      }
    </ul>
  )
)

export default Suggestions