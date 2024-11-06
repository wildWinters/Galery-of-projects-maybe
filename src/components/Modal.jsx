import { useState,useEffect } from "react";
import "../css/Modal.css"
import { WindowModal } from "./windowModalError";

export function  Modal() {
const [activation,setActivation] = useState({activation:false,button:true});

function clickModal() {
	setActivation({activation:true,button:false});
}

function disabledClickModal() {
  setActivation({activation:false,button:true});

}
 

  return (
    <>
    {activation.button === true ? 			
      <button className = "Modal" onClick = {clickModal}> 
        <img className = "logo" 
        src = "https://thumbs.dreamstime.com/b/minimalistic-simple-logo-blue-grey-wolf-fox-company-emblem-minimalistic-simple-logo-blue-grey-wolf-316843762.jpg"
        alt = "logo" />activate modal window
      </button> 
      :null 
    }

			{ activation.activation === true ? <WindowModal disabled = {disabledClickModal}/>:null}	
    </>
  )
}


