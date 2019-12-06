import React from 'react';
import './App.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Console from '../components/Console';
import Featured from '../components/Featured';
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import projects from '../projects';

class App extends React.Component {
  aboutRef = React.createRef();
  projectsRef = React.createRef();
  contactRef = React.createRef();

  // Render featured projects
  renderFeatured(key, id) {
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
          external={item.links.external} 
          award={item.award}
          awardText={item.awardText} />
      );
  }
  render() {
    return (
      <div className="App">
        <Navbar aboutRef={this.aboutRef} projectsRef={this.projectsRef} contactRef={this.contactRef} />
        <Header />
        <Console aboutRef={this.aboutRef} />
        <div ref={this.projectsRef} />
        {/* Mapping through json to render featured projects */
        Object.keys(projects).map((key, id) =>
          <div key={key}>{this.renderFeatured(key, id)}</div>
        )}
        <Projects projectsRef={this.projectsRef} />
        <Contact contactRef={this.contactRef} />
        <Footer />
      </div>
    );
  }
}

export default App;
