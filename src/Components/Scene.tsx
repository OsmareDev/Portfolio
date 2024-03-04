import { Canvas } from '@react-three/fiber'

import Rig from './Rig'
import Carousel from './Carousel'
import { TecnologyCards } from '../assets/TecnologyCards'
import { Euler, Vector3 } from 'three'
import ActiveCard from './ActiveCard'
import { useState, useRef } from 'react'
import { LanguageCards } from '../assets/LanguageCards'

const WAIT_TIME = 3

export default function Scene() {
  const [currentCard, setCurrentCard] = useState(TecnologyCards[0])
  const [loading, setLoading] = useState(false)

  const [group, setGroup] = useState(false)
  const cards = (group)
    ? LanguageCards
    : TecnologyCards

  const timer = useRef(0)
  const waitTimeValue = useRef(WAIT_TIME)

  const wait = (seconds = WAIT_TIME) => {
    waitTimeValue.current = seconds
    timer.current = 0
  }

  const handleChangeCard = (cardNumber : number) => {
    console.log(cardNumber)
    console.log(cards)

    setLoading(false)
    setCurrentCard(cards[cardNumber])
  }

  const handleChangeRigs = () => {
    setLoading(true)
    setGroup(value => !value)
  }

  const handleLoading = () => {
    setLoading(true)
  }

  return <>
    <Canvas style={{height: "100vh"}}>
      <Rig 
        waitTimeValue={waitTimeValue} 
        timer={timer} 
        handleChangeCard={handleChangeCard} 
        handleLoading={handleLoading} 
        position={new Vector3(0, -2.4, -10)} 
        rotation={new Euler(0, 0, 0.03)} 
        numberOfCards={TecnologyCards.length} 
        transitionTime={0.5} 
        waitTime={3}
        activePosition={-2.4}
        group={group}
        displacement={25}
        timeOfDisplacement={1}
        initialYPos={-2.4}>
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
        activePosition={-2.4}
        group={group}
        displacement={18}
        timeOfDisplacement={1}
        initialYPos={-20.4}>
        <Carousel cards={LanguageCards} radius={10}/>
      </Rig>
    </Canvas>

    <ActiveCard 
      handleChange={handleChangeRigs} 
      wait={wait} 
      card={currentCard} 
      loading={loading}/>
  </>
}