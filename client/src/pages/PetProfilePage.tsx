// React
import { useParams } from "react-router-dom"

// Utils
import capitalizeString from "../utils/stringAdjustments"

// React Icons
import { IoMaleFemaleSharp } from "react-icons/io5";
import { LuCake } from "react-icons/lu";
import { PiDna, PiFishSimple, PiBone, PiToilet, PiDogFill, PiCat } from "react-icons/pi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { LiaWeightSolid } from "react-icons/lia";
import { FiActivity } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

// CSS
import "../assets/css/PetProfile.css";


function PetProfile() {
  const params = useParams();
  const pet = params.pet ? params.pet : ""


  return (
    <div className="pet-profile">
      <h2>Pet Profile</h2>

      <div className="pet-profile-basic-info">
        <PiDogFill className="pet-profile-pic" />
        <div className="space-between">
          <h3>{capitalizeString(pet)}</h3>
          <IoIosArrowForward />
        </div>

        <div className="pet-profile-basic-info-box">
          <div className="icon-word">
            <IoMaleFemaleSharp className="icon-box" />
            <span>Male</span>
          </div>
          <div className="icon-word2">
            <LuCake className="icon-box" />
            <span>1 yr, 9 mos</span>
          </div>
          <div className="icon-word2">
            <PiDna className="icon-box" />
            <span>German Shepard Mix</span>
          </div>
          <div className="icon-word2">
            <LiaWeightSolid className="icon-box" />
            <span>60 lbs</span>
          </div>
        </div>

      </div>

      <div className="pet-profile-options">
          <div className="icon-word pet-profile-exercise">
            <FiActivity />
            <span>Exercise</span>
          </div>
          <div className="icon-word2 pet-profile-eating">
            <PiBone />
            <span>Eating</span>
          </div>
          <div className="icon-word2 pet-profile-bathroom ">
            <PiToilet />
            <span>Bathroom</span>
          </div>
          <div className="icon-word2 pet-profile-medical">
            <AiOutlineMedicineBox />
            <span>Medical</span>
          </div>
      </div>
    </div>
  )
}

export default PetProfile