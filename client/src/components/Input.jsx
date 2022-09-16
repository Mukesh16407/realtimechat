import React, { useState } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
export const Input = () => {
  const [chekButton,setCheckButton] = useState(false);

  const handleCheckButton =(e)=>{
    
    if(e.target.value){
      setCheckButton(true)
      

    }else{

      setCheckButton(false);
    }
    
  }
  return (
    <div  className="input">
       <div className="send">
        <EmojiEmotionsOutlinedIcon/>
        <AttachFileOutlinedIcon/>
      </div>
      <input  type="text"placeholder="Type something..."onChange={handleCheckButton}/>
      <div className='mic'>
       {chekButton?<NavigateNextRoundedIcon/>:<MicNoneOutlinedIcon/>}
      </div>
      
    </div>
  )
}
