import { useRef } from "react"

export default function useTimer(initialState = 0, waitTime = 3) {
  const timer = useRef(initialState)
  const waitTimeValue = useRef(waitTime)
  const timer_wait = (seconds : number) => {
    waitTimeValue.current = seconds
    timer.current = 0
  }

  return {
    timer,
    waitTimeValue,
    timer_wait
  }
}