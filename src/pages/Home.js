import "./Home.css";
import Navbar from "./Navbar";
import myImage from "./img/G8.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <Navbar />
     <div className="wrapper">
      <div className="overlay"> 
      <div className="container1">


      <div id="home-info">
      
      <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-2 text-white fw-bold">Hi I'm <span className="alex">Gerian</span></h1>
                    <p className="text">Make-up Artist!</p>
                    <p className="text-white">Welcome to my makeup artistry portfolio! As a passionate student honing my craft, I’m excited to share my journey, projects, and experiences—let’s create something beautiful together!</p>
                    <a href="https://www.facebook.com/daralfeche" className="btn btn-brand">Hire Me</a>
                    <a href="https://www.instagram.com/alexalfeche?igsh=Mzlhc29vYnYyaWl6" className="btn btn-brand">Let's Talk</a>
                    <div className="social-icons">
                    <a href="https://www.facebook.com/daralfeche" target="_blank" rel="noopener noreferrer" className="btns btn-social">
                        <FontAwesomeIcon icon={faFacebook} size="1x" className="facebook" />
                      </a>
                      <a href="https://www.instagram.com/alexalfeche?igsh=Mzlhc29vYnYyaWl6" target="_blank" rel="noopener noreferrer" className="btns btn-social">
                        <FontAwesomeIcon icon={faInstagram}  size="1x" className="instagram" />
                      </a>
                      <a href="https://youtube.com/@dars_tv?si=6Sb1N91qjWZ-OtZ-" target="_blank" rel="noopener noreferrer" className="btns btn-social">
                        <FontAwesomeIcon icon={faYoutube} size="1x" className="youtube" />
                      </a>
                </div>
                </div>
                
            <div className="col-lg-6 img">
               <img src={myImage}/>
            </div>
          </div>
        </div>
      </div>
     
        </div>
       </div>
      </div>

      
    </>
  );
};

export default Home;
