import "../Styles/Background.css"
import ShootingStars from "./ShootingStars"

export default function Background() {
  return <>
    <div className="sky">
      
    </div>
    <ShootingStars  numberOfStars={20}/>
    <div className="fog">

    </div>
  </>
}