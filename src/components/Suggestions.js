import React from 'react'

function Suggestions (props) {

    if (props.results.suggestions !== undefined)
    var options = props.results.suggestions.map(r => (
      <li className="list-group-item mx-auto"
          style = {{'width': '50%'}}
          key={r.value}
          onClick={props.suggestionSubmit(r.value)} >
            <span style={{'color': 'white', 'background': 'cadetblue'}}>{r.value.slice(0, props.queryLenght)}</span>{r.value.slice(props.queryLenght)}
      </li>
    ))
    return <ul className="list-group" style={{'listStyleType': 'none'}}>{options}</ul>
}

export default Suggestions
