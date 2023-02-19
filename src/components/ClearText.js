import React from 'react'
import TextForm from './TextForm'
import alert from './Alert'

function ClearText(prop) {
    const LowerClicked = () => {
        // console.log(prop.myprop1.toLowerCase());
        prop.myprop2("");
        prop.myprop3("Text Cleared","success");
        
    }
  return (
    <>
        
            <button className="btn btn-primary mx-2" onClick={LowerClicked}>Clear Text</button>
        
    </>
  )
}

export default ClearText;