import React from 'react'

function Skill(props) {
  return (
    <div>
      <div style={{backgroundColor: props.color,width:50}}>{props.skills}</div>
    </div>
  )
}
export default Skill
