import React from 'react'

function Suggestions (props) {

    if (props.results.suggestions !== undefined)
    var options = props.results.suggestions.map(r => (
      <li className="list-group-item mx-auto"
      style = {{'width': '50%'}}
        key={r.value}>
            <kbd style={{'color': 'red'}}>{r.value.slice(0, props.queryLenght)}</kbd>{r.value.slice(props.queryLenght)}
      </li>
    ))
    return <ul className="list-group" style={{'listStyleType': 'none'}}>{options}</ul>
}

export default Suggestions
