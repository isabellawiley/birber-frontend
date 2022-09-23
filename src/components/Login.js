import { useState } from "react";

function Login({ onLogin }){
    const [name,setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/birders?name=${name}`)
            .then((r) => r.json())
            .then(users => {
                if (users.length > 0) {
                    onLogin(users[0]);
                }
            });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;