import React,{useState} from 'react'
import LowerCase from './LowerCase'
import RemSpaces from './RemSpaces'
import Alert from "./Alert";
import Coffee from "./Coffee";
import Txtclr from "./ClearText";

function TextForm() {

    const [Alertt,setAlertt] = useState({});

  const showAlert = (msg,col) => {
    
    setAlertt({
      message:msg,
      myColor:col
    })
    setTimeout(() => {
      setAlertt({
        message:"",
        myColor:""
      })
    }, 1000);
  
  }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        showAlert("Converted to UpperCase","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter your text here");
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const toggleBtn = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            showAlert("dark mode enabled","success");
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            showAlert("light mode enabled","success");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }
  return (
    <>
    {/* <label htmlFor="ta">Enter your text here:</label> */}
    <Alert msg={Alertt.message} col={Alertt.myColor}/>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" onClick = {toggleBtn} role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">Dark mode</label>
    </div>
    <div className="containerr" mx-4 my-4>
    <textarea className="ta" id="ta" value = {text} onChange={handleOnChange} cols="100" rows="8" style={myStyle}></textarea>
    </div>
    
    
        

        {/* <button className="btn btn-primary" onClick = {toggleBtn}>Toggle color</button> */}
    
    <div className="container3 my-4">
    <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to UpperCase</button>
    <LowerCase myprop1={text} myprop2={setText} myprop3={showAlert}/>
    <RemSpaces myprop1={text} myprop2={setText} myprop3={showAlert}/>
    <Coffee myprop1={text} myprop2={setText} myprop3={showAlert}/>
    <Txtclr myprop1={text} myprop2={setText} myprop3={showAlert}/>
    </div>
    
    </>
  )
}

export default TextForm