import face1 from "../img/person1-1.jpg"
import face2 from "../img/person2-2.jpg"
import face3 from "../img/person3-3.jpg"

const Photo = () => {
  
  return(
    <>
    <div>
      <ul className="grid-cols-3 grid gap-4">
        <li>
        <img id="small" src={face1} alt="인물보정1"/>
        </li>
        <li>
        <img src={face2} alt="인물보정2"/>
        </li>
        <li>
        <img src={face3} alt="인물보정3"/>
        </li>
      </ul>
    </div>
    <div className="w-full h-3/5" id="big">

    </div>
    
    
    
    </>
  )
}

export default Photo;