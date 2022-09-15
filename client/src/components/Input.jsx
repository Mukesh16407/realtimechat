import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
export const Input = () => {
  return (
    <div  className="input">
       <div className="send">
        <EmojiEmotionsOutlinedIcon/>
        <AttachFileOutlinedIcon/>
      </div>
      <input  type="text"placeholder="Type something..."/>
      <div className='mic'>
        <MicNoneOutlinedIcon/>
        <NavigateNextRoundedIcon/>
      </div>
    </div>
  )
}
