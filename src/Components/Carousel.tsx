import { Billboard } from "@react-three/drei"
import { CardObject } from "../Types/types"
import Card from "./Card"

interface PropTypes {
  cards: CardObject[],
  radius: number,
  click?: () => void
}

export default function Carousel({
  cards,
  radius
} : PropTypes) {

  return <>
  {
    cards.map((card, i) => {
      const count = cards.length
      const angle = (i / count) * Math.PI * 2
      // const scale = Math.abs((angle - Math.PI) / Math.PI) * 2
      return (
      <Billboard key={card.id} position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]} scale={[1.5, 1.5, 1.5]}>
        <Card 
          svg={card.svg}
        />
      </Billboard>)
    })
  }
  </>
}