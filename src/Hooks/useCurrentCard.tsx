import { useRef, useState } from "react";
import { CardObject } from "../Types/types";
import { TecnologyCards } from "../assets/TecnologyCards";

export default function useCurrentCard(initialState = TecnologyCards[0], cards : CardObject[], setLoading : (value : boolean) => void) {
  const [currentCard, setCurrentCard] = useState(initialState)
  const lastCard = useRef(cards[0])

  const handleChangeCard = (cardNumber : number) => {
    setLoading(false)

    lastCard.current = cards[cardNumber]
    setCurrentCard(cards[cardNumber])
  }

  const setLastCard = () => {
    setLoading(false)
    setCurrentCard(lastCard.current)
  }

  return {
    handleChangeCard,
    currentCard,
    setLastCard,
    setCurrentCard
  }
}