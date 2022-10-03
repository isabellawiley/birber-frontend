import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import { useState } from "react";

function App() {
    const [user, setUser] = useState(null);
    console.log(user);

    function handleLogin(newUser) {
        setUser(newUser);
    }

    //if user is not logged in, show login form
    if(!user){
        return <Login onLogin={handleLogin} />;
    }
    //otherwise, show rest of app
    return (
    <div className="App">
        <Login onLogin={handleLogin} />
        <Header />
        <Home currentUser = {user} />
    </div>
    );
}

export default App;