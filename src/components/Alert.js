import React from 'react'

function Alert(props) {
  return (
    <div className={`alert alert-${props.col} alert-dismissible fade show`} role="alert">
         <strong>{props.msg}</strong>
         
    </div>
  )
}

export default Alert