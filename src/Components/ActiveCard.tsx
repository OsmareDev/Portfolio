import { CardObject } from "../Types/types"
import "../Styles/ActiveCard.css"
import "../Styles/Television.css"
import { arrotRight } from "../assets/svg/Shapes/ArrowRightSVG";
import { arrotLeft } from "../assets/svg/Shapes/ArrowLeftSVG";
import { clickSVG } from "../assets/svg/Shapes/ClickSVG";

interface PropTypes {
  card: CardObject;
  loading?: boolean;
  project: number;
  wait: (seconds : number) => void;
  handleChange: () => void;
  handleChangeProject: (right : boolean) => void;
}

export default function ActiveCard({
  card,
  loading = false,
  project,
  handleChange,
  handleChangeProject
} : PropTypes) {
  

  return <>

    <div className="Allwrapper">
      <div className="TVwrapper">
        <div className="TVdetails" />
        <div className="TVborder">
          <span className="TVscanlines" />
        </ div>
        {
          !loading && 
        <a href={card.projects[project]?.projectUrl} target="_blank" className="TVborder" style={{opacity: "1", backgroundImage:"none"}}>
          <div style={{backgroundImage: "url("+card.projects[project]?.imageUrl+")"}} className="TVscreen" />
          <div className="TVchannel">Ch {project + 1}/{card.projects.length}</div>
          <div className="TVTitle">{card.name}</div>
          <div className="TVShow">{card.projects[project]?.title}</div>
          <span className="TVscanlines" />
        </a>
        }
      </div>
      <div className="VHSWrapper">
        <span className="VHSdecoration" />
        <span className="VHSreproductor" > OsmareDev </span>
        <span className="VHSText" > 
          { loading ? "loading..." : "play" } 
          <span  className="VHSGlass"/>
        </span>
        <span className="VHSbuttons" >
          <button onClick={() => handleChangeProject(true)} disabled={loading || card.projects.length == 1} className="VHSButton VHSButtonRight">
            <div className="VHSButtonLight"/>
            { arrotRight }
          </button>
          <button onClick={() => handleChangeProject(false)} disabled={loading || card.projects.length == 1} className="VHSButton VHSButtonLeft">
            <div className="VHSButtonLight"/>
            { arrotLeft }
          </button>
          <button onClick={handleChange} className="VHSButton VHSButtonPlay">
            <div className="VHSButtonLight"/>
            { clickSVG }
          </button>
        </ span>
      </div>
    </div>

    {/* <div className="activeCard">
      <a href={card.projects[project]?.projectUrl} style={{
        //animation: loading ? "spiningAnimation 1s linear infinite" : "",
        backgroundImage: loading ? `url(${STATIC_GIF})` : `url(${card?.projects[project]?.imageUrl})`,
        opacity: loading ? "0.4" : "0.7",
        width: "100%",
        height: "100%",
        position: "absolute"
      }}>
        <span className="insideBorder"/>
      </a>
      <p className="titleText">{
        loading ? "---" : card.name
      }</p>
      <p className="titleText" style={{top: "8%"}}>{
        loading ? "---" : card.projects[project]?.title
      }</p>
      {(card.projects.length > 1 && !loading) && <p className="titleText" style={{right:"7%", textAlign: "end"}}>{project + 1}/{card.projects.length}</p>}
      {(card.projects.length > 1 && !loading) && <button onClick={() => {handleChangeProject(true)}} className="projButton" style={{right: "30px"}}>{arrotRight}</button>}
      {(card.projects.length > 1 && !loading) && <button onClick={() => {handleChangeProject(false)}} className="projButton" style={{left: "30px"}}>{arrotLeft}</button>}
    </div> */}
  </>
}