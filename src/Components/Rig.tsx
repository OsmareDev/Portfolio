import { ReactNode, createRef, useRef, useEffect, MutableRefObject } from "react"
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { Euler, Group, Vector3 } from 'three'

interface PropTypes {
  waitTime?: number;
  transitionTime?: number;
  children: ReactNode;
  rotation?: Euler;
  position?: Vector3;
  numberOfCards?: number;
  handleChangeCard: (cardNumber : number) => void;
  handleLoading: () => void;
  timer: MutableRefObject<number>;
  waitTimeValue: MutableRefObject<number>;
  group: boolean;
  activePosition: number;
  displacement: number;
  timeOfDisplacement: number;
  initialYPos: number;
  seeMe: boolean;
}

const MAX_ROTATION_SPEED = -Math.PI * 1.5

function CheckRotationInRange(rotation : number) {
  if (rotation < -Math.PI ) rotation = (rotation + 2 * Math.PI)
  if (rotation > Math.PI ) rotation = (rotation - 2 * Math.PI)

  return rotation
}

let startPos = 0

export default function Rig({
  waitTime = 2,
  transitionTime = 0.3,
  numberOfCards = 10,
  handleChangeCard,
  handleLoading,
  timer,
  waitTimeValue,
  group,
  activePosition,
  displacement,
  timeOfDisplacement,
  initialYPos,
  seeMe,
  ...rest
} : PropTypes) {
  const ref = createRef<Group>()

  const newTarget = useRef(0)
  const currentRotation = useRef(0)
  const sign = useRef(-1)
  
  const currentDisplacement = useRef(0)
  
  const distanceBetweenObjects = ((Math.PI * 2) / numberOfCards)
  const rotationSpeed = distanceBetweenObjects * 1/transitionTime
  // this will reset everytime that a new card is placed take cara at the momento of making an animation for the loading
  let alreadyClicked = false

  const transitionVelocity = displacement / timeOfDisplacement

  function updateCard(current : number) {
    const numberOfNewCard = (current < 0)
          ? numberOfCards - Math.floor(((current + 2*Math.PI) / (2* Math.PI)) * numberOfCards)
          : numberOfCards - Math.floor(((current) / (2* Math.PI)) * numberOfCards)

    handleChangeCard(numberOfNewCard % numberOfCards)
  }

  useEffect(() => {
    const handleScroll = (event : WheelEvent) => {
      event.preventDefault
      currentRotation.current -= event.deltaY * 0.0001
      sign.current = Math.sign(-event.deltaY)
      handleLoading()
      newTarget.current = Math.round(currentRotation.current / distanceBetweenObjects) * distanceBetweenObjects + (sign.current * distanceBetweenObjects)
    };

    const handleDragStart = (event : TouchEvent) => {
      event.preventDefault
      startPos = event.touches[0].pageX
    }

    const handleDrag = (event : TouchEvent) => {
      event.preventDefault
      const movement = (event.touches[0].pageX - startPos) * 0.00001
      currentRotation.current -= movement
      sign.current = Math.sign(event.touches[0].pageX - startPos)
      handleLoading()
      newTarget.current = Math.round(currentRotation.current / distanceBetweenObjects) * distanceBetweenObjects + (sign.current * distanceBetweenObjects)
    }

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleDragStart)
    window.addEventListener('touchmove', handleDrag)

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleDragStart)
      window.removeEventListener('touchmove', handleDrag)
    };
  }, [distanceBetweenObjects, handleLoading]);

  const onCardClick = (event : ThreeEvent<MouseEvent>) => {
    if (ref.current == null) return
    if (alreadyClicked) return

    const pos = event.object.parent?.parent?.position ?? new Vector3(0,0,0)
    const worldPos = new Vector3()
    event.object.getWorldPosition(worldPos)
    const angle = Math.atan2(pos.x, pos.z)

    if (newTarget.current == -angle) {
      timer.current = 0
      return
    }

    handleLoading()
    if (worldPos.x > 0) sign.current = -1
    else sign.current = 1
    
    waitTimeValue.current = waitTime * 5
    newTarget.current = -angle
    alreadyClicked = true
  }

  useFrame((state, delta) => {
    if (ref.current == null) return


    // if the group must change positions
    if (group && currentDisplacement.current != displacement) {
      // rotates while the transition is ocurring
      currentRotation.current += MAX_ROTATION_SPEED * delta
      currentRotation.current = CheckRotationInRange(currentRotation.current)
      ref.current.rotation.y = currentRotation.current

      // moves towards the desired displacement
      const frameDisplacement = transitionVelocity * delta
      ref.current.position.y += frameDisplacement
      currentDisplacement.current += frameDisplacement

      // checks if the transition has finished
      if (currentDisplacement.current >= displacement) {
        currentDisplacement.current = displacement
        newTarget.current = Math.round(currentRotation.current / distanceBetweenObjects) * distanceBetweenObjects
      }
    }
    else if (!group && currentDisplacement.current != 0) {
      // rotates while the transition is ocurring
      currentRotation.current += MAX_ROTATION_SPEED * delta
      currentRotation.current = CheckRotationInRange(currentRotation.current)
      ref.current.rotation.y = currentRotation.current

      // moves towards the desired displacement
      const frameDisplacement = transitionVelocity * delta
      ref.current.position.y -= frameDisplacement
      currentDisplacement.current -= frameDisplacement

      // checks if the transition has finished
      if (currentDisplacement.current <= 0) {
        currentDisplacement.current = 0
        newTarget.current = Math.round(currentRotation.current / distanceBetweenObjects) * distanceBetweenObjects - (distanceBetweenObjects)
      }
    }

    ref.current.position.y = Math.round(initialYPos*10 + currentDisplacement.current*10)/10;
    
    // if after the displacement is not in the active position ignore changes
    if (ref.current.position.y != activePosition) return

    // update the timer
    timer.current += delta

    // check if its time for a new target
    if (timer.current > waitTimeValue.current) {
      // then we need to update the target to the next one
      newTarget.current -= distanceBetweenObjects
      // set the new wait time to the default value
      waitTimeValue.current = waitTime
      // set the card to loading
      handleLoading()
    }

    // check if the rotation need to be reset
    currentRotation.current = CheckRotationInRange(currentRotation.current)
    newTarget.current = CheckRotationInRange(newTarget.current)

    // if (currentRotation.current < -Math.PI ) currentRotation.current = (currentRotation.current + 2 * Math.PI)
    // if (currentRotation.current > Math.PI ) currentRotation.current = (currentRotation.current - 2 * Math.PI)

    // if (newTarget.current < -Math.PI ) newTarget.current = (newTarget.current + 2 * Math.PI)
    // if (newTarget.current > Math.PI ) newTarget.current = (newTarget.current - 2 * Math.PI)

    // check if the new target isnt the current
    if (newTarget.current != currentRotation.current) {
      // in that case we will check if its close enough
      if (currentRotation.current < newTarget.current + rotationSpeed * delta && currentRotation.current > newTarget.current - rotationSpeed * delta)  {
        // if thats the case we will position the rotation right where the target is
        currentRotation.current = newTarget.current
        // we will reset the sign
        sign.current = -1
        // update the card
        updateCard(newTarget.current)
      } else {
        // if it isnt close we need to update the position towards the target
        currentRotation.current += sign.current * rotationSpeed * delta
      }

      // at the end we set the timer to 0 again
      timer.current = 0
    }

    // currentRotation.current = -scroll.offset * (Math.PI * 2) // Rotate contents
    state.events.update // Raycasts every frame rather than on pointer-move
    state.camera.lookAt(0, 0, 0) // Look at center
    ref.current.rotation.y = currentRotation.current;
  })

  return <>
    {!seeMe && <group ref={ref} onClick={onCardClick} {...rest}/>}
  </>
}