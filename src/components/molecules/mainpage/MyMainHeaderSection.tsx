import '../styling/MyMainHeaderSection.css';
import profileImage from '../../../assets/DavidPavlicImage.jpeg';


export const MyMainHeaderSection = () => (
    <header className="portfolio-header">
      <div className="header-content">
        <div className="profile-image-container">
          <img 
            src={profileImage}
            alt="David Pavlic" 
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <h1 className="name">David Pavlic</h1>
          <h2 className="title">Full Stack Software Engineer</h2>
          <p className="summary">
          With 5+ years of professional experience in software engineering, 
          I combine technical expertise in full-stack development with strong client relationship skills. 
          Currently pursuing my Bachelor's in Computer Science at ZHAW while working as a Fullstack Engineer.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/david-pavlic-481743180/" className="social-link">LinkedIn</a>
            <a href="https://github.com/davidpavlic" className="social-link">GitHub</a>
          </div>
        </div>
      </div>
    </header>
);

export default MyMainHeaderSection;