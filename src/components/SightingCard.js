function SightingCard({sighting}){
    const {image, location, likes, name} = sighting;

    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} style={{width: "400px"}}/>
            <p>{location}</p>
            <p>{likes}</p>
        </div>
    );
}

export default SightingCard;