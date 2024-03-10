import "../Styles/Background.css"
import ShootingStars from "./ShootingStars"
import Stars from "./Stars"

export default function Background() {
  return <>
    <div className="sky">
      
    </div>
    <Stars numStars={50} />
    <ShootingStars  numberOfStars={10}/>
    <div className="fog">

    </div>
  </>
}