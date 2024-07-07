import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/G5.jpg"

const About = () => {
  return (
    <>
      <Navbar />

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="circle">
                <center className="image"><img src={myImage}/></center>
                </div>
             
            </div>
            <div className="col-lg-8">
             
              <div className="card-box p-3 ">
           <center><h4 className="text text-secondary text-white fw-bold">ABOUT <span className="alex bg-violet">ME</span></h4></center>
              <h5 className="text-secondary text-white fw-bold">Education</h5>
              <div clasName="education-content">
              <div className="card-shadow p-3 ">
                <div className="content text-white">
                <h6 className="fw-bold">Primary</h6>
                  <div className="year"><i className='bx-bxs-calendar'></i>2012-2013</div>
                  <p>Pres. Osmena Elementary School</p>
                </div>
                </div>
                <h5 className="text-secondary text-white fw-bold"></h5>
                <div className="card-shadow2 p-3 ">
                <div className="content text-white">
                  <h6 className="fw-bold">Secondary</h6>
                  <div className="year"><i className='bx-bxs-calendar'></i>2018-2019</div>
                  <p>Florentino Galang Sr. National High School</p>
                </div>
                </div>
                <h5 className="text-secondary text-white fw-bold"></h5>
                <div className="card-shadow p-3">
                <div className="content text-white">
                <h6 className="fw-bold">Tertiary</h6>
                  <div className="year"><i className='bx-bxs-calendar'></i>2023-2024</div>
                  <p>Central Philippines State University-Main</p>
                </div>
                </div>
                </div>
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

export default About;
