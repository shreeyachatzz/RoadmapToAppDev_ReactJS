import React, { Fragment } from 'react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import BuildApp from './BuildApp';
import GSback from '../GetStarted/GSback';
import PickaLang from "./PickaLang";
import RepoHosting from './RepoHosting';
import TheFundamentals from './TheFundamentals';
import VersionControl from './VersionControl';

function Index(){

  const [openModal, setOpenModal]= useState(false);
  const [openDev, setOpenDev]= useState(false);
  const [openVersion, setOpenVersion]= useState(false);
  const [openRepo, setOpenRepo]= useState(false);
  const [openBuild, setOpenBuild]= useState(false);
  const [openBack, setOpenBack]= useState(false);

    function ModalClose(){
        setOpenModal(false);
        setOpenBack(false);
    }
    function DevClose(){
        setOpenDev(false);
        setOpenBack(false);
    }
    function VerClose(){
        setOpenVersion(false);
        setOpenBack(false);
    }
    function RepoClose(){
        setOpenRepo(false);
        setOpenBack(false);
    }
    function BuildClose(){
        setOpenBuild(false);
        setOpenBack(false);
    }

    return(
        <Fragment>
        <GSback open={openBack} onClose={()=> setOpenBack(false)}/>
           <header>
            <img src="assets/images/pexels-uzunov-rostislav-10458835.jpg" className="banner"/>
            <div className="logo">App Dev Roadmap</div>
            </header>
            <div>
  
            <section className="timeline-section">
                <div className="timeline-items">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <button className="timeline-content" data-aos="fade-up" onClick={() => {setOpenModal(true);setOpenBack(true)}}>
                            <h3>Pick a language</h3>
                        </button>
                        <PickaLang open={openModal} onClose={ModalClose}/>
                    </div>
                    <div className="timeline-item" >
                        <div className="timeline-dot"></div>
                        <button className="timeline-content" data-aos="fade-up" onClick={() => {setOpenDev(true);setOpenBack(true)}}>
                            <h3>The Dev Fundamentals    <span className="to-right"></span> </h3>
                        </button>
                        <TheFundamentals open={openDev} onClose={DevClose}/>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <button className="timeline-content" data-aos="fade-up" onClick={() => {setOpenVersion(true);setOpenBack(true)}}>
                            <h3>Version Control Systems</h3>
                        </button>
                        <VersionControl open={openVersion} onClose={VerClose}/>
                    </div>
                    
                    {/* REPO */}
                    <div className="timeline-item" onClick={(e)=>{e.stopPropagation()}}>
                        <div className="timeline-dot"></div>
                        <button className="timeline-content" data-aos="fade-up" onClick={() => {setOpenRepo(true);setOpenBack(true)}}>
                            <h3>Repo Hosting Services</h3>
                        </button>
                        <RepoHosting open={openRepo} onClose={RepoClose}/>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <button className="timeline-content" data-aos="fade-up" onClick={() => {setOpenBuild(true);setOpenBack(true)}}>
                            <h3>Build an Application</h3>
                        </button>
                        <BuildApp open={openBuild} onClose={BuildClose}/>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <Link to="/getStart" target="_blank" rel="noopener noreferrer">
                            <button className="timeline-content" data-aos="fade-up">
                                <h3>Start Your Dev Journey</h3>
                            </button>
                        </Link>
                        
                        
                    </div>

                </div>
            </section>
            <p className="foot">website by <a href="https://github.com/shreeyachatzz" target="_blank" rel="noopener noreferrer">shreeya chatterji</a></p>
            </div>
            <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
            <script src="./assets/style.js"></script>
        </Fragment>
    )
}

export default Index;