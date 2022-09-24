import { useEffect, useState } from "react";

function BirderList({onSelectBirder}){
    const [birders, setBirders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/birders`)
            .then((r) => r.json())
            .then((birdersArray) => setBirders(birdersArray))
    }, []);

    return (
        <div>
            <ul>
                {birders.map((birder) => (
                    <li key={birder.id} onClick={() => onSelectBirder(birder)}>{birder.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BirderList;