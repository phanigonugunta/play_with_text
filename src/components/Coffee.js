import React from 'react'
import TextForm from './TextForm'
import alert from './Alert'

function Coffee(prop) {
    const LowerClicked = () => {
        // console.log(prop.myprop1.toLowerCase());
        const text = prop.myprop1;
        navigator.clipboard.writeText(text);
        // prop.myprop2(prop.myprop1.split(/[ ]+/).join(" "));
        prop.myprop3("Text Copied to Clipboard","success");
        
    }
  return (
    <>
        
            <button className="btn btn-primary mx-2" onClick={LowerClicked}>Copy Text</button>
        
    </>
  )
}

export default Coffee;