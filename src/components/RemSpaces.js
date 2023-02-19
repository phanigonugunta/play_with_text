import React from 'react'
import TextForm from './TextForm'
import alert from './Alert'

function RemSpaces(prop) {
    const LowerClicked = () => {
        // console.log(prop.myprop1.toLowerCase());
        prop.myprop2(prop.myprop1.split(/[ ]+/).join(" "));
        prop.myprop3("Removed Spaces","success");
        
    }
  return (
    <>
        
            <button className="btn btn-primary mx-2" onClick={LowerClicked}>Remove Spaces</button>
        
    </>
  )
}

export default RemSpaces;