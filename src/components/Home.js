import { useState } from "react";
import BirderList from "./BirderList";
import SightingList from "./SightingList";

function Home(){
    const [activeBirder, setActiveBirder] = useState(null);
    console.log(activeBirder);

    return(
        <div>
            <BirderList onSelectBirder={setActiveBirder}/>
            {activeBirder ? <SightingList activeBirder={activeBirder}/>: null}
        </div>
    );
}

export default Home;