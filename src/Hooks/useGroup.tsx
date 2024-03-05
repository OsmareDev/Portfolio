import { LanguageCards } from "../assets/LanguageCards"
import { TecnologyCards } from "../assets/TecnologyCards"
import { useState } from "react" 


export default function useGroup(initialState = false, setLoading : (value : boolean) => void) {
  const [group, setGroup] = useState(initialState)
  const cards = (group)
    ? LanguageCards
    : TecnologyCards
  
  const handleChangeRigs = () => {
    setLoading(true)
    setGroup(value => !value)
  }

  return {
    group,
    cards,
    handleChangeRigs
  }
}