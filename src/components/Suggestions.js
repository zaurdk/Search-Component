import React from 'react'


const Suggestions = ({ results: { suggestions }, suggestionSubmit, queryLenght }) => (
  Boolean(suggestions) && (
    <ul className="list-group" style={{'listStyleType': 'none'}}>
      {
        suggestions.map(({ value }) => (
          <li className="list-group-item mx-auto"
              style = {{'width': '50%'}}
              key={value}
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