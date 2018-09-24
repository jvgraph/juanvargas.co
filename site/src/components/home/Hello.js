import React, {Component} from 'react';
import "./hello.scss"
class Hello extends Component {
  render() {
    return (
      <div className={`hello section`}>
        <div className='about--section section'>
          <h1 className="page--title">
            Hello
            <span>.</span>
          </h1>
          <div className="copy">

            <h2>My name is Juan Vargas, a web developer based in New York City.</h2>

            <p>I am a web designer & front-end developer, with a passion for creating a
              better web for tomorrow.</p>

            <p>I am an alumnus of New York City College of Technology, graduating with a
              Bachelors of Communications Design. Originally from the Dominican Republic but
              now residing in New York City, I’m looking to grow personally and professionally
              anywhere in the world.
            </p>
            <p>I want to be involved in amazing projects, join an astounding team and
              advance my development career. Take some time to look at my work. Critics are
              more than welcome, and if you’re interested in working together, let’s get in
              touch.
            </p>
            <div className="fav--quote">

              <blockquote>
                Logic will get you from A to B. Imagination will take you everywhere. 
                <div className="name">-Albert Einstein</div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;