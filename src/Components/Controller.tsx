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
  handleChangeProject: (value : boolean) => void;
  handleChangeAboutMe: () => void;
}

export default function Controller({
  handleChangeRigs,
  handleChangeProject,
  handleChangeAboutMe
} : PropTypes) {
  const [tip, setTip] = useState(0)

  return <>
    <div className="controllerWrapper">
      <button onClick={handleChangeAboutMe} className='controllerButton1 bigButton' style={{top: "10%"}}> AboutMe </button>
      <button onClick={() => handleChangeProject(false)} className='controllerButton1 sideButton' style={{top: "25%", height: "20%", width: "15%", left: "10%"}}> 
        { arrotLeft }
      </button>
      <button onClick={handleChangeRigs} className='controllerButton1 bigButton' style={{top: "25%", height: "20%", width: "40%"}}> 
        { changeSVG }
      </button>
      <button onClick={() => handleChangeProject(true)} className='controllerButton1 sideButton' style={{top: "25%", height: "20%", width: "15%", right: "10%"}}> 
        { arrotRight }
      </button>

      <button onClick={() => setTip(value => (value + 1) % tips.length)} className='controllerButton1 bigButton' style={{top: "50%"}}> New Tip </button>
      <div className='controllerScreen'>
        <p> { tips[tip] } </p>
      </div>
    </div>
  </>
}