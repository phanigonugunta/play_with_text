import React from 'react'
import TextForm from './TextForm'
import alert from './Alert'

function LowerCase(prop) {
    const LowerClicked = () => {
        // console.log(prop.myprop1.toLowerCase());
        prop.myprop2(prop.myprop1.toLowerCase());
        prop.myprop3("Converted to LowerCase","success");
    }
  return (
    <>
            <button className="btn btn-primary mx-2" onClick={LowerClicked}>Convert to Lower Case</button>
    </>
  )
}

export default LowerCase