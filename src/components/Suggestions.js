import React from 'react'

function Suggestions (props) {
    if (props.results.suggestions !== undefined)
    var options = props.results.suggestions.map(r => (
      <li class="list-group-item mx-auto"
      style = {{'width': '50%'}}
        key={r.value}>
            {r.value}
      </li>
    ))
    return <ul class="list-group" style={{'listStyleType': 'none'}}>{options}</ul>
}

export default Suggestions
