
import { useParams } from "react-router-dom"

function PetProfile() {
  const params = useParams();
  const pet = params.pet


  return (
    <>
      <h2>{pet}'s Profile</h2>
    </>
  )
}

export default PetProfile