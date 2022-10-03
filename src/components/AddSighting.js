import { useState } from "react";

function AddSighting({onAddSighting, currentUser}){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: name,
            location: location,
            image: image,
            likes: 0,
            birderId: currentUser.id
        };
        fetch(`http://localhost:3000/sightings`, { // understand fetch and promise
            method: "POST",
            headers: {
                "Content-Type": "application/json", // why ?
            },
            body: JSON.stringify(formData), // why ?
        })
        .then((r) => r.json()) // why
        .then((newSighting) => {
            onAddSighting(newSighting);
        })
    }

    return(
        <div>
            <h2>New Sighting</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name = "name"
                    placeholder="Bird Name"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name = "location"
                    placeholder="Sighting Location"
                    value={location}
                    onChange = {(e) => setLocation(e.target.value)}
                />
                <input
                    type="text"
                    name = "image"
                    placeholder="Image Url"
                    value={image}
                    onChange = {(e) => setImage(e.target.value)}
                />
                <button type="submit">Add Sighting</button>
            </form>
        </div>
    );
}

export default AddSighting;