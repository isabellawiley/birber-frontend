import { useEffect, useState } from "react";
import AddSighting from "./AddSighting";
import SightingCard from "./SightingCard";

function SightingList( { activeBirder, currentUser }){
    const [sightings, setSightings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/birders/${activeBirder.id}/sightings`)
        .then(r => r.json())
        .then((sightingsArray) => setSightings(sightingsArray))
    }, [activeBirder.id]);

    const sightingCards = sightings.map(sighting =>
        <SightingCard key={sighting.id} sighting={sighting}/>
        )

    function handleNewSighting(newSighting) {
        const updatedSightings = [...sightings, newSighting];
        setSightings(updatedSightings);
    }

    return(
        <div>
            <AddSighting onAddSighting = {handleNewSighting} currentUser={currentUser}/>
            {sightingCards}
        </div>
    );
}

export default SightingList;