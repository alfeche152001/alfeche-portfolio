import "./Experience.css";
import Navbar from "./Navbar";
import A2Image from "./img/G1.jpg"
import A3Image from "./img/G2.jpg"
import A4Image from "./img/survey2.jpg"
import A5Image from "./img/EV.jpg"
import A6Image from "./img/OJT1.jpg"
import A7Image from "./img/AC.jpg"



const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience" className="bg-secondary bg-black">
        <div className="container-fluid mt-3">
      
            <div className="cols">
             <center> <h1 className="text fw-bold text-white mt-3 pt-3">MY <span className="alex bg-violet">EXPERIENCE</span>
              </h1></center>
            </div>
            </div>
            <div id="experience">
        <div className="container">
          <div className="row mt-5 text-white">
            <h3>ON THE <span className="alex bg-violet">JOB</span> TRAINING</h3>
            <hr />
          <div className="col" >
          <h4 className="mt-5">PC <span className="alex bg-violet">REPAIR</span></h4>
          <img className="uno"  src={A2Image} />
          </div>
          <div className="col">
          <h4 className="mt-5"><span className="alex bg-violet">RING</span> BINDING</h4>
          <img className="dos" src={A3Image} />
          </div>
          <div className="col">
          <h4 className="mt-5">CONDUCTING THE <span className="alex bg-violet">SURVEY</span></h4>
          <img className="tres" src={A4Image} />
          </div>
          <hr />
          <div className="col">
          <h4 className="mt-5">ENCODING THE FACULTY <span className="alex bg-violet">EVALUATION</span></h4>
          <img className="kwatro" src={A5Image} />
          </div>
          <div className="col">
          <h4 className="mt-5">ASSISTING THE <span className="alex bg-violet">GRADUATE</span> STUDENTS</h4>
          <img className="singko" src={A6Image} />
          </div>
          <div className="col">
          <h4 className="mt-5">ASSISTING DURING THE<span className="alex bg-violet"> ACCREDITATION </span> MEETING</h4>
          <img className="says" src={A7Image} />
          </div>
         
        
          </div>
        </div>
      </div>
      </div>
      

     

  </>
  );
};

export default Experience;
