import React from 'react';
import './App.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Console from '../components/Console';
import Featured from '../components/Featured';
import projects from '../projects';

function App() {
  function renderFeatured(key, id) {
    const item = projects[key];
    var align;
    if(id % 2 === 0) {
      align = "left";
    }
    else {
      align = "right";
    }
    if(item.featured)
      return(
        <Featured
          thumbnail={item.thumbnail}
          align={align}
          title={key}
          description={item.description}
          techStack={item.techStack}
          github={item.links.github}
          external={item.links.external} />
      );
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Console />
      {Object.keys(projects).map((key, id) =>
        <div key={key}>{renderFeatured(key, id)}</div>
      )}
      {/* <Featured 
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
        external="https://www.google.com" /> */}
    </div>
  );
}

export default App;
