import { ThreeEvent, useFrame } from "@react-three/fiber"
import { ReactElement, useRef, useState } from "react"
import { easing } from "maath"
import { Html, Plane } from "@react-three/drei"
import * as THREE from "three"
import "../Styles/Card.css"
import { CircleSVG } from "../assets/svg/Shapes/CircleSVG"

interface PropTypes {
  svg: ReactElement;
  scale?: THREE.Vector3;
  onClick?: () => void;
}

export default function Card({ 
  svg, 
  scale,
  ...props 
  } : PropTypes) {
    
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, hover] = useState(false)
  
  const pointerOver = (e : ThreeEvent<PointerEvent>) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)

  useFrame((_, delta) => {
    if (ref.current == null) return;

    easing.damp(ref.current.material, 'opacity', hovered ? 1 : 0, 0.15, delta)
  })
  return (
    <>
      {/* <Image url={url} scale={scale} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props} /> */}
      {/* <Image ref={ref} url={"/svgs/circle.svg"} scale={[1.5, 1.5]} position={[0, 0, -0.02]} transparent onPointerOver={pointerOver} onPointerOut={pointerOut}/> */}
      <Plane args={[1.5, 1.5]} position={[0, 0, -0.02]} onPointerOver={pointerOver} onPointerOut={pointerOut} 
        material={new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.0 })}
        />
      <Html center pointerEvents="none" scale={scale} zIndexRange={[3, -100]} {...props} wrapperClass="carouselCard" distanceFactor={15} style={{pointerEvents:"none"}}>
        <div style={{position:"relative", width: "100px", height: "100px"}}>
          { hovered && CircleSVG }
          { svg }
        </div>     
      </Html>
    </>
  )
}