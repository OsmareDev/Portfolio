import { Canvas } from '@react-three/fiber'

import Rig from './Rig'
import Carousel from './Carousel'
import { TecnologyCards } from '../assets/TecnologyCards'
import { Euler, Vector3 } from 'three'
import ActiveCard from './ActiveCard'
import { useState } from 'react'
import { LanguageCards } from '../assets/LanguageCards'
import Controller from './Controller'
import useProject from '../Hooks/useProject'
import useGroup from '../Hooks/useGroup'
import useCurrentCard from '../Hooks/useCurrentCard'
import useTimer from '../Hooks/useTimer'
import { PersonalCard } from '../assets/PersonalCard'

const WAIT_TIME = 3

export default function Scene() {
  
  const [loading, setLoading] = useState(false)
  const handleLoading = () => {
    setLoading(true)
  }

  const {timer, timer_wait, waitTimeValue} = useTimer(0, WAIT_TIME)
  const {group, cards, handleChangeRigs} = useGroup(false, setLoading)
  const {currentCard, handleChangeCard, setCurrentCard, setLastCard} = useCurrentCard(cards[0], cards, setLoading)
  const {project, handleChangeProject} = useProject(0, timer_wait, currentCard)

  const [seeMe, setSeeMe] = useState(false)
  const handleSeeMe = () => {

    timer_wait( (!seeMe) ? 1000 : 3 )
    setLoading(false);
    (!seeMe) ? setCurrentCard(PersonalCard) : setLastCard()
    setSeeMe(value => !value)
  }
  
  
  return <>
    <Canvas style={{height: "100vh"}}>
      <Rig 
        waitTimeValue={waitTimeValue} 
        timer={timer} 
        handleChangeCard={handleChangeCard} 
        handleLoading={handleLoading} 
        position={new Vector3(0, 2.5, -10)} 
        rotation={new Euler(0, 0, 0.03)} 
        numberOfCards={TecnologyCards.length} 
        transitionTime={0.5} 
        waitTime={3}
        group={group}
        displacement={22}
        timeOfDisplacement={1}
        activePosition={2.5}
        initialYPos={2.5}
        seeMe={seeMe}>
        <Carousel cards={TecnologyCards} radius={10}/>
      </Rig>

      <Rig 
        waitTimeValue={waitTimeValue} 
        timer={timer} 
        handleChangeCard={handleChangeCard} 
        handleLoading={handleLoading} 
        position={new Vector3(0, -20.4, -10)} 
        rotation={new Euler(0, 0, 0.03)} 
        numberOfCards={LanguageCards.length} 
        transitionTime={0.5} 
        waitTime={3}
        activePosition={2.4}
        group={group}
        displacement={22.8}
        timeOfDisplacement={1}
        initialYPos={-20.4}
        seeMe={seeMe}>
        <Carousel cards={LanguageCards} radius={10}/>
      </Rig>
    </Canvas>

    <ActiveCard 
      handleChange={handleChangeRigs} 
      wait={timer_wait} 
      card={currentCard} 
      loading={loading}
      handleChangeProject={(seeMe) ? () => {} : handleChangeProject}
      project={project}/>

    <Controller 
      handleChangeAboutMe={handleSeeMe}
      handleChangeProject={handleChangeProject}
      handleChangeRigs={(seeMe) ? () => {} : handleChangeRigs} />
  </>
}