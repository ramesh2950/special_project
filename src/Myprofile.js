import React, { Component } from 'react';
import './MyProfile.css';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  toggleReadMore = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    const { showMore } = this.state;

    return (
      <div className="profile-container">
        <img src="/profilepic.jpeg" alt="Profile" className="profile-picture" />
        <h1>Ramesh Avula</h1>
        
        <p className="bio">
          {showMore
            
            ? "Experienced Software Developer with a demonstrated history of working in the software and marketing industry. Skilled in emerging front-end Javascript frameworks like React, Vue and Angular, Databases, HTML, and Agile and Waterfall Methodologies. Strong engineering professional with a Master's degree focused in Computer Science from Bradley University."
            : "Experienced Software Developer with a demonstrated history..."}
        </p>
        <button onClick={this.toggleReadMore} className="toggle-button">
          {showMore ? 'Show Less' : 'Read More'}
        </button>

        <h2>Highlighted Projects</h2>
        <div className="projects">
          <div className="project">
            <img src="WhatsApp Image 2024-11-06 at 15.33.23 (7).jpeg" alt="React App" />
            <h3>React App</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</p>
            <a href="#!" className="project-link">Project Link</a>
          </div>
          <div className="project">
            <img src="api.jpeg" alt="API" />
            <h3>API</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</p>
            <a href="#!" className="project-link">Project Link</a>
          </div>
          <div className="project">
            <img src="os.jpeg" alt="Operating Systems" />
            <h3>Operating Systems</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</p>
            <a href="#!" className="project-link">Project Link</a>
          </div>
        </div>

        <h2>Connect with me!!!</h2>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="git.jpeg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.jpeg" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="twitter.jpeg" alt="Twitter" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="insta.jpeg" alt="Instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default MyProfile;
