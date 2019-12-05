import React from 'react';
import './App.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Console from '../components/Console';
import Featured from '../components/Featured';
import Projects from '../components/Projects'
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
      <Projects />
    </div>
  );
}

export default App;
