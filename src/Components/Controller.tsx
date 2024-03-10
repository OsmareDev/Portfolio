import { useState } from 'react'
import '../Styles/Controller.css'
import { arrotLeft } from '../assets/svg/Shapes/ArrowLeftSVG'
import { arrotRight } from '../assets/svg/Shapes/ArrowRightSVG'
import { changeSVG } from '../assets/svg/Shapes/ChangeSVG'

const tips = [
  "You can use the arrows to change channel only when there is more than one project in the technology",
  "You can use the scroll wheel to change between technologies",
  "You can press the screen in order to access to the repository of the project",
  "You can select the technology by pressing the icon in the carousel"
]

interface PropTypes {
  handleChangeRigs: () => void;
  handleChangeProject: (value : boolean) => boolean;
  handleChangeAboutMe: () => void;
}

let messagePos = {
  x : 0,
  y : 0
}

let messagetimeout = window.setTimeout(() => {}, 0)

export default function Controller({
  handleChangeRigs,
  handleChangeProject,
  handleChangeAboutMe
} : PropTypes) {
  const [tip, setTip] = useState(0)
  const [seeMessage, setSeeMessage] = useState(false)

  function handleClickButton(direction : boolean) {
    return (event : React.MouseEvent<HTMLElement>) => {
      messagePos = { 
        x: (event.clientX - (7.5 * window.innerWidth / 100)), 
        y: (event.clientY - (8 * window.innerWidth / 100) - 20) }
      setSeeMessage( !handleChangeProject(direction) )

      window.clearTimeout(messagetimeout)
      messagetimeout = window.setTimeout(() => setSeeMessage(false), 2500)
    }
  }

  return <>
    <div 
      style={{
        left: messagePos.x,
        top: messagePos.y,
        opacity: (seeMessage) ? 1 : 0
      }}
      className='controllerHint'>
      <p>The buttons to change the channel only work if the technology has more than one channel</p>
    </div>

    <div className="controllerWrapper">
      <button onClick={handleChangeAboutMe} className='controllerButton1 bigButton' style={{top: "10%"}}> AboutMe </button>
      <button onClick={handleClickButton(false)} className='controllerButton1 sideButton' style={{top: "25%", height: "20%", width: "15%", left: "10%"}}> 
        { arrotLeft }
      </button>
      <button onClick={handleChangeRigs} className='controllerButton1 bigButton' style={{top: "25%", height: "20%", width: "40%"}}> 
        { changeSVG }
      </button>
      <button onClick={handleClickButton(true)} className='controllerButton1 sideButton' style={{top: "25%", height: "20%", width: "15%", right: "10%"}}> 
        { arrotRight }
      </button>

      <button onClick={() => setTip(value => (value + 1) % tips.length)} className='controllerButton1 bigButton' style={{top: "50%"}}> New Tip </button>
      <div className='controllerScreen'>
        <p> { tips[tip] } </p>
      </div>
    </div>
  </>
}