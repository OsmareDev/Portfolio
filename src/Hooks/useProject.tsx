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
        const newValue = value + 1
        if (newValue >= card.projects.length) return 0
        else return newValue
      })
    } else {
      setProject(value => { 
        const newValue = value - 1
        if (newValue < 0) return card.projects.length - 1
        else return newValue
      })
    }
  }

  // Retornar el estado del contador y las funciones para manipularlo
  return {
    project,
    handleChangeProject
  };
}
