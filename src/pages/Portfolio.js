import "./Portfolio.css";
import Navbar from "./Navbar";
import a1Image from "./img/a1.png"
import a2Image from "./img/alfscal.png"
import a3Image from "./img/a2.png"
import a4Image from "./img/gd.jpg"


const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio" className="bg-secondary bg-black">
        <div className="container-fluid mt-3">
      
            <div className="cols">
           <center> <h1 className="text fw-bold text-white mt-3 pt-3">MY <span className="alex bg-violet">PROJECTS</span>
              </h1></center>  
            </div>
            </div>
            <div className="container">
          <div className="row mt-5">
            <hr />
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a4Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-white">SYSTEM INTEGRATION IN REAL WORLD APPLICATIONS</h5>
                <p class="card-text text-white">This was handed over to us on May 2024.</p>
                <center> <a href="https://sg.docworkspace.com/d/sIL2h3vD_Aa6cpLQG" class="btn btn-outlined-brand text-white">Click Here</a></center> 
          </div>
          </div>
          </div>
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a2Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-white">CALCULATOR</h5>
                <p class="card-text text-white">This was given to us on May 2024</p>
                <center> <a href="https://alfeche152001.github.io/alfs/" class="btn btn-outlined-brand text-white">Click Here</a></center> 
          </div>
          </div>
          </div>
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a1Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-white">PORTFOLIO USING REACT JS</h5>
                <p class="card-text text-white">This was given to us on June 2024</p>
              <center>  <a href="https://drive.google.com/file/d/1nWDHr5z-iiGFKBhQiGlMTcJhMy9prs75/view?usp=drive_link" class="btn btn-outlined-brand text-white">Click Here</a></center>
          </div>
          </div>
          </div>
          <div class="col-lg-3 align-items-center justify-content-center">
            <div class="card-lex p-3">
          <img className="onelex" src={a3Image} />
          <div class="card-body">
                <h5 class="card-title fw-bold text-white">CAPSTONE</h5>
                <p class="card-text text-white">The project was given to us on 2024.</p>
                <center> <a href="https://drive.google.com/file/d/1kG8IJQ7givX24-KgNiOPVCTUSJGgtI3_/view?usp=drive_link" class="btn btn-outlined-brand text-white">Click Here</a></center> 
          </div>
          </div>
          </div>
          </div>
            </div>
          </div>
      
    </>
  );
};

export default Portfolio;
