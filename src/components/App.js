import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import the user data
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass data from the user object as props to the Home component */}
      <Home name={user.name} city={user.city} />
      {/* Pass the 'bio', 'github', and 'linkedin' data as props to the About component */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
