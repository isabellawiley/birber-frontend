import AddSighting from "./AddSighting";
import SightingCard from "./SightingCard";

function SightingList(){
    return(
        <div>
            <SightingCard/>
            <AddSighting/>
        </div>
    );
}

export default SightingList;