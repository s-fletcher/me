import React from 'react';
import './App.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Console from '../components/Console';
import Featured from '../components/Projects/Featured';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Console />
      <Featured 
        align="left" 
        thumbnail={require("../images/hacklahoma-registration-thumbnail.png")}
        title="Hacklahoma Registration" 
        description="A heavily edited version of Quill, a registration system for attendees to register for a hackathon. This system was built for Hacklahoma and could be called Quill 2.0"
        techStack={["Node.js", "Heroku", "Mongo"]}
        github="https://www.google.com"
        external="https://www.google.com"  />
      <Featured
        align="right"
        thumbnail={require("../images/hacklahoma-registration-thumbnail.png")}
        title="Hacklahoma Registration"
        description="A heavily edited version of Quill, a registration system for attendees to register for a hackathon. This system was built for Hacklahoma and could be called Quill 2.0"
        techStack={["Node.js", "Heroku", "Mongo"]}
        github="https://www.google.com"
        external="https://www.google.com" />
    </div>
  );
}

export default App;
