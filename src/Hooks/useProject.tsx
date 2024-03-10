import { useState, useEffect } from 'react';
import { CardObject } from '../Types/types';

export default function useProject(initialValue = 0, waitFunction : (time : number) => void, card : CardObject) {
  const [project, setProject] = useState(initialValue)

  useEffect(() => {
    setProject(initialValue)
  }, [initialValue, card])

  const handleChangeProject = (direction : boolean) => {
    waitFunction(15)
    if (direction) {
      setProject(value => { 
        return ( value + 1 ) % card.projects.length
      })
    } else {
      setProject(value => { 
        const newValue = value - 1
        if (newValue < 0) return card.projects.length - 1
        else return newValue
      })
    }

    return (card.projects.length === 1) ? false : true
  }

  // Retornar el estado del contador y las funciones para manipularlo
  return {
    project,
    handleChangeProject
  };
}
