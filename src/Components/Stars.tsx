import "../Styles/Stars.css"

interface PropTypes {
  numStars: number;
}

export default function Stars({
  numStars = 50
} : PropTypes) {

  const stars = []
  for (let i = 0; i < numStars; ++i) {
    const size = `${5 * Math.random()}px`
    stars.push(
      <span 
      key={i}
      style={{ 
        left: window.innerWidth * Math.random(), 
        top: window.innerHeight * Math.random(),
        width: size,
        height: size,
        animationDelay: `${Math.random()}s`
      }} className="skyStar"/>
    )
  }

  return <>
    { stars }
  </>
}